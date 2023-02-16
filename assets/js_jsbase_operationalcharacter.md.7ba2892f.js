import{_ as s,c as a,o as n,a as l}from"./app.5358fa95.js";const y=JSON.parse('{"title":"运算符","description":"","frontmatter":{},"headers":[{"level":2,"title":"算术运算符","slug":"算术运算符","link":"#算术运算符","children":[]},{"level":2,"title":"比较运算符","slug":"比较运算符","link":"#比较运算符","children":[]},{"level":2,"title":"逻辑运算符","slug":"逻辑运算符","link":"#逻辑运算符","children":[]},{"level":2,"title":"位运算符(了解)","slug":"位运算符-了解","link":"#位运算符-了解","children":[]},{"level":2,"title":"赋值运算符","slug":"赋值运算符","link":"#赋值运算符","children":[]},{"level":2,"title":"三目运算符","slug":"三目运算符","link":"#三目运算符","children":[]}],"relativePath":"js/jsbase/operationalcharacter.md"}'),p={name:"js/jsbase/operationalcharacter.md"},e=l(`<h1 id="运算符" tabindex="-1">运算符 <a class="header-anchor" href="#运算符" aria-hidden="true">#</a></h1><p>表达式：由数据本身或者由运算符连接的操作数据组成的形式 运算符分为算术运算符、比较运算符、逻辑运算符、位运算符、赋值运算符、三目运算符</p><h2 id="算术运算符" tabindex="-1">算术运算符 <a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  +  -   *  /   %   ++  --</span></span>
<span class="line"><span style="color:#A6ACCD;">  %  取余</span></span>
<span class="line"><span style="color:#A6ACCD;">  ++   自增，让一个变量在原来基础之上加1</span></span>
<span class="line"><span style="color:#A6ACCD;">  --   自减，让一个变量在原来基础之上减1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">例子:</p><p>var n1=3;</p><p>var n2=n1--;</p><p>var n3=--n1;</p><p>console.log(n1,n2,n3);//1,3,1</p></div><h2 id="比较运算符" tabindex="-1">比较运算符 <a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  &gt;   &lt;   &gt;=   &lt;=    ==(等于)   !=   ===(全等于)    !==</span></span>
<span class="line"><span style="color:#A6ACCD;">  ==  等于，只是比较值是否相同</span></span>
<span class="line"><span style="color:#A6ACCD;">  ===  全等于，比较值和类型是否相同</span></span>
<span class="line"><span style="color:#A6ACCD;">  !=   不等于，只是比较值</span></span>
<span class="line"><span style="color:#A6ACCD;">  !==  不全等于，比较的值或者类型</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">例子:</p><p>字符串和数字比较，字符串转为数字</p><p>10&gt;&#39;3&#39; //true</p><p>两个字符串比较，比较的首个字符的编码</p><p>&#39;10&#39;&gt;&#39;3&#39;</p><p>查看以下程序运行，哪个是 true</p><p>&#39;10a&#39;&gt;3 //false</p><p>&#39;10a&#39; &lt; 3 //false</p><p>&#39;10a&#39;==3 //false</p><p>NaN==NaN //false</p><p>NaN 和任何值比较(&gt; &lt; &gt;= &lt;= == ===)结果都是 false</p></div><h2 id="逻辑运算符" tabindex="-1">逻辑运算符 <a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">&amp;&amp;  逻辑与，关联的两个条件都是true结果是true</span></span>
<span class="line"><span style="color:#A6ACCD;">    ||  逻辑或，关联的两个条件有一个是true结果是true</span></span>
<span class="line"><span style="color:#A6ACCD;">    !   逻辑非，取反</span></span>
<span class="line"><span style="color:#A6ACCD;">短路逻辑：不再执行第二个条件就是发生了短路</span></span>
<span class="line"><span style="color:#A6ACCD;">    &amp;&amp;  当第一个条件为false的时候，不再执行第二个条件</span></span>
<span class="line"><span style="color:#A6ACCD;">    ||   当第一个条件为true的时候，不再执行第二个条件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">例子:</p><p>查看以下程序运行是否报错</p><p>var a=2;</p><p>a&gt;1 || console.log(num);</p><p>a&lt;5 &amp;&amp; console.log(num);//num is not defined</p></div><h2 id="位运算符-了解" tabindex="-1">位运算符(了解) <a class="header-anchor" href="#位运算符-了解" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">模拟计算机底层的运算，先把值转为2进制，然后进行运算，运算完再把结果转为10进制</span></span>
<span class="line"><span style="color:#A6ACCD;">  1    2   3    4    5     6    7</span></span>
<span class="line"><span style="color:#A6ACCD;">  1   10  11  100  101  110  111</span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp;  按位与，上下两位比较，都是1结果是1，否则是0</span></span>
<span class="line"><span style="color:#A6ACCD;">  |   按位或，上下两位比较，含有1结果是1，否则是0</span></span>
<span class="line"><span style="color:#A6ACCD;">  ^  按位异或，上下两位比较，不同是1，否则是0</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;&gt;   按位右移，删除最后的位数，每移动1位是原来的一半，如果是小数进行取整</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;&lt;   按位左移，在末尾补0，每移动1位是原来的2倍</span></span>
<span class="line"><span style="color:#A6ACCD;">  7&gt;&gt;2      7&lt;&lt;2</span></span>
<span class="line"><span style="color:#A6ACCD;">  111        111</span></span>
<span class="line"><span style="color:#A6ACCD;">   11        1110</span></span>
<span class="line"><span style="color:#A6ACCD;">    1        11100</span></span>
<span class="line"><span style="color:#A6ACCD;">  3&amp;5       5&amp;7     6|12     7^15</span></span>
<span class="line"><span style="color:#A6ACCD;">  011        101     0110     0111</span></span>
<span class="line"><span style="color:#A6ACCD;">  101        111     1100	     1111</span></span>
<span class="line"><span style="color:#A6ACCD;">———     ———    ———   ———</span></span>
<span class="line"><span style="color:#A6ACCD;">  001        101     1110     1000</span></span>
<span class="line"><span style="color:#A6ACCD;">              5        14        8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="赋值运算符" tabindex="-1">赋值运算符 <a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">=  +=   -=   *=   /=   %=...</span></span>
<span class="line"><span style="color:#A6ACCD;">运算赋值：先执行运算再执行赋值</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="三目运算符" tabindex="-1">三目运算符 <a class="header-anchor" href="#三目运算符" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">一目：由一个运算符连接了一个操作数据或者表达式 ++  --  !</span></span>
<span class="line"><span style="color:#A6ACCD;">  二目：由一个运算符连接了两个操作数据或者表达式</span></span>
<span class="line"><span style="color:#A6ACCD;">  三目(条件运算符)：由两个运算符连接了三个操作数据或者表达式</span></span>
<span class="line"><span style="color:#A6ACCD;">    条件表达式  ?  表达式1  :   表达式2</span></span>
<span class="line"><span style="color:#A6ACCD;">    如果条件表达式是true，执行表达式1</span></span>
<span class="line"><span style="color:#A6ACCD;">    如果条件表达式是false，执行表达式2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,17),t=[e];function c(o,i,r,C,d,A){return n(),a("div",null,t)}const u=s(p,[["render",c]]);export{y as __pageData,u as default};
