(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/img1.7e650390.svg"},21:function(e,t,n){e.exports=n(41)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(18),c=n.n(l),r=(n(26),n(27),n(10)),o=n(5),s=n(6),m=n(7),u=n(8),d=(n(28),n(29),function(e){var t=e.input,n=e.handleChange,a=e.handleClick,l=e.handleKeyDown;return i.a.createElement("div",{className:"input"},i.a.createElement("input",{maxLength:"20",spellCheck:"false",value:t,onChange:n,onKeyDown:l,type:"text",className:"input__field",placeholder:"New item ..."}),i.a.createElement("button",{onClick:a,className:"input__btn"}))}),h=(n(30),n(4)),f=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).inputRef=i.a.createRef(),e.state={input:e.props.title},e.handleChange=function(t){e.setState({input:t.target.value})},e.renderItem=function(){var t=e.props,n=t.id,a=t.title,l=t.handleDeleteItem,c=t.handleDoubleClick,r=t.handleBlur,o=t.handleCheckClick,s=t.isEditing,m=t.isComplete;return i.a.createElement("div",{className:"item ".concat(s?"edit":""," ").concat(m?"hide":"")},i.a.createElement("div",{className:"item__show",onDoubleClick:function(t){c(n,e.inputRef)}},a),i.a.createElement("input",{maxLength:"20",spellCheck:"false",ref:e.inputRef,value:e.state.input,onChange:e.handleChange,type:"text",className:"item__edit-field",onBlur:function(){r(e.state.input)},onKeyDown:function(t){"Enter"===t.key&&r(e.state.input)}}),i.a.createElement("button",{onClick:function(e){l(e,n)},className:"item__delete-btn"}),o&&i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{onChange:function(){o(n)},checked:!!m,className:"checkbox",type:"checkbox",id:n}),i.a.createElement("label",{htmlFor:n,className:"item__check-btn"})))},e}return Object(s.a)(n,[{key:"render",value:function(){return this.props.handleDoubleClick?this.renderItem():i.a.createElement(h.b,{to:"/todo/".concat(this.props.id)},this.renderItem())}}]),n}(i.a.Component),p=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={input:"",items:[]},e.handleChange=function(t){e.setState({input:t.target.value})},e.handleClick=function(){var t=e.state.input;if(t.trim()){var n={id:Date.now().toString(),title:t,items:[]};e.setState((function(e){return{items:[].concat(Object(r.a)(e.items),[n]),input:""}}))}},e.handleKeyDown=function(t){"Enter"===t.key&&e.handleClick(t)},e.handleDeleteItem=function(t,n){t.preventDefault(),t.stopPropagation();var a=e.state.items.filter((function(e){return e.id!==n}));e.setState({items:a})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("todos"));e&&this.setState({items:e})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("todos",JSON.stringify(this.state.items))}},{key:"renderItems",value:function(){var e=this;if(this.state.items)return this.state.items.map((function(t){var n=t.title,a=t.id;return i.a.createElement(f,{handleDeleteItem:e.handleDeleteItem,title:n,key:a,id:a})}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"todolist"},i.a.createElement(d,{input:this.state.input,handleChange:this.handleChange,handleClick:this.handleClick,handleKeyDown:this.handleKeyDown}),this.renderItems())}}]),n}(i.a.Component),v=n(20),C=n.n(v),k=(n(36),function(){return i.a.createElement("div",{className:"home"},i.a.createElement("h1",null,"ToDos"),i.a.createElement("img",{src:C.a,alt:"home"}),i.a.createElement(p,null),i.a.createElement("blockquote",null,i.a.createElement("p",null,'" It takes many good deeds to build a good reputation, and only one bad one to lose it. "'),i.a.createElement("cite",null,"- Benjamin Franklin")),i.a.createElement("h5",null,"*Click to a item for editing details"))}),g=n(1),E=n(11),b=(n(37),n(38),function(e){var t=e.title,n=e.items;return i.a.createElement("div",{className:"header"},i.a.createElement("h1",{className:"heading"},t),i.a.createElement("p",{className:"sub-heading"},"".concat(n.filter((function(e){return!1===e.isComplete})).length," tasks left")))}),y=(n(39),function(e){var t=e.filter,n=e.handleNavClick,a=e.handleClearClick;return console.log(t),i.a.createElement("div",{className:"footer"},i.a.createElement("span",{className:"All"===t?"active":void 0,onClick:n.bind(null,"All")},"All"),i.a.createElement("span",{className:"Active"===t?"active":void 0,onClick:n.bind(null,"Active")},"Active"),i.a.createElement("span",{className:"Completed"===t?"active":void 0,onClick:n.bind(null,"Completed")},"Completed"),i.a.createElement("span",{onClick:a},"Clear Completed"))}),N=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={id:"",title:"",items:[],input:"",isValidUrl:!0,editingItem:"",filter:"All"},e.allItems=[],e.handleChange=function(t){e.setState({input:t.target.value})},e.handleClick=function(){if(e.state.input.trim()&&!(e.state.input.length>30)){var t={id:Date.now().toString(),taskName:e.state.input,date:new Intl.DateTimeFormat("en-GB").format(Date.now()),isComplete:!1};e.setState((function(e){return{items:[t].concat(Object(r.a)(e.items)),input:""}}))}},e.handleDoubleClick=function(t,n){e.state.items.find((function(e){return e.id===t})).isComplete||e.setState({editingItem:t},(function(){n.current.focus()}))},e.handleBlur=function(t){if(t.trim()&&!(t.length>30)){var n=e.state.items.map((function(n){return n.id===e.state.editingItem?Object(E.a)({},n,{taskName:t}):n}));e.setState({items:n,editingItem:""})}},e.handleKeyDown=function(t){"Enter"===t.key&&e.handleClick()},e.handleDeleteItem=function(t,n){var a=e.state.items.filter((function(e){return e.id!==n}));e.setState({items:a})},e.handleCheckClick=function(t){var n=e.state.items.map((function(e){return e.id===t?Object(E.a)({},e,{isComplete:!e.isComplete}):e}));e.setState({items:n})},e.handleNavClick=function(t){e.setState({filter:t})},e.handleClearClick=function(){var t=e.state.items.filter((function(e){return!1===e.isComplete}));e.setState({items:t})},e.renderItems=function(){var t=e.state.items,n=[];switch(e.state.filter){case"All":n=t;break;case"Completed":n=t.filter((function(e){return!0===e.isComplete}));break;case"Active":n=t.filter((function(e){return!1===e.isComplete}))}return n.map((function(t){var n=t.id,a=t.taskName,l=t.date,c=t.isComplete;return i.a.createElement("div",{key:n,className:"todo__item"},i.a.createElement(f,{key:n,id:n,title:a,handleDoubleClick:e.handleDoubleClick,handleBlur:e.handleBlur,handleDeleteItem:e.handleDeleteItem,handleCheckClick:e.handleCheckClick,isEditing:n===e.state.editingItem,isComplete:c}),i.a.createElement("span",{className:"todo__date"},l))}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(this.allItems=JSON.parse(localStorage.getItem("todos")),this.allItems){var t=this.allItems.find((function(t){return t.id===e.props.match.params.id}));t?this.setState({id:t.id,title:t.title,items:t.items}):this.setState({isValidUrl:!1})}}},{key:"componentDidUpdate",value:function(){var e=this.state.id,t=this.state.title,n=this.state.items,a=this.allItems.map((function(a){return a.id===e?Object(E.a)({},a,{title:t,items:n}):a}));localStorage.setItem("todos",JSON.stringify(a))}},{key:"render",value:function(){return this.state.isValidUrl?i.a.createElement("div",{className:"todo"},i.a.createElement(b,{title:this.state.title,items:this.state.items}),i.a.createElement("div",{className:"todo__input-field"},i.a.createElement(d,{input:this.state.input,handleClick:this.handleClick,handleChange:this.handleChange,handleKeyDown:this.handleKeyDown})),this.renderItems(),i.a.createElement(y,{filter:this.state.filter,handleNavClick:this.handleNavClick,handleClearClick:this.handleClearClick})):i.a.createElement(g.a,{to:"/"})}}]),n}(i.a.Component),D=Object(g.g)(N),I=(n(40),function(){return i.a.createElement("div",{className:"todo-page"},i.a.createElement("h5",null,"*Your input value has to be under 20 characters"),i.a.createElement("h5",null,"*Double-click the task name to edit"),i.a.createElement(D,null))});var w=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(g.d,null,i.a.createElement(g.b,{path:"/todo/:id"},i.a.createElement(I,null)),i.a.createElement(g.b,{path:"/"},i.a.createElement(k,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(h.a,null,i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.178cd42b.chunk.js.map