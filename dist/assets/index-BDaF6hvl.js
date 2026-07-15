import{G as fi,s as vi,i as yi,g as bi}from"./firebase-kble8lgk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(i){if(i.ep)return;i.ep=!0;const c=a(i);fetch(i.href,c)}})();const C=Object.freeze({productionApiBaseUrl:"https://cosmetic-server-production.up.railway.app",defaultPageSize:24,searchDebounceMs:300,storageKeys:Object.freeze({accessToken:"zaven_token",legacyAccessToken:"accessToken",user:"zaven_user",legacyUser:"user",role:"role",baseUrl:"zaven_base_url",sessionId:"zaven_session_id",assistantConversationId:"zaven_assistant_conversation_id",recentProducts:"zaven_recent_products",language:"beauty_skin_language"}),placeholderImage:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"});C.productionApiBaseUrl.replace(/\/+$/,"");function wi(e){const t=String(e||"").trim().replace(/\/+$/,"").toLowerCase();return t?t.includes("localhost")||t.includes("127.0.0.1")||t.includes("0.0.0.0")||t.startsWith("file:"):!1}function Ht(e){const t=String(e||"").trim().replace(/\/+$/,"");return!t||t.includes("cosmetic-server-production.up.railway.app")||wi(t)?"":t}function ki(e,t){try{return JSON.parse(localStorage.getItem(e)||"null")||t}catch{return t}}function St(){return localStorage.getItem(C.storageKeys.accessToken)||localStorage.getItem(C.storageKeys.legacyAccessToken)||""}function fr(){let e=localStorage.getItem(C.storageKeys.sessionId);return e||(e=`web-${Date.now()}-${Math.random().toString(36).slice(2,10)}`,localStorage.setItem(C.storageKeys.sessionId,e)),e}function Si(){const e=localStorage.getItem(C.storageKeys.legacyAccessToken);!localStorage.getItem(C.storageKeys.accessToken)&&e&&localStorage.setItem(C.storageKeys.accessToken,e);const a=localStorage.getItem(C.storageKeys.legacyUser);!localStorage.getItem(C.storageKeys.user)&&a&&localStorage.setItem(C.storageKeys.user,a)}function Ci(){const e=localStorage.getItem(C.storageKeys.baseUrl)||"",t=Ht(e);t!==e.trim().replace(/\/+$/,"")&&(t?localStorage.setItem(C.storageKeys.baseUrl,t):localStorage.removeItem(C.storageKeys.baseUrl))}const o={homeView:null,languageSelect:null,grid:null,dealsGrid:null,homeApiSections:null,recentlyViewedSection:null,recentlyViewedGrid:null,banners:null,announcements:null,categoryToolbar:null,quickCategoryGrid:null,catalogButton:null,catalogDrawer:null,closeCatalog:null,catalogList:null,status:null,dealsStatus:null,productsMode:null,dealsMode:null,title:null,loadMore:null,searchForm:null,searchInput:null,cartButton:null,cartDrawer:null,closeCart:null,cartItems:null,cartCount:null,cartSummary:null,cartTotal:null,authDialog:null,authForm:null,authTitle:null,loginTab:null,registerTab:null,loginFields:null,registerFields:null,authSubmit:null,authMessage:null,googleLoginButton:null,loginButton:null,favoritesButton:null,favoritesCount:null,favoritesDialog:null,favoritesSummary:null,favoritesContent:null,refreshFavorites:null,closeFavorites:null,notificationsButton:null,notificationsCount:null,notificationsDrawer:null,notificationsSummary:null,notificationsContent:null,refreshNotifications:null,closeNotifications:null,loginEmail:null,loginPassword:null,registerFullName:null,registerEmail:null,registerPhone:null,registerPassword:null,registerConfirmPassword:null,profileDrawer:null,closeProfile:null,profileContent:null,apiDialog:null,apiForm:null,apiButton:null,baseUrl:null,detailDialog:null,detailContent:null,productDetailPage:null,productDetailPageContent:null,checkoutButton:null,checkoutDialog:null,checkoutForm:null,checkoutHint:null,receiverSelect:null,addressSelect:null,checkoutContent:null,refreshHome:null,ordersButton:null,ordersDialog:null,ordersContent:null,refreshOrders:null,closeOrders:null,myReviewsDialog:null,myReviewsContent:null,myReviewsSummary:null,refreshMyReviews:null,closeMyReviews:null,writeReviewDialog:null,writeReviewForm:null,closeWriteReview:null,writeReviewProduct:null,reviewRatingSelector:null,reviewContent:null,reviewImages:null,reviewImageFiles:null,reviewUploadStatus:null,reviewFormMessage:null,submitReviewButton:null,supportButton:null,supportDialog:null,supportContent:null,privacyDialog:null,privacyContent:null,termsDialog:null,termsContent:null,toast:null,brandViewContent:null,cartExtras:null,cartStickyProgress:null,megaMenu:null,popularSearchesChips:null,assistantFab:null,assistantWidget:null,assistantWidgetContent:null,assistantPage:null,assistantPageContent:null},$i={homeView:"homeView",languageSelect:"languageSelect",grid:"productGrid",dealsGrid:"dealsGrid",homeApiSections:"homeApiSections",recentlyViewedSection:"recentlyViewedSection",recentlyViewedGrid:"recentlyViewedGrid",banners:"banners",announcements:"announcements",categoryToolbar:"categoryToolbar",quickCategoryGrid:"quickCategoryGrid",catalogButton:"catalogButton",catalogDrawer:"catalogDrawer",closeCatalog:"closeCatalog",catalogList:"catalogList",status:"productStatus",dealsStatus:"dealsStatus",productsMode:"productsMode",dealsMode:"dealsMode",title:"productsTitle",loadMore:"loadMore",searchForm:"searchForm",searchInput:"searchInput",cartButton:"cartButton",cartDrawer:"cartDrawer",closeCart:"closeCart",cartItems:"cartItems",cartCount:"cartCount",cartSummary:"cartSummary",cartTotal:"cartTotal",authDialog:"authDialog",authForm:"authForm",authTitle:"authTitle",loginTab:"loginTab",registerTab:"registerTab",loginFields:"loginFields",registerFields:"registerFields",authSubmit:"authSubmit",authMessage:"authMessage",googleLoginButton:"googleLoginButton",loginButton:"loginButton",favoritesButton:"favoritesButton",favoritesCount:"favoritesCount",favoritesDialog:"favoritesDialog",favoritesSummary:"favoritesSummary",favoritesContent:"favoritesContent",refreshFavorites:"refreshFavorites",closeFavorites:"closeFavorites",notificationsButton:"notificationsButton",notificationsCount:"notificationsCount",notificationsDrawer:"notificationsDrawer",notificationsSummary:"notificationsSummary",notificationsContent:"notificationsContent",refreshNotifications:"refreshNotifications",closeNotifications:"closeNotifications",loginEmail:"loginEmail",loginPassword:"loginPassword",registerFullName:"registerFullName",registerEmail:"registerEmail",registerPhone:"registerPhone",registerPassword:"registerPassword",registerConfirmPassword:"registerConfirmPassword",profileDrawer:"profileDrawer",closeProfile:"closeProfile",profileContent:"profileContent",apiDialog:"apiDialog",apiForm:"apiForm",apiButton:"apiButton",baseUrl:"baseUrl",detailDialog:"detailDialog",detailContent:"detailContent",productDetailPage:"productDetailPage",productDetailPageContent:"productDetailPageContent",checkoutButton:"checkoutButton",checkoutDialog:"checkoutDialog",checkoutForm:"checkoutForm",checkoutHint:"checkoutHint",receiverSelect:"receiverSelect",addressSelect:"addressSelect",checkoutContent:"checkoutContent",refreshHome:"refreshHome",ordersButton:"ordersButton",ordersDialog:"ordersDialog",ordersContent:"ordersContent",refreshOrders:"refreshOrders",closeOrders:"closeOrders",myReviewsDialog:"myReviewsDialog",myReviewsContent:"myReviewsContent",myReviewsSummary:"myReviewsSummary",refreshMyReviews:"refreshMyReviews",closeMyReviews:"closeMyReviews",writeReviewDialog:"writeReviewDialog",writeReviewForm:"writeReviewForm",closeWriteReview:"closeWriteReview",writeReviewProduct:"writeReviewProduct",reviewRatingSelector:"reviewRatingSelector",reviewContent:"reviewContent",reviewImages:"reviewImages",reviewImageFiles:"reviewImageFiles",reviewUploadStatus:"reviewUploadStatus",reviewFormMessage:"reviewFormMessage",submitReviewButton:"submitReviewButton",supportButton:"supportButton",supportDialog:"supportDialog",supportContent:"supportContent",privacyDialog:"privacyDialog",privacyContent:"privacyContent",termsDialog:"termsDialog",termsContent:"termsContent",toast:"toast",brandViewContent:"brandViewContent",cartExtras:"cartExtras",cartStickyProgress:"cartStickyProgress",megaMenu:"megaMenu",popularSearchesChips:"popularSearchesChips",assistantFab:"assistantFab",assistantWidget:"assistantWidget",assistantWidgetContent:"assistantWidgetContent",assistantPage:"assistantPage",assistantPageContent:"assistantPageContent"};function Pi(){Object.entries($i).forEach(([e,t])=>{o[e]=document.getElementById(t)})}function Re(e){const t={...e},a={};for(const r of Object.keys(t)){Object.defineProperty(a,r,{get(){return t[r]},set(c){t[r]=c},enumerable:!0,configurable:!0});const i=`set${r.charAt(0).toUpperCase()}${r.slice(1)}`;a[i]=c=>{t[r]=c}}return a}const g=Re({baseUrl:Ht(localStorage.getItem(C.storageKeys.baseUrl)||""),lastApiError:"",lastApiStatus:0,currentRoute:"home",sessionId:fr(),impressionsSent:new Set,impressionObserver:null,isLoading:!1,searchTimer:null,supportFaqOpen:0,flashSaleEnd:null,currentSearchQuery:"",currentGridScreen:"home",orders:[],ordersLoading:!1,ordersError:"",selectedOrder:null,selectedOrderHistory:[],orderDetailLoading:!1,orderDetailError:"",orderHistoryWarning:"",savedForLater:[]});function vr(){var e;try{return((e=import.meta)==null?void 0:e.env)??{}}catch{return{}}}function xe(){return!!vr().DEV}function yr(e){try{return JSON.parse(e)}catch{return e}}function na(e,t){return typeof e=="string"&&e.trim()?e:(e==null?void 0:e.message)||(e==null?void 0:e.error)||`API xatosi: HTTP ${t}`}let Ye={onUnauthorized:()=>{},onLoginRequired:()=>{},showToast:()=>{}};function Ai(e={}){Ye={...Ye,...e}}function br(e,t){const a=e.startsWith("/")?e:`/${e}`,r=g.baseUrl?g.baseUrl.replace(/\/+$/,""):"",i=new URL(`${r}${a}`,window.location.origin);return t&&Object.entries(t).forEach(([c,d])=>{d!=null&&d!==""&&i.searchParams.set(c,d)}),i.toString()}async function E(e,t={}){const{query:a,showError:r=!0,requireAuth:i=!1,silentAuth:c=!1,timeoutMs:d=0,signal:u,...p}=t,m=br(e,a),h={Accept:"application/json",...p.body?{"Content-Type":"application/json"}:{},...p.headers||{}},v=St();if(v&&(h.Authorization=`Bearer ${v}`),i&&!v)return g.lastApiError="Please login to continue",Ye.onLoginRequired(),null;if(xe()){const I=vr();console.info("[API REQUEST]",{path:e,requestUrl:m,method:p.method||"GET",query:a,baseUrl:g.baseUrl,host:window.location.host,mode:I.MODE,envBase:I.VITE_API_BASE_URL})}const $=new AbortController;let T=!1;const q=d>0?setTimeout(()=>{T=!0,$.abort()},d):null;u&&(u.aborted?$.abort():u.addEventListener("abort",()=>$.abort(),{once:!0}));try{g.lastApiError="",g.lastApiStatus=0;const I=await fetch(m,{...p,headers:h,signal:$.signal}),O=await I.text(),L=O?yr(O):null;if(g.lastApiStatus=I.status,xe()&&console.info("[API RESPONSE]",{requestUrl:m,status:I.status,ok:I.ok,payload:L}),I.status===401){const z=na(L,I.status);return g.lastApiError=c?typeof L=="object"&&(L!=null&&L.message||L!=null&&L.error)?z:"Email yoki parol noto‘g‘ri.":"Session expired. Please login again.",c||Ye.onUnauthorized(),null}if(!I.ok){const z=na(L,I.status);return g.lastApiError=z,r&&Ye.showToast(z,"error"),null}return L}catch(I){return g.lastApiStatus=0,(I==null?void 0:I.name)==="AbortError"?g.lastApiError=T?"So‘rov vaqti tugadi. Qayta urinib ko‘ring.":"So‘rov bekor qilindi.":g.lastApiError="Server bilan aloqa bo‘lmadi",xe()&&console.error("[API ERROR]",{requestUrl:m,error:I}),r&&(I==null?void 0:I.name)!=="AbortError"&&Ye.showToast("Server bilan aloqa vaqtincha ishlamayapti.","error"),null}finally{q&&clearTimeout(q)}}const Ii=4200,Ei=4;let re=null;function Li(){return re||(re=document.getElementById("toast"),re?(re.classList.add("toast-host"),re.setAttribute("aria-relevant","additions")):(re=document.createElement("div"),re.id="toast",re.className="toast-host",re.setAttribute("role","status"),re.setAttribute("aria-live","polite"),re.setAttribute("aria-relevant","additions"),document.body.appendChild(re)),re)}const Ua={success:"✓",error:"✕",warning:"!",info:"i"};function M(e,t="info"){var v;const a=String(e||"").trim();if(!a)return;const r=Li(),i=Ua[t]?t:"info",c=document.createElement("div");c.className=`toast-item toast-${i}`,c.setAttribute("role","status");const d=document.createElement("span");d.className="toast-icon",d.setAttribute("aria-hidden","true"),d.textContent=Ua[i];const u=document.createElement("span");u.className="toast-message",u.textContent=a;const p=document.createElement("button");for(p.type="button",p.className="toast-close",p.setAttribute("aria-label","Close"),p.textContent="×",c.append(d,u,p),r.appendChild(c);r.children.length>Ei;)(v=r.firstElementChild)==null||v.remove();let m=0;const h=()=>{clearTimeout(m),c.classList.remove("show"),window.setTimeout(()=>c.remove(),220)};p.addEventListener("click",h),m=window.setTimeout(h,Ii),requestAnimationFrame(()=>{requestAnimationFrame(()=>c.classList.add("show"))})}const P=Re({accessToken:St(),user:ki(C.storageKeys.user,null),role:localStorage.getItem(C.storageKeys.role)||"",authMode:"login",authLoading:!1,profileEditing:!1,profileLoading:!1,profileMenuOpen:!1,profileLoadSeq:0}),l=Re({products:[],todayDeals:[],categories:[],banners:[],announcements:[],recommendedProducts:[],recommendedSimilar:[],recommendedOthers:[],recommendationsLoading:!1,recommendationsError:"",selectedCategory:"ALL",selectedDetailProduct:null,selectedVariantId:null,selectedBrand:null,sourceProducts:[],filterFacets:{brands:[],colors:[],sizes:[],maxPrice:5e6},filters:null,recentlyViewed:[],productReviewsByProductId:{},productReviewsLoading:{},productReviewsError:{},myReviews:[],myReviewsLoading:!1,myReviewsError:"",reviewSubmitting:!1,reviewDraft:null,reviewRating:5,reviewSort:"newest",reviewFilterRating:0,reviewSearchQuery:"",reviewHelpfulIds:new Set,uploadingReviewImages:!1,detailLoading:!1,detailError:"",pdpGalleryIndex:0,pdpActiveTab:"description",selectedQuantity:1,homeLoadedFromApi:!1,demoCategories:!1,demoProducts:!1,demoDeals:!1,homeApiSections:null,compareIds:[],compareProducts:[],feedLoading:!1,feedPage:0}),k=Re({cart:[],cartItems:[],cartLoading:!1,cartError:"",cartCount:0,cartTotal:0,cartUpdatingIds:new Set,cartSelectedIds:new Set,cartKnownItemIds:new Set,addingProductIds:new Set,cartCoupon:"",cartCouponDiscount:0}),A=Re({favoriteProducts:[],favoriteIds:new Set,favoritesLoading:!1,favoritesError:"",favoritesCount:0}),B=Re({notifications:[],notificationsLoading:!1,notificationsError:"",unreadCount:0,unreadCountLoading:!1,notificationUpdatingIds:new Set}),f=Re({receivers:[],addresses:[],selectedReceiverId:null,selectedAddressId:null,checkoutLoading:!1,orderSubmitting:!1,checkoutError:"",orderSuccess:null,checkoutStep:1,checkoutAddressPickerOpen:!1,checkoutReceiverPickerOpen:!1,checkoutCouponOpen:!1,checkoutConfirmOpen:!1}),b=Re({conversationId:"",sessionId:"",messages:[],followUpQuestions:[],loading:!1,historyLoading:!1,error:"",errorStatus:null,widgetOpen:!1,citationsOpen:{},pendingRetryId:null,_bootstrapped:!1});function Ca(){return{currentRoute:g.currentRoute,selectedDetailProduct:l.selectedDetailProduct}}const wr={SKINCARE:"Skincare",MAKEUP:"Makeup",COLLAGEN:"Collagen",HAIR_CARE:"Hair Care",FRAGRANCE:"Fragrance",TOP:"Top",OUTER:"Outer",PANTS:"Pants",SHOES:"Shoes",BAG:"Bag",ACCESSORY:"Accessory"},$a=Object.freeze(["uz","en","ru","ko"]),bt="uz",Ha=Object.freeze([{category:"SKINCARE",icon:"S"},{category:"MAKEUP",icon:"M"},{category:"COLLAGEN",icon:"C"},{category:"HAIR_CARE",icon:"H"},{category:"FRAGRANCE",icon:"F"},{category:"BAG",icon:"B"},{category:"SHOES",icon:"S"},{category:"ACCESSORY",icon:"A"}]),kr={"header.location":"📍 Toshkent","header.extraLinks":"Qo‘shimcha havolalar","header.pickupPoints":"Punktlar","header.sell":"Sotuvchi bo‘lish","header.support":"Savol-javob","header.orders":"Buyurtmalar","header.language":"Til","header.currency":"Valyuta","header.theme":"Mavzu","header.homeAria":"BEAUTY SKIN KOREA bosh sahifa","header.openCatalog":"Katalogni ochish","header.catalog":"Katalog","header.search":"Qidirish","header.searchPlaceholder":"Mahsulot va kategoriyalarni qidirish","header.mainMenu":"Asosiy menyu","header.loginProfile":"Profil yoki kirish","auth.login":"Kirish","auth.register":"Ro‘yxatdan o‘tish","auth.email":"Email","auth.password":"Parol","auth.confirmPassword":"Parolni tasdiqlang","auth.fullName":"To‘liq ism","auth.phone":"Telefon","auth.signIn":"Kirish","auth.createAccount":"Hisob yaratish","auth.continueWithGoogle":"Google bilan kirish","auth.or":"yoki","auth.logout":"Chiqish","auth.loginRequired":"Davom etish uchun kiring","auth.sessionExpired":"Sessiya tugadi. Qayta kiring.","auth.emailRequired":"Email majburiy.","auth.passwordMin":"Parol kamida 6 ta belgi bo‘lsin.","auth.fullNameRequired":"To‘liq ism majburiy.","auth.phoneRequired":"Telefon majburiy.","auth.passwordMismatch":"Parollar mos emas.","home.all":"Hammasi","home.categories":"Kategoriyalar","home.quickCategories":"Tezkor kategoriyalar","home.lowPriceGuarantee":"Past narx kafolati","home.seeAll":"Hammasi","home.todayDeals":"Bugungi takliflar","home.discounts":"Chegirmalar","home.newArrivals":"Yangi mahsulotlar","home.popular":"Ommabop mahsulotlar","home.recommended":"Siz uchun tavsiyalar","home.similar":"O‘xshash mahsulotlar","home.others":"Boshqalar ham ko‘rgan","home.demoMode":"Demo rejim","home.todayOnly":"Faqat bugun","home.startShopping":"Xaridni boshlash","home.showAll":"Barcha mahsulotlar","home.loadMore":"Yana yuklash","home.noProducts":"Mahsulot topilmadi","home.loading":"Yuklanmoqda...","product.addToCart":"Savatga","product.addToCartFull":"Savatga qo‘shish","product.adding":"Qo‘shilmoqda...","product.sold":"{count} dona sotilgan","product.stock":"Omborda: {count}","product.outOfStock":"Omborda yo‘q","product.save":"Saqlash","product.saved":"Saqlangan","product.viewDetails":"Batafsil","product.quickView":"Tez ko‘rish","product.compare":"Solishtirish","product.compareSoon":"Solishtirish tez orada","product.lowStock":"Kam qoldi","product.freeShipping":"Bepul yetkazish","product.reviews":"Sharhlar","product.home":"Bosh sahifa","product.description":"Tavsif","product.detailImages":"Batafsil rasmlar","product.details":"Tafsilotlar","product.delivery":"O‘zbekiston bo‘ylab yetkazib berish","product.secure":"Xavfsiz to‘lov","product.original":"Asl koreys mahsulotlari","product.quantity":"Miqdor","product.notFound":"Mahsulot topilmadi","product.backToShopping":"Xaridga qaytish","product.variantUnavailable":"Variant mavjud emas","cart.title":"Savat","cart.empty":"Savatingiz bo‘sh","cart.subtotal":"Jami","cart.checkout":"Rasmiylashtirish","cart.remove":"O‘chirish","cart.quantity":"Miqdor","cart.added":"Savatga qo‘shildi","cart.itemRemoved":"Mahsulot o‘chirildi","cart.quantityUpdated":"Miqdor yangilandi","cart.unavailable":"Savat mavjud emas","cart.deliveryCourier":"Kuryer orqali yetkazib berish","cart.deliveryEta":"3 kun ichida yetkazamiz","cart.selectAll":"Hammasini tanlash ({selected}/{total})","cart.selectItem":"Mahsulotni tanlash","cart.deleteSelected":"O‘chirish","cart.yourOrder":"Sizning buyurtmangiz","cart.goodsCount":"{count} ta mahsulot","cart.discount":"Chegirma","cart.deliveryCost":"Yetkazib berish narxi","cart.freeDelivery":"Bepul","cart.products":"Mahsulot","cart.freeToHome":"Uyga bepul yetkazish","cart.shipsToday":"Bugun jo‘natiladi","cart.emptyHint":"Yoqtirgan mahsulotlaringizni qo‘shing — ular shu yerda ko‘rinadi.","checkout.title":"Rasmiylashtirish","checkout.receiver":"Qabul qiluvchi","checkout.address":"Yetkazib berish manzili","checkout.orderSummary":"Buyurtma xulosasi","checkout.placeOrder":"Buyurtma berish","checkout.orderCreated":"Buyurtma yaratildi","checkout.continueShopping":"Xaridni davom ettirish","checkout.viewOrders":"Buyurtmalarni ko‘rish","orders.title":"Buyurtmalar tarixi","orders.order":"Buyurtma","orders.details":"Buyurtma tafsilotlari","orders.history":"Status tarixi","orders.none":"Hali buyurtmalar yo‘q","orders.refresh":"Yangilash","orders.viewDetails":"Batafsil","orders.items":"{count} ta mahsulot","orders.itemsCount":"{count} ta tovar","orders.totalLabel":"Jami:","orders.addressLabel":"Manzil:","orders.products":"Mahsulotlar","orders.emptyHint":"Xaridlar qilgandan so‘ng buyurtmalar shu yerda ko‘rinadi.","orders.unavailable":"Buyurtmalar yuklanmadi","orders.detailUnavailable":"Buyurtma tafsilotlari yuklanmadi","orders.noItems":"Mahsulotlar topilmadi.","orders.deliveryInfo":"Yetkazib berish ma'lumotlari","orders.openOnMap":"Xaritada ochish","orders.orderActions":"Buyurtma amallari","orders.goodsLabel":"Mahsulotlar","orders.totalAmount":"Jami summa","orders.feedback":"Fikr-mulohaza","orders.statusMessage.NEW":"Buyurtma qabul qilindi va tez orada tasdiqlanadi.","orders.statusMessage.CONFIRMED":"Buyurtma tasdiqlandi va tayyorlanmoqda.","orders.statusMessage.PACKED":"Buyurtma qadoqlandi va tez orada yuboriladi.","orders.statusMessage.SHIPPED":"Buyurtma yo'lda. Yetkazish vaqtida aloqada bo'ling.","orders.statusMessage.DELIVERED":"Buyurtma yetkazildi. Xaridingiz uchun rahmat!","orders.statusMessage.CANCELED":"Buyurtma bekor qilindi.","orders.statusMessage.default":"Buyurtma holati yangilanmoqda.","favorites.title":"Saralangan","favorites.empty":"Saralanganlar hozircha bo‘sh","favorites.emptyHint":"Yoqtirgan mahsulotlaringiz shu yerda saqlanadi. Yoqqanlarini qo‘shing.","favorites.browse":"Mahsulotlarga","favorites.count":"{count} ta mahsulot","favorites.unavailable":"Saralanganlar yuklanmadi","favorites.added":"Saralanganlarga qo‘shildi","favorites.removed":"Saralangandan olib tashlandi","profile.myProfile":"Profil","profile.edit":"Profilni tahrirlash","profile.save":"Saqlash","profile.myOrders":"Buyurtmalarim","profile.myReviews":"Sharhlarim","profile.tierWhite":"White","profile.ordersStat":"Buyurtmalar","profile.reviewsStat":"Sharhlar","profile.couponsStat":"Kupon","profile.feedbackStat":"Fikr-mulohaza","profile.seeAll":"Hammasini ko‘rish","profile.promotions":"Aksiyalar va kuponlar","profile.help":"Yordam va qo‘llab-quvvatlash","profile.news":"Yangiliklar","profile.language":"Til / Til / Language","profile.privacy":"Maxfiylik siyosati","profile.terms":"Foydalanish shartlari","profile.licenses":"Ochiq kod litsenziyalari","profile.settings":"Sozlamalar","profile.menu":"Menyu","profile.logout":"Chiqish","profile.loggedOut":"Tizimdan chiqildi","profile.comingSoon":"Bu bo‘lim tez orada qo‘shiladi","profile.helpMessage":"Qo‘llab-quvvatlash: support@beautyskin.uz","profile.fullName":"To‘liq ism","profile.phone":"Telefon","profile.imageUrl":"Profil rasmi URL","profile.loadUserFailed":"Profil ma’lumotlari yuklanmadi","profile.loadOrdersFailed":"Buyurtmalar yuklanmadi","profile.loadReviewsFailed":"Sharhlar yuklanmadi","profile.loadFailed":"Profil ma’lumotlari yuklanmadi","support.title":"Qo‘llab-quvvatlash xizmati","support.intro":"Savollaringiz bormi? Biz sizga yordam beramiz.","support.faqTitle":"Ko‘p beriladigan savollar","support.faq.delivery.q":"Buyurtmam qachon keladi?","support.faq.delivery.a":"Buyurtmalar odatda 3–5 ish kuni ichida yetkazib beriladi. Yetkazib berish muddati hudud va tanlangan kuryer xizmatiga bog‘liq. Tabiiy ofatlar yoki boshqa kutilmagan holatlar yuzaga kelmagan taqdirda, buyurtmangiz belgilangan muddatda yetib keladi.","support.faq.cancel.q":"Buyurtmani qanday bekor qilaman?","support.faq.cancel.a":"Buyurtma faqat jo‘natilmaguncha bekor qilinishi mumkin. Buyurtma kuryer xizmatiga topshirilgandan so‘ng uni bekor qilish imkoniyati mavjud emas. Bekor qilish uchun profil bo‘limi yoki mijozlarga xizmat orqali murojaat qilishingiz mumkin.","support.faq.return.q":"Mahsulotni qaytarish mumkinmi?","support.faq.return.a":"Mahsulotni qaytarish faqat u ishlatilmagan, qadoqlanishi buzilmagan va to‘liq holatda saqlangan taqdirda amalga oshiriladi. Qaytarish jarayonida mahsulotni kargo orqali yuborish xarajatlari mijoz zimmasiga yuklanadi.","support.originalTitle":"100% original va Koreyadan to‘g‘ridan-to‘g‘ri yetkazib berish","support.originalText":"Ilovamizdagi mahsulotlar to‘g‘ridan-to‘g‘ri Janubiy Koreyadagi rasmiy ishlab chiqaruvchilar va sertifikatlangan distribyutorlardan import qilinadi. Soxta mahsulot sotish qat’iyan taqiqlanadi.","support.whyTitle":"Nega biz?","support.why1":"Koreyadan to‘g‘ridan-to‘g‘ri import","support.why2":"Hech qanday soxta mahsulot yo‘q","support.why3":"Zavod qadog‘i va original plombalar","support.why4":"Har bir buyurtma jo‘natishdan oldin tekshiriladi","support.why5":"Minglab mamnun mijozlar tanlovi","support.guarantee":"Agar mahsulot original bo‘lmasa — biz 100% qiymatini qaytaramiz.","support.contactTitle":"Biz bilan bog‘laning","support.phoneLabel":"Telefon:","support.hoursLabel":"Ish vaqti:","support.hoursValue":"09:00 – 18:00 (Du–Ju)","support.contactNote":"Murojaatlaringizni qadrlaymiz va imkon qadar tezroq javob berishga harakat qilamiz.","privacy.title":"Maxfiylik siyosati","privacy.updated":"Oxirgi yangilanish: 2025 y.","privacy.intro":"Biz foydalanuvchilarning shaxsiy ma’lumotlarini hurmat qilamiz va himoya qilamiz. Ushbu Maxfiylik siyosati ma’lumotlaringiz qanday to‘planishi, ishlatilishi va saqlanishini tushuntiradi.","privacy.s1title":"1. Qanday ma’lumotlar to‘planadi","privacy.s1a":"Ism va profil ma’lumotlari","privacy.s1b":"Telefon raqami yoki email","privacy.s1c":"Buyurtmalar va savat ma’lumotlari","privacy.s1d":"Qurilma haqidagi texnik ma’lumotlar","privacy.s2title":"2. Ma’lumotlardan foydalanish","privacy.s2intro":"To‘plangan ma’lumotlar quyidagi maqsadlarda ishlatiladi:","privacy.s2a":"Buyurtmalarni bajarish","privacy.s2b":"Akkauntni boshqarish","privacy.s2c":"Xizmat sifatini yaxshilash","privacy.s2d":"Xavfsizlikni ta’minlash","privacy.s3title":"3. Ma’lumotlarni himoya qilish","privacy.s3text":"Biz shaxsiy ma’lumotlaringizni ruxsatsiz kirish, o‘zgartirish yoki tarqatishdan himoya qilish uchun zamonaviy xavfsizlik choralarini qo‘llaymiz.","privacy.s4title":"4. Uchinchi tomon xizmatlari","privacy.s4text":"Ilovamiz to‘lov, yetkazib berish va autentifikatsiya uchun uchinchi tomon xizmatlaridan foydalanishi mumkin. Bu xizmatlarning o‘z maxfiylik siyosati mavjud.","privacy.s5title":"5. Aloqa","privacy.s5text":"Agar Maxfiylik siyosati bo‘yicha savollaringiz bo‘lsa, biz bilan bog‘laning:","terms.title":"Foydalanish shartlari","terms.updated":"Oxirgi yangilanish: 2025 y.","terms.intro":"Ushbu mobil ilovadan foydalanish orqali siz ushbu Foydalanish shartlariga rozilik bildirasiz. Agar shartlarga rozi bo‘lmasangiz, iltimos, ilovadan foydalanmang.","terms.s1title":"1. Umumiy qoidalar","terms.s1text":"Ushbu ilova kosmetika va boshqa mahsulotlarni onlayn sotib olish uchun mo‘ljallangan. Barcha materiallar, logotiplar va kontent mualliflik huquqi bilan himoyalangan.","terms.s2title":"2. Akkaunt ro‘yxatdan o‘tkazish","terms.s2text":"Buyurtma berish uchun foydalanuvchi akkaunt yaratishi va ishonchli ma’lumotlarni taqdim etishi kerak. Foydalanuvchi o‘z akkauntining xavfsizligi uchun javobgardir.","terms.s3title":"3. Buyurtmalar va to‘lov","terms.s3text":"Buyurtmalar ilova orqali rasmiylashtiriladi. Mahsulot narxlari oldindan ogohlantirmasdan o‘zgarishi mumkin. To‘lov tanlangan usul bo‘yicha amalga oshiriladi.","terms.s4title":"4. Yetkazib berish","terms.s4text":"Yetkazib berish muddatlari hudud va tanlangan usulga bog‘liq. Uchinchi tomon yetkazib berish xizmatlari sababli yuzaga kelgan kechikishlar uchun javobgar emasmiz.","terms.s5title":"5. Qaytarish va bekor qilish","terms.s5text":"Buyurtmalarni qaytarish va bekor qilish siyosati tegishli bo‘limda va yordam hamda qo‘llab-quvvatlash sahifasida tavsiflangan.","terms.s6title":"6. Javobgarlikni cheklash","terms.s6text":"Ilovadan foydalanish bilan bog‘liq bilvosita zarar uchun javobgar emasmiz.","terms.s7title":"7. Shartlarni o‘zgartirish","terms.s7text":"Biz ushbu shartnomani istalgan vaqtda o‘zgartirish huquqini o‘zimizda saqlaymiz. Joriy versiya doimo ilovada mavjud.","licenses.title":"Open Source Libraries & Technologies","licenses.intro":"Ushbu ilova quyidagi ochiq kodli texnologiyalar yordamida qurilgan","licenses.frontendTitle":"Android Frontend","licenses.fe1":"Android Jetpack – hayot sikli, navigatsiya, ViewBinding va arxitektura komponentlarini boshqarish uchun ishlatiladigan zamonaviy Android kutubxonalari to‘plami, barqaror foydalanuvchi interfeysini ta’minlaydi.","licenses.fe2":"Retrofit – backend REST API bilan samarali aloqa qilish uchun ishlatiladigan Android uchun tip-xavfsiz HTTP-mijoz.","licenses.fe3":"Glide – silliq skroll va samarali xotira ishlatilishi uchun optimallashtirilgan rasmlarni yuklash va keshlash kutubxonasi.","licenses.fe4":"Firebase Authentication – Google orqali xavfsiz foydalanuvchi autentifikatsiyasi va telefon raqamini tekshirish (OTP) ni ta’minlaydi.","licenses.fe5":"Facebook Shimmer – foydalanuvchi tajribasini yaxshilash uchun animatsiyali yuklash zaxira o‘rinlarini ko‘rsatadi.","licenses.backendTitle":"Backend & Server Technologies","licenses.be1":"Spring Boot – masshtablanadigan RESTful API yaratish uchun ishlatiladigan Java asosidagi freymvork.","licenses.be2":"Spring Security + JWT – foydalanuvchi sessiyalari va API endpointlarini himoya qilish uchun JSON Web Tokens yordamida autentifikatsiyani amalga oshiradi.","licenses.be3":"Spring Data JPA – ORM va repozitoriy patterni yordamida ma’lumotlar bazasiga kirishni soddalashtiradi.","licenses.be4":"MySQL – hisob yozuvlari, buyurtmalar va tovarlarni saqlash uchun ishonchli relatsion ma’lumotlar bazasini boshqarish tizimi.","licenses.be5":"Eskiz SMS API – telefon raqamini tekshirish va bir martalik parollarni (OTP) yetkazish uchun ishlatiladi.","licenses.infraTitle":"Infrastructure & Deployment","licenses.inf1":"Docker – ilovani barcha bog‘liqliklari bilan barqaror joylashtirish uchun paketlash konteynerizatsiya texnologiyasi.","licenses.inf2":"Railway Cloud – backend xizmatlarini joylashtirish, masshtablash va monitoring qilish uchun bulutli platforma.","licenses.securityTitle":"Security & Data Protection","licenses.sec1":"HTTPS – foydalanuvchi ma’lumotlarini himoya qilish uchun barcha tarmoq aloqasi HTTPS yordamida shifrlangan.","licenses.sec2":"Xavfsiz parol bilan ishlash – foydalanuvchi hisob ma’lumotlari hech qachon ochiq holda saqlanmaydi.","licenses.sec3":"Token asosidagi avtorizatsiya – barcha himoyalangan so‘rovlar yaroqli JWT tokenlarini talab qiladi.","licenses.footer":"Biz ochiq kod hamjamiyatini hurmat qilamiz va barcha litsenziya talablari hamda ilg‘or xavfsizlik amaliyotlariga qat’iy rioya qilamiz.","reviews.my":"Mening sharhlarim","reviews.write":"Sharh yozish","reviews.submit":"Sharh yuborish","reviews.rating":"Reyting","reviews.content":"Sharh matni","reviews.none":"Hali sharhlar yo‘q","reviews.noText":"Matnli sharh yo‘q.","reviews.submitted":"Sharh yuborildi","notifications.title":"Bildirishnomalar","notifications.alerts":"Xabarlar","notifications.none":"Hali bildirishnomalar yo‘q","notifications.markRead":"O‘qildi deb belgilash","notifications.read":"O‘qilgan","notifications.unread":"O‘qilmagan","common.tryAgain":"Qayta urinish","common.somethingWrong":"Nimadir xato ketdi","common.serverFailed":"Server bilan aloqa bo‘lmadi","common.saving":"Saqlanmoqda...","common.total":"Jami","common.unknown":"Noma’lum","common.unavailable":"Mavjud emas","status.NEW":"Yangi","status.PENDING":"Kutilmoqda","status.CONFIRMED":"Tasdiqlangan","status.PACKED":"Qadoqlangan","status.SHIPPED":"Yuborilgan","status.DELIVERED":"Yetkazilgan","status.CANCELED":"Bekor qilingan","notification.ORDER":"Buyurtma","notification.PROMO":"Aksiya","notification.SYSTEM":"Tizim","category.SKINCARE":"Teri parvarishi","category.MAKEUP":"Makiyaj","category.COLLAGEN":"Kollagen","category.HAIR_CARE":"Soch parvarishi","category.FRAGRANCE":"Atirlar","category.TOP":"Ustki kiyim","category.OUTER":"Tashqi kiyim","category.PANTS":"Shimlar","category.SHOES":"Poyabzal","category.BAG":"Sumka","category.ACCESSORY":"Aksessuar","hero.eyebrow":"Eng yaxshi kunlik takliflar","hero.title":"Koreys go‘zallik mahsulotlari","hero.subtitle":"O‘zbekiston bo‘ylab tez yetkazib berish — kosmetika, teri parvarishi, atir va aksessuarlar.","hero.viewProducts":"Mahsulotlarni ko‘rish","hero.fastDelivery":"Tez yetkazib berish","hero.fastDeliverySub":"O‘zbekiston bo‘ylab","home.history":"Tarix","home.recentlyViewed":"Yaqinda ko‘rilgan","api.title":"API sozlamasi","api.save":"Saqlash","search.results":"Natijalar","search.noResults":"Hech narsa topilmadi","search.recent":"So‘nggi qidiruvlar","search.trending":"Trendda","search.clear":"Tozalash","search.aiHint":"AI qidiruv — tezroq toping","search.voice":"Ovozli qidiruv","search.image":"Rasm bo‘yicha qidiruv","search.imagePlaceholder":"Rasm tanlandi — qidiruv tez orada","search.popularSearches":"Ommabop qidiruvlar","trust.secure":"Xavfsiz to‘lov","trust.authentic":"100% asl mahsulot","trust.delivery":"Tez yetkazib berish","trust.verified":"Tasdiqlangan sotuvchilar","filter.title":"Filtrlar","filter.clearAll":"Hammasini tozalash","filter.brand":"Brend","filter.price":"Narx","filter.discount":"Chegirma","filter.color":"Rang","filter.size":"O'lcham","filter.rating":"Reyting","filter.availability":"Mavjudlik","filter.fastDelivery":"Tez yetkazish","filter.origin":"Kelib chiqishi","filter.seller":"Sotuvchi","filter.onSaleOnly":"Faqat chegirmali","filter.inStock":"Omborda bor","filter.apply":"Qo'llash","filter.noOptions":"Variant yo'q","sort.title":"Saralash","sort.popular":"Ommabop","sort.priceAsc":"Narx: arzon → qimmat","sort.priceDesc":"Narx: qimmat → arzon","sort.rating":"Yuqori reyting","sort.newest":"Yangi","sort.discount":"Eng katta chegirma","compare.title":"Solishtirish","compare.empty":"Solishtirish ro'yxati bo'sh","compare.added":"Solishtirishga qo'shildi","compare.removed":"Solishtirishdan olib tashlandi","compare.full":"Maksimum {max} ta mahsulot","compare.viewAll":"Solishtirishni ko'rish","compare.clearAll":"Hammasini tozalash","compare.price":"Narx","compare.brand":"Brend","compare.rating":"Reyting","compare.stock":"Ombor","compare.discount":"Chegirma","product.authentic":"Asl mahsulot","product.officialStore":"Rasmiy do'kon","product.fullscreen":"To'liq ekran","product.video360Placeholder":"Video va 360° tez orada","product.listPrice":"Ro'yxat narxi","product.discount":"Chegirma","product.installmentPlaceholder":"Bo'lib to'lash tez orada","product.estimatedDelivery":"Taxminiy yetkazish","product.frequentlyBought":"Ko'pincha birga sotib olinadi","cart.saveForLater":"Keyinroq uchun saqlash","cart.couponPlaceholder":"Kupon kodi","cart.applyCoupon":"Qo'llash","cart.couponApplied":"Kupon qo'llandi","cart.couponInvalid":"Kupon noto'g'ri","cart.freeShippingUnlocked":"Bepul yetkazish!","cart.freeShippingRemaining":"Bepul yetkazish uchun yana {amount}","cart.restored":"Saqlangan mahsulot","cart.moveToCart":"Savatga qaytarish","checkout.stepShipping":"Yetkazish","checkout.stepAddress":"Manzil","checkout.stepPayment":"To'lov","checkout.stepReview":"Tekshirish","checkout.back":"Orqaga","checkout.continue":"Davom etish","checkout.placing":"Yuborilmoqda...","checkout.paymentPlaceholder":"Xavfsiz to'lov (COD / karta tez orada)","checkout.receiverRequired":"Qabul qiluvchini tanlang","checkout.addressRequired":"Manzilni tanlang","checkout.deliveryTitle":"Yetkazib berish","checkout.deliveryEta":"Buyurtma 3–5 ish kuni ichida yetkaziladi","checkout.addressNotSelected":"Manzil tanlanmagan","checkout.selectAddress":"Manzilni tanlash","checkout.receiverNotSelected":"Qabul qiluvchi tanlanmagan","checkout.paymentMethod":"To‘lov usuli","checkout.paymentCod":"Qabul qilganda to‘lash","checkout.paymentCodHint":"To‘lov faqat naqd pul yoki bank kartasiga o‘tkazma orqali amalga oshiriladi","checkout.deliveryInfo":"Buyurtma kuryer orqali manzilga yetkaziladi. Yetkazish vaqtida aloqada bo‘ling.","checkout.couponTitle":"Chegirma kuponi","checkout.applyCoupon":"Kupon qo‘llash","checkout.yourOrder":"Sizning buyurtmangiz","checkout.deliveryFee":"Yetkazish","checkout.totalToPay":"To‘lov uchun jami","checkout.confirm":"Tasdiqlash","checkout.legalNotice":"Buyurtmani tasdiqlash orqali Foydalanish shartlari va Maxfiylik siyosatiga rozilik bildirasiz.","checkout.deliveryOn":"Yetkazish {dates}","checkout.itemsCount":"{count} ta mahsulot","checkout.confirmTitle":"Buyurtmani tasdiqlash","checkout.confirmQuestion":"Buyurtmani yubormoqchimisiz?","checkout.confirmName":"Ism: {name}","checkout.confirmAddress":"Manzil: {address}","checkout.confirmDisclaimer":"Tasdiqlangandan keyin buyurtmani faqat qo‘llab-quvvatlash xizmati orqali o‘zgartirish mumkin.","checkout.cancel":"Bekor qilish","checkout.successTitle":"Buyurtma muvaffaqiyatli rasmiylashtirildi!","checkout.successSubtitle":"Buyurtma muvaffaqiyatli qabul qilindi","checkout.orderFailed":"Buyurtma yuborilmadi. Qayta urinib ko‘ring.","checkout.noItems":"Savatda tanlangan mahsulot yo‘q.","checkout.invalidItems":"Savatdagi mahsulot identifikatorlari noto‘g‘ri.","reviews.verified":"Tasdiqlangan xarid","reviews.helpful":"Foydali","reviews.search":"Sharhlarni qidirish","reviews.sortNewest":"Eng yangi","reviews.sortRatingHigh":"Yuqori reyting","reviews.sortRatingLow":"Past reyting","reviews.sortHelpful":"Eng foydali","reviews.allRatings":"Barcha reytinglar","brand.official":"Rasmiy brend","brand.story":"Koreys go'zallik brendi","brand.popular":"Ommabop mahsulotlar","home.trendingNow":"Hozir trendda","home.recommendedForYou":"Siz uchun tavsiya","home.continueShopping":"Xaridni davom ettirish","home.becauseYouViewed":"Siz ko'rganingiz uchun","footer.tagline":"Koreys go‘zallik marketpleysi","assistant.title":"Xarid yordamchisi","assistant.subtitle":"Teri turiga mos mahsulotlar tavsiya qilamiz","assistant.fabLabel":"AI Yordamchi","assistant.placeholder":"Masalan: quruq teri uchun krem tavsiya qil...","assistant.send":"Yuborish","assistant.composerHint":"Enter — yuborish · Shift+Enter — yangi qator","assistant.newChat":"Yangi chat","assistant.newChatStarted":"Yangi suhbat boshlandi","assistant.openFull":"To‘liq ochish","assistant.close":"Yopish","assistant.emptyTitle":"Savolingizni yozing","assistant.emptyHint":"Mahsulot tanlash, taqqoslash yoki teri muammosi bo‘yicha maslahat so‘rang.","assistant.thinking":"Yordamchi javob yozmoqda...","assistant.loadingHistory":"Suhbat yuklanmoqda...","assistant.retry":"Qayta urinish","assistant.sources":"Manbalar","assistant.viewProduct":"Ko‘rish","assistant.addToCart":"Savatga","assistant.inStock":"Mavjud","assistant.errorNetwork":"Tarmoq xatosi. Internetni tekshirib, qayta urinib ko‘ring.","assistant.errorTimeout":"Javob vaqti tugadi. Qayta urinib ko‘ring.","assistant.error400":"So‘rov noto‘g‘ri. Xabarni o‘zgartirib ko‘ring.","assistant.error401":"Sessiya tugagan. Qayta kiring yoki davom eting.","assistant.error429":"Juda ko‘p so‘rov. Biroz kutib, qayta urinib ko‘ring.","assistant.error500":"Server xatosi. Keyinroq qayta urinib ko‘ring.","assistant.error503":"Xizmat vaqtincha mavjud emas. Qayta urinib ko‘ring.","assistant.errorGeneric":"Javob olinmadi. Qayta urinib ko‘ring."},Pa={...kr,"header.location":"📍 Tashkent","header.pickupPoints":"Pickup points","header.sell":"Sell on Beauty Skin Korea","header.support":"Support","header.orders":"Orders","header.language":"Language","header.catalog":"Catalog","header.searchPlaceholder":"Search products and categories","header.search":"Search","auth.login":"Login","auth.register":"Register","auth.signIn":"Sign in","auth.createAccount":"Create account","auth.continueWithGoogle":"Continue with Google","auth.or":"or","auth.email":"Email","auth.password":"Password","auth.confirmPassword":"Confirm password","auth.fullName":"Full name","auth.phone":"Phone","auth.logout":"Logout","auth.loginRequired":"Please login to continue","auth.emailRequired":"Email is required.","auth.passwordMin":"Password must be at least 6 characters.","auth.fullNameRequired":"Full name is required.","auth.phoneRequired":"Phone is required.","auth.passwordMismatch":"Passwords do not match.","home.all":"All","home.categories":"Categories","home.quickCategories":"Quick categories","home.lowPriceGuarantee":"Low price guarantee","home.seeAll":"All","home.todayDeals":"Today deals","home.discounts":"Discounts","home.newArrivals":"New arrivals","home.popular":"Popular products","home.recommended":"Recommended for you","home.similar":"Similar products","home.others":"Others also viewed","home.demoMode":"Demo mode","home.todayOnly":"Today only","home.startShopping":"Start shopping","home.showAll":"Show all products","home.loadMore":"Load more","home.noProducts":"No products found","home.loading":"Loading...","product.addToCart":"Add to cart","product.addToCartFull":"Add to cart","product.adding":"Adding...","product.sold":"{count} sold","product.stock":"Stock: {count}","product.save":"Save","product.saved":"Saved","product.viewDetails":"View details","product.reviews":"Reviews","product.description":"Description","product.detailImages":"Detail images","product.delivery":"Delivery across Uzbekistan","product.secure":"Secure checkout","product.original":"Original Korean products","product.notFound":"Product not found","product.backToShopping":"Back to shopping","cart.title":"Cart","cart.empty":"Your cart is empty","cart.subtotal":"Subtotal","cart.checkout":"Checkout","cart.added":"Added to cart","cart.itemRemoved":"Removed from cart","cart.quantityUpdated":"Quantity updated","cart.deliveryCourier":"Courier delivery","cart.deliveryEta":"Delivered in 3 days","cart.selectAll":"Select all ({selected}/{total})","cart.selectItem":"Select item","cart.deleteSelected":"Delete","cart.yourOrder":"Your order","cart.goodsCount":"{count} items","cart.discount":"Discount","cart.deliveryCost":"Delivery cost","cart.freeDelivery":"Free","cart.products":"Products","cart.freeToHome":"Free home delivery","cart.shipsToday":"Ships today","cart.emptyHint":"Add products you like and they will appear here.","cart.remove":"Remove","cart.unavailable":"Cart unavailable","orders.title":"Order history","orders.itemsCount":"{count} items","orders.totalLabel":"Total:","orders.addressLabel":"Address:","orders.products":"Products","orders.emptyHint":"Your purchases will appear here.","orders.unavailable":"Orders could not be loaded","orders.detailUnavailable":"Order details unavailable","orders.noItems":"No items found.","orders.deliveryInfo":"Delivery information","orders.openOnMap":"Open on map","orders.orderActions":"Order actions","orders.goodsLabel":"Products","orders.totalAmount":"Total amount","orders.feedback":"Feedback","orders.statusMessage.NEW":"Order received and will be confirmed soon.","orders.statusMessage.CONFIRMED":"Order confirmed and being prepared.","orders.statusMessage.PACKED":"Order packed and will ship soon.","orders.statusMessage.SHIPPED":"Order is on the way. Please stay in touch.","orders.statusMessage.DELIVERED":"Order delivered. Thank you for your purchase!","orders.statusMessage.CANCELED":"Order was canceled.","orders.statusMessage.default":"Order status is being updated.","orders.order":"Order","orders.viewDetails":"Details","orders.items":"{count} items","orders.details":"Order details","orders.history":"Status history","favorites.title":"Favorites","favorites.empty":"No favorites yet","favorites.emptyHint":"Your favorite products will be stored here. Add the ones you like.","favorites.browse":"Browse products","favorites.count":"{count} items","favorites.unavailable":"Favorites could not be loaded","reviews.none":"No reviews yet","notifications.title":"Notifications","notifications.alerts":"Alerts","notifications.none":"No notifications yet","common.tryAgain":"Try again","common.serverFailed":"Server connection failed","common.total":"Total","checkout.title":"Checkout","orders.refresh":"Refresh","reviews.my":"My reviews","reviews.write":"Write review","reviews.submit":"Submit review","hero.eyebrow":"Best daily offers","hero.title":"Korean beauty products","hero.subtitle":"Fast delivery across Uzbekistan — cosmetics, skincare, fragrance and accessories.","hero.viewProducts":"View products","hero.fastDelivery":"Fast delivery","hero.fastDeliverySub":"Across Uzbekistan","home.history":"History","home.recentlyViewed":"Recently viewed","profile.myProfile":"My Profile","profile.edit":"Edit profile","profile.save":"Save","profile.myOrders":"My orders","profile.myReviews":"My reviews","profile.tierWhite":"White","profile.ordersStat":"Orders","profile.reviewsStat":"Reviews","profile.couponsStat":"Coupons","profile.feedbackStat":"Feedback","profile.seeAll":"See all","profile.promotions":"Promotions & coupons","profile.help":"Help & support","profile.news":"News","profile.language":"Language / Til / Language","profile.privacy":"Privacy policy","profile.terms":"Terms of use","profile.licenses":"Open source licenses","profile.settings":"Settings","profile.menu":"Menu","profile.logout":"Log out","profile.loggedOut":"Logged out","profile.comingSoon":"This section is coming soon","profile.helpMessage":"Support: support@beautyskin.uz","profile.fullName":"Full name","profile.phone":"Phone","profile.imageUrl":"Profile image URL","profile.loadUserFailed":"Could not load profile","profile.loadOrdersFailed":"Could not load orders","profile.loadReviewsFailed":"Could not load reviews","profile.loadFailed":"Could not load profile data","support.title":"Support service","support.intro":"Have questions? We are here to help.","support.faqTitle":"Frequently asked questions","support.faq.delivery.q":"When will my order arrive?","support.faq.delivery.a":"Orders are usually delivered within 3–5 business days. Delivery time depends on your region and the chosen courier service. Unless there are natural disasters or other unforeseen circumstances, your order will arrive within the estimated time.","support.faq.cancel.q":"How do I cancel an order?","support.faq.cancel.a":"An order can only be canceled before it is shipped. Once the order has been handed over to the courier service, it can no longer be canceled. To cancel, you can reach out via the profile section or customer support.","support.faq.return.q":"Can I return a product?","support.faq.return.a":"A product can only be returned if it is unused, the packaging is intact, and the item is kept in full condition. Shipping costs for returning the product via cargo are covered by the customer.","support.originalTitle":"100% original and direct supply from Korea","support.originalText":"Products in our app are imported directly from official manufacturers and certified distributors in South Korea. Selling counterfeit goods is strictly prohibited.","support.whyTitle":"Why us?","support.why1":"Direct import from Korea","support.why2":"No counterfeits","support.why3":"Factory packaging and original seals","support.why4":"Every order is checked before shipping","support.why5":"Chosen by thousands of happy customers","support.guarantee":"If the product is not original — we refund 100% of the cost.","support.contactTitle":"Contact us","support.phoneLabel":"Phone:","support.hoursLabel":"Working hours:","support.hoursValue":"09:00 – 18:00 (Mon–Fri)","support.contactNote":"We value your messages and will try to respond as quickly as possible.","privacy.title":"Privacy Policy","privacy.updated":"Last updated: 2025","privacy.intro":"We respect and protect users' personal data. This Privacy Policy explains how your data is collected, used, and stored.","privacy.s1title":"1. What data is collected","privacy.s1a":"Name and profile details","privacy.s1b":"Phone number or email","privacy.s1c":"Order and cart data","privacy.s1d":"Technical device information","privacy.s2title":"2. Use of data","privacy.s2intro":"The collected data is used for the following purposes:","privacy.s2a":"Fulfilling orders","privacy.s2b":"Account management","privacy.s2c":"Improving service quality","privacy.s2d":"Ensuring security","privacy.s3title":"3. Data protection","privacy.s3text":"We apply modern security measures to protect your personal data from unauthorized access, alteration, or distribution.","privacy.s4title":"4. Third-party services","privacy.s4text":"Our app may use third-party services for payment, delivery, and authentication. These services have their own privacy policies.","privacy.s5title":"5. Contact","privacy.s5text":"If you have questions about the Privacy Policy, contact us:","terms.title":"Terms of Service","terms.updated":"Last updated: 2025","terms.intro":"By using this mobile application, you agree to the terms of this Terms of Service. If you do not agree with the terms, please do not use the application.","terms.s1title":"1. General provisions","terms.s1text":"This application is intended for online purchase of cosmetics and other products. All materials, logos, and content are protected by copyright.","terms.s2title":"2. Account registration","terms.s2text":"To place orders, the user must create an account and provide accurate information. The user is responsible for the security of their account.","terms.s3title":"3. Orders and payment","terms.s3text":"Orders are placed through the application. Product prices may change without prior notice. Payment is made according to the selected method.","terms.s4title":"4. Delivery","terms.s4text":"Delivery times depend on the region and the selected method. We are not responsible for delays caused by third-party delivery services.","terms.s5title":"5. Returns and cancellation","terms.s5text":"The return and order cancellation policy is described in the relevant section and on the help and support page.","terms.s6title":"6. Limitation of liability","terms.s6text":"We are not liable for indirect damages related to the use of the application.","terms.s7title":"7. Changes to terms","terms.s7text":"We reserve the right to change this agreement at any time. The current version is always available in the application.","licenses.title":"Open Source Libraries & Technologies","licenses.intro":"This application is built using the following open-source technologies","licenses.frontendTitle":"Android Frontend","licenses.fe1":"Android Jetpack – a set of modern Android libraries used for lifecycle management, navigation, ViewBinding, and architectural components to ensure a stable user interface.","licenses.fe2":"Retrofit – a type-safe HTTP client for Android used for efficient interaction with the backend REST API.","licenses.fe3":"Glide – an image loading and caching library optimized for smooth scrolling and efficient memory usage.","licenses.fe4":"Firebase Authentication – provides secure user authentication via Google and phone number verification (OTP).","licenses.fe5":"Facebook Shimmer – displays animated loading placeholders to improve the user experience.","licenses.backendTitle":"Backend & Server Technologies","licenses.be1":"Spring Boot – a Java-based framework used to build scalable RESTful APIs.","licenses.be2":"Spring Security + JWT – implements authentication using JSON Web Tokens to protect user sessions and API endpoints.","licenses.be3":"Spring Data JPA – simplifies database access using ORM and the repository pattern.","licenses.be4":"MySQL – a reliable relational database management system for storing accounts, orders, and products.","licenses.be5":"Eskiz SMS API – used for phone number verification and delivery of one-time passwords (OTP).","licenses.infraTitle":"Infrastructure & Deployment","licenses.inf1":"Docker – containerization technology for packaging the application with all dependencies for stable deployment.","licenses.inf2":"Railway Cloud – a cloud platform for deploying, scaling, and monitoring backend services.","licenses.securityTitle":"Security & Data Protection","licenses.sec1":"HTTPS – all network communication is encrypted using HTTPS to protect user data.","licenses.sec2":"Secure password handling – user credentials are never stored in plain text.","licenses.sec3":"Token-based authorization – all protected requests require valid JWT tokens.","licenses.footer":"We respect the open-source community and strictly comply with all license requirements and security best practices.","status.PENDING":"Pending","api.title":"API settings","api.save":"Save","header.currency":"Currency","header.theme":"Theme","product.quickView":"Quick view","product.compare":"Compare","product.compareSoon":"Compare coming soon","product.lowStock":"Low stock","product.freeShipping":"Free shipping","search.results":"Results","search.noResults":"No results found","search.recent":"Recent searches","search.trending":"Trending","search.clear":"Clear","search.aiHint":"AI search — find products faster","search.voice":"Voice search","search.image":"Image search","search.imagePlaceholder":"Image selected — search coming soon","search.popularSearches":"Popular searches","trust.secure":"Secure payment","trust.authentic":"100% authentic","trust.delivery":"Fast delivery","trust.verified":"Verified sellers","filter.title":"Filters","filter.clearAll":"Clear all","filter.brand":"Brand","filter.price":"Price","filter.discount":"Discount","filter.color":"Color","filter.size":"Size","filter.rating":"Rating","filter.availability":"Availability","filter.fastDelivery":"Fast delivery","filter.origin":"Country of origin","filter.seller":"Seller","filter.onSaleOnly":"On sale only","filter.inStock":"In stock","filter.apply":"Apply filters","filter.noOptions":"No options","sort.title":"Sort","sort.popular":"Popular","sort.priceAsc":"Price: Low to High","sort.priceDesc":"Price: High to Low","sort.rating":"Top rated","sort.newest":"Newest","sort.discount":"Best discount","compare.title":"Compare","compare.empty":"Compare list is empty","compare.added":"Added to compare","compare.removed":"Removed from compare","compare.full":"Maximum {max} products","compare.viewAll":"View comparison","compare.clearAll":"Clear all","compare.price":"Price","compare.brand":"Brand","compare.rating":"Rating","compare.stock":"Stock","compare.discount":"Discount","product.authentic":"Authentic product","product.officialStore":"Official store","product.fullscreen":"Fullscreen","product.video360Placeholder":"Video & 360° coming soon","product.listPrice":"List price","product.discount":"Discount","product.installmentPlaceholder":"Installments coming soon","product.estimatedDelivery":"Estimated delivery","product.frequentlyBought":"Frequently bought together","cart.saveForLater":"Save for later","cart.couponPlaceholder":"Coupon code","cart.applyCoupon":"Apply","cart.couponApplied":"Coupon applied","cart.couponInvalid":"Invalid coupon","cart.freeShippingUnlocked":"Free shipping unlocked!","cart.freeShippingRemaining":"Add {amount} more for free shipping","cart.restored":"Item restored","cart.moveToCart":"Move to cart","checkout.stepShipping":"Shipping","checkout.stepAddress":"Address","checkout.stepPayment":"Payment","checkout.stepReview":"Review","checkout.back":"Back","checkout.continue":"Continue","checkout.placing":"Placing order...","checkout.paymentPlaceholder":"Secure payment (COD / card coming soon)","checkout.receiverRequired":"Please select a receiver","checkout.addressRequired":"Please select an address","checkout.deliveryTitle":"Delivery","checkout.deliveryEta":"Order will be delivered within 3–5 business days","checkout.addressNotSelected":"Address not selected","checkout.selectAddress":"Select address","checkout.receiverNotSelected":"Recipient not selected","checkout.paymentMethod":"Payment method","checkout.paymentCod":"Payment on receipt","checkout.paymentCodHint":"Payment is made only in cash or by bank card transfer","checkout.deliveryInfo":"The order will be delivered by courier to your address. Please stay in touch during delivery.","checkout.couponTitle":"Discount coupon","checkout.applyCoupon":"Apply coupon","checkout.yourOrder":"Your order","checkout.deliveryFee":"Delivery","checkout.totalToPay":"Total to pay","checkout.confirm":"Confirm","checkout.legalNotice":"By confirming the order, you agree to the Terms of Use and Privacy Policy.","checkout.deliveryOn":"Delivery {dates}","checkout.itemsCount":"{count} items","checkout.orderSummary":"Order summary","checkout.placeOrder":"Place order","checkout.orderCreated":"Order created","checkout.continueShopping":"Continue shopping","checkout.viewOrders":"View orders","checkout.receiver":"Recipient","checkout.confirmTitle":"Order confirmation","checkout.confirmQuestion":"Do you want to send the order?","checkout.confirmName":"Name: {name}","checkout.confirmAddress":"Address: {address}","checkout.confirmDisclaimer":"After confirmation, the order can only be changed through customer support.","checkout.cancel":"Cancel","checkout.successTitle":"Order placed successfully!","checkout.successSubtitle":"Order successfully accepted","checkout.orderFailed":"Order could not be sent. Please try again.","checkout.noItems":"No selected items in cart.","checkout.invalidItems":"Cart item identifiers are invalid.","reviews.verified":"Verified purchase","reviews.helpful":"Helpful","reviews.search":"Search reviews","reviews.sortNewest":"Newest","reviews.sortRatingHigh":"Highest rating","reviews.sortRatingLow":"Lowest rating","reviews.sortHelpful":"Most helpful","reviews.allRatings":"All ratings","brand.official":"Official brand","brand.story":"Korean beauty brand","brand.popular":"Popular products","home.trendingNow":"Trending now","home.recommendedForYou":"Recommended for you","home.continueShopping":"Continue shopping","home.becauseYouViewed":"Because you viewed","footer.tagline":"Korean beauty marketplace","assistant.title":"Shopping assistant","assistant.subtitle":"Personalized product recommendations","assistant.fabLabel":"AI Assistant","assistant.placeholder":"e.g. recommend a cream for dry skin...","assistant.send":"Send","assistant.composerHint":"Enter to send · Shift+Enter for a new line","assistant.newChat":"New chat","assistant.newChatStarted":"New conversation started","assistant.openFull":"Open full page","assistant.close":"Close","assistant.emptyTitle":"Ask anything","assistant.emptyHint":"Get help choosing products, comparing options, or solving skin concerns.","assistant.thinking":"Assistant is typing...","assistant.loadingHistory":"Loading conversation...","assistant.retry":"Retry","assistant.sources":"Sources","assistant.viewProduct":"View product","assistant.addToCart":"Add to cart","assistant.inStock":"In stock","assistant.errorNetwork":"Network error. Check your connection and try again.","assistant.errorTimeout":"The request timed out. Please try again.","assistant.error400":"Invalid request. Try rephrasing your message.","assistant.error401":"Session expired. Sign in again or continue as guest.","assistant.error429":"Too many requests. Please wait and try again.","assistant.error500":"Server error. Please try again later.","assistant.error503":"Service temporarily unavailable. Please try again.","assistant.errorGeneric":"Could not get a response. Please try again."},Ti={...Pa,"header.location":"📍 Ташкент","header.pickupPoints":"Пункты выдачи","header.sell":"Стать продавцом","header.support":"Поддержка","header.orders":"Заказы","header.language":"Язык","header.catalog":"Каталог","header.searchPlaceholder":"Искать товары и категории","auth.login":"Войти","auth.register":"Регистрация","auth.continueWithGoogle":"Войти через Google","auth.or":"или","auth.email":"Email","auth.password":"Пароль","auth.confirmPassword":"Подтвердите пароль","auth.fullName":"Полное имя","auth.phone":"Телефон","auth.logout":"Выйти","auth.loginRequired":"Войдите, чтобы продолжить","auth.emailRequired":"Email обязателен.","auth.passwordMin":"Пароль должен быть не менее 6 символов.","auth.fullNameRequired":"Полное имя обязательно.","auth.phoneRequired":"Телефон обязателен.","auth.passwordMismatch":"Пароли не совпадают.","home.all":"Все","home.categories":"Категории","home.quickCategories":"Быстрые категории","home.lowPriceGuarantee":"Гарантия низких цен","home.seeAll":"Все","home.todayDeals":"Предложения дня","home.discounts":"Скидки","home.newArrivals":"Новинки","home.popular":"Популярные товары","home.recommended":"Рекомендуем вам","home.similar":"Похожие товары","home.others":"Также смотрели","home.startShopping":"Начать покупки","home.loadMore":"Загрузить еще","product.addToCart":"В корзину","product.addToCartFull":"В корзину","product.sold":"Продано: {count}","product.save":"Сохранить","product.saved":"Сохранено","product.description":"Описание","product.detailImages":"Детальные изображения","product.details":"Детали","product.reviews":"Отзывы","product.delivery":"Доставка по Узбекистану","product.secure":"Безопасная оплата","product.original":"Оригинальная корейская косметика","cart.title":"Корзина","cart.empty":"Корзина пуста","cart.checkout":"Оформить","cart.subtotal":"Итого","cart.remove":"Удалить","cart.deliveryCourier":"Доставка курьером","cart.deliveryEta":"Доставим за 3 дня","cart.selectAll":"Выбрать все ({selected}/{total})","cart.selectItem":"Выбрать товар","cart.deleteSelected":"Удалить","cart.yourOrder":"Ваш заказ","cart.goodsCount":"{count} товаров","cart.discount":"Скидка","cart.deliveryCost":"Стоимость доставки","cart.freeDelivery":"Бесплатно","cart.products":"Товар","cart.freeToHome":"Бесплатно до дома","cart.shipsToday":"Отправка сегодня","cart.emptyHint":"Добавьте понравившиеся товары — они появятся здесь.","cart.freeShippingUnlocked":"Бесплатная доставка!","cart.freeShippingRemaining":"Добавьте ещё {amount} для бесплатной доставки","cart.couponPlaceholder":"Промокод","cart.applyCoupon":"Применить","cart.savedForLater":"Сохранённые","cart.moveToCart":"В корзину","orders.title":"История заказов","orders.order":"Заказ","orders.details":"Детали заказа","orders.history":"История статуса","orders.none":"Заказов пока нет","orders.viewDetails":"Подробнее","orders.items":"{count} товаров","orders.itemsCount":"{count} товаров","orders.totalLabel":"Итого:","orders.addressLabel":"Адрес:","orders.products":"Товары","orders.emptyHint":"Здесь появятся ваши покупки.","orders.unavailable":"Не удалось загрузить заказы","orders.detailUnavailable":"Не удалось загрузить детали заказа","orders.noItems":"Товары не найдены.","orders.deliveryInfo":"Информация о доставке","orders.openOnMap":"Открыть на карте","orders.orderActions":"Действия с заказом","orders.goodsLabel":"Товары","orders.totalAmount":"Итого сумма","orders.feedback":"Обратная связь","orders.statusMessage.NEW":"Заказ принят и скоро будет подтвержден.","orders.statusMessage.CONFIRMED":"Заказ подтвержден и готовится.","orders.statusMessage.PACKED":"Заказ упакован и скоро будет отправлен.","orders.statusMessage.SHIPPED":"Заказ в пути. Пожалуйста, будьте на связи.","orders.statusMessage.DELIVERED":"Заказ доставлен. Спасибо за покупку!","orders.statusMessage.CANCELED":"Заказ отменен.","orders.statusMessage.default":"Статус заказа обновляется.","favorites.title":"Избранное","favorites.empty":"В избранном пока пусто","favorites.emptyHint":"Ваши любимые товары будут храниться здесь. Добавляйте то, что вам нравится.","favorites.browse":"К товарам","favorites.count":"{count} товаров","favorites.unavailable":"Не удалось загрузить избранное","reviews.none":"Пока нет отзывов","notifications.title":"Уведомления","profile.myProfile":"Мой профиль","profile.edit":"Редактировать профиль","profile.save":"Сохранить","profile.myOrders":"Мои заказы","profile.myReviews":"Мои отзывы","profile.tierWhite":"White","profile.ordersStat":"Заказы","profile.reviewsStat":"Отзывы","profile.couponsStat":"Купон","profile.feedbackStat":"Обратная связь","profile.seeAll":"Посмотреть все","profile.promotions":"Акции и купоны","profile.help":"Помощь и поддержка","profile.news":"Новости","profile.language":"Язык / Til / Language","profile.privacy":"Политика конфиденциальности","profile.terms":"Условия использования","profile.licenses":"Лицензии открытого ПО","profile.settings":"Настройки","profile.menu":"Меню","profile.logout":"Выйти","profile.loggedOut":"Вы вышли из аккаунта","profile.comingSoon":"Раздел скоро появится","profile.helpMessage":"Поддержка: support@beautyskin.uz","profile.fullName":"Полное имя","profile.phone":"Телефон","profile.imageUrl":"URL фото профиля","profile.loadUserFailed":"Не удалось загрузить профиль","profile.loadOrdersFailed":"Не удалось загрузить заказы","profile.loadReviewsFailed":"Не удалось загрузить отзывы","profile.loadFailed":"Не удалось загрузить данные профиля","support.title":"Служба поддержки","support.intro":"У вас есть вопросы? Мы вам поможем.","support.faqTitle":"Часто задаваемые вопросы","support.faq.delivery.q":"Когда придет мой заказ?","support.faq.delivery.a":"Заказы обычно доставляются в течение 3–5 рабочих дней. Срок доставки зависит от региона и выбранной курьерской службы. При отсутствии стихийных бедствий или других непредвиденных обстоятельств ваш заказ прибудет в установленный срок.","support.faq.cancel.q":"Как отменить заказ?","support.faq.cancel.a":"Заказ можно отменить только до момента отправки. После передачи заказа курьерской службе его отмена невозможна. Для отмены вы можете обратиться в раздел профиля или в службу поддержки.","support.faq.return.q":"Можно ли вернуть товар?","support.faq.return.a":"Возврат товара возможен только в том случае, если он не был в использовании, упаковка не повреждена и товар сохранён в полном виде. Расходы на отправку товара через карго при возврате возлагаются на клиента.","support.originalTitle":"100% оригинал и прямые поставки из Кореи","support.originalText":"Товары в нашем приложении импортируются напрямую от официальных производителей и сертифицированных дистрибьюторов в Южной Корее. Продажа подделок строго запрещена.","support.whyTitle":"Почему мы?","support.why1":"Прямой импорт из Кореи","support.why2":"Никаких подделок","support.why3":"Заводская упаковка и оригинальные пломбы","support.why4":"Каждый заказ проверяется перед отправкой","support.why5":"Выбор тысяч довольных клиентов","support.guarantee":"Если товар не оригинальный — мы вернём 100% стоимости.","support.contactTitle":"Свяжитесь с нами","support.phoneLabel":"Телефон:","support.hoursLabel":"Время работы:","support.hoursValue":"09:00 – 18:00 (Пн–Пт)","support.contactNote":"Мы ценим ваши обращения и постараемся ответить как можно быстрее.","privacy.title":"Политика конфиденциальности","privacy.updated":"Последнее обновление: 2025 г.","privacy.intro":"Мы уважаем и защищаем личные данные пользователей. Данная Политика конфиденциальности объясняет, как ваши данные собираются, используются и хранятся.","privacy.s1title":"1. Какие данные собираются","privacy.s1a":"Имя и данные профиля","privacy.s1b":"Номер телефона или email","privacy.s1c":"Данные о заказах и корзине","privacy.s1d":"Техническая информация об устройстве","privacy.s2title":"2. Использование данных","privacy.s2intro":"Собранные данные используются для следующих целей:","privacy.s2a":"Выполнение заказов","privacy.s2b":"Управление аккаунтом","privacy.s2c":"Улучшение качества сервиса","privacy.s2d":"Обеспечение безопасности","privacy.s3title":"3. Защита данных","privacy.s3text":"Мы применяем современные меры безопасности для защиты ваших личных данных от несанкционированного доступа, изменения или распространения.","privacy.s4title":"4. Сторонние сервисы","privacy.s4text":"Наше приложение может использовать сторонние сервисы для оплаты, доставки и аутентификации. У этих сервисов есть своя политика конфиденциальности.","privacy.s5title":"5. Контакты","privacy.s5text":"Если у вас есть вопросы по Политике конфиденциальности, свяжитесь с нами:","terms.title":"Пользовательское соглашение","terms.updated":"Последнее обновление: 2025 г.","terms.intro":"Используя данное мобильное приложение, вы соглашаетесь с условиями настоящего Пользовательского соглашения. Если вы не согласны с условиями, пожалуйста, не используйте приложение.","terms.s1title":"1. Общие положения","terms.s1text":"Данное приложение предназначено для онлайн-покупки косметических и других товаров. Все материалы, логотипы и контент защищены авторским правом.","terms.s2title":"2. Регистрация аккаунта","terms.s2text":"Для оформления заказов пользователь должен создать аккаунт и предоставить достоверные данные. Пользователь несет ответственность за безопасность своего аккаунта.","terms.s3title":"3. Заказы и оплата","terms.s3text":"Заказы оформляются через приложение. Цены на товары могут изменяться без предварительного уведомления. Оплата производится согласно выбранному способу.","terms.s4title":"4. Доставка","terms.s4text":"Сроки доставки зависят от региона и выбранного метода. Мы не несем ответственности за задержки, вызванные сторонними доставочными сервисами.","terms.s5title":"5. Возврат и отмена","terms.s5text":"Политика возврата и отмены заказов описана в соответствующем разделе и на странице помощи и поддержки.","terms.s6title":"6. Ограничение ответственности","terms.s6text":"Мы не несем ответственности за косвенный ущерб, связанный с использованием приложения.","terms.s7title":"7. Изменения условий","terms.s7text":"Мы оставляем за собой право изменять данное соглашение в любое время. Актуальная версия всегда доступна в приложении.","licenses.title":"Open Source Libraries & Technologies","licenses.intro":"This application is built using the following open-source technologies","licenses.frontendTitle":"Android Frontend","licenses.fe1":"Android Jetpack – набор современных библиотек Android, используемых для управления жизненным циклом, навигации, ViewBinding и архитектурных компонентов для обеспечения стабильного пользовательского интерфейса.","licenses.fe2":"Retrofit – типобезопасный HTTP-клиент для Android, используемый для эффективного взаимодействия с REST API бэкенда.","licenses.fe3":"Glide – библиотека для загрузки и кэширования изображений, оптимизированная для плавной прокрутки и эффективного использования памяти.","licenses.fe4":"Firebase Authentication – обеспечивает безопасную аутентификацию пользователей через Google и проверку номера телефона (OTP).","licenses.fe5":"Facebook Shimmer – отображает анимированные заглушки загрузки для улучшения пользовательского опыта.","licenses.backendTitle":"Backend & Server Technologies","licenses.be1":"Spring Boot – фреймворк на базе Java, используемый для создания масштабируемых RESTful API.","licenses.be2":"Spring Security + JWT – реализует аутентификацию с использованием JSON Web Tokens для защиты пользовательских сессий и эндпоинтов API.","licenses.be3":"Spring Data JPA – упрощает доступ к базе данных с использованием ORM и паттерна репозитория.","licenses.be4":"MySQL – надёжная система управления реляционными базами данных для хранения учётных записей, заказов и товаров.","licenses.be5":"Eskiz SMS API – используется для верификации номера телефона и доставки одноразовых паролей (OTP).","licenses.infraTitle":"Infrastructure & Deployment","licenses.inf1":"Docker – технология контейнеризации для упаковки приложения со всеми зависимостями для стабильного развёртывания.","licenses.inf2":"Railway Cloud – облачная платформа для развёртывания, масштабирования и мониторинга бэкенд-сервисов.","licenses.securityTitle":"Security & Data Protection","licenses.sec1":"HTTPS – вся сетевая коммуникация зашифрована с использованием HTTPS для защиты данных пользователей.","licenses.sec2":"Безопасная обработка паролей – учётные данные пользователей никогда не хранятся в открытом виде.","licenses.sec3":"Авторизация на основе токенов – все защищённые запросы требуют валидных JWT токенов.","licenses.footer":"Мы уважаем сообщество open-source и строго соблюдаем все лицензионные требования и передовые практики безопасности.","status.NEW":"Новый","status.PENDING":"Ожидает","status.CONFIRMED":"Подтвержден","status.PACKED":"Упакован","status.SHIPPED":"Отправлен","status.DELIVERED":"Доставлен","status.CANCELED":"Отменен","category.SKINCARE":"Уход за кожей","category.MAKEUP":"Макияж","category.COLLAGEN":"Коллаген","category.HAIR_CARE":"Уход за волосами","category.FRAGRANCE":"Парфюм","category.TOP":"Верх","category.OUTER":"Верхняя одежда","category.PANTS":"Брюки","category.SHOES":"Обувь","category.BAG":"Сумки","category.ACCESSORY":"Аксессуары","home.todayOnly":"Только сегодня","checkout.title":"Оформление заказа","checkout.deliveryTitle":"Доставка","checkout.deliveryEta":"Заказ будет доставлен в течение 3–5 рабочих дней","checkout.addressNotSelected":"Адрес не выбран","checkout.selectAddress":"Выбрать адрес","checkout.receiverNotSelected":"Получатель не выбран","checkout.receiver":"Получатель","checkout.paymentMethod":"Способ оплаты","checkout.paymentCod":"Оплата при получении","checkout.paymentCodHint":"Оплата производится только наличными или переводом на банковскую карту","checkout.deliveryInfo":"Заказ будет доставлен курьером по адресу. Просим вас быть на связи во время доставки.","checkout.couponTitle":"Купон на скидку","checkout.applyCoupon":"Применить купон","checkout.yourOrder":"Ваш заказ","checkout.deliveryFee":"Доставка","checkout.totalToPay":"Итого к оплате","checkout.confirm":"Подтвердить","checkout.legalNotice":"Подтверждая заказ, вы соглашаетесь с Условиями использования и Политикой конфиденциальности.","checkout.deliveryOn":"Доставка {dates}","checkout.itemsCount":"{count} товаров","checkout.addressRequired":"Выберите адрес","checkout.receiverRequired":"Выберите получателя","checkout.back":"Назад","checkout.placing":"Оформление...","checkout.orderCreated":"Заказ создан","checkout.continueShopping":"Продолжить покупки","checkout.viewOrders":"Мои заказы","checkout.confirmTitle":"Подтверждение заказа","checkout.confirmQuestion":"Вы хотите отправить заказ?","checkout.confirmName":"Имя: {name}","checkout.confirmAddress":"Адреса: {address}","checkout.confirmDisclaimer":"После подтверждения изменить заказ можно только через службу поддержки.","checkout.cancel":"Отмена","checkout.successTitle":"Заказ успешно оформлен!","checkout.successSubtitle":"Заказ успешно принят","checkout.orderFailed":"Не удалось отправить заказ. Попробуйте снова.","checkout.noItems":"В корзине нет выбранных товаров.","checkout.invalidItems":"Некорректные идентификаторы товаров в корзине.","orders.refresh":"Обновить","reviews.my":"Мои отзывы","reviews.write":"Написать отзыв","reviews.submit":"Отправить отзыв","hero.eyebrow":"Лучшие предложения дня","hero.title":"Корейская косметика","hero.subtitle":"Быстрая доставка по Узбекистану — косметика, уход, парфюм и аксессуары.","hero.viewProducts":"Смотреть товары","hero.fastDelivery":"Быстрая доставка","hero.fastDeliverySub":"По всему Узбекистану","home.history":"История","home.recentlyViewed":"Недавно просмотренные","api.title":"Настройки API","api.save":"Сохранить","footer.tagline":"Маркетплейс корейской красоты","assistant.title":"Помощник по покупкам","assistant.subtitle":"Персональные рекомендации товаров","assistant.fabLabel":"AI-помощник","assistant.placeholder":"Например: посоветуй крем для сухой кожи...","assistant.send":"Отправить","assistant.composerHint":"Enter — отправить · Shift+Enter — новая строка","assistant.newChat":"Новый чат","assistant.newChatStarted":"Новый диалог начат","assistant.openFull":"Открыть полностью","assistant.close":"Закрыть","assistant.emptyTitle":"Задайте вопрос","assistant.emptyHint":"Поможем выбрать товары, сравнить варианты или решить вопросы по уходу за кожей.","assistant.thinking":"Помощник печатает...","assistant.loadingHistory":"Загрузка диалога...","assistant.retry":"Повторить","assistant.sources":"Источники","assistant.viewProduct":"Смотреть","assistant.addToCart":"В корзину","assistant.inStock":"В наличии","assistant.errorNetwork":"Ошибка сети. Проверьте подключение и попробуйте снова.","assistant.errorTimeout":"Время ожидания истекло. Попробуйте снова.","assistant.error400":"Некорректный запрос. Переформулируйте сообщение.","assistant.error401":"Сессия истекла. Войдите снова или продолжите как гость.","assistant.error429":"Слишком много запросов. Подождите и попробуйте снова.","assistant.error500":"Ошибка сервера. Попробуйте позже.","assistant.error503":"Сервис временно недоступен. Попробуйте снова.","assistant.errorGeneric":"Не удалось получить ответ. Попробуйте снова."},Di={...Pa,"header.location":"📍 타슈켄트","header.pickupPoints":"픽업 지점","header.sell":"판매자 되기","header.support":"고객 지원","header.orders":"주문","header.language":"언어","header.catalog":"카탈로그","header.searchPlaceholder":"상품 및 카테고리 검색","auth.login":"로그인","auth.register":"회원가입","auth.continueWithGoogle":"Google로 로그인","auth.or":"또는","auth.email":"이메일","auth.password":"비밀번호","auth.confirmPassword":"비밀번호 확인","auth.fullName":"이름","auth.phone":"전화번호","auth.logout":"로그아웃","auth.loginRequired":"계속하려면 로그인하세요","auth.emailRequired":"이메일은 필수입니다.","auth.passwordMin":"비밀번호는 6자 이상이어야 합니다.","auth.fullNameRequired":"이름은 필수입니다.","auth.phoneRequired":"전화번호는 필수입니다.","auth.passwordMismatch":"비밀번호가 일치하지 않습니다.","home.all":"전체","home.categories":"카테고리","home.quickCategories":"빠른 카테고리","home.lowPriceGuarantee":"최저가 보장","home.seeAll":"전체","home.quickCategories":"빠른 카테고리","home.todayDeals":"오늘의 특가","home.discounts":"할인","home.newArrivals":"신상품","home.popular":"인기 상품","home.recommended":"추천 상품","home.similar":"비슷한 상품","home.others":"함께 본 상품","home.startShopping":"쇼핑 시작","home.loadMore":"더 보기","product.addToCart":"장바구니","product.addToCartFull":"장바구니 담기","product.sold":"{count}개 판매","product.save":"저장","product.saved":"저장됨","product.description":"설명","product.detailImages":"상세 이미지","product.details":"상세 정보","product.reviews":"리뷰","product.delivery":"우즈베키스탄 전역 배송","product.secure":"안전한 결제","product.original":"정품 한국 제품","cart.title":"장바구니","cart.empty":"장바구니가 비어 있습니다","cart.checkout":"결제","cart.deliveryCourier":"택배 배송","cart.deliveryEta":"3일 내 배송","cart.selectAll":"전체 선택 ({selected}/{total})","cart.selectItem":"상품 선택","cart.deleteSelected":"삭제","cart.yourOrder":"주문 내역","cart.goodsCount":"상품 {count}개","cart.discount":"할인","cart.deliveryCost":"배송비","cart.freeDelivery":"무료","cart.products":"상품","cart.freeToHome":"무료 홈 배송","cart.shipsToday":"오늘 발송","cart.emptyHint":"마음에 드는 상품을 추가하면 여기에 표시됩니다.","orders.title":"주문 내역","orders.order":"주문","orders.details":"주문 상세","orders.history":"상태 기록","orders.none":"주문이 없습니다","orders.viewDetails":"자세히","orders.items":"상품 {count}개","orders.itemsCount":"상품 {count}개","orders.totalLabel":"합계:","orders.addressLabel":"주소:","orders.products":"상품","orders.emptyHint":"구매한 주문이 여기에 표시됩니다.","orders.unavailable":"주문을 불러올 수 없습니다","orders.detailUnavailable":"주문 상세를 불러올 수 없습니다","orders.noItems":"상품을 찾을 수 없습니다.","orders.deliveryInfo":"배송 정보","orders.openOnMap":"지도에서 열기","orders.orderActions":"주문 작업","orders.goodsLabel":"상품","orders.totalAmount":"총 금액","orders.feedback":"피드백","orders.statusMessage.NEW":"주문이 접수되었으며 곧 확인됩니다.","orders.statusMessage.CONFIRMED":"주문이 확인되어 준비 중입니다.","orders.statusMessage.PACKED":"주문이 포장되어 곧 발송됩니다.","orders.statusMessage.SHIPPED":"주문이 배송 중입니다. 연락 가능하도록 해 주세요.","orders.statusMessage.DELIVERED":"주문이 배송되었습니다. 구매해 주셔서 감사합니다!","orders.statusMessage.CANCELED":"주문이 취소되었습니다.","orders.statusMessage.default":"주문 상태가 업데이트되고 있습니다.","favorites.title":"찜","favorites.empty":"찜한 상품이 없습니다","favorites.emptyHint":"좋아하는 상품이 여기에 저장됩니다. 마음에 드는 상품을 추가하세요.","favorites.browse":"상품 보기","favorites.count":"상품 {count}개","favorites.unavailable":"찜 목록을 불러올 수 없습니다","reviews.none":"아직 리뷰가 없습니다","notifications.title":"알림","status.NEW":"신규","status.CONFIRMED":"확인됨","status.PACKED":"포장됨","status.SHIPPED":"배송 중","status.DELIVERED":"배송 완료","status.CANCELED":"취소됨","category.SKINCARE":"스킨케어","category.MAKEUP":"메이크업","category.COLLAGEN":"콜라겐","category.HAIR_CARE":"헤어 케어","category.FRAGRANCE":"향수","category.TOP":"상의","category.OUTER":"아우터","category.PANTS":"바지","category.SHOES":"신발","category.BAG":"가방","category.ACCESSORY":"액세서리","home.todayOnly":"오늘 한정","checkout.title":"주문하기","checkout.deliveryTitle":"배송","checkout.deliveryEta":"주문은 3–5 영업일 내에 배송됩니다","checkout.addressNotSelected":"주소가 선택되지 않음","checkout.selectAddress":"주소 선택","checkout.receiverNotSelected":"수령인이 선택되지 않음","checkout.receiver":"수령인","checkout.paymentMethod":"결제 방법","checkout.paymentCod":"착불 결제","checkout.paymentCodHint":"현금 또는 계좌 이체로만 결제할 수 있습니다","checkout.deliveryInfo":"주문은 주소로 택배 배송됩니다. 배송 중 연락 가능하도록 해 주세요.","checkout.couponTitle":"할인 쿠폰","checkout.applyCoupon":"쿠폰 적용","checkout.yourOrder":"주문 내역","checkout.deliveryFee":"배송비","checkout.totalToPay":"결제 금액","checkout.confirm":"확인","checkout.legalNotice":"주문을 확인하면 이용 약관 및 개인정보 처리방침에 동의하게 됩니다.","checkout.deliveryOn":"배송 {dates}","checkout.itemsCount":"상품 {count}개","checkout.addressRequired":"주소를 선택해 주세요","checkout.receiverRequired":"수령인을 선택해 주세요","checkout.back":"뒤로","checkout.placing":"주문 중...","checkout.orderCreated":"주문이 완료되었습니다","checkout.continueShopping":"쇼핑 계속하기","checkout.viewOrders":"주문 내역 보기","checkout.confirmTitle":"주문 확인","checkout.confirmQuestion":"주문을 보내시겠습니까?","checkout.confirmName":"이름: {name}","checkout.confirmAddress":"주소: {address}","checkout.confirmDisclaimer":"확인 후에는 고객 지원을 통해서만 주문을 변경할 수 있습니다.","checkout.cancel":"취소","checkout.successTitle":"주문이 완료되었습니다!","checkout.successSubtitle":"주문이 성공적으로 접수되었습니다","checkout.orderFailed":"주문을 보낼 수 없습니다. 다시 시도해 주세요.","checkout.noItems":"장바구니에 선택된 상품이 없습니다.","checkout.invalidItems":"장바구니 상품 ID가 올바르지 않습니다.","orders.refresh":"새로고침","reviews.my":"내 리뷰","reviews.write":"리뷰 작성","reviews.submit":"리뷰 제출","hero.eyebrow":"오늘의 베스트 특가","hero.title":"한국 뷰티 제품","hero.subtitle":"우즈베키스탄 전역 빠른 배송 — 화장품, 스킨케어, 향수, 액세서리.","hero.viewProducts":"상품 보기","hero.fastDelivery":"빠른 배송","hero.fastDeliverySub":"우즈베키스탄 전역","home.history":"기록","home.recentlyViewed":"최근 본 상품","profile.myProfile":"내 프로필","profile.edit":"프로필 수정","profile.save":"저장","profile.myOrders":"내 주문","profile.myReviews":"내 리뷰","profile.tierWhite":"White","profile.ordersStat":"주문","profile.reviewsStat":"리뷰","profile.couponsStat":"쿠폰","profile.feedbackStat":"피드백","profile.seeAll":"전체 보기","profile.promotions":"프로모션 및 쿠폰","profile.help":"도움말 및 지원","profile.news":"뉴스","profile.language":"언어 / Til / Language","profile.privacy":"개인정보 처리방침","profile.terms":"이용 약관","profile.licenses":"오픈소스 라이선스","profile.settings":"설정","profile.menu":"메뉴","profile.logout":"로그아웃","profile.loggedOut":"로그아웃되었습니다","profile.comingSoon":"곧 제공될 예정입니다","profile.helpMessage":"지원: support@beautyskin.uz","profile.fullName":"이름","profile.phone":"전화번호","profile.imageUrl":"프로필 이미지 URL","profile.loadUserFailed":"프로필을 불러오지 못했습니다","profile.loadOrdersFailed":"주문을 불러오지 못했습니다","profile.loadReviewsFailed":"리뷰를 불러오지 못했습니다","profile.loadFailed":"프로필 데이터를 불러오지 못했습니다","support.title":"고객 지원 센터","support.intro":"궁금한 점이 있으신가요? 저희가 도와드리겠습니다.","support.faqTitle":"자주 묻는 질문","support.faq.delivery.q":"주문한 상품은 언제 도착하나요?","support.faq.delivery.a":"주문은 보통 영업일 기준 3~5일 이내에 배송됩니다. 배송 기간은 지역과 선택한 택배 서비스에 따라 달라집니다. 자연재해나 기타 예기치 못한 상황이 없는 한 주문하신 상품은 예정된 기간 내에 도착합니다.","support.faq.cancel.q":"주문을 어떻게 취소하나요?","support.faq.cancel.a":"주문은 발송 전에만 취소할 수 있습니다. 주문이 택배 서비스로 전달된 후에는 취소가 불가능합니다. 취소하려면 프로필 섹션이나 고객 지원을 통해 문의하시면 됩니다.","support.faq.return.q":"상품을 반품할 수 있나요?","support.faq.return.a":"상품은 사용하지 않았고 포장이 손상되지 않았으며 온전한 상태로 보관된 경우에만 반품이 가능합니다. 반품 시 택배를 통한 상품 발송 비용은 고객이 부담합니다.","support.originalTitle":"100% 정품 및 한국 직배송","support.originalText":"저희 앱의 상품은 대한민국의 공식 제조사와 인증된 유통업체로부터 직접 수입됩니다. 위조품 판매는 엄격히 금지되어 있습니다.","support.whyTitle":"왜 저희인가요?","support.why1":"한국 직수입","support.why2":"위조품 없음","support.why3":"공장 포장 및 정품 봉인","support.why4":"모든 주문은 발송 전 검수","support.why5":"수천 명의 만족한 고객이 선택","support.guarantee":"상품이 정품이 아닐 경우 — 전액 100% 환불해 드립니다.","support.contactTitle":"문의하기","support.phoneLabel":"전화:","support.hoursLabel":"운영 시간:","support.hoursValue":"09:00 – 18:00 (월–금)","support.contactNote":"여러분의 문의를 소중히 여기며 최대한 빠르게 답변드리겠습니다.","privacy.title":"개인정보 처리방침","privacy.updated":"최종 업데이트: 2025년","privacy.intro":"저희는 사용자의 개인정보를 존중하고 보호합니다. 본 개인정보 처리방침은 귀하의 데이터가 어떻게 수집, 사용, 저장되는지 설명합니다.","privacy.s1title":"1. 수집하는 데이터","privacy.s1a":"이름 및 프로필 정보","privacy.s1b":"전화번호 또는 이메일","privacy.s1c":"주문 및 장바구니 데이터","privacy.s1d":"기기 기술 정보","privacy.s2title":"2. 데이터 사용","privacy.s2intro":"수집된 데이터는 다음 목적으로 사용됩니다:","privacy.s2a":"주문 처리","privacy.s2b":"계정 관리","privacy.s2c":"서비스 품질 개선","privacy.s2d":"보안 유지","privacy.s3title":"3. 데이터 보호","privacy.s3text":"저희는 귀하의 개인정보를 무단 접근, 변경 또는 유포로부터 보호하기 위해 최신 보안 조치를 적용합니다.","privacy.s4title":"4. 제3자 서비스","privacy.s4text":"저희 앱은 결제, 배송 및 인증을 위해 제3자 서비스를 사용할 수 있습니다. 이러한 서비스에는 자체 개인정보 처리방침이 있습니다.","privacy.s5title":"5. 연락처","privacy.s5text":"개인정보 처리방침에 대해 궁금한 점이 있으시면 저희에게 연락해 주세요:","terms.title":"이용약관","terms.updated":"최종 업데이트: 2025년","terms.intro":"본 모바일 애플리케이션을 사용함으로써 귀하는 본 이용약관에 동의하게 됩니다. 약관에 동의하지 않으시면 앱을 사용하지 마십시오.","terms.s1title":"1. 일반 조항","terms.s1text":"본 앱은 화장품 및 기타 상품의 온라인 구매를 위해 제공됩니다. 모든 자료, 로고 및 콘텐츠는 저작권으로 보호됩니다.","terms.s2title":"2. 계정 등록","terms.s2text":"주문을 하려면 사용자는 계정을 생성하고 정확한 정보를 제공해야 합니다. 사용자는 자신의 계정 보안에 대한 책임이 있습니다.","terms.s3title":"3. 주문 및 결제","terms.s3text":"주문은 앱을 통해 이루어집니다. 상품 가격은 사전 통지 없이 변경될 수 있습니다. 결제는 선택한 방법에 따라 진행됩니다.","terms.s4title":"4. 배송","terms.s4text":"배송 기간은 지역 및 선택한 방법에 따라 달라집니다. 제3자 배송 서비스로 인한 지연에 대해서는 책임지지 않습니다.","terms.s5title":"5. 반품 및 취소","terms.s5text":"반품 및 주문 취소 정책은 해당 섹션 및 도움말 및 지원 페이지에 설명되어 있습니다.","terms.s6title":"6. 책임 제한","terms.s6text":"앱 사용과 관련된 간접적 손해에 대해서는 책임지지 않습니다.","terms.s7title":"7. 약관 변경","terms.s7text":"저희는 언제든지 본 약관을 변경할 권리를 보유합니다. 최신 버전은 항상 앱에서 확인할 수 있습니다.","licenses.title":"Open Source Libraries & Technologies","licenses.intro":"이 애플리케이션은 다음 오픈소스 기술을 사용하여 제작되었습니다","licenses.frontendTitle":"Android Frontend","licenses.fe1":"Android Jetpack – 라이프사이클 관리, 내비게이션, ViewBinding 및 아키텍처 구성 요소에 사용되는 최신 Android 라이브러리 모음으로 안정적인 사용자 인터페이스를 보장합니다.","licenses.fe2":"Retrofit – 백엔드 REST API와 효율적으로 통신하기 위해 사용되는 Android용 타입 안전 HTTP 클라이언트입니다.","licenses.fe3":"Glide – 부드러운 스크롤과 효율적인 메모리 사용에 최적화된 이미지 로딩 및 캐싱 라이브러리입니다.","licenses.fe4":"Firebase Authentication – Google을 통한 안전한 사용자 인증과 전화번호 확인(OTP)을 제공합니다.","licenses.fe5":"Facebook Shimmer – 사용자 경험 향상을 위해 애니메이션 로딩 플레이스홀더를 표시합니다.","licenses.backendTitle":"Backend & Server Technologies","licenses.be1":"Spring Boot – 확장 가능한 RESTful API를 구축하는 데 사용되는 Java 기반 프레임워크입니다.","licenses.be2":"Spring Security + JWT – 사용자 세션과 API 엔드포인트를 보호하기 위해 JSON Web Tokens를 사용한 인증을 구현합니다.","licenses.be3":"Spring Data JPA – ORM 및 리포지토리 패턴을 사용하여 데이터베이스 접근을 단순화합니다.","licenses.be4":"MySQL – 계정, 주문 및 상품을 저장하기 위한 안정적인 관계형 데이터베이스 관리 시스템입니다.","licenses.be5":"Eskiz SMS API – 전화번호 인증 및 일회용 비밀번호(OTP) 전달에 사용됩니다.","licenses.infraTitle":"Infrastructure & Deployment","licenses.inf1":"Docker – 안정적인 배포를 위해 모든 종속성과 함께 애플리케이션을 패키징하는 컨테이너화 기술입니다.","licenses.inf2":"Railway Cloud – 백엔드 서비스를 배포, 확장 및 모니터링하기 위한 클라우드 플랫폼입니다.","licenses.securityTitle":"Security & Data Protection","licenses.sec1":"HTTPS – 사용자 데이터를 보호하기 위해 모든 네트워크 통신이 HTTPS로 암호화됩니다.","licenses.sec2":"안전한 비밀번호 처리 – 사용자 자격 증명은 절대 평문으로 저장되지 않습니다.","licenses.sec3":"토큰 기반 인증 – 모든 보호된 요청은 유효한 JWT 토큰을 요구합니다.","licenses.footer":"저희는 오픈소스 커뮤니티를 존중하며 모든 라이선스 요구 사항과 보안 모범 사례를 엄격히 준수합니다.","status.PENDING":"대기 중","api.title":"API 설정","api.save":"저장","footer.tagline":"한국 뷰티 마켓플레이스","assistant.title":"쇼핑 어시스턴트","assistant.subtitle":"맞춤 제품 추천","assistant.fabLabel":"AI 어시스턴트","assistant.placeholder":"예: 건성 피부에 맞는 크림 추천해 줘...","assistant.send":"보내기","assistant.composerHint":"Enter — 전송 · Shift+Enter — 줄바꿈","assistant.newChat":"새 채팅","assistant.newChatStarted":"새 대화를 시작했습니다","assistant.openFull":"전체 화면","assistant.close":"닫기","assistant.emptyTitle":"무엇이든 물어보세요","assistant.emptyHint":"제품 선택, 비교, 피부 고민에 대해 도움을 드립니다.","assistant.thinking":"답변 작성 중...","assistant.loadingHistory":"대화 불러오는 중...","assistant.retry":"다시 시도","assistant.sources":"출처","assistant.viewProduct":"상품 보기","assistant.addToCart":"장바구니","assistant.inStock":"재고 있음","assistant.errorNetwork":"네트워크 오류입니다. 연결을 확인하고 다시 시도하세요.","assistant.errorTimeout":"요청 시간이 초과되었습니다. 다시 시도하세요.","assistant.error400":"잘못된 요청입니다. 메시지를 바꿔 보세요.","assistant.error401":"세션이 만료되었습니다. 다시 로그인하거나 게스트로 계속하세요.","assistant.error429":"요청이 너무 많습니다. 잠시 후 다시 시도하세요.","assistant.error500":"서버 오류입니다. 나중에 다시 시도하세요.","assistant.error503":"서비스를 일시적으로 사용할 수 없습니다. 다시 시도하세요.","assistant.errorGeneric":"응답을 받지 못했습니다. 다시 시도하세요."},ht={uz:kr,en:Pa,ru:Ti,ko:Di};let Ct=Ri();function Ri(){const e=localStorage.getItem(C.storageKeys.language);return $a.includes(e)?e:bt}function ge(){return Ct}function n(e,t={}){var c;const a=ht[Ct]||ht[bt],r=ht.en||ht[bt],i=(a==null?void 0:a[e])??(r==null?void 0:r[e])??((c=ht[bt])==null?void 0:c[e])??e;return String(i).replace(/\{(\w+)\}/g,(d,u)=>t[u]??"")}let Sr=()=>{};function Mi(e){Sr=e}function Cr(e){const t=$a.includes(e)?e:bt;Ct=t,localStorage.setItem(C.storageKeys.language,t),Sr()}function Aa(e){var a;document.documentElement.lang=Ct,document.title=(e==null?void 0:e.currentRoute)==="product"&&((a=e==null?void 0:e.selectedDetailProduct)!=null&&a.name)?`${e.selectedDetailProduct.name} - BEAUTY SKIN KOREA`:"BEAUTY SKIN KOREA";const t=document.getElementById("languageSelect");t&&(t.value=Ct),document.querySelectorAll("[data-i18n]").forEach(r=>{r.textContent=n(r.dataset.i18n)}),document.querySelectorAll("[data-i18n-placeholder]").forEach(r=>{r.setAttribute("placeholder",n(r.dataset.i18nPlaceholder))}),document.querySelectorAll("[data-i18n-title]").forEach(r=>{r.setAttribute("title",n(r.dataset.i18nTitle))}),document.querySelectorAll("[data-i18n-aria-label]").forEach(r=>{r.setAttribute("aria-label",n(r.dataset.i18nAriaLabel))})}const Zt=e=>E("/api/products",{query:e,showError:!1}),qi=e=>E(`/api/products/${e}`),_a=(e,t)=>E("/api/products/category",{query:{category:e,...t},showError:!1}),ca=(e,t)=>E("/api/products/search",{query:{q:e,...t},showError:!1}),Bi=()=>E("/api/products/today-deals",{showError:!1}),Oi=e=>E("/api/products/by-ids",{method:"POST",body:JSON.stringify(e),showError:!1}),xi=e=>E("/api/home",{query:e,showError:!1}),Ni=e=>E("/api/home/feed",{query:e,showError:!1}),Fi=(e,t)=>E(`/api/products/${e}/recommend`,{query:t,showError:!1});C.defaultPageSize;const zi=()=>E("/api/categories",{showError:!1}),Ui=()=>E("/api/banners",{showError:!1}),Hi=()=>E("/api/announcements",{showError:!1});function S(e){const t=Number(e);return Number.isFinite(t)?t:0}function _t(e){return e?typeof e=="string"?e:e.imageUrl||e.url||"":""}function xt(e){return Array.isArray(e)?e.map(t=>_t(t)).filter(Boolean):[]}function x(e){return Array.isArray(e==null?void 0:e.content)?e.content:Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray(e)?e:[]}function K(e={}){const t=Array.isArray(e.variants)?e.variants:[],a=t.find(m=>Number(m.stock||0)>0)||t[0]||null,r=xt(e.images),i=xt(e.detailImages),c=_t(e.mainImageUrl)||r[0]||e.imageUrl||C.placeholderImage,d=S(e.price??(a==null?void 0:a.price)),u=S((a==null?void 0:a.discountPrice)??e.discountPrice??e.price),p=d>u&&d>0?Math.round((d-u)/d*100):0;return{id:e.id,name:e.name||"Mahsulot",description:e.description||"",brand:e.brand||"",category:e.category||"",image:c,images:r.length?r:[c],detailImages:i,price:S(e.price),originalPrice:d,discountPrice:S(e.discountPrice),finalPrice:u,discountPercent:p,stock:S(e.stock),ratingAvg:S(e.ratingAvg),reviewCount:S(e.reviewCount),soldCount:S(e.soldCount),todayDeal:!!e.todayDeal,favorite:!!e.favorite,variants:t,raw:e}}function _i(e={}){var c,d,u,p;const t=K(e.product||((c=e.variant)==null?void 0:c.product)||e),a=S(e.quantity)||1,r=S(e.unitPrice||t.finalPrice),i=S(e.lineTotal||r*a);return{id:e.id||e.cartItemId,productId:t.id,product:t,image:_t(e.image||e.imageUrl||e.mainImageUrl)||t.image,name:t.name,brand:t.brand,variantId:e.variantId||((d=e.variant)==null?void 0:d.id),variantLabel:e.variantLabel||((u=e.variant)==null?void 0:u.label)||"",unitPrice:r,lineTotal:i,quantity:a,stock:S(e.stock??((p=e.variant)==null?void 0:p.stock)??t.stock)}}function Vi(e={}){const t=e.product||e,a=K(t);if(a.id===void 0||a.id===null){const r=t.productId??e.productId;r!=null&&(a.id=r)}return a.favorite=!0,a}function ji(e){return typeof e=="string"?e:(e==null?void 0:e.code)||(e==null?void 0:e.name)||(e==null?void 0:e.title)||""}function Ia(e={}){var r,i;const t=e.product||{},a=_t(e.mainImageUrl||t.mainImageUrl);return{id:e.id||e.orderItemId,productId:e.productId||t.id||((r=e.product)==null?void 0:r.id),orderId:e.orderId,name:e.productName||e.name||t.name||"Product",image:e.imageUrl||a||t.imageUrl||xt(t.images)[0]||C.placeholderImage,variantLabel:e.variantLabel||((i=e.variant)==null?void 0:i.label)||"",quantity:S(e.quantity)||1,unitPrice:S(e.unitPrice||e.price||t.discountPrice||t.price),lineTotal:S(e.lineTotal||e.total||e.price||0)}}function $r(e={}){var t,a,r,i,c,d;return{id:e.id||e.reviewId||`${e.productId||"product"}-${e.orderId||"order"}-${e.createdAt||""}`,productId:e.productId||((t=e.product)==null?void 0:t.id)||((a=e.orderItem)==null?void 0:a.productId),orderId:e.orderId||((r=e.order)==null?void 0:r.id)||((i=e.orderItem)==null?void 0:i.orderId),rating:Math.min(5,Math.max(0,S(e.rating))),content:e.content||e.reviewContent||e.comment||"",imageUrls:Array.isArray(e.imageUrls)?e.imageUrls.filter(Boolean):xt(e.images),createdAt:e.createdAt||e.createdDate||e.reviewedAt||"",userName:e.userName||e.fullName||((c=e.user)==null?void 0:c.fullName)||((d=e.user)==null?void 0:d.name)||"Customer"}}function Ki(e={}){return{id:e.id||e.notificationId,title:e.title||e.subject||"Notification",message:e.message||e.content||"",type:String(e.type||"SYSTEM").toUpperCase(),read:!!(e.read??e.isRead),createdAt:e.createdAt||e.createdDate||"",refId:e.refId||e.referenceId||e.orderId||null,raw:e}}function Gi(e=""){const t=String(e||"SYSTEM").toUpperCase();return n(`notification.${t}`)}function Wi(e){return typeof e=="number"?Math.max(0,e):typeof e=="string"&&e.trim()!==""?Math.max(0,Number(e)||0):typeof(e==null?void 0:e.data)=="number"?Math.max(0,e.data):typeof(e==null?void 0:e.count)=="number"?Math.max(0,e.count):typeof(e==null?void 0:e.unreadCount)=="number"?Math.max(0,e.unreadCount):0}function Yi(e){var t;return Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray((t=e==null?void 0:e.data)==null?void 0:t.content)?e.data.content:Array.isArray(e==null?void 0:e.content)?e.content:Array.isArray(e)?e:[]}function Qi(e={}){var p,m,h;const t=e.review||e.reviewResponse||(e.rating||e.content?e:null),a=K(e.product||e.productCard||e.productResponse||e),r=t?$r({...t,productId:t.productId||a.id,orderId:t.orderId||e.orderId}):null,i=e.productId||(r==null?void 0:r.productId)||a.id,c=e.orderId||((p=e.order)==null?void 0:p.id)||((m=e.orderResponse)==null?void 0:m.id)||(r==null?void 0:r.orderId),d=e.status||e.orderStatus||((h=e.order)==null?void 0:h.status)||"",u=!!(r!=null&&r.content||r!=null&&r.rating);return{id:e.id||e.orderItemId||(r==null?void 0:r.id)||`${i||"product"}-${c||"order"}`,productId:i,orderId:c,product:a,image:a.image||e.imageUrl||C.placeholderImage,name:e.productName||e.name||(a.name&&a.name!=="Mahsulot"?a.name:`Product #${i||"-"}`),brand:a.brand||e.brand||"",status:d,review:r,hasReview:u,reviewable:!!(i&&c&&!u),raw:e}}function Ji(e){var t,a,r,i;return Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray((t=e==null?void 0:e.data)==null?void 0:t.content)?e.data.content:Array.isArray((a=e==null?void 0:e.data)==null?void 0:a.items)?e.data.items:Array.isArray((r=e==null?void 0:e.data)==null?void 0:r.reviews)?e.data.reviews:Array.isArray((i=e==null?void 0:e.data)==null?void 0:i.reviewableItems)?e.data.reviewableItems:Array.isArray(e==null?void 0:e.reviews)?e.reviews:Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e==null?void 0:e.reviewableItems)?e.reviewableItems:Array.isArray(e==null?void 0:e.content)?e.content:Array.isArray(e)?e:[]}function fe(e){if(!e)return"";const t=`category.${e}`,a=n(t);return a!==t?a:wr[e]||e.toLowerCase().split("_").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(" ")}const ce={async loadProducts({page:e=0,size:t=C.defaultPageSize}={}){const a=await Zt({page:e,size:t});return a===null?{products:[],demoProducts:!1,failed:!0}:{products:x(a).map(K),demoProducts:!1,failed:!1}},async loadMoreProducts({feedPage:e,existingProducts:t}){let a=[];const r=await Ni({limit:30});a=x(r).map(K);let i=e;if(!a.length){i+=1;const u=await Zt({page:i,size:C.defaultPageSize});a=x(u).map(K)}const c=new Set(t.map(u=>String(u.id))),d=a.filter(u=>u.id&&!c.has(String(u.id)));return{products:[...t,...d],nextProducts:d,nextFeedPage:i}},async loadTodayDeals(){const e=await Bi();return e===null?{deals:[],demoDeals:!1,failed:!0}:{deals:x(e).map(K),demoDeals:!1,failed:!1}},async loadProduct(e,t=null){const a=await qi(e);return K(a||t||{})},async loadProductsByIds(e){const t=e.map(Number).filter(Number.isFinite);if(!t.length)return[];const a=await Oi(t);return x(a).map(K).filter(r=>r.id)},async search(e,t={}){const a=await ca(e,{page:0,size:C.defaultPageSize,...t});return a===null?[]:x(a).map(K)},async loadByCategory(e,t={}){const a=await _a(e,{page:0,size:C.defaultPageSize,...t});return a===null?[]:x(a).map(K)},async loadBrandProducts(e,t,a){const r=t.length?t.filter(c=>c.brand===e):a.filter(c=>c.brand===e);if(r.length)return r;const i=await ca(e,{page:0,size:24});return x(i).map(K).filter(c=>c.brand===e)},async loadRecommendations(e,t){const a=await Fi(e.id,{similar:12,others:24,seed:t}),r=x((a==null?void 0:a.similar)||[]).map(K).filter(u=>String(u.id)!==String(e.id)),i=x((a==null?void 0:a.others)||[]).map(K).filter(u=>String(u.id)!==String(e.id));if(r.length||i.length)return{mode:"api",similar:r.slice(0,12),others:i.slice(0,12),fallback:[],failed:!1};let c=null;e.category&&(c=await _a(e.category,{page:0,size:12}));let d=x(c).map(K).filter(u=>String(u.id)!==String(e.id));return d.length||(c=await Zt({page:0,size:12}),d=x(c).map(K).filter(u=>String(u.id)!==String(e.id))),{mode:"fallback",similar:[],others:[],fallback:d.slice(0,12),failed:!d.length&&c===null}},pickDefaultVariant(e){var t,a;return((t=e.variants)==null?void 0:t.find(r=>Number(r.stock||0)>0))||((a=e.variants)==null?void 0:a[0])||null},async resolveAddToCartVariant(e,t){var i;if(t)return{variantId:t,navigateToProduct:!1};const a=await this.loadProduct(e),r=a.variants.filter(c=>Number(c.stock||0)>0);return r.length===1?{variantId:r[0].id,navigateToProduct:!1,product:a}:a.variants.length>1?{variantId:null,navigateToProduct:!0,product:a}:{variantId:((i=this.pickDefaultVariant(a))==null?void 0:i.id)||null,navigateToProduct:!1,product:a}}},Zi=["SKINCARE","MAKEUP","COLLAGEN","HAIR_CARE","FRAGRANCE"];function Xi(e,t,a){return(e==null?void 0:e.id)!==void 0&&a.findIndex(r=>String(r.id)===String(e.id))===t}const de={async loadHomeApiData(e={limit:10,page:0,size:20}){const t=await xi(e);if(t===null)return{loaded:!1};const a=x(t.hits||[]).map(K),r=x(t.discounts||[]).map(K),i=x(t.newArrivals||[]).map(K),c=x(t.popular).map(K);if(!(a.length||r.length||i.length||c.length))return{loaded:!1};const u=c.length?c:[...a,...r,...i].filter(Xi);return{loaded:!0,hits:a,discounts:r,newArrivals:i,products:u,todayDeals:r,homeApiSections:{hits:a,discounts:r,newArrivals:i}}},async loadCategories(){const e=await zi(),t=x(e).map(ji).filter(Boolean);return t.length?{categories:t,demoCategories:!1}:{categories:Zi,demoCategories:!1}},async loadBanners(){const e=await Ui();return x(e).map(t=>({id:t.id,title:t.title||"",subtitle:t.subtitle||"",imageUrl:t.imageUrl||"",linkType:String(t.linkType||"NONE").toUpperCase(),linkId:t.linkId,position:S(t.position)})).sort((t,a)=>t.position-a.position)},async loadAnnouncements(){const e=await Hi();return x(e).map(t=>({title:t.title||"",message:t.content||t.message||"",type:String(t.type||"SYSTEM").toUpperCase(),createdAt:t.createdAt||""})).filter(t=>t.title||t.message)},getRecentProductIds(){try{return JSON.parse(localStorage.getItem(C.storageKeys.recentProducts)||"[]").filter(Boolean)}catch{return[]}},addRecentProduct(e){if(!e||String(e).startsWith("demo-"))return;const t=[String(e),...this.getRecentProductIds().filter(a=>String(a)!==String(e))].slice(0,12);localStorage.setItem(C.storageKeys.recentProducts,JSON.stringify(t))},async loadRecentlyViewed(){const e=this.getRecentProductIds();return e.length?ce.loadProductsByIds(e):[]}},F={};function es(e){Object.assign(F,e)}function s(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function D(e){const t=ge(),a={uz:"so'm",en:"UZS",ru:"сум",ko:"UZS"},r=t==="uz"?"uz-UZ":t;return`${new Intl.NumberFormat(r).format(S(e))} ${a[t]||"UZS"}`}function Pr(e){return D(e)}function Ea(e){if(!e)return"";const t=new Date(e);if(Number.isNaN(t.getTime()))return String(e);const a=ge();return new Intl.DateTimeFormat(a,{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(t)}function ts(e){if(!e)return"";const t=new Date(e);if(Number.isNaN(t.getTime()))return String(e);const a=ge(),r=new Intl.DateTimeFormat(a,{day:"2-digit",month:"short",year:"numeric"}).format(t),i=new Intl.DateTimeFormat(a,{hour:"2-digit",minute:"2-digit"}).format(t);return`${r} • ${i}`}function as({discountPercent:e,todayDeal:t,isNew:a,todayDealLabel:r}){return`
    <div class="badge-row">
      ${e?`<span class="badge ds-badge--sale">-${e}%</span>`:""}
      ${t?`<span class="badge today ds-badge--deal">${s(r)}</span>`:""}
      ${a?'<span class="badge ds-badge--new">NEW</span>':""}
    </div>
  `}function Ar({stock:e,lowStockLabel:t,outOfStockLabel:a}){const r=e>0&&e<=5,i=e===0;return!r&&!i?"":`<span class="ds-badge ds-badge--stock">${s(i?a:t)}</span>`}function Vt({rating:e,label:t="Rating",className:a="stars"}){const r=Math.min(5,Math.max(0,Math.round(S(e))));return`
    <span class="${s(a)}" role="img" aria-label="${s(t)} ${r} out of 5">
      ${Array.from({length:5},(i,c)=>`<span class="${c<r?"filled":""}">★</span>`).join("")}
    </span>
  `}function Ir({ratingAvg:e,reviewCount:t=0,className:a="rating"}){const r=S(e);return`
    <span class="${s(a)}">
      <span class="star" aria-hidden="true">★</span>
      ${r.toFixed(1)}
      <span class="review-count">(${t})</span>
    </span>
  `}function rs({ratingAvg:e,reviewCount:t=0}){return e?`
    <div class="rating-line">
      <span class="star" aria-hidden="true">★</span>
      ${S(e).toFixed(1)}
      <span class="review-count">(${t})</span>
    </div>
  `:""}function is({product:e,screen:t="home",position:a=0,isFavorite:r=!1,isCompared:i=!1,isAdding:c=!1,labels:d={}}){const u=S(e.stock),p=u===0,{favoritesTitle:m="Favorites",todayOnly:h="Today only",lowStock:v="Low stock",outOfStock:$="Out of stock",freeShipping:T="Free shipping",quickView:q="Quick view",compare:I="Compare",sold:O="",adding:L="Adding...",addToCart:z="Add to cart",viewDetails:ee="View details"}=d;return`
    <article class="product-card" data-product="${s(e.id)}" data-screen="${s(t)}" data-position="${s(a)}" role="link" tabindex="0" aria-label="${s(e.name)}">
      <div class="card-media">
        ${as({discountPercent:e.discountPercent,todayDeal:e.todayDeal,isNew:e.isNew,todayDealLabel:h})}
        <button class="icon-button favorite-float ${r?"active":""}" data-favorite="${s(e.id)}" type="button" aria-label="${s(m)}" aria-pressed="${r}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
        </button>
        <img class="product-image" src="${s(e.image)}" alt="${s(e.name)}" loading="lazy" decoding="async" />
        <div class="card-badges-bottom">
          ${Ar({stock:u,lowStockLabel:v,outOfStockLabel:$})}
          <span class="ds-badge ds-badge--delivery">${s(T)}</span>
        </div>
        <div class="card-overlay">
          <button class="secondary-button" data-quick-view="${s(e.id)}" type="button">${s(q)}</button>
          <button class="icon-button ${i?"active":""}" data-compare="${s(e.id)}" type="button" aria-label="${s(I)}" aria-pressed="${i}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-meta">
          <span class="brand-name">${s(e.brand||e.category||"BEAUTY SKIN KOREA")}</span>
          ${Ir({ratingAvg:e.ratingAvg,reviewCount:e.reviewCount||0})}
        </div>
        <h3>${s(e.name)}</h3>
        <p>${s(e.description||`${e.soldCount} dona sotilgan`)}</p>
        <div class="price-row">
          <span>${D(e.finalPrice)}</span>
          ${e.discountPercent?`<span class="old-price">${D(e.originalPrice)}</span>`:""}
        </div>
        ${rs({ratingAvg:e.ratingAvg,reviewCount:e.reviewCount||0})}
        <p class="hint">${s(O)}</p>
      </div>
      <div class="card-actions">
        <button class="primary-button ${c?"loading":""}" data-add="${s(e.id)}" type="button" ${p?"disabled":""}>
          ${s(c?L:z)}
        </button>
        <button class="icon-button" data-detail="${s(e.id)}" type="button" aria-label="${s(ee)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>
    </article>
  `}function ss({message:e,actionLabel:t="",actionAttrs:a='data-show-all type="button"'}){const r=t?`<button class="secondary-button" ${a}>${s(t)}</button>`:"";return`
    <div class="empty-state">
      <strong>${s(e)}</strong>
      ${r}
    </div>
  `}function Er(e,t){e&&(e.innerHTML=ss(t))}function os({products:e,renderCard:t}){return e.map((a,r)=>t(a,r)).join("")}function ns(e,{products:t,emptyMessage:a,emptyActionLabel:r,renderCard:i}){return t.length?(e.innerHTML=os({products:t,renderCard:i}),!0):(Er(e,{message:a,actionLabel:r}),!1)}function cs(){return`
    <div class="skeleton-card" aria-hidden="true">
      <div class="ds-skeleton" style="aspect-ratio:1/1.05;border-radius:14px;margin-bottom:12px"></div>
      <div class="ds-skeleton" style="height:12px;width:40%;margin-bottom:8px;border-radius:6px"></div>
      <div class="ds-skeleton" style="height:14px;width:90%;margin-bottom:8px;border-radius:6px"></div>
      <div class="ds-skeleton" style="height:18px;width:55%;border-radius:6px"></div>
    </div>
  `}function ls({count:e=12}={}){return Array.from({length:e},()=>cs()).join("")}function ds(e,t=12){e&&(e.innerHTML=ls({count:t}))}function Se(e=document){if(e.querySelectorAll("img[data-src], img[loading='lazy']").forEach(a=>{if(a.dataset.loaded)return;a.classList.add("img-loading");const r=()=>{a.classList.remove("img-loading"),a.classList.add("img-loaded"),a.dataset.loaded="1"};if(a.complete&&a.naturalWidth){r();return}a.addEventListener("load",r,{once:!0}),a.addEventListener("error",()=>a.classList.remove("img-loading"),{once:!0})}),"IntersectionObserver"in window){const a=new IntersectionObserver(r=>{r.forEach(i=>{if(!i.isIntersecting)return;const c=i.target;c.dataset.src&&!c.src&&(c.src=c.dataset.src),a.unobserve(c)})},{rootMargin:"200px"});e.querySelectorAll("img[data-src]").forEach(r=>a.observe(r))}}const Lr="beauty_skin_compare",tt=4;function rt(){try{return JSON.parse(localStorage.getItem(Lr)||"[]").slice(0,tt)}catch{return[]}}function La(e){localStorage.setItem(Lr,JSON.stringify(e.slice(0,tt)))}function us(e){const t=String(e);let a=rt();if(a.includes(t))a=a.filter(r=>r!==t);else{if(a.length>=tt)return{ids:a,added:!1,full:!0};a=[...a,t]}return La(a),{ids:a,added:a.includes(t),full:!1}}function ps(e){const t=rt().filter(a=>a!==String(e));return La(t),t}function ms(){return La([]),[]}const gs=["red","blue","pink","black","white","green","nude","coral","beige","brown","purple","orange","yellow","gray","grey","rose","peach","ivory","gold","silver"],hs=["xs","s","m","l","xl","xxl","ml","g","oz","50ml","100ml","150ml","200ml","30ml"];function fs(e){const t=new Set,a=new Set,r=new Set;let i=0;return e.forEach(c=>{var d;c.brand&&t.add(c.brand),i=Math.max(i,S(c.finalPrice)),(d=c.variants)==null||d.forEach(u=>{const p=String(u.label||"").toLowerCase();gs.forEach(m=>{p.includes(m)&&a.add(m.charAt(0).toUpperCase()+m.slice(1))}),hs.forEach(m=>{p.includes(m)&&r.add(m.toUpperCase())}),u.color&&a.add(u.color),u.size&&r.add(u.size)})}),{brands:[...t].sort(),colors:[...a].sort(),sizes:[...r].sort(),maxPrice:i||5e6}}function vs(e,t){var r,i,c;let a=[...e];return(r=t.brands)!=null&&r.length&&(a=a.filter(d=>t.brands.includes(d.brand))),(t.minPrice>0||t.maxPrice<5e6)&&(a=a.filter(d=>{const u=S(d.finalPrice);return u>=t.minPrice&&u<=t.maxPrice})),t.minRating>0&&(a=a.filter(d=>S(d.ratingAvg)>=t.minRating)),t.onSale&&(a=a.filter(d=>S(d.discountPercent)>0||d.todayDeal)),t.inStock&&(a=a.filter(d=>S(d.stock)>0)),t.fastDelivery&&(a=a.filter(d=>S(d.stock)>0)),(i=t.colors)!=null&&i.length&&(a=a.filter(d=>{const u=(d.variants||[]).map(p=>String(p.label||p.color||"").toLowerCase()).join(" ");return t.colors.some(p=>u.includes(p.toLowerCase()))})),(c=t.sizes)!=null&&c.length&&(a=a.filter(d=>{const u=(d.variants||[]).map(p=>String(p.label||p.size||"").toLowerCase()).join(" ");return t.sizes.some(p=>u.includes(p.toLowerCase()))})),ys(a,t.sort)}function ys(e,t){const a=[...e];switch(t){case"price-asc":return a.sort((r,i)=>S(r.finalPrice)-S(i.finalPrice));case"price-desc":return a.sort((r,i)=>S(i.finalPrice)-S(r.finalPrice));case"rating":return a.sort((r,i)=>S(i.ratingAvg)-S(r.ratingAvg));case"newest":return a.sort((r,i)=>S(i.id)-S(r.id));case"discount":return a.sort((r,i)=>S(i.discountPercent)-S(r.discountPercent));default:return a.sort((r,i)=>S(i.soldCount)-S(r.soldCount))}}const Tr="beauty_skin_filters",ze={brands:[],minPrice:0,maxPrice:5e6,colors:[],sizes:[],minRating:0,onSale:!1,inStock:!1,fastDelivery:!1,origin:[],seller:[],sort:"popular",viewMode:"grid"};function bs(){try{const e=JSON.parse(localStorage.getItem(Tr)||"{}");return{...ze,...e}}catch{return{...ze}}}function ws(e){localStorage.setItem(Tr,JSON.stringify({brands:e.brands,minPrice:e.minPrice,maxPrice:e.maxPrice,colors:e.colors,sizes:e.sizes,minRating:e.minRating,onSale:e.onSale,inStock:e.inStock,fastDelivery:e.fastDelivery,origin:e.origin,seller:e.seller,sort:e.sort,viewMode:e.viewMode}))}function ks(){return{...ze}}function Ss(e){let t=0;return e.brands.length&&(t+=e.brands.length),e.colors.length&&(t+=e.colors.length),e.sizes.length&&(t+=e.sizes.length),e.origin.length&&(t+=e.origin.length),e.seller.length&&(t+=e.seller.length),e.minRating>0&&(t+=1),e.onSale&&(t+=1),e.inStock&&(t+=1),e.fastDelivery&&(t+=1),(e.minPrice>ze.minPrice||e.maxPrice<ze.maxPrice)&&(t+=1),t}const Ta="beauty_skin_saved_for_later";function Da(){try{return JSON.parse(localStorage.getItem(Ta)||"[]")}catch{return[]}}function Cs(e){const t=Da();if(t.some(r=>String(r.id)===String(e.id)))return t;const a=[...t,{id:e.id,name:e.name,image:e.image,unitPrice:e.unitPrice,brand:e.brand,variantLabel:e.variantLabel}];return localStorage.setItem(Ta,JSON.stringify(a)),a}function $s(e){const t=Da().filter(a=>String(a.id)!==String(e));return localStorage.setItem(Ta,JSON.stringify(t)),t}const Ne=5e5,Ps=3e4;function As(){l.filters||(l.filters=bs())}function Is(e){l.sourceProducts=e,l.filterFacets=fs(e),l.filters.maxPrice===ze.maxPrice&&l.filterFacets.maxPrice&&(l.filters.maxPrice=Math.ceil(l.filterFacets.maxPrice/1e3)*1e3)}function Es(){return vs(l.sourceProducts,l.filters)}function jt(e,t){const a=document.getElementById("filterSidebar"),r=document.getElementById("filterSheetContent"),i=Ls(e);a&&(a.innerHTML=i),r&&(r.innerHTML=i),Ts()}function Ls(e,t){const a=l.filters,r=l.filterFacets,i=r.brands.map(u=>Xt("brand",u,a.brands.includes(u))).join(""),c=r.colors.map(u=>Xt("color",u,a.colors.includes(u))).join(""),d=r.sizes.map(u=>Xt("size",u,a.sizes.includes(u))).join("");return`
    <div class="filter-sidebar-header">
      <h3>${s(e("filter.title"))}</h3>
      <button class="ghost-button" type="button" data-clear-filters>${s(e("filter.clearAll"))}</button>
    </div>
    ${Pe(e("filter.brand"),i||`<p class="hint">${s(e("filter.noOptions"))}</p>`)}
    ${Pe(e("filter.price"),`
      <div class="price-range">
        <input type="range" data-filter-price min="0" max="${r.maxPrice||5e6}" step="10000" value="${a.maxPrice}" />
        <div class="price-range-labels">
          <span>${D(a.minPrice)}</span>
          <span>${D(a.maxPrice)}</span>
        </div>
      </div>
    `)}
    ${Pe(e("filter.discount"),ea("onSale",e("filter.onSaleOnly"),a.onSale))}
    ${Pe(e("filter.color"),c||'<p class="hint">—</p>')}
    ${Pe(e("filter.size"),d||'<p class="hint">—</p>')}
    ${Pe(e("filter.rating"),`
      ${[4,3,2,1].map(u=>`
        <label class="filter-check">
          <input type="radio" name="minRating" data-filter-rating value="${u}" ${a.minRating===u?"checked":""} />
          ${"★".repeat(u)}+
        </label>
      `).join("")}
    `)}
    ${Pe(e("filter.availability"),ea("inStock",e("filter.inStock"),a.inStock))}
    ${Pe(e("filter.fastDelivery"),ea("fastDelivery",e("filter.fastDelivery"),a.fastDelivery))}
  `}function Pe(e,t){return`
    <div class="filter-group">
      <button class="filter-group-toggle" type="button" aria-expanded="true">
        ${s(e)}
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <div class="filter-group-body">${t}</div>
    </div>
  `}function Xt(e,t,a){return`
    <label class="filter-check">
      <input type="checkbox" data-filter-${e}="${s(t)}" ${a?"checked":""} />
      ${s(t)}
    </label>
  `}function ea(e,t,a){return`
    <label class="filter-check">
      <input type="checkbox" data-filter-toggle="${e}" ${a?"checked":""} />
      ${s(t)}
    </label>
  `}function Nt(e){const t=document.getElementById("filterChipsRow");if(!t)return;const a=[],r=l.filters;r.brands.forEach(i=>a.push(_e(i,`brand:${i}`))),r.colors.forEach(i=>a.push(_e(i,`color:${i}`))),r.sizes.forEach(i=>a.push(_e(i,`size:${i}`))),r.onSale&&a.push(_e(e("filter.onSaleOnly"),"onSale")),r.inStock&&a.push(_e(e("filter.inStock"),"inStock")),r.minRating&&a.push(_e(`${r.minRating}★+`,"rating")),t.hidden=!a.length,t.innerHTML=a.join("")}function _e(e,t){return`<span class="filter-chip-active">${s(e)}<button type="button" data-remove-chip="${s(t)}" aria-label="Remove">×</button></span>`}function Ts(){const e=document.getElementById("filterBadgeCount"),t=Ss(l.filters);e&&(e.textContent=t,e.hidden=t===0)}function Be(){ws(l.filters)}function Ds(){const e=l.filterFacets.maxPrice||ze.maxPrice;l.filters={...ks(),maxPrice:e},Be()}function la(e,t){var a,r,i,c;e&&(e.classList.toggle("list-view",t==="list"),(a=document.getElementById("gridViewBtn"))==null||a.classList.toggle("active",t==="grid"),(r=document.getElementById("listViewBtn"))==null||r.classList.toggle("active",t==="list"),(i=document.getElementById("gridViewBtn"))==null||i.setAttribute("aria-pressed",t==="grid"),(c=document.getElementById("listViewBtn"))==null||c.setAttribute("aria-pressed",t==="list"))}function Rs(e){const t=document.getElementById("compareFab"),a=document.getElementById("compareFabCount");a&&(a.textContent=e),t==null||t.classList.toggle("visible",e>0)}function Va(e,t){const a=document.getElementById("compareDrawerContent");if(a){if(!e.length){a.innerHTML=`<div class="empty-state"><strong>${s(t("compare.empty"))}</strong></div>`;return}a.innerHTML=e.map(r=>`
    <div class="compare-product-cell" style="display:flex;gap:12px;margin-bottom:12px;align-items:center">
      <img src="${s(r.image)}" alt="" width="64" height="64" />
      <div style="flex:1">
        <strong>${s(r.name)}</strong>
        <p>${D(r.finalPrice)}</p>
      </div>
      <button class="icon-button" data-remove-compare="${s(r.id)}" type="button" aria-label="Remove">×</button>
    </div>
  `).join("")}}function Dr(e,t){const a=document.getElementById("comparePageContent");if(!a||!e.length)return;const r=[["",...e.map(c=>`<img src="${s(c.image)}" alt="" /><br><strong>${s(c.name)}</strong>`)],[t("compare.price"),...e.map(c=>D(c.finalPrice))],[t("compare.brand"),...e.map(c=>s(c.brand||"—"))],[t("compare.rating"),...e.map(c=>`${S(c.ratingAvg).toFixed(1)} (${c.reviewCount||0})`)],[t("compare.stock"),...e.map(c=>String(c.stock??"—"))],[t("compare.discount"),...e.map(c=>c.discountPercent?`-${c.discountPercent}%`:"—")]],i=c=>new Set(c.filter(u=>u!=="—")).size>1;a.innerHTML=`
    <table class="compare-table">
      <tbody>
        ${r.map(([c,...d])=>`<tr class="${c&&i(d)?"compare-diff":""}">
            <th>${s(c)}</th>
            ${d.map(p=>`<td>${p}</td>`).join("")}
          </tr>`).join("")}
      </tbody>
    </table>
  `}function ja(e,t){return t?`
    <section class="app-feed-block app-feed-rail app-cart-rail">
      <div class="app-section-head">
        <h2>${s(e)}</h2>
      </div>
      <div class="product-grid app-rail-grid">${t}</div>
    </section>
  `:""}function Ms(e,t={}){const a=document.getElementById("cartExtras");if(!a)return;const r=S(t.subtotal??k.cartTotal),i=Math.min(100,r/Ne*100),c=Math.max(0,Ne-r),d=Da(),u=t.recommendedHtml||"",p=t.recentHtml||"";a.innerHTML=`
    <div class="app-cart-free-block">
      <div class="app-cart-free-head">
        <strong>${s(e("cart.freeToHome"))}</strong>
        ${r>=Ne?`<span class="app-cart-free-done">${s(e("cart.freeShippingUnlocked"))}</span>`:`<span class="hint">${s(e("cart.freeShippingRemaining",{amount:D(c)}))}</span>`}
      </div>
      <div class="app-cart-free-bar"><div style="width:${i}%"></div></div>
    </div>
    ${ja(e("home.recommended"),u)}
    ${ja(e("home.recentlyViewed"),p)}
    ${d.length?`
      <section class="app-cart-saved">
        <h3>${s(e("cart.savedForLater"))}</h3>
        ${d.map(m=>`
          <div class="app-cart-saved-item">
            <img src="${s(m.image)}" alt="" loading="lazy" />
            <div>
              <strong>${s(m.name)}</strong>
              <p>${D(m.unitPrice)}</p>
              <button class="cart-save-later" data-restore-saved="${s(m.id)}" type="button">${s(e("cart.moveToCart"))}</button>
            </div>
          </div>
        `).join("")}
      </section>
    `:""}
    <div class="cart-coupon app-cart-coupon">
      <input type="text" id="cartCouponInput" placeholder="${s(e("cart.couponPlaceholder"))}" value="${s(k.cartCoupon||"")}" />
      <button class="secondary-button" type="button" data-apply-coupon>${s(e("cart.applyCoupon"))}</button>
    </div>
  `}function qs(e){const t=Date.now(),a=Math.max(0,e-t),r=Math.floor(a/36e5),i=Math.floor(a%36e5/6e4),c=Math.floor(a%6e4/1e3),d=u=>String(u).padStart(2,"0");return`
    <div class="flash-countdown" aria-live="polite">
      <div class="flash-countdown-unit"><strong>${d(r)}</strong><span>HRS</span></div>
      <div class="flash-countdown-unit"><strong>${d(i)}</strong><span>MIN</span></div>
      <div class="flash-countdown-unit"><strong>${d(c)}</strong><span>SEC</span></div>
    </div>
  `}function Bs(e,t,a,r){return`
    <div class="brand-hero">
      <p class="eyebrow">${s(a("brand.official"))}</p>
      <h1>${s(e)}</h1>
      <p class="hint">${s(a("brand.story"))}</p>
    </div>
    <section class="personalization-strip">
      <div class="section-head"><h2>${s(a("brand.popular"))}</h2></div>
      <div class="product-grid">${r}</div>
    </section>
  `}const Ra=(e,t={})=>E(e,{...t,showError:!1}),Os=e=>Ra("/events/impression",{method:"POST",body:JSON.stringify(e)}),xs=e=>Ra("/events/click",{method:"POST",query:{productId:e}}),Ns=e=>Ra("/events/view",{method:"POST",query:{productId:e}}),Ft={isTrackableProduct(e){return!!e&&!String(e).startsWith("demo-")},impressionKey(e,t,a){return`${e}:${t}:${a}`},shouldSendImpression(e,t,a,r){if(!this.isTrackableProduct(r))return!1;const i=this.impressionKey(t,a,r);return e.has(i)?!1:(e.add(i),!0)},sendImpression({productId:e,screen:t,position:a,sessionId:r,queryText:i}){return Os({productId:Number(e),screen:t,position:a,queryText:i||null,sessionId:r}).catch(()=>{})},sendProductClick(e){this.isTrackableProduct(e)&&xs(e).catch(()=>{})},sendProductView(e){this.isTrackableProduct(e)&&Ns(e).catch(()=>{})}};function Ka(e,t,a){Ft.shouldSendImpression(g.impressionsSent,g.sessionId,t||"home",e)&&Ft.sendImpression({productId:e,screen:t||"home",position:a,sessionId:g.sessionId,queryText:g.currentSearchQuery})}function Mt(e){Ft.sendProductClick(e)}function Fs(e){Ft.sendProductView(e)}function Rr(e){if(!("IntersectionObserver"in window)){e.querySelectorAll("[data-product]").forEach(t=>{Ka(t.dataset.product,t.dataset.screen||"home",Number(t.dataset.position||0))});return}g.impressionObserver||(g.impressionObserver=new IntersectionObserver(t=>{t.forEach(a=>{if(!a.isIntersecting)return;const r=a.target;Ka(r.dataset.product,r.dataset.screen||"home",Number(r.dataset.position||0)),g.impressionObserver.unobserve(r)})},{threshold:.35})),e.querySelectorAll("[data-product]").forEach(t=>g.impressionObserver.observe(t))}function zs(){return{favoritesTitle:n("favorites.title"),todayOnly:n("home.todayOnly"),lowStock:n("product.lowStock"),outOfStock:n("product.outOfStock"),freeShipping:n("product.freeShipping"),quickView:n("product.quickView"),compare:n("product.compare"),adding:n("product.adding"),addToCart:n("product.addToCart"),viewDetails:n("product.viewDetails")}}function at(e,t={}){const a=zs();return a.sold=n("product.sold",{count:e.soldCount}),is({product:e,screen:t.screen||g.currentGridScreen||"home",position:t.position??0,isFavorite:A.favoriteIds.has(String(e.id))||!!e.favorite,isCompared:rt().includes(String(e.id)),isAdding:k.addingProductIds.has(String(e.id)),labels:a})}function Qe(e,t=12){ds(e,t)}function ye(e,t,a=n("home.showAll")){Er(e,{message:t,actionLabel:a})}function ae(e,t,a,r={}){var c;ns(e,{products:t,emptyMessage:a,emptyActionLabel:n("home.showAll"),renderCard:(d,u)=>at(d,{...r,position:u})})&&(Rr(e),Se(e),la(e,((c=l.filters)==null?void 0:c.viewMode)||"grid"))}function pe(e,t,a={}){Is(e),jt(n),Nt(n);const r=Es();ae(o.grid,r,t,a);const i=document.getElementById("sortSelect");i&&i.value!==l.filters.sort&&(i.value=l.filters.sort)}function Ga(e,t){e&&(e.hidden=!t)}function Je(){Ga(o.productsMode,l.demoProducts),Ga(o.dealsMode,l.demoDeals)}function Us(e){A.favoriteProducts=e.filter(t=>t.id!==void 0&&t.id!==null),A.favoriteIds=new Set(A.favoriteProducts.map(t=>String(t.id))),A.favoritesCount=A.favoriteProducts.length,ke()}function da(){A.favoriteProducts=[],A.favoriteIds=new Set,A.favoritesLoading=!1,A.favoritesError="",A.favoritesCount=0,ke()}function ke(){var e;l.products=l.products.map(t=>({...t,favorite:A.favoriteIds.has(String(t.id))})),l.todayDeals=l.todayDeals.map(t=>({...t,favorite:A.favoriteIds.has(String(t.id))})),((e=l.selectedDetailProduct)==null?void 0:e.id)!==void 0&&(l.selectedDetailProduct={...l.selectedDetailProduct,favorite:A.favoriteIds.has(String(l.selectedDetailProduct.id))})}function Hs({banners:e=[]}){return e.length?`
    <button class="banner-arrow prev" data-banner-nav="prev" type="button" aria-label="Oldingi banner">‹</button>
    <div class="banner-track">
      ${e.map(t=>`
        <article class="banner-card ${t.imageUrl?"has-image":""}" data-banner-link-type="${s(t.linkType)}" data-banner-link-id="${s(t.linkId??"")}">
          ${t.imageUrl?`<img src="${s(t.imageUrl)}" alt="${s(t.title||"Banner")}" />`:`
          <div>
            <strong>${s(t.title||"BEAUTY SKIN KOREA")}</strong>
            ${t.subtitle?`<p>${s(t.subtitle)}</p>`:""}
          </div>`}
        </article>
      `).join("")}
    </div>
    <button class="banner-arrow next" data-banner-nav="next" type="button" aria-label="Keyingi banner">›</button>
    <div class="banner-dots" role="tablist" aria-label="Banner slides">
      ${e.map((t,a)=>`
        <button
          class="banner-dot ${a===0?"active":""}"
          type="button"
          data-banner-dot="${a}"
          role="tab"
          aria-label="Banner ${a+1}"
          aria-selected="${a===0?"true":"false"}"
        ></button>
      `).join("")}
    </div>
  `:""}function _s({announcements:e=[],limit:t=3}){return e.slice(0,t).map(a=>`
    <article class="announcement-item ${a.type.toLowerCase()}">
      <strong>${s(a.title||a.type)}</strong>
      <span>${s(a.message)}</span>
    </article>
  `).join("")}const Mr={search(e,t){return ce.search(e,t)},loadByCategory(e,t){return ce.loadByCategory(e,t)}};function Vs({category:e,label:t,active:a=!1}){return`
    <button class="chip ${a?"active":""}" data-category="${s(e)}" type="button">
      ${s(t)}
    </button>
  `}function js({categories:e,selectedCategory:t,labelFor:a}){return e.map(r=>Vs({category:r,label:a(r),active:t===r})).join("")}const Ks=["SNAIL CREAM","COSRX","SUNSCREEN","LIP TINT","VITAMIN C","COLLAGEN"],ie={renderCategories(){const e=["ALL",...l.categories];o.categoryToolbar.innerHTML=js({categories:e,selectedCategory:l.selectedCategory,labelFor:t=>t==="ALL"?n("home.all"):fe(t)}),ie.renderCatalogList(),ie.renderQuickCategories()},renderCatalogList(){const e=["ALL",...l.categories];o.catalogList.innerHTML=e.map(t=>`
      <button class="catalog-item ${l.selectedCategory===t?"active":""}" data-category="${s(t)}" type="button">
        <span>${s(t==="ALL"?n("home.showAll"):fe(t))}</span>
        <span>${t==="ALL"?"→":"›"}</span>
      </button>
    `).join("")},renderQuickCategories(){o.quickCategoryGrid.innerHTML=Ha.map(e=>`
      <button class="quick-card" data-category="${s(e.category)}" type="button">
        <span>${s(e.icon)}</span>
        ${s(fe(e.category))}
      </button>
    `).join(""),ie.renderMegaMenu(),ie.renderPopularSearches(),ie.renderMobileNav()},renderPopularSearches(){const e=document.getElementById("popularSearchesChips");e&&(e.innerHTML=Ks.map(t=>`
      <button class="search-chip" type="button" data-search-chip="${s(t)}" data-chip-type="trending">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.3-4.3m1.3-5.2a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"/></svg>
        ${s(t)}
      </button>
    `).join(""))},renderMegaMenu(){const e=document.getElementById("megaMenuContent");if(!e)return;const t=[{title:n("home.categories"),items:l.categories.slice(0,8)},{title:n("home.quickCategories"),items:Ha.map(a=>a.category)}];e.innerHTML=t.map(a=>`
      <div class="mega-menu-group">
        <h3>${s(a.title)}</h3>
        ${a.items.map(r=>`
          <button type="button" data-category="${s(r)}">${s(fe(r))}</button>
        `).join("")}
      </div>
    `).join("")},renderMobileNav(){const e=document.getElementById("mobileNavLinks");if(!e)return;const t=[{id:"ordersButton",label:n("header.orders")},{id:"favoritesButton",label:n("favorites.title")},{id:"cartButton",label:n("cart.title")},{id:"loginButton",label:n("auth.login")}];e.innerHTML=`
      ${["ALL",...l.categories].map(a=>`
        <button class="mobile-nav-link" type="button" data-category="${s(a)}">
          ${s(a==="ALL"?n("home.all"):fe(a))}
        </button>
      `).join("")}
      ${t.map(a=>`<button class="mobile-nav-link" type="button" data-mobile-action="${s(a.id)}">${s(a.label)}</button>`).join("")}
    `},async loadMoreProducts(){if(l.feedLoading)return;l.feedLoading=!0,o.loadMore.disabled=!0,o.loadMore.textContent="Yuklanmoqda...";const{products:e,nextProducts:t,nextFeedPage:a}=await ce.loadMoreProducts({feedPage:l.feedPage,existingProducts:l.products});l.feedPage=a,l.products=e,ke(),pe(l.products,"Mahsulot topilmadi.",{screen:g.currentGridScreen||"home"}),l.feedLoading=!1,o.loadMore.disabled=!1,o.loadMore.textContent=t.length?"Yana yuklash":"Boshqa mahsulot topilmadi"},async renderCategoryProducts(e,{showHomeView:t}={}){if(g.currentRoute==="product"&&(window.location.hash="#/",t==null||t()),l.selectedCategory=e,g.currentGridScreen=e==="ALL"?"home":"category",g.currentSearchQuery="",ie.renderCategories(),e==="ALL"){o.title.textContent=n("home.popular"),await H.loadProducts();return}o.title.textContent=fe(e),o.status.textContent=n("home.loading"),Qe(o.grid,10);const a=await Mr.loadByCategory(e);l.products=a,ke(),pe(l.products,n("home.noProducts"),{screen:"category"}),o.status.textContent=""}},Gs=5e3;let qt=null,ua=!1,wt=null,Wa=0;function Kt(){var e;return(e=o.banners)==null?void 0:e.querySelector(".banner-track")}function Gt(){return l.banners.length}function Ma(){const e=Kt();if(!e)return 0;const t=e.clientWidth||1;return Math.max(0,Math.min(Gt()-1,Math.round(e.scrollLeft/t)))}function ta(){var t;const e=Ma();(t=o.banners)==null||t.querySelectorAll("[data-banner-dot]").forEach(a=>{const r=Number(a.dataset.bannerDot)===e;a.classList.toggle("active",r),a.setAttribute("aria-selected",r?"true":"false")})}function pa(e,t="smooth"){const a=Kt(),r=Gt();if(!a||!r)return;const i=(e%r+r)%r;a.scrollTo({left:i*a.clientWidth,behavior:t})}function qr(){pa(Ma()+1)}function qa(){qt&&(clearInterval(qt),qt=null)}function ma(){qa(),!(ua||Gt()<=1)&&(qt=setInterval(()=>qr(),Gs))}function Ws(){qa();const e=Kt();e&&wt&&e.removeEventListener("scroll",wt),wt=null,o.banners&&(o.banners.onmouseenter=null,o.banners.onmouseleave=null)}function Ys(){Ws();const e=Kt();if(!e||Gt()<=1){ta();return}wt=()=>{clearTimeout(Wa),Wa=setTimeout(ta,80)},e.addEventListener("scroll",wt,{passive:!0}),o.banners.onmouseenter=()=>{ua=!0,qa()},o.banners.onmouseleave=()=>{ua=!1,ma()},ta(),ma()}function Ya(e){const t=document.querySelector(".hero-main");if(t){if(!e){t.style.removeProperty("--hero-campaign-image");return}t.style.setProperty("--hero-campaign-image",`url("${e}")`)}}const H={renderBanners(){var e;if(!l.banners.length){o.banners.hidden=!0,o.banners.innerHTML="",Ya("");return}o.banners.hidden=!1,o.banners.innerHTML=Hs({banners:l.banners}),Ya(((e=l.banners[0])==null?void 0:e.imageUrl)||""),Ys()},renderAnnouncements(){if(!l.announcements.length){o.announcements.hidden=!0,o.announcements.innerHTML="";return}o.announcements.hidden=!1,o.announcements.innerHTML=_s({announcements:l.announcements})},renderHomeApiSections(e){const t=e.hits||[],a=e.newArrivals||[],r=document.getElementById("personalizationSection"),i=document.getElementById("personalizationGrid");if(i){const d=t.length?t:l.products.slice(0,10);r&&(r.hidden=!d.length),d.length&&ae(i,d.slice(0,10),n("home.noProducts"),{screen:"home-for-you"})}const c=document.getElementById("newArrivalsGrid");if(c){const d=a.length?a:l.products.slice(0,10);ae(c,d.slice(0,10),n("home.noProducts"),{screen:"home-new"})}o.homeApiSections.hidden=!0,o.homeApiSections.innerHTML=""},renderPersonalizationSections(){var r,i;const e=document.getElementById("personalizationSection"),t=document.getElementById("personalizationGrid");if(!e||!t||t.children.length)return;const a=(i=(r=l.homeApiSections)==null?void 0:r.hits)!=null&&i.length?l.homeApiSections.hits:l.products.slice(0,10);e.hidden=!a.length,a.length&&ae(t,a.slice(0,10),n("home.noProducts"),{screen:"home-for-you"})},async loadCategories(){const{categories:e,demoCategories:t}=await de.loadCategories();l.categories=e,l.demoCategories=t,Je(),ie.renderCategories()},async loadBanners(){l.banners=await de.loadBanners(),H.renderBanners()},async loadAnnouncements(){l.announcements=await de.loadAnnouncements(),H.renderAnnouncements()},async loadRecentlyViewed(){if(!de.getRecentProductIds().length){l.recentlyViewed=[],o.recentlyViewedSection.hidden=!0;return}l.recentlyViewed=await de.loadRecentlyViewed();const t=l.recentlyViewed||[];if(!t.length){o.recentlyViewedSection.hidden=!0;return}o.recentlyViewedSection.hidden=!1,ae(o.recentlyViewedGrid,t,"Recently viewed is empty.",{screen:"recent"})},async loadProducts(){try{o.status.textContent="Yuklanmoqda...",Qe(o.grid,12);const{products:e,demoProducts:t,failed:a}=await ce.loadProducts();e.length?(l.products=e,l.demoProducts=t,pe(l.products,"Mahsulot topilmadi.",{screen:g.currentGridScreen||"home"})):(l.products=[],l.demoProducts=t,ye(o.grid,a?"API data failed to load.":"Mahsulot topilmadi.")),ke()}catch(e){console.error("[LOAD PRODUCTS FAILED]",e),l.demoProducts=!1,ye(o.grid,"API data failed to load.")}finally{Je(),o.status.textContent=""}},async loadTodayDeals(){try{o.dealsStatus.textContent="Yuklanmoqda...",Qe(o.dealsGrid,5);const{deals:e,demoDeals:t,failed:a}=await ce.loadTodayDeals();l.todayDeals=e,l.demoDeals=t,a?ye(o.dealsGrid,"API data failed to load."):ae(o.dealsGrid,l.todayDeals.slice(0,8),"Mahsulot topilmadi."),ke()}catch(e){console.error("[LOAD TODAY DEALS FAILED]",e),l.demoDeals=!1,ye(o.dealsGrid,"API data failed to load.")}finally{Je(),o.dealsStatus.textContent=""}},async loadHomeApi(){const e=await de.loadHomeApiData({limit:10,page:0,size:20});if(!e.loaded)return l.homeLoadedFromApi=!1,o.homeApiSections.hidden=!0,!1;const{hits:t,discounts:a,newArrivals:r,products:i,todayDeals:c,homeApiSections:d}=e;return l.homeLoadedFromApi=!0,l.products=i,l.todayDeals=c,l.demoProducts=!1,l.demoDeals=!1,ke(),l.homeApiSections=d,H.renderHomeApiSections({hits:t,discounts:a,newArrivals:r}),pe(l.products,n("home.noProducts"),{screen:"home"}),ae(o.dealsGrid,a.slice(0,8),"Chegirmalar topilmadi.",{screen:"home-discounts"}),o.status.textContent="",o.dealsStatus.textContent="",Je(),!0},async load({loadCart:e}={}){var t,a,r;l.selectedCategory="ALL",g.currentSearchQuery="",g.currentGridScreen="home",l.feedPage=0,o.title.textContent=n("home.recommended"),o.status.textContent=n("home.loading"),Qe(o.grid,12),Qe(o.dealsGrid,6);try{await Promise.all([H.loadCategories(),H.loadBanners(),H.loadAnnouncements()]),await H.loadHomeApi()||(await Promise.all([H.loadProducts(),H.loadTodayDeals()]),H.renderHomeApiSections({hits:l.products.slice(0,12),discounts:l.todayDeals.slice(0,10),newArrivals:l.products.slice(6,18)})),await H.loadRecentlyViewed(),H.renderPersonalizationSections(),e&&await e()}catch(i){console.error("Home loading failed:",i),l.demoProducts=!1,l.demoDeals=!1,ye(o.grid,n("common.serverFailed"),n("common.tryAgain"))}finally{((t=o.status)==null?void 0:t.textContent)===n("home.loading")&&(o.status.textContent=""),(((a=o.dealsStatus)==null?void 0:a.textContent)===n("home.loading")||((r=o.dealsStatus)==null?void 0:r.textContent)==="Yuklanmoqda...")&&(o.dealsStatus.textContent="")}},prevBanner(){pa(Ma()-1)},nextBanner:qr,scrollToBanner:pa,resetBannerAutoSlide:ma},Qs=()=>E("/api/cart",{requireAuth:!0,showError:!1}),Js=e=>E("/api/cart",{method:"POST",body:JSON.stringify(e),requireAuth:!0}),Zs=(e,t)=>E(`/api/cart/${e}`,{method:"PUT",body:JSON.stringify(t),requireAuth:!0}),Xs=e=>E(`/api/cart/${e}`,{method:"DELETE",requireAuth:!0});function ga(e=g.lastApiError){return e.includes("Session expired")||e==="Please login to continue"}function Ee(e){return{success:!1,sessionExpired:ga(),error:g.lastApiError||e}}function eo(e){return e.reduce((t,a)=>{var i;const r=S((i=a.product)==null?void 0:i.originalPrice);return r>a.unitPrice?t+(r-a.unitPrice)*a.quantity:t},0)}function Qa(e,t,a=0,{checkout:r=!1}={}){const i=e.filter(h=>t.has(String(h.id))),c=i.reduce((h,v)=>h+v.lineTotal,0),d=eo(i),u=!i.length||c>=Ne?0:Ps,p=Math.max(0,c+u-a),m=i.reduce((h,v)=>h+v.quantity,0);return r?{items:i,subtotal:c,deliveryFee:u,discount:d+a,catalogDiscount:d,couponDiscount:a,total:p,itemCount:m}:{items:i,subtotal:c,discount:d,deliveryFee:u,couponDiscount:a,total:p,itemCount:m,uniqueCount:i.length}}const ue={async loadCart(){const e=await Qs();return e===null?Ee("Cart could not be loaded."):{success:!0,items:x(e).map(_i)}},syncSelection(e,t,a){const r=t||new Set,i=e.map(u=>String(u.id)),c=new Set(i),d=a||new Set;return[...r].forEach(u=>{c.has(u)||r.delete(u)}),i.forEach(u=>{d.has(u)||r.add(u)}),i.length&&!r.size&&!d.size&&i.forEach(u=>r.add(u)),{selectedIds:r,knownItemIds:new Set(i)}},getSelectedItems(e,t){return e.filter(a=>t.has(String(a.id)))},calculateTotals(e,t,a=0){return Qa(e,t,a)},calculateCheckoutTotals(e,t,a=0){return Qa(e,t,a,{checkout:!0})},async addItem(e,t){return Js({variantId:Number(e),quantity:Math.max(1,Number(t||1))})},async updateQuantity(e,t){return Zs(e,{quantity:Math.max(1,Number(t||1))})},async removeItem(e){return Xs(e)},applyCoupon(e,t){const a=String(e||"").trim().toUpperCase();return a==="BEAUTY10"?{valid:!0,coupon:a,discount:Math.round(t*.1)}:a?{valid:!1,invalid:!0}:{valid:!1,invalid:!1}}};function to({item:e,selected:t=!1,loading:a=!1,labels:r={}}){const i=e.product||{},c=e.image||i.image||C.placeholderImage,d=S(i.originalPrice)*e.quantity,u=i.originalPrice>e.unitPrice,p=[e.variantLabel,i.brand?`(${i.brand})`:""].filter(Boolean).join(" "),{selectItem:m="Select item",remove:h="Remove",shipsToday:v="Ships today"}=r;return`
    <article class="app-cart-item ${a?"loading":""}">
      <label class="app-cart-check" title="${s(m)}">
        <input
          type="checkbox"
          data-cart-item-check="${s(e.id)}"
          ${t?"checked":""}
          aria-label="${s(m)}: ${s(e.name)}"
        />
        <span class="app-cart-check-ui ${t?"is-checked":""}" aria-hidden="true"></span>
      </label>
      <div class="app-cart-item-body">
        <button class="app-cart-item-remove" data-remove="${s(e.id)}" type="button" aria-label="${s(h)}">×</button>
        <div class="app-cart-item-main">
          <img src="${s(c)}" alt="${s(e.name)}" loading="eager" decoding="async" class="app-cart-item-image" />
          <div class="app-cart-item-info">
            <h3>${s(e.name)}</h3>
            ${p?`<p class="app-cart-variant">${s(p)}</p>`:""}
            <p class="app-cart-ship">${s(v)}</p>
          </div>
        </div>
        <div class="app-cart-item-foot">
          <div class="cart-stepper app-cart-stepper">
            <button data-cart-qty="minus" data-cart-id="${s(e.id)}" ${e.quantity<=1?"disabled":""} type="button" aria-label="Decrease">-</button>
            <span aria-live="polite">${e.quantity}</span>
            <button data-cart-qty="plus" data-cart-id="${s(e.id)}" type="button" aria-label="Increase">+</button>
          </div>
          <div class="app-cart-prices">
            ${u?`<span class="old-price">${D(d)}</span>`:""}
            <strong>${D(e.lineTotal)}</strong>
          </div>
        </div>
      </div>
    </article>
  `}function ao({totals:e,labels:t={}}){const{yourOrder:a="Your order",goodsCount:r="",discount:i="Discount",deliveryCost:c="Delivery",freeDelivery:d="Free",products:u="Products",total:p="Total"}=t;return`
    <div class="app-cart-order-card">
      <h3>${s(a)}</h3>
      <div class="app-cart-order-lines">
        <div class="app-cart-order-line">
          <span>${s(r)}</span>
        </div>
        ${e.discount>0?`
          <div class="app-cart-order-line app-cart-order-discount">
            <span>${s(i)}</span>
            <span>-${D(e.discount)}</span>
          </div>
        `:""}
        <div class="app-cart-order-line">
          <span>${s(c)}</span>
          <span>${e.deliveryFee?D(e.deliveryFee):s(d)}</span>
        </div>
        <div class="app-cart-order-line">
          <span>${s(u)}</span>
          <strong>${D(e.subtotal)}</strong>
        </div>
      </div>
      <div class="app-cart-order-total">
        <span>${s(p)}</span>
        <strong>${D(e.total)}</strong>
      </div>
    </div>
  `}function ro({title:e,hint:t="",actionLabel:a="",actionAttrs:r='data-start-shopping type="button"'}){return`
    <div class="cart-empty app-cart-empty">
      <strong>${s(e)}</strong>
      ${t?`<p>${s(t)}</p>`:""}
      ${a?`<button class="primary-button" ${r}>${s(a)}</button>`:""}
    </div>
  `}function io({title:e,message:t,retryLabel:a="Try again"}){return`
    <div class="cart-empty app-cart-empty">
      <strong>${s(e)}</strong>
      <p>${s(t)}</p>
      <button class="secondary-button" data-cart-retry type="button">${s(a)}</button>
    </div>
  `}function At(){return k.cartSelectedIds||(k.cartSelectedIds=new Set),k.cartSelectedIds}function Ba(){const{selectedIds:e,knownItemIds:t}=ue.syncSelection(k.cartItems,At(),k.cartKnownItemIds);k.cartSelectedIds=e,k.cartKnownItemIds=t}function Br(){var d,u;const e=(d=o.cartItems)==null?void 0:d.querySelector("[data-cart-select-all]");if(!e)return;const t=Or().length,a=k.cartItems.length,r=a>0&&t===a,i=t>0&&t<a;e.checked=r,e.indeterminate=i;const c=((u=e.closest(".app-cart-check"))==null?void 0:u.querySelector(".app-cart-check-ui"))||e.nextElementSibling;c!=null&&c.classList.contains("app-cart-check-ui")&&(c.classList.toggle("is-indeterminate",i),c.classList.toggle("is-checked",r))}function Or(){return Ba(),ue.getSelectedItems(k.cartItems,At())}function xr(){return ue.calculateTotals(k.cartItems,At(),k.cartCouponDiscount||0)}function Nr(e){return to({item:e,selected:At().has(String(e.id)),loading:k.cartUpdatingIds.has(String(e.id)),labels:{selectItem:n("cart.selectItem"),remove:n("cart.remove"),shipsToday:n("cart.shipsToday")}})}function vt(e){const t=o.cartStickyProgress;if(!t)return;const a=Math.min(100,e/Ne*100),r=Math.max(0,Ne-e);t.innerHTML=e>=Ne?"":`
    <div class="app-cart-free-banner">
      <span>${s(n("cart.freeToHome"))}</span>
      <div class="app-cart-free-bar"><div style="width:${a}%"></div></div>
      <span class="hint">${s(n("cart.freeShippingRemaining",{amount:D(r)}))}</span>
    </div>
  `}function so(){l.products.length&&ae(o.grid,l.products,n("home.noProducts"),{screen:g.currentGridScreen})}function Ja(){Ba();const e=xr();if(o.cartCount.textContent=k.cartCount,o.cartSummary.textContent=n("orders.items",{count:e.itemCount}),o.cartTotal.textContent=D(e.subtotal),k.cartLoading){o.cartItems.innerHTML='<div class="cart-loading app-cart-loading"><div class="skeleton-card"></div><div class="skeleton-card"></div></div>',o.checkoutButton.disabled=!0,o.cartExtras&&(o.cartExtras.innerHTML=""),vt(0);return}if(k.cartError){o.cartItems.innerHTML=io({title:n("cart.unavailable"),message:k.cartError,retryLabel:n("common.tryAgain")}),o.checkoutButton.disabled=!0,o.cartExtras&&(o.cartExtras.innerHTML=""),vt(0);return}o.checkoutButton.disabled=!e.items.length;const t=l.products.slice(0,8).map((u,p)=>at(u,{screen:"cart-cross",position:p})).join(""),a=(l.recentlyViewed||[]).slice(0,6).map((u,p)=>at(u,{screen:"cart-recent",position:p})).join("");if(Ms(n,{recommendedHtml:t,recentHtml:a,subtotal:e.subtotal}),!k.cartItems.length){o.cartItems.innerHTML=ro({title:n("cart.empty"),hint:n("cart.emptyHint"),actionLabel:n("home.startShopping")}),vt(0);return}const r=e.uniqueCount,i=k.cartItems.length,c=i>0&&r===i,d=r>0&&r<i;o.cartItems.innerHTML=`
    <div class="app-cart-delivery-card">
      <strong>${s(n("cart.deliveryCourier"))}</strong>
      <span>${s(n("cart.deliveryEta"))}</span>
    </div>
    <div class="app-cart-toolbar">
      <label class="app-cart-select-all">
        <span class="app-cart-check app-cart-check--toolbar">
          <input
            type="checkbox"
            data-cart-select-all
            ${c?"checked":""}
            aria-label="${s(n("cart.selectAll",{selected:r,total:i}))}"
          />
          <span class="app-cart-check-ui ${c?"is-checked":""} ${d?"is-indeterminate":""}" aria-hidden="true"></span>
        </span>
        <span class="app-cart-select-all-text">${s(n("cart.selectAll",{selected:r,total:i}))}</span>
      </label>
      <button class="app-cart-delete-selected" data-cart-delete-selected type="button" ${r?"":"disabled"}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
        ${s(n("cart.deleteSelected"))}
      </button>
    </div>
    <div class="app-cart-items">
      ${k.cartItems.map(u=>Nr(u)).join("")}
    </div>
    ${ao({totals:e,labels:{yourOrder:n("cart.yourOrder"),goodsCount:n("cart.goodsCount",{count:e.itemCount}),discount:n("cart.discount"),deliveryCost:n("cart.deliveryCost"),freeDelivery:n("cart.freeDelivery"),products:n("cart.products"),total:n("common.total")}})}
  `,Br(),vt(e.subtotal),Se(o.cartItems),Se(o.cartExtras)}const N={render:Ja,renderCart:Ja,renderCartItemRow:Nr,renderCartStickyProgress:vt,renderAddToCartLoading:so,getSelectedCartItems:Or,getCartTotals:xr,getCartSelectedIds:At,syncCartSelection:Ba,applyCartCheckboxUi:Br},$t=(e={})=>E("/api/users/me",{requireAuth:!0,showError:!1,...e}),oo=(e,t={})=>E("/api/users/me",{method:"PUT",body:JSON.stringify(e),requireAuth:!0,showError:!1,...t}),Oa=()=>E("/api/orders",{requireAuth:!0,showError:!1}),aa=e=>E(`/api/orders/${e}`,{requireAuth:!0,showError:!1}),no=e=>E(`/api/orders/${e}/history`,{requireAuth:!0,showError:!1}),co=(e,t={})=>E("/api/orders",{method:"POST",body:JSON.stringify(e),requireAuth:!0,showError:!1,...t}),lo=()=>E("/api/health",{showError:!1}),he={orderStatusModifier(e=""){const t=String(e||"").toUpperCase();return t==="DELIVERED"?"delivered":t==="CANCELED"||t==="CANCELLED"?"canceled":t==="SHIPPED"?"shipped":"pending"},getItemCount(e={}){const t=Array.isArray(e.items)?e.items:[];return t.length?t.reduce((a,r)=>a+(Number(r.quantity)||1),0):Number(e.itemCount)||0},getLineCount(e={}){return(Array.isArray(e.items)?e.items:[]).length||Number(e.itemCount)||0},isProfileActiveOrder(e){const t=String((e==null?void 0:e.status)||"").toUpperCase();return!!t&&!["DELIVERED","CANCELED","CANCELLED"].includes(t)},async enrichOrdersList(e=[]){const t=e.filter(r=>!Array.isArray(r.items)||!r.items.length);if(!t.length)return e;const a=new Map;return await Promise.all(t.slice(0,30).map(async r=>{const i=await aa(r.id);i&&typeof i=="object"&&a.set(String(r.id),i)})),e.map(r=>a.get(String(r.id))||r)},async enrichProfileOrders(e=[]){const t=e.slice(0,2);return t.length?[...await Promise.all(t.map(async r=>{if(Array.isArray(r.items)&&r.items.length)return r;const i=await aa(r.id);return i&&typeof i=="object"?i:r})),...e.slice(2)]:e},async loadOrders(){const e=await Oa();return e===null?Ee("Orders could not be loaded."):{success:!0,orders:await this.enrichOrdersList(x(e))}},async loadOrderDetail(e){const[t,a]=await Promise.all([aa(e),no(e)]);return t===null?{success:!1,error:Ee("Order detail could not be loaded.").error}:{success:!0,order:t,history:a===null?[]:x(a),historyWarning:a===null?"Status history could not be loaded.":""}},async createOrder(e,t={}){const a=await co(e,{timeoutMs:25e3,...t});return a===null?Ee("Order could not be created."):{success:!0,order:a}},buildSuccessState(){return{checkoutConfirmOpen:!1,orderSuccess:null,checkoutError:"",orderSubmitting:!1}}},uo=e=>E(`/api/reviews/product/${e}`,{showError:!1}),po=()=>E("/api/reviews/my",{requireAuth:!0,showError:!1}),mo=e=>E("/api/reviews",{method:"POST",body:JSON.stringify(e),requireAuth:!0,showError:!1}),go=e=>E("/api/uploads/presign",{method:"POST",requireAuth:!0,showError:!1,body:JSON.stringify(e)}),De={reviewStats(e){const t=e.length,a=t?e.reduce((r,i)=>r+S(i.rating),0)/t:0;return{count:t,average:a}},async loadProductReviews(e){const t=await uo(e);return t===null?{reviews:null,error:g.lastApiError||"Reviews could not be loaded."}:{reviews:x(t).map($r)}},async loadMyReviews(){const e=await po();return e===null?Ee("Reviews could not be loaded."):{success:!0,items:Ji(e).map(Qi)}},parseReviewImageUrls(e){return String(e||"").split(/[\n,]+/).map(t=>t.trim()).filter(Boolean).slice(0,5)},validateReviewFiles(e){const t=new Set(["image/jpeg","image/png","image/webp"]),a=Array.from(e||[]);return a.length>5?{error:"Maximum 5 image files allowed.",files:[]}:a.find(c=>!t.has(c.type))?{error:"Only JPG, PNG and WEBP images are allowed.",files:[]}:a.find(c=>c.size>10*1024*1024)?{error:"Each image must be 10MB or smaller.",files:[]}:{files:a}},validateSubmitReview({productId:e,orderId:t,rating:a,content:r,manualImageUrlsText:i,files:c}){const d=[];(!e||!t)&&d.push("Product and order are required."),(a<1||a>5)&&d.push("Choose a rating from 1 to 5."),r||d.push("Review text is required.");const u=this.parseReviewImageUrls(i),p=this.validateReviewFiles(c);return p.error&&d.push(p.error),String(i||"").split(/[\n,]+/).filter(m=>m.trim()).length>5&&d.push("Maximum 5 image URLs allowed."),u.length+p.files.length>5&&d.push("Maximum 5 review images allowed."),{valid:d.length===0,errors:d,manualImageUrls:u,fileValidation:p}},async uploadReviewImages(e,{onProgress:t}={}){const a=[];for(let r=0;r<e.length;r+=1){const i=e[r];t==null||t(`Uploading image ${r+1} of ${e.length}...`,{index:r,total:e.length});const c=await go({fileName:i.name,contentType:i.type,folder:"reviews",fileSizeBytes:i.size});if(!(c!=null&&c.uploadUrl)||!(c!=null&&c.publicUrl))throw new Error(g.lastApiError||"Image upload could not be prepared.");const d=await fetch(c.uploadUrl,{method:"PUT",headers:{"Content-Type":i.type},body:i});if(!d.ok)throw new Error(`Image upload failed: HTTP ${d.status}`);a.push(c.publicUrl)}return t==null||t(a.length?"Images uploaded.":"",{done:!0}),a},async submitReview({productId:e,orderId:t,rating:a,content:r,imageUrls:i}){const c=await mo({productId:Number(e),orderId:Number(t),rating:Number(a),content:r,imageUrls:i});return c===null?Ee("Review could not be submitted."):{success:!0,response:c}}},Oe={getOrderPreview(e){return(e||[]).filter(t=>he.isProfileActiveOrder(t)).slice(0,2)},async loadSnapshot(){const[e,t,a,r]=await Promise.all([$t(),Oa(),De.loadMyReviews(),de.loadRecentlyViewed()]);return{userResponse:e,ordersResponse:t,reviewsResult:a,recentlyViewed:r}},async enrichProfileOrders(e){return he.enrichProfileOrders(e)},normalizeOrdersResponse(e){return e!==null?x(e):null},validateProfileUpdate({fullName:e,phone:t}){return!e||!t?{valid:!1,error:"Full name va phone majburiy."}:{valid:!0}},async updateProfile(e){return await oo(e)===null?{success:!1,error:g.lastApiError||"Profile yangilanmadi."}:{success:!0,user:await $t()||null}},async checkHealth(){return lo()}};function Et({action:e,icon:t,label:a,value:r=""}){const i=r!==""&&r!==null&&r!==void 0?`<strong class="app-profile-stat-value">${s(String(r))}</strong>`:"";return`
    <button class="app-profile-stat" type="button" data-profile-action="${s(e)}">
      <span class="app-profile-stat-icon app-profile-stat-icon--${s(e)}">${t}</span>
      <span class="app-profile-stat-label">${s(a)}</span>
      ${i}
    </button>
  `}function Ve({action:e,icon:t,label:a,trailing:r=""}){return`
    <button class="app-profile-menu-row" type="button" data-profile-action="${s(e)}">
      <span class="app-profile-menu-icon" aria-hidden="true">${t}</span>
      <span class="app-profile-menu-label">${s(a)}</span>
      ${r?`<span class="app-profile-menu-trailing">${r}</span>`:""}
      <svg class="app-profile-menu-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>
    </button>
  `}function ho({imageUrl:e="",name:t="Profile"}){return e?`<img class="app-profile-avatar" src="${s(e)}" alt="${s(t)}" loading="eager" decoding="async" />`:`
    <div class="app-profile-avatar app-profile-avatar--placeholder" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M20 21a8 8 0 1 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/></svg>
    </div>
  `}function fo({count:e=0,className:t="app-profile-notify-badge"}){if(e<=0)return"";const a=e>99?"99+":String(e);return`<span class="${s(t)}">${s(a)}</span>`}function Fr(e=""){return n(`status.${e}`)||e||n("common.unknown")}function zr(e=""){const t=String(e||"").toUpperCase();return t==="NEW"||t==="CONFIRMED"||t==="PACKED"?n("status.PENDING"):Fr(e)}function vo(){const e=ge(),t={uz:"O'zbek",en:"English",ru:"Русский",ko:"한국어"};return t[e]||t.en}function yo(e){const t=(Array.isArray(e.items)?e.items:[]).map(i=>Ia({...i,orderId:e.id})),a=t.slice(0,4).map(i=>`
    <img src="${s(i.image||C.placeholderImage)}" alt="" loading="eager" decoding="async" class="app-profile-order-thumb" />
  `).join(""),r=t.length>4?`<span class="app-profile-order-more">+${t.length-4}</span>`:"";return`
    <button class="app-profile-order-card" type="button" data-profile-order="${s(e.id)}">
      <span class="app-profile-order-status">${s(zr(e.status))}</span>
      <div class="app-profile-order-thumbs">${a||`<span class="app-profile-order-empty">${s(n("orders.items",{count:0}))}</span>`}${r}</div>
    </button>
  `}function bo(e){return`
    <form class="app-profile-edit profile-edit" id="profileEditForm">
      <h3>${s(n("profile.edit"))}</h3>
      <label>Email<input value="${s(e.email||"")}" readonly /></label>
      <label>${s(n("profile.fullName"))}<input id="profileFullName" value="${s(e.fullName||"")}" required /></label>
      <label>${s(n("profile.phone"))}<input id="profilePhone" value="${s(e.phone||"")}" required /></label>
      <label>${s(n("profile.imageUrl"))}<input id="profileImage" value="${s(e.profileImage||"")}" /></label>
      <button class="primary-button full" id="profileSaveButton" type="submit">${s(n("profile.save"))}</button>
      <p class="form-message" id="profileMessage"></p>
    </form>
  `}const oe={render(){var v,$;const e=P.user||{},t=ho({imageUrl:e.profileImage,name:e.fullName||"Profile"}),a=((v=g.orders)==null?void 0:v.length)||0,r=(($=l.myReviews)==null?void 0:$.length)||0,i=k.cartCoupon?1:0,d=(l.recentlyViewed||[]).slice(0,6).map((T,q)=>at(T,{screen:"profile-recent",position:q})).join(""),u=Oe.getOrderPreview(g.orders),p=fo({count:B.unreadCount}),m={orders:'<svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>',reviews:'<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',coupons:'<svg viewBox="0 0 24 24"><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"/><path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4z"/><path d="M12 8v8"/></svg>',feedback:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>'},h={promotions:'<svg viewBox="0 0 24 24"><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"/><path d="M12 3 20 8v4H4V8z"/></svg>',help:'<svg viewBox="0 0 24 24"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3z"/><path d="M14 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3z"/><path d="M8.5 11V7a3.5 3.5 0 1 1 7 0v4"/></svg>',news:'<svg viewBox="0 0 24 24"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11 6v12"/></svg>',language:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',privacy:'<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',terms:'<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>'};o.profileContent.innerHTML=`
      <div class="app-profile-page ${P.profileLoading?"is-loading":""}">
        <header class="app-profile-header">
          <h2>${s(n("profile.myProfile"))}</h2>
          <div class="app-profile-header-actions">
            <button class="app-profile-icon-btn" type="button" data-profile-action="notifications" aria-label="${s(n("notifications.title"))}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              ${p}
            </button>
            <button class="app-profile-icon-btn" type="button" data-profile-action="menu" aria-label="${s(n("profile.menu"))}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>
            </button>
          </div>
        </header>

        <section class="app-profile-user">
          ${t}
          <div class="app-profile-user-meta">
            <div class="app-profile-user-top">
              <h3>${s(e.fullName||n("profile.myProfile"))}</h3>
              <span class="app-profile-tier">${s(n("profile.tierWhite"))}</span>
            </div>
            <p class="app-profile-email">${s(e.email||"")}</p>
          </div>
        </section>

        <section class="app-profile-stats">
          ${Et({action:"orders",icon:m.orders,label:n("profile.ordersStat"),value:a})}
          ${Et({action:"reviews",icon:m.reviews,label:n("profile.reviewsStat"),value:r})}
          ${Et({action:"promotions",icon:m.coupons,label:n("profile.couponsStat"),value:i})}
          ${Et({action:"help",icon:m.feedback,label:n("profile.feedbackStat"),value:""})}
        </section>

        <section class="app-profile-section">
          <div class="app-profile-section-head">
            <h3>${s(n("profile.myOrders"))}</h3>
            <button class="app-profile-see-all" type="button" data-profile-action="orders">${s(n("profile.seeAll"))} ›</button>
          </div>
          <div class="app-profile-orders-rail">
            ${P.profileLoading&&!u.length?'<div class="app-profile-order-card skeleton-card"></div><div class="app-profile-order-card skeleton-card"></div>':u.length?u.map(T=>yo(T)).join(""):`<div class="app-profile-empty-block">${s(n("orders.none"))}</div>`}
          </div>
        </section>

        ${d?`
          <section class="app-profile-section app-profile-recent">
            <div class="app-profile-section-head">
              <h3>${s(n("home.recentlyViewed"))}</h3>
            </div>
            <div class="product-grid app-rail-grid">${d}</div>
          </section>
        `:""}

        <nav class="app-profile-menu" aria-label="${s(n("profile.settings"))}">
          ${Ve({action:"promotions",icon:h.promotions,label:n("profile.promotions")})}
          ${Ve({action:"help",icon:h.help,label:n("profile.help")})}
          ${Ve({action:"news",icon:h.news,label:n("profile.news")})}
          ${Ve({action:"language",icon:h.language,label:n("profile.language"),trailing:`<span>${s(vo())}</span>`})}
          ${Ve({action:"privacy",icon:h.privacy,label:n("profile.privacy")})}
          ${Ve({action:"terms",icon:h.terms,label:n("profile.terms")})}
        </nav>

        ${P.profileEditing?bo(e):""}
        ${P.profileMenuOpen?`
          <div class="app-profile-menu-sheet open" id="profileMenuSheet">
            <button class="app-profile-menu-row" type="button" data-profile-action="edit">${s(n("profile.edit"))}</button>
            <button class="app-profile-menu-row app-profile-menu-row--danger" type="button" data-profile-action="logout">${s(n("profile.logout"))}</button>
          </div>
        `:""}
      </div>
    `,Se(o.profileContent)},async loadSnapshot({isLoggedIn:e,loadUnreadCount:t,updateAuthUi:a}={}){if(!(e!=null&&e()))return;const r=++P.profileLoadSeq;P.profileLoading=!0,oe.render();try{const[i]=await Promise.all([Oe.loadSnapshot(),t==null?void 0:t()]),{userResponse:c,ordersResponse:d,reviewsResult:u,recentlyViewed:p}=i;if(r!==P.profileLoadSeq||(c&&(P.user=c,localStorage.setItem(C.storageKeys.user,JSON.stringify(c)),a==null||a()),d!==null&&(g.orders=Oe.normalizeOrdersResponse(d),P.profileLoading=!1,oe.render(),g.orders=await Oe.enrichProfileOrders(g.orders),r!==P.profileLoadSeq)))return;u.success&&(l.myReviews=u.items),p.length&&(l.recentlyViewed=p)}catch{}finally{r===P.profileLoadSeq&&(P.profileLoading=!1,o.profileDrawer.classList.contains("open")&&oe.render())}},async handleAction(e,t={}){var c,d,u,p,m,h,v,$,T,q,I,O,L,z,ee,Me,it,st,ot,nt,ct,lt,dt,ut,pt,mt;const a=e.target.closest("[data-profile-order]");if(a){(c=t.closeProfile)==null||c.call(t),await((d=t.showOrders)==null?void 0:d.call(t)),await((u=t.openOrderDetail)==null?void 0:u.call(t,a.dataset.profileOrder));return}const r=e.target.closest("[data-profile-action]");if(!r)return;const i=r.dataset.profileAction;if(i==="menu"){P.profileMenuOpen=!P.profileMenuOpen,oe.render();return}if(i==="edit"){P.profileMenuOpen=!1,P.profileEditing=!P.profileEditing,oe.render();return}if(i==="logout"){P.profileMenuOpen=!1,(p=t.clearAuth)==null||p.call(t),(m=t.closeProfile)==null||m.call(t),(h=t.showToast)==null||h.call(t,n("profile.loggedOut"));return}if(i==="orders"){(v=t.closeProfile)==null||v.call(t),await(($=t.showOrders)==null?void 0:$.call(t));return}if(i==="favorites"){(T=t.closeProfile)==null||T.call(t),await((q=t.openFavorites)==null?void 0:q.call(t));return}if(i==="reviews"){(I=t.closeProfile)==null||I.call(t),await((O=t.openMyReviews)==null?void 0:O.call(t));return}if(i==="notifications"){(L=t.closeProfile)==null||L.call(t),await((z=t.openNotifications)==null?void 0:z.call(t));return}if(i==="language"){const He=$a,It=He.indexOf(ge()),w=He[(It+1)%He.length];(ee=t.setLanguage)==null||ee.call(t,w),o.languageSelect&&(o.languageSelect.value=w),(Me=t.applyTranslations)==null||Me.call(t),oe.render();return}if(i==="privacy"){P.profileMenuOpen=!1,(it=t.closeProfile)==null||it.call(t),(st=t.openPrivacy)==null||st.call(t);return}if(i==="terms"){P.profileMenuOpen=!1,(ot=t.closeProfile)==null||ot.call(t),(nt=t.openTerms)==null||nt.call(t);return}if(i==="promotions"||i==="news"){(ct=t.showToast)==null||ct.call(t,n("profile.comingSoon"),"info");return}if(i==="help"){P.profileMenuOpen=!1,(lt=t.closeProfile)==null||lt.call(t),(dt=t.openSupport)==null||dt.call(t);return}if(i==="addresses"||i==="receivers"){(ut=t.closeProfile)==null||ut.call(t),await((pt=t.prepareCheckout)==null?void 0:pt.call(t));return}(mt=t.showToast)==null||mt.call(t,n("profile.comingSoon"),"info")}},wo=e=>E("/api/auth/login",{method:"POST",body:JSON.stringify(e),showError:!1,silentAuth:!0}),ko=e=>E("/api/auth/register",{method:"POST",body:JSON.stringify(e),showError:!1,silentAuth:!0}),So=e=>E("/api/auth/firebase",{method:"POST",body:JSON.stringify(e),showError:!1,silentAuth:!0}),V={getAccessToken(e){if(!e||typeof e!="object")return"";const t=e.data&&typeof e.data=="object"?e.data:null;return e.accessToken||(t==null?void 0:t.accessToken)||e.token||(t==null?void 0:t.token)||e.jwt||(t==null?void 0:t.jwt)||""},extractSession(e,{email:t=""}={}){var u,p,m,h,v,$;const a=e!=null&&e.data&&typeof e.data=="object"?{...e,...e.data}:e||{},r=this.getAccessToken(e),i={id:a.id??a.userId??((u=a.user)==null?void 0:u.id)??null,email:a.email||((p=a.user)==null?void 0:p.email)||t||"",fullName:a.fullName||((m=a.user)==null?void 0:m.fullName)||a.name||"",phone:a.phone||((h=a.user)==null?void 0:h.phone)||"",profileImage:a.profileImage||((v=a.user)==null?void 0:v.profileImage)||""},c=a.role||(($=a.user)==null?void 0:$.role)||"",d=a.expiresIn??null;return{token:r,user:i,role:c,expiresIn:d,source:a}},persistSession({token:e,user:t,role:a}){e&&localStorage.setItem(C.storageKeys.accessToken,e),localStorage.setItem(C.storageKeys.user,JSON.stringify(t||{})),localStorage.setItem(C.storageKeys.role,a||"")},clearSession(){localStorage.removeItem(C.storageKeys.accessToken),localStorage.removeItem(C.storageKeys.legacyAccessToken),localStorage.removeItem(C.storageKeys.user),localStorage.removeItem(C.storageKeys.legacyUser),localStorage.removeItem(C.storageKeys.role)},saveAuth(e,t,a={}){const r=this.extractSession(e,a);return this.persistSession(r),t.accessToken=r.token,t.user=r.user,t.role=r.role,r},clearAuthState(e,t){this.clearSession(),e.accessToken="",e.user=null,e.role="",t.myReviews=[],t.myReviewsLoading=!1,t.myReviewsError=""},isLoggedIn(){return!!St()},async validateAuthOnStartup(){if(!St())return{authenticated:!1};const e=await $t({silentAuth:!0});return e?(localStorage.setItem(C.storageKeys.user,JSON.stringify(e)),{authenticated:!0,profile:e}):g.lastApiStatus===401?{authenticated:!1,invalid:!0}:{authenticated:!0,profile:null}},async preloadProfileData(){const[e,t,a]=await Promise.all([$t({silentAuth:!0}),Oa(),De.loadMyReviews()]);let r=null;return t!==null&&(r=await Oe.enrichProfileOrders(x(t))),{userResponse:e,orders:r,reviewsResult:a}},isValidEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)},validateLoginForm(e,t){const a=[];return(!e||!this.isValidEmail(e))&&a.push({field:"loginEmail",messageKey:"auth.emailRequired"}),(!t||t.length<6)&&a.push({field:"loginPassword",messageKey:"auth.passwordMin"}),{valid:a.length===0,errors:a}},validateRegisterForm({fullName:e,email:t,phone:a,password:r,confirmPassword:i}){const c=[];return e||c.push({field:"registerFullName",messageKey:"auth.fullNameRequired"}),(!t||!this.isValidEmail(t))&&c.push({field:"registerEmail",messageKey:"auth.emailRequired"}),a||c.push({field:"registerPhone",messageKey:"auth.phoneRequired"}),(!r||r.length<6)&&c.push({field:"registerPassword",messageKey:"auth.passwordMin"}),r!==i&&c.push({field:"registerConfirmPassword",messageKey:"auth.passwordMismatch"}),{valid:c.length===0,errors:c}},async submitLogin({email:e,password:t}){const a=await wo({email:e,password:t});if(this.getAccessToken(a))return{success:!0,response:a};const i=g.lastApiStatus;return i===401?{success:!1,error:"Email yoki parol noto‘g‘ri.",status:i}:{success:!1,error:g.lastApiError||"Login muvaffaqiyatsiz. Qayta urinib ko‘ring.",status:i}},async submitRegister({fullName:e,email:t,phone:a,password:r}){const i=await ko({fullName:e,email:t,phone:a,password:r});return i===null?{success:!1,error:g.lastApiError||"Email allaqachon mavjud yoki server javob bermadi."}:{success:!0,response:i,email:t}},async submitFirebaseLogin(e){const t=await So({idToken:e});return this.getAccessToken(t)?{success:!0,response:t}:{success:!1,error:g.lastApiError||"Server Google hisobini qabul qilmadi."}},mapFirebaseError(e){return e==="auth/popup-closed-by-user"||e==="auth/cancelled-popup-request"?{cancelled:!0}:e==="auth/popup-blocked"?{cancelled:!1,message:"Popup bloklandi. Brauzerda popup'ga ruxsat bering."}:{cancelled:!1,message:"Google bilan kirishda xatolik yuz berdi."}}},Co={apiKey:"AIzaSyAh668pltxmHVtAi_dN1cLO2faTqRyVbUU",authDomain:"cosmetic-app-75fb9.firebaseapp.com",projectId:"cosmetic-app-75fb9",storageBucket:"cosmetic-app-75fb9.firebasestorage.app",messagingSenderId:"1075730526246",appId:"1:1075730526246:web:ac4b809f7353e4bbac36e7",measurementId:"G-KVHDLM71LR"};let Lt=null;function $o(){if(!Lt){const e=yi(Co);Lt=bi(e),Lt.useDeviceLanguage()}return Lt}async function Po(){const e=$o(),t=new fi;return t.setCustomParameters({prompt:"select_account"}),(await vi(e,t)).user.getIdToken()}function Ur(e){k.cartItems=e,k.cart=e,k.cartCount=e.reduce((t,a)=>t+a.quantity,0),k.cartTotal=e.reduce((t,a)=>t+a.lineTotal,0)}function ha(){Ur([]),k.cartLoading=!1,k.cartError="",k.cartUpdatingIds=new Set,k.cartSelectedIds=new Set,k.cartKnownItemIds=new Set}function Hr(e,t="Rating"){return Vt({rating:e,label:t})}function Ao({stats:e,distribution:t,reviewsLabel:a="reviews"}){return`
    <div class="reviews-summary-grid">
      <div class="reviews-avg">
        <strong>${e.average.toFixed(1)}</strong>
        ${Vt({rating:e.average})}
        <p class="hint">${e.count} ${s(a)}</p>
      </div>
      <div class="rating-bars">
        ${t.map(r=>`
          <div class="rating-bar-row">
            <span>${r.star}★</span>
            <div class="rating-bar-track"><div class="rating-bar-fill" style="width:${r.pct}%"></div></div>
            <span>${r.count}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `}function Io({review:e,helpful:t=!1,verifiedLabel:a="Verified purchase",noTextLabel:r="No text review",helpfulLabel:i="Helpful"}){var d;const c=!!e.orderId;return`
    <article class="review-card-premium">
      <div class="review-head">
        <div>
          <strong>${s(e.userName)}</strong>
          ${c?`<span class="review-verified">✓ ${s(a)}</span>`:""}
          <p class="hint">${Ea(e.createdAt)}</p>
        </div>
        ${Vt({rating:e.rating})}
      </div>
      <p>${s(e.content||r)}</p>
      ${(d=e.imageUrls)!=null&&d.length?ReviewImages({imageUrls:e.imageUrls}):""}
      <button class="review-helpful ${t?"active":""}" data-review-helpful="${s(e.id)}" type="button">
        👍 ${s(i)}${t?" ✓":""}
      </button>
    </article>
  `}function Eo(e){return De.reviewStats(e)}function Lo(){return de.getRecentProductIds()}function To(e,t){const a=String(e??"");return a.length<=t?a:`${a.slice(0,Math.max(0,t-1)).trimEnd()}…`}const R={renderDetailLoading(e=!1){const t=e?o.productDetailPageContent:o.detailContent;t.innerHTML=`
      ${e?'<div class="breadcrumbs"><button data-route-home type="button">Home</button><span>/</span><span>Loading</span></div>':`
        <div class="drawer-head">
          <h2>Mahsulot yuklanmoqda</h2>
          <button class="icon-button" data-close-detail type="button" aria-label="Yopish">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
      `}
      <div class="detail-layout">
        <div class="skeleton-card"></div>
        <div>
          <div class="skeleton-card"></div>
        </div>
      </div>
    `},renderProductDetailError(){o.productDetailPageContent.innerHTML=`
      <div class="detail-error-page">
        <strong>${s(n("product.notFound"))}</strong>
        <p>${s(l.detailError||"Mahsulot topilmadi.")}</p>
        <button class="primary-button" data-route-home type="button">${s(n("product.backToShopping"))}</button>
      </div>
    `},renderProductDetail(e){const t=e.variants.find(q=>String(q.id)===String(l.selectedVariantId))||null,a=[...new Set([e.image,...e.images,...e.detailImages].filter(Boolean))],r=Math.min(l.pdpGalleryIndex||0,Math.max(0,a.length-1)),i=a[r]||e.image,c=(t==null?void 0:t.discountPrice)??(t==null?void 0:t.price)??e.finalPrice,d=(t==null?void 0:t.price)??e.originalPrice,u=(t==null?void 0:t.stock)??e.stock,p=A.favoriteIds.has(String(e.id))||!!e.favorite,m=rt().includes(String(e.id)),h=g.currentRoute==="product",v=h?o.productDetailPageContent:o.detailContent,$=S(u)>0&&S(u)<=5,T=new Date(Date.now()+3*864e5).toLocaleDateString(ge(),{weekday:"short",month:"short",day:"numeric"});v.innerHTML=`
      ${h?`
        <div class="breadcrumbs">
          <button data-route-home type="button">${s(n("product.home")||n("home.all"))}</button>
          <span>/</span>
          <button data-brand="${s(e.brand||"")}" type="button">${s(e.brand||n("header.catalog"))}</button>
          <span>/</span>
          <button data-category="${s(e.category||"ALL")}" type="button">${s(e.category?fe(e.category):n("header.catalog"))}</button>
          <span>/</span>
          <span>${s(To(e.name,42))}</span>
        </div>
      `:`
        <div class="drawer-head">
          <h2>${s(n("product.viewDetails"))}</h2>
          <button class="icon-button" data-close-detail type="button" aria-label="Yopish">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
      `}
      <div class="pdp-layout">
        <div class="pdp-gallery-wrap">
          <div class="pdp-main-image" data-pdp-zoom>
            <img src="${s(i)}" alt="${s(e.name)}" id="pdpMainImage" />
          </div>
          ${a.length>1?`
            <div class="pdp-thumbs" role="tablist">
              ${a.slice(0,10).map((q,I)=>`
                <button class="pdp-thumb ${I===r?"active":""}" type="button" data-pdp-thumb="${I}" role="tab" aria-selected="${I===r}">
                  <img src="${s(q)}" alt="" loading="lazy" />
                </button>
              `).join("")}
            </div>
          `:""}
          <button class="ghost-button full" type="button" data-pdp-fullscreen style="margin-top:8px">${s(n("product.fullscreen"))}</button>
          <div class="media-placeholder">${s(n("product.video360Placeholder"))}</div>
        </div>
        <div class="pdp-purchase-card">
          <div class="pdp-badges">
            <span class="pdp-badge pdp-badge--auth">✓ ${s(n("product.authentic"))}</span>
            <span class="pdp-badge pdp-badge--official">★ ${s(n("product.officialStore"))}</span>
            ${$?`<span class="pdp-badge pdp-badge--stock-low">${s(n("product.lowStock"))}</span>`:""}
          </div>
          <p class="hint brand-name">${s(e.brand||e.category)}</p>
          <h2 class="detail-title">${s(e.name)}</h2>
          <div class="pdp-price-block">
            <h3>${D(c)}</h3>
            ${d>c?`<p class="old-price">${D(d)}</p>`:""}
          </div>
          <div class="pdp-price-breakdown">
            <div><span>${s(n("product.listPrice"))}</span><span>${D(d)}</span></div>
            ${e.discountPercent?`<div><span>${s(n("product.discount"))}</span><span>-${e.discountPercent}%</span></div>`:""}
            <div><strong>${s(n("cart.subtotal"))}</strong><strong>${D(c)}</strong></div>
            <p class="hint">${s(n("product.installmentPlaceholder"))}</p>
          </div>
          <p class="hint">${Hr(e.ratingAvg)} ${e.ratingAvg.toFixed(1)} (${e.reviewCount}) · ${s(n("product.sold",{count:e.soldCount}))}</p>
          <div class="pdp-actions-row" style="margin:12px 0">
            <button class="secondary-button detail-favorite ${p?"active":""}" data-detail-favorite="${s(e.id)}" type="button">${s(n(p?"product.saved":"product.save"))}</button>
            <button class="secondary-button ${m?"active":""}" data-compare="${s(e.id)}" type="button">${s(n("product.compare"))}</button>
          </div>
          ${e.variants.length?R.renderVariantSelectors(e):`<p class="hint">${s(n("product.variantUnavailable"))}</p>`}
          <p class="hint">${S(u)>0?s(n("product.stock",{count:u})):s(n("product.outOfStock"))}</p>
          <div class="quantity-row">
            <button class="secondary-button" data-qty="minus" type="button" aria-label="Decrease">-</button>
            <input id="quantityInput" value="${l.selectedQuantity}" inputmode="numeric" aria-label="${s(n("product.quantity"))}" />
            <button class="secondary-button" data-qty="plus" type="button" aria-label="Increase">+</button>
          </div>
          <div class="pdp-shipping-estimate">
            <strong>${s(n("product.estimatedDelivery"))}</strong>
            <p class="pdp-delivery-countdown">🚚 ${s(T)}</p>
            <p class="hint">${s(n("product.delivery"))}</p>
          </div>
          <div class="cart-coupon" style="margin-top:12px">
            <input type="text" placeholder="${s(n("cart.couponPlaceholder"))}" data-pdp-coupon />
            <button class="secondary-button" type="button" data-pdp-apply-coupon>${s(n("cart.applyCoupon"))}</button>
          </div>
          <div class="pdp-actions">
            <button class="primary-button full" data-detail-add type="button">${s(n("product.addToCartFull"))}</button>
          </div>
          <div class="delivery-info">
            <span>${s(n("product.secure"))}</span>
            <span>${s(n("product.original"))}</span>
          </div>
        </div>
      </div>
      <div class="pdp-tabs">
        <nav class="pdp-tab-nav" role="tablist">
          <button class="pdp-tab-btn ${l.pdpActiveTab==="description"?"active":""}" data-pdp-tab="description" type="button" role="tab">${s(n("product.description"))}</button>
          <button class="pdp-tab-btn ${l.pdpActiveTab==="details"?"active":""}" data-pdp-tab="details" type="button" role="tab">${s(n("product.details"))}</button>
          <button class="pdp-tab-btn ${l.pdpActiveTab==="reviews"?"active":""}" data-pdp-tab="reviews" type="button" role="tab">${s(n("product.reviews"))}</button>
        </nav>
        <div class="pdp-tab-panel" ${l.pdpActiveTab==="description"?"":"hidden"} data-pdp-panel="description">
          <p class="hint">${s(e.description||n("common.unavailable"))}</p>
          ${e.detailImages.length?`<div class="detail-image-stack">${e.detailImages.map(q=>`<img src="${s(q)}" alt="" loading="lazy" class="img-loading" />`).join("")}</div>`:""}
        </div>
        <div class="pdp-tab-panel" ${l.pdpActiveTab==="details"?"":"hidden"} data-pdp-panel="details">
          <p class="hint">${s(n("home.categories"))}: ${s(e.category?fe(e.category):"-")}</p>
          <p class="hint">${s(n("filter.brand"))}: ${s(e.brand||"-")}</p>
        </div>
        <div class="pdp-tab-panel reviews-premium" ${l.pdpActiveTab==="reviews"?"":"hidden"} data-pdp-panel="reviews">
          ${R.renderProductReviews(e.id)}
        </div>
      </div>
      ${h?R.renderRecommendations():""}
      ${h?R.renderFrequentlyBought(e):""}
      ${h?R.renderRecentlyViewedStrip():""}
      ${h?`
        <div class="mobile-buy-bar">
          <strong>${D(c)}</strong>
          <button class="primary-button" data-detail-add type="button">${s(n("product.addToCart"))}</button>
        </div>
      `:""}
    `,Rr(v),Se(v),R.initPdpGallerySwipe(v)},renderVariantSelectors(e){const t=[],a=[];e.variants.forEach(c=>{const u=String(c.label||"").split(/[\/,\-]/).map(p=>p.trim()).filter(Boolean);u[0]&&t.push(u[0]),u[1]&&a.push(u[1])});const r=[...new Set(t)],i=[...new Set(a)];return r.length>1||i.length>1?`
        ${r.length?`<div class="pdp-variant-section"><p class="pdp-variant-label">${s(n("filter.color"))}</p><div class="color-swatches">${r.map(c=>`<button class="color-swatch" type="button" data-variant-color="${s(c)}">${s(c)}</button>`).join("")}</div></div>`:""}
        ${i.length?`<div class="pdp-variant-section"><p class="pdp-variant-label">${s(n("filter.size"))}</p><div class="size-options">${e.variants.map(c=>{const d=String(c.id)===String(l.selectedVariantId),u=Number(c.stock||0)<=0;return`<button class="size-option ${d?"active":""}" data-variant="${s(c.id)}" type="button" ${u?"disabled":""}>${s(c.label||c.id)}</button>`}).join("")}</div></div>`:""}
      `:R.renderVariantButtons(e)},renderPdpProductStrip(e,t,a){return t.length?`
      <section class="recommended-section app-feed-block app-feed-rail">
        <div class="app-section-head">
          <h2>${s(e)}</h2>
        </div>
        <div class="product-grid app-rail-grid">
          ${t.map((r,i)=>at(r,{screen:a,position:i})).join("")}
        </div>
      </section>
    `:""},renderFrequentlyBought(e){const t=(l.recommendedOthers||l.recommendedProducts||[]).slice(0,3);return t.length?R.renderPdpProductStrip(n("product.frequentlyBought"),t,"fbt"):""},renderRecentlyViewedStrip(){return!Lo().filter(t=>{var a;return String(t)!==String((a=l.selectedDetailProduct)==null?void 0:a.id)}).length||!l.recentlyViewed.length?"":R.renderPdpProductStrip(n("home.recentlyViewed"),l.recentlyViewed.slice(0,6),"recent")},initPdpGallerySwipe(e){const t=e.querySelector(".pdp-main-image");if(!t||!("ontouchstart"in window))return;let a=0;t.addEventListener("touchstart",r=>{a=r.touches[0].clientX},{passive:!0}),t.addEventListener("touchend",r=>{var d,u,p;const i=r.changedTouches[0].clientX-a;if(Math.abs(i)<40)return;const c=[...new Set([(d=l.selectedDetailProduct)==null?void 0:d.image,...((u=l.selectedDetailProduct)==null?void 0:u.images)||[],...((p=l.selectedDetailProduct)==null?void 0:p.detailImages)||[]].filter(Boolean))];l.pdpGalleryIndex=Math.max(0,Math.min(c.length-1,(l.pdpGalleryIndex||0)+(i<0?1:-1))),R.renderProductDetail(l.selectedDetailProduct)},{passive:!0})},renderRecommendations(){if(l.recommendationsLoading)return`
        <section class="recommended-section app-feed-block app-feed-rail">
          <div class="app-section-head">
            <h2>${s(n("home.recommended"))}</h2>
          </div>
          <div class="product-grid app-rail-grid">
            <div class="skeleton-card"></div><div class="skeleton-card"></div><div class="skeleton-card"></div><div class="skeleton-card"></div>
          </div>
        </section>
      `;if(l.recommendationsError)return`
        <section class="recommended-section app-feed-block app-feed-rail">
          <div class="detail-error-page compact">
            <strong>Recommendations unavailable</strong>
            <p>${s(l.recommendationsError)}</p>
          </div>
        </section>
      `;const e=[[n("home.similar"),l.recommendedSimilar||[],"recommendations-similar"],[n("home.others"),l.recommendedOthers||[],"recommendations-others"]].filter(([,t])=>t.length);return e.length?e.map(([t,a,r])=>R.renderPdpProductStrip(t,a,r)).join(""):l.recommendedProducts.length?R.renderPdpProductStrip(n("home.recommended"),l.recommendedProducts,"recommendations"):""},renderProductReviews(e){var p;const t=String(e);let a=[...l.productReviewsByProductId[t]||[]];const r=l.productReviewsLoading[t],i=l.productReviewsError[t];if(r)return'<div class="reviews-loading"><div class="skeleton-card"></div><div class="skeleton-card"></div></div>';if(i)return`
        <div class="reviews-inline-error">
          <p>${s(i)}</p>
          <button class="secondary-button" data-reviews-retry="${s(e)}" type="button">${s(n("common.tryAgain"))}</button>
        </div>
      `;if(l.reviewSearchQuery){const m=l.reviewSearchQuery.toLowerCase();a=a.filter(h=>String(h.content||"").toLowerCase().includes(m))}if(l.reviewFilterRating>0&&(a=a.filter(m=>S(m.rating)>=l.reviewFilterRating)),l.reviewSort==="helpful"?a.sort((m,h)=>(l.reviewHelpfulIds.has(String(h.id))?1:0)-(l.reviewHelpfulIds.has(String(m.id))?1:0)):l.reviewSort==="rating-high"?a.sort((m,h)=>S(h.rating)-S(m.rating)):l.reviewSort==="rating-low"&&a.sort((m,h)=>S(m.rating)-S(h.rating)),!a.length&&!((p=l.productReviewsByProductId[t])!=null&&p.length))return`<div class="reviews-empty"><strong>${s(n("reviews.none"))}</strong></div>`;const c=l.productReviewsByProductId[t]||[],d=Eo(c),u=[5,4,3,2,1].map(m=>{const h=c.filter(v=>Math.round(S(v.rating))===m).length;return{star:m,count:h,pct:c.length?h/c.length*100:0}});return`
      ${Ao({stats:d,distribution:u,reviewsLabel:n("product.reviews")})}
      <div class="reviews-toolbar">
        <input type="search" placeholder="${s(n("reviews.search"))}" value="${s(l.reviewSearchQuery||"")}" data-review-search />
        <select data-review-sort>
          <option value="newest" ${l.reviewSort==="newest"?"selected":""}>${s(n("reviews.sortNewest"))}</option>
          <option value="rating-high" ${l.reviewSort==="rating-high"?"selected":""}>${s(n("reviews.sortRatingHigh"))}</option>
          <option value="rating-low" ${l.reviewSort==="rating-low"?"selected":""}>${s(n("reviews.sortRatingLow"))}</option>
          <option value="helpful" ${l.reviewSort==="helpful"?"selected":""}>${s(n("reviews.sortHelpful"))}</option>
        </select>
        <select data-review-filter-rating>
          <option value="0">${s(n("reviews.allRatings"))}</option>
          ${[5,4,3,2,1].map(m=>`<option value="${m}" ${l.reviewFilterRating===m?"selected":""}>${m}★+</option>`).join("")}
        </select>
      </div>
      <div class="review-list">
        ${a.length?a.map(R.renderReviewCard).join(""):`<p class="hint">${s(n("search.noResults"))}</p>`}
      </div>
    `},renderReviewCard(e){return Io({review:e,helpful:l.reviewHelpfulIds.has(String(e.id)),verifiedLabel:n("reviews.verified"),noTextLabel:n("reviews.noText"),helpfulLabel:n("reviews.helpful")})},renderVariantButtons(e){return`
      <div class="variant-options">
        ${e.variants.map(t=>{const a=String(t.id)===String(l.selectedVariantId),r=Number(t.stock||0)<=0;return`
            <button class="variant-option ${a?"active":""}" data-variant="${s(t.id)}" ${r?"disabled":""} type="button">
              ${s(t.label||`Variant #${t.id}`)}
              ${t.price?` · ${s(D(t.discountPrice??t.price))}`:""}
            </button>
          `}).join("")}
      </div>
    `},renderAddToCartLoading(){document.querySelectorAll("[data-detail-add]").forEach(t=>{var r;const a=k.addingProductIds.has(String((r=l.selectedDetailProduct)==null?void 0:r.id));t.disabled=a,t.textContent=a?n("product.adding"):t.closest(".mobile-buy-bar")?n("product.addToCart"):n("product.addToCartFull")}),l.products.length&&ae(o.grid,l.products,n("home.noProducts"),{screen:g.currentGridScreen})}},Do=window.matchMedia("(prefers-reduced-motion: reduce)");function Wt(){return Do.matches}function Ro(e){!e||Wt()||(e.classList.add("animating"),window.setTimeout(()=>e.classList.remove("animating"),400))}function Mo(e,t){if(!e||!t||Wt())return;const a=document.getElementById("cartButton");if(!a)return;const r=a.getBoundingClientRect(),i=document.createElement("img");i.className="cart-fly",i.src=e,i.alt="",i.style.left=`${t.left}px`,i.style.top=`${t.top}px`,document.body.appendChild(i);const c=r.left+r.width/2-t.left-24,d=r.top+r.height/2-t.top-24;i.animate([{transform:"translate(0, 0) scale(1)",opacity:1},{transform:`translate(${c}px, ${d}px) scale(0.2)`,opacity:.6}],{duration:520,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}).finished.then(()=>i.remove())}let Za=0,ra=!1;function qo(){const e=document.querySelector(".site-header");if(!e)return;e.classList.add("header-glass");const t=()=>{ra||(ra=!0,requestAnimationFrame(()=>{const a=window.scrollY,r=a-Za;a>80&&r>8?e.classList.add("header-hidden"):(r<-4||a<40)&&e.classList.remove("header-hidden"),Za=a,ra=!1}))};window.addEventListener("scroll",t,{passive:!0})}function Bo(){const e=document.getElementById("homeView"),t=document.getElementById("productDetailPage"),a=new MutationObserver(()=>{const r=(t==null?void 0:t.hidden)===!1?t:e;!r||Wt()||(r.classList.remove("page-enter"),r.offsetWidth,r.classList.add("page-enter"))});e&&a.observe(e,{attributes:!0,attributeFilter:["hidden"]}),t&&a.observe(t,{attributes:!0,attributeFilter:["hidden"]})}function Oo(){let e=document.getElementById("offlineBanner");e||(e=document.createElement("div"),e.id="offlineBanner",e.className="offline-banner",e.textContent="You are offline. Some features may be unavailable.",document.body.appendChild(e));const t=()=>e.classList.toggle("visible",!navigator.onLine);window.addEventListener("online",t),window.addEventListener("offline",t),t()}function xo(e,t){if(Wt()||!t)return;const a=t.getBoundingClientRect(),r=Math.max(a.width,a.height),i=document.createElement("span");i.style.cssText=`
    position:absolute;border-radius:50%;pointer-events:none;
    width:${r}px;height:${r}px;
    left:${e.clientX-a.left-r/2}px;
    top:${e.clientY-a.top-r/2}px;
    background:rgba(255,255,255,0.35);
    transform:scale(0);opacity:1;
  `;const c=t.style.position;(!c||c==="static")&&(t.style.position="relative"),t.style.overflow="hidden",t.appendChild(i),i.animate([{transform:"scale(0)",opacity:1},{transform:"scale(2.5)",opacity:0}],{duration:500,easing:"ease-out"}).finished.then(()=>i.remove())}const G={async load(){if(!V.isLoggedIn()){ha(),N.render();return}k.cartLoading=!0,k.cartError="",N.render();const e=await ue.loadCart();if(k.cartLoading=!1,!e.success){if(e.sessionExpired){ha();return}k.cartError=e.error,N.render();return}Ur(e.items),N.render()},async add(e,t,a,{showLoginRequired:r}={}){if(!V.isLoggedIn()){r==null||r();return}const i=Math.max(1,Number(a||1)),c=await ce.resolveAddToCartVariant(e,t);if(c.navigateToProduct){Le(c.product.id);return}const d=c.variantId;if(!d){M(n("product.variantUnavailable"),"warning");return}k.addingProductIds.add(String(e)),R.renderAddToCartLoading(!0);const u=await ue.addItem(d,i);if(k.addingProductIds.delete(String(e)),R.renderAddToCartLoading(!1),u!==null){const p=document.querySelector(`[data-product="${e}"] .product-image`);p&&Mo(p.src,p.getBoundingClientRect()),M(n("cart.added"),"success"),await G.load()}},async removeItem(e){k.cartUpdatingIds.add(String(e)),N.render();const t=await ue.removeItem(e);k.cartUpdatingIds.delete(String(e)),t!==null?(M(n("cart.itemRemoved"),"success"),await G.load()):N.render()},async updateQuantity(e,t){const a=Math.max(1,Number(t||1));k.cartUpdatingIds.add(String(e)),N.render();const r=await ue.updateQuantity(e,a);k.cartUpdatingIds.delete(String(e)),r!==null?(M(n("cart.quantityUpdated"),"success"),await G.load()):N.render()},async removeSelected(){var t;const e=N.getSelectedCartItems();if(e.length){e.forEach(a=>k.cartUpdatingIds.add(String(a.id))),N.render();for(const a of e)await ue.removeItem(a.id),k.cartUpdatingIds.delete(String(a.id)),(t=k.cartSelectedIds)==null||t.delete(String(a.id));M(n("cart.itemRemoved"),"success"),await G.load()}},getTotals(){return N.getCartTotals()},getSelectedItems(){return N.getSelectedCartItems()}},Xe={pickDefaultVariant(e){return ce.pickDefaultVariant(e)},async loadDetailPage(e){var r;Zr(),g.currentRoute="product",l.detailLoading=!0,l.detailError="",l.selectedDetailProduct=null,l.recommendedProducts=[],l.recommendedSimilar=[],l.recommendedOthers=[],l.recommendationsError="",R.renderDetailLoading(!0);const t=l.products.find(i=>String(i.id)===String(e))||{},a=await ce.loadProduct(e,t);if(l.detailLoading=!1,!a.id){l.detailError=g.lastApiError||"Mahsulot topilmadi.",R.renderProductDetailError();return}a.favorite=A.favoriteIds.has(String(a.id))||a.favorite,l.selectedDetailProduct=a,l.selectedVariantId=((r=Xe.pickDefaultVariant(a))==null?void 0:r.id)||null,l.selectedQuantity=1,l.pdpGalleryIndex=0,l.pdpActiveTab="description",l.reviewSearchQuery="",l.reviewFilterRating=0,document.title=`${a.name} - BEAUTY SKIN KOREA`,de.addRecentProduct(a.id),Fs(a.id),R.renderProductDetail(a),await Xe.loadReviews(a.id),await Xe.loadRecommendations(a)},async loadRecommendations(e){var a;l.recommendationsLoading=!0,l.recommendationsError="",R.renderProductDetail(e);const t=await ce.loadRecommendations(e,g.sessionId);if(t.mode==="api"){l.recommendationsLoading=!1,l.recommendedProducts=[],l.recommendedSimilar=t.similar,l.recommendedOthers=t.others,R.renderProductDetail(l.selectedDetailProduct);return}l.recommendationsLoading=!1,t.failed&&(l.recommendationsError=g.lastApiError||"Recommendations could not be loaded."),l.recommendedProducts=t.fallback.map(r=>({...r,favorite:A.favoriteIds.has(String(r.id))||r.favorite})),l.recommendedSimilar=[],l.recommendedOthers=[],((a=l.selectedDetailProduct)==null?void 0:a.id)!==void 0&&String(l.selectedDetailProduct.id)===String(e.id)&&R.renderProductDetail(l.selectedDetailProduct)},async loadReviews(e){var i,c;if(!e)return;const t=String(e);l.productReviewsLoading[t]=!0,l.productReviewsError[t]="",((i=l.selectedDetailProduct)==null?void 0:i.id)!==void 0&&String(l.selectedDetailProduct.id)===t&&R.renderProductDetail(l.selectedDetailProduct);const{reviews:a,error:r}=await De.loadProductReviews(e);l.productReviewsLoading[t]=!1,a===null?l.productReviewsError[t]=r:l.productReviewsByProductId[t]=a,((c=l.selectedDetailProduct)==null?void 0:c.id)!==void 0&&String(l.selectedDetailProduct.id)===t&&R.renderProductDetail(l.selectedDetailProduct)},rerender(){l.selectedDetailProduct&&R.renderProductDetail(l.selectedDetailProduct)}},No=6e4;async function xa(e,{method:t="GET",body:a,query:r,timeoutMs:i=No}={}){const c=br(e,r),d={Accept:"application/json",...a?{"Content-Type":"application/json"}:{}},u=St();u&&(d.Authorization=`Bearer ${u}`);const p=new AbortController;let m=!1;const h=i>0?setTimeout(()=>{m=!0,p.abort()},i):null;try{xe()&&console.info("[ASSISTANT REQUEST]",{path:e,method:t,url:c,body:a,query:r});const v=await fetch(c,{method:t,headers:d,body:a?JSON.stringify(a):void 0,signal:p.signal}),$=await v.text(),T=$?yr($):null;return xe()&&console.info("[ASSISTANT RESPONSE]",{url:c,status:v.status,payload:T}),v.ok?{ok:!0,status:v.status,data:T,error:null}:{ok:!1,status:v.status,data:null,error:na(T,v.status)}}catch(v){return(v==null?void 0:v.name)==="AbortError"?{ok:!1,status:m?408:0,data:null,error:m?"timeout":"aborted"}:{ok:!1,status:0,data:null,error:"network"}}finally{h&&clearTimeout(h)}}function Fo(e){return xa("/api/assistant/chat",{method:"POST",body:e})}function zo(e){return xa("/api/assistant/reset",{method:"POST",body:e})}function Uo({conversationId:e,userId:t}={}){return xa("/api/assistant/history",{method:"GET",query:{conversationId:e,...t?{userId:t}:{}}})}const Pt=C.storageKeys.assistantConversationId;function Xa(){return`conv-${Date.now()}-${Math.random().toString(36).slice(2,10)}`}function er(){return localStorage.getItem(Pt)||""}function Tt(e){if(!e){localStorage.removeItem(Pt);return}localStorage.setItem(Pt,e)}function Ho(){localStorage.removeItem(Pt)}function tr(){return fr()}function _o(){const e=ge();return{uz:"uz-UZ",en:"en-US",ru:"ru-RU",ko:"ko-KR"}[e]||Intl.DateTimeFormat().resolvedOptions().locale||"uz-UZ"}function Vo(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}catch{return"UTC"}}function _r(){return`msg-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}Object.freeze({conversationId:Pt,sessionId:C.storageKeys.sessionId});const fa=C.placeholderImage,je=Object.freeze({open_product:"open_product",view_product:"view_product",add_to_cart:"add_to_cart",open_cart:"open_cart",open_category:"open_category",open_brand:"open_brand"}),jo=Object.freeze({open_product:"open_product",view_product:"view_product",add_to_cart:"add_to_cart",open_cart:"open_cart",open_category:"open_category",open_brand:"open_brand"});function Ce(...e){xe()&&console.info("[Assistant]",...e)}function te(...e){for(const t of e)if(t!=null&&t!=="")return t}function ft(e,t=0){const a=Number(e);return Number.isFinite(a)?a:t}function be(e,t=""){return e==null?t:String(e)}function Dt(e){if(!Array.isArray(e)||!e.length)return"";const t=e[0];return t?typeof t=="string"?t:t.imageUrl||t.image_url||t.url||t.src||t.image||"":""}function Ko(e={},t={}){const a=[{source:"image",value:e.image},{source:"imageUrl",value:e.imageUrl},{source:"image_url",value:e.image_url},{source:"mainImageUrl",value:e.mainImageUrl},{source:"main_image_url",value:e.main_image_url},{source:"thumbnail",value:e.thumbnail},{source:"thumbnailUrl",value:e.thumbnailUrl},{source:"metadata.image",value:t.image},{source:"metadata.imageUrl",value:t.imageUrl},{source:"metadata.image_url",value:t.image_url},{source:"metadata.images[0]",value:Dt(t.images)},{source:"images[0]",value:Dt(e.images)},{source:"detailImages[0]",value:Dt(e.detailImages)},{source:"media[0]",value:Dt(e.media)}];for(const r of a){const i=be(r.value).trim();if(i)return{image:i,usedFallback:!1,source:r.source}}return Ce("Missing image fallback",{id:Vr(e,t)}),{image:fa,usedFallback:!0,source:"placeholder"}}function Vr(e={},t={}){const a=te(e.id,e.productId,e.product_id,e.productID,t.id,t.productId,t.product_id,e.sku,t.sku);return a==null||a===""?null:a}function jr(e){if(!e||typeof e!="object")return null;const t=e.metadata&&typeof e.metadata=="object"?e.metadata:e.meta&&typeof e.meta=="object"?e.meta:{},a=e.product&&typeof e.product=="object"?e.product:null,r=a?{...a,...e}:e,i=r.metadata&&typeof r.metadata=="object"?{...t,...r.metadata}:t,c=Vr(r,i);if(c===null)return null;const{image:d,usedFallback:u,source:p}=Ko(r,i),m=ft(te(r.price,r.originalPrice,r.original_price,i.price),0),h=ft(te(r.discountPrice,r.discount_price,r.finalPrice,r.final_price,r.salePrice,r.sale_price,i.discountPrice,i.discount_price,m),m),v=ft(te(r.rating,r.ratingAvg,r.rating_avg,r.averageRating,i.rating,i.ratingAvg),0),$=ft(te(r.stock,r.quantity,r.qty,i.stock),0),T=be(te(r.title,r.name,r.productName,r.product_name,i.title,i.name),"Product"),q=be(te(r.brand,r.brandName,r.brand_name,i.brand),""),I=be(te(r.category,r.categoryName,r.category_code,i.category),""),O=be(te(r.currency,r.currencyCode,i.currency),""),L=be(te(r.url,r.productUrl,r.product_url,i.url),""),z=!!te(r.favorite,r.isFavorite,r.is_favorite,!1);return{id:c,title:T,name:T,brand:q,price:m,discountPrice:h,rating:v,stock:$,image:d,currency:O,category:I,favorite:z,url:L,ratingAvg:v,reviewCount:ft(te(r.reviewCount,r.review_count),0),originalPrice:m,finalPrice:h>0?h:m,_imageFallback:u,_imageSource:p}}function Go(e,t){const a=String(t.id);e.set(a,t)}function Wo(e=[]){const t=new Map;for(const r of e||[]){const i=jr(r);i&&Go(t,i)}const a=[...t.values()];return Ce("Normalized Products",a),a}function Kr(e={}){var r;const t=[];Array.isArray(e.products)&&t.push(...e.products),Array.isArray((r=e.data)==null?void 0:r.products)&&t.push(...e.data.products);const a=Array.isArray(e.tool_calls)?e.tool_calls:Array.isArray(e.toolCalls)?e.toolCalls:[];for(const i of a){const c=String((i==null?void 0:i.tool)||(i==null?void 0:i.name)||(i==null?void 0:i.type)||"").toLowerCase(),d=(i==null?void 0:i.response)||(i==null?void 0:i.result)||(i==null?void 0:i.output)||(i==null?void 0:i.data)||{};(c.includes("product")||Array.isArray(d==null?void 0:d.products)||Array.isArray(i==null?void 0:i.products))&&(Array.isArray(d.products)&&t.push(...d.products),Array.isArray(i.products)&&t.push(...i.products),d.product&&t.push(d.product),i.product&&t.push(i.product))}return Wo(t)}function Yo(e){const t=String(e||"").trim().toLowerCase().replace(/[\s-]+/g,"_");return jo[t]||null}function Qo(e={}){if(!e||typeof e!="object")return null;const t=e.payload&&typeof e.payload=="object"?e.payload:e.data&&typeof e.data=="object"?e.data:{},a=Yo(e.type||e.action||e.action_type||e.name||t.type);if(!a)return null;const r=te(t.productId,t.product_id,t.id,e.productId,e.product_id,e.id),i=r==null||r===""?null:String(r),c=te(t.variantId,t.variant_id,e.variantId,e.variant_id),d=c==null||c===""?null:String(c),u=be(te(t.category,t.categoryId,t.category_id,e.category),"")||null,p=be(te(t.brand,t.brandName,e.brand),"")||null,m={open_product:"View product",view_product:"View product",add_to_cart:"Add to cart",open_cart:"Open cart",open_category:"Open category",open_brand:"Open brand"};return{type:a,label:be(te(e.label,e.title,e.text,t.label,t.title),m[a]||a),productId:i,variantId:d,category:u,brand:p,payload:t,raw:e}}function Gr(e=[]){const t=[];for(const a of e||[]){const r=Qo(a);r&&t.push(r)}return Ce("Normalized Actions",t),t}function Wr(e={}){var r;const t=[];Array.isArray(e.actions)&&t.push(...e.actions),Array.isArray((r=e.data)==null?void 0:r.actions)&&t.push(...e.data.actions);const a=Array.isArray(e.tool_calls)?e.tool_calls:Array.isArray(e.toolCalls)?e.toolCalls:[];for(const i of a){const c=(i==null?void 0:i.response)||(i==null?void 0:i.result)||{};Array.isArray(c.actions)&&t.push(...c.actions),Array.isArray(i==null?void 0:i.actions)&&t.push(...i.actions)}return Gr(t)}function Jo(e){if(e==null||e==="")return null;const t=String(e).trim();if(!t||t==="undefined"||t==="null")return null;const a=`#/product/${encodeURIComponent(t)}`;return Ce("Navigation target",a,{id:t}),a}function ar(e,t){return n(t==="timeout"||e===408?"assistant.errorTimeout":t==="network"||e===0?"assistant.errorNetwork":e===400?"assistant.error400":e===401?"assistant.error401":e===429?"assistant.error429":e===500?"assistant.error500":e===503?"assistant.error503":"assistant.errorGeneric")}function Zo(e){let t=[];return Array.isArray(e)?t=e:Array.isArray(e==null?void 0:e.messages)?t=e.messages:Array.isArray(e==null?void 0:e.history)?t=e.history:Array.isArray(e==null?void 0:e.data)?t=e.data:Array.isArray(e==null?void 0:e.content)&&(t=e.content),t.map((a,r)=>{const i=String(a.role||a.sender||"").toLowerCase(),c=i==="user"||i==="human",d=a.content||a.message||a.assistant_message||a.text||"",u=Kr(a),p=Wr(a);return!d&&!u.length?null:{id:a.id||`hist-${r}-${Date.now()}`,role:c?"user":"assistant",content:d,products:u,actions:p,followUpQuestions:Array.isArray(a.follow_up_questions)?a.follow_up_questions:Array.isArray(a.followUpQuestions)?a.followUpQuestions:[],citations:Array.isArray(a.citations)?a.citations:[],status:"ok",fromHistory:!0}}).filter(Boolean)}const Rt={ensureIds(){const e=tr();let t=b.conversationId||er();return t||(t=Xa(),Tt(t)),b.sessionId=e,b.conversationId=t,{conversationId:t,sessionId:e}},buildChatPayload(e){var i;const{conversationId:t,sessionId:a}=this.ensureIds(),r={message:String(e||"").trim(),conversation_id:t,session_id:a,locale:_o(),timezone:Vo(),context:{}};return V.isLoggedIn()&&((i=P.user)==null?void 0:i.id)!=null&&(r.user_id=String(P.user.id)),r},async loadHistory(){var i,c,d;const{conversationId:e}=this.ensureIds();if(!e)return{success:!0,messages:[]};const t=V.isLoggedIn()&&((i=P.user)==null?void 0:i.id)!=null?String(P.user.id):void 0,a=await Uo({conversationId:e,userId:t});if(!a.ok)return{success:!1,status:a.status,error:ar(a.status,a.error),messages:[]};const r=Zo(a.data);return(c=a.data)!=null&&c.conversation_id&&(b.conversationId=a.data.conversation_id,Tt(a.data.conversation_id)),(d=a.data)!=null&&d.session_id&&(b.sessionId=a.data.session_id),{success:!0,messages:r}},async send(e,{clientMessageId:t}={}){const a=String(e||"").trim();if(!a)return{success:!1,empty:!0};const r=this.buildChatPayload(a),i=await Fo(r);if(!i.ok)return{success:!1,status:i.status,error:ar(i.status,i.error),clientMessageId:t};const c=i.data||{};c.conversation_id&&(b.conversationId=c.conversation_id,Tt(c.conversation_id)),c.session_id&&(b.sessionId=c.session_id);const d=Kr(c),u=Wr(c);return{success:!0,assistantMessage:{id:_r(),role:"assistant",content:c.assistant_message||"",products:d,actions:u,followUpQuestions:Array.isArray(c.follow_up_questions)?c.follow_up_questions:[],citations:Array.isArray(c.citations)?c.citations:[],intent:c.intent||"",toolCalls:Array.isArray(c.tool_calls)?c.tool_calls:[],status:"ok"},conversationId:c.conversation_id||b.conversationId,sessionId:c.session_id||b.sessionId}},async reset(){var r;const e=b.conversationId||er(),t={};e&&(t.conversation_id=e),V.isLoggedIn()&&((r=P.user)==null?void 0:r.id)!=null&&(t.user_id=String(P.user.id)),e&&await zo(t);const a=Xa();return Ho(),Tt(a),b.conversationId=a,b.sessionId=tr(),b.messages=[],b.followUpQuestions=[],b.error="",b.errorStatus=null,b.citationsOpen={},b.pendingRetryId=null,b._bootstrapped=!0,{conversationId:a}}};function Xo(e){if(!e)return"";const t=String(e),a=[];let r=t.replace(/```([a-zA-Z0-9_-]*)\n?([\s\S]*?)```/g,(c,d,u)=>{const p=a.length;return a.push({lang:d||"",code:u.replace(/\n$/,"")}),`\0CODE${p}\0`});return r=s(r),r=r.replace(/\u0000CODE(\d+)\u0000/g,(c,d)=>{const u=a[Number(d)];return u?`<pre class="assistant-code"><code${u.lang?` class="language-${s(u.lang)}"`:""}>${s(u.code)}</code></pre>`:""}),r=r.replace(/`([^`\n]+)`/g,'<code class="assistant-inline-code">$1</code>'),r=r.replace(/^######\s+(.+)$/gm,"<h6>$1</h6>"),r=r.replace(/^#####\s+(.+)$/gm,"<h5>$1</h5>"),r=r.replace(/^####\s+(.+)$/gm,"<h4>$1</h4>"),r=r.replace(/^###\s+(.+)$/gm,"<h3>$1</h3>"),r=r.replace(/^##\s+(.+)$/gm,"<h2>$1</h2>"),r=r.replace(/^#\s+(.+)$/gm,"<h1>$1</h1>"),r=r.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),r=r.replace(new RegExp("(?<!\\*)\\*([^*\\n]+)\\*(?!\\*)","g"),"<em>$1</em>"),r=r.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),r=r.replace(/(?:^|\n)((?:[-*]\s+.+(?:\n|$))+)/g,c=>{const d=c.trim().split(`
`).filter(u=>/^[-*]\s+/.test(u)).map(u=>`<li>${u.replace(/^[-*]\s+/,"")}</li>`).join("");return d?`
<ul>${d}</ul>
`:c}),r=r.replace(/(?:^|\n)((?:\d+\.\s+.+(?:\n|$))+)/g,c=>{const d=c.trim().split(`
`).filter(u=>/^\d+\.\s+/.test(u)).map(u=>`<li>${u.replace(/^\d+\.\s+/,"")}</li>`).join("");return d?`
<ol>${d}</ol>
`:c}),r.split(/\n{2,}/).map(c=>{const d=c.trim();return d?/^<(?:h[1-6]|ul|ol|pre|blockquote)/i.test(d)?d:`<p>${d.replace(/\n/g,"<br>")}</p>`:""}).join("")}function en({product:e,isAuthenticated:t=!1,isFavorite:a=!1}){const r=jr(e);if(!(r!=null&&r.id))return"";const i=S(r.stock),c=i===0,d=S(r.price),u=S(r.discountPrice),p=d>u&&u>0,m=p?u:d||u,h=r.image||fa,v=r.title||r.name||"Product",$=String(r.id);return r._imageFallback&&Ce("Missing image fallback",{id:$,title:v}),`
    <article class="assistant-product-card" data-assistant-product="${s($)}" data-product="${s($)}">
      <button class="assistant-product-media" type="button" data-product="${s($)}" aria-label="${s(v)}">
        <img
          class="assistant-product-image"
          src="${s(h)}"
          alt="${s(v)}"
          loading="lazy"
          decoding="async"
          data-assistant-img
          data-placeholder="${s(fa)}"
          onerror="if(this.dataset.fallbackApplied!=='1'){this.dataset.fallbackApplied='1';this.src=this.dataset.placeholder;}"
        />
      </button>
      <div class="assistant-product-info">
        <span class="assistant-product-brand">${s(r.brand||"")}</span>
        <button class="assistant-product-name" type="button" data-product="${s($)}">
          ${s(v)}
        </button>
        <div class="assistant-product-price">
          <strong>${D(m)}</strong>
          ${p?`<span class="old-price">${D(d)}</span>`:""}
        </div>
        ${Ir({ratingAvg:r.rating||r.ratingAvg||0,reviewCount:r.reviewCount||0})}
        <div class="assistant-product-stock">
          ${Ar({stock:i,lowStockLabel:n("product.lowStock"),outOfStockLabel:n("product.outOfStock")})||(i>0?`<span class="assistant-in-stock">${s(n("assistant.inStock"))}</span>`:"")}
        </div>
        <div class="assistant-product-actions">
          <button class="secondary-button" type="button" data-product="${s($)}">
            ${s(n("assistant.viewProduct"))}
          </button>
          <button class="primary-button" type="button" data-add="${s($)}" ${c?"disabled":""}>
            ${s(n("assistant.addToCart"))}
          </button>
          ${t?`<button class="icon-button ${a?"active":""}" type="button" data-favorite="${s($)}" aria-label="${s(n("favorites.title"))}" aria-pressed="${a}">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
              </button>`:""}
        </div>
      </div>
    </article>
  `}function Yr({questions:e=[]}){const t=(e||[]).filter(a=>typeof a=="string"&&a.trim());return t.length?`
    <div class="assistant-suggestions" role="list">
      ${t.map(a=>`
        <button class="assistant-chip" type="button" role="listitem" data-assistant-suggest="${s(a)}">
          ${s(a)}
        </button>`).join("")}
    </div>
  `:""}function tn({actions:e=[]}){const t=Gr(e);return t.length?`
    <div class="assistant-actions">
      ${t.map(a=>`
        <button
          class="secondary-button assistant-action-btn"
          type="button"
          data-assistant-action="${s(a.type)}"
          data-assistant-action-product="${s(a.productId??"")}"
          data-assistant-action-variant="${s(a.variantId??"")}"
          data-assistant-action-category="${s(a.category??"")}"
          data-assistant-action-brand="${s(a.brand??"")}"
        >
          ${s(a.label)}
        </button>`).join("")}
    </div>
  `:""}function an({citations:e=[],messageId:t="",open:a=!1}){const r=(e||[]).filter(Boolean);return r.length?`
    <details class="assistant-citations" data-assistant-citations="${s(t)}" ${a?"open":""}>
      <summary>${s(n("assistant.sources"))} (${r.length})</summary>
      <ul>
        ${r.map(i=>{if(typeof i=="string")return`<li>${s(i)}</li>`;const c=i.title||i.name||i.source||i.url||"",d=i.url||i.link||"",u=i.snippet||i.text||"";return d&&/^https?:\/\//i.test(String(d))?`<li><a href="${s(d)}" target="_blank" rel="noopener noreferrer">${s(c||d)}</a>${u?`<p>${s(u)}</p>`:""}</li>`:`<li>${s(c)}${u?`<p>${s(u)}</p>`:""}</li>`}).join("")}
      </ul>
    </details>
  `:""}const rn="/images/assistant-icon.png";function Yt({className:e="",size:t=""}={}){const a=e?` class="${e}"`:"",r=t?` width="${t}" height="${t}"`:"";return`<img src="${rn}" alt=""${a}${r} decoding="async" draggable="false" />`}function Qr({message:e,retryId:t=""}){return`
    <div class="assistant-error" role="alert">
      <p>${s(e||n("assistant.errorGeneric"))}</p>
      ${t?`<button class="secondary-button" type="button" data-assistant-retry="${s(t)}">${s(n("assistant.retry"))}</button>`:`<button class="secondary-button" type="button" data-assistant-retry-last>${s(n("assistant.retry"))}</button>`}
    </div>
  `}function sn(){return`
    <div class="assistant-empty">
      <div class="assistant-empty-icon" aria-hidden="true">
        ${Yt({className:"assistant-empty-img"})}
      </div>
      <h3>${s(n("assistant.emptyTitle"))}</h3>
      <p>${s(n("assistant.emptyHint"))}</p>
    </div>
  `}function on({message:e}){const t=e.status==="error";return`
    <div class="assistant-msg assistant-msg--user ${t?"is-failed":""}" data-message-id="${s(e.id)}">
      <div class="assistant-bubble assistant-bubble--user">
        <p>${s(e.content)}</p>
      </div>
      ${t?Qr({message:e.errorMessage||n("assistant.errorGeneric"),retryId:e.id}):""}
    </div>
  `}function nn({message:e,isAuthenticated:t=!1,favoriteIds:a=new Set,citationsOpen:r=!1}){const i=(e.products||[]).map(c=>en({product:c,isAuthenticated:t,isFavorite:a.has(String(c.id))})).join("");return`
    <div class="assistant-msg assistant-msg--assistant" data-message-id="${s(e.id)}">
      <div class="assistant-avatar" aria-hidden="true">
        ${Yt({className:"assistant-avatar-img"})}
      </div>
      <div class="assistant-msg-body">
        <div class="assistant-bubble assistant-bubble--assistant">
          <div class="assistant-md">${Xo(e.content)}</div>
        </div>
        ${i?`<div class="assistant-products">${i}</div>`:""}
        ${tn({actions:e.actions||[]})}
        ${an({citations:e.citations||[],messageId:e.id,open:r})}
        ${Yr({questions:e.followUpQuestions||[]})}
      </div>
    </div>
  `}function cn(e){var t;return((t=e.message)==null?void 0:t.role)==="user"?on(e):nn(e)}function ln(){return`
    <div class="assistant-msg assistant-msg--assistant assistant-msg--loading" aria-live="polite" aria-busy="true">
      <div class="assistant-avatar" aria-hidden="true">
        ${Yt({className:"assistant-avatar-img"})}
      </div>
      <div class="assistant-bubble assistant-bubble--assistant">
        <div class="assistant-typing" aria-label="${s(n("assistant.thinking"))}">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  `}function dn(){const e=b.messages||[],t=V.isLoggedIn(),a=A.favoriteIds||new Set;if(b.historyLoading&&!e.length)return`<div class="assistant-history-loading">${s(n("assistant.loadingHistory"))}</div>`;if(!e.length&&!b.loading)return sn();const r=e.map(c=>{var d;return cn({message:c,isAuthenticated:t,favoriteIds:a,citationsOpen:!!((d=b.citationsOpen)!=null&&d[c.id])})}).join(""),i=b.loading?ln():"";return`${r}${i}`}function un({compact:e=!1,draft:t="",sendEnabled:a=!1}={}){const r=b.loading,i=a&&!r&&!!String(t||"").trim(),c=n("assistant.placeholder");return`
    <form class="assistant-composer" data-assistant-form novalidate>
      ${b.error&&!b.messages.some(d=>d.status==="error")?Qr({message:b.error}):""}
      ${!e&&(b.followUpQuestions||[]).length?Yr({questions:b.followUpQuestions}):""}
      <div class="assistant-composer-row">
        <textarea
          class="assistant-input"
          data-assistant-input
          rows="1"
          placeholder="${s(c)}"
          aria-label="${s(c)}"
          ${r?"disabled":""}
        >${s(t)}</textarea>
        <button
          class="primary-button assistant-send"
          type="submit"
          data-assistant-send
          ${i?"":"disabled"}
          aria-label="${s(n("assistant.send"))}"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </button>
      </div>
      <p class="assistant-composer-hint">${s(n("assistant.composerHint"))}</p>
    </form>
  `}function pn(e){var a;const t=(a=e==null?void 0:e.querySelector)==null?void 0:a.call(e,"[data-assistant-input]");return t?{draft:t.value||"",focused:document.activeElement===t,selectionStart:t.selectionStart,selectionEnd:t.selectionEnd}:{draft:"",focused:!1,selectionStart:null,selectionEnd:null}}function mn(e,t){var r;const a=(r=e==null?void 0:e.querySelector)==null?void 0:r.call(e,"[data-assistant-input]");if(!(!a||!t)&&(a.value=t.draft||"",a.style.height="auto",a.style.height=`${Math.min(a.scrollHeight,140)}px`,t.focused&&(a.focus(),t.selectionStart!=null&&t.selectionEnd!=null)))try{a.setSelectionRange(t.selectionStart,t.selectionEnd)}catch{}}function gn({mode:e="widget",draft:t=""}={}){const a=e==="page";return`
    <div class="assistant-shell assistant-shell--${s(e)}">
      <header class="assistant-header">
        <div class="assistant-header-title">
          <span class="assistant-header-icon" aria-hidden="true">
            ${Yt({className:"assistant-header-img"})}
          </span>
          <div>
            <h2>${s(n("assistant.title"))}</h2>
            <p class="hint">${s(n("assistant.subtitle"))}</p>
          </div>
        </div>
        <div class="assistant-header-actions">
          <button class="secondary-button" type="button" data-assistant-new-chat>
            ${s(n("assistant.newChat"))}
          </button>
          ${a?"":`<button class="secondary-button" type="button" data-assistant-open-page>${s(n("assistant.openFull"))}</button>
               <button class="icon-button" type="button" data-assistant-close aria-label="${s(n("assistant.close"))}">
                 <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
               </button>`}
        </div>
      </header>
      <div class="assistant-messages" data-assistant-messages>
        ${dn()}
      </div>
      ${un({compact:!a,draft:t,sendEnabled:!!String(t||"").trim()})}
    </div>
  `}function ia(e,t){if(!e)return;const a=pn(e);e.innerHTML=gn({mode:t,draft:a.draft}),mn(e,a)}const hn={render(){var e;ia(o.assistantWidgetContent,"widget"),o.assistantPageContent&&!((e=o.assistantPage)!=null&&e.hidden)&&ia(o.assistantPageContent,"page")},renderPageOnly(){ia(o.assistantPageContent,"page")}},fn=()=>E("/api/favorites",{requireAuth:!0,showError:!1}),vn=e=>E(`/api/favorites/${e}/toggle`,{method:"POST",requireAuth:!0}),Jr={async loadFavorites(){const e=await fn();return e===null?Ee("Favorites could not be loaded."):{success:!0,products:x(e).map(Vi)}},async toggle(e,t){const a=await vn(e);return a===null?null:{isFavorite:typeof a=="object"&&"favorite"in a?!!a.favorite:!t,response:a}}};function yn(e){const t=ge()==="uz"?"uz-UZ":ge();return S(e).toLocaleString(t,{minimumFractionDigits:1,maximumFractionDigits:1})}function bn({product:e,categoryLabel:t="",favoritesTitle:a="Favorites"}){const r=yn(e.ratingAvg),i=S(e.reviewCount);return`
    <div class="app-fav-card" data-product="${s(e.id)}" data-screen="favorites" role="link" tabindex="0" aria-label="${s(e.name)}">
      <div class="app-fav-media">
        <img src="${s(e.image||C.placeholderImage)}" alt="${s(e.name)}" loading="lazy" decoding="async" />
        <button class="app-fav-heart" type="button" data-favorite="${s(e.id)}" aria-label="${s(a)}" aria-pressed="true">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-4.35-9.5-8.5C.8 9.6 2 6 5.2 6c1.9 0 3.2 1 3.8 2 .6-1 1.9-2 3.8-2 3.2 0 4.4 3.6 2.7 6.5C19 16.65 12 21 12 21Z"/></svg>
        </button>
      </div>
      <div class="app-fav-body">
        <div class="app-fav-price-row">
          ${e.discountPercent?`<span class="app-fav-discount">-${e.discountPercent}%</span>`:""}
          ${e.discountPercent?`<span class="app-fav-old-price">${D(e.originalPrice)}</span>`:""}
        </div>
        <p class="app-fav-price">${D(e.finalPrice)}</p>
        ${t?`<p class="app-fav-category">${s(t)}</p>`:""}
        <h3 class="app-fav-name">${s(e.name)}</h3>
        <div class="app-fav-rating">
          <span class="star" aria-hidden="true">★</span>
          <span>${r}</span>
          <span class="count">(${i})</span>
          <span class="flags" aria-hidden="true">🇰🇷 🚚</span>
        </div>
      </div>
    </div>
  `}function rr(){return`
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s-8.5-5.2-11-9.6C-.4 8 1 3.5 5.2 3.5c2.4 0 4 1.3 4.8 2.6.8-1.3 2.4-2.6 4.8-2.6C19 3.5 20.4 8 18 11.4 15.5 15.8 12 21 12 21Z"/>
    </svg>
  `}function wn({products:e,renderCard:t}){return`
    <div class="app-favorites-grid">
      ${e.map(a=>t(a)).join("")}
    </div>
  `}function kn({count:e=4}){return`
    <div class="app-favorites-grid">
      ${Array.from({length:e},()=>'<div class="app-favorites-skeleton skeleton-card"></div>').join("")}
    </div>
  `}function Ke(e={}){return!!(e.render||kt())}const Y={updateUi(){o.favoritesCount&&(o.favoritesCount.textContent=A.favoritesCount),o.favoritesSummary&&(o.favoritesSummary.textContent=`${A.favoritesCount} product${A.favoritesCount===1?"":"s"}`)},renderShell(e){return`
      <div class="app-favorites-page">
        <header class="app-favorites-header">
          <div class="app-favorites-header-top">
            <button class="app-favorites-back" type="button" data-favorites-close aria-label="${s(n("checkout.back"))}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>
            </button>
            <h2>${s(n("favorites.title"))}</h2>
            <span aria-hidden="true"></span>
          </div>
          <p class="app-favorites-count">${s(n("favorites.count",{count:A.favoritesCount||0}))}</p>
        </header>
        <div class="app-favorites-scroll">
          ${e}
        </div>
      </div>
    `},renderCard(e){const t=e.category?fe(e.category):e.brand||"";return bn({product:e,categoryLabel:t,favoritesTitle:n("favorites.title")})},render(){if(o.favoritesContent){if(Y.updateUi(),A.favoritesLoading){o.favoritesContent.innerHTML=Y.renderShell(kn());return}if(A.favoritesError){o.favoritesContent.innerHTML=Y.renderShell(`
        <div class="app-favorites-state">
          <span class="app-favorites-state-icon" aria-hidden="true">${rr()}</span>
          <h3>${s(n("favorites.unavailable"))}</h3>
          <p>${s(A.favoritesError)}</p>
          <button class="app-favorites-state-btn" data-favorites-retry type="button">${s(n("common.tryAgain"))}</button>
        </div>
      `);return}if(!A.favoriteProducts.length){o.favoritesContent.innerHTML=Y.renderShell(`
        <div class="app-favorites-state">
          <span class="app-favorites-state-icon" aria-hidden="true">${rr()}</span>
          <h3>${s(n("favorites.empty"))}</h3>
          <p>${s(n("favorites.emptyHint"))}</p>
          <button class="app-favorites-state-btn" data-favorites-start type="button">${s(n("favorites.browse"))}</button>
        </div>
      `);return}o.favoritesContent.innerHTML=Y.renderShell(wn({products:A.favoriteProducts,renderCard:e=>Y.renderCard(e)})),Se(o.favoritesContent)}},async load(e={},{isLoggedIn:t,onSessionExpired:a}={}){const{render:r=!1}=e;if(!(t!=null&&t())){da(),Ke(e)&&Y.render();return}A.favoritesLoading||(A.favoritesLoading=!0,A.favoritesError=""),Ke(e)&&Y.render();try{const c=await Jr.loadFavorites();if(A.favoritesLoading=!1,!c.success){if(c.sessionExpired){da(),a==null||a(),Ke(e)&&Y.render();return}A.favoritesError=c.error,Y.updateUi(),Ke(e)&&Y.render();return}Us(c.products),l.products.length&&ae(o.grid,l.products,"Mahsulot topilmadi."),l.todayDeals.length&&ae(o.dealsGrid,l.todayDeals.slice(0,8),"Bugungi takliflar topilmadi."),Ke(e)&&Y.render()}catch(c){console.error("[LOAD FAVORITES FAILED]",c),A.favoritesLoading=!1,A.favoritesError="Favorites could not be loaded.",Y.updateUi(),Ke(e)&&Y.render()}},handleClick(e,{close:t,reload:a,handleProductGridClick:r}={}){var i;if(e.target.closest("[data-favorites-close]")){t==null||t();return}if(e.target.closest("[data-favorites-retry]")){a==null||a();return}if(e.target.closest("[data-favorites-start]")){t==null||t(),(i=document.getElementById("products"))==null||i.scrollIntoView({behavior:"smooth",block:"start"});return}r==null||r(e)}},W={findKnownProduct(e){return[...l.products,...l.todayDeals,...A.favoriteProducts,l.selectedDetailProduct].filter(Boolean).find(t=>String(t.id)===String(e))},async open(){if(!y.isLoggedIn()){y.showLoginRequired();return}o.favoritesDialog&&(o.favoritesDialog.classList.add("open"),o.favoritesDialog.setAttribute("aria-hidden","false"),X(),le(),A.favoritesLoading=!0,A.favoritesError="",Y.render(),await W.load({render:!0}))},close(){o.favoritesDialog&&(o.favoritesDialog.classList.remove("open"),o.favoritesDialog.setAttribute("aria-hidden","true"),U(),le())},async load(e={}){return Y.load(e,{isLoggedIn:y.isLoggedIn,onSessionExpired:()=>{kt()&&W.close()}})},updateUi(){Y.updateUi()},async toggle(e){var d;if(!y.isLoggedIn()){y.showLoginRequired();return}const t=A.favoriteIds.has(String(e)),a=await Jr.toggle(e,t);if(a===null)return;const{isFavorite:r}=a,i=W.findKnownProduct(e);if(r){const u=i?{...i,favorite:!0}:null;u&&!A.favoriteProducts.some(p=>String(p.id)===String(e))&&(A.favoriteProducts=[u,...A.favoriteProducts])}else A.favoriteProducts=A.favoriteProducts.filter(u=>String(u.id)!==String(e));A.favoriteIds=new Set(A.favoriteProducts.map(u=>String(u.id))),A.favoritesCount=A.favoriteProducts.length,ke(),W.updateUi(),l.products.length&&ae(o.grid,l.products,"Mahsulot topilmadi."),l.todayDeals.length&&ae(o.dealsGrid,l.todayDeals.slice(0,8),"Bugungi takliflar topilmadi."),((d=l.selectedDetailProduct)==null?void 0:d.id)!==void 0&&String(l.selectedDetailProduct.id)===String(e)&&R.renderProductDetail(l.selectedDetailProduct),kt()&&Y.render();const c=document.querySelector(`[data-favorite="${e}"]`);c&&r&&Ro(c),M(n(r?"favorites.added":"favorites.removed"),"success"),r&&!i&&await W.load({render:kt()})}};function ir(e){return Jo(e)?(Ce("Navigation id",e),Le(e),!0):(Ce("Navigation id","missing",{productId:e}),!1)}function Sn(e){var a;const t=(a=e==null?void 0:e.querySelector)==null?void 0:a.call(e,"[data-assistant-messages]");t&&requestAnimationFrame(()=>{t.scrollTop=t.scrollHeight})}function me(){hn.render(),[o.assistantWidgetContent,o.assistantPageContent].filter(Boolean).forEach(Sn)}const Q={async init(){var t;if(Rt.ensureIds(),b._bootstrapped){me();return}b.historyLoading=!0,me();const e=await Rt.loadHistory();if(b.historyLoading=!1,b._bootstrapped=!0,e.success&&((t=e.messages)!=null&&t.length)){b.messages=e.messages;const a=[...e.messages].reverse().find(r=>r.role==="assistant");b.followUpQuestions=(a==null?void 0:a.followUpQuestions)||[]}me()},openWidget(){var e;o.assistantWidget&&(b.widgetOpen=!0,o.assistantWidget.classList.add("open"),o.assistantWidget.setAttribute("aria-hidden","false"),(e=o.assistantFab)==null||e.classList.add("is-open"),X(),le(),me(),this.focusComposer(),b._bootstrapped||this.init())},closeWidget(){var e;o.assistantWidget&&(b.widgetOpen=!1,o.assistantWidget.classList.remove("open"),o.assistantWidget.setAttribute("aria-hidden","true"),(e=o.assistantFab)==null||e.classList.remove("is-open"),U(),le())},toggleWidget(){b.widgetOpen?this.closeWidget():this.openWidget()},isWidgetOpen(){var e;return!!((e=o.assistantWidget)!=null&&e.classList.contains("open"))},focusComposer(){const e=document.querySelector("#assistantPageContent [data-assistant-input]")||document.querySelector("#assistantWidgetContent [data-assistant-input]");e==null||e.focus()},async sendMessage(e,{retryMessageId:t}={}){const a=String(e||"").trim();if(!a||b.loading)return;b.error="",b.errorStatus=null,b.followUpQuestions=[];let r=t;t?b.messages=b.messages.map(c=>c.id===t?{...c,status:"pending",errorMessage:""}:c):(r=_r(),b.messages=[...b.messages,{id:r,role:"user",content:a,status:"pending"}]),b.loading=!0,me();const i=await Rt.send(a,{clientMessageId:r});if(b.loading=!1,!i.success){b.error=i.error||n("assistant.errorGeneric"),b.errorStatus=i.status??null,b.messages=b.messages.map(c=>c.id===r?{...c,status:"error",errorMessage:i.error||n("assistant.errorGeneric")}:c),me();return}b.messages=b.messages.map(c=>c.id===r?{...c,status:"ok",errorMessage:""}:c),b.messages=[...b.messages,i.assistantMessage],b.followUpQuestions=i.assistantMessage.followUpQuestions||[],b.error="",b.errorStatus=null,me()},retryMessage(e){const t=b.messages.find(a=>a.id===e&&a.role==="user");if(t)return this.sendMessage(t.content,{retryMessageId:e})},retryLastFailed(){const e=[...b.messages].reverse().find(t=>t.status==="error");if(e)return this.retryMessage(e.id)},async newChat(){b.loading||(await Rt.reset(),me(),this.focusComposer(),M(n("assistant.newChatStarted"),"success"))},handleSuggest(e){return this.sendMessage(e)},async handleAction(e,{productId:t,variantId:a,category:r,brand:i}={}){const c=String(e||"").toLowerCase();if(c===je.view_product||c===je.open_product){if(!ir(t))return;this.closeWidget();return}if(c===je.add_to_cart){if(!t||t==="undefined"||t==="null")return;await G.add(t,a||void 0,1,{showLoginRequired:y.showLoginRequired});return}if(c===je.open_cart){this.closeWidget(),Xr();return}if(c===je.open_category){if(!r)return;this.closeWidget(),Ce("Navigation target",`#/category/${r}`),ie.renderCategoryProducts(r,{showHomeView:$e});return}if(c===je.open_brand){if(!i)return;this.closeWidget();const d=`#/brand/${encodeURIComponent(i)}`;Ce("Navigation target",d),window.location.hash=d;return}},async handleClick(e){const t=e.target;if(t.closest("[data-assistant-close]")){this.closeWidget();return}if(t.closest("[data-assistant-new-chat]")){await this.newChat();return}if(t.closest("[data-assistant-open-page]")){this.closeWidget(),window.location.hash="#/assistant";return}const a=t.closest("[data-assistant-suggest]");if(a){await this.sendMessage(a.dataset.assistantSuggest);return}const r=t.closest("[data-assistant-retry]");if(r){await this.retryMessage(r.dataset.assistantRetry);return}if(t.closest("[data-assistant-retry-last]")){await this.retryLastFailed();return}const i=t.closest("[data-assistant-action]");if(i){await this.handleAction(i.dataset.assistantAction,{productId:i.dataset.assistantActionProduct,variantId:i.dataset.assistantActionVariant,category:i.dataset.assistantActionCategory,brand:i.dataset.assistantActionBrand});return}const c=t.closest("[data-favorite]");if(c){await W.toggle(c.dataset.favorite),me();return}const d=t.closest("[data-add]");if(d){await G.add(d.dataset.add,void 0,1,{showLoginRequired:y.showLoginRequired});return}const u=t.closest("[data-product]");if(u){if(!ir(u.dataset.product))return;this.closeWidget()}},handleKeydown(e){var a,r,i;const t=(r=(a=e.target).closest)==null?void 0:r.call(a,"[data-assistant-input]");if(t&&e.key==="Enter"&&!e.shiftKey){e.preventDefault();const c=t.closest("[data-assistant-form]"),d=t.value;if(!d.trim()||b.loading)return;t.value="",this.sendMessage(d),(i=c==null?void 0:c.querySelector("[data-assistant-send]"))==null||i.setAttribute("disabled","")}},handleSubmit(e){var i,c;const t=(c=(i=e.target).closest)==null?void 0:c.call(i,"[data-assistant-form]");if(!t)return;e.preventDefault();const a=t.querySelector("[data-assistant-input]"),r=(a==null?void 0:a.value)||"";!r.trim()||b.loading||(a&&(a.value=""),this.sendMessage(r))},handleInput(e){var c,d;const t=(d=(c=e.target).closest)==null?void 0:d.call(c,"[data-assistant-input]");if(!t)return;const a=t.closest("[data-assistant-form]"),r=a==null?void 0:a.querySelector("[data-assistant-send]");if(!r)return;!t.value.trim()||b.loading?r.setAttribute("disabled",""):r.removeAttribute("disabled"),t.style.height="auto",t.style.height=`${Math.min(t.scrollHeight,140)}px`},render(){me()},getFavoriteIds(){return A.favoriteIds||new Set}};async function Cn(e){l.selectedBrand=e;const t=await ce.loadBrandProducts(e,l.sourceProducts,l.products),a=document.getElementById("brandViewContent");a&&(a.innerHTML=Bs(e,t,n,t.slice(0,12).map((r,i)=>at(r,{screen:"brand",position:i})).join("")),Se(a))}async function zt(){const e=window.location.hash||"#/",t=e.match(/^#\/product\/([^/?#]+)/),a=e.match(/^#\/brand\/([^/?#]+)/),r=e.match(/^#\/assistant\/?$/);if(t){Zr(),await Xe.loadDetailPage(decodeURIComponent(t[1])),window.scrollTo({top:0,behavior:"smooth"});return}if(a){Pn(),await Cn(decodeURIComponent(a[1])),window.scrollTo({top:0,behavior:"smooth"});return}if(r){An(),await Q.init(),Q.render();return}$e()}function $n(){y.showLoginRequired()}function Pn(){var e;g.currentRoute="brand",o.homeView.hidden=!0,o.productDetailPage.hidden=!0,o.assistantPage&&(o.assistantPage.hidden=!0),(e=document.getElementById("brandView"))==null||e.removeAttribute("hidden")}function Na(){var e;(e=document.getElementById("brandView"))==null||e.setAttribute("hidden","")}function An(){g.currentRoute="assistant",o.homeView.hidden=!0,o.productDetailPage.hidden=!0,Na(),o.assistantPage&&(o.assistantPage.hidden=!1),document.title="AI Assistant - BEAUTY SKIN KOREA",window.scrollTo({top:0,behavior:"smooth"}),le()}function kt(){var e;return!!((e=o.favoritesDialog)!=null&&e.classList.contains("open"))}function le(){var a,r,i;const e=document.querySelector(".mobile-bottom-nav");if(!e)return;let t="home";(a=o.profileDrawer)!=null&&a.classList.contains("open")?t="loginButton":(r=o.favoritesDialog)!=null&&r.classList.contains("open")?t="favoritesButton":(i=o.cartDrawer)!=null&&i.classList.contains("open")&&(t="cartButton"),e.querySelectorAll("[data-mobile-action]").forEach(c=>{c.classList.toggle("active",c.dataset.mobileAction===t)})}function $e(){g.currentRoute="home",o.homeView.hidden=!1,o.productDetailPage.hidden=!0,o.assistantPage&&(o.assistantPage.hidden=!0),Na(),document.title="BEAUTY SKIN KOREA",le()}function Zr(){g.currentRoute="product",o.homeView.hidden=!0,o.productDetailPage.hidden=!1,o.assistantPage&&(o.assistantPage.hidden=!0),Na(),window.scrollTo({top:0,behavior:"smooth"})}function va(){window.location.hash&&window.location.hash!=="#/"&&window.location.hash!=="#"?window.location.hash="#/":$e()}function Le(e){if(e==null||e==="")return;const t=String(e).trim();if(!t||t==="undefined"||t==="null")return;const a=`#/product/${encodeURIComponent(t)}`;window.location.hash===a?zt():window.location.hash=a}function Xr(){if(!V.isLoggedIn()){$n();return}o.cartDrawer.classList.add("open"),o.cartDrawer.setAttribute("aria-hidden","false"),X(),le(),G.load()}function Te(){o.cartDrawer.classList.remove("open"),o.cartDrawer.setAttribute("aria-hidden","true"),U(),le()}function In(){const e=document.getElementById("megaMenu");if(window.innerWidth>680&&e){const t=e.classList.toggle("open");e.setAttribute("aria-hidden",String(!t)),o.catalogButton.setAttribute("aria-expanded",String(t)),t&&(o.catalogDrawer.classList.remove("open"),o.catalogDrawer.setAttribute("aria-hidden","true"));return}o.catalogDrawer.classList.add("open"),o.catalogDrawer.setAttribute("aria-hidden","false"),o.catalogButton.setAttribute("aria-expanded","true"),X()}function Bt(){const e=document.getElementById("megaMenu");e==null||e.classList.remove("open"),e==null||e.setAttribute("aria-hidden","true"),o.catalogDrawer.classList.remove("open"),o.catalogDrawer.setAttribute("aria-hidden","true"),o.catalogButton.setAttribute("aria-expanded","false"),U()}function X(){document.body.classList.add("locked")}function U(){var i,c,d;const e=(i=document.getElementById("compareDrawer"))==null?void 0:i.classList.contains("open"),t=(c=o.assistantWidget)==null?void 0:c.classList.contains("open"),a=o.cartDrawer.classList.contains("open")||o.catalogDrawer.classList.contains("open")||o.profileDrawer.classList.contains("open")||o.notificationsDrawer.classList.contains("open")||((d=o.favoritesDialog)==null?void 0:d.classList.contains("open"))||e||t,r=[o.detailDialog,o.authDialog,o.apiDialog,o.checkoutDialog,o.ordersDialog,o.supportDialog,o.privacyDialog,o.termsDialog,o.myReviewsDialog,o.writeReviewDialog,document.getElementById("compareDialog")].some(u=>u==null?void 0:u.open);!a&&!r&&document.body.classList.remove("locked")}function En(){o.baseUrl.value=g.baseUrl,o.apiDialog.showModal(),X()}function Ln(e){e.preventDefault(),g.baseUrl=Ht(o.baseUrl.value||""),localStorage.setItem(C.storageKeys.baseUrl,g.baseUrl),o.apiDialog.close(),H.load({loadCart:()=>G.load()})}const y={isLoggedIn(){return V.isLoggedIn()},saveAuth(e,t={}){V.saveAuth(e,P,t)},clearAuth(){var e,t,a,r,i,c,d,u;V.clearAuthState(P,l),ha(),(t=(e=F.cart)==null?void 0:e.render)==null||t.call(e),da(),(r=(a=F.favorites)==null?void 0:a.updateUi)==null||r.call(a),(c=(i=F.notifications)==null?void 0:i.clearState)==null||c.call(i),(d=o.myReviewsDialog)!=null&&d.open&&o.myReviewsDialog.close(),(u=o.writeReviewDialog)!=null&&u.open&&o.writeReviewDialog.close(),y.updateUi()},showLoginRequired(){y.openDialog("login"),M(n("auth.loginRequired"),"warning")},async validateOnStartup(){var t,a,r,i;const e=await V.validateAuthOnStartup();if(!e.authenticated){e.invalid?y.clearAuth():y.updateUi();return}e.profile&&(P.user=e.profile),y.updateUi(),await Promise.allSettled([(a=(t=F.favorites)==null?void 0:t.load)==null?void 0:a.call(t),(i=(r=F.notifications)==null?void 0:r.loadUnreadCount)==null?void 0:i.call(r),y.preloadProfileData()])},async preloadProfileData(){var r,i,c,d,u;if(!V.isLoggedIn())return;const{userResponse:e,orders:t,reviewsResult:a}=await V.preloadProfileData();await((i=(r=F.home)==null?void 0:r.ensureRecentlyViewed)==null?void 0:i.call(r)),e&&(P.user=e,localStorage.setItem(C.storageKeys.user,JSON.stringify(e)),y.updateUi()),t!==null&&(g.orders=t),a.success&&(l.myReviews=a.items),(c=o.profileDrawer)!=null&&c.classList.contains("open")&&((u=(d=F.profile)==null?void 0:d.render)==null||u.call(d))},updateUi(){const e=o.loginButton.querySelector("span");if(e)if(V.isLoggedIn()&&P.user){const t=String(P.user.fullName||"").trim().split(/\s+/)[0]||"";e.textContent=t||n("profile.myProfile"),o.loginButton.setAttribute("aria-label",n("profile.myProfile"))}else V.isLoggedIn()?(e.textContent=n("profile.myProfile"),o.loginButton.setAttribute("aria-label",n("profile.myProfile"))):(e.textContent=n("auth.login"),o.loginButton.setAttribute("aria-label",n("auth.login")))},openDialog(e="login"){y.setMode(e),y.clearErrors(),o.authDialog.showModal(),X()},setMode(e){P.authMode=e;const t=e==="login";o.authTitle.textContent=n(t?"auth.login":"auth.register"),o.loginFields.hidden=!t,o.registerFields.hidden=t,o.authSubmit.textContent=n(t?"auth.signIn":"auth.createAccount"),o.loginTab.classList.toggle("active",t),o.registerTab.classList.toggle("active",!t),o.loginTab.setAttribute("aria-selected",String(t)),o.registerTab.setAttribute("aria-selected",String(!t)),y.clearErrors()},clearErrors(){document.querySelectorAll(".field-error").forEach(e=>{e.textContent=""}),o.authMessage.textContent="",o.authMessage.className="form-message"},setFieldError(e,t){const a=document.getElementById(`${e}Error`);a&&(a.textContent=t)},setLoading(e){P.authLoading=e,o.authSubmit.disabled=e,o.googleLoginButton&&(o.googleLoginButton.disabled=e),o.authSubmit.textContent=e?n("home.loading"):P.authMode==="login"?n("auth.signIn"):n("auth.createAccount")},setFirebaseLoading(e){P.authLoading=e,o.authSubmit.disabled=e,o.googleLoginButton&&(o.googleLoginButton.disabled=e,o.googleLoginButton.classList.toggle("loading",e))},async submit(e){e.preventDefault(),!P.authLoading&&(P.authMode==="login"?await y.submitLogin():await y.submitRegister())},async submitLogin(){y.clearErrors();const e=o.loginEmail.value.trim(),t=o.loginPassword.value,a=V.validateLoginForm(e,t);if(a.errors.forEach(({field:i,messageKey:c})=>y.setFieldError(i,n(c))),!a.valid)return;y.setLoading(!0);const r=await V.submitLogin({email:e,password:t});if(y.setLoading(!1),!r.success){o.authMessage.textContent=r.error,o.authMessage.className="form-message error";return}await y.finishLogin(r.response,{email:e})},async submitRegister(){y.clearErrors();const e=V.validateRegisterForm({fullName:o.registerFullName.value.trim(),email:o.registerEmail.value.trim(),phone:o.registerPhone.value.trim(),password:o.registerPassword.value,confirmPassword:o.registerConfirmPassword.value});if(e.errors.forEach(({field:a,messageKey:r})=>y.setFieldError(a,n(r))),!e.valid)return;y.setLoading(!0);const t=await V.submitRegister({fullName:o.registerFullName.value.trim(),email:o.registerEmail.value.trim(),phone:o.registerPhone.value.trim(),password:o.registerPassword.value});if(y.setLoading(!1),!t.success){o.authMessage.textContent=t.error,o.authMessage.className="form-message error";return}o.authMessage.textContent="Registered. Endi login qiling.",o.authMessage.className="form-message success",y.setMode("login"),o.loginEmail.value=t.email},async submitFirebase(){if(P.authLoading)return;y.clearErrors(),y.setFirebaseLoading(!0);let e;try{e=await Po()}catch(a){y.setFirebaseLoading(!1);const r=V.mapFirebaseError((a==null?void 0:a.code)||"");if(r.cancelled)return;o.authMessage.textContent=r.message,o.authMessage.className="form-message error";return}const t=await V.submitFirebaseLogin(e);if(y.setFirebaseLoading(!1),!t.success){o.authMessage.textContent=t.error,o.authMessage.className="form-message error";return}await y.finishLogin(t.response)},async finishLogin(e,{email:t=""}={}){var i,c,d,u,p,m,h,v;y.saveAuth(e,{email:t}),y.updateUi(),o.authDialog.close();const a=await $t({silentAuth:!0,showError:!1});a&&(P.user=a,localStorage.setItem(C.storageKeys.user,JSON.stringify(a)),y.updateUi());const r=String(((i=P.user)==null?void 0:i.fullName)||"").trim().split(/\s+/)[0]||String(((c=P.user)==null?void 0:c.email)||t||"").split("@")[0]||"User";M(`Welcome, ${r}.`),await Promise.allSettled([(u=(d=F.cart)==null?void 0:d.load)==null?void 0:u.call(d),(m=(p=F.favorites)==null?void 0:p.load)==null?void 0:m.call(p),(v=(h=F.notifications)==null?void 0:h.loadUnreadCount)==null?void 0:v.call(h)]),y.preloadProfileData()}},Tn=()=>E("/api/receivers",{requireAuth:!0,showError:!1}),Dn=e=>E("/api/receivers",{method:"POST",body:JSON.stringify(e),requireAuth:!0}),Rn=e=>E(`/api/receivers/${e}`,{method:"DELETE",requireAuth:!0}),Mn=()=>E("/api/addresses",{requireAuth:!0,showError:!1}),qn=e=>E("/api/addresses",{method:"POST",body:JSON.stringify(e),requireAuth:!0}),Bn=e=>E(`/api/addresses/${e}`,{method:"DELETE",requireAuth:!0}),se={resolveSelectedId(e,t,a){var i,c;const r=t||a||((i=e[0])==null?void 0:i.id)||null;return e.some(d=>String(d.id)===String(r))?r:((c=e[0])==null?void 0:c.id)||null},async loadReceivers(e,t){const a=await Tn();if(a===null)return{success:!1,error:g.lastApiError||"Receivers could not be loaded."};const r=x(a);return{success:!0,receivers:r,selectedReceiverId:this.resolveSelectedId(r,e,t)}},async loadAddresses(e,t){const a=await Mn();if(a===null)return{success:!1,error:g.lastApiError||"Addresses could not be loaded."};const r=x(a);return{success:!0,addresses:r,selectedAddressId:this.resolveSelectedId(r,e,t)}},validateReceiverInput({firstName:e,lastName:t,phone:a}){return!e||!t||!a?{valid:!1,error:"First name, last name va phone majburiy."}:{valid:!0}},validateAddressInput({title:e,address:t,latitude:a,longitude:r}){return!e||!t||!Number.isFinite(a)||!Number.isFinite(r)?{valid:!1,error:"Title, address, latitude va longitude majburiy."}:{valid:!0}},async createReceiver(e){const t=await Dn(e);return t===null?{success:!1,error:g.lastApiError}:{success:!0,receiver:t}},async createAddress(e){const t=await qn(e);return t===null?{success:!1,error:g.lastApiError}:{success:!0,address:t}},async deleteReceiver(e){return{success:await Rn(e)!==null}},async deleteAddress(e){return{success:await Bn(e)!==null}},validatePrepareCheckout(e){return e.length?{valid:!0}:{valid:!1,reason:"empty_selection"}},validateConfirmCheckout({selectedAddressId:e,selectedReceiverId:t}){return e?t?{valid:!0}:{valid:!1,reason:"receiver_required",openReceiverPicker:!0}:{valid:!1,reason:"address_required",openAddressPicker:!0}},calculateCheckoutTotals(e,t,a=0){return ue.calculateCheckoutTotals(e,t,a)},buildOrderPayload({receiverId:e,addressId:t,cartItems:a}){const r=a.map(i=>Number(i.id)).filter(i=>Number.isFinite(i)&&i>0);return{receiverId:Number(e),addressId:Number(t),cartItemIds:r}},validateOrderItems(e){if(!e.length)return{valid:!1,reason:"no_items"};const t=e.map(a=>Number(a.id)).filter(a=>Number.isFinite(a)&&a>0);return t.length?{valid:!0,cartItemIds:t}:{valid:!1,reason:"invalid_items"}}};function On(){return N.syncCartSelection(),se.calculateCheckoutTotals(k.cartItems,k.cartSelectedIds,k.cartCouponDiscount||0)}function xn(){const e=ge(),t=new Date(Date.now()+3*864e5),a=new Date(Date.now()+5*864e5),r=i=>i.toLocaleDateString(e,{day:"numeric",month:"long"});return`${r(t)} – ${r(a)}`}function ei(){return N.getSelectedCartItems().slice(0,6).map(e=>{var a;const t=e.image||((a=e.product)==null?void 0:a.image)||C.placeholderImage;return`<img src="${s(t)}" alt="" class="app-checkout-item-thumb" loading="eager" decoding="async" />`}).join("")}function ti(){return f.receivers.length?`<div class="selectable-list">${f.receivers.map(e=>`
    <article class="selectable-card ${String(e.id)===String(f.selectedReceiverId)?"selected":""}" data-select-receiver="${s(e.id)}">
      <div>
        <strong>${s(e.fullName||"")}</strong>
        <p class="hint">${s(e.phone||"")}</p>
      </div>
      <button class="icon-button" data-delete-receiver="${s(e.id)}" type="button" aria-label="Delete receiver">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
      </button>
    </article>
  `).join("")}</div>`:'<div class="checkout-empty">No receivers yet. Add one below.</div>'}function ai(){return`
    <form class="checkout-add-form" data-add-receiver-form>
      <h4>Add receiver</h4>
      <div class="form-grid">
        <label>First name<input id="receiverFirstName" required /></label>
        <label>Last name<input id="receiverLastName" required /></label>
        <label>Phone<input id="receiverPhone" required placeholder="+998901234567" /></label>
      </div>
      <button class="secondary-button" type="submit">Add receiver</button>
      <p class="field-error" id="receiverFormError"></p>
    </form>
  `}function ri(){return f.addresses.length?`<div class="selectable-list">${f.addresses.map(e=>`
    <article class="selectable-card ${String(e.id)===String(f.selectedAddressId)?"selected":""}" data-select-address="${s(e.id)}">
      <div>
        <strong>${s(e.title||"Address")}</strong>
        <p class="hint">${s(e.address||"")}</p>
      </div>
      <button class="icon-button" data-delete-address="${s(e.id)}" type="button" aria-label="Delete address">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
      </button>
    </article>
  `).join("")}</div>`:'<div class="checkout-empty">No addresses yet. Add one below.</div>'}function ii(){return`
    <form class="checkout-add-form" data-add-address-form>
      <h4>Add address</h4>
      <div class="form-grid">
        <label>Title<input id="addressTitle" required placeholder="Uy" /></label>
        <label>Address<input id="addressText" required placeholder="Toshkent shahar..." /></label>
        <label>Latitude<input id="addressLatitude" required value="41.311151" inputmode="decimal" /></label>
        <label>Longitude<input id="addressLongitude" required value="69.279737" inputmode="decimal" /></label>
      </div>
      <button class="secondary-button" type="submit">Add address</button>
      <p class="field-error" id="addressFormError"></p>
    </form>
  `}function ya(e){return e==="address"?`
      <div class="app-checkout-picker">
        ${ri()}
        ${ii()}
      </div>
    `:`
    <div class="app-checkout-picker">
      ${ti()}
      ${ai()}
    </div>
  `}function si(){return`
    <div class="app-checkout-modal-art app-checkout-modal-art--confirm" aria-hidden="true">
      <svg viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="52" fill="#E8F4FF"/>
        <path d="M38 72c0-8 6-14 14-14h16c8 0 14 6 14 14v6H38v-6Z" fill="#D4A574"/>
        <path d="M36 78h48v8H36v-8Z" fill="#C49563"/>
        <path d="M44 58h32l4 8H40l4-8Z" fill="#E8C9A0"/>
        <path d="M28 64c6-10 16-16 32-16s26 6 32 16" stroke="#F4B8A8" stroke-width="6" stroke-linecap="round"/>
        <path d="M24 68c8-12 20-18 36-18s28 6 36 18" stroke="#F4B8A8" stroke-width="6" stroke-linecap="round"/>
      </svg>
    </div>
  `}function oi(){return`
    <div class="app-checkout-modal-art app-checkout-modal-art--success" aria-hidden="true">
      <svg viewBox="0 0 120 120" fill="none">
        <rect x="34" y="44" width="52" height="40" rx="4" fill="#D4A574"/>
        <path d="M34 52h52" stroke="#C49563" stroke-width="2"/>
        <path d="M48 44V36h24v8" stroke="#C49563" stroke-width="3"/>
        <path d="M60 24v28" stroke="#22C55E" stroke-width="4" stroke-linecap="round"/>
        <path d="M52 36l8-8 8 8" stroke="#22C55E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  `}function ni(e,t){const a=(e==null?void 0:e.fullName)||"—",r=(t==null?void 0:t.address)||"—";return`
    <div class="app-checkout-overlay" role="dialog" aria-modal="true" aria-labelledby="checkoutConfirmTitle">
      <div class="app-checkout-modal">
        ${si()}
        <h3 id="checkoutConfirmTitle">${s(n("checkout.confirmTitle"))}</h3>
        <p class="app-checkout-modal-sub">${s(n("checkout.confirmQuestion"))}</p>
        <div class="app-checkout-modal-details">
          <p>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21a8 8 0 1 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/></svg>
            <span>${s(n("checkout.confirmName",{name:a}))}</span>
          </p>
          <p>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
            <span>${s(n("checkout.confirmAddress",{address:r}))}</span>
          </p>
        </div>
        <p class="app-checkout-modal-disclaimer">${s(n("checkout.confirmDisclaimer"))}</p>
        ${f.checkoutError?`<div class="app-checkout-modal-error">${s(f.checkoutError)}</div>`:""}
        <div class="app-checkout-modal-actions">
          <button class="app-checkout-modal-cancel" type="button" data-checkout-confirm-cancel>${s(n("checkout.cancel"))}</button>
          <button class="app-checkout-modal-confirm" type="button" data-checkout-confirm-submit ${f.orderSubmitting?"disabled":""}>
            ${s(f.orderSubmitting?n("checkout.placing"):n("checkout.confirm"))}
          </button>
        </div>
      </div>
    </div>
  `}function ci(){return`
    <div class="app-checkout-overlay app-checkout-overlay--success" role="dialog" aria-modal="true" aria-labelledby="checkoutSuccessTitle" data-checkout-success-dismiss>
      <div class="app-checkout-modal app-checkout-modal--success" data-checkout-success-card>
        ${oi()}
        <h3 id="checkoutSuccessTitle">${s(n("checkout.successTitle"))}</h3>
        <p class="app-checkout-modal-sub">${s(n("checkout.successSubtitle"))}</p>
      </div>
    </div>
  `}function Nn(e,t){const a=e&&t&&k.cartItems.length&&!f.orderSubmitting;return`
    <div class="summary-items">
      ${k.cartItems.map(r=>`
        <div class="summary-item">
          <span>${s(r.name)} ${r.variantLabel?`· ${s(r.variantLabel)}`:""} x ${r.quantity}</span>
          <strong>${D(r.lineTotal)}</strong>
        </div>
      `).join("")}
    </div>
    <div class="summary-total"><span>Subtotal</span><strong>${D(k.cartTotal)}</strong></div>
    <div class="summary-box">
      <strong>Receiver</strong>
      <p class="hint">${e?`${s(e.fullName||"")} · ${s(e.phone||"")}`:"Select receiver"}</p>
    </div>
    <div class="summary-box">
      <strong>Address</strong>
      <p class="hint">${t?`${s(t.title||"")} · ${s(t.address||"")}`:"Select address"}</p>
    </div>
    <button class="primary-button full" data-place-order type="button" ${a?"":"disabled"}>
      ${f.orderSubmitting?"Submitting...":"Place Order"}
    </button>
  `}function Fn(){const e=f.orderSuccess;o.checkoutContent.innerHTML=`
    <div class="app-checkout-page app-checkout-success">
      <header class="app-checkout-header">
        <span class="app-checkout-header-spacer" aria-hidden="true"></span>
        <h2>${s(n("checkout.orderCreated"))}</h2>
        <span class="app-checkout-header-spacer" aria-hidden="true"></span>
      </header>
      <div class="app-checkout-scroll app-checkout-success-body">
        <div class="order-success-icon">✓</div>
        <p>${s(n("orders.order"))} #${s(e.id)} · ${s(e.status||"NEW")}</p>
        <strong class="app-checkout-success-total">${D(e.totalAmount)}</strong>
        <p class="hint">${s(e.fullName||"")} ${e.phone?`· ${s(e.phone)}`:""}</p>
        <p class="hint">${s(e.address||"")}</p>
        <div class="app-checkout-success-actions">
          <button class="app-checkout-secondary-btn" data-success-orders type="button">${s(n("checkout.viewOrders"))}</button>
          <button class="app-checkout-primary-btn" data-success-continue type="button">${s(n("checkout.continueShopping"))}</button>
        </div>
      </div>
    </div>
  `}function sr(){if(f.checkoutLoading){o.checkoutContent.innerHTML=`
      <div class="app-checkout-page">
        <div class="app-checkout-skeleton skeleton-card"></div>
        <div class="app-checkout-skeleton skeleton-card"></div>
        <div class="app-checkout-skeleton skeleton-card"></div>
      </div>
    `;return}const e=f.receivers.find(c=>String(c.id)===String(f.selectedReceiverId)),t=f.addresses.find(c=>String(c.id)===String(f.selectedAddressId)),a=On(),r=t?`${s(t.title||"")} · ${s(t.address||"")}`:s(n("checkout.addressNotSelected")),i=e?`${s(e.fullName||"")} · ${s(e.phone||"")}`:s(n("checkout.receiverNotSelected"));o.checkoutContent.innerHTML=`
    <div class="app-checkout-page">
      <header class="app-checkout-header">
        <button class="app-checkout-back" type="button" data-checkout-close aria-label="${s(n("checkout.back"))}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>
        </button>
        <h2>${s(n("checkout.title"))}</h2>
        <span class="app-checkout-header-spacer" aria-hidden="true"></span>
      </header>

      <div class="app-checkout-scroll">
        ${f.checkoutError?`<div class="app-checkout-error">${s(f.checkoutError)}</div>`:""}

        <section class="app-checkout-card">
          <h3>${s(n("checkout.deliveryTitle"))}</h3>
          <p class="app-checkout-muted">${s(n("checkout.deliveryEta"))}</p>
          <div class="app-checkout-address-box">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
            <span>${r}</span>
          </div>
          <button class="app-checkout-primary-btn" type="button" data-checkout-toggle-address>
            ${s(n("checkout.selectAddress"))}
          </button>
          ${f.checkoutAddressPickerOpen?ya("address"):""}
          <button class="app-checkout-receiver-row" type="button" data-checkout-toggle-receiver>
            <span class="app-checkout-receiver-avatar" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M20 21a8 8 0 1 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/></svg>
            </span>
            <span class="app-checkout-receiver-copy">
              <strong>${s(n("checkout.receiver"))}</strong>
              <span>${i}</span>
            </span>
            <svg class="app-checkout-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>
          </button>
          ${f.checkoutReceiverPickerOpen?ya("receiver"):""}
        </section>

        <section class="app-checkout-card app-checkout-delivery-items">
          <h3>${s(n("checkout.deliveryOn",{dates:xn()}))}</h3>
          <div class="app-checkout-item-thumbs">${ei()}</div>
        </section>

        <section class="app-checkout-card">
          <h3>${s(n("checkout.paymentMethod"))}</h3>
          <div class="app-checkout-payment">
            <span class="app-checkout-payment-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
            </span>
            <div>
              <strong>${s(n("checkout.paymentCod"))}</strong>
              <p>${s(n("checkout.paymentCodHint"))}</p>
            </div>
          </div>
        </section>

        <div class="app-checkout-info">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
          <p>${s(n("checkout.deliveryInfo"))}</p>
        </div>

        <section class="app-checkout-card app-checkout-coupon-card">
          <h3>${s(n("checkout.couponTitle"))}</h3>
          <button class="app-checkout-coupon-row" type="button" data-checkout-toggle-coupon>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"/><path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4z"/><path d="M12 8v8"/></svg>
            <span>${k.cartCoupon?s(k.cartCoupon):s(n("checkout.applyCoupon"))}</span>
            <svg class="app-checkout-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>
          </button>
          ${f.checkoutCouponOpen?`
            <div class="app-checkout-coupon-form">
              <input type="text" id="checkoutCouponInput" value="${s(k.cartCoupon||"")}" placeholder="${s(n("cart.couponPlaceholder"))}" />
              <button type="button" class="app-checkout-secondary-btn" data-apply-coupon>${s(n("cart.applyCoupon"))}</button>
            </div>
          `:""}
        </section>

        <section class="app-checkout-card app-checkout-summary-card">
          <h3>${s(n("checkout.yourOrder"))}</h3>
          <div class="app-checkout-summary-line">
            <span>${s(n("checkout.itemsCount",{count:a.itemCount}))}</span>
            <strong>${D(a.subtotal)}</strong>
          </div>
          <div class="app-checkout-summary-line app-checkout-summary-delivery">
            <span>${s(n("checkout.deliveryFee"))}</span>
            <strong>${a.deliveryFee?D(a.deliveryFee):s(n("cart.freeDelivery"))}</strong>
          </div>
          ${a.discount>0?`
            <div class="app-checkout-summary-line app-checkout-summary-discount">
              <span>${s(n("cart.discount"))}</span>
              <strong>- ${D(a.discount)}</strong>
            </div>
          `:""}
          <div class="app-checkout-summary-total">
            <span>${s(n("checkout.totalToPay"))}</span>
            <strong>${D(a.total)}</strong>
          </div>
          <p class="app-checkout-legal">${s(n("checkout.legalNotice"))}</p>
        </section>
      </div>

      <div class="app-checkout-sticky">
        <div class="app-checkout-sticky-total">
          <strong>${D(a.total)}</strong>
          <span>${s(n("checkout.itemsCount",{count:a.itemCount}))}</span>
        </div>
        <button class="app-checkout-confirm" type="button" data-place-order ${f.orderSubmitting?"disabled":""}>
          ${s(f.orderSubmitting?n("checkout.placing"):n("checkout.confirm"))}
        </button>
      </div>
      ${f.checkoutConfirmOpen?ni(e,t):""}
      ${f.orderSuccess?ci():""}
    </div>
  `,Se(o.checkoutContent)}const J={render:sr,renderCheckout:sr,renderCheckoutCartThumbs:ei,renderCheckoutPickerList:ya,renderCheckoutConfirmIllustration:si,renderCheckoutSuccessIllustration:oi,renderCheckoutConfirmModal:ni,renderCheckoutSuccessModal:ci,renderReceiverList:ti,renderReceiverForm:ai,renderAddressList:ri,renderAddressForm:ii,renderOrderSummary:Nn,renderOrderSuccess:Fn};let Ae=null;const j={getAbortController(){return Ae},abortOrder(){Ae==null||Ae.abort(),Ae=null},async prepare({showLoginRequired:e}={}){if(!V.isLoggedIn()){e==null||e();return}await G.load();const t=N.getSelectedCartItems();if(!se.validatePrepareCheckout(t).valid){M(n("cart.emptySelection")||"Select items to checkout","warning");return}f.orderSuccess=null,f.checkoutError="",f.checkoutStep=1,f.checkoutAddressPickerOpen=!1,f.checkoutReceiverPickerOpen=!1,f.checkoutCouponOpen=!1,f.checkoutConfirmOpen=!1,f.checkoutLoading=!0,J.render(),Te(),o.checkoutDialog.showModal(),X(),await Promise.all([j.loadReceivers(),j.loadAddresses()]),f.checkoutLoading=!1,J.render()},async loadReceivers(e){const t=await se.loadReceivers(e,f.selectedReceiverId);if(!t.success){f.checkoutError=t.error;return}f.receivers=t.receivers,f.selectedReceiverId=t.selectedReceiverId},async loadAddresses(e){const t=await se.loadAddresses(e,f.selectedAddressId);if(!t.success){f.checkoutError=t.error;return}f.addresses=t.addresses,f.selectedAddressId=t.selectedAddressId},getTotals(){return N.getCartTotals()},openConfirm(){if(!N.getSelectedCartItems().length)return;const t=se.validateConfirmCheckout({selectedAddressId:f.selectedAddressId,selectedReceiverId:f.selectedReceiverId});if(!t.valid){t.reason==="address_required"?(f.checkoutError=n("checkout.addressRequired"),f.checkoutAddressPickerOpen=!0):t.reason==="receiver_required"&&(f.checkoutError=n("checkout.receiverRequired"),f.checkoutReceiverPickerOpen=!0),f.checkoutConfirmOpen=!1,J.render();return}f.checkoutError="",f.checkoutConfirmOpen=!0,J.render()},async submitOrder(){var a;if(f.orderSubmitting)return;const e=N.getSelectedCartItems(),t=se.validateOrderItems(e);if(!t.valid){f.checkoutError=t.reason==="invalid_items"?n("checkout.invalidItems"):n("checkout.noItems"),J.render();return}j.abortOrder(),Ae=new AbortController,f.orderSubmitting=!0,f.checkoutError="",J.render();try{const r=se.buildOrderPayload({receiverId:f.selectedReceiverId,addressId:f.selectedAddressId,cartItems:e}),i=await he.createOrder(r,{signal:Ae.signal});if(!i.success){f.checkoutError=i.error||n("checkout.orderFailed"),M(f.checkoutError,"error");return}j.finishAndGoHome(),M(n("checkout.orderCreated"),"success"),G.load().then(()=>N.render())}catch(r){f.checkoutError=(r==null?void 0:r.message)||n("checkout.orderFailed"),M(f.checkoutError,"error")}finally{f.orderSubmitting=!1,Ae=null,(a=o.checkoutDialog)!=null&&a.open&&J.render()}},finishAndGoHome(){var e,t;try{f.checkoutConfirmOpen=!1,f.orderSuccess=null,f.checkoutError="",(e=o.checkoutDialog)==null||e.close(),Te(),U(),$e(),window.location.hash&&window.location.hash!=="#/"&&window.location.hash!=="#"&&(window.location.hash="#/"),window.scrollTo({top:0,behavior:"smooth"})}catch(a){console.error("finishAndGoHome failed:",a),f.checkoutConfirmOpen=!1,f.orderSubmitting=!1,(t=o.checkoutDialog)==null||t.close(),U()}},async createReceiver(){var d,u,p;const e=(d=document.getElementById("receiverFirstName"))==null?void 0:d.value.trim(),t=(u=document.getElementById("receiverLastName"))==null?void 0:u.value.trim(),a=(p=document.getElementById("receiverPhone"))==null?void 0:p.value.trim(),r=document.getElementById("receiverFormError"),i=se.validateReceiverInput({firstName:e,lastName:t,phone:a});if(!i.valid){r&&(r.textContent=i.error);return}const c=await se.createReceiver({firstName:e,lastName:t,phone:a});c.success&&(await j.loadReceivers(c.receiver.id),J.render(),M("Receiver added"))},async createAddress(){var u,p,m,h;const e=(u=document.getElementById("addressTitle"))==null?void 0:u.value.trim(),t=(p=document.getElementById("addressText"))==null?void 0:p.value.trim(),a=Number((m=document.getElementById("addressLatitude"))==null?void 0:m.value),r=Number((h=document.getElementById("addressLongitude"))==null?void 0:h.value),i=document.getElementById("addressFormError"),c=se.validateAddressInput({title:e,address:t,latitude:a,longitude:r});if(!c.valid){i&&(i.textContent=c.error);return}const d=await se.createAddress({title:e,address:t,latitude:a,longitude:r});d.success&&(await j.loadAddresses(d.address.id),J.render(),M("Address added"))},async deleteReceiver(e){(await se.deleteReceiver(e)).success&&(String(f.selectedReceiverId)===String(e)&&(f.selectedReceiverId=null),await j.loadReceivers(),J.render())},async deleteAddress(e){(await se.deleteAddress(e)).success&&(String(f.selectedAddressId)===String(e)&&(f.selectedAddressId=null),await j.loadAddresses(),J.render())},applyCoupon(e){const t=ue.applyCoupon(e,N.getCartTotals().subtotal);t.valid?(k.cartCoupon=t.coupon,k.cartCouponDiscount=t.discount,M(n("cart.couponApplied"),"success")):t.invalid&&M(n("cart.couponInvalid"),"warning"),J.render(),N.render()}},zn=()=>E("/api/notifications",{requireAuth:!0,showError:!1}),Un=()=>E("/api/notifications/unread-count",{requireAuth:!0,showError:!1}),Hn=e=>E(`/api/notifications/${e}/read`,{method:"POST",requireAuth:!0,showError:!1}),_n=e=>E("/api/notifications/token",{method:"POST",body:JSON.stringify({token:e}),requireAuth:!0}),ba={async loadNotifications(){const e=await zn();return e===null?Ee("Notifications could not be loaded."):{success:!0,notifications:Yi(e).map(Ki).filter(t=>t.id!==void 0)}},async loadUnreadCount(){const e=await Un();return e===null?{success:!1,sessionExpired:ga()}:{success:!0,count:Wi(e)}},async markRead(e){return await Hn(e)===null?{success:!1,sessionExpired:ga()}:{success:!0}},async saveToken(e){const t=String(e||"").trim();if(!t)return{success:!1,error:"empty"};const a=await _n(t);return{success:a!==null,result:a}}};function Vn({notification:e,updating:t=!1,labels:a={}}){const{unreadLabel:r="Unread",readLabel:i="Read",savingLabel:c="Saving...",markReadLabel:d="Mark read",typeLabel:u="",typeIcon:p="i"}=a;return`
    <article class="notification-card ${e.read?"read":"unread"} ${t?"loading":""}" data-notification-card="${s(e.id)}">
      <div class="notification-icon type-${s(e.type.toLowerCase())}" aria-hidden="true">${p}</div>
      <div>
        <div class="notification-head">
          <strong>${s(e.title)}</strong>
          ${e.read?"":`<span class="unread-dot" aria-label="${s(r)}"></span>`}
        </div>
        <p>${s(e.message)}</p>
        <div class="notification-meta">
          <span>${s(u)}</span>
          <span>${Ea(e.createdAt)}</span>
        </div>
      </div>
      <button class="secondary-button notification-read-button" data-notification-read="${s(e.id)}" ${e.read||t?"disabled":""} type="button">
        ${e.read?s(i):s(t?c:d)}
      </button>
    </article>
  `}function jn(e){return{ORDER:"O",PROMO:"%",SYSTEM:"i"}[e]||"i"}function Kn({itemsHtml:e=""}){return`
    <div class="notifications-list">
      ${e}
    </div>
  `}function Gn(){return`
    <div class="notifications-loading">
      <div class="skeleton-card"></div>
      <div class="skeleton-card"></div>
    </div>
  `}function or({title:e,message:t="",retryLabel:a=""}){return`
    <div class="notifications-empty">
      <strong>${s(e)}</strong>
      ${t?`<p>${s(t)}</p>`:""}
      ${a?`<button class="secondary-button" data-notifications-retry type="button">${s(a)}</button>`:""}
    </div>
  `}const Z={clearState({closeDrawer:e}={}){var t;B.notifications=[],B.notificationsLoading=!1,B.notificationsError="",B.unreadCount=0,B.unreadCountLoading=!1,B.notificationUpdatingIds=new Set,Z.updateBadge(),(t=o.notificationsDrawer)!=null&&t.classList.contains("open")&&(e==null||e())},updateBadge(){o.notificationsCount.textContent=B.unreadCount,o.notificationsCount.hidden=B.unreadCount<=0,o.notificationsSummary.textContent=`${B.unreadCount} ${n("notifications.unread")}`},renderCard(e){return Vn({notification:e,updating:B.notificationUpdatingIds.has(String(e.id)),labels:{unreadLabel:n("notifications.unread"),readLabel:n("notifications.read"),savingLabel:n("common.saving"),markReadLabel:n("notifications.markRead"),typeLabel:Gi(e.type),typeIcon:jn(e.type)}})},render(){if(Z.updateBadge(),B.notificationsLoading){o.notificationsContent.innerHTML=Gn();return}if(B.notificationsError){o.notificationsContent.innerHTML=or({title:n("notifications.title"),message:B.notificationsError,retryLabel:n("common.tryAgain")});return}if(!B.notifications.length){o.notificationsContent.innerHTML=or({title:n("notifications.none"),message:"Order, promo and system updates will appear here."});return}o.notificationsContent.innerHTML=Kn({itemsHtml:B.notifications.map(e=>Z.renderCard(e)).join("")})},async loadUnreadCount({isLoggedIn:e,onSessionExpired:t}={}){if(!(e!=null&&e())){Z.clearState();return}B.unreadCountLoading=!0;const a=await ba.loadUnreadCount();if(B.unreadCountLoading=!1,!a.success){if(a.sessionExpired){Z.clearState({closeDrawer:t});return}Z.updateBadge();return}B.unreadCount=a.count,Z.updateBadge()},async load({isLoggedIn:e,showLoginRequired:t,onSessionExpired:a}={}){if(!(e!=null&&e())){t==null||t();return}B.notificationsLoading=!0,B.notificationsError="",Z.render();const r=await ba.loadNotifications();if(B.notificationsLoading=!1,!r.success){if(r.sessionExpired){Z.clearState({closeDrawer:a});return}B.notificationsError=r.error,Z.render();return}B.notifications=r.notifications,Z.render()}};function Wn({statusLabel:e,statusModifier:t}){return`
    <span class="app-orders-status app-orders-status--${t}">
      ${s(e)}
    </span>
  `}function Yn({items:e=[]}){return e.length?e.slice(0,6).map(t=>`
    <img
      src="${s(t.image||C.placeholderImage)}"
      alt=""
      class="app-orders-thumb"
      loading="lazy"
      decoding="async"
    />
  `).join(""):'<span class="app-orders-thumb app-orders-thumb--empty" aria-hidden="true"></span>'}function Qn({order:e,statusBadgeHtml:t,thumbsHtml:a,orderLabel:r,itemsCountLabel:i,itemsLabel:c,totalLabel:d,addressLabel:u,viewDetailsLabel:p,lineCount:m,itemCount:h}){const v=e.createdAt?String(e.createdAt):"";return`
    <article class="app-orders-card">
      <div class="app-orders-card-top">
        <span class="app-orders-timestamp">${s(v)}</span>
        ${t}
      </div>
      <div class="app-orders-thumbs">${a}</div>
      <h3 class="app-orders-card-title">
        ${s(r)} #${s(e.id)} · ${s(i)}
      </h3>
      <p class="app-orders-card-meta">${s(c)}</p>
      <div class="app-orders-card-total">
        <span>${s(d)}</span>
        <strong>${Pr(e.totalAmount)}</strong>
      </div>
      <p class="app-orders-card-name">${s(e.fullName||"")}</p>
      <p class="app-orders-card-phone">${s(e.phone||"")}</p>
      <p class="app-orders-card-address">${s(u)} ${s(e.address||"")}</p>
      <button class="app-orders-details-btn" data-order-detail="${s(e.id)}" type="button">
        ${s(p)}
      </button>
    </article>
  `}const wa=[{key:"NEW",icon:"clock"},{key:"CONFIRMED",icon:"check"},{key:"PACKED",icon:"box"},{key:"SHIPPED",icon:"truck"},{key:"DELIVERED",icon:"car"}];function Jn(e){const t={clock:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',check:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4 10-10"/></svg>',box:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4 7v10l8 4 8-4V7z"/><path d="M4 7l8 4 8-4M12 11v10"/></svg>',truck:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h11v8H3z"/><path d="M14 10h4l3 3v2h-7z"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="17.5" cy="17.5" r="1.5"/></svg>',car:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14l-1-4H6z"/><path d="M4 16h16v3H4z"/><circle cx="7.5" cy="16.5" r="1.5"/><circle cx="16.5" cy="16.5" r="1.5"/></svg>'};return t[e]||t.clock}function Zn(e=""){const t=String(e||"").toUpperCase();if(t==="PENDING")return 0;const a=wa.findIndex(r=>r.key===t);return a>=0?a:0}function Xn({status:e="",statusLabelFor:t}){const a=Zn(e),r=["CANCELED","CANCELLED"].includes(String(e||"").toUpperCase());return`
    <div class="app-orders-stepper ${r?"is-canceled":""}">
      ${wa.map((i,c)=>{const d=wa.length-1,u=!r&&a===d;return`
          <div class="app-orders-step ${!r&&(c<a||u&&c<=a)?"is-done":!r&&c===a&&!u?"is-active":""}">
            <span class="app-orders-step-icon">${Jn(i.icon)}</span>
            <span class="app-orders-step-label">${s(t(i.key))}</span>
          </div>
        `}).join("")}
    </div>
  `}function ec({item:e}){return`
    <article class="app-orders-detail-product">
      <img src="${s(e.image||C.placeholderImage)}" alt="${s(e.name)}" loading="lazy" decoding="async" />
      <div>
        <strong>${s(e.name)}</strong>
        <p class="app-orders-detail-muted">x${e.quantity}</p>
      </div>
    </article>
  `}function tc({lineCount:e,itemCount:t,totalAmount:a,goodsLabel:r,totalAmountLabel:i}){return`
    <div class="app-orders-detail-summary">
      <div class="app-orders-detail-summary-row">
        <span>${s(r)}</span>
        <strong>${s(e||t)}</strong>
      </div>
      <div class="app-orders-detail-summary-row">
        <span>${s(i)}</span>
        <strong>${Pr(a)}</strong>
      </div>
    </div>
  `}function ac({status:e="NEW"}){const t=String(e||"NEW").toUpperCase();return`
    <span class="app-orders-detail-status-pill">
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
      ${s(t)}
    </span>
  `}function rc(e=""){const a=`orders.statusMessage.${String(e||"").toUpperCase()}`,r=n(a);return r!==a?r:n("orders.statusMessage.default")}function ic(e={}){const t=Number(e.latitude??e.addressLatitude),a=Number(e.longitude??e.addressLongitude);if(Number.isFinite(t)&&Number.isFinite(a))return`https://www.google.com/maps/search/?api=1&query=${t},${a}`;const r=encodeURIComponent(e.address||"");return r?`https://www.google.com/maps/search/?api=1&query=${r}`:""}const sc={render({renderHeader:e,renderOrderCard:t}={}){if(g.orderDetailLoading)return`
        <div class="app-orders-page">
          ${e(n("orders.details"),"back")}
          <div class="app-orders-scroll">
            <div class="app-orders-skeleton skeleton-card"></div>
            <div class="app-orders-skeleton skeleton-card"></div>
          </div>
        </div>
      `;if(g.orderDetailError)return`
        <div class="app-orders-page">
          ${e(n("orders.details"),"back")}
          <div class="app-orders-scroll">
            <div class="app-orders-error">
              <strong>${s(n("orders.detailUnavailable"))}</strong>
              <p>${s(g.orderDetailError)}</p>
            </div>
          </div>
        </div>
      `;if(!g.selectedOrder)return`
        <div class="app-orders-page">
          ${e(n("orders.title"),"close")}
          <div class="app-orders-scroll">
            ${g.orders.map(t).join("")}
          </div>
        </div>
      `;const a=g.selectedOrder,r=Array.isArray(a.items)?a.items.map(u=>Ia({...u,orderId:a.id})):[],i=he.getLineCount(a),c=he.getItemCount(a),d=ic(a);return`
      <div class="app-orders-page">
        ${e(`${n("orders.order")} #${a.id}`,"back")}
        <div class="app-orders-scroll app-orders-detail">
          <article class="app-orders-detail-hero">
            <div class="app-orders-detail-hero-top">
              <div>
                <h3>${s(n("orders.order"))} #${s(a.id)}</h3>
                <p class="app-orders-detail-date">${s(ts(a.createdAt))}</p>
              </div>
              ${ac({status:a.status})}
            </div>
            ${Xn({status:a.status,statusLabelFor:Fr})}
            ${tc({lineCount:n("orders.itemsCount",{count:i||c}),itemCount:c,totalAmount:a.totalAmount,goodsLabel:n("orders.goodsLabel"),totalAmountLabel:n("orders.totalAmount")})}
          </article>

          <section class="app-orders-detail-section">
            <h4>${s(n("orders.deliveryInfo"))}</h4>
            <p class="app-orders-detail-name">${s(a.fullName||"")}</p>
            <p class="app-orders-detail-muted">${s(a.phone||"")}</p>
            <p class="app-orders-detail-muted">${s(a.address||"")}</p>
            ${d?`
              <a class="app-orders-details-btn" href="${s(d)}" target="_blank" rel="noopener noreferrer">
                ${s(n("orders.openOnMap"))}
              </a>
            `:""}
          </section>

          <section class="app-orders-detail-section">
            <h4>${s(n("orders.products"))}</h4>
            ${r.length?r.map(u=>ec({item:u})).join(""):`<p class="app-orders-detail-muted">${s(n("orders.noItems"))}</p>`}
          </section>

          <section class="app-orders-detail-section">
            <h4>${s(n("orders.orderActions"))}</h4>
            <p class="app-orders-detail-muted">${s(rc(a.status))}</p>
          </section>

          <button class="app-orders-details-btn app-orders-feedback-btn" type="button" data-order-feedback="${s(a.id)}">
            ${s(n("orders.feedback"))}
          </button>
        </div>
      </div>
    `}};function oc(){return'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>'}function Ge(e,t){return`
    <header class="app-orders-header">
      <button class="app-orders-back" ${t==="close"?`data-orders-close type="button" aria-label="${s(n("checkout.back"))}"`:`data-orders-back type="button" aria-label="${s(n("checkout.back"))}"`}>
        ${oc()}
      </button>
      <h2>${s(e)}</h2>
      <span aria-hidden="true"></span>
    </header>
  `}function nc(e=""){return Wn({statusLabel:zr(e),statusModifier:he.orderStatusModifier(e)})}function cc(e={}){const t=(Array.isArray(e.items)?e.items:[]).map(a=>Ia({...a,orderId:e.id}));return Yn({items:t})}function sa(e){const t=he.getItemCount(e),a=he.getLineCount(e);return Qn({order:e,statusBadgeHtml:nc(e.status),thumbsHtml:cc(e),orderLabel:n("orders.order"),itemsCountLabel:n("orders.itemsCount",{count:a}),itemsLabel:n("orders.items",{count:t}),totalLabel:n("orders.totalLabel"),addressLabel:n("orders.addressLabel"),viewDetailsLabel:n("orders.viewDetails"),lineCount:a,itemCount:t})}const ne={renderHeader:Ge,renderOrderCard:sa,render(){if(g.ordersLoading){o.ordersContent.innerHTML=`
        <div class="app-orders-page">
          ${Ge(n("orders.title"),"close")}
          <div class="app-orders-scroll">
            <div class="app-orders-skeleton skeleton-card"></div>
            <div class="app-orders-skeleton skeleton-card"></div>
          </div>
        </div>
      `;return}if(g.ordersError){o.ordersContent.innerHTML=`
        <div class="app-orders-page">
          ${Ge(n("orders.title"),"close")}
          <div class="app-orders-scroll">
            <div class="app-orders-error">
              <strong>${s(n("orders.unavailable"))}</strong>
              <p>${s(g.ordersError)}</p>
              <button class="app-orders-details-btn" data-orders-retry type="button">${s(n("common.tryAgain"))}</button>
            </div>
          </div>
        </div>
      `;return}if(!g.orders.length){o.ordersContent.innerHTML=`
        <div class="app-orders-page">
          ${Ge(n("orders.title"),"close")}
          <div class="app-orders-scroll">
            <div class="app-orders-empty">
              <strong>${s(n("orders.none"))}</strong>
              <p>${s(n("orders.emptyHint"))}</p>
              <button class="app-orders-details-btn" data-orders-start-shopping type="button">${s(n("home.startShopping"))}</button>
            </div>
          </div>
        </div>
      `;return}if(g.orderDetailLoading||g.selectedOrder||g.orderDetailError){o.ordersContent.innerHTML=sc.render({renderHeader:Ge,renderOrderCard:sa});return}o.ordersContent.innerHTML=`
      <div class="app-orders-page">
        ${Ge(n("orders.title"),"close")}
        <div class="app-orders-scroll">
          ${g.orders.map(sa).join("")}
        </div>
      </div>
    `,Se(o.ordersContent)},async load({onSessionExpired:e}={}){g.ordersLoading=!0,g.ordersError="",g.selectedOrder=null,g.selectedOrderHistory=[],g.orderHistoryWarning="",ne.render();const t=await he.loadOrders();if(g.ordersLoading=!1,!t.success){if(t.sessionExpired){e==null||e();return}g.ordersError=t.error,ne.render();return}g.orders=t.orders,ne.render()},async openDetail(e){g.orderDetailLoading=!0,g.orderDetailError="",g.orderHistoryWarning="",ne.render();const t=await he.loadOrderDetail(e);if(g.orderDetailLoading=!1,!t.success){g.orderDetailError=t.error,ne.render();return}g.selectedOrder=t.order,g.selectedOrderHistory=t.history,g.orderHistoryWarning=t.historyWarning,ne.render()}},_={clearState(){Z.clearState({closeDrawer:_.close})},async loadUnreadCount(){return Z.loadUnreadCount({isLoggedIn:y.isLoggedIn,onSessionExpired:_.close})},async open(){if(!y.isLoggedIn()){y.showLoginRequired();return}o.notificationsDrawer.classList.add("open"),o.notificationsDrawer.setAttribute("aria-hidden","false"),X(),await Promise.all([_.load(),_.loadUnreadCount()])},close(){o.notificationsDrawer.classList.remove("open"),o.notificationsDrawer.setAttribute("aria-hidden","true"),U()},async load(){return Z.load({isLoggedIn:y.isLoggedIn,showLoginRequired:y.showLoginRequired,onSessionExpired:_.close})},async markRead(e,t={}){const a=B.notifications.find(i=>String(i.id)===String(e));if(!a||a.read)return!0;B.notificationUpdatingIds.add(String(e)),Z.render();const r=await ba.markRead(e);return B.notificationUpdatingIds.delete(String(e)),r.success?(a.read=!0,B.notifications=B.notifications.map(i=>String(i.id)===String(e)?{...i,read:!0}:i),B.unreadCount=Math.max(0,B.unreadCount-1),Z.render(),await _.loadUnreadCount(),t.silent||M("Marked as read"),!0):r.sessionExpired?(_.clearState(),!1):(M(g.lastApiError||"Notification could not be updated."),Z.render(),!1)},async handleCardClick(e){var a,r;const t=B.notifications.find(i=>String(i.id)===String(e));t&&(t.read||await _.markRead(e,{silent:!0}),t.type==="ORDER"&&t.refId&&(_.close(),await((r=(a=F.orders)==null?void 0:a.show)==null?void 0:r.call(a)),await ne.openDetail(t.refId)))}},Fe={async show(){if(!y.isLoggedIn()){y.showLoginRequired();return}o.ordersDialog.showModal(),X(),await Fe.load()},async load(){return ne.load({onSessionExpired:()=>o.ordersDialog.close()})},handleClick(e){var p,m,h,v,$,T,q;const t=e.target.closest("[data-orders-close]"),a=e.target.closest("[data-orders-back]"),r=e.target.closest("[data-order-detail]"),i=e.target.closest("[data-orders-retry]"),c=e.target.closest("[data-orders-start-shopping]"),d=e.target.closest("[data-order-write-review]"),u=e.target.closest("[data-order-feedback]");if(t){o.ordersDialog.close(),(m=(p=F.navigation)==null?void 0:p.unlockBodyIfNoOverlay)==null||m.call(p);return}if(a){g.selectedOrder=null,g.selectedOrderHistory=[],g.orderDetailError="",g.orderHistoryWarning="",ne.render();return}if(d){(v=(h=F.reviews)==null?void 0:h.openWrite)==null||v.call(h,{productId:d.dataset.orderWriteReview,orderId:d.dataset.reviewOrder,productName:d.dataset.reviewName});return}if(u){(T=F.toast)==null||T.call(F,($=F.i18n)==null?void 0:$.t("profile.comingSoon"),"info");return}if(r){ne.openDetail(r.dataset.orderDetail);return}if(i){Fe.load();return}c&&(o.ordersDialog.close(),(q=document.getElementById("products"))==null||q.scrollIntoView({behavior:"smooth",block:"start"}))}};function lc(){var e;document.documentElement.removeAttribute("data-theme"),document.documentElement.style.colorScheme="light";try{localStorage.removeItem("beauty_skin_theme")}catch{}(e=document.getElementById("themeToggle"))==null||e.remove()}const Fa="beauty_skin_search_history",li=8,dc=["SNAIL CREAM","COSRX","SUNSCREEN","LIP TINT","VITAMIN C","COLLAGEN","K-BEAUTY SET","MOISTURIZER"];let nr=null,qe=null;function di(){try{return JSON.parse(localStorage.getItem(Fa)||"[]").slice(0,li)}catch{return[]}}function et(e){const t=String(e||"").trim();if(!t||t.length<2)return;const a=di().filter(r=>r.toLowerCase()!==t.toLowerCase());a.unshift(t),localStorage.setItem(Fa,JSON.stringify(a.slice(0,li)))}function uc(){localStorage.removeItem(Fa),ka("")}function cr(e,t="query"){const a=t==="history"?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.3-4.3m1.3-5.2a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"/></svg>';return`<button class="search-chip" type="button" data-search-chip="${s(e)}" data-chip-type="${t}">${a}${s(e)}</button>`}async function pc(e){if(!e||e.length<2)return[];const t=await ca(e,{page:0,size:6});return x(t).map(K)}function mc(e){return`
    <button class="search-result-item" type="button" data-search-product="${s(e.id)}">
      <img src="${s(e.image)}" alt="" loading="lazy" />
      <div>
        <strong>${s(e.name)}</strong>
        <span>${s(D(e.finalPrice))}</span>
      </div>
    </button>
  `}async function ka(e=""){const t=document.getElementById("searchPanel");if(!t)return;const a=e.trim(),r=di();let i="";if(a.length>=2){i=`<div class="search-panel-section"><div class="search-panel-label">${s(n("search.results"))}</div><div class="search-results-list">${Array(3).fill('<div class="ds-skeleton" style="height:56px;margin-bottom:8px;border-radius:10px"></div>').join("")}</div></div>`,t.innerHTML=i,t.classList.add("open");const d=await pc(a),u=t.querySelector(".search-results-list");u&&(u.innerHTML=d.length?d.map(mc).join(""):`<p class="hint" style="padding:8px">${s(n("search.noResults"))}</p>`);return}const c=[];c.push(`
    <div class="search-panel-section">
      <div class="search-ai-hint">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L6 21l2.3-7-6-4.6h7.6Z"/></svg>
        ${s(n("search.aiHint"))}
      </div>
    </div>
  `),r.length&&c.push(`
      <div class="search-panel-section">
        <div class="search-panel-label">
          ${s(n("search.recent"))}
          <button class="search-panel-clear" type="button" data-clear-search-history>${s(n("search.clear"))}</button>
        </div>
        <div class="search-chips">${r.map(d=>cr(d,"history")).join("")}</div>
      </div>
    `),c.push(`
    <div class="search-panel-section">
      <div class="search-panel-label">${s(n("search.trending"))}</div>
      <div class="search-chips">${dc.map(d=>cr(d,"trending")).join("")}</div>
    </div>
  `),t.innerHTML=c.join("")}function We(){var e;(e=document.getElementById("searchPanel"))==null||e.classList.remove("open")}function gc({onSearch:e,onProductSelect:t}={}){var c,d;qe=e;const a=document.getElementById("searchInput"),r=document.getElementById("searchPanel"),i=document.querySelector(".search-wrap");!a||!r||(a.addEventListener("focus",()=>{ka(a.value),r.classList.add("open")}),a.addEventListener("input",()=>{clearTimeout(nr),nr=setTimeout(()=>ka(a.value),C.searchDebounceMs)}),r.addEventListener("click",u=>{const p=u.target.closest("[data-search-chip]"),m=u.target.closest("[data-search-product]");if(u.target.closest("[data-clear-search-history]")){uc();return}if(p){a.value=p.dataset.searchChip,et(p.dataset.searchChip),We(),qe==null||qe(p.dataset.searchChip);return}m&&(We(),t==null||t(m.dataset.searchProduct))}),document.addEventListener("click",u=>{i!=null&&i.contains(u.target)||We()}),a.addEventListener("keydown",u=>{u.key==="Escape"&&(We(),a.blur())}),(c=document.querySelector(".search-voice"))==null||c.addEventListener("click",()=>{if(!("webkitSpeechRecognition"in window)&&!("SpeechRecognition"in window))return;const u=window.SpeechRecognition||window.webkitSpeechRecognition,p=new u;p.lang=document.documentElement.lang||"en-US",p.onresult=m=>{const h=m.results[0][0].transcript;a.value=h,et(h),qe==null||qe(h),We()},p.start()}),(d=document.querySelector(".search-image"))==null||d.addEventListener("click",()=>{const u=document.createElement("input");u.type="file",u.accept="image/*",u.addEventListener("change",()=>{var p;(p=u.files)!=null&&p[0]&&(a.placeholder=n("search.imagePlaceholder"))}),u.click()}))}const ve={async open(){if(!y.isLoggedIn()){y.showLoginRequired();return}P.profileEditing=!1,P.profileMenuOpen=!1,o.profileDrawer.classList.add("open"),o.profileDrawer.setAttribute("aria-hidden","false"),X(),le(),oe.render(),await ve.loadSnapshot()},close(){P.profileMenuOpen=!1,P.profileLoadSeq+=1,o.profileDrawer.classList.remove("open"),o.profileDrawer.setAttribute("aria-hidden","true"),U(),le()},async loadSnapshot(){var e;return oe.loadSnapshot({isLoggedIn:y.isLoggedIn,loadUnreadCount:(e=F.notifications)==null?void 0:e.loadUnreadCount,updateAuthUi:y.updateUi})},async handleAction(e){var t,a,r,i,c,d,u,p,m,h;return oe.handleAction(e,{closeProfile:ve.close,showOrders:(t=F.orders)==null?void 0:t.show,openOrderDetail:ne.openDetail,clearAuth:y.clearAuth,showToast:M,openFavorites:(a=F.favorites)==null?void 0:a.open,openMyReviews:(r=F.reviews)==null?void 0:r.open,openNotifications:(i=F.notifications)==null?void 0:i.open,setLanguage:(c=F.i18n)==null?void 0:c.setLanguage,applyTranslations:(d=F.i18n)==null?void 0:d.applyTranslations,openPrivacy:(u=F.support)==null?void 0:u.openPrivacy,openTerms:(p=F.support)==null?void 0:p.openTerms,openSupport:(m=F.support)==null?void 0:m.open,prepareCheckout:(h=F.checkout)==null?void 0:h.prepare})},async submitEdit(e){var d,u,p;e.preventDefault();const t=P.user||{},a={id:t.id,email:t.email,fullName:(d=document.getElementById("profileFullName"))==null?void 0:d.value.trim(),phone:(u=document.getElementById("profilePhone"))==null?void 0:u.value.trim(),profileImage:(p=document.getElementById("profileImage"))==null?void 0:p.value.trim()},r=document.getElementById("profileMessage"),i=Oe.validateProfileUpdate(a);if(!i.valid){r&&(r.textContent=i.error,r.className="form-message error");return}const c=await Oe.updateProfile(a);if(!c.success){r&&(r.textContent=c.error,r.className="form-message error");return}c.user&&(P.user=c.user,localStorage.setItem(C.storageKeys.user,JSON.stringify(c.user))),P.profileEditing=!1,y.updateUi(),oe.render(),M("Profile updated.")}},hc={async render(e,{showHomeView:t}={}){const a=e.trim();if(g.currentSearchQuery=a,g.currentGridScreen=a?"search":"home",g.currentRoute==="product"&&(window.location.hash="#/",t==null||t()),!a){l.selectedCategory="ALL",ie.renderCategories(),o.title.textContent=n("home.popular"),await H.loadProducts();return}o.title.textContent=`"${a}" qidiruvi`,o.status.textContent=n("home.loading"),Qe(o.grid,10);const r=await Mr.search(a);l.products=r,ke(),pe(l.products,n("home.noProducts"),{screen:"search"}),o.status.textContent=""}},we={handleInput(e){clearTimeout(g.searchTimer),g.searchTimer=setTimeout(()=>{const t=e.target.value;we.search(t).catch(()=>{ye(o.grid,"Qidiruv vaqtida xatolik yuz berdi."),o.status.textContent=""}),t.trim().length>=2&&et(t)},C.searchDebounceMs)},async search(e){return hc.render(e,{showHomeView:$e})},handleCategoryClick(e){const t=e.target.closest("[data-category]");t&&(Bt(),ie.renderCategoryProducts(t.dataset.category,{showHomeView:$e}).catch(()=>{ye(o.grid,"Kategoriya mahsulotlari yuklanmadi."),o.status.textContent=""}),window.setTimeout(()=>{var a;(a=document.getElementById("products"))==null||a.scrollIntoView({behavior:"smooth",block:"start"})},0))}};async function Qt(){if(l.compareIds=rt(),Rs(l.compareIds.length),!l.compareIds.length){l.compareProducts=[],Va([],n);return}const e=l.compareIds.map(a=>W.findKnownProduct(a)).filter(Boolean),t=l.compareIds.filter(a=>!e.find(r=>String(r.id)===String(a)));if(t.length){const a=await ce.loadProductsByIds(t);l.compareProducts=[...e,...a].slice(0,tt)}else l.compareProducts=e.slice(0,tt);Va(l.compareProducts,n)}async function ui(e){const t=us(e);if(t.full){M(n("compare.full",{max:tt}),"warning");return}l.compareIds=t.ids,await Qt(),M(t.added?n("compare.added"):n("compare.removed"),"success")}function fc(){var e,t;(e=document.getElementById("compareDrawer"))==null||e.classList.add("open"),(t=document.getElementById("compareDrawer"))==null||t.setAttribute("aria-hidden","false"),X()}function vc(){var e,t;(e=document.getElementById("compareDrawer"))==null||e.classList.remove("open"),(t=document.getElementById("compareDrawer"))==null||t.setAttribute("aria-hidden","true"),U()}function yc(){var e;Dr(l.compareProducts,n),(e=document.getElementById("compareDialog"))==null||e.showModal(),X()}function bc(){ms(),Qt(),Dr(l.compareProducts,n)}function wc(e){ps(e),Qt()}function kc(e,t,a){return G.add(e,t,a,{showLoginRequired:()=>y.showLoginRequired()})}function lr(e){if(e.key!=="Enter"&&e.key!==" ")return;const t=e.target.closest("[data-product]");if(!t)return;e.preventDefault();const a=t.dataset.product;a&&(Mt(a),Le(a))}function Ze(e){const t=e.target.closest("[data-show-all]"),a=e.target.closest("[data-favorite]"),r=e.target.closest("[data-add]"),i=e.target.closest("[data-detail]"),c=e.target.closest("[data-quick-view]"),d=e.target.closest("[data-compare]"),u=e.target.closest("[data-product]");if(t){e.stopPropagation(),H.load({loadCart:()=>G.load()});return}if(d){e.stopPropagation(),ui(d.dataset.compare);return}if(c){e.stopPropagation(),Mt(c.dataset.quickView),Le(c.dataset.quickView);return}if(a){e.stopPropagation(),W.toggle(a.dataset.favorite);return}if(r){e.stopPropagation(),kc(r.dataset.add,null,1);return}if(i){e.stopPropagation();const p=i.dataset.detail;if(!p)return;Mt(p),Le(p);return}if(u&&!e.target.closest("button, a")){e.preventDefault(),e.stopPropagation();const p=u.dataset.product;if(!p)return;Mt(p),Le(p)}}let dr=null;function Sc(){var c,d,u,p;lc(),qo(),Bo(),Oo(),gc({onSearch:m=>{o.searchInput.value=m,et(m),We(),we.search(m).catch(()=>{ye(o.grid,n("common.serverFailed")),o.status.textContent=""})},onProductSelect:m=>{et(o.searchInput.value),Le(m)}});const e=o.megaMenu;e==null||e.addEventListener("click",m=>{var v;m.target.closest("[data-category]")&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true"),(v=o.catalogButton)==null||v.setAttribute("aria-expanded","false"),we.handleCategoryClick(m))}),(c=o.popularSearchesChips)==null||c.addEventListener("click",m=>{const h=m.target.closest("[data-search-chip]");h&&(o.searchInput.value=h.dataset.searchChip,et(h.dataset.searchChip),we.search(h.dataset.searchChip).catch(()=>{}))}),(d=document.querySelector(".mobile-bottom-nav"))==null||d.addEventListener("click",m=>{var $,T,q,I;const h=m.target.closest("[data-mobile-action]");if(!h)return;const v=h.dataset.mobileAction;if(v==="home"){($=o.cartDrawer)!=null&&$.classList.contains("open")&&Te(),(T=o.favoritesDialog)!=null&&T.classList.contains("open")&&W.close(),(q=o.profileDrawer)!=null&&q.classList.contains("open")&&ve.close(),window.location.hash&&window.location.hash!=="#/"&&window.location.hash!=="#"?window.location.hash="#/":$e(),window.scrollTo({top:0,behavior:"smooth"}),le();return}if(v==="favoritesButton"){W.open().then(()=>le()).catch(O=>{console.error("[FAVORITES OPEN FAILED]",O)});return}(I=document.getElementById(v))==null||I.click()});const t=document.getElementById("mobileDrawer"),a=document.getElementById("mobileMenuToggle"),r=document.getElementById("closeMobileMenu");a==null||a.addEventListener("click",()=>{t==null||t.classList.add("open"),t==null||t.setAttribute("aria-hidden","false"),a.setAttribute("aria-expanded","true"),X()});const i=()=>{t==null||t.classList.remove("open"),t==null||t.setAttribute("aria-hidden","true"),a==null||a.setAttribute("aria-expanded","false"),U()};r==null||r.addEventListener("click",i),t==null||t.addEventListener("click",m=>{m.target===t&&i()}),(u=document.getElementById("mobileNavLinks"))==null||u.addEventListener("click",m=>{var $;const h=m.target.closest("[data-category]"),v=m.target.closest("[data-mobile-action]");if(h){i(),we.handleCategoryClick(m);return}if(v){if(i(),v.dataset.mobileAction==="favoritesButton"){W.open().catch(T=>{console.error("[FAVORITES OPEN FAILED]",T)});return}($=document.getElementById(v.dataset.mobileAction))==null||$.click()}}),(p=document.getElementById("currencySelect"))==null||p.addEventListener("change",m=>{M(`${n("header.currency")}: ${m.target.value}`,"info")}),document.addEventListener("click",m=>{const h=m.target.closest(".primary-button");h&&!h.disabled&&xo(m,h)}),Cc()}function Cc(){var e,t,a,r,i,c,d,u,p,m,h,v,$,T,q,I,O;if(As(),l.compareIds=rt(),Qt(),jt(n),!g.flashSaleEnd){const L=new Date;L.setHours(23,59,59,999),g.flashSaleEnd=L.getTime()}Ac(),(e=document.getElementById("sortSelect"))==null||e.addEventListener("change",L=>{l.filters.sort=L.target.value,Be(),pe(l.sourceProducts.length?l.sourceProducts:l.products,n("home.noProducts"),{screen:g.currentGridScreen})}),(t=document.getElementById("gridViewBtn"))==null||t.addEventListener("click",()=>{l.filters.viewMode="grid",Be(),la(o.grid,"grid")}),(a=document.getElementById("listViewBtn"))==null||a.addEventListener("click",()=>{l.filters.viewMode="list",Be(),la(o.grid,"list")}),ur(document.getElementById("filterSidebar")),ur(document.getElementById("filterSheetContent")),(r=document.getElementById("mobileFilterBtn"))==null||r.addEventListener("click",()=>pr("filterSheet")),(i=document.getElementById("mobileSortBtn"))==null||i.addEventListener("click",()=>{const L=document.getElementById("sortSheetOptions"),z={popular:n("sort.popular"),"price-asc":n("sort.priceAsc"),"price-desc":n("sort.priceDesc"),rating:n("sort.rating"),newest:n("sort.newest"),discount:n("sort.discount")};L&&(L.innerHTML=Object.entries(z).map(([ee,Me])=>`
        <button class="mobile-nav-link" type="button" data-sort-option="${ee}">${s(Me)}</button>
      `).join("")),pr("sortSheet")}),(c=document.getElementById("closeFilterSheet"))==null||c.addEventListener("click",()=>oa("filterSheet")),(d=document.getElementById("applyFilterSheet"))==null||d.addEventListener("click",()=>{oa("filterSheet"),pe(l.sourceProducts.length?l.sourceProducts:l.products,n("home.noProducts"),{screen:g.currentGridScreen})}),(u=document.getElementById("sortSheetOptions"))==null||u.addEventListener("click",L=>{const z=L.target.closest("[data-sort-option]");if(!z)return;l.filters.sort=z.dataset.sortOption;const ee=document.getElementById("sortSelect");ee&&(ee.value=l.filters.sort),Be(),oa("sortSheet"),pe(l.sourceProducts.length?l.sourceProducts:l.products,n("home.noProducts"),{screen:g.currentGridScreen})}),(p=document.getElementById("filterChipsRow"))==null||p.addEventListener("click",L=>{const z=L.target.closest("[data-remove-chip]");z&&$c(z.dataset.removeChip)}),(m=document.getElementById("compareFab"))==null||m.addEventListener("click",fc),(h=document.getElementById("closeCompare"))==null||h.addEventListener("click",vc),(v=document.getElementById("openComparePage"))==null||v.addEventListener("click",yc),($=document.getElementById("clearCompare"))==null||$.addEventListener("click",bc),(T=document.getElementById("compareDrawerContent"))==null||T.addEventListener("click",L=>{const z=L.target.closest("[data-remove-compare]");z&&wc(z.dataset.removeCompare)}),(q=document.getElementById("closePdpFullscreen"))==null||q.addEventListener("click",mr),(I=document.getElementById("pdpFullscreen"))==null||I.addEventListener("click",L=>{L.target.id==="pdpFullscreen"&&mr()}),(O=o.cartExtras)==null||O.addEventListener("click",Ic)}function ur(e){e&&(e.addEventListener("click",t=>{var r;if(t.target.closest("[data-clear-filters]")){Ds(),jt(n),Nt(n),pe(l.sourceProducts.length?l.sourceProducts:l.products,n("home.noProducts"),{screen:g.currentGridScreen});return}const a=t.target.closest(".filter-group-toggle");a&&((r=a.closest(".filter-group"))==null||r.classList.toggle("collapsed"))}),e.addEventListener("change",t=>{const a=l.filters;if(t.target.matches("[data-filter-brand]")){const r=t.target.dataset.filterBrand;a.brands=t.target.checked?[...new Set([...a.brands,r])]:a.brands.filter(i=>i!==r)}if(t.target.matches("[data-filter-color]")){const r=t.target.dataset.filterColor;a.colors=t.target.checked?[...new Set([...a.colors,r])]:a.colors.filter(i=>i!==r)}if(t.target.matches("[data-filter-size]")){const r=t.target.dataset.filterSize;a.sizes=t.target.checked?[...new Set([...a.sizes,r])]:a.sizes.filter(i=>i!==r)}if(t.target.matches("[data-filter-origin]")){const r=t.target.dataset.filterOrigin;a.origin=t.target.checked?[...new Set([...a.origin,r])]:a.origin.filter(i=>i!==r)}if(t.target.matches("[data-filter-seller]")){const r=t.target.dataset.filterSeller;a.seller=t.target.checked?[...new Set([...a.seller,r])]:a.seller.filter(i=>i!==r)}t.target.matches("[data-filter-toggle]")&&(a[t.target.dataset.filterToggle]=t.target.checked),t.target.matches("[data-filter-rating]")&&(a.minRating=Number(t.target.value)),t.target.matches("[data-filter-price]")&&(a.maxPrice=Number(t.target.value)),Be(),Nt(n),e.id!=="filterSheetContent"&&pe(l.sourceProducts.length?l.sourceProducts:l.products,n("home.noProducts"),{screen:g.currentGridScreen})}))}function $c(e){const t=l.filters;e==="onSale"?t.onSale=!1:e==="inStock"?t.inStock=!1:e==="rating"?t.minRating=0:e.startsWith("brand:")?t.brands=t.brands.filter(a=>a!==e.slice(6)):e.startsWith("color:")?t.colors=t.colors.filter(a=>a!==e.slice(6)):e.startsWith("size:")&&(t.sizes=t.sizes.filter(a=>a!==e.slice(5))),Be(),jt(n),Nt(n),pe(l.sourceProducts.length?l.sourceProducts:l.products,n("home.noProducts"),{screen:g.currentGridScreen})}function pr(e){const t=document.getElementById(e);t==null||t.classList.add("open"),t==null||t.setAttribute("aria-hidden","false")}function oa(e){var t,a;(t=document.getElementById(e))==null||t.classList.remove("open"),(a=document.getElementById(e))==null||a.setAttribute("aria-hidden","true")}function Pc(e){const t=document.getElementById("pdpFullscreenImg"),a=document.getElementById("pdpFullscreen");t&&a&&e&&(t.src=e,a.classList.add("open"),a.setAttribute("aria-hidden","false"))}function mr(){var e,t;(e=document.getElementById("pdpFullscreen"))==null||e.classList.remove("open"),(t=document.getElementById("pdpFullscreen"))==null||t.setAttribute("aria-hidden","true")}function Ac(){if(dr!==null)return;const e=()=>{const t=document.querySelector("#todayDeals .flash-countdown-wrap");t&&g.flashSaleEnd&&(t.innerHTML=qs(g.flashSaleEnd))};e(),dr=window.setInterval(e,1e3)}function Ic(e){if(e.target.closest("[data-apply-coupon]")){const a=document.getElementById("cartCouponInput"),r=((a==null?void 0:a.value)||"").trim(),i=ue.applyCoupon(r,N.getCartTotals().subtotal);i.valid?(k.cartCoupon=i.coupon,k.cartCouponDiscount=i.discount,M(n("cart.couponApplied"),"success")):i.invalid&&M(n("cart.couponInvalid"),"warning"),N.render();return}const t=e.target.closest("[data-restore-saved]");if(t){$s(t.dataset.restoreSaved),M(n("cart.restored"),"info"),N.render();return}Ze(e)}function Ec({item:e,starsHtml:t}){const a=e.review;return`
    <article class="my-review-item">
      <img src="${s(e.image)}" alt="${s(e.name)}" />
      <div>
        <strong>${s(e.name)}</strong>
        <p class="hint">${s(e.brand||"BEAUTY SKIN KOREA")} ${e.orderId?`· Order #${s(e.orderId)}`:""}</p>
        ${a!=null&&a.rating||a!=null&&a.content?`
          <div class="written-review">
            ${t||Vt({rating:a.rating})}
            <p>${s(a.content||"No text review.")}</p>
            <p class="hint">${Ea(a.createdAt)}</p>
          </div>
        `:'<p class="hint">Review not written yet.</p>'}
      </div>
      <div class="review-action-cell">
        ${e.reviewable?`
          <button class="secondary-button" data-write-review="${s(e.productId)}" data-review-order="${s(e.orderId)}" data-review-name="${s(e.name)}" type="button">Write review</button>
        `:a!=null&&a.content||a!=null&&a.rating?'<span class="status-badge status-delivered">Reviewed</span>':'<span class="hint">Not reviewable</span>'}
      </div>
    </article>
  `}function Lc({itemsHtml:e=""}){return`<div class="my-reviews-list">${e}</div>`}const Ie={email:"ismoiljoraxonov1@gmail.com",phone:"+821065110757",phoneDisplay:"+82 10 6511 0757"},Tc=["delivery","cancel","return"];function Dc(e,t){const a=g.supportFaqOpen===t;return`
    <div class="app-support-faq ${a?"is-open":""}">
      <button class="app-support-faq-q" type="button" data-support-faq="${t}">
        <span>${s(n(`support.faq.${e}.q`))}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      ${a?`<div class="app-support-faq-a">${s(n(`support.faq.${e}.a`))}</div>`:""}
    </div>
  `}function gr(e){return`<ul class="app-support-doc-list">${e.map(t=>`<li>${s(n(t))}</li>`).join("")}</ul>`}const Ue={render(){o.supportContent.innerHTML=`
      <div class="app-support-page">
        <header class="app-support-header">
          <button class="app-support-back" type="button" data-support-close aria-label="${s(n("checkout.back"))}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>
          </button>
          <h2>${s(n("support.title"))}</h2>
          <span aria-hidden="true"></span>
        </header>
        <div class="app-support-scroll">
          <p class="app-support-intro">${s(n("support.intro"))}</p>

          <section class="app-support-card">
            <h3>${s(n("support.faqTitle"))}</h3>
            ${Tc.map((e,t)=>Dc(e,t)).join("")}
          </section>

          <section class="app-support-card">
            <h3>${s(n("support.originalTitle"))}</h3>
            <p class="app-support-text">${s(n("support.originalText"))}</p>
            <p class="app-support-subtitle">${s(n("support.whyTitle"))}</p>
            <ul class="app-support-list">
              <li>${s(n("support.why1"))}</li>
              <li>${s(n("support.why2"))}</li>
              <li>${s(n("support.why3"))}</li>
              <li>${s(n("support.why4"))}</li>
              <li>${s(n("support.why5"))}</li>
            </ul>
            <p class="app-support-guarantee">${s(n("support.guarantee"))}</p>
          </section>

          <section class="app-support-card">
            <h3>${s(n("support.contactTitle"))}</h3>
            <div class="app-support-contact-row">
              <span class="app-support-contact-icon" aria-hidden="true">✉️</span>
              <span>Email: <a href="mailto:${s(Ie.email)}">${s(Ie.email)}</a></span>
            </div>
            <div class="app-support-contact-row">
              <span class="app-support-contact-icon" aria-hidden="true">📞</span>
              <span>${s(n("support.phoneLabel"))} <a href="tel:${s(Ie.phone)}">${s(Ie.phoneDisplay)}</a></span>
            </div>
            <div class="app-support-contact-row">
              <span class="app-support-contact-icon" aria-hidden="true">🕘</span>
              <span>${s(n("support.hoursLabel"))} ${s(n("support.hoursValue"))}</span>
            </div>
            <p class="app-support-contact-note">${s(n("support.contactNote"))}</p>
          </section>
        </div>
      </div>
    `},renderPrivacy(){o.privacyContent.innerHTML=`
      <div class="app-support-page">
        <header class="app-support-header app-support-header--doc">
          <button class="app-support-back" type="button" data-privacy-close aria-label="${s(n("checkout.back"))}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>
          </button>
          <h2>${s(n("privacy.title"))}</h2>
        </header>
        <div class="app-support-scroll">
          <p class="app-support-doc-updated">${s(n("privacy.updated"))}</p>
          <p class="app-support-doc-intro">${s(n("privacy.intro"))}</p>

          <section class="app-support-doc-section">
            <h3>${s(n("privacy.s1title"))}</h3>
            ${gr(["privacy.s1a","privacy.s1b","privacy.s1c","privacy.s1d"])}
          </section>

          <section class="app-support-doc-section">
            <h3>${s(n("privacy.s2title"))}</h3>
            <p>${s(n("privacy.s2intro"))}</p>
            ${gr(["privacy.s2a","privacy.s2b","privacy.s2c","privacy.s2d"])}
          </section>

          <section class="app-support-doc-section">
            <h3>${s(n("privacy.s3title"))}</h3>
            <p>${s(n("privacy.s3text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${s(n("privacy.s4title"))}</h3>
            <p>${s(n("privacy.s4text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${s(n("privacy.s5title"))}</h3>
            <p>${s(n("privacy.s5text"))}</p>
            <p class="app-support-doc-contact">✉️ <a href="mailto:${s(Ie.email)}">${s(Ie.email)}</a></p>
          </section>
        </div>
      </div>
    `},renderTerms(){o.termsContent.innerHTML=`
      <div class="app-support-page">
        <header class="app-support-header app-support-header--doc">
          <button class="app-support-back" type="button" data-terms-close aria-label="${s(n("checkout.back"))}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>
          </button>
          <h2>${s(n("terms.title"))}</h2>
        </header>
        <div class="app-support-scroll">
          <p class="app-support-doc-updated">${s(n("terms.updated"))}</p>
          <p class="app-support-doc-intro">${s(n("terms.intro"))}</p>

          <section class="app-support-doc-section">
            <h3>${s(n("terms.s1title"))}</h3>
            <p>${s(n("terms.s1text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${s(n("terms.s2title"))}</h3>
            <p>${s(n("terms.s2text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${s(n("terms.s3title"))}</h3>
            <p>${s(n("terms.s3text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${s(n("terms.s4title"))}</h3>
            <p>${s(n("terms.s4text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${s(n("terms.s5title"))}</h3>
            <p>${s(n("terms.s5text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${s(n("terms.s6title"))}</h3>
            <p>${s(n("terms.s6text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${s(n("terms.s7title"))}</h3>
            <p>${s(n("terms.s7text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <p class="app-support-doc-contact">✉️ <a href="mailto:${s(Ie.email)}">${s(Ie.email)}</a></p>
          </section>
        </div>
      </div>
    `},handleClick(e,{close:t}={}){const a=e.target.closest("[data-support-faq]");if(e.target.closest("[data-support-close]")){t==null||t();return}if(a){const r=Number(a.dataset.supportFaq);g.supportFaqOpen=g.supportFaqOpen===r?-1:r,Ue.render()}},handlePrivacyClick(e,{close:t}={}){e.target.closest("[data-privacy-close]")&&(t==null||t())},handleTermsClick(e,{close:t}={}){e.target.closest("[data-terms-close]")&&(t==null||t())}};function Rc(e,t,a){return G.add(e,t,a,{showLoginRequired:()=>y.showLoginRequired()})}function Mc(){return j.prepare({showLoginRequired:()=>y.showLoginRequired()})}function qc(){var t,a,r,i,c,d,u,p,m,h,v,$,T,q,I,O,L,z,ee,Me,it,st,ot,nt,ct,lt,dt,ut,pt,mt,He,It;(t=o.languageSelect)==null||t.addEventListener("change",w=>Cr(w.target.value)),o.searchForm.addEventListener("submit",w=>w.preventDefault()),o.searchInput.addEventListener("input",w=>we.handleInput(w)),o.categoryToolbar.addEventListener("click",w=>we.handleCategoryClick(w)),o.quickCategoryGrid.addEventListener("click",w=>we.handleCategoryClick(w)),o.catalogList.addEventListener("click",w=>we.handleCategoryClick(w)),o.banners.addEventListener("click",Bc),(a=o.homeView)==null||a.addEventListener("click",Ze),(r=o.homeView)==null||r.addEventListener("keydown",lr),(i=o.brandViewContent)==null||i.addEventListener("click",Ze),o.detailContent.addEventListener("click",hr),o.productDetailPageContent.addEventListener("click",w=>{hr(w)||Ze(w)}),o.productDetailPageContent.addEventListener("input",w=>{w.target.matches("[data-review-search]")&&(l.reviewSearchQuery=w.target.value,R.renderProductDetail(l.selectedDetailProduct))}),o.productDetailPageContent.addEventListener("change",w=>{w.target.matches("[data-review-sort]")&&(l.reviewSort=w.target.value,R.renderProductDetail(l.selectedDetailProduct)),w.target.matches("[data-review-filter-rating]")&&(l.reviewFilterRating=Number(w.target.value),R.renderProductDetail(l.selectedDetailProduct))}),o.cartItems.addEventListener("click",xc),o.cartItems.addEventListener("change",Oc),o.catalogButton.addEventListener("click",In),o.closeCatalog.addEventListener("click",Bt),o.cartButton.addEventListener("click",Xr),o.closeCart.addEventListener("click",Te),o.loginButton.addEventListener("click",()=>{y.isLoggedIn()?ve.open():y.openDialog("login")}),(c=o.favoritesButton)==null||c.addEventListener("click",()=>W.open()),o.notificationsButton.addEventListener("click",()=>_.open()),o.apiButton.addEventListener("click",En),o.loginTab.addEventListener("click",()=>y.setMode("login")),o.registerTab.addEventListener("click",()=>y.setMode("register")),o.authForm.addEventListener("submit",w=>y.submit(w)),(d=o.googleLoginButton)==null||d.addEventListener("click",()=>y.submitFirebase()),o.apiForm.addEventListener("submit",Ln),o.checkoutButton.addEventListener("click",Mc),o.checkoutForm.addEventListener("submit",Nc),o.checkoutContent.addEventListener("click",Fc),o.checkoutContent.addEventListener("submit",zc),o.ordersContent.addEventListener("click",w=>Fe.handleClick(w)),o.refreshOrders.addEventListener("click",()=>Fe.load()),o.closeOrders.addEventListener("click",()=>o.ordersDialog.close()),(u=o.favoritesContent)==null||u.addEventListener("click",Uc),(p=o.favoritesContent)==null||p.addEventListener("keydown",lr),(m=o.refreshFavorites)==null||m.addEventListener("click",()=>W.load({render:!0})),(h=o.closeFavorites)==null||h.addEventListener("click",()=>W.close()),o.notificationsContent.addEventListener("click",Hc),o.refreshNotifications.addEventListener("click",()=>{_.load(),_.loadUnreadCount()}),o.closeNotifications.addEventListener("click",()=>_.close()),o.myReviewsContent.addEventListener("click",Xc),o.refreshMyReviews.addEventListener("click",Jt),o.closeMyReviews.addEventListener("click",za),o.writeReviewForm.addEventListener("submit",Zc),o.closeWriteReview.addEventListener("click",Ut),o.reviewRatingSelector.addEventListener("click",el),(v=o.closeProfile)==null||v.addEventListener("click",()=>ve.close()),o.profileContent.addEventListener("click",w=>{Ze(w)||ve.handleAction(w)}),o.profileContent.addEventListener("submit",w=>ve.submitEdit(w)),o.ordersButton.addEventListener("click",()=>Fe.show()),($=o.supportButton)==null||$.addEventListener("click",Sa),(T=document.getElementById("assistantMiniButton"))==null||T.addEventListener("click",()=>{window.location.hash="#/assistant"}),(q=document.getElementById("footerSupport"))==null||q.addEventListener("click",Sa),(I=document.getElementById("footerPrivacy"))==null||I.addEventListener("click",pi),(O=document.getElementById("footerTerms"))==null||O.addEventListener("click",mi),(L=document.getElementById("footerAssistant"))==null||L.addEventListener("click",()=>{window.location.hash="#/assistant"});const e=document.getElementById("footerYear");e&&(e.textContent=String(new Date().getFullYear())),(z=o.supportContent)==null||z.addEventListener("click",Vc),(ee=o.supportDialog)==null||ee.addEventListener("close",U),(Me=o.privacyContent)==null||Me.addEventListener("click",Kc),(it=o.privacyDialog)==null||it.addEventListener("close",U),(st=o.termsContent)==null||st.addEventListener("click",Wc),(ot=o.termsDialog)==null||ot.addEventListener("close",U),(nt=o.assistantFab)==null||nt.addEventListener("click",()=>Q.toggleWidget()),(ct=o.assistantWidget)==null||ct.addEventListener("click",w=>{w.target===o.assistantWidget?Q.closeWidget():Q.handleClick(w)}),(lt=o.assistantWidgetContent)==null||lt.addEventListener("submit",w=>Q.handleSubmit(w)),(dt=o.assistantWidgetContent)==null||dt.addEventListener("keydown",w=>Q.handleKeydown(w)),(ut=o.assistantWidgetContent)==null||ut.addEventListener("input",w=>Q.handleInput(w)),(pt=o.assistantPageContent)==null||pt.addEventListener("click",w=>Q.handleClick(w)),(mt=o.assistantPageContent)==null||mt.addEventListener("submit",w=>Q.handleSubmit(w)),(He=o.assistantPageContent)==null||He.addEventListener("keydown",w=>Q.handleKeydown(w)),(It=o.assistantPageContent)==null||It.addEventListener("input",w=>Q.handleInput(w)),o.refreshHome.addEventListener("click",()=>H.load({loadCart:()=>G.load()})),o.loadMore.addEventListener("click",()=>ie.loadMoreProducts()),window.addEventListener("hashchange",zt),o.catalogDrawer.addEventListener("click",w=>{w.target===o.catalogDrawer&&Bt()}),o.cartDrawer.addEventListener("click",w=>{w.target===o.cartDrawer&&Te()}),o.profileDrawer.addEventListener("click",w=>{w.target===o.profileDrawer&&ve.close()}),o.notificationsDrawer.addEventListener("click",w=>{w.target===o.notificationsDrawer&&_.close()}),document.addEventListener("keydown",w=>{var gt;w.key==="Escape"&&(Bt(),Te(),ve.close(),_.close(),Q.closeWidget(),o.ordersDialog.open&&o.ordersDialog.close(),(gt=o.favoritesDialog)!=null&&gt.classList.contains("open")&&W.close(),o.myReviewsDialog.open&&o.myReviewsDialog.close(),o.writeReviewDialog.open&&o.writeReviewDialog.close())}),o.detailDialog.addEventListener("close",U),o.authDialog.addEventListener("close",U),o.apiDialog.addEventListener("close",U),o.checkoutDialog.addEventListener("close",()=>{j.abortOrder(),f.checkoutConfirmOpen=!1,f.orderSubmitting=!1,f.orderSuccess=null,f.checkoutError="",U()}),o.ordersDialog.addEventListener("close",U),o.myReviewsDialog.addEventListener("close",U),o.writeReviewDialog.addEventListener("close",U),document.querySelectorAll("[data-close-dialog]").forEach(w=>{w.addEventListener("click",()=>{var gt;return(gt=w.closest("dialog"))==null?void 0:gt.close()})})}function Bc(e){const t=e.target.closest("[data-banner-dot]");if(t){H.scrollToBanner(Number(t.dataset.bannerDot)),H.resetBannerAutoSlide();return}const a=e.target.closest("[data-banner-nav]");if(a){a.dataset.bannerNav==="next"?H.nextBanner():H.prevBanner(),H.resetBannerAutoSlide();return}const r=e.target.closest("[data-banner-link-type]");if(!r)return;const i=r.dataset.bannerLinkType,c=r.dataset.bannerLinkId;if(i==="PRODUCT"&&c){Le(c);return}if(i==="CATEGORY"&&c){const d=l.categories.find(u=>String(u)===String(c))||(wr[c]?c:"");d?(va(),ie.renderCategoryProducts(d,{showHomeView:$e})):M("Category banner is not available yet.","info")}}function hr(e){const t=e.target.closest("[data-route-home]"),a=e.target.closest(".product-detail-page [data-category]"),r=e.target.closest("[data-brand]"),i=e.target.closest("[data-close-detail]"),c=e.target.closest("[data-variant]"),d=e.target.closest("[data-qty]"),u=e.target.closest("[data-detail-add]"),p=e.target.closest("[data-detail-favorite]"),m=e.target.closest("[data-compare]"),h=e.target.closest("[data-reviews-retry]"),v=e.target.closest("[data-pdp-thumb]"),$=e.target.closest("[data-pdp-tab]"),T=e.target.closest("[data-pdp-zoom]"),q=e.target.closest("[data-pdp-fullscreen]"),I=e.target.closest("[data-review-helpful]");if(t)return e.stopPropagation(),va(),!0;if(r&&r.dataset.brand)return e.stopPropagation(),window.location.hash=`#/brand/${encodeURIComponent(r.dataset.brand)}`,!0;if(a)return e.stopPropagation(),va(),ie.renderCategoryProducts(a.dataset.category,{showHomeView:$e}),!0;if(i)return e.stopPropagation(),o.detailDialog.close(),U(),!0;if(v)return e.stopPropagation(),l.pdpGalleryIndex=Number(v.dataset.pdpThumb),R.renderProductDetail(l.selectedDetailProduct),!0;if(T)return e.stopPropagation(),T.classList.toggle("zoomed"),!0;if(q){e.stopPropagation();const O=document.getElementById("pdpMainImage");return Pc(O==null?void 0:O.src),!0}if($)return e.stopPropagation(),l.pdpActiveTab=$.dataset.pdpTab,R.renderProductDetail(l.selectedDetailProduct),!0;if(m)return e.stopPropagation(),ui(m.dataset.compare),!0;if(c)return e.stopPropagation(),l.selectedVariantId=c.dataset.variant,R.renderProductDetail(l.selectedDetailProduct),!0;if(d)return e.stopPropagation(),l.selectedQuantity=Math.max(1,l.selectedQuantity+(d.dataset.qty==="plus"?1:-1)),R.renderProductDetail(l.selectedDetailProduct),!0;if(p)return e.stopPropagation(),W.toggle(p.dataset.detailFavorite),!0;if(h)return e.stopPropagation(),Xe.loadReviews(h.dataset.reviewsRetry),!0;if(I){e.stopPropagation();const O=I.dataset.reviewHelpful;return l.reviewHelpfulIds.has(O)?l.reviewHelpfulIds.delete(O):l.reviewHelpfulIds.add(O),R.renderProductDetail(l.selectedDetailProduct),!0}if(u){e.stopPropagation();const O=document.getElementById("quantityInput");return l.selectedQuantity=Math.max(1,Number((O==null?void 0:O.value)||l.selectedQuantity)),Rc(l.selectedDetailProduct.id,l.selectedVariantId,l.selectedQuantity),!0}return!1}function Oc(e){const t=e.target;if(!t.matches("[data-cart-select-all], [data-cart-item-check]"))return;const a=N.getCartSelectedIds();if(t.matches("[data-cart-select-all]")){t.checked?k.cartItems.forEach(i=>a.add(String(i.id))):a.clear(),N.render();return}const r=String(t.dataset.cartItemCheck||"");r&&(t.checked?a.add(r):a.delete(r),N.render())}function xc(e){var u;const t=e.target.closest("[data-cart-retry]"),a=e.target.closest("[data-start-shopping]"),r=e.target.closest("[data-cart-qty]"),i=e.target.closest("[data-remove]"),c=e.target.closest("[data-save-later]"),d=e.target.closest("[data-cart-delete-selected]");if(t&&G.load(),a&&(Te(),(u=document.getElementById("products"))==null||u.scrollIntoView({behavior:"smooth",block:"start"})),d&&!d.disabled){G.removeSelected();return}if(c){const p=k.cartItems.find(m=>String(m.id)===String(c.dataset.saveLater));p&&(Cs(p),G.removeItem(p.id));return}if(r){const p=k.cartItems.find(m=>String(m.id)===String(r.dataset.cartId));p&&G.updateQuantity(p.id,p.quantity+(r.dataset.cartQty==="plus"?1:-1))}i&&G.removeItem(i.dataset.remove)}function Nc(e){e.preventDefault(),j.openConfirm()}async function Fc(e){var L,z;const t=e.target.closest("[data-checkout-close]"),a=e.target.closest("[data-checkout-toggle-address]"),r=e.target.closest("[data-checkout-toggle-receiver]"),i=e.target.closest("[data-checkout-toggle-coupon]"),c=e.target.closest("[data-apply-coupon]"),d=e.target.closest("[data-select-receiver]"),u=e.target.closest("[data-select-address]"),p=e.target.closest("[data-delete-receiver]"),m=e.target.closest("[data-delete-address]"),h=e.target.closest("[data-place-order]"),v=e.target.closest("[data-checkout-confirm-cancel]"),$=e.target.closest("[data-checkout-confirm-submit]"),T=e.target.closest("[data-checkout-success-dismiss]"),q=e.target.closest("[data-checkout-success-card]"),I=e.target.closest("[data-success-orders]"),O=e.target.closest("[data-success-continue]");if(t){j.abortOrder(),f.checkoutConfirmOpen=!1,f.orderSubmitting=!1,f.orderSuccess=null,f.checkoutError="",o.checkoutDialog.close(),U();return}if(a){f.checkoutAddressPickerOpen=!f.checkoutAddressPickerOpen,f.checkoutError="",J.render();return}if(r){f.checkoutReceiverPickerOpen=!f.checkoutReceiverPickerOpen,f.checkoutError="",J.render();return}if(i){f.checkoutCouponOpen=!f.checkoutCouponOpen,J.render();return}if(c){const ee=document.getElementById("checkoutCouponInput");j.applyCoupon(((ee==null?void 0:ee.value)||"").trim());return}if(p){e.stopPropagation(),await j.deleteReceiver(p.dataset.deleteReceiver);return}if(m){e.stopPropagation(),await j.deleteAddress(m.dataset.deleteAddress);return}if(d){f.selectedReceiverId=d.dataset.selectReceiver,f.checkoutReceiverPickerOpen=!1,f.checkoutError="",J.render();return}if(u){f.selectedAddressId=u.dataset.selectAddress,f.checkoutAddressPickerOpen=!1,f.checkoutError="",J.render();return}if(h){j.openConfirm();return}if(v){j.abortOrder(),f.checkoutConfirmOpen=!1,f.orderSubmitting=!1,f.checkoutError="",J.render();return}if($){await j.submitOrder();return}if(T&&!q){j.finishAndGoHome(),(L=document.getElementById("products"))==null||L.scrollIntoView({behavior:"smooth",block:"start"});return}if(I){o.checkoutDialog.close(),await Fe.show();return}O&&(o.checkoutDialog.close(),Te(),(z=document.getElementById("products"))==null||z.scrollIntoView({behavior:"smooth",block:"start"}))}async function zc(e){const t=e.target.closest("[data-add-receiver-form]"),a=e.target.closest("[data-add-address-form]");!t&&!a||(e.preventDefault(),t&&await j.createReceiver(),a&&await j.createAddress())}function Uc(e){Y.handleClick(e,{close:()=>W.close(),reload:()=>W.load({render:!0}),handleProductGridClick:Ze})}function Hc(e){const t=e.target.closest("[data-notifications-retry]"),a=e.target.closest("[data-notification-read]"),r=e.target.closest("[data-notification-card]");if(t){_.load(),_.loadUnreadCount();return}if(a){e.stopPropagation(),_.markRead(a.dataset.notificationRead);return}r&&_.handleCardClick(r.dataset.notificationCard)}function Sa(){g.supportFaqOpen=0,Ue.render(),o.supportDialog.showModal(),X()}function _c(){o.supportDialog.close(),U()}function Vc(e){Ue.handleClick(e,{close:_c})}function pi(){Ue.renderPrivacy(),o.privacyDialog.showModal(),X()}function jc(){o.privacyDialog.close(),U()}function Kc(e){Ue.handlePrivacyClick(e,{close:jc})}function mi(){Ue.renderTerms(),o.termsDialog.showModal(),X()}function Gc(){o.termsDialog.close(),U()}function Wc(e){Ue.handleTermsClick(e,{close:Gc})}async function Yc(){if(!y.isLoggedIn()){y.showLoginRequired();return}o.myReviewsDialog.showModal(),X(),await Jt()}async function Jt(){if(!y.isLoggedIn()){y.showLoginRequired();return}l.myReviewsLoading=!0,l.myReviewsError="",Ot();const e=await De.loadMyReviews();if(l.myReviewsLoading=!1,!e.success){if(e.sessionExpired){za(),Ut();return}l.myReviewsError=e.error,Ot();return}l.myReviews=e.items,Ot()}function Ot(){if(o.myReviewsSummary.textContent=l.myReviews.length?`${l.myReviews.length} item${l.myReviews.length===1?"":"s"}`:"Purchased products and written reviews",l.myReviewsLoading){o.myReviewsContent.innerHTML=`
      <div class="my-reviews-list">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    `;return}if(l.myReviewsError){o.myReviewsContent.innerHTML=`
      <div class="reviews-empty-state">
        <strong>Reviews unavailable</strong>
        <p>${s(l.myReviewsError)}</p>
        <button class="secondary-button" data-my-reviews-retry type="button">Retry</button>
      </div>
    `;return}if(!l.myReviews.length){o.myReviewsContent.innerHTML=`
      <div class="reviews-empty-state">
        <strong>No review items yet</strong>
        <p>Your written reviews and reviewable purchases will appear here.</p>
      </div>
    `;return}o.myReviewsContent.innerHTML=Lc({itemsHtml:l.myReviews.map(e=>Qc(e)).join("")})}function Qc(e){var t;return Ec({item:e,starsHtml:(t=e.review)!=null&&t.rating?Hr(e.review.rating):""})}function gi(e={}){if(!y.isLoggedIn()){y.showLoginRequired();return}const t=e.productId,a=e.orderId;if(!t||!a){M("Product and order are required for review.");return}l.reviewDraft={productId:t,orderId:a,productName:e.productName||"Product"},l.reviewRating=5,o.writeReviewProduct.textContent=`${l.reviewDraft.productName} · Order #${a}`,o.reviewContent.value="",o.reviewImages.value="",o.reviewImageFiles.value="",o.reviewUploadStatus.textContent="",yt(""),hi(),o.writeReviewDialog.showModal(),X()}function hi(){o.reviewRatingSelector.innerHTML=Array.from({length:5},(e,t)=>{const a=t+1;return`
      <button class="rating-choice ${a<=l.reviewRating?"active":""}" data-review-rating="${a}" type="button" aria-label="Rating ${a} out of 5">
        ★
      </button>
    `}).join("")}function za(){o.myReviewsDialog.open&&o.myReviewsDialog.close(),U()}function Ut(){o.writeReviewDialog.open&&o.writeReviewDialog.close(),U()}function yt(e,t=""){o.reviewFormMessage.textContent=e,o.reviewFormMessage.className=`form-message ${t}`.trim()}async function Jc(e){return De.uploadReviewImages(e,{onProgress:t=>{o.reviewUploadStatus.textContent=t}})}async function Zc(e){var u;if(e.preventDefault(),l.reviewSubmitting)return;const t=l.reviewDraft||{},a=o.reviewContent.value.trim(),r=De.validateSubmitReview({productId:t.productId,orderId:t.orderId,rating:l.reviewRating,content:a,manualImageUrlsText:o.reviewImages.value,files:o.reviewImageFiles.files});if(!r.valid){yt(r.errors[0],"error");return}l.reviewSubmitting=!0,l.uploadingReviewImages=!!r.fileValidation.files.length,o.submitReviewButton.disabled=!0,o.submitReviewButton.textContent="Submitting...",yt("");let i=[];try{i=r.fileValidation.files.length?await Jc(r.fileValidation.files):[]}catch(p){l.reviewSubmitting=!1,l.uploadingReviewImages=!1,o.submitReviewButton.disabled=!1,o.submitReviewButton.textContent="Submit review",yt(p.message||"Image upload failed.","error");return}const c=[...i,...r.manualImageUrls].slice(0,5),d=await De.submitReview({productId:t.productId,orderId:t.orderId,rating:l.reviewRating,content:a,imageUrls:c});if(l.reviewSubmitting=!1,l.uploadingReviewImages=!1,o.submitReviewButton.disabled=!1,o.submitReviewButton.textContent="Submit review",o.reviewUploadStatus.textContent="",!d.success){if(d.sessionExpired){za(),Ut();return}yt(d.error,"error");return}M("Review submitted"),Ut(),await Jt(),((u=l.selectedDetailProduct)==null?void 0:u.id)!==void 0&&String(l.selectedDetailProduct.id)===String(t.productId)&&await Xe.loadReviews(t.productId)}function Xc(e){const t=e.target.closest("[data-my-reviews-retry]"),a=e.target.closest("[data-write-review]");if(t){Jt();return}a&&gi({productId:a.dataset.writeReview,orderId:a.dataset.reviewOrder,productName:a.dataset.reviewName})}function el(e){const t=e.target.closest("[data-review-rating]");t&&(l.reviewRating=Number(t.dataset.reviewRating),hi())}function tl(){Aa(Ca()),ie.renderCategories(),Je(),g.currentRoute==="product"&&l.selectedDetailProduct?R.renderProductDetail(l.selectedDetailProduct):g.currentRoute==="assistant"||Q.isWidgetOpen()?Q.render():(ae(o.grid,l.products,n("home.noProducts"),{screen:g.currentGridScreen}),ae(o.dealsGrid,l.todayDeals.slice(0,8),n("home.noProducts")),l.homeApiSections&&H.renderHomeApiSections(l.homeApiSections)),o.cartDrawer.classList.contains("open")&&N.render(),o.profileDrawer.classList.contains("open")&&oe.render(),kt()&&Y.render(),o.ordersDialog.open&&ne.render(),o.notificationsDrawer.classList.contains("open")&&Z.render(),o.myReviewsDialog.open&&Ot(),y.updateUi()}async function al(){if(!de.getRecentProductIds().length){l.recentlyViewed=[];return}l.recentlyViewed=await de.loadRecentlyViewed()}function rl(){es({cart:{load:()=>G.load(),render:()=>N.render()},favorites:{load:e=>W.load(e),open:()=>W.open(),updateUi:()=>W.updateUi()},notifications:{open:()=>_.open(),load:()=>_.load(),loadUnreadCount:()=>_.loadUnreadCount(),clearState:()=>_.clearState()},home:{ensureRecentlyViewed:al},profile:{render:()=>oe.render()},orders:{show:()=>Fe.show()},reviews:{open:Yc,openWrite:gi},support:{open:Sa,openPrivacy:pi,openTerms:mi},assistant:{open:()=>Q.openWidget(),close:()=>Q.closeWidget(),render:()=>Q.render()},checkout:{prepare:()=>j.prepare({showLoginRequired:y.showLoginRequired})},i18n:{t:n,setLanguage:Cr,applyTranslations:()=>Aa(Ca())},navigation:{unlockBodyIfNoOverlay:U},toast:M})}async function il(){rl(),Mi(tl),Ai({onUnauthorized:()=>{y.clearAuth(),y.openDialog("login"),M(n("auth.sessionExpired"))},onLoginRequired:()=>y.showLoginRequired(),showToast:(e,t="error")=>M(e,t)});try{qc(),Sc(),Aa(Ca())}catch(e){console.error("Init event binding failed:",e),o.status.textContent=`UI ishga tushishda xatolik yuz berdi: ${e.message}`,M("UI ishga tushishda xatolik yuz berdi.");return}y.updateUi(),y.validateOnStartup().catch(e=>{console.error("Auth startup failed:",e)}),Q.init().catch(e=>{console.error("Assistant startup failed:",e)}),H.load({loadCart:()=>G.load()}).then(()=>zt()).catch(e=>{console.error("Home loading failed:",e),l.demoProducts=!1,l.demoDeals=!1,o.status.textContent="",o.dealsStatus.textContent="",ye(o.grid,n("common.serverFailed"),n("common.tryAgain")),Je(),zt()})}function sl(){Si(),Ci(),g.baseUrl=Ht(localStorage.getItem(C.storageKeys.baseUrl)||""),Pi(),xe()&&(console.assert(document.getElementById("productGrid"),"productGrid missing"),console.assert(document.getElementById("dealsGrid"),"dealsGrid missing"),console.assert(document.getElementById("productStatus"),"productStatus missing"),console.assert(document.getElementById("dealsStatus"),"dealsStatus missing"),console.assert(document.getElementById("quickCategoryGrid"),"quickCategoryGrid missing")),il()}sl();
