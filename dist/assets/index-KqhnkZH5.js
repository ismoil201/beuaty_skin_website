import{G as rs,s as ss,i as is,g as os}from"./firebase-kble8lgk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(i){if(i.ep)return;i.ep=!0;const c=a(i);fetch(i.href,c)}})();const C=Object.freeze({productionApiBaseUrl:"https://cosmetic-server-production.up.railway.app",defaultPageSize:24,searchDebounceMs:300,storageKeys:Object.freeze({accessToken:"zaven_token",legacyAccessToken:"accessToken",user:"zaven_user",legacyUser:"user",role:"role",baseUrl:"zaven_base_url",sessionId:"zaven_session_id",assistantConversationId:"zaven_assistant_conversation_id",recentProducts:"zaven_recent_products",language:"beauty_skin_language"}),placeholderImage:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"});C.productionApiBaseUrl.replace(/\/+$/,"");function ns(e){const t=String(e||"").trim().replace(/\/+$/,"").toLowerCase();return t?t.includes("localhost")||t.includes("127.0.0.1")||t.includes("0.0.0.0")||t.startsWith("file:"):!1}function xt(e){const t=String(e||"").trim().replace(/\/+$/,"");return!t||t.includes("cosmetic-server-production.up.railway.app")||ns(t)?"":t}function cs(e,t){try{return JSON.parse(localStorage.getItem(e)||"null")||t}catch{return t}}function yt(){return localStorage.getItem(C.storageKeys.accessToken)||localStorage.getItem(C.storageKeys.legacyAccessToken)||""}function cr(){let e=localStorage.getItem(C.storageKeys.sessionId);return e||(e=`web-${Date.now()}-${Math.random().toString(36).slice(2,10)}`,localStorage.setItem(C.storageKeys.sessionId,e)),e}function ls(){const e=localStorage.getItem(C.storageKeys.legacyAccessToken);!localStorage.getItem(C.storageKeys.accessToken)&&e&&localStorage.setItem(C.storageKeys.accessToken,e);const a=localStorage.getItem(C.storageKeys.legacyUser);!localStorage.getItem(C.storageKeys.user)&&a&&localStorage.setItem(C.storageKeys.user,a)}function ds(){const e=localStorage.getItem(C.storageKeys.baseUrl)||"",t=xt(e);t!==e.trim().replace(/\/+$/,"")&&(t?localStorage.setItem(C.storageKeys.baseUrl,t):localStorage.removeItem(C.storageKeys.baseUrl))}const o={homeView:null,languageSelect:null,grid:null,dealsGrid:null,homeApiSections:null,recentlyViewedSection:null,recentlyViewedGrid:null,banners:null,announcements:null,categoryToolbar:null,quickCategoryGrid:null,catalogButton:null,catalogDrawer:null,closeCatalog:null,catalogList:null,status:null,dealsStatus:null,productsMode:null,dealsMode:null,title:null,loadMore:null,searchForm:null,searchInput:null,cartButton:null,cartDrawer:null,closeCart:null,cartItems:null,cartCount:null,cartSummary:null,cartTotal:null,authDialog:null,authForm:null,authTitle:null,loginTab:null,registerTab:null,loginFields:null,registerFields:null,authSubmit:null,authMessage:null,googleLoginButton:null,loginButton:null,favoritesButton:null,favoritesCount:null,favoritesDialog:null,favoritesSummary:null,favoritesContent:null,refreshFavorites:null,closeFavorites:null,notificationsButton:null,notificationsCount:null,notificationsDrawer:null,notificationsSummary:null,notificationsContent:null,refreshNotifications:null,closeNotifications:null,loginEmail:null,loginPassword:null,registerFullName:null,registerEmail:null,registerPhone:null,registerPassword:null,registerConfirmPassword:null,profileDrawer:null,closeProfile:null,profileContent:null,apiDialog:null,apiForm:null,apiButton:null,baseUrl:null,detailDialog:null,detailContent:null,productDetailPage:null,productDetailPageContent:null,checkoutButton:null,checkoutDialog:null,checkoutForm:null,checkoutHint:null,receiverSelect:null,addressSelect:null,checkoutContent:null,refreshHome:null,ordersButton:null,ordersDialog:null,ordersContent:null,refreshOrders:null,closeOrders:null,myReviewsDialog:null,myReviewsContent:null,myReviewsSummary:null,refreshMyReviews:null,closeMyReviews:null,writeReviewDialog:null,writeReviewForm:null,closeWriteReview:null,writeReviewProduct:null,reviewRatingSelector:null,reviewContent:null,reviewImages:null,reviewImageFiles:null,reviewUploadStatus:null,reviewFormMessage:null,submitReviewButton:null,supportButton:null,supportDialog:null,supportContent:null,privacyDialog:null,privacyContent:null,termsDialog:null,termsContent:null,toast:null,brandViewContent:null,cartExtras:null,cartStickyProgress:null,megaMenu:null,popularSearchesChips:null,assistantFab:null,assistantWidget:null,assistantWidgetContent:null,assistantPage:null,assistantPageContent:null},us={homeView:"homeView",languageSelect:"languageSelect",grid:"productGrid",dealsGrid:"dealsGrid",homeApiSections:"homeApiSections",recentlyViewedSection:"recentlyViewedSection",recentlyViewedGrid:"recentlyViewedGrid",banners:"banners",announcements:"announcements",categoryToolbar:"categoryToolbar",quickCategoryGrid:"quickCategoryGrid",catalogButton:"catalogButton",catalogDrawer:"catalogDrawer",closeCatalog:"closeCatalog",catalogList:"catalogList",status:"productStatus",dealsStatus:"dealsStatus",productsMode:"productsMode",dealsMode:"dealsMode",title:"productsTitle",loadMore:"loadMore",searchForm:"searchForm",searchInput:"searchInput",cartButton:"cartButton",cartDrawer:"cartDrawer",closeCart:"closeCart",cartItems:"cartItems",cartCount:"cartCount",cartSummary:"cartSummary",cartTotal:"cartTotal",authDialog:"authDialog",authForm:"authForm",authTitle:"authTitle",loginTab:"loginTab",registerTab:"registerTab",loginFields:"loginFields",registerFields:"registerFields",authSubmit:"authSubmit",authMessage:"authMessage",googleLoginButton:"googleLoginButton",loginButton:"loginButton",favoritesButton:"favoritesButton",favoritesCount:"favoritesCount",favoritesDialog:"favoritesDialog",favoritesSummary:"favoritesSummary",favoritesContent:"favoritesContent",refreshFavorites:"refreshFavorites",closeFavorites:"closeFavorites",notificationsButton:"notificationsButton",notificationsCount:"notificationsCount",notificationsDrawer:"notificationsDrawer",notificationsSummary:"notificationsSummary",notificationsContent:"notificationsContent",refreshNotifications:"refreshNotifications",closeNotifications:"closeNotifications",loginEmail:"loginEmail",loginPassword:"loginPassword",registerFullName:"registerFullName",registerEmail:"registerEmail",registerPhone:"registerPhone",registerPassword:"registerPassword",registerConfirmPassword:"registerConfirmPassword",profileDrawer:"profileDrawer",closeProfile:"closeProfile",profileContent:"profileContent",apiDialog:"apiDialog",apiForm:"apiForm",apiButton:"apiButton",baseUrl:"baseUrl",detailDialog:"detailDialog",detailContent:"detailContent",productDetailPage:"productDetailPage",productDetailPageContent:"productDetailPageContent",checkoutButton:"checkoutButton",checkoutDialog:"checkoutDialog",checkoutForm:"checkoutForm",checkoutHint:"checkoutHint",receiverSelect:"receiverSelect",addressSelect:"addressSelect",checkoutContent:"checkoutContent",refreshHome:"refreshHome",ordersButton:"ordersButton",ordersDialog:"ordersDialog",ordersContent:"ordersContent",refreshOrders:"refreshOrders",closeOrders:"closeOrders",myReviewsDialog:"myReviewsDialog",myReviewsContent:"myReviewsContent",myReviewsSummary:"myReviewsSummary",refreshMyReviews:"refreshMyReviews",closeMyReviews:"closeMyReviews",writeReviewDialog:"writeReviewDialog",writeReviewForm:"writeReviewForm",closeWriteReview:"closeWriteReview",writeReviewProduct:"writeReviewProduct",reviewRatingSelector:"reviewRatingSelector",reviewContent:"reviewContent",reviewImages:"reviewImages",reviewImageFiles:"reviewImageFiles",reviewUploadStatus:"reviewUploadStatus",reviewFormMessage:"reviewFormMessage",submitReviewButton:"submitReviewButton",supportButton:"supportButton",supportDialog:"supportDialog",supportContent:"supportContent",privacyDialog:"privacyDialog",privacyContent:"privacyContent",termsDialog:"termsDialog",termsContent:"termsContent",toast:"toast",brandViewContent:"brandViewContent",cartExtras:"cartExtras",cartStickyProgress:"cartStickyProgress",megaMenu:"megaMenu",popularSearchesChips:"popularSearchesChips",assistantFab:"assistantFab",assistantWidget:"assistantWidget",assistantWidgetContent:"assistantWidgetContent",assistantPage:"assistantPage",assistantPageContent:"assistantPageContent"};function ps(){Object.entries(us).forEach(([e,t])=>{o[e]=document.getElementById(t)})}function Le(e){const t={...e},a={};for(const r of Object.keys(t)){Object.defineProperty(a,r,{get(){return t[r]},set(c){t[r]=c},enumerable:!0,configurable:!0});const i=`set${r.charAt(0).toUpperCase()}${r.slice(1)}`;a[i]=c=>{t[r]=c}}return a}const m=Le({baseUrl:xt(localStorage.getItem(C.storageKeys.baseUrl)||""),lastApiError:"",lastApiStatus:0,currentRoute:"home",sessionId:cr(),impressionsSent:new Set,impressionObserver:null,isLoading:!1,searchTimer:null,supportFaqOpen:0,flashSaleEnd:null,currentSearchQuery:"",currentGridScreen:"home",orders:[],ordersLoading:!1,ordersError:"",selectedOrder:null,selectedOrderHistory:[],orderDetailLoading:!1,orderDetailError:"",orderHistoryWarning:"",savedForLater:[]});function lr(){var e;try{return((e=import.meta)==null?void 0:e.env)??{}}catch{return{}}}function We(){return!!lr().DEV}function dr(e){try{return JSON.parse(e)}catch{return e}}function ta(e,t){return typeof e=="string"&&e.trim()?e:(e==null?void 0:e.message)||(e==null?void 0:e.error)||`API xatosi: HTTP ${t}`}let je={onUnauthorized:()=>{},onLoginRequired:()=>{},showToast:()=>{}};function hs(e={}){je={...je,...e}}function ur(e,t){const a=e.startsWith("/")?e:`/${e}`,r=m.baseUrl?m.baseUrl.replace(/\/+$/,""):"",i=new URL(`${r}${a}`,window.location.origin);return t&&Object.entries(t).forEach(([c,d])=>{d!=null&&d!==""&&i.searchParams.set(c,d)}),i.toString()}async function I(e,t={}){const{query:a,showError:r=!0,requireAuth:i=!1,silentAuth:c=!1,timeoutMs:d=0,signal:u,...p}=t,h=ur(e,a),g={Accept:"application/json",...p.body?{"Content-Type":"application/json"}:{},...p.headers||{}},y=yt();if(y&&(g.Authorization=`Bearer ${y}`),i&&!y)return m.lastApiError="Please login to continue",je.onLoginRequired(),null;if(We()){const E=lr();console.info("[API REQUEST]",{path:e,requestUrl:h,method:p.method||"GET",query:a,baseUrl:m.baseUrl,host:window.location.host,mode:E.MODE,envBase:E.VITE_API_BASE_URL})}const A=new AbortController;let T=!1;const B=d>0?setTimeout(()=>{T=!0,A.abort()},d):null;u&&(u.aborted?A.abort():u.addEventListener("abort",()=>A.abort(),{once:!0}));try{m.lastApiError="",m.lastApiStatus=0;const E=await fetch(h,{...p,headers:g,signal:A.signal}),O=await E.text(),L=O?dr(O):null;if(m.lastApiStatus=E.status,We()&&console.info("[API RESPONSE]",{requestUrl:h,status:E.status,ok:E.ok,payload:L}),E.status===401){const H=ta(L,E.status);return m.lastApiError=c?typeof L=="object"&&(L!=null&&L.message||L!=null&&L.error)?H:"Email yoki parol noto‘g‘ri.":"Session expired. Please login again.",c||je.onUnauthorized(),null}if(!E.ok){const H=ta(L,E.status);return m.lastApiError=H,r&&je.showToast(H,"error"),null}return L}catch(E){return m.lastApiStatus=0,(E==null?void 0:E.name)==="AbortError"?m.lastApiError=T?"So‘rov vaqti tugadi. Qayta urinib ko‘ring.":"So‘rov bekor qilindi.":m.lastApiError="Server bilan aloqa bo‘lmadi",We()&&console.error("[API ERROR]",{requestUrl:h,error:E}),r&&(E==null?void 0:E.name)!=="AbortError"&&je.showToast("Server bilan aloqa vaqtincha ishlamayapti.","error"),null}finally{B&&clearTimeout(B)}}const ms=4200,gs=4;let ae=null;function fs(){return ae||(ae=document.getElementById("toast"),ae?(ae.classList.add("toast-host"),ae.setAttribute("aria-relevant","additions")):(ae=document.createElement("div"),ae.id="toast",ae.className="toast-host",ae.setAttribute("role","status"),ae.setAttribute("aria-live","polite"),ae.setAttribute("aria-relevant","additions"),document.body.appendChild(ae)),ae)}const qa={success:"✓",error:"✕",warning:"!",info:"i"};function M(e,t="info"){var y;const a=String(e||"").trim();if(!a)return;const r=fs(),i=qa[t]?t:"info",c=document.createElement("div");c.className=`toast-item toast-${i}`,c.setAttribute("role","status");const d=document.createElement("span");d.className="toast-icon",d.setAttribute("aria-hidden","true"),d.textContent=qa[i];const u=document.createElement("span");u.className="toast-message",u.textContent=a;const p=document.createElement("button");for(p.type="button",p.className="toast-close",p.setAttribute("aria-label","Close"),p.textContent="×",c.append(d,u,p),r.appendChild(c);r.children.length>gs;)(y=r.firstElementChild)==null||y.remove();let h=0;const g=()=>{clearTimeout(h),c.classList.remove("show"),window.setTimeout(()=>c.remove(),220)};p.addEventListener("click",g),h=window.setTimeout(g,ms),requestAnimationFrame(()=>{requestAnimationFrame(()=>c.classList.add("show"))})}const $=Le({accessToken:yt(),user:cs(C.storageKeys.user,null),role:localStorage.getItem(C.storageKeys.role)||"",authMode:"login",authLoading:!1,profileEditing:!1,profileLoading:!1,profileMenuOpen:!1,profileLoadSeq:0}),l=Le({products:[],todayDeals:[],categories:[],banners:[],announcements:[],recommendedProducts:[],recommendedSimilar:[],recommendedOthers:[],recommendationsLoading:!1,recommendationsError:"",selectedCategory:"ALL",selectedDetailProduct:null,selectedVariantId:null,selectedBrand:null,sourceProducts:[],filterFacets:{brands:[],colors:[],sizes:[],maxPrice:5e6},filters:null,recentlyViewed:[],productReviewsByProductId:{},productReviewsLoading:{},productReviewsError:{},myReviews:[],myReviewsLoading:!1,myReviewsError:"",reviewSubmitting:!1,reviewDraft:null,reviewRating:5,reviewSort:"newest",reviewFilterRating:0,reviewSearchQuery:"",reviewHelpfulIds:new Set,uploadingReviewImages:!1,detailLoading:!1,detailError:"",pdpGalleryIndex:0,pdpActiveTab:"description",selectedQuantity:1,homeLoadedFromApi:!1,demoCategories:!1,demoProducts:!1,demoDeals:!1,homeApiSections:null,compareIds:[],compareProducts:[],feedLoading:!1,feedPage:0}),k=Le({cart:[],cartItems:[],cartLoading:!1,cartError:"",cartCount:0,cartTotal:0,cartUpdatingIds:new Set,cartSelectedIds:new Set,cartKnownItemIds:new Set,addingProductIds:new Set,cartCoupon:"",cartCouponDiscount:0}),P=Le({favoriteProducts:[],favoriteIds:new Set,favoritesLoading:!1,favoritesError:"",favoritesCount:0}),q=Le({notifications:[],notificationsLoading:!1,notificationsError:"",unreadCount:0,unreadCountLoading:!1,notificationUpdatingIds:new Set}),f=Le({receivers:[],addresses:[],selectedReceiverId:null,selectedAddressId:null,checkoutLoading:!1,orderSubmitting:!1,checkoutError:"",orderSuccess:null,checkoutStep:1,checkoutAddressPickerOpen:!1,checkoutReceiverPickerOpen:!1,checkoutCouponOpen:!1,checkoutConfirmOpen:!1}),b=Le({conversationId:"",sessionId:"",messages:[],followUpQuestions:[],loading:!1,historyLoading:!1,error:"",errorStatus:null,widgetOpen:!1,citationsOpen:{},pendingRetryId:null,_bootstrapped:!1});function fa(){return{currentRoute:m.currentRoute,selectedDetailProduct:l.selectedDetailProduct}}const pr={SKINCARE:"Skincare",MAKEUP:"Makeup",COLLAGEN:"Collagen",HAIR_CARE:"Hair Care",FRAGRANCE:"Fragrance",TOP:"Top",OUTER:"Outer",PANTS:"Pants",SHOES:"Shoes",BAG:"Bag",ACCESSORY:"Accessory"},va=Object.freeze(["uz","en","ru","ko"]),gt="uz",Ba=Object.freeze([{category:"SKINCARE",icon:"S"},{category:"MAKEUP",icon:"M"},{category:"COLLAGEN",icon:"C"},{category:"HAIR_CARE",icon:"H"},{category:"FRAGRANCE",icon:"F"},{category:"BAG",icon:"B"},{category:"SHOES",icon:"S"},{category:"ACCESSORY",icon:"A"}]),hr={"header.location":"📍 Toshkent","header.extraLinks":"Qo‘shimcha havolalar","header.pickupPoints":"Punktlar","header.sell":"Sotuvchi bo‘lish","header.support":"Savol-javob","header.orders":"Buyurtmalar","header.language":"Til","header.currency":"Valyuta","header.theme":"Mavzu","header.homeAria":"BEAUTY SKIN KOREA bosh sahifa","header.openCatalog":"Katalogni ochish","header.catalog":"Katalog","header.search":"Qidirish","header.searchPlaceholder":"Mahsulot va kategoriyalarni qidirish","header.mainMenu":"Asosiy menyu","header.loginProfile":"Profil yoki kirish","auth.login":"Kirish","auth.register":"Ro‘yxatdan o‘tish","auth.email":"Email","auth.password":"Parol","auth.confirmPassword":"Parolni tasdiqlang","auth.fullName":"To‘liq ism","auth.phone":"Telefon","auth.signIn":"Kirish","auth.createAccount":"Hisob yaratish","auth.continueWithGoogle":"Google bilan kirish","auth.or":"yoki","auth.logout":"Chiqish","auth.loginRequired":"Davom etish uchun kiring","auth.sessionExpired":"Sessiya tugadi. Qayta kiring.","auth.emailRequired":"Email majburiy.","auth.passwordMin":"Parol kamida 6 ta belgi bo‘lsin.","auth.fullNameRequired":"To‘liq ism majburiy.","auth.phoneRequired":"Telefon majburiy.","auth.passwordMismatch":"Parollar mos emas.","home.all":"Hammasi","home.categories":"Kategoriyalar","home.quickCategories":"Tezkor kategoriyalar","home.lowPriceGuarantee":"Past narx kafolati","home.seeAll":"Hammasi","home.todayDeals":"Bugungi takliflar","home.discounts":"Chegirmalar","home.newArrivals":"Yangi mahsulotlar","home.popular":"Ommabop mahsulotlar","home.recommended":"Siz uchun tavsiyalar","home.similar":"O‘xshash mahsulotlar","home.others":"Boshqalar ham ko‘rgan","home.demoMode":"Demo rejim","home.todayOnly":"Faqat bugun","home.startShopping":"Xaridni boshlash","home.showAll":"Barcha mahsulotlar","home.loadMore":"Yana yuklash","home.noProducts":"Mahsulot topilmadi","home.loading":"Yuklanmoqda...","product.addToCart":"Savatga","product.addToCartFull":"Savatga qo‘shish","product.adding":"Qo‘shilmoqda...","product.sold":"{count} dona sotilgan","product.stock":"Omborda: {count}","product.outOfStock":"Omborda yo‘q","product.save":"Saqlash","product.saved":"Saqlangan","product.viewDetails":"Batafsil","product.quickView":"Tez ko‘rish","product.compare":"Solishtirish","product.compareSoon":"Solishtirish tez orada","product.lowStock":"Kam qoldi","product.freeShipping":"Bepul yetkazish","product.reviews":"Sharhlar","product.home":"Bosh sahifa","product.description":"Tavsif","product.detailImages":"Batafsil rasmlar","product.details":"Tafsilotlar","product.delivery":"O‘zbekiston bo‘ylab yetkazib berish","product.secure":"Xavfsiz to‘lov","product.original":"Asl koreys mahsulotlari","product.quantity":"Miqdor","product.notFound":"Mahsulot topilmadi","product.backToShopping":"Xaridga qaytish","product.variantUnavailable":"Variant mavjud emas","cart.title":"Savat","cart.empty":"Savatingiz bo‘sh","cart.subtotal":"Jami","cart.checkout":"Rasmiylashtirish","cart.remove":"O‘chirish","cart.quantity":"Miqdor","cart.added":"Savatga qo‘shildi","cart.itemRemoved":"Mahsulot o‘chirildi","cart.quantityUpdated":"Miqdor yangilandi","cart.unavailable":"Savat mavjud emas","cart.deliveryCourier":"Kuryer orqali yetkazib berish","cart.deliveryEta":"3 kun ichida yetkazamiz","cart.selectAll":"Hammasini tanlash ({selected}/{total})","cart.selectItem":"Mahsulotni tanlash","cart.deleteSelected":"O‘chirish","cart.yourOrder":"Sizning buyurtmangiz","cart.goodsCount":"{count} ta mahsulot","cart.discount":"Chegirma","cart.deliveryCost":"Yetkazib berish narxi","cart.freeDelivery":"Bepul","cart.products":"Mahsulot","cart.freeToHome":"Uyga bepul yetkazish","cart.shipsToday":"Bugun jo‘natiladi","cart.emptyHint":"Yoqtirgan mahsulotlaringizni qo‘shing — ular shu yerda ko‘rinadi.","checkout.title":"Rasmiylashtirish","checkout.receiver":"Qabul qiluvchi","checkout.address":"Yetkazib berish manzili","checkout.orderSummary":"Buyurtma xulosasi","checkout.placeOrder":"Buyurtma berish","checkout.orderCreated":"Buyurtma yaratildi","checkout.continueShopping":"Xaridni davom ettirish","checkout.viewOrders":"Buyurtmalarni ko‘rish","orders.title":"Buyurtmalar tarixi","orders.order":"Buyurtma","orders.details":"Buyurtma tafsilotlari","orders.history":"Status tarixi","orders.none":"Hali buyurtmalar yo‘q","orders.refresh":"Yangilash","orders.viewDetails":"Batafsil","orders.items":"{count} ta mahsulot","orders.itemsCount":"{count} ta tovar","orders.totalLabel":"Jami:","orders.addressLabel":"Manzil:","orders.products":"Mahsulotlar","orders.emptyHint":"Xaridlar qilgandan so‘ng buyurtmalar shu yerda ko‘rinadi.","orders.unavailable":"Buyurtmalar yuklanmadi","orders.detailUnavailable":"Buyurtma tafsilotlari yuklanmadi","orders.noItems":"Mahsulotlar topilmadi.","orders.deliveryInfo":"Yetkazib berish ma'lumotlari","orders.openOnMap":"Xaritada ochish","orders.orderActions":"Buyurtma amallari","orders.goodsLabel":"Mahsulotlar","orders.totalAmount":"Jami summa","orders.feedback":"Fikr-mulohaza","orders.statusMessage.NEW":"Buyurtma qabul qilindi va tez orada tasdiqlanadi.","orders.statusMessage.CONFIRMED":"Buyurtma tasdiqlandi va tayyorlanmoqda.","orders.statusMessage.PACKED":"Buyurtma qadoqlandi va tez orada yuboriladi.","orders.statusMessage.SHIPPED":"Buyurtma yo'lda. Yetkazish vaqtida aloqada bo'ling.","orders.statusMessage.DELIVERED":"Buyurtma yetkazildi. Xaridingiz uchun rahmat!","orders.statusMessage.CANCELED":"Buyurtma bekor qilindi.","orders.statusMessage.default":"Buyurtma holati yangilanmoqda.","favorites.title":"Saralangan","favorites.empty":"Saralanganlar hozircha bo‘sh","favorites.emptyHint":"Yoqtirgan mahsulotlaringiz shu yerda saqlanadi. Yoqqanlarini qo‘shing.","favorites.browse":"Mahsulotlarga","favorites.count":"{count} ta mahsulot","favorites.unavailable":"Saralanganlar yuklanmadi","favorites.added":"Saralanganlarga qo‘shildi","favorites.removed":"Saralangandan olib tashlandi","profile.myProfile":"Profil","profile.edit":"Profilni tahrirlash","profile.save":"Saqlash","profile.myOrders":"Buyurtmalarim","profile.myReviews":"Sharhlarim","profile.tierWhite":"White","profile.ordersStat":"Buyurtmalar","profile.reviewsStat":"Sharhlar","profile.couponsStat":"Kupon","profile.feedbackStat":"Fikr-mulohaza","profile.seeAll":"Hammasini ko‘rish","profile.promotions":"Aksiyalar va kuponlar","profile.help":"Yordam va qo‘llab-quvvatlash","profile.news":"Yangiliklar","profile.language":"Til / Til / Language","profile.privacy":"Maxfiylik siyosati","profile.terms":"Foydalanish shartlari","profile.licenses":"Ochiq kod litsenziyalari","profile.settings":"Sozlamalar","profile.menu":"Menyu","profile.logout":"Chiqish","profile.loggedOut":"Tizimdan chiqildi","profile.comingSoon":"Bu bo‘lim tez orada qo‘shiladi","profile.helpMessage":"Qo‘llab-quvvatlash: support@beautyskin.uz","profile.fullName":"To‘liq ism","profile.phone":"Telefon","profile.imageUrl":"Profil rasmi URL","profile.loadUserFailed":"Profil ma’lumotlari yuklanmadi","profile.loadOrdersFailed":"Buyurtmalar yuklanmadi","profile.loadReviewsFailed":"Sharhlar yuklanmadi","profile.loadFailed":"Profil ma’lumotlari yuklanmadi","support.title":"Qo‘llab-quvvatlash xizmati","support.intro":"Savollaringiz bormi? Biz sizga yordam beramiz.","support.faqTitle":"Ko‘p beriladigan savollar","support.faq.delivery.q":"Buyurtmam qachon keladi?","support.faq.delivery.a":"Buyurtmalar odatda 3–5 ish kuni ichida yetkazib beriladi. Yetkazib berish muddati hudud va tanlangan kuryer xizmatiga bog‘liq. Tabiiy ofatlar yoki boshqa kutilmagan holatlar yuzaga kelmagan taqdirda, buyurtmangiz belgilangan muddatda yetib keladi.","support.faq.cancel.q":"Buyurtmani qanday bekor qilaman?","support.faq.cancel.a":"Buyurtma faqat jo‘natilmaguncha bekor qilinishi mumkin. Buyurtma kuryer xizmatiga topshirilgandan so‘ng uni bekor qilish imkoniyati mavjud emas. Bekor qilish uchun profil bo‘limi yoki mijozlarga xizmat orqali murojaat qilishingiz mumkin.","support.faq.return.q":"Mahsulotni qaytarish mumkinmi?","support.faq.return.a":"Mahsulotni qaytarish faqat u ishlatilmagan, qadoqlanishi buzilmagan va to‘liq holatda saqlangan taqdirda amalga oshiriladi. Qaytarish jarayonida mahsulotni kargo orqali yuborish xarajatlari mijoz zimmasiga yuklanadi.","support.originalTitle":"100% original va Koreyadan to‘g‘ridan-to‘g‘ri yetkazib berish","support.originalText":"Ilovamizdagi mahsulotlar to‘g‘ridan-to‘g‘ri Janubiy Koreyadagi rasmiy ishlab chiqaruvchilar va sertifikatlangan distribyutorlardan import qilinadi. Soxta mahsulot sotish qat’iyan taqiqlanadi.","support.whyTitle":"Nega biz?","support.why1":"Koreyadan to‘g‘ridan-to‘g‘ri import","support.why2":"Hech qanday soxta mahsulot yo‘q","support.why3":"Zavod qadog‘i va original plombalar","support.why4":"Har bir buyurtma jo‘natishdan oldin tekshiriladi","support.why5":"Minglab mamnun mijozlar tanlovi","support.guarantee":"Agar mahsulot original bo‘lmasa — biz 100% qiymatini qaytaramiz.","support.contactTitle":"Biz bilan bog‘laning","support.phoneLabel":"Telefon:","support.hoursLabel":"Ish vaqti:","support.hoursValue":"09:00 – 18:00 (Du–Ju)","support.contactNote":"Murojaatlaringizni qadrlaymiz va imkon qadar tezroq javob berishga harakat qilamiz.","privacy.title":"Maxfiylik siyosati","privacy.updated":"Oxirgi yangilanish: 2025 y.","privacy.intro":"Biz foydalanuvchilarning shaxsiy ma’lumotlarini hurmat qilamiz va himoya qilamiz. Ushbu Maxfiylik siyosati ma’lumotlaringiz qanday to‘planishi, ishlatilishi va saqlanishini tushuntiradi.","privacy.s1title":"1. Qanday ma’lumotlar to‘planadi","privacy.s1a":"Ism va profil ma’lumotlari","privacy.s1b":"Telefon raqami yoki email","privacy.s1c":"Buyurtmalar va savat ma’lumotlari","privacy.s1d":"Qurilma haqidagi texnik ma’lumotlar","privacy.s2title":"2. Ma’lumotlardan foydalanish","privacy.s2intro":"To‘plangan ma’lumotlar quyidagi maqsadlarda ishlatiladi:","privacy.s2a":"Buyurtmalarni bajarish","privacy.s2b":"Akkauntni boshqarish","privacy.s2c":"Xizmat sifatini yaxshilash","privacy.s2d":"Xavfsizlikni ta’minlash","privacy.s3title":"3. Ma’lumotlarni himoya qilish","privacy.s3text":"Biz shaxsiy ma’lumotlaringizni ruxsatsiz kirish, o‘zgartirish yoki tarqatishdan himoya qilish uchun zamonaviy xavfsizlik choralarini qo‘llaymiz.","privacy.s4title":"4. Uchinchi tomon xizmatlari","privacy.s4text":"Ilovamiz to‘lov, yetkazib berish va autentifikatsiya uchun uchinchi tomon xizmatlaridan foydalanishi mumkin. Bu xizmatlarning o‘z maxfiylik siyosati mavjud.","privacy.s5title":"5. Aloqa","privacy.s5text":"Agar Maxfiylik siyosati bo‘yicha savollaringiz bo‘lsa, biz bilan bog‘laning:","terms.title":"Foydalanish shartlari","terms.updated":"Oxirgi yangilanish: 2025 y.","terms.intro":"Ushbu mobil ilovadan foydalanish orqali siz ushbu Foydalanish shartlariga rozilik bildirasiz. Agar shartlarga rozi bo‘lmasangiz, iltimos, ilovadan foydalanmang.","terms.s1title":"1. Umumiy qoidalar","terms.s1text":"Ushbu ilova kosmetika va boshqa mahsulotlarni onlayn sotib olish uchun mo‘ljallangan. Barcha materiallar, logotiplar va kontent mualliflik huquqi bilan himoyalangan.","terms.s2title":"2. Akkaunt ro‘yxatdan o‘tkazish","terms.s2text":"Buyurtma berish uchun foydalanuvchi akkaunt yaratishi va ishonchli ma’lumotlarni taqdim etishi kerak. Foydalanuvchi o‘z akkauntining xavfsizligi uchun javobgardir.","terms.s3title":"3. Buyurtmalar va to‘lov","terms.s3text":"Buyurtmalar ilova orqali rasmiylashtiriladi. Mahsulot narxlari oldindan ogohlantirmasdan o‘zgarishi mumkin. To‘lov tanlangan usul bo‘yicha amalga oshiriladi.","terms.s4title":"4. Yetkazib berish","terms.s4text":"Yetkazib berish muddatlari hudud va tanlangan usulga bog‘liq. Uchinchi tomon yetkazib berish xizmatlari sababli yuzaga kelgan kechikishlar uchun javobgar emasmiz.","terms.s5title":"5. Qaytarish va bekor qilish","terms.s5text":"Buyurtmalarni qaytarish va bekor qilish siyosati tegishli bo‘limda va yordam hamda qo‘llab-quvvatlash sahifasida tavsiflangan.","terms.s6title":"6. Javobgarlikni cheklash","terms.s6text":"Ilovadan foydalanish bilan bog‘liq bilvosita zarar uchun javobgar emasmiz.","terms.s7title":"7. Shartlarni o‘zgartirish","terms.s7text":"Biz ushbu shartnomani istalgan vaqtda o‘zgartirish huquqini o‘zimizda saqlaymiz. Joriy versiya doimo ilovada mavjud.","licenses.title":"Open Source Libraries & Technologies","licenses.intro":"Ushbu ilova quyidagi ochiq kodli texnologiyalar yordamida qurilgan","licenses.frontendTitle":"Android Frontend","licenses.fe1":"Android Jetpack – hayot sikli, navigatsiya, ViewBinding va arxitektura komponentlarini boshqarish uchun ishlatiladigan zamonaviy Android kutubxonalari to‘plami, barqaror foydalanuvchi interfeysini ta’minlaydi.","licenses.fe2":"Retrofit – backend REST API bilan samarali aloqa qilish uchun ishlatiladigan Android uchun tip-xavfsiz HTTP-mijoz.","licenses.fe3":"Glide – silliq skroll va samarali xotira ishlatilishi uchun optimallashtirilgan rasmlarni yuklash va keshlash kutubxonasi.","licenses.fe4":"Firebase Authentication – Google orqali xavfsiz foydalanuvchi autentifikatsiyasi va telefon raqamini tekshirish (OTP) ni ta’minlaydi.","licenses.fe5":"Facebook Shimmer – foydalanuvchi tajribasini yaxshilash uchun animatsiyali yuklash zaxira o‘rinlarini ko‘rsatadi.","licenses.backendTitle":"Backend & Server Technologies","licenses.be1":"Spring Boot – masshtablanadigan RESTful API yaratish uchun ishlatiladigan Java asosidagi freymvork.","licenses.be2":"Spring Security + JWT – foydalanuvchi sessiyalari va API endpointlarini himoya qilish uchun JSON Web Tokens yordamida autentifikatsiyani amalga oshiradi.","licenses.be3":"Spring Data JPA – ORM va repozitoriy patterni yordamida ma’lumotlar bazasiga kirishni soddalashtiradi.","licenses.be4":"MySQL – hisob yozuvlari, buyurtmalar va tovarlarni saqlash uchun ishonchli relatsion ma’lumotlar bazasini boshqarish tizimi.","licenses.be5":"Eskiz SMS API – telefon raqamini tekshirish va bir martalik parollarni (OTP) yetkazish uchun ishlatiladi.","licenses.infraTitle":"Infrastructure & Deployment","licenses.inf1":"Docker – ilovani barcha bog‘liqliklari bilan barqaror joylashtirish uchun paketlash konteynerizatsiya texnologiyasi.","licenses.inf2":"Railway Cloud – backend xizmatlarini joylashtirish, masshtablash va monitoring qilish uchun bulutli platforma.","licenses.securityTitle":"Security & Data Protection","licenses.sec1":"HTTPS – foydalanuvchi ma’lumotlarini himoya qilish uchun barcha tarmoq aloqasi HTTPS yordamida shifrlangan.","licenses.sec2":"Xavfsiz parol bilan ishlash – foydalanuvchi hisob ma’lumotlari hech qachon ochiq holda saqlanmaydi.","licenses.sec3":"Token asosidagi avtorizatsiya – barcha himoyalangan so‘rovlar yaroqli JWT tokenlarini talab qiladi.","licenses.footer":"Biz ochiq kod hamjamiyatini hurmat qilamiz va barcha litsenziya talablari hamda ilg‘or xavfsizlik amaliyotlariga qat’iy rioya qilamiz.","reviews.my":"Mening sharhlarim","reviews.write":"Sharh yozish","reviews.submit":"Sharh yuborish","reviews.rating":"Reyting","reviews.content":"Sharh matni","reviews.none":"Hali sharhlar yo‘q","reviews.noText":"Matnli sharh yo‘q.","reviews.submitted":"Sharh yuborildi","notifications.title":"Bildirishnomalar","notifications.alerts":"Xabarlar","notifications.none":"Hali bildirishnomalar yo‘q","notifications.markRead":"O‘qildi deb belgilash","notifications.read":"O‘qilgan","notifications.unread":"O‘qilmagan","common.tryAgain":"Qayta urinish","common.somethingWrong":"Nimadir xato ketdi","common.serverFailed":"Server bilan aloqa bo‘lmadi","common.saving":"Saqlanmoqda...","common.total":"Jami","common.unknown":"Noma’lum","common.unavailable":"Mavjud emas","status.NEW":"Yangi","status.PENDING":"Kutilmoqda","status.CONFIRMED":"Tasdiqlangan","status.PACKED":"Qadoqlangan","status.SHIPPED":"Yuborilgan","status.DELIVERED":"Yetkazilgan","status.CANCELED":"Bekor qilingan","notification.ORDER":"Buyurtma","notification.PROMO":"Aksiya","notification.SYSTEM":"Tizim","category.SKINCARE":"Teri parvarishi","category.MAKEUP":"Makiyaj","category.COLLAGEN":"Kollagen","category.HAIR_CARE":"Soch parvarishi","category.FRAGRANCE":"Atirlar","category.TOP":"Ustki kiyim","category.OUTER":"Tashqi kiyim","category.PANTS":"Shimlar","category.SHOES":"Poyabzal","category.BAG":"Sumka","category.ACCESSORY":"Aksessuar","hero.eyebrow":"Eng yaxshi kunlik takliflar","hero.title":"Koreys go‘zallik mahsulotlari","hero.subtitle":"O‘zbekiston bo‘ylab tez yetkazib berish — kosmetika, teri parvarishi, atir va aksessuarlar.","hero.viewProducts":"Mahsulotlarni ko‘rish","hero.fastDelivery":"Tez yetkazib berish","hero.fastDeliverySub":"O‘zbekiston bo‘ylab","home.history":"Tarix","home.recentlyViewed":"Yaqinda ko‘rilgan","api.title":"API sozlamasi","api.save":"Saqlash","search.results":"Natijalar","search.noResults":"Hech narsa topilmadi","search.recent":"So‘nggi qidiruvlar","search.trending":"Trendda","search.clear":"Tozalash","search.aiHint":"AI qidiruv — tezroq toping","search.voice":"Ovozli qidiruv","search.image":"Rasm bo‘yicha qidiruv","search.imagePlaceholder":"Rasm tanlandi — qidiruv tez orada","search.popularSearches":"Ommabop qidiruvlar","trust.secure":"Xavfsiz to‘lov","trust.authentic":"100% asl mahsulot","trust.delivery":"Tez yetkazib berish","trust.verified":"Tasdiqlangan sotuvchilar","filter.title":"Filtrlar","filter.clearAll":"Hammasini tozalash","filter.brand":"Brend","filter.price":"Narx","filter.discount":"Chegirma","filter.color":"Rang","filter.size":"O'lcham","filter.rating":"Reyting","filter.availability":"Mavjudlik","filter.fastDelivery":"Tez yetkazish","filter.origin":"Kelib chiqishi","filter.seller":"Sotuvchi","filter.onSaleOnly":"Faqat chegirmali","filter.inStock":"Omborda bor","filter.apply":"Qo'llash","filter.noOptions":"Variant yo'q","sort.title":"Saralash","sort.popular":"Ommabop","sort.priceAsc":"Narx: arzon → qimmat","sort.priceDesc":"Narx: qimmat → arzon","sort.rating":"Yuqori reyting","sort.newest":"Yangi","sort.discount":"Eng katta chegirma","compare.title":"Solishtirish","compare.empty":"Solishtirish ro'yxati bo'sh","compare.added":"Solishtirishga qo'shildi","compare.removed":"Solishtirishdan olib tashlandi","compare.full":"Maksimum {max} ta mahsulot","compare.viewAll":"Solishtirishni ko'rish","compare.clearAll":"Hammasini tozalash","compare.price":"Narx","compare.brand":"Brend","compare.rating":"Reyting","compare.stock":"Ombor","compare.discount":"Chegirma","product.authentic":"Asl mahsulot","product.officialStore":"Rasmiy do'kon","product.fullscreen":"To'liq ekran","product.video360Placeholder":"Video va 360° tez orada","product.listPrice":"Ro'yxat narxi","product.discount":"Chegirma","product.installmentPlaceholder":"Bo'lib to'lash tez orada","product.estimatedDelivery":"Taxminiy yetkazish","product.frequentlyBought":"Ko'pincha birga sotib olinadi","cart.saveForLater":"Keyinroq uchun saqlash","cart.couponPlaceholder":"Kupon kodi","cart.applyCoupon":"Qo'llash","cart.couponApplied":"Kupon qo'llandi","cart.couponInvalid":"Kupon noto'g'ri","cart.freeShippingUnlocked":"Bepul yetkazish!","cart.freeShippingRemaining":"Bepul yetkazish uchun yana {amount}","cart.restored":"Saqlangan mahsulot","cart.moveToCart":"Savatga qaytarish","checkout.stepShipping":"Yetkazish","checkout.stepAddress":"Manzil","checkout.stepPayment":"To'lov","checkout.stepReview":"Tekshirish","checkout.back":"Orqaga","checkout.continue":"Davom etish","checkout.placing":"Yuborilmoqda...","checkout.paymentPlaceholder":"Xavfsiz to'lov (COD / karta tez orada)","checkout.receiverRequired":"Qabul qiluvchini tanlang","checkout.addressRequired":"Manzilni tanlang","checkout.deliveryTitle":"Yetkazib berish","checkout.deliveryEta":"Buyurtma 3–5 ish kuni ichida yetkaziladi","checkout.addressNotSelected":"Manzil tanlanmagan","checkout.selectAddress":"Manzilni tanlash","checkout.receiverNotSelected":"Qabul qiluvchi tanlanmagan","checkout.paymentMethod":"To‘lov usuli","checkout.paymentCod":"Qabul qilganda to‘lash","checkout.paymentCodHint":"To‘lov faqat naqd pul yoki bank kartasiga o‘tkazma orqali amalga oshiriladi","checkout.deliveryInfo":"Buyurtma kuryer orqali manzilga yetkaziladi. Yetkazish vaqtida aloqada bo‘ling.","checkout.couponTitle":"Chegirma kuponi","checkout.applyCoupon":"Kupon qo‘llash","checkout.yourOrder":"Sizning buyurtmangiz","checkout.deliveryFee":"Yetkazish","checkout.totalToPay":"To‘lov uchun jami","checkout.confirm":"Tasdiqlash","checkout.legalNotice":"Buyurtmani tasdiqlash orqali Foydalanish shartlari va Maxfiylik siyosatiga rozilik bildirasiz.","checkout.deliveryOn":"Yetkazish {dates}","checkout.itemsCount":"{count} ta mahsulot","checkout.confirmTitle":"Buyurtmani tasdiqlash","checkout.confirmQuestion":"Buyurtmani yubormoqchimisiz?","checkout.confirmName":"Ism: {name}","checkout.confirmAddress":"Manzil: {address}","checkout.confirmDisclaimer":"Tasdiqlangandan keyin buyurtmani faqat qo‘llab-quvvatlash xizmati orqali o‘zgartirish mumkin.","checkout.cancel":"Bekor qilish","checkout.successTitle":"Buyurtma muvaffaqiyatli rasmiylashtirildi!","checkout.successSubtitle":"Buyurtma muvaffaqiyatli qabul qilindi","checkout.orderFailed":"Buyurtma yuborilmadi. Qayta urinib ko‘ring.","checkout.noItems":"Savatda tanlangan mahsulot yo‘q.","checkout.invalidItems":"Savatdagi mahsulot identifikatorlari noto‘g‘ri.","reviews.verified":"Tasdiqlangan xarid","reviews.helpful":"Foydali","reviews.search":"Sharhlarni qidirish","reviews.sortNewest":"Eng yangi","reviews.sortRatingHigh":"Yuqori reyting","reviews.sortRatingLow":"Past reyting","reviews.sortHelpful":"Eng foydali","reviews.allRatings":"Barcha reytinglar","brand.official":"Rasmiy brend","brand.story":"Koreys go'zallik brendi","brand.popular":"Ommabop mahsulotlar","home.trendingNow":"Hozir trendda","home.recommendedForYou":"Siz uchun tavsiya","home.continueShopping":"Xaridni davom ettirish","home.becauseYouViewed":"Siz ko'rganingiz uchun","footer.tagline":"Koreys go‘zallik marketpleysi","assistant.title":"Xarid yordamchisi","assistant.subtitle":"Teri turiga mos mahsulotlar tavsiya qilamiz","assistant.fabLabel":"AI Yordamchi","assistant.placeholder":"Masalan: quruq teri uchun krem tavsiya qil...","assistant.send":"Yuborish","assistant.composerHint":"Enter — yuborish · Shift+Enter — yangi qator","assistant.newChat":"Yangi chat","assistant.newChatStarted":"Yangi suhbat boshlandi","assistant.openFull":"To‘liq ochish","assistant.close":"Yopish","assistant.emptyTitle":"Savolingizni yozing","assistant.emptyHint":"Mahsulot tanlash, taqqoslash yoki teri muammosi bo‘yicha maslahat so‘rang.","assistant.thinking":"Yordamchi javob yozmoqda...","assistant.loadingHistory":"Suhbat yuklanmoqda...","assistant.retry":"Qayta urinish","assistant.sources":"Manbalar","assistant.viewProduct":"Ko‘rish","assistant.addToCart":"Savatga","assistant.inStock":"Mavjud","assistant.errorNetwork":"Tarmoq xatosi. Internetni tekshirib, qayta urinib ko‘ring.","assistant.errorTimeout":"Javob vaqti tugadi. Qayta urinib ko‘ring.","assistant.error400":"So‘rov noto‘g‘ri. Xabarni o‘zgartirib ko‘ring.","assistant.error401":"Sessiya tugagan. Qayta kiring yoki davom eting.","assistant.error429":"Juda ko‘p so‘rov. Biroz kutib, qayta urinib ko‘ring.","assistant.error500":"Server xatosi. Keyinroq qayta urinib ko‘ring.","assistant.error503":"Xizmat vaqtincha mavjud emas. Qayta urinib ko‘ring.","assistant.errorGeneric":"Javob olinmadi. Qayta urinib ko‘ring."},ya={...hr,"header.location":"📍 Tashkent","header.pickupPoints":"Pickup points","header.sell":"Sell on Beauty Skin Korea","header.support":"Support","header.orders":"Orders","header.language":"Language","header.catalog":"Catalog","header.searchPlaceholder":"Search products and categories","header.search":"Search","auth.login":"Login","auth.register":"Register","auth.signIn":"Sign in","auth.createAccount":"Create account","auth.continueWithGoogle":"Continue with Google","auth.or":"or","auth.email":"Email","auth.password":"Password","auth.confirmPassword":"Confirm password","auth.fullName":"Full name","auth.phone":"Phone","auth.logout":"Logout","auth.loginRequired":"Please login to continue","auth.emailRequired":"Email is required.","auth.passwordMin":"Password must be at least 6 characters.","auth.fullNameRequired":"Full name is required.","auth.phoneRequired":"Phone is required.","auth.passwordMismatch":"Passwords do not match.","home.all":"All","home.categories":"Categories","home.quickCategories":"Quick categories","home.lowPriceGuarantee":"Low price guarantee","home.seeAll":"All","home.todayDeals":"Today deals","home.discounts":"Discounts","home.newArrivals":"New arrivals","home.popular":"Popular products","home.recommended":"Recommended for you","home.similar":"Similar products","home.others":"Others also viewed","home.demoMode":"Demo mode","home.todayOnly":"Today only","home.startShopping":"Start shopping","home.showAll":"Show all products","home.loadMore":"Load more","home.noProducts":"No products found","home.loading":"Loading...","product.addToCart":"Add to cart","product.addToCartFull":"Add to cart","product.adding":"Adding...","product.sold":"{count} sold","product.stock":"Stock: {count}","product.save":"Save","product.saved":"Saved","product.viewDetails":"View details","product.reviews":"Reviews","product.description":"Description","product.detailImages":"Detail images","product.delivery":"Delivery across Uzbekistan","product.secure":"Secure checkout","product.original":"Original Korean products","product.notFound":"Product not found","product.backToShopping":"Back to shopping","cart.title":"Cart","cart.empty":"Your cart is empty","cart.subtotal":"Subtotal","cart.checkout":"Checkout","cart.added":"Added to cart","cart.itemRemoved":"Removed from cart","cart.quantityUpdated":"Quantity updated","cart.deliveryCourier":"Courier delivery","cart.deliveryEta":"Delivered in 3 days","cart.selectAll":"Select all ({selected}/{total})","cart.selectItem":"Select item","cart.deleteSelected":"Delete","cart.yourOrder":"Your order","cart.goodsCount":"{count} items","cart.discount":"Discount","cart.deliveryCost":"Delivery cost","cart.freeDelivery":"Free","cart.products":"Products","cart.freeToHome":"Free home delivery","cart.shipsToday":"Ships today","cart.emptyHint":"Add products you like and they will appear here.","cart.remove":"Remove","cart.unavailable":"Cart unavailable","orders.title":"Order history","orders.itemsCount":"{count} items","orders.totalLabel":"Total:","orders.addressLabel":"Address:","orders.products":"Products","orders.emptyHint":"Your purchases will appear here.","orders.unavailable":"Orders could not be loaded","orders.detailUnavailable":"Order details unavailable","orders.noItems":"No items found.","orders.deliveryInfo":"Delivery information","orders.openOnMap":"Open on map","orders.orderActions":"Order actions","orders.goodsLabel":"Products","orders.totalAmount":"Total amount","orders.feedback":"Feedback","orders.statusMessage.NEW":"Order received and will be confirmed soon.","orders.statusMessage.CONFIRMED":"Order confirmed and being prepared.","orders.statusMessage.PACKED":"Order packed and will ship soon.","orders.statusMessage.SHIPPED":"Order is on the way. Please stay in touch.","orders.statusMessage.DELIVERED":"Order delivered. Thank you for your purchase!","orders.statusMessage.CANCELED":"Order was canceled.","orders.statusMessage.default":"Order status is being updated.","orders.order":"Order","orders.viewDetails":"Details","orders.items":"{count} items","orders.details":"Order details","orders.history":"Status history","favorites.title":"Favorites","favorites.empty":"No favorites yet","favorites.emptyHint":"Your favorite products will be stored here. Add the ones you like.","favorites.browse":"Browse products","favorites.count":"{count} items","favorites.unavailable":"Favorites could not be loaded","reviews.none":"No reviews yet","notifications.title":"Notifications","notifications.alerts":"Alerts","notifications.none":"No notifications yet","common.tryAgain":"Try again","common.serverFailed":"Server connection failed","common.total":"Total","checkout.title":"Checkout","orders.refresh":"Refresh","reviews.my":"My reviews","reviews.write":"Write review","reviews.submit":"Submit review","hero.eyebrow":"Best daily offers","hero.title":"Korean beauty products","hero.subtitle":"Fast delivery across Uzbekistan — cosmetics, skincare, fragrance and accessories.","hero.viewProducts":"View products","hero.fastDelivery":"Fast delivery","hero.fastDeliverySub":"Across Uzbekistan","home.history":"History","home.recentlyViewed":"Recently viewed","profile.myProfile":"My Profile","profile.edit":"Edit profile","profile.save":"Save","profile.myOrders":"My orders","profile.myReviews":"My reviews","profile.tierWhite":"White","profile.ordersStat":"Orders","profile.reviewsStat":"Reviews","profile.couponsStat":"Coupons","profile.feedbackStat":"Feedback","profile.seeAll":"See all","profile.promotions":"Promotions & coupons","profile.help":"Help & support","profile.news":"News","profile.language":"Language / Til / Language","profile.privacy":"Privacy policy","profile.terms":"Terms of use","profile.licenses":"Open source licenses","profile.settings":"Settings","profile.menu":"Menu","profile.logout":"Log out","profile.loggedOut":"Logged out","profile.comingSoon":"This section is coming soon","profile.helpMessage":"Support: support@beautyskin.uz","profile.fullName":"Full name","profile.phone":"Phone","profile.imageUrl":"Profile image URL","profile.loadUserFailed":"Could not load profile","profile.loadOrdersFailed":"Could not load orders","profile.loadReviewsFailed":"Could not load reviews","profile.loadFailed":"Could not load profile data","support.title":"Support service","support.intro":"Have questions? We are here to help.","support.faqTitle":"Frequently asked questions","support.faq.delivery.q":"When will my order arrive?","support.faq.delivery.a":"Orders are usually delivered within 3–5 business days. Delivery time depends on your region and the chosen courier service. Unless there are natural disasters or other unforeseen circumstances, your order will arrive within the estimated time.","support.faq.cancel.q":"How do I cancel an order?","support.faq.cancel.a":"An order can only be canceled before it is shipped. Once the order has been handed over to the courier service, it can no longer be canceled. To cancel, you can reach out via the profile section or customer support.","support.faq.return.q":"Can I return a product?","support.faq.return.a":"A product can only be returned if it is unused, the packaging is intact, and the item is kept in full condition. Shipping costs for returning the product via cargo are covered by the customer.","support.originalTitle":"100% original and direct supply from Korea","support.originalText":"Products in our app are imported directly from official manufacturers and certified distributors in South Korea. Selling counterfeit goods is strictly prohibited.","support.whyTitle":"Why us?","support.why1":"Direct import from Korea","support.why2":"No counterfeits","support.why3":"Factory packaging and original seals","support.why4":"Every order is checked before shipping","support.why5":"Chosen by thousands of happy customers","support.guarantee":"If the product is not original — we refund 100% of the cost.","support.contactTitle":"Contact us","support.phoneLabel":"Phone:","support.hoursLabel":"Working hours:","support.hoursValue":"09:00 – 18:00 (Mon–Fri)","support.contactNote":"We value your messages and will try to respond as quickly as possible.","privacy.title":"Privacy Policy","privacy.updated":"Last updated: 2025","privacy.intro":"We respect and protect users' personal data. This Privacy Policy explains how your data is collected, used, and stored.","privacy.s1title":"1. What data is collected","privacy.s1a":"Name and profile details","privacy.s1b":"Phone number or email","privacy.s1c":"Order and cart data","privacy.s1d":"Technical device information","privacy.s2title":"2. Use of data","privacy.s2intro":"The collected data is used for the following purposes:","privacy.s2a":"Fulfilling orders","privacy.s2b":"Account management","privacy.s2c":"Improving service quality","privacy.s2d":"Ensuring security","privacy.s3title":"3. Data protection","privacy.s3text":"We apply modern security measures to protect your personal data from unauthorized access, alteration, or distribution.","privacy.s4title":"4. Third-party services","privacy.s4text":"Our app may use third-party services for payment, delivery, and authentication. These services have their own privacy policies.","privacy.s5title":"5. Contact","privacy.s5text":"If you have questions about the Privacy Policy, contact us:","terms.title":"Terms of Service","terms.updated":"Last updated: 2025","terms.intro":"By using this mobile application, you agree to the terms of this Terms of Service. If you do not agree with the terms, please do not use the application.","terms.s1title":"1. General provisions","terms.s1text":"This application is intended for online purchase of cosmetics and other products. All materials, logos, and content are protected by copyright.","terms.s2title":"2. Account registration","terms.s2text":"To place orders, the user must create an account and provide accurate information. The user is responsible for the security of their account.","terms.s3title":"3. Orders and payment","terms.s3text":"Orders are placed through the application. Product prices may change without prior notice. Payment is made according to the selected method.","terms.s4title":"4. Delivery","terms.s4text":"Delivery times depend on the region and the selected method. We are not responsible for delays caused by third-party delivery services.","terms.s5title":"5. Returns and cancellation","terms.s5text":"The return and order cancellation policy is described in the relevant section and on the help and support page.","terms.s6title":"6. Limitation of liability","terms.s6text":"We are not liable for indirect damages related to the use of the application.","terms.s7title":"7. Changes to terms","terms.s7text":"We reserve the right to change this agreement at any time. The current version is always available in the application.","licenses.title":"Open Source Libraries & Technologies","licenses.intro":"This application is built using the following open-source technologies","licenses.frontendTitle":"Android Frontend","licenses.fe1":"Android Jetpack – a set of modern Android libraries used for lifecycle management, navigation, ViewBinding, and architectural components to ensure a stable user interface.","licenses.fe2":"Retrofit – a type-safe HTTP client for Android used for efficient interaction with the backend REST API.","licenses.fe3":"Glide – an image loading and caching library optimized for smooth scrolling and efficient memory usage.","licenses.fe4":"Firebase Authentication – provides secure user authentication via Google and phone number verification (OTP).","licenses.fe5":"Facebook Shimmer – displays animated loading placeholders to improve the user experience.","licenses.backendTitle":"Backend & Server Technologies","licenses.be1":"Spring Boot – a Java-based framework used to build scalable RESTful APIs.","licenses.be2":"Spring Security + JWT – implements authentication using JSON Web Tokens to protect user sessions and API endpoints.","licenses.be3":"Spring Data JPA – simplifies database access using ORM and the repository pattern.","licenses.be4":"MySQL – a reliable relational database management system for storing accounts, orders, and products.","licenses.be5":"Eskiz SMS API – used for phone number verification and delivery of one-time passwords (OTP).","licenses.infraTitle":"Infrastructure & Deployment","licenses.inf1":"Docker – containerization technology for packaging the application with all dependencies for stable deployment.","licenses.inf2":"Railway Cloud – a cloud platform for deploying, scaling, and monitoring backend services.","licenses.securityTitle":"Security & Data Protection","licenses.sec1":"HTTPS – all network communication is encrypted using HTTPS to protect user data.","licenses.sec2":"Secure password handling – user credentials are never stored in plain text.","licenses.sec3":"Token-based authorization – all protected requests require valid JWT tokens.","licenses.footer":"We respect the open-source community and strictly comply with all license requirements and security best practices.","status.PENDING":"Pending","api.title":"API settings","api.save":"Save","header.currency":"Currency","header.theme":"Theme","product.quickView":"Quick view","product.compare":"Compare","product.compareSoon":"Compare coming soon","product.lowStock":"Low stock","product.freeShipping":"Free shipping","search.results":"Results","search.noResults":"No results found","search.recent":"Recent searches","search.trending":"Trending","search.clear":"Clear","search.aiHint":"AI search — find products faster","search.voice":"Voice search","search.image":"Image search","search.imagePlaceholder":"Image selected — search coming soon","search.popularSearches":"Popular searches","trust.secure":"Secure payment","trust.authentic":"100% authentic","trust.delivery":"Fast delivery","trust.verified":"Verified sellers","filter.title":"Filters","filter.clearAll":"Clear all","filter.brand":"Brand","filter.price":"Price","filter.discount":"Discount","filter.color":"Color","filter.size":"Size","filter.rating":"Rating","filter.availability":"Availability","filter.fastDelivery":"Fast delivery","filter.origin":"Country of origin","filter.seller":"Seller","filter.onSaleOnly":"On sale only","filter.inStock":"In stock","filter.apply":"Apply filters","filter.noOptions":"No options","sort.title":"Sort","sort.popular":"Popular","sort.priceAsc":"Price: Low to High","sort.priceDesc":"Price: High to Low","sort.rating":"Top rated","sort.newest":"Newest","sort.discount":"Best discount","compare.title":"Compare","compare.empty":"Compare list is empty","compare.added":"Added to compare","compare.removed":"Removed from compare","compare.full":"Maximum {max} products","compare.viewAll":"View comparison","compare.clearAll":"Clear all","compare.price":"Price","compare.brand":"Brand","compare.rating":"Rating","compare.stock":"Stock","compare.discount":"Discount","product.authentic":"Authentic product","product.officialStore":"Official store","product.fullscreen":"Fullscreen","product.video360Placeholder":"Video & 360° coming soon","product.listPrice":"List price","product.discount":"Discount","product.installmentPlaceholder":"Installments coming soon","product.estimatedDelivery":"Estimated delivery","product.frequentlyBought":"Frequently bought together","cart.saveForLater":"Save for later","cart.couponPlaceholder":"Coupon code","cart.applyCoupon":"Apply","cart.couponApplied":"Coupon applied","cart.couponInvalid":"Invalid coupon","cart.freeShippingUnlocked":"Free shipping unlocked!","cart.freeShippingRemaining":"Add {amount} more for free shipping","cart.restored":"Item restored","cart.moveToCart":"Move to cart","checkout.stepShipping":"Shipping","checkout.stepAddress":"Address","checkout.stepPayment":"Payment","checkout.stepReview":"Review","checkout.back":"Back","checkout.continue":"Continue","checkout.placing":"Placing order...","checkout.paymentPlaceholder":"Secure payment (COD / card coming soon)","checkout.receiverRequired":"Please select a receiver","checkout.addressRequired":"Please select an address","checkout.deliveryTitle":"Delivery","checkout.deliveryEta":"Order will be delivered within 3–5 business days","checkout.addressNotSelected":"Address not selected","checkout.selectAddress":"Select address","checkout.receiverNotSelected":"Recipient not selected","checkout.paymentMethod":"Payment method","checkout.paymentCod":"Payment on receipt","checkout.paymentCodHint":"Payment is made only in cash or by bank card transfer","checkout.deliveryInfo":"The order will be delivered by courier to your address. Please stay in touch during delivery.","checkout.couponTitle":"Discount coupon","checkout.applyCoupon":"Apply coupon","checkout.yourOrder":"Your order","checkout.deliveryFee":"Delivery","checkout.totalToPay":"Total to pay","checkout.confirm":"Confirm","checkout.legalNotice":"By confirming the order, you agree to the Terms of Use and Privacy Policy.","checkout.deliveryOn":"Delivery {dates}","checkout.itemsCount":"{count} items","checkout.orderSummary":"Order summary","checkout.placeOrder":"Place order","checkout.orderCreated":"Order created","checkout.continueShopping":"Continue shopping","checkout.viewOrders":"View orders","checkout.receiver":"Recipient","checkout.confirmTitle":"Order confirmation","checkout.confirmQuestion":"Do you want to send the order?","checkout.confirmName":"Name: {name}","checkout.confirmAddress":"Address: {address}","checkout.confirmDisclaimer":"After confirmation, the order can only be changed through customer support.","checkout.cancel":"Cancel","checkout.successTitle":"Order placed successfully!","checkout.successSubtitle":"Order successfully accepted","checkout.orderFailed":"Order could not be sent. Please try again.","checkout.noItems":"No selected items in cart.","checkout.invalidItems":"Cart item identifiers are invalid.","reviews.verified":"Verified purchase","reviews.helpful":"Helpful","reviews.search":"Search reviews","reviews.sortNewest":"Newest","reviews.sortRatingHigh":"Highest rating","reviews.sortRatingLow":"Lowest rating","reviews.sortHelpful":"Most helpful","reviews.allRatings":"All ratings","brand.official":"Official brand","brand.story":"Korean beauty brand","brand.popular":"Popular products","home.trendingNow":"Trending now","home.recommendedForYou":"Recommended for you","home.continueShopping":"Continue shopping","home.becauseYouViewed":"Because you viewed","footer.tagline":"Korean beauty marketplace","assistant.title":"Shopping assistant","assistant.subtitle":"Personalized product recommendations","assistant.fabLabel":"AI Assistant","assistant.placeholder":"e.g. recommend a cream for dry skin...","assistant.send":"Send","assistant.composerHint":"Enter to send · Shift+Enter for a new line","assistant.newChat":"New chat","assistant.newChatStarted":"New conversation started","assistant.openFull":"Open full page","assistant.close":"Close","assistant.emptyTitle":"Ask anything","assistant.emptyHint":"Get help choosing products, comparing options, or solving skin concerns.","assistant.thinking":"Assistant is typing...","assistant.loadingHistory":"Loading conversation...","assistant.retry":"Retry","assistant.sources":"Sources","assistant.viewProduct":"View product","assistant.addToCart":"Add to cart","assistant.inStock":"In stock","assistant.errorNetwork":"Network error. Check your connection and try again.","assistant.errorTimeout":"The request timed out. Please try again.","assistant.error400":"Invalid request. Try rephrasing your message.","assistant.error401":"Session expired. Sign in again or continue as guest.","assistant.error429":"Too many requests. Please wait and try again.","assistant.error500":"Server error. Please try again later.","assistant.error503":"Service temporarily unavailable. Please try again.","assistant.errorGeneric":"Could not get a response. Please try again."},vs={...ya,"header.location":"📍 Ташкент","header.pickupPoints":"Пункты выдачи","header.sell":"Стать продавцом","header.support":"Поддержка","header.orders":"Заказы","header.language":"Язык","header.catalog":"Каталог","header.searchPlaceholder":"Искать товары и категории","auth.login":"Войти","auth.register":"Регистрация","auth.continueWithGoogle":"Войти через Google","auth.or":"или","auth.email":"Email","auth.password":"Пароль","auth.confirmPassword":"Подтвердите пароль","auth.fullName":"Полное имя","auth.phone":"Телефон","auth.logout":"Выйти","auth.loginRequired":"Войдите, чтобы продолжить","auth.emailRequired":"Email обязателен.","auth.passwordMin":"Пароль должен быть не менее 6 символов.","auth.fullNameRequired":"Полное имя обязательно.","auth.phoneRequired":"Телефон обязателен.","auth.passwordMismatch":"Пароли не совпадают.","home.all":"Все","home.categories":"Категории","home.quickCategories":"Быстрые категории","home.lowPriceGuarantee":"Гарантия низких цен","home.seeAll":"Все","home.todayDeals":"Предложения дня","home.discounts":"Скидки","home.newArrivals":"Новинки","home.popular":"Популярные товары","home.recommended":"Рекомендуем вам","home.similar":"Похожие товары","home.others":"Также смотрели","home.startShopping":"Начать покупки","home.loadMore":"Загрузить еще","product.addToCart":"В корзину","product.addToCartFull":"В корзину","product.sold":"Продано: {count}","product.save":"Сохранить","product.saved":"Сохранено","product.description":"Описание","product.detailImages":"Детальные изображения","product.details":"Детали","product.reviews":"Отзывы","product.delivery":"Доставка по Узбекистану","product.secure":"Безопасная оплата","product.original":"Оригинальная корейская косметика","cart.title":"Корзина","cart.empty":"Корзина пуста","cart.checkout":"Оформить","cart.subtotal":"Итого","cart.remove":"Удалить","cart.deliveryCourier":"Доставка курьером","cart.deliveryEta":"Доставим за 3 дня","cart.selectAll":"Выбрать все ({selected}/{total})","cart.selectItem":"Выбрать товар","cart.deleteSelected":"Удалить","cart.yourOrder":"Ваш заказ","cart.goodsCount":"{count} товаров","cart.discount":"Скидка","cart.deliveryCost":"Стоимость доставки","cart.freeDelivery":"Бесплатно","cart.products":"Товар","cart.freeToHome":"Бесплатно до дома","cart.shipsToday":"Отправка сегодня","cart.emptyHint":"Добавьте понравившиеся товары — они появятся здесь.","cart.freeShippingUnlocked":"Бесплатная доставка!","cart.freeShippingRemaining":"Добавьте ещё {amount} для бесплатной доставки","cart.couponPlaceholder":"Промокод","cart.applyCoupon":"Применить","cart.savedForLater":"Сохранённые","cart.moveToCart":"В корзину","orders.title":"История заказов","orders.order":"Заказ","orders.details":"Детали заказа","orders.history":"История статуса","orders.none":"Заказов пока нет","orders.viewDetails":"Подробнее","orders.items":"{count} товаров","orders.itemsCount":"{count} товаров","orders.totalLabel":"Итого:","orders.addressLabel":"Адрес:","orders.products":"Товары","orders.emptyHint":"Здесь появятся ваши покупки.","orders.unavailable":"Не удалось загрузить заказы","orders.detailUnavailable":"Не удалось загрузить детали заказа","orders.noItems":"Товары не найдены.","orders.deliveryInfo":"Информация о доставке","orders.openOnMap":"Открыть на карте","orders.orderActions":"Действия с заказом","orders.goodsLabel":"Товары","orders.totalAmount":"Итого сумма","orders.feedback":"Обратная связь","orders.statusMessage.NEW":"Заказ принят и скоро будет подтвержден.","orders.statusMessage.CONFIRMED":"Заказ подтвержден и готовится.","orders.statusMessage.PACKED":"Заказ упакован и скоро будет отправлен.","orders.statusMessage.SHIPPED":"Заказ в пути. Пожалуйста, будьте на связи.","orders.statusMessage.DELIVERED":"Заказ доставлен. Спасибо за покупку!","orders.statusMessage.CANCELED":"Заказ отменен.","orders.statusMessage.default":"Статус заказа обновляется.","favorites.title":"Избранное","favorites.empty":"В избранном пока пусто","favorites.emptyHint":"Ваши любимые товары будут храниться здесь. Добавляйте то, что вам нравится.","favorites.browse":"К товарам","favorites.count":"{count} товаров","favorites.unavailable":"Не удалось загрузить избранное","reviews.none":"Пока нет отзывов","notifications.title":"Уведомления","profile.myProfile":"Мой профиль","profile.edit":"Редактировать профиль","profile.save":"Сохранить","profile.myOrders":"Мои заказы","profile.myReviews":"Мои отзывы","profile.tierWhite":"White","profile.ordersStat":"Заказы","profile.reviewsStat":"Отзывы","profile.couponsStat":"Купон","profile.feedbackStat":"Обратная связь","profile.seeAll":"Посмотреть все","profile.promotions":"Акции и купоны","profile.help":"Помощь и поддержка","profile.news":"Новости","profile.language":"Язык / Til / Language","profile.privacy":"Политика конфиденциальности","profile.terms":"Условия использования","profile.licenses":"Лицензии открытого ПО","profile.settings":"Настройки","profile.menu":"Меню","profile.logout":"Выйти","profile.loggedOut":"Вы вышли из аккаунта","profile.comingSoon":"Раздел скоро появится","profile.helpMessage":"Поддержка: support@beautyskin.uz","profile.fullName":"Полное имя","profile.phone":"Телефон","profile.imageUrl":"URL фото профиля","profile.loadUserFailed":"Не удалось загрузить профиль","profile.loadOrdersFailed":"Не удалось загрузить заказы","profile.loadReviewsFailed":"Не удалось загрузить отзывы","profile.loadFailed":"Не удалось загрузить данные профиля","support.title":"Служба поддержки","support.intro":"У вас есть вопросы? Мы вам поможем.","support.faqTitle":"Часто задаваемые вопросы","support.faq.delivery.q":"Когда придет мой заказ?","support.faq.delivery.a":"Заказы обычно доставляются в течение 3–5 рабочих дней. Срок доставки зависит от региона и выбранной курьерской службы. При отсутствии стихийных бедствий или других непредвиденных обстоятельств ваш заказ прибудет в установленный срок.","support.faq.cancel.q":"Как отменить заказ?","support.faq.cancel.a":"Заказ можно отменить только до момента отправки. После передачи заказа курьерской службе его отмена невозможна. Для отмены вы можете обратиться в раздел профиля или в службу поддержки.","support.faq.return.q":"Можно ли вернуть товар?","support.faq.return.a":"Возврат товара возможен только в том случае, если он не был в использовании, упаковка не повреждена и товар сохранён в полном виде. Расходы на отправку товара через карго при возврате возлагаются на клиента.","support.originalTitle":"100% оригинал и прямые поставки из Кореи","support.originalText":"Товары в нашем приложении импортируются напрямую от официальных производителей и сертифицированных дистрибьюторов в Южной Корее. Продажа подделок строго запрещена.","support.whyTitle":"Почему мы?","support.why1":"Прямой импорт из Кореи","support.why2":"Никаких подделок","support.why3":"Заводская упаковка и оригинальные пломбы","support.why4":"Каждый заказ проверяется перед отправкой","support.why5":"Выбор тысяч довольных клиентов","support.guarantee":"Если товар не оригинальный — мы вернём 100% стоимости.","support.contactTitle":"Свяжитесь с нами","support.phoneLabel":"Телефон:","support.hoursLabel":"Время работы:","support.hoursValue":"09:00 – 18:00 (Пн–Пт)","support.contactNote":"Мы ценим ваши обращения и постараемся ответить как можно быстрее.","privacy.title":"Политика конфиденциальности","privacy.updated":"Последнее обновление: 2025 г.","privacy.intro":"Мы уважаем и защищаем личные данные пользователей. Данная Политика конфиденциальности объясняет, как ваши данные собираются, используются и хранятся.","privacy.s1title":"1. Какие данные собираются","privacy.s1a":"Имя и данные профиля","privacy.s1b":"Номер телефона или email","privacy.s1c":"Данные о заказах и корзине","privacy.s1d":"Техническая информация об устройстве","privacy.s2title":"2. Использование данных","privacy.s2intro":"Собранные данные используются для следующих целей:","privacy.s2a":"Выполнение заказов","privacy.s2b":"Управление аккаунтом","privacy.s2c":"Улучшение качества сервиса","privacy.s2d":"Обеспечение безопасности","privacy.s3title":"3. Защита данных","privacy.s3text":"Мы применяем современные меры безопасности для защиты ваших личных данных от несанкционированного доступа, изменения или распространения.","privacy.s4title":"4. Сторонние сервисы","privacy.s4text":"Наше приложение может использовать сторонние сервисы для оплаты, доставки и аутентификации. У этих сервисов есть своя политика конфиденциальности.","privacy.s5title":"5. Контакты","privacy.s5text":"Если у вас есть вопросы по Политике конфиденциальности, свяжитесь с нами:","terms.title":"Пользовательское соглашение","terms.updated":"Последнее обновление: 2025 г.","terms.intro":"Используя данное мобильное приложение, вы соглашаетесь с условиями настоящего Пользовательского соглашения. Если вы не согласны с условиями, пожалуйста, не используйте приложение.","terms.s1title":"1. Общие положения","terms.s1text":"Данное приложение предназначено для онлайн-покупки косметических и других товаров. Все материалы, логотипы и контент защищены авторским правом.","terms.s2title":"2. Регистрация аккаунта","terms.s2text":"Для оформления заказов пользователь должен создать аккаунт и предоставить достоверные данные. Пользователь несет ответственность за безопасность своего аккаунта.","terms.s3title":"3. Заказы и оплата","terms.s3text":"Заказы оформляются через приложение. Цены на товары могут изменяться без предварительного уведомления. Оплата производится согласно выбранному способу.","terms.s4title":"4. Доставка","terms.s4text":"Сроки доставки зависят от региона и выбранного метода. Мы не несем ответственности за задержки, вызванные сторонними доставочными сервисами.","terms.s5title":"5. Возврат и отмена","terms.s5text":"Политика возврата и отмены заказов описана в соответствующем разделе и на странице помощи и поддержки.","terms.s6title":"6. Ограничение ответственности","terms.s6text":"Мы не несем ответственности за косвенный ущерб, связанный с использованием приложения.","terms.s7title":"7. Изменения условий","terms.s7text":"Мы оставляем за собой право изменять данное соглашение в любое время. Актуальная версия всегда доступна в приложении.","licenses.title":"Open Source Libraries & Technologies","licenses.intro":"This application is built using the following open-source technologies","licenses.frontendTitle":"Android Frontend","licenses.fe1":"Android Jetpack – набор современных библиотек Android, используемых для управления жизненным циклом, навигации, ViewBinding и архитектурных компонентов для обеспечения стабильного пользовательского интерфейса.","licenses.fe2":"Retrofit – типобезопасный HTTP-клиент для Android, используемый для эффективного взаимодействия с REST API бэкенда.","licenses.fe3":"Glide – библиотека для загрузки и кэширования изображений, оптимизированная для плавной прокрутки и эффективного использования памяти.","licenses.fe4":"Firebase Authentication – обеспечивает безопасную аутентификацию пользователей через Google и проверку номера телефона (OTP).","licenses.fe5":"Facebook Shimmer – отображает анимированные заглушки загрузки для улучшения пользовательского опыта.","licenses.backendTitle":"Backend & Server Technologies","licenses.be1":"Spring Boot – фреймворк на базе Java, используемый для создания масштабируемых RESTful API.","licenses.be2":"Spring Security + JWT – реализует аутентификацию с использованием JSON Web Tokens для защиты пользовательских сессий и эндпоинтов API.","licenses.be3":"Spring Data JPA – упрощает доступ к базе данных с использованием ORM и паттерна репозитория.","licenses.be4":"MySQL – надёжная система управления реляционными базами данных для хранения учётных записей, заказов и товаров.","licenses.be5":"Eskiz SMS API – используется для верификации номера телефона и доставки одноразовых паролей (OTP).","licenses.infraTitle":"Infrastructure & Deployment","licenses.inf1":"Docker – технология контейнеризации для упаковки приложения со всеми зависимостями для стабильного развёртывания.","licenses.inf2":"Railway Cloud – облачная платформа для развёртывания, масштабирования и мониторинга бэкенд-сервисов.","licenses.securityTitle":"Security & Data Protection","licenses.sec1":"HTTPS – вся сетевая коммуникация зашифрована с использованием HTTPS для защиты данных пользователей.","licenses.sec2":"Безопасная обработка паролей – учётные данные пользователей никогда не хранятся в открытом виде.","licenses.sec3":"Авторизация на основе токенов – все защищённые запросы требуют валидных JWT токенов.","licenses.footer":"Мы уважаем сообщество open-source и строго соблюдаем все лицензионные требования и передовые практики безопасности.","status.NEW":"Новый","status.PENDING":"Ожидает","status.CONFIRMED":"Подтвержден","status.PACKED":"Упакован","status.SHIPPED":"Отправлен","status.DELIVERED":"Доставлен","status.CANCELED":"Отменен","category.SKINCARE":"Уход за кожей","category.MAKEUP":"Макияж","category.COLLAGEN":"Коллаген","category.HAIR_CARE":"Уход за волосами","category.FRAGRANCE":"Парфюм","category.TOP":"Верх","category.OUTER":"Верхняя одежда","category.PANTS":"Брюки","category.SHOES":"Обувь","category.BAG":"Сумки","category.ACCESSORY":"Аксессуары","home.todayOnly":"Только сегодня","checkout.title":"Оформление заказа","checkout.deliveryTitle":"Доставка","checkout.deliveryEta":"Заказ будет доставлен в течение 3–5 рабочих дней","checkout.addressNotSelected":"Адрес не выбран","checkout.selectAddress":"Выбрать адрес","checkout.receiverNotSelected":"Получатель не выбран","checkout.receiver":"Получатель","checkout.paymentMethod":"Способ оплаты","checkout.paymentCod":"Оплата при получении","checkout.paymentCodHint":"Оплата производится только наличными или переводом на банковскую карту","checkout.deliveryInfo":"Заказ будет доставлен курьером по адресу. Просим вас быть на связи во время доставки.","checkout.couponTitle":"Купон на скидку","checkout.applyCoupon":"Применить купон","checkout.yourOrder":"Ваш заказ","checkout.deliveryFee":"Доставка","checkout.totalToPay":"Итого к оплате","checkout.confirm":"Подтвердить","checkout.legalNotice":"Подтверждая заказ, вы соглашаетесь с Условиями использования и Политикой конфиденциальности.","checkout.deliveryOn":"Доставка {dates}","checkout.itemsCount":"{count} товаров","checkout.addressRequired":"Выберите адрес","checkout.receiverRequired":"Выберите получателя","checkout.back":"Назад","checkout.placing":"Оформление...","checkout.orderCreated":"Заказ создан","checkout.continueShopping":"Продолжить покупки","checkout.viewOrders":"Мои заказы","checkout.confirmTitle":"Подтверждение заказа","checkout.confirmQuestion":"Вы хотите отправить заказ?","checkout.confirmName":"Имя: {name}","checkout.confirmAddress":"Адреса: {address}","checkout.confirmDisclaimer":"После подтверждения изменить заказ можно только через службу поддержки.","checkout.cancel":"Отмена","checkout.successTitle":"Заказ успешно оформлен!","checkout.successSubtitle":"Заказ успешно принят","checkout.orderFailed":"Не удалось отправить заказ. Попробуйте снова.","checkout.noItems":"В корзине нет выбранных товаров.","checkout.invalidItems":"Некорректные идентификаторы товаров в корзине.","orders.refresh":"Обновить","reviews.my":"Мои отзывы","reviews.write":"Написать отзыв","reviews.submit":"Отправить отзыв","hero.eyebrow":"Лучшие предложения дня","hero.title":"Корейская косметика","hero.subtitle":"Быстрая доставка по Узбекистану — косметика, уход, парфюм и аксессуары.","hero.viewProducts":"Смотреть товары","hero.fastDelivery":"Быстрая доставка","hero.fastDeliverySub":"По всему Узбекистану","home.history":"История","home.recentlyViewed":"Недавно просмотренные","api.title":"Настройки API","api.save":"Сохранить","footer.tagline":"Маркетплейс корейской красоты","assistant.title":"Помощник по покупкам","assistant.subtitle":"Персональные рекомендации товаров","assistant.fabLabel":"AI-помощник","assistant.placeholder":"Например: посоветуй крем для сухой кожи...","assistant.send":"Отправить","assistant.composerHint":"Enter — отправить · Shift+Enter — новая строка","assistant.newChat":"Новый чат","assistant.newChatStarted":"Новый диалог начат","assistant.openFull":"Открыть полностью","assistant.close":"Закрыть","assistant.emptyTitle":"Задайте вопрос","assistant.emptyHint":"Поможем выбрать товары, сравнить варианты или решить вопросы по уходу за кожей.","assistant.thinking":"Помощник печатает...","assistant.loadingHistory":"Загрузка диалога...","assistant.retry":"Повторить","assistant.sources":"Источники","assistant.viewProduct":"Смотреть","assistant.addToCart":"В корзину","assistant.inStock":"В наличии","assistant.errorNetwork":"Ошибка сети. Проверьте подключение и попробуйте снова.","assistant.errorTimeout":"Время ожидания истекло. Попробуйте снова.","assistant.error400":"Некорректный запрос. Переформулируйте сообщение.","assistant.error401":"Сессия истекла. Войдите снова или продолжите как гость.","assistant.error429":"Слишком много запросов. Подождите и попробуйте снова.","assistant.error500":"Ошибка сервера. Попробуйте позже.","assistant.error503":"Сервис временно недоступен. Попробуйте снова.","assistant.errorGeneric":"Не удалось получить ответ. Попробуйте снова."},ys={...ya,"header.location":"📍 타슈켄트","header.pickupPoints":"픽업 지점","header.sell":"판매자 되기","header.support":"고객 지원","header.orders":"주문","header.language":"언어","header.catalog":"카탈로그","header.searchPlaceholder":"상품 및 카테고리 검색","auth.login":"로그인","auth.register":"회원가입","auth.continueWithGoogle":"Google로 로그인","auth.or":"또는","auth.email":"이메일","auth.password":"비밀번호","auth.confirmPassword":"비밀번호 확인","auth.fullName":"이름","auth.phone":"전화번호","auth.logout":"로그아웃","auth.loginRequired":"계속하려면 로그인하세요","auth.emailRequired":"이메일은 필수입니다.","auth.passwordMin":"비밀번호는 6자 이상이어야 합니다.","auth.fullNameRequired":"이름은 필수입니다.","auth.phoneRequired":"전화번호는 필수입니다.","auth.passwordMismatch":"비밀번호가 일치하지 않습니다.","home.all":"전체","home.categories":"카테고리","home.quickCategories":"빠른 카테고리","home.lowPriceGuarantee":"최저가 보장","home.seeAll":"전체","home.quickCategories":"빠른 카테고리","home.todayDeals":"오늘의 특가","home.discounts":"할인","home.newArrivals":"신상품","home.popular":"인기 상품","home.recommended":"추천 상품","home.similar":"비슷한 상품","home.others":"함께 본 상품","home.startShopping":"쇼핑 시작","home.loadMore":"더 보기","product.addToCart":"장바구니","product.addToCartFull":"장바구니 담기","product.sold":"{count}개 판매","product.save":"저장","product.saved":"저장됨","product.description":"설명","product.detailImages":"상세 이미지","product.details":"상세 정보","product.reviews":"리뷰","product.delivery":"우즈베키스탄 전역 배송","product.secure":"안전한 결제","product.original":"정품 한국 제품","cart.title":"장바구니","cart.empty":"장바구니가 비어 있습니다","cart.checkout":"결제","cart.deliveryCourier":"택배 배송","cart.deliveryEta":"3일 내 배송","cart.selectAll":"전체 선택 ({selected}/{total})","cart.selectItem":"상품 선택","cart.deleteSelected":"삭제","cart.yourOrder":"주문 내역","cart.goodsCount":"상품 {count}개","cart.discount":"할인","cart.deliveryCost":"배송비","cart.freeDelivery":"무료","cart.products":"상품","cart.freeToHome":"무료 홈 배송","cart.shipsToday":"오늘 발송","cart.emptyHint":"마음에 드는 상품을 추가하면 여기에 표시됩니다.","orders.title":"주문 내역","orders.order":"주문","orders.details":"주문 상세","orders.history":"상태 기록","orders.none":"주문이 없습니다","orders.viewDetails":"자세히","orders.items":"상품 {count}개","orders.itemsCount":"상품 {count}개","orders.totalLabel":"합계:","orders.addressLabel":"주소:","orders.products":"상품","orders.emptyHint":"구매한 주문이 여기에 표시됩니다.","orders.unavailable":"주문을 불러올 수 없습니다","orders.detailUnavailable":"주문 상세를 불러올 수 없습니다","orders.noItems":"상품을 찾을 수 없습니다.","orders.deliveryInfo":"배송 정보","orders.openOnMap":"지도에서 열기","orders.orderActions":"주문 작업","orders.goodsLabel":"상품","orders.totalAmount":"총 금액","orders.feedback":"피드백","orders.statusMessage.NEW":"주문이 접수되었으며 곧 확인됩니다.","orders.statusMessage.CONFIRMED":"주문이 확인되어 준비 중입니다.","orders.statusMessage.PACKED":"주문이 포장되어 곧 발송됩니다.","orders.statusMessage.SHIPPED":"주문이 배송 중입니다. 연락 가능하도록 해 주세요.","orders.statusMessage.DELIVERED":"주문이 배송되었습니다. 구매해 주셔서 감사합니다!","orders.statusMessage.CANCELED":"주문이 취소되었습니다.","orders.statusMessage.default":"주문 상태가 업데이트되고 있습니다.","favorites.title":"찜","favorites.empty":"찜한 상품이 없습니다","favorites.emptyHint":"좋아하는 상품이 여기에 저장됩니다. 마음에 드는 상품을 추가하세요.","favorites.browse":"상품 보기","favorites.count":"상품 {count}개","favorites.unavailable":"찜 목록을 불러올 수 없습니다","reviews.none":"아직 리뷰가 없습니다","notifications.title":"알림","status.NEW":"신규","status.CONFIRMED":"확인됨","status.PACKED":"포장됨","status.SHIPPED":"배송 중","status.DELIVERED":"배송 완료","status.CANCELED":"취소됨","category.SKINCARE":"스킨케어","category.MAKEUP":"메이크업","category.COLLAGEN":"콜라겐","category.HAIR_CARE":"헤어 케어","category.FRAGRANCE":"향수","category.TOP":"상의","category.OUTER":"아우터","category.PANTS":"바지","category.SHOES":"신발","category.BAG":"가방","category.ACCESSORY":"액세서리","home.todayOnly":"오늘 한정","checkout.title":"주문하기","checkout.deliveryTitle":"배송","checkout.deliveryEta":"주문은 3–5 영업일 내에 배송됩니다","checkout.addressNotSelected":"주소가 선택되지 않음","checkout.selectAddress":"주소 선택","checkout.receiverNotSelected":"수령인이 선택되지 않음","checkout.receiver":"수령인","checkout.paymentMethod":"결제 방법","checkout.paymentCod":"착불 결제","checkout.paymentCodHint":"현금 또는 계좌 이체로만 결제할 수 있습니다","checkout.deliveryInfo":"주문은 주소로 택배 배송됩니다. 배송 중 연락 가능하도록 해 주세요.","checkout.couponTitle":"할인 쿠폰","checkout.applyCoupon":"쿠폰 적용","checkout.yourOrder":"주문 내역","checkout.deliveryFee":"배송비","checkout.totalToPay":"결제 금액","checkout.confirm":"확인","checkout.legalNotice":"주문을 확인하면 이용 약관 및 개인정보 처리방침에 동의하게 됩니다.","checkout.deliveryOn":"배송 {dates}","checkout.itemsCount":"상품 {count}개","checkout.addressRequired":"주소를 선택해 주세요","checkout.receiverRequired":"수령인을 선택해 주세요","checkout.back":"뒤로","checkout.placing":"주문 중...","checkout.orderCreated":"주문이 완료되었습니다","checkout.continueShopping":"쇼핑 계속하기","checkout.viewOrders":"주문 내역 보기","checkout.confirmTitle":"주문 확인","checkout.confirmQuestion":"주문을 보내시겠습니까?","checkout.confirmName":"이름: {name}","checkout.confirmAddress":"주소: {address}","checkout.confirmDisclaimer":"확인 후에는 고객 지원을 통해서만 주문을 변경할 수 있습니다.","checkout.cancel":"취소","checkout.successTitle":"주문이 완료되었습니다!","checkout.successSubtitle":"주문이 성공적으로 접수되었습니다","checkout.orderFailed":"주문을 보낼 수 없습니다. 다시 시도해 주세요.","checkout.noItems":"장바구니에 선택된 상품이 없습니다.","checkout.invalidItems":"장바구니 상품 ID가 올바르지 않습니다.","orders.refresh":"새로고침","reviews.my":"내 리뷰","reviews.write":"리뷰 작성","reviews.submit":"리뷰 제출","hero.eyebrow":"오늘의 베스트 특가","hero.title":"한국 뷰티 제품","hero.subtitle":"우즈베키스탄 전역 빠른 배송 — 화장품, 스킨케어, 향수, 액세서리.","hero.viewProducts":"상품 보기","hero.fastDelivery":"빠른 배송","hero.fastDeliverySub":"우즈베키스탄 전역","home.history":"기록","home.recentlyViewed":"최근 본 상품","profile.myProfile":"내 프로필","profile.edit":"프로필 수정","profile.save":"저장","profile.myOrders":"내 주문","profile.myReviews":"내 리뷰","profile.tierWhite":"White","profile.ordersStat":"주문","profile.reviewsStat":"리뷰","profile.couponsStat":"쿠폰","profile.feedbackStat":"피드백","profile.seeAll":"전체 보기","profile.promotions":"프로모션 및 쿠폰","profile.help":"도움말 및 지원","profile.news":"뉴스","profile.language":"언어 / Til / Language","profile.privacy":"개인정보 처리방침","profile.terms":"이용 약관","profile.licenses":"오픈소스 라이선스","profile.settings":"설정","profile.menu":"메뉴","profile.logout":"로그아웃","profile.loggedOut":"로그아웃되었습니다","profile.comingSoon":"곧 제공될 예정입니다","profile.helpMessage":"지원: support@beautyskin.uz","profile.fullName":"이름","profile.phone":"전화번호","profile.imageUrl":"프로필 이미지 URL","profile.loadUserFailed":"프로필을 불러오지 못했습니다","profile.loadOrdersFailed":"주문을 불러오지 못했습니다","profile.loadReviewsFailed":"리뷰를 불러오지 못했습니다","profile.loadFailed":"프로필 데이터를 불러오지 못했습니다","support.title":"고객 지원 센터","support.intro":"궁금한 점이 있으신가요? 저희가 도와드리겠습니다.","support.faqTitle":"자주 묻는 질문","support.faq.delivery.q":"주문한 상품은 언제 도착하나요?","support.faq.delivery.a":"주문은 보통 영업일 기준 3~5일 이내에 배송됩니다. 배송 기간은 지역과 선택한 택배 서비스에 따라 달라집니다. 자연재해나 기타 예기치 못한 상황이 없는 한 주문하신 상품은 예정된 기간 내에 도착합니다.","support.faq.cancel.q":"주문을 어떻게 취소하나요?","support.faq.cancel.a":"주문은 발송 전에만 취소할 수 있습니다. 주문이 택배 서비스로 전달된 후에는 취소가 불가능합니다. 취소하려면 프로필 섹션이나 고객 지원을 통해 문의하시면 됩니다.","support.faq.return.q":"상품을 반품할 수 있나요?","support.faq.return.a":"상품은 사용하지 않았고 포장이 손상되지 않았으며 온전한 상태로 보관된 경우에만 반품이 가능합니다. 반품 시 택배를 통한 상품 발송 비용은 고객이 부담합니다.","support.originalTitle":"100% 정품 및 한국 직배송","support.originalText":"저희 앱의 상품은 대한민국의 공식 제조사와 인증된 유통업체로부터 직접 수입됩니다. 위조품 판매는 엄격히 금지되어 있습니다.","support.whyTitle":"왜 저희인가요?","support.why1":"한국 직수입","support.why2":"위조품 없음","support.why3":"공장 포장 및 정품 봉인","support.why4":"모든 주문은 발송 전 검수","support.why5":"수천 명의 만족한 고객이 선택","support.guarantee":"상품이 정품이 아닐 경우 — 전액 100% 환불해 드립니다.","support.contactTitle":"문의하기","support.phoneLabel":"전화:","support.hoursLabel":"운영 시간:","support.hoursValue":"09:00 – 18:00 (월–금)","support.contactNote":"여러분의 문의를 소중히 여기며 최대한 빠르게 답변드리겠습니다.","privacy.title":"개인정보 처리방침","privacy.updated":"최종 업데이트: 2025년","privacy.intro":"저희는 사용자의 개인정보를 존중하고 보호합니다. 본 개인정보 처리방침은 귀하의 데이터가 어떻게 수집, 사용, 저장되는지 설명합니다.","privacy.s1title":"1. 수집하는 데이터","privacy.s1a":"이름 및 프로필 정보","privacy.s1b":"전화번호 또는 이메일","privacy.s1c":"주문 및 장바구니 데이터","privacy.s1d":"기기 기술 정보","privacy.s2title":"2. 데이터 사용","privacy.s2intro":"수집된 데이터는 다음 목적으로 사용됩니다:","privacy.s2a":"주문 처리","privacy.s2b":"계정 관리","privacy.s2c":"서비스 품질 개선","privacy.s2d":"보안 유지","privacy.s3title":"3. 데이터 보호","privacy.s3text":"저희는 귀하의 개인정보를 무단 접근, 변경 또는 유포로부터 보호하기 위해 최신 보안 조치를 적용합니다.","privacy.s4title":"4. 제3자 서비스","privacy.s4text":"저희 앱은 결제, 배송 및 인증을 위해 제3자 서비스를 사용할 수 있습니다. 이러한 서비스에는 자체 개인정보 처리방침이 있습니다.","privacy.s5title":"5. 연락처","privacy.s5text":"개인정보 처리방침에 대해 궁금한 점이 있으시면 저희에게 연락해 주세요:","terms.title":"이용약관","terms.updated":"최종 업데이트: 2025년","terms.intro":"본 모바일 애플리케이션을 사용함으로써 귀하는 본 이용약관에 동의하게 됩니다. 약관에 동의하지 않으시면 앱을 사용하지 마십시오.","terms.s1title":"1. 일반 조항","terms.s1text":"본 앱은 화장품 및 기타 상품의 온라인 구매를 위해 제공됩니다. 모든 자료, 로고 및 콘텐츠는 저작권으로 보호됩니다.","terms.s2title":"2. 계정 등록","terms.s2text":"주문을 하려면 사용자는 계정을 생성하고 정확한 정보를 제공해야 합니다. 사용자는 자신의 계정 보안에 대한 책임이 있습니다.","terms.s3title":"3. 주문 및 결제","terms.s3text":"주문은 앱을 통해 이루어집니다. 상품 가격은 사전 통지 없이 변경될 수 있습니다. 결제는 선택한 방법에 따라 진행됩니다.","terms.s4title":"4. 배송","terms.s4text":"배송 기간은 지역 및 선택한 방법에 따라 달라집니다. 제3자 배송 서비스로 인한 지연에 대해서는 책임지지 않습니다.","terms.s5title":"5. 반품 및 취소","terms.s5text":"반품 및 주문 취소 정책은 해당 섹션 및 도움말 및 지원 페이지에 설명되어 있습니다.","terms.s6title":"6. 책임 제한","terms.s6text":"앱 사용과 관련된 간접적 손해에 대해서는 책임지지 않습니다.","terms.s7title":"7. 약관 변경","terms.s7text":"저희는 언제든지 본 약관을 변경할 권리를 보유합니다. 최신 버전은 항상 앱에서 확인할 수 있습니다.","licenses.title":"Open Source Libraries & Technologies","licenses.intro":"이 애플리케이션은 다음 오픈소스 기술을 사용하여 제작되었습니다","licenses.frontendTitle":"Android Frontend","licenses.fe1":"Android Jetpack – 라이프사이클 관리, 내비게이션, ViewBinding 및 아키텍처 구성 요소에 사용되는 최신 Android 라이브러리 모음으로 안정적인 사용자 인터페이스를 보장합니다.","licenses.fe2":"Retrofit – 백엔드 REST API와 효율적으로 통신하기 위해 사용되는 Android용 타입 안전 HTTP 클라이언트입니다.","licenses.fe3":"Glide – 부드러운 스크롤과 효율적인 메모리 사용에 최적화된 이미지 로딩 및 캐싱 라이브러리입니다.","licenses.fe4":"Firebase Authentication – Google을 통한 안전한 사용자 인증과 전화번호 확인(OTP)을 제공합니다.","licenses.fe5":"Facebook Shimmer – 사용자 경험 향상을 위해 애니메이션 로딩 플레이스홀더를 표시합니다.","licenses.backendTitle":"Backend & Server Technologies","licenses.be1":"Spring Boot – 확장 가능한 RESTful API를 구축하는 데 사용되는 Java 기반 프레임워크입니다.","licenses.be2":"Spring Security + JWT – 사용자 세션과 API 엔드포인트를 보호하기 위해 JSON Web Tokens를 사용한 인증을 구현합니다.","licenses.be3":"Spring Data JPA – ORM 및 리포지토리 패턴을 사용하여 데이터베이스 접근을 단순화합니다.","licenses.be4":"MySQL – 계정, 주문 및 상품을 저장하기 위한 안정적인 관계형 데이터베이스 관리 시스템입니다.","licenses.be5":"Eskiz SMS API – 전화번호 인증 및 일회용 비밀번호(OTP) 전달에 사용됩니다.","licenses.infraTitle":"Infrastructure & Deployment","licenses.inf1":"Docker – 안정적인 배포를 위해 모든 종속성과 함께 애플리케이션을 패키징하는 컨테이너화 기술입니다.","licenses.inf2":"Railway Cloud – 백엔드 서비스를 배포, 확장 및 모니터링하기 위한 클라우드 플랫폼입니다.","licenses.securityTitle":"Security & Data Protection","licenses.sec1":"HTTPS – 사용자 데이터를 보호하기 위해 모든 네트워크 통신이 HTTPS로 암호화됩니다.","licenses.sec2":"안전한 비밀번호 처리 – 사용자 자격 증명은 절대 평문으로 저장되지 않습니다.","licenses.sec3":"토큰 기반 인증 – 모든 보호된 요청은 유효한 JWT 토큰을 요구합니다.","licenses.footer":"저희는 오픈소스 커뮤니티를 존중하며 모든 라이선스 요구 사항과 보안 모범 사례를 엄격히 준수합니다.","status.PENDING":"대기 중","api.title":"API 설정","api.save":"저장","footer.tagline":"한국 뷰티 마켓플레이스","assistant.title":"쇼핑 어시스턴트","assistant.subtitle":"맞춤 제품 추천","assistant.fabLabel":"AI 어시스턴트","assistant.placeholder":"예: 건성 피부에 맞는 크림 추천해 줘...","assistant.send":"보내기","assistant.composerHint":"Enter — 전송 · Shift+Enter — 줄바꿈","assistant.newChat":"새 채팅","assistant.newChatStarted":"새 대화를 시작했습니다","assistant.openFull":"전체 화면","assistant.close":"닫기","assistant.emptyTitle":"무엇이든 물어보세요","assistant.emptyHint":"제품 선택, 비교, 피부 고민에 대해 도움을 드립니다.","assistant.thinking":"답변 작성 중...","assistant.loadingHistory":"대화 불러오는 중...","assistant.retry":"다시 시도","assistant.sources":"출처","assistant.viewProduct":"상품 보기","assistant.addToCart":"장바구니","assistant.inStock":"재고 있음","assistant.errorNetwork":"네트워크 오류입니다. 연결을 확인하고 다시 시도하세요.","assistant.errorTimeout":"요청 시간이 초과되었습니다. 다시 시도하세요.","assistant.error400":"잘못된 요청입니다. 메시지를 바꿔 보세요.","assistant.error401":"세션이 만료되었습니다. 다시 로그인하거나 게스트로 계속하세요.","assistant.error429":"요청이 너무 많습니다. 잠시 후 다시 시도하세요.","assistant.error500":"서버 오류입니다. 나중에 다시 시도하세요.","assistant.error503":"서비스를 일시적으로 사용할 수 없습니다. 다시 시도하세요.","assistant.errorGeneric":"응답을 받지 못했습니다. 다시 시도하세요."},ut={uz:hr,en:ya,ru:vs,ko:ys};let bt=bs();function bs(){const e=localStorage.getItem(C.storageKeys.language);return va.includes(e)?e:gt}function he(){return bt}function n(e,t={}){var c;const a=ut[bt]||ut[gt],r=ut.en||ut[gt],i=(a==null?void 0:a[e])??(r==null?void 0:r[e])??((c=ut[gt])==null?void 0:c[e])??e;return String(i).replace(/\{(\w+)\}/g,(d,u)=>t[u]??"")}let mr=()=>{};function ws(e){mr=e}function gr(e){const t=va.includes(e)?e:gt;bt=t,localStorage.setItem(C.storageKeys.language,t),mr()}function ba(e){var a;document.documentElement.lang=bt,document.title=(e==null?void 0:e.currentRoute)==="product"&&((a=e==null?void 0:e.selectedDetailProduct)!=null&&a.name)?`${e.selectedDetailProduct.name} - BEAUTY SKIN KOREA`:"BEAUTY SKIN KOREA";const t=document.getElementById("languageSelect");t&&(t.value=bt),document.querySelectorAll("[data-i18n]").forEach(r=>{r.textContent=n(r.dataset.i18n)}),document.querySelectorAll("[data-i18n-placeholder]").forEach(r=>{r.setAttribute("placeholder",n(r.dataset.i18nPlaceholder))}),document.querySelectorAll("[data-i18n-title]").forEach(r=>{r.setAttribute("title",n(r.dataset.i18nTitle))}),document.querySelectorAll("[data-i18n-aria-label]").forEach(r=>{r.setAttribute("aria-label",n(r.dataset.i18nAriaLabel))})}const _t=e=>I("/api/products",{query:e,showError:!1}),ks=e=>I(`/api/products/${e}`),Oa=(e,t)=>I("/api/products/category",{query:{category:e,...t},showError:!1}),aa=(e,t)=>I("/api/products/search",{query:{q:e,...t},showError:!1}),Ss=()=>I("/api/products/today-deals",{showError:!1}),Cs=e=>I("/api/products/by-ids",{method:"POST",body:JSON.stringify(e),showError:!1}),$s=e=>I("/api/home",{query:e,showError:!1}),Ps=e=>I("/api/home/feed",{query:e,showError:!1}),Is=(e,t)=>I(`/api/products/${e}/recommend`,{query:t,showError:!1});C.defaultPageSize;const Es=()=>I("/api/categories",{showError:!1}),As=()=>I("/api/banners",{showError:!1}),Ls=()=>I("/api/announcements",{showError:!1});function S(e){const t=Number(e);return Number.isFinite(t)?t:0}function Nt(e){return e?typeof e=="string"?e:e.imageUrl||e.url||"":""}function Rt(e){return Array.isArray(e)?e.map(t=>Nt(t)).filter(Boolean):[]}function x(e){return Array.isArray(e==null?void 0:e.content)?e.content:Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray(e)?e:[]}function K(e={}){const t=Array.isArray(e.variants)?e.variants:[],a=t.find(h=>Number(h.stock||0)>0)||t[0]||null,r=Rt(e.images),i=Rt(e.detailImages),c=Nt(e.mainImageUrl)||r[0]||e.imageUrl||C.placeholderImage,d=S(e.price??(a==null?void 0:a.price)),u=S((a==null?void 0:a.discountPrice)??e.discountPrice??e.price),p=d>u&&d>0?Math.round((d-u)/d*100):0;return{id:e.id,name:e.name||"Mahsulot",description:e.description||"",brand:e.brand||"",category:e.category||"",image:c,images:r.length?r:[c],detailImages:i,price:S(e.price),originalPrice:d,discountPrice:S(e.discountPrice),finalPrice:u,discountPercent:p,stock:S(e.stock),ratingAvg:S(e.ratingAvg),reviewCount:S(e.reviewCount),soldCount:S(e.soldCount),todayDeal:!!e.todayDeal,favorite:!!e.favorite,variants:t,raw:e}}function Ts(e={}){var c,d,u,p;const t=K(e.product||((c=e.variant)==null?void 0:c.product)||e),a=S(e.quantity)||1,r=S(e.unitPrice||t.finalPrice),i=S(e.lineTotal||r*a);return{id:e.id||e.cartItemId,productId:t.id,product:t,image:Nt(e.image||e.imageUrl||e.mainImageUrl)||t.image,name:t.name,brand:t.brand,variantId:e.variantId||((d=e.variant)==null?void 0:d.id),variantLabel:e.variantLabel||((u=e.variant)==null?void 0:u.label)||"",unitPrice:r,lineTotal:i,quantity:a,stock:S(e.stock??((p=e.variant)==null?void 0:p.stock)??t.stock)}}function Ds(e={}){const t=e.product||e,a=K(t);if(a.id===void 0||a.id===null){const r=t.productId??e.productId;r!=null&&(a.id=r)}return a.favorite=!0,a}function Rs(e){return typeof e=="string"?e:(e==null?void 0:e.code)||(e==null?void 0:e.name)||(e==null?void 0:e.title)||""}function wa(e={}){var r,i;const t=e.product||{},a=Nt(e.mainImageUrl||t.mainImageUrl);return{id:e.id||e.orderItemId,productId:e.productId||t.id||((r=e.product)==null?void 0:r.id),orderId:e.orderId,name:e.productName||e.name||t.name||"Product",image:e.imageUrl||a||t.imageUrl||Rt(t.images)[0]||C.placeholderImage,variantLabel:e.variantLabel||((i=e.variant)==null?void 0:i.label)||"",quantity:S(e.quantity)||1,unitPrice:S(e.unitPrice||e.price||t.discountPrice||t.price),lineTotal:S(e.lineTotal||e.total||e.price||0)}}function fr(e={}){var t,a,r,i,c,d;return{id:e.id||e.reviewId||`${e.productId||"product"}-${e.orderId||"order"}-${e.createdAt||""}`,productId:e.productId||((t=e.product)==null?void 0:t.id)||((a=e.orderItem)==null?void 0:a.productId),orderId:e.orderId||((r=e.order)==null?void 0:r.id)||((i=e.orderItem)==null?void 0:i.orderId),rating:Math.min(5,Math.max(0,S(e.rating))),content:e.content||e.reviewContent||e.comment||"",imageUrls:Array.isArray(e.imageUrls)?e.imageUrls.filter(Boolean):Rt(e.images),createdAt:e.createdAt||e.createdDate||e.reviewedAt||"",userName:e.userName||e.fullName||((c=e.user)==null?void 0:c.fullName)||((d=e.user)==null?void 0:d.name)||"Customer"}}function Ms(e={}){return{id:e.id||e.notificationId,title:e.title||e.subject||"Notification",message:e.message||e.content||"",type:String(e.type||"SYSTEM").toUpperCase(),read:!!(e.read??e.isRead),createdAt:e.createdAt||e.createdDate||"",refId:e.refId||e.referenceId||e.orderId||null,raw:e}}function qs(e=""){const t=String(e||"SYSTEM").toUpperCase();return n(`notification.${t}`)}function Bs(e){return typeof e=="number"?Math.max(0,e):typeof e=="string"&&e.trim()!==""?Math.max(0,Number(e)||0):typeof(e==null?void 0:e.data)=="number"?Math.max(0,e.data):typeof(e==null?void 0:e.count)=="number"?Math.max(0,e.count):typeof(e==null?void 0:e.unreadCount)=="number"?Math.max(0,e.unreadCount):0}function Os(e){var t;return Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray((t=e==null?void 0:e.data)==null?void 0:t.content)?e.data.content:Array.isArray(e==null?void 0:e.content)?e.content:Array.isArray(e)?e:[]}function xs(e={}){var p,h,g;const t=e.review||e.reviewResponse||(e.rating||e.content?e:null),a=K(e.product||e.productCard||e.productResponse||e),r=t?fr({...t,productId:t.productId||a.id,orderId:t.orderId||e.orderId}):null,i=e.productId||(r==null?void 0:r.productId)||a.id,c=e.orderId||((p=e.order)==null?void 0:p.id)||((h=e.orderResponse)==null?void 0:h.id)||(r==null?void 0:r.orderId),d=e.status||e.orderStatus||((g=e.order)==null?void 0:g.status)||"",u=!!(r!=null&&r.content||r!=null&&r.rating);return{id:e.id||e.orderItemId||(r==null?void 0:r.id)||`${i||"product"}-${c||"order"}`,productId:i,orderId:c,product:a,image:a.image||e.imageUrl||C.placeholderImage,name:e.productName||e.name||(a.name&&a.name!=="Mahsulot"?a.name:`Product #${i||"-"}`),brand:a.brand||e.brand||"",status:d,review:r,hasReview:u,reviewable:!!(i&&c&&!u),raw:e}}function Ns(e){var t,a,r,i;return Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray((t=e==null?void 0:e.data)==null?void 0:t.content)?e.data.content:Array.isArray((a=e==null?void 0:e.data)==null?void 0:a.items)?e.data.items:Array.isArray((r=e==null?void 0:e.data)==null?void 0:r.reviews)?e.data.reviews:Array.isArray((i=e==null?void 0:e.data)==null?void 0:i.reviewableItems)?e.data.reviewableItems:Array.isArray(e==null?void 0:e.reviews)?e.reviews:Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e==null?void 0:e.reviewableItems)?e.reviewableItems:Array.isArray(e==null?void 0:e.content)?e.content:Array.isArray(e)?e:[]}function ge(e){if(!e)return"";const t=`category.${e}`,a=n(t);return a!==t?a:pr[e]||e.toLowerCase().split("_").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(" ")}const ne={async loadProducts({page:e=0,size:t=C.defaultPageSize}={}){const a=await _t({page:e,size:t});return a===null?{products:[],demoProducts:!1,failed:!0}:{products:x(a).map(K),demoProducts:!1,failed:!1}},async loadMoreProducts({feedPage:e,existingProducts:t}){let a=[];const r=await Ps({limit:30});a=x(r).map(K);let i=e;if(!a.length){i+=1;const u=await _t({page:i,size:C.defaultPageSize});a=x(u).map(K)}const c=new Set(t.map(u=>String(u.id))),d=a.filter(u=>u.id&&!c.has(String(u.id)));return{products:[...t,...d],nextProducts:d,nextFeedPage:i}},async loadTodayDeals(){const e=await Ss();return e===null?{deals:[],demoDeals:!1,failed:!0}:{deals:x(e).map(K),demoDeals:!1,failed:!1}},async loadProduct(e,t=null){const a=await ks(e);return K(a||t||{})},async loadProductsByIds(e){const t=e.map(Number).filter(Number.isFinite);if(!t.length)return[];const a=await Cs(t);return x(a).map(K).filter(r=>r.id)},async search(e,t={}){const a=await aa(e,{page:0,size:C.defaultPageSize,...t});return a===null?[]:x(a).map(K)},async loadByCategory(e,t={}){const a=await Oa(e,{page:0,size:C.defaultPageSize,...t});return a===null?[]:x(a).map(K)},async loadBrandProducts(e,t,a){const r=t.length?t.filter(c=>c.brand===e):a.filter(c=>c.brand===e);if(r.length)return r;const i=await aa(e,{page:0,size:24});return x(i).map(K).filter(c=>c.brand===e)},async loadRecommendations(e,t){const a=await Is(e.id,{similar:12,others:24,seed:t}),r=x((a==null?void 0:a.similar)||[]).map(K).filter(u=>String(u.id)!==String(e.id)),i=x((a==null?void 0:a.others)||[]).map(K).filter(u=>String(u.id)!==String(e.id));if(r.length||i.length)return{mode:"api",similar:r.slice(0,12),others:i.slice(0,12),fallback:[],failed:!1};let c=null;e.category&&(c=await Oa(e.category,{page:0,size:12}));let d=x(c).map(K).filter(u=>String(u.id)!==String(e.id));return d.length||(c=await _t({page:0,size:12}),d=x(c).map(K).filter(u=>String(u.id)!==String(e.id))),{mode:"fallback",similar:[],others:[],fallback:d.slice(0,12),failed:!d.length&&c===null}},pickDefaultVariant(e){var t,a;return((t=e.variants)==null?void 0:t.find(r=>Number(r.stock||0)>0))||((a=e.variants)==null?void 0:a[0])||null},async resolveAddToCartVariant(e,t){var i;if(t)return{variantId:t,navigateToProduct:!1};const a=await this.loadProduct(e),r=a.variants.filter(c=>Number(c.stock||0)>0);return r.length===1?{variantId:r[0].id,navigateToProduct:!1,product:a}:a.variants.length>1?{variantId:null,navigateToProduct:!0,product:a}:{variantId:((i=this.pickDefaultVariant(a))==null?void 0:i.id)||null,navigateToProduct:!1,product:a}}},Fs=["SKINCARE","MAKEUP","COLLAGEN","HAIR_CARE","FRAGRANCE"];function zs(e,t,a){return(e==null?void 0:e.id)!==void 0&&a.findIndex(r=>String(r.id)===String(e.id))===t}const le={async loadHomeApiData(e={limit:10,page:0,size:20}){const t=await $s(e);if(t===null)return{loaded:!1};const a=x(t.hits||[]).map(K),r=x(t.discounts||[]).map(K),i=x(t.newArrivals||[]).map(K),c=x(t.popular).map(K);if(!(a.length||r.length||i.length||c.length))return{loaded:!1};const u=c.length?c:[...a,...r,...i].filter(zs);return{loaded:!0,hits:a,discounts:r,newArrivals:i,products:u,todayDeals:r,homeApiSections:{hits:a,discounts:r,newArrivals:i}}},async loadCategories(){const e=await Es(),t=x(e).map(Rs).filter(Boolean);return t.length?{categories:t,demoCategories:!1}:{categories:Fs,demoCategories:!1}},async loadBanners(){const e=await As();return x(e).map(t=>({id:t.id,title:t.title||"",subtitle:t.subtitle||"",imageUrl:t.imageUrl||"",linkType:String(t.linkType||"NONE").toUpperCase(),linkId:t.linkId,position:S(t.position)})).sort((t,a)=>t.position-a.position)},async loadAnnouncements(){const e=await Ls();return x(e).map(t=>({title:t.title||"",message:t.content||t.message||"",type:String(t.type||"SYSTEM").toUpperCase(),createdAt:t.createdAt||""})).filter(t=>t.title||t.message)},getRecentProductIds(){try{return JSON.parse(localStorage.getItem(C.storageKeys.recentProducts)||"[]").filter(Boolean)}catch{return[]}},addRecentProduct(e){if(!e||String(e).startsWith("demo-"))return;const t=[String(e),...this.getRecentProductIds().filter(a=>String(a)!==String(e))].slice(0,12);localStorage.setItem(C.storageKeys.recentProducts,JSON.stringify(t))},async loadRecentlyViewed(){const e=this.getRecentProductIds();return e.length?ne.loadProductsByIds(e):[]}},F={};function Hs(e){Object.assign(F,e)}function s(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function D(e){const t=he(),a={uz:"so'm",en:"UZS",ru:"сум",ko:"UZS"},r=t==="uz"?"uz-UZ":t;return`${new Intl.NumberFormat(r).format(S(e))} ${a[t]||"UZS"}`}function vr(e){return D(e)}function ka(e){if(!e)return"";const t=new Date(e);if(Number.isNaN(t.getTime()))return String(e);const a=he();return new Intl.DateTimeFormat(a,{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(t)}function Us(e){if(!e)return"";const t=new Date(e);if(Number.isNaN(t.getTime()))return String(e);const a=he(),r=new Intl.DateTimeFormat(a,{day:"2-digit",month:"short",year:"numeric"}).format(t),i=new Intl.DateTimeFormat(a,{hour:"2-digit",minute:"2-digit"}).format(t);return`${r} • ${i}`}function Vs({discountPercent:e,todayDeal:t,isNew:a,todayDealLabel:r}){return`
    <div class="badge-row">
      ${e?`<span class="badge ds-badge--sale">-${e}%</span>`:""}
      ${t?`<span class="badge today ds-badge--deal">${s(r)}</span>`:""}
      ${a?'<span class="badge ds-badge--new">NEW</span>':""}
    </div>
  `}function yr({stock:e,lowStockLabel:t,outOfStockLabel:a}){const r=e>0&&e<=5,i=e===0;return!r&&!i?"":`<span class="ds-badge ds-badge--stock">${s(i?a:t)}</span>`}function Ft({rating:e,label:t="Rating",className:a="stars"}){const r=Math.min(5,Math.max(0,Math.round(S(e))));return`
    <span class="${s(a)}" role="img" aria-label="${s(t)} ${r} out of 5">
      ${Array.from({length:5},(i,c)=>`<span class="${c<r?"filled":""}">★</span>`).join("")}
    </span>
  `}function br({ratingAvg:e,reviewCount:t=0,className:a="rating"}){const r=S(e);return`
    <span class="${s(a)}">
      <span class="star" aria-hidden="true">★</span>
      ${r.toFixed(1)}
      <span class="review-count">(${t})</span>
    </span>
  `}function js({ratingAvg:e,reviewCount:t=0}){return e?`
    <div class="rating-line">
      <span class="star" aria-hidden="true">★</span>
      ${S(e).toFixed(1)}
      <span class="review-count">(${t})</span>
    </div>
  `:""}function Ks({product:e,screen:t="home",position:a=0,isFavorite:r=!1,isCompared:i=!1,isAdding:c=!1,labels:d={}}){const u=S(e.stock),p=u===0,{favoritesTitle:h="Favorites",todayOnly:g="Today only",lowStock:y="Low stock",outOfStock:A="Out of stock",freeShipping:T="Free shipping",quickView:B="Quick view",compare:E="Compare",sold:O="",adding:L="Adding...",addToCart:H="Add to cart",viewDetails:ee="View details"}=d;return`
    <article class="product-card" data-product="${s(e.id)}" data-screen="${s(t)}" data-position="${s(a)}" role="link" tabindex="0" aria-label="${s(e.name)}">
      <div class="card-media">
        ${Vs({discountPercent:e.discountPercent,todayDeal:e.todayDeal,isNew:e.isNew,todayDealLabel:g})}
        <button class="icon-button favorite-float ${r?"active":""}" data-favorite="${s(e.id)}" type="button" aria-label="${s(h)}" aria-pressed="${r}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
        </button>
        <img class="product-image" src="${s(e.image)}" alt="${s(e.name)}" loading="lazy" decoding="async" />
        <div class="card-badges-bottom">
          ${yr({stock:u,lowStockLabel:y,outOfStockLabel:A})}
          <span class="ds-badge ds-badge--delivery">${s(T)}</span>
        </div>
        <div class="card-overlay">
          <button class="secondary-button" data-quick-view="${s(e.id)}" type="button">${s(B)}</button>
          <button class="icon-button ${i?"active":""}" data-compare="${s(e.id)}" type="button" aria-label="${s(E)}" aria-pressed="${i}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-meta">
          <span class="brand-name">${s(e.brand||e.category||"BEAUTY SKIN KOREA")}</span>
          ${br({ratingAvg:e.ratingAvg,reviewCount:e.reviewCount||0})}
        </div>
        <h3>${s(e.name)}</h3>
        <p>${s(e.description||`${e.soldCount} dona sotilgan`)}</p>
        <div class="price-row">
          <span>${D(e.finalPrice)}</span>
          ${e.discountPercent?`<span class="old-price">${D(e.originalPrice)}</span>`:""}
        </div>
        ${js({ratingAvg:e.ratingAvg,reviewCount:e.reviewCount||0})}
        <p class="hint">${s(O)}</p>
      </div>
      <div class="card-actions">
        <button class="primary-button ${c?"loading":""}" data-add="${s(e.id)}" type="button" ${p?"disabled":""}>
          ${s(c?L:H)}
        </button>
        <button class="icon-button" data-detail="${s(e.id)}" type="button" aria-label="${s(ee)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>
    </article>
  `}function _s({message:e,actionLabel:t="",actionAttrs:a='data-show-all type="button"'}){const r=t?`<button class="secondary-button" ${a}>${s(t)}</button>`:"";return`
    <div class="empty-state">
      <strong>${s(e)}</strong>
      ${r}
    </div>
  `}function wr(e,t){e&&(e.innerHTML=_s(t))}function Gs({products:e,renderCard:t}){return e.map((a,r)=>t(a,r)).join("")}function Ws(e,{products:t,emptyMessage:a,emptyActionLabel:r,renderCard:i}){return t.length?(e.innerHTML=Gs({products:t,renderCard:i}),!0):(wr(e,{message:a,actionLabel:r}),!1)}function Ys(){return`
    <div class="skeleton-card" aria-hidden="true">
      <div class="ds-skeleton" style="aspect-ratio:1/1.05;border-radius:14px;margin-bottom:12px"></div>
      <div class="ds-skeleton" style="height:12px;width:40%;margin-bottom:8px;border-radius:6px"></div>
      <div class="ds-skeleton" style="height:14px;width:90%;margin-bottom:8px;border-radius:6px"></div>
      <div class="ds-skeleton" style="height:18px;width:55%;border-radius:6px"></div>
    </div>
  `}function Qs({count:e=12}={}){return Array.from({length:e},()=>Ys()).join("")}function Js(e,t=12){e&&(e.innerHTML=Qs({count:t}))}function ke(e=document){if(e.querySelectorAll("img[data-src], img[loading='lazy']").forEach(a=>{if(a.dataset.loaded)return;a.classList.add("img-loading");const r=()=>{a.classList.remove("img-loading"),a.classList.add("img-loaded"),a.dataset.loaded="1"};if(a.complete&&a.naturalWidth){r();return}a.addEventListener("load",r,{once:!0}),a.addEventListener("error",()=>a.classList.remove("img-loading"),{once:!0})}),"IntersectionObserver"in window){const a=new IntersectionObserver(r=>{r.forEach(i=>{if(!i.isIntersecting)return;const c=i.target;c.dataset.src&&!c.src&&(c.src=c.dataset.src),a.unobserve(c)})},{rootMargin:"200px"});e.querySelectorAll("img[data-src]").forEach(r=>a.observe(r))}}const kr="beauty_skin_compare",Je=4;function Xe(){try{return JSON.parse(localStorage.getItem(kr)||"[]").slice(0,Je)}catch{return[]}}function Sa(e){localStorage.setItem(kr,JSON.stringify(e.slice(0,Je)))}function Zs(e){const t=String(e);let a=Xe();if(a.includes(t))a=a.filter(r=>r!==t);else{if(a.length>=Je)return{ids:a,added:!1,full:!0};a=[...a,t]}return Sa(a),{ids:a,added:a.includes(t),full:!1}}function Xs(e){const t=Xe().filter(a=>a!==String(e));return Sa(t),t}function ei(){return Sa([]),[]}const ti=["red","blue","pink","black","white","green","nude","coral","beige","brown","purple","orange","yellow","gray","grey","rose","peach","ivory","gold","silver"],ai=["xs","s","m","l","xl","xxl","ml","g","oz","50ml","100ml","150ml","200ml","30ml"];function ri(e){const t=new Set,a=new Set,r=new Set;let i=0;return e.forEach(c=>{var d;c.brand&&t.add(c.brand),i=Math.max(i,S(c.finalPrice)),(d=c.variants)==null||d.forEach(u=>{const p=String(u.label||"").toLowerCase();ti.forEach(h=>{p.includes(h)&&a.add(h.charAt(0).toUpperCase()+h.slice(1))}),ai.forEach(h=>{p.includes(h)&&r.add(h.toUpperCase())}),u.color&&a.add(u.color),u.size&&r.add(u.size)})}),{brands:[...t].sort(),colors:[...a].sort(),sizes:[...r].sort(),maxPrice:i||5e6}}function si(e,t){var r,i,c;let a=[...e];return(r=t.brands)!=null&&r.length&&(a=a.filter(d=>t.brands.includes(d.brand))),(t.minPrice>0||t.maxPrice<5e6)&&(a=a.filter(d=>{const u=S(d.finalPrice);return u>=t.minPrice&&u<=t.maxPrice})),t.minRating>0&&(a=a.filter(d=>S(d.ratingAvg)>=t.minRating)),t.onSale&&(a=a.filter(d=>S(d.discountPercent)>0||d.todayDeal)),t.inStock&&(a=a.filter(d=>S(d.stock)>0)),t.fastDelivery&&(a=a.filter(d=>S(d.stock)>0)),(i=t.colors)!=null&&i.length&&(a=a.filter(d=>{const u=(d.variants||[]).map(p=>String(p.label||p.color||"").toLowerCase()).join(" ");return t.colors.some(p=>u.includes(p.toLowerCase()))})),(c=t.sizes)!=null&&c.length&&(a=a.filter(d=>{const u=(d.variants||[]).map(p=>String(p.label||p.size||"").toLowerCase()).join(" ");return t.sizes.some(p=>u.includes(p.toLowerCase()))})),ii(a,t.sort)}function ii(e,t){const a=[...e];switch(t){case"price-asc":return a.sort((r,i)=>S(r.finalPrice)-S(i.finalPrice));case"price-desc":return a.sort((r,i)=>S(i.finalPrice)-S(r.finalPrice));case"rating":return a.sort((r,i)=>S(i.ratingAvg)-S(r.ratingAvg));case"newest":return a.sort((r,i)=>S(i.id)-S(r.id));case"discount":return a.sort((r,i)=>S(i.discountPercent)-S(r.discountPercent));default:return a.sort((r,i)=>S(i.soldCount)-S(r.soldCount))}}const Sr="beauty_skin_filters",Oe={brands:[],minPrice:0,maxPrice:5e6,colors:[],sizes:[],minRating:0,onSale:!1,inStock:!1,fastDelivery:!1,origin:[],seller:[],sort:"popular",viewMode:"grid"};function oi(){try{const e=JSON.parse(localStorage.getItem(Sr)||"{}");return{...Oe,...e}}catch{return{...Oe}}}function ni(e){localStorage.setItem(Sr,JSON.stringify({brands:e.brands,minPrice:e.minPrice,maxPrice:e.maxPrice,colors:e.colors,sizes:e.sizes,minRating:e.minRating,onSale:e.onSale,inStock:e.inStock,fastDelivery:e.fastDelivery,origin:e.origin,seller:e.seller,sort:e.sort,viewMode:e.viewMode}))}function ci(){return{...Oe}}function li(e){let t=0;return e.brands.length&&(t+=e.brands.length),e.colors.length&&(t+=e.colors.length),e.sizes.length&&(t+=e.sizes.length),e.origin.length&&(t+=e.origin.length),e.seller.length&&(t+=e.seller.length),e.minRating>0&&(t+=1),e.onSale&&(t+=1),e.inStock&&(t+=1),e.fastDelivery&&(t+=1),(e.minPrice>Oe.minPrice||e.maxPrice<Oe.maxPrice)&&(t+=1),t}const Ca="beauty_skin_saved_for_later";function $a(){try{return JSON.parse(localStorage.getItem(Ca)||"[]")}catch{return[]}}function di(e){const t=$a();if(t.some(r=>String(r.id)===String(e.id)))return t;const a=[...t,{id:e.id,name:e.name,image:e.image,unitPrice:e.unitPrice,brand:e.brand,variantLabel:e.variantLabel}];return localStorage.setItem(Ca,JSON.stringify(a)),a}function ui(e){const t=$a().filter(a=>String(a.id)!==String(e));return localStorage.setItem(Ca,JSON.stringify(t)),t}const qe=5e5,pi=3e4;function hi(){l.filters||(l.filters=oi())}function mi(e){l.sourceProducts=e,l.filterFacets=ri(e),l.filters.maxPrice===Oe.maxPrice&&l.filterFacets.maxPrice&&(l.filters.maxPrice=Math.ceil(l.filterFacets.maxPrice/1e3)*1e3)}function gi(){return si(l.sourceProducts,l.filters)}function zt(e,t){const a=document.getElementById("filterSidebar"),r=document.getElementById("filterSheetContent"),i=fi(e);a&&(a.innerHTML=i),r&&(r.innerHTML=i),vi()}function fi(e,t){const a=l.filters,r=l.filterFacets,i=r.brands.map(u=>Gt("brand",u,a.brands.includes(u))).join(""),c=r.colors.map(u=>Gt("color",u,a.colors.includes(u))).join(""),d=r.sizes.map(u=>Gt("size",u,a.sizes.includes(u))).join("");return`
    <div class="filter-sidebar-header">
      <h3>${s(e("filter.title"))}</h3>
      <button class="ghost-button" type="button" data-clear-filters>${s(e("filter.clearAll"))}</button>
    </div>
    ${Se(e("filter.brand"),i||`<p class="hint">${s(e("filter.noOptions"))}</p>`)}
    ${Se(e("filter.price"),`
      <div class="price-range">
        <input type="range" data-filter-price min="0" max="${r.maxPrice||5e6}" step="10000" value="${a.maxPrice}" />
        <div class="price-range-labels">
          <span>${D(a.minPrice)}</span>
          <span>${D(a.maxPrice)}</span>
        </div>
      </div>
    `)}
    ${Se(e("filter.discount"),Wt("onSale",e("filter.onSaleOnly"),a.onSale))}
    ${Se(e("filter.color"),c||'<p class="hint">—</p>')}
    ${Se(e("filter.size"),d||'<p class="hint">—</p>')}
    ${Se(e("filter.rating"),`
      ${[4,3,2,1].map(u=>`
        <label class="filter-check">
          <input type="radio" name="minRating" data-filter-rating value="${u}" ${a.minRating===u?"checked":""} />
          ${"★".repeat(u)}+
        </label>
      `).join("")}
    `)}
    ${Se(e("filter.availability"),Wt("inStock",e("filter.inStock"),a.inStock))}
    ${Se(e("filter.fastDelivery"),Wt("fastDelivery",e("filter.fastDelivery"),a.fastDelivery))}
  `}function Se(e,t){return`
    <div class="filter-group">
      <button class="filter-group-toggle" type="button" aria-expanded="true">
        ${s(e)}
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <div class="filter-group-body">${t}</div>
    </div>
  `}function Gt(e,t,a){return`
    <label class="filter-check">
      <input type="checkbox" data-filter-${e}="${s(t)}" ${a?"checked":""} />
      ${s(t)}
    </label>
  `}function Wt(e,t,a){return`
    <label class="filter-check">
      <input type="checkbox" data-filter-toggle="${e}" ${a?"checked":""} />
      ${s(t)}
    </label>
  `}function Mt(e){const t=document.getElementById("filterChipsRow");if(!t)return;const a=[],r=l.filters;r.brands.forEach(i=>a.push(Fe(i,`brand:${i}`))),r.colors.forEach(i=>a.push(Fe(i,`color:${i}`))),r.sizes.forEach(i=>a.push(Fe(i,`size:${i}`))),r.onSale&&a.push(Fe(e("filter.onSaleOnly"),"onSale")),r.inStock&&a.push(Fe(e("filter.inStock"),"inStock")),r.minRating&&a.push(Fe(`${r.minRating}★+`,"rating")),t.hidden=!a.length,t.innerHTML=a.join("")}function Fe(e,t){return`<span class="filter-chip-active">${s(e)}<button type="button" data-remove-chip="${s(t)}" aria-label="Remove">×</button></span>`}function vi(){const e=document.getElementById("filterBadgeCount"),t=li(l.filters);e&&(e.textContent=t,e.hidden=t===0)}function Re(){ni(l.filters)}function yi(){const e=l.filterFacets.maxPrice||Oe.maxPrice;l.filters={...ci(),maxPrice:e},Re()}function ra(e,t){var a,r,i,c;e&&(e.classList.toggle("list-view",t==="list"),(a=document.getElementById("gridViewBtn"))==null||a.classList.toggle("active",t==="grid"),(r=document.getElementById("listViewBtn"))==null||r.classList.toggle("active",t==="list"),(i=document.getElementById("gridViewBtn"))==null||i.setAttribute("aria-pressed",t==="grid"),(c=document.getElementById("listViewBtn"))==null||c.setAttribute("aria-pressed",t==="list"))}function bi(e){const t=document.getElementById("compareFab"),a=document.getElementById("compareFabCount");a&&(a.textContent=e),t==null||t.classList.toggle("visible",e>0)}function xa(e,t){const a=document.getElementById("compareDrawerContent");if(a){if(!e.length){a.innerHTML=`<div class="empty-state"><strong>${s(t("compare.empty"))}</strong></div>`;return}a.innerHTML=e.map(r=>`
    <div class="compare-product-cell" style="display:flex;gap:12px;margin-bottom:12px;align-items:center">
      <img src="${s(r.image)}" alt="" width="64" height="64" />
      <div style="flex:1">
        <strong>${s(r.name)}</strong>
        <p>${D(r.finalPrice)}</p>
      </div>
      <button class="icon-button" data-remove-compare="${s(r.id)}" type="button" aria-label="Remove">×</button>
    </div>
  `).join("")}}function Cr(e,t){const a=document.getElementById("comparePageContent");if(!a||!e.length)return;const r=[["",...e.map(c=>`<img src="${s(c.image)}" alt="" /><br><strong>${s(c.name)}</strong>`)],[t("compare.price"),...e.map(c=>D(c.finalPrice))],[t("compare.brand"),...e.map(c=>s(c.brand||"—"))],[t("compare.rating"),...e.map(c=>`${S(c.ratingAvg).toFixed(1)} (${c.reviewCount||0})`)],[t("compare.stock"),...e.map(c=>String(c.stock??"—"))],[t("compare.discount"),...e.map(c=>c.discountPercent?`-${c.discountPercent}%`:"—")]],i=c=>new Set(c.filter(u=>u!=="—")).size>1;a.innerHTML=`
    <table class="compare-table">
      <tbody>
        ${r.map(([c,...d])=>`<tr class="${c&&i(d)?"compare-diff":""}">
            <th>${s(c)}</th>
            ${d.map(p=>`<td>${p}</td>`).join("")}
          </tr>`).join("")}
      </tbody>
    </table>
  `}function Na(e,t){return t?`
    <section class="app-feed-block app-feed-rail app-cart-rail">
      <div class="app-section-head">
        <h2>${s(e)}</h2>
      </div>
      <div class="product-grid app-rail-grid">${t}</div>
    </section>
  `:""}function wi(e,t={}){const a=document.getElementById("cartExtras");if(!a)return;const r=S(t.subtotal??k.cartTotal),i=Math.min(100,r/qe*100),c=Math.max(0,qe-r),d=$a(),u=t.recommendedHtml||"",p=t.recentHtml||"";a.innerHTML=`
    <div class="app-cart-free-block">
      <div class="app-cart-free-head">
        <strong>${s(e("cart.freeToHome"))}</strong>
        ${r>=qe?`<span class="app-cart-free-done">${s(e("cart.freeShippingUnlocked"))}</span>`:`<span class="hint">${s(e("cart.freeShippingRemaining",{amount:D(c)}))}</span>`}
      </div>
      <div class="app-cart-free-bar"><div style="width:${i}%"></div></div>
    </div>
    ${Na(e("home.recommended"),u)}
    ${Na(e("home.recentlyViewed"),p)}
    ${d.length?`
      <section class="app-cart-saved">
        <h3>${s(e("cart.savedForLater"))}</h3>
        ${d.map(h=>`
          <div class="app-cart-saved-item">
            <img src="${s(h.image)}" alt="" loading="lazy" />
            <div>
              <strong>${s(h.name)}</strong>
              <p>${D(h.unitPrice)}</p>
              <button class="cart-save-later" data-restore-saved="${s(h.id)}" type="button">${s(e("cart.moveToCart"))}</button>
            </div>
          </div>
        `).join("")}
      </section>
    `:""}
    <div class="cart-coupon app-cart-coupon">
      <input type="text" id="cartCouponInput" placeholder="${s(e("cart.couponPlaceholder"))}" value="${s(k.cartCoupon||"")}" />
      <button class="secondary-button" type="button" data-apply-coupon>${s(e("cart.applyCoupon"))}</button>
    </div>
  `}function ki(e){const t=Date.now(),a=Math.max(0,e-t),r=Math.floor(a/36e5),i=Math.floor(a%36e5/6e4),c=Math.floor(a%6e4/1e3),d=u=>String(u).padStart(2,"0");return`
    <div class="flash-countdown" aria-live="polite">
      <div class="flash-countdown-unit"><strong>${d(r)}</strong><span>HRS</span></div>
      <div class="flash-countdown-unit"><strong>${d(i)}</strong><span>MIN</span></div>
      <div class="flash-countdown-unit"><strong>${d(c)}</strong><span>SEC</span></div>
    </div>
  `}function Si(e,t,a,r){return`
    <div class="brand-hero">
      <p class="eyebrow">${s(a("brand.official"))}</p>
      <h1>${s(e)}</h1>
      <p class="hint">${s(a("brand.story"))}</p>
    </div>
    <section class="personalization-strip">
      <div class="section-head"><h2>${s(a("brand.popular"))}</h2></div>
      <div class="product-grid">${r}</div>
    </section>
  `}const Pa=(e,t={})=>I(e,{...t,showError:!1}),Ci=e=>Pa("/events/impression",{method:"POST",body:JSON.stringify(e)}),$i=e=>Pa("/events/click",{method:"POST",query:{productId:e}}),Pi=e=>Pa("/events/view",{method:"POST",query:{productId:e}}),qt={isTrackableProduct(e){return!!e&&!String(e).startsWith("demo-")},impressionKey(e,t,a){return`${e}:${t}:${a}`},shouldSendImpression(e,t,a,r){if(!this.isTrackableProduct(r))return!1;const i=this.impressionKey(t,a,r);return e.has(i)?!1:(e.add(i),!0)},sendImpression({productId:e,screen:t,position:a,sessionId:r,queryText:i}){return Ci({productId:Number(e),screen:t,position:a,queryText:i||null,sessionId:r}).catch(()=>{})},sendProductClick(e){this.isTrackableProduct(e)&&$i(e).catch(()=>{})},sendProductView(e){this.isTrackableProduct(e)&&Pi(e).catch(()=>{})}};function Fa(e,t,a){qt.shouldSendImpression(m.impressionsSent,m.sessionId,t||"home",e)&&qt.sendImpression({productId:e,screen:t||"home",position:a,sessionId:m.sessionId,queryText:m.currentSearchQuery})}function At(e){qt.sendProductClick(e)}function Ii(e){qt.sendProductView(e)}function $r(e){if(!("IntersectionObserver"in window)){e.querySelectorAll("[data-product]").forEach(t=>{Fa(t.dataset.product,t.dataset.screen||"home",Number(t.dataset.position||0))});return}m.impressionObserver||(m.impressionObserver=new IntersectionObserver(t=>{t.forEach(a=>{if(!a.isIntersecting)return;const r=a.target;Fa(r.dataset.product,r.dataset.screen||"home",Number(r.dataset.position||0)),m.impressionObserver.unobserve(r)})},{threshold:.35})),e.querySelectorAll("[data-product]").forEach(t=>m.impressionObserver.observe(t))}function Ei(){return{favoritesTitle:n("favorites.title"),todayOnly:n("home.todayOnly"),lowStock:n("product.lowStock"),outOfStock:n("product.outOfStock"),freeShipping:n("product.freeShipping"),quickView:n("product.quickView"),compare:n("product.compare"),adding:n("product.adding"),addToCart:n("product.addToCart"),viewDetails:n("product.viewDetails")}}function Ze(e,t={}){const a=Ei();return a.sold=n("product.sold",{count:e.soldCount}),Ks({product:e,screen:t.screen||m.currentGridScreen||"home",position:t.position??0,isFavorite:P.favoriteIds.has(String(e.id))||!!e.favorite,isCompared:Xe().includes(String(e.id)),isAdding:k.addingProductIds.has(String(e.id)),labels:a})}function Ke(e,t=12){Js(e,t)}function ve(e,t,a=n("home.showAll")){wr(e,{message:t,actionLabel:a})}function te(e,t,a,r={}){var c;Ws(e,{products:t,emptyMessage:a,emptyActionLabel:n("home.showAll"),renderCard:(d,u)=>Ze(d,{...r,position:u})})&&($r(e),ke(e),ra(e,((c=l.filters)==null?void 0:c.viewMode)||"grid"))}function ue(e,t,a={}){mi(e),zt(n),Mt(n);const r=gi();te(o.grid,r,t,a);const i=document.getElementById("sortSelect");i&&i.value!==l.filters.sort&&(i.value=l.filters.sort)}function za(e,t){e&&(e.hidden=!t)}function _e(){za(o.productsMode,l.demoProducts),za(o.dealsMode,l.demoDeals)}function Ai(e){P.favoriteProducts=e.filter(t=>t.id!==void 0&&t.id!==null),P.favoriteIds=new Set(P.favoriteProducts.map(t=>String(t.id))),P.favoritesCount=P.favoriteProducts.length,be()}function sa(){P.favoriteProducts=[],P.favoriteIds=new Set,P.favoritesLoading=!1,P.favoritesError="",P.favoritesCount=0,be()}function be(){var e;l.products=l.products.map(t=>({...t,favorite:P.favoriteIds.has(String(t.id))})),l.todayDeals=l.todayDeals.map(t=>({...t,favorite:P.favoriteIds.has(String(t.id))})),((e=l.selectedDetailProduct)==null?void 0:e.id)!==void 0&&(l.selectedDetailProduct={...l.selectedDetailProduct,favorite:P.favoriteIds.has(String(l.selectedDetailProduct.id))})}function Li({banners:e=[]}){return e.length?`
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
  `:""}function Ti({announcements:e=[],limit:t=3}){return e.slice(0,t).map(a=>`
    <article class="announcement-item ${a.type.toLowerCase()}">
      <strong>${s(a.title||a.type)}</strong>
      <span>${s(a.message)}</span>
    </article>
  `).join("")}const Pr={search(e,t){return ne.search(e,t)},loadByCategory(e,t){return ne.loadByCategory(e,t)}};function Di({category:e,label:t,active:a=!1}){return`
    <button class="chip ${a?"active":""}" data-category="${s(e)}" type="button">
      ${s(t)}
    </button>
  `}function Ri({categories:e,selectedCategory:t,labelFor:a}){return e.map(r=>Di({category:r,label:a(r),active:t===r})).join("")}const Mi=["SNAIL CREAM","COSRX","SUNSCREEN","LIP TINT","VITAMIN C","COLLAGEN"],se={renderCategories(){const e=["ALL",...l.categories];o.categoryToolbar.innerHTML=Ri({categories:e,selectedCategory:l.selectedCategory,labelFor:t=>t==="ALL"?n("home.all"):ge(t)}),se.renderCatalogList(),se.renderQuickCategories()},renderCatalogList(){const e=["ALL",...l.categories];o.catalogList.innerHTML=e.map(t=>`
      <button class="catalog-item ${l.selectedCategory===t?"active":""}" data-category="${s(t)}" type="button">
        <span>${s(t==="ALL"?n("home.showAll"):ge(t))}</span>
        <span>${t==="ALL"?"→":"›"}</span>
      </button>
    `).join("")},renderQuickCategories(){o.quickCategoryGrid.innerHTML=Ba.map(e=>`
      <button class="quick-card" data-category="${s(e.category)}" type="button">
        <span>${s(e.icon)}</span>
        ${s(ge(e.category))}
      </button>
    `).join(""),se.renderMegaMenu(),se.renderPopularSearches(),se.renderMobileNav()},renderPopularSearches(){const e=document.getElementById("popularSearchesChips");e&&(e.innerHTML=Mi.map(t=>`
      <button class="search-chip" type="button" data-search-chip="${s(t)}" data-chip-type="trending">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.3-4.3m1.3-5.2a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"/></svg>
        ${s(t)}
      </button>
    `).join(""))},renderMegaMenu(){const e=document.getElementById("megaMenuContent");if(!e)return;const t=[{title:n("home.categories"),items:l.categories.slice(0,8)},{title:n("home.quickCategories"),items:Ba.map(a=>a.category)}];e.innerHTML=t.map(a=>`
      <div class="mega-menu-group">
        <h3>${s(a.title)}</h3>
        ${a.items.map(r=>`
          <button type="button" data-category="${s(r)}">${s(ge(r))}</button>
        `).join("")}
      </div>
    `).join("")},renderMobileNav(){const e=document.getElementById("mobileNavLinks");if(!e)return;const t=[{id:"ordersButton",label:n("header.orders")},{id:"favoritesButton",label:n("favorites.title")},{id:"cartButton",label:n("cart.title")},{id:"loginButton",label:n("auth.login")}];e.innerHTML=`
      ${["ALL",...l.categories].map(a=>`
        <button class="mobile-nav-link" type="button" data-category="${s(a)}">
          ${s(a==="ALL"?n("home.all"):ge(a))}
        </button>
      `).join("")}
      ${t.map(a=>`<button class="mobile-nav-link" type="button" data-mobile-action="${s(a.id)}">${s(a.label)}</button>`).join("")}
    `},async loadMoreProducts(){if(l.feedLoading)return;l.feedLoading=!0,o.loadMore.disabled=!0,o.loadMore.textContent="Yuklanmoqda...";const{products:e,nextProducts:t,nextFeedPage:a}=await ne.loadMoreProducts({feedPage:l.feedPage,existingProducts:l.products});l.feedPage=a,l.products=e,be(),ue(l.products,"Mahsulot topilmadi.",{screen:m.currentGridScreen||"home"}),l.feedLoading=!1,o.loadMore.disabled=!1,o.loadMore.textContent=t.length?"Yana yuklash":"Boshqa mahsulot topilmadi"},async renderCategoryProducts(e,{showHomeView:t}={}){if(m.currentRoute==="product"&&(window.location.hash="#/",t==null||t()),l.selectedCategory=e,m.currentGridScreen=e==="ALL"?"home":"category",m.currentSearchQuery="",se.renderCategories(),e==="ALL"){o.title.textContent=n("home.popular"),await U.loadProducts();return}o.title.textContent=ge(e),o.status.textContent=n("home.loading"),Ke(o.grid,10);const a=await Pr.loadByCategory(e);l.products=a,be(),ue(l.products,n("home.noProducts"),{screen:"category"}),o.status.textContent=""}},qi=5e3;let Lt=null,ia=!1,ft=null,Ha=0;function Ht(){var e;return(e=o.banners)==null?void 0:e.querySelector(".banner-track")}function Ut(){return l.banners.length}function Ia(){const e=Ht();if(!e)return 0;const t=e.clientWidth||1;return Math.max(0,Math.min(Ut()-1,Math.round(e.scrollLeft/t)))}function Yt(){var t;const e=Ia();(t=o.banners)==null||t.querySelectorAll("[data-banner-dot]").forEach(a=>{const r=Number(a.dataset.bannerDot)===e;a.classList.toggle("active",r),a.setAttribute("aria-selected",r?"true":"false")})}function oa(e,t="smooth"){const a=Ht(),r=Ut();if(!a||!r)return;const i=(e%r+r)%r;a.scrollTo({left:i*a.clientWidth,behavior:t})}function Ir(){oa(Ia()+1)}function Ea(){Lt&&(clearInterval(Lt),Lt=null)}function na(){Ea(),!(ia||Ut()<=1)&&(Lt=setInterval(()=>Ir(),qi))}function Bi(){Ea();const e=Ht();e&&ft&&e.removeEventListener("scroll",ft),ft=null,o.banners&&(o.banners.onmouseenter=null,o.banners.onmouseleave=null)}function Oi(){Bi();const e=Ht();if(!e||Ut()<=1){Yt();return}ft=()=>{clearTimeout(Ha),Ha=setTimeout(Yt,80)},e.addEventListener("scroll",ft,{passive:!0}),o.banners.onmouseenter=()=>{ia=!0,Ea()},o.banners.onmouseleave=()=>{ia=!1,na()},Yt(),na()}function Ua(e){const t=document.querySelector(".hero-main");if(t){if(!e){t.style.removeProperty("--hero-campaign-image");return}t.style.setProperty("--hero-campaign-image",`url("${e}")`)}}const U={renderBanners(){var e;if(!l.banners.length){o.banners.hidden=!0,o.banners.innerHTML="",Ua("");return}o.banners.hidden=!1,o.banners.innerHTML=Li({banners:l.banners}),Ua(((e=l.banners[0])==null?void 0:e.imageUrl)||""),Oi()},renderAnnouncements(){if(!l.announcements.length){o.announcements.hidden=!0,o.announcements.innerHTML="";return}o.announcements.hidden=!1,o.announcements.innerHTML=Ti({announcements:l.announcements})},renderHomeApiSections(e){const t=e.hits||[],a=e.newArrivals||[],r=document.getElementById("personalizationSection"),i=document.getElementById("personalizationGrid");if(i){const d=t.length?t:l.products.slice(0,10);r&&(r.hidden=!d.length),d.length&&te(i,d.slice(0,10),n("home.noProducts"),{screen:"home-for-you"})}const c=document.getElementById("newArrivalsGrid");if(c){const d=a.length?a:l.products.slice(0,10);te(c,d.slice(0,10),n("home.noProducts"),{screen:"home-new"})}o.homeApiSections.hidden=!0,o.homeApiSections.innerHTML=""},renderPersonalizationSections(){var r,i;const e=document.getElementById("personalizationSection"),t=document.getElementById("personalizationGrid");if(!e||!t||t.children.length)return;const a=(i=(r=l.homeApiSections)==null?void 0:r.hits)!=null&&i.length?l.homeApiSections.hits:l.products.slice(0,10);e.hidden=!a.length,a.length&&te(t,a.slice(0,10),n("home.noProducts"),{screen:"home-for-you"})},async loadCategories(){const{categories:e,demoCategories:t}=await le.loadCategories();l.categories=e,l.demoCategories=t,_e(),se.renderCategories()},async loadBanners(){l.banners=await le.loadBanners(),U.renderBanners()},async loadAnnouncements(){l.announcements=await le.loadAnnouncements(),U.renderAnnouncements()},async loadRecentlyViewed(){if(!le.getRecentProductIds().length){l.recentlyViewed=[],o.recentlyViewedSection.hidden=!0;return}l.recentlyViewed=await le.loadRecentlyViewed();const t=l.recentlyViewed||[];if(!t.length){o.recentlyViewedSection.hidden=!0;return}o.recentlyViewedSection.hidden=!1,te(o.recentlyViewedGrid,t,"Recently viewed is empty.",{screen:"recent"})},async loadProducts(){try{o.status.textContent="Yuklanmoqda...",Ke(o.grid,12);const{products:e,demoProducts:t,failed:a}=await ne.loadProducts();e.length?(l.products=e,l.demoProducts=t,ue(l.products,"Mahsulot topilmadi.",{screen:m.currentGridScreen||"home"})):(l.products=[],l.demoProducts=t,ve(o.grid,a?"API data failed to load.":"Mahsulot topilmadi.")),be()}catch(e){console.error("[LOAD PRODUCTS FAILED]",e),l.demoProducts=!1,ve(o.grid,"API data failed to load.")}finally{_e(),o.status.textContent=""}},async loadTodayDeals(){try{o.dealsStatus.textContent="Yuklanmoqda...",Ke(o.dealsGrid,5);const{deals:e,demoDeals:t,failed:a}=await ne.loadTodayDeals();l.todayDeals=e,l.demoDeals=t,a?ve(o.dealsGrid,"API data failed to load."):te(o.dealsGrid,l.todayDeals.slice(0,8),"Mahsulot topilmadi."),be()}catch(e){console.error("[LOAD TODAY DEALS FAILED]",e),l.demoDeals=!1,ve(o.dealsGrid,"API data failed to load.")}finally{_e(),o.dealsStatus.textContent=""}},async loadHomeApi(){const e=await le.loadHomeApiData({limit:10,page:0,size:20});if(!e.loaded)return l.homeLoadedFromApi=!1,o.homeApiSections.hidden=!0,!1;const{hits:t,discounts:a,newArrivals:r,products:i,todayDeals:c,homeApiSections:d}=e;return l.homeLoadedFromApi=!0,l.products=i,l.todayDeals=c,l.demoProducts=!1,l.demoDeals=!1,be(),l.homeApiSections=d,U.renderHomeApiSections({hits:t,discounts:a,newArrivals:r}),ue(l.products,n("home.noProducts"),{screen:"home"}),te(o.dealsGrid,a.slice(0,8),"Chegirmalar topilmadi.",{screen:"home-discounts"}),o.status.textContent="",o.dealsStatus.textContent="",_e(),!0},async load({loadCart:e}={}){var t,a,r;l.selectedCategory="ALL",m.currentSearchQuery="",m.currentGridScreen="home",l.feedPage=0,o.title.textContent=n("home.recommended"),o.status.textContent=n("home.loading"),Ke(o.grid,12),Ke(o.dealsGrid,6);try{await Promise.all([U.loadCategories(),U.loadBanners(),U.loadAnnouncements()]),await U.loadHomeApi()||(await Promise.all([U.loadProducts(),U.loadTodayDeals()]),U.renderHomeApiSections({hits:l.products.slice(0,12),discounts:l.todayDeals.slice(0,10),newArrivals:l.products.slice(6,18)})),await U.loadRecentlyViewed(),U.renderPersonalizationSections(),e&&await e()}catch(i){console.error("Home loading failed:",i),l.demoProducts=!1,l.demoDeals=!1,ve(o.grid,n("common.serverFailed"),n("common.tryAgain"))}finally{((t=o.status)==null?void 0:t.textContent)===n("home.loading")&&(o.status.textContent=""),(((a=o.dealsStatus)==null?void 0:a.textContent)===n("home.loading")||((r=o.dealsStatus)==null?void 0:r.textContent)==="Yuklanmoqda...")&&(o.dealsStatus.textContent="")}},prevBanner(){oa(Ia()-1)},nextBanner:Ir,scrollToBanner:oa,resetBannerAutoSlide:na},xi=()=>I("/api/cart",{requireAuth:!0,showError:!1}),Ni=e=>I("/api/cart",{method:"POST",body:JSON.stringify(e),requireAuth:!0}),Fi=(e,t)=>I(`/api/cart/${e}`,{method:"PUT",body:JSON.stringify(t),requireAuth:!0}),zi=e=>I(`/api/cart/${e}`,{method:"DELETE",requireAuth:!0});function ca(e=m.lastApiError){return e.includes("Session expired")||e==="Please login to continue"}function Pe(e){return{success:!1,sessionExpired:ca(),error:m.lastApiError||e}}function Hi(e){return e.reduce((t,a)=>{var i;const r=S((i=a.product)==null?void 0:i.originalPrice);return r>a.unitPrice?t+(r-a.unitPrice)*a.quantity:t},0)}function Va(e,t,a=0,{checkout:r=!1}={}){const i=e.filter(g=>t.has(String(g.id))),c=i.reduce((g,y)=>g+y.lineTotal,0),d=Hi(i),u=!i.length||c>=qe?0:pi,p=Math.max(0,c+u-a),h=i.reduce((g,y)=>g+y.quantity,0);return r?{items:i,subtotal:c,deliveryFee:u,discount:d+a,catalogDiscount:d,couponDiscount:a,total:p,itemCount:h}:{items:i,subtotal:c,discount:d,deliveryFee:u,couponDiscount:a,total:p,itemCount:h,uniqueCount:i.length}}const de={async loadCart(){const e=await xi();return e===null?Pe("Cart could not be loaded."):{success:!0,items:x(e).map(Ts)}},syncSelection(e,t,a){const r=t||new Set,i=e.map(u=>String(u.id)),c=new Set(i),d=a||new Set;return[...r].forEach(u=>{c.has(u)||r.delete(u)}),i.forEach(u=>{d.has(u)||r.add(u)}),i.length&&!r.size&&!d.size&&i.forEach(u=>r.add(u)),{selectedIds:r,knownItemIds:new Set(i)}},getSelectedItems(e,t){return e.filter(a=>t.has(String(a.id)))},calculateTotals(e,t,a=0){return Va(e,t,a)},calculateCheckoutTotals(e,t,a=0){return Va(e,t,a,{checkout:!0})},async addItem(e,t){return Ni({variantId:Number(e),quantity:Math.max(1,Number(t||1))})},async updateQuantity(e,t){return Fi(e,{quantity:Math.max(1,Number(t||1))})},async removeItem(e){return zi(e)},applyCoupon(e,t){const a=String(e||"").trim().toUpperCase();return a==="BEAUTY10"?{valid:!0,coupon:a,discount:Math.round(t*.1)}:a?{valid:!1,invalid:!0}:{valid:!1,invalid:!1}}};function Ui({item:e,selected:t=!1,loading:a=!1,labels:r={}}){const i=e.product||{},c=e.image||i.image||C.placeholderImage,d=S(i.originalPrice)*e.quantity,u=i.originalPrice>e.unitPrice,p=[e.variantLabel,i.brand?`(${i.brand})`:""].filter(Boolean).join(" "),{selectItem:h="Select item",remove:g="Remove",shipsToday:y="Ships today"}=r;return`
    <article class="app-cart-item ${a?"loading":""}">
      <label class="app-cart-check" title="${s(h)}">
        <input
          type="checkbox"
          data-cart-item-check="${s(e.id)}"
          ${t?"checked":""}
          aria-label="${s(h)}: ${s(e.name)}"
        />
        <span class="app-cart-check-ui ${t?"is-checked":""}" aria-hidden="true"></span>
      </label>
      <div class="app-cart-item-body">
        <button class="app-cart-item-remove" data-remove="${s(e.id)}" type="button" aria-label="${s(g)}">×</button>
        <div class="app-cart-item-main">
          <img src="${s(c)}" alt="${s(e.name)}" loading="eager" decoding="async" class="app-cart-item-image" />
          <div class="app-cart-item-info">
            <h3>${s(e.name)}</h3>
            ${p?`<p class="app-cart-variant">${s(p)}</p>`:""}
            <p class="app-cart-ship">${s(y)}</p>
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
  `}function Vi({totals:e,labels:t={}}){const{yourOrder:a="Your order",goodsCount:r="",discount:i="Discount",deliveryCost:c="Delivery",freeDelivery:d="Free",products:u="Products",total:p="Total"}=t;return`
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
  `}function ji({title:e,hint:t="",actionLabel:a="",actionAttrs:r='data-start-shopping type="button"'}){return`
    <div class="cart-empty app-cart-empty">
      <strong>${s(e)}</strong>
      ${t?`<p>${s(t)}</p>`:""}
      ${a?`<button class="primary-button" ${r}>${s(a)}</button>`:""}
    </div>
  `}function Ki({title:e,message:t,retryLabel:a="Try again"}){return`
    <div class="cart-empty app-cart-empty">
      <strong>${s(e)}</strong>
      <p>${s(t)}</p>
      <button class="secondary-button" data-cart-retry type="button">${s(a)}</button>
    </div>
  `}function St(){return k.cartSelectedIds||(k.cartSelectedIds=new Set),k.cartSelectedIds}function Aa(){const{selectedIds:e,knownItemIds:t}=de.syncSelection(k.cartItems,St(),k.cartKnownItemIds);k.cartSelectedIds=e,k.cartKnownItemIds=t}function Er(){var d,u;const e=(d=o.cartItems)==null?void 0:d.querySelector("[data-cart-select-all]");if(!e)return;const t=Ar().length,a=k.cartItems.length,r=a>0&&t===a,i=t>0&&t<a;e.checked=r,e.indeterminate=i;const c=((u=e.closest(".app-cart-check"))==null?void 0:u.querySelector(".app-cart-check-ui"))||e.nextElementSibling;c!=null&&c.classList.contains("app-cart-check-ui")&&(c.classList.toggle("is-indeterminate",i),c.classList.toggle("is-checked",r))}function Ar(){return Aa(),de.getSelectedItems(k.cartItems,St())}function Lr(){return de.calculateTotals(k.cartItems,St(),k.cartCouponDiscount||0)}function Tr(e){return Ui({item:e,selected:St().has(String(e.id)),loading:k.cartUpdatingIds.has(String(e.id)),labels:{selectItem:n("cart.selectItem"),remove:n("cart.remove"),shipsToday:n("cart.shipsToday")}})}function pt(e){const t=o.cartStickyProgress;if(!t)return;const a=Math.min(100,e/qe*100),r=Math.max(0,qe-e);t.innerHTML=e>=qe?"":`
    <div class="app-cart-free-banner">
      <span>${s(n("cart.freeToHome"))}</span>
      <div class="app-cart-free-bar"><div style="width:${a}%"></div></div>
      <span class="hint">${s(n("cart.freeShippingRemaining",{amount:D(r)}))}</span>
    </div>
  `}function _i(){l.products.length&&te(o.grid,l.products,n("home.noProducts"),{screen:m.currentGridScreen})}function ja(){Aa();const e=Lr();if(o.cartCount.textContent=k.cartCount,o.cartSummary.textContent=n("orders.items",{count:e.itemCount}),o.cartTotal.textContent=D(e.subtotal),k.cartLoading){o.cartItems.innerHTML='<div class="cart-loading app-cart-loading"><div class="skeleton-card"></div><div class="skeleton-card"></div></div>',o.checkoutButton.disabled=!0,o.cartExtras&&(o.cartExtras.innerHTML=""),pt(0);return}if(k.cartError){o.cartItems.innerHTML=Ki({title:n("cart.unavailable"),message:k.cartError,retryLabel:n("common.tryAgain")}),o.checkoutButton.disabled=!0,o.cartExtras&&(o.cartExtras.innerHTML=""),pt(0);return}o.checkoutButton.disabled=!e.items.length;const t=l.products.slice(0,8).map((u,p)=>Ze(u,{screen:"cart-cross",position:p})).join(""),a=(l.recentlyViewed||[]).slice(0,6).map((u,p)=>Ze(u,{screen:"cart-recent",position:p})).join("");if(wi(n,{recommendedHtml:t,recentHtml:a,subtotal:e.subtotal}),!k.cartItems.length){o.cartItems.innerHTML=ji({title:n("cart.empty"),hint:n("cart.emptyHint"),actionLabel:n("home.startShopping")}),pt(0);return}const r=e.uniqueCount,i=k.cartItems.length,c=i>0&&r===i,d=r>0&&r<i;o.cartItems.innerHTML=`
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
      ${k.cartItems.map(u=>Tr(u)).join("")}
    </div>
    ${Vi({totals:e,labels:{yourOrder:n("cart.yourOrder"),goodsCount:n("cart.goodsCount",{count:e.itemCount}),discount:n("cart.discount"),deliveryCost:n("cart.deliveryCost"),freeDelivery:n("cart.freeDelivery"),products:n("cart.products"),total:n("common.total")}})}
  `,Er(),pt(e.subtotal),ke(o.cartItems),ke(o.cartExtras)}const N={render:ja,renderCart:ja,renderCartItemRow:Tr,renderCartStickyProgress:pt,renderAddToCartLoading:_i,getSelectedCartItems:Ar,getCartTotals:Lr,getCartSelectedIds:St,syncCartSelection:Aa,applyCartCheckboxUi:Er},wt=(e={})=>I("/api/users/me",{requireAuth:!0,showError:!1,...e}),Gi=(e,t={})=>I("/api/users/me",{method:"PUT",body:JSON.stringify(e),requireAuth:!0,showError:!1,...t}),La=()=>I("/api/orders",{requireAuth:!0,showError:!1}),Qt=e=>I(`/api/orders/${e}`,{requireAuth:!0,showError:!1}),Wi=e=>I(`/api/orders/${e}/history`,{requireAuth:!0,showError:!1}),Yi=(e,t={})=>I("/api/orders",{method:"POST",body:JSON.stringify(e),requireAuth:!0,showError:!1,...t}),Qi=()=>I("/api/health",{showError:!1}),me={orderStatusModifier(e=""){const t=String(e||"").toUpperCase();return t==="DELIVERED"?"delivered":t==="CANCELED"||t==="CANCELLED"?"canceled":t==="SHIPPED"?"shipped":"pending"},getItemCount(e={}){const t=Array.isArray(e.items)?e.items:[];return t.length?t.reduce((a,r)=>a+(Number(r.quantity)||1),0):Number(e.itemCount)||0},getLineCount(e={}){return(Array.isArray(e.items)?e.items:[]).length||Number(e.itemCount)||0},isProfileActiveOrder(e){const t=String((e==null?void 0:e.status)||"").toUpperCase();return!!t&&!["DELIVERED","CANCELED","CANCELLED"].includes(t)},async enrichOrdersList(e=[]){const t=e.filter(r=>!Array.isArray(r.items)||!r.items.length);if(!t.length)return e;const a=new Map;return await Promise.all(t.slice(0,30).map(async r=>{const i=await Qt(r.id);i&&typeof i=="object"&&a.set(String(r.id),i)})),e.map(r=>a.get(String(r.id))||r)},async enrichProfileOrders(e=[]){const t=e.slice(0,2);return t.length?[...await Promise.all(t.map(async r=>{if(Array.isArray(r.items)&&r.items.length)return r;const i=await Qt(r.id);return i&&typeof i=="object"?i:r})),...e.slice(2)]:e},async loadOrders(){const e=await La();return e===null?Pe("Orders could not be loaded."):{success:!0,orders:await this.enrichOrdersList(x(e))}},async loadOrderDetail(e){const[t,a]=await Promise.all([Qt(e),Wi(e)]);return t===null?{success:!1,error:Pe("Order detail could not be loaded.").error}:{success:!0,order:t,history:a===null?[]:x(a),historyWarning:a===null?"Status history could not be loaded.":""}},async createOrder(e,t={}){const a=await Yi(e,{timeoutMs:25e3,...t});return a===null?Pe("Order could not be created."):{success:!0,order:a}},buildSuccessState(){return{checkoutConfirmOpen:!1,orderSuccess:null,checkoutError:"",orderSubmitting:!1}}},Ji=e=>I(`/api/reviews/product/${e}`,{showError:!1}),Zi=()=>I("/api/reviews/my",{requireAuth:!0,showError:!1}),Xi=e=>I("/api/reviews",{method:"POST",body:JSON.stringify(e),requireAuth:!0,showError:!1}),eo=e=>I("/api/uploads/presign",{method:"POST",requireAuth:!0,showError:!1,body:JSON.stringify(e)}),Ee={reviewStats(e){const t=e.length,a=t?e.reduce((r,i)=>r+S(i.rating),0)/t:0;return{count:t,average:a}},async loadProductReviews(e){const t=await Ji(e);return t===null?{reviews:null,error:m.lastApiError||"Reviews could not be loaded."}:{reviews:x(t).map(fr)}},async loadMyReviews(){const e=await Zi();return e===null?Pe("Reviews could not be loaded."):{success:!0,items:Ns(e).map(xs)}},parseReviewImageUrls(e){return String(e||"").split(/[\n,]+/).map(t=>t.trim()).filter(Boolean).slice(0,5)},validateReviewFiles(e){const t=new Set(["image/jpeg","image/png","image/webp"]),a=Array.from(e||[]);return a.length>5?{error:"Maximum 5 image files allowed.",files:[]}:a.find(c=>!t.has(c.type))?{error:"Only JPG, PNG and WEBP images are allowed.",files:[]}:a.find(c=>c.size>10*1024*1024)?{error:"Each image must be 10MB or smaller.",files:[]}:{files:a}},validateSubmitReview({productId:e,orderId:t,rating:a,content:r,manualImageUrlsText:i,files:c}){const d=[];(!e||!t)&&d.push("Product and order are required."),(a<1||a>5)&&d.push("Choose a rating from 1 to 5."),r||d.push("Review text is required.");const u=this.parseReviewImageUrls(i),p=this.validateReviewFiles(c);return p.error&&d.push(p.error),String(i||"").split(/[\n,]+/).filter(h=>h.trim()).length>5&&d.push("Maximum 5 image URLs allowed."),u.length+p.files.length>5&&d.push("Maximum 5 review images allowed."),{valid:d.length===0,errors:d,manualImageUrls:u,fileValidation:p}},async uploadReviewImages(e,{onProgress:t}={}){const a=[];for(let r=0;r<e.length;r+=1){const i=e[r];t==null||t(`Uploading image ${r+1} of ${e.length}...`,{index:r,total:e.length});const c=await eo({fileName:i.name,contentType:i.type,folder:"reviews",fileSizeBytes:i.size});if(!(c!=null&&c.uploadUrl)||!(c!=null&&c.publicUrl))throw new Error(m.lastApiError||"Image upload could not be prepared.");const d=await fetch(c.uploadUrl,{method:"PUT",headers:{"Content-Type":i.type},body:i});if(!d.ok)throw new Error(`Image upload failed: HTTP ${d.status}`);a.push(c.publicUrl)}return t==null||t(a.length?"Images uploaded.":"",{done:!0}),a},async submitReview({productId:e,orderId:t,rating:a,content:r,imageUrls:i}){const c=await Xi({productId:Number(e),orderId:Number(t),rating:Number(a),content:r,imageUrls:i});return c===null?Pe("Review could not be submitted."):{success:!0,response:c}}},Me={getOrderPreview(e){return(e||[]).filter(t=>me.isProfileActiveOrder(t)).slice(0,2)},async loadSnapshot(){const[e,t,a,r]=await Promise.all([wt(),La(),Ee.loadMyReviews(),le.loadRecentlyViewed()]);return{userResponse:e,ordersResponse:t,reviewsResult:a,recentlyViewed:r}},async enrichProfileOrders(e){return me.enrichProfileOrders(e)},normalizeOrdersResponse(e){return e!==null?x(e):null},validateProfileUpdate({fullName:e,phone:t}){return!e||!t?{valid:!1,error:"Full name va phone majburiy."}:{valid:!0}},async updateProfile(e){return await Gi(e)===null?{success:!1,error:m.lastApiError||"Profile yangilanmadi."}:{success:!0,user:await wt()||null}},async checkHealth(){return Qi()}};function $t({action:e,icon:t,label:a,value:r=""}){const i=r!==""&&r!==null&&r!==void 0?`<strong class="app-profile-stat-value">${s(String(r))}</strong>`:"";return`
    <button class="app-profile-stat" type="button" data-profile-action="${s(e)}">
      <span class="app-profile-stat-icon app-profile-stat-icon--${s(e)}">${t}</span>
      <span class="app-profile-stat-label">${s(a)}</span>
      ${i}
    </button>
  `}function ze({action:e,icon:t,label:a,trailing:r=""}){return`
    <button class="app-profile-menu-row" type="button" data-profile-action="${s(e)}">
      <span class="app-profile-menu-icon" aria-hidden="true">${t}</span>
      <span class="app-profile-menu-label">${s(a)}</span>
      ${r?`<span class="app-profile-menu-trailing">${r}</span>`:""}
      <svg class="app-profile-menu-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>
    </button>
  `}function to({imageUrl:e="",name:t="Profile"}){return e?`<img class="app-profile-avatar" src="${s(e)}" alt="${s(t)}" loading="eager" decoding="async" />`:`
    <div class="app-profile-avatar app-profile-avatar--placeholder" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M20 21a8 8 0 1 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/></svg>
    </div>
  `}function ao({count:e=0,className:t="app-profile-notify-badge"}){if(e<=0)return"";const a=e>99?"99+":String(e);return`<span class="${s(t)}">${s(a)}</span>`}function Dr(e=""){return n(`status.${e}`)||e||n("common.unknown")}function Rr(e=""){const t=String(e||"").toUpperCase();return t==="NEW"||t==="CONFIRMED"||t==="PACKED"?n("status.PENDING"):Dr(e)}function ro(){const e=he(),t={uz:"O'zbek",en:"English",ru:"Русский",ko:"한국어"};return t[e]||t.en}function so(e){const t=(Array.isArray(e.items)?e.items:[]).map(i=>wa({...i,orderId:e.id})),a=t.slice(0,4).map(i=>`
    <img src="${s(i.image||C.placeholderImage)}" alt="" loading="eager" decoding="async" class="app-profile-order-thumb" />
  `).join(""),r=t.length>4?`<span class="app-profile-order-more">+${t.length-4}</span>`:"";return`
    <button class="app-profile-order-card" type="button" data-profile-order="${s(e.id)}">
      <span class="app-profile-order-status">${s(Rr(e.status))}</span>
      <div class="app-profile-order-thumbs">${a||`<span class="app-profile-order-empty">${s(n("orders.items",{count:0}))}</span>`}${r}</div>
    </button>
  `}function io(e){return`
    <form class="app-profile-edit profile-edit" id="profileEditForm">
      <h3>${s(n("profile.edit"))}</h3>
      <label>Email<input value="${s(e.email||"")}" readonly /></label>
      <label>${s(n("profile.fullName"))}<input id="profileFullName" value="${s(e.fullName||"")}" required /></label>
      <label>${s(n("profile.phone"))}<input id="profilePhone" value="${s(e.phone||"")}" required /></label>
      <label>${s(n("profile.imageUrl"))}<input id="profileImage" value="${s(e.profileImage||"")}" /></label>
      <button class="primary-button full" id="profileSaveButton" type="submit">${s(n("profile.save"))}</button>
      <p class="form-message" id="profileMessage"></p>
    </form>
  `}const ie={render(){var y,A;const e=$.user||{},t=to({imageUrl:e.profileImage,name:e.fullName||"Profile"}),a=((y=m.orders)==null?void 0:y.length)||0,r=((A=l.myReviews)==null?void 0:A.length)||0,i=k.cartCoupon?1:0,d=(l.recentlyViewed||[]).slice(0,6).map((T,B)=>Ze(T,{screen:"profile-recent",position:B})).join(""),u=Me.getOrderPreview(m.orders),p=ao({count:q.unreadCount}),h={orders:'<svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>',reviews:'<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',coupons:'<svg viewBox="0 0 24 24"><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"/><path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4z"/><path d="M12 8v8"/></svg>',feedback:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>'},g={promotions:'<svg viewBox="0 0 24 24"><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"/><path d="M12 3 20 8v4H4V8z"/></svg>',help:'<svg viewBox="0 0 24 24"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3z"/><path d="M14 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3z"/><path d="M8.5 11V7a3.5 3.5 0 1 1 7 0v4"/></svg>',news:'<svg viewBox="0 0 24 24"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11 6v12"/></svg>',language:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',privacy:'<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',terms:'<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>'};o.profileContent.innerHTML=`
      <div class="app-profile-page ${$.profileLoading?"is-loading":""}">
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
          ${$t({action:"orders",icon:h.orders,label:n("profile.ordersStat"),value:a})}
          ${$t({action:"reviews",icon:h.reviews,label:n("profile.reviewsStat"),value:r})}
          ${$t({action:"promotions",icon:h.coupons,label:n("profile.couponsStat"),value:i})}
          ${$t({action:"help",icon:h.feedback,label:n("profile.feedbackStat"),value:""})}
        </section>

        <section class="app-profile-section">
          <div class="app-profile-section-head">
            <h3>${s(n("profile.myOrders"))}</h3>
            <button class="app-profile-see-all" type="button" data-profile-action="orders">${s(n("profile.seeAll"))} ›</button>
          </div>
          <div class="app-profile-orders-rail">
            ${$.profileLoading&&!u.length?'<div class="app-profile-order-card skeleton-card"></div><div class="app-profile-order-card skeleton-card"></div>':u.length?u.map(T=>so(T)).join(""):`<div class="app-profile-empty-block">${s(n("orders.none"))}</div>`}
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
          ${ze({action:"promotions",icon:g.promotions,label:n("profile.promotions")})}
          ${ze({action:"help",icon:g.help,label:n("profile.help")})}
          ${ze({action:"news",icon:g.news,label:n("profile.news")})}
          ${ze({action:"language",icon:g.language,label:n("profile.language"),trailing:`<span>${s(ro())}</span>`})}
          ${ze({action:"privacy",icon:g.privacy,label:n("profile.privacy")})}
          ${ze({action:"terms",icon:g.terms,label:n("profile.terms")})}
        </nav>

        ${$.profileEditing?io(e):""}
        ${$.profileMenuOpen?`
          <div class="app-profile-menu-sheet open" id="profileMenuSheet">
            <button class="app-profile-menu-row" type="button" data-profile-action="edit">${s(n("profile.edit"))}</button>
            <button class="app-profile-menu-row app-profile-menu-row--danger" type="button" data-profile-action="logout">${s(n("profile.logout"))}</button>
          </div>
        `:""}
      </div>
    `,ke(o.profileContent)},async loadSnapshot({isLoggedIn:e,loadUnreadCount:t,updateAuthUi:a}={}){if(!(e!=null&&e()))return;const r=++$.profileLoadSeq;$.profileLoading=!0,ie.render();try{const[i]=await Promise.all([Me.loadSnapshot(),t==null?void 0:t()]),{userResponse:c,ordersResponse:d,reviewsResult:u,recentlyViewed:p}=i;if(r!==$.profileLoadSeq||(c&&($.user=c,localStorage.setItem(C.storageKeys.user,JSON.stringify(c)),a==null||a()),d!==null&&(m.orders=Me.normalizeOrdersResponse(d),$.profileLoading=!1,ie.render(),m.orders=await Me.enrichProfileOrders(m.orders),r!==$.profileLoadSeq)))return;u.success&&(l.myReviews=u.items),p.length&&(l.recentlyViewed=p)}catch{}finally{r===$.profileLoadSeq&&($.profileLoading=!1,o.profileDrawer.classList.contains("open")&&ie.render())}},async handleAction(e,t={}){var c,d,u,p,h,g,y,A,T,B,E,O,L,H,ee,Te,et,tt,at,rt,st,it,ot,nt,ct,lt;const a=e.target.closest("[data-profile-order]");if(a){(c=t.closeProfile)==null||c.call(t),await((d=t.showOrders)==null?void 0:d.call(t)),await((u=t.openOrderDetail)==null?void 0:u.call(t,a.dataset.profileOrder));return}const r=e.target.closest("[data-profile-action]");if(!r)return;const i=r.dataset.profileAction;if(i==="menu"){$.profileMenuOpen=!$.profileMenuOpen,ie.render();return}if(i==="edit"){$.profileMenuOpen=!1,$.profileEditing=!$.profileEditing,ie.render();return}if(i==="logout"){$.profileMenuOpen=!1,(p=t.clearAuth)==null||p.call(t),(h=t.closeProfile)==null||h.call(t),(g=t.showToast)==null||g.call(t,n("profile.loggedOut"));return}if(i==="orders"){(y=t.closeProfile)==null||y.call(t),await((A=t.showOrders)==null?void 0:A.call(t));return}if(i==="favorites"){(T=t.closeProfile)==null||T.call(t),await((B=t.openFavorites)==null?void 0:B.call(t));return}if(i==="reviews"){(E=t.closeProfile)==null||E.call(t),await((O=t.openMyReviews)==null?void 0:O.call(t));return}if(i==="notifications"){(L=t.closeProfile)==null||L.call(t),await((H=t.openNotifications)==null?void 0:H.call(t));return}if(i==="language"){const Ne=va,Ct=Ne.indexOf(he()),w=Ne[(Ct+1)%Ne.length];(ee=t.setLanguage)==null||ee.call(t,w),o.languageSelect&&(o.languageSelect.value=w),(Te=t.applyTranslations)==null||Te.call(t),ie.render();return}if(i==="privacy"){$.profileMenuOpen=!1,(et=t.closeProfile)==null||et.call(t),(tt=t.openPrivacy)==null||tt.call(t);return}if(i==="terms"){$.profileMenuOpen=!1,(at=t.closeProfile)==null||at.call(t),(rt=t.openTerms)==null||rt.call(t);return}if(i==="promotions"||i==="news"){(st=t.showToast)==null||st.call(t,n("profile.comingSoon"),"info");return}if(i==="help"){$.profileMenuOpen=!1,(it=t.closeProfile)==null||it.call(t),(ot=t.openSupport)==null||ot.call(t);return}if(i==="addresses"||i==="receivers"){(nt=t.closeProfile)==null||nt.call(t),await((ct=t.prepareCheckout)==null?void 0:ct.call(t));return}(lt=t.showToast)==null||lt.call(t,n("profile.comingSoon"),"info")}},oo=e=>I("/api/auth/login",{method:"POST",body:JSON.stringify(e),showError:!1,silentAuth:!0}),no=e=>I("/api/auth/register",{method:"POST",body:JSON.stringify(e),showError:!1,silentAuth:!0}),co=e=>I("/api/auth/firebase",{method:"POST",body:JSON.stringify(e),showError:!1,silentAuth:!0}),j={getAccessToken(e){if(!e||typeof e!="object")return"";const t=e.data&&typeof e.data=="object"?e.data:null;return e.accessToken||(t==null?void 0:t.accessToken)||e.token||(t==null?void 0:t.token)||e.jwt||(t==null?void 0:t.jwt)||""},extractSession(e,{email:t=""}={}){var u,p,h,g,y,A;const a=e!=null&&e.data&&typeof e.data=="object"?{...e,...e.data}:e||{},r=this.getAccessToken(e),i={id:a.id??a.userId??((u=a.user)==null?void 0:u.id)??null,email:a.email||((p=a.user)==null?void 0:p.email)||t||"",fullName:a.fullName||((h=a.user)==null?void 0:h.fullName)||a.name||"",phone:a.phone||((g=a.user)==null?void 0:g.phone)||"",profileImage:a.profileImage||((y=a.user)==null?void 0:y.profileImage)||""},c=a.role||((A=a.user)==null?void 0:A.role)||"",d=a.expiresIn??null;return{token:r,user:i,role:c,expiresIn:d,source:a}},persistSession({token:e,user:t,role:a}){e&&localStorage.setItem(C.storageKeys.accessToken,e),localStorage.setItem(C.storageKeys.user,JSON.stringify(t||{})),localStorage.setItem(C.storageKeys.role,a||"")},clearSession(){localStorage.removeItem(C.storageKeys.accessToken),localStorage.removeItem(C.storageKeys.legacyAccessToken),localStorage.removeItem(C.storageKeys.user),localStorage.removeItem(C.storageKeys.legacyUser),localStorage.removeItem(C.storageKeys.role)},saveAuth(e,t,a={}){const r=this.extractSession(e,a);return this.persistSession(r),t.accessToken=r.token,t.user=r.user,t.role=r.role,r},clearAuthState(e,t){this.clearSession(),e.accessToken="",e.user=null,e.role="",t.myReviews=[],t.myReviewsLoading=!1,t.myReviewsError=""},isLoggedIn(){return!!yt()},async validateAuthOnStartup(){if(!yt())return{authenticated:!1};const e=await wt({silentAuth:!0});return e?(localStorage.setItem(C.storageKeys.user,JSON.stringify(e)),{authenticated:!0,profile:e}):m.lastApiStatus===401?{authenticated:!1,invalid:!0}:{authenticated:!0,profile:null}},async preloadProfileData(){const[e,t,a]=await Promise.all([wt({silentAuth:!0}),La(),Ee.loadMyReviews()]);let r=null;return t!==null&&(r=await Me.enrichProfileOrders(x(t))),{userResponse:e,orders:r,reviewsResult:a}},isValidEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)},validateLoginForm(e,t){const a=[];return(!e||!this.isValidEmail(e))&&a.push({field:"loginEmail",messageKey:"auth.emailRequired"}),(!t||t.length<6)&&a.push({field:"loginPassword",messageKey:"auth.passwordMin"}),{valid:a.length===0,errors:a}},validateRegisterForm({fullName:e,email:t,phone:a,password:r,confirmPassword:i}){const c=[];return e||c.push({field:"registerFullName",messageKey:"auth.fullNameRequired"}),(!t||!this.isValidEmail(t))&&c.push({field:"registerEmail",messageKey:"auth.emailRequired"}),a||c.push({field:"registerPhone",messageKey:"auth.phoneRequired"}),(!r||r.length<6)&&c.push({field:"registerPassword",messageKey:"auth.passwordMin"}),r!==i&&c.push({field:"registerConfirmPassword",messageKey:"auth.passwordMismatch"}),{valid:c.length===0,errors:c}},async submitLogin({email:e,password:t}){const a=await oo({email:e,password:t});if(this.getAccessToken(a))return{success:!0,response:a};const i=m.lastApiStatus;return i===401?{success:!1,error:"Email yoki parol noto‘g‘ri.",status:i}:{success:!1,error:m.lastApiError||"Login muvaffaqiyatsiz. Qayta urinib ko‘ring.",status:i}},async submitRegister({fullName:e,email:t,phone:a,password:r}){const i=await no({fullName:e,email:t,phone:a,password:r});return i===null?{success:!1,error:m.lastApiError||"Email allaqachon mavjud yoki server javob bermadi."}:{success:!0,response:i,email:t}},async submitFirebaseLogin(e){const t=await co({idToken:e});return this.getAccessToken(t)?{success:!0,response:t}:{success:!1,error:m.lastApiError||"Server Google hisobini qabul qilmadi."}},mapFirebaseError(e){return e==="auth/popup-closed-by-user"||e==="auth/cancelled-popup-request"?{cancelled:!0}:e==="auth/popup-blocked"?{cancelled:!1,message:"Popup bloklandi. Brauzerda popup'ga ruxsat bering."}:{cancelled:!1,message:"Google bilan kirishda xatolik yuz berdi."}}},lo={apiKey:"AIzaSyAh668pltxmHVtAi_dN1cLO2faTqRyVbUU",authDomain:"cosmetic-app-75fb9.firebaseapp.com",projectId:"cosmetic-app-75fb9",storageBucket:"cosmetic-app-75fb9.firebasestorage.app",messagingSenderId:"1075730526246",appId:"1:1075730526246:web:ac4b809f7353e4bbac36e7",measurementId:"G-KVHDLM71LR"};let Pt=null;function uo(){if(!Pt){const e=is(lo);Pt=os(e),Pt.useDeviceLanguage()}return Pt}async function po(){const e=uo(),t=new rs;return t.setCustomParameters({prompt:"select_account"}),(await ss(e,t)).user.getIdToken()}function Mr(e){k.cartItems=e,k.cart=e,k.cartCount=e.reduce((t,a)=>t+a.quantity,0),k.cartTotal=e.reduce((t,a)=>t+a.lineTotal,0)}function la(){Mr([]),k.cartLoading=!1,k.cartError="",k.cartUpdatingIds=new Set,k.cartSelectedIds=new Set,k.cartKnownItemIds=new Set}function qr(e,t="Rating"){return Ft({rating:e,label:t})}function ho({stats:e,distribution:t,reviewsLabel:a="reviews"}){return`
    <div class="reviews-summary-grid">
      <div class="reviews-avg">
        <strong>${e.average.toFixed(1)}</strong>
        ${Ft({rating:e.average})}
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
  `}function mo({review:e,helpful:t=!1,verifiedLabel:a="Verified purchase",noTextLabel:r="No text review",helpfulLabel:i="Helpful"}){var d;const c=!!e.orderId;return`
    <article class="review-card-premium">
      <div class="review-head">
        <div>
          <strong>${s(e.userName)}</strong>
          ${c?`<span class="review-verified">✓ ${s(a)}</span>`:""}
          <p class="hint">${ka(e.createdAt)}</p>
        </div>
        ${Ft({rating:e.rating})}
      </div>
      <p>${s(e.content||r)}</p>
      ${(d=e.imageUrls)!=null&&d.length?ReviewImages({imageUrls:e.imageUrls}):""}
      <button class="review-helpful ${t?"active":""}" data-review-helpful="${s(e.id)}" type="button">
        👍 ${s(i)}${t?" ✓":""}
      </button>
    </article>
  `}function go(e){return Ee.reviewStats(e)}function fo(){return le.getRecentProductIds()}function vo(e,t){const a=String(e??"");return a.length<=t?a:`${a.slice(0,Math.max(0,t-1)).trimEnd()}…`}const R={renderDetailLoading(e=!1){const t=e?o.productDetailPageContent:o.detailContent;t.innerHTML=`
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
    `},renderProductDetail(e){const t=e.variants.find(B=>String(B.id)===String(l.selectedVariantId))||null,a=[...new Set([e.image,...e.images,...e.detailImages].filter(Boolean))],r=Math.min(l.pdpGalleryIndex||0,Math.max(0,a.length-1)),i=a[r]||e.image,c=(t==null?void 0:t.discountPrice)??(t==null?void 0:t.price)??e.finalPrice,d=(t==null?void 0:t.price)??e.originalPrice,u=(t==null?void 0:t.stock)??e.stock,p=P.favoriteIds.has(String(e.id))||!!e.favorite,h=Xe().includes(String(e.id)),g=m.currentRoute==="product",y=g?o.productDetailPageContent:o.detailContent,A=S(u)>0&&S(u)<=5,T=new Date(Date.now()+3*864e5).toLocaleDateString(he(),{weekday:"short",month:"short",day:"numeric"});y.innerHTML=`
      ${g?`
        <div class="breadcrumbs">
          <button data-route-home type="button">${s(n("product.home")||n("home.all"))}</button>
          <span>/</span>
          <button data-brand="${s(e.brand||"")}" type="button">${s(e.brand||n("header.catalog"))}</button>
          <span>/</span>
          <button data-category="${s(e.category||"ALL")}" type="button">${s(e.category?ge(e.category):n("header.catalog"))}</button>
          <span>/</span>
          <span>${s(vo(e.name,42))}</span>
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
              ${a.slice(0,10).map((B,E)=>`
                <button class="pdp-thumb ${E===r?"active":""}" type="button" data-pdp-thumb="${E}" role="tab" aria-selected="${E===r}">
                  <img src="${s(B)}" alt="" loading="lazy" />
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
            ${A?`<span class="pdp-badge pdp-badge--stock-low">${s(n("product.lowStock"))}</span>`:""}
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
          <p class="hint">${qr(e.ratingAvg)} ${e.ratingAvg.toFixed(1)} (${e.reviewCount}) · ${s(n("product.sold",{count:e.soldCount}))}</p>
          <div class="pdp-actions-row" style="margin:12px 0">
            <button class="secondary-button detail-favorite ${p?"active":""}" data-detail-favorite="${s(e.id)}" type="button">${s(n(p?"product.saved":"product.save"))}</button>
            <button class="secondary-button ${h?"active":""}" data-compare="${s(e.id)}" type="button">${s(n("product.compare"))}</button>
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
          ${e.detailImages.length?`<div class="detail-image-stack">${e.detailImages.map(B=>`<img src="${s(B)}" alt="" loading="lazy" class="img-loading" />`).join("")}</div>`:""}
        </div>
        <div class="pdp-tab-panel" ${l.pdpActiveTab==="details"?"":"hidden"} data-pdp-panel="details">
          <p class="hint">${s(n("home.categories"))}: ${s(e.category?ge(e.category):"-")}</p>
          <p class="hint">${s(n("filter.brand"))}: ${s(e.brand||"-")}</p>
        </div>
        <div class="pdp-tab-panel reviews-premium" ${l.pdpActiveTab==="reviews"?"":"hidden"} data-pdp-panel="reviews">
          ${R.renderProductReviews(e.id)}
        </div>
      </div>
      ${g?R.renderRecommendations():""}
      ${g?R.renderFrequentlyBought(e):""}
      ${g?R.renderRecentlyViewedStrip():""}
      ${g?`
        <div class="mobile-buy-bar">
          <strong>${D(c)}</strong>
          <button class="primary-button" data-detail-add type="button">${s(n("product.addToCart"))}</button>
        </div>
      `:""}
    `,$r(y),ke(y),R.initPdpGallerySwipe(y)},renderVariantSelectors(e){const t=[],a=[];e.variants.forEach(c=>{const u=String(c.label||"").split(/[\/,\-]/).map(p=>p.trim()).filter(Boolean);u[0]&&t.push(u[0]),u[1]&&a.push(u[1])});const r=[...new Set(t)],i=[...new Set(a)];return r.length>1||i.length>1?`
        ${r.length?`<div class="pdp-variant-section"><p class="pdp-variant-label">${s(n("filter.color"))}</p><div class="color-swatches">${r.map(c=>`<button class="color-swatch" type="button" data-variant-color="${s(c)}">${s(c)}</button>`).join("")}</div></div>`:""}
        ${i.length?`<div class="pdp-variant-section"><p class="pdp-variant-label">${s(n("filter.size"))}</p><div class="size-options">${e.variants.map(c=>{const d=String(c.id)===String(l.selectedVariantId),u=Number(c.stock||0)<=0;return`<button class="size-option ${d?"active":""}" data-variant="${s(c.id)}" type="button" ${u?"disabled":""}>${s(c.label||c.id)}</button>`}).join("")}</div></div>`:""}
      `:R.renderVariantButtons(e)},renderPdpProductStrip(e,t,a){return t.length?`
      <section class="recommended-section app-feed-block app-feed-rail">
        <div class="app-section-head">
          <h2>${s(e)}</h2>
        </div>
        <div class="product-grid app-rail-grid">
          ${t.map((r,i)=>Ze(r,{screen:a,position:i})).join("")}
        </div>
      </section>
    `:""},renderFrequentlyBought(e){const t=(l.recommendedOthers||l.recommendedProducts||[]).slice(0,3);return t.length?R.renderPdpProductStrip(n("product.frequentlyBought"),t,"fbt"):""},renderRecentlyViewedStrip(){return!fo().filter(t=>{var a;return String(t)!==String((a=l.selectedDetailProduct)==null?void 0:a.id)}).length||!l.recentlyViewed.length?"":R.renderPdpProductStrip(n("home.recentlyViewed"),l.recentlyViewed.slice(0,6),"recent")},initPdpGallerySwipe(e){const t=e.querySelector(".pdp-main-image");if(!t||!("ontouchstart"in window))return;let a=0;t.addEventListener("touchstart",r=>{a=r.touches[0].clientX},{passive:!0}),t.addEventListener("touchend",r=>{var d,u,p;const i=r.changedTouches[0].clientX-a;if(Math.abs(i)<40)return;const c=[...new Set([(d=l.selectedDetailProduct)==null?void 0:d.image,...((u=l.selectedDetailProduct)==null?void 0:u.images)||[],...((p=l.selectedDetailProduct)==null?void 0:p.detailImages)||[]].filter(Boolean))];l.pdpGalleryIndex=Math.max(0,Math.min(c.length-1,(l.pdpGalleryIndex||0)+(i<0?1:-1))),R.renderProductDetail(l.selectedDetailProduct)},{passive:!0})},renderRecommendations(){if(l.recommendationsLoading)return`
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
      `;if(l.reviewSearchQuery){const h=l.reviewSearchQuery.toLowerCase();a=a.filter(g=>String(g.content||"").toLowerCase().includes(h))}if(l.reviewFilterRating>0&&(a=a.filter(h=>S(h.rating)>=l.reviewFilterRating)),l.reviewSort==="helpful"?a.sort((h,g)=>(l.reviewHelpfulIds.has(String(g.id))?1:0)-(l.reviewHelpfulIds.has(String(h.id))?1:0)):l.reviewSort==="rating-high"?a.sort((h,g)=>S(g.rating)-S(h.rating)):l.reviewSort==="rating-low"&&a.sort((h,g)=>S(h.rating)-S(g.rating)),!a.length&&!((p=l.productReviewsByProductId[t])!=null&&p.length))return`<div class="reviews-empty"><strong>${s(n("reviews.none"))}</strong></div>`;const c=l.productReviewsByProductId[t]||[],d=go(c),u=[5,4,3,2,1].map(h=>{const g=c.filter(y=>Math.round(S(y.rating))===h).length;return{star:h,count:g,pct:c.length?g/c.length*100:0}});return`
      ${ho({stats:d,distribution:u,reviewsLabel:n("product.reviews")})}
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
          ${[5,4,3,2,1].map(h=>`<option value="${h}" ${l.reviewFilterRating===h?"selected":""}>${h}★+</option>`).join("")}
        </select>
      </div>
      <div class="review-list">
        ${a.length?a.map(R.renderReviewCard).join(""):`<p class="hint">${s(n("search.noResults"))}</p>`}
      </div>
    `},renderReviewCard(e){return mo({review:e,helpful:l.reviewHelpfulIds.has(String(e.id)),verifiedLabel:n("reviews.verified"),noTextLabel:n("reviews.noText"),helpfulLabel:n("reviews.helpful")})},renderVariantButtons(e){return`
      <div class="variant-options">
        ${e.variants.map(t=>{const a=String(t.id)===String(l.selectedVariantId),r=Number(t.stock||0)<=0;return`
            <button class="variant-option ${a?"active":""}" data-variant="${s(t.id)}" ${r?"disabled":""} type="button">
              ${s(t.label||`Variant #${t.id}`)}
              ${t.price?` · ${s(D(t.discountPrice??t.price))}`:""}
            </button>
          `}).join("")}
      </div>
    `},renderAddToCartLoading(){document.querySelectorAll("[data-detail-add]").forEach(t=>{var r;const a=k.addingProductIds.has(String((r=l.selectedDetailProduct)==null?void 0:r.id));t.disabled=a,t.textContent=a?n("product.adding"):t.closest(".mobile-buy-bar")?n("product.addToCart"):n("product.addToCartFull")}),l.products.length&&te(o.grid,l.products,n("home.noProducts"),{screen:m.currentGridScreen})}},yo=window.matchMedia("(prefers-reduced-motion: reduce)");function Vt(){return yo.matches}function bo(e){!e||Vt()||(e.classList.add("animating"),window.setTimeout(()=>e.classList.remove("animating"),400))}function wo(e,t){if(!e||!t||Vt())return;const a=document.getElementById("cartButton");if(!a)return;const r=a.getBoundingClientRect(),i=document.createElement("img");i.className="cart-fly",i.src=e,i.alt="",i.style.left=`${t.left}px`,i.style.top=`${t.top}px`,document.body.appendChild(i);const c=r.left+r.width/2-t.left-24,d=r.top+r.height/2-t.top-24;i.animate([{transform:"translate(0, 0) scale(1)",opacity:1},{transform:`translate(${c}px, ${d}px) scale(0.2)`,opacity:.6}],{duration:520,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}).finished.then(()=>i.remove())}let Ka=0,Jt=!1;function ko(){const e=document.querySelector(".site-header");if(!e)return;e.classList.add("header-glass");const t=()=>{Jt||(Jt=!0,requestAnimationFrame(()=>{const a=window.scrollY,r=a-Ka;a>80&&r>8?e.classList.add("header-hidden"):(r<-4||a<40)&&e.classList.remove("header-hidden"),Ka=a,Jt=!1}))};window.addEventListener("scroll",t,{passive:!0})}function So(){const e=document.getElementById("homeView"),t=document.getElementById("productDetailPage"),a=new MutationObserver(()=>{const r=(t==null?void 0:t.hidden)===!1?t:e;!r||Vt()||(r.classList.remove("page-enter"),r.offsetWidth,r.classList.add("page-enter"))});e&&a.observe(e,{attributes:!0,attributeFilter:["hidden"]}),t&&a.observe(t,{attributes:!0,attributeFilter:["hidden"]})}function Co(){let e=document.getElementById("offlineBanner");e||(e=document.createElement("div"),e.id="offlineBanner",e.className="offline-banner",e.textContent="You are offline. Some features may be unavailable.",document.body.appendChild(e));const t=()=>e.classList.toggle("visible",!navigator.onLine);window.addEventListener("online",t),window.addEventListener("offline",t),t()}function $o(e,t){if(Vt()||!t)return;const a=t.getBoundingClientRect(),r=Math.max(a.width,a.height),i=document.createElement("span");i.style.cssText=`
    position:absolute;border-radius:50%;pointer-events:none;
    width:${r}px;height:${r}px;
    left:${e.clientX-a.left-r/2}px;
    top:${e.clientY-a.top-r/2}px;
    background:rgba(255,255,255,0.35);
    transform:scale(0);opacity:1;
  `;const c=t.style.position;(!c||c==="static")&&(t.style.position="relative"),t.style.overflow="hidden",t.appendChild(i),i.animate([{transform:"scale(0)",opacity:1},{transform:"scale(2.5)",opacity:0}],{duration:500,easing:"ease-out"}).finished.then(()=>i.remove())}const G={async load(){if(!j.isLoggedIn()){la(),N.render();return}k.cartLoading=!0,k.cartError="",N.render();const e=await de.loadCart();if(k.cartLoading=!1,!e.success){if(e.sessionExpired){la();return}k.cartError=e.error,N.render();return}Mr(e.items),N.render()},async add(e,t,a,{showLoginRequired:r}={}){if(!j.isLoggedIn()){r==null||r();return}const i=Math.max(1,Number(a||1)),c=await ne.resolveAddToCartVariant(e,t);if(c.navigateToProduct){we(c.product.id);return}const d=c.variantId;if(!d){M(n("product.variantUnavailable"),"warning");return}k.addingProductIds.add(String(e)),R.renderAddToCartLoading(!0);const u=await de.addItem(d,i);if(k.addingProductIds.delete(String(e)),R.renderAddToCartLoading(!1),u!==null){const p=document.querySelector(`[data-product="${e}"] .product-image`);p&&wo(p.src,p.getBoundingClientRect()),M(n("cart.added"),"success"),await G.load()}},async removeItem(e){k.cartUpdatingIds.add(String(e)),N.render();const t=await de.removeItem(e);k.cartUpdatingIds.delete(String(e)),t!==null?(M(n("cart.itemRemoved"),"success"),await G.load()):N.render()},async updateQuantity(e,t){const a=Math.max(1,Number(t||1));k.cartUpdatingIds.add(String(e)),N.render();const r=await de.updateQuantity(e,a);k.cartUpdatingIds.delete(String(e)),r!==null?(M(n("cart.quantityUpdated"),"success"),await G.load()):N.render()},async removeSelected(){var t;const e=N.getSelectedCartItems();if(e.length){e.forEach(a=>k.cartUpdatingIds.add(String(a.id))),N.render();for(const a of e)await de.removeItem(a.id),k.cartUpdatingIds.delete(String(a.id)),(t=k.cartSelectedIds)==null||t.delete(String(a.id));M(n("cart.itemRemoved"),"success"),await G.load()}},getTotals(){return N.getCartTotals()},getSelectedItems(){return N.getSelectedCartItems()}},Ye={pickDefaultVariant(e){return ne.pickDefaultVariant(e)},async loadDetailPage(e){var r;Fr(),m.currentRoute="product",l.detailLoading=!0,l.detailError="",l.selectedDetailProduct=null,l.recommendedProducts=[],l.recommendedSimilar=[],l.recommendedOthers=[],l.recommendationsError="",R.renderDetailLoading(!0);const t=l.products.find(i=>String(i.id)===String(e))||{},a=await ne.loadProduct(e,t);if(l.detailLoading=!1,!a.id){l.detailError=m.lastApiError||"Mahsulot topilmadi.",R.renderProductDetailError();return}a.favorite=P.favoriteIds.has(String(a.id))||a.favorite,l.selectedDetailProduct=a,l.selectedVariantId=((r=Ye.pickDefaultVariant(a))==null?void 0:r.id)||null,l.selectedQuantity=1,l.pdpGalleryIndex=0,l.pdpActiveTab="description",l.reviewSearchQuery="",l.reviewFilterRating=0,document.title=`${a.name} - BEAUTY SKIN KOREA`,le.addRecentProduct(a.id),Ii(a.id),R.renderProductDetail(a),await Ye.loadReviews(a.id),await Ye.loadRecommendations(a)},async loadRecommendations(e){var a;l.recommendationsLoading=!0,l.recommendationsError="",R.renderProductDetail(e);const t=await ne.loadRecommendations(e,m.sessionId);if(t.mode==="api"){l.recommendationsLoading=!1,l.recommendedProducts=[],l.recommendedSimilar=t.similar,l.recommendedOthers=t.others,R.renderProductDetail(l.selectedDetailProduct);return}l.recommendationsLoading=!1,t.failed&&(l.recommendationsError=m.lastApiError||"Recommendations could not be loaded."),l.recommendedProducts=t.fallback.map(r=>({...r,favorite:P.favoriteIds.has(String(r.id))||r.favorite})),l.recommendedSimilar=[],l.recommendedOthers=[],((a=l.selectedDetailProduct)==null?void 0:a.id)!==void 0&&String(l.selectedDetailProduct.id)===String(e.id)&&R.renderProductDetail(l.selectedDetailProduct)},async loadReviews(e){var i,c;if(!e)return;const t=String(e);l.productReviewsLoading[t]=!0,l.productReviewsError[t]="",((i=l.selectedDetailProduct)==null?void 0:i.id)!==void 0&&String(l.selectedDetailProduct.id)===t&&R.renderProductDetail(l.selectedDetailProduct);const{reviews:a,error:r}=await Ee.loadProductReviews(e);l.productReviewsLoading[t]=!1,a===null?l.productReviewsError[t]=r:l.productReviewsByProductId[t]=a,((c=l.selectedDetailProduct)==null?void 0:c.id)!==void 0&&String(l.selectedDetailProduct.id)===t&&R.renderProductDetail(l.selectedDetailProduct)},rerender(){l.selectedDetailProduct&&R.renderProductDetail(l.selectedDetailProduct)}},Po=6e4;async function Ta(e,{method:t="GET",body:a,query:r,timeoutMs:i=Po}={}){const c=ur(e,r),d={Accept:"application/json",...a?{"Content-Type":"application/json"}:{}},u=yt();u&&(d.Authorization=`Bearer ${u}`);const p=new AbortController;let h=!1;const g=i>0?setTimeout(()=>{h=!0,p.abort()},i):null;try{We()&&console.info("[ASSISTANT REQUEST]",{path:e,method:t,url:c,body:a,query:r});const y=await fetch(c,{method:t,headers:d,body:a?JSON.stringify(a):void 0,signal:p.signal}),A=await y.text(),T=A?dr(A):null;return We()&&console.info("[ASSISTANT RESPONSE]",{url:c,status:y.status,payload:T}),y.ok?{ok:!0,status:y.status,data:T,error:null}:{ok:!1,status:y.status,data:null,error:ta(T,y.status)}}catch(y){return(y==null?void 0:y.name)==="AbortError"?{ok:!1,status:h?408:0,data:null,error:h?"timeout":"aborted"}:{ok:!1,status:0,data:null,error:"network"}}finally{g&&clearTimeout(g)}}function Io(e){return Ta("/api/assistant/chat",{method:"POST",body:e})}function Eo(e){return Ta("/api/assistant/reset",{method:"POST",body:e})}function Ao({conversationId:e,userId:t}={}){return Ta("/api/assistant/history",{method:"GET",query:{conversationId:e,...t?{userId:t}:{}}})}const kt=C.storageKeys.assistantConversationId;function _a(){return`conv-${Date.now()}-${Math.random().toString(36).slice(2,10)}`}function Ga(){return localStorage.getItem(kt)||""}function It(e){if(!e){localStorage.removeItem(kt);return}localStorage.setItem(kt,e)}function Lo(){localStorage.removeItem(kt)}function Wa(){return cr()}function To(){const e=he();return{uz:"uz-UZ",en:"en-US",ru:"ru-RU",ko:"ko-KR"}[e]||Intl.DateTimeFormat().resolvedOptions().locale||"uz-UZ"}function Do(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}catch{return"UTC"}}function Br(){return`msg-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}Object.freeze({conversationId:kt,sessionId:C.storageKeys.sessionId});function Ya(e,t){return n(t==="timeout"||e===408?"assistant.errorTimeout":t==="network"||e===0?"assistant.errorNetwork":e===400?"assistant.error400":e===401?"assistant.error401":e===429?"assistant.error429":e===500?"assistant.error500":e===503?"assistant.error503":"assistant.errorGeneric")}const ht=Object.freeze({view_product:"view_product",open_product:"open_product",add_to_cart:"add_to_cart",open_cart:"open_cart"});function Ro(e){return Object.values(ht).includes(String(e||"").toLowerCase())}function Mo(e={}){const t=String(e.type||e.action_type||"").toLowerCase();return Ro(t)?{type:t,label:e.label||e.title||e.text||t,productId:e.product_id??e.productId??null,variantId:e.variant_id??e.variantId??null,raw:e}:null}function qo(e){let t=[];return Array.isArray(e)?t=e:Array.isArray(e==null?void 0:e.messages)?t=e.messages:Array.isArray(e==null?void 0:e.history)?t=e.history:Array.isArray(e==null?void 0:e.data)?t=e.data:Array.isArray(e==null?void 0:e.content)&&(t=e.content),t.map((a,r)=>{const i=String(a.role||a.sender||"").toLowerCase(),c=i==="user"||i==="human",d=i==="assistant"||i==="ai"||i==="bot",u=a.content||a.message||a.assistant_message||a.text||"";return!u&&!Array.isArray(a.products)?null:{id:a.id||`hist-${r}-${Date.now()}`,role:c?"user":d?"assistant":c?"user":"assistant",content:u,products:Array.isArray(a.products)?a.products:[],actions:Array.isArray(a.actions)?a.actions:[],followUpQuestions:Array.isArray(a.follow_up_questions)?a.follow_up_questions:Array.isArray(a.followUpQuestions)?a.followUpQuestions:[],citations:Array.isArray(a.citations)?a.citations:[],status:"ok",fromHistory:!0}}).filter(Boolean)}const Et={ensureIds(){const e=Wa();let t=b.conversationId||Ga();return t||(t=_a(),It(t)),b.sessionId=e,b.conversationId=t,{conversationId:t,sessionId:e}},buildChatPayload(e){var i;const{conversationId:t,sessionId:a}=this.ensureIds(),r={message:String(e||"").trim(),conversation_id:t,session_id:a,locale:To(),timezone:Do(),context:{}};return j.isLoggedIn()&&((i=$.user)==null?void 0:i.id)!=null&&(r.user_id=String($.user.id)),r},async loadHistory(){var i,c,d;const{conversationId:e}=this.ensureIds();if(!e)return{success:!0,messages:[]};const t=j.isLoggedIn()&&((i=$.user)==null?void 0:i.id)!=null?String($.user.id):void 0,a=await Ao({conversationId:e,userId:t});if(!a.ok)return{success:!1,status:a.status,error:Ya(a.status,a.error),messages:[]};const r=qo(a.data);return(c=a.data)!=null&&c.conversation_id&&(b.conversationId=a.data.conversation_id,It(a.data.conversation_id)),(d=a.data)!=null&&d.session_id&&(b.sessionId=a.data.session_id),{success:!0,messages:r}},async send(e,{clientMessageId:t}={}){const a=String(e||"").trim();if(!a)return{success:!1,empty:!0};const r=this.buildChatPayload(a),i=await Io(r);if(!i.ok)return{success:!1,status:i.status,error:Ya(i.status,i.error),clientMessageId:t};const c=i.data||{};return c.conversation_id&&(b.conversationId=c.conversation_id,It(c.conversation_id)),c.session_id&&(b.sessionId=c.session_id),{success:!0,assistantMessage:{id:Br(),role:"assistant",content:c.assistant_message||"",products:Array.isArray(c.products)?c.products:[],actions:Array.isArray(c.actions)?c.actions:[],followUpQuestions:Array.isArray(c.follow_up_questions)?c.follow_up_questions:[],citations:Array.isArray(c.citations)?c.citations:[],intent:c.intent||"",toolCalls:Array.isArray(c.tool_calls)?c.tool_calls:[],status:"ok"},conversationId:c.conversation_id||b.conversationId,sessionId:c.session_id||b.sessionId}},async reset(){var r;const e=b.conversationId||Ga(),t={};e&&(t.conversation_id=e),j.isLoggedIn()&&((r=$.user)==null?void 0:r.id)!=null&&(t.user_id=String($.user.id)),e&&await Eo(t);const a=_a();return Lo(),It(a),b.conversationId=a,b.sessionId=Wa(),b.messages=[],b.followUpQuestions=[],b.error="",b.errorStatus=null,b.citationsOpen={},b.pendingRetryId=null,b._bootstrapped=!0,{conversationId:a}}};function Bo(e){if(!e)return"";const t=String(e),a=[];let r=t.replace(/```([a-zA-Z0-9_-]*)\n?([\s\S]*?)```/g,(c,d,u)=>{const p=a.length;return a.push({lang:d||"",code:u.replace(/\n$/,"")}),`\0CODE${p}\0`});return r=s(r),r=r.replace(/\u0000CODE(\d+)\u0000/g,(c,d)=>{const u=a[Number(d)];return u?`<pre class="assistant-code"><code${u.lang?` class="language-${s(u.lang)}"`:""}>${s(u.code)}</code></pre>`:""}),r=r.replace(/`([^`\n]+)`/g,'<code class="assistant-inline-code">$1</code>'),r=r.replace(/^######\s+(.+)$/gm,"<h6>$1</h6>"),r=r.replace(/^#####\s+(.+)$/gm,"<h5>$1</h5>"),r=r.replace(/^####\s+(.+)$/gm,"<h4>$1</h4>"),r=r.replace(/^###\s+(.+)$/gm,"<h3>$1</h3>"),r=r.replace(/^##\s+(.+)$/gm,"<h2>$1</h2>"),r=r.replace(/^#\s+(.+)$/gm,"<h1>$1</h1>"),r=r.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),r=r.replace(new RegExp("(?<!\\*)\\*([^*\\n]+)\\*(?!\\*)","g"),"<em>$1</em>"),r=r.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),r=r.replace(/(?:^|\n)((?:[-*]\s+.+(?:\n|$))+)/g,c=>{const d=c.trim().split(`
`).filter(u=>/^[-*]\s+/.test(u)).map(u=>`<li>${u.replace(/^[-*]\s+/,"")}</li>`).join("");return d?`
<ul>${d}</ul>
`:c}),r=r.replace(/(?:^|\n)((?:\d+\.\s+.+(?:\n|$))+)/g,c=>{const d=c.trim().split(`
`).filter(u=>/^\d+\.\s+/.test(u)).map(u=>`<li>${u.replace(/^\d+\.\s+/,"")}</li>`).join("");return d?`
<ol>${d}</ol>
`:c}),r.split(/\n{2,}/).map(c=>{const d=c.trim();return d?/^<(?:h[1-6]|ul|ol|pre|blockquote)/i.test(d)?d:`<p>${d.replace(/\n/g,"<br>")}</p>`:""}).join("")}function Oo({product:e,isAuthenticated:t=!1,isFavorite:a=!1}){const r=K(e||{}),i=S(r.stock),c=i===0,d=r.originalPrice>r.finalPrice&&r.originalPrice>0,u=r.image||C.placeholderImage;return`
    <article class="assistant-product-card" data-assistant-product="${s(r.id)}">
      <button class="assistant-product-media" type="button" data-product="${s(r.id)}" aria-label="${s(r.name)}">
        <img src="${s(u)}" alt="${s(r.name)}" loading="lazy" decoding="async" />
      </button>
      <div class="assistant-product-info">
        <span class="assistant-product-brand">${s(r.brand||"")}</span>
        <h4 class="assistant-product-name">${s(r.name)}</h4>
        <div class="assistant-product-price">
          <strong>${D(r.finalPrice)}</strong>
          ${d?`<span class="old-price">${D(r.originalPrice)}</span>`:""}
        </div>
        ${br({ratingAvg:r.ratingAvg,reviewCount:r.reviewCount||0})}
        <div class="assistant-product-stock">
          ${yr({stock:i,lowStockLabel:n("product.lowStock"),outOfStockLabel:n("product.outOfStock")})||(i>0?`<span class="assistant-in-stock">${s(n("assistant.inStock"))}</span>`:"")}
        </div>
        <div class="assistant-product-actions">
          <button class="secondary-button" type="button" data-product="${s(r.id)}">
            ${s(n("assistant.viewProduct"))}
          </button>
          <button class="primary-button" type="button" data-add="${s(r.id)}" ${c?"disabled":""}>
            ${s(n("assistant.addToCart"))}
          </button>
          ${t?`<button class="icon-button ${a?"active":""}" type="button" data-favorite="${s(r.id)}" aria-label="${s(n("favorites.title"))}" aria-pressed="${a}">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
              </button>`:""}
        </div>
      </div>
    </article>
  `}function Or({questions:e=[]}){const t=(e||[]).filter(a=>typeof a=="string"&&a.trim());return t.length?`
    <div class="assistant-suggestions" role="list">
      ${t.map(a=>`
        <button class="assistant-chip" type="button" role="listitem" data-assistant-suggest="${s(a)}">
          ${s(a)}
        </button>`).join("")}
    </div>
  `:""}function xo({actions:e=[]}){const t=(e||[]).map(a=>Mo(a)).filter(Boolean);return t.length?`
    <div class="assistant-actions">
      ${t.map(a=>`
        <button
          class="secondary-button assistant-action-btn"
          type="button"
          data-assistant-action="${s(a.type)}"
          data-assistant-action-product="${s(a.productId??"")}"
          data-assistant-action-variant="${s(a.variantId??"")}"
        >
          ${s(a.label)}
        </button>`).join("")}
    </div>
  `:""}function No({citations:e=[],messageId:t="",open:a=!1}){const r=(e||[]).filter(Boolean);return r.length?`
    <details class="assistant-citations" data-assistant-citations="${s(t)}" ${a?"open":""}>
      <summary>${s(n("assistant.sources"))} (${r.length})</summary>
      <ul>
        ${r.map(i=>{if(typeof i=="string")return`<li>${s(i)}</li>`;const c=i.title||i.name||i.source||i.url||"",d=i.url||i.link||"",u=i.snippet||i.text||"";return d&&/^https?:\/\//i.test(String(d))?`<li><a href="${s(d)}" target="_blank" rel="noopener noreferrer">${s(c||d)}</a>${u?`<p>${s(u)}</p>`:""}</li>`:`<li>${s(c)}${u?`<p>${s(u)}</p>`:""}</li>`}).join("")}
      </ul>
    </details>
  `:""}function xr({message:e,retryId:t=""}){return`
    <div class="assistant-error" role="alert">
      <p>${s(e||n("assistant.errorGeneric"))}</p>
      ${t?`<button class="secondary-button" type="button" data-assistant-retry="${s(t)}">${s(n("assistant.retry"))}</button>`:`<button class="secondary-button" type="button" data-assistant-retry-last>${s(n("assistant.retry"))}</button>`}
    </div>
  `}function Fo(){return`
    <div class="assistant-empty">
      <div class="assistant-empty-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 3-2 5.5-4.5 6.5V18h-5v-2.5C7 14.5 5 12 5 9a7 7 0 0 1 7-7Zm-2 18h4v2h-4v-2Z"/></svg>
      </div>
      <h3>${s(n("assistant.emptyTitle"))}</h3>
      <p>${s(n("assistant.emptyHint"))}</p>
    </div>
  `}function zo({message:e}){const t=e.status==="error";return`
    <div class="assistant-msg assistant-msg--user ${t?"is-failed":""}" data-message-id="${s(e.id)}">
      <div class="assistant-bubble assistant-bubble--user">
        <p>${s(e.content)}</p>
      </div>
      ${t?xr({message:e.errorMessage||n("assistant.errorGeneric"),retryId:e.id}):""}
    </div>
  `}function Ho({message:e,isAuthenticated:t=!1,favoriteIds:a=new Set,citationsOpen:r=!1}){const i=(e.products||[]).map(c=>Oo({product:c,isAuthenticated:t,isFavorite:a.has(String(c.id))})).join("");return`
    <div class="assistant-msg assistant-msg--assistant" data-message-id="${s(e.id)}">
      <div class="assistant-avatar" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 3-2 5.5-4.5 6.5V18h-5v-2.5C7 14.5 5 12 5 9a7 7 0 0 1 7-7Zm-2 18h4v2h-4v-2Z"/></svg>
      </div>
      <div class="assistant-msg-body">
        <div class="assistant-bubble assistant-bubble--assistant">
          <div class="assistant-md">${Bo(e.content)}</div>
        </div>
        ${i?`<div class="assistant-products">${i}</div>`:""}
        ${xo({actions:e.actions||[]})}
        ${No({citations:e.citations||[],messageId:e.id,open:r})}
        ${Or({questions:e.followUpQuestions||[]})}
      </div>
    </div>
  `}function Uo(e){var t;return((t=e.message)==null?void 0:t.role)==="user"?zo(e):Ho(e)}function Vo(){return`
    <div class="assistant-msg assistant-msg--assistant assistant-msg--loading" aria-live="polite" aria-busy="true">
      <div class="assistant-avatar" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 3-2 5.5-4.5 6.5V18h-5v-2.5C7 14.5 5 12 5 9a7 7 0 0 1 7-7Zm-2 18h4v2h-4v-2Z"/></svg>
      </div>
      <div class="assistant-bubble assistant-bubble--assistant">
        <div class="assistant-typing" aria-label="${s(n("assistant.thinking"))}">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  `}function jo(){const e=b.messages||[],t=j.isLoggedIn(),a=P.favoriteIds||new Set;if(b.historyLoading&&!e.length)return`<div class="assistant-history-loading">${s(n("assistant.loadingHistory"))}</div>`;if(!e.length&&!b.loading)return Fo();const r=e.map(c=>{var d;return Uo({message:c,isAuthenticated:t,favoriteIds:a,citationsOpen:!!((d=b.citationsOpen)!=null&&d[c.id])})}).join(""),i=b.loading?Vo():"";return`${r}${i}`}function Ko({compact:e=!1,draft:t="",sendEnabled:a=!1}={}){const r=b.loading,i=a&&!r&&!!String(t||"").trim(),c=n("assistant.placeholder");return`
    <form class="assistant-composer" data-assistant-form novalidate>
      ${b.error&&!b.messages.some(d=>d.status==="error")?xr({message:b.error}):""}
      ${!e&&(b.followUpQuestions||[]).length?Or({questions:b.followUpQuestions}):""}
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
  `}function _o(e){var a;const t=(a=e==null?void 0:e.querySelector)==null?void 0:a.call(e,"[data-assistant-input]");return t?{draft:t.value||"",focused:document.activeElement===t,selectionStart:t.selectionStart,selectionEnd:t.selectionEnd}:{draft:"",focused:!1,selectionStart:null,selectionEnd:null}}function Go(e,t){var r;const a=(r=e==null?void 0:e.querySelector)==null?void 0:r.call(e,"[data-assistant-input]");if(!(!a||!t)&&(a.value=t.draft||"",a.style.height="auto",a.style.height=`${Math.min(a.scrollHeight,140)}px`,t.focused&&(a.focus(),t.selectionStart!=null&&t.selectionEnd!=null)))try{a.setSelectionRange(t.selectionStart,t.selectionEnd)}catch{}}function Wo({mode:e="widget",draft:t=""}={}){const a=e==="page";return`
    <div class="assistant-shell assistant-shell--${s(e)}">
      <header class="assistant-header">
        <div class="assistant-header-title">
          <span class="assistant-header-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 3-2 5.5-4.5 6.5V18h-5v-2.5C7 14.5 5 12 5 9a7 7 0 0 1 7-7Zm-2 18h4v2h-4v-2Z"/></svg>
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
        ${jo()}
      </div>
      ${Ko({compact:!a,draft:t,sendEnabled:!!String(t||"").trim()})}
    </div>
  `}function Zt(e,t){if(!e)return;const a=_o(e);e.innerHTML=Wo({mode:t,draft:a.draft}),Go(e,a)}const Yo={render(){var e;Zt(o.assistantWidgetContent,"widget"),o.assistantPageContent&&!((e=o.assistantPage)!=null&&e.hidden)&&Zt(o.assistantPageContent,"page")},renderPageOnly(){Zt(o.assistantPageContent,"page")}},Qo=()=>I("/api/favorites",{requireAuth:!0,showError:!1}),Jo=e=>I(`/api/favorites/${e}/toggle`,{method:"POST",requireAuth:!0}),Nr={async loadFavorites(){const e=await Qo();return e===null?Pe("Favorites could not be loaded."):{success:!0,products:x(e).map(Ds)}},async toggle(e,t){const a=await Jo(e);return a===null?null:{isFavorite:typeof a=="object"&&"favorite"in a?!!a.favorite:!t,response:a}}};function Zo(e){const t=he()==="uz"?"uz-UZ":he();return S(e).toLocaleString(t,{minimumFractionDigits:1,maximumFractionDigits:1})}function Xo({product:e,categoryLabel:t="",favoritesTitle:a="Favorites"}){const r=Zo(e.ratingAvg),i=S(e.reviewCount);return`
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
  `}function Qa(){return`
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s-8.5-5.2-11-9.6C-.4 8 1 3.5 5.2 3.5c2.4 0 4 1.3 4.8 2.6.8-1.3 2.4-2.6 4.8-2.6C19 3.5 20.4 8 18 11.4 15.5 15.8 12 21 12 21Z"/>
    </svg>
  `}function en({products:e,renderCard:t}){return`
    <div class="app-favorites-grid">
      ${e.map(a=>t(a)).join("")}
    </div>
  `}function tn({count:e=4}){return`
    <div class="app-favorites-grid">
      ${Array.from({length:e},()=>'<div class="app-favorites-skeleton skeleton-card"></div>').join("")}
    </div>
  `}function He(e={}){return!!(e.render||vt())}const Y={updateUi(){o.favoritesCount&&(o.favoritesCount.textContent=P.favoritesCount),o.favoritesSummary&&(o.favoritesSummary.textContent=`${P.favoritesCount} product${P.favoritesCount===1?"":"s"}`)},renderShell(e){return`
      <div class="app-favorites-page">
        <header class="app-favorites-header">
          <div class="app-favorites-header-top">
            <button class="app-favorites-back" type="button" data-favorites-close aria-label="${s(n("checkout.back"))}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>
            </button>
            <h2>${s(n("favorites.title"))}</h2>
            <span aria-hidden="true"></span>
          </div>
          <p class="app-favorites-count">${s(n("favorites.count",{count:P.favoritesCount||0}))}</p>
        </header>
        <div class="app-favorites-scroll">
          ${e}
        </div>
      </div>
    `},renderCard(e){const t=e.category?ge(e.category):e.brand||"";return Xo({product:e,categoryLabel:t,favoritesTitle:n("favorites.title")})},render(){if(o.favoritesContent){if(Y.updateUi(),P.favoritesLoading){o.favoritesContent.innerHTML=Y.renderShell(tn());return}if(P.favoritesError){o.favoritesContent.innerHTML=Y.renderShell(`
        <div class="app-favorites-state">
          <span class="app-favorites-state-icon" aria-hidden="true">${Qa()}</span>
          <h3>${s(n("favorites.unavailable"))}</h3>
          <p>${s(P.favoritesError)}</p>
          <button class="app-favorites-state-btn" data-favorites-retry type="button">${s(n("common.tryAgain"))}</button>
        </div>
      `);return}if(!P.favoriteProducts.length){o.favoritesContent.innerHTML=Y.renderShell(`
        <div class="app-favorites-state">
          <span class="app-favorites-state-icon" aria-hidden="true">${Qa()}</span>
          <h3>${s(n("favorites.empty"))}</h3>
          <p>${s(n("favorites.emptyHint"))}</p>
          <button class="app-favorites-state-btn" data-favorites-start type="button">${s(n("favorites.browse"))}</button>
        </div>
      `);return}o.favoritesContent.innerHTML=Y.renderShell(en({products:P.favoriteProducts,renderCard:e=>Y.renderCard(e)})),ke(o.favoritesContent)}},async load(e={},{isLoggedIn:t,onSessionExpired:a}={}){const{render:r=!1}=e;if(!(t!=null&&t())){sa(),He(e)&&Y.render();return}P.favoritesLoading||(P.favoritesLoading=!0,P.favoritesError=""),He(e)&&Y.render();try{const c=await Nr.loadFavorites();if(P.favoritesLoading=!1,!c.success){if(c.sessionExpired){sa(),a==null||a(),He(e)&&Y.render();return}P.favoritesError=c.error,Y.updateUi(),He(e)&&Y.render();return}Ai(c.products),l.products.length&&te(o.grid,l.products,"Mahsulot topilmadi."),l.todayDeals.length&&te(o.dealsGrid,l.todayDeals.slice(0,8),"Bugungi takliflar topilmadi."),He(e)&&Y.render()}catch(c){console.error("[LOAD FAVORITES FAILED]",c),P.favoritesLoading=!1,P.favoritesError="Favorites could not be loaded.",Y.updateUi(),He(e)&&Y.render()}},handleClick(e,{close:t,reload:a,handleProductGridClick:r}={}){var i;if(e.target.closest("[data-favorites-close]")){t==null||t();return}if(e.target.closest("[data-favorites-retry]")){a==null||a();return}if(e.target.closest("[data-favorites-start]")){t==null||t(),(i=document.getElementById("products"))==null||i.scrollIntoView({behavior:"smooth",block:"start"});return}r==null||r(e)}},W={findKnownProduct(e){return[...l.products,...l.todayDeals,...P.favoriteProducts,l.selectedDetailProduct].filter(Boolean).find(t=>String(t.id)===String(e))},async open(){if(!v.isLoggedIn()){v.showLoginRequired();return}o.favoritesDialog&&(o.favoritesDialog.classList.add("open"),o.favoritesDialog.setAttribute("aria-hidden","false"),X(),ce(),P.favoritesLoading=!0,P.favoritesError="",Y.render(),await W.load({render:!0}))},close(){o.favoritesDialog&&(o.favoritesDialog.classList.remove("open"),o.favoritesDialog.setAttribute("aria-hidden","true"),z(),ce())},async load(e={}){return Y.load(e,{isLoggedIn:v.isLoggedIn,onSessionExpired:()=>{vt()&&W.close()}})},updateUi(){Y.updateUi()},async toggle(e){var d;if(!v.isLoggedIn()){v.showLoginRequired();return}const t=P.favoriteIds.has(String(e)),a=await Nr.toggle(e,t);if(a===null)return;const{isFavorite:r}=a,i=W.findKnownProduct(e);if(r){const u=i?{...i,favorite:!0}:null;u&&!P.favoriteProducts.some(p=>String(p.id)===String(e))&&(P.favoriteProducts=[u,...P.favoriteProducts])}else P.favoriteProducts=P.favoriteProducts.filter(u=>String(u.id)!==String(e));P.favoriteIds=new Set(P.favoriteProducts.map(u=>String(u.id))),P.favoritesCount=P.favoriteProducts.length,be(),W.updateUi(),l.products.length&&te(o.grid,l.products,"Mahsulot topilmadi."),l.todayDeals.length&&te(o.dealsGrid,l.todayDeals.slice(0,8),"Bugungi takliflar topilmadi."),((d=l.selectedDetailProduct)==null?void 0:d.id)!==void 0&&String(l.selectedDetailProduct.id)===String(e)&&R.renderProductDetail(l.selectedDetailProduct),vt()&&Y.render();const c=document.querySelector(`[data-favorite="${e}"]`);c&&r&&bo(c),M(n(r?"favorites.added":"favorites.removed"),"success"),r&&!i&&await W.load({render:vt()})}};function an(e){var a;const t=(a=e==null?void 0:e.querySelector)==null?void 0:a.call(e,"[data-assistant-messages]");t&&requestAnimationFrame(()=>{t.scrollTop=t.scrollHeight})}function pe(){Yo.render(),[o.assistantWidgetContent,o.assistantPageContent].filter(Boolean).forEach(an)}const Q={async init(){var t;if(Et.ensureIds(),b._bootstrapped){pe();return}b.historyLoading=!0,pe();const e=await Et.loadHistory();if(b.historyLoading=!1,b._bootstrapped=!0,e.success&&((t=e.messages)!=null&&t.length)){b.messages=e.messages;const a=[...e.messages].reverse().find(r=>r.role==="assistant");b.followUpQuestions=(a==null?void 0:a.followUpQuestions)||[]}pe()},openWidget(){var e;o.assistantWidget&&(b.widgetOpen=!0,o.assistantWidget.classList.add("open"),o.assistantWidget.setAttribute("aria-hidden","false"),(e=o.assistantFab)==null||e.classList.add("is-open"),X(),ce(),pe(),this.focusComposer(),b._bootstrapped||this.init())},closeWidget(){var e;o.assistantWidget&&(b.widgetOpen=!1,o.assistantWidget.classList.remove("open"),o.assistantWidget.setAttribute("aria-hidden","true"),(e=o.assistantFab)==null||e.classList.remove("is-open"),z(),ce())},toggleWidget(){b.widgetOpen?this.closeWidget():this.openWidget()},isWidgetOpen(){var e;return!!((e=o.assistantWidget)!=null&&e.classList.contains("open"))},focusComposer(){const e=document.querySelector("#assistantPageContent [data-assistant-input]")||document.querySelector("#assistantWidgetContent [data-assistant-input]");e==null||e.focus()},async sendMessage(e,{retryMessageId:t}={}){const a=String(e||"").trim();if(!a||b.loading)return;b.error="",b.errorStatus=null,b.followUpQuestions=[];let r=t;t?b.messages=b.messages.map(c=>c.id===t?{...c,status:"pending",errorMessage:""}:c):(r=Br(),b.messages=[...b.messages,{id:r,role:"user",content:a,status:"pending"}]),b.loading=!0,pe();const i=await Et.send(a,{clientMessageId:r});if(b.loading=!1,!i.success){b.error=i.error||n("assistant.errorGeneric"),b.errorStatus=i.status??null,b.messages=b.messages.map(c=>c.id===r?{...c,status:"error",errorMessage:i.error||n("assistant.errorGeneric")}:c),pe();return}b.messages=b.messages.map(c=>c.id===r?{...c,status:"ok",errorMessage:""}:c),b.messages=[...b.messages,i.assistantMessage],b.followUpQuestions=i.assistantMessage.followUpQuestions||[],b.error="",b.errorStatus=null,pe()},retryMessage(e){const t=b.messages.find(a=>a.id===e&&a.role==="user");if(t)return this.sendMessage(t.content,{retryMessageId:e})},retryLastFailed(){const e=[...b.messages].reverse().find(t=>t.status==="error");if(e)return this.retryMessage(e.id)},async newChat(){b.loading||(await Et.reset(),pe(),this.focusComposer(),M(n("assistant.newChatStarted"),"success"))},handleSuggest(e){return this.sendMessage(e)},async handleAction(e,t,a){const r=String(e||"").toLowerCase();if(r===ht.view_product||r===ht.open_product){t&&(this.closeWidget(),we(t));return}if(r===ht.add_to_cart){if(!t)return;await G.add(t,a||void 0,1,{showLoginRequired:v.showLoginRequired});return}if(r===ht.open_cart){this.closeWidget(),zr();return}},async handleClick(e){const t=e.target;if(t.closest("[data-assistant-close]")){this.closeWidget();return}if(t.closest("[data-assistant-new-chat]")){await this.newChat();return}if(t.closest("[data-assistant-open-page]")){this.closeWidget(),window.location.hash="#/assistant";return}const a=t.closest("[data-assistant-suggest]");if(a){await this.sendMessage(a.dataset.assistantSuggest);return}const r=t.closest("[data-assistant-retry]");if(r){await this.retryMessage(r.dataset.assistantRetry);return}if(t.closest("[data-assistant-retry-last]")){await this.retryLastFailed();return}const i=t.closest("[data-assistant-action]");if(i){await this.handleAction(i.dataset.assistantAction,i.dataset.assistantActionProduct,i.dataset.assistantActionVariant);return}const c=t.closest("[data-favorite]");if(c){await W.toggle(c.dataset.favorite),pe();return}const d=t.closest("[data-add]");if(d){await G.add(d.dataset.add,void 0,1,{showLoginRequired:v.showLoginRequired});return}const u=t.closest("[data-product]");u&&(this.closeWidget(),we(u.dataset.product))},handleKeydown(e){var a,r,i;const t=(r=(a=e.target).closest)==null?void 0:r.call(a,"[data-assistant-input]");if(t&&e.key==="Enter"&&!e.shiftKey){e.preventDefault();const c=t.closest("[data-assistant-form]"),d=t.value;if(!d.trim()||b.loading)return;t.value="",this.sendMessage(d),(i=c==null?void 0:c.querySelector("[data-assistant-send]"))==null||i.setAttribute("disabled","")}},handleSubmit(e){var i,c;const t=(c=(i=e.target).closest)==null?void 0:c.call(i,"[data-assistant-form]");if(!t)return;e.preventDefault();const a=t.querySelector("[data-assistant-input]"),r=(a==null?void 0:a.value)||"";!r.trim()||b.loading||(a&&(a.value=""),this.sendMessage(r))},handleInput(e){var c,d;const t=(d=(c=e.target).closest)==null?void 0:d.call(c,"[data-assistant-input]");if(!t)return;const a=t.closest("[data-assistant-form]"),r=a==null?void 0:a.querySelector("[data-assistant-send]");if(!r)return;!t.value.trim()||b.loading?r.setAttribute("disabled",""):r.removeAttribute("disabled"),t.style.height="auto",t.style.height=`${Math.min(t.scrollHeight,140)}px`},render(){pe()},getFavoriteIds(){return P.favoriteIds||new Set}};async function rn(e){l.selectedBrand=e;const t=await ne.loadBrandProducts(e,l.sourceProducts,l.products),a=document.getElementById("brandViewContent");a&&(a.innerHTML=Si(e,t,n,t.slice(0,12).map((r,i)=>Ze(r,{screen:"brand",position:i})).join("")),ke(a))}async function Bt(){const e=window.location.hash||"#/",t=e.match(/^#\/product\/([^/?#]+)/),a=e.match(/^#\/brand\/([^/?#]+)/),r=e.match(/^#\/assistant\/?$/);if(t){Fr(),await Ye.loadDetailPage(decodeURIComponent(t[1])),window.scrollTo({top:0,behavior:"smooth"});return}if(a){on(),await rn(decodeURIComponent(a[1])),window.scrollTo({top:0,behavior:"smooth"});return}if(r){nn(),await Q.init(),Q.render();return}Ae()}function sn(){v.showLoginRequired()}function on(){var e;m.currentRoute="brand",o.homeView.hidden=!0,o.productDetailPage.hidden=!0,o.assistantPage&&(o.assistantPage.hidden=!0),(e=document.getElementById("brandView"))==null||e.removeAttribute("hidden")}function Da(){var e;(e=document.getElementById("brandView"))==null||e.setAttribute("hidden","")}function nn(){m.currentRoute="assistant",o.homeView.hidden=!0,o.productDetailPage.hidden=!0,Da(),o.assistantPage&&(o.assistantPage.hidden=!1),document.title="AI Assistant - BEAUTY SKIN KOREA",window.scrollTo({top:0,behavior:"smooth"}),ce()}function vt(){var e;return!!((e=o.favoritesDialog)!=null&&e.classList.contains("open"))}function ce(){var a,r,i;const e=document.querySelector(".mobile-bottom-nav");if(!e)return;let t="home";(a=o.profileDrawer)!=null&&a.classList.contains("open")?t="loginButton":(r=o.favoritesDialog)!=null&&r.classList.contains("open")?t="favoritesButton":(i=o.cartDrawer)!=null&&i.classList.contains("open")&&(t="cartButton"),e.querySelectorAll("[data-mobile-action]").forEach(c=>{c.classList.toggle("active",c.dataset.mobileAction===t)})}function Ae(){m.currentRoute="home",o.homeView.hidden=!1,o.productDetailPage.hidden=!0,o.assistantPage&&(o.assistantPage.hidden=!0),Da(),document.title="BEAUTY SKIN KOREA",ce()}function Fr(){m.currentRoute="product",o.homeView.hidden=!0,o.productDetailPage.hidden=!1,o.assistantPage&&(o.assistantPage.hidden=!0),Da(),window.scrollTo({top:0,behavior:"smooth"})}function da(){window.location.hash&&window.location.hash!=="#/"&&window.location.hash!=="#"?window.location.hash="#/":Ae()}function we(e){if(!e)return;const t=`#/product/${encodeURIComponent(e)}`;window.location.hash===t?Bt():window.location.hash=t}function zr(){if(!j.isLoggedIn()){sn();return}o.cartDrawer.classList.add("open"),o.cartDrawer.setAttribute("aria-hidden","false"),X(),ce(),G.load()}function Ie(){o.cartDrawer.classList.remove("open"),o.cartDrawer.setAttribute("aria-hidden","true"),z(),ce()}function cn(){const e=document.getElementById("megaMenu");if(window.innerWidth>680&&e){const t=e.classList.toggle("open");e.setAttribute("aria-hidden",String(!t)),o.catalogButton.setAttribute("aria-expanded",String(t)),t&&(o.catalogDrawer.classList.remove("open"),o.catalogDrawer.setAttribute("aria-hidden","true"));return}o.catalogDrawer.classList.add("open"),o.catalogDrawer.setAttribute("aria-hidden","false"),o.catalogButton.setAttribute("aria-expanded","true"),X()}function Tt(){const e=document.getElementById("megaMenu");e==null||e.classList.remove("open"),e==null||e.setAttribute("aria-hidden","true"),o.catalogDrawer.classList.remove("open"),o.catalogDrawer.setAttribute("aria-hidden","true"),o.catalogButton.setAttribute("aria-expanded","false"),z()}function X(){document.body.classList.add("locked")}function z(){var i,c,d;const e=(i=document.getElementById("compareDrawer"))==null?void 0:i.classList.contains("open"),t=(c=o.assistantWidget)==null?void 0:c.classList.contains("open"),a=o.cartDrawer.classList.contains("open")||o.catalogDrawer.classList.contains("open")||o.profileDrawer.classList.contains("open")||o.notificationsDrawer.classList.contains("open")||((d=o.favoritesDialog)==null?void 0:d.classList.contains("open"))||e||t,r=[o.detailDialog,o.authDialog,o.apiDialog,o.checkoutDialog,o.ordersDialog,o.supportDialog,o.privacyDialog,o.termsDialog,o.myReviewsDialog,o.writeReviewDialog,document.getElementById("compareDialog")].some(u=>u==null?void 0:u.open);!a&&!r&&document.body.classList.remove("locked")}function ln(){o.baseUrl.value=m.baseUrl,o.apiDialog.showModal(),X()}function dn(e){e.preventDefault(),m.baseUrl=xt(o.baseUrl.value||""),localStorage.setItem(C.storageKeys.baseUrl,m.baseUrl),o.apiDialog.close(),U.load({loadCart:()=>G.load()})}const v={isLoggedIn(){return j.isLoggedIn()},saveAuth(e,t={}){j.saveAuth(e,$,t)},clearAuth(){var e,t,a,r,i,c,d,u;j.clearAuthState($,l),la(),(t=(e=F.cart)==null?void 0:e.render)==null||t.call(e),sa(),(r=(a=F.favorites)==null?void 0:a.updateUi)==null||r.call(a),(c=(i=F.notifications)==null?void 0:i.clearState)==null||c.call(i),(d=o.myReviewsDialog)!=null&&d.open&&o.myReviewsDialog.close(),(u=o.writeReviewDialog)!=null&&u.open&&o.writeReviewDialog.close(),v.updateUi()},showLoginRequired(){v.openDialog("login"),M(n("auth.loginRequired"),"warning")},async validateOnStartup(){var t,a,r,i;const e=await j.validateAuthOnStartup();if(!e.authenticated){e.invalid?v.clearAuth():v.updateUi();return}e.profile&&($.user=e.profile),v.updateUi(),await Promise.allSettled([(a=(t=F.favorites)==null?void 0:t.load)==null?void 0:a.call(t),(i=(r=F.notifications)==null?void 0:r.loadUnreadCount)==null?void 0:i.call(r),v.preloadProfileData()])},async preloadProfileData(){var r,i,c,d,u;if(!j.isLoggedIn())return;const{userResponse:e,orders:t,reviewsResult:a}=await j.preloadProfileData();await((i=(r=F.home)==null?void 0:r.ensureRecentlyViewed)==null?void 0:i.call(r)),e&&($.user=e,localStorage.setItem(C.storageKeys.user,JSON.stringify(e)),v.updateUi()),t!==null&&(m.orders=t),a.success&&(l.myReviews=a.items),(c=o.profileDrawer)!=null&&c.classList.contains("open")&&((u=(d=F.profile)==null?void 0:d.render)==null||u.call(d))},updateUi(){const e=o.loginButton.querySelector("span");if(e)if(j.isLoggedIn()&&$.user){const t=String($.user.fullName||"").trim().split(/\s+/)[0]||"";e.textContent=t||n("profile.myProfile"),o.loginButton.setAttribute("aria-label",n("profile.myProfile"))}else j.isLoggedIn()?(e.textContent=n("profile.myProfile"),o.loginButton.setAttribute("aria-label",n("profile.myProfile"))):(e.textContent=n("auth.login"),o.loginButton.setAttribute("aria-label",n("auth.login")))},openDialog(e="login"){v.setMode(e),v.clearErrors(),o.authDialog.showModal(),X()},setMode(e){$.authMode=e;const t=e==="login";o.authTitle.textContent=n(t?"auth.login":"auth.register"),o.loginFields.hidden=!t,o.registerFields.hidden=t,o.authSubmit.textContent=n(t?"auth.signIn":"auth.createAccount"),o.loginTab.classList.toggle("active",t),o.registerTab.classList.toggle("active",!t),o.loginTab.setAttribute("aria-selected",String(t)),o.registerTab.setAttribute("aria-selected",String(!t)),v.clearErrors()},clearErrors(){document.querySelectorAll(".field-error").forEach(e=>{e.textContent=""}),o.authMessage.textContent="",o.authMessage.className="form-message"},setFieldError(e,t){const a=document.getElementById(`${e}Error`);a&&(a.textContent=t)},setLoading(e){$.authLoading=e,o.authSubmit.disabled=e,o.googleLoginButton&&(o.googleLoginButton.disabled=e),o.authSubmit.textContent=e?n("home.loading"):$.authMode==="login"?n("auth.signIn"):n("auth.createAccount")},setFirebaseLoading(e){$.authLoading=e,o.authSubmit.disabled=e,o.googleLoginButton&&(o.googleLoginButton.disabled=e,o.googleLoginButton.classList.toggle("loading",e))},async submit(e){e.preventDefault(),!$.authLoading&&($.authMode==="login"?await v.submitLogin():await v.submitRegister())},async submitLogin(){v.clearErrors();const e=o.loginEmail.value.trim(),t=o.loginPassword.value,a=j.validateLoginForm(e,t);if(a.errors.forEach(({field:i,messageKey:c})=>v.setFieldError(i,n(c))),!a.valid)return;v.setLoading(!0);const r=await j.submitLogin({email:e,password:t});if(v.setLoading(!1),!r.success){o.authMessage.textContent=r.error,o.authMessage.className="form-message error";return}await v.finishLogin(r.response,{email:e})},async submitRegister(){v.clearErrors();const e=j.validateRegisterForm({fullName:o.registerFullName.value.trim(),email:o.registerEmail.value.trim(),phone:o.registerPhone.value.trim(),password:o.registerPassword.value,confirmPassword:o.registerConfirmPassword.value});if(e.errors.forEach(({field:a,messageKey:r})=>v.setFieldError(a,n(r))),!e.valid)return;v.setLoading(!0);const t=await j.submitRegister({fullName:o.registerFullName.value.trim(),email:o.registerEmail.value.trim(),phone:o.registerPhone.value.trim(),password:o.registerPassword.value});if(v.setLoading(!1),!t.success){o.authMessage.textContent=t.error,o.authMessage.className="form-message error";return}o.authMessage.textContent="Registered. Endi login qiling.",o.authMessage.className="form-message success",v.setMode("login"),o.loginEmail.value=t.email},async submitFirebase(){if($.authLoading)return;v.clearErrors(),v.setFirebaseLoading(!0);let e;try{e=await po()}catch(a){v.setFirebaseLoading(!1);const r=j.mapFirebaseError((a==null?void 0:a.code)||"");if(r.cancelled)return;o.authMessage.textContent=r.message,o.authMessage.className="form-message error";return}const t=await j.submitFirebaseLogin(e);if(v.setFirebaseLoading(!1),!t.success){o.authMessage.textContent=t.error,o.authMessage.className="form-message error";return}await v.finishLogin(t.response)},async finishLogin(e,{email:t=""}={}){var i,c,d,u,p,h,g,y;v.saveAuth(e,{email:t}),v.updateUi(),o.authDialog.close();const a=await wt({silentAuth:!0,showError:!1});a&&($.user=a,localStorage.setItem(C.storageKeys.user,JSON.stringify(a)),v.updateUi());const r=String(((i=$.user)==null?void 0:i.fullName)||"").trim().split(/\s+/)[0]||String(((c=$.user)==null?void 0:c.email)||t||"").split("@")[0]||"User";M(`Welcome, ${r}.`),await Promise.allSettled([(u=(d=F.cart)==null?void 0:d.load)==null?void 0:u.call(d),(h=(p=F.favorites)==null?void 0:p.load)==null?void 0:h.call(p),(y=(g=F.notifications)==null?void 0:g.loadUnreadCount)==null?void 0:y.call(g)]),v.preloadProfileData()}},un=()=>I("/api/receivers",{requireAuth:!0,showError:!1}),pn=e=>I("/api/receivers",{method:"POST",body:JSON.stringify(e),requireAuth:!0}),hn=e=>I(`/api/receivers/${e}`,{method:"DELETE",requireAuth:!0}),mn=()=>I("/api/addresses",{requireAuth:!0,showError:!1}),gn=e=>I("/api/addresses",{method:"POST",body:JSON.stringify(e),requireAuth:!0}),fn=e=>I(`/api/addresses/${e}`,{method:"DELETE",requireAuth:!0}),re={resolveSelectedId(e,t,a){var i,c;const r=t||a||((i=e[0])==null?void 0:i.id)||null;return e.some(d=>String(d.id)===String(r))?r:((c=e[0])==null?void 0:c.id)||null},async loadReceivers(e,t){const a=await un();if(a===null)return{success:!1,error:m.lastApiError||"Receivers could not be loaded."};const r=x(a);return{success:!0,receivers:r,selectedReceiverId:this.resolveSelectedId(r,e,t)}},async loadAddresses(e,t){const a=await mn();if(a===null)return{success:!1,error:m.lastApiError||"Addresses could not be loaded."};const r=x(a);return{success:!0,addresses:r,selectedAddressId:this.resolveSelectedId(r,e,t)}},validateReceiverInput({firstName:e,lastName:t,phone:a}){return!e||!t||!a?{valid:!1,error:"First name, last name va phone majburiy."}:{valid:!0}},validateAddressInput({title:e,address:t,latitude:a,longitude:r}){return!e||!t||!Number.isFinite(a)||!Number.isFinite(r)?{valid:!1,error:"Title, address, latitude va longitude majburiy."}:{valid:!0}},async createReceiver(e){const t=await pn(e);return t===null?{success:!1,error:m.lastApiError}:{success:!0,receiver:t}},async createAddress(e){const t=await gn(e);return t===null?{success:!1,error:m.lastApiError}:{success:!0,address:t}},async deleteReceiver(e){return{success:await hn(e)!==null}},async deleteAddress(e){return{success:await fn(e)!==null}},validatePrepareCheckout(e){return e.length?{valid:!0}:{valid:!1,reason:"empty_selection"}},validateConfirmCheckout({selectedAddressId:e,selectedReceiverId:t}){return e?t?{valid:!0}:{valid:!1,reason:"receiver_required",openReceiverPicker:!0}:{valid:!1,reason:"address_required",openAddressPicker:!0}},calculateCheckoutTotals(e,t,a=0){return de.calculateCheckoutTotals(e,t,a)},buildOrderPayload({receiverId:e,addressId:t,cartItems:a}){const r=a.map(i=>Number(i.id)).filter(i=>Number.isFinite(i)&&i>0);return{receiverId:Number(e),addressId:Number(t),cartItemIds:r}},validateOrderItems(e){if(!e.length)return{valid:!1,reason:"no_items"};const t=e.map(a=>Number(a.id)).filter(a=>Number.isFinite(a)&&a>0);return t.length?{valid:!0,cartItemIds:t}:{valid:!1,reason:"invalid_items"}}};function vn(){return N.syncCartSelection(),re.calculateCheckoutTotals(k.cartItems,k.cartSelectedIds,k.cartCouponDiscount||0)}function yn(){const e=he(),t=new Date(Date.now()+3*864e5),a=new Date(Date.now()+5*864e5),r=i=>i.toLocaleDateString(e,{day:"numeric",month:"long"});return`${r(t)} – ${r(a)}`}function Hr(){return N.getSelectedCartItems().slice(0,6).map(e=>{var a;const t=e.image||((a=e.product)==null?void 0:a.image)||C.placeholderImage;return`<img src="${s(t)}" alt="" class="app-checkout-item-thumb" loading="eager" decoding="async" />`}).join("")}function Ur(){return f.receivers.length?`<div class="selectable-list">${f.receivers.map(e=>`
    <article class="selectable-card ${String(e.id)===String(f.selectedReceiverId)?"selected":""}" data-select-receiver="${s(e.id)}">
      <div>
        <strong>${s(e.fullName||"")}</strong>
        <p class="hint">${s(e.phone||"")}</p>
      </div>
      <button class="icon-button" data-delete-receiver="${s(e.id)}" type="button" aria-label="Delete receiver">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
      </button>
    </article>
  `).join("")}</div>`:'<div class="checkout-empty">No receivers yet. Add one below.</div>'}function Vr(){return`
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
  `}function jr(){return f.addresses.length?`<div class="selectable-list">${f.addresses.map(e=>`
    <article class="selectable-card ${String(e.id)===String(f.selectedAddressId)?"selected":""}" data-select-address="${s(e.id)}">
      <div>
        <strong>${s(e.title||"Address")}</strong>
        <p class="hint">${s(e.address||"")}</p>
      </div>
      <button class="icon-button" data-delete-address="${s(e.id)}" type="button" aria-label="Delete address">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
      </button>
    </article>
  `).join("")}</div>`:'<div class="checkout-empty">No addresses yet. Add one below.</div>'}function Kr(){return`
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
  `}function ua(e){return e==="address"?`
      <div class="app-checkout-picker">
        ${jr()}
        ${Kr()}
      </div>
    `:`
    <div class="app-checkout-picker">
      ${Ur()}
      ${Vr()}
    </div>
  `}function _r(){return`
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
  `}function Gr(){return`
    <div class="app-checkout-modal-art app-checkout-modal-art--success" aria-hidden="true">
      <svg viewBox="0 0 120 120" fill="none">
        <rect x="34" y="44" width="52" height="40" rx="4" fill="#D4A574"/>
        <path d="M34 52h52" stroke="#C49563" stroke-width="2"/>
        <path d="M48 44V36h24v8" stroke="#C49563" stroke-width="3"/>
        <path d="M60 24v28" stroke="#22C55E" stroke-width="4" stroke-linecap="round"/>
        <path d="M52 36l8-8 8 8" stroke="#22C55E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  `}function Wr(e,t){const a=(e==null?void 0:e.fullName)||"—",r=(t==null?void 0:t.address)||"—";return`
    <div class="app-checkout-overlay" role="dialog" aria-modal="true" aria-labelledby="checkoutConfirmTitle">
      <div class="app-checkout-modal">
        ${_r()}
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
  `}function Yr(){return`
    <div class="app-checkout-overlay app-checkout-overlay--success" role="dialog" aria-modal="true" aria-labelledby="checkoutSuccessTitle" data-checkout-success-dismiss>
      <div class="app-checkout-modal app-checkout-modal--success" data-checkout-success-card>
        ${Gr()}
        <h3 id="checkoutSuccessTitle">${s(n("checkout.successTitle"))}</h3>
        <p class="app-checkout-modal-sub">${s(n("checkout.successSubtitle"))}</p>
      </div>
    </div>
  `}function bn(e,t){const a=e&&t&&k.cartItems.length&&!f.orderSubmitting;return`
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
  `}function wn(){const e=f.orderSuccess;o.checkoutContent.innerHTML=`
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
  `}function Ja(){if(f.checkoutLoading){o.checkoutContent.innerHTML=`
      <div class="app-checkout-page">
        <div class="app-checkout-skeleton skeleton-card"></div>
        <div class="app-checkout-skeleton skeleton-card"></div>
        <div class="app-checkout-skeleton skeleton-card"></div>
      </div>
    `;return}const e=f.receivers.find(c=>String(c.id)===String(f.selectedReceiverId)),t=f.addresses.find(c=>String(c.id)===String(f.selectedAddressId)),a=vn(),r=t?`${s(t.title||"")} · ${s(t.address||"")}`:s(n("checkout.addressNotSelected")),i=e?`${s(e.fullName||"")} · ${s(e.phone||"")}`:s(n("checkout.receiverNotSelected"));o.checkoutContent.innerHTML=`
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
          ${f.checkoutAddressPickerOpen?ua("address"):""}
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
          ${f.checkoutReceiverPickerOpen?ua("receiver"):""}
        </section>

        <section class="app-checkout-card app-checkout-delivery-items">
          <h3>${s(n("checkout.deliveryOn",{dates:yn()}))}</h3>
          <div class="app-checkout-item-thumbs">${Hr()}</div>
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
      ${f.checkoutConfirmOpen?Wr(e,t):""}
      ${f.orderSuccess?Yr():""}
    </div>
  `,ke(o.checkoutContent)}const J={render:Ja,renderCheckout:Ja,renderCheckoutCartThumbs:Hr,renderCheckoutPickerList:ua,renderCheckoutConfirmIllustration:_r,renderCheckoutSuccessIllustration:Gr,renderCheckoutConfirmModal:Wr,renderCheckoutSuccessModal:Yr,renderReceiverList:Ur,renderReceiverForm:Vr,renderAddressList:jr,renderAddressForm:Kr,renderOrderSummary:bn,renderOrderSuccess:wn};let Ce=null;const _={getAbortController(){return Ce},abortOrder(){Ce==null||Ce.abort(),Ce=null},async prepare({showLoginRequired:e}={}){if(!j.isLoggedIn()){e==null||e();return}await G.load();const t=N.getSelectedCartItems();if(!re.validatePrepareCheckout(t).valid){M(n("cart.emptySelection")||"Select items to checkout","warning");return}f.orderSuccess=null,f.checkoutError="",f.checkoutStep=1,f.checkoutAddressPickerOpen=!1,f.checkoutReceiverPickerOpen=!1,f.checkoutCouponOpen=!1,f.checkoutConfirmOpen=!1,f.checkoutLoading=!0,J.render(),Ie(),o.checkoutDialog.showModal(),X(),await Promise.all([_.loadReceivers(),_.loadAddresses()]),f.checkoutLoading=!1,J.render()},async loadReceivers(e){const t=await re.loadReceivers(e,f.selectedReceiverId);if(!t.success){f.checkoutError=t.error;return}f.receivers=t.receivers,f.selectedReceiverId=t.selectedReceiverId},async loadAddresses(e){const t=await re.loadAddresses(e,f.selectedAddressId);if(!t.success){f.checkoutError=t.error;return}f.addresses=t.addresses,f.selectedAddressId=t.selectedAddressId},getTotals(){return N.getCartTotals()},openConfirm(){if(!N.getSelectedCartItems().length)return;const t=re.validateConfirmCheckout({selectedAddressId:f.selectedAddressId,selectedReceiverId:f.selectedReceiverId});if(!t.valid){t.reason==="address_required"?(f.checkoutError=n("checkout.addressRequired"),f.checkoutAddressPickerOpen=!0):t.reason==="receiver_required"&&(f.checkoutError=n("checkout.receiverRequired"),f.checkoutReceiverPickerOpen=!0),f.checkoutConfirmOpen=!1,J.render();return}f.checkoutError="",f.checkoutConfirmOpen=!0,J.render()},async submitOrder(){var a;if(f.orderSubmitting)return;const e=N.getSelectedCartItems(),t=re.validateOrderItems(e);if(!t.valid){f.checkoutError=t.reason==="invalid_items"?n("checkout.invalidItems"):n("checkout.noItems"),J.render();return}_.abortOrder(),Ce=new AbortController,f.orderSubmitting=!0,f.checkoutError="",J.render();try{const r=re.buildOrderPayload({receiverId:f.selectedReceiverId,addressId:f.selectedAddressId,cartItems:e}),i=await me.createOrder(r,{signal:Ce.signal});if(!i.success){f.checkoutError=i.error||n("checkout.orderFailed"),M(f.checkoutError,"error");return}_.finishAndGoHome(),M(n("checkout.orderCreated"),"success"),G.load().then(()=>N.render())}catch(r){f.checkoutError=(r==null?void 0:r.message)||n("checkout.orderFailed"),M(f.checkoutError,"error")}finally{f.orderSubmitting=!1,Ce=null,(a=o.checkoutDialog)!=null&&a.open&&J.render()}},finishAndGoHome(){var e,t;try{f.checkoutConfirmOpen=!1,f.orderSuccess=null,f.checkoutError="",(e=o.checkoutDialog)==null||e.close(),Ie(),z(),Ae(),window.location.hash&&window.location.hash!=="#/"&&window.location.hash!=="#"&&(window.location.hash="#/"),window.scrollTo({top:0,behavior:"smooth"})}catch(a){console.error("finishAndGoHome failed:",a),f.checkoutConfirmOpen=!1,f.orderSubmitting=!1,(t=o.checkoutDialog)==null||t.close(),z()}},async createReceiver(){var d,u,p;const e=(d=document.getElementById("receiverFirstName"))==null?void 0:d.value.trim(),t=(u=document.getElementById("receiverLastName"))==null?void 0:u.value.trim(),a=(p=document.getElementById("receiverPhone"))==null?void 0:p.value.trim(),r=document.getElementById("receiverFormError"),i=re.validateReceiverInput({firstName:e,lastName:t,phone:a});if(!i.valid){r&&(r.textContent=i.error);return}const c=await re.createReceiver({firstName:e,lastName:t,phone:a});c.success&&(await _.loadReceivers(c.receiver.id),J.render(),M("Receiver added"))},async createAddress(){var u,p,h,g;const e=(u=document.getElementById("addressTitle"))==null?void 0:u.value.trim(),t=(p=document.getElementById("addressText"))==null?void 0:p.value.trim(),a=Number((h=document.getElementById("addressLatitude"))==null?void 0:h.value),r=Number((g=document.getElementById("addressLongitude"))==null?void 0:g.value),i=document.getElementById("addressFormError"),c=re.validateAddressInput({title:e,address:t,latitude:a,longitude:r});if(!c.valid){i&&(i.textContent=c.error);return}const d=await re.createAddress({title:e,address:t,latitude:a,longitude:r});d.success&&(await _.loadAddresses(d.address.id),J.render(),M("Address added"))},async deleteReceiver(e){(await re.deleteReceiver(e)).success&&(String(f.selectedReceiverId)===String(e)&&(f.selectedReceiverId=null),await _.loadReceivers(),J.render())},async deleteAddress(e){(await re.deleteAddress(e)).success&&(String(f.selectedAddressId)===String(e)&&(f.selectedAddressId=null),await _.loadAddresses(),J.render())},applyCoupon(e){const t=de.applyCoupon(e,N.getCartTotals().subtotal);t.valid?(k.cartCoupon=t.coupon,k.cartCouponDiscount=t.discount,M(n("cart.couponApplied"),"success")):t.invalid&&M(n("cart.couponInvalid"),"warning"),J.render(),N.render()}},kn=()=>I("/api/notifications",{requireAuth:!0,showError:!1}),Sn=()=>I("/api/notifications/unread-count",{requireAuth:!0,showError:!1}),Cn=e=>I(`/api/notifications/${e}/read`,{method:"POST",requireAuth:!0,showError:!1}),$n=e=>I("/api/notifications/token",{method:"POST",body:JSON.stringify({token:e}),requireAuth:!0}),pa={async loadNotifications(){const e=await kn();return e===null?Pe("Notifications could not be loaded."):{success:!0,notifications:Os(e).map(Ms).filter(t=>t.id!==void 0)}},async loadUnreadCount(){const e=await Sn();return e===null?{success:!1,sessionExpired:ca()}:{success:!0,count:Bs(e)}},async markRead(e){return await Cn(e)===null?{success:!1,sessionExpired:ca()}:{success:!0}},async saveToken(e){const t=String(e||"").trim();if(!t)return{success:!1,error:"empty"};const a=await $n(t);return{success:a!==null,result:a}}};function Pn({notification:e,updating:t=!1,labels:a={}}){const{unreadLabel:r="Unread",readLabel:i="Read",savingLabel:c="Saving...",markReadLabel:d="Mark read",typeLabel:u="",typeIcon:p="i"}=a;return`
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
          <span>${ka(e.createdAt)}</span>
        </div>
      </div>
      <button class="secondary-button notification-read-button" data-notification-read="${s(e.id)}" ${e.read||t?"disabled":""} type="button">
        ${e.read?s(i):s(t?c:d)}
      </button>
    </article>
  `}function In(e){return{ORDER:"O",PROMO:"%",SYSTEM:"i"}[e]||"i"}function En({itemsHtml:e=""}){return`
    <div class="notifications-list">
      ${e}
    </div>
  `}function An(){return`
    <div class="notifications-loading">
      <div class="skeleton-card"></div>
      <div class="skeleton-card"></div>
    </div>
  `}function Za({title:e,message:t="",retryLabel:a=""}){return`
    <div class="notifications-empty">
      <strong>${s(e)}</strong>
      ${t?`<p>${s(t)}</p>`:""}
      ${a?`<button class="secondary-button" data-notifications-retry type="button">${s(a)}</button>`:""}
    </div>
  `}const Z={clearState({closeDrawer:e}={}){var t;q.notifications=[],q.notificationsLoading=!1,q.notificationsError="",q.unreadCount=0,q.unreadCountLoading=!1,q.notificationUpdatingIds=new Set,Z.updateBadge(),(t=o.notificationsDrawer)!=null&&t.classList.contains("open")&&(e==null||e())},updateBadge(){o.notificationsCount.textContent=q.unreadCount,o.notificationsCount.hidden=q.unreadCount<=0,o.notificationsSummary.textContent=`${q.unreadCount} ${n("notifications.unread")}`},renderCard(e){return Pn({notification:e,updating:q.notificationUpdatingIds.has(String(e.id)),labels:{unreadLabel:n("notifications.unread"),readLabel:n("notifications.read"),savingLabel:n("common.saving"),markReadLabel:n("notifications.markRead"),typeLabel:qs(e.type),typeIcon:In(e.type)}})},render(){if(Z.updateBadge(),q.notificationsLoading){o.notificationsContent.innerHTML=An();return}if(q.notificationsError){o.notificationsContent.innerHTML=Za({title:n("notifications.title"),message:q.notificationsError,retryLabel:n("common.tryAgain")});return}if(!q.notifications.length){o.notificationsContent.innerHTML=Za({title:n("notifications.none"),message:"Order, promo and system updates will appear here."});return}o.notificationsContent.innerHTML=En({itemsHtml:q.notifications.map(e=>Z.renderCard(e)).join("")})},async loadUnreadCount({isLoggedIn:e,onSessionExpired:t}={}){if(!(e!=null&&e())){Z.clearState();return}q.unreadCountLoading=!0;const a=await pa.loadUnreadCount();if(q.unreadCountLoading=!1,!a.success){if(a.sessionExpired){Z.clearState({closeDrawer:t});return}Z.updateBadge();return}q.unreadCount=a.count,Z.updateBadge()},async load({isLoggedIn:e,showLoginRequired:t,onSessionExpired:a}={}){if(!(e!=null&&e())){t==null||t();return}q.notificationsLoading=!0,q.notificationsError="",Z.render();const r=await pa.loadNotifications();if(q.notificationsLoading=!1,!r.success){if(r.sessionExpired){Z.clearState({closeDrawer:a});return}q.notificationsError=r.error,Z.render();return}q.notifications=r.notifications,Z.render()}};function Ln({statusLabel:e,statusModifier:t}){return`
    <span class="app-orders-status app-orders-status--${t}">
      ${s(e)}
    </span>
  `}function Tn({items:e=[]}){return e.length?e.slice(0,6).map(t=>`
    <img
      src="${s(t.image||C.placeholderImage)}"
      alt=""
      class="app-orders-thumb"
      loading="lazy"
      decoding="async"
    />
  `).join(""):'<span class="app-orders-thumb app-orders-thumb--empty" aria-hidden="true"></span>'}function Dn({order:e,statusBadgeHtml:t,thumbsHtml:a,orderLabel:r,itemsCountLabel:i,itemsLabel:c,totalLabel:d,addressLabel:u,viewDetailsLabel:p,lineCount:h,itemCount:g}){const y=e.createdAt?String(e.createdAt):"";return`
    <article class="app-orders-card">
      <div class="app-orders-card-top">
        <span class="app-orders-timestamp">${s(y)}</span>
        ${t}
      </div>
      <div class="app-orders-thumbs">${a}</div>
      <h3 class="app-orders-card-title">
        ${s(r)} #${s(e.id)} · ${s(i)}
      </h3>
      <p class="app-orders-card-meta">${s(c)}</p>
      <div class="app-orders-card-total">
        <span>${s(d)}</span>
        <strong>${vr(e.totalAmount)}</strong>
      </div>
      <p class="app-orders-card-name">${s(e.fullName||"")}</p>
      <p class="app-orders-card-phone">${s(e.phone||"")}</p>
      <p class="app-orders-card-address">${s(u)} ${s(e.address||"")}</p>
      <button class="app-orders-details-btn" data-order-detail="${s(e.id)}" type="button">
        ${s(p)}
      </button>
    </article>
  `}const ha=[{key:"NEW",icon:"clock"},{key:"CONFIRMED",icon:"check"},{key:"PACKED",icon:"box"},{key:"SHIPPED",icon:"truck"},{key:"DELIVERED",icon:"car"}];function Rn(e){const t={clock:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',check:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4 10-10"/></svg>',box:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4 7v10l8 4 8-4V7z"/><path d="M4 7l8 4 8-4M12 11v10"/></svg>',truck:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h11v8H3z"/><path d="M14 10h4l3 3v2h-7z"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="17.5" cy="17.5" r="1.5"/></svg>',car:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14l-1-4H6z"/><path d="M4 16h16v3H4z"/><circle cx="7.5" cy="16.5" r="1.5"/><circle cx="16.5" cy="16.5" r="1.5"/></svg>'};return t[e]||t.clock}function Mn(e=""){const t=String(e||"").toUpperCase();if(t==="PENDING")return 0;const a=ha.findIndex(r=>r.key===t);return a>=0?a:0}function qn({status:e="",statusLabelFor:t}){const a=Mn(e),r=["CANCELED","CANCELLED"].includes(String(e||"").toUpperCase());return`
    <div class="app-orders-stepper ${r?"is-canceled":""}">
      ${ha.map((i,c)=>{const d=ha.length-1,u=!r&&a===d;return`
          <div class="app-orders-step ${!r&&(c<a||u&&c<=a)?"is-done":!r&&c===a&&!u?"is-active":""}">
            <span class="app-orders-step-icon">${Rn(i.icon)}</span>
            <span class="app-orders-step-label">${s(t(i.key))}</span>
          </div>
        `}).join("")}
    </div>
  `}function Bn({item:e}){return`
    <article class="app-orders-detail-product">
      <img src="${s(e.image||C.placeholderImage)}" alt="${s(e.name)}" loading="lazy" decoding="async" />
      <div>
        <strong>${s(e.name)}</strong>
        <p class="app-orders-detail-muted">x${e.quantity}</p>
      </div>
    </article>
  `}function On({lineCount:e,itemCount:t,totalAmount:a,goodsLabel:r,totalAmountLabel:i}){return`
    <div class="app-orders-detail-summary">
      <div class="app-orders-detail-summary-row">
        <span>${s(r)}</span>
        <strong>${s(e||t)}</strong>
      </div>
      <div class="app-orders-detail-summary-row">
        <span>${s(i)}</span>
        <strong>${vr(a)}</strong>
      </div>
    </div>
  `}function xn({status:e="NEW"}){const t=String(e||"NEW").toUpperCase();return`
    <span class="app-orders-detail-status-pill">
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
      ${s(t)}
    </span>
  `}function Nn(e=""){const a=`orders.statusMessage.${String(e||"").toUpperCase()}`,r=n(a);return r!==a?r:n("orders.statusMessage.default")}function Fn(e={}){const t=Number(e.latitude??e.addressLatitude),a=Number(e.longitude??e.addressLongitude);if(Number.isFinite(t)&&Number.isFinite(a))return`https://www.google.com/maps/search/?api=1&query=${t},${a}`;const r=encodeURIComponent(e.address||"");return r?`https://www.google.com/maps/search/?api=1&query=${r}`:""}const zn={render({renderHeader:e,renderOrderCard:t}={}){if(m.orderDetailLoading)return`
        <div class="app-orders-page">
          ${e(n("orders.details"),"back")}
          <div class="app-orders-scroll">
            <div class="app-orders-skeleton skeleton-card"></div>
            <div class="app-orders-skeleton skeleton-card"></div>
          </div>
        </div>
      `;if(m.orderDetailError)return`
        <div class="app-orders-page">
          ${e(n("orders.details"),"back")}
          <div class="app-orders-scroll">
            <div class="app-orders-error">
              <strong>${s(n("orders.detailUnavailable"))}</strong>
              <p>${s(m.orderDetailError)}</p>
            </div>
          </div>
        </div>
      `;if(!m.selectedOrder)return`
        <div class="app-orders-page">
          ${e(n("orders.title"),"close")}
          <div class="app-orders-scroll">
            ${m.orders.map(t).join("")}
          </div>
        </div>
      `;const a=m.selectedOrder,r=Array.isArray(a.items)?a.items.map(u=>wa({...u,orderId:a.id})):[],i=me.getLineCount(a),c=me.getItemCount(a),d=Fn(a);return`
      <div class="app-orders-page">
        ${e(`${n("orders.order")} #${a.id}`,"back")}
        <div class="app-orders-scroll app-orders-detail">
          <article class="app-orders-detail-hero">
            <div class="app-orders-detail-hero-top">
              <div>
                <h3>${s(n("orders.order"))} #${s(a.id)}</h3>
                <p class="app-orders-detail-date">${s(Us(a.createdAt))}</p>
              </div>
              ${xn({status:a.status})}
            </div>
            ${qn({status:a.status,statusLabelFor:Dr})}
            ${On({lineCount:n("orders.itemsCount",{count:i||c}),itemCount:c,totalAmount:a.totalAmount,goodsLabel:n("orders.goodsLabel"),totalAmountLabel:n("orders.totalAmount")})}
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
            ${r.length?r.map(u=>Bn({item:u})).join(""):`<p class="app-orders-detail-muted">${s(n("orders.noItems"))}</p>`}
          </section>

          <section class="app-orders-detail-section">
            <h4>${s(n("orders.orderActions"))}</h4>
            <p class="app-orders-detail-muted">${s(Nn(a.status))}</p>
          </section>

          <button class="app-orders-details-btn app-orders-feedback-btn" type="button" data-order-feedback="${s(a.id)}">
            ${s(n("orders.feedback"))}
          </button>
        </div>
      </div>
    `}};function Hn(){return'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>'}function Ue(e,t){return`
    <header class="app-orders-header">
      <button class="app-orders-back" ${t==="close"?`data-orders-close type="button" aria-label="${s(n("checkout.back"))}"`:`data-orders-back type="button" aria-label="${s(n("checkout.back"))}"`}>
        ${Hn()}
      </button>
      <h2>${s(e)}</h2>
      <span aria-hidden="true"></span>
    </header>
  `}function Un(e=""){return Ln({statusLabel:Rr(e),statusModifier:me.orderStatusModifier(e)})}function Vn(e={}){const t=(Array.isArray(e.items)?e.items:[]).map(a=>wa({...a,orderId:e.id}));return Tn({items:t})}function Xt(e){const t=me.getItemCount(e),a=me.getLineCount(e);return Dn({order:e,statusBadgeHtml:Un(e.status),thumbsHtml:Vn(e),orderLabel:n("orders.order"),itemsCountLabel:n("orders.itemsCount",{count:a}),itemsLabel:n("orders.items",{count:t}),totalLabel:n("orders.totalLabel"),addressLabel:n("orders.addressLabel"),viewDetailsLabel:n("orders.viewDetails"),lineCount:a,itemCount:t})}const oe={renderHeader:Ue,renderOrderCard:Xt,render(){if(m.ordersLoading){o.ordersContent.innerHTML=`
        <div class="app-orders-page">
          ${Ue(n("orders.title"),"close")}
          <div class="app-orders-scroll">
            <div class="app-orders-skeleton skeleton-card"></div>
            <div class="app-orders-skeleton skeleton-card"></div>
          </div>
        </div>
      `;return}if(m.ordersError){o.ordersContent.innerHTML=`
        <div class="app-orders-page">
          ${Ue(n("orders.title"),"close")}
          <div class="app-orders-scroll">
            <div class="app-orders-error">
              <strong>${s(n("orders.unavailable"))}</strong>
              <p>${s(m.ordersError)}</p>
              <button class="app-orders-details-btn" data-orders-retry type="button">${s(n("common.tryAgain"))}</button>
            </div>
          </div>
        </div>
      `;return}if(!m.orders.length){o.ordersContent.innerHTML=`
        <div class="app-orders-page">
          ${Ue(n("orders.title"),"close")}
          <div class="app-orders-scroll">
            <div class="app-orders-empty">
              <strong>${s(n("orders.none"))}</strong>
              <p>${s(n("orders.emptyHint"))}</p>
              <button class="app-orders-details-btn" data-orders-start-shopping type="button">${s(n("home.startShopping"))}</button>
            </div>
          </div>
        </div>
      `;return}if(m.orderDetailLoading||m.selectedOrder||m.orderDetailError){o.ordersContent.innerHTML=zn.render({renderHeader:Ue,renderOrderCard:Xt});return}o.ordersContent.innerHTML=`
      <div class="app-orders-page">
        ${Ue(n("orders.title"),"close")}
        <div class="app-orders-scroll">
          ${m.orders.map(Xt).join("")}
        </div>
      </div>
    `,ke(o.ordersContent)},async load({onSessionExpired:e}={}){m.ordersLoading=!0,m.ordersError="",m.selectedOrder=null,m.selectedOrderHistory=[],m.orderHistoryWarning="",oe.render();const t=await me.loadOrders();if(m.ordersLoading=!1,!t.success){if(t.sessionExpired){e==null||e();return}m.ordersError=t.error,oe.render();return}m.orders=t.orders,oe.render()},async openDetail(e){m.orderDetailLoading=!0,m.orderDetailError="",m.orderHistoryWarning="",oe.render();const t=await me.loadOrderDetail(e);if(m.orderDetailLoading=!1,!t.success){m.orderDetailError=t.error,oe.render();return}m.selectedOrder=t.order,m.selectedOrderHistory=t.history,m.orderHistoryWarning=t.historyWarning,oe.render()}},V={clearState(){Z.clearState({closeDrawer:V.close})},async loadUnreadCount(){return Z.loadUnreadCount({isLoggedIn:v.isLoggedIn,onSessionExpired:V.close})},async open(){if(!v.isLoggedIn()){v.showLoginRequired();return}o.notificationsDrawer.classList.add("open"),o.notificationsDrawer.setAttribute("aria-hidden","false"),X(),await Promise.all([V.load(),V.loadUnreadCount()])},close(){o.notificationsDrawer.classList.remove("open"),o.notificationsDrawer.setAttribute("aria-hidden","true"),z()},async load(){return Z.load({isLoggedIn:v.isLoggedIn,showLoginRequired:v.showLoginRequired,onSessionExpired:V.close})},async markRead(e,t={}){const a=q.notifications.find(i=>String(i.id)===String(e));if(!a||a.read)return!0;q.notificationUpdatingIds.add(String(e)),Z.render();const r=await pa.markRead(e);return q.notificationUpdatingIds.delete(String(e)),r.success?(a.read=!0,q.notifications=q.notifications.map(i=>String(i.id)===String(e)?{...i,read:!0}:i),q.unreadCount=Math.max(0,q.unreadCount-1),Z.render(),await V.loadUnreadCount(),t.silent||M("Marked as read"),!0):r.sessionExpired?(V.clearState(),!1):(M(m.lastApiError||"Notification could not be updated."),Z.render(),!1)},async handleCardClick(e){var a,r;const t=q.notifications.find(i=>String(i.id)===String(e));t&&(t.read||await V.markRead(e,{silent:!0}),t.type==="ORDER"&&t.refId&&(V.close(),await((r=(a=F.orders)==null?void 0:a.show)==null?void 0:r.call(a)),await oe.openDetail(t.refId)))}},Be={async show(){if(!v.isLoggedIn()){v.showLoginRequired();return}o.ordersDialog.showModal(),X(),await Be.load()},async load(){return oe.load({onSessionExpired:()=>o.ordersDialog.close()})},handleClick(e){var p,h,g,y,A,T,B;const t=e.target.closest("[data-orders-close]"),a=e.target.closest("[data-orders-back]"),r=e.target.closest("[data-order-detail]"),i=e.target.closest("[data-orders-retry]"),c=e.target.closest("[data-orders-start-shopping]"),d=e.target.closest("[data-order-write-review]"),u=e.target.closest("[data-order-feedback]");if(t){o.ordersDialog.close(),(h=(p=F.navigation)==null?void 0:p.unlockBodyIfNoOverlay)==null||h.call(p);return}if(a){m.selectedOrder=null,m.selectedOrderHistory=[],m.orderDetailError="",m.orderHistoryWarning="",oe.render();return}if(d){(y=(g=F.reviews)==null?void 0:g.openWrite)==null||y.call(g,{productId:d.dataset.orderWriteReview,orderId:d.dataset.reviewOrder,productName:d.dataset.reviewName});return}if(u){(T=F.toast)==null||T.call(F,(A=F.i18n)==null?void 0:A.t("profile.comingSoon"),"info");return}if(r){oe.openDetail(r.dataset.orderDetail);return}if(i){Be.load();return}c&&(o.ordersDialog.close(),(B=document.getElementById("products"))==null||B.scrollIntoView({behavior:"smooth",block:"start"}))}};function jn(){var e;document.documentElement.removeAttribute("data-theme"),document.documentElement.style.colorScheme="light";try{localStorage.removeItem("beauty_skin_theme")}catch{}(e=document.getElementById("themeToggle"))==null||e.remove()}const Ra="beauty_skin_search_history",Qr=8,Kn=["SNAIL CREAM","COSRX","SUNSCREEN","LIP TINT","VITAMIN C","COLLAGEN","K-BEAUTY SET","MOISTURIZER"];let Xa=null,De=null;function Jr(){try{return JSON.parse(localStorage.getItem(Ra)||"[]").slice(0,Qr)}catch{return[]}}function Qe(e){const t=String(e||"").trim();if(!t||t.length<2)return;const a=Jr().filter(r=>r.toLowerCase()!==t.toLowerCase());a.unshift(t),localStorage.setItem(Ra,JSON.stringify(a.slice(0,Qr)))}function _n(){localStorage.removeItem(Ra),ma("")}function er(e,t="query"){const a=t==="history"?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.3-4.3m1.3-5.2a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"/></svg>';return`<button class="search-chip" type="button" data-search-chip="${s(e)}" data-chip-type="${t}">${a}${s(e)}</button>`}async function Gn(e){if(!e||e.length<2)return[];const t=await aa(e,{page:0,size:6});return x(t).map(K)}function Wn(e){return`
    <button class="search-result-item" type="button" data-search-product="${s(e.id)}">
      <img src="${s(e.image)}" alt="" loading="lazy" />
      <div>
        <strong>${s(e.name)}</strong>
        <span>${s(D(e.finalPrice))}</span>
      </div>
    </button>
  `}async function ma(e=""){const t=document.getElementById("searchPanel");if(!t)return;const a=e.trim(),r=Jr();let i="";if(a.length>=2){i=`<div class="search-panel-section"><div class="search-panel-label">${s(n("search.results"))}</div><div class="search-results-list">${Array(3).fill('<div class="ds-skeleton" style="height:56px;margin-bottom:8px;border-radius:10px"></div>').join("")}</div></div>`,t.innerHTML=i,t.classList.add("open");const d=await Gn(a),u=t.querySelector(".search-results-list");u&&(u.innerHTML=d.length?d.map(Wn).join(""):`<p class="hint" style="padding:8px">${s(n("search.noResults"))}</p>`);return}const c=[];c.push(`
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
        <div class="search-chips">${r.map(d=>er(d,"history")).join("")}</div>
      </div>
    `),c.push(`
    <div class="search-panel-section">
      <div class="search-panel-label">${s(n("search.trending"))}</div>
      <div class="search-chips">${Kn.map(d=>er(d,"trending")).join("")}</div>
    </div>
  `),t.innerHTML=c.join("")}function Ve(){var e;(e=document.getElementById("searchPanel"))==null||e.classList.remove("open")}function Yn({onSearch:e,onProductSelect:t}={}){var c,d;De=e;const a=document.getElementById("searchInput"),r=document.getElementById("searchPanel"),i=document.querySelector(".search-wrap");!a||!r||(a.addEventListener("focus",()=>{ma(a.value),r.classList.add("open")}),a.addEventListener("input",()=>{clearTimeout(Xa),Xa=setTimeout(()=>ma(a.value),C.searchDebounceMs)}),r.addEventListener("click",u=>{const p=u.target.closest("[data-search-chip]"),h=u.target.closest("[data-search-product]");if(u.target.closest("[data-clear-search-history]")){_n();return}if(p){a.value=p.dataset.searchChip,Qe(p.dataset.searchChip),Ve(),De==null||De(p.dataset.searchChip);return}h&&(Ve(),t==null||t(h.dataset.searchProduct))}),document.addEventListener("click",u=>{i!=null&&i.contains(u.target)||Ve()}),a.addEventListener("keydown",u=>{u.key==="Escape"&&(Ve(),a.blur())}),(c=document.querySelector(".search-voice"))==null||c.addEventListener("click",()=>{if(!("webkitSpeechRecognition"in window)&&!("SpeechRecognition"in window))return;const u=window.SpeechRecognition||window.webkitSpeechRecognition,p=new u;p.lang=document.documentElement.lang||"en-US",p.onresult=h=>{const g=h.results[0][0].transcript;a.value=g,Qe(g),De==null||De(g),Ve()},p.start()}),(d=document.querySelector(".search-image"))==null||d.addEventListener("click",()=>{const u=document.createElement("input");u.type="file",u.accept="image/*",u.addEventListener("change",()=>{var p;(p=u.files)!=null&&p[0]&&(a.placeholder=n("search.imagePlaceholder"))}),u.click()}))}const fe={async open(){if(!v.isLoggedIn()){v.showLoginRequired();return}$.profileEditing=!1,$.profileMenuOpen=!1,o.profileDrawer.classList.add("open"),o.profileDrawer.setAttribute("aria-hidden","false"),X(),ce(),ie.render(),await fe.loadSnapshot()},close(){$.profileMenuOpen=!1,$.profileLoadSeq+=1,o.profileDrawer.classList.remove("open"),o.profileDrawer.setAttribute("aria-hidden","true"),z(),ce()},async loadSnapshot(){var e;return ie.loadSnapshot({isLoggedIn:v.isLoggedIn,loadUnreadCount:(e=F.notifications)==null?void 0:e.loadUnreadCount,updateAuthUi:v.updateUi})},async handleAction(e){var t,a,r,i,c,d,u,p,h,g;return ie.handleAction(e,{closeProfile:fe.close,showOrders:(t=F.orders)==null?void 0:t.show,openOrderDetail:oe.openDetail,clearAuth:v.clearAuth,showToast:M,openFavorites:(a=F.favorites)==null?void 0:a.open,openMyReviews:(r=F.reviews)==null?void 0:r.open,openNotifications:(i=F.notifications)==null?void 0:i.open,setLanguage:(c=F.i18n)==null?void 0:c.setLanguage,applyTranslations:(d=F.i18n)==null?void 0:d.applyTranslations,openPrivacy:(u=F.support)==null?void 0:u.openPrivacy,openTerms:(p=F.support)==null?void 0:p.openTerms,openSupport:(h=F.support)==null?void 0:h.open,prepareCheckout:(g=F.checkout)==null?void 0:g.prepare})},async submitEdit(e){var d,u,p;e.preventDefault();const t=$.user||{},a={id:t.id,email:t.email,fullName:(d=document.getElementById("profileFullName"))==null?void 0:d.value.trim(),phone:(u=document.getElementById("profilePhone"))==null?void 0:u.value.trim(),profileImage:(p=document.getElementById("profileImage"))==null?void 0:p.value.trim()},r=document.getElementById("profileMessage"),i=Me.validateProfileUpdate(a);if(!i.valid){r&&(r.textContent=i.error,r.className="form-message error");return}const c=await Me.updateProfile(a);if(!c.success){r&&(r.textContent=c.error,r.className="form-message error");return}c.user&&($.user=c.user,localStorage.setItem(C.storageKeys.user,JSON.stringify(c.user))),$.profileEditing=!1,v.updateUi(),ie.render(),M("Profile updated.")}},Qn={async render(e,{showHomeView:t}={}){const a=e.trim();if(m.currentSearchQuery=a,m.currentGridScreen=a?"search":"home",m.currentRoute==="product"&&(window.location.hash="#/",t==null||t()),!a){l.selectedCategory="ALL",se.renderCategories(),o.title.textContent=n("home.popular"),await U.loadProducts();return}o.title.textContent=`"${a}" qidiruvi`,o.status.textContent=n("home.loading"),Ke(o.grid,10);const r=await Pr.search(a);l.products=r,be(),ue(l.products,n("home.noProducts"),{screen:"search"}),o.status.textContent=""}},ye={handleInput(e){clearTimeout(m.searchTimer),m.searchTimer=setTimeout(()=>{const t=e.target.value;ye.search(t).catch(()=>{ve(o.grid,"Qidiruv vaqtida xatolik yuz berdi."),o.status.textContent=""}),t.trim().length>=2&&Qe(t)},C.searchDebounceMs)},async search(e){return Qn.render(e,{showHomeView:Ae})},handleCategoryClick(e){const t=e.target.closest("[data-category]");t&&(Tt(),se.renderCategoryProducts(t.dataset.category,{showHomeView:Ae}).catch(()=>{ve(o.grid,"Kategoriya mahsulotlari yuklanmadi."),o.status.textContent=""}),window.setTimeout(()=>{var a;(a=document.getElementById("products"))==null||a.scrollIntoView({behavior:"smooth",block:"start"})},0))}};async function jt(){if(l.compareIds=Xe(),bi(l.compareIds.length),!l.compareIds.length){l.compareProducts=[],xa([],n);return}const e=l.compareIds.map(a=>W.findKnownProduct(a)).filter(Boolean),t=l.compareIds.filter(a=>!e.find(r=>String(r.id)===String(a)));if(t.length){const a=await ne.loadProductsByIds(t);l.compareProducts=[...e,...a].slice(0,Je)}else l.compareProducts=e.slice(0,Je);xa(l.compareProducts,n)}async function Zr(e){const t=Zs(e);if(t.full){M(n("compare.full",{max:Je}),"warning");return}l.compareIds=t.ids,await jt(),M(t.added?n("compare.added"):n("compare.removed"),"success")}function Jn(){var e,t;(e=document.getElementById("compareDrawer"))==null||e.classList.add("open"),(t=document.getElementById("compareDrawer"))==null||t.setAttribute("aria-hidden","false"),X()}function Zn(){var e,t;(e=document.getElementById("compareDrawer"))==null||e.classList.remove("open"),(t=document.getElementById("compareDrawer"))==null||t.setAttribute("aria-hidden","true"),z()}function Xn(){var e;Cr(l.compareProducts,n),(e=document.getElementById("compareDialog"))==null||e.showModal(),X()}function ec(){ei(),jt(),Cr(l.compareProducts,n)}function tc(e){Xs(e),jt()}function ac(e,t,a){return G.add(e,t,a,{showLoginRequired:()=>v.showLoginRequired()})}function tr(e){if(e.key!=="Enter"&&e.key!==" ")return;const t=e.target.closest("[data-product]");if(!t)return;e.preventDefault();const a=t.dataset.product;a&&(At(a),we(a))}function Ge(e){const t=e.target.closest("[data-show-all]"),a=e.target.closest("[data-favorite]"),r=e.target.closest("[data-add]"),i=e.target.closest("[data-detail]"),c=e.target.closest("[data-quick-view]"),d=e.target.closest("[data-compare]"),u=e.target.closest("[data-product]");if(t){e.stopPropagation(),U.load({loadCart:()=>G.load()});return}if(d){e.stopPropagation(),Zr(d.dataset.compare);return}if(c){e.stopPropagation(),At(c.dataset.quickView),we(c.dataset.quickView);return}if(a){e.stopPropagation(),W.toggle(a.dataset.favorite);return}if(r){e.stopPropagation(),ac(r.dataset.add,null,1);return}if(i){e.stopPropagation();const p=i.dataset.detail;if(!p)return;At(p),we(p);return}if(u&&!e.target.closest("button, a")){e.preventDefault(),e.stopPropagation();const p=u.dataset.product;if(!p)return;At(p),we(p)}}let ar=null;function rc(){var c,d,u,p;jn(),ko(),So(),Co(),Yn({onSearch:h=>{o.searchInput.value=h,Qe(h),Ve(),ye.search(h).catch(()=>{ve(o.grid,n("common.serverFailed")),o.status.textContent=""})},onProductSelect:h=>{Qe(o.searchInput.value),we(h)}});const e=o.megaMenu;e==null||e.addEventListener("click",h=>{var y;h.target.closest("[data-category]")&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true"),(y=o.catalogButton)==null||y.setAttribute("aria-expanded","false"),ye.handleCategoryClick(h))}),(c=o.popularSearchesChips)==null||c.addEventListener("click",h=>{const g=h.target.closest("[data-search-chip]");g&&(o.searchInput.value=g.dataset.searchChip,Qe(g.dataset.searchChip),ye.search(g.dataset.searchChip).catch(()=>{}))}),(d=document.querySelector(".mobile-bottom-nav"))==null||d.addEventListener("click",h=>{var A,T,B,E;const g=h.target.closest("[data-mobile-action]");if(!g)return;const y=g.dataset.mobileAction;if(y==="home"){(A=o.cartDrawer)!=null&&A.classList.contains("open")&&Ie(),(T=o.favoritesDialog)!=null&&T.classList.contains("open")&&W.close(),(B=o.profileDrawer)!=null&&B.classList.contains("open")&&fe.close(),window.location.hash&&window.location.hash!=="#/"&&window.location.hash!=="#"?window.location.hash="#/":Ae(),window.scrollTo({top:0,behavior:"smooth"}),ce();return}if(y==="favoritesButton"){W.open().then(()=>ce()).catch(O=>{console.error("[FAVORITES OPEN FAILED]",O)});return}(E=document.getElementById(y))==null||E.click()});const t=document.getElementById("mobileDrawer"),a=document.getElementById("mobileMenuToggle"),r=document.getElementById("closeMobileMenu");a==null||a.addEventListener("click",()=>{t==null||t.classList.add("open"),t==null||t.setAttribute("aria-hidden","false"),a.setAttribute("aria-expanded","true"),X()});const i=()=>{t==null||t.classList.remove("open"),t==null||t.setAttribute("aria-hidden","true"),a==null||a.setAttribute("aria-expanded","false"),z()};r==null||r.addEventListener("click",i),t==null||t.addEventListener("click",h=>{h.target===t&&i()}),(u=document.getElementById("mobileNavLinks"))==null||u.addEventListener("click",h=>{var A;const g=h.target.closest("[data-category]"),y=h.target.closest("[data-mobile-action]");if(g){i(),ye.handleCategoryClick(h);return}if(y){if(i(),y.dataset.mobileAction==="favoritesButton"){W.open().catch(T=>{console.error("[FAVORITES OPEN FAILED]",T)});return}(A=document.getElementById(y.dataset.mobileAction))==null||A.click()}}),(p=document.getElementById("currencySelect"))==null||p.addEventListener("change",h=>{M(`${n("header.currency")}: ${h.target.value}`,"info")}),document.addEventListener("click",h=>{const g=h.target.closest(".primary-button");g&&!g.disabled&&$o(h,g)}),sc()}function sc(){var e,t,a,r,i,c,d,u,p,h,g,y,A,T,B,E,O;if(hi(),l.compareIds=Xe(),jt(),zt(n),!m.flashSaleEnd){const L=new Date;L.setHours(23,59,59,999),m.flashSaleEnd=L.getTime()}nc(),(e=document.getElementById("sortSelect"))==null||e.addEventListener("change",L=>{l.filters.sort=L.target.value,Re(),ue(l.sourceProducts.length?l.sourceProducts:l.products,n("home.noProducts"),{screen:m.currentGridScreen})}),(t=document.getElementById("gridViewBtn"))==null||t.addEventListener("click",()=>{l.filters.viewMode="grid",Re(),ra(o.grid,"grid")}),(a=document.getElementById("listViewBtn"))==null||a.addEventListener("click",()=>{l.filters.viewMode="list",Re(),ra(o.grid,"list")}),rr(document.getElementById("filterSidebar")),rr(document.getElementById("filterSheetContent")),(r=document.getElementById("mobileFilterBtn"))==null||r.addEventListener("click",()=>sr("filterSheet")),(i=document.getElementById("mobileSortBtn"))==null||i.addEventListener("click",()=>{const L=document.getElementById("sortSheetOptions"),H={popular:n("sort.popular"),"price-asc":n("sort.priceAsc"),"price-desc":n("sort.priceDesc"),rating:n("sort.rating"),newest:n("sort.newest"),discount:n("sort.discount")};L&&(L.innerHTML=Object.entries(H).map(([ee,Te])=>`
        <button class="mobile-nav-link" type="button" data-sort-option="${ee}">${s(Te)}</button>
      `).join("")),sr("sortSheet")}),(c=document.getElementById("closeFilterSheet"))==null||c.addEventListener("click",()=>ea("filterSheet")),(d=document.getElementById("applyFilterSheet"))==null||d.addEventListener("click",()=>{ea("filterSheet"),ue(l.sourceProducts.length?l.sourceProducts:l.products,n("home.noProducts"),{screen:m.currentGridScreen})}),(u=document.getElementById("sortSheetOptions"))==null||u.addEventListener("click",L=>{const H=L.target.closest("[data-sort-option]");if(!H)return;l.filters.sort=H.dataset.sortOption;const ee=document.getElementById("sortSelect");ee&&(ee.value=l.filters.sort),Re(),ea("sortSheet"),ue(l.sourceProducts.length?l.sourceProducts:l.products,n("home.noProducts"),{screen:m.currentGridScreen})}),(p=document.getElementById("filterChipsRow"))==null||p.addEventListener("click",L=>{const H=L.target.closest("[data-remove-chip]");H&&ic(H.dataset.removeChip)}),(h=document.getElementById("compareFab"))==null||h.addEventListener("click",Jn),(g=document.getElementById("closeCompare"))==null||g.addEventListener("click",Zn),(y=document.getElementById("openComparePage"))==null||y.addEventListener("click",Xn),(A=document.getElementById("clearCompare"))==null||A.addEventListener("click",ec),(T=document.getElementById("compareDrawerContent"))==null||T.addEventListener("click",L=>{const H=L.target.closest("[data-remove-compare]");H&&tc(H.dataset.removeCompare)}),(B=document.getElementById("closePdpFullscreen"))==null||B.addEventListener("click",ir),(E=document.getElementById("pdpFullscreen"))==null||E.addEventListener("click",L=>{L.target.id==="pdpFullscreen"&&ir()}),(O=o.cartExtras)==null||O.addEventListener("click",cc)}function rr(e){e&&(e.addEventListener("click",t=>{var r;if(t.target.closest("[data-clear-filters]")){yi(),zt(n),Mt(n),ue(l.sourceProducts.length?l.sourceProducts:l.products,n("home.noProducts"),{screen:m.currentGridScreen});return}const a=t.target.closest(".filter-group-toggle");a&&((r=a.closest(".filter-group"))==null||r.classList.toggle("collapsed"))}),e.addEventListener("change",t=>{const a=l.filters;if(t.target.matches("[data-filter-brand]")){const r=t.target.dataset.filterBrand;a.brands=t.target.checked?[...new Set([...a.brands,r])]:a.brands.filter(i=>i!==r)}if(t.target.matches("[data-filter-color]")){const r=t.target.dataset.filterColor;a.colors=t.target.checked?[...new Set([...a.colors,r])]:a.colors.filter(i=>i!==r)}if(t.target.matches("[data-filter-size]")){const r=t.target.dataset.filterSize;a.sizes=t.target.checked?[...new Set([...a.sizes,r])]:a.sizes.filter(i=>i!==r)}if(t.target.matches("[data-filter-origin]")){const r=t.target.dataset.filterOrigin;a.origin=t.target.checked?[...new Set([...a.origin,r])]:a.origin.filter(i=>i!==r)}if(t.target.matches("[data-filter-seller]")){const r=t.target.dataset.filterSeller;a.seller=t.target.checked?[...new Set([...a.seller,r])]:a.seller.filter(i=>i!==r)}t.target.matches("[data-filter-toggle]")&&(a[t.target.dataset.filterToggle]=t.target.checked),t.target.matches("[data-filter-rating]")&&(a.minRating=Number(t.target.value)),t.target.matches("[data-filter-price]")&&(a.maxPrice=Number(t.target.value)),Re(),Mt(n),e.id!=="filterSheetContent"&&ue(l.sourceProducts.length?l.sourceProducts:l.products,n("home.noProducts"),{screen:m.currentGridScreen})}))}function ic(e){const t=l.filters;e==="onSale"?t.onSale=!1:e==="inStock"?t.inStock=!1:e==="rating"?t.minRating=0:e.startsWith("brand:")?t.brands=t.brands.filter(a=>a!==e.slice(6)):e.startsWith("color:")?t.colors=t.colors.filter(a=>a!==e.slice(6)):e.startsWith("size:")&&(t.sizes=t.sizes.filter(a=>a!==e.slice(5))),Re(),zt(n),Mt(n),ue(l.sourceProducts.length?l.sourceProducts:l.products,n("home.noProducts"),{screen:m.currentGridScreen})}function sr(e){const t=document.getElementById(e);t==null||t.classList.add("open"),t==null||t.setAttribute("aria-hidden","false")}function ea(e){var t,a;(t=document.getElementById(e))==null||t.classList.remove("open"),(a=document.getElementById(e))==null||a.setAttribute("aria-hidden","true")}function oc(e){const t=document.getElementById("pdpFullscreenImg"),a=document.getElementById("pdpFullscreen");t&&a&&e&&(t.src=e,a.classList.add("open"),a.setAttribute("aria-hidden","false"))}function ir(){var e,t;(e=document.getElementById("pdpFullscreen"))==null||e.classList.remove("open"),(t=document.getElementById("pdpFullscreen"))==null||t.setAttribute("aria-hidden","true")}function nc(){if(ar!==null)return;const e=()=>{const t=document.querySelector("#todayDeals .flash-countdown-wrap");t&&m.flashSaleEnd&&(t.innerHTML=ki(m.flashSaleEnd))};e(),ar=window.setInterval(e,1e3)}function cc(e){if(e.target.closest("[data-apply-coupon]")){const a=document.getElementById("cartCouponInput"),r=((a==null?void 0:a.value)||"").trim(),i=de.applyCoupon(r,N.getCartTotals().subtotal);i.valid?(k.cartCoupon=i.coupon,k.cartCouponDiscount=i.discount,M(n("cart.couponApplied"),"success")):i.invalid&&M(n("cart.couponInvalid"),"warning"),N.render();return}const t=e.target.closest("[data-restore-saved]");if(t){ui(t.dataset.restoreSaved),M(n("cart.restored"),"info"),N.render();return}Ge(e)}function lc({item:e,starsHtml:t}){const a=e.review;return`
    <article class="my-review-item">
      <img src="${s(e.image)}" alt="${s(e.name)}" />
      <div>
        <strong>${s(e.name)}</strong>
        <p class="hint">${s(e.brand||"BEAUTY SKIN KOREA")} ${e.orderId?`· Order #${s(e.orderId)}`:""}</p>
        ${a!=null&&a.rating||a!=null&&a.content?`
          <div class="written-review">
            ${t||Ft({rating:a.rating})}
            <p>${s(a.content||"No text review.")}</p>
            <p class="hint">${ka(a.createdAt)}</p>
          </div>
        `:'<p class="hint">Review not written yet.</p>'}
      </div>
      <div class="review-action-cell">
        ${e.reviewable?`
          <button class="secondary-button" data-write-review="${s(e.productId)}" data-review-order="${s(e.orderId)}" data-review-name="${s(e.name)}" type="button">Write review</button>
        `:a!=null&&a.content||a!=null&&a.rating?'<span class="status-badge status-delivered">Reviewed</span>':'<span class="hint">Not reviewable</span>'}
      </div>
    </article>
  `}function dc({itemsHtml:e=""}){return`<div class="my-reviews-list">${e}</div>`}const $e={email:"ismoiljoraxonov1@gmail.com",phone:"+821065110757",phoneDisplay:"+82 10 6511 0757"},uc=["delivery","cancel","return"];function pc(e,t){const a=m.supportFaqOpen===t;return`
    <div class="app-support-faq ${a?"is-open":""}">
      <button class="app-support-faq-q" type="button" data-support-faq="${t}">
        <span>${s(n(`support.faq.${e}.q`))}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      ${a?`<div class="app-support-faq-a">${s(n(`support.faq.${e}.a`))}</div>`:""}
    </div>
  `}function or(e){return`<ul class="app-support-doc-list">${e.map(t=>`<li>${s(n(t))}</li>`).join("")}</ul>`}const xe={render(){o.supportContent.innerHTML=`
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
            ${uc.map((e,t)=>pc(e,t)).join("")}
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
              <span>Email: <a href="mailto:${s($e.email)}">${s($e.email)}</a></span>
            </div>
            <div class="app-support-contact-row">
              <span class="app-support-contact-icon" aria-hidden="true">📞</span>
              <span>${s(n("support.phoneLabel"))} <a href="tel:${s($e.phone)}">${s($e.phoneDisplay)}</a></span>
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
            ${or(["privacy.s1a","privacy.s1b","privacy.s1c","privacy.s1d"])}
          </section>

          <section class="app-support-doc-section">
            <h3>${s(n("privacy.s2title"))}</h3>
            <p>${s(n("privacy.s2intro"))}</p>
            ${or(["privacy.s2a","privacy.s2b","privacy.s2c","privacy.s2d"])}
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
            <p class="app-support-doc-contact">✉️ <a href="mailto:${s($e.email)}">${s($e.email)}</a></p>
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
            <p class="app-support-doc-contact">✉️ <a href="mailto:${s($e.email)}">${s($e.email)}</a></p>
          </section>
        </div>
      </div>
    `},handleClick(e,{close:t}={}){const a=e.target.closest("[data-support-faq]");if(e.target.closest("[data-support-close]")){t==null||t();return}if(a){const r=Number(a.dataset.supportFaq);m.supportFaqOpen=m.supportFaqOpen===r?-1:r,xe.render()}},handlePrivacyClick(e,{close:t}={}){e.target.closest("[data-privacy-close]")&&(t==null||t())},handleTermsClick(e,{close:t}={}){e.target.closest("[data-terms-close]")&&(t==null||t())}};function hc(e,t,a){return G.add(e,t,a,{showLoginRequired:()=>v.showLoginRequired()})}function mc(){return _.prepare({showLoginRequired:()=>v.showLoginRequired()})}function gc(){var t,a,r,i,c,d,u,p,h,g,y,A,T,B,E,O,L,H,ee,Te,et,tt,at,rt,st,it,ot,nt,ct,lt,Ne,Ct;(t=o.languageSelect)==null||t.addEventListener("change",w=>gr(w.target.value)),o.searchForm.addEventListener("submit",w=>w.preventDefault()),o.searchInput.addEventListener("input",w=>ye.handleInput(w)),o.categoryToolbar.addEventListener("click",w=>ye.handleCategoryClick(w)),o.quickCategoryGrid.addEventListener("click",w=>ye.handleCategoryClick(w)),o.catalogList.addEventListener("click",w=>ye.handleCategoryClick(w)),o.banners.addEventListener("click",fc),(a=o.homeView)==null||a.addEventListener("click",Ge),(r=o.homeView)==null||r.addEventListener("keydown",tr),(i=o.brandViewContent)==null||i.addEventListener("click",Ge),o.detailContent.addEventListener("click",nr),o.productDetailPageContent.addEventListener("click",w=>{nr(w)||Ge(w)}),o.productDetailPageContent.addEventListener("input",w=>{w.target.matches("[data-review-search]")&&(l.reviewSearchQuery=w.target.value,R.renderProductDetail(l.selectedDetailProduct))}),o.productDetailPageContent.addEventListener("change",w=>{w.target.matches("[data-review-sort]")&&(l.reviewSort=w.target.value,R.renderProductDetail(l.selectedDetailProduct)),w.target.matches("[data-review-filter-rating]")&&(l.reviewFilterRating=Number(w.target.value),R.renderProductDetail(l.selectedDetailProduct))}),o.cartItems.addEventListener("click",yc),o.cartItems.addEventListener("change",vc),o.catalogButton.addEventListener("click",cn),o.closeCatalog.addEventListener("click",Tt),o.cartButton.addEventListener("click",zr),o.closeCart.addEventListener("click",Ie),o.loginButton.addEventListener("click",()=>{v.isLoggedIn()?fe.open():v.openDialog("login")}),(c=o.favoritesButton)==null||c.addEventListener("click",()=>W.open()),o.notificationsButton.addEventListener("click",()=>V.open()),o.apiButton.addEventListener("click",ln),o.loginTab.addEventListener("click",()=>v.setMode("login")),o.registerTab.addEventListener("click",()=>v.setMode("register")),o.authForm.addEventListener("submit",w=>v.submit(w)),(d=o.googleLoginButton)==null||d.addEventListener("click",()=>v.submitFirebase()),o.apiForm.addEventListener("submit",dn),o.checkoutButton.addEventListener("click",mc),o.checkoutForm.addEventListener("submit",bc),o.checkoutContent.addEventListener("click",wc),o.checkoutContent.addEventListener("submit",kc),o.ordersContent.addEventListener("click",w=>Be.handleClick(w)),o.refreshOrders.addEventListener("click",()=>Be.load()),o.closeOrders.addEventListener("click",()=>o.ordersDialog.close()),(u=o.favoritesContent)==null||u.addEventListener("click",Sc),(p=o.favoritesContent)==null||p.addEventListener("keydown",tr),(h=o.refreshFavorites)==null||h.addEventListener("click",()=>W.load({render:!0})),(g=o.closeFavorites)==null||g.addEventListener("click",()=>W.close()),o.notificationsContent.addEventListener("click",Cc),o.refreshNotifications.addEventListener("click",()=>{V.load(),V.loadUnreadCount()}),o.closeNotifications.addEventListener("click",()=>V.close()),o.myReviewsContent.addEventListener("click",qc),o.refreshMyReviews.addEventListener("click",Kt),o.closeMyReviews.addEventListener("click",Ma),o.writeReviewForm.addEventListener("submit",Mc),o.closeWriteReview.addEventListener("click",Ot),o.reviewRatingSelector.addEventListener("click",Bc),(y=o.closeProfile)==null||y.addEventListener("click",()=>fe.close()),o.profileContent.addEventListener("click",w=>{Ge(w)||fe.handleAction(w)}),o.profileContent.addEventListener("submit",w=>fe.submitEdit(w)),o.ordersButton.addEventListener("click",()=>Be.show()),(A=o.supportButton)==null||A.addEventListener("click",ga),(T=document.getElementById("assistantMiniButton"))==null||T.addEventListener("click",()=>{window.location.hash="#/assistant"}),(B=document.getElementById("footerSupport"))==null||B.addEventListener("click",ga),(E=document.getElementById("footerPrivacy"))==null||E.addEventListener("click",Xr),(O=document.getElementById("footerTerms"))==null||O.addEventListener("click",es),(L=document.getElementById("footerAssistant"))==null||L.addEventListener("click",()=>{window.location.hash="#/assistant"});const e=document.getElementById("footerYear");e&&(e.textContent=String(new Date().getFullYear())),(H=o.supportContent)==null||H.addEventListener("click",Pc),(ee=o.supportDialog)==null||ee.addEventListener("close",z),(Te=o.privacyContent)==null||Te.addEventListener("click",Ec),(et=o.privacyDialog)==null||et.addEventListener("close",z),(tt=o.termsContent)==null||tt.addEventListener("click",Lc),(at=o.termsDialog)==null||at.addEventListener("close",z),(rt=o.assistantFab)==null||rt.addEventListener("click",()=>Q.toggleWidget()),(st=o.assistantWidget)==null||st.addEventListener("click",w=>{w.target===o.assistantWidget?Q.closeWidget():Q.handleClick(w)}),(it=o.assistantWidgetContent)==null||it.addEventListener("submit",w=>Q.handleSubmit(w)),(ot=o.assistantWidgetContent)==null||ot.addEventListener("keydown",w=>Q.handleKeydown(w)),(nt=o.assistantWidgetContent)==null||nt.addEventListener("input",w=>Q.handleInput(w)),(ct=o.assistantPageContent)==null||ct.addEventListener("click",w=>Q.handleClick(w)),(lt=o.assistantPageContent)==null||lt.addEventListener("submit",w=>Q.handleSubmit(w)),(Ne=o.assistantPageContent)==null||Ne.addEventListener("keydown",w=>Q.handleKeydown(w)),(Ct=o.assistantPageContent)==null||Ct.addEventListener("input",w=>Q.handleInput(w)),o.refreshHome.addEventListener("click",()=>U.load({loadCart:()=>G.load()})),o.loadMore.addEventListener("click",()=>se.loadMoreProducts()),window.addEventListener("hashchange",Bt),o.catalogDrawer.addEventListener("click",w=>{w.target===o.catalogDrawer&&Tt()}),o.cartDrawer.addEventListener("click",w=>{w.target===o.cartDrawer&&Ie()}),o.profileDrawer.addEventListener("click",w=>{w.target===o.profileDrawer&&fe.close()}),o.notificationsDrawer.addEventListener("click",w=>{w.target===o.notificationsDrawer&&V.close()}),document.addEventListener("keydown",w=>{var dt;w.key==="Escape"&&(Tt(),Ie(),fe.close(),V.close(),Q.closeWidget(),o.ordersDialog.open&&o.ordersDialog.close(),(dt=o.favoritesDialog)!=null&&dt.classList.contains("open")&&W.close(),o.myReviewsDialog.open&&o.myReviewsDialog.close(),o.writeReviewDialog.open&&o.writeReviewDialog.close())}),o.detailDialog.addEventListener("close",z),o.authDialog.addEventListener("close",z),o.apiDialog.addEventListener("close",z),o.checkoutDialog.addEventListener("close",()=>{_.abortOrder(),f.checkoutConfirmOpen=!1,f.orderSubmitting=!1,f.orderSuccess=null,f.checkoutError="",z()}),o.ordersDialog.addEventListener("close",z),o.myReviewsDialog.addEventListener("close",z),o.writeReviewDialog.addEventListener("close",z),document.querySelectorAll("[data-close-dialog]").forEach(w=>{w.addEventListener("click",()=>{var dt;return(dt=w.closest("dialog"))==null?void 0:dt.close()})})}function fc(e){const t=e.target.closest("[data-banner-dot]");if(t){U.scrollToBanner(Number(t.dataset.bannerDot)),U.resetBannerAutoSlide();return}const a=e.target.closest("[data-banner-nav]");if(a){a.dataset.bannerNav==="next"?U.nextBanner():U.prevBanner(),U.resetBannerAutoSlide();return}const r=e.target.closest("[data-banner-link-type]");if(!r)return;const i=r.dataset.bannerLinkType,c=r.dataset.bannerLinkId;if(i==="PRODUCT"&&c){we(c);return}if(i==="CATEGORY"&&c){const d=l.categories.find(u=>String(u)===String(c))||(pr[c]?c:"");d?(da(),se.renderCategoryProducts(d,{showHomeView:Ae})):M("Category banner is not available yet.","info")}}function nr(e){const t=e.target.closest("[data-route-home]"),a=e.target.closest(".product-detail-page [data-category]"),r=e.target.closest("[data-brand]"),i=e.target.closest("[data-close-detail]"),c=e.target.closest("[data-variant]"),d=e.target.closest("[data-qty]"),u=e.target.closest("[data-detail-add]"),p=e.target.closest("[data-detail-favorite]"),h=e.target.closest("[data-compare]"),g=e.target.closest("[data-reviews-retry]"),y=e.target.closest("[data-pdp-thumb]"),A=e.target.closest("[data-pdp-tab]"),T=e.target.closest("[data-pdp-zoom]"),B=e.target.closest("[data-pdp-fullscreen]"),E=e.target.closest("[data-review-helpful]");if(t)return e.stopPropagation(),da(),!0;if(r&&r.dataset.brand)return e.stopPropagation(),window.location.hash=`#/brand/${encodeURIComponent(r.dataset.brand)}`,!0;if(a)return e.stopPropagation(),da(),se.renderCategoryProducts(a.dataset.category,{showHomeView:Ae}),!0;if(i)return e.stopPropagation(),o.detailDialog.close(),z(),!0;if(y)return e.stopPropagation(),l.pdpGalleryIndex=Number(y.dataset.pdpThumb),R.renderProductDetail(l.selectedDetailProduct),!0;if(T)return e.stopPropagation(),T.classList.toggle("zoomed"),!0;if(B){e.stopPropagation();const O=document.getElementById("pdpMainImage");return oc(O==null?void 0:O.src),!0}if(A)return e.stopPropagation(),l.pdpActiveTab=A.dataset.pdpTab,R.renderProductDetail(l.selectedDetailProduct),!0;if(h)return e.stopPropagation(),Zr(h.dataset.compare),!0;if(c)return e.stopPropagation(),l.selectedVariantId=c.dataset.variant,R.renderProductDetail(l.selectedDetailProduct),!0;if(d)return e.stopPropagation(),l.selectedQuantity=Math.max(1,l.selectedQuantity+(d.dataset.qty==="plus"?1:-1)),R.renderProductDetail(l.selectedDetailProduct),!0;if(p)return e.stopPropagation(),W.toggle(p.dataset.detailFavorite),!0;if(g)return e.stopPropagation(),Ye.loadReviews(g.dataset.reviewsRetry),!0;if(E){e.stopPropagation();const O=E.dataset.reviewHelpful;return l.reviewHelpfulIds.has(O)?l.reviewHelpfulIds.delete(O):l.reviewHelpfulIds.add(O),R.renderProductDetail(l.selectedDetailProduct),!0}if(u){e.stopPropagation();const O=document.getElementById("quantityInput");return l.selectedQuantity=Math.max(1,Number((O==null?void 0:O.value)||l.selectedQuantity)),hc(l.selectedDetailProduct.id,l.selectedVariantId,l.selectedQuantity),!0}return!1}function vc(e){const t=e.target;if(!t.matches("[data-cart-select-all], [data-cart-item-check]"))return;const a=N.getCartSelectedIds();if(t.matches("[data-cart-select-all]")){t.checked?k.cartItems.forEach(i=>a.add(String(i.id))):a.clear(),N.render();return}const r=String(t.dataset.cartItemCheck||"");r&&(t.checked?a.add(r):a.delete(r),N.render())}function yc(e){var u;const t=e.target.closest("[data-cart-retry]"),a=e.target.closest("[data-start-shopping]"),r=e.target.closest("[data-cart-qty]"),i=e.target.closest("[data-remove]"),c=e.target.closest("[data-save-later]"),d=e.target.closest("[data-cart-delete-selected]");if(t&&G.load(),a&&(Ie(),(u=document.getElementById("products"))==null||u.scrollIntoView({behavior:"smooth",block:"start"})),d&&!d.disabled){G.removeSelected();return}if(c){const p=k.cartItems.find(h=>String(h.id)===String(c.dataset.saveLater));p&&(di(p),G.removeItem(p.id));return}if(r){const p=k.cartItems.find(h=>String(h.id)===String(r.dataset.cartId));p&&G.updateQuantity(p.id,p.quantity+(r.dataset.cartQty==="plus"?1:-1))}i&&G.removeItem(i.dataset.remove)}function bc(e){e.preventDefault(),_.openConfirm()}async function wc(e){var L,H;const t=e.target.closest("[data-checkout-close]"),a=e.target.closest("[data-checkout-toggle-address]"),r=e.target.closest("[data-checkout-toggle-receiver]"),i=e.target.closest("[data-checkout-toggle-coupon]"),c=e.target.closest("[data-apply-coupon]"),d=e.target.closest("[data-select-receiver]"),u=e.target.closest("[data-select-address]"),p=e.target.closest("[data-delete-receiver]"),h=e.target.closest("[data-delete-address]"),g=e.target.closest("[data-place-order]"),y=e.target.closest("[data-checkout-confirm-cancel]"),A=e.target.closest("[data-checkout-confirm-submit]"),T=e.target.closest("[data-checkout-success-dismiss]"),B=e.target.closest("[data-checkout-success-card]"),E=e.target.closest("[data-success-orders]"),O=e.target.closest("[data-success-continue]");if(t){_.abortOrder(),f.checkoutConfirmOpen=!1,f.orderSubmitting=!1,f.orderSuccess=null,f.checkoutError="",o.checkoutDialog.close(),z();return}if(a){f.checkoutAddressPickerOpen=!f.checkoutAddressPickerOpen,f.checkoutError="",J.render();return}if(r){f.checkoutReceiverPickerOpen=!f.checkoutReceiverPickerOpen,f.checkoutError="",J.render();return}if(i){f.checkoutCouponOpen=!f.checkoutCouponOpen,J.render();return}if(c){const ee=document.getElementById("checkoutCouponInput");_.applyCoupon(((ee==null?void 0:ee.value)||"").trim());return}if(p){e.stopPropagation(),await _.deleteReceiver(p.dataset.deleteReceiver);return}if(h){e.stopPropagation(),await _.deleteAddress(h.dataset.deleteAddress);return}if(d){f.selectedReceiverId=d.dataset.selectReceiver,f.checkoutReceiverPickerOpen=!1,f.checkoutError="",J.render();return}if(u){f.selectedAddressId=u.dataset.selectAddress,f.checkoutAddressPickerOpen=!1,f.checkoutError="",J.render();return}if(g){_.openConfirm();return}if(y){_.abortOrder(),f.checkoutConfirmOpen=!1,f.orderSubmitting=!1,f.checkoutError="",J.render();return}if(A){await _.submitOrder();return}if(T&&!B){_.finishAndGoHome(),(L=document.getElementById("products"))==null||L.scrollIntoView({behavior:"smooth",block:"start"});return}if(E){o.checkoutDialog.close(),await Be.show();return}O&&(o.checkoutDialog.close(),Ie(),(H=document.getElementById("products"))==null||H.scrollIntoView({behavior:"smooth",block:"start"}))}async function kc(e){const t=e.target.closest("[data-add-receiver-form]"),a=e.target.closest("[data-add-address-form]");!t&&!a||(e.preventDefault(),t&&await _.createReceiver(),a&&await _.createAddress())}function Sc(e){Y.handleClick(e,{close:()=>W.close(),reload:()=>W.load({render:!0}),handleProductGridClick:Ge})}function Cc(e){const t=e.target.closest("[data-notifications-retry]"),a=e.target.closest("[data-notification-read]"),r=e.target.closest("[data-notification-card]");if(t){V.load(),V.loadUnreadCount();return}if(a){e.stopPropagation(),V.markRead(a.dataset.notificationRead);return}r&&V.handleCardClick(r.dataset.notificationCard)}function ga(){m.supportFaqOpen=0,xe.render(),o.supportDialog.showModal(),X()}function $c(){o.supportDialog.close(),z()}function Pc(e){xe.handleClick(e,{close:$c})}function Xr(){xe.renderPrivacy(),o.privacyDialog.showModal(),X()}function Ic(){o.privacyDialog.close(),z()}function Ec(e){xe.handlePrivacyClick(e,{close:Ic})}function es(){xe.renderTerms(),o.termsDialog.showModal(),X()}function Ac(){o.termsDialog.close(),z()}function Lc(e){xe.handleTermsClick(e,{close:Ac})}async function Tc(){if(!v.isLoggedIn()){v.showLoginRequired();return}o.myReviewsDialog.showModal(),X(),await Kt()}async function Kt(){if(!v.isLoggedIn()){v.showLoginRequired();return}l.myReviewsLoading=!0,l.myReviewsError="",Dt();const e=await Ee.loadMyReviews();if(l.myReviewsLoading=!1,!e.success){if(e.sessionExpired){Ma(),Ot();return}l.myReviewsError=e.error,Dt();return}l.myReviews=e.items,Dt()}function Dt(){if(o.myReviewsSummary.textContent=l.myReviews.length?`${l.myReviews.length} item${l.myReviews.length===1?"":"s"}`:"Purchased products and written reviews",l.myReviewsLoading){o.myReviewsContent.innerHTML=`
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
    `;return}o.myReviewsContent.innerHTML=dc({itemsHtml:l.myReviews.map(e=>Dc(e)).join("")})}function Dc(e){var t;return lc({item:e,starsHtml:(t=e.review)!=null&&t.rating?qr(e.review.rating):""})}function ts(e={}){if(!v.isLoggedIn()){v.showLoginRequired();return}const t=e.productId,a=e.orderId;if(!t||!a){M("Product and order are required for review.");return}l.reviewDraft={productId:t,orderId:a,productName:e.productName||"Product"},l.reviewRating=5,o.writeReviewProduct.textContent=`${l.reviewDraft.productName} · Order #${a}`,o.reviewContent.value="",o.reviewImages.value="",o.reviewImageFiles.value="",o.reviewUploadStatus.textContent="",mt(""),as(),o.writeReviewDialog.showModal(),X()}function as(){o.reviewRatingSelector.innerHTML=Array.from({length:5},(e,t)=>{const a=t+1;return`
      <button class="rating-choice ${a<=l.reviewRating?"active":""}" data-review-rating="${a}" type="button" aria-label="Rating ${a} out of 5">
        ★
      </button>
    `}).join("")}function Ma(){o.myReviewsDialog.open&&o.myReviewsDialog.close(),z()}function Ot(){o.writeReviewDialog.open&&o.writeReviewDialog.close(),z()}function mt(e,t=""){o.reviewFormMessage.textContent=e,o.reviewFormMessage.className=`form-message ${t}`.trim()}async function Rc(e){return Ee.uploadReviewImages(e,{onProgress:t=>{o.reviewUploadStatus.textContent=t}})}async function Mc(e){var u;if(e.preventDefault(),l.reviewSubmitting)return;const t=l.reviewDraft||{},a=o.reviewContent.value.trim(),r=Ee.validateSubmitReview({productId:t.productId,orderId:t.orderId,rating:l.reviewRating,content:a,manualImageUrlsText:o.reviewImages.value,files:o.reviewImageFiles.files});if(!r.valid){mt(r.errors[0],"error");return}l.reviewSubmitting=!0,l.uploadingReviewImages=!!r.fileValidation.files.length,o.submitReviewButton.disabled=!0,o.submitReviewButton.textContent="Submitting...",mt("");let i=[];try{i=r.fileValidation.files.length?await Rc(r.fileValidation.files):[]}catch(p){l.reviewSubmitting=!1,l.uploadingReviewImages=!1,o.submitReviewButton.disabled=!1,o.submitReviewButton.textContent="Submit review",mt(p.message||"Image upload failed.","error");return}const c=[...i,...r.manualImageUrls].slice(0,5),d=await Ee.submitReview({productId:t.productId,orderId:t.orderId,rating:l.reviewRating,content:a,imageUrls:c});if(l.reviewSubmitting=!1,l.uploadingReviewImages=!1,o.submitReviewButton.disabled=!1,o.submitReviewButton.textContent="Submit review",o.reviewUploadStatus.textContent="",!d.success){if(d.sessionExpired){Ma(),Ot();return}mt(d.error,"error");return}M("Review submitted"),Ot(),await Kt(),((u=l.selectedDetailProduct)==null?void 0:u.id)!==void 0&&String(l.selectedDetailProduct.id)===String(t.productId)&&await Ye.loadReviews(t.productId)}function qc(e){const t=e.target.closest("[data-my-reviews-retry]"),a=e.target.closest("[data-write-review]");if(t){Kt();return}a&&ts({productId:a.dataset.writeReview,orderId:a.dataset.reviewOrder,productName:a.dataset.reviewName})}function Bc(e){const t=e.target.closest("[data-review-rating]");t&&(l.reviewRating=Number(t.dataset.reviewRating),as())}function Oc(){ba(fa()),se.renderCategories(),_e(),m.currentRoute==="product"&&l.selectedDetailProduct?R.renderProductDetail(l.selectedDetailProduct):m.currentRoute==="assistant"||Q.isWidgetOpen()?Q.render():(te(o.grid,l.products,n("home.noProducts"),{screen:m.currentGridScreen}),te(o.dealsGrid,l.todayDeals.slice(0,8),n("home.noProducts")),l.homeApiSections&&U.renderHomeApiSections(l.homeApiSections)),o.cartDrawer.classList.contains("open")&&N.render(),o.profileDrawer.classList.contains("open")&&ie.render(),vt()&&Y.render(),o.ordersDialog.open&&oe.render(),o.notificationsDrawer.classList.contains("open")&&Z.render(),o.myReviewsDialog.open&&Dt(),v.updateUi()}async function xc(){if(!le.getRecentProductIds().length){l.recentlyViewed=[];return}l.recentlyViewed=await le.loadRecentlyViewed()}function Nc(){Hs({cart:{load:()=>G.load(),render:()=>N.render()},favorites:{load:e=>W.load(e),open:()=>W.open(),updateUi:()=>W.updateUi()},notifications:{open:()=>V.open(),load:()=>V.load(),loadUnreadCount:()=>V.loadUnreadCount(),clearState:()=>V.clearState()},home:{ensureRecentlyViewed:xc},profile:{render:()=>ie.render()},orders:{show:()=>Be.show()},reviews:{open:Tc,openWrite:ts},support:{open:ga,openPrivacy:Xr,openTerms:es},assistant:{open:()=>Q.openWidget(),close:()=>Q.closeWidget(),render:()=>Q.render()},checkout:{prepare:()=>_.prepare({showLoginRequired:v.showLoginRequired})},i18n:{t:n,setLanguage:gr,applyTranslations:()=>ba(fa())},navigation:{unlockBodyIfNoOverlay:z},toast:M})}async function Fc(){Nc(),ws(Oc),hs({onUnauthorized:()=>{v.clearAuth(),v.openDialog("login"),M(n("auth.sessionExpired"))},onLoginRequired:()=>v.showLoginRequired(),showToast:(e,t="error")=>M(e,t)});try{gc(),rc(),ba(fa())}catch(e){console.error("Init event binding failed:",e),o.status.textContent=`UI ishga tushishda xatolik yuz berdi: ${e.message}`,M("UI ishga tushishda xatolik yuz berdi.");return}v.updateUi(),v.validateOnStartup().catch(e=>{console.error("Auth startup failed:",e)}),Q.init().catch(e=>{console.error("Assistant startup failed:",e)}),U.load({loadCart:()=>G.load()}).then(()=>Bt()).catch(e=>{console.error("Home loading failed:",e),l.demoProducts=!1,l.demoDeals=!1,o.status.textContent="",o.dealsStatus.textContent="",ve(o.grid,n("common.serverFailed"),n("common.tryAgain")),_e(),Bt()})}function zc(){ls(),ds(),m.baseUrl=xt(localStorage.getItem(C.storageKeys.baseUrl)||""),ps(),We()&&(console.assert(document.getElementById("productGrid"),"productGrid missing"),console.assert(document.getElementById("dealsGrid"),"dealsGrid missing"),console.assert(document.getElementById("productStatus"),"productStatus missing"),console.assert(document.getElementById("dealsStatus"),"dealsStatus missing"),console.assert(document.getElementById("quickCategoryGrid"),"quickCategoryGrid missing")),Fc()}zc();
