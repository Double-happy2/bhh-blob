import{_ as s,c as a,o as n,a as e}from"./app.5358fa95.js";const y=JSON.parse('{"title":"对象","description":"","frontmatter":{},"headers":[{"level":3,"title":"对象划分","slug":"对象划分","link":"#对象划分","children":[]},{"level":3,"title":"创建自定义对象","slug":"创建自定义对象","link":"#创建自定义对象","children":[]},{"level":3,"title":"属性的访问","slug":"属性的访问","link":"#属性的访问","children":[]},{"level":3,"title":"内置构造函数","slug":"内置构造函数","link":"#内置构造函数","children":[]},{"level":3,"title":"数组 Api","slug":"数组-api","link":"#数组-api","children":[]},{"level":3,"title":"字符串 Api","slug":"字符串-api","link":"#字符串-api","children":[]}],"relativePath":"js/jsbase/objectArry.md"}'),l={name:"js/jsbase/objectArry.md"},p=e(`<h1 id="对象" tabindex="-1">对象 <a class="header-anchor" href="#对象" aria-hidden="true">#</a></h1><h3 id="对象划分" tabindex="-1">对象划分 <a class="header-anchor" href="#对象划分" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">JS 中的对象分为以下几种:</span></span>
<span class="line"><span style="color:#A6ACCD;">① 内置对象，JS 提供的对象</span></span>
<span class="line"><span style="color:#A6ACCD;">② 自定义对象，自己创建的对象</span></span>
<span class="line"><span style="color:#A6ACCD;">③ 宿主对象，根据不同的执行环境划分</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="创建自定义对象" tabindex="-1">创建自定义对象 <a class="header-anchor" href="#创建自定义对象" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">创建自定义对象有以下几种方式:</span></span>
<span class="line"><span style="color:#A6ACCD;">①对象字面量</span></span>
<span class="line"><span style="color:#A6ACCD;">②内置构造函数</span></span>
<span class="line"><span style="color:#A6ACCD;">③自定义构造函数</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="属性的访问" tabindex="-1">属性的访问 <a class="header-anchor" href="#属性的访问" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">对象访问有以下几种方式</span></span>
<span class="line"><span style="color:#A6ACCD;">①对象.属性名     ②对象[&#39;属性名&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">ps：如果访问的属性不存在，则返回undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="内置构造函数" tabindex="-1">内置构造函数 <a class="header-anchor" href="#内置构造函数" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">new Object()</span></span>
<span class="line"><span style="color:#A6ACCD;">创建一个空对象{}，需要单独添加属性</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">遍历属性</p><p>for(var k in 对象){ k 每个属性名 对象[k] 属性值 }</p></div><h1 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-hidden="true">#</a></h1><h3 id="数组-api" tabindex="-1">数组 Api <a class="header-anchor" href="#数组-api" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> reverse()  翻转数组元素</span></span>
<span class="line"><span style="color:#A6ACCD;"> sort()  对数组进行排序，默认是按照Unicode码排列</span></span>
<span class="line"><span style="color:#A6ACCD;"> concat()   拼接多个数组</span></span>
<span class="line"><span style="color:#A6ACCD;"> slice(start, end)  截取数组元素，start开始的下标，end结束的下标，end为空截取到最后，下标为负数表示倒数，不包含结束的这一项；返回截取到的元素</span></span>
<span class="line"><span style="color:#A6ACCD;"> 素；原数组会发生变化。</span></span>
<span class="line"><span style="color:#A6ACCD;"> push()   在数组的末尾添加若干个元素，返回数组长度，原数组会发生变化</span></span>
<span class="line"><span style="color:#A6ACCD;"> pop()   删除数组末尾的一个元素，返回删除的元素，原数组会发生变化</span></span>
<span class="line"><span style="color:#A6ACCD;"> unshift()   在数组的开头添加若干个元素，返回数组长度，原数组会发生变化</span></span>
<span class="line"><span style="color:#A6ACCD;"> shift()   删除数组开头的一个元素，返回删除的元素，原数组会发生变化</span></span>
<span class="line"><span style="color:#A6ACCD;"> indexOf()   检测数组是否含有某个元素，找到的返回下标，找不到返回-1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="字符串-api" tabindex="-1">字符串 Api <a class="header-anchor" href="#字符串-api" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> length   获取字符串的长度</span></span>
<span class="line"><span style="color:#A6ACCD;"> charAt()   获取下标对应的字符，可以使用数组的写法  字符串[下标]</span></span>
<span class="line"><span style="color:#A6ACCD;"> indexOf()   查看字符串中是否含有某个字符串，返回的是满足条件的第1个，找不到返回-1</span></span>
<span class="line"><span style="color:#A6ACCD;"> lastIndexOf()   查看字符串中是否含有某个字符串，返回的是满足条件的最后1个，找不到返回-1</span></span>
<span class="line"><span style="color:#A6ACCD;"> toUpperCase()  英文字母转大写</span></span>
<span class="line"><span style="color:#A6ACCD;"> toLowerCase()  英文字母转小写</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">注意</p><p>所有的字符串 API 都不会对原来的字符串产生影响，都是会生成一组新的字符串</p></div>`,16),t=[p];function c(i,o,r,d,C,h){return n(),a("div",null,t)}const u=s(l,[["render",c]]);export{y as __pageData,u as default};
