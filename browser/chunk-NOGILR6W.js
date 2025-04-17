import{$ as S,A as C,B as O,C as g,D as h,E as J,G as a,H as x,I as p,P as q,Q as j,V as v,X as K,Z as Q,ca as L,da as z,ea as V,fa as W,ga as P,h as H,ha as X,i as D,ia as Z,j as Y,ja as ee,ka as E,l as F,la as te,m as w,ma as ie,na as re,o as M,oa as oe,p as d,pa as ne,q as u,r as b,ra as ae,s as R,t as l,u as m,v as B,w as n,x as t,y as f,z as _}from"./chunk-3N6JCU4O.js";function pe(r,i){if(r&1&&(n(0,"div",6),a(1),t()),r&2){let e=h();d(),p(" ",e.notFound," ")}}function ue(r,i){if(r&1){let e=O();n(0,"div",7)(1,"div",8),f(2,"img",9),n(3,"div",10)(4,"h5",11),a(5),t(),n(6,"p",12),a(7),t(),n(8,"p",13),a(9),t(),n(10,"button",14),g("click",function(){let s=F(e).$implicit,c=h();return w(c.deleteProduct(s.id))}),a(11," Delete "),t(),n(12,"button",15),g("click",function(){let s=F(e).$implicit,c=h();return w(c.onEdit(s.id))}),a(13," Edit "),t()()()()}if(r&2){let e=i.$implicit;d(2),J("alt",e.productName),m("src",e.img,M),d(3),x(e.productName),d(2),x(e.description),d(2),p("Price: ",e.productPrice," EGP")}}var k=class r{constructor(i,e){this.productService=i;this.router=e}isDeleted="";products=[];notFound="No results found. Try a different search.";ngOnInit(){this.productService.searchResult$.subscribe(i=>{this.products=i}),this.loadProducts()}loadProducts(){this.productService.getProducts().subscribe(i=>{this.products=i})}deleteProduct(i){this.productService.deleteProduct(i).subscribe(e=>{e&&(this.isDeleted="Product Deleted",this.loadProducts())}),setTimeout(()=>{this.isDeleted=""},3e3)}onEdit(i){this.router.navigate(["/admin/add-product",i])}static \u0275fac=function(e){return new(e||r)(u(V),u(S))};static \u0275cmp=b({type:r,selectors:[["app-dashboard"]],decls:8,vars:3,consts:[[1,"container","mt-5"],[1,"text-center","mb-4"],["class","alert alert-warning text-center",4,"ngIf"],[1,"text-danger"],[1,"row"],["class","col-md-4 mb-4",4,"ngFor","ngForOf"],[1,"alert","alert-warning","text-center"],[1,"col-md-4","mb-4"],[1,"card","h-100"],[1,"card-img-top",2,"height","200px","object-fit","cover",3,"src","alt"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"card-text","fw-bold"],[1,"btn","btn-outline-danger",3,"click"],[1,"btn","btn-outline-primary","mx-2",3,"click"]],template:function(e,o){e&1&&(n(0,"div",0)(1,"h2",1),a(2,"Your Products"),t(),l(3,pe,2,1,"div",2),n(4,"p",3),a(5),t(),n(6,"div",4),l(7,ue,14,5,"div",5),t()()),e&2&&(d(3),m("ngIf",o.products.length===0),d(2),x(o.isDeleted),d(2),m("ngForOf",o.products))},dependencies:[v,q,j],styles:[".card[_ngcontent-%COMP%]{transition:transform .3s}.card[_ngcontent-%COMP%]:hover{transform:scale(1.03)}"]})};function fe(r,i){r&1&&(_(0),n(1,"div",25),a(2," This Field is Required. "),t(),C())}function ge(r,i){r&1&&(_(0),n(1,"div",25),a(2," This Field is Required. "),t(),C())}function he(r,i){r&1&&(_(0),n(1,"div",25),a(2," This Field is Required. "),t(),C())}function ve(r,i){r&1&&(_(0),n(1,"div",25),a(2," This Field is Required. "),t(),C())}function ye(r,i){if(r&1&&f(0,"img",26),r&2){let e=h();m("src",e.previewImage,M)}}function be(r,i){r&1&&(_(0),n(1,"div",25),a(2," This Field is Required. "),t(),C())}function _e(r,i){r&1&&(n(0,"div",27)(1,"div",28)(2,"span",29),a(3,"Sending..."),t()()())}var A=class r{constructor(i,e,o){this.productService=i;this.route=e;this.router=o;this.initFormControl(),this.createForm(),this.route.params.subscribe(s=>{s.id&&(this.isEditMode=!0,this.productId=s.id,this.loadProductData(this.productId))})}productMsg="";myForm;productName;productPrice;category;description;img;submitted=!1;isLoading=!1;showToast=!1;isEditMode=!1;productId;toastMessage="";showLoginForm=!1;authError="";loadProductData(i){this.productService.getProductById(i).subscribe(e=>{this.myForm.patchValue({productName:e.productName,productPrice:e.productPrice,category:e.category,description:e.description,img:e.img,id:e.id}),this.previewImage=e.img})}initFormControl(){this.productName=new E("",[P.required]),this.productPrice=new E("",[P.required]),this.category=new E("",[P.required]),this.description=new E("",[P.required]),this.img=new E("",[P.required])}createForm(){this.myForm=new ee({productName:this.productName,productPrice:this.productPrice,category:this.category,description:this.description,img:this.img})}onSubmit(){if(this.isLoading=!0,this.submitted=!0,this.myForm.invalid){this.showToastMessage("Please fill all required fields.");return}console.log(this.myForm.value),this.isEditMode?(this.productService.updateProduct(this.productId,this.myForm.value).subscribe(()=>{this.productMsg="\u2705 Product Updated Successfully!"}),this.myForm.reset(),this.showToast=!1,this.isLoading=!1,this.router.navigate(["/admin/dashboard"])):this.myForm.valid&&(console.log(this.myForm.value),this.productService.addProduct(this.myForm.value),this.productMsg="Product Added Successfully",this.myForm.reset(),this.router.navigate(["/admin/dashboard"]),this.showToast=!1,this.isLoading=!1)}previewImage="";onImageUpload(i){let e=i.target.files[0];if(e){let o=new FileReader;o.onload=()=>{this.previewImage=o.result,this.myForm.patchValue({img:this.previewImage})},o.readAsDataURL(e)}}showToastMessage(i){this.toastMessage=i,this.showToast=!0,setTimeout(()=>{this.showToast=!1},4e3)}hideToast(){this.showToast=!1}static \u0275fac=function(e){return new(e||r)(u(V),u(Q),u(S))};static \u0275cmp=b({type:r,selectors:[["app-add-product"]],decls:45,vars:15,consts:[["data-aos","fade-up","id","contact",1,"contact"],[1,"container","my-5","d-flex","justify-content-center"],[1,"card","p-4","shadow-lg","rounded-3",2,"max-width","600px","width","100%"],[1,"text-center","mb-4","fw-bold","fs-4"],[1,"fs-5","p-2",3,"formGroup"],[1,"mb-3"],["for","name",1,"form-label","fw-semibold"],["type","text","placeholder","please Enter The Product Name","required","","formControlName","productName",1,"form-control","form-control-lg"],[4,"ngIf"],["for","email",1,"form-label","fw-semibold"],["type","number","placeholder","please Enter The Product Price","required","","formControlName","productPrice",1,"form-control","form-control-lg"],[1,"form-label","fw-semibold"],["type","text","placeholder","Please Enter Your Password","required","","formControlName","category",1,"form-control","form-control-lg"],["type","text","placeholder","Please Enter Your Password","required","","formControlName","description",1,"form-control","form-control-lg"],["type","file",1,"form-control",3,"change"],["style","max-width: 200px; margin-bottom: 10px",3,"src",4,"ngIf"],["type","hidden","formControlName","img"],[1,"d-grid"],["type","submit",1,"btn","btn-primary","btn-lg","fw-semibold",3,"click","disabled"],["class","text-center my-3",4,"ngIf"],[1,"toast-container","position-fixed","bottom-0","center-0","p-3",2,"z-index","9999"],["role","alert",1,"toast","align-items-center","text-white","bg-danger","border-0","fs-3"],[1,"d-flex"],[1,"toast-body"],["type","button",1,"btn-close","btn-close-white","me-2","m-auto",3,"click"],["role","alert",1,"alert","alert-danger"],[2,"max-width","200px","margin-bottom","10px",3,"src"],[1,"text-center","my-3"],["role","status",1,"spinner-border","text-primary"],[1,"visually-hidden"]],template:function(e,o){if(e&1&&(n(0,"section",0)(1,"div",1)(2,"div",2)(3,"p"),a(4),t(),n(5,"h3",3),a(6,"Add Product"),t(),n(7,"form",4)(8,"div",5)(9,"label",6),a(10,"Product Name *"),t(),f(11,"input",7),t(),l(12,fe,3,0,"ng-container",8),n(13,"div",5)(14,"label",9),a(15,"Product Price *"),t(),f(16,"input",10),t(),l(17,ge,3,0,"ng-container",8),n(18,"div",5)(19,"label",11),a(20,"Category *"),t(),f(21,"input",12),t(),l(22,he,3,0,"ng-container",8),n(23,"div",5)(24,"label",11),a(25,"Description *"),t(),f(26,"input",13),t(),l(27,ve,3,0,"ng-container",8),n(28,"div",5)(29,"label",11),a(30,"Upload Image *"),t(),n(31,"input",14),g("change",function(c){return o.onImageUpload(c)}),t()(),l(32,ye,1,1,"img",15),f(33,"input",16),l(34,be,3,0,"ng-container",8),n(35,"div",17)(36,"button",18),g("click",function(){return o.onSubmit()}),a(37," Add "),t()()()()(),l(38,_e,4,0,"div",19),n(39,"div",20)(40,"div",21)(41,"div",22)(42,"div",23),a(43),t(),n(44,"button",24),g("click",function(){return o.hideToast()}),t()()()()()),e&2){let s,c,y,T,N;d(4),x(o.productMsg),d(3),m("formGroup",o.myForm),d(5),m("ngIf",((s=o.myForm.get("productName"))==null?null:s.invalid)&&((s=o.myForm.get("productName"))==null?null:s.touched)),d(5),m("ngIf",((c=o.myForm.get("productPrice"))==null?null:c.invalid)&&((c=o.myForm.get("productPrice"))==null?null:c.touched)),d(5),m("ngIf",((y=o.myForm.get("category"))==null?null:y.invalid)&&((y=o.myForm.get("category"))==null?null:y.touched)),d(5),m("ngIf",((T=o.myForm.get("description"))==null?null:T.invalid)&&((T=o.myForm.get("description"))==null?null:T.touched)),d(5),m("ngIf",o.previewImage),d(2),m("ngIf",((N=o.myForm.get("img"))==null?null:N.invalid)&&((N=o.myForm.get("img"))==null?null:N.touched)),d(2),m("disabled",o.myForm.invalid||o.myForm.pending),d(2),m("ngIf",o.isLoading),d(2),B("show",o.showToast)("hide",!o.showToast),d(3),p(" ",o.toastMessage," ")}},dependencies:[ae,te,W,ie,X,Z,ne,re,oe,v,j],encapsulation:2})};var $=class r{constructor(i){this.router=i}canActivate(i,e){return localStorage.getItem("admin")?!0:(this.router.navigate(["/home"]),!1)}static \u0275fac=function(e){return new(e||r)(Y(S))};static \u0275prov=H({token:r,factory:r.\u0275fac,providedIn:"root"})};function Ce(r,i){if(r&1){let e=O();n(0,"div",2)(1,"h5"),a(2),t(),n(3,"p")(4,"strong"),a(5,"Customer:"),t(),a(6),t(),n(7,"p")(8,"strong"),a(9,"Total:"),t(),a(10),t(),n(11,"p")(12,"strong"),a(13,"Status:"),t(),a(14),t(),n(15,"select",3),g("change",function(s){let c=F(e).$implicit,y=h();return w(y.updateStatus(c.id,s.target.value))}),n(16,"option",4),a(17," Pending "),t(),n(18,"option",4),a(19," Shipped "),t(),n(20,"option",4),a(21," Delivered "),t(),n(22,"option",4),a(23," Cancelled "),t()()()}if(r&2){let e=i.$implicit;d(2),p("Order #",e.id,""),d(4),p(" ",e.name,""),d(4),p(" ",e.total," EGP"),d(4),p(" ",e.status,""),d(2),m("value","pending")("selected",e.status==="pending"),d(2),m("value","shipped")("selected",e.status==="shipped"),d(2),m("value","delivered")("selected",e.status==="delivered"),d(2),m("value","cancelled")("selected",e.status==="cancelled")}}var G=class r{constructor(i){this.http=i}orders=[];ngOnInit(){this.fetchOrders()}fetchOrders(){this.http.get(`${z.baseUrl}/orders`).subscribe(i=>{this.orders=i})}updateStatus(i,e){let o=this.orders.find(s=>s.id===i);o&&(o.status=e),this.http.patch(`${z.baseUrl}/orders/${i}`,{status:e}).subscribe({next:()=>{console.log(`Order ${i} updated to ${e}`)},error:s=>{console.error("Error updating status:",s)}})}static \u0275fac=function(e){return new(e||r)(u(K))};static \u0275cmp=b({type:r,selectors:[["app-orders-admin"]],decls:4,vars:1,consts:[[1,"container","mt-4"],["class","card p-3 my-3 shadow-sm",4,"ngFor","ngForOf"],[1,"card","p-3","my-3","shadow-sm"],[1,"form-select","w-50",3,"change"],[3,"value","selected"]],template:function(e,o){e&1&&(n(0,"div",0)(1,"h2"),a(2,"\u{1F4E6} All Orders"),t(),l(3,Ce,24,12,"div",1),t()),e&2&&(d(3),m("ngForOf",o.orders))},dependencies:[v,q],encapsulation:2})};var xe=[{path:"",canActivate:[$],children:[{path:"dashboard",component:k},{path:"add-product",component:A},{path:"add-product/:id",component:A},{path:"orders",component:G}]}],U=class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=R({type:r});static \u0275inj=D({imports:[L.forChild(xe),L]})};var le=class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=R({type:r});static \u0275inj=D({imports:[v,U]})};export{le as AdminModule};
