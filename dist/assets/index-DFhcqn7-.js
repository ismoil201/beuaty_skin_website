(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();const v={productionApiBaseUrl:"https://cosmetic-server-production.up.railway.app",defaultPageSize:24,searchDebounceMs:300,storageKeys:{accessToken:"zaven_token",legacyAccessToken:"accessToken",user:"zaven_user",legacyUser:"user",role:"role",baseUrl:"zaven_base_url",sessionId:"zaven_session_id",recentProducts:"zaven_recent_products",language:"beauty_skin_language"},placeholderImage:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"};function Fi(t){const e=String(t||"").trim().replace(/\/+$/,"").toLowerCase();return e?e.includes("localhost")||e.includes("127.0.0.1")||e.includes("0.0.0.0")||e.startsWith("file:"):!1}function St(t){const e=String(t||"").trim().replace(/\/+$/,"");return!e||e.includes("cosmetic-server-production.up.railway.app")||Fi(e)?"":e}function xi(t,e){try{return JSON.parse(localStorage.getItem(t)||"null")||e}catch{return e}}function Et(){return localStorage.getItem(v.storageKeys.accessToken)||localStorage.getItem(v.storageKeys.legacyAccessToken)||""}function qi(){let t=localStorage.getItem(v.storageKeys.sessionId);return t||(t=`web-${Date.now()}-${Math.random().toString(36).slice(2,10)}`,localStorage.setItem(v.storageKeys.sessionId,t)),t}function Hi(){const t=localStorage.getItem(v.storageKeys.legacyAccessToken);!localStorage.getItem(v.storageKeys.accessToken)&&t&&localStorage.setItem(v.storageKeys.accessToken,t);const r=localStorage.getItem(v.storageKeys.legacyUser);!localStorage.getItem(v.storageKeys.user)&&r&&localStorage.setItem(v.storageKeys.user,r)}function Vi(){const t=localStorage.getItem(v.storageKeys.baseUrl)||"",e=St(t);e!==t.trim().replace(/\/+$/,"")&&(e?localStorage.setItem(v.storageKeys.baseUrl,e):localStorage.removeItem(v.storageKeys.baseUrl))}const a={homeView:null,languageSelect:null,grid:null,dealsGrid:null,homeApiSections:null,recentlyViewedSection:null,recentlyViewedGrid:null,banners:null,announcements:null,categoryToolbar:null,quickCategoryGrid:null,catalogButton:null,catalogDrawer:null,closeCatalog:null,catalogList:null,status:null,dealsStatus:null,productsMode:null,dealsMode:null,title:null,loadMore:null,searchForm:null,searchInput:null,cartButton:null,cartDrawer:null,closeCart:null,cartItems:null,cartCount:null,cartSummary:null,cartTotal:null,authDialog:null,authForm:null,authTitle:null,loginTab:null,registerTab:null,loginFields:null,registerFields:null,authSubmit:null,authMessage:null,googleLoginButton:null,loginButton:null,favoritesButton:null,favoritesCount:null,favoritesDialog:null,favoritesSummary:null,favoritesContent:null,refreshFavorites:null,closeFavorites:null,notificationsButton:null,notificationsCount:null,notificationsDrawer:null,notificationsSummary:null,notificationsContent:null,refreshNotifications:null,closeNotifications:null,loginEmail:null,loginPassword:null,registerFullName:null,registerEmail:null,registerPhone:null,registerPassword:null,registerConfirmPassword:null,profileDrawer:null,closeProfile:null,profileContent:null,apiDialog:null,apiForm:null,apiButton:null,baseUrl:null,detailDialog:null,detailContent:null,productDetailPage:null,productDetailPageContent:null,checkoutButton:null,checkoutDialog:null,checkoutForm:null,checkoutHint:null,receiverSelect:null,addressSelect:null,checkoutContent:null,refreshHome:null,ordersButton:null,ordersDialog:null,ordersContent:null,refreshOrders:null,closeOrders:null,myReviewsDialog:null,myReviewsContent:null,myReviewsSummary:null,refreshMyReviews:null,closeMyReviews:null,writeReviewDialog:null,writeReviewForm:null,closeWriteReview:null,writeReviewProduct:null,reviewRatingSelector:null,reviewContent:null,reviewImages:null,reviewImageFiles:null,reviewUploadStatus:null,reviewFormMessage:null,submitReviewButton:null,toast:null},zi={homeView:"homeView",languageSelect:"languageSelect",grid:"productGrid",dealsGrid:"dealsGrid",homeApiSections:"homeApiSections",recentlyViewedSection:"recentlyViewedSection",recentlyViewedGrid:"recentlyViewedGrid",banners:"banners",announcements:"announcements",categoryToolbar:"categoryToolbar",quickCategoryGrid:"quickCategoryGrid",catalogButton:"catalogButton",catalogDrawer:"catalogDrawer",closeCatalog:"closeCatalog",catalogList:"catalogList",status:"productStatus",dealsStatus:"dealsStatus",productsMode:"productsMode",dealsMode:"dealsMode",title:"productsTitle",loadMore:"loadMore",searchForm:"searchForm",searchInput:"searchInput",cartButton:"cartButton",cartDrawer:"cartDrawer",closeCart:"closeCart",cartItems:"cartItems",cartCount:"cartCount",cartSummary:"cartSummary",cartTotal:"cartTotal",authDialog:"authDialog",authForm:"authForm",authTitle:"authTitle",loginTab:"loginTab",registerTab:"registerTab",loginFields:"loginFields",registerFields:"registerFields",authSubmit:"authSubmit",authMessage:"authMessage",googleLoginButton:"googleLoginButton",loginButton:"loginButton",favoritesButton:"favoritesButton",favoritesCount:"favoritesCount",favoritesDialog:"favoritesDialog",favoritesSummary:"favoritesSummary",favoritesContent:"favoritesContent",refreshFavorites:"refreshFavorites",closeFavorites:"closeFavorites",notificationsButton:"notificationsButton",notificationsCount:"notificationsCount",notificationsDrawer:"notificationsDrawer",notificationsSummary:"notificationsSummary",notificationsContent:"notificationsContent",refreshNotifications:"refreshNotifications",closeNotifications:"closeNotifications",loginEmail:"loginEmail",loginPassword:"loginPassword",registerFullName:"registerFullName",registerEmail:"registerEmail",registerPhone:"registerPhone",registerPassword:"registerPassword",registerConfirmPassword:"registerConfirmPassword",profileDrawer:"profileDrawer",closeProfile:"closeProfile",profileContent:"profileContent",apiDialog:"apiDialog",apiForm:"apiForm",apiButton:"apiButton",baseUrl:"baseUrl",detailDialog:"detailDialog",detailContent:"detailContent",productDetailPage:"productDetailPage",productDetailPageContent:"productDetailPageContent",checkoutButton:"checkoutButton",checkoutDialog:"checkoutDialog",checkoutForm:"checkoutForm",checkoutHint:"checkoutHint",receiverSelect:"receiverSelect",addressSelect:"addressSelect",checkoutContent:"checkoutContent",refreshHome:"refreshHome",ordersButton:"ordersButton",ordersDialog:"ordersDialog",ordersContent:"ordersContent",refreshOrders:"refreshOrders",closeOrders:"closeOrders",myReviewsDialog:"myReviewsDialog",myReviewsContent:"myReviewsContent",myReviewsSummary:"myReviewsSummary",refreshMyReviews:"refreshMyReviews",closeMyReviews:"closeMyReviews",writeReviewDialog:"writeReviewDialog",writeReviewForm:"writeReviewForm",closeWriteReview:"closeWriteReview",writeReviewProduct:"writeReviewProduct",reviewRatingSelector:"reviewRatingSelector",reviewContent:"reviewContent",reviewImages:"reviewImages",reviewImageFiles:"reviewImageFiles",reviewUploadStatus:"reviewUploadStatus",reviewFormMessage:"reviewFormMessage",submitReviewButton:"submitReviewButton",toast:"toast"};function Wi(){Object.entries(zi).forEach(([t,e])=>{a[t]=document.getElementById(e)})}const wn={SKINCARE:"Skincare",MAKEUP:"Makeup",COLLAGEN:"Collagen",HAIR_CARE:"Hair Care",FRAGRANCE:"Fragrance",TOP:"Top",OUTER:"Outer",PANTS:"Pants",SHOES:"Shoes",BAG:"Bag",ACCESSORY:"Accessory"},bn=["uz","en","ru","ko"],Oe="uz",Gi=[{category:"SKINCARE",icon:"S"},{category:"MAKEUP",icon:"M"},{category:"COLLAGEN",icon:"C"},{category:"HAIR_CARE",icon:"H"},{category:"FRAGRANCE",icon:"F"},{category:"BAG",icon:"B"},{category:"SHOES",icon:"S"},{category:"ACCESSORY",icon:"A"}],s={baseUrl:St(localStorage.getItem(v.storageKeys.baseUrl)||""),accessToken:Et(),user:xi(v.storageKeys.user,null),role:localStorage.getItem(v.storageKeys.role)||"",authMode:"login",authLoading:!1,profileEditing:!1,lastApiError:"",products:[],todayDeals:[],categories:[],cart:[],cartItems:[],cartLoading:!1,cartError:"",cartCount:0,cartTotal:0,cartUpdatingIds:new Set,addingProductIds:new Set,receivers:[],addresses:[],selectedReceiverId:null,selectedAddressId:null,checkoutLoading:!1,orderSubmitting:!1,checkoutError:"",orderSuccess:null,orders:[],ordersLoading:!1,ordersError:"",selectedOrder:null,selectedOrderHistory:[],orderDetailLoading:!1,orderDetailError:"",orderHistoryWarning:"",favoriteProducts:[],favoriteIds:new Set,favoritesLoading:!1,favoritesError:"",favoritesCount:0,productReviewsByProductId:{},productReviewsLoading:{},productReviewsError:{},myReviews:[],myReviewsLoading:!1,myReviewsError:"",reviewSubmitting:!1,reviewDraft:null,reviewRating:5,notifications:[],notificationsLoading:!1,notificationsError:"",unreadCount:0,unreadCountLoading:!1,notificationUpdatingIds:new Set,currentRoute:"home",detailLoading:!1,detailError:"",recommendedProducts:[],recommendedSimilar:[],recommendedOthers:[],recommendationsLoading:!1,recommendationsError:"",selectedCategory:"ALL",selectedDetailProduct:null,selectedVariantId:null,selectedQuantity:1,searchTimer:null,isLoading:!1,demoCategories:!1,demoProducts:!1,demoDeals:!1,homeLoadedFromApi:!1,feedLoading:!1,feedPage:0,currentSearchQuery:"",currentGridScreen:"home",impressionsSent:new Set,impressionObserver:null,sessionId:qi(),banners:[],announcements:[],recentlyViewed:[],uploadingReviewImages:!1};function l(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}const In={"header.location":"📍 Toshkent","header.extraLinks":"Qo‘shimcha havolalar","header.pickupPoints":"Punktlar","header.sell":"Sotuvchi bo‘lish","header.support":"Savol-javob","header.orders":"Buyurtmalar","header.language":"Til","header.homeAria":"BEAUTY SKIN KOREA bosh sahifa","header.openCatalog":"Katalogni ochish","header.catalog":"Katalog","header.search":"Qidirish","header.searchPlaceholder":"Mahsulot va kategoriyalarni qidirish","header.mainMenu":"Asosiy menyu","header.loginProfile":"Profil yoki kirish","auth.login":"Kirish","auth.register":"Ro‘yxatdan o‘tish","auth.email":"Email","auth.password":"Parol","auth.confirmPassword":"Parolni tasdiqlang","auth.fullName":"To‘liq ism","auth.phone":"Telefon","auth.signIn":"Kirish","auth.createAccount":"Hisob yaratish","auth.continueWithGoogle":"Google bilan kirish","auth.or":"yoki","auth.logout":"Chiqish","auth.loginRequired":"Davom etish uchun kiring","auth.sessionExpired":"Sessiya tugadi. Qayta kiring.","auth.emailRequired":"Email majburiy.","auth.passwordMin":"Parol kamida 6 ta belgi bo‘lsin.","auth.fullNameRequired":"To‘liq ism majburiy.","auth.phoneRequired":"Telefon majburiy.","auth.passwordMismatch":"Parollar mos emas.","home.all":"Hammasi","home.categories":"Kategoriyalar","home.quickCategories":"Tezkor kategoriyalar","home.todayDeals":"Bugungi takliflar","home.discounts":"Chegirmalar","home.newArrivals":"Yangi mahsulotlar","home.popular":"Ommabop mahsulotlar","home.recommended":"Siz uchun tavsiyalar","home.similar":"O‘xshash mahsulotlar","home.others":"Boshqalar ham ko‘rgan","home.demoMode":"Demo rejim","home.todayOnly":"Faqat bugun","home.startShopping":"Xaridni boshlash","home.showAll":"Barcha mahsulotlar","home.loadMore":"Yana yuklash","home.noProducts":"Mahsulot topilmadi","home.loading":"Yuklanmoqda...","product.addToCart":"Savatga","product.addToCartFull":"Savatga qo‘shish","product.adding":"Qo‘shilmoqda...","product.sold":"{count} dona sotilgan","product.stock":"Omborda: {count}","product.outOfStock":"Omborda yo‘q","product.save":"Saqlash","product.saved":"Saqlangan","product.viewDetails":"Batafsil","product.reviews":"Sharhlar","product.home":"Bosh sahifa","product.description":"Tavsif","product.detailImages":"Batafsil rasmlar","product.details":"Tafsilotlar","product.delivery":"O‘zbekiston bo‘ylab yetkazib berish","product.secure":"Xavfsiz to‘lov","product.original":"Asl koreys mahsulotlari","product.quantity":"Miqdor","product.notFound":"Mahsulot topilmadi","product.backToShopping":"Xaridga qaytish","product.variantUnavailable":"Variant mavjud emas","cart.title":"Savat","cart.empty":"Savatingiz bo‘sh","cart.subtotal":"Jami","cart.checkout":"Rasmiylashtirish","cart.remove":"O‘chirish","cart.quantity":"Miqdor","cart.added":"Savatga qo‘shildi","cart.itemRemoved":"Mahsulot o‘chirildi","cart.quantityUpdated":"Miqdor yangilandi","cart.unavailable":"Savat mavjud emas","checkout.title":"Rasmiylashtirish","checkout.receiver":"Qabul qiluvchi","checkout.address":"Yetkazib berish manzili","checkout.orderSummary":"Buyurtma xulosasi","checkout.placeOrder":"Buyurtma berish","checkout.orderCreated":"Buyurtma yaratildi","checkout.continueShopping":"Xaridni davom ettirish","checkout.viewOrders":"Buyurtmalarni ko‘rish","orders.title":"Mening buyurtmalarim","orders.order":"Buyurtma","orders.details":"Buyurtma tafsilotlari","orders.history":"Status tarixi","orders.none":"Hali buyurtmalar yo‘q","orders.refresh":"Yangilash","orders.viewDetails":"Batafsil","orders.items":"{count} ta mahsulot","favorites.title":"Saralangan","favorites.empty":"Hali saralangan mahsulotlar yo‘q","favorites.added":"Saralanganlarga qo‘shildi","favorites.removed":"Saralangandan olib tashlandi","profile.myProfile":"Profil","profile.edit":"Profilni tahrirlash","profile.save":"Saqlash","profile.myOrders":"Buyurtmalarim","profile.myReviews":"Sharhlarim","reviews.my":"Mening sharhlarim","reviews.write":"Sharh yozish","reviews.submit":"Sharh yuborish","reviews.rating":"Reyting","reviews.content":"Sharh matni","reviews.none":"Hali sharhlar yo‘q","reviews.noText":"Matnli sharh yo‘q.","reviews.submitted":"Sharh yuborildi","notifications.title":"Bildirishnomalar","notifications.alerts":"Xabarlar","notifications.none":"Hali bildirishnomalar yo‘q","notifications.markRead":"O‘qildi deb belgilash","notifications.read":"O‘qilgan","notifications.unread":"O‘qilmagan","common.tryAgain":"Qayta urinish","common.somethingWrong":"Nimadir xato ketdi","common.serverFailed":"Server bilan aloqa bo‘lmadi","common.saving":"Saqlanmoqda...","common.total":"Jami","common.unknown":"Noma’lum","common.unavailable":"Mavjud emas","status.NEW":"Yangi","status.CONFIRMED":"Tasdiqlangan","status.PACKED":"Qadoqlangan","status.SHIPPED":"Yuborilgan","status.DELIVERED":"Yetkazilgan","status.CANCELED":"Bekor qilingan","notification.ORDER":"Buyurtma","notification.PROMO":"Aksiya","notification.SYSTEM":"Tizim","category.SKINCARE":"Teri parvarishi","category.MAKEUP":"Makiyaj","category.COLLAGEN":"Kollagen","category.HAIR_CARE":"Soch parvarishi","category.FRAGRANCE":"Atirlar","category.TOP":"Ustki kiyim","category.OUTER":"Tashqi kiyim","category.PANTS":"Shimlar","category.SHOES":"Poyabzal","category.BAG":"Sumka","category.ACCESSORY":"Aksessuar","hero.eyebrow":"Eng yaxshi kunlik takliflar","hero.title":"Koreys go‘zallik mahsulotlari","hero.subtitle":"O‘zbekiston bo‘ylab tez yetkazib berish — kosmetika, teri parvarishi, atir va aksessuarlar.","hero.viewProducts":"Mahsulotlarni ko‘rish","hero.fastDelivery":"Tez yetkazib berish","hero.fastDeliverySub":"O‘zbekiston bo‘ylab","home.history":"Tarix","home.recentlyViewed":"Yaqinda ko‘rilgan","api.title":"API sozlamasi","api.save":"Saqlash"},rr={...In,"header.location":"📍 Tashkent","header.pickupPoints":"Pickup points","header.sell":"Sell on Beauty Skin Korea","header.support":"Support","header.orders":"Orders","header.language":"Language","header.catalog":"Catalog","header.searchPlaceholder":"Search products and categories","header.search":"Search","auth.login":"Login","auth.register":"Register","auth.signIn":"Sign in","auth.createAccount":"Create account","auth.continueWithGoogle":"Continue with Google","auth.or":"or","auth.logout":"Logout","auth.loginRequired":"Please login to continue","auth.emailRequired":"Email is required.","auth.passwordMin":"Password must be at least 6 characters.","auth.fullNameRequired":"Full name is required.","auth.phoneRequired":"Phone is required.","auth.passwordMismatch":"Passwords do not match.","home.all":"All","home.categories":"Categories","home.quickCategories":"Quick categories","home.todayDeals":"Today deals","home.discounts":"Discounts","home.newArrivals":"New arrivals","home.popular":"Popular products","home.recommended":"Recommended for you","home.similar":"Similar products","home.others":"Others also viewed","home.demoMode":"Demo mode","home.todayOnly":"Today only","home.startShopping":"Start shopping","home.showAll":"Show all products","home.loadMore":"Load more","home.noProducts":"No products found","home.loading":"Loading...","product.addToCart":"Add to cart","product.addToCartFull":"Add to cart","product.adding":"Adding...","product.sold":"{count} sold","product.stock":"Stock: {count}","product.save":"Save","product.saved":"Saved","product.viewDetails":"View details","product.reviews":"Reviews","product.description":"Description","product.detailImages":"Detail images","product.delivery":"Delivery across Uzbekistan","product.secure":"Secure checkout","product.original":"Original Korean products","product.notFound":"Product not found","product.backToShopping":"Back to shopping","cart.title":"Cart","cart.empty":"Your cart is empty","cart.subtotal":"Subtotal","cart.checkout":"Checkout","cart.added":"Added to cart","cart.itemRemoved":"Removed from cart","cart.quantityUpdated":"Quantity updated","orders.title":"My orders","orders.none":"You have no orders yet","favorites.title":"Favorites","favorites.empty":"No favorite products yet","reviews.none":"No reviews yet","notifications.title":"Notifications","notifications.alerts":"Alerts","notifications.none":"No notifications yet","common.tryAgain":"Try again","common.serverFailed":"Server connection failed","common.total":"Total","checkout.title":"Checkout","orders.refresh":"Refresh","reviews.my":"My reviews","reviews.write":"Write review","reviews.submit":"Submit review","hero.eyebrow":"Best daily offers","hero.title":"Korean beauty products","hero.subtitle":"Fast delivery across Uzbekistan — cosmetics, skincare, fragrance and accessories.","hero.viewProducts":"View products","hero.fastDelivery":"Fast delivery","hero.fastDeliverySub":"Across Uzbekistan","home.history":"History","home.recentlyViewed":"Recently viewed","api.title":"API settings","api.save":"Save"},ji={...rr,"header.location":"📍 Ташкент","header.pickupPoints":"Пункты выдачи","header.sell":"Стать продавцом","header.support":"Поддержка","header.orders":"Заказы","header.language":"Язык","header.catalog":"Каталог","header.searchPlaceholder":"Искать товары и категории","auth.login":"Войти","auth.register":"Регистрация","auth.continueWithGoogle":"Войти через Google","auth.or":"или","auth.logout":"Выйти","auth.loginRequired":"Войдите, чтобы продолжить","auth.emailRequired":"Email обязателен.","auth.passwordMin":"Пароль должен быть не менее 6 символов.","auth.fullNameRequired":"Полное имя обязательно.","auth.phoneRequired":"Телефон обязателен.","auth.passwordMismatch":"Пароли не совпадают.","home.all":"Все","home.categories":"Категории","home.quickCategories":"Быстрые категории","home.todayDeals":"Предложения дня","home.discounts":"Скидки","home.newArrivals":"Новинки","home.popular":"Популярные товары","home.recommended":"Рекомендуем вам","home.similar":"Похожие товары","home.others":"Также смотрели","home.startShopping":"Начать покупки","home.loadMore":"Загрузить еще","product.addToCart":"В корзину","product.addToCartFull":"В корзину","product.sold":"Продано: {count}","product.save":"Сохранить","product.saved":"Сохранено","product.description":"Описание","product.detailImages":"Детальные изображения","product.details":"Детали","product.reviews":"Отзывы","product.delivery":"Доставка по Узбекистану","product.secure":"Безопасная оплата","product.original":"Оригинальная корейская косметика","cart.title":"Корзина","cart.empty":"Корзина пуста","cart.checkout":"Оформить","orders.title":"Мои заказы","favorites.title":"Избранное","reviews.none":"Пока нет отзывов","notifications.title":"Уведомления","status.NEW":"Новый","status.CONFIRMED":"Подтвержден","status.PACKED":"Упакован","status.SHIPPED":"Отправлен","status.DELIVERED":"Доставлен","status.CANCELED":"Отменен","category.SKINCARE":"Уход за кожей","category.MAKEUP":"Макияж","category.COLLAGEN":"Коллаген","category.HAIR_CARE":"Уход за волосами","category.FRAGRANCE":"Парфюм","category.TOP":"Верх","category.OUTER":"Верхняя одежда","category.PANTS":"Брюки","category.SHOES":"Обувь","category.BAG":"Сумки","category.ACCESSORY":"Аксессуары","home.todayOnly":"Только сегодня","checkout.title":"Оформление","orders.refresh":"Обновить","reviews.my":"Мои отзывы","reviews.write":"Написать отзыв","reviews.submit":"Отправить отзыв","hero.eyebrow":"Лучшие предложения дня","hero.title":"Корейская косметика","hero.subtitle":"Быстрая доставка по Узбекистану — косметика, уход, парфюм и аксессуары.","hero.viewProducts":"Смотреть товары","hero.fastDelivery":"Быстрая доставка","hero.fastDeliverySub":"По всему Узбекистану","home.history":"История","home.recentlyViewed":"Недавно просмотренные","api.title":"Настройки API","api.save":"Сохранить"},Ki={...rr,"header.location":"📍 타슈켄트","header.pickupPoints":"픽업 지점","header.sell":"판매자 되기","header.support":"고객 지원","header.orders":"주문","header.language":"언어","header.catalog":"카탈로그","header.searchPlaceholder":"상품 및 카테고리 검색","auth.login":"로그인","auth.register":"회원가입","auth.continueWithGoogle":"Google로 로그인","auth.or":"또는","auth.logout":"로그아웃","auth.loginRequired":"계속하려면 로그인하세요","auth.emailRequired":"이메일은 필수입니다.","auth.passwordMin":"비밀번호는 6자 이상이어야 합니다.","auth.fullNameRequired":"이름은 필수입니다.","auth.phoneRequired":"전화번호는 필수입니다.","auth.passwordMismatch":"비밀번호가 일치하지 않습니다.","home.all":"전체","home.categories":"카테고리","home.quickCategories":"빠른 카테고리","home.todayDeals":"오늘의 특가","home.discounts":"할인","home.newArrivals":"신상품","home.popular":"인기 상품","home.recommended":"추천 상품","home.similar":"비슷한 상품","home.others":"함께 본 상품","home.startShopping":"쇼핑 시작","home.loadMore":"더 보기","product.addToCart":"장바구니","product.addToCartFull":"장바구니 담기","product.sold":"{count}개 판매","product.save":"저장","product.saved":"저장됨","product.description":"설명","product.detailImages":"상세 이미지","product.details":"상세 정보","product.reviews":"리뷰","product.delivery":"우즈베키스탄 전역 배송","product.secure":"안전한 결제","product.original":"정품 한국 제품","cart.title":"장바구니","cart.empty":"장바구니가 비어 있습니다","cart.checkout":"결제","orders.title":"내 주문","favorites.title":"찜","reviews.none":"아직 리뷰가 없습니다","notifications.title":"알림","status.NEW":"신규","status.CONFIRMED":"확인됨","status.PACKED":"포장됨","status.SHIPPED":"배송 중","status.DELIVERED":"배송 완료","status.CANCELED":"취소됨","category.SKINCARE":"스킨케어","category.MAKEUP":"메이크업","category.COLLAGEN":"콜라겐","category.HAIR_CARE":"헤어 케어","category.FRAGRANCE":"향수","category.TOP":"상의","category.OUTER":"아우터","category.PANTS":"바지","category.SHOES":"신발","category.BAG":"가방","category.ACCESSORY":"액세서리","home.todayOnly":"오늘 한정","checkout.title":"결제","orders.refresh":"새로고침","reviews.my":"내 리뷰","reviews.write":"리뷰 작성","reviews.submit":"리뷰 제출","hero.eyebrow":"오늘의 베스트 특가","hero.title":"한국 뷰티 제품","hero.subtitle":"우즈베키스탄 전역 빠른 배송 — 화장품, 스킨케어, 향수, 액세서리.","hero.viewProducts":"상품 보기","hero.fastDelivery":"빠른 배송","hero.fastDeliverySub":"우즈베키스탄 전역","home.history":"기록","home.recentlyViewed":"최근 본 상품","api.title":"API 설정","api.save":"저장"},Le={uz:In,en:rr,ru:ji,ko:Ki};let Be=Ji();function Ji(){const t=localStorage.getItem(v.storageKeys.language);return bn.includes(t)?t:Oe}function Sn(){return Be}function h(t,e={}){var o;const r=Le[Be]||Le[Oe],n=Le.en||Le[Oe],i=(r==null?void 0:r[t])??(n==null?void 0:n[t])??((o=Le[Oe])==null?void 0:o[t])??t;return String(i).replace(/\{(\w+)\}/g,(c,d)=>e[d]??"")}let En=()=>{};function Yi(t){En=t}function Qi(t){const e=bn.includes(t)?t:Oe;Be=e,localStorage.setItem(v.storageKeys.language,e),En()}function An(t){var r;document.documentElement.lang=Be,document.title=(t==null?void 0:t.currentRoute)==="product"&&((r=t==null?void 0:t.selectedDetailProduct)!=null&&r.name)?`${t.selectedDetailProduct.name} - BEAUTY SKIN KOREA`:"BEAUTY SKIN KOREA";const e=document.getElementById("languageSelect");e&&(e.value=Be),document.querySelectorAll("[data-i18n]").forEach(n=>{n.textContent=h(n.dataset.i18n)}),document.querySelectorAll("[data-i18n-placeholder]").forEach(n=>{n.setAttribute("placeholder",h(n.dataset.i18nPlaceholder))}),document.querySelectorAll("[data-i18n-title]").forEach(n=>{n.setAttribute("title",h(n.dataset.i18nTitle))}),document.querySelectorAll("[data-i18n-aria-label]").forEach(n=>{n.setAttribute("aria-label",h(n.dataset.i18nAriaLabel))})}function E(t){const e=Number(t);return Number.isFinite(e)?e:0}function nr(t){return t?typeof t=="string"?t:t.imageUrl||t.url||"":""}function ct(t){return Array.isArray(t)?t.map(e=>nr(e)).filter(Boolean):[]}function b(t){return Array.isArray(t==null?void 0:t.content)?t.content:Array.isArray(t)?t:[]}function A(t={}){const e=Array.isArray(t.variants)?t.variants:[],r=e.find(f=>Number(f.stock||0)>0)||e[0]||null,n=ct(t.images),i=ct(t.detailImages),o=nr(t.mainImageUrl)||n[0]||t.imageUrl||v.placeholderImage,c=E(t.price??(r==null?void 0:r.price)),d=E((r==null?void 0:r.discountPrice)??t.discountPrice??t.price),u=c>d&&c>0?Math.round((c-d)/c*100):0;return{id:t.id,name:t.name||"Mahsulot",description:t.description||"",brand:t.brand||"",category:t.category||"",image:o,images:n.length?n:[o],detailImages:i,price:E(t.price),originalPrice:c,discountPrice:E(t.discountPrice),finalPrice:d,discountPercent:u,stock:E(t.stock),ratingAvg:E(t.ratingAvg),reviewCount:E(t.reviewCount),soldCount:E(t.soldCount),todayDeal:!!t.todayDeal,favorite:!!t.favorite,variants:e,raw:t}}function Xi(t={}){var o,c,d,u;const e=A(t.product||((o=t.variant)==null?void 0:o.product)||t),r=E(t.quantity)||1,n=E(t.unitPrice||e.finalPrice),i=E(t.lineTotal||n*r);return{id:t.id||t.cartItemId,productId:e.id,product:e,image:e.image,name:e.name,brand:e.brand,variantId:t.variantId||((c=t.variant)==null?void 0:c.id),variantLabel:t.variantLabel||((d=t.variant)==null?void 0:d.label)||"",unitPrice:n,lineTotal:i,quantity:r,stock:E(t.stock??((u=t.variant)==null?void 0:u.stock)??e.stock)}}function Zi(t={}){return A(t.product||t)}function es(t){return typeof t=="string"?t:(t==null?void 0:t.code)||(t==null?void 0:t.name)||(t==null?void 0:t.title)||""}function ts(t={}){var n,i;const e=t.product||{},r=nr(t.mainImageUrl||e.mainImageUrl);return{id:t.id||t.orderItemId,productId:t.productId||e.id||((n=t.product)==null?void 0:n.id),orderId:t.orderId,name:t.productName||t.name||e.name||"Product",image:t.imageUrl||r||e.imageUrl||ct(e.images)[0]||v.placeholderImage,variantLabel:t.variantLabel||((i=t.variant)==null?void 0:i.label)||"",quantity:E(t.quantity)||1,unitPrice:E(t.unitPrice||t.price||e.discountPrice||e.price),lineTotal:E(t.lineTotal||t.total||t.price||0)}}function _n(t={}){var e,r,n,i,o,c;return{id:t.id||t.reviewId||`${t.productId||"product"}-${t.orderId||"order"}-${t.createdAt||""}`,productId:t.productId||((e=t.product)==null?void 0:e.id)||((r=t.orderItem)==null?void 0:r.productId),orderId:t.orderId||((n=t.order)==null?void 0:n.id)||((i=t.orderItem)==null?void 0:i.orderId),rating:Math.min(5,Math.max(0,E(t.rating))),content:t.content||t.reviewContent||t.comment||"",imageUrls:Array.isArray(t.imageUrls)?t.imageUrls.filter(Boolean):ct(t.images),createdAt:t.createdAt||t.createdDate||t.reviewedAt||"",userName:t.userName||t.fullName||((o=t.user)==null?void 0:o.fullName)||((c=t.user)==null?void 0:c.name)||"Customer"}}function rs(t={}){return{id:t.id||t.notificationId,title:t.title||t.subject||"Notification",message:t.message||t.content||"",type:String(t.type||"SYSTEM").toUpperCase(),read:!!(t.read??t.isRead),createdAt:t.createdAt||t.createdDate||"",refId:t.refId||t.referenceId||t.orderId||null,raw:t}}function ns(t){var e;return Array.isArray(t==null?void 0:t.data)?t.data:Array.isArray((e=t==null?void 0:t.data)==null?void 0:e.content)?t.data.content:Array.isArray(t==null?void 0:t.content)?t.content:Array.isArray(t)?t:[]}function is(t={}){var u,f,g;const e=t.review||t.reviewResponse||(t.rating||t.content?t:null),r=A(t.product||t.productCard||t.productResponse||t),n=e?_n({...e,productId:e.productId||r.id,orderId:e.orderId||t.orderId}):null,i=t.productId||(n==null?void 0:n.productId)||r.id,o=t.orderId||((u=t.order)==null?void 0:u.id)||((f=t.orderResponse)==null?void 0:f.id)||(n==null?void 0:n.orderId),c=t.status||t.orderStatus||((g=t.order)==null?void 0:g.status)||"",d=!!(n!=null&&n.content||n!=null&&n.rating);return{id:t.id||t.orderItemId||(n==null?void 0:n.id)||`${i||"product"}-${o||"order"}`,productId:i,orderId:o,product:r,image:r.image||t.imageUrl||v.placeholderImage,name:t.productName||t.name||(r.name&&r.name!=="Mahsulot"?r.name:`Product #${i||"-"}`),brand:r.brand||t.brand||"",status:c,review:n,hasReview:d,reviewable:!!(i&&o&&!d),raw:t}}function ss(t){var e,r,n,i;return Array.isArray(t==null?void 0:t.data)?t.data:Array.isArray((e=t==null?void 0:t.data)==null?void 0:e.content)?t.data.content:Array.isArray((r=t==null?void 0:t.data)==null?void 0:r.items)?t.data.items:Array.isArray((n=t==null?void 0:t.data)==null?void 0:n.reviews)?t.data.reviews:Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.reviewableItems)?t.data.reviewableItems:Array.isArray(t==null?void 0:t.reviews)?t.reviews:Array.isArray(t==null?void 0:t.items)?t.items:Array.isArray(t==null?void 0:t.reviewableItems)?t.reviewableItems:Array.isArray(t==null?void 0:t.content)?t.content:Array.isArray(t)?t:[]}function Ie(t){if(!t)return"";const e=`category.${t}`,r=h(e);return r!==e?r:wn[t]||t.toLowerCase().split("_").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" ")}function Cn(t){s.cartItems=t,s.cart=t,s.cartCount=t.reduce((e,r)=>e+r.quantity,0),s.cartTotal=t.reduce((e,r)=>e+r.lineTotal,0)}function Wt(){Cn([]),s.cartLoading=!1,s.cartError="",s.cartUpdatingIds=new Set}function as(t){s.favoriteProducts=t.filter(e=>e.id!==void 0&&e.id!==null),s.favoriteIds=new Set(s.favoriteProducts.map(e=>String(e.id))),s.favoritesCount=s.favoriteProducts.length,K()}function Gt(){s.favoriteProducts=[],s.favoriteIds=new Set,s.favoritesLoading=!1,s.favoritesError="",s.favoritesCount=0,K()}function K(){var t;s.products=s.products.map(e=>({...e,favorite:s.favoriteIds.has(String(e.id))})),s.todayDeals=s.todayDeals.map(e=>({...e,favorite:s.favoriteIds.has(String(e.id))})),((t=s.selectedDetailProduct)==null?void 0:t.id)!==void 0&&(s.selectedDetailProduct={...s.selectedDetailProduct,favorite:s.favoriteIds.has(String(s.selectedDetailProduct.id))})}function Tn(){var t;try{return((t=import.meta)==null?void 0:t.env)??{}}catch{return{}}}function et(){return!!Tn().DEV}function os(t){try{return JSON.parse(t)}catch{return t}}function cs(t,e){return typeof t=="string"&&t.trim()?t:(t==null?void 0:t.message)||(t==null?void 0:t.error)||`API xatosi: HTTP ${e}`}let ge={onUnauthorized:()=>{},onLoginRequired:()=>{},showToast:()=>{}};function ls(t={}){ge={...ge,...t}}function ds(t,e){const r=t.startsWith("/")?t:`/${t}`,n=s.baseUrl?s.baseUrl.replace(/\/+$/,""):"",i=new URL(`${n}${r}`,window.location.origin);return e&&Object.entries(e).forEach(([o,c])=>{c!=null&&c!==""&&i.searchParams.set(o,c)}),i.toString()}async function m(t,e={}){const{query:r,showError:n=!0,requireAuth:i=!1,silentAuth:o=!1,...c}=e,d=ds(t,r),u={Accept:"application/json",...c.body?{"Content-Type":"application/json"}:{},...c.headers||{}},f=Et();if(f&&(u.Authorization=`Bearer ${f}`),i&&!f)return s.lastApiError="Please login to continue",ge.onLoginRequired(),null;if(et()){const g=Tn();console.info("[API REQUEST]",{path:t,requestUrl:d,method:c.method||"GET",query:r,baseUrl:s.baseUrl,host:window.location.host,mode:g.MODE,envBase:g.VITE_API_BASE_URL})}try{s.lastApiError="";const g=await fetch(d,{...c,headers:u}),y=await g.text(),S=y?os(y):null;if(et()&&console.info("[API RESPONSE]",{requestUrl:d,status:g.status,ok:g.ok,payload:S}),g.status===401)return s.lastApiError="Session expired. Please login again.",o||ge.onUnauthorized(),null;if(!g.ok){const L=cs(S,g.status);return s.lastApiError=L,n&&ge.showToast(L,"error"),null}return S}catch(g){return s.lastApiError="Server bilan aloqa bo‘lmadi",et()&&console.error("[API ERROR]",{requestUrl:d,error:g}),n&&ge.showToast("Server bilan aloqa vaqtincha ishlamayapti.","error"),null}}const us=4200,hs=4;let k=null;function fs(){return k||(k=document.getElementById("toast"),k?(k.classList.add("toast-host"),k.setAttribute("aria-relevant","additions")):(k=document.createElement("div"),k.id="toast",k.className="toast-host",k.setAttribute("role","status"),k.setAttribute("aria-live","polite"),k.setAttribute("aria-relevant","additions"),document.body.appendChild(k)),k)}const Fr={success:"✓",error:"✕",warning:"!",info:"i"};function I(t,e="info"){var y;const r=String(t||"").trim();if(!r)return;const n=fs(),i=Fr[e]?e:"info",o=document.createElement("div");o.className=`toast-item toast-${i}`,o.setAttribute("role","status");const c=document.createElement("span");c.className="toast-icon",c.setAttribute("aria-hidden","true"),c.textContent=Fr[i];const d=document.createElement("span");d.className="toast-message",d.textContent=r;const u=document.createElement("button");for(u.type="button",u.className="toast-close",u.setAttribute("aria-label","Close"),u.textContent="×",o.append(c,d,u),n.appendChild(o);n.children.length>hs;)(y=n.firstElementChild)==null||y.remove();let f=0;const g=()=>{clearTimeout(f),o.classList.remove("show"),window.setTimeout(()=>o.remove(),220)};u.addEventListener("click",g),f=window.setTimeout(g,us),requestAnimationFrame(()=>{requestAnimationFrame(()=>o.classList.add("show"))})}const gs=()=>{};var xr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},ms=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[r++];e[n++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[r++],c=t[r++],d=t[r++],u=((i&7)<<18|(o&63)<<12|(c&63)<<6|d&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const o=t[r++],c=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(o&63)<<6|c&63)}}return e.join("")},Pn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const o=t[i],c=i+1<t.length,d=c?t[i+1]:0,u=i+2<t.length,f=u?t[i+2]:0,g=o>>2,y=(o&3)<<4|d>>4;let S=(d&15)<<2|f>>6,L=f&63;u||(L=64,c||(S=64)),n.push(r[g],r[y],r[S],r[L])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(kn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ms(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const o=r[t.charAt(i++)],d=i<t.length?r[t.charAt(i)]:0;++i;const f=i<t.length?r[t.charAt(i)]:64;++i;const y=i<t.length?r[t.charAt(i)]:64;if(++i,o==null||d==null||f==null||y==null)throw new ps;const S=o<<2|d>>4;if(n.push(S),f!==64){const L=d<<4&240|f>>2;if(n.push(L),y!==64){const se=f<<6&192|y;n.push(se)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ps extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vs=function(t){const e=kn(t);return Pn.encodeByteArray(e,!0)},Rn=function(t){return vs(t).replace(/\./g,"")},Dn=function(t){try{return Pn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=()=>ys().__FIREBASE_DEFAULTS__,bs=()=>{if(typeof process>"u"||typeof xr>"u")return;const t=xr.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Is=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dn(t[1]);return e&&JSON.parse(e)},ir=()=>{try{return gs()||ws()||bs()||Is()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ss=t=>{var e,r;return(r=(e=ir())==null?void 0:e.emulatorHosts)==null?void 0:r[t]},Ln=()=>{var t;return(t=ir())==null?void 0:t.config},Nn=t=>{var e;return(e=ir())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function As(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(T())}function _s(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cs(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ts(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ks(){const t=T();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ps(){try{return typeof indexedDB=="object"}catch{return!1}}function Rs(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var o;e(((o=i.error)==null?void 0:o.message)||"")}}catch(r){e(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="FirebaseError";class ie extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=Ds,Object.setPrototypeOf(this,ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,We.prototype.create)}}class We{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,o=this.errors[e],c=o?Ls(o,n):"Error",d=`${this.serviceName}: ${c} (${i}).`;return new ie(i,d,n)}}function Ls(t,e){return t.replace(Ns,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const Ns=/\{\$([^}]+)}/g;function Os(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Se(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const i of r){if(!n.includes(i))return!1;const o=t[i],c=e[i];if(qr(o)&&qr(c)){if(!Se(o,c))return!1}else if(o!==c)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function qr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function $s(t,e){const r=new Ms(t,e);return r.subscribe.bind(r)}class Ms{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let i;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");Us(e,["next","error","complete"])?i=e:i={next:e,error:r,complete:n},i.next===void 0&&(i.next=$t),i.error===void 0&&(i.error=$t),i.complete===void 0&&(i.complete=$t);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Us(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function $t(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Bs(t){return(await fetch(t,{credentials:"include"})).ok}class Ee{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new Es;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qs(e))try{this.getOrInitializeService({instanceIdentifier:ae})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch{}}}}clearInstance(e=ae){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ae){return this.instances.has(e)}getOptions(e=ae){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[o,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(o);n===d&&c.resolve(i)}return i}onInit(e,r){const n=this.normalizeInstanceIdentifier(r),i=this.onInitCallbacks.get(n)??new Set;i.add(e),this.onInitCallbacks.set(n,i);const o=this.instances.get(n);return o&&e(o,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(n)for(const i of n)try{i(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:xs(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=ae){return this.component?this.component.multipleInstances?e:ae:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xs(t){return t===ae?void 0:t}function qs(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new Fs(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var w;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(w||(w={}));const Vs={debug:w.DEBUG,verbose:w.VERBOSE,info:w.INFO,warn:w.WARN,error:w.ERROR,silent:w.SILENT},zs=w.INFO,Ws={[w.DEBUG]:"log",[w.VERBOSE]:"log",[w.INFO]:"info",[w.WARN]:"warn",[w.ERROR]:"error"},Gs=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=Ws[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class On{constructor(e){this.name=e,this._logLevel=zs,this._logHandler=Gs,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in w))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vs[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,w.DEBUG,...e),this._logHandler(this,w.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,w.VERBOSE,...e),this._logHandler(this,w.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,w.INFO,...e),this._logHandler(this,w.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,w.WARN,...e),this._logHandler(this,w.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,w.ERROR,...e),this._logHandler(this,w.ERROR,...e)}}const js=(t,e)=>e.some(r=>t instanceof r);let Hr,Vr;function Ks(){return Hr||(Hr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Js(){return Vr||(Vr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $n=new WeakMap,jt=new WeakMap,Mn=new WeakMap,Mt=new WeakMap,ar=new WeakMap;function Ys(t){const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",c)},o=()=>{r(te(t.result)),i()},c=()=>{n(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",c)});return e.then(r=>{r instanceof IDBCursor&&$n.set(r,t)}).catch(()=>{}),ar.set(e,t),e}function Qs(t){if(jt.has(t))return;const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",c),t.removeEventListener("abort",c)},o=()=>{r(),i()},c=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",c),t.addEventListener("abort",c)});jt.set(t,e)}let Kt={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return jt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mn.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return te(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Xs(t){Kt=t(Kt)}function Zs(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(Ut(this),e,...r);return Mn.set(n,e.sort?e.sort():[e]),te(n)}:Js().includes(t)?function(...e){return t.apply(Ut(this),e),te($n.get(this))}:function(...e){return te(t.apply(Ut(this),e))}}function ea(t){return typeof t=="function"?Zs(t):(t instanceof IDBTransaction&&Qs(t),js(t,Ks())?new Proxy(t,Kt):t)}function te(t){if(t instanceof IDBRequest)return Ys(t);if(Mt.has(t))return Mt.get(t);const e=ea(t);return e!==t&&(Mt.set(t,e),ar.set(e,t)),e}const Ut=t=>ar.get(t);function ta(t,e,{blocked:r,upgrade:n,blocking:i,terminated:o}={}){const c=indexedDB.open(t,e),d=te(c);return n&&c.addEventListener("upgradeneeded",u=>{n(te(c.result),u.oldVersion,u.newVersion,te(c.transaction),u)}),r&&c.addEventListener("blocked",u=>r(u.oldVersion,u.newVersion,u)),d.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),d}const ra=["get","getKey","getAll","getAllKeys","count"],na=["put","add","delete","clear"],Bt=new Map;function zr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bt.get(e))return Bt.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,i=na.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||ra.includes(r)))return;const o=async function(c,...d){const u=this.transaction(c,i?"readwrite":"readonly");let f=u.store;return n&&(f=f.index(d.shift())),(await Promise.all([f[r](...d),i&&u.done]))[0]};return Bt.set(e,o),o}Xs(t=>({...t,get:(e,r,n)=>zr(e,r)||t.get(e,r,n),has:(e,r)=>!!zr(e,r)||t.has(e,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(sa(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function sa(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jt="@firebase/app",Wr="0.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=new On("@firebase/app"),aa="@firebase/app-compat",oa="@firebase/analytics-compat",ca="@firebase/analytics",la="@firebase/app-check-compat",da="@firebase/app-check",ua="@firebase/auth",ha="@firebase/auth-compat",fa="@firebase/database",ga="@firebase/data-connect",ma="@firebase/database-compat",pa="@firebase/functions",va="@firebase/functions-compat",ya="@firebase/installations",wa="@firebase/installations-compat",ba="@firebase/messaging",Ia="@firebase/messaging-compat",Sa="@firebase/performance",Ea="@firebase/performance-compat",Aa="@firebase/remote-config",_a="@firebase/remote-config-compat",Ca="@firebase/storage",Ta="@firebase/storage-compat",ka="@firebase/firestore",Pa="@firebase/ai",Ra="@firebase/firestore-compat",Da="firebase",La="12.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="[DEFAULT]",Na={[Jt]:"fire-core",[aa]:"fire-core-compat",[ca]:"fire-analytics",[oa]:"fire-analytics-compat",[da]:"fire-app-check",[la]:"fire-app-check-compat",[ua]:"fire-auth",[ha]:"fire-auth-compat",[fa]:"fire-rtdb",[ga]:"fire-data-connect",[ma]:"fire-rtdb-compat",[pa]:"fire-fn",[va]:"fire-fn-compat",[ya]:"fire-iid",[wa]:"fire-iid-compat",[ba]:"fire-fcm",[Ia]:"fire-fcm-compat",[Sa]:"fire-perf",[Ea]:"fire-perf-compat",[Aa]:"fire-rc",[_a]:"fire-rc-compat",[Ca]:"fire-gcs",[Ta]:"fire-gcs-compat",[ka]:"fire-fst",[Ra]:"fire-fst-compat",[Pa]:"fire-vertex","fire-js":"fire-js",[Da]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new Map,Oa=new Map,Qt=new Map;function Gr(t,e){try{t.container.addComponent(e)}catch(r){G.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function Fe(t){const e=t.name;if(Qt.has(e))return G.debug(`There were multiple attempts to register component ${e}.`),!1;Qt.set(e,t);for(const r of lt.values())Gr(r,t);for(const r of Oa.values())Gr(r,t);return!0}function Un(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}function B(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},re=new We("app","Firebase",$a);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,r,n){this._isDeleted=!1,this._options={...e},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ee("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw re.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=La;function Bn(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n={name:Yt,automaticDataCollectionEnabled:!0,...e},i=n.name;if(typeof i!="string"||!i)throw re.create("bad-app-name",{appName:String(i)});if(r||(r=Ln()),!r)throw re.create("no-options");const o=lt.get(i);if(o){if(Se(r,o.options)&&Se(n,o.config))return o;throw re.create("duplicate-app",{appName:i})}const c=new Hs(i);for(const u of Qt.values())c.addComponent(u);const d=new Ma(r,n,c);return lt.set(i,d),d}function Ua(t=Yt){const e=lt.get(t);if(!e&&t===Yt&&Ln())return Bn();if(!e)throw re.create("no-app",{appName:t});return e}function pe(t,e,r){let n=Na[t]??t;r&&(n+=`-${r}`);const i=n.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${n}" with version "${e}":`];i&&c.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),G.warn(c.join(" "));return}Fe(new Ee(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="firebase-heartbeat-database",Fa=1,xe="firebase-heartbeat-store";let Ft=null;function Fn(){return Ft||(Ft=ta(Ba,Fa,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xe)}catch(r){console.warn(r)}}}}).catch(t=>{throw re.create("idb-open",{originalErrorMessage:t.message})})),Ft}async function xa(t){try{const r=(await Fn()).transaction(xe),n=await r.objectStore(xe).get(xn(t));return await r.done,n}catch(e){if(e instanceof ie)G.warn(e.message);else{const r=re.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});G.warn(r.message)}}}async function jr(t,e){try{const n=(await Fn()).transaction(xe,"readwrite");await n.objectStore(xe).put(e,xn(t)),await n.done}catch(r){if(r instanceof ie)G.warn(r.message);else{const n=re.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});G.warn(n.message)}}}function xn(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=1024,Ha=30;class Va{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Wa(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,r;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Kr();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)==null?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(c=>c.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Ha){const c=Ga(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){G.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=Kr(),{heartbeatsToSend:n,unsentEntries:i}=za(this._heartbeatsCache.heartbeats),o=Rn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=r,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(r){return G.warn(r),""}}}function Kr(){return new Date().toISOString().substring(0,10)}function za(t,e=qa){const r=[];let n=t.slice();for(const i of t){const o=r.find(c=>c.agent===i.agent);if(o){if(o.dates.push(i.date),Jr(r)>e){o.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Jr(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class Wa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ps()?Rs().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await xa(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return jr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return jr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Jr(t){return Rn(JSON.stringify({version:2,heartbeats:t})).length}function Ga(t){if(t.length===0)return-1;let e=0,r=t[0].date;for(let n=1;n<t.length;n++)t[n].date<r&&(r=t[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t){Fe(new Ee("platform-logger",e=>new ia(e),"PRIVATE")),Fe(new Ee("heartbeat",e=>new Va(e),"PRIVATE")),pe(Jt,Wr,t),pe(Jt,Wr,"esm2020"),pe("fire-js","")}ja("");var Ka="firebase",Ja="12.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pe(Ka,Ja,"app");function qn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ya=qn,Hn=new We("auth","Firebase",qn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=new On("@firebase/auth");function Qa(t,...e){dt.logLevel<=w.WARN&&dt.warn(`Auth (${je}): ${t}`,...e)}function tt(t,...e){dt.logLevel<=w.ERROR&&dt.error(`Auth (${je}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t,...e){throw cr(t,...e)}function O(t,...e){return cr(t,...e)}function or(t,e,r){const n={...Ya(),[e]:r};return new We("auth","Firebase",n).create(e,{appName:t.name})}function le(t){return or(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xa(t,e,r){const n=r;if(!(e instanceof n))throw n.name!==e.constructor.name&&H(t,"argument-error"),or(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cr(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return Hn.create(t,...e)}function p(t,e,...r){if(!t)throw cr(e,...r)}function z(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tt(e),new Error(e)}function j(t,e){t||z(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Za(){return Yr()==="http:"||Yr()==="https:"}function Yr(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Za()||Cs()||"connection"in navigator)?navigator.onLine:!0}function to(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,r){this.shortDelay=e,this.longDelay=r,j(r>e,"Short delay should be less than long delay!"),this.isMobile=As()||Ts()}get(){return eo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t,e){j(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;z("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;z("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;z("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],io=new Ke(3e4,6e4);function dr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ke(t,e,r,n,i={}){return zn(t,i,async()=>{let o={},c={};n&&(e==="GET"?c=n:o={body:JSON.stringify(n)});const d=Ge({...c,key:t.config.apiKey}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const f={method:e,headers:u,...o};return _s()||(f.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&sr(t.emulatorConfig.host)&&(f.credentials="include"),Vn.fetch()(await Wn(t,t.config.apiHost,r,d),f)})}async function zn(t,e,r){t._canInitEmulator=!1;const n={...ro,...e};try{const i=new ao(t),o=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const c=await o.json();if("needConfirmation"in c)throw Xe(t,"account-exists-with-different-credential",c);if(o.ok&&!("errorMessage"in c))return c;{const d=o.ok?c.errorMessage:c.error.message,[u,f]=d.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xe(t,"credential-already-in-use",c);if(u==="EMAIL_EXISTS")throw Xe(t,"email-already-in-use",c);if(u==="USER_DISABLED")throw Xe(t,"user-disabled",c);const g=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw or(t,g,f);H(t,g)}}catch(i){if(i instanceof ie)throw i;H(t,"network-request-failed",{message:String(i)})}}async function so(t,e,r,n,i={}){const o=await ke(t,e,r,n,i);return"mfaPendingCredential"in o&&H(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function Wn(t,e,r,n){const i=`${e}${r}?${n}`,o=t,c=o.config.emulator?lr(t.config,i):`${t.config.apiScheme}://${i}`;return no.includes(r)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(c).toString():c}class ao{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(O(this.auth,"network-request-failed")),io.get())})}}function Xe(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=O(t,e,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t,e){return ke(t,"POST","/v1/accounts:delete",e)}async function ut(t,e){return ke(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function co(t,e=!1){const r=Te(t),n=await r.getIdToken(e),i=ur(n);p(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,c=o==null?void 0:o.sign_in_provider;return{claims:i,token:n,authTime:$e(xt(i.auth_time)),issuedAtTime:$e(xt(i.iat)),expirationTime:$e(xt(i.exp)),signInProvider:c||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function xt(t){return Number(t)*1e3}function ur(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return tt("JWT malformed, contained fewer than 3 sections"),null;try{const i=Dn(r);return i?JSON.parse(i):(tt("Failed to decode base64 JWT payload"),null)}catch(i){return tt("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Qr(t){const e=ur(t);return p(e,"internal-error"),p(typeof e.exp<"u","internal-error"),p(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof ie&&lo(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function lo({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=$e(this.lastLoginAt),this.creationTime=$e(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(t){var y;const e=t.auth,r=await t.getIdToken(),n=await qe(t,ut(e,{idToken:r}));p(n==null?void 0:n.users.length,e,"internal-error");const i=n.users[0];t._notifyReloadListener(i);const o=(y=i.providerUserInfo)!=null&&y.length?Gn(i.providerUserInfo):[],c=fo(t.providerData,o),d=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=d?u:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Zt(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function ho(t){const e=Te(t);await ht(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fo(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Gn(t){return t.map(({providerId:e,...r})=>({providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(t,e){const r=await zn(t,{},async()=>{const n=Ge({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,c=await Wn(t,i,"/v1/token",`key=${o}`),d=await t._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:d,body:n};return t.emulatorConfig&&sr(t.emulatorConfig.host)&&(u.credentials="include"),Vn.fetch()(c,u)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function mo(t,e){return ke(t,"POST","/v2/accounts:revokeToken",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){p(e.idToken,"internal-error"),p(typeof e.idToken<"u","internal-error"),p(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}updateFromIdToken(e){p(e.length!==0,"internal-error");const r=Qr(e);this.updateTokensAndExpiration(e,null,r)}async getToken(e,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(p(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:o}=await go(e,r);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:o}=r,c=new ve;return n&&(p(typeof n=="string","internal-error",{appName:e}),c.refreshToken=n),i&&(p(typeof i=="string","internal-error",{appName:e}),c.accessToken=i),o&&(p(typeof o=="number","internal-error",{appName:e}),c.expirationTime=o),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ve,this.toJSON())}_performRefresh(){return z("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t,e){p(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class N{constructor({uid:e,auth:r,stsTokenManager:n,...i}){this.providerId="firebase",this.proactiveRefresh=new uo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Zt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const r=await qe(this,this.stsTokenManager.getToken(this.auth,e));return p(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return co(this,e)}reload(){return ho(this)}_assign(e){this!==e&&(p(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>({...r})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new N({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return r.metadata._copy(this.metadata),r}_onReload(e){p(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await ht(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(B(this.auth.app))return Promise.reject(le(this.auth));const e=await this.getIdToken();return await qe(this,oo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){const n=r.displayName??void 0,i=r.email??void 0,o=r.phoneNumber??void 0,c=r.photoURL??void 0,d=r.tenantId??void 0,u=r._redirectEventId??void 0,f=r.createdAt??void 0,g=r.lastLoginAt??void 0,{uid:y,emailVerified:S,isAnonymous:L,providerData:se,stsTokenManager:Br}=r;p(y&&Br,e,"internal-error");const Ui=ve.fromJSON(this.name,Br);p(typeof y=="string",e,"internal-error"),Y(n,e.name),Y(i,e.name),p(typeof S=="boolean",e,"internal-error"),p(typeof L=="boolean",e,"internal-error"),Y(o,e.name),Y(c,e.name),Y(d,e.name),Y(u,e.name),Y(f,e.name),Y(g,e.name);const Ot=new N({uid:y,auth:e,email:i,emailVerified:S,displayName:n,isAnonymous:L,photoURL:c,phoneNumber:o,tenantId:d,stsTokenManager:Ui,createdAt:f,lastLoginAt:g});return se&&Array.isArray(se)&&(Ot.providerData=se.map(Bi=>({...Bi}))),u&&(Ot._redirectEventId=u),Ot}static async _fromIdTokenResponse(e,r,n=!1){const i=new ve;i.updateFromServerResponse(r);const o=new N({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ht(o),o}static async _fromGetAccountInfoResponse(e,r,n){const i=r.users[0];p(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Gn(i.providerUserInfo):[],c=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),d=new ve;d.updateFromIdToken(n);const u=new N({uid:i.localId,auth:e,stsTokenManager:d,isAnonymous:c}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Zt(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,f),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new Map;function W(t){j(t instanceof Function,"Expected a class definition");let e=Xr.get(t);return e?(j(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xr.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}jn.type="NONE";const Zr=jn;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,e,r){return`firebase:${t}:${e}:${r}`}class ye{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:o}=this.auth;this.fullUserKey=rt(this.userKey,i.apiKey,o),this.fullPersistenceKey=rt("persistence",i.apiKey,o),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const r=await ut(this.auth,{idToken:e}).catch(()=>{});return r?N._fromGetAccountInfoResponse(this.auth,r,e):null}return N._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new ye(W(Zr),e,n);const i=(await Promise.all(r.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||W(Zr);const c=rt(n,e.config.apiKey,e.name);let d=null;for(const f of r)try{const g=await f._get(c);if(g){let y;if(typeof g=="string"){const S=await ut(e,{idToken:g}).catch(()=>{});if(!S)break;y=await N._fromGetAccountInfoResponse(e,S,g)}else y=N._fromJSON(e,g);f!==o&&(d=y),o=f;break}}catch{}const u=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new ye(o,e,n):(o=u[0],d&&await o._set(c,d.toJSON()),await Promise.all(r.map(async f=>{if(f!==o)try{await f._remove(c)}catch{}})),new ye(o,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zn(e))return"Blackberry";if(ei(e))return"Webos";if(Jn(e))return"Safari";if((e.includes("chrome/")||Yn(e))&&!e.includes("edge/"))return"Chrome";if(Xn(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Kn(t=T()){return/firefox\//i.test(t)}function Jn(t=T()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yn(t=T()){return/crios\//i.test(t)}function Qn(t=T()){return/iemobile/i.test(t)}function Xn(t=T()){return/android/i.test(t)}function Zn(t=T()){return/blackberry/i.test(t)}function ei(t=T()){return/webos/i.test(t)}function hr(t=T()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function po(t=T()){var e;return hr(t)&&!!((e=window.navigator)!=null&&e.standalone)}function vo(){return ks()&&document.documentMode===10}function ti(t=T()){return hr(t)||Xn(t)||ei(t)||Zn(t)||/windows phone/i.test(t)||Qn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t,e=[]){let r;switch(t){case"Browser":r=en(T());break;case"Worker":r=`${en(T())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${je}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=o=>new Promise((c,d)=>{try{const u=e(o);c(u)}catch(u){d(u)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const n of this.queue)await n(e),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t,e={}){return ke(t,"GET","/v2/passwordPolicy",dr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=6;class Io{constructor(e){var n;const r=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??bo,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const r={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,r),this.validatePasswordCharacterOptions(e,r),r.isValid&&(r.isValid=r.meetsMinPasswordLength??!0),r.isValid&&(r.isValid=r.meetsMaxPasswordLength??!0),r.isValid&&(r.isValid=r.containsLowercaseLetter??!0),r.isValid&&(r.isValid=r.containsUppercaseLetter??!0),r.isValid&&(r.isValid=r.containsNumericCharacter??!0),r.isValid&&(r.isValid=r.containsNonAlphanumericCharacter??!0),r}validatePasswordLengthOptions(e,r){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(r.meetsMinPasswordLength=e.length>=n),i&&(r.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(r,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,r,n,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,r,n,i){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tn(this),this.idTokenSubscription=new tn(this),this.beforeStateQueue=new yo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=W(r)),this._initializationPromise=this.queue(async()=>{var n,i,o;if(!this._deleted&&(this.persistenceManager=await ye.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const r=await ut(this,{idToken:e}),n=await N._fromGetAccountInfoResponse(this,r,e);await this.directlySetCurrentUser(n)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(B(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(o=this.redirectUser)==null?void 0:o._redirectEventId,d=n==null?void 0:n._redirectEventId,u=await this.tryRedirectSignIn(e);(!c||c===d)&&(u!=null&&u.user)&&(n=u.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(c){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return p(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await ht(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=to()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(B(this.app))return Promise.reject(le(this));const r=e?Te(e):null;return r&&p(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&p(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return B(this.app)?Promise.reject(le(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return B(this.app)?Promise.reject(le(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(W(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wo(this),r=new Io(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new We("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){const r=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};this.tenantId!=null&&(n.tenantId=this.tenantId),await mo(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&W(e)||this._popupRedirectResolver;p(r,this,"argument-error"),this.redirectPersistenceManager=await ye.create(this,[W(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)==null?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((r=this.currentUser)==null?void 0:r.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const o=typeof r=="function"?r:r.next.bind(r);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(p(d,this,"internal-error"),d.then(()=>{c||o(this.currentUser)}),typeof r=="function"){const u=e.addObserver(r,n,i);return()=>{c=!0,u()}}else{const u=e.addObserver(r);return()=>{c=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return p(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ri(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var r;if(B(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((r=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getToken());return e!=null&&e.error&&Qa(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function At(t){return Te(t)}class tn{constructor(e){this.auth=e,this.observer=null,this.addObserver=$s(r=>this.observer=r)}get next(){return p(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Eo(t){fr=t}function Ao(t){return fr.loadJS(t)}function _o(){return fr.gapiScript}function Co(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t,e){const r=Un(t,"auth");if(r.isInitialized()){const i=r.getImmediate(),o=r.getOptions();if(Se(o,e??{}))return i;H(i,"already-initialized")}return r.initialize({options:e})}function ko(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(W);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Po(t,e,r){const n=At(t);p(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,o=ni(e),{host:c,port:d}=Ro(e),u=d===null?"":`:${d}`,f={url:`${o}//${c}${u}/`},g=Object.freeze({host:c,port:d,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){p(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),p(Se(f,n.config.emulator)&&Se(g,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=f,n.emulatorConfig=g,n.settings.appVerificationDisabledForTesting=!0,sr(c)?Bs(`${o}//${c}${u}`):Do()}function ni(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ro(t){const e=ni(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const o=i[1];return{host:o,port:rn(n.substr(o.length+1))}}else{const[o,c]=n.split(":");return{host:o,port:rn(c)}}}function rn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Do(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return z("not implemented")}_getIdTokenResponse(e){return z("not implemented")}_linkToIdToken(e,r){return z("not implemented")}_getReauthenticationResolver(e){return z("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function we(t,e){return so(t,"POST","/v1/accounts:signInWithIdp",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="http://localhost";class he extends ii{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new he(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):H("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,...o}=r;if(!n||!i)return null;const c=new he(n,i);return c.idToken=o.idToken||void 0,c.accessToken=o.accessToken||void 0,c.secret=o.secret,c.nonce=o.nonce,c.pendingToken=o.pendingToken||null,c}_getIdTokenResponse(e){const r=this.buildRequest();return we(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,we(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,we(e,r)}buildRequest(){const e={requestUri:Lo,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=Ge(r)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends gr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q extends Je{constructor(){super("facebook.com")}static credential(e){return he._fromParams({providerId:Q.PROVIDER_ID,signInMethod:Q.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Q.credentialFromTaggedObject(e)}static credentialFromError(e){return Q.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Q.credential(e.oauthAccessToken)}catch{return null}}}Q.FACEBOOK_SIGN_IN_METHOD="facebook.com";Q.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V extends Je{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return he._fromParams({providerId:V.PROVIDER_ID,signInMethod:V.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return V.credentialFromTaggedObject(e)}static credentialFromError(e){return V.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return V.credential(r,n)}catch{return null}}}V.GOOGLE_SIGN_IN_METHOD="google.com";V.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X extends Je{constructor(){super("github.com")}static credential(e){return he._fromParams({providerId:X.PROVIDER_ID,signInMethod:X.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return X.credentialFromTaggedObject(e)}static credentialFromError(e){return X.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return X.credential(e.oauthAccessToken)}catch{return null}}}X.GITHUB_SIGN_IN_METHOD="github.com";X.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z extends Je{constructor(){super("twitter.com")}static credential(e,r){return he._fromParams({providerId:Z.PROVIDER_ID,signInMethod:Z.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return Z.credentialFromTaggedObject(e)}static credentialFromError(e){return Z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return Z.credential(r,n)}catch{return null}}}Z.TWITTER_SIGN_IN_METHOD="twitter.com";Z.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,i=!1){const o=await N._fromIdTokenResponse(e,n,i),c=nn(n);return new Ae({user:o,providerId:c,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const i=nn(n);return new Ae({user:e,providerId:i,_tokenResponse:n,operationType:r})}}function nn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends ie{constructor(e,r,n,i){super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ft.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,i){return new ft(e,r,n,i)}}function si(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ft._fromErrorAndOperation(t,o,e,n):o})}async function No(t,e,r=!1){const n=await qe(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return Ae._forOperation(t,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(t,e,r=!1){const{auth:n}=t;if(B(n.app))return Promise.reject(le(n));const i="reauthenticate";try{const o=await qe(t,si(n,i,e,t),r);p(o.idToken,n,"internal-error");const c=ur(o.idToken);p(c,n,"internal-error");const{sub:d}=c;return p(t.uid===d,n,"user-mismatch"),Ae._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&H(n,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(t,e,r=!1){if(B(t.app))return Promise.reject(le(t));const n="signIn",i=await si(t,n,e),o=await Ae._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(o.user),o}function Mo(t,e,r,n){return Te(t).onIdTokenChanged(e,r,n)}function Uo(t,e,r){return Te(t).beforeAuthStateChanged(e,r)}const gt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(gt,"1"),this.storage.removeItem(gt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=1e3,Fo=10;class oi extends ai{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ti(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((c,d,u)=>{this.notifyListeners(c,u)});return}const n=e.key;r?this.detachListener():this.stopPolling();const i=()=>{const c=this.storage.getItem(n);!r&&this.localCache[n]===c||this.notifyListeners(n,c)},o=this.storage.getItem(n);vo()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Fo):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},Bo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}oi.type="LOCAL";const xo=oi;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends ai{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}ci.type="SESSION";const li=ci;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new _t(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:o}=r.data,c=this.handlersMap[i];if(!(c!=null&&c.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const d=Array.from(c).map(async f=>f(r.origin,o)),u=await qo(d);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:u})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_t.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t="",e=10){let r="";for(let n=0;n<e;n++)r+=Math.floor(Math.random()*10);return t+r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,c;return new Promise((d,u)=>{const f=mr("",20);i.port1.start();const g=setTimeout(()=>{u(new Error("unsupported_event"))},n);c={messageChannel:i,onMessage(y){const S=y;if(S.data.eventId===f)switch(S.data.status){case"ack":clearTimeout(g),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),d(S.data.response);break;default:clearTimeout(g),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:f,data:r},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(){return window}function Vo(t){x().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(){return typeof x().WorkerGlobalScope<"u"&&typeof x().importScripts=="function"}async function zo(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wo(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Go(){return di()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui="firebaseLocalStorageDb",jo=1,mt="firebaseLocalStorage",hi="fbase_key";class Ye{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Ct(t,e){return t.transaction([mt],e?"readwrite":"readonly").objectStore(mt)}function Ko(){const t=indexedDB.deleteDatabase(ui);return new Ye(t).toPromise()}function fi(){const t=indexedDB.open(ui,jo);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(mt,{keyPath:hi})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(mt)?e(n):(n.close(),await Ko(),e(await fi()))})})}async function sn(t,e,r){const n=Ct(t,!0).put({[hi]:e,value:r});return new Ye(n).toPromise()}async function Jo(t,e){const r=Ct(t,!1).get(e),n=await new Ye(r).toPromise();return n===void 0?null:n.value}function an(t,e){const r=Ct(t,!0).delete(e);return new Ye(r).toPromise()}const Yo=800,Qo=3;class gi{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=fi(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>Qo)throw n;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return di()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_t._getInstance(Go()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var r,n;if(this.activeServiceWorker=await zo(),!this.activeServiceWorker)return;this.sender=new Ho(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(r=e[0])!=null&&r.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wo()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await sn(e,gt,"1"),await an(e,gt)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>sn(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>Jo(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>an(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Ct(i,!1).getAll();return new Ye(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gi.type="LOCAL";const Xo=gi;new Ke(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t,e){return e?W(e):(p(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends ii{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return we(e,this._buildIdpRequest())}_linkToIdToken(e,r){return we(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return we(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function Zo(t){return $o(t.auth,new pr(t),t.bypassAuthState)}function ec(t){const{auth:e,user:r}=t;return p(r,e,"internal-error"),Oo(r,new pr(t),t.bypassAuthState)}async function tc(t){const{auth:e,user:r}=t;return p(r,e,"internal-error"),No(r,new pr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,r,n,i,o=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:o,error:c,type:d}=e;if(c){this.reject(c);return}const u={auth:this.auth,requestUri:r,sessionId:n,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zo;case"linkViaPopup":case"linkViaRedirect":return tc;case"reauthViaPopup":case"reauthViaRedirect":return ec;default:H(this.auth,"internal-error")}}resolve(e){j(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){j(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new Ke(2e3,1e4);async function nc(t,e,r){if(B(t.app))return Promise.reject(O(t,"operation-not-supported-in-this-environment"));const n=At(t);Xa(t,e,gr);const i=mi(n,r);return new ce(n,"signInViaPopup",e,i).executeNotNull()}class ce extends pi{constructor(e,r,n,i,o){super(e,r,i,o),this.provider=n,this.authWindow=null,this.pollId=null,ce.currentPopupAction&&ce.currentPopupAction.cancel(),ce.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return p(e,this.auth,"internal-error"),e}async onExecution(){j(this.filter.length===1,"Popup operations only handle one event");const e=mr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(O(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(O(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ce.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if((n=(r=this.authWindow)==null?void 0:r.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(O(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rc.get())};e()}}ce.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="pendingRedirect",nt=new Map;class sc extends pi{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=nt.get(this.auth._key());if(!e){try{const n=await ac(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}nt.set(this.auth._key(),e)}return this.bypassAuthState||nt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ac(t,e){const r=lc(e),n=cc(t);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}function oc(t,e){nt.set(t._key(),e)}function cc(t){return W(t._redirectPersistence)}function lc(t){return rt(ic,t.config.apiKey,t.name)}async function dc(t,e,r=!1){if(B(t.app))return Promise.reject(le(t));const n=At(t),i=mi(n,e),c=await new sc(n,i,r).execute();return c&&!r&&(delete c.user._redirectEventId,await n._persistUserIfCurrent(c.user),await n._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=600*1e3;class hc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fc(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!vi(e)){const i=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";r.onError(O(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uc&&this.cachedEventUids.clear(),this.cachedEventUids.has(on(e))}saveEventToCache(e){this.cachedEventUids.add(on(e)),this.lastProcessedEventTime=Date.now()}}function on(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vi({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fc(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vi(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gc(t,e={}){return ke(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pc=/^https?/;async function vc(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gc(t);for(const r of e)try{if(yc(r))return}catch{}H(t,"unauthorized-domain")}function yc(t){const e=Xt(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&c.hostname===n}if(!pc.test(r))return!1;if(mc.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new Ke(3e4,6e4);function cn(){const t=x().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function bc(t){return new Promise((e,r)=>{var i,o,c;function n(){cn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cn(),r(O(t,"network-request-failed"))},timeout:wc.get()})}if((o=(i=x().gapi)==null?void 0:i.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((c=x().gapi)!=null&&c.load)n();else{const d=Co("iframefcb");return x()[d]=()=>{gapi.load?n():r(O(t,"network-request-failed"))},Ao(`${_o()}?onload=${d}`).catch(u=>r(u))}}).catch(e=>{throw it=null,e})}let it=null;function Ic(t){return it=it||bc(t),it}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=new Ke(5e3,15e3),Ec="__/auth/iframe",Ac="emulator/auth/iframe",_c={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tc(t){const e=t.config;p(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?lr(e,Ac):`https://${t.config.authDomain}/${Ec}`,n={apiKey:e.apiKey,appName:t.name,v:je},i=Cc.get(t.config.apiHost);i&&(n.eid=i);const o=t._getFrameworks();return o.length&&(n.fw=o.join(",")),`${r}?${Ge(n).slice(1)}`}async function kc(t){const e=await Ic(t),r=x().gapi;return p(r,t,"internal-error"),e.open({where:document.body,url:Tc(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_c,dontclear:!0},n=>new Promise(async(i,o)=>{await n.restyle({setHideOnLeave:!1});const c=O(t,"network-request-failed"),d=x().setTimeout(()=>{o(c)},Sc.get());function u(){x().clearTimeout(d),i(n)}n.ping(u).then(u,()=>{o(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rc=500,Dc=600,Lc="_blank",Nc="http://localhost";class ln{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Oc(t,e,r,n=Rc,i=Dc){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-n)/2,0).toString();let d="";const u={...Pc,width:n.toString(),height:i.toString(),top:o,left:c},f=T().toLowerCase();r&&(d=Yn(f)?Lc:r),Kn(f)&&(e=e||Nc,u.scrollbars="yes");const g=Object.entries(u).reduce((S,[L,se])=>`${S}${L}=${se},`,"");if(po(f)&&d!=="_self")return $c(e||"",d),new ln(null);const y=window.open(e||"",d,g);p(y,t,"popup-blocked");try{y.focus()}catch{}return new ln(y)}function $c(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="__/auth/handler",Uc="emulator/auth/handler",Bc=encodeURIComponent("fac");async function dn(t,e,r,n,i,o){p(t.config.authDomain,t,"auth-domain-config-required"),p(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:je,eventId:i};if(e instanceof gr){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Os(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,y]of Object.entries({}))c[g]=y}if(e instanceof Je){const g=e.getScopes().filter(y=>y!=="");g.length>0&&(c.scopes=g.join(","))}t.tenantId&&(c.tid=t.tenantId);const d=c;for(const g of Object.keys(d))d[g]===void 0&&delete d[g];const u=await t._getAppCheckToken(),f=u?`#${Bc}=${encodeURIComponent(u)}`:"";return`${Fc(t)}?${Ge(d).slice(1)}${f}`}function Fc({config:t}){return t.emulator?lr(t,Uc):`https://${t.authDomain}/${Mc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="webStorageSupport";class xc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=li,this._completeRedirectFn=dc,this._overrideRedirectResult=oc}async _openPopup(e,r,n,i){var c;j((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const o=await dn(e,r,n,Xt(),i);return Oc(e,o,mr())}async _openRedirect(e,r,n,i){await this._originValidation(e);const o=await dn(e,r,n,Xt(),i);return Vo(o),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:o}=this.eventManagers[r];return i?Promise.resolve(i):(j(o,"If manager is not set, promise should be"),o)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await kc(e),n=new hc(e);return r.register("authEvent",i=>(p(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(qt,{type:qt},i=>{var c;const o=(c=i==null?void 0:i[0])==null?void 0:c[qt];o!==void 0&&r(!!o),H(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=vc(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return ti()||Jn()||hr()}}const qc=xc;var un="@firebase/auth",hn="1.13.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){p(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zc(t){Fe(new Ee("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=n.options;p(c&&!c.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:c,authDomain:d,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ri(t)},f=new So(n,i,o,u);return ko(f,r),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),Fe(new Ee("auth-internal",e=>{const r=At(e.getProvider("auth").getImmediate());return(n=>new Hc(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),pe(un,hn,Vc(t)),pe(un,hn,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=300,Gc=Nn("authIdTokenMaxAge")||Wc;let fn=null;const jc=t=>async e=>{const r=e&&await e.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>Gc)return;const i=r==null?void 0:r.token;fn!==i&&(fn=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Kc(t=Ua()){const e=Un(t,"auth");if(e.isInitialized())return e.getImmediate();const r=To(t,{popupRedirectResolver:qc,persistence:[Xo,xo,li]}),n=Nn("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(n,location.origin);if(location.origin===o.origin){const c=jc(o.toString());Uo(r,c,()=>c(r.currentUser)),Mo(r,d=>c(d))}}const i=Ss("auth");return i&&Po(r,`http://${i}`),r}function Jc(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Eo({loadJS(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const o=O("internal-error");o.customData=i,r(o)},n.type="text/javascript",n.charset="UTF-8",Jc().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zc("Browser");const Yc={apiKey:"AIzaSyAh668pltxmHVtAi_dN1cLO2faTqRyVbUU",authDomain:"cosmetic-app-75fb9.firebaseapp.com",projectId:"cosmetic-app-75fb9",storageBucket:"cosmetic-app-75fb9.firebasestorage.app",messagingSenderId:"1075730526246",appId:"1:1075730526246:web:ac4b809f7353e4bbac36e7",measurementId:"G-KVHDLM71LR"};let Ze=null;function Qc(){if(!Ze){const t=Bn(Yc);Ze=Kc(t),Ze.useDeviceLanguage()}return Ze}async function Xc(){const t=Qc(),e=new V;return e.setCustomParameters({prompt:"select_account"}),(await nc(t,e)).user.getIdToken()}function Zc(t){const e=(t==null?void 0:t.token)||(t==null?void 0:t.accessToken)||(t==null?void 0:t.jwt)||"",r={id:t==null?void 0:t.id,email:t==null?void 0:t.email,fullName:t==null?void 0:t.fullName,phone:(t==null?void 0:t.phone)||"",profileImage:(t==null?void 0:t.profileImage)||""};e&&localStorage.setItem(v.storageKeys.accessToken,e),localStorage.setItem(v.storageKeys.user,JSON.stringify(r)),localStorage.setItem(v.storageKeys.role,(t==null?void 0:t.role)||""),s.accessToken=e,s.user=r,s.role=(t==null?void 0:t.role)||""}function vr(){var t,e;localStorage.removeItem(v.storageKeys.accessToken),localStorage.removeItem(v.storageKeys.legacyAccessToken),localStorage.removeItem(v.storageKeys.user),localStorage.removeItem(v.storageKeys.legacyUser),localStorage.removeItem(v.storageKeys.role),s.accessToken="",s.user=null,s.role="",Wt(),F(),Gt(),Ve(),ze(),s.myReviews=[],s.myReviewsLoading=!1,s.myReviewsError="",(t=a.myReviewsDialog)!=null&&t.open&&a.myReviewsDialog.close(),(e=a.writeReviewDialog)!=null&&e.open&&a.writeReviewDialog.close(),_e()}function _(){return!!Et()}function R(){Mr("login"),I(h("auth.loginRequired"),"warning")}async function yi(){if(!Et()){_e();return}const t=await m("/api/users/me",{requireAuth:!0,showError:!1,silentAuth:!0});if(!t){vr();return}s.user=t,localStorage.setItem(v.storageKeys.user,JSON.stringify(t)),_e(),await Promise.allSettled([De(),fe()])}function _e(){const t=a.loginButton.querySelector("span");t&&(_()&&s.user?(t.textContent=yr(s.user.fullName)||h("profile.myProfile"),a.loginButton.setAttribute("aria-label",h("profile.myProfile"))):(t.textContent=h("auth.login"),a.loginButton.setAttribute("aria-label",h("auth.login"))))}function yr(t=""){return String(t).trim().split(/\s+/)[0]||""}function D(t){const e=Sn(),r={uz:"so‘m",en:"UZS",ru:"сум",ko:"UZS"};return`${new Intl.NumberFormat(e==="uz"?"uz-UZ":e).format(E(t))} ${r[e]||"UZS"}`}function wr(t){return D(t)}function Pe(t){if(!t)return"";const e=new Date(t);if(Number.isNaN(e.getTime()))return String(t);const r=Sn();return new Intl.DateTimeFormat(r,{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(e)}function br(t=""){return h(`status.${t}`)||t||h("common.unknown")}function gn(t,e){t&&(t.hidden=!e)}function Re(){gn(a.productsMode,s.demoProducts),gn(a.dealsMode,s.demoDeals)}function Ce(t,e=12){t.innerHTML=Array.from({length:e},()=>'<div class="skeleton-card"></div>').join("")}function ne(t,e,r=h("home.showAll")){t.innerHTML=`
    <div class="empty-state">
      <strong>${l(e)}</strong>
      <button class="secondary-button" data-show-all type="button">${l(r)}</button>
    </div>
  `}function Ir(t,e={}){m(t,{...e,showError:!1}).catch(()=>{})}function mn(t,e,r){if(!t||String(t).startsWith("demo-"))return;const n=`${s.sessionId}:${e}:${t}`;s.impressionsSent.has(n)||(s.impressionsSent.add(n),Ir("/events/impression",{method:"POST",body:JSON.stringify({productId:Number(t),screen:e,position:r,queryText:s.currentSearchQuery||null,sessionId:s.sessionId})}))}function el(t){!t||String(t).startsWith("demo-")||Ir("/events/click",{method:"POST",query:{productId:t}})}function tl(t){!t||String(t).startsWith("demo-")||Ir("/events/view",{method:"POST",query:{productId:t}})}function Sr(t){if(!("IntersectionObserver"in window)){t.querySelectorAll("[data-product]").forEach(e=>{mn(e.dataset.product,e.dataset.screen||"home",Number(e.dataset.position||0))});return}s.impressionObserver||(s.impressionObserver=new IntersectionObserver(e=>{e.forEach(r=>{if(!r.isIntersecting)return;const n=r.target;mn(n.dataset.product,n.dataset.screen||"home",Number(n.dataset.position||0)),s.impressionObserver.unobserve(n)})},{threshold:.35})),t.querySelectorAll("[data-product]").forEach(e=>s.impressionObserver.observe(e))}function He(t,e={}){const r=s.favoriteIds.has(String(t.id))||!!t.favorite,n=e.screen||s.currentGridScreen||"home",i=e.position??0;return`
    <article class="product-card" data-product="${l(t.id)}" data-screen="${l(n)}" data-position="${l(i)}">
      <div class="badge-row">
        ${t.discountPercent?`<span class="badge">-${t.discountPercent}%</span>`:""}
        ${t.todayDeal?'<span class="badge today">Today deal</span>':""}
      </div>
      <button class="icon-button favorite-float ${r?"active":""}" data-favorite="${l(t.id)}" type="button" aria-label="Sevimlilar">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
      </button>
      <img class="product-image" src="${l(t.image)}" alt="${l(t.name)}" loading="lazy" />
      <div class="product-info">
        <div class="product-meta">
          <span class="brand-name">${l(t.brand||t.category||"BEAUTY SKIN KOREA")}</span>
          <span class="rating">${t.ratingAvg?`★ ${t.ratingAvg.toFixed(1)} (${t.reviewCount})`:"★ 0 (0)"}</span>
        </div>
        <h3>${l(t.name)}</h3>
        <p>${l(t.description||`${t.soldCount} dona sotilgan`)}</p>
        <div class="price-row">
          <span>${D(t.finalPrice)}</span>
          ${t.discountPercent?`<span class="old-price">${D(t.originalPrice)}</span>`:""}
        </div>
        <p class="hint">${l(h("product.sold",{count:t.soldCount}))}</p>
      </div>
      <div class="card-actions">
        <button class="primary-button" data-add="${l(t.id)}" type="button">${l(h("product.addToCart"))}</button>
        <button class="icon-button" data-detail="${l(t.id)}" type="button" aria-label="${l(h("product.viewDetails"))}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>
    </article>
  `}function P(t,e,r,n={}){if(!e.length){ne(t,r);return}t.innerHTML=e.map((i,o)=>He(i,{...n,position:o})).join(""),Sr(t)}function Er(t,e="Rating"){const r=Math.min(5,Math.max(0,Math.round(E(t))));return`
    <span class="stars" role="img" aria-label="${l(e)} ${r} out of 5">
      ${Array.from({length:5},(n,i)=>`<span class="${i<r?"filled":""}">★</span>`).join("")}
    </span>
  `}function rl(t){const e=t.length,r=e?t.reduce((n,i)=>n+E(i.rating),0)/e:0;return{count:e,average:r}}async function Tt(){var t,e,r;s.selectedCategory="ALL",s.currentSearchQuery="",s.currentGridScreen="home",s.feedPage=0,a.title.textContent=h("home.popular"),a.status.textContent=h("home.loading"),Ce(a.grid,12),Ce(a.dealsGrid,6);try{await Promise.all([al(),ol(),fl()]),await nl()||await Promise.all([Tr(),yl()]),await ml(),await J()}catch(n){console.error("Home loading failed:",n),s.demoProducts=!1,s.demoDeals=!1,ne(a.grid,h("common.serverFailed"),h("common.tryAgain"))}finally{((t=a.status)==null?void 0:t.textContent)===h("home.loading")&&(a.status.textContent=""),(((e=a.dealsStatus)==null?void 0:e.textContent)===h("home.loading")||((r=a.dealsStatus)==null?void 0:r.textContent)==="Yuklanmoqda...")&&(a.dealsStatus.textContent="")}}async function nl(){const t=await m("/api/home",{query:{limit:10,page:0,size:20},showError:!1});if(t===null)return s.homeLoadedFromApi=!1,a.homeApiSections.hidden=!0,!1;const e=b(t.hits||[]).map(A),r=b(t.discounts||[]).map(A),n=b(t.newArrivals||[]).map(A),i=b(t.popular).map(A);return e.length||r.length||n.length||i.length?(s.homeLoadedFromApi=!0,s.products=i.length?i:[...e,...r,...n].filter(il),s.todayDeals=r,s.demoProducts=!1,s.demoDeals=!1,K(),s.homeApiSections={hits:e,discounts:r,newArrivals:n},wi({hits:e,discounts:r,newArrivals:n}),P(a.grid,s.products,h("home.noProducts"),{screen:"home"}),P(a.dealsGrid,r.slice(0,8),"Chegirmalar topilmadi.",{screen:"home-discounts"}),a.status.textContent="",a.dealsStatus.textContent="",Re(),!0):(s.homeLoadedFromApi=!1,a.homeApiSections.hidden=!0,!1)}function wi(t){const r=[["home.popular","home.recommended",t.hits,"home-hits"],["home.discounts","home.todayOnly",t.discounts,"home-discounts"],["home.newArrivals","home.categories",t.newArrivals,"home-new"]].filter(([,,n])=>n.length).map(([n,i,o,c])=>`
      <section class="home-product-strip">
        <div class="section-head">
          <div><p class="eyebrow">${l(h(i))}</p><h2>${l(h(n))}</h2></div>
        </div>
        <div class="product-grid home-strip-grid">
          ${o.slice(0,10).map((d,u)=>He(d,{screen:c,position:u})).join("")}
        </div>
      </section>
    `).join("");a.homeApiSections.hidden=!r,a.homeApiSections.innerHTML=r,Sr(a.homeApiSections)}function il(t,e,r){return(t==null?void 0:t.id)!==void 0&&r.findIndex(n=>String(n.id)===String(t.id))===e}const sl=["SKINCARE","MAKEUP","COLLAGEN","HAIR_CARE","FRAGRANCE"];async function al(){const t=await m("/api/categories",{showError:!1}),e=b(t).map(es).filter(Boolean);e.length?(s.categories=e,s.demoCategories=!1):(s.categories=sl,s.demoCategories=!1),Re(),Rt()}async function ol(){const t=await m("/api/banners",{showError:!1}),e=b(t).map(r=>({id:r.id,title:r.title||"",subtitle:r.subtitle||"",imageUrl:r.imageUrl||"",linkType:String(r.linkType||"NONE").toUpperCase(),linkId:r.linkId,position:E(r.position)})).sort((r,n)=>r.position-n.position);s.banners=e,hl()}const cl=5e3;let st=null,er=!1,Me=null,pn=0;function kt(){var t;return(t=a.banners)==null?void 0:t.querySelector(".banner-track")}function Pt(){return s.banners.length}function Ar(){const t=kt();if(!t)return 0;const e=t.clientWidth||1;return Math.max(0,Math.min(Pt()-1,Math.round(t.scrollLeft/e)))}function Ht(){var e;const t=Ar();(e=a.banners)==null||e.querySelectorAll("[data-banner-dot]").forEach(r=>{const n=Number(r.dataset.bannerDot)===t;r.classList.toggle("active",n),r.setAttribute("aria-selected",n?"true":"false")})}function _r(t,e="smooth"){const r=kt(),n=Pt();if(!r||!n)return;const i=(t%n+n)%n;r.scrollTo({left:i*r.clientWidth,behavior:e})}function bi(){_r(Ar()+1)}function ll(){_r(Ar()-1)}function Cr(){st&&(clearInterval(st),st=null)}function pt(){Cr(),!(er||Pt()<=1)&&(st=setInterval(()=>bi(),cl))}function dl(){Cr();const t=kt();t&&Me&&t.removeEventListener("scroll",Me),Me=null,a.banners&&(a.banners.onmouseenter=null,a.banners.onmouseleave=null)}function ul(){dl();const t=kt();if(!t||Pt()<=1){Ht();return}Me=()=>{clearTimeout(pn),pn=setTimeout(Ht,80)},t.addEventListener("scroll",Me,{passive:!0}),a.banners.onmouseenter=()=>{er=!0,Cr()},a.banners.onmouseleave=()=>{er=!1,pt()},Ht(),pt()}function hl(){if(!s.banners.length){a.banners.hidden=!0,a.banners.innerHTML="";return}a.banners.hidden=!1,a.banners.innerHTML=`
    <button class="banner-arrow prev" data-banner-nav="prev" type="button" aria-label="Oldingi banner">‹</button>
    <div class="banner-track">
      ${s.banners.map(t=>`
        <article class="banner-card ${t.imageUrl?"has-image":""}" data-banner-link-type="${l(t.linkType)}" data-banner-link-id="${l(t.linkId??"")}">
          ${t.imageUrl?`<img src="${l(t.imageUrl)}" alt="${l(t.title||"Banner")}" />`:`
          <div>
            <strong>${l(t.title||"BEAUTY SKIN KOREA")}</strong>
            ${t.subtitle?`<p>${l(t.subtitle)}</p>`:""}
          </div>`}
        </article>
      `).join("")}
    </div>
    <button class="banner-arrow next" data-banner-nav="next" type="button" aria-label="Keyingi banner">›</button>
    <div class="banner-dots" role="tablist" aria-label="Banner slides">
      ${s.banners.map((t,e)=>`
        <button
          class="banner-dot ${e===0?"active":""}"
          type="button"
          data-banner-dot="${e}"
          role="tab"
          aria-label="Banner ${e+1}"
          aria-selected="${e===0?"true":"false"}"
        ></button>
      `).join("")}
    </div>
  `,ul()}async function fl(){const t=await m("/api/announcements",{showError:!1}),e=b(t).map(r=>({title:r.title||"",message:r.content||r.message||"",type:String(r.type||"SYSTEM").toUpperCase(),createdAt:r.createdAt||""})).filter(r=>r.title||r.message);s.announcements=e,gl()}function gl(){if(!s.announcements.length){a.announcements.hidden=!0,a.announcements.innerHTML="";return}a.announcements.hidden=!1,a.announcements.innerHTML=s.announcements.slice(0,3).map(t=>`
    <article class="announcement-item ${t.type.toLowerCase()}">
      <strong>${l(t.title||t.type)}</strong>
      <span>${l(t.message)}</span>
    </article>
  `).join("")}async function ml(){const t=Ii();if(!t.length){a.recentlyViewedSection.hidden=!0;return}const e=await m("/api/products/by-ids",{method:"POST",body:JSON.stringify(t.map(Number).filter(Number.isFinite)),showError:!1}),r=b(e).map(A).filter(n=>n.id);if(!r.length){a.recentlyViewedSection.hidden=!0;return}a.recentlyViewedSection.hidden=!1,P(a.recentlyViewedGrid,r,"Recently viewed is empty.",{screen:"recent"})}function Ii(){try{return JSON.parse(localStorage.getItem(v.storageKeys.recentProducts)||"[]").filter(Boolean)}catch{return[]}}function pl(t){if(!t||String(t).startsWith("demo-"))return;const e=[String(t),...Ii().filter(r=>String(r)!==String(t))].slice(0,12);localStorage.setItem(v.storageKeys.recentProducts,JSON.stringify(e))}async function Tr(){try{a.status.textContent="Yuklanmoqda...",Ce(a.grid,12);const t=await m("/api/products",{query:{page:0,size:v.defaultPageSize},showError:!1});console.info("[LOAD PRODUCTS]",t);const e=b(t).map(A);e.length?(s.products=e,s.demoProducts=!1,P(a.grid,s.products,"Mahsulot topilmadi.")):(s.products=[],s.demoProducts=!1,ne(a.grid,"Mahsulot topilmadi.")),K()}catch(t){console.error("[LOAD PRODUCTS FAILED]",t),s.demoProducts=!1,ne(a.grid,"API data failed to load.")}finally{Re(),a.status.textContent=""}}async function vl(){if(s.feedLoading)return;s.feedLoading=!0,a.loadMore.disabled=!0,a.loadMore.textContent="Yuklanmoqda...";let t=[];const e=await m("/api/home/feed",{query:{limit:30},showError:!1});if(t=b(e).map(A),!t.length){s.feedPage+=1;const i=await m("/api/products",{query:{page:s.feedPage,size:v.defaultPageSize},showError:!1});t=b(i).map(A)}const r=new Set(s.products.map(i=>String(i.id))),n=t.filter(i=>i.id&&!r.has(String(i.id)));s.products=[...s.products,...n],K(),P(a.grid,s.products,"Mahsulot topilmadi.",{screen:s.currentGridScreen||"home"}),s.feedLoading=!1,a.loadMore.disabled=!1,a.loadMore.textContent=n.length?"Yana yuklash":"Boshqa mahsulot topilmadi"}async function yl(){try{a.dealsStatus.textContent="Yuklanmoqda...",Ce(a.dealsGrid,5);const t=await m("/api/products/today-deals",{showError:!1});console.info("[LOAD TODAY DEALS]",t);const e=b(t).map(A);s.todayDeals=e,s.demoDeals=!1,P(a.dealsGrid,s.todayDeals.slice(0,8),"Mahsulot topilmadi."),K()}catch(t){console.error("[LOAD TODAY DEALS FAILED]",t),s.demoDeals=!1,ne(a.dealsGrid,"API data failed to load.")}finally{Re(),a.dealsStatus.textContent=""}}function Rt(){const t=["ALL",...s.categories].map(e=>`
    <button class="chip ${s.selectedCategory===e?"active":""}" data-category="${l(e)}" type="button">
      ${l(e==="ALL"?h("home.all"):Ie(e))}
    </button>
  `);a.categoryToolbar.innerHTML=t.join(""),wl(),bl()}function wl(){const t=["ALL",...s.categories];a.catalogList.innerHTML=t.map(e=>`
    <button class="catalog-item ${s.selectedCategory===e?"active":""}" data-category="${l(e)}" type="button">
      <span>${l(e==="ALL"?h("home.showAll"):Ie(e))}</span>
      <span>${e==="ALL"?"→":"›"}</span>
    </button>
  `).join("")}function bl(){a.quickCategoryGrid.innerHTML=Gi.map(t=>`
    <button class="quick-card" data-category="${l(t.category)}" type="button">
      <span>${l(t.icon)}</span>
      ${l(Ie(t.category))}
    </button>
  `).join("")}function Dt(){s.currentRoute="home",a.homeView.hidden=!1,a.productDetailPage.hidden=!0,document.title="BEAUTY SKIN KOREA"}function Il(){s.currentRoute="product",a.homeView.hidden=!0,a.productDetailPage.hidden=!1,window.scrollTo({top:0,behavior:"smooth"})}function tr(){window.location.hash&&window.location.hash!=="#/"&&window.location.hash!=="#"?window.location.hash="#/":Dt()}async function vt(){const e=(window.location.hash||"#/").match(/^#\/product\/([^/?#]+)/);if(e){Il(),await Al(decodeURIComponent(e[1])),window.scrollTo({top:0,behavior:"smooth"});return}Dt()}async function Sl(t){const e=t.trim();if(s.currentSearchQuery=e,s.currentGridScreen=e?"search":"home",s.currentRoute==="product"&&(window.location.hash="#/",Dt()),!e){s.selectedCategory="ALL",Rt(),a.title.textContent=h("home.popular"),await Tr();return}a.title.textContent=`"${e}" qidiruvi`,a.status.textContent=h("home.loading"),Ce(a.grid,10);const r=await m("/api/products/search",{query:{q:e,page:0,size:v.defaultPageSize},showError:!1}),n=b(r).map(A);s.products=n,K(),P(a.grid,s.products,h("home.noProducts"),{screen:"search"}),a.status.textContent=""}async function kr(t){if(s.currentRoute==="product"&&(window.location.hash="#/",Dt()),s.selectedCategory=t,s.currentGridScreen=t==="ALL"?"home":"category",s.currentSearchQuery="",Rt(),t==="ALL"){a.title.textContent=h("home.popular"),await Tr();return}a.title.textContent=Ie(t),a.status.textContent=h("home.loading"),Ce(a.grid,10);const e=await m("/api/products/category",{query:{category:t,page:0,size:v.defaultPageSize},showError:!1}),r=b(e).map(A);s.products=r,K(),P(a.grid,s.products,h("home.noProducts"),{screen:"category"}),a.status.textContent=""}function Pr(t){if(!t)return;const e=`#/product/${encodeURIComponent(t)}`;window.location.hash===e?vt():window.location.hash=e}async function El(t){Pr(t)}async function Al(t){var n;s.currentRoute="product",s.detailLoading=!0,s.detailError="",s.selectedDetailProduct=null,s.recommendedProducts=[],s.recommendedSimilar=[],s.recommendedOthers=[],s.recommendationsError="",_l(!0);const e=await m(`/api/products/${t}`,{showError:!0}),r=A(e||s.products.find(i=>String(i.id)===String(t))||{});if(s.detailLoading=!1,!r.id){s.detailError=s.lastApiError||"Mahsulot topilmadi.",Cl();return}r.favorite=s.favoriteIds.has(String(r.id))||r.favorite,s.selectedDetailProduct=r,s.selectedVariantId=((n=Si(r))==null?void 0:n.id)||null,s.selectedQuantity=1,document.title=`${r.name} - BEAUTY SKIN KOREA`,pl(r.id),tl(r.id),q(r),Rr(r.id),Tl(r)}function _l(t=!1){const e=t?a.productDetailPageContent:a.detailContent;e.innerHTML=`
    ${t?'<div class="breadcrumbs"><button data-route-home type="button">Home</button><span>/</span><span>Loading</span></div>':`
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
  `}function Cl(){a.productDetailPageContent.innerHTML=`
    <div class="detail-error-page">
      <strong>${l(h("product.notFound"))}</strong>
      <p>${l(s.detailError||"Mahsulot topilmadi.")}</p>
      <button class="primary-button" data-route-home type="button">${l(h("product.backToShopping"))}</button>
    </div>
  `}function q(t){const e=t.variants.find(f=>String(f.id)===String(s.selectedVariantId))||null,r=[...t.images,...t.detailImages].filter(Boolean),n=(e==null?void 0:e.discountPrice)??(e==null?void 0:e.price)??t.finalPrice,i=(e==null?void 0:e.price)??t.originalPrice,o=(e==null?void 0:e.stock)??t.stock,c=s.favoriteIds.has(String(t.id))||!!t.favorite,d=s.currentRoute==="product",u=d?a.productDetailPageContent:a.detailContent;u.innerHTML=`
    ${d?`
      <div class="breadcrumbs">
        <button data-route-home type="button">${l(h("product.home")||h("home.all"))}</button>
        <span>/</span>
        <button data-category="${l(t.category||"ALL")}" type="button">${l(t.category?Ie(t.category):h("header.catalog"))}</button>
        <span>/</span>
        <span>${l(_i(t.name,42))}</span>
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
        <img src="${l(t.image)}" alt="${l(t.name)}" />
        ${r.length>1?`<div class="detail-thumbs">${r.slice(0,8).map(f=>`<img src="${l(f)}" alt="${l(t.name)}" />`).join("")}</div>`:""}
      </div>
      <div class="detail-info">
        <p class="hint">${l(t.brand||t.category)} · ★ ${t.ratingAvg.toFixed(1)} (${t.reviewCount}) · ${t.soldCount} dona sotilgan</p>
        <h2 class="detail-title">${l(t.name)}</h2>
        <h3>${D(n)}</h3>
        ${i>n?`<p class="old-price">${D(i)}</p>`:""}
        <button class="secondary-button detail-favorite ${c?"active":""}" data-detail-favorite="${l(t.id)}" type="button">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
          ${l(h(c?"product.saved":"product.save"))}
        </button>
        ${t.variants.length?Dl(t):`<p class="hint">${l(h("product.variantUnavailable"))}</p>`}
        <p class="hint">${l(h("product.stock",{count:o??0}))}</p>
        <div class="quantity-row">
          <button class="secondary-button" data-qty="minus" type="button">-</button>
          <input id="quantityInput" value="${s.selectedQuantity}" inputmode="numeric" />
          <button class="secondary-button" data-qty="plus" type="button">+</button>
        </div>
        <button class="primary-button full" data-detail-add type="button">${l(h("product.addToCartFull"))}</button>
        <div class="delivery-info">
          <span>${l(h("product.delivery"))}</span>
          <span>${l(h("product.secure"))}</span>
          <span>${l(h("product.original"))}</span>
        </div>
        <div class="detail-tabs">
          <section><strong>${l(h("product.description"))}</strong><p class="hint">${l(t.description||h("common.unavailable"))}</p></section>
          ${t.detailImages.length?`<section><strong>${l(h("product.detailImages"))}</strong><div class="detail-image-stack">${t.detailImages.map(f=>`<img src="${l(f)}" alt="${l(t.name)} detail" loading="lazy" />`).join("")}</div></section>`:""}
          <section><strong>${l(h("product.details"))}</strong><p class="hint">${l(h("home.categories"))}: ${l(t.category?Ie(t.category):"-")} · Brand: ${l(t.brand||"-")}</p></section>
          <section><strong>${l(h("product.reviews"))}</strong>${Pl(t.id)}</section>
        </div>
      </div>
    </div>
    ${d?kl():""}
    ${d?`
      <div class="mobile-buy-bar">
        <strong>${D(n)}</strong>
        <button class="primary-button" data-detail-add type="button">${l(h("product.addToCart"))}</button>
      </div>
    `:""}
  `,Sr(u)}async function Tl(t){var c;s.recommendationsLoading=!0,s.recommendationsError="",q(t);const e=await m(`/api/products/${t.id}/recommend`,{query:{similar:12,others:24,seed:s.sessionId},showError:!1}),r=b((e==null?void 0:e.similar)||[]).map(A).filter(d=>String(d.id)!==String(t.id)),n=b((e==null?void 0:e.others)||[]).map(A).filter(d=>String(d.id)!==String(t.id));if(r.length||n.length){s.recommendationsLoading=!1,s.recommendedProducts=[],s.recommendedSimilar=r.slice(0,12),s.recommendedOthers=n.slice(0,12),q(s.selectedDetailProduct);return}let i=null;t.category&&(i=await m("/api/products/category",{query:{category:t.category,page:0,size:12},showError:!1}));let o=b(i).map(A).filter(d=>String(d.id)!==String(t.id));o.length||(i=await m("/api/products",{query:{page:0,size:12},showError:!1}),o=b(i).map(A).filter(d=>String(d.id)!==String(t.id))),s.recommendationsLoading=!1,!o.length&&i===null&&(s.recommendationsError=s.lastApiError||"Recommendations could not be loaded."),s.recommendedProducts=o.slice(0,12).map(d=>({...d,favorite:s.favoriteIds.has(String(d.id))||d.favorite})),s.recommendedSimilar=[],s.recommendedOthers=[],((c=s.selectedDetailProduct)==null?void 0:c.id)!==void 0&&String(s.selectedDetailProduct.id)===String(t.id)&&q(s.selectedDetailProduct)}function kl(){if(s.recommendationsLoading)return`
      <section class="recommended-section">
        <div class="section-head"><div><p class="eyebrow">${l(h("home.recommended"))}</p><h2>${l(h("home.recommended"))}</h2></div></div>
        <div class="recommended-grid product-grid">
          <div class="skeleton-card"></div><div class="skeleton-card"></div><div class="skeleton-card"></div><div class="skeleton-card"></div>
        </div>
      </section>
    `;if(s.recommendationsError)return`
      <section class="recommended-section">
        <div class="detail-error-page compact">
          <strong>Recommendations unavailable</strong>
          <p>${l(s.recommendationsError)}</p>
        </div>
      </section>
    `;const t=[[h("home.similar"),s.recommendedSimilar||[],"recommendations"],[h("home.others"),s.recommendedOthers||[],"recommendations"]].filter(([,e])=>e.length);return t.length?t.map(([e,r,n])=>`
      <section class="recommended-section">
        <div class="section-head">
          <div>
          <p class="eyebrow">${l(h("home.recommended"))}</p>
            <h2>${l(e)}</h2>
          </div>
        </div>
        <div class="recommended-grid product-grid">
          ${r.map((i,o)=>He(i,{screen:n,position:o})).join("")}
        </div>
      </section>
    `).join(""):s.recommendedProducts.length?`
    <section class="recommended-section">
      <div class="section-head">
        <div>
          <p class="eyebrow">${l(h("home.recommended"))}</p>
          <h2>${l(h("home.recommended"))}</h2>
        </div>
      </div>
      <div class="recommended-grid product-grid">
        ${s.recommendedProducts.map(He).join("")}
      </div>
    </section>
  `:""}async function Rr(t){var n,i;if(!t)return;const e=String(t);s.productReviewsLoading[e]=!0,s.productReviewsError[e]="",((n=s.selectedDetailProduct)==null?void 0:n.id)!==void 0&&String(s.selectedDetailProduct.id)===e&&q(s.selectedDetailProduct);const r=await m(`/api/reviews/product/${t}`,{showError:!1});s.productReviewsLoading[e]=!1,r===null?s.productReviewsError[e]=s.lastApiError||"Reviews could not be loaded.":s.productReviewsByProductId[e]=b(r).map(_n),((i=s.selectedDetailProduct)==null?void 0:i.id)!==void 0&&String(s.selectedDetailProduct.id)===e&&q(s.selectedDetailProduct)}function Pl(t){const e=String(t),r=s.productReviewsByProductId[e]||[],n=s.productReviewsLoading[e],i=s.productReviewsError[e];if(n)return'<div class="reviews-loading"><div class="skeleton-card"></div></div>';if(i)return`
      <div class="reviews-inline-error">
        <p>${l(i)}</p>
        <button class="secondary-button" data-reviews-retry="${l(t)}" type="button">Retry</button>
      </div>
    `;if(!r.length)return`<div class="reviews-empty"><strong>${l(h("reviews.none"))}</strong><p class="hint">${l(h("reviews.none"))}</p></div>`;const o=rl(r);return`
    <div class="review-summary">
      <div>
        <strong>${o.average.toFixed(1)}</strong>
        ${Er(o.average,"Average rating")}
      </div>
      <p class="hint">${o.count} ${l(h("product.reviews"))}</p>
    </div>
    <div class="review-list">
      ${r.map(Rl).join("")}
    </div>
  `}function Rl(t){return`
    <article class="review-card">
      <div class="review-head">
        <div>
          <strong>${l(t.userName)}</strong>
          <p class="hint">${Pe(t.createdAt)}</p>
        </div>
        ${Er(t.rating)}
      </div>
      <p>${l(t.content||h("reviews.noText"))}</p>
      ${t.imageUrls.length?`<div class="review-images">${t.imageUrls.slice(0,5).map(e=>`<img src="${l(e)}" alt="Review image" loading="lazy" />`).join("")}</div>`:""}
    </article>
  `}function Dl(t){return`
    <div class="variant-options">
      ${t.variants.map(e=>{const r=String(e.id)===String(s.selectedVariantId),n=Number(e.stock||0)<=0;return`
          <button class="variant-option ${r?"active":""}" data-variant="${l(e.id)}" ${n?"disabled":""} type="button">
            ${l(e.label||`Variant #${e.id}`)}
            ${e.price?` · ${l(D(e.discountPrice??e.price))}`:""}
          </button>
        `}).join("")}
    </div>
  `}function Si(t){return t.variants.find(e=>Number(e.stock||0)>0)||t.variants[0]||null}async function Ei(t,e,r){var c;if(!_()){R();return}let n=e;const i=Math.max(1,Number(r||1));if(!n){const d=await m(`/api/products/${t}`,{showError:!0}),u=A(d||{}),f=u.variants.filter(g=>Number(g.stock||0)>0);if(f.length===1)n=f[0].id;else if(u.variants.length>1){Pr(u.id);return}else n=(c=Si(u))==null?void 0:c.id}if(!n){I(h("product.variantUnavailable"),"warning");return}s.addingProductIds.add(String(t)),vn();const o=await m("/api/cart",{method:"POST",body:JSON.stringify({variantId:Number(n),quantity:i}),requireAuth:!0});s.addingProductIds.delete(String(t)),vn(),o!==null&&(I(h("cart.added"),"success"),await J())}function vn(){document.querySelectorAll("[data-detail-add]").forEach(e=>{var n;const r=s.addingProductIds.has(String((n=s.selectedDetailProduct)==null?void 0:n.id));e.disabled=r,e.textContent=r?h("product.adding"):e.closest(".mobile-buy-bar")?h("product.addToCart"):h("product.addToCartFull")})}async function J(){if(!_()){Wt(),F();return}s.cartLoading=!0,s.cartError="",F();const t=await m("/api/cart",{requireAuth:!0,showError:!1});if(s.cartLoading=!1,t===null){if(s.lastApiError.includes("Session expired")||s.lastApiError==="Please login to continue"){Wt();return}s.cartError=s.lastApiError||"Cart could not be loaded.",F();return}Cn(b(t).map(Xi)),F()}function F(){if(a.cartCount.textContent=s.cartCount,a.cartSummary.textContent=h("orders.items",{count:s.cartCount}),a.cartTotal.textContent=D(s.cartTotal),s.cartLoading){a.cartItems.innerHTML='<div class="cart-loading"><div class="skeleton-card"></div><div class="skeleton-card"></div></div>',a.checkoutButton.disabled=!0;return}if(s.cartError){a.cartItems.innerHTML=`
      <div class="cart-empty">
        <strong>${l(h("cart.unavailable"))}</strong>
        <p>${l(s.cartError)}</p>
        <button class="secondary-button" data-cart-retry type="button">${l(h("common.tryAgain"))}</button>
      </div>
    `,a.checkoutButton.disabled=!0;return}a.checkoutButton.disabled=!s.cartItems.length,a.cartItems.innerHTML=s.cartItems.length?s.cartItems.map(t=>`
      <article class="cart-item ${s.cartUpdatingIds.has(String(t.id))?"loading":""}">
        <img src="${l(t.image)}" alt="${l(t.name)}" />
        <div>
          <h3>${l(t.name)}</h3>
          <p class="hint">${l(t.brand||"BEAUTY SKIN KOREA")} ${t.variantLabel?`· ${l(t.variantLabel)}`:""}</p>
          <p>${D(t.unitPrice)} · ${l(h("common.total"))}: ${D(t.lineTotal)}</p>
          <div class="cart-stepper">
            <button data-cart-qty="minus" data-cart-id="${l(t.id)}" ${t.quantity<=1?"disabled":""} type="button">-</button>
            <span>${t.quantity}</span>
            <button data-cart-qty="plus" data-cart-id="${l(t.id)}" type="button">+</button>
          </div>
        </div>
        <button class="icon-button" data-remove="${l(t.id)}" type="button" aria-label="${l(h("cart.remove"))}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
        </button>
      </article>
    `).join(""):`
      <div class="cart-empty">
        <strong>${l(h("cart.empty"))}</strong>
        <p>Add products you like and they will appear here.</p>
        <button class="primary-button" data-start-shopping type="button">${l(h("home.startShopping"))}</button>
      </div>
    `}async function Ll(t){s.cartUpdatingIds.add(String(t)),F();const e=await m(`/api/cart/${t}`,{method:"DELETE",requireAuth:!0});s.cartUpdatingIds.delete(String(t)),e!==null?(I(h("cart.itemRemoved"),"success"),await J()):F()}async function Nl(t,e){const r=Math.max(1,Number(e||1));s.cartUpdatingIds.add(String(t)),F();const n=await m(`/api/cart/${t}`,{method:"PUT",requireAuth:!0,body:JSON.stringify({quantity:r})});s.cartUpdatingIds.delete(String(t)),n!==null?(I(h("cart.quantityUpdated"),"success"),await J()):F()}async function Ai(){if(!_()){R();return}if(await J(),!s.cartItems.length){I("Your cart is empty","warning");return}s.orderSuccess=null,s.checkoutError="",s.checkoutLoading=!0,$(),a.checkoutDialog.showModal(),M(),await Promise.all([Dr(),Lr()]),s.checkoutLoading=!1,$()}async function Ol(t){t.preventDefault(),await $i()}async function Dr(t){var r,n;const e=await m("/api/receivers",{requireAuth:!0,showError:!1});if(e===null){s.checkoutError=s.lastApiError||"Receivers could not be loaded.";return}s.receivers=b(e),s.selectedReceiverId=t||s.selectedReceiverId||((r=s.receivers[0])==null?void 0:r.id)||null,s.receivers.some(i=>String(i.id)===String(s.selectedReceiverId))||(s.selectedReceiverId=((n=s.receivers[0])==null?void 0:n.id)||null)}async function Lr(t){var r,n;const e=await m("/api/addresses",{requireAuth:!0,showError:!1});if(e===null){s.checkoutError=s.lastApiError||"Addresses could not be loaded.";return}s.addresses=b(e),s.selectedAddressId=t||s.selectedAddressId||((r=s.addresses[0])==null?void 0:r.id)||null,s.addresses.some(i=>String(i.id)===String(s.selectedAddressId))||(s.selectedAddressId=((n=s.addresses[0])==null?void 0:n.id)||null)}function $(){if(s.checkoutLoading){a.checkoutContent.innerHTML=`
      <div class="checkout-layout">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    `;return}if(s.orderSuccess){xl();return}const t=s.receivers.find(r=>String(r.id)===String(s.selectedReceiverId)),e=s.addresses.find(r=>String(r.id)===String(s.selectedAddressId));a.checkoutContent.innerHTML=`
    <div class="checkout-layout">
      <div class="checkout-steps">
        ${s.checkoutError?`<div class="checkout-error">${l(s.checkoutError)}</div>`:""}
        <section class="checkout-step">
          <div class="step-head"><span>1</span><h3>Receiver</h3></div>
          ${$l()}
          ${Ml()}
        </section>
        <section class="checkout-step">
          <div class="step-head"><span>2</span><h3>Delivery Address</h3></div>
          ${Ul()}
          ${Bl()}
        </section>
      </div>
      <aside class="order-summary">
        <div class="step-head"><span>3</span><h3>Order Summary</h3></div>
        ${Fl(t,e)}
      </aside>
    </div>
  `}function $l(){return s.receivers.length?`<div class="selectable-list">${s.receivers.map(t=>`
    <article class="selectable-card ${String(t.id)===String(s.selectedReceiverId)?"selected":""}" data-select-receiver="${l(t.id)}">
      <div>
        <strong>${l(t.fullName||"")}</strong>
        <p class="hint">${l(t.phone||"")}</p>
      </div>
      <button class="icon-button" data-delete-receiver="${l(t.id)}" type="button" aria-label="Delete receiver">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
      </button>
    </article>
  `).join("")}</div>`:'<div class="checkout-empty">No receivers yet. Add one below.</div>'}function Ml(){return`
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
  `}function Ul(){return s.addresses.length?`<div class="selectable-list">${s.addresses.map(t=>`
    <article class="selectable-card ${String(t.id)===String(s.selectedAddressId)?"selected":""}" data-select-address="${l(t.id)}">
      <div>
        <strong>${l(t.title||"Address")}</strong>
        <p class="hint">${l(t.address||"")}</p>
      </div>
      <button class="icon-button" data-delete-address="${l(t.id)}" type="button" aria-label="Delete address">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
      </button>
    </article>
  `).join("")}</div>`:'<div class="checkout-empty">No addresses yet. Add one below.</div>'}function Bl(){return`
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
  `}function Fl(t,e){const r=t&&e&&s.cartItems.length&&!s.orderSubmitting;return`
    <div class="summary-items">
      ${s.cartItems.map(n=>`
        <div class="summary-item">
          <span>${l(n.name)} ${n.variantLabel?`· ${l(n.variantLabel)}`:""} x ${n.quantity}</span>
          <strong>${D(n.lineTotal)}</strong>
        </div>
      `).join("")}
    </div>
    <div class="summary-total"><span>Subtotal</span><strong>${D(s.cartTotal)}</strong></div>
    <div class="summary-box">
      <strong>Receiver</strong>
      <p class="hint">${t?`${l(t.fullName||"")} · ${l(t.phone||"")}`:"Select receiver"}</p>
    </div>
    <div class="summary-box">
      <strong>Address</strong>
      <p class="hint">${e?`${l(e.title||"")} · ${l(e.address||"")}`:"Select address"}</p>
    </div>
    <button class="primary-button full" data-place-order type="button" ${r?"":"disabled"}>
      ${s.orderSubmitting?"Submitting...":"Place Order"}
    </button>
  `}function xl(){const t=s.orderSuccess;a.checkoutContent.innerHTML=`
    <div class="order-success">
      <div class="success-mark">✓</div>
      <h3>Order created</h3>
      <p>Order #${l(t.id)} · ${l(t.status||"NEW")}</p>
      <strong>${D(t.totalAmount)}</strong>
      <p class="hint">${l(t.fullName||"")} ${t.phone?`· ${l(t.phone)}`:""}</p>
      <p class="hint">${l(t.address||"")}</p>
      <div class="hero-actions">
        <button class="secondary-button" data-success-orders type="button">View orders</button>
        <button class="primary-button" data-success-continue type="button">Continue shopping</button>
      </div>
    </div>
  `}async function Lt(){if(!_()){R();return}a.ordersDialog.showModal(),M(),await Nr()}async function Nr(){s.ordersLoading=!0,s.ordersError="",s.selectedOrder=null,s.selectedOrderHistory=[],s.orderHistoryWarning="",de();const t=await m("/api/orders",{requireAuth:!0,showError:!1});if(s.ordersLoading=!1,t===null){if(s.lastApiError.includes("Session expired")){a.ordersDialog.close();return}s.ordersError=s.lastApiError||"Orders could not be loaded.",de();return}s.orders=b(t),de()}function de(){if(s.ordersLoading){a.ordersContent.innerHTML=`
      <div class="orders-layout">
        <div class="orders-list"><div class="skeleton-card"></div><div class="skeleton-card"></div></div>
        <div class="order-detail-panel"><div class="skeleton-card"></div></div>
      </div>
    `;return}if(s.ordersError){a.ordersContent.innerHTML=`
      <div class="orders-empty">
        <strong>Orders unavailable</strong>
        <p>${l(s.ordersError)}</p>
        <button class="secondary-button" data-orders-retry type="button">Retry</button>
      </div>
    `;return}if(!s.orders.length){a.ordersContent.innerHTML=`
      <div class="orders-empty">
        <strong>${l(h("orders.none"))}</strong>
        <p>Your completed purchases will appear here.</p>
        <button class="primary-button" data-orders-start-shopping type="button">${l(h("home.startShopping"))}</button>
      </div>
    `;return}a.ordersContent.innerHTML=`
    <div class="orders-layout">
      <div class="orders-list">
        ${s.orders.map(ql).join("")}
      </div>
      <div class="order-detail-panel">
        ${Hl()}
      </div>
    </div>
  `}function ql(t){var r;const e=Array.isArray(t.items)?t.items:[];return`
    <article class="order-card ${((r=s.selectedOrder)==null?void 0:r.id)===t.id?"selected":""}">
      <div>
        <h3>${l(h("orders.order"))} #${l(t.id)}</h3>
        <p class="hint">${Pe(t.createdAt)}</p>
        <p class="hint">${l(t.fullName||"")}</p>
        <p class="hint">${l(_i(t.address||"",72))}</p>
      </div>
      <div class="order-card-side">
        <span class="status-badge status-${l(String(t.status||"").toLowerCase())}">${l(br(t.status))}</span>
        <strong>${wr(t.totalAmount)}</strong>
        <span class="hint">${l(h("orders.items",{count:e.length}))}</span>
        <button class="secondary-button" data-order-detail="${l(t.id)}" type="button">${l(h("orders.viewDetails"))}</button>
      </div>
    </article>
  `}function Hl(){if(s.orderDetailLoading)return'<div class="skeleton-card"></div>';if(s.orderDetailError)return`<div class="orders-empty"><strong>Detail unavailable</strong><p>${l(s.orderDetailError)}</p></div>`;if(!s.selectedOrder)return'<div class="orders-empty"><strong>Select an order</strong><p>Choose an order to see details and timeline.</p></div>';const t=s.selectedOrder,e=Array.isArray(t.items)?t.items.map(r=>ts({...r,orderId:t.id})):[];return`
    <section class="order-detail">
      <div class="order-detail-head">
        <div>
          <h3>${l(h("orders.order"))} #${l(t.id)}</h3>
          <p class="hint">${Pe(t.createdAt)}</p>
        </div>
        <span class="status-badge status-${l(String(t.status||"").toLowerCase())}">${l(br(t.status))}</span>
      </div>
      <div class="summary-box">
        <strong>${l(h("checkout.receiver"))}</strong>
        <p class="hint">${l(t.fullName||"")} ${t.phone?`· ${l(t.phone)}`:""}</p>
      </div>
      <div class="summary-box">
        <strong>${l(h("checkout.address"))}</strong>
        <p class="hint">${l(t.address||"")}</p>
      </div>
      <div class="summary-total"><span>${l(h("common.total"))}</span><strong>${wr(t.totalAmount)}</strong></div>
      <div class="order-items">
        <h4>Items</h4>
        ${e.length?e.map(r=>Vl(r,t)).join(""):'<p class="hint">No items in response.</p>'}
      </div>
      <div class="order-timeline">
        <h4>Status history</h4>
        ${s.orderHistoryWarning?`<p class="checkout-error">${l(s.orderHistoryWarning)}</p>`:""}
        ${zl(t)}
      </div>
    </section>
  `}function Vl(t,e={}){const n=String(e.status||"").toUpperCase()==="DELIVERED"&&t.productId&&e.id;return`
    <article class="order-item">
      <img src="${l(t.image)}" alt="${l(t.name)}" />
      <div>
        <strong>${l(t.name)}</strong>
        <p class="hint">${t.variantLabel?l(t.variantLabel):"Variant"} · x${t.quantity}</p>
        ${n?`
          <button class="secondary-button order-review-button" data-order-write-review="${l(t.productId)}" data-review-order="${l(e.id)}" data-review-name="${l(t.name)}" type="button">Write review</button>
        `:t.productId?'<p class="hint">Available after delivery</p>':""}
      </div>
      <strong>${wr(t.lineTotal||t.unitPrice*t.quantity)}</strong>
    </article>
  `}function zl(t){return(s.selectedOrderHistory.length?s.selectedOrderHistory:[{status:t.status,createdAt:t.createdAt,note:"Current order status"}]).map(r=>`
    <div class="timeline-item">
      <span></span>
      <div>
        <strong>${l(br(r.status))}</strong>
        <p class="hint">${Pe(r.createdAt)}</p>
        ${r.note?`<p class="hint">${l(r.note)}</p>`:""}
      </div>
    </div>
  `).join("")}function _i(t,e){const r=String(t||"");return r.length>e?`${r.slice(0,e-1)}…`:r}async function Ci(t){s.orderDetailLoading=!0,s.orderDetailError="",s.orderHistoryWarning="",de();const[e,r]=await Promise.all([m(`/api/orders/${t}`,{requireAuth:!0,showError:!1}),m(`/api/orders/${t}/history`,{requireAuth:!0,showError:!1})]);if(s.orderDetailLoading=!1,e===null){s.orderDetailError=s.lastApiError||"Order detail could not be loaded.",de();return}s.selectedOrder=e,s.selectedOrderHistory=r===null?[]:b(r),r===null&&(s.orderHistoryWarning="Status history could not be loaded."),de()}async function Ti(){if(!_()){R();return}a.favoritesDialog.showModal(),M(),await De({render:!0})}async function De(t={}){const{render:e=!1}=t;if(!_()){Gt();return}s.favoritesLoading=!0,s.favoritesError="",e&&me();try{const r=await m("/api/favorites",{requireAuth:!0,showError:!1});if(s.favoritesLoading=!1,r===null){if(s.lastApiError.includes("Session expired")||s.lastApiError==="Please login to continue"){Gt(),a.favoritesDialog.open&&a.favoritesDialog.close();return}s.favoritesError=s.lastApiError||"Favorites could not be loaded.",Ve(),e&&me();return}as(b(r).map(Zi)),s.products.length&&P(a.grid,s.products,"Mahsulot topilmadi."),s.todayDeals.length&&P(a.dealsGrid,s.todayDeals.slice(0,8),"Bugungi takliflar topilmadi."),(e||a.favoritesDialog.open)&&me()}catch(r){console.error("[LOAD FAVORITES FAILED]",r),s.favoritesLoading=!1,s.favoritesError="Favorites could not be loaded.",Ve(),(e||a.favoritesDialog.open)&&me()}}function Ve(){a.favoritesCount.textContent=s.favoritesCount,a.favoritesSummary.textContent=`${s.favoritesCount} product${s.favoritesCount===1?"":"s"}`}function me(){if(Ve(),s.favoritesLoading){a.favoritesContent.innerHTML=`
      <div class="favorites-grid">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    `;return}if(s.favoritesError){a.favoritesContent.innerHTML=`
      <div class="favorites-empty">
        <strong>Favorites unavailable</strong>
        <p>${l(s.favoritesError)}</p>
        <button class="secondary-button" data-favorites-retry type="button">Retry</button>
      </div>
    `;return}if(!s.favoriteProducts.length){a.favoritesContent.innerHTML=`
      <div class="favorites-empty">
        <strong>No favorite products yet</strong>
        <p>Save products with the heart button and they will appear here.</p>
        <button class="primary-button" data-favorites-start type="button">Start shopping</button>
      </div>
    `;return}a.favoritesContent.innerHTML=`
    <div class="favorites-grid product-grid">
      ${s.favoriteProducts.map(t=>He({...t,favorite:!0})).join("")}
    </div>
  `}function ki(){a.favoritesDialog.close(),C()}function Wl(t){var n;const e=t.target.closest("[data-favorites-retry]"),r=t.target.closest("[data-favorites-start]");if(e){De({render:!0});return}if(r){ki(),(n=document.getElementById("products"))==null||n.scrollIntoView({behavior:"smooth",block:"start"});return}Ne(t)}function ze(){var t;s.notifications=[],s.notificationsLoading=!1,s.notificationsError="",s.unreadCount=0,s.unreadCountLoading=!1,s.notificationUpdatingIds=new Set,yt(),(t=a.notificationsDrawer)!=null&&t.classList.contains("open")&&Ue()}async function fe(){if(!_()){ze();return}s.unreadCountLoading=!0;const t=await m("/api/notifications/unread-count",{requireAuth:!0,showError:!1});if(s.unreadCountLoading=!1,t===null){if(s.lastApiError.includes("Session expired")){ze();return}yt();return}s.unreadCount=normalizeUnreadCount(t),yt()}async function Pi(){if(!_()){R();return}a.notificationsDrawer.classList.add("open"),a.notificationsDrawer.setAttribute("aria-hidden","false"),M(),await Promise.all([Or(),fe()])}function Ue(){a.notificationsDrawer.classList.remove("open"),a.notificationsDrawer.setAttribute("aria-hidden","true"),C()}async function Or(){if(!_()){R();return}s.notificationsLoading=!0,s.notificationsError="",ue();const t=await m("/api/notifications",{requireAuth:!0,showError:!1});if(s.notificationsLoading=!1,t===null){if(s.lastApiError.includes("Session expired")){ze();return}s.notificationsError=s.lastApiError||"Notifications could not be loaded.",ue();return}s.notifications=ns(t).map(rs).filter(e=>e.id!==void 0),ue()}function yt(){a.notificationsCount.textContent=s.unreadCount,a.notificationsCount.hidden=s.unreadCount<=0,a.notificationsSummary.textContent=`${s.unreadCount} ${h("notifications.unread")}`}function ue(){if(yt(),s.notificationsLoading){a.notificationsContent.innerHTML=`
      <div class="notifications-loading">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    `;return}if(s.notificationsError){a.notificationsContent.innerHTML=`
      <div class="notifications-empty">
        <strong>${l(h("notifications.title"))}</strong>
        <p>${l(s.notificationsError)}</p>
        <button class="secondary-button" data-notifications-retry type="button">${l(h("common.tryAgain"))}</button>
      </div>
    `;return}if(!s.notifications.length){a.notificationsContent.innerHTML=`
      <div class="notifications-empty">
        <strong>${l(h("notifications.none"))}</strong>
        <p>Order, promo and system updates will appear here.</p>
      </div>
    `;return}a.notificationsContent.innerHTML=`
    <div class="notifications-list">
      ${s.notifications.map(Gl).join("")}
    </div>
  `}function Gl(t){const e=s.notificationUpdatingIds.has(String(t.id));return`
    <article class="notification-card ${t.read?"read":"unread"} ${e?"loading":""}" data-notification-card="${l(t.id)}">
      <div class="notification-icon type-${l(t.type.toLowerCase())}" aria-hidden="true">${jl(t.type)}</div>
      <div>
        <div class="notification-head">
          <strong>${l(t.title)}</strong>
          ${t.read?"":`<span class="unread-dot" aria-label="${l(h("notifications.unread"))}"></span>`}
        </div>
        <p>${l(t.message)}</p>
        <div class="notification-meta">
          <span>${l(notificationTypeLabel(t.type))}</span>
          <span>${Pe(t.createdAt)}</span>
        </div>
      </div>
      <button class="secondary-button notification-read-button" data-notification-read="${l(t.id)}" ${t.read||e?"disabled":""} type="button">
        ${t.read?l(h("notifications.read")):l(h(e?"common.saving":"notifications.markRead"))}
      </button>
    </article>
  `}function jl(t){return{ORDER:"O",PROMO:"%",SYSTEM:"i"}[t]||"i"}async function Ri(t,e={}){const r=s.notifications.find(i=>String(i.id)===String(t));if(!r||r.read)return!0;s.notificationUpdatingIds.add(String(t)),ue();const n=await m(`/api/notifications/${t}/read`,{method:"POST",requireAuth:!0,showError:!1});return s.notificationUpdatingIds.delete(String(t)),n===null?s.lastApiError.includes("Session expired")?(ze(),!1):(I(s.lastApiError||"Notification could not be updated."),ue(),!1):(r.read=!0,s.notifications=s.notifications.map(i=>String(i.id)===String(t)?{...i,read:!0}:i),s.unreadCount=Math.max(0,s.unreadCount-1),ue(),await fe(),e.silent||I("Marked as read"),!0)}async function Kl(t){const e=s.notifications.find(r=>String(r.id)===String(t));e&&(e.read||await Ri(t,{silent:!0}),e.type==="ORDER"&&e.refId&&(Ue(),await Lt(),await Ci(e.refId)))}async function Jl(t){if(!_())return R(),null;const e=String(t||"").trim();return e?m("/api/notifications/token",{method:"POST",requireAuth:!0,body:JSON.stringify({token:e})}):(I("Notification token is empty."),null)}window.saveNotificationToken=Jl;async function Yl(){return m("/api/health",{showError:!1})}window.checkServerHealth=Yl;function Ql(t){const e=t.target.closest("[data-notifications-retry]"),r=t.target.closest("[data-notification-read]"),n=t.target.closest("[data-notification-card]");if(e){Or(),fe();return}if(r){t.stopPropagation(),Ri(r.dataset.notificationRead);return}n&&Kl(n.dataset.notificationCard)}async function Xl(){if(!_()){R();return}a.myReviewsDialog.showModal(),M(),await Nt()}async function Nt(){if(!_()){R();return}s.myReviewsLoading=!0,s.myReviewsError="",at();const t=await m("/api/reviews/my",{requireAuth:!0,showError:!1});if(s.myReviewsLoading=!1,t===null){if(s.lastApiError.includes("Session expired")){$r(),wt();return}s.myReviewsError=s.lastApiError||"Reviews could not be loaded.",at();return}s.myReviews=ss(t).map(is),at()}function at(){if(a.myReviewsSummary.textContent=s.myReviews.length?`${s.myReviews.length} item${s.myReviews.length===1?"":"s"}`:"Purchased products and written reviews",s.myReviewsLoading){a.myReviewsContent.innerHTML=`
      <div class="my-reviews-list">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    `;return}if(s.myReviewsError){a.myReviewsContent.innerHTML=`
      <div class="reviews-empty-state">
        <strong>Reviews unavailable</strong>
        <p>${l(s.myReviewsError)}</p>
        <button class="secondary-button" data-my-reviews-retry type="button">Retry</button>
      </div>
    `;return}if(!s.myReviews.length){a.myReviewsContent.innerHTML=`
      <div class="reviews-empty-state">
        <strong>No review items yet</strong>
        <p>Your written reviews and reviewable purchases will appear here.</p>
      </div>
    `;return}a.myReviewsContent.innerHTML=`
    <div class="my-reviews-list">
      ${s.myReviews.map(Zl).join("")}
    </div>
  `}function Zl(t){const e=t.review;return`
    <article class="my-review-item">
      <img src="${l(t.image)}" alt="${l(t.name)}" />
      <div>
        <strong>${l(t.name)}</strong>
        <p class="hint">${l(t.brand||"BEAUTY SKIN KOREA")} ${t.orderId?`· Order #${l(t.orderId)}`:""}</p>
        ${e!=null&&e.rating||e!=null&&e.content?`
          <div class="written-review">
            ${Er(e.rating)}
            <p>${l(e.content||"No text review.")}</p>
            <p class="hint">${Pe(e.createdAt)}</p>
          </div>
        `:'<p class="hint">Review not written yet.</p>'}
      </div>
      <div class="review-action-cell">
        ${t.reviewable?`
          <button class="secondary-button" data-write-review="${l(t.productId)}" data-review-order="${l(t.orderId)}" data-review-name="${l(t.name)}" type="button">Write review</button>
        `:e!=null&&e.content||e!=null&&e.rating?'<span class="status-badge status-delivered">Reviewed</span>':'<span class="hint">Not reviewable</span>'}
      </div>
    </article>
  `}function Di(t={}){if(!_()){R();return}const e=t.productId,r=t.orderId;if(!e||!r){I("Product and order are required for review.");return}s.reviewDraft={productId:e,orderId:r,productName:t.productName||"Product"},s.reviewRating=5,a.writeReviewProduct.textContent=`${s.reviewDraft.productName} · Order #${r}`,a.reviewContent.value="",a.reviewImages.value="",a.reviewImageFiles.value="",a.reviewUploadStatus.textContent="",U(""),Li(),a.writeReviewDialog.showModal(),M()}function Li(){a.reviewRatingSelector.innerHTML=Array.from({length:5},(t,e)=>{const r=e+1;return`
      <button class="rating-choice ${r<=s.reviewRating?"active":""}" data-review-rating="${r}" type="button" aria-label="Rating ${r} out of 5">
        ★
      </button>
    `}).join("")}function $r(){a.myReviewsDialog.open&&a.myReviewsDialog.close(),C()}function wt(){a.writeReviewDialog.open&&a.writeReviewDialog.close(),C()}function U(t,e=""){a.reviewFormMessage.textContent=t,a.reviewFormMessage.className=`form-message ${e}`.trim()}function ed(t){return String(t||"").split(/[\n,]+/).map(e=>e.trim()).filter(Boolean).slice(0,5)}function td(t){const e=new Set(["image/jpeg","image/png","image/webp"]),r=Array.from(t||[]);return r.length>5?{error:"Maximum 5 image files allowed.",files:[]}:r.find(o=>!e.has(o.type))?{error:"Only JPG, PNG and WEBP images are allowed.",files:[]}:r.find(o=>o.size>10*1024*1024)?{error:"Each image must be 10MB or smaller.",files:[]}:{files:r}}async function rd(t){const e=[];for(let r=0;r<t.length;r+=1){const n=t[r];a.reviewUploadStatus.textContent=`Uploading image ${r+1} of ${t.length}...`;const i=await m("/api/uploads/presign",{method:"POST",requireAuth:!0,showError:!1,body:JSON.stringify({fileName:n.name,contentType:n.type,folder:"reviews",fileSizeBytes:n.size})});if(!(i!=null&&i.uploadUrl)||!(i!=null&&i.publicUrl))throw new Error(s.lastApiError||"Image upload could not be prepared.");const o=await fetch(i.uploadUrl,{method:"PUT",headers:{"Content-Type":n.type},body:n});if(!o.ok)throw new Error(`Image upload failed: HTTP ${o.status}`);e.push(i.publicUrl)}return a.reviewUploadStatus.textContent=e.length?"Images uploaded.":"",e}async function nd(t){var u;if(t.preventDefault(),s.reviewSubmitting)return;const e=s.reviewDraft||{},r=a.reviewContent.value.trim(),n=ed(a.reviewImages.value),i=td(a.reviewImageFiles.files);if(!e.productId||!e.orderId){U("Product and order are required.","error");return}if(s.reviewRating<1||s.reviewRating>5){U("Choose a rating from 1 to 5.","error");return}if(!r){U("Review text is required.","error");return}if(i.error){U(i.error,"error");return}if(String(a.reviewImages.value||"").split(/[\n,]+/).filter(f=>f.trim()).length>5){U("Maximum 5 image URLs allowed.","error");return}if(n.length+i.files.length>5){U("Maximum 5 review images allowed.","error");return}s.reviewSubmitting=!0,s.uploadingReviewImages=!!i.files.length,a.submitReviewButton.disabled=!0,a.submitReviewButton.textContent="Submitting...",U("");let o=[];try{o=i.files.length?await rd(i.files):[]}catch(f){s.reviewSubmitting=!1,s.uploadingReviewImages=!1,a.submitReviewButton.disabled=!1,a.submitReviewButton.textContent="Submit review",U(f.message||"Image upload failed.","error");return}const c=[...o,...n].slice(0,5),d=await m("/api/reviews",{method:"POST",requireAuth:!0,showError:!1,body:JSON.stringify({productId:Number(e.productId),orderId:Number(e.orderId),rating:Number(s.reviewRating),content:r,imageUrls:c})});if(s.reviewSubmitting=!1,s.uploadingReviewImages=!1,a.submitReviewButton.disabled=!1,a.submitReviewButton.textContent="Submit review",a.reviewUploadStatus.textContent="",d===null){if(s.lastApiError.includes("Session expired")){$r(),wt();return}U(s.lastApiError||"Review could not be submitted.","error");return}I("Review submitted"),wt(),await Nt(),((u=s.selectedDetailProduct)==null?void 0:u.id)!==void 0&&String(s.selectedDetailProduct.id)===String(e.productId)&&await Rr(e.productId)}function id(t){const e=t.target.closest("[data-my-reviews-retry]"),r=t.target.closest("[data-write-review]");if(e){Nt();return}r&&Di({productId:r.dataset.writeReview,orderId:r.dataset.reviewOrder,productName:r.dataset.reviewName})}function sd(t){const e=t.target.closest("[data-review-rating]");e&&(s.reviewRating=Number(e.dataset.reviewRating),Li())}function Mr(t="login"){bt(t),Qe(),a.authDialog.showModal(),M()}function bt(t){s.authMode=t;const e=t==="login";a.authTitle.textContent=h(e?"auth.login":"auth.register"),a.loginFields.hidden=!e,a.registerFields.hidden=e,a.authSubmit.textContent=h(e?"auth.signIn":"auth.createAccount"),a.loginTab.classList.toggle("active",e),a.registerTab.classList.toggle("active",!e),a.loginTab.setAttribute("aria-selected",String(e)),a.registerTab.setAttribute("aria-selected",String(!e)),Qe()}function Qe(){document.querySelectorAll(".field-error").forEach(t=>{t.textContent=""}),a.authMessage.textContent="",a.authMessage.className="form-message"}function oe(t,e){const r=document.getElementById(`${t}Error`);r&&(r.textContent=e)}function It(t){s.authLoading=t,a.authSubmit.disabled=t,a.googleLoginButton&&(a.googleLoginButton.disabled=t),a.authSubmit.textContent=t?h("home.loading"):s.authMode==="login"?h("auth.signIn"):h("auth.createAccount")}function Vt(t){s.authLoading=t,a.authSubmit.disabled=t,a.googleLoginButton&&(a.googleLoginButton.disabled=t,a.googleLoginButton.classList.toggle("loading",t))}function Ni(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}function ad(){Qe();let t=!0;const e=a.loginEmail.value.trim(),r=a.loginPassword.value;return(!e||!Ni(e))&&(oe("loginEmail",h("auth.emailRequired")),t=!1),(!r||r.length<6)&&(oe("loginPassword",h("auth.passwordMin")),t=!1),t}function od(){Qe();let t=!0;const e=a.registerFullName.value.trim(),r=a.registerEmail.value.trim(),n=a.registerPhone.value.trim(),i=a.registerPassword.value,o=a.registerConfirmPassword.value;return e||(oe("registerFullName",h("auth.fullNameRequired")),t=!1),(!r||!Ni(r))&&(oe("registerEmail",h("auth.emailRequired")),t=!1),n||(oe("registerPhone",h("auth.phoneRequired")),t=!1),(!i||i.length<6)&&(oe("registerPassword",h("auth.passwordMin")),t=!1),i!==o&&(oe("registerConfirmPassword",h("auth.passwordMismatch")),t=!1),t}async function cd(t){t.preventDefault(),!s.authLoading&&(s.authMode==="login"?await ld():await ud())}async function ld(){if(!ad())return;It(!0);const t=await m("/api/auth/login",{method:"POST",body:JSON.stringify({email:a.loginEmail.value.trim(),password:a.loginPassword.value}),showError:!1});if(It(!1),!(t!=null&&t.token)){a.authMessage.textContent=s.lastApiError||"Email yoki parol noto‘g‘ri.",a.authMessage.className="form-message error";return}await Oi(t)}async function Oi(t){Zc(t),await yi(),a.authDialog.close(),I(`Welcome, ${yr(t.fullName)||"User"}.`),await J(),await De(),await fe()}async function dd(){if(s.authLoading)return;Qe(),Vt(!0);let t;try{t=await Xc()}catch(r){Vt(!1);const n=(r==null?void 0:r.code)||"";if(n==="auth/popup-closed-by-user"||n==="auth/cancelled-popup-request")return;a.authMessage.textContent=n==="auth/popup-blocked"?"Popup bloklandi. Brauzerda popup'ga ruxsat bering.":"Google bilan kirishda xatolik yuz berdi.",a.authMessage.className="form-message error";return}const e=await m("/api/auth/firebase",{method:"POST",body:JSON.stringify({idToken:t}),showError:!1});if(Vt(!1),!(e!=null&&e.token)){a.authMessage.textContent=s.lastApiError||"Server Google hisobini qabul qilmadi.",a.authMessage.className="form-message error";return}await Oi(e)}async function ud(){if(!od())return;It(!0);const t=await m("/api/auth/register",{method:"POST",body:JSON.stringify({fullName:a.registerFullName.value.trim(),email:a.registerEmail.value.trim(),phone:a.registerPhone.value.trim(),password:a.registerPassword.value}),showError:!1});if(It(!1),t===null){a.authMessage.textContent=s.lastApiError||"Email allaqachon mavjud yoki server javob bermadi.",a.authMessage.className="form-message error";return}a.authMessage.textContent="Registered. Endi login qiling.",a.authMessage.className="form-message success",bt("login"),a.loginEmail.value=a.registerEmail.value.trim()}function hd(){if(!_()){R();return}s.profileEditing=!1,Ur(),a.profileDrawer.classList.add("open"),a.profileDrawer.setAttribute("aria-hidden","false"),M()}function ee(){a.profileDrawer.classList.remove("open"),a.profileDrawer.setAttribute("aria-hidden","true"),C()}function Ur(){const t=s.user||{},e=t.profileImage?`<img class="profile-avatar" src="${l(t.profileImage)}" alt="${l(t.fullName||"Profile")}" />`:`<div class="profile-avatar">${l(yr(t.fullName||t.email||"U").charAt(0)||"U")}</div>`;a.profileContent.innerHTML=`
    <div class="profile-card">
      <div class="profile-summary">
        ${e}
        <div>
          <h3>${l(t.fullName||"Profile")}</h3>
          <p class="hint">${l(t.email||"")}</p>
          <p class="hint">${l(t.phone||"")}</p>
          <p class="hint">Role: ${l(s.role||"USER")}</p>
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
      ${s.profileEditing?fd(t):""}
    </div>
  `}function fd(t){return`
    <form class="profile-edit" id="profileEditForm">
      <label>Email<input value="${l(t.email||"")}" readonly /></label>
      <label>Full name<input id="profileFullName" value="${l(t.fullName||"")}" required /></label>
      <label>Phone<input id="profilePhone" value="${l(t.phone||"")}" required /></label>
      <label>Profile image URL<input id="profileImage" value="${l(t.profileImage||"")}" /></label>
      <button class="primary-button full" id="profileSaveButton" type="submit">Save profile</button>
      <p class="form-message" id="profileMessage"></p>
    </form>
  `}async function gd(t){const e=t.target.closest("[data-profile-action]");if(!e)return;const r=e.dataset.profileAction;if(r==="edit"){s.profileEditing=!s.profileEditing,Ur();return}if(r==="logout"){vr(),ee(),I("Logged out.");return}if(r==="orders"){await Lt();return}if(r==="favorites"){ee(),await Ti();return}if(r==="reviews"){ee(),await Xl();return}if(r==="notifications"){ee(),await Pi();return}if(r==="addresses"||r==="receivers"){ee(),await Ai();return}I("Bu bo‘lim keyingi bosqichga tayyor.")}async function md(t){var u;const e=t.target.closest("[data-select-receiver]"),r=t.target.closest("[data-select-address]"),n=t.target.closest("[data-delete-receiver]"),i=t.target.closest("[data-delete-address]"),o=t.target.closest("[data-place-order]"),c=t.target.closest("[data-success-orders]"),d=t.target.closest("[data-success-continue]");if(n){t.stopPropagation(),await bd(n.dataset.deleteReceiver);return}if(i){t.stopPropagation(),await Id(i.dataset.deleteAddress);return}if(e){s.selectedReceiverId=e.dataset.selectReceiver,$();return}if(r){s.selectedAddressId=r.dataset.selectAddress,$();return}if(o){await $i();return}if(c){a.checkoutDialog.close(),await Lt();return}d&&(a.checkoutDialog.close(),be(),(u=document.getElementById("products"))==null||u.scrollIntoView({behavior:"smooth",block:"start"}))}function pd(t){var o;const e=t.target.closest("[data-order-detail]"),r=t.target.closest("[data-orders-retry]"),n=t.target.closest("[data-orders-start-shopping]"),i=t.target.closest("[data-order-write-review]");if(i){Di({productId:i.dataset.orderWriteReview,orderId:i.dataset.reviewOrder,productName:i.dataset.reviewName});return}if(e){Ci(e.dataset.orderDetail);return}if(r){Nr();return}n&&(a.ordersDialog.close(),(o=document.getElementById("products"))==null||o.scrollIntoView({behavior:"smooth",block:"start"}))}async function vd(t){const e=t.target.closest("[data-add-receiver-form]"),r=t.target.closest("[data-add-address-form]");!e&&!r||(t.preventDefault(),e&&await yd(),r&&await wd())}async function yd(){var o,c,d;const t=(o=document.getElementById("receiverFirstName"))==null?void 0:o.value.trim(),e=(c=document.getElementById("receiverLastName"))==null?void 0:c.value.trim(),r=(d=document.getElementById("receiverPhone"))==null?void 0:d.value.trim(),n=document.getElementById("receiverFormError");if(!t||!e||!r){n&&(n.textContent="First name, last name va phone majburiy.");return}const i=await m("/api/receivers",{method:"POST",requireAuth:!0,body:JSON.stringify({firstName:t,lastName:e,phone:r})});i!==null&&(await Dr(i.id),$(),I("Receiver added"))}async function wd(){var c,d,u,f;const t=(c=document.getElementById("addressTitle"))==null?void 0:c.value.trim(),e=(d=document.getElementById("addressText"))==null?void 0:d.value.trim(),r=Number((u=document.getElementById("addressLatitude"))==null?void 0:u.value),n=Number((f=document.getElementById("addressLongitude"))==null?void 0:f.value),i=document.getElementById("addressFormError");if(!t||!e||!Number.isFinite(r)||!Number.isFinite(n)){i&&(i.textContent="Title, address, latitude va longitude majburiy.");return}const o=await m("/api/addresses",{method:"POST",requireAuth:!0,body:JSON.stringify({title:t,address:e,latitude:r,longitude:n})});o!==null&&(await Lr(o.id),$(),I("Address added"))}async function bd(t){await m(`/api/receivers/${t}`,{method:"DELETE",requireAuth:!0})!==null&&(String(s.selectedReceiverId)===String(t)&&(s.selectedReceiverId=null),await Dr(),$())}async function Id(t){await m(`/api/addresses/${t}`,{method:"DELETE",requireAuth:!0})!==null&&(String(s.selectedAddressId)===String(t)&&(s.selectedAddressId=null),await Lr(),$())}async function $i(){if(!s.selectedReceiverId||!s.selectedAddressId||!s.cartItems.length)return;s.orderSubmitting=!0,$();const t=await m("/api/orders",{method:"POST",requireAuth:!0,body:JSON.stringify({receiverId:Number(s.selectedReceiverId),addressId:Number(s.selectedAddressId),cartItemIds:s.cartItems.map(e=>Number(e.id))}),showError:!1});if(s.orderSubmitting=!1,t===null){s.checkoutError=s.lastApiError||"Order could not be created.",$(),I(s.checkoutError,"error");return}s.orderSuccess=t,await J(),await fe(),be(),$(),I("Order created","success")}async function Sd(t){var c,d,u;t.preventDefault();const e=s.user||{},r={id:e.id,email:e.email,fullName:(c=document.getElementById("profileFullName"))==null?void 0:c.value.trim(),phone:(d=document.getElementById("profilePhone"))==null?void 0:d.value.trim(),profileImage:(u=document.getElementById("profileImage"))==null?void 0:u.value.trim()},n=document.getElementById("profileMessage");if(!r.fullName||!r.phone){n&&(n.textContent="Full name va phone majburiy.",n.className="form-message error");return}if(await m("/api/users/me",{method:"PUT",requireAuth:!0,body:JSON.stringify(r),showError:!1})===null){n&&(n.textContent=s.lastApiError||"Profile yangilanmadi.",n.className="form-message error");return}const o=await m("/api/users/me",{requireAuth:!0,showError:!1});o&&(s.user=o,localStorage.setItem(v.storageKeys.user,JSON.stringify(o))),s.profileEditing=!1,_e(),Ur(),I("Profile updated.")}function Ed(){var t,e;(t=a.languageSelect)==null||t.addEventListener("change",r=>Qi(r.target.value)),a.searchForm.addEventListener("submit",r=>r.preventDefault()),a.searchInput.addEventListener("input",Ad),a.categoryToolbar.addEventListener("click",zt),a.quickCategoryGrid.addEventListener("click",zt),a.catalogList.addEventListener("click",zt),a.banners.addEventListener("click",_d),a.grid.addEventListener("click",Ne),a.dealsGrid.addEventListener("click",Ne),a.homeApiSections.addEventListener("click",Ne),a.detailContent.addEventListener("click",yn),a.productDetailPageContent.addEventListener("click",r=>{yn(r)||Ne(r)}),a.cartItems.addEventListener("click",Cd),a.catalogButton.addEventListener("click",kd),a.closeCatalog.addEventListener("click",ot),a.cartButton.addEventListener("click",Td),a.closeCart.addEventListener("click",be),a.loginButton.addEventListener("click",()=>{_()?hd():Mr("login")}),a.favoritesButton.addEventListener("click",Ti),a.notificationsButton.addEventListener("click",Pi),a.apiButton.addEventListener("click",Pd),a.loginTab.addEventListener("click",()=>bt("login")),a.registerTab.addEventListener("click",()=>bt("register")),a.authForm.addEventListener("submit",cd),(e=a.googleLoginButton)==null||e.addEventListener("click",dd),a.apiForm.addEventListener("submit",Rd),a.checkoutButton.addEventListener("click",Ai),a.checkoutForm.addEventListener("submit",Ol),a.checkoutContent.addEventListener("click",md),a.checkoutContent.addEventListener("submit",vd),a.ordersContent.addEventListener("click",pd),a.refreshOrders.addEventListener("click",Nr),a.closeOrders.addEventListener("click",()=>a.ordersDialog.close()),a.favoritesContent.addEventListener("click",Wl),a.refreshFavorites.addEventListener("click",()=>De({render:!0})),a.closeFavorites.addEventListener("click",ki),a.notificationsContent.addEventListener("click",Ql),a.refreshNotifications.addEventListener("click",()=>{Or(),fe()}),a.closeNotifications.addEventListener("click",Ue),a.myReviewsContent.addEventListener("click",id),a.refreshMyReviews.addEventListener("click",Nt),a.closeMyReviews.addEventListener("click",$r),a.writeReviewForm.addEventListener("submit",nd),a.closeWriteReview.addEventListener("click",wt),a.reviewRatingSelector.addEventListener("click",sd),a.closeProfile.addEventListener("click",ee),a.profileContent.addEventListener("click",gd),a.profileContent.addEventListener("submit",Sd),a.ordersButton.addEventListener("click",Lt),a.refreshHome.addEventListener("click",Tt),a.loadMore.addEventListener("click",vl),window.addEventListener("hashchange",vt),a.catalogDrawer.addEventListener("click",r=>{r.target===a.catalogDrawer&&ot()}),a.cartDrawer.addEventListener("click",r=>{r.target===a.cartDrawer&&be()}),a.profileDrawer.addEventListener("click",r=>{r.target===a.profileDrawer&&ee()}),a.notificationsDrawer.addEventListener("click",r=>{r.target===a.notificationsDrawer&&Ue()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&(ot(),be(),ee(),Ue(),a.ordersDialog.open&&a.ordersDialog.close(),a.favoritesDialog.open&&a.favoritesDialog.close(),a.myReviewsDialog.open&&a.myReviewsDialog.close(),a.writeReviewDialog.open&&a.writeReviewDialog.close())}),a.detailDialog.addEventListener("close",C),a.authDialog.addEventListener("close",C),a.apiDialog.addEventListener("close",C),a.checkoutDialog.addEventListener("close",C),a.ordersDialog.addEventListener("close",C),a.favoritesDialog.addEventListener("close",C),a.myReviewsDialog.addEventListener("close",C),a.writeReviewDialog.addEventListener("close",C),document.querySelectorAll("[data-close-dialog]").forEach(r=>{r.addEventListener("click",()=>{var n;return(n=r.closest("dialog"))==null?void 0:n.close()})})}function Ad(t){clearTimeout(s.searchTimer),s.searchTimer=setTimeout(()=>{Sl(t.target.value).catch(()=>{ne(a.grid,"Qidiruv vaqtida xatolik yuz berdi."),a.status.textContent=""})},v.searchDebounceMs)}function zt(t){const e=t.target.closest("[data-category]");e&&(ot(),kr(e.dataset.category).catch(()=>{ne(a.grid,"Kategoriya mahsulotlari yuklanmadi."),a.status.textContent=""}),window.setTimeout(()=>{var r;(r=document.getElementById("products"))==null||r.scrollIntoView({behavior:"smooth",block:"start"})},0))}function Ne(t){const e=t.target.closest("[data-show-all]"),r=t.target.closest("[data-favorite]"),n=t.target.closest("[data-add]"),i=t.target.closest("[data-detail]"),o=t.target.closest("[data-product]");if(e){t.stopPropagation(),Tt();return}if(r){t.stopPropagation(),Mi(r.dataset.favorite);return}if(n){t.stopPropagation(),Ei(n.dataset.add,null,1);return}if(i||o&&!t.target.closest("button")){t.stopPropagation();const c=(i||o).dataset.detail||o.dataset.product;el(c),El(c)}}function _d(t){const e=t.target.closest("[data-banner-dot]");if(e){_r(Number(e.dataset.bannerDot)),pt();return}const r=t.target.closest("[data-banner-nav]");if(r){r.dataset.bannerNav==="next"?bi():ll(),pt();return}const n=t.target.closest("[data-banner-link-type]");if(!n)return;const i=n.dataset.bannerLinkType,o=n.dataset.bannerLinkId;if(i==="PRODUCT"&&o){Pr(o);return}if(i==="CATEGORY"&&o){const c=s.categories.find(d=>String(d)===String(o))||(wn[o]?o:"");c?(tr(),kr(c)):I("Category banner is not available yet.","info")}}function yn(t){const e=t.target.closest("[data-route-home]"),r=t.target.closest(".product-detail-page [data-category]"),n=t.target.closest("[data-close-detail]"),i=t.target.closest("[data-variant]"),o=t.target.closest("[data-qty]"),c=t.target.closest("[data-detail-add]"),d=t.target.closest("[data-detail-favorite]"),u=t.target.closest("[data-reviews-retry]");if(e)return t.stopPropagation(),tr(),!0;if(r)return t.stopPropagation(),tr(),kr(r.dataset.category),!0;if(n)return t.stopPropagation(),a.detailDialog.close(),C(),!0;if(i)return t.stopPropagation(),s.selectedVariantId=i.dataset.variant,q(s.selectedDetailProduct),!0;if(o)return t.stopPropagation(),s.selectedQuantity=Math.max(1,s.selectedQuantity+(o.dataset.qty==="plus"?1:-1)),q(s.selectedDetailProduct),!0;if(d)return t.stopPropagation(),Mi(d.dataset.detailFavorite),!0;if(u)return t.stopPropagation(),Rr(u.dataset.reviewsRetry),!0;if(c){t.stopPropagation();const f=document.getElementById("quantityInput");return s.selectedQuantity=Math.max(1,Number((f==null?void 0:f.value)||s.selectedQuantity)),Ei(s.selectedDetailProduct.id,s.selectedVariantId,s.selectedQuantity),!0}return!1}function Cd(t){var o;const e=t.target.closest("[data-cart-retry]"),r=t.target.closest("[data-start-shopping]"),n=t.target.closest("[data-cart-qty]"),i=t.target.closest("[data-remove]");if(e&&J(),r&&(be(),(o=document.getElementById("products"))==null||o.scrollIntoView({behavior:"smooth",block:"start"})),n){const c=s.cartItems.find(d=>String(d.id)===String(n.dataset.cartId));c&&Nl(c.id,c.quantity+(n.dataset.cartQty==="plus"?1:-1))}i&&Ll(i.dataset.remove)}function Td(){if(!_()){R();return}a.cartDrawer.classList.add("open"),a.cartDrawer.setAttribute("aria-hidden","false"),M(),J()}function be(){a.cartDrawer.classList.remove("open"),a.cartDrawer.setAttribute("aria-hidden","true"),C()}function kd(){a.catalogDrawer.classList.add("open"),a.catalogDrawer.setAttribute("aria-hidden","false"),a.catalogButton.setAttribute("aria-expanded","true"),M()}function ot(){a.catalogDrawer.classList.remove("open"),a.catalogDrawer.setAttribute("aria-hidden","true"),a.catalogButton.setAttribute("aria-expanded","false"),C()}function M(){document.body.classList.add("locked")}function C(){const t=a.cartDrawer.classList.contains("open")||a.catalogDrawer.classList.contains("open")||a.profileDrawer.classList.contains("open")||a.notificationsDrawer.classList.contains("open"),e=[a.detailDialog,a.authDialog,a.apiDialog,a.checkoutDialog,a.ordersDialog,a.favoritesDialog,a.myReviewsDialog,a.writeReviewDialog].some(r=>r.open);!t&&!e&&document.body.classList.remove("locked")}function Pd(){a.baseUrl.value=s.baseUrl,a.apiDialog.showModal(),M()}function Rd(t){t.preventDefault(),s.baseUrl=St(a.baseUrl.value||""),localStorage.setItem(v.storageKeys.baseUrl,s.baseUrl),a.apiDialog.close(),Tt()}async function Mi(t){var o;if(!_()){R();return}const e=s.favoriteIds.has(String(t)),r=await m(`/api/favorites/${t}/toggle`,{method:"POST",requireAuth:!0});if(r===null)return;const n=typeof r=="object"&&"favorite"in r?!!r.favorite:!e,i=Dd(t);if(n){const c=i?{...i,favorite:!0}:null;c&&!s.favoriteProducts.some(d=>String(d.id)===String(t))&&(s.favoriteProducts=[c,...s.favoriteProducts])}else s.favoriteProducts=s.favoriteProducts.filter(c=>String(c.id)!==String(t));s.favoriteIds=new Set(s.favoriteProducts.map(c=>String(c.id))),s.favoritesCount=s.favoriteProducts.length,K(),Ve(),s.products.length&&P(a.grid,s.products,"Mahsulot topilmadi."),s.todayDeals.length&&P(a.dealsGrid,s.todayDeals.slice(0,8),"Bugungi takliflar topilmadi."),((o=s.selectedDetailProduct)==null?void 0:o.id)!==void 0&&String(s.selectedDetailProduct.id)===String(t)&&q(s.selectedDetailProduct),a.favoritesDialog.open&&me(),I(n?"Added to favorites":"Removed from favorites","success"),n&&!i&&await De({render:a.favoritesDialog.open})}function Dd(t){return[...s.products,...s.todayDeals,...s.favoriteProducts,s.selectedDetailProduct].filter(Boolean).find(e=>String(e.id)===String(t))}function Ld(){An(s),Rt(),Re(),s.currentRoute==="product"&&s.selectedDetailProduct?q(s.selectedDetailProduct):(P(a.grid,s.products,h("home.noProducts"),{screen:s.currentGridScreen}),P(a.dealsGrid,s.todayDeals.slice(0,8),h("home.noProducts")),s.homeApiSections&&wi(s.homeApiSections)),a.cartDrawer.classList.contains("open")&&F(),a.favoritesDialog.open&&me(),a.ordersDialog.open&&de(),a.notificationsDrawer.classList.contains("open")&&ue(),a.myReviewsDialog.open&&at(),_e()}Yi(Ld);async function Nd(){ls({onUnauthorized:()=>{vr(),Mr("login"),I(h("auth.sessionExpired"))},onLoginRequired:R,showToast:(t,e="error")=>I(t,e)});try{Ed(),An(s)}catch(t){console.error("Init event binding failed:",t),a.status.textContent=`UI ishga tushishda xatolik yuz berdi: ${t.message}`,I("UI ishga tushishda xatolik yuz berdi.");return}_e(),yi().catch(t=>{console.error("Auth startup failed:",t)}),Tt().then(()=>vt()).catch(t=>{console.error("Home loading failed:",t),s.demoProducts=!1,s.demoDeals=!1,a.status.textContent="",a.dealsStatus.textContent="",ne(a.grid,h("common.serverFailed"),h("common.tryAgain")),Re(),vt()})}function Od(){Hi(),Vi(),s.baseUrl=St(localStorage.getItem(v.storageKeys.baseUrl)||""),Wi(),et()&&(console.assert(document.getElementById("productGrid"),"productGrid missing"),console.assert(document.getElementById("dealsGrid"),"dealsGrid missing"),console.assert(document.getElementById("productStatus"),"productStatus missing"),console.assert(document.getElementById("dealsStatus"),"dealsStatus missing"),console.assert(document.getElementById("quickCategoryGrid"),"quickCategoryGrid missing")),Nd()}Od();
