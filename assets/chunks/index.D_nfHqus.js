import{c3 as qt}from"./framework.DIuqJViG.js";import{a as f,G as O,L as K,Q as U,t as q,P as ye,n as ue,p as at,f as rt,u as Te,l as ot,c as it,s as st,T as Ae,K as W,w as Ie,S as Fe,C as ae,X as Ce,Y as re,b as Wt,z as Vt,d as _t,j as Kt,x as S,e as I,Z as Re,N as Jt,M as Yt,g as Zt,k as Qt,h as be,i as j,$ as Xt,m as en,o as tn,q as nn,r as an,v as xe,y as rn,A as on,W as sn,B as ve,F as P,_ as oe,O as H,U as ln,H as cn,I as un,J as dn,R as pn,a0 as hn,a1 as mn,a2 as gn,a3 as fn,a4 as yn,a5 as bn,a6 as vn,a7 as wn,a8 as Sn}from"./runtime-Ol__il7z.B7hYd-hv.js";import{a9 as To,aa as Ao,ab as Co,ac as xo,ad as No,ae as Eo,af as Po,ag as Mo,ah as zo,ai as Lo,aj as Do,ak as Oo,al as Io,am as Fo,an as Ro,ao as Uo,ap as Bo,aq as Go,ar as jo,as as Ho,at as qo,au as Wo,av as Vo,aw as _o,ax as Ko,ay as Jo,az as Yo,aA as Zo,aB as Qo,aC as Xo,aD as ei,aE as ti,V as ni,aF as ai,aG as ri,aH as oi,aI as ii,aJ as si,aK as li,aL as ci,aM as ui,aN as di,aO as pi,aP as hi,aQ as mi,aR as gi,aS as fi,aT as yi,aU as bi,aV as vi,aW as wi,aX as Si,aY as $i,aZ as ki,a_ as Ti,a$ as Ai}from"./runtime-Ol__il7z.B7hYd-hv.js";function se(e){let t=(e??"").trim();return t&&rn(t)!==void 0?t:void 0}function lt(e){let t=(e??"").split(/[\s,]+/).filter(Boolean).map(Number).filter(Number.isFinite);return t.length?t:void 0}function $n(e){let t=lt(e.verticalTickValues);if(!(e.showVerticalTicks!==void 0||e.verticalGridStyle!==void 0||e.verticalNumberFormat!==void 0||e.showVerticalAxis!==void 0||e.verticalAxisDirection!==void 0||e.verticalScaleType!==void 0||e.verticalLabelPosition!==void 0||e.verticalRangeMin||t||e.verticalRangeMax))return{};let n={};e.showVerticalTicks!==void 0&&(n.showTicks=e.showVerticalTicks),e.verticalAxisDirection!==void 0&&(n.direction=e.verticalAxisDirection),e.verticalGridStyle!==void 0&&(n.gridStyle=e.verticalGridStyle),e.verticalNumberFormat!==void 0&&(n.numberFormat=e.verticalNumberFormat),e.showVerticalAxis!==void 0&&(n.showAxis=e.showVerticalAxis),e.verticalScaleType!==void 0&&(n.scaleType=e.verticalScaleType),e.verticalLabelPosition!==void 0&&(n.labelPosition=e.verticalLabelPosition);let a=se(e.verticalRangeMin),r=se(e.verticalRangeMax);return(a!==void 0||r!==void 0)&&(n.range={},a!==void 0&&(n.range.min=a),r!==void 0&&(n.range.max=r)),t&&(n.ticks=t),{verticalAxis:n}}function kn(e){let t=lt(e.horizontalTickValues);if(!(e.showHorizontalTicks!==void 0||e.horizontalGridStyle!==void 0||e.horizontalNumberFormat!==void 0||e.showHorizontalAxis!==void 0||e.horizontalScaleType!==void 0||e.horizontalLabelPosition!==void 0||e.horizontalLabelRotation!==void 0||e.horizontalRangeMin||t||e.horizontalRangeMax))return{};let n={};e.showHorizontalTicks!==void 0&&(n.showTicks=e.showHorizontalTicks),e.horizontalGridStyle!==void 0&&(n.gridStyle=e.horizontalGridStyle),e.horizontalNumberFormat!==void 0&&(n.numberFormat=e.horizontalNumberFormat),e.showHorizontalAxis!==void 0&&(n.showAxis=e.showHorizontalAxis),e.horizontalScaleType!==void 0&&(n.scaleType=e.horizontalScaleType),e.horizontalLabelPosition!==void 0&&(n.labelPosition=e.horizontalLabelPosition),e.horizontalLabelRotation!==void 0&&(n.labelRotation=e.horizontalLabelRotation);let a=se(e.horizontalRangeMin),r=se(e.horizontalRangeMax);return(a!==void 0||r!==void 0)&&(n.range={},a!==void 0&&(n.range.min=a),r!==void 0&&(n.range.max=r)),t&&(n.ticks=t),{horizontalAxis:n}}var Tn=new Set("colors.colorPalette.autoContrast.crosshairDirection.crosshairStyle.crosshairColor.lineSymbols.lineSymbolShape.lineSymbolShowOn.lineSymbolStyle.lineSymbolSize.lineSymbolOpacity.showVerticalTicks.showVerticalAxis.verticalAxisDirection.verticalGridStyle.verticalNumberFormat.verticalScaleType.verticalLabelPosition.verticalRangeMin.verticalRangeMax.verticalTickValues.showHorizontalTicks.showHorizontalAxis.horizontalGridStyle.horizontalNumberFormat.horizontalScaleType.horizontalLabelPosition.horizontalLabelRotation.horizontalRangeMin.horizontalRangeMax.horizontalTickValues.sliceMax.barGap.valueLabelEvery.connectionsOpacity.areaFillOpacity".split("."));function An(e,t){if(!t)return{};let n={};for(let{key:a}of W(t)){let r=e[a];r!==void 0&&!Tn.has(a)&&(n[a]=r)}return n}function Cn(e,t){let n={},a=Qt(e.colorPalette);return a?n.colors=a:e.colors&&e.colors.length>0&&(n.colors=e.colors),e.autoContrast&&t&&n.colors&&(n.colors=be(n.colors,t)),e.autoContrast&&t&&e.negativeColor&&(n.negativeColor=be([e.negativeColor],t)[0]),e.allowDarkMode!==void 0&&(n.allowDarkMode=e.allowDarkMode),n}function xn(e){let t={};return e.legend!==void 0&&(t.legend=e.legend),e.legendPosition!==void 0&&(t.legendPosition=e.legendPosition),e.legendAnchor!==void 0&&(t.legendAnchor=e.legendAnchor),e.directLabelling!==void 0&&(t.directLabelling=e.directLabelling),e.directLabelAnchor!==void 0&&(t.directLabelAnchor=e.directLabelAnchor),t}function Nn(e){return e.lineSymbols?{lineSymbols:{symbol:e.lineSymbolShape??Zt.Circle,showOn:e.lineSymbolShowOn??Yt.FirstLast,style:e.lineSymbolStyle??Jt.Filled,size:parseFloat(e.lineSymbolSize??"3.5")||3.5,opacity:parseFloat(e.lineSymbolOpacity??"1")||1}}:{}}function En(e,t,n){let a={...An(e,n),...Cn(e,t),...xn(e),...$n(e),...kn(e),...Nn(e)};e.interpolation!==void 0&&(a.interpolation=e.interpolation),e.valueLabels!==void 0&&(a.valueLabels=e.valueLabels),e.valueLabelPosition!==void 0&&(a.valueLabelPosition=e.valueLabelPosition),e.tooltips!==void 0&&(a.tooltips=e.tooltips),e.crosshair!==void 0&&(a.crosshair=e.crosshair),e.crosshairDirection&&(a.crosshairDirection=e.crosshairDirection),e.crosshairStyle&&(a.crosshairStyle=e.crosshairStyle),e.crosshairColor&&(a.crosshairColor=e.crosshairColor),e.displayAsPercentage!==void 0&&(a.displayAsPercentage=e.displayAsPercentage),e.showTotal!==void 0&&(a.showTotal=e.showTotal),e.centerLabel&&(a.centerLabel=e.centerLabel),e.centerSlice!==void 0&&(a.centerSlice=e.centerSlice),e.centerText!==void 0&&(a.centerText=e.centerText),e.totalLabel!==void 0&&(a.totalLabel=e.totalLabel),e.showLabels!==void 0&&(a.showLabels=e.showLabels),e.showValues!==void 0&&(a.showValues=e.showValues),e.swapLabelValue!==void 0&&(a.swapLabelValue=e.swapLabelValue);let r=parseInt(e.valueLabelEvery??"",10);r>0&&(a.valueLabelEvery=r);let o=parseInt(e.sliceMax??"",10);!isNaN(o)&&o>0&&(a.sliceMax=o),e.sliceGroupLabel!==void 0&&(a.sliceGroupLabel=e.sliceGroupLabel),e.barBackground!==void 0&&(a.barBackground=e.barBackground),e.barSeparators!==void 0&&(a.barSeparators=e.barSeparators);let i=parseFloat(e.barGap??"");isNaN(i)||(a.barGap=Math.max(0,Math.min(100,i))),e.connectedColumns!==void 0&&(a.connectedColumns=e.connectedColumns);let s=parseFloat(e.connectionsOpacity??"");isNaN(s)||(a.connectionsOpacity=Math.max(0,Math.min(1,s))),e.stackMode!==void 0&&(a.stackMode=e.stackMode),e.stacked!==void 0&&(a.stacked=e.stacked),e.stackPercent!==void 0&&(a.stackPercent=e.stackPercent),e.areaSortMode!==void 0&&(a.areaSortMode=e.areaSortMode),e.areaLines!==void 0&&(a.areaLines=e.areaLines);let c=parseFloat(e.areaFillOpacity??"");return isNaN(c)||(a.areaFillOpacity=c),e.edgePadding!==void 0&&(a.edgePadding=e.edgePadding),e.connectGaps!==void 0&&(a.connectGaps=e.connectGaps),e.waterfall!==void 0&&(a.waterfall=e.waterfall),e.waterfallTotal!==void 0&&(a.waterfallTotal=e.waterfallTotal),e.categoryLabelLine!==void 0&&(a.categoryLabelLine=e.categoryLabelLine),a}function he(e,t){return e===void 0||!j.valid(e)?e:be([e],t)[0]}function Pn(e,t,n){return!t.autoContrast||!n?e:e.map(a=>{let r=he(a.color,n),o=he(a.aboveColor,n),i=he(a.belowColor,n);return{...a,color:r,aboveColor:o,belowColor:i}})}var me=Object.create(null);function ct(e){if(!me[e]){let t={};for(let n of W(e))n.default!==void 0&&(t[n.key]=n.default);me[e]=t}return{...me[e]}}function ut(e,t){var a;let n=ct(e);return(a=t.colors)!=null&&a.length?{...n,colorPalette:void 0,...t}:{...n,...t}}function Mn(e,t,n){if(!n&&t!==I.Equals&&t!==I.NotEquals)return!0;switch(t){case I.Equals:return e===n;case I.NotEquals:return e!==n;case I.Contains:return e.toLowerCase().includes(n.toLowerCase());case I.GreaterThan:{let a=Number(e.replace(/[,%$€£¥₹]/g,"").trim()),r=Number(n);return!Number.isNaN(a)&&!Number.isNaN(r)&&a>r}case I.LessThan:{let a=Number(e.replace(/[,%$€£¥₹]/g,"").trim()),r=Number(n);return!Number.isNaN(a)&&!Number.isNaN(r)&&a<r}default:return!0}}function zn(e,t){let n=e.columns.indexOf(t.column);if(n<0||!t.column)return e;let a=e.rows.filter(r=>Mn(r[n]??"",t.condition??I.Equals,t.value??""));return{...e,rows:a}}function _(e){return Number(Ae(e).replace(/[,%$€£¥₹]/g,"").trim())||0}function Ln(e,t,n){return n==="number"?_(e)-_(t):n==="date"?(Date.parse(e)||0)-(Date.parse(t)||0):e.localeCompare(t)}function Ne(e){return e.columns?e.columns.split(",").map(t=>t.trim()).filter(Boolean):e.column?[e.column]:[]}var dt={sum:e=>e.reduce((t,n)=>t+n,0),avg:e=>e.reduce((t,n)=>t+n,0)/e.length,min:e=>Math.min(...e),max:e=>Math.max(...e)};function Dn(e,t){return e.split(",").map(n=>n.trim()).filter(Boolean).map(n=>{let a=n.lastIndexOf(":");if(a<0)return null;let r=n.slice(0,a),o=n.slice(a+1);if(o!=="count"&&!dt[o])return null;let i=o==="count"?-1:t.indexOf(r);return o!=="count"&&i<0?null:{col:r,fn:o,colIndex:i}}).filter(n=>n!==null)}function On(e,t,n){if(e==="count")return String(t.length);let a=t.map(r=>_(r[n]??""));return String(dt[e](a))}function In(e,t){let n=Ne({columns:t.groupColumns}).map(o=>e.columns.indexOf(o)).filter(o=>o>=0);if(n.length===0||!t.aggregates)return e;let a=Dn(t.aggregates,e.columns);if(a.length===0)return e;let r=new Map;for(let o of e.rows){let i=n.map(l=>o[l]??""),s=i.join("\0"),c=r.get(s);c?c.rows.push(o):r.set(s,{key:i,rows:[o]})}return{columns:[...n.map(o=>e.columns[o]),...a.map(o=>`${o.col}_${o.fn}`)],columnTypes:[...n.map(o=>e.columnTypes[o]),...a.map(()=>"number")],rows:[...r.values()].map(({key:o,rows:i})=>[...o,...a.map(s=>On(s.fn,i,s.colIndex))])}}function Fn(e,t){let n=Ne(t);if(n.length===0)return e;let a=e.columns.map((r,o)=>n.includes(r)?-1:o).filter(r=>r>=0);return a.length===e.columns.length?e:{columns:a.map(r=>e.columns[r]),rows:e.rows.map(r=>a.map(o=>r[o])),columnTypes:a.map(r=>e.columnTypes[r])}}var T=["string","number","date"],Rn=[{id:"to-number",label:"To Number",description:"Strip non-numeric characters and convert to number",category:f.Type,accepts:T,outputType:"number"},{id:"to-string",label:"To String",description:"Keep value as plain text",category:f.Type,accepts:T,outputType:"string"},{id:"to-date",label:"To Date",description:"Parse text into an ISO date",category:f.Type,accepts:T,outputType:"date"},{id:"to-boolean",label:"To Boolean",description:"Map yes/no, true/false, 1/0 to boolean",category:f.Type,accepts:T,outputType:"string"},{id:"parse-json",label:"Parse JSON",description:"Parse JSON string and optionally extract a key",category:f.Type,accepts:["string"],outputType:"string",params:["key"]},{id:"trim",label:"Trim",description:"Remove leading and trailing whitespace",category:f.String,accepts:T,outputType:"string"},{id:"lowercase",label:"Lowercase",description:"Convert all characters to lowercase",category:f.String,accepts:T,outputType:"string"},{id:"uppercase",label:"Uppercase",description:"Convert all characters to uppercase",category:f.String,accepts:T,outputType:"string"},{id:"title-case",label:"Title Case",description:"Capitalize the first letter of each word",category:f.String,accepts:T,outputType:"string"},{id:"slugify",label:"Slugify",description:"Lowercase and replace non-alphanumeric with hyphens",category:f.String,accepts:T,outputType:"string"},{id:"regex-replace",label:"Regex Replace",description:"Find and replace using a regular expression",category:f.String,accepts:T,outputType:"string",params:["pattern","replacement"]},{id:"extract",label:"Extract Substring",description:"Extract a portion of text by character position",category:f.String,accepts:T,outputType:"string",params:["start","end"]},{id:"pad-start",label:"Pad Start",description:"Pad the beginning to a fixed length",category:f.String,accepts:T,outputType:"string",params:["length","char"]},{id:"pad-end",label:"Pad End",description:"Pad the end to a fixed length",category:f.String,accepts:T,outputType:"string",params:["length","char"]},{id:"remove-diacritics",label:"Remove Diacritics",description:"Strip accents and diacritical marks",category:f.String,accepts:T,outputType:"string"},{id:"split",label:"Split into Columns",description:"Split values by a separator into new columns",category:f.String,accepts:T,outputType:"string",params:["separator","limit"]},{id:"round",label:"Round",description:"Round to a number of decimal places",category:f.Numeric,accepts:["number"],outputType:"number",params:["decimals"]},{id:"floor",label:"Floor",description:"Round down to the nearest integer",category:f.Numeric,accepts:["number"],outputType:"number"},{id:"ceil",label:"Ceiling",description:"Round up to the nearest integer",category:f.Numeric,accepts:["number"],outputType:"number"},{id:"abs",label:"Absolute Value",description:"Remove the sign (make positive)",category:f.Numeric,accepts:["number"],outputType:"number"},{id:"clamp",label:"Clamp",description:"Constrain values between a min and max",category:f.Numeric,accepts:["number"],outputType:"number",params:["min","max"]},{id:"log",label:"Logarithm",description:"Natural log — compress wide-range values for charting",category:f.Numeric,accepts:["number"],outputType:"number"},{id:"exp",label:"Exponential",description:"Raise e to the power of each value",category:f.Numeric,accepts:["number"],outputType:"number"},{id:"normalize",label:"Normalize (0–1)",description:"Scale values to 0–1 range for cross-series comparison",category:f.Numeric,accepts:["number"],outputType:"number"},{id:"standardize",label:"Standardize (z-score)",description:"Center around mean, scale by std deviation",category:f.Numeric,accepts:["number"],outputType:"number"},{id:"bin",label:"Bin/Bucket",description:"Group values into fixed-size buckets",category:f.Numeric,accepts:["number"],outputType:"number",params:["size"]},{id:"extract-year",label:"Extract Year",description:"Get the four-digit year as a number",category:f.Date,accepts:["date"],outputType:"number"},{id:"extract-month",label:"Extract Month",description:"Get the month (1–12) as a number",category:f.Date,accepts:["date"],outputType:"number"},{id:"extract-day",label:"Extract Day",description:"Get the day of the month as a number",category:f.Date,accepts:["date"],outputType:"number"},{id:"extract-weekday",label:"Extract Weekday",description:"Get the day name (Monday, Tuesday, …)",category:f.Date,accepts:["date"],outputType:"string"},{id:"extract-hour",label:"Extract Hour",description:"Get the hour (0–23) as a number",category:f.Date,accepts:["date"],outputType:"number"},{id:"shift-date",label:"Shift Date",description:"Add or subtract days, months, or years",category:f.Date,accepts:["date"],outputType:"date",params:["amount","unit"]},{id:"truncate-date",label:"Truncate to Period",description:"Round down to start of week, month, quarter, or year",category:f.Date,accepts:["date"],outputType:"date",params:["period"]},{id:"date-diff",label:"Duration Since",description:"Days between each date and a reference date",category:f.Date,accepts:["date"],outputType:"number",params:["reference"]}],pt=new Map(Rn.map(e=>[e.id,e]));function Un(e,t){let n=pt.get(e);return n?n.accepts.includes(t):!1}function Bn(e){var t;return((t=pt.get(e))==null?void 0:t.outputType)??"string"}function L(e,t){let n=parseFloat(e);if(Number.isNaN(n))return e;let a=t(n);return Number.isNaN(a)?e:String(a)}function E(e,t){let n=new Date(e);return Number.isNaN(n.getTime())?e:t(n)}function Gn(e,t,n){switch(t){case"to-number":{let a=Number(e.replace(/[^0-9.\-+eE]/g,""));return Number.isNaN(a)?"":String(a)}case"to-string":return e;case"to-date":return E(e,a=>a.toISOString());case"to-boolean":{let a=e.toLowerCase().trim();return["true","1","yes","on","y"].includes(a)?"true":["false","0","no","off","n",""].includes(a)?"false":e}case"parse-json":try{let a=JSON.parse(e);return n.key?String(a[n.key]??""):JSON.stringify(a)}catch{return e}default:return e}}function jn(e,t,n){switch(t){case"trim":return e.trim();case"lowercase":return e.toLowerCase();case"uppercase":return e.toUpperCase();case"title-case":return e.replace(/\w\S*/g,a=>a.charAt(0).toUpperCase()+a.slice(1).toLowerCase());case"slugify":return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");case"regex-replace":if(!n.pattern)return e;try{return e.replace(new RegExp(n.pattern,"g"),n.replacement??"")}catch{return e}case"extract":return e.slice(Number(n.start)||0,n.end?Number(n.end):void 0);case"pad-start":return e.padStart(Number(n.length)||0,n.char||" ");case"pad-end":return e.padEnd(Number(n.length)||0,n.char||" ");case"remove-diacritics":return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"");default:return e}}function Hn(e,t,n){switch(t){case"round":{let a=10**(Number(n.decimals)||0);return L(e,r=>Math.round(r*a)/a)}case"floor":return L(e,Math.floor);case"ceil":return L(e,Math.ceil);case"abs":return L(e,Math.abs);case"clamp":{let a=n.min?Number(n.min):-1/0,r=n.max?Number(n.max):1/0;return L(e,o=>Math.min(Math.max(o,a),r))}case"log":return L(e,a=>a>0?Math.log(a):NaN);case"exp":return L(e,Math.exp);case"bin":{let a=Number(n.size)||1;return L(e,r=>Math.floor(r/a)*a)}default:return e}}function qn(e,t,n){switch(t){case"extract-year":return E(e,a=>String(a.getFullYear()));case"extract-month":return E(e,a=>String(a.getMonth()+1));case"extract-day":return E(e,a=>String(a.getDate()));case"extract-weekday":return E(e,a=>a.toLocaleDateString("en",{weekday:"long"}));case"extract-hour":return E(e,a=>String(a.getHours()));case"shift-date":return E(e,a=>{let r=Number(n.amount)||0,o=n.unit||"days";return o==="years"?a.setFullYear(a.getFullYear()+r):o==="months"?a.setMonth(a.getMonth()+r):a.setDate(a.getDate()+r),a.toISOString()});case"truncate-date":return E(e,a=>{let r=n.period||"month";return r==="year"?new Date(a.getFullYear(),0,1).toISOString():r==="quarter"?new Date(a.getFullYear(),Math.floor(a.getMonth()/3)*3,1).toISOString():r==="month"?new Date(a.getFullYear(),a.getMonth(),1).toISOString():(r==="week"&&(a.setDate(a.getDate()-a.getDay()),a.setHours(0,0,0,0)),a.toISOString())});case"date-diff":{let a=new Date(n.reference||new Date().toISOString());return Number.isNaN(a.getTime())?e:E(e,r=>String(Math.round((r.getTime()-a.getTime())/864e5)))}default:return e}}function Wn(e,t,n){return t.startsWith("to-")||t==="parse-json"?Gn(e,t,n):new Set(["round","floor","ceil","abs","clamp","log","exp","bin"]).has(t)?Hn(e,t,n):t.startsWith("extract-")||t.startsWith("shift-")||t.startsWith("truncate-")||t==="date-diff"?qn(e,t,n):jn(e,t,n)}var co="";function Vn(e,t){let n=e.rows.map(a=>{let r=[...a];return r[t]="",r});return{columns:[...e.columns],rows:n,columnTypes:[...e.columnTypes]}}function _n(e,t,n){let a=n.separator||",",r=n.limit?Number(n.limit):void 0,o=0,i=e.rows.map(u=>{let p=u[t].split(a),y=r?p.slice(0,r):p;return o=Math.max(o,y.length),y}),s=[...e.columns],c=[...e.columnTypes],l=[];for(let u=0;u<o;u++)l.push(`${n.column}_${u+1}`);return s.splice(t,1,...l),c.splice(t,1,...Array(o).fill("string")),{columns:s,rows:e.rows.map((u,p)=>{let y=i[p],m=[...u],g=[...y,...Array(o-y.length).fill("")];return m.splice(t,1,...g),m}),columnTypes:c}}function Kn(e,t,n){let a=e.rows.map(i=>parseFloat(i[t])).filter(i=>!Number.isNaN(i));if(a.length===0)return e;let r=e.rows.map(i=>[...i]),o=[...e.columnTypes];if(o[t]="number",n==="normalize"){let i=Math.min(...a),s=Math.max(...a)-i;for(let c of r){let l=parseFloat(c[t]);c[t]=Number.isNaN(l)?c[t]:String(s===0?0:(l-i)/s)}}else{let i=a.reduce((l,u)=>l+u,0)/a.length,s=a.reduce((l,u)=>l+(u-i)**2,0)/a.length,c=Math.sqrt(s);for(let l of r){let u=parseFloat(l[t]);l[t]=Number.isNaN(u)?l[t]:String(c===0?0:(u-i)/c)}}return{columns:[...e.columns],rows:r,columnTypes:o}}function Jn(e,t){let n=e.columns.indexOf(t.column);if(n<0||!t.column||!t.operation)return e;let a=t.operation,r=e.columnTypes[n];if(!Un(a,r))return Vn(e,n);if(a==="split")return _n(e,n,t);if(a==="normalize"||a==="standardize")return Kn(e,n,a);let o=e.rows.map(s=>[...s]);for(let s of o)s[n]=Wn(s[n],a,t);let i=[...e.columnTypes];return i[n]=Bn(a),{columns:[...e.columns],rows:o,columnTypes:i}}function Yn(e,t){let n=e.columns.indexOf(t.column);if(n<0||!t.column||!t.newName)return e;let a=[...e.columns];return a[n]=t.newName,{...e,columns:a}}function Zn(e,t){let n=Ne(t);if(n.length===0)return e;let a=n.map(s=>e.columns.indexOf(s)).filter(s=>s>=0);if(a.length===0)return e;let r=t.direction===ye.Descending?-1:1,o=t.operation;if(o&&a.length>1){let s=[...e.rows].sort((c,l)=>{let u=a.map(g=>_(c[g]??"")),p=a.map(g=>_(l[g]??"")),y,m;return o==="avg"?(y=u.reduce((g,d)=>g+d,0)/u.length,m=p.reduce((g,d)=>g+d,0)/p.length):(y=u.reduce((g,d)=>g+d,0),m=p.reduce((g,d)=>g+d,0)),r*(y-m)});return{...e,rows:s}}let i=[...e.rows].sort((s,c)=>{for(let l of a){let u=e.columnTypes[l]??"string",p=Ln(s[l]??"",c[l]??"",u);if(p!==0)return r*p}return 0});return{...e,rows:i}}function Qn(e){if(e.rows.length===0||e.columns.length===0)return e;let t=["Field",...e.rows.map(r=>r[0]??"")],n=[],a=["string"];for(let r=1;r<e.columns.length;r++){let o=[e.columns[r]];for(let i=0;i<e.rows.length;i++)o.push(e.rows[i][r]??"");n.push(o)}for(let r=0;r<e.rows.length;r++){let o=n.map(i=>i[r+1]??"").filter(i=>i.length>0);o.length>0&&o.every(i=>!Number.isNaN(Number(i.replace(/[,%$€£¥₹]/g,"").trim()))&&i.trim().length>0)?a.push("number"):a.push("string")}return{columns:t,rows:n,columnTypes:a}}var Xn=[/^\d{4}-\d{2}-\d{2}$/,/^\d{4}-\d{2}$/,/^\d{4}$/,/^\d{1,2}\/\d{1,2}\/\d{2,4}$/,/^\d{1,2}-\d{1,2}-\d{2,4}$/,/^(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},?\s+\d{4}$/i,/^\d{4}\/\d{2}\/\d{2}$/,/^\d{4}\/\d{2}$/,/^Q[1-4]\s+\d{4}$/],Ue=/^"((?:[^"\\]|\\.)*)"\s*=\s*(.+)$/,ea=/^"((?:[^"\\]|\\.)*)"\s*=\s*"([^"]*)"$/;function ta(e){if(!e)return!1;for(let t of Xn)if(t.test(e))return/^\d{4}(-\d{2})?$/.test(e)||/^\d{4}\/\d{2}$/.test(e)||/^Q[1-4]\s+\d{4}$/.test(e)?!0:!Number.isNaN(Date.parse(e));return!1}function na(e){let t=e.match(/^[<>≤≥~]\s*(.+)$/);if(t){let n=Ae(t[1]).replace(/[,%$€£¥₹]/g,"").trim();if(n.length>0&&!Number.isNaN(Number(n)))return t[1].trim()}return e}function aa(e){if(!e)return!1;let t=Ae(na(e)).replace(/[,%$€£¥₹]/g,"").trim();return t.length>0&&!Number.isNaN(Number(t))}function ht(e,t){return e.map((n,a)=>{let r=t.map(o=>o[a]??"").filter(o=>o.length>0);return r.length===0?"string":r.every(ta)?"date":r.every(aa)?"number":"string"})}function ra(e){var o;let t=e.split(`
`).map(i=>i.trim()).filter(Boolean);if(t.length===0)return{columns:[],rows:[],columnTypes:[]};let n=(o=t[0])==null?void 0:o.match(/^series\s*=\s*(.+)$/);if(n){let i=Ie(n[1].trim()),s=[];for(let l=1;l<t.length;l++){let u=t[l].match(ea),p=u??t[l].match(Ue);p&&s.push({cells:Ie(p[2]).map(ae),label:Fe(p[1]),legacy:u!==null})}let c=i.length>1||!s.some(l=>l.legacy)?i.map(ae):ae(i[0]).split(",").map(l=>l.trim());return Be(["label",...c],s.map(l=>[l.label,...c.map((u,p)=>l.cells[p]??"")]))}let a=["label","value"],r=[];for(let i of t){let s=i.match(Ue);s&&r.push([Fe(s[1]),ae(s[2])])}return Be(a,r)}function Be(e,t){return{columns:e,rows:t,columnTypes:ht(e,t)}}function Ge(e){return/^-?\d+(\.\d+)?%?$/.test(e)?e:S(e)}function mt(e,t){return e.length<=2?t.map(n=>{let a=n[0]??"",r=n[1]??"";return`${S(a)} = ${Ge(r)}`}).join(`
`):[`series = ${e.slice(1).map(S).join(",")}`,...t.map(n=>{let a=n[0]??"",r=n.slice(1).map(o=>Ge(o??"")).join(",");return`${S(a)} = ${r}`})].join(`
`)}function oa(e){var i;let t=s=>s==null||!Number.isFinite(s)?"":String(s),n=["label",...e.series?e.series.map(s=>s.name):["value"]],a=new Map((i=e.textColumns)==null?void 0:i.map(s=>[s.name,s.values])),r=(s,c,l)=>{var u;return a.has(s)?((u=a.get(s))==null?void 0:u[l])??"":t(c[l])},o=e.labels.map((s,c)=>[s,...e.series?e.series.map(l=>r(l.name,l.values,c)):[t(e.values[c])]]);return{columns:n,rows:o,columnTypes:ht(n,o)}}var de=new Set(Object.values(O));function gt(e,t,n,a){let r={columns:[...t],rows:n.map(o=>[...o]),columnTypes:[...a]};for(let o of e)switch(o.type){case O.Sort:r=Zn(r,o.config);break;case O.Filter:r=zn(r,o.config);break;case O.HideColumns:r=Fn(r,o.config);break;case O.Transpose:r=Qn(r);break;case O.Parse:r=Jn(r,o.config);break;case O.Rename:r=Yn(r,o.config);break;case O.GroupBy:r=In(r,o.config)}return r}function ft(e){return e.filter(t=>de.has(t.transformType)).map(t=>{let n={};for(let[a,r]of U(t.properties))n[a]=String(r);return{type:t.transformType,config:n}})}function ia(e,t){let n=ft(t);if(n.length===0)return e;let a=ra(e);if(a.columns.length===0)return e;let r=gt(n,a.columns,a.rows,a.columnTypes);return mt(r.columns,r.rows)}function sa(e,t){let n=ft(t);if(n.length===0||e.labels.length===0)return e;let a=oa(e),r=gt(n,a.columns,a.rows,a.columnTypes);return K(mt(r.columns,r.rows))}var je=new Set;function la(e,t,n){let a=t;for(let r of e)r.transformType==="sort"?a=ue.Total:!de.has(r.transformType)&&!je.has(r.transformType)&&(je.add(r.transformType),console.warn(`[blueprint-chart] Unknown transform "${r.transformType}" in ${n}; ignored.`));return a}function ca(e){let t=r=>{let o=e.get(r);return o==null?void 0:String(o)||void 0},n=e.get("transparentBackground"),a={title:t("title"),description:t("description"),altText:t("altText"),source:t("source"),sourceUrl:t("sourceUrl"),byline:t("byline"),note:t("note"),padding:t("padding"),transparentBackground:Re(n)||void 0,getTheData:Re(e.get("getTheData"))||void 0};return Object.values(a).some(r=>r!==void 0)?a:void 0}function Ee(e){let t=U(e.properties),n=e.data?q(e.data):"",a=K(ia(n,e.transforms)),r=t.get("sort"),o=r==null?void 0:String(r),i=o===ye.Ascending||o===ye.Descending?o:void 0,s=t.get("theme"),c=t.get("sortMode"),l;return Object.values(ue).includes(c)&&(l=c),l=la(e.transforms,l,"chart"),{chartType:e.chartType,data:a,properties:e.properties,frame:ca(t),colorizes:st(e.colorizes),highlights:it(e.highlights),areaFills:ot(e.areaFills),overlays:Te(e.overlays),annotations:rt(e.annotations),seriesOverrides:at(e.series),scenes:e.scenes,sort:i,sortMode:l,theme:s==null?void 0:String(s)||void 0}}var ua=["verticalLabelPosition","horizontalLabelPosition"];function da(e,t,n){let a=ct(t),r={...e};for(let o of ua)n[o]===void 0&&a[o]!==void 0&&a[o]!==on.Off&&(r[o]=a[o]);return r}var He=new Set;function pa(e,t,n){let a=t;for(let r of e)r.transformType==="sort"?a=ue.Total:!de.has(r.transformType)&&!He.has(r.transformType)&&(He.add(r.transformType),console.warn(`[blueprint-chart] Unknown transform "${r.transformType}" in ${n}; ignored.`));return a}function yt(){return{properties:new Map,chartTypeOptions:{},colorizes:[],highlights:[],areaFills:[],seriesOverrides:[],transforms:[]}}function bt(e,t,n){let a=U(t.properties),r=a.get("type");r&&(e.chartType=r);let o=e.chartType??n;t.data&&(e.data=t.data);let i=xe(o,t.properties);e.chartTypeOptions={...e.chartTypeOptions,...i},t.colorizes.length>0?e.colorizes=t.colorizes:t.data&&(e.colorizes=[]),e.highlights=t.highlights,t.areaFills.length>0&&(e.areaFills=t.areaFills),t.series.length>0&&(e.seriesOverrides=t.series),t.transforms.length>0&&(e.transforms=[...e.transforms,...t.transforms]);for(let[s,c]of a)e.properties.set(s,c)}function ha(e,t,n){return n<e?!1:t==="always"||n<=e+(typeof t=="number"?t:0)}function vt(e,t){let n=(e.annotations??[]).map((a,r)=>({anchor:-1,config:{...a,key:a.key??`base:${r}:${a.kind}`}}));return t.forEach((a,r)=>{rt(a.annotations).forEach((o,i)=>{n.push({anchor:r,config:{...o,key:o.key??`s${r}:${i}:${o.kind}`}})})}),n}function wt(e,t){return e.filter(({anchor:n,config:a})=>ha(n,a.repeat,t)).map(({config:n})=>n)}function Pe(e,t,n){let a=t.flatMap((i,s)=>i.map(c=>({anchor:s,config:c}))),r=[...e.map(i=>({anchor:-1,config:i})),...a],o=wt(r,n);return r.map(({config:i})=>o.includes(i)?i:{columns:i.columns,hidden:!0})}function St(e){return(e.scenes??[]).map(t=>Te(t.overlays))}function $t(e,t){let n=e.options??(e.properties?ut(e.chartType,xe(e.chartType,e.properties)):{});return{chartType:e.chartType,data:e.data,options:n,frame:e.frame,colorizes:e.colorizes??[],highlights:e.highlights??[],areaFills:e.areaFills??[],overlays:Pe(e.overlays??[],t,-1),annotations:(e.annotations??[]).map((a,r)=>({...a,key:a.key??`base:${r}:${a.kind}`})),seriesOverrides:e.seriesOverrides??[],sort:e.sort,sortMode:e.sortMode,theme:e.theme}}function le(e,t){let n=St(e),a=$t(e,n);if(t==null||!e.scenes||t<0||t>=e.scenes.length)return a;let r=e.scenes.slice(0,t+1),o=yt();for(let i of r)bt(o,i,e.chartType);return kt(e,a,o,{annotations:vt(e,r),overlayLists:n},t)}function ma(e){let t=e.scenes??[],n=St(e),a=$t(e,n),r={annotations:vt(e,t),overlayLists:n},o=yt();return t.map((i,s)=>(bt(o,i,e.chartType),kt(e,a,o,r,s)))}function kt(e,t,n,a,r){let o=t.options,i=n.chartType??e.chartType,s=n.data?K(q(n.data)):sa(t.data,n.transforms),c=Object.keys(n.chartTypeOptions).length>0?ut(i,{...o,...n.chartTypeOptions}):o,l=i!==e.chartType&&!e.options&&e.properties?da(c,i,{...xe(i,e.properties),...n.chartTypeOptions}):c,u=n.colorizes.length>0?st(n.colorizes):n.data?[]:t.colorizes,p=it(n.highlights),y=n.areaFills.length>0?ot(n.areaFills):t.areaFills,m=Pe(e.overlays??[],a.overlayLists,r),g=wt(a.annotations,r),d=n.seriesOverrides.length>0?at(n.seriesOverrides):t.seriesOverrides,b=n.properties.get("sortMode"),k=Object.values(ue).includes(b)?b:void 0,w=pa(n.transforms,k??t.sortMode,`scene ${r}`),C=["title","description","altText","source","sourceUrl","byline","note"],N={};for(let ne of C){let z=n.properties.get(ne);typeof z=="string"&&(N[ne]=z)}let M=Object.keys(N).length>0?{...t.frame,...N}:t.frame;return{...t,chartType:i,data:s,options:l,frame:M,colorizes:u,highlights:p,areaFills:y,overlays:m,annotations:g,seriesOverrides:d,sortMode:w}}var we=new WeakMap;function ga(e){let t=we.get(e);if(!(!t||t.size===0)){for(let n of t)e.style[n]="";t.clear()}}function B(e,t){let n=we.get(e);n||(n=new Set,we.set(e,n)),n.add(t)}function fa(e,t,n){if(ga(e),n.ignoreLayout||!t)return{constrained:!1};let a=U(t),r=a.get("heightMode"),o=a.get("aspectRatio"),i=a.get("fixedHeight"),s=!1;if(r==="aspect-ratio"&&o){let c=String(o).split(":").map(Number);c.length===2&&c[0]>0&&c[1]>0&&(e.style.aspectRatio=`${c[0]} / ${c[1]}`,e.style.height="auto",B(e,"aspectRatio"),B(e,"height"),s=!0)}else r==="fixed"&&i&&(e.style.height=`${i}px`,B(e,"height"),s=!0);return s&&(e.style.display="flex",e.style.flexDirection="column",e.style.overflow="hidden",B(e,"display"),B(e,"flexDirection"),B(e,"overflow")),{constrained:s}}var Me=new WeakMap;function Tt(e){e.querySelectorAll("[data-bc-fade-overlay]").forEach(t=>{typeof t.getAnimations=="function"&&t.getAnimations().forEach(n=>n.cancel()),t.remove()})}function ya(e,t,n){if(!n)return null;let a=Me.get(e);return!a||a===t?null:(Tt(e),Xt(e))}function ba(e,t,n){if(Me.set(e,t),n){let a=e.querySelector(".bc-frame .bc-frame-body");a&&nn(a),an(e,n)}}function qe(e){Me.delete(e),Tt(e)}var va="http://www.w3.org/2000/svg";function G(e){return e.replace(/\s+/g," ").trim()}function wa(e,t){if(e==="scatter chart")return`${e} of ${t.labels.length} points.`;let n=t.series??[],a=(n.length>0?n.flatMap(r=>r.values):t.values).filter(r=>Number.isFinite(r));return`${e} of ${`${t.labels.length} categor${t.labels.length===1?"y":"ies"}`}${n.length>0?` across ${n.length} series (${n.map(r=>r.name).join(", ")})`:""}${a.length>0?`, values from ${Math.min(...a)} to ${Math.max(...a)}`:""}.`}function At(e,t,n,a,r){let o=`${e.replace(/-/g," ")} chart`,i=t!=null&&t.title?G(t.title):"",s=t!=null&&t.description?G(t.description):"",c=t!=null&&t.altText?G(t.altText):"",l=en.has(e),u=tn(n,l?a:void 0,e,r),p=u.overlays.map(d=>`Includes ${G(d.title)}.`),y=u.overlays.filter(d=>d.kind==="range"&&d.muteRef!==void 0&&Number.isFinite(d.muteRef)).map(d=>`Faded bars: ${G(d.title)} includes ${d.muteRef}.`),m=u.overlays.filter(d=>d.kind==="value"&&(d.aboveColor!==void 0||d.belowColor!==void 0)).map(d=>`Bars are colored by whether they reach ${G(d.title)}.`),g=wa(o,u.data);return{label:i||o,description:c||[s,g,...p,...y,...m].filter(Boolean).join(" ")}}function We(e,t,n){let a=Array.from(e.children).find(o=>o.tagName===t),r=a??e.ownerDocument.createElementNS(va,t);r.textContent=n,a||e.insertBefore(r,e.firstChild)}function Sa(e,t){e.setAttribute("role","img"),e.setAttribute("aria-label",t.label),We(e,"desc",t.description),We(e,"title",t.label)}function $a(e){return(e.querySelector(".bc-frame-body")??e).querySelector("svg")}function ka(e,t,n){let a=$a(e);a&&t.accessibility&&Sa(a,t.accessibility);let r=e.querySelector(".bc-frame");if(!r)return;let o=[];r.classList.forEach(i=>{i.startsWith("bc-theme-")&&o.push(i)});for(let i of o)r.classList.remove(i);t.theme&&r.classList.add(`bc-theme-${t.theme}`),n.constrained&&r.classList.add("bc-frame--constrained")}function Ct(e,t,n={}){var m;let a=!!n.transition||re(e).state==="animating";if(a||(re(e).interrupt(),e.replaceChildren(),qe(e)),t.data.labels.length===0){a&&(re(e).interrupt(),e.replaceChildren(),qe(e));return}let r=t;if(n.stripColors){let g={...t};if(t.properties&&(g.properties=t.properties.filter(d=>d.key!=="colors"&&d.key!=="colorPalette")),t.options){let{colors:d,colorPalette:b,...k}=t.options;g.options=k}r=g}let o=fa(e,r.properties,n),i=le(r,n.sceneIndex),s=Wt(i.chartType);if(!s)return;Vt(e,i.chartType);let c=ya(e,i.chartType,a);c&&e.replaceChildren();let l=_t(e),u=En(i.options,l,i.chartType),p;if(n.thumbnail)p=null;else{let g=((m=i.frame)==null?void 0:m.padding)??n.padding??"16px";p={...i.frame??{},padding:g,data:i.data}}let y=re(e);a&&y.beginCommit(),s(e,i.data,{frame:p,sort:i.sort,...u,sortMode:i.sortMode??u.sortMode,colorizes:i.colorizes.length>0?i.colorizes:void 0,highlights:i.highlights.length>0?i.highlights:void 0,areaFills:i.areaFills.length>0?i.areaFills:void 0,overlays:i.overlays.length>0?Pn(i.overlays,i.options,l):void 0,annotations:i.annotations.length>0?i.annotations:void 0,seriesOverrides:i.seriesOverrides.length>0?i.seriesOverrides:void 0},a),a&&y.commit({duration:Kt(),mode:n.transitionMode}),ka(e,{theme:n.theme??i.theme,accessibility:At(i.chartType,p,i.data,i.overlays,i.options.stackMode)},o),ba(e,i.chartType,c)}function Ve(e,t,n){let a=document.createElement("div");a.style.cssText="color: #888; font-family: monospace; padding: 0.75rem; white-space: pre-wrap;",a.textContent=`Blueprint Chart: ${t}
${n}`,e.replaceChildren(a)}function uo(e,t,n){if(!t){n!=null&&n.transition||e.replaceChildren();return}let a;try{a=Ce(t)}catch(r){Ve(e,"could not parse chart",r instanceof Error?r.message:String(r));return}try{Ct(e,Ee(a),n)}catch(r){Ve(e,"could not render chart",r instanceof Error?r.message:String(r))}}var Ta=[{intent:"range",pattern:/\b(range|high and low|high\/low|margin of error|confidence interval|confidence|interval|plus or minus|spread between)\b/i},{intent:"composition-over-time",pattern:/(composition|mix|stacked|breakdown)[^.]*\b(over time|by year|by quarter|by month|by decade)\b|\b(over time|by year|by quarter|by month)\b[^.]*(composition|mix|breakdown)/i},{intent:"part-to-whole",pattern:/\b(share|part[- ]to[- ]whole|proportion|percentage of (?:the )?total|% of (?:the )?total|makes? up|out of (?:the )?total|composition)\b/i},{intent:"ranking",pattern:/\b(rank|ranked|ranking|top \d+|most|largest|biggest|highest|leading|fewest|smallest)\b/i},{intent:"relationship",pattern:/\b(correlat\w*|relationship|against|related to|tends? to|associated with)\b/i},{intent:"trend",pattern:/\b(over time|trend|grew|rose|fell|climbed|declined|increased?|decreased?|change over|year[- ]over[- ]year|overtak\w*|overtook|surpass\w*|crossover|diverg\w*)\b/i},{intent:"comparison",pattern:/\b(compares?|compared|comparison|versus|vs\.?|more than|difference between|across|than)\b/i}];function Aa(e){if(e===void 0||e.trim()==="")return"none";for(let t of Ta)if(t.pattern.test(e))return t.intent;return"none"}var h=(e,t,n)=>({type:e,fitness:t,reason:n}),F={"1cat+1num":{none:e=>{let t=[h("bar-vertical","best","1 categorical + 1 numeric — classic bar chart"),h("bar-horizontal","good","Horizontal bars work well for long labels")];return e<=8&&(t.push(h("donut","good",`${e} items — suitable for part-of-whole`)),t.push(h("pie","alternative","Pie chart for part-of-whole"))),t},comparison:e=>F["1cat+1num"].none(e),ranking:()=>[h("bar-horizontal","best","Ranked categories read best as horizontal bars"),h("bar-vertical","good","Vertical bars also work for ranking")],"part-to-whole":e=>e<=5?[h("pie","best",`${e} slices — pie reads cleanly for very small N`),h("donut","good","Donut for part-of-whole with a center label"),h("bar-vertical","alternative","Bars if precise comparison matters")]:e<=8?[h("donut","best",`${e} slices — donut for part-of-whole`),h("pie","good","Pie for part-of-whole"),h("bar-vertical","alternative","Bars if precise comparison matters")]:[h("bar-vertical","best",`${e} categories — too many for a readable pie`),h("bar-horizontal","good","Horizontal bars for long labels")],range:()=>[h("bar-vertical","best","A single numeric column carries no range — plain bars read the value directly"),h("bar-horizontal","good","Horizontal bars work well for long labels")]},"1cat+Nnum":{none:()=>[h("bar-multi","best","1 categorical + multiple numeric columns — compare groups"),h("line-multi","good","Can also show as a multi-line chart")],comparison:e=>F["1cat+Nnum"].none(e),ranking:e=>F["1cat+Nnum"].none(e),trend:()=>[h("line-multi","best","A trend or crossover story reads best as lines, even over categorical periods"),h("bar-multi","alternative","Grouped bars if per-period comparison matters more than the trend")],"part-to-whole":()=>[h("bar-stacked","best","Stacked bars show composition within each category"),h("column-stacked","good","Stacked columns for the same composition"),h("bar-multi","alternative","Grouped bars if comparison beats composition")],"composition-over-time":()=>[h("column-stacked","best","Stacked columns show composition across discrete periods"),h("bar-stacked","good","Stacked bars for the same composition"),h("area-stacked","alternative","Stacked area if the periods are continuous time")],relationship:()=>[h("scatter","best","Two numeric columns per item — a scatter plot shows how they move together"),h("line-multi","alternative","Lines if the categories have a natural order")],range:()=>[h("dot-plot","best",'A dot with a bar from low to high shows each value with its margin. Set dotStyle = "range" and pick the low and high columns'),h("bar-split","alternative","Split bars if each bound should read as its own panel")]},"1cat+text+Nnum":{none:()=>[h("scatter","best","A label, a text column and several numbers — plot one number against another"),h("bar-multi","alternative","Grouped bars if comparing values per row matters more")],relationship:e=>F["1cat+text+Nnum"].none(e)},"1date+1num":{none:()=>[h("line","best","1 date + 1 numeric column — ideal for trend"),h("bar-vertical","alternative","Can also show as bars")],trend:()=>[h("line","best","1 date + 1 numeric column — ideal for trend"),h("area","good","Filled area emphasizes magnitude over time"),h("bar-vertical","alternative","Can also show as bars")],comparison:()=>[h("bar-vertical","best","Bars for comparing discrete time points"),h("line","good","Line if the trend matters more than the comparison")],ranking:()=>[h("bar-vertical","best","Bars for ranking discrete time points"),h("line","good","Line for the underlying trend")],"part-to-whole":()=>[h("area","best","Filled area reads as magnitude/share over time"),h("line","good","Line for the underlying trend")],"composition-over-time":()=>[h("area","best","Filled area shows magnitude over time"),h("line","good","Line for the underlying trend")]},"1date+Nnum":{none:()=>[h("line-multi","best","1 date + multiple numeric columns — compare trends"),h("bar-multi","alternative","Can also show as grouped bars")],trend:e=>F["1date+Nnum"].none(e),comparison:e=>F["1date+Nnum"].none(e),ranking:e=>F["1date+Nnum"].none(e),"composition-over-time":()=>[h("area-stacked","best","Stacked area shows composition over continuous time"),h("column-stacked","good","Stacked columns for the same composition"),h("line-multi","alternative","Multi-line if composition is not the point")],"part-to-whole":()=>[h("area-stacked","best","Stacked area shows share over time"),h("line-multi","good","Multi-line if absolute trends matter more")]},other:{none:()=>[h("bar-vertical","good","Default bar chart recommendation")]}};function Ca(e,t,n){let a=F[e],r=a[t]??a.none;return r?r(n):[h("bar-vertical","good","Default bar chart recommendation")]}function xa(e,t){let n=e[0]==="date",a=e.filter(i=>i==="string").length,r=n?e.filter(i=>i==="date").length:0,o=e.filter(i=>i==="number"||i==="date"&&!n).length;return r===1&&a===0&&o>=1?o===1?"1date+1num":"1date+Nnum":a===1&&r===0&&o>=1?o===1?"1cat+1num":"1cat+Nnum":e[0]==="string"&&r===0&&a>=2&&o>=2?"1cat+text+Nnum":"other"}var Na={"bar-vertical":"Vertical Bar Chart","bar-horizontal":"Horizontal Bar Chart","bar-multi":"Grouped Bar Chart","bar-grouped":"Grouped Bar Chart","bar-stacked":"Stacked Bar Chart","bar-split":"Diverging Bar Chart","dot-plot":"Dot Plot","column-stacked":"Stacked Column Chart",line:"Line Chart","line-multi":"Multi-Line Chart",area:"Area Chart","area-stacked":"Stacked Area Chart",pie:"Pie Chart",donut:"Donut Chart",scatter:"Scatter Plot"};function po(e,t,n){return e.length===0?[]:Ca(xa(e),Aa(n),t).map(a=>({chartType:a.type,label:Na[a.type]??a.type,fitness:a.fitness,reason:a.reason}))}var Ea={protanopia:"Protanopia (no red)",deuteranopia:"Deuteranopia (no green)",tritanopia:"Tritanopia (no blue)"},xt={protanopia:[.152286,1.052583,-.204868,0,0,.114503,.786281,.099216,0,0,-.003882,-.048116,1.051998,0,0,0,0,0,1,0],deuteranopia:[.367322,.860646,-.227968,0,0,.280085,.672501,.047413,0,0,-.01182,.04294,.968881,0,0,0,0,0,1,0],tritanopia:[1.255528,-.076749,-.178779,0,0,-.078411,.930809,.147602,0,0,.004733,.691367,.3039,0,0,0,0,0,1,0]};function Pa(e){return`bc-cvd-${e}`}function ho(e){let t="http://www.w3.org/2000/svg",n=document.createElementNS(t,"filter");n.setAttribute("id",Pa(e)),n.setAttribute("color-interpolation-filters","linearRGB");let a=document.createElementNS(t,"feColorMatrix");return a.setAttribute("type","matrix"),a.setAttribute("values",xt[e].join(" ")),n.appendChild(a),n}function Ma(e){return e<=.04045?e/12.92:((e+.055)/1.055)**2.4}function ge(e){return e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055}function za(e,t){let[n,a,r]=(j.valid(e)?j(e):j("#000")).rgb().map(u=>Ma(u/255)),o=xt[t],i=ge(o[0]*n+o[1]*a+o[2]*r),s=ge(o[5]*n+o[6]*a+o[7]*r),c=ge(o[10]*n+o[11]*a+o[12]*r),l=u=>Math.min(255,Math.max(0,Math.round(u*255)));return j(l(i),l(s),l(c)).hex()}var La=10;function mo(e){if(e.length<2)return[];let t=["protanopia","deuteranopia","tritanopia"],n=[];for(let a of t){let r=e.map(i=>za(i,a)),o=[];for(let i=0;i<r.length;i++)for(let s=i+1;s<r.length;s++){let c=j.deltaE(r[i],r[s]);c<La&&o.push({a:e[i],b:e[s],deltaE:c})}o.length>0&&n.push({type:a,label:Ea[a],pairs:o})}return n}function $(e,t){return(e??[]).flatMap(n=>n.split(`
`).map(a=>`${t}// ${a.trim()}`))}function pe(e,t){return t==null?e:t.includes(`
`)?`${e} /* ${t} */`:`${e} // ${t}`}function x(e,t){return[...$(e.trailingComments,`${t}  `),pe(`${t}}`,e.trailingComment)]}function Se(e){return typeof e.value=="number"?e.isPercentage?`${e.value}%`:`${e.value}`:typeof e.value=="string"&&e.value.startsWith("#")?S(e.value):typeof e.value=="string"&&/^[a-zA-Z_][a-zA-Z0-9_-]*$/.test(e.value)?e.value:S(String(e.value))}function Nt(e){return/^[a-zA-Z_][a-zA-Z0-9_-]*$/.test(e)?e:S(e)}function A(e,t){let n=pe(`${t}${Nt(e.key)} = ${Se(e)}`,e.trailingComment);return[...$(e.leadingComments,t),n].join(`
`)}function Da(e,t){let n;return n=e.key==="series"&&e.quotedKey&&!(e.values&&e.values.length>1)?`${t}"series" = ${Se(e)}`:e.values&&e.values.length>1?`${t}${e.key==="series"&&!e.quotedKey?e.key:S(e.key)} = ${e.values.map(a=>typeof a=="number"?`${a}`:S(String(a))).join(",")}`:`${t}${Nt(e.key)} = ${Se(e)}`,[...$(e.leadingComments,t),pe(n,e.trailingComment)].join(`
`)}function J(e,t){let n=[...$(e.leadingComments,t),`${t}data {`];for(let a of e.entries)n.push(Da(a,`${t}  `));return n.push(...x(e,t)),n.join(`
`)}function Y(e,t){let n=e.fromHighlight?"highlight":"colorize",a=[...$(e.leadingComments,t),`${t}${n} ${S(e.target)} {`];for(let r of e.properties)a.push(A(r,`${t}  `));return a.push(...x(e,t)),a.join(`
`)}function Z(e,t){return[...$(e.leadingComments,t),pe(`${t}highlight ${S(e.target)}`,e.trailingComment)].join(`
`)}function Q(e,t){let n=[...$(e.leadingComments,t),`${t}area-fill ${S(e.from)} ${S(e.to)} {`];for(let a of e.properties)n.push(A(a,`${t}  `));return n.push(...x(e,t)),n.join(`
`)}function X(e,t){let n=e.columns.map(S).join(" "),a=[...$(e.leadingComments,t),`${t}overlay ${n} {`];for(let r of e.properties)a.push(A(r,`${t}  `));return a.push(...x(e,t)),a.join(`
`)}function ee(e,t){let n=e.kind??H.Point;if(n===H.Range){let o=[...$(e.leadingComments,t),`${t}range {`];for(let i of e.properties)o.push(A(i,`${t}  `));return o.push(...x(e,t)),o.join(`
`)}if(n===H.Free){let o=[...$(e.leadingComments,t),`${t}note {`];for(let i of e.properties)o.push(A(i,`${t}  `));return o.push(...x(e,t)),o.join(`
`)}let a="target"in e?e.target:"",r=[...$(e.leadingComments,t),`${t}annotation ${S(a)} {`];for(let o of e.properties)r.push(A(o,`${t}  `));return r.push(...x(e,t)),r.join(`
`)}function ze(e,t){let n=[...$(e.leadingComments,t),`${t}series ${S(e.name)} {`];for(let a of e.properties)n.push(A(a,`${t}  `));return n.push(...x(e,t)),n.join(`
`)}function Et(e,t){let n=e.name==null?`${t}scene {`:`${t}scene ${S(e.name)} {`,a=[...$(e.leadingComments,t),n];for(let r of e.properties)a.push(A(r,`${t}  `));e.data&&a.push(J(e.data,`${t}  `));for(let r of e.colorizes)a.push(Y(r,`${t}  `));for(let r of e.highlights)a.push(Z(r,`${t}  `));for(let r of e.areaFills)a.push(Q(r,`${t}  `));for(let r of e.overlays)a.push(X(r,`${t}  `));for(let r of e.annotations)a.push(ee(r,`${t}  `));for(let r of e.series)a.push(ze(r,`${t}  `));for(let r of e.transforms)a.push(te(r,`${t}  `));return a.push(...x(e,t)),a.join(`
`)}function te(e,t){let n=[...$(e.leadingComments,t),`${t}transform ${e.transformType} {`];for(let a of e.properties)n.push(A(a,`${t}  `));return n.push(...x(e,t)),n.join(`
`)}function Oa(e,t,n){let a=W(n).find(r=>r.key===e);return!a||a.default===void 0?!1:String(a.default)===String(t)}function go(e){let t=[`chart ${e.chartType} {`];for(let n of e.properties)t.push(A(n,"  "));e.data&&t.push(J(e.data,"  "));for(let n of e.colorizes)t.push(Y(n,"  "));for(let n of e.highlights)t.push(Z(n,"  "));for(let n of e.areaFills)t.push(Q(n,"  "));for(let n of e.overlays)t.push(X(n,"  "));for(let n of e.annotations)t.push(ee(n,"  "));for(let n of e.series)t.push(ze(n,"  "));for(let n of e.scenes)t.push(Et(n,"  "));for(let n of e.transforms)t.push(te(n,"  "));return t.push(...$(e.trailingComments,"  "),"}"),t.join(`
`)}function Ia(e){return new Map(e.map(t=>[t.key,t.value]))}function Le(e,t,n,a){let r=W(n).find(o=>o.key===e);return r?a.has(e)?String(a.get(e))===String(t):r.default!==void 0&&String(r.default)===String(t):!1}function Pt(e,t,n,a){let r=[...$(e.leadingComments,t),`${t}series ${S(e.name)} {`];for(let o of e.properties)(o.isPercentage||!Le(o.key,o.value,n,a))&&r.push(A(o,`${t}  `));return r.push(...x(e,t)),r.join(`
`)}function Fa(e,t,n,a){let r=e.properties.find(l=>l.key==="type"),o=r?String(r.value):n,i=e.name==null?`${t}scene {`:`${t}scene ${S(e.name)} {`,s=[...$(e.leadingComments,t),i],c=new Map(a);for(let l of e.properties){if(l.key==="type"){s.push(A(l,`${t}  `));continue}c.set(l.key,l.value),(l.isPercentage||!Le(l.key,l.value,o,a))&&s.push(A(l,`${t}  `))}e.data&&s.push(J(e.data,`${t}  `));for(let l of e.colorizes)s.push(Y(l,`${t}  `));for(let l of e.highlights)s.push(Z(l,`${t}  `));for(let l of e.areaFills)s.push(Q(l,`${t}  `));for(let l of e.overlays)s.push(X(l,`${t}  `));for(let l of e.annotations)s.push(ee(l,`${t}  `));for(let l of e.series)s.push(Pt(l,`${t}  `,o,c));for(let l of e.transforms)s.push(te(l,`${t}  `));return s.push(...x(e,t)),s.join(`
`)}function fo(e){let t=[`chart ${e.chartType} {`],n=new Map;for(let r of e.properties)(r.isPercentage||!Le(r.key,r.value,e.chartType,n))&&t.push(A(r,"  "));e.data&&t.push(J(e.data,"  "));for(let r of e.colorizes)t.push(Y(r,"  "));for(let r of e.highlights)t.push(Z(r,"  "));for(let r of e.areaFills)t.push(Q(r,"  "));for(let r of e.overlays)t.push(X(r,"  "));for(let r of e.annotations)t.push(ee(r,"  "));let a=Ia(e.properties);for(let r of e.series)t.push(Pt(r,"  ",e.chartType,a));for(let r of e.scenes)t.push(Fa(r,"  ",e.chartType,a));for(let r of e.transforms)t.push(te(r,"  "));return t.push(...$(e.trailingComments,"  "),"}"),t.join(`
`)}function yo(e){let t=[`chart ${e.chartType} {`];for(let n of e.properties)Oa(n.key,n.value,e.chartType)||t.push(A(n,"  "));e.data&&t.push(J(e.data,"  "));for(let n of e.colorizes)t.push(Y(n,"  "));for(let n of e.highlights)t.push(Z(n,"  "));for(let n of e.areaFills)t.push(Q(n,"  "));for(let n of e.overlays)t.push(X(n,"  "));for(let n of e.annotations)t.push(ee(n,"  "));for(let n of e.series)t.push(ze(n,"  "));for(let n of e.scenes)t.push(Et(n,"  "));for(let n of e.transforms)t.push(te(n,"  "));return t.push(...$(e.trailingComments,"  "),"}"),t.join(`
`)}var Ra=["x","y","size","group"],Ua={"missing-x":"missing x","missing-y":"missing y","invalid-size":"size must be above 0","non-positive-log-x":"x must be above 0 on a log axis","non-positive-log-y":"y must be above 0 on a log axis"},Ba={x:"horizontal",y:"vertical"};function Ga(e){return[...Sn(e),...(e.textColumns??[]).map(t=>t.name)]}function Mt(e,t,n,a){let r=Ga(e);return n.flatMap(o=>{let i=t[o];return!i||i==="none"||r.includes(i)?[]:[{code:"unknown-column",severity:a,key:o,message:`${o} names "${i}", which is not a column.`,suggestion:P(i,r)}]})}function zt(e,t){if(!e.length)return[];let n=e.slice(0,5).map(r=>`"${r.name}" (${t[r.reason]})`),a=e.length-n.length;return[{code:"dropped-rows",severity:"warning",message:`${`${e.length} ${e.length===1?"row":"rows"}`} not drawn: ${n.join(", ")}${a>0?`, and ${a} more`:""}.`}]}function ja(e){return e.map(t=>({code:"trend-skipped",severity:"warning",message:`Trend line skipped${t==="overall"?"":` for ${t}`}: needs at least 3 points.`}))}function Ha(e,t){return["x","y"].flatMap(n=>["min","max"].flatMap(a=>{var o;let r=(o=t[n])==null?void 0:o[a];return e[n]!==vn.Log||r===void 0||String(r).trim()===""||!(Number(r)<=0)?[]:[{code:"log-range-ignored",severity:"warning",message:`${`${Ba[n]}Range${a==="min"?"Min":"Max"}`} must be above 0 on a log axis; it is ignored.`}]}))}function qa(e,t,n,a,r){let o=Mt(e,t,Ra,"error"),i=dn(e,t);if(!i.y)return[...o,{code:"scatter-missing-y",severity:"error",key:"y",message:"Scatter needs at least two numeric columns."}];let s=Ha(n,a);if(o.length)return[...o,...s];let{points:c,dropped:l}=pn(e,i,n),u=hn(r)?mn(c,r,n).skipped:[];return[...zt(l,Ua),...ja(u),...s]}var Wa=["low","high"],Va={"missing-value":"missing value","missing-range":"missing low or high","non-positive-log":"values must be above 0 on a log axis"},$e=e=>e.map(t=>`"${t}"`).join(", ");function _a(e){let t=e.filter(({values:[r],low:o=-1/0,high:i=1/0})=>r<Math.min(o,i)||r>Math.max(o,i));if(!t.length)return[];let n=t.slice(0,5).map(r=>r.name),a=t.length-n.length;return[{code:"value-outside-range",severity:"warning",message:`${`${t.length} ${t.length===1?"row has":"rows have"}`} a value outside low to high: ${$e(n)}${a>0?`, and ${a} more`:""}.`}]}function Ka(e,t){return t.length?[{code:"ignored-columns",severity:"warning",message:`Range mode uses ${$e(e)} as the value and ignores ${$e(t)}.`}]:[]}function Ja(e,t){return e.dotStyle!==wn.Range||t==="range"?[]:[{code:"missing-range-columns",severity:"warning",message:"Range style needs a low and a high column. Pick them in low and high."}]}function Ya(e,t,n){let a=gn(e,t),{rows:r,dropped:o}=fn(e,a,n);return[...Mt(e,t,Wa,"warning"),...Ja(t,a.mode),...zt(o,Va),...a.mode==="range"?_a(r):[],...Ka(a.values,a.ignored)]}var _e=new Set(["title","description","altText","byline","note","source","sourceUrl","padding","transparentBackground","getTheData","type","sort","sortMode","theme","heightMode","aspectRatio","fixedHeight","sizing","fixedWidth","maxWidth","player","playerPosition","autoplay","sceneDuration","loop"]),Ke=new Set(["autoplay","sceneDuration","loop"]),Za=new Map([["theme",ln().map(e=>e.name)],["player",["buttons","progress-bar","dot-stepper","minimal-arrows","none"]],["playerPosition",["left","center","right"]],["autoplay",["true","false"]],["loop",["true","false"]]]),Qa=new Set(["lineSymbolSize","circleSize","fixedHeight","fixedWidth","maxWidth"]),fe=de,Xa=new Set(["text","repeat","textColor","maxWidth","textOutline","showLine","anchorDirection","textOffsetX","textOffsetY","lineStyle","lineWeight","showArrow","lineTargetDistance","showCircle","circleSize","circleStyle","circleColor"]),Je=new Set(["color","lineWidth","dash","interpolation","labelMode","labelText","valueLabels","lineSymbols","hidden","connectGaps","symbolShape","symbolShowOn","symbolStyle","symbolSize","symbolOpacity"]),er=new Map([["symbolShape","lineSymbolShape"],["symbolShowOn","lineSymbolShowOn"],["symbolStyle","lineSymbolStyle"]]),tr=new Set(["start","end","repeat","orientation","startAnchor","endAnchor","bgColor","bgOpacity","direction","text","textColor"]),nr=new Set(["text","x","y","repeat","textColor","maxWidth","textOutline"]);function Lt(e,t){return e.find(n=>n.key===t)}function De(e,t,n,a,r){r.push({code:"invalid-choice",path:a,message:`${e} must be one of: ${n.map(o=>`"${o}"`).join(", ")}; got "${t}".`,suggestion:P(String(t),n.filter(o=>o!==""))})}function Dt(e,t,n){if(!Qa.has(e.key))return;let a=parseFloat(String(e.value));Number.isFinite(a)&&a<0&&n.push({code:"invalid-number",path:t,message:`${e.key} must not be negative; got "${e.value}".`})}function ar(e,t,n){if(e.key!=="sceneDuration")return;let a=e.value;typeof a=="number"&&a>=1&&a<=10||n.push({code:"invalid-number",path:t,message:`sceneDuration must be a number of seconds from 1 to 10; got "${a}".`})}function rr(e,t,n,a){let r=t.value,o=String(r).toLowerCase();if(e.type===cn.Boolean){if(e.key==="valueLabels"&&o==="percent"||r===!0||r===!1||o==="true"||o==="false")return;a.push({code:"invalid-boolean",path:n,message:`${e.key} expects true or false, got "${r}".`,suggestion:o==="no"||o==="0"||o==="off"?"false":"true"});return}if(e.choices&&e.choices.length>0){let i=e.choices.map(s=>s.value);if(i.includes(String(r))||String(r)===""&&i.includes(""))return;De(e.key,r,i,n,a)}}function Ot(e,t,n,a){let r=W(e),o=new Set([...r.map(i=>i.key),..._e]);for(let i of t){let s=`${n}.${i.key}`;Dt(i,s,a),ar(i,s,a);let c=Za.get(i.key);if(c&&String(i.value)!==""&&!c.includes(String(i.value))&&De(i.key,i.value,c,s,a),_e.has(i.key))continue;let l=Lt(r,i.key);if(!l){a.push({code:"unknown-property",path:s,message:`Unknown property "${i.key}" for chart type "${e}".`,suggestion:P(i.key,o)});continue}rr(l,i,s,a)}}function or(e){return e===H.Range?tr:e===H.Free?nr:Xa}function ir(e){return un[e]}function It(e,t,n){e.forEach((a,r)=>{let o=a.kind??H.Point,i=or(o),s=ir(o);for(let c of a.properties){let l=`${t}.${s}[${r}].${c.key}`;Dt(c,l,n),!i.has(c.key)&&n.push({code:"unknown-annotation-property",path:l,message:`Unknown ${s} property "${c.key}"; it will be silently ignored.`,suggestion:P(c.key,i)})}Ft(a.properties,"invalid-annotation-repeat",`${t}.${s}[${r}].repeat`,n)})}function Ft(e,t,n,a){let r=U(e).get("repeat");if(r===void 0)return;let o=String(r).toLowerCase();o==="true"||o==="false"||typeof r=="number"&&Number.isInteger(r)&&r>=1||a.push({code:t,message:`repeat must be false, true, or a positive integer (got ${String(r)})`,path:n})}function Rt(e,t,n){e.forEach((a,r)=>{Ft(a.properties,"invalid-overlay-repeat",`${t}.overlay[${r}].repeat`,n)})}function Ut(e,t,n,a){let r=W(e);t.forEach((o,i)=>{var s,c;for(let l of o.properties){let u=`${n}.series[${i}].${l.key}`;if(!Je.has(l.key)){a.push({code:"unknown-series-property",path:u,message:`Unknown series property "${l.key}"; it will be silently ignored.`,suggestion:P(l.key,Je)});continue}let p=(c=(s=Lt(r,er.get(l.key)??l.key))==null?void 0:s.choices)==null?void 0:c.map(y=>y.value);p!=null&&p.length&&!p.includes(String(l.value))&&De(l.key,l.value,p,u,a)}})}function Bt(e,t,n){e.forEach((a,r)=>{fe.has(a.transformType)||n.push({code:"unknown-transform",path:`${t}.transform[${r}]`,message:`Unknown transform type "${a.transformType}". Known types: ${[...fe].map(o=>`"${o}"`).join(", ")}.`,suggestion:P(a.transformType,fe)})})}function sr(e){let t=new Set;for(let n of[e.data,...e.scenes.map(a=>a.data)])for(let a of(n==null?void 0:n.entries)??[]){if(a.key==="series"&&!a.quotedKey){for(let r of a.values??[a.value])t.add(String(r));continue}t.add(a.key);for(let r of a.values??[a.value])typeof r=="string"&&t.add(r)}return t}function lr(e,t){let n=sr(e);if(n.size===0)return;let a=[{basePath:"chart",keyword:"highlight",nodes:e.highlights},{basePath:"chart",keyword:"colorize",nodes:e.colorizes},...e.scenes.flatMap((r,o)=>[{basePath:`scene[${o}]`,keyword:"highlight",nodes:r.highlights},{basePath:`scene[${o}]`,keyword:"colorize",nodes:r.colorizes}])];for(let{basePath:r,keyword:o,nodes:i}of a)i.forEach((s,c)=>{n.has(s.target)||t.push({code:"unresolved-target",path:`${r}.${o}[${c}]`,message:`${o} "${s.target}" matches no category or series; it has no effect.`,suggestion:P(s.target,n)})})}function bo(e){let t=[],n=[],a=ve(),r=a.includes(e.chartType);r||t.push({code:"unknown-chart-type",path:"chartType",message:`Unknown chart type "${e.chartType}".`,suggestion:P(e.chartType,a)}),r&&Ot(e.chartType,e.properties,"chart",t),Bt(e.transforms,"chart",t),It(e.annotations,"chart",t),Rt(e.overlays,"chart",t),r&&Ut(e.chartType,e.series,"chart",t);let o=!!e.data&&e.data.entries.length>0,i=e.scenes.some(s=>!!s.data&&s.data.entries.length>0);return!o&&!i&&t.push({code:"missing-data",path:"data",message:e.data&&e.data.entries.length===0?"Data block is empty.":"Chart has no data."}),e.data&&ur(e.data.entries,n),e.data&&dr(e.data.entries,n),lr(e,n),e.chartType===oe.Scatter&&Ye(e.data,e.properties,"chart","data",t,n),e.chartType===oe.DotPlot&&Ze(e.data,e.properties,"chart","data",n),e.scenes.forEach((s,c)=>{var u;pr(s,e.chartType,c,t);let l=((u=s.properties.find(p=>p.key==="type"))==null?void 0:u.value)??e.chartType;l===oe.Scatter&&Ye(s.data,[...e.properties,...s.properties],`scene[${c}]`,`scene[${c}].data`,t,n),l===oe.DotPlot&&Ze(s.data,[...e.properties,...s.properties],`scene[${c}]`,`scene[${c}].data`,n)}),cr(e,n),{valid:t.length===0,errors:t,warnings:n}}function cr(e,t){if(!(e.overlays.length>0||e.scenes.some(u=>u.overlays.length>0)))return;let n=Ee(e),a=n.overlays??[],r=e.scenes.map(u=>Te(u.overlays)),o=new Map;a.forEach((u,p)=>o.set(u,`chart.overlay[${p}]`)),r.forEach((u,p)=>{u.forEach((y,m)=>o.set(y,`scene[${p}].overlay[${m}]`))});let i=new Set,s=(u,p,y,m)=>{var b,k;let g=Pe(a,r,p),d=yn(u.data,g,u.chartType,m,u.options.stackMode);for(let w of d){let C=(k=(b=w.key)==null?void 0:b.match(/^overlay\[(\d+)\]$/))==null?void 0:k[1],N=C===void 0?`${y}.overlay`:o.get(g[Number(C)]);if(N===void 0)continue;let M=`${w.code}|${N}|${w.message}`;i.has(M)||(i.add(M),t.push(Oe(w,N)))}},c=e.data?q(e.data):void 0;s(le(n,void 0),-1,"chart",c);let l=ma(n);e.scenes.forEach((u,p)=>{u.data&&(c=q(u.data)),s(l[p],p,`scene[${p}]`,c)})}function ur(e,t){let n=e.findIndex(o=>o.key==="series"&&!o.quotedKey);if(n===-1)return;let a=e[n],r=a.values??[a.value];r.every(o=>typeof o=="number")&&t.push({code:"numeric-series-meta-row",path:"data.series",message:"The unquoted `series` row names the chart columns, but its values are all numbers. If you meant a data category named series, quote the label.",suggestion:`"series" = ${r.join(",")}`}),n!==0&&t.push({code:"misplaced-series-meta-row",path:"data.series",message:"The `series` meta-row must be the first entry in the data block; later rows are ignored and the chart falls back to a single series.",suggestion:"Move the series row to the top of the data block."})}function dr(e,t){let n=new Map;for(let a of e)a.key==="series"&&!a.quotedKey||n.set(a.key,(n.get(a.key)??0)+1);for(let[a,r]of n)r>1&&t.push({code:"duplicate-data-key",path:`data.${a}`,message:`${r} rows share the label "${a}", so the chart numbers the repeats "${a} (2)" and up. Rename them, or combine the rows, if they are the same category.`,suggestion:`"${a} (2)"`})}function pr(e,t,n,a){var c;let r=`scene[${n}]`,o=(c=e.properties.find(l=>l.key==="type"))==null?void 0:c.value,i=o==null?t:String(o),s=e.properties.filter(l=>!Ke.has(l.key));for(let l of e.properties)Ke.has(l.key)&&a.push({code:"chart-level-only",path:`${r}.${l.key}`,message:`${l.key} applies to the whole chart, so it has no effect inside a scene.`});o!=null&&!ve().includes(i)?a.push({code:"unknown-chart-type",path:`${r}.type`,message:`Unknown chart type "${i}".`,suggestion:P(i,ve())}):(Ot(i,s,r,a),Ut(i,e.series,r,a)),Bt(e.transforms,r,a),It(e.annotations,r,a),Rt(e.overlays,r,a)}function Ye(e,t,n,a,r,o){if(!e||e.entries.length===0)return;let i=U(t),s=m=>i.has(m)?String(i.get(m)):void 0,c=m=>s(m),l=m=>({min:s(`${m}RangeMin`),max:s(`${m}RangeMax`)}),u={x:s("x"),y:s("y"),size:s("size"),group:s("group")},p={x:c("horizontalScaleType"),y:c("verticalScaleType")},y={x:l("horizontal"),y:l("vertical")};for(let m of qa(K(q(e)),u,p,y,s("trend")))(m.severity==="error"?r:o).push(Oe(m,m.key?`${n}.${m.key}`:a))}function Ze(e,t,n,a,r){if(!e||e.entries.length===0)return;let o=U(t),i=c=>o.has(c)?String(o.get(c)):void 0,s={dotStyle:i("dotStyle"),low:i("low"),high:i("high")};for(let c of Ya(K(q(e)),s,i("horizontalScaleType")))r.push(Oe(c,c.key?`${n}.${c.key}`:a))}function Oe({code:e,message:t,suggestion:n},a){return{code:e,path:a,message:t,...n&&{suggestion:n}}}var hr=`chart bar-vertical {
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
`,mr=`chart bar-vertical {
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
`,gr=`chart bar-horizontal {
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
`,fr=`chart line-multi {
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
`,yr=`chart bar-multi {
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
`,br=`chart line {
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
`,vr=`chart line {
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
`,wr=`chart line-multi {
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
`,Sr=`chart pie {
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
`,$r=`chart bar-vertical {
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
`,kr=`chart donut {
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
`,Tr=`chart area {
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
`,Ar=`chart area-stacked {
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
`,Cr=`chart column-stacked {
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
`,xr=`chart bar-stacked {
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
`,Nr=`chart area-stacked {
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
`,Er=`chart bar-horizontal {
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
`,Pr=`chart dot-plot {
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
`,Mr=`chart bar-grouped {
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
`,zr=`chart scatter {
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
`,Lr=`chart dot-plot {
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
`,Dr=`chart bar-vertical {
  title = "Real income gains in 2023 were statistically clear only for White households"
  description = "Change in real median household income by race and Hispanic origin of householder, percent"
  source = "U.S. Census Bureau, Income in the United States: 2023 (P60-282), Table A-1. Prior year: Income in the United States: 2022 (P60-279), Table A-1"
  sourceUrl = "https://www2.census.gov/library/publications/2024/demo/p60-282.pdf"
  note = "Striped band is the 90% confidence interval (estimate plus or minus margin of error). Line is the 2021 to 2022 change. Faded bars have an interval that includes zero, so their change is not statistically clear."

  overlay "Low (90% CI)" "High (90% CI)" {
    title = "90% confidence interval"
    pattern = stripes
    color = "#64748b"
    muteIfCrosses = 0
  }

  overlay "2021 to 2022" {
    title = "Change, 2021 to 2022"
    color = "#e15759"
  }

  data {
    series = "Change, 2022 to 2023","Low (90% CI)","High (90% CI)","2021 to 2022"
    "White" = 5.4,3.8,7.0,-3.5
    "White, not Hispanic" = 5.7,4.07,7.33,-3.6
    "Black" = 2.8,-0.85,6.45,1.5
    "Asian" = -0.2,-4.89,4.49,-0.6
    "Hispanic (any race)" = 0.4,-2.37,3.17,0.5
  }
}
`,Or=`chart bar-horizontal {
  title = "Every NATO ally but Slovenia expects to spend at least 2% of GDP on core defence in 2026"
  description = "Core defence expenditure as a share of real GDP, 2026 estimates, percent"
  source = "NATO, Defence Investment of NATO Countries (2014-2026), Table 3"
  sourceUrl = "https://www.nato.int/content/dam/nato/webready/documents/finance/def-exp-2026-en.pdf"
  note = "Figures are NATO estimates. Iceland has no armed forces and is not in NATO's tables. Slovenia's figure dates from before its new government's review of defence spending."
  sort = descending

  overlay "Target" {
    title = "2% guideline"
    aboveColor = "#2a9d8f"
    belowColor = "#e15759"
  }

  data {
    series = "Share of GDP","Target"
    "Lithuania" = 5.33,2
    "Estonia" = 5.10,2
    "Latvia" = 4.92,2
    "Poland" = 4.68,2
    "Greece" = 3.65,2
    "Denmark" = 3.49,2
    "Sweden" = 3.22,2
    "Norway" = 3.17,2
    "United States" = 3.17,2
    "Türkiye" = 2.85,2
    "Germany" = 2.69,2
    "Finland" = 2.65,2
    "Netherlands" = 2.58,2
    "United Kingdom" = 2.56,2
    "Romania" = 2.43,2
    "Bulgaria" = 2.22,2
    "France" = 2.22,2
    "Montenegro" = 2.17,2
    "Albania" = 2.15,2
    "Canada" = 2.13,2
    "Italy" = 2.10,2
    "Portugal" = 2.10,2
    "Hungary" = 2.09,2
    "North Macedonia" = 2.09,2
    "Croatia" = 2.03,2
    "Luxembourg" = 2.03,2
    "Slovak Republic" = 2.02,2
    "Czechia" = 2.01,2
    "Belgium" = 2.00,2
    "Spain" = 2.00,2
    "Slovenia" = 1.61,2
  }
}
`,Ir=`chart bar-multi {
  title = "Harris and Trump were within the margin of error in all seven swing states"
  description = "Final Emerson College Polling surveys of likely voters, October 30 to November 2, 2024, percent"
  source = "Emerson College Polling and The Hill, November 2024 final swing state polls"
  sourceUrl = "https://emersoncollegepolling.com/november-2024-final-swing-state-polls-too-close-to-call-election-for-president/"
  note = "Each band is the poll share plus or minus the state survey's credibility interval, from 3 to 3.4 points."
  colors = "#4e79a7, #e15759"
  legend = true
  directLabelling = ""

  overlay "Harris low" "Harris high" {
    bar = "Harris"
    title = "Harris margin of error"
    color = "#1f3d5c"
  }

  overlay "Trump low" "Trump high" {
    bar = "Trump"
    title = "Trump margin of error"
    color = "#7a1f20"
  }

  data {
    series = "Harris","Trump","Harris low","Harris high","Trump low","Trump high"
    "Arizona" = 48,50,44.8,51.2,46.8,53.2
    "Georgia" = 49,50,45.6,52.4,46.6,53.4
    "Michigan" = 50,48,46.6,53.4,44.6,51.4
    "Nevada" = 48,48,44.7,51.3,44.7,51.3
    "North Carolina" = 48,49,44.7,51.3,45.7,52.3
    "Pennsylvania" = 48,49,45,51,46,52
    "Wisconsin" = 49,49,45.6,52.4,45.6,52.4
  }
}
`;function Qe(e,t){let n=e.properties.find(a=>a.key===t);return n?String(n.value):""}function Fr(e){if(!e.data)return"";let t=e.data.entries,n=t.find(a=>a.key==="series"&&!a.quotedKey);return n?[["category",...String(n.value).split(",")].join("	"),...t.filter(a=>!(a.key==="series"&&!a.quotedKey)).map(a=>{let r=String(a.value).split(",");return[a.key,...r].join("	")})].join(`
`):[["label","value"].join("	"),...t.map(a=>[a.key,String(a.value)].join("	"))].join(`
`)}function Rr(e){if(!e.data)return"";let t=e.data.entries,n=t.find(a=>a.key==="series"&&!a.quotedKey);return n?[`series = "${String(n.value)}"`,...t.filter(a=>!(a.key==="series"&&!a.quotedKey)).map(a=>`"${a.key}" = "${String(a.value)}"`)].join(`
`):t.map(a=>`"${a.key}" = ${String(a.value)}`).join(`
`)}function v(e,t){let n=Ce(t);return{id:e,title:Qe(n,"title"),description:Qe(n,"description"),chartType:n.chartType,tsvData:Fr(n),serializedData:Rr(n),dsl:t}}var vo=[v("letter-frequency",hr),v("co2-emissions",mr),v("coffee-production",$r),v("household-income-change",Dr),v("spoken-languages",gr),v("nato-defence-spending",Or),v("quarterly-revenue",fr),v("medal-count",yr),v("election-margin",Ir),v("temperature-anomaly",br),v("bitcoin-price",vr),v("unemployment-rates",wr),v("browser-market",kr),v("world-population",Sr),v("stock-price-area",Tr),v("energy-mix-stacked-area",Ar),v("quarterly-stacked-columns",Cr),v("population-stacked-bar",xr),v("renewable-capacity",Mr),v("farm-compass",Nr),v("co2-emissions-story",Er),v("life-expectancy-wealth",zr),v("election-polls",Pr),v("life-expectancy-gains",Lr)],Ur=class extends Error{constructor(e,t){super(e,t),this.name="ChartParseError"}},Br=class extends Error{constructor(e="PNG export is only available in Node. Use toSvg() in the browser."){super(e),this.name="PngBrowserUnsupportedError"}},wo=class extends Error{constructor(e){super(e),this.name="MissingNodeRenderDepsError"}};function Gr(){return{kind:"dom",createContainer(e,t){let n=document.createElement("div");return n.style.cssText=`position:absolute;left:-99999px;top:0;width:${e}px;height:${t}px`,n.dataset.bcContentWidth=String(e),n.dataset.bcContentHeight=String(t),document.body.appendChild(n),{container:n,cleanup:()=>n.remove()}},renderToContainer(e,t,n){Ct(e,t,{sceneIndex:n.sceneIndex,thumbnail:n.thumbnail??!1,transition:!1,theme:n.theme})},serializeSvg(e){var a;let t=e.querySelector(".bc-frame-body"),n=((a=t?t.querySelector("svg"):e.querySelector("svg"))==null?void 0:a.outerHTML)??"";if(!n)throw Error("dom-backend: renderToContainer produced no SVG");return n.includes('xmlns="http://www.w3.org/2000/svg"')?n:n.replace(/^<svg(?=\s|>)/,'<svg xmlns="http://www.w3.org/2000/svg"')},serializeFrame(e){let t=e.querySelector(".bc-frame");if(t)return t.outerHTML;if(e.querySelector("svg"))return this.serializeSvg(e);throw Error("dom-backend: renderToContainer produced no frame")},rasterizePng(){return Promise.reject(new Br)}}}var jr={background:"#ffffff",color:"#333333"},Hr={background:"#1c1c1c",color:"rgba(255, 255, 255, 0.9)"},Gt="sans-serif",Xe=20,et=14,D=12,ke=1.25,qr=4,tt=8,Wr=12,Vr=40,_r="16px",nt="Blueprint Chart",Kr="Source: ",Jr=" · ",Yr=.6;function jt(e){return e==="dark"?{...Hr}:{...jr}}function Zr(){if(typeof document>"u")return null;try{return document.createElement("canvas").getContext("2d")}catch{return null}}function Qr(){let e=Zr();return(t,n,a)=>{let r=t.length*n*Yr;return e?(e.font=`${a?"bold ":""}${n}px ${Gt}`,Math.max(e.measureText(t).width,r)):r}}function ie(e,t,n,a,r){let o=[];for(let i of e.split(`
`)){let s=i.split(/\s+/).filter(Boolean);if(s.length===0)continue;let c=s[0];for(let l of s.slice(1)){let u=`${c} ${l}`;r(u,n,a)<=t?c=u:(o.push(c),c=l)}o.push(c)}return o}function V(e,t,n){let a=n.top;for(let r of t)e.push({text:r,x:n.x,y:a+n.fontSize,fontSize:n.fontSize,fontWeight:n.fontWeight,fontStyle:n.fontStyle,fill:n.fill,anchor:n.anchor}),a+=n.fontSize*ke;return a}function Xr(e){let t=parseFloat(e)||0;return/r?em$/.test(e)?t*16:t}function eo(e){let t=e.frame??{},n=jt(e.theme),[a,r,o,i]=bn(t.padding??_r).map(Xr),s=Math.max(e.width-i-r,1),c=Qr(),l=[],u=a;t.title&&(u=V(l,ie(t.title,s,Xe,!0,c),{x:i,top:u,fontSize:Xe,fontWeight:"bold",fill:n.color})),t.description&&(u=V(l,ie(t.description,s,et,!1,c),{x:i,top:t.title?u+qr:u,fontSize:et,fill:n.color}));let p=u,y=t.note?ie(t.note,s,D,!1,c):[],m=c(nt,D,!1),g=[t.byline,t.source?Kr+t.source:""].filter(Boolean).join(Jr),d=g?ie(g,Math.max(s-m-Wr,1),D,!1,c):[],b=Math.max(d.length,1),k=y.length*D*ke+tt+b*D*ke+o,w=Math.max(e.height-p-k,Vr),C=p+w;return C=V(l,y,{x:i,top:C,fontSize:D,fontStyle:"italic",fill:n.color})+tt,V(l,d,{x:i,top:C,fontSize:D,fill:n.color}),V(l,[nt],{x:e.width-r,top:C,fontSize:D,fontWeight:"600",fill:n.color,anchor:"end"}),{width:e.width,height:e.height,plot:{x:i,y:p,width:s,height:w},blocks:l,background:t.transparentBackground?null:n.background,color:n.color,fontFamily:Gt}}function ce(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function R(e){return ce(e).replace(/"/g,"&quot;")}function to(e,t){return[`<text x="${e.x}" y="${e.y}" font-size="${e.fontSize}px"`,e.fontFamily?` font-family="${R(e.fontFamily)}"`:"",e.fontWeight?` font-weight="${R(e.fontWeight)}"`:"",e.fontStyle?` font-style="${R(e.fontStyle)}"`:"",e.anchor?` text-anchor="${e.anchor}"`:"",` fill="${R(e.fill??t.color)}">`,ce(e.text),"</text>"].join("")}function no(e,t,n){return[`<svg xmlns="http://www.w3.org/2000/svg" width="${e.width}" height="${e.height}"`,` viewBox="0 0 ${e.width} ${e.height}" role="img" aria-label="${R(n.label)}"`,` font-family="${R(e.fontFamily)}" color="${R(e.color)}">`,`<title>${ce(n.label)}</title>`,`<desc>${ce(n.description)}</desc>`,e.background?`<rect width="100%" height="100%" fill="${R(e.background)}"></rect>`:"",...e.blocks.map(a=>to(a,e)),`<g transform="translate(${e.plot.x},${e.plot.y})">${t}</g>`,"</svg>"].join("")}var ao=640,ro=400;function oo(){return typeof document<"u"&&typeof document.createElement=="function"}async function io(){return oo()?Gr():(await qt(async()=>{const{createNodeBackend:e}=await import("@blueprint-chart/lib/internal/node-backend");return{createNodeBackend:e}},[])).createNodeBackend()}async function So(e,t={}){let n;try{n=Ee(Ce(e))}catch(d){throw new Ur(d instanceof Error?d.message:String(d),{cause:d})}let a=await io(),r=t.frame??!0,o={sceneIndex:t.scene,width:t.width??ao,height:t.height??ro};function i(d,b){let{background:k,color:w}=jt(b);d.style.backgroundColor=k,d.style.setProperty("--bc-text-color",w)}let s=t.theme==="auto"?void 0:t.theme,c=s?null:sn();function l(d){return s??d??(c!=null&&c.matches?"dark":void 0)}function u(d,b,k){a.renderToContainer(d,n,{sceneIndex:k,thumbnail:b,theme:l(le(n,k).theme)})}let p=new Map;function y(){p.forEach((d,b)=>{b.isConnected?u(b,!r,d):p.delete(b)}),p.size||(c==null||c.removeEventListener("change",y))}function m(d){let b=d.width??o.width,k=d.height??o.height,w=le(n,o.sceneIndex),C=l(w.theme);if(!r){let{container:z,cleanup:Ht}=a.createContainer(b,k);try{return i(z,C),u(z,!0,o.sceneIndex),a.serializeSvg(z)}finally{Ht()}}let N=eo({width:b,height:k,frame:w.frame,theme:C}),{container:M,cleanup:ne}=a.createContainer(N.plot.width,N.plot.height);try{i(M,C),u(M,!0,o.sceneIndex);let z=At(w.chartType,w.frame,w.data,w.overlays,w.options.stackMode);return no(N,a.serializeSvg(M),z)}finally{ne()}}let g={async toSvg(d={}){return m(d)},async toHtml(d={}){let{container:b,cleanup:k}=a.createContainer(d.width??o.width,d.height??o.height);try{return u(b,!r,o.sceneIndex),a.serializeFrame(b)}finally{k()}},async toPng(d={}){let b=m(d);return a.rasterizePng(b,{width:d.width??o.width,height:d.height??o.height})},mount(d){if(a.kind!=="dom")return console.warn("Blueprint Chart: mount() is a no-op outside a browser environment."),g;let b=typeof d=="string"?document.querySelector(d):d;if(!b)throw Error(`Blueprint Chart: mount target "${String(d)}" not found`);return u(b,!r,o.sceneIndex),c&&!p.size&&c.addEventListener("change",y),p.set(b,o.sceneIndex),g},scene(d){return o.sceneIndex=d,g}};return g}export{un as ANNOTATION_KIND_KEYWORD,To as Anchor,H as AnnotationKind,Ao as AnnotationLineStyle,Co as ArrowDirection,xo as AxisDirection,No as BC_TRANSITION_NAME,cn as ChartOptionType,Ur as ChartParseError,oe as ChartType,Eo as CompassDirection,Po as CrosshairDirection,Mo as CrosshairStyle,zo as DEFAULT_BAR_GAP,Lo as DEFAULT_COLORS,Do as DEFAULT_SCENE_DURATION,Oo as DirectLabelMode,wn as DotStyle,Io as DslNodeType,I as FilterCondition,Fo as FrameSizing,Ro as GridStyle,Uo as Interpolation,on as LabelPosition,Bo as LabelRotation,Go as LegendPosition,jo as LineStyle,Ho as MAPPING_NONE,wo as MissingNodeRenderDepsError,co as NULL_VALUE,en as OVERLAY_CHART_TYPES,qo as OVERLAY_KEY_CHART_TYPES,Wo as OVERLAY_SERIES_CHART_TYPES,Vo as Orientation,f as ParseOperationCategory,Br as PngBrowserUnsupportedError,_o as RESIZE_MESSAGE,Ko as RangeAnchor,Jo as SCENE_DURATION_MAX,Yo as SCENE_DURATION_MIN,vn as ScaleType,Zo as SceneTransition,ye as SortDirection,ue as SortMode,Qo as StackMode,Xo as StrokeStyle,Zt as SymbolShape,Yt as SymbolShowOn,Jt as SymbolStyle,de as TRANSFORM_TYPES,ei as TickPosition,O as TransformType,ti as ValueLabelPosition,be as adjustColorsForBackground,ia as applyTransformNodes,sa as applyTransformNodesToChartData,gt as applyTransformSteps,Ee as astToDefinition,En as buildChartOptions,no as buildFrameSvg,ni as buildSrcdoc,oa as chartDataToTable,mo as checkCvdColors,Aa as classifyIntent,na as cleanNumericValue,an as commitFadeOut,yo as compactSerialize,fo as compactSerializeDeep,Pn as contrastOverlayColors,rt as convertAnnotations,ot as convertAreaFills,st as convertColorizes,it as convertHighlights,Te as convertOverlays,at as convertSeriesOverrides,ai as createCanvas,ho as createCvdSvgFilter,ri as createFrame,oi as createPlayback,q as dataEntriesToString,ht as detectColumnTypes,ii as detectRangeColumn,xe as extractChartTypeOptions,si as extractSceneOverrides,nn as fadeIn,li as featureJoin,ci as getCachedChart,Wt as getChart,W as getChartOptions,ct as getChartTypeDefaults,Pa as getCvdFilterId,Bn as getOutputType,re as getSceneTransition,ui as getTransitionDuration,ta as isDateValue,aa as isNumberValue,di as isSeriesHidden,Un as isTypeCompatible,ve as listCharts,pi as listPalettes,ln as listThemes,Sn as numericColumns,hi as onceVisible,Ce as parse,ra as parseBpcData,K as parseData,pt as parseOperationMap,Rn as parseOperations,mi as prefersReducedMotion,U as propertyMap,S as quoteDslString,gi as readPlaybackSettings,po as recommendCharts,fi as registerChart,So as render,uo as renderBpc,Ct as renderChart,yi as renderHorizontalAxis,bi as renderLegend,vi as renderVerticalAxis,ha as repeatVisible,_t as resolveBackgroundColor,wi as resolveBarGapPadding,ut as resolveChartTypeOptions,gn as resolveDotPlotMapping,Qt as resolvePalette,dn as resolveScatterMapping,le as resolveScene,Si as resolveSeriesColor,$i as resolveSeriesInterpolation,vo as samples,Pe as sceneOverlays,go as serialize,mt as serializeTableData,xa as shapeOf,za as simulateCvdColor,Xt as snapshotForFadeOut,ki as snapshotLiveAttrs,Ae as stripDigitGroupSpaces,Re as toBool,ft as transformNodesToSteps,Wn as transformValue,bo as validateChart,Ti as wcagContrastRatio,Ai as wcagLevel};
