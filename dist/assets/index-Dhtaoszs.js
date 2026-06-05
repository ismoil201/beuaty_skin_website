(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}})();const f={productionApiBaseUrl:"https://cosmetic-server-production.up.railway.app",defaultPageSize:24,searchDebounceMs:300,storageKeys:{accessToken:"zaven_token",legacyAccessToken:"accessToken",user:"zaven_user",legacyUser:"user",role:"role",baseUrl:"zaven_base_url",sessionId:"zaven_session_id",recentProducts:"zaven_recent_products",language:"beauty_skin_language"},placeholderImage:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"};function wt(e,r){try{return JSON.parse(localStorage.getItem(e)||"null")||r}catch{return r}}function Qe(e){const r=e.trim().replace(/\/+$/,"");return r.includes("cosmetic-server-production.up.railway.app")?"":r}function ue(){return localStorage.getItem(f.storageKeys.accessToken)||localStorage.getItem(f.storageKeys.legacyAccessToken)||""}function bt(){let e=localStorage.getItem(f.storageKeys.sessionId);return e||(e=`web-${Date.now()}-${Math.random().toString(36).slice(2,10)}`,localStorage.setItem(f.storageKeys.sessionId,e)),e}function St(){const e=localStorage.getItem(f.storageKeys.legacyAccessToken);!localStorage.getItem(f.storageKeys.accessToken)&&e&&localStorage.setItem(f.storageKeys.accessToken,e);const i=localStorage.getItem(f.storageKeys.legacyUser);!localStorage.getItem(f.storageKeys.user)&&i&&localStorage.setItem(f.storageKeys.user,i)}const a={homeView:null,languageSelect:null,grid:null,dealsGrid:null,homeApiSections:null,recentlyViewedSection:null,recentlyViewedGrid:null,banners:null,announcements:null,categoryToolbar:null,quickCategoryGrid:null,catalogButton:null,catalogDrawer:null,closeCatalog:null,catalogList:null,status:null,dealsStatus:null,productsMode:null,dealsMode:null,title:null,loadMore:null,searchForm:null,searchInput:null,cartButton:null,cartDrawer:null,closeCart:null,cartItems:null,cartCount:null,cartSummary:null,cartTotal:null,authDialog:null,authForm:null,authTitle:null,loginTab:null,registerTab:null,loginFields:null,registerFields:null,authSubmit:null,authMessage:null,loginButton:null,favoritesButton:null,favoritesCount:null,favoritesDialog:null,favoritesSummary:null,favoritesContent:null,refreshFavorites:null,closeFavorites:null,notificationsButton:null,notificationsCount:null,notificationsDrawer:null,notificationsSummary:null,notificationsContent:null,refreshNotifications:null,closeNotifications:null,loginEmail:null,loginPassword:null,registerFullName:null,registerEmail:null,registerPhone:null,registerPassword:null,registerConfirmPassword:null,profileDrawer:null,closeProfile:null,profileContent:null,apiDialog:null,apiForm:null,apiButton:null,baseUrl:null,detailDialog:null,detailContent:null,productDetailPage:null,productDetailPageContent:null,checkoutButton:null,checkoutDialog:null,checkoutForm:null,checkoutHint:null,receiverSelect:null,addressSelect:null,checkoutContent:null,refreshHome:null,ordersButton:null,ordersDialog:null,ordersContent:null,refreshOrders:null,closeOrders:null,myReviewsDialog:null,myReviewsContent:null,myReviewsSummary:null,refreshMyReviews:null,closeMyReviews:null,writeReviewDialog:null,writeReviewForm:null,closeWriteReview:null,writeReviewProduct:null,reviewRatingSelector:null,reviewContent:null,reviewImages:null,reviewImageFiles:null,reviewUploadStatus:null,reviewFormMessage:null,submitReviewButton:null,toast:null},Et={homeView:"homeView",languageSelect:"languageSelect",grid:"productGrid",dealsGrid:"dealsGrid",homeApiSections:"homeApiSections",recentlyViewedSection:"recentlyViewedSection",recentlyViewedGrid:"recentlyViewedGrid",banners:"banners",announcements:"announcements",categoryToolbar:"categoryToolbar",quickCategoryGrid:"quickCategoryGrid",catalogButton:"catalogButton",catalogDrawer:"catalogDrawer",closeCatalog:"closeCatalog",catalogList:"catalogList",status:"productStatus",dealsStatus:"dealsStatus",productsMode:"productsMode",dealsMode:"dealsMode",title:"productsTitle",loadMore:"loadMore",searchForm:"searchForm",searchInput:"searchInput",cartButton:"cartButton",cartDrawer:"cartDrawer",closeCart:"closeCart",cartItems:"cartItems",cartCount:"cartCount",cartSummary:"cartSummary",cartTotal:"cartTotal",authDialog:"authDialog",authForm:"authForm",authTitle:"authTitle",loginTab:"loginTab",registerTab:"registerTab",loginFields:"loginFields",registerFields:"registerFields",authSubmit:"authSubmit",authMessage:"authMessage",loginButton:"loginButton",favoritesButton:"favoritesButton",favoritesCount:"favoritesCount",favoritesDialog:"favoritesDialog",favoritesSummary:"favoritesSummary",favoritesContent:"favoritesContent",refreshFavorites:"refreshFavorites",closeFavorites:"closeFavorites",notificationsButton:"notificationsButton",notificationsCount:"notificationsCount",notificationsDrawer:"notificationsDrawer",notificationsSummary:"notificationsSummary",notificationsContent:"notificationsContent",refreshNotifications:"refreshNotifications",closeNotifications:"closeNotifications",loginEmail:"loginEmail",loginPassword:"loginPassword",registerFullName:"registerFullName",registerEmail:"registerEmail",registerPhone:"registerPhone",registerPassword:"registerPassword",registerConfirmPassword:"registerConfirmPassword",profileDrawer:"profileDrawer",closeProfile:"closeProfile",profileContent:"profileContent",apiDialog:"apiDialog",apiForm:"apiForm",apiButton:"apiButton",baseUrl:"baseUrl",detailDialog:"detailDialog",detailContent:"detailContent",productDetailPage:"productDetailPage",productDetailPageContent:"productDetailPageContent",checkoutButton:"checkoutButton",checkoutDialog:"checkoutDialog",checkoutForm:"checkoutForm",checkoutHint:"checkoutHint",receiverSelect:"receiverSelect",addressSelect:"addressSelect",checkoutContent:"checkoutContent",refreshHome:"refreshHome",ordersButton:"ordersButton",ordersDialog:"ordersDialog",ordersContent:"ordersContent",refreshOrders:"refreshOrders",closeOrders:"closeOrders",myReviewsDialog:"myReviewsDialog",myReviewsContent:"myReviewsContent",myReviewsSummary:"myReviewsSummary",refreshMyReviews:"refreshMyReviews",closeMyReviews:"closeMyReviews",writeReviewDialog:"writeReviewDialog",writeReviewForm:"writeReviewForm",closeWriteReview:"closeWriteReview",writeReviewProduct:"writeReviewProduct",reviewRatingSelector:"reviewRatingSelector",reviewContent:"reviewContent",reviewImages:"reviewImages",reviewImageFiles:"reviewImageFiles",reviewUploadStatus:"reviewUploadStatus",reviewFormMessage:"reviewFormMessage",submitReviewButton:"submitReviewButton",toast:"toast"};function At(){Object.entries(Et).forEach(([e,r])=>{a[e]=document.getElementById(r)})}const We={SKINCARE:"Skincare",MAKEUP:"Makeup",COLLAGEN:"Collagen",HAIR_CARE:"Hair Care",FRAGRANCE:"Fragrance",TOP:"Top",OUTER:"Outer",PANTS:"Pants",SHOES:"Shoes",BAG:"Bag",ACCESSORY:"Accessory"},_e=["uz","en","ru","ko"],V="uz",$t=[{category:"SKINCARE",icon:"S"},{category:"MAKEUP",icon:"M"},{category:"COLLAGEN",icon:"C"},{category:"HAIR_CARE",icon:"H"},{category:"FRAGRANCE",icon:"F"},{category:"BAG",icon:"B"},{category:"SHOES",icon:"S"},{category:"ACCESSORY",icon:"A"}],ae=[{id:"demo-1",name:"Retinol Eye Serum",description:"Ko‘z atrofi parvari uchun yengil serum.",brand:"Melart Glow",price:99e3,discountPrice:8e4,category:"SKINCARE",stock:8,ratingAvg:4.8,reviewCount:12,soldCount:86,todayDeal:!0,favorite:!1,imageUrl:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",variants:[{id:"demo-variant-1",label:"30 ml",price:99e3,discountPrice:8e4,stock:8}]},{id:"demo-2",name:"Lip & Cheek Balm",description:"Lab va yonoq uchun yumshoq rang beruvchi balm.",brand:"Muzigae Mansion",price:15e4,discountPrice:11e4,category:"MAKEUP",stock:4,ratingAvg:5,reviewCount:3,soldCount:21,todayDeal:!0,favorite:!1,imageUrl:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",variants:[{id:"demo-variant-2",label:"Rose",price:15e4,discountPrice:11e4,stock:4}]}],t={baseUrl:Qe(localStorage.getItem(f.storageKeys.baseUrl)||""),accessToken:ue(),user:wt(f.storageKeys.user,null),role:localStorage.getItem(f.storageKeys.role)||"",authMode:"login",authLoading:!1,profileEditing:!1,lastApiError:"",products:[],todayDeals:[],categories:[],cart:[],cartItems:[],cartLoading:!1,cartError:"",cartCount:0,cartTotal:0,cartUpdatingIds:new Set,addingProductIds:new Set,receivers:[],addresses:[],selectedReceiverId:null,selectedAddressId:null,checkoutLoading:!1,orderSubmitting:!1,checkoutError:"",orderSuccess:null,orders:[],ordersLoading:!1,ordersError:"",selectedOrder:null,selectedOrderHistory:[],orderDetailLoading:!1,orderDetailError:"",orderHistoryWarning:"",favoriteProducts:[],favoriteIds:new Set,favoritesLoading:!1,favoritesError:"",favoritesCount:0,productReviewsByProductId:{},productReviewsLoading:{},productReviewsError:{},myReviews:[],myReviewsLoading:!1,myReviewsError:"",reviewSubmitting:!1,reviewDraft:null,reviewRating:5,notifications:[],notificationsLoading:!1,notificationsError:"",unreadCount:0,unreadCountLoading:!1,notificationUpdatingIds:new Set,currentRoute:"home",detailLoading:!1,detailError:"",recommendedProducts:[],recommendedSimilar:[],recommendedOthers:[],recommendationsLoading:!1,recommendationsError:"",selectedCategory:"ALL",selectedDetailProduct:null,selectedVariantId:null,selectedQuantity:1,searchTimer:null,isLoading:!1,demoCategories:!1,demoProducts:!1,demoDeals:!1,homeLoadedFromApi:!1,feedLoading:!1,feedPage:0,currentSearchQuery:"",currentGridScreen:"home",impressionsSent:new Set,impressionObserver:null,sessionId:bt(),banners:[],announcements:[],recentlyViewed:[],uploadingReviewImages:!1};function n(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}const Je={"header.location":"📍 Toshkent","header.extraLinks":"Qo‘shimcha havolalar","header.pickupPoints":"Punktlar","header.sell":"Sotuvchi bo‘lish","header.support":"Savol-javob","header.orders":"Buyurtmalar","header.language":"Til","header.homeAria":"BEAUTY SKIN KOREA bosh sahifa","header.openCatalog":"Katalogni ochish","header.catalog":"Katalog","header.search":"Qidirish","header.searchPlaceholder":"Mahsulot va kategoriyalarni qidirish","header.mainMenu":"Asosiy menyu","header.loginProfile":"Profil yoki kirish","auth.login":"Kirish","auth.register":"Ro‘yxatdan o‘tish","auth.email":"Email","auth.password":"Parol","auth.confirmPassword":"Parolni tasdiqlang","auth.fullName":"To‘liq ism","auth.phone":"Telefon","auth.signIn":"Kirish","auth.createAccount":"Hisob yaratish","auth.logout":"Chiqish","auth.loginRequired":"Davom etish uchun kiring","auth.sessionExpired":"Sessiya tugadi. Qayta kiring.","auth.emailRequired":"Email majburiy.","auth.passwordMin":"Parol kamida 6 ta belgi bo‘lsin.","auth.fullNameRequired":"To‘liq ism majburiy.","auth.phoneRequired":"Telefon majburiy.","auth.passwordMismatch":"Parollar mos emas.","home.all":"Hammasi","home.categories":"Kategoriyalar","home.quickCategories":"Tezkor kategoriyalar","home.todayDeals":"Bugungi takliflar","home.discounts":"Chegirmalar","home.newArrivals":"Yangi mahsulotlar","home.popular":"Ommabop mahsulotlar","home.recommended":"Siz uchun tavsiyalar","home.similar":"O‘xshash mahsulotlar","home.others":"Boshqalar ham ko‘rgan","home.demoMode":"Demo rejim","home.todayOnly":"Faqat bugun","home.startShopping":"Xaridni boshlash","home.showAll":"Barcha mahsulotlar","home.loadMore":"Yana yuklash","home.noProducts":"Mahsulot topilmadi","home.loading":"Yuklanmoqda...","product.addToCart":"Savatga","product.addToCartFull":"Savatga qo‘shish","product.adding":"Qo‘shilmoqda...","product.sold":"{count} dona sotilgan","product.stock":"Omborda: {count}","product.outOfStock":"Omborda yo‘q","product.save":"Saqlash","product.saved":"Saqlangan","product.viewDetails":"Batafsil","product.reviews":"Sharhlar","product.home":"Bosh sahifa","product.description":"Tavsif","product.detailImages":"Batafsil rasmlar","product.details":"Tafsilotlar","product.delivery":"O‘zbekiston bo‘ylab yetkazib berish","product.secure":"Xavfsiz to‘lov","product.original":"Asl koreys mahsulotlari","product.quantity":"Miqdor","product.notFound":"Mahsulot topilmadi","product.backToShopping":"Xaridga qaytish","product.variantUnavailable":"Variant mavjud emas","cart.title":"Savat","cart.empty":"Savatingiz bo‘sh","cart.subtotal":"Jami","cart.checkout":"Rasmiylashtirish","cart.remove":"O‘chirish","cart.quantity":"Miqdor","cart.added":"Savatga qo‘shildi","cart.itemRemoved":"Mahsulot o‘chirildi","cart.unavailable":"Savat mavjud emas","checkout.title":"Rasmiylashtirish","checkout.receiver":"Qabul qiluvchi","checkout.address":"Yetkazib berish manzili","checkout.orderSummary":"Buyurtma xulosasi","checkout.placeOrder":"Buyurtma berish","checkout.orderCreated":"Buyurtma yaratildi","checkout.continueShopping":"Xaridni davom ettirish","checkout.viewOrders":"Buyurtmalarni ko‘rish","orders.title":"Mening buyurtmalarim","orders.order":"Buyurtma","orders.details":"Buyurtma tafsilotlari","orders.history":"Status tarixi","orders.none":"Hali buyurtmalar yo‘q","orders.refresh":"Yangilash","orders.viewDetails":"Batafsil","orders.items":"{count} ta mahsulot","favorites.title":"Saralangan","favorites.empty":"Hali saralangan mahsulotlar yo‘q","favorites.added":"Saralanganlarga qo‘shildi","favorites.removed":"Saralangandan olib tashlandi","profile.myProfile":"Profil","profile.edit":"Profilni tahrirlash","profile.save":"Saqlash","profile.myOrders":"Buyurtmalarim","profile.myReviews":"Sharhlarim","reviews.my":"Mening sharhlarim","reviews.write":"Sharh yozish","reviews.submit":"Sharh yuborish","reviews.rating":"Reyting","reviews.content":"Sharh matni","reviews.none":"Hali sharhlar yo‘q","reviews.noText":"Matnli sharh yo‘q.","reviews.submitted":"Sharh yuborildi","notifications.title":"Bildirishnomalar","notifications.alerts":"Xabarlar","notifications.none":"Hali bildirishnomalar yo‘q","notifications.markRead":"O‘qildi deb belgilash","notifications.read":"O‘qilgan","notifications.unread":"O‘qilmagan","common.tryAgain":"Qayta urinish","common.somethingWrong":"Nimadir xato ketdi","common.serverFailed":"Server bilan aloqa bo‘lmadi","common.saving":"Saqlanmoqda...","common.total":"Jami","common.unknown":"Noma’lum","common.unavailable":"Mavjud emas","status.NEW":"Yangi","status.CONFIRMED":"Tasdiqlangan","status.PACKED":"Qadoqlangan","status.SHIPPED":"Yuborilgan","status.DELIVERED":"Yetkazilgan","status.CANCELED":"Bekor qilingan","notification.ORDER":"Buyurtma","notification.PROMO":"Aksiya","notification.SYSTEM":"Tizim","category.SKINCARE":"Teri parvarishi","category.MAKEUP":"Makiyaj","category.COLLAGEN":"Kollagen","category.HAIR_CARE":"Soch parvarishi","category.FRAGRANCE":"Atirlar","category.TOP":"Ustki kiyim","category.OUTER":"Tashqi kiyim","category.PANTS":"Shimlar","category.SHOES":"Poyabzal","category.BAG":"Sumka","category.ACCESSORY":"Aksessuar"},Ee={...Je,...translations.uz,"header.location":"📍 Tashkent","header.pickupPoints":"Pickup points","header.sell":"Sell on Beauty Skin Korea","header.support":"Support","header.orders":"Orders","header.language":"Language","header.catalog":"Catalog","header.searchPlaceholder":"Search products and categories","header.search":"Search","auth.login":"Login","auth.register":"Register","auth.signIn":"Sign in","auth.createAccount":"Create account","auth.logout":"Logout","auth.loginRequired":"Please login to continue","auth.emailRequired":"Email is required.","auth.passwordMin":"Password must be at least 6 characters.","auth.fullNameRequired":"Full name is required.","auth.phoneRequired":"Phone is required.","auth.passwordMismatch":"Passwords do not match.","home.all":"All","home.categories":"Categories","home.quickCategories":"Quick categories","home.todayDeals":"Today deals","home.discounts":"Discounts","home.newArrivals":"New arrivals","home.popular":"Popular products","home.recommended":"Recommended for you","home.similar":"Similar products","home.others":"Others also viewed","home.demoMode":"Demo mode","home.todayOnly":"Today only","home.startShopping":"Start shopping","home.showAll":"Show all products","home.loadMore":"Load more","home.noProducts":"No products found","home.loading":"Loading...","product.addToCart":"Add to cart","product.addToCartFull":"Add to cart","product.adding":"Adding...","product.sold":"{count} sold","product.stock":"Stock: {count}","product.save":"Save","product.saved":"Saved","product.viewDetails":"View details","product.reviews":"Reviews","product.description":"Description","product.detailImages":"Detail images","product.delivery":"Delivery across Uzbekistan","product.secure":"Secure checkout","product.original":"Original Korean products","product.notFound":"Product not found","product.backToShopping":"Back to shopping","cart.title":"Cart","cart.empty":"Your cart is empty","cart.subtotal":"Subtotal","cart.checkout":"Checkout","cart.added":"Added to cart","orders.title":"My orders","orders.none":"You have no orders yet","favorites.title":"Favorites","favorites.empty":"No favorite products yet","reviews.none":"No reviews yet","notifications.title":"Notifications","notifications.alerts":"Alerts","notifications.none":"No notifications yet","common.tryAgain":"Try again","common.serverFailed":"Server connection failed","common.total":"Total"},Ct={...Ee,...translations.en,"header.location":"📍 Ташкент","header.pickupPoints":"Пункты выдачи","header.sell":"Стать продавцом","header.support":"Поддержка","header.orders":"Заказы","header.language":"Язык","header.catalog":"Каталог","header.searchPlaceholder":"Искать товары и категории","auth.login":"Войти","auth.register":"Регистрация","auth.logout":"Выйти","auth.loginRequired":"Войдите, чтобы продолжить","auth.emailRequired":"Email обязателен.","auth.passwordMin":"Пароль должен быть не менее 6 символов.","auth.fullNameRequired":"Полное имя обязательно.","auth.phoneRequired":"Телефон обязателен.","auth.passwordMismatch":"Пароли не совпадают.","home.all":"Все","home.categories":"Категории","home.quickCategories":"Быстрые категории","home.todayDeals":"Предложения дня","home.discounts":"Скидки","home.newArrivals":"Новинки","home.popular":"Популярные товары","home.recommended":"Рекомендуем вам","home.similar":"Похожие товары","home.others":"Также смотрели","home.startShopping":"Начать покупки","home.loadMore":"Загрузить еще","product.addToCart":"В корзину","product.addToCartFull":"В корзину","product.sold":"Продано: {count}","product.save":"Сохранить","product.saved":"Сохранено","product.description":"Описание","product.detailImages":"Детальные изображения","product.details":"Детали","product.reviews":"Отзывы","product.delivery":"Доставка по Узбекистану","product.secure":"Безопасная оплата","product.original":"Оригинальная корейская косметика","cart.title":"Корзина","cart.empty":"Корзина пуста","cart.checkout":"Оформить","orders.title":"Мои заказы","favorites.title":"Избранное","reviews.none":"Пока нет отзывов","notifications.title":"Уведомления","status.NEW":"Новый","status.CONFIRMED":"Подтвержден","status.PACKED":"Упакован","status.SHIPPED":"Отправлен","status.DELIVERED":"Доставлен","status.CANCELED":"Отменен","category.SKINCARE":"Уход за кожей","category.MAKEUP":"Макияж","category.COLLAGEN":"Коллаген","category.HAIR_CARE":"Уход за волосами","category.FRAGRANCE":"Парфюм","category.TOP":"Верх","category.OUTER":"Верхняя одежда","category.PANTS":"Брюки","category.SHOES":"Обувь","category.BAG":"Сумки","category.ACCESSORY":"Аксессуары"},Pt={...Ee,...translations.en,"header.location":"📍 타슈켄트","header.pickupPoints":"픽업 지점","header.sell":"판매자 되기","header.support":"고객 지원","header.orders":"주문","header.language":"언어","header.catalog":"카탈로그","header.searchPlaceholder":"상품 및 카테고리 검색","auth.login":"로그인","auth.register":"회원가입","auth.logout":"로그아웃","auth.loginRequired":"계속하려면 로그인하세요","auth.emailRequired":"이메일은 필수입니다.","auth.passwordMin":"비밀번호는 6자 이상이어야 합니다.","auth.fullNameRequired":"이름은 필수입니다.","auth.phoneRequired":"전화번호는 필수입니다.","auth.passwordMismatch":"비밀번호가 일치하지 않습니다.","home.all":"전체","home.categories":"카테고리","home.quickCategories":"빠른 카테고리","home.todayDeals":"오늘의 특가","home.discounts":"할인","home.newArrivals":"신상품","home.popular":"인기 상품","home.recommended":"추천 상품","home.similar":"비슷한 상품","home.others":"함께 본 상품","home.startShopping":"쇼핑 시작","home.loadMore":"더 보기","product.addToCart":"장바구니","product.addToCartFull":"장바구니 담기","product.sold":"{count}개 판매","product.save":"저장","product.saved":"저장됨","product.description":"설명","product.detailImages":"상세 이미지","product.details":"상세 정보","product.reviews":"리뷰","product.delivery":"우즈베키스탄 전역 배송","product.secure":"안전한 결제","product.original":"정품 한국 제품","cart.title":"장바구니","cart.empty":"장바구니가 비어 있습니다","cart.checkout":"결제","orders.title":"내 주문","favorites.title":"찜","reviews.none":"아직 리뷰가 없습니다","notifications.title":"알림","status.NEW":"신규","status.CONFIRMED":"확인됨","status.PACKED":"포장됨","status.SHIPPED":"배송 중","status.DELIVERED":"배송 완료","status.CANCELED":"취소됨","category.SKINCARE":"스킨케어","category.MAKEUP":"메이크업","category.COLLAGEN":"콜라겐","category.HAIR_CARE":"헤어 케어","category.FRAGRANCE":"향수","category.TOP":"상의","category.OUTER":"아우터","category.PANTS":"바지","category.SHOES":"신발","category.BAG":"가방","category.ACCESSORY":"액세서리"},j={uz:Je,en:Ee,ru:Ct,ko:Pt};let W=It();function It(){const e=localStorage.getItem(f.storageKeys.language);return _e.includes(e)?e:V}function Ze(){return W}function d(e,r={}){var l;const i=j[W]||j[V],o=j.en||j[V],s=(i==null?void 0:i[e])??(o==null?void 0:o[e])??((l=j[V])==null?void 0:l[e])??e;return String(s).replace(/\{(\w+)\}/g,(c,u)=>r[u]??"")}let Xe=()=>{};function kt(e){Xe=e}function Lt(e){const r=_e.includes(e)?e:V;W=r,localStorage.setItem(f.storageKeys.language,r),Xe()}function et(e){var i;document.documentElement.lang=W,document.title=(e==null?void 0:e.currentRoute)==="product"&&((i=e==null?void 0:e.selectedDetailProduct)!=null&&i.name)?`${e.selectedDetailProduct.name} - BEAUTY SKIN KOREA`:"BEAUTY SKIN KOREA";const r=document.getElementById("languageSelect");r&&(r.value=W),document.querySelectorAll("[data-i18n]").forEach(o=>{o.textContent=d(o.dataset.i18n)}),document.querySelectorAll("[data-i18n-placeholder]").forEach(o=>{o.setAttribute("placeholder",d(o.dataset.i18nPlaceholder))}),document.querySelectorAll("[data-i18n-title]").forEach(o=>{o.setAttribute("title",d(o.dataset.i18nTitle))}),document.querySelectorAll("[data-i18n-aria-label]").forEach(o=>{o.setAttribute("aria-label",d(o.dataset.i18nAriaLabel))})}function w(e){const r=Number(e);return Number.isFinite(r)?r:0}function Ae(e){return e?typeof e=="string"?e:e.imageUrl||e.url||"":""}function ie(e){return Array.isArray(e)?e.map(r=>Ae(r)).filter(Boolean):[]}function p(e){return Array.isArray(e==null?void 0:e.content)?e.content:Array.isArray(e)?e:[]}function y(e={}){const r=Array.isArray(e.variants)?e.variants:[],i=r.find(h=>Number(h.stock||0)>0)||r[0]||null,o=ie(e.images),s=ie(e.detailImages),l=Ae(e.mainImageUrl)||o[0]||e.imageUrl||f.placeholderImage,c=w(e.price??(i==null?void 0:i.price)),u=w((i==null?void 0:i.discountPrice)??e.discountPrice??e.price),m=c>u&&c>0?Math.round((c-u)/c*100):0;return{id:e.id,name:e.name||"Mahsulot",description:e.description||"",brand:e.brand||"",category:e.category||"",image:l,images:o.length?o:[l],detailImages:s,price:w(e.price),originalPrice:c,discountPrice:w(e.discountPrice),finalPrice:u,discountPercent:m,stock:w(e.stock),ratingAvg:w(e.ratingAvg),reviewCount:w(e.reviewCount),soldCount:w(e.soldCount),todayDeal:!!e.todayDeal,favorite:!!e.favorite,variants:r,raw:e}}function Dt(e={}){var l,c,u,m;const r=y(e.product||((l=e.variant)==null?void 0:l.product)||e),i=w(e.quantity)||1,o=w(e.unitPrice||r.finalPrice),s=w(e.lineTotal||o*i);return{id:e.id||e.cartItemId,productId:r.id,product:r,image:r.image,name:r.name,brand:r.brand,variantId:e.variantId||((c=e.variant)==null?void 0:c.id),variantLabel:e.variantLabel||((u=e.variant)==null?void 0:u.label)||"",unitPrice:o,lineTotal:s,quantity:i,stock:w(e.stock??((m=e.variant)==null?void 0:m.stock)??r.stock)}}function Rt(e){return typeof e=="string"?e:(e==null?void 0:e.code)||(e==null?void 0:e.name)||(e==null?void 0:e.title)||""}function Tt(e={}){var o,s;const r=e.product||{},i=Ae(e.mainImageUrl||r.mainImageUrl);return{id:e.id||e.orderItemId,productId:e.productId||r.id||((o=e.product)==null?void 0:o.id),orderId:e.orderId,name:e.productName||e.name||r.name||"Product",image:e.imageUrl||i||r.imageUrl||ie(r.images)[0]||f.placeholderImage,variantLabel:e.variantLabel||((s=e.variant)==null?void 0:s.label)||"",quantity:w(e.quantity)||1,unitPrice:w(e.unitPrice||e.price||r.discountPrice||r.price),lineTotal:w(e.lineTotal||e.total||e.price||0)}}function tt(e={}){var r,i,o,s,l,c;return{id:e.id||e.reviewId||`${e.productId||"product"}-${e.orderId||"order"}-${e.createdAt||""}`,productId:e.productId||((r=e.product)==null?void 0:r.id)||((i=e.orderItem)==null?void 0:i.productId),orderId:e.orderId||((o=e.order)==null?void 0:o.id)||((s=e.orderItem)==null?void 0:s.orderId),rating:Math.min(5,Math.max(0,w(e.rating))),content:e.content||e.reviewContent||e.comment||"",imageUrls:Array.isArray(e.imageUrls)?e.imageUrls.filter(Boolean):ie(e.images),createdAt:e.createdAt||e.createdDate||e.reviewedAt||"",userName:e.userName||e.fullName||((l=e.user)==null?void 0:l.fullName)||((c=e.user)==null?void 0:c.name)||"Customer"}}function Mt(e={}){return{id:e.id||e.notificationId,title:e.title||e.subject||"Notification",message:e.message||e.content||"",type:String(e.type||"SYSTEM").toUpperCase(),read:!!(e.read??e.isRead),createdAt:e.createdAt||e.createdDate||"",refId:e.refId||e.referenceId||e.orderId||null,raw:e}}function Nt(e){var r;return Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray((r=e==null?void 0:e.data)==null?void 0:r.content)?e.data.content:Array.isArray(e==null?void 0:e.content)?e.content:Array.isArray(e)?e:[]}function Ot(e={}){var m,h,M;const r=e.review||e.reviewResponse||(e.rating||e.content?e:null),i=y(e.product||e.productCard||e.productResponse||e),o=r?tt({...r,productId:r.productId||i.id,orderId:r.orderId||e.orderId}):null,s=e.productId||(o==null?void 0:o.productId)||i.id,l=e.orderId||((m=e.order)==null?void 0:m.id)||((h=e.orderResponse)==null?void 0:h.id)||(o==null?void 0:o.orderId),c=e.status||e.orderStatus||((M=e.order)==null?void 0:M.status)||"",u=!!(o!=null&&o.content||o!=null&&o.rating);return{id:e.id||e.orderItemId||(o==null?void 0:o.id)||`${s||"product"}-${l||"order"}`,productId:s,orderId:l,product:i,image:i.image||e.imageUrl||f.placeholderImage,name:e.productName||e.name||(i.name&&i.name!=="Mahsulot"?i.name:`Product #${s||"-"}`),brand:i.brand||e.brand||"",status:c,review:o,hasReview:u,reviewable:!!(s&&l&&!u),raw:e}}function qt(e){var r,i,o,s;return Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray((r=e==null?void 0:e.data)==null?void 0:r.content)?e.data.content:Array.isArray((i=e==null?void 0:e.data)==null?void 0:i.items)?e.data.items:Array.isArray((o=e==null?void 0:e.data)==null?void 0:o.reviews)?e.data.reviews:Array.isArray((s=e==null?void 0:e.data)==null?void 0:s.reviewableItems)?e.data.reviewableItems:Array.isArray(e==null?void 0:e.reviews)?e.reviews:Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e==null?void 0:e.reviewableItems)?e.reviewableItems:Array.isArray(e==null?void 0:e.content)?e.content:Array.isArray(e)?e:[]}function x(e){if(!e)return"";const r=`category.${e}`,i=d(r);return i!==r?i:We[e]||e.toLowerCase().split("_").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(" ")}function rt(e){t.cartItems=e,t.cart=e,t.cartCount=e.reduce((r,i)=>r+i.quantity,0),t.cartTotal=e.reduce((r,i)=>r+i.lineTotal,0)}function we(){rt([]),t.cartLoading=!1,t.cartError="",t.cartUpdatingIds=new Set}function Bt(e){t.favoriteProducts=e.filter(r=>r.id!==void 0&&r.id!==null),t.favoriteIds=new Set(t.favoriteProducts.map(r=>String(r.id))),t.favoritesCount=t.favoriteProducts.length,D()}function be(){t.favoriteProducts=[],t.favoriteIds=new Set,t.favoritesLoading=!1,t.favoritesError="",t.favoritesCount=0,D()}function D(){var e;t.products=t.products.map(r=>({...r,favorite:t.favoriteIds.has(String(r.id))})),t.todayDeals=t.todayDeals.map(r=>({...r,favorite:t.favoriteIds.has(String(r.id))})),((e=t.selectedDetailProduct)==null?void 0:e.id)!==void 0&&(t.selectedDetailProduct={...t.selectedDetailProduct,favorite:t.favoriteIds.has(String(t.selectedDetailProduct.id))})}function Ft(e){try{return JSON.parse(e)}catch{return e}}function Ut(e,r){return typeof e=="string"&&e.trim()?e:(e==null?void 0:e.message)||(e==null?void 0:e.error)||`API xatosi: HTTP ${r}`}let F={onUnauthorized:()=>{},onLoginRequired:()=>{},showToast:()=>{}};function xt(e={}){F={...F,...e}}function Ht(e,r){const i=e.startsWith("/")?e:`/${e}`,o=t.baseUrl?t.baseUrl.replace(/\/+$/,""):"",s=new URL(`${o}${i}`,window.location.origin);return r&&Object.entries(r).forEach(([l,c])=>{c!=null&&c!==""&&s.searchParams.set(l,c)}),s.toString()}async function g(e,r={}){const{query:i,showError:o=!0,requireAuth:s=!1,...l}=r,c=Ht(e,i),u={Accept:"application/json",...l.body?{"Content-Type":"application/json"}:{},...l.headers||{}},m=ue();if(m&&(u.Authorization=`Bearer ${m}`),s&&!m)return t.lastApiError="Please login to continue",F.onLoginRequired(),null;try{t.lastApiError="";const h=await fetch(c,{...l,headers:u}),M=await h.text(),Ge=M?Ft(M):null;if(h.status===401)return t.lastApiError="Session expired. Please login again.",F.onUnauthorized(),null;if(!h.ok){const ze=Ut(Ge,h.status);return t.lastApiError=ze,o&&F.showToast(ze),null}return Ge}catch{return t.lastApiError="Server bilan aloqa bo‘lmadi",o&&F.showToast("Server bilan aloqa vaqtincha ishlamayapti."),null}}function Kt(e){const r=(e==null?void 0:e.token)||(e==null?void 0:e.accessToken)||(e==null?void 0:e.jwt)||"",i={id:e==null?void 0:e.id,email:e==null?void 0:e.email,fullName:e==null?void 0:e.fullName,phone:(e==null?void 0:e.phone)||"",profileImage:(e==null?void 0:e.profileImage)||""};r&&localStorage.setItem(f.storageKeys.accessToken,r),localStorage.setItem(f.storageKeys.user,JSON.stringify(i)),localStorage.setItem(f.storageKeys.role,(e==null?void 0:e.role)||""),t.accessToken=r,t.user=i,t.role=(e==null?void 0:e.role)||""}function $e(){var e,r;localStorage.removeItem(f.storageKeys.accessToken),localStorage.removeItem(f.storageKeys.legacyAccessToken),localStorage.removeItem(f.storageKeys.user),localStorage.removeItem(f.storageKeys.legacyUser),localStorage.removeItem(f.storageKeys.role),t.accessToken="",t.user=null,t.role="",we(),k(),be(),he(),J(),t.myReviews=[],t.myReviewsLoading=!1,t.myReviewsError="",(e=a.myReviewsDialog)!=null&&e.open&&a.myReviewsDialog.close(),(r=a.writeReviewDialog)!=null&&r.open&&a.writeReviewDialog.close(),H()}function b(){return!!ue()}function A(){He("login"),v(d("auth.loginRequired"))}async function at(){if(!ue()){H();return}const e=await g("/api/users/me",{requireAuth:!0,showError:!1});if(!e){$e();return}t.user=e,localStorage.setItem(f.storageKeys.user,JSON.stringify(e)),H(),await z(),await B()}function H(){const e=a.loginButton.querySelector("span");e&&(b()&&t.user?(e.textContent=Ce(t.user.fullName)||d("profile.myProfile"),a.loginButton.setAttribute("aria-label",d("profile.myProfile"))):(e.textContent=d("auth.login"),a.loginButton.setAttribute("aria-label",d("auth.login"))))}function Ce(e=""){return String(e).trim().split(/\s+/)[0]||""}function $(e){const r=Ze(),i={uz:"so‘m",en:"UZS",ru:"сум",ko:"UZS"};return`${new Intl.NumberFormat(r==="uz"?"uz-UZ":r).format(w(e))} ${i[r]||"UZS"}`}function Pe(e){return $(e)}function G(e){if(!e)return"";const r=new Date(e);if(Number.isNaN(r.getTime()))return String(e);const i=Ze();return new Intl.DateTimeFormat(i,{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)}function Ie(e=""){return d(`status.${e}`)||e||d("common.unknown")}function v(e){a.toast.textContent=e,a.toast.classList.add("show"),clearTimeout(v.timer),v.timer=setTimeout(()=>a.toast.classList.remove("show"),2800)}function oe(e,r){e.hidden=!r}function Z(){oe(a.productsMode,t.demoCategories||t.demoProducts),oe(a.dealsMode,t.demoDeals)}function K(e,r=12){e.innerHTML=Array.from({length:r},()=>'<div class="skeleton-card"></div>').join("")}function ke(e,r,i=d("home.showAll")){e.innerHTML=`
    <div class="empty-state">
      <strong>${n(r)}</strong>
      <button class="secondary-button" data-show-all type="button">${n(i)}</button>
    </div>
  `}function Le(e,r={}){g(e,{...r,showError:!1}).catch(()=>{})}function je(e,r,i){if(!e||String(e).startsWith("demo-"))return;const o=`${t.sessionId}:${r}:${e}`;t.impressionsSent.has(o)||(t.impressionsSent.add(o),Le("/events/impression",{method:"POST",body:JSON.stringify({productId:Number(e),screen:r,position:i,queryText:t.currentSearchQuery||null,sessionId:t.sessionId})}))}function Gt(e){!e||String(e).startsWith("demo-")||Le("/events/click",{method:"POST",query:{productId:e}})}function zt(e){!e||String(e).startsWith("demo-")||Le("/events/view",{method:"POST",query:{productId:e}})}function De(e){if(!("IntersectionObserver"in window)){e.querySelectorAll("[data-product]").forEach(r=>{je(r.dataset.product,r.dataset.screen||"home",Number(r.dataset.position||0))});return}t.impressionObserver||(t.impressionObserver=new IntersectionObserver(r=>{r.forEach(i=>{if(!i.isIntersecting)return;const o=i.target;je(o.dataset.product,o.dataset.screen||"home",Number(o.dataset.position||0)),t.impressionObserver.unobserve(o)})},{threshold:.35})),e.querySelectorAll("[data-product]").forEach(r=>t.impressionObserver.observe(r))}function _(e,r={}){const i=t.favoriteIds.has(String(e.id))||!!e.favorite,o=r.screen||t.currentGridScreen||"home",s=r.position??0;return`
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
  `}function E(e,r,i,o={}){if(!r.length){ke(e,i);return}e.innerHTML=r.map((s,l)=>_(s,{...o,position:l})).join(""),De(e)}function Re(e,r="Rating"){const i=Math.min(5,Math.max(0,Math.round(w(e))));return`
    <span class="stars" role="img" aria-label="${n(r)} ${i} out of 5">
      ${Array.from({length:5},(o,s)=>`<span class="${s<i?"filled":""}">★</span>`).join("")}
    </span>
  `}function jt(e){const r=e.length,i=r?e.reduce((o,s)=>o+w(s.rating),0)/r:0;return{count:r,average:i}}async function ge(){t.selectedCategory="ALL",t.currentSearchQuery="",t.currentGridScreen="home",t.feedPage=0,a.title.textContent=d("home.popular"),a.status.textContent=d("home.loading"),K(a.grid,12),K(a.dealsGrid,6),await Promise.all([Wt(),_t(),Zt()]),await Vt()||await Promise.all([Te(),ar()]),await er(),await R()}async function Vt(){const e=await g("/api/home",{query:{limit:10,page:0,size:20},showError:!1});if(e===null)return t.homeLoadedFromApi=!1,a.homeApiSections.hidden=!0,!1;const r=p(e.hits||[]).map(y),i=p(e.discounts||[]).map(y),o=p(e.newArrivals||[]).map(y),s=p(e.popular).map(y);return r.length||i.length||o.length||s.length?(t.homeLoadedFromApi=!0,t.products=s.length?s:[...r,...i,...o].filter(Qt),t.todayDeals=i,D(),Yt({hits:r,discounts:i,newArrivals:o}),E(a.grid,t.products,d("home.noProducts"),{screen:"home"}),E(a.dealsGrid,i.slice(0,8),"Chegirmalar topilmadi.",{screen:"home-discounts"}),a.status.textContent="",a.dealsStatus.textContent="",Z(),!0):(t.homeLoadedFromApi=!1,a.homeApiSections.hidden=!0,!1)}function Yt(e){const i=[["Hits","Best picks",e.hits,"home-hits"],["Discounts","Deals",e.discounts,"home-discounts"],["New Arrivals","Fresh",e.newArrivals,"home-new"]].filter(([,,o])=>o.length).map(([o,s,l,c])=>`
      <section class="home-product-strip">
        <div class="section-head">
          <div><p class="eyebrow">${n(s)}</p><h2>${n(o)}</h2></div>
        </div>
        <div class="product-grid home-strip-grid">
          ${l.slice(0,10).map((u,m)=>_(u,{screen:c,position:m})).join("")}
        </div>
      </section>
    `).join("");a.homeApiSections.hidden=!i,a.homeApiSections.innerHTML=i,De(a.homeApiSections)}function Qt(e,r,i){return(e==null?void 0:e.id)!==void 0&&i.findIndex(o=>String(o.id)===String(e.id))===r}async function Wt(){const e=await g("/api/categories",{showError:!1}),r=p(e).map(Rt).filter(Boolean);r.length?(t.categories=r,t.demoCategories=!1):(t.categories=["SKINCARE","MAKEUP","COLLAGEN","HAIR_CARE","FRAGRANCE"],t.demoCategories=!0),Z(),X()}async function _t(){const e=await g("/api/banners",{showError:!1}),r=p(e).map(i=>({id:i.id,title:i.title||"",subtitle:i.subtitle||"",imageUrl:i.imageUrl||"",linkType:String(i.linkType||"NONE").toUpperCase(),linkId:i.linkId,position:w(i.position)})).sort((i,o)=>i.position-o.position);t.banners=r,Jt()}function Jt(){if(!t.banners.length){a.banners.hidden=!0,a.banners.innerHTML="";return}a.banners.hidden=!1,a.banners.innerHTML=`
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
  `}async function Zt(){const e=await g("/api/announcements",{showError:!1}),r=p(e).map(i=>({title:i.title||"",message:i.content||i.message||"",type:String(i.type||"SYSTEM").toUpperCase(),createdAt:i.createdAt||""})).filter(i=>i.title||i.message);t.announcements=r,Xt()}function Xt(){if(!t.announcements.length){a.announcements.hidden=!0,a.announcements.innerHTML="";return}a.announcements.hidden=!1,a.announcements.innerHTML=t.announcements.slice(0,3).map(e=>`
    <article class="announcement-item ${e.type.toLowerCase()}">
      <strong>${n(e.title||e.type)}</strong>
      <span>${n(e.message)}</span>
    </article>
  `).join("")}async function er(){const e=it();if(!e.length){a.recentlyViewedSection.hidden=!0;return}const r=await g("/api/products/by-ids",{method:"POST",body:JSON.stringify(e.map(Number).filter(Number.isFinite)),showError:!1}),i=p(r).map(y).filter(o=>o.id);if(!i.length){a.recentlyViewedSection.hidden=!0;return}a.recentlyViewedSection.hidden=!1,E(a.recentlyViewedGrid,i,"Recently viewed is empty.",{screen:"recent"})}function it(){try{return JSON.parse(localStorage.getItem(f.storageKeys.recentProducts)||"[]").filter(Boolean)}catch{return[]}}function tr(e){if(!e||String(e).startsWith("demo-"))return;const r=[String(e),...it().filter(i=>String(i)!==String(e))].slice(0,12);localStorage.setItem(f.storageKeys.recentProducts,JSON.stringify(r))}async function Te(){a.status.textContent="Yuklanmoqda...",K(a.grid,12);const e=await g("/api/products",{query:{page:0,size:f.defaultPageSize},showError:!1}),r=p(e).map(y);r.length?(t.products=r,t.demoProducts=!1):(t.products=ae.map(y),t.demoProducts=!0),D(),Z(),E(a.grid,t.products,"Mahsulot topilmadi."),a.status.textContent=""}async function rr(){if(t.feedLoading)return;t.feedLoading=!0,a.loadMore.disabled=!0,a.loadMore.textContent="Yuklanmoqda...";let e=[];const r=await g("/api/home/feed",{query:{limit:30},showError:!1});if(e=p(r).map(y),!e.length){t.feedPage+=1;const s=await g("/api/products",{query:{page:t.feedPage,size:f.defaultPageSize},showError:!1});e=p(s).map(y)}const i=new Set(t.products.map(s=>String(s.id))),o=e.filter(s=>s.id&&!i.has(String(s.id)));t.products=[...t.products,...o],D(),E(a.grid,t.products,"Mahsulot topilmadi.",{screen:t.currentGridScreen||"home"}),t.feedLoading=!1,a.loadMore.disabled=!1,a.loadMore.textContent=o.length?"Yana yuklash":"Boshqa mahsulot topilmadi"}async function ar(){a.dealsStatus.textContent="Yuklanmoqda...",K(a.dealsGrid,5);const e=await g("/api/products/today-deals",{showError:!1}),r=p(e).map(y);r.length?(t.todayDeals=r,t.demoDeals=!1):(t.todayDeals=ae.map(i=>y({...i,todayDeal:!0})),t.demoDeals=!0),D(),Z(),E(a.dealsGrid,t.todayDeals.slice(0,8),d("home.noProducts")),a.dealsStatus.textContent=""}function X(){const e=["ALL",...t.categories].map(r=>`
    <button class="chip ${t.selectedCategory===r?"active":""}" data-category="${n(r)}" type="button">
      ${n(r==="ALL"?d("home.all"):x(r))}
    </button>
  `);a.categoryToolbar.innerHTML=e.join(""),ir(),or()}function ir(){const e=["ALL",...t.categories];a.catalogList.innerHTML=e.map(r=>`
    <button class="catalog-item ${t.selectedCategory===r?"active":""}" data-category="${n(r)}" type="button">
      <span>${n(r==="ALL"?d("home.showAll"):x(r))}</span>
      <span>${r==="ALL"?"→":"›"}</span>
    </button>
  `).join("")}function or(){a.quickCategoryGrid.innerHTML=$t.map(e=>`
    <button class="quick-card" data-category="${n(e.category)}" type="button">
      <span>${n(e.icon)}</span>
      ${n(x(e.category))}
    </button>
  `).join("")}function me(){t.currentRoute="home",a.homeView.hidden=!1,a.productDetailPage.hidden=!0,document.title="BEAUTY SKIN KOREA"}function nr(){t.currentRoute="product",a.homeView.hidden=!0,a.productDetailPage.hidden=!1,window.scrollTo({top:0,behavior:"smooth"})}function Se(){window.location.hash&&window.location.hash!=="#/"&&window.location.hash!=="#"?window.location.hash="#/":me()}async function ne(){const r=(window.location.hash||"#/").match(/^#\/product\/([^/?#]+)/);if(r){nr(),await lr(decodeURIComponent(r[1])),window.scrollTo({top:0,behavior:"smooth"});return}me()}async function sr(e){const r=e.trim();if(t.currentSearchQuery=r,t.currentGridScreen=r?"search":"home",t.currentRoute==="product"&&(window.location.hash="#/",me()),!r){t.selectedCategory="ALL",X(),a.title.textContent=d("home.popular"),await Te();return}a.title.textContent=`"${r}" qidiruvi`,a.status.textContent=d("home.loading"),K(a.grid,10);const i=await g("/api/products/search",{query:{q:r,page:0,size:f.defaultPageSize},showError:!1}),o=p(i).map(y);t.products=o,D(),E(a.grid,t.products,d("home.noProducts"),{screen:"search"}),a.status.textContent=""}async function Me(e){if(t.currentRoute==="product"&&(window.location.hash="#/",me()),t.selectedCategory=e,t.currentGridScreen=e==="ALL"?"home":"category",t.currentSearchQuery="",X(),e==="ALL"){a.title.textContent=d("home.popular"),await Te();return}a.title.textContent=x(e),a.status.textContent=d("home.loading"),K(a.grid,10);const r=await g("/api/products/category",{query:{category:e,page:0,size:f.defaultPageSize},showError:!1}),i=p(r).map(y);t.products=i,D(),E(a.grid,t.products,d("home.noProducts"),{screen:"category"}),a.status.textContent=""}function Ne(e){if(!e)return;const r=`#/product/${encodeURIComponent(e)}`;window.location.hash===r?ne():window.location.hash=r}async function dr(e){Ne(e)}async function lr(e){var o;t.currentRoute="product",t.detailLoading=!0,t.detailError="",t.selectedDetailProduct=null,t.recommendedProducts=[],t.recommendedSimilar=[],t.recommendedOthers=[],t.recommendationsError="",cr(!0);const r=await g(`/api/products/${e}`,{showError:!0}),i=y(r||t.products.find(s=>String(s.id)===String(e))||{});if(t.detailLoading=!1,!i.id){t.detailError=t.lastApiError||"Mahsulot topilmadi.",ur();return}i.favorite=t.favoriteIds.has(String(i.id))||i.favorite,t.selectedDetailProduct=i,t.selectedVariantId=((o=ot(i))==null?void 0:o.id)||null,t.selectedQuantity=1,document.title=`${i.name} - BEAUTY SKIN KOREA`,tr(i.id),zt(i.id),L(i),Oe(i.id),gr(i)}function cr(e=!1){const r=e?a.productDetailPageContent:a.detailContent;r.innerHTML=`
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
  `}function ur(){a.productDetailPageContent.innerHTML=`
    <div class="detail-error-page">
      <strong>${n(d("product.notFound"))}</strong>
      <p>${n(t.detailError||"Mahsulot topilmadi.")}</p>
      <button class="primary-button" data-route-home type="button">${n(d("product.backToShopping"))}</button>
    </div>
  `}function L(e){const r=e.variants.find(h=>String(h.id)===String(t.selectedVariantId))||null,i=[...e.images,...e.detailImages].filter(Boolean),o=(r==null?void 0:r.discountPrice)??(r==null?void 0:r.price)??e.finalPrice,s=(r==null?void 0:r.price)??e.originalPrice,l=(r==null?void 0:r.stock)??e.stock,c=t.favoriteIds.has(String(e.id))||!!e.favorite,u=t.currentRoute==="product",m=u?a.productDetailPageContent:a.detailContent;m.innerHTML=`
    ${u?`
      <div class="breadcrumbs">
        <button data-route-home type="button">${n(d("product.home")||d("home.all"))}</button>
        <span>/</span>
        <button data-category="${n(e.category||"ALL")}" type="button">${n(e.category?x(e.category):d("header.catalog"))}</button>
        <span>/</span>
        <span>${n(dt(e.name,42))}</span>
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
        ${e.variants.length?pr(e):`<p class="hint">${n(d("product.variantUnavailable"))}</p>`}
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
          <section><strong>${n(d("product.details"))}</strong><p class="hint">${n(d("home.categories"))}: ${n(e.category?x(e.category):"-")} · Brand: ${n(e.brand||"-")}</p></section>
          <section><strong>${n(d("product.reviews"))}</strong>${fr(e.id)}</section>
        </div>
      </div>
    </div>
    ${u?mr():""}
    ${u?`
      <div class="mobile-buy-bar">
        <strong>${$(o)}</strong>
        <button class="primary-button" data-detail-add type="button">${n(d("product.addToCart"))}</button>
      </div>
    `:""}
  `,De(m)}async function gr(e){var c;t.recommendationsLoading=!0,t.recommendationsError="",L(e);const r=await g(`/api/products/${e.id}/recommend`,{query:{similar:12,others:24,seed:t.sessionId},showError:!1}),i=p((r==null?void 0:r.similar)||[]).map(y).filter(u=>String(u.id)!==String(e.id)),o=p((r==null?void 0:r.others)||[]).map(y).filter(u=>String(u.id)!==String(e.id));if(i.length||o.length){t.recommendationsLoading=!1,t.recommendedProducts=[],t.recommendedSimilar=i.slice(0,12),t.recommendedOthers=o.slice(0,12),L(t.selectedDetailProduct);return}let s=null;e.category&&(s=await g("/api/products/category",{query:{category:e.category,page:0,size:12},showError:!1}));let l=p(s).map(y).filter(u=>String(u.id)!==String(e.id));l.length||(s=await g("/api/products",{query:{page:0,size:12},showError:!1}),l=p(s).map(y).filter(u=>String(u.id)!==String(e.id))),t.recommendationsLoading=!1,!l.length&&s===null&&(t.recommendationsError=t.lastApiError||"Recommendations could not be loaded."),t.recommendedProducts=l.slice(0,12).map(u=>({...u,favorite:t.favoriteIds.has(String(u.id))||u.favorite})),t.recommendedSimilar=[],t.recommendedOthers=[],((c=t.selectedDetailProduct)==null?void 0:c.id)!==void 0&&String(t.selectedDetailProduct.id)===String(e.id)&&L(t.selectedDetailProduct)}function mr(){if(t.recommendationsLoading)return`
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
          ${i.map((s,l)=>_(s,{screen:o,position:l})).join("")}
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
        ${t.recommendedProducts.map(_).join("")}
      </div>
    </section>
  `:""}async function Oe(e){var o,s;if(!e)return;const r=String(e);t.productReviewsLoading[r]=!0,t.productReviewsError[r]="",((o=t.selectedDetailProduct)==null?void 0:o.id)!==void 0&&String(t.selectedDetailProduct.id)===r&&L(t.selectedDetailProduct);const i=await g(`/api/reviews/product/${e}`,{showError:!1});t.productReviewsLoading[r]=!1,i===null?t.productReviewsError[r]=t.lastApiError||"Reviews could not be loaded.":t.productReviewsByProductId[r]=p(i).map(tt),((s=t.selectedDetailProduct)==null?void 0:s.id)!==void 0&&String(t.selectedDetailProduct.id)===r&&L(t.selectedDetailProduct)}function fr(e){const r=String(e),i=t.productReviewsByProductId[r]||[],o=t.productReviewsLoading[r],s=t.productReviewsError[r];if(o)return'<div class="reviews-loading"><div class="skeleton-card"></div></div>';if(s)return`
      <div class="reviews-inline-error">
        <p>${n(s)}</p>
        <button class="secondary-button" data-reviews-retry="${n(e)}" type="button">Retry</button>
      </div>
    `;if(!i.length)return`<div class="reviews-empty"><strong>${n(d("reviews.none"))}</strong><p class="hint">${n(d("reviews.none"))}</p></div>`;const l=jt(i);return`
    <div class="review-summary">
      <div>
        <strong>${l.average.toFixed(1)}</strong>
        ${Re(l.average,"Average rating")}
      </div>
      <p class="hint">${l.count} ${n(d("product.reviews"))}</p>
    </div>
    <div class="review-list">
      ${i.map(hr).join("")}
    </div>
  `}function hr(e){return`
    <article class="review-card">
      <div class="review-head">
        <div>
          <strong>${n(e.userName)}</strong>
          <p class="hint">${G(e.createdAt)}</p>
        </div>
        ${Re(e.rating)}
      </div>
      <p>${n(e.content||d("reviews.noText"))}</p>
      ${e.imageUrls.length?`<div class="review-images">${e.imageUrls.slice(0,5).map(r=>`<img src="${n(r)}" alt="Review image" loading="lazy" />`).join("")}</div>`:""}
    </article>
  `}function pr(e){return`
    <div class="variant-options">
      ${e.variants.map(r=>{const i=String(r.id)===String(t.selectedVariantId),o=Number(r.stock||0)<=0;return`
          <button class="variant-option ${i?"active":""}" data-variant="${n(r.id)}" ${o?"disabled":""} type="button">
            ${n(r.label||`Variant #${r.id}`)}
            ${r.price?` · ${n($(r.discountPrice??r.price))}`:""}
          </button>
        `}).join("")}
    </div>
  `}function ot(e){return e.variants.find(r=>Number(r.stock||0)>0)||e.variants[0]||null}async function nt(e,r,i){var c;if(!b()){A();return}let o=r;const s=Math.max(1,Number(i||1));if(!o){const u=await g(`/api/products/${e}`,{showError:!0}),m=y(u||{}),h=m.variants.filter(M=>Number(M.stock||0)>0);if(h.length===1)o=h[0].id;else if(m.variants.length>1){Ne(m.id);return}else o=(c=ot(m))==null?void 0:c.id}if(!o){v(d("product.variantUnavailable"));return}t.addingProductIds.add(String(e)),Ve();const l=await g("/api/cart",{method:"POST",body:JSON.stringify({variantId:Number(o),quantity:s}),requireAuth:!0});t.addingProductIds.delete(String(e)),Ve(),l!==null&&(v(d("cart.added")),await R())}function Ve(){document.querySelectorAll("[data-detail-add]").forEach(r=>{var o;const i=t.addingProductIds.has(String((o=t.selectedDetailProduct)==null?void 0:o.id));r.disabled=i,r.textContent=i?d("product.adding"):r.closest(".mobile-buy-bar")?d("product.addToCart"):d("product.addToCartFull")})}async function R(){if(!b()){we(),k();return}t.cartLoading=!0,t.cartError="",k();const e=await g("/api/cart",{requireAuth:!0,showError:!1});if(t.cartLoading=!1,e===null){if(t.lastApiError.includes("Session expired")||t.lastApiError==="Please login to continue"){we();return}t.cartError=t.lastApiError||"Cart could not be loaded.",k();return}rt(p(e).map(Dt)),k()}function k(){if(a.cartCount.textContent=t.cartCount,a.cartSummary.textContent=d("orders.items",{count:t.cartCount}),a.cartTotal.textContent=$(t.cartTotal),t.cartLoading){a.cartItems.innerHTML='<div class="cart-loading"><div class="skeleton-card"></div><div class="skeleton-card"></div></div>',a.checkoutButton.disabled=!0;return}if(t.cartError){a.cartItems.innerHTML=`
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
    `}async function vr(e){t.cartUpdatingIds.add(String(e)),k();const r=await g(`/api/cart/${e}`,{method:"DELETE",requireAuth:!0});t.cartUpdatingIds.delete(String(e)),r!==null?(v(d("cart.itemRemoved")),await R()):k()}async function yr(e,r){const i=Math.max(1,Number(r||1));t.cartUpdatingIds.add(String(e)),k();const o=await g(`/api/cart/${e}`,{method:"PUT",requireAuth:!0,body:JSON.stringify({quantity:i})});t.cartUpdatingIds.delete(String(e)),o!==null?await R():k()}async function st(){if(!b()){A();return}if(await R(),!t.cartItems.length){v("Your cart is empty");return}t.orderSuccess=null,t.checkoutError="",t.checkoutLoading=!0,C(),a.checkoutDialog.showModal(),P(),await Promise.all([qe(),Be()]),t.checkoutLoading=!1,C()}async function wr(e){e.preventDefault(),await vt()}async function qe(e){var i,o;const r=await g("/api/receivers",{requireAuth:!0,showError:!1});if(r===null){t.checkoutError=t.lastApiError||"Receivers could not be loaded.";return}t.receivers=p(r),t.selectedReceiverId=e||t.selectedReceiverId||((i=t.receivers[0])==null?void 0:i.id)||null,t.receivers.some(s=>String(s.id)===String(t.selectedReceiverId))||(t.selectedReceiverId=((o=t.receivers[0])==null?void 0:o.id)||null)}async function Be(e){var i,o;const r=await g("/api/addresses",{requireAuth:!0,showError:!1});if(r===null){t.checkoutError=t.lastApiError||"Addresses could not be loaded.";return}t.addresses=p(r),t.selectedAddressId=e||t.selectedAddressId||((i=t.addresses[0])==null?void 0:i.id)||null,t.addresses.some(s=>String(s.id)===String(t.selectedAddressId))||(t.selectedAddressId=((o=t.addresses[0])==null?void 0:o.id)||null)}function C(){if(t.checkoutLoading){a.checkoutContent.innerHTML=`
      <div class="checkout-layout">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    `;return}if(t.orderSuccess){Cr();return}const e=t.receivers.find(i=>String(i.id)===String(t.selectedReceiverId)),r=t.addresses.find(i=>String(i.id)===String(t.selectedAddressId));a.checkoutContent.innerHTML=`
    <div class="checkout-layout">
      <div class="checkout-steps">
        ${t.checkoutError?`<div class="checkout-error">${n(t.checkoutError)}</div>`:""}
        <section class="checkout-step">
          <div class="step-head"><span>1</span><h3>Receiver</h3></div>
          ${br()}
          ${Sr()}
        </section>
        <section class="checkout-step">
          <div class="step-head"><span>2</span><h3>Delivery Address</h3></div>
          ${Er()}
          ${Ar()}
        </section>
      </div>
      <aside class="order-summary">
        <div class="step-head"><span>3</span><h3>Order Summary</h3></div>
        ${$r(e,r)}
      </aside>
    </div>
  `}function br(){return t.receivers.length?`<div class="selectable-list">${t.receivers.map(e=>`
    <article class="selectable-card ${String(e.id)===String(t.selectedReceiverId)?"selected":""}" data-select-receiver="${n(e.id)}">
      <div>
        <strong>${n(e.fullName||"")}</strong>
        <p class="hint">${n(e.phone||"")}</p>
      </div>
      <button class="icon-button" data-delete-receiver="${n(e.id)}" type="button" aria-label="Delete receiver">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
      </button>
    </article>
  `).join("")}</div>`:'<div class="checkout-empty">No receivers yet. Add one below.</div>'}function Sr(){return`
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
  `}function Er(){return t.addresses.length?`<div class="selectable-list">${t.addresses.map(e=>`
    <article class="selectable-card ${String(e.id)===String(t.selectedAddressId)?"selected":""}" data-select-address="${n(e.id)}">
      <div>
        <strong>${n(e.title||"Address")}</strong>
        <p class="hint">${n(e.address||"")}</p>
      </div>
      <button class="icon-button" data-delete-address="${n(e.id)}" type="button" aria-label="Delete address">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
      </button>
    </article>
  `).join("")}</div>`:'<div class="checkout-empty">No addresses yet. Add one below.</div>'}function Ar(){return`
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
  `}function $r(e,r){const i=e&&r&&t.cartItems.length&&!t.orderSubmitting;return`
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
  `}function Cr(){const e=t.orderSuccess;a.checkoutContent.innerHTML=`
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
  `}async function fe(){if(!b()){A();return}a.ordersDialog.showModal(),P(),await Fe()}async function Fe(){t.ordersLoading=!0,t.ordersError="",t.selectedOrder=null,t.selectedOrderHistory=[],t.orderHistoryWarning="",O();const e=await g("/api/orders",{requireAuth:!0,showError:!1});if(t.ordersLoading=!1,e===null){if(t.lastApiError.includes("Session expired")){a.ordersDialog.close();return}t.ordersError=t.lastApiError||"Orders could not be loaded.",O();return}t.orders=p(e),O()}function O(){if(t.ordersLoading){a.ordersContent.innerHTML=`
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
        ${t.orders.map(Pr).join("")}
      </div>
      <div class="order-detail-panel">
        ${Ir()}
      </div>
    </div>
  `}function Pr(e){var i;const r=Array.isArray(e.items)?e.items:[];return`
    <article class="order-card ${((i=t.selectedOrder)==null?void 0:i.id)===e.id?"selected":""}">
      <div>
        <h3>${n(d("orders.order"))} #${n(e.id)}</h3>
        <p class="hint">${G(e.createdAt)}</p>
        <p class="hint">${n(e.fullName||"")}</p>
        <p class="hint">${n(dt(e.address||"",72))}</p>
      </div>
      <div class="order-card-side">
        <span class="status-badge status-${n(String(e.status||"").toLowerCase())}">${n(Ie(e.status))}</span>
        <strong>${Pe(e.totalAmount)}</strong>
        <span class="hint">${n(d("orders.items",{count:r.length}))}</span>
        <button class="secondary-button" data-order-detail="${n(e.id)}" type="button">${n(d("orders.viewDetails"))}</button>
      </div>
    </article>
  `}function Ir(){if(t.orderDetailLoading)return'<div class="skeleton-card"></div>';if(t.orderDetailError)return`<div class="orders-empty"><strong>Detail unavailable</strong><p>${n(t.orderDetailError)}</p></div>`;if(!t.selectedOrder)return'<div class="orders-empty"><strong>Select an order</strong><p>Choose an order to see details and timeline.</p></div>';const e=t.selectedOrder,r=Array.isArray(e.items)?e.items.map(i=>Tt({...i,orderId:e.id})):[];return`
    <section class="order-detail">
      <div class="order-detail-head">
        <div>
          <h3>${n(d("orders.order"))} #${n(e.id)}</h3>
          <p class="hint">${G(e.createdAt)}</p>
        </div>
        <span class="status-badge status-${n(String(e.status||"").toLowerCase())}">${n(Ie(e.status))}</span>
      </div>
      <div class="summary-box">
        <strong>${n(d("checkout.receiver"))}</strong>
        <p class="hint">${n(e.fullName||"")} ${e.phone?`· ${n(e.phone)}`:""}</p>
      </div>
      <div class="summary-box">
        <strong>${n(d("checkout.address"))}</strong>
        <p class="hint">${n(e.address||"")}</p>
      </div>
      <div class="summary-total"><span>${n(d("common.total"))}</span><strong>${Pe(e.totalAmount)}</strong></div>
      <div class="order-items">
        <h4>Items</h4>
        ${r.length?r.map(i=>kr(i,e)).join(""):'<p class="hint">No items in response.</p>'}
      </div>
      <div class="order-timeline">
        <h4>Status history</h4>
        ${t.orderHistoryWarning?`<p class="checkout-error">${n(t.orderHistoryWarning)}</p>`:""}
        ${Lr(e)}
      </div>
    </section>
  `}function kr(e,r={}){const o=String(r.status||"").toUpperCase()==="DELIVERED"&&e.productId&&r.id;return`
    <article class="order-item">
      <img src="${n(e.image)}" alt="${n(e.name)}" />
      <div>
        <strong>${n(e.name)}</strong>
        <p class="hint">${e.variantLabel?n(e.variantLabel):"Variant"} · x${e.quantity}</p>
        ${o?`
          <button class="secondary-button order-review-button" data-order-write-review="${n(e.productId)}" data-review-order="${n(r.id)}" data-review-name="${n(e.name)}" type="button">Write review</button>
        `:e.productId?'<p class="hint">Available after delivery</p>':""}
      </div>
      <strong>${Pe(e.lineTotal||e.unitPrice*e.quantity)}</strong>
    </article>
  `}function Lr(e){return(t.selectedOrderHistory.length?t.selectedOrderHistory:[{status:e.status,createdAt:e.createdAt,note:"Current order status"}]).map(i=>`
    <div class="timeline-item">
      <span></span>
      <div>
        <strong>${n(Ie(i.status))}</strong>
        <p class="hint">${G(i.createdAt)}</p>
        ${i.note?`<p class="hint">${n(i.note)}</p>`:""}
      </div>
    </div>
  `).join("")}function dt(e,r){const i=String(e||"");return i.length>r?`${i.slice(0,r-1)}…`:i}async function lt(e){t.orderDetailLoading=!0,t.orderDetailError="",t.orderHistoryWarning="",O();const[r,i]=await Promise.all([g(`/api/orders/${e}`,{requireAuth:!0,showError:!1}),g(`/api/orders/${e}/history`,{requireAuth:!0,showError:!1})]);if(t.orderDetailLoading=!1,r===null){t.orderDetailError=t.lastApiError||"Order detail could not be loaded.",O();return}t.selectedOrder=r,t.selectedOrderHistory=i===null?[]:p(i),i===null&&(t.orderHistoryWarning="Status history could not be loaded."),O()}async function ct(){if(!b()){A();return}a.favoritesDialog.showModal(),P(),await z({render:!0})}async function z(e={}){const{render:r=!1}=e;if(!b()){be();return}t.favoritesLoading=!0,t.favoritesError="",r&&Y();const i=await g("/api/favorites",{requireAuth:!0,showError:!1});if(t.favoritesLoading=!1,i===null){if(t.lastApiError.includes("Session expired")||t.lastApiError==="Please login to continue"){be(),a.favoritesDialog.open&&a.favoritesDialog.close();return}t.favoritesError=t.lastApiError||"Favorites could not be loaded.",he(),r&&Y();return}Bt(p(i).map(normalizeFavoriteItem)),t.products.length&&E(a.grid,t.products,"Mahsulot topilmadi."),t.todayDeals.length&&E(a.dealsGrid,t.todayDeals.slice(0,8),"Bugungi takliflar topilmadi."),(r||a.favoritesDialog.open)&&Y()}function he(){a.favoritesCount.textContent=t.favoritesCount,a.favoritesSummary.textContent=`${t.favoritesCount} product${t.favoritesCount===1?"":"s"}`}function Y(){if(he(),t.favoritesLoading){a.favoritesContent.innerHTML=`
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
      ${t.favoriteProducts.map(e=>_({...e,favorite:!0})).join("")}
    </div>
  `}function ut(){a.favoritesDialog.close(),S()}function Dr(e){var o;const r=e.target.closest("[data-favorites-retry]"),i=e.target.closest("[data-favorites-start]");if(r){z({render:!0});return}if(i){ut(),(o=document.getElementById("products"))==null||o.scrollIntoView({behavior:"smooth",block:"start"});return}te(e)}function J(){var e;t.notifications=[],t.notificationsLoading=!1,t.notificationsError="",t.unreadCount=0,t.unreadCountLoading=!1,t.notificationUpdatingIds=new Set,se(),(e=a.notificationsDrawer)!=null&&e.classList.contains("open")&&Q()}async function B(){if(!b()){J();return}t.unreadCountLoading=!0;const e=await g("/api/notifications/unread-count",{requireAuth:!0,showError:!1});if(t.unreadCountLoading=!1,e===null){if(t.lastApiError.includes("Session expired")){J();return}se();return}t.unreadCount=normalizeUnreadCount(e),se()}async function gt(){if(!b()){A();return}a.notificationsDrawer.classList.add("open"),a.notificationsDrawer.setAttribute("aria-hidden","false"),P(),await Promise.all([Ue(),B()])}function Q(){a.notificationsDrawer.classList.remove("open"),a.notificationsDrawer.setAttribute("aria-hidden","true"),S()}async function Ue(){if(!b()){A();return}t.notificationsLoading=!0,t.notificationsError="",q();const e=await g("/api/notifications",{requireAuth:!0,showError:!1});if(t.notificationsLoading=!1,e===null){if(t.lastApiError.includes("Session expired")){J();return}t.notificationsError=t.lastApiError||"Notifications could not be loaded.",q();return}t.notifications=Nt(e).map(Mt).filter(r=>r.id!==void 0),q()}function se(){a.notificationsCount.textContent=t.unreadCount,a.notificationsCount.hidden=t.unreadCount<=0,a.notificationsSummary.textContent=`${t.unreadCount} ${d("notifications.unread")}`}function q(){if(se(),t.notificationsLoading){a.notificationsContent.innerHTML=`
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
      ${t.notifications.map(Rr).join("")}
    </div>
  `}function Rr(e){const r=t.notificationUpdatingIds.has(String(e.id));return`
    <article class="notification-card ${e.read?"read":"unread"} ${r?"loading":""}" data-notification-card="${n(e.id)}">
      <div class="notification-icon type-${n(e.type.toLowerCase())}" aria-hidden="true">${Tr(e.type)}</div>
      <div>
        <div class="notification-head">
          <strong>${n(e.title)}</strong>
          ${e.read?"":`<span class="unread-dot" aria-label="${n(d("notifications.unread"))}"></span>`}
        </div>
        <p>${n(e.message)}</p>
        <div class="notification-meta">
          <span>${n(notificationTypeLabel(e.type))}</span>
          <span>${G(e.createdAt)}</span>
        </div>
      </div>
      <button class="secondary-button notification-read-button" data-notification-read="${n(e.id)}" ${e.read||r?"disabled":""} type="button">
        ${e.read?n(d("notifications.read")):n(d(r?"common.saving":"notifications.markRead"))}
      </button>
    </article>
  `}function Tr(e){return{ORDER:"O",PROMO:"%",SYSTEM:"i"}[e]||"i"}async function mt(e,r={}){const i=t.notifications.find(s=>String(s.id)===String(e));if(!i||i.read)return!0;t.notificationUpdatingIds.add(String(e)),q();const o=await g(`/api/notifications/${e}/read`,{method:"POST",requireAuth:!0,showError:!1});return t.notificationUpdatingIds.delete(String(e)),o===null?t.lastApiError.includes("Session expired")?(J(),!1):(v(t.lastApiError||"Notification could not be updated."),q(),!1):(i.read=!0,t.notifications=t.notifications.map(s=>String(s.id)===String(e)?{...s,read:!0}:s),t.unreadCount=Math.max(0,t.unreadCount-1),q(),await B(),r.silent||v("Marked as read"),!0)}async function Mr(e){const r=t.notifications.find(i=>String(i.id)===String(e));r&&(r.read||await mt(e,{silent:!0}),r.type==="ORDER"&&r.refId&&(Q(),await fe(),await lt(r.refId)))}async function Nr(e){if(!b())return A(),null;const r=String(e||"").trim();return r?g("/api/notifications/token",{method:"POST",requireAuth:!0,body:JSON.stringify({token:r})}):(v("Notification token is empty."),null)}window.saveNotificationToken=Nr;async function Or(){return g("/api/health",{showError:!1})}window.checkServerHealth=Or;function qr(e){const r=e.target.closest("[data-notifications-retry]"),i=e.target.closest("[data-notification-read]"),o=e.target.closest("[data-notification-card]");if(r){Ue(),B();return}if(i){e.stopPropagation(),mt(i.dataset.notificationRead);return}o&&Mr(o.dataset.notificationCard)}async function Br(){if(!b()){A();return}a.myReviewsDialog.showModal(),P(),await pe()}async function pe(){if(!b()){A();return}t.myReviewsLoading=!0,t.myReviewsError="",ee();const e=await g("/api/reviews/my",{requireAuth:!0,showError:!1});if(t.myReviewsLoading=!1,e===null){if(t.lastApiError.includes("Session expired")){xe(),de();return}t.myReviewsError=t.lastApiError||"Reviews could not be loaded.",ee();return}t.myReviews=qt(e).map(Ot),ee()}function ee(){if(a.myReviewsSummary.textContent=t.myReviews.length?`${t.myReviews.length} item${t.myReviews.length===1?"":"s"}`:"Purchased products and written reviews",t.myReviewsLoading){a.myReviewsContent.innerHTML=`
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
      ${t.myReviews.map(Fr).join("")}
    </div>
  `}function Fr(e){const r=e.review;return`
    <article class="my-review-item">
      <img src="${n(e.image)}" alt="${n(e.name)}" />
      <div>
        <strong>${n(e.name)}</strong>
        <p class="hint">${n(e.brand||"BEAUTY SKIN KOREA")} ${e.orderId?`· Order #${n(e.orderId)}`:""}</p>
        ${r!=null&&r.rating||r!=null&&r.content?`
          <div class="written-review">
            ${Re(r.rating)}
            <p>${n(r.content||"No text review.")}</p>
            <p class="hint">${G(r.createdAt)}</p>
          </div>
        `:'<p class="hint">Review not written yet.</p>'}
      </div>
      <div class="review-action-cell">
        ${e.reviewable?`
          <button class="secondary-button" data-write-review="${n(e.productId)}" data-review-order="${n(e.orderId)}" data-review-name="${n(e.name)}" type="button">Write review</button>
        `:r!=null&&r.content||r!=null&&r.rating?'<span class="status-badge status-delivered">Reviewed</span>':'<span class="hint">Not reviewable</span>'}
      </div>
    </article>
  `}function ft(e={}){if(!b()){A();return}const r=e.productId,i=e.orderId;if(!r||!i){v("Product and order are required for review.");return}t.reviewDraft={productId:r,orderId:i,productName:e.productName||"Product"},t.reviewRating=5,a.writeReviewProduct.textContent=`${t.reviewDraft.productName} · Order #${i}`,a.reviewContent.value="",a.reviewImages.value="",a.reviewImageFiles.value="",a.reviewUploadStatus.textContent="",I(""),ht(),a.writeReviewDialog.showModal(),P()}function ht(){a.reviewRatingSelector.innerHTML=Array.from({length:5},(e,r)=>{const i=r+1;return`
      <button class="rating-choice ${i<=t.reviewRating?"active":""}" data-review-rating="${i}" type="button" aria-label="Rating ${i} out of 5">
        ★
      </button>
    `}).join("")}function xe(){a.myReviewsDialog.open&&a.myReviewsDialog.close(),S()}function de(){a.writeReviewDialog.open&&a.writeReviewDialog.close(),S()}function I(e,r=""){a.reviewFormMessage.textContent=e,a.reviewFormMessage.className=`form-message ${r}`.trim()}function Ur(e){return String(e||"").split(/[\n,]+/).map(r=>r.trim()).filter(Boolean).slice(0,5)}function xr(e){const r=new Set(["image/jpeg","image/png","image/webp"]),i=Array.from(e||[]);return i.length>5?{error:"Maximum 5 image files allowed.",files:[]}:i.find(l=>!r.has(l.type))?{error:"Only JPG, PNG and WEBP images are allowed.",files:[]}:i.find(l=>l.size>10*1024*1024)?{error:"Each image must be 10MB or smaller.",files:[]}:{files:i}}async function Hr(e){const r=[];for(let i=0;i<e.length;i+=1){const o=e[i];a.reviewUploadStatus.textContent=`Uploading image ${i+1} of ${e.length}...`;const s=await g("/api/uploads/presign",{method:"POST",requireAuth:!0,showError:!1,body:JSON.stringify({fileName:o.name,contentType:o.type,folder:"reviews",fileSizeBytes:o.size})});if(!(s!=null&&s.uploadUrl)||!(s!=null&&s.publicUrl))throw new Error(t.lastApiError||"Image upload could not be prepared.");const l=await fetch(s.uploadUrl,{method:"PUT",headers:{"Content-Type":o.type},body:o});if(!l.ok)throw new Error(`Image upload failed: HTTP ${l.status}`);r.push(s.publicUrl)}return a.reviewUploadStatus.textContent=r.length?"Images uploaded.":"",r}async function Kr(e){var m;if(e.preventDefault(),t.reviewSubmitting)return;const r=t.reviewDraft||{},i=a.reviewContent.value.trim(),o=Ur(a.reviewImages.value),s=xr(a.reviewImageFiles.files);if(!r.productId||!r.orderId){I("Product and order are required.","error");return}if(t.reviewRating<1||t.reviewRating>5){I("Choose a rating from 1 to 5.","error");return}if(!i){I("Review text is required.","error");return}if(s.error){I(s.error,"error");return}if(String(a.reviewImages.value||"").split(/[\n,]+/).filter(h=>h.trim()).length>5){I("Maximum 5 image URLs allowed.","error");return}if(o.length+s.files.length>5){I("Maximum 5 review images allowed.","error");return}t.reviewSubmitting=!0,t.uploadingReviewImages=!!s.files.length,a.submitReviewButton.disabled=!0,a.submitReviewButton.textContent="Submitting...",I("");let l=[];try{l=s.files.length?await Hr(s.files):[]}catch(h){t.reviewSubmitting=!1,t.uploadingReviewImages=!1,a.submitReviewButton.disabled=!1,a.submitReviewButton.textContent="Submit review",I(h.message||"Image upload failed.","error");return}const c=[...l,...o].slice(0,5),u=await g("/api/reviews",{method:"POST",requireAuth:!0,showError:!1,body:JSON.stringify({productId:Number(r.productId),orderId:Number(r.orderId),rating:Number(t.reviewRating),content:i,imageUrls:c})});if(t.reviewSubmitting=!1,t.uploadingReviewImages=!1,a.submitReviewButton.disabled=!1,a.submitReviewButton.textContent="Submit review",a.reviewUploadStatus.textContent="",u===null){if(t.lastApiError.includes("Session expired")){xe(),de();return}I(t.lastApiError||"Review could not be submitted.","error");return}v("Review submitted"),de(),await pe(),((m=t.selectedDetailProduct)==null?void 0:m.id)!==void 0&&String(t.selectedDetailProduct.id)===String(r.productId)&&await Oe(r.productId)}function Gr(e){const r=e.target.closest("[data-my-reviews-retry]"),i=e.target.closest("[data-write-review]");if(r){pe();return}i&&ft({productId:i.dataset.writeReview,orderId:i.dataset.reviewOrder,productName:i.dataset.reviewName})}function zr(e){const r=e.target.closest("[data-review-rating]");r&&(t.reviewRating=Number(r.dataset.reviewRating),ht())}function He(e="login"){le(e),ve(),a.authDialog.showModal(),P()}function le(e){t.authMode=e;const r=e==="login";a.authTitle.textContent=d(r?"auth.login":"auth.register"),a.loginFields.hidden=!r,a.registerFields.hidden=r,a.authSubmit.textContent=d(r?"auth.signIn":"auth.createAccount"),a.loginTab.classList.toggle("active",r),a.registerTab.classList.toggle("active",!r),a.loginTab.setAttribute("aria-selected",String(r)),a.registerTab.setAttribute("aria-selected",String(!r)),ve()}function ve(){document.querySelectorAll(".field-error").forEach(e=>{e.textContent=""}),a.authMessage.textContent="",a.authMessage.className="form-message"}function N(e,r){const i=document.getElementById(`${e}Error`);i&&(i.textContent=r)}function ce(e){t.authLoading=e,a.authSubmit.disabled=e,a.authSubmit.textContent=e?d("home.loading"):t.authMode==="login"?d("auth.signIn"):d("auth.createAccount")}function pt(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function jr(){ve();let e=!0;const r=a.loginEmail.value.trim(),i=a.loginPassword.value;return(!r||!pt(r))&&(N("loginEmail",d("auth.emailRequired")),e=!1),(!i||i.length<6)&&(N("loginPassword",d("auth.passwordMin")),e=!1),e}function Vr(){ve();let e=!0;const r=a.registerFullName.value.trim(),i=a.registerEmail.value.trim(),o=a.registerPhone.value.trim(),s=a.registerPassword.value,l=a.registerConfirmPassword.value;return r||(N("registerFullName",d("auth.fullNameRequired")),e=!1),(!i||!pt(i))&&(N("registerEmail",d("auth.emailRequired")),e=!1),o||(N("registerPhone",d("auth.phoneRequired")),e=!1),(!s||s.length<6)&&(N("registerPassword",d("auth.passwordMin")),e=!1),s!==l&&(N("registerConfirmPassword",d("auth.passwordMismatch")),e=!1),e}async function Yr(e){e.preventDefault(),!t.authLoading&&(t.authMode==="login"?await Qr():await Wr())}async function Qr(){if(!jr())return;ce(!0);const e=await g("/api/auth/login",{method:"POST",body:JSON.stringify({email:a.loginEmail.value.trim(),password:a.loginPassword.value}),showError:!1});if(ce(!1),!(e!=null&&e.token)){a.authMessage.textContent=t.lastApiError||"Email yoki parol noto‘g‘ri.",a.authMessage.className="form-message error";return}Kt(e),await at(),a.authDialog.close(),v(`Welcome, ${Ce(e.fullName)||"User"}.`),await R(),await z(),await B()}async function Wr(){if(!Vr())return;ce(!0);const e=await g("/api/auth/register",{method:"POST",body:JSON.stringify({fullName:a.registerFullName.value.trim(),email:a.registerEmail.value.trim(),phone:a.registerPhone.value.trim(),password:a.registerPassword.value}),showError:!1});if(ce(!1),e===null){a.authMessage.textContent=t.lastApiError||"Email allaqachon mavjud yoki server javob bermadi.",a.authMessage.className="form-message error";return}a.authMessage.textContent="Registered. Endi login qiling.",a.authMessage.className="form-message success",le("login"),a.loginEmail.value=a.registerEmail.value.trim()}function _r(){if(!b()){A();return}t.profileEditing=!1,Ke(),a.profileDrawer.classList.add("open"),a.profileDrawer.setAttribute("aria-hidden","false"),P()}function T(){a.profileDrawer.classList.remove("open"),a.profileDrawer.setAttribute("aria-hidden","true"),S()}function Ke(){const e=t.user||{},r=e.profileImage?`<img class="profile-avatar" src="${n(e.profileImage)}" alt="${n(e.fullName||"Profile")}" />`:`<div class="profile-avatar">${n(Ce(e.fullName||e.email||"U").charAt(0)||"U")}</div>`;a.profileContent.innerHTML=`
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
      ${t.profileEditing?Jr(e):""}
    </div>
  `}function Jr(e){return`
    <form class="profile-edit" id="profileEditForm">
      <label>Email<input value="${n(e.email||"")}" readonly /></label>
      <label>Full name<input id="profileFullName" value="${n(e.fullName||"")}" required /></label>
      <label>Phone<input id="profilePhone" value="${n(e.phone||"")}" required /></label>
      <label>Profile image URL<input id="profileImage" value="${n(e.profileImage||"")}" /></label>
      <button class="primary-button full" id="profileSaveButton" type="submit">Save profile</button>
      <p class="form-message" id="profileMessage"></p>
    </form>
  `}async function Zr(e){const r=e.target.closest("[data-profile-action]");if(!r)return;const i=r.dataset.profileAction;if(i==="edit"){t.profileEditing=!t.profileEditing,Ke();return}if(i==="logout"){$e(),T(),v("Logged out.");return}if(i==="orders"){await fe();return}if(i==="favorites"){T(),await ct();return}if(i==="reviews"){T(),await Br();return}if(i==="notifications"){T(),await gt();return}if(i==="addresses"||i==="receivers"){T(),await st();return}v("Bu bo‘lim keyingi bosqichga tayyor.")}async function Xr(e){var m;const r=e.target.closest("[data-select-receiver]"),i=e.target.closest("[data-select-address]"),o=e.target.closest("[data-delete-receiver]"),s=e.target.closest("[data-delete-address]"),l=e.target.closest("[data-place-order]"),c=e.target.closest("[data-success-orders]"),u=e.target.closest("[data-success-continue]");if(o){e.stopPropagation(),await ia(o.dataset.deleteReceiver);return}if(s){e.stopPropagation(),await oa(s.dataset.deleteAddress);return}if(r){t.selectedReceiverId=r.dataset.selectReceiver,C();return}if(i){t.selectedAddressId=i.dataset.selectAddress,C();return}if(l){await vt();return}if(c){a.checkoutDialog.close(),await fe();return}u&&(a.checkoutDialog.close(),U(),(m=document.getElementById("products"))==null||m.scrollIntoView({behavior:"smooth",block:"start"}))}function ea(e){var l;const r=e.target.closest("[data-order-detail]"),i=e.target.closest("[data-orders-retry]"),o=e.target.closest("[data-orders-start-shopping]"),s=e.target.closest("[data-order-write-review]");if(s){ft({productId:s.dataset.orderWriteReview,orderId:s.dataset.reviewOrder,productName:s.dataset.reviewName});return}if(r){lt(r.dataset.orderDetail);return}if(i){Fe();return}o&&(a.ordersDialog.close(),(l=document.getElementById("products"))==null||l.scrollIntoView({behavior:"smooth",block:"start"}))}async function ta(e){const r=e.target.closest("[data-add-receiver-form]"),i=e.target.closest("[data-add-address-form]");!r&&!i||(e.preventDefault(),r&&await ra(),i&&await aa())}async function ra(){var l,c,u;const e=(l=document.getElementById("receiverFirstName"))==null?void 0:l.value.trim(),r=(c=document.getElementById("receiverLastName"))==null?void 0:c.value.trim(),i=(u=document.getElementById("receiverPhone"))==null?void 0:u.value.trim(),o=document.getElementById("receiverFormError");if(!e||!r||!i){o&&(o.textContent="First name, last name va phone majburiy.");return}const s=await g("/api/receivers",{method:"POST",requireAuth:!0,body:JSON.stringify({firstName:e,lastName:r,phone:i})});s!==null&&(await qe(s.id),C(),v("Receiver added"))}async function aa(){var c,u,m,h;const e=(c=document.getElementById("addressTitle"))==null?void 0:c.value.trim(),r=(u=document.getElementById("addressText"))==null?void 0:u.value.trim(),i=Number((m=document.getElementById("addressLatitude"))==null?void 0:m.value),o=Number((h=document.getElementById("addressLongitude"))==null?void 0:h.value),s=document.getElementById("addressFormError");if(!e||!r||!Number.isFinite(i)||!Number.isFinite(o)){s&&(s.textContent="Title, address, latitude va longitude majburiy.");return}const l=await g("/api/addresses",{method:"POST",requireAuth:!0,body:JSON.stringify({title:e,address:r,latitude:i,longitude:o})});l!==null&&(await Be(l.id),C(),v("Address added"))}async function ia(e){await g(`/api/receivers/${e}`,{method:"DELETE",requireAuth:!0})!==null&&(String(t.selectedReceiverId)===String(e)&&(t.selectedReceiverId=null),await qe(),C())}async function oa(e){await g(`/api/addresses/${e}`,{method:"DELETE",requireAuth:!0})!==null&&(String(t.selectedAddressId)===String(e)&&(t.selectedAddressId=null),await Be(),C())}async function vt(){if(!t.selectedReceiverId||!t.selectedAddressId||!t.cartItems.length)return;t.orderSubmitting=!0,C();const e=await g("/api/orders",{method:"POST",requireAuth:!0,body:JSON.stringify({receiverId:Number(t.selectedReceiverId),addressId:Number(t.selectedAddressId),cartItemIds:t.cartItems.map(r=>Number(r.id))}),showError:!1});if(t.orderSubmitting=!1,e===null){t.checkoutError=t.lastApiError||"Order could not be created.",C();return}t.orderSuccess=e,await R(),await B(),U(),C(),v("Order created")}async function na(e){var c,u,m;e.preventDefault();const r=t.user||{},i={id:r.id,email:r.email,fullName:(c=document.getElementById("profileFullName"))==null?void 0:c.value.trim(),phone:(u=document.getElementById("profilePhone"))==null?void 0:u.value.trim(),profileImage:(m=document.getElementById("profileImage"))==null?void 0:m.value.trim()},o=document.getElementById("profileMessage");if(!i.fullName||!i.phone){o&&(o.textContent="Full name va phone majburiy.",o.className="form-message error");return}if(await g("/api/users/me",{method:"PUT",requireAuth:!0,body:JSON.stringify(i),showError:!1})===null){o&&(o.textContent=t.lastApiError||"Profile yangilanmadi.",o.className="form-message error");return}const l=await g("/api/users/me",{requireAuth:!0,showError:!1});l&&(t.user=l,localStorage.setItem(f.storageKeys.user,JSON.stringify(l))),t.profileEditing=!1,H(),Ke(),v("Profile updated.")}function sa(){var e;(e=a.languageSelect)==null||e.addEventListener("change",r=>Lt(r.target.value)),a.searchForm.addEventListener("submit",r=>r.preventDefault()),a.searchInput.addEventListener("input",da),a.categoryToolbar.addEventListener("click",ye),a.quickCategoryGrid.addEventListener("click",ye),a.catalogList.addEventListener("click",ye),a.banners.addEventListener("click",la),a.grid.addEventListener("click",te),a.dealsGrid.addEventListener("click",te),a.detailContent.addEventListener("click",Ye),a.productDetailPageContent.addEventListener("click",r=>{Ye(r)||te(r)}),a.cartItems.addEventListener("click",ca),a.catalogButton.addEventListener("click",ga),a.closeCatalog.addEventListener("click",re),a.cartButton.addEventListener("click",ua),a.closeCart.addEventListener("click",U),a.loginButton.addEventListener("click",()=>{b()?_r():He("login")}),a.favoritesButton.addEventListener("click",ct),a.notificationsButton.addEventListener("click",gt),a.apiButton.addEventListener("click",ma),a.loginTab.addEventListener("click",()=>le("login")),a.registerTab.addEventListener("click",()=>le("register")),a.authForm.addEventListener("submit",Yr),a.apiForm.addEventListener("submit",fa),a.checkoutButton.addEventListener("click",st),a.checkoutForm.addEventListener("submit",wr),a.checkoutContent.addEventListener("click",Xr),a.checkoutContent.addEventListener("submit",ta),a.ordersContent.addEventListener("click",ea),a.refreshOrders.addEventListener("click",Fe),a.closeOrders.addEventListener("click",()=>a.ordersDialog.close()),a.favoritesContent.addEventListener("click",Dr),a.refreshFavorites.addEventListener("click",()=>z({render:!0})),a.closeFavorites.addEventListener("click",ut),a.notificationsContent.addEventListener("click",qr),a.refreshNotifications.addEventListener("click",()=>{Ue(),B()}),a.closeNotifications.addEventListener("click",Q),a.myReviewsContent.addEventListener("click",Gr),a.refreshMyReviews.addEventListener("click",pe),a.closeMyReviews.addEventListener("click",xe),a.writeReviewForm.addEventListener("submit",Kr),a.closeWriteReview.addEventListener("click",de),a.reviewRatingSelector.addEventListener("click",zr),a.closeProfile.addEventListener("click",T),a.profileContent.addEventListener("click",Zr),a.profileContent.addEventListener("submit",na),a.ordersButton.addEventListener("click",fe),a.refreshHome.addEventListener("click",ge),a.loadMore.addEventListener("click",rr),window.addEventListener("hashchange",ne),a.catalogDrawer.addEventListener("click",r=>{r.target===a.catalogDrawer&&re()}),a.cartDrawer.addEventListener("click",r=>{r.target===a.cartDrawer&&U()}),a.profileDrawer.addEventListener("click",r=>{r.target===a.profileDrawer&&T()}),a.notificationsDrawer.addEventListener("click",r=>{r.target===a.notificationsDrawer&&Q()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&(re(),U(),T(),Q(),a.ordersDialog.open&&a.ordersDialog.close(),a.favoritesDialog.open&&a.favoritesDialog.close(),a.myReviewsDialog.open&&a.myReviewsDialog.close(),a.writeReviewDialog.open&&a.writeReviewDialog.close())}),a.detailDialog.addEventListener("close",S),a.authDialog.addEventListener("close",S),a.apiDialog.addEventListener("close",S),a.checkoutDialog.addEventListener("close",S),a.ordersDialog.addEventListener("close",S),a.favoritesDialog.addEventListener("close",S),a.myReviewsDialog.addEventListener("close",S),a.writeReviewDialog.addEventListener("close",S),document.querySelectorAll("[data-close-dialog]").forEach(r=>{r.addEventListener("click",()=>{var i;return(i=r.closest("dialog"))==null?void 0:i.close()})})}function da(e){clearTimeout(t.searchTimer),t.searchTimer=setTimeout(()=>{sr(e.target.value).catch(()=>{ke(a.grid,"Qidiruv vaqtida xatolik yuz berdi."),a.status.textContent=""})},f.searchDebounceMs)}function ye(e){const r=e.target.closest("[data-category]");r&&(re(),Me(r.dataset.category).catch(()=>{ke(a.grid,"Kategoriya mahsulotlari yuklanmadi."),a.status.textContent=""}),window.setTimeout(()=>{var i;(i=document.getElementById("products"))==null||i.scrollIntoView({behavior:"smooth",block:"start"})},0))}function te(e){const r=e.target.closest("[data-show-all]"),i=e.target.closest("[data-favorite]"),o=e.target.closest("[data-add]"),s=e.target.closest("[data-detail]"),l=e.target.closest("[data-product]");if(r){e.stopPropagation(),ge();return}if(i){e.stopPropagation(),yt(i.dataset.favorite);return}if(o){e.stopPropagation(),nt(o.dataset.add,null,1);return}if(s||l&&!e.target.closest("button")){e.stopPropagation();const c=(s||l).dataset.detail||l.dataset.product;Gt(c),dr(c)}}function la(e){const r=e.target.closest("[data-banner-nav]");if(r){const l=a.banners.querySelector(".banner-track"),c=(l==null?void 0:l.clientWidth)||0;l==null||l.scrollBy({left:r.dataset.bannerNav==="next"?c:-c,behavior:"smooth"});return}const i=e.target.closest("[data-banner-link-type]");if(!i)return;const o=i.dataset.bannerLinkType,s=i.dataset.bannerLinkId;if(o==="PRODUCT"&&s){Ne(s);return}if(o==="CATEGORY"&&s){const l=t.categories.find(c=>String(c)===String(s))||(We[s]?s:"");l?(Se(),Me(l)):v("Category banner is not available yet.")}}function Ye(e){const r=e.target.closest("[data-route-home]"),i=e.target.closest(".product-detail-page [data-category]"),o=e.target.closest("[data-close-detail]"),s=e.target.closest("[data-variant]"),l=e.target.closest("[data-qty]"),c=e.target.closest("[data-detail-add]"),u=e.target.closest("[data-detail-favorite]"),m=e.target.closest("[data-reviews-retry]");if(r)return e.stopPropagation(),Se(),!0;if(i)return e.stopPropagation(),Se(),Me(i.dataset.category),!0;if(o)return e.stopPropagation(),a.detailDialog.close(),S(),!0;if(s)return e.stopPropagation(),t.selectedVariantId=s.dataset.variant,L(t.selectedDetailProduct),!0;if(l)return e.stopPropagation(),t.selectedQuantity=Math.max(1,t.selectedQuantity+(l.dataset.qty==="plus"?1:-1)),L(t.selectedDetailProduct),!0;if(u)return e.stopPropagation(),yt(u.dataset.detailFavorite),!0;if(m)return e.stopPropagation(),Oe(m.dataset.reviewsRetry),!0;if(c){e.stopPropagation();const h=document.getElementById("quantityInput");return t.selectedQuantity=Math.max(1,Number((h==null?void 0:h.value)||t.selectedQuantity)),nt(t.selectedDetailProduct.id,t.selectedVariantId,t.selectedQuantity),!0}return!1}function ca(e){var l;const r=e.target.closest("[data-cart-retry]"),i=e.target.closest("[data-start-shopping]"),o=e.target.closest("[data-cart-qty]"),s=e.target.closest("[data-remove]");if(r&&R(),i&&(U(),(l=document.getElementById("products"))==null||l.scrollIntoView({behavior:"smooth",block:"start"})),o){const c=t.cartItems.find(u=>String(u.id)===String(o.dataset.cartId));c&&yr(c.id,c.quantity+(o.dataset.cartQty==="plus"?1:-1))}s&&vr(s.dataset.remove)}function ua(){if(!b()){A();return}a.cartDrawer.classList.add("open"),a.cartDrawer.setAttribute("aria-hidden","false"),P(),R()}function U(){a.cartDrawer.classList.remove("open"),a.cartDrawer.setAttribute("aria-hidden","true"),S()}function ga(){a.catalogDrawer.classList.add("open"),a.catalogDrawer.setAttribute("aria-hidden","false"),a.catalogButton.setAttribute("aria-expanded","true"),P()}function re(){a.catalogDrawer.classList.remove("open"),a.catalogDrawer.setAttribute("aria-hidden","true"),a.catalogButton.setAttribute("aria-expanded","false"),S()}function P(){document.body.classList.add("locked")}function S(){const e=a.cartDrawer.classList.contains("open")||a.catalogDrawer.classList.contains("open")||a.profileDrawer.classList.contains("open")||a.notificationsDrawer.classList.contains("open"),r=[a.detailDialog,a.authDialog,a.apiDialog,a.checkoutDialog,a.ordersDialog,a.favoritesDialog,a.myReviewsDialog,a.writeReviewDialog].some(i=>i.open);!e&&!r&&document.body.classList.remove("locked")}function ma(){a.baseUrl.value=t.baseUrl,a.apiDialog.showModal(),P()}function fa(e){e.preventDefault(),t.baseUrl=Qe(a.baseUrl.value||""),localStorage.setItem(f.storageKeys.baseUrl,t.baseUrl),a.apiDialog.close(),ge()}async function yt(e){var l;if(!b()){A();return}const r=t.favoriteIds.has(String(e)),i=await g(`/api/favorites/${e}/toggle`,{method:"POST",requireAuth:!0});if(i===null)return;const o=typeof i=="object"&&"favorite"in i?!!i.favorite:!r,s=ha(e);if(o){const c=s?{...s,favorite:!0}:null;c&&!t.favoriteProducts.some(u=>String(u.id)===String(e))&&(t.favoriteProducts=[c,...t.favoriteProducts])}else t.favoriteProducts=t.favoriteProducts.filter(c=>String(c.id)!==String(e));t.favoriteIds=new Set(t.favoriteProducts.map(c=>String(c.id))),t.favoritesCount=t.favoriteProducts.length,D(),he(),t.products.length&&E(a.grid,t.products,"Mahsulot topilmadi."),t.todayDeals.length&&E(a.dealsGrid,t.todayDeals.slice(0,8),"Bugungi takliflar topilmadi."),((l=t.selectedDetailProduct)==null?void 0:l.id)!==void 0&&String(t.selectedDetailProduct.id)===String(e)&&L(t.selectedDetailProduct),a.favoritesDialog.open&&Y(),v(o?"Added to favorites":"Removed from favorites"),o&&!s&&await z({render:a.favoritesDialog.open})}function ha(e){return[...t.products,...t.todayDeals,...t.favoriteProducts,t.selectedDetailProduct].filter(Boolean).find(r=>String(r.id)===String(e))}function pa(){et(t),X(),Z(),t.currentRoute==="product"&&t.selectedDetailProduct?L(t.selectedDetailProduct):(E(a.grid,t.products,d("home.noProducts"),{screen:t.currentGridScreen}),E(a.dealsGrid,t.todayDeals.slice(0,8),d("home.noProducts"))),a.cartDrawer.classList.contains("open")&&k(),a.favoritesDialog.open&&Y(),a.ordersDialog.open&&O(),a.notificationsDrawer.classList.contains("open")&&q(),a.myReviewsDialog.open&&ee(),H()}kt(pa);async function va(){xt({onUnauthorized:()=>{$e(),He("login"),v(d("auth.sessionExpired"))},onLoginRequired:A,showToast:v});try{sa(),et(t)}catch(e){console.error("Init event binding failed:",e),a.status.textContent=`UI ishga tushishda xatolik yuz berdi: ${e.message}`,v("UI ishga tushishda xatolik yuz berdi.");return}H(),await at(),ge().then(()=>ne()).catch(e=>{console.error("Home loading failed:",e),t.products=ae.map(y),t.todayDeals=ae.map(y),X(),E(a.grid,t.products,"Mahsulot topilmadi."),E(a.dealsGrid,t.todayDeals,"Bugungi takliflar topilmadi."),oe(a.productsMode,!0),oe(a.dealsMode,!0),a.status.textContent="",a.dealsStatus.textContent="",ne()})}function ya(){St(),At(),va()}ya();
