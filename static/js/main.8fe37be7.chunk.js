(this["webpackJsonpbin-2-dec"]=this["webpackJsonpbin-2-dec"]||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),c=t(4),i=t.n(c),s=(t(13),t(0));var o=function(){return Object(s.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{className:"display-4",children:"Bin2Dec"}),Object(s.jsx)("p",{className:"lead",children:"Conversor de bin\xe1rio para decimal"})]})})},u=t(3),l=t(5),b=t(6),d=t(8),m=t(7),j=function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=n.call(this,e)).renderDecDisplay=function(){var e=r.state.decimalNumberDisplay;return Object(s.jsx)("div",{className:"decDisplay mb-5 border border-dark",children:Object(s.jsx)("p",{id:"resultado",className:"display-1 container mb-0",children:e})})},r.handleChange=function(e){var n,t=e.target,a=t.name,c=t.value,i=c.match(/[^0-1]/);r.setState((n={},Object(u.a)(n,a,c),Object(u.a)(n,"isNotBinaryNumber",i),n))},r.renderBinInput=function(){var e=r.props.binaryNumberInput;return Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{className:"form-control form-control-lg",type:"number",name:"binaryNumberInput",placeholder:"Insira um n\xfamero bin\xe1rio",value:e,onChange:r.handleChange})})},r.renderErrorAlert=function(){return Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:"\u2757Ops... Insira somente 0 e 1\u2757"})},r.charToInt=function(e){return parseInt(e)},r.bin2Dec=function(){var e=r.state,n=e.binaryNumberInput;if(!e.isNotBinaryNumber){for(var t=0,a=n.length-1,c=0;c<n.length;c+=1){var i=n.charAt(c);t+=r.charToInt(i)*Math.pow(2,a),a-=1}r.setState({decimalNumberDisplay:t})}},r.renderButton=function(){return Object(s.jsx)("button",{type:"button",className:"btn btn-secondary btn-lg btn-block",onClick:function(){return r.bin2Dec()},children:"Converter"})},r.state={binaryNumberInput:"",isNotBinaryNumber:!1,decimalNumberDisplay:0},r}return Object(b.a)(t,[{key:"render",value:function(){var e=this.state.isNotBinaryNumber;return Object(s.jsxs)("section",{className:"conteudo",children:[this.renderDecDisplay(),this.renderBinInput(),e&&this.renderErrorAlert(),this.renderButton()]})}}]),t}(r.Component);t(15);var h=function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(o,{}),Object(s.jsx)(j,{})]})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.8fe37be7.chunk.js.map