(this["webpackJsonpcyf-homework-tracker"]=this["webpackJsonpcyf-homework-tracker"]||[]).push([[0],{390:function(e,t,n){e.exports=n(503)},395:function(e,t,n){},396:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},397:function(e,t,n){},503:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),i=n(245),s=n(95),l=(n(395),n(50)),u=n(90),f=n(78),d=n(69),b=n(68),m=(n(396),n(397),n(382)),h=function(){function e(){Object(l.a)(this,e),this.octokit=new m.a({userAgent:"CyfHomeworkTracker",log:{debug:function(){},info:function(){},warn:console.warn,error:console.error},request:{agent:void 0,fetch:void 0,timeout:0}})}return Object(u.a)(e,[{key:"getReposToReview",value:function(e){return this.octokit.pulls.list({owner:"CodeYourFuture",repo:e,per_page:100}).then((function(e){return e.data.filter((function(e){return e.labels.some((function(e){return!0}))>0}))})).catch((function(e){console.log(e)}))}}]),e}(),O=n(361),g=n.n(O),p=n(368),j=n.n(p),w=n(378),E=n.n(w),R=n(369),k=n.n(R),v=n(376),C=n.n(v),y=n(251),S=n.n(y),L=n(250),P=n.n(L),_=n(370),x=n.n(_),A=n(371),T=n.n(A),D=n(373),F=n.n(D),N=n(374),V=n.n(N),q=n(375),B=n.n(q),H=n(379),J=n.n(H),M=n(372),z=n.n(M),G=n(377),I=n.n(G),W=n(380),Y=n.n(W),$={Add:Object(a.forwardRef)((function(e,t){return r.a.createElement(j.a,Object.assign({},e,{ref:t}))})),Check:Object(a.forwardRef)((function(e,t){return r.a.createElement(k.a,Object.assign({},e,{ref:t}))})),Clear:Object(a.forwardRef)((function(e,t){return r.a.createElement(P.a,Object.assign({},e,{ref:t}))})),Delete:Object(a.forwardRef)((function(e,t){return r.a.createElement(x.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(a.forwardRef)((function(e,t){return r.a.createElement(S.a,Object.assign({},e,{ref:t}))})),Edit:Object(a.forwardRef)((function(e,t){return r.a.createElement(T.a,Object.assign({},e,{ref:t}))})),Export:Object(a.forwardRef)((function(e,t){return r.a.createElement(z.a,Object.assign({},e,{ref:t}))})),Filter:Object(a.forwardRef)((function(e,t){return r.a.createElement(F.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(V.a,Object.assign({},e,{ref:t}))})),LastPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(B.a,Object.assign({},e,{ref:t}))})),NextPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(S.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(C.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(a.forwardRef)((function(e,t){return r.a.createElement(P.a,Object.assign({},e,{ref:t}))})),Search:Object(a.forwardRef)((function(e,t){return r.a.createElement(I.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(a.forwardRef)((function(e,t){return r.a.createElement(E.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(a.forwardRef)((function(e,t){return r.a.createElement(J.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(a.forwardRef)((function(e,t){return r.a.createElement(Y.a,Object.assign({},e,{ref:t}))}))},K=[{title:"Title",field:"title"},{title:"Student",render:function(e){return r.a.createElement("a",{href:e.user.html_url},e.user.login)}},{title:"Homework Module",render:function(e){return r.a.createElement("a",{href:e.base.repo.html_url},e.base.repo.name)}},{render:function(e){return r.a.createElement("a",{class:"btn btn-outline-primary",href:"https://www.gitpod.io/#"+e.html_url,role:"button",target:"_blank"},"View Source")}},{render:function(e){return r.a.createElement("a",{class:"btn btn-outline-secondary",href:e.html_url,role:"button",target:"_blank"},"View Pull Request")}},{title:"Label",field:"labels[0].name",defaultGroupOrder:0}],Q={pageSize:20,grouping:!0,defaultExpanded:!0};var U=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={columns:K,options:Q},a}return Object(u.a)(n,[{key:"componentWillReceiveProps",value:function(){}},{key:"render",value:function(){this.props.classes;return r.a.createElement(g.a,{icons:$,columns:this.state.columns,data:this.props.data,title:"",isLoading:this.props.isLoading,options:this.state.options})}}]),n}(r.a.Component),X=Object(s.e)(U),Z=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleClickOpen=function(){a.setState({dialogOpen:!0})},a.handleClose=function(){a.setState({dialogOpen:!1})},a.state={isLoading:!1,data:[]},a.handleClickOpen=a.handleClickOpen.bind(Object(f.a)(a)),a.handleClose=a.handleClose.bind(Object(f.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),(new h).getReposToReview("js-exercises").then((function(t){console.log(t),e.setState({isLoading:!1,data:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(X,{isLoading:this.state.isLoading,data:this.state.data})))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(s.a,{path:"/",component:function(){return r.a.createElement(Z,null)}})));c.a.render(ee,document.getElementById("root"))}},[[390,1,2]]]);
//# sourceMappingURL=main.5dea28f3.chunk.js.map