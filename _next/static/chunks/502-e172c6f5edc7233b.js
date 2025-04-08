(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[502],{8325:function(e,t,i){"use strict";i.d(t,{Z:function(){return m}});var a=i(2265),r=function(e,t,i,r){let n=a.useRef(i),s=a.useRef(r);a.useEffect(()=>{n.current=i,s.current=r}),a.useEffect(()=>{let i=e&&"current"in e?e.current:e;if(!i)return;let a=0;function r(...e){a||n.current.apply(this,e)}i.addEventListener(t,r);let o=s.current;return()=>{a=1,i.removeEventListener(t,r),o&&o()}},[e,t])},n=e=>{let t=a.useRef(e);return a.useEffect(()=>{t.current=e}),t};let s="undefined"!=typeof performance?performance:Date,o=()=>s.now();function l(e,t=30,i=!1){let r=n(e),s=1e3/t,l=a.useRef(0),d=a.useRef(),u=()=>d.current&&clearTimeout(d.current),c=[t,i,r];function h(){l.current=0,u()}return a.useEffect(()=>h,c),a.useCallback(function(){let e=arguments,t=o(),a=()=>{l.current=t,u(),r.current.apply(null,e)},n=l.current;if(i&&0===n)return a();if(t-n>s){if(n>0)return a();l.current=t}u(),d.current=setTimeout(()=>{a(),l.current=0},s)},c)}function d(e,t){if("undefined"==typeof window)return e;let{event:i,element:a}=t,{clientX:r,clientY:n,screenX:s,screenY:o,pageX:l=0,pageY:d=0}="touches"in i?i.touches[0]:i,u=a.getBoundingClientRect(),c=l-u.left-(window.pageXOffset||window.scrollX),h=d-u.top-(window.pageYOffset||window.scrollY);return"touches"in i&&(c<0||h<0||c>u.width||h>u.height)?{...e,context:{...e.context,hoverStatus:"leave",touchStatus:"end"}}:{context:{...e.context,hoverStatus:"enter"},mouse:{...e.mouse,x:c,y:h,pageX:l,pageY:d,clientX:r,clientY:n,screenX:s,screenY:o,elementWidth:u.width,elementHeight:u.height,isOver:!0,isTouch:"touches"in i}}}function u(e,t){let{mouse:i,context:a}=e;if("mousemove"===t.type)return"end"===a.touchStatus?e:d(e,t);if("touchmove"===t.type)return d({context:{...a,touchStatus:"start"},mouse:i},t);if("touchdown"===t.type)return d({context:{...a,touchStatus:"start"},mouse:{...i,isDown:!0}},t);if("mousedown"===t.type)return{context:a,mouse:{...i,isDown:!0}};if("mouseup"===t.type)return{context:a,mouse:{...i,isDown:!1}};if("mouseleave"===t.type)return{context:{...a,hoverStatus:"leave"},mouse:{...i,isOver:!1}};if("touchleave"===t.type)return{context:{...a,hoverStatus:"leave",touchStatus:"end"},mouse:{...i,isOver:!1,isDown:!1}};else if("activeStatus"===t.type)return{context:{...a,activeStatus:t.value},mouse:i};return e}let c={x:null,y:null,pageX:null,pageY:null,clientX:null,clientY:null,screenX:null,screenY:null,elementWidth:null,elementHeight:null,isOver:!1,isDown:!1,isTouch:!1},h={hoverStatus:"idle",touchStatus:"idle",activeStatus:"inactive"};var m=function(e,t={}){let{fps:i=30,enterDelay:n=0,leaveDelay:s=0}=t,[o,d]=a.useReducer(u,{mouse:c,context:h}),m=l(t=>{let i=e&&"current"in e?e.current:e;i&&d({type:"mousemove",event:t,element:i})},i,!0),v=l(t=>{let i=e&&"current"in e?e.current:e;i&&d({type:"touchmove",event:t,element:i})},i,!0),E=l(()=>d({type:"mouseleave"}),i,!1),b=l(t=>{let i=e&&"current"in e?e.current:e;i&&d("touches"in t?{type:"touchdown",element:i,event:t}:{type:"mousedown",element:i,event:t})},i,!0),f=l(()=>d({type:"mouseup"}),i,!1),g=l(()=>d({type:"touchleave"}),i,!1);function _(){return d({type:"activeStatus",value:"active"})}function y(){return d({type:"activeStatus",value:"inactive"})}return r(e,"mouseenter",m),r(e,"mousemove",m),r(e,"mouseleave",E),r(e,"mousedown",b),r("undefined"!=typeof window?window:null,"mousedown",b),r("undefined"!=typeof window?window:null,"mouseup",f),r(e,"touchstart",b),r(e,"touchmove",v),r(e,"touchend",g),r(e,"touchcancel",g),a.useEffect(()=>{if("enter"===o.context.hoverStatus){if(n){let e=setTimeout(_,n);return()=>clearTimeout(e)}d({type:"activeStatus",value:"active"})}else{if(s){let e=setTimeout(y,s);return()=>clearTimeout(e)}d({type:"activeStatus",value:"inactive"})}},[o.context.hoverStatus,n,s]),"active"===o.context.activeStatus?o.mouse:c}},4203:function(e,t){"use strict";t.E=function(e,t){return e.split(",").map(function(e){var t=(e=e.trim()).match(i),n=t[1],s=t[2],o=t[3]||"",l={};return l.inverse=!!n&&"not"===n.toLowerCase(),l.type=s?s.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],l.expressions=o.map(function(e){var t=e.match(a),i=t[1].toLowerCase().match(r);return{modifier:i[1],feature:i[2],value:t[2]}}),l}).some(function(e){var i=e.inverse,a="all"===e.type||t.type===e.type;if(a&&i||!(a||i))return!1;var r=e.expressions.every(function(e){var i=e.feature,a=e.modifier,r=e.value,n=t[i];if(!n)return!1;switch(i){case"orientation":case"scan":return n.toLowerCase()===r.toLowerCase();case"width":case"height":case"device-width":case"device-height":r=d(r),n=d(n);break;case"resolution":r=l(r),n=l(n);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":r=o(r),n=o(n);break;case"grid":case"color":case"color-index":case"monochrome":r=parseInt(r,10)||1,n=parseInt(n,10)||0}switch(a){case"min":return n>=r;case"max":return n<=r;default:return n===r}});return r&&!i||!r&&i})};var i=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,a=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,r=/^(?:(min|max)-)?(.+)/,n=/(em|rem|px|cm|mm|in|pt|pc)?$/,s=/(dpi|dpcm|dppx)?$/;function o(e){var t,i=Number(e);return i||(i=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),i}function l(e){var t=parseFloat(e);switch(String(e).match(s)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function d(e){var t=parseFloat(e);switch(String(e).match(n)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},8155:function(e,t,i){"use strict";var a=i(4203).E,r="undefined"!=typeof window?window.matchMedia:null;function n(e,t,i){var n,s=this;function o(e){s.matches=e.matches,s.media=e.media}r&&!i&&(n=r.call(window,e)),n?(this.matches=n.matches,this.media=n.media,n.addListener(o)):(this.matches=a(e,t),this.media=e),this.addListener=function(e){n&&n.addListener(e)},this.removeListener=function(e){n&&n.removeListener(e)},this.dispose=function(){n&&n.removeListener(o)}}e.exports=function(e,t,i){return new n(e,t,i)}},7818:function(e,t,i){"use strict";i.d(t,{default:function(){return r.a}});var a=i(551),r=i.n(a)},551:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}});let a=i(9920);i(7437),i(2265);let r=a._(i(148));function n(e,t){var i;let a={loading:e=>{let{error:t,isLoading:i,pastDelay:a}=e;return null}};"function"==typeof e&&(a.loader=e);let n={...a,...t};return(0,r.default)({...n,modules:null==(i=n.loadableGenerated)?void 0:i.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},912:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let a=i(5592);function r(e){let{reason:t,children:i}=e;if("undefined"==typeof window)throw new a.BailoutToCSRError(t);return i}},148:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let a=i(7437),r=i(2265),n=i(912),s=i(1481);function o(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(o(()=>null)),loading:null,ssr:!0},d=function(e){let t={...l,...e},i=(0,r.lazy)(()=>t.loader().then(o)),d=t.loading;function u(e){let o=d?(0,a.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,l=t.ssr?(0,a.jsxs)(a.Fragment,{children:["undefined"==typeof window?(0,a.jsx)(s.PreloadCss,{moduleIds:t.modules}):null,(0,a.jsx)(i,{...e})]}):(0,a.jsx)(n.BailoutToCSR,{reason:"next/dynamic",children:(0,a.jsx)(i,{...e})});return(0,a.jsx)(r.Suspense,{fallback:o,children:l})}return u.displayName="LoadableComponent",u}},1481:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return n}});let a=i(7437),r=i(8512);function n(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let i=(0,r.getExpectedRequestStore)("next/dynamic css"),n=[];if(i.reactLoadableManifest&&t){let e=i.reactLoadableManifest;for(let i of t){if(!e[i])continue;let t=e[i].files.filter(e=>e.endsWith(".css"));n.push(...t)}}return 0===n.length?null:(0,a.jsx)(a.Fragment,{children:n.map(e=>(0,a.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:i.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},9949:function(e,t,i){"use strict";var a=i(8877);function r(){}function n(){}n.resetWarningCache=r,e.exports=function(){function e(e,t,i,r,n,s){if(s!==a){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:r};return i.PropTypes=i,i}},1448:function(e,t,i){e.exports=i(9949)()},8877:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2916:function(e,t,i){"use strict";i.d(t,{ac:function(){return M}});var a=i(2265),r=i(8155),n=i.n(r),s=/[A-Z]/g,o=/^ms-/,l={};function d(e){return"-"+e.toLowerCase()}var u=function(e){if(l.hasOwnProperty(e))return l[e];var t=e.replace(s,d);return l[e]=o.test(t)?"-"+t:t},c=i(1448),h=i.n(c);let m=h().oneOfType([h().string,h().number]),v={all:h().bool,grid:h().bool,aural:h().bool,braille:h().bool,handheld:h().bool,print:h().bool,projection:h().bool,screen:h().bool,tty:h().bool,tv:h().bool,embossed:h().bool},{type:E,...b}={orientation:h().oneOf(["portrait","landscape"]),scan:h().oneOf(["progressive","interlace"]),aspectRatio:h().string,deviceAspectRatio:h().string,height:m,deviceHeight:m,width:m,deviceWidth:m,color:h().bool,colorIndex:h().bool,monochrome:h().bool,resolution:m,type:Object.keys(v)},f={minAspectRatio:h().string,maxAspectRatio:h().string,minDeviceAspectRatio:h().string,maxDeviceAspectRatio:h().string,minHeight:m,maxHeight:m,minDeviceHeight:m,maxDeviceHeight:m,minWidth:m,maxWidth:m,minDeviceWidth:m,maxDeviceWidth:m,minColor:h().number,maxColor:h().number,minColorIndex:h().number,maxColorIndex:h().number,minMonochrome:h().number,maxMonochrome:h().number,minResolution:m,maxResolution:m,...b};var g={...v,...f};let _=e=>`not ${e}`,y=(e,t)=>{let i=u(e);return("number"==typeof t&&(t=`${t}px`),!0===t)?i:!1===t?_(i):`(${i}: ${t})`},T=e=>e.join(" and "),A=e=>{let t=[];return Object.keys(g).forEach(i=>{let a=e[i];null!=a&&t.push(y(i,a))}),T(t)},k=(0,a.createContext)(void 0),w=e=>e.query||A(e),S=e=>{if(e)return Object.keys(e).reduce((t,i)=>(t[u(i)]=e[i],t),{})},I=()=>{let e=(0,a.useRef)(!1);return(0,a.useEffect)(()=>{e.current=!0},[]),e.current},R=e=>{let t=(0,a.useContext)(k),i=()=>S(e)||S(t),[r,n]=(0,a.useState)(i);return(0,a.useEffect)(()=>{let e=i();!function(e,t){if(e===t)return!0;if(!e||!t)return!1;let i=Object.keys(e),a=Object.keys(t),r=i.length;if(a.length!==r)return!1;for(let a=0;a<r;a++){let r=i[a];if(e[r]!==t[r]||!Object.prototype.hasOwnProperty.call(t,r))return!1}return!0}(r,e)&&n(e)},[e,t]),r},C=e=>{let t=()=>w(e),[i,r]=(0,a.useState)(t);return(0,a.useEffect)(()=>{let e=t();i!==e&&r(e)},[e]),i},D=(e,t)=>{let i=()=>n()(e,t||{},!!t),[r,s]=(0,a.useState)(i),o=I();return(0,a.useEffect)(()=>{if(o){let e=i();return s(e),()=>{e&&e.dispose()}}},[e,t]),r},L=e=>{let[t,i]=(0,a.useState)(e.matches);return(0,a.useEffect)(()=>{let t=e=>{i(e.matches)};return e.addListener(t),i(e.matches),()=>{e.removeListener(t)}},[e]),t},M=(e,t,i)=>{let r=R(t),n=C(e);if(!n)throw Error("Invalid or missing MediaQuery!");let s=D(n,r),o=L(s),l=I();return(0,a.useEffect)(()=>{l&&i&&i(o)},[o]),(0,a.useEffect)(()=>()=>{s&&s.dispose()},[]),o}},2542:function(e,t,i){"use strict";let a,r;let n={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},s={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},o={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_WIDTH:"mediaWidth",MEDIA_HEIGHT:"mediaHeight",MEDIA_PAUSED:"mediaPaused",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_ENDED:"mediaEnded",MEDIA_MUTED:"mediaMuted",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_IS_PIP:"mediaIsPip",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_LOADING:"mediaLoading",MEDIA_BUFFERED:"mediaBuffered",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_CHAPTERS_CUES:"mediaChaptersCues"},l=Object.entries(o),d=l.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),u=l.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(u).reduce((e,[t,i])=>{let a=d[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let c=Object.entries(d).reduce((e,[t,i])=>{let a=u[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),h={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},m={DISABLED:"disabled",SHOWING:"showing"},v={MOUSE:"mouse",TOUCH:"touch"},E={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},b={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},f={FULLSCREEN:"fullscreen"},g="Playback rate",_={AUDIO_PLAYER:()=>"audio player",VIDEO_PLAYER:()=>"video player",VOLUME:()=>"volume",SEEK:()=>"seek",CLOSED_CAPTIONS:()=>"closed captions",PLAYBACK_RATE:({playbackRate:e=1}={})=>`current playback rate ${e}`,PLAYBACK_TIME:()=>"playback time",MEDIA_LOADING:()=>"media loading",SETTINGS:()=>"settings",AUDIO_TRACKS:()=>"audio tracks",QUALITY:()=>"quality"},y={PLAY:()=>"play",PAUSE:()=>"pause",MUTE:()=>"mute",UNMUTE:()=>"unmute",ENTER_AIRPLAY:()=>"start airplay",EXIT_AIRPLAY:()=>"stop airplay",ENTER_CAST:()=>"start casting",EXIT_CAST:()=>"stop casting",ENTER_FULLSCREEN:()=>"enter fullscreen mode",EXIT_FULLSCREEN:()=>"exit fullscreen mode",ENTER_PIP:()=>"enter picture in picture mode",EXIT_PIP:()=>"exit picture in picture mode",SEEK_FORWARD_N_SECS:({seekOffset:e=30}={})=>`seek forward ${e} seconds`,SEEK_BACK_N_SECS:({seekOffset:e=30}={})=>`seek back ${e} seconds`,SEEK_LIVE:()=>"seek to live",PLAYING_LIVE:()=>"playing live"};function T(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function A(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function k(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function w(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function S(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function I(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}({..._,...y});let R=e=>new Promise(t=>setTimeout(t,e)),C=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],D=(e,t)=>{let i=1===e?C[t].singular:C[t].plural;return`${e} ${i}`},L=e=>{if(!S(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>e&&D(e,t)).filter(e=>e).join(", ");return`${r}${i?" remaining":""}`};function M(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||Math.floor(t/3600)>0?n+":":"")||Math.floor(t/60%60)>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});class x{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class N extends x{}class O extends N{constructor(){super(...arguments),this.role=null}}class P{observe(){}unobserve(){}disconnect(){}}let U={createElement:function(){return new W.HTMLElement},createElementNS:function(){return new W.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},W={ResizeObserver:P,document:U,Node:N,Element:O,HTMLElement:class extends O{constructor(){super(...arguments),this.innerHTML=""}get content(){return new W.DocumentFragment}},DocumentFragment:class extends x{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e})},B="undefined"==typeof window||void 0===window.customElements,H=Object.keys(W).every(e=>e in globalThis),V=B&&!H?W:globalThis,F=B&&!H?U:globalThis.document,q=new WeakMap,K=e=>{let t=q.get(e);return t||q.set(e,t=new Set),t},$=new V.ResizeObserver(e=>{for(let t of e)for(let e of K(t.target))e(t)});function Y(e,t){K(e).add(t),$.observe(e)}function j(e,t){let i=K(e);i.delete(t),i.size||$.unobserve(e)}function G(e){var t;return null!=(t=Q(e))?t:ee(e,"media-controller")}function Q(e){var t;let{MEDIA_CONTROLLER:i}=s,a=e.getAttribute(i);if(a)return null==(t=ei(e))?void 0:t.getElementById(a)}let Z=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},z=(e,t)=>{let i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},X=(e,t)=>z(e,t)[0],J=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||J(e,t.getRootNode().host)),ee=(e,t)=>e?e.closest(t)||ee(e.getRootNode().host,t):null;function et(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=et(i.shadowRoot))?t:i:null}function ei(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function ea(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function er(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function en(e,t){return function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t)||es(e,t)}function es(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];return(null==n?void 0:n.sheet)?(null==n||n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),null==(a=n.sheet.cssRules)?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function eo(e,t,i=Number.NaN){let a=e.getAttribute(t);return null!=a?+a:i}function el(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}eo(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function ed(e,t){return e.hasAttribute(t)}function eu(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}ed(e,t)!=i&&e.toggleAttribute(t,i)}function ec(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function eh(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;ec(e,t,void 0)!==a&&e.setAttribute(t,a)}var em=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ep=(e,t,i)=>(em(e,t,"read from private field"),i?i.call(e):t.get(e)),ev=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},eE=(e,t,i,a)=>(em(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let eb=F.createElement("template");eb.innerHTML=`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;class ef extends V.HTMLElement{constructor(e={}){if(super(),ev(this,nX,void 0),!this.shadowRoot){let t=this.attachShadow({mode:"open"}),i=eb.content.cloneNode(!0);this.nativeEl=i;let a=e.slotTemplate;a||((a=F.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(a.content.cloneNode(!0)),t.appendChild(i)}}static get observedAttributes(){return[s.MEDIA_CONTROLLER,d.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ep(this,nX))?void 0:a.unassociateElement)||r.call(a,this),eE(this,nX,null)),i&&this.isConnected&&(eE(this,nX,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=ep(this,nX))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i,a;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),eE(this,nX,function(e){var t;let i=e.getAttribute(s.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):ee(e,"media-controller")}(this)),this.getAttribute(s.MEDIA_CONTROLLER)&&(null==(t=null==(e=ep(this,nX))?void 0:e.associateElement)||t.call(e,this)),null==(i=ep(this,nX))||i.addEventListener("pointerdown",this),null==(a=ep(this,nX))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(s.MEDIA_CONTROLLER)&&(null==(t=null==(e=ep(this,nX))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=ep(this,nX))||i.removeEventListener("pointerdown",this),null==(a=ep(this,nX))||a.removeEventListener("click",this),eE(this,nX,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let{pointerType:d=this._pointerType}=e;if(this._pointerType=void 0,d===v.TOUCH){this.handleTap(e);return}if(d===v.MOUSE){this.handleMouseClick(e);return}}}}get mediaPaused(){return ed(this,d.MEDIA_PAUSED)}set mediaPaused(e){eu(this,d.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?n.MEDIA_PLAY_REQUEST:n.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new V.CustomEvent(t,{composed:!0,bubbles:!0}))}}nX=new WeakMap,V.customElements.get("media-gesture-receiver")||V.customElements.define("media-gesture-receiver",ef);var eg=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},e_=(e,t,i)=>(eg(e,t,"read from private field"),i?i.call(e):t.get(e)),ey=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},eT=(e,t,i,a)=>(eg(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),eA=(e,t,i)=>(eg(e,t,"access private method"),i);let ek={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive"},ew=F.createElement("template");ew.innerHTML=`
  <style>
    
    :host([${d.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${ek.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    
    :host([${ek.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    
    :host([${ek.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([${ek.AUDIO}])[${ek.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${ek.AUDIO}])[${ek.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([hidden])) {
      pointer-events: auto;
    }

    :host(:not([${ek.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${ek.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${ek.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([${ek.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not([${ek.NO_AUTOHIDE}]):not([hidden])) {
      opacity: 1;
      transition: opacity 0.25s;
    }

    
    :host([${ek.USER_INACTIVE}]:not([${d.MEDIA_PAUSED}]):not([${d.MEDIA_IS_AIRPLAYING}]):not([${d.MEDIA_IS_CASTING}]):not([${ek.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${ek.NO_AUTOHIDE}])) {
      opacity: 0;
      transition: opacity 1s;
    }

    :host([${ek.USER_INACTIVE}]:not([${d.MEDIA_PAUSED}]):not([${d.MEDIA_IS_CASTING}]):not([${ek.AUDIO}])) ::slotted([slot=media]) {
      cursor: none;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    
    :host(:not([${ek.AUDIO}])[${d.MEDIA_HAS_PLAYED}]) slot[name=poster] {
      display: none;
    }

    ::slotted([role="menu"]) {
      align-self: end;
    }

    ::slotted([role="dialog"]) {
      align-self: center;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
`;let eS=Object.values(d);class eI extends V.HTMLElement{constructor(){super(),ey(this,n3),ey(this,n9),ey(this,n8),ey(this,n6),ey(this,st),ey(this,nJ,0),ey(this,n0,null),ey(this,n1,null),ey(this,n2,void 0),this.breakpointsComputed=!1,this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ew.content.cloneNode(!0))),new MutationObserver(e=>{let t=this.media;for(let i of e)"childList"===i.type&&(i.removedNodes.forEach(e=>{if("media"==e.slot&&i.target==this){let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}}),t&&i.addedNodes.forEach(e=>{e===t&&this.handleMediaUpdated(t)}))}).observe(this,{childList:!0,subtree:!0});let e=!1;Y(this,t=>{e||(setTimeout(()=>{(function(e,t){var i;if(!e.isConnected)return;let a=Object.fromEntries((null!=(i=e.getAttribute(ek.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),r=Object.keys(a).filter(e=>t>=parseInt(a[e])),n=!1;if(Object.keys(a).forEach(t=>{if(r.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),n=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),n=!0)}),n){let t=new CustomEvent(u.BREAKPOINTS_CHANGE,{detail:r});e.dispatchEvent(t)}})(t.target,t.contentRect.width),e=!1,this.breakpointsComputed||(this.breakpointsComputed=!0,this.dispatchEvent(new CustomEvent(u.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))},0),e=!0)});let t=this.querySelector(":scope > slot[slot=media]");t&&t.addEventListener("slotchange",()=>{if(!t.assignedElements({flatten:!0}).length){e_(this,n0)&&this.mediaUnsetCallback(e_(this,n0));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[ek.AUTOHIDE,ek.GESTURES_DISABLED].concat(eS).filter(e=>![d.MEDIA_RENDITION_LIST,d.MEDIA_AUDIO_TRACK_LIST,d.MEDIA_CHAPTERS_CUES,d.MEDIA_WIDTH,d.MEDIA_HEIGHT].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==ek.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(eT(this,n0,e),e.localName.includes("-")&&await V.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;let t=null!=this.getAttribute(ek.AUDIO)?_.AUDIO_PLAYER():_.VIDEO_PLAYER();this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(ek.USER_INACTIVE,""),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=V.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;this.media&&this.mediaUnsetCallback(this.media),null==(e=V.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){eT(this,n0,null)}handleEvent(e){switch(e.type){case"pointerdown":eT(this,nJ,e.timeStamp);break;case"pointermove":eA(this,n3,n5).call(this,e);break;case"pointerup":eA(this,n9,n4).call(this,e);break;case"mouseleave":eA(this,n8,n7).call(this);break;case"mouseup":this.removeAttribute(ek.KEYBOARD_CONTROL);break;case"keyup":eA(this,st,si).call(this),this.setAttribute(ek.KEYBOARD_CONTROL,"")}}set autohide(e){let t=Number(e);eT(this,n2,isNaN(t)?0:t)}get autohide(){return(void 0===e_(this,n2)?2:e_(this,n2)).toString()}}nJ=new WeakMap,n0=new WeakMap,n1=new WeakMap,n2=new WeakMap,n3=new WeakSet,n5=function(e){!("mouse"!==e.pointerType&&e.timeStamp-e_(this,nJ)<250)&&(eA(this,n6,se).call(this),clearTimeout(e_(this,n1)),[this,this.media].includes(e.target)&&eA(this,st,si).call(this))},n9=new WeakSet,n4=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(ek.USER_INACTIVE);[this,this.media].includes(e.target)&&t?eA(this,n8,n7).call(this):eA(this,st,si).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&eA(this,st,si).call(this)},n8=new WeakSet,n7=function(){if(0>e_(this,n2)||this.hasAttribute(ek.USER_INACTIVE))return;this.setAttribute(ek.USER_INACTIVE,"");let e=new V.CustomEvent(u.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},n6=new WeakSet,se=function(){if(!this.hasAttribute(ek.USER_INACTIVE))return;this.removeAttribute(ek.USER_INACTIVE);let e=new V.CustomEvent(u.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},st=new WeakSet,si=function(){eA(this,n6,se).call(this),clearTimeout(e_(this,n1));let e=parseInt(this.autohide);e<0||eT(this,n1,setTimeout(()=>{eA(this,n8,n7).call(this)},1e3*e))},V.customElements.get("media-container")||V.customElements.define("media-container",eI);var eR=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},eC=(e,t,i)=>(eR(e,t,"read from private field"),i?i.call(e):t.get(e)),eD=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},eL=(e,t,i,a)=>(eR(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class eM{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){eD(this,so),eD(this,sa,void 0),eD(this,sr,void 0),eD(this,sn,void 0),eD(this,ss,new Set),eL(this,sa,e),eL(this,sr,t),eL(this,sn,new Set(i))}[Symbol.iterator](){return eC(this,so,sl).values()}get length(){return eC(this,so,sl).size}get value(){var e;return null!=(e=[...eC(this,so,sl)].join(" "))?e:""}set value(e){var t;e!==this.value&&(eL(this,ss,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...eC(this,so,sl)][e]}values(){return eC(this,so,sl).values()}forEach(e,t){eC(this,so,sl).forEach(e,t)}add(...e){var t,i;e.forEach(e=>eC(this,ss).add(e)),(""!==this.value||(null==(t=eC(this,sa))?void 0:t.hasAttribute(`${eC(this,sr)}`)))&&(null==(i=eC(this,sa))||i.setAttribute(`${eC(this,sr)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>eC(this,ss).delete(e)),null==(t=eC(this,sa))||t.setAttribute(`${eC(this,sr)}`,`${this.value}`)}contains(e){return eC(this,so,sl).has(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}sa=new WeakMap,sr=new WeakMap,sn=new WeakMap,ss=new WeakMap,so=new WeakSet,sl=function(){return eC(this,ss).size?eC(this,ss):eC(this,sn)};let ex=(e="")=>e.split(/\s+/),eN=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?h.CAPTIONS:h.SUBTITLES,language:i,label:r}},eO=(e="",t={})=>ex(e).map(e=>{let i=eN(e);return{...t,...i}}),eP=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?eN(e):e):"string"==typeof e?eO(e):[e]:[],eU=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,eW=(e=[])=>Array.prototype.map.call(e,eU).join(" "),eB=(e,t)=>i=>i[e]===t,eH=e=>{let t=Object.entries(e).map(([e,t])=>eB(e,t));return e=>t.every(t=>t(e))},eV=(e,t=[],i=[])=>{let a=eP(i).map(eH);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},eF=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:eH(t);return Array.from(e.textTracks).filter(i)},eq=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(d.MEDIA_SUBTITLES_SHOWING)},eK=e=>{var t;let{media:i,fullscreenElement:a}=e,r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){let e=null==(t=a[r])?void 0:t.call(a);if(e instanceof Promise)return e.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()},e$="exitFullscreen"in F?"exitFullscreen":"webkitExitFullscreen"in F?"webkitExitFullscreen":"webkitCancelFullScreen"in F?"webkitCancelFullScreen":void 0,eY=e=>{var t;let{documentElement:i}=e;if(e$){let e=null==(t=null==i?void 0:i[e$])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}},ej="fullscreenElement"in F?"fullscreenElement":"webkitFullscreenElement"in F?"webkitFullscreenElement":void 0,eG=e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[ej];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===f.FULLSCREEN?i:a},eQ=e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=eG(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(ej in e))return J(n,r);for(;null==e?void 0:e[ej];){if(e[ej]===r)return!0;e=null==(t=e[ej])?void 0:t.shadowRoot}}return!1},eZ="fullscreenEnabled"in F?"fullscreenEnabled":"webkitFullscreenEnabled"in F?"webkitFullscreenEnabled":void 0,ez=e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[eZ])||i&&"webkitSupportsFullscreen"in i},eX=()=>{var e;return a||(a=null==(e=null==F?void 0:F.createElement)?void 0:e.call(F,"video"))},eJ=async(e=eX())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([e0(e,i.signal),e1(e,t)]);return i.abort(),a},e0=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),e1=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await R(10)}return e.volume!==t},e2=/.*Version\/.*Safari\/.*/.test(V.navigator.userAgent),e3=(e=eX())=>(!V.matchMedia("(display-mode: standalone)").matches||!e2)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),e5=(e=eX())=>ez({documentElement:F,media:e}),e9=e5(),e4=e3(),e8=!!V.WebKitPlaybackTargetAvailabilityEvent,e7=!!V.chrome,e6=e=>eF(e.media,e=>[h.SUBTITLES,h.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),te=e=>eF(e.media,e=>e.mode===m.SHOWING&&[h.SUBTITLES,h.CAPTIONS].includes(e.kind)),tt=(e,t)=>{let i=e6(e),a=te(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)eV(m.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;eV(m.DISABLED,i,a),eV(m.SHOWING,i,[{language:n,label:s,kind:o}])}}},ti=(e,t)=>e===t||typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?ta(e,t):Object.entries(e).every(([e,i])=>e in t&&ti(i,t[e])))),ta=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>ti(e,t[i])))},tr=Object.values(b),tn=eJ().then(e=>r=e),ts=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof V.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=V.customElements.get(t);i&&e instanceof i||(await V.customElements.whenDefined(t),V.customElements.upgrade(e))}))},to={mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i}=t;i&&(i.muted=e)},mediaEvents:["volumechange"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i}=t;if(i){try{null==e?V.localStorage.removeItem("media-chrome-pref-volume"):V.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let i=V.localStorage.getItem("media-chrome-pref-volume");if(null==i)return;to.mediaVolume.set(+i,t),e(+i)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&S(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[b.LIVE,b.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(tr.includes(r))return r===b.UNKNOWN?a:r;let n=t.duration;return n===1/0?b.LIVE:Number.isFinite(n)?b.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return Number.NaN;let{targetLiveWindow:i}=t,a=to.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===b.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(to.mediaStreamType.get(e)!==b.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>e6(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>te(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![h.CAPTIONS,h.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||tt(t,!0))};return null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),s(),()=>{var e,t;null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=eF(i,{kind:h.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return null!=(t=a.localName)&&!!t.includes("-")&&J(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i){if(e){if(!F.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else F.pictureInPictureElement&&F.exitPictureInPicture()}},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>eQ(e),set(e,t){e?eK(t):eY(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return null!=i&&!!i.remote&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&V.WebKitPlaybackTargetAvailabilityEvent)){console.warn("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!e9||!e5(t))return E.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;if(!e4||!e3(t))return E.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===r||(null==t?void 0:t.volume)==void 0)return E.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==r&&tn.then(t=>e(t?void 0:E.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return e7&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?E.UNAVAILABLE:void 0:E.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>e8?(null==t?void 0:t.availability)==="not-available"?E.UNAVAILABLE:void 0:E.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:E.UNAVAILABLE:E.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?E.UNAVAILABLE:void 0:E.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},tl={[n.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o;let{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=eF(l,{kind:h.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)?void 0:null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[n.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[n.MEDIA_PLAY_REQUEST](e,t){var i;if(e.mediaStreamType.get(t)===b.LIVE){let a=!(e.mediaTargetLiveWindow.get(t)>0),r=null==(i=e.mediaSeekable.get(t))?void 0:i[1];a&&r&&e.mediaCurrentTime.set(r,t)}e.mediaPaused.set(!1,t)},[n.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[n.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[n.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[n.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[n.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[n.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i;let a=null==(i=e.mediaSeekable.get(t))?void 0:i[1];Number.isNaN(Number(a))||e.mediaCurrentTime.set(a,t)},[n.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=e6(t),s=eP(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&V.localStorage.setItem("media-chrome-pref-subtitles-lang",o),eV(m.SHOWING,n,s)},[n.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=e6(t);eV(m.DISABLED,a,null!=i?i:[])},[n.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){tt(t,i)},[n.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[n.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[n.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[n.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[n.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t)},[n.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[n.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[n.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[n.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var td=({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=to,requestMap:r=tl,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o;let l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||ti(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},v=async(e,t)=>{var i,r,n,u,v,E,b,f,g,_,y,T,A,k,w,S;let I=!!o;if(o={...d,...null!=o?o:{},...e},I)return;await ts(...Object.values(e));let R=l.length>0&&0===t&&s,C=d.media!==o.media,D=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),L=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),M=(null==(v=d.media)?void 0:v.audioTracks)!==(null==(E=o.media)?void 0:E.audioTracks),x=(null==(b=d.media)?void 0:b.remote)!==(null==(f=o.media)?void 0:f.remote),N=d.documentElement!==o.documentElement,O=!!d.media&&(C||R),P=!!(null==(g=d.media)?void 0:g.textTracks)&&(D||R),U=!!(null==(_=d.media)?void 0:_.videoRenditions)&&(L||R),W=!!(null==(y=d.media)?void 0:y.audioTracks)&&(M||R),B=!!(null==(T=d.media)?void 0:T.remote)&&(x||R),H=!!d.documentElement&&(N||R),V=O||P||U||W||B||H,F=0===l.length&&1===t&&s,q=!!o.media&&(C||F),K=!!(null==(A=o.media)?void 0:A.textTracks)&&(D||F),$=!!(null==(k=o.media)?void 0:k.videoRenditions)&&(L||F),Y=!!(null==(w=o.media)?void 0:w.audioTracks)&&(M||F),j=!!(null==(S=o.media)?void 0:S.remote)&&(x||F),G=!!o.documentElement&&(N||F),Q=q||K||$||Y||j||G;if(!(V||Q)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let v=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&O&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),q&&(o.media.addEventListener(t,v),m[e].mediaEvents=v)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&P&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),K&&(null==(a=o.media.textTracks)||a.addEventListener(t,v),m[e].textTracksEvents=v)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),$&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,v),m[e].videoRenditionsEvents=v)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&W&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),Y&&(null==(a=o.media.audioTracks)||a.addEventListener(t,v),m[e].audioTracksEvents=v)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&B&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),j&&(null==(a=o.media.remote)||a.addEventListener(t,v),m[e].remoteEvents=v)}),h=m[e].rootEvents,l.forEach(t=>{h&&H&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),G&&(o.documentElement.addEventListener(t,v),m[e].rootEvents=v)});let E=m[e].stateOwnersUpdateHandlers;u.forEach(t=>{E&&V&&E(),Q&&(m[e].stateOwnersUpdateHandlers=t(v,o))})}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return v({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;if(r[t]){c(r[t](a,d,e));return}"mediaelementchangerequest"===t?v({media:i}):"fullscreenelementchangerequest"===t?v({fullscreenElement:i}):"documentelementchangerequest"===t?v({documentElement:i}):"optionschangerequest"===t&&Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t})},getState:()=>u,subscribe:e=>(v({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(v({},l.length-1),l.splice(t,1))})}},tu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tc=(e,t,i)=>(tu(e,t,"read from private field"),i?i.call(e):t.get(e)),th=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tm=(e,t,i,a)=>(tu(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),tp=(e,t,i)=>(tu(e,t,"access private method"),i);let tv=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],tE={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset"};class tb extends eI{constructor(){super(),th(this,sv),th(this,sb),th(this,sg),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,th(this,sd,new eM(this,tE.HOTKEYS)),th(this,su,void 0),th(this,sc,void 0),th(this,sh,void 0),th(this,sm,void 0),th(this,sp,e=>{var t;null==(t=tc(this,sc))||t.dispatch(e)}),this.associateElement(this);let e={};tm(this,sh,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new V.CustomEvent(c[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(tE.NO_HOTKEYS,tE.HOTKEYS,tE.DEFAULT_STREAM_TYPE,tE.DEFAULT_SUBTITLES,tE.DEFAULT_DURATION)}get mediaStore(){return tc(this,sc)}set mediaStore(e){var t,i;if(tc(this,sc)&&(null==(t=tc(this,sm))||t.call(this),tm(this,sm,void 0)),tm(this,sc,e),!tc(this,sc)&&!this.hasAttribute(tE.NO_DEFAULT_STORE)){tp(this,sv,sE).call(this);return}tm(this,sm,null==(i=tc(this,sc))?void 0:i.subscribe(tc(this,sh)))}get fullscreenElement(){var e;return null!=(e=tc(this,su))?e:this}set fullscreenElement(e){var t;this.hasAttribute(tE.FULLSCREEN_ELEMENT)&&this.removeAttribute(tE.FULLSCREEN_ELEMENT),tm(this,su,e),null==(t=tc(this,sc))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}attributeChangedCallback(e,t,i){var a,r,n,s,o,l;if(super.attributeChangedCallback(e,t,i),e===tE.NO_HOTKEYS)i!==t&&""===i?(this.hasAttribute(tE.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===tE.HOTKEYS)tc(this,sd).value=i;else if(e===tE.DEFAULT_SUBTITLES&&i!==t)null==(a=tc(this,sc))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(tE.DEFAULT_SUBTITLES)}});else if(e===tE.DEFAULT_STREAM_TYPE)null==(n=tc(this,sc))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(tE.DEFAULT_STREAM_TYPE))?r:void 0}});else if(e===tE.LIVE_EDGE_OFFSET)null==(s=tc(this,sc))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(tE.LIVE_EDGE_OFFSET)?+this.getAttribute(tE.LIVE_EDGE_OFFSET):void 0}});else if(e===tE.FULLSCREEN_ELEMENT){let e=i?null==(o=this.getRootNode())?void 0:o.getElementById(i):void 0;tm(this,su,e),null==(l=tc(this,sc))||l.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}}connectedCallback(){var e,t;tc(this,sc)||this.hasAttribute(tE.NO_DEFAULT_STORE)||tp(this,sv,sE).call(this),null==(e=tc(this,sc))||e.dispatch({type:"documentelementchangerequest",detail:F}),super.connectedCallback(),tc(this,sc)&&!tc(this,sm)&&tm(this,sm,null==(t=tc(this,sc))?void 0:t.subscribe(tc(this,sh))),this.enableHotkeys()}disconnectedCallback(){var e,t,i,a;null==(e=super.disconnectedCallback)||e.call(this),tc(this,sc)&&(null==(t=tc(this,sc))||t.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(i=tc(this,sc))||i.dispatch({type:n.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),tc(this,sm)&&(null==(a=tc(this,sm))||a.call(this),tm(this,sm,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=tc(this,sc))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=tc(this,sc))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){tR(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=tC(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(n).forEach(t=>{e.addEventListener(t,tc(this,sp))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(n).forEach(t=>{e.removeEventListener(t,tc(this,sp))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),tc(this,sc)&&Object.entries(tc(this,sc).getState()).forEach(([t,i])=>{tR([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",tp(this,sg,s_))}disableHotkeys(){this.removeEventListener("keydown",tp(this,sg,s_)),this.removeEventListener("keyup",tp(this,sb,sf))}get hotkeys(){return tc(this,sd)}keyboardShortcutHandler(e){var t,i,a,r,s;let o,l,d;let u=e.target;if(!((null!=(a=null!=(i=null==(t=u.getAttribute(tE.KEYS_USED))?void 0:t.split(" "))?i:null==u?void 0:u.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||tc(this,sd).contains(`no${e.key.toLowerCase()}`))&&!(" "===e.key&&tc(this,sd).contains("nospace")))switch(e.key){case" ":case"k":o=tc(this,sc).getState().mediaPaused?n.MEDIA_PLAY_REQUEST:n.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new V.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"m":o="off"===this.mediaStore.getState().mediaVolumeLevel?n.MEDIA_UNMUTE_REQUEST:n.MEDIA_MUTE_REQUEST,this.dispatchEvent(new V.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"f":o=this.mediaStore.getState().mediaIsFullscreen?n.MEDIA_EXIT_FULLSCREEN_REQUEST:n.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new V.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new V.CustomEvent(n.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let e=this.hasAttribute(tE.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(tE.KEYBOARD_BACKWARD_SEEK_OFFSET):10;l=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),d=new V.CustomEvent(n.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(d);break}case"ArrowRight":{let e=this.hasAttribute(tE.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(tE.KEYBOARD_FORWARD_SEEK_OFFSET):10;l=Math.max((null!=(s=this.mediaStore.getState().mediaCurrentTime)?s:0)+e,0),d=new V.CustomEvent(n.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(d)}}}}sd=new WeakMap,su=new WeakMap,sc=new WeakMap,sh=new WeakMap,sm=new WeakMap,sp=new WeakMap,sv=new WeakSet,sE=function(){var e;this.mediaStore=td({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(tE.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(tE.DEFAULT_DURATION)?+this.getAttribute(tE.DEFAULT_DURATION):void 0,defaultStreamType:null!=(e=this.getAttribute(tE.DEFAULT_STREAM_TYPE))?e:void 0,liveEdgeOffset:this.hasAttribute(tE.LIVE_EDGE_OFFSET)?+this.getAttribute(tE.LIVE_EDGE_OFFSET):void 0,noVolumePref:this.hasAttribute(tE.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(tE.NO_SUBTITLES_LANG_PREF)}})},sb=new WeakSet,sf=function(e){let{key:t}=e;if(!tv.includes(t)){this.removeEventListener("keyup",tp(this,sb,sf));return}this.keyboardShortcutHandler(e)},sg=new WeakSet,s_=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!tv.includes(a)){this.removeEventListener("keyup",tp(this,sb,sf));return}[" ","ArrowLeft","ArrowRight"].includes(a)&&!(tc(this,sd).contains(`no${a.toLowerCase()}`)||" "===a&&tc(this,sd).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",tp(this,sb,sf),{once:!0})};let tf=Object.values(d),tg=Object.values(o),t_=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(V.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let o=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,s.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||o)?(n||o).filter(e=>tf.includes(e)):[]},ty=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&V.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof V.customElements.get(e.nodeName.toLowerCase()))&&V.customElements.upgrade(e),tg.some(t=>t in e)},tT=e=>ty(e)||!!t_(e).length,tA=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},tk={[d.MEDIA_SUBTITLES_LIST]:eW,[d.MEDIA_SUBTITLES_SHOWING]:eW,[d.MEDIA_SEEKABLE]:tA,[d.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(tA).join(" "),[d.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[d.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(T).join(" ")},[d.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(k).join(" ")}},tw=async(e,t,i)=>{var a,r;if(e.isConnected||await R(0),"boolean"==typeof i||null==i)return eu(e,t,i);if("number"==typeof i)return el(e,t,i);if("string"==typeof i)return eh(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=tk[t])?void 0:a.call(tk,i))?r:i;return e.setAttribute(t,n)},tS=e=>{var t;return!!(null==(t=e.closest)?void 0:t.call(e,'*[slot="media"]'))},tI=(e,t)=>{if(tS(e))return;let i=(e,t)=>{var i,a;tT(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>tI(e,t))},a=null==e?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!tT(e)){V.customElements.whenDefined(a).then(()=>{i(e,t)});return}i(e,t)},tR=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=t_(e),r=t.toLowerCase();a.includes(r)&&tw(e,r,i)})},tC=(e,t,i)=>{tI(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(n.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(n.UNREGISTER_MEDIA_STATE_RECEIVER,r);let o=[],l=e=>{let a=e.target;"media"!==a.name&&(o.forEach(e=>tI(e,i)),(o=[...a.assignedElements({flatten:!0})]).forEach(e=>tI(e,t)))};e.addEventListener("slotchange",l);let d=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:o,attributeName:l}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>tI(e,t)),Array.prototype.forEach.call(r,e=>tI(e,i))):"attributes"===n&&l===s.MEDIA_CHROME_ATTRIBUTES&&(tT(o)?t(o):i(o))})});return d.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{tI(e,i),e.removeEventListener("slotchange",l),d.disconnect(),e.removeEventListener(n.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(n.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};V.customElements.get("media-controller")||V.customElements.define("media-controller",tb);var tD=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tL=(e,t,i)=>(tD(e,t,"read from private field"),i?i.call(e):t.get(e)),tM=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tx=(e,t,i,a)=>(tD(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),tN=(e,t,i)=>(tD(e,t,"access private method"),i);let tO={TOOLTIP_PLACEMENT:"tooltipplacement"},tP=F.createElement("template");tP.innerHTML=`
<style>
  :host {
    position: relative;
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-button-padding, var(--media-control-padding, 10px));
    justify-content: var(--media-button-justify-content, center);
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }

  media-tooltip {
    
    max-width: 0;
    overflow-x: clip;
    opacity: 0;
    transition: opacity .3s, max-width 0s 9s;
  }

  :host(:hover) media-tooltip,
  :host(:focus-visible) media-tooltip {
    max-width: 100vw;
    opacity: 1;
    transition: opacity .3s;
  }

  :host([notooltip]) slot[name="tooltip"] {
    display: none;
  }
</style>

<slot name="tooltip">
  <media-tooltip part="tooltip" aria-hidden="true">
    <slot name="tooltip-content"></slot>
  </media-tooltip>
</slot>
`;class tU extends V.HTMLElement{constructor(e={}){var t;if(super(),tM(this,sS),tM(this,sy,void 0),this.preventClick=!1,this.tooltipEl=null,this.tooltipContent="",tM(this,sT,e=>{this.preventClick||this.handleClick(e),setTimeout(tL(this,sA),0)}),tM(this,sA,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),tM(this,sk,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",tL(this,sk));return}this.preventClick||this.handleClick(e)}),tM(this,sw,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",tL(this,sk));return}this.addEventListener("keyup",tL(this,sk),{once:!0})}),!this.shadowRoot){this.attachShadow({mode:"open"});let i=tP.content.cloneNode(!0);this.nativeEl=i;let a=e.slotTemplate;a||((a=F.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),e.tooltipContent&&(i.querySelector('slot[name="tooltip-content"]').innerHTML=null!=(t=e.tooltipContent)?t:"",this.tooltipContent=e.tooltipContent),this.nativeEl.appendChild(a.content.cloneNode(!0)),this.shadowRoot.appendChild(i)}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",tO.TOOLTIP_PLACEMENT,s.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",tL(this,sT)),this.addEventListener("keydown",tL(this,sw)),this.tabIndex=0}disable(){this.removeEventListener("click",tL(this,sT)),this.removeEventListener("keydown",tL(this,sw)),this.removeEventListener("keyup",tL(this,sk)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=tL(this,sy))?void 0:a.unassociateElement)||r.call(a,this),tx(this,sy,null)),i&&this.isConnected&&(tx(this,sy,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=tL(this,sy))?void 0:o.associateElement)||l.call(o,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===tO.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==t&&(this.tooltipEl.placement=i),tL(this,sA).call(this)}connectedCallback(){var e,t,i;let{style:a}=en(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","button");let r=this.getAttribute(s.MEDIA_CONTROLLER);r&&(tx(this,sy,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=tL(this,sy))?void 0:t.associateElement)||i.call(t,this)),V.customElements.whenDefined("media-tooltip").then(()=>tN(this,sS,sI).call(this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=tL(this,sy))?void 0:e.unassociateElement)||t.call(e,this),tx(this,sy,null),this.removeEventListener("mouseenter",tL(this,sA)),this.removeEventListener("focus",tL(this,sA)),this.removeEventListener("click",tL(this,sT))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return ec(this,tO.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){eh(this,tO.TOOLTIP_PLACEMENT,e)}handleClick(e){}}sy=new WeakMap,sT=new WeakMap,sA=new WeakMap,sk=new WeakMap,sw=new WeakMap,sS=new WeakSet,sI=function(){this.addEventListener("mouseenter",tL(this,sA)),this.addEventListener("focus",tL(this,sA)),this.addEventListener("click",tL(this,sT));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},V.customElements.get("media-chrome-button")||V.customElements.define("media-chrome-button",tU);let tW=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,tB=F.createElement("template");tB.innerHTML=`
  <style>
    :host([${d.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    
    :host(:not([${d.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${d.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
    :host(:not([${d.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${tW}</slot>
    <slot name="exit">${tW}</slot>
  </slot>
`;let tH=`
  <slot name="tooltip-enter">Start airplay</slot>
  <slot name="tooltip-exit">Stop airplay</slot>
`,tV=e=>{let t=e.mediaIsAirplaying?y.EXIT_AIRPLAY():y.ENTER_AIRPLAY();e.setAttribute("aria-label",t)};class tF extends tU{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_IS_AIRPLAYING,d.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(e={}){super({slotTemplate:tB,tooltipContent:tH,...e})}connectedCallback(){super.connectedCallback(),tV(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_IS_AIRPLAYING&&tV(this)}get mediaIsAirplaying(){return ed(this,d.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){eu(this,d.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return ec(this,d.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){eh(this,d.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new V.CustomEvent(n.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}V.customElements.get("media-airplay-button")||V.customElements.define("media-airplay-button",tF);let tq=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,tK=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,t$=F.createElement("template");t$.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }

    :host([aria-checked="true"]) slot[name=tooltip-enable],
    :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="on">${tq}</slot>
    <slot name="off">${tK}</slot>
  </slot>
`;let tY=`
  <slot name="tooltip-enable">Enable captions</slot>
  <slot name="tooltip-disable">Disable captions</slot>
`,tj=e=>{e.setAttribute("aria-checked",eq(e).toString())};class tG extends tU{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_SUBTITLES_LIST,d.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:t$,tooltipContent:tY,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",_.CLOSED_CAPTIONS()),tj(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_SUBTITLES_SHOWING&&tj(this)}get mediaSubtitlesList(){return tQ(this,d.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){tZ(this,d.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return tQ(this,d.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){tZ(this,d.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new V.CustomEvent(n.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}let tQ=(e,t)=>{let i=e.getAttribute(t);return i?eO(i):[]},tZ=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=eW(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};V.customElements.get("media-captions-button")||V.customElements.define("media-captions-button",tG);let tz=F.createElement("template");tz.innerHTML=`
  <style>
  :host([${d.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  
  :host(:not([${d.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${d.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
    :host(:not([${d.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
    <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
  </slot>
`;let tX=`
  <slot name="tooltip-enter">Start casting</slot>
  <slot name="tooltip-exit">Stop casting</slot>
`,tJ=e=>{let t=e.mediaIsCasting?y.EXIT_CAST():y.ENTER_CAST();e.setAttribute("aria-label",t)};class t0 extends tU{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_IS_CASTING,d.MEDIA_CAST_UNAVAILABLE]}constructor(e={}){super({slotTemplate:tz,tooltipContent:tX,...e})}connectedCallback(){super.connectedCallback(),tJ(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_IS_CASTING&&tJ(this)}get mediaIsCasting(){return ed(this,d.MEDIA_IS_CASTING)}set mediaIsCasting(e){eu(this,d.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return ec(this,d.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){eh(this,d.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?n.MEDIA_EXIT_CAST_REQUEST:n.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new V.CustomEvent(e,{composed:!0,bubbles:!0}))}}V.customElements.get("media-cast-button")||V.customElements.define("media-cast-button",t0);var t1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},t2=(e,t,i)=>(t1(e,t,"read from private field"),i?i.call(e):t.get(e)),t3=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},t5=(e,t,i,a)=>(t1(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),t9=(e,t,i)=>(t1(e,t,"access private method"),i);let t4=F.createElement("template");t4.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-dialog-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
      border-radius: var(--media-dialog-border-radius);
      border: var(--media-dialog-border, none);
      display: var(--media-dialog-display, inline-flex);
      transition: var(--media-dialog-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out
      ) !important;
      
      visibility: var(--media-dialog-visibility, visible);
      opacity: var(--media-dialog-opacity, 1);
      transform: var(--media-dialog-transform-in, translateY(0) scale(1));
    }

    :host([hidden]) {
      transition: var(--media-dialog-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-dialog-hidden-visibility, hidden);
      opacity: var(--media-dialog-hidden-opacity, 0);
      transform: var(--media-dialog-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }
  </style>
  <slot></slot>
`;let t8="hidden";class t7 extends V.HTMLElement{constructor(){super(),t3(this,sD),t3(this,sM),t3(this,sN),t3(this,sP),t3(this,sW),t3(this,sR,null),t3(this,sC,null),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[t8,"anchor"]}handleEvent(e){switch(e.type){case"invoke":t9(this,sN,sO).call(this,e);break;case"focusout":t9(this,sP,sU).call(this,e);break;case"keydown":t9(this,sW,sB).call(this,e)}}connectedCallback(){this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){e===t8&&i!==t&&(this.hidden?t9(this,sM,sx).call(this):t9(this,sD,sL).call(this))}focus(){t5(this,sR,et());let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}get keysUsed(){return["Escape","Tab"]}}sR=new WeakMap,sC=new WeakMap,sD=new WeakSet,sL=function(){var e;null==(e=t2(this,sC))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},sM=new WeakSet,sx=function(){var e;null==(e=t2(this,sC))||e.setAttribute("aria-expanded","false")},sN=new WeakSet,sO=function(e){t5(this,sC,e.relatedTarget),J(this,e.relatedTarget)||(this.hidden=!this.hidden)},sP=new WeakSet,sU=function(e){var t;J(this,e.relatedTarget)||(null==(t=t2(this,sR))||t.focus(),!t2(this,sC)||t2(this,sC)===e.relatedTarget||this.hidden||(this.hidden=!0))},sW=new WeakSet,sB=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;!o&&!l&&!d&&this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=t2(this,sR))||n.focus(),this.hidden=!0))},t7.template=t4,V.customElements.get("media-chrome-dialog")||V.customElements.define("media-chrome-dialog",t7);var t6=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ie=(e,t,i)=>(t6(e,t,"read from private field"),i?i.call(e):t.get(e)),it=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ii=(e,t,i,a)=>(t6(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ia=(e,t,i)=>(t6(e,t,"access private method"),i);let ir=F.createElement("template");ir.innerHTML=`
  <style>
    :host {
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      box-shadow: var(--_focus-visible-box-shadow, none);
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      display: inline-flex;
      align-items: center;
      
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      width: 100px;
      transition: background .15s linear;
      cursor: pointer;
      pointer-events: auto;
      touch-action: none; 
      z-index: 1; 
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #leftgap {
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
    }

    #rightgap {
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
    }

    #startpoint,
    #endpoint {
      position: absolute;
    }

    #endpoint {
      right: 0;
    }

    #container {
      
      width: var(--media-range-track-width, 100%);
      transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      min-width: 40px;
    }

    #range {
      
      display: var(--media-time-range-hover-display, block);
      bottom: var(--media-time-range-hover-bottom, -7px);
      height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
      width: 100%;
      position: absolute;
      cursor: pointer;

      -webkit-appearance: none; 
      -webkit-tap-highlight-color: transparent;
      background: transparent; 
      margin: 0;
      z-index: 1;
    }

    @media (hover: hover) {
      #range {
        bottom: var(--media-time-range-hover-bottom, -5px);
        height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
      }
    }

    
    
    #range::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: transparent;
      width: .1px;
      height: .1px;
    }

    
    #range::-moz-range-thumb {
      background: transparent;
      border: transparent;
      width: .1px;
      height: .1px;
    }

    #appearance {
      height: var(--media-range-track-height, 4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: absolute;
      
      will-change: transform;
    }

    #track {
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      border-radius: var(--media-range-track-border-radius, 1px);
      border: var(--media-range-track-border, none);
      outline: var(--media-range-track-outline);
      outline-offset: var(--media-range-track-outline-offset);
      backdrop-filter: var(--media-range-track-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
      box-shadow: var(--media-range-track-box-shadow, none);
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    #progress,
    #pointer {
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #progress {
      background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
      transition: var(--media-range-track-transition);
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    @media (hover: hover) {
      :host(:hover) #pointer {
        transition: visibility .5s, opacity .5s;
        visibility: visible;
        opacity: 1;
      }
    }

    #thumb {
      width: var(--media-range-thumb-width, 10px);
      height: var(--media-range-thumb-height, 10px);
      margin-left: calc(var(--media-range-thumb-width, 10px) / -2);
      border: var(--media-range-thumb-border, none);
      border-radius: var(--media-range-thumb-border-radius, 10px);
      background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
      box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
      transition: var(--media-range-thumb-transition);
      transform: var(--media-range-thumb-transform, none);
      opacity: var(--media-range-thumb-opacity, 1);
      position: absolute;
      left: 0;
      cursor: pointer;
    }

    :host([disabled]) #thumb {
      background-color: #777;
    }

    .segments #appearance {
      height: var(--media-range-segment-hover-height, 7px);
    }

    #track {
      clip-path: url(#segments-clipping);
    }

    #segments {
      --segments-gap: var(--media-range-segments-gap, 2px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #segments-clipping {
      transform: translateX(calc(var(--segments-gap) / 2));
    }

    #segments-clipping:empty {
      display: none;
    }

    #segments-clipping rect {
      height: var(--media-range-track-height, 4px);
      y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
      transition: var(--media-range-segment-transition, transform .1s ease-in-out);
      transform: var(--media-range-segment-transform, scaleY(1));
      transform-origin: center;
    }
  </style>
  <div id="leftgap"></div>
  <div id="container">
    <div id="startpoint"></div>
    <div id="endpoint"></div>
    <div id="appearance">
      <div id="track" part="track">
        <div id="pointer"></div>
        <div id="progress" part="progress"></div>
      </div>
      <div id="thumb" part="thumb"></div>
      <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
    </div>
    <input id="range" type="range" min="0" max="1" step="any" value="0">
  </div>
  <div id="rightgap"></div>
`;class is extends V.HTMLElement{constructor(){super(),it(this,sQ),it(this,sz),it(this,sJ),it(this,s1),it(this,s3),it(this,s9),it(this,s8),it(this,s6),it(this,sH,void 0),it(this,sV,void 0),it(this,sF,void 0),it(this,sq,void 0),it(this,sK,{}),it(this,s$,[]),it(this,sY,()=>{if(this.range.matches(":focus-visible")){let{style:e}=en(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),it(this,sj,()=>{let{style:e}=en(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),it(this,sG,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ir.content.cloneNode(!0))),this.container=this.shadowRoot.querySelector("#container"),ii(this,sF,this.shadowRoot.querySelector("#startpoint")),ii(this,sq,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",s.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=ie(this,sH))?void 0:a.unassociateElement)||r.call(a,this),ii(this,sH,null)),i&&this.isConnected&&(ii(this,sH,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=ie(this,sH))?void 0:o.associateElement)||l.call(o,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),ia(this,sz,sX).call(this)):(this.range.setAttribute(e,i),ia(this,sJ,s0).call(this)))}connectedCallback(){var e,t,i;let{style:a}=en(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),ie(this,sK).pointer=en(this.shadowRoot,"#pointer"),ie(this,sK).progress=en(this.shadowRoot,"#progress"),ie(this,sK).thumb=en(this.shadowRoot,"#thumb"),ie(this,sK).activeSegment=en(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(s.MEDIA_CONTROLLER);r&&(ii(this,sH,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=ie(this,sH))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",ie(this,sY)),this.shadowRoot.addEventListener("focusout",ie(this,sj)),ia(this,sz,sX).call(this),Y(this.container,ie(this,sG))}disconnectedCallback(){var e,t;ia(this,sJ,s0).call(this),null==(t=null==(e=ie(this,sH))?void 0:e.unassociateElement)||t.call(e,this),ii(this,sH,null),this.shadowRoot.removeEventListener("focusin",ie(this,sY)),this.shadowRoot.removeEventListener("focusout",ie(this,sj)),j(this.container,ie(this,sG))}updatePointerBar(e){var t;null==(t=ie(this,sK).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=ie(this,sK).progress)||e.style.setProperty("width",`${i}%`),null==(t=ie(this,sK).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];ii(this,s$,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=F.createElementNS("http://www.w3.org/2000/svg","rect"),c=en(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){return Math.max(0,Math.min(1,function(e,t,i,a){let r=er(i,a),n=er(i,{x:e,y:t}),s=er(a,{x:e,y:t});return n>r||s>r?n>s?1:0:n/r}(e.clientX,e.clientY,ie(this,sF).getBoundingClientRect(),ie(this,sq).getBoundingClientRect())))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":ia(this,s6,oe).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":ia(this,s3,s5).call(this,e);break;case"pointerdown":ia(this,s1,s2).call(this,e);break;case"pointerup":ia(this,s9,s4).call(this);break;case"pointerleave":ia(this,s8,s7).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}sH=new WeakMap,sV=new WeakMap,sF=new WeakMap,sq=new WeakMap,sK=new WeakMap,s$=new WeakMap,sY=new WeakMap,sj=new WeakMap,sG=new WeakMap,sQ=new WeakSet,sZ=function(e){let t=ie(this,sK).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=ie(this,s$).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},sz=new WeakSet,sX=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},sJ=new WeakSet,s0=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=V.window)||e.removeEventListener("pointerup",this),null==(t=V.window)||t.removeEventListener("pointermove",this)},s1=new WeakSet,s2=function(e){var t;ii(this,sV,e.composedPath().includes(this.range)),null==(t=V.window)||t.addEventListener("pointerup",this)},s3=new WeakSet,s5=function(e){var t;"mouse"!==e.pointerType&&ia(this,s1,s2).call(this,e),this.addEventListener("pointerleave",this),null==(t=V.window)||t.addEventListener("pointermove",this)},s9=new WeakSet,s4=function(){var e;null==(e=V.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},s8=new WeakSet,s7=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=V.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=ie(this,sK).activeSegment)||t.style.removeProperty("transform")},s6=new WeakSet,oe=function(e){this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),ia(this,sQ,sZ).call(this,e),this.dragging&&("mouse"!==e.pointerType||!ie(this,sV))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},V.customElements.get("media-chrome-range")||V.customElements.define("media-chrome-range",is);var io=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},il=(e,t,i)=>(io(e,t,"read from private field"),i?i.call(e):t.get(e)),id=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iu=(e,t,i,a)=>(io(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let ic=F.createElement("template");ic.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-indicator-icon-height: 44px;
    }

    ::slotted(media-time-range),
    ::slotted(media-volume-range) {
      min-height: 100%;
    }

    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }

    ::slotted([role="menu"]) {
      position: absolute;
    }
  </style>

  <slot></slot>
`;class ih extends V.HTMLElement{constructor(){super(),id(this,ot,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ic.content.cloneNode(!0)))}static get observedAttributes(){return[s.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=il(this,ot))?void 0:a.unassociateElement)||r.call(a,this),iu(this,ot,null)),i&&this.isConnected&&(iu(this,ot,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=il(this,ot))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(iu(this,ot,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=il(this,ot))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=il(this,ot))?void 0:e.unassociateElement)||t.call(e,this),iu(this,ot,null)}}ot=new WeakMap,V.customElements.get("media-control-bar")||V.customElements.define("media-control-bar",ih);var im=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ip=(e,t,i)=>(im(e,t,"read from private field"),i?i.call(e):t.get(e)),iv=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iE=(e,t,i,a)=>(im(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let ib=F.createElement("template");ib.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;class ig extends V.HTMLElement{constructor(){super(),iv(this,oi,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ib.content.cloneNode(!0)))}static get observedAttributes(){return[s.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ip(this,oi))?void 0:a.unassociateElement)||r.call(a,this),iE(this,oi,null)),i&&this.isConnected&&(iE(this,oi,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=ip(this,oi))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let{style:a}=en(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(s.MEDIA_CONTROLLER);r&&(iE(this,oi,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=ip(this,oi))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=ip(this,oi))?void 0:e.unassociateElement)||t.call(e,this),iE(this,oi,null)}}oi=new WeakMap,V.customElements.get("media-text-display")||V.customElements.define("media-text-display",ig);var i_=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iy=(e,t,i)=>(i_(e,t,"read from private field"),i?i.call(e):t.get(e)),iT=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iA=(e,t,i,a)=>(i_(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ik extends ig{constructor(){super(),iT(this,oa,void 0),iA(this,oa,this.shadowRoot.querySelector("slot")),iy(this,oa).textContent=M(0)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===d.MEDIA_DURATION&&(iy(this,oa).textContent=M(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return eo(this,d.MEDIA_DURATION)}set mediaDuration(e){el(this,d.MEDIA_DURATION,e)}}oa=new WeakMap,V.customElements.get("media-duration-display")||V.customElements.define("media-duration-display",ik);let iw=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,iS=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,iI=F.createElement("template");iI.innerHTML=`
  <style>
    :host([${d.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    
    :host(:not([${d.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${d.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
    :host(:not([${d.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${iw}</slot>
    <slot name="exit">${iS}</slot>
  </slot>
`;let iR=`
  <slot name="tooltip-enter">Enter fullscreen mode</slot>
  <slot name="tooltip-exit">Exit fullscreen mode</slot>
`,iC=e=>{let t=e.mediaIsFullscreen?y.EXIT_FULLSCREEN():y.ENTER_FULLSCREEN();e.setAttribute("aria-label",t)};class iD extends tU{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_IS_FULLSCREEN,d.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(e={}){super({slotTemplate:iI,tooltipContent:iR,...e})}connectedCallback(){super.connectedCallback(),iC(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_IS_FULLSCREEN&&iC(this)}get mediaFullscreenUnavailable(){return ec(this,d.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){eh(this,d.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return ed(this,d.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){eu(this,d.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?n.MEDIA_EXIT_FULLSCREEN_REQUEST:n.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new V.CustomEvent(e,{composed:!0,bubbles:!0}))}}V.customElements.get("media-fullscreen-button")||V.customElements.define("media-fullscreen-button",iD);let{MEDIA_TIME_IS_LIVE:iL,MEDIA_PAUSED:iM}=d,{MEDIA_SEEK_TO_LIVE_REQUEST:ix,MEDIA_PLAY_REQUEST:iN}=n,iO=F.createElement("template");iO.innerHTML=`
  <style>
  :host { --media-tooltip-display: none; }
  
  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${iL}]:not([${iM}])) slot[name=indicator] > *,
  :host([${iL}]:not([${iM}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${iL}]:not([${iM}])) {
    cursor: not-allowed;
  }

  </style>

  <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>
`;let iP=e=>{let t=e.mediaPaused||!e.mediaTimeIsLive,i=t?y.SEEK_LIVE():y.PLAYING_LIVE();e.setAttribute("aria-label",i),t?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class iU extends tU{static get observedAttributes(){return[...super.observedAttributes,iM,iL]}constructor(e={}){super({slotTemplate:iO,...e})}connectedCallback(){iP(this),super.connectedCallback()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),iP(this)}get mediaPaused(){return ed(this,d.MEDIA_PAUSED)}set mediaPaused(e){eu(this,d.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return ed(this,d.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){eu(this,d.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new V.CustomEvent(ix,{composed:!0,bubbles:!0})),this.hasAttribute(iM)&&this.dispatchEvent(new V.CustomEvent(iN,{composed:!0,bubbles:!0})))}}V.customElements.get("media-live-button")||V.customElements.define("media-live-button",iU);var iW=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iB=(e,t,i)=>(iW(e,t,"read from private field"),i?i.call(e):t.get(e)),iH=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iV=(e,t,i,a)=>(iW(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let iF="loadingdelay",iq=F.createElement("template"),iK=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;iq.innerHTML=`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=icon] > *,
:host ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${d.MEDIA_LOADING}]:not([${d.MEDIA_PAUSED}])) slot[name=icon] > *,
:host([${d.MEDIA_LOADING}]:not([${d.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${d.MEDIA_LOADING}]:not([${d.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-indicator-icon-width);
  height: var(--media-loading-indicator-icon-height, 100px);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="icon">${iK}</slot>
<div id="status" role="status" aria-live="polite">${_.MEDIA_LOADING()}</div>
`;class i$ extends V.HTMLElement{constructor(){if(super(),iH(this,or,void 0),iH(this,on,500),!this.shadowRoot){let e=this.attachShadow({mode:"open"}),t=iq.content.cloneNode(!0);e.appendChild(t)}}static get observedAttributes(){return[s.MEDIA_CONTROLLER,d.MEDIA_PAUSED,d.MEDIA_LOADING,iF]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===iF&&t!==i?this.loadingDelay=Number(i):e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=iB(this,or))?void 0:a.unassociateElement)||r.call(a,this),iV(this,or,null)),i&&this.isConnected&&(iV(this,or,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=iB(this,or))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(iV(this,or,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=iB(this,or))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=iB(this,or))?void 0:e.unassociateElement)||t.call(e,this),iV(this,or,null)}get loadingDelay(){return iB(this,on)}set loadingDelay(e){iV(this,on,e);let{style:t}=en(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return ed(this,d.MEDIA_PAUSED)}set mediaPaused(e){eu(this,d.MEDIA_PAUSED,e)}get mediaLoading(){return ed(this,d.MEDIA_LOADING)}set mediaLoading(e){eu(this,d.MEDIA_LOADING,e)}}or=new WeakMap,on=new WeakMap,V.customElements.get("media-loading-indicator")||V.customElements.define("media-loading-indicator",i$);let{MEDIA_VOLUME_LEVEL:iY}=d,ij=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,iG=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,iQ=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,iZ=F.createElement("template");iZ.innerHTML=`
  <style>
  
  :host(:not([${iY}])) slot[name=icon] slot:not([name=high]), 
  :host([${iY}=high]) slot[name=icon] slot:not([name=high]) {
    display: none !important;
  }

  :host([${iY}=off]) slot[name=icon] slot:not([name=off]) {
    display: none !important;
  }

  :host([${iY}=low]) slot[name=icon] slot:not([name=low]) {
    display: none !important;
  }

  :host([${iY}=medium]) slot[name=icon] slot:not([name=medium]) {
    display: none !important;
  }

  :host(:not([${iY}=off])) slot[name=tooltip-unmute],
  :host([${iY}=off]) slot[name=tooltip-mute] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="off">${ij}</slot>
    <slot name="low">${iG}</slot>
    <slot name="medium">${iG}</slot>
    <slot name="high">${iQ}</slot>
  </slot>
`;let iz=`
  <slot name="tooltip-mute">Mute</slot>
  <slot name="tooltip-unmute">Unmute</slot>
`,iX=e=>{let t="off"===e.mediaVolumeLevel?y.UNMUTE():y.MUTE();e.setAttribute("aria-label",t)};class iJ extends tU{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_VOLUME_LEVEL]}constructor(e={}){super({slotTemplate:iZ,tooltipContent:iz,...e})}connectedCallback(){iX(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===d.MEDIA_VOLUME_LEVEL&&iX(this),super.attributeChangedCallback(e,t,i)}get mediaVolumeLevel(){return ec(this,d.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){eh(this,d.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?n.MEDIA_UNMUTE_REQUEST:n.MEDIA_MUTE_REQUEST;this.dispatchEvent(new V.CustomEvent(e,{composed:!0,bubbles:!0}))}}V.customElements.get("media-mute-button")||V.customElements.define("media-mute-button",iJ);let i0=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,i1=F.createElement("template");i1.innerHTML=`
  <style>
  :host([${d.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  
  :host(:not([${d.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${d.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
  :host(:not([${d.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${i0}</slot>
    <slot name="exit">${i0}</slot>
  </slot>
`;let i2=`
  <slot name="tooltip-enter">Enter picture in picture mode</slot>
  <slot name="tooltip-exit">Enter picture in picture mode</slot>
`,i3=e=>{let t=e.mediaIsPip?y.EXIT_PIP():y.ENTER_PIP();e.setAttribute("aria-label",t)};class i5 extends tU{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_IS_PIP,d.MEDIA_PIP_UNAVAILABLE]}constructor(e={}){super({slotTemplate:i1,tooltipContent:i2,...e})}connectedCallback(){i3(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===d.MEDIA_IS_PIP&&i3(this),super.attributeChangedCallback(e,t,i)}get mediaPipUnavailable(){return ec(this,d.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){eh(this,d.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return ed(this,d.MEDIA_IS_PIP)}set mediaIsPip(e){eu(this,d.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?n.MEDIA_EXIT_PIP_REQUEST:n.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new V.CustomEvent(e,{composed:!0,bubbles:!0}))}}V.customElements.get("media-pip-button")||V.customElements.define("media-pip-button",i5);var i9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},i4=(e,t,i)=>(i9(e,t,"read from private field"),i?i.call(e):t.get(e)),i8=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let i7="rates",i6=[1,1.2,1.5,1.7,2],ae=F.createElement("template");ae.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;class at extends tU{constructor(e={}){super({slotTemplate:ae,tooltipContent:g,...e}),i8(this,os,new eM(this,i7,{defaultValue:i6})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PLAYBACK_RATE,i7]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===i7&&(i4(this,os).value=i),e===d.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",_.PLAYBACK_RATE({playbackRate:t}))}}get rates(){return i4(this,os)}set rates(e){e?Array.isArray(e)&&(i4(this,os).value=e.join(" ")):i4(this,os).value=""}get mediaPlaybackRate(){return eo(this,d.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){el(this,d.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(this.rates.values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new V.CustomEvent(n.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}os=new WeakMap,V.customElements.get("media-playback-rate-button")||V.customElements.define("media-playback-rate-button",at);let ai=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,aa=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,ar=F.createElement("template");ar.innerHTML=`
  <style>
    :host([${d.MEDIA_PAUSED}]) slot[name=pause],
    :host(:not([${d.MEDIA_PAUSED}])) slot[name=play] {
      display: none !important;
    }

    :host([${d.MEDIA_PAUSED}]) slot[name=tooltip-pause],
    :host(:not([${d.MEDIA_PAUSED}])) slot[name=tooltip-play] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="play">${ai}</slot>
    <slot name="pause">${aa}</slot>
  </slot>
`;let an=`
  <slot name="tooltip-play">Play</slot>
  <slot name="tooltip-pause">Pause</slot>
`,as=e=>{let t=e.mediaPaused?y.PLAY():y.PAUSE();e.setAttribute("aria-label",t)};class ao extends tU{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PAUSED,d.MEDIA_ENDED]}constructor(e={}){super({slotTemplate:ar,tooltipContent:an,...e})}connectedCallback(){as(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===d.MEDIA_PAUSED&&as(this),super.attributeChangedCallback(e,t,i)}get mediaPaused(){return ed(this,d.MEDIA_PAUSED)}set mediaPaused(e){eu(this,d.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?n.MEDIA_PLAY_REQUEST:n.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new V.CustomEvent(e,{composed:!0,bubbles:!0}))}}V.customElements.get("media-play-button")||V.customElements.define("media-play-button",ao);let al={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},ad=F.createElement("template");ad.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img part="poster img" aria-hidden="true" id="image"/>
`;let au=e=>{e.style.removeProperty("background-image")},ac=(e,t)=>{e.style["background-image"]=`url('${t}')`};class ah extends V.HTMLElement{static get observedAttributes(){return[al.PLACEHOLDER_SRC,al.SRC]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ad.content.cloneNode(!0))),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){e===al.SRC&&(null==i?this.image.removeAttribute(al.SRC):this.image.setAttribute(al.SRC,i)),e===al.PLACEHOLDER_SRC&&(null==i?au(this.image):ac(this.image,i))}get placeholderSrc(){return ec(this,al.PLACEHOLDER_SRC)}set placeholderSrc(e){eh(this,al.SRC,e)}get src(){return ec(this,al.SRC)}set src(e){eh(this,al.SRC,e)}}V.customElements.get("media-poster-image")||V.customElements.define("media-poster-image",ah);var am=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ap=(e,t,i)=>(am(e,t,"read from private field"),i?i.call(e):t.get(e)),av=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aE=(e,t,i,a)=>(am(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ab extends ig{constructor(){super(),av(this,oo,void 0),aE(this,oo,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_PREVIEW_CHAPTER&&i!==t&&null!=i&&(ap(this,oo).textContent=i,""!==i?this.setAttribute("aria-valuetext",`chapter: ${i}`):this.removeAttribute("aria-valuetext"))}get mediaPreviewChapter(){return ec(this,d.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){eh(this,d.MEDIA_PREVIEW_CHAPTER,e)}}oo=new WeakMap,V.customElements.get("media-preview-chapter-display")||V.customElements.define("media-preview-chapter-display",ab);var af=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ag=(e,t,i)=>(af(e,t,"read from private field"),i?i.call(e):t.get(e)),a_=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ay=(e,t,i,a)=>(af(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let aT=F.createElement("template");aT.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;class aA extends V.HTMLElement{constructor(){super(),a_(this,ol,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(aT.content.cloneNode(!0)))}static get observedAttributes(){return[s.MEDIA_CONTROLLER,d.MEDIA_PREVIEW_IMAGE,d.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(ay(this,ol,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=ag(this,ol))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=ag(this,ol))?void 0:e.unassociateElement)||t.call(e,this),ay(this,ol,null)}attributeChangedCallback(e,t,i){var a,r,n,o,l;[d.MEDIA_PREVIEW_IMAGE,d.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ag(this,ol))?void 0:a.unassociateElement)||r.call(a,this),ay(this,ol,null)),i&&this.isConnected&&(ay(this,ol,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=ag(this,ol))?void 0:o.associateElement)||l.call(o,this)))}get mediaPreviewImage(){return ec(this,d.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){eh(this,d.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(d.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(d.MEDIA_PREVIEW_COORDS);return}this.setAttribute(d.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,n]=e,s=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),c=Math.min(parseInt(o)/r,parseInt(l)/n),h=Math.max(parseInt(d)/r,parseInt(u)/n),m=c<1,v=m?c:h>1?h:1,{style:E}=en(this.shadowRoot,":host"),b=en(this.shadowRoot,"img").style,f=this.shadowRoot.querySelector("img"),g=m?"min":"max";E.setProperty(`${g}-width`,"initial","important"),E.setProperty(`${g}-height`,"initial","important"),E.width=`${r*v}px`,E.height=`${n*v}px`;let _=()=>{b.width=`${this.imgWidth*v}px`,b.height=`${this.imgHeight*v}px`,b.display="block"};f.src!==s&&(f.onload=()=>{this.imgWidth=f.naturalWidth,this.imgHeight=f.naturalHeight,_()},f.src=s,_()),_(),b.transform=`translate(-${i*v}px, -${a*v}px)`}}ol=new WeakMap,V.customElements.get("media-preview-thumbnail")||V.customElements.define("media-preview-thumbnail",aA);var ak=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aw=(e,t,i)=>(ak(e,t,"read from private field"),i?i.call(e):t.get(e)),aS=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aI=(e,t,i,a)=>(ak(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class aR extends ig{constructor(){super(),aS(this,od,void 0),aI(this,od,this.shadowRoot.querySelector("slot")),aw(this,od).textContent=M(0)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_PREVIEW_TIME&&null!=i&&(aw(this,od).textContent=M(parseFloat(i)))}get mediaPreviewTime(){return eo(this,d.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){el(this,d.MEDIA_PREVIEW_TIME,e)}}od=new WeakMap,V.customElements.get("media-preview-time-display")||V.customElements.define("media-preview-time-display",aR);let aC={SEEK_OFFSET:"seekoffset"},aD=F.createElement("template");aD.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">30</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg></slot>
`;class aL extends tU{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_CURRENT_TIME,aC.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:aD,tooltipContent:"Seek backward",...e})}connectedCallback(){this.seekOffset=eo(this,aC.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===aC.SEEK_OFFSET&&(this.seekOffset=eo(this,aC.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return eo(this,aC.SEEK_OFFSET,30)}set seekOffset(e){el(this,aC.SEEK_OFFSET,e),this.setAttribute("aria-label",y.SEEK_BACK_N_SECS({seekOffset:this.seekOffset})),Z(X(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return eo(this,d.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){el(this,d.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new V.CustomEvent(n.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}V.customElements.get("media-seek-backward-button")||V.customElements.define("media-seek-backward-button",aL);let aM={SEEK_OFFSET:"seekoffset"},ax=F.createElement("template");ax.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">30</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg></slot>
`;class aN extends tU{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_CURRENT_TIME,aM.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:ax,tooltipContent:"Seek forward",...e})}connectedCallback(){this.seekOffset=eo(this,aM.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===aM.SEEK_OFFSET&&(this.seekOffset=eo(this,aM.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return eo(this,aM.SEEK_OFFSET,30)}set seekOffset(e){el(this,aM.SEEK_OFFSET,e),this.setAttribute("aria-label",y.SEEK_FORWARD_N_SECS({seekOffset:this.seekOffset})),Z(X(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return eo(this,d.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){el(this,d.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new V.CustomEvent(n.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}V.customElements.get("media-seek-forward-button")||V.customElements.define("media-seek-forward-button",aN);var aO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aP=(e,t,i)=>(aO(e,t,"read from private field"),i?i.call(e):t.get(e)),aU=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aW=(e,t,i,a)=>(aO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let aB={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},aH=[...Object.values(aB),d.MEDIA_CURRENT_TIME,d.MEDIA_DURATION,d.MEDIA_SEEKABLE],aV=["Enter"," "],aF="&nbsp;/&nbsp;",aq=(e,{timesSep:t=aF}={})=>{var i,a;let r=e.hasAttribute(aB.REMAINING),n=e.hasAttribute(aB.SHOW_DURATION),s=null!=(i=e.mediaCurrentTime)?i:0,[,o]=null!=(a=e.mediaSeekable)?a:[],l=0;Number.isFinite(e.mediaDuration)?l=e.mediaDuration:Number.isFinite(o)&&(l=o);let d=r?M(0-(l-s)):M(s);return n?`${d}${t}${M(l)}`:d},aK=e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r){e.setAttribute("aria-valuetext","video not loaded, unknown time.");return}let n=e.hasAttribute(aB.REMAINING),s=e.hasAttribute(aB.SHOW_DURATION),o=n?L(0-(r-i)):L(i);if(!s){e.setAttribute("aria-valuetext",o);return}let l=L(r),d=`${o} of ${l}`;e.setAttribute("aria-valuetext",d)};class a$ extends ig{constructor(){super(),aU(this,ou,void 0),aW(this,ou,this.shadowRoot.querySelector("slot")),aP(this,ou).innerHTML=`${aq(this)}`}static get observedAttributes(){return[...super.observedAttributes,...aH,"disabled"]}connectedCallback(){let{style:e}=en(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","pointer"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",_.PLAYBACK_TIME());let t=e=>{let{key:i}=e;if(!aV.includes(i)){this.removeEventListener("keyup",t);return}this.toggleTimeDisplay()};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:r}=e;if(i||a||!aV.includes(r)){this.removeEventListener("keyup",t);return}this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){aH.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return ed(this,aB.REMAINING)}set remaining(e){eu(this,aB.REMAINING,e)}get showDuration(){return ed(this,aB.SHOW_DURATION)}set showDuration(e){eu(this,aB.SHOW_DURATION,e)}get noToggle(){return ed(this,aB.NO_TOGGLE)}set noToggle(e){eu(this,aB.NO_TOGGLE,e)}get mediaDuration(){return eo(this,d.MEDIA_DURATION)}set mediaDuration(e){el(this,d.MEDIA_DURATION,e)}get mediaCurrentTime(){return eo(this,d.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){el(this,d.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(d.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(d.MEDIA_SEEKABLE);return}this.setAttribute(d.MEDIA_SEEKABLE,e.join(":"))}update(){let e=aq(this);aK(this),e!==aP(this,ou).innerHTML&&(aP(this,ou).innerHTML=e)}}ou=new WeakMap,V.customElements.get("media-time-display")||V.customElements.define("media-time-display",a$);var aY=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aj=(e,t,i)=>(aY(e,t,"read from private field"),i?i.call(e):t.get(e)),aG=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aQ=(e,t,i,a)=>(aY(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aZ=(e,t,i,a)=>({set _(value){aQ(e,t,value,i)},get _(){return aj(e,t,a)}});class az{constructor(e,t,i){aG(this,oc,void 0),aG(this,oh,void 0),aG(this,om,void 0),aG(this,op,void 0),aG(this,ov,void 0),aG(this,oE,void 0),aG(this,ob,void 0),aG(this,of,void 0),aG(this,og,0),aG(this,o_,(e=performance.now())=>{aQ(this,og,requestAnimationFrame(aj(this,o_))),aQ(this,op,performance.now()-aj(this,om));let t=1e3/this.fps;if(aj(this,op)>t){aQ(this,om,e-aj(this,op)%t);let i=1e3/((e-aj(this,oh))/++aZ(this,ov)._),a=(e-aj(this,oE))/1e3/this.duration,r=aj(this,ob)+a*this.playbackRate;r-aj(this,oc).valueAsNumber>0?aQ(this,of,this.playbackRate/this.duration/i):(aQ(this,of,.995*aj(this,of)),r=aj(this,oc).valueAsNumber+aj(this,of)),this.callback(r)}}),aQ(this,oc,e),this.callback=t,this.fps=i}start(){0===aj(this,og)&&(aQ(this,om,performance.now()),aQ(this,oh,aj(this,om)),aQ(this,ov,0),aj(this,o_).call(this))}stop(){0!==aj(this,og)&&(cancelAnimationFrame(aj(this,og)),aQ(this,og,0))}update({start:e,duration:t,playbackRate:i}){let a=e-aj(this,oc).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),aQ(this,ob,e),aQ(this,oE,performance.now()),this.duration=t,this.playbackRate=i}}oc=new WeakMap,oh=new WeakMap,om=new WeakMap,op=new WeakMap,ov=new WeakMap,oE=new WeakMap,ob=new WeakMap,of=new WeakMap,og=new WeakMap,o_=new WeakMap;var aX=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aJ=(e,t,i)=>(aX(e,t,"read from private field"),i?i.call(e):t.get(e)),a0=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},a1=(e,t,i,a)=>(aX(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),a2=(e,t,i)=>(aX(e,t,"access private method"),i);let a3=e=>{let t=e.range,i=L(+a4(e)),a=L(+e.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:"video not loaded, unknown time.";t.setAttribute("aria-valuetext",r)},a5=F.createElement("template");a5.innerHTML=`
  <style>
    :host {
      --media-box-border-radius: 4px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
      --media-preview-border-radius: var(--media-box-border-radius);
      --media-box-arrow-offset: var(--media-box-border-radius);
      --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      --_preview-background: var(--media-preview-background, var(--_control-background));

      
      contain: layout;
    }

    #buffered {
      background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #preview-rail,
    #current-rail {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
      will-change: transform;
    }

    [part~="box"] {
      width: min-content;
      
      position: absolute;
      bottom: 100%;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="current-box"] {
      display: var(--media-current-box-display, var(--media-box-display, flex));
      margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
      visibility: hidden;
    }

    [part~="preview-box"] {
      display: var(--media-preview-box-display, var(--media-box-display, flex));
      margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host(:is([${d.MEDIA_PREVIEW_IMAGE}], [${d.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    @media (hover: hover) {
      :host(:is([${d.MEDIA_PREVIEW_IMAGE}], [${d.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--_preview-background));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${d.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
    :host([${d.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    @media (hover: hover) {
      :host([${d.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
      :host([${d.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      :host([${d.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }
    }

    media-preview-chapter-display,
    ::slotted(media-preview-chapter-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      visibility: hidden;
      
      transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-chapter-background, var(--_preview-background));
      border-radius: var(--media-preview-chapter-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-chapter-padding, 3.5px 9px);
      margin: var(--media-preview-chapter-margin, 0 0 5px);
      text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${d.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
    :host([${d.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-chapter-border-radius, 0);
      padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
      margin: var(--media-preview-chapter-margin, 0);
      min-width: 100%;
    }

    media-preview-chapter-display[${d.MEDIA_PREVIEW_CHAPTER}],
    ::slotted(media-preview-chapter-display[${d.MEDIA_PREVIEW_CHAPTER}]) {
      visibility: visible;
    }

    media-preview-chapter-display:not([aria-valuetext]),
    ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
      display: none;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display),
    media-time-display,
    ::slotted(media-time-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--_preview-background));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 3.5px 9px);
      margin: var(--media-preview-time-margin, 0);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50%)
      ));
    }

    :host([${d.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${d.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
      min-width: 100%;
    }

    :host([${d.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }

    [part~="arrow"],
    ::slotted([part~="arrow"]) {
      display: var(--media-box-arrow-display, inline-block);
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
      ));
      
      border-color: transparent;
      border-top-color: var(--media-box-arrow-background, var(--_control-background));
      border-width: var(--media-box-arrow-border-width,
        var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
      border-style: solid;
      justify-content: center;
      height: 0;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-chapter-display></media-preview-chapter-display>
      <media-preview-time-display></media-preview-time-display>
      <slot name="preview-arrow"><div part="arrow"></div></slot>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;let a9=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},a4=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class a8 extends is{constructor(){super(),a0(this,oD),a0(this,oM),a0(this,oO),a0(this,oU),a0(this,oB),a0(this,oV),a0(this,oq),a0(this,o$),a0(this,oy,void 0),a0(this,oT,void 0),a0(this,oA,void 0),a0(this,ok,void 0),a0(this,ow,void 0),a0(this,oS,void 0),a0(this,oI,void 0),a0(this,oR,void 0),a0(this,oC,void 0),a0(this,oN,e=>{this.dragging||(S(e)&&(this.range.valueAsNumber=e),this.updateBar())}),this.container.appendChild(a5.content.cloneNode(!0)),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),a1(this,oA,this.shadowRoot.querySelectorAll('[part~="box"]')),a1(this,ow,this.shadowRoot.querySelector('[part~="preview-box"]')),a1(this,oS,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);a1(this,oI,parseInt(e.getPropertyValue("--media-box-padding-left"))),a1(this,oR,parseInt(e.getPropertyValue("--media-box-padding-right"))),a1(this,oT,new az(this.range,aJ(this,oN),60))}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PAUSED,d.MEDIA_DURATION,d.MEDIA_SEEKABLE,d.MEDIA_CURRENT_TIME,d.MEDIA_PREVIEW_IMAGE,d.MEDIA_PREVIEW_TIME,d.MEDIA_PREVIEW_CHAPTER,d.MEDIA_BUFFERED,d.MEDIA_PLAYBACK_RATE,d.MEDIA_LOADING,d.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",_.SEEK()),a2(this,oD,oL).call(this),a1(this,oy,this.getRootNode()),null==(e=aJ(this,oy))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),a2(this,oD,oL).call(this),null==(e=aJ(this,oy))||e.removeEventListener("transitionstart",this),a1(this,oy,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===d.MEDIA_CURRENT_TIME||e===d.MEDIA_PAUSED||e===d.MEDIA_ENDED||e===d.MEDIA_LOADING||e===d.MEDIA_DURATION||e===d.MEDIA_SEEKABLE?(aJ(this,oT).update({start:a9(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),a2(this,oD,oL).call(this),a3(this)):e===d.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===d.MEDIA_DURATION||e===d.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=aJ(this,oC),this.updateBar()))}get mediaChaptersCues(){return aJ(this,oC)}set mediaChaptersCues(e){var t;a1(this,oC,e),this.updateSegments(null==(t=aJ(this,oC))?void 0:t.map(e=>({start:a9(this,e.startTime),end:a9(this,e.endTime)})))}get mediaPaused(){return ed(this,d.MEDIA_PAUSED)}set mediaPaused(e){eu(this,d.MEDIA_PAUSED,e)}get mediaLoading(){return ed(this,d.MEDIA_LOADING)}set mediaLoading(e){eu(this,d.MEDIA_LOADING,e)}get mediaDuration(){return eo(this,d.MEDIA_DURATION)}set mediaDuration(e){el(this,d.MEDIA_DURATION,e)}get mediaCurrentTime(){return eo(this,d.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){el(this,d.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return eo(this,d.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){el(this,d.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(d.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(d.MEDIA_BUFFERED);return}let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(d.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(d.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(d.MEDIA_SEEKABLE);return}this.setAttribute(d.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return ec(this,d.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){eh(this,d.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return eo(this,d.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){el(this,d.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return ed(this,d.MEDIA_ENDED)}set mediaEnded(e){eu(this,d.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t;let i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=a9(this,r)}let{style:a}=en(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=en(this.shadowRoot,"#current-rail"),t=en(this.shadowRoot,'[part~="current-box"]'),i=a2(this,oO,oP).call(this,aJ(this,oS)),a=a2(this,oU,oW).call(this,i,this.range.valueAsNumber),r=a2(this,oB,oH).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":a2(this,o$,oY).call(this);break;case"pointermove":a2(this,oV,oF).call(this,e);break;case"pointerup":case"pointerleave":a2(this,oq,oK).call(this,null);break;case"transitionstart":J(e.target,this)&&setTimeout(()=>a2(this,oD,oL).call(this),0)}}}oy=new WeakMap,oT=new WeakMap,oA=new WeakMap,ok=new WeakMap,ow=new WeakMap,oS=new WeakMap,oI=new WeakMap,oR=new WeakMap,oC=new WeakMap,oD=new WeakSet,oL=function(){a2(this,oM,ox).call(this)?aJ(this,oT).start():aJ(this,oT).stop()},oM=new WeakSet,ox=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&ea(this)},oN=new WeakMap,oO=new WeakSet,oP=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?ee(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},oU=new WeakSet,oW=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},oB=new WeakSet,oH=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+aJ(this,oI)){let t=e.range.left-e.bounds.left-aJ(this,oI);return`${n-i/2+t}px`}if(n>r-aJ(this,oR)){let t=e.bounds.right-e.range.right-aJ(this,oR);return`${n+i/2-t-e.range.width}px`}return 0},oV=new WeakSet,oF=function(e){let t=[...aJ(this,oA)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this))){a2(this,oq,oK).call(this,null);return}let i=this.mediaSeekableEnd;if(!i)return;let a=en(this.shadowRoot,"#preview-rail"),r=en(this.shadowRoot,'[part~="preview-box"]'),n=a2(this,oO,oP).call(this,aJ(this,ow)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=a2(this,oU,oW).call(this,n,s),l=a2(this,oB,oH).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(aJ(this,ok))-Math.round(s*i))&&s>.01&&s<.99||(a1(this,ok,s*i),a2(this,oq,oK).call(this,aJ(this,ok)))},oq=new WeakSet,oK=function(e){this.dispatchEvent(new V.CustomEvent(n.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},o$=new WeakSet,oY=function(){aJ(this,oT).stop();let e=a4(this);this.dispatchEvent(new V.CustomEvent(n.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},V.customElements.get("media-time-range")||V.customElements.define("media-time-range",a8);let a7="placement",a6="bounds",re=F.createElement("template");re.innerHTML=`
  <style>
    :host {
      --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
      --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
      --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
      --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
      --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
      position: relative;
      pointer-events: none;
      display: var(--media-tooltip-display, inline-flex);
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      z-index: var(--media-tooltip-z-index, 1);
      background: var(--_tooltip-background);
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      font: var(--media-font,
        var(--media-font-weight, 400)
        var(--media-font-size, 13px) /
        var(--media-text-content-height, var(--media-control-height, 18px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      padding: var(--media-tooltip-padding, .35em .7em);
      border: var(--media-tooltip-border, none);
      border-radius: var(--media-tooltip-border-radius, 5px);
      filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
      white-space: var(--media-tooltip-white-space, nowrap);
    }

    :host([hidden]) {
      display: none;
    }

    img, svg {
      display: inline-block;
    }

    #arrow {
      position: absolute;
      width: 0px;
      height: 0px;
      border-style: solid;
      display: var(--media-tooltip-arrow-display, block);
    }

    :host(:not([placement])),
    :host([placement="top"]) {
      position: absolute;
      bottom: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host(:not([placement])) #arrow,
    :host([placement="top"]) #arrow {
      top: 100%;
      left: 50%;
      border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
      border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="right"]) {
      position: absolute;
      left: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="right"]) #arrow {
      top: 50%;
      right: 100%;
      border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
      border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
      transform: translate(0, -50%);
    }

    :host([placement="bottom"]) {
      position: absolute;
      top: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host([placement="bottom"]) #arrow {
      bottom: 100%;
      left: 50%;
      border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
      border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="left"]) {
      position: absolute;
      right: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="left"]) #arrow {
      top: 50%;
      left: 100%;
      border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
      border-color: transparent transparent transparent var(--_tooltip-arrow-background);
      transform: translate(0, -50%);
    }
    
    :host([placement="none"]) #arrow {
      display: none;
    }

  </style>
  <slot></slot>
  <div id="arrow"></div>
`;class rt extends V.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!ea(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t){this.style.removeProperty("--media-tooltip-offset-x");return}let i=getComputedStyle(this),a=null!=(e=ee(this,"#"+this.bounds))?e:G(this);if(!a)return;let{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,h=s-r+d-c,m=s+o-(r+n)+d+c;if(h<0){this.style.setProperty("--media-tooltip-offset-x",`${h}px`);return}if(m>0){this.style.setProperty("--media-tooltip-offset-x",`${m}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(re.content.cloneNode(!0))),this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[a7,a6]}get placement(){return ec(this,a7)}set placement(e){eh(this,a7,e)}get bounds(){return ec(this,a6)}set bounds(e){eh(this,a6,e)}}V.customElements.get("media-tooltip")||V.customElements.define("media-tooltip",rt);let ri=e=>e.mediaMuted?0:e.mediaVolume,ra=e=>`${Math.round(100*e)}%`;class rr extends is{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_VOLUME,d.MEDIA_MUTED,d.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new V.CustomEvent(n.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",_.VOLUME())}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===d.MEDIA_VOLUME||e===d.MEDIA_MUTED)&&(this.range.valueAsNumber=ri(this),this.range.setAttribute("aria-valuetext",ra(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return eo(this,d.MEDIA_VOLUME,1)}set mediaVolume(e){el(this,d.MEDIA_VOLUME,e)}get mediaMuted(){return ed(this,d.MEDIA_MUTED)}set mediaMuted(e){eu(this,d.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return ec(this,d.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){eh(this,d.MEDIA_VOLUME_UNAVAILABLE,e)}}V.customElements.get("media-volume-range")||V.customElements.define("media-volume-range",rr);var rn=Object.create,rs=Object.defineProperty,ro=Object.getOwnPropertyDescriptor,rl=Object.getOwnPropertyNames,rd=Object.getPrototypeOf,ru=Object.prototype.hasOwnProperty,rc=function(e,t){return function(){return e&&(t=e(e=0)),t}},rh=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},rm=function(e,t,i,a){if(t&&"object"==typeof t||"function"==typeof t)for(var r,n=rl(t),s=0,o=n.length;s<o;s++)r=n[s],ru.call(e,r)||r===i||rs(e,r,{get:(function(e){return t[e]}).bind(null,r),enumerable:!(a=ro(t,r))||a.enumerable});return e},rp=function(e,t,i){return i=null!=e?rn(rd(e)):{},rm(!t&&e&&e.__esModule?i:rs(i,"default",{value:e,enumerable:!0}),e)},rv=rh(function(e,t){var i;"undefined"!=typeof window?i=window:"undefined"!=typeof global?i=global:"undefined"!=typeof self?i=self:i={},t.exports=i});function rE(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):rE(e,t)}var rb=rc(function(){rb()});function rf(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var rg=rc(function(){}),r_=rh(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),ry=rh(function(e,t){function i(e,t){if(!rE(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}rb(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),rT=rh(function(e,t){function i(e,t){if(!rE(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}rb(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),rA=rh(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),rk=rh(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),rw=rh(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),rS=rh(function(e,t){rg(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"<!--"+t.data+"-->";default:var n,s;return n=[],s=t.tagName,"http://www.w3.org/1999/xhtml"===t.namespaceURI&&(s=s.toLowerCase()),n.push("<"+s+function(e){var t=[];for(var i in e)(function(e,t){var i=rf(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(t)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(t)),i.indexOf(s)>-1?n.push(" />"):(n.push(">"),t.childNodes.length?n.push.apply(n,t.childNodes.map(e)):t.textContent||t.innerText?n.push(r(t.textContent||t.innerText)):t.innerHTML&&n.push(t.innerHTML),n.push("</"+s+">")),n.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),rI=rh(function(e,t){rb();var i=r_(),a=rA(),r=rk(),n=rw(),s=rS(),o="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!rE(this,l))return new l(e);var a=void 0===i?o:i||null;this.tagName=a===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),rR=rh(function(e,t){rb();var i=rI();function a(e){if(!rE(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),rC=rh(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),rD=rh(function(e,t){rb();var i=r_(),a=ry(),r=rT(),n=rI(),s=rR(),o=rC(),l=rA(),d=rk(),u=rw();function c(){if(!rE(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),rL=rh(function(e,t){var i=rD();t.exports=new i}),rM=rh(function(e,t){var i,a="undefined"!=typeof global?global:"undefined"!=typeof window?window:{},r=rL();"undefined"!=typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=r),t.exports=i});function rx(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function rN(e,t){if(e){if("string"==typeof e)return rx(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return rx(e,t)}}function rO(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||rN(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var rP=rp(rv()),rU=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},rW=function(){return("000000"+(2176782336*Math.random()<<0).toString(36)).slice(-6)},rB=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=rW()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},rH=function(e){e&&void 0!==e.nodeName?e=rB(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]};function rV(e){return function(e){if(Array.isArray(e))return rx(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||rN(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var rF={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},rq=function(e){var t,i,a,r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=e?[console,e]:[console],l=(t=console.trace).bind.apply(t,rV(o)),d=(i=console.info).bind.apply(i,rV(o)),u=(a=console.debug).bind.apply(a,rV(o)),c=(r=console.warn).bind.apply(r,rV(o)),h=(n=console.error).bind.apply(n,rV(o)),m=s;return{trace:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>rF.TRACE))return l.apply(void 0,rV(t))},debug:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>rF.DEBUG))return u.apply(void 0,rV(t))},info:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>rF.INFO))return d.apply(void 0,rV(t))},warn:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>rF.WARN))return c.apply(void 0,rV(t))},error:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>rF.ERROR))return h.apply(void 0,rV(t))},get level(){return m},set level(p){p!==this.level&&(m=null!=p?p:s)}}}("[mux]"),rK=rp(rv());function r$(){return"1"===(rK.default.doNotTrack||rK.default.navigator&&rK.default.navigator.doNotTrack)}var rY=rp(rv()),rj={now:function(){var e=rY.default.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())}};function rG(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rQ(e,t){if(!rE(e,t))throw TypeError("Cannot call a class as a function")}function rZ(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function rz(e,t,i){return t&&rZ(e.prototype,t),i&&rZ(e,i),e}function rX(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function rJ(e){return(rJ=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r0(e,t,i){return(r0="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=rJ(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(i||e):r.value}})(e,t,i||e)}function r1(e,t){return(r1=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}rb(),rg();var r2=function(e){return r3(e)[0]},r3=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},r5=rp(rv()),r9={exists:function(){var e=r5.default.performance;return void 0!==(e&&e.timing)},domContentLoadedEventEnd:function(){var e=r5.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=r5.default.performance,t=e&&e.timing;return t&&t.navigationStart}};function r4(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function r8(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){rX(e,t,i[t])})}return e}function r7(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i.push.apply(i,a)}return i})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var r6=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],ne=["x-cdn","content-type"].concat(r6);function nt(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(ne.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function ni(e){if(e){var t=r6.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var na=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},nr=function(e){if(!e)return{};var t=r9.navigationStart(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},nn=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return nt(e.getAllResponseHeaders())},ns=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!r9.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=nr(n),h=c.bytesLoaded,m=c.requestStart,v=c.responseStart,E=c.responseEnd;o("requestcompleted",r7(r8({},na(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:v,request_response_end:E,request_type:"manifest",request_hostname:r2(r),request_response_headers:nn(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=nr(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],v=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:r2(i.url),request_response_headers:nn(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(v)?void 0:v})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=nr(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:r2(i.url),request_response_headers:nn(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,s=nr(a=a||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?nn(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?r2(r.responseURL):void 0,request_id:h?ni(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;o("fragmentchange",{currentFragmentPDT:s(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?nn(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:r2(c),request_id:h?ni(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null===(i=t.err)||void 0===i?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var v=function(e,t){var i=t.frag,a=i&&i._url||"";o("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:r2(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v);var E=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,E),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v),i.off(a.Events.LEVEL_SWITCHED,E),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},no=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},nl=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=r2(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=nt(u[u.length-1]._responseHeaders||""));var c=i?ni(i):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},nd=function(e,t){var i=t.getQualityFor(e),a=t.getCurrentTrackFor(e).bitrateList;return a?{currentLevel:i,renditionWidth:a[i].width||null,renditionHeight:a[i].height||null,renditionBitrate:a[i].bandwidth}:{}},nu=function(e){var t;return null===(t=e.match(/.*codecs\*?="(.*)"/))||void 0===t?void 0:t[1]},nc=function(e){try{var t,i;return null===(i=e.getVersion)||void 0===i||null===(t=i.call(e))||void 0===t?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},nh=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=nc(i),n=function(i,a){return e.emit(t,i,a)},s=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:r2(i),request_url:i})};i.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,s=(a||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=nl(r,i),h=c.requestStart,m=c.requestResponseStart,v=c.requestResponseEnd,E=c.requestResponseHeaders,b=c.requestMediaDuration,f=c.requestHostname,g=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:v,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:E,request_hostname:f,request_id:c.requestId,request_url:g,request_media_duration:b,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,s=a||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=nl(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,v=u.requestBytesLoaded,E=u.requestResponseHeaders,b=u.requestMediaDuration,f=u.requestHostname,g=u.requestUrl,_=u.requestId,y=nd(d,i),T=y.currentLevel,A=y.renditionWidth,k=y.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:v,request_type:d,request_response_headers:E,request_hostname:f,request_id:_,request_url:g,request_media_start_time:l,request_media_duration:b,request_current_level:T,request_labeled_bitrate:y.renditionBitrate,request_video_width:A,request_video_height:k})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height)){a.warn("have bitrate info for video but missing width/height");return}var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:nu(c.video.codec)}}},m=function(e,t,r){if("number"!=typeof e.newQuality){a.warn("missing evt.newQuality in qualityChangeRendered event",e);return}var s=e.mediaType;if("audio"===s||"video"===s){var o=i.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality});if(!(o&&"number"==typeof o.bitrate)){a.warn("missing bitrate info for ".concat(s));return}c[s]=r7(r8({},o),{codec:i.getCurrentTrackFor(s).codec});var l=h();l&&n("renditionchange",l)}};i.on("qualityChangeRendered",m);var v=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:r2(t.url)})};i.on("fragmentLoadingAbandoned",v);var E=function(e){var t,i,a=e.error,r=(null==a||null===(t=a.data)||void 0===t?void 0:t.request)||{},s=(null==a||null===(i=a.data)||void 0===i?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:r2(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:o})};i.on("error",E),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",E),i.off("fragmentLoadingAbandoned",v),delete i._stopMuxMonitor}},nm=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},np=0,nv=function(){function e(){rQ(this,e),rX(this,"_listeners",void 0)}return rz(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++np,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++np;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before*"]||[],r=this._listeners[e]||[],n=this._listeners["after"+e]||[],s=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};s(a,t),s(r,t),s(n,t)}}}]),e}(),nE=rp(rv()),nb=function(){function e(t){var i=this;rQ(this,e),rX(this,"_playbackHeartbeatInterval",void 0),rX(this,"_playheadShouldBeProgressing",void 0),rX(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(nE.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return rz(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=nE.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(nE.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),nf=function e(t){var i=this;rQ(this,e),rX(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null===(e=t.data)||void 0===e||delete e.player_error_code,null===(i=t.data)||void 0===i||delete i.player_error_message,null===(a=t.data)||void 0===a||delete a.player_error_context,null===(r=t.data)||void 0===r||delete r.player_error_severity,null===(n=t.data)||void 0===n||delete n.player_error_business_exception})},ng=function(){function e(t){rQ(this,e),rX(this,"_watchTimeTrackerLastCheckedTime",void 0),rX(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return rz(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),r4(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),n_=function(){function e(t){var i=this;rQ(this,e),rX(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),rX(this,"_lastTime",void 0),rX(this,"_isAdPlaying",void 0),rX(this,"_callbackUpdatePlaybackTime",void 0),rX(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=rj.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a),t.on("seeked",a);var r=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",r),t.on("seeking",r),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=rj.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return rz(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time,t=rj.now(),i=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?i=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(i=t-this._lastTime),i>0&&i<=1e3&&r4(this.pm.data,"view_content_playback_time",i),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),ny=function(){function e(t){rQ(this,e),rX(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return rz(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),nT=function e(t){if(rQ(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;r4(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(r4(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},nA=function(){function e(t){var i=this;rQ(this,e),rX(this,"_lastCheckedTime",void 0),rX(this,"_lastPlayheadTime",void 0),rX(this,"_lastPlayheadTimeUpdatedTime",void 0),rX(this,"_rebuffering",void 0),rX(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:rj.now()})}))}return rz(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(e,t);return}if(null===this._lastCheckedTime){this._prepareRebufferTrackerState(t.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(e,t,!0);return}var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),nk=function(){function e(t){var i=this;rQ(this,e),rX(this,"NAVIGATION_START",void 0),rX(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||rj.now(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||rj.now(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return rz(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),e}(),nw=function e(t){var i=this;rQ(this,e),rX(this,"_lastPlayerHeight",void 0),rX(this,"_lastPlayerWidth",void 0),rX(this,"_lastPlayheadPosition",void 0),rX(this,"_lastSourceHeight",void 0),rX(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),r4(t.data,"view_total_content_playback_time",e),r4(t.data,"view_total_upscaling",r*e),r4(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},nS=function e(t){var i=this;rQ(this,e),rX(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=rj.now(),r=(t.data.viewer_time||e)-(a||e);r4(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,r4(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},nI=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},nR=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],nC=function(){function e(t){var i=this;rQ(this,e),rX(this,"_adHasPlayed",void 0),rX(this,"_adRequests",void 0),rX(this,"_adResponses",void 0),rX(this,"_currentAdRequestNumber",void 0),rX(this,"_currentAdResponseNumber",void 0),rX(this,"_prerollPlayTime",void 0),rX(this,"_wouldBeNewAdPlay",void 0),rX(this,"isAdBreak",void 0),rX(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),nR.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),nI(i._adRequests,a),r4(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||r4(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),nI(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&r4(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,r4(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||r4(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||r4(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return rz(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=rO(r3(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=rO(r3(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id}}]),e}(),nD=rp(rv()),nL=function e(t){rQ(this,e);var i,a,r=function(){t.disableRebufferTracking||(r4(t.data,"view_waiting_rebuffer_count",1),i=rj.now(),a=nD.default.setInterval(function(){if(i){var e=rj.now();r4(t.data,"view_waiting_rebuffer_duration",e-i),i=e}},250))},n=function(){t.disableRebufferTracking||i&&(r4(t.data,"view_waiting_rebuffer_duration",rj.now()-i),i=!1,nD.default.clearInterval(a))},s=!1,o=function(){s=!0},l=function(){s=!1,n()};t.on("waiting",function(){s&&r()}),t.on("playing",function(){n(),o()}),t.on("pause",l),t.on("seeking",l)},nM=function e(t){var i=this;rQ(this,e),rX(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=rj.now(),t.on("before*",r)},r=function(e){var a=rj.now(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},nx=rp(rv()),nN=(nz=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t},function e(t){function i(e,a,r){var n;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(r=nz({path:"/"},i.defaults,r)).expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*r.expires),r.expires=s}try{n=JSON.stringify(a),/^[\{\[]/.test(n)&&(a=n)}catch(e){}return a=t.write?t.write(a,e):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[e,"=",a,r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("")}e||(n={});for(var o=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,d=0;d<o.length;d++){var u=o[d].split("="),c=u.slice(1).join("=");'"'===c.charAt(0)&&(c=c.slice(1,-1));try{var h=u[0].replace(l,decodeURIComponent);if(c=t.read?t.read(c,h):t(c,h)||c.replace(l,decodeURIComponent),this.json)try{c=JSON.parse(c)}catch(e){}if(e===h){n=c;break}e||(n[h]=c)}catch(e){}}return n}}return i.set=i,i.get=function(e){return i.call(i,e)},i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(e,t){i(e,"",nz(t,{expires:-1}))},i.withConverter=e,i}(function(){})),nO="muxData",nP=function(){var e;try{e=(nN.get(nO)||"").split("&").reduce(function(e,t){var i=rO(t.split("="),2),a=i[0],r=i[1],n=+r;return e[a]=r&&n==r?n:r,e},{})}catch(t){e={}}return e},nU=function(e){try{nN.set(nO,Object.entries(e).map(function(e){var t=rO(e,2),i=t[0],a=t[1];return"".concat(i,"=").concat(a)}).join("&"),{expires:365})}catch(e){}},nW=function(){var e=nP();return e.mux_viewer_id=e.mux_viewer_id||rU(),e.msn=e.msn||Math.random(),nU(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},nB=function(){var e=nP(),t=rj.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=rU(),e.sst=t),e.sex=t+15e5,nU(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},nH=rp(rv()),nV=function(){var e;switch(nF()){case"cellular":e="cellular";break;case"ethernet":e="wired";break;case"wifi":e="wifi";break;case void 0:break;default:e="other"}return e},nF=function(){var e=nH.default.navigator,t=e&&(e.connection||e.mozConnection||e.webkitConnection);return t&&t.type};nV.getConnectionFromAPI=nF;var nq=n$({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),nK=n$({ad:"ad",ag:"aggregate",ap:"api",al:"application",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cr:"creative",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pr:"preload",ps:"position",pt:"part",py:"property",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function n$(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function nY(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),s=n[0],o=nq[s];o||(rq.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),nK[e]?o+=nK[e]:Number(e)&&Math.floor(Number(e))===Number(e)?o+=e:(rq.info("Data key word `"+e+"` not expected in "+a),o+="_"+e+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var nj=rp(rv()),nG={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},nQ=["hb","requestcompleted","requestfailed","requestcanceled"],nZ=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},nG,t)};nZ.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},nZ.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&1===this._eventQueue.length){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()},nZ.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),nj.default.clearTimeout(this._sendTimeout)},nZ.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],nY({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);oG(this._beaconUrl,i,!0,function(){})},nZ.prototype._sendBeaconQueue=function(){var e=this;if(!this._postInFlight){var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=rj.now();oG(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,rq.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=rj.now()-a,e._postInFlight=!1})}},nZ.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},nZ.prototype._startBeaconSending=function(){var e=this;nj.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=nj.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},nZ.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(rj.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(rq.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===nQ.indexOf(e.e)}),s()),o()||(rq.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),s()),a};var nz,nX,nJ,n0,n1,n2,n3,n5,n9,n4,n8,n7,n6,se,st,si,sa,sr,sn,ss,so,sl,sd,su,sc,sh,sm,sp,sv,sE,sb,sf,sg,s_,sy,sT,sA,sk,sw,sS,sI,sR,sC,sD,sL,sM,sx,sN,sO,sP,sU,sW,sB,sH,sV,sF,sq,sK,s$,sY,sj,sG,sQ,sZ,sz,sX,sJ,s0,s1,s2,s3,s5,s9,s4,s8,s7,s6,oe,ot,oi,oa,or,on,os,oo,ol,od,ou,oc,oh,om,op,ov,oE,ob,of,og,o_,oy,oT,oA,ok,ow,oS,oI,oR,oC,oD,oL,oM,ox,oN,oO,oP,oU,oW,oB,oH,oV,oF,oq,oK,o$,oY,oj,oG=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t)){a();return}if(nj.default.fetch){nj.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:t.length<=57344}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});return}if(nj.default.XMLHttpRequest){var r=new nj.default.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},oQ=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception"],oZ=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],oz=["ad_id","ad_creative_id","ad_universal_id"],oX=["viewstart","error","ended","viewend"],oJ=function(){function e(t,i){var a,r,n,s,o,l,d,u,c,h,m,v,E,b,f,g,_,y,T,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};rQ(this,e),rX(this,"mux",void 0),rX(this,"envKey",void 0),rX(this,"options",void 0),rX(this,"eventQueue",void 0),rX(this,"sampleRate",void 0),rX(this,"disableCookies",void 0),rX(this,"respectDoNotTrack",void 0),rX(this,"previousBeaconData",void 0),rX(this,"lastEventTime",void 0),rX(this,"rateLimited",void 0),rX(this,"pageLevelData",void 0),rX(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=A,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new nZ((a=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?"https://"+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!==(_=this.options.sampleRate)&&void 0!==_?_:1,this.disableCookies=null!==(y=this.options.disableCookies)&&void 0!==y&&y,this.respectDoNotTrack=null!==(T=this.options.respectDoNotTrack)&&void 0!==T&&T,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null===(o=this.options.platform)||void 0===o?void 0:o.name,viewer_application_version:null===(l=this.options.platform)||void 0===l?void 0:l.version,viewer_application_engine:null===(d=this.options.platform)||void 0===d?void 0:d.layout,viewer_device_name:null===(u=this.options.platform)||void 0===u?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null===(c=this.options.platform)||void 0===c?void 0:c.manufacturer,viewer_os_family:null===(m=this.options.platform)||void 0===m||null===(h=m.os)||void 0===h?void 0:h.family,viewer_os_architecture:null===(E=this.options.platform)||void 0===E||null===(v=E.os)||void 0===v?void 0:v.architecture,viewer_os_version:null===(f=this.options.platform)||void 0===f||null===(b=f.os)||void 0===b?void 0:b.version,viewer_connection_type:nV(),page_url:null===nx.default||void 0===nx.default||null===(g=nx.default.location)||void 0===g?void 0:g.href},this.viewerData=this.disableCookies?{}:nW()}return rz(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&r$())return rq.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return rq.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:nB(),a=r7(r8({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!==(r=a.mux_sample_number)&&void 0!==r?r:0)>=this.sampleRate,s=nY(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return rq.info("Not sending event due to sample rate restriction",e,a,s);if(this.envKey||rq.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,s),!this.rateLimited){if(rq.info("Sending event",e,a,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&"hb"===e?this.eventQueue.flushEvents(!0):oX.indexOf(e)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return a.event="eventrateexceeded",s=nY(a),this.eventQueue.queueEvent(a.event,s),rq.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=r8({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=rO(t,2),s=r[0],o=r[1];i.previousBeaconData&&(o!==i.previousBeaconData[s]||oQ.indexOf(s)>-1||i.objectHasChanged(n,s,o,i.previousBeaconData[s])||i.eventRequiresKey(e,s))&&(a[s]=o,i.previousBeaconData[s]=o)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return!!("renditionchange"===e&&0===t.indexOf("video_source_")||oz.includes(t)&&oZ.includes(e))}}]),e}(),o0=function e(t){rQ(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var v=m/d*8e3;s++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,v),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/s)}}),t.on("requestfailed",function(e,i){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},o1=function e(t){var i=this;rQ(this,e),rX(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=rj.now(),s=i._lastEventTime;if(i._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,rX({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var l=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing=l,t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})},o2=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],o3=new Set(["requestcompleted","requestfailed","requestcanceled"]),o5=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r1(e,t)}(a,e);var t,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=rJ(a);return e=t?Reflect.construct(i,arguments,rJ(this).constructor):i.apply(this,arguments),e&&("object"===rf(e)||"function"==typeof e)?e:rG(this)});function a(e,t,r){rQ(this,a),rX(rG(n=i.call(this)),"DOM_CONTENT_LOADED_EVENT_END",void 0),rX(rG(n),"NAVIGATION_START",void 0),rX(rG(n),"_destroyed",void 0),rX(rG(n),"_heartBeatTimeout",void 0),rX(rG(n),"adTracker",void 0),rX(rG(n),"dashjs",void 0),rX(rG(n),"data",void 0),rX(rG(n),"disablePlayheadRebufferTracking",void 0),rX(rG(n),"disableRebufferTracking",void 0),rX(rG(n),"errorTracker",void 0),rX(rG(n),"errorTranslator",void 0),rX(rG(n),"emitTranslator",void 0),rX(rG(n),"getAdData",void 0),rX(rG(n),"getPlayheadTime",void 0),rX(rG(n),"getStateData",void 0),rX(rG(n),"stateDataTranslator",void 0),rX(rG(n),"hlsjs",void 0),rX(rG(n),"id",void 0),rX(rG(n),"longResumeTracker",void 0),rX(rG(n),"minimumRebufferDuration",void 0),rX(rG(n),"mux",void 0),rX(rG(n),"playbackEventDispatcher",void 0),rX(rG(n),"playbackHeartbeat",void 0),rX(rG(n),"playbackHeartbeatTime",void 0),rX(rG(n),"playheadTime",void 0),rX(rG(n),"seekingTracker",void 0),rX(rG(n),"sustainedRebufferThreshold",void 0),rX(rG(n),"watchTimeTracker",void 0),rX(rG(n),"currentFragmentPDT",void 0),rX(rG(n),"currentFragmentStart",void 0),n.DOM_CONTENT_LOADED_EVENT_END=r9.domContentLoadedEventEnd(),n.NAVIGATION_START=r9.navigationStart(),n.mux=e,n.id=t,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(e){return e},emitTranslator:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t},stateDataTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),rq.level=r.debug?rF.DEBUG:rF.WARN,n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.errorTranslator=r.errorTranslator,n.emitTranslator=r.emitTranslator,n.stateDataTranslator=r.stateDataTranslator,n.playbackEventDispatcher=new oJ(e,r.data.env_key,r),n.data={player_instance_id:rU(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1;var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind(rG(n));if(n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)}),n.on("videochange",function(e,t){this._resetView(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"undefined"!=typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var o=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",o,!1);var l=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",l,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("pagehide",l)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),o2.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new o1(rG(n)),n.errorTracker=new nf(rG(n)),new nM(rG(n)),n.seekingTracker=new nS(rG(n)),n.playheadTime=new ny(rG(n)),n.playbackHeartbeat=new nb(rG(n)),new nw(rG(n)),n.watchTimeTracker=new ng(rG(n)),new n_(rG(n)),n.adTracker=new nC(rG(n)),new nA(rG(n)),new nT(rG(n)),new nk(rG(n)),new nL(rG(n)),new o0(rG(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return rz(a,[{key:"emit",value:function(e,t){var i,r=Object.assign({viewer_time:this.mux.utils.now()},t),n=[e,r];if(this.emitTranslator)try{n=this.emitTranslator(e,r)}catch(e){this.mux.log.warn("Exception in emit translator callback.",e)}null!=n&&n.length&&(i=r0(rJ(a.prototype),"emit",this)).call.apply(i,[this].concat(rV(n)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=rO(r3(t.video_source_url),2),a=i[0],r=i[1];t.video_source_domain=r,t.video_source_hostname=a}delete t.ad_request_id,this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,o3.has(e)||this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_resetView",value:function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}},{key:"_updateStateData",value:function(){var e=this.getStateData();if("function"==typeof this.stateDataTranslator)try{e=this.stateDataTranslator(e)}catch(e){this.mux.log.warn("Exception in stateDataTranslator translator callback.",e)}Object.assign(this.data,e),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=rU(),i=function(){t===e.data.view_id&&r4(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){if(!e.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=e.hlsjs,ns(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(no(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){if(!e.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=e.dashjs,nh(this.mux,this.id,e.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(nm(this.dashjs),this.dashjs=void 0)}}]),a}(nv),o9=rp(rM()),o4=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],o8={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},o7=rp(rv());o7.default&&o7.default.WeakMap&&(oj=new WeakMap);var o6={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},le=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};le.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},le.prototype.processLine=function(e){var t=e.indexOf(":"),i=lo(e,t),a=i[0],r=2===i.length?la(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case o6.TARGET_DURATION:if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case o6.PART_INF:lt(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case o6.SERVER_CONTROL:lt(this.manifest,i),this.setHoldBack();break;case o6.INF:0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case o6.PROGRAM_DATE_TIME:var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case o6.VERSION:lt(this.manifest,i);break;case o6.SESSION_DATA:var s=na(ll(i[1]));Object.assign(this.manifest.sessionData,s)}},le.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&3*i,o=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<o&&(t[n]=o)}};var lt=function(e,t){var i,a=li(t[0].replace("#EXT-X-",""));ls(t[1])?(i={},i=Object.assign(ln(t[1]),i)):i=la(t[1]),e[a]=i},li=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},la=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},lr=function(e){var t={},i=e.split("=");return i.length>1&&(t[li(i[0])]=la(i[1])),t},ln=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(lr(t[a]),i);return i},ls=function(e){return e.indexOf("=")>-1},lo=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},ll=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},ld={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){rq.info("safeCall error",e)}return r},safeIncrement:r4,getComputedStyle:function(e,t){var i;return e&&t&&o7.default&&"function"==typeof o7.default.getComputedStyle?(oj&&oj.has(e)&&(i=oj.get(e)),i||(i=o7.default.getComputedStyle(e,null),oj&&oj.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:nt,cdnHeadersToRequestId:ni,extractHostnameAndDomain:r3,extractHostname:r2,manifestParser:le,generateShortID:rW,generateUUID:rU,now:rj.now,findMediaElement:rH},lu={},lc=function(e){var t=arguments;"string"==typeof e?lc.hasOwnProperty(e)?rP.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),lc[e].apply(null,t)},0):rq.warn("`"+e+"` is an unknown task"):"function"==typeof e?rP.default.setTimeout(function(){e(lc)},0):rq.warn("`"+e+"` is invalid.")},lh={loaded:rj.now(),NAME:"mux-embed",VERSION:"5.4.3",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=rO(rH(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i,{getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var e,t,i=(null===(e=this.getPlayheadTime)||void 0===e?void 0:e.call(this))||d(r.currentTime),a=this.hlsjs&&this.hlsjs.url,n=this.dashjs&&"function"==typeof this.dashjs.getSource&&this.dashjs.getSource(),s={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:o9.default&&!!(o9.default.fullscreenElement||o9.default.webkitFullscreenElement||o9.default.mozFullScreenElement||o9.default.msFullscreenElement),video_poster_url:r.poster,video_source_url:a||n||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null===(t=r.getVideoPlaybackQuality)||void 0===t?void 0:t.call(r).droppedVideoFrames};if(r.getStartDate&&i>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();if(s.player_program_time=u+i,r.seekable.length>0){var c=u+r.seekable.end(r.seekable.length-1);s.player_live_edge_program_time=c}}}return s}})).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)},r.mux.updateData=function(e){r.mux.emit("hb",e)};var u=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.destroy=u,r.mux.swapElement=u,r.mux.emit=u,r.mux.addHLSJS=u,r.mux.addDashJS=u,r.mux.removeHLSJS=u,r.mux.removeDashJS=u,r.mux.updateData=u,r.mux.setEmitTranslator=u,r.mux.setStateDataTranslator=u,r.mux.setGetPlayheadTime=u,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=rO(rH(t),3),a=i[0],n=i[1],s=i[2];return a?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(t){e.setEmitTranslator(n,t)},r.mux.setStateDataTranslator=function(t){e.setStateDataTranslator(n,t)},r.mux.setGetPlayheadTime=function(t){t||(t=i.getPlayheadTime),e.setGetPlayheadTime(n,t)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},o4.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=o8[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))})}(lc,e,t)},destroyMonitor:function(e){var t=rO(rH(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():rq.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=rB(e);lu[i]?lu[i].addHLSJS(t):rq.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=rB(e);lu[i]?lu[i].addDashJS(t):rq.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=rB(e);lu[t]?lu[t].removeHLSJS():rq.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=rB(e);lu[t]?lu[t].removeDashJS():rq.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){r$()&&t&&t.respectDoNotTrack&&rq.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=rB(e);lu[i]=new o5(lc,i,t)},emit:function(e,t,i){var a=rB(e);lu[a]?(lu[a].emit(t,i),"destroy"===t&&delete lu[a]):rq.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(e,t){var i=rB(e);lu[i]?lu[i].emit("hb",t):rq.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(e,t){var i=rB(e);lu[i]?lu[i].emitTranslator=t:rq.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(e,t){var i=rB(e);lu[i]?lu[i].stateDataTranslator=t:rq.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var i=rB(e);lu[i]?lu[i].getPlayheadTime=t:rq.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:r$,log:rq,utils:ld,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(lc,lh),void 0!==rP.default&&"function"==typeof rP.default.addEventListener&&rP.default.addEventListener("pagehide",function(e){e.persisted||(lc.WINDOW_UNLOADING=!0)},!1);/*!
* JavaScript Cookie v2.1.3
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/var lm=i(3915),lp=lm.ZP,lv={VIDEO:"video",DRM:"drm"},lE={NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},lb=e=>e===lv.VIDEO?"playback":e,lf=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};lf.MEDIA_ERR_ABORTED=1,lf.MEDIA_ERR_NETWORK=2,lf.MEDIA_ERR_DECODE=3,lf.MEDIA_ERR_SRC_NOT_SUPPORTED=4,lf.MEDIA_ERR_ENCRYPTED=5,lf.MEDIA_ERR_CUSTOM=100,lf.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var lg=e=>null==e,l_=(e,t)=>!lg(t)&&e in t,ly={ANY:"any",MUTED:"muted"},lT={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},lA={MSE:"mse",NATIVE:"native"},lk={HEADER:"header",QUERY:"query",NONE:"none"},lw=Object.values(lk),lS={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},lI={HLS:lS.M3U8};Object.keys(lI),[...Object.values(lS)];var lR={code:"en"},lC=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},lD=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},lL=e=>{let t=e.type;if(t){let e=t.toUpperCase();return l_(e,lI)?lI[e]:t}let{src:i}=e;return i?lN(i):""},lM=e=>"VOD"===e?lT.ON_DEMAND:lT.LIVE,lx=e=>"EVENT"===e?Number.POSITIVE_INFINITY:"VOD"===e?Number.NaN:0,lN=e=>{let t="";try{t=new URL(e).pathname}catch{console.error("invalid url")}let i=t.lastIndexOf(".");if(i<0)return"";let a=t.slice(i+1).toUpperCase();return l_(a,lS)?lS[a]:""},lO=e=>{let t=(null!=e?e:"").split(".")[1];if(t)try{let e=t.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return}},lP=({exp:e},t=Date.now())=>!e||1e3*e<t,lU=({sub:e},t)=>e!==t,lW=({aud:e},t)=>!e,lB=({aud:e},t)=>e!==t;function lH(e,t=!0){var i;return new lV(t&&null!=(i=null==lR?void 0:lR[e])?i:e,t?lR.code:"en")}var lV=class{constructor(e,t=(e=>null!=(e=lR)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}},lF=Object.values(ly),lq=e=>"boolean"==typeof e||"string"==typeof e&&lF.includes(e),lK=(e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=lq(a)?a:!!a,o=()=>{r||lC(t,"playing",()=>{r=!0},{once:!0})};if(o(),lC(t,"loadstart",()=>{r=!1,o(),l$(t,s)},{once:!0}),lC(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==lT.UNKNOWN?e.streamType===lT.LIVE:!Number.isFinite(t.duration)),l$(t,s)},{once:!0}),i&&i.once(lp.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==lT.UNKNOWN?e.streamType===lT.LIVE:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&lC(t,"play",()=>{"metadata"===t.preload?i.once(lp.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||l$(t,s=lq(e)?e:!!e)}},l$=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case ly.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case ly.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},lY=({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return lC(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d},lj=e=>"time"in e?e.time:e.startTime;function lG(e,t,i,a,r,n){let s=document.createElement("track");return s.kind=t,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function lQ(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}async function lZ(e,t,i,a){let r=lQ(e,i,a);return r||((r=lG(e,a,i)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==r.mode&&(r.mode="hidden"),[...t].sort((e,t)=>lj(t)-lj(e)).forEach(t=>{var i,n;let s=t.value,o=lj(t);if("endTime"in t&&null!=t.endTime)null==r||r.addCue(new VTTCue(o,t.endTime,"chapters"===a?s:JSON.stringify(null!=s?s:null)));else{let t=Array.prototype.findIndex.call(null==r?void 0:r.cues,e=>e.startTime>=o),l=null==(i=null==r?void 0:r.cues)?void 0:i[t],d=l?l.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==r?void 0:r.cues)?void 0:n[t-1];u&&(u.endTime=o),null==r||r.addCue(new VTTCue(o,d,"chapters"===a?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var lz="cuepoints",lX=Object.freeze({label:lz});async function lJ(e,t,i=lX){return lZ(e,t,i.label,"metadata")}var l0=e=>({time:e.startTime,value:JSON.parse(e.text)});function l1(e,t={label:lz}){var i,a;let r=lQ(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return l0(r.activeCues[0]);let{currentTime:n}=e;return l0(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function l2(e,t=lX){return new Promise(i=>{lC(e,"loadstart",async()=>{let a=await lJ(e,[],t);lC(e,"cuechange",()=>{let t=l1(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var l3="chapters",l5=Object.freeze({label:l3}),l9=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function l4(e,t,i=l5){return lZ(e,t,i.label,"chapters")}function l8(e,t={label:l3}){var i,a;let r=lQ(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return l9(r.activeCues[0]);let{currentTime:n}=e;return l9(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function l7(e,t=l5){return new Promise(i=>{lC(e,"loadstart",async()=>{let a=await l4(e,[],t);lC(e,"cuechange",()=>{let t=l8(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var l6,de,dt,di,da,dr,dn={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},ds=e=>e===lv.VIDEO?dn.VIDEO:e===lv.DRM?dn.DRM:void 0,dl=(e,t)=>{var i,a;let r=lb(e),n=`${r}Token`;return null!=(i=t.tokens)&&i[r]?null==(a=t.tokens)?void 0:a[r]:l_(n,t)?t[n]:void 0},dd=(e,t,i,a=!1,r=!(e=>null==(e=globalThis.navigator)?void 0:e.onLine)())=>{var n,s;if(r){let i=lH("Your device appears to be offline",a),r=lf.MEDIA_ERR_NETWORK,n=new lf(i,r,!0,void 0);return n.errorCategory=t,n.muxCode=lE.NETWORK_OFFLINE,n.data=e,n}let o="status"in e?e.status:e.code,l=Date.now(),d=lf.MEDIA_ERR_NETWORK;if(200===o)return;let u=lb(t),c=dl(t,i),h=ds(t),[m]=lD(null!=(n=i.playbackId)?n:"");if(!o||!m)return;let v=lO(c);if(c&&!v){let i=new lf(lH("The {tokenNamePrefix}-token provided is invalid or malformed.",a).format({tokenNamePrefix:u}),d,!0,lH("Compact JWT string: {token}",a).format({token:c}));return i.errorCategory=t,i.muxCode=lE.NETWORK_TOKEN_MALFORMED,i.data=e,i}if(o>=500){let e=new lf("",d,!0);return e.errorCategory=t,e.muxCode=lE.NETWORK_UNKNOWN_ERROR,e}if(403===o){if(v){if(lP(v,l)){let i={timeStyle:"medium",dateStyle:"medium"},r=new lf(lH("The video’s secured {tokenNamePrefix}-token has expired.",a).format({tokenNamePrefix:u}),d,!0,lH("Expired at: {expiredDate}. Current time: {currentDate}.",a).format({expiredDate:new Intl.DateTimeFormat("en",i).format(null!=(s=v.exp)?s:0),currentDate:new Intl.DateTimeFormat("en",i).format(l)}));return r.errorCategory=t,r.muxCode=lE.NETWORK_TOKEN_EXPIRED,r.data=e,r}if(lU(v,m)){let i=new lf(lH("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",a).format({tokenNamePrefix:u}),d,!0,lH("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",a).format({tokenNamePrefix:u,playbackId:m,tokenPlaybackId:v.sub}));return i.errorCategory=t,i.muxCode=lE.NETWORK_TOKEN_SUB_MISMATCH,i.data=e,i}if(lW(v,h)){let i=new lf(lH("The {tokenNamePrefix}-token is formatted with incorrect information.",a).format({tokenNamePrefix:u}),d,!0,lH("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",a).format({tokenNamePrefix:u,expectedAud:h}));return i.errorCategory=t,i.muxCode=lE.NETWORK_TOKEN_AUD_MISSING,i.data=e,i}if(lB(v,h)){let i=new lf(lH("The {tokenNamePrefix}-token is formatted with incorrect information.",a).format({tokenNamePrefix:u}),d,!0,lH("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",a).format({tokenNamePrefix:u,expectedAud:h,aud:v.aud}));return i.errorCategory=t,i.muxCode=lE.NETWORK_TOKEN_AUD_MISMATCH,i.data=e,i}}else{let i=new lf(lH("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",a).format({tokenNamePrefix:u,category:t}),d,!0,lH("Specified playback ID: {playbackId}",a).format({playbackId:m}));return i.errorCategory=t,i.muxCode=lE.NETWORK_TOKEN_MISSING,i.data=e,i}}if(412===o){let i=new lf(lH("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",a),d,!0,lH("Specified playback ID: {playbackId}",a).format({playbackId:m}));return i.errorCategory=t,i.muxCode=lE.NETWORK_NOT_READY,i.data=e,i}if(404===o){let i=new lf(lH("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",a),d,!0,lH("Specified playback ID: {playbackId}",a).format({playbackId:m}));return i.errorCategory=t,i.muxCode=lE.NETWORK_NOT_FOUND,i.data=e,i}if(400===o){let i=new lf(lH("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),d,!0,lH("Specified playback ID: {playbackId}",a).format({playbackId:m}));return i.errorCategory=t,i.muxCode=lE.NETWORK_INVALID_URL,i.data=e,i}let E=new lf("",d,!0);return E.errorCategory=t,E.muxCode=lE.NETWORK_UNKNOWN_ERROR,E.data=e,E},du={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},dc=e=>e.includes("fps")?du.FAIRPLAY:e.includes("playready")?du.PLAYREADY:e.includes("widevine")?du.WIDEVINE:void 0,dh=async e=>fetch(e).then(e=>200!==e.status?Promise.reject(e):e.text()).then(e=>fetch(e.split(`
`).find((e,t,i)=>t&&i[t-1].startsWith("#EXT-X-STREAM-INF"))).then(e=>200!==e.status?Promise.reject(e):e.text()).then(e=>e.split(`
`))),dm=e=>{var t,i,a;let r=null==(i=(null!=(t=e.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),n=lM(r),s=lx(r),o;if(n===lT.LIVE){let t=e.find(e=>e.startsWith("#EXT-X-PART-INF"));if(t)o=2*+t.split(":")[1].split("=")[1];else{let t=e.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),i=null==(a=null==t?void 0:t.split(":"))?void 0:a[1];o=3*+(null!=i?i:6)}}return{streamType:n,targetLiveWindow:s,liveEdgeStartOffset:o}},dp=async(e,t)=>t===lS.MP4?{streamType:lT.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0}:t===lS.M3U8?dm(await dh(e)):(console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0}),dv=async(e,t,i=lL({src:e}))=>{var a,r,n;let{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}=await dp(e,i);(null!=(a=dy.get(t))?a:{}).liveEdgeStartOffset=l,(null!=(r=dy.get(t))?r:{}).targetLiveWindow=o,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(n=dy.get(t))?n:{}).streamType=s,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},dE=e=>{var t;let i=e.type,a=lM(i),r=lx(i),n,s=!!(null!=(t=e.partList)&&t.length);return a===lT.LIVE&&(n=s?2*e.partTarget:3*e.targetduration),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},db=(e,t,i)=>{var a,r,n,s,o,l,d,u;let{streamType:c,targetLiveWindow:h,liveEdgeStartOffset:m,lowLatency:v}=dE(e);if(c===lT.LIVE){v?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=dy.get(t))?o:{}).seekable=e}(null!=(l=dy.get(t))?l:{}).liveEdgeStartOffset=m,(null!=(d=dy.get(t))?d:{}).targetLiveWindow=h,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=dy.get(t))?u:{}).streamType=c,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},df=null!=(de=null==(l6=null==globalThis?void 0:globalThis.navigator)?void 0:l6.userAgent)?de:"",dg=null!=(da=null==(di=null==(dt=null==globalThis?void 0:globalThis.navigator)?void 0:dt.userAgentData)?void 0:di.platform)?da:"",d_=df.toLowerCase().includes("android")||["x11","android"].some(e=>dg.toLowerCase().includes(e)),dy=new WeakMap,dT="mux.com",dA=null==(dr=lp.isSupported)?void 0:dr.call(lp),dk=()=>lc.utils.now(),dw=lc.utils.generateUUID,dS=({playbackId:e,customDomain:t=dT,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:u=d}={},extraSourceParams:c={}}={})=>{if(!e)return;let[h,m=""]=lD(e),v=new URL(`https://stream.${t}/${h}.m3u8${m}`);return u||v.searchParams.has("token")?(v.searchParams.forEach((e,t)=>{"token"!=t&&v.searchParams.delete(t)}),u&&v.searchParams.set("token",u)):(i&&v.searchParams.set("max_resolution",i),a&&(v.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&v.searchParams.set("rendition_order",r),n&&v.searchParams.set("program_start_time",`${n}`),s&&v.searchParams.set("program_end_time",`${s}`),o&&v.searchParams.set("asset_start_time",`${o}`),l&&v.searchParams.set("asset_end_time",`${l}`),Object.entries(c).forEach(([e,t])=>{null!=t&&v.searchParams.set(e,t)})),v.toString()},dI=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},dR=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(".m3u8");return t||void 0},dC=e=>{var t,i,a;return null!=(t=null==e?void 0:e.metadata)&&t.video_id?e.metadata.video_id:dX(e)&&null!=(a=null!=(i=dI(e.playbackId))?i:dR(e.src))?a:e.src},dD=e=>{var t;return null==(t=dy.get(e))?void 0:t.error},dL=e=>{var t,i;return null!=(i=null==(t=dy.get(e))?void 0:t.streamType)?i:lT.UNKNOWN},dM=e=>{var t,i;return null!=(i=null==(t=dy.get(e))?void 0:t.targetLiveWindow)?i:Number.NaN},dx=e=>{var t,i;return null!=(i=null==(t=dy.get(e))?void 0:t.seekable)?i:e.seekable},dN=e=>{var t;let i=null==(t=dy.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return Number.NaN;let a=dx(e);return a.length?a.end(a.length-1)-i:Number.NaN},dO=.034,dP=(e,t,i=dO)=>Math.abs(e-t)<=i,dU=(e,t,i=dO)=>e>t||dP(e,t,i),dW=(e,t=dO)=>e.paused&&dU(e.currentTime,e.duration,t),dB=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},dH=(e,t)=>e.ended||e.loop?e.ended:!!(t&&dB(e,t))||dW(e),dV=(e,t,i)=>{dF(t,i);let{metadata:a={}}=e,{view_session_id:r=dw()}=a,n=dC(e);a.view_session_id=r,a.video_id=n,e.metadata=a,e.drmTypeCb=e=>{var i;null==(i=t.mux)||i.emit("hb",{view_drm_type:e})},dy.set(t,{});let s=dK(e,t),o=lY(e,t,s);dJ(e,t,s),d0(e,t,s),l2(t),l7(t);let l=lK(e,t,s);return{engine:s,setAutoplay:l,setPreload:o}},dF=(e,t)=>{let i=null==t?void 0:t.engine;i&&(i.detachMedia(),i.destroy()),null!=e&&e.mux&&!e.mux.deleted&&(e.mux.destroy(),delete e.mux),e&&(e.removeAttribute("src"),e.load(),e.removeEventListener("error",d2),e.removeEventListener("error",d3),e.removeEventListener("durationchange",d1),dy.delete(e),e.dispatchEvent(new Event("teardown")))};function dq(e,t){var i;let a=lL(e);if(a!==lS.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,s=n===lA.MSE,o=n===lA.NATIVE;return r&&(o||!(dA&&(s||d_)))}var dK=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={}}=e,l=lL(e)===lS.M3U8,d=dq(e,t);if(l&&!d&&dA){let t=d$(a),l=dY(e);return new lp({debug:i,startPosition:r,cmcd:s!==lk.NONE?{useHeaders:s===lk.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,xhrSetup:(e,t)=>{var i,a;if(s&&s!==lk.QUERY)return;let r=new URL(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0,...t,...l,...o})}},d$=e=>e===lT.LIVE?{backBufferLength:8}:{},dY=e=>{let{tokens:{drm:t}={},playbackId:i,drmTypeCb:a}=e,r=dI(i);return t&&r?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:dZ(e,"fairplay"),serverCertificateUrl:dz(e,"fairplay")},"com.widevine.alpha":{licenseUrl:dZ(e,"widevine")},"com.microsoft.playready":{licenseUrl:dZ(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let i=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:i}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let i=dc(e);return null==a||a(i),t}))}:{}},dj=async e=>{let t=await fetch(e);return 200!==t.status?Promise.reject(t):await t.arrayBuffer()},dG=async(e,t)=>{let i=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});return 200!==i.status?Promise.reject(i):new Uint8Array(await i.arrayBuffer())},dQ=(e,t)=>{lC(t,"encrypted",async i=>{try{let a=i.initDataType;if("skd"!==a){console.error(`Received unexpected initialization data type "${a}"`);return}if(!t.mediaKeys){let i=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[a],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(t=>{var i;return null==(i=e.drmTypeCb)||i.call(e,du.FAIRPLAY),t}).catch(()=>{let e=lH("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),i=new lf(e,lf.MEDIA_ERR_ENCRYPTED,!0);i.errorCategory=lv.DRM,i.muxCode=lE.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,t.dispatchEvent(new CustomEvent("error",{detail:i}))});if(!i)return;let r=await i.createMediaKeys();try{let t=await dj(dz(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=dd(t,lv.DRM,e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(t)});await r.setServerCertificate(t).catch(()=>{let e=lH("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t=new lf(e,lf.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=lv.DRM,t.muxCode=lE.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(t)})}catch(e){t.dispatchEvent(new CustomEvent("error",{detail:e}));return}await t.setMediaKeys(r)}let r=i.initData;if(null==r){console.error(`Could not start encrypted playback due to missing initData in ${i.type} event`);return}let n=t.mediaKeys.createSession();n.addEventListener("keystatuseschange",()=>{n.keyStatuses.forEach(e=>{let i;if("internal-error"===e){let e=lH("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");(i=new lf(e,lf.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=lv.DRM,i.muxCode=lE.ENCRYPTED_CDM_ERROR}else if("output-restricted"===e||"output-downscaled"===e){let e=lH("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");(i=new lf(e,lf.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=lv.DRM,i.muxCode=lE.ENCRYPTED_OUTPUT_RESTRICTED}i&&t.dispatchEvent(new CustomEvent("error",{detail:i}))})});let s=await Promise.all([n.generateRequest(a,r).catch(()=>{let e=lH("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),i=new lf(e,lf.MEDIA_ERR_ENCRYPTED,!0);i.errorCategory=lv.DRM,i.muxCode=lE.ENCRYPTED_GENERATE_REQUEST_FAILED,t.dispatchEvent(new CustomEvent("error",{detail:i}))}),new Promise(e=>{n.addEventListener("message",t=>{e(t.message)},{once:!0})})]).then(([,e])=>e);n.generateRequest(a,r);let o=await dG(s,dZ(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=dd(t,lv.DRM,e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(t)});await n.update(o).catch(()=>{let e=lH("Failed to update DRM license. This may be an issue with the player or your protected content."),t=new lf(e,lf.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=lv.DRM,t.muxCode=lE.ENCRYPTED_UPDATE_LICENSE_FAILED,Promise.reject(t)})}catch(e){t.dispatchEvent(new CustomEvent("error",{detail:e}));return}})},dZ=({playbackId:e,tokens:{drm:t}={},customDomain:i=dT},a)=>{let r=dI(e);return`https://license.${i.toLocaleLowerCase().endsWith(dT)?i:dT}/license/${a}/${r}?token=${t}`},dz=({playbackId:e,tokens:{drm:t}={},customDomain:i=dT},a)=>{let r=dI(e);return`https://license.${i.toLocaleLowerCase().endsWith(dT)?i:dT}/appcert/${a}/${r}?token=${t}`},dX=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(dT)||!!i&&a.includes(i.toLocaleLowerCase())},dJ=(e,t,i)=>{var a;let{envKey:r,disableTracking:n}=e,s=dX(e);if(!n&&(r||s)){let{playerInitTime:n,playerSoftwareName:s,playerSoftwareVersion:o,beaconCollectionDomain:l,debug:d,disableCookies:u}=e,c={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};lc.monitor(t,{debug:d,beaconCollectionDomain:l,hlsjs:i,Hls:i?lp:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:u,data:{...r?{env_key:r}:{},player_software_name:s,player_software:s,player_software_version:o,player_init_time:n,...c}})}},d0=(e,t,i)=>{var a,r;let n=dq(e,t),{src:s}=e,o=()=>{t.ended||!dH(t,i)||(dB(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},l,d,u=()=>{let e=dx(t),i,a;e.length>0&&(i=e.start(0),a=e.end(0)),(d!==a||l!==i)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),l=i,d=a};if(lC(t,"durationchange",u),t&&n){let i=lL(e);if("string"==typeof s){let n=()=>{if(dL(t)!==lT.LIVE||Number.isFinite(t.duration))return;let e=setInterval(u,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),lC(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})},o=async()=>dv(s,t,i).then(n).catch(i=>{if(i instanceof Response){let a=dd(i,lv.VIDEO,e);if(a){t.dispatchEvent(new CustomEvent("error",{detail:a}));return}}});if("none"===t.preload){let e=()=>{o(),t.removeEventListener("loadedmetadata",i)},i=()=>{o(),t.removeEventListener("play",e)};lC(t,"play",e,{once:!0}),lC(t,"loadedmetadata",i,{once:!0})}else o();null!=(a=e.tokens)&&a.drm?dQ(e,t):lC(t,"encrypted",()=>{let e=new lf(lH("Attempting to play DRM-protected content without providing a DRM token."),lf.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory=lv.DRM,e.muxCode=lE.ENCRYPTED_MISSING_TOKEN,t.dispatchEvent(new CustomEvent("error",{detail:e}))},{once:!0}),t.setAttribute("src",s),e.startTime&&((null!=(r=dy.get(t))?r:{}).startTime=e.startTime,t.addEventListener("durationchange",d1,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",d2),t.addEventListener("error",d3),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),lC(t,"pause",o),lC(t,"seeked",o),lC(t,"play",()=>{t.ended||dU(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else i&&s?(i.once(lp.Events.LEVEL_LOADED,(e,a)=>{db(a.details,t,i),u(),dL(t)!==lT.LIVE||Number.isFinite(t.duration)||(i.on(lp.Events.LEVEL_UPDATED,u),lC(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(lp.Events.LEVELS_UPDATED,u)}))}),i.on(lp.Events.ERROR,(i,a)=>{t.dispatchEvent(new CustomEvent("error",{detail:d5(a,e)}))}),t.addEventListener("error",d3),lC(t,"waiting",o),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(lp.Events.MANIFEST_PARSED,function(t,i){o();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(lp.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(s(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}}),e.audioTracks.addEventListener("change",()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)}),t.on(lp.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)});let r=i=>{let a=e.currentTime,r=!1,n=(e,t)=>{r||(r=!Number.isFinite(t.endOffset))};t.on(lp.Events.BUFFER_FLUSHING,n),t.nextLevel=i,t.off(lp.Events.BUFFER_FLUSHING,n),r||t.trigger(lp.Events.BUFFER_FLUSHING,{startOffset:a+10,endOffset:1/0,type:"video"})};null==(i=e.videoRenditions)||i.addEventListener("change",e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&r(i)});let n=()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)},s=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},o=()=>{n(),s()};t.once(lp.Events.DESTROYING,o)}(e,i),function(e,t){t.on(lp.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(i,{tracks:a})=>{a.forEach(i=>{var a,r;let n=null!=(a=i.subtitleTrack)?a:i.closedCaptions,s=t.subtitleTracks.findIndex(({lang:e,name:t,type:a})=>e==(null==n?void 0:n.lang)&&t===i.label&&a.toLowerCase()===i.kind),o=(null!=(r=i._id)?r:i.default)?"default":`${i.kind}${s}`;lG(e,i.kind,i.label,null==n?void 0:n.lang,o,i.default)})});let i=()=>{if(!t.subtitleTracks.length)return;let i=Array.from(e.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind));if(!i)return;let a=t.subtitleTracks[t.subtitleTrack],r=a?a.default?"default":`${t.subtitleTracks[t.subtitleTrack].type.toLowerCase()}${t.subtitleTrack}`:void 0;if(t.subtitleTrack<0||(null==i?void 0:i.id)!==r){let e=t.subtitleTracks.findIndex(({lang:e,name:t,type:a,default:r})=>"default"===i.id&&r||e==i.language&&t===i.label&&a.toLowerCase()===i.kind);t.subtitleTrack=e}(null==i?void 0:i.id)===r&&i.cues&&Array.from(i.cues).forEach(e=>{i.addCue(e)})};e.textTracks.addEventListener("change",i),t.on(lp.Events.CUES_PARSED,(t,{track:i,cues:a})=>{let r=e.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),t.once(lp.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",i),e.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})});let a=()=>{Array.from(e.textTracks).forEach(t=>{var i,a;if(!["subtitles","caption"].includes(t.kind)&&("thumbnails"===t.label||"chapters"===t.kind)){if(!(null!=(i=t.cues)&&i.length)){let i="track";t.kind&&(i+=`[kind="${t.kind}"]`),t.label&&(i+=`[label="${t.label}"]`);let r=e.querySelector(i),n=null!=(a=null==r?void 0:r.getAttribute("src"))?a:"";null==r||r.removeAttribute("src"),setTimeout(()=>{null==r||r.setAttribute("src",n)},0)}"hidden"!==t.mode&&(t.mode="hidden")}})};t.once(lp.Events.MANIFEST_LOADED,a),t.once(lp.Events.MEDIA_ATTACHED,a)}(t,i),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function d1(e){var t;let i=e.target,a=null==(t=dy.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function d2(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new lf(i,a);if(t.src&&a===lf.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var e;let i=null!=(e=dD(t))?e:t.error;(null==i?void 0:i.code)===lf.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.dispatchEvent(new CustomEvent("error",{detail:r}))},500);return}if(t.src&&(a!==lf.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}t.dispatchEvent(new CustomEvent("error",{detail:r}))}function d3(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof lf))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=dy.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var d5=(e,t)=>{var i,a,r;console.error("getErrorFromHlsErrorData()",e);let n={[lp.ErrorTypes.NETWORK_ERROR]:lf.MEDIA_ERR_NETWORK,[lp.ErrorTypes.MEDIA_ERROR]:lf.MEDIA_ERR_DECODE,[lp.ErrorTypes.KEY_SYSTEM_ERROR]:lf.MEDIA_ERR_ENCRYPTED},s,o=[lm.Bm.KEY_SYSTEM_LICENSE_REQUEST_FAILED,lm.Bm.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?lf.MEDIA_ERR_NETWORK:n[e.type];if(o===lf.MEDIA_ERR_NETWORK&&e.response){let r=null!=(i=e.type===lm.ZB.KEY_SYSTEM_ERROR?lv.DRM:e.type===lm.ZB.NETWORK_ERROR?lv.VIDEO:void 0)?i:lv.VIDEO;s=null!=(a=dd(e.response,r,t))?a:new lf("",o)}else o===lf.MEDIA_ERR_ENCRYPTED?e.details===lm.Bm.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((s=new lf(lH("Attempting to play DRM-protected content without providing a DRM token."),lf.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=lv.DRM,s.muxCode=lE.ENCRYPTED_MISSING_TOKEN):e.details===lm.Bm.KEY_SYSTEM_NO_ACCESS?((s=new lf(lH("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),lf.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=lv.DRM,s.muxCode=lE.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM):e.details===lm.Bm.KEY_SYSTEM_NO_SESSION?((s=new lf(lH("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),lf.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=lv.DRM,s.muxCode=lE.ENCRYPTED_GENERATE_REQUEST_FAILED):e.details===lm.Bm.KEY_SYSTEM_SESSION_UPDATE_FAILED?((s=new lf(lH("Failed to update DRM license. This may be an issue with the player or your protected content."),lf.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=lv.DRM,s.muxCode=lE.ENCRYPTED_UPDATE_LICENSE_FAILED):e.details===lm.Bm.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((s=new lf(lH("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),lf.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=lv.DRM,s.muxCode=lE.ENCRYPTED_UPDATE_SERVER_CERT_FAILED):e.details===lm.Bm.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((s=new lf(lH("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),lf.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=lv.DRM,s.muxCode=lE.ENCRYPTED_CDM_ERROR):e.details===lm.Bm.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((s=new lf(lH("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),lf.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=lv.DRM,s.muxCode=lE.ENCRYPTED_OUTPUT_RESTRICTED):((s=new lf(e.error.message,lf.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=lv.DRM,s.muxCode=lE.ENCRYPTED_ERROR):s=new lf("",o,e.fatal);return s.context||(s.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${null==(r=e.err)?void 0:r.message}
`:""}`),s.data=e,s},d9=Object.defineProperty,d4=Object.getPrototypeOf,d8=Reflect.get,d7=(e,t,i)=>t in e?d9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,d6=(e,t,i)=>(d7(e,"symbol"!=typeof t?t+"":t,i),i),ue=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ut=(e,t,i)=>(ue(e,t,"read from private field"),i?i.call(e):t.get(e)),ui=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ua=(e,t,i,a)=>(ue(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ur=(e,t,i)=>(ue(e,t,"access private method"),i),un=(e,t,i)=>d8(d4(e),i,t),us=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends us{}globalThis.DocumentFragment=e}var uo,ul=class extends us{},ud=class{constructor(e,t={}){ui(this,uo,void 0),ua(this,uo,null==t?void 0:t.detail)}get detail(){return ut(this,uo)}initCustomEvent(){}};uo=new WeakMap;var uu={document:{createElement:function(e,t){return new ul}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(ul)},CustomEvent:ud,EventTarget:us,HTMLElement:ul,HTMLVideoElement:class extends us{}},uc="undefined"==typeof window||void 0===globalThis.customElements,uh=uc?uu:globalThis;uc&&uu.document;var um=(()=>{try{return"0.22.0"}catch{}return"UNKNOWN"})(),up=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"];function uv(e){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${uf(e)}></audio>
    </slot>
    <slot></slot>
  `}function uE(e){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${uf(e)}></video>
    </slot>
    <slot></slot>
  `}var ub=(e,{tag:t,is:i})=>{var a,r,n,s,o,l,d,u,c,h,m,v,E,b,f,g,_;let y=null==(r=null==(a=globalThis.document)?void 0:a.createElement)?void 0:r.call(a,t,{is:i}),T=y?function(e){let t=[];for(let i=Object.getPrototypeOf(e);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i))t.push(...Object.getOwnPropertyNames(i));return t}(y):[];return n=class extends e{constructor(){super(),ui(this,h),ui(this,v),ui(this,b),ui(this,g),ui(this,d,void 0),ui(this,u,void 0),ui(this,c,new Map)}static get observedAttributes(){var e,t,i;return ur(e=n,o,l).call(e),[...null!=(i=null==(t=null==y?void 0:y.constructor)?void 0:t.observedAttributes)?i:[],"autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"]}get nativeEl(){var e,i,a;return ur(this,h,m).call(this),null!=(a=null!=(i=null!=(e=ut(this,u))?e:this.shadowRoot.querySelector(t))?i:this.querySelector(":scope > [slot=media]"))?a:this.querySelector(t)}set nativeEl(e){ua(this,u,e)}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(e){this.toggleAttribute("muted",!!e)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",`${e}`)}get preload(){var e,t;return null!=(t=this.getAttribute("preload"))?t:null==(e=this.nativeEl)?void 0:e.preload}set preload(e){this.setAttribute("preload",`${e}`)}init(){var e,a;if(!this.shadowRoot){this.attachShadow({mode:"open"});let e=function(e){let t={};for(let i of e)t[i.name]=i.value;return t}(this.attributes);i&&(e.is=i),t&&(e.part=t),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}for(let e of(this.nativeEl.muted=this.hasAttribute("muted"),T))ur(this,b,f).call(this,e);for(let t of(this.shadowRoot.addEventListener("slotchange",this),ur(this,v,E).call(this),this.constructor.Events))null==(a=(e=this.shadowRoot).addEventListener)||a.call(e,t,this,!0)}handleEvent(e){if("slotchange"===e.type){ur(this,v,E).call(this);return}e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}attributeChangedCallback(e,t,i){ur(this,h,m).call(this),ur(this,g,_).call(this,e,t,i)}connectedCallback(){ur(this,h,m).call(this)}},s=new WeakMap,o=new WeakSet,l=function(){if(ut(this,s))return;ua(this,s,!0);let e=new Set(this.observedAttributes);for(let t of(e.delete("muted"),T))if(!(t in this.prototype)){if("function"==typeof y[t])this.prototype[t]=function(...e){return ur(this,h,m).call(this),this.call?this.call(t,...e):this.nativeEl[t].apply(this.nativeEl,e)};else{let i={get(){var i,a,r;ur(this,h,m).call(this);let n=t.toLowerCase();if(e.has(n)){let e=this.getAttribute(n);return null!==e&&(""===e||e)}return null!=(r=null==(i=this.get)?void 0:i.call(this,t))?r:null==(a=this.nativeEl)?void 0:a[t]}};t!==t.toUpperCase()&&(i.set=function(i){ur(this,h,m).call(this);let a=t.toLowerCase();if(e.has(a)){!0===i||!1===i||null==i?this.toggleAttribute(a,!!i):this.setAttribute(a,i);return}if(this.set){this.set(t,i);return}this.nativeEl[t]=i}),Object.defineProperty(this.prototype,t,i)}}},d=new WeakMap,u=new WeakMap,c=new WeakMap,h=new WeakSet,m=function(){ut(this,d)||(ua(this,d,!0),this.init())},v=new WeakSet,E=function(){let e=new Map(ut(this,c));this.shadowRoot.querySelector("slot:not([name])").assignedElements({flatten:!0}).filter(e=>["track","source"].includes(e.localName)).forEach(t=>{var i,a;e.delete(t);let r=ut(this,c).get(t);r||(r=t.cloneNode(),ut(this,c).set(t,r)),null==(a=(i=this.nativeEl).append)||a.call(i,r),"track"===r.localName&&r.default&&("chapters"===r.kind||"metadata"===r.kind)&&"disabled"===r.track.mode&&(r.track.mode="hidden")}),e.forEach(e=>e.remove())},b=new WeakSet,f=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},g=new WeakSet,_=function(e,t,i){var a,r,s,o,l,d;["id","class"].includes(e)||!n.observedAttributes.includes(e)&&this.constructor.observedAttributes.includes(e)||(null===i?null==(r=(a=this.nativeEl).removeAttribute)||r.call(a,e):(null==(o=(s=this.nativeEl).getAttribute)?void 0:o.call(s,e))!=i&&(null==(d=(l=this.nativeEl).setAttribute)||d.call(l,e,i)))},ui(n,o),d6(n,"getTemplateHTML",t.endsWith("audio")?uv:uE),d6(n,"shadowRootOptions",{mode:"open"}),d6(n,"Events",up),ui(n,s,void 0),n};function uf(e){let t="";for(let i in e){let a=e[i];""===a?t+=` ${i}`:t+=` ${i}="${a}"`}return t}var ug,u_,uy=ub(null!=(ug=globalThis.HTMLElement)?ug:class{},{tag:"video"});ub(null!=(u_=globalThis.HTMLElement)?u_:class{},{tag:"audio"});var uT=new WeakMap,uA=class extends Error{},uk=class extends Error{};function uw(){var e,t;return null==(t=null==(e=globalThis.cast)?void 0:e.framework)?void 0:t.CastContext.getInstance()}function uS(){var e;return null==(e=uw())?void 0:e.getCurrentSession()}function uI(){var e;return null==(e=uS())?void 0:e.getSessionObj().media[0]}function uR(e){return uw().setOptions({...uC(),...e})}function uC(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}var uD,uL=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),uM=new WeakSet;ux=()=>{var e,t,i,a;if(!(null!=(t=null==(e=globalThis.chrome)?void 0:e.cast)&&t.isAvailable)){console.debug("chrome.cast.isAvailable",null==(a=null==(i=globalThis.chrome)?void 0:i.cast)?void 0:a.isAvailable);return}uD||(uD=cast.framework,uw().addEventListener(uD.CastContextEventType.CAST_STATE_CHANGED,e=>{uL.forEach(t=>{var i,a;return null==(a=(i=uT.get(t)).onCastStateChanged)?void 0:a.call(i,e)})}),uw().addEventListener(uD.CastContextEventType.SESSION_STATE_CHANGED,e=>{uL.forEach(t=>{var i,a;return null==(a=(i=uT.get(t)).onSessionStateChanged)?void 0:a.call(i,e)})}),uL.forEach(e=>{var t,i;return null==(i=(t=uT.get(e)).init)?void 0:i.call(t)}))},null!=(uO=null==(uN=globalThis.chrome)?void 0:uN.cast)&&uO.isAvailable?null!=(uP=globalThis.cast)&&uP.framework?ux():customElements.whenDefined("google-cast-button").then(ux):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(ux)};var ux,uN,uO,uP,uU,uW,uB,uH,uV,uF,uq,uK,u$,uY,uj,uG,uQ,uZ,uz,uX,uJ,u0,u1,u2,u3,u5,u9=0,u4=class extends EventTarget{constructor(e){super(),ui(this,u$),ui(this,uj),ui(this,uQ),ui(this,uz),ui(this,uJ),ui(this,u1),ui(this,u3),ui(this,uU,void 0),ui(this,uW,void 0),ui(this,uB,void 0),ui(this,uH,void 0),ui(this,uV,"disconnected"),ui(this,uF,!1),ui(this,uq,new Set),ui(this,uK,new WeakMap),ua(this,uU,e),uL.add(this),uT.set(this,{init:()=>ur(this,uJ,u0).call(this),onCastStateChanged:()=>ur(this,uQ,uZ).call(this),onSessionStateChanged:()=>ur(this,uz,uX).call(this),getCastPlayer:()=>ut(this,u$,uY)}),ur(this,uJ,u0).call(this)}get state(){return ut(this,uV)}async watchAvailability(e){if(ut(this,uU).disableRemotePlayback)throw new uA("disableRemotePlayback attribute is present.");return ut(this,uK).set(e,++u9),ut(this,uq).add(e),u9}async cancelWatchAvailability(e){if(ut(this,uU).disableRemotePlayback)throw new uA("disableRemotePlayback attribute is present.");e?ut(this,uq).delete(e):ut(this,uq).clear()}async prompt(){var e,t,i,a;if(ut(this,uU).disableRemotePlayback)throw new uA("disableRemotePlayback attribute is present.");if(!(null!=(t=null==(e=globalThis.chrome)?void 0:e.cast)&&t.isAvailable))throw new uk("The RemotePlayback API is disabled on this platform.");let r=uM.has(ut(this,uU));uM.add(ut(this,uU)),uR(ut(this,uU).castOptions),Object.entries(ut(this,uH)).forEach(([e,t])=>{ut(this,uB).controller.addEventListener(e,t)});try{await uw().requestSession()}catch(e){if("cancel"===e){r||uM.delete(ut(this,uU));return}throw Error(e)}null==(a=null==(i=uT.get(ut(this,uU)))?void 0:i.loadOnPrompt)||a.call(i)}};uU=new WeakMap,uW=new WeakMap,uB=new WeakMap,uH=new WeakMap,uV=new WeakMap,uF=new WeakMap,uq=new WeakMap,uK=new WeakMap,u$=new WeakSet,uY=function(){if(uM.has(ut(this,uU)))return ut(this,uB)},uj=new WeakSet,uG=function(){uM.has(ut(this,uU))&&(Object.entries(ut(this,uH)).forEach(([e,t])=>{ut(this,uB).controller.removeEventListener(e,t)}),uM.delete(ut(this,uU)),ut(this,uU).muted=ut(this,uB).isMuted,ut(this,uU).currentTime=ut(this,uB).savedPlayerState.currentTime,!1===ut(this,uB).savedPlayerState.isPaused&&ut(this,uU).play())},uQ=new WeakSet,uZ=function(){let e=uw().getCastState();if(uM.has(ut(this,uU))&&"CONNECTING"===e&&(ua(this,uV,"connecting"),this.dispatchEvent(new Event("connecting"))),!ut(this,uF)&&null!=e&&e.includes("CONNECT"))for(let e of(ua(this,uF,!0),ut(this,uq)))e(!0);else if(ut(this,uF)&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(ua(this,uF,!1),ut(this,uq)))e(!1)},uz=new WeakSet,uX=async function(){var e,t;let{SESSION_RESUMED:i}=uD.SessionState;if(uw().getSessionState()===i&&ut(this,uU).castSrc===(null==(e=uI())?void 0:e.media.contentId)){uM.add(ut(this,uU)),Object.entries(ut(this,uH)).forEach(([e,t])=>{ut(this,uB).controller.addEventListener(e,t)});try{await (t=new chrome.cast.media.GetStatusRequest,new Promise((e,i)=>{uI().getStatus(t,e,i)}))}catch(e){console.error(e)}ut(this,uH)[uD.RemotePlayerEventType.IS_PAUSED_CHANGED](),ut(this,uH)[uD.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}},uJ=new WeakSet,u0=function(){!uD||ut(this,uW)||(ua(this,uW,!0),uR(ut(this,uU).castOptions),ut(this,uU).textTracks.addEventListener("change",()=>ur(this,u3,u5).call(this)),ur(this,uQ,uZ).call(this),ua(this,uB,new uD.RemotePlayer),new uD.RemotePlayerController(ut(this,uB)),ua(this,uH,{[uD.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(ua(this,uV,"connected"),this.dispatchEvent(new Event("connect"))):(ur(this,uj,uG).call(this),ua(this,uV,"disconnected"),this.dispatchEvent(new Event("disconnect")))},[uD.RemotePlayerEventType.DURATION_CHANGED]:()=>{ut(this,uU).dispatchEvent(new Event("durationchange"))},[uD.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{ut(this,uU).dispatchEvent(new Event("volumechange"))},[uD.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{ut(this,uU).dispatchEvent(new Event("volumechange"))},[uD.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{var e;null!=(e=ut(this,u$,uY))&&e.isMediaLoaded&&ut(this,uU).dispatchEvent(new Event("timeupdate"))},[uD.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{ut(this,uU).dispatchEvent(new Event("resize"))},[uD.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{ut(this,uU).dispatchEvent(new Event(this.paused?"pause":"play"))},[uD.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{var e,t;(null==(e=ut(this,u$,uY))?void 0:e.playerState)!==chrome.cast.media.PlayerState.PAUSED&&ut(this,uU).dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[null==(t=ut(this,u$,uY))?void 0:t.playerState]))},[uD.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{var e;null!=(e=ut(this,u$,uY))&&e.isMediaLoaded&&(await Promise.resolve(),ur(this,u1,u2).call(this))}}))},u1=new WeakSet,u2=function(){ur(this,u3,u5).call(this)},u3=new WeakSet,u5=async function(){var e,t,i,a,r;let n;if(!ut(this,u$,uY))return;let s=(null!=(t=null==(e=ut(this,uB).mediaInfo)?void 0:e.tracks)?t:[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),o=[...ut(this,uU).textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),l=s.map(({language:e,name:t,trackId:i})=>{var a;let{mode:r}=null!=(a=o.find(i=>i.language===e&&i.label===t))?a:{};return!!r&&{mode:r,trackId:i}}).filter(Boolean),d=l.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),u=l.find(({mode:e})=>"showing"===e),c=null!=(r=null==(a=null==(i=uS())?void 0:i.getSessionObj().media[0])?void 0:a.activeTrackIds)?r:[],h=c;if(c.length&&(h=h.filter(e=>!d.includes(e))),null!=u&&u.trackId&&(h=[...h,u.trackId]),n=h=[...new Set(h)],!(c.length===n.length&&c.every(e=>n.includes(e))))try{let e=new chrome.cast.media.EditTracksInfoRequest(h);await new Promise((t,i)=>{uI().editTracksInfo(e,t,i)})}catch(e){console.error(e)}};var u8=e=>{var t,i,a,r,n,s,o,l,d,u;return i=class extends e{constructor(){super(...arguments),ui(this,o),ui(this,d),ui(this,a,{paused:!1}),ui(this,r,uC()),ui(this,n,void 0),ui(this,s,void 0)}get remote(){return ut(this,s)?ut(this,s):globalThis.chrome?(function(){var e;let t="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(null!=(e=globalThis.chrome)&&e.cast||document.querySelector(`script[src="${t}"]`))return;let i=document.createElement("script");i.src=t,document.head.append(i)}(),uT.set(this,{loadOnPrompt:()=>ur(this,d,u).call(this)}),ua(this,s,new u4(this))):super.remote}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){ut(this,r).receiverApplicationId=i;return}if(ut(this,o,l))switch(e){case"cast-stream-type":case"cast-src":this.load()}}async load(){var e,t;if(!ut(this,o,l))return super.load();let i=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);i.customData=this.castCustomData;let r=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),n=[],s=0;r.length&&(i.tracks=r.map(e=>{let t=++s;0===n.length&&"showing"===e.track.mode&&n.push(t);let i=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return i.trackContentId=e.src,i.trackContentType="text/vtt",i.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,i.name=e.label,i.language=e.srclang,i})),"live"===this.castStreamType?i.streamType=chrome.cast.media.StreamType.LIVE:i.streamType=chrome.cast.media.StreamType.BUFFERED,i.metadata=new chrome.cast.media.GenericMediaMetadata,i.metadata.title=this.title,i.metadata.images=[{url:this.poster}];let d=new chrome.cast.media.LoadRequest(i);d.currentTime=null!=(e=super.currentTime)?e:0,d.autoplay=!ut(this,a).paused,d.activeTrackIds=n,await (null==(t=uS())?void 0:t.loadMedia(d)),this.dispatchEvent(new Event("volumechange"))}play(){var e;if(ut(this,o,l)){ut(this,o,l).isPaused&&(null==(e=ut(this,o,l).controller)||e.playOrPause());return}return super.play()}pause(){var e;if(ut(this,o,l)){ut(this,o,l).isPaused||null==(e=ut(this,o,l).controller)||e.playOrPause();return}super.pause()}get castOptions(){return ut(this,r)}get castReceiver(){var e;return null!=(e=this.getAttribute("cast-receiver"))?e:void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){var e,t,i;return null!=(i=null!=(t=this.getAttribute("cast-src"))?t:null==(e=this.querySelector("source"))?void 0:e.src)?i:this.currentSrc}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){var e;return null!=(e=this.getAttribute("cast-content-type"))?e:void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){var e,t;return null!=(t=null!=(e=this.getAttribute("cast-stream-type"))?e:this.streamType)?t:void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get castCustomData(){return ut(this,n)}set castCustomData(e){let t=typeof e;if(!["object","undefined"].includes(t)){console.error(`castCustomData must be nullish or an object but value was of type ${t}`);return}ua(this,n,e)}get readyState(){if(ut(this,o,l))switch(ut(this,o,l).playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return ut(this,o,l)?ut(this,o,l).isPaused:super.paused}get muted(){var e;return ut(this,o,l)?null==(e=ut(this,o,l))?void 0:e.isMuted:super.muted}set muted(e){var t;if(ut(this,o,l)){(e&&!ut(this,o,l).isMuted||!e&&ut(this,o,l).isMuted)&&(null==(t=ut(this,o,l).controller)||t.muteOrUnmute());return}super.muted=e}get volume(){var e,t;return ut(this,o,l)?null!=(t=null==(e=ut(this,o,l))?void 0:e.volumeLevel)?t:1:super.volume}set volume(e){var t;if(ut(this,o,l)){ut(this,o,l).volumeLevel=+e,null==(t=ut(this,o,l).controller)||t.setVolumeLevel();return}super.volume=e}get duration(){var e,t,i;return ut(this,o,l)&&null!=(e=ut(this,o,l))&&e.isMediaLoaded?null!=(i=null==(t=ut(this,o,l))?void 0:t.duration)?i:NaN:super.duration}get currentTime(){var e,t,i;return ut(this,o,l)&&null!=(e=ut(this,o,l))&&e.isMediaLoaded?null!=(i=null==(t=ut(this,o,l))?void 0:t.currentTime)?i:0:super.currentTime}set currentTime(e){var t;if(ut(this,o,l)){ut(this,o,l).currentTime=e,null==(t=ut(this,o,l).controller)||t.seek();return}super.currentTime=e}},a=new WeakMap,r=new WeakMap,n=new WeakMap,s=new WeakMap,o=new WeakSet,l=function(){var e,t;return null==(t=null==(e=uT.get(this.remote))?void 0:e.getCastPlayer)?void 0:t.call(e)},d=new WeakSet,u=async function(){ut(this,a).paused=un(i.prototype,this,"paused"),un(i.prototype,this,"pause").call(this),this.muted=un(i.prototype,this,"muted");try{await this.load()}catch(e){console.error(e)}},d6(i,"observedAttributes",[...null!=(t=e.observedAttributes)?t:[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"]),i},u7=class extends Event{constructor(e,t){super(e),d6(this,"track"),this.track=t.track}},u6=new WeakMap;function ce(e){var t,i;let a;return null!=(t=u6.get(e))?t:(i={},(a=u6.get(e))||u6.set(e,a={}),Object.assign(a,i))}function ct(e,t){let i=e.videoTracks;ce(t).media=e,ce(t).renditionSet||(ce(t).renditionSet=new Set);let a=ce(i).trackSet;a.add(t);let r=a.size-1;r in cl.prototype||Object.defineProperty(cl.prototype,r,{get(){return[...ce(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new u7("addtrack",{track:t}))})}function ci(e){var t;let i=null==(t=ce(e).media)?void 0:t.videoTracks;i&&(ce(i).trackSet.delete(e),queueMicrotask(()=>{i.dispatchEvent(new u7("removetrack",{track:e}))}))}var ca,cr,cn,cs,co,cl=class extends EventTarget{constructor(){super(),ui(this,cs),ui(this,ca,void 0),ui(this,cr,void 0),ui(this,cn,void 0),ce(this).trackSet=new Set}[Symbol.iterator](){return ut(this,cs,co).values()}get length(){return ut(this,cs,co).size}getTrackById(e){var t;return null!=(t=[...ut(this,cs,co)].find(t=>t.id===e))?t:null}get selectedIndex(){return[...ut(this,cs,co)].findIndex(e=>e.selected)}get onaddtrack(){return ut(this,ca)}set onaddtrack(e){ut(this,ca)&&(this.removeEventListener("addtrack",ut(this,ca)),ua(this,ca,void 0)),"function"==typeof e&&(ua(this,ca,e),this.addEventListener("addtrack",e))}get onremovetrack(){return ut(this,cr)}set onremovetrack(e){ut(this,cr)&&(this.removeEventListener("removetrack",ut(this,cr)),ua(this,cr,void 0)),"function"==typeof e&&(ua(this,cr,e),this.addEventListener("removetrack",e))}get onchange(){return ut(this,cn)}set onchange(e){ut(this,cn)&&(this.removeEventListener("change",ut(this,cn)),ua(this,cn,void 0)),"function"==typeof e&&(ua(this,cn,e),this.addEventListener("change",e))}};ca=new WeakMap,cr=new WeakMap,cn=new WeakMap,cs=new WeakSet,co=function(){return ce(this).trackSet};var cd=class extends Event{constructor(e,t){super(e),d6(this,"rendition"),this.rendition=t.rendition}};function cu(e){return[...ce(e).media.videoTracks].filter(e=>e.selected).flatMap(e=>[...ce(e).renditionSet])}var cc,ch,cm,cp=class extends EventTarget{constructor(){super(...arguments),ui(this,cc,void 0),ui(this,ch,void 0),ui(this,cm,void 0)}[Symbol.iterator](){return cu(this).values()}get length(){return cu(this).length}getRenditionById(e){var t;return null!=(t=cu(this).find(t=>`${t.id}`==`${e}`))?t:null}get selectedIndex(){return cu(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of cu(this).entries())i.selected=t===e}get onaddrendition(){return ut(this,cc)}set onaddrendition(e){ut(this,cc)&&(this.removeEventListener("addrendition",ut(this,cc)),ua(this,cc,void 0)),"function"==typeof e&&(ua(this,cc,e),this.addEventListener("addrendition",e))}get onremoverendition(){return ut(this,ch)}set onremoverendition(e){ut(this,ch)&&(this.removeEventListener("removerendition",ut(this,ch)),ua(this,ch,void 0)),"function"==typeof e&&(ua(this,ch,e),this.addEventListener("removerendition",e))}get onchange(){return ut(this,cm)}set onchange(e){ut(this,cm)&&(this.removeEventListener("change",ut(this,cm)),ua(this,cm,void 0)),"function"==typeof e&&(ua(this,cm,e),this.addEventListener("change",e))}};cc=new WeakMap,ch=new WeakMap,cm=new WeakMap;var cv,cE=class{constructor(){d6(this,"src"),d6(this,"id"),d6(this,"width"),d6(this,"height"),d6(this,"bitrate"),d6(this,"frameRate"),d6(this,"codec"),ui(this,cv,!1)}get selected(){return ut(this,cv)}set selected(e){var t;let i;ut(this,cv)!==e&&(ua(this,cv,e),t=this,(i=ce(t).media.videoRenditions)&&!ce(i).changeRequested&&(ce(i).changeRequested=!0,queueMicrotask(()=>{delete ce(i).changeRequested,ce(t).track.selected&&i.dispatchEvent(new Event("change"))})))}};cv=new WeakMap;var cb,cf=class{constructor(){d6(this,"id"),d6(this,"kind"),d6(this,"label",""),d6(this,"language",""),d6(this,"sourceBuffer"),ui(this,cb,!1)}addRendition(e,t,i,a,r,n){var s;let o,l,d,u=new cE;return u.src=e,u.width=t,u.height=i,u.frameRate=n,u.bitrate=r,u.codec=a,s=this,o=ce(s).media.videoRenditions,ce(u).media=ce(s).media,ce(u).track=s,(l=ce(s).renditionSet).add(u),(d=l.size-1)in cp.prototype||Object.defineProperty(cp.prototype,d,{get(){return cu(this)[d]}}),queueMicrotask(()=>{s.selected&&o.dispatchEvent(new cd("addrendition",{rendition:u}))}),u}removeRendition(e){let t,i;t=ce(e).media.videoRenditions,i=ce(e).track,ce(i).renditionSet.delete(e),queueMicrotask(()=>{ce(e).track.selected&&t.dispatchEvent(new cd("removerendition",{rendition:e}))})}get selected(){return ut(this,cb)}set selected(e){ut(this,cb)!==e&&(ua(this,cb,e),!0===e&&function(e){var t;let i=null!=(t=ce(e).media.videoTracks)?t:[],a=!1;for(let t of i)t!==e&&(t.selected=!1,a=!0);if(a){if(ce(i).changeRequested)return;ce(i).changeRequested=!0,queueMicrotask(()=>{delete ce(i).changeRequested,i.dispatchEvent(new Event("change"))})}}(this))}};function cg(e){return[...ce(e).media.audioTracks].filter(e=>e.enabled).flatMap(e=>[...ce(e).renditionSet])}cb=new WeakMap;var c_,cy,cT,cA=class extends EventTarget{constructor(){super(...arguments),ui(this,c_,void 0),ui(this,cy,void 0),ui(this,cT,void 0)}[Symbol.iterator](){return cg(this).values()}get length(){return cg(this).length}getRenditionById(e){var t;return null!=(t=cg(this).find(t=>`${t.id}`==`${e}`))?t:null}get selectedIndex(){return cg(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of cg(this).entries())i.selected=t===e}get onaddrendition(){return ut(this,c_)}set onaddrendition(e){ut(this,c_)&&(this.removeEventListener("addrendition",ut(this,c_)),ua(this,c_,void 0)),"function"==typeof e&&(ua(this,c_,e),this.addEventListener("addrendition",e))}get onremoverendition(){return ut(this,cy)}set onremoverendition(e){ut(this,cy)&&(this.removeEventListener("removerendition",ut(this,cy)),ua(this,cy,void 0)),"function"==typeof e&&(ua(this,cy,e),this.addEventListener("removerendition",e))}get onchange(){return ut(this,cT)}set onchange(e){ut(this,cT)&&(this.removeEventListener("change",ut(this,cT)),ua(this,cT,void 0)),"function"==typeof e&&(ua(this,cT,e),this.addEventListener("change",e))}};c_=new WeakMap,cy=new WeakMap,cT=new WeakMap;var ck,cw=class{constructor(){d6(this,"src"),d6(this,"id"),d6(this,"bitrate"),d6(this,"codec"),ui(this,ck,!1)}get selected(){return ut(this,ck)}set selected(e){var t;let i;ut(this,ck)!==e&&(ua(this,ck,e),t=this,(i=ce(t).media.audioRenditions)&&!ce(i).changeRequested&&(ce(i).changeRequested=!0,queueMicrotask(()=>{delete ce(i).changeRequested,ce(t).track.enabled&&i.dispatchEvent(new Event("change"))})))}};function cS(e,t){let i=e.audioTracks;ce(t).media=e,ce(t).renditionSet||(ce(t).renditionSet=new Set);let a=ce(i).trackSet;a.add(t);let r=a.size-1;r in cx.prototype||Object.defineProperty(cx.prototype,r,{get(){return[...ce(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new u7("addtrack",{track:t}))})}function cI(e){var t;let i=null==(t=ce(e).media)?void 0:t.audioTracks;i&&(ce(i).trackSet.delete(e),queueMicrotask(()=>{i.dispatchEvent(new u7("removetrack",{track:e}))}))}ck=new WeakMap;var cR,cC,cD,cL,cM,cx=class extends EventTarget{constructor(){super(),ui(this,cL),ui(this,cR,void 0),ui(this,cC,void 0),ui(this,cD,void 0),ce(this).trackSet=new Set}[Symbol.iterator](){return ut(this,cL,cM).values()}get length(){return ut(this,cL,cM).size}getTrackById(e){var t;return null!=(t=[...ut(this,cL,cM)].find(t=>t.id===e))?t:null}get onaddtrack(){return ut(this,cR)}set onaddtrack(e){ut(this,cR)&&(this.removeEventListener("addtrack",ut(this,cR)),ua(this,cR,void 0)),"function"==typeof e&&(ua(this,cR,e),this.addEventListener("addtrack",e))}get onremovetrack(){return ut(this,cC)}set onremovetrack(e){ut(this,cC)&&(this.removeEventListener("removetrack",ut(this,cC)),ua(this,cC,void 0)),"function"==typeof e&&(ua(this,cC,e),this.addEventListener("removetrack",e))}get onchange(){return ut(this,cD)}set onchange(e){ut(this,cD)&&(this.removeEventListener("change",ut(this,cD)),ua(this,cD,void 0)),"function"==typeof e&&(ua(this,cD,e),this.addEventListener("change",e))}};cR=new WeakMap,cC=new WeakMap,cD=new WeakMap,cL=new WeakSet,cM=function(){return ce(this).trackSet};var cN,cO=class{constructor(){d6(this,"id"),d6(this,"kind"),d6(this,"label",""),d6(this,"language",""),d6(this,"sourceBuffer"),ui(this,cN,!1)}addRendition(e,t,i){var a;let r,n,s,o=new cw;return o.src=e,o.codec=t,o.bitrate=i,a=this,r=ce(a).media.audioRenditions,ce(o).media=ce(a).media,ce(o).track=a,(n=ce(a).renditionSet).add(o),(s=n.size-1)in cA.prototype||Object.defineProperty(cA.prototype,s,{get(){return cg(this)[s]}}),queueMicrotask(()=>{a.enabled&&r.dispatchEvent(new cd("addrendition",{rendition:o}))}),o}removeRendition(e){let t,i;t=ce(e).media.audioRenditions,i=ce(e).track,ce(i).renditionSet.delete(e),queueMicrotask(()=>{ce(e).track.enabled&&t.dispatchEvent(new cd("removerendition",{rendition:e}))})}get enabled(){return ut(this,cN)}set enabled(e){let t;ut(this,cN)!==e&&(ua(this,cN,e),(t=ce(this).media.audioTracks)&&!ce(t).changeRequested&&(ce(t).changeRequested=!0,queueMicrotask(()=>{delete ce(t).changeRequested,t.dispatchEvent(new Event("change"))})))}};cN=new WeakMap;var cP=cB(globalThis.HTMLMediaElement,"video"),cU=cB(globalThis.HTMLMediaElement,"audio");function cW(e){if(!(null!=e&&e.prototype))return e;let t=cB(e,"video");(!t||`${t}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"videoTracks",{get(){return function(e){var t;let i=ce(e).videoTracks;if(!i&&(i=new cl,ce(e).videoTracks=i,cP)){let a=cP.call(null!=(t=e.nativeEl)?t:e);for(let t of a)ct(e,t);a.addEventListener("change",()=>{i.dispatchEvent(new Event("change"))}),a.addEventListener("addtrack",t=>{if([...i].some(e=>e instanceof cf)){for(let e of a)ci(e);return}ct(e,t.track)}),a.addEventListener("removetrack",e=>{ci(e.track)})}return i}(this)}});let i=cB(e,"audio");(!i||`${i}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"audioTracks",{get(){return function(e){var t;let i=ce(e).audioTracks;if(!i&&(i=new cx,ce(e).audioTracks=i,cU)){let a=cU.call(null!=(t=e.nativeEl)?t:e);for(let t of a)cS(e,t);a.addEventListener("change",()=>{i.dispatchEvent(new Event("change"))}),a.addEventListener("addtrack",t=>{if([...i].some(e=>e instanceof cO)){for(let e of a)cI(e);return}cS(e,t.track)}),a.addEventListener("removetrack",e=>{cI(e.track)})}return i}(this)}}),"addVideoTrack"in e.prototype||(e.prototype.addVideoTrack=function(e,t="",i=""){let a=new cf;return a.kind=e,a.label=t,a.language=i,ct(this,a),a}),"removeVideoTrack"in e.prototype||(e.prototype.removeVideoTrack=ci),"addAudioTrack"in e.prototype||(e.prototype.addAudioTrack=function(e,t="",i=""){let a=new cO;return a.kind=e,a.label=t,a.language=i,cS(this,a),a}),"removeAudioTrack"in e.prototype||(e.prototype.removeAudioTrack=cI),"videoRenditions"in e.prototype||Object.defineProperty(e.prototype,"videoRenditions",{get(){return a(this)}});let a=e=>{let t=ce(e).videoRenditions;return t||(ce(t=new cp).media=e,ce(e).videoRenditions=t),t};"audioRenditions"in e.prototype||Object.defineProperty(e.prototype,"audioRenditions",{get(){return r(this)}});let r=e=>{let t=ce(e).audioRenditions;return t||(ce(t=new cA).media=e,ce(e).audioRenditions=t),t};return e}function cB(e,t){var i;if(null!=e&&e.prototype)return null==(i=Object.getOwnPropertyDescriptor(e.prototype,`${t}Tracks`))?void 0:i.get}up.push("castchange","entercast","leavecast");var cH,cV,cF,cq,cK,c$,cY,cj,cG,cQ,cZ,cz={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type"},cX=Object.values(cz),cJ=class extends uy{constructor(){super(),ui(this,cQ),ui(this,cH,void 0),ui(this,cV,void 0),ui(this,cF,void 0),ui(this,cq,{}),ui(this,cK,{}),ui(this,c$,void 0),ui(this,cY,void 0),ui(this,cj,void 0),ui(this,cG,void 0),ua(this,cF,dk())}static get observedAttributes(){var e;return[...cX,...null!=(e=uy.observedAttributes)?e:[]]}get preferCmcd(){var e;return null!=(e=this.getAttribute(cz.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?lw.includes(e)?this.setAttribute(cz.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${lw.join()}`):this.removeAttribute(cz.PREFER_CMCD))}get playerInitTime(){return ut(this,cF)}get playerSoftwareName(){var e;return null!=(e=ut(this,cj))?e:"mux-video"}set playerSoftwareName(e){ua(this,cj,e)}get playerSoftwareVersion(){var e;return null!=(e=ut(this,cY))?e:um}set playerSoftwareVersion(e){ua(this,cY,e)}get _hls(){var e;return null==(e=ut(this,cH))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=dD(this.nativeEl))?e:null}get errorTranslator(){return ut(this,cG)}set errorTranslator(e){ua(this,cG,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(cz.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(cz.TYPE,e):this.removeAttribute(cz.TYPE))}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(cz.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(cz.DEBUG,""):this.removeAttribute(cz.DEBUG))}get disableTracking(){return this.hasAttribute(cz.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(cz.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(cz.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(cz.DISABLE_COOKIES,""):this.removeAttribute(cz.DISABLE_COOKIES))}get startTime(){let e=this.getAttribute(cz.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(cz.START_TIME):this.setAttribute(cz.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(cz.PLAYBACK_ID)?this.getAttribute(cz.PLAYBACK_ID):null!=(e=dR(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(cz.PLAYBACK_ID,e):this.removeAttribute(cz.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(cz.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(cz.MAX_RESOLUTION,e):this.removeAttribute(cz.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(cz.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(cz.MIN_RESOLUTION,e):this.removeAttribute(cz.MIN_RESOLUTION))}get renditionOrder(){var e;return null!=(e=this.getAttribute(cz.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(cz.RENDITION_ORDER,e):this.removeAttribute(cz.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(cz.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(cz.PROGRAM_START_TIME):this.setAttribute(cz.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(cz.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(cz.PROGRAM_END_TIME):this.setAttribute(cz.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(cz.ASSET_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){null==e?this.removeAttribute(cz.ASSET_START_TIME):this.setAttribute(cz.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(cz.ASSET_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){null==e?this.removeAttribute(cz.ASSET_END_TIME):this.setAttribute(cz.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(cz.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(cz.CUSTOM_DOMAIN,e):this.removeAttribute(cz.CUSTOM_DOMAIN))}get drmToken(){var e;return null!=(e=this.getAttribute(cz.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(cz.DRM_TOKEN,e):this.removeAttribute(cz.DRM_TOKEN))}get playbackToken(){var e,t,i,a;if(this.hasAttribute(cz.PLAYBACK_TOKEN))return null!=(e=this.getAttribute(cz.PLAYBACK_TOKEN))?e:void 0;if(this.hasAttribute(cz.PLAYBACK_ID)){let[,e]=lD(null!=(t=this.playbackId)?t:"");return null!=(i=new URLSearchParams(e).get("token"))?i:void 0}if(this.src)return null!=(a=new URLSearchParams(this.src).get("token"))?a:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(cz.PLAYBACK_TOKEN,e):this.removeAttribute(cz.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(cz.PLAYBACK_TOKEN),t=this.getAttribute(cz.DRM_TOKEN);return{...ut(this,cK),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{}}}set tokens(e){ua(this,cK,null!=e?e:{})}get ended(){return dH(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(cz.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(cz.ENV_KEY,e):this.removeAttribute(cz.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(cz.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(cz.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(cz.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(cz.STREAM_TYPE))?e:dL(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(cz.STREAM_TYPE,e):this.removeAttribute(cz.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(cz.TARGET_LIVE_WINDOW)?+this.getAttribute(cz.TARGET_LIVE_WINDOW):dM(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(cz.TARGET_LIVE_WINDOW):this.setAttribute(cz.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(cz.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return dN(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(cz.LIVE_EDGE_OFFSET))return+this.getAttribute(cz.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(cz.LIVE_EDGE_OFFSET):this.setAttribute(cz.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return dx(this.nativeEl)}async addCuePoints(e){return lJ(this.nativeEl,e)}get activeCuePoint(){return l1(this.nativeEl)}get cuePoints(){return function(e,t={label:lz}){let i=lQ(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>l0(e)):[]}(this.nativeEl)}async addChapters(e){return l4(this.nativeEl,e)}get activeChapter(){return l8(this.nativeEl)}get chapters(){return function(e,t={label:l3}){var i;let a=lQ(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,e=>l9(e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var e,t;return e=this.nativeEl,(t=this._hls)&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}get preferPlayback(){let e=this.getAttribute(cz.PREFER_PLAYBACK);if(e===lA.MSE||e===lA.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===lA.MSE||e===lA.NATIVE?this.setAttribute(cz.PREFER_PLAYBACK,e):this.removeAttribute(cz.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![cz.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...ut(this,cq)}}set metadata(e){ua(this,cq,null!=e?e:{}),this.mux&&this.mux.emit("hb",ut(this,cq))}get _hlsConfig(){return ut(this,c$)}set _hlsConfig(e){ua(this,c$,e)}load(){ua(this,cH,dV(this,this.nativeEl,ut(this,cH)))}unload(){dF(this.nativeEl,ut(this,cH)),ua(this,cH,void 0)}attributeChangedCallback(e,t,i){var a,r;switch(uy.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case cz.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case cz.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?ur(this,cQ,cZ).call(this):e&&!a?this.unload():e&&a&&(this.unload(),ur(this,cQ,cZ).call(this));break}case"autoplay":if(i===t)break;null==(a=ut(this,cH))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=ut(this,cH))||r.setPreload(i);break;case cz.PLAYBACK_ID:this.src=dS(this);break;case cz.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case cz.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case cz.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case cz.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}))}}connectedCallback(){var e;null==(e=super.connectedCallback)||e.call(this),this.nativeEl&&this.src&&!ut(this,cH)&&ur(this,cQ,cZ).call(this)}disconnectedCallback(){this.unload()}};cH=new WeakMap,cV=new WeakMap,cF=new WeakMap,cq=new WeakMap,cK=new WeakMap,c$=new WeakMap,cY=new WeakMap,cj=new WeakMap,cG=new WeakMap,cQ=new WeakSet,cZ=async function(){ut(this,cV)||(await ua(this,cV,Promise.resolve()),ua(this,cV,null),this.load())};var c0,c1=class extends u8(cW(cJ)){constructor(){super(...arguments),ui(this,c0,void 0)}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=ut(this,c0))?e:this.muxCastCustomData}set castCustomData(e){ua(this,c0,e)}};c0=new WeakMap,uh.customElements.get("mux-video")||(uh.customElements.define("mux-video",c1),uh.MuxVideoElement=c1);var c2=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},c3=(e,t,i)=>(c2(e,t,"read from private field"),i?i.call(e):t.get(e)),c5=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},c9=(e,t,i,a)=>(c2(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let c4={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof hr&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof hr?a.element[a.attributeName]=t:a.value=t}}}};class c8 extends V.DocumentFragment{constructor(e,t,i=c4){var a;super(),c5(this,mX,void 0),c5(this,mJ,void 0),this.append(e.content.cloneNode(!0)),c9(this,mX,c7(this)),c9(this,mJ,i),null==(a=i.createCallback)||a.call(i,this,c3(this,mX),t),i.processCallback(this,c3(this,mX),t)}update(e){c3(this,mJ).processCallback(this,c3(this,mX),e)}}mX=new WeakMap,mJ=new WeakMap;let c7=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new ha;for([i,a]of he(r.value))if(i){let i=new hr(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([i,a]of he(n))if(i){let i=new hn(e);s.push(i),t.push([a,i])}else s.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new hs(e,r);s.push(i),t.push([i.expression,i])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else c7(r,t);return t},c6={},he=e=>{let t="",i=0,a=c6[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),c6[e]=a};class ht{get value(){return""}set value(e){}toString(){return this.value}}let hi=new WeakMap;class ha{constructor(){c5(this,m0,[])}[Symbol.iterator](){return c3(this,m0).values()}get length(){return c3(this,m0).length}item(e){return c3(this,m0)[e]}append(...e){for(let t of e)t instanceof hr&&hi.set(t,this),c3(this,m0).push(t)}toString(){return c3(this,m0).join("")}}m0=new WeakMap;class hr extends ht{constructor(e,t,i){super(),c5(this,m9),c5(this,m1,""),c5(this,m2,void 0),c5(this,m3,void 0),c5(this,m5,void 0),c9(this,m2,e),c9(this,m3,t),c9(this,m5,i)}get attributeName(){return c3(this,m3)}get attributeNamespace(){return c3(this,m5)}get element(){return c3(this,m2)}get value(){return c3(this,m1)}set value(e){c3(this,m1)!==e&&(c9(this,m1,e),c3(this,m9,m4)&&1!==c3(this,m9,m4).length?c3(this,m2).setAttributeNS(c3(this,m5),c3(this,m3),c3(this,m9,m4).toString()):null==e?c3(this,m2).removeAttributeNS(c3(this,m5),c3(this,m3)):c3(this,m2).setAttributeNS(c3(this,m5),c3(this,m3),e))}get booleanValue(){return c3(this,m2).hasAttributeNS(c3(this,m5),c3(this,m3))}set booleanValue(e){if(c3(this,m9,m4)&&1!==c3(this,m9,m4).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}m1=new WeakMap,m2=new WeakMap,m3=new WeakMap,m5=new WeakMap,m9=new WeakSet,m4=function(){return hi.get(this)};class hn extends ht{constructor(e,t){super(),c5(this,m8,void 0),c5(this,m7,void 0),c9(this,m8,e),c9(this,m7,t?[...t]:[new Text])}get replacementNodes(){return c3(this,m7)}get parentNode(){return c3(this,m8)}get nextSibling(){return c3(this,m7)[c3(this,m7).length-1].nextSibling}get previousSibling(){return c3(this,m7)[0].previousSibling}get value(){return c3(this,m7).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),c9(this,m7,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(c3(this,m7)[0].parentNode,c3(this,m7),t,this.nextSibling))}}m8=new WeakMap,m7=new WeakMap;class hs extends hn{constructor(e,t){let i=t.getAttribute("directive")||t.getAttribute("type"),a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let ho={string:e=>String(e)};class hl{constructor(e){this.template=e,this.state=void 0}}let hd=new WeakMap,hu=new WeakMap,hc={partial:(e,t)=>{t[e.expression]=new hl(e.template)},if:(e,t)=>{var i;if(hv(e.expression,t)){if(hd.get(e)!==e.template){hd.set(e,e.template);let i=new c8(e.template,t,hm);e.replace(i),hu.set(e,i)}else null==(i=hu.get(e))||i.update(t)}else e.replace(""),hd.delete(e),hu.delete(e)}},hh=Object.keys(hc),hm={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof hs){if(!n.directive){let e=hh.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=hc[n.directive])||a.call(hc,n,i);continue}let t=hv(e,i);if(t instanceof hl){hd.get(n)!==t.template?(hd.set(n,t.template),t=new c8(t.template,t.state,hm),n.value=t,hu.set(n,t)):null==(r=hu.get(n))||r.update(t.state);continue}t?(n instanceof hr&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof hr?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,hd.delete(n),hu.delete(n))):n instanceof hr?n.value=void 0:(n.value=void 0,hd.delete(n),hu.delete(n))}}},hp={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=ho[t])?void 0:i.call(ho,e)}};function hv(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r;let n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return hE(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return hE(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=hf(d,t))}return i}if(1===d.length)return hb(d[0])?hf(d[0].token,t):hE(e);if(2===d.length){let i=hp[null==(o=d[0])?void 0:o.token];return i&&hb(d[1])?i(hf(d[1].token,t)):hE(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=hp[i];return a&&hb(d[0])&&hb(d[2])?a(hf(d[0].token,t),"|"===i?d[2].token:hf(d[2].token,t)):hE(e)}}function hE(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function hb({type:e}){return["number","boolean","string","param"].includes(e)}function hf(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):I(e)?parseFloat(e):t[e]}var hg=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},h_=(e,t,i)=>(hg(e,t,"read from private field"),i?i.call(e):t.get(e)),hy=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},hT=(e,t,i,a)=>(hg(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),hA=(e,t,i)=>(hg(e,t,"access private method"),i);let hk={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},hw=F.createElement("template");hw.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;

      /* Hide theme element until the breakpoints are available to avoid flicker. */
      visibility: hidden;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class hS extends V.HTMLElement{constructor(){super(),hy(this,pi),hy(this,pr),hy(this,m6,void 0),hy(this,pe,void 0),hy(this,pt,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(hk[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(u.BREAKPOINTS_COMPUTED,this.render),hA(this,pi,pa).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=h_(this,m6))?e:this.constructor.template}set template(e){hT(this,pt,null),hT(this,m6,e),this.createRenderer()}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>hk[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=hk[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(I(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&hA(this,pr,pn).call(this)}connectedCallback(){hA(this,pr,pn).call(this)}createRenderer(){this.template&&this.template!==h_(this,pe)&&(hT(this,pe,this.template),this.renderer=new c8(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(hw.content.cloneNode(!0),this.renderer))}render(){var e;if(null==(e=this.renderer)||e.update(this.props),this.renderRoot.isConnected){let{style:e}=en(this.renderRoot,":host");"hidden"===e.visibility&&e.removeProperty("visibility")}}}async function hI(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function hR(e){return e.split("-")[0]}m6=new WeakMap,pe=new WeakMap,pt=new WeakMap,pi=new WeakSet,pa=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},pr=new WeakSet,pn=function(){var e;let t=this.getAttribute("template");if(!t||t===h_(this,pt))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){hT(this,pt,t),hT(this,m6,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(hT(this,pt,t),hI(t).then(e=>{let t=F.createElement("template");t.innerHTML=e,hT(this,m6,t),this.createRenderer()}).catch(console.error))},hS.observedAttributes=["template"],hS.processor=hm,V.customElements.get("media-theme")||V.customElements.define("media-theme",hS);class hC extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class hD extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var hL=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},hM=(e,t,i)=>(hL(e,t,"read from private field"),i?i.call(e):t.get(e)),hx=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},hN=(e,t,i,a)=>(hL(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),hO=(e,t,i)=>(hL(e,t,"access private method"),i);function hP({type:e,text:t,value:i,checked:a}){let r=F.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=F.createElement("span");return n.textContent=t,r.append(n),r}function hU(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let hW=F.createElement("template");hW.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
      border-radius: var(--media-menu-border-radius);
      border: var(--media-menu-border, none);
      display: var(--media-menu-display, inline-flex);
      transition: var(--media-menu-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out,
        left .2s ease-in-out,
        min-width .2s ease-in-out,
        min-height .2s ease-in-out
      ) !important;
      
      visibility: var(--media-menu-visibility, visible);
      opacity: var(--media-menu-opacity, 1);
      max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
      transform: var(--media-menu-transform-in, translateY(0) scale(1));
      flex-direction: column;
      
      min-height: 0;
      position: relative;
      bottom: var(--_menu-bottom);
      box-sizing: border-box;
    }

    :host([hidden]) {
      transition: var(--media-menu-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-menu-hidden-visibility, hidden);
      opacity: var(--media-menu-hidden-opacity, 0);
      max-height: var(--media-menu-hidden-max-height,
        var(--media-menu-max-height, var(--_menu-max-height, 300px)));
      transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }

    :host([slot="submenu"]) {
      background: none;
      width: 100%;
      min-height: 100%;
      position: absolute;
      bottom: 0;
      right: -100%;
    }

    #container {
      display: flex;
      flex-direction: column;
      min-height: 0;
      transition: transform .2s ease-out;
      transform: translate(0, 0);
    }

    #container.has-expanded {
      transition: transform .2s ease-in;
      transform: translate(-100%, 0);
    }

    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      outline: inherit;
      display: inline-flex;
      align-items: center;
    }

    slot[name="header"][hidden] {
      display: none;
    }

    slot[name="header"] > *,
    slot[name="header"]::slotted(*) {
      padding: .4em .7em;
      border-bottom: 1px solid rgb(255 255 255 / .25);
      cursor: default;
    }

    slot[name="header"] > button[part~="back"],
    slot[name="header"]::slotted(button[part~="back"]) {
      cursor: pointer;
    }

    svg[part~="back"] {
      height: var(--media-menu-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
      margin-right: .5ch;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap);
      flex-direction: var(--media-menu-flex-direction, column);
      overflow: var(--media-menu-overflow, hidden auto);
      display: flex;
      min-height: 0;
    }

    :host([role="menu"]) slot:not([name]) {
      padding-block: .4em;
    }

    slot:not([name])::slotted([role="menu"]) {
      background: none;
    }

    media-chrome-menu-item > span {
      margin-right: .5ch;
      max-width: var(--media-menu-item-max-width);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  </style>
  <style id="layout-row" media="width:0">

    slot[name="header"] > *,
    slot[name="header"]::slotted(*) {
      padding: .4em .5em;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap, .25em);
      flex-direction: var(--media-menu-flex-direction, row);
      padding-inline: .5em;
    }

    media-chrome-menu-item {
      padding: .3em .5em;
    }

    media-chrome-menu-item[aria-checked="true"] {
      background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
    }

    
    media-chrome-menu-item::part(checked-indicator) {
      display: var(--media-menu-item-checked-indicator-display, none);
    }
  </style>
  <div id="container">
    <slot name="header" hidden>
      <button part="back button" aria-label="Back to previous menu">
        <slot name="back-icon">
          <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
            <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
          </svg>
        </slot>
        <slot name="title"></slot>
      </button>
    </slot>
    <slot></slot>
  </div>
  <slot name="checked-indicator" hidden></slot>
`;let hB={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class hH extends V.HTMLElement{constructor(){super(),hx(this,pm),hx(this,pE),hx(this,pf),hx(this,p_),hx(this,pT),hx(this,pS),hx(this,pR),hx(this,pD),hx(this,pM),hx(this,pN),hx(this,pP),hx(this,pW),hx(this,pH),hx(this,pF),hx(this,pK),hx(this,pY),hx(this,pG),hx(this,ps,null),hx(this,po,null),hx(this,pl,null),hx(this,pd,new Set),hx(this,pu,void 0),hx(this,pc,!1),hx(this,ph,null),hx(this,pv,()=>{let e=hM(this,pd),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));hN(this,pd,t)}),hx(this,pk,()=>{hO(this,pS,pI).call(this),hO(this,pR,pC).call(this,!1)}),hx(this,pw,()=>{hO(this,pS,pI).call(this)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),hN(this,pu,new MutationObserver(hM(this,pv))),hM(this,pu).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[hB.DISABLED,hB.HIDDEN,hB.STYLE,hB.ANCHOR,s.MEDIA_CONTROLLER]}static formatMenuItemText(e){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":hO(this,pm,pp).call(this,e);break;case"invoke":hO(this,pf,pg).call(this,e);break;case"click":hO(this,pD,pL).call(this,e);break;case"toggle":hO(this,pN,pO).call(this,e);break;case"focusout":hO(this,pW,pB).call(this,e);break;case"keydown":hO(this,pH,pV).call(this,e)}}connectedCallback(){var e,t;hN(this,ph,es(this.shadowRoot,":host")),hO(this,pE,pb).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),hN(this,ps,Q(this)),null==(t=null==(e=hM(this,ps))?void 0:e.associateElement)||t.call(e,this),this.hidden||(Y(hF(this),hM(this,pk)),Y(this,hM(this,pw)))}disconnectedCallback(){var e,t;j(hF(this),hM(this,pk)),j(this,hM(this,pw)),this.disable(),null==(t=null==(e=hM(this,ps))?void 0:e.unassociateElement)||t.call(e,this),hN(this,ps,null)}attributeChangedCallback(e,t,i){var a,r,n,o;e===hB.HIDDEN&&i!==t?(hM(this,pc)||hN(this,pc,!0),this.hidden?hO(this,pT,pA).call(this):hO(this,p_,py).call(this),this.dispatchEvent(new hD({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=hM(this,ps))?void 0:a.unassociateElement)||r.call(a,this),hN(this,ps,null)),i&&this.isConnected&&(hN(this,ps,Q(this)),null==(o=null==(n=hM(this,ps))?void 0:n.associateElement)||o.call(n,this))):e===hB.DISABLED&&i!==t?null==i?this.enable():this.disable():e===hB.STYLE&&i!==t&&hO(this,pE,pb).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=ei(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(hV)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&hO(this,pG,pQ).call(this,t)}focus(){if(hN(this,po,et()),this.items.length){hO(this,pY,pj).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=hO(this,pF,pq).call(this,e);i&&(hO(this,pG,pQ).call(this,i,"checkbox"===i.type),hM(this,pl)&&!this.hidden&&(null==(t=hM(this,po))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=hO(this,pF,pq).call(this,e))?t:hO(this,pK,p$).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),hO(this,pY,pj).call(this,r[s]),r[s].focus()}}function hV(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function hF(e){var t;return null!=(t=e.getAttribute("bounds")?ee(e,`#${e.getAttribute("bounds")}`):G(e)||e.parentElement)?t:e}ps=new WeakMap,po=new WeakMap,pl=new WeakMap,pd=new WeakMap,pu=new WeakMap,pc=new WeakMap,ph=new WeakMap,pm=new WeakSet,pp=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&(this.shadowRoot.querySelector('slot[name="header"]').hidden=0===t.assignedNodes().length),t.name||hM(this,pv).call(this)},pv=new WeakMap,pE=new WeakSet,pb=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},pf=new WeakSet,pg=function(e){hN(this,pl,e.relatedTarget),J(this,e.relatedTarget)||(this.hidden=!this.hidden)},p_=new WeakSet,py=function(){var e;null==(e=hM(this,pl))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),Y(hF(this),hM(this,pk)),Y(this,hM(this,pw))},pT=new WeakSet,pA=function(){var e;null==(e=hM(this,pl))||e.setAttribute("aria-expanded","false"),j(hF(this),hM(this,pk)),j(this,hM(this,pw))},pk=new WeakMap,pw=new WeakMap,pS=new WeakSet,pI=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a;let r="x"==(["top","bottom"].includes(hR(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=hR(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){return{anchor:function(e,t){var i;let a=e.getBoundingClientRect(),r=null!=(i=null==t?void 0:t.getBoundingClientRect())?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=hF(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=hM(this,ph);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},pR=new WeakSet,pC=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=hM(this,ph);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),hO(this,pS,pI).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),hO(this,pS,pI).call(this);a.removeProperty("--media-menu-transition-in")},pD=new WeakSet,pL=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(hM(this,pM,px))){null==(t=hM(this,po))||t.focus(),this.hidden=!0;return}let i=hO(this,pF,pq).call(this,e);!i||i.hasAttribute("disabled")||(hO(this,pY,pj).call(this,i),this.handleSelect(e))},pM=new WeakSet,px=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},pN=new WeakSet,pO=function(e){if(e.target===this)return;hO(this,pP,pU).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement==e.target||"open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new hC({relatedTarget:i}));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);hO(this,pR,pC).call(this,!0)},pP=new WeakSet,pU=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},pW=new WeakSet,pB=function(e){var t;J(this,e.relatedTarget)||(hM(this,pc)&&(null==(t=hM(this,po))||t.focus()),!hM(this,pl)||hM(this,pl)===e.relatedTarget||this.hidden||(this.hidden=!0))},pH=new WeakSet,pV=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s)){if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(hM(this,pc)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=hM(this,po))||n.focus(),hM(this,pc)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)}},pF=new WeakSet,pq=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},pK=new WeakSet,p$=function(){return this.items.find(e=>0===e.tabIndex)},pY=new WeakSet,pj=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},pG=new WeakSet,pQ=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},hH.template=hW,V.customElements.get("media-chrome-menu")||V.customElements.define("media-chrome-menu",hH);var hq=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},hK=(e,t,i)=>(hq(e,t,"read from private field"),i?i.call(e):t.get(e)),h$=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},hY=(e,t,i,a)=>(hq(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),hj=(e,t,i)=>(hq(e,t,"access private method"),i);let hG=F.createElement("template");hG.innerHTML=`
  <style>
    :host {
      transition: var(--media-menu-item-transition,
        background .15s linear,
        opacity .2s ease-in-out
      );
      outline: var(--media-menu-item-outline, 0);
      outline-offset: var(--media-menu-item-outline-offset, -1px);
      cursor: pointer;
      display: flex;
      align-items: center;
      align-self: stretch;
      justify-self: stretch;
      white-space: nowrap;
      white-space-collapse: collapse;
      text-wrap: nowrap;
      padding: .4em .8em .4em 1em;
    }

    :host(:focus-visible) {
      box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      outline: var(--media-menu-item-hover-outline, 0);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host(:hover) {
      cursor: pointer;
      background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
      outline: var(--media-menu-item-hover-outline);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host([aria-checked="true"]) {
      background: var(--media-menu-item-checked-background);
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      pointer-events: none;
      color: rgba(255, 255, 255, .3);
    }

    slot:not([name]) {
      width: 100%;
    }

    slot:not([name="submenu"]) {
      display: inline-flex;
      align-items: center;
      transition: inherit;
      opacity: var(--media-menu-item-opacity, 1);
    }

    slot[name="description"] {
      justify-content: end;
    }

    slot[name="description"] > span {
      display: inline-block;
      margin-inline: 1em .2em;
      max-width: var(--media-menu-item-description-max-width, 100px);
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: .8em;
      font-weight: 400;
      text-align: right;
      position: relative;
      top: .04em;
    }

    slot[name="checked-indicator"] {
      display: none;
    }

    :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
      display: var(--media-menu-item-checked-indicator-display, inline-block);
    }

    
    svg, img, ::slotted(svg), ::slotted(img) {
      height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
    }

    
    [part~="indicator"],
    ::slotted([part~="indicator"]) {
      fill: var(--media-menu-item-indicator-fill,
        var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
      height: var(--media-menu-item-indicator-height, 1.25em);
      margin-right: .5ch;
    }

    [part~="checked-indicator"] {
      visibility: hidden;
    }

    :host([aria-checked="true"]) [part~="checked-indicator"] {
      visibility: visible;
    }
  </style>
  <slot name="checked-indicator">
    <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
      <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
    </svg>
  </slot>
  <slot name="prefix"></slot>
  <slot></slot>
  <slot name="description"></slot>
  <slot name="suffix"></slot>
  <slot name="submenu"></slot>
`;let hQ={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class hZ extends V.HTMLElement{constructor(){super(),h$(this,pX),h$(this,p0),h$(this,p2),h$(this,p9),h$(this,p8),h$(this,p6),h$(this,pZ,!1),h$(this,pz,void 0),h$(this,p5,()=>{var e,t;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=F.createElement("span");n.textContent=null!=r?r:"",i.replaceChildren(n)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.append(this.constructor.template.content.cloneNode(!0))),this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[hQ.TYPE,hQ.DISABLED,hQ.CHECKED,hQ.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),hz(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":hj(this,pX,pJ).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":hj(this,p8,p7).call(this,e);break;case"keyup":hj(this,p9,p4).call(this,e)}}attributeChangedCallback(e,t,i){e===hQ.CHECKED&&hz(this)&&!hK(this,pZ)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===hQ.TYPE&&i!==t?this.role="menuitem"+i:e===hQ.DISABLED&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(hQ.DISABLED)||this.enable(),this.role="menuitem"+this.type,hY(this,pz,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),hj(this,p6,ve).call(this)}disconnectedCallback(){this.disable(),hj(this,p6,ve).call(this),hY(this,pz,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=ei(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(hQ.TYPE))?e:""}set type(e){this.setAttribute(hQ.TYPE,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(hQ.VALUE))?e:this.text}set value(e){this.setAttribute(hQ.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(hz(this))return"true"===this.getAttribute("aria-checked")}set checked(e){hz(this)&&(hY(this,pZ,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!hz(this)&&this.invokeTargetElement&&J(this,e.target)&&this.invokeTargetElement.dispatchEvent(new hC({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function hz(e){return"radio"===e.type||"checkbox"===e.type}pZ=new WeakMap,pz=new WeakMap,pX=new WeakSet,pJ=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?hj(this,p0,p1).call(this):hj(this,p2,p3).call(this))},p0=new WeakSet,p1=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",hK(this,p5)),this.submenuElement.addEventListener("addmenuitem",hK(this,p5)),this.submenuElement.addEventListener("removemenuitem",hK(this,p5)),hK(this,p5).call(this)},p2=new WeakSet,p3=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",hK(this,p5)),this.submenuElement.removeEventListener("addmenuitem",hK(this,p5)),this.submenuElement.removeEventListener("removemenuitem",hK(this,p5)),hK(this,p5).call(this)},p5=new WeakMap,p9=new WeakSet,p4=function(e){let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",hj(this,p9,p4));return}this.handleClick(e)},p8=new WeakSet,p7=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",hj(this,p9,p4));return}this.addEventListener("keyup",hj(this,p9,p4),{once:!0})},p6=new WeakSet,ve=function(){var e;let t=null==(e=hK(this,pz))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},hZ.template=hG,V.customElements.get("media-chrome-menu-item")||V.customElements.define("media-chrome-menu-item",hZ);let hX=F.createElement("template");hX.innerHTML=hH.template.innerHTML+`
  <style>
    :host {
      background: var(--media-settings-menu-background,
        var(--media-menu-background,
        var(--media-control-background,
        var(--media-secondary-color, rgb(20 20 30 / .8)))));
      min-width: var(--media-settings-menu-min-width, 170px);
      border-radius: 2px 2px 0 0;
      overflow: hidden;
    }

    :host([role="menu"]) {
      
      justify-content: end;
    }

    slot:not([name]) {
      justify-content: var(--media-settings-menu-justify-content);
      flex-direction: var(--media-settings-menu-flex-direction, column);
      overflow: visible;
    }

    #container.has-expanded {
      --media-settings-menu-item-opacity: 0;
    }
  </style>
`;class hJ extends hH{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:G(this).querySelector("media-settings-menu-button")}}hJ.template=hX,V.customElements.get("media-settings-menu")||V.customElements.define("media-settings-menu",hJ);let h0=F.createElement("template");h0.innerHTML=hZ.template.innerHTML+`
  <style>
    slot:not([name="submenu"]) {
      opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
    }

    :host([aria-expanded="true"]:hover) {
      background: transparent;
    }
  </style>
`,(null==(vt=h0.content)?void 0:vt.querySelector)&&(h0.content.querySelector('slot[name="suffix"]').innerHTML=`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `);class h1 extends hZ{}h1.template=h0,V.customElements.get("media-settings-menu-item")||V.customElements.define("media-settings-menu-item",h1);class h2 extends tU{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=ei(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new hC({relatedTarget:this}))}}V.customElements.get("media-chrome-menu-button")||V.customElements.define("media-chrome-menu-button",h2);let h3=F.createElement("template");h3.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
    </svg>
  </slot>
`;class h5 extends h2{static get observedAttributes(){return[...super.observedAttributes,"target"]}constructor(){super({slotTemplate:h3,tooltipContent:"Settings"})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",_.SETTINGS())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:G(this).querySelector("media-settings-menu")}}V.customElements.get("media-settings-menu-button")||V.customElements.define("media-settings-menu-button",h5);var h9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},h4=(e,t,i)=>(h9(e,t,"read from private field"),i?i.call(e):t.get(e)),h8=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},h7=(e,t,i,a)=>(h9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),h6=(e,t,i)=>(h9(e,t,"access private method"),i);class me extends hH{constructor(){super(...arguments),h8(this,vr),h8(this,vs),h8(this,vi,[]),h8(this,va,void 0)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_AUDIO_TRACK_LIST,d.MEDIA_AUDIO_TRACK_ENABLED,d.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===d.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===d.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;h7(this,vi,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(w)),h6(this,vr,vn).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",h6(this,vs,vo))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",h6(this,vs,vo))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=G(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return h4(this,vi)}set mediaAudioTrackList(e){h7(this,vi,e),h6(this,vr,vn).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=ec(this,d.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){eh(this,d.MEDIA_AUDIO_TRACK_ENABLED,e)}}vi=new WeakMap,va=new WeakMap,vr=new WeakSet,vn=function(){if(h4(this,va)===JSON.stringify(this.mediaAudioTrackList))return;h7(this,va,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e)){let e=hP({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(hU(this,"checked-indicator")),this.defaultSlot.append(e)}},vs=new WeakSet,vo=function(){if(null==this.value)return;let e=new V.CustomEvent(n.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},V.customElements.get("media-audio-track-menu")||V.customElements.define("media-audio-track-menu",me);let mt=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,mi=F.createElement("template");mi.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">${mt}</slot>
`;class ma extends h2{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_AUDIO_TRACK_ENABLED,d.MEDIA_AUDIO_TRACK_UNAVAILABLE]}constructor(){super({slotTemplate:mi,tooltipContent:"Audio"})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",_.AUDIO_TRACKS())}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=G(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=ec(this,d.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){eh(this,d.MEDIA_AUDIO_TRACK_ENABLED,e)}}V.customElements.get("media-audio-track-menu-button")||V.customElements.define("media-audio-track-menu-button",ma);var mr=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},mn=(e,t,i)=>(mr(e,t,"read from private field"),i?i.call(e):t.get(e)),ms=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},mo=(e,t,i,a)=>(mr(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ml=(e,t,i)=>(mr(e,t,"access private method"),i);let md=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`,mu=F.createElement("template");mu.innerHTML=hH.template.innerHTML+`
  <slot name="captions-indicator" hidden>${md}</slot>`;class mc extends hH{constructor(){super(...arguments),ms(this,vd),ms(this,vc),ms(this,vl,void 0)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_SUBTITLES_LIST,d.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_SUBTITLES_LIST&&t!==i?ml(this,vd,vu).call(this):e===d.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ml(this,vc,vh))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ml(this,vc,vh))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:G(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return mh(this,d.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){mm(this,d.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return mh(this,d.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){mm(this,d.MEDIA_SUBTITLES_SHOWING,e)}}vl=new WeakMap,vd=new WeakSet,vu=function(){var e;if(mn(this,vl)===JSON.stringify(this.mediaSubtitlesList))return;mo(this,vl,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";let t=!this.value,i=hP({type:"radio",text:this.formatMenuItemText("Off"),value:"off",checked:t});for(let t of(i.prepend(hU(this,"checked-indicator")),this.defaultSlot.append(i),this.mediaSubtitlesList)){let i=hP({type:"radio",text:this.formatMenuItemText(t.label,t),value:eU(t),checked:this.value==eU(t)});i.prepend(hU(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(hU(this,"captions-indicator")),this.defaultSlot.append(i)}},vc=new WeakSet,vh=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(d.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new V.CustomEvent(n.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new V.CustomEvent(n.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},mc.template=mu;let mh=(e,t)=>{let i=e.getAttribute(t);return i?eO(i):[]},mm=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=eW(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};V.customElements.get("media-captions-menu")||V.customElements.define("media-captions-menu",mc);var mp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},mv=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},mE=(e,t,i,a)=>(mp(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let mb=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,mf=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,mg=F.createElement("template");mg.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }

    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="on">${mb}</slot>
    <slot name="off">${mf}</slot>
  </slot>
`;let m_=e=>{e.setAttribute("aria-checked",eq(e).toString())};class my extends h2{constructor(e={}){super({slotTemplate:mg,tooltipContent:"Captions",...e}),mv(this,vm,void 0),mE(this,vm,!1)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_SUBTITLES_LIST,d.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",_.CLOSED_CAPTIONS()),m_(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_SUBTITLES_SHOWING&&m_(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=G(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return mT(this,d.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){mA(this,d.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return mT(this,d.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){mA(this,d.MEDIA_SUBTITLES_SHOWING,e)}}vm=new WeakMap;let mT=(e,t)=>{let i=e.getAttribute(t);return i?eO(i):[]},mA=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=eW(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};V.customElements.get("media-captions-menu-button")||V.customElements.define("media-captions-menu-button",my);var mk=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},mw=(e,t,i)=>(mk(e,t,"read from private field"),i?i.call(e):t.get(e)),mS=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},mI=(e,t,i)=>(mk(e,t,"access private method"),i);let mR={RATES:"rates"};class mC extends hH{constructor(){super(),mS(this,vv),mS(this,vb),mS(this,vp,new eM(this,mR.RATES,{defaultValue:i6})),mI(this,vv,vE).call(this)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PLAYBACK_RATE,mR.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===mR.RATES&&t!=i&&(mw(this,vp).value=i,mI(this,vv,vE).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",mI(this,vb,vf))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",mI(this,vb,vf))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:G(this).querySelector("media-playback-rate-menu-button")}get rates(){return mw(this,vp)}set rates(e){e?Array.isArray(e)&&(mw(this,vp).value=e.join(" ")):mw(this,vp).value="",mI(this,vv,vE).call(this)}get mediaPlaybackRate(){return eo(this,d.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){el(this,d.MEDIA_PLAYBACK_RATE,e)}}vp=new WeakMap,vv=new WeakSet,vE=function(){for(let e of(this.defaultSlot.textContent="",this.rates)){let t=hP({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate==e});t.prepend(hU(this,"checked-indicator")),this.defaultSlot.append(t)}},vb=new WeakSet,vf=function(){if(!this.value)return;let e=new V.CustomEvent(n.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},V.customElements.get("media-playback-rate-menu")||V.customElements.define("media-playback-rate-menu",mC);var mD=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},mL=(e,t,i)=>(mD(e,t,"read from private field"),i?i.call(e):t.get(e)),mM=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let mx="rates",mN=[1,1.2,1.5,1.7,2],mO=F.createElement("template");mO.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
    
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon"></slot>
`;class mP extends h2{constructor(e={}){super({slotTemplate:mO,tooltipContent:g,...e}),mM(this,vg,new eM(this,mx,{defaultValue:mN})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PLAYBACK_RATE,mx]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===mx&&(mL(this,vg).value=i),e===d.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",_.PLAYBACK_RATE({playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:G(this).querySelector("media-playback-rate-menu")}get rates(){return mL(this,vg)}set rates(e){e?Array.isArray(e)&&(mL(this,vg).value=e.join(" ")):mL(this,vg).value=""}get mediaPlaybackRate(){return eo(this,d.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){el(this,d.MEDIA_PLAYBACK_RATE,e)}}vg=new WeakMap,V.customElements.get("media-playback-rate-menu-button")||V.customElements.define("media-playback-rate-menu-button",mP);var mU=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},mW=(e,t,i)=>(mU(e,t,"read from private field"),i?i.call(e):t.get(e)),mB=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},mH=(e,t,i,a)=>(mU(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),mV=(e,t,i)=>(mU(e,t,"access private method"),i);class mF extends hH{constructor(){super(...arguments),mB(this,vT),mB(this,vk),mB(this,v_,[]),mB(this,vy,{})}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_RENDITION_LIST,d.MEDIA_RENDITION_SELECTED,d.MEDIA_RENDITION_UNAVAILABLE,d.MEDIA_HEIGHT]}attributeChangedCallback(e,t,i){(super.attributeChangedCallback(e,t,i),e===d.MEDIA_RENDITION_SELECTED&&t!==i)?this.value=null!=i?i:"auto":e===d.MEDIA_RENDITION_LIST&&t!==i?(mH(this,v_,null==i?void 0:i.split(/\s+/).map(A)),mV(this,vT,vA).call(this)):e===d.MEDIA_HEIGHT&&t!==i&&mV(this,vT,vA).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",mV(this,vk,vw))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",mV(this,vk,vw))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:G(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return mW(this,v_)}set mediaRenditionList(e){mH(this,v_,e),mV(this,vT,vA).call(this)}get mediaRenditionSelected(){return ec(this,d.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){eh(this,d.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return eo(this,d.MEDIA_HEIGHT)}set mediaHeight(e){el(this,d.MEDIA_HEIGHT,e)}}v_=new WeakMap,vy=new WeakMap,vT=new WeakSet,vA=function(){if(mW(this,vy).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&mW(this,vy).mediaHeight===this.mediaHeight)return;mW(this,vy).mediaRenditionList=JSON.stringify(this.mediaRenditionList),mW(this,vy).mediaHeight=this.mediaHeight;let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height);for(let t of e)t.selected=t.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";let t=!this.mediaRenditionSelected;for(let i of e){let e=hP({type:"radio",text:this.formatMenuItemText(`${Math.min(i.width,i.height)}p`,i),value:`${i.id}`,checked:i.selected&&!t});e.prepend(hU(this,"checked-indicator")),this.defaultSlot.append(e)}let i=hP({type:"radio",text:this.formatMenuItemText("Auto"),value:"auto",checked:t}),a=this.mediaHeight>0?`Auto (${this.mediaHeight}p)`:"Auto";i.dataset.description=a,i.prepend(hU(this,"checked-indicator")),this.defaultSlot.append(i)},vk=new WeakSet,vw=function(){if(null==this.value)return;let e=new V.CustomEvent(n.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},V.customElements.get("media-rendition-menu")||V.customElements.define("media-rendition-menu",mF);let mq=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,mK=F.createElement("template");mK.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">${mq}</slot>
`;class m$ extends h2{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_RENDITION_SELECTED,d.MEDIA_RENDITION_UNAVAILABLE,d.MEDIA_HEIGHT]}constructor(){super({slotTemplate:mK,tooltipContent:"Quality"})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",_.QUALITY())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:G(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return ec(this,d.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){eh(this,d.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return eo(this,d.MEDIA_HEIGHT)}set mediaHeight(e){el(this,d.MEDIA_HEIGHT,e)}}V.customElements.get("media-rendition-menu-button")||V.customElements.define("media-rendition-menu-button",m$);var mY=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},mj=(e,t,i)=>(mY(e,t,"read from private field"),i?i.call(e):t.get(e)),mG=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},mQ=(e,t,i,a)=>(mY(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),mZ=(e,t,i)=>(mY(e,t,"access private method"),i),mz=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends mz{}globalThis.DocumentFragment=e}var mX,mJ,m0,m1,m2,m3,m5,m9,m4,m8,m7,m6,pe,pt,pi,pa,pr,pn,ps,po,pl,pd,pu,pc,ph,pm,pp,pv,pE,pb,pf,pg,p_,py,pT,pA,pk,pw,pS,pI,pR,pC,pD,pL,pM,px,pN,pO,pP,pU,pW,pB,pH,pV,pF,pq,pK,p$,pY,pj,pG,pQ,pZ,pz,pX,pJ,p0,p1,p2,p3,p5,p9,p4,p8,p7,p6,ve,vt,vi,va,vr,vn,vs,vo,vl,vd,vu,vc,vh,vm,vp,vv,vE,vb,vf,vg,v_,vy,vT,vA,vk,vw,vS,vI=class extends mz{},vR=class{constructor(e,t={}){mG(this,vS,void 0),mQ(this,vS,null==t?void 0:t.detail)}get detail(){return mj(this,vS)}initCustomEvent(){}};vS=new WeakMap;var vC={document:{createElement:function(e,t){return new vI}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(vI)},CustomEvent:vR,EventTarget:mz,HTMLElement:vI,HTMLVideoElement:class extends mz{}},vD="undefined"==typeof window||void 0===globalThis.customElements,vL=vD?vC:globalThis,vM=vD?vC.document:globalThis.document;function vx(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function vN(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function vO(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function vP(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}var vU,vW,vB,vH=(e,t)=>!!e&&!!t&&(!!e.contains(t)||vH(e,t.getRootNode().host)),vV="mux.com",vF=(()=>{try{return"3.1.0"}catch{}return"UNKNOWN"})(),vq=(e,{token:t,customDomain:i=vV,thumbnailTime:a,programTime:r}={})=>{var n;let s=null==t?a:void 0,{aud:o}=null!=(n=lO(t))?n:{};if(!(t&&"t"!==o))return`https://image.${i}/${e}/thumbnail.webp${vP({token:t,time:s,program_time:r})}`},vK=(e,{token:t,customDomain:i=vV,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=null!=(n=lO(t))?n:{};if(!(t&&"s"!==s))return`https://image.${i}/${e}/storyboard.vtt${vP({token:t,format:"webp",program_start_time:a,program_end_time:r})}`},v$=e=>{if(e){if([lT.LIVE,lT.ON_DEMAND].includes(e))return e;if(null!=e&&e.includes("live"))return lT.LIVE}},vY={crossorigin:"crossOrigin",playsinline:"playsInline"},vj=class{constructor(e,t){mG(this,vU,void 0),mG(this,vW,void 0),mG(this,vB,[]),mQ(this,vU,e),mQ(this,vW,t)}[Symbol.iterator](){return mj(this,vB).values()}get length(){return mj(this,vB).length}get value(){var e;return null!=(e=mj(this,vB).join(" "))?e:""}set value(e){var t;e!==this.value&&(mQ(this,vB,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return mj(this,vB)[e]}values(){return mj(this,vB).values()}keys(){return mj(this,vB).keys()}forEach(e){mj(this,vB).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||mj(this,vB).push(e)}),(""!==this.value||null!=(t=mj(this,vU))&&t.hasAttribute(`${mj(this,vW)}`))&&null!=(i=mj(this,vU))&&i.setAttribute(`${mj(this,vW)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{mj(this,vB).splice(mj(this,vB).indexOf(e),1)}),null==(t=mj(this,vU))||t.setAttribute(`${mj(this,vW)}`,`${this.value}`)}contains(e){return mj(this,vB).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};vU=new WeakMap,vW=new WeakMap,vB=new WeakMap;var vG=`[mux-player ${vF}]`;function vQ(...e){console.warn(vG,...e)}function vZ(...e){console.error(vG,...e)}function vz(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${lH("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),vQ(i)}var vX,vJ={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},v0={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},v1=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),v2=up.filter(e=>"error"!==e),v3=Object.values(vJ).filter(e=>![vJ.PLAYSINLINE].includes(e)),v5=Object.values(v0),v9=class extends vL.HTMLElement{constructor(){super(),mG(this,vX,new WeakMap),new MutationObserver(e=>{for(let t of e)"childList"===t.type&&(t.removedNodes.forEach(e=>{var t;null==(t=mj(this,vX).get(e))||t.remove()}),t.addedNodes.forEach(e=>{var t;null!=e&&e.slot||null==(t=this.media)||t.append(v8(mj(this,vX),e))}))}).observe(this,{childList:!0,subtree:!0})}static get observedAttributes(){return[...v3,...v5]}init(){this.querySelectorAll(":scope > :not([slot])").forEach(e=>{var t;null==(t=this.media)||t.append(v8(mj(this,vX),e))}),v2.forEach(e=>{var t;null==(t=this.media)||t.addEventListener(e,e=>{this.dispatchEvent(new Event(e.type))})})}attributeChangedCallback(e,t,i){var a,r;switch(e){case v0.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case v0.VOLUME:{let e=null!=(a=vO(i))?a:1;this.media&&(this.media.volume=e);return}case v0.PLAYBACKRATE:{let e=null!=(r=vO(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}requestCast(e){var t;return null==(t=this.media)?void 0:t.requestCast(e)}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:v1}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:v1}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=vO(this.getAttribute(v0.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(v0.PLAYBACKRATE,`${e}`):this.removeAttribute(v0.PLAYBACKRATE)}get crossOrigin(){return v4(this,vJ.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(vJ.CROSSORIGIN,`${e}`)}get autoplay(){return null!=v4(this,vJ.AUTOPLAY)}set autoplay(e){e?this.setAttribute(vJ.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(vJ.AUTOPLAY)}get loop(){return null!=v4(this,vJ.LOOP)}set loop(e){e?this.setAttribute(vJ.LOOP,""):this.removeAttribute(vJ.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=v4(this,vJ.MUTED)}set defaultMuted(e){e?this.setAttribute(vJ.MUTED,""):this.removeAttribute(vJ.MUTED)}get playsInline(){return null!=v4(this,vJ.PLAYSINLINE)}set playsInline(e){vZ("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(vJ.PRELOAD,e):this.removeAttribute(vJ.PRELOAD)}};function v4(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}function v8(e,t){let i=e.get(t);return i||(i=t.cloneNode(),e.set(t,i)),i}vX=new WeakMap;var v7=v9,v6=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  width: 100%;
  line-height: 0;
}

/* Hide custom elements that are not defined yet */
:not(:defined) {
  display: none;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,Ee=`
  :host {
    z-index: 100;
    display: var(--media-dialog-display, flex);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    color: #fff;
    line-height: 18px;
    font-family: Arial, sans-serif;
    padding: var(--media-dialog-backdrop-padding, 0);
    background: var(--media-dialog-backdrop-background,
      linear-gradient(to bottom, rgba(20, 20, 30, 0.7) 50%, rgba(20, 20, 30, 0.9))
    );
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-open, visibility .2s, opacity .2s) !important;
    transform: var(--media-dialog-transform-open, none) !important;
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: auto !important;
  }

  :host(:not([open])) {
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-close, visibility .1s, opacity .1s) !important;
    transform: var(--media-dialog-transform-close, none) !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }

  :focus-visible {
    box-shadow: 0 0 0 2px rgba(27, 127, 204, 0.9);
  }

  .dialog {
    position: relative;
    box-sizing: border-box;
    background: var(--media-dialog-background, none);
    padding: var(--media-dialog-padding, 10px);
    width: min(320px, 100%);
    word-wrap: break-word;
    max-height: 100%;
    overflow: auto;
    text-align: center;
    line-height: 1.4;
  }
`,Et=vM.createElement("template");Et.innerHTML=`
  <style>
    ${Ee}
  </style>

  <div class="dialog">
    <slot></slot>
  </div>
`;var Ei=class extends vL.HTMLElement{constructor(){var e;super(),this.attachShadow({mode:"open"}),null==(e=this.shadowRoot)||e.appendChild(this.constructor.template.content.cloneNode(!0))}show(){this.setAttribute("open",""),this.dispatchEvent(new CustomEvent("open",{composed:!0,bubbles:!0})),Ea(this)}close(){this.hasAttribute("open")&&(this.removeAttribute("open"),this.dispatchEvent(new CustomEvent("close",{composed:!0,bubbles:!0})),this._previouslyFocusedElement instanceof HTMLElement&&this._previouslyFocusedElement.focus())}attributeChangedCallback(e,t,i){"open"===e&&t!==i&&(null!=i?this.show():this.close())}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","dialog"),this.hasAttribute("open")&&Ea(this)}};function Ea(e){let t=new CustomEvent("initfocus",{composed:!0,bubbles:!0,cancelable:!0});if(e.dispatchEvent(t),t.defaultPrevented)return;let i=e.querySelector("[autofocus]:not([disabled])");!i&&e.tabIndex>=0&&(i=e),i||(i=function e(t){let i=["button","input","keygen","select","textarea"].map(function(e){return e+":not([disabled])"});i.push('[tabindex]:not([disabled]):not([tabindex=""])');let a=null==t?void 0:t.querySelector(i.join(", "));if(!a&&"attachShadow"in Element.prototype){let i=(null==t?void 0:t.querySelectorAll("*"))||[];for(let t=0;t<i.length&&!(i[t].tagName&&i[t].shadowRoot&&(a=e(i[t].shadowRoot)));t++);}return a}(e.shadowRoot)),e._previouslyFocusedElement=vM.activeElement,vM.activeElement instanceof HTMLElement&&vM.activeElement.blur(),e.addEventListener("transitionend",()=>{i instanceof HTMLElement&&i.focus({preventScroll:!0})},{once:!0})}Ei.styles=Ee,Ei.template=Et,Ei.observedAttributes=["open"],vL.customElements.get("media-dialog")||(vL.customElements.define("media-dialog",Ei),vL.MediaDialog=Ei);var Er=Ei,En=vM.createElement("template");En.innerHTML=`
  <style>
    ${Er.styles}

    .close {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      width: 28px;
      height: 28px;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  </style>

  <div class="dialog">
    <slot></slot>
  </div>

  <slot name="close">
    <button class="close" tabindex="0">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </slot>
`;var Es=class extends Er{constructor(){var e,t;super(),null==(t=null==(e=this.shadowRoot)?void 0:e.querySelector(".close"))||t.addEventListener("click",()=>{this.close()})}};Es.template=En,vL.customElements.get("mxp-dialog")||(vL.customElements.define("mxp-dialog",Es),vL.MxpDialog=Es);var Eo=new WeakMap,El=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=Eo.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=Eo.get(this.element);e&&e.delete(this.type)}}static for(t){Eo.has(t.element)||Eo.set(t.element,new Map);let i=t.attributeName.slice(2),a=Eo.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},Ed=new Map,Eu=new WeakMap,Ec=new WeakMap,Eh=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(Ed.has(this.stringsKey))return Ed.get(this.stringsKey);{let e=vM.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),Ed.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(Eu.get(e)!==i){Eu.set(e,i);let t=new c8(i,this.values,this.processor);Ec.set(e,t),e instanceof hn?e.replace(...t.children):e.appendChild(t);return}let a=Ec.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},Em={processCallback(e,t,i){var a,r,n;if(i)for(let[e,s]of t){e in i&&(function(e,t){if(e instanceof hr&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1}(r=s,n=null!=(a=i[e])?a:"")||function(e,t){if("boolean"==typeof t&&e instanceof hr){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(r,n)||r instanceof hr&&r.attributeName.startsWith("on")&&(El.for(r).set(n),r.element.removeAttributeNS(r.attributeNamespace,r.attributeName),1)||!1===n&&r instanceof hn&&(r.replace(""),1)||n instanceof Eh&&r instanceof hn&&(n.renderInto(r),1)||n instanceof DocumentFragment&&r instanceof hn&&(n.childNodes.length&&r.replace(...n.childNodes),1)||function(e,t){if(e instanceof hr){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(r,n))}}};function Ep(e,...t){return new Eh(e,t,Em)}var Ev=e=>{let{tokens:t}=e;return t.drm?":host { --_cast-button-drm-display: none; }":""},EE=e=>Ep`
  <style>
    ${Ev(e)}
    ${v6}
  </style>
  ${Eg(e)}
`,Eb=e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return"live"===v$(e.streamType)&&(t+=" noarrowleft noarrowright"),t},Ef=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",LISTBOX:"listbox",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),Eg=e=>{var t,i,a,r,n,s,o,l,d,u,c,h,m,v,E,b,f,g,_,y,T,A,k,w,S,I,R,C,D,L,M,x,N,O,P,U,W,B,H;let V;return Ep`
  <media-theme
    template="${e.themeTemplate||!1}"
    defaultstreamtype="${null!=(t=e.defaultStreamType)&&t}"
    hotkeys="${Eb(e)||!1}"
    nohotkeys="${e.noHotKeys||!e.hasSrc||e.isDialogOpen||!1}"
    noautoseektolive="${!!(null!=(i=e.streamType)&&i.includes(lT.LIVE))&&0!==e.targetLiveWindow}"
    novolumepref="${e.novolumepref||!1}"
    disabled="${!e.hasSrc||e.isDialogOpen}"
    audio="${null!=(a=e.audio)&&a}"
    style="${null!=(H={"--media-primary-color":e.primaryColor,"--media-secondary-color":e.secondaryColor,"--media-accent-color":e.accentColor},V="",Object.entries(H).forEach(([e,t])=>{null!=t&&(V+=`${vx(e)}: ${t}; `)}),r=V?V.trim():void 0)&&r}"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(n=e.forwardSeekOffset)&&n}"
    backwardseekoffset="${null!=(s=e.backwardSeekOffset)&&s}"
    playbackrates="${null!=(o=e.playbackRates)&&o}"
    defaultshowremainingtime="${null!=(l=e.defaultShowRemainingTime)&&l}"
    defaultduration="${null!=(d=e.defaultDuration)&&d}"
    hideduration="${null!=(u=e.hideDuration)&&u}"
    title="${null!=(c=e.title)&&c}"
    exportparts="${Ef}"
  >
    <mux-video
      slot="media"
      target-live-window="${null!=(h=e.targetLiveWindow)&&h}"
      stream-type="${null!=(m=v$(e.streamType))&&m}"
      crossorigin="${null!=(v=e.crossOrigin)?v:""}"
      playsinline
      autoplay="${null!=(E=e.autoplay)&&E}"
      muted="${null!=(b=e.muted)&&b}"
      loop="${null!=(f=e.loop)&&f}"
      preload="${null!=(g=e.preload)&&g}"
      debug="${null!=(_=e.debug)&&_}"
      prefer-cmcd="${null!=(y=e.preferCmcd)&&y}"
      disable-tracking="${null!=(T=e.disableTracking)&&T}"
      disable-cookies="${null!=(A=e.disableCookies)&&A}"
      prefer-playback="${null!=(k=e.preferPlayback)&&k}"
      start-time="${null!=e.startTime&&e.startTime}"
      beacon-collection-domain="${null!=(w=e.beaconCollectionDomain)&&w}"
      player-software-name="${null!=(S=e.playerSoftwareName)&&S}"
      player-software-version="${null!=(I=e.playerSoftwareVersion)&&I}"
      env-key="${null!=(R=e.envKey)&&R}"
      custom-domain="${null!=(C=e.customDomain)&&C}"
      src="${e.src?e.src:!!e.playbackId&&dS(e)}"
      cast-src="${e.src?e.src:!!e.playbackId&&dS(e)}"
      cast-receiver="${null!=(D=e.castReceiver)&&D}"
      drm-token="${null!=(M=null==(L=e.tokens)?void 0:L.drm)&&M}"
      exportparts="video"
    >
      ${e.storyboard?Ep`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />`:Ep``}
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!e.poster&&e.poster}"
        placeholdersrc="${null!=(x=e.placeholder)&&x}"
      ></media-poster-image>
    </slot>
    <mxp-dialog
      no-auto-hide
      open="${null!=(N=e.isDialogOpen)&&N}"
      onclose="${e.onCloseErrorDialog}"
      oninitfocus="${e.onInitFocusDialog}"
    >
      ${null!=(O=e.dialog)&&O.title?Ep`<h3>${e.dialog.title}</h3>`:Ep``}
      <p>
        ${null==(P=e.dialog)?void 0:P.message}
        ${null!=(U=e.dialog)&&U.linkUrl?Ep`<a
              href="${e.dialog.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(W=e.dialog.linkText)?W:""} ${lH("(opens in a new window)")}"
              >${null!=(B=e.dialog.linkText)?B:e.dialog.linkUrl}</a
            >`:Ep``}
      </p>
    </mxp-dialog>
  </media-theme>
`},E_=e=>e.charAt(0).toUpperCase()+e.slice(1),Ey=(e,t=!1)=>{var i,a;if(e.muxCode){let r=E_(null!=(i=e.errorCategory)?i:"video"),n=lb(null!=(a=e.errorCategory)?a:lv.VIDEO);if(e.muxCode===lE.NETWORK_OFFLINE)return lH("Your device appears to be offline",t);if(e.muxCode===lE.NETWORK_TOKEN_EXPIRED)return lH("{category} URL has expired",t).format({category:r});if([lE.NETWORK_TOKEN_SUB_MISMATCH,lE.NETWORK_TOKEN_AUD_MISMATCH,lE.NETWORK_TOKEN_AUD_MISSING,lE.NETWORK_TOKEN_MALFORMED].includes(e.muxCode))return lH("{category} URL is formatted incorrectly",t).format({category:r});if(e.muxCode===lE.NETWORK_TOKEN_MISSING)return lH("Invalid {categoryName} URL",t).format({categoryName:n});if(e.muxCode===lE.NETWORK_NOT_FOUND)return lH("{category} does not exist",t).format({category:r});if(e.muxCode===lE.NETWORK_NOT_READY)return lH("{category} is not currently available",t).format({category:r})}if(e.code){if(e.code===lf.MEDIA_ERR_NETWORK)return lH("Network Error",t);if(e.code===lf.MEDIA_ERR_DECODE)return lH("Media Error",t);if(e.code===lf.MEDIA_ERR_SRC_NOT_SUPPORTED)return lH("Source Not Supported",t)}return lH("Error",t)},ET=(e,t=!1)=>{var i,a;if(e.muxCode){let r=E_(null!=(i=e.errorCategory)?i:"video"),n=lb(null!=(a=e.errorCategory)?a:lv.VIDEO);return e.muxCode===lE.NETWORK_OFFLINE?lH("Check your internet connection and try reloading this video.",t):e.muxCode===lE.NETWORK_TOKEN_EXPIRED?lH("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):e.muxCode===lE.NETWORK_TOKEN_SUB_MISMATCH?lH("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):e.muxCode===lE.NETWORK_TOKEN_MALFORMED?lH("{category} URL is formatted incorrectly",t).format({category:r}):[lE.NETWORK_TOKEN_AUD_MISMATCH,lE.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode)?lH("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[lE.NETWORK_TOKEN_MISSING,lE.NETWORK_INVALID_URL].includes(e.muxCode)?lH("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):e.muxCode===lE.NETWORK_NOT_FOUND?"":e.muxCode===lE.NETWORK_NOT_READY?lH("The live stream or video file are not yet ready.",t):e.message}return e.code&&(e.code===lf.MEDIA_ERR_NETWORK||e.code===lf.MEDIA_ERR_DECODE||(e.code,lf.MEDIA_ERR_SRC_NOT_SUPPORTED)),e.message},EA=(e,t=!1)=>({title:Ey(e,t),message:ET(e,t)}),Ek=e=>{if(e.muxCode){if(e.muxCode===lE.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(e.muxCode===lE.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([lE.NETWORK_TOKEN_AUD_MISMATCH,lE.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode))return"403-incorrect-aud-value.md";if(e.muxCode===lE.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(e.muxCode===lE.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(e.muxCode===lE.NETWORK_NOT_FOUND)return"404-not-found.md";if(e.muxCode===lE.NETWORK_NOT_READY)return"412-not-playable.md"}if(e.code){if(e.code===lf.MEDIA_ERR_NETWORK)return"";if(e.code===lf.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===lf.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},Ew=(e,t)=>{let i=Ek(e);return{message:e.message,context:e.context,file:i}};function ES(e,t=!1){return{dialog:EA(e,t),devlog:Ew(e,t)}}var EI=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
        hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
        hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
        hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
        hsl(0 0% 0%) 100%;
    }

    :host([title]:not([audio])) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }
  </style>

  <template partial="TitleDisplay">
    <template if="title">
      <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,ER=vM.createElement("template");"innerHTML"in ER&&(ER.innerHTML=EI);var EC,ED,EL=class extends hS{};EL.template=null==(ED=null==(EC=ER.content)?void 0:EC.children)?void 0:ED[0],vL.customElements.get("media-theme-gerwig")||vL.customElements.define("media-theme-gerwig",EL);var EM={SRC:"src",POSTER:"poster"},Ex={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips"},EN=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","novolumepref"];function EO(e){let t=e.hasAttribute(Ex.TITLE)?{video_title:e.getAttribute(Ex.TITLE)}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}var EP,EU,EW,EB,EH,EV,EF,Eq,EK,E$,EY,Ej,EG,EQ,EZ,Ez,EX,EJ,E0,E1,E2,E3=Object.values(cz),E5=Object.values(EM),E9=Object.values(Ex),E4={dialog:void 0,isDialogOpen:!1},E8={redundant_streams:!0},E7=class extends v7{constructor(){super(),mG(this,EV),mG(this,Eq),mG(this,E$),mG(this,Ej),mG(this,EQ),mG(this,Ez),mG(this,EJ),mG(this,E1),mG(this,EP,!1),mG(this,EU,{}),mG(this,EW,!0),mG(this,EB,new vj(this,"hotkeys")),mG(this,EH,{...E4,onCloseErrorDialog:()=>mZ(this,E$,EY).call(this,{dialog:void 0,isDialogOpen:!1}),onInitFocusDialog:e=>{vH(this,vM.activeElement)||e.preventDefault()}}),this.attachShadow({mode:"open"}),mZ(this,Eq,EK).call(this),this.isConnected&&mZ(this,EV,EF).call(this)}static get observedAttributes(){var e;return[...null!=(e=v7.observedAttributes)?e:[],...E5,...E3,...E9]}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){var e;let t=null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video");t&&(t.metadata=EO(this))}attributeChangedCallback(e,t,i){var a;switch(mZ(this,EV,EF).call(this),super.attributeChangedCallback(e,t,i),e){case Ex.HOTKEYS:mj(this,EB).value=i;break;case Ex.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&vQ(lH("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time."));break;case Ex.THUMBNAIL_TOKEN:if(i){let e=lO(i);if(e){let{aud:t}=e,i=dn.THUMBNAIL;t!==i&&vQ(lH("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"thumbnail"}))}}break;case Ex.STORYBOARD_TOKEN:if(i){let e=lO(i);if(e){let{aud:t}=e,i=dn.STORYBOARD;t!==i&&vQ(lH("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"storyboard"}))}}break;case Ex.DRM_TOKEN:if(i){let e=lO(i);if(e){let{aud:t}=e,i=dn.DRM;t!==i&&vQ(lH("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"drm"}))}}break;case cz.PLAYBACK_ID:null!=i&&i.includes("?token")&&vZ(lH("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case cz.STREAM_TYPE:i&&![lT.LIVE,lT.ON_DEMAND,lT.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:vz({file:"invalid-stream-type.md",message:lH("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===lT.LIVE?null==this.getAttribute(Ex.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN}[cz.PLAYBACK_ID,EM.SRC,Ex.PLAYBACK_TOKEN].includes(e)&&t!==i&&mQ(this,EH,{...mj(this,EH),...E4}),mZ(this,Ej,EG).call(this,{[null!=(a=vY[e])?a:vN(e)]:i})}get preferCmcd(){var e;return null!=(e=this.getAttribute(cz.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?lw.includes(e)?this.setAttribute(cz.PREFER_CMCD,e):vQ(`Invalid value for preferCmcd. Must be one of ${lw.join()}`):this.removeAttribute(cz.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(d.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(d.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(Ex.THEME))?e:"gerwig"}set theme(e){this.setAttribute(Ex.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(EN.includes(i))continue;let a=e.getAttribute(i);t[vN(i)]=""===a||a}return t}set themeProps(e){var t,i;mZ(this,EV,EF).call(this);let a={...this.themeProps,...e};for(let r in a){if(EN.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(vx(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(vx(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(cz.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(cz.PLAYBACK_ID,e):this.removeAttribute(cz.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=E6(this,EM.SRC))?e:void 0:null!=(t=this.getAttribute(EM.SRC))?t:void 0}set src(e){e?this.setAttribute(EM.SRC,e):this.removeAttribute(EM.SRC)}get poster(){var e;let t=this.getAttribute(EM.POSTER);if(null!=t)return t;let{tokens:i}=this;if(i.playback&&!i.thumbnail){vQ("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return vq(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail})}set poster(e){e||""===e?this.setAttribute(EM.POSTER,e):this.removeAttribute(EM.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(Ex.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(Ex.STORYBOARD_SRC,e):this.removeAttribute(Ex.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[lT.LIVE,lT.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard?void 0:vK(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(Ex.AUDIO)}set audio(e){if(!e){this.removeAttribute(Ex.AUDIO);return}this.setAttribute(Ex.AUDIO,"")}get hotkeys(){return mj(this,EB)}get nohotkeys(){return this.hasAttribute(Ex.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(Ex.NOHOTKEYS);return}this.setAttribute(Ex.NOHOTKEYS,"")}get thumbnailTime(){return vO(this.getAttribute(Ex.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(Ex.THUMBNAIL_TIME,`${e}`)}get title(){var e;return null!=(e=this.getAttribute(Ex.TITLE))?e:""}set title(e){e!==this.title&&(e?this.setAttribute(Ex.TITLE,e):this.removeAttribute("title"),super.title=e)}get placeholder(){var e;return null!=(e=E6(this,Ex.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(Ex.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(Ex.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=vL.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(Ex.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(Ex.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=vL.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(Ex.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(Ex.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=vL.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(Ex.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(Ex.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(Ex.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(Ex.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(Ex.PLAYBACK_RATES))return this.getAttribute(Ex.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e){this.removeAttribute(Ex.PLAYBACK_RATES);return}this.setAttribute(Ex.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return null!=(e=vO(this.getAttribute(Ex.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(Ex.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=vO(this.getAttribute(Ex.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(Ex.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(Ex.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(Ex.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(Ex.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return vO(this.getAttribute(Ex.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(Ex.DEFAULT_DURATION):this.setAttribute(Ex.DEFAULT_DURATION,`${e}`)}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(cz.PLAYER_SOFTWARE_NAME))?e:"mux-player"}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(cz.PLAYER_SOFTWARE_VERSION))?e:vF}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(cz.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(cz.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(cz.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(cz.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(cz.MAX_RESOLUTION,e):this.removeAttribute(cz.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(cz.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(cz.MIN_RESOLUTION,e):this.removeAttribute(cz.MIN_RESOLUTION))}get renditionOrder(){var e;return null!=(e=this.getAttribute(cz.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(cz.RENDITION_ORDER,e):this.removeAttribute(cz.RENDITION_ORDER))}get programStartTime(){return vO(this.getAttribute(cz.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(cz.PROGRAM_START_TIME):this.setAttribute(cz.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return vO(this.getAttribute(cz.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(cz.PROGRAM_END_TIME):this.setAttribute(cz.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return vO(this.getAttribute(cz.ASSET_START_TIME))}set assetStartTime(e){null==e?this.removeAttribute(cz.ASSET_START_TIME):this.setAttribute(cz.ASSET_START_TIME,`${e}`)}get assetEndTime(){return vO(this.getAttribute(cz.ASSET_END_TIME))}set assetEndTime(e){null==e?this.removeAttribute(cz.ASSET_END_TIME):this.setAttribute(cz.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(Ex.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(Ex.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):E8}set extraSourceParams(e){null==e?this.removeAttribute(Ex.EXTRA_SOURCE_PARAMS):this.setAttribute(Ex.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(cz.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(cz.CUSTOM_DOMAIN,e):this.removeAttribute(cz.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=E6(this,cz.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(cz.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(Ex.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(Ex.NO_VOLUME_PREF,""):this.removeAttribute(Ex.NO_VOLUME_PREF)}get debug(){return null!=E6(this,cz.DEBUG)}set debug(e){e?this.setAttribute(cz.DEBUG,""):this.removeAttribute(cz.DEBUG)}get disableTracking(){return null!=E6(this,cz.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(cz.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=E6(this,cz.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(cz.DISABLE_COOKIES,""):this.removeAttribute(cz.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(cz.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:lT.UNKNOWN}set streamType(e){this.setAttribute(cz.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(Ex.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(Ex.DEFAULT_STREAM_TYPE))?i:lT.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(Ex.DEFAULT_STREAM_TYPE,e):this.removeAttribute(Ex.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(Ex.TARGET_LIVE_WINDOW)?+this.getAttribute(Ex.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:Number.NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(Ex.TARGET_LIVE_WINDOW):this.setAttribute(Ex.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return vO(E6(this,cz.START_TIME))}set startTime(e){this.setAttribute(cz.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(cz.PREFER_PLAYBACK);if(e===lA.MSE||e===lA.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===lA.MSE||e===lA.NATIVE?this.setAttribute(cz.PREFER_PLAYBACK,e):this.removeAttribute(cz.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){if(mZ(this,EV,EF).call(this),!this.media){vZ("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...EO(this),...e}}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){if(mZ(this,EV,EF).call(this),!this.media){vZ("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=e}async addCuePoints(e){var t;if(mZ(this,EV,EF).call(this),!this.media){vZ("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return null==(t=this.media)?void 0:t.addCuePoints(e)}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;if(mZ(this,EV,EF).call(this),!this.media){vZ("underlying media element missing when trying to addChapters. chapters will not be added.");return}return null==(t=this.media)?void 0:t.addChapters(e)}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(Ex.PLAYBACK_TOKEN),t=this.getAttribute(Ex.DRM_TOKEN),i=this.getAttribute(Ex.THUMBNAIL_TOKEN),a=this.getAttribute(Ex.STORYBOARD_TOKEN);return{...mj(this,EU),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=i?{thumbnail:i}:{},...null!=a?{storyboard:a}:{}}}set tokens(e){mQ(this,EU,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(Ex.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(Ex.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(Ex.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(Ex.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(Ex.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(Ex.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(Ex.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(Ex.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return lG(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i){let t;return void(null==(t=Array.prototype.find.call(i.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(Ex.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(Ex.CAST_RECEIVER,e):this.removeAttribute(Ex.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){if(!this.media){vZ("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=e}get noTooltips(){return this.hasAttribute(Ex.NO_TOOLTIPS)}set noTooltips(e){if(!e){this.removeAttribute(Ex.NO_TOOLTIPS);return}this.setAttribute(Ex.NO_TOOLTIPS,"")}};function E6(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}EP=new WeakMap,EU=new WeakMap,EW=new WeakMap,EB=new WeakMap,EH=new WeakMap,EV=new WeakSet,EF=function(){var e,t,i,a;if(!mj(this,EP)){mQ(this,EP,!0),mZ(this,Ej,EG).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof vL.HTMLElement))throw""}catch{vZ("<media-theme> failed to upgrade!")}try{if(customElements.upgrade(this.media),!(this.media instanceof c1))throw""}catch{vZ("<mux-video> failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof tb))throw""}catch{vZ("<media-controller> failed to upgrade!")}this.init(),mZ(this,EQ,EZ).call(this),mZ(this,Ez,EX).call(this),mZ(this,EJ,E0).call(this),mQ(this,EW,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(ek.USER_INACTIVE))||t),mZ(this,E1,E2).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",()=>mZ(this,Ej,EG).call(this)),null==(a=this.media)||a.addEventListener("loadstart",()=>mZ(this,Ej,EG).call(this))}},Eq=new WeakSet,EK=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},E$=new WeakSet,EY=function(e){Object.assign(mj(this,EH),e),mZ(this,Ej,EG).call(this)},Ej=new WeakSet,EG=function(e={}){var t,i,a;let r;(function(e,t){e.renderInto(t)})(EE((t={...mj(this,EH),...e},{src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:this.storyboard,storyboardSrc:this.getAttribute(Ex.STORYBOARD_SRC),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=vL.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(Ex.NOHOTKEYS),hotKeys:this.getAttribute(Ex.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(cz.TARGET_LIVE_WINDOW),streamType:v$(this.getAttribute(cz.STREAM_TYPE)),primaryColor:this.getAttribute(Ex.PRIMARY_COLOR),secondaryColor:this.getAttribute(Ex.SECONDARY_COLOR),accentColor:this.getAttribute(Ex.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(r=null==(a=this.mediaController)?void 0:a.querySelector("media-time-display"))&&"none"===getComputedStyle(r).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(Ex.PLAYBACK_RATES),customDomain:null!=(i=this.getAttribute(cz.CUSTOM_DOMAIN))?i:void 0,title:this.getAttribute(Ex.TITLE),novolumepref:this.hasAttribute(Ex.NO_VOLUME_PREF),castReceiver:this.castReceiver,...t,extraSourceParams:this.extraSourceParams})),this.shadowRoot)},EQ=new WeakSet,EZ=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(EN.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},Ez=new WeakSet,EX=function(){var e;this.addEventListener("error",e=>{let{detail:t}=e;if(t instanceof lf||(t=new lf(t.message,t.code,t.fatal)),!(null!=t&&t.fatal)){vQ(t),t.data&&vQ(`${t.name} data:`,t.data);return}let{dialog:i,devlog:a}=ES(t,!1);a.message&&vz(a),vZ(t),t.data&&vZ(`${t.name} data:`,t.data),mZ(this,E$,EY).call(this,{isDialogOpen:!0,dialog:i})}),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof lf))return e;let{devlog:r}=ES(null==(i=this.media)?void 0:i.error,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}}),null==(e=this.media)||e.addEventListener("error",e=>{var t,i;let{detail:a}=e;if(!a){let{message:e,code:r}=null!=(i=null==(t=this.media)?void 0:t.error)?i:{};a=new lf(e,r)}null!=a&&a.fatal&&this.dispatchEvent(new CustomEvent("error",{detail:a}))})},EJ=new WeakSet,E0=function(){var e,t,i,a;let r=()=>mZ(this,Ej,EG).call(this);null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",r),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",r)},E1=new WeakSet,E2=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===lT.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10)){if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===lT.LIVE&&(r=-2);let n=r-t;(e.line!==n||i)&&(a.has(e)||a.set(e,e.line),e.line=n)}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)}})},s=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(ek.USER_INACTIVE))&&t)},o=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",s)),null==(i=a)||i.addEventListener("cuechange",s),n(i,mj(this,EW))};o(),null==(e=this.textTracks)||e.addEventListener("change",o),null==(t=this.textTracks)||t.addEventListener("addtrack",o),this.addEventListener("userinactivechange",()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(ek.USER_INACTIVE))||t;mj(this,EW)!==a&&(mQ(this,EW,a),n(i,mj(this,EW)))})},vL.customElements.get("mux-player")||(vL.customElements.define("mux-player",E7),vL.MuxPlayerElement=E7)},8493:function(e,t,i){"use strict";let a,r;i.d(t,{v:function(){return F}});var n=i(804),s=i(458),o=i(2265),l=i(9047);let d=new WeakMap;function u({target:e,contentRect:t,borderBoxSize:i}){var a;null===(a=d.get(e))||void 0===a||a.forEach(a=>{a({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:i}=t[0];return{width:e,height:i}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,i)}})})}function c(e){e.forEach(u)}let h=new Set;var m=i(3217),v=i(3476);let E=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),b=()=>({time:0,x:E(),y:E()}),f={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function g(e,t,i,a){let r=i[t],{length:n,position:s}=f[t],o=r.current,l=i.time;r.current=e[`scroll${s}`],r.scrollLength=e[`scroll${n}`]-e[`client${n}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=(0,m.Y)(0,r.scrollLength,r.current);let d=a-l;r.velocity=d>50?0:(0,v.R)(r.current-o,d)}let _=[[0,0],[1,1]],y={start:0,center:.5,end:1};function T(e,t,i=0){let a=0;if(e in y&&(e=y[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?a=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?a=t/100*document.documentElement.clientWidth:e.endsWith("vh")?a=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(a=t*e),i+a}let A=[0,0];var k=i(2548),w=i(839);let S={x:0,y:0};var I=i(6219);let R=new WeakMap,C=new WeakMap,D=new WeakMap,L=e=>e===document.documentElement?window:e;function M(e,{container:t=document.documentElement,...i}={}){let n=D.get(t);n||(n=new Set,D.set(t,n));let s=function(e,t,i,a={}){return{measure:()=>(function(e,t=e,i){if(i.x.targetOffset=0,i.y.targetOffset=0,t!==e){let a=t;for(;a&&a!==e;)i.x.targetOffset+=a.offsetLeft,i.y.targetOffset+=a.offsetTop,a=a.offsetParent}i.x.targetLength=t===e?t.scrollWidth:t.clientWidth,i.y.targetLength=t===e?t.scrollHeight:t.clientHeight,i.x.containerLength=e.clientWidth,i.y.containerLength=e.clientHeight})(e,a.target,i),update:t=>{g(e,"x",i,t),g(e,"y",i,t),i.time=t,(a.offset||a.target)&&function(e,t,i){let{offset:a=_}=i,{target:r=e,axis:n="y"}=i,s="y"===n?"height":"width",o=r!==e?function(e,t){let i={x:0,y:0},a=e;for(;a&&a!==t;)if(a instanceof HTMLElement)i.x+=a.offsetLeft,i.y+=a.offsetTop,a=a.offsetParent;else if("svg"===a.tagName){let e=a.getBoundingClientRect(),t=(a=a.parentElement).getBoundingClientRect();i.x+=e.left-t.left,i.y+=e.top-t.top}else if(a instanceof SVGGraphicsElement){let{x:e,y:t}=a.getBBox();i.x+=e,i.y+=t;let r=null,n=a.parentNode;for(;!r;)"svg"===n.tagName&&(r=n),n=a.parentNode;a=r}else break;return i}(r,e):S,l=r===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in r&&"svg"!==r.tagName?r.getBBox():{width:r.clientWidth,height:r.clientHeight},d={width:e.clientWidth,height:e.clientHeight};t[n].offset.length=0;let u=!t[n].interpolate,c=a.length;for(let e=0;e<c;e++){let i=function(e,t,i,a){let r=Array.isArray(e)?e:A,n=0;return"number"==typeof e?r=[e,e]:"string"==typeof e&&(r=(e=e.trim()).includes(" ")?e.split(" "):[e,y[e]?e:"0"]),T(r[0],i,a)-T(r[1],t)}(a[e],d[s],l[s],o[n]);u||i===t[n].interpolatorOffsets[e]||(u=!0),t[n].offset[e]=i}u&&(t[n].interpolate=(0,k.s)(t[n].offset,(0,w.Y)(a)),t[n].interpolatorOffsets=[...t[n].offset]),t[n].progress=t[n].interpolate(t[n].current)}(e,i,a)},notify:()=>t(i)}}(t,e,b(),i);if(n.add(s),!R.has(t)){let e=()=>{for(let e of n)e.measure()},i=()=>{for(let e of n)e.update(I.frameData.timestamp)},s=()=>{for(let e of n)e.notify()},o=()=>{I.Wi.read(e,!1,!0),I.Wi.read(i,!1,!0),I.Wi.update(s,!1,!0)};R.set(t,o);let l=L(t);window.addEventListener("resize",o,{passive:!0}),t!==document.documentElement&&C.set(t,"function"==typeof t?(h.add(t),r||(r=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};h.forEach(e=>e(t))},window.addEventListener("resize",r)),()=>{h.delete(t),!h.size&&r&&(r=void 0)}):function(e,t){var i;a||"undefined"==typeof ResizeObserver||(a=new ResizeObserver(c));let r=("string"==typeof(i=e)?i=document.querySelectorAll(i):i instanceof Element&&(i=[i]),Array.from(i||[]));return r.forEach(e=>{let i=d.get(e);i||(i=new Set,d.set(e,i)),i.add(t),null==a||a.observe(e)}),()=>{r.forEach(e=>{let i=d.get(e);null==i||i.delete(t),(null==i?void 0:i.size)||null==a||a.unobserve(e)})}}(t,o)),l.addEventListener("scroll",o,{passive:!0})}let o=R.get(t);return I.Wi.read(o,!1,!0),()=>{var e;(0,I.Pn)(o);let i=D.get(t);if(!i||(i.delete(s),i.size))return;let a=R.get(t);R.delete(t),a&&(L(t).removeEventListener("scroll",a),null===(e=C.get(t))||void 0===e||e(),window.removeEventListener("resize",a))}}function x(e,t){let i;let a=()=>{let{currentTime:a}=t,r=(null===a?0:a.value)/100;i!==r&&e(r),i=r};return I.Wi.update(a,!0),()=>(0,I.Pn)(a)}var N=i(7581),O=i(9276);let P=new Map;function U({source:e,container:t=document.documentElement,axis:i="y"}={}){e&&(t=e),P.has(t)||P.set(t,{});let a=P.get(t);return a[i]||(a[i]=(0,N.t)()?new ScrollTimeline({source:t,axis:i}):function({source:e,container:t,axis:i="y"}){e&&(t=e);let a={value:0},r=M(e=>{a.value=100*e[i].progress},{container:t,axis:i});return{currentTime:a,cancel:r}}({source:t,axis:i})),a[i]}function W(e){return e&&(e.target||e.offset)}var B=i(9033);function H(e,t){(0,l.K)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let V=()=>({scrollX:(0,n.BX)(0),scrollY:(0,n.BX)(0),scrollXProgress:(0,n.BX)(0),scrollYProgress:(0,n.BX)(0)});function F({container:e,target:t,layoutEffect:i=!0,...a}={}){let r=(0,s.h)(V);return(i?B.L:o.useEffect)(()=>(H("target",t),H("container",e),function(e,{axis:t="y",...i}={}){let a={axis:t,...i};return"function"==typeof e?2===e.length||W(a)?M(t=>{e(t[a.axis].progress,t)},a):x(e,U(a)):function(e,t){if(e.flatten(),W(t))return e.pause(),M(i=>{e.time=e.duration*i[t.axis].progress},t);{let i=U(t);return e.attachTimeline?e.attachTimeline(i,e=>(e.pause(),x(t=>{e.time=e.duration*t},i))):O.Z}}(e,a)}((e,{x:t,y:i})=>{r.scrollX.set(t.current),r.scrollXProgress.set(t.progress),r.scrollY.set(i.current),r.scrollYProgress.set(i.progress)},{...a,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[e,t,JSON.stringify(a.offset)]),r}},31:function(e,t,i){"use strict";i.d(t,{H:function(){return m}});var a=i(2548);let r=e=>e&&"object"==typeof e&&e.mix,n=e=>r(e)?e.mix:void 0;var s=i(2265),o=i(804),l=i(9791),d=i(458),u=i(9033),c=i(6219);function h(e,t){let i=function(e){let t=(0,d.h)(()=>(0,o.BX)(e)),{isStatic:i}=(0,s.useContext)(l._);if(i){let[,i]=(0,s.useState)(e);(0,s.useEffect)(()=>t.on("change",i),[])}return t}(t()),a=()=>i.set(t());return a(),(0,u.L)(()=>{let t=()=>c.Wi.preRender(a,!1,!0),i=e.map(e=>e.on("change",t));return()=>{i.forEach(e=>e()),(0,c.Pn)(a)}}),i}function m(e,t,i,r){if("function"==typeof e)return function(e){o.S1.current=[],e();let t=h(o.S1.current,e);return o.S1.current=void 0,t}(e);let s="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),i=t?0:-1,r=e[0+i],s=e[1+i],o=e[2+i],l=e[3+i],d=(0,a.s)(s,o,{mixer:n(o[0]),...l});return t?d(r):d}(t,i,r);return Array.isArray(e)?v(e,s):v([e],([e])=>s(e))}function v(e,t){let i=(0,d.h)(()=>[]);return h(e,()=>{i.length=0;let a=e.length;for(let t=0;t<a;t++)i[t]=e[t].get();return t(i)})}}}]);