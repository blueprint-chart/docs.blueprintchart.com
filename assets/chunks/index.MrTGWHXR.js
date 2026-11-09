import{c3 as Lt}from"./framework.DIuqJViG.js";import{n as f,Y as L,T as B,O as le,F as ye,R as ce,a as tt,L as nt,b as at,P as rt,N as it,p as q,m as re,c as ie,d as I,C as xe,o as te,e as Ot,z as Ft,t as It,A as Rt,E as be,g as S,h as O,w as De,i as Ut,j as Bt,M as Gt,k as jt,s as Le,l as qt,q as Wt,r as Vt,x as Ht,u as _t,v as H,_ as Jt,y as ve,B as ne,D as j,G as Kt,K as Yt,H as Zt,I as Qt,J as Xt,S as en,U as tn,V as nn,W as an,X as rn,$ as on,a0 as sn,a1 as ln}from"./runtime-DR9eMNvt.DcThXbnm.js";import{a2 as di,a3 as hi,a4 as mi,a5 as gi,a6 as fi,a7 as yi,a8 as bi,a9 as vi,aa as wi,ab as Si,ac as $i,ad as ki,ae as Ti,af as Ai,ag as xi,ah as Ci,ai as Ni,aj as Ei,ak as Pi,al as Mi,am as zi,an as Di,ao as Li,ap as Oi,aq as Fi,ar as Ii,as as Ri,at as Ui,au as Bi,av as Gi,f as ji,aw as qi,ax as Wi,ay as Vi,az as Hi,aA as _i,aB as Ji,aC as Ki,aD as Yi,aE as Zi,aF as Qi,aG as Xi,aH as eo,aI as to,aJ as no,aK as ao,aL as ro,aM as io,aN as oo,aO as so,aP as lo,aQ as co,aR as uo,aS as po}from"./runtime-DR9eMNvt.DcThXbnm.js";function ue(e){return e.replace(/(\d)\s+(?=\d)/g,"$1")}function cn(e){return ue(e.replace(/^"(.*)"$/,"$1")).replace(/%$/,"").trim()}function we(e){let t=cn((e==null?void 0:e.trim())??"");if(!t)return;let a=Number(t);return Number.isFinite(a)?a:void 0}var Ce='"((?:[^"\\\\]|\\\\.)*)"',un=RegExp(`^${Ce}\\s*=\\s*(.+)$`),pn=RegExp(`^${Ce}\\s*=\\s*"([^"]*)"$`),dn=RegExp(`^${Ce}\\s*=\\s*(.+)$`);function Oe(e){let t=new Set;return e.map(a=>{let n=a;for(let r=2;t.has(n);r++)n=`${a} (${r})`;return t.add(n),n})}function hn(e,t){return e.flatMap((a,n)=>{let r=t.map(o=>{var s;return((s=o.cells[n])==null?void 0:s.trim())??""}),i=r.filter(o=>I(o)!=="");return i.length>0&&i.every(o=>we(o)===void 0)?[{name:a,values:r.map(o=>I(o)||void 0)}]:[]})}function J(e){var i;let t=e.split(`
`).map(o=>o.trim()).filter(Boolean),a=[],n=[],r=(i=t[0])==null?void 0:i.match(/^series\s*=\s*(.+)$/);if(r){let o=re(r[1].trim()),s=[];for(let m=1;m<t.length;m++){let g=t[m].match(pn),y=g??t[m].match(un);y&&s.push({cells:re(y[2]),label:ie(y[1]),legacy:g!==null})}let c=o.length>1||!s.some(m=>m.legacy)?o.map(I):I(o[0]).split(",").map(m=>m.trim()),l=c.map(()=>[]);for(let m of s){a.push(m.label);for(let g=0;g<c.length;g++)l[g].push(we(m.cells[g]))}let u=c.map((m,g)=>({name:m,values:l[g]})),h=hn(c,s);return{labels:Oe(a),values:l[0]??[],series:u,...h.length&&{textColumns:h}}}for(let o of t){let s=o.match(dn);s&&(a.push(ie(s[1])),n.push(we(s[2])))}return{labels:Oe(a),values:n}}function oe(e){let t=(e??"").trim();return t&&_t(t)!==void 0?t:void 0}function ot(e){let t=(e??"").split(/[\s,]+/).filter(Boolean).map(Number).filter(Number.isFinite);return t.length?t:void 0}function mn(e){let t=ot(e.verticalTickValues);if(!(e.showVerticalTicks!==void 0||e.verticalGridStyle!==void 0||e.verticalNumberFormat!==void 0||e.showVerticalAxis!==void 0||e.verticalAxisDirection!==void 0||e.verticalScaleType!==void 0||e.verticalLabelPosition!==void 0||e.verticalRangeMin||t||e.verticalRangeMax))return{};let a={};e.showVerticalTicks!==void 0&&(a.showTicks=e.showVerticalTicks),e.verticalAxisDirection!==void 0&&(a.direction=e.verticalAxisDirection),e.verticalGridStyle!==void 0&&(a.gridStyle=e.verticalGridStyle),e.verticalNumberFormat!==void 0&&(a.numberFormat=e.verticalNumberFormat),e.showVerticalAxis!==void 0&&(a.showAxis=e.showVerticalAxis),e.verticalScaleType!==void 0&&(a.scaleType=e.verticalScaleType),e.verticalLabelPosition!==void 0&&(a.labelPosition=e.verticalLabelPosition);let n=oe(e.verticalRangeMin),r=oe(e.verticalRangeMax);return(n!==void 0||r!==void 0)&&(a.range={},n!==void 0&&(a.range.min=n),r!==void 0&&(a.range.max=r)),t&&(a.ticks=t),{verticalAxis:a}}function gn(e){let t=ot(e.horizontalTickValues);if(!(e.showHorizontalTicks!==void 0||e.horizontalGridStyle!==void 0||e.horizontalNumberFormat!==void 0||e.showHorizontalAxis!==void 0||e.horizontalScaleType!==void 0||e.horizontalLabelPosition!==void 0||e.horizontalLabelRotation!==void 0||e.horizontalRangeMin||t||e.horizontalRangeMax))return{};let a={};e.showHorizontalTicks!==void 0&&(a.showTicks=e.showHorizontalTicks),e.horizontalGridStyle!==void 0&&(a.gridStyle=e.horizontalGridStyle),e.horizontalNumberFormat!==void 0&&(a.numberFormat=e.horizontalNumberFormat),e.showHorizontalAxis!==void 0&&(a.showAxis=e.showHorizontalAxis),e.horizontalScaleType!==void 0&&(a.scaleType=e.horizontalScaleType),e.horizontalLabelPosition!==void 0&&(a.labelPosition=e.horizontalLabelPosition),e.horizontalLabelRotation!==void 0&&(a.labelRotation=e.horizontalLabelRotation);let n=oe(e.horizontalRangeMin),r=oe(e.horizontalRangeMax);return(n!==void 0||r!==void 0)&&(a.range={},n!==void 0&&(a.range.min=n),r!==void 0&&(a.range.max=r)),t&&(a.ticks=t),{horizontalAxis:a}}var fn=new Set("colors.colorPalette.autoContrast.crosshairDirection.crosshairStyle.crosshairColor.lineSymbols.lineSymbolShape.lineSymbolShowOn.lineSymbolStyle.lineSymbolSize.lineSymbolOpacity.showVerticalTicks.showVerticalAxis.verticalAxisDirection.verticalGridStyle.verticalNumberFormat.verticalScaleType.verticalLabelPosition.verticalRangeMin.verticalRangeMax.verticalTickValues.showHorizontalTicks.showHorizontalAxis.horizontalGridStyle.horizontalNumberFormat.horizontalScaleType.horizontalLabelPosition.horizontalLabelRotation.horizontalRangeMin.horizontalRangeMax.horizontalTickValues.sliceMax.barGap.valueLabelEvery.connectionsOpacity.areaFillOpacity".split("."));function yn(e,t){if(!t)return{};let a={};for(let{key:n}of q(t)){let r=e[n];r!==void 0&&!fn.has(n)&&(a[n]=r)}return a}function bn(e,t){let a={},n=jt(e.colorPalette);return n?a.colors=n:e.colors&&e.colors.length>0&&(a.colors=e.colors),e.autoContrast&&t&&a.colors&&(a.colors=Le(a.colors,t)),e.autoContrast&&t&&e.negativeColor&&(a.negativeColor=Le([e.negativeColor],t)[0]),e.allowDarkMode!==void 0&&(a.allowDarkMode=e.allowDarkMode),a}function vn(e){let t={};return e.legend!==void 0&&(t.legend=e.legend),e.legendPosition!==void 0&&(t.legendPosition=e.legendPosition),e.legendAnchor!==void 0&&(t.legendAnchor=e.legendAnchor),e.directLabelling!==void 0&&(t.directLabelling=e.directLabelling),e.directLabelAnchor!==void 0&&(t.directLabelAnchor=e.directLabelAnchor),t}function wn(e){return e.lineSymbols?{lineSymbols:{symbol:e.lineSymbolShape??Gt.Circle,showOn:e.lineSymbolShowOn??Bt.FirstLast,style:e.lineSymbolStyle??Ut.Filled,size:parseFloat(e.lineSymbolSize??"3.5")||3.5,opacity:parseFloat(e.lineSymbolOpacity??"1")||1}}:{}}function Sn(e,t,a){let n={...yn(e,a),...bn(e,t),...vn(e),...mn(e),...gn(e),...wn(e)};e.interpolation!==void 0&&(n.interpolation=e.interpolation),e.valueLabels!==void 0&&(n.valueLabels=e.valueLabels),e.valueLabelPosition!==void 0&&(n.valueLabelPosition=e.valueLabelPosition),e.tooltips!==void 0&&(n.tooltips=e.tooltips),e.crosshair!==void 0&&(n.crosshair=e.crosshair),e.crosshairDirection&&(n.crosshairDirection=e.crosshairDirection),e.crosshairStyle&&(n.crosshairStyle=e.crosshairStyle),e.crosshairColor&&(n.crosshairColor=e.crosshairColor),e.displayAsPercentage!==void 0&&(n.displayAsPercentage=e.displayAsPercentage),e.showTotal!==void 0&&(n.showTotal=e.showTotal),e.centerLabel&&(n.centerLabel=e.centerLabel),e.centerSlice!==void 0&&(n.centerSlice=e.centerSlice),e.centerText!==void 0&&(n.centerText=e.centerText),e.totalLabel!==void 0&&(n.totalLabel=e.totalLabel),e.showLabels!==void 0&&(n.showLabels=e.showLabels),e.showValues!==void 0&&(n.showValues=e.showValues),e.swapLabelValue!==void 0&&(n.swapLabelValue=e.swapLabelValue);let r=parseInt(e.valueLabelEvery??"",10);r>0&&(n.valueLabelEvery=r);let i=parseInt(e.sliceMax??"",10);!isNaN(i)&&i>0&&(n.sliceMax=i),e.sliceGroupLabel!==void 0&&(n.sliceGroupLabel=e.sliceGroupLabel),e.barBackground!==void 0&&(n.barBackground=e.barBackground),e.barSeparators!==void 0&&(n.barSeparators=e.barSeparators);let o=parseFloat(e.barGap??"");isNaN(o)||(n.barGap=Math.max(0,Math.min(100,o))),e.connectedColumns!==void 0&&(n.connectedColumns=e.connectedColumns);let s=parseFloat(e.connectionsOpacity??"");isNaN(s)||(n.connectionsOpacity=Math.max(0,Math.min(1,s))),e.stackMode!==void 0&&(n.stackMode=e.stackMode),e.stacked!==void 0&&(n.stacked=e.stacked),e.stackPercent!==void 0&&(n.stackPercent=e.stackPercent),e.areaSortMode!==void 0&&(n.areaSortMode=e.areaSortMode),e.areaLines!==void 0&&(n.areaLines=e.areaLines);let c=parseFloat(e.areaFillOpacity??"");return isNaN(c)||(n.areaFillOpacity=c),e.edgePadding!==void 0&&(n.edgePadding=e.edgePadding),e.connectGaps!==void 0&&(n.connectGaps=e.connectGaps),e.waterfall!==void 0&&(n.waterfall=e.waterfall),e.waterfallTotal!==void 0&&(n.waterfallTotal=e.waterfallTotal),e.categoryLabelLine!==void 0&&(n.categoryLabelLine=e.categoryLabelLine),n}var he=Object.create(null);function st(e){if(!he[e]){let t={};for(let a of q(e))a.default!==void 0&&(t[a.key]=a.default);he[e]=t}return{...he[e]}}function Fe(e,t){var n;let a=st(e);return(n=t.colors)!=null&&n.length?{...a,colorPalette:void 0,...t}:{...a,...t}}function $n(e,t,a){if(!a&&t!==O.Equals&&t!==O.NotEquals)return!0;switch(t){case O.Equals:return e===a;case O.NotEquals:return e!==a;case O.Contains:return e.toLowerCase().includes(a.toLowerCase());case O.GreaterThan:{let n=Number(e.replace(/[,%$€£¥₹]/g,"").trim()),r=Number(a);return!Number.isNaN(n)&&!Number.isNaN(r)&&n>r}case O.LessThan:{let n=Number(e.replace(/[,%$€£¥₹]/g,"").trim()),r=Number(a);return!Number.isNaN(n)&&!Number.isNaN(r)&&n<r}default:return!0}}function kn(e,t){let a=e.columns.indexOf(t.column);if(a<0||!t.column)return e;let n=e.rows.filter(r=>$n(r[a]??"",t.condition??O.Equals,t.value??""));return{...e,rows:n}}function _(e){return Number(ue(e).replace(/[,%$€£¥₹]/g,"").trim())||0}function Tn(e,t,a){return a==="number"?_(e)-_(t):a==="date"?(Date.parse(e)||0)-(Date.parse(t)||0):e.localeCompare(t)}function Ne(e){return e.columns?e.columns.split(",").map(t=>t.trim()).filter(Boolean):e.column?[e.column]:[]}var lt={sum:e=>e.reduce((t,a)=>t+a,0),avg:e=>e.reduce((t,a)=>t+a,0)/e.length,min:e=>Math.min(...e),max:e=>Math.max(...e)};function An(e,t){return e.split(",").map(a=>a.trim()).filter(Boolean).map(a=>{let n=a.lastIndexOf(":");if(n<0)return null;let r=a.slice(0,n),i=a.slice(n+1);if(i!=="count"&&!lt[i])return null;let o=i==="count"?-1:t.indexOf(r);return i!=="count"&&o<0?null:{col:r,fn:i,colIndex:o}}).filter(a=>a!==null)}function xn(e,t,a){if(e==="count")return String(t.length);let n=t.map(r=>_(r[a]??""));return String(lt[e](n))}function Cn(e,t){let a=Ne({columns:t.groupColumns}).map(i=>e.columns.indexOf(i)).filter(i=>i>=0);if(a.length===0||!t.aggregates)return e;let n=An(t.aggregates,e.columns);if(n.length===0)return e;let r=new Map;for(let i of e.rows){let o=a.map(l=>i[l]??""),s=o.join("\0"),c=r.get(s);c?c.rows.push(i):r.set(s,{key:o,rows:[i]})}return{columns:[...a.map(i=>e.columns[i]),...n.map(i=>`${i.col}_${i.fn}`)],columnTypes:[...a.map(i=>e.columnTypes[i]),...n.map(()=>"number")],rows:[...r.values()].map(({key:i,rows:o})=>[...i,...n.map(s=>xn(s.fn,o,s.colIndex))])}}function Nn(e,t){let a=Ne(t);if(a.length===0)return e;let n=e.columns.map((r,i)=>a.includes(r)?-1:i).filter(r=>r>=0);return n.length===e.columns.length?e:{columns:n.map(r=>e.columns[r]),rows:e.rows.map(r=>n.map(i=>r[i])),columnTypes:n.map(r=>e.columnTypes[r])}}var A=["string","number","date"],En=[{id:"to-number",label:"To Number",description:"Strip non-numeric characters and convert to number",category:f.Type,accepts:A,outputType:"number"},{id:"to-string",label:"To String",description:"Keep value as plain text",category:f.Type,accepts:A,outputType:"string"},{id:"to-date",label:"To Date",description:"Parse text into an ISO date",category:f.Type,accepts:A,outputType:"date"},{id:"to-boolean",label:"To Boolean",description:"Map yes/no, true/false, 1/0 to boolean",category:f.Type,accepts:A,outputType:"string"},{id:"parse-json",label:"Parse JSON",description:"Parse JSON string and optionally extract a key",category:f.Type,accepts:["string"],outputType:"string",params:["key"]},{id:"trim",label:"Trim",description:"Remove leading and trailing whitespace",category:f.String,accepts:A,outputType:"string"},{id:"lowercase",label:"Lowercase",description:"Convert all characters to lowercase",category:f.String,accepts:A,outputType:"string"},{id:"uppercase",label:"Uppercase",description:"Convert all characters to uppercase",category:f.String,accepts:A,outputType:"string"},{id:"title-case",label:"Title Case",description:"Capitalize the first letter of each word",category:f.String,accepts:A,outputType:"string"},{id:"slugify",label:"Slugify",description:"Lowercase and replace non-alphanumeric with hyphens",category:f.String,accepts:A,outputType:"string"},{id:"regex-replace",label:"Regex Replace",description:"Find and replace using a regular expression",category:f.String,accepts:A,outputType:"string",params:["pattern","replacement"]},{id:"extract",label:"Extract Substring",description:"Extract a portion of text by character position",category:f.String,accepts:A,outputType:"string",params:["start","end"]},{id:"pad-start",label:"Pad Start",description:"Pad the beginning to a fixed length",category:f.String,accepts:A,outputType:"string",params:["length","char"]},{id:"pad-end",label:"Pad End",description:"Pad the end to a fixed length",category:f.String,accepts:A,outputType:"string",params:["length","char"]},{id:"remove-diacritics",label:"Remove Diacritics",description:"Strip accents and diacritical marks",category:f.String,accepts:A,outputType:"string"},{id:"split",label:"Split into Columns",description:"Split values by a separator into new columns",category:f.String,accepts:A,outputType:"string",params:["separator","limit"]},{id:"round",label:"Round",description:"Round to a number of decimal places",category:f.Numeric,accepts:["number"],outputType:"number",params:["decimals"]},{id:"floor",label:"Floor",description:"Round down to the nearest integer",category:f.Numeric,accepts:["number"],outputType:"number"},{id:"ceil",label:"Ceiling",description:"Round up to the nearest integer",category:f.Numeric,accepts:["number"],outputType:"number"},{id:"abs",label:"Absolute Value",description:"Remove the sign (make positive)",category:f.Numeric,accepts:["number"],outputType:"number"},{id:"clamp",label:"Clamp",description:"Constrain values between a min and max",category:f.Numeric,accepts:["number"],outputType:"number",params:["min","max"]},{id:"log",label:"Logarithm",description:"Natural log — compress wide-range values for charting",category:f.Numeric,accepts:["number"],outputType:"number"},{id:"exp",label:"Exponential",description:"Raise e to the power of each value",category:f.Numeric,accepts:["number"],outputType:"number"},{id:"normalize",label:"Normalize (0–1)",description:"Scale values to 0–1 range for cross-series comparison",category:f.Numeric,accepts:["number"],outputType:"number"},{id:"standardize",label:"Standardize (z-score)",description:"Center around mean, scale by std deviation",category:f.Numeric,accepts:["number"],outputType:"number"},{id:"bin",label:"Bin/Bucket",description:"Group values into fixed-size buckets",category:f.Numeric,accepts:["number"],outputType:"number",params:["size"]},{id:"extract-year",label:"Extract Year",description:"Get the four-digit year as a number",category:f.Date,accepts:["date"],outputType:"number"},{id:"extract-month",label:"Extract Month",description:"Get the month (1–12) as a number",category:f.Date,accepts:["date"],outputType:"number"},{id:"extract-day",label:"Extract Day",description:"Get the day of the month as a number",category:f.Date,accepts:["date"],outputType:"number"},{id:"extract-weekday",label:"Extract Weekday",description:"Get the day name (Monday, Tuesday, …)",category:f.Date,accepts:["date"],outputType:"string"},{id:"extract-hour",label:"Extract Hour",description:"Get the hour (0–23) as a number",category:f.Date,accepts:["date"],outputType:"number"},{id:"shift-date",label:"Shift Date",description:"Add or subtract days, months, or years",category:f.Date,accepts:["date"],outputType:"date",params:["amount","unit"]},{id:"truncate-date",label:"Truncate to Period",description:"Round down to start of week, month, quarter, or year",category:f.Date,accepts:["date"],outputType:"date",params:["period"]},{id:"date-diff",label:"Duration Since",description:"Days between each date and a reference date",category:f.Date,accepts:["date"],outputType:"number",params:["reference"]}],ct=new Map(En.map(e=>[e.id,e]));function Pn(e,t){let a=ct.get(e);return a?a.accepts.includes(t):!1}function Mn(e){var t;return((t=ct.get(e))==null?void 0:t.outputType)??"string"}function z(e,t){let a=parseFloat(e);if(Number.isNaN(a))return e;let n=t(a);return Number.isNaN(n)?e:String(n)}function P(e,t){let a=new Date(e);return Number.isNaN(a.getTime())?e:t(a)}function zn(e,t,a){switch(t){case"to-number":{let n=Number(e.replace(/[^0-9.\-+eE]/g,""));return Number.isNaN(n)?"":String(n)}case"to-string":return e;case"to-date":return P(e,n=>n.toISOString());case"to-boolean":{let n=e.toLowerCase().trim();return["true","1","yes","on","y"].includes(n)?"true":["false","0","no","off","n",""].includes(n)?"false":e}case"parse-json":try{let n=JSON.parse(e);return a.key?String(n[a.key]??""):JSON.stringify(n)}catch{return e}default:return e}}function Dn(e,t,a){switch(t){case"trim":return e.trim();case"lowercase":return e.toLowerCase();case"uppercase":return e.toUpperCase();case"title-case":return e.replace(/\w\S*/g,n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase());case"slugify":return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");case"regex-replace":if(!a.pattern)return e;try{return e.replace(new RegExp(a.pattern,"g"),a.replacement??"")}catch{return e}case"extract":return e.slice(Number(a.start)||0,a.end?Number(a.end):void 0);case"pad-start":return e.padStart(Number(a.length)||0,a.char||" ");case"pad-end":return e.padEnd(Number(a.length)||0,a.char||" ");case"remove-diacritics":return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"");default:return e}}function Ln(e,t,a){switch(t){case"round":{let n=10**(Number(a.decimals)||0);return z(e,r=>Math.round(r*n)/n)}case"floor":return z(e,Math.floor);case"ceil":return z(e,Math.ceil);case"abs":return z(e,Math.abs);case"clamp":{let n=a.min?Number(a.min):-1/0,r=a.max?Number(a.max):1/0;return z(e,i=>Math.min(Math.max(i,n),r))}case"log":return z(e,n=>n>0?Math.log(n):NaN);case"exp":return z(e,Math.exp);case"bin":{let n=Number(a.size)||1;return z(e,r=>Math.floor(r/n)*n)}default:return e}}function On(e,t,a){switch(t){case"extract-year":return P(e,n=>String(n.getFullYear()));case"extract-month":return P(e,n=>String(n.getMonth()+1));case"extract-day":return P(e,n=>String(n.getDate()));case"extract-weekday":return P(e,n=>n.toLocaleDateString("en",{weekday:"long"}));case"extract-hour":return P(e,n=>String(n.getHours()));case"shift-date":return P(e,n=>{let r=Number(a.amount)||0,i=a.unit||"days";return i==="years"?n.setFullYear(n.getFullYear()+r):i==="months"?n.setMonth(n.getMonth()+r):n.setDate(n.getDate()+r),n.toISOString()});case"truncate-date":return P(e,n=>{let r=a.period||"month";return r==="year"?new Date(n.getFullYear(),0,1).toISOString():r==="quarter"?new Date(n.getFullYear(),Math.floor(n.getMonth()/3)*3,1).toISOString():r==="month"?new Date(n.getFullYear(),n.getMonth(),1).toISOString():(r==="week"&&(n.setDate(n.getDate()-n.getDay()),n.setHours(0,0,0,0)),n.toISOString())});case"date-diff":{let n=new Date(a.reference||new Date().toISOString());return Number.isNaN(n.getTime())?e:P(e,r=>String(Math.round((r.getTime()-n.getTime())/864e5)))}default:return e}}function Fn(e,t,a){return t.startsWith("to-")||t==="parse-json"?zn(e,t,a):new Set(["round","floor","ceil","abs","clamp","log","exp","bin"]).has(t)?Ln(e,t,a):t.startsWith("extract-")||t.startsWith("shift-")||t.startsWith("truncate-")||t==="date-diff"?On(e,t,a):Dn(e,t,a)}var Qr="";function In(e,t){let a=e.rows.map(n=>{let r=[...n];return r[t]="",r});return{columns:[...e.columns],rows:a,columnTypes:[...e.columnTypes]}}function Rn(e,t,a){let n=a.separator||",",r=a.limit?Number(a.limit):void 0,i=0,o=e.rows.map(u=>{let h=u[t].split(n),m=r?h.slice(0,r):h;return i=Math.max(i,m.length),m}),s=[...e.columns],c=[...e.columnTypes],l=[];for(let u=0;u<i;u++)l.push(`${a.column}_${u+1}`);return s.splice(t,1,...l),c.splice(t,1,...Array(i).fill("string")),{columns:s,rows:e.rows.map((u,h)=>{let m=o[h],g=[...u],y=[...m,...Array(i-m.length).fill("")];return g.splice(t,1,...y),g}),columnTypes:c}}function Un(e,t,a){let n=e.rows.map(o=>parseFloat(o[t])).filter(o=>!Number.isNaN(o));if(n.length===0)return e;let r=e.rows.map(o=>[...o]),i=[...e.columnTypes];if(i[t]="number",a==="normalize"){let o=Math.min(...n),s=Math.max(...n)-o;for(let c of r){let l=parseFloat(c[t]);c[t]=Number.isNaN(l)?c[t]:String(s===0?0:(l-o)/s)}}else{let o=n.reduce((l,u)=>l+u,0)/n.length,s=n.reduce((l,u)=>l+(u-o)**2,0)/n.length,c=Math.sqrt(s);for(let l of r){let u=parseFloat(l[t]);l[t]=Number.isNaN(u)?l[t]:String(c===0?0:(u-o)/c)}}return{columns:[...e.columns],rows:r,columnTypes:i}}function Bn(e,t){let a=e.columns.indexOf(t.column);if(a<0||!t.column||!t.operation)return e;let n=t.operation,r=e.columnTypes[a];if(!Pn(n,r))return In(e,a);if(n==="split")return Rn(e,a,t);if(n==="normalize"||n==="standardize")return Un(e,a,n);let i=e.rows.map(s=>[...s]);for(let s of i)s[a]=Fn(s[a],n,t);let o=[...e.columnTypes];return o[a]=Mn(n),{columns:[...e.columns],rows:i,columnTypes:o}}function Gn(e,t){let a=e.columns.indexOf(t.column);if(a<0||!t.column||!t.newName)return e;let n=[...e.columns];return n[a]=t.newName,{...e,columns:n}}function jn(e,t){let a=Ne(t);if(a.length===0)return e;let n=a.map(s=>e.columns.indexOf(s)).filter(s=>s>=0);if(n.length===0)return e;let r=t.direction===ye.Descending?-1:1,i=t.operation;if(i&&n.length>1){let s=[...e.rows].sort((c,l)=>{let u=n.map(y=>_(c[y]??"")),h=n.map(y=>_(l[y]??"")),m,g;return i==="avg"?(m=u.reduce((y,d)=>y+d,0)/u.length,g=h.reduce((y,d)=>y+d,0)/h.length):(m=u.reduce((y,d)=>y+d,0),g=h.reduce((y,d)=>y+d,0)),r*(m-g)});return{...e,rows:s}}let o=[...e.rows].sort((s,c)=>{for(let l of n){let u=e.columnTypes[l]??"string",h=Tn(s[l]??"",c[l]??"",u);if(h!==0)return r*h}return 0});return{...e,rows:o}}function qn(e){if(e.rows.length===0||e.columns.length===0)return e;let t=["Field",...e.rows.map(r=>r[0]??"")],a=[],n=["string"];for(let r=1;r<e.columns.length;r++){let i=[e.columns[r]];for(let o=0;o<e.rows.length;o++)i.push(e.rows[o][r]??"");a.push(i)}for(let r=0;r<e.rows.length;r++){let i=a.map(o=>o[r+1]??"").filter(o=>o.length>0);i.length>0&&i.every(o=>!Number.isNaN(Number(o.replace(/[,%$€£¥₹]/g,"").trim()))&&o.trim().length>0)?n.push("number"):n.push("string")}return{columns:t,rows:a,columnTypes:n}}var Wn=[/^\d{4}-\d{2}-\d{2}$/,/^\d{4}-\d{2}$/,/^\d{4}$/,/^\d{1,2}\/\d{1,2}\/\d{2,4}$/,/^\d{1,2}-\d{1,2}-\d{2,4}$/,/^(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},?\s+\d{4}$/i,/^\d{4}\/\d{2}\/\d{2}$/,/^\d{4}\/\d{2}$/,/^Q[1-4]\s+\d{4}$/],Ie=/^"((?:[^"\\]|\\.)*)"\s*=\s*(.+)$/,Vn=/^"((?:[^"\\]|\\.)*)"\s*=\s*"([^"]*)"$/;function Hn(e){if(!e)return!1;for(let t of Wn)if(t.test(e))return/^\d{4}(-\d{2})?$/.test(e)||/^\d{4}\/\d{2}$/.test(e)||/^Q[1-4]\s+\d{4}$/.test(e)?!0:!Number.isNaN(Date.parse(e));return!1}function _n(e){let t=e.match(/^[<>≤≥~]\s*(.+)$/);if(t){let a=ue(t[1]).replace(/[,%$€£¥₹]/g,"").trim();if(a.length>0&&!Number.isNaN(Number(a)))return t[1].trim()}return e}function Jn(e){if(!e)return!1;let t=ue(_n(e)).replace(/[,%$€£¥₹]/g,"").trim();return t.length>0&&!Number.isNaN(Number(t))}function ut(e,t){return e.map((a,n)=>{let r=t.map(i=>i[n]??"").filter(i=>i.length>0);return r.length===0?"string":r.every(Hn)?"date":r.every(Jn)?"number":"string"})}function Kn(e){var i;let t=e.split(`
`).map(o=>o.trim()).filter(Boolean);if(t.length===0)return{columns:[],rows:[],columnTypes:[]};let a=(i=t[0])==null?void 0:i.match(/^series\s*=\s*(.+)$/);if(a){let o=re(a[1].trim()),s=[];for(let l=1;l<t.length;l++){let u=t[l].match(Vn),h=u??t[l].match(Ie);h&&s.push({cells:re(h[2]).map(I),label:ie(h[1]),legacy:u!==null})}let c=o.length>1||!s.some(l=>l.legacy)?o.map(I):I(o[0]).split(",").map(l=>l.trim());return Re(["label",...c],s.map(l=>[l.label,...c.map((u,h)=>l.cells[h]??"")]))}let n=["label","value"],r=[];for(let o of t){let s=o.match(Ie);s&&r.push([ie(s[1]),I(s[2])])}return Re(n,r)}function Re(e,t){return{columns:e,rows:t,columnTypes:ut(e,t)}}function Ue(e){return/^-?\d+(\.\d+)?%?$/.test(e)?e:S(e)}function pt(e,t){return e.length<=2?t.map(a=>{let n=a[0]??"",r=a[1]??"";return`${S(n)} = ${Ue(r)}`}).join(`
`):[`series = ${e.slice(1).map(S).join(",")}`,...t.map(a=>{let n=a[0]??"",r=a.slice(1).map(i=>Ue(i??"")).join(",");return`${S(n)} = ${r}`})].join(`
`)}function Yn(e){var o;let t=s=>s==null||!Number.isFinite(s)?"":String(s),a=["label",...e.series?e.series.map(s=>s.name):["value"]],n=new Map((o=e.textColumns)==null?void 0:o.map(s=>[s.name,s.values])),r=(s,c,l)=>{var u;return n.has(s)?((u=n.get(s))==null?void 0:u[l])??"":t(c[l])},i=e.labels.map((s,c)=>[s,...e.series?e.series.map(l=>r(l.name,l.values,c)):[t(e.values[c])]]);return{columns:a,rows:i,columnTypes:ut(a,i)}}var pe=new Set(Object.values(L));function dt(e,t,a,n){let r={columns:[...t],rows:a.map(i=>[...i]),columnTypes:[...n]};for(let i of e)switch(i.type){case L.Sort:r=jn(r,i.config);break;case L.Filter:r=kn(r,i.config);break;case L.HideColumns:r=Nn(r,i.config);break;case L.Transpose:r=qn(r);break;case L.Parse:r=Bn(r,i.config);break;case L.Rename:r=Gn(r,i.config);break;case L.GroupBy:r=Cn(r,i.config)}return r}function ht(e){return e.filter(t=>pe.has(t.transformType)).map(t=>{let a={};for(let[n,r]of B(t.properties))a[n]=String(r);return{type:t.transformType,config:a}})}function Zn(e,t){let a=ht(t);if(a.length===0)return e;let n=Kn(e);if(n.columns.length===0)return e;let r=dt(a,n.columns,n.rows,n.columnTypes);return pt(r.columns,r.rows)}function Qn(e,t){let a=ht(t);if(a.length===0||e.labels.length===0)return e;let n=Yn(e),r=dt(a,n.columns,n.rows,n.columnTypes);return J(pt(r.columns,r.rows))}var Be=new Set;function Xn(e,t,a){let n=t;for(let r of e)r.transformType==="sort"?n=ce.Total:!pe.has(r.transformType)&&!Be.has(r.transformType)&&(Be.add(r.transformType),console.warn(`[blueprint-chart] Unknown transform "${r.transformType}" in ${a}; ignored.`));return n}function ea(e){let t=r=>{let i=e.get(r);return i==null?void 0:String(i)||void 0},a=e.get("transparentBackground"),n={title:t("title"),description:t("description"),altText:t("altText"),source:t("source"),sourceUrl:t("sourceUrl"),byline:t("byline"),note:t("note"),padding:t("padding"),transparentBackground:De(a)||void 0,getTheData:De(e.get("getTheData"))||void 0};return Object.values(n).some(r=>r!==void 0)?n:void 0}function mt(e){let t=B(e.properties),a=J(Zn(e.data?le(e.data):"",e.transforms)),n=t.get("sort"),r=n==null?void 0:String(n),i=r===ye.Ascending||r===ye.Descending?r:void 0,o=t.get("theme"),s=t.get("sortMode"),c;return Object.values(ce).includes(s)&&(c=s),c=Xn(e.transforms,c,"chart"),{chartType:e.chartType,data:a,properties:e.properties,frame:ea(t),colorizes:it(e.colorizes),highlights:rt(e.highlights),areaFills:at(e.areaFills),annotations:nt(e.annotations),seriesOverrides:tt(e.series),scenes:e.scenes,sort:i,sortMode:c,theme:o==null?void 0:String(o)||void 0}}var ta=["verticalLabelPosition","horizontalLabelPosition"];function na(e,t,a){let n=st(t),r={...e};for(let i of ta)a[i]===void 0&&n[i]!==void 0&&n[i]!==Ht.Off&&(r[i]=n[i]);return r}var Ge=new Set;function aa(e,t,a){let n=t;for(let r of e)r.transformType==="sort"?n=ce.Total:!pe.has(r.transformType)&&!Ge.has(r.transformType)&&(Ge.add(r.transformType),console.warn(`[blueprint-chart] Unknown transform "${r.transformType}" in ${a}; ignored.`));return n}function ra(){return{properties:new Map,chartTypeOptions:{},colorizes:[],highlights:[],areaFills:[],seriesOverrides:[],transforms:[]}}function ia(e,t,a){let n=ra();for(let r=0;r<=t;r++){let i=e[r],o=B(i.properties),s=o.get("type");s&&(n.chartType=s);let c=n.chartType??a;i.data&&(n.data=i.data);let l=be(c,i.properties);n.chartTypeOptions={...n.chartTypeOptions,...l},i.colorizes.length>0?n.colorizes=i.colorizes:i.data&&(n.colorizes=[]),r===t&&(n.highlights=i.highlights),i.areaFills.length>0&&(n.areaFills=i.areaFills),i.series.length>0&&(n.seriesOverrides=i.series),i.transforms.length>0&&(n.transforms=[...n.transforms,...i.transforms]);for(let[u,h]of o)n.properties.set(u,h)}return n}function oa(e,t,a){return a<e?!1:t==="always"||a<=e+(typeof t=="number"?t:0)}function Se(e,t){let a=e.options??(e.properties?Fe(e.chartType,be(e.chartType,e.properties)):{}),n={chartType:e.chartType,data:e.data,options:a,frame:e.frame,colorizes:e.colorizes??[],highlights:e.highlights??[],areaFills:e.areaFills??[],annotations:(e.annotations??[]).map((v,k)=>({...v,key:v.key??`base:${k}:${v.kind}`})),seriesOverrides:e.seriesOverrides??[],sort:e.sort,sortMode:e.sortMode,theme:e.theme};if(t==null||!e.scenes||t<0||t>=e.scenes.length)return n;let r=ia(e.scenes,t,e.chartType),i=r.chartType??e.chartType,o=r.data?J(le(r.data)):Qn(n.data,r.transforms),s=Object.keys(r.chartTypeOptions).length>0?Fe(i,{...a,...r.chartTypeOptions}):a,c=i!==e.chartType&&!e.options&&e.properties?na(s,i,{...be(i,e.properties),...r.chartTypeOptions}):s,l=r.colorizes.length>0?it(r.colorizes):r.data?[]:n.colorizes,u=t==null?n.highlights:rt(r.highlights),h=r.areaFills.length>0?at(r.areaFills):n.areaFills,m=(e.annotations??[]).map((v,k)=>({anchor:-1,key:v.key??`base:${k}:${v.kind}`,config:v}));for(let v=0;v<=t;v++)nt(e.scenes[v].annotations).forEach((k,U)=>{m.push({anchor:v,key:k.key??`s${v}:${U}:${k.kind}`,config:k})});let g=m.filter(({anchor:v,config:k})=>oa(v,k.repeat,t)).map(({key:v,config:k})=>({...k,key:v})),y=r.seriesOverrides.length>0?tt(r.seriesOverrides):n.seriesOverrides,d=r.properties.get("sortMode"),b=Object.values(ce).includes(d)?d:void 0,T=aa(r.transforms,b??n.sortMode,`scene ${t}`),C=["title","description","altText","source","sourceUrl","byline","note"],N={};for(let v of C){let k=r.properties.get(v);typeof k=="string"&&(N[v]=k)}let W=Object.keys(N).length>0?{...n.frame,...N}:n.frame;return{...n,chartType:i,data:o,options:c,frame:W,colorizes:l,highlights:u,areaFills:h,annotations:g,seriesOverrides:y,sortMode:T}}var $e=new WeakMap;function sa(e){let t=$e.get(e);if(!(!t||t.size===0)){for(let a of t)e.style[a]="";t.clear()}}function G(e,t){let a=$e.get(e);a||(a=new Set,$e.set(e,a)),a.add(t)}function la(e,t,a){if(sa(e),a.ignoreLayout||!t)return{constrained:!1};let n=B(t),r=n.get("heightMode"),i=n.get("aspectRatio"),o=n.get("fixedHeight"),s=!1;if(r==="aspect-ratio"&&i){let c=String(i).split(":").map(Number);c.length===2&&c[0]>0&&c[1]>0&&(e.style.aspectRatio=`${c[0]} / ${c[1]}`,e.style.height="auto",G(e,"aspectRatio"),G(e,"height"),s=!0)}else r==="fixed"&&o&&(e.style.height=`${o}px`,G(e,"height"),s=!0);return s&&(e.style.display="flex",e.style.flexDirection="column",e.style.overflow="hidden",G(e,"display"),G(e,"flexDirection"),G(e,"overflow")),{constrained:s}}var Ee=new WeakMap;function gt(e){e.querySelectorAll("[data-bc-fade-overlay]").forEach(t=>{typeof t.getAnimations=="function"&&t.getAnimations().forEach(a=>a.cancel()),t.remove()})}function ca(e,t,a){if(!a)return null;let n=Ee.get(e);return!n||n===t?null:(gt(e),qt(e))}function ua(e,t,a){if(Ee.set(e,t),a){let n=e.querySelector(".bc-frame .bc-frame-body");n&&Wt(n),Vt(e,a)}}function je(e){Ee.delete(e),gt(e)}var pa="http://www.w3.org/2000/svg";function me(e){return e.replace(/\s+/g," ").trim()}function da(e,t){if(e==="scatter chart")return`${e} of ${t.labels.length} points.`;let a=t.series??[],n=(a.length>0?a.flatMap(r=>r.values):t.values).filter(r=>Number.isFinite(r));return`${e} of ${`${t.labels.length} categor${t.labels.length===1?"y":"ies"}`}${a.length>0?` across ${a.length} series (${a.map(r=>r.name).join(", ")})`:""}${n.length>0?`, values from ${Math.min(...n)} to ${Math.max(...n)}`:""}.`}function ft(e,t,a){let n=`${e.replace(/-/g," ")} chart`,r=t!=null&&t.title?me(t.title):"",i=t!=null&&t.description?me(t.description):"",o=t!=null&&t.altText?me(t.altText):"";return{label:r||n,description:o||[i,da(n,a)].filter(Boolean).join(" ")}}function qe(e,t,a){let n=Array.from(e.children).find(i=>i.tagName===t),r=n??e.ownerDocument.createElementNS(pa,t);r.textContent=a,n||e.insertBefore(r,e.firstChild)}function ha(e,t){e.setAttribute("role","img"),e.setAttribute("aria-label",t.label),qe(e,"desc",t.description),qe(e,"title",t.label)}function ma(e){return(e.querySelector(".bc-frame-body")??e).querySelector("svg")}function ga(e,t,a){let n=ma(e);n&&t.accessibility&&ha(n,t.accessibility);let r=e.querySelector(".bc-frame");if(!r)return;let i=[];r.classList.forEach(o=>{o.startsWith("bc-theme-")&&i.push(o)});for(let o of i)r.classList.remove(o);t.theme&&r.classList.add(`bc-theme-${t.theme}`),a.constrained&&r.classList.add("bc-frame--constrained")}function yt(e,t,a={}){var g;let n=!!a.transition||te(e).state==="animating";if(n||(te(e).interrupt(),e.replaceChildren(),je(e)),t.data.labels.length===0){n&&(te(e).interrupt(),e.replaceChildren(),je(e));return}let r=t;if(a.stripColors){let y={...t};if(t.properties&&(y.properties=t.properties.filter(d=>d.key!=="colors"&&d.key!=="colorPalette")),t.options){let{colors:d,colorPalette:b,...T}=t.options;y.options=T}r=y}let i=la(e,r.properties,a),o=Se(r,a.sceneIndex),s=Ot(o.chartType);if(!s)return;Ft(e,o.chartType);let c=ca(e,o.chartType,n);c&&e.replaceChildren();let l=It(e),u=Sn(o.options,l,o.chartType),h;if(a.thumbnail)h=null;else{let y=((g=o.frame)==null?void 0:g.padding)??a.padding??"16px";h={...o.frame??{},padding:y,data:o.data}}let m=te(e);n&&m.beginCommit(),s(e,o.data,{frame:h,sort:o.sort,...u,sortMode:o.sortMode??u.sortMode,colorizes:o.colorizes.length>0?o.colorizes:void 0,highlights:o.highlights.length>0?o.highlights:void 0,areaFills:o.areaFills.length>0?o.areaFills:void 0,annotations:o.annotations.length>0?o.annotations:void 0,seriesOverrides:o.seriesOverrides.length>0?o.seriesOverrides:void 0},n),n&&m.commit({duration:Rt(),mode:a.transitionMode}),ga(e,{theme:a.theme??o.theme,accessibility:ft(o.chartType,h,o.data)},i),ua(e,o.chartType,c)}function We(e,t,a){let n=document.createElement("div");n.style.cssText="color: #888; font-family: monospace; padding: 0.75rem; white-space: pre-wrap;",n.textContent=`Blueprint Chart: ${t}
${a}`,e.replaceChildren(n)}function Xr(e,t,a){if(!t){a!=null&&a.transition||e.replaceChildren();return}let n;try{n=xe(t)}catch(r){We(e,"could not parse chart",r instanceof Error?r.message:String(r));return}try{yt(e,mt(n),a)}catch(r){We(e,"could not render chart",r instanceof Error?r.message:String(r))}}var fa=[{intent:"range",pattern:/\b(range|high and low|high\/low|margin of error|confidence interval|confidence|interval|plus or minus|spread between)\b/i},{intent:"composition-over-time",pattern:/(composition|mix|stacked|breakdown)[^.]*\b(over time|by year|by quarter|by month|by decade)\b|\b(over time|by year|by quarter|by month)\b[^.]*(composition|mix|breakdown)/i},{intent:"part-to-whole",pattern:/\b(share|part[- ]to[- ]whole|proportion|percentage of (?:the )?total|% of (?:the )?total|makes? up|out of (?:the )?total|composition)\b/i},{intent:"ranking",pattern:/\b(rank|ranked|ranking|top \d+|most|largest|biggest|highest|leading|fewest|smallest)\b/i},{intent:"relationship",pattern:/\b(correlat\w*|relationship|against|related to|tends? to|associated with)\b/i},{intent:"trend",pattern:/\b(over time|trend|grew|rose|fell|climbed|declined|increased?|decreased?|change over|year[- ]over[- ]year|overtak\w*|overtook|surpass\w*|crossover|diverg\w*)\b/i},{intent:"comparison",pattern:/\b(compares?|compared|comparison|versus|vs\.?|more than|difference between|across|than)\b/i}];function ya(e){if(e===void 0||e.trim()==="")return"none";for(let t of fa)if(t.pattern.test(e))return t.intent;return"none"}var p=(e,t,a)=>({type:e,fitness:t,reason:a}),F={"1cat+1num":{none:e=>{let t=[p("bar-vertical","best","1 categorical + 1 numeric — classic bar chart"),p("bar-horizontal","good","Horizontal bars work well for long labels")];return e<=8&&(t.push(p("donut","good",`${e} items — suitable for part-of-whole`)),t.push(p("pie","alternative","Pie chart for part-of-whole"))),t},comparison:e=>F["1cat+1num"].none(e),ranking:()=>[p("bar-horizontal","best","Ranked categories read best as horizontal bars"),p("bar-vertical","good","Vertical bars also work for ranking")],"part-to-whole":e=>e<=5?[p("pie","best",`${e} slices — pie reads cleanly for very small N`),p("donut","good","Donut for part-of-whole with a center label"),p("bar-vertical","alternative","Bars if precise comparison matters")]:e<=8?[p("donut","best",`${e} slices — donut for part-of-whole`),p("pie","good","Pie for part-of-whole"),p("bar-vertical","alternative","Bars if precise comparison matters")]:[p("bar-vertical","best",`${e} categories — too many for a readable pie`),p("bar-horizontal","good","Horizontal bars for long labels")],range:()=>[p("bar-vertical","best","A single numeric column carries no range — plain bars read the value directly"),p("bar-horizontal","good","Horizontal bars work well for long labels")]},"1cat+Nnum":{none:()=>[p("bar-multi","best","1 categorical + multiple numeric columns — compare groups"),p("line-multi","good","Can also show as a multi-line chart")],comparison:e=>F["1cat+Nnum"].none(e),ranking:e=>F["1cat+Nnum"].none(e),trend:()=>[p("line-multi","best","A trend or crossover story reads best as lines, even over categorical periods"),p("bar-multi","alternative","Grouped bars if per-period comparison matters more than the trend")],"part-to-whole":()=>[p("bar-stacked","best","Stacked bars show composition within each category"),p("column-stacked","good","Stacked columns for the same composition"),p("bar-multi","alternative","Grouped bars if comparison beats composition")],"composition-over-time":()=>[p("column-stacked","best","Stacked columns show composition across discrete periods"),p("bar-stacked","good","Stacked bars for the same composition"),p("area-stacked","alternative","Stacked area if the periods are continuous time")],relationship:()=>[p("scatter","best","Two numeric columns per item — a scatter plot shows how they move together"),p("line-multi","alternative","Lines if the categories have a natural order")],range:()=>[p("dot-plot","best",'A dot with a bar from low to high shows each value with its margin. Set dotStyle = "range" and pick the low and high columns'),p("bar-split","alternative","Split bars if each bound should read as its own panel")]},"1cat+text+Nnum":{none:()=>[p("scatter","best","A label, a text column and several numbers — plot one number against another"),p("bar-multi","alternative","Grouped bars if comparing values per row matters more")],relationship:e=>F["1cat+text+Nnum"].none(e)},"1date+1num":{none:()=>[p("line","best","1 date + 1 numeric column — ideal for trend"),p("bar-vertical","alternative","Can also show as bars")],trend:()=>[p("line","best","1 date + 1 numeric column — ideal for trend"),p("area","good","Filled area emphasizes magnitude over time"),p("bar-vertical","alternative","Can also show as bars")],comparison:()=>[p("bar-vertical","best","Bars for comparing discrete time points"),p("line","good","Line if the trend matters more than the comparison")],ranking:()=>[p("bar-vertical","best","Bars for ranking discrete time points"),p("line","good","Line for the underlying trend")],"part-to-whole":()=>[p("area","best","Filled area reads as magnitude/share over time"),p("line","good","Line for the underlying trend")],"composition-over-time":()=>[p("area","best","Filled area shows magnitude over time"),p("line","good","Line for the underlying trend")]},"1date+Nnum":{none:()=>[p("line-multi","best","1 date + multiple numeric columns — compare trends"),p("bar-multi","alternative","Can also show as grouped bars")],trend:e=>F["1date+Nnum"].none(e),comparison:e=>F["1date+Nnum"].none(e),ranking:e=>F["1date+Nnum"].none(e),"composition-over-time":()=>[p("area-stacked","best","Stacked area shows composition over continuous time"),p("column-stacked","good","Stacked columns for the same composition"),p("line-multi","alternative","Multi-line if composition is not the point")],"part-to-whole":()=>[p("area-stacked","best","Stacked area shows share over time"),p("line-multi","good","Multi-line if absolute trends matter more")]},other:{none:()=>[p("bar-vertical","good","Default bar chart recommendation")]}};function ba(e,t,a){let n=F[e],r=n[t]??n.none;return r?r(a):[p("bar-vertical","good","Default bar chart recommendation")]}function va(e,t){let a=e[0]==="date",n=e.filter(o=>o==="string").length,r=a?e.filter(o=>o==="date").length:0,i=e.filter(o=>o==="number"||o==="date"&&!a).length;return r===1&&n===0&&i>=1?i===1?"1date+1num":"1date+Nnum":n===1&&r===0&&i>=1?i===1?"1cat+1num":"1cat+Nnum":e[0]==="string"&&r===0&&n>=2&&i>=2?"1cat+text+Nnum":"other"}var wa={"bar-vertical":"Vertical Bar Chart","bar-horizontal":"Horizontal Bar Chart","bar-multi":"Grouped Bar Chart","bar-grouped":"Grouped Bar Chart","bar-stacked":"Stacked Bar Chart","bar-split":"Diverging Bar Chart","dot-plot":"Dot Plot","column-stacked":"Stacked Column Chart",line:"Line Chart","line-multi":"Multi-Line Chart",area:"Area Chart","area-stacked":"Stacked Area Chart",pie:"Pie Chart",donut:"Donut Chart",scatter:"Scatter Plot"};function ei(e,t,a){return e.length===0?[]:ba(va(e),ya(a),t).map(n=>({chartType:n.type,label:wa[n.type]??n.type,fitness:n.fitness,reason:n.reason}))}var Sa={protanopia:"Protanopia (no red)",deuteranopia:"Deuteranopia (no green)",tritanopia:"Tritanopia (no blue)"},bt={protanopia:[.152286,1.052583,-.204868,0,0,.114503,.786281,.099216,0,0,-.003882,-.048116,1.051998,0,0,0,0,0,1,0],deuteranopia:[.367322,.860646,-.227968,0,0,.280085,.672501,.047413,0,0,-.01182,.04294,.968881,0,0,0,0,0,1,0],tritanopia:[1.255528,-.076749,-.178779,0,0,-.078411,.930809,.147602,0,0,.004733,.691367,.3039,0,0,0,0,0,1,0]};function $a(e){return`bc-cvd-${e}`}function ti(e){let t="http://www.w3.org/2000/svg",a=document.createElementNS(t,"filter");a.setAttribute("id",$a(e)),a.setAttribute("color-interpolation-filters","linearRGB");let n=document.createElementNS(t,"feColorMatrix");return n.setAttribute("type","matrix"),n.setAttribute("values",bt[e].join(" ")),a.appendChild(n),a}function ka(e){return e<=.04045?e/12.92:((e+.055)/1.055)**2.4}function ge(e){return e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055}function Ta(e,t){let[a,n,r]=(H.valid(e)?H(e):H("#000")).rgb().map(u=>ka(u/255)),i=bt[t],o=ge(i[0]*a+i[1]*n+i[2]*r),s=ge(i[5]*a+i[6]*n+i[7]*r),c=ge(i[10]*a+i[11]*n+i[12]*r),l=u=>Math.min(255,Math.max(0,Math.round(u*255)));return H(l(o),l(s),l(c)).hex()}var Aa=10;function ni(e){if(e.length<2)return[];let t=["protanopia","deuteranopia","tritanopia"],a=[];for(let n of t){let r=e.map(o=>Ta(o,n)),i=[];for(let o=0;o<r.length;o++)for(let s=o+1;s<r.length;s++){let c=H.deltaE(r[o],r[s]);c<Aa&&i.push({a:e[o],b:e[s],deltaE:c})}i.length>0&&a.push({type:n,label:Sa[n],pairs:i})}return a}function $(e,t){return(e??[]).flatMap(a=>a.split(`
`).map(n=>`${t}// ${n.trim()}`))}function de(e,t){return t==null?e:t.includes(`
`)?`${e} /* ${t} */`:`${e} // ${t}`}function E(e,t){return[...$(e.trailingComments,`${t}  `),de(`${t}}`,e.trailingComment)]}function ke(e){return typeof e.value=="number"?e.isPercentage?`${e.value}%`:`${e.value}`:typeof e.value=="string"&&e.value.startsWith("#")?S(e.value):typeof e.value=="string"&&/^[a-zA-Z_][a-zA-Z0-9_-]*$/.test(e.value)?e.value:S(String(e.value))}function vt(e){return/^[a-zA-Z_][a-zA-Z0-9_-]*$/.test(e)?e:S(e)}function x(e,t){let a=de(`${t}${vt(e.key)} = ${ke(e)}`,e.trailingComment);return[...$(e.leadingComments,t),a].join(`
`)}function xa(e,t){let a;return a=e.key==="series"&&e.quotedKey&&!(e.values&&e.values.length>1)?`${t}"series" = ${ke(e)}`:e.values&&e.values.length>1?`${t}${e.key==="series"&&!e.quotedKey?e.key:S(e.key)} = ${e.values.map(n=>typeof n=="number"?`${n}`:S(String(n))).join(",")}`:`${t}${vt(e.key)} = ${ke(e)}`,[...$(e.leadingComments,t),de(a,e.trailingComment)].join(`
`)}function K(e,t){let a=[...$(e.leadingComments,t),`${t}data {`];for(let n of e.entries)a.push(xa(n,`${t}  `));return a.push(...E(e,t)),a.join(`
`)}function Y(e,t){let a=e.fromHighlight?"highlight":"colorize",n=[...$(e.leadingComments,t),`${t}${a} ${S(e.target)} {`];for(let r of e.properties)n.push(x(r,`${t}  `));return n.push(...E(e,t)),n.join(`
`)}function Z(e,t){return[...$(e.leadingComments,t),de(`${t}highlight ${S(e.target)}`,e.trailingComment)].join(`
`)}function Q(e,t){let a=[...$(e.leadingComments,t),`${t}area-fill ${S(e.from)} ${S(e.to)} {`];for(let n of e.properties)a.push(x(n,`${t}  `));return a.push(...E(e,t)),a.join(`
`)}function X(e,t){let a=e.kind??j.Point;if(a===j.Range){let i=[...$(e.leadingComments,t),`${t}range {`];for(let o of e.properties)i.push(x(o,`${t}  `));return i.push(...E(e,t)),i.join(`
`)}if(a===j.Free){let i=[...$(e.leadingComments,t),`${t}note {`];for(let o of e.properties)i.push(x(o,`${t}  `));return i.push(...E(e,t)),i.join(`
`)}let n="target"in e?e.target:"",r=[...$(e.leadingComments,t),`${t}annotation ${S(n)} {`];for(let i of e.properties)r.push(x(i,`${t}  `));return r.push(...E(e,t)),r.join(`
`)}function Pe(e,t){let a=[...$(e.leadingComments,t),`${t}series ${S(e.name)} {`];for(let n of e.properties)a.push(x(n,`${t}  `));return a.push(...E(e,t)),a.join(`
`)}function wt(e,t){let a=e.name==null?`${t}scene {`:`${t}scene ${S(e.name)} {`,n=[...$(e.leadingComments,t),a];for(let r of e.properties)n.push(x(r,`${t}  `));e.data&&n.push(K(e.data,`${t}  `));for(let r of e.colorizes)n.push(Y(r,`${t}  `));for(let r of e.highlights)n.push(Z(r,`${t}  `));for(let r of e.areaFills)n.push(Q(r,`${t}  `));for(let r of e.annotations)n.push(X(r,`${t}  `));for(let r of e.series)n.push(Pe(r,`${t}  `));for(let r of e.transforms)n.push(ee(r,`${t}  `));return n.push(...E(e,t)),n.join(`
`)}function ee(e,t){let a=[...$(e.leadingComments,t),`${t}transform ${e.transformType} {`];for(let n of e.properties)a.push(x(n,`${t}  `));return a.push(...E(e,t)),a.join(`
`)}function Ca(e,t,a){let n=q(a).find(r=>r.key===e);return!n||n.default===void 0?!1:String(n.default)===String(t)}function ai(e){let t=[`chart ${e.chartType} {`];for(let a of e.properties)t.push(x(a,"  "));e.data&&t.push(K(e.data,"  "));for(let a of e.colorizes)t.push(Y(a,"  "));for(let a of e.highlights)t.push(Z(a,"  "));for(let a of e.areaFills)t.push(Q(a,"  "));for(let a of e.annotations)t.push(X(a,"  "));for(let a of e.series)t.push(Pe(a,"  "));for(let a of e.scenes)t.push(wt(a,"  "));for(let a of e.transforms)t.push(ee(a,"  "));return t.push(...$(e.trailingComments,"  "),"}"),t.join(`
`)}function Na(e){return new Map(e.map(t=>[t.key,t.value]))}function Me(e,t,a,n){let r=q(a).find(i=>i.key===e);return r?n.has(e)?String(n.get(e))===String(t):r.default!==void 0&&String(r.default)===String(t):!1}function St(e,t,a,n){let r=[...$(e.leadingComments,t),`${t}series ${S(e.name)} {`];for(let i of e.properties)(i.isPercentage||!Me(i.key,i.value,a,n))&&r.push(x(i,`${t}  `));return r.push(...E(e,t)),r.join(`
`)}function Ea(e,t,a,n){let r=e.properties.find(l=>l.key==="type"),i=r?String(r.value):a,o=e.name==null?`${t}scene {`:`${t}scene ${S(e.name)} {`,s=[...$(e.leadingComments,t),o],c=new Map(n);for(let l of e.properties){if(l.key==="type"){s.push(x(l,`${t}  `));continue}c.set(l.key,l.value),(l.isPercentage||!Me(l.key,l.value,i,n))&&s.push(x(l,`${t}  `))}e.data&&s.push(K(e.data,`${t}  `));for(let l of e.colorizes)s.push(Y(l,`${t}  `));for(let l of e.highlights)s.push(Z(l,`${t}  `));for(let l of e.areaFills)s.push(Q(l,`${t}  `));for(let l of e.annotations)s.push(X(l,`${t}  `));for(let l of e.series)s.push(St(l,`${t}  `,i,c));for(let l of e.transforms)s.push(ee(l,`${t}  `));return s.push(...E(e,t)),s.join(`
`)}function ri(e){let t=[`chart ${e.chartType} {`],a=new Map;for(let r of e.properties)(r.isPercentage||!Me(r.key,r.value,e.chartType,a))&&t.push(x(r,"  "));e.data&&t.push(K(e.data,"  "));for(let r of e.colorizes)t.push(Y(r,"  "));for(let r of e.highlights)t.push(Z(r,"  "));for(let r of e.areaFills)t.push(Q(r,"  "));for(let r of e.annotations)t.push(X(r,"  "));let n=Na(e.properties);for(let r of e.series)t.push(St(r,"  ",e.chartType,n));for(let r of e.scenes)t.push(Ea(r,"  ",e.chartType,n));for(let r of e.transforms)t.push(ee(r,"  "));return t.push(...$(e.trailingComments,"  "),"}"),t.join(`
`)}function ii(e){let t=[`chart ${e.chartType} {`];for(let a of e.properties)Ca(a.key,a.value,e.chartType)||t.push(x(a,"  "));e.data&&t.push(K(e.data,"  "));for(let a of e.colorizes)t.push(Y(a,"  "));for(let a of e.highlights)t.push(Z(a,"  "));for(let a of e.areaFills)t.push(Q(a,"  "));for(let a of e.annotations)t.push(X(a,"  "));for(let a of e.series)t.push(Pe(a,"  "));for(let a of e.scenes)t.push(wt(a,"  "));for(let a of e.transforms)t.push(ee(a,"  "));return t.push(...$(e.trailingComments,"  "),"}"),t.join(`
`)}function Pa(e,t){let a=[Array.from({length:t.length+1},(n,r)=>r)];for(let n=1;n<=e.length;n++){a.push([n]);for(let r=1;r<=t.length;r++){let i=e[n-1]===t[r-1]?0:1;a[n][r]=Math.min(a[n][r-1]+1,a[n-1][r]+1,a[n-1][r-1]+i),n>1&&r>1&&e[n-1]===t[r-2]&&e[n-2]===t[r-1]&&(a[n][r]=Math.min(a[n][r],a[n-2][r-2]+1))}}return a[e.length][t.length]}function M(e,t){let a,n=1/0;for(let i of t){let o=Pa(e.toLowerCase(),i.toLowerCase());o<n&&(n=o,a=i)}if(a===void 0)return;let r=Math.max(1,Math.min(3,Math.floor(e.length/2)));return n<=r?a:void 0}var Ma=["x","y","size","group"],za={"missing-x":"missing x","missing-y":"missing y","invalid-size":"size must be above 0","non-positive-log-x":"x must be above 0 on a log axis","non-positive-log-y":"y must be above 0 on a log axis"},Da={x:"horizontal",y:"vertical"};function La(e){return[...ln(e),...(e.textColumns??[]).map(t=>t.name)]}function $t(e,t,a,n){let r=La(e);return a.flatMap(i=>{let o=t[i];return!o||o==="none"||r.includes(o)?[]:[{code:"unknown-column",severity:n,key:i,message:`${i} names "${o}", which is not a column.`,suggestion:M(o,r)}]})}function kt(e,t){if(!e.length)return[];let a=e.slice(0,5).map(r=>`"${r.name}" (${t[r.reason]})`),n=e.length-a.length;return[{code:"dropped-rows",severity:"warning",message:`${`${e.length} ${e.length===1?"row":"rows"}`} not drawn: ${a.join(", ")}${n>0?`, and ${n} more`:""}.`}]}function Oa(e){return e.map(t=>({code:"trend-skipped",severity:"warning",message:`Trend line skipped${t==="overall"?"":` for ${t}`}: needs at least 3 points.`}))}function Fa(e,t){return["x","y"].flatMap(a=>["min","max"].flatMap(n=>{var i;let r=(i=t[a])==null?void 0:i[n];return e[a]!==on.Log||r===void 0||String(r).trim()===""||!(Number(r)<=0)?[]:[{code:"log-range-ignored",severity:"warning",message:`${`${Da[a]}Range${n==="min"?"Min":"Max"}`} must be above 0 on a log axis; it is ignored.`}]}))}function Ia(e,t,a,n,r){let i=$t(e,t,Ma,"error"),o=Qt(e,t);if(!o.y)return[...i,{code:"scatter-missing-y",severity:"error",key:"y",message:"Scatter needs at least two numeric columns."}];let s=Fa(a,n);if(i.length)return[...i,...s];let{points:c,dropped:l}=Xt(e,o,a),u=en(r)?tn(c,r,a).skipped:[];return[...kt(l,za),...Oa(u),...s]}var Ra=["low","high"],Ua={"missing-value":"missing value","missing-range":"missing low or high","non-positive-log":"values must be above 0 on a log axis"},Te=e=>e.map(t=>`"${t}"`).join(", ");function Ba(e){let t=e.filter(({values:[r],low:i=-1/0,high:o=1/0})=>r<Math.min(i,o)||r>Math.max(i,o));if(!t.length)return[];let a=t.slice(0,5).map(r=>r.name),n=t.length-a.length;return[{code:"value-outside-range",severity:"warning",message:`${`${t.length} ${t.length===1?"row has":"rows have"}`} a value outside low to high: ${Te(a)}${n>0?`, and ${n} more`:""}.`}]}function Ga(e,t){return t.length?[{code:"ignored-columns",severity:"warning",message:`Range mode uses ${Te(e)} as the value and ignores ${Te(t)}.`}]:[]}function ja(e,t){return e.dotStyle!==sn.Range||t==="range"?[]:[{code:"missing-range-columns",severity:"warning",message:"Range style needs a low and a high column. Pick them in low and high."}]}function qa(e,t,a){let n=nn(e,t),{rows:r,dropped:i}=an(e,n,a);return[...$t(e,t,Ra,"warning"),...ja(t,n.mode),...kt(i,Ua),...n.mode==="range"?Ba(r):[],...Ga(n.values,n.ignored)]}var Ve=new Set(["title","description","altText","byline","note","source","sourceUrl","padding","transparentBackground","getTheData","type","sort","sortMode","theme","heightMode","aspectRatio","fixedHeight","sizing","fixedWidth","maxWidth","player","playerPosition","autoplay","sceneDuration","loop"]),He=new Set(["autoplay","sceneDuration","loop"]),Wa=new Map([["theme",Kt().map(e=>e.name)],["player",["buttons","progress-bar","dot-stepper","minimal-arrows","none"]],["playerPosition",["left","center","right"]],["autoplay",["true","false"]],["loop",["true","false"]]]),Va=new Set(["lineSymbolSize","circleSize","fixedHeight","fixedWidth","maxWidth"]),fe=pe,Ha=new Set(["text","repeat","textColor","maxWidth","textOutline","showLine","anchorDirection","textOffsetX","textOffsetY","lineStyle","lineWeight","showArrow","lineTargetDistance","showCircle","circleSize","circleStyle","circleColor"]),_e=new Set(["color","lineWidth","dash","interpolation","labelMode","labelText","valueLabels","lineSymbols","hidden","connectGaps","symbolShape","symbolShowOn","symbolStyle","symbolSize","symbolOpacity"]),_a=new Map([["symbolShape","lineSymbolShape"],["symbolShowOn","lineSymbolShowOn"],["symbolStyle","lineSymbolStyle"]]),Ja=new Set(["start","end","repeat","orientation","startAnchor","endAnchor","bgColor","bgOpacity","direction","text","textColor"]),Ka=new Set(["text","x","y","repeat","textColor","maxWidth","textOutline"]);function Tt(e,t){return e.find(a=>a.key===t)}function ze(e,t,a,n,r){r.push({code:"invalid-choice",path:n,message:`${e} must be one of: ${a.map(i=>`"${i}"`).join(", ")}; got "${t}".`,suggestion:M(String(t),a.filter(i=>i!==""))})}function At(e,t,a){if(!Va.has(e.key))return;let n=parseFloat(String(e.value));Number.isFinite(n)&&n<0&&a.push({code:"invalid-number",path:t,message:`${e.key} must not be negative; got "${e.value}".`})}function Ya(e,t,a){if(e.key!=="sceneDuration")return;let n=e.value;typeof n=="number"&&n>=1&&n<=10||a.push({code:"invalid-number",path:t,message:`sceneDuration must be a number of seconds from 1 to 10; got "${n}".`})}function Za(e,t,a,n){let r=t.value,i=String(r).toLowerCase();if(e.type===Yt.Boolean){if(e.key==="valueLabels"&&i==="percent"||r===!0||r===!1||i==="true"||i==="false")return;n.push({code:"invalid-boolean",path:a,message:`${e.key} expects true or false, got "${r}".`,suggestion:i==="no"||i==="0"||i==="off"?"false":"true"});return}if(e.choices&&e.choices.length>0){let o=e.choices.map(s=>s.value);if(o.includes(String(r))||String(r)===""&&o.includes(""))return;ze(e.key,r,o,a,n)}}function xt(e,t,a,n){let r=q(e),i=new Set([...r.map(o=>o.key),...Ve]);for(let o of t){let s=`${a}.${o.key}`;At(o,s,n),Ya(o,s,n);let c=Wa.get(o.key);if(c&&String(o.value)!==""&&!c.includes(String(o.value))&&ze(o.key,o.value,c,s,n),Ve.has(o.key))continue;let l=Tt(r,o.key);if(!l){n.push({code:"unknown-property",path:s,message:`Unknown property "${o.key}" for chart type "${e}".`,suggestion:M(o.key,i)});continue}Za(l,o,s,n)}}function Qa(e){return e===j.Range?Ja:e===j.Free?Ka:Ha}function Xa(e){return Zt[e]}function Ct(e,t,a){e.forEach((n,r)=>{let i=n.kind??j.Point,o=Qa(i),s=Xa(i);for(let l of n.properties){let u=`${t}.${s}[${r}].${l.key}`;At(l,u,a),!o.has(l.key)&&a.push({code:"unknown-annotation-property",path:u,message:`Unknown ${s} property "${l.key}"; it will be silently ignored.`,suggestion:M(l.key,o)})}let c=B(n.properties).get("repeat");if(c!==void 0){let l=String(c).toLowerCase();l==="true"||l==="false"||typeof c=="number"&&Number.isInteger(c)&&c>=1||a.push({code:"invalid-annotation-repeat",message:`repeat must be false, true, or a positive integer (got ${String(c)})`,path:`${t}.${s}[${r}].repeat`})}})}function Nt(e,t,a,n){let r=q(e);t.forEach((i,o)=>{var s,c;for(let l of i.properties){let u=`${a}.series[${o}].${l.key}`;if(!_e.has(l.key)){n.push({code:"unknown-series-property",path:u,message:`Unknown series property "${l.key}"; it will be silently ignored.`,suggestion:M(l.key,_e)});continue}let h=(c=(s=Tt(r,_a.get(l.key)??l.key))==null?void 0:s.choices)==null?void 0:c.map(m=>m.value);h!=null&&h.length&&!h.includes(String(l.value))&&ze(l.key,l.value,h,u,n)}})}function Et(e,t,a){e.forEach((n,r)=>{fe.has(n.transformType)||a.push({code:"unknown-transform",path:`${t}.transform[${r}]`,message:`Unknown transform type "${n.transformType}". Known types: ${[...fe].map(i=>`"${i}"`).join(", ")}.`,suggestion:M(n.transformType,fe)})})}function er(e){let t=new Set;for(let a of[e.data,...e.scenes.map(n=>n.data)])for(let n of(a==null?void 0:a.entries)??[]){if(n.key==="series"&&!n.quotedKey){for(let r of n.values??[n.value])t.add(String(r));continue}t.add(n.key);for(let r of n.values??[n.value])typeof r=="string"&&t.add(r)}return t}function tr(e,t){let a=er(e);if(a.size===0)return;let n=[{basePath:"chart",keyword:"highlight",nodes:e.highlights},{basePath:"chart",keyword:"colorize",nodes:e.colorizes},...e.scenes.flatMap((r,i)=>[{basePath:`scene[${i}]`,keyword:"highlight",nodes:r.highlights},{basePath:`scene[${i}]`,keyword:"colorize",nodes:r.colorizes}])];for(let{basePath:r,keyword:i,nodes:o}of n)o.forEach((s,c)=>{a.has(s.target)||t.push({code:"unresolved-target",path:`${r}.${i}[${c}]`,message:`${i} "${s.target}" matches no category or series; it has no effect.`,suggestion:M(s.target,a)})})}function oi(e){let t=[],a=[],n=ve(),r=n.includes(e.chartType);r||t.push({code:"unknown-chart-type",path:"chartType",message:`Unknown chart type "${e.chartType}".`,suggestion:M(e.chartType,n)}),r&&xt(e.chartType,e.properties,"chart",t),Et(e.transforms,"chart",t),Ct(e.annotations,"chart",t),r&&Nt(e.chartType,e.series,"chart",t);let i=!!e.data&&e.data.entries.length>0,o=e.scenes.some(s=>!!s.data&&s.data.entries.length>0);return!i&&!o&&t.push({code:"missing-data",path:"data",message:e.data&&e.data.entries.length===0?"Data block is empty.":"Chart has no data."}),e.data&&nr(e.data.entries,a),e.data&&ar(e.data.entries,a),tr(e,a),e.chartType===ne.Scatter&&Je(e.data,e.properties,"chart","data",t,a),e.chartType===ne.DotPlot&&Ke(e.data,e.properties,"chart","data",a),e.scenes.forEach((s,c)=>{var u;rr(s,e.chartType,c,t);let l=((u=s.properties.find(h=>h.key==="type"))==null?void 0:u.value)??e.chartType;l===ne.Scatter&&Je(s.data,[...e.properties,...s.properties],`scene[${c}]`,`scene[${c}].data`,t,a),l===ne.DotPlot&&Ke(s.data,[...e.properties,...s.properties],`scene[${c}]`,`scene[${c}].data`,a)}),{valid:t.length===0,errors:t,warnings:a}}function nr(e,t){let a=e.findIndex(i=>i.key==="series"&&!i.quotedKey);if(a===-1)return;let n=e[a],r=n.values??[n.value];r.every(i=>typeof i=="number")&&t.push({code:"numeric-series-meta-row",path:"data.series",message:"The unquoted `series` row names the chart columns, but its values are all numbers. If you meant a data category named series, quote the label.",suggestion:`"series" = ${r.join(",")}`}),a!==0&&t.push({code:"misplaced-series-meta-row",path:"data.series",message:"The `series` meta-row must be the first entry in the data block; later rows are ignored and the chart falls back to a single series.",suggestion:"Move the series row to the top of the data block."})}function ar(e,t){let a=new Map;for(let n of e)n.key==="series"&&!n.quotedKey||a.set(n.key,(a.get(n.key)??0)+1);for(let[n,r]of a)r>1&&t.push({code:"duplicate-data-key",path:`data.${n}`,message:`${r} rows share the label "${n}", so the chart numbers the repeats "${n} (2)" and up. Rename them, or combine the rows, if they are the same category.`,suggestion:`"${n} (2)"`})}function rr(e,t,a,n){var c;let r=`scene[${a}]`,i=(c=e.properties.find(l=>l.key==="type"))==null?void 0:c.value,o=i==null?t:String(i),s=e.properties.filter(l=>!He.has(l.key));for(let l of e.properties)He.has(l.key)&&n.push({code:"chart-level-only",path:`${r}.${l.key}`,message:`${l.key} applies to the whole chart, so it has no effect inside a scene.`});i!=null&&!ve().includes(o)?n.push({code:"unknown-chart-type",path:`${r}.type`,message:`Unknown chart type "${o}".`,suggestion:M(o,ve())}):(xt(o,s,r,n),Nt(o,e.series,r,n)),Et(e.transforms,r,n),Ct(e.annotations,r,n)}function Je(e,t,a,n,r,i){if(!e||e.entries.length===0)return;let o=B(t),s=g=>o.has(g)?String(o.get(g)):void 0,c=g=>s(g),l=g=>({min:s(`${g}RangeMin`),max:s(`${g}RangeMax`)}),u={x:s("x"),y:s("y"),size:s("size"),group:s("group")},h={x:c("horizontalScaleType"),y:c("verticalScaleType")},m={x:l("horizontal"),y:l("vertical")};for(let g of Ia(J(le(e)),u,h,m,s("trend")))(g.severity==="error"?r:i).push(Pt(g,g.key?`${a}.${g.key}`:n))}function Ke(e,t,a,n,r){if(!e||e.entries.length===0)return;let i=B(t),o=c=>i.has(c)?String(i.get(c)):void 0,s={dotStyle:o("dotStyle"),low:o("low"),high:o("high")};for(let c of qa(J(le(e)),s,o("horizontalScaleType")))r.push(Pt(c,c.key?`${a}.${c.key}`:n))}function Pt({code:e,message:t,suggestion:a},n){return{code:e,path:n,message:t,...a&&{suggestion:a}}}var ir=`chart bar-vertical {
  title = "E is the most frequent letter in English"
  description = "How often each letter appears in typical English text"
  byline = "Pierre Romera"
  source = "Lewand, Cryptological Mathematics"
  sourceUrl = "https://en.wikipedia.org/wiki/Letter_frequency"
  note = "Based on analysis of 40,000 words from English prose"
  colorPalette = "London"
  sort = descending

  highlight "E"

  data {
    "E" = 12.70
    "T" = 9.06
    "A" = 8.17
    "O" = 7.51
    "I" = 6.97
    "N" = 6.75
    "S" = 6.33
    "H" = 6.09
    "R" = 5.99
    "D" = 4.25
  }
}
`,or=`chart bar-vertical {
  // the headline above the chart
  title = "China emits more CO₂ than the US and India combined"
  description = "Annual emissions in billion tonnes, 2023"
  source = "Our World in Data"
  sourceUrl = "https://ourworldindata.org/co2-emissions"

  // one row per country: "label" = value
  data {
    "China" = 12.17
    "United States" = 4.92
    "India" = 3.06
    "Russia" = 1.73
    "Japan" = 0.99
    "Germany" = 0.59
  }

  // highlight pops one bar in the accent color
  highlight "China"

  // an annotation points a callout at a single bar
  annotation "India" {
    text = "Surpassed EU in 2023"
    showLine = true
    anchorDirection = N
    textOffsetX = 66
    textOffsetY = -41
    lineStyle = curve-left
    showArrow = true
    lineTargetDistance = 26
    showCircle = false
  }
}
`,sr=`chart bar-horizontal {
  title = "Mandarin has nearly twice as many native speakers as Spanish"
  description = "Number of native speakers worldwide, in millions"
  source = "Ethnologue"
  sourceUrl = "https://ethnologue.com"
  byline = "Pierre Romera"
  sort = descending

  highlight "Mandarin"

  data {
    "Mandarin" = 988
    "Spanish" = 487
    "English" = 372
    "Hindi" = 347
    "Bengali" = 232
    "Portuguese" = 252
    "Russian" = 133
    "Japanese" = 124
  }
}
`,lr=`chart line-multi {
  title = "China now buys more electric cars than the rest of the world combined"
  description = "Electric car sales by region, millions per year"
  source = "IEA Global EV Outlook 2024"
  sourceUrl = "https://www.iea.org/reports/global-ev-outlook-2024"
  colorPalette = "Maya"
  tooltips = true

  data {
    series = "China","Europe","United States","Rest of world"
    "2018" = 1.1,0.4,0.36,0.1
    "2020" = 1.3,1.4,0.30,0.2
    "2021" = 3.3,2.3,0.63,0.4
    "2022" = 6.0,2.7,1.0,0.7
    "2023" = 8.1,3.2,1.4,1.0
  }
}
`,cr=`chart bar-multi {
  title = "USA tops Paris 2024 with 126 medals across all categories"
  description = "2024 Paris Summer Games — top six nations"
  source = "Olympics.com"
  sourceUrl = "https://olympics.com"
  colors = "#eeca3b, #c0c0c0, #cd7f32"
  sort = descending

  data {
    series = "Gold","Silver","Bronze"
    "USA" = 40,44,42
    "China" = 40,27,24
    "Japan" = 20,12,13
    "Great Britain" = 14,22,29
    "Australia" = 18,19,16
    "France" = 16,26,22
  }
}
`,ur=`chart line {
  title = "2024 was the hottest year on record"
  description = "Deviation from the 1951–1980 average, in °C"
  source = "NASA GISS"
  sourceUrl = "https://data.giss.nasa.gov/gistemp/"
  tooltips = true
  crosshair = false
  lineSymbols = true

  data {
    "1980" = 0.26
    "1985" = 0.12
    "1990" = 0.45
    "1995" = 0.45
    "2000" = 0.39
    "2005" = 0.68
    "2010" = 0.73
    "2015" = 0.9
    "2020" = 1.01
    "2024" = 1.28
  }

  annotation "2015" {
    text = "2015 Paris Agreement to limit global warming to 1.5°C "
    maxWidth = 224
    showLine = true
    lineStyle = curve-right
    showArrow = true
    showCircle = true
  }
}
`,pr=`chart line {
  title = "Bitcoin surged past $90,000 in 2024"
  description = "USD, year-end closing price"
  source = "CoinGecko"
  sourceUrl = "https://www.coingecko.com"
  colors = "#f7931a"
  lineSymbols = true
  lineSymbolShowOn = "all"
  lineSymbolShape = "diamond"
  verticalNumberFormat = ",.0f"
  tooltips = true

  annotation "2021" {
    text = "All-time high cycle"
    textOffsetY = -12
    showArrow = true
  }

  data {
    "2016" = 963
    "2017" = 14156
    "2018" = 3742
    "2019" = 7194
    "2020" = 29080
    "2021" = 46306
    "2022" = 16547
    "2023" = 42258
    "2024" = 93429
  }
}
`,dr=`chart line-multi {
  title = "The income share of the top 1% has surged since 1980"
  description = "Pre-tax national income captured by the top 1%, percent"
  source = "World Inequality Database"
  sourceUrl = "https://wid.world"
  colorPalette = "Egypt"
  tooltips = true
  lineSymbols = true
  lineSymbolShowOn = "all"

  data {
    series = "United States","India","China","France"
    "1980" = 10.4,7.5,6.6,7.5
    "1990" = 14.7,10.7,8.3,9.0
    "2000" = 17.3,10.5,10.5,11.3
    "2010" = 17.9,16.4,15.2,11.0
    "2021" = 19.9,22.1,15.7,12.7
  }

  scene "US doubles" {
    title = "The US top 1% nearly doubled its income share since 1980"
    highlight "United States"
  }

  scene "India overtakes" {
    title = "India is now the most unequal of these major economies"
    highlight "India"
  }

  scene "France's modest rise" {
    title = "France's top 1% rose far less than the US or India"
    highlight "France"
  }
}
`,hr=`chart pie {
  title = "Asia is home to nearly 60% of the world's population"
  description = "Estimated share, 2024"
  source = "United Nations"
  sourceUrl = "https://population.un.org"
  colorPalette = "Klimt"
  legendPosition = "right"
  tooltips = true

  data {
    "Asia" = 58.9
    "Africa" = 18.6
    "Europe" = 9.1
    "Latin America" = 8.1
    "North America" = 4.7
  }
}
`,mr=`chart bar-vertical {
  title = "Brazil produces more coffee than the next three countries combined"
  description = "Million 60-kg bags, 2023/24 crop year"
  source = "USDA Foreign Agricultural Service"
  sourceUrl = "https://www.fas.usda.gov/data/coffee-world-markets-and-trade"
  colorPalette = "Harvey"

  data {
    "Brazil" = 66.4
    "Vietnam" = 27.5
    "Colombia" = 12.76
    "Ethiopia" = 9.13
    "Indonesia" = 7.65
    "Honduras" = 5.5
  }

  highlight "Brazil"

  transform sort {
    column = "value"
    direction = descending
  }
}
`,gr=`chart donut {
  title = "The richest 1% own more wealth than the entire bottom 90% combined"
  description = "Share of global wealth by group, 2021"
  source = "World Inequality Report 2022"
  sourceUrl = "https://wir2022.wid.world"
  colorPalette = "Imperator"
  legendPosition = "right"
  displayAsPercentage = true
  tooltips = true

  data {
    "Top 1%" = 38
    "Next 9%" = 38
    "Middle 40%" = 22
    "Bottom 50%" = 2
  }

  scene "Top 1% spotlight" {
    title = "The top 1% hold 38% of all global wealth"
    description = "Share of global wealth by group, 2021"
    highlight "Top 1%"
  }

  scene "Bottom half" {
    title = "The bottom half of humanity owns just 2%"
    description = "Share of global wealth by group, 2021"
    highlight "Bottom 50%"
  }

  scene "Income tells a softer story" {
    title = "Income is concentrated too — but less than wealth"
    description = "Share of global income by the same groups, 2021"
    highlight "Top 1%"
    data {
      "Top 1%" = 19
      "Next 9%" = 33
      "Middle 40%" = 39
      "Bottom 50%" = 9
    }
  }
}
`,fr=`chart area {
  title = "The US national debt has more than tripled since 2008"
  description = "Total federal debt outstanding, trillions of dollars"
  source = "U.S. Treasury, Fiscal Data"
  sourceUrl = "https://fiscaldata.treasury.gov"

  annotation "2008" {
    text = "Financial crisis"
    showArrow = true
    textOffsetY = -14
  }

  data {
    "2000" = 5.7
    "2004" = 7.4
    "2008" = 10.0
    "2012" = 16.1
    "2016" = 19.6
    "2020" = 26.9
    "2024" = 35.5
  }
}
`,yr=`chart area-stacked {
  title = "Renewables' share of global energy has more than doubled since 2000"
  description = "Share of global primary energy by source, 2000–2023"
  source = "Our World in Data"
  sourceUrl = "https://ourworldindata.org/energy-mix"
  stackPercent = true
  areaSortMode = descending

  data {
    series = "Coal","Oil","Gas","Renewables"
    "2000" = 27456,43017,23994,2997
    "2005" = 36201,47017,27439,3510
    "2010" = 42016,48193,31593,4868
    "2015" = 43695,51294,34780,6400
    "2020" = 42316,49101,38704,8569
    "2023" = 45319,54839,40151,10325
  }
}
`,br=`chart column-stacked {
  title = "Natural gas and renewables pushed coal off the US power grid"
  description = "Share of US electricity generation by source, percent"
  source = "U.S. Energy Information Administration"
  sourceUrl = "https://www.eia.gov/electricity"
  stackMode = "percent"

  data {
    series = "Coal","Natural gas","Nuclear","Renewables"
    "2010" = 45,24,20,10
    "2015" = 33,33,20,13
    "2020" = 19,39,20,20
    "2023" = 16,43,19,21
  }
}
`,vr=`chart bar-stacked {
  title = "India has far more children than China, and a workforce nearly as large"
  description = "Millions of people, 2023"
  source = "UN Population Division"
  sourceUrl = "https://population.un.org"
  colorPalette = "London"

  data {
    series = "0-14","15-64","65+"
    "China" = 232,988,200
    "India" = 354,978,97
    "USA" = 58,216,59
    "Indonesia" = 67,189,21
    "Brazil" = 43,148,24
  }
}
`,wr=`chart area-stacked {
  title = "EU subsidies to new members surged after enlargement"
  description = "Agricultural subsidies to post-socialist EU members, million euros"
  source = "Eurostat"
  sourceUrl = "https://ec.europa.eu/eurostat"
  colorPalette = "Enara"
  interpolation = "linear"
  heightMode = "aspect-ratio"
  aspectRatio = "1:1"

  data {
    series = "Indirect subsidies","Direct subsidies"
    "2000" = 370,800
    "2001" = 445,896
    "2002" = 567,816
    "2003" = 641,950
    "2004" = 1908,2434
    "2005" = 2234,3509
    "2006" = 2576,4356
    "2007" = 2467,5429
    "2008" = 2672,6655
    "2009" = 2474,7195
    "2010" = 2117,8207
    "2011" = 1863,9230
    "2012" = 1528,9191
    "2013" = 1251,10252
    "2014" = 1132,10987
    "2015" = 1687,10145
  }

  scene "Indirect subsidies shrank" {
    title = "Indirect subsidies were cut under WTO pressure"
    description = "Subsidies tied to specific crops fell foul of World Trade Organization rules"

    highlight "Indirect subsidies"
  }

  scene "Direct subsidies dominate" {
    title = "Direct per-hectare payments now dominate"
    description = "The larger the fields, the more money farmers receive"

    highlight "Direct subsidies"
  }

  scene "Bulgaria: subsidies explode" {
    title = "Bulgarian farmers received almost nothing before 2007 accession"
    description = "More than three-quarters of Bulgarian subsidies are direct payments — the highest share among new members"

    data {
      series = "Indirect subsidies","Direct subsidies"
      "2000" = 0,5
      "2001" = 0,33
      "2002" = 0,48
      "2003" = 0,69
      "2004" = 0,67
      "2005" = 0,87
      "2006" = 0,57
      "2007" = 59,250
      "2008" = 75,484
      "2009" = 97,415
      "2010" = 79,466
      "2011" = 94,458
      "2012" = 120,617
      "2013" = 132,852
      "2014" = 143,821
      "2015" = 213,677
    }

    highlight "Direct subsidies"
  }

  scene "Bulgarian farms grew" {
    title = "Average farm size in Bulgaria quadrupled"
    description = "Average farm size in hectares"
    type = line

    data {
      "2005" = 5
      "2007" = 6
      "2010" = 12
      "2013" = 18
    }
  }

  scene "Production rose" {
    title = "Bulgarian farm production rose from 3 to 4 billion euros"
    description = "Total production of Bulgarian farms, million euros"
    type = area

    data {
      "2000" = 2933
      "2001" = 3240
      "2002" = 3051
      "2003" = 2816
      "2004" = 3049
      "2005" = 3011
      "2006" = 3111
      "2007" = 3038
      "2008" = 4148
      "2009" = 3437
      "2010" = 3486
      "2011" = 4038
      "2012" = 4161
      "2013" = 4115
      "2014" = 4138
      "2015" = 3915
    }
  }

  scene "Cash crops replaced vegetables" {
    title = "Cash crops replaced vegetables in Bulgaria"
    description = "Production of Bulgarian farms, million euros"
    type = area-stacked

    data {
      series = "Vegetables","Cash crops","Other production"
      "2000" = 464,615,1854
      "2001" = 458,777,2005
      "2002" = 577,850,1624
      "2003" = 539,818,1459
      "2004" = 483,1103,1463
      "2005" = 492,994,1525
      "2006" = 510,1083,1518
      "2007" = 436,936,1666
      "2008" = 541,2045,1563
      "2009" = 243,1553,1641
      "2010" = 184,2173,1128
      "2011" = 120,2853,1065
      "2012" = 117,2900,1144
      "2013" = 139,2802,1174
      "2014" = 143,3082,914
      "2015" = 144,2986,785
    }

    highlight "Cash crops"
  }

  scene "Vegetables collapsed" {
    title = "Vegetable production fell by a factor of three"
    description = "A traditional Bulgarian cultivation shrank as subsidies favoured large fields"

    highlight "Vegetables"
  }

  scene "Every vegetable declined" {
    title = "Bulgarian vegetable production collapsed across the board"
    description = "Production volume indexed to 2001 = 100"
    type = line-multi
    lineSymbols = false

    data {
      series = "Cabbages","Tomatoes","Watermelons","Carrots","Onions","Garlic","Strawberries"
      "2001" = 100,100,100,100,100,100,100
      "2002" = 79,90,124,64,106,95,100
      "2003" = 100,157,177,142,118,98,72
      "2004" = 84,87,83,245,124,138,74
      "2005" = 50,46,62,30,40,93,42
      "2006" = 52,78,113,95,56,80,56
      "2007" = 36,49,64,74,29,30,38
      "2008" = 47,49,66,97,44,29,55
      "2009" = 28,38,74,105,23,39,55
      "2010" = 57,42,51,76,53,57,37
      "2011" = 32,38,56,86,47,43,45
      "2012" = 34,34,46,69,29,43,31
      "2013" = 33,43,53,39,36,40,24
      "2014" = 31,44,28,69,37,8,27
      "2015" = 31,45,50,57,25,18,32
    }
  }

  scene "Jobs disappeared" {
    title = "Family farmers disappeared while salaried ag jobs held steady"
    description = "EU agricultural employment, thousands of full-time equivalents"
    type = line-multi
    lineSymbols = false

    data {
      series = "Salaried workers","Non-salaried workers"
      "2000" = 2678,12194
      "2001" = 2598,11586
      "2002" = 2658,10795
      "2003" = 2563,10609
      "2004" = 2560,9999
      "2005" = 2501,10047
      "2006" = 2499,9782
      "2007" = 2437,9231
      "2008" = 2416,8971
      "2009" = 2348,8672
      "2010" = 2335,7808
      "2011" = 2322,7551
      "2012" = 2325,7501
      "2013" = 2297,7425
      "2014" = 2366,7183
      "2015" = 2413,6928
      "2016" = 2457,6741
    }

    highlight "Non-salaried workers"
  }
}
`,Sr=`chart bar-horizontal {
  title = "China emits more CO₂ than the US and India combined"
  description = "Annual emissions in billion tonnes, 2023"
  source = "Our World in Data"
  sourceUrl = "https://ourworldindata.org/co2-emissions"
  byline = "Pierre Romera"

  data {
    "China" = 12.17
    "United States" = 4.92
    "India" = 3.06
    "Russia" = 1.73
    "Japan" = 0.99
    "Germany" = 0.59
  }

  scene "China spotlight" {
    title = "China alone emits more than the US and India together"
    highlight "China"
  }

  scene "India rising" {
    title = "India passed the EU to become the third-largest emitter"
    highlight "India"
  }

  scene "Japan declining" {
    title = "Japan's emissions have fallen since their 2013 peak"
    highlight "Japan"
  }

  scene "Per capita reframe" {
    title = "Per person, Gulf states dwarf the biggest emitters"
    description = "CO₂ emissions per capita, tonnes per person, 2023"
    highlight "Qatar"
    data {
      "Qatar" = 40.13
      "United Arab Emirates" = 19.77
      "United States" = 14.32
      "China" = 8.56
      "India" = 2.13
    }
  }
}
`,$r=`chart dot-plot {
  title = "CDU/CSU led German polls at 29 % ahead of the 2021 election"
  description = "How Germany would vote in the September 2021 federal election, according to polling in the previous June"
  source = "FG Wahlen"
  sourceUrl = "https://www.forschungsgruppe.de"
  note = "Margin of error at 10%: +/- 2 percentage points; at 40%: +/- 3 percentage points"
  dotStyle = "range"

  data {
    series = "Poll","High","Low"
    "CDU/CSU" = 29,32,27
    "Greens"  = 22,25,20
    "SPD"     = 14,16,12
    "AfD"     = 10,12,8
    "FDP"     = 10,12,8
    "Left"    = 7,9,5
  }
}
`,kr=`chart bar-grouped {
  title = "Asia Pacific holds more renewable capacity than all other regions combined"
  description = "Installed capacity in gigawatts (GW), 2023"
  source = "IRENA"
  sourceUrl = "https://www.irena.org/Publications/2024/Mar/Renewable-capacity-statistics-2024"
  colorPalette = "Folklore"

  data {
    series = "Solar","Wind","Hydro"
    "Asia Pacific"  = 870,520,650
    "Europe"        = 290,260,230
    "North America" = 150,170,200
    "Latin America" = 50,40,190
    "Africa"        = 12,9,40
  }
}
`,Tr=`chart scatter {
  title = "Richer countries live longer, but Nigeria lags far behind its wealth"
  description = "Life expectancy in years against GDP per capita (PPP, constant international dollars, log scale), 60 countries, bubble size is population in millions"
  source = "World Bank, World Development Indicators"
  sourceUrl = "https://databank.worldbank.org/source/world-development-indicators"
  horizontalScaleType = "log"
  trend = "overall"

  data {
    series = "GDP per capita","Life expectancy","Population","Region"
    "Argentina" = 26630, 76.8, 45.0, "Americas"
    "Australia" = 58049, 82.9, 25.3, "East Asia & Pacific"
    "Bangladesh" = 6838, 72.6, 164.9, "South Asia"
    "Bolivia" = 11931, 67.8, 11.7, "Americas"
    "Brazil" = 18019, 75.8, 207.5, "Americas"
    "Botswana" = 18106, 67.2, 2.3, "Sub-Saharan Africa"
    "Canada" = 57584, 82.2, 37.6, "Americas"
    "Switzerland" = 81695, 83.9, 8.6, "Europe & Central Asia"
    "Chile" = 28228, 80.3, 19.2, "Americas"
    "China" = 18821, 77.9, 1407.7, "East Asia & Pacific"
    "Cote d'Ivoire" = 5895, 60.3, 28.2, "Sub-Saharan Africa"
    "Colombia" = 17337, 76.8, 49.9, "Americas"
    "Costa Rica" = 23497, 80.3, 5.0, "Americas"
    "Germany" = 62950, 81.3, 83.1, "Europe & Central Asia"
    "Ecuador" = 13870, 77.3, 17.3, "Americas"
    "Egypt" = 15027, 71.2, 107.6, "Middle East, North Africa, Afghanistan & Pakistan"
    "Spain" = 46896, 83.8, 47.1, "Europe & Central Asia"
    "Ethiopia" = 2438, 65.7, 115.7, "Sub-Saharan Africa"
    "France" = 53449, 82.8, 67.4, "Europe & Central Asia"
    "United Kingdom" = 53374, 81.4, 66.6, "Europe & Central Asia"
    "Ghana" = 6508, 64.5, 31.3, "Sub-Saharan Africa"
    "Greece" = 33503, 81.6, 10.7, "Europe & Central Asia"
    "Guatemala" = 11466, 71.6, 17.1, "Americas"
    "Haiti" = 3362, 64.3, 11.1, "Americas"
    "Indonesia" = 12758, 70.3, 272.5, "East Asia & Pacific"
    "India" = 7702, 70.7, 1389.0, "South Asia"
    "Iran" = 14841, 76.9, 87.1, "Middle East, North Africa, Afghanistan & Pakistan"
    "Israel" = 44492, 82.8, 9.1, "Middle East, North Africa, Afghanistan & Pakistan"
    "Italy" = 49691, 83.5, 59.7, "Europe & Central Asia"
    "Jordan" = 10168, 76.9, 10.7, "Middle East, North Africa, Afghanistan & Pakistan"
    "Japan" = 46055, 84.4, 126.6, "East Asia & Pacific"
    "Kenya" = 5172, 62.9, 51.2, "Sub-Saharan Africa"
    "Cambodia" = 6449, 70.1, 16.5, "East Asia & Pacific"
    "South Korea" = 49791, 83.2, 51.8, "East Asia & Pacific"
    "Sri Lanka" = 14637, 76.7, 21.8, "South Asia"
    "Morocco" = 8768, 74.2, 36.2, "Middle East, North Africa, Afghanistan & Pakistan"
    "Mexico" = 21704, 74.5, 125.8, "Americas"
    "Malaysia" = 31301, 75.9, 33.4, "East Asia & Pacific"
    "Nigeria" = 8362, 53.0, 209.5, "Sub-Saharan Africa"
    "Norway" = 90773, 83.0, 5.3, "Europe & Central Asia"
    "New Zealand" = 47392, 82.1, 5.0, "East Asia & Pacific"
    "Pakistan" = 5296, 66.7, 230.8, "Middle East, North Africa, Afghanistan & Pakistan"
    "Peru" = 15461, 76.3, 32.4, "Americas"
    "Philippines" = 9452, 69.7, 110.8, "East Asia & Pacific"
    "Poland" = 38182, 77.9, 38.0, "Europe & Central Asia"
    "Portugal" = 40188, 81.7, 10.3, "Europe & Central Asia"
    "Romania" = 36399, 75.6, 19.4, "Europe & Central Asia"
    "Russia" = 37319, 73.1, 145.5, "Europe & Central Asia"
    "Rwanda" = 2754, 66.7, 12.8, "Sub-Saharan Africa"
    "Saudi Arabia" = 62648, 78.3, 30.1, "Middle East, North Africa, Afghanistan & Pakistan"
    "Senegal" = 4071, 67.7, 16.4, "Sub-Saharan Africa"
    "Sweden" = 61071, 83.1, 10.3, "Europe & Central Asia"
    "Thailand" = 21280, 77.2, 71.5, "East Asia & Pacific"
    "Turkey" = 28741, 77.7, 82.6, "Europe & Central Asia"
    "Tanzania" = 3485, 66.0, 59.2, "Sub-Saharan Africa"
    "Ukraine" = 17637, 73.9, 45.0, "Europe & Central Asia"
    "Uruguay" = 30011, 77.5, 3.4, "Americas"
    "United States" = 69121, 78.8, 330.2, "Americas"
    "Vietnam" = 11629, 74.2, 97.2, "East Asia & Pacific"
    "South Africa" = 14353, 66.1, 59.6, "Sub-Saharan Africa"  }

  highlight "Nigeria"

  annotation "Nigeria" {
    text = "17 years below the trend"
    showLine = true
    anchorDirection = SW
    textOffsetX = -60
    textOffsetY = 50
    lineStyle = elbow
    showArrow = false
    lineTargetDistance = 10
  }

  scene "1990" {
    title = "In 1990 the same countries were poorer and lived shorter lives"
    data {
      series = "GDP per capita","Life expectancy","Population","Region"
      "Argentina" = 17007, 71.6, 32.8, "Americas"
      "Australia" = 36268, 77.0, 17.1, "East Asia & Pacific"
      "Bangladesh" = 2070, 55.8, 111.6, "South Asia"
      "Bolivia" = 6247, 56.8, 7.1, "Americas"
      "Brazil" = 12633, 65.9, 149.1, "Americas"
      "Botswana" = 10521, 60.1, 1.3, "Sub-Saharan Africa"
      "Canada" = 40475, 77.4, 27.7, "Americas"
      "Switzerland" = 63921, 77.2, 6.7, "Europe & Central Asia"
      "Chile" = 10955, 73.7, 13.4, "Americas"
      "China" = 1667, 68.2, 1135.2, "East Asia & Pacific"
      "Cote d'Ivoire" = 5256, 52.8, 12.2, "Sub-Saharan Africa"
      "Colombia" = 9999, 68.7, 32.4, "Americas"
      "Costa Rica" = 10980, 76.1, 3.1, "Americas"
      "Germany" = 42355, 75.1, 79.4, "Europe & Central Asia"
      "Ecuador" = 9105, 68.4, 10.5, "Americas"
      "Egypt" = 8007, 62.5, 58.4, "Middle East, North Africa, Afghanistan & Pakistan"
      "Spain" = 31773, 76.8, 38.9, "Europe & Central Asia"
      "Ethiopia" = 874, 45.1, 47.6, "Sub-Saharan Africa"
      "France" = 38656, 76.6, 58.3, "Europe & Central Asia"
      "United Kingdom" = 33531, 75.9, 57.2, "Europe & Central Asia"
      "Ghana" = 2786, 55.4, 15.4, "Sub-Saharan Africa"
      "Greece" = 26916, 76.9, 10.2, "Europe & Central Asia"
      "Guatemala" = 7595, 61.8, 9.0, "Americas"
      "Haiti" = 3923, 53.2, 6.9, "Americas"
      "Indonesia" = 4873, 63.2, 183.5, "East Asia & Pacific"
      "India" = 2140, 58.6, 865.0, "South Asia"
      "Iran" = 9656, 64.1, 58.4, "Middle East, North Africa, Afghanistan & Pakistan"
      "Israel" = 25341, 76.6, 4.7, "Middle East, North Africa, Afghanistan & Pakistan"
      "Italy" = 42657, 77.0, 56.7, "Europe & Central Asia"
      "Jordan" = 8242, 70.1, 3.6, "Middle East, North Africa, Afghanistan & Pakistan"
      "Japan" = 36138, 78.8, 123.5, "East Asia & Pacific"
      "Kenya" = 4177, 58.3, 22.9, "Sub-Saharan Africa"
      "Cambodia" = 2646, 55.2, 7.4, "East Asia & Pacific"
      "South Korea" = 14378, 71.6, 42.9, "East Asia & Pacific"
      "Sri Lanka" = 4562, 69.2, 16.4, "South Asia"
      "Morocco" = 4419, 62.4, 24.4, "Middle East, North Africa, Afghanistan & Pakistan"
      "Mexico" = 17170, 69.0, 82.8, "Americas"
      "Malaysia" = 12014, 71.0, 17.8, "East Asia & Pacific"
      "Nigeria" = 5424, 45.7, 97.1, "Sub-Saharan Africa"
      "Norway" = 56608, 76.5, 4.2, "Europe & Central Asia"
      "New Zealand" = 30786, 75.4, 3.3, "East Asia & Pacific"
      "Pakistan" = 3200, 59.7, 116.2, "Middle East, North Africa, Afghanistan & Pakistan"
      "Peru" = 6316, 64.0, 22.0, "Americas"
      "Philippines" = 4504, 64.4, 62.9, "East Asia & Pacific"
      "Poland" = 12821, 70.9, 38.1, "Europe & Central Asia"
      "Portugal" = 27191, 74.0, 10.0, "Europe & Central Asia"
      "Romania" = 16317, 69.7, 23.2, "Europe & Central Asia"
      "Russia" = 29644, 68.9, 148.0, "Europe & Central Asia"
      "Rwanda" = 1166, 47.8, 7.4, "Sub-Saharan Africa"
      "Saudi Arabia" = 65197, 68.9, 10.6, "Middle East, North Africa, Afghanistan & Pakistan"
      "Senegal" = 2923, 56.7, 7.7, "Sub-Saharan Africa"
      "Sweden" = 40200, 77.5, 8.6, "Europe & Central Asia"
      "Thailand" = 8703, 68.9, 54.7, "East Asia & Pacific"
      "Turkey" = 12184, 67.8, 56.0, "Europe & Central Asia"
      "Tanzania" = 1794, 52.0, 26.1, "Sub-Saharan Africa"
      "Ukraine" = 22816, 70.4, 52.1, "Europe & Central Asia"
      "Uruguay" = 14061, 73.0, 3.1, "Americas"
      "United States" = 44384, 75.2, 249.6, "Americas"
      "Vietnam" = 2468, 69.0, 65.5, "East Asia & Pacific"
      "South Africa" = 10811, 62.9, 40.7, "Sub-Saharan Africa"    }
  }
}
`,Ar=`chart dot-plot {
  title = "Zimbabwe gained over 16 years of life expectancy since 2000, the United States under 1"
  description = "Life expectancy at birth in years, 2000 and 2022, for 10 countries"
  source = "World Bank, World Development Indicators"
  sourceUrl = "https://data.worldbank.org/indicator/SP.DYN.LE00.IN"
  arrows = "forward"
  sortMode = "gap"

  data {
    series = "2000","2022"
    "Zimbabwe" = 46.0, 62.4
    "Ethiopia" = 50.9, 66.9
    "Nigeria" = 47.1, 54.1
    "India" = 62.7, 71.7
    "Russia" = 65.5, 72.5
    "South Africa" = 58.4, 65.5
    "China" = 72.3, 78.2
    "Japan" = 81.1, 84.0
    "Germany" = 77.9, 80.6
    "United States" = 76.6, 77.4
  }
}
`;function Ye(e,t){let a=e.properties.find(n=>n.key===t);return a?String(a.value):""}function xr(e){if(!e.data)return"";let t=e.data.entries,a=t.find(n=>n.key==="series"&&!n.quotedKey);return a?[["category",...String(a.value).split(",")].join("	"),...t.filter(n=>!(n.key==="series"&&!n.quotedKey)).map(n=>{let r=String(n.value).split(",");return[n.key,...r].join("	")})].join(`
`):[["label","value"].join("	"),...t.map(n=>[n.key,String(n.value)].join("	"))].join(`
`)}function Cr(e){if(!e.data)return"";let t=e.data.entries,a=t.find(n=>n.key==="series"&&!n.quotedKey);return a?[`series = "${String(a.value)}"`,...t.filter(n=>!(n.key==="series"&&!n.quotedKey)).map(n=>`"${n.key}" = "${String(n.value)}"`)].join(`
`):t.map(n=>`"${n.key}" = ${String(n.value)}`).join(`
`)}function w(e,t){let a=xe(t);return{id:e,title:Ye(a,"title"),description:Ye(a,"description"),chartType:a.chartType,tsvData:xr(a),serializedData:Cr(a),dsl:t}}var si=[w("letter-frequency",ir),w("co2-emissions",or),w("coffee-production",mr),w("spoken-languages",sr),w("quarterly-revenue",lr),w("medal-count",cr),w("temperature-anomaly",ur),w("bitcoin-price",pr),w("unemployment-rates",dr),w("browser-market",gr),w("world-population",hr),w("stock-price-area",fr),w("energy-mix-stacked-area",yr),w("quarterly-stacked-columns",br),w("population-stacked-bar",vr),w("renewable-capacity",kr),w("farm-compass",wr),w("co2-emissions-story",Sr),w("life-expectancy-wealth",Tr),w("election-polls",$r),w("life-expectancy-gains",Ar)],Nr=class extends Error{constructor(e,t){super(e,t),this.name="ChartParseError"}},Er=class extends Error{constructor(e="PNG export is only available in Node. Use toSvg() in the browser."){super(e),this.name="PngBrowserUnsupportedError"}},li=class extends Error{constructor(e){super(e),this.name="MissingNodeRenderDepsError"}};function Pr(){return{kind:"dom",createContainer(e,t){let a=document.createElement("div");return a.style.cssText=`position:absolute;left:-99999px;top:0;width:${e}px;height:${t}px`,a.dataset.bcContentWidth=String(e),a.dataset.bcContentHeight=String(t),document.body.appendChild(a),{container:a,cleanup:()=>a.remove()}},renderToContainer(e,t,a){yt(e,t,{sceneIndex:a.sceneIndex,thumbnail:a.thumbnail??!1,transition:!1,theme:a.theme})},serializeSvg(e){var n;let t=e.querySelector(".bc-frame-body"),a=((n=t?t.querySelector("svg"):e.querySelector("svg"))==null?void 0:n.outerHTML)??"";if(!a)throw Error("dom-backend: renderToContainer produced no SVG");return a.includes('xmlns="http://www.w3.org/2000/svg"')?a:a.replace(/^<svg(?=\s|>)/,'<svg xmlns="http://www.w3.org/2000/svg"')},serializeFrame(e){let t=e.querySelector(".bc-frame");if(t)return t.outerHTML;if(e.querySelector("svg"))return this.serializeSvg(e);throw Error("dom-backend: renderToContainer produced no frame")},rasterizePng(){return Promise.reject(new Er)}}}var Mr={background:"#ffffff",color:"#333333"},zr={background:"#1c1c1c",color:"rgba(255, 255, 255, 0.9)"},Mt="sans-serif",Ze=20,Qe=14,D=12,Ae=1.25,Dr=4,Xe=8,Lr=12,Or=40,Fr="16px",et="Blueprint Chart",Ir="Source: ",Rr=" · ",Ur=.6;function zt(e){return e==="dark"?{...zr}:{...Mr}}function Br(){if(typeof document>"u")return null;try{return document.createElement("canvas").getContext("2d")}catch{return null}}function Gr(){let e=Br();return(t,a,n)=>{let r=t.length*a*Ur;return e?(e.font=`${n?"bold ":""}${a}px ${Mt}`,Math.max(e.measureText(t).width,r)):r}}function ae(e,t,a,n,r){let i=[];for(let o of e.split(`
`)){let s=o.split(/\s+/).filter(Boolean);if(s.length===0)continue;let c=s[0];for(let l of s.slice(1)){let u=`${c} ${l}`;r(u,a,n)<=t?c=u:(i.push(c),c=l)}i.push(c)}return i}function V(e,t,a){let n=a.top;for(let r of t)e.push({text:r,x:a.x,y:n+a.fontSize,fontSize:a.fontSize,fontWeight:a.fontWeight,fontStyle:a.fontStyle,fill:a.fill,anchor:a.anchor}),n+=a.fontSize*Ae;return n}function jr(e){let t=parseFloat(e)||0;return/r?em$/.test(e)?t*16:t}function qr(e){let t=e.frame??{},a=zt(e.theme),[n,r,i,o]=rn(t.padding??Fr).map(jr),s=Math.max(e.width-o-r,1),c=Gr(),l=[],u=n;t.title&&(u=V(l,ae(t.title,s,Ze,!0,c),{x:o,top:u,fontSize:Ze,fontWeight:"bold",fill:a.color})),t.description&&(u=V(l,ae(t.description,s,Qe,!1,c),{x:o,top:t.title?u+Dr:u,fontSize:Qe,fill:a.color}));let h=u,m=t.note?ae(t.note,s,D,!1,c):[],g=c(et,D,!1),y=[t.byline,t.source?Ir+t.source:""].filter(Boolean).join(Rr),d=y?ae(y,Math.max(s-g-Lr,1),D,!1,c):[],b=Math.max(d.length,1),T=m.length*D*Ae+Xe+b*D*Ae+i,C=Math.max(e.height-h-T,Or),N=h+C;return N=V(l,m,{x:o,top:N,fontSize:D,fontStyle:"italic",fill:a.color})+Xe,V(l,d,{x:o,top:N,fontSize:D,fill:a.color}),V(l,[et],{x:e.width-r,top:N,fontSize:D,fontWeight:"600",fill:a.color,anchor:"end"}),{width:e.width,height:e.height,plot:{x:o,y:h,width:s,height:C},blocks:l,background:t.transparentBackground?null:a.background,color:a.color,fontFamily:Mt}}function se(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function R(e){return se(e).replace(/"/g,"&quot;")}function Wr(e,t){return[`<text x="${e.x}" y="${e.y}" font-size="${e.fontSize}px"`,e.fontFamily?` font-family="${R(e.fontFamily)}"`:"",e.fontWeight?` font-weight="${R(e.fontWeight)}"`:"",e.fontStyle?` font-style="${R(e.fontStyle)}"`:"",e.anchor?` text-anchor="${e.anchor}"`:"",` fill="${R(e.fill??t.color)}">`,se(e.text),"</text>"].join("")}function Vr(e,t,a){return[`<svg xmlns="http://www.w3.org/2000/svg" width="${e.width}" height="${e.height}"`,` viewBox="0 0 ${e.width} ${e.height}" role="img" aria-label="${R(a.label)}"`,` font-family="${R(e.fontFamily)}" color="${R(e.color)}">`,`<title>${se(a.label)}</title>`,`<desc>${se(a.description)}</desc>`,e.background?`<rect width="100%" height="100%" fill="${R(e.background)}"></rect>`:"",...e.blocks.map(n=>Wr(n,e)),`<g transform="translate(${e.plot.x},${e.plot.y})">${t}</g>`,"</svg>"].join("")}var Hr=640,_r=400;function Jr(){return typeof document<"u"&&typeof document.createElement=="function"}async function Kr(){return Jr()?Pr():(await Lt(async()=>{const{createNodeBackend:e}=await import("@blueprint-chart/lib/internal/node-backend");return{createNodeBackend:e}},[])).createNodeBackend()}async function ci(e,t={}){let a;try{a=mt(xe(e))}catch(d){throw new Nr(d instanceof Error?d.message:String(d),{cause:d})}let n=await Kr(),r=t.frame??!0,i={sceneIndex:t.scene,width:t.width??Hr,height:t.height??_r};function o(d,b){let{background:T,color:C}=zt(b);d.style.backgroundColor=T,d.style.setProperty("--bc-text-color",C)}let s=t.theme==="auto"?void 0:t.theme,c=s?null:Jt();function l(d){return s??d??(c!=null&&c.matches?"dark":void 0)}function u(d,b,T){n.renderToContainer(d,a,{sceneIndex:T,thumbnail:b,theme:l(Se(a,T).theme)})}let h=new Map;function m(){h.forEach((d,b)=>{b.isConnected?u(b,!r,d):h.delete(b)}),h.size||(c==null||c.removeEventListener("change",m))}function g(d){let b=d.width??i.width,T=d.height??i.height,C=Se(a,i.sceneIndex),N=l(C.theme);if(!r){let{container:U,cleanup:Dt}=n.createContainer(b,T);try{return o(U,N),u(U,!0,i.sceneIndex),n.serializeSvg(U)}finally{Dt()}}let W=qr({width:b,height:T,frame:C.frame,theme:N}),{container:v,cleanup:k}=n.createContainer(W.plot.width,W.plot.height);try{o(v,N),u(v,!0,i.sceneIndex);let U=ft(C.chartType,C.frame,C.data);return Vr(W,n.serializeSvg(v),U)}finally{k()}}let y={async toSvg(d={}){return g(d)},async toHtml(d={}){let{container:b,cleanup:T}=n.createContainer(d.width??i.width,d.height??i.height);try{return u(b,!r,i.sceneIndex),n.serializeFrame(b)}finally{T()}},async toPng(d={}){let b=g(d);return n.rasterizePng(b,{width:d.width??i.width,height:d.height??i.height})},mount(d){if(n.kind!=="dom")return console.warn("Blueprint Chart: mount() is a no-op outside a browser environment."),y;let b=typeof d=="string"?document.querySelector(d):d;if(!b)throw Error(`Blueprint Chart: mount target "${String(d)}" not found`);return u(b,!r,i.sceneIndex),c&&!h.size&&c.addEventListener("change",m),h.set(b,i.sceneIndex),y},scene(d){return i.sceneIndex=d,y}};return y}export{Zt as ANNOTATION_KIND_KEYWORD,di as Anchor,j as AnnotationKind,hi as AnnotationLineStyle,mi as ArrowDirection,gi as AxisDirection,fi as BC_TRANSITION_NAME,Yt as ChartOptionType,Nr as ChartParseError,ne as ChartType,yi as CompassDirection,bi as CrosshairDirection,vi as CrosshairStyle,wi as DEFAULT_BAR_GAP,Si as DEFAULT_COLORS,$i as DEFAULT_SCENE_DURATION,ki as DirectLabelMode,sn as DotStyle,Ti as DslNodeType,O as FilterCondition,Ai as FrameSizing,xi as GridStyle,Ci as Interpolation,Ht as LabelPosition,Ni as LabelRotation,Ei as LegendPosition,Pi as LineStyle,Mi as MAPPING_NONE,li as MissingNodeRenderDepsError,Qr as NULL_VALUE,zi as Orientation,f as ParseOperationCategory,Er as PngBrowserUnsupportedError,Di as RESIZE_MESSAGE,Li as RangeAnchor,Oi as SCENE_DURATION_MAX,Fi as SCENE_DURATION_MIN,on as ScaleType,Ii as SceneTransition,ye as SortDirection,ce as SortMode,Ri as StackMode,Ui as StrokeStyle,Gt as SymbolShape,Bt as SymbolShowOn,Ut as SymbolStyle,pe as TRANSFORM_TYPES,Bi as TickPosition,L as TransformType,Gi as ValueLabelPosition,Le as adjustColorsForBackground,Zn as applyTransformNodes,Qn as applyTransformNodesToChartData,dt as applyTransformSteps,mt as astToDefinition,Sn as buildChartOptions,Vr as buildFrameSvg,ji as buildSrcdoc,Yn as chartDataToTable,ni as checkCvdColors,ya as classifyIntent,_n as cleanNumericValue,Vt as commitFadeOut,ii as compactSerialize,ri as compactSerializeDeep,nt as convertAnnotations,at as convertAreaFills,it as convertColorizes,rt as convertHighlights,tt as convertSeriesOverrides,qi as createCanvas,ti as createCvdSvgFilter,Wi as createFrame,Vi as createPlayback,le as dataEntriesToString,ut as detectColumnTypes,Hi as detectRangeColumn,be as extractChartTypeOptions,_i as extractSceneOverrides,Wt as fadeIn,Ji as featureJoin,Ki as getCachedChart,Ot as getChart,q as getChartOptions,st as getChartTypeDefaults,$a as getCvdFilterId,Mn as getOutputType,te as getSceneTransition,Yi as getTransitionDuration,Hn as isDateValue,Jn as isNumberValue,Zi as isSeriesHidden,Pn as isTypeCompatible,ve as listCharts,Qi as listPalettes,Kt as listThemes,ln as numericColumns,Xi as onceVisible,xe as parse,Kn as parseBpcData,J as parseData,ct as parseOperationMap,En as parseOperations,eo as prefersReducedMotion,B as propertyMap,S as quoteDslString,to as readPlaybackSettings,ei as recommendCharts,no as registerChart,ci as render,Xr as renderBpc,yt as renderChart,ao as renderHorizontalAxis,ro as renderLegend,io as renderVerticalAxis,It as resolveBackgroundColor,oo as resolveBarGapPadding,Fe as resolveChartTypeOptions,nn as resolveDotPlotMapping,jt as resolvePalette,Qt as resolveScatterMapping,Se as resolveScene,so as resolveSeriesColor,lo as resolveSeriesInterpolation,si as samples,ai as serialize,pt as serializeTableData,va as shapeOf,Ta as simulateCvdColor,qt as snapshotForFadeOut,co as snapshotLiveAttrs,ue as stripDigitGroupSpaces,De as toBool,ht as transformNodesToSteps,Fn as transformValue,oi as validateChart,uo as wcagContrastRatio,po as wcagLevel};
