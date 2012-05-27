// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


//place any jQuery/helper plugins in here, instead of separate, slower script files.

//jQuery HotKey
//https://github.com/tzuryby/jquery.hotkeys
(function(a){function b(b){var c=b.handler,d=(b.namespace||"").toLowerCase().split(" ");d=a.map(d,function(a){return a.split(".")});if(d.length===1&&(d[0]===""||d[0]==="autocomplete")){return}b.handler=function(b){if(this!==b.target&&(/textarea|select/i.test(b.target.nodeName)||b.target.type==="text"||$(b.target).prop("contenteditable")=="true")){return}var e=b.type!=="keypress"&&a.hotkeys.specialKeys[b.which],f=String.fromCharCode(b.which).toLowerCase(),g,h="",i={};if(b.altKey&&e!=="alt"){h+="alt_"}if(b.ctrlKey&&e!=="ctrl"){h+="ctrl_"}if(b.metaKey&&!b.ctrlKey&&e!=="meta"){h+="meta_"}if(b.shiftKey&&e!=="shift"){h+="shift_"}if(e){i[h+e]=true}else{i[h+f]=true;i[h+a.hotkeys.shiftNums[f]]=true;if(h==="shift_"){i[a.hotkeys.shiftNums[f]]=true}}for(var j=0,k=d.length;j<k;j++){if(i[d[j]]){return c.apply(this,arguments)}}}}a.hotkeys={version:"0.8+",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",188:",",190:".",191:"/",224:"meta"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"}};a.each(["keydown","keyup","keypress"],function(){a.event.special[this]={add:b}})})(jQuery)
//jQuery Flexible TextArea
//https://github.com/flaviusmatis/flexibleArea.js/blob/master/jquery.flexibleArea.js
$(document).ready(function() {
	(function($){var methods={init:function(){var styles=['paddingTop','paddingRight','paddingBottom','paddingLeft','fontSize','lineHeight','fontFamily','width','fontWeight','border-top-width','border-right-width','border-bottom-width','border-left-width'];return this.each(function(){if(this.type!=='textarea')return false;var $textarea=$(this).css({'resize':'none',overflow:'hidden'});var $clone=$('<div></div>').css({'position':'absolute','display':'none','word-wrap':'break-word','white-space':'pre-wrap','border-style':'solid'}).appendTo(document.body);for(var i=0;i<styles.length;i++){$clone.css(styles[i],$textarea.css(styles[i]))}var textareaHeight=parseInt($textarea.css('height'),10);var lineHeight=parseInt($textarea.css('line-height'),10)||parseInt($textarea.css('font-size'),10);var minheight=lineHeight*2>textareaHeight?lineHeight*2:textareaHeight;var maxheight=parseInt($textarea.css('max-height'),10)>-1?parseInt($textarea.css('max-height'),10):Number.MAX_VALUE;function updateHeight(){var textareaContent=$textarea.val().replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/&/g,'&amp;').replace(/\n/g,'<br/>');$clone.html(textareaContent+'&nbsp;');setHeightAndOverflow()}function setHeightAndOverflow(){var cloneHeight=$clone.height()+lineHeight;var overflow='hidden';var height=cloneHeight;if(cloneHeight>maxheight){height=maxheight;overflow='auto'}else if(cloneHeight<minheight){height=minheight}if($textarea.height()!==height){$textarea.css({'overflow':overflow,'height':height+'px'})}}$textarea.bind('keyup change cut paste',function(){updateHeight()});$(window).bind('resize',function(){var cleanWidth=parseInt($textarea.width(),10);if($clone.width()!==cleanWidth){$clone.css({'width':cleanWidth+'px'});updateHeight()}});$textarea.bind('blur',function(){setHeightAndOverflow()});$textarea.bind('updateHeight',function(){updateHeight()});$(function(){updateHeight()})})}};$.fn.flexible=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments)}else{$.error('Method '+method+' does not exist on jQuery.easyModal')}}})(jQuery);
});

