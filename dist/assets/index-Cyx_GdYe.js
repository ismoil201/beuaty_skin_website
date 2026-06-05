(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}})();const m={productionApiBaseUrl:"https://cosmetic-server-production.up.railway.app",defaultPageSize:24,searchDebounceMs:300,storageKeys:{accessToken:"zaven_token",legacyAccessToken:"accessToken",user:"zaven_user",legacyUser:"user",role:"role",baseUrl:"zaven_base_url",sessionId:"zaven_session_id",recentProducts:"zaven_recent_products",language:"beauty_skin_language"},placeholderImage:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"};function Pe(){var e;try{return((e=import.meta)==null?void 0:e.env)??{}}catch{return{}}}function It(e){const r=Pe()[e];return typeof r=="string"?r.trim():""}function _(){return!!Pe().DEV}const be=m.productionApiBaseUrl.replace(/\/+$/,""),Lt=new Set(["5173","4173"]),kt=new Set(["5500","5501","5502"]);let We=!1;function Ee(e=(r=>(r=globalThis.location)==null?void 0:r.hostname)()){return e==="localhost"||e==="127.0.0.1"}function Qe(e=(r=>(r=globalThis.location)==null?void 0:r.port)()){return Lt.has(String(e||""))}function Dt(e=(r=>(r=globalThis.location)==null?void 0:r.port)()){return kt.has(String(e||""))}function Je(){We||(We=!0,console.warn("[BEAUTY SKIN KOREA] Live Server (port 5500) is not supported. Run `npm install && npm run dev` and open http://localhost:5173 . Calling Railway API directly as fallback."))}function Rt(e){const r=String(e||"").trim().replace(/\/+$/,"").toLowerCase();return r?r.includes("localhost")||r.includes("127.0.0.1")||r.includes("0.0.0.0")||r.startsWith("file:"):!1}function te(e){const r=String(e||"").trim().replace(/\/+$/,"");return!r||r.includes("cosmetic-server-production.up.railway.app")||!Ee()&&Rt(r)?"":r}function Tt(e=""){const r=It("VITE_API_BASE_URL").replace(/\/+$/,"");if(r)return r;if(Dt())return Je(),be;const i=te(e);return i||(Ee()&&Qe()&&_()?"":(Ee()&&!Qe()&&Je(),be))}function Nt(e,r){try{return JSON.parse(localStorage.getItem(e)||"null")||r}catch{return r}}function ue(){return localStorage.getItem(m.storageKeys.accessToken)||localStorage.getItem(m.storageKeys.legacyAccessToken)||""}function Mt(){let e=localStorage.getItem(m.storageKeys.sessionId);return e||(e=`web-${Date.now()}-${Math.random().toString(36).slice(2,10)}`,localStorage.setItem(m.storageKeys.sessionId,e)),e}function Ot(){const e=localStorage.getItem(m.storageKeys.legacyAccessToken);!localStorage.getItem(m.storageKeys.accessToken)&&e&&localStorage.setItem(m.storageKeys.accessToken,e);const i=localStorage.getItem(m.storageKeys.legacyUser);!localStorage.getItem(m.storageKeys.user)&&i&&localStorage.setItem(m.storageKeys.user,i)}function Bt(){const e=localStorage.getItem(m.storageKeys.baseUrl)||"",r=te(e);r!==e.trim().replace(/\/+$/,"")&&localStorage.setItem(m.storageKeys.baseUrl,r)}const a={homeView:null,languageSelect:null,grid:null,dealsGrid:null,homeApiSections:null,recentlyViewedSection:null,recentlyViewedGrid:null,banners:null,announcements:null,categoryToolbar:null,quickCategoryGrid:null,catalogButton:null,catalogDrawer:null,closeCatalog:null,catalogList:null,status:null,dealsStatus:null,productsMode:null,dealsMode:null,title:null,loadMore:null,searchForm:null,searchInput:null,cartButton:null,cartDrawer:null,closeCart:null,cartItems:null,cartCount:null,cartSummary:null,cartTotal:null,authDialog:null,authForm:null,authTitle:null,loginTab:null,registerTab:null,loginFields:null,registerFields:null,authSubmit:null,authMessage:null,loginButton:null,favoritesButton:null,favoritesCount:null,favoritesDialog:null,favoritesSummary:null,favoritesContent:null,refreshFavorites:null,closeFavorites:null,notificationsButton:null,notificationsCount:null,notificationsDrawer:null,notificationsSummary:null,notificationsContent:null,refreshNotifications:null,closeNotifications:null,loginEmail:null,loginPassword:null,registerFullName:null,registerEmail:null,registerPhone:null,registerPassword:null,registerConfirmPassword:null,profileDrawer:null,closeProfile:null,profileContent:null,apiDialog:null,apiForm:null,apiButton:null,baseUrl:null,detailDialog:null,detailContent:null,productDetailPage:null,productDetailPageContent:null,checkoutButton:null,checkoutDialog:null,checkoutForm:null,checkoutHint:null,receiverSelect:null,addressSelect:null,checkoutContent:null,refreshHome:null,ordersButton:null,ordersDialog:null,ordersContent:null,refreshOrders:null,closeOrders:null,myReviewsDialog:null,myReviewsContent:null,myReviewsSummary:null,refreshMyReviews:null,closeMyReviews:null,writeReviewDialog:null,writeReviewForm:null,closeWriteReview:null,writeReviewProduct:null,reviewRatingSelector:null,reviewContent:null,reviewImages:null,reviewImageFiles:null,reviewUploadStatus:null,reviewFormMessage:null,submitReviewButton:null,toast:null},qt={homeView:"homeView",languageSelect:"languageSelect",grid:"productGrid",dealsGrid:"dealsGrid",homeApiSections:"homeApiSections",recentlyViewedSection:"recentlyViewedSection",recentlyViewedGrid:"recentlyViewedGrid",banners:"banners",announcements:"announcements",categoryToolbar:"categoryToolbar",quickCategoryGrid:"quickCategoryGrid",catalogButton:"catalogButton",catalogDrawer:"catalogDrawer",closeCatalog:"closeCatalog",catalogList:"catalogList",status:"productStatus",dealsStatus:"dealsStatus",productsMode:"productsMode",dealsMode:"dealsMode",title:"productsTitle",loadMore:"loadMore",searchForm:"searchForm",searchInput:"searchInput",cartButton:"cartButton",cartDrawer:"cartDrawer",closeCart:"closeCart",cartItems:"cartItems",cartCount:"cartCount",cartSummary:"cartSummary",cartTotal:"cartTotal",authDialog:"authDialog",authForm:"authForm",authTitle:"authTitle",loginTab:"loginTab",registerTab:"registerTab",loginFields:"loginFields",registerFields:"registerFields",authSubmit:"authSubmit",authMessage:"authMessage",loginButton:"loginButton",favoritesButton:"favoritesButton",favoritesCount:"favoritesCount",favoritesDialog:"favoritesDialog",favoritesSummary:"favoritesSummary",favoritesContent:"favoritesContent",refreshFavorites:"refreshFavorites",closeFavorites:"closeFavorites",notificationsButton:"notificationsButton",notificationsCount:"notificationsCount",notificationsDrawer:"notificationsDrawer",notificationsSummary:"notificationsSummary",notificationsContent:"notificationsContent",refreshNotifications:"refreshNotifications",closeNotifications:"closeNotifications",loginEmail:"loginEmail",loginPassword:"loginPassword",registerFullName:"registerFullName",registerEmail:"registerEmail",registerPhone:"registerPhone",registerPassword:"registerPassword",registerConfirmPassword:"registerConfirmPassword",profileDrawer:"profileDrawer",closeProfile:"closeProfile",profileContent:"profileContent",apiDialog:"apiDialog",apiForm:"apiForm",apiButton:"apiButton",baseUrl:"baseUrl",detailDialog:"detailDialog",detailContent:"detailContent",productDetailPage:"productDetailPage",productDetailPageContent:"productDetailPageContent",checkoutButton:"checkoutButton",checkoutDialog:"checkoutDialog",checkoutForm:"checkoutForm",checkoutHint:"checkoutHint",receiverSelect:"receiverSelect",addressSelect:"addressSelect",checkoutContent:"checkoutContent",refreshHome:"refreshHome",ordersButton:"ordersButton",ordersDialog:"ordersDialog",ordersContent:"ordersContent",refreshOrders:"refreshOrders",closeOrders:"closeOrders",myReviewsDialog:"myReviewsDialog",myReviewsContent:"myReviewsContent",myReviewsSummary:"myReviewsSummary",refreshMyReviews:"refreshMyReviews",closeMyReviews:"closeMyReviews",writeReviewDialog:"writeReviewDialog",writeReviewForm:"writeReviewForm",closeWriteReview:"closeWriteReview",writeReviewProduct:"writeReviewProduct",reviewRatingSelector:"reviewRatingSelector",reviewContent:"reviewContent",reviewImages:"reviewImages",reviewImageFiles:"reviewImageFiles",reviewUploadStatus:"reviewUploadStatus",reviewFormMessage:"reviewFormMessage",submitReviewButton:"submitReviewButton",toast:"toast"};function Ft(){Object.entries(qt).forEach(([e,r])=>{a[e]=document.getElementById(r)})}const at={SKINCARE:"Skincare",MAKEUP:"Makeup",COLLAGEN:"Collagen",HAIR_CARE:"Hair Care",FRAGRANCE:"Fragrance",TOP:"Top",OUTER:"Outer",PANTS:"Pants",SHOES:"Shoes",BAG:"Bag",ACCESSORY:"Accessory"},it=["uz","en","ru","ko"],W="uz",Ut=[{category:"SKINCARE",icon:"S"},{category:"MAKEUP",icon:"M"},{category:"COLLAGEN",icon:"C"},{category:"HAIR_CARE",icon:"H"},{category:"FRAGRANCE",icon:"F"},{category:"BAG",icon:"B"},{category:"SHOES",icon:"S"},{category:"ACCESSORY",icon:"A"}],t={baseUrl:te(localStorage.getItem(m.storageKeys.baseUrl)||""),accessToken:ue(),user:Nt(m.storageKeys.user,null),role:localStorage.getItem(m.storageKeys.role)||"",authMode:"login",authLoading:!1,profileEditing:!1,lastApiError:"",products:[],todayDeals:[],categories:[],cart:[],cartItems:[],cartLoading:!1,cartError:"",cartCount:0,cartTotal:0,cartUpdatingIds:new Set,addingProductIds:new Set,receivers:[],addresses:[],selectedReceiverId:null,selectedAddressId:null,checkoutLoading:!1,orderSubmitting:!1,checkoutError:"",orderSuccess:null,orders:[],ordersLoading:!1,ordersError:"",selectedOrder:null,selectedOrderHistory:[],orderDetailLoading:!1,orderDetailError:"",orderHistoryWarning:"",favoriteProducts:[],favoriteIds:new Set,favoritesLoading:!1,favoritesError:"",favoritesCount:0,productReviewsByProductId:{},productReviewsLoading:{},productReviewsError:{},myReviews:[],myReviewsLoading:!1,myReviewsError:"",reviewSubmitting:!1,reviewDraft:null,reviewRating:5,notifications:[],notificationsLoading:!1,notificationsError:"",unreadCount:0,unreadCountLoading:!1,notificationUpdatingIds:new Set,currentRoute:"home",detailLoading:!1,detailError:"",recommendedProducts:[],recommendedSimilar:[],recommendedOthers:[],recommendationsLoading:!1,recommendationsError:"",selectedCategory:"ALL",selectedDetailProduct:null,selectedVariantId:null,selectedQuantity:1,searchTimer:null,isLoading:!1,demoCategories:!1,demoProducts:!1,demoDeals:!1,homeLoadedFromApi:!1,feedLoading:!1,feedPage:0,currentSearchQuery:"",currentGridScreen:"home",impressionsSent:new Set,impressionObserver:null,sessionId:Mt(),banners:[],announcements:[],recentlyViewed:[],uploadingReviewImages:!1};function n(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}const ot={"header.location":"📍 Toshkent","header.extraLinks":"Qo‘shimcha havolalar","header.pickupPoints":"Punktlar","header.sell":"Sotuvchi bo‘lish","header.support":"Savol-javob","header.orders":"Buyurtmalar","header.language":"Til","header.homeAria":"BEAUTY SKIN KOREA bosh sahifa","header.openCatalog":"Katalogni ochish","header.catalog":"Katalog","header.search":"Qidirish","header.searchPlaceholder":"Mahsulot va kategoriyalarni qidirish","header.mainMenu":"Asosiy menyu","header.loginProfile":"Profil yoki kirish","auth.login":"Kirish","auth.register":"Ro‘yxatdan o‘tish","auth.email":"Email","auth.password":"Parol","auth.confirmPassword":"Parolni tasdiqlang","auth.fullName":"To‘liq ism","auth.phone":"Telefon","auth.signIn":"Kirish","auth.createAccount":"Hisob yaratish","auth.logout":"Chiqish","auth.loginRequired":"Davom etish uchun kiring","auth.sessionExpired":"Sessiya tugadi. Qayta kiring.","auth.emailRequired":"Email majburiy.","auth.passwordMin":"Parol kamida 6 ta belgi bo‘lsin.","auth.fullNameRequired":"To‘liq ism majburiy.","auth.phoneRequired":"Telefon majburiy.","auth.passwordMismatch":"Parollar mos emas.","home.all":"Hammasi","home.categories":"Kategoriyalar","home.quickCategories":"Tezkor kategoriyalar","home.todayDeals":"Bugungi takliflar","home.discounts":"Chegirmalar","home.newArrivals":"Yangi mahsulotlar","home.popular":"Ommabop mahsulotlar","home.recommended":"Siz uchun tavsiyalar","home.similar":"O‘xshash mahsulotlar","home.others":"Boshqalar ham ko‘rgan","home.demoMode":"Demo rejim","home.todayOnly":"Faqat bugun","home.startShopping":"Xaridni boshlash","home.showAll":"Barcha mahsulotlar","home.loadMore":"Yana yuklash","home.noProducts":"Mahsulot topilmadi","home.loading":"Yuklanmoqda...","product.addToCart":"Savatga","product.addToCartFull":"Savatga qo‘shish","product.adding":"Qo‘shilmoqda...","product.sold":"{count} dona sotilgan","product.stock":"Omborda: {count}","product.outOfStock":"Omborda yo‘q","product.save":"Saqlash","product.saved":"Saqlangan","product.viewDetails":"Batafsil","product.reviews":"Sharhlar","product.home":"Bosh sahifa","product.description":"Tavsif","product.detailImages":"Batafsil rasmlar","product.details":"Tafsilotlar","product.delivery":"O‘zbekiston bo‘ylab yetkazib berish","product.secure":"Xavfsiz to‘lov","product.original":"Asl koreys mahsulotlari","product.quantity":"Miqdor","product.notFound":"Mahsulot topilmadi","product.backToShopping":"Xaridga qaytish","product.variantUnavailable":"Variant mavjud emas","cart.title":"Savat","cart.empty":"Savatingiz bo‘sh","cart.subtotal":"Jami","cart.checkout":"Rasmiylashtirish","cart.remove":"O‘chirish","cart.quantity":"Miqdor","cart.added":"Savatga qo‘shildi","cart.itemRemoved":"Mahsulot o‘chirildi","cart.unavailable":"Savat mavjud emas","checkout.title":"Rasmiylashtirish","checkout.receiver":"Qabul qiluvchi","checkout.address":"Yetkazib berish manzili","checkout.orderSummary":"Buyurtma xulosasi","checkout.placeOrder":"Buyurtma berish","checkout.orderCreated":"Buyurtma yaratildi","checkout.continueShopping":"Xaridni davom ettirish","checkout.viewOrders":"Buyurtmalarni ko‘rish","orders.title":"Mening buyurtmalarim","orders.order":"Buyurtma","orders.details":"Buyurtma tafsilotlari","orders.history":"Status tarixi","orders.none":"Hali buyurtmalar yo‘q","orders.refresh":"Yangilash","orders.viewDetails":"Batafsil","orders.items":"{count} ta mahsulot","favorites.title":"Saralangan","favorites.empty":"Hali saralangan mahsulotlar yo‘q","favorites.added":"Saralanganlarga qo‘shildi","favorites.removed":"Saralangandan olib tashlandi","profile.myProfile":"Profil","profile.edit":"Profilni tahrirlash","profile.save":"Saqlash","profile.myOrders":"Buyurtmalarim","profile.myReviews":"Sharhlarim","reviews.my":"Mening sharhlarim","reviews.write":"Sharh yozish","reviews.submit":"Sharh yuborish","reviews.rating":"Reyting","reviews.content":"Sharh matni","reviews.none":"Hali sharhlar yo‘q","reviews.noText":"Matnli sharh yo‘q.","reviews.submitted":"Sharh yuborildi","notifications.title":"Bildirishnomalar","notifications.alerts":"Xabarlar","notifications.none":"Hali bildirishnomalar yo‘q","notifications.markRead":"O‘qildi deb belgilash","notifications.read":"O‘qilgan","notifications.unread":"O‘qilmagan","common.tryAgain":"Qayta urinish","common.somethingWrong":"Nimadir xato ketdi","common.serverFailed":"Server bilan aloqa bo‘lmadi","common.saving":"Saqlanmoqda...","common.total":"Jami","common.unknown":"Noma’lum","common.unavailable":"Mavjud emas","status.NEW":"Yangi","status.CONFIRMED":"Tasdiqlangan","status.PACKED":"Qadoqlangan","status.SHIPPED":"Yuborilgan","status.DELIVERED":"Yetkazilgan","status.CANCELED":"Bekor qilingan","notification.ORDER":"Buyurtma","notification.PROMO":"Aksiya","notification.SYSTEM":"Tizim","category.SKINCARE":"Teri parvarishi","category.MAKEUP":"Makiyaj","category.COLLAGEN":"Kollagen","category.HAIR_CARE":"Soch parvarishi","category.FRAGRANCE":"Atirlar","category.TOP":"Ustki kiyim","category.OUTER":"Tashqi kiyim","category.PANTS":"Shimlar","category.SHOES":"Poyabzal","category.BAG":"Sumka","category.ACCESSORY":"Aksessuar"},Ie={...ot,...translations.uz,"header.location":"📍 Tashkent","header.pickupPoints":"Pickup points","header.sell":"Sell on Beauty Skin Korea","header.support":"Support","header.orders":"Orders","header.language":"Language","header.catalog":"Catalog","header.searchPlaceholder":"Search products and categories","header.search":"Search","auth.login":"Login","auth.register":"Register","auth.signIn":"Sign in","auth.createAccount":"Create account","auth.logout":"Logout","auth.loginRequired":"Please login to continue","auth.emailRequired":"Email is required.","auth.passwordMin":"Password must be at least 6 characters.","auth.fullNameRequired":"Full name is required.","auth.phoneRequired":"Phone is required.","auth.passwordMismatch":"Passwords do not match.","home.all":"All","home.categories":"Categories","home.quickCategories":"Quick categories","home.todayDeals":"Today deals","home.discounts":"Discounts","home.newArrivals":"New arrivals","home.popular":"Popular products","home.recommended":"Recommended for you","home.similar":"Similar products","home.others":"Others also viewed","home.demoMode":"Demo mode","home.todayOnly":"Today only","home.startShopping":"Start shopping","home.showAll":"Show all products","home.loadMore":"Load more","home.noProducts":"No products found","home.loading":"Loading...","product.addToCart":"Add to cart","product.addToCartFull":"Add to cart","product.adding":"Adding...","product.sold":"{count} sold","product.stock":"Stock: {count}","product.save":"Save","product.saved":"Saved","product.viewDetails":"View details","product.reviews":"Reviews","product.description":"Description","product.detailImages":"Detail images","product.delivery":"Delivery across Uzbekistan","product.secure":"Secure checkout","product.original":"Original Korean products","product.notFound":"Product not found","product.backToShopping":"Back to shopping","cart.title":"Cart","cart.empty":"Your cart is empty","cart.subtotal":"Subtotal","cart.checkout":"Checkout","cart.added":"Added to cart","orders.title":"My orders","orders.none":"You have no orders yet","favorites.title":"Favorites","favorites.empty":"No favorite products yet","reviews.none":"No reviews yet","notifications.title":"Notifications","notifications.alerts":"Alerts","notifications.none":"No notifications yet","common.tryAgain":"Try again","common.serverFailed":"Server connection failed","common.total":"Total"},xt={...Ie,...translations.en,"header.location":"📍 Ташкент","header.pickupPoints":"Пункты выдачи","header.sell":"Стать продавцом","header.support":"Поддержка","header.orders":"Заказы","header.language":"Язык","header.catalog":"Каталог","header.searchPlaceholder":"Искать товары и категории","auth.login":"Войти","auth.register":"Регистрация","auth.logout":"Выйти","auth.loginRequired":"Войдите, чтобы продолжить","auth.emailRequired":"Email обязателен.","auth.passwordMin":"Пароль должен быть не менее 6 символов.","auth.fullNameRequired":"Полное имя обязательно.","auth.phoneRequired":"Телефон обязателен.","auth.passwordMismatch":"Пароли не совпадают.","home.all":"Все","home.categories":"Категории","home.quickCategories":"Быстрые категории","home.todayDeals":"Предложения дня","home.discounts":"Скидки","home.newArrivals":"Новинки","home.popular":"Популярные товары","home.recommended":"Рекомендуем вам","home.similar":"Похожие товары","home.others":"Также смотрели","home.startShopping":"Начать покупки","home.loadMore":"Загрузить еще","product.addToCart":"В корзину","product.addToCartFull":"В корзину","product.sold":"Продано: {count}","product.save":"Сохранить","product.saved":"Сохранено","product.description":"Описание","product.detailImages":"Детальные изображения","product.details":"Детали","product.reviews":"Отзывы","product.delivery":"Доставка по Узбекистану","product.secure":"Безопасная оплата","product.original":"Оригинальная корейская косметика","cart.title":"Корзина","cart.empty":"Корзина пуста","cart.checkout":"Оформить","orders.title":"Мои заказы","favorites.title":"Избранное","reviews.none":"Пока нет отзывов","notifications.title":"Уведомления","status.NEW":"Новый","status.CONFIRMED":"Подтвержден","status.PACKED":"Упакован","status.SHIPPED":"Отправлен","status.DELIVERED":"Доставлен","status.CANCELED":"Отменен","category.SKINCARE":"Уход за кожей","category.MAKEUP":"Макияж","category.COLLAGEN":"Коллаген","category.HAIR_CARE":"Уход за волосами","category.FRAGRANCE":"Парфюм","category.TOP":"Верх","category.OUTER":"Верхняя одежда","category.PANTS":"Брюки","category.SHOES":"Обувь","category.BAG":"Сумки","category.ACCESSORY":"Аксессуары"},Ht={...Ie,...translations.en,"header.location":"📍 타슈켄트","header.pickupPoints":"픽업 지점","header.sell":"판매자 되기","header.support":"고객 지원","header.orders":"주문","header.language":"언어","header.catalog":"카탈로그","header.searchPlaceholder":"상품 및 카테고리 검색","auth.login":"로그인","auth.register":"회원가입","auth.logout":"로그아웃","auth.loginRequired":"계속하려면 로그인하세요","auth.emailRequired":"이메일은 필수입니다.","auth.passwordMin":"비밀번호는 6자 이상이어야 합니다.","auth.fullNameRequired":"이름은 필수입니다.","auth.phoneRequired":"전화번호는 필수입니다.","auth.passwordMismatch":"비밀번호가 일치하지 않습니다.","home.all":"전체","home.categories":"카테고리","home.quickCategories":"빠른 카테고리","home.todayDeals":"오늘의 특가","home.discounts":"할인","home.newArrivals":"신상품","home.popular":"인기 상품","home.recommended":"추천 상품","home.similar":"비슷한 상품","home.others":"함께 본 상품","home.startShopping":"쇼핑 시작","home.loadMore":"더 보기","product.addToCart":"장바구니","product.addToCartFull":"장바구니 담기","product.sold":"{count}개 판매","product.save":"저장","product.saved":"저장됨","product.description":"설명","product.detailImages":"상세 이미지","product.details":"상세 정보","product.reviews":"리뷰","product.delivery":"우즈베키스탄 전역 배송","product.secure":"안전한 결제","product.original":"정품 한국 제품","cart.title":"장바구니","cart.empty":"장바구니가 비어 있습니다","cart.checkout":"결제","orders.title":"내 주문","favorites.title":"찜","reviews.none":"아직 리뷰가 없습니다","notifications.title":"알림","status.NEW":"신규","status.CONFIRMED":"확인됨","status.PACKED":"포장됨","status.SHIPPED":"배송 중","status.DELIVERED":"배송 완료","status.CANCELED":"취소됨","category.SKINCARE":"스킨케어","category.MAKEUP":"메이크업","category.COLLAGEN":"콜라겐","category.HAIR_CARE":"헤어 케어","category.FRAGRANCE":"향수","category.TOP":"상의","category.OUTER":"아우터","category.PANTS":"바지","category.SHOES":"신발","category.BAG":"가방","category.ACCESSORY":"액세서리"},Y={uz:ot,en:Ie,ru:xt,ko:Ht};let Z=Kt();function Kt(){const e=localStorage.getItem(m.storageKeys.language);return it.includes(e)?e:W}function nt(){return Z}function d(e,r={}){var l;const i=Y[Z]||Y[W],o=Y.en||Y[W],s=(i==null?void 0:i[e])??(o==null?void 0:o[e])??((l=Y[W])==null?void 0:l[e])??e;return String(s).replace(/\{(\w+)\}/g,(c,u)=>r[u]??"")}let st=()=>{};function Gt(e){st=e}function zt(e){const r=it.includes(e)?e:W;Z=r,localStorage.setItem(m.storageKeys.language,r),st()}function dt(e){var i;document.documentElement.lang=Z,document.title=(e==null?void 0:e.currentRoute)==="product"&&((i=e==null?void 0:e.selectedDetailProduct)!=null&&i.name)?`${e.selectedDetailProduct.name} - BEAUTY SKIN KOREA`:"BEAUTY SKIN KOREA";const r=document.getElementById("languageSelect");r&&(r.value=Z),document.querySelectorAll("[data-i18n]").forEach(o=>{o.textContent=d(o.dataset.i18n)}),document.querySelectorAll("[data-i18n-placeholder]").forEach(o=>{o.setAttribute("placeholder",d(o.dataset.i18nPlaceholder))}),document.querySelectorAll("[data-i18n-title]").forEach(o=>{o.setAttribute("title",d(o.dataset.i18nTitle))}),document.querySelectorAll("[data-i18n-aria-label]").forEach(o=>{o.setAttribute("aria-label",d(o.dataset.i18nAriaLabel))})}function y(e){const r=Number(e);return Number.isFinite(r)?r:0}function Le(e){return e?typeof e=="string"?e:e.imageUrl||e.url||"":""}function oe(e){return Array.isArray(e)?e.map(r=>Le(r)).filter(Boolean):[]}function p(e){return Array.isArray(e==null?void 0:e.content)?e.content:Array.isArray(e)?e:[]}function w(e={}){const r=Array.isArray(e.variants)?e.variants:[],i=r.find(h=>Number(h.stock||0)>0)||r[0]||null,o=oe(e.images),s=oe(e.detailImages),l=Le(e.mainImageUrl)||o[0]||e.imageUrl||m.placeholderImage,c=y(e.price??(i==null?void 0:i.price)),u=y((i==null?void 0:i.discountPrice)??e.discountPrice??e.price),f=c>u&&c>0?Math.round((c-u)/c*100):0;return{id:e.id,name:e.name||"Mahsulot",description:e.description||"",brand:e.brand||"",category:e.category||"",image:l,images:o.length?o:[l],detailImages:s,price:y(e.price),originalPrice:c,discountPrice:y(e.discountPrice),finalPrice:u,discountPercent:f,stock:y(e.stock),ratingAvg:y(e.ratingAvg),reviewCount:y(e.reviewCount),soldCount:y(e.soldCount),todayDeal:!!e.todayDeal,favorite:!!e.favorite,variants:r,raw:e}}function jt(e={}){var l,c,u,f;const r=w(e.product||((l=e.variant)==null?void 0:l.product)||e),i=y(e.quantity)||1,o=y(e.unitPrice||r.finalPrice),s=y(e.lineTotal||o*i);return{id:e.id||e.cartItemId,productId:r.id,product:r,image:r.image,name:r.name,brand:r.brand,variantId:e.variantId||((c=e.variant)==null?void 0:c.id),variantLabel:e.variantLabel||((u=e.variant)==null?void 0:u.label)||"",unitPrice:o,lineTotal:s,quantity:i,stock:y(e.stock??((f=e.variant)==null?void 0:f.stock)??r.stock)}}function Vt(e){return typeof e=="string"?e:(e==null?void 0:e.code)||(e==null?void 0:e.name)||(e==null?void 0:e.title)||""}function Yt(e={}){var o,s;const r=e.product||{},i=Le(e.mainImageUrl||r.mainImageUrl);return{id:e.id||e.orderItemId,productId:e.productId||r.id||((o=e.product)==null?void 0:o.id),orderId:e.orderId,name:e.productName||e.name||r.name||"Product",image:e.imageUrl||i||r.imageUrl||oe(r.images)[0]||m.placeholderImage,variantLabel:e.variantLabel||((s=e.variant)==null?void 0:s.label)||"",quantity:y(e.quantity)||1,unitPrice:y(e.unitPrice||e.price||r.discountPrice||r.price),lineTotal:y(e.lineTotal||e.total||e.price||0)}}function lt(e={}){var r,i,o,s,l,c;return{id:e.id||e.reviewId||`${e.productId||"product"}-${e.orderId||"order"}-${e.createdAt||""}`,productId:e.productId||((r=e.product)==null?void 0:r.id)||((i=e.orderItem)==null?void 0:i.productId),orderId:e.orderId||((o=e.order)==null?void 0:o.id)||((s=e.orderItem)==null?void 0:s.orderId),rating:Math.min(5,Math.max(0,y(e.rating))),content:e.content||e.reviewContent||e.comment||"",imageUrls:Array.isArray(e.imageUrls)?e.imageUrls.filter(Boolean):oe(e.images),createdAt:e.createdAt||e.createdDate||e.reviewedAt||"",userName:e.userName||e.fullName||((l=e.user)==null?void 0:l.fullName)||((c=e.user)==null?void 0:c.name)||"Customer"}}function _t(e={}){return{id:e.id||e.notificationId,title:e.title||e.subject||"Notification",message:e.message||e.content||"",type:String(e.type||"SYSTEM").toUpperCase(),read:!!(e.read??e.isRead),createdAt:e.createdAt||e.createdDate||"",refId:e.refId||e.referenceId||e.orderId||null,raw:e}}function Wt(e){var r;return Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray((r=e==null?void 0:e.data)==null?void 0:r.content)?e.data.content:Array.isArray(e==null?void 0:e.content)?e.content:Array.isArray(e)?e:[]}function Qt(e={}){var f,h,C;const r=e.review||e.reviewResponse||(e.rating||e.content?e:null),i=w(e.product||e.productCard||e.productResponse||e),o=r?lt({...r,productId:r.productId||i.id,orderId:r.orderId||e.orderId}):null,s=e.productId||(o==null?void 0:o.productId)||i.id,l=e.orderId||((f=e.order)==null?void 0:f.id)||((h=e.orderResponse)==null?void 0:h.id)||(o==null?void 0:o.orderId),c=e.status||e.orderStatus||((C=e.order)==null?void 0:C.status)||"",u=!!(o!=null&&o.content||o!=null&&o.rating);return{id:e.id||e.orderItemId||(o==null?void 0:o.id)||`${s||"product"}-${l||"order"}`,productId:s,orderId:l,product:i,image:i.image||e.imageUrl||m.placeholderImage,name:e.productName||e.name||(i.name&&i.name!=="Mahsulot"?i.name:`Product #${s||"-"}`),brand:i.brand||e.brand||"",status:c,review:o,hasReview:u,reviewable:!!(s&&l&&!u),raw:e}}function Jt(e){var r,i,o,s;return Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray((r=e==null?void 0:e.data)==null?void 0:r.content)?e.data.content:Array.isArray((i=e==null?void 0:e.data)==null?void 0:i.items)?e.data.items:Array.isArray((o=e==null?void 0:e.data)==null?void 0:o.reviews)?e.data.reviews:Array.isArray((s=e==null?void 0:e.data)==null?void 0:s.reviewableItems)?e.data.reviewableItems:Array.isArray(e==null?void 0:e.reviews)?e.reviews:Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e==null?void 0:e.reviewableItems)?e.reviewableItems:Array.isArray(e==null?void 0:e.content)?e.content:Array.isArray(e)?e:[]}function K(e){if(!e)return"";const r=`category.${e}`,i=d(r);return i!==r?i:at[e]||e.toLowerCase().split("_").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(" ")}function ct(e){t.cartItems=e,t.cart=e,t.cartCount=e.reduce((r,i)=>r+i.quantity,0),t.cartTotal=e.reduce((r,i)=>r+i.lineTotal,0)}function Ae(){ct([]),t.cartLoading=!1,t.cartError="",t.cartUpdatingIds=new Set}function Zt(e){t.favoriteProducts=e.filter(r=>r.id!==void 0&&r.id!==null),t.favoriteIds=new Set(t.favoriteProducts.map(r=>String(r.id))),t.favoritesCount=t.favoriteProducts.length,I()}function Ce(){t.favoriteProducts=[],t.favoriteIds=new Set,t.favoritesLoading=!1,t.favoritesError="",t.favoritesCount=0,I()}function I(){var e;t.products=t.products.map(r=>({...r,favorite:t.favoriteIds.has(String(r.id))})),t.todayDeals=t.todayDeals.map(r=>({...r,favorite:t.favoriteIds.has(String(r.id))})),((e=t.selectedDetailProduct)==null?void 0:e.id)!==void 0&&(t.selectedDetailProduct={...t.selectedDetailProduct,favorite:t.favoriteIds.has(String(t.selectedDetailProduct.id))})}function Xt(e){try{return JSON.parse(e)}catch{return e}}function er(e,r){return typeof e=="string"&&e.trim()?e:(e==null?void 0:e.message)||(e==null?void 0:e.error)||`API xatosi: HTTP ${r}`}let x={onUnauthorized:()=>{},onLoginRequired:()=>{},showToast:()=>{}};function tr(e={}){x={...x,...e}}function rr(e,r){const i=e.startsWith("/")?e:`/${e}`,o=Tt(t.baseUrl),s=o?new URL(`${o.replace(/\/+$/,"")}${i}`):new URL(i,window.location.origin);r&&Object.entries(r).forEach(([c,u])=>{u!=null&&u!==""&&s.searchParams.set(c,u)});const l=s.toString();if(_()){const c=Pe();console.info("[API DEBUG]",{mode:c.MODE,prod:c.PROD,envBaseUrl:c.VITE_API_BASE_URL,host:window.location.host,resolvedBaseUrl:o,requestUrl:l})}return l}async function g(e,r={}){const{query:i,showError:o=!0,requireAuth:s=!1,silentAuth:l=!1,...c}=r,u=rr(e,i),f={Accept:"application/json",...c.body?{"Content-Type":"application/json"}:{},...c.headers||{}},h=ue();if(h&&(f.Authorization=`Bearer ${h}`),s&&!h)return t.lastApiError="Please login to continue",x.onLoginRequired(),null;try{t.lastApiError="";const C=await fetch(u,{...c,headers:f}),Ye=await C.text(),we=Ye?Xt(Ye):null;if(_()&&console.debug(`[API] ${c.method||"GET"} ${u} → ${C.status}`),C.status===401)return t.lastApiError="Session expired. Please login again.",l||x.onUnauthorized(),null;if(!C.ok){const _e=er(we,C.status);return t.lastApiError=_e,_()&&console.warn(`[API] ${C.status} ${u}`,we),o&&x.showToast(_e),null}return we}catch(C){return t.lastApiError="Server bilan aloqa bo‘lmadi",_()&&console.error(`[API] Network error ${u}`,C),o&&x.showToast("Server bilan aloqa vaqtincha ishlamayapti."),null}}function ar(e){const r=(e==null?void 0:e.token)||(e==null?void 0:e.accessToken)||(e==null?void 0:e.jwt)||"",i={id:e==null?void 0:e.id,email:e==null?void 0:e.email,fullName:e==null?void 0:e.fullName,phone:(e==null?void 0:e.phone)||"",profileImage:(e==null?void 0:e.profileImage)||""};r&&localStorage.setItem(m.storageKeys.accessToken,r),localStorage.setItem(m.storageKeys.user,JSON.stringify(i)),localStorage.setItem(m.storageKeys.role,(e==null?void 0:e.role)||""),t.accessToken=r,t.user=i,t.role=(e==null?void 0:e.role)||""}function ke(){var e,r;localStorage.removeItem(m.storageKeys.accessToken),localStorage.removeItem(m.storageKeys.legacyAccessToken),localStorage.removeItem(m.storageKeys.user),localStorage.removeItem(m.storageKeys.legacyUser),localStorage.removeItem(m.storageKeys.role),t.accessToken="",t.user=null,t.role="",Ae(),D(),Ce(),pe(),ee(),t.myReviews=[],t.myReviewsLoading=!1,t.myReviewsError="",(e=a.myReviewsDialog)!=null&&e.open&&a.myReviewsDialog.close(),(r=a.writeReviewDialog)!=null&&r.open&&a.writeReviewDialog.close(),G()}function b(){return!!ue()}function A(){je("login"),v(d("auth.loginRequired"))}async function ut(){if(!ue()){G();return}const e=await g("/api/users/me",{requireAuth:!0,showError:!1,silentAuth:!0});if(!e){ke();return}t.user=e,localStorage.setItem(m.storageKeys.user,JSON.stringify(e)),G(),await Promise.allSettled([V(),U()])}function G(){const e=a.loginButton.querySelector("span");e&&(b()&&t.user?(e.textContent=De(t.user.fullName)||d("profile.myProfile"),a.loginButton.setAttribute("aria-label",d("profile.myProfile"))):(e.textContent=d("auth.login"),a.loginButton.setAttribute("aria-label",d("auth.login"))))}function De(e=""){return String(e).trim().split(/\s+/)[0]||""}function $(e){const r=nt(),i={uz:"so‘m",en:"UZS",ru:"сум",ko:"UZS"};return`${new Intl.NumberFormat(r==="uz"?"uz-UZ":r).format(y(e))} ${i[r]||"UZS"}`}function Re(e){return $(e)}function j(e){if(!e)return"";const r=new Date(e);if(Number.isNaN(r.getTime()))return String(e);const i=nt();return new Intl.DateTimeFormat(i,{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)}function Te(e=""){return d(`status.${e}`)||e||d("common.unknown")}function v(e){a.toast.textContent=e,a.toast.classList.add("show"),clearTimeout(v.timer),v.timer=setTimeout(()=>a.toast.classList.remove("show"),2800)}function Ze(e,r){e.hidden=!r}function F(){Ze(a.productsMode,t.demoCategories||t.demoProducts),Ze(a.dealsMode,t.demoDeals)}function z(e,r=12){e.innerHTML=Array.from({length:r},()=>'<div class="skeleton-card"></div>').join("")}function T(e,r,i=d("home.showAll")){e.innerHTML=`
    <div class="empty-state">
      <strong>${n(r)}</strong>
      <button class="secondary-button" data-show-all type="button">${n(i)}</button>
    </div>
  `}function Ne(e,r={}){g(e,{...r,showError:!1}).catch(()=>{})}function Xe(e,r,i){if(!e||String(e).startsWith("demo-"))return;const o=`${t.sessionId}:${r}:${e}`;t.impressionsSent.has(o)||(t.impressionsSent.add(o),Ne("/events/impression",{method:"POST",body:JSON.stringify({productId:Number(e),screen:r,position:i,queryText:t.currentSearchQuery||null,sessionId:t.sessionId})}))}function ir(e){!e||String(e).startsWith("demo-")||Ne("/events/click",{method:"POST",query:{productId:e}})}function or(e){!e||String(e).startsWith("demo-")||Ne("/events/view",{method:"POST",query:{productId:e}})}function Me(e){if(!("IntersectionObserver"in window)){e.querySelectorAll("[data-product]").forEach(r=>{Xe(r.dataset.product,r.dataset.screen||"home",Number(r.dataset.position||0))});return}t.impressionObserver||(t.impressionObserver=new IntersectionObserver(r=>{r.forEach(i=>{if(!i.isIntersecting)return;const o=i.target;Xe(o.dataset.product,o.dataset.screen||"home",Number(o.dataset.position||0)),t.impressionObserver.unobserve(o)})},{threshold:.35})),e.querySelectorAll("[data-product]").forEach(r=>t.impressionObserver.observe(r))}function X(e,r={}){const i=t.favoriteIds.has(String(e.id))||!!e.favorite,o=r.screen||t.currentGridScreen||"home",s=r.position??0;return`
    <article class="product-card" data-product="${n(e.id)}" data-screen="${n(o)}" data-position="${n(s)}">
      <div class="badge-row">
        ${e.discountPercent?`<span class="badge">-${e.discountPercent}%</span>`:""}
        ${e.todayDeal?'<span class="badge today">Today deal</span>':""}
      </div>
      <button class="icon-button favorite-float ${i?"active":""}" data-favorite="${n(e.id)}" type="button" aria-label="Sevimlilar">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
      </button>
      <img class="product-image" src="${n(e.image)}" alt="${n(e.name)}" loading="lazy" />
      <div class="product-info">
        <div class="product-meta">
          <span class="brand-name">${n(e.brand||e.category||"BEAUTY SKIN KOREA")}</span>
          <span class="rating">${e.ratingAvg?`★ ${e.ratingAvg.toFixed(1)} (${e.reviewCount})`:"★ 0 (0)"}</span>
        </div>
        <h3>${n(e.name)}</h3>
        <p>${n(e.description||`${e.soldCount} dona sotilgan`)}</p>
        <div class="price-row">
          <span>${$(e.finalPrice)}</span>
          ${e.discountPercent?`<span class="old-price">${$(e.originalPrice)}</span>`:""}
        </div>
        <p class="hint">${n(d("product.sold",{count:e.soldCount}))}</p>
      </div>
      <div class="card-actions">
        <button class="primary-button" data-add="${n(e.id)}" type="button">${n(d("product.addToCart"))}</button>
        <button class="icon-button" data-detail="${n(e.id)}" type="button" aria-label="${n(d("product.viewDetails"))}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>
    </article>
  `}function E(e,r,i,o={}){if(!r.length){T(e,i);return}e.innerHTML=r.map((s,l)=>X(s,{...o,position:l})).join(""),Me(e)}function Oe(e,r="Rating"){const i=Math.min(5,Math.max(0,Math.round(y(e))));return`
    <span class="stars" role="img" aria-label="${n(r)} ${i} out of 5">
      ${Array.from({length:5},(o,s)=>`<span class="${s<i?"filled":""}">★</span>`).join("")}
    </span>
  `}function nr(e){const r=e.length,i=r?e.reduce((o,s)=>o+y(s.rating),0)/r:0;return{count:r,average:i}}async function ge(){t.selectedCategory="ALL",t.currentSearchQuery="",t.currentGridScreen="home",t.feedPage=0,a.title.textContent=d("home.popular"),a.status.textContent=d("home.loading"),a.dealsStatus.textContent=d("home.loading"),z(a.grid,12),z(a.dealsGrid,6);try{await Promise.allSettled([cr(),ur(),mr()]),await sr()||await Promise.allSettled([Be(),yr()]),await Promise.allSettled([hr(),N()])}catch(e){console.error("Home loading failed:",e),a.status.textContent=t.lastApiError||d("common.serverFailed"),a.dealsStatus.textContent="",T(a.grid,d("common.serverFailed"),d("common.tryAgain"))}finally{a.status.textContent===d("home.loading")&&(a.status.textContent=""),(a.dealsStatus.textContent===d("home.loading")||a.dealsStatus.textContent==="Yuklanmoqda...")&&(a.dealsStatus.textContent="")}}async function sr(){try{const e=await g("/api/home",{query:{limit:10,page:0,size:20},showError:!1});if(e===null)return t.homeLoadedFromApi=!1,a.homeApiSections.hidden=!0,!1;const r=p(e.hits||[]).map(w),i=p(e.discounts||[]).map(w),o=p(e.newArrivals||[]).map(w),s=p(e.popular).map(w);return r.length||i.length||o.length||s.length?(t.homeLoadedFromApi=!0,t.products=s.length?s:[...r,...i,...o].filter(lr),t.todayDeals=i,I(),dr({hits:r,discounts:i,newArrivals:o}),E(a.grid,t.products,d("home.noProducts"),{screen:"home"}),E(a.dealsGrid,i.slice(0,8),"Chegirmalar topilmadi.",{screen:"home-discounts"}),a.status.textContent="",a.dealsStatus.textContent="",F(),!0):(t.homeLoadedFromApi=!1,a.homeApiSections.hidden=!0,!1)}catch(e){return console.error("Home API loading failed:",e),t.homeLoadedFromApi=!1,a.homeApiSections.hidden=!0,!1}}function dr(e){const i=[["Hits","Best picks",e.hits,"home-hits"],["Discounts","Deals",e.discounts,"home-discounts"],["New Arrivals","Fresh",e.newArrivals,"home-new"]].filter(([,,o])=>o.length).map(([o,s,l,c])=>`
      <section class="home-product-strip">
        <div class="section-head">
          <div><p class="eyebrow">${n(s)}</p><h2>${n(o)}</h2></div>
        </div>
        <div class="product-grid home-strip-grid">
          ${l.slice(0,10).map((u,f)=>X(u,{screen:c,position:f})).join("")}
        </div>
      </section>
    `).join("");a.homeApiSections.hidden=!i,a.homeApiSections.innerHTML=i,Me(a.homeApiSections)}function lr(e,r,i){return(e==null?void 0:e.id)!==void 0&&i.findIndex(o=>String(o.id)===String(e.id))===r}const et=["SKINCARE","MAKEUP","COLLAGEN","HAIR_CARE","FRAGRANCE"];async function cr(){try{const e=await g("/api/categories",{showError:!1}),r=p(e).map(Vt).filter(Boolean);r.length?(t.categories=r,t.demoCategories=!1):(t.categories=et,t.demoCategories=!1,e===null&&console.warn("[Categories] API unavailable (e.g. 403) — using default categories."))}catch(e){console.error("Categories loading failed:",e),t.categories=et,t.demoCategories=!1}finally{F(),me()}}async function ur(){try{const e=await g("/api/banners",{showError:!1});if(e===null){t.banners=[];return}t.banners=p(e).map(r=>({id:r.id,title:r.title||"",subtitle:r.subtitle||"",imageUrl:r.imageUrl||"",linkType:String(r.linkType||"NONE").toUpperCase(),linkId:r.linkId,position:y(r.position)})).sort((r,i)=>r.position-i.position)}catch(e){console.error("Banners loading failed:",e),t.banners=[]}finally{gr()}}function gr(){if(!t.banners.length){a.banners.hidden=!0,a.banners.innerHTML="";return}a.banners.hidden=!1,a.banners.innerHTML=`
    <button class="banner-arrow prev" data-banner-nav="prev" type="button" aria-label="Oldingi banner">‹</button>
    <div class="banner-track">
      ${t.banners.map(e=>`
        <article class="banner-card ${e.imageUrl?"has-image":""}" data-banner-link-type="${n(e.linkType)}" data-banner-link-id="${n(e.linkId??"")}">
          <span class="ad-badge">Reklama</span>
          ${e.imageUrl?`<img src="${n(e.imageUrl)}" alt="${n(e.title||"Banner")}" />`:""}
          <div>
            <strong>${n(e.title||"BEAUTY SKIN KOREA")}</strong>
            ${e.subtitle?`<p>${n(e.subtitle)}</p>`:""}
          </div>
        </article>
      `).join("")}
    </div>
    <button class="banner-arrow next" data-banner-nav="next" type="button" aria-label="Keyingi banner">›</button>
    <div class="banner-dots">${t.banners.map((e,r)=>`<span class="${r===0?"active":""}"></span>`).join("")}</div>
  `}async function mr(){const e=await g("/api/announcements",{showError:!1}),r=p(e).map(i=>({title:i.title||"",message:i.content||i.message||"",type:String(i.type||"SYSTEM").toUpperCase(),createdAt:i.createdAt||""})).filter(i=>i.title||i.message);t.announcements=r,fr()}function fr(){if(!t.announcements.length){a.announcements.hidden=!0,a.announcements.innerHTML="";return}a.announcements.hidden=!1,a.announcements.innerHTML=t.announcements.slice(0,3).map(e=>`
    <article class="announcement-item ${e.type.toLowerCase()}">
      <strong>${n(e.title||e.type)}</strong>
      <span>${n(e.message)}</span>
    </article>
  `).join("")}async function hr(){const e=gt();if(!e.length){a.recentlyViewedSection.hidden=!0;return}const r=await g("/api/products/by-ids",{method:"POST",body:JSON.stringify(e.map(Number).filter(Number.isFinite)),showError:!1}),i=p(r).map(w).filter(o=>o.id);if(!i.length){a.recentlyViewedSection.hidden=!0;return}a.recentlyViewedSection.hidden=!1,E(a.recentlyViewedGrid,i,"Recently viewed is empty.",{screen:"recent"})}function gt(){try{return JSON.parse(localStorage.getItem(m.storageKeys.recentProducts)||"[]").filter(Boolean)}catch{return[]}}function pr(e){if(!e||String(e).startsWith("demo-"))return;const r=[String(e),...gt().filter(i=>String(i)!==String(e))].slice(0,12);localStorage.setItem(m.storageKeys.recentProducts,JSON.stringify(r))}async function Be(){a.status.textContent=d("home.loading"),z(a.grid,12);try{const e=await g("/api/products",{query:{page:0,size:m.defaultPageSize},showError:!1}),r=p(e).map(w);if(r.length){t.products=r,t.demoProducts=!1,I(),F(),E(a.grid,t.products,d("home.noProducts")),a.status.textContent="";return}if(e===null){t.demoProducts=!1,a.status.textContent=t.lastApiError||d("common.serverFailed"),T(a.grid,d("common.serverFailed"),d("common.tryAgain"));return}t.products=[],t.demoProducts=!1,I(),F(),E(a.grid,t.products,d("home.noProducts")),a.status.textContent=""}catch(e){console.error("Products loading failed:",e),t.demoProducts=!1,a.status.textContent=t.lastApiError||d("common.serverFailed"),T(a.grid,d("common.serverFailed"),d("common.tryAgain"))}finally{a.status.textContent===d("home.loading")&&(a.status.textContent="")}}async function vr(){if(t.feedLoading)return;t.feedLoading=!0,a.loadMore.disabled=!0,a.loadMore.textContent="Yuklanmoqda...";let e=[];const r=await g("/api/home/feed",{query:{limit:30},showError:!1});if(e=p(r).map(w),!e.length){t.feedPage+=1;const s=await g("/api/products",{query:{page:t.feedPage,size:m.defaultPageSize},showError:!1});e=p(s).map(w)}const i=new Set(t.products.map(s=>String(s.id))),o=e.filter(s=>s.id&&!i.has(String(s.id)));t.products=[...t.products,...o],I(),E(a.grid,t.products,"Mahsulot topilmadi.",{screen:t.currentGridScreen||"home"}),t.feedLoading=!1,a.loadMore.disabled=!1,a.loadMore.textContent=o.length?"Yana yuklash":"Boshqa mahsulot topilmadi"}async function yr(){a.dealsStatus.textContent="Yuklanmoqda...",z(a.dealsGrid,5);try{const e=await g("/api/products/today-deals",{showError:!1}),r=p(e).map(w);if(r.length){t.todayDeals=r,t.demoDeals=!1,I(),F(),E(a.dealsGrid,t.todayDeals.slice(0,8),d("home.noProducts")),a.dealsStatus.textContent="";return}if(e===null){t.demoDeals=!1,t.todayDeals=[],a.dealsStatus.textContent=t.lastApiError||d("common.serverFailed"),T(a.dealsGrid,d("common.serverFailed"),d("common.tryAgain"));return}t.todayDeals=[],t.demoDeals=!1,I(),F(),E(a.dealsGrid,t.todayDeals,d("home.noProducts")),a.dealsStatus.textContent=""}catch(e){console.error("Today deals loading failed:",e),t.demoDeals=!1,t.todayDeals=[],a.dealsStatus.textContent=t.lastApiError||d("common.serverFailed"),T(a.dealsGrid,d("common.serverFailed"),d("common.tryAgain"))}finally{a.dealsStatus.textContent==="Yuklanmoqda..."&&(a.dealsStatus.textContent="")}}function me(){const e=["ALL",...t.categories].map(r=>`
    <button class="chip ${t.selectedCategory===r?"active":""}" data-category="${n(r)}" type="button">
      ${n(r==="ALL"?d("home.all"):K(r))}
    </button>
  `);a.categoryToolbar.innerHTML=e.join(""),wr(),br()}function wr(){const e=["ALL",...t.categories];a.catalogList.innerHTML=e.map(r=>`
    <button class="catalog-item ${t.selectedCategory===r?"active":""}" data-category="${n(r)}" type="button">
      <span>${n(r==="ALL"?d("home.showAll"):K(r))}</span>
      <span>${r==="ALL"?"→":"›"}</span>
    </button>
  `).join("")}function br(){a.quickCategoryGrid.innerHTML=Ut.map(e=>`
    <button class="quick-card" data-category="${n(e.category)}" type="button">
      <span>${n(e.icon)}</span>
      ${n(K(e.category))}
    </button>
  `).join("")}function fe(){t.currentRoute="home",a.homeView.hidden=!1,a.productDetailPage.hidden=!0,document.title="BEAUTY SKIN KOREA"}function Sr(){t.currentRoute="product",a.homeView.hidden=!0,a.productDetailPage.hidden=!1,window.scrollTo({top:0,behavior:"smooth"})}function $e(){window.location.hash&&window.location.hash!=="#/"&&window.location.hash!=="#"?window.location.hash="#/":fe()}async function ne(){const r=(window.location.hash||"#/").match(/^#\/product\/([^/?#]+)/);if(r){Sr(),await Cr(decodeURIComponent(r[1])),window.scrollTo({top:0,behavior:"smooth"});return}fe()}async function Er(e){const r=e.trim();if(t.currentSearchQuery=r,t.currentGridScreen=r?"search":"home",t.currentRoute==="product"&&(window.location.hash="#/",fe()),!r){t.selectedCategory="ALL",me(),a.title.textContent=d("home.popular"),await Be();return}a.title.textContent=`"${r}" qidiruvi`,a.status.textContent=d("home.loading"),z(a.grid,10);const i=await g("/api/products/search",{query:{q:r,page:0,size:m.defaultPageSize},showError:!1}),o=p(i).map(w);t.products=o,I(),E(a.grid,t.products,d("home.noProducts"),{screen:"search"}),a.status.textContent=""}async function qe(e){if(t.currentRoute==="product"&&(window.location.hash="#/",fe()),t.selectedCategory=e,t.currentGridScreen=e==="ALL"?"home":"category",t.currentSearchQuery="",me(),e==="ALL"){a.title.textContent=d("home.popular"),await Be();return}a.title.textContent=K(e),a.status.textContent=d("home.loading"),z(a.grid,10);const r=await g("/api/products/category",{query:{category:e,page:0,size:m.defaultPageSize},showError:!1}),i=p(r).map(w);t.products=i,I(),E(a.grid,t.products,d("home.noProducts"),{screen:"category"}),a.status.textContent=""}function Fe(e){if(!e)return;const r=`#/product/${encodeURIComponent(e)}`;window.location.hash===r?ne():window.location.hash=r}async function Ar(e){Fe(e)}async function Cr(e){var o;t.currentRoute="product",t.detailLoading=!0,t.detailError="",t.selectedDetailProduct=null,t.recommendedProducts=[],t.recommendedSimilar=[],t.recommendedOthers=[],t.recommendationsError="",$r(!0);const r=await g(`/api/products/${e}`,{showError:!0}),i=w(r||t.products.find(s=>String(s.id)===String(e))||{});if(t.detailLoading=!1,!i.id){t.detailError=t.lastApiError||"Mahsulot topilmadi.",Pr();return}i.favorite=t.favoriteIds.has(String(i.id))||i.favorite,t.selectedDetailProduct=i,t.selectedVariantId=((o=mt(i))==null?void 0:o.id)||null,t.selectedQuantity=1,document.title=`${i.name} - BEAUTY SKIN KOREA`,pr(i.id),or(i.id),R(i),Ue(i.id),Ir(i)}function $r(e=!1){const r=e?a.productDetailPageContent:a.detailContent;r.innerHTML=`
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
  `}function Pr(){a.productDetailPageContent.innerHTML=`
    <div class="detail-error-page">
      <strong>${n(d("product.notFound"))}</strong>
      <p>${n(t.detailError||"Mahsulot topilmadi.")}</p>
      <button class="primary-button" data-route-home type="button">${n(d("product.backToShopping"))}</button>
    </div>
  `}function R(e){const r=e.variants.find(h=>String(h.id)===String(t.selectedVariantId))||null,i=[...e.images,...e.detailImages].filter(Boolean),o=(r==null?void 0:r.discountPrice)??(r==null?void 0:r.price)??e.finalPrice,s=(r==null?void 0:r.price)??e.originalPrice,l=(r==null?void 0:r.stock)??e.stock,c=t.favoriteIds.has(String(e.id))||!!e.favorite,u=t.currentRoute==="product",f=u?a.productDetailPageContent:a.detailContent;f.innerHTML=`
    ${u?`
      <div class="breadcrumbs">
        <button data-route-home type="button">${n(d("product.home")||d("home.all"))}</button>
        <span>/</span>
        <button data-category="${n(e.category||"ALL")}" type="button">${n(e.category?K(e.category):d("header.catalog"))}</button>
        <span>/</span>
        <span>${n(pt(e.name,42))}</span>
      </div>
    `:`
      <div class="drawer-head">
        <h2>Mahsulot tafsiloti</h2>
        <button class="icon-button" data-close-detail type="button" aria-label="Yopish">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>
    `}
    <div class="detail-layout">
      <div class="detail-gallery">
        <img src="${n(e.image)}" alt="${n(e.name)}" />
        ${i.length>1?`<div class="detail-thumbs">${i.slice(0,8).map(h=>`<img src="${n(h)}" alt="${n(e.name)}" />`).join("")}</div>`:""}
      </div>
      <div class="detail-info">
        <p class="hint">${n(e.brand||e.category)} · ★ ${e.ratingAvg.toFixed(1)} (${e.reviewCount}) · ${e.soldCount} dona sotilgan</p>
        <h2 class="detail-title">${n(e.name)}</h2>
        <h3>${$(o)}</h3>
        ${s>o?`<p class="old-price">${$(s)}</p>`:""}
        <button class="secondary-button detail-favorite ${c?"active":""}" data-detail-favorite="${n(e.id)}" type="button">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
          ${n(d(c?"product.saved":"product.save"))}
        </button>
        ${e.variants.length?Rr(e):`<p class="hint">${n(d("product.variantUnavailable"))}</p>`}
        <p class="hint">${n(d("product.stock",{count:l??0}))}</p>
        <div class="quantity-row">
          <button class="secondary-button" data-qty="minus" type="button">-</button>
          <input id="quantityInput" value="${t.selectedQuantity}" inputmode="numeric" />
          <button class="secondary-button" data-qty="plus" type="button">+</button>
        </div>
        <button class="primary-button full" data-detail-add type="button">${n(d("product.addToCartFull"))}</button>
        <div class="delivery-info">
          <span>${n(d("product.delivery"))}</span>
          <span>${n(d("product.secure"))}</span>
          <span>${n(d("product.original"))}</span>
        </div>
        <div class="detail-tabs">
          <section><strong>${n(d("product.description"))}</strong><p class="hint">${n(e.description||d("common.unavailable"))}</p></section>
          ${e.detailImages.length?`<section><strong>${n(d("product.detailImages"))}</strong><div class="detail-image-stack">${e.detailImages.map(h=>`<img src="${n(h)}" alt="${n(e.name)} detail" loading="lazy" />`).join("")}</div></section>`:""}
          <section><strong>${n(d("product.details"))}</strong><p class="hint">${n(d("home.categories"))}: ${n(e.category?K(e.category):"-")} · Brand: ${n(e.brand||"-")}</p></section>
          <section><strong>${n(d("product.reviews"))}</strong>${kr(e.id)}</section>
        </div>
      </div>
    </div>
    ${u?Lr():""}
    ${u?`
      <div class="mobile-buy-bar">
        <strong>${$(o)}</strong>
        <button class="primary-button" data-detail-add type="button">${n(d("product.addToCart"))}</button>
      </div>
    `:""}
  `,Me(f)}async function Ir(e){var c;t.recommendationsLoading=!0,t.recommendationsError="",R(e);const r=await g(`/api/products/${e.id}/recommend`,{query:{similar:12,others:24,seed:t.sessionId},showError:!1}),i=p((r==null?void 0:r.similar)||[]).map(w).filter(u=>String(u.id)!==String(e.id)),o=p((r==null?void 0:r.others)||[]).map(w).filter(u=>String(u.id)!==String(e.id));if(i.length||o.length){t.recommendationsLoading=!1,t.recommendedProducts=[],t.recommendedSimilar=i.slice(0,12),t.recommendedOthers=o.slice(0,12),R(t.selectedDetailProduct);return}let s=null;e.category&&(s=await g("/api/products/category",{query:{category:e.category,page:0,size:12},showError:!1}));let l=p(s).map(w).filter(u=>String(u.id)!==String(e.id));l.length||(s=await g("/api/products",{query:{page:0,size:12},showError:!1}),l=p(s).map(w).filter(u=>String(u.id)!==String(e.id))),t.recommendationsLoading=!1,!l.length&&s===null&&(t.recommendationsError=t.lastApiError||"Recommendations could not be loaded."),t.recommendedProducts=l.slice(0,12).map(u=>({...u,favorite:t.favoriteIds.has(String(u.id))||u.favorite})),t.recommendedSimilar=[],t.recommendedOthers=[],((c=t.selectedDetailProduct)==null?void 0:c.id)!==void 0&&String(t.selectedDetailProduct.id)===String(e.id)&&R(t.selectedDetailProduct)}function Lr(){if(t.recommendationsLoading)return`
      <section class="recommended-section">
        <div class="section-head"><div><p class="eyebrow">${n(d("home.recommended"))}</p><h2>${n(d("home.recommended"))}</h2></div></div>
        <div class="recommended-grid product-grid">
          <div class="skeleton-card"></div><div class="skeleton-card"></div><div class="skeleton-card"></div><div class="skeleton-card"></div>
        </div>
      </section>
    `;if(t.recommendationsError)return`
      <section class="recommended-section">
        <div class="detail-error-page compact">
          <strong>Recommendations unavailable</strong>
          <p>${n(t.recommendationsError)}</p>
        </div>
      </section>
    `;const e=[[d("home.similar"),t.recommendedSimilar||[],"recommendations"],[d("home.others"),t.recommendedOthers||[],"recommendations"]].filter(([,r])=>r.length);return e.length?e.map(([r,i,o])=>`
      <section class="recommended-section">
        <div class="section-head">
          <div>
          <p class="eyebrow">${n(d("home.recommended"))}</p>
            <h2>${n(r)}</h2>
          </div>
        </div>
        <div class="recommended-grid product-grid">
          ${i.map((s,l)=>X(s,{screen:o,position:l})).join("")}
        </div>
      </section>
    `).join(""):t.recommendedProducts.length?`
    <section class="recommended-section">
      <div class="section-head">
        <div>
          <p class="eyebrow">${n(d("home.recommended"))}</p>
          <h2>${n(d("home.recommended"))}</h2>
        </div>
      </div>
      <div class="recommended-grid product-grid">
        ${t.recommendedProducts.map(X).join("")}
      </div>
    </section>
  `:""}async function Ue(e){var o,s;if(!e)return;const r=String(e);t.productReviewsLoading[r]=!0,t.productReviewsError[r]="",((o=t.selectedDetailProduct)==null?void 0:o.id)!==void 0&&String(t.selectedDetailProduct.id)===r&&R(t.selectedDetailProduct);const i=await g(`/api/reviews/product/${e}`,{showError:!1});t.productReviewsLoading[r]=!1,i===null?t.productReviewsError[r]=t.lastApiError||"Reviews could not be loaded.":t.productReviewsByProductId[r]=p(i).map(lt),((s=t.selectedDetailProduct)==null?void 0:s.id)!==void 0&&String(t.selectedDetailProduct.id)===r&&R(t.selectedDetailProduct)}function kr(e){const r=String(e),i=t.productReviewsByProductId[r]||[],o=t.productReviewsLoading[r],s=t.productReviewsError[r];if(o)return'<div class="reviews-loading"><div class="skeleton-card"></div></div>';if(s)return`
      <div class="reviews-inline-error">
        <p>${n(s)}</p>
        <button class="secondary-button" data-reviews-retry="${n(e)}" type="button">Retry</button>
      </div>
    `;if(!i.length)return`<div class="reviews-empty"><strong>${n(d("reviews.none"))}</strong><p class="hint">${n(d("reviews.none"))}</p></div>`;const l=nr(i);return`
    <div class="review-summary">
      <div>
        <strong>${l.average.toFixed(1)}</strong>
        ${Oe(l.average,"Average rating")}
      </div>
      <p class="hint">${l.count} ${n(d("product.reviews"))}</p>
    </div>
    <div class="review-list">
      ${i.map(Dr).join("")}
    </div>
  `}function Dr(e){return`
    <article class="review-card">
      <div class="review-head">
        <div>
          <strong>${n(e.userName)}</strong>
          <p class="hint">${j(e.createdAt)}</p>
        </div>
        ${Oe(e.rating)}
      </div>
      <p>${n(e.content||d("reviews.noText"))}</p>
      ${e.imageUrls.length?`<div class="review-images">${e.imageUrls.slice(0,5).map(r=>`<img src="${n(r)}" alt="Review image" loading="lazy" />`).join("")}</div>`:""}
    </article>
  `}function Rr(e){return`
    <div class="variant-options">
      ${e.variants.map(r=>{const i=String(r.id)===String(t.selectedVariantId),o=Number(r.stock||0)<=0;return`
          <button class="variant-option ${i?"active":""}" data-variant="${n(r.id)}" ${o?"disabled":""} type="button">
            ${n(r.label||`Variant #${r.id}`)}
            ${r.price?` · ${n($(r.discountPrice??r.price))}`:""}
          </button>
        `}).join("")}
    </div>
  `}function mt(e){return e.variants.find(r=>Number(r.stock||0)>0)||e.variants[0]||null}async function ft(e,r,i){var c;if(!b()){A();return}let o=r;const s=Math.max(1,Number(i||1));if(!o){const u=await g(`/api/products/${e}`,{showError:!0}),f=w(u||{}),h=f.variants.filter(C=>Number(C.stock||0)>0);if(h.length===1)o=h[0].id;else if(f.variants.length>1){Fe(f.id);return}else o=(c=mt(f))==null?void 0:c.id}if(!o){v(d("product.variantUnavailable"));return}t.addingProductIds.add(String(e)),tt();const l=await g("/api/cart",{method:"POST",body:JSON.stringify({variantId:Number(o),quantity:s}),requireAuth:!0});t.addingProductIds.delete(String(e)),tt(),l!==null&&(v(d("cart.added")),await N())}function tt(){document.querySelectorAll("[data-detail-add]").forEach(r=>{var o;const i=t.addingProductIds.has(String((o=t.selectedDetailProduct)==null?void 0:o.id));r.disabled=i,r.textContent=i?d("product.adding"):r.closest(".mobile-buy-bar")?d("product.addToCart"):d("product.addToCartFull")})}async function N(){if(!b()){Ae(),D();return}t.cartLoading=!0,t.cartError="",D();const e=await g("/api/cart",{requireAuth:!0,showError:!1});if(t.cartLoading=!1,e===null){if(t.lastApiError.includes("Session expired")||t.lastApiError==="Please login to continue"){Ae();return}t.cartError=t.lastApiError||"Cart could not be loaded.",D();return}ct(p(e).map(jt)),D()}function D(){if(a.cartCount.textContent=t.cartCount,a.cartSummary.textContent=d("orders.items",{count:t.cartCount}),a.cartTotal.textContent=$(t.cartTotal),t.cartLoading){a.cartItems.innerHTML='<div class="cart-loading"><div class="skeleton-card"></div><div class="skeleton-card"></div></div>',a.checkoutButton.disabled=!0;return}if(t.cartError){a.cartItems.innerHTML=`
      <div class="cart-empty">
        <strong>${n(d("cart.unavailable"))}</strong>
        <p>${n(t.cartError)}</p>
        <button class="secondary-button" data-cart-retry type="button">${n(d("common.tryAgain"))}</button>
      </div>
    `,a.checkoutButton.disabled=!0;return}a.checkoutButton.disabled=!t.cartItems.length,a.cartItems.innerHTML=t.cartItems.length?t.cartItems.map(e=>`
      <article class="cart-item ${t.cartUpdatingIds.has(String(e.id))?"loading":""}">
        <img src="${n(e.image)}" alt="${n(e.name)}" />
        <div>
          <h3>${n(e.name)}</h3>
          <p class="hint">${n(e.brand||"BEAUTY SKIN KOREA")} ${e.variantLabel?`· ${n(e.variantLabel)}`:""}</p>
          <p>${$(e.unitPrice)} · ${n(d("common.total"))}: ${$(e.lineTotal)}</p>
          <div class="cart-stepper">
            <button data-cart-qty="minus" data-cart-id="${n(e.id)}" ${e.quantity<=1?"disabled":""} type="button">-</button>
            <span>${e.quantity}</span>
            <button data-cart-qty="plus" data-cart-id="${n(e.id)}" type="button">+</button>
          </div>
        </div>
        <button class="icon-button" data-remove="${n(e.id)}" type="button" aria-label="${n(d("cart.remove"))}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
        </button>
      </article>
    `).join(""):`
      <div class="cart-empty">
        <strong>${n(d("cart.empty"))}</strong>
        <p>Add products you like and they will appear here.</p>
        <button class="primary-button" data-start-shopping type="button">${n(d("home.startShopping"))}</button>
      </div>
    `}async function Tr(e){t.cartUpdatingIds.add(String(e)),D();const r=await g(`/api/cart/${e}`,{method:"DELETE",requireAuth:!0});t.cartUpdatingIds.delete(String(e)),r!==null?(v(d("cart.itemRemoved")),await N()):D()}async function Nr(e,r){const i=Math.max(1,Number(r||1));t.cartUpdatingIds.add(String(e)),D();const o=await g(`/api/cart/${e}`,{method:"PUT",requireAuth:!0,body:JSON.stringify({quantity:i})});t.cartUpdatingIds.delete(String(e)),o!==null?await N():D()}async function ht(){if(!b()){A();return}if(await N(),!t.cartItems.length){v("Your cart is empty");return}t.orderSuccess=null,t.checkoutError="",t.checkoutLoading=!0,P(),a.checkoutDialog.showModal(),L(),await Promise.all([xe(),He()]),t.checkoutLoading=!1,P()}async function Mr(e){e.preventDefault(),await $t()}async function xe(e){var i,o;const r=await g("/api/receivers",{requireAuth:!0,showError:!1});if(r===null){t.checkoutError=t.lastApiError||"Receivers could not be loaded.";return}t.receivers=p(r),t.selectedReceiverId=e||t.selectedReceiverId||((i=t.receivers[0])==null?void 0:i.id)||null,t.receivers.some(s=>String(s.id)===String(t.selectedReceiverId))||(t.selectedReceiverId=((o=t.receivers[0])==null?void 0:o.id)||null)}async function He(e){var i,o;const r=await g("/api/addresses",{requireAuth:!0,showError:!1});if(r===null){t.checkoutError=t.lastApiError||"Addresses could not be loaded.";return}t.addresses=p(r),t.selectedAddressId=e||t.selectedAddressId||((i=t.addresses[0])==null?void 0:i.id)||null,t.addresses.some(s=>String(s.id)===String(t.selectedAddressId))||(t.selectedAddressId=((o=t.addresses[0])==null?void 0:o.id)||null)}function P(){if(t.checkoutLoading){a.checkoutContent.innerHTML=`
      <div class="checkout-layout">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    `;return}if(t.orderSuccess){xr();return}const e=t.receivers.find(i=>String(i.id)===String(t.selectedReceiverId)),r=t.addresses.find(i=>String(i.id)===String(t.selectedAddressId));a.checkoutContent.innerHTML=`
    <div class="checkout-layout">
      <div class="checkout-steps">
        ${t.checkoutError?`<div class="checkout-error">${n(t.checkoutError)}</div>`:""}
        <section class="checkout-step">
          <div class="step-head"><span>1</span><h3>Receiver</h3></div>
          ${Or()}
          ${Br()}
        </section>
        <section class="checkout-step">
          <div class="step-head"><span>2</span><h3>Delivery Address</h3></div>
          ${qr()}
          ${Fr()}
        </section>
      </div>
      <aside class="order-summary">
        <div class="step-head"><span>3</span><h3>Order Summary</h3></div>
        ${Ur(e,r)}
      </aside>
    </div>
  `}function Or(){return t.receivers.length?`<div class="selectable-list">${t.receivers.map(e=>`
    <article class="selectable-card ${String(e.id)===String(t.selectedReceiverId)?"selected":""}" data-select-receiver="${n(e.id)}">
      <div>
        <strong>${n(e.fullName||"")}</strong>
        <p class="hint">${n(e.phone||"")}</p>
      </div>
      <button class="icon-button" data-delete-receiver="${n(e.id)}" type="button" aria-label="Delete receiver">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
      </button>
    </article>
  `).join("")}</div>`:'<div class="checkout-empty">No receivers yet. Add one below.</div>'}function Br(){return`
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
  `}function qr(){return t.addresses.length?`<div class="selectable-list">${t.addresses.map(e=>`
    <article class="selectable-card ${String(e.id)===String(t.selectedAddressId)?"selected":""}" data-select-address="${n(e.id)}">
      <div>
        <strong>${n(e.title||"Address")}</strong>
        <p class="hint">${n(e.address||"")}</p>
      </div>
      <button class="icon-button" data-delete-address="${n(e.id)}" type="button" aria-label="Delete address">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
      </button>
    </article>
  `).join("")}</div>`:'<div class="checkout-empty">No addresses yet. Add one below.</div>'}function Fr(){return`
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
  `}function Ur(e,r){const i=e&&r&&t.cartItems.length&&!t.orderSubmitting;return`
    <div class="summary-items">
      ${t.cartItems.map(o=>`
        <div class="summary-item">
          <span>${n(o.name)} ${o.variantLabel?`· ${n(o.variantLabel)}`:""} x ${o.quantity}</span>
          <strong>${$(o.lineTotal)}</strong>
        </div>
      `).join("")}
    </div>
    <div class="summary-total"><span>Subtotal</span><strong>${$(t.cartTotal)}</strong></div>
    <div class="summary-box">
      <strong>Receiver</strong>
      <p class="hint">${e?`${n(e.fullName||"")} · ${n(e.phone||"")}`:"Select receiver"}</p>
    </div>
    <div class="summary-box">
      <strong>Address</strong>
      <p class="hint">${r?`${n(r.title||"")} · ${n(r.address||"")}`:"Select address"}</p>
    </div>
    <button class="primary-button full" data-place-order type="button" ${i?"":"disabled"}>
      ${t.orderSubmitting?"Submitting...":"Place Order"}
    </button>
  `}function xr(){const e=t.orderSuccess;a.checkoutContent.innerHTML=`
    <div class="order-success">
      <div class="success-mark">✓</div>
      <h3>Order created</h3>
      <p>Order #${n(e.id)} · ${n(e.status||"NEW")}</p>
      <strong>${$(e.totalAmount)}</strong>
      <p class="hint">${n(e.fullName||"")} ${e.phone?`· ${n(e.phone)}`:""}</p>
      <p class="hint">${n(e.address||"")}</p>
      <div class="hero-actions">
        <button class="secondary-button" data-success-orders type="button">View orders</button>
        <button class="primary-button" data-success-continue type="button">Continue shopping</button>
      </div>
    </div>
  `}async function he(){if(!b()){A();return}a.ordersDialog.showModal(),L(),await Ke()}async function Ke(){t.ordersLoading=!0,t.ordersError="",t.selectedOrder=null,t.selectedOrderHistory=[],t.orderHistoryWarning="",B();const e=await g("/api/orders",{requireAuth:!0,showError:!1});if(t.ordersLoading=!1,e===null){if(t.lastApiError.includes("Session expired")){a.ordersDialog.close();return}t.ordersError=t.lastApiError||"Orders could not be loaded.",B();return}t.orders=p(e),B()}function B(){if(t.ordersLoading){a.ordersContent.innerHTML=`
      <div class="orders-layout">
        <div class="orders-list"><div class="skeleton-card"></div><div class="skeleton-card"></div></div>
        <div class="order-detail-panel"><div class="skeleton-card"></div></div>
      </div>
    `;return}if(t.ordersError){a.ordersContent.innerHTML=`
      <div class="orders-empty">
        <strong>Orders unavailable</strong>
        <p>${n(t.ordersError)}</p>
        <button class="secondary-button" data-orders-retry type="button">Retry</button>
      </div>
    `;return}if(!t.orders.length){a.ordersContent.innerHTML=`
      <div class="orders-empty">
        <strong>${n(d("orders.none"))}</strong>
        <p>Your completed purchases will appear here.</p>
        <button class="primary-button" data-orders-start-shopping type="button">${n(d("home.startShopping"))}</button>
      </div>
    `;return}a.ordersContent.innerHTML=`
    <div class="orders-layout">
      <div class="orders-list">
        ${t.orders.map(Hr).join("")}
      </div>
      <div class="order-detail-panel">
        ${Kr()}
      </div>
    </div>
  `}function Hr(e){var i;const r=Array.isArray(e.items)?e.items:[];return`
    <article class="order-card ${((i=t.selectedOrder)==null?void 0:i.id)===e.id?"selected":""}">
      <div>
        <h3>${n(d("orders.order"))} #${n(e.id)}</h3>
        <p class="hint">${j(e.createdAt)}</p>
        <p class="hint">${n(e.fullName||"")}</p>
        <p class="hint">${n(pt(e.address||"",72))}</p>
      </div>
      <div class="order-card-side">
        <span class="status-badge status-${n(String(e.status||"").toLowerCase())}">${n(Te(e.status))}</span>
        <strong>${Re(e.totalAmount)}</strong>
        <span class="hint">${n(d("orders.items",{count:r.length}))}</span>
        <button class="secondary-button" data-order-detail="${n(e.id)}" type="button">${n(d("orders.viewDetails"))}</button>
      </div>
    </article>
  `}function Kr(){if(t.orderDetailLoading)return'<div class="skeleton-card"></div>';if(t.orderDetailError)return`<div class="orders-empty"><strong>Detail unavailable</strong><p>${n(t.orderDetailError)}</p></div>`;if(!t.selectedOrder)return'<div class="orders-empty"><strong>Select an order</strong><p>Choose an order to see details and timeline.</p></div>';const e=t.selectedOrder,r=Array.isArray(e.items)?e.items.map(i=>Yt({...i,orderId:e.id})):[];return`
    <section class="order-detail">
      <div class="order-detail-head">
        <div>
          <h3>${n(d("orders.order"))} #${n(e.id)}</h3>
          <p class="hint">${j(e.createdAt)}</p>
        </div>
        <span class="status-badge status-${n(String(e.status||"").toLowerCase())}">${n(Te(e.status))}</span>
      </div>
      <div class="summary-box">
        <strong>${n(d("checkout.receiver"))}</strong>
        <p class="hint">${n(e.fullName||"")} ${e.phone?`· ${n(e.phone)}`:""}</p>
      </div>
      <div class="summary-box">
        <strong>${n(d("checkout.address"))}</strong>
        <p class="hint">${n(e.address||"")}</p>
      </div>
      <div class="summary-total"><span>${n(d("common.total"))}</span><strong>${Re(e.totalAmount)}</strong></div>
      <div class="order-items">
        <h4>Items</h4>
        ${r.length?r.map(i=>Gr(i,e)).join(""):'<p class="hint">No items in response.</p>'}
      </div>
      <div class="order-timeline">
        <h4>Status history</h4>
        ${t.orderHistoryWarning?`<p class="checkout-error">${n(t.orderHistoryWarning)}</p>`:""}
        ${zr(e)}
      </div>
    </section>
  `}function Gr(e,r={}){const o=String(r.status||"").toUpperCase()==="DELIVERED"&&e.productId&&r.id;return`
    <article class="order-item">
      <img src="${n(e.image)}" alt="${n(e.name)}" />
      <div>
        <strong>${n(e.name)}</strong>
        <p class="hint">${e.variantLabel?n(e.variantLabel):"Variant"} · x${e.quantity}</p>
        ${o?`
          <button class="secondary-button order-review-button" data-order-write-review="${n(e.productId)}" data-review-order="${n(r.id)}" data-review-name="${n(e.name)}" type="button">Write review</button>
        `:e.productId?'<p class="hint">Available after delivery</p>':""}
      </div>
      <strong>${Re(e.lineTotal||e.unitPrice*e.quantity)}</strong>
    </article>
  `}function zr(e){return(t.selectedOrderHistory.length?t.selectedOrderHistory:[{status:e.status,createdAt:e.createdAt,note:"Current order status"}]).map(i=>`
    <div class="timeline-item">
      <span></span>
      <div>
        <strong>${n(Te(i.status))}</strong>
        <p class="hint">${j(i.createdAt)}</p>
        ${i.note?`<p class="hint">${n(i.note)}</p>`:""}
      </div>
    </div>
  `).join("")}function pt(e,r){const i=String(e||"");return i.length>r?`${i.slice(0,r-1)}…`:i}async function vt(e){t.orderDetailLoading=!0,t.orderDetailError="",t.orderHistoryWarning="",B();const[r,i]=await Promise.all([g(`/api/orders/${e}`,{requireAuth:!0,showError:!1}),g(`/api/orders/${e}/history`,{requireAuth:!0,showError:!1})]);if(t.orderDetailLoading=!1,r===null){t.orderDetailError=t.lastApiError||"Order detail could not be loaded.",B();return}t.selectedOrder=r,t.selectedOrderHistory=i===null?[]:p(i),i===null&&(t.orderHistoryWarning="Status history could not be loaded."),B()}async function yt(){if(!b()){A();return}a.favoritesDialog.showModal(),L(),await V({render:!0})}async function V(e={}){const{render:r=!1}=e;if(!b()){Ce();return}t.favoritesLoading=!0,t.favoritesError="",r&&Q();const i=await g("/api/favorites",{requireAuth:!0,showError:!1});if(t.favoritesLoading=!1,i===null){if(t.lastApiError.includes("Session expired")||t.lastApiError==="Please login to continue"){Ce(),a.favoritesDialog.open&&a.favoritesDialog.close();return}t.favoritesError=t.lastApiError||"Favorites could not be loaded.",pe(),r&&Q();return}Zt(p(i).map(normalizeFavoriteItem)),t.products.length&&E(a.grid,t.products,"Mahsulot topilmadi."),t.todayDeals.length&&E(a.dealsGrid,t.todayDeals.slice(0,8),"Bugungi takliflar topilmadi."),(r||a.favoritesDialog.open)&&Q()}function pe(){a.favoritesCount.textContent=t.favoritesCount,a.favoritesSummary.textContent=`${t.favoritesCount} product${t.favoritesCount===1?"":"s"}`}function Q(){if(pe(),t.favoritesLoading){a.favoritesContent.innerHTML=`
      <div class="favorites-grid">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    `;return}if(t.favoritesError){a.favoritesContent.innerHTML=`
      <div class="favorites-empty">
        <strong>Favorites unavailable</strong>
        <p>${n(t.favoritesError)}</p>
        <button class="secondary-button" data-favorites-retry type="button">Retry</button>
      </div>
    `;return}if(!t.favoriteProducts.length){a.favoritesContent.innerHTML=`
      <div class="favorites-empty">
        <strong>No favorite products yet</strong>
        <p>Save products with the heart button and they will appear here.</p>
        <button class="primary-button" data-favorites-start type="button">Start shopping</button>
      </div>
    `;return}a.favoritesContent.innerHTML=`
    <div class="favorites-grid product-grid">
      ${t.favoriteProducts.map(e=>X({...e,favorite:!0})).join("")}
    </div>
  `}function wt(){a.favoritesDialog.close(),S()}function jr(e){var o;const r=e.target.closest("[data-favorites-retry]"),i=e.target.closest("[data-favorites-start]");if(r){V({render:!0});return}if(i){wt(),(o=document.getElementById("products"))==null||o.scrollIntoView({behavior:"smooth",block:"start"});return}ae(e)}function ee(){var e;t.notifications=[],t.notificationsLoading=!1,t.notificationsError="",t.unreadCount=0,t.unreadCountLoading=!1,t.notificationUpdatingIds=new Set,se(),(e=a.notificationsDrawer)!=null&&e.classList.contains("open")&&J()}async function U(){if(!b()){ee();return}t.unreadCountLoading=!0;const e=await g("/api/notifications/unread-count",{requireAuth:!0,showError:!1});if(t.unreadCountLoading=!1,e===null){if(t.lastApiError.includes("Session expired")){ee();return}se();return}t.unreadCount=normalizeUnreadCount(e),se()}async function bt(){if(!b()){A();return}a.notificationsDrawer.classList.add("open"),a.notificationsDrawer.setAttribute("aria-hidden","false"),L(),await Promise.all([Ge(),U()])}function J(){a.notificationsDrawer.classList.remove("open"),a.notificationsDrawer.setAttribute("aria-hidden","true"),S()}async function Ge(){if(!b()){A();return}t.notificationsLoading=!0,t.notificationsError="",q();const e=await g("/api/notifications",{requireAuth:!0,showError:!1});if(t.notificationsLoading=!1,e===null){if(t.lastApiError.includes("Session expired")){ee();return}t.notificationsError=t.lastApiError||"Notifications could not be loaded.",q();return}t.notifications=Wt(e).map(_t).filter(r=>r.id!==void 0),q()}function se(){a.notificationsCount.textContent=t.unreadCount,a.notificationsCount.hidden=t.unreadCount<=0,a.notificationsSummary.textContent=`${t.unreadCount} ${d("notifications.unread")}`}function q(){if(se(),t.notificationsLoading){a.notificationsContent.innerHTML=`
      <div class="notifications-loading">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    `;return}if(t.notificationsError){a.notificationsContent.innerHTML=`
      <div class="notifications-empty">
        <strong>${n(d("notifications.title"))}</strong>
        <p>${n(t.notificationsError)}</p>
        <button class="secondary-button" data-notifications-retry type="button">${n(d("common.tryAgain"))}</button>
      </div>
    `;return}if(!t.notifications.length){a.notificationsContent.innerHTML=`
      <div class="notifications-empty">
        <strong>${n(d("notifications.none"))}</strong>
        <p>Order, promo and system updates will appear here.</p>
      </div>
    `;return}a.notificationsContent.innerHTML=`
    <div class="notifications-list">
      ${t.notifications.map(Vr).join("")}
    </div>
  `}function Vr(e){const r=t.notificationUpdatingIds.has(String(e.id));return`
    <article class="notification-card ${e.read?"read":"unread"} ${r?"loading":""}" data-notification-card="${n(e.id)}">
      <div class="notification-icon type-${n(e.type.toLowerCase())}" aria-hidden="true">${Yr(e.type)}</div>
      <div>
        <div class="notification-head">
          <strong>${n(e.title)}</strong>
          ${e.read?"":`<span class="unread-dot" aria-label="${n(d("notifications.unread"))}"></span>`}
        </div>
        <p>${n(e.message)}</p>
        <div class="notification-meta">
          <span>${n(notificationTypeLabel(e.type))}</span>
          <span>${j(e.createdAt)}</span>
        </div>
      </div>
      <button class="secondary-button notification-read-button" data-notification-read="${n(e.id)}" ${e.read||r?"disabled":""} type="button">
        ${e.read?n(d("notifications.read")):n(d(r?"common.saving":"notifications.markRead"))}
      </button>
    </article>
  `}function Yr(e){return{ORDER:"O",PROMO:"%",SYSTEM:"i"}[e]||"i"}async function St(e,r={}){const i=t.notifications.find(s=>String(s.id)===String(e));if(!i||i.read)return!0;t.notificationUpdatingIds.add(String(e)),q();const o=await g(`/api/notifications/${e}/read`,{method:"POST",requireAuth:!0,showError:!1});return t.notificationUpdatingIds.delete(String(e)),o===null?t.lastApiError.includes("Session expired")?(ee(),!1):(v(t.lastApiError||"Notification could not be updated."),q(),!1):(i.read=!0,t.notifications=t.notifications.map(s=>String(s.id)===String(e)?{...s,read:!0}:s),t.unreadCount=Math.max(0,t.unreadCount-1),q(),await U(),r.silent||v("Marked as read"),!0)}async function _r(e){const r=t.notifications.find(i=>String(i.id)===String(e));r&&(r.read||await St(e,{silent:!0}),r.type==="ORDER"&&r.refId&&(J(),await he(),await vt(r.refId)))}async function Wr(e){if(!b())return A(),null;const r=String(e||"").trim();return r?g("/api/notifications/token",{method:"POST",requireAuth:!0,body:JSON.stringify({token:r})}):(v("Notification token is empty."),null)}window.saveNotificationToken=Wr;async function Qr(){return g("/api/health",{showError:!1})}window.checkServerHealth=Qr;function Jr(e){const r=e.target.closest("[data-notifications-retry]"),i=e.target.closest("[data-notification-read]"),o=e.target.closest("[data-notification-card]");if(r){Ge(),U();return}if(i){e.stopPropagation(),St(i.dataset.notificationRead);return}o&&_r(o.dataset.notificationCard)}async function Zr(){if(!b()){A();return}a.myReviewsDialog.showModal(),L(),await ve()}async function ve(){if(!b()){A();return}t.myReviewsLoading=!0,t.myReviewsError="",re();const e=await g("/api/reviews/my",{requireAuth:!0,showError:!1});if(t.myReviewsLoading=!1,e===null){if(t.lastApiError.includes("Session expired")){ze(),de();return}t.myReviewsError=t.lastApiError||"Reviews could not be loaded.",re();return}t.myReviews=Jt(e).map(Qt),re()}function re(){if(a.myReviewsSummary.textContent=t.myReviews.length?`${t.myReviews.length} item${t.myReviews.length===1?"":"s"}`:"Purchased products and written reviews",t.myReviewsLoading){a.myReviewsContent.innerHTML=`
      <div class="my-reviews-list">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    `;return}if(t.myReviewsError){a.myReviewsContent.innerHTML=`
      <div class="reviews-empty-state">
        <strong>Reviews unavailable</strong>
        <p>${n(t.myReviewsError)}</p>
        <button class="secondary-button" data-my-reviews-retry type="button">Retry</button>
      </div>
    `;return}if(!t.myReviews.length){a.myReviewsContent.innerHTML=`
      <div class="reviews-empty-state">
        <strong>No review items yet</strong>
        <p>Your written reviews and reviewable purchases will appear here.</p>
      </div>
    `;return}a.myReviewsContent.innerHTML=`
    <div class="my-reviews-list">
      ${t.myReviews.map(Xr).join("")}
    </div>
  `}function Xr(e){const r=e.review;return`
    <article class="my-review-item">
      <img src="${n(e.image)}" alt="${n(e.name)}" />
      <div>
        <strong>${n(e.name)}</strong>
        <p class="hint">${n(e.brand||"BEAUTY SKIN KOREA")} ${e.orderId?`· Order #${n(e.orderId)}`:""}</p>
        ${r!=null&&r.rating||r!=null&&r.content?`
          <div class="written-review">
            ${Oe(r.rating)}
            <p>${n(r.content||"No text review.")}</p>
            <p class="hint">${j(r.createdAt)}</p>
          </div>
        `:'<p class="hint">Review not written yet.</p>'}
      </div>
      <div class="review-action-cell">
        ${e.reviewable?`
          <button class="secondary-button" data-write-review="${n(e.productId)}" data-review-order="${n(e.orderId)}" data-review-name="${n(e.name)}" type="button">Write review</button>
        `:r!=null&&r.content||r!=null&&r.rating?'<span class="status-badge status-delivered">Reviewed</span>':'<span class="hint">Not reviewable</span>'}
      </div>
    </article>
  `}function Et(e={}){if(!b()){A();return}const r=e.productId,i=e.orderId;if(!r||!i){v("Product and order are required for review.");return}t.reviewDraft={productId:r,orderId:i,productName:e.productName||"Product"},t.reviewRating=5,a.writeReviewProduct.textContent=`${t.reviewDraft.productName} · Order #${i}`,a.reviewContent.value="",a.reviewImages.value="",a.reviewImageFiles.value="",a.reviewUploadStatus.textContent="",k(""),At(),a.writeReviewDialog.showModal(),L()}function At(){a.reviewRatingSelector.innerHTML=Array.from({length:5},(e,r)=>{const i=r+1;return`
      <button class="rating-choice ${i<=t.reviewRating?"active":""}" data-review-rating="${i}" type="button" aria-label="Rating ${i} out of 5">
        ★
      </button>
    `}).join("")}function ze(){a.myReviewsDialog.open&&a.myReviewsDialog.close(),S()}function de(){a.writeReviewDialog.open&&a.writeReviewDialog.close(),S()}function k(e,r=""){a.reviewFormMessage.textContent=e,a.reviewFormMessage.className=`form-message ${r}`.trim()}function ea(e){return String(e||"").split(/[\n,]+/).map(r=>r.trim()).filter(Boolean).slice(0,5)}function ta(e){const r=new Set(["image/jpeg","image/png","image/webp"]),i=Array.from(e||[]);return i.length>5?{error:"Maximum 5 image files allowed.",files:[]}:i.find(l=>!r.has(l.type))?{error:"Only JPG, PNG and WEBP images are allowed.",files:[]}:i.find(l=>l.size>10*1024*1024)?{error:"Each image must be 10MB or smaller.",files:[]}:{files:i}}async function ra(e){const r=[];for(let i=0;i<e.length;i+=1){const o=e[i];a.reviewUploadStatus.textContent=`Uploading image ${i+1} of ${e.length}...`;const s=await g("/api/uploads/presign",{method:"POST",requireAuth:!0,showError:!1,body:JSON.stringify({fileName:o.name,contentType:o.type,folder:"reviews",fileSizeBytes:o.size})});if(!(s!=null&&s.uploadUrl)||!(s!=null&&s.publicUrl))throw new Error(t.lastApiError||"Image upload could not be prepared.");const l=await fetch(s.uploadUrl,{method:"PUT",headers:{"Content-Type":o.type},body:o});if(!l.ok)throw new Error(`Image upload failed: HTTP ${l.status}`);r.push(s.publicUrl)}return a.reviewUploadStatus.textContent=r.length?"Images uploaded.":"",r}async function aa(e){var f;if(e.preventDefault(),t.reviewSubmitting)return;const r=t.reviewDraft||{},i=a.reviewContent.value.trim(),o=ea(a.reviewImages.value),s=ta(a.reviewImageFiles.files);if(!r.productId||!r.orderId){k("Product and order are required.","error");return}if(t.reviewRating<1||t.reviewRating>5){k("Choose a rating from 1 to 5.","error");return}if(!i){k("Review text is required.","error");return}if(s.error){k(s.error,"error");return}if(String(a.reviewImages.value||"").split(/[\n,]+/).filter(h=>h.trim()).length>5){k("Maximum 5 image URLs allowed.","error");return}if(o.length+s.files.length>5){k("Maximum 5 review images allowed.","error");return}t.reviewSubmitting=!0,t.uploadingReviewImages=!!s.files.length,a.submitReviewButton.disabled=!0,a.submitReviewButton.textContent="Submitting...",k("");let l=[];try{l=s.files.length?await ra(s.files):[]}catch(h){t.reviewSubmitting=!1,t.uploadingReviewImages=!1,a.submitReviewButton.disabled=!1,a.submitReviewButton.textContent="Submit review",k(h.message||"Image upload failed.","error");return}const c=[...l,...o].slice(0,5),u=await g("/api/reviews",{method:"POST",requireAuth:!0,showError:!1,body:JSON.stringify({productId:Number(r.productId),orderId:Number(r.orderId),rating:Number(t.reviewRating),content:i,imageUrls:c})});if(t.reviewSubmitting=!1,t.uploadingReviewImages=!1,a.submitReviewButton.disabled=!1,a.submitReviewButton.textContent="Submit review",a.reviewUploadStatus.textContent="",u===null){if(t.lastApiError.includes("Session expired")){ze(),de();return}k(t.lastApiError||"Review could not be submitted.","error");return}v("Review submitted"),de(),await ve(),((f=t.selectedDetailProduct)==null?void 0:f.id)!==void 0&&String(t.selectedDetailProduct.id)===String(r.productId)&&await Ue(r.productId)}function ia(e){const r=e.target.closest("[data-my-reviews-retry]"),i=e.target.closest("[data-write-review]");if(r){ve();return}i&&Et({productId:i.dataset.writeReview,orderId:i.dataset.reviewOrder,productName:i.dataset.reviewName})}function oa(e){const r=e.target.closest("[data-review-rating]");r&&(t.reviewRating=Number(r.dataset.reviewRating),At())}function je(e="login"){le(e),ye(),a.authDialog.showModal(),L()}function le(e){t.authMode=e;const r=e==="login";a.authTitle.textContent=d(r?"auth.login":"auth.register"),a.loginFields.hidden=!r,a.registerFields.hidden=r,a.authSubmit.textContent=d(r?"auth.signIn":"auth.createAccount"),a.loginTab.classList.toggle("active",r),a.registerTab.classList.toggle("active",!r),a.loginTab.setAttribute("aria-selected",String(r)),a.registerTab.setAttribute("aria-selected",String(!r)),ye()}function ye(){document.querySelectorAll(".field-error").forEach(e=>{e.textContent=""}),a.authMessage.textContent="",a.authMessage.className="form-message"}function O(e,r){const i=document.getElementById(`${e}Error`);i&&(i.textContent=r)}function ce(e){t.authLoading=e,a.authSubmit.disabled=e,a.authSubmit.textContent=e?d("home.loading"):t.authMode==="login"?d("auth.signIn"):d("auth.createAccount")}function Ct(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function na(){ye();let e=!0;const r=a.loginEmail.value.trim(),i=a.loginPassword.value;return(!r||!Ct(r))&&(O("loginEmail",d("auth.emailRequired")),e=!1),(!i||i.length<6)&&(O("loginPassword",d("auth.passwordMin")),e=!1),e}function sa(){ye();let e=!0;const r=a.registerFullName.value.trim(),i=a.registerEmail.value.trim(),o=a.registerPhone.value.trim(),s=a.registerPassword.value,l=a.registerConfirmPassword.value;return r||(O("registerFullName",d("auth.fullNameRequired")),e=!1),(!i||!Ct(i))&&(O("registerEmail",d("auth.emailRequired")),e=!1),o||(O("registerPhone",d("auth.phoneRequired")),e=!1),(!s||s.length<6)&&(O("registerPassword",d("auth.passwordMin")),e=!1),s!==l&&(O("registerConfirmPassword",d("auth.passwordMismatch")),e=!1),e}async function da(e){e.preventDefault(),!t.authLoading&&(t.authMode==="login"?await la():await ca())}async function la(){if(!na())return;ce(!0);const e=await g("/api/auth/login",{method:"POST",body:JSON.stringify({email:a.loginEmail.value.trim(),password:a.loginPassword.value}),showError:!1});if(ce(!1),!(e!=null&&e.token)){a.authMessage.textContent=t.lastApiError||"Email yoki parol noto‘g‘ri.",a.authMessage.className="form-message error";return}ar(e),await ut(),a.authDialog.close(),v(`Welcome, ${De(e.fullName)||"User"}.`),await N(),await V(),await U()}async function ca(){if(!sa())return;ce(!0);const e=await g("/api/auth/register",{method:"POST",body:JSON.stringify({fullName:a.registerFullName.value.trim(),email:a.registerEmail.value.trim(),phone:a.registerPhone.value.trim(),password:a.registerPassword.value}),showError:!1});if(ce(!1),e===null){a.authMessage.textContent=t.lastApiError||"Email allaqachon mavjud yoki server javob bermadi.",a.authMessage.className="form-message error";return}a.authMessage.textContent="Registered. Endi login qiling.",a.authMessage.className="form-message success",le("login"),a.loginEmail.value=a.registerEmail.value.trim()}function ua(){if(!b()){A();return}t.profileEditing=!1,Ve(),a.profileDrawer.classList.add("open"),a.profileDrawer.setAttribute("aria-hidden","false"),L()}function M(){a.profileDrawer.classList.remove("open"),a.profileDrawer.setAttribute("aria-hidden","true"),S()}function Ve(){const e=t.user||{},r=e.profileImage?`<img class="profile-avatar" src="${n(e.profileImage)}" alt="${n(e.fullName||"Profile")}" />`:`<div class="profile-avatar">${n(De(e.fullName||e.email||"U").charAt(0)||"U")}</div>`;a.profileContent.innerHTML=`
    <div class="profile-card">
      <div class="profile-summary">
        ${r}
        <div>
          <h3>${n(e.fullName||"Profile")}</h3>
          <p class="hint">${n(e.email||"")}</p>
          <p class="hint">${n(e.phone||"")}</p>
          <p class="hint">Role: ${n(t.role||"USER")}</p>
        </div>
      </div>
      <div class="profile-actions">
        <button class="secondary-button full" data-profile-action="edit" type="button">Edit Profile</button>
        <button class="secondary-button full" data-profile-action="orders" type="button">My Orders</button>
        <button class="secondary-button full" data-profile-action="addresses" type="button">Addresses</button>
        <button class="secondary-button full" data-profile-action="receivers" type="button">Receivers</button>
        <button class="secondary-button full" data-profile-action="favorites" type="button">Favorites</button>
        <button class="secondary-button full" data-profile-action="notifications" type="button">Notifications</button>
        <button class="secondary-button full" data-profile-action="reviews" type="button">My Reviews</button>
        <button class="primary-button full" data-profile-action="logout" type="button">Logout</button>
      </div>
      ${t.profileEditing?ga(e):""}
    </div>
  `}function ga(e){return`
    <form class="profile-edit" id="profileEditForm">
      <label>Email<input value="${n(e.email||"")}" readonly /></label>
      <label>Full name<input id="profileFullName" value="${n(e.fullName||"")}" required /></label>
      <label>Phone<input id="profilePhone" value="${n(e.phone||"")}" required /></label>
      <label>Profile image URL<input id="profileImage" value="${n(e.profileImage||"")}" /></label>
      <button class="primary-button full" id="profileSaveButton" type="submit">Save profile</button>
      <p class="form-message" id="profileMessage"></p>
    </form>
  `}async function ma(e){const r=e.target.closest("[data-profile-action]");if(!r)return;const i=r.dataset.profileAction;if(i==="edit"){t.profileEditing=!t.profileEditing,Ve();return}if(i==="logout"){ke(),M(),v("Logged out.");return}if(i==="orders"){await he();return}if(i==="favorites"){M(),await yt();return}if(i==="reviews"){M(),await Zr();return}if(i==="notifications"){M(),await bt();return}if(i==="addresses"||i==="receivers"){M(),await ht();return}v("Bu bo‘lim keyingi bosqichga tayyor.")}async function fa(e){var f;const r=e.target.closest("[data-select-receiver]"),i=e.target.closest("[data-select-address]"),o=e.target.closest("[data-delete-receiver]"),s=e.target.closest("[data-delete-address]"),l=e.target.closest("[data-place-order]"),c=e.target.closest("[data-success-orders]"),u=e.target.closest("[data-success-continue]");if(o){e.stopPropagation(),await wa(o.dataset.deleteReceiver);return}if(s){e.stopPropagation(),await ba(s.dataset.deleteAddress);return}if(r){t.selectedReceiverId=r.dataset.selectReceiver,P();return}if(i){t.selectedAddressId=i.dataset.selectAddress,P();return}if(l){await $t();return}if(c){a.checkoutDialog.close(),await he();return}u&&(a.checkoutDialog.close(),H(),(f=document.getElementById("products"))==null||f.scrollIntoView({behavior:"smooth",block:"start"}))}function ha(e){var l;const r=e.target.closest("[data-order-detail]"),i=e.target.closest("[data-orders-retry]"),o=e.target.closest("[data-orders-start-shopping]"),s=e.target.closest("[data-order-write-review]");if(s){Et({productId:s.dataset.orderWriteReview,orderId:s.dataset.reviewOrder,productName:s.dataset.reviewName});return}if(r){vt(r.dataset.orderDetail);return}if(i){Ke();return}o&&(a.ordersDialog.close(),(l=document.getElementById("products"))==null||l.scrollIntoView({behavior:"smooth",block:"start"}))}async function pa(e){const r=e.target.closest("[data-add-receiver-form]"),i=e.target.closest("[data-add-address-form]");!r&&!i||(e.preventDefault(),r&&await va(),i&&await ya())}async function va(){var l,c,u;const e=(l=document.getElementById("receiverFirstName"))==null?void 0:l.value.trim(),r=(c=document.getElementById("receiverLastName"))==null?void 0:c.value.trim(),i=(u=document.getElementById("receiverPhone"))==null?void 0:u.value.trim(),o=document.getElementById("receiverFormError");if(!e||!r||!i){o&&(o.textContent="First name, last name va phone majburiy.");return}const s=await g("/api/receivers",{method:"POST",requireAuth:!0,body:JSON.stringify({firstName:e,lastName:r,phone:i})});s!==null&&(await xe(s.id),P(),v("Receiver added"))}async function ya(){var c,u,f,h;const e=(c=document.getElementById("addressTitle"))==null?void 0:c.value.trim(),r=(u=document.getElementById("addressText"))==null?void 0:u.value.trim(),i=Number((f=document.getElementById("addressLatitude"))==null?void 0:f.value),o=Number((h=document.getElementById("addressLongitude"))==null?void 0:h.value),s=document.getElementById("addressFormError");if(!e||!r||!Number.isFinite(i)||!Number.isFinite(o)){s&&(s.textContent="Title, address, latitude va longitude majburiy.");return}const l=await g("/api/addresses",{method:"POST",requireAuth:!0,body:JSON.stringify({title:e,address:r,latitude:i,longitude:o})});l!==null&&(await He(l.id),P(),v("Address added"))}async function wa(e){await g(`/api/receivers/${e}`,{method:"DELETE",requireAuth:!0})!==null&&(String(t.selectedReceiverId)===String(e)&&(t.selectedReceiverId=null),await xe(),P())}async function ba(e){await g(`/api/addresses/${e}`,{method:"DELETE",requireAuth:!0})!==null&&(String(t.selectedAddressId)===String(e)&&(t.selectedAddressId=null),await He(),P())}async function $t(){if(!t.selectedReceiverId||!t.selectedAddressId||!t.cartItems.length)return;t.orderSubmitting=!0,P();const e=await g("/api/orders",{method:"POST",requireAuth:!0,body:JSON.stringify({receiverId:Number(t.selectedReceiverId),addressId:Number(t.selectedAddressId),cartItemIds:t.cartItems.map(r=>Number(r.id))}),showError:!1});if(t.orderSubmitting=!1,e===null){t.checkoutError=t.lastApiError||"Order could not be created.",P();return}t.orderSuccess=e,await N(),await U(),H(),P(),v("Order created")}async function Sa(e){var c,u,f;e.preventDefault();const r=t.user||{},i={id:r.id,email:r.email,fullName:(c=document.getElementById("profileFullName"))==null?void 0:c.value.trim(),phone:(u=document.getElementById("profilePhone"))==null?void 0:u.value.trim(),profileImage:(f=document.getElementById("profileImage"))==null?void 0:f.value.trim()},o=document.getElementById("profileMessage");if(!i.fullName||!i.phone){o&&(o.textContent="Full name va phone majburiy.",o.className="form-message error");return}if(await g("/api/users/me",{method:"PUT",requireAuth:!0,body:JSON.stringify(i),showError:!1})===null){o&&(o.textContent=t.lastApiError||"Profile yangilanmadi.",o.className="form-message error");return}const l=await g("/api/users/me",{requireAuth:!0,showError:!1});l&&(t.user=l,localStorage.setItem(m.storageKeys.user,JSON.stringify(l))),t.profileEditing=!1,G(),Ve(),v("Profile updated.")}function Ea(){var e;(e=a.languageSelect)==null||e.addEventListener("change",r=>zt(r.target.value)),a.searchForm.addEventListener("submit",r=>r.preventDefault()),a.searchInput.addEventListener("input",Aa),a.categoryToolbar.addEventListener("click",Se),a.quickCategoryGrid.addEventListener("click",Se),a.catalogList.addEventListener("click",Se),a.banners.addEventListener("click",Ca),a.grid.addEventListener("click",ae),a.dealsGrid.addEventListener("click",ae),a.detailContent.addEventListener("click",rt),a.productDetailPageContent.addEventListener("click",r=>{rt(r)||ae(r)}),a.cartItems.addEventListener("click",$a),a.catalogButton.addEventListener("click",Ia),a.closeCatalog.addEventListener("click",ie),a.cartButton.addEventListener("click",Pa),a.closeCart.addEventListener("click",H),a.loginButton.addEventListener("click",()=>{b()?ua():je("login")}),a.favoritesButton.addEventListener("click",yt),a.notificationsButton.addEventListener("click",bt),a.apiButton.addEventListener("click",La),a.loginTab.addEventListener("click",()=>le("login")),a.registerTab.addEventListener("click",()=>le("register")),a.authForm.addEventListener("submit",da),a.apiForm.addEventListener("submit",ka),a.checkoutButton.addEventListener("click",ht),a.checkoutForm.addEventListener("submit",Mr),a.checkoutContent.addEventListener("click",fa),a.checkoutContent.addEventListener("submit",pa),a.ordersContent.addEventListener("click",ha),a.refreshOrders.addEventListener("click",Ke),a.closeOrders.addEventListener("click",()=>a.ordersDialog.close()),a.favoritesContent.addEventListener("click",jr),a.refreshFavorites.addEventListener("click",()=>V({render:!0})),a.closeFavorites.addEventListener("click",wt),a.notificationsContent.addEventListener("click",Jr),a.refreshNotifications.addEventListener("click",()=>{Ge(),U()}),a.closeNotifications.addEventListener("click",J),a.myReviewsContent.addEventListener("click",ia),a.refreshMyReviews.addEventListener("click",ve),a.closeMyReviews.addEventListener("click",ze),a.writeReviewForm.addEventListener("submit",aa),a.closeWriteReview.addEventListener("click",de),a.reviewRatingSelector.addEventListener("click",oa),a.closeProfile.addEventListener("click",M),a.profileContent.addEventListener("click",ma),a.profileContent.addEventListener("submit",Sa),a.ordersButton.addEventListener("click",he),a.refreshHome.addEventListener("click",ge),a.loadMore.addEventListener("click",vr),window.addEventListener("hashchange",ne),a.catalogDrawer.addEventListener("click",r=>{r.target===a.catalogDrawer&&ie()}),a.cartDrawer.addEventListener("click",r=>{r.target===a.cartDrawer&&H()}),a.profileDrawer.addEventListener("click",r=>{r.target===a.profileDrawer&&M()}),a.notificationsDrawer.addEventListener("click",r=>{r.target===a.notificationsDrawer&&J()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&(ie(),H(),M(),J(),a.ordersDialog.open&&a.ordersDialog.close(),a.favoritesDialog.open&&a.favoritesDialog.close(),a.myReviewsDialog.open&&a.myReviewsDialog.close(),a.writeReviewDialog.open&&a.writeReviewDialog.close())}),a.detailDialog.addEventListener("close",S),a.authDialog.addEventListener("close",S),a.apiDialog.addEventListener("close",S),a.checkoutDialog.addEventListener("close",S),a.ordersDialog.addEventListener("close",S),a.favoritesDialog.addEventListener("close",S),a.myReviewsDialog.addEventListener("close",S),a.writeReviewDialog.addEventListener("close",S),document.querySelectorAll("[data-close-dialog]").forEach(r=>{r.addEventListener("click",()=>{var i;return(i=r.closest("dialog"))==null?void 0:i.close()})})}function Aa(e){clearTimeout(t.searchTimer),t.searchTimer=setTimeout(()=>{Er(e.target.value).catch(()=>{T(a.grid,"Qidiruv vaqtida xatolik yuz berdi."),a.status.textContent=""})},m.searchDebounceMs)}function Se(e){const r=e.target.closest("[data-category]");r&&(ie(),qe(r.dataset.category).catch(()=>{T(a.grid,"Kategoriya mahsulotlari yuklanmadi."),a.status.textContent=""}),window.setTimeout(()=>{var i;(i=document.getElementById("products"))==null||i.scrollIntoView({behavior:"smooth",block:"start"})},0))}function ae(e){const r=e.target.closest("[data-show-all]"),i=e.target.closest("[data-favorite]"),o=e.target.closest("[data-add]"),s=e.target.closest("[data-detail]"),l=e.target.closest("[data-product]");if(r){e.stopPropagation(),ge();return}if(i){e.stopPropagation(),Pt(i.dataset.favorite);return}if(o){e.stopPropagation(),ft(o.dataset.add,null,1);return}if(s||l&&!e.target.closest("button")){e.stopPropagation();const c=(s||l).dataset.detail||l.dataset.product;ir(c),Ar(c)}}function Ca(e){const r=e.target.closest("[data-banner-nav]");if(r){const l=a.banners.querySelector(".banner-track"),c=(l==null?void 0:l.clientWidth)||0;l==null||l.scrollBy({left:r.dataset.bannerNav==="next"?c:-c,behavior:"smooth"});return}const i=e.target.closest("[data-banner-link-type]");if(!i)return;const o=i.dataset.bannerLinkType,s=i.dataset.bannerLinkId;if(o==="PRODUCT"&&s){Fe(s);return}if(o==="CATEGORY"&&s){const l=t.categories.find(c=>String(c)===String(s))||(at[s]?s:"");l?($e(),qe(l)):v("Category banner is not available yet.")}}function rt(e){const r=e.target.closest("[data-route-home]"),i=e.target.closest(".product-detail-page [data-category]"),o=e.target.closest("[data-close-detail]"),s=e.target.closest("[data-variant]"),l=e.target.closest("[data-qty]"),c=e.target.closest("[data-detail-add]"),u=e.target.closest("[data-detail-favorite]"),f=e.target.closest("[data-reviews-retry]");if(r)return e.stopPropagation(),$e(),!0;if(i)return e.stopPropagation(),$e(),qe(i.dataset.category),!0;if(o)return e.stopPropagation(),a.detailDialog.close(),S(),!0;if(s)return e.stopPropagation(),t.selectedVariantId=s.dataset.variant,R(t.selectedDetailProduct),!0;if(l)return e.stopPropagation(),t.selectedQuantity=Math.max(1,t.selectedQuantity+(l.dataset.qty==="plus"?1:-1)),R(t.selectedDetailProduct),!0;if(u)return e.stopPropagation(),Pt(u.dataset.detailFavorite),!0;if(f)return e.stopPropagation(),Ue(f.dataset.reviewsRetry),!0;if(c){e.stopPropagation();const h=document.getElementById("quantityInput");return t.selectedQuantity=Math.max(1,Number((h==null?void 0:h.value)||t.selectedQuantity)),ft(t.selectedDetailProduct.id,t.selectedVariantId,t.selectedQuantity),!0}return!1}function $a(e){var l;const r=e.target.closest("[data-cart-retry]"),i=e.target.closest("[data-start-shopping]"),o=e.target.closest("[data-cart-qty]"),s=e.target.closest("[data-remove]");if(r&&N(),i&&(H(),(l=document.getElementById("products"))==null||l.scrollIntoView({behavior:"smooth",block:"start"})),o){const c=t.cartItems.find(u=>String(u.id)===String(o.dataset.cartId));c&&Nr(c.id,c.quantity+(o.dataset.cartQty==="plus"?1:-1))}s&&Tr(s.dataset.remove)}function Pa(){if(!b()){A();return}a.cartDrawer.classList.add("open"),a.cartDrawer.setAttribute("aria-hidden","false"),L(),N()}function H(){a.cartDrawer.classList.remove("open"),a.cartDrawer.setAttribute("aria-hidden","true"),S()}function Ia(){a.catalogDrawer.classList.add("open"),a.catalogDrawer.setAttribute("aria-hidden","false"),a.catalogButton.setAttribute("aria-expanded","true"),L()}function ie(){a.catalogDrawer.classList.remove("open"),a.catalogDrawer.setAttribute("aria-hidden","true"),a.catalogButton.setAttribute("aria-expanded","false"),S()}function L(){document.body.classList.add("locked")}function S(){const e=a.cartDrawer.classList.contains("open")||a.catalogDrawer.classList.contains("open")||a.profileDrawer.classList.contains("open")||a.notificationsDrawer.classList.contains("open"),r=[a.detailDialog,a.authDialog,a.apiDialog,a.checkoutDialog,a.ordersDialog,a.favoritesDialog,a.myReviewsDialog,a.writeReviewDialog].some(i=>i.open);!e&&!r&&document.body.classList.remove("locked")}function La(){a.baseUrl.value=t.baseUrl,a.apiDialog.showModal(),L()}function ka(e){e.preventDefault(),t.baseUrl=te(a.baseUrl.value||""),localStorage.setItem(m.storageKeys.baseUrl,t.baseUrl),a.apiDialog.close(),ge()}async function Pt(e){var l;if(!b()){A();return}const r=t.favoriteIds.has(String(e)),i=await g(`/api/favorites/${e}/toggle`,{method:"POST",requireAuth:!0});if(i===null)return;const o=typeof i=="object"&&"favorite"in i?!!i.favorite:!r,s=Da(e);if(o){const c=s?{...s,favorite:!0}:null;c&&!t.favoriteProducts.some(u=>String(u.id)===String(e))&&(t.favoriteProducts=[c,...t.favoriteProducts])}else t.favoriteProducts=t.favoriteProducts.filter(c=>String(c.id)!==String(e));t.favoriteIds=new Set(t.favoriteProducts.map(c=>String(c.id))),t.favoritesCount=t.favoriteProducts.length,I(),pe(),t.products.length&&E(a.grid,t.products,"Mahsulot topilmadi."),t.todayDeals.length&&E(a.dealsGrid,t.todayDeals.slice(0,8),"Bugungi takliflar topilmadi."),((l=t.selectedDetailProduct)==null?void 0:l.id)!==void 0&&String(t.selectedDetailProduct.id)===String(e)&&R(t.selectedDetailProduct),a.favoritesDialog.open&&Q(),v(o?"Added to favorites":"Removed from favorites"),o&&!s&&await V({render:a.favoritesDialog.open})}function Da(e){return[...t.products,...t.todayDeals,...t.favoriteProducts,t.selectedDetailProduct].filter(Boolean).find(r=>String(r.id)===String(e))}function Ra(){dt(t),me(),F(),t.currentRoute==="product"&&t.selectedDetailProduct?R(t.selectedDetailProduct):(E(a.grid,t.products,d("home.noProducts"),{screen:t.currentGridScreen}),E(a.dealsGrid,t.todayDeals.slice(0,8),d("home.noProducts"))),a.cartDrawer.classList.contains("open")&&D(),a.favoritesDialog.open&&Q(),a.ordersDialog.open&&B(),a.notificationsDrawer.classList.contains("open")&&q(),a.myReviewsDialog.open&&re(),G()}Gt(Ra);async function Ta(){tr({onUnauthorized:()=>{ke(),je("login"),v(d("auth.sessionExpired"))},onLoginRequired:A,showToast:v});try{Ea(),dt(t)}catch(e){console.error("Init event binding failed:",e),a.status.textContent=`UI ishga tushishda xatolik yuz berdi: ${e.message}`,v("UI ishga tushishda xatolik yuz berdi.");return}G(),ut().catch(e=>{console.error("Auth startup failed:",e)}),ge().then(()=>ne()).catch(e=>{console.error("Home loading failed:",e),a.status.textContent=t.lastApiError||d("common.serverFailed"),a.dealsStatus.textContent="",T(a.grid,d("common.serverFailed"),d("common.tryAgain")),ne()})}function Na(){Ot(),Bt(),t.baseUrl=te(localStorage.getItem(m.storageKeys.baseUrl)||""),Ft(),Ta()}Na();
