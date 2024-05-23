const r=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)),u=(e="id")=>`${e}-${r(1e3,9999)}-${r(1e5,999999)}-${r(1e3,9999)}-${r(1e6,9999999)}-${r(1e3,9999)}-${r(1e7,99999999)}`;function $(e){return e.replace(/^./,e[0].toUpperCase())}function i(e,t=!1){if(typeof e>"u"||e===null)return"";var a=t||typeof t>"u"?"<br />":"<br>";return(e+"").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1"+a+"$2")}const d=()=>'<span class="text-muted" style="user-select: none;">N/A</span>';function f(e){const{path:t,size:a,viewBox:l,attrs:n,color:s}={size:24,viewBox:"0 0 24 24",attrs:{},...e??{}},c=Object.keys(n).map(o=>`${o}="${n[o]}"`).join(" ");return Object.hasOwn(n,"style")&&n.style.includes("--r")&&(n.style+="transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1));"),`
	<svg
		width="${a}"
		height="${a}"
		viewBox="${l}"
		class="${`${s?"text":"default"}-${s??"color"}`}"
		${c}
	>
		<path d="${t}" style="fill: currentColor" />
	</svg>
	`}export{i as a,u as b,f as i,d as n,r,$ as u};
//# sourceMappingURL=strings.js.map
