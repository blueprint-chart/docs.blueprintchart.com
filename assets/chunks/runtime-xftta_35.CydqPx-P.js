var kr=[{name:"blueprint",label:"Blueprint",description:"The default Blueprint Chart theme"},{name:"blueprint-framed",label:"Blueprint Framed",description:"Adds borders and a tinted footer"},{name:"blueprint-bold",label:"Blueprint Bold",description:"Charts on the blueprint canvas with the full brand palette"}];function jr(){return kr}function Dr(){return typeof window>"u"||typeof window.matchMedia!="function"?null:window.matchMedia("(prefers-color-scheme: dark)")}function Je(s){let h=0;for(let t of s)t.type==="data"&&h++;return h}function wr(s){let h={properties:[],data:null,colorizes:[],highlights:[],areaFills:[],annotations:[],series:[],scenes:[],transforms:[]};for(let t of s)switch(t.type){case"property":h.properties.push(t);break;case"data":h.data=t;break;case"colorize":h.colorizes.push(t);break;case"highlight":h.highlights.push(t);break;case"area-fill":h.areaFills.push(t);break;case"annotation":h.annotations.push(t);break;case"series":h.series.push(t);break;case"scene":h.scenes.push(t);break;case"transform":h.transforms.push(t)}return h}function zr(s){let h={properties:[],data:null,colorizes:[],highlights:[],areaFills:[],annotations:[],series:[],transforms:[]};for(let t of s)switch(t.type){case"property":h.properties.push(t);break;case"data":h.data=t;break;case"colorize":h.colorizes.push(t);break;case"highlight":h.highlights.push(t);break;case"area-fill":h.areaFills.push(t);break;case"annotation":h.annotations.push(t);break;case"series":h.series.push(t);break;case"transform":h.transforms.push(t)}return h}var pe=class extends SyntaxError{constructor(s,h,t,k){super(s),this.expected=h,this.found=t,this.location=k,this.name="SyntaxError"}format(s){let h="Error: "+this.message;if(this.location){let t=null,k=s.find(j=>j.source===this.location.source);k&&(t=k.text.split(/\r\n|\n|\r/g));let w=this.location.start,_=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(w):w,T=this.location.source+":"+_.line+":"+_.column;if(t){let j=this.location.end,D="".padEnd(_.line.toString().length," "),S=t[w.line-1],q=(w.line===j.line?j.column:S.length+1)-w.column||1;h+=`
 --> `+T+`
`+D+` |
`+_.line+" | "+S+`
`+D+" | "+"".padEnd(w.column-1," ")+"".padEnd(q,"^")}else h+=`
 at `+T}return h}static buildMessage(s,h){function t(g){return g.codePointAt(0).toString(16).toUpperCase()}let k=Object.prototype.hasOwnProperty.call(RegExp.prototype,"unicode")?RegExp("[\\p{C}\\p{Mn}\\p{Mc}]","gu"):null;function w(g){return k?g.replace(k,b=>"\\u{"+t(b)+"}"):g}function _(g){return w(g.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,b=>"\\x0"+t(b)).replace(/[\x10-\x1F\x7F-\x9F]/g,b=>"\\x"+t(b)))}function T(g){return w(g.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,b=>"\\x0"+t(b)).replace(/[\x10-\x1F\x7F-\x9F]/g,b=>"\\x"+t(b)))}let j={literal(g){return'"'+_(g.text)+'"'},class(g){let b=g.parts.map(P=>Array.isArray(P)?T(P[0])+"-"+T(P[1]):T(P));return"["+(g.inverted?"^":"")+b.join("")+"]"+(g.unicode?"u":"")},any(){return"any character"},end(){return"end of input"},other(g){return g.description}};function D(g){return j[g.type](g)}function S(g){let b=g.map(D);if(b.sort(),b.length>0){let P=1;for(let M=1;M<b.length;M++)b[M-1]!==b[M]&&(b[P]=b[M],P++);b.length=P}switch(b.length){case 1:return b[0];case 2:return b[0]+" or "+b[1];default:return b.slice(0,-1).join(", ")+", or "+b[b.length-1]}}function q(g){return g?'"'+_(g)+'"':"end of input"}return"Expected "+S(s)+" but "+q(h)+" found."}};function _r(s,h){h=h===void 0?{}:h;let t={},k=h.grammarSource,w={Chart:Fe},_=Fe,T="chart",j="data",D="colorize",S="highlight",q="area-fill",g="annotation",b="range",P="note",M="series",be="scene",me="transform",K=/^[ \t]/,ge=/^[^\t\n\r{}=]/,Ye=/^[a-zA-Z_#]/,ve=/^[a-zA-Z0-9_#\-]/,N=/^[0-9]/,Qe=/^[eE]/,We=/^[+\-]/,Xe=/^[^"\\]/,ee=/^[0-9a-fA-F]/,te=/^[^\n]/,L=/^[ \t\n\r]/,et=v("chart",!1),C=v("{",!1),B=v("}",!1),U=$([" ","	"],!1,!1,!1),tt=v("data",!1),ie=v("=",!1),ye=v(",",!1),rt=v("	",!1),Ae=$(["	",`
`,"\r","{","}","="],!0,!1,!1),Ce=v("colorize",!1),se=v("highlight",!1),le=v("area-fill",!1),xe=v("annotation",!1),nt=v("range",!1),at=v("note",!1),ke=v("series",!1),ot=v("scene",!1),it=v("transform",!1),st=v("%",!1),lt=fe("identifier"),ct=$([["a","z"],["A","Z"],"_","#"],!1,!1,!1),we=$([["a","z"],["A","Z"],["0","9"],"_","#","-"],!1,!1,!1),ft=v("-",!1),ze=v(".",!1),O=$([["0","9"]],!1,!1,!1),ut=$(["e","E"],!1,!1,!1),dt=$(["+","-"],!1,!1,!1),ht=fe("string"),ce=v('"',!1),_e=v("\\",!1),pt=$(['"',"\\"],!0,!1,!1),bt=v("n",!1),mt=v("r",!1),gt=v("t",!1),vt=v("u",!1),re=$([["0","9"],["a","f"],["A","F"]],!1,!1,!1),Q=ur(),Ee=v("//",!1),ne=$([`
`],!0,!1,!1),Se=v("/*",!1),Z=v("*/",!1),G=$([" ","	",`
`,"\r"],!1,!1,!1),yt=fe("whitespace");function At(e,n,a){Je(n)>1&&I("duplicate data block — a chart or scene may define at most one data { } block");let o=wr(n);return{type:"chart",chartType:e,...a.length?{trailingComments:a}:{},properties:o.properties,data:o.data,colorizes:o.colorizes,highlights:o.highlights,areaFills:o.areaFills,annotations:o.annotations,series:o.series,scenes:o.scenes,transforms:o.transforms}}function Ct(e,n,a){return e.length&&(n.leadingComments=e),a!=null&&(n.trailingComment=a),n}function xt(e,n){return{type:"data",entries:e,...n.length?{trailingComments:n}:{}}}function kt(e,n,a){return e.length&&(n.leadingComments=e),a!=null&&(n.trailingComment=a),n}function Pe(e,n,a){return a}function wt(e,n,a){let o=[n,...a];return{type:"property",key:e.name,...e.quoted&&e.name==="series"?{quotedKey:!0}:{},value:o[0].value,isPercentage:!1,values:o.map(i=>i.value)}}function zt(e,n){return{type:"property",key:e.name,...e.quoted&&e.name==="series"?{quotedKey:!0}:{},value:n.value,isPercentage:n.isPercentage}}function _t(e){return{name:e,quoted:!0}}function Et(e){return{name:e,quoted:!1}}function St(e,n){return{type:"property",key:e,...e==="series"?{quotedKey:!0}:{},value:n.value,isPercentage:n.isPercentage}}function Pt(e){return e.trim()}function Bt(e,n,a){return{type:"colorize",target:e,properties:n,...a.length?{trailingComments:a}:{}}}function Ft(){I('colorize needs a quoted target, e.g. colorize "2021" { ... }')}function $t(e,n,a){return{type:"colorize",target:e,properties:n,fromHighlight:!0,...a.length?{trailingComments:a}:{}}}function Rt(e){return{type:"highlight",target:e,properties:[]}}function qt(){I('highlight needs a quoted target, e.g. highlight "2021" { ... } or highlight "2021"')}function Mt(e,n,a,o){return{type:"area-fill",from:e,to:n,properties:a,...o.length?{trailingComments:o}:{}}}function Tt(){I('area-fill needs two quoted targets, e.g. area-fill "Revenue" "Cost" { ... }')}function jt(){I('area-fill needs two quoted targets, e.g. area-fill "Revenue" "Cost" { ... }')}function Dt(e,n,a){return{type:"annotation",kind:"point",target:e,properties:n,...a.length?{trailingComments:a}:{}}}function It(){I('annotation needs a quoted target, e.g. annotation "2021" { ... }')}function Kt(e,n){return{type:"annotation",kind:"range",properties:e,...n.length?{trailingComments:n}:{}}}function Nt(e,n){return{type:"annotation",kind:"free",properties:e,...n.length?{trailingComments:n}:{}}}function Ut(e,n,a){return{type:"series",name:e,properties:n,...a.length?{trailingComments:a}:{}}}function Ot(){I('series needs a quoted name, e.g. series "Revenue" { ... }')}function Ht(e,n,a){Je(n)>1&&I("duplicate data block — a chart or scene may define at most one data { } block");let o=zr(n);return{type:"scene",name:e??null,...a.length?{trailingComments:a}:{},properties:o.properties,data:o.data,colorizes:o.colorizes,highlights:o.highlights,areaFills:o.areaFills,annotations:o.annotations,series:o.series,transforms:o.transforms}}function Lt(e,n,a){return{type:"transform",transformType:e,properties:n,...a.length?{trailingComments:a}:{}}}function Zt(e,n,a){return e.length&&(n.leadingComments=e),a!=null&&(n.trailingComment=a),n}function Gt(e,n){return n!=null&&(e.trailingComment=n),e}function Jt(e,n){return{type:"property",key:e,value:n.value,isPercentage:n.isPercentage}}function Vt(e){return{value:e,isPercentage:!0}}function Yt(e){return{value:e,isPercentage:!1}}function Qt(e){return{value:e,isPercentage:!1}}function Wt(e){return{value:e,isPercentage:!1}}function Xt(e){return parseFloat(e)}function er(e){return e.join("")}function qr(e){return e}function tr(){return'"'}function rr(){return"\\"}function nr(){return`
`}function ar(){return"\r"}function or(){return"	"}function ir(e){return String.fromCharCode(parseInt(e,16))}function sr(e){I("Unknown escape sequence \\"+e)}function Mr(e){return e}function Tr(e){return e}function lr(e){return e.trim()}function cr(e){return e.trim()}let r=h.peg$currPos|0,p=r,J=[{line:1,column:1}],F=r,ae=h.peg$maxFailExpected||[],l=h.peg$silentFails|0,W;if(h.startRule){if(!(h.startRule in w))throw Error(`Can't start parsing from rule "`+h.startRule+'".');_=w[h.startRule]}function I(e,n){throw n=n===void 0?ue(p,r):n,hr(e,n)}function fr(e=r){let n=s.codePointAt(e);return n===void 0?"":String.fromCodePoint(n)}function v(e,n){return{type:"literal",text:e,ignoreCase:n}}function $(e,n,a,o){return{type:"class",parts:e,inverted:n,ignoreCase:a,unicode:o}}function ur(){return{type:"any"}}function dr(){return{type:"end"}}function fe(e){return{type:"other",description:e}}function Be(e){let n=J[e],a;if(n)return n;if(e>=J.length)a=J.length-1;else for(a=e;!J[--a];);for(n=J[a],n={line:n.line,column:n.column};a<e;)s.charCodeAt(a)===10?(n.line++,n.column=1):n.column++,a++;return J[e]=n,n}function ue(e,n,a){let o=Be(e),i=Be(n);return{source:k,start:{offset:e,line:o.line,column:o.column},end:{offset:n,line:i.line,column:i.column}}}function f(e){r<F||(r>F&&(F=r,ae=[]),ae.push(e))}function hr(e,n){return new pe(e,null,null,n)}function pr(e,n,a){return new pe(pe.buildMessage(e,n),e,n,a)}function Fe(){let e,n,a,o,i,c,u,d;if(e=r,m(),s.substr(r,5)===T?(n=T,r+=5):(n=t,l===0&&f(et)),n!==t)if(a=R(),a!==t)if(o=X(),o!==t)if(m(),s.charCodeAt(r)===123?(i="{",r++):(i=t,l===0&&f(C)),i!==t){for(c=[],u=$e();u!==t;)c.push(u),u=$e();u=z(),s.charCodeAt(r)===125?(d="}",r++):(d=t,l===0&&f(B)),d===t?(r=e,e=t):(m(),p=e,e=At(o,c,u))}else r=e,e=t;else r=e,e=t;else r=e,e=t;else r=e,e=t;return e}function $e(){let e,n,a,o,i;if(e=r,n=z(),a=Re(),a===t&&(a=Te(),a===t&&(a=je(),a===t&&(a=De(),a===t&&(a=Ke(),a===t&&(a=Ne(),a===t&&(a=Ie(),a===t&&(a=Ue(),a===t&&(a=vr(),a===t&&(a=Oe(),a===t&&(a=de())))))))))),a!==t){for(o=[],i=s.charAt(r),K.test(i)?r++:(i=t,l===0&&f(U));i!==t;)o.push(i),i=s.charAt(r),K.test(i)?r++:(i=t,l===0&&f(U));i=Y(),i===t&&(i=null),H(),p=e,e=Ct(n,a,i)}else r=e,e=t;return e}function Re(){let e,n,a,o,i,c;if(e=r,s.substr(r,4)===j?(n=j,r+=4):(n=t,l===0&&f(tt)),n!==t)if(m(),s.charCodeAt(r)===123?(a="{",r++):(a=t,l===0&&f(C)),a!==t){for(o=[],i=qe();i!==t;)o.push(i),i=qe();i=z(),s.charCodeAt(r)===125?(c="}",r++):(c=t,l===0&&f(B)),c===t?(r=e,e=t):(p=e,e=xt(o,i))}else r=e,e=t;else r=e,e=t;return e}function qe(){let e,n,a,o,i;if(e=r,n=z(),a=mr(),a===t&&(a=br()),a!==t){for(o=[],i=s.charAt(r),K.test(i)?r++:(i=t,l===0&&f(U));i!==t;)o.push(i),i=s.charAt(r),K.test(i)?r++:(i=t,l===0&&f(U));i=Y(),i===t&&(i=null),H(),p=e,e=kt(n,a,i)}else r=e,e=t;return e}function br(){let e,n,a,o,i,c,u,d;if(e=r,n=Me(),n!==t)if(m(),s.charCodeAt(r)===61?(a="=",r++):(a=t,l===0&&f(ie)),a!==t)if(m(),o=V(),o!==t){if(i=[],c=r,s.charCodeAt(r)===44?(u=",",r++):(u=t,l===0&&f(ye)),u===t?(r=c,c=t):(m(),d=V(),d===t?(r=c,c=t):(p=c,c=Pe(n,o,d))),c!==t)for(;c!==t;)i.push(c),c=r,s.charCodeAt(r)===44?(u=",",r++):(u=t,l===0&&f(ye)),u===t?(r=c,c=t):(m(),d=V(),d===t?(r=c,c=t):(p=c,c=Pe(n,o,d)));else i=t;i===t?(r=e,e=t):(p=e,e=wt(n,o,i))}else r=e,e=t;else r=e,e=t;else r=e,e=t;return e===t&&(e=r,n=Me(),n===t?(r=e,e=t):(m(),s.charCodeAt(r)===61?(a="=",r++):(a=t,l===0&&f(ie)),a===t?(r=e,e=t):(m(),o=V(),o===t?(r=e,e=t):(p=e,e=zt(n,o))))),e}function Me(){let e,n;return e=r,n=E(),n!==t&&(p=e,n=_t(n)),e=n,e===t&&(e=r,n=X(),n!==t&&(p=e,n=Et(n)),e=n),e}function mr(){let e,n,a,o;return e=r,n=gr(),n===t?(r=e,e=t):(s.charCodeAt(r)===9?(a="	",r++):(a=t,l===0&&f(rt)),a===t?(r=e,e=t):(m(),o=V(),o===t?(r=e,e=t):(p=e,e=St(n,o)))),e}function gr(){let e,n,a,o;if(e=r,n=r,a=[],o=s.charAt(r),ge.test(o)?r++:(o=t,l===0&&f(Ae)),o!==t)for(;o!==t;)a.push(o),o=s.charAt(r),ge.test(o)?r++:(o=t,l===0&&f(Ae));else a=t;return n=a===t?a:s.substring(n,r),n!==t&&(p=e,n=Pt(n)),e=n,e}function Te(){let e,n,a,o,i,c,u,d;if(e=r,s.substr(r,8)===D?(n=D,r+=8):(n=t,l===0&&f(Ce)),n!==t)if(a=R(),a!==t)if(o=E(),o!==t)if(m(),s.charCodeAt(r)===123?(i="{",r++):(i=t,l===0&&f(C)),i!==t){for(c=[],u=x();u!==t;)c.push(u),u=x();u=z(),s.charCodeAt(r)===125?(d="}",r++):(d=t,l===0&&f(B)),d===t?(r=e,e=t):(p=e,e=Bt(o,c,u))}else r=e,e=t;else r=e,e=t;else r=e,e=t;else r=e,e=t;return e===t&&(e=r,s.substr(r,8)===D?(n=D,r+=8):(n=t,l===0&&f(Ce)),n===t?(r=e,e=t):(a=m(),s.charCodeAt(r)===123?(o="{",r++):(o=t,l===0&&f(C)),o===t?(r=e,e=t):(p=e,e=Ft()))),e}function je(){let e,n,a,o,i,c,u,d,A;if(e=r,s.substr(r,9)===S?(n=S,r+=9):(n=t,l===0&&f(se)),n!==t)if(a=R(),a!==t)if(o=E(),o!==t)if(i=m(),s.charCodeAt(r)===123?(c="{",r++):(c=t,l===0&&f(C)),c!==t){for(u=[],d=x();d!==t;)u.push(d),d=x();d=z(),s.charCodeAt(r)===125?(A="}",r++):(A=t,l===0&&f(B)),A===t?(r=e,e=t):(p=e,e=$t(o,u,d))}else r=e,e=t;else r=e,e=t;else r=e,e=t;else r=e,e=t;return e===t&&(e=r,s.substr(r,9)===S?(n=S,r+=9):(n=t,l===0&&f(se)),n===t?(r=e,e=t):(a=R(),a===t?(r=e,e=t):(o=E(),o===t?(r=e,e=t):(i=r,l++,c=r,u=m(),s.charCodeAt(r)===123?(d="{",r++):(d=t,l===0&&f(C)),d===t?(r=c,c=t):(u=[u,d],c=u),l--,c===t?i=void 0:(r=i,i=t),i===t?(r=e,e=t):(p=e,e=Rt(o))))),e===t&&(e=r,s.substr(r,9)===S?(n=S,r+=9):(n=t,l===0&&f(se)),n===t?(r=e,e=t):(a=m(),s.charCodeAt(r)===123?(o="{",r++):(o=t,l===0&&f(C)),o===t?(r=e,e=t):(p=e,e=qt())))),e}function De(){let e,n,a,o,i,c,u,d,A,y;if(e=r,s.substr(r,9)===q?(n=q,r+=9):(n=t,l===0&&f(le)),n!==t)if(a=R(),a!==t)if(o=E(),o!==t)if(i=R(),i!==t)if(c=E(),c!==t)if(m(),s.charCodeAt(r)===123?(u="{",r++):(u=t,l===0&&f(C)),u!==t){for(d=[],A=x();A!==t;)d.push(A),A=x();A=z(),s.charCodeAt(r)===125?(y="}",r++):(y=t,l===0&&f(B)),y===t?(r=e,e=t):(p=e,e=Mt(o,c,d,A))}else r=e,e=t;else r=e,e=t;else r=e,e=t;else r=e,e=t;else r=e,e=t;else r=e,e=t;return e===t&&(e=r,s.substr(r,9)===q?(n=q,r+=9):(n=t,l===0&&f(le)),n===t?(r=e,e=t):(a=R(),a===t?(r=e,e=t):(o=E(),o===t?(r=e,e=t):(i=m(),s.charCodeAt(r)===123?(c="{",r++):(c=t,l===0&&f(C)),c===t?(r=e,e=t):(p=e,e=Tt())))),e===t&&(e=r,s.substr(r,9)===q?(n=q,r+=9):(n=t,l===0&&f(le)),n===t?(r=e,e=t):(a=m(),s.charCodeAt(r)===123?(o="{",r++):(o=t,l===0&&f(C)),o===t?(r=e,e=t):(p=e,e=jt())))),e}function Ie(){let e,n,a,o,i,c,u,d;if(e=r,s.substr(r,10)===g?(n=g,r+=10):(n=t,l===0&&f(xe)),n!==t)if(a=R(),a!==t)if(o=E(),o!==t)if(m(),s.charCodeAt(r)===123?(i="{",r++):(i=t,l===0&&f(C)),i!==t){for(c=[],u=x();u!==t;)c.push(u),u=x();u=z(),s.charCodeAt(r)===125?(d="}",r++):(d=t,l===0&&f(B)),d===t?(r=e,e=t):(p=e,e=Dt(o,c,u))}else r=e,e=t;else r=e,e=t;else r=e,e=t;else r=e,e=t;return e===t&&(e=r,s.substr(r,10)===g?(n=g,r+=10):(n=t,l===0&&f(xe)),n===t?(r=e,e=t):(a=m(),s.charCodeAt(r)===123?(o="{",r++):(o=t,l===0&&f(C)),o===t?(r=e,e=t):(p=e,e=It()))),e}function Ke(){let e,n,a,o,i,c;if(e=r,s.substr(r,5)===b?(n=b,r+=5):(n=t,l===0&&f(nt)),n!==t)if(m(),s.charCodeAt(r)===123?(a="{",r++):(a=t,l===0&&f(C)),a!==t){for(o=[],i=x();i!==t;)o.push(i),i=x();i=z(),s.charCodeAt(r)===125?(c="}",r++):(c=t,l===0&&f(B)),c===t?(r=e,e=t):(p=e,e=Kt(o,i))}else r=e,e=t;else r=e,e=t;return e}function Ne(){let e,n,a,o,i,c;if(e=r,s.substr(r,4)===P?(n=P,r+=4):(n=t,l===0&&f(at)),n!==t)if(m(),s.charCodeAt(r)===123?(a="{",r++):(a=t,l===0&&f(C)),a!==t){for(o=[],i=x();i!==t;)o.push(i),i=x();i=z(),s.charCodeAt(r)===125?(c="}",r++):(c=t,l===0&&f(B)),c===t?(r=e,e=t):(p=e,e=Nt(o,i))}else r=e,e=t;else r=e,e=t;return e}function Ue(){let e,n,a,o,i,c,u,d;if(e=r,s.substr(r,6)===M?(n=M,r+=6):(n=t,l===0&&f(ke)),n!==t)if(a=R(),a!==t)if(o=E(),o!==t)if(m(),s.charCodeAt(r)===123?(i="{",r++):(i=t,l===0&&f(C)),i!==t){for(c=[],u=x();u!==t;)c.push(u),u=x();u=z(),s.charCodeAt(r)===125?(d="}",r++):(d=t,l===0&&f(B)),d===t?(r=e,e=t):(p=e,e=Ut(o,c,u))}else r=e,e=t;else r=e,e=t;else r=e,e=t;else r=e,e=t;return e===t&&(e=r,s.substr(r,6)===M?(n=M,r+=6):(n=t,l===0&&f(ke)),n===t?(r=e,e=t):(a=m(),s.charCodeAt(r)===123?(o="{",r++):(o=t,l===0&&f(C)),o===t?(r=e,e=t):(p=e,e=Ot()))),e}function vr(){let e,n,a,o,i,c,u,d;if(e=r,s.substr(r,5)===be?(n=be,r+=5):(n=t,l===0&&f(ot)),n!==t)if(a=R(),a!==t)if(o=E(),o===t&&(o=null),m(),s.charCodeAt(r)===123?(i="{",r++):(i=t,l===0&&f(C)),i!==t){for(c=[],u=He();u!==t;)c.push(u),u=He();u=z(),s.charCodeAt(r)===125?(d="}",r++):(d=t,l===0&&f(B)),d===t?(r=e,e=t):(p=e,e=Ht(o,c,u))}else r=e,e=t;else r=e,e=t;else r=e,e=t;return e}function Oe(){let e,n,a,o,i,c,u,d;if(e=r,s.substr(r,9)===me?(n=me,r+=9):(n=t,l===0&&f(it)),n!==t)if(a=R(),a!==t)if(o=X(),o!==t)if(m(),s.charCodeAt(r)===123?(i="{",r++):(i=t,l===0&&f(C)),i!==t){for(c=[],u=x();u!==t;)c.push(u),u=x();u=z(),s.charCodeAt(r)===125?(d="}",r++):(d=t,l===0&&f(B)),d===t?(r=e,e=t):(p=e,e=Lt(o,c,u))}else r=e,e=t;else r=e,e=t;else r=e,e=t;else r=e,e=t;return e}function He(){let e,n,a,o,i;if(e=r,n=z(),a=Re(),a===t&&(a=Te(),a===t&&(a=je(),a===t&&(a=De(),a===t&&(a=Ke(),a===t&&(a=Ne(),a===t&&(a=Ie(),a===t&&(a=Ue(),a===t&&(a=Oe(),a===t&&(a=de()))))))))),a!==t){for(o=[],i=s.charAt(r),K.test(i)?r++:(i=t,l===0&&f(U));i!==t;)o.push(i),i=s.charAt(r),K.test(i)?r++:(i=t,l===0&&f(U));i=Y(),i===t&&(i=null),H(),p=e,e=Zt(n,a,i)}else r=e,e=t;return e}function x(){let e,n,a,o;if(e=r,m(),n=de(),n!==t){for(a=[],o=s.charAt(r),K.test(o)?r++:(o=t,l===0&&f(U));o!==t;)a.push(o),o=s.charAt(r),K.test(o)?r++:(o=t,l===0&&f(U));o=Y(),o===t&&(o=null),H(),p=e,e=Gt(n,o)}else r=e,e=t;return e}function de(){let e,n,a,o;return e=r,n=yr(),n===t?(r=e,e=t):(m(),s.charCodeAt(r)===61?(a="=",r++):(a=t,l===0&&f(ie)),a===t?(r=e,e=t):(m(),o=V(),o===t?(r=e,e=t):(p=e,e=Jt(n,o)))),e}function yr(){let e;return e=E(),e===t&&(e=X()),e}function V(){let e,n,a;return e=r,n=Le(),n===t?(r=e,e=t):(s.charCodeAt(r)===37?(a="%",r++):(a=t,l===0&&f(st)),a===t?(r=e,e=t):(p=e,e=Vt(n))),e===t&&(e=r,n=Le(),n!==t&&(p=e,n=Yt(n)),e=n,e===t&&(e=r,n=E(),n!==t&&(p=e,n=Qt(n)),e=n,e===t&&(e=r,n=X(),n!==t&&(p=e,n=Wt(n)),e=n))),e}function X(){let e,n,a,o,i;if(l++,e=r,n=r,a=s.charAt(r),Ye.test(a)?r++:(a=t,l===0&&f(ct)),a!==t){for(o=[],i=s.charAt(r),ve.test(i)?r++:(i=t,l===0&&f(we));i!==t;)o.push(i),i=s.charAt(r),ve.test(i)?r++:(i=t,l===0&&f(we));a=[a,o],n=a}else r=n,n=t;return e=n===t?n:s.substring(e,r),l--,e===t&&(n=t,l===0&&f(lt)),e}function Le(){let e,n,a,o,i,c,u,d,A,y;if(e=r,n=r,a=r,s.charCodeAt(r)===45?(o="-",r++):(o=t,l===0&&f(ft)),o===t&&(o=null),i=r,s.charCodeAt(r)===46?(c=".",r++):(c=t,l===0&&f(ze)),c!==t){if(u=[],d=s.charAt(r),N.test(d)?r++:(d=t,l===0&&f(O)),d!==t)for(;d!==t;)u.push(d),d=s.charAt(r),N.test(d)?r++:(d=t,l===0&&f(O));else u=t;u===t?(r=i,i=t):(c=[c,u],i=c)}else r=i,i=t;if(i===t){if(i=r,c=[],u=s.charAt(r),N.test(u)?r++:(u=t,l===0&&f(O)),u!==t)for(;u!==t;)c.push(u),u=s.charAt(r),N.test(u)?r++:(u=t,l===0&&f(O));else c=t;if(c!==t){if(u=r,s.charCodeAt(r)===46?(d=".",r++):(d=t,l===0&&f(ze)),d!==t){for(A=[],y=s.charAt(r),N.test(y)?r++:(y=t,l===0&&f(O));y!==t;)A.push(y),y=s.charAt(r),N.test(y)?r++:(y=t,l===0&&f(O));d=[d,A],u=d}else r=u,u=t;u===t&&(u=null),c=[c,u],i=c}else r=i,i=t}if(i!==t){if(c=r,u=s.charAt(r),Qe.test(u)?r++:(u=t,l===0&&f(ut)),u!==t){if(d=s.charAt(r),We.test(d)?r++:(d=t,l===0&&f(dt)),d===t&&(d=null),A=[],y=s.charAt(r),N.test(y)?r++:(y=t,l===0&&f(O)),y!==t)for(;y!==t;)A.push(y),y=s.charAt(r),N.test(y)?r++:(y=t,l===0&&f(O));else A=t;A===t?(r=c,c=t):(u=[u,d,A],c=u)}else r=c,c=t;c===t&&(c=null),o=[o,i,c],a=o}else r=a,a=t;return n=a===t?a:s.substring(n,r),n!==t&&(p=e,n=Xt(n)),e=n,e}function E(){let e,n,a,o;if(l++,e=r,s.charCodeAt(r)===34?(n='"',r++):(n=t,l===0&&f(ce)),n!==t){for(a=[],o=Ze();o!==t;)a.push(o),o=Ze();s.charCodeAt(r)===34?(o='"',r++):(o=t,l===0&&f(ce)),o===t?(r=e,e=t):(p=e,e=er(a))}else r=e,e=t;return l--,e===t&&(n=t,l===0&&f(ht)),e}function Ze(){let e,n,a;return e=r,s.charCodeAt(r)===92?(n="\\",r++):(n=t,l===0&&f(_e)),n===t?(r=e,e=t):(a=Ar(),a===t?(r=e,e=t):(p=e,e=a)),e===t&&(e=s.charAt(r),Xe.test(e)?r++:(e=t,l===0&&f(pt))),e}function Ar(){let e,n,a,o,i,c,u,d;return e=r,s.charCodeAt(r)===34?(n='"',r++):(n=t,l===0&&f(ce)),n!==t&&(p=e,n=tr()),e=n,e===t&&(e=r,s.charCodeAt(r)===92?(n="\\",r++):(n=t,l===0&&f(_e)),n!==t&&(p=e,n=rr()),e=n,e===t&&(e=r,s.charCodeAt(r)===110?(n="n",r++):(n=t,l===0&&f(bt)),n!==t&&(p=e,n=nr()),e=n,e===t&&(e=r,s.charCodeAt(r)===114?(n="r",r++):(n=t,l===0&&f(mt)),n!==t&&(p=e,n=ar()),e=n,e===t&&(e=r,s.charCodeAt(r)===116?(n="t",r++):(n=t,l===0&&f(gt)),n!==t&&(p=e,n=or()),e=n,e===t&&(e=r,s.charCodeAt(r)===117?(n="u",r++):(n=t,l===0&&f(vt)),n===t?(r=e,e=t):(a=r,o=r,i=s.charAt(r),ee.test(i)?r++:(i=t,l===0&&f(re)),i===t?(r=o,o=t):(c=s.charAt(r),ee.test(c)?r++:(c=t,l===0&&f(re)),c===t?(r=o,o=t):(u=s.charAt(r),ee.test(u)?r++:(u=t,l===0&&f(re)),u===t?(r=o,o=t):(d=s.charAt(r),ee.test(d)?r++:(d=t,l===0&&f(re)),d===t?(r=o,o=t):(i=[i,c,u,d],o=i)))),a=o===t?o:s.substring(a,r),a===t?(r=e,e=t):(p=e,e=ir(a))),e===t&&(e=r,s.length>r?(n=s.charAt(r),r++):(n=t,l===0&&f(Q)),n!==t&&(p=e,n=sr(n)),e=n)))))),e}function oe(){let e;return e=Cr(),e===t&&(e=xr()),e}function Cr(){let e,n,a,o;if(e=r,s.substr(r,2)==="//"?(n="//",r+=2):(n=t,l===0&&f(Ee)),n!==t){for(a=[],o=s.charAt(r),te.test(o)?r++:(o=t,l===0&&f(ne));o!==t;)a.push(o),o=s.charAt(r),te.test(o)?r++:(o=t,l===0&&f(ne));n=[n,a],e=n}else r=e,e=t;return e}function xr(){let e,n,a,o,i,c;if(e=r,s.substr(r,2)==="/*"?(n="/*",r+=2):(n=t,l===0&&f(Se)),n!==t){for(a=[],o=r,i=r,l++,s.substr(r,2)==="*/"?(c="*/",r+=2):(c=t,l===0&&f(Z)),l--,c===t?i=void 0:(r=i,i=t),i===t?(r=o,o=t):(s.length>r?(c=s.charAt(r),r++):(c=t,l===0&&f(Q)),c===t?(r=o,o=t):(i=[i,c],o=i));o!==t;)a.push(o),o=r,i=r,l++,s.substr(r,2)==="*/"?(c="*/",r+=2):(c=t,l===0&&f(Z)),l--,c===t?i=void 0:(r=i,i=t),i===t?(r=o,o=t):(s.length>r?(c=s.charAt(r),r++):(c=t,l===0&&f(Q)),c===t?(r=o,o=t):(i=[i,c],o=i));s.substr(r,2)==="*/"?(o="*/",r+=2):(o=t,l===0&&f(Z)),o===t?(r=e,e=t):(n=[n,a,o],e=n)}else r=e,e=t;return e}function H(){let e,n;for(l++,e=[],n=s.charAt(r),L.test(n)?r++:(n=t,l===0&&f(G));n!==t;)e.push(n),n=s.charAt(r),L.test(n)?r++:(n=t,l===0&&f(G));return l--,e}function z(){let e,n,a,o;for(e=r,n=[],a=r,H(),o=Y(),o===t?(r=a,a=t):(p=a,a=o);a!==t;)n.push(a),a=r,H(),o=Y(),o===t?(r=a,a=t):(p=a,a=o);return a=H(),p=e,e=n,e}function Y(){let e,n,a,o,i,c,u;if(e=r,s.substr(r,2)==="//"?(n="//",r+=2):(n=t,l===0&&f(Ee)),n!==t){for(a=r,o=[],i=s.charAt(r),te.test(i)?r++:(i=t,l===0&&f(ne));i!==t;)o.push(i),i=s.charAt(r),te.test(i)?r++:(i=t,l===0&&f(ne));a=s.substring(a,r),p=e,e=lr(a)}else r=e,e=t;if(e===t)if(e=r,s.substr(r,2)==="/*"?(n="/*",r+=2):(n=t,l===0&&f(Se)),n!==t){for(a=r,o=[],i=r,c=r,l++,s.substr(r,2)==="*/"?(u="*/",r+=2):(u=t,l===0&&f(Z)),l--,u===t?c=void 0:(r=c,c=t),c===t?(r=i,i=t):(s.length>r?(u=s.charAt(r),r++):(u=t,l===0&&f(Q)),u===t?(r=i,i=t):(c=[c,u],i=c));i!==t;)o.push(i),i=r,c=r,l++,s.substr(r,2)==="*/"?(u="*/",r+=2):(u=t,l===0&&f(Z)),l--,u===t?c=void 0:(r=c,c=t),c===t?(r=i,i=t):(s.length>r?(u=s.charAt(r),r++):(u=t,l===0&&f(Q)),u===t?(r=i,i=t):(c=[c,u],i=c));a=s.substring(a,r),s.substr(r,2)==="*/"?(o="*/",r+=2):(o=t,l===0&&f(Z)),o===t?(r=e,e=t):(p=e,e=cr(a))}else r=e,e=t;return e}function R(){let e,n;if(l++,e=[],n=s.charAt(r),L.test(n)?r++:(n=t,l===0&&f(G)),n===t&&(n=oe()),n!==t)for(;n!==t;)e.push(n),n=s.charAt(r),L.test(n)?r++:(n=t,l===0&&f(G)),n===t&&(n=oe());else e=t;return l--,e===t&&(n=t,l===0&&f(yt)),e}function m(){let e,n;for(l++,e=[],n=s.charAt(r),L.test(n)?r++:(n=t,l===0&&f(G)),n===t&&(n=oe());n!==t;)e.push(n),n=s.charAt(r),L.test(n)?r++:(n=t,l===0&&f(G)),n===t&&(n=oe());return l--,e}W=_();let he=W!==t&&r===s.length;function Ge(){throw W!==t&&r<s.length&&f(dr()),pr(ae,F<s.length?fr(F):null,F<s.length?ue(F,F+1):ue(F,F))}if(h.peg$library)return{peg$result:W,peg$currPos:r,peg$FAILED:t,peg$maxFailExpected:ae,peg$maxFailPos:F,peg$success:he,peg$throw:he?void 0:Ge};if(he)return W;Ge()}function Er(s){try{return _r(s)}catch(h){if(h instanceof Error&&"location"in h){let t=h.location,k=SyntaxError(`${h.message} at ${t.start.line}:${t.start.column}`);throw k.location=t,k}throw h}}var Sr=`
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
`,Pr="blueprint-chart-resize",Ve="blueprint-chart-error";function Ir(s){return typeof s=="object"&&s&&s.type==="blueprint-chart-resize"&&typeof s.height=="number"?s.height:null}function Kr(s){return typeof s=="object"&&!!s&&s.type==="blueprint-chart-error"}Br();function Br(){var s;try{if(typeof globalThis<"u"){let h=globalThis.BLUEPRINT_CHART_RUNTIME_URL;if(typeof h=="string"&&h)return h}return typeof document>"u"?"":((s=document.currentScript)==null?void 0:s.src)??""}catch{return""}}function Fr(s){try{return Er(s).scenes.length}catch{return 0}}function Nr(s,h,t){let k=h?`<script src="${Rr(h)}"><\/script>`:"",w=t==="dark"?'<html data-bs-theme="dark">':"<html>",_=h?["try {",'  var chart = document.getElementById("chart");',"  window.BlueprintChart.renderBpc(chart, __BPC_SRC__);","  if (__BPC_SCENES__) {",'    window.BlueprintChart.createSceneController(document.body, new Array(__BPC_SCENES__ + 1).fill({ name: "" }), function (_scene, i) {',"      window.BlueprintChart.renderBpc(chart, __BPC_SRC__, { sceneIndex: i ? i - 1 : undefined, transition: true });","    });","  }","}","catch (e) {",`  parent.postMessage({ type: "${Ve}", message: String(e) }, "*");`,"}"]:[`parent.postMessage({ type: "${Ve}", message: "Blueprint Chart runtime URL unavailable" }, "*");`];return["<!DOCTYPE html>",`${w}<head>`,`<style>${Sr}</style>`,"</head><body>",'<div id="chart" class="blueprint-chart-container"></div>',k,"<script>",`var __BPC_SRC__ = ${$r(s)};`,`var __BPC_SCENES__ = ${Fr(s)};`,"function notifySize() {","  var h = document.documentElement.scrollHeight;",`  parent.postMessage({ type: "${Pr}", height: h }, "*");`,"}",..._,"notifySize();","new ResizeObserver(notifySize).observe(document.body);","<\/script>","</body></html>"].filter(Boolean).join(`
`)}function $r(s){return JSON.stringify(s).replace(/</g,"\\u003c").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function Rr(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}export{Er as c,Ir as f,Dr as n,Kr as p,Nr as r,jr as t,Pr as u};
