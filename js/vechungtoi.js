(zennir2=window.zennir2||{}).productTile=function(e,t,i,n,o,a){"use strict";var s={productTiles:t(".comp-product-tiles"),productTilesData:[],compProductTiles:".comp-product-tiles",tmplPrimaryProductWrapper:['<div class="comp-one-tile-product border-bottom">','<div class="row relative primary-product">',"</div>","</div>"],tmplPrimaryProduct:['<div data-skus="" data-sku-id="" data-sku-id-index="" data-component-index="" data-product-index="" data-product-type="" data-type="" data-view="" data-image-position="" class="image-container col-md-5 col-md-offset-1 middle-translate-md padding-top-50 padding-top-0-md">','<div class="row">','<div class="col-xs-10 center-translate padding-left-0 padding-right-0">','<a href="#" class="lnk-product-image" aria-label="front view of the glass">','<figure class="product-image" data-view="front"></figure>',"</a>","</div>","</div>",'<div class="product-colors padding-top-20"></div>',"</div>",'<div class="details-container col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-1 middle-translate-md padding-top-25 padding-top-0-md padding-bottom-40 padding-bottom-0-md padding-left-0 padding-right-0">','<a href="#" class="lnk-name">','<h2 class="color-gray-darker margin-top-0 scaling name"></h2>',"</a>",'<h3 class="font-light color-gray-darker margin-top-10 scaling color"></h3>','<div class="product-price font-light color-gray-darker margin-top-10 margin-top-20-sm margin-bottom-30">','<div class="price-list text-right"><span class="was">Was: </span><span class="price"><span class="curencySymbol"></span><span class="amount"></span></span></div>','<div class="price-on-sale color-warning"><span class="curencySymbol"></span><span class="amount"></span></div>',"</div>",'<div class="out-of-stock hidden margin-bottom-30-xs">','<span class="color-warning font-small font-medium-lg show margin-bottom-10"><strong class="show">This color is out of stock.</strong>',"Signup to be notified when this item is back in stock.</span>",'<div class="signup-form-wrapper relative margin-top-10 hidden">','<form action="/dev/mockajax/emailsignup.php" method="post" autocomplete="off" class="form-inline form-collection-product-tile">','<div class="form-group margin-bottom-0 signup-wrapper">','<input type="email" placeholder="Enter your email to receive updates" aria-label="Enter your email to receive updates" class="txt-email-id form-control font-italic" maxlength="60" required data-parsley-error-message="Please enter a valid email address" data-parsley-errors-messages-disabled="true">','</div><div class="form-group margin-bottom-0">','<input class="hdn-sku-id" type="hidden" value="" aria-label="product id">','<input class="btn btn-primary font-small width-100p-xs" type="submit" value="sign up" aria-label="sign up">',"</div>","</form>",'<div class="server-message absolute padding-left-20 padding-right-20 width-100p text-center top right bottom left hidden">','<span class="font-medium font-small-xs font-bold text-uppercase color-white">Server message to come here</span>',"</div>","</div>","</div>",'<div class="row">','<div class="col-md-6">','<a href="#" role="button" class="btn btn btn-secondary btn-block shop-now-btn" aria-label="shop now">SHOP NOW</a>','<button type="button" class="btn btn btn-secondary btn-block signup-btn">SIGN UP</button>',"</div>","</div>","</div>"],tmplSecondaryProductWrapper:['<div class="comp-two-tile-product padding-left-15-sm padding-right-15-sm">','<div class="row">',"</div>","</div>"],tmplSecondaryProduct:['<div class="col-md-6 border-bottom border-right-md">','<div class="row secondary-product">','<div data-skus="" data-sku-id="" data-sku-id-index="" data-component-index="" data-product-index="" data-product-type="" data-type="" data-view="" class="image-container col-xs-10 center-translate-xs col-sm-5 col-sm-offset-1 middle-translate-sm padding-top-40-xs padding-left-0 padding-right-0">','<a href="#" class="lnk-product-image" aria-label="front view of the glass">','<figure class="product-image" data-view="front"></figure>',"</a>",'<div class="product-colors padding-top-20"></div>',"</div>",'<div class="details-container col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-1 middle-translate-sm padding-top-40 padding-bottom-40 padding-top-0-sm padding-bottom-0-sm padding-top-40-md padding-bottom-40-md padding-left-0 padding-right-0">','<a href="#" class="lnk-name">','<h2 class="color-gray-darker margin-top-0 scaling name"></h2>',"</a>",'<h3 class="font-light color-gray-darker margin-top-10 scaling color"></h3>','<div class="product-price font-light color-gray-darker margin-top-10 margin-top-20-sm margin-bottom-40 margin-bottom-30-sm">','<div class="price-list text-right"><span class="was">Was: </span><span class="price"><span class="curencySymbol"></span><span class="amount"></span></span></div>','<div class="price-on-sale color-warning"><span class="curencySymbol"></span><span class="amount"></span></div>',"</div>",'<div class="out-of-stock hidden">','<span class="color-warning font-small font-medium-lg show margin-bottom-10"><strong class="show">This color is out of stock.</strong>',"Signup to be notified when this item is back in stock.</span>",'<div class="signup-form-wrapper relative margin-top-10 hidden">','<form action="/dev/mockajax/emailsignup.php" method="post" autocomplete="off" class="form-inline form-collection-product-tile">','<div class="form-group margin-bottom-0 signup-wrapper">','<input type="email" placeholder="Enter your email to receive updates" aria-label="Enter your email to receive updates" class="txt-email-id form-control font-italic" required data-parsley-error-message="Please enter a valid email address" data-parsley-errors-messages-disabled="true">','</div><div class="form-group margin-bottom-0 signup-wrapper">','<input class="hdn-sku-id" type="hidden" value="" aria-label="product id">','<input class="btn btn-primary font-small width-100p" type="submit" value="sign up" aria-label="sign up">',"</div>","</form>",'<div class="server-message absolute padding-left-20 padding-right-20 width-100p text-center top right bottom left hidden">','<span class="font-medium font-small-xs font-bold text-uppercase color-white">Server message to come here</span>',"</div>","</div>","</div>",'<div class="row">','<div class="col-lg-8">','<a href="#" role="button" class="btn btn btn-secondary btn-block shop-now-btn" aria-label="shop now">SHOP NOW</a>','<button type="button" class="btn btn btn-secondary btn-block signup-btn">SIGN UP</button>',"</div>","</div>","</div>","</div>","</div>"],tmplColorSwatch:['<a href="#" onclick="return false;" title="color swatch">','<div class="color-thumbnail animated-bar {class-active}" data-sku-id="{sku-id}">','<img class="img-responsive padding-top-10 padding-bottom-10" src="{image-path}" alt="{img-alt-value}">',"</div>","</a>"],formValidate:function(){t(s.compProductTiles).find("form").each((function(e){var i;t(this).attr({id:"frmOOSEmailSignUp_"+(e+1),name:"frmOOSEmailSignUp_"+(e+1)}),i=t(this).find('input[type="email"]').attr({id:"txtEmailId_"+(e+1),name:"txtEmailId_"+(e+1)}),t(this).find(".hdn-sku-id").attr({id:"hdnSkuId_"+(e+1),name:"hdnSkuId_"+(e+1)}),t(this).parsley().on("form:submit",(function(){return a.validateEmailSignUp(this.$element),!1})),i.parsley().on("field:error",(function(){var e=this.$element;setTimeout((function(){e.attr("placeholder",e.data("parsleyErrorMessage"))}),10)})),i.data("placeholder",i.attr("placeholder"))}))},getSKUData:function(e,t){var i,n,o,a={name:"",color:"",listPrice:"",salePrice:"",onSale:!1,imagePosition:""};return t=void 0===t?e.data("sku-id-index"):t,i=e.data("product-type"),n=e.data("product-index"),o=e.data("component-index"),s.productTilesData[o]?"primaryProduct"===i?((a=s.productTilesData[o][i].skus[t]).name=s.productTilesData[o][i].productName,a.type=s.productTilesData[o][i].type,a.view=s.productTilesData[o][i].view,a.imagePosition=s.productTilesData[o][i].imagePosition):"secondaryProducts"===i&&((a=s.productTilesData[o][i][n].skus[t]).name=s.productTilesData[o][i][n].productName,a.type=s.productTilesData[o][i][n].type,a.view=s.productTilesData[o][i][n].view):(a.skuId=e.data("sku-id").toString(),a.type=e.data("type"),a.view=e.data("view"),a.imagePosition=e.data("image-position")),a},setSecondaryTileHeight:function(e,n){var o=null,a=null,s=0,r=0,d=0;i.desktop.matches?e?t(".comp-two-tile-product").each((function(){n=t(this).find(".secondary-product"),d=n.length;for(var e=0;e<d;e+=2)a=n.eq(e).add(n.eq(e+1)),zennir2.utilities.getMaxHeight(a)})):n&&n.length&&(r=(s=(o=n.closest(".comp-two-tile-product")).find(".secondary-product").index(n))%2==0?s+1:s-1,a=n.add(o.find(".secondary-product").eq(r)),zennir2.utilities.getMaxHeight(a)):(n=t(".secondary-product")).css({height:""})},setColorSwatchStatus:function(e){var i=e.data("component-index"),n=e.data("product-type"),o=e.data("product-index"),a={};t.isEmptyObject(s.productTilesData)||e.find(".product-colors a").each((function(e,r){"primaryProduct"===n?a=s.productTilesData[i][n].skus[e]:"secondaryProducts"===n&&(a=s.productTilesData[i][n][o].skus[e]),a.inStock||t(r).find("img").addClass("disabled")}))},addColorSwatches:function(){var e,i,o,a,r,d,l,c,p,u,m,f;s.productTiles.find(".image-container").each((function(){e=t(this),i=e.data("skus").toString().split(" "),o=e.data("type"),a=e.data("view"),r=e.data("sku-id").toString(),d=e.find(".product-colors"),l=e.data("component-index"),p=e.data("product-type"),c=e.data("product-index"),f=[],d.empty();for(var h=0;h<i.length;h++)u={},"primaryProduct"===p?u=s.productTilesData[l][p].skus[h]:"secondaryProducts"===p&&(u=s.productTilesData[l][p][c].skus[h]),m=(m=(m=(m=(m=s.tmplColorSwatch.join("\n")).replace("{sku-id}",u.skuId)).replace("{img-alt-value}",u.imageAltValue)).replace("{class-active}",r===u.skuId?"active":"")).replace("{image-path}",u.thumbnailImage?u.thumbnailImage:n.getFrameImageSrc(u.skuId,o,a)),f.push(m);d.html('<div class="text-center text-nowrap-xs">'+f.join("\n")+"</div>")}))},setImagePosition:function(e,t){"primaryProduct"===t.data("product-type")&&"right"===e.imagePosition&&t.addClass("pull-right-md col-md-pull-1")},preloadImages:function(){t(s.compProductTiles).find(".image-container").each((function(){for(var e,i,a=t(this),r=a.data("skus").split(" "),d={},l=0;l<r.length;l++)d=s.getSKUData(a,l),i="?"+o.imgApi.quality.high+"&"+o.imgApi.size.md+'" alt="'+d.imageAltValue+'">',e=n.getImagePath(d.skuId,d.type,d.view)+i,t(e)}))},addSkuDetails:function(e,t){var i,n=t.next(".details-container"),a=o.language[o.language.country].currencySymbol;(n.find(".hdn-sku-id").val(e.skuId),n.find(".name").text(e.name),n.find(".color").text(e.color),n.find(".price-list").find(".curencySymbol").text(a).end().find(".amount").text(e.listPrice),t.find(".lnk-product-image").attr("href",e.shopLink),n.find(".lnk-name").attr("href",e.shopLink),n.find(".shop-now-btn").attr("href",e.shopLink),JSON.parse(e.onSale)?(n.find(".product-price").addClass("on-sale"),n.find(".price-on-sale").find(".curencySymbol").text(a).end().find(".amount").text(e.salePrice)):n.find(".product-price").removeClass("on-sale"),n.find(".signup-form-wrapper, .server-message").addClass("hidden"),JSON.parse(e.inStock)?(n.find(".shop-now-btn").removeClass("hidden"),n.find(".out-of-stock").addClass("hidden"),n.find(".signup-btn").addClass("hidden")):(n.find(".shop-now-btn").addClass("hidden"),n.find(".out-of-stock").removeClass("hidden"),n.find(".signup-btn").removeClass("hidden")),"storeSiteCA"===o.currentSiteId)&&(n.addClass("intl-price-label"),JSON.parse(e.onSale)?(i='<span class="absolute font-smaller-xs font-small margin-left-0 margin-left-5-md margin-top-0 intl-sale-price" style="letter-spacing: 0px;">'+o.currency.code+"</span>",n.find(".intl-price").remove(),n.find(".price-list .price").append(i)):(i='<span class="absolute font-small-xs font-medium margin-left-0 margin-left-5-md intl-price" style="letter-spacing: 0px;">'+o.currency.code+"</span>",n.find(".intl-sale-price").remove(),n.find(".price-list .price").append(i)))},addMainImage:function(e){var i,a;(e&&e.length?e:s.productTiles.find(".image-container")).each((function(){var e=t(this),r=s.getSKUData(e),d=r.imageAltValue?r.imageAltValue:"";r.skuImageUrl?i='<img class="img-responsive padding-top-10 padding-bottom-10" src="'+r.skuImageUrl+'" alt="'+d+'">':(a="?"+o.imgApi.quality.high+"&"+o.imgApi.size.md+'" alt="'+d+'">',i=n.getImagePath(r.skuId,r.type,r.view)+a),e.find(".product-image > img").length?e.find(".product-image > img").prop({src:r.skuImageUrl,alt:d}):e.find(".product-image").empty().append(i),t.isEmptyObject(s.productTilesData)||(s.addSkuDetails(r,e),s.setImagePosition(r,e))}))},swapImage:function(){s.productTiles.find(".product-colors a").on("click",(function(){var e=t(this),n=e.index(),o=e.parents(".image-container");e.hasClass("active")||(o.data({"sku-id":o.data("skus").split(" ")[n],"sku-id-index":n}),o.find(".product-colors a div.color-thumbnail").removeClass("active"),e.find("div.color-thumbnail").addClass("active"),s.addMainImage(o),i.desktop.matches&&t(this).closest(".secondary-product").length&&s.setSecondaryTileHeight(!1,t(this).closest(".secondary-product")))}))},swapSignUp:function(){s.productTiles.find(".signup-btn").on("click",(function(){var e=t(this),i=e.closest(".details-container").find(".signup-form-wrapper"),n=i.find("form"),o=n.find("input[type='email']");e.addClass("hidden"),i.removeClass("hidden"),n.parsley().reset(),n.get(0).reset(),o.attr("placeholder",o.data("placeholder")).val(""),zennir2.productTile.setSecondaryTileHeight(!0)}))},parseProductData:function(e,t,i,n,o){for(var a,s=[],r=i.skus.length,d=0;d<r;d++)i.skus[d].skuId===i.defaultSKU&&(a=d),s.push(i.skus[d].skuId);t.find(".image-container").data({skus:s.join(" "),"sku-id":i.defaultSKU,"sku-id-index":a,"component-index":n,"product-index":o,"product-type":e,type:i.type,view:i.view})},createProductTile:function(e,t){var i,n=s.productTiles.eq(e);"primaryProduct"===t?(i=s.tmplPrimaryProduct.join("\n"),n.find(".comp-one-tile-product > .row").append(i)):(i=s.tmplSecondaryProduct.join("\n"),n.find(".comp-two-tile-product > .row").append(i))},createProductTileWrapper:function(e,t){var i=s.productTiles.eq(e),n="primaryProduct"===t?s.tmplPrimaryProductWrapper.join("\n"):s.tmplSecondaryProductWrapper.join("\n");i.append(n)},parseAllProductsData:function(){var e,i;s.productTilesData=window.allProducts?window.allProducts:[],t.isEmptyObject(s.productTilesData)||s.productTiles.each((function(n){i=t(this),t.isEmptyObject(s.productTilesData[n])||(i.empty(),s.productTilesData[n].primaryProduct&&(s.createProductTileWrapper(n,"primaryProduct"),s.createProductTile(n,"primaryProduct"),e=i.find(".primary-product"),s.parseProductData("primaryProduct",e,s.productTilesData[n].primaryProduct,n)),s.productTilesData[n].secondaryProducts&&(s.createProductTileWrapper(n,"secondaryProducts"),t.each(s.productTilesData[n].secondaryProducts,(function(t){s.createProductTile(n,"secondaryProducts"),e=i.find(".secondary-product").eq(t),s.parseProductData("secondaryProducts",e,s.productTilesData[n].secondaryProducts[t],n,t)}))))}))}};return{init:function(){s.parseAllProductsData(),s.preloadImages(),s.addMainImage(),s.addColorSwatches(),s.swapImage(),s.swapSignUp(),s.formValidate(),window.setTimeout((function(){s.setSecondaryTileHeight(!0)}),250)},setSecondaryTileHeight:function(e){s.setSecondaryTileHeight(e)}}}(window,jQuery,zennir2.mq,zennir2.products,zennir2.global,zennir2.validateForm),$(document).ready((function(){"use strict";!$(".landing-page-eyewear-trends").length&&$(".comp-product-tiles").length&&(zennir2.productTile.init(),$(window).winresize((function(){zennir2.productTile.setSecondaryTileHeight(!0)}),150))})),(zennir2=window.zennir2||{}).lookbook=function(e){"use strict";var t={container:".lookbook",slider:".lookbook-slider",button:".lookbook-btn",nav:".lookbook-nav",arrows:'<div class="lookbook-prev"><i class="fa fa-angle-left"></i></div><div class="lookbook-next"><i class="fa fa-angle-right"></i></div>',settings:{centerMode:!1,slidesToShow:4,infinite:!0,speed:500,cssEase:"linear",arrows:e(".comp-lookbook").data("arrows"),prevArrow:".lookbook-prev",nextArrow:".lookbook-next",responsive:[{breakpoint:5e3,settings:{slidesToShow:4,prevArrow:".lookbook-prev",nextArrow:".lookbook-next"}},{breakpoint:1024,settings:{slidesToShow:3,prevArrow:".lookbook-prev",nextArrow:".lookbook-next"}},{breakpoint:768,settings:{slidesToShow:2,prevArrow:".lookbook-prev",nextArrow:".lookbook-next"}},{breakpoint:480,settings:{slidesToShow:1,prevArrow:".lookbook-prev",nextArrow:".lookbook-next"}}]},toggle:function(){e(".comp-lookbook").data("arrows")&&e(t.container).append(t.arrows),e(t.nav).is(":visible")?(e(t.button).keypress((function(t){13==t.which&&e(this).click()})),e(t.button).on("click",(function(){e(t.container).hasClass("hidden")?(e(".lookbook").removeClass("hidden"),e("html, body").animate({scrollTop:e(t.nav).offset().top},300),e(this).text("close lookbook"),e(t.slider).slick(t.settings)):(e(t.container).addClass("hidden"),e(this).text("show lookbook"),e(t.slider).slick("unslick"))}))):(e(".lookbook").removeClass("hidden"),e("html, body").animate({scrollTop:e(t.nav).offset().top},300),e(t.slider).slick(t.settings))}};return{init:function(){t.toggle()}}}(jQuery),$(document).ready((function(){"use strict";$(".lookbook").length&&zennir2.lookbook.init()})),(zennir2=window.zennir2||{}).collection=function(e,t){"use strict";var _this_removeDoubleBorders=function(){t("#main-section").children(":not(script)").each((function(e,i){var n=t(i),o=n.prev();n.is("[data-file]")&&(o=n.prev().children().eq(0),n=n.children().eq(0)),n.hasClass("comp-content-carousel")&&o.hasClass("comp-product-tiles")&&n.addClass("border-top-none")}))};return{init:function(){_this_removeDoubleBorders()}}}(window,jQuery),$(document).ready((function(){"use strict";$(".page-collection").length&&zennir2.collection.init()}));var zennir2=zennir2||{};$(document).ready((function(){"use strict";$("#main-section").hasClass("landing-office-progressives")&&($(".ui-illustration-copies .row").each((function(){zennir2.utilities.getMaxHeight($(this).find(".col-sm-4"))})),zennir2.mq.tablet.matches?(zennir2.utilities.getMaxHeight($(".ui-illustration-images > div")),$(".ui-illustration-images").removeClass("tab-content")):$(".ui-illustration-images").addClass("tab-content"),$(window).winresize((function(){$(".ui-illustration-copies .row").each((function(){zennir2.utilities.getMaxHeight($(this).find(".col-sm-4"))})),zennir2.mq.tablet.matches?(zennir2.utilities.getMaxHeight($(".ui-illustration-images > div")),$(".ui-illustration-images").removeClass("tab-content")):$(".ui-illustration-images").addClass("tab-content").find(".tab-pane").css("height","140vw")}),500),$(".btn-more-details").on("click",(function(e){e.preventDefault(),$(this).prev().toggleClass("active")})),$(".close").on("click",(function(){$(this).closest(".ui-more-details").removeClass("active")})),$(".nav-tabs").find("a").on("click",(function(){$(".ui-more-details").removeClass("active")})))})),$(document).ready((function(){"use strict";var e=zennir2.mq,t=document.querySelector(".landing-pages-ditto");if(t){var i=t.querySelector(".js-video");({video:i,videoSrc:{mp4:i.dataset.sourceMp4,webm:i.dataset.sourceWebm},heroImg:t.querySelector(".landing-ditto-hero__video img"),startNowBtns:t.querySelectorAll(".js-start-now"),init:function(){var t;this.bindEvents(),e.tablet.matches&&(this.video.src=this.videoSrc.webm,t=this.video.play()),t?t.then((function(){}),function(){this.video.src=this.videoSrc.mp4}.bind(this)):this.video.src=this.videoSrc.mp4},bindEvents:function(){for(var e=0;e<this.startNowBtns.length;++e){this.startNowBtns[e].addEventListener("click",this.startNow)}},startNow:function(){var e="/b/all-glasses/_/N-1101494945";window.dittoLandingPageUrl&&(e=window.dittoLandingPageUrl),sessionStorage.setItem("openDittoCreationModal","true"),window.location.href=e}}).init()}}));zennir2=zennir2||{};$(document).ready((function(){"use strict";$(".hero__print-steps--animate-anchor").on("click",(function(){var e=$(".printable-steps-wrap").offset().top-75;$("html, body").animate({scrollTop:e},800)})),$(".printable-steps-wrap__preview-ruler--animate-anchor").on("click",(function(){var e=$(".pd-ruler-preview").offset().top-110;$("html, body").animate({scrollTop:e},800)})),$("body").on("click","#comp-pd-ruler #btn-printDoc",(function(e){e.preventDefault(),window.open($(this).data("pdf-path"),"_blank")}))})),(zennir2=window.zennir2||{}).production=function(e){"use strict";var _this_scroll=function(){e('a[href*="#"]:not([href="#"])').click((function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var t=e(this.hash);if((t=t.length?t:e("[name="+this.hash.slice(1)+"]")).length)return e("html, body").animate({scrollTop:t.offset().top},1e3),!1}}))},_this_slider=function(){e(".slider").each((function(t){var i="slider-"+(t+1);this.id=i,e(this).slick({slide:"#"+i+" .slide",appendArrows:"#"+i+" .slider-control",prevArrow:'<a class="prev" aria-label="Click on icon to go previous slide"></a>',nextArrow:'<a class="next" aria-label="Click on icon to go next slide"></a>',dots:!0,variableWidth:!0,customPaging:function(){return'<span class="dot"><span>'},responsive:{breakpoint:767,settings:{variableWidth:!1}}})}))};return{init:function(){_this_scroll(),_this_slider()}}}(jQuery),$(document).ready((function(){"use strict";$(".production-story").length&&zennir2.production.init()})),(zennir2=window.zennir2||{}).cliponFinder=function(e,t,i,n){"use strict";var o={$btnCliponFinder:null,$textFrameNumber:null,$divCliponResults:null,$divCliponSearch:null,$divCliponFindInfo:null,$divCliponNoResultsInfo:null,$divCliponNonSupportiveInfo:null,$imgFrame:null,$btnNo:null,$btnYes:null,$formCliponFinder:null,$formParsleyInstance:null,isCliponSearchOn:!1,$divCliponNoLensInfo:null,$textLensNumber:null,$divCliponRimlessResults:null,$divCliponRimlessLensesResults:null,$divCarouselTempleArm:null,$divCarouselMyOrders:null,$divCarouselFrameLens:null,$btnNoLens:null,$btnLensYes:null,$btnNext:null,$formLensFinder:null,$formLensParsleyInstance:null,$paraHowToFindFrameNumber:null,$paraHowToFindLensNumber:null,isLensSearchOn:!1,$divSkuUnavailable:null,$divSkuBackorder:null,initjQueryObjects:function(){o.$btnCliponFinder=t("#btnCliponFinder"),o.$textFrameNumber=t("#textFrameNumber"),o.$divCliponResults=t(".clipon-results"),o.$divCliponSearch=t(".clipon-search"),o.$divCliponFindInfo=t(".clipon-find-info"),o.$divCliponNoResultsInfo=t(".clipon-no-results-info"),o.$divCliponNonSupportiveInfo=t(".clipon-non-supportive-info"),o.$imgFrame=t(".img-frame"),o.$btnNo=t(".btnNo"),o.$btnYes=t("#btnYes"),o.$formCliponFinder=t("#frm-clipon-finder"),o.$skuId=t(".skuid"),o.$textLensNumber=t("#textLensNumber"),o.$divCliponRimlessResults=t(".clipon-results-rimless"),o.$divCliponRimlessLensesResults=t("#clipon-results-rimless-lenses"),o.$divCarouselTempleArm=t('[data-id="comp-kp-content-carousel-top"]').eq(0),o.$divCarouselMyOrders=t('[data-id="comp-kp-content-carousel-top"]').eq(1),o.$divCarouselFrameLens=t('[data-id="comp-kp-content-carousel-top"]').eq(2),o.$paraHowToFindFrameNumber=t(".how-to-find-frame-number"),o.$paraHowToFindLensNumber=t(".how-to-find-lens-number"),o.$divCliponNoLensInfo=t(".clipon-no-lens-info"),o.$btnNoLens=t(".btnNoLens"),o.$btnLensYes=t("#btnLensYes"),o.$btnNext=t("#btnNext"),o.$formLensFinder=t("#frm-lens-finder"),o.$shapeId=t(".shapeId"),o.$divSkuUnavailable=t("#sku-unavailable"),o.$divSkuBackorder=t("#sku-backorder")},resultsNotFound:function(e){o.$divCliponResults.addClass("hidden"),o.$divCliponSearch.removeClass("hidden"),o.$divCliponFindInfo.addClass("hidden"),"no-results"===e?(o.$divCliponNoResultsInfo.removeClass("hidden"),o.$divCliponNonSupportiveInfo.addClass("hidden")):"non-supportive"===e&&(o.$divCliponNoResultsInfo.addClass("hidden"),o.$divCliponNonSupportiveInfo.removeClass("hidden")),o.$formParsleyInstance.reset(),o.$btnCliponFinder.prop("disabled",!0),o.$formCliponFinder.get(0).reset(),o.$textFrameNumber.attr("placeholder",o.$textFrameNumber.data("no-results-message")).addClass("no-results")},resultsFound:function(e){var i;i=e.sku.imageUrl,o.$skuId.text(e.sku.id),o.$imgFrame.attr("src",i),e.sku.cliponSupportive?(e.sku.isRimless?(o.$divCliponRimlessResults.removeClass("hidden"),o.$paraHowToFindFrameNumber.addClass("hidden"),o.$paraHowToFindLensNumber.removeClass("hidden"),o.$divCarouselTempleArm.addClass("hidden"),o.$divCarouselMyOrders.addClass("hidden"),o.$formLensFinder.removeClass("hidden"),o.formLensValidate()):(o.$divCliponResults.removeClass("hidden"),o.$divCarouselFrameLens.addClass("hidden"),e.sku.OutOfStock?(o.$btnYes.addClass("hidden"),e.sku.Retired||!e.sku.enabled?t("#btnUnavailable").removeClass("hidden"):(t("#outOfStockSkuId").val(e.sku.id),t("#btnBackorder").removeClass("hidden"))):o.$btnYes.attr("href",zennir2.global.cliponOrderUrl+"?productId="+e.sku.parentProduct+"&skuId="+e.sku.id)),o.$divCliponSearch.addClass("hidden")):o.resultsNotFound("non-supportive"),o.$textLensNumber.hasClass("no-results")&&o.$textLensNumber.removeClass("no-results")},lensFound:function(e){var t,i=e.sku.shapeId.replace(/\D/g,"");t=e.sku.imageUrl,o.$skuId.text(e.sku.id),o.$shapeId.text(i),o.$imgFrame.attr("src",t),o.$divCliponRimlessResults.addClass("hidden"),o.$divCliponNoLensInfo.addClass("hidden"),o.$divCliponRimlessLensesResults.removeClass("hidden"),o.$formLensFinder.addClass("hidden"),o.$btnLensYes.attr("href",zennir2.global.cliponOrderUrl+"?productId="+e.sku.parentProduct+"&skuId="+e.sku.id+"&shapeId="+e.sku.shapeId)},lensNotFound:function(e){o.$divCliponRimlessResults.addClass("hidden"),o.$divCliponNoLensInfo.removeClass("hidden"),o.$formLensParsleyInstance.reset(),o.$btnNext.prop("disabled",!0),o.$formLensFinder.get(0).reset(),o.$textLensNumber.attr("placeholder",o.$textLensNumber.data("no-lens-message")).addClass("no-results")},clickToFindLens:function(){var e=zennir2.global.rest.getSkuDetailsByShapeId;o.isLensSearchOn||(o.isLensSearchOn=!0,t.ajax({url:e,cache:!1,method:"GET",dataType:"json",data:{skuId:o.$textFrameNumber.val(),shapeId:o.$textLensNumber.val()},beforeSend:function(){zennir2.utilities.handleAjaxLoaderDisplay("add")}}).done((function(e,i,n){t.isEmptyObject(e.sku)||!e.sku.isLensShapeValid?o.lensNotFound("no-lens"):o.lensFound(e),t("html, body").animate({scrollTop:0},800)})).fail((function(e,t,i){})).always((function(){zennir2.utilities.handleAjaxLoaderDisplay("remove"),o.isLensSearchOn=!1})))},clickSkuBackorder:function(){t("#btnBackorder").click((function(e){o.$divCliponResults.addClass("hidden"),o.$divSkuBackorder.removeClass("hidden")}))},clickSkuUnavailable:function(){t("#btnUnavailable").click((function(){o.$divCliponResults.addClass("hidden"),o.$divSkuUnavailable.removeClass("hidden")}))},clickToFindClipon:function(){var e=zennir2.global.rest.getSkuDetailsById;o.isCliponSearchOn||(o.isCliponSearchOn=!0,t.ajax({url:e,cache:!1,method:"GET",dataType:"json",data:{skuId:o.$textFrameNumber.val()},beforeSend:function(){zennir2.utilities.handleAjaxLoaderDisplay("add")}}).done((function(e,i,n){e.redirectUrl?t(location).attr("href",e.redirectUrl):t.isEmptyObject(e.sku)||e.sku.isFrameNotValid?o.resultsNotFound("no-results"):o.resultsFound(e),t("html, body").animate({scrollTop:0},800)})).fail((function(e,t,i){})).always((function(){zennir2.utilities.handleAjaxLoaderDisplay("remove"),o.isCliponSearchOn=!1})))},clickHowToFind:function(){t("#lnkHowToFind").on("click",(function(e){e.preventDefault(),t("html, body").animate({scrollTop:t(".comp-content-carousel").eq(0).offset().top-100},500,"swing")}))},clickHowToFindLensNumber:function(){t("#lnkHowToFindLensNumber").on("click",(function(e){e.preventDefault(),t("html, body").animate({scrollTop:t(".comp-content-carousel").eq(2).offset().top-100},500,"swing")}))},clickNotRightFrame:function(){o.$btnNo.on("click",(function(e){e.preventDefault(),o.$paraHowToFindFrameNumber.hasClass("hidden")&&(o.$paraHowToFindFrameNumber.removeClass("hidden"),o.$paraHowToFindLensNumber.addClass("hidden")),o.$divCarouselTempleArm.hasClass("hidden")&&(o.$divCarouselTempleArm.removeClass("hidden"),o.$divCarouselMyOrders.removeClass("hidden")),o.$divCarouselFrameLens.hasClass("hidden")&&o.$divCarouselFrameLens.removeClass("hidden"),o.$formLensFinder.hasClass("hidden")||o.$formLensFinder.addClass("hidden"),o.$divCliponNoLensInfo.hasClass("hidden")||o.$divCliponNoLensInfo.addClass("hidden"),o.$divCliponRimlessResults.addClass("hidden"),o.$divCliponResults.addClass("hidden"),o.$divCliponSearch.removeClass("hidden"),o.$divCliponFindInfo.removeClass("hidden"),o.$divCliponNoResultsInfo.addClass("hidden"),o.$divCliponNonSupportiveInfo.addClass("hidden"),o.$formParsleyInstance.reset(),o.$formLensParsleyInstance.reset(),o.$formLensFinder.get(0).reset(),o.$formCliponFinder.get(0).reset(),o.$btnCliponFinder.prop("disabled",!0)}))},clickNotRightLens:function(){o.$btnNoLens.on("click",(function(e){e.preventDefault(),o.$divCliponRimlessLensesResults.addClass("hidden"),o.$divCliponRimlessResults.removeClass("hidden"),o.$formLensFinder.removeClass("hidden"),o.$formLensParsleyInstance.reset(),o.$formLensFinder.get(0).reset(),o.$btnNext.prop("disabled",!0),o.$textLensNumber.hasClass("no-results")&&o.$textLensNumber.removeClass("no-results")}))},formValidate:function(){o.$formParsleyInstance=o.$formCliponFinder.parsley(),o.$formParsleyInstance.on("form:submit",(function(){return o.clickToFindClipon(),!1})),o.$textFrameNumber.parsley().on("field:error",(function(){o.$btnCliponFinder.prop("disabled",!0),o.$textFrameNumber.hasClass("no-results")&&o.$textFrameNumber.attr("placeholder",o.$textFrameNumber.data("placeholder")).removeClass("no-results")})).on("field:success",(function(){o.$btnCliponFinder.prop("disabled",!1)}))},formLensValidate:function(){o.$formLensParsleyInstance=o.$formLensFinder.parsley(),o.$formLensParsleyInstance.on("form:submit",(function(){return o.clickToFindLens(),!1})),o.$textLensNumber.parsley().on("field:error",(function(){o.$btnNext.prop("disabled",!0),o.$textLensNumber.hasClass("no-lens")&&o.$textLensNumber.attr("placeholder",o.$textLensNumber.data("placeholder")).removeClass("no-results")})).on("field:success",(function(){o.$btnNext.prop("disabled",!1)}))},emailFormValidate:function(){t("#txtPdpOosEmailId").parsley().on("field:error",(function(){t("#txtPdpOosEmailId").addClass("no-results"),t("#txtPdpOosEmailId").attr("placeholder",t("#txtPdpOosEmailId").data("parsley-error-message"))})),t("#txtPdpOosEmailId").parsley().on("field:success",(function(){t("#txtPdpOosEmailId").removeClass("no-results")})),t("#outOfStockReminderForm").parsley().on("form:submit",(function(){return zennir2.validateForm.validateEmailSignUp(this.$element),!1}))}};return{init:function(){o.initjQueryObjects(),o.clickHowToFind(),o.clickNotRightFrame(),o.clickNotRightLens(),o.formValidate(),o.clickHowToFindLensNumber(),o.clickSkuBackorder(),o.clickSkuUnavailable(),o.emailFormValidate()}}}(window,jQuery,zennir2.mq,zennir2.global),$(document).ready((function(){"use strict";$("#comp-clipon-finder").length&&zennir2.cliponFinder.init()}));