import{_ as s,c as n,o as a,a as l}from"./app.5358fa95.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"原始结构","slug":"原始结构","link":"#原始结构","children":[]},{"level":3,"title":"目标数据结构","slug":"目标数据结构","link":"#目标数据结构","children":[]},{"level":3,"title":"第三种方法:映射表方法","slug":"第三种方法-映射表方法","link":"#第三种方法-映射表方法","children":[]}],"relativePath":"js/interview/formattree.md"}'),p={name:"js/interview/formattree.md"},e=l(`<p>功能: 把扁平化数组转为树形结构</p><h3 id="原始结构" tabindex="-1">原始结构 <a class="header-anchor" href="#原始结构" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">//pid为0的为顶级，id等于pid,说明pid所在的项是id所在项的父级</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">{id: 1, name: &#39;部门 1&#39;, pid: 0},</span></span>
<span class="line"><span style="color:#A6ACCD;">{id: 2, name: &#39;部门 2&#39;, pid: 4},</span></span>
<span class="line"><span style="color:#A6ACCD;">{id: 3, name: &#39;部门 3&#39;, pid: 1},</span></span>
<span class="line"><span style="color:#A6ACCD;">{id: 4, name: &#39;部门 4&#39;, pid: 3},</span></span>
<span class="line"><span style="color:#A6ACCD;">{id: 5, name: &#39;部门 5&#39;, pid: 4},</span></span>
<span class="line"><span style="color:#A6ACCD;">{id: 6, name: &#39;部门 1&#39;, pid: 0},</span></span>
<span class="line"><span style="color:#A6ACCD;">{id: 7, name: &#39;部门 1&#39;, pid: 6},</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="目标数据结构" tabindex="-1">目标数据结构 <a class="header-anchor" href="#目标数据结构" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">[{</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &#39;部门 1&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        pid: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: [{</span></span>
<span class="line"><span style="color:#A6ACCD;">            id: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">            name: &#39;部门 3&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            pid: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">            children: [{</span></span>
<span class="line"><span style="color:#A6ACCD;">                id: 4,</span></span>
<span class="line"><span style="color:#A6ACCD;">                name: &#39;部门4&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                pid: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">                children: [{ id: 5, name: &#39;部门5&#39;, pid: 4 },</span></span>
<span class="line"><span style="color:#A6ACCD;">                    { id: 2, name: &#39;部门2&#39;, pid: 4 }</span></span>
<span class="line"><span style="color:#A6ACCD;">                ]</span></span>
<span class="line"><span style="color:#A6ACCD;">            }]</span></span>
<span class="line"><span style="color:#A6ACCD;">        }]</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: 6,</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &#39;部门 1&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        pid: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: [{ id: 7, name: &#39;部门1&#39;, pid: 6 }]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="第一种方法-递归法" tabindex="-1">第一种方法:递归法 <a class="header-anchor" href="#第一种方法-递归法" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">    思路:①把父级和子级分开</span></span>
<span class="line"><span style="color:#A6ACCD;">         ②把第二级添加出来</span></span>
<span class="line"><span style="color:#A6ACCD;">         ③利用递归思想继续把剩下的子级添加出来</span></span>
<span class="line"><span style="color:#A6ACCD;">         function formatTree(arr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            let __data = JSON.parse(JSON.stringify(arr))</span></span>
<span class="line"><span style="color:#A6ACCD;">            let children = []</span></span>
<span class="line"><span style="color:#A6ACCD;">            let parent = []</span></span>
<span class="line"><span style="color:#A6ACCD;">            //  把子级和父级分开</span></span>
<span class="line"><span style="color:#A6ACCD;">            for (let i = 0; i &lt; __data.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (__data[i][&quot;pid&quot;]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    children.push(__data[i])</span></span>
<span class="line"><span style="color:#A6ACCD;">                } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    parent.push(__data[i])</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            tree(parent, children)</span></span>
<span class="line"><span style="color:#A6ACCD;">            function tree(parent, children) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                for (let k = 0; k &lt; parent.length; k++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    for (let j = 0; j &lt; children.length; j++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        if (parent[k][&quot;id&quot;] == children[j][&#39;pid&#39;]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                            parent[k].children ? parent[k].children.push(children[j]) : parent[k].children = [children[j]]</span></span>
<span class="line"><span style="color:#A6ACCD;">                            tree(parent[k].children, children)//如果不使用递归，只有两级</span></span>
<span class="line"><span style="color:#A6ACCD;">                        }</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            return parent</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        var arr=[</span></span>
<span class="line"><span style="color:#A6ACCD;">               {id: 1, name: &#39;部门 1&#39;, pid: 0},</span></span>
<span class="line"><span style="color:#A6ACCD;">               {id: 2, name: &#39;部门 2&#39;, pid: 4},</span></span>
<span class="line"><span style="color:#A6ACCD;">               {id: 3, name: &#39;部门 3&#39;, pid: 1},</span></span>
<span class="line"><span style="color:#A6ACCD;">               {id: 4, name: &#39;部门 4&#39;, pid: 3},</span></span>
<span class="line"><span style="color:#A6ACCD;">               {id: 5, name: &#39;部门 5&#39;, pid: 4},</span></span>
<span class="line"><span style="color:#A6ACCD;">               {id: 6, name: &#39;部门 1&#39;, pid: 0},</span></span>
<span class="line"><span style="color:#A6ACCD;">               {id: 7, name: &#39;部门 1&#39;, pid: 6},</span></span>
<span class="line"><span style="color:#A6ACCD;">              ]</span></span>
<span class="line"><span style="color:#A6ACCD;">         console.log(formatTree(arr))//输出为目标结构</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="第二种方法-双层-for-循环" tabindex="-1">第二种方法:双层 for 循环 <a class="header-anchor" href="#第二种方法-双层-for-循环" aria-hidden="true">#</a></h4><p>思想:在循环到数组对象的每一项的同时，去查找每一项的子项</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">①找出每一项的子元素,并且把子元素加入到一个空数组children里面</span></span>
<span class="line"><span style="color:#A6ACCD;">②如果children数组长度不为0,就把children赋值给父元素的children</span></span>
<span class="line"><span style="color:#A6ACCD;">//filter方法</span></span>
<span class="line"><span style="color:#A6ACCD;">     function formatTree(arr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            let __data = JSON.parse(JSON.stringify(arr))</span></span>
<span class="line"><span style="color:#A6ACCD;">            return __data.filter(p =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                let children = __data.filter(c =&gt; c.pid == p.id)</span></span>
<span class="line"><span style="color:#A6ACCD;">                children.length &amp;&amp; (p.children = children)</span></span>
<span class="line"><span style="color:#A6ACCD;">                return p.pid == 0</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">  //双层for循环</span></span>
<span class="line"><span style="color:#A6ACCD;">  function formatTree(arr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            let __data = JSON.parse(JSON.stringify(arr))</span></span>
<span class="line"><span style="color:#A6ACCD;">            for (let i = 0; i &lt; __data.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                var children = []</span></span>
<span class="line"><span style="color:#A6ACCD;">                for (k = 0; k &lt; __data.length; k++) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    if (__data[i][&quot;id&quot;] == __data[k][&#39;pid&#39;]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        children.push(__data[k])</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                // children.length=0,什么也不做</span></span>
<span class="line"><span style="color:#A6ACCD;">                children.length &amp;&amp; (__data[i].children = children)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            return __data.filter(p =&gt; p.pid == 0)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="第三种方法-映射表方法" tabindex="-1">第三种方法:映射表方法 <a class="header-anchor" href="#第三种方法-映射表方法" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,12),c=[e];function o(i,t,r,C,A,d){return a(),n("div",null,c)}const h=s(p,[["render",o]]);export{D as __pageData,h as default};
