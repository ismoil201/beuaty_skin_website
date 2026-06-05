(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const c of d.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(s){if(s.ep)return;s.ep=!0;const d=i(s);fetch(s.href,d)}})();const f={productionApiBaseUrl:"https://cosmetic-server-production.up.railway.app",defaultPageSize:24,searchDebounceMs:300,storageKeys:{accessToken:"zaven_token",legacyAccessToken:"accessToken",user:"zaven_user",legacyUser:"user",role:"role",baseUrl:"zaven_base_url",sessionId:"zaven_session_id",recentProducts:"zaven_recent_products",language:"beauty_skin_language"},placeholderImage:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"};function Ot(e){const r=String(e||"").trim().replace(/\/+$/,"").toLowerCase();return r?r.includes("localhost")||r.includes("127.0.0.1")||r.includes("0.0.0.0")||r.startsWith("file:"):!1}function pe(e){const r=String(e||"").trim().replace(/\/+$/,"");return!r||r.includes("cosmetic-server-production.up.railway.app")||Ot(r)?"":r}function Bt(e,r){try{return JSON.parse(localStorage.getItem(e)||"null")||r}catch{return r}}function ve(){return localStorage.getItem(f.storageKeys.accessToken)||localStorage.getItem(f.storageKeys.legacyAccessToken)||""}function qt(){let e=localStorage.getItem(f.storageKeys.sessionId);return e||(e=`web-${Date.now()}-${Math.random().toString(36).slice(2,10)}`,localStorage.setItem(f.storageKeys.sessionId,e)),e}function Ut(){const e=localStorage.getItem(f.storageKeys.legacyAccessToken);!localStorage.getItem(f.storageKeys.accessToken)&&e&&localStorage.setItem(f.storageKeys.accessToken,e);const i=localStorage.getItem(f.storageKeys.legacyUser);!localStorage.getItem(f.storageKeys.user)&&i&&localStorage.setItem(f.storageKeys.user,i)}function Ft(){const e=localStorage.getItem(f.storageKeys.baseUrl)||"",r=pe(e);r!==e.trim().replace(/\/+$/,"")&&(r?localStorage.setItem(f.storageKeys.baseUrl,r):localStorage.removeItem(f.storageKeys.baseUrl))}const a={homeView:null,languageSelect:null,grid:null,dealsGrid:null,homeApiSections:null,recentlyViewedSection:null,recentlyViewedGrid:null,banners:null,announcements:null,categoryToolbar:null,quickCategoryGrid:null,catalogButton:null,catalogDrawer:null,closeCatalog:null,catalogList:null,status:null,dealsStatus:null,productsMode:null,dealsMode:null,title:null,loadMore:null,searchForm:null,searchInput:null,cartButton:null,cartDrawer:null,closeCart:null,cartItems:null,cartCount:null,cartSummary:null,cartTotal:null,authDialog:null,authForm:null,authTitle:null,loginTab:null,registerTab:null,loginFields:null,registerFields:null,authSubmit:null,authMessage:null,loginButton:null,favoritesButton:null,favoritesCount:null,favoritesDialog:null,favoritesSummary:null,favoritesContent:null,refreshFavorites:null,closeFavorites:null,notificationsButton:null,notificationsCount:null,notificationsDrawer:null,notificationsSummary:null,notificationsContent:null,refreshNotifications:null,closeNotifications:null,loginEmail:null,loginPassword:null,registerFullName:null,registerEmail:null,registerPhone:null,registerPassword:null,registerConfirmPassword:null,profileDrawer:null,closeProfile:null,profileContent:null,apiDialog:null,apiForm:null,apiButton:null,baseUrl:null,detailDialog:null,detailContent:null,productDetailPage:null,productDetailPageContent:null,checkoutButton:null,checkoutDialog:null,checkoutForm:null,checkoutHint:null,receiverSelect:null,addressSelect:null,checkoutContent:null,refreshHome:null,ordersButton:null,ordersDialog:null,ordersContent:null,refreshOrders:null,closeOrders:null,myReviewsDialog:null,myReviewsContent:null,myReviewsSummary:null,refreshMyReviews:null,closeMyReviews:null,writeReviewDialog:null,writeReviewForm:null,closeWriteReview:null,writeReviewProduct:null,reviewRatingSelector:null,reviewContent:null,reviewImages:null,reviewImageFiles:null,reviewUploadStatus:null,reviewFormMessage:null,submitReviewButton:null,toast:null},xt={homeView:"homeView",languageSelect:"languageSelect",grid:"productGrid",dealsGrid:"dealsGrid",homeApiSections:"homeApiSections",recentlyViewedSection:"recentlyViewedSection",recentlyViewedGrid:"recentlyViewedGrid",banners:"banners",announcements:"announcements",categoryToolbar:"categoryToolbar",quickCategoryGrid:"quickCategoryGrid",catalogButton:"catalogButton",catalogDrawer:"catalogDrawer",closeCatalog:"closeCatalog",catalogList:"catalogList",status:"productStatus",dealsStatus:"dealsStatus",productsMode:"productsMode",dealsMode:"dealsMode",title:"productsTitle",loadMore:"loadMore",searchForm:"searchForm",searchInput:"searchInput",cartButton:"cartButton",cartDrawer:"cartDrawer",closeCart:"closeCart",cartItems:"cartItems",cartCount:"cartCount",cartSummary:"cartSummary",cartTotal:"cartTotal",authDialog:"authDialog",authForm:"authForm",authTitle:"authTitle",loginTab:"loginTab",registerTab:"registerTab",loginFields:"loginFields",registerFields:"registerFields",authSubmit:"authSubmit",authMessage:"authMessage",loginButton:"loginButton",favoritesButton:"favoritesButton",favoritesCount:"favoritesCount",favoritesDialog:"favoritesDialog",favoritesSummary:"favoritesSummary",favoritesContent:"favoritesContent",refreshFavorites:"refreshFavorites",closeFavorites:"closeFavorites",notificationsButton:"notificationsButton",notificationsCount:"notificationsCount",notificationsDrawer:"notificationsDrawer",notificationsSummary:"notificationsSummary",notificationsContent:"notificationsContent",refreshNotifications:"refreshNotifications",closeNotifications:"closeNotifications",loginEmail:"loginEmail",loginPassword:"loginPassword",registerFullName:"registerFullName",registerEmail:"registerEmail",registerPhone:"registerPhone",registerPassword:"registerPassword",registerConfirmPassword:"registerConfirmPassword",profileDrawer:"profileDrawer",closeProfile:"closeProfile",profileContent:"profileContent",apiDialog:"apiDialog",apiForm:"apiForm",apiButton:"apiButton",baseUrl:"baseUrl",detailDialog:"detailDialog",detailContent:"detailContent",productDetailPage:"productDetailPage",productDetailPageContent:"productDetailPageContent",checkoutButton:"checkoutButton",checkoutDialog:"checkoutDialog",checkoutForm:"checkoutForm",checkoutHint:"checkoutHint",receiverSelect:"receiverSelect",addressSelect:"addressSelect",checkoutContent:"checkoutContent",refreshHome:"refreshHome",ordersButton:"ordersButton",ordersDialog:"ordersDialog",ordersContent:"ordersContent",refreshOrders:"refreshOrders",closeOrders:"closeOrders",myReviewsDialog:"myReviewsDialog",myReviewsContent:"myReviewsContent",myReviewsSummary:"myReviewsSummary",refreshMyReviews:"refreshMyReviews",closeMyReviews:"closeMyReviews",writeReviewDialog:"writeReviewDialog",writeReviewForm:"writeReviewForm",closeWriteReview:"closeWriteReview",writeReviewProduct:"writeReviewProduct",reviewRatingSelector:"reviewRatingSelector",reviewContent:"reviewContent",reviewImages:"reviewImages",reviewImageFiles:"reviewImageFiles",reviewUploadStatus:"reviewUploadStatus",reviewFormMessage:"reviewFormMessage",submitReviewButton:"submitReviewButton",toast:"toast"};function Ht(){Object.entries(xt).forEach(([e,r])=>{a[e]=document.getElementById(r)})}const dt={SKINCARE:"Skincare",MAKEUP:"Makeup",COLLAGEN:"Collagen",HAIR_CARE:"Hair Care",FRAGRANCE:"Fragrance",TOP:"Top",OUTER:"Outer",PANTS:"Pants",SHOES:"Shoes",BAG:"Bag",ACCESSORY:"Accessory"},ct=["uz","en","ru","ko"],J="uz",Kt=[{category:"SKINCARE",icon:"S"},{category:"MAKEUP",icon:"M"},{category:"COLLAGEN",icon:"C"},{category:"HAIR_CARE",icon:"H"},{category:"FRAGRANCE",icon:"F"},{category:"BAG",icon:"B"},{category:"SHOES",icon:"S"},{category:"ACCESSORY",icon:"A"}],t={baseUrl:pe(localStorage.getItem(f.storageKeys.baseUrl)||""),accessToken:ve(),user:Bt(f.storageKeys.user,null),role:localStorage.getItem(f.storageKeys.role)||"",authMode:"login",authLoading:!1,profileEditing:!1,lastApiError:"",products:[],todayDeals:[],categories:[],cart:[],cartItems:[],cartLoading:!1,cartError:"",cartCount:0,cartTotal:0,cartUpdatingIds:new Set,addingProductIds:new Set,receivers:[],addresses:[],selectedReceiverId:null,selectedAddressId:null,checkoutLoading:!1,orderSubmitting:!1,checkoutError:"",orderSuccess:null,orders:[],ordersLoading:!1,ordersError:"",selectedOrder:null,selectedOrderHistory:[],orderDetailLoading:!1,orderDetailError:"",orderHistoryWarning:"",favoriteProducts:[],favoriteIds:new Set,favoritesLoading:!1,favoritesError:"",favoritesCount:0,productReviewsByProductId:{},productReviewsLoading:{},productReviewsError:{},myReviews:[],myReviewsLoading:!1,myReviewsError:"",reviewSubmitting:!1,reviewDraft:null,reviewRating:5,notifications:[],notificationsLoading:!1,notificationsError:"",unreadCount:0,unreadCountLoading:!1,notificationUpdatingIds:new Set,currentRoute:"home",detailLoading:!1,detailError:"",recommendedProducts:[],recommendedSimilar:[],recommendedOthers:[],recommendationsLoading:!1,recommendationsError:"",selectedCategory:"ALL",selectedDetailProduct:null,selectedVariantId:null,selectedQuantity:1,searchTimer:null,isLoading:!1,demoCategories:!1,demoProducts:!1,demoDeals:!1,homeLoadedFromApi:!1,feedLoading:!1,feedPage:0,currentSearchQuery:"",currentGridScreen:"home",impressionsSent:new Set,impressionObserver:null,sessionId:qt(),banners:[],announcements:[],recentlyViewed:[],uploadingReviewImages:!1};function n(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}const ut={"header.location":"📍 Toshkent","header.extraLinks":"Qo‘shimcha havolalar","header.pickupPoints":"Punktlar","header.sell":"Sotuvchi bo‘lish","header.support":"Savol-javob","header.orders":"Buyurtmalar","header.language":"Til","header.homeAria":"BEAUTY SKIN KOREA bosh sahifa","header.openCatalog":"Katalogni ochish","header.catalog":"Katalog","header.search":"Qidirish","header.searchPlaceholder":"Mahsulot va kategoriyalarni qidirish","header.mainMenu":"Asosiy menyu","header.loginProfile":"Profil yoki kirish","auth.login":"Kirish","auth.register":"Ro‘yxatdan o‘tish","auth.email":"Email","auth.password":"Parol","auth.confirmPassword":"Parolni tasdiqlang","auth.fullName":"To‘liq ism","auth.phone":"Telefon","auth.signIn":"Kirish","auth.createAccount":"Hisob yaratish","auth.logout":"Chiqish","auth.loginRequired":"Davom etish uchun kiring","auth.sessionExpired":"Sessiya tugadi. Qayta kiring.","auth.emailRequired":"Email majburiy.","auth.passwordMin":"Parol kamida 6 ta belgi bo‘lsin.","auth.fullNameRequired":"To‘liq ism majburiy.","auth.phoneRequired":"Telefon majburiy.","auth.passwordMismatch":"Parollar mos emas.","home.all":"Hammasi","home.categories":"Kategoriyalar","home.quickCategories":"Tezkor kategoriyalar","home.todayDeals":"Bugungi takliflar","home.discounts":"Chegirmalar","home.newArrivals":"Yangi mahsulotlar","home.popular":"Ommabop mahsulotlar","home.recommended":"Siz uchun tavsiyalar","home.similar":"O‘xshash mahsulotlar","home.others":"Boshqalar ham ko‘rgan","home.demoMode":"Demo rejim","home.todayOnly":"Faqat bugun","home.startShopping":"Xaridni boshlash","home.showAll":"Barcha mahsulotlar","home.loadMore":"Yana yuklash","home.noProducts":"Mahsulot topilmadi","home.loading":"Yuklanmoqda...","product.addToCart":"Savatga","product.addToCartFull":"Savatga qo‘shish","product.adding":"Qo‘shilmoqda...","product.sold":"{count} dona sotilgan","product.stock":"Omborda: {count}","product.outOfStock":"Omborda yo‘q","product.save":"Saqlash","product.saved":"Saqlangan","product.viewDetails":"Batafsil","product.reviews":"Sharhlar","product.home":"Bosh sahifa","product.description":"Tavsif","product.detailImages":"Batafsil rasmlar","product.details":"Tafsilotlar","product.delivery":"O‘zbekiston bo‘ylab yetkazib berish","product.secure":"Xavfsiz to‘lov","product.original":"Asl koreys mahsulotlari","product.quantity":"Miqdor","product.notFound":"Mahsulot topilmadi","product.backToShopping":"Xaridga qaytish","product.variantUnavailable":"Variant mavjud emas","cart.title":"Savat","cart.empty":"Savatingiz bo‘sh","cart.subtotal":"Jami","cart.checkout":"Rasmiylashtirish","cart.remove":"O‘chirish","cart.quantity":"Miqdor","cart.added":"Savatga qo‘shildi","cart.itemRemoved":"Mahsulot o‘chirildi","cart.quantityUpdated":"Miqdor yangilandi","cart.unavailable":"Savat mavjud emas","checkout.title":"Rasmiylashtirish","checkout.receiver":"Qabul qiluvchi","checkout.address":"Yetkazib berish manzili","checkout.orderSummary":"Buyurtma xulosasi","checkout.placeOrder":"Buyurtma berish","checkout.orderCreated":"Buyurtma yaratildi","checkout.continueShopping":"Xaridni davom ettirish","checkout.viewOrders":"Buyurtmalarni ko‘rish","orders.title":"Mening buyurtmalarim","orders.order":"Buyurtma","orders.details":"Buyurtma tafsilotlari","orders.history":"Status tarixi","orders.none":"Hali buyurtmalar yo‘q","orders.refresh":"Yangilash","orders.viewDetails":"Batafsil","orders.items":"{count} ta mahsulot","favorites.title":"Saralangan","favorites.empty":"Hali saralangan mahsulotlar yo‘q","favorites.added":"Saralanganlarga qo‘shildi","favorites.removed":"Saralangandan olib tashlandi","profile.myProfile":"Profil","profile.edit":"Profilni tahrirlash","profile.save":"Saqlash","profile.myOrders":"Buyurtmalarim","profile.myReviews":"Sharhlarim","reviews.my":"Mening sharhlarim","reviews.write":"Sharh yozish","reviews.submit":"Sharh yuborish","reviews.rating":"Reyting","reviews.content":"Sharh matni","reviews.none":"Hali sharhlar yo‘q","reviews.noText":"Matnli sharh yo‘q.","reviews.submitted":"Sharh yuborildi","notifications.title":"Bildirishnomalar","notifications.alerts":"Xabarlar","notifications.none":"Hali bildirishnomalar yo‘q","notifications.markRead":"O‘qildi deb belgilash","notifications.read":"O‘qilgan","notifications.unread":"O‘qilmagan","common.tryAgain":"Qayta urinish","common.somethingWrong":"Nimadir xato ketdi","common.serverFailed":"Server bilan aloqa bo‘lmadi","common.saving":"Saqlanmoqda...","common.total":"Jami","common.unknown":"Noma’lum","common.unavailable":"Mavjud emas","status.NEW":"Yangi","status.CONFIRMED":"Tasdiqlangan","status.PACKED":"Qadoqlangan","status.SHIPPED":"Yuborilgan","status.DELIVERED":"Yetkazilgan","status.CANCELED":"Bekor qilingan","notification.ORDER":"Buyurtma","notification.PROMO":"Aksiya","notification.SYSTEM":"Tizim","category.SKINCARE":"Teri parvarishi","category.MAKEUP":"Makiyaj","category.COLLAGEN":"Kollagen","category.HAIR_CARE":"Soch parvarishi","category.FRAGRANCE":"Atirlar","category.TOP":"Ustki kiyim","category.OUTER":"Tashqi kiyim","category.PANTS":"Shimlar","category.SHOES":"Poyabzal","category.BAG":"Sumka","category.ACCESSORY":"Aksessuar","hero.eyebrow":"Eng yaxshi kunlik takliflar","hero.title":"Koreys go‘zallik mahsulotlari","hero.subtitle":"O‘zbekiston bo‘ylab tez yetkazib berish — kosmetika, teri parvarishi, atir va aksessuarlar.","hero.viewProducts":"Mahsulotlarni ko‘rish","hero.fastDelivery":"Tez yetkazib berish","hero.fastDeliverySub":"O‘zbekiston bo‘ylab","home.history":"Tarix","home.recentlyViewed":"Yaqinda ko‘rilgan","api.title":"API sozlamasi","api.save":"Saqlash"},Ne={...ut,"header.location":"📍 Tashkent","header.pickupPoints":"Pickup points","header.sell":"Sell on Beauty Skin Korea","header.support":"Support","header.orders":"Orders","header.language":"Language","header.catalog":"Catalog","header.searchPlaceholder":"Search products and categories","header.search":"Search","auth.login":"Login","auth.register":"Register","auth.signIn":"Sign in","auth.createAccount":"Create account","auth.logout":"Logout","auth.loginRequired":"Please login to continue","auth.emailRequired":"Email is required.","auth.passwordMin":"Password must be at least 6 characters.","auth.fullNameRequired":"Full name is required.","auth.phoneRequired":"Phone is required.","auth.passwordMismatch":"Passwords do not match.","home.all":"All","home.categories":"Categories","home.quickCategories":"Quick categories","home.todayDeals":"Today deals","home.discounts":"Discounts","home.newArrivals":"New arrivals","home.popular":"Popular products","home.recommended":"Recommended for you","home.similar":"Similar products","home.others":"Others also viewed","home.demoMode":"Demo mode","home.todayOnly":"Today only","home.startShopping":"Start shopping","home.showAll":"Show all products","home.loadMore":"Load more","home.noProducts":"No products found","home.loading":"Loading...","product.addToCart":"Add to cart","product.addToCartFull":"Add to cart","product.adding":"Adding...","product.sold":"{count} sold","product.stock":"Stock: {count}","product.save":"Save","product.saved":"Saved","product.viewDetails":"View details","product.reviews":"Reviews","product.description":"Description","product.detailImages":"Detail images","product.delivery":"Delivery across Uzbekistan","product.secure":"Secure checkout","product.original":"Original Korean products","product.notFound":"Product not found","product.backToShopping":"Back to shopping","cart.title":"Cart","cart.empty":"Your cart is empty","cart.subtotal":"Subtotal","cart.checkout":"Checkout","cart.added":"Added to cart","cart.itemRemoved":"Removed from cart","cart.quantityUpdated":"Quantity updated","orders.title":"My orders","orders.none":"You have no orders yet","favorites.title":"Favorites","favorites.empty":"No favorite products yet","reviews.none":"No reviews yet","notifications.title":"Notifications","notifications.alerts":"Alerts","notifications.none":"No notifications yet","common.tryAgain":"Try again","common.serverFailed":"Server connection failed","common.total":"Total","checkout.title":"Checkout","orders.refresh":"Refresh","reviews.my":"My reviews","reviews.write":"Write review","reviews.submit":"Submit review","hero.eyebrow":"Best daily offers","hero.title":"Korean beauty products","hero.subtitle":"Fast delivery across Uzbekistan — cosmetics, skincare, fragrance and accessories.","hero.viewProducts":"View products","hero.fastDelivery":"Fast delivery","hero.fastDeliverySub":"Across Uzbekistan","home.history":"History","home.recentlyViewed":"Recently viewed","api.title":"API settings","api.save":"Save"},zt={...Ne,"header.location":"📍 Ташкент","header.pickupPoints":"Пункты выдачи","header.sell":"Стать продавцом","header.support":"Поддержка","header.orders":"Заказы","header.language":"Язык","header.catalog":"Каталог","header.searchPlaceholder":"Искать товары и категории","auth.login":"Войти","auth.register":"Регистрация","auth.logout":"Выйти","auth.loginRequired":"Войдите, чтобы продолжить","auth.emailRequired":"Email обязателен.","auth.passwordMin":"Пароль должен быть не менее 6 символов.","auth.fullNameRequired":"Полное имя обязательно.","auth.phoneRequired":"Телефон обязателен.","auth.passwordMismatch":"Пароли не совпадают.","home.all":"Все","home.categories":"Категории","home.quickCategories":"Быстрые категории","home.todayDeals":"Предложения дня","home.discounts":"Скидки","home.newArrivals":"Новинки","home.popular":"Популярные товары","home.recommended":"Рекомендуем вам","home.similar":"Похожие товары","home.others":"Также смотрели","home.startShopping":"Начать покупки","home.loadMore":"Загрузить еще","product.addToCart":"В корзину","product.addToCartFull":"В корзину","product.sold":"Продано: {count}","product.save":"Сохранить","product.saved":"Сохранено","product.description":"Описание","product.detailImages":"Детальные изображения","product.details":"Детали","product.reviews":"Отзывы","product.delivery":"Доставка по Узбекистану","product.secure":"Безопасная оплата","product.original":"Оригинальная корейская косметика","cart.title":"Корзина","cart.empty":"Корзина пуста","cart.checkout":"Оформить","orders.title":"Мои заказы","favorites.title":"Избранное","reviews.none":"Пока нет отзывов","notifications.title":"Уведомления","status.NEW":"Новый","status.CONFIRMED":"Подтвержден","status.PACKED":"Упакован","status.SHIPPED":"Отправлен","status.DELIVERED":"Доставлен","status.CANCELED":"Отменен","category.SKINCARE":"Уход за кожей","category.MAKEUP":"Макияж","category.COLLAGEN":"Коллаген","category.HAIR_CARE":"Уход за волосами","category.FRAGRANCE":"Парфюм","category.TOP":"Верх","category.OUTER":"Верхняя одежда","category.PANTS":"Брюки","category.SHOES":"Обувь","category.BAG":"Сумки","category.ACCESSORY":"Аксессуары","home.todayOnly":"Только сегодня","checkout.title":"Оформление","orders.refresh":"Обновить","reviews.my":"Мои отзывы","reviews.write":"Написать отзыв","reviews.submit":"Отправить отзыв","hero.eyebrow":"Лучшие предложения дня","hero.title":"Корейская косметика","hero.subtitle":"Быстрая доставка по Узбекистану — косметика, уход, парфюм и аксессуары.","hero.viewProducts":"Смотреть товары","hero.fastDelivery":"Быстрая доставка","hero.fastDeliverySub":"По всему Узбекистану","home.history":"История","home.recentlyViewed":"Недавно просмотренные","api.title":"Настройки API","api.save":"Сохранить"},Gt={...Ne,"header.location":"📍 타슈켄트","header.pickupPoints":"픽업 지점","header.sell":"판매자 되기","header.support":"고객 지원","header.orders":"주문","header.language":"언어","header.catalog":"카탈로그","header.searchPlaceholder":"상품 및 카테고리 검색","auth.login":"로그인","auth.register":"회원가입","auth.logout":"로그아웃","auth.loginRequired":"계속하려면 로그인하세요","auth.emailRequired":"이메일은 필수입니다.","auth.passwordMin":"비밀번호는 6자 이상이어야 합니다.","auth.fullNameRequired":"이름은 필수입니다.","auth.phoneRequired":"전화번호는 필수입니다.","auth.passwordMismatch":"비밀번호가 일치하지 않습니다.","home.all":"전체","home.categories":"카테고리","home.quickCategories":"빠른 카테고리","home.todayDeals":"오늘의 특가","home.discounts":"할인","home.newArrivals":"신상품","home.popular":"인기 상품","home.recommended":"추천 상품","home.similar":"비슷한 상품","home.others":"함께 본 상품","home.startShopping":"쇼핑 시작","home.loadMore":"더 보기","product.addToCart":"장바구니","product.addToCartFull":"장바구니 담기","product.sold":"{count}개 판매","product.save":"저장","product.saved":"저장됨","product.description":"설명","product.detailImages":"상세 이미지","product.details":"상세 정보","product.reviews":"리뷰","product.delivery":"우즈베키스탄 전역 배송","product.secure":"안전한 결제","product.original":"정품 한국 제품","cart.title":"장바구니","cart.empty":"장바구니가 비어 있습니다","cart.checkout":"결제","orders.title":"내 주문","favorites.title":"찜","reviews.none":"아직 리뷰가 없습니다","notifications.title":"알림","status.NEW":"신규","status.CONFIRMED":"확인됨","status.PACKED":"포장됨","status.SHIPPED":"배송 중","status.DELIVERED":"배송 완료","status.CANCELED":"취소됨","category.SKINCARE":"스킨케어","category.MAKEUP":"메이크업","category.COLLAGEN":"콜라겐","category.HAIR_CARE":"헤어 케어","category.FRAGRANCE":"향수","category.TOP":"상의","category.OUTER":"아우터","category.PANTS":"바지","category.SHOES":"신발","category.BAG":"가방","category.ACCESSORY":"액세서리","home.todayOnly":"오늘 한정","checkout.title":"결제","orders.refresh":"새로고침","reviews.my":"내 리뷰","reviews.write":"리뷰 작성","reviews.submit":"리뷰 제출","hero.eyebrow":"오늘의 베스트 특가","hero.title":"한국 뷰티 제품","hero.subtitle":"우즈베키스탄 전역 빠른 배송 — 화장품, 스킨케어, 향수, 액세서리.","hero.viewProducts":"상품 보기","hero.fastDelivery":"빠른 배송","hero.fastDeliverySub":"우즈베키스탄 전역","home.history":"기록","home.recentlyViewed":"최근 본 상품","api.title":"API 설정","api.save":"저장"},Q={uz:ut,en:Ne,ru:zt,ko:Gt};let ee=jt();function jt(){const e=localStorage.getItem(f.storageKeys.language);return ct.includes(e)?e:J}function mt(){return ee}function l(e,r={}){var d;const i=Q[ee]||Q[J],o=Q.en||Q[J],s=(i==null?void 0:i[e])??(o==null?void 0:o[e])??((d=Q[J])==null?void 0:d[e])??e;return String(s).replace(/\{(\w+)\}/g,(c,u)=>r[u]??"")}let gt=()=>{};function Vt(e){gt=e}function Yt(e){const r=ct.includes(e)?e:J;ee=r,localStorage.setItem(f.storageKeys.language,r),gt()}function ft(e){var i;document.documentElement.lang=ee,document.title=(e==null?void 0:e.currentRoute)==="product"&&((i=e==null?void 0:e.selectedDetailProduct)!=null&&i.name)?`${e.selectedDetailProduct.name} - BEAUTY SKIN KOREA`:"BEAUTY SKIN KOREA";const r=document.getElementById("languageSelect");r&&(r.value=ee),document.querySelectorAll("[data-i18n]").forEach(o=>{o.textContent=l(o.dataset.i18n)}),document.querySelectorAll("[data-i18n-placeholder]").forEach(o=>{o.setAttribute("placeholder",l(o.dataset.i18nPlaceholder))}),document.querySelectorAll("[data-i18n-title]").forEach(o=>{o.setAttribute("title",l(o.dataset.i18nTitle))}),document.querySelectorAll("[data-i18n-aria-label]").forEach(o=>{o.setAttribute("aria-label",l(o.dataset.i18nAriaLabel))})}function y(e){const r=Number(e);return Number.isFinite(r)?r:0}function Me(e){return e?typeof e=="string"?e:e.imageUrl||e.url||"":""}function de(e){return Array.isArray(e)?e.map(r=>Me(r)).filter(Boolean):[]}function p(e){return Array.isArray(e==null?void 0:e.content)?e.content:Array.isArray(e)?e:[]}function b(e={}){const r=Array.isArray(e.variants)?e.variants:[],i=r.find(h=>Number(h.stock||0)>0)||r[0]||null,o=de(e.images),s=de(e.detailImages),d=Me(e.mainImageUrl)||o[0]||e.imageUrl||f.placeholderImage,c=y(e.price??(i==null?void 0:i.price)),u=y((i==null?void 0:i.discountPrice)??e.discountPrice??e.price),g=c>u&&c>0?Math.round((c-u)/c*100):0;return{id:e.id,name:e.name||"Mahsulot",description:e.description||"",brand:e.brand||"",category:e.category||"",image:d,images:o.length?o:[d],detailImages:s,price:y(e.price),originalPrice:c,discountPrice:y(e.discountPrice),finalPrice:u,discountPercent:g,stock:y(e.stock),ratingAvg:y(e.ratingAvg),reviewCount:y(e.reviewCount),soldCount:y(e.soldCount),todayDeal:!!e.todayDeal,favorite:!!e.favorite,variants:r,raw:e}}function _t(e={}){var d,c,u,g;const r=b(e.product||((d=e.variant)==null?void 0:d.product)||e),i=y(e.quantity)||1,o=y(e.unitPrice||r.finalPrice),s=y(e.lineTotal||o*i);return{id:e.id||e.cartItemId,productId:r.id,product:r,image:r.image,name:r.name,brand:r.brand,variantId:e.variantId||((c=e.variant)==null?void 0:c.id),variantLabel:e.variantLabel||((u=e.variant)==null?void 0:u.label)||"",unitPrice:o,lineTotal:s,quantity:i,stock:y(e.stock??((g=e.variant)==null?void 0:g.stock)??r.stock)}}function Wt(e={}){return b(e.product||e)}function Qt(e){return typeof e=="string"?e:(e==null?void 0:e.code)||(e==null?void 0:e.name)||(e==null?void 0:e.title)||""}function Jt(e={}){var o,s;const r=e.product||{},i=Me(e.mainImageUrl||r.mainImageUrl);return{id:e.id||e.orderItemId,productId:e.productId||r.id||((o=e.product)==null?void 0:o.id),orderId:e.orderId,name:e.productName||e.name||r.name||"Product",image:e.imageUrl||i||r.imageUrl||de(r.images)[0]||f.placeholderImage,variantLabel:e.variantLabel||((s=e.variant)==null?void 0:s.label)||"",quantity:y(e.quantity)||1,unitPrice:y(e.unitPrice||e.price||r.discountPrice||r.price),lineTotal:y(e.lineTotal||e.total||e.price||0)}}function ht(e={}){var r,i,o,s,d,c;return{id:e.id||e.reviewId||`${e.productId||"product"}-${e.orderId||"order"}-${e.createdAt||""}`,productId:e.productId||((r=e.product)==null?void 0:r.id)||((i=e.orderItem)==null?void 0:i.productId),orderId:e.orderId||((o=e.order)==null?void 0:o.id)||((s=e.orderItem)==null?void 0:s.orderId),rating:Math.min(5,Math.max(0,y(e.rating))),content:e.content||e.reviewContent||e.comment||"",imageUrls:Array.isArray(e.imageUrls)?e.imageUrls.filter(Boolean):de(e.images),createdAt:e.createdAt||e.createdDate||e.reviewedAt||"",userName:e.userName||e.fullName||((d=e.user)==null?void 0:d.fullName)||((c=e.user)==null?void 0:c.name)||"Customer"}}function Zt(e={}){return{id:e.id||e.notificationId,title:e.title||e.subject||"Notification",message:e.message||e.content||"",type:String(e.type||"SYSTEM").toUpperCase(),read:!!(e.read??e.isRead),createdAt:e.createdAt||e.createdDate||"",refId:e.refId||e.referenceId||e.orderId||null,raw:e}}function Xt(e){var r;return Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray((r=e==null?void 0:e.data)==null?void 0:r.content)?e.data.content:Array.isArray(e==null?void 0:e.content)?e.content:Array.isArray(e)?e:[]}function er(e={}){var g,h,w;const r=e.review||e.reviewResponse||(e.rating||e.content?e:null),i=b(e.product||e.productCard||e.productResponse||e),o=r?ht({...r,productId:r.productId||i.id,orderId:r.orderId||e.orderId}):null,s=e.productId||(o==null?void 0:o.productId)||i.id,d=e.orderId||((g=e.order)==null?void 0:g.id)||((h=e.orderResponse)==null?void 0:h.id)||(o==null?void 0:o.orderId),c=e.status||e.orderStatus||((w=e.order)==null?void 0:w.status)||"",u=!!(o!=null&&o.content||o!=null&&o.rating);return{id:e.id||e.orderItemId||(o==null?void 0:o.id)||`${s||"product"}-${d||"order"}`,productId:s,orderId:d,product:i,image:i.image||e.imageUrl||f.placeholderImage,name:e.productName||e.name||(i.name&&i.name!=="Mahsulot"?i.name:`Product #${s||"-"}`),brand:i.brand||e.brand||"",status:c,review:o,hasReview:u,reviewable:!!(s&&d&&!u),raw:e}}function tr(e){var r,i,o,s;return Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray((r=e==null?void 0:e.data)==null?void 0:r.content)?e.data.content:Array.isArray((i=e==null?void 0:e.data)==null?void 0:i.items)?e.data.items:Array.isArray((o=e==null?void 0:e.data)==null?void 0:o.reviews)?e.data.reviews:Array.isArray((s=e==null?void 0:e.data)==null?void 0:s.reviewableItems)?e.data.reviewableItems:Array.isArray(e==null?void 0:e.reviews)?e.reviews:Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e==null?void 0:e.reviewableItems)?e.reviewableItems:Array.isArray(e==null?void 0:e.content)?e.content:Array.isArray(e)?e:[]}function z(e){if(!e)return"";const r=`category.${e}`,i=l(r);return i!==r?i:dt[e]||e.toLowerCase().split("_").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(" ")}function pt(e){t.cartItems=e,t.cart=e,t.cartCount=e.reduce((r,i)=>r+i.quantity,0),t.cartTotal=e.reduce((r,i)=>r+i.lineTotal,0)}function Le(){pt([]),t.cartLoading=!1,t.cartError="",t.cartUpdatingIds=new Set}function rr(e){t.favoriteProducts=e.filter(r=>r.id!==void 0&&r.id!==null),t.favoriteIds=new Set(t.favoriteProducts.map(r=>String(r.id))),t.favoritesCount=t.favoriteProducts.length,T()}function De(){t.favoriteProducts=[],t.favoriteIds=new Set,t.favoritesLoading=!1,t.favoritesError="",t.favoritesCount=0,T()}function T(){var e;t.products=t.products.map(r=>({...r,favorite:t.favoriteIds.has(String(r.id))})),t.todayDeals=t.todayDeals.map(r=>({...r,favorite:t.favoriteIds.has(String(r.id))})),((e=t.selectedDetailProduct)==null?void 0:e.id)!==void 0&&(t.selectedDetailProduct={...t.selectedDetailProduct,favorite:t.favoriteIds.has(String(t.selectedDetailProduct.id))})}function vt(){var e;try{return((e=import.meta)==null?void 0:e.env)??{}}catch{return{}}}function ie(){return!!vt().DEV}function ar(e){try{return JSON.parse(e)}catch{return e}}function ir(e,r){return typeof e=="string"&&e.trim()?e:(e==null?void 0:e.message)||(e==null?void 0:e.error)||`API xatosi: HTTP ${r}`}let x={onUnauthorized:()=>{},onLoginRequired:()=>{},showToast:()=>{}};function or(e={}){x={...x,...e}}function nr(e,r){const i=e.startsWith("/")?e:`/${e}`,o=t.baseUrl?t.baseUrl.replace(/\/+$/,""):"",s=new URL(`${o}${i}`,window.location.origin);return r&&Object.entries(r).forEach(([d,c])=>{c!=null&&c!==""&&s.searchParams.set(d,c)}),s.toString()}async function m(e,r={}){const{query:i,showError:o=!0,requireAuth:s=!1,silentAuth:d=!1,...c}=r,u=nr(e,i),g={Accept:"application/json",...c.body?{"Content-Type":"application/json"}:{},...c.headers||{}},h=ve();if(h&&(g.Authorization=`Bearer ${h}`),s&&!h)return t.lastApiError="Please login to continue",x.onLoginRequired(),null;if(ie()){const w=vt();console.info("[API REQUEST]",{path:e,requestUrl:u,method:c.method||"GET",query:i,baseUrl:t.baseUrl,host:window.location.host,mode:w.MODE,envBase:w.VITE_API_BASE_URL})}try{t.lastApiError="";const w=await fetch(u,{...c,headers:g}),W=await w.text(),Ie=W?ar(W):null;if(ie()&&console.info("[API RESPONSE]",{requestUrl:u,status:w.status,ok:w.ok,payload:Ie}),w.status===401)return t.lastApiError="Session expired. Please login again.",d||x.onUnauthorized(),null;if(!w.ok){const rt=ir(Ie,w.status);return t.lastApiError=rt,o&&x.showToast(rt,"error"),null}return Ie}catch(w){return t.lastApiError="Server bilan aloqa bo‘lmadi",ie()&&console.error("[API ERROR]",{requestUrl:u,error:w}),o&&x.showToast("Server bilan aloqa vaqtincha ishlamayapti.","error"),null}}const sr=4200,lr=4;let A=null;function dr(){return A||(A=document.getElementById("toast"),A?(A.classList.add("toast-host"),A.setAttribute("aria-relevant","additions")):(A=document.createElement("div"),A.id="toast",A.className="toast-host",A.setAttribute("role","status"),A.setAttribute("aria-live","polite"),A.setAttribute("aria-relevant","additions"),document.body.appendChild(A)),A)}const at={success:"✓",error:"✕",warning:"!",info:"i"};function v(e,r="info"){var W;const i=String(e||"").trim();if(!i)return;const o=dr(),s=at[r]?r:"info",d=document.createElement("div");d.className=`toast-item toast-${s}`,d.setAttribute("role","status");const c=document.createElement("span");c.className="toast-icon",c.setAttribute("aria-hidden","true"),c.textContent=at[s];const u=document.createElement("span");u.className="toast-message",u.textContent=i;const g=document.createElement("button");for(g.type="button",g.className="toast-close",g.setAttribute("aria-label","Close"),g.textContent="×",d.append(c,u,g),o.appendChild(d);o.children.length>lr;)(W=o.firstElementChild)==null||W.remove();let h=0;const w=()=>{clearTimeout(h),d.classList.remove("show"),window.setTimeout(()=>d.remove(),220)};g.addEventListener("click",w),h=window.setTimeout(w,sr),requestAnimationFrame(()=>{requestAnimationFrame(()=>d.classList.add("show"))})}function cr(e){const r=(e==null?void 0:e.token)||(e==null?void 0:e.accessToken)||(e==null?void 0:e.jwt)||"",i={id:e==null?void 0:e.id,email:e==null?void 0:e.email,fullName:e==null?void 0:e.fullName,phone:(e==null?void 0:e.phone)||"",profileImage:(e==null?void 0:e.profileImage)||""};r&&localStorage.setItem(f.storageKeys.accessToken,r),localStorage.setItem(f.storageKeys.user,JSON.stringify(i)),localStorage.setItem(f.storageKeys.role,(e==null?void 0:e.role)||""),t.accessToken=r,t.user=i,t.role=(e==null?void 0:e.role)||""}function Oe(){var e,r;localStorage.removeItem(f.storageKeys.accessToken),localStorage.removeItem(f.storageKeys.legacyAccessToken),localStorage.removeItem(f.storageKeys.user),localStorage.removeItem(f.storageKeys.legacyUser),localStorage.removeItem(f.storageKeys.role),t.accessToken="",t.user=null,t.role="",Le(),D(),De(),re(),ae(),t.myReviews=[],t.myReviewsLoading=!1,t.myReviewsError="",(e=a.myReviewsDialog)!=null&&e.open&&a.myReviewsDialog.close(),(r=a.writeReviewDialog)!=null&&r.open&&a.writeReviewDialog.close(),G()}function S(){return!!ve()}function $(){et("login"),v(l("auth.loginRequired"),"warning")}async function yt(){if(!ve()){G();return}const e=await m("/api/users/me",{requireAuth:!0,showError:!1,silentAuth:!0});if(!e){Oe();return}t.user=e,localStorage.setItem(f.storageKeys.user,JSON.stringify(e)),G(),await Promise.allSettled([_(),F()])}function G(){const e=a.loginButton.querySelector("span");e&&(S()&&t.user?(e.textContent=Be(t.user.fullName)||l("profile.myProfile"),a.loginButton.setAttribute("aria-label",l("profile.myProfile"))):(e.textContent=l("auth.login"),a.loginButton.setAttribute("aria-label",l("auth.login"))))}function Be(e=""){return String(e).trim().split(/\s+/)[0]||""}function I(e){const r=mt(),i={uz:"so‘m",en:"UZS",ru:"сум",ko:"UZS"};return`${new Intl.NumberFormat(r==="uz"?"uz-UZ":r).format(y(e))} ${i[r]||"UZS"}`}function qe(e){return I(e)}function V(e){if(!e)return"";const r=new Date(e);if(Number.isNaN(r.getTime()))return String(e);const i=mt();return new Intl.DateTimeFormat(i,{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)}function Ue(e=""){return l(`status.${e}`)||e||l("common.unknown")}function it(e,r){e&&(e.hidden=!r)}function Y(){it(a.productsMode,t.demoProducts),it(a.dealsMode,t.demoDeals)}function j(e,r=12){e.innerHTML=Array.from({length:r},()=>'<div class="skeleton-card"></div>').join("")}function O(e,r,i=l("home.showAll")){e.innerHTML=`
    <div class="empty-state">
      <strong>${n(r)}</strong>
      <button class="secondary-button" data-show-all type="button">${n(i)}</button>
    </div>
  `}function Fe(e,r={}){m(e,{...r,showError:!1}).catch(()=>{})}function ot(e,r,i){if(!e||String(e).startsWith("demo-"))return;const o=`${t.sessionId}:${r}:${e}`;t.impressionsSent.has(o)||(t.impressionsSent.add(o),Fe("/events/impression",{method:"POST",body:JSON.stringify({productId:Number(e),screen:r,position:i,queryText:t.currentSearchQuery||null,sessionId:t.sessionId})}))}function ur(e){!e||String(e).startsWith("demo-")||Fe("/events/click",{method:"POST",query:{productId:e}})}function mr(e){!e||String(e).startsWith("demo-")||Fe("/events/view",{method:"POST",query:{productId:e}})}function xe(e){if(!("IntersectionObserver"in window)){e.querySelectorAll("[data-product]").forEach(r=>{ot(r.dataset.product,r.dataset.screen||"home",Number(r.dataset.position||0))});return}t.impressionObserver||(t.impressionObserver=new IntersectionObserver(r=>{r.forEach(i=>{if(!i.isIntersecting)return;const o=i.target;ot(o.dataset.product,o.dataset.screen||"home",Number(o.dataset.position||0)),t.impressionObserver.unobserve(o)})},{threshold:.35})),e.querySelectorAll("[data-product]").forEach(r=>t.impressionObserver.observe(r))}function te(e,r={}){const i=t.favoriteIds.has(String(e.id))||!!e.favorite,o=r.screen||t.currentGridScreen||"home",s=r.position??0;return`
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
          <span>${I(e.finalPrice)}</span>
          ${e.discountPercent?`<span class="old-price">${I(e.originalPrice)}</span>`:""}
        </div>
        <p class="hint">${n(l("product.sold",{count:e.soldCount}))}</p>
      </div>
      <div class="card-actions">
        <button class="primary-button" data-add="${n(e.id)}" type="button">${n(l("product.addToCart"))}</button>
        <button class="icon-button" data-detail="${n(e.id)}" type="button" aria-label="${n(l("product.viewDetails"))}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>
    </article>
  `}function C(e,r,i,o={}){if(!r.length){O(e,i);return}e.innerHTML=r.map((s,d)=>te(s,{...o,position:d})).join(""),xe(e)}function He(e,r="Rating"){const i=Math.min(5,Math.max(0,Math.round(y(e))));return`
    <span class="stars" role="img" aria-label="${n(r)} ${i} out of 5">
      ${Array.from({length:5},(o,s)=>`<span class="${s<i?"filled":""}">★</span>`).join("")}
    </span>
  `}function gr(e){const r=e.length,i=r?e.reduce((o,s)=>o+y(s.rating),0)/r:0;return{count:r,average:i}}async function ye(){var e,r,i;t.selectedCategory="ALL",t.currentSearchQuery="",t.currentGridScreen="home",t.feedPage=0,a.title.textContent=l("home.popular"),a.status.textContent=l("home.loading"),j(a.grid,12),j(a.dealsGrid,6);try{await Promise.all([yr(),br(),$r()]),await fr()||await Promise.all([je(),Dr()]),await kr(),await N()}catch(o){console.error("Home loading failed:",o),t.demoProducts=!1,t.demoDeals=!1,O(a.grid,l("common.serverFailed"),l("common.tryAgain"))}finally{((e=a.status)==null?void 0:e.textContent)===l("home.loading")&&(a.status.textContent=""),(((r=a.dealsStatus)==null?void 0:r.textContent)===l("home.loading")||((i=a.dealsStatus)==null?void 0:i.textContent)==="Yuklanmoqda...")&&(a.dealsStatus.textContent="")}}async function fr(){const e=await m("/api/home",{query:{limit:10,page:0,size:20},showError:!1});if(e===null)return t.homeLoadedFromApi=!1,a.homeApiSections.hidden=!0,!1;const r=p(e.hits||[]).map(b),i=p(e.discounts||[]).map(b),o=p(e.newArrivals||[]).map(b),s=p(e.popular).map(b);return r.length||i.length||o.length||s.length?(t.homeLoadedFromApi=!0,t.products=s.length?s:[...r,...i,...o].filter(pr),t.todayDeals=i,t.demoProducts=!1,t.demoDeals=!1,T(),hr({hits:r,discounts:i,newArrivals:o}),C(a.grid,t.products,l("home.noProducts"),{screen:"home"}),C(a.dealsGrid,i.slice(0,8),"Chegirmalar topilmadi.",{screen:"home-discounts"}),a.status.textContent="",a.dealsStatus.textContent="",Y(),!0):(t.homeLoadedFromApi=!1,a.homeApiSections.hidden=!0,!1)}function hr(e){const i=[["Hits","Best picks",e.hits,"home-hits"],["Discounts","Deals",e.discounts,"home-discounts"],["New Arrivals","Fresh",e.newArrivals,"home-new"]].filter(([,,o])=>o.length).map(([o,s,d,c])=>`
      <section class="home-product-strip">
        <div class="section-head">
          <div><p class="eyebrow">${n(s)}</p><h2>${n(o)}</h2></div>
        </div>
        <div class="product-grid home-strip-grid">
          ${d.slice(0,10).map((u,g)=>te(u,{screen:c,position:g})).join("")}
        </div>
      </section>
    `).join("");a.homeApiSections.hidden=!i,a.homeApiSections.innerHTML=i,xe(a.homeApiSections)}function pr(e,r,i){return(e==null?void 0:e.id)!==void 0&&i.findIndex(o=>String(o.id)===String(e.id))===r}const vr=["SKINCARE","MAKEUP","COLLAGEN","HAIR_CARE","FRAGRANCE"];async function yr(){const e=await m("/api/categories",{showError:!1}),r=p(e).map(Qt).filter(Boolean);r.length?(t.categories=r,t.demoCategories=!1):(t.categories=vr,t.demoCategories=!1),Y(),Se()}async function br(){const e=await m("/api/banners",{showError:!1}),r=p(e).map(i=>({id:i.id,title:i.title||"",subtitle:i.subtitle||"",imageUrl:i.imageUrl||"",linkType:String(i.linkType||"NONE").toUpperCase(),linkId:i.linkId,position:y(i.position)})).sort((i,o)=>i.position-o.position);t.banners=r,Cr()}const wr=5e3;let oe=null,Re=!1,Z=null,nt=0;function be(){var e;return(e=a.banners)==null?void 0:e.querySelector(".banner-track")}function we(){return t.banners.length}function Ke(){const e=be();if(!e)return 0;const r=e.clientWidth||1;return Math.max(0,Math.min(we()-1,Math.round(e.scrollLeft/r)))}function ke(){var r;const e=Ke();(r=a.banners)==null||r.querySelectorAll("[data-banner-dot]").forEach(i=>{const o=Number(i.dataset.bannerDot)===e;i.classList.toggle("active",o),i.setAttribute("aria-selected",o?"true":"false")})}function ze(e,r="smooth"){const i=be(),o=we();if(!i||!o)return;const s=(e%o+o)%o;i.scrollTo({left:s*i.clientWidth,behavior:r})}function bt(){ze(Ke()+1)}function Sr(){ze(Ke()-1)}function Ge(){oe&&(clearInterval(oe),oe=null)}function ce(){Ge(),!(Re||we()<=1)&&(oe=setInterval(()=>bt(),wr))}function Er(){Ge();const e=be();e&&Z&&e.removeEventListener("scroll",Z),Z=null,a.banners&&(a.banners.onmouseenter=null,a.banners.onmouseleave=null)}function Ar(){Er();const e=be();if(!e||we()<=1){ke();return}Z=()=>{clearTimeout(nt),nt=setTimeout(ke,80)},e.addEventListener("scroll",Z,{passive:!0}),a.banners.onmouseenter=()=>{Re=!0,Ge()},a.banners.onmouseleave=()=>{Re=!1,ce()},ke(),ce()}function Cr(){if(!t.banners.length){a.banners.hidden=!0,a.banners.innerHTML="";return}a.banners.hidden=!1,a.banners.innerHTML=`
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
    <div class="banner-dots" role="tablist" aria-label="Banner slides">
      ${t.banners.map((e,r)=>`
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
  `,Ar()}async function $r(){const e=await m("/api/announcements",{showError:!1}),r=p(e).map(i=>({title:i.title||"",message:i.content||i.message||"",type:String(i.type||"SYSTEM").toUpperCase(),createdAt:i.createdAt||""})).filter(i=>i.title||i.message);t.announcements=r,Ir()}function Ir(){if(!t.announcements.length){a.announcements.hidden=!0,a.announcements.innerHTML="";return}a.announcements.hidden=!1,a.announcements.innerHTML=t.announcements.slice(0,3).map(e=>`
    <article class="announcement-item ${e.type.toLowerCase()}">
      <strong>${n(e.title||e.type)}</strong>
      <span>${n(e.message)}</span>
    </article>
  `).join("")}async function kr(){const e=wt();if(!e.length){a.recentlyViewedSection.hidden=!0;return}const r=await m("/api/products/by-ids",{method:"POST",body:JSON.stringify(e.map(Number).filter(Number.isFinite)),showError:!1}),i=p(r).map(b).filter(o=>o.id);if(!i.length){a.recentlyViewedSection.hidden=!0;return}a.recentlyViewedSection.hidden=!1,C(a.recentlyViewedGrid,i,"Recently viewed is empty.",{screen:"recent"})}function wt(){try{return JSON.parse(localStorage.getItem(f.storageKeys.recentProducts)||"[]").filter(Boolean)}catch{return[]}}function Pr(e){if(!e||String(e).startsWith("demo-"))return;const r=[String(e),...wt().filter(i=>String(i)!==String(e))].slice(0,12);localStorage.setItem(f.storageKeys.recentProducts,JSON.stringify(r))}async function je(){try{a.status.textContent="Yuklanmoqda...",j(a.grid,12);const e=await m("/api/products",{query:{page:0,size:f.defaultPageSize},showError:!1});console.info("[LOAD PRODUCTS]",e);const r=p(e).map(b);r.length?(t.products=r,t.demoProducts=!1,C(a.grid,t.products,"Mahsulot topilmadi.")):(t.products=[],t.demoProducts=!1,O(a.grid,"Mahsulot topilmadi.")),T()}catch(e){console.error("[LOAD PRODUCTS FAILED]",e),t.demoProducts=!1,O(a.grid,"API data failed to load.")}finally{Y(),a.status.textContent=""}}async function Lr(){if(t.feedLoading)return;t.feedLoading=!0,a.loadMore.disabled=!0,a.loadMore.textContent="Yuklanmoqda...";let e=[];const r=await m("/api/home/feed",{query:{limit:30},showError:!1});if(e=p(r).map(b),!e.length){t.feedPage+=1;const s=await m("/api/products",{query:{page:t.feedPage,size:f.defaultPageSize},showError:!1});e=p(s).map(b)}const i=new Set(t.products.map(s=>String(s.id))),o=e.filter(s=>s.id&&!i.has(String(s.id)));t.products=[...t.products,...o],T(),C(a.grid,t.products,"Mahsulot topilmadi.",{screen:t.currentGridScreen||"home"}),t.feedLoading=!1,a.loadMore.disabled=!1,a.loadMore.textContent=o.length?"Yana yuklash":"Boshqa mahsulot topilmadi"}async function Dr(){try{a.dealsStatus.textContent="Yuklanmoqda...",j(a.dealsGrid,5);const e=await m("/api/products/today-deals",{showError:!1});console.info("[LOAD TODAY DEALS]",e);const r=p(e).map(b);t.todayDeals=r,t.demoDeals=!1,C(a.dealsGrid,t.todayDeals.slice(0,8),"Mahsulot topilmadi."),T()}catch(e){console.error("[LOAD TODAY DEALS FAILED]",e),t.demoDeals=!1,O(a.dealsGrid,"API data failed to load.")}finally{Y(),a.dealsStatus.textContent=""}}function Se(){const e=["ALL",...t.categories].map(r=>`
    <button class="chip ${t.selectedCategory===r?"active":""}" data-category="${n(r)}" type="button">
      ${n(r==="ALL"?l("home.all"):z(r))}
    </button>
  `);a.categoryToolbar.innerHTML=e.join(""),Rr(),Tr()}function Rr(){const e=["ALL",...t.categories];a.catalogList.innerHTML=e.map(r=>`
    <button class="catalog-item ${t.selectedCategory===r?"active":""}" data-category="${n(r)}" type="button">
      <span>${n(r==="ALL"?l("home.showAll"):z(r))}</span>
      <span>${r==="ALL"?"→":"›"}</span>
    </button>
  `).join("")}function Tr(){a.quickCategoryGrid.innerHTML=Kt.map(e=>`
    <button class="quick-card" data-category="${n(e.category)}" type="button">
      <span>${n(e.icon)}</span>
      ${n(z(e.category))}
    </button>
  `).join("")}function Ee(){t.currentRoute="home",a.homeView.hidden=!1,a.productDetailPage.hidden=!0,document.title="BEAUTY SKIN KOREA"}function Nr(){t.currentRoute="product",a.homeView.hidden=!0,a.productDetailPage.hidden=!1,window.scrollTo({top:0,behavior:"smooth"})}function Te(){window.location.hash&&window.location.hash!=="#/"&&window.location.hash!=="#"?window.location.hash="#/":Ee()}async function ue(){const r=(window.location.hash||"#/").match(/^#\/product\/([^/?#]+)/);if(r){Nr(),await Br(decodeURIComponent(r[1])),window.scrollTo({top:0,behavior:"smooth"});return}Ee()}async function Mr(e){const r=e.trim();if(t.currentSearchQuery=r,t.currentGridScreen=r?"search":"home",t.currentRoute==="product"&&(window.location.hash="#/",Ee()),!r){t.selectedCategory="ALL",Se(),a.title.textContent=l("home.popular"),await je();return}a.title.textContent=`"${r}" qidiruvi`,a.status.textContent=l("home.loading"),j(a.grid,10);const i=await m("/api/products/search",{query:{q:r,page:0,size:f.defaultPageSize},showError:!1}),o=p(i).map(b);t.products=o,T(),C(a.grid,t.products,l("home.noProducts"),{screen:"search"}),a.status.textContent=""}async function Ve(e){if(t.currentRoute==="product"&&(window.location.hash="#/",Ee()),t.selectedCategory=e,t.currentGridScreen=e==="ALL"?"home":"category",t.currentSearchQuery="",Se(),e==="ALL"){a.title.textContent=l("home.popular"),await je();return}a.title.textContent=z(e),a.status.textContent=l("home.loading"),j(a.grid,10);const r=await m("/api/products/category",{query:{category:e,page:0,size:f.defaultPageSize},showError:!1}),i=p(r).map(b);t.products=i,T(),C(a.grid,t.products,l("home.noProducts"),{screen:"category"}),a.status.textContent=""}function Ye(e){if(!e)return;const r=`#/product/${encodeURIComponent(e)}`;window.location.hash===r?ue():window.location.hash=r}async function Or(e){Ye(e)}async function Br(e){var o;t.currentRoute="product",t.detailLoading=!0,t.detailError="",t.selectedDetailProduct=null,t.recommendedProducts=[],t.recommendedSimilar=[],t.recommendedOthers=[],t.recommendationsError="",qr(!0);const r=await m(`/api/products/${e}`,{showError:!0}),i=b(r||t.products.find(s=>String(s.id)===String(e))||{});if(t.detailLoading=!1,!i.id){t.detailError=t.lastApiError||"Mahsulot topilmadi.",Ur();return}i.favorite=t.favoriteIds.has(String(i.id))||i.favorite,t.selectedDetailProduct=i,t.selectedVariantId=((o=St(i))==null?void 0:o.id)||null,t.selectedQuantity=1,document.title=`${i.name} - BEAUTY SKIN KOREA`,Pr(i.id),mr(i.id),R(i),_e(i.id),Fr(i)}function qr(e=!1){const r=e?a.productDetailPageContent:a.detailContent;r.innerHTML=`
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
  `}function Ur(){a.productDetailPageContent.innerHTML=`
    <div class="detail-error-page">
      <strong>${n(l("product.notFound"))}</strong>
      <p>${n(t.detailError||"Mahsulot topilmadi.")}</p>
      <button class="primary-button" data-route-home type="button">${n(l("product.backToShopping"))}</button>
    </div>
  `}function R(e){const r=e.variants.find(h=>String(h.id)===String(t.selectedVariantId))||null,i=[...e.images,...e.detailImages].filter(Boolean),o=(r==null?void 0:r.discountPrice)??(r==null?void 0:r.price)??e.finalPrice,s=(r==null?void 0:r.price)??e.originalPrice,d=(r==null?void 0:r.stock)??e.stock,c=t.favoriteIds.has(String(e.id))||!!e.favorite,u=t.currentRoute==="product",g=u?a.productDetailPageContent:a.detailContent;g.innerHTML=`
    ${u?`
      <div class="breadcrumbs">
        <button data-route-home type="button">${n(l("product.home")||l("home.all"))}</button>
        <span>/</span>
        <button data-category="${n(e.category||"ALL")}" type="button">${n(e.category?z(e.category):l("header.catalog"))}</button>
        <span>/</span>
        <span>${n(Ct(e.name,42))}</span>
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
        <h3>${I(o)}</h3>
        ${s>o?`<p class="old-price">${I(s)}</p>`:""}
        <button class="secondary-button detail-favorite ${c?"active":""}" data-detail-favorite="${n(e.id)}" type="button">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
          ${n(l(c?"product.saved":"product.save"))}
        </button>
        ${e.variants.length?zr(e):`<p class="hint">${n(l("product.variantUnavailable"))}</p>`}
        <p class="hint">${n(l("product.stock",{count:d??0}))}</p>
        <div class="quantity-row">
          <button class="secondary-button" data-qty="minus" type="button">-</button>
          <input id="quantityInput" value="${t.selectedQuantity}" inputmode="numeric" />
          <button class="secondary-button" data-qty="plus" type="button">+</button>
        </div>
        <button class="primary-button full" data-detail-add type="button">${n(l("product.addToCartFull"))}</button>
        <div class="delivery-info">
          <span>${n(l("product.delivery"))}</span>
          <span>${n(l("product.secure"))}</span>
          <span>${n(l("product.original"))}</span>
        </div>
        <div class="detail-tabs">
          <section><strong>${n(l("product.description"))}</strong><p class="hint">${n(e.description||l("common.unavailable"))}</p></section>
          ${e.detailImages.length?`<section><strong>${n(l("product.detailImages"))}</strong><div class="detail-image-stack">${e.detailImages.map(h=>`<img src="${n(h)}" alt="${n(e.name)} detail" loading="lazy" />`).join("")}</div></section>`:""}
          <section><strong>${n(l("product.details"))}</strong><p class="hint">${n(l("home.categories"))}: ${n(e.category?z(e.category):"-")} · Brand: ${n(e.brand||"-")}</p></section>
          <section><strong>${n(l("product.reviews"))}</strong>${Hr(e.id)}</section>
        </div>
      </div>
    </div>
    ${u?xr():""}
    ${u?`
      <div class="mobile-buy-bar">
        <strong>${I(o)}</strong>
        <button class="primary-button" data-detail-add type="button">${n(l("product.addToCart"))}</button>
      </div>
    `:""}
  `,xe(g)}async function Fr(e){var c;t.recommendationsLoading=!0,t.recommendationsError="",R(e);const r=await m(`/api/products/${e.id}/recommend`,{query:{similar:12,others:24,seed:t.sessionId},showError:!1}),i=p((r==null?void 0:r.similar)||[]).map(b).filter(u=>String(u.id)!==String(e.id)),o=p((r==null?void 0:r.others)||[]).map(b).filter(u=>String(u.id)!==String(e.id));if(i.length||o.length){t.recommendationsLoading=!1,t.recommendedProducts=[],t.recommendedSimilar=i.slice(0,12),t.recommendedOthers=o.slice(0,12),R(t.selectedDetailProduct);return}let s=null;e.category&&(s=await m("/api/products/category",{query:{category:e.category,page:0,size:12},showError:!1}));let d=p(s).map(b).filter(u=>String(u.id)!==String(e.id));d.length||(s=await m("/api/products",{query:{page:0,size:12},showError:!1}),d=p(s).map(b).filter(u=>String(u.id)!==String(e.id))),t.recommendationsLoading=!1,!d.length&&s===null&&(t.recommendationsError=t.lastApiError||"Recommendations could not be loaded."),t.recommendedProducts=d.slice(0,12).map(u=>({...u,favorite:t.favoriteIds.has(String(u.id))||u.favorite})),t.recommendedSimilar=[],t.recommendedOthers=[],((c=t.selectedDetailProduct)==null?void 0:c.id)!==void 0&&String(t.selectedDetailProduct.id)===String(e.id)&&R(t.selectedDetailProduct)}function xr(){if(t.recommendationsLoading)return`
      <section class="recommended-section">
        <div class="section-head"><div><p class="eyebrow">${n(l("home.recommended"))}</p><h2>${n(l("home.recommended"))}</h2></div></div>
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
    `;const e=[[l("home.similar"),t.recommendedSimilar||[],"recommendations"],[l("home.others"),t.recommendedOthers||[],"recommendations"]].filter(([,r])=>r.length);return e.length?e.map(([r,i,o])=>`
      <section class="recommended-section">
        <div class="section-head">
          <div>
          <p class="eyebrow">${n(l("home.recommended"))}</p>
            <h2>${n(r)}</h2>
          </div>
        </div>
        <div class="recommended-grid product-grid">
          ${i.map((s,d)=>te(s,{screen:o,position:d})).join("")}
        </div>
      </section>
    `).join(""):t.recommendedProducts.length?`
    <section class="recommended-section">
      <div class="section-head">
        <div>
          <p class="eyebrow">${n(l("home.recommended"))}</p>
          <h2>${n(l("home.recommended"))}</h2>
        </div>
      </div>
      <div class="recommended-grid product-grid">
        ${t.recommendedProducts.map(te).join("")}
      </div>
    </section>
  `:""}async function _e(e){var o,s;if(!e)return;const r=String(e);t.productReviewsLoading[r]=!0,t.productReviewsError[r]="",((o=t.selectedDetailProduct)==null?void 0:o.id)!==void 0&&String(t.selectedDetailProduct.id)===r&&R(t.selectedDetailProduct);const i=await m(`/api/reviews/product/${e}`,{showError:!1});t.productReviewsLoading[r]=!1,i===null?t.productReviewsError[r]=t.lastApiError||"Reviews could not be loaded.":t.productReviewsByProductId[r]=p(i).map(ht),((s=t.selectedDetailProduct)==null?void 0:s.id)!==void 0&&String(t.selectedDetailProduct.id)===r&&R(t.selectedDetailProduct)}function Hr(e){const r=String(e),i=t.productReviewsByProductId[r]||[],o=t.productReviewsLoading[r],s=t.productReviewsError[r];if(o)return'<div class="reviews-loading"><div class="skeleton-card"></div></div>';if(s)return`
      <div class="reviews-inline-error">
        <p>${n(s)}</p>
        <button class="secondary-button" data-reviews-retry="${n(e)}" type="button">Retry</button>
      </div>
    `;if(!i.length)return`<div class="reviews-empty"><strong>${n(l("reviews.none"))}</strong><p class="hint">${n(l("reviews.none"))}</p></div>`;const d=gr(i);return`
    <div class="review-summary">
      <div>
        <strong>${d.average.toFixed(1)}</strong>
        ${He(d.average,"Average rating")}
      </div>
      <p class="hint">${d.count} ${n(l("product.reviews"))}</p>
    </div>
    <div class="review-list">
      ${i.map(Kr).join("")}
    </div>
  `}function Kr(e){return`
    <article class="review-card">
      <div class="review-head">
        <div>
          <strong>${n(e.userName)}</strong>
          <p class="hint">${V(e.createdAt)}</p>
        </div>
        ${He(e.rating)}
      </div>
      <p>${n(e.content||l("reviews.noText"))}</p>
      ${e.imageUrls.length?`<div class="review-images">${e.imageUrls.slice(0,5).map(r=>`<img src="${n(r)}" alt="Review image" loading="lazy" />`).join("")}</div>`:""}
    </article>
  `}function zr(e){return`
    <div class="variant-options">
      ${e.variants.map(r=>{const i=String(r.id)===String(t.selectedVariantId),o=Number(r.stock||0)<=0;return`
          <button class="variant-option ${i?"active":""}" data-variant="${n(r.id)}" ${o?"disabled":""} type="button">
            ${n(r.label||`Variant #${r.id}`)}
            ${r.price?` · ${n(I(r.discountPrice??r.price))}`:""}
          </button>
        `}).join("")}
    </div>
  `}function St(e){return e.variants.find(r=>Number(r.stock||0)>0)||e.variants[0]||null}async function Et(e,r,i){var c;if(!S()){$();return}let o=r;const s=Math.max(1,Number(i||1));if(!o){const u=await m(`/api/products/${e}`,{showError:!0}),g=b(u||{}),h=g.variants.filter(w=>Number(w.stock||0)>0);if(h.length===1)o=h[0].id;else if(g.variants.length>1){Ye(g.id);return}else o=(c=St(g))==null?void 0:c.id}if(!o){v(l("product.variantUnavailable"),"warning");return}t.addingProductIds.add(String(e)),st();const d=await m("/api/cart",{method:"POST",body:JSON.stringify({variantId:Number(o),quantity:s}),requireAuth:!0});t.addingProductIds.delete(String(e)),st(),d!==null&&(v(l("cart.added"),"success"),await N())}function st(){document.querySelectorAll("[data-detail-add]").forEach(r=>{var o;const i=t.addingProductIds.has(String((o=t.selectedDetailProduct)==null?void 0:o.id));r.disabled=i,r.textContent=i?l("product.adding"):r.closest(".mobile-buy-bar")?l("product.addToCart"):l("product.addToCartFull")})}async function N(){if(!S()){Le(),D();return}t.cartLoading=!0,t.cartError="",D();const e=await m("/api/cart",{requireAuth:!0,showError:!1});if(t.cartLoading=!1,e===null){if(t.lastApiError.includes("Session expired")||t.lastApiError==="Please login to continue"){Le();return}t.cartError=t.lastApiError||"Cart could not be loaded.",D();return}pt(p(e).map(_t)),D()}function D(){if(a.cartCount.textContent=t.cartCount,a.cartSummary.textContent=l("orders.items",{count:t.cartCount}),a.cartTotal.textContent=I(t.cartTotal),t.cartLoading){a.cartItems.innerHTML='<div class="cart-loading"><div class="skeleton-card"></div><div class="skeleton-card"></div></div>',a.checkoutButton.disabled=!0;return}if(t.cartError){a.cartItems.innerHTML=`
      <div class="cart-empty">
        <strong>${n(l("cart.unavailable"))}</strong>
        <p>${n(t.cartError)}</p>
        <button class="secondary-button" data-cart-retry type="button">${n(l("common.tryAgain"))}</button>
      </div>
    `,a.checkoutButton.disabled=!0;return}a.checkoutButton.disabled=!t.cartItems.length,a.cartItems.innerHTML=t.cartItems.length?t.cartItems.map(e=>`
      <article class="cart-item ${t.cartUpdatingIds.has(String(e.id))?"loading":""}">
        <img src="${n(e.image)}" alt="${n(e.name)}" />
        <div>
          <h3>${n(e.name)}</h3>
          <p class="hint">${n(e.brand||"BEAUTY SKIN KOREA")} ${e.variantLabel?`· ${n(e.variantLabel)}`:""}</p>
          <p>${I(e.unitPrice)} · ${n(l("common.total"))}: ${I(e.lineTotal)}</p>
          <div class="cart-stepper">
            <button data-cart-qty="minus" data-cart-id="${n(e.id)}" ${e.quantity<=1?"disabled":""} type="button">-</button>
            <span>${e.quantity}</span>
            <button data-cart-qty="plus" data-cart-id="${n(e.id)}" type="button">+</button>
          </div>
        </div>
        <button class="icon-button" data-remove="${n(e.id)}" type="button" aria-label="${n(l("cart.remove"))}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
        </button>
      </article>
    `).join(""):`
      <div class="cart-empty">
        <strong>${n(l("cart.empty"))}</strong>
        <p>Add products you like and they will appear here.</p>
        <button class="primary-button" data-start-shopping type="button">${n(l("home.startShopping"))}</button>
      </div>
    `}async function Gr(e){t.cartUpdatingIds.add(String(e)),D();const r=await m(`/api/cart/${e}`,{method:"DELETE",requireAuth:!0});t.cartUpdatingIds.delete(String(e)),r!==null?(v(l("cart.itemRemoved"),"success"),await N()):D()}async function jr(e,r){const i=Math.max(1,Number(r||1));t.cartUpdatingIds.add(String(e)),D();const o=await m(`/api/cart/${e}`,{method:"PUT",requireAuth:!0,body:JSON.stringify({quantity:i})});t.cartUpdatingIds.delete(String(e)),o!==null?(v(l("cart.quantityUpdated"),"success"),await N()):D()}async function At(){if(!S()){$();return}if(await N(),!t.cartItems.length){v("Your cart is empty","warning");return}t.orderSuccess=null,t.checkoutError="",t.checkoutLoading=!0,k(),a.checkoutDialog.showModal(),P(),await Promise.all([We(),Qe()]),t.checkoutLoading=!1,k()}async function Vr(e){e.preventDefault(),await Nt()}async function We(e){var i,o;const r=await m("/api/receivers",{requireAuth:!0,showError:!1});if(r===null){t.checkoutError=t.lastApiError||"Receivers could not be loaded.";return}t.receivers=p(r),t.selectedReceiverId=e||t.selectedReceiverId||((i=t.receivers[0])==null?void 0:i.id)||null,t.receivers.some(s=>String(s.id)===String(t.selectedReceiverId))||(t.selectedReceiverId=((o=t.receivers[0])==null?void 0:o.id)||null)}async function Qe(e){var i,o;const r=await m("/api/addresses",{requireAuth:!0,showError:!1});if(r===null){t.checkoutError=t.lastApiError||"Addresses could not be loaded.";return}t.addresses=p(r),t.selectedAddressId=e||t.selectedAddressId||((i=t.addresses[0])==null?void 0:i.id)||null,t.addresses.some(s=>String(s.id)===String(t.selectedAddressId))||(t.selectedAddressId=((o=t.addresses[0])==null?void 0:o.id)||null)}function k(){if(t.checkoutLoading){a.checkoutContent.innerHTML=`
      <div class="checkout-layout">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    `;return}if(t.orderSuccess){Zr();return}const e=t.receivers.find(i=>String(i.id)===String(t.selectedReceiverId)),r=t.addresses.find(i=>String(i.id)===String(t.selectedAddressId));a.checkoutContent.innerHTML=`
    <div class="checkout-layout">
      <div class="checkout-steps">
        ${t.checkoutError?`<div class="checkout-error">${n(t.checkoutError)}</div>`:""}
        <section class="checkout-step">
          <div class="step-head"><span>1</span><h3>Receiver</h3></div>
          ${Yr()}
          ${_r()}
        </section>
        <section class="checkout-step">
          <div class="step-head"><span>2</span><h3>Delivery Address</h3></div>
          ${Wr()}
          ${Qr()}
        </section>
      </div>
      <aside class="order-summary">
        <div class="step-head"><span>3</span><h3>Order Summary</h3></div>
        ${Jr(e,r)}
      </aside>
    </div>
  `}function Yr(){return t.receivers.length?`<div class="selectable-list">${t.receivers.map(e=>`
    <article class="selectable-card ${String(e.id)===String(t.selectedReceiverId)?"selected":""}" data-select-receiver="${n(e.id)}">
      <div>
        <strong>${n(e.fullName||"")}</strong>
        <p class="hint">${n(e.phone||"")}</p>
      </div>
      <button class="icon-button" data-delete-receiver="${n(e.id)}" type="button" aria-label="Delete receiver">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
      </button>
    </article>
  `).join("")}</div>`:'<div class="checkout-empty">No receivers yet. Add one below.</div>'}function _r(){return`
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
  `}function Wr(){return t.addresses.length?`<div class="selectable-list">${t.addresses.map(e=>`
    <article class="selectable-card ${String(e.id)===String(t.selectedAddressId)?"selected":""}" data-select-address="${n(e.id)}">
      <div>
        <strong>${n(e.title||"Address")}</strong>
        <p class="hint">${n(e.address||"")}</p>
      </div>
      <button class="icon-button" data-delete-address="${n(e.id)}" type="button" aria-label="Delete address">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
      </button>
    </article>
  `).join("")}</div>`:'<div class="checkout-empty">No addresses yet. Add one below.</div>'}function Qr(){return`
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
  `}function Jr(e,r){const i=e&&r&&t.cartItems.length&&!t.orderSubmitting;return`
    <div class="summary-items">
      ${t.cartItems.map(o=>`
        <div class="summary-item">
          <span>${n(o.name)} ${o.variantLabel?`· ${n(o.variantLabel)}`:""} x ${o.quantity}</span>
          <strong>${I(o.lineTotal)}</strong>
        </div>
      `).join("")}
    </div>
    <div class="summary-total"><span>Subtotal</span><strong>${I(t.cartTotal)}</strong></div>
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
  `}function Zr(){const e=t.orderSuccess;a.checkoutContent.innerHTML=`
    <div class="order-success">
      <div class="success-mark">✓</div>
      <h3>Order created</h3>
      <p>Order #${n(e.id)} · ${n(e.status||"NEW")}</p>
      <strong>${I(e.totalAmount)}</strong>
      <p class="hint">${n(e.fullName||"")} ${e.phone?`· ${n(e.phone)}`:""}</p>
      <p class="hint">${n(e.address||"")}</p>
      <div class="hero-actions">
        <button class="secondary-button" data-success-orders type="button">View orders</button>
        <button class="primary-button" data-success-continue type="button">Continue shopping</button>
      </div>
    </div>
  `}async function Ae(){if(!S()){$();return}a.ordersDialog.showModal(),P(),await Je()}async function Je(){t.ordersLoading=!0,t.ordersError="",t.selectedOrder=null,t.selectedOrderHistory=[],t.orderHistoryWarning="",q();const e=await m("/api/orders",{requireAuth:!0,showError:!1});if(t.ordersLoading=!1,e===null){if(t.lastApiError.includes("Session expired")){a.ordersDialog.close();return}t.ordersError=t.lastApiError||"Orders could not be loaded.",q();return}t.orders=p(e),q()}function q(){if(t.ordersLoading){a.ordersContent.innerHTML=`
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
        <strong>${n(l("orders.none"))}</strong>
        <p>Your completed purchases will appear here.</p>
        <button class="primary-button" data-orders-start-shopping type="button">${n(l("home.startShopping"))}</button>
      </div>
    `;return}a.ordersContent.innerHTML=`
    <div class="orders-layout">
      <div class="orders-list">
        ${t.orders.map(Xr).join("")}
      </div>
      <div class="order-detail-panel">
        ${ea()}
      </div>
    </div>
  `}function Xr(e){var i;const r=Array.isArray(e.items)?e.items:[];return`
    <article class="order-card ${((i=t.selectedOrder)==null?void 0:i.id)===e.id?"selected":""}">
      <div>
        <h3>${n(l("orders.order"))} #${n(e.id)}</h3>
        <p class="hint">${V(e.createdAt)}</p>
        <p class="hint">${n(e.fullName||"")}</p>
        <p class="hint">${n(Ct(e.address||"",72))}</p>
      </div>
      <div class="order-card-side">
        <span class="status-badge status-${n(String(e.status||"").toLowerCase())}">${n(Ue(e.status))}</span>
        <strong>${qe(e.totalAmount)}</strong>
        <span class="hint">${n(l("orders.items",{count:r.length}))}</span>
        <button class="secondary-button" data-order-detail="${n(e.id)}" type="button">${n(l("orders.viewDetails"))}</button>
      </div>
    </article>
  `}function ea(){if(t.orderDetailLoading)return'<div class="skeleton-card"></div>';if(t.orderDetailError)return`<div class="orders-empty"><strong>Detail unavailable</strong><p>${n(t.orderDetailError)}</p></div>`;if(!t.selectedOrder)return'<div class="orders-empty"><strong>Select an order</strong><p>Choose an order to see details and timeline.</p></div>';const e=t.selectedOrder,r=Array.isArray(e.items)?e.items.map(i=>Jt({...i,orderId:e.id})):[];return`
    <section class="order-detail">
      <div class="order-detail-head">
        <div>
          <h3>${n(l("orders.order"))} #${n(e.id)}</h3>
          <p class="hint">${V(e.createdAt)}</p>
        </div>
        <span class="status-badge status-${n(String(e.status||"").toLowerCase())}">${n(Ue(e.status))}</span>
      </div>
      <div class="summary-box">
        <strong>${n(l("checkout.receiver"))}</strong>
        <p class="hint">${n(e.fullName||"")} ${e.phone?`· ${n(e.phone)}`:""}</p>
      </div>
      <div class="summary-box">
        <strong>${n(l("checkout.address"))}</strong>
        <p class="hint">${n(e.address||"")}</p>
      </div>
      <div class="summary-total"><span>${n(l("common.total"))}</span><strong>${qe(e.totalAmount)}</strong></div>
      <div class="order-items">
        <h4>Items</h4>
        ${r.length?r.map(i=>ta(i,e)).join(""):'<p class="hint">No items in response.</p>'}
      </div>
      <div class="order-timeline">
        <h4>Status history</h4>
        ${t.orderHistoryWarning?`<p class="checkout-error">${n(t.orderHistoryWarning)}</p>`:""}
        ${ra(e)}
      </div>
    </section>
  `}function ta(e,r={}){const o=String(r.status||"").toUpperCase()==="DELIVERED"&&e.productId&&r.id;return`
    <article class="order-item">
      <img src="${n(e.image)}" alt="${n(e.name)}" />
      <div>
        <strong>${n(e.name)}</strong>
        <p class="hint">${e.variantLabel?n(e.variantLabel):"Variant"} · x${e.quantity}</p>
        ${o?`
          <button class="secondary-button order-review-button" data-order-write-review="${n(e.productId)}" data-review-order="${n(r.id)}" data-review-name="${n(e.name)}" type="button">Write review</button>
        `:e.productId?'<p class="hint">Available after delivery</p>':""}
      </div>
      <strong>${qe(e.lineTotal||e.unitPrice*e.quantity)}</strong>
    </article>
  `}function ra(e){return(t.selectedOrderHistory.length?t.selectedOrderHistory:[{status:e.status,createdAt:e.createdAt,note:"Current order status"}]).map(i=>`
    <div class="timeline-item">
      <span></span>
      <div>
        <strong>${n(Ue(i.status))}</strong>
        <p class="hint">${V(i.createdAt)}</p>
        ${i.note?`<p class="hint">${n(i.note)}</p>`:""}
      </div>
    </div>
  `).join("")}function Ct(e,r){const i=String(e||"");return i.length>r?`${i.slice(0,r-1)}…`:i}async function $t(e){t.orderDetailLoading=!0,t.orderDetailError="",t.orderHistoryWarning="",q();const[r,i]=await Promise.all([m(`/api/orders/${e}`,{requireAuth:!0,showError:!1}),m(`/api/orders/${e}/history`,{requireAuth:!0,showError:!1})]);if(t.orderDetailLoading=!1,r===null){t.orderDetailError=t.lastApiError||"Order detail could not be loaded.",q();return}t.selectedOrder=r,t.selectedOrderHistory=i===null?[]:p(i),i===null&&(t.orderHistoryWarning="Status history could not be loaded."),q()}async function It(){if(!S()){$();return}a.favoritesDialog.showModal(),P(),await _({render:!0})}async function _(e={}){const{render:r=!1}=e;if(!S()){De();return}t.favoritesLoading=!0,t.favoritesError="",r&&H();try{const i=await m("/api/favorites",{requireAuth:!0,showError:!1});if(t.favoritesLoading=!1,i===null){if(t.lastApiError.includes("Session expired")||t.lastApiError==="Please login to continue"){De(),a.favoritesDialog.open&&a.favoritesDialog.close();return}t.favoritesError=t.lastApiError||"Favorites could not be loaded.",re(),r&&H();return}rr(p(i).map(Wt)),t.products.length&&C(a.grid,t.products,"Mahsulot topilmadi."),t.todayDeals.length&&C(a.dealsGrid,t.todayDeals.slice(0,8),"Bugungi takliflar topilmadi."),(r||a.favoritesDialog.open)&&H()}catch(i){console.error("[LOAD FAVORITES FAILED]",i),t.favoritesLoading=!1,t.favoritesError="Favorites could not be loaded.",re(),(r||a.favoritesDialog.open)&&H()}}function re(){a.favoritesCount.textContent=t.favoritesCount,a.favoritesSummary.textContent=`${t.favoritesCount} product${t.favoritesCount===1?"":"s"}`}function H(){if(re(),t.favoritesLoading){a.favoritesContent.innerHTML=`
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
      ${t.favoriteProducts.map(e=>te({...e,favorite:!0})).join("")}
    </div>
  `}function kt(){a.favoritesDialog.close(),E()}function aa(e){var o;const r=e.target.closest("[data-favorites-retry]"),i=e.target.closest("[data-favorites-start]");if(r){_({render:!0});return}if(i){kt(),(o=document.getElementById("products"))==null||o.scrollIntoView({behavior:"smooth",block:"start"});return}se(e)}function ae(){var e;t.notifications=[],t.notificationsLoading=!1,t.notificationsError="",t.unreadCount=0,t.unreadCountLoading=!1,t.notificationUpdatingIds=new Set,me(),(e=a.notificationsDrawer)!=null&&e.classList.contains("open")&&X()}async function F(){if(!S()){ae();return}t.unreadCountLoading=!0;const e=await m("/api/notifications/unread-count",{requireAuth:!0,showError:!1});if(t.unreadCountLoading=!1,e===null){if(t.lastApiError.includes("Session expired")){ae();return}me();return}t.unreadCount=normalizeUnreadCount(e),me()}async function Pt(){if(!S()){$();return}a.notificationsDrawer.classList.add("open"),a.notificationsDrawer.setAttribute("aria-hidden","false"),P(),await Promise.all([Ze(),F()])}function X(){a.notificationsDrawer.classList.remove("open"),a.notificationsDrawer.setAttribute("aria-hidden","true"),E()}async function Ze(){if(!S()){$();return}t.notificationsLoading=!0,t.notificationsError="",U();const e=await m("/api/notifications",{requireAuth:!0,showError:!1});if(t.notificationsLoading=!1,e===null){if(t.lastApiError.includes("Session expired")){ae();return}t.notificationsError=t.lastApiError||"Notifications could not be loaded.",U();return}t.notifications=Xt(e).map(Zt).filter(r=>r.id!==void 0),U()}function me(){a.notificationsCount.textContent=t.unreadCount,a.notificationsCount.hidden=t.unreadCount<=0,a.notificationsSummary.textContent=`${t.unreadCount} ${l("notifications.unread")}`}function U(){if(me(),t.notificationsLoading){a.notificationsContent.innerHTML=`
      <div class="notifications-loading">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    `;return}if(t.notificationsError){a.notificationsContent.innerHTML=`
      <div class="notifications-empty">
        <strong>${n(l("notifications.title"))}</strong>
        <p>${n(t.notificationsError)}</p>
        <button class="secondary-button" data-notifications-retry type="button">${n(l("common.tryAgain"))}</button>
      </div>
    `;return}if(!t.notifications.length){a.notificationsContent.innerHTML=`
      <div class="notifications-empty">
        <strong>${n(l("notifications.none"))}</strong>
        <p>Order, promo and system updates will appear here.</p>
      </div>
    `;return}a.notificationsContent.innerHTML=`
    <div class="notifications-list">
      ${t.notifications.map(ia).join("")}
    </div>
  `}function ia(e){const r=t.notificationUpdatingIds.has(String(e.id));return`
    <article class="notification-card ${e.read?"read":"unread"} ${r?"loading":""}" data-notification-card="${n(e.id)}">
      <div class="notification-icon type-${n(e.type.toLowerCase())}" aria-hidden="true">${oa(e.type)}</div>
      <div>
        <div class="notification-head">
          <strong>${n(e.title)}</strong>
          ${e.read?"":`<span class="unread-dot" aria-label="${n(l("notifications.unread"))}"></span>`}
        </div>
        <p>${n(e.message)}</p>
        <div class="notification-meta">
          <span>${n(notificationTypeLabel(e.type))}</span>
          <span>${V(e.createdAt)}</span>
        </div>
      </div>
      <button class="secondary-button notification-read-button" data-notification-read="${n(e.id)}" ${e.read||r?"disabled":""} type="button">
        ${e.read?n(l("notifications.read")):n(l(r?"common.saving":"notifications.markRead"))}
      </button>
    </article>
  `}function oa(e){return{ORDER:"O",PROMO:"%",SYSTEM:"i"}[e]||"i"}async function Lt(e,r={}){const i=t.notifications.find(s=>String(s.id)===String(e));if(!i||i.read)return!0;t.notificationUpdatingIds.add(String(e)),U();const o=await m(`/api/notifications/${e}/read`,{method:"POST",requireAuth:!0,showError:!1});return t.notificationUpdatingIds.delete(String(e)),o===null?t.lastApiError.includes("Session expired")?(ae(),!1):(v(t.lastApiError||"Notification could not be updated."),U(),!1):(i.read=!0,t.notifications=t.notifications.map(s=>String(s.id)===String(e)?{...s,read:!0}:s),t.unreadCount=Math.max(0,t.unreadCount-1),U(),await F(),r.silent||v("Marked as read"),!0)}async function na(e){const r=t.notifications.find(i=>String(i.id)===String(e));r&&(r.read||await Lt(e,{silent:!0}),r.type==="ORDER"&&r.refId&&(X(),await Ae(),await $t(r.refId)))}async function sa(e){if(!S())return $(),null;const r=String(e||"").trim();return r?m("/api/notifications/token",{method:"POST",requireAuth:!0,body:JSON.stringify({token:r})}):(v("Notification token is empty."),null)}window.saveNotificationToken=sa;async function la(){return m("/api/health",{showError:!1})}window.checkServerHealth=la;function da(e){const r=e.target.closest("[data-notifications-retry]"),i=e.target.closest("[data-notification-read]"),o=e.target.closest("[data-notification-card]");if(r){Ze(),F();return}if(i){e.stopPropagation(),Lt(i.dataset.notificationRead);return}o&&na(o.dataset.notificationCard)}async function ca(){if(!S()){$();return}a.myReviewsDialog.showModal(),P(),await Ce()}async function Ce(){if(!S()){$();return}t.myReviewsLoading=!0,t.myReviewsError="",ne();const e=await m("/api/reviews/my",{requireAuth:!0,showError:!1});if(t.myReviewsLoading=!1,e===null){if(t.lastApiError.includes("Session expired")){Xe(),ge();return}t.myReviewsError=t.lastApiError||"Reviews could not be loaded.",ne();return}t.myReviews=tr(e).map(er),ne()}function ne(){if(a.myReviewsSummary.textContent=t.myReviews.length?`${t.myReviews.length} item${t.myReviews.length===1?"":"s"}`:"Purchased products and written reviews",t.myReviewsLoading){a.myReviewsContent.innerHTML=`
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
      ${t.myReviews.map(ua).join("")}
    </div>
  `}function ua(e){const r=e.review;return`
    <article class="my-review-item">
      <img src="${n(e.image)}" alt="${n(e.name)}" />
      <div>
        <strong>${n(e.name)}</strong>
        <p class="hint">${n(e.brand||"BEAUTY SKIN KOREA")} ${e.orderId?`· Order #${n(e.orderId)}`:""}</p>
        ${r!=null&&r.rating||r!=null&&r.content?`
          <div class="written-review">
            ${He(r.rating)}
            <p>${n(r.content||"No text review.")}</p>
            <p class="hint">${V(r.createdAt)}</p>
          </div>
        `:'<p class="hint">Review not written yet.</p>'}
      </div>
      <div class="review-action-cell">
        ${e.reviewable?`
          <button class="secondary-button" data-write-review="${n(e.productId)}" data-review-order="${n(e.orderId)}" data-review-name="${n(e.name)}" type="button">Write review</button>
        `:r!=null&&r.content||r!=null&&r.rating?'<span class="status-badge status-delivered">Reviewed</span>':'<span class="hint">Not reviewable</span>'}
      </div>
    </article>
  `}function Dt(e={}){if(!S()){$();return}const r=e.productId,i=e.orderId;if(!r||!i){v("Product and order are required for review.");return}t.reviewDraft={productId:r,orderId:i,productName:e.productName||"Product"},t.reviewRating=5,a.writeReviewProduct.textContent=`${t.reviewDraft.productName} · Order #${i}`,a.reviewContent.value="",a.reviewImages.value="",a.reviewImageFiles.value="",a.reviewUploadStatus.textContent="",L(""),Rt(),a.writeReviewDialog.showModal(),P()}function Rt(){a.reviewRatingSelector.innerHTML=Array.from({length:5},(e,r)=>{const i=r+1;return`
      <button class="rating-choice ${i<=t.reviewRating?"active":""}" data-review-rating="${i}" type="button" aria-label="Rating ${i} out of 5">
        ★
      </button>
    `}).join("")}function Xe(){a.myReviewsDialog.open&&a.myReviewsDialog.close(),E()}function ge(){a.writeReviewDialog.open&&a.writeReviewDialog.close(),E()}function L(e,r=""){a.reviewFormMessage.textContent=e,a.reviewFormMessage.className=`form-message ${r}`.trim()}function ma(e){return String(e||"").split(/[\n,]+/).map(r=>r.trim()).filter(Boolean).slice(0,5)}function ga(e){const r=new Set(["image/jpeg","image/png","image/webp"]),i=Array.from(e||[]);return i.length>5?{error:"Maximum 5 image files allowed.",files:[]}:i.find(d=>!r.has(d.type))?{error:"Only JPG, PNG and WEBP images are allowed.",files:[]}:i.find(d=>d.size>10*1024*1024)?{error:"Each image must be 10MB or smaller.",files:[]}:{files:i}}async function fa(e){const r=[];for(let i=0;i<e.length;i+=1){const o=e[i];a.reviewUploadStatus.textContent=`Uploading image ${i+1} of ${e.length}...`;const s=await m("/api/uploads/presign",{method:"POST",requireAuth:!0,showError:!1,body:JSON.stringify({fileName:o.name,contentType:o.type,folder:"reviews",fileSizeBytes:o.size})});if(!(s!=null&&s.uploadUrl)||!(s!=null&&s.publicUrl))throw new Error(t.lastApiError||"Image upload could not be prepared.");const d=await fetch(s.uploadUrl,{method:"PUT",headers:{"Content-Type":o.type},body:o});if(!d.ok)throw new Error(`Image upload failed: HTTP ${d.status}`);r.push(s.publicUrl)}return a.reviewUploadStatus.textContent=r.length?"Images uploaded.":"",r}async function ha(e){var g;if(e.preventDefault(),t.reviewSubmitting)return;const r=t.reviewDraft||{},i=a.reviewContent.value.trim(),o=ma(a.reviewImages.value),s=ga(a.reviewImageFiles.files);if(!r.productId||!r.orderId){L("Product and order are required.","error");return}if(t.reviewRating<1||t.reviewRating>5){L("Choose a rating from 1 to 5.","error");return}if(!i){L("Review text is required.","error");return}if(s.error){L(s.error,"error");return}if(String(a.reviewImages.value||"").split(/[\n,]+/).filter(h=>h.trim()).length>5){L("Maximum 5 image URLs allowed.","error");return}if(o.length+s.files.length>5){L("Maximum 5 review images allowed.","error");return}t.reviewSubmitting=!0,t.uploadingReviewImages=!!s.files.length,a.submitReviewButton.disabled=!0,a.submitReviewButton.textContent="Submitting...",L("");let d=[];try{d=s.files.length?await fa(s.files):[]}catch(h){t.reviewSubmitting=!1,t.uploadingReviewImages=!1,a.submitReviewButton.disabled=!1,a.submitReviewButton.textContent="Submit review",L(h.message||"Image upload failed.","error");return}const c=[...d,...o].slice(0,5),u=await m("/api/reviews",{method:"POST",requireAuth:!0,showError:!1,body:JSON.stringify({productId:Number(r.productId),orderId:Number(r.orderId),rating:Number(t.reviewRating),content:i,imageUrls:c})});if(t.reviewSubmitting=!1,t.uploadingReviewImages=!1,a.submitReviewButton.disabled=!1,a.submitReviewButton.textContent="Submit review",a.reviewUploadStatus.textContent="",u===null){if(t.lastApiError.includes("Session expired")){Xe(),ge();return}L(t.lastApiError||"Review could not be submitted.","error");return}v("Review submitted"),ge(),await Ce(),((g=t.selectedDetailProduct)==null?void 0:g.id)!==void 0&&String(t.selectedDetailProduct.id)===String(r.productId)&&await _e(r.productId)}function pa(e){const r=e.target.closest("[data-my-reviews-retry]"),i=e.target.closest("[data-write-review]");if(r){Ce();return}i&&Dt({productId:i.dataset.writeReview,orderId:i.dataset.reviewOrder,productName:i.dataset.reviewName})}function va(e){const r=e.target.closest("[data-review-rating]");r&&(t.reviewRating=Number(r.dataset.reviewRating),Rt())}function et(e="login"){fe(e),$e(),a.authDialog.showModal(),P()}function fe(e){t.authMode=e;const r=e==="login";a.authTitle.textContent=l(r?"auth.login":"auth.register"),a.loginFields.hidden=!r,a.registerFields.hidden=r,a.authSubmit.textContent=l(r?"auth.signIn":"auth.createAccount"),a.loginTab.classList.toggle("active",r),a.registerTab.classList.toggle("active",!r),a.loginTab.setAttribute("aria-selected",String(r)),a.registerTab.setAttribute("aria-selected",String(!r)),$e()}function $e(){document.querySelectorAll(".field-error").forEach(e=>{e.textContent=""}),a.authMessage.textContent="",a.authMessage.className="form-message"}function B(e,r){const i=document.getElementById(`${e}Error`);i&&(i.textContent=r)}function he(e){t.authLoading=e,a.authSubmit.disabled=e,a.authSubmit.textContent=e?l("home.loading"):t.authMode==="login"?l("auth.signIn"):l("auth.createAccount")}function Tt(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function ya(){$e();let e=!0;const r=a.loginEmail.value.trim(),i=a.loginPassword.value;return(!r||!Tt(r))&&(B("loginEmail",l("auth.emailRequired")),e=!1),(!i||i.length<6)&&(B("loginPassword",l("auth.passwordMin")),e=!1),e}function ba(){$e();let e=!0;const r=a.registerFullName.value.trim(),i=a.registerEmail.value.trim(),o=a.registerPhone.value.trim(),s=a.registerPassword.value,d=a.registerConfirmPassword.value;return r||(B("registerFullName",l("auth.fullNameRequired")),e=!1),(!i||!Tt(i))&&(B("registerEmail",l("auth.emailRequired")),e=!1),o||(B("registerPhone",l("auth.phoneRequired")),e=!1),(!s||s.length<6)&&(B("registerPassword",l("auth.passwordMin")),e=!1),s!==d&&(B("registerConfirmPassword",l("auth.passwordMismatch")),e=!1),e}async function wa(e){e.preventDefault(),!t.authLoading&&(t.authMode==="login"?await Sa():await Ea())}async function Sa(){if(!ya())return;he(!0);const e=await m("/api/auth/login",{method:"POST",body:JSON.stringify({email:a.loginEmail.value.trim(),password:a.loginPassword.value}),showError:!1});if(he(!1),!(e!=null&&e.token)){a.authMessage.textContent=t.lastApiError||"Email yoki parol noto‘g‘ri.",a.authMessage.className="form-message error";return}cr(e),await yt(),a.authDialog.close(),v(`Welcome, ${Be(e.fullName)||"User"}.`),await N(),await _(),await F()}async function Ea(){if(!ba())return;he(!0);const e=await m("/api/auth/register",{method:"POST",body:JSON.stringify({fullName:a.registerFullName.value.trim(),email:a.registerEmail.value.trim(),phone:a.registerPhone.value.trim(),password:a.registerPassword.value}),showError:!1});if(he(!1),e===null){a.authMessage.textContent=t.lastApiError||"Email allaqachon mavjud yoki server javob bermadi.",a.authMessage.className="form-message error";return}a.authMessage.textContent="Registered. Endi login qiling.",a.authMessage.className="form-message success",fe("login"),a.loginEmail.value=a.registerEmail.value.trim()}function Aa(){if(!S()){$();return}t.profileEditing=!1,tt(),a.profileDrawer.classList.add("open"),a.profileDrawer.setAttribute("aria-hidden","false"),P()}function M(){a.profileDrawer.classList.remove("open"),a.profileDrawer.setAttribute("aria-hidden","true"),E()}function tt(){const e=t.user||{},r=e.profileImage?`<img class="profile-avatar" src="${n(e.profileImage)}" alt="${n(e.fullName||"Profile")}" />`:`<div class="profile-avatar">${n(Be(e.fullName||e.email||"U").charAt(0)||"U")}</div>`;a.profileContent.innerHTML=`
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
      ${t.profileEditing?Ca(e):""}
    </div>
  `}function Ca(e){return`
    <form class="profile-edit" id="profileEditForm">
      <label>Email<input value="${n(e.email||"")}" readonly /></label>
      <label>Full name<input id="profileFullName" value="${n(e.fullName||"")}" required /></label>
      <label>Phone<input id="profilePhone" value="${n(e.phone||"")}" required /></label>
      <label>Profile image URL<input id="profileImage" value="${n(e.profileImage||"")}" /></label>
      <button class="primary-button full" id="profileSaveButton" type="submit">Save profile</button>
      <p class="form-message" id="profileMessage"></p>
    </form>
  `}async function $a(e){const r=e.target.closest("[data-profile-action]");if(!r)return;const i=r.dataset.profileAction;if(i==="edit"){t.profileEditing=!t.profileEditing,tt();return}if(i==="logout"){Oe(),M(),v("Logged out.");return}if(i==="orders"){await Ae();return}if(i==="favorites"){M(),await It();return}if(i==="reviews"){M(),await ca();return}if(i==="notifications"){M(),await Pt();return}if(i==="addresses"||i==="receivers"){M(),await At();return}v("Bu bo‘lim keyingi bosqichga tayyor.")}async function Ia(e){var g;const r=e.target.closest("[data-select-receiver]"),i=e.target.closest("[data-select-address]"),o=e.target.closest("[data-delete-receiver]"),s=e.target.closest("[data-delete-address]"),d=e.target.closest("[data-place-order]"),c=e.target.closest("[data-success-orders]"),u=e.target.closest("[data-success-continue]");if(o){e.stopPropagation(),await Ra(o.dataset.deleteReceiver);return}if(s){e.stopPropagation(),await Ta(s.dataset.deleteAddress);return}if(r){t.selectedReceiverId=r.dataset.selectReceiver,k();return}if(i){t.selectedAddressId=i.dataset.selectAddress,k();return}if(d){await Nt();return}if(c){a.checkoutDialog.close(),await Ae();return}u&&(a.checkoutDialog.close(),K(),(g=document.getElementById("products"))==null||g.scrollIntoView({behavior:"smooth",block:"start"}))}function ka(e){var d;const r=e.target.closest("[data-order-detail]"),i=e.target.closest("[data-orders-retry]"),o=e.target.closest("[data-orders-start-shopping]"),s=e.target.closest("[data-order-write-review]");if(s){Dt({productId:s.dataset.orderWriteReview,orderId:s.dataset.reviewOrder,productName:s.dataset.reviewName});return}if(r){$t(r.dataset.orderDetail);return}if(i){Je();return}o&&(a.ordersDialog.close(),(d=document.getElementById("products"))==null||d.scrollIntoView({behavior:"smooth",block:"start"}))}async function Pa(e){const r=e.target.closest("[data-add-receiver-form]"),i=e.target.closest("[data-add-address-form]");!r&&!i||(e.preventDefault(),r&&await La(),i&&await Da())}async function La(){var d,c,u;const e=(d=document.getElementById("receiverFirstName"))==null?void 0:d.value.trim(),r=(c=document.getElementById("receiverLastName"))==null?void 0:c.value.trim(),i=(u=document.getElementById("receiverPhone"))==null?void 0:u.value.trim(),o=document.getElementById("receiverFormError");if(!e||!r||!i){o&&(o.textContent="First name, last name va phone majburiy.");return}const s=await m("/api/receivers",{method:"POST",requireAuth:!0,body:JSON.stringify({firstName:e,lastName:r,phone:i})});s!==null&&(await We(s.id),k(),v("Receiver added"))}async function Da(){var c,u,g,h;const e=(c=document.getElementById("addressTitle"))==null?void 0:c.value.trim(),r=(u=document.getElementById("addressText"))==null?void 0:u.value.trim(),i=Number((g=document.getElementById("addressLatitude"))==null?void 0:g.value),o=Number((h=document.getElementById("addressLongitude"))==null?void 0:h.value),s=document.getElementById("addressFormError");if(!e||!r||!Number.isFinite(i)||!Number.isFinite(o)){s&&(s.textContent="Title, address, latitude va longitude majburiy.");return}const d=await m("/api/addresses",{method:"POST",requireAuth:!0,body:JSON.stringify({title:e,address:r,latitude:i,longitude:o})});d!==null&&(await Qe(d.id),k(),v("Address added"))}async function Ra(e){await m(`/api/receivers/${e}`,{method:"DELETE",requireAuth:!0})!==null&&(String(t.selectedReceiverId)===String(e)&&(t.selectedReceiverId=null),await We(),k())}async function Ta(e){await m(`/api/addresses/${e}`,{method:"DELETE",requireAuth:!0})!==null&&(String(t.selectedAddressId)===String(e)&&(t.selectedAddressId=null),await Qe(),k())}async function Nt(){if(!t.selectedReceiverId||!t.selectedAddressId||!t.cartItems.length)return;t.orderSubmitting=!0,k();const e=await m("/api/orders",{method:"POST",requireAuth:!0,body:JSON.stringify({receiverId:Number(t.selectedReceiverId),addressId:Number(t.selectedAddressId),cartItemIds:t.cartItems.map(r=>Number(r.id))}),showError:!1});if(t.orderSubmitting=!1,e===null){t.checkoutError=t.lastApiError||"Order could not be created.",k(),v(t.checkoutError,"error");return}t.orderSuccess=e,await N(),await F(),K(),k(),v("Order created","success")}async function Na(e){var c,u,g;e.preventDefault();const r=t.user||{},i={id:r.id,email:r.email,fullName:(c=document.getElementById("profileFullName"))==null?void 0:c.value.trim(),phone:(u=document.getElementById("profilePhone"))==null?void 0:u.value.trim(),profileImage:(g=document.getElementById("profileImage"))==null?void 0:g.value.trim()},o=document.getElementById("profileMessage");if(!i.fullName||!i.phone){o&&(o.textContent="Full name va phone majburiy.",o.className="form-message error");return}if(await m("/api/users/me",{method:"PUT",requireAuth:!0,body:JSON.stringify(i),showError:!1})===null){o&&(o.textContent=t.lastApiError||"Profile yangilanmadi.",o.className="form-message error");return}const d=await m("/api/users/me",{requireAuth:!0,showError:!1});d&&(t.user=d,localStorage.setItem(f.storageKeys.user,JSON.stringify(d))),t.profileEditing=!1,G(),tt(),v("Profile updated.")}function Ma(){var e;(e=a.languageSelect)==null||e.addEventListener("change",r=>Yt(r.target.value)),a.searchForm.addEventListener("submit",r=>r.preventDefault()),a.searchInput.addEventListener("input",Oa),a.categoryToolbar.addEventListener("click",Pe),a.quickCategoryGrid.addEventListener("click",Pe),a.catalogList.addEventListener("click",Pe),a.banners.addEventListener("click",Ba),a.grid.addEventListener("click",se),a.dealsGrid.addEventListener("click",se),a.detailContent.addEventListener("click",lt),a.productDetailPageContent.addEventListener("click",r=>{lt(r)||se(r)}),a.cartItems.addEventListener("click",qa),a.catalogButton.addEventListener("click",Fa),a.closeCatalog.addEventListener("click",le),a.cartButton.addEventListener("click",Ua),a.closeCart.addEventListener("click",K),a.loginButton.addEventListener("click",()=>{S()?Aa():et("login")}),a.favoritesButton.addEventListener("click",It),a.notificationsButton.addEventListener("click",Pt),a.apiButton.addEventListener("click",xa),a.loginTab.addEventListener("click",()=>fe("login")),a.registerTab.addEventListener("click",()=>fe("register")),a.authForm.addEventListener("submit",wa),a.apiForm.addEventListener("submit",Ha),a.checkoutButton.addEventListener("click",At),a.checkoutForm.addEventListener("submit",Vr),a.checkoutContent.addEventListener("click",Ia),a.checkoutContent.addEventListener("submit",Pa),a.ordersContent.addEventListener("click",ka),a.refreshOrders.addEventListener("click",Je),a.closeOrders.addEventListener("click",()=>a.ordersDialog.close()),a.favoritesContent.addEventListener("click",aa),a.refreshFavorites.addEventListener("click",()=>_({render:!0})),a.closeFavorites.addEventListener("click",kt),a.notificationsContent.addEventListener("click",da),a.refreshNotifications.addEventListener("click",()=>{Ze(),F()}),a.closeNotifications.addEventListener("click",X),a.myReviewsContent.addEventListener("click",pa),a.refreshMyReviews.addEventListener("click",Ce),a.closeMyReviews.addEventListener("click",Xe),a.writeReviewForm.addEventListener("submit",ha),a.closeWriteReview.addEventListener("click",ge),a.reviewRatingSelector.addEventListener("click",va),a.closeProfile.addEventListener("click",M),a.profileContent.addEventListener("click",$a),a.profileContent.addEventListener("submit",Na),a.ordersButton.addEventListener("click",Ae),a.refreshHome.addEventListener("click",ye),a.loadMore.addEventListener("click",Lr),window.addEventListener("hashchange",ue),a.catalogDrawer.addEventListener("click",r=>{r.target===a.catalogDrawer&&le()}),a.cartDrawer.addEventListener("click",r=>{r.target===a.cartDrawer&&K()}),a.profileDrawer.addEventListener("click",r=>{r.target===a.profileDrawer&&M()}),a.notificationsDrawer.addEventListener("click",r=>{r.target===a.notificationsDrawer&&X()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&(le(),K(),M(),X(),a.ordersDialog.open&&a.ordersDialog.close(),a.favoritesDialog.open&&a.favoritesDialog.close(),a.myReviewsDialog.open&&a.myReviewsDialog.close(),a.writeReviewDialog.open&&a.writeReviewDialog.close())}),a.detailDialog.addEventListener("close",E),a.authDialog.addEventListener("close",E),a.apiDialog.addEventListener("close",E),a.checkoutDialog.addEventListener("close",E),a.ordersDialog.addEventListener("close",E),a.favoritesDialog.addEventListener("close",E),a.myReviewsDialog.addEventListener("close",E),a.writeReviewDialog.addEventListener("close",E),document.querySelectorAll("[data-close-dialog]").forEach(r=>{r.addEventListener("click",()=>{var i;return(i=r.closest("dialog"))==null?void 0:i.close()})})}function Oa(e){clearTimeout(t.searchTimer),t.searchTimer=setTimeout(()=>{Mr(e.target.value).catch(()=>{O(a.grid,"Qidiruv vaqtida xatolik yuz berdi."),a.status.textContent=""})},f.searchDebounceMs)}function Pe(e){const r=e.target.closest("[data-category]");r&&(le(),Ve(r.dataset.category).catch(()=>{O(a.grid,"Kategoriya mahsulotlari yuklanmadi."),a.status.textContent=""}),window.setTimeout(()=>{var i;(i=document.getElementById("products"))==null||i.scrollIntoView({behavior:"smooth",block:"start"})},0))}function se(e){const r=e.target.closest("[data-show-all]"),i=e.target.closest("[data-favorite]"),o=e.target.closest("[data-add]"),s=e.target.closest("[data-detail]"),d=e.target.closest("[data-product]");if(r){e.stopPropagation(),ye();return}if(i){e.stopPropagation(),Mt(i.dataset.favorite);return}if(o){e.stopPropagation(),Et(o.dataset.add,null,1);return}if(s||d&&!e.target.closest("button")){e.stopPropagation();const c=(s||d).dataset.detail||d.dataset.product;ur(c),Or(c)}}function Ba(e){const r=e.target.closest("[data-banner-dot]");if(r){ze(Number(r.dataset.bannerDot)),ce();return}const i=e.target.closest("[data-banner-nav]");if(i){i.dataset.bannerNav==="next"?bt():Sr(),ce();return}const o=e.target.closest("[data-banner-link-type]");if(!o)return;const s=o.dataset.bannerLinkType,d=o.dataset.bannerLinkId;if(s==="PRODUCT"&&d){Ye(d);return}if(s==="CATEGORY"&&d){const c=t.categories.find(u=>String(u)===String(d))||(dt[d]?d:"");c?(Te(),Ve(c)):v("Category banner is not available yet.","info")}}function lt(e){const r=e.target.closest("[data-route-home]"),i=e.target.closest(".product-detail-page [data-category]"),o=e.target.closest("[data-close-detail]"),s=e.target.closest("[data-variant]"),d=e.target.closest("[data-qty]"),c=e.target.closest("[data-detail-add]"),u=e.target.closest("[data-detail-favorite]"),g=e.target.closest("[data-reviews-retry]");if(r)return e.stopPropagation(),Te(),!0;if(i)return e.stopPropagation(),Te(),Ve(i.dataset.category),!0;if(o)return e.stopPropagation(),a.detailDialog.close(),E(),!0;if(s)return e.stopPropagation(),t.selectedVariantId=s.dataset.variant,R(t.selectedDetailProduct),!0;if(d)return e.stopPropagation(),t.selectedQuantity=Math.max(1,t.selectedQuantity+(d.dataset.qty==="plus"?1:-1)),R(t.selectedDetailProduct),!0;if(u)return e.stopPropagation(),Mt(u.dataset.detailFavorite),!0;if(g)return e.stopPropagation(),_e(g.dataset.reviewsRetry),!0;if(c){e.stopPropagation();const h=document.getElementById("quantityInput");return t.selectedQuantity=Math.max(1,Number((h==null?void 0:h.value)||t.selectedQuantity)),Et(t.selectedDetailProduct.id,t.selectedVariantId,t.selectedQuantity),!0}return!1}function qa(e){var d;const r=e.target.closest("[data-cart-retry]"),i=e.target.closest("[data-start-shopping]"),o=e.target.closest("[data-cart-qty]"),s=e.target.closest("[data-remove]");if(r&&N(),i&&(K(),(d=document.getElementById("products"))==null||d.scrollIntoView({behavior:"smooth",block:"start"})),o){const c=t.cartItems.find(u=>String(u.id)===String(o.dataset.cartId));c&&jr(c.id,c.quantity+(o.dataset.cartQty==="plus"?1:-1))}s&&Gr(s.dataset.remove)}function Ua(){if(!S()){$();return}a.cartDrawer.classList.add("open"),a.cartDrawer.setAttribute("aria-hidden","false"),P(),N()}function K(){a.cartDrawer.classList.remove("open"),a.cartDrawer.setAttribute("aria-hidden","true"),E()}function Fa(){a.catalogDrawer.classList.add("open"),a.catalogDrawer.setAttribute("aria-hidden","false"),a.catalogButton.setAttribute("aria-expanded","true"),P()}function le(){a.catalogDrawer.classList.remove("open"),a.catalogDrawer.setAttribute("aria-hidden","true"),a.catalogButton.setAttribute("aria-expanded","false"),E()}function P(){document.body.classList.add("locked")}function E(){const e=a.cartDrawer.classList.contains("open")||a.catalogDrawer.classList.contains("open")||a.profileDrawer.classList.contains("open")||a.notificationsDrawer.classList.contains("open"),r=[a.detailDialog,a.authDialog,a.apiDialog,a.checkoutDialog,a.ordersDialog,a.favoritesDialog,a.myReviewsDialog,a.writeReviewDialog].some(i=>i.open);!e&&!r&&document.body.classList.remove("locked")}function xa(){a.baseUrl.value=t.baseUrl,a.apiDialog.showModal(),P()}function Ha(e){e.preventDefault(),t.baseUrl=pe(a.baseUrl.value||""),localStorage.setItem(f.storageKeys.baseUrl,t.baseUrl),a.apiDialog.close(),ye()}async function Mt(e){var d;if(!S()){$();return}const r=t.favoriteIds.has(String(e)),i=await m(`/api/favorites/${e}/toggle`,{method:"POST",requireAuth:!0});if(i===null)return;const o=typeof i=="object"&&"favorite"in i?!!i.favorite:!r,s=Ka(e);if(o){const c=s?{...s,favorite:!0}:null;c&&!t.favoriteProducts.some(u=>String(u.id)===String(e))&&(t.favoriteProducts=[c,...t.favoriteProducts])}else t.favoriteProducts=t.favoriteProducts.filter(c=>String(c.id)!==String(e));t.favoriteIds=new Set(t.favoriteProducts.map(c=>String(c.id))),t.favoritesCount=t.favoriteProducts.length,T(),re(),t.products.length&&C(a.grid,t.products,"Mahsulot topilmadi."),t.todayDeals.length&&C(a.dealsGrid,t.todayDeals.slice(0,8),"Bugungi takliflar topilmadi."),((d=t.selectedDetailProduct)==null?void 0:d.id)!==void 0&&String(t.selectedDetailProduct.id)===String(e)&&R(t.selectedDetailProduct),a.favoritesDialog.open&&H(),v(o?"Added to favorites":"Removed from favorites","success"),o&&!s&&await _({render:a.favoritesDialog.open})}function Ka(e){return[...t.products,...t.todayDeals,...t.favoriteProducts,t.selectedDetailProduct].filter(Boolean).find(r=>String(r.id)===String(e))}function za(){ft(t),Se(),Y(),t.currentRoute==="product"&&t.selectedDetailProduct?R(t.selectedDetailProduct):(C(a.grid,t.products,l("home.noProducts"),{screen:t.currentGridScreen}),C(a.dealsGrid,t.todayDeals.slice(0,8),l("home.noProducts"))),a.cartDrawer.classList.contains("open")&&D(),a.favoritesDialog.open&&H(),a.ordersDialog.open&&q(),a.notificationsDrawer.classList.contains("open")&&U(),a.myReviewsDialog.open&&ne(),G()}Vt(za);async function Ga(){or({onUnauthorized:()=>{Oe(),et("login"),v(l("auth.sessionExpired"))},onLoginRequired:$,showToast:(e,r="error")=>v(e,r)});try{Ma(),ft(t)}catch(e){console.error("Init event binding failed:",e),a.status.textContent=`UI ishga tushishda xatolik yuz berdi: ${e.message}`,v("UI ishga tushishda xatolik yuz berdi.");return}G(),yt().catch(e=>{console.error("Auth startup failed:",e)}),ye().then(()=>ue()).catch(e=>{console.error("Home loading failed:",e),t.demoProducts=!1,t.demoDeals=!1,a.status.textContent="",a.dealsStatus.textContent="",O(a.grid,l("common.serverFailed"),l("common.tryAgain")),Y(),ue()})}function ja(){Ut(),Ft(),t.baseUrl=pe(localStorage.getItem(f.storageKeys.baseUrl)||""),Ht(),ie()&&(console.assert(document.getElementById("productGrid"),"productGrid missing"),console.assert(document.getElementById("dealsGrid"),"dealsGrid missing"),console.assert(document.getElementById("productStatus"),"productStatus missing"),console.assert(document.getElementById("dealsStatus"),"dealsStatus missing"),console.assert(document.getElementById("quickCategoryGrid"),"quickCategoryGrid missing")),Ga()}ja();
