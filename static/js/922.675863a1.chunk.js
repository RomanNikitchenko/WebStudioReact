"use strict";(self.webpackChunkweb_studio_react=self.webpackChunkweb_studio_react||[]).push([[922],{6587:function(e,a,n){n.d(a,{$:function(){return t}});var s=n(184),t=function(e){var a=e.children,n=e.className;return(0,s.jsx)("section",{className:n,children:a})}},8922:function(e,a,n){n.r(a),n.d(a,{default:function(){return h}});var s=n(2791),t=n(9439),c=n(6587),o=n(4160),l=n(9442),r={form:"Form_form__e1yzW",formName:"Form_formName__by7Sx",formTel:"Form_formTel__p4gUh",formEmail:"Form_formEmail__3z3br",formComment:"Form_formComment__bJ3pR"},m=n(184),i=function(){var e=(0,s.useState)(""),a=(0,t.Z)(e,2),n=a[0],c=a[1],o=(0,s.useState)(""),l=(0,t.Z)(o,2),i=l[0],d=l[1],u=(0,s.useState)(""),_=(0,t.Z)(u,2),h=_[0],f=_[1],b=(0,s.useState)(""),x=(0,t.Z)(b,2),p=x[0],j=x[1],N=(0,s.useState)(!1),S=(0,t.Z)(N,2),k=S[0],C=S[1],g=function(e){var a=e.target,n=a.name,s=a.value,t=a.checked;switch(n){case"name":c(s);break;case"tel":d(s);break;case"email":f(s);break;case"comment":j(s);break;case"agreed":C(t);break;default:return}},v=function(){c(""),d(""),f(""),j(""),C(!1)};return(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("name: ".concat(n,", tel: ").concat(i,", email: ").concat(h,", comment: ").concat(p,", Agreed: ").concat(k)),v()},className:r.form,children:[(0,m.jsxs)("label",{className:"".concat(r.formName),children:[(0,m.jsx)("span",{className:r.labelSpan,children:"\u0418\u043c\u044f"}),(0,m.jsx)("input",{type:"text",name:"name",value:n,onChange:g})]}),(0,m.jsxs)("label",{className:"".concat(r.formTel),children:[(0,m.jsx)("span",{className:r.labelSpan,children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),(0,m.jsx)("input",{type:"tel",name:"tel",value:i,onChange:g})]}),(0,m.jsxs)("label",{className:"".concat(r.formEmail),children:[(0,m.jsx)("span",{className:r.labelSpan,children:"\u041f\u043e\u0447\u0442\u0430"}),(0,m.jsx)("input",{type:"email",name:"email",value:h,onChange:g})]}),(0,m.jsxs)("label",{className:"".concat(r.formComment),children:[(0,m.jsx)("span",{className:r.labelSpan,children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}),(0,m.jsx)("textarea",{name:"comment",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",value:p,onChange:g})]}),(0,m.jsxs)("label",{children:[(0,m.jsx)("input",{type:"checkbox",name:"agreed",checked:k,onChange:g}),(0,m.jsx)("span",{children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c \u0441 \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u043e\u0439 \u0438 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e \u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430"})]}),(0,m.jsxs)("button",{type:"submit",disabled:!k,children:["Sign up as ",n]})]})},d=n(5261),u={heroSection:"Hero_heroSection__2JBV2",heroTitle:"Hero_heroTitle__edyX1",heroBtn:"Hero_heroBtn__yz-dP",modal__backdrop:"Hero_modal__backdrop__lQfAI",modal__content:"Hero_modal__content__SvC9y",beckdropIsHidden:"Hero_beckdropIsHidden__ig5u2",btnClose:"Hero_btnClose__6ju0H",icon:"Hero_icon__OlEJm"},_=function(){var e=(0,s.useState)(!1),a=(0,t.Z)(e,2),n=a[0],r=a[1],_=(0,s.useState)(!0),h=(0,t.Z)(_,2),f=h[0],b=h[1],x=(0,s.useState)(!1),p=(0,t.Z)(x,2),j=p[0],N=p[1],S=function(){j||(N(!0),!1===n&&(r(!0),setTimeout((function(){b(!1),N(!1)}),150)),!0===n&&(b(!0),setTimeout((function(){r(!1),N(!1)}),300)))};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(c.$,{className:u.heroSection,children:[(0,m.jsx)("h1",{className:u.heroTitle,children:"\u042d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0431\u0438\u0437\u043d\u0435\u0441\u0430"}),(0,m.jsx)(o.E,{className:u.heroBtn,handleBtnClick:S,children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0443"})]}),n&&(0,m.jsxs)(l.u,{className:u,isHidden:f,children:[(0,m.jsx)(o.E,{className:u.btnClose,handleBtnClick:S,children:(0,m.jsx)(d.e,{className:u.icon,iconId:"modalClose",width:"11",height:"11"})}),(0,m.jsx)(i,{})]})]})},h=function(){return(0,m.jsx)("main",{children:(0,m.jsx)(_,{})})}}}]);
//# sourceMappingURL=922.675863a1.chunk.js.map