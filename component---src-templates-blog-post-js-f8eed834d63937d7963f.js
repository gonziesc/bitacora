(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{233:function(e,t,a){"use strict";a.r(t);a(10);var n=a(0),r=a.n(n),l=a(31),o=a(226),i=a(223),c=a(224),s=a(225),p=a(24),m=a(227),u=(a(229),function(e){var t,a=e.postTitle,l=r.a.useState(!1),o=l[0],i=l[1];function c(e){t=setInterval((function(){localStorage.setItem(e,window.scrollY)}),5e3)}Object(n.useEffect)((function(){var e=parseInt(localStorage.getItem(a));return null!==localStorage.getItem(a)&&e>300&&window.scrollY<e-100?i(!0):(localStorage.removeItem(a),c(a)),function(){clearInterval(t)}}),[a]);var s=function(e){return function(){if(i(!1),"si"===e){var t=parseInt(localStorage.getItem(a));window.scrollTo({behavior:"smooth",top:t})}c(a)}};return r.a.createElement("div",{id:"retomar",style:{opacity:o?"1":"0",display:o?"block":"none"}},r.a.createElement("div",{className:"arrow"}),r.a.createElement("div",{className:"body"},r.a.createElement("p",null,"¿Querés retomar desde donde dejaste?"),r.a.createElement("div",{className:"options"},r.a.createElement("span",{onClick:s("si")},"Si"),r.a.createElement("span",{onClick:s("no")},"No"))))});a.d(t,"pageQuery",(function(){return f}));var d=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.markdownRemark,t=e.frontmatter,a=t.title,n=t.tags,d=t.description,f=t.date,E=this.props.data.site.siteMetadata.title,g=this.props.pageContext,y=g.previous,v=g.next;return r.a.createElement(i.a,{location:this.props.location,title:E},r.a.createElement(u,{postTitle:a}),r.a.createElement(c.a,{title:a,description:d||e.excerpt}),r.a.createElement("h1",null,a),n?r.a.createElement("div",{className:"tags-container",style:{marginTop:Object(p.a)(-1)}},n.map((function(e,t){return r.a.createElement(s.a,{tag:e,key:t})}))):null,r.a.createElement("p",{style:Object.assign({},Object(p.b)(-.2),{display:"block",marginBottom:Object(p.a)(1)})},Object(m.a)(f)),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),r.a.createElement("hr",{style:{marginBottom:Object(p.a)(1)}}),r.a.createElement(o.a,{style:{marginBottom:"0px"}}),y||v?r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,y&&r.a.createElement(l.Link,{to:y.fields.slug,rel:"prev"},"← ",y.frontmatter.title)),r.a.createElement("li",null,v&&r.a.createElement(l.Link,{to:v.fields.slug,rel:"next"},v.frontmatter.title," →"))):null)},n}(r.a.Component),f=(t.default=d,"3510227608")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-f8eed834d63937d7963f.js.map