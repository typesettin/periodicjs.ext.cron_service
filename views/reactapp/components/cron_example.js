module.exports = `
<h1><a id="user-content-available-cron-patterns" class="deep-link" href="#available-cron-patterns" aria-hidden="true" rel="nofollow"><svg aria-hidden="true" class="deep-link-icon" height="16" version="1.1" viewbox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Available Cron patterns:</h1>
<pre><code>Asterisk. E.g. *
Ranges. E.g. 1-3,5
Steps. E.g. */2
</code></pre>
<p><a href="http://crontab.org" rel="nofollow">Read up on cron patterns here</a>. Note the examples in the
link have five fields, and 1 minute as the finest granularity, but this library
has six fields, with 1 second as the finest granularity.</p>
<h1><a id="user-content-cron-ranges" class="deep-link" href="#cron-ranges" aria-hidden="true" rel="nofollow"><svg aria-hidden="true" class="deep-link-icon" height="16" version="1.1" viewbox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cron Ranges</h1>
<p>When specifying your cron values you'll need to make sure that your values fall within the ranges. For instance, some cron's use a 0-7 range for the day of week where both 0 and 7 represent Sunday. We do not.</p>
<ul>
<li>Seconds: 0-59</li>
<li>Minutes: 0-59</li>
<li>Hours: 0-23</li>
<li>Day of Month: 1-31</li>
<li>Months: 0-11</li>
<li>Day of Week: 0-6</li>
</ul>
<h1><a id="user-content-another-cron-example" class="deep-link" href="#another-cron-example" aria-hidden="true" rel="nofollow"><svg aria-hidden="true" class="deep-link-icon" height="16" version="1.1" viewbox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Another cron example</h1>
<div class="highlight javascript"><pre class="editor editor-colors"><div class="line"><span class="source js"><span class="storage type js"><span>var</span></span><span> CronJob </span><span class="keyword operator assignment js"><span>=</span></span><span> </span><span class="meta function-call js"><span class="support function js"><span>require</span></span><span class="meta js"><span class="punctuation definition begin round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>'</span></span><span>cron</span><span class="punctuation definition string end js"><span>'</span></span></span><span class="punctuation definition end round js"><span>)</span></span></span></span><span class="meta delimiter period js"><span>.</span></span><span class="variable other js"><span>CronJob</span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span class="storage type js"><span>var</span></span><span> job </span><span class="keyword operator assignment js"><span>=</span></span><span> </span><span class="meta class instance constructor js"><span class="keyword operator js"><span>new</span></span><span> </span><span class="entity name type instance js"><span>CronJob</span></span></span><span class="meta brace round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>'</span></span><span>00 30 11 * * 1-5</span><span class="punctuation definition string end js"><span>'</span></span></span><span class="meta delimiter object comma js"><span>,</span></span><span> </span><span class="meta function js"><span class="storage type function js"><span>function</span></span><span class="meta js"><span class="punctuation definition begin round js"><span>(</span></span><span class="punctuation definition end round js"><span>)</span></span></span></span><span> </span><span class="punctuation definition function begin curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>  </span><span class="comment block js"><span class="punctuation definition comment js"><span>/*</span></span></span></span></div><div class="line"><span class="source js"><span class="comment block js"><span>   * Runs every weekday (Monday through Friday)</span></span></span></div><div class="line"><span class="source js"><span class="comment block js"><span>   * at 11:30:00 AM. It does not run on Saturday</span></span></span></div><div class="line"><span class="source js"><span class="comment block js"><span>   * or Sunday.</span></span></span></div><div class="line"><span class="source js"><span class="comment block js"><span>   </span><span class="punctuation definition comment js"><span>*/</span></span></span></span></div><div class="line"><span class="source js"><span>  </span><span class="punctuation definition function end curly js"><span>}</span></span><span class="meta delimiter object comma js"><span>,</span></span><span> </span><span class="meta function js"><span class="storage type function js"><span>function</span></span><span> </span><span class="meta js"><span class="punctuation definition begin round js"><span>(</span></span><span class="punctuation definition end round js"><span>)</span></span></span></span><span> </span><span class="punctuation definition function begin curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>    </span><span class="comment block js"><span class="punctuation definition comment js"><span>/*</span></span><span> This function is executed when the job stops </span><span class="punctuation definition comment js"><span>*/</span></span></span></span></div><div class="line"><span class="source js"><span>  </span><span class="punctuation definition function end curly js"><span>}</span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>  </span><span class="constant language boolean true js"><span>true</span></span><span class="meta delimiter object comma js"><span>,</span></span><span> </span><span class="comment block js"><span class="punctuation definition comment js"><span>/*</span></span><span> Start the job right now </span><span class="punctuation definition comment js"><span>*/</span></span></span></span></div><div class="line"><span class="source js"><span>  timeZone </span><span class="comment block js"><span class="punctuation definition comment js"><span>/*</span></span><span> Time zone of this job. </span><span class="punctuation definition comment js"><span>*/</span></span></span></span></div><div class="line"><span class="source js"><span class="meta brace round js"><span>)</span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div></pre></div>
<h1><a id="user-content-another-example-with-date" class="deep-link" href="#another-example-with-date" aria-hidden="true" rel="nofollow"><svg aria-hidden="true" class="deep-link-icon" height="16" version="1.1" viewbox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Another example with Date</h1>
<div class="highlight javascript"><pre class="editor editor-colors"><div class="line"><span class="source js"><span class="storage type js"><span>var</span></span><span> CronJob </span><span class="keyword operator assignment js"><span>=</span></span><span> </span><span class="meta function-call js"><span class="support function js"><span>require</span></span><span class="meta js"><span class="punctuation definition begin round js"><span>(</span></span><span class="string quoted single js"><span class="punctuation definition string begin js"><span>'</span></span><span>cron</span><span class="punctuation definition string end js"><span>'</span></span></span><span class="punctuation definition end round js"><span>)</span></span></span></span><span class="meta delimiter period js"><span>.</span></span><span class="variable other js"><span>CronJob</span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div><div class="line"><span class="source js"><span class="storage type js"><span>var</span></span><span> job </span><span class="keyword operator assignment js"><span>=</span></span><span> </span><span class="meta class instance constructor js"><span class="keyword operator js"><span>new</span></span><span> </span><span class="entity name type instance js"><span>CronJob</span></span></span><span class="meta brace round js"><span>(</span></span><span class="meta class instance constructor js"><span class="keyword operator js"><span>new</span></span><span> </span><span class="entity name type instance js"><span>Date</span></span></span><span class="meta brace round js"><span>(</span><span>)</span></span><span class="meta delimiter object comma js"><span>,</span></span><span> </span><span class="meta function js"><span class="storage type function js"><span>function</span></span><span class="meta js"><span class="punctuation definition begin round js"><span>(</span></span><span class="punctuation definition end round js"><span>)</span></span></span></span><span> </span><span class="punctuation definition function begin curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>  </span><span class="comment block js"><span class="punctuation definition comment js"><span>/*</span></span><span> runs once at the specified date. </span><span class="punctuation definition comment js"><span>*/</span></span></span></span></div><div class="line"><span class="source js"><span>  </span><span class="punctuation definition function end curly js"><span>}</span></span><span class="meta delimiter object comma js"><span>,</span></span><span> </span><span class="meta function js"><span class="storage type function js"><span>function</span></span><span> </span><span class="meta js"><span class="punctuation definition begin round js"><span>(</span></span><span class="punctuation definition end round js"><span>)</span></span></span></span><span> </span><span class="punctuation definition function begin curly js"><span>{</span></span></span></div><div class="line"><span class="source js"><span>    </span><span class="comment block js"><span class="punctuation definition comment js"><span>/*</span></span><span> This function is executed when the job stops </span><span class="punctuation definition comment js"><span>*/</span></span></span></span></div><div class="line"><span class="source js"><span>  </span><span class="punctuation definition function end curly js"><span>}</span></span><span class="meta delimiter object comma js"><span>,</span></span></span></div><div class="line"><span class="source js"><span>  </span><span class="constant language boolean true js"><span>true</span></span><span class="meta delimiter object comma js"><span>,</span></span><span> </span><span class="comment block js"><span class="punctuation definition comment js"><span>/*</span></span><span> Start the job right now </span><span class="punctuation definition comment js"><span>*/</span></span></span></span></div><div class="line"><span class="source js"><span>  timeZone </span><span class="comment block js"><span class="punctuation definition comment js"><span>/*</span></span><span> Time zone of this job. </span><span class="punctuation definition comment js"><span>*/</span></span></span></span></div><div class="line"><span class="source js"><span class="meta brace round js"><span>)</span></span><span class="punctuation terminator statement js"><span>;</span></span></span></div></pre></div>`;