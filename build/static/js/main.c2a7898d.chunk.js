(this["webpackJsonpfilm-app"]=this["webpackJsonpfilm-app"]||[]).push([[0],{34:function(e,t,a){},53:function(e,t,a){e.exports=a(82)},58:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),l=a.n(i),o=a(52),c=(a(58),a(38)),s=a(11),u=a(12),d=a(20),p=a(14),h=a(15),m=a(16),f=a.n(m),g=(a(34),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={fill:0},n}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.percentage!==e.percentage&&this.setState({fill:this.props.percentage})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"You have watched ",this.props.foreign.length," foreign language films and ",this.props.english.length," English language films."),r.a.createElement("p",null,"This means that ",this.props.percentage,"% of your viewing has been in a foreign language."),r.a.createElement("p",null,this.props.percentage>=50?"Great! Keep it up. Check out a recommendation below.":"You can do better. Why not get a recommendation below?"),r.a.createElement("div",{id:"prbar"},r.a.createElement("div",{id:"prpos",style:{width:this.state.fill+"%"}})))}}]),a}(r.a.Component)),b=a(21),v=a(28);var y=function(e){var t=Object(n.useState)(""),a=Object(v.a)(t,2),i=a[0],l=a[1],o=Object(n.useState)(""),c=Object(v.a)(o,2),s=c[0],u=c[1];return""===i&&f.a.get("https://api.themoviedb.org/3/list/138980?api_key=d1e40fddb73df31e61693cbf7ef094aa").then((function(e){var t=Math.floor(Math.random()*e.data.item_count);console.log(e.data),u('"'+e.data.items[t].overview+'"'),l(e.data.items[t].title+"?")})),r.a.createElement("div",null,r.a.createElement("p",null,i),r.a.createElement("p",null,s))},E=a(32),O=a(18),j=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,{rootClose:!0,trigger:"click","data-trigger":"focus",key:"bottom",placement:"bottom",overlay:r.a.createElement(O.a,{id:"popover-positioned-bottom"},r.a.createElement(O.a.Title,{as:"h3"},"What about..."),r.a.createElement(O.a.Content,null,r.a.createElement(y,null)))},r.a.createElement(b.a,{variant:"primary"},"Recommend me a film!")))}}]),a}(r.a.Component),k=a(23);var w=function(e){var t=Object(n.useState)(!1),a=Object(v.a)(t,2),i=a[0],l=a[1],o=function(e){return l(!0),s(e.target.parentNode.getAttribute("filmid"))},c=[],s=function(t){f.a.post("https://api.themoviedb.org/3/account/{account_id}/watchlist?api_key=d1e40fddb73df31e61693cbf7ef094aa&session_id=d38ef9ba5672c0c9660f9bdd47b123bf609c2a13",{media_type:"movie",media_id:t,watchlist:!0}).then((function(){e.updater()}))};return e.results.length>0?(c=e.results.slice(0,5).map((function(e){return r.a.createElement("div",{id:"clickable-div",onClick:o,key:e.id,filmid:e.id},r.a.createElement("li",null,e.title))})),r.a.createElement("div",null,r.a.createElement(k.a,{show:i,onHide:function(){return l(!1)},animation:!0},r.a.createElement(k.a.Header,{closeButton:!0},r.a.createElement(k.a.Title,null,"Success!")),r.a.createElement(k.a.Body,null,"Your film has been logged, and your data should now be updated."),r.a.createElement(k.a.Footer,null,r.a.createElement(b.a,{variant:"secondary"},"Okedoke"))),r.a.createElement("div",null,c))):e.typed?r.a.createElement("div",null,r.a.createElement("p",null,"No results")):null},_=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).url="https://api.themoviedb.org/3/search/movie?api_key=d1e40fddb73df31e61693cbf7ef094aa&query=",n.getInfo=function(){f.a.get(n.url+n.state.query+"&adult=false").then((function(e){var t=e.data.results;n.setState({results:t})}))},n.handleInput=n.handleInput.bind(Object(d.a)(n)),n.state={query:"",results:[],typed:!1},n}return Object(u.a)(a,[{key:"handleInput",value:function(){var e=this;this.setState({query:this.search.value},(function(){e.state.query&&e.state.query.length>1?e.state.query.length%2===0&&(e.getInfo(),e.setState({typed:!0})):e.state.query||e.setState({typed:!1})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("form",null,r.a.createElement("input",{placeholder:"Film name... ",ref:function(t){return e.search=t},onChange:this.handleInput}),this.state.query?r.a.createElement(w,{results:this.state.results,typed:this.state.typed,updater:this.props.updater}):r.a.createElement("div",null))}}]),a}(r.a.Component),C=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,{rootClose:!0,trigger:"click","data-trigger":"focus",key:"bottom",placement:"bottom",overlay:r.a.createElement(O.a,{id:"popover-positioned-bottom"},r.a.createElement(O.a.Title,{as:"h3"},"Search film"),r.a.createElement(O.a.Content,null,r.a.createElement(_,{updater:this.props.updater})))},r.a.createElement(b.a,{variant:"primary"},"I watched something!")))}}]),a}(r.a.Component),D=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).i=2,n.apiData=[],n.url="https://api.themoviedb.org/3/account/{account_id}/watchlist/movies?api_key=d1e40fddb73df31e61693cbf7ef094aa&session_id=d38ef9ba5672c0c9660f9bdd47b123bf609c2a13",n.state={foreignFilms:[],englishFilms:[],percentage:0},n.refresher=function(){f.a.get(n.url+"&sort_by=created_at.desc").then((function(e){n.apiData.push(e.data.results[0]),n.organiseData()}))},n.refresher=n.refresher.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"getAllPages",value:function(){var e=this;f.a.get(this.url+"&page="+this.i).then((function(t){var a;(a=e.apiData).push.apply(a,Object(c.a)(t.data.results)),e.i++,e.i<=t.data.total_pages?e.getAllPages():e.organiseData()}))}},{key:"componentDidMount",value:function(){var e=this;f.a.get(this.url).then((function(t){var a;(a=e.apiData).push.apply(a,Object(c.a)(t.data.results)),e.i<=t.data.total_pages&&e.getAllPages()}))}},{key:"organiseData",value:function(){var e=this.apiData.filter((function(e){return"en"!==e.original_language})),t=this.apiData.filter((function(e){return"en"===e.original_language})),a=e.length/this.apiData.length*100;Number.isInteger(a)||(a=a.toFixed(2)),this.setState({foreignFilms:e,englishFilms:t,percentage:a})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,{foreign:this.state.foreignFilms,english:this.state.englishFilms,percentage:this.state.percentage}),r.a.createElement("br",null),r.a.createElement("div",{className:"buttons"},r.a.createElement(j,null),r.a.createElement(C,{updater:this.refresher})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.c2a7898d.chunk.js.map