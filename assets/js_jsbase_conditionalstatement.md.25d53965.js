import{_ as s,c as a,o as n,a as l}from"./app.5358fa95.js";const h=JSON.parse('{"title":"代码流程控制","description":"","frontmatter":{},"headers":[{"level":2,"title":"条件语句","slug":"条件语句","link":"#条件语句","children":[]},{"level":2,"title":"循环","slug":"循环","link":"#循环","children":[]}],"relativePath":"js/jsbase/conditionalstatement.md"}'),e={name:"js/jsbase/conditionalstatement.md"},p=l(`<h1 id="代码流程控制" tabindex="-1">代码流程控制 <a class="header-anchor" href="#代码流程控制" aria-hidden="true">#</a></h1><h2 id="条件语句" tabindex="-1">条件语句 <a class="header-anchor" href="#条件语句" aria-hidden="true">#</a></h2><p>if 语句,如果 if 后的语句块中只有一行代码，则大括号可以省略的</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">if(条件表达式){</span></span>
<span class="line"><span style="color:#A6ACCD;">  语句块</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>if-else 语句</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">if(条件表达式){</span></span>
<span class="line"><span style="color:#A6ACCD;">  语句块1</span></span>
<span class="line"><span style="color:#A6ACCD;">}else{</span></span>
<span class="line"><span style="color:#A6ACCD;">  语句块2</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>if-else 嵌套</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">if(条件表达式1){</span></span>
<span class="line"><span style="color:#A6ACCD;">  语句块1</span></span>
<span class="line"><span style="color:#A6ACCD;">}else  if(条件表达式n){</span></span>
<span class="line"><span style="color:#A6ACCD;">  语句块n</span></span>
<span class="line"><span style="color:#A6ACCD;">}else{</span></span>
<span class="line"><span style="color:#A6ACCD;">  语句块n+1  //以上所有的条件都是false</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>switch-case 语句</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">switch(表达式){</span></span>
<span class="line"><span style="color:#A6ACCD;">  case 值1:  //如果表达式和值1相等</span></span>
<span class="line"><span style="color:#A6ACCD;">    语句块1</span></span>
<span class="line"><span style="color:#A6ACCD;">    break;  //结束整个switch语句</span></span>
<span class="line"><span style="color:#A6ACCD;">  case 值n:</span></span>
<span class="line"><span style="color:#A6ACCD;">    语句块n</span></span>
<span class="line"><span style="color:#A6ACCD;">    break;</span></span>
<span class="line"><span style="color:#A6ACCD;">  default:</span></span>
<span class="line"><span style="color:#A6ACCD;">    语句块n+1  //表达式和每个值比较都不等</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="循环" tabindex="-1">循环 <a class="header-anchor" href="#循环" aria-hidden="true">#</a></h2><p>while 循环</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">while(循环条件){</span></span>
<span class="line"><span style="color:#A6ACCD;">  循环体</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>do-while 循环</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">do{</span></span>
<span class="line"><span style="color:#A6ACCD;">  循环体</span></span>
<span class="line"><span style="color:#A6ACCD;">}while(循环条件);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>for 循环</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">for(初始值;循环条件;增量){</span></span>
<span class="line"><span style="color:#A6ACCD;">  循环体</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>continue 和 break 异同 continue：跳过某次循环，还会往后执行下一次循环；跳过的是剩余的循环体部分 break：强制结束循环，不会执行任何循环中的代码</p></blockquote>`,18),o=[p];function c(t,i,r,C,A,d){return n(),a("div",null,o)}const D=s(e,[["render",c]]);export{h as __pageData,D as default};