//Embed Timeline
LazyLoad=function(a){function h(b,c){var d=a.createElement(b),e;for(e in c)c.hasOwnProperty(e)&&d.setAttribute(e,c[e]);return d}function i(a){var b=d[a],c,g;if(b){c=b.callback;g=b.urls;g.shift();e=0;if(!g.length){c&&c.call(b.context,b.obj);d[a]=null;f[a].length&&k(a)}}}function j(){var c=navigator.userAgent;b={async:a.createElement("script").async===!0};(b.webkit=/AppleWebKit\//.test(c))||(b.ie=/MSIE/.test(c))||(b.opera=/Opera/.test(c))||(b.gecko=/Gecko\//.test(c))||(b.unknown=!0)}function k(e,g,k,n,o){var p=function(){i(e)},q=e==="css",r=[],s,t,u,v,w,x;b||j();if(g){g=typeof g=="string"?[g]:g.concat();if(q||b.async||b.gecko||b.opera)f[e].push({urls:g,callback:k,obj:n,context:o});else for(s=0,t=g.length;s<t;++s)f[e].push({urls:[g[s]],callback:s===t-1?k:null,obj:n,context:o})}if(d[e]||!(v=d[e]=f[e].shift()))return;c||(c=a.head||a.getElementsByTagName("head")[0]);w=v.urls;for(s=0,t=w.length;s<t;++s){x=w[s];if(q)u=b.gecko?h("style"):h("link",{href:x,rel:"stylesheet"});else{u=h("script",{src:x});u.async=!1}u.className="lazyload";u.setAttribute("charset","utf-8");if(b.ie&&!q)u.onreadystatechange=function(){if(/loaded|complete/.test(u.readyState)){u.onreadystatechange=null;p()}};else if(q&&(b.gecko||b.webkit))if(b.webkit){v.urls[s]=u.href;m()}else{u.innerHTML='@import "'+x+'";';l(u)}else u.onload=u.onerror=p;r.push(u)}for(s=0,t=r.length;s<t;++s)c.appendChild(r[s])}function l(a){var b;try{b=!!a.sheet.cssRules}catch(c){e+=1;e<200?setTimeout(function(){l(a)},50):b&&i("css");return}i("css")}function m(){var a=d.css,b;if(a){b=g.length;while(--b>=0)if(g[b].href===a.urls[0]){i("css");break}e+=1;a&&(e<200?setTimeout(m,50):i("css"))}}var b,c,d={},e=0,f={css:[],js:[]},g=a.styleSheets;return{css:function(a,b,c,d){k("css",a,b,c,d)},js:function(a,b,c,d){k("js",a,b,c,d)}}}(this.document);LazyLoad=function(a){function h(b,c){var d=a.createElement(b),e;for(e in c)c.hasOwnProperty(e)&&d.setAttribute(e,c[e]);return d}function i(a){var b=d[a],c,g;if(b){c=b.callback;g=b.urls;g.shift();e=0;if(!g.length){c&&c.call(b.context,b.obj);d[a]=null;f[a].length&&k(a)}}}function j(){var c=navigator.userAgent;b={async:a.createElement("script").async===!0};(b.webkit=/AppleWebKit\//.test(c))||(b.ie=/MSIE/.test(c))||(b.opera=/Opera/.test(c))||(b.gecko=/Gecko\//.test(c))||(b.unknown=!0)}function k(e,g,k,n,o){var p=function(){i(e)},q=e==="css",r=[],s,t,u,v,w,x;b||j();if(g){g=typeof g=="string"?[g]:g.concat();if(q||b.async||b.gecko||b.opera)f[e].push({urls:g,callback:k,obj:n,context:o});else for(s=0,t=g.length;s<t;++s)f[e].push({urls:[g[s]],callback:s===t-1?k:null,obj:n,context:o})}if(d[e]||!(v=d[e]=f[e].shift()))return;c||(c=a.head||a.getElementsByTagName("head")[0]);w=v.urls;for(s=0,t=w.length;s<t;++s){x=w[s];if(q)u=b.gecko?h("style"):h("link",{href:x,rel:"stylesheet"});else{u=h("script",{src:x});u.async=!1}u.className="lazyload";u.setAttribute("charset","utf-8");if(b.ie&&!q)u.onreadystatechange=function(){if(/loaded|complete/.test(u.readyState)){u.onreadystatechange=null;p()}};else if(q&&(b.gecko||b.webkit))if(b.webkit){v.urls[s]=u.href;m()}else{u.innerHTML='@import "'+x+'";';l(u)}else u.onload=u.onerror=p;r.push(u)}for(s=0,t=r.length;s<t;++s)c.appendChild(r[s])}function l(a){var b;try{b=!!a.sheet.cssRules}catch(c){e+=1;e<200?setTimeout(function(){l(a)},50):b&&i("css");return}i("css")}function m(){var a=d.css,b;if(a){b=g.length;while(--b>=0)if(g[b].href===a.urls[0]){i("css");break}e+=1;a&&(e<200?setTimeout(m,50):i("css"))}}var b,c,d={},e=0,f={css:[],js:[]},g=a.styleSheets;return{css:function(a,b,c,d){k("css",a,b,c,d)},js:function(a,b,c,d){k("js",a,b,c,d)}}}(this.document);(function(){function k(){LazyLoad.js(i.js,l)}function l(){g.js=!0;i.lang!="en"?LazyLoad.js(h.locale+i.lang+".js?"+f,m):g.language=!0;q()}function m(){g.language=!0;q()}function n(){g.css=!0;q()}function o(){g.font.css=!0;q()}function p(){g.font.js=!0;q()}function q(){if(g.checks>40)return;g.checks++;if(g.js&&g.css&&g.font.css&&g.font.js&&g.language){if(!g.finished){g.finished=!0;s()}}else g.timeout=setTimeout("onloaded_check_again();",250)}function r(){b=document.createElement("div");c=document.getElementById("timeline-embed");c.appendChild(b);b.setAttribute("id","timeline");if(i.width.toString().match("%")){c.style.width=i.width;c.setAttribute("class","full-embed ");c.setAttribute("className","full-embed ")}else{c.setAttribute("class"," sized-embed");c.setAttribute("className"," sized-embed");i.width=i.width-2;c.style.width=i.width+"px"}if(i.height.toString().match("%"))c.style.height=i.height;else{i.height=i.height-16;c.style.height=i.height+"px"}b.style.position="relative"}function s(){VMM.debug=i.debug;a=new VMM.Timeline;a.init(i.source);e&&VMM.bindEvent(global,onTimelineHeadline,"TIMELINE_HEADLINE")}var a,b,c,d,e=!1,f="1.44",g={timeout:"",checks:0,finished:!1,js:!1,css:!1,jquery:!1,language:!1,font:{css:!1,js:!1}},h={base:"http://embed.verite.co/timeline/",css:"http://embed.verite.co/timeline/css/",js:"http://embed.verite.co/timeline/js/",locale:"http://embed.verite.co/timeline/js/locale/",font:{css:"http://embed.verite.co/timeline/css/themes/font/",js:"http://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",google:["Bevan::latin","Pontano+Sans::latin"]}},i={version:f,debug:!1,embed:!0,width:"100%",height:"650",source:"https://docs.google.com/spreadsheet/pub?key=0Agl_Dv6iEbDadFYzRjJPUGktY0NkWXFUWkVIZDNGRHc&output=html",lang:"en",font:"default",css:h.css+"timeline.css?"+f,js:h.js+"timeline-min.js?"+f};if(typeof url_config=="object"){i.height="100%";for(d in url_config)Object.prototype.hasOwnProperty.call(url_config,d)&&(i[d]=url_config[d]);i.source.match("docs.google.com")||i.source.match("json")||i.source.match("storify")||(i.source="https://docs.google.com/spreadsheet/pub?key="+i.source+"&output=html");e=!0}else if(typeof timeline_config=="object")for(d in timeline_config)Object.prototype.hasOwnProperty.call(timeline_config,d)&&(i[d]=timeline_config[d]);else if(typeof config=="object")for(d in config)Object.prototype.hasOwnProperty.call(config,d)&&(i[d]=config[d]);if(i.js.match("locale")){i.lang=i.js.split("locale/")[1].replace(".js","");i.js=h.js+"timeline-min.js?"+f}timeline_config=i;r();LazyLoad.css(i.css,n);if(i.font=="default"){g.font.js=!0;g.font.css=!0}else{i.font.match("/")?h.font.css=i.font:h.font.css=h.font.css+i.font+".css";LazyLoad.css(h.font.css,o);switch(i.font){case"Merriweather-NewsCycle":h.font.google=["News+Cycle:400,700:latin","Merriweather:400,700,900:latin"];break;case"PoiretOne-Molengo":h.font.google=["Poiret+One::latin","Molengo::latin"];break;case"Arvo-PTSans":h.font.google=["Arvo:400,700,400italic:latin","PT+Sans:400,700,400italic:latin"];break;case"PTSerif-PTSans":h.font.google=["PT+Sans:400,700,400italic:latin","PT+Serif:400,700,400italic:latin"];break;case"DroidSerif-DroidSans":h.font.google=["Droid+Sans:400,700:latin","Droid+Serif:400,700,400italic:latin"];break;case"Lekton-Molengo":h.font.google=["Lekton:400,700,400italic:latin","Molengo::latin"];break;case"NixieOne-Ledger":h.font.google=["Nixie+One::latin","Ledger::latin"];break;case"AbrilFatface-Average":h.font.google=["Average::latin","Abril+Fatface::latin"];break;case"PlayfairDisplay-Muli":h.font.google=["Playfair+Display:400,400italic:latin","Muli:300,400,300italic,400italic:latin"];break;case"Rancho-Gudea":h.font.google=["Rancho::latin","Gudea:400,700,400italic:latin"];break;case"Bevan-PotanoSans":h.font.google=["Bevan::latin","Pontano+Sans::latin"];break;case"BreeSerif-OpenSans":h.font.google=["Bree+Serif::latin","Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800:latin"];break;case"SansitaOne-Kameron":h.font.google=["Sansita+One::latin","Kameron:400,700:latin"];break;case"Pacifico-Arimo":h.font.google=["Pacifico::latin","Arimo:400,700,400italic,700italic:latin"];break;default:h.font.google=["News+Cycle:400,700:latin","Merriweather:400,700,900:latin"]}WebFontConfig={google:{families:h.font.google}};LazyLoad.js(h.font.js,p)}try{g.jquery=jQuery;g.jquery=!0}catch(j){g.jquery=!1}g.jquery?k():LazyLoad.js("http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js",k);this.onloaded_check_again=function(){q()}})();