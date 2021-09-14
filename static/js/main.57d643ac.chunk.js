(this["webpackJsonpblog-cms"]=this["webpackJsonpblog-cms"]||[]).push([[0],{154:function(e,t,n){},279:function(e,t,n){},280:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),i=n(14),s=n.n(i),o=n(28),l=n(10),u=n(13),d=n(8),b=n.n(d),h=n(16),j=n(58),p=n(41),f=n(24),g=function(e){var t=e.setUserAuth,n=Object(j.a)(),c=n.register,i=n.handleSubmit,s=n.errors,o=Object(r.useState)(!1),u=Object(l.a)(o,2),d=u[0],g=u[1],O=function(){var e=Object(h.a)(b.a.mark((function e(n){var a,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.stringify(n),console.log(a),e.prev=2,e.next=5,fetch("https://real-blog-backend.herokuapp.com/login",{method:"POST",body:a,headers:{Accept:"application/json","Content-Type":"application/json"}});case 5:return r=e.sent,e.next=8,r.json();case 8:if(c=e.sent,200===r.status){e.next=12;break}return g(!0),e.abrupt("return");case 12:console.log("json response",c),localStorage.setItem("currentUsername",c.user.username),localStorage.setItem("currentDisplayName",c.user.display_name),localStorage.setItem("token",c.token),localStorage.setItem("userAuth",!0),t(!0),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(2),g(!0);case 23:case"end":return e.stop()}}),e,null,[[2,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(f.a,{className:"layout",children:[Object(a.jsx)("h3",{children:"Login"}),Object(a.jsxs)(f.a.Group,{children:[Object(a.jsx)(f.a.Label,{htmlFor:"author_name",children:"User:"}),Object(a.jsx)(f.a.Control,{autoComplete:"username",name:"username",type:"text",placeholder:"Name",ref:c({required:"required field"})}),s.username&&Object(a.jsx)(f.a.Text,{children:s.username.message})]}),Object(a.jsxs)(f.a.Group,{children:[Object(a.jsx)(f.a.Label,{htmlFor:"password",placeholder:"password",children:"Password:"}),Object(a.jsx)(f.a.Control,{autoComplete:"current-password",name:"password",type:"password",ref:c({required:"required field"})}),s.password&&Object(a.jsxs)(f.a.Text,{children:[s.password.message," "]})]}),d&&Object(a.jsx)(f.a.Text,{children:"Username or password incorrect"}),Object(a.jsx)(p.a,{type:"submit",onClick:i(O),children:"Login"})]})},O=(n(84),n(36)),m=n(37),x=n(39),v=n(38),y=n(309),k=n(308),S=n(307),C=n(305),A=n(306),N=n(304),T="https://real-blog-backend.herokuapp.com/",w=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={open:!1},e.handleClickOpen=function(){e.setState({open:!0})},e.handleClose=function(){e.setState({open:!1})},e.handleAgree=function(){console.log("I agree!");var t=localStorage.getItem("token"),n="Bearer ".concat(t);try{fetch(T+"posts/".concat(e.props.deleteid),{method:"delete",headers:{Authorization:n,"Content-Type":"application/json"}}).then((function(){e.props.history.push("/posts"),window.location.reload()})).catch((function(e){console.log(e)}))}catch(a){console.error(a)}e.handleClose()},e.handleDisagree=function(){console.log("I will not delete. I will not do anything. Save yourself."),e.handleClose()},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{deleteid:this.props.deleteid,style:{display:"flex",justifyContent:"center"},children:[Object(a.jsx)(y.a,{onClick:this.handleClickOpen,children:"Delete"}),Object(a.jsxs)(k.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(a.jsx)(N.a,{id:"alert-dialog-title",children:"Successful Alert"}),Object(a.jsx)(C.a,{children:Object(a.jsx)(A.a,{id:"alert-dialog-description",children:"Do you really want to delete this post?"})}),Object(a.jsxs)(S.a,{children:[Object(a.jsx)(y.a,{onClick:this.handleDisagree,color:"primary",children:"No"}),Object(a.jsx)(y.a,{onClick:this.handleAgree,color:"primary",autoFocus:!0,children:"Yes"})]})]})]})}}]),n}(c.a.Component),D=Object(u.o)(w),_=(n(104).DateTime,n(11)),F=(n(154),n(104).DateTime),I={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"},q=function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=c.a.useState(t),a=Object(l.a)(n,2),r=a[0],i=a[1];return{items:c.a.useMemo((function(){var t=Object(_.a)(e);return null!==r&&t.sort((function(e,t){return e[r.key]<t[r.key]?"ascending"===r.direction?-1:1:e[r.key]>t[r.key]?"ascending"===r.direction?1:-1:0})),t}),[e,r]),requestSort:function(e){var t="ascending";r&&r.key===e&&"ascending"===r.direction&&(t="descending"),i({key:e,direction:t})},sortConfig:r}}(e.posts),n=t.items,r=t.requestSort,i=t.sortConfig,s=function(e){if(i)return i.key===e?i.direction:void 0};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{children:"Post Listing"}),Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:Object(a.jsx)("button",{type:"button",onClick:function(){return r("title")},className:s("title"),children:"Title"})}),Object(a.jsx)("th",{children:Object(a.jsx)("button",{type:"button",onClick:function(){return r("author_name")},className:s("author_name"),children:"Author"})}),Object(a.jsx)("th",{children:Object(a.jsx)("button",{type:"button",onClick:function(){return r("date_created")},className:s("date_created"),children:"Date Created"})}),Object(a.jsx)("th",{children:Object(a.jsx)("button",{type:"button",onClick:function(){return r("date_modified")},className:s("date_modified"),children:"Date Modified"})}),Object(a.jsx)("th",{children:Object(a.jsx)("button",{type:"button",onClick:function(){return r("published")},className:s("published")+" reversed",children:"Draft"})}),Object(a.jsx)("th",{}),Object(a.jsx)("th",{}),Object(a.jsx)("th",{})]})}),Object(a.jsx)("tbody",{children:n.map((function(e){return Object(a.jsxs)("tr",{className:e.published?"notDraft":"isDraft",children:[Object(a.jsxs)("td",{children:[e.title,e.published?"":" (Draft)"]}),Object(a.jsx)("td",{children:e.author_name}),Object(a.jsx)("td",{children:F.fromISO(e.date_created).toLocaleString(I)}),Object(a.jsx)("td",{children:F.fromISO(e.date_modified).toLocaleString(I)}),Object(a.jsx)("td",{children:e.published?"No":"Yes"}),Object(a.jsx)("td",{children:e.published?Object(a.jsx)(y.a,{children:Object(a.jsx)("a",{target:"_blank",href:"".concat("https://real-blog-frontend-public-code.vercel.app/","posts/").concat(e._id),children:"View Live"})}):""}),Object(a.jsx)("td",{children:Object(a.jsx)(y.a,{children:Object(a.jsx)("a",{href:"https://nichlas97.github.io/real-blog-frontend-admin-newer/"+"#/posts/".concat(e._id),children:"Edit"})})}),Object(a.jsx)("td",{children:Object(a.jsx)(D,{deleteid:e._id})})]},e._id)}))})]})]})},E=n(18),L=n.n(E),R=function(){var e=Object(r.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){var e=localStorage.getItem("token"),t="Bearer ".concat(e);(function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{L.a.get("https://real-blog-backend.herokuapp.com/allposts",{headers:{Authorization:t}}).then((function(e){c(e.data.posts)})).catch((function(e){console.log(e)}))}catch(n){}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(n),n?Object(a.jsx)(q,{posts:n}):Object(a.jsx)("div",{children:"Loading..."})},P=n(26),H=n(51),M=n(29),V=n(40),Q=n.n(V),U=(n(277),!!navigator.userAgent.match(/Trident/i)),B="https://real-blog-backend.herokuapp.com/uploadfiles",z=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).getMetaTagElements=function(e){var t=document.createElement("div");return t.innerHTML=e,t.getElementsByTagName("meta")},e}return Object(m.a)(n,[{key:"onPaste",value:function(){var e=Object(h.a)(b.a.mark((function e(t){var a,r,c,i=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.clipboardData||window.clipboardData,e.next=3,a.getData("Text");case 3:r=e.sent,(c=r.match(/\b(http|https)?:\/\/\S+/gi)||[]).length>0?(t.preventDefault(),c.forEach((function(e){L.a.get(e).then((function(e){var t,n,a,r,c=Object(P.a)(i.getMetaTagElements(e));try{for(c.s();!(r=c.n()).done;){var s=r.value;"og:title"===s.getAttribute("property")&&(t=s.getAttribute("content")),"og:image"===s.getAttribute("property")&&(n=s.getAttribute("content")),"og:url"===s.getAttribute("property")&&(a=s.getAttribute("content"))}}catch(d){c.e(d)}finally{c.f()}var o="<a href=".concat(a,' target="_blank"><div><img src=').concat(n," alt=").concat(t,' width="20%"/><span>').concat(t,"</span></div></a>"),l=i.quill.getSelection(),u=l?l.index:0;i.quill.pasteHTML(u,o,"silent"),i.quill.setSelection(u+o.length)})).catch((function(e){return console.error(e)}))}))):Object(H.a)(Object(M.a)(n.prototype),"onPaste",this).call(this,t);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(V.Quill.import("modules/clipboard"));V.Quill.register("modules/clipboard",z,!0);var J=V.Quill.import("blots/block/embed"),Y=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,null,[{key:"create",value:function(e){var t=Object(H.a)(Object(M.a)(n),"create",this).call(this);return t.setAttribute("src",e.src),t.setAttribute("alt",e.alt),t.setAttribute("width","100%"),t}},{key:"value",value:function(e){return{src:e.getAttribute("src"),alt:e.getAttribute("alt")}}}]),n}(J);Y.blotName="image",Y.tagName="img",V.Quill.register(Y);var G=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,null,[{key:"create",value:function(e){if(e&&e.src){var t=Object(H.a)(Object(M.a)(n),"create",this).call(this);return t.setAttribute("src",e.src),t.setAttribute("title",e.title),t.setAttribute("width","100%"),t.setAttribute("controls",""),t}var a=document.createElement("iframe");return a.setAttribute("src",e),a.setAttribute("frameborder","0"),a.setAttribute("allowfullscreen",!0),a.setAttribute("width","100%"),a}},{key:"value",value:function(e){return e.getAttribute("title")?{src:e.getAttribute("src"),alt:e.getAttribute("title")}:e.getAttribute("src")}}]),n}(J);G.blotName="video",G.tagName="video",V.Quill.register(G);var W=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,null,[{key:"create",value:function(e){var t=document.createElement("span");t.innerText="Attachments - ";var a=document.createElement("b");a.innerText=e;var r=document.createElement("a");r.setAttribute("href","https://real-blog-backend.herokuapp.com/uploads/"+e),r.setAttribute("target","_blank"),r.setAttribute("className","file-link-inner-post"),r.appendChild(a);var c=Object(H.a)(Object(M.a)(n),"create",this).call(this);return c.appendChild(t),c.appendChild(r),c}},{key:"value",value:function(e){return e.querySelector("a").getAttribute("href")}}]),n}(J);W.blotName="file",W.tagName="p",W.className="file-inner-post",V.Quill.register(W);var X=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,null,[{key:"create",value:function(e){var t=document.createElement("span");t.innerText="\ud22c\ud45c - ";var a=document.createElement("b");a.innerText=e.title;var r=Object(H.a)(Object(M.a)(n),"create",this).call(this);return r.setAttribute("id",e.id),r.appendChild(t),r.appendChild(a),r}},{key:"value",value:function(e){return{id:e.getAttribute("id"),title:e.querySelector("b").innerText}}}]),n}(J);X.blotName="poll",X.tagName="p",X.className="poll-inner-post",V.Quill.register(X);var K=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(O.a)(this,n),(a=t.call(this,e)).handleChange=function(e){console.log("html",e),a.setState({editorHtml:e},(function(){a.props.onEditorChange(a.state.editorHtml)}))},a.imageHandler=function(){a.inputOpenImageRef.current.click()},a.videoHandler=function(){a.inputOpenVideoRef.current.click()},a.fileHandler=function(){a.inputOpenFileRef.current.click()},a.insertImage=function(e){if(e.stopPropagation(),e.preventDefault(),e.currentTarget&&e.currentTarget.files&&e.currentTarget.files.length>0){var t=e.currentTarget.files[0],n=new FormData;n.append("file",t),L.a.post(B,n,{header:{"content-type":"multipart/form-data"}}).then((function(e){if(!e.data.success)return alert("failed to upload image file");var n=a.reactQuillRef.getEditor();n.focus();var r=n.getSelection(),c=r?r.index:0;console.log("The response data url",e.data.url),n.insertEmbed(c,"image",{src:"https://real-blog-backend.herokuapp.com/"+e.data.url,alt:e.data.fileName}),n.setSelection(c+1),a._isMounted&&a.setState({files:[].concat(Object(_.a)(a.state.files),[t])},(function(){a.props.onFilesChange(a.state.files)}))}))}},a.insertVideo=function(e){if(e.stopPropagation(),e.preventDefault(),e.currentTarget&&e.currentTarget.files&&e.currentTarget.files.length>0){var t=e.currentTarget.files[0],n=new FormData;n.append("file",t),L.a.post(B,n,{header:{"content-type":"multipart/form-data"}}).then((function(e){if(!e.data.success)return alert("failed to upload file");var n=a.reactQuillRef.getEditor();n.focus();var r=n.getSelection(),c=r?r.index:0;n.insertEmbed(c,"video",{src:"https://real-blog-backend.herokuapp.com/"+e.data.url,title:e.data.fileName}),n.setSelection(c+1),a._isMounted&&a.setState({files:[].concat(Object(_.a)(a.state.files),[t])},(function(){a.props.onFilesChange(a.state.files)}))}))}},a.insertFile=function(e){if(e.stopPropagation(),e.preventDefault(),e.currentTarget&&e.currentTarget.files&&e.currentTarget.files.length>0){var t=e.currentTarget.files[0];console.log(t);var n=new FormData;n.append("file",t),L.a.post(B,n,{header:{"content-type":"multipart/form-data"}}).then((function(e){if(e.data.success){var n=a.reactQuillRef.getEditor();n.focus();var r=n.getSelection(),c=r?r.index:0;n.insertEmbed(c,"file",e.data.fileName),n.setSelection(c+1),a._isMounted&&a.setState({files:[].concat(Object(_.a)(a.state.files),[t])},(function(){a.props.onFilesChange(a.state.files)}))}}))}},a.modules={syntax:!1,toolbar:{container:"#toolbar",handlers:{insertImage:a.imageHandler,insertVideo:a.videoHandler,insertFile:a.fileHandler,insertPoll:a.pollHandler}}},a.formats=["header","bold","italic","underline","strike","image","video","file","link","code-block","video","blockquote","clean"],console.log(e),a.state={editorHtml:U?"<p>&nbsp;</p>":"",files:[]},a.reactQuillRef=null,a.inputOpenImageRef=c.a.createRef(),a.inputOpenVideoRef=c.a.createRef(),a.inputOpenFileRef=c.a.createRef(),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e,t=this;if(this._isMounted=!0,this.props.fetchid){e=this.props.fetchid,L.a.get("https://real-blog-backend.herokuapp.com/"+"posts/".concat(e)).then((function(e){200==e.status?t.setState({editorHtml:e.data.post.text}):alert("Couldn`t get blog")}))}}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{id:"toolbar",children:[Object(a.jsxs)("select",{className:"ql-header",defaultValue:"",onChange:function(e){return e.persist()},children:[Object(a.jsx)("option",{value:"1"}),Object(a.jsx)("option",{value:"2c"}),Object(a.jsx)("option",{value:""})]}),Object(a.jsx)("button",{className:"ql-bold"}),Object(a.jsx)("button",{className:"ql-italic"}),Object(a.jsx)("button",{className:"ql-underline"}),Object(a.jsx)("button",{className:"ql-strike"}),Object(a.jsx)("button",{className:"ql-insertImage",children:"I"}),Object(a.jsx)("button",{className:"ql-insertVideo",children:"V"}),Object(a.jsx)("button",{className:"ql-insertFile",children:"F"}),Object(a.jsx)("button",{className:"ql-link"}),Object(a.jsx)("button",{className:"ql-code-block"}),Object(a.jsx)("button",{className:"ql-video"}),Object(a.jsx)("button",{className:"ql-blockquote"}),Object(a.jsx)("button",{className:"ql-clean"})]}),Object(a.jsx)(Q.a,{ref:function(t){e.reactQuillRef=t},theme:"snow",onChange:this.handleChange,modules:this.modules,formats:this.formats,value:this.state.editorHtml,placeholder:this.props.placeholder,initialiser:this.props.initialiser,fetchid:this.props.fetchid}),Object(a.jsx)("input",{type:"file",accept:"image/*",ref:this.inputOpenImageRef,style:{display:"none"},onChange:this.insertImage}),Object(a.jsx)("input",{type:"file",accept:"video/*",ref:this.inputOpenVideoRef,style:{display:"none"},onChange:this.insertVideo}),Object(a.jsx)("input",{type:"file",accept:"*",ref:this.inputOpenFileRef,style:{display:"none"},onChange:this.insertFile})]})}}]),n}(c.a.Component),Z="https://real-blog-backend.herokuapp.com/",$=function(e){var t=e.preloadedValues,n=Object(r.useState)(""),c=Object(l.a)(n,2),i=c[0],s=c[1],o=Object(r.useState)(t.posttitle),d=Object(l.a)(o,2),b=d[0],h=d[1],p=Object(r.useState)(null),f=Object(l.a)(p,2),g=f[0],O=f[1],m=Object(r.useState)(t.published),x=Object(l.a)(m,2),v=x[0],k=x[1],S=Object(u.m)().id;console.log("The preloaded values are",t),console.log("The data to be posted is",i,b,v);var C=Object(j.a)({defaultValues:t}),A=C.register,N=(C.handleSubmit,Object(u.k)());console.log("Id has been set?",S);return Object(a.jsx)("div",{className:"layout",children:Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"My Title"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{ref:A,placeholder:"My Title",name:"posttitle",onChange:function(e){console.log(e.target.value),h(e.target.value)},fontSize:"2em",type:"text"})," ",Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Publish to the web"}),Object(a.jsx)("input",{ref:A,checked:v,name:"published",className:"mycheckbox",type:"checkbox",onChange:function(e){console.log(e.currentTarget.checked),k(e.currentTarget.checked)}})]}),Object(a.jsxs)("div",{children:["Choose a new cover image: ",Object(a.jsx)("input",{type:"file",onChange:function(e){console.log(e.currentTarget.files[0]),O(e.currentTarget.files[0])}})]}),Object(a.jsx)("br",{}),Object(a.jsx)(K,{placeholder:"Start Posting Something",modules:{toolbar:[["bold","italic"],["link","image"]]},onEditorChange:function(e){s(e)},onFilesChange:function(e){},fetchid:S}),Object(a.jsx)("div",{style:{textAlign:"center",margin:"2rem"},children:Object(a.jsx)(y.a,{onClick:function(e){console.log("submitting...."),e.preventDefault();var t=function(e){var t=localStorage.getItem("currentUsername"),n=localStorage.getItem("token"),a="Bearer ".concat(n),r=e?JSON.stringify({title:b,text:i,author_name:t,published:v,cover_image_url:e}):JSON.stringify({title:b,text:i,author_name:t,published:v});try{fetch(Z+"posts/".concat(S),{method:"PUT",body:r,headers:{Authorization:a,"Content-Type":"application/json"}}).then((function(e){console.log(e),200==e.status?(s(""),h(""),N.push("/posts")):alert("Failed to upload, please try again!")})).catch((function(e){console.log("there is an error!",e.json())}))}catch(c){console.log(c)}};if(g){var n=new FormData;n.append("file",g);L.a.post("https://real-blog-backend.herokuapp.com/uploadfiles",n,{header:{"content-type":"multipart/form-data"}}).then((function(e){e.data.success?t(e.data.url):t("uploads/default.webp")})).catch((function(e){t("uploads/default.webp")}))}else t(!1)},color:"primary",children:"Save Post"})}),Object(a.jsx)("div",{style:{textAlign:"center",margin:"2rem"},children:Object(a.jsx)(D,{deleteid:S})})]})})};var ee=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(u.m)().id;return Object(r.useEffect)((function(){L.a.get("https://real-blog-backend.herokuapp.com/"+"posts/".concat(i)).then((function(e){200==e.status?c({posttitle:e.data.post.title,published:e.data.post.published}):alert("Couldn`t get post data")}))}),[]),n?Object(a.jsx)($,{preloadedValues:n}):Object(a.jsx)("div",{children:"Loading..."})},te=Object(u.o)((function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=(t[0],t[1],Object(r.useState)("")),c=Object(l.a)(n,2),i=c[0],s=c[1],o=Object(r.useState)(""),d=Object(l.a)(o,2),j=d[0],p=d[1],f=Object(r.useState)(null),g=Object(l.a)(f,2),O=g[0],m=g[1],x=Object(r.useState)(!1),v=Object(l.a)(x,2),y=v[0],k=v[1],S=Object(u.k)();Object(r.useEffect)((function(){console.log(y)}));return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("currentDisplayName"),a=localStorage.getItem("token"),r="Bearer ".concat(a),c=JSON.stringify({title:j,text:i,author_name:n,published:y,cover_image_url:t||""}),e.prev=4,e.next=7,fetch("https://real-blog-backend.herokuapp.com/posts/",{method:"post",body:c,headers:{Authorization:r,"Content-Type":"application/json"}}).then((function(e){console.log(e),200===e.status?(s(""),p(""),S.push("/posts")):alert("Failed to upload, please try again!")})).catch((function(e){console.log(e)}));case 7:e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}(),n=new FormData;n.append("file",O);L.a.post("https://real-blog-backend.herokuapp.com/uploadfiles",n,{header:{"content-type":"multipart/form-data"}}).then((function(e){console.log("something something"),e.data.success?(console.log("Image has been sent to the server. Now sending post data."),t(e.data.url)):t("uploads/default.webp")})).catch((function(e){console.log(e),t("uploads/default.webp")}))},children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"My Title"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{fontSize:"2em",type:"text",placeholder:"Title",value:j,onChange:function(e){return p(e.target.value)}})," ",Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Publish to the web"}),Object(a.jsx)("input",{className:"mycheckbox",type:"checkbox",onChange:function(e){console.log(e.currentTarget.checked),k(e.currentTarget.checked)}})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Add in a cover image (Recommended size: X by Y)"}),Object(a.jsx)("input",{type:"file",onChange:function(e){console.log(e.currentTarget.files[0]),m(e.currentTarget.files[0])}})]}),Object(a.jsx)(K,{placeholder:"Start Posting Something",modules:{toolbar:[["bold","italic"],["link","image"]]},onEditorChange:function(e){s(e)},onFilesChange:function(e){}}),Object(a.jsx)("div",{style:{textAlign:"center",margin:"2rem"},children:Object(a.jsx)("button",{size:"large",htmltype:"submit",className:"",children:"Submit"})})]})})})),ne=n(100),ae=n(83),re=n(99),ce=function(e){var t=e.userAuth,n=e.setUserAuth;return Object(a.jsxs)(ne.a,{children:[Object(a.jsxs)(ne.a.Brand,{children:[" ",Object(a.jsx)("h1",{children:"My Blog"})]}),Object(a.jsxs)(ae.a,{className:"mr-auto",children:[Object(a.jsx)(re.LinkContainer,{to:"/posts",children:Object(a.jsx)(ae.a.Link,{children:"Home"})}),Object(a.jsx)(re.LinkContainer,{to:"/newpost",children:Object(a.jsx)(ae.a.Link,{children:"New Post"})})]}),t&&Object(a.jsx)(p.a,{variant:"outline-success",onClick:function(){n(!1),localStorage.clear()},children:"Logout"})]})},ie=n(135),se=n(71),oe=n(136);var le=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){var e=localStorage.getItem("userAuth");c(!!e)}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(ie.a,{children:Object(a.jsx)(oe.a,{children:Object(a.jsxs)(se.a,{children:[" ",Object(a.jsx)(ce,{userAuth:n,setUserAuth:c,className:"Nav"}),Object(a.jsxs)(u.g,{children:[" ",Object(a.jsx)(u.d,{exact:!0,path:"/",children:Object(a.jsx)(u.c,{to:"/posts"})}),Object(a.jsx)(u.d,{exact:!0,path:"/posts",children:n?Object(a.jsx)(R,{}):Object(a.jsx)(g,{setUserAuth:c})}),Object(a.jsx)(u.d,{exact:!0,path:"/posts/:id",children:n?Object(a.jsx)(ee,{}):Object(a.jsx)(g,{setUserAuth:c})}),Object(a.jsx)(u.d,{path:"/newpost",children:n?Object(a.jsx)(te,{}):Object(a.jsx)(g,{setUserAuth:c})}),Object(a.jsx)(u.d,{path:"/",children:Object(a.jsx)("p",{children:"404"})})]})]})})})})},ue=(n(279),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,311)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))});s.a.render(Object(a.jsx)(o.HashRouter,{children:Object(a.jsx)(le,{})}),document.getElementById("root")),ue()}},[[280,1,2]]]);
//# sourceMappingURL=main.57d643ac.chunk.js.map