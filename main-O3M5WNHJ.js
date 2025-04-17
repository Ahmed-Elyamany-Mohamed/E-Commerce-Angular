import{$ as M,A as O,B as I,C as u,D as v,E as pe,F as Le,G as o,H as y,I as f,J as Ee,K as Ve,L as Ae,M as A,N as H,O as He,P as V,Q as E,R as Re,S as je,T as qe,U as B,V as S,W as $e,X as D,Y as Ue,Z as Ge,_ as Je,a as le,aa as k,b as ce,ba as Ye,c as G,d as de,da as w,e as Pe,ea as Q,f as Oe,fa as z,g as Ne,ga as _,h as L,ha as W,ia as K,j as N,ja as ue,k as De,ka as U,l as C,la as Z,m as b,n as Me,na as X,o as J,oa as ee,p as s,pa as te,q as d,qa as Be,r as h,ra as ie,t as p,u as l,v as Y,w as r,x as i,y as g,z as P}from"./chunk-3N6JCU4O.js";var F=class n{constructor(t){this.http=t}cartChanged=new de(void 0);getCartKey(){let t=localStorage.getItem("user");return`cart_${t?JSON.parse(t).id:"guest"}`}getCart(){let t=localStorage.getItem(this.getCartKey());try{let e=JSON.parse(t||"[]");return Array.isArray(e)?e:[]}catch{return[]}}addToCart(t,e=1){let a=this.getCart(),m=a.find(c=>c.id===t.id);m?m.quantity+=e:a.push(ce(le({},t),{quantity:e})),this.saveCart(a)}updateQuantity(t,e){let a=this.getCart(),m=a.find(c=>c.id===t);if(m){if(e<=0){this.removeFromCart(t);return}m.quantity=e,this.saveCart(a)}}removeFromCart(t){let e=this.getCart().filter(a=>a.id!==t);this.saveCart(e)}saveCart(t){localStorage.setItem(this.getCartKey(),JSON.stringify(t)),this.cartChanged.next()}getUserCart(t){return this.http.get(`${w.baseUrl}/cart?userId=${t}`)}createCart(t,e){return this.http.post(`${w.baseUrl}/cart`,{userId:t,items:e})}updateCart(t,e){return this.http.patch(`${w.baseUrl}/cart/${t}`,{items:e})}removeCart(t){return this.http.delete(`${w.baseUrl}/cart/${t}`)}static \u0275fac=function(e){return new(e||n)(N(D))};static \u0275prov=L({token:n,factory:n.\u0275fac,providedIn:"root"})};var et=n=>["/product",n];function tt(n,t){if(n&1&&(r(0,"div",10),o(1),i()),n&2){let e=v();s(),f(" ",e.notFound," ")}}function it(n,t){if(n&1){let e=I();r(0,"div",11)(1,"div",12),g(2,"img",13),r(3,"div",14)(4,"h5",15),o(5),i(),r(6,"p",16),o(7),i(),r(8,"p",17),o(9),A(10,"currency"),i(),r(11,"button",18),o(12," View Details "),i(),r(13,"button",19),u("click",function(){let m=C(e).$implicit,c=v();return b(c.addToCart(m))}),o(14," Add To Cart "),i()()()()}if(n&2){let e=t.$implicit;s(2),pe("alt",e.productName),l("src",e.img,J),s(3),y(e.productName),s(2),y(e.description),s(2),f(" Price: ",H(10,6,e.productPrice,"EGP")," "),s(2),l("routerLink",Ae(9,et,e.id))}}var fe=class n{constructor(t,e){this.productService=t;this.cartService=e}products=[];showToast=!1;toastMessage="";notFound="No results found. Try a different search.";ngOnInit(){this.productService.searchResult$.subscribe(t=>{this.products=t}),this.loadProducts()}loadProducts(){this.productService.getProducts().subscribe(t=>{this.products=t})}addToCart(t){this.cartService.addToCart(t,1),this.showToastMessage.bind(this)}showToastMessage(t){this.toastMessage=t,this.showToast=!0,setTimeout(()=>{this.showToast=!1},4e3)}hideToast(){this.showToast=!1}static \u0275fac=function(e){return new(e||n)(d(Q),d(F))};static \u0275cmp=h({type:n,selectors:[["app-home"]],decls:12,vars:7,consts:[[1,"container","mt-5"],[1,"text-center","mb-4"],["class","alert alert-warning text-center",4,"ngIf"],[1,"row"],["class","col-md-4 mb-4",4,"ngFor","ngForOf"],[1,"toast-container","position-fixed","bottom-0","start-50","translate-middle-x","p-3",2,"z-index","9999"],["role","alert",1,"toast","align-items-center","text-white","bg-danger","border-0","fs-5","show",2,"transition","opacity 0.4s ease-in-out"],[1,"d-flex"],[1,"toast-body"],["type","button",1,"btn-close","btn-close-white","me-2","m-auto",3,"click"],[1,"alert","alert-warning","text-center"],[1,"col-md-4","mb-4"],[1,"card","h-100"],[1,"card-img-top",2,"height","200px","object-fit","cover",3,"src","alt"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"card-text","fw-bold"],["routerLinkActive","router-link-active",1,"btn","btn-outline-primary","mx-2",3,"routerLink"],[1,"btn","btn-outline-primary","mx-2",3,"click"]],template:function(e,a){e&1&&(r(0,"div",0)(1,"h2",1),o(2,"Our Products"),i(),p(3,tt,2,1,"div",2),r(4,"div",3),p(5,it,15,11,"div",4),r(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8),o(10),i(),r(11,"button",9),u("click",function(){return a.hideToast()}),i()()()()()()),e&2&&(s(3),l("ngIf",a.products.length===0),s(2),l("ngForOf",a.products),s(2),Y("show",a.showToast)("hide",!a.showToast),s(3),f(" ",a.toastMessage," "))},dependencies:[S,V,E,B,k],styles:[".card[_ngcontent-%COMP%]{transition:transform .3s}.card[_ngcontent-%COMP%]:hover{transform:scale(1.03)}.product-carousel[_ngcontent-%COMP%]{max-width:800px;margin:40px auto;border-radius:12px;overflow:hidden;box-shadow:0 8px 20px #00000026}.carousel-image-wrapper[_ngcontent-%COMP%]{height:100px;overflow:hidden}.carousel-img[_ngcontent-%COMP%]{object-fit:contain;height:100%;width:100%;transition:transform .3s ease-in-out}.carousel-item[_ngcontent-%COMP%]:hover   .carousel-img[_ngcontent-%COMP%]{transform:scale(1.03)}.carousel-caption[_ngcontent-%COMP%]{bottom:10px;background:#00000080;padding:15px;border-radius:10px}.carousel-indicators[_ngcontent-%COMP%]   [data-bs-target][_ngcontent-%COMP%]{background-color:#fff}.carousel-control-prev-icon[_ngcontent-%COMP%], .carousel-control-next-icon[_ngcontent-%COMP%]{filter:invert(1)}.search-result[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;right:0;max-height:400px;overflow-y:auto;background:#fff;z-index:999;box-shadow:0 4px 12px #0000001a}.search-card[_ngcontent-%COMP%]{padding:10px;display:flex;align-items:center;gap:15px;border-bottom:1px solid #eee}.search-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px;object-fit:cover}"]})};var ne=class n{constructor(t,e){this.http=t;this.router=e}isSellerLoggedIn=new de(!1);isLoginError=new Me(!1);logIn(t){return G(this,null,function*(){try{return(yield this.http.get(`${w.baseUrl}/admin?email=${t.email}&password=${t.password}`).toPromise())||[]}catch(e){return console.error("Admin login failed:",e),[]}})}reLoadSeller(){localStorage.getItem("admin")&&(this.isSellerLoggedIn.next(!0),this.router.navigate(["/dashboard"]))}static \u0275fac=function(e){return new(e||n)(N(D),N(M))};static \u0275prov=L({token:n,factory:n.\u0275fac,providedIn:"root"})};var $=class n{constructor(t,e){this.http=t;this.router=e}isUserLoggedIn=!1;isLoading=!1;showToast=!1;proceedToCheckout(){if(!this.isUserLoggedIn){alert("Please log in to checkout."),this.router.navigate(["/login"]);return}this.router.navigate(["/checkout"])}logIn(t){return G(this,null,function*(){try{return(yield this.http.get(`${w.baseUrl}/users?email=${t.email}&password=${t.password}`).toPromise())||[]}catch(e){return console.error("User login failed:",e),[]}})}signUp(t,e){this.http.post(`${w.baseUrl}/users`,t).subscribe({next:a=>{localStorage.setItem("user",JSON.stringify(a)),e("\u2705 Account created successfully!"),this.router.navigate(["/login"])},error:()=>{e("\u274C Signup failed. Please try again.")}})}static \u0275fac=function(e){return new(e||n)(N(D),N(M))};static \u0275prov=L({token:n,factory:n.\u0275fac,providedIn:"root"})};function rt(n,t){n&1&&(P(0),r(1,"div",20),o(2," This email is already taken. "),i(),O())}function nt(n,t){n&1&&(P(0),r(1,"div",20),o(2," This Field is Required. "),i(),O())}function ot(n,t){n&1&&(P(0),r(1,"div",20),o(2," This Field is Required. "),i(),O())}function at(n,t){n&1&&(r(0,"div",21)(1,"div",22)(2,"span",23),o(3,"Sending..."),i()()())}var ge=class n{constructor(t,e,a,m){this.sellerService=t;this.router=e;this.userService=a;this.cartService=m;this.initFormControl(),this.createForm()}myForm;email;password;submitted=!1;isLoading=!1;showToast=!1;toastMessage="";showLoginForm=!1;authError="";initFormControl(){this.email=new U("",[_.required,_.email]),this.password=new U("",[_.required,_.minLength(3)])}createForm(){this.myForm=new ue({email:this.email,password:this.password})}ngOnInit(){this.sellerService.reLoadSeller()}onSubmit(){return G(this,null,function*(){if(this.myForm.valid){let{email:t,password:e}=this.myForm.value,a=yield this.sellerService.logIn({email:t,password:e});if(a.length===1){localStorage.setItem("admin",JSON.stringify(a[0])),this.router.navigate(["/admin/dashboard"]);return}let m=yield this.userService.logIn({email:t,password:e});if(m.length===1){let c=m[0];localStorage.setItem("user",JSON.stringify(c));let x=JSON.parse(localStorage.getItem("cart_guest")||"[]");this.cartService.getUserCart(c.id).subscribe(j=>{if(j.length){let Fe=j[0],me=[...Fe.items];x.forEach(we=>{let Te=me.find(Xe=>Xe.id===we.id);Te?Te.quantity+=we.quantity:me.push(we)}),localStorage.setItem(`cart_${c.id}`,JSON.stringify(me)),this.cartService.updateCart(Fe.id,me).subscribe(),localStorage.removeItem("cart_guest")}else x.length>0?this.cartService.createCart(c.id,x).subscribe(()=>{localStorage.setItem(`cart_${c.id}`,JSON.stringify(x)),localStorage.removeItem("cart_guest")}):this.cartService.createCart(c.id,[]).subscribe()}),this.router.navigate(["/home"]);return}this.showToastMessage("\u274C Invalid email or password")}})}showToastMessage(t){this.toastMessage=t,this.showToast=!0,setTimeout(()=>{this.showToast=!1},4e3)}hideToast(){this.showToast=!1}static \u0275fac=function(e){return new(e||n)(d(ne),d(M),d($),d(F))};static \u0275cmp=h({type:n,selectors:[["app-login-form"]],decls:29,vars:11,consts:[["data-aos","fade-up","id","contact",1,"contact"],[1,"container","my-5","d-flex","justify-content-center"],[1,"card","p-4","shadow-lg","rounded-3",2,"max-width","600px","width","100%"],[1,"text-center","mb-4","fw-bold","fs-4"],[1,"fs-5","p-2",3,"formGroup"],[1,"mb-3"],["for","email",1,"form-label","fw-semibold"],["type","email","id","email","placeholder","you@example.com","required","","formControlName","email",1,"form-control","form-control-lg"],[4,"ngIf"],["for","password",1,"form-label","fw-semibold"],["type","password","id","password","placeholder","Please Enter Your Password","required","","formControlName","password",1,"form-control","form-control-lg"],[1,"d-grid"],["type","submit",1,"btn","btn-primary","btn-lg","fw-semibold",3,"click","disabled"],["routerLink","/signup-auth",1,"to-signup"],["class","text-center my-3",4,"ngIf"],[1,"toast-container","position-fixed","bottom-0","center-0","p-3",2,"z-index","9999"],["role","alert",1,"toast","align-items-center","text-white","bg-danger","border-0","fs-3"],[1,"d-flex"],[1,"toast-body"],["type","button",1,"btn-close","btn-close-white","me-2","m-auto",3,"click"],["role","alert",1,"alert","alert-danger"],[1,"text-center","my-3"],["role","status",1,"spinner-border","text-primary"],[1,"visually-hidden"]],template:function(e,a){if(e&1&&(r(0,"section",0)(1,"div",1)(2,"div",2)(3,"h3",3),o(4,"Login"),i(),r(5,"form",4)(6,"div",5)(7,"label",6),o(8,"Your Email *"),i(),g(9,"input",7),i(),p(10,rt,3,0,"ng-container",8)(11,nt,3,0,"ng-container",8),r(12,"div",5)(13,"label",9),o(14,"Password *"),i(),g(15,"input",10),i(),p(16,ot,3,0,"ng-container",8),r(17,"div",11)(18,"button",12),u("click",function(){return a.onSubmit()}),o(19," Send "),i(),r(20,"a",13),o(21,"Already Have Account"),i()()()()(),p(22,at,4,0,"div",14),r(23,"div",15)(24,"div",16)(25,"div",17)(26,"div",18),o(27),i(),r(28,"button",19),u("click",function(){return a.hideToast()}),i()()()()()),e&2){let m,c,x;s(5),l("formGroup",a.myForm),s(5),l("ngIf",(m=a.myForm.get("email"))==null?null:m.hasError("emailTaken")),s(),l("ngIf",((c=a.myForm.get("email"))==null?null:c.touched)&&((c=a.myForm.get("email"))==null?null:c.invalid)),s(5),l("ngIf",((x=a.myForm.get("password"))==null?null:x.invalid)&&((x=a.myForm.get("password"))==null?null:x.touched)),s(2),l("disabled",a.myForm.invalid||a.myForm.pending),s(4),l("ngIf",a.isLoading),s(2),Y("show",a.showToast)("hide",!a.showToast),s(3),f(" ",a.toastMessage," ")}},dependencies:[ie,Z,z,W,K,te,X,ee,S,E,k],encapsulation:2})};var ve=class n{constructor(t){this.http=t}checkEmailNotTaken(){return t=>{let e=t.value;if(!e)return Pe(null);let a=this.http.get(`http://localhost:3000/admin?email=${e}`),m=this.http.get(`http://localhost:3000/users?email=${e}`);return Ne([a,m]).pipe(Oe(([c,x])=>c.length>0||x.length>0?{emailTaken:!0}:null))}}static \u0275fac=function(e){return new(e||n)(N(D))};static \u0275prov=L({token:n,factory:n.\u0275fac,providedIn:"root"})};function mt(n,t){n&1&&(P(0),r(1,"div",22),o(2," This Field is Required. "),i(),O())}function lt(n,t){n&1&&(P(0),r(1,"div",22),o(2," This email is already taken. "),i(),O())}function ct(n,t){n&1&&(P(0),r(1,"div",22),o(2," This Field is Required. "),i(),O())}function dt(n,t){n&1&&(P(0),r(1,"div",22),o(2," This Field is Required. "),i(),O())}function pt(n,t){n&1&&(r(0,"div",23)(1,"div",24)(2,"span",25),o(3,"Sending..."),i()()())}var he=class n{constructor(t,e,a){this.sellerService=t;this.userService=e;this.emailValidator=a;this.initFormControl(),this.createForm()}myForm;name;email;password;submitted=!1;isLoading=!1;toastMessage="";showToast=!1;showLoginForm=!1;authError="";initFormControl(){this.name=new U("",[_.required,_.minLength(3)]),this.email=new U("",[_.required,_.email],[this.emailValidator.checkEmailNotTaken()]),this.password=new U("",[_.required,_.minLength(3)])}createForm(){this.myForm=new ue({name:this.name,email:this.email,password:this.password})}ngOnInit(){this.sellerService.reLoadSeller()}onSubmit(){this.myForm.valid?this.userService.signUp(this.myForm.value,this.showToastMessage.bind(this)):this.showToastMessage("\u26A0\uFE0F Please fill all required fields.")}showToastMessage(t){this.toastMessage=t,this.showToast=!0,setTimeout(()=>{this.showToast=!1},4e3)}hideToast(){this.showToast=!1}static \u0275fac=function(e){return new(e||n)(d(ne),d($),d(ve))};static \u0275cmp=h({type:n,selectors:[["app-signup-form"]],decls:34,vars:12,consts:[["data-aos","fade-up","id","contact",1,"contact"],[1,"container","my-5","d-flex","justify-content-center"],[1,"card","p-4","shadow-lg","rounded-4",2,"max-width","600px","width","100%"],[1,"text-center","mb-4","fw-bold","fs-4"],[1,"fs-5","-2",3,"formGroup"],[1,"mb-3"],["for","name",1,"form-label","fw-semibold"],["type","text","id","name","placeholder","Please Enter Your Name","required","","formControlName","name",1,"form-control","form-control-lg"],[4,"ngIf"],["for","email",1,"form-label","fw-semibold"],["type","email","id","email","placeholder","you@example.com","required","","formControlName","email",1,"form-control","form-control-lg"],["for","password",1,"form-label","fw-semibold"],["type","password","id","password","placeholder","Please Enter Your Password","required","","formControlName","password",1,"form-control","form-control-lg"],[1,"d-grid"],["type","submit",1,"btn","btn-primary","btn-lg","fw-semibold",3,"click","disabled"],["routerLink","/login",1,"to-login"],["class","text-center my-3",4,"ngIf"],[1,"toast-container","position-fixed","bottom-0","start-50","translate-middle-x","p-3",2,"z-index","9999"],["role","alert",1,"toast","align-items-center","text-white","bg-danger","border-0","fs-5","show",2,"transition","opacity 0.4s ease-in-out"],[1,"d-flex"],[1,"toast-body"],["type","button",1,"btn-close","btn-close-white","me-2","m-auto",3,"click"],["role","alert",1,"alert","alert-danger"],[1,"text-center","my-3"],["role","status",1,"spinner-border","text-primary"],[1,"visually-hidden"]],template:function(e,a){if(e&1&&(r(0,"section",0)(1,"div",1)(2,"div",2)(3,"h3",3),o(4,"Sign-Up"),i(),r(5,"form",4)(6,"div",5)(7,"label",6),o(8,"Your Name *"),i(),g(9,"input",7),i(),p(10,mt,3,0,"ng-container",8),r(11,"div",5)(12,"label",9),o(13,"Your Email *"),i(),g(14,"input",10),i(),p(15,lt,3,0,"ng-container",8)(16,ct,3,0,"ng-container",8),r(17,"div",5)(18,"label",11),o(19,"Password *"),i(),g(20,"input",12),i(),p(21,dt,3,0,"ng-container",8),r(22,"div",13)(23,"button",14),u("click",function(){return a.onSubmit()}),o(24," Send "),i(),r(25,"a",15),o(26,"Already Have Account"),i()()()()(),p(27,pt,4,0,"div",16),r(28,"div",17)(29,"div",18)(30,"div",19)(31,"div",20),o(32),i(),r(33,"button",21),u("click",function(){return a.hideToast()}),i()()()()()),e&2){let m,c,x,j;s(5),l("formGroup",a.myForm),s(5),l("ngIf",((m=a.myForm.get("name"))==null?null:m.invalid)&&((m=a.myForm.get("name"))==null?null:m.touched)),s(5),l("ngIf",(c=a.myForm.get("email"))==null?null:c.hasError("emailTaken")),s(),l("ngIf",((x=a.myForm.get("email"))==null?null:x.touched)&&((x=a.myForm.get("email"))==null?null:x.invalid)),s(5),l("ngIf",((j=a.myForm.get("password"))==null?null:j.invalid)&&((j=a.myForm.get("password"))==null?null:j.touched)),s(2),l("disabled",a.myForm.invalid||a.myForm.pending),s(4),l("ngIf",a.isLoading),s(2),Y("show",a.showToast)("hide",!a.showToast),s(3),f(" ",a.toastMessage," ")}},dependencies:[ie,Z,z,W,K,te,X,ee,S,E,k],encapsulation:2})};var se=class n{constructor(t){this.router=t}canActivate(t,e){return localStorage.getItem("admin")?(this.router.navigate(["/admin/dashboard"]),!1):!0}static \u0275fac=function(e){return new(e||n)(N(M))};static \u0275prov=L({token:n,factory:n.\u0275fac,providedIn:"root"})};function ut(n,t){if(n&1){let e=I();r(0,"button",13),u("click",function(){C(e);let m=v(2);return b(m.addToCart())}),o(1," Add To Cart "),i()}}function ft(n,t){if(n&1){let e=I();r(0,"button",14),u("click",function(){C(e);let m=v(2);return b(m.removeFromCart(m.product.id))}),o(1," Remove From Cart "),i()}}function gt(n,t){if(n&1){let e=I();r(0,"div",1)(1,"div",2)(2,"div",3),g(3,"img",4),i(),r(4,"div",3)(5,"h2"),o(6),i(),r(7,"p",5),o(8),i(),r(9,"p"),o(10),i(),r(11,"h4",6),o(12),A(13,"currency"),i(),r(14,"div",7)(15,"button",8),u("click",function(){C(e);let m=v();return b(m.decreaseQty())}),o(16,"-"),i(),r(17,"span",9),o(18),i(),r(19,"button",8),u("click",function(){C(e);let m=v();return b(m.increaseQty())}),o(20,"+"),i()(),p(21,ut,2,0,"button",10)(22,ft,2,0,"button",11),r(23,"button",12),u("click",function(){C(e);let m=v();return b(m.proceedToCheckout())}),o(24," CheckOut "),i(),P(25),o(26,' *ngIf="!isUserLoggedIn" class="text-danger mt-2"> \u{1F512} You must log in to proceed with checkout. '),O(),i()()()}if(n&2){let e=v();s(3),pe("alt",e.product.productName),l("src",e.product.img,J),s(3),y(e.product.productName),s(2),y(e.product.category),s(2),y(e.product.description),s(2),f(" ",H(13,10,e.product.productPrice," EGP")," "),s(6),y(e.quantity),s(3),l("ngIf",e.removeItemCart),s(),l("ngIf",!e.removeItemCart),s(),l("disabled",!e.isUserLoggedIn)}}var Ce=class n{constructor(t,e,a,m){this.route=t;this.productService=e;this.cartService=a;this.userService=m}product;quantity=1;removeItemCart=!0;isUserLoggedIn=!1;ngOnInit(){let t=this.route.snapshot.paramMap.get("id");t&&this.productService.getProductById(t).subscribe(e=>{this.product=e,this.checkIfInCart()}),this.isUserLoggedIn=!!localStorage.getItem("user")}increaseQty(){this.quantity++}decreaseQty(){this.quantity>1&&this.quantity--}addToCart(){this.cartService.addToCart(this.product,this.quantity),this.removeItemCart=!1}checkIfInCart(){let t=this.cartService.getCart();this.removeItemCart=!t.some(e=>e.id===this.product.id)}removeFromCart(t){this.cartService.removeFromCart(this.product.id),this.removeItemCart=!0}proceedToCheckout(){this.userService.proceedToCheckout()}static \u0275fac=function(e){return new(e||n)(d(Ge),d(Q),d(F),d($))};static \u0275cmp=h({type:n,selectors:[["app-product-details"]],decls:1,vars:1,consts:[["class","container my-5",4,"ngIf"],[1,"container","my-5"],[1,"row"],[1,"col-md-6"],[1,"img-fluid","rounded",3,"src","alt"],[1,"text-muted"],[1,"text-success","fw-bold"],[1,"d-flex","align-items-center","my-3"],[1,"btn","btn-outline-dark",3,"click"],[1,"mx-3","fs-5"],["class","btn btn-primary btn-lg",3,"click",4,"ngIf"],["class","btn btn-outline-primary btn-lg",3,"click",4,"ngIf"],["routerLink","/checkout",1,"btn","btn-outline-success","btn-lg","mx-2",3,"click","disabled"],[1,"btn","btn-primary","btn-lg",3,"click"],[1,"btn","btn-outline-primary","btn-lg",3,"click"]],template:function(e,a){e&1&&p(0,gt,27,13,"div",0),e&2&&l("ngIf",a.product)},dependencies:[S,E,B,k],styles:["img[_ngcontent-%COMP%]{max-height:400px;object-fit:cover}"]})};function vt(n,t){if(n&1){let e=I();P(0),r(1,"button",5),u("click",function(){C(e);let m=v();return b(m.goToShop())}),o(2,"Start Shopping \u{1F6CD}\uFE0F"),i(),O()}}var be=class n{constructor(t){this.router=t}userName="Guest";isAdmin=!1;ngOnInit(){let t=localStorage.getItem("user"),e=localStorage.getItem("admin");if(t){let a=JSON.parse(t);this.userName=a.name||"User"}else if(e){let a=JSON.parse(e);this.userName=a.name||"Admin",this.isAdmin=!0}}goToShop(){this.router.navigate(["/home"])}static \u0275fac=function(e){return new(e||n)(d(M))};static \u0275cmp=h({type:n,selectors:[["app-welcome"]],decls:8,vars:2,consts:[[1,"welcome-container"],[1,"subtitle"],[4,"ngIf"],[1,"bg-circle","circle1"],[1,"bg-circle","circle2"],[1,"shop-btn",3,"click"]],template:function(e,a){e&1&&(r(0,"div",0)(1,"h1"),o(2),i(),r(3,"p",1),o(4,"We're so glad you're here."),i(),p(5,vt,3,0,"ng-container",2),g(6,"div",3)(7,"div",4),i()),e&2&&(s(2),f("\u{1F44B} Welcome, ",a.userName,"!"),s(3),l("ngIf",!a.isAdmin))},dependencies:[S,E],styles:[".welcome-container[_ngcontent-%COMP%]{position:relative;height:100vh;background:linear-gradient(135deg,#fceabb,#f8b500);display:flex;flex-direction:column;justify-content:center;align-items:center;color:#2d2d2d;text-align:center;overflow:hidden}h1[_ngcontent-%COMP%]{font-size:3rem;margin-bottom:1rem;animation:_ngcontent-%COMP%_fadeInDown 1s ease-out}.subtitle[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:2rem;animation:_ngcontent-%COMP%_fadeInUp 1s ease-out}.shop-btn[_ngcontent-%COMP%]{padding:12px 24px;font-size:1.2rem;background-color:#2d2d2d;color:#fff;border:none;border-radius:8px;transition:transform .3s ease;cursor:pointer}.shop-btn[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.bg-circle[_ngcontent-%COMP%]{position:absolute;border-radius:80%;opacity:.3;animation:_ngcontent-%COMP%_float 6s infinite ease-in-out}.circle1[_ngcontent-%COMP%]{width:400px;height:400px;background:#fff;top:-100px;left:-100px}.circle2[_ngcontent-%COMP%]{width:300px;height:300px;background:#2d2d2d;bottom:-80px;right:-80px}@keyframes _ngcontent-%COMP%_fadeInDown{0%{opacity:0;transform:translateY(-40px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_fadeInUp{0%{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_float{0%,to{transform:translateY(0)}50%{transform:translateY(-30px)}}"]})};function ht(n,t){if(n&1){let e=I();r(0,"tr")(1,"td"),o(2),i(),r(3,"td")(4,"button",6),u("click",function(){let m=C(e).$implicit,c=v(2);return b(c.decreaseQty(m))}),o(5,"\u2212"),i(),o(6),r(7,"button",6),u("click",function(){let m=C(e).$implicit,c=v(2);return b(c.increaseQty(m))}),o(8,"+"),i()(),r(9,"td"),o(10),i(),r(11,"td"),o(12),i(),r(13,"td")(14,"button",7),u("click",function(){let m=C(e).$implicit,c=v(2);return b(c.removeItem(m.id))}),o(15," \u{1F5D1} "),i()()()}if(n&2){let e=t.$implicit;s(2),y(e.productName),s(4),f(" ",e.quantity," "),s(4),f("",e.productPrice," EGP"),s(2),f("",e.productPrice*e.quantity," EGP")}}function Ct(n,t){if(n&1&&(r(0,"div")(1,"table",3)(2,"thead")(3,"tr")(4,"th"),o(5,"Product"),i(),r(6,"th"),o(7,"Qty"),i(),r(8,"th"),o(9,"Price"),i(),r(10,"th"),o(11,"Total"),i(),g(12,"th"),i()(),r(13,"tbody"),p(14,ht,16,4,"tr",4),i()(),r(15,"h4"),o(16),i(),r(17,"button",5),o(18,"Proceed to Checkout"),i()()),n&2){let e=v();s(14),l("ngForOf",e.cart),s(2),f("Total: ",e.total," EGP")}}function bt(n,t){n&1&&(r(0,"p"),o(1,"Your cart is empty \u{1F4A4}"),i())}var _e=class n{constructor(t){this.cartService=t}cart=[];ngOnInit(){this.loadCart(),this.cartService.cartChanged.subscribe(()=>this.loadCart())}loadCart(){this.cart=this.cartService.getCart()}increaseQty(t){this.cartService.addToCart(t,1)}decreaseQty(t){this.cartService.updateQuantity(t.id,t.quantity-1)}removeItem(t){this.cartService.removeFromCart(t)}get total(){return this.cart.reduce((t,e)=>t+e.productPrice*e.quantity,0)}static \u0275fac=function(e){return new(e||n)(d(F))};static \u0275cmp=h({type:n,selectors:[["app-cart"]],decls:6,vars:2,consts:[["emptyCart",""],[1,"container","my-5"],[4,"ngIf","ngIfElse"],[1,"table"],[4,"ngFor","ngForOf"],["routerLink","/checkout",1,"btn","btn-outline-success"],[3,"click"],[1,"btn","btn-sm","btn-danger",3,"click"]],template:function(e,a){if(e&1&&(r(0,"div",1)(1,"h2"),o(2,"Your Cart \u{1F6D2}"),i(),p(3,Ct,19,2,"div",2)(4,bt,2,0,"ng-template",null,0,He),i()),e&2){let m=Le(5);s(3),l("ngIf",a.cart.length>0)("ngIfElse",m)}},dependencies:[S,V,E,k],encapsulation:2})};function _t(n,t){if(n&1&&(r(0,"div")(1,"p"),o(2),i()()),n&2){let e=t.$implicit;s(2),Ve(" ",e.productName," (",e.quantity,") - ",e.productPrice," EGP ")}}var Se=class n{constructor(t,e,a){this.fb=t;this.http=e;this.cartService=a}checkoutForm;cart=[];total=0;ngOnInit(){let t=JSON.parse(localStorage.getItem("user")||"{}"),e=t.id?`cart_${t.id}`:"cart_guest";this.cart=JSON.parse(localStorage.getItem(e)||"[]"),this.total=this.cart.reduce((a,m)=>a+m.productPrice*m.quantity,0),this.checkoutForm=this.fb.group({name:["",_.required],address:["",_.required],phone:["",[_.required,_.pattern("^\\+?[0-9]{10,15}$"),_.minLength(10),_.maxLength(15)]]})}onCheckout(){let t=JSON.parse(localStorage.getItem("user")||"{}"),e=t.id?`cart_${t.id}`:"cart_guest",a=ce(le({},this.checkoutForm.value),{userId:t?.id||"guest",items:this.cart,total:this.total,date:new Date});this.http.post(`${w.baseUrl}/orders`,a).subscribe({next:()=>{localStorage.setItem(e,a),alert("\u2705 Order saved to server!"),this.checkoutForm.reset(),this.cart=[]},error:()=>{alert("\u274C Failed to save order. Try again.")}})}static \u0275fac=function(e){return new(e||n)(d(Be),d(D),d(F))};static \u0275cmp=h({type:n,selectors:[["app-check-out"]],decls:23,vars:4,consts:[[1,"container","my-5"],[1,"mb-4"],[3,"ngSubmit","formGroup"],[1,"mb-3"],["formControlName","name","required","",1,"form-control"],["formControlName","address","required","",1,"form-control"],["formControlName","phone","required","",1,"form-control"],[1,"mt-4"],[4,"ngFor","ngForOf"],[1,"fw-bold"],["type","submit",1,"btn","btn-success",3,"disabled"]],template:function(e,a){e&1&&(r(0,"div",0)(1,"h2",1),o(2,"Checkout"),i(),r(3,"form",2),u("ngSubmit",function(){return a.onCheckout()}),r(4,"div",3)(5,"label"),o(6,"Name"),i(),g(7,"input",4),i(),r(8,"div",3)(9,"label"),o(10,"Address"),i(),g(11,"input",5),i(),r(12,"div",3)(13,"label"),o(14,"Phone"),i(),g(15,"input",6),i(),r(16,"h4",7),o(17,"Your Cart"),i(),p(18,_t,3,3,"div",8),r(19,"p",9),o(20),i(),r(21,"button",10),o(22," Place Order "),i()()()),e&2&&(s(3),l("formGroup",a.checkoutForm),s(15),l("ngForOf",a.cart),s(2),f("Total: ",a.total," EGP"),s(),l("disabled",a.checkoutForm.invalid))},dependencies:[ie,Z,z,W,K,te,X,ee,S,V],encapsulation:2})};function St(n,t){n&1&&(r(0,"div",4)(1,"p"),o(2,"You haven't placed any orders yet."),i(),r(3,"a",5),o(4,"Start Shopping"),i()())}function yt(n,t){if(n&1&&(r(0,"tr")(1,"td"),g(2,"img",18),i(),r(3,"td"),o(4),i(),r(5,"td"),o(6),i(),r(7,"td"),o(8),i(),r(9,"td"),o(10),A(11,"currency"),i(),r(12,"td"),o(13),A(14,"currency"),i()()),n&2){let e=t.$implicit;s(2),l("src",e.img,J),s(2),y(e.productName),s(2),y(e.category),s(2),y(e.quantity),s(2),y(H(11,6,e.productPrice,"EGP")),s(3),f(" ",H(14,9,e.productPrice*e.quantity,"EGP")," ")}}function xt(n,t){if(n&1){let e=I();r(0,"div",6)(1,"div",7)(2,"div")(3,"strong"),o(4,"Order ID:"),i(),o(5),i(),r(6,"span",8),o(7),i()(),r(8,"div",9)(9,"p")(10,"strong"),o(11,"Date:"),i(),o(12),A(13,"date"),i(),r(14,"p")(15,"strong"),o(16,"Shipping Address:"),i(),o(17),i(),r(18,"p")(19,"strong"),o(20,"Phone:"),i(),o(21),i(),r(22,"div",10)(23,"table",11)(24,"thead",12)(25,"tr")(26,"th"),o(27,"Image"),i(),r(28,"th"),o(29,"Product"),i(),r(30,"th"),o(31,"Category"),i(),r(32,"th"),o(33,"Qty"),i(),r(34,"th"),o(35,"Price"),i(),r(36,"th"),o(37,"Total"),i()()(),r(38,"tbody"),p(39,yt,15,12,"tr",13),i()()(),r(40,"div",14),o(41," Total: "),r(42,"span",15),o(43),A(44,"currency"),i()(),r(45,"div",16)(46,"button",17),u("click",function(){let m=C(e).$implicit,c=v();return b(c.deleteOrder(m.id))}),o(47," Cancel Order "),i()()()()}if(n&2){let e=t.$implicit;s(5),f(" ",e.id,""),s(2),y(e.status),s(5),f(" ",H(13,8,e.date,"medium"),""),s(5),f(" ",e.address,""),s(4),f(" ",e.phone,""),s(18),l("ngForOf",e.items),s(4),y(H(44,11,e.total,"EGP")),s(3),l("disabled",e.status==="shipped"||e.status==="delivered")}}var ye=class n{constructor(t){this.http=t}orders=[];userId="";ngOnInit(){let t=localStorage.getItem("user");if(t){let e=JSON.parse(t);this.userId=e.id,this.fetchOrders()}}fetchOrders(){this.http.get(`${w.baseUrl}/orders?userId=${this.userId}`).subscribe({next:t=>{this.orders=t.sort((e,a)=>new Date(a.date).getTime()-new Date(e.date).getTime())},error:t=>{console.error("Error fetching orders:",t)}})}deleteOrder(t){this.http.delete(`${w.baseUrl}/orders/${t}`).subscribe({next:()=>{this.orders=this.orders.filter(e=>e.id!==t),alert("\u274C Order cancelled successfully.")},error:()=>{alert("\u26A0\uFE0F Failed to cancel order.")}})}formatDate(t){let e=new Date(t);return e.toLocaleDateString()+" "+e.toLocaleTimeString()}getStatusStyle(t){switch(t){case"pending":return"badge bg-warning text-dark";case"shipped":return"badge bg-primary";case"delivered":return"badge bg-success";case"canceled":return"badge bg-danger";default:return"badge bg-secondary"}}static \u0275fac=function(e){return new(e||n)(d(D))};static \u0275cmp=h({type:n,selectors:[["app-order-history"]],decls:5,vars:2,consts:[[1,"order-history","container","my-5"],[1,"text-center","mb-4"],["class","text-center alert alert-info",4,"ngIf"],["class","card mb-4 shadow-sm",4,"ngFor","ngForOf"],[1,"text-center","alert","alert-info"],["routerLink","/home",1,"btn","btn-primary","mt-2"],[1,"card","mb-4","shadow-sm"],[1,"card-header","bg-light","d-flex","justify-content-between","align-items-center"],[1,"badge","bg-warning","text-dark","text-uppercase"],[1,"card-body"],[1,"table-responsive"],[1,"table"],[1,"table-light"],[4,"ngFor","ngForOf"],[1,"text-end","fw-bold","fs-5"],[1,"text-success"],[1,"text-start","fw-bold","fs-5"],[1,"btn","btn-outline-danger",3,"click","disabled"],["width","60",1,"img-thumbnail","rounded",3,"src"]],template:function(e,a){e&1&&(r(0,"section",0)(1,"h2",1),o(2,"\u{1F9FE} Your Order History"),i(),p(3,St,5,0,"div",2)(4,xt,48,14,"div",3),i()),e&2&&(s(3),l("ngIf",a.orders.length===0),s(),l("ngForOf",a.orders))},dependencies:[S,V,E,B,qe,k],encapsulation:2})};var Ke=[{path:"",component:be},{path:"home",component:fe},{path:"cart",component:_e},{path:"order",component:ye},{path:"checkout",component:Se},{path:"signup-auth",component:he,canActivate:[se]},{path:"login",component:ge,canActivate:[se]},{path:"admin",loadChildren:()=>import("./chunk-NOGILR6W.js").then(n=>n.AdminModule)},{path:"product/:id",component:Ce},{path:"**",redirectTo:"signup-auth"}];var Ze={providers:[Ye(Ke),De(Ue)]};function It(n,t){if(n&1&&(r(0,"li"),o(1),i()),n&2){let e=t.$implicit;s(),Ee(" ",e.productName," x",e.quantity," ")}}function wt(n,t){if(n&1&&(r(0,"ul",10)(1,"li",11)(2,"a",12),o(3,"Home"),i()(),r(4,"li",11)(5,"a",13),o(6,"Sign-Up"),i()(),r(7,"li",11)(8,"a",14),o(9,"Log In"),i()(),r(10,"div",15)(11,"button",16),o(12),i(),r(13,"ul",17),p(14,It,2,2,"li",18),r(15,"li")(16,"a",19),o(17,"View Cart"),i()()()()()),n&2){let e=v();s(12),f(" Cart (",e.cartCount,") "),s(2),l("ngForOf",e.cart)}}function Et(n,t){if(n&1){let e=I();r(0,"ul",10)(1,"li",11)(2,"a",20),o(3,"Add Product"),i()(),r(4,"li",11)(5,"a",21),o(6,"Dashboard"),i()(),r(7,"li",11)(8,"a",22),o(9,"Orders"),i()(),r(10,"li",11)(11,"a",23),u("click",function(){C(e);let m=v();return b(m.logOut())}),o(12,"Log Out"),i()()()}}function kt(n,t){if(n&1&&(r(0,"li"),o(1),i()),n&2){let e=t.$implicit;s(),Ee(" ",e.productName," x",e.quantity," ")}}function Ft(n,t){if(n&1){let e=I();r(0,"ul",10)(1,"li",11)(2,"a",12),o(3,"Home"),i()(),r(4,"li",11)(5,"a",24),o(6,"Orders"),i()(),r(7,"div",15)(8,"button",25),o(9),i(),r(10,"ul",17),p(11,kt,2,2,"li",18),r(12,"li")(13,"a",19),o(14,"View Cart"),i()()()(),r(15,"li",11)(16,"a",26),u("click",function(){C(e);let m=v();return b(m.logOut())}),o(17,"Log Out"),i()()()}if(n&2){let e=v();s(9),f(" Cart (",e.cartCount,") "),s(2),l("ngForOf",e.cart)}}var xe=class n{constructor(t,e,a){this.route=t;this.search=e;this.cartService=a}menuType="default";adminName="";cart=[];cartCount=0;ngOnInit(){this.route.events.subscribe(t=>{t.url&&this.setMenuType()}),this.setMenuType(),this.updateCartCount(),this.loadCart(),this.cartService.cartChanged.subscribe(()=>this.loadCart())}setMenuType(){localStorage.getItem("admin")?this.menuType="admin":localStorage.getItem("user")?this.menuType="user":this.menuType="default",console.log(this.menuType)}logOut(){localStorage.removeItem("admin"),localStorage.removeItem("user"),this.route.navigate([""])}isAdminRoute(t){return localStorage.getItem("admin")!==null&&t.startsWith("/admin")}products=[];searchProduct(t){let e=t.target.value.trim();this.search.searchProduct(e)}updateCartCount(){let t=this.cartService.getCart();this.cartCount=t.reduce((e,a)=>e+a.quantity,0)}loadCart(){this.cart=this.cartService.getCart(),this.cartCount=this.cart.reduce((t,e)=>t+e.quantity,0)}static \u0275fac=function(e){return new(e||n)(d(M),d(Q),d(F))};static \u0275cmp=h({type:n,selectors:[["app-header"]],decls:14,vars:4,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid"],["routerLink","/",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse",3,"ngSwitch"],["class","navbar-nav me-auto mb-2 mb-lg-0",4,"ngSwitchCase"],["role","search",1,"d-flex"],["type","search","placeholder","Search","aria-label","Search",1,"form-control","me-2",3,"keyup"],["type","submit",1,"btn","btn-outline-success"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["routerLink","/home",1,"nav-link"],["routerLink","/signup-auth",1,"nav-link"],["routerLink","/login",1,"nav-link"],[1,"dropdown"],["type","button","data-bs-toggle","dropdown",1,"btn","btn-outline-dark","dropdown-toggle"],[1,"dropdown-menu"],[4,"ngFor","ngForOf"],["routerLink","/cart",1,"dropdown-item"],["routerLink","admin/add-product",1,"nav-link"],["routerLink","/dashboard",1,"nav-link"],["routerLink","admin/orders",1,"nav-link"],[1,"nav-link",2,"cursor","pointer",3,"click"],["routerLink","/order",1,"nav-link"],["type","button","data-bs-toggle","dropdown",1,"btn","btn-secondary","dropdown-toggle"],["routerLink","",1,"nav-link",2,"cursor","pointer",3,"click"]],template:function(e,a){e&1&&(r(0,"nav",0)(1,"div",1)(2,"a",2),o(3,"E-Commerce"),i(),r(4,"button",3),g(5,"span",4),i(),r(6,"div",5),p(7,wt,18,2,"ul",6)(8,Et,13,0,"ul",6)(9,Ft,18,2,"ul",6),r(10,"form",7)(11,"input",8),u("keyup",function(c){return a.searchProduct(c)}),i(),r(12,"button",9),o(13,"Search"),i()()()()()),e&2&&(s(6),l("ngSwitch",a.menuType),s(),l("ngSwitchCase","default"),s(),l("ngSwitchCase","admin"),s(),l("ngSwitchCase","user"))},dependencies:[k,S,V,Re,je],styles:[".dropdown-menu[_ngcontent-%COMP%]{padding:10px}.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;border:1px solid #ccc;border-radius:5px;margin-bottom:5px;background-color:#f9f9f9}"]})};var Ie=class n{title="e-commerce";static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"container"]],template:function(e,a){e&1&&(r(0,"div",0),g(1,"app-header")(2,"router-outlet"),i())},dependencies:[xe,Je],encapsulation:2})};$e(Ie,Ze).catch(n=>console.error(n));
