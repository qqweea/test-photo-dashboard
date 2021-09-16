(this["webpackJsonptest-photo-dashboard"]=this["webpackJsonptest-photo-dashboard"]||[]).push([[0],{166:function(e,t,n){},255:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(28),s=n.n(o),i=(n(165),n(166),n(263)),u=n(258),l=n(262),b=n(32),j=n(33),p=j.b.div(a||(a=Object(b.a)(["\n  margin-top: 2rem;\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n"]))),d=n(8),h=n(47),O=n.n(h),m=n(77),f=n(75),g=n(148),x=n(149),y=function e(){var t=this;return Object(g.a)(this,e),this.fetchAlbums=Object(m.a)(O.a.mark((function e(){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("/albums");case 3:return n=e.sent,a=n.data,e.abrupt("return",Promise.resolve({albums:a}));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),this.fetchPosts=function(){var e=Object(m.a)(O.a.mark((function e(n){var a,r,c,o,s,i,u;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.currentPage,r=n.itemsPerPage,c=n.search,o=n.albumId,e.prev=1,e.next=4,t.axios.get("/photos",{params:{q:c||void 0,albumId:o||void 0,_start:(a-1)*r,_limit:r}});case 4:return s=e.sent,i=s.data,u=s.headers,e.abrupt("return",Promise.resolve({photos:i,totalItems:u["x-total-count"]}));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",Promise.reject(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),e.instance?e.instance:(this.axios=Object(x.create)({baseURL:"https://jsonplaceholder.typicode.com"}),e.instance=this,this)},v=n(78),P="photos/FETCH_ALBUMS_REQUEST",w="photos/FETCH_ALBUMS_FULFILLED",E="photos/FETCH_ALBUMS_REJECTED",S="photos/FETCH_PHOTOS_REQUEST",C="photos/FETCH_PHOTOS_FULFILLED",I="photos/FETCH_PHOTOS_REJECTED",L="photos/SET_ITEMS_PER_PAGE",T="photos/SET_SEARCH",_="photos/SET_ALBUM",k="photos/INCREMENT_PAGE",A="photos/SET_PAGE",q="photos/SET_DESKTOP_VIEW",M=P,z=w,F=E,H=S,D=C,U=I,R=L,N=k,B=T,J=_,G=A,V=q,W=function(e){return{type:P,payload:e}},Q=function(e){return{type:w,payload:e}},Y=function(e){return{type:E,payload:e}},K=function(e){return{type:S,payload:e}},X=function(e){return{type:C,payload:e}},Z=function(e){return{type:I,payload:e}},$=function(e){return{type:L,payload:e}},ee=function(e){return{type:k,payload:e}},te=function(e){return{type:T,payload:e}},ne=function(e){return{type:_,payload:e}},ae=function(e){return{type:A,payload:e}},re=function(e){return{type:q,payload:e}},ce=function(e,t){if(t.type===M)return Object(d.a)(Object(d.a)({},e),{},{albums:Object(d.a)(Object(d.a)({},e.albums),{},{isLoading:!0})});if(t.type===z){var n=t.payload.albums.map((function(e){return{value:e.id,optionLabel:e.title}}));return Object(d.a)(Object(d.a)({},e),{},{albums:Object(d.a)(Object(d.a)({},e.albums),{},{isLoading:!1,error:null,items:[].concat(Object(v.a)(e.albums.items),Object(v.a)(n))})})}if(t.type===F)return Object(d.a)(Object(d.a)({},e),{},{albums:Object(d.a)(Object(d.a)({},e.albums),{},{isLoading:!1,error:t.payload.error})});if(t.type===H)return Object(d.a)(Object(d.a)({},e),{},{photos:Object(d.a)(Object(d.a)({},e.photos),{},{isLoading:!0,items:e.isDesktop?[]:Object(v.a)(e.photos.items)})});if(t.type===D)return Object(d.a)(Object(d.a)({},e),{},{photos:Object(d.a)(Object(d.a)({},e.photos),{},{isLoading:!1,items:[].concat(Object(v.a)(e.photos.items),Object(v.a)(t.payload.photos)),totalItems:Number(t.payload.totalItems)})});if(t.type===U)return Object(d.a)(Object(d.a)({},e),{},{photos:Object(d.a)(Object(d.a)({},e.photos),{},{isLoading:!1})});if(t.type===R)return Object(d.a)(Object(d.a)({},e),{},{photos:Object(d.a)(Object(d.a)({},e.photos),{},{items:[],totalItems:0}),query:Object(d.a)(Object(d.a)({},e.query),{},{itemsPerPage:t.payload,currentPage:1})});if(t.type===B)return Object(d.a)(Object(d.a)({},e),{},{photos:Object(d.a)(Object(d.a)({},e.photos),{},{items:[],totalItems:0}),query:Object(d.a)(Object(d.a)({},e.query),{},{search:t.payload,currentPage:1})});if(t.type===J)return Object(d.a)(Object(d.a)({},e),{},{photos:Object(d.a)(Object(d.a)({},e.photos),{},{items:[],totalItems:0}),query:Object(d.a)(Object(d.a)({},e.query),{},{albumId:t.payload,currentPage:1})});if(t.type===G)return Object(d.a)(Object(d.a)({},e),{},{query:Object(d.a)(Object(d.a)({},e.query),{},{currentPage:t.payload})});if(t.type===N)return Object(d.a)(Object(d.a)({},e),{},{query:Object(d.a)(Object(d.a)({},e.query),{},{currentPage:e.query.currentPage+1})});if(t.type===V&&e.isDesktop!==t.payload){var a=Object(d.a)(Object(d.a)({},e),{},{isDesktop:t.payload});return 1!==e.query.currentPage&&(a=Object(d.a)(Object(d.a)({},e),{},{query:Object(d.a)(Object(d.a)({},e.query),{},{currentPage:1})})),a}return e},oe=[{value:20,optionLabel:20},{value:50,optionLabel:50},{value:100,optionLabel:100}];function se(){var e=Object(r.useState)(window.innerWidth>=768),t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){function e(){a(window.innerWidth>=768)}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),n}var ie={headers:{title:"{JSON} Photos",drawerTitle:"Search tools"},labels:{search:"Search images by title",folder:"Filter images by album",itemsPerPage:"Items per page"},placeholders:{search:"Search for a title",folder:"Search for a album"},misc:{allAlbums:"All albums",viewFullSize:"View full size"}},ue=function(){return function(e){var t=localStorage.getItem(e);return JSON.parse(t)}("items_per_page")||20},le=function(e){return function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}("items_per_page",e)},be=n(7),je=Object(r.createContext)();je.displayName="photos.state";var pe=function(e){return function(t){return function(n){var a=Object(r.useContext)(je),c=e(a);return Object(be.jsx)(t,Object(d.a)(Object(d.a)({},n),c))}}},de=function(e){var t=e.currentPage,n=e.totalItems,a=e.itemsPerPage,r=e.onPageChange,c=e.isLoading;return Object(be.jsx)(p,{children:Object(be.jsx)(l.a,{current:t,total:n,pageSize:a,onChange:r,showSizeChanger:!1,disabled:c})})};de.defaultProps={currentPage:4,totalItems:1e3,itemsPerPage:20,onPageChange:function(){},isLoading:!1};var he,Oe,me=pe((function(e){return{currentPage:e.query.currentPage,itemsPerPage:e.query.itemsPerPage,onPageChange:e.photosActions.setCurrentPage,totalItems:e.photos.totalItems,isLoading:e.photos.isLoading}}))(de),fe=n(79),ge=n(261),xe=n(80),ye=n(42),ve=n(260),Pe=n(259),we=Object(j.b)(Pe.a)(he||(he=Object(b.a)(["\n  .ant-card-cover {\n    padding-top: 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-image: url(",");\n  }\n  .ant-image {\n    position: absolute;\n    left: 0;\n    top: 0;\n  }\n"])),"/test-photo-dashboard/fallback.png"),Ee=Object(j.b)(Pe.a)(Oe||(Oe=Object(b.a)(["\n  height: 100%;\n  .ant-skeleton-element {\n    position: relative;\n    width: 100%;\n    padding-top: 100%;\n  }\n  .ant-skeleton-title {\n    margin: 6px 0 2px;\n  }\n  .ant-skeleton-image {\n    position: absolute;\n    width: auto;\n    height: auto;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-color: hsla(0, 0%, 74.5%, 0.3);\n  }\n"]))),Se=function(e){var t=e.title,n=e.url,a=e.thumbnailUrl;return Object(be.jsx)(we,{bordered:!0,hoverable:!0,cover:Object(be.jsx)(ve.a,{width:"100%",src:a,fallback:"".concat("/test-photo-dashboard","/broken.png"),preview:{src:n,mask:ie.misc.viewFullSize}}),children:Object(be.jsx)(we.Meta,{title:t})})};Se.defaultProps={title:"",url:"",thumbnailUrl:""};var Ce=Se,Ie=n(265),Le=function(){return Object(be.jsx)(Ee,{bordered:!0,cover:Object(be.jsx)(Ie.a.Image,{}),children:Object(be.jsx)(Pe.a.Meta,{title:Object(be.jsx)(Ie.a,{active:!0,paragraph:!1})})})},Te=n(153),_e=function(e){var t=e.items,n=e.isLoading,a=e.search,r=e.totalItems,c=e.currentPage,o=e.itemsPerPage,s=e.loadMore,i=se(),u=r>c*o;return n||0!==t.length?i?Object(be.jsxs)(xe.a,{gutter:[12,12],children:[t.map((function(e){return Object(be.jsx)(ye.a,{xs:24,sm:12,md:8,lg:6,children:Object(be.jsx)(Ce,Object(d.a)({},e))},e.id)})),n&&new Array(3).fill().map((function(e,t){return Object(be.jsx)(ye.a,{xs:24,sm:12,md:8,lg:6,children:Object(be.jsx)(Le,{})},t)}))]}):Object(be.jsx)(Te.a,{dataLength:t.length,next:s,style:{overflow:"initial"},endMessage:Object(be.jsx)(fe.a,{style:{marginTop:"2rem"},description:Object(be.jsx)(ge.a.Text,{strong:!0,children:"Yay! You have seen it all"})}),hasMore:u,children:Object(be.jsxs)(xe.a,{gutter:[12,12],children:[t.map((function(e){return Object(be.jsx)(ye.a,{xs:24,sm:12,md:8,lg:6,children:Object(be.jsx)(Ce,Object(d.a)({},e))},e.id)})),n&&new Array(3).fill().map((function(e,t){return Object(be.jsx)(ye.a,{xs:24,sm:12,md:8,lg:6,children:Object(be.jsx)(Le,{})},t)}))]})}):Object(be.jsx)(fe.a,{image:fe.a.PRESENTED_IMAGE_SIMPLE,description:a?Object(be.jsx)(ge.a.Text,{textCenter:!0,strong:!0,type:"warning",children:"No photos found"}):Object(be.jsx)(ge.a.Text,{textCenter:!0,strong:!0,type:"danger",children:"Something went wrong"})})};_e.defaultProps={items:[],isLoading:!1,search:"",totalItems:0,loadMore:function(){}};var ke,Ae,qe=pe((function(e){return{items:e.photos.items,isLoading:e.photos.isLoading,totalItems:e.photos.totalItems,search:e.query.search,currentPage:e.query.currentPage,itemsPerPage:e.query.itemsPerPage,loadMore:e.photosActions.incrementCurrentPage}}))(_e),Me=n(62),ze=j.b.label(ke||(ke=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Fe=j.b.span(Ae||(Ae=Object(b.a)(["\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.75);\n"]))),He=function(e){var t=e.type,n=e.label,a=Object(Me.a)(e,["type","label"]);return Object(be.jsxs)(ze,{children:[n&&Object(be.jsx)(Fe,{children:n}),"text"===t&&Object(be.jsx)(Ge,Object(d.a)({},a)),"select"===t&&Object(be.jsx)(Ne,Object(d.a)({},a)),"search"===t&&Object(be.jsx)($e,Object(d.a)({},a))]})};He.defaultProps={label:"",type:"text"};var De=He,Ue=n(86),Re=function(e){var t=e.options,n=Object(Me.a)(e,["options"]);return Object(be.jsx)(Ue.a,Object(d.a)(Object(d.a)({size:"large"},n),{},{children:t.map((function(e){return Object(be.jsx)(Ue.a.Option,{value:e.value,children:e.optionLabel},e.value)}))}))};Re.defaultProps={options:[]};var Ne=Re,Be=n(264),Je=function(e){return Object(be.jsx)(Be.a,Object(d.a)({size:"large"},e))};Je.defaultProps={};var Ge=Je,Ve=function(e){return Object(be.jsx)(Be.a.Search,Object(d.a)({size:"large"},e))};Ve.defaultProps={};var We,Qe,Ye,Ke,Xe,Ze,$e=Ve,et=j.b.div(We||(We=Object(b.a)(["\n  margin-bottom: 2rem;\n"]))),tt=pe((function(e){return{albumId:e.query.albumId,itemsPerPage:e.query.itemsPerPage,albums:e.albums.items,onAlbumChange:e.photosActions.setCurrentAlbum,onItemsPerPageChange:e.photosActions.setItemsPerPage,onSetSearch:e.photosActions.setSearch}}))((function(e){var t=e.albumId,n=e.itemsPerPage,a=e.albums,r=e.onSetSearch,c=e.onAlbumChange,o=e.onItemsPerPageChange;return Object(be.jsx)(et,{children:Object(be.jsxs)(xe.a,{gutter:[12,12],justify:"space-between",children:[Object(be.jsx)(ye.a,{xs:24,md:8,children:Object(be.jsx)(De,{type:"search",placeholder:ie.placeholders.search,label:ie.labels.search,onSearch:r,allowClear:!0})}),Object(be.jsx)(ye.a,{xs:24,md:8,children:Object(be.jsx)(De,{type:"select",placeholder:ie.placeholders.folder,label:ie.labels.folder,value:t,options:a,onChange:c,showSearch:!0})}),Object(be.jsx)(ye.a,{xs:24,md:6,lg:4,children:Object(be.jsx)(De,{type:"select",label:ie.labels.itemsPerPage,value:n,options:oe,onChange:o})})]})})})),nt=n(267),at=n(268),rt=n(266),ct=Object(j.b)(ge.a.Title)(Qe||(Qe=Object(b.a)(["\n  &.ant-typography {\n    color: #fff;\n    font-size: 1.5rem;\n    margin-bottom: 0;\n  }\n"]))),ot=Object(j.b)((function(e){e.isMobile;var t=Object(Me.a)(e,["isMobile"]);return Object(be.jsx)(nt.a.Header,Object(d.a)({},t))}))(Ye||(Ye=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  & > div {\n    width: 100%;\n  }\n  ","\n"])),(function(e){return e.isMobile&&Object(j.a)(Ke||(Ke=Object(b.a)(["\n      position: fixed;\n      z-index: 1;\n      width: 100%;\n    "])))})),st=Object(j.b)((function(e){e.isMobile;var t=Object(Me.a)(e,["isMobile"]);return Object(be.jsx)(nt.a.Content,Object(d.a)({},t))}))(Xe||(Xe=Object(b.a)(["\n  width: 100%;\n  padding: 2rem 15px;\n  margin-right: auto;\n  margin-left: auto;\n  @media (min-width: 576px) {\n    max-width: 540px;\n  }\n\n  @media (min-width: 768px) {\n    max-width: 720px;\n  }\n\n  @media (min-width: 992px) {\n    max-width: 960px;\n  }\n\n  @media (min-width: 1200px) {\n    max-width: 1140px;\n  }\n  ","\n"])),(function(e){return e.isMobile&&Object(j.a)(Ze||(Ze=Object(b.a)(["\n      margin-top: 64px;\n    "])))})),it=function(e){return Object(be.jsx)("svg",Object(d.a)(Object(d.a)({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"filter",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),{},{children:Object(be.jsx)("path",{fill:"currentColor",d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"})}))};it.defaultProps={height:16,width:16,color:"currentColor"};var ut,lt=it,bt=j.b.button.attrs({type:"button"})(ut||(ut=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  color: #fff;\n  margin-left: auto;\n  cursor: pointer;\n  &:hover {\n    color: #40a9ff;\n  }\n"]))),jt=function(e){var t=e.onClick;return Object(be.jsx)(bt,{onClick:function(e){e.preventDefault(),t(e)},children:Object(be.jsx)(lt,{})})},pt=function(e){var t=e.children,n=e.operationsBar,a=se(),c=Object(r.useState)(!1),o=Object(f.a)(c,2),s=o[0],i=o[1];return Object(be.jsxs)(nt.a,{children:[Object(be.jsx)(ot,{isMobile:!a,children:Object(be.jsxs)(xe.a,{align:"middle",children:[Object(be.jsx)(ye.a,{xs:22,md:24,children:Object(be.jsx)(ct,{children:ie.headers.title})}),!a&&Object(be.jsx)(ye.a,{xs:2,children:Object(be.jsx)(jt,{onClick:function(){i(!s)}})})]})}),Object(be.jsx)(nt.a,{children:Object(be.jsxs)(st,{isMobile:!a,children:[n&&a&&n,n&&!a&&Object(be.jsx)(at.a,{title:ie.headers.drawerTitle,placement:"right",onClose:function(){i(!1)},visible:s,children:n}),t]})}),Object(be.jsx)(rt.a,{})]})},dt=function(){var e=se();return Object(be.jsxs)(pt,{operationsBar:Object(be.jsx)(tt,{}),children:[Object(be.jsx)(qe,{}),e&&Object(be.jsx)(me,{})]})},ht=new i.a;var Ot,mt=(Ot=function(){return Object(be.jsx)(u.a,{client:ht,children:Object(be.jsx)(dt,{})})},function(e){var t=se(),n={photos:{isLoading:!1,error:null,items:[],totalItems:0},albums:{isLoading:!1,error:null,items:[{value:0,optionLabel:ie.misc.allAlbums}]},query:{currentPage:1,itemsPerPage:ue(),search:"",albumId:0},isDesktop:t},a=Object(r.useReducer)(ce,n),c=Object(f.a)(a,2),o=c[0],s=c[1],i={setCurrentPage:function(e){s(ae(e))},setCurrentAlbum:function(e){s(ne(e))},setItemsPerPage:function(e){s($(e)),le(e)},setSearch:function(e){s(te(e))},incrementCurrentPage:function(){s(ee())}};return Object(r.useEffect)((function(){var e=new y;!function(){var t=Object(m.a)(O.a.mark((function t(){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(W()),t.prev=1,t.next=4,e.fetchAlbums();case 4:n=t.sent,s(Q(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),s(Y(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}()()}),[]),Object(r.useEffect)((function(){var e=new y;!function(){var t=Object(m.a)(O.a.mark((function t(){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(K()),t.prev=1,t.next=4,e.fetchPosts(o.query);case 4:n=t.sent,s(X(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),s(Z(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}()()}),[o.query]),Object(r.useEffect)((function(){s(re(t))}),[t]),Object(be.jsx)(je.Provider,{value:Object(d.a)(Object(d.a)({},o),{},{photosActions:i}),children:Object(be.jsx)(Ot,Object(d.a)({},e))})});s.a.render(Object(be.jsx)(c.a.StrictMode,{children:Object(be.jsx)(mt,{})}),document.getElementById("root"))}},[[255,1,2]]]);
//# sourceMappingURL=main.21fe494f.chunk.js.map