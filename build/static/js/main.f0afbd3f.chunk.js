(this["webpackJsonpforeign-language-films"]=this["webpackJsonpforeign-language-films"]||[]).push([[0],{22:function(e,t,a){},40:function(e,t,a){e.exports=a(52)},45:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),i=a.n(l),c=a(39),o=(a(45),a(10)),u=a(11),s=a(18),m=a(13),p=a(14),h=(a(22),function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={fill:0,hidden:!0},n}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.percentage!==e.percentage&&this.setState({fill:this.props.percentage})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"You have watched ",this.props.foreign.length," foreign language films and ",this.props.english.length," English language films."),r.a.createElement("p",null,"This means that ",this.props.percentage,"% of your viewing has been in a foreign language."),r.a.createElement("p",null,this.props.percentage>=50?"Great! Keep it up. Check out a recommendation below.":"You can do better. Why not get a recommendation below?"),r.a.createElement("div",{id:"prbar"},r.a.createElement("div",{id:"prpos",style:{width:this.state.fill+"%"}})))}}]),a}(r.a.Component)),d=a(19),g=a(26);var f=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=t[0],l=(t[1],Object(n.useState)("")),i=Object(g.a)(l,2),c=i[0];return i[1],r.a.createElement("div",null,r.a.createElement("p",{className:"popover-title"},a),r.a.createElement("p",{className:"blurb"},c))},b=a(29),v=a(16),E=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{rootClose:!0,trigger:"click","data-trigger":"focus",key:"bottom",placement:"bottom",overlay:r.a.createElement(v.a,{id:"popover-positioned-bottom"},r.a.createElement(v.a.Title,{as:"h3"},"What about..."),r.a.createElement(v.a.Content,null,r.a.createElement(f,null)))},r.a.createElement(d.a,{variant:"primary"},"Recommend me a film!")))}}]),a}(r.a.Component),y=a(21);var O=function(e){var t=Object(n.useState)(!1),a=Object(g.a)(t,2),l=a[0],i=a[1],c=function(e){i(!0),u(e.target.parentNode.getAttribute("filmid"))},o=[],u=function(e){};return e.results.length>0?(o=e.results.slice(0,5).map((function(e){return r.a.createElement("div",{id:"clickable-div",onClick:c,key:e.id,filmid:e.id},r.a.createElement("li",null,e.title))})),r.a.createElement("div",null,r.a.createElement(y.a,{show:l,onHide:function(){return i(!1)},animation:!0},r.a.createElement(y.a.Header,{closeButton:!0},r.a.createElement(y.a.Title,null,"Success!")),r.a.createElement(y.a.Body,null,"Your film has been logged, and your data should now be updated."),r.a.createElement(y.a.Footer,null,r.a.createElement(d.a,{variant:"secondary"},"Okedoke"))),r.a.createElement("div",null,o))):e.typed?r.a.createElement("div",null,r.a.createElement("p",null,"No results")):null},j=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getInfo=function(){},n.handleInput=n.handleInput.bind(Object(s.a)(n)),n.state={query:"",results:[],typed:!1},n}return Object(u.a)(a,[{key:"handleInput",value:function(){var e=this;this.setState({query:this.search.value},(function(){e.state.query&&e.state.query.length>1?e.state.query.length%2===0&&(e.getInfo(),e.setState({typed:!0})):e.state.query||e.setState({typed:!1})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,r.a.createElement("input",{placeholder:"Film name... ",ref:function(t){return e.search=t},onChange:this.handleInput}),this.state.query?r.a.createElement(O,{results:this.state.results,typed:this.state.typed,updater:this.props.updater}):r.a.createElement("div",null)))}}]),a}(r.a.Component),k=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{rootClose:!0,trigger:"click","data-trigger":"focus",key:"bottom",placement:"bottom",overlay:r.a.createElement(v.a,{id:"popover-positioned-bottom",style:{margin:0}},r.a.createElement(v.a.Title,{as:"h3"},"Search film"),r.a.createElement(v.a.Content,null,r.a.createElement(j,{updater:this.props.updater})))},r.a.createElement(d.a,{variant:"primary"},"I watched something!")))}}]),a}(r.a.Component),C=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).pageNum=2,n.apiData=[],n.state={foreignFilms:[],englishFilms:[],percentage:0},n.refresher=function(){},n.refresher=n.refresher.bind(Object(s.a)(n)),n}return Object(u.a)(a,[{key:"getAllPages",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"organiseData",value:function(){var e=this.apiData.filter((function(e){return"en"!==e.original_language})),t=this.apiData.filter((function(e){return"en"===e.original_language})),a=e.length/this.apiData.length*100;Number.isInteger(a)||(a=a.toFixed(2)),this.setState({foreignFilms:e,englishFilms:t,percentage:a})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,{foreign:this.state.foreignFilms,english:this.state.englishFilms,percentage:this.state.percentage}),r.a.createElement("br",null),r.a.createElement("div",{className:"buttons"},r.a.createElement(E,null),r.a.createElement(k,{updater:this.refresher})))}}]),a}(r.a.Component);i.a.render(r.a.createElement(c.a,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.f0afbd3f.chunk.js.map