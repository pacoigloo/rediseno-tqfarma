//!function(e,t){"use strict";function n(t){e.fn.cycle.debug&&i(t)}function i(){window.console&&console.log&&console.log("[cycle] "+Array.prototype.join.call(arguments," "))}function c(t,n,i){var c=e(t).data("cycle.opts"),r=!!t.cyclePause;r&&c.paused?c.paused(t,c,n,i):!r&&c.resumed&&c.resumed(t,c,n,i)}function r(n,r,s){function o(t,n,c){if(!t&&n===!0){var r=e(c).data("cycle.opts");if(!r)return i("options not found, can not resume"),!1;c.cycleTimeout&&(clearTimeout(c.cycleTimeout),c.cycleTimeout=0),f(r.elements,r,1,!r.backwards)}}if(n.cycleStop===t&&(n.cycleStop=0),(r===t||null===r)&&(r={}),r.constructor==String){switch(r){case"destroy":case"stop":var l=e(n).data("cycle.opts");return l?(n.cycleStop++,n.cycleTimeout&&clearTimeout(n.cycleTimeout),n.cycleTimeout=0,l.elements&&e(l.elements).stop(),e(n).removeData("cycle.opts"),"destroy"==r&&a(n,l),!1):!1;case"toggle":return n.cyclePause=1===n.cyclePause?0:1,o(n.cyclePause,s,n),c(n),!1;case"pause":return n.cyclePause=1,c(n),!1;case"resume":return n.cyclePause=0,o(!1,s,n),c(n),!1;case"prev":case"next":return(l=e(n).data("cycle.opts"))?(e.fn.cycle[r](l),!1):(i('options not found, "prev/next" ignored'),!1);default:r={fx:r}}return r}if(r.constructor==Number){var u=r;return(r=e(n).data("cycle.opts"))?0>u||u>=r.elements.length?(i("invalid slide index: "+u),!1):(r.nextSlide=u,n.cycleTimeout&&(clearTimeout(n.cycleTimeout),n.cycleTimeout=0),"string"==typeof s&&(r.oneTimeFx=s),f(r.elements,r,1,u>=r.currSlide),!1):(i("options not found, can not advance slide"),!1)}return r}function s(t,n){if(!e.support.opacity&&n.cleartype&&t.style.filter)try{t.style.removeAttribute("filter")}catch(i){}}function a(t,n){n.next&&e(n.next).unbind(n.prevNextEvent),n.prev&&e(n.prev).unbind(n.prevNextEvent),(n.pager||n.pagerAnchorBuilder)&&e.each(n.pagerAnchors||[],function(){this.unbind().remove()}),n.pagerAnchors=null,e(t).unbind("mouseenter.cycle mouseleave.cycle"),n.destroy&&n.destroy(n)}function o(n,r,a,o,h){var y,x=e.extend({},e.fn.cycle.defaults,o||{},e.metadata?n.metadata():e.meta?n.data():{}),v=e.isFunction(n.data)?n.data(x.metaAttr):null;v&&(x=e.extend(x,v)),x.autostop&&(x.countdown=x.autostopCount||a.length);var S=n[0];if(n.data("cycle.opts",x),x.$cont=n,x.stopCount=S.cycleStop,x.elements=a,x.before=x.before?[x.before]:[],x.after=x.after?[x.after]:[],!e.support.opacity&&x.cleartype&&x.after.push(function(){s(this,x)}),x.continuous&&x.after.push(function(){f(a,x,0,!x.backwards)}),l(x),e.support.opacity||!x.cleartype||x.cleartypeNoBg||m(r),"static"==n.css("position")&&n.css("position","relative"),x.width&&n.width(x.width),x.height&&"auto"!=x.height&&n.height(x.height),x.startingSlide!==t?(x.startingSlide=parseInt(x.startingSlide,10),x.startingSlide>=a.length||x.startSlide<0?x.startingSlide=0:y=!0):x.startingSlide=x.backwards?a.length-1:0,x.random){x.randomMap=[];for(var w=0;w<a.length;w++)x.randomMap.push(w);if(x.randomMap.sort(function(){return Math.random()-.5}),y)for(var b=0;b<a.length;b++)x.startingSlide==x.randomMap[b]&&(x.randomIndex=b);else x.randomIndex=1,x.startingSlide=x.randomMap[1]}else x.startingSlide>=a.length&&(x.startingSlide=0);x.currSlide=x.startingSlide||0;var A=x.startingSlide;r.css({position:"absolute",top:0,left:0}).hide().each(function(t){var n;n=x.backwards?A?A>=t?a.length+(t-A):A-t:a.length-t:A?t>=A?a.length-(t-A):A-t:a.length-t,e(this).css("z-index",n)}),e(a[A]).css("opacity",1).show(),s(a[A],x),x.fit&&(x.aspect?r.each(function(){var t=e(this),n=x.aspect===!0?t.width()/t.height():x.aspect;x.width&&t.width()!=x.width&&(t.width(x.width),t.height(x.width/n)),x.height&&t.height()<x.height&&(t.height(x.height),t.width(x.height*n))}):(x.width&&r.width(x.width),x.height&&"auto"!=x.height&&r.height(x.height))),!x.center||x.fit&&!x.aspect||r.each(function(){var t=e(this);t.css({"margin-left":x.width?(x.width-t.width())/2+"px":0,"margin-top":x.height?(x.height-t.height())/2+"px":0})}),!x.center||x.fit||x.slideResize||r.each(function(){var t=e(this);t.css({"margin-left":x.width?(x.width-t.width())/2+"px":0,"margin-top":x.height?(x.height-t.height())/2+"px":0})});var I=!1;if(x.pause&&n.bind("mouseenter.cycle",function(){I=!0,this.cyclePause++,c(S,!0)}).bind("mouseleave.cycle",function(){I&&this.cyclePause--,c(S,!0)}),u(x)===!1)return!1;var T=!1;if(o.requeueAttempts=o.requeueAttempts||0,r.each(function(){var t=e(this);if(this.cycleH=x.fit&&x.height?x.height:t.height()||this.offsetHeight||this.height||t.attr("height")||0,this.cycleW=x.fit&&x.width?x.width:t.width()||this.offsetWidth||this.width||t.attr("width")||0,t.is("img")){var n=e.browser.msie&&28==this.cycleW&&30==this.cycleH&&!this.complete,c=e.browser.mozilla&&34==this.cycleW&&19==this.cycleH&&!this.complete,r=e.browser.opera&&(42==this.cycleW&&19==this.cycleH||37==this.cycleW&&17==this.cycleH)&&!this.complete,s=0===this.cycleH&&0===this.cycleW&&!this.complete;if(n||c||r||s){if(h.s&&x.requeueOnImageNotLoaded&&++o.requeueAttempts<100)return i(o.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH),setTimeout(function(){e(h.s,h.c).cycle(o)},x.requeueTimeout),T=!0,!1;i("could not determine size of image: "+this.src,this.cycleW,this.cycleH)}}return!0}),T)return!1;if(x.cssBefore=x.cssBefore||{},x.cssAfter=x.cssAfter||{},x.cssFirst=x.cssFirst||{},x.animIn=x.animIn||{},x.animOut=x.animOut||{},r.not(":eq("+A+")").css(x.cssBefore),e(r[A]).css(x.cssFirst),x.timeout){x.timeout=parseInt(x.timeout,10),x.speed.constructor==String&&(x.speed=e.fx.speeds[x.speed]||parseInt(x.speed,10)),x.sync||(x.speed=x.speed/2);for(var k="none"==x.fx?0:"shuffle"==x.fx?500:250;x.timeout-x.speed<k;)x.timeout+=x.speed}if(x.easing&&(x.easeIn=x.easeOut=x.easing),x.speedIn||(x.speedIn=x.speed),x.speedOut||(x.speedOut=x.speed),x.slideCount=a.length,x.currSlide=x.lastSlide=A,x.random?(++x.randomIndex==a.length&&(x.randomIndex=0),x.nextSlide=x.randomMap[x.randomIndex]):x.nextSlide=x.backwards?0===x.startingSlide?a.length-1:x.startingSlide-1:x.startingSlide>=a.length-1?0:x.startingSlide+1,!x.multiFx){var P=e.fn.cycle.transitions[x.fx];if(e.isFunction(P))P(n,r,x);else if("custom"!=x.fx&&!x.multiFx)return i("unknown transition: "+x.fx,"; slideshow terminating"),!1}var F=r[A];return x.skipInitializationCallbacks||(x.before.length&&x.before[0].apply(F,[F,F,x,!0]),x.after.length&&x.after[0].apply(F,[F,F,x,!0])),x.next&&e(x.next).bind(x.prevNextEvent,function(){return p(x,1)}),x.prev&&e(x.prev).bind(x.prevNextEvent,function(){return p(x,0)}),(x.pager||x.pagerAnchorBuilder)&&g(a,x),d(x,a),x}function l(t){t.original={before:[],after:[]},t.original.cssBefore=e.extend({},t.cssBefore),t.original.cssAfter=e.extend({},t.cssAfter),t.original.animIn=e.extend({},t.animIn),t.original.animOut=e.extend({},t.animOut),e.each(t.before,function(){t.original.before.push(this)}),e.each(t.after,function(){t.original.after.push(this)})}function u(t){var c,r,s=e.fn.cycle.transitions;if(t.fx.indexOf(",")>0){for(t.multiFx=!0,t.fxs=t.fx.replace(/\s*/g,"").split(","),c=0;c<t.fxs.length;c++){var a=t.fxs[c];r=s[a],r&&s.hasOwnProperty(a)&&e.isFunction(r)||(i("discarding unknown transition: ",a),t.fxs.splice(c,1),c--)}if(!t.fxs.length)return i("No valid transitions named; slideshow terminating."),!1}else if("all"==t.fx){t.multiFx=!0,t.fxs=[];for(var o in s)s.hasOwnProperty(o)&&(r=s[o],s.hasOwnProperty(o)&&e.isFunction(r)&&t.fxs.push(o))}if(t.multiFx&&t.randomizeEffects){var l=Math.floor(20*Math.random())+30;for(c=0;l>c;c++){var u=Math.floor(Math.random()*t.fxs.length);t.fxs.push(t.fxs.splice(u,1)[0])}n("randomized fx sequence: ",t.fxs)}return!0}function d(t,n){t.addSlide=function(i,c){var r=e(i),s=r[0];t.autostopCount||t.countdown++,n[c?"unshift":"push"](s),t.els&&t.els[c?"unshift":"push"](s),t.slideCount=n.length,t.random&&(t.randomMap.push(t.slideCount-1),t.randomMap.sort(function(){return Math.random()-.5})),r.css("position","absolute"),r[c?"prependTo":"appendTo"](t.$cont),c&&(t.currSlide++,t.nextSlide++),e.support.opacity||!t.cleartype||t.cleartypeNoBg||m(r),t.fit&&t.width&&r.width(t.width),t.fit&&t.height&&"auto"!=t.height&&r.height(t.height),s.cycleH=t.fit&&t.height?t.height:r.height(),s.cycleW=t.fit&&t.width?t.width:r.width(),r.css(t.cssBefore),(t.pager||t.pagerAnchorBuilder)&&e.fn.cycle.createPagerAnchor(n.length-1,s,e(t.pager),n,t),e.isFunction(t.onAddSlide)?t.onAddSlide(r):r.hide()}}function f(i,c,r,s){function a(){var e=0;c.timeout,c.timeout&&!c.continuous?(e=h(i[c.currSlide],i[c.nextSlide],c,s),"shuffle"==c.fx&&(e-=c.speedOut)):c.continuous&&o.cyclePause&&(e=10),e>0&&(o.cycleTimeout=setTimeout(function(){f(i,c,0,!c.backwards)},e))}var o=c.$cont[0],l=i[c.currSlide],u=i[c.nextSlide];if(r&&c.busy&&c.manualTrump&&(n("manualTrump in go(), stopping active transition"),e(i).stop(!0,!0),c.busy=0,clearTimeout(o.cycleTimeout)),c.busy)return void n("transition active, ignoring new tx request");if(o.cycleStop==c.stopCount&&(0!==o.cycleTimeout||r)){if(!r&&!o.cyclePause&&!c.bounce&&(c.autostop&&--c.countdown<=0||c.nowrap&&!c.random&&c.nextSlide<c.currSlide))return void(c.end&&c.end(c));var d=!1;if(!r&&o.cyclePause||c.nextSlide==c.currSlide)a();else{d=!0;var p=c.fx;l.cycleH=l.cycleH||e(l).height(),l.cycleW=l.cycleW||e(l).width(),u.cycleH=u.cycleH||e(u).height(),u.cycleW=u.cycleW||e(u).width(),c.multiFx&&(s&&(c.lastFx===t||++c.lastFx>=c.fxs.length)?c.lastFx=0:!s&&(c.lastFx===t||--c.lastFx<0)&&(c.lastFx=c.fxs.length-1),p=c.fxs[c.lastFx]),c.oneTimeFx&&(p=c.oneTimeFx,c.oneTimeFx=null),e.fn.cycle.resetState(c,p),c.before.length&&e.each(c.before,function(e,t){o.cycleStop==c.stopCount&&t.apply(u,[l,u,c,s])});var g=function(){c.busy=0,e.each(c.after,function(e,t){o.cycleStop==c.stopCount&&t.apply(u,[l,u,c,s])}),o.cycleStop||a()};n("tx firing("+p+"); currSlide: "+c.currSlide+"; nextSlide: "+c.nextSlide),c.busy=1,c.fxFn?c.fxFn(l,u,c,g,s,r&&c.fastOnEvent):e.isFunction(e.fn.cycle[c.fx])?e.fn.cycle[c.fx](l,u,c,g,s,r&&c.fastOnEvent):e.fn.cycle.custom(l,u,c,g,s,r&&c.fastOnEvent)}if(d||c.nextSlide==c.currSlide){var m;c.lastSlide=c.currSlide,c.random?(c.currSlide=c.nextSlide,++c.randomIndex==i.length&&(c.randomIndex=0,c.randomMap.sort(function(){return Math.random()-.5})),c.nextSlide=c.randomMap[c.randomIndex],c.nextSlide==c.currSlide&&(c.nextSlide=c.currSlide==c.slideCount-1?0:c.currSlide+1)):c.backwards?(m=c.nextSlide-1<0,m&&c.bounce?(c.backwards=!c.backwards,c.nextSlide=1,c.currSlide=0):(c.nextSlide=m?i.length-1:c.nextSlide-1,c.currSlide=m?0:c.nextSlide+1)):(m=c.nextSlide+1==i.length,m&&c.bounce?(c.backwards=!c.backwards,c.nextSlide=i.length-2,c.currSlide=i.length-1):(c.nextSlide=m?0:c.nextSlide+1,c.currSlide=m?i.length-1:c.nextSlide-1))}d&&c.pager&&c.updateActivePagerLink(c.pager,c.currSlide,c.activePagerClass)}}function h(e,t,i,c){if(i.timeoutFn){for(var r=i.timeoutFn.call(e,e,t,i,c);"none"!=i.fx&&r-i.speed<250;)r+=i.speed;if(n("calculated timeout: "+r+"; speed: "+i.speed),r!==!1)return r}return i.timeout}function p(t,n){var i=n?1:-1,c=t.elements,r=t.$cont[0],s=r.cycleTimeout;if(s&&(clearTimeout(s),r.cycleTimeout=0),t.random&&0>i)t.randomIndex--,-2==--t.randomIndex?t.randomIndex=c.length-2:-1==t.randomIndex&&(t.randomIndex=c.length-1),t.nextSlide=t.randomMap[t.randomIndex];else if(t.random)t.nextSlide=t.randomMap[t.randomIndex];else if(t.nextSlide=t.currSlide+i,t.nextSlide<0){if(t.nowrap)return!1;t.nextSlide=c.length-1}else if(t.nextSlide>=c.length){if(t.nowrap)return!1;t.nextSlide=0}var a=t.onPrevNextEvent||t.prevNextClick;return e.isFunction(a)&&a(i>0,t.nextSlide,c[t.nextSlide]),f(c,t,1,n),!1}function g(t,n){var i=e(n.pager);e.each(t,function(c,r){e.fn.cycle.createPagerAnchor(c,r,i,t,n)}),n.updateActivePagerLink(n.pager,n.startingSlide,n.activePagerClass)}function m(t){function i(e){return e=parseInt(e,10).toString(16),e.length<2?"0"+e:e}function c(t){for(;t&&"html"!=t.nodeName.toLowerCase();t=t.parentNode){var n=e.css(t,"background-color");if(n&&n.indexOf("rgb")>=0){var c=n.match(/\d+/g);return"#"+i(c[0])+i(c[1])+i(c[2])}if(n&&"transparent"!=n)return n}return"#ffffff"}n("applying clearType background-color hack"),t.each(function(){e(this).css("background-color",c(this))})}var y="2.9999.5";e.support===t&&(e.support={opacity:!e.browser.msie}),e.expr[":"].paused=function(e){return e.cyclePause},e.fn.cycle=function(t,c){var s={s:this.selector,c:this.context};return 0===this.length&&"stop"!=t?!e.isReady&&s.s?(i("DOM not ready, queuing slideshow"),e(function(){e(s.s,s.c).cycle(t,c)}),this):(i("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this):this.each(function(){var a=r(this,t,c);if(a!==!1){a.updateActivePagerLink=a.updateActivePagerLink||e.fn.cycle.updateActivePagerLink,this.cycleTimeout&&clearTimeout(this.cycleTimeout),this.cycleTimeout=this.cyclePause=0,this.cycleStop=0;var l=e(this),u=a.slideExpr?e(a.slideExpr,this):l.children(),d=u.get();if(d.length<2)return void i("terminating; too few slides: "+d.length);var p=o(l,u,d,a,s);if(p!==!1){var g=p.continuous?10:h(d[p.currSlide],d[p.nextSlide],p,!p.backwards);g&&(g+=p.delay||0,10>g&&(g=10),n("first timeout: "+g),this.cycleTimeout=setTimeout(function(){f(d,p,0,!a.backwards)},g))}}})},e.fn.cycle.resetState=function(t,n){n=n||t.fx,t.before=[],t.after=[],t.cssBefore=e.extend({},t.original.cssBefore),t.cssAfter=e.extend({},t.original.cssAfter),t.animIn=e.extend({},t.original.animIn),t.animOut=e.extend({},t.original.animOut),t.fxFn=null,e.each(t.original.before,function(){t.before.push(this)}),e.each(t.original.after,function(){t.after.push(this)});var i=e.fn.cycle.transitions[n];e.isFunction(i)&&i(t.$cont,e(t.elements),t)},e.fn.cycle.updateActivePagerLink=function(t,n,i){e(t).each(function(){e(this).children().removeClass(i).eq(n).addClass(i)})},e.fn.cycle.next=function(e){p(e,1)},e.fn.cycle.prev=function(e){p(e,0)},e.fn.cycle.createPagerAnchor=function(t,i,r,s,a){var o;if(e.isFunction(a.pagerAnchorBuilder)?(o=a.pagerAnchorBuilder(t,i),n("pagerAnchorBuilder("+t+", el) returned: "+o)):o='<a href="#">'+(t+1)+"</a>",o){var l=e(o);if(0===l.parents("body").length){var u=[];r.length>1?(r.each(function(){var t=l.clone(!0);e(this).append(t),u.push(t[0])}),l=e(u)):l.appendTo(r)}a.pagerAnchors=a.pagerAnchors||[],a.pagerAnchors.push(l);var d=function(n){n.preventDefault(),a.nextSlide=t;var i=a.$cont[0],c=i.cycleTimeout;c&&(clearTimeout(c),i.cycleTimeout=0);var r=a.onPagerEvent||a.pagerClick;e.isFunction(r)&&r(a.nextSlide,s[a.nextSlide]),f(s,a,1,a.currSlide<t)};/mouseenter|mouseover/i.test(a.pagerEvent)?l.hover(d,function(){}):l.bind(a.pagerEvent,d),/^click/.test(a.pagerEvent)||a.allowPagerClickBubble||l.bind("click.cycle",function(){return!1});var h=a.$cont[0],p=!1;a.pauseOnPagerHover&&l.hover(function(){p=!0,h.cyclePause++,c(h,!0,!0)},function(){p&&h.cyclePause--,c(h,!0,!0)})}},e.fn.cycle.hopsFromLast=function(e,t){var n,i=e.lastSlide,c=e.currSlide;return n=t?c>i?c-i:e.slideCount-i:i>c?i-c:i+e.slideCount-c},e.fn.cycle.commonReset=function(t,n,i,c,r,s){e(i.elements).not(t).hide(),"undefined"==typeof i.cssBefore.opacity&&(i.cssBefore.opacity=1),i.cssBefore.display="block",i.slideResize&&c!==!1&&n.cycleW>0&&(i.cssBefore.width=n.cycleW),i.slideResize&&r!==!1&&n.cycleH>0&&(i.cssBefore.height=n.cycleH),i.cssAfter=i.cssAfter||{},i.cssAfter.display="none",e(t).css("zIndex",i.slideCount+(s===!0?1:0)),e(n).css("zIndex",i.slideCount+(s===!0?0:1))},e.fn.cycle.custom=function(t,n,i,c,r,s){var a=e(t),o=e(n),l=i.speedIn,u=i.speedOut,d=i.easeIn,f=i.easeOut;o.css(i.cssBefore),s&&(l=u="number"==typeof s?s:1,d=f=null);var h=function(){o.animate(i.animIn,l,d,function(){c()})};a.animate(i.animOut,u,f,function(){a.css(i.cssAfter),i.sync||h()}),i.sync&&h()},e.fn.cycle.transitions={fade:function(t,n,i){n.not(":eq("+i.currSlide+")").css("opacity",0),i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i),i.cssBefore.opacity=0}),i.animIn={opacity:1},i.animOut={opacity:0},i.cssBefore={top:0,left:0}}},e.fn.cycle.ver=function(){return y},e.fn.cycle.defaults={activePagerClass:"activeSlide",after:null,allowPagerClickBubble:!1,animIn:null,animOut:null,aspect:!1,autostop:0,autostopCount:0,backwards:!1,before:null,center:null,cleartype:!e.support.opacity,cleartypeNoBg:!1,containerResize:1,continuous:0,cssAfter:null,cssBefore:null,delay:0,easeIn:null,easeOut:null,easing:null,end:null,fastOnEvent:0,fit:0,fx:"fade",fxFn:null,height:"auto",manualTrump:!0,metaAttr:"cycle",next:null,nowrap:0,onPagerEvent:null,onPrevNextEvent:null,pager:null,pagerAnchorBuilder:null,pagerEvent:"click.cycle",pause:0,pauseOnPagerHover:0,prev:null,prevNextEvent:"click.cycle",random:0,randomizeEffects:1,requeueOnImageNotLoaded:!0,requeueTimeout:250,rev:0,shuffle:null,skipInitializationCallbacks:!1,slideExpr:null,slideResize:1,speed:1e3,speedIn:null,speedOut:null,startingSlide:t,sync:1,timeout:4e3,timeoutFn:null,updateActivePagerLink:null,width:null}}(jQuery),function(e){"use strict";e.fn.cycle.transitions.curtainY=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!1,!0),i.cssBefore.top=n.cycleH/2,i.animIn.top=0,i.animIn.height=n.cycleH,i.animOut.top=t.cycleH/2,i.animOut.height=0}),i.cssBefore.height=0,i.cssBefore.left=0}}(jQuery);
! function(e, t) {
	"use strict";

	function n(t) {
		e.fn.cycle.debug && i(t)
	}

	function i() {
		window.console && console.log && console.log("[cycle] " + Array.prototype.join.call(arguments, " "))
	}

	function c(t, n, i) {
		var c = e(t).data("cycle.opts"),
			r = !!t.cyclePause;
		r && c.paused ? c.paused(t, c, n, i) : !r && c.resumed && c.resumed(t, c, n, i)
	}

	function r(n, r, s) {
		function o(t, n, c) {
			if (!t && n === !0) {
				var r = e(c).data("cycle.opts");
				if (!r) return i("options not found, can not resume"), !1;
				c.cycleTimeout && (clearTimeout(c.cycleTimeout), c.cycleTimeout = 0), f(r.elements, r, 1, !r.backwards)
			}
		}
		if (n.cycleStop === t && (n.cycleStop = 0), (r === t || null === r) && (r = {}), r.constructor == String) {
			switch (r) {
				case "destroy":
				case "stop":
					var l = e(n).data("cycle.opts");
					return l ? (n.cycleStop++, n.cycleTimeout && clearTimeout(n.cycleTimeout), n.cycleTimeout = 0, l.elements && e(l.elements).stop(), e(n).removeData("cycle.opts"), "destroy" == r && a(n, l), !1) : !1;
				case "toggle":
					return n.cyclePause = 1 === n.cyclePause ? 0 : 1, o(n.cyclePause, s, n), c(n), !1;
				case "pause":
					return n.cyclePause = 1, c(n), !1;
				case "resume":
					return n.cyclePause = 0, o(!1, s, n), c(n), !1;
				case "prev":
				case "next":
					return (l = e(n).data("cycle.opts")) ? (e.fn.cycle[r](l), !1) : (i('options not found, "prev/next" ignored'), !1);
				default:
					r = {
						fx: r
					}
			}
			return r
		}
		if (r.constructor == Number) {
			var u = r;
			return (r = e(n).data("cycle.opts")) ? 0 > u || u >= r.elements.length ? (i("invalid slide index: " + u), !1) : (r.nextSlide = u, n.cycleTimeout && (clearTimeout(n.cycleTimeout), n.cycleTimeout = 0), "string" == typeof s && (r.oneTimeFx = s), f(r.elements, r, 1, u >= r.currSlide), !1) : (i("options not found, can not advance slide"), !1)
		}
		return r
	}

	function s(t, n) {
		if (!e.support.opacity && n.cleartype && t.style.filter) try {
			t.style.removeAttribute("filter")
		} catch (i) {}
	}

	function a(t, n) {
		n.next && e(n.next).unbind(n.prevNextEvent), n.prev && e(n.prev).unbind(n.prevNextEvent), (n.pager || n.pagerAnchorBuilder) && e.each(n.pagerAnchors || [], function() {
			this.unbind().remove()
		}), n.pagerAnchors = null, e(t).unbind("mouseenter.cycle mouseleave.cycle"), n.destroy && n.destroy(n)
	}

	function o(n, r, a, o, h) {
		var y, x = e.extend({}, e.fn.cycle.defaults, o || {}, e.metadata ? n.metadata() : e.meta ? n.data() : {}),
			v = e.isFunction(n.data) ? n.data(x.metaAttr) : null;
		v && (x = e.extend(x, v)), x.autostop && (x.countdown = x.autostopCount || a.length);
		var S = n[0];
		if (n.data("cycle.opts", x), x.$cont = n, x.stopCount = S.cycleStop, x.elements = a, x.before = x.before ? [x.before] : [], x.after = x.after ? [x.after] : [], !e.support.opacity && x.cleartype && x.after.push(function() {
				s(this, x)
			}), x.continuous && x.after.push(function() {
				f(a, x, 0, !x.backwards)
			}), l(x), e.support.opacity || !x.cleartype || x.cleartypeNoBg || m(r), "static" == n.css("position") && n.css("position", "relative"), x.width && n.width(x.width), x.height && "auto" != x.height && n.height(x.height), x.startingSlide !== t ? (x.startingSlide = parseInt(x.startingSlide, 10), x.startingSlide >= a.length || x.startSlide < 0 ? x.startingSlide = 0 : y = !0) : x.startingSlide = x.backwards ? a.length - 1 : 0, x.random) {
			x.randomMap = [];
			for (var w = 0; w < a.length; w++) x.randomMap.push(w);
			if (x.randomMap.sort(function() {
					return Math.random() - .5
				}), y)
				for (var b = 0; b < a.length; b++) x.startingSlide == x.randomMap[b] && (x.randomIndex = b);
			else x.randomIndex = 1, x.startingSlide = x.randomMap[1]
		} else x.startingSlide >= a.length && (x.startingSlide = 0);
		x.currSlide = x.startingSlide || 0;
		var A = x.startingSlide;
		r.css({
			position: "absolute",
			top: 0,
			left: 0
		}).hide().each(function(t) {
			var n;
			n = x.backwards ? A ? A >= t ? a.length + (t - A) : A - t : a.length - t : A ? t >= A ? a.length - (t - A) : A - t : a.length - t, e(this).css("z-index", n)
		}), e(a[A]).css("opacity", 1).show(), s(a[A], x), x.fit && (x.aspect ? r.each(function() {
			var t = e(this),
				n = x.aspect === !0 ? t.width() / t.height() : x.aspect;
			x.width && t.width() != x.width && (t.width(x.width), t.height(x.width / n)), x.height && t.height() < x.height && (t.height(x.height), t.width(x.height * n))
		}) : (x.width && r.width(x.width), x.height && "auto" != x.height && r.height(x.height))), !x.center || x.fit && !x.aspect || r.each(function() {
			var t = e(this);
			t.css({
				"margin-left": x.width ? (x.width - t.width()) / 2 + "px" : 0,
				"margin-top": x.height ? (x.height - t.height()) / 2 + "px" : 0
			})
		}), !x.center || x.fit || x.slideResize || r.each(function() {
			var t = e(this);
			t.css({
				"margin-left": x.width ? (x.width - t.width()) / 2 + "px" : 0,
				"margin-top": x.height ? (x.height - t.height()) / 2 + "px" : 0
			})
		});
		var I = !1;
		if (x.pause && n.bind("mouseenter.cycle", function() {
				I = !0, this.cyclePause++, c(S, !0)
			}).bind("mouseleave.cycle", function() {
				I && this.cyclePause--, c(S, !0)
			}), u(x) === !1) return !1;
		var T = !1;
		if (o.requeueAttempts = o.requeueAttempts || 0, r.each(function() {
				var t = e(this);
				if (this.cycleH = x.fit && x.height ? x.height : t.height() || this.offsetHeight || this.height || t.attr("height") || 0, this.cycleW = x.fit && x.width ? x.width : t.width() || this.offsetWidth || this.width || t.attr("width") || 0, t.is("img")) {
					var n = e.browser.msie && 28 == this.cycleW && 30 == this.cycleH && !this.complete,
						c = e.browser.mozilla && 34 == this.cycleW && 19 == this.cycleH && !this.complete,
						r = e.browser.opera && (42 == this.cycleW && 19 == this.cycleH || 37 == this.cycleW && 17 == this.cycleH) && !this.complete,
						s = 0 === this.cycleH && 0 === this.cycleW && !this.complete;
					if (n || c || r || s) {
						if (h.s && x.requeueOnImageNotLoaded && ++o.requeueAttempts < 100) return i(o.requeueAttempts, " - img slide not loaded, requeuing slideshow: ", this.src, this.cycleW, this.cycleH), setTimeout(function() {
							e(h.s, h.c).cycle(o)
						}, x.requeueTimeout), T = !0, !1;
						i("could not determine size of image: " + this.src,this.cycleW, this.cycleH)
					}
				}
				return !0
			}), T) return !1;
		if (x.cssBefore = x.cssBefore || {}, x.cssAfter = x.cssAfter || {}, x.cssFirst = x.cssFirst || {}, x.animIn = x.animIn || {}, x.animOut = x.animOut || {}, r.not(":eq(" + A + ")").css(x.cssBefore), e(r[A]).css(x.cssFirst), x.timeout) {
			x.timeout = parseInt(x.timeout, 10), x.speed.constructor == String && (x.speed = e.fx.speeds[x.speed] || parseInt(x.speed, 10)), x.sync || (x.speed = x.speed / 2);
			for (var k = "none" == x.fx ? 0 : "shuffle" == x.fx ? 500 : 250; x.timeout - x.speed < k;) x.timeout += x.speed
		}
		if (x.easing && (x.easeIn = x.easeOut = x.easing), x.speedIn || (x.speedIn = x.speed), x.speedOut || (x.speedOut = x.speed), x.slideCount = a.length, x.currSlide = x.lastSlide = A, x.random ? (++x.randomIndex == a.length && (x.randomIndex = 0), x.nextSlide = x.randomMap[x.randomIndex]) : x.nextSlide = x.backwards ? 0 === x.startingSlide ? a.length - 1 : x.startingSlide - 1 : x.startingSlide >= a.length - 1 ? 0 : x.startingSlide + 1, !x.multiFx) {
			var P = e.fn.cycle.transitions[x.fx];
			if (e.isFunction(P)) P(n, r, x);
			else if ("custom" != x.fx && !x.multiFx) return i("unknown transition: " + x.fx, "; slideshow terminating"), !1
		}
		var F = r[A];
		return x.skipInitializationCallbacks || (x.before.length && x.before[0].apply(F, [F, F, x, !0]), x.after.length && x.after[0].apply(F, [F, F, x, !0])), x.next && e(x.next).bind(x.prevNextEvent, function() {
			return p(x, 1)
		}), x.prev && e(x.prev).bind(x.prevNextEvent, function() {
			return p(x, 0)
		}), (x.pager || x.pagerAnchorBuilder) && g(a, x), d(x, a), x
	}

	function l(t) {
		t.original = {
			before: [],
			after: []
		}, t.original.cssBefore = e.extend({}, t.cssBefore), t.original.cssAfter = e.extend({}, t.cssAfter), t.original.animIn = e.extend({}, t.animIn), t.original.animOut = e.extend({}, t.animOut), e.each(t.before, function() {
			t.original.before.push(this)
		}), e.each(t.after, function() {
			t.original.after.push(this)
		})
	}

	function u(t) {
		var c, r, s = e.fn.cycle.transitions;
		if (t.fx.indexOf(",") > 0) {
			for (t.multiFx = !0, t.fxs = t.fx.replace(/\s*/g, "").split(","), c = 0; c < t.fxs.length; c++) {
				var a = t.fxs[c];
				r = s[a], r && s.hasOwnProperty(a) && e.isFunction(r) || (i("discarding unknown transition: ", a), t.fxs.splice(c, 1), c--)
			}
			if (!t.fxs.length) return i("No valid transitions named; slideshow terminating."), !1
		} else if ("all" == t.fx) {
			t.multiFx = !0, t.fxs = [];
			for (var o in s) s.hasOwnProperty(o) && (r = s[o], s.hasOwnProperty(o) && e.isFunction(r) && t.fxs.push(o))
		}
		if (t.multiFx && t.randomizeEffects) {
			var l = Math.floor(20 * Math.random()) + 30;
			for (c = 0; l > c; c++) {
				var u = Math.floor(Math.random() * t.fxs.length);
				t.fxs.push(t.fxs.splice(u, 1)[0])
			}
			n("randomized fx sequence: ", t.fxs)
		}
		return !0
	}

	function d(t, n) {
		t.addSlide = function(i, c) {
			var r = e(i),
				s = r[0];
			t.autostopCount || t.countdown++, n[c ? "unshift" : "push"](s), t.els && t.els[c ? "unshift" : "push"](s), t.slideCount = n.length, t.random && (t.randomMap.push(t.slideCount - 1), t.randomMap.sort(function() {
				return Math.random() - .5
			})), r.css("position", "absolute"), r[c ? "prependTo" : "appendTo"](t.$cont), c && (t.currSlide++, t.nextSlide++), e.support.opacity || !t.cleartype || t.cleartypeNoBg || m(r), t.fit && t.width && r.width(t.width), t.fit && t.height && "auto" != t.height && r.height(t.height), s.cycleH = t.fit && t.height ? t.height : r.height(), s.cycleW = t.fit && t.width ? t.width : r.width(), r.css(t.cssBefore), (t.pager || t.pagerAnchorBuilder) && e.fn.cycle.createPagerAnchor(n.length - 1, s, e(t.pager), n, t), e.isFunction(t.onAddSlide) ? t.onAddSlide(r) : r.hide()
		}
	}

	function f(i, c, r, s) {
		function a() {
			var e = 0;
			c.timeout, c.timeout && !c.continuous ? (e = h(i[c.currSlide], i[c.nextSlide], c, s), "shuffle" == c.fx && (e -= c.speedOut)) : c.continuous && o.cyclePause && (e = 10), e > 0 && (o.cycleTimeout = setTimeout(function() {
				f(i, c, 0, !c.backwards)
			}, e))
		}
		var o = c.$cont[0],
			l = i[c.currSlide],
			u = i[c.nextSlide];
		if (r && c.busy && c.manualTrump && (n("manualTrump in go(), stopping active transition"), e(i).stop(!0, !0), c.busy = 0, clearTimeout(o.cycleTimeout)), c.busy) return void n("transition active, ignoring new tx request");
		if (o.cycleStop == c.stopCount && (0 !== o.cycleTimeout || r)) {
			if (!r && !o.cyclePause && !c.bounce && (c.autostop && --c.countdown <= 0 || c.nowrap && !c.random && c.nextSlide < c.currSlide)) return void(c.end && c.end(c));
			var d = !1;
			if (!r && o.cyclePause || c.nextSlide == c.currSlide) a();
			else {
				d = !0;
				var p = c.fx;
				l.cycleH = l.cycleH || e(l).height(), l.cycleW = l.cycleW || e(l).width(), u.cycleH = u.cycleH || e(u).height(), u.cycleW = u.cycleW || e(u).width(), c.multiFx && (s && (c.lastFx === t || ++c.lastFx >= c.fxs.length) ? c.lastFx = 0 : !s && (c.lastFx === t || --c.lastFx < 0) && (c.lastFx = c.fxs.length - 1), p = c.fxs[c.lastFx]), c.oneTimeFx && (p = c.oneTimeFx, c.oneTimeFx = null), e.fn.cycle.resetState(c, p), c.before.length && e.each(c.before, function(e, t) {
					o.cycleStop == c.stopCount && t.apply(u, [l, u, c, s])
				});
				var g = function() {
					c.busy = 0, e.each(c.after, function(e, t) {
						o.cycleStop == c.stopCount && t.apply(u, [l, u, c, s])
					}), o.cycleStop || a()
				};
				n("tx firing(" + p + "); currSlide: " + c.currSlide + "; nextSlide: " + c.nextSlide), c.busy = 1, c.fxFn ? c.fxFn(l, u, c, g, s, r && c.fastOnEvent) : e.isFunction(e.fn.cycle[c.fx]) ? e.fn.cycle[c.fx](l, u, c, g, s, r && c.fastOnEvent) : e.fn.cycle.custom(l, u, c, g, s, r && c.fastOnEvent)
			}
			if (d || c.nextSlide == c.currSlide) {
				var m;
				c.lastSlide = c.currSlide, c.random ? (c.currSlide = c.nextSlide, ++c.randomIndex == i.length && (c.randomIndex = 0, c.randomMap.sort(function() {
					return Math.random() - .5
				})), c.nextSlide = c.randomMap[c.randomIndex], c.nextSlide == c.currSlide && (c.nextSlide = c.currSlide == c.slideCount - 1 ? 0 : c.currSlide + 1)) : c.backwards ? (m = c.nextSlide - 1 < 0, m && c.bounce ? (c.backwards = !c.backwards, c.nextSlide = 1, c.currSlide = 0) : (c.nextSlide = m ? i.length - 1 : c.nextSlide - 1, c.currSlide = m ? 0 : c.nextSlide + 1)) : (m = c.nextSlide + 1 == i.length, m && c.bounce ? (c.backwards = !c.backwards, c.nextSlide = i.length - 2, c.currSlide = i.length - 1) : (c.nextSlide = m ? 0 : c.nextSlide + 1, c.currSlide = m ? i.length - 1 : c.nextSlide - 1))
			}
			d && c.pager && c.updateActivePagerLink(c.pager, c.currSlide, c.activePagerClass)
		}
	}

	function h(e, t, i, c) {
		if (i.timeoutFn) {
			for (var r = i.timeoutFn.call(e, e, t, i, c);
				"none" != i.fx && r - i.speed < 250;) r += i.speed;
			if (n("calculated timeout: " + r + "; speed: " + i.speed), r !== !1) return r
		}
		return i.timeout
	}

	function p(t, n) {
		var i = n ? 1 : -1,
			c = t.elements,
			r = t.$cont[0],
			s = r.cycleTimeout;
		if (s && (clearTimeout(s), r.cycleTimeout = 0), t.random && 0 > i) t.randomIndex--, -2 == --t.randomIndex ? t.randomIndex = c.length - 2 : -1 == t.randomIndex && (t.randomIndex = c.length - 1), t.nextSlide = t.randomMap[t.randomIndex];
		else if (t.random) t.nextSlide = t.randomMap[t.randomIndex];
		else if (t.nextSlide = t.currSlide + i, t.nextSlide < 0) {
			if (t.nowrap) return !1;
			t.nextSlide = c.length - 1
		} else if (t.nextSlide >= c.length) {
			if (t.nowrap) return !1;
			t.nextSlide = 0
		}
		var a = t.onPrevNextEvent || t.prevNextClick;
		return e.isFunction(a) && a(i > 0, t.nextSlide, c[t.nextSlide]), f(c, t, 1, n), !1
	}

	function g(t, n) {
		var i = e(n.pager);
		e.each(t, function(c, r) {
			e.fn.cycle.createPagerAnchor(c, r, i, t, n)
		}), n.updateActivePagerLink(n.pager, n.startingSlide, n.activePagerClass)
	}

	function m(t) {
		function i(e) {
			return e = parseInt(e, 10).toString(16), e.length < 2 ? "0" + e : e
		}

		function c(t) {
			for (; t && "html" != t.nodeName.toLowerCase(); t = t.parentNode) {
				var n = e.css(t, "background-color");
				if (n && n.indexOf("rgb") >= 0) {
					var c = n.match(/\d+/g);
					return "#" + i(c[0]) + i(c[1]) + i(c[2])
				}
				if (n && "transparent" != n) return n
			}
			return "#ffffff"
		}
		n("applying clearType background-color hack"), t.each(function() {
			e(this).css("background-color", c(this))
		})
	}
	var y = "2.9999.5";
	e.support === t && (e.support = {
		opacity: !e.browser.msie
	}), e.expr[":"].paused = function(e) {
		return e.cyclePause
	}, e.fn.cycle = function(t, c) {
		var s = {
			s: this.selector,
			c: this.context
		};
		return 0 === this.length && "stop" != t ? !e.isReady && s.s ? (i("DOM not ready, queuing slideshow"), e(function() {
			e(s.s, s.c).cycle(t, c)
		}), this) : (i("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this) : this.each(function() {
			var a = r(this, t, c);
			if (a !== !1) {
				a.updateActivePagerLink = a.updateActivePagerLink || e.fn.cycle.updateActivePagerLink, this.cycleTimeout && clearTimeout(this.cycleTimeout), this.cycleTimeout = this.cyclePause = 0, this.cycleStop = 0;
				var l = e(this),
					u = a.slideExpr ? e(a.slideExpr, this) : l.children(),
					d = u.get();
				if (d.length < 2) return void i("terminating; too few slides: " + d.length);
				var p = o(l, u, d, a, s);
				if (p !== !1) {
					var g = p.continuous ? 10 : h(d[p.currSlide], d[p.nextSlide], p, !p.backwards);
					g && (g += p.delay || 0, 10 > g && (g = 10), n("first timeout: " + g), this.cycleTimeout = setTimeout(function() {
						f(d, p, 0, !a.backwards)
					}, g))
				}
			}
		})
	}, e.fn.cycle.resetState = function(t, n) {
		n = n || t.fx, t.before = [], t.after = [], t.cssBefore = e.extend({}, t.original.cssBefore), t.cssAfter = e.extend({}, t.original.cssAfter), t.animIn = e.extend({}, t.original.animIn), t.animOut = e.extend({}, t.original.animOut), t.fxFn = null, e.each(t.original.before, function() {
			t.before.push(this)
		}), e.each(t.original.after, function() {
			t.after.push(this)
		});
		var i = e.fn.cycle.transitions[n];
		e.isFunction(i) && i(t.$cont, e(t.elements), t)
	}, e.fn.cycle.updateActivePagerLink = function(t, n, i) {
		e(t).each(function() {
			e(this).children().removeClass(i).eq(n).addClass(i)
		})
	}, e.fn.cycle.next = function(e) {
		p(e, 1)
	}, e.fn.cycle.prev = function(e) {
		p(e, 0)
	}, e.fn.cycle.createPagerAnchor = function(t, i, r, s, a) {
		var o;
		if (e.isFunction(a.pagerAnchorBuilder) ? (o = a.pagerAnchorBuilder(t, i), n("pagerAnchorBuilder(" + t + ", el) returned: " + o)) : o = '<a href="#">' + (t + 1) + "</a>", o) {
			var l = e(o);
			if (0 === l.parents("body").length) {
				var u = [];
				r.length > 1 ? (r.each(function() {
					var t = l.clone(!0);
					e(this).append(t), u.push(t[0])
				}), l = e(u)) : l.appendTo(r)
			}
			a.pagerAnchors = a.pagerAnchors || [], a.pagerAnchors.push(l);
			var d = function(n) {
				n.preventDefault(), a.nextSlide = t;
				var i = a.$cont[0],
					c = i.cycleTimeout;
				c && (clearTimeout(c), i.cycleTimeout = 0);
				var r = a.onPagerEvent || a.pagerClick;
				e.isFunction(r) && r(a.nextSlide, s[a.nextSlide]), f(s, a, 1, a.currSlide < t)
			};
			/mouseenter|mouseover/i.test(a.pagerEvent) ? l.hover(d, function() {}) : l.bind(a.pagerEvent, d), /^click/.test(a.pagerEvent) || a.allowPagerClickBubble || l.bind("click.cycle", function() {
				return !1
			});
			var h = a.$cont[0],
				p = !1;
			a.pauseOnPagerHover && l.hover(function() {
				p = !0, h.cyclePause++, c(h, !0, !0)
			}, function() {
				p && h.cyclePause--, c(h, !0, !0)
			})
		}
	}, e.fn.cycle.hopsFromLast = function(e, t) {
		var n, i = e.lastSlide,
			c = e.currSlide;
		return n = t ? c > i ? c - i : e.slideCount - i : i > c ? i - c : i + e.slideCount - c
	}, e.fn.cycle.commonReset = function(t, n, i, c, r, s) {
		e(i.elements).not(t).hide(), "undefined" == typeof i.cssBefore.opacity && (i.cssBefore.opacity = 1), i.cssBefore.display = "block", i.slideResize && c !== !1 && n.cycleW > 0 && (i.cssBefore.width = n.cycleW), i.slideResize && r !== !1 && n.cycleH > 0 && (i.cssBefore.height = n.cycleH), i.cssAfter = i.cssAfter || {}, i.cssAfter.display = "none", e(t).css("zIndex", i.slideCount + (s === !0 ? 1 : 0)), e(n).css("zIndex", i.slideCount + (s === !0 ? 0 : 1))
	}, e.fn.cycle.custom = function(t, n, i, c, r, s) {
		var a = e(t),
			o = e(n),
			l = i.speedIn,
			u = i.speedOut,
			d = i.easeIn,
			f = i.easeOut;
		o.css(i.cssBefore), s && (l = u = "number" == typeof s ? s : 1, d = f = null);
		var h = function() {
			o.animate(i.animIn, l, d, function() {
				c()
			})
		};
		a.animate(i.animOut, u, f, function() {
			a.css(i.cssAfter), i.sync || h()
		}), i.sync && h()
	}, e.fn.cycle.transitions = {
		fade: function(t, n, i) {
			n.not(":eq(" + i.currSlide + ")").css("opacity", 0), i.before.push(function(t, n, i) {
				e.fn.cycle.commonReset(t, n, i), i.cssBefore.opacity = 0
			}), i.animIn = {
				opacity: 1
			}, i.animOut = {
				opacity: 0
			}, i.cssBefore = {
				top: 0,
				left: 0
			}
		}
	}, e.fn.cycle.ver = function() {
		return y
	}, e.fn.cycle.defaults = {
		activePagerClass: "activeSlide",
		after: null,
		allowPagerClickBubble: !1,
		animIn: null,
		animOut: null,
		aspect: !1,
		autostop: 0,
		autostopCount: 0,
		backwards: !1,
		before: null,
		center: null,
		cleartype: !e.support.opacity,
		cleartypeNoBg: !1,
		containerResize: 1,
		continuous: 0,
		cssAfter: null,
		cssBefore: null,
		delay: 0,
		easeIn: null,
		easeOut: null,
		easing: null,
		end: null,
		fastOnEvent: 0,
		fit: 0,
		fx: "fade",
		fxFn: null,
		height: "auto",
		manualTrump: !0,
		metaAttr: "cycle",
		next: null,
		nowrap: 0,
		onPagerEvent: null,
		onPrevNextEvent: null,
		pager: null,
		pagerAnchorBuilder: null,
		pagerEvent: "click.cycle",
		pause: 0,
		pauseOnPagerHover: 0,
		prev: null,
		prevNextEvent: "click.cycle",
		random: 0,
		randomizeEffects: 1,
		requeueOnImageNotLoaded: !0,
		requeueTimeout: 250,
		rev: 0,
		shuffle: null,
		skipInitializationCallbacks: !1,
		slideExpr: null,
		slideResize: 1,
		speed: 1e3,
		speedIn: null,
		speedOut: null,
		startingSlide: t,
		sync: 1,
		timeout: 4e3,
		timeoutFn: null,
		updateActivePagerLink: null,
		width: null
	}
}(jQuery),
function(e) {
"use strict";
e.fn.cycle.transitions.curtainX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true,true);
		opts.cssBefore.left = next.cycleW/2;
		opts.animIn.left = 0;
		opts.animIn.width = this.cycleW;
		opts.animOut.left = curr.cycleW/2;
		opts.animOut.width = 0;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
};
}(jQuery);