(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={Form:"ContactForm_Form__Vd_-O",Input:"ContactForm_Input__HKadG",Label:"ContactForm_Label___hNWO"}},,,,function(t,e,n){t.exports={Title:"App_Title__2qxNr",Text:"App_Text__2XzuS"}},,function(t,e,n){t.exports={Input:"Filter_Input__20k7U",Label:"Filter_Label__3FoRN"}},function(t,e,n){t.exports={List:"ContactList_List__20gyh",Item:"ContactList_Item__3bY-S"}},,function(t,e,n){t.exports={Modal__backdrop:"Modal_Modal__backdrop__2FvUl",Modal__content:"Modal_Modal__content__1199M"}},,function(t,e,n){},function(t,e,n){t.exports={Container:"Container_Container__3kMWm"}},function(t,e,n){t.exports={IconButton:"IconButton_IconButton__12hbj"}},,,,,,,,function(t,e,n){},,,,,,,,,function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(1),c=n.n(r),o=n(8),l=n.n(o),i=(n(27),n(20)),s=n(2),u=n(3),h=n(5),d=n(4),b=n(16),f=n.n(b),m=n(10),p=n.n(m),j=n(17),v=n.n(j);var O=function(t){var e=t.children;return Object(a.jsx)("section",{className:v.a.Section,children:e})},g=n(18),y=n.n(g);var _=function(t){var e=t.children;return Object(a.jsx)("div",{className:y.a.Container,children:e})},x=n(9),C=n(6),w=n.n(C),k=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(x.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:w.a.Form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:w.a.Label,children:["Name"," ",Object(a.jsx)("input",{className:w.a.Input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange,placeholder:"Sidr Sidorov"})]}),Object(a.jsxs)("label",{className:w.a.Label,children:["Number"," ",Object(a.jsx)("input",{className:w.a.Input,type:"phone",name:"number",value:this.state.number,onChange:this.handleChange,placeholder:"777-77-77"})]}),Object(a.jsx)("button",{type:"submit",children:"Add Contact"})]})}}]),n}(r.Component),S=n(12),M=n.n(S);var N=function(t){var e=t.filter,n=t.onChange;return Object(a.jsxs)("label",{className:M.a.Label,children:["Find contacts by name",Object(a.jsx)("input",{className:M.a.Input,type:"text",value:e,onChange:n,placeholder:"What are you looking for?"})]})},I=n(13),L=n.n(I),E=n(14),F=n(21),z=n(19),D=n.n(z);function P(t){var e=t.children,n=t.onClick,r=Object(F.a)(t,["children","onClick"]);return Object(a.jsx)("button",Object(E.a)(Object(E.a)({type:"button",className:D.a.IconButton,onClick:n},r),{},{children:e}))}P.defaultProps={onClick:function(){return null},children:null};var T=P;function B(){return(B=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function A(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var V=r.createElement("path",{d:"M306.114 45.35l-68.025-.295V36.62c0-20.226-18.548-36.62-41.45-36.62h-53.128c-22.902 0-41.473 16.394-41.473 36.62v8.73l-68.025.045v45.396h23.355c-.408 3.628-.68 7.301-.68 10.997v181.583c0 29.863 14.512 56.756 45.35 56.756h136.051c30.838 0 45.35-26.893 45.35-56.756V101.789c0-3.719-.159-7.392-.454-10.997h23.129V45.35zm-181.401-8.73c0-7.551 8.617-13.923 18.798-13.923h53.128c10.181 0 18.798 6.372 18.798 13.923v8.73h-90.701v-8.73h-.023zm136.051 246.729c0 17.415-4.308 34.058-22.675 34.058H102.038c-18.344 0-22.675-16.644-22.675-34.058v-181.56c0-3.764.249-7.46.771-10.997h179.882c.499 3.537.771 7.233.771 10.997v181.56h-.023zm-158.726 11.428h22.675V113.376h-22.675v181.401zm56.688 0h22.675V113.376h-22.675v181.401zm56.688 0h22.675V113.376h-22.675v181.401z"});function H(t,e){var n=t.title,a=t.titleId,c=A(t,["title","titleId"]);return r.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 340.127 340.127",ref:e,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,V)}var J=r.forwardRef(H);n.p;var K=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:L.a.List,children:e.map((function(t){var e=t.id,r=t.name,c=t.number;return Object(a.jsxs)("li",{className:L.a.Item,children:[Object(a.jsxs)("p",{children:[r,": ",c]}),Object(a.jsx)(T,{onClick:function(){return n(e)},"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",children:Object(a.jsx)(J,{width:"25",height:"25"})})]},e)}))})},U=n(15),W=n.n(U),R=document.querySelector("#modal-root"),q=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).handleKeyDown=function(e){"Escape"===e.code&&t.props.onClose()},t.handleBackDropClick=function(e){e.currentTarget===e.target&&t.props.onClose()},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(a.jsx)("div",{className:W.a.Modal__backdrop,onClick:this.handleBackDropClick,children:Object(a.jsx)("div",{className:W.a.Modal__content,children:this.props.children})}),R)}}]),n}(r.Component);function G(){return(G=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function X(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var Y=r.createElement("path",{d:"M204.87 232.439h1.2c104.4-1.1 89.2-140.4 89.2-140.4-4.3-93.1-82.2-92.3-89.8-92-7.7-.3-85.6-1.1-89.8 92 0-.1-15.2 139.3 89.2 140.4zM382.97 301.839c-7.3-11-18.1-19.2-34.4-25.1-47.2-18-75.5-36.5-75.5-36.5l-36.4 115-5 15.6-16.3-46.2c37.4-52.2-2.8-54.7-9.8-54.8h-.4c-7 .1-47.2 2.5-9.8 54.8l-16.3 46.2-5-15.6-36.4-115s-28.3 18.5-75.5 36.5c-52 18.9-48.8 61.7-49.8 141.9h275.7c-.3-3.4-.5-6.8-.5-10.3.1-55.1 41.9-100.6 95.4-106.5z"}),Q=r.createElement("path",{d:"M396.17 329.939c-43.4 0-78.7 35.2-78.7 78.6s35.2 78.6 78.7 78.6c43.4 0 78.6-35.2 78.6-78.6s-35.1-78.6-78.6-78.6zm38.4 89.3h-27.7v27.7h-21.3v-27.7h-27.7v-21.3h27.7v-27.7h21.3v27.7h27.7v21.3z"});function Z(t,e){var n=t.title,a=t.titleId,c=X(t,["title","titleId"]);return r.createElement("svg",G({viewBox:"0 0 487.139 487.139",ref:e,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,Y,Q)}var $=r.forwardRef(Z),tt=(n.p,function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:"",showModal:!1},t.formSubmitHandler=function(e){var n=e.name,a=e.number,r={id:f.a.generate(),name:n,number:a},c=t.state.contacts;null===c?t.setState((function(t){t.contacts;return{contacts:[r]}})):c.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts.")):c.find((function(t){return t.number===a}))?alert("".concat(a," is already in contacts.")):""===n.trim()||""===a.trim()?alert("Enter the contact's name and number phone!"):/\d{3}[-]\d{2}[-]\d{2}/g.test(a)?t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(i.a)(e))}})):alert("Enter the correct number phone!"),t.toggleModal()},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.toggleModal=function(){t.setState((function(t){return{showModal:!t.showModal}}))},t.getFilteredContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a?a.filter((function(t){return t.name.toLowerCase().includes(r)})):[]},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.setState({contacts:JSON.parse(localStorage.getItem("contacts"))})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.showModal,r=this.getFilteredContacts();return Object(a.jsx)(O,{children:Object(a.jsxs)(_,{children:[Object(a.jsx)("h1",{className:p.a.Title,children:"Phonebook"}),Object(a.jsxs)("p",{className:p.a.Text,children:["Add Contact:"," ",Object(a.jsx)(T,{onClick:this.toggleModal,"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",children:Object(a.jsx)($,{width:"30",height:"30"})})]}),n&&Object(a.jsx)(q,{onClose:this.toggleModal,children:Object(a.jsx)(k,{onSubmit:this.formSubmitHandler})}),Object(a.jsx)("h2",{className:p.a.Title,children:"Contacts"}),Object(a.jsx)(N,{filter:e,onChange:this.changeFilter}),Object(a.jsx)(K,{contacts:r,onDeleteContact:this.deleteContact})]})})}}]),n}(r.PureComponent));l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(tt,{})}),document.getElementById("root"))}],[[36,1,2]]]);
//# sourceMappingURL=main.de350870.chunk.js.map