var wt=[{name:"blueprint",label:"Blueprint",description:"The default Blueprint Chart theme"},{name:"blueprint-framed",label:"Blueprint Framed",description:"Adds borders and a tinted footer"},{name:"blueprint-bold",label:"Blueprint Bold",description:"Charts on the blueprint canvas with the full brand palette"}];function Ot(){return wt}function Ut(){return typeof window>"u"||typeof window.matchMedia!="function"?null:window.matchMedia("(prefers-color-scheme: dark)")}function Je(i){let d=0;for(let n of i)n.type==="data"&&d++;return d}function zt(i){let d={properties:[],data:null,colorizes:[],highlights:[],areaFills:[],annotations:[],series:[],scenes:[],transforms:[]};for(let n of i)switch(n.type){case"property":d.properties.push(n);break;case"data":d.data=n;break;case"colorize":d.colorizes.push(n);break;case"highlight":d.highlights.push(n);break;case"area-fill":d.areaFills.push(n);break;case"annotation":d.annotations.push(n);break;case"series":d.series.push(n);break;case"scene":d.scenes.push(n);break;case"transform":d.transforms.push(n)}return d}function Pt(i){let d={properties:[],data:null,colorizes:[],highlights:[],areaFills:[],annotations:[],series:[],transforms:[]};for(let n of i)switch(n.type){case"property":d.properties.push(n);break;case"data":d.data=n;break;case"colorize":d.colorizes.push(n);break;case"highlight":d.highlights.push(n);break;case"area-fill":d.areaFills.push(n);break;case"annotation":d.annotations.push(n);break;case"series":d.series.push(n);break;case"transform":d.transforms.push(n)}return d}var be=class extends SyntaxError{constructor(i,d,n,x){super(i),this.expected=d,this.found=n,this.location=x,this.name="SyntaxError"}format(i){let d="Error: "+this.message;if(this.location){let n=null,x=i.find(T=>T.source===this.location.source);x&&(n=x.text.split(/\r\n|\n|\r/g));let C=this.location.start,z=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(C):C,M=this.location.source+":"+z.line+":"+z.column;if(n){let T=this.location.end,L="".padEnd(z.line.toString().length," "),E=n[C.line-1],j=(C.line===T.line?T.column:E.length+1)-C.column||1;d+=`
 --> `+M+`
`+L+` |
`+z.line+" | "+E+`
`+L+" | "+"".padEnd(C.column-1," ")+"".padEnd(j,"^")}else d+=`
 at `+M}return d}static buildMessage(i,d){function n(g){return g.codePointAt(0).toString(16).toUpperCase()}let x=Object.prototype.hasOwnProperty.call(RegExp.prototype,"unicode")?RegExp("[\\p{C}\\p{Mn}\\p{Mc}]","gu"):null;function C(g){return x?g.replace(x,h=>"\\u{"+n(h)+"}"):g}function z(g){return C(g.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,h=>"\\x0"+n(h)).replace(/[\x10-\x1F\x7F-\x9F]/g,h=>"\\x"+n(h)))}function M(g){return C(g.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,h=>"\\x0"+n(h)).replace(/[\x10-\x1F\x7F-\x9F]/g,h=>"\\x"+n(h)))}let T={literal(g){return'"'+z(g.text)+'"'},class(g){let h=g.parts.map(B=>Array.isArray(B)?M(B[0])+"-"+M(B[1]):M(B));return"["+(g.inverted?"^":"")+h.join("")+"]"+(g.unicode?"u":"")},any(){return"any character"},end(){return"end of input"},other(g){return g.description}};function L(g){return T[g.type](g)}function E(g){let h=g.map(L);if(h.sort(),h.length>0){let B=1;for(let q=1;q<h.length;q++)h[q-1]!==h[q]&&(h[B]=h[q],B++);h.length=B}switch(h.length){case 1:return h[0];case 2:return h[0]+" or "+h[1];default:return h.slice(0,-1).join(", ")+", or "+h[h.length-1]}}function j(g){return g?'"'+z(g)+'"':"end of input"}return"Expected "+E(i)+" but "+j(d)+" found."}};function Et(i,d){d=d===void 0?{}:d;let n={},x=d.grammarSource,C={Chart:Fe},z=Fe,M="chart",T="data",L="colorize",E="highlight",j="area-fill",g="annotation",h="range",B="note",q="series",he="scene",me="transform",I=/^[ \t]/,ge=/^[^\t\n\r{}=]/,Qe=/^[a-zA-Z_#]/,ye=/^[a-zA-Z0-9_#\-]/,K=/^[0-9]/,We=/^[eE]/,Xe=/^[+\-]/,en=/^[^"\\]/,ee=/^[0-9a-fA-F]/,ne=/^[^\n]/,N=/^[ \t\n\r]/,nn=y("chart",!1),A=y("{",!1),S=y("}",!1),O=R([" ","	"],!1,!1,!1),tn=y("data",!1),se=y("=",!1),ve=y(",",!1),rn=y("	",!1),xe=R(["	",`
`,"\r","{","}","="],!0,!1,!1),_e=y("colorize",!1),ie=y("highlight",!1),ce=y("area-fill",!1),Ae=y("annotation",!1),an=y("range",!1),on=y("note",!1),Ce=y("series",!1),sn=y("scene",!1),cn=y("transform",!1),ln=y("%",!1),fn=fe("identifier"),un=R([["a","z"],["A","Z"],"_","#"],!1,!1,!1),ke=R([["a","z"],["A","Z"],["0","9"],"_","#","-"],!1,!1,!1),pn=y("-",!1),we=y(".",!1),U=R([["0","9"]],!1,!1,!1),dn=R(["e","E"],!1,!1,!1),bn=R(["+","-"],!1,!1,!1),hn=fe("string"),le=y('"',!1),ze=y("\\",!1),mn=R(['"',"\\"],!0,!1,!1),gn=y("n",!1),yn=y("r",!1),vn=y("t",!1),xn=y("u",!1),te=R([["0","9"],["a","f"],["A","F"]],!1,!1,!1),Q=dt(),Pe=y("//",!1),re=R([`
`],!0,!1,!1),Ee=y("/*",!1),Y=y("*/",!1),Z=R([" ","	",`
`,"\r"],!1,!1,!1),_n=fe("whitespace");function An(e,r,a){Je(r)>1&&D("duplicate data block — a chart or scene may define at most one data { } block");let o=zt(r);return{type:"chart",chartType:e,...a.length?{trailingComments:a}:{},properties:o.properties,data:o.data,colorizes:o.colorizes,highlights:o.highlights,areaFills:o.areaFills,annotations:o.annotations,series:o.series,scenes:o.scenes,transforms:o.transforms}}function Cn(e,r,a){return e.length&&(r.leadingComments=e),a!=null&&(r.trailingComment=a),r}function kn(e,r){return{type:"data",entries:e,...r.length?{trailingComments:r}:{}}}function wn(e,r,a){return e.length&&(r.leadingComments=e),a!=null&&(r.trailingComment=a),r}function Be(e,r,a){return a}function zn(e,r,a){let o=[r,...a];return{type:"property",key:e.name,...e.quoted&&e.name==="series"?{quotedKey:!0}:{},value:o[0].value,isPercentage:!1,values:o.map(s=>s.value)}}function Pn(e,r){return{type:"property",key:e.name,...e.quoted&&e.name==="series"?{quotedKey:!0}:{},value:r.value,isPercentage:r.isPercentage}}function En(e){return{name:e,quoted:!0}}function Bn(e){return{name:e,quoted:!1}}function Sn(e,r){return{type:"property",key:e,...e==="series"?{quotedKey:!0}:{},value:r.value,isPercentage:r.isPercentage}}function Fn(e){return e.trim()}function Rn(e,r,a){return{type:"colorize",target:e,properties:r,...a.length?{trailingComments:a}:{}}}function $n(){D('colorize needs a quoted target, e.g. colorize "2021" { ... }')}function jn(e,r,a){return{type:"colorize",target:e,properties:r,fromHighlight:!0,...a.length?{trailingComments:a}:{}}}function qn(e){return{type:"highlight",target:e,properties:[]}}function Mn(){D('highlight needs a quoted target, e.g. highlight "2021" { ... } or highlight "2021"')}function Tn(e,r,a,o){return{type:"area-fill",from:e,to:r,properties:a,...o.length?{trailingComments:o}:{}}}function Ln(){D('area-fill needs two quoted targets, e.g. area-fill "Revenue" "Cost" { ... }')}function Dn(){D('area-fill needs two quoted targets, e.g. area-fill "Revenue" "Cost" { ... }')}function In(e,r,a){return{type:"annotation",kind:"point",target:e,properties:r,...a.length?{trailingComments:a}:{}}}function Kn(){D('annotation needs a quoted target, e.g. annotation "2021" { ... }')}function On(e,r){return{type:"annotation",kind:"range",properties:e,...r.length?{trailingComments:r}:{}}}function Un(e,r){return{type:"annotation",kind:"free",properties:e,...r.length?{trailingComments:r}:{}}}function Hn(e,r,a){return{type:"series",name:e,properties:r,...a.length?{trailingComments:a}:{}}}function Nn(){D('series needs a quoted name, e.g. series "Revenue" { ... }')}function Yn(e,r,a){Je(r)>1&&D("duplicate data block — a chart or scene may define at most one data { } block");let o=Pt(r);return{type:"scene",name:e??null,...a.length?{trailingComments:a}:{},properties:o.properties,data:o.data,colorizes:o.colorizes,highlights:o.highlights,areaFills:o.areaFills,annotations:o.annotations,series:o.series,transforms:o.transforms}}function Zn(e,r,a){return{type:"transform",transformType:e,properties:r,...a.length?{trailingComments:a}:{}}}function Jn(e,r,a){return e.length&&(r.leadingComments=e),a!=null&&(r.trailingComment=a),r}function Gn(e,r){return r!=null&&(e.trailingComment=r),e}function Vn(e,r){return{type:"property",key:e,value:r.value,isPercentage:r.isPercentage}}function Qn(e){return{value:e,isPercentage:!0}}function Wn(e){return{value:e,isPercentage:!1}}function Xn(e){return{value:e,isPercentage:!1}}function et(e){return{value:e,isPercentage:!1}}function nt(e){return parseFloat(e)}function tt(e){return e.join("")}function Dt(e){return e}function rt(){return'"'}function at(){return"\\"}function ot(){return`
`}function st(){return"\r"}function it(){return"	"}function ct(e){return String.fromCharCode(parseInt(e,16))}function lt(e){D("Unknown escape sequence \\"+e)}function It(e){return e}function Kt(e){return e}function ft(e){return e.trim()}function ut(e){return e.trim()}let t=d.peg$currPos|0,b=t,J=[{line:1,column:1}],F=t,ae=d.peg$maxFailExpected||[],c=d.peg$silentFails|0,W;if(d.startRule){if(!(d.startRule in C))throw Error(`Can't start parsing from rule "`+d.startRule+'".');z=C[d.startRule]}function D(e,r){throw r=r===void 0?ue(b,t):r,ht(e,r)}function pt(e=t){let r=i.codePointAt(e);return r===void 0?"":String.fromCodePoint(r)}function y(e,r){return{type:"literal",text:e,ignoreCase:r}}function R(e,r,a,o){return{type:"class",parts:e,inverted:r,ignoreCase:a,unicode:o}}function dt(){return{type:"any"}}function bt(){return{type:"end"}}function fe(e){return{type:"other",description:e}}function Se(e){let r=J[e],a;if(r)return r;if(e>=J.length)a=J.length-1;else for(a=e;!J[--a];);for(r=J[a],r={line:r.line,column:r.column};a<e;)i.charCodeAt(a)===10?(r.line++,r.column=1):r.column++,a++;return J[e]=r,r}function ue(e,r,a){let o=Se(e),s=Se(r);return{source:x,start:{offset:e,line:o.line,column:o.column},end:{offset:r,line:s.line,column:s.column}}}function f(e){t<F||(t>F&&(F=t,ae=[]),ae.push(e))}function ht(e,r){return new be(e,null,null,r)}function mt(e,r,a){return new be(be.buildMessage(e,r),e,r,a)}function Fe(){let e,r,a,o,s,l,u,p;if(e=t,m(),i.substr(t,5)===M?(r=M,t+=5):(r=n,c===0&&f(nn)),r!==n)if(a=$(),a!==n)if(o=X(),o!==n)if(m(),i.charCodeAt(t)===123?(s="{",t++):(s=n,c===0&&f(A)),s!==n){for(l=[],u=Re();u!==n;)l.push(u),u=Re();u=w(),i.charCodeAt(t)===125?(p="}",t++):(p=n,c===0&&f(S)),p===n?(t=e,e=n):(m(),b=e,e=An(o,l,u))}else t=e,e=n;else t=e,e=n;else t=e,e=n;else t=e,e=n;return e}function Re(){let e,r,a,o,s;if(e=t,r=w(),a=$e(),a===n&&(a=Me(),a===n&&(a=Te(),a===n&&(a=Le(),a===n&&(a=Ie(),a===n&&(a=Ke(),a===n&&(a=De(),a===n&&(a=Oe(),a===n&&(a=xt(),a===n&&(a=Ue(),a===n&&(a=pe())))))))))),a!==n){for(o=[],s=i.charAt(t),I.test(s)?t++:(s=n,c===0&&f(O));s!==n;)o.push(s),s=i.charAt(t),I.test(s)?t++:(s=n,c===0&&f(O));s=V(),s===n&&(s=null),H(),b=e,e=Cn(r,a,s)}else t=e,e=n;return e}function $e(){let e,r,a,o,s,l;if(e=t,i.substr(t,4)===T?(r=T,t+=4):(r=n,c===0&&f(tn)),r!==n)if(m(),i.charCodeAt(t)===123?(a="{",t++):(a=n,c===0&&f(A)),a!==n){for(o=[],s=je();s!==n;)o.push(s),s=je();s=w(),i.charCodeAt(t)===125?(l="}",t++):(l=n,c===0&&f(S)),l===n?(t=e,e=n):(b=e,e=kn(o,s))}else t=e,e=n;else t=e,e=n;return e}function je(){let e,r,a,o,s;if(e=t,r=w(),a=yt(),a===n&&(a=gt()),a!==n){for(o=[],s=i.charAt(t),I.test(s)?t++:(s=n,c===0&&f(O));s!==n;)o.push(s),s=i.charAt(t),I.test(s)?t++:(s=n,c===0&&f(O));s=V(),s===n&&(s=null),H(),b=e,e=wn(r,a,s)}else t=e,e=n;return e}function gt(){let e,r,a,o,s,l,u,p;if(e=t,r=qe(),r!==n)if(m(),i.charCodeAt(t)===61?(a="=",t++):(a=n,c===0&&f(se)),a!==n)if(m(),o=G(),o!==n){if(s=[],l=t,i.charCodeAt(t)===44?(u=",",t++):(u=n,c===0&&f(ve)),u===n?(t=l,l=n):(m(),p=G(),p===n?(t=l,l=n):(b=l,l=Be(r,o,p))),l!==n)for(;l!==n;)s.push(l),l=t,i.charCodeAt(t)===44?(u=",",t++):(u=n,c===0&&f(ve)),u===n?(t=l,l=n):(m(),p=G(),p===n?(t=l,l=n):(b=l,l=Be(r,o,p)));else s=n;s===n?(t=e,e=n):(b=e,e=zn(r,o,s))}else t=e,e=n;else t=e,e=n;else t=e,e=n;return e===n&&(e=t,r=qe(),r===n?(t=e,e=n):(m(),i.charCodeAt(t)===61?(a="=",t++):(a=n,c===0&&f(se)),a===n?(t=e,e=n):(m(),o=G(),o===n?(t=e,e=n):(b=e,e=Pn(r,o))))),e}function qe(){let e,r;return e=t,r=P(),r!==n&&(b=e,r=En(r)),e=r,e===n&&(e=t,r=X(),r!==n&&(b=e,r=Bn(r)),e=r),e}function yt(){let e,r,a,o;return e=t,r=vt(),r===n?(t=e,e=n):(i.charCodeAt(t)===9?(a="	",t++):(a=n,c===0&&f(rn)),a===n?(t=e,e=n):(m(),o=G(),o===n?(t=e,e=n):(b=e,e=Sn(r,o)))),e}function vt(){let e,r,a,o;if(e=t,r=t,a=[],o=i.charAt(t),ge.test(o)?t++:(o=n,c===0&&f(xe)),o!==n)for(;o!==n;)a.push(o),o=i.charAt(t),ge.test(o)?t++:(o=n,c===0&&f(xe));else a=n;return r=a===n?a:i.substring(r,t),r!==n&&(b=e,r=Fn(r)),e=r,e}function Me(){let e,r,a,o,s,l,u,p;if(e=t,i.substr(t,8)===L?(r=L,t+=8):(r=n,c===0&&f(_e)),r!==n)if(a=$(),a!==n)if(o=P(),o!==n)if(m(),i.charCodeAt(t)===123?(s="{",t++):(s=n,c===0&&f(A)),s!==n){for(l=[],u=k();u!==n;)l.push(u),u=k();u=w(),i.charCodeAt(t)===125?(p="}",t++):(p=n,c===0&&f(S)),p===n?(t=e,e=n):(b=e,e=Rn(o,l,u))}else t=e,e=n;else t=e,e=n;else t=e,e=n;else t=e,e=n;return e===n&&(e=t,i.substr(t,8)===L?(r=L,t+=8):(r=n,c===0&&f(_e)),r===n?(t=e,e=n):(a=m(),i.charCodeAt(t)===123?(o="{",t++):(o=n,c===0&&f(A)),o===n?(t=e,e=n):(b=e,e=$n()))),e}function Te(){let e,r,a,o,s,l,u,p,_;if(e=t,i.substr(t,9)===E?(r=E,t+=9):(r=n,c===0&&f(ie)),r!==n)if(a=$(),a!==n)if(o=P(),o!==n)if(s=m(),i.charCodeAt(t)===123?(l="{",t++):(l=n,c===0&&f(A)),l!==n){for(u=[],p=k();p!==n;)u.push(p),p=k();p=w(),i.charCodeAt(t)===125?(_="}",t++):(_=n,c===0&&f(S)),_===n?(t=e,e=n):(b=e,e=jn(o,u,p))}else t=e,e=n;else t=e,e=n;else t=e,e=n;else t=e,e=n;return e===n&&(e=t,i.substr(t,9)===E?(r=E,t+=9):(r=n,c===0&&f(ie)),r===n?(t=e,e=n):(a=$(),a===n?(t=e,e=n):(o=P(),o===n?(t=e,e=n):(s=t,c++,l=t,u=m(),i.charCodeAt(t)===123?(p="{",t++):(p=n,c===0&&f(A)),p===n?(t=l,l=n):(u=[u,p],l=u),c--,l===n?s=void 0:(t=s,s=n),s===n?(t=e,e=n):(b=e,e=qn(o))))),e===n&&(e=t,i.substr(t,9)===E?(r=E,t+=9):(r=n,c===0&&f(ie)),r===n?(t=e,e=n):(a=m(),i.charCodeAt(t)===123?(o="{",t++):(o=n,c===0&&f(A)),o===n?(t=e,e=n):(b=e,e=Mn())))),e}function Le(){let e,r,a,o,s,l,u,p,_,v;if(e=t,i.substr(t,9)===j?(r=j,t+=9):(r=n,c===0&&f(ce)),r!==n)if(a=$(),a!==n)if(o=P(),o!==n)if(s=$(),s!==n)if(l=P(),l!==n)if(m(),i.charCodeAt(t)===123?(u="{",t++):(u=n,c===0&&f(A)),u!==n){for(p=[],_=k();_!==n;)p.push(_),_=k();_=w(),i.charCodeAt(t)===125?(v="}",t++):(v=n,c===0&&f(S)),v===n?(t=e,e=n):(b=e,e=Tn(o,l,p,_))}else t=e,e=n;else t=e,e=n;else t=e,e=n;else t=e,e=n;else t=e,e=n;else t=e,e=n;return e===n&&(e=t,i.substr(t,9)===j?(r=j,t+=9):(r=n,c===0&&f(ce)),r===n?(t=e,e=n):(a=$(),a===n?(t=e,e=n):(o=P(),o===n?(t=e,e=n):(s=m(),i.charCodeAt(t)===123?(l="{",t++):(l=n,c===0&&f(A)),l===n?(t=e,e=n):(b=e,e=Ln())))),e===n&&(e=t,i.substr(t,9)===j?(r=j,t+=9):(r=n,c===0&&f(ce)),r===n?(t=e,e=n):(a=m(),i.charCodeAt(t)===123?(o="{",t++):(o=n,c===0&&f(A)),o===n?(t=e,e=n):(b=e,e=Dn())))),e}function De(){let e,r,a,o,s,l,u,p;if(e=t,i.substr(t,10)===g?(r=g,t+=10):(r=n,c===0&&f(Ae)),r!==n)if(a=$(),a!==n)if(o=P(),o!==n)if(m(),i.charCodeAt(t)===123?(s="{",t++):(s=n,c===0&&f(A)),s!==n){for(l=[],u=k();u!==n;)l.push(u),u=k();u=w(),i.charCodeAt(t)===125?(p="}",t++):(p=n,c===0&&f(S)),p===n?(t=e,e=n):(b=e,e=In(o,l,u))}else t=e,e=n;else t=e,e=n;else t=e,e=n;else t=e,e=n;return e===n&&(e=t,i.substr(t,10)===g?(r=g,t+=10):(r=n,c===0&&f(Ae)),r===n?(t=e,e=n):(a=m(),i.charCodeAt(t)===123?(o="{",t++):(o=n,c===0&&f(A)),o===n?(t=e,e=n):(b=e,e=Kn()))),e}function Ie(){let e,r,a,o,s,l;if(e=t,i.substr(t,5)===h?(r=h,t+=5):(r=n,c===0&&f(an)),r!==n)if(m(),i.charCodeAt(t)===123?(a="{",t++):(a=n,c===0&&f(A)),a!==n){for(o=[],s=k();s!==n;)o.push(s),s=k();s=w(),i.charCodeAt(t)===125?(l="}",t++):(l=n,c===0&&f(S)),l===n?(t=e,e=n):(b=e,e=On(o,s))}else t=e,e=n;else t=e,e=n;return e}function Ke(){let e,r,a,o,s,l;if(e=t,i.substr(t,4)===B?(r=B,t+=4):(r=n,c===0&&f(on)),r!==n)if(m(),i.charCodeAt(t)===123?(a="{",t++):(a=n,c===0&&f(A)),a!==n){for(o=[],s=k();s!==n;)o.push(s),s=k();s=w(),i.charCodeAt(t)===125?(l="}",t++):(l=n,c===0&&f(S)),l===n?(t=e,e=n):(b=e,e=Un(o,s))}else t=e,e=n;else t=e,e=n;return e}function Oe(){let e,r,a,o,s,l,u,p;if(e=t,i.substr(t,6)===q?(r=q,t+=6):(r=n,c===0&&f(Ce)),r!==n)if(a=$(),a!==n)if(o=P(),o!==n)if(m(),i.charCodeAt(t)===123?(s="{",t++):(s=n,c===0&&f(A)),s!==n){for(l=[],u=k();u!==n;)l.push(u),u=k();u=w(),i.charCodeAt(t)===125?(p="}",t++):(p=n,c===0&&f(S)),p===n?(t=e,e=n):(b=e,e=Hn(o,l,u))}else t=e,e=n;else t=e,e=n;else t=e,e=n;else t=e,e=n;return e===n&&(e=t,i.substr(t,6)===q?(r=q,t+=6):(r=n,c===0&&f(Ce)),r===n?(t=e,e=n):(a=m(),i.charCodeAt(t)===123?(o="{",t++):(o=n,c===0&&f(A)),o===n?(t=e,e=n):(b=e,e=Nn()))),e}function xt(){let e,r,a,o,s,l,u,p;if(e=t,i.substr(t,5)===he?(r=he,t+=5):(r=n,c===0&&f(sn)),r!==n)if(a=$(),a!==n)if(o=P(),o===n&&(o=null),m(),i.charCodeAt(t)===123?(s="{",t++):(s=n,c===0&&f(A)),s!==n){for(l=[],u=He();u!==n;)l.push(u),u=He();u=w(),i.charCodeAt(t)===125?(p="}",t++):(p=n,c===0&&f(S)),p===n?(t=e,e=n):(b=e,e=Yn(o,l,u))}else t=e,e=n;else t=e,e=n;else t=e,e=n;return e}function Ue(){let e,r,a,o,s,l,u,p;if(e=t,i.substr(t,9)===me?(r=me,t+=9):(r=n,c===0&&f(cn)),r!==n)if(a=$(),a!==n)if(o=X(),o!==n)if(m(),i.charCodeAt(t)===123?(s="{",t++):(s=n,c===0&&f(A)),s!==n){for(l=[],u=k();u!==n;)l.push(u),u=k();u=w(),i.charCodeAt(t)===125?(p="}",t++):(p=n,c===0&&f(S)),p===n?(t=e,e=n):(b=e,e=Zn(o,l,u))}else t=e,e=n;else t=e,e=n;else t=e,e=n;else t=e,e=n;return e}function He(){let e,r,a,o,s;if(e=t,r=w(),a=$e(),a===n&&(a=Me(),a===n&&(a=Te(),a===n&&(a=Le(),a===n&&(a=Ie(),a===n&&(a=Ke(),a===n&&(a=De(),a===n&&(a=Oe(),a===n&&(a=Ue(),a===n&&(a=pe()))))))))),a!==n){for(o=[],s=i.charAt(t),I.test(s)?t++:(s=n,c===0&&f(O));s!==n;)o.push(s),s=i.charAt(t),I.test(s)?t++:(s=n,c===0&&f(O));s=V(),s===n&&(s=null),H(),b=e,e=Jn(r,a,s)}else t=e,e=n;return e}function k(){let e,r,a,o;if(e=t,m(),r=pe(),r!==n){for(a=[],o=i.charAt(t),I.test(o)?t++:(o=n,c===0&&f(O));o!==n;)a.push(o),o=i.charAt(t),I.test(o)?t++:(o=n,c===0&&f(O));o=V(),o===n&&(o=null),H(),b=e,e=Gn(r,o)}else t=e,e=n;return e}function pe(){let e,r,a,o;return e=t,r=_t(),r===n?(t=e,e=n):(m(),i.charCodeAt(t)===61?(a="=",t++):(a=n,c===0&&f(se)),a===n?(t=e,e=n):(m(),o=G(),o===n?(t=e,e=n):(b=e,e=Vn(r,o)))),e}function _t(){let e;return e=P(),e===n&&(e=X()),e}function G(){let e,r,a;return e=t,r=Ne(),r===n?(t=e,e=n):(i.charCodeAt(t)===37?(a="%",t++):(a=n,c===0&&f(ln)),a===n?(t=e,e=n):(b=e,e=Qn(r))),e===n&&(e=t,r=Ne(),r!==n&&(b=e,r=Wn(r)),e=r,e===n&&(e=t,r=P(),r!==n&&(b=e,r=Xn(r)),e=r,e===n&&(e=t,r=X(),r!==n&&(b=e,r=et(r)),e=r))),e}function X(){let e,r,a,o,s;if(c++,e=t,r=t,a=i.charAt(t),Qe.test(a)?t++:(a=n,c===0&&f(un)),a!==n){for(o=[],s=i.charAt(t),ye.test(s)?t++:(s=n,c===0&&f(ke));s!==n;)o.push(s),s=i.charAt(t),ye.test(s)?t++:(s=n,c===0&&f(ke));a=[a,o],r=a}else t=r,r=n;return e=r===n?r:i.substring(e,t),c--,e===n&&(r=n,c===0&&f(fn)),e}function Ne(){let e,r,a,o,s,l,u,p,_,v;if(e=t,r=t,a=t,i.charCodeAt(t)===45?(o="-",t++):(o=n,c===0&&f(pn)),o===n&&(o=null),s=t,i.charCodeAt(t)===46?(l=".",t++):(l=n,c===0&&f(we)),l!==n){if(u=[],p=i.charAt(t),K.test(p)?t++:(p=n,c===0&&f(U)),p!==n)for(;p!==n;)u.push(p),p=i.charAt(t),K.test(p)?t++:(p=n,c===0&&f(U));else u=n;u===n?(t=s,s=n):(l=[l,u],s=l)}else t=s,s=n;if(s===n){if(s=t,l=[],u=i.charAt(t),K.test(u)?t++:(u=n,c===0&&f(U)),u!==n)for(;u!==n;)l.push(u),u=i.charAt(t),K.test(u)?t++:(u=n,c===0&&f(U));else l=n;if(l!==n){if(u=t,i.charCodeAt(t)===46?(p=".",t++):(p=n,c===0&&f(we)),p!==n){for(_=[],v=i.charAt(t),K.test(v)?t++:(v=n,c===0&&f(U));v!==n;)_.push(v),v=i.charAt(t),K.test(v)?t++:(v=n,c===0&&f(U));p=[p,_],u=p}else t=u,u=n;u===n&&(u=null),l=[l,u],s=l}else t=s,s=n}if(s!==n){if(l=t,u=i.charAt(t),We.test(u)?t++:(u=n,c===0&&f(dn)),u!==n){if(p=i.charAt(t),Xe.test(p)?t++:(p=n,c===0&&f(bn)),p===n&&(p=null),_=[],v=i.charAt(t),K.test(v)?t++:(v=n,c===0&&f(U)),v!==n)for(;v!==n;)_.push(v),v=i.charAt(t),K.test(v)?t++:(v=n,c===0&&f(U));else _=n;_===n?(t=l,l=n):(u=[u,p,_],l=u)}else t=l,l=n;l===n&&(l=null),o=[o,s,l],a=o}else t=a,a=n;return r=a===n?a:i.substring(r,t),r!==n&&(b=e,r=nt(r)),e=r,e}function P(){let e,r,a,o;if(c++,e=t,i.charCodeAt(t)===34?(r='"',t++):(r=n,c===0&&f(le)),r!==n){for(a=[],o=Ye();o!==n;)a.push(o),o=Ye();i.charCodeAt(t)===34?(o='"',t++):(o=n,c===0&&f(le)),o===n?(t=e,e=n):(b=e,e=tt(a))}else t=e,e=n;return c--,e===n&&(r=n,c===0&&f(hn)),e}function Ye(){let e,r,a;return e=t,i.charCodeAt(t)===92?(r="\\",t++):(r=n,c===0&&f(ze)),r===n?(t=e,e=n):(a=At(),a===n?(t=e,e=n):(b=e,e=a)),e===n&&(e=i.charAt(t),en.test(e)?t++:(e=n,c===0&&f(mn))),e}function At(){let e,r,a,o,s,l,u,p;return e=t,i.charCodeAt(t)===34?(r='"',t++):(r=n,c===0&&f(le)),r!==n&&(b=e,r=rt()),e=r,e===n&&(e=t,i.charCodeAt(t)===92?(r="\\",t++):(r=n,c===0&&f(ze)),r!==n&&(b=e,r=at()),e=r,e===n&&(e=t,i.charCodeAt(t)===110?(r="n",t++):(r=n,c===0&&f(gn)),r!==n&&(b=e,r=ot()),e=r,e===n&&(e=t,i.charCodeAt(t)===114?(r="r",t++):(r=n,c===0&&f(yn)),r!==n&&(b=e,r=st()),e=r,e===n&&(e=t,i.charCodeAt(t)===116?(r="t",t++):(r=n,c===0&&f(vn)),r!==n&&(b=e,r=it()),e=r,e===n&&(e=t,i.charCodeAt(t)===117?(r="u",t++):(r=n,c===0&&f(xn)),r===n?(t=e,e=n):(a=t,o=t,s=i.charAt(t),ee.test(s)?t++:(s=n,c===0&&f(te)),s===n?(t=o,o=n):(l=i.charAt(t),ee.test(l)?t++:(l=n,c===0&&f(te)),l===n?(t=o,o=n):(u=i.charAt(t),ee.test(u)?t++:(u=n,c===0&&f(te)),u===n?(t=o,o=n):(p=i.charAt(t),ee.test(p)?t++:(p=n,c===0&&f(te)),p===n?(t=o,o=n):(s=[s,l,u,p],o=s)))),a=o===n?o:i.substring(a,t),a===n?(t=e,e=n):(b=e,e=ct(a))),e===n&&(e=t,i.length>t?(r=i.charAt(t),t++):(r=n,c===0&&f(Q)),r!==n&&(b=e,r=lt(r)),e=r)))))),e}function oe(){let e;return e=Ct(),e===n&&(e=kt()),e}function Ct(){let e,r,a,o;if(e=t,i.substr(t,2)==="//"?(r="//",t+=2):(r=n,c===0&&f(Pe)),r!==n){for(a=[],o=i.charAt(t),ne.test(o)?t++:(o=n,c===0&&f(re));o!==n;)a.push(o),o=i.charAt(t),ne.test(o)?t++:(o=n,c===0&&f(re));r=[r,a],e=r}else t=e,e=n;return e}function kt(){let e,r,a,o,s,l;if(e=t,i.substr(t,2)==="/*"?(r="/*",t+=2):(r=n,c===0&&f(Ee)),r!==n){for(a=[],o=t,s=t,c++,i.substr(t,2)==="*/"?(l="*/",t+=2):(l=n,c===0&&f(Y)),c--,l===n?s=void 0:(t=s,s=n),s===n?(t=o,o=n):(i.length>t?(l=i.charAt(t),t++):(l=n,c===0&&f(Q)),l===n?(t=o,o=n):(s=[s,l],o=s));o!==n;)a.push(o),o=t,s=t,c++,i.substr(t,2)==="*/"?(l="*/",t+=2):(l=n,c===0&&f(Y)),c--,l===n?s=void 0:(t=s,s=n),s===n?(t=o,o=n):(i.length>t?(l=i.charAt(t),t++):(l=n,c===0&&f(Q)),l===n?(t=o,o=n):(s=[s,l],o=s));i.substr(t,2)==="*/"?(o="*/",t+=2):(o=n,c===0&&f(Y)),o===n?(t=e,e=n):(r=[r,a,o],e=r)}else t=e,e=n;return e}function H(){let e,r;for(c++,e=[],r=i.charAt(t),N.test(r)?t++:(r=n,c===0&&f(Z));r!==n;)e.push(r),r=i.charAt(t),N.test(r)?t++:(r=n,c===0&&f(Z));return c--,e}function w(){let e,r,a,o;for(e=t,r=[],a=t,H(),o=V(),o===n?(t=a,a=n):(b=a,a=o);a!==n;)r.push(a),a=t,H(),o=V(),o===n?(t=a,a=n):(b=a,a=o);return a=H(),b=e,e=r,e}function V(){let e,r,a,o,s,l,u;if(e=t,i.substr(t,2)==="//"?(r="//",t+=2):(r=n,c===0&&f(Pe)),r!==n){for(a=t,o=[],s=i.charAt(t),ne.test(s)?t++:(s=n,c===0&&f(re));s!==n;)o.push(s),s=i.charAt(t),ne.test(s)?t++:(s=n,c===0&&f(re));a=i.substring(a,t),b=e,e=ft(a)}else t=e,e=n;if(e===n)if(e=t,i.substr(t,2)==="/*"?(r="/*",t+=2):(r=n,c===0&&f(Ee)),r!==n){for(a=t,o=[],s=t,l=t,c++,i.substr(t,2)==="*/"?(u="*/",t+=2):(u=n,c===0&&f(Y)),c--,u===n?l=void 0:(t=l,l=n),l===n?(t=s,s=n):(i.length>t?(u=i.charAt(t),t++):(u=n,c===0&&f(Q)),u===n?(t=s,s=n):(l=[l,u],s=l));s!==n;)o.push(s),s=t,l=t,c++,i.substr(t,2)==="*/"?(u="*/",t+=2):(u=n,c===0&&f(Y)),c--,u===n?l=void 0:(t=l,l=n),l===n?(t=s,s=n):(i.length>t?(u=i.charAt(t),t++):(u=n,c===0&&f(Q)),u===n?(t=s,s=n):(l=[l,u],s=l));a=i.substring(a,t),i.substr(t,2)==="*/"?(o="*/",t+=2):(o=n,c===0&&f(Y)),o===n?(t=e,e=n):(b=e,e=ut(a))}else t=e,e=n;return e}function $(){let e,r;if(c++,e=[],r=i.charAt(t),N.test(r)?t++:(r=n,c===0&&f(Z)),r===n&&(r=oe()),r!==n)for(;r!==n;)e.push(r),r=i.charAt(t),N.test(r)?t++:(r=n,c===0&&f(Z)),r===n&&(r=oe());else e=n;return c--,e===n&&(r=n,c===0&&f(_n)),e}function m(){let e,r;for(c++,e=[],r=i.charAt(t),N.test(r)?t++:(r=n,c===0&&f(Z)),r===n&&(r=oe());r!==n;)e.push(r),r=i.charAt(t),N.test(r)?t++:(r=n,c===0&&f(Z)),r===n&&(r=oe());return c--,e}W=z();let de=W!==n&&t===i.length;function Ze(){throw W!==n&&t<i.length&&f(bt()),mt(ae,F<i.length?pt(F):null,F<i.length?ue(F,F+1):ue(F,F))}if(d.peg$library)return{peg$result:W,peg$currPos:t,peg$FAILED:n,peg$maxFailExpected:ae,peg$maxFailPos:F,peg$success:de,peg$throw:de?void 0:Ze};if(de)return W;Ze()}function Bt(i){try{return Et(i)}catch(d){if(d instanceof Error&&"location"in d){let n=d.location,x=SyntaxError(`${d.message} at ${n.start.line}:${n.start.column}`);throw x.location=n,x}throw d}}var St=`
/* Blueprint Chart — Runtime Embed Styles
   CSS custom properties with baked-in defaults for standalone iframe usage. */

.bc-frame {
  --bc-frame-font-family: system-ui, -apple-system, sans-serif;
  --bc-frame-padding: 0;
  /* Per-side properties so a multi-value \`padding\` shorthand never lands in a
     single-value shorthand slot, which would invalidate the whole declaration. */
  --bc-frame-padding-top: var(--bc-frame-padding);
  --bc-frame-padding-right: var(--bc-frame-padding);
  --bc-frame-padding-bottom: var(--bc-frame-padding);
  --bc-frame-padding-left: var(--bc-frame-padding);
  --bc-frame-bg: #fff;
  --bc-text-color: #333;
  font-family: var(--bc-frame-font-family);
  background: var(--bc-frame-bg);
  /* currentColor marks (e.g. above-bar value labels) follow the theme text
     colour, not the ambient document colour. */
  color: var(--bc-text-color, #333);
}

/* Keeps the SVG's baked-in background rect (applyCanvasBackground) in sync
   with the frame background; transparentBackground sets the var to
   transparent at runtime. */
.bc-frame .bc-canvas-bg {
  fill: var(--bc-frame-bg, #fff);
}

/* \`theme = "dark"\` emits this class on the frame, so it carries the same
   surface the document-level dark mode does, without depending on an ambient
   data-bs-theme. Keep in sync with DARK_THEME in render/frame-svg.ts. */
.bc-frame.bc-theme-dark {
  --bc-frame-bg: #1c1c1c;
  --bc-text-color: rgba(255, 255, 255, 0.9);
  --bc-axis-color: rgba(255, 255, 255, 0.6);
  --bc-grid-color: #333;

  color: rgba(255, 255, 255, 0.9);
}

.bc-frame-header {
  padding: var(--bc-frame-padding-top) var(--bc-frame-padding-right) 0 var(--bc-frame-padding-left);
  background: var(--bc-frame-header-bg, transparent);
  border-bottom: var(--bc-frame-header-border-bottom, none);
  margin-bottom: var(--bc-frame-header-margin-bottom, 0);
}

.bc-frame-body {
  padding: 0 var(--bc-frame-padding-right) 0 var(--bc-frame-padding-left);
}

/* Constrained-height mode (\`heightMode\` fixed or aspect-ratio). post-render.ts
   adds .bc-frame--constrained and layout-constraints.ts pins the container
   height with overflow: hidden; without these rules the frame renders at its
   natural height and is guillotined. Mirrors chart.scss — keep the two in
   sync. */
/* An axis label moved inside the plot sits directly on the marks; painting the
   stroke first keeps it readable over a filled band. */
.bc-axis-label-inside {
  paint-order: stroke;
  stroke: var(--bc-frame-bg, #fff);
  stroke-width: 3px;
  stroke-linejoin: round;
}

.bc-frame--constrained {
  flex: 1;
  position: relative;
  min-height: 0;
  overflow: hidden;
}

.bc-frame--constrained .bc-frame-header {
  position: relative;
  z-index: 1;
  background: var(--bc-frame-header-bg, var(--bc-frame-bg, #fff));
}

.bc-frame--constrained .bc-frame-body {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.bc-frame--constrained .bc-frame-note {
  position: absolute;
  bottom: var(--bc-footer-h, 0);
  left: 0;
  right: 0;
  z-index: 1;
}

.bc-frame--constrained .bc-frame-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.bc-frame-title {
  --bc-frame-title-color: var(--bc-text-color, #333);
  --bc-frame-title-font-size: 1.25rem;
  color: var(--bc-frame-title-color);
  font-size: var(--bc-frame-title-font-size);
  font-weight: bold;
  margin: 0;
  white-space: pre-line;
}

.bc-frame-description {
  --bc-frame-description-color: var(--bc-text-color, #555);
  --bc-frame-description-font-size: 0.875rem;
  color: var(--bc-frame-description-color);
  font-size: var(--bc-frame-description-font-size);
  margin: 0.25rem 0 0;
  white-space: pre-line;
}

.bc-frame-footer {
  margin-top: 0.5rem;
  gap: 0.25rem 1rem;
  padding: var(--bc-frame-footer-padding-top, 0) var(--bc-frame-padding-right) var(--bc-frame-padding-bottom) var(--bc-frame-padding-left);
  background: var(--bc-frame-footer-bg, transparent);
  border-top: var(--bc-frame-footer-border-top, none);
}

.bc-frame-footer-left {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.25rem 0.75rem;
}

.bc-frame-footer-left > :not(:first-child)::before {
  content: "\\00B7";
  margin-right: 0.5rem;
  color: var(--bc-text-color, #888);
}

.bc-frame-footer-right {
  display: flex;
  align-items: center;
}

.bc-frame-note {
  --bc-frame-note-color: var(--bc-text-color, #888);
  --bc-frame-note-font-size: 0.75rem;
  font-style: italic;
  color: var(--bc-frame-note-color);
  font-size: var(--bc-frame-note-font-size);
  margin: 0;
  padding: 0 var(--bc-frame-padding-right) 0 var(--bc-frame-padding-left);
}

.bc-frame-byline,
.bc-frame-source,
.bc-frame-get-the-data {
  --bc-frame-meta-color: var(--bc-text-color, #888);
  --bc-frame-meta-font-size: 0.75rem;
  color: var(--bc-frame-meta-color);
  font-size: var(--bc-frame-meta-font-size);
}

.bc-frame-byline {
  white-space: pre-line;
}

.bc-frame-credit {
  --bc-frame-credit-color: var(--bc-text-color, #666);
  --bc-frame-credit-font-size: 0.75rem;
  color: var(--bc-frame-credit-color);
  font-size: var(--bc-frame-credit-font-size);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.bc-frame-source-link {
  color: inherit;
  text-decoration: underline;
}

.bc-axis .domain {
  stroke: var(--bc-axis-color, #333);
}

.bc-axis .tick text {
  fill: var(--bc-axis-color, #333);
  font-size: 10px;
}

.bc-axis .tick line {
  stroke: var(--bc-axis-color, #333);
}

.bc-grid-line {
  stroke: var(--bc-grid-color, #e0e0e0);
  stroke-width: 1;
}

.bc-zero-baseline {
  stroke: #666;
  stroke-width: 1;
}

.bc-bar {
  /* fill is set via D3 .attr() from data-bound colors — do not override */
}

.bc-line {
  fill: none;
  stroke-width: 2;
}

.bc-value-label {
  font-size: 11px;
  /* fill is set via D3 .attr() — do not override */
}

.bc-direct-label {
  font-size: 12px;
  font-weight: 600;
}

.bc-tooltip {
  position: absolute;
  pointer-events: none;
  background: var(--bc-tooltip-bg, #fff);
  color: var(--bc-tooltip-color, #212529);
  border: 1px solid var(--bc-tooltip-border-color, #dee2e6);
  border-radius: 4px;
  padding: 6px 10px;
  font-size: 13px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  max-width: var(--bc-tooltip-max-width, 240px);
  overflow-wrap: break-word;
  z-index: 9999;
  display: none;
}

.bc-crosshair {
  stroke: #999;
  stroke-width: 1;
  pointer-events: none;
}

.bc-arc-label-line {
  fill: none;
  stroke: #999;
  stroke-width: 1;
}

.bc-theme-blueprint-framed {
  --bc-frame-header-border-bottom: 1px solid #e0e0e0;
  --bc-frame-header-margin-bottom: 0.5rem;
  --bc-frame-footer-bg: #f8f8f8;
  --bc-frame-footer-border-top: 1px solid #e0e0e0;
  --bc-frame-footer-padding-top: 0.625rem;
}

[data-bs-theme="dark"] .bc-frame.bc-theme-blueprint-bold:not([data-bs-theme="dark"] [data-bs-theme="light"] *) {
  --bc-frame-bg: #000000;
  --bc-text-color: rgba(255, 255, 255, 0.95);
  --bc-axis-color: rgba(255, 255, 255, 0.7);
  --bc-grid-color: rgba(255, 255, 255, 0.12);
}

.blueprint-chart-error {
  color: red;
  padding: 1em;
  border: 1px solid red;
}

body {
  margin: 0;
  overflow: hidden;
}

/* Dark theme: activated by data-bs-theme="dark" on the document (matching the
   editor's convention). The chart owns these colors; the dark frame background
   also drives the renderer's resolveBackgroundColor, so data-mark colors and
   contrast labels adapt at render time. Scoped to .bc-frame so these override
   the frame's own light --bc-frame-bg / --bc-text-color declarations (which are
   set on .bc-frame and would otherwise shadow a document-level override). */
[data-bs-theme="dark"] body {
  /* color themes above-bar value labels (fill: currentColor). */
  background: #1c1c1c;
  color: rgba(255, 255, 255, 0.9);
}

[data-bs-theme="dark"] .bc-frame {
  --bc-frame-bg: #1c1c1c;
  --bc-text-color: rgba(255, 255, 255, 0.9);
  --bc-axis-color: rgba(255, 255, 255, 0.6);
  --bc-grid-color: #333;

  color: rgba(255, 255, 255, 0.9);
}
`,Ft="blueprint-chart-resize",Ge="blueprint-chart-error";function Ht(i){return typeof i=="object"&&i&&i.type==="blueprint-chart-resize"&&typeof i.height=="number"?i.height:null}function Nt(i){return typeof i=="object"&&!!i&&i.type==="blueprint-chart-error"}var Rt=`/* Blueprint Chart — Scene player styles, shared by the editor and the embed.
   Light colors live in var() fallbacks; only dark mode defines the tokens. */

[data-bs-theme="dark"] .bc-frame:not([data-bs-theme="dark"] [data-bs-theme="light"] *),
.bc-frame.bc-theme-dark {
  --bc-scene-player-text: #e6e6e6;
  --bc-scene-player-muted: #a8a5a0;
  --bc-scene-player-border: #6b6966;
  --bc-scene-player-border-hover: #a8a5a0;
  --bc-scene-player-background-hover: rgba(255, 255, 255, 0.06);
  --bc-scene-player-track: #6b6966;
  --bc-scene-player-accent: #4a7fd0;
  --bc-scene-player-accent-hover: #5b8fdc;
}

.bc-scene-player--buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 0.25rem 0 0;
  width: 100%;
}

.bc-scene-player--buttons.bc-scene-player--left {
  justify-content: flex-start;
  gap: 16px;
}

.bc-scene-player--buttons.bc-scene-player--left .bc-scene-player__counter {
  margin-left: auto;
}

.bc-scene-player--buttons.bc-scene-player--center {
  justify-content: center;
  gap: 16px;
}

.bc-scene-player--buttons.bc-scene-player--right {
  justify-content: flex-end;
  gap: 16px;
}

.bc-scene-player--dot-stepper,
.bc-scene-player--minimal-arrows {
  display: flex;
  align-items: center;
  padding: 0.25rem 0 0;
  width: 100%;
}

.bc-scene-player--dot-stepper {
  gap: 0.375rem;
}

.bc-scene-player--minimal-arrows {
  gap: 4px;
}

.bc-scene-player--dot-stepper.bc-scene-player--left,
.bc-scene-player--minimal-arrows.bc-scene-player--left {
  justify-content: flex-start;
}

.bc-scene-player--dot-stepper.bc-scene-player--center,
.bc-scene-player--minimal-arrows.bc-scene-player--center {
  justify-content: center;
}

.bc-scene-player--dot-stepper.bc-scene-player--right,
.bc-scene-player--minimal-arrows.bc-scene-player--right {
  justify-content: flex-end;
}

.bc-scene-player--progress-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0 0;
  width: 100%;
}

.bc-scene-player__btn-group {
  display: flex;
  gap: 6px;
}

.bc-scene-player__btn-group__btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid var(--bc-scene-player-border, currentColor);
  background: none;
  color: var(--bc-scene-player-muted);
  font-size: var(--bs-font-size-sm, 0.875rem);
  font-weight: 500;
  cursor: pointer;
  transition: border-color var(--bc-duration-base, 150ms), color var(--bc-duration-base, 150ms);
  line-height: 1.4;
}

.bc-scene-player__btn-group__btn:hover:not(:disabled) {
  border-color: var(--bc-scene-player-border-hover);
  background: var(--bc-scene-player-background-hover, rgba(0, 0, 0, 0.04));
  color: var(--bc-scene-player-text);
}

.bc-scene-player__btn-group__btn--next {
  color: var(--bc-scene-player-text);
  font-weight: 600;
}

.bc-scene-player__btn-group__btn--disabled {
  opacity: 0.35;
  cursor: default;
}

.bc-scene-player__nav-btn {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid var(--bc-scene-player-border, #e2e0db);
  color: var(--bc-scene-player-muted, #9b9893);
  cursor: pointer;
  flex-shrink: 0;
  padding: 0;
}

.bc-scene-player__nav-btn:hover:not(:disabled) {
  border-color: var(--bc-scene-player-border-hover, #6b6966);
  color: var(--bc-scene-player-text, #1a1a1a);
}

.bc-scene-player__nav-btn:disabled {
  opacity: 0.3;
  cursor: default;
}

.bc-scene-player__play-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bc-scene-player-accent, #2c5aa0);
  border: none;
  color: #fff;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0;
  transition: background var(--bc-duration-base, 150ms) ease;
}

.bc-scene-player__play-btn:hover {
  background: var(--bc-scene-player-accent-hover, #1e4888);
}

.bc-scene-player--dot-stepper .bc-scene-player__play-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.bc-scene-player--minimal-arrows .bc-scene-player__play-btn {
  width: 26px;
  height: 26px;
  border-radius: 7px;
}

.bc-scene-player--progress-bar .bc-scene-player__play-btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}

.bc-scene-player__dots {
  display: flex;
  gap: 6px;
  align-items: center;
}

.bc-scene-player__dots__dot {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  border: none;
  padding: 0;
  cursor: pointer;
  background: var(--bc-scene-player-track, #e2e0db);
  opacity: 0.4;
  transition: width var(--bc-duration-slow, 250ms) ease, background var(--bc-duration-slow, 250ms) ease, opacity var(--bc-duration-slow, 250ms) ease;
}

.bc-scene-player__dots__dot--completed {
  background: var(--bc-scene-player-accent, #2c5aa0);
  opacity: 1;
}

.bc-scene-player__dots__dot--active {
  width: 20px;
  background: var(--bc-scene-player-accent, #2c5aa0);
  opacity: 1;
}

.bc-scene-player__dots__dot:hover {
  opacity: 0.8;
}

.bc-scene-player__segments {
  flex: 1;
  display: flex;
  gap: 3px;
  align-items: center;
}

.bc-scene-player__segments__segment {
  flex: 1;
  height: 4px;
  border-radius: 2px;
  border: none;
  padding: 0;
  cursor: pointer;
  background: var(--bc-scene-player-track, #e2e0db);
  opacity: 0.45;
  transition: height var(--bc-duration-slow, 250ms) ease, background var(--bc-duration-slow, 250ms) ease, opacity var(--bc-duration-slow, 250ms) ease;
}

.bc-scene-player__segments__segment--completed {
  background: var(--bc-scene-player-accent, #2c5aa0);
  opacity: 1;
}

.bc-scene-player__segments__segment--active {
  height: 6px;
  background: var(--bc-scene-player-accent, #2c5aa0);
  opacity: 1;
}

.bc-scene-player__segments__segment:hover {
  opacity: 0.8;
}

.bc-scene-player__counter {
  font-weight: 500;
  color: var(--bc-scene-player-muted, #9b9893);
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

.bc-scene-player--buttons .bc-scene-player__counter {
  font-size: var(--bs-font-size-sm, 0.875rem);
}

.bc-scene-player--minimal-arrows .bc-scene-player__counter {
  font-size: var(--bs-font-size-xs, 0.75rem);
  margin-right: 4px;
}

.bc-scene-player--minimal-arrows .bc-scene-player__counter--end {
  margin-right: 0;
  margin-left: 4px;
}

.bc-scene-player--progress-bar .bc-scene-player__counter {
  font-size: var(--bs-font-size-xs, 0.75rem);
  flex-shrink: 0;
}

@media (prefers-reduced-motion: reduce) {
  .bc-scene-player,
  .bc-scene-player * {
    transition: none;
  }
}
`;$t();function $t(){var i;try{if(typeof globalThis<"u"){let d=globalThis.BLUEPRINT_CHART_RUNTIME_URL;if(typeof d=="string"&&d)return d}return typeof document>"u"?"":((i=document.currentScript)==null?void 0:i.src)??""}catch{return""}}var jt=["buttons","progress-bar","dot-stepper","minimal-arrows"],qt=["left","center","right"];function Ve(i,d,n){return d.find(x=>x===i)??n}function Mt(i){let d;try{d=Bt(i)}catch{return null}let n=new Map(d.properties.map(C=>[C.key,C.value])),x=n.get("player");return!d.scenes.length||x==="none"?null:{type:Ve(x,jt,"buttons"),position:Ve(n.get("playerPosition"),qt,"left"),total:d.scenes.length+1}}function Yt(i,d,n){let x=d?`<script src="${Lt(d)}"><\/script>`:"",C=n==="dark"?'<html data-bs-theme="dark">':"<html>",z=d?['var chart = document.getElementById("chart");',"function reportError(e) {",`  parent.postMessage({ type: "${Ge}", message: String(e) }, "*");`,"}","// Constrained frames size the plot from the footer height measured in the","// previous render's animation frame, so render again once the player is in.","function rerenderConstrained() {",'  if (!chart.querySelector(".bc-frame--constrained")) {',"    return;","  }","  try {","    window.BlueprintChart.renderBpc(chart, __BPC_SRC__);","  }","  catch (e) {","    reportError(e);","  }","}","try {","  window.BlueprintChart.renderBpc(chart, __BPC_SRC__);","  if (__BPC_PLAYER__) {","    window.BlueprintChart.mountScenePlayer(chart, __BPC_PLAYER__, function (step) {","      window.BlueprintChart.renderBpc(chart, __BPC_SRC__, { sceneIndex: step > 1 ? step - 2 : undefined, transition: true });","    });","    requestAnimationFrame(rerenderConstrained);","  }","}","catch (e) {","  reportError(e);","}"]:[`parent.postMessage({ type: "${Ge}", message: "Blueprint Chart runtime URL unavailable" }, "*");`];return["<!DOCTYPE html>",`${C}<head>`,`<style>${St}</style>`,`<style>${Rt}</style>`,"</head><body>",'<div id="chart" class="blueprint-chart-container"></div>',x,"<script>",`var __BPC_SRC__ = ${Tt(i)};`,`var __BPC_PLAYER__ = ${JSON.stringify(Mt(i))};`,"function notifySize() {","  var h = document.documentElement.scrollHeight;",`  parent.postMessage({ type: "${Ft}", height: h }, "*");`,"}",...z,"notifySize();","new ResizeObserver(notifySize).observe(document.body);","<\/script>","</body></html>"].filter(Boolean).join(`
`)}function Tt(i){return JSON.stringify(i).replace(/</g,"\\u003c").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function Lt(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}export{Yt as b,Bt as c,Ht as f,Ut as n,Nt as p,Ot as t,Ft as u};
