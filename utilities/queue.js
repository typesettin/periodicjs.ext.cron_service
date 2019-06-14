const periodic = require('periodicjs');
const path = require('path');
const { fork, } = require('child_process');
const forkedProcesses = new Map();
// const isForked = typeof process.send === 'function';
const isComputeForked = periodic.config.computeForked;

async function getQueueStatus({ forkName = 'crons',  }) {
  let attempts = 0;
  let status = false;
  
  return new Promise((resolve, reject) => {
    try {
      // const forkedProcesses = periodic[ '_utilities_container_repetere-client' ].queue.forkedProcesses;
      const forkedProcesses = periodic.locals.extensions.get('periodicjs.ext.cron_service').queue.forkedProcesses;
      const forked = forkedProcesses.get(forkName);
      if (isComputeForked !== true) {
        let t = setInterval(() => {
          if (status || attempts > 10) clearInterval(t);
          attempts++;
        }, 100);
        forked.on('message', msg => {
          if (msg.event === 'compute-status-response') {
            status = msg.payload.status;
            resolve(status);
            clearInterval(t);
          }
        });
        forked.send({ type: 'compute-status', });
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
}


async function createFork({ name='crons', }) {
  // console.log({ isForked, });
  if (isComputeForked !== true) {
    let execArgv;
    // console.log('CREATING FORK',periodic.config);
    // execArgv = [ '--inspect=9' + String(Math.random()).substr(-3) ];

    const forked = fork(path.join(__dirname, 'compute.js'), [ `--e ${periodic.config.process.runtime}`, '--inspect-brk' ], {
      execArgv,
      env: {
        NODE_ENV: periodic.config.process.runtime,
        USE_SLACK: process.env.USE_SLACK,
        FORKED_CRON_PROCESS: true,
        THREAD_FORK_NAME: name,
        MASTER_THREAD_PID: process.pid.toString(),
      },
    });
    forked.on('message', msg => {
      
      const socketIOServer = periodic.servers.get('socket.io') || {};
      const { server: socketServer, sockets: socketConnections, } = socketIOServer;
      const io = socketServer;
      
      const { event, payload = {}, } = msg;
      const { message, meta, status, level = 'verbose', } = payload;
      switch (event) {
      case 'compute-log':
        meta.status = status;
        periodic.logger[ level ](message, meta);
        break;
      case 'compute-emit':
        io.sockets.emit('stdout', message);
        break;
      }
      // console.log('message from child', { msg, });
    });
    // forked.send({ hello: 'world', });
    forked.on('close', closedData => {
      periodic.logger.error('forked close event: ' + name, closedData);
    });
    forked.on('disconnect', disconnectData => {
      periodic.logger.error('forked disconnect event: ' + name, disconnectData);
    });
    forked.on('error', errorData => {
      periodic.logger.error('forked error event: ' + name, errorData);
    });
    forked.on('exit', exitData => {
      periodic.logger.error('forked exit event: ' + name, exitData);
    });
    forkedProcesses.set(name, forked);
    return forked;
  }
}

module.exports = { 
  forkedProcesses,
  getQueueStatus,
  createFork,
};
