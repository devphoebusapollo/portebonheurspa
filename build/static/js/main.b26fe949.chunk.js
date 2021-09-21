(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,c,s){},110:function(e,c,s){},112:function(e,c,s){"use strict";s.r(c);var t=s(1),a=s.n(t),i=s(44),n=s.n(i),r=(s(53),s(10)),l=(s(54),s.p+"static/media/official-logo.2f8a5c4f.png"),j=s(0),d=function(){return Object(j.jsxs)("nav",{children:[Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)("img",{src:l,alt:"porte-bonheur-spa-logo"})}),Object(j.jsxs)("ul",{children:[Object(j.jsx)(r.b,{to:"/home",children:Object(j.jsx)("li",{children:"Home"})}),Object(j.jsx)(r.b,{to:"/about",children:Object(j.jsx)("li",{children:"About"})}),Object(j.jsx)(r.b,{to:"/services",children:Object(j.jsx)("li",{children:"Services"})})]})]})},o=s(2),b=(s(63),s.p+"static/media/Cover.f9534422.png"),h=s(46),x=s.n(h),O=s(13),u=s.n(O),m=s(26),f=s(12),p=s(5),g=s(28),v=s(27),y=s.n(v),N=function(e){return Object(j.jsx)("div",{className:"errMsg",children:e})},w=function(e){return Object(j.jsx)("div",{className:"successMsg",children:e})},S=(s(83),{firstname:"",lastname:"",email:"",err:"",success:""}),B={existingEmail:"",fail:"",unSubscribed:""};function W(){var e=Object(t.useState)(S),c=Object(g.a)(e,2),s=c[0],a=c[1],i=Object(t.useState)(B),n=Object(g.a)(i,2),r=n[0],l=n[1],d=s.firstname,o=s.lastname,b=s.email,h=s.err,x=s.success,O=r.existingEmail,v=r.fail,W=r.unSubscribed,k=function(e){var c,t=e.target,i=t.name,n=t.value;a(Object(p.a)(Object(p.a)({},s),{},(c={},Object(f.a)(c,i,n),Object(f.a)(c,"err",""),Object(f.a)(c,"success",""),c)))},M=function(){var e=Object(m.a)(u.a.mark((function e(c){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),0!==d.length&&0!==o.length){e.next=3;break}return e.abrupt("return",a(Object(p.a)(Object(p.a)({},s),{},{err:"Fill in all the required information",success:""})));case 3:if(0!==b.length){e.next=5;break}return e.abrupt("return",a(Object(p.a)(Object(p.a)({},s),{},{err:"Enter a valid email address",success:""})));case 5:return e.prev=5,e.next=8,y.a.post("/api/subscribe",{firstname:d,lastname:o,email:b});case 8:t=e.sent,a(Object(p.a)(Object(p.a)({},s),{},{err:"",success:t.data.msg})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),e.t0.response.data.msg&&a(Object(p.a)(Object(p.a)({},s),{},{err:e.t0.response.data.msg,success:""}));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(c){return e.apply(this,arguments)}}(),C=function(){var e=Object(m.a)(u.a.mark((function e(c){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),0!==O.length){e.next=3;break}return e.abrupt("return",l(Object(p.a)(Object(p.a)({},r),{},{fail:"Enter a valid email address",unSubscribed:""})));case 3:return e.prev=3,e.next=6,y.a.delete("/api/unsubscribe",{data:{existingEmail:O}});case 6:s=e.sent,l(Object(p.a)(Object(p.a)({},r),{},{fail:"",unSubscribed:s.data.msg})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),e.t0.response.data.msg&&l(Object(p.a)(Object(p.a)({},r),{},{fail:e.t0.response.data.msg,unSubscribed:""}));case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(c){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"form-container",children:[Object(j.jsxs)("form",{className:"subscribe-form",children:[Object(j.jsx)("h3",{className:"form-heading",children:"Newsletter"}),h&&Object(j.jsx)("div",{className:"err-notification",children:N(h)}),x&&Object(j.jsx)("div",{className:"success-notification",children:w(x)}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",value:d,name:"firstname",placeholder:"First Name",onChange:k})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",value:o,name:"lastname",placeholder:"Last Name",onChange:k})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",value:b,name:"email",placeholder:"Your email",onChange:k})}),Object(j.jsxs)("small",{children:["All the information you entered above are ",Object(j.jsx)("br",{}),"kept confidential."]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:M,children:"Subscribe"})})]}),Object(j.jsxs)("form",{className:"unsubscribe-form",children:[Object(j.jsx)("h3",{className:"form-heading",children:"Unsubscribe"}),v&&Object(j.jsx)("div",{className:"err-notification",children:N(v)}),W&&Object(j.jsx)("div",{className:"success-notification",children:w(W)}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",value:O,name:"existingEmail",placeholder:"Subscribed email",onChange:function(e){l(Object(p.a)(Object(p.a)({},r),{},{existingEmail:e.target.value,fail:"",unSubscribed:""}))}})}),Object(j.jsxs)("small",{children:["Enter the email address you used",Object(j.jsx)("br",{}),"to subscribe to unsubscribe."]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:C,children:"Unsubscribe"})})]})]})}s(84);function k(){return Object(j.jsxs)("footer",{children:[Object(j.jsx)(W,{}),Object(j.jsxs)("div",{className:"contact-container",children:[Object(j.jsx)("h3",{className:"contact-title",children:"Contact Us"}),Object(j.jsx)("a",{href:"tel:09553766952",children:"Call Us"}),Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:"portebonheurspa@gmail.com",children:"Email Us"})]})]})}var M=s.p+"static/media/pexels-elina-fairytale-3865804.0fea8add.jpg",C=s.p+"static/media/pexels-gustavo-fring-3985338.2b6c5287.jpg";function F(){return Object(j.jsxs)("section",{className:"home-section",children:[Object(j.jsx)(x.a,{bottom:!0,children:Object(j.jsx)("div",{className:"card",children:Object(j.jsx)("img",{src:b,alt:"porte-bonheur-spa"})})}),Object(j.jsxs)("div",{className:"small-cards-container",children:[Object(j.jsx)("div",{className:"card1",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:M,alt:"massage"}),Object(j.jsx)("h2",{className:"massage-heading",children:"Massage"}),Object(j.jsx)("p",{className:"massage-text",children:"We specialize in wellness or relaxation massage that promotes stress-relief and relaxation of the whole body and mind."})]})}),Object(j.jsx)("div",{className:"card2",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:C,alt:"mask-facial"}),Object(j.jsx)("h2",{className:"facial-heading",children:"Skin"}),Object(j.jsx)("p",{className:"facial-text",children:"We also offer safe skincare services like complete facial cleansing and diamond peel."})]})})]}),Object(j.jsx)(k,{})]})}s(85);var E=s(17),H=s.n(E),P=s(16),T=s.n(P);function U(){return Object(j.jsxs)("section",{className:"aboutus-container",children:[Object(j.jsx)(T.a,{speed:100,children:Object(j.jsx)("h1",{className:"about-heading",children:"Porte Bonheur SPA"})}),Object(j.jsxs)("div",{className:"vm-container",children:[Object(j.jsx)(H.a,{left:!0,children:Object(j.jsxs)("div",{className:"vision",children:[Object(j.jsx)("h2",{children:"Vision"}),Object(j.jsx)("p",{children:"To see the world where people perform at their best to attain their primary purpose for living and enjoying the best quality of life by being their consistent first and best choice for high-quality, innovative, highly-satisfying, and affordable skin-care services and massage experience need provider."})]})}),Object(j.jsx)(H.a,{right:!0,children:Object(j.jsxs)("div",{className:"mission",children:[Object(j.jsx)("h2",{children:"Mission"}),Object(j.jsx)("p",{children:"Our business is created to honor all people who work for their purpose for living by sincerely providing their need for high-quality, innovative, highly-satisfying, and affordable skin-care services and massage experience for a healthier mind, body, emotion, and spirit that enable people to perform at their best and achieve the best quality of life."})]})})]}),Object(j.jsx)(H.a,{bottom:!0,children:Object(j.jsxs)("div",{className:"owner-information",children:[Object(j.jsx)("h3",{className:"owner-heading",children:"The Management"}),Object(j.jsx)("p",{children:"The Porte Bonheur SPA is onwed and managed by Tabio family. "})]})}),Object(j.jsx)(k,{})]})}s(102);var A=s(18),D=s.n(A);function q(){return Object(j.jsxs)("section",{className:"services-container",children:[Object(j.jsx)(T.a,{children:Object(j.jsx)("h1",{children:"The services we offer"})}),Object(j.jsx)(D.a,{children:Object(j.jsxs)("div",{className:"banner-image",children:[Object(j.jsx)("img",{src:C,alt:"diamond-peel",title:"Diamond Peel with Complete Facial"}),Object(j.jsx)("img",{src:M,alt:"massage",title:"Whole Body Massage"})]})}),Object(j.jsxs)("div",{className:"s-container",children:[Object(j.jsx)(D.a,{children:Object(j.jsxs)("div",{className:"s1",children:[Object(j.jsx)("h2",{children:"Body Treatments"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Whole Body Massage (Combination of Swedish and Shiatsu)"}),Object(j.jsx)("li",{children:"Kiddie Massage"}),Object(j.jsx)("li",{children:"Whole Body Massage w/ Ventosa"}),Object(j.jsx)("li",{children:"Whole Body Massage w/ Hotstone & Ventosa"}),Object(j.jsx)("li",{children:"Whole Body Scrub w/ Whole Body Massage"}),Object(j.jsx)("li",{children:"Half Body Massage"}),Object(j.jsx)("li",{children:"Half Body Massage w/ Ventosa"}),Object(j.jsx)("li",{children:"Half Body Massage w/ Hotstone & Ventosa"}),Object(j.jsx)("li",{children:"Signature Massage (Combination of Swedish, Thai, and Shiatsu)"}),Object(j.jsx)("li",{children:"Thai Foot Massage (Foot Reflexology)"})]}),Object(j.jsx)("h2",{children:"Facial Treatments"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Complete Facial (Cleansing)"}),Object(j.jsx)("li",{children:"Complete Facial w/ Mask (24K Gold, Collagen, and LED Masks)"}),Object(j.jsx)("li",{children:"Galvanic Facial"}),Object(j.jsx)("li",{children:"Diamond Peel w/ Complete Facial"}),Object(j.jsx)("li",{children:"Diamond Peel w/ Complete Facial w/ 24K Gold Mask"}),Object(j.jsx)("li",{children:"Galvanic w/ Complete Facial"})]}),Object(j.jsx)("h2",{children:"Foot Treatments"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Foot Spa"}),Object(j.jsx)("li",{children:"Foot Spa w/ Hotstone"}),Object(j.jsx)("li",{children:"Foot Spa w/ Whitening"}),Object(j.jsx)("li",{children:"Hand Spa"}),Object(j.jsx)("li",{children:"Parafin Wax for Hands and Feet"})]})]})}),Object(j.jsx)(D.a,{children:Object(j.jsxs)("div",{className:"s2",children:[Object(j.jsx)("h2",{children:"Hair Treatments"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Permanent Hair Removal (IPL)"}),Object(j.jsx)("li",{children:"Underarm Waxing"}),Object(j.jsx)("li",{children:"Whole/Half Leg Waxing"}),Object(j.jsx)("li",{children:"Whole/Half Arm Waxing"}),Object(j.jsx)("li",{children:"Whole Body Waxing"}),Object(j.jsx)("li",{children:"Brazilian Waxing"})]}),Object(j.jsx)("h2",{children:"Body Scrub"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Whole Body Scrub"}),Object(j.jsx)("li",{children:"Whole Body Scrub w/ Scalp Massage"}),Object(j.jsx)("li",{children:"Whole Body Scrub w/ Dead Sea Salt"}),Object(j.jsx)("li",{children:"Whole Body Bleaching"}),Object(j.jsx)("li",{children:"Whole Body Bleaching w/ Scalp Massage"})]}),Object(j.jsx)("h2",{children:"Other Services"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Underarm Diamond Peel"}),Object(j.jsx)("li",{children:"Underarm Bleaching"}),Object(j.jsx)("li",{children:"Whole Arm Bleaching"}),Object(j.jsx)("li",{children:"Eyelash Perming/Lifting"}),Object(j.jsx)("li",{children:"Warts Removal (Unlimited Package)"}),Object(j.jsx)("li",{children:"Radio Frequency (Non-Surgical Fat Burner)"})]})]})})]}),Object(j.jsx)(k,{})]})}var L=s(47);function V(){return Object(j.jsxs)(L.a,{atEnter:{opacity:0},atLeave:{opacity:0},atActive:{opacity:1},className:"switch-wrapper",children:[Object(j.jsx)(o.b,{path:"/",exact:!0,children:Object(j.jsx)(F,{})}),Object(j.jsx)(o.b,{path:"/about",children:Object(j.jsx)(U,{})}),Object(j.jsx)(o.b,{path:"/services",children:Object(j.jsx)(q,{})}),Object(j.jsx)(o.a,{to:"/",exact:!0})]})}s(110);var G=function(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{}),Object(j.jsx)(V,{})]})})};s(111);n.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(G,{})}),document.getElementById("root"))},53:function(e,c,s){},54:function(e,c,s){},63:function(e,c,s){},83:function(e,c,s){},84:function(e,c,s){},85:function(e,c,s){}},[[112,1,2]]]);
//# sourceMappingURL=main.b26fe949.chunk.js.map