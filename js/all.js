
    var zennir2 = window.zennir2 || {};
    zennir2.global = (function() {
    'use strict';
    var api = {
    isRFK: true,
    staticImageUrl: function() {
    return '//static.zennioptical.com';
},
    siteURL: function() {
    return '//www.zennioptical.com';
},
    productImagePath: function() {
    return '//static.zennioptical.com/production/products/general';
},
    framefitImagePath: function() {
    return '//static.zennioptical.com/production/products/framefit';
},
    tintFrameUrlPath: function() {
    return '//static.zennioptical.com/production/products/framefit';
},
    frameFitWebcamSWFFile: function() {
    return '//static.zennioptical.com/dev/media/webcam/jscam_canvas_only.swf';
},
    defaultPupilLine: function() {
    return 125;
},
    pdp360ImagePath: '//static.zennioptical.com/production/products/360/',
    tryOnDataUrl: '/misc/ajax/tryOnData.jsp',
    termsErrMsg: 'Please read and accept the terms & conditions before placing your order.',
    marketImagePath: function() {
    return '//static.zennioptical.com/dev/image/site';
},
    buttonText: {
    Retired: "RETIRED",
    OutOfStock: "OUT OF STOCK",
    OrderGlass: "ORDER GLASSES",
    OrderSunGlass: "ORDER SUNGLASSES",
    AddToCart: "ADD TO CART",
    AddToFav: "ADD TO FAVORITES",
    RemoveFromFav: "REMOVE",
    RemoveFormCart: 'REMOVE',
    ChangeAddress: 'CHANGE'
},

    imgApi: {
    type: {
    eyeglasses: ["readingGlasses", "standardFrameType"],
    sunglasses: ["nonRXSunglasses", "premiumSunglasses"],
    clipon: ["sunshade"],
    goggles: ["goggles", "skiGoggles", "sports", "swimGoggles"],
    accessories: ["caseAndLensCloths", "eyeglassChains"]
},
    views: ["front-view", "side-view", "angle-view"],
    ext: [".jpg", ".png"],
    size: {
    xl: "resize=1500px:*",
    lg: "resize=800px:*",
    md: "resize=500px:*",
    sm: "resize=200px:*",
    xs: "resize=80px:*"
},
    quality: {
    xhigh: "output-quality=95",
    high: "output-quality=90",
    med: "output-quality=80",
    low: "output-quality=70",
    xlow: "output-quality=50"
}
},
    language: {
    country: 'USA',
    USA: {
    currencySymbol: '$'
}
},
    currency: {
    code: "USD",
    symbol: "$"
},
    rest: {
    getStatesByCountry: "https://www.zennioptical.com/rest/model/atg/commerce/order/purchase/ShippingGroupActor/getStatesByCountry",
    getAvailableShippingMethods: "https://www.zennioptical.com/rest/model/atg/commerce/order/purchase/ShippingGroupActor/getAvailableShippingMethods",
    getCityByZipcode: "https://www.zennioptical.com/rest/model/atg/commerce/order/purchase/ShippingGroupActor/cityStateLookup",
    getSavedAddress: "https://www.zennioptical.com/rest/model/atg/commerce/order/purchase/ShippingGroupActor/getSavedAddress",
    getGiftCardBalance: "https://www.zennioptical.com/rest/model/zenni/order/OrderPageActor/getGiftCardBalance",
    getInitialOrderPageSummary: "https://www.zennioptical.com/rest/model/zenni/order/OrderPageActor/getInitialOrderPageSummary",
    getOrderSummary: "https://www.zennioptical.com/rest/model/zenni/order/OrderPageActor/getOrderInformation",
    getLensSummary: "https://www.zennioptical.com/rest/model/zenni/order/OrderPageActor/getLensSummary",
    getAddOnSummary: "https://www.zennioptical.com/rest/model/zenni/order/OrderPageActor/getAddOnSummary",
    orderPageHelpTip: "https://www.zennioptical.com/misc/ajax/helpMsg.jsp",
    getImportPrescription: "https://www.zennioptical.com/rest/model/zenni/order/OrderPageActor/importPrescription",
    accountsGiftcardCheck: "https://www.zennioptical.com/rest/model/atg/userprofiling/zenniMiscAuxillaryServicesActor/giftCardStatus",
    accountsPrescriptionPopup: "https://www.zennioptical.com/cartridges/ZRAC_MyAccountRightNav/orderPrescriptionModal.jsp",
    accountsPrescriptionPagePopup: "https://www.zennioptical.com/cartridges/ZRAC_MyAccountRightNav/prescription_details.jsp",
    getSkuDetailsById: "https://www.zennioptical.com/rest/model/zenni/order/OrderPageActor/getCliponFrameData",
    getSkuDetailsByShapeId: "https://www.zennioptical.com/rest/model/zenni/order/OrderPageActor/getCliponFrameData",
    sendTrustpilot: "https://www.zennioptical.com/rest/model/zenni/order/OrderPageActor/createTrustpilotInvitation",
    consumerAffairs: "https://www.zennioptical.com/rest/model/zenni/order/OrderPageActor/collectConsumerAffairsOrderId",
    userLocationFromAkamai: "https://www.zennioptical.com/rest/model/zenni/profile/CollectUserLocationActor/getUserLocationFromAkamai",
    getCartValid: "https://www.zennioptical.com/rest/model/atg/commerce/order/purchase/ShippingGroupActor/validateCart",
    removeAccessoriesFromCart: "https://www.zennioptical.com/rest/model/atg/commerce/order/purchase/ShippingGroupActor/deleteInvalidItems",
    getSessionConfirmation: "https://www.zennioptical.com/rest/model/atg/rest/SessionConfirmationActor/getStringSessionConfirmationNumber",
    queryInventoryInfo: "https://www.zennioptical.com/rest/model/zenni/order/OrderPageActor/queryInventory",
    migratedUserOptIn: "https://www.zennioptical.com/rest/model/atg/userprofiling/ProfileActor/migratedUserOptIn",
    migratedUserOptOut: "https://www.zennioptical.com/rest/model/atg/userprofiling/ProfileActor/migratedUserOptOut",
    findUserAssociatedDetails: "https://www.zennioptical.com/rest/model/atg/userprofiling/ProfileActor/findUserAssociatedDetails",
    checkCrossSiteUser: "https://www.zennioptical.com/rest/model/atg/userprofiling/ProfileActor/checkCrossSiteUser"
},
    orderPage: {
    _dynSessConf: '5491652708885710282',
    prismErrorMessage: 'Unfortunately, we are unable to accommodate your prescription in our line of Premium Sunglasses frames. Please choose a different frame from our large eyeglasses collection. You can customize them as sunglasses by tinting your lenses at checkout.',
    prismErrorTitle: 'ERROR',
    step1: {
    presriptionLabel: 'PRESCRIPTION',
    impPresriptionLabel: 'Import',
    clearAllLabel: 'Clear All',
    presriptionTypeLabel: 'PRESCRIPTION TYPE',
    pdLabel: 'PD - PUPILLARY DISTANCE',
    pdSingle: 'Single PD',
    pdDual: 'Dual PD',
    selectLabel: 'Select',
    rightLabel: 'Right',
    leftLabel: 'Left',
    sphCylTips: 'Be sure to select the correct value (<span class="plugSign">+</span> / <span class="minusSign">-</span>) for both Sphere and Cylinder.',
    sphCylDiff5TipText: 'We see that you entered an unusual value for your cylinder. This will result in one lens being thicker than the other. Please review your entry and let us know if this is correct.',
    prescriptionTipsProgressive: '<p>Please enter your regular prescription (including ADD). Our lab technicians will calculate the lens parameters for you based on your prescription and selected Workspace Progressive option.</p>',
    sphCylNotificationText: '<p>We see that you entered an unusual value for your sphere and cylinder. This will result in one lens being thicker. Please confirm your entry.</p>',
    sphNotificationText: '<p>We see that you entered an unusual value for your sphere. This will result in one lens being thicker than the other. Please review your entry and let us know if this is correct.</p>',
    cylNotificationText: '<p>We see that you entered an unusual value for your cylinder. This will result in one lens being thicker than the other. Please review your entry and let us know if this is correct.</p>',
    presEmptyError: '<p>Please fill in the highlighted fields.</p>',
    odRightLabel: 'OD - Right',
    sphLabel: 'Sphere (SPH)',
    sphLabelMobile: '(SPH)',
    cycLabel: 'Cylinder(CYL)',
    cycLabelMobile: '(CYL)',
    axisLabel: 'Axis',
    osLabel: 'OS - Left',
    nvAddLabel: 'NV - ADD',
    prismValLabel: 'PRISM VALUES',
    horizontalLabel: 'Horizontal',
    verticalLabel: 'Vertical',
    prismLabel: 'Prism',
    baseLabel: 'Base',
    directionLabel: 'Direction',
    prismVeritcal: 'Prism Vertical',
    baseDirLabel: 'Base Direction',
    savePrescriptionLabel: 'Save this prescription',
    dateOfPrescriptionLabel: 'Date of prescription',
    nameOfPrescriptionLabel: 'Prescription Name',
    renewalReminderLabel: 'Renewal Reminder',
    submitPrescriptionButton: 'Submit Prescription',
    yourLensesLabel: 'YOUR LENSES',
    addOnLabel: 'ADD ONS',
    rimlessFrameOnlyErrorMsg: 'Please note, due to slight differences in manufacturing or the mounting design, your current lenses may not fit into the replacement rimless frame. We recommend purchasing the frame with lenses.',
    frameOnlyErrorMsg: 'Please note, due to slight differences in manufacturing or frame size changes, your current lenses may not fit into the replacement frame.'
},
    step1success: {
    presriptionLabel: 'PRESCRIPTION',
    editLabel: 'edit',
    capsOffPrescLabel: 'Prescription Type',
    singleVisionLabel: 'Single Vision',
    pdDistanceLabel: 'PD - Pupillary Distance',
    rightLabel: 'Right',
    leftLabel: 'Left',
    odRightLabel: 'OD - Right',
    sphLabel2: '(SPH)',
    cylLabel: '(CYL)',
    axisLabel: 'Axis',
    osLeftLabel: 'OS - Left',
    nvAddLabel2: 'NV-ADD',
    birthYearLabel: 'Birth Year',
    prismLabel: 'Prism',
    baseLabel: 'Base',
    horizontalLabel: 'Horizontal',
    verticalLabel: 'Vertical'
},
    step2: {
    yourLensesLabel: 'YOUR LENSES',
    chooseLensText: 'Choose a lens index from one of the following lens options. All lenses include UV protection and anti-scratch coating at no additional cost.',
    nextLabel: 'Next',
    addOnsLabel: 'ADD ONS'
},
    step2success: {
    yourLensesLabel: 'YOUR LENSES',
    editLabel: 'edit'
},
    step3: {
    addOnsLabel: 'ADD ONS',
    enhanceTextLabel: 'Enhance your glasses with more options.',
    customEngravingLabel: 'CUSTOM ENGRAVING',
    quickTipsLabel: 'Quick Tip:',
    clearLensesLabel: 'Clear Lenses',
    selectArtworkLabel: 'SELECT ARTWORK',
    termsAndConditionLabel: 'I HAVE READ, UNDERSTOOD AND AGREE TO THE COPYRIGHT AND TRADEMARK TERMS STATED HEREIN.',
    priceOptionLabel: 'Price with selected options',
    qtyLabel: 'Quantity',
    estimatedTotalLabel: 'Estimated Total (USD)',
    addToCartLabel: 'ADD TO CART'
}
},
    orderPageHelpTip: '/mockajax/helptips.html',
    cartItemLimit: 99,
    cartPage: {
    qtyErrorTitle: 'ERROR',
    qtyErrorMessage: '<br>Sorry, a regular order cannot have more than 99 products. If you plan to buy large quantity, please call us for partnership opportunity.<br>'
},
    mPulseConfig: {
    enableMPulse: false,
    mpulseAPIKey: 'DCPC4-SVXHH-YDDG2-S3SX3-R7JM4',
    mpulseRESTAPIKey: '9294b1ae-cbb1-41cd-8c68-2b5de7987e0f'
},
    dittoConfig: {
    accessKeyId: "37d9f0e788320e0a",
    vtoServerUrl: "https://vto.zenni.api.ditto.com",
    clientSignatureUrl: "/rest/model/zenni/framefit/DittoServiceActor/getInitialSignature",
    dittoIdSignatureUrl: "/rest/model/zenni/framefit/DittoServiceActor/getDittoIdSignature?dittoId=",
    frontalFrameUrl: "https://vto.zenni.api.ditto.com/api/1.3/dittos/{dittoId}/frontal-frame/",
    dittoDataUrl: "https://vto.zenni.api.ditto.com/api/1.3/dittos/{dittoId}/",
    cookieExpiry: 365,
    deleteDittoUrl: "",
    setDefaultDittoUrl: "",
    dittoEnabled: true,
    trackDittoFailureLogzioUrl: "https://listener.logz.io:8071/?token=KzoqhqCBUCGLLxSFoYuYYhPJRezMEiiN",
    partnerId: "zenni",
    disableScale: false,
    forceScale: false,
    disablePreview: false,
    enableFaceAnalysis: true
},
    framefitConfig: {
    deleteFramefitUrl: "",
    setDefaultFramefitUrl: "",
    framefitEnabled: true
},
    errorHandler: {
    400: "400 - The request had bad syntax or was inherently impossible to be satisfied.",
    401: "401 - The parameter to this message gives a specification of authorization schemes which are acceptable. The client should retry the request with a suitable Authorization header.",
    402: "402 - The parameter to this message gives a specification of charging schemes acceptable. The client may retry the request with a suitable ChargeTo header.",
    403: "403 - The request is for something forbidden. Authorization will not help.",
    404: "404 - The server has not found anything matching the URI given",
    500: "500 - The server encountered an unexpected condition which prevented it from fulfilling the request.",
    501: "501 - The server does not support the facility required.",
    502: "502 - The server cannot process the request due to a high load (whether HTTP servicing or other requests). The implication is that this is a temporary condition which maybe alleviated at other times.",
    503: "503 - This is equivalent to Internal Error 500, but in the case of a server which is in turn accessing some other service, this indicates that the respose from the other service did not return within a time that the gateway was prepared to wait. As from the point of view of the client and the HTTP transaction the other service is hidden within the server, this maybe treated identically to Internal error 500, but has more diagnostic value.",
    'serverErrorMessageHtml': '<p>We\'re sorry, this service is currently unavailable. Please try again later, or contact <a href="https://www.zennioptical.com/help">Customer Service</a> for immediate help.</p>',
    'serverErrorMessageText': 'We\'re sorry, this service is currently unavailable. Please try again later, or contact Customer Service(https://www.zennioptical.com/help) for immediate help.'
},
    favoritesUrl: {
    anonymous: '/anonymousFavorites',
    registered: '/myAccount/myFavorites'
},
    removeCartItem: '/cartridges/ZRAC_ShoppingCart/remove_commerce_item_analysis.jsp',
    resellerRatings: {
    getFullJson: "https://www.zennioptical.com/rest/model/zenni/rr/ResellerRatingServiceActor/getFullJson",
    getProductReviewSummaryByParentId: "https://www.zennioptical.com/rest/model/zenni/rr/ResellerRatingServiceActor/getProductReviewSummaryByParentId",
    getProductReviewImagesBySKU: "https://www.zennioptical.com/rest/model/zenni/rr/ResellerRatingServiceActor/getProductReviewImagesBySKU",
    setProductReviewHelpfulFlag: "https://www.zennioptical.com/rest/model/zenni/rr/ResellerRatingServiceActor/setProductReviewHelpfulFlag",
    submitReviewConditionMsg: 'We reserve the right to edit or reject reviews that include inappropriate content, profanity, references to other retailers, pricing, or personal information. Please read our <a href="https://www.zennioptical.com/privacy-policy" target="_blank">Privacy Policy</a> and <a href="https://www.zennioptical.com/terms-of-use" target="_blank">Terms of Use </a> for more information about the review process.',
    rrWidgetJsUrl: "https://www.resellerratings.com/productreviews/widget/javascript/Zenni_Optical.js",
    rrSiteSeoName: "zennioptical_com",
    rrWidgetID: "SOQA"
},
    recaptcha: {
    sitekey: '6LeQQxwTAAAAAFAgkViIIZr3fekvZSVtNEzfrepV',
    allowedCaptchaLimitForGiftCard: -1,
    captchaEnabledForGiftCard: true
},
    prescriptionReminder: {
    getPrescriptionUpdates: '/json/showUpdatedPrescRemind.jsp',
    reminderCountMaxLimit: 5,
    warningModalTitle: 'Renewal Reminder',
    warningModalBody: 'Your prescription reminder will expire in a year based on your settings. If you have more than 5 reminders, then your oldest will be discontinued. You can edit your reminders by clicking on Edit.',
    prescriptionUpdatesModalHeading: 'Prescription Updates',
    prescriptionUpdatesModalBody: 'Your prescription reminder settings have been updated for [PrescriptionNames] prescriptions. Please go to My Prescription page to manage them.',
    prescriptionUpdatesModalBtn: 'Manage Prescriptions',
    prescriptionUpdatesModalBtnUrl: 'myAccount/myPrescription',
},
    smartyStreet: {
    smartyStreetAddressLookup: 'https://us-autocomplete-pro.api.smartystreets.com/lookup',
    smartyStreetUSAddressCheck: 'https://us-street.api.smartystreets.com/street-address',
    smartyStreetInternationalAddressCheck: 'https://international-street.api.smartystreets.com/verify',
    smartyStreetAuthId: '8105724873498054',
    smartyStreetAuthToken: '0aXecRdwE56cknWRimb3'
},
    allowedAccessory: ['Cases and Lens Cloths', 'EyeglassChains', 'NonRXSunglasses', 'NonRXGoggles', 'SkiGoggles', 'SwimGoggles', 'Lens Spray', 'CleaningRepairKits', 'Tri-Fold Case', 'NosePads', 'Cases', 'Laser Pen', 'Lens Cloths', 'Lens Wipe', 'RepairKits'],
    productDisplayPage: {
    rimlessLensText: 'Shown with lens shape',
    rimlessCTAText: 'SELECT SHAPE',
    productCTAText: 'SELECT LENS',
    accessoryCTAText: 'ADD'
},
    reorder: {
    frameOnlyRimlessDisclaimerMsg: 'Please note, due to slight differences in manufacturing or the mounting design, your current lenses may not fit into the replacement rimless frame. We recommend purchasing the frame with lenses.',
    frameOnlyNonRimlessDisclaimerMsg: 'Please note, due to slight differences in manufacturing or frame size changes, your current lenses may not fit into the replacement frame.',
    frameOnlyDisclaimerCTA: 'I UNDERSTAND'
},
    siteMigration: {
    loginUrl: '/login',
    registrationUrl: '/login?tab=createaccount',
    cookieExpiry: 365
},
    paymentMethodAvailable: {
    amazonPaymentGroup: true,
    applePay: true,
    creditCard: true,
    giftCertificate: true,
    googlePay: true,
    payPalPaymentGroup: true,
    storeCredit: true
}
};
    return api;
})();
