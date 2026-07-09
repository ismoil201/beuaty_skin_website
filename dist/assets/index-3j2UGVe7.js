import{G as Oa,s as xa,i as Na,g as Fa}from"./firebase-kble8lgk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function r(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=r(s);fetch(s.href,l)}})();const S=Object.freeze({productionApiBaseUrl:"https://cosmetic-server-production.up.railway.app",defaultPageSize:24,searchDebounceMs:300,storageKeys:Object.freeze({accessToken:"zaven_token",legacyAccessToken:"accessToken",user:"zaven_user",legacyUser:"user",role:"role",baseUrl:"zaven_base_url",sessionId:"zaven_session_id",recentProducts:"zaven_recent_products",language:"beauty_skin_language"}),placeholderImage:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"});S.productionApiBaseUrl.replace(/\/+$/,"");function za(e){const t=String(e||"").trim().replace(/\/+$/,"").toLowerCase();return t?t.includes("localhost")||t.includes("127.0.0.1")||t.includes("0.0.0.0")||t.startsWith("file:"):!1}function vt(e){const t=String(e||"").trim().replace(/\/+$/,"");return!t||t.includes("cosmetic-server-production.up.railway.app")||za(t)?"":t}function Ha(e,t){try{return JSON.parse(localStorage.getItem(e)||"null")||t}catch{return t}}function dt(){return localStorage.getItem(S.storageKeys.accessToken)||localStorage.getItem(S.storageKeys.legacyAccessToken)||""}function Ua(){let e=localStorage.getItem(S.storageKeys.sessionId);return e||(e=`web-${Date.now()}-${Math.random().toString(36).slice(2,10)}`,localStorage.setItem(S.storageKeys.sessionId,e)),e}function Va(){const e=localStorage.getItem(S.storageKeys.legacyAccessToken);!localStorage.getItem(S.storageKeys.accessToken)&&e&&localStorage.setItem(S.storageKeys.accessToken,e);const r=localStorage.getItem(S.storageKeys.legacyUser);!localStorage.getItem(S.storageKeys.user)&&r&&localStorage.setItem(S.storageKeys.user,r)}function Ka(){const e=localStorage.getItem(S.storageKeys.baseUrl)||"",t=vt(e);t!==e.trim().replace(/\/+$/,"")&&(t?localStorage.setItem(S.storageKeys.baseUrl,t):localStorage.removeItem(S.storageKeys.baseUrl))}const o={homeView:null,languageSelect:null,grid:null,dealsGrid:null,homeApiSections:null,recentlyViewedSection:null,recentlyViewedGrid:null,banners:null,announcements:null,categoryToolbar:null,quickCategoryGrid:null,catalogButton:null,catalogDrawer:null,closeCatalog:null,catalogList:null,status:null,dealsStatus:null,productsMode:null,dealsMode:null,title:null,loadMore:null,searchForm:null,searchInput:null,cartButton:null,cartDrawer:null,closeCart:null,cartItems:null,cartCount:null,cartSummary:null,cartTotal:null,authDialog:null,authForm:null,authTitle:null,loginTab:null,registerTab:null,loginFields:null,registerFields:null,authSubmit:null,authMessage:null,googleLoginButton:null,loginButton:null,favoritesButton:null,favoritesCount:null,favoritesDialog:null,favoritesSummary:null,favoritesContent:null,refreshFavorites:null,closeFavorites:null,notificationsButton:null,notificationsCount:null,notificationsDrawer:null,notificationsSummary:null,notificationsContent:null,refreshNotifications:null,closeNotifications:null,loginEmail:null,loginPassword:null,registerFullName:null,registerEmail:null,registerPhone:null,registerPassword:null,registerConfirmPassword:null,profileDrawer:null,closeProfile:null,profileContent:null,apiDialog:null,apiForm:null,apiButton:null,baseUrl:null,detailDialog:null,detailContent:null,productDetailPage:null,productDetailPageContent:null,checkoutButton:null,checkoutDialog:null,checkoutForm:null,checkoutHint:null,receiverSelect:null,addressSelect:null,checkoutContent:null,refreshHome:null,ordersButton:null,ordersDialog:null,ordersContent:null,refreshOrders:null,closeOrders:null,myReviewsDialog:null,myReviewsContent:null,myReviewsSummary:null,refreshMyReviews:null,closeMyReviews:null,writeReviewDialog:null,writeReviewForm:null,closeWriteReview:null,writeReviewProduct:null,reviewRatingSelector:null,reviewContent:null,reviewImages:null,reviewImageFiles:null,reviewUploadStatus:null,reviewFormMessage:null,submitReviewButton:null,supportButton:null,supportDialog:null,supportContent:null,privacyDialog:null,privacyContent:null,termsDialog:null,termsContent:null,toast:null,brandViewContent:null,cartExtras:null,cartStickyProgress:null,megaMenu:null,popularSearchesChips:null},Ga={homeView:"homeView",languageSelect:"languageSelect",grid:"productGrid",dealsGrid:"dealsGrid",homeApiSections:"homeApiSections",recentlyViewedSection:"recentlyViewedSection",recentlyViewedGrid:"recentlyViewedGrid",banners:"banners",announcements:"announcements",categoryToolbar:"categoryToolbar",quickCategoryGrid:"quickCategoryGrid",catalogButton:"catalogButton",catalogDrawer:"catalogDrawer",closeCatalog:"closeCatalog",catalogList:"catalogList",status:"productStatus",dealsStatus:"dealsStatus",productsMode:"productsMode",dealsMode:"dealsMode",title:"productsTitle",loadMore:"loadMore",searchForm:"searchForm",searchInput:"searchInput",cartButton:"cartButton",cartDrawer:"cartDrawer",closeCart:"closeCart",cartItems:"cartItems",cartCount:"cartCount",cartSummary:"cartSummary",cartTotal:"cartTotal",authDialog:"authDialog",authForm:"authForm",authTitle:"authTitle",loginTab:"loginTab",registerTab:"registerTab",loginFields:"loginFields",registerFields:"registerFields",authSubmit:"authSubmit",authMessage:"authMessage",googleLoginButton:"googleLoginButton",loginButton:"loginButton",favoritesButton:"favoritesButton",favoritesCount:"favoritesCount",favoritesDialog:"favoritesDialog",favoritesSummary:"favoritesSummary",favoritesContent:"favoritesContent",refreshFavorites:"refreshFavorites",closeFavorites:"closeFavorites",notificationsButton:"notificationsButton",notificationsCount:"notificationsCount",notificationsDrawer:"notificationsDrawer",notificationsSummary:"notificationsSummary",notificationsContent:"notificationsContent",refreshNotifications:"refreshNotifications",closeNotifications:"closeNotifications",loginEmail:"loginEmail",loginPassword:"loginPassword",registerFullName:"registerFullName",registerEmail:"registerEmail",registerPhone:"registerPhone",registerPassword:"registerPassword",registerConfirmPassword:"registerConfirmPassword",profileDrawer:"profileDrawer",closeProfile:"closeProfile",profileContent:"profileContent",apiDialog:"apiDialog",apiForm:"apiForm",apiButton:"apiButton",baseUrl:"baseUrl",detailDialog:"detailDialog",detailContent:"detailContent",productDetailPage:"productDetailPage",productDetailPageContent:"productDetailPageContent",checkoutButton:"checkoutButton",checkoutDialog:"checkoutDialog",checkoutForm:"checkoutForm",checkoutHint:"checkoutHint",receiverSelect:"receiverSelect",addressSelect:"addressSelect",checkoutContent:"checkoutContent",refreshHome:"refreshHome",ordersButton:"ordersButton",ordersDialog:"ordersDialog",ordersContent:"ordersContent",refreshOrders:"refreshOrders",closeOrders:"closeOrders",myReviewsDialog:"myReviewsDialog",myReviewsContent:"myReviewsContent",myReviewsSummary:"myReviewsSummary",refreshMyReviews:"refreshMyReviews",closeMyReviews:"closeMyReviews",writeReviewDialog:"writeReviewDialog",writeReviewForm:"writeReviewForm",closeWriteReview:"closeWriteReview",writeReviewProduct:"writeReviewProduct",reviewRatingSelector:"reviewRatingSelector",reviewContent:"reviewContent",reviewImages:"reviewImages",reviewImageFiles:"reviewImageFiles",reviewUploadStatus:"reviewUploadStatus",reviewFormMessage:"reviewFormMessage",submitReviewButton:"submitReviewButton",supportButton:"supportButton",supportDialog:"supportDialog",supportContent:"supportContent",privacyDialog:"privacyDialog",privacyContent:"privacyContent",termsDialog:"termsDialog",termsContent:"termsContent",toast:"toast",brandViewContent:"brandViewContent",cartExtras:"cartExtras",cartStickyProgress:"cartStickyProgress",megaMenu:"megaMenu",popularSearchesChips:"popularSearchesChips"};function ja(){Object.entries(Ga).forEach(([e,t])=>{o[e]=document.getElementById(t)})}function De(e){const t={...e},r={};for(const a of Object.keys(t)){Object.defineProperty(r,a,{get(){return t[a]},set(l){t[a]=l},enumerable:!0,configurable:!0});const s=`set${a.charAt(0).toUpperCase()}${a.slice(1)}`;r[s]=l=>{t[a]=l}}return r}const h=De({baseUrl:vt(localStorage.getItem(S.storageKeys.baseUrl)||""),lastApiError:"",currentRoute:"home",sessionId:Ua(),impressionsSent:new Set,impressionObserver:null,isLoading:!1,searchTimer:null,supportFaqOpen:0,flashSaleEnd:null,currentSearchQuery:"",currentGridScreen:"home",orders:[],ordersLoading:!1,ordersError:"",selectedOrder:null,selectedOrderHistory:[],orderDetailLoading:!1,orderDetailError:"",orderHistoryWarning:"",savedForLater:[]});function Wr(){var e;try{return((e=import.meta)==null?void 0:e.env)??{}}catch{return{}}}function ot(){return!!Wr().DEV}function Wa(e){try{return JSON.parse(e)}catch{return e}}function Ya(e,t){return typeof e=="string"&&e.trim()?e:(e==null?void 0:e.message)||(e==null?void 0:e.error)||`API xatosi: HTTP ${t}`}let xe={onUnauthorized:()=>{},onLoginRequired:()=>{},showToast:()=>{}};function _a(e={}){xe={...xe,...e}}function Ja(e,t){const r=e.startsWith("/")?e:`/${e}`,a=h.baseUrl?h.baseUrl.replace(/\/+$/,""):"",s=new URL(`${a}${r}`,window.location.origin);return t&&Object.entries(t).forEach(([l,d])=>{d!=null&&d!==""&&s.searchParams.set(l,d)}),s.toString()}async function $(e,t={}){const{query:r,showError:a=!0,requireAuth:s=!1,silentAuth:l=!1,timeoutMs:d=0,signal:u,...p}=t,m=Ja(e,r),f={Accept:"application/json",...p.body?{"Content-Type":"application/json"}:{},...p.headers||{}},k=dt();if(k&&(f.Authorization=`Bearer ${k}`),s&&!k)return h.lastApiError="Please login to continue",xe.onLoginRequired(),null;if(ot()){const E=Wr();console.info("[API REQUEST]",{path:e,requestUrl:m,method:p.method||"GET",query:r,baseUrl:h.baseUrl,host:window.location.host,mode:E.MODE,envBase:E.VITE_API_BASE_URL})}const I=new AbortController;let D=!1;const M=d>0?setTimeout(()=>{D=!0,I.abort()},d):null;u&&(u.aborted?I.abort():u.addEventListener("abort",()=>I.abort(),{once:!0}));try{h.lastApiError="";const E=await fetch(m,{...p,headers:f,signal:I.signal}),B=await E.text(),q=B?Wa(B):null;if(ot()&&console.info("[API RESPONSE]",{requestUrl:m,status:E.status,ok:E.ok,payload:q}),E.status===401)return h.lastApiError="Session expired. Please login again.",l||xe.onUnauthorized(),null;if(!E.ok){const y=Ya(q,E.status);return h.lastApiError=y,a&&xe.showToast(y,"error"),null}return q}catch(E){return(E==null?void 0:E.name)==="AbortError"?h.lastApiError=D?"So‘rov vaqti tugadi. Qayta urinib ko‘ring.":"So‘rov bekor qilindi.":h.lastApiError="Server bilan aloqa bo‘lmadi",ot()&&console.error("[API ERROR]",{requestUrl:m,error:E}),a&&(E==null?void 0:E.name)!=="AbortError"&&xe.showToast("Server bilan aloqa vaqtincha ishlamayapti.","error"),null}finally{M&&clearTimeout(M)}}const Qa=4200,Za=4;let X=null;function Xa(){return X||(X=document.getElementById("toast"),X?(X.classList.add("toast-host"),X.setAttribute("aria-relevant","additions")):(X=document.createElement("div"),X.id="toast",X.className="toast-host",X.setAttribute("role","status"),X.setAttribute("aria-live","polite"),X.setAttribute("aria-relevant","additions"),document.body.appendChild(X)),X)}const Sr={success:"✓",error:"✕",warning:"!",info:"i"};function T(e,t="info"){var k;const r=String(e||"").trim();if(!r)return;const a=Xa(),s=Sr[t]?t:"info",l=document.createElement("div");l.className=`toast-item toast-${s}`,l.setAttribute("role","status");const d=document.createElement("span");d.className="toast-icon",d.setAttribute("aria-hidden","true"),d.textContent=Sr[s];const u=document.createElement("span");u.className="toast-message",u.textContent=r;const p=document.createElement("button");for(p.type="button",p.className="toast-close",p.setAttribute("aria-label","Close"),p.textContent="×",l.append(d,u,p),a.appendChild(l);a.children.length>Za;)(k=a.firstElementChild)==null||k.remove();let m=0;const f=()=>{clearTimeout(m),l.classList.remove("show"),window.setTimeout(()=>l.remove(),220)};p.addEventListener("click",f),m=window.setTimeout(f,Qa),requestAnimationFrame(()=>{requestAnimationFrame(()=>l.classList.add("show"))})}const P=De({accessToken:dt(),user:Ha(S.storageKeys.user,null),role:localStorage.getItem(S.storageKeys.role)||"",authMode:"login",authLoading:!1,profileEditing:!1,profileLoading:!1,profileMenuOpen:!1,profileLoadSeq:0}),c=De({products:[],todayDeals:[],categories:[],banners:[],announcements:[],recommendedProducts:[],recommendedSimilar:[],recommendedOthers:[],recommendationsLoading:!1,recommendationsError:"",selectedCategory:"ALL",selectedDetailProduct:null,selectedVariantId:null,selectedBrand:null,sourceProducts:[],filterFacets:{brands:[],colors:[],sizes:[],maxPrice:5e6},filters:null,recentlyViewed:[],productReviewsByProductId:{},productReviewsLoading:{},productReviewsError:{},myReviews:[],myReviewsLoading:!1,myReviewsError:"",reviewSubmitting:!1,reviewDraft:null,reviewRating:5,reviewSort:"newest",reviewFilterRating:0,reviewSearchQuery:"",reviewHelpfulIds:new Set,uploadingReviewImages:!1,detailLoading:!1,detailError:"",pdpGalleryIndex:0,pdpActiveTab:"description",selectedQuantity:1,homeLoadedFromApi:!1,demoCategories:!1,demoProducts:!1,demoDeals:!1,homeApiSections:null,compareIds:[],compareProducts:[],feedLoading:!1,feedPage:0}),b=De({cart:[],cartItems:[],cartLoading:!1,cartError:"",cartCount:0,cartTotal:0,cartUpdatingIds:new Set,cartSelectedIds:new Set,cartKnownItemIds:new Set,addingProductIds:new Set,cartCoupon:"",cartCouponDiscount:0}),C=De({favoriteProducts:[],favoriteIds:new Set,favoritesLoading:!1,favoritesError:"",favoritesCount:0}),R=De({notifications:[],notificationsLoading:!1,notificationsError:"",unreadCount:0,unreadCountLoading:!1,notificationUpdatingIds:new Set}),g=De({receivers:[],addresses:[],selectedReceiverId:null,selectedAddressId:null,checkoutLoading:!1,orderSubmitting:!1,checkoutError:"",orderSuccess:null,checkoutStep:1,checkoutAddressPickerOpen:!1,checkoutReceiverPickerOpen:!1,checkoutCouponOpen:!1,checkoutConfirmOpen:!1});function Wt(){return{currentRoute:h.currentRoute,selectedDetailProduct:c.selectedDetailProduct}}const Yr={SKINCARE:"Skincare",MAKEUP:"Makeup",COLLAGEN:"Collagen",HAIR_CARE:"Hair Care",FRAGRANCE:"Fragrance",TOP:"Top",OUTER:"Outer",PANTS:"Pants",SHOES:"Shoes",BAG:"Bag",ACCESSORY:"Accessory"},Yt=Object.freeze(["uz","en","ru","ko"]),Ze="uz",Cr=Object.freeze([{category:"SKINCARE",icon:"S"},{category:"MAKEUP",icon:"M"},{category:"COLLAGEN",icon:"C"},{category:"HAIR_CARE",icon:"H"},{category:"FRAGRANCE",icon:"F"},{category:"BAG",icon:"B"},{category:"SHOES",icon:"S"},{category:"ACCESSORY",icon:"A"}]),_r={"header.location":"📍 Toshkent","header.extraLinks":"Qo‘shimcha havolalar","header.pickupPoints":"Punktlar","header.sell":"Sotuvchi bo‘lish","header.support":"Savol-javob","header.orders":"Buyurtmalar","header.language":"Til","header.currency":"Valyuta","header.theme":"Mavzu","header.homeAria":"BEAUTY SKIN KOREA bosh sahifa","header.openCatalog":"Katalogni ochish","header.catalog":"Katalog","header.search":"Qidirish","header.searchPlaceholder":"Mahsulot va kategoriyalarni qidirish","header.mainMenu":"Asosiy menyu","header.loginProfile":"Profil yoki kirish","auth.login":"Kirish","auth.register":"Ro‘yxatdan o‘tish","auth.email":"Email","auth.password":"Parol","auth.confirmPassword":"Parolni tasdiqlang","auth.fullName":"To‘liq ism","auth.phone":"Telefon","auth.signIn":"Kirish","auth.createAccount":"Hisob yaratish","auth.continueWithGoogle":"Google bilan kirish","auth.or":"yoki","auth.logout":"Chiqish","auth.loginRequired":"Davom etish uchun kiring","auth.sessionExpired":"Sessiya tugadi. Qayta kiring.","auth.emailRequired":"Email majburiy.","auth.passwordMin":"Parol kamida 6 ta belgi bo‘lsin.","auth.fullNameRequired":"To‘liq ism majburiy.","auth.phoneRequired":"Telefon majburiy.","auth.passwordMismatch":"Parollar mos emas.","home.all":"Hammasi","home.categories":"Kategoriyalar","home.quickCategories":"Tezkor kategoriyalar","home.lowPriceGuarantee":"Past narx kafolati","home.seeAll":"Hammasi","home.todayDeals":"Bugungi takliflar","home.discounts":"Chegirmalar","home.newArrivals":"Yangi mahsulotlar","home.popular":"Ommabop mahsulotlar","home.recommended":"Siz uchun tavsiyalar","home.similar":"O‘xshash mahsulotlar","home.others":"Boshqalar ham ko‘rgan","home.demoMode":"Demo rejim","home.todayOnly":"Faqat bugun","home.startShopping":"Xaridni boshlash","home.showAll":"Barcha mahsulotlar","home.loadMore":"Yana yuklash","home.noProducts":"Mahsulot topilmadi","home.loading":"Yuklanmoqda...","product.addToCart":"Savatga","product.addToCartFull":"Savatga qo‘shish","product.adding":"Qo‘shilmoqda...","product.sold":"{count} dona sotilgan","product.stock":"Omborda: {count}","product.outOfStock":"Omborda yo‘q","product.save":"Saqlash","product.saved":"Saqlangan","product.viewDetails":"Batafsil","product.quickView":"Tez ko‘rish","product.compare":"Solishtirish","product.compareSoon":"Solishtirish tez orada","product.lowStock":"Kam qoldi","product.freeShipping":"Bepul yetkazish","product.reviews":"Sharhlar","product.home":"Bosh sahifa","product.description":"Tavsif","product.detailImages":"Batafsil rasmlar","product.details":"Tafsilotlar","product.delivery":"O‘zbekiston bo‘ylab yetkazib berish","product.secure":"Xavfsiz to‘lov","product.original":"Asl koreys mahsulotlari","product.quantity":"Miqdor","product.notFound":"Mahsulot topilmadi","product.backToShopping":"Xaridga qaytish","product.variantUnavailable":"Variant mavjud emas","cart.title":"Savat","cart.empty":"Savatingiz bo‘sh","cart.subtotal":"Jami","cart.checkout":"Rasmiylashtirish","cart.remove":"O‘chirish","cart.quantity":"Miqdor","cart.added":"Savatga qo‘shildi","cart.itemRemoved":"Mahsulot o‘chirildi","cart.quantityUpdated":"Miqdor yangilandi","cart.unavailable":"Savat mavjud emas","cart.deliveryCourier":"Kuryer orqali yetkazib berish","cart.deliveryEta":"3 kun ichida yetkazamiz","cart.selectAll":"Hammasini tanlash ({selected}/{total})","cart.selectItem":"Mahsulotni tanlash","cart.deleteSelected":"O‘chirish","cart.yourOrder":"Sizning buyurtmangiz","cart.goodsCount":"{count} ta mahsulot","cart.discount":"Chegirma","cart.deliveryCost":"Yetkazib berish narxi","cart.freeDelivery":"Bepul","cart.products":"Mahsulot","cart.freeToHome":"Uyga bepul yetkazish","cart.shipsToday":"Bugun jo‘natiladi","cart.emptyHint":"Yoqtirgan mahsulotlaringizni qo‘shing — ular shu yerda ko‘rinadi.","checkout.title":"Rasmiylashtirish","checkout.receiver":"Qabul qiluvchi","checkout.address":"Yetkazib berish manzili","checkout.orderSummary":"Buyurtma xulosasi","checkout.placeOrder":"Buyurtma berish","checkout.orderCreated":"Buyurtma yaratildi","checkout.continueShopping":"Xaridni davom ettirish","checkout.viewOrders":"Buyurtmalarni ko‘rish","orders.title":"Buyurtmalar tarixi","orders.order":"Buyurtma","orders.details":"Buyurtma tafsilotlari","orders.history":"Status tarixi","orders.none":"Hali buyurtmalar yo‘q","orders.refresh":"Yangilash","orders.viewDetails":"Batafsil","orders.items":"{count} ta mahsulot","orders.itemsCount":"{count} ta tovar","orders.totalLabel":"Jami:","orders.addressLabel":"Manzil:","orders.products":"Mahsulotlar","orders.emptyHint":"Xaridlar qilgandan so‘ng buyurtmalar shu yerda ko‘rinadi.","orders.unavailable":"Buyurtmalar yuklanmadi","orders.detailUnavailable":"Buyurtma tafsilotlari yuklanmadi","orders.noItems":"Mahsulotlar topilmadi.","orders.deliveryInfo":"Yetkazib berish ma'lumotlari","orders.openOnMap":"Xaritada ochish","orders.orderActions":"Buyurtma amallari","orders.goodsLabel":"Mahsulotlar","orders.totalAmount":"Jami summa","orders.feedback":"Fikr-mulohaza","orders.statusMessage.NEW":"Buyurtma qabul qilindi va tez orada tasdiqlanadi.","orders.statusMessage.CONFIRMED":"Buyurtma tasdiqlandi va tayyorlanmoqda.","orders.statusMessage.PACKED":"Buyurtma qadoqlandi va tez orada yuboriladi.","orders.statusMessage.SHIPPED":"Buyurtma yo'lda. Yetkazish vaqtida aloqada bo'ling.","orders.statusMessage.DELIVERED":"Buyurtma yetkazildi. Xaridingiz uchun rahmat!","orders.statusMessage.CANCELED":"Buyurtma bekor qilindi.","orders.statusMessage.default":"Buyurtma holati yangilanmoqda.","favorites.title":"Saralangan","favorites.empty":"Saralanganlar hozircha bo‘sh","favorites.emptyHint":"Yoqtirgan mahsulotlaringiz shu yerda saqlanadi. Yoqqanlarini qo‘shing.","favorites.browse":"Mahsulotlarga","favorites.count":"{count} ta mahsulot","favorites.unavailable":"Saralanganlar yuklanmadi","favorites.added":"Saralanganlarga qo‘shildi","favorites.removed":"Saralangandan olib tashlandi","profile.myProfile":"Profil","profile.edit":"Profilni tahrirlash","profile.save":"Saqlash","profile.myOrders":"Buyurtmalarim","profile.myReviews":"Sharhlarim","profile.tierWhite":"White","profile.ordersStat":"Buyurtmalar","profile.reviewsStat":"Sharhlar","profile.couponsStat":"Kupon","profile.feedbackStat":"Fikr-mulohaza","profile.seeAll":"Hammasini ko‘rish","profile.promotions":"Aksiyalar va kuponlar","profile.help":"Yordam va qo‘llab-quvvatlash","profile.news":"Yangiliklar","profile.language":"Til / Til / Language","profile.privacy":"Maxfiylik siyosati","profile.terms":"Foydalanish shartlari","profile.licenses":"Ochiq kod litsenziyalari","profile.settings":"Sozlamalar","profile.menu":"Menyu","profile.logout":"Chiqish","profile.loggedOut":"Tizimdan chiqildi","profile.comingSoon":"Bu bo‘lim tez orada qo‘shiladi","profile.helpMessage":"Qo‘llab-quvvatlash: support@beautyskin.uz","profile.fullName":"To‘liq ism","profile.phone":"Telefon","profile.imageUrl":"Profil rasmi URL","profile.loadUserFailed":"Profil ma’lumotlari yuklanmadi","profile.loadOrdersFailed":"Buyurtmalar yuklanmadi","profile.loadReviewsFailed":"Sharhlar yuklanmadi","profile.loadFailed":"Profil ma’lumotlari yuklanmadi","support.title":"Qo‘llab-quvvatlash xizmati","support.intro":"Savollaringiz bormi? Biz sizga yordam beramiz.","support.faqTitle":"Ko‘p beriladigan savollar","support.faq.delivery.q":"Buyurtmam qachon keladi?","support.faq.delivery.a":"Buyurtmalar odatda 3–5 ish kuni ichida yetkazib beriladi. Yetkazib berish muddati hudud va tanlangan kuryer xizmatiga bog‘liq. Tabiiy ofatlar yoki boshqa kutilmagan holatlar yuzaga kelmagan taqdirda, buyurtmangiz belgilangan muddatda yetib keladi.","support.faq.cancel.q":"Buyurtmani qanday bekor qilaman?","support.faq.cancel.a":"Buyurtma faqat jo‘natilmaguncha bekor qilinishi mumkin. Buyurtma kuryer xizmatiga topshirilgandan so‘ng uni bekor qilish imkoniyati mavjud emas. Bekor qilish uchun profil bo‘limi yoki mijozlarga xizmat orqali murojaat qilishingiz mumkin.","support.faq.return.q":"Mahsulotni qaytarish mumkinmi?","support.faq.return.a":"Mahsulotni qaytarish faqat u ishlatilmagan, qadoqlanishi buzilmagan va to‘liq holatda saqlangan taqdirda amalga oshiriladi. Qaytarish jarayonida mahsulotni kargo orqali yuborish xarajatlari mijoz zimmasiga yuklanadi.","support.originalTitle":"100% original va Koreyadan to‘g‘ridan-to‘g‘ri yetkazib berish","support.originalText":"Ilovamizdagi mahsulotlar to‘g‘ridan-to‘g‘ri Janubiy Koreyadagi rasmiy ishlab chiqaruvchilar va sertifikatlangan distribyutorlardan import qilinadi. Soxta mahsulot sotish qat’iyan taqiqlanadi.","support.whyTitle":"Nega biz?","support.why1":"Koreyadan to‘g‘ridan-to‘g‘ri import","support.why2":"Hech qanday soxta mahsulot yo‘q","support.why3":"Zavod qadog‘i va original plombalar","support.why4":"Har bir buyurtma jo‘natishdan oldin tekshiriladi","support.why5":"Minglab mamnun mijozlar tanlovi","support.guarantee":"Agar mahsulot original bo‘lmasa — biz 100% qiymatini qaytaramiz.","support.contactTitle":"Biz bilan bog‘laning","support.phoneLabel":"Telefon:","support.hoursLabel":"Ish vaqti:","support.hoursValue":"09:00 – 18:00 (Du–Ju)","support.contactNote":"Murojaatlaringizni qadrlaymiz va imkon qadar tezroq javob berishga harakat qilamiz.","privacy.title":"Maxfiylik siyosati","privacy.updated":"Oxirgi yangilanish: 2025 y.","privacy.intro":"Biz foydalanuvchilarning shaxsiy ma’lumotlarini hurmat qilamiz va himoya qilamiz. Ushbu Maxfiylik siyosati ma’lumotlaringiz qanday to‘planishi, ishlatilishi va saqlanishini tushuntiradi.","privacy.s1title":"1. Qanday ma’lumotlar to‘planadi","privacy.s1a":"Ism va profil ma’lumotlari","privacy.s1b":"Telefon raqami yoki email","privacy.s1c":"Buyurtmalar va savat ma’lumotlari","privacy.s1d":"Qurilma haqidagi texnik ma’lumotlar","privacy.s2title":"2. Ma’lumotlardan foydalanish","privacy.s2intro":"To‘plangan ma’lumotlar quyidagi maqsadlarda ishlatiladi:","privacy.s2a":"Buyurtmalarni bajarish","privacy.s2b":"Akkauntni boshqarish","privacy.s2c":"Xizmat sifatini yaxshilash","privacy.s2d":"Xavfsizlikni ta’minlash","privacy.s3title":"3. Ma’lumotlarni himoya qilish","privacy.s3text":"Biz shaxsiy ma’lumotlaringizni ruxsatsiz kirish, o‘zgartirish yoki tarqatishdan himoya qilish uchun zamonaviy xavfsizlik choralarini qo‘llaymiz.","privacy.s4title":"4. Uchinchi tomon xizmatlari","privacy.s4text":"Ilovamiz to‘lov, yetkazib berish va autentifikatsiya uchun uchinchi tomon xizmatlaridan foydalanishi mumkin. Bu xizmatlarning o‘z maxfiylik siyosati mavjud.","privacy.s5title":"5. Aloqa","privacy.s5text":"Agar Maxfiylik siyosati bo‘yicha savollaringiz bo‘lsa, biz bilan bog‘laning:","terms.title":"Foydalanish shartlari","terms.updated":"Oxirgi yangilanish: 2025 y.","terms.intro":"Ushbu mobil ilovadan foydalanish orqali siz ushbu Foydalanish shartlariga rozilik bildirasiz. Agar shartlarga rozi bo‘lmasangiz, iltimos, ilovadan foydalanmang.","terms.s1title":"1. Umumiy qoidalar","terms.s1text":"Ushbu ilova kosmetika va boshqa mahsulotlarni onlayn sotib olish uchun mo‘ljallangan. Barcha materiallar, logotiplar va kontent mualliflik huquqi bilan himoyalangan.","terms.s2title":"2. Akkaunt ro‘yxatdan o‘tkazish","terms.s2text":"Buyurtma berish uchun foydalanuvchi akkaunt yaratishi va ishonchli ma’lumotlarni taqdim etishi kerak. Foydalanuvchi o‘z akkauntining xavfsizligi uchun javobgardir.","terms.s3title":"3. Buyurtmalar va to‘lov","terms.s3text":"Buyurtmalar ilova orqali rasmiylashtiriladi. Mahsulot narxlari oldindan ogohlantirmasdan o‘zgarishi mumkin. To‘lov tanlangan usul bo‘yicha amalga oshiriladi.","terms.s4title":"4. Yetkazib berish","terms.s4text":"Yetkazib berish muddatlari hudud va tanlangan usulga bog‘liq. Uchinchi tomon yetkazib berish xizmatlari sababli yuzaga kelgan kechikishlar uchun javobgar emasmiz.","terms.s5title":"5. Qaytarish va bekor qilish","terms.s5text":"Buyurtmalarni qaytarish va bekor qilish siyosati tegishli bo‘limda va yordam hamda qo‘llab-quvvatlash sahifasida tavsiflangan.","terms.s6title":"6. Javobgarlikni cheklash","terms.s6text":"Ilovadan foydalanish bilan bog‘liq bilvosita zarar uchun javobgar emasmiz.","terms.s7title":"7. Shartlarni o‘zgartirish","terms.s7text":"Biz ushbu shartnomani istalgan vaqtda o‘zgartirish huquqini o‘zimizda saqlaymiz. Joriy versiya doimo ilovada mavjud.","licenses.title":"Open Source Libraries & Technologies","licenses.intro":"Ushbu ilova quyidagi ochiq kodli texnologiyalar yordamida qurilgan","licenses.frontendTitle":"Android Frontend","licenses.fe1":"Android Jetpack – hayot sikli, navigatsiya, ViewBinding va arxitektura komponentlarini boshqarish uchun ishlatiladigan zamonaviy Android kutubxonalari to‘plami, barqaror foydalanuvchi interfeysini ta’minlaydi.","licenses.fe2":"Retrofit – backend REST API bilan samarali aloqa qilish uchun ishlatiladigan Android uchun tip-xavfsiz HTTP-mijoz.","licenses.fe3":"Glide – silliq skroll va samarali xotira ishlatilishi uchun optimallashtirilgan rasmlarni yuklash va keshlash kutubxonasi.","licenses.fe4":"Firebase Authentication – Google orqali xavfsiz foydalanuvchi autentifikatsiyasi va telefon raqamini tekshirish (OTP) ni ta’minlaydi.","licenses.fe5":"Facebook Shimmer – foydalanuvchi tajribasini yaxshilash uchun animatsiyali yuklash zaxira o‘rinlarini ko‘rsatadi.","licenses.backendTitle":"Backend & Server Technologies","licenses.be1":"Spring Boot – masshtablanadigan RESTful API yaratish uchun ishlatiladigan Java asosidagi freymvork.","licenses.be2":"Spring Security + JWT – foydalanuvchi sessiyalari va API endpointlarini himoya qilish uchun JSON Web Tokens yordamida autentifikatsiyani amalga oshiradi.","licenses.be3":"Spring Data JPA – ORM va repozitoriy patterni yordamida ma’lumotlar bazasiga kirishni soddalashtiradi.","licenses.be4":"MySQL – hisob yozuvlari, buyurtmalar va tovarlarni saqlash uchun ishonchli relatsion ma’lumotlar bazasini boshqarish tizimi.","licenses.be5":"Eskiz SMS API – telefon raqamini tekshirish va bir martalik parollarni (OTP) yetkazish uchun ishlatiladi.","licenses.infraTitle":"Infrastructure & Deployment","licenses.inf1":"Docker – ilovani barcha bog‘liqliklari bilan barqaror joylashtirish uchun paketlash konteynerizatsiya texnologiyasi.","licenses.inf2":"Railway Cloud – backend xizmatlarini joylashtirish, masshtablash va monitoring qilish uchun bulutli platforma.","licenses.securityTitle":"Security & Data Protection","licenses.sec1":"HTTPS – foydalanuvchi ma’lumotlarini himoya qilish uchun barcha tarmoq aloqasi HTTPS yordamida shifrlangan.","licenses.sec2":"Xavfsiz parol bilan ishlash – foydalanuvchi hisob ma’lumotlari hech qachon ochiq holda saqlanmaydi.","licenses.sec3":"Token asosidagi avtorizatsiya – barcha himoyalangan so‘rovlar yaroqli JWT tokenlarini talab qiladi.","licenses.footer":"Biz ochiq kod hamjamiyatini hurmat qilamiz va barcha litsenziya talablari hamda ilg‘or xavfsizlik amaliyotlariga qat’iy rioya qilamiz.","reviews.my":"Mening sharhlarim","reviews.write":"Sharh yozish","reviews.submit":"Sharh yuborish","reviews.rating":"Reyting","reviews.content":"Sharh matni","reviews.none":"Hali sharhlar yo‘q","reviews.noText":"Matnli sharh yo‘q.","reviews.submitted":"Sharh yuborildi","notifications.title":"Bildirishnomalar","notifications.alerts":"Xabarlar","notifications.none":"Hali bildirishnomalar yo‘q","notifications.markRead":"O‘qildi deb belgilash","notifications.read":"O‘qilgan","notifications.unread":"O‘qilmagan","common.tryAgain":"Qayta urinish","common.somethingWrong":"Nimadir xato ketdi","common.serverFailed":"Server bilan aloqa bo‘lmadi","common.saving":"Saqlanmoqda...","common.total":"Jami","common.unknown":"Noma’lum","common.unavailable":"Mavjud emas","status.NEW":"Yangi","status.PENDING":"Kutilmoqda","status.CONFIRMED":"Tasdiqlangan","status.PACKED":"Qadoqlangan","status.SHIPPED":"Yuborilgan","status.DELIVERED":"Yetkazilgan","status.CANCELED":"Bekor qilingan","notification.ORDER":"Buyurtma","notification.PROMO":"Aksiya","notification.SYSTEM":"Tizim","category.SKINCARE":"Teri parvarishi","category.MAKEUP":"Makiyaj","category.COLLAGEN":"Kollagen","category.HAIR_CARE":"Soch parvarishi","category.FRAGRANCE":"Atirlar","category.TOP":"Ustki kiyim","category.OUTER":"Tashqi kiyim","category.PANTS":"Shimlar","category.SHOES":"Poyabzal","category.BAG":"Sumka","category.ACCESSORY":"Aksessuar","hero.eyebrow":"Eng yaxshi kunlik takliflar","hero.title":"Koreys go‘zallik mahsulotlari","hero.subtitle":"O‘zbekiston bo‘ylab tez yetkazib berish — kosmetika, teri parvarishi, atir va aksessuarlar.","hero.viewProducts":"Mahsulotlarni ko‘rish","hero.fastDelivery":"Tez yetkazib berish","hero.fastDeliverySub":"O‘zbekiston bo‘ylab","home.history":"Tarix","home.recentlyViewed":"Yaqinda ko‘rilgan","api.title":"API sozlamasi","api.save":"Saqlash","search.results":"Natijalar","search.noResults":"Hech narsa topilmadi","search.recent":"So‘nggi qidiruvlar","search.trending":"Trendda","search.clear":"Tozalash","search.aiHint":"AI qidiruv — tezroq toping","search.voice":"Ovozli qidiruv","search.image":"Rasm bo‘yicha qidiruv","search.imagePlaceholder":"Rasm tanlandi — qidiruv tez orada","search.popularSearches":"Ommabop qidiruvlar","trust.secure":"Xavfsiz to‘lov","trust.authentic":"100% asl mahsulot","trust.delivery":"Tez yetkazib berish","trust.verified":"Tasdiqlangan sotuvchilar","filter.title":"Filtrlar","filter.clearAll":"Hammasini tozalash","filter.brand":"Brend","filter.price":"Narx","filter.discount":"Chegirma","filter.color":"Rang","filter.size":"O'lcham","filter.rating":"Reyting","filter.availability":"Mavjudlik","filter.fastDelivery":"Tez yetkazish","filter.origin":"Kelib chiqishi","filter.seller":"Sotuvchi","filter.onSaleOnly":"Faqat chegirmali","filter.inStock":"Omborda bor","filter.apply":"Qo'llash","filter.noOptions":"Variant yo'q","sort.title":"Saralash","sort.popular":"Ommabop","sort.priceAsc":"Narx: arzon → qimmat","sort.priceDesc":"Narx: qimmat → arzon","sort.rating":"Yuqori reyting","sort.newest":"Yangi","sort.discount":"Eng katta chegirma","compare.title":"Solishtirish","compare.empty":"Solishtirish ro'yxati bo'sh","compare.added":"Solishtirishga qo'shildi","compare.removed":"Solishtirishdan olib tashlandi","compare.full":"Maksimum {max} ta mahsulot","compare.viewAll":"Solishtirishni ko'rish","compare.clearAll":"Hammasini tozalash","compare.price":"Narx","compare.brand":"Brend","compare.rating":"Reyting","compare.stock":"Ombor","compare.discount":"Chegirma","product.authentic":"Asl mahsulot","product.officialStore":"Rasmiy do'kon","product.fullscreen":"To'liq ekran","product.video360Placeholder":"Video va 360° tez orada","product.listPrice":"Ro'yxat narxi","product.discount":"Chegirma","product.installmentPlaceholder":"Bo'lib to'lash tez orada","product.estimatedDelivery":"Taxminiy yetkazish","product.frequentlyBought":"Ko'pincha birga sotib olinadi","cart.saveForLater":"Keyinroq uchun saqlash","cart.couponPlaceholder":"Kupon kodi","cart.applyCoupon":"Qo'llash","cart.couponApplied":"Kupon qo'llandi","cart.couponInvalid":"Kupon noto'g'ri","cart.freeShippingUnlocked":"Bepul yetkazish!","cart.freeShippingRemaining":"Bepul yetkazish uchun yana {amount}","cart.restored":"Saqlangan mahsulot","cart.moveToCart":"Savatga qaytarish","checkout.stepShipping":"Yetkazish","checkout.stepAddress":"Manzil","checkout.stepPayment":"To'lov","checkout.stepReview":"Tekshirish","checkout.back":"Orqaga","checkout.continue":"Davom etish","checkout.placing":"Yuborilmoqda...","checkout.paymentPlaceholder":"Xavfsiz to'lov (COD / karta tez orada)","checkout.receiverRequired":"Qabul qiluvchini tanlang","checkout.addressRequired":"Manzilni tanlang","checkout.deliveryTitle":"Yetkazib berish","checkout.deliveryEta":"Buyurtma 3–5 ish kuni ichida yetkaziladi","checkout.addressNotSelected":"Manzil tanlanmagan","checkout.selectAddress":"Manzilni tanlash","checkout.receiverNotSelected":"Qabul qiluvchi tanlanmagan","checkout.paymentMethod":"To‘lov usuli","checkout.paymentCod":"Qabul qilganda to‘lash","checkout.paymentCodHint":"To‘lov faqat naqd pul yoki bank kartasiga o‘tkazma orqali amalga oshiriladi","checkout.deliveryInfo":"Buyurtma kuryer orqali manzilga yetkaziladi. Yetkazish vaqtida aloqada bo‘ling.","checkout.couponTitle":"Chegirma kuponi","checkout.applyCoupon":"Kupon qo‘llash","checkout.yourOrder":"Sizning buyurtmangiz","checkout.deliveryFee":"Yetkazish","checkout.totalToPay":"To‘lov uchun jami","checkout.confirm":"Tasdiqlash","checkout.legalNotice":"Buyurtmani tasdiqlash orqali Foydalanish shartlari va Maxfiylik siyosatiga rozilik bildirasiz.","checkout.deliveryOn":"Yetkazish {dates}","checkout.itemsCount":"{count} ta mahsulot","checkout.confirmTitle":"Buyurtmani tasdiqlash","checkout.confirmQuestion":"Buyurtmani yubormoqchimisiz?","checkout.confirmName":"Ism: {name}","checkout.confirmAddress":"Manzil: {address}","checkout.confirmDisclaimer":"Tasdiqlangandan keyin buyurtmani faqat qo‘llab-quvvatlash xizmati orqali o‘zgartirish mumkin.","checkout.cancel":"Bekor qilish","checkout.successTitle":"Buyurtma muvaffaqiyatli rasmiylashtirildi!","checkout.successSubtitle":"Buyurtma muvaffaqiyatli qabul qilindi","checkout.orderFailed":"Buyurtma yuborilmadi. Qayta urinib ko‘ring.","checkout.noItems":"Savatda tanlangan mahsulot yo‘q.","checkout.invalidItems":"Savatdagi mahsulot identifikatorlari noto‘g‘ri.","reviews.verified":"Tasdiqlangan xarid","reviews.helpful":"Foydali","reviews.search":"Sharhlarni qidirish","reviews.sortNewest":"Eng yangi","reviews.sortRatingHigh":"Yuqori reyting","reviews.sortRatingLow":"Past reyting","reviews.sortHelpful":"Eng foydali","reviews.allRatings":"Barcha reytinglar","brand.official":"Rasmiy brend","brand.story":"Koreys go'zallik brendi","brand.popular":"Ommabop mahsulotlar","home.trendingNow":"Hozir trendda","home.recommendedForYou":"Siz uchun tavsiya","home.continueShopping":"Xaridni davom ettirish","home.becauseYouViewed":"Siz ko'rganingiz uchun"},_t={..._r,"header.location":"📍 Tashkent","header.pickupPoints":"Pickup points","header.sell":"Sell on Beauty Skin Korea","header.support":"Support","header.orders":"Orders","header.language":"Language","header.catalog":"Catalog","header.searchPlaceholder":"Search products and categories","header.search":"Search","auth.login":"Login","auth.register":"Register","auth.signIn":"Sign in","auth.createAccount":"Create account","auth.continueWithGoogle":"Continue with Google","auth.or":"or","auth.email":"Email","auth.password":"Password","auth.confirmPassword":"Confirm password","auth.fullName":"Full name","auth.phone":"Phone","auth.logout":"Logout","auth.loginRequired":"Please login to continue","auth.emailRequired":"Email is required.","auth.passwordMin":"Password must be at least 6 characters.","auth.fullNameRequired":"Full name is required.","auth.phoneRequired":"Phone is required.","auth.passwordMismatch":"Passwords do not match.","home.all":"All","home.categories":"Categories","home.quickCategories":"Quick categories","home.lowPriceGuarantee":"Low price guarantee","home.seeAll":"All","home.todayDeals":"Today deals","home.discounts":"Discounts","home.newArrivals":"New arrivals","home.popular":"Popular products","home.recommended":"Recommended for you","home.similar":"Similar products","home.others":"Others also viewed","home.demoMode":"Demo mode","home.todayOnly":"Today only","home.startShopping":"Start shopping","home.showAll":"Show all products","home.loadMore":"Load more","home.noProducts":"No products found","home.loading":"Loading...","product.addToCart":"Add to cart","product.addToCartFull":"Add to cart","product.adding":"Adding...","product.sold":"{count} sold","product.stock":"Stock: {count}","product.save":"Save","product.saved":"Saved","product.viewDetails":"View details","product.reviews":"Reviews","product.description":"Description","product.detailImages":"Detail images","product.delivery":"Delivery across Uzbekistan","product.secure":"Secure checkout","product.original":"Original Korean products","product.notFound":"Product not found","product.backToShopping":"Back to shopping","cart.title":"Cart","cart.empty":"Your cart is empty","cart.subtotal":"Subtotal","cart.checkout":"Checkout","cart.added":"Added to cart","cart.itemRemoved":"Removed from cart","cart.quantityUpdated":"Quantity updated","cart.deliveryCourier":"Courier delivery","cart.deliveryEta":"Delivered in 3 days","cart.selectAll":"Select all ({selected}/{total})","cart.selectItem":"Select item","cart.deleteSelected":"Delete","cart.yourOrder":"Your order","cart.goodsCount":"{count} items","cart.discount":"Discount","cart.deliveryCost":"Delivery cost","cart.freeDelivery":"Free","cart.products":"Products","cart.freeToHome":"Free home delivery","cart.shipsToday":"Ships today","cart.emptyHint":"Add products you like and they will appear here.","cart.remove":"Remove","cart.unavailable":"Cart unavailable","orders.title":"Order history","orders.itemsCount":"{count} items","orders.totalLabel":"Total:","orders.addressLabel":"Address:","orders.products":"Products","orders.emptyHint":"Your purchases will appear here.","orders.unavailable":"Orders could not be loaded","orders.detailUnavailable":"Order details unavailable","orders.noItems":"No items found.","orders.deliveryInfo":"Delivery information","orders.openOnMap":"Open on map","orders.orderActions":"Order actions","orders.goodsLabel":"Products","orders.totalAmount":"Total amount","orders.feedback":"Feedback","orders.statusMessage.NEW":"Order received and will be confirmed soon.","orders.statusMessage.CONFIRMED":"Order confirmed and being prepared.","orders.statusMessage.PACKED":"Order packed and will ship soon.","orders.statusMessage.SHIPPED":"Order is on the way. Please stay in touch.","orders.statusMessage.DELIVERED":"Order delivered. Thank you for your purchase!","orders.statusMessage.CANCELED":"Order was canceled.","orders.statusMessage.default":"Order status is being updated.","orders.order":"Order","orders.viewDetails":"Details","orders.items":"{count} items","orders.details":"Order details","orders.history":"Status history","favorites.title":"Favorites","favorites.empty":"No favorites yet","favorites.emptyHint":"Your favorite products will be stored here. Add the ones you like.","favorites.browse":"Browse products","favorites.count":"{count} items","favorites.unavailable":"Favorites could not be loaded","reviews.none":"No reviews yet","notifications.title":"Notifications","notifications.alerts":"Alerts","notifications.none":"No notifications yet","common.tryAgain":"Try again","common.serverFailed":"Server connection failed","common.total":"Total","checkout.title":"Checkout","orders.refresh":"Refresh","reviews.my":"My reviews","reviews.write":"Write review","reviews.submit":"Submit review","hero.eyebrow":"Best daily offers","hero.title":"Korean beauty products","hero.subtitle":"Fast delivery across Uzbekistan — cosmetics, skincare, fragrance and accessories.","hero.viewProducts":"View products","hero.fastDelivery":"Fast delivery","hero.fastDeliverySub":"Across Uzbekistan","home.history":"History","home.recentlyViewed":"Recently viewed","profile.myProfile":"My Profile","profile.edit":"Edit profile","profile.save":"Save","profile.myOrders":"My orders","profile.myReviews":"My reviews","profile.tierWhite":"White","profile.ordersStat":"Orders","profile.reviewsStat":"Reviews","profile.couponsStat":"Coupons","profile.feedbackStat":"Feedback","profile.seeAll":"See all","profile.promotions":"Promotions & coupons","profile.help":"Help & support","profile.news":"News","profile.language":"Language / Til / Language","profile.privacy":"Privacy policy","profile.terms":"Terms of use","profile.licenses":"Open source licenses","profile.settings":"Settings","profile.menu":"Menu","profile.logout":"Log out","profile.loggedOut":"Logged out","profile.comingSoon":"This section is coming soon","profile.helpMessage":"Support: support@beautyskin.uz","profile.fullName":"Full name","profile.phone":"Phone","profile.imageUrl":"Profile image URL","profile.loadUserFailed":"Could not load profile","profile.loadOrdersFailed":"Could not load orders","profile.loadReviewsFailed":"Could not load reviews","profile.loadFailed":"Could not load profile data","support.title":"Support service","support.intro":"Have questions? We are here to help.","support.faqTitle":"Frequently asked questions","support.faq.delivery.q":"When will my order arrive?","support.faq.delivery.a":"Orders are usually delivered within 3–5 business days. Delivery time depends on your region and the chosen courier service. Unless there are natural disasters or other unforeseen circumstances, your order will arrive within the estimated time.","support.faq.cancel.q":"How do I cancel an order?","support.faq.cancel.a":"An order can only be canceled before it is shipped. Once the order has been handed over to the courier service, it can no longer be canceled. To cancel, you can reach out via the profile section or customer support.","support.faq.return.q":"Can I return a product?","support.faq.return.a":"A product can only be returned if it is unused, the packaging is intact, and the item is kept in full condition. Shipping costs for returning the product via cargo are covered by the customer.","support.originalTitle":"100% original and direct supply from Korea","support.originalText":"Products in our app are imported directly from official manufacturers and certified distributors in South Korea. Selling counterfeit goods is strictly prohibited.","support.whyTitle":"Why us?","support.why1":"Direct import from Korea","support.why2":"No counterfeits","support.why3":"Factory packaging and original seals","support.why4":"Every order is checked before shipping","support.why5":"Chosen by thousands of happy customers","support.guarantee":"If the product is not original — we refund 100% of the cost.","support.contactTitle":"Contact us","support.phoneLabel":"Phone:","support.hoursLabel":"Working hours:","support.hoursValue":"09:00 – 18:00 (Mon–Fri)","support.contactNote":"We value your messages and will try to respond as quickly as possible.","privacy.title":"Privacy Policy","privacy.updated":"Last updated: 2025","privacy.intro":"We respect and protect users' personal data. This Privacy Policy explains how your data is collected, used, and stored.","privacy.s1title":"1. What data is collected","privacy.s1a":"Name and profile details","privacy.s1b":"Phone number or email","privacy.s1c":"Order and cart data","privacy.s1d":"Technical device information","privacy.s2title":"2. Use of data","privacy.s2intro":"The collected data is used for the following purposes:","privacy.s2a":"Fulfilling orders","privacy.s2b":"Account management","privacy.s2c":"Improving service quality","privacy.s2d":"Ensuring security","privacy.s3title":"3. Data protection","privacy.s3text":"We apply modern security measures to protect your personal data from unauthorized access, alteration, or distribution.","privacy.s4title":"4. Third-party services","privacy.s4text":"Our app may use third-party services for payment, delivery, and authentication. These services have their own privacy policies.","privacy.s5title":"5. Contact","privacy.s5text":"If you have questions about the Privacy Policy, contact us:","terms.title":"Terms of Service","terms.updated":"Last updated: 2025","terms.intro":"By using this mobile application, you agree to the terms of this Terms of Service. If you do not agree with the terms, please do not use the application.","terms.s1title":"1. General provisions","terms.s1text":"This application is intended for online purchase of cosmetics and other products. All materials, logos, and content are protected by copyright.","terms.s2title":"2. Account registration","terms.s2text":"To place orders, the user must create an account and provide accurate information. The user is responsible for the security of their account.","terms.s3title":"3. Orders and payment","terms.s3text":"Orders are placed through the application. Product prices may change without prior notice. Payment is made according to the selected method.","terms.s4title":"4. Delivery","terms.s4text":"Delivery times depend on the region and the selected method. We are not responsible for delays caused by third-party delivery services.","terms.s5title":"5. Returns and cancellation","terms.s5text":"The return and order cancellation policy is described in the relevant section and on the help and support page.","terms.s6title":"6. Limitation of liability","terms.s6text":"We are not liable for indirect damages related to the use of the application.","terms.s7title":"7. Changes to terms","terms.s7text":"We reserve the right to change this agreement at any time. The current version is always available in the application.","licenses.title":"Open Source Libraries & Technologies","licenses.intro":"This application is built using the following open-source technologies","licenses.frontendTitle":"Android Frontend","licenses.fe1":"Android Jetpack – a set of modern Android libraries used for lifecycle management, navigation, ViewBinding, and architectural components to ensure a stable user interface.","licenses.fe2":"Retrofit – a type-safe HTTP client for Android used for efficient interaction with the backend REST API.","licenses.fe3":"Glide – an image loading and caching library optimized for smooth scrolling and efficient memory usage.","licenses.fe4":"Firebase Authentication – provides secure user authentication via Google and phone number verification (OTP).","licenses.fe5":"Facebook Shimmer – displays animated loading placeholders to improve the user experience.","licenses.backendTitle":"Backend & Server Technologies","licenses.be1":"Spring Boot – a Java-based framework used to build scalable RESTful APIs.","licenses.be2":"Spring Security + JWT – implements authentication using JSON Web Tokens to protect user sessions and API endpoints.","licenses.be3":"Spring Data JPA – simplifies database access using ORM and the repository pattern.","licenses.be4":"MySQL – a reliable relational database management system for storing accounts, orders, and products.","licenses.be5":"Eskiz SMS API – used for phone number verification and delivery of one-time passwords (OTP).","licenses.infraTitle":"Infrastructure & Deployment","licenses.inf1":"Docker – containerization technology for packaging the application with all dependencies for stable deployment.","licenses.inf2":"Railway Cloud – a cloud platform for deploying, scaling, and monitoring backend services.","licenses.securityTitle":"Security & Data Protection","licenses.sec1":"HTTPS – all network communication is encrypted using HTTPS to protect user data.","licenses.sec2":"Secure password handling – user credentials are never stored in plain text.","licenses.sec3":"Token-based authorization – all protected requests require valid JWT tokens.","licenses.footer":"We respect the open-source community and strictly comply with all license requirements and security best practices.","status.PENDING":"Pending","api.title":"API settings","api.save":"Save","header.currency":"Currency","header.theme":"Theme","product.quickView":"Quick view","product.compare":"Compare","product.compareSoon":"Compare coming soon","product.lowStock":"Low stock","product.freeShipping":"Free shipping","search.results":"Results","search.noResults":"No results found","search.recent":"Recent searches","search.trending":"Trending","search.clear":"Clear","search.aiHint":"AI search — find products faster","search.voice":"Voice search","search.image":"Image search","search.imagePlaceholder":"Image selected — search coming soon","search.popularSearches":"Popular searches","trust.secure":"Secure payment","trust.authentic":"100% authentic","trust.delivery":"Fast delivery","trust.verified":"Verified sellers","filter.title":"Filters","filter.clearAll":"Clear all","filter.brand":"Brand","filter.price":"Price","filter.discount":"Discount","filter.color":"Color","filter.size":"Size","filter.rating":"Rating","filter.availability":"Availability","filter.fastDelivery":"Fast delivery","filter.origin":"Country of origin","filter.seller":"Seller","filter.onSaleOnly":"On sale only","filter.inStock":"In stock","filter.apply":"Apply filters","filter.noOptions":"No options","sort.title":"Sort","sort.popular":"Popular","sort.priceAsc":"Price: Low to High","sort.priceDesc":"Price: High to Low","sort.rating":"Top rated","sort.newest":"Newest","sort.discount":"Best discount","compare.title":"Compare","compare.empty":"Compare list is empty","compare.added":"Added to compare","compare.removed":"Removed from compare","compare.full":"Maximum {max} products","compare.viewAll":"View comparison","compare.clearAll":"Clear all","compare.price":"Price","compare.brand":"Brand","compare.rating":"Rating","compare.stock":"Stock","compare.discount":"Discount","product.authentic":"Authentic product","product.officialStore":"Official store","product.fullscreen":"Fullscreen","product.video360Placeholder":"Video & 360° coming soon","product.listPrice":"List price","product.discount":"Discount","product.installmentPlaceholder":"Installments coming soon","product.estimatedDelivery":"Estimated delivery","product.frequentlyBought":"Frequently bought together","cart.saveForLater":"Save for later","cart.couponPlaceholder":"Coupon code","cart.applyCoupon":"Apply","cart.couponApplied":"Coupon applied","cart.couponInvalid":"Invalid coupon","cart.freeShippingUnlocked":"Free shipping unlocked!","cart.freeShippingRemaining":"Add {amount} more for free shipping","cart.restored":"Item restored","cart.moveToCart":"Move to cart","checkout.stepShipping":"Shipping","checkout.stepAddress":"Address","checkout.stepPayment":"Payment","checkout.stepReview":"Review","checkout.back":"Back","checkout.continue":"Continue","checkout.placing":"Placing order...","checkout.paymentPlaceholder":"Secure payment (COD / card coming soon)","checkout.receiverRequired":"Please select a receiver","checkout.addressRequired":"Please select an address","checkout.deliveryTitle":"Delivery","checkout.deliveryEta":"Order will be delivered within 3–5 business days","checkout.addressNotSelected":"Address not selected","checkout.selectAddress":"Select address","checkout.receiverNotSelected":"Recipient not selected","checkout.paymentMethod":"Payment method","checkout.paymentCod":"Payment on receipt","checkout.paymentCodHint":"Payment is made only in cash or by bank card transfer","checkout.deliveryInfo":"The order will be delivered by courier to your address. Please stay in touch during delivery.","checkout.couponTitle":"Discount coupon","checkout.applyCoupon":"Apply coupon","checkout.yourOrder":"Your order","checkout.deliveryFee":"Delivery","checkout.totalToPay":"Total to pay","checkout.confirm":"Confirm","checkout.legalNotice":"By confirming the order, you agree to the Terms of Use and Privacy Policy.","checkout.deliveryOn":"Delivery {dates}","checkout.itemsCount":"{count} items","checkout.orderSummary":"Order summary","checkout.placeOrder":"Place order","checkout.orderCreated":"Order created","checkout.continueShopping":"Continue shopping","checkout.viewOrders":"View orders","checkout.receiver":"Recipient","checkout.confirmTitle":"Order confirmation","checkout.confirmQuestion":"Do you want to send the order?","checkout.confirmName":"Name: {name}","checkout.confirmAddress":"Address: {address}","checkout.confirmDisclaimer":"After confirmation, the order can only be changed through customer support.","checkout.cancel":"Cancel","checkout.successTitle":"Order placed successfully!","checkout.successSubtitle":"Order successfully accepted","checkout.orderFailed":"Order could not be sent. Please try again.","checkout.noItems":"No selected items in cart.","checkout.invalidItems":"Cart item identifiers are invalid.","reviews.verified":"Verified purchase","reviews.helpful":"Helpful","reviews.search":"Search reviews","reviews.sortNewest":"Newest","reviews.sortRatingHigh":"Highest rating","reviews.sortRatingLow":"Lowest rating","reviews.sortHelpful":"Most helpful","reviews.allRatings":"All ratings","brand.official":"Official brand","brand.story":"Korean beauty brand","brand.popular":"Popular products","home.trendingNow":"Trending now","home.recommendedForYou":"Recommended for you","home.continueShopping":"Continue shopping","home.becauseYouViewed":"Because you viewed"},ei={..._t,"header.location":"📍 Ташкент","header.pickupPoints":"Пункты выдачи","header.sell":"Стать продавцом","header.support":"Поддержка","header.orders":"Заказы","header.language":"Язык","header.catalog":"Каталог","header.searchPlaceholder":"Искать товары и категории","auth.login":"Войти","auth.register":"Регистрация","auth.continueWithGoogle":"Войти через Google","auth.or":"или","auth.email":"Email","auth.password":"Пароль","auth.confirmPassword":"Подтвердите пароль","auth.fullName":"Полное имя","auth.phone":"Телефон","auth.logout":"Выйти","auth.loginRequired":"Войдите, чтобы продолжить","auth.emailRequired":"Email обязателен.","auth.passwordMin":"Пароль должен быть не менее 6 символов.","auth.fullNameRequired":"Полное имя обязательно.","auth.phoneRequired":"Телефон обязателен.","auth.passwordMismatch":"Пароли не совпадают.","home.all":"Все","home.categories":"Категории","home.quickCategories":"Быстрые категории","home.lowPriceGuarantee":"Гарантия низких цен","home.seeAll":"Все","home.todayDeals":"Предложения дня","home.discounts":"Скидки","home.newArrivals":"Новинки","home.popular":"Популярные товары","home.recommended":"Рекомендуем вам","home.similar":"Похожие товары","home.others":"Также смотрели","home.startShopping":"Начать покупки","home.loadMore":"Загрузить еще","product.addToCart":"В корзину","product.addToCartFull":"В корзину","product.sold":"Продано: {count}","product.save":"Сохранить","product.saved":"Сохранено","product.description":"Описание","product.detailImages":"Детальные изображения","product.details":"Детали","product.reviews":"Отзывы","product.delivery":"Доставка по Узбекистану","product.secure":"Безопасная оплата","product.original":"Оригинальная корейская косметика","cart.title":"Корзина","cart.empty":"Корзина пуста","cart.checkout":"Оформить","cart.subtotal":"Итого","cart.remove":"Удалить","cart.deliveryCourier":"Доставка курьером","cart.deliveryEta":"Доставим за 3 дня","cart.selectAll":"Выбрать все ({selected}/{total})","cart.selectItem":"Выбрать товар","cart.deleteSelected":"Удалить","cart.yourOrder":"Ваш заказ","cart.goodsCount":"{count} товаров","cart.discount":"Скидка","cart.deliveryCost":"Стоимость доставки","cart.freeDelivery":"Бесплатно","cart.products":"Товар","cart.freeToHome":"Бесплатно до дома","cart.shipsToday":"Отправка сегодня","cart.emptyHint":"Добавьте понравившиеся товары — они появятся здесь.","cart.freeShippingUnlocked":"Бесплатная доставка!","cart.freeShippingRemaining":"Добавьте ещё {amount} для бесплатной доставки","cart.couponPlaceholder":"Промокод","cart.applyCoupon":"Применить","cart.savedForLater":"Сохранённые","cart.moveToCart":"В корзину","orders.title":"История заказов","orders.order":"Заказ","orders.details":"Детали заказа","orders.history":"История статуса","orders.none":"Заказов пока нет","orders.viewDetails":"Подробнее","orders.items":"{count} товаров","orders.itemsCount":"{count} товаров","orders.totalLabel":"Итого:","orders.addressLabel":"Адрес:","orders.products":"Товары","orders.emptyHint":"Здесь появятся ваши покупки.","orders.unavailable":"Не удалось загрузить заказы","orders.detailUnavailable":"Не удалось загрузить детали заказа","orders.noItems":"Товары не найдены.","orders.deliveryInfo":"Информация о доставке","orders.openOnMap":"Открыть на карте","orders.orderActions":"Действия с заказом","orders.goodsLabel":"Товары","orders.totalAmount":"Итого сумма","orders.feedback":"Обратная связь","orders.statusMessage.NEW":"Заказ принят и скоро будет подтвержден.","orders.statusMessage.CONFIRMED":"Заказ подтвержден и готовится.","orders.statusMessage.PACKED":"Заказ упакован и скоро будет отправлен.","orders.statusMessage.SHIPPED":"Заказ в пути. Пожалуйста, будьте на связи.","orders.statusMessage.DELIVERED":"Заказ доставлен. Спасибо за покупку!","orders.statusMessage.CANCELED":"Заказ отменен.","orders.statusMessage.default":"Статус заказа обновляется.","favorites.title":"Избранное","favorites.empty":"В избранном пока пусто","favorites.emptyHint":"Ваши любимые товары будут храниться здесь. Добавляйте то, что вам нравится.","favorites.browse":"К товарам","favorites.count":"{count} товаров","favorites.unavailable":"Не удалось загрузить избранное","reviews.none":"Пока нет отзывов","notifications.title":"Уведомления","profile.myProfile":"Мой профиль","profile.edit":"Редактировать профиль","profile.save":"Сохранить","profile.myOrders":"Мои заказы","profile.myReviews":"Мои отзывы","profile.tierWhite":"White","profile.ordersStat":"Заказы","profile.reviewsStat":"Отзывы","profile.couponsStat":"Купон","profile.feedbackStat":"Обратная связь","profile.seeAll":"Посмотреть все","profile.promotions":"Акции и купоны","profile.help":"Помощь и поддержка","profile.news":"Новости","profile.language":"Язык / Til / Language","profile.privacy":"Политика конфиденциальности","profile.terms":"Условия использования","profile.licenses":"Лицензии открытого ПО","profile.settings":"Настройки","profile.menu":"Меню","profile.logout":"Выйти","profile.loggedOut":"Вы вышли из аккаунта","profile.comingSoon":"Раздел скоро появится","profile.helpMessage":"Поддержка: support@beautyskin.uz","profile.fullName":"Полное имя","profile.phone":"Телефон","profile.imageUrl":"URL фото профиля","profile.loadUserFailed":"Не удалось загрузить профиль","profile.loadOrdersFailed":"Не удалось загрузить заказы","profile.loadReviewsFailed":"Не удалось загрузить отзывы","profile.loadFailed":"Не удалось загрузить данные профиля","support.title":"Служба поддержки","support.intro":"У вас есть вопросы? Мы вам поможем.","support.faqTitle":"Часто задаваемые вопросы","support.faq.delivery.q":"Когда придет мой заказ?","support.faq.delivery.a":"Заказы обычно доставляются в течение 3–5 рабочих дней. Срок доставки зависит от региона и выбранной курьерской службы. При отсутствии стихийных бедствий или других непредвиденных обстоятельств ваш заказ прибудет в установленный срок.","support.faq.cancel.q":"Как отменить заказ?","support.faq.cancel.a":"Заказ можно отменить только до момента отправки. После передачи заказа курьерской службе его отмена невозможна. Для отмены вы можете обратиться в раздел профиля или в службу поддержки.","support.faq.return.q":"Можно ли вернуть товар?","support.faq.return.a":"Возврат товара возможен только в том случае, если он не был в использовании, упаковка не повреждена и товар сохранён в полном виде. Расходы на отправку товара через карго при возврате возлагаются на клиента.","support.originalTitle":"100% оригинал и прямые поставки из Кореи","support.originalText":"Товары в нашем приложении импортируются напрямую от официальных производителей и сертифицированных дистрибьюторов в Южной Корее. Продажа подделок строго запрещена.","support.whyTitle":"Почему мы?","support.why1":"Прямой импорт из Кореи","support.why2":"Никаких подделок","support.why3":"Заводская упаковка и оригинальные пломбы","support.why4":"Каждый заказ проверяется перед отправкой","support.why5":"Выбор тысяч довольных клиентов","support.guarantee":"Если товар не оригинальный — мы вернём 100% стоимости.","support.contactTitle":"Свяжитесь с нами","support.phoneLabel":"Телефон:","support.hoursLabel":"Время работы:","support.hoursValue":"09:00 – 18:00 (Пн–Пт)","support.contactNote":"Мы ценим ваши обращения и постараемся ответить как можно быстрее.","privacy.title":"Политика конфиденциальности","privacy.updated":"Последнее обновление: 2025 г.","privacy.intro":"Мы уважаем и защищаем личные данные пользователей. Данная Политика конфиденциальности объясняет, как ваши данные собираются, используются и хранятся.","privacy.s1title":"1. Какие данные собираются","privacy.s1a":"Имя и данные профиля","privacy.s1b":"Номер телефона или email","privacy.s1c":"Данные о заказах и корзине","privacy.s1d":"Техническая информация об устройстве","privacy.s2title":"2. Использование данных","privacy.s2intro":"Собранные данные используются для следующих целей:","privacy.s2a":"Выполнение заказов","privacy.s2b":"Управление аккаунтом","privacy.s2c":"Улучшение качества сервиса","privacy.s2d":"Обеспечение безопасности","privacy.s3title":"3. Защита данных","privacy.s3text":"Мы применяем современные меры безопасности для защиты ваших личных данных от несанкционированного доступа, изменения или распространения.","privacy.s4title":"4. Сторонние сервисы","privacy.s4text":"Наше приложение может использовать сторонние сервисы для оплаты, доставки и аутентификации. У этих сервисов есть своя политика конфиденциальности.","privacy.s5title":"5. Контакты","privacy.s5text":"Если у вас есть вопросы по Политике конфиденциальности, свяжитесь с нами:","terms.title":"Пользовательское соглашение","terms.updated":"Последнее обновление: 2025 г.","terms.intro":"Используя данное мобильное приложение, вы соглашаетесь с условиями настоящего Пользовательского соглашения. Если вы не согласны с условиями, пожалуйста, не используйте приложение.","terms.s1title":"1. Общие положения","terms.s1text":"Данное приложение предназначено для онлайн-покупки косметических и других товаров. Все материалы, логотипы и контент защищены авторским правом.","terms.s2title":"2. Регистрация аккаунта","terms.s2text":"Для оформления заказов пользователь должен создать аккаунт и предоставить достоверные данные. Пользователь несет ответственность за безопасность своего аккаунта.","terms.s3title":"3. Заказы и оплата","terms.s3text":"Заказы оформляются через приложение. Цены на товары могут изменяться без предварительного уведомления. Оплата производится согласно выбранному способу.","terms.s4title":"4. Доставка","terms.s4text":"Сроки доставки зависят от региона и выбранного метода. Мы не несем ответственности за задержки, вызванные сторонними доставочными сервисами.","terms.s5title":"5. Возврат и отмена","terms.s5text":"Политика возврата и отмены заказов описана в соответствующем разделе и на странице помощи и поддержки.","terms.s6title":"6. Ограничение ответственности","terms.s6text":"Мы не несем ответственности за косвенный ущерб, связанный с использованием приложения.","terms.s7title":"7. Изменения условий","terms.s7text":"Мы оставляем за собой право изменять данное соглашение в любое время. Актуальная версия всегда доступна в приложении.","licenses.title":"Open Source Libraries & Technologies","licenses.intro":"This application is built using the following open-source technologies","licenses.frontendTitle":"Android Frontend","licenses.fe1":"Android Jetpack – набор современных библиотек Android, используемых для управления жизненным циклом, навигации, ViewBinding и архитектурных компонентов для обеспечения стабильного пользовательского интерфейса.","licenses.fe2":"Retrofit – типобезопасный HTTP-клиент для Android, используемый для эффективного взаимодействия с REST API бэкенда.","licenses.fe3":"Glide – библиотека для загрузки и кэширования изображений, оптимизированная для плавной прокрутки и эффективного использования памяти.","licenses.fe4":"Firebase Authentication – обеспечивает безопасную аутентификацию пользователей через Google и проверку номера телефона (OTP).","licenses.fe5":"Facebook Shimmer – отображает анимированные заглушки загрузки для улучшения пользовательского опыта.","licenses.backendTitle":"Backend & Server Technologies","licenses.be1":"Spring Boot – фреймворк на базе Java, используемый для создания масштабируемых RESTful API.","licenses.be2":"Spring Security + JWT – реализует аутентификацию с использованием JSON Web Tokens для защиты пользовательских сессий и эндпоинтов API.","licenses.be3":"Spring Data JPA – упрощает доступ к базе данных с использованием ORM и паттерна репозитория.","licenses.be4":"MySQL – надёжная система управления реляционными базами данных для хранения учётных записей, заказов и товаров.","licenses.be5":"Eskiz SMS API – используется для верификации номера телефона и доставки одноразовых паролей (OTP).","licenses.infraTitle":"Infrastructure & Deployment","licenses.inf1":"Docker – технология контейнеризации для упаковки приложения со всеми зависимостями для стабильного развёртывания.","licenses.inf2":"Railway Cloud – облачная платформа для развёртывания, масштабирования и мониторинга бэкенд-сервисов.","licenses.securityTitle":"Security & Data Protection","licenses.sec1":"HTTPS – вся сетевая коммуникация зашифрована с использованием HTTPS для защиты данных пользователей.","licenses.sec2":"Безопасная обработка паролей – учётные данные пользователей никогда не хранятся в открытом виде.","licenses.sec3":"Авторизация на основе токенов – все защищённые запросы требуют валидных JWT токенов.","licenses.footer":"Мы уважаем сообщество open-source и строго соблюдаем все лицензионные требования и передовые практики безопасности.","status.NEW":"Новый","status.PENDING":"Ожидает","status.CONFIRMED":"Подтвержден","status.PACKED":"Упакован","status.SHIPPED":"Отправлен","status.DELIVERED":"Доставлен","status.CANCELED":"Отменен","category.SKINCARE":"Уход за кожей","category.MAKEUP":"Макияж","category.COLLAGEN":"Коллаген","category.HAIR_CARE":"Уход за волосами","category.FRAGRANCE":"Парфюм","category.TOP":"Верх","category.OUTER":"Верхняя одежда","category.PANTS":"Брюки","category.SHOES":"Обувь","category.BAG":"Сумки","category.ACCESSORY":"Аксессуары","home.todayOnly":"Только сегодня","checkout.title":"Оформление заказа","checkout.deliveryTitle":"Доставка","checkout.deliveryEta":"Заказ будет доставлен в течение 3–5 рабочих дней","checkout.addressNotSelected":"Адрес не выбран","checkout.selectAddress":"Выбрать адрес","checkout.receiverNotSelected":"Получатель не выбран","checkout.receiver":"Получатель","checkout.paymentMethod":"Способ оплаты","checkout.paymentCod":"Оплата при получении","checkout.paymentCodHint":"Оплата производится только наличными или переводом на банковскую карту","checkout.deliveryInfo":"Заказ будет доставлен курьером по адресу. Просим вас быть на связи во время доставки.","checkout.couponTitle":"Купон на скидку","checkout.applyCoupon":"Применить купон","checkout.yourOrder":"Ваш заказ","checkout.deliveryFee":"Доставка","checkout.totalToPay":"Итого к оплате","checkout.confirm":"Подтвердить","checkout.legalNotice":"Подтверждая заказ, вы соглашаетесь с Условиями использования и Политикой конфиденциальности.","checkout.deliveryOn":"Доставка {dates}","checkout.itemsCount":"{count} товаров","checkout.addressRequired":"Выберите адрес","checkout.receiverRequired":"Выберите получателя","checkout.back":"Назад","checkout.placing":"Оформление...","checkout.orderCreated":"Заказ создан","checkout.continueShopping":"Продолжить покупки","checkout.viewOrders":"Мои заказы","checkout.confirmTitle":"Подтверждение заказа","checkout.confirmQuestion":"Вы хотите отправить заказ?","checkout.confirmName":"Имя: {name}","checkout.confirmAddress":"Адреса: {address}","checkout.confirmDisclaimer":"После подтверждения изменить заказ можно только через службу поддержки.","checkout.cancel":"Отмена","checkout.successTitle":"Заказ успешно оформлен!","checkout.successSubtitle":"Заказ успешно принят","checkout.orderFailed":"Не удалось отправить заказ. Попробуйте снова.","checkout.noItems":"В корзине нет выбранных товаров.","checkout.invalidItems":"Некорректные идентификаторы товаров в корзине.","orders.refresh":"Обновить","reviews.my":"Мои отзывы","reviews.write":"Написать отзыв","reviews.submit":"Отправить отзыв","hero.eyebrow":"Лучшие предложения дня","hero.title":"Корейская косметика","hero.subtitle":"Быстрая доставка по Узбекистану — косметика, уход, парфюм и аксессуары.","hero.viewProducts":"Смотреть товары","hero.fastDelivery":"Быстрая доставка","hero.fastDeliverySub":"По всему Узбекистану","home.history":"История","home.recentlyViewed":"Недавно просмотренные","api.title":"Настройки API","api.save":"Сохранить"},ti={..._t,"header.location":"📍 타슈켄트","header.pickupPoints":"픽업 지점","header.sell":"판매자 되기","header.support":"고객 지원","header.orders":"주문","header.language":"언어","header.catalog":"카탈로그","header.searchPlaceholder":"상품 및 카테고리 검색","auth.login":"로그인","auth.register":"회원가입","auth.continueWithGoogle":"Google로 로그인","auth.or":"또는","auth.email":"이메일","auth.password":"비밀번호","auth.confirmPassword":"비밀번호 확인","auth.fullName":"이름","auth.phone":"전화번호","auth.logout":"로그아웃","auth.loginRequired":"계속하려면 로그인하세요","auth.emailRequired":"이메일은 필수입니다.","auth.passwordMin":"비밀번호는 6자 이상이어야 합니다.","auth.fullNameRequired":"이름은 필수입니다.","auth.phoneRequired":"전화번호는 필수입니다.","auth.passwordMismatch":"비밀번호가 일치하지 않습니다.","home.all":"전체","home.categories":"카테고리","home.quickCategories":"빠른 카테고리","home.lowPriceGuarantee":"최저가 보장","home.seeAll":"전체","home.quickCategories":"빠른 카테고리","home.todayDeals":"오늘의 특가","home.discounts":"할인","home.newArrivals":"신상품","home.popular":"인기 상품","home.recommended":"추천 상품","home.similar":"비슷한 상품","home.others":"함께 본 상품","home.startShopping":"쇼핑 시작","home.loadMore":"더 보기","product.addToCart":"장바구니","product.addToCartFull":"장바구니 담기","product.sold":"{count}개 판매","product.save":"저장","product.saved":"저장됨","product.description":"설명","product.detailImages":"상세 이미지","product.details":"상세 정보","product.reviews":"리뷰","product.delivery":"우즈베키스탄 전역 배송","product.secure":"안전한 결제","product.original":"정품 한국 제품","cart.title":"장바구니","cart.empty":"장바구니가 비어 있습니다","cart.checkout":"결제","cart.deliveryCourier":"택배 배송","cart.deliveryEta":"3일 내 배송","cart.selectAll":"전체 선택 ({selected}/{total})","cart.selectItem":"상품 선택","cart.deleteSelected":"삭제","cart.yourOrder":"주문 내역","cart.goodsCount":"상품 {count}개","cart.discount":"할인","cart.deliveryCost":"배송비","cart.freeDelivery":"무료","cart.products":"상품","cart.freeToHome":"무료 홈 배송","cart.shipsToday":"오늘 발송","cart.emptyHint":"마음에 드는 상품을 추가하면 여기에 표시됩니다.","orders.title":"주문 내역","orders.order":"주문","orders.details":"주문 상세","orders.history":"상태 기록","orders.none":"주문이 없습니다","orders.viewDetails":"자세히","orders.items":"상품 {count}개","orders.itemsCount":"상품 {count}개","orders.totalLabel":"합계:","orders.addressLabel":"주소:","orders.products":"상품","orders.emptyHint":"구매한 주문이 여기에 표시됩니다.","orders.unavailable":"주문을 불러올 수 없습니다","orders.detailUnavailable":"주문 상세를 불러올 수 없습니다","orders.noItems":"상품을 찾을 수 없습니다.","orders.deliveryInfo":"배송 정보","orders.openOnMap":"지도에서 열기","orders.orderActions":"주문 작업","orders.goodsLabel":"상품","orders.totalAmount":"총 금액","orders.feedback":"피드백","orders.statusMessage.NEW":"주문이 접수되었으며 곧 확인됩니다.","orders.statusMessage.CONFIRMED":"주문이 확인되어 준비 중입니다.","orders.statusMessage.PACKED":"주문이 포장되어 곧 발송됩니다.","orders.statusMessage.SHIPPED":"주문이 배송 중입니다. 연락 가능하도록 해 주세요.","orders.statusMessage.DELIVERED":"주문이 배송되었습니다. 구매해 주셔서 감사합니다!","orders.statusMessage.CANCELED":"주문이 취소되었습니다.","orders.statusMessage.default":"주문 상태가 업데이트되고 있습니다.","favorites.title":"찜","favorites.empty":"찜한 상품이 없습니다","favorites.emptyHint":"좋아하는 상품이 여기에 저장됩니다. 마음에 드는 상품을 추가하세요.","favorites.browse":"상품 보기","favorites.count":"상품 {count}개","favorites.unavailable":"찜 목록을 불러올 수 없습니다","reviews.none":"아직 리뷰가 없습니다","notifications.title":"알림","status.NEW":"신규","status.CONFIRMED":"확인됨","status.PACKED":"포장됨","status.SHIPPED":"배송 중","status.DELIVERED":"배송 완료","status.CANCELED":"취소됨","category.SKINCARE":"스킨케어","category.MAKEUP":"메이크업","category.COLLAGEN":"콜라겐","category.HAIR_CARE":"헤어 케어","category.FRAGRANCE":"향수","category.TOP":"상의","category.OUTER":"아우터","category.PANTS":"바지","category.SHOES":"신발","category.BAG":"가방","category.ACCESSORY":"액세서리","home.todayOnly":"오늘 한정","checkout.title":"주문하기","checkout.deliveryTitle":"배송","checkout.deliveryEta":"주문은 3–5 영업일 내에 배송됩니다","checkout.addressNotSelected":"주소가 선택되지 않음","checkout.selectAddress":"주소 선택","checkout.receiverNotSelected":"수령인이 선택되지 않음","checkout.receiver":"수령인","checkout.paymentMethod":"결제 방법","checkout.paymentCod":"착불 결제","checkout.paymentCodHint":"현금 또는 계좌 이체로만 결제할 수 있습니다","checkout.deliveryInfo":"주문은 주소로 택배 배송됩니다. 배송 중 연락 가능하도록 해 주세요.","checkout.couponTitle":"할인 쿠폰","checkout.applyCoupon":"쿠폰 적용","checkout.yourOrder":"주문 내역","checkout.deliveryFee":"배송비","checkout.totalToPay":"결제 금액","checkout.confirm":"확인","checkout.legalNotice":"주문을 확인하면 이용 약관 및 개인정보 처리방침에 동의하게 됩니다.","checkout.deliveryOn":"배송 {dates}","checkout.itemsCount":"상품 {count}개","checkout.addressRequired":"주소를 선택해 주세요","checkout.receiverRequired":"수령인을 선택해 주세요","checkout.back":"뒤로","checkout.placing":"주문 중...","checkout.orderCreated":"주문이 완료되었습니다","checkout.continueShopping":"쇼핑 계속하기","checkout.viewOrders":"주문 내역 보기","checkout.confirmTitle":"주문 확인","checkout.confirmQuestion":"주문을 보내시겠습니까?","checkout.confirmName":"이름: {name}","checkout.confirmAddress":"주소: {address}","checkout.confirmDisclaimer":"확인 후에는 고객 지원을 통해서만 주문을 변경할 수 있습니다.","checkout.cancel":"취소","checkout.successTitle":"주문이 완료되었습니다!","checkout.successSubtitle":"주문이 성공적으로 접수되었습니다","checkout.orderFailed":"주문을 보낼 수 없습니다. 다시 시도해 주세요.","checkout.noItems":"장바구니에 선택된 상품이 없습니다.","checkout.invalidItems":"장바구니 상품 ID가 올바르지 않습니다.","orders.refresh":"새로고침","reviews.my":"내 리뷰","reviews.write":"리뷰 작성","reviews.submit":"리뷰 제출","hero.eyebrow":"오늘의 베스트 특가","hero.title":"한국 뷰티 제품","hero.subtitle":"우즈베키스탄 전역 빠른 배송 — 화장품, 스킨케어, 향수, 액세서리.","hero.viewProducts":"상품 보기","hero.fastDelivery":"빠른 배송","hero.fastDeliverySub":"우즈베키스탄 전역","home.history":"기록","home.recentlyViewed":"최근 본 상품","profile.myProfile":"내 프로필","profile.edit":"프로필 수정","profile.save":"저장","profile.myOrders":"내 주문","profile.myReviews":"내 리뷰","profile.tierWhite":"White","profile.ordersStat":"주문","profile.reviewsStat":"리뷰","profile.couponsStat":"쿠폰","profile.feedbackStat":"피드백","profile.seeAll":"전체 보기","profile.promotions":"프로모션 및 쿠폰","profile.help":"도움말 및 지원","profile.news":"뉴스","profile.language":"언어 / Til / Language","profile.privacy":"개인정보 처리방침","profile.terms":"이용 약관","profile.licenses":"오픈소스 라이선스","profile.settings":"설정","profile.menu":"메뉴","profile.logout":"로그아웃","profile.loggedOut":"로그아웃되었습니다","profile.comingSoon":"곧 제공될 예정입니다","profile.helpMessage":"지원: support@beautyskin.uz","profile.fullName":"이름","profile.phone":"전화번호","profile.imageUrl":"프로필 이미지 URL","profile.loadUserFailed":"프로필을 불러오지 못했습니다","profile.loadOrdersFailed":"주문을 불러오지 못했습니다","profile.loadReviewsFailed":"리뷰를 불러오지 못했습니다","profile.loadFailed":"프로필 데이터를 불러오지 못했습니다","support.title":"고객 지원 센터","support.intro":"궁금한 점이 있으신가요? 저희가 도와드리겠습니다.","support.faqTitle":"자주 묻는 질문","support.faq.delivery.q":"주문한 상품은 언제 도착하나요?","support.faq.delivery.a":"주문은 보통 영업일 기준 3~5일 이내에 배송됩니다. 배송 기간은 지역과 선택한 택배 서비스에 따라 달라집니다. 자연재해나 기타 예기치 못한 상황이 없는 한 주문하신 상품은 예정된 기간 내에 도착합니다.","support.faq.cancel.q":"주문을 어떻게 취소하나요?","support.faq.cancel.a":"주문은 발송 전에만 취소할 수 있습니다. 주문이 택배 서비스로 전달된 후에는 취소가 불가능합니다. 취소하려면 프로필 섹션이나 고객 지원을 통해 문의하시면 됩니다.","support.faq.return.q":"상품을 반품할 수 있나요?","support.faq.return.a":"상품은 사용하지 않았고 포장이 손상되지 않았으며 온전한 상태로 보관된 경우에만 반품이 가능합니다. 반품 시 택배를 통한 상품 발송 비용은 고객이 부담합니다.","support.originalTitle":"100% 정품 및 한국 직배송","support.originalText":"저희 앱의 상품은 대한민국의 공식 제조사와 인증된 유통업체로부터 직접 수입됩니다. 위조품 판매는 엄격히 금지되어 있습니다.","support.whyTitle":"왜 저희인가요?","support.why1":"한국 직수입","support.why2":"위조품 없음","support.why3":"공장 포장 및 정품 봉인","support.why4":"모든 주문은 발송 전 검수","support.why5":"수천 명의 만족한 고객이 선택","support.guarantee":"상품이 정품이 아닐 경우 — 전액 100% 환불해 드립니다.","support.contactTitle":"문의하기","support.phoneLabel":"전화:","support.hoursLabel":"운영 시간:","support.hoursValue":"09:00 – 18:00 (월–금)","support.contactNote":"여러분의 문의를 소중히 여기며 최대한 빠르게 답변드리겠습니다.","privacy.title":"개인정보 처리방침","privacy.updated":"최종 업데이트: 2025년","privacy.intro":"저희는 사용자의 개인정보를 존중하고 보호합니다. 본 개인정보 처리방침은 귀하의 데이터가 어떻게 수집, 사용, 저장되는지 설명합니다.","privacy.s1title":"1. 수집하는 데이터","privacy.s1a":"이름 및 프로필 정보","privacy.s1b":"전화번호 또는 이메일","privacy.s1c":"주문 및 장바구니 데이터","privacy.s1d":"기기 기술 정보","privacy.s2title":"2. 데이터 사용","privacy.s2intro":"수집된 데이터는 다음 목적으로 사용됩니다:","privacy.s2a":"주문 처리","privacy.s2b":"계정 관리","privacy.s2c":"서비스 품질 개선","privacy.s2d":"보안 유지","privacy.s3title":"3. 데이터 보호","privacy.s3text":"저희는 귀하의 개인정보를 무단 접근, 변경 또는 유포로부터 보호하기 위해 최신 보안 조치를 적용합니다.","privacy.s4title":"4. 제3자 서비스","privacy.s4text":"저희 앱은 결제, 배송 및 인증을 위해 제3자 서비스를 사용할 수 있습니다. 이러한 서비스에는 자체 개인정보 처리방침이 있습니다.","privacy.s5title":"5. 연락처","privacy.s5text":"개인정보 처리방침에 대해 궁금한 점이 있으시면 저희에게 연락해 주세요:","terms.title":"이용약관","terms.updated":"최종 업데이트: 2025년","terms.intro":"본 모바일 애플리케이션을 사용함으로써 귀하는 본 이용약관에 동의하게 됩니다. 약관에 동의하지 않으시면 앱을 사용하지 마십시오.","terms.s1title":"1. 일반 조항","terms.s1text":"본 앱은 화장품 및 기타 상품의 온라인 구매를 위해 제공됩니다. 모든 자료, 로고 및 콘텐츠는 저작권으로 보호됩니다.","terms.s2title":"2. 계정 등록","terms.s2text":"주문을 하려면 사용자는 계정을 생성하고 정확한 정보를 제공해야 합니다. 사용자는 자신의 계정 보안에 대한 책임이 있습니다.","terms.s3title":"3. 주문 및 결제","terms.s3text":"주문은 앱을 통해 이루어집니다. 상품 가격은 사전 통지 없이 변경될 수 있습니다. 결제는 선택한 방법에 따라 진행됩니다.","terms.s4title":"4. 배송","terms.s4text":"배송 기간은 지역 및 선택한 방법에 따라 달라집니다. 제3자 배송 서비스로 인한 지연에 대해서는 책임지지 않습니다.","terms.s5title":"5. 반품 및 취소","terms.s5text":"반품 및 주문 취소 정책은 해당 섹션 및 도움말 및 지원 페이지에 설명되어 있습니다.","terms.s6title":"6. 책임 제한","terms.s6text":"앱 사용과 관련된 간접적 손해에 대해서는 책임지지 않습니다.","terms.s7title":"7. 약관 변경","terms.s7text":"저희는 언제든지 본 약관을 변경할 권리를 보유합니다. 최신 버전은 항상 앱에서 확인할 수 있습니다.","licenses.title":"Open Source Libraries & Technologies","licenses.intro":"이 애플리케이션은 다음 오픈소스 기술을 사용하여 제작되었습니다","licenses.frontendTitle":"Android Frontend","licenses.fe1":"Android Jetpack – 라이프사이클 관리, 내비게이션, ViewBinding 및 아키텍처 구성 요소에 사용되는 최신 Android 라이브러리 모음으로 안정적인 사용자 인터페이스를 보장합니다.","licenses.fe2":"Retrofit – 백엔드 REST API와 효율적으로 통신하기 위해 사용되는 Android용 타입 안전 HTTP 클라이언트입니다.","licenses.fe3":"Glide – 부드러운 스크롤과 효율적인 메모리 사용에 최적화된 이미지 로딩 및 캐싱 라이브러리입니다.","licenses.fe4":"Firebase Authentication – Google을 통한 안전한 사용자 인증과 전화번호 확인(OTP)을 제공합니다.","licenses.fe5":"Facebook Shimmer – 사용자 경험 향상을 위해 애니메이션 로딩 플레이스홀더를 표시합니다.","licenses.backendTitle":"Backend & Server Technologies","licenses.be1":"Spring Boot – 확장 가능한 RESTful API를 구축하는 데 사용되는 Java 기반 프레임워크입니다.","licenses.be2":"Spring Security + JWT – 사용자 세션과 API 엔드포인트를 보호하기 위해 JSON Web Tokens를 사용한 인증을 구현합니다.","licenses.be3":"Spring Data JPA – ORM 및 리포지토리 패턴을 사용하여 데이터베이스 접근을 단순화합니다.","licenses.be4":"MySQL – 계정, 주문 및 상품을 저장하기 위한 안정적인 관계형 데이터베이스 관리 시스템입니다.","licenses.be5":"Eskiz SMS API – 전화번호 인증 및 일회용 비밀번호(OTP) 전달에 사용됩니다.","licenses.infraTitle":"Infrastructure & Deployment","licenses.inf1":"Docker – 안정적인 배포를 위해 모든 종속성과 함께 애플리케이션을 패키징하는 컨테이너화 기술입니다.","licenses.inf2":"Railway Cloud – 백엔드 서비스를 배포, 확장 및 모니터링하기 위한 클라우드 플랫폼입니다.","licenses.securityTitle":"Security & Data Protection","licenses.sec1":"HTTPS – 사용자 데이터를 보호하기 위해 모든 네트워크 통신이 HTTPS로 암호화됩니다.","licenses.sec2":"안전한 비밀번호 처리 – 사용자 자격 증명은 절대 평문으로 저장되지 않습니다.","licenses.sec3":"토큰 기반 인증 – 모든 보호된 요청은 유효한 JWT 토큰을 요구합니다.","licenses.footer":"저희는 오픈소스 커뮤니티를 존중하며 모든 라이선스 요구 사항과 보안 모범 사례를 엄격히 준수합니다.","status.PENDING":"대기 중","api.title":"API 설정","api.save":"저장"},je={uz:_r,en:_t,ru:ei,ko:ti};let et=ri();function ri(){const e=localStorage.getItem(S.storageKeys.language);return Yt.includes(e)?e:Ze}function fe(){return et}function n(e,t={}){var l;const r=je[et]||je[Ze],a=je.en||je[Ze],s=(r==null?void 0:r[e])??(a==null?void 0:a[e])??((l=je[Ze])==null?void 0:l[e])??e;return String(s).replace(/\{(\w+)\}/g,(d,u)=>t[u]??"")}let Jr=()=>{};function ai(e){Jr=e}function Qr(e){const t=Yt.includes(e)?e:Ze;et=t,localStorage.setItem(S.storageKeys.language,t),Jr()}function Jt(e){var r;document.documentElement.lang=et,document.title=(e==null?void 0:e.currentRoute)==="product"&&((r=e==null?void 0:e.selectedDetailProduct)!=null&&r.name)?`${e.selectedDetailProduct.name} - BEAUTY SKIN KOREA`:"BEAUTY SKIN KOREA";const t=document.getElementById("languageSelect");t&&(t.value=et),document.querySelectorAll("[data-i18n]").forEach(a=>{a.textContent=n(a.dataset.i18n)}),document.querySelectorAll("[data-i18n-placeholder]").forEach(a=>{a.setAttribute("placeholder",n(a.dataset.i18nPlaceholder))}),document.querySelectorAll("[data-i18n-title]").forEach(a=>{a.setAttribute("title",n(a.dataset.i18nTitle))}),document.querySelectorAll("[data-i18n-aria-label]").forEach(a=>{a.setAttribute("aria-label",n(a.dataset.i18nAriaLabel))})}const It=e=>$("/api/products",{query:e,showError:!1}),ii=e=>$(`/api/products/${e}`),$r=(e,t)=>$("/api/products/category",{query:{category:e,...t},showError:!1}),qt=(e,t)=>$("/api/products/search",{query:{q:e,...t},showError:!1}),oi=()=>$("/api/products/today-deals",{showError:!1}),si=e=>$("/api/products/by-ids",{method:"POST",body:JSON.stringify(e),showError:!1}),ni=e=>$("/api/home",{query:e,showError:!1}),ci=e=>$("/api/home/feed",{query:e,showError:!1}),li=(e,t)=>$(`/api/products/${e}/recommend`,{query:t,showError:!1});S.defaultPageSize;const di=()=>$("/api/categories",{showError:!1}),ui=()=>$("/api/banners",{showError:!1}),pi=()=>$("/api/announcements",{showError:!1});function w(e){const t=Number(e);return Number.isFinite(t)?t:0}function yt(e){return e?typeof e=="string"?e:e.imageUrl||e.url||"":""}function ut(e){return Array.isArray(e)?e.map(t=>yt(t)).filter(Boolean):[]}function O(e){return Array.isArray(e==null?void 0:e.content)?e.content:Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray(e)?e:[]}function V(e={}){const t=Array.isArray(e.variants)?e.variants:[],r=t.find(m=>Number(m.stock||0)>0)||t[0]||null,a=ut(e.images),s=ut(e.detailImages),l=yt(e.mainImageUrl)||a[0]||e.imageUrl||S.placeholderImage,d=w(e.price??(r==null?void 0:r.price)),u=w((r==null?void 0:r.discountPrice)??e.discountPrice??e.price),p=d>u&&d>0?Math.round((d-u)/d*100):0;return{id:e.id,name:e.name||"Mahsulot",description:e.description||"",brand:e.brand||"",category:e.category||"",image:l,images:a.length?a:[l],detailImages:s,price:w(e.price),originalPrice:d,discountPrice:w(e.discountPrice),finalPrice:u,discountPercent:p,stock:w(e.stock),ratingAvg:w(e.ratingAvg),reviewCount:w(e.reviewCount),soldCount:w(e.soldCount),todayDeal:!!e.todayDeal,favorite:!!e.favorite,variants:t,raw:e}}function mi(e={}){var l,d,u,p;const t=V(e.product||((l=e.variant)==null?void 0:l.product)||e),r=w(e.quantity)||1,a=w(e.unitPrice||t.finalPrice),s=w(e.lineTotal||a*r);return{id:e.id||e.cartItemId,productId:t.id,product:t,image:yt(e.image||e.imageUrl||e.mainImageUrl)||t.image,name:t.name,brand:t.brand,variantId:e.variantId||((d=e.variant)==null?void 0:d.id),variantLabel:e.variantLabel||((u=e.variant)==null?void 0:u.label)||"",unitPrice:a,lineTotal:s,quantity:r,stock:w(e.stock??((p=e.variant)==null?void 0:p.stock)??t.stock)}}function hi(e={}){const t=e.product||e,r=V(t);if(r.id===void 0||r.id===null){const a=t.productId??e.productId;a!=null&&(r.id=a)}return r.favorite=!0,r}function gi(e){return typeof e=="string"?e:(e==null?void 0:e.code)||(e==null?void 0:e.name)||(e==null?void 0:e.title)||""}function Qt(e={}){var a,s;const t=e.product||{},r=yt(e.mainImageUrl||t.mainImageUrl);return{id:e.id||e.orderItemId,productId:e.productId||t.id||((a=e.product)==null?void 0:a.id),orderId:e.orderId,name:e.productName||e.name||t.name||"Product",image:e.imageUrl||r||t.imageUrl||ut(t.images)[0]||S.placeholderImage,variantLabel:e.variantLabel||((s=e.variant)==null?void 0:s.label)||"",quantity:w(e.quantity)||1,unitPrice:w(e.unitPrice||e.price||t.discountPrice||t.price),lineTotal:w(e.lineTotal||e.total||e.price||0)}}function Zr(e={}){var t,r,a,s,l,d;return{id:e.id||e.reviewId||`${e.productId||"product"}-${e.orderId||"order"}-${e.createdAt||""}`,productId:e.productId||((t=e.product)==null?void 0:t.id)||((r=e.orderItem)==null?void 0:r.productId),orderId:e.orderId||((a=e.order)==null?void 0:a.id)||((s=e.orderItem)==null?void 0:s.orderId),rating:Math.min(5,Math.max(0,w(e.rating))),content:e.content||e.reviewContent||e.comment||"",imageUrls:Array.isArray(e.imageUrls)?e.imageUrls.filter(Boolean):ut(e.images),createdAt:e.createdAt||e.createdDate||e.reviewedAt||"",userName:e.userName||e.fullName||((l=e.user)==null?void 0:l.fullName)||((d=e.user)==null?void 0:d.name)||"Customer"}}function fi(e={}){return{id:e.id||e.notificationId,title:e.title||e.subject||"Notification",message:e.message||e.content||"",type:String(e.type||"SYSTEM").toUpperCase(),read:!!(e.read??e.isRead),createdAt:e.createdAt||e.createdDate||"",refId:e.refId||e.referenceId||e.orderId||null,raw:e}}function vi(e=""){const t=String(e||"SYSTEM").toUpperCase();return n(`notification.${t}`)}function yi(e){return typeof e=="number"?Math.max(0,e):typeof e=="string"&&e.trim()!==""?Math.max(0,Number(e)||0):typeof(e==null?void 0:e.data)=="number"?Math.max(0,e.data):typeof(e==null?void 0:e.count)=="number"?Math.max(0,e.count):typeof(e==null?void 0:e.unreadCount)=="number"?Math.max(0,e.unreadCount):0}function bi(e){var t;return Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray((t=e==null?void 0:e.data)==null?void 0:t.content)?e.data.content:Array.isArray(e==null?void 0:e.content)?e.content:Array.isArray(e)?e:[]}function wi(e={}){var p,m,f;const t=e.review||e.reviewResponse||(e.rating||e.content?e:null),r=V(e.product||e.productCard||e.productResponse||e),a=t?Zr({...t,productId:t.productId||r.id,orderId:t.orderId||e.orderId}):null,s=e.productId||(a==null?void 0:a.productId)||r.id,l=e.orderId||((p=e.order)==null?void 0:p.id)||((m=e.orderResponse)==null?void 0:m.id)||(a==null?void 0:a.orderId),d=e.status||e.orderStatus||((f=e.order)==null?void 0:f.status)||"",u=!!(a!=null&&a.content||a!=null&&a.rating);return{id:e.id||e.orderItemId||(a==null?void 0:a.id)||`${s||"product"}-${l||"order"}`,productId:s,orderId:l,product:r,image:r.image||e.imageUrl||S.placeholderImage,name:e.productName||e.name||(r.name&&r.name!=="Mahsulot"?r.name:`Product #${s||"-"}`),brand:r.brand||e.brand||"",status:d,review:a,hasReview:u,reviewable:!!(s&&l&&!u),raw:e}}function ki(e){var t,r,a,s;return Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray((t=e==null?void 0:e.data)==null?void 0:t.content)?e.data.content:Array.isArray((r=e==null?void 0:e.data)==null?void 0:r.items)?e.data.items:Array.isArray((a=e==null?void 0:e.data)==null?void 0:a.reviews)?e.data.reviews:Array.isArray((s=e==null?void 0:e.data)==null?void 0:s.reviewableItems)?e.data.reviewableItems:Array.isArray(e==null?void 0:e.reviews)?e.reviews:Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e==null?void 0:e.reviewableItems)?e.reviewableItems:Array.isArray(e==null?void 0:e.content)?e.content:Array.isArray(e)?e:[]}function ue(e){if(!e)return"";const t=`category.${e}`,r=n(t);return r!==t?r:Yr[e]||e.toLowerCase().split("_").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" ")}const ie={async loadProducts({page:e=0,size:t=S.defaultPageSize}={}){const r=await It({page:e,size:t});return r===null?{products:[],demoProducts:!1,failed:!0}:{products:O(r).map(V),demoProducts:!1,failed:!1}},async loadMoreProducts({feedPage:e,existingProducts:t}){let r=[];const a=await ci({limit:30});r=O(a).map(V);let s=e;if(!r.length){s+=1;const u=await It({page:s,size:S.defaultPageSize});r=O(u).map(V)}const l=new Set(t.map(u=>String(u.id))),d=r.filter(u=>u.id&&!l.has(String(u.id)));return{products:[...t,...d],nextProducts:d,nextFeedPage:s}},async loadTodayDeals(){const e=await oi();return e===null?{deals:[],demoDeals:!1,failed:!0}:{deals:O(e).map(V),demoDeals:!1,failed:!1}},async loadProduct(e,t=null){const r=await ii(e);return V(r||t||{})},async loadProductsByIds(e){const t=e.map(Number).filter(Number.isFinite);if(!t.length)return[];const r=await si(t);return O(r).map(V).filter(a=>a.id)},async search(e,t={}){const r=await qt(e,{page:0,size:S.defaultPageSize,...t});return r===null?[]:O(r).map(V)},async loadByCategory(e,t={}){const r=await $r(e,{page:0,size:S.defaultPageSize,...t});return r===null?[]:O(r).map(V)},async loadBrandProducts(e,t,r){const a=t.length?t.filter(l=>l.brand===e):r.filter(l=>l.brand===e);if(a.length)return a;const s=await qt(e,{page:0,size:24});return O(s).map(V).filter(l=>l.brand===e)},async loadRecommendations(e,t){const r=await li(e.id,{similar:12,others:24,seed:t}),a=O((r==null?void 0:r.similar)||[]).map(V).filter(u=>String(u.id)!==String(e.id)),s=O((r==null?void 0:r.others)||[]).map(V).filter(u=>String(u.id)!==String(e.id));if(a.length||s.length)return{mode:"api",similar:a.slice(0,12),others:s.slice(0,12),fallback:[],failed:!1};let l=null;e.category&&(l=await $r(e.category,{page:0,size:12}));let d=O(l).map(V).filter(u=>String(u.id)!==String(e.id));return d.length||(l=await It({page:0,size:12}),d=O(l).map(V).filter(u=>String(u.id)!==String(e.id))),{mode:"fallback",similar:[],others:[],fallback:d.slice(0,12),failed:!d.length&&l===null}},pickDefaultVariant(e){var t,r;return((t=e.variants)==null?void 0:t.find(a=>Number(a.stock||0)>0))||((r=e.variants)==null?void 0:r[0])||null},async resolveAddToCartVariant(e,t){var s;if(t)return{variantId:t,navigateToProduct:!1};const r=await this.loadProduct(e),a=r.variants.filter(l=>Number(l.stock||0)>0);return a.length===1?{variantId:a[0].id,navigateToProduct:!1,product:r}:r.variants.length>1?{variantId:null,navigateToProduct:!0,product:r}:{variantId:((s=this.pickDefaultVariant(r))==null?void 0:s.id)||null,navigateToProduct:!1,product:r}}},Si=["SKINCARE","MAKEUP","COLLAGEN","HAIR_CARE","FRAGRANCE"];function Ci(e,t,r){return(e==null?void 0:e.id)!==void 0&&r.findIndex(a=>String(a.id)===String(e.id))===t}const oe={async loadHomeApiData(e={limit:10,page:0,size:20}){const t=await ni(e);if(t===null)return{loaded:!1};const r=O(t.hits||[]).map(V),a=O(t.discounts||[]).map(V),s=O(t.newArrivals||[]).map(V),l=O(t.popular).map(V);if(!(r.length||a.length||s.length||l.length))return{loaded:!1};const u=l.length?l:[...r,...a,...s].filter(Ci);return{loaded:!0,hits:r,discounts:a,newArrivals:s,products:u,todayDeals:a,homeApiSections:{hits:r,discounts:a,newArrivals:s}}},async loadCategories(){const e=await di(),t=O(e).map(gi).filter(Boolean);return t.length?{categories:t,demoCategories:!1}:{categories:Si,demoCategories:!1}},async loadBanners(){const e=await ui();return O(e).map(t=>({id:t.id,title:t.title||"",subtitle:t.subtitle||"",imageUrl:t.imageUrl||"",linkType:String(t.linkType||"NONE").toUpperCase(),linkId:t.linkId,position:w(t.position)})).sort((t,r)=>t.position-r.position)},async loadAnnouncements(){const e=await pi();return O(e).map(t=>({title:t.title||"",message:t.content||t.message||"",type:String(t.type||"SYSTEM").toUpperCase(),createdAt:t.createdAt||""})).filter(t=>t.title||t.message)},getRecentProductIds(){try{return JSON.parse(localStorage.getItem(S.storageKeys.recentProducts)||"[]").filter(Boolean)}catch{return[]}},addRecentProduct(e){if(!e||String(e).startsWith("demo-"))return;const t=[String(e),...this.getRecentProductIds().filter(r=>String(r)!==String(e))].slice(0,12);localStorage.setItem(S.storageKeys.recentProducts,JSON.stringify(t))},async loadRecentlyViewed(){const e=this.getRecentProductIds();return e.length?ie.loadProductsByIds(e):[]}},N={};function $i(e){Object.assign(N,e)}function i(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function L(e){const t=fe(),r={uz:"so'm",en:"UZS",ru:"сум",ko:"UZS"},a=t==="uz"?"uz-UZ":t;return`${new Intl.NumberFormat(a).format(w(e))} ${r[t]||"UZS"}`}function Xr(e){return L(e)}function Zt(e){if(!e)return"";const t=new Date(e);if(Number.isNaN(t.getTime()))return String(e);const r=fe();return new Intl.DateTimeFormat(r,{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(t)}function Pi(e){if(!e)return"";const t=new Date(e);if(Number.isNaN(t.getTime()))return String(e);const r=fe(),a=new Intl.DateTimeFormat(r,{day:"2-digit",month:"short",year:"numeric"}).format(t),s=new Intl.DateTimeFormat(r,{hour:"2-digit",minute:"2-digit"}).format(t);return`${a} • ${s}`}function Ei({discountPercent:e,todayDeal:t,isNew:r,todayDealLabel:a}){return`
    <div class="badge-row">
      ${e?`<span class="badge ds-badge--sale">-${e}%</span>`:""}
      ${t?`<span class="badge today ds-badge--deal">${i(a)}</span>`:""}
      ${r?'<span class="badge ds-badge--new">NEW</span>':""}
    </div>
  `}function Ii({stock:e,lowStockLabel:t,outOfStockLabel:r}){const a=e>0&&e<=5,s=e===0;return!a&&!s?"":`<span class="ds-badge ds-badge--stock">${i(s?r:t)}</span>`}function bt({rating:e,label:t="Rating",className:r="stars"}){const a=Math.min(5,Math.max(0,Math.round(w(e))));return`
    <span class="${i(r)}" role="img" aria-label="${i(t)} ${a} out of 5">
      ${Array.from({length:5},(s,l)=>`<span class="${l<a?"filled":""}">★</span>`).join("")}
    </span>
  `}function Ai({ratingAvg:e,reviewCount:t=0,className:r="rating"}){const a=w(e);return`
    <span class="${i(r)}">
      <span class="star" aria-hidden="true">★</span>
      ${a.toFixed(1)}
      <span class="review-count">(${t})</span>
    </span>
  `}function Li({ratingAvg:e,reviewCount:t=0}){return e?`
    <div class="rating-line">
      <span class="star" aria-hidden="true">★</span>
      ${w(e).toFixed(1)}
      <span class="review-count">(${t})</span>
    </div>
  `:""}function Ti({product:e,screen:t="home",position:r=0,isFavorite:a=!1,isCompared:s=!1,isAdding:l=!1,labels:d={}}){const u=w(e.stock),p=u===0,{favoritesTitle:m="Favorites",todayOnly:f="Today only",lowStock:k="Low stock",outOfStock:I="Out of stock",freeShipping:D="Free shipping",quickView:M="Quick view",compare:E="Compare",sold:B="",adding:q="Adding...",addToCart:y="Add to cart",viewDetails:Q="View details"}=d;return`
    <article class="product-card" data-product="${i(e.id)}" data-screen="${i(t)}" data-position="${i(r)}" role="link" tabindex="0" aria-label="${i(e.name)}">
      <div class="card-media">
        ${Ei({discountPercent:e.discountPercent,todayDeal:e.todayDeal,isNew:e.isNew,todayDealLabel:f})}
        <button class="icon-button favorite-float ${a?"active":""}" data-favorite="${i(e.id)}" type="button" aria-label="${i(m)}" aria-pressed="${a}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
        </button>
        <img class="product-image" src="${i(e.image)}" alt="${i(e.name)}" loading="lazy" decoding="async" />
        <div class="card-badges-bottom">
          ${Ii({stock:u,lowStockLabel:k,outOfStockLabel:I})}
          <span class="ds-badge ds-badge--delivery">${i(D)}</span>
        </div>
        <div class="card-overlay">
          <button class="secondary-button" data-quick-view="${i(e.id)}" type="button">${i(M)}</button>
          <button class="icon-button ${s?"active":""}" data-compare="${i(e.id)}" type="button" aria-label="${i(E)}" aria-pressed="${s}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-meta">
          <span class="brand-name">${i(e.brand||e.category||"BEAUTY SKIN KOREA")}</span>
          ${Ai({ratingAvg:e.ratingAvg,reviewCount:e.reviewCount||0})}
        </div>
        <h3>${i(e.name)}</h3>
        <p>${i(e.description||`${e.soldCount} dona sotilgan`)}</p>
        <div class="price-row">
          <span>${L(e.finalPrice)}</span>
          ${e.discountPercent?`<span class="old-price">${L(e.originalPrice)}</span>`:""}
        </div>
        ${Li({ratingAvg:e.ratingAvg,reviewCount:e.reviewCount||0})}
        <p class="hint">${i(B)}</p>
      </div>
      <div class="card-actions">
        <button class="primary-button ${l?"loading":""}" data-add="${i(e.id)}" type="button" ${p?"disabled":""}>
          ${i(l?q:y)}
        </button>
        <button class="icon-button" data-detail="${i(e.id)}" type="button" aria-label="${i(Q)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>
    </article>
  `}function Di({message:e,actionLabel:t="",actionAttrs:r='data-show-all type="button"'}){const a=t?`<button class="secondary-button" ${r}>${i(t)}</button>`:"";return`
    <div class="empty-state">
      <strong>${i(e)}</strong>
      ${a}
    </div>
  `}function ea(e,t){e&&(e.innerHTML=Di(t))}function Ri({products:e,renderCard:t}){return e.map((r,a)=>t(r,a)).join("")}function Mi(e,{products:t,emptyMessage:r,emptyActionLabel:a,renderCard:s}){return t.length?(e.innerHTML=Ri({products:t,renderCard:s}),!0):(ea(e,{message:r,actionLabel:a}),!1)}function qi(){return`
    <div class="skeleton-card" aria-hidden="true">
      <div class="ds-skeleton" style="aspect-ratio:1/1.05;border-radius:14px;margin-bottom:12px"></div>
      <div class="ds-skeleton" style="height:12px;width:40%;margin-bottom:8px;border-radius:6px"></div>
      <div class="ds-skeleton" style="height:14px;width:90%;margin-bottom:8px;border-radius:6px"></div>
      <div class="ds-skeleton" style="height:18px;width:55%;border-radius:6px"></div>
    </div>
  `}function Bi({count:e=12}={}){return Array.from({length:e},()=>qi()).join("")}function Oi(e,t=12){e&&(e.innerHTML=Bi({count:t}))}function ve(e=document){if(e.querySelectorAll("img[data-src], img[loading='lazy']").forEach(r=>{if(r.dataset.loaded)return;r.classList.add("img-loading");const a=()=>{r.classList.remove("img-loading"),r.classList.add("img-loaded"),r.dataset.loaded="1"};if(r.complete&&r.naturalWidth){a();return}r.addEventListener("load",a,{once:!0}),r.addEventListener("error",()=>r.classList.remove("img-loading"),{once:!0})}),"IntersectionObserver"in window){const r=new IntersectionObserver(a=>{a.forEach(s=>{if(!s.isIntersecting)return;const l=s.target;l.dataset.src&&!l.src&&(l.src=l.dataset.src),r.unobserve(l)})},{rootMargin:"200px"});e.querySelectorAll("img[data-src]").forEach(a=>r.observe(a))}}const ta="beauty_skin_compare",Ve=4;function Ge(){try{return JSON.parse(localStorage.getItem(ta)||"[]").slice(0,Ve)}catch{return[]}}function Xt(e){localStorage.setItem(ta,JSON.stringify(e.slice(0,Ve)))}function xi(e){const t=String(e);let r=Ge();if(r.includes(t))r=r.filter(a=>a!==t);else{if(r.length>=Ve)return{ids:r,added:!1,full:!0};r=[...r,t]}return Xt(r),{ids:r,added:r.includes(t),full:!1}}function Ni(e){const t=Ge().filter(r=>r!==String(e));return Xt(t),t}function Fi(){return Xt([]),[]}const zi=["red","blue","pink","black","white","green","nude","coral","beige","brown","purple","orange","yellow","gray","grey","rose","peach","ivory","gold","silver"],Hi=["xs","s","m","l","xl","xxl","ml","g","oz","50ml","100ml","150ml","200ml","30ml"];function Ui(e){const t=new Set,r=new Set,a=new Set;let s=0;return e.forEach(l=>{var d;l.brand&&t.add(l.brand),s=Math.max(s,w(l.finalPrice)),(d=l.variants)==null||d.forEach(u=>{const p=String(u.label||"").toLowerCase();zi.forEach(m=>{p.includes(m)&&r.add(m.charAt(0).toUpperCase()+m.slice(1))}),Hi.forEach(m=>{p.includes(m)&&a.add(m.toUpperCase())}),u.color&&r.add(u.color),u.size&&a.add(u.size)})}),{brands:[...t].sort(),colors:[...r].sort(),sizes:[...a].sort(),maxPrice:s||5e6}}function Vi(e,t){var a,s,l;let r=[...e];return(a=t.brands)!=null&&a.length&&(r=r.filter(d=>t.brands.includes(d.brand))),(t.minPrice>0||t.maxPrice<5e6)&&(r=r.filter(d=>{const u=w(d.finalPrice);return u>=t.minPrice&&u<=t.maxPrice})),t.minRating>0&&(r=r.filter(d=>w(d.ratingAvg)>=t.minRating)),t.onSale&&(r=r.filter(d=>w(d.discountPercent)>0||d.todayDeal)),t.inStock&&(r=r.filter(d=>w(d.stock)>0)),t.fastDelivery&&(r=r.filter(d=>w(d.stock)>0)),(s=t.colors)!=null&&s.length&&(r=r.filter(d=>{const u=(d.variants||[]).map(p=>String(p.label||p.color||"").toLowerCase()).join(" ");return t.colors.some(p=>u.includes(p.toLowerCase()))})),(l=t.sizes)!=null&&l.length&&(r=r.filter(d=>{const u=(d.variants||[]).map(p=>String(p.label||p.size||"").toLowerCase()).join(" ");return t.sizes.some(p=>u.includes(p.toLowerCase()))})),Ki(r,t.sort)}function Ki(e,t){const r=[...e];switch(t){case"price-asc":return r.sort((a,s)=>w(a.finalPrice)-w(s.finalPrice));case"price-desc":return r.sort((a,s)=>w(s.finalPrice)-w(a.finalPrice));case"rating":return r.sort((a,s)=>w(s.ratingAvg)-w(a.ratingAvg));case"newest":return r.sort((a,s)=>w(s.id)-w(a.id));case"discount":return r.sort((a,s)=>w(s.discountPercent)-w(a.discountPercent));default:return r.sort((a,s)=>w(s.soldCount)-w(a.soldCount))}}const ra="beauty_skin_filters",Te={brands:[],minPrice:0,maxPrice:5e6,colors:[],sizes:[],minRating:0,onSale:!1,inStock:!1,fastDelivery:!1,origin:[],seller:[],sort:"popular",viewMode:"grid"};function Gi(){try{const e=JSON.parse(localStorage.getItem(ra)||"{}");return{...Te,...e}}catch{return{...Te}}}function ji(e){localStorage.setItem(ra,JSON.stringify({brands:e.brands,minPrice:e.minPrice,maxPrice:e.maxPrice,colors:e.colors,sizes:e.sizes,minRating:e.minRating,onSale:e.onSale,inStock:e.inStock,fastDelivery:e.fastDelivery,origin:e.origin,seller:e.seller,sort:e.sort,viewMode:e.viewMode}))}function Wi(){return{...Te}}function Yi(e){let t=0;return e.brands.length&&(t+=e.brands.length),e.colors.length&&(t+=e.colors.length),e.sizes.length&&(t+=e.sizes.length),e.origin.length&&(t+=e.origin.length),e.seller.length&&(t+=e.seller.length),e.minRating>0&&(t+=1),e.onSale&&(t+=1),e.inStock&&(t+=1),e.fastDelivery&&(t+=1),(e.minPrice>Te.minPrice||e.maxPrice<Te.maxPrice)&&(t+=1),t}const er="beauty_skin_saved_for_later";function tr(){try{return JSON.parse(localStorage.getItem(er)||"[]")}catch{return[]}}function _i(e){const t=tr();if(t.some(a=>String(a.id)===String(e.id)))return t;const r=[...t,{id:e.id,name:e.name,image:e.image,unitPrice:e.unitPrice,brand:e.brand,variantLabel:e.variantLabel}];return localStorage.setItem(er,JSON.stringify(r)),r}function Ji(e){const t=tr().filter(r=>String(r.id)!==String(e));return localStorage.setItem(er,JSON.stringify(t)),t}const Ie=5e5,Qi=3e4,Zi=["Korea","Japan","USA"],Xi=["Official Store","Beauty Skin Korea","Verified Seller"];function eo(){c.filters||(c.filters=Gi())}function to(e){c.sourceProducts=e,c.filterFacets=Ui(e),c.filters.maxPrice===Te.maxPrice&&c.filterFacets.maxPrice&&(c.filters.maxPrice=Math.ceil(c.filterFacets.maxPrice/1e3)*1e3)}function ro(){return Vi(c.sourceProducts,c.filters)}function wt(e,t){const r=document.getElementById("filterSidebar"),a=document.getElementById("filterSheetContent"),s=ao(e);r&&(r.innerHTML=s),a&&(a.innerHTML=s),io()}function ao(e,t){const r=c.filters,a=c.filterFacets,s=a.brands.map(u=>We("brand",u,r.brands.includes(u))).join(""),l=a.colors.map(u=>We("color",u,r.colors.includes(u))).join(""),d=a.sizes.map(u=>We("size",u,r.sizes.includes(u))).join("");return`
    <div class="filter-sidebar-header">
      <h3>${i(e("filter.title"))}</h3>
      <button class="ghost-button" type="button" data-clear-filters>${i(e("filter.clearAll"))}</button>
    </div>
    ${ce(e("filter.brand"),s||`<p class="hint">${i(e("filter.noOptions"))}</p>`)}
    ${ce(e("filter.price"),`
      <div class="price-range">
        <input type="range" data-filter-price min="0" max="${a.maxPrice||5e6}" step="10000" value="${r.maxPrice}" />
        <div class="price-range-labels">
          <span>${L(r.minPrice)}</span>
          <span>${L(r.maxPrice)}</span>
        </div>
      </div>
    `)}
    ${ce(e("filter.discount"),At("onSale",e("filter.onSaleOnly"),r.onSale))}
    ${ce(e("filter.color"),l||'<p class="hint">—</p>')}
    ${ce(e("filter.size"),d||'<p class="hint">—</p>')}
    ${ce(e("filter.rating"),`
      ${[4,3,2,1].map(u=>`
        <label class="filter-check">
          <input type="radio" name="minRating" data-filter-rating value="${u}" ${r.minRating===u?"checked":""} />
          ${"★".repeat(u)}+
        </label>
      `).join("")}
    `)}
    ${ce(e("filter.availability"),At("inStock",e("filter.inStock"),r.inStock))}
    ${ce(e("filter.fastDelivery"),At("fastDelivery",e("filter.fastDelivery"),r.fastDelivery))}
    ${ce(e("filter.origin"),Zi.map(u=>We("origin",u,r.origin.includes(u))).join(""))}
    ${ce(e("filter.seller"),Xi.map(u=>We("seller",u,r.seller.includes(u))).join(""))}
  `}function ce(e,t){return`
    <div class="filter-group">
      <button class="filter-group-toggle" type="button" aria-expanded="true">
        ${i(e)}
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <div class="filter-group-body">${t}</div>
    </div>
  `}function We(e,t,r){return`
    <label class="filter-check">
      <input type="checkbox" data-filter-${e}="${i(t)}" ${r?"checked":""} />
      ${i(t)}
    </label>
  `}function At(e,t,r){return`
    <label class="filter-check">
      <input type="checkbox" data-filter-toggle="${e}" ${r?"checked":""} />
      ${i(t)}
    </label>
  `}function pt(e){const t=document.getElementById("filterChipsRow");if(!t)return;const r=[],a=c.filters;a.brands.forEach(s=>r.push(Me(s,`brand:${s}`))),a.colors.forEach(s=>r.push(Me(s,`color:${s}`))),a.sizes.forEach(s=>r.push(Me(s,`size:${s}`))),a.onSale&&r.push(Me(e("filter.onSaleOnly"),"onSale")),a.inStock&&r.push(Me(e("filter.inStock"),"inStock")),a.minRating&&r.push(Me(`${a.minRating}★+`,"rating")),t.hidden=!r.length,t.innerHTML=r.join("")}function Me(e,t){return`<span class="filter-chip-active">${i(e)}<button type="button" data-remove-chip="${i(t)}" aria-label="Remove">×</button></span>`}function io(){const e=document.getElementById("filterBadgeCount"),t=Yi(c.filters);e&&(e.textContent=t,e.hidden=t===0)}function Pe(){ji(c.filters)}function oo(){const e=c.filterFacets.maxPrice||Te.maxPrice;c.filters={...Wi(),maxPrice:e},Pe()}function Bt(e,t){var r,a,s,l;e&&(e.classList.toggle("list-view",t==="list"),(r=document.getElementById("gridViewBtn"))==null||r.classList.toggle("active",t==="grid"),(a=document.getElementById("listViewBtn"))==null||a.classList.toggle("active",t==="list"),(s=document.getElementById("gridViewBtn"))==null||s.setAttribute("aria-pressed",t==="grid"),(l=document.getElementById("listViewBtn"))==null||l.setAttribute("aria-pressed",t==="list"))}function so(e){const t=document.getElementById("compareFab"),r=document.getElementById("compareFabCount");r&&(r.textContent=e),t==null||t.classList.toggle("visible",e>0)}function Pr(e,t){const r=document.getElementById("compareDrawerContent");if(r){if(!e.length){r.innerHTML=`<div class="empty-state"><strong>${i(t("compare.empty"))}</strong></div>`;return}r.innerHTML=e.map(a=>`
    <div class="compare-product-cell" style="display:flex;gap:12px;margin-bottom:12px;align-items:center">
      <img src="${i(a.image)}" alt="" width="64" height="64" />
      <div style="flex:1">
        <strong>${i(a.name)}</strong>
        <p>${L(a.finalPrice)}</p>
      </div>
      <button class="icon-button" data-remove-compare="${i(a.id)}" type="button" aria-label="Remove">×</button>
    </div>
  `).join("")}}function aa(e,t){const r=document.getElementById("comparePageContent");if(!r||!e.length)return;const a=[["",...e.map(l=>`<img src="${i(l.image)}" alt="" /><br><strong>${i(l.name)}</strong>`)],[t("compare.price"),...e.map(l=>L(l.finalPrice))],[t("compare.brand"),...e.map(l=>i(l.brand||"—"))],[t("compare.rating"),...e.map(l=>`${w(l.ratingAvg).toFixed(1)} (${l.reviewCount||0})`)],[t("compare.stock"),...e.map(l=>String(l.stock??"—"))],[t("compare.discount"),...e.map(l=>l.discountPercent?`-${l.discountPercent}%`:"—")]],s=l=>new Set(l.filter(u=>u!=="—")).size>1;r.innerHTML=`
    <table class="compare-table">
      <tbody>
        ${a.map(([l,...d])=>`<tr class="${l&&s(d)?"compare-diff":""}">
            <th>${i(l)}</th>
            ${d.map(p=>`<td>${p}</td>`).join("")}
          </tr>`).join("")}
      </tbody>
    </table>
  `}function Er(e,t){return t?`
    <section class="app-feed-block app-feed-rail app-cart-rail">
      <div class="app-section-head">
        <h2>${i(e)}</h2>
      </div>
      <div class="product-grid app-rail-grid">${t}</div>
    </section>
  `:""}function no(e,t={}){const r=document.getElementById("cartExtras");if(!r)return;const a=w(t.subtotal??b.cartTotal),s=Math.min(100,a/Ie*100),l=Math.max(0,Ie-a),d=tr(),u=t.recommendedHtml||"",p=t.recentHtml||"";r.innerHTML=`
    <div class="app-cart-free-block">
      <div class="app-cart-free-head">
        <strong>${i(e("cart.freeToHome"))}</strong>
        ${a>=Ie?`<span class="app-cart-free-done">${i(e("cart.freeShippingUnlocked"))}</span>`:`<span class="hint">${i(e("cart.freeShippingRemaining",{amount:L(l)}))}</span>`}
      </div>
      <div class="app-cart-free-bar"><div style="width:${s}%"></div></div>
    </div>
    ${Er(e("home.recommended"),u)}
    ${Er(e("home.recentlyViewed"),p)}
    ${d.length?`
      <section class="app-cart-saved">
        <h3>${i(e("cart.savedForLater"))}</h3>
        ${d.map(m=>`
          <div class="app-cart-saved-item">
            <img src="${i(m.image)}" alt="" loading="lazy" />
            <div>
              <strong>${i(m.name)}</strong>
              <p>${L(m.unitPrice)}</p>
              <button class="cart-save-later" data-restore-saved="${i(m.id)}" type="button">${i(e("cart.moveToCart"))}</button>
            </div>
          </div>
        `).join("")}
      </section>
    `:""}
    <div class="cart-coupon app-cart-coupon">
      <input type="text" id="cartCouponInput" placeholder="${i(e("cart.couponPlaceholder"))}" value="${i(b.cartCoupon||"")}" />
      <button class="secondary-button" type="button" data-apply-coupon>${i(e("cart.applyCoupon"))}</button>
    </div>
  `}function co(e){const t=Date.now(),r=Math.max(0,e-t),a=Math.floor(r/36e5),s=Math.floor(r%36e5/6e4),l=Math.floor(r%6e4/1e3),d=u=>String(u).padStart(2,"0");return`
    <div class="flash-countdown" aria-live="polite">
      <div class="flash-countdown-unit"><strong>${d(a)}</strong><span>HRS</span></div>
      <div class="flash-countdown-unit"><strong>${d(s)}</strong><span>MIN</span></div>
      <div class="flash-countdown-unit"><strong>${d(l)}</strong><span>SEC</span></div>
    </div>
  `}function lo(e,t,r,a){return`
    <div class="brand-hero">
      <p class="eyebrow">${i(r("brand.official"))}</p>
      <h1>${i(e)}</h1>
      <p class="hint">${i(r("brand.story"))}</p>
    </div>
    <section class="personalization-strip">
      <div class="section-head"><h2>${i(r("brand.popular"))}</h2></div>
      <div class="product-grid">${a}</div>
    </section>
  `}const rr=(e,t={})=>$(e,{...t,showError:!1}),uo=e=>rr("/events/impression",{method:"POST",body:JSON.stringify(e)}),po=e=>rr("/events/click",{method:"POST",query:{productId:e}}),mo=e=>rr("/events/view",{method:"POST",query:{productId:e}}),mt={isTrackableProduct(e){return!!e&&!String(e).startsWith("demo-")},impressionKey(e,t,r){return`${e}:${t}:${r}`},shouldSendImpression(e,t,r,a){if(!this.isTrackableProduct(a))return!1;const s=this.impressionKey(t,r,a);return e.has(s)?!1:(e.add(s),!0)},sendImpression({productId:e,screen:t,position:r,sessionId:a,queryText:s}){return uo({productId:Number(e),screen:t,position:r,queryText:s||null,sessionId:a}).catch(()=>{})},sendProductClick(e){this.isTrackableProduct(e)&&po(e).catch(()=>{})},sendProductView(e){this.isTrackableProduct(e)&&mo(e).catch(()=>{})}};function Ir(e,t,r){mt.shouldSendImpression(h.impressionsSent,h.sessionId,t||"home",e)&&mt.sendImpression({productId:e,screen:t||"home",position:r,sessionId:h.sessionId,queryText:h.currentSearchQuery})}function st(e){mt.sendProductClick(e)}function ho(e){mt.sendProductView(e)}function ia(e){if(!("IntersectionObserver"in window)){e.querySelectorAll("[data-product]").forEach(t=>{Ir(t.dataset.product,t.dataset.screen||"home",Number(t.dataset.position||0))});return}h.impressionObserver||(h.impressionObserver=new IntersectionObserver(t=>{t.forEach(r=>{if(!r.isIntersecting)return;const a=r.target;Ir(a.dataset.product,a.dataset.screen||"home",Number(a.dataset.position||0)),h.impressionObserver.unobserve(a)})},{threshold:.35})),e.querySelectorAll("[data-product]").forEach(t=>h.impressionObserver.observe(t))}function go(){return{favoritesTitle:n("favorites.title"),todayOnly:n("home.todayOnly"),lowStock:n("product.lowStock"),outOfStock:n("product.outOfStock"),freeShipping:n("product.freeShipping"),quickView:n("product.quickView"),compare:n("product.compare"),adding:n("product.adding"),addToCart:n("product.addToCart"),viewDetails:n("product.viewDetails")}}function Ke(e,t={}){const r=go();return r.sold=n("product.sold",{count:e.soldCount}),Ti({product:e,screen:t.screen||h.currentGridScreen||"home",position:t.position??0,isFavorite:C.favoriteIds.has(String(e.id))||!!e.favorite,isCompared:Ge().includes(String(e.id)),isAdding:b.addingProductIds.has(String(e.id)),labels:r})}function Ne(e,t=12){Oi(e,t)}function me(e,t,r=n("home.showAll")){ea(e,{message:t,actionLabel:r})}function Z(e,t,r,a={}){var l;Mi(e,{products:t,emptyMessage:r,emptyActionLabel:n("home.showAll"),renderCard:(d,u)=>Ke(d,{...a,position:u})})&&(ia(e),ve(e),Bt(e,((l=c.filters)==null?void 0:l.viewMode)||"grid"))}function ne(e,t,r={}){to(e),wt(n),pt(n);const a=ro();Z(o.grid,a,t,r);const s=document.getElementById("sortSelect");s&&s.value!==c.filters.sort&&(s.value=c.filters.sort)}function Ar(e,t){e&&(e.hidden=!t)}function Fe(){Ar(o.productsMode,c.demoProducts),Ar(o.dealsMode,c.demoDeals)}function fo(e){C.favoriteProducts=e.filter(t=>t.id!==void 0&&t.id!==null),C.favoriteIds=new Set(C.favoriteProducts.map(t=>String(t.id))),C.favoritesCount=C.favoriteProducts.length,ge()}function Ot(){C.favoriteProducts=[],C.favoriteIds=new Set,C.favoritesLoading=!1,C.favoritesError="",C.favoritesCount=0,ge()}function ge(){var e;c.products=c.products.map(t=>({...t,favorite:C.favoriteIds.has(String(t.id))})),c.todayDeals=c.todayDeals.map(t=>({...t,favorite:C.favoriteIds.has(String(t.id))})),((e=c.selectedDetailProduct)==null?void 0:e.id)!==void 0&&(c.selectedDetailProduct={...c.selectedDetailProduct,favorite:C.favoriteIds.has(String(c.selectedDetailProduct.id))})}function vo({banners:e=[]}){return e.length?`
    <button class="banner-arrow prev" data-banner-nav="prev" type="button" aria-label="Oldingi banner">‹</button>
    <div class="banner-track">
      ${e.map(t=>`
        <article class="banner-card ${t.imageUrl?"has-image":""}" data-banner-link-type="${i(t.linkType)}" data-banner-link-id="${i(t.linkId??"")}">
          ${t.imageUrl?`<img src="${i(t.imageUrl)}" alt="${i(t.title||"Banner")}" />`:`
          <div>
            <strong>${i(t.title||"BEAUTY SKIN KOREA")}</strong>
            ${t.subtitle?`<p>${i(t.subtitle)}</p>`:""}
          </div>`}
        </article>
      `).join("")}
    </div>
    <button class="banner-arrow next" data-banner-nav="next" type="button" aria-label="Keyingi banner">›</button>
    <div class="banner-dots" role="tablist" aria-label="Banner slides">
      ${e.map((t,r)=>`
        <button
          class="banner-dot ${r===0?"active":""}"
          type="button"
          data-banner-dot="${r}"
          role="tab"
          aria-label="Banner ${r+1}"
          aria-selected="${r===0?"true":"false"}"
        ></button>
      `).join("")}
    </div>
  `:""}function yo({announcements:e=[],limit:t=3}){return e.slice(0,t).map(r=>`
    <article class="announcement-item ${r.type.toLowerCase()}">
      <strong>${i(r.title||r.type)}</strong>
      <span>${i(r.message)}</span>
    </article>
  `).join("")}const oa={search(e,t){return ie.search(e,t)},loadByCategory(e,t){return ie.loadByCategory(e,t)}};function bo({category:e,label:t,active:r=!1}){return`
    <button class="chip ${r?"active":""}" data-category="${i(e)}" type="button">
      ${i(t)}
    </button>
  `}function wo({categories:e,selectedCategory:t,labelFor:r}){return e.map(a=>bo({category:a,label:r(a),active:t===a})).join("")}const ko=["SNAIL CREAM","COSRX","SUNSCREEN","LIP TINT","VITAMIN C","COLLAGEN"],te={renderCategories(){const e=["ALL",...c.categories];o.categoryToolbar.innerHTML=wo({categories:e,selectedCategory:c.selectedCategory,labelFor:t=>t==="ALL"?n("home.all"):ue(t)}),te.renderCatalogList(),te.renderQuickCategories()},renderCatalogList(){const e=["ALL",...c.categories];o.catalogList.innerHTML=e.map(t=>`
      <button class="catalog-item ${c.selectedCategory===t?"active":""}" data-category="${i(t)}" type="button">
        <span>${i(t==="ALL"?n("home.showAll"):ue(t))}</span>
        <span>${t==="ALL"?"→":"›"}</span>
      </button>
    `).join("")},renderQuickCategories(){o.quickCategoryGrid.innerHTML=Cr.map(e=>`
      <button class="quick-card" data-category="${i(e.category)}" type="button">
        <span>${i(e.icon)}</span>
        ${i(ue(e.category))}
      </button>
    `).join(""),te.renderMegaMenu(),te.renderPopularSearches(),te.renderMobileNav()},renderPopularSearches(){const e=document.getElementById("popularSearchesChips");e&&(e.innerHTML=ko.map(t=>`
      <button class="search-chip" type="button" data-search-chip="${i(t)}" data-chip-type="trending">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.3-4.3m1.3-5.2a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"/></svg>
        ${i(t)}
      </button>
    `).join(""))},renderMegaMenu(){const e=document.getElementById("megaMenuContent");if(!e)return;const t=[{title:n("home.categories"),items:c.categories.slice(0,8)},{title:n("home.quickCategories"),items:Cr.map(r=>r.category)}];e.innerHTML=t.map(r=>`
      <div class="mega-menu-group">
        <h3>${i(r.title)}</h3>
        ${r.items.map(a=>`
          <button type="button" data-category="${i(a)}">${i(ue(a))}</button>
        `).join("")}
      </div>
    `).join("")},renderMobileNav(){const e=document.getElementById("mobileNavLinks");if(!e)return;const t=[{id:"ordersButton",label:n("header.orders")},{id:"favoritesButton",label:n("favorites.title")},{id:"cartButton",label:n("cart.title")},{id:"loginButton",label:n("auth.login")}];e.innerHTML=`
      ${["ALL",...c.categories].map(r=>`
        <button class="mobile-nav-link" type="button" data-category="${i(r)}">
          ${i(r==="ALL"?n("home.all"):ue(r))}
        </button>
      `).join("")}
      ${t.map(r=>`<button class="mobile-nav-link" type="button" data-mobile-action="${i(r.id)}">${i(r.label)}</button>`).join("")}
    `},async loadMoreProducts(){if(c.feedLoading)return;c.feedLoading=!0,o.loadMore.disabled=!0,o.loadMore.textContent="Yuklanmoqda...";const{products:e,nextProducts:t,nextFeedPage:r}=await ie.loadMoreProducts({feedPage:c.feedPage,existingProducts:c.products});c.feedPage=r,c.products=e,ge(),ne(c.products,"Mahsulot topilmadi.",{screen:h.currentGridScreen||"home"}),c.feedLoading=!1,o.loadMore.disabled=!1,o.loadMore.textContent=t.length?"Yana yuklash":"Boshqa mahsulot topilmadi"},async renderCategoryProducts(e,{showHomeView:t}={}){if(h.currentRoute==="product"&&(window.location.hash="#/",t==null||t()),c.selectedCategory=e,h.currentGridScreen=e==="ALL"?"home":"category",h.currentSearchQuery="",te.renderCategories(),e==="ALL"){o.title.textContent=n("home.popular"),await z.loadProducts();return}o.title.textContent=ue(e),o.status.textContent=n("home.loading"),Ne(o.grid,10);const r=await oa.loadByCategory(e);c.products=r,ge(),ne(c.products,n("home.noProducts"),{screen:"category"}),o.status.textContent=""}},So=5e3;let nt=null,xt=!1,Xe=null,Lr=0;function kt(){var e;return(e=o.banners)==null?void 0:e.querySelector(".banner-track")}function St(){return c.banners.length}function ar(){const e=kt();if(!e)return 0;const t=e.clientWidth||1;return Math.max(0,Math.min(St()-1,Math.round(e.scrollLeft/t)))}function Lt(){var t;const e=ar();(t=o.banners)==null||t.querySelectorAll("[data-banner-dot]").forEach(r=>{const a=Number(r.dataset.bannerDot)===e;r.classList.toggle("active",a),r.setAttribute("aria-selected",a?"true":"false")})}function Nt(e,t="smooth"){const r=kt(),a=St();if(!r||!a)return;const s=(e%a+a)%a;r.scrollTo({left:s*r.clientWidth,behavior:t})}function sa(){Nt(ar()+1)}function ir(){nt&&(clearInterval(nt),nt=null)}function Ft(){ir(),!(xt||St()<=1)&&(nt=setInterval(()=>sa(),So))}function Co(){ir();const e=kt();e&&Xe&&e.removeEventListener("scroll",Xe),Xe=null,o.banners&&(o.banners.onmouseenter=null,o.banners.onmouseleave=null)}function $o(){Co();const e=kt();if(!e||St()<=1){Lt();return}Xe=()=>{clearTimeout(Lr),Lr=setTimeout(Lt,80)},e.addEventListener("scroll",Xe,{passive:!0}),o.banners.onmouseenter=()=>{xt=!0,ir()},o.banners.onmouseleave=()=>{xt=!1,Ft()},Lt(),Ft()}function Tr(e){const t=document.querySelector(".hero-main");if(t){if(!e){t.style.removeProperty("--hero-campaign-image");return}t.style.setProperty("--hero-campaign-image",`url("${e}")`)}}const z={renderBanners(){var e;if(!c.banners.length){o.banners.hidden=!0,o.banners.innerHTML="",Tr("");return}o.banners.hidden=!1,o.banners.innerHTML=vo({banners:c.banners}),Tr(((e=c.banners[0])==null?void 0:e.imageUrl)||""),$o()},renderAnnouncements(){if(!c.announcements.length){o.announcements.hidden=!0,o.announcements.innerHTML="";return}o.announcements.hidden=!1,o.announcements.innerHTML=yo({announcements:c.announcements})},renderHomeApiSections(e){const t=e.hits||[],r=e.newArrivals||[],a=document.getElementById("personalizationSection"),s=document.getElementById("personalizationGrid");if(s){const d=t.length?t:c.products.slice(0,10);a&&(a.hidden=!d.length),d.length&&Z(s,d.slice(0,10),n("home.noProducts"),{screen:"home-for-you"})}const l=document.getElementById("newArrivalsGrid");if(l){const d=r.length?r:c.products.slice(0,10);Z(l,d.slice(0,10),n("home.noProducts"),{screen:"home-new"})}o.homeApiSections.hidden=!0,o.homeApiSections.innerHTML=""},renderPersonalizationSections(){var a,s;const e=document.getElementById("personalizationSection"),t=document.getElementById("personalizationGrid");if(!e||!t||t.children.length)return;const r=(s=(a=c.homeApiSections)==null?void 0:a.hits)!=null&&s.length?c.homeApiSections.hits:c.products.slice(0,10);e.hidden=!r.length,r.length&&Z(t,r.slice(0,10),n("home.noProducts"),{screen:"home-for-you"})},async loadCategories(){const{categories:e,demoCategories:t}=await oe.loadCategories();c.categories=e,c.demoCategories=t,Fe(),te.renderCategories()},async loadBanners(){c.banners=await oe.loadBanners(),z.renderBanners()},async loadAnnouncements(){c.announcements=await oe.loadAnnouncements(),z.renderAnnouncements()},async loadRecentlyViewed(){if(!oe.getRecentProductIds().length){c.recentlyViewed=[],o.recentlyViewedSection.hidden=!0;return}c.recentlyViewed=await oe.loadRecentlyViewed();const t=c.recentlyViewed||[];if(!t.length){o.recentlyViewedSection.hidden=!0;return}o.recentlyViewedSection.hidden=!1,Z(o.recentlyViewedGrid,t,"Recently viewed is empty.",{screen:"recent"})},async loadProducts(){try{o.status.textContent="Yuklanmoqda...",Ne(o.grid,12);const{products:e,demoProducts:t,failed:r}=await ie.loadProducts();e.length?(c.products=e,c.demoProducts=t,ne(c.products,"Mahsulot topilmadi.",{screen:h.currentGridScreen||"home"})):(c.products=[],c.demoProducts=t,me(o.grid,r?"API data failed to load.":"Mahsulot topilmadi.")),ge()}catch(e){console.error("[LOAD PRODUCTS FAILED]",e),c.demoProducts=!1,me(o.grid,"API data failed to load.")}finally{Fe(),o.status.textContent=""}},async loadTodayDeals(){try{o.dealsStatus.textContent="Yuklanmoqda...",Ne(o.dealsGrid,5);const{deals:e,demoDeals:t,failed:r}=await ie.loadTodayDeals();c.todayDeals=e,c.demoDeals=t,r?me(o.dealsGrid,"API data failed to load."):Z(o.dealsGrid,c.todayDeals.slice(0,8),"Mahsulot topilmadi."),ge()}catch(e){console.error("[LOAD TODAY DEALS FAILED]",e),c.demoDeals=!1,me(o.dealsGrid,"API data failed to load.")}finally{Fe(),o.dealsStatus.textContent=""}},async loadHomeApi(){const e=await oe.loadHomeApiData({limit:10,page:0,size:20});if(!e.loaded)return c.homeLoadedFromApi=!1,o.homeApiSections.hidden=!0,!1;const{hits:t,discounts:r,newArrivals:a,products:s,todayDeals:l,homeApiSections:d}=e;return c.homeLoadedFromApi=!0,c.products=s,c.todayDeals=l,c.demoProducts=!1,c.demoDeals=!1,ge(),c.homeApiSections=d,z.renderHomeApiSections({hits:t,discounts:r,newArrivals:a}),ne(c.products,n("home.noProducts"),{screen:"home"}),Z(o.dealsGrid,r.slice(0,8),"Chegirmalar topilmadi.",{screen:"home-discounts"}),o.status.textContent="",o.dealsStatus.textContent="",Fe(),!0},async load({loadCart:e}={}){var t,r,a;c.selectedCategory="ALL",h.currentSearchQuery="",h.currentGridScreen="home",c.feedPage=0,o.title.textContent=n("home.recommended"),o.status.textContent=n("home.loading"),Ne(o.grid,12),Ne(o.dealsGrid,6);try{await Promise.all([z.loadCategories(),z.loadBanners(),z.loadAnnouncements()]),await z.loadHomeApi()||(await Promise.all([z.loadProducts(),z.loadTodayDeals()]),z.renderHomeApiSections({hits:c.products.slice(0,12),discounts:c.todayDeals.slice(0,10),newArrivals:c.products.slice(6,18)})),await z.loadRecentlyViewed(),z.renderPersonalizationSections(),e&&await e()}catch(s){console.error("Home loading failed:",s),c.demoProducts=!1,c.demoDeals=!1,me(o.grid,n("common.serverFailed"),n("common.tryAgain"))}finally{((t=o.status)==null?void 0:t.textContent)===n("home.loading")&&(o.status.textContent=""),(((r=o.dealsStatus)==null?void 0:r.textContent)===n("home.loading")||((a=o.dealsStatus)==null?void 0:a.textContent)==="Yuklanmoqda...")&&(o.dealsStatus.textContent="")}},prevBanner(){Nt(ar()-1)},nextBanner:sa,scrollToBanner:Nt,resetBannerAutoSlide:Ft},Po=()=>$("/api/cart",{requireAuth:!0,showError:!1}),Eo=e=>$("/api/cart",{method:"POST",body:JSON.stringify(e),requireAuth:!0}),Io=(e,t)=>$(`/api/cart/${e}`,{method:"PUT",body:JSON.stringify(t),requireAuth:!0}),Ao=e=>$(`/api/cart/${e}`,{method:"DELETE",requireAuth:!0});function zt(e=h.lastApiError){return e.includes("Session expired")||e==="Please login to continue"}function we(e){return{success:!1,sessionExpired:zt(),error:h.lastApiError||e}}function Lo(e){return e.reduce((t,r)=>{var s;const a=w((s=r.product)==null?void 0:s.originalPrice);return a>r.unitPrice?t+(a-r.unitPrice)*r.quantity:t},0)}function Dr(e,t,r=0,{checkout:a=!1}={}){const s=e.filter(f=>t.has(String(f.id))),l=s.reduce((f,k)=>f+k.lineTotal,0),d=Lo(s),u=!s.length||l>=Ie?0:Qi,p=Math.max(0,l+u-r),m=s.reduce((f,k)=>f+k.quantity,0);return a?{items:s,subtotal:l,deliveryFee:u,discount:d+r,catalogDiscount:d,couponDiscount:r,total:p,itemCount:m}:{items:s,subtotal:l,discount:d,deliveryFee:u,couponDiscount:r,total:p,itemCount:m,uniqueCount:s.length}}const se={async loadCart(){const e=await Po();return e===null?we("Cart could not be loaded."):{success:!0,items:O(e).map(mi)}},syncSelection(e,t,r){const a=t||new Set,s=e.map(u=>String(u.id)),l=new Set(s),d=r||new Set;return[...a].forEach(u=>{l.has(u)||a.delete(u)}),s.forEach(u=>{d.has(u)||a.add(u)}),s.length&&!a.size&&!d.size&&s.forEach(u=>a.add(u)),{selectedIds:a,knownItemIds:new Set(s)}},getSelectedItems(e,t){return e.filter(r=>t.has(String(r.id)))},calculateTotals(e,t,r=0){return Dr(e,t,r)},calculateCheckoutTotals(e,t,r=0){return Dr(e,t,r,{checkout:!0})},async addItem(e,t){return Eo({variantId:Number(e),quantity:Math.max(1,Number(t||1))})},async updateQuantity(e,t){return Io(e,{quantity:Math.max(1,Number(t||1))})},async removeItem(e){return Ao(e)},applyCoupon(e,t){const r=String(e||"").trim().toUpperCase();return r==="BEAUTY10"?{valid:!0,coupon:r,discount:Math.round(t*.1)}:r?{valid:!1,invalid:!0}:{valid:!1,invalid:!1}}};function To({item:e,selected:t=!1,loading:r=!1,labels:a={}}){const s=e.product||{},l=e.image||s.image||S.placeholderImage,d=w(s.originalPrice)*e.quantity,u=s.originalPrice>e.unitPrice,p=[e.variantLabel,s.brand?`(${s.brand})`:""].filter(Boolean).join(" "),{selectItem:m="Select item",remove:f="Remove",shipsToday:k="Ships today"}=a;return`
    <article class="app-cart-item ${r?"loading":""}">
      <label class="app-cart-check" title="${i(m)}">
        <input
          type="checkbox"
          data-cart-item-check="${i(e.id)}"
          ${t?"checked":""}
          aria-label="${i(m)}: ${i(e.name)}"
        />
        <span class="app-cart-check-ui ${t?"is-checked":""}" aria-hidden="true"></span>
      </label>
      <div class="app-cart-item-body">
        <button class="app-cart-item-remove" data-remove="${i(e.id)}" type="button" aria-label="${i(f)}">×</button>
        <div class="app-cart-item-main">
          <img src="${i(l)}" alt="${i(e.name)}" loading="eager" decoding="async" class="app-cart-item-image" />
          <div class="app-cart-item-info">
            <h3>${i(e.name)}</h3>
            ${p?`<p class="app-cart-variant">${i(p)}</p>`:""}
            <p class="app-cart-ship">${i(k)}</p>
          </div>
        </div>
        <div class="app-cart-item-foot">
          <div class="cart-stepper app-cart-stepper">
            <button data-cart-qty="minus" data-cart-id="${i(e.id)}" ${e.quantity<=1?"disabled":""} type="button" aria-label="Decrease">-</button>
            <span aria-live="polite">${e.quantity}</span>
            <button data-cart-qty="plus" data-cart-id="${i(e.id)}" type="button" aria-label="Increase">+</button>
          </div>
          <div class="app-cart-prices">
            ${u?`<span class="old-price">${L(d)}</span>`:""}
            <strong>${L(e.lineTotal)}</strong>
          </div>
        </div>
      </div>
    </article>
  `}function Do({totals:e,labels:t={}}){const{yourOrder:r="Your order",goodsCount:a="",discount:s="Discount",deliveryCost:l="Delivery",freeDelivery:d="Free",products:u="Products",total:p="Total"}=t;return`
    <div class="app-cart-order-card">
      <h3>${i(r)}</h3>
      <div class="app-cart-order-lines">
        <div class="app-cart-order-line">
          <span>${i(a)}</span>
        </div>
        ${e.discount>0?`
          <div class="app-cart-order-line app-cart-order-discount">
            <span>${i(s)}</span>
            <span>-${L(e.discount)}</span>
          </div>
        `:""}
        <div class="app-cart-order-line">
          <span>${i(l)}</span>
          <span>${e.deliveryFee?L(e.deliveryFee):i(d)}</span>
        </div>
        <div class="app-cart-order-line">
          <span>${i(u)}</span>
          <strong>${L(e.subtotal)}</strong>
        </div>
      </div>
      <div class="app-cart-order-total">
        <span>${i(p)}</span>
        <strong>${L(e.total)}</strong>
      </div>
    </div>
  `}function Ro({title:e,hint:t="",actionLabel:r="",actionAttrs:a='data-start-shopping type="button"'}){return`
    <div class="cart-empty app-cart-empty">
      <strong>${i(e)}</strong>
      ${t?`<p>${i(t)}</p>`:""}
      ${r?`<button class="primary-button" ${a}>${i(r)}</button>`:""}
    </div>
  `}function Mo({title:e,message:t,retryLabel:r="Try again"}){return`
    <div class="cart-empty app-cart-empty">
      <strong>${i(e)}</strong>
      <p>${i(t)}</p>
      <button class="secondary-button" data-cart-retry type="button">${i(r)}</button>
    </div>
  `}function tt(){return b.cartSelectedIds||(b.cartSelectedIds=new Set),b.cartSelectedIds}function or(){const{selectedIds:e,knownItemIds:t}=se.syncSelection(b.cartItems,tt(),b.cartKnownItemIds);b.cartSelectedIds=e,b.cartKnownItemIds=t}function na(){var d,u;const e=(d=o.cartItems)==null?void 0:d.querySelector("[data-cart-select-all]");if(!e)return;const t=ca().length,r=b.cartItems.length,a=r>0&&t===r,s=t>0&&t<r;e.checked=a,e.indeterminate=s;const l=((u=e.closest(".app-cart-check"))==null?void 0:u.querySelector(".app-cart-check-ui"))||e.nextElementSibling;l!=null&&l.classList.contains("app-cart-check-ui")&&(l.classList.toggle("is-indeterminate",s),l.classList.toggle("is-checked",a))}function ca(){return or(),se.getSelectedItems(b.cartItems,tt())}function la(){return se.calculateTotals(b.cartItems,tt(),b.cartCouponDiscount||0)}function da(e){return To({item:e,selected:tt().has(String(e.id)),loading:b.cartUpdatingIds.has(String(e.id)),labels:{selectItem:n("cart.selectItem"),remove:n("cart.remove"),shipsToday:n("cart.shipsToday")}})}function Je(e){const t=o.cartStickyProgress;if(!t)return;const r=Math.min(100,e/Ie*100),a=Math.max(0,Ie-e);t.innerHTML=e>=Ie?"":`
    <div class="app-cart-free-banner">
      <span>${i(n("cart.freeToHome"))}</span>
      <div class="app-cart-free-bar"><div style="width:${r}%"></div></div>
      <span class="hint">${i(n("cart.freeShippingRemaining",{amount:L(a)}))}</span>
    </div>
  `}function qo(){c.products.length&&Z(o.grid,c.products,n("home.noProducts"),{screen:h.currentGridScreen})}function Rr(){or();const e=la();if(o.cartCount.textContent=b.cartCount,o.cartSummary.textContent=n("orders.items",{count:e.itemCount}),o.cartTotal.textContent=L(e.subtotal),b.cartLoading){o.cartItems.innerHTML='<div class="cart-loading app-cart-loading"><div class="skeleton-card"></div><div class="skeleton-card"></div></div>',o.checkoutButton.disabled=!0,o.cartExtras&&(o.cartExtras.innerHTML=""),Je(0);return}if(b.cartError){o.cartItems.innerHTML=Mo({title:n("cart.unavailable"),message:b.cartError,retryLabel:n("common.tryAgain")}),o.checkoutButton.disabled=!0,o.cartExtras&&(o.cartExtras.innerHTML=""),Je(0);return}o.checkoutButton.disabled=!e.items.length;const t=c.products.slice(0,8).map((u,p)=>Ke(u,{screen:"cart-cross",position:p})).join(""),r=(c.recentlyViewed||[]).slice(0,6).map((u,p)=>Ke(u,{screen:"cart-recent",position:p})).join("");if(no(n,{recommendedHtml:t,recentHtml:r,subtotal:e.subtotal}),!b.cartItems.length){o.cartItems.innerHTML=Ro({title:n("cart.empty"),hint:n("cart.emptyHint"),actionLabel:n("home.startShopping")}),Je(0);return}const a=e.uniqueCount,s=b.cartItems.length,l=s>0&&a===s,d=a>0&&a<s;o.cartItems.innerHTML=`
    <div class="app-cart-delivery-card">
      <strong>${i(n("cart.deliveryCourier"))}</strong>
      <span>${i(n("cart.deliveryEta"))}</span>
    </div>
    <div class="app-cart-toolbar">
      <label class="app-cart-select-all">
        <span class="app-cart-check app-cart-check--toolbar">
          <input
            type="checkbox"
            data-cart-select-all
            ${l?"checked":""}
            aria-label="${i(n("cart.selectAll",{selected:a,total:s}))}"
          />
          <span class="app-cart-check-ui ${l?"is-checked":""} ${d?"is-indeterminate":""}" aria-hidden="true"></span>
        </span>
        <span class="app-cart-select-all-text">${i(n("cart.selectAll",{selected:a,total:s}))}</span>
      </label>
      <button class="app-cart-delete-selected" data-cart-delete-selected type="button" ${a?"":"disabled"}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
        ${i(n("cart.deleteSelected"))}
      </button>
    </div>
    <div class="app-cart-items">
      ${b.cartItems.map(u=>da(u)).join("")}
    </div>
    ${Do({totals:e,labels:{yourOrder:n("cart.yourOrder"),goodsCount:n("cart.goodsCount",{count:e.itemCount}),discount:n("cart.discount"),deliveryCost:n("cart.deliveryCost"),freeDelivery:n("cart.freeDelivery"),products:n("cart.products"),total:n("common.total")}})}
  `,na(),Je(e.subtotal),ve(o.cartItems),ve(o.cartExtras)}const x={render:Rr,renderCart:Rr,renderCartItemRow:da,renderCartStickyProgress:Je,renderAddToCartLoading:qo,getSelectedCartItems:ca,getCartTotals:la,getCartSelectedIds:tt,syncCartSelection:or,applyCartCheckboxUi:na},ht=(e={})=>$("/api/users/me",{requireAuth:!0,showError:!1,...e}),Bo=(e,t={})=>$("/api/users/me",{method:"PUT",body:JSON.stringify(e),requireAuth:!0,showError:!1,...t}),sr=()=>$("/api/orders",{requireAuth:!0,showError:!1}),Tt=e=>$(`/api/orders/${e}`,{requireAuth:!0,showError:!1}),Oo=e=>$(`/api/orders/${e}/history`,{requireAuth:!0,showError:!1}),xo=(e,t={})=>$("/api/orders",{method:"POST",body:JSON.stringify(e),requireAuth:!0,showError:!1,...t}),No=()=>$("/api/health",{showError:!1}),le={orderStatusModifier(e=""){const t=String(e||"").toUpperCase();return t==="DELIVERED"?"delivered":t==="CANCELED"||t==="CANCELLED"?"canceled":t==="SHIPPED"?"shipped":"pending"},getItemCount(e={}){const t=Array.isArray(e.items)?e.items:[];return t.length?t.reduce((r,a)=>r+(Number(a.quantity)||1),0):Number(e.itemCount)||0},getLineCount(e={}){return(Array.isArray(e.items)?e.items:[]).length||Number(e.itemCount)||0},isProfileActiveOrder(e){const t=String((e==null?void 0:e.status)||"").toUpperCase();return!!t&&!["DELIVERED","CANCELED","CANCELLED"].includes(t)},async enrichOrdersList(e=[]){const t=e.filter(a=>!Array.isArray(a.items)||!a.items.length);if(!t.length)return e;const r=new Map;return await Promise.all(t.slice(0,30).map(async a=>{const s=await Tt(a.id);s&&typeof s=="object"&&r.set(String(a.id),s)})),e.map(a=>r.get(String(a.id))||a)},async enrichProfileOrders(e=[]){const t=e.slice(0,2);return t.length?[...await Promise.all(t.map(async a=>{if(Array.isArray(a.items)&&a.items.length)return a;const s=await Tt(a.id);return s&&typeof s=="object"?s:a})),...e.slice(2)]:e},async loadOrders(){const e=await sr();return e===null?we("Orders could not be loaded."):{success:!0,orders:await this.enrichOrdersList(O(e))}},async loadOrderDetail(e){const[t,r]=await Promise.all([Tt(e),Oo(e)]);return t===null?{success:!1,error:we("Order detail could not be loaded.").error}:{success:!0,order:t,history:r===null?[]:O(r),historyWarning:r===null?"Status history could not be loaded.":""}},async createOrder(e,t={}){const r=await xo(e,{timeoutMs:25e3,...t});return r===null?we("Order could not be created."):{success:!0,order:r}},buildSuccessState(){return{checkoutConfirmOpen:!1,orderSuccess:null,checkoutError:"",orderSubmitting:!1}}},Fo=e=>$(`/api/reviews/product/${e}`,{showError:!1}),zo=()=>$("/api/reviews/my",{requireAuth:!0,showError:!1}),Ho=e=>$("/api/reviews",{method:"POST",body:JSON.stringify(e),requireAuth:!0,showError:!1}),Uo=e=>$("/api/uploads/presign",{method:"POST",requireAuth:!0,showError:!1,body:JSON.stringify(e)}),Se={reviewStats(e){const t=e.length,r=t?e.reduce((a,s)=>a+w(s.rating),0)/t:0;return{count:t,average:r}},async loadProductReviews(e){const t=await Fo(e);return t===null?{reviews:null,error:h.lastApiError||"Reviews could not be loaded."}:{reviews:O(t).map(Zr)}},async loadMyReviews(){const e=await zo();return e===null?we("Reviews could not be loaded."):{success:!0,items:ki(e).map(wi)}},parseReviewImageUrls(e){return String(e||"").split(/[\n,]+/).map(t=>t.trim()).filter(Boolean).slice(0,5)},validateReviewFiles(e){const t=new Set(["image/jpeg","image/png","image/webp"]),r=Array.from(e||[]);return r.length>5?{error:"Maximum 5 image files allowed.",files:[]}:r.find(l=>!t.has(l.type))?{error:"Only JPG, PNG and WEBP images are allowed.",files:[]}:r.find(l=>l.size>10*1024*1024)?{error:"Each image must be 10MB or smaller.",files:[]}:{files:r}},validateSubmitReview({productId:e,orderId:t,rating:r,content:a,manualImageUrlsText:s,files:l}){const d=[];(!e||!t)&&d.push("Product and order are required."),(r<1||r>5)&&d.push("Choose a rating from 1 to 5."),a||d.push("Review text is required.");const u=this.parseReviewImageUrls(s),p=this.validateReviewFiles(l);return p.error&&d.push(p.error),String(s||"").split(/[\n,]+/).filter(m=>m.trim()).length>5&&d.push("Maximum 5 image URLs allowed."),u.length+p.files.length>5&&d.push("Maximum 5 review images allowed."),{valid:d.length===0,errors:d,manualImageUrls:u,fileValidation:p}},async uploadReviewImages(e,{onProgress:t}={}){const r=[];for(let a=0;a<e.length;a+=1){const s=e[a];t==null||t(`Uploading image ${a+1} of ${e.length}...`,{index:a,total:e.length});const l=await Uo({fileName:s.name,contentType:s.type,folder:"reviews",fileSizeBytes:s.size});if(!(l!=null&&l.uploadUrl)||!(l!=null&&l.publicUrl))throw new Error(h.lastApiError||"Image upload could not be prepared.");const d=await fetch(l.uploadUrl,{method:"PUT",headers:{"Content-Type":s.type},body:s});if(!d.ok)throw new Error(`Image upload failed: HTTP ${d.status}`);r.push(l.publicUrl)}return t==null||t(r.length?"Images uploaded.":"",{done:!0}),r},async submitReview({productId:e,orderId:t,rating:r,content:a,imageUrls:s}){const l=await Ho({productId:Number(e),orderId:Number(t),rating:Number(r),content:a,imageUrls:s});return l===null?we("Review could not be submitted."):{success:!0,response:l}}},Ee={getOrderPreview(e){return(e||[]).filter(t=>le.isProfileActiveOrder(t)).slice(0,2)},async loadSnapshot(){const[e,t,r,a]=await Promise.all([ht(),sr(),Se.loadMyReviews(),oe.loadRecentlyViewed()]);return{userResponse:e,ordersResponse:t,reviewsResult:r,recentlyViewed:a}},async enrichProfileOrders(e){return le.enrichProfileOrders(e)},normalizeOrdersResponse(e){return e!==null?O(e):null},validateProfileUpdate({fullName:e,phone:t}){return!e||!t?{valid:!1,error:"Full name va phone majburiy."}:{valid:!0}},async updateProfile(e){return await Bo(e)===null?{success:!1,error:h.lastApiError||"Profile yangilanmadi."}:{success:!0,user:await ht()||null}},async checkHealth(){return No()}};function at({action:e,icon:t,label:r,value:a=""}){const s=a!==""&&a!==null&&a!==void 0?`<strong class="app-profile-stat-value">${i(String(a))}</strong>`:"";return`
    <button class="app-profile-stat" type="button" data-profile-action="${i(e)}">
      <span class="app-profile-stat-icon app-profile-stat-icon--${i(e)}">${t}</span>
      <span class="app-profile-stat-label">${i(r)}</span>
      ${s}
    </button>
  `}function qe({action:e,icon:t,label:r,trailing:a=""}){return`
    <button class="app-profile-menu-row" type="button" data-profile-action="${i(e)}">
      <span class="app-profile-menu-icon" aria-hidden="true">${t}</span>
      <span class="app-profile-menu-label">${i(r)}</span>
      ${a?`<span class="app-profile-menu-trailing">${a}</span>`:""}
      <svg class="app-profile-menu-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>
    </button>
  `}function Vo({imageUrl:e="",name:t="Profile"}){return e?`<img class="app-profile-avatar" src="${i(e)}" alt="${i(t)}" loading="eager" decoding="async" />`:`
    <div class="app-profile-avatar app-profile-avatar--placeholder" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M20 21a8 8 0 1 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/></svg>
    </div>
  `}function Ko({count:e=0,className:t="app-profile-notify-badge"}){if(e<=0)return"";const r=e>99?"99+":String(e);return`<span class="${i(t)}">${i(r)}</span>`}function ua(e=""){return n(`status.${e}`)||e||n("common.unknown")}function pa(e=""){const t=String(e||"").toUpperCase();return t==="NEW"||t==="CONFIRMED"||t==="PACKED"?n("status.PENDING"):ua(e)}function Go(){const e=fe(),t={uz:"O'zbek",en:"English",ru:"Русский",ko:"한국어"};return t[e]||t.en}function jo(e){const t=(Array.isArray(e.items)?e.items:[]).map(s=>Qt({...s,orderId:e.id})),r=t.slice(0,4).map(s=>`
    <img src="${i(s.image||S.placeholderImage)}" alt="" loading="eager" decoding="async" class="app-profile-order-thumb" />
  `).join(""),a=t.length>4?`<span class="app-profile-order-more">+${t.length-4}</span>`:"";return`
    <button class="app-profile-order-card" type="button" data-profile-order="${i(e.id)}">
      <span class="app-profile-order-status">${i(pa(e.status))}</span>
      <div class="app-profile-order-thumbs">${r||`<span class="app-profile-order-empty">${i(n("orders.items",{count:0}))}</span>`}${a}</div>
    </button>
  `}function Wo(e){return`
    <form class="app-profile-edit profile-edit" id="profileEditForm">
      <h3>${i(n("profile.edit"))}</h3>
      <label>Email<input value="${i(e.email||"")}" readonly /></label>
      <label>${i(n("profile.fullName"))}<input id="profileFullName" value="${i(e.fullName||"")}" required /></label>
      <label>${i(n("profile.phone"))}<input id="profilePhone" value="${i(e.phone||"")}" required /></label>
      <label>${i(n("profile.imageUrl"))}<input id="profileImage" value="${i(e.profileImage||"")}" /></label>
      <button class="primary-button full" id="profileSaveButton" type="submit">${i(n("profile.save"))}</button>
      <p class="form-message" id="profileMessage"></p>
    </form>
  `}const re={render(){var k,I;const e=P.user||{},t=Vo({imageUrl:e.profileImage,name:e.fullName||"Profile"}),r=((k=h.orders)==null?void 0:k.length)||0,a=((I=c.myReviews)==null?void 0:I.length)||0,s=b.cartCoupon?1:0,d=(c.recentlyViewed||[]).slice(0,6).map((D,M)=>Ke(D,{screen:"profile-recent",position:M})).join(""),u=Ee.getOrderPreview(h.orders),p=Ko({count:R.unreadCount}),m={orders:'<svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>',reviews:'<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',coupons:'<svg viewBox="0 0 24 24"><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"/><path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4z"/><path d="M12 8v8"/></svg>',feedback:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>'},f={promotions:'<svg viewBox="0 0 24 24"><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"/><path d="M12 3 20 8v4H4V8z"/></svg>',help:'<svg viewBox="0 0 24 24"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3z"/><path d="M14 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3z"/><path d="M8.5 11V7a3.5 3.5 0 1 1 7 0v4"/></svg>',news:'<svg viewBox="0 0 24 24"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11 6v12"/></svg>',language:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',privacy:'<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',terms:'<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>'};o.profileContent.innerHTML=`
      <div class="app-profile-page ${P.profileLoading?"is-loading":""}">
        <header class="app-profile-header">
          <h2>${i(n("profile.myProfile"))}</h2>
          <div class="app-profile-header-actions">
            <button class="app-profile-icon-btn" type="button" data-profile-action="notifications" aria-label="${i(n("notifications.title"))}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              ${p}
            </button>
            <button class="app-profile-icon-btn" type="button" data-profile-action="menu" aria-label="${i(n("profile.menu"))}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>
            </button>
          </div>
        </header>

        <section class="app-profile-user">
          ${t}
          <div class="app-profile-user-meta">
            <div class="app-profile-user-top">
              <h3>${i(e.fullName||n("profile.myProfile"))}</h3>
              <span class="app-profile-tier">${i(n("profile.tierWhite"))}</span>
            </div>
            <p class="app-profile-email">${i(e.email||"")}</p>
          </div>
        </section>

        <section class="app-profile-stats">
          ${at({action:"orders",icon:m.orders,label:n("profile.ordersStat"),value:r})}
          ${at({action:"reviews",icon:m.reviews,label:n("profile.reviewsStat"),value:a})}
          ${at({action:"promotions",icon:m.coupons,label:n("profile.couponsStat"),value:s})}
          ${at({action:"help",icon:m.feedback,label:n("profile.feedbackStat"),value:""})}
        </section>

        <section class="app-profile-section">
          <div class="app-profile-section-head">
            <h3>${i(n("profile.myOrders"))}</h3>
            <button class="app-profile-see-all" type="button" data-profile-action="orders">${i(n("profile.seeAll"))} ›</button>
          </div>
          <div class="app-profile-orders-rail">
            ${P.profileLoading&&!u.length?'<div class="app-profile-order-card skeleton-card"></div><div class="app-profile-order-card skeleton-card"></div>':u.length?u.map(D=>jo(D)).join(""):`<div class="app-profile-empty-block">${i(n("orders.none"))}</div>`}
          </div>
        </section>

        ${d?`
          <section class="app-profile-section app-profile-recent">
            <div class="app-profile-section-head">
              <h3>${i(n("home.recentlyViewed"))}</h3>
            </div>
            <div class="product-grid app-rail-grid">${d}</div>
          </section>
        `:""}

        <nav class="app-profile-menu" aria-label="${i(n("profile.settings"))}">
          ${qe({action:"promotions",icon:f.promotions,label:n("profile.promotions")})}
          ${qe({action:"help",icon:f.help,label:n("profile.help")})}
          ${qe({action:"news",icon:f.news,label:n("profile.news")})}
          ${qe({action:"language",icon:f.language,label:n("profile.language"),trailing:`<span>${i(Go())}</span>`})}
          ${qe({action:"privacy",icon:f.privacy,label:n("profile.privacy")})}
          ${qe({action:"terms",icon:f.terms,label:n("profile.terms")})}
        </nav>

        ${P.profileEditing?Wo(e):""}
        ${P.profileMenuOpen?`
          <div class="app-profile-menu-sheet open" id="profileMenuSheet">
            <button class="app-profile-menu-row" type="button" data-profile-action="edit">${i(n("profile.edit"))}</button>
            <button class="app-profile-menu-row app-profile-menu-row--danger" type="button" data-profile-action="logout">${i(n("profile.logout"))}</button>
          </div>
        `:""}
      </div>
    `,ve(o.profileContent)},async loadSnapshot({isLoggedIn:e,loadUnreadCount:t,updateAuthUi:r}={}){if(!(e!=null&&e()))return;const a=++P.profileLoadSeq;P.profileLoading=!0,re.render();try{const[s]=await Promise.all([Ee.loadSnapshot(),t==null?void 0:t()]),{userResponse:l,ordersResponse:d,reviewsResult:u,recentlyViewed:p}=s;if(a!==P.profileLoadSeq||(l&&(P.user=l,localStorage.setItem(S.storageKeys.user,JSON.stringify(l)),r==null||r()),d!==null&&(h.orders=Ee.normalizeOrdersResponse(d),P.profileLoading=!1,re.render(),h.orders=await Ee.enrichProfileOrders(h.orders),a!==P.profileLoadSeq)))return;u.success&&(c.myReviews=u.items),p.length&&(c.recentlyViewed=p)}catch{}finally{a===P.profileLoadSeq&&(P.profileLoading=!1,o.profileDrawer.classList.contains("open")&&re.render())}},async handleAction(e,t={}){var l,d,u,p,m,f,k,I,D,M,E,B,q,y,Q,rt,ur,pr,mr,hr,gr,fr,vr,yr,br,wr;const r=e.target.closest("[data-profile-order]");if(r){(l=t.closeProfile)==null||l.call(t),await((d=t.showOrders)==null?void 0:d.call(t)),await((u=t.openOrderDetail)==null?void 0:u.call(t,r.dataset.profileOrder));return}const a=e.target.closest("[data-profile-action]");if(!a)return;const s=a.dataset.profileAction;if(s==="menu"){P.profileMenuOpen=!P.profileMenuOpen,re.render();return}if(s==="edit"){P.profileMenuOpen=!1,P.profileEditing=!P.profileEditing,re.render();return}if(s==="logout"){P.profileMenuOpen=!1,(p=t.clearAuth)==null||p.call(t),(m=t.closeProfile)==null||m.call(t),(f=t.showToast)==null||f.call(t,n("profile.loggedOut"));return}if(s==="orders"){(k=t.closeProfile)==null||k.call(t),await((I=t.showOrders)==null?void 0:I.call(t));return}if(s==="favorites"){(D=t.closeProfile)==null||D.call(t),await((M=t.openFavorites)==null?void 0:M.call(t));return}if(s==="reviews"){(E=t.closeProfile)==null||E.call(t),await((B=t.openMyReviews)==null?void 0:B.call(t));return}if(s==="notifications"){(q=t.closeProfile)==null||q.call(t),await((y=t.openNotifications)==null?void 0:y.call(t));return}if(s==="language"){const Et=Yt,Ba=Et.indexOf(fe()),kr=Et[(Ba+1)%Et.length];(Q=t.setLanguage)==null||Q.call(t,kr),o.languageSelect&&(o.languageSelect.value=kr),(rt=t.applyTranslations)==null||rt.call(t),re.render();return}if(s==="privacy"){P.profileMenuOpen=!1,(ur=t.closeProfile)==null||ur.call(t),(pr=t.openPrivacy)==null||pr.call(t);return}if(s==="terms"){P.profileMenuOpen=!1,(mr=t.closeProfile)==null||mr.call(t),(hr=t.openTerms)==null||hr.call(t);return}if(s==="promotions"||s==="news"){(gr=t.showToast)==null||gr.call(t,n("profile.comingSoon"),"info");return}if(s==="help"){P.profileMenuOpen=!1,(fr=t.closeProfile)==null||fr.call(t),(vr=t.openSupport)==null||vr.call(t);return}if(s==="addresses"||s==="receivers"){(yr=t.closeProfile)==null||yr.call(t),await((br=t.prepareCheckout)==null?void 0:br.call(t));return}(wr=t.showToast)==null||wr.call(t,n("profile.comingSoon"),"info")}},Yo=e=>$("/api/auth/login",{method:"POST",body:JSON.stringify(e),showError:!1}),_o=e=>$("/api/auth/register",{method:"POST",body:JSON.stringify(e),showError:!1}),Jo=e=>$("/api/auth/firebase",{method:"POST",body:JSON.stringify(e),showError:!1}),_={extractSession(e){const t=(e==null?void 0:e.token)||(e==null?void 0:e.accessToken)||(e==null?void 0:e.jwt)||"",r={id:e==null?void 0:e.id,email:e==null?void 0:e.email,fullName:e==null?void 0:e.fullName,phone:(e==null?void 0:e.phone)||"",profileImage:(e==null?void 0:e.profileImage)||""},a=(e==null?void 0:e.role)||"";return{token:t,user:r,role:a}},persistSession({token:e,user:t,role:r}){e&&localStorage.setItem(S.storageKeys.accessToken,e),localStorage.setItem(S.storageKeys.user,JSON.stringify(t)),localStorage.setItem(S.storageKeys.role,r)},clearSession(){localStorage.removeItem(S.storageKeys.accessToken),localStorage.removeItem(S.storageKeys.legacyAccessToken),localStorage.removeItem(S.storageKeys.user),localStorage.removeItem(S.storageKeys.legacyUser),localStorage.removeItem(S.storageKeys.role)},saveAuth(e,t){const r=this.extractSession(e);return this.persistSession(r),t.accessToken=r.token,t.user=r.user,t.role=r.role,r},clearAuthState(e,t){this.clearSession(),e.accessToken="",e.user=null,e.role="",t.myReviews=[],t.myReviewsLoading=!1,t.myReviewsError=""},isLoggedIn(){return!!dt()},async validateAuthOnStartup(){if(!dt())return{authenticated:!1};const e=await ht({silentAuth:!0});return e?(localStorage.setItem(S.storageKeys.user,JSON.stringify(e)),{authenticated:!0,profile:e}):{authenticated:!1,invalid:!0}},async preloadProfileData(){const[e,t,r]=await Promise.all([ht(),sr(),Se.loadMyReviews()]);let a=null;return t!==null&&(a=await Ee.enrichProfileOrders(O(t))),{userResponse:e,orders:a,reviewsResult:r}},isValidEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)},validateLoginForm(e,t){const r=[];return(!e||!this.isValidEmail(e))&&r.push({field:"loginEmail",messageKey:"auth.emailRequired"}),(!t||t.length<6)&&r.push({field:"loginPassword",messageKey:"auth.passwordMin"}),{valid:r.length===0,errors:r}},validateRegisterForm({fullName:e,email:t,phone:r,password:a,confirmPassword:s}){const l=[];return e||l.push({field:"registerFullName",messageKey:"auth.fullNameRequired"}),(!t||!this.isValidEmail(t))&&l.push({field:"registerEmail",messageKey:"auth.emailRequired"}),r||l.push({field:"registerPhone",messageKey:"auth.phoneRequired"}),(!a||a.length<6)&&l.push({field:"registerPassword",messageKey:"auth.passwordMin"}),a!==s&&l.push({field:"registerConfirmPassword",messageKey:"auth.passwordMismatch"}),{valid:l.length===0,errors:l}},async submitLogin({email:e,password:t}){const r=await Yo({email:e,password:t});return r!=null&&r.token?{success:!0,response:r}:{success:!1,error:h.lastApiError||"Email yoki parol noto‘g‘ri."}},async submitRegister({fullName:e,email:t,phone:r,password:a}){const s=await _o({fullName:e,email:t,phone:r,password:a});return s===null?{success:!1,error:h.lastApiError||"Email allaqachon mavjud yoki server javob bermadi."}:{success:!0,response:s,email:t}},async submitFirebaseLogin(e){const t=await Jo({idToken:e});return t!=null&&t.token?{success:!0,response:t}:{success:!1,error:h.lastApiError||"Server Google hisobini qabul qilmadi."}},mapFirebaseError(e){return e==="auth/popup-closed-by-user"||e==="auth/cancelled-popup-request"?{cancelled:!0}:e==="auth/popup-blocked"?{cancelled:!1,message:"Popup bloklandi. Brauzerda popup'ga ruxsat bering."}:{cancelled:!1,message:"Google bilan kirishda xatolik yuz berdi."}}},Qo={apiKey:"AIzaSyAh668pltxmHVtAi_dN1cLO2faTqRyVbUU",authDomain:"cosmetic-app-75fb9.firebaseapp.com",projectId:"cosmetic-app-75fb9",storageBucket:"cosmetic-app-75fb9.firebasestorage.app",messagingSenderId:"1075730526246",appId:"1:1075730526246:web:ac4b809f7353e4bbac36e7",measurementId:"G-KVHDLM71LR"};let it=null;function Zo(){if(!it){const e=Na(Qo);it=Fa(e),it.useDeviceLanguage()}return it}async function Xo(){const e=Zo(),t=new Oa;return t.setCustomParameters({prompt:"select_account"}),(await xa(e,t)).user.getIdToken()}function ma(e){b.cartItems=e,b.cart=e,b.cartCount=e.reduce((t,r)=>t+r.quantity,0),b.cartTotal=e.reduce((t,r)=>t+r.lineTotal,0)}function Ht(){ma([]),b.cartLoading=!1,b.cartError="",b.cartUpdatingIds=new Set,b.cartSelectedIds=new Set,b.cartKnownItemIds=new Set}function ha(e,t="Rating"){return bt({rating:e,label:t})}function es({stats:e,distribution:t,reviewsLabel:r="reviews"}){return`
    <div class="reviews-summary-grid">
      <div class="reviews-avg">
        <strong>${e.average.toFixed(1)}</strong>
        ${bt({rating:e.average})}
        <p class="hint">${e.count} ${i(r)}</p>
      </div>
      <div class="rating-bars">
        ${t.map(a=>`
          <div class="rating-bar-row">
            <span>${a.star}★</span>
            <div class="rating-bar-track"><div class="rating-bar-fill" style="width:${a.pct}%"></div></div>
            <span>${a.count}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `}function ts({review:e,helpful:t=!1,verifiedLabel:r="Verified purchase",noTextLabel:a="No text review",helpfulLabel:s="Helpful"}){var d;const l=!!e.orderId;return`
    <article class="review-card-premium">
      <div class="review-head">
        <div>
          <strong>${i(e.userName)}</strong>
          ${l?`<span class="review-verified">✓ ${i(r)}</span>`:""}
          <p class="hint">${Zt(e.createdAt)}</p>
        </div>
        ${bt({rating:e.rating})}
      </div>
      <p>${i(e.content||a)}</p>
      ${(d=e.imageUrls)!=null&&d.length?ReviewImages({imageUrls:e.imageUrls}):""}
      <button class="review-helpful ${t?"active":""}" data-review-helpful="${i(e.id)}" type="button">
        👍 ${i(s)}${t?" ✓":""}
      </button>
    </article>
  `}function rs(e){return Se.reviewStats(e)}function as(){return oe.getRecentProductIds()}function is(e,t){const r=String(e??"");return r.length<=t?r:`${r.slice(0,Math.max(0,t-1)).trimEnd()}…`}const A={renderDetailLoading(e=!1){const t=e?o.productDetailPageContent:o.detailContent;t.innerHTML=`
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
        <strong>${i(n("product.notFound"))}</strong>
        <p>${i(c.detailError||"Mahsulot topilmadi.")}</p>
        <button class="primary-button" data-route-home type="button">${i(n("product.backToShopping"))}</button>
      </div>
    `},renderProductDetail(e){const t=e.variants.find(M=>String(M.id)===String(c.selectedVariantId))||null,r=[...new Set([e.image,...e.images,...e.detailImages].filter(Boolean))],a=Math.min(c.pdpGalleryIndex||0,Math.max(0,r.length-1)),s=r[a]||e.image,l=(t==null?void 0:t.discountPrice)??(t==null?void 0:t.price)??e.finalPrice,d=(t==null?void 0:t.price)??e.originalPrice,u=(t==null?void 0:t.stock)??e.stock,p=C.favoriteIds.has(String(e.id))||!!e.favorite,m=Ge().includes(String(e.id)),f=h.currentRoute==="product",k=f?o.productDetailPageContent:o.detailContent,I=w(u)>0&&w(u)<=5,D=new Date(Date.now()+3*864e5).toLocaleDateString(fe(),{weekday:"short",month:"short",day:"numeric"});k.innerHTML=`
      ${f?`
        <div class="breadcrumbs">
          <button data-route-home type="button">${i(n("product.home")||n("home.all"))}</button>
          <span>/</span>
          <button data-brand="${i(e.brand||"")}" type="button">${i(e.brand||n("header.catalog"))}</button>
          <span>/</span>
          <button data-category="${i(e.category||"ALL")}" type="button">${i(e.category?ue(e.category):n("header.catalog"))}</button>
          <span>/</span>
          <span>${i(is(e.name,42))}</span>
        </div>
      `:`
        <div class="drawer-head">
          <h2>${i(n("product.viewDetails"))}</h2>
          <button class="icon-button" data-close-detail type="button" aria-label="Yopish">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
      `}
      <div class="pdp-layout">
        <div class="pdp-gallery-wrap">
          <div class="pdp-main-image" data-pdp-zoom>
            <img src="${i(s)}" alt="${i(e.name)}" id="pdpMainImage" />
          </div>
          ${r.length>1?`
            <div class="pdp-thumbs" role="tablist">
              ${r.slice(0,10).map((M,E)=>`
                <button class="pdp-thumb ${E===a?"active":""}" type="button" data-pdp-thumb="${E}" role="tab" aria-selected="${E===a}">
                  <img src="${i(M)}" alt="" loading="lazy" />
                </button>
              `).join("")}
            </div>
          `:""}
          <button class="ghost-button full" type="button" data-pdp-fullscreen style="margin-top:8px">${i(n("product.fullscreen"))}</button>
          <div class="media-placeholder">${i(n("product.video360Placeholder"))}</div>
        </div>
        <div class="pdp-purchase-card">
          <div class="pdp-badges">
            <span class="pdp-badge pdp-badge--auth">✓ ${i(n("product.authentic"))}</span>
            <span class="pdp-badge pdp-badge--official">★ ${i(n("product.officialStore"))}</span>
            ${I?`<span class="pdp-badge pdp-badge--stock-low">${i(n("product.lowStock"))}</span>`:""}
          </div>
          <p class="hint brand-name">${i(e.brand||e.category)}</p>
          <h2 class="detail-title">${i(e.name)}</h2>
          <div class="pdp-price-block">
            <h3>${L(l)}</h3>
            ${d>l?`<p class="old-price">${L(d)}</p>`:""}
          </div>
          <div class="pdp-price-breakdown">
            <div><span>${i(n("product.listPrice"))}</span><span>${L(d)}</span></div>
            ${e.discountPercent?`<div><span>${i(n("product.discount"))}</span><span>-${e.discountPercent}%</span></div>`:""}
            <div><strong>${i(n("cart.subtotal"))}</strong><strong>${L(l)}</strong></div>
            <p class="hint">${i(n("product.installmentPlaceholder"))}</p>
          </div>
          <p class="hint">${ha(e.ratingAvg)} ${e.ratingAvg.toFixed(1)} (${e.reviewCount}) · ${i(n("product.sold",{count:e.soldCount}))}</p>
          <div class="pdp-actions-row" style="margin:12px 0">
            <button class="secondary-button detail-favorite ${p?"active":""}" data-detail-favorite="${i(e.id)}" type="button">${i(n(p?"product.saved":"product.save"))}</button>
            <button class="secondary-button ${m?"active":""}" data-compare="${i(e.id)}" type="button">${i(n("product.compare"))}</button>
          </div>
          ${e.variants.length?A.renderVariantSelectors(e):`<p class="hint">${i(n("product.variantUnavailable"))}</p>`}
          <p class="hint">${w(u)>0?i(n("product.stock",{count:u})):i(n("product.outOfStock"))}</p>
          <div class="quantity-row">
            <button class="secondary-button" data-qty="minus" type="button" aria-label="Decrease">-</button>
            <input id="quantityInput" value="${c.selectedQuantity}" inputmode="numeric" aria-label="${i(n("product.quantity"))}" />
            <button class="secondary-button" data-qty="plus" type="button" aria-label="Increase">+</button>
          </div>
          <div class="pdp-shipping-estimate">
            <strong>${i(n("product.estimatedDelivery"))}</strong>
            <p class="pdp-delivery-countdown">🚚 ${i(D)}</p>
            <p class="hint">${i(n("product.delivery"))}</p>
          </div>
          <div class="cart-coupon" style="margin-top:12px">
            <input type="text" placeholder="${i(n("cart.couponPlaceholder"))}" data-pdp-coupon />
            <button class="secondary-button" type="button" data-pdp-apply-coupon>${i(n("cart.applyCoupon"))}</button>
          </div>
          <div class="pdp-actions">
            <button class="primary-button full" data-detail-add type="button">${i(n("product.addToCartFull"))}</button>
          </div>
          <div class="delivery-info">
            <span>${i(n("product.secure"))}</span>
            <span>${i(n("product.original"))}</span>
          </div>
        </div>
      </div>
      <div class="pdp-tabs">
        <nav class="pdp-tab-nav" role="tablist">
          <button class="pdp-tab-btn ${c.pdpActiveTab==="description"?"active":""}" data-pdp-tab="description" type="button" role="tab">${i(n("product.description"))}</button>
          <button class="pdp-tab-btn ${c.pdpActiveTab==="details"?"active":""}" data-pdp-tab="details" type="button" role="tab">${i(n("product.details"))}</button>
          <button class="pdp-tab-btn ${c.pdpActiveTab==="reviews"?"active":""}" data-pdp-tab="reviews" type="button" role="tab">${i(n("product.reviews"))}</button>
        </nav>
        <div class="pdp-tab-panel" ${c.pdpActiveTab==="description"?"":"hidden"} data-pdp-panel="description">
          <p class="hint">${i(e.description||n("common.unavailable"))}</p>
          ${e.detailImages.length?`<div class="detail-image-stack">${e.detailImages.map(M=>`<img src="${i(M)}" alt="" loading="lazy" class="img-loading" />`).join("")}</div>`:""}
        </div>
        <div class="pdp-tab-panel" ${c.pdpActiveTab==="details"?"":"hidden"} data-pdp-panel="details">
          <p class="hint">${i(n("home.categories"))}: ${i(e.category?ue(e.category):"-")}</p>
          <p class="hint">${i(n("filter.brand"))}: ${i(e.brand||"-")}</p>
        </div>
        <div class="pdp-tab-panel reviews-premium" ${c.pdpActiveTab==="reviews"?"":"hidden"} data-pdp-panel="reviews">
          ${A.renderProductReviews(e.id)}
        </div>
      </div>
      ${f?A.renderRecommendations():""}
      ${f?A.renderFrequentlyBought(e):""}
      ${f?A.renderRecentlyViewedStrip():""}
      ${f?`
        <div class="mobile-buy-bar">
          <strong>${L(l)}</strong>
          <button class="primary-button" data-detail-add type="button">${i(n("product.addToCart"))}</button>
        </div>
      `:""}
    `,ia(k),ve(k),A.initPdpGallerySwipe(k)},renderVariantSelectors(e){const t=[],r=[];e.variants.forEach(l=>{const u=String(l.label||"").split(/[\/,\-]/).map(p=>p.trim()).filter(Boolean);u[0]&&t.push(u[0]),u[1]&&r.push(u[1])});const a=[...new Set(t)],s=[...new Set(r)];return a.length>1||s.length>1?`
        ${a.length?`<div class="pdp-variant-section"><p class="pdp-variant-label">${i(n("filter.color"))}</p><div class="color-swatches">${a.map(l=>`<button class="color-swatch" type="button" data-variant-color="${i(l)}">${i(l)}</button>`).join("")}</div></div>`:""}
        ${s.length?`<div class="pdp-variant-section"><p class="pdp-variant-label">${i(n("filter.size"))}</p><div class="size-options">${e.variants.map(l=>{const d=String(l.id)===String(c.selectedVariantId),u=Number(l.stock||0)<=0;return`<button class="size-option ${d?"active":""}" data-variant="${i(l.id)}" type="button" ${u?"disabled":""}>${i(l.label||l.id)}</button>`}).join("")}</div></div>`:""}
      `:A.renderVariantButtons(e)},renderPdpProductStrip(e,t,r){return t.length?`
      <section class="recommended-section app-feed-block app-feed-rail">
        <div class="app-section-head">
          <h2>${i(e)}</h2>
        </div>
        <div class="product-grid app-rail-grid">
          ${t.map((a,s)=>Ke(a,{screen:r,position:s})).join("")}
        </div>
      </section>
    `:""},renderFrequentlyBought(e){const t=(c.recommendedOthers||c.recommendedProducts||[]).slice(0,3);return t.length?A.renderPdpProductStrip(n("product.frequentlyBought"),t,"fbt"):""},renderRecentlyViewedStrip(){return!as().filter(t=>{var r;return String(t)!==String((r=c.selectedDetailProduct)==null?void 0:r.id)}).length||!c.recentlyViewed.length?"":A.renderPdpProductStrip(n("home.recentlyViewed"),c.recentlyViewed.slice(0,6),"recent")},initPdpGallerySwipe(e){const t=e.querySelector(".pdp-main-image");if(!t||!("ontouchstart"in window))return;let r=0;t.addEventListener("touchstart",a=>{r=a.touches[0].clientX},{passive:!0}),t.addEventListener("touchend",a=>{var d,u,p;const s=a.changedTouches[0].clientX-r;if(Math.abs(s)<40)return;const l=[...new Set([(d=c.selectedDetailProduct)==null?void 0:d.image,...((u=c.selectedDetailProduct)==null?void 0:u.images)||[],...((p=c.selectedDetailProduct)==null?void 0:p.detailImages)||[]].filter(Boolean))];c.pdpGalleryIndex=Math.max(0,Math.min(l.length-1,(c.pdpGalleryIndex||0)+(s<0?1:-1))),A.renderProductDetail(c.selectedDetailProduct)},{passive:!0})},renderRecommendations(){if(c.recommendationsLoading)return`
        <section class="recommended-section app-feed-block app-feed-rail">
          <div class="app-section-head">
            <h2>${i(n("home.recommended"))}</h2>
          </div>
          <div class="product-grid app-rail-grid">
            <div class="skeleton-card"></div><div class="skeleton-card"></div><div class="skeleton-card"></div><div class="skeleton-card"></div>
          </div>
        </section>
      `;if(c.recommendationsError)return`
        <section class="recommended-section app-feed-block app-feed-rail">
          <div class="detail-error-page compact">
            <strong>Recommendations unavailable</strong>
            <p>${i(c.recommendationsError)}</p>
          </div>
        </section>
      `;const e=[[n("home.similar"),c.recommendedSimilar||[],"recommendations-similar"],[n("home.others"),c.recommendedOthers||[],"recommendations-others"]].filter(([,t])=>t.length);return e.length?e.map(([t,r,a])=>A.renderPdpProductStrip(t,r,a)).join(""):c.recommendedProducts.length?A.renderPdpProductStrip(n("home.recommended"),c.recommendedProducts,"recommendations"):""},renderProductReviews(e){var p;const t=String(e);let r=[...c.productReviewsByProductId[t]||[]];const a=c.productReviewsLoading[t],s=c.productReviewsError[t];if(a)return'<div class="reviews-loading"><div class="skeleton-card"></div><div class="skeleton-card"></div></div>';if(s)return`
        <div class="reviews-inline-error">
          <p>${i(s)}</p>
          <button class="secondary-button" data-reviews-retry="${i(e)}" type="button">${i(n("common.tryAgain"))}</button>
        </div>
      `;if(c.reviewSearchQuery){const m=c.reviewSearchQuery.toLowerCase();r=r.filter(f=>String(f.content||"").toLowerCase().includes(m))}if(c.reviewFilterRating>0&&(r=r.filter(m=>w(m.rating)>=c.reviewFilterRating)),c.reviewSort==="helpful"?r.sort((m,f)=>(c.reviewHelpfulIds.has(String(f.id))?1:0)-(c.reviewHelpfulIds.has(String(m.id))?1:0)):c.reviewSort==="rating-high"?r.sort((m,f)=>w(f.rating)-w(m.rating)):c.reviewSort==="rating-low"&&r.sort((m,f)=>w(m.rating)-w(f.rating)),!r.length&&!((p=c.productReviewsByProductId[t])!=null&&p.length))return`<div class="reviews-empty"><strong>${i(n("reviews.none"))}</strong></div>`;const l=c.productReviewsByProductId[t]||[],d=rs(l),u=[5,4,3,2,1].map(m=>{const f=l.filter(k=>Math.round(w(k.rating))===m).length;return{star:m,count:f,pct:l.length?f/l.length*100:0}});return`
      ${es({stats:d,distribution:u,reviewsLabel:n("product.reviews")})}
      <div class="reviews-toolbar">
        <input type="search" placeholder="${i(n("reviews.search"))}" value="${i(c.reviewSearchQuery||"")}" data-review-search />
        <select data-review-sort>
          <option value="newest" ${c.reviewSort==="newest"?"selected":""}>${i(n("reviews.sortNewest"))}</option>
          <option value="rating-high" ${c.reviewSort==="rating-high"?"selected":""}>${i(n("reviews.sortRatingHigh"))}</option>
          <option value="rating-low" ${c.reviewSort==="rating-low"?"selected":""}>${i(n("reviews.sortRatingLow"))}</option>
          <option value="helpful" ${c.reviewSort==="helpful"?"selected":""}>${i(n("reviews.sortHelpful"))}</option>
        </select>
        <select data-review-filter-rating>
          <option value="0">${i(n("reviews.allRatings"))}</option>
          ${[5,4,3,2,1].map(m=>`<option value="${m}" ${c.reviewFilterRating===m?"selected":""}>${m}★+</option>`).join("")}
        </select>
      </div>
      <div class="review-list">
        ${r.length?r.map(A.renderReviewCard).join(""):`<p class="hint">${i(n("search.noResults"))}</p>`}
      </div>
    `},renderReviewCard(e){return ts({review:e,helpful:c.reviewHelpfulIds.has(String(e.id)),verifiedLabel:n("reviews.verified"),noTextLabel:n("reviews.noText"),helpfulLabel:n("reviews.helpful")})},renderVariantButtons(e){return`
      <div class="variant-options">
        ${e.variants.map(t=>{const r=String(t.id)===String(c.selectedVariantId),a=Number(t.stock||0)<=0;return`
            <button class="variant-option ${r?"active":""}" data-variant="${i(t.id)}" ${a?"disabled":""} type="button">
              ${i(t.label||`Variant #${t.id}`)}
              ${t.price?` · ${i(L(t.discountPrice??t.price))}`:""}
            </button>
          `}).join("")}
      </div>
    `},renderAddToCartLoading(){document.querySelectorAll("[data-detail-add]").forEach(t=>{var a;const r=b.addingProductIds.has(String((a=c.selectedDetailProduct)==null?void 0:a.id));t.disabled=r,t.textContent=r?n("product.adding"):t.closest(".mobile-buy-bar")?n("product.addToCart"):n("product.addToCartFull")}),c.products.length&&Z(o.grid,c.products,n("home.noProducts"),{screen:h.currentGridScreen})}},os=window.matchMedia("(prefers-reduced-motion: reduce)");function Ct(){return os.matches}function ss(e){!e||Ct()||(e.classList.add("animating"),window.setTimeout(()=>e.classList.remove("animating"),400))}function ns(e,t){if(!e||!t||Ct())return;const r=document.getElementById("cartButton");if(!r)return;const a=r.getBoundingClientRect(),s=document.createElement("img");s.className="cart-fly",s.src=e,s.alt="",s.style.left=`${t.left}px`,s.style.top=`${t.top}px`,document.body.appendChild(s);const l=a.left+a.width/2-t.left-24,d=a.top+a.height/2-t.top-24;s.animate([{transform:"translate(0, 0) scale(1)",opacity:1},{transform:`translate(${l}px, ${d}px) scale(0.2)`,opacity:.6}],{duration:520,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}).finished.then(()=>s.remove())}let Mr=0,Dt=!1;function cs(){const e=document.querySelector(".site-header");if(!e)return;e.classList.add("header-glass");const t=()=>{Dt||(Dt=!0,requestAnimationFrame(()=>{const r=window.scrollY,a=r-Mr;r>80&&a>8?e.classList.add("header-hidden"):(a<-4||r<40)&&e.classList.remove("header-hidden"),Mr=r,Dt=!1}))};window.addEventListener("scroll",t,{passive:!0})}function ls(){const e=document.getElementById("homeView"),t=document.getElementById("productDetailPage"),r=new MutationObserver(()=>{const a=(t==null?void 0:t.hidden)===!1?t:e;!a||Ct()||(a.classList.remove("page-enter"),a.offsetWidth,a.classList.add("page-enter"))});e&&r.observe(e,{attributes:!0,attributeFilter:["hidden"]}),t&&r.observe(t,{attributes:!0,attributeFilter:["hidden"]})}function ds(){let e=document.getElementById("offlineBanner");e||(e=document.createElement("div"),e.id="offlineBanner",e.className="offline-banner",e.textContent="You are offline. Some features may be unavailable.",document.body.appendChild(e));const t=()=>e.classList.toggle("visible",!navigator.onLine);window.addEventListener("online",t),window.addEventListener("offline",t),t()}function us(e,t){if(Ct()||!t)return;const r=t.getBoundingClientRect(),a=Math.max(r.width,r.height),s=document.createElement("span");s.style.cssText=`
    position:absolute;border-radius:50%;pointer-events:none;
    width:${a}px;height:${a}px;
    left:${e.clientX-r.left-a/2}px;
    top:${e.clientY-r.top-a/2}px;
    background:rgba(255,255,255,0.35);
    transform:scale(0);opacity:1;
  `;const l=t.style.position;(!l||l==="static")&&(t.style.position="relative"),t.style.overflow="hidden",t.appendChild(s),s.animate([{transform:"scale(0)",opacity:1},{transform:"scale(2.5)",opacity:0}],{duration:500,easing:"ease-out"}).finished.then(()=>s.remove())}const K={async load(){if(!_.isLoggedIn()){Ht(),x.render();return}b.cartLoading=!0,b.cartError="",x.render();const e=await se.loadCart();if(b.cartLoading=!1,!e.success){if(e.sessionExpired){Ht();return}b.cartError=e.error,x.render();return}ma(e.items),x.render()},async add(e,t,r,{showLoginRequired:a}={}){if(!_.isLoggedIn()){a==null||a();return}const s=Math.max(1,Number(r||1)),l=await ie.resolveAddToCartVariant(e,t);if(l.navigateToProduct){Ae(l.product.id);return}const d=l.variantId;if(!d){T(n("product.variantUnavailable"),"warning");return}b.addingProductIds.add(String(e)),A.renderAddToCartLoading(!0);const u=await se.addItem(d,s);if(b.addingProductIds.delete(String(e)),A.renderAddToCartLoading(!1),u!==null){const p=document.querySelector(`[data-product="${e}"] .product-image`);p&&ns(p.src,p.getBoundingClientRect()),T(n("cart.added"),"success"),await K.load()}},async removeItem(e){b.cartUpdatingIds.add(String(e)),x.render();const t=await se.removeItem(e);b.cartUpdatingIds.delete(String(e)),t!==null?(T(n("cart.itemRemoved"),"success"),await K.load()):x.render()},async updateQuantity(e,t){const r=Math.max(1,Number(t||1));b.cartUpdatingIds.add(String(e)),x.render();const a=await se.updateQuantity(e,r);b.cartUpdatingIds.delete(String(e)),a!==null?(T(n("cart.quantityUpdated"),"success"),await K.load()):x.render()},async removeSelected(){var t;const e=x.getSelectedCartItems();if(e.length){e.forEach(r=>b.cartUpdatingIds.add(String(r.id))),x.render();for(const r of e)await se.removeItem(r.id),b.cartUpdatingIds.delete(String(r.id)),(t=b.cartSelectedIds)==null||t.delete(String(r.id));T(n("cart.itemRemoved"),"success"),await K.load()}},getTotals(){return x.getCartTotals()},getSelectedItems(){return x.getSelectedCartItems()}},He={pickDefaultVariant(e){return ie.pickDefaultVariant(e)},async loadDetailPage(e){var a;fa(),h.currentRoute="product",c.detailLoading=!0,c.detailError="",c.selectedDetailProduct=null,c.recommendedProducts=[],c.recommendedSimilar=[],c.recommendedOthers=[],c.recommendationsError="",A.renderDetailLoading(!0);const t=c.products.find(s=>String(s.id)===String(e))||{},r=await ie.loadProduct(e,t);if(c.detailLoading=!1,!r.id){c.detailError=h.lastApiError||"Mahsulot topilmadi.",A.renderProductDetailError();return}r.favorite=C.favoriteIds.has(String(r.id))||r.favorite,c.selectedDetailProduct=r,c.selectedVariantId=((a=He.pickDefaultVariant(r))==null?void 0:a.id)||null,c.selectedQuantity=1,c.pdpGalleryIndex=0,c.pdpActiveTab="description",c.reviewSearchQuery="",c.reviewFilterRating=0,document.title=`${r.name} - BEAUTY SKIN KOREA`,oe.addRecentProduct(r.id),ho(r.id),A.renderProductDetail(r),await He.loadReviews(r.id),await He.loadRecommendations(r)},async loadRecommendations(e){var r;c.recommendationsLoading=!0,c.recommendationsError="",A.renderProductDetail(e);const t=await ie.loadRecommendations(e,h.sessionId);if(t.mode==="api"){c.recommendationsLoading=!1,c.recommendedProducts=[],c.recommendedSimilar=t.similar,c.recommendedOthers=t.others,A.renderProductDetail(c.selectedDetailProduct);return}c.recommendationsLoading=!1,t.failed&&(c.recommendationsError=h.lastApiError||"Recommendations could not be loaded."),c.recommendedProducts=t.fallback.map(a=>({...a,favorite:C.favoriteIds.has(String(a.id))||a.favorite})),c.recommendedSimilar=[],c.recommendedOthers=[],((r=c.selectedDetailProduct)==null?void 0:r.id)!==void 0&&String(c.selectedDetailProduct.id)===String(e.id)&&A.renderProductDetail(c.selectedDetailProduct)},async loadReviews(e){var s,l;if(!e)return;const t=String(e);c.productReviewsLoading[t]=!0,c.productReviewsError[t]="",((s=c.selectedDetailProduct)==null?void 0:s.id)!==void 0&&String(c.selectedDetailProduct.id)===t&&A.renderProductDetail(c.selectedDetailProduct);const{reviews:r,error:a}=await Se.loadProductReviews(e);c.productReviewsLoading[t]=!1,r===null?c.productReviewsError[t]=a:c.productReviewsByProductId[t]=r,((l=c.selectedDetailProduct)==null?void 0:l.id)!==void 0&&String(c.selectedDetailProduct.id)===t&&A.renderProductDetail(c.selectedDetailProduct)},rerender(){c.selectedDetailProduct&&A.renderProductDetail(c.selectedDetailProduct)}};async function ps(e){c.selectedBrand=e;const t=await ie.loadBrandProducts(e,c.sourceProducts,c.products),r=document.getElementById("brandViewContent");r&&(r.innerHTML=lo(e,t,n,t.slice(0,12).map((a,s)=>Ke(a,{screen:"brand",position:s})).join("")),ve(r))}async function gt(){const e=window.location.hash||"#/",t=e.match(/^#\/product\/([^/?#]+)/),r=e.match(/^#\/brand\/([^/?#]+)/);if(t){fa(),await He.loadDetailPage(decodeURIComponent(t[1])),window.scrollTo({top:0,behavior:"smooth"});return}if(r){hs(),await ps(decodeURIComponent(r[1])),window.scrollTo({top:0,behavior:"smooth"});return}Ce()}function ms(){v.showLoginRequired()}function hs(){var e;h.currentRoute="brand",o.homeView.hidden=!0,o.productDetailPage.hidden=!0,(e=document.getElementById("brandView"))==null||e.removeAttribute("hidden")}function ga(){var e;(e=document.getElementById("brandView"))==null||e.setAttribute("hidden","")}function de(){var r,a,s;const e=document.querySelector(".mobile-bottom-nav");if(!e)return;let t="home";(r=o.profileDrawer)!=null&&r.classList.contains("open")?t="loginButton":(a=o.favoritesDialog)!=null&&a.open?t="favoritesButton":(s=o.cartDrawer)!=null&&s.classList.contains("open")&&(t="cartButton"),e.querySelectorAll("[data-mobile-action]").forEach(l=>{l.classList.toggle("active",l.dataset.mobileAction===t)})}function Ce(){h.currentRoute="home",o.homeView.hidden=!1,o.productDetailPage.hidden=!0,ga(),document.title="BEAUTY SKIN KOREA",de()}function fa(){h.currentRoute="product",o.homeView.hidden=!0,o.productDetailPage.hidden=!1,ga(),window.scrollTo({top:0,behavior:"smooth"})}function Ut(){window.location.hash&&window.location.hash!=="#/"&&window.location.hash!=="#"?window.location.hash="#/":Ce()}function Ae(e){if(!e)return;const t=`#/product/${encodeURIComponent(e)}`;window.location.hash===t?gt():window.location.hash=t}function gs(){if(!_.isLoggedIn()){ms();return}o.cartDrawer.classList.add("open"),o.cartDrawer.setAttribute("aria-hidden","false"),J(),de(),K.load()}function ke(){o.cartDrawer.classList.remove("open"),o.cartDrawer.setAttribute("aria-hidden","true"),F(),de()}function fs(){const e=document.getElementById("megaMenu");if(window.innerWidth>680&&e){const t=e.classList.toggle("open");e.setAttribute("aria-hidden",String(!t)),o.catalogButton.setAttribute("aria-expanded",String(t)),t&&(o.catalogDrawer.classList.remove("open"),o.catalogDrawer.setAttribute("aria-hidden","true"));return}o.catalogDrawer.classList.add("open"),o.catalogDrawer.setAttribute("aria-hidden","false"),o.catalogButton.setAttribute("aria-expanded","true"),J()}function ct(){const e=document.getElementById("megaMenu");e==null||e.classList.remove("open"),e==null||e.setAttribute("aria-hidden","true"),o.catalogDrawer.classList.remove("open"),o.catalogDrawer.setAttribute("aria-hidden","true"),o.catalogButton.setAttribute("aria-expanded","false"),F()}function J(){document.body.classList.add("locked")}function F(){var a;const e=(a=document.getElementById("compareDrawer"))==null?void 0:a.classList.contains("open"),t=o.cartDrawer.classList.contains("open")||o.catalogDrawer.classList.contains("open")||o.profileDrawer.classList.contains("open")||o.notificationsDrawer.classList.contains("open")||e,r=[o.detailDialog,o.authDialog,o.apiDialog,o.checkoutDialog,o.ordersDialog,o.favoritesDialog,o.supportDialog,o.privacyDialog,o.termsDialog,o.myReviewsDialog,o.writeReviewDialog,document.getElementById("compareDialog")].some(s=>s==null?void 0:s.open);!t&&!r&&document.body.classList.remove("locked")}function vs(){o.baseUrl.value=h.baseUrl,o.apiDialog.showModal(),J()}function ys(e){e.preventDefault(),h.baseUrl=vt(o.baseUrl.value||""),localStorage.setItem(S.storageKeys.baseUrl,h.baseUrl),o.apiDialog.close(),z.load({loadCart:()=>K.load()})}const v={isLoggedIn(){return _.isLoggedIn()},saveAuth(e){_.saveAuth(e,P)},clearAuth(){var e,t,r,a,s,l,d,u;_.clearAuthState(P,c),Ht(),(t=(e=N.cart)==null?void 0:e.render)==null||t.call(e),Ot(),(a=(r=N.favorites)==null?void 0:r.updateUi)==null||a.call(r),(l=(s=N.notifications)==null?void 0:s.clearState)==null||l.call(s),(d=o.myReviewsDialog)!=null&&d.open&&o.myReviewsDialog.close(),(u=o.writeReviewDialog)!=null&&u.open&&o.writeReviewDialog.close(),v.updateUi()},showLoginRequired(){v.openDialog("login"),T(n("auth.loginRequired"),"warning")},async validateOnStartup(){var t,r,a,s;const e=await _.validateAuthOnStartup();if(!e.authenticated){e.invalid?v.clearAuth():v.updateUi();return}P.user=e.profile,v.updateUi(),await Promise.allSettled([(r=(t=N.favorites)==null?void 0:t.load)==null?void 0:r.call(t),(s=(a=N.notifications)==null?void 0:a.loadUnreadCount)==null?void 0:s.call(a),v.preloadProfileData()])},async preloadProfileData(){var a,s,l,d,u;if(!_.isLoggedIn())return;const{userResponse:e,orders:t,reviewsResult:r}=await _.preloadProfileData();await((s=(a=N.home)==null?void 0:a.ensureRecentlyViewed)==null?void 0:s.call(a)),e&&(P.user=e,localStorage.setItem(S.storageKeys.user,JSON.stringify(e)),v.updateUi()),t!==null&&(h.orders=t),r.success&&(c.myReviews=r.items),(l=o.profileDrawer)!=null&&l.classList.contains("open")&&((u=(d=N.profile)==null?void 0:d.render)==null||u.call(d))},updateUi(){const e=o.loginButton.querySelector("span");if(e)if(_.isLoggedIn()&&P.user){const t=String(P.user.fullName||"").trim().split(/\s+/)[0]||"";e.textContent=t||n("profile.myProfile"),o.loginButton.setAttribute("aria-label",n("profile.myProfile"))}else e.textContent=n("auth.login"),o.loginButton.setAttribute("aria-label",n("auth.login"))},openDialog(e="login"){v.setMode(e),v.clearErrors(),o.authDialog.showModal(),J()},setMode(e){P.authMode=e;const t=e==="login";o.authTitle.textContent=n(t?"auth.login":"auth.register"),o.loginFields.hidden=!t,o.registerFields.hidden=t,o.authSubmit.textContent=n(t?"auth.signIn":"auth.createAccount"),o.loginTab.classList.toggle("active",t),o.registerTab.classList.toggle("active",!t),o.loginTab.setAttribute("aria-selected",String(t)),o.registerTab.setAttribute("aria-selected",String(!t)),v.clearErrors()},clearErrors(){document.querySelectorAll(".field-error").forEach(e=>{e.textContent=""}),o.authMessage.textContent="",o.authMessage.className="form-message"},setFieldError(e,t){const r=document.getElementById(`${e}Error`);r&&(r.textContent=t)},setLoading(e){P.authLoading=e,o.authSubmit.disabled=e,o.googleLoginButton&&(o.googleLoginButton.disabled=e),o.authSubmit.textContent=e?n("home.loading"):P.authMode==="login"?n("auth.signIn"):n("auth.createAccount")},setFirebaseLoading(e){P.authLoading=e,o.authSubmit.disabled=e,o.googleLoginButton&&(o.googleLoginButton.disabled=e,o.googleLoginButton.classList.toggle("loading",e))},async submit(e){e.preventDefault(),!P.authLoading&&(P.authMode==="login"?await v.submitLogin():await v.submitRegister())},async submitLogin(){v.clearErrors();const e=_.validateLoginForm(o.loginEmail.value.trim(),o.loginPassword.value);if(e.errors.forEach(({field:r,messageKey:a})=>v.setFieldError(r,n(a))),!e.valid)return;v.setLoading(!0);const t=await _.submitLogin({email:o.loginEmail.value.trim(),password:o.loginPassword.value});if(v.setLoading(!1),!t.success){o.authMessage.textContent=t.error,o.authMessage.className="form-message error";return}await v.finishLogin(t.response)},async submitRegister(){v.clearErrors();const e=_.validateRegisterForm({fullName:o.registerFullName.value.trim(),email:o.registerEmail.value.trim(),phone:o.registerPhone.value.trim(),password:o.registerPassword.value,confirmPassword:o.registerConfirmPassword.value});if(e.errors.forEach(({field:r,messageKey:a})=>v.setFieldError(r,n(a))),!e.valid)return;v.setLoading(!0);const t=await _.submitRegister({fullName:o.registerFullName.value.trim(),email:o.registerEmail.value.trim(),phone:o.registerPhone.value.trim(),password:o.registerPassword.value});if(v.setLoading(!1),!t.success){o.authMessage.textContent=t.error,o.authMessage.className="form-message error";return}o.authMessage.textContent="Registered. Endi login qiling.",o.authMessage.className="form-message success",v.setMode("login"),o.loginEmail.value=t.email},async submitFirebase(){if(P.authLoading)return;v.clearErrors(),v.setFirebaseLoading(!0);let e;try{e=await Xo()}catch(r){v.setFirebaseLoading(!1);const a=_.mapFirebaseError((r==null?void 0:r.code)||"");if(a.cancelled)return;o.authMessage.textContent=a.message,o.authMessage.className="form-message error";return}const t=await _.submitFirebaseLogin(e);if(v.setFirebaseLoading(!1),!t.success){o.authMessage.textContent=t.error,o.authMessage.className="form-message error";return}await v.finishLogin(t.response)},async finishLogin(e){var r,a,s,l,d,u;v.saveAuth(e),await v.validateOnStartup(),o.authDialog.close();const t=String(e.fullName||"").trim().split(/\s+/)[0]||"User";T(`Welcome, ${t}.`),await((a=(r=N.cart)==null?void 0:r.load)==null?void 0:a.call(r)),await((l=(s=N.favorites)==null?void 0:s.load)==null?void 0:l.call(s)),await((u=(d=N.notifications)==null?void 0:d.loadUnreadCount)==null?void 0:u.call(d)),v.preloadProfileData()}},bs=()=>$("/api/receivers",{requireAuth:!0,showError:!1}),ws=e=>$("/api/receivers",{method:"POST",body:JSON.stringify(e),requireAuth:!0}),ks=e=>$(`/api/receivers/${e}`,{method:"DELETE",requireAuth:!0}),Ss=()=>$("/api/addresses",{requireAuth:!0,showError:!1}),Cs=e=>$("/api/addresses",{method:"POST",body:JSON.stringify(e),requireAuth:!0}),$s=e=>$(`/api/addresses/${e}`,{method:"DELETE",requireAuth:!0}),ee={resolveSelectedId(e,t,r){var s,l;const a=t||r||((s=e[0])==null?void 0:s.id)||null;return e.some(d=>String(d.id)===String(a))?a:((l=e[0])==null?void 0:l.id)||null},async loadReceivers(e,t){const r=await bs();if(r===null)return{success:!1,error:h.lastApiError||"Receivers could not be loaded."};const a=O(r);return{success:!0,receivers:a,selectedReceiverId:this.resolveSelectedId(a,e,t)}},async loadAddresses(e,t){const r=await Ss();if(r===null)return{success:!1,error:h.lastApiError||"Addresses could not be loaded."};const a=O(r);return{success:!0,addresses:a,selectedAddressId:this.resolveSelectedId(a,e,t)}},validateReceiverInput({firstName:e,lastName:t,phone:r}){return!e||!t||!r?{valid:!1,error:"First name, last name va phone majburiy."}:{valid:!0}},validateAddressInput({title:e,address:t,latitude:r,longitude:a}){return!e||!t||!Number.isFinite(r)||!Number.isFinite(a)?{valid:!1,error:"Title, address, latitude va longitude majburiy."}:{valid:!0}},async createReceiver(e){const t=await ws(e);return t===null?{success:!1,error:h.lastApiError}:{success:!0,receiver:t}},async createAddress(e){const t=await Cs(e);return t===null?{success:!1,error:h.lastApiError}:{success:!0,address:t}},async deleteReceiver(e){return{success:await ks(e)!==null}},async deleteAddress(e){return{success:await $s(e)!==null}},validatePrepareCheckout(e){return e.length?{valid:!0}:{valid:!1,reason:"empty_selection"}},validateConfirmCheckout({selectedAddressId:e,selectedReceiverId:t}){return e?t?{valid:!0}:{valid:!1,reason:"receiver_required",openReceiverPicker:!0}:{valid:!1,reason:"address_required",openAddressPicker:!0}},calculateCheckoutTotals(e,t,r=0){return se.calculateCheckoutTotals(e,t,r)},buildOrderPayload({receiverId:e,addressId:t,cartItems:r}){const a=r.map(s=>Number(s.id)).filter(s=>Number.isFinite(s)&&s>0);return{receiverId:Number(e),addressId:Number(t),cartItemIds:a}},validateOrderItems(e){if(!e.length)return{valid:!1,reason:"no_items"};const t=e.map(r=>Number(r.id)).filter(r=>Number.isFinite(r)&&r>0);return t.length?{valid:!0,cartItemIds:t}:{valid:!1,reason:"invalid_items"}}};function Ps(){return x.syncCartSelection(),ee.calculateCheckoutTotals(b.cartItems,b.cartSelectedIds,b.cartCouponDiscount||0)}function Es(){const e=fe(),t=new Date(Date.now()+3*864e5),r=new Date(Date.now()+5*864e5),a=s=>s.toLocaleDateString(e,{day:"numeric",month:"long"});return`${a(t)} – ${a(r)}`}function va(){return x.getSelectedCartItems().slice(0,6).map(e=>{var r;const t=e.image||((r=e.product)==null?void 0:r.image)||S.placeholderImage;return`<img src="${i(t)}" alt="" class="app-checkout-item-thumb" loading="eager" decoding="async" />`}).join("")}function ya(){return g.receivers.length?`<div class="selectable-list">${g.receivers.map(e=>`
    <article class="selectable-card ${String(e.id)===String(g.selectedReceiverId)?"selected":""}" data-select-receiver="${i(e.id)}">
      <div>
        <strong>${i(e.fullName||"")}</strong>
        <p class="hint">${i(e.phone||"")}</p>
      </div>
      <button class="icon-button" data-delete-receiver="${i(e.id)}" type="button" aria-label="Delete receiver">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
      </button>
    </article>
  `).join("")}</div>`:'<div class="checkout-empty">No receivers yet. Add one below.</div>'}function ba(){return`
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
  `}function wa(){return g.addresses.length?`<div class="selectable-list">${g.addresses.map(e=>`
    <article class="selectable-card ${String(e.id)===String(g.selectedAddressId)?"selected":""}" data-select-address="${i(e.id)}">
      <div>
        <strong>${i(e.title||"Address")}</strong>
        <p class="hint">${i(e.address||"")}</p>
      </div>
      <button class="icon-button" data-delete-address="${i(e.id)}" type="button" aria-label="Delete address">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
      </button>
    </article>
  `).join("")}</div>`:'<div class="checkout-empty">No addresses yet. Add one below.</div>'}function ka(){return`
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
  `}function Vt(e){return e==="address"?`
      <div class="app-checkout-picker">
        ${wa()}
        ${ka()}
      </div>
    `:`
    <div class="app-checkout-picker">
      ${ya()}
      ${ba()}
    </div>
  `}function Sa(){return`
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
  `}function Ca(){return`
    <div class="app-checkout-modal-art app-checkout-modal-art--success" aria-hidden="true">
      <svg viewBox="0 0 120 120" fill="none">
        <rect x="34" y="44" width="52" height="40" rx="4" fill="#D4A574"/>
        <path d="M34 52h52" stroke="#C49563" stroke-width="2"/>
        <path d="M48 44V36h24v8" stroke="#C49563" stroke-width="3"/>
        <path d="M60 24v28" stroke="#22C55E" stroke-width="4" stroke-linecap="round"/>
        <path d="M52 36l8-8 8 8" stroke="#22C55E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  `}function $a(e,t){const r=(e==null?void 0:e.fullName)||"—",a=(t==null?void 0:t.address)||"—";return`
    <div class="app-checkout-overlay" role="dialog" aria-modal="true" aria-labelledby="checkoutConfirmTitle">
      <div class="app-checkout-modal">
        ${Sa()}
        <h3 id="checkoutConfirmTitle">${i(n("checkout.confirmTitle"))}</h3>
        <p class="app-checkout-modal-sub">${i(n("checkout.confirmQuestion"))}</p>
        <div class="app-checkout-modal-details">
          <p>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21a8 8 0 1 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/></svg>
            <span>${i(n("checkout.confirmName",{name:r}))}</span>
          </p>
          <p>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
            <span>${i(n("checkout.confirmAddress",{address:a}))}</span>
          </p>
        </div>
        <p class="app-checkout-modal-disclaimer">${i(n("checkout.confirmDisclaimer"))}</p>
        ${g.checkoutError?`<div class="app-checkout-modal-error">${i(g.checkoutError)}</div>`:""}
        <div class="app-checkout-modal-actions">
          <button class="app-checkout-modal-cancel" type="button" data-checkout-confirm-cancel>${i(n("checkout.cancel"))}</button>
          <button class="app-checkout-modal-confirm" type="button" data-checkout-confirm-submit ${g.orderSubmitting?"disabled":""}>
            ${i(g.orderSubmitting?n("checkout.placing"):n("checkout.confirm"))}
          </button>
        </div>
      </div>
    </div>
  `}function Pa(){return`
    <div class="app-checkout-overlay app-checkout-overlay--success" role="dialog" aria-modal="true" aria-labelledby="checkoutSuccessTitle" data-checkout-success-dismiss>
      <div class="app-checkout-modal app-checkout-modal--success" data-checkout-success-card>
        ${Ca()}
        <h3 id="checkoutSuccessTitle">${i(n("checkout.successTitle"))}</h3>
        <p class="app-checkout-modal-sub">${i(n("checkout.successSubtitle"))}</p>
      </div>
    </div>
  `}function Is(e,t){const r=e&&t&&b.cartItems.length&&!g.orderSubmitting;return`
    <div class="summary-items">
      ${b.cartItems.map(a=>`
        <div class="summary-item">
          <span>${i(a.name)} ${a.variantLabel?`· ${i(a.variantLabel)}`:""} x ${a.quantity}</span>
          <strong>${L(a.lineTotal)}</strong>
        </div>
      `).join("")}
    </div>
    <div class="summary-total"><span>Subtotal</span><strong>${L(b.cartTotal)}</strong></div>
    <div class="summary-box">
      <strong>Receiver</strong>
      <p class="hint">${e?`${i(e.fullName||"")} · ${i(e.phone||"")}`:"Select receiver"}</p>
    </div>
    <div class="summary-box">
      <strong>Address</strong>
      <p class="hint">${t?`${i(t.title||"")} · ${i(t.address||"")}`:"Select address"}</p>
    </div>
    <button class="primary-button full" data-place-order type="button" ${r?"":"disabled"}>
      ${g.orderSubmitting?"Submitting...":"Place Order"}
    </button>
  `}function As(){const e=g.orderSuccess;o.checkoutContent.innerHTML=`
    <div class="app-checkout-page app-checkout-success">
      <header class="app-checkout-header">
        <span class="app-checkout-header-spacer" aria-hidden="true"></span>
        <h2>${i(n("checkout.orderCreated"))}</h2>
        <span class="app-checkout-header-spacer" aria-hidden="true"></span>
      </header>
      <div class="app-checkout-scroll app-checkout-success-body">
        <div class="order-success-icon">✓</div>
        <p>${i(n("orders.order"))} #${i(e.id)} · ${i(e.status||"NEW")}</p>
        <strong class="app-checkout-success-total">${L(e.totalAmount)}</strong>
        <p class="hint">${i(e.fullName||"")} ${e.phone?`· ${i(e.phone)}`:""}</p>
        <p class="hint">${i(e.address||"")}</p>
        <div class="app-checkout-success-actions">
          <button class="app-checkout-secondary-btn" data-success-orders type="button">${i(n("checkout.viewOrders"))}</button>
          <button class="app-checkout-primary-btn" data-success-continue type="button">${i(n("checkout.continueShopping"))}</button>
        </div>
      </div>
    </div>
  `}function qr(){if(g.checkoutLoading){o.checkoutContent.innerHTML=`
      <div class="app-checkout-page">
        <div class="app-checkout-skeleton skeleton-card"></div>
        <div class="app-checkout-skeleton skeleton-card"></div>
        <div class="app-checkout-skeleton skeleton-card"></div>
      </div>
    `;return}const e=g.receivers.find(l=>String(l.id)===String(g.selectedReceiverId)),t=g.addresses.find(l=>String(l.id)===String(g.selectedAddressId)),r=Ps(),a=t?`${i(t.title||"")} · ${i(t.address||"")}`:i(n("checkout.addressNotSelected")),s=e?`${i(e.fullName||"")} · ${i(e.phone||"")}`:i(n("checkout.receiverNotSelected"));o.checkoutContent.innerHTML=`
    <div class="app-checkout-page">
      <header class="app-checkout-header">
        <button class="app-checkout-back" type="button" data-checkout-close aria-label="${i(n("checkout.back"))}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>
        </button>
        <h2>${i(n("checkout.title"))}</h2>
        <span class="app-checkout-header-spacer" aria-hidden="true"></span>
      </header>

      <div class="app-checkout-scroll">
        ${g.checkoutError?`<div class="app-checkout-error">${i(g.checkoutError)}</div>`:""}

        <section class="app-checkout-card">
          <h3>${i(n("checkout.deliveryTitle"))}</h3>
          <p class="app-checkout-muted">${i(n("checkout.deliveryEta"))}</p>
          <div class="app-checkout-address-box">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
            <span>${a}</span>
          </div>
          <button class="app-checkout-primary-btn" type="button" data-checkout-toggle-address>
            ${i(n("checkout.selectAddress"))}
          </button>
          ${g.checkoutAddressPickerOpen?Vt("address"):""}
          <button class="app-checkout-receiver-row" type="button" data-checkout-toggle-receiver>
            <span class="app-checkout-receiver-avatar" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M20 21a8 8 0 1 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/></svg>
            </span>
            <span class="app-checkout-receiver-copy">
              <strong>${i(n("checkout.receiver"))}</strong>
              <span>${s}</span>
            </span>
            <svg class="app-checkout-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>
          </button>
          ${g.checkoutReceiverPickerOpen?Vt("receiver"):""}
        </section>

        <section class="app-checkout-card app-checkout-delivery-items">
          <h3>${i(n("checkout.deliveryOn",{dates:Es()}))}</h3>
          <div class="app-checkout-item-thumbs">${va()}</div>
        </section>

        <section class="app-checkout-card">
          <h3>${i(n("checkout.paymentMethod"))}</h3>
          <div class="app-checkout-payment">
            <span class="app-checkout-payment-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
            </span>
            <div>
              <strong>${i(n("checkout.paymentCod"))}</strong>
              <p>${i(n("checkout.paymentCodHint"))}</p>
            </div>
          </div>
        </section>

        <div class="app-checkout-info">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
          <p>${i(n("checkout.deliveryInfo"))}</p>
        </div>

        <section class="app-checkout-card app-checkout-coupon-card">
          <h3>${i(n("checkout.couponTitle"))}</h3>
          <button class="app-checkout-coupon-row" type="button" data-checkout-toggle-coupon>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"/><path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4z"/><path d="M12 8v8"/></svg>
            <span>${b.cartCoupon?i(b.cartCoupon):i(n("checkout.applyCoupon"))}</span>
            <svg class="app-checkout-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>
          </button>
          ${g.checkoutCouponOpen?`
            <div class="app-checkout-coupon-form">
              <input type="text" id="checkoutCouponInput" value="${i(b.cartCoupon||"")}" placeholder="${i(n("cart.couponPlaceholder"))}" />
              <button type="button" class="app-checkout-secondary-btn" data-apply-coupon>${i(n("cart.applyCoupon"))}</button>
            </div>
          `:""}
        </section>

        <section class="app-checkout-card app-checkout-summary-card">
          <h3>${i(n("checkout.yourOrder"))}</h3>
          <div class="app-checkout-summary-line">
            <span>${i(n("checkout.itemsCount",{count:r.itemCount}))}</span>
            <strong>${L(r.subtotal)}</strong>
          </div>
          <div class="app-checkout-summary-line app-checkout-summary-delivery">
            <span>${i(n("checkout.deliveryFee"))}</span>
            <strong>${r.deliveryFee?L(r.deliveryFee):i(n("cart.freeDelivery"))}</strong>
          </div>
          ${r.discount>0?`
            <div class="app-checkout-summary-line app-checkout-summary-discount">
              <span>${i(n("cart.discount"))}</span>
              <strong>- ${L(r.discount)}</strong>
            </div>
          `:""}
          <div class="app-checkout-summary-total">
            <span>${i(n("checkout.totalToPay"))}</span>
            <strong>${L(r.total)}</strong>
          </div>
          <p class="app-checkout-legal">${i(n("checkout.legalNotice"))}</p>
        </section>
      </div>

      <div class="app-checkout-sticky">
        <div class="app-checkout-sticky-total">
          <strong>${L(r.total)}</strong>
          <span>${i(n("checkout.itemsCount",{count:r.itemCount}))}</span>
        </div>
        <button class="app-checkout-confirm" type="button" data-place-order ${g.orderSubmitting?"disabled":""}>
          ${i(g.orderSubmitting?n("checkout.placing"):n("checkout.confirm"))}
        </button>
      </div>
      ${g.checkoutConfirmOpen?$a(e,t):""}
      ${g.orderSuccess?Pa():""}
    </div>
  `,ve(o.checkoutContent)}const j={render:qr,renderCheckout:qr,renderCheckoutCartThumbs:va,renderCheckoutPickerList:Vt,renderCheckoutConfirmIllustration:Sa,renderCheckoutSuccessIllustration:Ca,renderCheckoutConfirmModal:$a,renderCheckoutSuccessModal:Pa,renderReceiverList:ya,renderReceiverForm:ba,renderAddressList:wa,renderAddressForm:ka,renderOrderSummary:Is,renderOrderSuccess:As};let ye=null;const U={getAbortController(){return ye},abortOrder(){ye==null||ye.abort(),ye=null},async prepare({showLoginRequired:e}={}){if(!_.isLoggedIn()){e==null||e();return}await K.load();const t=x.getSelectedCartItems();if(!ee.validatePrepareCheckout(t).valid){T(n("cart.emptySelection")||"Select items to checkout","warning");return}g.orderSuccess=null,g.checkoutError="",g.checkoutStep=1,g.checkoutAddressPickerOpen=!1,g.checkoutReceiverPickerOpen=!1,g.checkoutCouponOpen=!1,g.checkoutConfirmOpen=!1,g.checkoutLoading=!0,j.render(),ke(),o.checkoutDialog.showModal(),J(),await Promise.all([U.loadReceivers(),U.loadAddresses()]),g.checkoutLoading=!1,j.render()},async loadReceivers(e){const t=await ee.loadReceivers(e,g.selectedReceiverId);if(!t.success){g.checkoutError=t.error;return}g.receivers=t.receivers,g.selectedReceiverId=t.selectedReceiverId},async loadAddresses(e){const t=await ee.loadAddresses(e,g.selectedAddressId);if(!t.success){g.checkoutError=t.error;return}g.addresses=t.addresses,g.selectedAddressId=t.selectedAddressId},getTotals(){return x.getCartTotals()},openConfirm(){if(!x.getSelectedCartItems().length)return;const t=ee.validateConfirmCheckout({selectedAddressId:g.selectedAddressId,selectedReceiverId:g.selectedReceiverId});if(!t.valid){t.reason==="address_required"?(g.checkoutError=n("checkout.addressRequired"),g.checkoutAddressPickerOpen=!0):t.reason==="receiver_required"&&(g.checkoutError=n("checkout.receiverRequired"),g.checkoutReceiverPickerOpen=!0),g.checkoutConfirmOpen=!1,j.render();return}g.checkoutError="",g.checkoutConfirmOpen=!0,j.render()},async submitOrder(){var r;if(g.orderSubmitting)return;const e=x.getSelectedCartItems(),t=ee.validateOrderItems(e);if(!t.valid){g.checkoutError=t.reason==="invalid_items"?n("checkout.invalidItems"):n("checkout.noItems"),j.render();return}U.abortOrder(),ye=new AbortController,g.orderSubmitting=!0,g.checkoutError="",j.render();try{const a=ee.buildOrderPayload({receiverId:g.selectedReceiverId,addressId:g.selectedAddressId,cartItems:e}),s=await le.createOrder(a,{signal:ye.signal});if(!s.success){g.checkoutError=s.error||n("checkout.orderFailed"),T(g.checkoutError,"error");return}U.finishAndGoHome(),T(n("checkout.orderCreated"),"success"),K.load().then(()=>x.render())}catch(a){g.checkoutError=(a==null?void 0:a.message)||n("checkout.orderFailed"),T(g.checkoutError,"error")}finally{g.orderSubmitting=!1,ye=null,(r=o.checkoutDialog)!=null&&r.open&&j.render()}},finishAndGoHome(){var e,t;try{g.checkoutConfirmOpen=!1,g.orderSuccess=null,g.checkoutError="",(e=o.checkoutDialog)==null||e.close(),ke(),F(),Ce(),window.location.hash&&window.location.hash!=="#/"&&window.location.hash!=="#"&&(window.location.hash="#/"),window.scrollTo({top:0,behavior:"smooth"})}catch(r){console.error("finishAndGoHome failed:",r),g.checkoutConfirmOpen=!1,g.orderSubmitting=!1,(t=o.checkoutDialog)==null||t.close(),F()}},async createReceiver(){var d,u,p;const e=(d=document.getElementById("receiverFirstName"))==null?void 0:d.value.trim(),t=(u=document.getElementById("receiverLastName"))==null?void 0:u.value.trim(),r=(p=document.getElementById("receiverPhone"))==null?void 0:p.value.trim(),a=document.getElementById("receiverFormError"),s=ee.validateReceiverInput({firstName:e,lastName:t,phone:r});if(!s.valid){a&&(a.textContent=s.error);return}const l=await ee.createReceiver({firstName:e,lastName:t,phone:r});l.success&&(await U.loadReceivers(l.receiver.id),j.render(),T("Receiver added"))},async createAddress(){var u,p,m,f;const e=(u=document.getElementById("addressTitle"))==null?void 0:u.value.trim(),t=(p=document.getElementById("addressText"))==null?void 0:p.value.trim(),r=Number((m=document.getElementById("addressLatitude"))==null?void 0:m.value),a=Number((f=document.getElementById("addressLongitude"))==null?void 0:f.value),s=document.getElementById("addressFormError"),l=ee.validateAddressInput({title:e,address:t,latitude:r,longitude:a});if(!l.valid){s&&(s.textContent=l.error);return}const d=await ee.createAddress({title:e,address:t,latitude:r,longitude:a});d.success&&(await U.loadAddresses(d.address.id),j.render(),T("Address added"))},async deleteReceiver(e){(await ee.deleteReceiver(e)).success&&(String(g.selectedReceiverId)===String(e)&&(g.selectedReceiverId=null),await U.loadReceivers(),j.render())},async deleteAddress(e){(await ee.deleteAddress(e)).success&&(String(g.selectedAddressId)===String(e)&&(g.selectedAddressId=null),await U.loadAddresses(),j.render())},applyCoupon(e){const t=se.applyCoupon(e,x.getCartTotals().subtotal);t.valid?(b.cartCoupon=t.coupon,b.cartCouponDiscount=t.discount,T(n("cart.couponApplied"),"success")):t.invalid&&T(n("cart.couponInvalid"),"warning"),j.render(),x.render()}},Ls=()=>$("/api/favorites",{requireAuth:!0,showError:!1}),Ts=e=>$(`/api/favorites/${e}/toggle`,{method:"POST",requireAuth:!0}),Ea={async loadFavorites(){const e=await Ls();return e===null?we("Favorites could not be loaded."):{success:!0,products:O(e).map(hi)}},async toggle(e,t){const r=await Ts(e);return r===null?null:{isFavorite:typeof r=="object"&&"favorite"in r?!!r.favorite:!t,response:r}}};function Ds(e){const t=fe()==="uz"?"uz-UZ":fe();return w(e).toLocaleString(t,{minimumFractionDigits:1,maximumFractionDigits:1})}function Rs({product:e,categoryLabel:t="",favoritesTitle:r="Favorites"}){const a=Ds(e.ratingAvg),s=w(e.reviewCount);return`
    <div class="app-fav-card" data-product="${i(e.id)}" data-screen="favorites" role="link" tabindex="0" aria-label="${i(e.name)}">
      <div class="app-fav-media">
        <img src="${i(e.image||S.placeholderImage)}" alt="${i(e.name)}" loading="lazy" decoding="async" />
        <button class="app-fav-heart" type="button" data-favorite="${i(e.id)}" aria-label="${i(r)}" aria-pressed="true">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-4.35-9.5-8.5C.8 9.6 2 6 5.2 6c1.9 0 3.2 1 3.8 2 .6-1 1.9-2 3.8-2 3.2 0 4.4 3.6 2.7 6.5C19 16.65 12 21 12 21Z"/></svg>
        </button>
      </div>
      <div class="app-fav-body">
        <div class="app-fav-price-row">
          ${e.discountPercent?`<span class="app-fav-discount">-${e.discountPercent}%</span>`:""}
          ${e.discountPercent?`<span class="app-fav-old-price">${L(e.originalPrice)}</span>`:""}
        </div>
        <p class="app-fav-price">${L(e.finalPrice)}</p>
        ${t?`<p class="app-fav-category">${i(t)}</p>`:""}
        <h3 class="app-fav-name">${i(e.name)}</h3>
        <div class="app-fav-rating">
          <span class="star" aria-hidden="true">★</span>
          <span>${a}</span>
          <span class="count">(${s})</span>
          <span class="flags" aria-hidden="true">🇰🇷 🚚</span>
        </div>
      </div>
    </div>
  `}function Br(){return`
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s-8.5-5.2-11-9.6C-.4 8 1 3.5 5.2 3.5c2.4 0 4 1.3 4.8 2.6.8-1.3 2.4-2.6 4.8-2.6C19 3.5 20.4 8 18 11.4 15.5 15.8 12 21 12 21Z"/>
    </svg>
  `}function Ms({products:e,renderCard:t}){return`
    <div class="app-favorites-grid">
      ${e.map(r=>t(r)).join("")}
    </div>
  `}function qs({count:e=4}){return`
    <div class="app-favorites-grid">
      ${Array.from({length:e},()=>'<div class="app-favorites-skeleton skeleton-card"></div>').join("")}
    </div>
  `}function Ye(e={}){var t;return!!(e.render||(t=o.favoritesDialog)!=null&&t.open)}const G={updateUi(){o.favoritesCount&&(o.favoritesCount.textContent=C.favoritesCount),o.favoritesSummary&&(o.favoritesSummary.textContent=`${C.favoritesCount} product${C.favoritesCount===1?"":"s"}`)},renderShell(e){return`
      <div class="app-favorites-page">
        <header class="app-favorites-header">
          <div class="app-favorites-header-top">
            <button class="app-favorites-back" type="button" data-favorites-close aria-label="${i(n("checkout.back"))}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>
            </button>
            <h2>${i(n("favorites.title"))}</h2>
            <span aria-hidden="true"></span>
          </div>
          <p class="app-favorites-count">${i(n("favorites.count",{count:C.favoritesCount||0}))}</p>
        </header>
        <div class="app-favorites-scroll">
          ${e}
        </div>
      </div>
    `},renderCard(e){const t=e.category?ue(e.category):e.brand||"";return Rs({product:e,categoryLabel:t,favoritesTitle:n("favorites.title")})},render(){if(o.favoritesContent){if(G.updateUi(),C.favoritesLoading){o.favoritesContent.innerHTML=G.renderShell(qs());return}if(C.favoritesError){o.favoritesContent.innerHTML=G.renderShell(`
        <div class="app-favorites-state">
          <span class="app-favorites-state-icon" aria-hidden="true">${Br()}</span>
          <h3>${i(n("favorites.unavailable"))}</h3>
          <p>${i(C.favoritesError)}</p>
          <button class="app-favorites-state-btn" data-favorites-retry type="button">${i(n("common.tryAgain"))}</button>
        </div>
      `);return}if(!C.favoriteProducts.length){o.favoritesContent.innerHTML=G.renderShell(`
        <div class="app-favorites-state">
          <span class="app-favorites-state-icon" aria-hidden="true">${Br()}</span>
          <h3>${i(n("favorites.empty"))}</h3>
          <p>${i(n("favorites.emptyHint"))}</p>
          <button class="app-favorites-state-btn" data-favorites-start type="button">${i(n("favorites.browse"))}</button>
        </div>
      `);return}o.favoritesContent.innerHTML=G.renderShell(Ms({products:C.favoriteProducts,renderCard:e=>G.renderCard(e)})),ve(o.favoritesContent)}},async load(e={},{isLoggedIn:t,onSessionExpired:r}={}){const{render:a=!1}=e;if(!(t!=null&&t())){Ot();return}C.favoritesLoading=!0,C.favoritesError="",Ye(e)&&G.render();try{const s=await Ea.loadFavorites();if(C.favoritesLoading=!1,!s.success){if(s.sessionExpired){Ot(),r==null||r(),Ye(e)&&G.render();return}C.favoritesError=s.error,G.updateUi(),Ye(e)&&G.render();return}fo(s.products),c.products.length&&Z(o.grid,c.products,"Mahsulot topilmadi."),c.todayDeals.length&&Z(o.dealsGrid,c.todayDeals.slice(0,8),"Bugungi takliflar topilmadi."),Ye(e)&&G.render()}catch(s){console.error("[LOAD FAVORITES FAILED]",s),C.favoritesLoading=!1,C.favoritesError="Favorites could not be loaded.",G.updateUi(),Ye(e)&&G.render()}},handleClick(e,{close:t,reload:r,handleProductGridClick:a}={}){var s;if(e.target.closest("[data-favorites-close]")){t==null||t();return}if(e.target.closest("[data-favorites-retry]")){r==null||r();return}if(e.target.closest("[data-favorites-start]")){t==null||t(),(s=document.getElementById("products"))==null||s.scrollIntoView({behavior:"smooth",block:"start"});return}a==null||a(e)}},Y={findKnownProduct(e){return[...c.products,...c.todayDeals,...C.favoriteProducts,c.selectedDetailProduct].filter(Boolean).find(t=>String(t.id)===String(e))},async open(){if(!v.isLoggedIn()){v.showLoginRequired();return}o.favoritesDialog&&(o.favoritesDialog.open||o.favoritesDialog.show(),J(),de(),await Y.load({render:!0}))},close(){o.favoritesDialog.close(),F(),de()},async load(e={}){return G.load(e,{isLoggedIn:v.isLoggedIn,onSessionExpired:()=>{o.favoritesDialog.open&&o.favoritesDialog.close()}})},updateUi(){G.updateUi()},async toggle(e){var d;if(!v.isLoggedIn()){v.showLoginRequired();return}const t=C.favoriteIds.has(String(e)),r=await Ea.toggle(e,t);if(r===null)return;const{isFavorite:a}=r,s=Y.findKnownProduct(e);if(a){const u=s?{...s,favorite:!0}:null;u&&!C.favoriteProducts.some(p=>String(p.id)===String(e))&&(C.favoriteProducts=[u,...C.favoriteProducts])}else C.favoriteProducts=C.favoriteProducts.filter(u=>String(u.id)!==String(e));C.favoriteIds=new Set(C.favoriteProducts.map(u=>String(u.id))),C.favoritesCount=C.favoriteProducts.length,ge(),Y.updateUi(),c.products.length&&Z(o.grid,c.products,"Mahsulot topilmadi."),c.todayDeals.length&&Z(o.dealsGrid,c.todayDeals.slice(0,8),"Bugungi takliflar topilmadi."),((d=c.selectedDetailProduct)==null?void 0:d.id)!==void 0&&String(c.selectedDetailProduct.id)===String(e)&&A.renderProductDetail(c.selectedDetailProduct),o.favoritesDialog.open&&G.render();const l=document.querySelector(`[data-favorite="${e}"]`);l&&a&&ss(l),T(n(a?"favorites.added":"favorites.removed"),"success"),a&&!s&&await Y.load({render:o.favoritesDialog.open})}},Bs=()=>$("/api/notifications",{requireAuth:!0,showError:!1}),Os=()=>$("/api/notifications/unread-count",{requireAuth:!0,showError:!1}),xs=e=>$(`/api/notifications/${e}/read`,{method:"POST",requireAuth:!0,showError:!1}),Ns=e=>$("/api/notifications/token",{method:"POST",body:JSON.stringify({token:e}),requireAuth:!0}),Kt={async loadNotifications(){const e=await Bs();return e===null?we("Notifications could not be loaded."):{success:!0,notifications:bi(e).map(fi).filter(t=>t.id!==void 0)}},async loadUnreadCount(){const e=await Os();return e===null?{success:!1,sessionExpired:zt()}:{success:!0,count:yi(e)}},async markRead(e){return await xs(e)===null?{success:!1,sessionExpired:zt()}:{success:!0}},async saveToken(e){const t=String(e||"").trim();if(!t)return{success:!1,error:"empty"};const r=await Ns(t);return{success:r!==null,result:r}}};function Fs({notification:e,updating:t=!1,labels:r={}}){const{unreadLabel:a="Unread",readLabel:s="Read",savingLabel:l="Saving...",markReadLabel:d="Mark read",typeLabel:u="",typeIcon:p="i"}=r;return`
    <article class="notification-card ${e.read?"read":"unread"} ${t?"loading":""}" data-notification-card="${i(e.id)}">
      <div class="notification-icon type-${i(e.type.toLowerCase())}" aria-hidden="true">${p}</div>
      <div>
        <div class="notification-head">
          <strong>${i(e.title)}</strong>
          ${e.read?"":`<span class="unread-dot" aria-label="${i(a)}"></span>`}
        </div>
        <p>${i(e.message)}</p>
        <div class="notification-meta">
          <span>${i(u)}</span>
          <span>${Zt(e.createdAt)}</span>
        </div>
      </div>
      <button class="secondary-button notification-read-button" data-notification-read="${i(e.id)}" ${e.read||t?"disabled":""} type="button">
        ${e.read?i(s):i(t?l:d)}
      </button>
    </article>
  `}function zs(e){return{ORDER:"O",PROMO:"%",SYSTEM:"i"}[e]||"i"}function Hs({itemsHtml:e=""}){return`
    <div class="notifications-list">
      ${e}
    </div>
  `}function Us(){return`
    <div class="notifications-loading">
      <div class="skeleton-card"></div>
      <div class="skeleton-card"></div>
    </div>
  `}function Or({title:e,message:t="",retryLabel:r=""}){return`
    <div class="notifications-empty">
      <strong>${i(e)}</strong>
      ${t?`<p>${i(t)}</p>`:""}
      ${r?`<button class="secondary-button" data-notifications-retry type="button">${i(r)}</button>`:""}
    </div>
  `}const W={clearState({closeDrawer:e}={}){var t;R.notifications=[],R.notificationsLoading=!1,R.notificationsError="",R.unreadCount=0,R.unreadCountLoading=!1,R.notificationUpdatingIds=new Set,W.updateBadge(),(t=o.notificationsDrawer)!=null&&t.classList.contains("open")&&(e==null||e())},updateBadge(){o.notificationsCount.textContent=R.unreadCount,o.notificationsCount.hidden=R.unreadCount<=0,o.notificationsSummary.textContent=`${R.unreadCount} ${n("notifications.unread")}`},renderCard(e){return Fs({notification:e,updating:R.notificationUpdatingIds.has(String(e.id)),labels:{unreadLabel:n("notifications.unread"),readLabel:n("notifications.read"),savingLabel:n("common.saving"),markReadLabel:n("notifications.markRead"),typeLabel:vi(e.type),typeIcon:zs(e.type)}})},render(){if(W.updateBadge(),R.notificationsLoading){o.notificationsContent.innerHTML=Us();return}if(R.notificationsError){o.notificationsContent.innerHTML=Or({title:n("notifications.title"),message:R.notificationsError,retryLabel:n("common.tryAgain")});return}if(!R.notifications.length){o.notificationsContent.innerHTML=Or({title:n("notifications.none"),message:"Order, promo and system updates will appear here."});return}o.notificationsContent.innerHTML=Hs({itemsHtml:R.notifications.map(e=>W.renderCard(e)).join("")})},async loadUnreadCount({isLoggedIn:e,onSessionExpired:t}={}){if(!(e!=null&&e())){W.clearState();return}R.unreadCountLoading=!0;const r=await Kt.loadUnreadCount();if(R.unreadCountLoading=!1,!r.success){if(r.sessionExpired){W.clearState({closeDrawer:t});return}W.updateBadge();return}R.unreadCount=r.count,W.updateBadge()},async load({isLoggedIn:e,showLoginRequired:t,onSessionExpired:r}={}){if(!(e!=null&&e())){t==null||t();return}R.notificationsLoading=!0,R.notificationsError="",W.render();const a=await Kt.loadNotifications();if(R.notificationsLoading=!1,!a.success){if(a.sessionExpired){W.clearState({closeDrawer:r});return}R.notificationsError=a.error,W.render();return}R.notifications=a.notifications,W.render()}};function Vs({statusLabel:e,statusModifier:t}){return`
    <span class="app-orders-status app-orders-status--${t}">
      ${i(e)}
    </span>
  `}function Ks({items:e=[]}){return e.length?e.slice(0,6).map(t=>`
    <img
      src="${i(t.image||S.placeholderImage)}"
      alt=""
      class="app-orders-thumb"
      loading="lazy"
      decoding="async"
    />
  `).join(""):'<span class="app-orders-thumb app-orders-thumb--empty" aria-hidden="true"></span>'}function Gs({order:e,statusBadgeHtml:t,thumbsHtml:r,orderLabel:a,itemsCountLabel:s,itemsLabel:l,totalLabel:d,addressLabel:u,viewDetailsLabel:p,lineCount:m,itemCount:f}){const k=e.createdAt?String(e.createdAt):"";return`
    <article class="app-orders-card">
      <div class="app-orders-card-top">
        <span class="app-orders-timestamp">${i(k)}</span>
        ${t}
      </div>
      <div class="app-orders-thumbs">${r}</div>
      <h3 class="app-orders-card-title">
        ${i(a)} #${i(e.id)} · ${i(s)}
      </h3>
      <p class="app-orders-card-meta">${i(l)}</p>
      <div class="app-orders-card-total">
        <span>${i(d)}</span>
        <strong>${Xr(e.totalAmount)}</strong>
      </div>
      <p class="app-orders-card-name">${i(e.fullName||"")}</p>
      <p class="app-orders-card-phone">${i(e.phone||"")}</p>
      <p class="app-orders-card-address">${i(u)} ${i(e.address||"")}</p>
      <button class="app-orders-details-btn" data-order-detail="${i(e.id)}" type="button">
        ${i(p)}
      </button>
    </article>
  `}const Gt=[{key:"NEW",icon:"clock"},{key:"CONFIRMED",icon:"check"},{key:"PACKED",icon:"box"},{key:"SHIPPED",icon:"truck"},{key:"DELIVERED",icon:"car"}];function js(e){const t={clock:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',check:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4 10-10"/></svg>',box:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4 7v10l8 4 8-4V7z"/><path d="M4 7l8 4 8-4M12 11v10"/></svg>',truck:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h11v8H3z"/><path d="M14 10h4l3 3v2h-7z"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="17.5" cy="17.5" r="1.5"/></svg>',car:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14l-1-4H6z"/><path d="M4 16h16v3H4z"/><circle cx="7.5" cy="16.5" r="1.5"/><circle cx="16.5" cy="16.5" r="1.5"/></svg>'};return t[e]||t.clock}function Ws(e=""){const t=String(e||"").toUpperCase();if(t==="PENDING")return 0;const r=Gt.findIndex(a=>a.key===t);return r>=0?r:0}function Ys({status:e="",statusLabelFor:t}){const r=Ws(e),a=["CANCELED","CANCELLED"].includes(String(e||"").toUpperCase());return`
    <div class="app-orders-stepper ${a?"is-canceled":""}">
      ${Gt.map((s,l)=>{const d=Gt.length-1,u=!a&&r===d;return`
          <div class="app-orders-step ${!a&&(l<r||u&&l<=r)?"is-done":!a&&l===r&&!u?"is-active":""}">
            <span class="app-orders-step-icon">${js(s.icon)}</span>
            <span class="app-orders-step-label">${i(t(s.key))}</span>
          </div>
        `}).join("")}
    </div>
  `}function _s({item:e}){return`
    <article class="app-orders-detail-product">
      <img src="${i(e.image||S.placeholderImage)}" alt="${i(e.name)}" loading="lazy" decoding="async" />
      <div>
        <strong>${i(e.name)}</strong>
        <p class="app-orders-detail-muted">x${e.quantity}</p>
      </div>
    </article>
  `}function Js({lineCount:e,itemCount:t,totalAmount:r,goodsLabel:a,totalAmountLabel:s}){return`
    <div class="app-orders-detail-summary">
      <div class="app-orders-detail-summary-row">
        <span>${i(a)}</span>
        <strong>${i(e||t)}</strong>
      </div>
      <div class="app-orders-detail-summary-row">
        <span>${i(s)}</span>
        <strong>${Xr(r)}</strong>
      </div>
    </div>
  `}function Qs({status:e="NEW"}){const t=String(e||"NEW").toUpperCase();return`
    <span class="app-orders-detail-status-pill">
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
      ${i(t)}
    </span>
  `}function Zs(e=""){const r=`orders.statusMessage.${String(e||"").toUpperCase()}`,a=n(r);return a!==r?a:n("orders.statusMessage.default")}function Xs(e={}){const t=Number(e.latitude??e.addressLatitude),r=Number(e.longitude??e.addressLongitude);if(Number.isFinite(t)&&Number.isFinite(r))return`https://www.google.com/maps/search/?api=1&query=${t},${r}`;const a=encodeURIComponent(e.address||"");return a?`https://www.google.com/maps/search/?api=1&query=${a}`:""}const en={render({renderHeader:e,renderOrderCard:t}={}){if(h.orderDetailLoading)return`
        <div class="app-orders-page">
          ${e(n("orders.details"),"back")}
          <div class="app-orders-scroll">
            <div class="app-orders-skeleton skeleton-card"></div>
            <div class="app-orders-skeleton skeleton-card"></div>
          </div>
        </div>
      `;if(h.orderDetailError)return`
        <div class="app-orders-page">
          ${e(n("orders.details"),"back")}
          <div class="app-orders-scroll">
            <div class="app-orders-error">
              <strong>${i(n("orders.detailUnavailable"))}</strong>
              <p>${i(h.orderDetailError)}</p>
            </div>
          </div>
        </div>
      `;if(!h.selectedOrder)return`
        <div class="app-orders-page">
          ${e(n("orders.title"),"close")}
          <div class="app-orders-scroll">
            ${h.orders.map(t).join("")}
          </div>
        </div>
      `;const r=h.selectedOrder,a=Array.isArray(r.items)?r.items.map(u=>Qt({...u,orderId:r.id})):[],s=le.getLineCount(r),l=le.getItemCount(r),d=Xs(r);return`
      <div class="app-orders-page">
        ${e(`${n("orders.order")} #${r.id}`,"back")}
        <div class="app-orders-scroll app-orders-detail">
          <article class="app-orders-detail-hero">
            <div class="app-orders-detail-hero-top">
              <div>
                <h3>${i(n("orders.order"))} #${i(r.id)}</h3>
                <p class="app-orders-detail-date">${i(Pi(r.createdAt))}</p>
              </div>
              ${Qs({status:r.status})}
            </div>
            ${Ys({status:r.status,statusLabelFor:ua})}
            ${Js({lineCount:n("orders.itemsCount",{count:s||l}),itemCount:l,totalAmount:r.totalAmount,goodsLabel:n("orders.goodsLabel"),totalAmountLabel:n("orders.totalAmount")})}
          </article>

          <section class="app-orders-detail-section">
            <h4>${i(n("orders.deliveryInfo"))}</h4>
            <p class="app-orders-detail-name">${i(r.fullName||"")}</p>
            <p class="app-orders-detail-muted">${i(r.phone||"")}</p>
            <p class="app-orders-detail-muted">${i(r.address||"")}</p>
            ${d?`
              <a class="app-orders-details-btn" href="${i(d)}" target="_blank" rel="noopener noreferrer">
                ${i(n("orders.openOnMap"))}
              </a>
            `:""}
          </section>

          <section class="app-orders-detail-section">
            <h4>${i(n("orders.products"))}</h4>
            ${a.length?a.map(u=>_s({item:u})).join(""):`<p class="app-orders-detail-muted">${i(n("orders.noItems"))}</p>`}
          </section>

          <section class="app-orders-detail-section">
            <h4>${i(n("orders.orderActions"))}</h4>
            <p class="app-orders-detail-muted">${i(Zs(r.status))}</p>
          </section>

          <button class="app-orders-details-btn app-orders-feedback-btn" type="button" data-order-feedback="${i(r.id)}">
            ${i(n("orders.feedback"))}
          </button>
        </div>
      </div>
    `}};function tn(){return'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>'}function Be(e,t){return`
    <header class="app-orders-header">
      <button class="app-orders-back" ${t==="close"?`data-orders-close type="button" aria-label="${i(n("checkout.back"))}"`:`data-orders-back type="button" aria-label="${i(n("checkout.back"))}"`}>
        ${tn()}
      </button>
      <h2>${i(e)}</h2>
      <span aria-hidden="true"></span>
    </header>
  `}function rn(e=""){return Vs({statusLabel:pa(e),statusModifier:le.orderStatusModifier(e)})}function an(e={}){const t=(Array.isArray(e.items)?e.items:[]).map(r=>Qt({...r,orderId:e.id}));return Ks({items:t})}function Rt(e){const t=le.getItemCount(e),r=le.getLineCount(e);return Gs({order:e,statusBadgeHtml:rn(e.status),thumbsHtml:an(e),orderLabel:n("orders.order"),itemsCountLabel:n("orders.itemsCount",{count:r}),itemsLabel:n("orders.items",{count:t}),totalLabel:n("orders.totalLabel"),addressLabel:n("orders.addressLabel"),viewDetailsLabel:n("orders.viewDetails"),lineCount:r,itemCount:t})}const ae={renderHeader:Be,renderOrderCard:Rt,render(){if(h.ordersLoading){o.ordersContent.innerHTML=`
        <div class="app-orders-page">
          ${Be(n("orders.title"),"close")}
          <div class="app-orders-scroll">
            <div class="app-orders-skeleton skeleton-card"></div>
            <div class="app-orders-skeleton skeleton-card"></div>
          </div>
        </div>
      `;return}if(h.ordersError){o.ordersContent.innerHTML=`
        <div class="app-orders-page">
          ${Be(n("orders.title"),"close")}
          <div class="app-orders-scroll">
            <div class="app-orders-error">
              <strong>${i(n("orders.unavailable"))}</strong>
              <p>${i(h.ordersError)}</p>
              <button class="app-orders-details-btn" data-orders-retry type="button">${i(n("common.tryAgain"))}</button>
            </div>
          </div>
        </div>
      `;return}if(!h.orders.length){o.ordersContent.innerHTML=`
        <div class="app-orders-page">
          ${Be(n("orders.title"),"close")}
          <div class="app-orders-scroll">
            <div class="app-orders-empty">
              <strong>${i(n("orders.none"))}</strong>
              <p>${i(n("orders.emptyHint"))}</p>
              <button class="app-orders-details-btn" data-orders-start-shopping type="button">${i(n("home.startShopping"))}</button>
            </div>
          </div>
        </div>
      `;return}if(h.orderDetailLoading||h.selectedOrder||h.orderDetailError){o.ordersContent.innerHTML=en.render({renderHeader:Be,renderOrderCard:Rt});return}o.ordersContent.innerHTML=`
      <div class="app-orders-page">
        ${Be(n("orders.title"),"close")}
        <div class="app-orders-scroll">
          ${h.orders.map(Rt).join("")}
        </div>
      </div>
    `,ve(o.ordersContent)},async load({onSessionExpired:e}={}){h.ordersLoading=!0,h.ordersError="",h.selectedOrder=null,h.selectedOrderHistory=[],h.orderHistoryWarning="",ae.render();const t=await le.loadOrders();if(h.ordersLoading=!1,!t.success){if(t.sessionExpired){e==null||e();return}h.ordersError=t.error,ae.render();return}h.orders=t.orders,ae.render()},async openDetail(e){h.orderDetailLoading=!0,h.orderDetailError="",h.orderHistoryWarning="",ae.render();const t=await le.loadOrderDetail(e);if(h.orderDetailLoading=!1,!t.success){h.orderDetailError=t.error,ae.render();return}h.selectedOrder=t.order,h.selectedOrderHistory=t.history,h.orderHistoryWarning=t.historyWarning,ae.render()}},H={clearState(){W.clearState({closeDrawer:H.close})},async loadUnreadCount(){return W.loadUnreadCount({isLoggedIn:v.isLoggedIn,onSessionExpired:H.close})},async open(){if(!v.isLoggedIn()){v.showLoginRequired();return}o.notificationsDrawer.classList.add("open"),o.notificationsDrawer.setAttribute("aria-hidden","false"),J(),await Promise.all([H.load(),H.loadUnreadCount()])},close(){o.notificationsDrawer.classList.remove("open"),o.notificationsDrawer.setAttribute("aria-hidden","true"),F()},async load(){return W.load({isLoggedIn:v.isLoggedIn,showLoginRequired:v.showLoginRequired,onSessionExpired:H.close})},async markRead(e,t={}){const r=R.notifications.find(s=>String(s.id)===String(e));if(!r||r.read)return!0;R.notificationUpdatingIds.add(String(e)),W.render();const a=await Kt.markRead(e);return R.notificationUpdatingIds.delete(String(e)),a.success?(r.read=!0,R.notifications=R.notifications.map(s=>String(s.id)===String(e)?{...s,read:!0}:s),R.unreadCount=Math.max(0,R.unreadCount-1),W.render(),await H.loadUnreadCount(),t.silent||T("Marked as read"),!0):a.sessionExpired?(H.clearState(),!1):(T(h.lastApiError||"Notification could not be updated."),W.render(),!1)},async handleCardClick(e){var r,a;const t=R.notifications.find(s=>String(s.id)===String(e));t&&(t.read||await H.markRead(e,{silent:!0}),t.type==="ORDER"&&t.refId&&(H.close(),await((a=(r=N.orders)==null?void 0:r.show)==null?void 0:a.call(r)),await ae.openDetail(t.refId)))}},Le={async show(){if(!v.isLoggedIn()){v.showLoginRequired();return}o.ordersDialog.showModal(),J(),await Le.load()},async load(){return ae.load({onSessionExpired:()=>o.ordersDialog.close()})},handleClick(e){var p,m,f,k,I,D,M;const t=e.target.closest("[data-orders-close]"),r=e.target.closest("[data-orders-back]"),a=e.target.closest("[data-order-detail]"),s=e.target.closest("[data-orders-retry]"),l=e.target.closest("[data-orders-start-shopping]"),d=e.target.closest("[data-order-write-review]"),u=e.target.closest("[data-order-feedback]");if(t){o.ordersDialog.close(),(m=(p=N.navigation)==null?void 0:p.unlockBodyIfNoOverlay)==null||m.call(p);return}if(r){h.selectedOrder=null,h.selectedOrderHistory=[],h.orderDetailError="",h.orderHistoryWarning="",ae.render();return}if(d){(k=(f=N.reviews)==null?void 0:f.openWrite)==null||k.call(f,{productId:d.dataset.orderWriteReview,orderId:d.dataset.reviewOrder,productName:d.dataset.reviewName});return}if(u){(D=N.toast)==null||D.call(N,(I=N.i18n)==null?void 0:I.t("profile.comingSoon"),"info");return}if(a){ae.openDetail(a.dataset.orderDetail);return}if(s){Le.load();return}l&&(o.ordersDialog.close(),(M=document.getElementById("products"))==null||M.scrollIntoView({behavior:"smooth",block:"start"}))}},Ia="beauty_skin_theme",Aa=["light","dark","system"];let _e=null;function on(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function sn(e){document.documentElement.setAttribute("data-theme",e),document.documentElement.style.colorScheme=e,nn(e)}function nn(e){const t=document.getElementById("themeToggle");if(!t)return;const r=e==="dark";t.setAttribute("aria-label",r?"Switch to light mode":"Switch to dark mode"),t.setAttribute("title",r?"Light mode":"Dark mode")}function nr(){const e=localStorage.getItem(Ia);return Aa.includes(e)?e:"system"}function cn(e){Aa.includes(e)&&(localStorage.setItem(Ia,e),cr())}function ln(){const e=nr(),t=e==="light"?"dark":e==="dark"?"system":"light";return cn(t),t}function cr(){const e=nr(),t=e==="system"?on():e;sn(t)}function xr(){nr()==="system"&&cr()}function dn(){var e;cr(),_e=window.matchMedia("(prefers-color-scheme: dark)"),_e.addEventListener?_e.addEventListener("change",xr):_e.addListener&&_e.addListener(xr),(e=document.getElementById("themeToggle"))==null||e.addEventListener("click",()=>{const t=ln();return{light:"Light",dark:"Dark",system:"System"}[t]})}const lr="beauty_skin_search_history",La=8,un=["SNAIL CREAM","COSRX","SUNSCREEN","LIP TINT","VITAMIN C","COLLAGEN","K-BEAUTY SET","MOISTURIZER"];let Nr=null,$e=null;function Ta(){try{return JSON.parse(localStorage.getItem(lr)||"[]").slice(0,La)}catch{return[]}}function Ue(e){const t=String(e||"").trim();if(!t||t.length<2)return;const r=Ta().filter(a=>a.toLowerCase()!==t.toLowerCase());r.unshift(t),localStorage.setItem(lr,JSON.stringify(r.slice(0,La)))}function pn(){localStorage.removeItem(lr),jt("")}function Fr(e,t="query"){const r=t==="history"?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.3-4.3m1.3-5.2a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"/></svg>';return`<button class="search-chip" type="button" data-search-chip="${i(e)}" data-chip-type="${t}">${r}${i(e)}</button>`}async function mn(e){if(!e||e.length<2)return[];const t=await qt(e,{page:0,size:6});return O(t).map(V)}function hn(e){return`
    <button class="search-result-item" type="button" data-search-product="${i(e.id)}">
      <img src="${i(e.image)}" alt="" loading="lazy" />
      <div>
        <strong>${i(e.name)}</strong>
        <span>${i(L(e.finalPrice))}</span>
      </div>
    </button>
  `}async function jt(e=""){const t=document.getElementById("searchPanel");if(!t)return;const r=e.trim(),a=Ta();let s="";if(r.length>=2){s=`<div class="search-panel-section"><div class="search-panel-label">${i(n("search.results"))}</div><div class="search-results-list">${Array(3).fill('<div class="ds-skeleton" style="height:56px;margin-bottom:8px;border-radius:10px"></div>').join("")}</div></div>`,t.innerHTML=s,t.classList.add("open");const d=await mn(r),u=t.querySelector(".search-results-list");u&&(u.innerHTML=d.length?d.map(hn).join(""):`<p class="hint" style="padding:8px">${i(n("search.noResults"))}</p>`);return}const l=[];l.push(`
    <div class="search-panel-section">
      <div class="search-ai-hint">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L6 21l2.3-7-6-4.6h7.6Z"/></svg>
        ${i(n("search.aiHint"))}
      </div>
    </div>
  `),a.length&&l.push(`
      <div class="search-panel-section">
        <div class="search-panel-label">
          ${i(n("search.recent"))}
          <button class="search-panel-clear" type="button" data-clear-search-history>${i(n("search.clear"))}</button>
        </div>
        <div class="search-chips">${a.map(d=>Fr(d,"history")).join("")}</div>
      </div>
    `),l.push(`
    <div class="search-panel-section">
      <div class="search-panel-label">${i(n("search.trending"))}</div>
      <div class="search-chips">${un.map(d=>Fr(d,"trending")).join("")}</div>
    </div>
  `),t.innerHTML=l.join("")}function Oe(){var e;(e=document.getElementById("searchPanel"))==null||e.classList.remove("open")}function gn({onSearch:e,onProductSelect:t}={}){var l,d;$e=e;const r=document.getElementById("searchInput"),a=document.getElementById("searchPanel"),s=document.querySelector(".search-wrap");!r||!a||(r.addEventListener("focus",()=>{jt(r.value),a.classList.add("open")}),r.addEventListener("input",()=>{clearTimeout(Nr),Nr=setTimeout(()=>jt(r.value),S.searchDebounceMs)}),a.addEventListener("click",u=>{const p=u.target.closest("[data-search-chip]"),m=u.target.closest("[data-search-product]");if(u.target.closest("[data-clear-search-history]")){pn();return}if(p){r.value=p.dataset.searchChip,Ue(p.dataset.searchChip),Oe(),$e==null||$e(p.dataset.searchChip);return}m&&(Oe(),t==null||t(m.dataset.searchProduct))}),document.addEventListener("click",u=>{s!=null&&s.contains(u.target)||Oe()}),r.addEventListener("keydown",u=>{u.key==="Escape"&&(Oe(),r.blur())}),(l=document.querySelector(".search-voice"))==null||l.addEventListener("click",()=>{if(!("webkitSpeechRecognition"in window)&&!("SpeechRecognition"in window))return;const u=window.SpeechRecognition||window.webkitSpeechRecognition,p=new u;p.lang=document.documentElement.lang||"en-US",p.onresult=m=>{const f=m.results[0][0].transcript;r.value=f,Ue(f),$e==null||$e(f),Oe()},p.start()}),(d=document.querySelector(".search-image"))==null||d.addEventListener("click",()=>{const u=document.createElement("input");u.type="file",u.accept="image/*",u.addEventListener("change",()=>{var p;(p=u.files)!=null&&p[0]&&(r.placeholder=n("search.imagePlaceholder"))}),u.click()}))}const pe={async open(){if(!v.isLoggedIn()){v.showLoginRequired();return}P.profileEditing=!1,P.profileMenuOpen=!1,o.profileDrawer.classList.add("open"),o.profileDrawer.setAttribute("aria-hidden","false"),J(),de(),re.render(),await pe.loadSnapshot()},close(){P.profileMenuOpen=!1,P.profileLoadSeq+=1,o.profileDrawer.classList.remove("open"),o.profileDrawer.setAttribute("aria-hidden","true"),F(),de()},async loadSnapshot(){var e;return re.loadSnapshot({isLoggedIn:v.isLoggedIn,loadUnreadCount:(e=N.notifications)==null?void 0:e.loadUnreadCount,updateAuthUi:v.updateUi})},async handleAction(e){var t,r,a,s,l,d,u,p,m,f;return re.handleAction(e,{closeProfile:pe.close,showOrders:(t=N.orders)==null?void 0:t.show,openOrderDetail:ae.openDetail,clearAuth:v.clearAuth,showToast:T,openFavorites:(r=N.favorites)==null?void 0:r.open,openMyReviews:(a=N.reviews)==null?void 0:a.open,openNotifications:(s=N.notifications)==null?void 0:s.open,setLanguage:(l=N.i18n)==null?void 0:l.setLanguage,applyTranslations:(d=N.i18n)==null?void 0:d.applyTranslations,openPrivacy:(u=N.support)==null?void 0:u.openPrivacy,openTerms:(p=N.support)==null?void 0:p.openTerms,openSupport:(m=N.support)==null?void 0:m.open,prepareCheckout:(f=N.checkout)==null?void 0:f.prepare})},async submitEdit(e){var d,u,p;e.preventDefault();const t=P.user||{},r={id:t.id,email:t.email,fullName:(d=document.getElementById("profileFullName"))==null?void 0:d.value.trim(),phone:(u=document.getElementById("profilePhone"))==null?void 0:u.value.trim(),profileImage:(p=document.getElementById("profileImage"))==null?void 0:p.value.trim()},a=document.getElementById("profileMessage"),s=Ee.validateProfileUpdate(r);if(!s.valid){a&&(a.textContent=s.error,a.className="form-message error");return}const l=await Ee.updateProfile(r);if(!l.success){a&&(a.textContent=l.error,a.className="form-message error");return}l.user&&(P.user=l.user,localStorage.setItem(S.storageKeys.user,JSON.stringify(l.user))),P.profileEditing=!1,v.updateUi(),re.render(),T("Profile updated.")}},fn={async render(e,{showHomeView:t}={}){const r=e.trim();if(h.currentSearchQuery=r,h.currentGridScreen=r?"search":"home",h.currentRoute==="product"&&(window.location.hash="#/",t==null||t()),!r){c.selectedCategory="ALL",te.renderCategories(),o.title.textContent=n("home.popular"),await z.loadProducts();return}o.title.textContent=`"${r}" qidiruvi`,o.status.textContent=n("home.loading"),Ne(o.grid,10);const a=await oa.search(r);c.products=a,ge(),ne(c.products,n("home.noProducts"),{screen:"search"}),o.status.textContent=""}},he={handleInput(e){clearTimeout(h.searchTimer),h.searchTimer=setTimeout(()=>{const t=e.target.value;he.search(t).catch(()=>{me(o.grid,"Qidiruv vaqtida xatolik yuz berdi."),o.status.textContent=""}),t.trim().length>=2&&Ue(t)},S.searchDebounceMs)},async search(e){return fn.render(e,{showHomeView:Ce})},handleCategoryClick(e){const t=e.target.closest("[data-category]");t&&(ct(),te.renderCategoryProducts(t.dataset.category,{showHomeView:Ce}).catch(()=>{me(o.grid,"Kategoriya mahsulotlari yuklanmadi."),o.status.textContent=""}),window.setTimeout(()=>{var r;(r=document.getElementById("products"))==null||r.scrollIntoView({behavior:"smooth",block:"start"})},0))}};async function $t(){if(c.compareIds=Ge(),so(c.compareIds.length),!c.compareIds.length){c.compareProducts=[],Pr([],n);return}const e=c.compareIds.map(r=>Y.findKnownProduct(r)).filter(Boolean),t=c.compareIds.filter(r=>!e.find(a=>String(a.id)===String(r)));if(t.length){const r=await ie.loadProductsByIds(t);c.compareProducts=[...e,...r].slice(0,Ve)}else c.compareProducts=e.slice(0,Ve);Pr(c.compareProducts,n)}async function Da(e){const t=xi(e);if(t.full){T(n("compare.full",{max:Ve}),"warning");return}c.compareIds=t.ids,await $t(),T(t.added?n("compare.added"):n("compare.removed"),"success")}function vn(){var e,t;(e=document.getElementById("compareDrawer"))==null||e.classList.add("open"),(t=document.getElementById("compareDrawer"))==null||t.setAttribute("aria-hidden","false"),J()}function yn(){var e,t;(e=document.getElementById("compareDrawer"))==null||e.classList.remove("open"),(t=document.getElementById("compareDrawer"))==null||t.setAttribute("aria-hidden","true"),F()}function bn(){var e;aa(c.compareProducts,n),(e=document.getElementById("compareDialog"))==null||e.showModal(),J()}function wn(){Fi(),$t(),aa(c.compareProducts,n)}function kn(e){Ni(e),$t()}function Sn(e,t,r){return K.add(e,t,r,{showLoginRequired:()=>v.showLoginRequired()})}function zr(e){if(e.key!=="Enter"&&e.key!==" ")return;const t=e.target.closest("[data-product]");if(!t)return;e.preventDefault();const r=t.dataset.product;r&&(st(r),Ae(r))}function ze(e){const t=e.target.closest("[data-show-all]"),r=e.target.closest("[data-favorite]"),a=e.target.closest("[data-add]"),s=e.target.closest("[data-detail]"),l=e.target.closest("[data-quick-view]"),d=e.target.closest("[data-compare]"),u=e.target.closest("[data-product]");if(t){e.stopPropagation(),z.load({loadCart:()=>K.load()});return}if(d){e.stopPropagation(),Da(d.dataset.compare);return}if(l){e.stopPropagation(),st(l.dataset.quickView),Ae(l.dataset.quickView);return}if(r){e.stopPropagation(),Y.toggle(r.dataset.favorite);return}if(a){e.stopPropagation(),Sn(a.dataset.add,null,1);return}if(s){e.stopPropagation();const p=s.dataset.detail;if(!p)return;st(p),Ae(p);return}if(u&&!e.target.closest("button, a")){e.preventDefault(),e.stopPropagation();const p=u.dataset.product;if(!p)return;st(p),Ae(p)}}let Hr=null;function Cn(){var l,d,u,p;dn(),cs(),ls(),ds(),gn({onSearch:m=>{o.searchInput.value=m,Ue(m),Oe(),he.search(m).catch(()=>{me(o.grid,n("common.serverFailed")),o.status.textContent=""})},onProductSelect:m=>{Ue(o.searchInput.value),Ae(m)}});const e=o.megaMenu;e==null||e.addEventListener("click",m=>{var k;m.target.closest("[data-category]")&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true"),(k=o.catalogButton)==null||k.setAttribute("aria-expanded","false"),he.handleCategoryClick(m))}),(l=o.popularSearchesChips)==null||l.addEventListener("click",m=>{const f=m.target.closest("[data-search-chip]");f&&(o.searchInput.value=f.dataset.searchChip,Ue(f.dataset.searchChip),he.search(f.dataset.searchChip).catch(()=>{}))}),(d=document.querySelector(".mobile-bottom-nav"))==null||d.addEventListener("click",m=>{var I,D,M,E;const f=m.target.closest("[data-mobile-action]");if(!f)return;const k=f.dataset.mobileAction;if(k==="home"){(I=o.cartDrawer)!=null&&I.classList.contains("open")&&ke(),(D=o.favoritesDialog)!=null&&D.open&&Y.close(),(M=o.profileDrawer)!=null&&M.classList.contains("open")&&pe.close(),window.location.hash&&window.location.hash!=="#/"&&window.location.hash!=="#"?window.location.hash="#/":Ce(),window.scrollTo({top:0,behavior:"smooth"}),de();return}if(k==="favoritesButton"){Y.open().then(()=>de()).catch(B=>{console.error("[FAVORITES OPEN FAILED]",B)});return}(E=document.getElementById(k))==null||E.click()});const t=document.getElementById("mobileDrawer"),r=document.getElementById("mobileMenuToggle"),a=document.getElementById("closeMobileMenu");r==null||r.addEventListener("click",()=>{t==null||t.classList.add("open"),t==null||t.setAttribute("aria-hidden","false"),r.setAttribute("aria-expanded","true"),J()});const s=()=>{t==null||t.classList.remove("open"),t==null||t.setAttribute("aria-hidden","true"),r==null||r.setAttribute("aria-expanded","false"),F()};a==null||a.addEventListener("click",s),t==null||t.addEventListener("click",m=>{m.target===t&&s()}),(u=document.getElementById("mobileNavLinks"))==null||u.addEventListener("click",m=>{var I;const f=m.target.closest("[data-category]"),k=m.target.closest("[data-mobile-action]");if(f){s(),he.handleCategoryClick(m);return}if(k){if(s(),k.dataset.mobileAction==="favoritesButton"){Y.open().catch(D=>{console.error("[FAVORITES OPEN FAILED]",D)});return}(I=document.getElementById(k.dataset.mobileAction))==null||I.click()}}),(p=document.getElementById("currencySelect"))==null||p.addEventListener("change",m=>{T(`${n("header.currency")}: ${m.target.value}`,"info")}),document.addEventListener("click",m=>{const f=m.target.closest(".primary-button");f&&!f.disabled&&us(m,f)}),$n()}function $n(){var e,t,r,a,s,l,d,u,p,m,f,k,I,D,M,E,B;if(eo(),c.compareIds=Ge(),$t(),wt(n),!h.flashSaleEnd){const q=new Date;q.setHours(23,59,59,999),h.flashSaleEnd=q.getTime()}In(),(e=document.getElementById("sortSelect"))==null||e.addEventListener("change",q=>{c.filters.sort=q.target.value,Pe(),ne(c.sourceProducts.length?c.sourceProducts:c.products,n("home.noProducts"),{screen:h.currentGridScreen})}),(t=document.getElementById("gridViewBtn"))==null||t.addEventListener("click",()=>{c.filters.viewMode="grid",Pe(),Bt(o.grid,"grid")}),(r=document.getElementById("listViewBtn"))==null||r.addEventListener("click",()=>{c.filters.viewMode="list",Pe(),Bt(o.grid,"list")}),Ur(document.getElementById("filterSidebar")),Ur(document.getElementById("filterSheetContent")),(a=document.getElementById("mobileFilterBtn"))==null||a.addEventListener("click",()=>Vr("filterSheet")),(s=document.getElementById("mobileSortBtn"))==null||s.addEventListener("click",()=>{const q=document.getElementById("sortSheetOptions"),y={popular:n("sort.popular"),"price-asc":n("sort.priceAsc"),"price-desc":n("sort.priceDesc"),rating:n("sort.rating"),newest:n("sort.newest"),discount:n("sort.discount")};q&&(q.innerHTML=Object.entries(y).map(([Q,rt])=>`
        <button class="mobile-nav-link" type="button" data-sort-option="${Q}">${i(rt)}</button>
      `).join("")),Vr("sortSheet")}),(l=document.getElementById("closeFilterSheet"))==null||l.addEventListener("click",()=>Mt("filterSheet")),(d=document.getElementById("applyFilterSheet"))==null||d.addEventListener("click",()=>{Mt("filterSheet"),ne(c.sourceProducts.length?c.sourceProducts:c.products,n("home.noProducts"),{screen:h.currentGridScreen})}),(u=document.getElementById("sortSheetOptions"))==null||u.addEventListener("click",q=>{const y=q.target.closest("[data-sort-option]");if(!y)return;c.filters.sort=y.dataset.sortOption;const Q=document.getElementById("sortSelect");Q&&(Q.value=c.filters.sort),Pe(),Mt("sortSheet"),ne(c.sourceProducts.length?c.sourceProducts:c.products,n("home.noProducts"),{screen:h.currentGridScreen})}),(p=document.getElementById("filterChipsRow"))==null||p.addEventListener("click",q=>{const y=q.target.closest("[data-remove-chip]");y&&Pn(y.dataset.removeChip)}),(m=document.getElementById("compareFab"))==null||m.addEventListener("click",vn),(f=document.getElementById("closeCompare"))==null||f.addEventListener("click",yn),(k=document.getElementById("openComparePage"))==null||k.addEventListener("click",bn),(I=document.getElementById("clearCompare"))==null||I.addEventListener("click",wn),(D=document.getElementById("compareDrawerContent"))==null||D.addEventListener("click",q=>{const y=q.target.closest("[data-remove-compare]");y&&kn(y.dataset.removeCompare)}),(M=document.getElementById("closePdpFullscreen"))==null||M.addEventListener("click",Kr),(E=document.getElementById("pdpFullscreen"))==null||E.addEventListener("click",q=>{q.target.id==="pdpFullscreen"&&Kr()}),(B=o.cartExtras)==null||B.addEventListener("click",An)}function Ur(e){e&&(e.addEventListener("click",t=>{var a;if(t.target.closest("[data-clear-filters]")){oo(),wt(n),pt(n),ne(c.sourceProducts.length?c.sourceProducts:c.products,n("home.noProducts"),{screen:h.currentGridScreen});return}const r=t.target.closest(".filter-group-toggle");r&&((a=r.closest(".filter-group"))==null||a.classList.toggle("collapsed"))}),e.addEventListener("change",t=>{const r=c.filters;if(t.target.matches("[data-filter-brand]")){const a=t.target.dataset.filterBrand;r.brands=t.target.checked?[...new Set([...r.brands,a])]:r.brands.filter(s=>s!==a)}if(t.target.matches("[data-filter-color]")){const a=t.target.dataset.filterColor;r.colors=t.target.checked?[...new Set([...r.colors,a])]:r.colors.filter(s=>s!==a)}if(t.target.matches("[data-filter-size]")){const a=t.target.dataset.filterSize;r.sizes=t.target.checked?[...new Set([...r.sizes,a])]:r.sizes.filter(s=>s!==a)}if(t.target.matches("[data-filter-origin]")){const a=t.target.dataset.filterOrigin;r.origin=t.target.checked?[...new Set([...r.origin,a])]:r.origin.filter(s=>s!==a)}if(t.target.matches("[data-filter-seller]")){const a=t.target.dataset.filterSeller;r.seller=t.target.checked?[...new Set([...r.seller,a])]:r.seller.filter(s=>s!==a)}t.target.matches("[data-filter-toggle]")&&(r[t.target.dataset.filterToggle]=t.target.checked),t.target.matches("[data-filter-rating]")&&(r.minRating=Number(t.target.value)),t.target.matches("[data-filter-price]")&&(r.maxPrice=Number(t.target.value)),Pe(),pt(n),e.id!=="filterSheetContent"&&ne(c.sourceProducts.length?c.sourceProducts:c.products,n("home.noProducts"),{screen:h.currentGridScreen})}))}function Pn(e){const t=c.filters;e==="onSale"?t.onSale=!1:e==="inStock"?t.inStock=!1:e==="rating"?t.minRating=0:e.startsWith("brand:")?t.brands=t.brands.filter(r=>r!==e.slice(6)):e.startsWith("color:")?t.colors=t.colors.filter(r=>r!==e.slice(6)):e.startsWith("size:")&&(t.sizes=t.sizes.filter(r=>r!==e.slice(5))),Pe(),wt(n),pt(n),ne(c.sourceProducts.length?c.sourceProducts:c.products,n("home.noProducts"),{screen:h.currentGridScreen})}function Vr(e){const t=document.getElementById(e);t==null||t.classList.add("open"),t==null||t.setAttribute("aria-hidden","false")}function Mt(e){var t,r;(t=document.getElementById(e))==null||t.classList.remove("open"),(r=document.getElementById(e))==null||r.setAttribute("aria-hidden","true")}function En(e){const t=document.getElementById("pdpFullscreenImg"),r=document.getElementById("pdpFullscreen");t&&r&&e&&(t.src=e,r.classList.add("open"),r.setAttribute("aria-hidden","false"))}function Kr(){var e,t;(e=document.getElementById("pdpFullscreen"))==null||e.classList.remove("open"),(t=document.getElementById("pdpFullscreen"))==null||t.setAttribute("aria-hidden","true")}function In(){if(Hr!==null)return;const e=()=>{const t=document.querySelector("#todayDeals .flash-countdown-wrap");t&&h.flashSaleEnd&&(t.innerHTML=co(h.flashSaleEnd))};e(),Hr=window.setInterval(e,1e3)}function An(e){if(e.target.closest("[data-apply-coupon]")){const r=document.getElementById("cartCouponInput"),a=((r==null?void 0:r.value)||"").trim(),s=se.applyCoupon(a,x.getCartTotals().subtotal);s.valid?(b.cartCoupon=s.coupon,b.cartCouponDiscount=s.discount,T(n("cart.couponApplied"),"success")):s.invalid&&T(n("cart.couponInvalid"),"warning"),x.render();return}const t=e.target.closest("[data-restore-saved]");if(t){Ji(t.dataset.restoreSaved),T(n("cart.restored"),"info"),x.render();return}ze(e)}function Ln({item:e,starsHtml:t}){const r=e.review;return`
    <article class="my-review-item">
      <img src="${i(e.image)}" alt="${i(e.name)}" />
      <div>
        <strong>${i(e.name)}</strong>
        <p class="hint">${i(e.brand||"BEAUTY SKIN KOREA")} ${e.orderId?`· Order #${i(e.orderId)}`:""}</p>
        ${r!=null&&r.rating||r!=null&&r.content?`
          <div class="written-review">
            ${t||bt({rating:r.rating})}
            <p>${i(r.content||"No text review.")}</p>
            <p class="hint">${Zt(r.createdAt)}</p>
          </div>
        `:'<p class="hint">Review not written yet.</p>'}
      </div>
      <div class="review-action-cell">
        ${e.reviewable?`
          <button class="secondary-button" data-write-review="${i(e.productId)}" data-review-order="${i(e.orderId)}" data-review-name="${i(e.name)}" type="button">Write review</button>
        `:r!=null&&r.content||r!=null&&r.rating?'<span class="status-badge status-delivered">Reviewed</span>':'<span class="hint">Not reviewable</span>'}
      </div>
    </article>
  `}function Tn({itemsHtml:e=""}){return`<div class="my-reviews-list">${e}</div>`}const be={email:"ismoiljoraxonov1@gmail.com",phone:"+821065110757",phoneDisplay:"+82 10 6511 0757"},Dn=["delivery","cancel","return"];function Rn(e,t){const r=h.supportFaqOpen===t;return`
    <div class="app-support-faq ${r?"is-open":""}">
      <button class="app-support-faq-q" type="button" data-support-faq="${t}">
        <span>${i(n(`support.faq.${e}.q`))}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      ${r?`<div class="app-support-faq-a">${i(n(`support.faq.${e}.a`))}</div>`:""}
    </div>
  `}function Gr(e){return`<ul class="app-support-doc-list">${e.map(t=>`<li>${i(n(t))}</li>`).join("")}</ul>`}const Re={render(){o.supportContent.innerHTML=`
      <div class="app-support-page">
        <header class="app-support-header">
          <button class="app-support-back" type="button" data-support-close aria-label="${i(n("checkout.back"))}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>
          </button>
          <h2>${i(n("support.title"))}</h2>
          <span aria-hidden="true"></span>
        </header>
        <div class="app-support-scroll">
          <p class="app-support-intro">${i(n("support.intro"))}</p>

          <section class="app-support-card">
            <h3>${i(n("support.faqTitle"))}</h3>
            ${Dn.map((e,t)=>Rn(e,t)).join("")}
          </section>

          <section class="app-support-card">
            <h3>${i(n("support.originalTitle"))}</h3>
            <p class="app-support-text">${i(n("support.originalText"))}</p>
            <p class="app-support-subtitle">${i(n("support.whyTitle"))}</p>
            <ul class="app-support-list">
              <li>${i(n("support.why1"))}</li>
              <li>${i(n("support.why2"))}</li>
              <li>${i(n("support.why3"))}</li>
              <li>${i(n("support.why4"))}</li>
              <li>${i(n("support.why5"))}</li>
            </ul>
            <p class="app-support-guarantee">${i(n("support.guarantee"))}</p>
          </section>

          <section class="app-support-card">
            <h3>${i(n("support.contactTitle"))}</h3>
            <div class="app-support-contact-row">
              <span class="app-support-contact-icon" aria-hidden="true">✉️</span>
              <span>Email: <a href="mailto:${i(be.email)}">${i(be.email)}</a></span>
            </div>
            <div class="app-support-contact-row">
              <span class="app-support-contact-icon" aria-hidden="true">📞</span>
              <span>${i(n("support.phoneLabel"))} <a href="tel:${i(be.phone)}">${i(be.phoneDisplay)}</a></span>
            </div>
            <div class="app-support-contact-row">
              <span class="app-support-contact-icon" aria-hidden="true">🕘</span>
              <span>${i(n("support.hoursLabel"))} ${i(n("support.hoursValue"))}</span>
            </div>
            <p class="app-support-contact-note">${i(n("support.contactNote"))}</p>
          </section>
        </div>
      </div>
    `},renderPrivacy(){o.privacyContent.innerHTML=`
      <div class="app-support-page">
        <header class="app-support-header app-support-header--doc">
          <button class="app-support-back" type="button" data-privacy-close aria-label="${i(n("checkout.back"))}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>
          </button>
          <h2>${i(n("privacy.title"))}</h2>
        </header>
        <div class="app-support-scroll">
          <p class="app-support-doc-updated">${i(n("privacy.updated"))}</p>
          <p class="app-support-doc-intro">${i(n("privacy.intro"))}</p>

          <section class="app-support-doc-section">
            <h3>${i(n("privacy.s1title"))}</h3>
            ${Gr(["privacy.s1a","privacy.s1b","privacy.s1c","privacy.s1d"])}
          </section>

          <section class="app-support-doc-section">
            <h3>${i(n("privacy.s2title"))}</h3>
            <p>${i(n("privacy.s2intro"))}</p>
            ${Gr(["privacy.s2a","privacy.s2b","privacy.s2c","privacy.s2d"])}
          </section>

          <section class="app-support-doc-section">
            <h3>${i(n("privacy.s3title"))}</h3>
            <p>${i(n("privacy.s3text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${i(n("privacy.s4title"))}</h3>
            <p>${i(n("privacy.s4text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${i(n("privacy.s5title"))}</h3>
            <p>${i(n("privacy.s5text"))}</p>
            <p class="app-support-doc-contact">✉️ <a href="mailto:${i(be.email)}">${i(be.email)}</a></p>
          </section>
        </div>
      </div>
    `},renderTerms(){o.termsContent.innerHTML=`
      <div class="app-support-page">
        <header class="app-support-header app-support-header--doc">
          <button class="app-support-back" type="button" data-terms-close aria-label="${i(n("checkout.back"))}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>
          </button>
          <h2>${i(n("terms.title"))}</h2>
        </header>
        <div class="app-support-scroll">
          <p class="app-support-doc-updated">${i(n("terms.updated"))}</p>
          <p class="app-support-doc-intro">${i(n("terms.intro"))}</p>

          <section class="app-support-doc-section">
            <h3>${i(n("terms.s1title"))}</h3>
            <p>${i(n("terms.s1text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${i(n("terms.s2title"))}</h3>
            <p>${i(n("terms.s2text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${i(n("terms.s3title"))}</h3>
            <p>${i(n("terms.s3text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${i(n("terms.s4title"))}</h3>
            <p>${i(n("terms.s4text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${i(n("terms.s5title"))}</h3>
            <p>${i(n("terms.s5text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${i(n("terms.s6title"))}</h3>
            <p>${i(n("terms.s6text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${i(n("terms.s7title"))}</h3>
            <p>${i(n("terms.s7text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <p class="app-support-doc-contact">✉️ <a href="mailto:${i(be.email)}">${i(be.email)}</a></p>
          </section>
        </div>
      </div>
    `},handleClick(e,{close:t}={}){const r=e.target.closest("[data-support-faq]");if(e.target.closest("[data-support-close]")){t==null||t();return}if(r){const a=Number(r.dataset.supportFaq);h.supportFaqOpen=h.supportFaqOpen===a?-1:a,Re.render()}},handlePrivacyClick(e,{close:t}={}){e.target.closest("[data-privacy-close]")&&(t==null||t())},handleTermsClick(e,{close:t}={}){e.target.closest("[data-terms-close]")&&(t==null||t())}};function Mn(e,t,r){return K.add(e,t,r,{showLoginRequired:()=>v.showLoginRequired()})}function qn(){return U.prepare({showLoginRequired:()=>v.showLoginRequired()})}function Bn(){var e,t,r,a,s,l,d,u,p,m,f,k,I,D,M,E,B,q;(e=o.languageSelect)==null||e.addEventListener("change",y=>Qr(y.target.value)),o.searchForm.addEventListener("submit",y=>y.preventDefault()),o.searchInput.addEventListener("input",y=>he.handleInput(y)),o.categoryToolbar.addEventListener("click",y=>he.handleCategoryClick(y)),o.quickCategoryGrid.addEventListener("click",y=>he.handleCategoryClick(y)),o.catalogList.addEventListener("click",y=>he.handleCategoryClick(y)),o.banners.addEventListener("click",On),(t=o.homeView)==null||t.addEventListener("click",ze),(r=o.homeView)==null||r.addEventListener("keydown",zr),(a=o.brandViewContent)==null||a.addEventListener("click",ze),o.detailContent.addEventListener("click",jr),o.productDetailPageContent.addEventListener("click",y=>{jr(y)||ze(y)}),o.productDetailPageContent.addEventListener("input",y=>{y.target.matches("[data-review-search]")&&(c.reviewSearchQuery=y.target.value,A.renderProductDetail(c.selectedDetailProduct))}),o.productDetailPageContent.addEventListener("change",y=>{y.target.matches("[data-review-sort]")&&(c.reviewSort=y.target.value,A.renderProductDetail(c.selectedDetailProduct)),y.target.matches("[data-review-filter-rating]")&&(c.reviewFilterRating=Number(y.target.value),A.renderProductDetail(c.selectedDetailProduct))}),o.cartItems.addEventListener("click",Nn),o.cartItems.addEventListener("change",xn),o.catalogButton.addEventListener("click",fs),o.closeCatalog.addEventListener("click",ct),o.cartButton.addEventListener("click",gs),o.closeCart.addEventListener("click",ke),o.loginButton.addEventListener("click",()=>{v.isLoggedIn()?pe.open():v.openDialog("login")}),(s=o.favoritesButton)==null||s.addEventListener("click",()=>Y.open()),o.notificationsButton.addEventListener("click",()=>H.open()),o.apiButton.addEventListener("click",vs),o.loginTab.addEventListener("click",()=>v.setMode("login")),o.registerTab.addEventListener("click",()=>v.setMode("register")),o.authForm.addEventListener("submit",y=>v.submit(y)),(l=o.googleLoginButton)==null||l.addEventListener("click",()=>v.submitFirebase()),o.apiForm.addEventListener("submit",ys),o.checkoutButton.addEventListener("click",qn),o.checkoutForm.addEventListener("submit",Fn),o.checkoutContent.addEventListener("click",zn),o.checkoutContent.addEventListener("submit",Hn),o.ordersContent.addEventListener("click",y=>Le.handleClick(y)),o.refreshOrders.addEventListener("click",()=>Le.load()),o.closeOrders.addEventListener("click",()=>o.ordersDialog.close()),(d=o.favoritesContent)==null||d.addEventListener("click",Un),(u=o.favoritesContent)==null||u.addEventListener("keydown",zr),(p=o.refreshFavorites)==null||p.addEventListener("click",()=>Y.load({render:!0})),(m=o.closeFavorites)==null||m.addEventListener("click",()=>Y.close()),o.notificationsContent.addEventListener("click",Vn),o.refreshNotifications.addEventListener("click",()=>{H.load(),H.loadUnreadCount()}),o.closeNotifications.addEventListener("click",()=>H.close()),o.myReviewsContent.addEventListener("click",rc),o.refreshMyReviews.addEventListener("click",Pt),o.closeMyReviews.addEventListener("click",dr),o.writeReviewForm.addEventListener("submit",tc),o.closeWriteReview.addEventListener("click",ft),o.reviewRatingSelector.addEventListener("click",ac),(f=o.closeProfile)==null||f.addEventListener("click",()=>pe.close()),o.profileContent.addEventListener("click",y=>{ze(y)||pe.handleAction(y)}),o.profileContent.addEventListener("submit",y=>pe.submitEdit(y)),o.ordersButton.addEventListener("click",()=>Le.show()),(k=o.supportButton)==null||k.addEventListener("click",Ra),(I=o.supportContent)==null||I.addEventListener("click",Gn),(D=o.supportDialog)==null||D.addEventListener("close",F),(M=o.privacyContent)==null||M.addEventListener("click",Yn),(E=o.privacyDialog)==null||E.addEventListener("close",F),(B=o.termsContent)==null||B.addEventListener("click",Qn),(q=o.termsDialog)==null||q.addEventListener("close",F),o.refreshHome.addEventListener("click",()=>z.load({loadCart:()=>K.load()})),o.loadMore.addEventListener("click",()=>te.loadMoreProducts()),window.addEventListener("hashchange",gt),o.catalogDrawer.addEventListener("click",y=>{y.target===o.catalogDrawer&&ct()}),o.cartDrawer.addEventListener("click",y=>{y.target===o.cartDrawer&&ke()}),o.profileDrawer.addEventListener("click",y=>{y.target===o.profileDrawer&&pe.close()}),o.notificationsDrawer.addEventListener("click",y=>{y.target===o.notificationsDrawer&&H.close()}),document.addEventListener("keydown",y=>{y.key==="Escape"&&(ct(),ke(),pe.close(),H.close(),o.ordersDialog.open&&o.ordersDialog.close(),o.favoritesDialog.open&&o.favoritesDialog.close(),o.myReviewsDialog.open&&o.myReviewsDialog.close(),o.writeReviewDialog.open&&o.writeReviewDialog.close())}),o.detailDialog.addEventListener("close",F),o.authDialog.addEventListener("close",F),o.apiDialog.addEventListener("close",F),o.checkoutDialog.addEventListener("close",()=>{U.abortOrder(),g.checkoutConfirmOpen=!1,g.orderSubmitting=!1,g.orderSuccess=null,g.checkoutError="",F()}),o.ordersDialog.addEventListener("close",F),o.favoritesDialog.addEventListener("close",()=>{F(),de()}),o.myReviewsDialog.addEventListener("close",F),o.writeReviewDialog.addEventListener("close",F),document.querySelectorAll("[data-close-dialog]").forEach(y=>{y.addEventListener("click",()=>{var Q;return(Q=y.closest("dialog"))==null?void 0:Q.close()})})}function On(e){const t=e.target.closest("[data-banner-dot]");if(t){z.scrollToBanner(Number(t.dataset.bannerDot)),z.resetBannerAutoSlide();return}const r=e.target.closest("[data-banner-nav]");if(r){r.dataset.bannerNav==="next"?z.nextBanner():z.prevBanner(),z.resetBannerAutoSlide();return}const a=e.target.closest("[data-banner-link-type]");if(!a)return;const s=a.dataset.bannerLinkType,l=a.dataset.bannerLinkId;if(s==="PRODUCT"&&l){Ae(l);return}if(s==="CATEGORY"&&l){const d=c.categories.find(u=>String(u)===String(l))||(Yr[l]?l:"");d?(Ut(),te.renderCategoryProducts(d,{showHomeView:Ce})):T("Category banner is not available yet.","info")}}function jr(e){const t=e.target.closest("[data-route-home]"),r=e.target.closest(".product-detail-page [data-category]"),a=e.target.closest("[data-brand]"),s=e.target.closest("[data-close-detail]"),l=e.target.closest("[data-variant]"),d=e.target.closest("[data-qty]"),u=e.target.closest("[data-detail-add]"),p=e.target.closest("[data-detail-favorite]"),m=e.target.closest("[data-compare]"),f=e.target.closest("[data-reviews-retry]"),k=e.target.closest("[data-pdp-thumb]"),I=e.target.closest("[data-pdp-tab]"),D=e.target.closest("[data-pdp-zoom]"),M=e.target.closest("[data-pdp-fullscreen]"),E=e.target.closest("[data-review-helpful]");if(t)return e.stopPropagation(),Ut(),!0;if(a&&a.dataset.brand)return e.stopPropagation(),window.location.hash=`#/brand/${encodeURIComponent(a.dataset.brand)}`,!0;if(r)return e.stopPropagation(),Ut(),te.renderCategoryProducts(r.dataset.category,{showHomeView:Ce}),!0;if(s)return e.stopPropagation(),o.detailDialog.close(),F(),!0;if(k)return e.stopPropagation(),c.pdpGalleryIndex=Number(k.dataset.pdpThumb),A.renderProductDetail(c.selectedDetailProduct),!0;if(D)return e.stopPropagation(),D.classList.toggle("zoomed"),!0;if(M){e.stopPropagation();const B=document.getElementById("pdpMainImage");return En(B==null?void 0:B.src),!0}if(I)return e.stopPropagation(),c.pdpActiveTab=I.dataset.pdpTab,A.renderProductDetail(c.selectedDetailProduct),!0;if(m)return e.stopPropagation(),Da(m.dataset.compare),!0;if(l)return e.stopPropagation(),c.selectedVariantId=l.dataset.variant,A.renderProductDetail(c.selectedDetailProduct),!0;if(d)return e.stopPropagation(),c.selectedQuantity=Math.max(1,c.selectedQuantity+(d.dataset.qty==="plus"?1:-1)),A.renderProductDetail(c.selectedDetailProduct),!0;if(p)return e.stopPropagation(),Y.toggle(p.dataset.detailFavorite),!0;if(f)return e.stopPropagation(),He.loadReviews(f.dataset.reviewsRetry),!0;if(E){e.stopPropagation();const B=E.dataset.reviewHelpful;return c.reviewHelpfulIds.has(B)?c.reviewHelpfulIds.delete(B):c.reviewHelpfulIds.add(B),A.renderProductDetail(c.selectedDetailProduct),!0}if(u){e.stopPropagation();const B=document.getElementById("quantityInput");return c.selectedQuantity=Math.max(1,Number((B==null?void 0:B.value)||c.selectedQuantity)),Mn(c.selectedDetailProduct.id,c.selectedVariantId,c.selectedQuantity),!0}return!1}function xn(e){const t=e.target;if(!t.matches("[data-cart-select-all], [data-cart-item-check]"))return;const r=x.getCartSelectedIds();if(t.matches("[data-cart-select-all]")){t.checked?b.cartItems.forEach(s=>r.add(String(s.id))):r.clear(),x.render();return}const a=String(t.dataset.cartItemCheck||"");a&&(t.checked?r.add(a):r.delete(a),x.render())}function Nn(e){var u;const t=e.target.closest("[data-cart-retry]"),r=e.target.closest("[data-start-shopping]"),a=e.target.closest("[data-cart-qty]"),s=e.target.closest("[data-remove]"),l=e.target.closest("[data-save-later]"),d=e.target.closest("[data-cart-delete-selected]");if(t&&K.load(),r&&(ke(),(u=document.getElementById("products"))==null||u.scrollIntoView({behavior:"smooth",block:"start"})),d&&!d.disabled){K.removeSelected();return}if(l){const p=b.cartItems.find(m=>String(m.id)===String(l.dataset.saveLater));p&&(_i(p),K.removeItem(p.id));return}if(a){const p=b.cartItems.find(m=>String(m.id)===String(a.dataset.cartId));p&&K.updateQuantity(p.id,p.quantity+(a.dataset.cartQty==="plus"?1:-1))}s&&K.removeItem(s.dataset.remove)}function Fn(e){e.preventDefault(),U.openConfirm()}async function zn(e){var q,y;const t=e.target.closest("[data-checkout-close]"),r=e.target.closest("[data-checkout-toggle-address]"),a=e.target.closest("[data-checkout-toggle-receiver]"),s=e.target.closest("[data-checkout-toggle-coupon]"),l=e.target.closest("[data-apply-coupon]"),d=e.target.closest("[data-select-receiver]"),u=e.target.closest("[data-select-address]"),p=e.target.closest("[data-delete-receiver]"),m=e.target.closest("[data-delete-address]"),f=e.target.closest("[data-place-order]"),k=e.target.closest("[data-checkout-confirm-cancel]"),I=e.target.closest("[data-checkout-confirm-submit]"),D=e.target.closest("[data-checkout-success-dismiss]"),M=e.target.closest("[data-checkout-success-card]"),E=e.target.closest("[data-success-orders]"),B=e.target.closest("[data-success-continue]");if(t){U.abortOrder(),g.checkoutConfirmOpen=!1,g.orderSubmitting=!1,g.orderSuccess=null,g.checkoutError="",o.checkoutDialog.close(),F();return}if(r){g.checkoutAddressPickerOpen=!g.checkoutAddressPickerOpen,g.checkoutError="",j.render();return}if(a){g.checkoutReceiverPickerOpen=!g.checkoutReceiverPickerOpen,g.checkoutError="",j.render();return}if(s){g.checkoutCouponOpen=!g.checkoutCouponOpen,j.render();return}if(l){const Q=document.getElementById("checkoutCouponInput");U.applyCoupon(((Q==null?void 0:Q.value)||"").trim());return}if(p){e.stopPropagation(),await U.deleteReceiver(p.dataset.deleteReceiver);return}if(m){e.stopPropagation(),await U.deleteAddress(m.dataset.deleteAddress);return}if(d){g.selectedReceiverId=d.dataset.selectReceiver,g.checkoutReceiverPickerOpen=!1,g.checkoutError="",j.render();return}if(u){g.selectedAddressId=u.dataset.selectAddress,g.checkoutAddressPickerOpen=!1,g.checkoutError="",j.render();return}if(f){U.openConfirm();return}if(k){U.abortOrder(),g.checkoutConfirmOpen=!1,g.orderSubmitting=!1,g.checkoutError="",j.render();return}if(I){await U.submitOrder();return}if(D&&!M){U.finishAndGoHome(),(q=document.getElementById("products"))==null||q.scrollIntoView({behavior:"smooth",block:"start"});return}if(E){o.checkoutDialog.close(),await Le.show();return}B&&(o.checkoutDialog.close(),ke(),(y=document.getElementById("products"))==null||y.scrollIntoView({behavior:"smooth",block:"start"}))}async function Hn(e){const t=e.target.closest("[data-add-receiver-form]"),r=e.target.closest("[data-add-address-form]");!t&&!r||(e.preventDefault(),t&&await U.createReceiver(),r&&await U.createAddress())}function Un(e){G.handleClick(e,{close:()=>Y.close(),reload:()=>Y.load({render:!0}),handleProductGridClick:ze})}function Vn(e){const t=e.target.closest("[data-notifications-retry]"),r=e.target.closest("[data-notification-read]"),a=e.target.closest("[data-notification-card]");if(t){H.load(),H.loadUnreadCount();return}if(r){e.stopPropagation(),H.markRead(r.dataset.notificationRead);return}a&&H.handleCardClick(a.dataset.notificationCard)}function Ra(){h.supportFaqOpen=0,Re.render(),o.supportDialog.showModal(),J()}function Kn(){o.supportDialog.close(),F()}function Gn(e){Re.handleClick(e,{close:Kn})}function jn(){Re.renderPrivacy(),o.privacyDialog.showModal(),J()}function Wn(){o.privacyDialog.close(),F()}function Yn(e){Re.handlePrivacyClick(e,{close:Wn})}function _n(){Re.renderTerms(),o.termsDialog.showModal(),J()}function Jn(){o.termsDialog.close(),F()}function Qn(e){Re.handleTermsClick(e,{close:Jn})}async function Zn(){if(!v.isLoggedIn()){v.showLoginRequired();return}o.myReviewsDialog.showModal(),J(),await Pt()}async function Pt(){if(!v.isLoggedIn()){v.showLoginRequired();return}c.myReviewsLoading=!0,c.myReviewsError="",lt();const e=await Se.loadMyReviews();if(c.myReviewsLoading=!1,!e.success){if(e.sessionExpired){dr(),ft();return}c.myReviewsError=e.error,lt();return}c.myReviews=e.items,lt()}function lt(){if(o.myReviewsSummary.textContent=c.myReviews.length?`${c.myReviews.length} item${c.myReviews.length===1?"":"s"}`:"Purchased products and written reviews",c.myReviewsLoading){o.myReviewsContent.innerHTML=`
      <div class="my-reviews-list">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    `;return}if(c.myReviewsError){o.myReviewsContent.innerHTML=`
      <div class="reviews-empty-state">
        <strong>Reviews unavailable</strong>
        <p>${i(c.myReviewsError)}</p>
        <button class="secondary-button" data-my-reviews-retry type="button">Retry</button>
      </div>
    `;return}if(!c.myReviews.length){o.myReviewsContent.innerHTML=`
      <div class="reviews-empty-state">
        <strong>No review items yet</strong>
        <p>Your written reviews and reviewable purchases will appear here.</p>
      </div>
    `;return}o.myReviewsContent.innerHTML=Tn({itemsHtml:c.myReviews.map(e=>Xn(e)).join("")})}function Xn(e){var t;return Ln({item:e,starsHtml:(t=e.review)!=null&&t.rating?ha(e.review.rating):""})}function Ma(e={}){if(!v.isLoggedIn()){v.showLoginRequired();return}const t=e.productId,r=e.orderId;if(!t||!r){T("Product and order are required for review.");return}c.reviewDraft={productId:t,orderId:r,productName:e.productName||"Product"},c.reviewRating=5,o.writeReviewProduct.textContent=`${c.reviewDraft.productName} · Order #${r}`,o.reviewContent.value="",o.reviewImages.value="",o.reviewImageFiles.value="",o.reviewUploadStatus.textContent="",Qe(""),qa(),o.writeReviewDialog.showModal(),J()}function qa(){o.reviewRatingSelector.innerHTML=Array.from({length:5},(e,t)=>{const r=t+1;return`
      <button class="rating-choice ${r<=c.reviewRating?"active":""}" data-review-rating="${r}" type="button" aria-label="Rating ${r} out of 5">
        ★
      </button>
    `}).join("")}function dr(){o.myReviewsDialog.open&&o.myReviewsDialog.close(),F()}function ft(){o.writeReviewDialog.open&&o.writeReviewDialog.close(),F()}function Qe(e,t=""){o.reviewFormMessage.textContent=e,o.reviewFormMessage.className=`form-message ${t}`.trim()}async function ec(e){return Se.uploadReviewImages(e,{onProgress:t=>{o.reviewUploadStatus.textContent=t}})}async function tc(e){var u;if(e.preventDefault(),c.reviewSubmitting)return;const t=c.reviewDraft||{},r=o.reviewContent.value.trim(),a=Se.validateSubmitReview({productId:t.productId,orderId:t.orderId,rating:c.reviewRating,content:r,manualImageUrlsText:o.reviewImages.value,files:o.reviewImageFiles.files});if(!a.valid){Qe(a.errors[0],"error");return}c.reviewSubmitting=!0,c.uploadingReviewImages=!!a.fileValidation.files.length,o.submitReviewButton.disabled=!0,o.submitReviewButton.textContent="Submitting...",Qe("");let s=[];try{s=a.fileValidation.files.length?await ec(a.fileValidation.files):[]}catch(p){c.reviewSubmitting=!1,c.uploadingReviewImages=!1,o.submitReviewButton.disabled=!1,o.submitReviewButton.textContent="Submit review",Qe(p.message||"Image upload failed.","error");return}const l=[...s,...a.manualImageUrls].slice(0,5),d=await Se.submitReview({productId:t.productId,orderId:t.orderId,rating:c.reviewRating,content:r,imageUrls:l});if(c.reviewSubmitting=!1,c.uploadingReviewImages=!1,o.submitReviewButton.disabled=!1,o.submitReviewButton.textContent="Submit review",o.reviewUploadStatus.textContent="",!d.success){if(d.sessionExpired){dr(),ft();return}Qe(d.error,"error");return}T("Review submitted"),ft(),await Pt(),((u=c.selectedDetailProduct)==null?void 0:u.id)!==void 0&&String(c.selectedDetailProduct.id)===String(t.productId)&&await He.loadReviews(t.productId)}function rc(e){const t=e.target.closest("[data-my-reviews-retry]"),r=e.target.closest("[data-write-review]");if(t){Pt();return}r&&Ma({productId:r.dataset.writeReview,orderId:r.dataset.reviewOrder,productName:r.dataset.reviewName})}function ac(e){const t=e.target.closest("[data-review-rating]");t&&(c.reviewRating=Number(t.dataset.reviewRating),qa())}function ic(){Jt(Wt()),te.renderCategories(),Fe(),h.currentRoute==="product"&&c.selectedDetailProduct?A.renderProductDetail(c.selectedDetailProduct):(Z(o.grid,c.products,n("home.noProducts"),{screen:h.currentGridScreen}),Z(o.dealsGrid,c.todayDeals.slice(0,8),n("home.noProducts")),c.homeApiSections&&z.renderHomeApiSections(c.homeApiSections)),o.cartDrawer.classList.contains("open")&&x.render(),o.profileDrawer.classList.contains("open")&&re.render(),o.favoritesDialog.open&&G.render(),o.ordersDialog.open&&ae.render(),o.notificationsDrawer.classList.contains("open")&&W.render(),o.myReviewsDialog.open&&lt(),v.updateUi()}async function oc(){if(!oe.getRecentProductIds().length){c.recentlyViewed=[];return}c.recentlyViewed=await oe.loadRecentlyViewed()}function sc(){$i({cart:{load:()=>K.load(),render:()=>x.render()},favorites:{load:e=>Y.load(e),open:()=>Y.open(),updateUi:()=>Y.updateUi()},notifications:{open:()=>H.open(),load:()=>H.load(),loadUnreadCount:()=>H.loadUnreadCount(),clearState:()=>H.clearState()},home:{ensureRecentlyViewed:oc},profile:{render:()=>re.render()},orders:{show:()=>Le.show()},reviews:{open:Zn,openWrite:Ma},support:{open:Ra,openPrivacy:jn,openTerms:_n},checkout:{prepare:()=>U.prepare({showLoginRequired:v.showLoginRequired})},i18n:{t:n,setLanguage:Qr,applyTranslations:()=>Jt(Wt())},navigation:{unlockBodyIfNoOverlay:F},toast:T})}async function nc(){sc(),ai(ic),_a({onUnauthorized:()=>{v.clearAuth(),v.openDialog("login"),T(n("auth.sessionExpired"))},onLoginRequired:()=>v.showLoginRequired(),showToast:(e,t="error")=>T(e,t)});try{Bn(),Cn(),Jt(Wt())}catch(e){console.error("Init event binding failed:",e),o.status.textContent=`UI ishga tushishda xatolik yuz berdi: ${e.message}`,T("UI ishga tushishda xatolik yuz berdi.");return}v.updateUi(),v.validateOnStartup().catch(e=>{console.error("Auth startup failed:",e)}),z.load({loadCart:()=>K.load()}).then(()=>gt()).catch(e=>{console.error("Home loading failed:",e),c.demoProducts=!1,c.demoDeals=!1,o.status.textContent="",o.dealsStatus.textContent="",me(o.grid,n("common.serverFailed"),n("common.tryAgain")),Fe(),gt()})}function cc(){Va(),Ka(),h.baseUrl=vt(localStorage.getItem(S.storageKeys.baseUrl)||""),ja(),ot()&&(console.assert(document.getElementById("productGrid"),"productGrid missing"),console.assert(document.getElementById("dealsGrid"),"dealsGrid missing"),console.assert(document.getElementById("productStatus"),"productStatus missing"),console.assert(document.getElementById("dealsStatus"),"dealsStatus missing"),console.assert(document.getElementById("quickCategoryGrid"),"quickCategoryGrid missing")),nc()}cc();
