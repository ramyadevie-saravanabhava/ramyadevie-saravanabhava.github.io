(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(7769)}])},9749:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(6495).Z,a=i(2648).Z,c=i(1598).Z,r=i(7273).Z,n=c(i(7294)),l=a(i(3121)),o=i(2675),d=i(139),h=i(8730);i(7238);var x=a(i(9824));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t,i,a,c,r,n){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===i&&r(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,l=!1;a.current(s({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==c?void 0:c.current)&&c.current(e)}})}let j=n.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:a,widthInt:c,qualityInt:l,className:o,imgStyle:d,blurStyle:h,isLazy:x,fill:m,placeholder:p,loading:g,srcString:j,config:f,unoptimized:b,loader:v,onLoadRef:k,onLoadingCompleteRef:y,setBlurComplete:w,setShowAltText:_,onLoad:E,onError:N}=e,S=r(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=x?"lazy":g,n.default.createElement(n.default.Fragment,null,n.default.createElement("img",Object.assign({},S,i,{width:c,height:a,decoding:"async","data-nimg":m?"fill":"1",className:o,loading:g,style:s({},d,h),ref:n.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(N&&(e.src=e.src),e.complete&&u(e,j,p,k,y,w,b))},[j,p,k,y,w,N,b,t]),onLoad:e=>{let t=e.currentTarget;u(t,j,p,k,y,w,b)},onError:e=>{_(!0),"blur"===p&&w(!0),N&&N(e)}})))}),f=n.forwardRef((e,t)=>{let i,a;var c,{src:u,sizes:f,unoptimized:b=!1,priority:v=!1,loading:k,className:y,quality:w,width:_,height:E,fill:N,style:S,onLoad:C,onLoadingComplete:I,placeholder:R="empty",blurDataURL:P,layout:M,objectFit:z,objectPosition:A,lazyBoundary:O,lazyRoot:D}=e,L=r(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=n.useContext(h.ImageConfigContext),G=n.useMemo(()=>{let e=m||T||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return s({},e,{allSizes:t,deviceSizes:i})},[T]),B=L,W=B.loader||x.default;delete B.loader;let F="__next_img_default"in W;if(F){if("custom"===G.loader)throw Error('Image with src "'.concat(u,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let J=W;W=e=>{let{config:t}=e,i=r(e,["config"]);return J(i)}}if(M){"fill"===M&&(N=!0);let q={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];q&&(S=s({},S,q));let U={responsive:"100vw",fill:"100vw"}[M];U&&!f&&(f=U)}let V="",H=g(_),Z=g(E);if("object"==typeof(c=u)&&(p(c)||void 0!==c.src)){let Y=p(u)?u.default:u;if(!Y.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Y)));if(!Y.height||!Y.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Y)));if(i=Y.blurWidth,a=Y.blurHeight,P=P||Y.blurDataURL,V=Y.src,!N){if(H||Z){if(H&&!Z){let X=H/Y.width;Z=Math.round(Y.height*X)}else if(!H&&Z){let K=Z/Y.height;H=Math.round(Y.width*K)}}else H=Y.width,Z=Y.height}}let Q=!v&&("lazy"===k||void 0===k);((u="string"==typeof u?u:V).startsWith("data:")||u.startsWith("blob:"))&&(b=!0,Q=!1),G.unoptimized&&(b=!0),F&&u.endsWith(".svg")&&!G.dangerouslyAllowSVG&&(b=!0);let[$,ee]=n.useState(!1),[et,ei]=n.useState(!1),es=g(w),ea=Object.assign(N?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:A}:{},et?{}:{color:"transparent"},S),ec="blur"===R&&P&&!$?{backgroundSize:ea.objectFit||"cover",backgroundPosition:ea.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(o.getImageBlurSvg({widthInt:H,heightInt:Z,blurWidth:i,blurHeight:a,blurDataURL:P}),'")')}:{},er=function(e){let{config:t,src:i,unoptimized:s,width:a,quality:c,sizes:r,loader:n}=e;if(s)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:o}=function(e,t,i){let{deviceSizes:s,allSizes:a}=e;if(i){let c=/(^|\s)(1?\d?\d)vw/g,r=[];for(let n;n=c.exec(i);n)r.push(parseInt(n[2]));if(r.length){let l=.01*Math.min(...r);return{widths:a.filter(e=>e>=s[0]*l),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:s,kind:"w"};let o=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:o,kind:"x"}}(t,a,r),d=l.length-1;return{sizes:r||"w"!==o?r:"100vw",srcSet:l.map((e,s)=>"".concat(n({config:t,src:i,quality:c,width:e})," ").concat("w"===o?e:s+1).concat(o)).join(", "),src:n({config:t,src:i,quality:c,width:l[d]})}}({config:G,src:u,unoptimized:b,width:H,quality:es,sizes:f,loader:W}),en=u,el={imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:B.crossOrigin},eo=n.useRef(C);n.useEffect(()=>{eo.current=C},[C]);let ed=n.useRef(I);n.useEffect(()=>{ed.current=I},[I]);let eh=s({isLazy:Q,imgAttributes:er,heightInt:Z,widthInt:H,qualityInt:es,className:y,imgStyle:ea,blurStyle:ec,loading:k,config:G,fill:N,unoptimized:b,placeholder:R,loader:W,srcString:en,onLoadRef:eo,onLoadingCompleteRef:ed,setBlurComplete:ee,setShowAltText:ei},B);return n.default.createElement(n.default.Fragment,null,n.default.createElement(j,Object.assign({},eh,{ref:t})),v?n.default.createElement(l.default,null,n.default.createElement("link",Object.assign({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src},el))):null)});t.default=f,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:s,blurHeight:a,blurDataURL:c}=e,r=s||t,n=a||i,l=c.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return r&&n?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(r," ").concat(n,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(s&&a?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(c,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(c,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function i(e){let{config:t,src:i,width:s,quality:a}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(s,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},7769:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return x}});var s=i(5893),a=i(9008),c=i.n(a);i(7294),i(534);var r=i(5675),n=i.n(r),l=i(1664),o=i.n(l),d=i(1163);let h=()=>{let e=e=>{window.open(e,"_blank","noopener,noreferrer")},t=()=>{let e=document.createElement("a");e.href="/Ramya-Resume.pdf",e.download="Ramya-Resume.pdf",document.body.appendChild(e),e.click(),document.body.removeChild(e)},i=(0,d.useRouter)(),a=()=>{i.push("/contact")};return(0,s.jsx)("div",{className:"container px-4 mx-auto",children:(0,s.jsxs)("div",{className:"lg:space-x-5 item-center lg:-mx-4 text-center lg:text-left",children:[(0,s.jsxs)("section",{id:"profile",children:[(0,s.jsx)("div",{class:"section__pic-container",children:(0,s.jsx)(n(),{src:"/pic-focus.png",height:250,width:400,alt:"Ramya Devie Profile Pic",className:"rounded-full aspect-square object-cover"})}),(0,s.jsxs)("div",{class:"section__text",children:[(0,s.jsx)("p",{class:"section__text__p1",children:"Hello, I'm"}),(0,s.jsx)("h1",{class:"title",children:"Ramya Devie"}),(0,s.jsx)("p",{class:"section__text__p2",children:"Full Stack Web Developer"}),(0,s.jsxs)("div",{class:"btn-container",children:[(0,s.jsx)("button",{class:"relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800",onClick:t,children:(0,s.jsx)("span",{class:"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0",children:"Download CV"})}),(0,s.jsx)("button",{class:"relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800",onClick:a,children:(0,s.jsx)("span",{class:"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0",children:"Contact Info"})})]}),(0,s.jsxs)("div",{id:"socials-container",children:[(0,s.jsx)(o(),{href:"https://www.linkedin.com/in/ramya-devie",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(n(),{src:"/linkedin.png",alt:"Ramya's LinkedIn profile",width:30,height:30,className:"icon"})}),(0,s.jsx)(o(),{href:"https://github.com/ramyadevie-saravanabhava",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(n(),{src:"/github.png",alt:"Ramya's Github profile",width:30,height:30,className:"icon"})})]})]})]}),(0,s.jsxs)("section",{class:"section-nav-padding",id:"about",children:[(0,s.jsx)("p",{class:"section__text__p1",children:"Get To Know More"}),(0,s.jsx)("h1",{class:"title",children:"About Me"}),(0,s.jsxs)("div",{class:"section-container",children:[(0,s.jsx)("div",{class:"abt-pic-container",children:(0,s.jsx)("img",{src:"/about.jpg",alt:"Profile picture",class:"about-pic"})}),(0,s.jsxs)("div",{class:"about-details-container",children:[(0,s.jsxs)("div",{class:"about-containers",children:[(0,s.jsxs)("div",{class:"details-container",children:[(0,s.jsx)(n(),{src:"/experience.png",height:10,width:30,alt:"Experience icon",className:"icon"}),(0,s.jsx)("h3",{className:"text-gray-900 dark:text-black",children:"Experience"}),(0,s.jsxs)("p",{className:"text-gray-900 dark:text-black",children:["3+ years ",(0,s.jsx)("br",{}),"Full Stack Web Development"]})]}),(0,s.jsxs)("div",{class:"details-container",children:[(0,s.jsx)(n(),{src:"/education.png",height:10,width:30,alt:"Education icon",className:"icon"}),(0,s.jsx)("h3",{className:"text-gray-900 dark:text-black",children:"Education"}),(0,s.jsxs)("p",{className:"text-gray-900 dark:text-black",children:["B.E. Bachelors Degree",(0,s.jsx)("br",{}),"M.Sc. Masters Degree"]})]})]}),(0,s.jsx)("div",{class:"text-container",children:(0,s.jsx)("p",{children:"I am a seasoned web developer and system analyst with expertise in Java, JavaScript, and frameworks like Next.js and React. I specialize in optimizing UI interactions and backend processes, achieving significant performance improvements. My certifications and innovative projects underscore my commitment to excellence and technological advancement."})})]})]})]}),(0,s.jsxs)("section",{class:"section-nav-padding",id:"skills",children:[(0,s.jsx)("p",{class:"section__text__p1",children:"Explore My"}),(0,s.jsx)("h1",{class:"title",children:"Skills"}),(0,s.jsx)("div",{class:"experience-details-container",children:(0,s.jsx)("div",{class:"about-containers",children:(0,s.jsx)("div",{class:"details-container",children:(0,s.jsxs)("div",{class:"article-container",children:[(0,s.jsxs)("article",{children:[(0,s.jsx)("img",{src:"/checkmark.png",alt:"Experience icon",class:"icon"}),(0,s.jsxs)("div",{className:"dark:text-white",children:[(0,s.jsx)("h3",{className:"text-gray-900 dark:text-black",children:"NextJS"}),(0,s.jsx)("p",{className:"text-gray-700 dark:text-black",children:"Intermediate"})]})]}),(0,s.jsxs)("article",{children:[(0,s.jsx)("img",{src:"/checkmark.png",alt:"Experience icon",class:"icon"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-gray-900 dark:text-black",children:"CI/CD Pipelines"}),(0,s.jsx)("p",{className:"text-gray-700 dark:text-black",children:"Intermediate"})]})]}),(0,s.jsxs)("article",{children:[(0,s.jsx)("img",{src:"/checkmark.png",alt:"Experience icon",class:"icon"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-gray-900 dark:text-black",children:"IaaC (Pulumi/Packer)"}),(0,s.jsx)("p",{className:"text-gray-700 dark:text-black",children:"Experienced"})]})]}),(0,s.jsxs)("article",{children:[(0,s.jsx)("img",{src:"/checkmark.png",alt:"Experience icon",class:"icon"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-gray-900 dark:text-black",children:"AWS"}),(0,s.jsx)("p",{className:"text-gray-700 dark:text-black",children:"Intermediate"})]})]}),(0,s.jsxs)("article",{children:[(0,s.jsx)("img",{src:"/checkmark.png",alt:"Experience icon",class:"icon"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-gray-900 dark:text-black",children:"MongoDB"}),(0,s.jsx)("p",{className:"text-gray-700 dark:text-black",children:"Experienced"})]})]}),(0,s.jsxs)("article",{children:[(0,s.jsx)("img",{src:"/checkmark.png",alt:"Experience icon",class:"icon"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-gray-900 dark:text-black",children:"REST services"}),(0,s.jsx)("p",{className:"text-gray-700 dark:text-black",children:"Experienced"})]})]}),(0,s.jsxs)("article",{children:[(0,s.jsx)("img",{src:"/checkmark.png",alt:"Experience icon",class:"icon"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-gray-900 dark:text-black",children:"Git"}),(0,s.jsx)("p",{className:"text-gray-700 dark:text-black",children:"Experienced"})]})]}),(0,s.jsxs)("article",{children:[(0,s.jsx)("img",{src:"/checkmark.png",alt:"Experience icon",class:"icon"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-gray-900 dark:text-black",children:"Selenium"}),(0,s.jsx)("p",{className:"text-gray-700 dark:text-black",children:"Intermediate"})]})]}),(0,s.jsxs)("article",{children:[(0,s.jsx)("img",{src:"/checkmark.png",alt:"Experience icon",class:"icon"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-gray-900 dark:text-black",children:"HTML/CSS"}),(0,s.jsx)("p",{className:"text-gray-700 dark:text-black",children:"Experienced"})]})]}),(0,s.jsxs)("article",{children:[(0,s.jsx)("img",{src:"/checkmark.png",alt:"Experience icon",class:"icon"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-gray-900 dark:text-black",children:"SASS"}),(0,s.jsx)("p",{className:"text-gray-700 dark:text-black",children:"Intermediate"})]})]}),(0,s.jsxs)("article",{children:[(0,s.jsx)("img",{src:"/checkmark.png",alt:"Experience icon",class:"icon"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-gray-900 dark:text-black",children:"JavaScript/TypeScript"}),(0,s.jsx)("p",{className:"text-gray-700 dark:text-black",children:"Intermediate"})]})]}),(0,s.jsxs)("article",{children:[(0,s.jsx)("img",{src:"/checkmark.png",alt:"Experience icon",class:"icon"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-gray-900 dark:text-black",children:"MySQL"}),(0,s.jsx)("p",{className:"text-gray-700 dark:text-black",children:"Intermediate"})]})]}),(0,s.jsxs)("article",{children:[(0,s.jsx)("img",{src:"/checkmark.png",alt:"Experience icon",class:"icon"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-gray-900 dark:text-black",children:"Material UI"}),(0,s.jsx)("p",{className:"text-gray-700 dark:text-black",children:"Intermediate"})]})]})]})})})})]}),(0,s.jsxs)("section",{class:"section-nav-padding",id:"projects",children:[(0,s.jsx)("p",{class:"section__text__p1",children:"Browse My Recent"}),(0,s.jsx)("h1",{class:"title",children:"Projects"}),(0,s.jsx)("div",{class:"experience-details-container",children:(0,s.jsxs)("div",{class:"about-containers",children:[(0,s.jsxs)("div",{class:"details-container color-container",children:[(0,s.jsx)("div",{class:"article-container",children:(0,s.jsx)("img",{src:"/assignment.jpg",alt:"Project 1",class:"project-img"})}),(0,s.jsx)("h2",{class:"experience-sub-title project-title",children:"12 Factor Assignment Tracker App"}),(0,s.jsx)("div",{class:"btn-container",children:(0,s.jsx)("button",{class:"btn btn-color-2 project-btn",onClick:()=>e("https://github.com/orgs/neu-ramya-12FactorApp/repositories"),children:"Github"})})]}),(0,s.jsxs)("div",{class:"details-container color-container",children:[(0,s.jsx)("div",{class:"article-container",children:(0,s.jsx)("img",{src:"/art.jpg",alt:"Project 2",class:"project-img"})}),(0,s.jsx)("h2",{class:"experience-sub-title project-title",children:"Art Gallery Management System"}),(0,s.jsx)("div",{class:"btn-container",children:(0,s.jsx)("button",{class:"btn btn-color-2 project-btn",onClick:()=>e("https://github.com/Yuktagohil/ART_GALLERY_MANAGEMENT_SYSTEM"),children:"Github"})})]}),(0,s.jsxs)("div",{class:"details-container color-container",children:[(0,s.jsx)("div",{class:"article-container",children:(0,s.jsx)("img",{src:"/mental_health.png",alt:"Project 3",class:"project-img"})}),(0,s.jsx)("h2",{class:"experience-sub-title project-title",children:"Mental Health Application"}),(0,s.jsx)("div",{class:"btn-container",children:(0,s.jsx)("button",{class:"btn btn-color-2 project-btn",onclick:"location.href='https://github.com/'",children:"View Project"})})]})]})})]}),(0,s.jsxs)("section",{id:"contact",children:[(0,s.jsx)("p",{class:"section__text__p1",children:"Get in Touch"}),(0,s.jsx)("h1",{class:"title",children:"Contact Me"}),(0,s.jsxs)("div",{class:"contact-info-upper-container",children:[(0,s.jsxs)("div",{class:"contact-info-container",children:[(0,s.jsx)("img",{src:"/message.png",alt:"Email icon",class:"icon contact-icon email-icon"}),(0,s.jsx)("p",{children:(0,s.jsx)("a",{href:"mailto:ramyadevie.s@gmail.com",children:"ramyadevie.s@gmail.com"})})]}),(0,s.jsxs)("div",{class:"contact-info-container",children:[(0,s.jsx)("img",{src:"/linkedin.png",alt:"LinkedIn icon",class:"icon contact-icon"}),(0,s.jsx)("p",{children:(0,s.jsx)("a",{href:"https://www.linkedin.com/in/ramya-devie",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})})]})]})]})]})})};function x(){return(0,s.jsxs)("div",{className:"space-y-14 lg:space-y-24",children:[(0,s.jsxs)(c(),{children:[(0,s.jsx)("title",{children:"Ramya's Portfolio Website"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap",rel:"stylesheet"})]}),(0,s.jsx)("main",{className:"max-w-4xl mx-auto antialiased",children:(0,s.jsx)(h,{})})]})}},534:function(){},9008:function(e,t,i){e.exports=i(3121)},5675:function(e,t,i){e.exports=i(9749)},1163:function(e,t,i){e.exports=i(880)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);