(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4186)}])},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(6495).Z,n=r(2648).Z,i=r(1598).Z,a=r(7273).Z,s=i(r(7294)),o=n(r(3121)),c=r(2675),d=r(139),u=r(8730);r(7238);var f=n(r(9824));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,r,n,i,a,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&a(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let s=!1,o=!1;n.current(l({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>s,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{s=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let x=s.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:n,widthInt:i,qualityInt:o,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:m,placeholder:h,loading:p,srcString:x,config:b,unoptimized:v,loader:w,onLoadRef:j,onLoadingCompleteRef:y,setBlurComplete:N,setShowAltText:_,onLoad:E,onError:S}=e,C=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=f?"lazy":p,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},C,r,{width:i,height:n,decoding:"async","data-nimg":m?"fill":"1",className:c,loading:p,style:l({},d,u),ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&g(e,x,h,j,y,N,v))},[x,h,j,y,N,S,v,t]),onLoad:e=>{let t=e.currentTarget;g(t,x,h,j,y,N,v)},onError:e=>{_(!0),"blur"===h&&N(!0),S&&S(e)}})))}),b=s.forwardRef((e,t)=>{let r,n;var i,{src:g,sizes:b,unoptimized:v=!1,priority:w=!1,loading:j,className:y,quality:N,width:_,height:E,fill:S,style:C,onLoad:z,onLoadingComplete:k,placeholder:P="empty",blurDataURL:R,layout:O,objectFit:I,objectPosition:L,lazyBoundary:A,lazyRoot:D}=e,M=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let B=s.useContext(u.ImageConfigContext),T=s.useMemo(()=>{let e=m||B||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return l({},e,{allSizes:t,deviceSizes:r})},[B]),W=M,F=W.loader||f.default;delete W.loader;let q="__next_img_default"in F;if(q){if("custom"===T.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let G=F;F=e=>{let{config:t}=e,r=a(e,["config"]);return G(r)}}if(O){"fill"===O&&(S=!0);let V={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];V&&(C=l({},C,V));let U={responsive:"100vw",fill:"100vw"}[O];U&&!b&&(b=U)}let Z="",J=p(_),X=p(E);if("object"==typeof(i=g)&&(h(i)||void 0!==i.src)){let H=h(g)?g.default:g;if(!H.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(H)));if(!H.height||!H.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(H)));if(r=H.blurWidth,n=H.blurHeight,R=R||H.blurDataURL,Z=H.src,!S){if(J||X){if(J&&!X){let $=J/H.width;X=Math.round(H.height*$)}else if(!J&&X){let K=X/H.height;J=Math.round(H.width*K)}}else J=H.width,X=H.height}}let Q=!w&&("lazy"===j||void 0===j);((g="string"==typeof g?g:Z).startsWith("data:")||g.startsWith("blob:"))&&(v=!0,Q=!1),T.unoptimized&&(v=!0),q&&g.endsWith(".svg")&&!T.dangerouslyAllowSVG&&(v=!0);let[Y,ee]=s.useState(!1),[et,er]=s.useState(!1),el=p(N),en=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:L}:{},et?{}:{color:"transparent"},C),ei="blur"===P&&R&&!Y?{backgroundSize:en.objectFit||"cover",backgroundPosition:en.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:J,heightInt:X,blurWidth:r,blurHeight:n,blurDataURL:R}),'")')}:{},ea=function(e){let{config:t,src:r,unoptimized:l,width:n,quality:i,sizes:a,loader:s}=e;if(l)return{src:r,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,r){let{deviceSizes:l,allSizes:n}=e;if(r){let i=/(^|\s)(1?\d?\d)vw/g,a=[];for(let s;s=i.exec(r);s)a.push(parseInt(s[2]));if(a.length){let o=.01*Math.min(...a);return{widths:n.filter(e=>e>=l[0]*o),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:l,kind:"w"};let c=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:c,kind:"x"}}(t,n,a),d=o.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:o.map((e,l)=>"".concat(s({config:t,src:r,quality:i,width:e})," ").concat("w"===c?e:l+1).concat(c)).join(", "),src:s({config:t,src:r,quality:i,width:o[d]})}}({config:T,src:g,unoptimized:v,width:J,quality:el,sizes:b,loader:F}),es=g,eo={imageSrcSet:ea.srcSet,imageSizes:ea.sizes,crossOrigin:W.crossOrigin},ec=s.useRef(z);s.useEffect(()=>{ec.current=z},[z]);let ed=s.useRef(k);s.useEffect(()=>{ed.current=k},[k]);let eu=l({isLazy:Q,imgAttributes:ea,heightInt:X,widthInt:J,qualityInt:el,className:y,imgStyle:en,blurStyle:ei,loading:j,config:T,fill:S,unoptimized:v,placeholder:P,loader:F,srcString:es,onLoadRef:ec,onLoadingCompleteRef:ed,setBlurComplete:ee,setShowAltText:er},W);return s.default.createElement(s.default.Fragment,null,s.default.createElement(x,Object.assign({},eu,{ref:t})),w?s.default.createElement(o.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ea.src+ea.srcSet+ea.sizes,rel:"preload",as:"image",href:ea.srcSet?void 0:ea.src},eo))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:l,blurHeight:n,blurDataURL:i}=e,a=l||t,s=n||r,o=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(l&&n?"1":"20","'/%3E").concat(o,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(i,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:l,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(l,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},4186:function(e,t,r){"use strict";r.r(t);var l=r(5893),n=r(9008),i=r.n(n),a=r(5675),s=r.n(a);let o=()=>(0,l.jsxs)("div",{className:"flex min-h-screen flex-col items-center justify-center py-2",children:[(0,l.jsxs)(i(),{children:[(0,l.jsx)("title",{children:"Create Next App"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsxs)("main",{className:"flex w-full flex-1 flex-col items-center justify-center px-20 text-center",children:[(0,l.jsxs)("h1",{className:"text-6xl font-bold",children:["Welcome to"," ",(0,l.jsx)("a",{className:"text-blue-600",href:"https://nextjs.org",children:"Next.js!"})]}),(0,l.jsxs)("p",{className:"mt-3 text-2xl",children:["Get started by editing"," ",(0,l.jsx)("code",{className:"rounded-md bg-gray-100 p-3 font-mono text-lg",children:"pages/index.tsx"})]}),(0,l.jsxs)("div",{className:"mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full",children:[(0,l.jsxs)("a",{href:"https://nextjs.org/docs",className:"mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600",children:[(0,l.jsx)("h3",{className:"text-2xl font-bold",children:"Documentation →"}),(0,l.jsx)("p",{className:"mt-4 text-xl",children:"Find in-depth information about Next.js features and its API."})]}),(0,l.jsxs)("a",{href:"https://nextjs.org/learn",className:"mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600",children:[(0,l.jsx)("h3",{className:"text-2xl font-bold",children:"Learn →"}),(0,l.jsx)("p",{className:"mt-4 text-xl",children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,l.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:"mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600",children:[(0,l.jsx)("h3",{className:"text-2xl font-bold",children:"Examples →"}),(0,l.jsx)("p",{className:"mt-4 text-xl",children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,l.jsxs)("a",{href:"https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:"mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600",children:[(0,l.jsx)("h3",{className:"text-2xl font-bold",children:"Deploy →"}),(0,l.jsx)("p",{className:"mt-4 text-xl",children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,l.jsx)("footer",{className:"flex h-24 w-full items-center justify-center border-t",children:(0,l.jsxs)("a",{className:"flex items-center justify-center gap-2",href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,l.jsx)(s(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})]})})]});t.default=o},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);