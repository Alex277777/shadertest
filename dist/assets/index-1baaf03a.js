var Fc=Object.defineProperty;var Nc=(a,e,t)=>e in a?Fc(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Ea=(a,e,t)=>(Nc(a,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qo="149",zc=0,Aa=1,Uc=2,ru=1,Oc=2,Sr=3,Yn=0,Gt=1,Ye=2,Xn=0,$i=1,Ca=2,Pa=3,La=4,kc=5,Vi=100,Bc=101,Vc=102,Da=103,Ra=104,Gc=200,Hc=201,Wc=202,$c=203,su=204,ou=205,Xc=206,qc=207,jc=208,Yc=209,Zc=210,Kc=0,Jc=1,Qc=2,Co=3,eh=4,th=5,nh=6,ih=7,au=0,rh=1,sh=2,Nn=0,oh=1,ah=2,lh=3,uh=4,ch=5,lu=300,Zi=301,Ki=302,Po=303,Lo=304,Es=306,Do=1e3,un=1001,Ro=1002,Tt=1003,Ia=1004,Os=1005,Se=1006,hh=1007,Lr=1008,Mi=1009,dh=1010,fh=1011,uu=1012,ph=1013,fi=1014,pi=1015,Dr=1016,mh=1017,gh=1018,Xi=1020,_h=1021,cn=1023,vh=1024,xh=1025,gi=1026,Ji=1027,yh=1028,Mh=1029,bh=1030,Sh=1031,wh=1033,ks=33776,Bs=33777,Vs=33778,Gs=33779,Fa=35840,Na=35841,za=35842,Ua=35843,Th=36196,Oa=37492,ka=37496,Ba=37808,Va=37809,Ga=37810,Ha=37811,Wa=37812,$a=37813,Xa=37814,qa=37815,ja=37816,Ya=37817,Za=37818,Ka=37819,Ja=37820,Qa=37821,Hs=36492,Eh=36283,el=36284,tl=36285,nl=36286,bi=3e3,Be=3001,Ah=3200,Ch=3201,Ph=0,Lh=1,fn="srgb",Rr="srgb-linear",Ws=7680,Dh=519,il=35044,rl="300 es",Io=1035;class ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$s=Math.PI/180,sl=180/Math.PI;function Vr(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[a&255]+_t[a>>8&255]+_t[a>>16&255]+_t[a>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function kt(a,e,t){return Math.max(e,Math.min(t,a))}function Rh(a,e){return(a%e+e)%e}function Xs(a,e,t){return(1-t)*a+t*e}function ol(a){return(a&a-1)===0&&a!==0}function Fo(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Xr(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Nt(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Z{constructor(e=0,t=0){Z.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,s,l,u){const c=this.elements;return c[0]=e,c[1]=i,c[2]=s,c[3]=t,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[3],l=n[6],u=n[1],c=n[4],d=n[7],h=n[2],m=n[5],g=n[8],f=i[0],p=i[3],_=i[6],M=i[1],x=i[4],b=i[7],y=i[2],A=i[5],C=i[8];return r[0]=o*f+s*M+l*y,r[3]=o*p+s*x+l*A,r[6]=o*_+s*b+l*C,r[1]=u*f+c*M+d*y,r[4]=u*p+c*x+d*A,r[7]=u*_+c*b+d*C,r[2]=h*f+m*M+g*y,r[5]=h*p+m*x+g*A,r[8]=h*_+m*b+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*s*u-n*r*c+n*s*l+i*r*u-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],l=e[6],u=e[7],c=e[8],d=c*o-s*u,h=s*l-c*r,m=u*r-o*l,g=t*d+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return e[0]=d*f,e[1]=(i*u-c*n)*f,e[2]=(s*n-i*o)*f,e[3]=h*f,e[4]=(c*t-i*l)*f,e[5]=(i*r-s*t)*f,e[6]=m*f,e[7]=(n*l-u*t)*f,e[8]=(o*t-n*r)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,s){const l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*o+u*s)+o+e,-i*u,i*l,-i*(-u*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(qs.makeScale(e,t)),this}rotate(e){return this.premultiply(qs.makeRotation(-e)),this}translate(e,t){return this.premultiply(qs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qs=new Vt;function cu(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ir(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function _i(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function fs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const js={[fn]:{[Rr]:_i},[Rr]:{[fn]:fs}},St={legacyMode:!0,get workingColorSpace(){return Rr},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(js[e]&&js[e][t]!==void 0){const n=js[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},it={r:0,g:0,b:0},on={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Ys(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function jr(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=St.workingColorSpace){if(e=Rh(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ys(o,r,e+1/3),this.g=Ys(o,r,e),this.b=Ys(o,r,e-1/3)}return St.toWorkingColorSpace(this,i),this}setStyle(e,t=fn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],s=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,St.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,St.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,u=parseFloat(r[2])/100,c=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,u,c,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,St.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,St.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=fn){const n=hu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return St.fromWorkingColorSpace(jr(this,it),e),kt(it.r*255,0,255)<<16^kt(it.g*255,0,255)<<8^kt(it.b*255,0,255)<<0}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(jr(this,it),t);const n=it.r,i=it.g,r=it.b,o=Math.max(n,i,r),s=Math.min(n,i,r);let l,u;const c=(s+o)/2;if(s===o)l=0,u=0;else{const d=o-s;switch(u=c<=.5?d/(o+s):d/(2-o-s),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(jr(this,it),t),e.r=it.r,e.g=it.g,e.b=it.b,e}getStyle(e=fn){return St.fromWorkingColorSpace(jr(this,it),e),e!==fn?`color(${e} ${it.r} ${it.g} ${it.b})`:`rgb(${it.r*255|0},${it.g*255|0},${it.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(on),on.h+=e,on.s+=t,on.l+=n,this.setHSL(on.h,on.s,on.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(on),e.getHSL(qr);const n=Xs(on.h,qr.h,t),i=Xs(on.s,qr.s,t),r=Xs(on.l,qr.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}$e.NAMES=hu;let Ei;class du{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=Ir("canvas")),Ei.width=e.width,Ei.height=e.height;const n=Ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ir("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class fu{constructor(e=null){this.isSource=!0,this.uuid=Vr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,s=i.length;o<s;o++)i[o].isDataTexture?r.push(Zs(i[o].image)):r.push(Zs(i[o]))}else r=Zs(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Zs(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?du.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ih=0;class Ct extends ar{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=un,i=un,r=Se,o=Lr,s=cn,l=Mi,u=Ct.DEFAULT_ANISOTROPY,c=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Vr(),this.name="",this.source=new fu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Do:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case Ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Do:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case Ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=lu;Ct.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,i=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],m=l[5],g=l[9],f=l[2],p=l[6],_=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-f)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+f)<.1&&Math.abs(g+p)<.1&&Math.abs(u+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,b=(m+1)/2,y=(_+1)/2,A=(c+h)/4,C=(d+f)/4,v=(g+p)/4;return x>b&&x>y?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=A/n,r=C/n):b>y?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=A/i,r=v/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=C/r,i=v/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(d-f)*(d-f)+(h-c)*(h-c));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-f)/M,this.z=(h-c)/M,this.w=Math.acos((u+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Si extends ar{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Se,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pu extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fh extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,s){let l=n[i+0],u=n[i+1],c=n[i+2],d=n[i+3];const h=r[o+0],m=r[o+1],g=r[o+2],f=r[o+3];if(s===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(s===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=f;return}if(d!==f||l!==h||u!==m||c!==g){let p=1-s;const _=l*h+u*m+c*g+d*f,M=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const y=Math.sqrt(x),A=Math.atan2(y,_*M);p=Math.sin(p*A)/y,s=Math.sin(s*A)/y}const b=s*M;if(l=l*p+h*b,u=u*p+m*b,c=c*p+g*b,d=d*p+f*b,p===1-s){const y=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=y,u*=y,c*=y,d*=y}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const s=n[i],l=n[i+1],u=n[i+2],c=n[i+3],d=r[o],h=r[o+1],m=r[o+2],g=r[o+3];return e[t]=s*g+c*d+l*m-u*h,e[t+1]=l*g+c*h+u*d-s*m,e[t+2]=u*g+c*m+s*h-l*d,e[t+3]=c*g-s*d-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,s=Math.cos,l=Math.sin,u=s(n/2),c=s(i/2),d=s(r/2),h=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=h*c*d+u*m*g,this._y=u*m*d-h*c*g,this._z=u*c*g+h*m*d,this._w=u*c*d-h*m*g;break;case"YXZ":this._x=h*c*d+u*m*g,this._y=u*m*d-h*c*g,this._z=u*c*g-h*m*d,this._w=u*c*d+h*m*g;break;case"ZXY":this._x=h*c*d-u*m*g,this._y=u*m*d+h*c*g,this._z=u*c*g+h*m*d,this._w=u*c*d-h*m*g;break;case"ZYX":this._x=h*c*d-u*m*g,this._y=u*m*d+h*c*g,this._z=u*c*g-h*m*d,this._w=u*c*d+h*m*g;break;case"YZX":this._x=h*c*d+u*m*g,this._y=u*m*d+h*c*g,this._z=u*c*g-h*m*d,this._w=u*c*d-h*m*g;break;case"XZY":this._x=h*c*d-u*m*g,this._y=u*m*d-h*c*g,this._z=u*c*g+h*m*d,this._w=u*c*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],s=t[5],l=t[9],u=t[2],c=t[6],d=t[10],h=n+s+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(r-u)*m,this._z=(o-i)*m}else if(n>s&&n>d){const m=2*Math.sqrt(1+n-s-d);this._w=(c-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+u)/m}else if(s>d){const m=2*Math.sqrt(1+s-n-d);this._w=(r-u)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+d-n-s);this._w=(o-i)/m,this._x=(r+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,s=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+o*s+i*u-r*l,this._y=i*c+o*l+r*s-n*u,this._z=r*c+o*u+n*l-i*s,this._w=o*c-n*s-i*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let s=o*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,s),d=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,s=e.z,l=e.w,u=l*t+o*i-s*n,c=l*n+s*t-r*i,d=l*i+r*n-o*t,h=-r*t-o*n-s*i;return this.x=u*l+h*-r+c*-s-d*-o,this.y=c*l+h*-o+d*-r-u*-s,this.z=d*l+h*-s+u*-o-c*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,s=t.y,l=t.z;return this.x=i*l-r*s,this.y=r*o-n*l,this.z=n*s-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ks.copy(this).projectOnVector(e),this.sub(Ks)}reflect(e){return this.sub(Ks.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ks=new z,al=new Gr;class Hr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,s=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],h=e[l+2];c<t&&(t=c),d<n&&(n=d),h<i&&(i=h),c>r&&(r=c),d>o&&(o=d),h>s&&(s=h)}return this.min.set(t,n,i),this.max.set(r,o,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,s=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),h=e.getZ(l);c<t&&(t=c),d<n&&(n=d),h<i&&(i=h),c>r&&(r=c),d>o&&(o=d),h>s&&(s=h)}return this.min.set(t,n,i),this.max.set(r,o,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,s=r.count;o<s;o++)ri.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ri)}else n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox),Js.applyMatrix4(e.matrixWorld),this.union(Js);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),Yr.subVectors(this.max,cr),Ai.subVectors(e.a,cr),Ci.subVectors(e.b,cr),Pi.subVectors(e.c,cr),kn.subVectors(Ci,Ai),Bn.subVectors(Pi,Ci),si.subVectors(Ai,Pi);let t=[0,-kn.z,kn.y,0,-Bn.z,Bn.y,0,-si.z,si.y,kn.z,0,-kn.x,Bn.z,0,-Bn.x,si.z,0,-si.x,-kn.y,kn.x,0,-Bn.y,Bn.x,0,-si.y,si.x,0];return!Qs(t,Ai,Ci,Pi,Yr)||(t=[1,0,0,0,1,0,0,0,1],!Qs(t,Ai,Ci,Pi,Yr))?!1:(Zr.crossVectors(kn,Bn),t=[Zr.x,Zr.y,Zr.z],Qs(t,Ai,Ci,Pi,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ri.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const An=[new z,new z,new z,new z,new z,new z,new z,new z],ri=new z,Js=new Hr,Ai=new z,Ci=new z,Pi=new z,kn=new z,Bn=new z,si=new z,cr=new z,Yr=new z,Zr=new z,oi=new z;function Qs(a,e,t,n,i){for(let r=0,o=a.length-3;r<=o;r+=3){oi.fromArray(a,r);const s=i.x*Math.abs(oi.x)+i.y*Math.abs(oi.y)+i.z*Math.abs(oi.z),l=e.dot(oi),u=t.dot(oi),c=n.dot(oi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>s)return!1}return!0}const Nh=new Hr,hr=new z,eo=new z;class ea{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);const t=hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(hr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(eo)),this.expandByPoint(hr.copy(e.center).sub(eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new z,to=new z,Kr=new z,Vn=new z,no=new z,Jr=new z,io=new z;class mu{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.direction).multiplyScalar(t).add(this.origin),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){to.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(to);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Kr),s=Vn.dot(this.direction),l=-Vn.dot(Kr),u=Vn.lengthSq(),c=Math.abs(1-o*o);let d,h,m,g;if(c>0)if(d=o*l-s,h=o*s-l,g=r*c,d>=0)if(h>=-g)if(h<=g){const f=1/c;d*=f,h*=f,m=d*(d+o*h+2*s)+h*(o*d+h+2*l)+u}else h=r,d=Math.max(0,-(o*h+s)),m=-d*d+h*(h+2*l)+u;else h=-r,d=Math.max(0,-(o*h+s)),m=-d*d+h*(h+2*l)+u;else h<=-g?(d=Math.max(0,-(-o*r+s)),h=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+u):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+u):(d=Math.max(0,-(o*r+s)),h=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+u);else h=o>0?-r:r,d=Math.max(0,-(o*h+s)),m=-d*d+h*(h+2*l)+u;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(Kr).multiplyScalar(h).add(to),m}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),i=Cn.dot(Cn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),s=n-o,l=n+o;return s<0&&l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,s,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(n=(e.min.x-h.x)*u,i=(e.max.x-h.x)*u):(n=(e.max.x-h.x)*u,i=(e.min.x-h.x)*u),c>=0?(r=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(r=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(s=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(s=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,i,r){no.subVectors(t,e),Jr.subVectors(n,e),io.crossVectors(no,Jr);let o=this.direction.dot(io),s;if(o>0){if(i)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Vn.subVectors(this.origin,e);const l=s*this.direction.dot(Jr.crossVectors(Vn,Jr));if(l<0)return null;const u=s*this.direction.dot(no.cross(Vn));if(u<0||l+u>o)return null;const c=-s*Vn.dot(io);return c<0?null:this.at(c/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,s,l,u,c,d,h,m,g,f,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=s,_[13]=l,_[2]=u,_[6]=c,_[10]=d,_[14]=h,_[3]=m,_[7]=g,_[11]=f,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Li.setFromMatrixColumn(e,0).length(),r=1/Li.setFromMatrixColumn(e,1).length(),o=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),s=Math.sin(n),l=Math.cos(i),u=Math.sin(i),c=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*c,m=o*d,g=s*c,f=s*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=m+g*u,t[5]=h-f*u,t[9]=-s*l,t[2]=f-h*u,t[6]=g+m*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,m=l*d,g=u*c,f=u*d;t[0]=h+f*s,t[4]=g*s-m,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-s,t[2]=m*s-g,t[6]=f+h*s,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,m=l*d,g=u*c,f=u*d;t[0]=h-f*s,t[4]=-o*d,t[8]=g+m*s,t[1]=m+g*s,t[5]=o*c,t[9]=f-h*s,t[2]=-o*u,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,m=o*d,g=s*c,f=s*d;t[0]=l*c,t[4]=g*u-m,t[8]=h*u+f,t[1]=l*d,t[5]=f*u+h,t[9]=m*u-g,t[2]=-u,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,g=s*l,f=s*u;t[0]=l*c,t[4]=f-h*d,t[8]=g*d+m,t[1]=d,t[5]=o*c,t[9]=-s*c,t[2]=-u*c,t[6]=m*d+g,t[10]=h-f*d}else if(e.order==="XZY"){const h=o*l,m=o*u,g=s*l,f=s*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=h*d+f,t[5]=o*c,t[9]=m*d-g,t[2]=g*d-m,t[6]=s*c,t[10]=f*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zh,e,Uh)}lookAt(e,t,n){const i=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Gn.crossVectors(n,zt),Gn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Gn.crossVectors(n,zt)),Gn.normalize(),Qr.crossVectors(zt,Gn),i[0]=Gn.x,i[4]=Qr.x,i[8]=zt.x,i[1]=Gn.y,i[5]=Qr.y,i[9]=zt.y,i[2]=Gn.z,i[6]=Qr.z,i[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[4],l=n[8],u=n[12],c=n[1],d=n[5],h=n[9],m=n[13],g=n[2],f=n[6],p=n[10],_=n[14],M=n[3],x=n[7],b=n[11],y=n[15],A=i[0],C=i[4],v=i[8],w=i[12],L=i[1],k=i[5],X=i[9],R=i[13],D=i[2],U=i[6],Y=i[10],q=i[14],B=i[3],J=i[7],K=i[11],ue=i[15];return r[0]=o*A+s*L+l*D+u*B,r[4]=o*C+s*k+l*U+u*J,r[8]=o*v+s*X+l*Y+u*K,r[12]=o*w+s*R+l*q+u*ue,r[1]=c*A+d*L+h*D+m*B,r[5]=c*C+d*k+h*U+m*J,r[9]=c*v+d*X+h*Y+m*K,r[13]=c*w+d*R+h*q+m*ue,r[2]=g*A+f*L+p*D+_*B,r[6]=g*C+f*k+p*U+_*J,r[10]=g*v+f*X+p*Y+_*K,r[14]=g*w+f*R+p*q+_*ue,r[3]=M*A+x*L+b*D+y*B,r[7]=M*C+x*k+b*U+y*J,r[11]=M*v+x*X+b*Y+y*K,r[15]=M*w+x*R+b*q+y*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],s=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],m=e[14],g=e[3],f=e[7],p=e[11],_=e[15];return g*(+r*l*d-i*u*d-r*s*h+n*u*h+i*s*m-n*l*m)+f*(+t*l*m-t*u*h+r*o*h-i*o*m+i*u*c-r*l*c)+p*(+t*u*d-t*s*m-r*o*d+n*o*m+r*s*c-n*u*c)+_*(-i*s*c-t*l*d+t*s*h+i*o*d-n*o*h+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],m=e[11],g=e[12],f=e[13],p=e[14],_=e[15],M=d*p*u-f*h*u+f*l*m-s*p*m-d*l*_+s*h*_,x=g*h*u-c*p*u-g*l*m+o*p*m+c*l*_-o*h*_,b=c*f*u-g*d*u+g*s*m-o*f*m-c*s*_+o*d*_,y=g*d*l-c*f*l-g*s*h+o*f*h+c*s*p-o*d*p,A=t*M+n*x+i*b+r*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=M*C,e[1]=(f*h*r-d*p*r-f*i*m+n*p*m+d*i*_-n*h*_)*C,e[2]=(s*p*r-f*l*r+f*i*u-n*p*u-s*i*_+n*l*_)*C,e[3]=(d*l*r-s*h*r-d*i*u+n*h*u+s*i*m-n*l*m)*C,e[4]=x*C,e[5]=(c*p*r-g*h*r+g*i*m-t*p*m-c*i*_+t*h*_)*C,e[6]=(g*l*r-o*p*r-g*i*u+t*p*u+o*i*_-t*l*_)*C,e[7]=(o*h*r-c*l*r+c*i*u-t*h*u-o*i*m+t*l*m)*C,e[8]=b*C,e[9]=(g*d*r-c*f*r-g*n*m+t*f*m+c*n*_-t*d*_)*C,e[10]=(o*f*r-g*s*r+g*n*u-t*f*u-o*n*_+t*s*_)*C,e[11]=(c*s*r-o*d*r-c*n*u+t*d*u+o*n*m-t*s*m)*C,e[12]=y*C,e[13]=(c*f*i-g*d*i+g*n*h-t*f*h-c*n*p+t*d*p)*C,e[14]=(g*s*i-o*f*i-g*n*l+t*f*l+o*n*p-t*s*p)*C,e[15]=(o*d*i-c*s*i+c*n*l-t*d*l-o*n*h+t*s*h)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,s=e.y,l=e.z,u=r*o,c=r*s;return this.set(u*o+n,u*s-i*l,u*l+i*s,0,u*s+i*l,c*s+n,c*l-i*o,0,u*l-i*s,c*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,s=t._z,l=t._w,u=r+r,c=o+o,d=s+s,h=r*u,m=r*c,g=r*d,f=o*c,p=o*d,_=s*d,M=l*u,x=l*c,b=l*d,y=n.x,A=n.y,C=n.z;return i[0]=(1-(f+_))*y,i[1]=(m+b)*y,i[2]=(g-x)*y,i[3]=0,i[4]=(m-b)*A,i[5]=(1-(h+_))*A,i[6]=(p+M)*A,i[7]=0,i[8]=(g+x)*C,i[9]=(p-M)*C,i[10]=(1-(h+f))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Li.set(i[0],i[1],i[2]).length();const o=Li.set(i[4],i[5],i[6]).length(),s=Li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],an.copy(this);const u=1/r,c=1/o,d=1/s;return an.elements[0]*=u,an.elements[1]*=u,an.elements[2]*=u,an.elements[4]*=c,an.elements[5]*=c,an.elements[6]*=c,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,t.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=s,this}makePerspective(e,t,n,i,r,o){const s=this.elements,l=2*r/(t-e),u=2*r/(n-i),c=(t+e)/(t-e),d=(n+i)/(n-i),h=-(o+r)/(o-r),m=-2*o*r/(o-r);return s[0]=l,s[4]=0,s[8]=c,s[12]=0,s[1]=0,s[5]=u,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=h,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,o){const s=this.elements,l=1/(t-e),u=1/(n-i),c=1/(o-r),d=(t+e)*l,h=(n+i)*u,m=(o+r)*c;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*u,s[9]=0,s[13]=-h,s[2]=0,s[6]=0,s[10]=-2*c,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Li=new z,an=new pt,zh=new z(0,0,0),Uh=new z(1,1,1),Gn=new z,Qr=new z,zt=new z,ll=new pt,ul=new Gr;class As{constructor(e=0,t=0,n=0,i=As.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],s=i[8],l=i[1],u=i[5],c=i[9],d=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(kt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ll.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ll,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ul.setFromEuler(this),this.setFromQuaternion(ul,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}As.DEFAULT_ORDER="XYZ";class ta{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Oh=0;const cl=new z,Di=new Gr,Pn=new pt,es=new z,dr=new z,kh=new z,Bh=new Gr,hl=new z(1,0,0),dl=new z(0,1,0),fl=new z(0,0,1),Vh={type:"added"},pl={type:"removed"};class Ht extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new z,t=new As,n=new Gr,i=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pt},normalMatrix:{value:new Vt}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(hl,e)}rotateY(e){return this.rotateOnAxis(dl,e)}rotateZ(e){return this.rotateOnAxis(fl,e)}translateOnAxis(e,t){return cl.copy(e).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hl,e)}translateY(e){return this.translateOnAxis(dl,e)}translateZ(e){return this.translateOnAxis(fl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?es.copy(e):es.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(dr,es,this.up):Pn.lookAt(es,dr,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),Di.setFromRotationMatrix(Pn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(pl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,kh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Bh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(r(e.materials,this.material[l]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(s){const l=[];for(const u in s){const c=s[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ht.DEFAULT_UP=new z(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new z,Ln=new z,ro=new z,Dn=new z,Ri=new z,Ii=new z,ml=new z,so=new z,oo=new z,ao=new z;class Fn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ln.subVectors(e,t),i.cross(ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ln.subVectors(i,t),Ln.subVectors(n,t),ro.subVectors(e,t);const o=ln.dot(ln),s=ln.dot(Ln),l=ln.dot(ro),u=Ln.dot(Ln),c=Ln.dot(ro),d=o*u-s*s;if(d===0)return r.set(-2,-1,-1);const h=1/d,m=(u*l-s*c)*h,g=(o*c-s*l)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Dn),Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(e,t,n,i,r,o,s,l){return this.getBarycoord(e,t,n,i,Dn),l.set(0,0),l.addScaledVector(r,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(s,Dn.z),l}static isFrontFacing(e,t,n,i){return ln.subVectors(n,t),Ln.subVectors(e,t),ln.cross(Ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),ln.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Fn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,s;Ri.subVectors(i,n),Ii.subVectors(r,n),so.subVectors(e,n);const l=Ri.dot(so),u=Ii.dot(so);if(l<=0&&u<=0)return t.copy(n);oo.subVectors(e,i);const c=Ri.dot(oo),d=Ii.dot(oo);if(c>=0&&d<=c)return t.copy(i);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(n).addScaledVector(Ri,o);ao.subVectors(e,r);const m=Ri.dot(ao),g=Ii.dot(ao);if(g>=0&&m<=g)return t.copy(r);const f=m*u-l*g;if(f<=0&&u>=0&&g<=0)return s=u/(u-g),t.copy(n).addScaledVector(Ii,s);const p=c*g-m*d;if(p<=0&&d-c>=0&&m-g>=0)return ml.subVectors(r,i),s=(d-c)/(d-c+(m-g)),t.copy(i).addScaledVector(ml,s);const _=1/(p+f+h);return o=f*_,s=h*_,t.copy(n).addScaledVector(Ri,o).addScaledVector(Ii,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Gh=0;class Cs extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Vr(),this.name="",this.type="Material",this.blending=$i,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=su,this.blendDst=ou,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const s in r){const l=r[s];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gu extends Cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qe=new z,ts=new Z;class _n{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=il,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ts.fromBufferAttribute(this,t),ts.applyMatrix3(e),this.setXY(t,ts.x,ts.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix3(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix4(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyNormalMatrix(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.transformDirection(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==il&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class _u extends _n{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vu extends _n{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vn extends _n{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hh=0;const Zt=new pt,lo=new Ht,Fi=new z,Ut=new Hr,fr=new Hr,ct=new z;class Jn extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cu(e)?vu:_u)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return lo.lookAt(e),lo.updateMatrix(),this.applyMatrix4(lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new vn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ut.setFromBufferAttribute(r),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const s=t[r];fr.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(Ut.min,fr.min),Ut.expandByPoint(ct),ct.addVectors(Ut.max,fr.max),Ut.expandByPoint(ct)):(Ut.expandByPoint(fr.min),Ut.expandByPoint(fr.max))}Ut.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)ct.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ct));if(t)for(let r=0,o=t.length;r<o;r++){const s=t[r],l=this.morphTargetsRelative;for(let u=0,c=s.count;u<c;u++)ct.fromBufferAttribute(s,u),l&&(Fi.fromBufferAttribute(e,u),ct.add(Fi)),i=Math.max(i,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let L=0;L<s;L++)u[L]=new z,c[L]=new z;const d=new z,h=new z,m=new z,g=new Z,f=new Z,p=new Z,_=new z,M=new z;function x(L,k,X){d.fromArray(i,L*3),h.fromArray(i,k*3),m.fromArray(i,X*3),g.fromArray(o,L*2),f.fromArray(o,k*2),p.fromArray(o,X*2),h.sub(d),m.sub(d),f.sub(g),p.sub(g);const R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(R),M.copy(m).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(R),u[L].add(_),u[k].add(_),u[X].add(_),c[L].add(M),c[k].add(M),c[X].add(M))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let L=0,k=b.length;L<k;++L){const X=b[L],R=X.start,D=X.count;for(let U=R,Y=R+D;U<Y;U+=3)x(n[U+0],n[U+1],n[U+2])}const y=new z,A=new z,C=new z,v=new z;function w(L){C.fromArray(r,L*3),v.copy(C);const k=u[L];y.copy(k),y.sub(C.multiplyScalar(C.dot(k))).normalize(),A.crossVectors(v,k);const R=A.dot(c[L])<0?-1:1;l[L*4]=y.x,l[L*4+1]=y.y,l[L*4+2]=y.z,l[L*4+3]=R}for(let L=0,k=b.length;L<k;++L){const X=b[L],R=X.start,D=X.count;for(let U=R,Y=R+D;U<Y;U+=3)w(n[U+0]),w(n[U+1]),w(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new z,r=new z,o=new z,s=new z,l=new z,u=new z,c=new z,d=new z;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),f=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,f),o.fromBufferAttribute(t,p),c.subVectors(o,r),d.subVectors(i,r),c.cross(d),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),u.fromBufferAttribute(n,p),s.add(c),l.add(c),u.add(c),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,r),d.subVectors(i,r),c.cross(d),n.setXYZ(h+0,c.x,c.y,c.z),n.setXYZ(h+1,c.x,c.y,c.z),n.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(s,l){const u=s.array,c=s.itemSize,d=s.normalized,h=new u.constructor(l.length*c);let m=0,g=0;for(let f=0,p=l.length;f<p;f++){s.isInterleavedBufferAttribute?m=l[f]*s.data.stride+s.offset:m=l[f]*c;for(let _=0;_<c;_++)h[g++]=u[m++]}return new _n(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jn,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],u=e(l,n);t.setAttribute(s,u)}const r=this.morphAttributes;for(const s in r){const l=[],u=r[s];for(let c=0,d=u.length;c<d;c++){const h=u[c],m=e(h,n);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const u=o[s];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const m=u[d];c.push(m.toJSON(e.data))}c.length>0&&(i[l]=c,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const c=i[u];this.setAttribute(u,c.clone(t))}const r=e.morphAttributes;for(const u in r){const c=[],d=r[u];for(let h=0,m=d.length;h<m;h++)c.push(d[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const gl=new pt,Ni=new mu,uo=new ea,pr=new z,mr=new z,gr=new z,co=new z,ns=new z,is=new Z,rs=new Z,ss=new Z,ho=new z,os=new z;class Ze extends Ht{constructor(e=new Jn,t=new gu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(r&&s){ns.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const c=s[l],d=r[l];c!==0&&(co.fromBufferAttribute(d,e),o?ns.addScaledVector(co,c):ns.addScaledVector(co.sub(t),c))}t.add(ns)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(r),e.ray.intersectsSphere(uo)===!1)||(gl.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(gl),n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1))return;let o;const s=n.index,l=n.attributes.position,u=n.attributes.uv,c=n.attributes.uv2,d=n.groups,h=n.drawRange;if(s!==null)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const f=d[m],p=i[f.materialIndex],_=Math.max(f.start,h.start),M=Math.min(s.count,Math.min(f.start+f.count,h.start+h.count));for(let x=_,b=M;x<b;x+=3){const y=s.getX(x),A=s.getX(x+1),C=s.getX(x+2);o=as(this,p,e,Ni,u,c,y,A,C),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=f.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),g=Math.min(s.count,h.start+h.count);for(let f=m,p=g;f<p;f+=3){const _=s.getX(f),M=s.getX(f+1),x=s.getX(f+2);o=as(this,i,e,Ni,u,c,_,M,x),o&&(o.faceIndex=Math.floor(f/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const f=d[m],p=i[f.materialIndex],_=Math.max(f.start,h.start),M=Math.min(l.count,Math.min(f.start+f.count,h.start+h.count));for(let x=_,b=M;x<b;x+=3){const y=x,A=x+1,C=x+2;o=as(this,p,e,Ni,u,c,y,A,C),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=f.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let f=m,p=g;f<p;f+=3){const _=f,M=f+1,x=f+2;o=as(this,i,e,Ni,u,c,_,M,x),o&&(o.faceIndex=Math.floor(f/3),t.push(o))}}}}function Wh(a,e,t,n,i,r,o,s){let l;if(e.side===Gt?l=n.intersectTriangle(o,r,i,!0,s):l=n.intersectTriangle(i,r,o,e.side===Yn,s),l===null)return null;os.copy(s),os.applyMatrix4(a.matrixWorld);const u=t.ray.origin.distanceTo(os);return u<t.near||u>t.far?null:{distance:u,point:os.clone(),object:a}}function as(a,e,t,n,i,r,o,s,l){a.getVertexPosition(o,pr),a.getVertexPosition(s,mr),a.getVertexPosition(l,gr);const u=Wh(a,e,t,n,pr,mr,gr,ho);if(u){i&&(is.fromBufferAttribute(i,o),rs.fromBufferAttribute(i,s),ss.fromBufferAttribute(i,l),u.uv=Fn.getUV(ho,pr,mr,gr,is,rs,ss,new Z)),r&&(is.fromBufferAttribute(r,o),rs.fromBufferAttribute(r,s),ss.fromBufferAttribute(r,l),u.uv2=Fn.getUV(ho,pr,mr,gr,is,rs,ss,new Z));const c={a:o,b:s,c:l,normal:new z,materialIndex:0};Fn.getNormal(pr,mr,gr,c.normal),u.face=c}return u}class Wr extends Jn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const s=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new vn(u,3)),this.setAttribute("normal",new vn(c,3)),this.setAttribute("uv",new vn(d,2));function g(f,p,_,M,x,b,y,A,C,v,w){const L=b/C,k=y/v,X=b/2,R=y/2,D=A/2,U=C+1,Y=v+1;let q=0,B=0;const J=new z;for(let K=0;K<Y;K++){const ue=K*k-R;for(let N=0;N<U;N++){const j=N*L-X;J[f]=j*M,J[p]=ue*x,J[_]=D,u.push(J.x,J.y,J.z),J[f]=0,J[p]=0,J[_]=A>0?1:-1,c.push(J.x,J.y,J.z),d.push(N/C),d.push(1-K/v),q+=1}}for(let K=0;K<v;K++)for(let ue=0;ue<C;ue++){const N=h+ue+U*K,j=h+ue+U*(K+1),te=h+(ue+1)+U*(K+1),ne=h+(ue+1)+U*K;l.push(N,j,ne),l.push(j,te,ne),B+=6}s.addGroup(m,B,w),m+=B,h+=q}}static fromJSON(e){return new Wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qi(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wt(a){const e={};for(let t=0;t<a.length;t++){const n=Qi(a[t]);for(const i in n)e[i]=n[i]}return e}function $h(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function xu(a){return a.getRenderTarget()===null&&a.outputEncoding===Be?fn:Rr}const Xh={clone:Qi,merge:wt};var qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tt extends Cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qh,this.fragmentShader=jh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=$h(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class yu extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qt extends yu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sl*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($s*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/u,i*=o.width/l,n*=o.height/u}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zi=-90,Ui=1;class Yh extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Qt(zi,Ui,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Qt(zi,Ui,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Qt(zi,Ui,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const s=new Qt(zi,Ui,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new Qt(zi,Ui,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new Qt(zi,Ui,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,s,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=Nn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Mu extends Ct{constructor(e,t,n,i,r,o,s,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Zi,super(e,t,n,i,r,o,s,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zh extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Mu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Se}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Wr(5,5,5),r=new tt({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Xn});r.uniforms.tEquirect.value=t;const o=new Ze(i,r),s=t.minFilter;return t.minFilter===Lr&&(t.minFilter=Se),new Yh(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const fo=new z,Kh=new z,Jh=new Vt;class ui{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=fo.subVectors(n,t).cross(Kh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(fo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Jh.getNormalMatrix(e),i=this.coplanarPoint(fo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new ea,ls=new z;class bu{constructor(e=new ui,t=new ui,n=new ui,i=new ui,r=new ui,o=new ui){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],s=n[3],l=n[4],u=n[5],c=n[6],d=n[7],h=n[8],m=n[9],g=n[10],f=n[11],p=n[12],_=n[13],M=n[14],x=n[15];return t[0].setComponents(s-i,d-l,f-h,x-p).normalize(),t[1].setComponents(s+i,d+l,f+h,x+p).normalize(),t[2].setComponents(s+r,d+u,f+m,x+_).normalize(),t[3].setComponents(s-r,d-u,f-m,x-_).normalize(),t[4].setComponents(s-o,d-c,f-g,x-M).normalize(),t[5].setComponents(s+o,d+c,f+g,x+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSprite(e){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ls.x=i.normal.x>0?e.max.x:e.min.x,ls.y=i.normal.y>0?e.max.y:e.min.y,ls.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Su(){let a=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function Qh(a,e){const t=e.isWebGL2,n=new WeakMap;function i(u,c){const d=u.array,h=u.usage,m=a.createBuffer();a.bindBuffer(c,m),a.bufferData(c,d,h),u.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function r(u,c,d){const h=c.array,m=c.updateRange;a.bindBuffer(d,u),m.count===-1?a.bufferSubData(d,0,h):(t?a.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):a.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=n.get(u);c&&(a.deleteBuffer(c.buffer),n.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=n.get(u);(!h||h.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);d===void 0?n.set(u,i(u,c)):d.version<u.version&&(r(d.buffer,u,c),d.version=u.version)}return{get:o,remove:s,update:l}}class Et extends Jn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,s=Math.floor(n),l=Math.floor(i),u=s+1,c=l+1,d=e/s,h=t/l,m=[],g=[],f=[],p=[];for(let _=0;_<c;_++){const M=_*h-o;for(let x=0;x<u;x++){const b=x*d-r;g.push(b,-M,0),f.push(0,0,1),p.push(x/s),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<s;M++){const x=M+u*_,b=M+u*(_+1),y=M+1+u*(_+1),A=M+1+u*_;m.push(x,b,A),m.push(b,y,A)}this.setIndex(m),this.setAttribute("position",new vn(g,3)),this.setAttribute("normal",new vn(f,3)),this.setAttribute("uv",new vn(p,2))}static fromJSON(e){return new Et(e.width,e.height,e.widthSegments,e.heightSegments)}}var ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,od="vec3 transformed = vec3( position );",ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ld=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,ud=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,yd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Md=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ad=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ud=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Od=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$d=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Yd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Qd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ef=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,df=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ff=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,mf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,bf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Ef=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Df=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rf=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,$f=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Xf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,qf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,jf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Yf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Zf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Kf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ep=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,op=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ap=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ep=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Dp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Te={alphamap_fragment:ed,alphamap_pars_fragment:td,alphatest_fragment:nd,alphatest_pars_fragment:id,aomap_fragment:rd,aomap_pars_fragment:sd,begin_vertex:od,beginnormal_vertex:ad,bsdfs:ld,iridescence_fragment:ud,bumpmap_pars_fragment:cd,clipping_planes_fragment:hd,clipping_planes_pars_fragment:dd,clipping_planes_pars_vertex:fd,clipping_planes_vertex:pd,color_fragment:md,color_pars_fragment:gd,color_pars_vertex:_d,color_vertex:vd,common:xd,cube_uv_reflection_fragment:yd,defaultnormal_vertex:Md,displacementmap_pars_vertex:bd,displacementmap_vertex:Sd,emissivemap_fragment:wd,emissivemap_pars_fragment:Td,encodings_fragment:Ed,encodings_pars_fragment:Ad,envmap_fragment:Cd,envmap_common_pars_fragment:Pd,envmap_pars_fragment:Ld,envmap_pars_vertex:Dd,envmap_physical_pars_fragment:Hd,envmap_vertex:Rd,fog_vertex:Id,fog_pars_vertex:Fd,fog_fragment:Nd,fog_pars_fragment:zd,gradientmap_pars_fragment:Ud,lightmap_fragment:Od,lightmap_pars_fragment:kd,lights_lambert_fragment:Bd,lights_lambert_pars_fragment:Vd,lights_pars_begin:Gd,lights_toon_fragment:Wd,lights_toon_pars_fragment:$d,lights_phong_fragment:Xd,lights_phong_pars_fragment:qd,lights_physical_fragment:jd,lights_physical_pars_fragment:Yd,lights_fragment_begin:Zd,lights_fragment_maps:Kd,lights_fragment_end:Jd,logdepthbuf_fragment:Qd,logdepthbuf_pars_fragment:ef,logdepthbuf_pars_vertex:tf,logdepthbuf_vertex:nf,map_fragment:rf,map_pars_fragment:sf,map_particle_fragment:of,map_particle_pars_fragment:af,metalnessmap_fragment:lf,metalnessmap_pars_fragment:uf,morphcolor_vertex:cf,morphnormal_vertex:hf,morphtarget_pars_vertex:df,morphtarget_vertex:ff,normal_fragment_begin:pf,normal_fragment_maps:mf,normal_pars_fragment:gf,normal_pars_vertex:_f,normal_vertex:vf,normalmap_pars_fragment:xf,clearcoat_normal_fragment_begin:yf,clearcoat_normal_fragment_maps:Mf,clearcoat_pars_fragment:bf,iridescence_pars_fragment:Sf,output_fragment:wf,packing:Tf,premultiplied_alpha_fragment:Ef,project_vertex:Af,dithering_fragment:Cf,dithering_pars_fragment:Pf,roughnessmap_fragment:Lf,roughnessmap_pars_fragment:Df,shadowmap_pars_fragment:Rf,shadowmap_pars_vertex:If,shadowmap_vertex:Ff,shadowmask_pars_fragment:Nf,skinbase_vertex:zf,skinning_pars_vertex:Uf,skinning_vertex:Of,skinnormal_vertex:kf,specularmap_fragment:Bf,specularmap_pars_fragment:Vf,tonemapping_fragment:Gf,tonemapping_pars_fragment:Hf,transmission_fragment:Wf,transmission_pars_fragment:$f,uv_pars_fragment:Xf,uv_pars_vertex:qf,uv_vertex:jf,uv2_pars_fragment:Yf,uv2_pars_vertex:Zf,uv2_vertex:Kf,worldpos_vertex:Jf,background_vert:Qf,background_frag:ep,backgroundCube_vert:tp,backgroundCube_frag:np,cube_vert:ip,cube_frag:rp,depth_vert:sp,depth_frag:op,distanceRGBA_vert:ap,distanceRGBA_frag:lp,equirect_vert:up,equirect_frag:cp,linedashed_vert:hp,linedashed_frag:dp,meshbasic_vert:fp,meshbasic_frag:pp,meshlambert_vert:mp,meshlambert_frag:gp,meshmatcap_vert:_p,meshmatcap_frag:vp,meshnormal_vert:xp,meshnormal_frag:yp,meshphong_vert:Mp,meshphong_frag:bp,meshphysical_vert:Sp,meshphysical_frag:wp,meshtoon_vert:Tp,meshtoon_frag:Ep,points_vert:Ap,points_frag:Cp,shadow_vert:Pp,shadow_frag:Lp,sprite_vert:Dp,sprite_frag:Rp},re={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Vt},uv2Transform:{value:new Vt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vt}}},pn={basic:{uniforms:wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new $e(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:wt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:wt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new $e(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:wt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:wt([re.points,re.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:wt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:wt([re.common,re.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:wt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:wt([re.sprite,re.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:wt([re.common,re.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:wt([re.lights,re.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};pn.physical={uniforms:wt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Z(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const us={r:0,b:0,g:0};function Ip(a,e,t,n,i,r,o){const s=new $e(0);let l=r===!0?0:1,u,c,d=null,h=0,m=null;function g(p,_){let M=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const b=a.xr,y=b.getSession&&b.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?f(s,l):x&&x.isColor&&(f(x,1),M=!0),(a.autoClear||M)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Es)?(c===void 0&&(c=new Ze(new Wr(1,1,1),new tt({name:"BackgroundCubeMaterial",uniforms:Qi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,C,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==Be,(d!==x||h!==x.version||m!==a.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,m=a.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Ze(new Et(2,2),new tt({name:"BackgroundMaterial",uniforms:Qi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=x.encoding!==Be,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||m!==a.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,m=a.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function f(p,_){p.getRGB(us,xu(a)),n.buffers.color.setClear(us.r,us.g,us.b,_,o)}return{getClearColor:function(){return s},setClearColor:function(p,_=1){s.set(p),l=_,f(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,f(s,l)},render:g}}function Fp(a,e,t,n){const i=a.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,s={},l=p(null);let u=l,c=!1;function d(D,U,Y,q,B){let J=!1;if(o){const K=f(q,Y,U);u!==K&&(u=K,m(u.object)),J=_(D,q,Y,B),J&&M(D,q,Y,B)}else{const K=U.wireframe===!0;(u.geometry!==q.id||u.program!==Y.id||u.wireframe!==K)&&(u.geometry=q.id,u.program=Y.id,u.wireframe=K,J=!0)}B!==null&&t.update(B,34963),(J||c)&&(c=!1,v(D,U,Y,q),B!==null&&a.bindBuffer(34963,t.get(B).buffer))}function h(){return n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?a.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?a.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function f(D,U,Y){const q=Y.wireframe===!0;let B=s[D.id];B===void 0&&(B={},s[D.id]=B);let J=B[U.id];J===void 0&&(J={},B[U.id]=J);let K=J[q];return K===void 0&&(K=p(h()),J[q]=K),K}function p(D){const U=[],Y=[],q=[];for(let B=0;B<i;B++)U[B]=0,Y[B]=0,q[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:Y,attributeDivisors:q,object:D,attributes:{},index:null}}function _(D,U,Y,q){const B=u.attributes,J=U.attributes;let K=0;const ue=Y.getAttributes();for(const N in ue)if(ue[N].location>=0){const te=B[N];let ne=J[N];if(ne===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor)),te===void 0||te.attribute!==ne||ne&&te.data!==ne.data)return!0;K++}return u.attributesNum!==K||u.index!==q}function M(D,U,Y,q){const B={},J=U.attributes;let K=0;const ue=Y.getAttributes();for(const N in ue)if(ue[N].location>=0){let te=J[N];te===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));const ne={};ne.attribute=te,te&&te.data&&(ne.data=te.data),B[N]=ne,K++}u.attributes=B,u.attributesNum=K,u.index=q}function x(){const D=u.newAttributes;for(let U=0,Y=D.length;U<Y;U++)D[U]=0}function b(D){y(D,0)}function y(D,U){const Y=u.newAttributes,q=u.enabledAttributes,B=u.attributeDivisors;Y[D]=1,q[D]===0&&(a.enableVertexAttribArray(D),q[D]=1),B[D]!==U&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,U),B[D]=U)}function A(){const D=u.newAttributes,U=u.enabledAttributes;for(let Y=0,q=U.length;Y<q;Y++)U[Y]!==D[Y]&&(a.disableVertexAttribArray(Y),U[Y]=0)}function C(D,U,Y,q,B,J){n.isWebGL2===!0&&(Y===5124||Y===5125)?a.vertexAttribIPointer(D,U,Y,B,J):a.vertexAttribPointer(D,U,Y,q,B,J)}function v(D,U,Y,q){if(n.isWebGL2===!1&&(D.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const B=q.attributes,J=Y.getAttributes(),K=U.defaultAttributeValues;for(const ue in J){const N=J[ue];if(N.location>=0){let j=B[ue];if(j===void 0&&(ue==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),ue==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const te=j.normalized,ne=j.itemSize,O=t.get(j);if(O===void 0)continue;const be=O.buffer,de=O.type,fe=O.bytesPerElement;if(j.isInterleavedBufferAttribute){const le=j.data,ke=le.stride,we=j.offset;if(le.isInstancedInterleavedBuffer){for(let xe=0;xe<N.locationSize;xe++)y(N.location+xe,le.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let xe=0;xe<N.locationSize;xe++)b(N.location+xe);a.bindBuffer(34962,be);for(let xe=0;xe<N.locationSize;xe++)C(N.location+xe,ne/N.locationSize,de,te,ke*fe,(we+ne/N.locationSize*xe)*fe)}else{if(j.isInstancedBufferAttribute){for(let le=0;le<N.locationSize;le++)y(N.location+le,j.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let le=0;le<N.locationSize;le++)b(N.location+le);a.bindBuffer(34962,be);for(let le=0;le<N.locationSize;le++)C(N.location+le,ne/N.locationSize,de,te,ne*fe,ne/N.locationSize*le*fe)}}else if(K!==void 0){const te=K[ue];if(te!==void 0)switch(te.length){case 2:a.vertexAttrib2fv(N.location,te);break;case 3:a.vertexAttrib3fv(N.location,te);break;case 4:a.vertexAttrib4fv(N.location,te);break;default:a.vertexAttrib1fv(N.location,te)}}}}A()}function w(){X();for(const D in s){const U=s[D];for(const Y in U){const q=U[Y];for(const B in q)g(q[B].object),delete q[B];delete U[Y]}delete s[D]}}function L(D){if(s[D.id]===void 0)return;const U=s[D.id];for(const Y in U){const q=U[Y];for(const B in q)g(q[B].object),delete q[B];delete U[Y]}delete s[D.id]}function k(D){for(const U in s){const Y=s[U];if(Y[D.id]===void 0)continue;const q=Y[D.id];for(const B in q)g(q[B].object),delete q[B];delete Y[D.id]}}function X(){R(),c=!0,u!==l&&(u=l,m(u.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:L,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:b,disableUnusedAttributes:A}}function Np(a,e,t,n){const i=n.isWebGL2;let r;function o(u){r=u}function s(u,c){a.drawArrays(r,u,c),t.update(c,r,1)}function l(u,c,d){if(d===0)return;let h,m;if(i)h=a,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](r,u,c,d),t.update(c,r,d)}this.setMode=o,this.render=s,this.renderInstances=l}function zp(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext;let s=t.precision!==void 0?t.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=a.getParameter(34930),h=a.getParameter(35660),m=a.getParameter(3379),g=a.getParameter(34076),f=a.getParameter(34921),p=a.getParameter(36347),_=a.getParameter(36348),M=a.getParameter(36349),x=h>0,b=o||e.has("OES_texture_float"),y=x&&b,A=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:y,maxSamples:A}}function Up(a){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ui,s=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||n!==0||i;return i=h,n=d.length,m},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=c(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,f=d.clipIntersection,p=d.clipShadows,_=a.get(d);if(!i||g===null||g.length===0||r&&!p)r?c(null):u();else{const M=r?0:n,x=M*4;let b=_.clippingState||null;l.value=b,b=c(g,h,x,m);for(let y=0;y!==x;++y)b[y]=t[y];_.clippingState=b,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(d,h,m,g){const f=d!==null?d.length:0;let p=null;if(f!==0){if(p=l.value,g!==!0||p===null){const _=m+f*4,M=h.matrixWorldInverse;s.getNormalMatrix(M),(p===null||p.length<_)&&(p=new Float32Array(_));for(let x=0,b=m;x!==f;++x,b+=4)o.copy(d[x]).applyMatrix4(M,s),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,p}}function Op(a){let e=new WeakMap;function t(o,s){return s===Po?o.mapping=Zi:s===Lo&&(o.mapping=Ki),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===Po||s===Lo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Zh(l.height/2);return u.fromEquirectangularTexture(a,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){const s=o.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class kp extends yu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,s=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,s-=c*this.view.offsetY,l=s-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gi=4,_l=[.125,.215,.35,.446,.526,.582],di=20,po=new kp,vl=new $e;let mo=null;const ci=(1+Math.sqrt(5))/2,ki=1/ci,xl=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,ci,ki),new z(0,ci,-ki),new z(ki,0,ci),new z(-ki,0,ci),new z(ci,ki,0),new z(-ci,ki,0)];class yl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){mo=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mo),e.scissorTest=!1,cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Se,minFilter:Se,generateMipmaps:!1,type:Dr,format:cn,encoding:bi,depthBuffer:!1},i=Ml(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ml(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bp(r)),this._blurMaterial=Vp(r,e,t)}return i}_compileMaterial(e){const t=new Ze(this._lodPlanes[0],e);this._renderer.compile(t,po)}_sceneToCubeUV(e,t,n,i){const s=new Qt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(vl),c.toneMapping=Nn,c.autoClear=!1;const m=new gu({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new Ze(new Wr,m);let f=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,f=!0):(m.color.copy(vl),f=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(s.up.set(0,l[_],0),s.lookAt(u[_],0,0)):M===1?(s.up.set(0,0,l[_]),s.lookAt(0,u[_],0)):(s.up.set(0,l[_],0),s.lookAt(0,0,u[_]));const x=this._cubeSize;cs(i,M*x,_>2?x:0,x,x),c.setRenderTarget(i),f&&c.render(g,s),c.render(e,s)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Zi||e.mapping===Ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ze(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;cs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,po)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=xl[(i-1)%xl.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,s){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Ze(this._lodPlanes[i],u),h=u.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*di-1),f=r/g,p=isFinite(r)?1+Math.floor(c*f):di;p>di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${di}`);const _=[];let M=0;for(let C=0;C<di;++C){const v=C/f,w=Math.exp(-v*v/2);_.push(w),C===0?M+=w:C<p&&(M+=2*w)}for(let C=0;C<_.length;C++)_[C]=_[C]/M;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=_,h.latitudinal.value=o==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const b=this._sizeLods[i],y=3*b*(i>x-Gi?i-x+Gi:0),A=4*(this._cubeSize-b);cs(t,y,A,3*b,2*b),l.setRenderTarget(t),l.render(d,po)}}function Bp(a){const e=[],t=[],n=[];let i=a;const r=a-Gi+1+_l.length;for(let o=0;o<r;o++){const s=Math.pow(2,i);t.push(s);let l=1/s;o>a-Gi?l=_l[o-a+Gi-1]:o===0&&(l=0),n.push(l);const u=1/(s-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],m=6,g=6,f=3,p=2,_=1,M=new Float32Array(f*g*m),x=new Float32Array(p*g*m),b=new Float32Array(_*g*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,v=A>2?0:-1,w=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];M.set(w,f*g*A),x.set(h,p*g*A);const L=[A,A,A,A,A,A];b.set(L,_*g*A)}const y=new Jn;y.setAttribute("position",new _n(M,f)),y.setAttribute("uv",new _n(x,p)),y.setAttribute("faceIndex",new _n(b,_)),e.push(y),i>Gi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ml(a,e,t){const n=new Si(a,e,t);return n.texture.mapping=Es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cs(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function Vp(a,e,t){const n=new Float32Array(di),i=new z(0,1,0);return new tt({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function bl(){return new tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Sl(){return new tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function na(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gp(a){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,u=l===Po||l===Lo,c=l===Zi||l===Ki;if(u||c)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return t===null&&(t=new yl(a)),d=u?t.fromEquirectangular(s,d):t.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(u&&d&&d.height>0||c&&d&&i(d)){t===null&&(t=new yl(a));const h=u?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",r),h.texture}else return null}}}return s}function i(s){let l=0;const u=6;for(let c=0;c<u;c++)s[c]!==void 0&&l++;return l===u}function r(s){const l=s.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Hp(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wp(a,e,t,n){const i={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],34962);const m=d.morphAttributes;for(const g in m){const f=m[g];for(let p=0,_=f.length;p<_;p++)e.update(f[p],34962)}}function u(d){const h=[],m=d.index,g=d.attributes.position;let f=0;if(m!==null){const M=m.array;f=m.version;for(let x=0,b=M.length;x<b;x+=3){const y=M[x+0],A=M[x+1],C=M[x+2];h.push(y,A,A,C,C,y)}}else{const M=g.array;f=g.version;for(let x=0,b=M.length/3-1;x<b;x+=3){const y=x+0,A=x+1,C=x+2;h.push(y,A,A,C,C,y)}}const p=new(cu(h)?vu:_u)(h,1);p.version=f;const _=r.get(d);_&&e.remove(_),r.set(d,p)}function c(d){const h=r.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&u(d)}else u(d);return r.get(d)}return{get:s,update:l,getWireframeAttribute:c}}function $p(a,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}let s,l;function u(h){s=h.type,l=h.bytesPerElement}function c(h,m){a.drawElements(r,m,s,h*l),t.update(m,r,1)}function d(h,m,g){if(g===0)return;let f,p;if(i)f=a,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,m,s,h*l,g),t.update(m,r,g)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function Xp(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,s){switch(t.calls++,o){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qp(a,e){return a[0]-e[0]}function jp(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Yp(a,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new ft,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function l(u,c,d,h){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=f!==void 0?f.length:0;let _=r.get(c);if(_===void 0||_.count!==p){let Y=function(){D.dispose(),r.delete(c),c.removeEventListener("dispose",Y)};var g=Y;_!==void 0&&_.texture.dispose();const b=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,A=c.morphAttributes.color!==void 0,C=c.morphAttributes.position||[],v=c.morphAttributes.normal||[],w=c.morphAttributes.color||[];let L=0;b===!0&&(L=1),y===!0&&(L=2),A===!0&&(L=3);let k=c.attributes.position.count*L,X=1;k>e.maxTextureSize&&(X=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const R=new Float32Array(k*X*4*p),D=new pu(R,k,X,p);D.type=pi,D.needsUpdate=!0;const U=L*4;for(let q=0;q<p;q++){const B=C[q],J=v[q],K=w[q],ue=k*X*4*q;for(let N=0;N<B.count;N++){const j=N*U;b===!0&&(o.fromBufferAttribute(B,N),R[ue+j+0]=o.x,R[ue+j+1]=o.y,R[ue+j+2]=o.z,R[ue+j+3]=0),y===!0&&(o.fromBufferAttribute(J,N),R[ue+j+4]=o.x,R[ue+j+5]=o.y,R[ue+j+6]=o.z,R[ue+j+7]=0),A===!0&&(o.fromBufferAttribute(K,N),R[ue+j+8]=o.x,R[ue+j+9]=o.y,R[ue+j+10]=o.z,R[ue+j+11]=K.itemSize===4?o.w:1)}}_={count:p,texture:D,size:new Z(k,X)},r.set(c,_),c.addEventListener("dispose",Y)}let M=0;for(let b=0;b<m.length;b++)M+=m[b];const x=c.morphTargetsRelative?1:1-M;h.getUniforms().setValue(a,"morphTargetBaseInfluence",x),h.getUniforms().setValue(a,"morphTargetInfluences",m),h.getUniforms().setValue(a,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}else{const f=m===void 0?0:m.length;let p=n[c.id];if(p===void 0||p.length!==f){p=[];for(let y=0;y<f;y++)p[y]=[y,0];n[c.id]=p}for(let y=0;y<f;y++){const A=p[y];A[0]=y,A[1]=m[y]}p.sort(jp);for(let y=0;y<8;y++)y<f&&p[y][1]?(s[y][0]=p[y][0],s[y][1]=p[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort(qp);const _=c.morphAttributes.position,M=c.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const A=s[y],C=A[0],v=A[1];C!==Number.MAX_SAFE_INTEGER&&v?(_&&c.getAttribute("morphTarget"+y)!==_[C]&&c.setAttribute("morphTarget"+y,_[C]),M&&c.getAttribute("morphNormal"+y)!==M[C]&&c.setAttribute("morphNormal"+y,M[C]),i[y]=v,x+=v):(_&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),M&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),i[y]=0)}const b=c.morphTargetsRelative?1:1-x;h.getUniforms().setValue(a,"morphTargetBaseInfluence",b),h.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function Zp(a,e,t,n){let i=new WeakMap;function r(l){const u=n.render.frame,c=l.geometry,d=e.get(l,c);return i.get(d)!==u&&(e.update(d),i.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){i=new WeakMap}function s(l){const u=l.target;u.removeEventListener("dispose",s),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}const wu=new Ct,Tu=new pu,Eu=new Fh,Au=new Mu,wl=[],Tl=[],El=new Float32Array(16),Al=new Float32Array(9),Cl=new Float32Array(4);function lr(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=wl[i];if(r===void 0&&(r=new Float32Array(i),wl[i]=r),e!==0){n.toArray(r,0);for(let o=1,s=0;o!==e;++o)s+=t,a[o].toArray(r,s)}return r}function st(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function ot(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Ps(a,e){let t=Tl[e];t===void 0&&(t=new Int32Array(e),Tl[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Kp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Jp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;a.uniform2fv(this.addr,e),ot(t,e)}}function Qp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;a.uniform3fv(this.addr,e),ot(t,e)}}function em(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;a.uniform4fv(this.addr,e),ot(t,e)}}function tm(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),ot(t,e)}else{if(st(t,n))return;Cl.set(n),a.uniformMatrix2fv(this.addr,!1,Cl),ot(t,n)}}function nm(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),ot(t,e)}else{if(st(t,n))return;Al.set(n),a.uniformMatrix3fv(this.addr,!1,Al),ot(t,n)}}function im(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),ot(t,e)}else{if(st(t,n))return;El.set(n),a.uniformMatrix4fv(this.addr,!1,El),ot(t,n)}}function rm(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function sm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;a.uniform2iv(this.addr,e),ot(t,e)}}function om(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;a.uniform3iv(this.addr,e),ot(t,e)}}function am(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;a.uniform4iv(this.addr,e),ot(t,e)}}function lm(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function um(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;a.uniform2uiv(this.addr,e),ot(t,e)}}function cm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;a.uniform3uiv(this.addr,e),ot(t,e)}}function hm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;a.uniform4uiv(this.addr,e),ot(t,e)}}function dm(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||wu,i)}function fm(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Eu,i)}function pm(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Au,i)}function mm(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Tu,i)}function gm(a){switch(a){case 5126:return Kp;case 35664:return Jp;case 35665:return Qp;case 35666:return em;case 35674:return tm;case 35675:return nm;case 35676:return im;case 5124:case 35670:return rm;case 35667:case 35671:return sm;case 35668:case 35672:return om;case 35669:case 35673:return am;case 5125:return lm;case 36294:return um;case 36295:return cm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return mm}}function _m(a,e){a.uniform1fv(this.addr,e)}function vm(a,e){const t=lr(e,this.size,2);a.uniform2fv(this.addr,t)}function xm(a,e){const t=lr(e,this.size,3);a.uniform3fv(this.addr,t)}function ym(a,e){const t=lr(e,this.size,4);a.uniform4fv(this.addr,t)}function Mm(a,e){const t=lr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function bm(a,e){const t=lr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Sm(a,e){const t=lr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function wm(a,e){a.uniform1iv(this.addr,e)}function Tm(a,e){a.uniform2iv(this.addr,e)}function Em(a,e){a.uniform3iv(this.addr,e)}function Am(a,e){a.uniform4iv(this.addr,e)}function Cm(a,e){a.uniform1uiv(this.addr,e)}function Pm(a,e){a.uniform2uiv(this.addr,e)}function Lm(a,e){a.uniform3uiv(this.addr,e)}function Dm(a,e){a.uniform4uiv(this.addr,e)}function Rm(a,e,t){const n=this.cache,i=e.length,r=Ps(t,i);st(n,r)||(a.uniform1iv(this.addr,r),ot(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||wu,r[o])}function Im(a,e,t){const n=this.cache,i=e.length,r=Ps(t,i);st(n,r)||(a.uniform1iv(this.addr,r),ot(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Eu,r[o])}function Fm(a,e,t){const n=this.cache,i=e.length,r=Ps(t,i);st(n,r)||(a.uniform1iv(this.addr,r),ot(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Au,r[o])}function Nm(a,e,t){const n=this.cache,i=e.length,r=Ps(t,i);st(n,r)||(a.uniform1iv(this.addr,r),ot(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Tu,r[o])}function zm(a){switch(a){case 5126:return _m;case 35664:return vm;case 35665:return xm;case 35666:return ym;case 35674:return Mm;case 35675:return bm;case 35676:return Sm;case 5124:case 35670:return wm;case 35667:case 35671:return Tm;case 35668:case 35672:return Em;case 35669:case 35673:return Am;case 5125:return Cm;case 36294:return Pm;case 36295:return Lm;case 36296:return Dm;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Nm}}class Um{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=gm(t.type)}}class Om{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=zm(t.type)}}class km{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const go=/(\w+)(\])?(\[|\.)?/g;function Pl(a,e){a.seq.push(e),a.map[e.id]=e}function Bm(a,e,t){const n=a.name,i=n.length;for(go.lastIndex=0;;){const r=go.exec(n),o=go.lastIndex;let s=r[1];const l=r[2]==="]",u=r[3];if(l&&(s=s|0),u===void 0||u==="["&&o+2===i){Pl(t,u===void 0?new Um(s,a,e):new Om(s,a,e));break}else{let d=t.map[s];d===void 0&&(d=new km(s),Pl(t,d)),t=d}}}class ps{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Bm(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const s=t[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ll(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let Vm=0;function Gm(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}function Hm(a){switch(a){case bi:return["Linear","( value )"];case Be:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Dl(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Gm(a.getShaderSource(e),o)}else return i}function Wm(a,e){const t=Hm(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function $m(a,e){let t;switch(e){case oh:t="Linear";break;case ah:t="Reinhard";break;case lh:t="OptimizedCineon";break;case uh:t="ACESFilmic";break;case ch:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Xm(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wr).join(`
`)}function qm(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jm(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),o=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[o]={type:r.type,location:a.getAttribLocation(e,o),locationSize:s}}return t}function wr(a){return a!==""}function Rl(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Il(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(a){return a.replace(Ym,Zm)}function Zm(a,e){const t=Te[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return No(t)}const Km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fl(a){return a.replace(Km,Jm)}function Jm(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Nl(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qm(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===ru?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Oc?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Sr&&(e="SHADOWMAP_TYPE_VSM"),e}function eg(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Zi:case Ki:e="ENVMAP_TYPE_CUBE";break;case Es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tg(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Ki:e="ENVMAP_MODE_REFRACTION";break}return e}function ng(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case au:e="ENVMAP_BLENDING_MULTIPLY";break;case rh:e="ENVMAP_BLENDING_MIX";break;case sh:e="ENVMAP_BLENDING_ADD";break}return e}function ig(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function rg(a,e,t,n){const i=a.getContext(),r=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=Qm(t),u=eg(t),c=tg(t),d=ng(t),h=ig(t),m=t.isWebGL2?"":Xm(t),g=qm(r),f=i.createProgram();let p,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(wr).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(wr).join(`
`),_.length>0&&(_+=`
`)):(p=[Nl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),_=[m,Nl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?Te.tonemapping_pars_fragment:"",t.toneMapping!==Nn?$m("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.encodings_pars_fragment,Wm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),o=No(o),o=Rl(o,t),o=Il(o,t),s=No(s),s=Rl(s,t),s=Il(s,t),o=Fl(o),s=Fl(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=M+p+o,b=M+_+s,y=Ll(i,35633,x),A=Ll(i,35632,b);if(i.attachShader(f,y),i.attachShader(f,A),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),a.debug.checkShaderErrors){const w=i.getProgramInfoLog(f).trim(),L=i.getShaderInfoLog(y).trim(),k=i.getShaderInfoLog(A).trim();let X=!0,R=!0;if(i.getProgramParameter(f,35714)===!1){X=!1;const D=Dl(i,y,"vertex"),U=Dl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+w+`
`+D+`
`+U)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(L===""||k==="")&&(R=!1);R&&(this.diagnostics={runnable:X,programLog:w,vertexShader:{log:L,prefix:p},fragmentShader:{log:k,prefix:_}})}i.deleteShader(y),i.deleteShader(A);let C;this.getUniforms=function(){return C===void 0&&(C=new ps(i,f)),C};let v;return this.getAttributes=function(){return v===void 0&&(v=jm(i,f)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=Vm++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=y,this.fragmentShader=A,this}let sg=0;class og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ag(e),t.set(e,n)),n}}class ag{constructor(e){this.id=sg++,this.code=e,this.usedTimes=0}}function lg(a,e,t,n,i,r,o){const s=new ta,l=new og,u=[],c=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v,w,L,k,X){const R=k.fog,D=X.geometry,U=v.isMeshStandardMaterial?k.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||U),q=Y&&Y.mapping===Es?Y.image.height:null,B=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const J=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,K=J!==void 0?J.length:0;let ue=0;D.morphAttributes.position!==void 0&&(ue=1),D.morphAttributes.normal!==void 0&&(ue=2),D.morphAttributes.color!==void 0&&(ue=3);let N,j,te,ne;if(B){const ke=pn[B];N=ke.vertexShader,j=ke.fragmentShader}else N=v.vertexShader,j=v.fragmentShader,l.update(v),te=l.getVertexShaderID(v),ne=l.getFragmentShaderID(v);const O=a.getRenderTarget(),be=v.alphaTest>0,de=v.clearcoat>0,fe=v.iridescence>0;return{isWebGL2:c,shaderID:B,shaderName:v.type,vertexShader:N,fragmentShader:j,defines:v.defines,customVertexShaderID:te,customFragmentShaderID:ne,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:X.isInstancedMesh===!0,instancingColor:X.isInstancedMesh===!0&&X.instanceColor!==null,supportsVertexTextures:h,outputEncoding:O===null?a.outputEncoding:O.isXRRenderTarget===!0?O.texture.encoding:bi,map:!!v.map,matcap:!!v.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:q,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Lh,tangentSpaceNormalMap:v.normalMapType===Ph,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Be,clearcoat:de,clearcoatMap:de&&!!v.clearcoatMap,clearcoatRoughnessMap:de&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:de&&!!v.clearcoatNormalMap,iridescence:fe,iridescenceMap:fe&&!!v.iridescenceMap,iridescenceThicknessMap:fe&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===$i,alphaMap:!!v.alphaMap,alphaTest:be,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!D.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!R,useFog:v.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:a.shadowMap.enabled&&L.length>0,shadowMapType:a.shadowMap.type,toneMapping:v.toneMapped?a.toneMapping:Nn,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ye,flipSided:v.side===Gt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)w.push(L),w.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(_(w,v),M(w,v),w.push(a.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function _(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.map&&s.enable(4),w.matcap&&s.enable(5),w.envMap&&s.enable(6),w.lightMap&&s.enable(7),w.aoMap&&s.enable(8),w.emissiveMap&&s.enable(9),w.bumpMap&&s.enable(10),w.normalMap&&s.enable(11),w.objectSpaceNormalMap&&s.enable(12),w.tangentSpaceNormalMap&&s.enable(13),w.clearcoat&&s.enable(14),w.clearcoatMap&&s.enable(15),w.clearcoatRoughnessMap&&s.enable(16),w.clearcoatNormalMap&&s.enable(17),w.iridescence&&s.enable(18),w.iridescenceMap&&s.enable(19),w.iridescenceThicknessMap&&s.enable(20),w.displacementMap&&s.enable(21),w.specularMap&&s.enable(22),w.roughnessMap&&s.enable(23),w.metalnessMap&&s.enable(24),w.gradientMap&&s.enable(25),w.alphaMap&&s.enable(26),w.alphaTest&&s.enable(27),w.vertexColors&&s.enable(28),w.vertexAlphas&&s.enable(29),w.vertexUvs&&s.enable(30),w.vertexTangents&&s.enable(31),w.uvsVertexOnly&&s.enable(32),v.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.physicallyCorrectLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.specularIntensityMap&&s.enable(15),w.specularColorMap&&s.enable(16),w.transmission&&s.enable(17),w.transmissionMap&&s.enable(18),w.thicknessMap&&s.enable(19),w.sheen&&s.enable(20),w.sheenColorMap&&s.enable(21),w.sheenRoughnessMap&&s.enable(22),w.decodeVideoTexture&&s.enable(23),w.opaque&&s.enable(24),v.push(s.mask)}function x(v){const w=g[v.type];let L;if(w){const k=pn[w];L=Xh.clone(k.uniforms)}else L=v.uniforms;return L}function b(v,w){let L;for(let k=0,X=u.length;k<X;k++){const R=u[k];if(R.cacheKey===w){L=R,++L.usedTimes;break}}return L===void 0&&(L=new rg(a,w,v,r),u.push(L)),L}function y(v){if(--v.usedTimes===0){const w=u.indexOf(v);u[w]=u[u.length-1],u.pop(),v.destroy()}}function A(v){l.remove(v)}function C(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:y,releaseShaderCache:A,programs:u,dispose:C}}function ug(){let a=new WeakMap;function e(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function t(r){a.delete(r)}function n(r,o,s){a.get(r)[o]=s}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function cg(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function zl(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Ul(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,h,m,g,f,p){let _=a[e];return _===void 0?(_={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:f,group:p},a[e]=_):(_.id=d.id,_.object=d,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=f,_.group=p),e++,_}function s(d,h,m,g,f,p){const _=o(d,h,m,g,f,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(d,h,m,g,f,p){const _=o(d,h,m,g,f,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function u(d,h){t.length>1&&t.sort(d||cg),n.length>1&&n.sort(h||zl),i.length>1&&i.sort(h||zl)}function c(){for(let d=e,h=a.length;d<h;d++){const m=a[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:c,sort:u}}function hg(){let a=new WeakMap;function e(n,i){const r=a.get(n);let o;return r===void 0?(o=new Ul,a.set(n,[o])):i>=r.length?(o=new Ul,r.push(o)):o=r[i],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function dg(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new $e};break;case"SpotLight":t={position:new z,direction:new z,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new z,halfWidth:new z,halfHeight:new z};break}return a[e.id]=t,t}}}function fg(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let pg=0;function mg(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function gg(a,e){const t=new dg,n=fg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,o=new pt,s=new pt;function l(c,d){let h=0,m=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let f=0,p=0,_=0,M=0,x=0,b=0,y=0,A=0,C=0,v=0;c.sort(mg);const w=d!==!0?Math.PI:1;for(let k=0,X=c.length;k<X;k++){const R=c[k],D=R.color,U=R.intensity,Y=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=D.r*U*w,m+=D.g*U*w,g+=D.b*U*w;else if(R.isLightProbe)for(let B=0;B<9;B++)i.probe[B].addScaledVector(R.sh.coefficients[B],U);else if(R.isDirectionalLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity*w),R.castShadow){const J=R.shadow,K=n.get(R);K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,i.directionalShadow[f]=K,i.directionalShadowMap[f]=q,i.directionalShadowMatrix[f]=R.shadow.matrix,b++}i.directional[f]=B,f++}else if(R.isSpotLight){const B=t.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(D).multiplyScalar(U*w),B.distance=Y,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,i.spot[_]=B;const J=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,J.updateMatrices(R),R.castShadow&&v++),i.spotLightMatrix[_]=J.matrix,R.castShadow){const K=n.get(R);K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,i.spotShadow[_]=K,i.spotShadowMap[_]=q,A++}_++}else if(R.isRectAreaLight){const B=t.get(R);B.color.copy(D).multiplyScalar(U),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),i.rectArea[M]=B,M++}else if(R.isPointLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity*w),B.distance=R.distance,B.decay=R.decay,R.castShadow){const J=R.shadow,K=n.get(R);K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,K.shadowCameraNear=J.camera.near,K.shadowCameraFar=J.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=q,i.pointShadowMatrix[p]=R.shadow.matrix,y++}i.point[p]=B,p++}else if(R.isHemisphereLight){const B=t.get(R);B.skyColor.copy(R.color).multiplyScalar(U*w),B.groundColor.copy(R.groundColor).multiplyScalar(U*w),i.hemi[x]=B,x++}}M>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=g;const L=i.hash;(L.directionalLength!==f||L.pointLength!==p||L.spotLength!==_||L.rectAreaLength!==M||L.hemiLength!==x||L.numDirectionalShadows!==b||L.numPointShadows!==y||L.numSpotShadows!==A||L.numSpotMaps!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=M,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=A+C-v,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=v,L.directionalLength=f,L.pointLength=p,L.spotLength=_,L.rectAreaLength=M,L.hemiLength=x,L.numDirectionalShadows=b,L.numPointShadows=y,L.numSpotShadows=A,L.numSpotMaps=C,i.version=pg++)}function u(c,d){let h=0,m=0,g=0,f=0,p=0;const _=d.matrixWorldInverse;for(let M=0,x=c.length;M<x;M++){const b=c[M];if(b.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),h++}else if(b.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const y=i.rectArea[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),s.identity(),o.copy(b.matrixWorld),o.premultiply(_),s.extractRotation(o),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),f++}else if(b.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){const y=i.hemi[p];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(_),p++}}}return{setup:l,setupView:u,state:i}}function Ol(a,e){const t=new gg(a,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function s(d){i.push(d)}function l(d){t.setup(n,d)}function u(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s}}function _g(a,e){let t=new WeakMap;function n(r,o=0){const s=t.get(r);let l;return s===void 0?(l=new Ol(a,e),t.set(r,[l])):o>=s.length?(l=new Ol(a,e),s.push(l)):l=s[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class vg extends Cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xg extends Cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bg(a,e,t){let n=new bu;const i=new Z,r=new Z,o=new ft,s=new vg({depthPacking:Ch}),l=new xg,u={},c=t.maxTextureSize,d={[Yn]:Gt,[Gt]:Yn,[Ye]:Ye},h=new tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:yg,fragmentShader:Mg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Jn;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new Ze(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru,this.render=function(b,y,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const C=a.getRenderTarget(),v=a.getActiveCubeFace(),w=a.getActiveMipmapLevel(),L=a.state;L.setBlending(Xn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let k=0,X=b.length;k<X;k++){const R=b[k],D=R.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const U=D.getFrameExtents();if(i.multiply(U),r.copy(D.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/U.x),i.x=r.x*U.x,D.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/U.y),i.y=r.y*U.y,D.mapSize.y=r.y)),D.map===null){const q=this.type!==Sr?{minFilter:Tt,magFilter:Tt}:{};D.map=new Si(i.x,i.y,q),D.map.texture.name=R.name+".shadowMap",D.camera.updateProjectionMatrix()}a.setRenderTarget(D.map),a.clear();const Y=D.getViewportCount();for(let q=0;q<Y;q++){const B=D.getViewport(q);o.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),L.viewport(o),D.updateMatrices(R,q),n=D.getFrustum(),x(y,A,D.camera,R,this.type)}D.isPointLightShadow!==!0&&this.type===Sr&&_(D,A),D.needsUpdate=!1}p.needsUpdate=!1,a.setRenderTarget(C,v,w)};function _(b,y){const A=e.update(f);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Si(i.x,i.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,a.setRenderTarget(b.mapPass),a.clear(),a.renderBufferDirect(y,null,A,h,f,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,a.setRenderTarget(b.map),a.clear(),a.renderBufferDirect(y,null,A,m,f,null)}function M(b,y,A,C,v,w){let L=null;const k=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(k!==void 0)L=k;else if(L=A.isPointLight===!0?l:s,a.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const X=L.uuid,R=y.uuid;let D=u[X];D===void 0&&(D={},u[X]=D);let U=D[R];U===void 0&&(U=L.clone(),D[R]=U),L=U}return L.visible=y.visible,L.wireframe=y.wireframe,w===Sr?L.side=y.shadowSide!==null?y.shadowSide:y.side:L.side=y.shadowSide!==null?y.shadowSide:d[y.side],L.alphaMap=y.alphaMap,L.alphaTest=y.alphaTest,L.map=y.map,L.clipShadows=y.clipShadows,L.clippingPlanes=y.clippingPlanes,L.clipIntersection=y.clipIntersection,L.displacementMap=y.displacementMap,L.displacementScale=y.displacementScale,L.displacementBias=y.displacementBias,L.wireframeLinewidth=y.wireframeLinewidth,L.linewidth=y.linewidth,A.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(A.matrixWorld),L.nearDistance=C,L.farDistance=v),L}function x(b,y,A,C,v){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===Sr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const k=e.update(b),X=b.material;if(Array.isArray(X)){const R=k.groups;for(let D=0,U=R.length;D<U;D++){const Y=R[D],q=X[Y.materialIndex];if(q&&q.visible){const B=M(b,q,C,A.near,A.far,v);a.renderBufferDirect(A,null,k,B,b,Y)}}}else if(X.visible){const R=M(b,X,C,A.near,A.far,v);a.renderBufferDirect(A,null,k,R,b,null)}}const L=b.children;for(let k=0,X=L.length;k<X;k++)x(L[k],y,A,C,v)}}function Sg(a,e,t){const n=t.isWebGL2;function i(){let P=!1;const V=new ft;let Q=null;const ae=new ft(0,0,0,0);return{setMask:function(he){Q!==he&&!P&&(a.colorMask(he,he,he,he),Q=he)},setLocked:function(he){P=he},setClear:function(he,Fe,lt,gt,ei){ei===!0&&(he*=gt,Fe*=gt,lt*=gt),V.set(he,Fe,lt,gt),ae.equals(V)===!1&&(a.clearColor(he,Fe,lt,gt),ae.copy(V))},reset:function(){P=!1,Q=null,ae.set(-1,0,0,0)}}}function r(){let P=!1,V=null,Q=null,ae=null;return{setTest:function(he){he?be(2929):de(2929)},setMask:function(he){V!==he&&!P&&(a.depthMask(he),V=he)},setFunc:function(he){if(Q!==he){switch(he){case Kc:a.depthFunc(512);break;case Jc:a.depthFunc(519);break;case Qc:a.depthFunc(513);break;case Co:a.depthFunc(515);break;case eh:a.depthFunc(514);break;case th:a.depthFunc(518);break;case nh:a.depthFunc(516);break;case ih:a.depthFunc(517);break;default:a.depthFunc(515)}Q=he}},setLocked:function(he){P=he},setClear:function(he){ae!==he&&(a.clearDepth(he),ae=he)},reset:function(){P=!1,V=null,Q=null,ae=null}}}function o(){let P=!1,V=null,Q=null,ae=null,he=null,Fe=null,lt=null,gt=null,ei=null;return{setTest:function(Ge){P||(Ge?be(2960):de(2960))},setMask:function(Ge){V!==Ge&&!P&&(a.stencilMask(Ge),V=Ge)},setFunc:function(Ge,Tn,Yt){(Q!==Ge||ae!==Tn||he!==Yt)&&(a.stencilFunc(Ge,Tn,Yt),Q=Ge,ae=Tn,he=Yt)},setOp:function(Ge,Tn,Yt){(Fe!==Ge||lt!==Tn||gt!==Yt)&&(a.stencilOp(Ge,Tn,Yt),Fe=Ge,lt=Tn,gt=Yt)},setLocked:function(Ge){P=Ge},setClear:function(Ge){ei!==Ge&&(a.clearStencil(Ge),ei=Ge)},reset:function(){P=!1,V=null,Q=null,ae=null,he=null,Fe=null,lt=null,gt=null,ei=null}}}const s=new i,l=new r,u=new o,c=new WeakMap,d=new WeakMap;let h={},m={},g=new WeakMap,f=[],p=null,_=!1,M=null,x=null,b=null,y=null,A=null,C=null,v=null,w=!1,L=null,k=null,X=null,R=null,D=null;const U=a.getParameter(35661);let Y=!1,q=0;const B=a.getParameter(7938);B.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(B)[1]),Y=q>=1):B.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Y=q>=2);let J=null,K={};const ue=a.getParameter(3088),N=a.getParameter(2978),j=new ft().fromArray(ue),te=new ft().fromArray(N);function ne(P,V,Q){const ae=new Uint8Array(4),he=a.createTexture();a.bindTexture(P,he),a.texParameteri(P,10241,9728),a.texParameteri(P,10240,9728);for(let Fe=0;Fe<Q;Fe++)a.texImage2D(V+Fe,0,6408,1,1,0,6408,5121,ae);return he}const O={};O[3553]=ne(3553,3553,1),O[34067]=ne(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),u.setClear(0),be(2929),l.setFunc(Co),mt(!1),jt(Aa),be(2884),Mt(Xn);function be(P){h[P]!==!0&&(a.enable(P),h[P]=!0)}function de(P){h[P]!==!1&&(a.disable(P),h[P]=!1)}function fe(P,V){return m[P]!==V?(a.bindFramebuffer(P,V),m[P]=V,n&&(P===36009&&(m[36160]=V),P===36160&&(m[36009]=V)),!0):!1}function le(P,V){let Q=f,ae=!1;if(P)if(Q=g.get(V),Q===void 0&&(Q=[],g.set(V,Q)),P.isWebGLMultipleRenderTargets){const he=P.texture;if(Q.length!==he.length||Q[0]!==36064){for(let Fe=0,lt=he.length;Fe<lt;Fe++)Q[Fe]=36064+Fe;Q.length=he.length,ae=!0}}else Q[0]!==36064&&(Q[0]=36064,ae=!0);else Q[0]!==1029&&(Q[0]=1029,ae=!0);ae&&(t.isWebGL2?a.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function ke(P){return p!==P?(a.useProgram(P),p=P,!0):!1}const we={[Vi]:32774,[Bc]:32778,[Vc]:32779};if(n)we[Da]=32775,we[Ra]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(we[Da]=P.MIN_EXT,we[Ra]=P.MAX_EXT)}const xe={[Gc]:0,[Hc]:1,[Wc]:768,[su]:770,[Zc]:776,[jc]:774,[Xc]:772,[$c]:769,[ou]:771,[Yc]:775,[qc]:773};function Mt(P,V,Q,ae,he,Fe,lt,gt){if(P===Xn){_===!0&&(de(3042),_=!1);return}if(_===!1&&(be(3042),_=!0),P!==kc){if(P!==M||gt!==w){if((x!==Vi||A!==Vi)&&(a.blendEquation(32774),x=Vi,A=Vi),gt)switch(P){case $i:a.blendFuncSeparate(1,771,1,771);break;case Ca:a.blendFunc(1,1);break;case Pa:a.blendFuncSeparate(0,769,0,1);break;case La:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case $i:a.blendFuncSeparate(770,771,1,771);break;case Ca:a.blendFunc(770,1);break;case Pa:a.blendFuncSeparate(0,769,0,1);break;case La:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,y=null,C=null,v=null,M=P,w=gt}return}he=he||V,Fe=Fe||Q,lt=lt||ae,(V!==x||he!==A)&&(a.blendEquationSeparate(we[V],we[he]),x=V,A=he),(Q!==b||ae!==y||Fe!==C||lt!==v)&&(a.blendFuncSeparate(xe[Q],xe[ae],xe[Fe],xe[lt]),b=Q,y=ae,C=Fe,v=lt),M=P,w=!1}function qt(P,V){P.side===Ye?de(2884):be(2884);let Q=P.side===Gt;V&&(Q=!Q),mt(Q),P.blending===$i&&P.transparent===!1?Mt(Xn):Mt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),s.setMask(P.colorWrite);const ae=P.stencilWrite;u.setTest(ae),ae&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ne(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?be(32926):de(32926)}function mt(P){L!==P&&(P?a.frontFace(2304):a.frontFace(2305),L=P)}function jt(P){P!==zc?(be(2884),P!==k&&(P===Aa?a.cullFace(1029):P===Uc?a.cullFace(1028):a.cullFace(1032))):de(2884),k=P}function nt(P){P!==X&&(Y&&a.lineWidth(P),X=P)}function Ne(P,V,Q){P?(be(32823),(R!==V||D!==Q)&&(a.polygonOffset(V,Q),R=V,D=Q)):de(32823)}function wn(P){P?be(3089):de(3089)}function sn(P){P===void 0&&(P=33984+U-1),J!==P&&(a.activeTexture(P),J=P)}function E(P,V,Q){Q===void 0&&(J===null?Q=33984+U-1:Q=J);let ae=K[Q];ae===void 0&&(ae={type:void 0,texture:void 0},K[Q]=ae),(ae.type!==P||ae.texture!==V)&&(J!==Q&&(a.activeTexture(Q),J=Q),a.bindTexture(P,V||O[P]),ae.type=P,ae.texture=V)}function S(){const P=K[J];P!==void 0&&P.type!==void 0&&(a.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function H(){try{a.compressedTexImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{a.compressedTexImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{a.texSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{a.texSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{a.texStorage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{a.texStorage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{a.texImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{a.texImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(P){j.equals(P)===!1&&(a.scissor(P.x,P.y,P.z,P.w),j.copy(P))}function pe(P){te.equals(P)===!1&&(a.viewport(P.x,P.y,P.z,P.w),te.copy(P))}function Re(P,V){let Q=d.get(V);Q===void 0&&(Q=new WeakMap,d.set(V,Q));let ae=Q.get(P);ae===void 0&&(ae=a.getUniformBlockIndex(V,P.name),Q.set(P,ae))}function Ve(P,V){const ae=d.get(V).get(P);c.get(V)!==ae&&(a.uniformBlockBinding(V,ae,P.__bindingPointIndex),c.set(V,ae))}function at(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},J=null,K={},m={},g=new WeakMap,f=[],p=null,_=!1,M=null,x=null,b=null,y=null,A=null,C=null,v=null,w=!1,L=null,k=null,X=null,R=null,D=null,j.set(0,0,a.canvas.width,a.canvas.height),te.set(0,0,a.canvas.width,a.canvas.height),s.reset(),l.reset(),u.reset()}return{buffers:{color:s,depth:l,stencil:u},enable:be,disable:de,bindFramebuffer:fe,drawBuffers:le,useProgram:ke,setBlending:Mt,setMaterial:qt,setFlipSided:mt,setCullFace:jt,setLineWidth:nt,setPolygonOffset:Ne,setScissorTest:wn,activeTexture:sn,bindTexture:E,unbindTexture:S,compressedTexImage2D:H,compressedTexImage3D:ee,texImage2D:ve,texImage3D:ce,updateUBOMapping:Re,uniformBlockBinding:Ve,texStorage2D:$,texStorage3D:ge,texSubImage2D:ie,texSubImage3D:se,compressedTexSubImage2D:ye,compressedTexSubImage3D:oe,scissor:_e,viewport:pe,reset:at}}function wg(a,e,t,n,i,r,o){const s=i.isWebGL2,l=i.maxTextures,u=i.maxCubemapSize,c=i.maxTextureSize,d=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,S){return _?new OffscreenCanvas(E,S):Ir("canvas")}function x(E,S,H,ee){let ie=1;if((E.width>ee||E.height>ee)&&(ie=ee/Math.max(E.width,E.height)),ie<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const se=S?Fo:Math.floor,ye=se(ie*E.width),oe=se(ie*E.height);f===void 0&&(f=M(ye,oe));const $=H?M(ye,oe):f;return $.width=ye,$.height=oe,$.getContext("2d").drawImage(E,0,0,ye,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ye+"x"+oe+")."),$}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function b(E){return ol(E.width)&&ol(E.height)}function y(E){return s?!1:E.wrapS!==un||E.wrapT!==un||E.minFilter!==Tt&&E.minFilter!==Se}function A(E,S){return E.generateMipmaps&&S&&E.minFilter!==Tt&&E.minFilter!==Se}function C(E){a.generateMipmap(E)}function v(E,S,H,ee,ie=!1){if(s===!1)return S;if(E!==null){if(a[E]!==void 0)return a[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let se=S;return S===6403&&(H===5126&&(se=33326),H===5131&&(se=33325),H===5121&&(se=33321)),S===33319&&(H===5126&&(se=33328),H===5131&&(se=33327),H===5121&&(se=33323)),S===6408&&(H===5126&&(se=34836),H===5131&&(se=34842),H===5121&&(se=ee===Be&&ie===!1?35907:32856),H===32819&&(se=32854),H===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function w(E,S,H){return A(E,H)===!0||E.isFramebufferTexture&&E.minFilter!==Tt&&E.minFilter!==Se?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function L(E){return E===Tt||E===Ia||E===Os?9728:9729}function k(E){const S=E.target;S.removeEventListener("dispose",k),R(S),S.isVideoTexture&&g.delete(S)}function X(E){const S=E.target;S.removeEventListener("dispose",X),U(S)}function R(E){const S=n.get(E);if(S.__webglInit===void 0)return;const H=E.source,ee=p.get(H);if(ee){const ie=ee[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&D(E),Object.keys(ee).length===0&&p.delete(H)}n.remove(E)}function D(E){const S=n.get(E);a.deleteTexture(S.__webglTexture);const H=E.source,ee=p.get(H);delete ee[S.__cacheKey],o.memory.textures--}function U(E){const S=E.texture,H=n.get(E),ee=n.get(S);if(ee.__webglTexture!==void 0&&(a.deleteTexture(ee.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)a.deleteFramebuffer(H.__webglFramebuffer[ie]),H.__webglDepthbuffer&&a.deleteRenderbuffer(H.__webglDepthbuffer[ie]);else{if(a.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&a.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&a.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ie=0;ie<H.__webglColorRenderbuffer.length;ie++)H.__webglColorRenderbuffer[ie]&&a.deleteRenderbuffer(H.__webglColorRenderbuffer[ie]);H.__webglDepthRenderbuffer&&a.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ie=0,se=S.length;ie<se;ie++){const ye=n.get(S[ie]);ye.__webglTexture&&(a.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(S[ie])}n.remove(S),n.remove(E)}let Y=0;function q(){Y=0}function B(){const E=Y;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),Y+=1,E}function J(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.encoding),S.join()}function K(E,S){const H=n.get(E);if(E.isVideoTexture&&wn(E),E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){const ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(H,E,S);return}}t.bindTexture(3553,H.__webglTexture,33984+S)}function ue(E,S){const H=n.get(E);if(E.version>0&&H.__version!==E.version){de(H,E,S);return}t.bindTexture(35866,H.__webglTexture,33984+S)}function N(E,S){const H=n.get(E);if(E.version>0&&H.__version!==E.version){de(H,E,S);return}t.bindTexture(32879,H.__webglTexture,33984+S)}function j(E,S){const H=n.get(E);if(E.version>0&&H.__version!==E.version){fe(H,E,S);return}t.bindTexture(34067,H.__webglTexture,33984+S)}const te={[Do]:10497,[un]:33071,[Ro]:33648},ne={[Tt]:9728,[Ia]:9984,[Os]:9986,[Se]:9729,[hh]:9985,[Lr]:9987};function O(E,S,H){if(H?(a.texParameteri(E,10242,te[S.wrapS]),a.texParameteri(E,10243,te[S.wrapT]),(E===32879||E===35866)&&a.texParameteri(E,32882,te[S.wrapR]),a.texParameteri(E,10240,ne[S.magFilter]),a.texParameteri(E,10241,ne[S.minFilter])):(a.texParameteri(E,10242,33071),a.texParameteri(E,10243,33071),(E===32879||E===35866)&&a.texParameteri(E,32882,33071),(S.wrapS!==un||S.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(E,10240,L(S.magFilter)),a.texParameteri(E,10241,L(S.minFilter)),S.minFilter!==Tt&&S.minFilter!==Se&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Tt||S.minFilter!==Os&&S.minFilter!==Lr||S.type===pi&&e.has("OES_texture_float_linear")===!1||s===!1&&S.type===Dr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(a.texParameterf(E,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function be(E,S){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",k));const ee=S.source;let ie=p.get(ee);ie===void 0&&(ie={},p.set(ee,ie));const se=J(S);if(se!==E.__cacheKey){ie[se]===void 0&&(ie[se]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ie[se].usedTimes++;const ye=ie[E.__cacheKey];ye!==void 0&&(ie[E.__cacheKey].usedTimes--,ye.usedTimes===0&&D(S)),E.__cacheKey=se,E.__webglTexture=ie[se].texture}return H}function de(E,S,H){let ee=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=35866),S.isData3DTexture&&(ee=32879);const ie=be(E,S),se=S.source;t.bindTexture(ee,E.__webglTexture,33984+H);const ye=n.get(se);if(se.version!==ye.__version||ie===!0){t.activeTexture(33984+H),a.pixelStorei(37440,S.flipY),a.pixelStorei(37441,S.premultiplyAlpha),a.pixelStorei(3317,S.unpackAlignment),a.pixelStorei(37443,0);const oe=y(S)&&b(S.image)===!1;let $=x(S.image,oe,!1,c);$=sn(S,$);const ge=b($)||s,ve=r.convert(S.format,S.encoding);let ce=r.convert(S.type),_e=v(S.internalFormat,ve,ce,S.encoding,S.isVideoTexture);O(ee,S,ge);let pe;const Re=S.mipmaps,Ve=s&&S.isVideoTexture!==!0,at=ye.__version===void 0||ie===!0,P=w(S,$,ge);if(S.isDepthTexture)_e=6402,s?S.type===pi?_e=36012:S.type===fi?_e=33190:S.type===Xi?_e=35056:_e=33189:S.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===gi&&_e===6402&&S.type!==uu&&S.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=fi,ce=r.convert(S.type)),S.format===Ji&&_e===6402&&(_e=34041,S.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Xi,ce=r.convert(S.type))),at&&(Ve?t.texStorage2D(3553,1,_e,$.width,$.height):t.texImage2D(3553,0,_e,$.width,$.height,0,ve,ce,null));else if(S.isDataTexture)if(Re.length>0&&ge){Ve&&at&&t.texStorage2D(3553,P,_e,Re[0].width,Re[0].height);for(let V=0,Q=Re.length;V<Q;V++)pe=Re[V],Ve?t.texSubImage2D(3553,V,0,0,pe.width,pe.height,ve,ce,pe.data):t.texImage2D(3553,V,_e,pe.width,pe.height,0,ve,ce,pe.data);S.generateMipmaps=!1}else Ve?(at&&t.texStorage2D(3553,P,_e,$.width,$.height),t.texSubImage2D(3553,0,0,0,$.width,$.height,ve,ce,$.data)):t.texImage2D(3553,0,_e,$.width,$.height,0,ve,ce,$.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ve&&at&&t.texStorage3D(35866,P,_e,Re[0].width,Re[0].height,$.depth);for(let V=0,Q=Re.length;V<Q;V++)pe=Re[V],S.format!==cn?ve!==null?Ve?t.compressedTexSubImage3D(35866,V,0,0,0,pe.width,pe.height,$.depth,ve,pe.data,0,0):t.compressedTexImage3D(35866,V,_e,pe.width,pe.height,$.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(35866,V,0,0,0,pe.width,pe.height,$.depth,ve,ce,pe.data):t.texImage3D(35866,V,_e,pe.width,pe.height,$.depth,0,ve,ce,pe.data)}else{Ve&&at&&t.texStorage2D(3553,P,_e,Re[0].width,Re[0].height);for(let V=0,Q=Re.length;V<Q;V++)pe=Re[V],S.format!==cn?ve!==null?Ve?t.compressedTexSubImage2D(3553,V,0,0,pe.width,pe.height,ve,pe.data):t.compressedTexImage2D(3553,V,_e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(3553,V,0,0,pe.width,pe.height,ve,ce,pe.data):t.texImage2D(3553,V,_e,pe.width,pe.height,0,ve,ce,pe.data)}else if(S.isDataArrayTexture)Ve?(at&&t.texStorage3D(35866,P,_e,$.width,$.height,$.depth),t.texSubImage3D(35866,0,0,0,0,$.width,$.height,$.depth,ve,ce,$.data)):t.texImage3D(35866,0,_e,$.width,$.height,$.depth,0,ve,ce,$.data);else if(S.isData3DTexture)Ve?(at&&t.texStorage3D(32879,P,_e,$.width,$.height,$.depth),t.texSubImage3D(32879,0,0,0,0,$.width,$.height,$.depth,ve,ce,$.data)):t.texImage3D(32879,0,_e,$.width,$.height,$.depth,0,ve,ce,$.data);else if(S.isFramebufferTexture){if(at)if(Ve)t.texStorage2D(3553,P,_e,$.width,$.height);else{let V=$.width,Q=$.height;for(let ae=0;ae<P;ae++)t.texImage2D(3553,ae,_e,V,Q,0,ve,ce,null),V>>=1,Q>>=1}}else if(Re.length>0&&ge){Ve&&at&&t.texStorage2D(3553,P,_e,Re[0].width,Re[0].height);for(let V=0,Q=Re.length;V<Q;V++)pe=Re[V],Ve?t.texSubImage2D(3553,V,0,0,ve,ce,pe):t.texImage2D(3553,V,_e,ve,ce,pe);S.generateMipmaps=!1}else Ve?(at&&t.texStorage2D(3553,P,_e,$.width,$.height),t.texSubImage2D(3553,0,0,0,ve,ce,$)):t.texImage2D(3553,0,_e,ve,ce,$);A(S,ge)&&C(ee),ye.__version=se.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function fe(E,S,H){if(S.image.length!==6)return;const ee=be(E,S),ie=S.source;t.bindTexture(34067,E.__webglTexture,33984+H);const se=n.get(ie);if(ie.version!==se.__version||ee===!0){t.activeTexture(33984+H),a.pixelStorei(37440,S.flipY),a.pixelStorei(37441,S.premultiplyAlpha),a.pixelStorei(3317,S.unpackAlignment),a.pixelStorei(37443,0);const ye=S.isCompressedTexture||S.image[0].isCompressedTexture,oe=S.image[0]&&S.image[0].isDataTexture,$=[];for(let V=0;V<6;V++)!ye&&!oe?$[V]=x(S.image[V],!1,!0,u):$[V]=oe?S.image[V].image:S.image[V],$[V]=sn(S,$[V]);const ge=$[0],ve=b(ge)||s,ce=r.convert(S.format,S.encoding),_e=r.convert(S.type),pe=v(S.internalFormat,ce,_e,S.encoding),Re=s&&S.isVideoTexture!==!0,Ve=se.__version===void 0||ee===!0;let at=w(S,ge,ve);O(34067,S,ve);let P;if(ye){Re&&Ve&&t.texStorage2D(34067,at,pe,ge.width,ge.height);for(let V=0;V<6;V++){P=$[V].mipmaps;for(let Q=0;Q<P.length;Q++){const ae=P[Q];S.format!==cn?ce!==null?Re?t.compressedTexSubImage2D(34069+V,Q,0,0,ae.width,ae.height,ce,ae.data):t.compressedTexImage2D(34069+V,Q,pe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+V,Q,0,0,ae.width,ae.height,ce,_e,ae.data):t.texImage2D(34069+V,Q,pe,ae.width,ae.height,0,ce,_e,ae.data)}}}else{P=S.mipmaps,Re&&Ve&&(P.length>0&&at++,t.texStorage2D(34067,at,pe,$[0].width,$[0].height));for(let V=0;V<6;V++)if(oe){Re?t.texSubImage2D(34069+V,0,0,0,$[V].width,$[V].height,ce,_e,$[V].data):t.texImage2D(34069+V,0,pe,$[V].width,$[V].height,0,ce,_e,$[V].data);for(let Q=0;Q<P.length;Q++){const he=P[Q].image[V].image;Re?t.texSubImage2D(34069+V,Q+1,0,0,he.width,he.height,ce,_e,he.data):t.texImage2D(34069+V,Q+1,pe,he.width,he.height,0,ce,_e,he.data)}}else{Re?t.texSubImage2D(34069+V,0,0,0,ce,_e,$[V]):t.texImage2D(34069+V,0,pe,ce,_e,$[V]);for(let Q=0;Q<P.length;Q++){const ae=P[Q];Re?t.texSubImage2D(34069+V,Q+1,0,0,ce,_e,ae.image[V]):t.texImage2D(34069+V,Q+1,pe,ce,_e,ae.image[V])}}}A(S,ve)&&C(34067),se.__version=ie.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function le(E,S,H,ee,ie){const se=r.convert(H.format,H.encoding),ye=r.convert(H.type),oe=v(H.internalFormat,se,ye,H.encoding);n.get(S).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,oe,S.width,S.height,S.depth,0,se,ye,null):t.texImage2D(ie,0,oe,S.width,S.height,0,se,ye,null)),t.bindFramebuffer(36160,E),Ne(S)?h.framebufferTexture2DMultisampleEXT(36160,ee,ie,n.get(H).__webglTexture,0,nt(S)):(ie===3553||ie>=34069&&ie<=34074)&&a.framebufferTexture2D(36160,ee,ie,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(E,S,H){if(a.bindRenderbuffer(36161,E),S.depthBuffer&&!S.stencilBuffer){let ee=33189;if(H||Ne(S)){const ie=S.depthTexture;ie&&ie.isDepthTexture&&(ie.type===pi?ee=36012:ie.type===fi&&(ee=33190));const se=nt(S);Ne(S)?h.renderbufferStorageMultisampleEXT(36161,se,ee,S.width,S.height):a.renderbufferStorageMultisample(36161,se,ee,S.width,S.height)}else a.renderbufferStorage(36161,ee,S.width,S.height);a.framebufferRenderbuffer(36160,36096,36161,E)}else if(S.depthBuffer&&S.stencilBuffer){const ee=nt(S);H&&Ne(S)===!1?a.renderbufferStorageMultisample(36161,ee,35056,S.width,S.height):Ne(S)?h.renderbufferStorageMultisampleEXT(36161,ee,35056,S.width,S.height):a.renderbufferStorage(36161,34041,S.width,S.height),a.framebufferRenderbuffer(36160,33306,36161,E)}else{const ee=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0;ie<ee.length;ie++){const se=ee[ie],ye=r.convert(se.format,se.encoding),oe=r.convert(se.type),$=v(se.internalFormat,ye,oe,se.encoding),ge=nt(S);H&&Ne(S)===!1?a.renderbufferStorageMultisample(36161,ge,$,S.width,S.height):Ne(S)?h.renderbufferStorageMultisampleEXT(36161,ge,$,S.width,S.height):a.renderbufferStorage(36161,$,S.width,S.height)}}a.bindRenderbuffer(36161,null)}function we(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const ee=n.get(S.depthTexture).__webglTexture,ie=nt(S);if(S.depthTexture.format===gi)Ne(S)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ie):a.framebufferTexture2D(36160,36096,3553,ee,0);else if(S.depthTexture.format===Ji)Ne(S)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ie):a.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function xe(E){const S=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");we(S.__webglFramebuffer,E)}else if(H){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]=a.createRenderbuffer(),ke(S.__webglDepthbuffer[ee],E,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=a.createRenderbuffer(),ke(S.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function Mt(E,S,H){const ee=n.get(E);S!==void 0&&le(ee.__webglFramebuffer,E,E.texture,36064,3553),H!==void 0&&xe(E)}function qt(E){const S=E.texture,H=n.get(E),ee=n.get(S);E.addEventListener("dispose",X),E.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=a.createTexture()),ee.__version=S.version,o.memory.textures++);const ie=E.isWebGLCubeRenderTarget===!0,se=E.isWebGLMultipleRenderTargets===!0,ye=b(E)||s;if(ie){H.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)H.__webglFramebuffer[oe]=a.createFramebuffer()}else{if(H.__webglFramebuffer=a.createFramebuffer(),se)if(i.drawBuffers){const oe=E.texture;for(let $=0,ge=oe.length;$<ge;$++){const ve=n.get(oe[$]);ve.__webglTexture===void 0&&(ve.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&E.samples>0&&Ne(E)===!1){const oe=se?S:[S];H.__webglMultisampledFramebuffer=a.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let $=0;$<oe.length;$++){const ge=oe[$];H.__webglColorRenderbuffer[$]=a.createRenderbuffer(),a.bindRenderbuffer(36161,H.__webglColorRenderbuffer[$]);const ve=r.convert(ge.format,ge.encoding),ce=r.convert(ge.type),_e=v(ge.internalFormat,ve,ce,ge.encoding,E.isXRRenderTarget===!0),pe=nt(E);a.renderbufferStorageMultisample(36161,pe,_e,E.width,E.height),a.framebufferRenderbuffer(36160,36064+$,36161,H.__webglColorRenderbuffer[$])}a.bindRenderbuffer(36161,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=a.createRenderbuffer(),ke(H.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,ee.__webglTexture),O(34067,S,ye);for(let oe=0;oe<6;oe++)le(H.__webglFramebuffer[oe],E,S,36064,34069+oe);A(S,ye)&&C(34067),t.unbindTexture()}else if(se){const oe=E.texture;for(let $=0,ge=oe.length;$<ge;$++){const ve=oe[$],ce=n.get(ve);t.bindTexture(3553,ce.__webglTexture),O(3553,ve,ye),le(H.__webglFramebuffer,E,ve,36064+$,3553),A(ve,ye)&&C(3553)}t.unbindTexture()}else{let oe=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(s?oe=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,ee.__webglTexture),O(oe,S,ye),le(H.__webglFramebuffer,E,S,36064,oe),A(S,ye)&&C(oe),t.unbindTexture()}E.depthBuffer&&xe(E)}function mt(E){const S=b(E)||s,H=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0,ie=H.length;ee<ie;ee++){const se=H[ee];if(A(se,S)){const ye=E.isWebGLCubeRenderTarget?34067:3553,oe=n.get(se).__webglTexture;t.bindTexture(ye,oe),C(ye),t.unbindTexture()}}}function jt(E){if(s&&E.samples>0&&Ne(E)===!1){const S=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],H=E.width,ee=E.height;let ie=16384;const se=[],ye=E.stencilBuffer?33306:36096,oe=n.get(E),$=E.isWebGLMultipleRenderTargets===!0;if($)for(let ge=0;ge<S.length;ge++)t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ge,36161,null),t.bindFramebuffer(36160,oe.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ge,3553,null,0);t.bindFramebuffer(36008,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,oe.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){se.push(36064+ge),E.depthBuffer&&se.push(ye);const ve=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(ve===!1&&(E.depthBuffer&&(ie|=256),E.stencilBuffer&&(ie|=1024)),$&&a.framebufferRenderbuffer(36008,36064,36161,oe.__webglColorRenderbuffer[ge]),ve===!0&&(a.invalidateFramebuffer(36008,[ye]),a.invalidateFramebuffer(36009,[ye])),$){const ce=n.get(S[ge]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,ce,0)}a.blitFramebuffer(0,0,H,ee,0,0,H,ee,ie,9728),m&&a.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),$)for(let ge=0;ge<S.length;ge++){t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ge,36161,oe.__webglColorRenderbuffer[ge]);const ve=n.get(S[ge]).__webglTexture;t.bindFramebuffer(36160,oe.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ge,3553,ve,0)}t.bindFramebuffer(36009,oe.__webglMultisampledFramebuffer)}}function nt(E){return Math.min(d,E.samples)}function Ne(E){const S=n.get(E);return s&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function wn(E){const S=o.render.frame;g.get(E)!==S&&(g.set(E,S),E.update())}function sn(E,S){const H=E.encoding,ee=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Io||H!==bi&&(H===Be?s===!1?e.has("EXT_sRGB")===!0&&ee===cn?(E.format=Io,E.minFilter=Se,E.generateMipmaps=!1):S=du.sRGBToLinear(S):(ee!==cn||ie!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),S}this.allocateTextureUnit=B,this.resetTextureUnits=q,this.setTexture2D=K,this.setTexture2DArray=ue,this.setTexture3D=N,this.setTextureCube=j,this.rebindTextures=Mt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ne}function Tg(a,e,t){const n=t.isWebGL2;function i(r,o=null){let s;if(r===Mi)return 5121;if(r===mh)return 32819;if(r===gh)return 32820;if(r===dh)return 5120;if(r===fh)return 5122;if(r===uu)return 5123;if(r===ph)return 5124;if(r===fi)return 5125;if(r===pi)return 5126;if(r===Dr)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===_h)return 6406;if(r===cn)return 6408;if(r===vh)return 6409;if(r===xh)return 6410;if(r===gi)return 6402;if(r===Ji)return 34041;if(r===Io)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===yh)return 6403;if(r===Mh)return 36244;if(r===bh)return 33319;if(r===Sh)return 33320;if(r===wh)return 36249;if(r===ks||r===Bs||r===Vs||r===Gs)if(o===Be)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===ks)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===ks)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fa||r===Na||r===za||r===Ua)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Fa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Na)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===za)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ua)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Th)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Oa||r===ka)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Oa)return o===Be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===ka)return o===Be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ba||r===Va||r===Ga||r===Ha||r===Wa||r===$a||r===Xa||r===qa||r===ja||r===Ya||r===Za||r===Ka||r===Ja||r===Qa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Ba)return o===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Va)return o===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ga)return o===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ha)return o===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wa)return o===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$a)return o===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xa)return o===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qa)return o===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ja)return o===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ya)return o===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Za)return o===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ka)return o===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ja)return o===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qa)return o===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===Hs)return o===Be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Eh||r===el||r===tl||r===nl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===Hs)return s.COMPRESSED_RED_RGTC1_EXT;if(r===el)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xi?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:i}}class Eg extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hs extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ag={type:"move"};class _o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const s=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const f of e.hand.values()){const p=t.getJointPose(f,n),_=this._getHandJoint(u,f);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),m=.02,g=.005;u.inputState.pinching&&h>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Ag)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new hs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Cg extends Ct{constructor(e,t,n,i,r,o,s,l,u,c){if(c=c!==void 0?c:gi,c!==gi&&c!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===gi&&(n=fi),n===void 0&&c===Ji&&(n=Xi),super(null,i,r,o,s,l,c,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Tt,this.minFilter=l!==void 0?l:Tt,this.flipY=!1,this.generateMipmaps=!1}}class Pg extends ar{constructor(e,t){super();const n=this;let i=null,r=1,o=null,s="local-floor",l=1,u=null,c=null,d=null,h=null,m=null,g=null;const f=t.getContextAttributes();let p=null,_=null;const M=[],x=[],b=new Set,y=new Map,A=new Qt;A.layers.enable(1),A.viewport=new ft;const C=new Qt;C.layers.enable(2),C.viewport=new ft;const v=[A,C],w=new Eg;w.layers.enable(1),w.layers.enable(2);let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let j=M[N];return j===void 0&&(j=new _o,M[N]=j),j.getTargetRaySpace()},this.getControllerGrip=function(N){let j=M[N];return j===void 0&&(j=new _o,M[N]=j),j.getGripSpace()},this.getHand=function(N){let j=M[N];return j===void 0&&(j=new _o,M[N]=j),j.getHandSpace()};function X(N){const j=x.indexOf(N.inputSource);if(j===-1)return;const te=M[j];te!==void 0&&te.dispatchEvent({type:N.type,data:N.inputSource})}function R(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",D);for(let N=0;N<M.length;N++){const j=x[N];j!==null&&(x[N]=null,M[N].disconnect(j))}L=null,k=null,e.setRenderTarget(p),m=null,h=null,d=null,i=null,_=null,ue.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(N){u=N},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",R),i.addEventListener("inputsourceschange",D),f.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:m}),_=new Si(m.framebufferWidth,m.framebufferHeight,{format:cn,type:Mi,encoding:e.outputEncoding,stencilBuffer:f.stencil})}else{let j=null,te=null,ne=null;f.depth&&(ne=f.stencil?35056:33190,j=f.stencil?Ji:gi,te=f.stencil?Xi:fi);const O={colorFormat:32856,depthFormat:ne,scaleFactor:r};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(O),i.updateRenderState({layers:[h]}),_=new Si(h.textureWidth,h.textureHeight,{format:cn,type:Mi,depthTexture:new Cg(h.textureWidth,h.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:f.stencil,encoding:e.outputEncoding,samples:f.antialias?4:0});const be=e.properties.get(_);be.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await i.requestReferenceSpace(s),ue.setContext(i),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(N){for(let j=0;j<N.removed.length;j++){const te=N.removed[j],ne=x.indexOf(te);ne>=0&&(x[ne]=null,M[ne].disconnect(te))}for(let j=0;j<N.added.length;j++){const te=N.added[j];let ne=x.indexOf(te);if(ne===-1){for(let be=0;be<M.length;be++)if(be>=x.length){x.push(te),ne=be;break}else if(x[be]===null){x[be]=te,ne=be;break}if(ne===-1)break}const O=M[ne];O&&O.connect(te)}}const U=new z,Y=new z;function q(N,j,te){U.setFromMatrixPosition(j.matrixWorld),Y.setFromMatrixPosition(te.matrixWorld);const ne=U.distanceTo(Y),O=j.projectionMatrix.elements,be=te.projectionMatrix.elements,de=O[14]/(O[10]-1),fe=O[14]/(O[10]+1),le=(O[9]+1)/O[5],ke=(O[9]-1)/O[5],we=(O[8]-1)/O[0],xe=(be[8]+1)/be[0],Mt=de*we,qt=de*xe,mt=ne/(-we+xe),jt=mt*-we;j.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(jt),N.translateZ(mt),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const nt=de+mt,Ne=fe+mt,wn=Mt-jt,sn=qt+(ne-jt),E=le*fe/Ne*nt,S=ke*fe/Ne*nt;N.projectionMatrix.makePerspective(wn,sn,E,S,nt,Ne)}function B(N,j){j===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(j.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;w.near=C.near=A.near=N.near,w.far=C.far=A.far=N.far,(L!==w.near||k!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,k=w.far);const j=N.parent,te=w.cameras;B(w,j);for(let O=0;O<te.length;O++)B(te[O],j);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),N.matrix.copy(w.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);const ne=N.children;for(let O=0,be=ne.length;O<be;O++)ne[O].updateMatrixWorld(!0);te.length===2?q(w,A,C):w.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(N){l=N,h!==null&&(h.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)},this.getPlanes=function(){return b};let J=null;function K(N,j){if(c=j.getViewerPose(u||o),g=j,c!==null){const te=c.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let ne=!1;te.length!==w.cameras.length&&(w.cameras.length=0,ne=!0);for(let O=0;O<te.length;O++){const be=te[O];let de=null;if(m!==null)de=m.getViewport(be);else{const le=d.getViewSubImage(h,be);de=le.viewport,O===0&&(e.setRenderTargetTextures(_,le.colorTexture,h.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(_))}let fe=v[O];fe===void 0&&(fe=new Qt,fe.layers.enable(O),fe.viewport=new ft,v[O]=fe),fe.matrix.fromArray(be.transform.matrix),fe.projectionMatrix.fromArray(be.projectionMatrix),fe.viewport.set(de.x,de.y,de.width,de.height),O===0&&w.matrix.copy(fe.matrix),ne===!0&&w.cameras.push(fe)}}for(let te=0;te<M.length;te++){const ne=x[te],O=M[te];ne!==null&&O!==void 0&&O.update(ne,j,u||o)}if(J&&J(N,j),j.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:j.detectedPlanes});let te=null;for(const ne of b)j.detectedPlanes.has(ne)||(te===null&&(te=[]),te.push(ne));if(te!==null)for(const ne of te)b.delete(ne),y.delete(ne),n.dispatchEvent({type:"planeremoved",data:ne});for(const ne of j.detectedPlanes)if(!b.has(ne))b.add(ne),y.set(ne,j.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ne});else{const O=y.get(ne);ne.lastChangedTime>O&&(y.set(ne,ne.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ne}))}}g=null}const ue=new Su;ue.setAnimationLoop(K),this.setAnimationLoop=function(N){J=N},this.dispose=function(){}}}function Lg(a,e){function t(f,p){p.color.getRGB(f.fogColor.value,xu(a)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,_,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),c(f,p)):p.isMeshPhongMaterial?(i(f,p),u(f,p)):p.isMeshStandardMaterial?(i(f,p),d(f,p),p.isMeshPhysicalMaterial&&h(f,p,x)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),g(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(r(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?s(f,p,_,M):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===Gt&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===Gt&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(f.envMap.value=_,f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const b=a.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),f.uvTransform.value.copy(M.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),f.uv2Transform.value.copy(x.matrix))}function r(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function s(f,p,_,M){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*_,f.scale.value=M*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),f.uvTransform.value.copy(x.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function c(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function h(f,p,_){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Gt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Dg(a,e,t,n){let i={},r={},o=[];const s=t.isWebGL2?a.getParameter(35375):0;function l(M,x){const b=x.program;n.uniformBlockBinding(M,b)}function u(M,x){let b=i[M.id];b===void 0&&(g(M),b=c(M),i[M.id]=b,M.addEventListener("dispose",p));const y=x.program;n.updateUBOMapping(M,y);const A=e.render.frame;r[M.id]!==A&&(h(M),r[M.id]=A)}function c(M){const x=d();M.__bindingPointIndex=x;const b=a.createBuffer(),y=M.__size,A=M.usage;return a.bindBuffer(35345,b),a.bufferData(35345,y,A),a.bindBuffer(35345,null),a.bindBufferBase(35345,x,b),b}function d(){for(let M=0;M<s;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const x=i[M.id],b=M.uniforms,y=M.__cache;a.bindBuffer(35345,x);for(let A=0,C=b.length;A<C;A++){const v=b[A];if(m(v,A,y)===!0){const w=v.__offset,L=Array.isArray(v.value)?v.value:[v.value];let k=0;for(let X=0;X<L.length;X++){const R=L[X],D=f(R);typeof R=="number"?(v.__data[0]=R,a.bufferSubData(35345,w+k,v.__data)):R.isMatrix3?(v.__data[0]=R.elements[0],v.__data[1]=R.elements[1],v.__data[2]=R.elements[2],v.__data[3]=R.elements[0],v.__data[4]=R.elements[3],v.__data[5]=R.elements[4],v.__data[6]=R.elements[5],v.__data[7]=R.elements[0],v.__data[8]=R.elements[6],v.__data[9]=R.elements[7],v.__data[10]=R.elements[8],v.__data[11]=R.elements[0]):(R.toArray(v.__data,k),k+=D.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,w,v.__data)}}a.bindBuffer(35345,null)}function m(M,x,b){const y=M.value;if(b[x]===void 0){if(typeof y=="number")b[x]=y;else{const A=Array.isArray(y)?y:[y],C=[];for(let v=0;v<A.length;v++)C.push(A[v].clone());b[x]=C}return!0}else if(typeof y=="number"){if(b[x]!==y)return b[x]=y,!0}else{const A=Array.isArray(b[x])?b[x]:[b[x]],C=Array.isArray(y)?y:[y];for(let v=0;v<A.length;v++){const w=A[v];if(w.equals(C[v])===!1)return w.copy(C[v]),!0}}return!1}function g(M){const x=M.uniforms;let b=0;const y=16;let A=0;for(let C=0,v=x.length;C<v;C++){const w=x[C],L={boundary:0,storage:0},k=Array.isArray(w.value)?w.value:[w.value];for(let X=0,R=k.length;X<R;X++){const D=k[X],U=f(D);L.boundary+=U.boundary,L.storage+=U.storage}if(w.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=b,C>0){A=b%y;const X=y-A;A!==0&&X-L.boundary<0&&(b+=y-A,w.__offset=b)}b+=L.storage}return A=b%y,A>0&&(b+=y-A),M.__size=b,M.__cache={},this}function f(M){const x={boundary:0,storage:0};return typeof M=="number"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),a.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function _(){for(const M in i)a.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:u,dispose:_}}function Rg(){const a=Ir("canvas");return a.style.display="block",a}function Ig(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:Rg(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,r=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,s=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",u=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=a.alpha!==void 0?a.alpha:!1;let d=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=bi,this.physicallyCorrectLights=!1,this.toneMapping=Nn,this.toneMappingExposure=1;const f=this;let p=!1,_=0,M=0,x=null,b=-1,y=null;const A=new ft,C=new ft;let v=null,w=e.width,L=e.height,k=1,X=null,R=null;const D=new ft(0,0,w,L),U=new ft(0,0,w,L);let Y=!1;const q=new bu;let B=!1,J=!1,K=null;const ue=new pt,N=new Z,j=new z,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return x===null?k:1}let O=t;function be(T,F){for(let G=0;G<T.length;G++){const I=T[G],W=e.getContext(I,F);if(W!==null)return W}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qo}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",Re,!1),O===null){const F=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&F.shift(),O=be(F,T),O===null)throw be(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let de,fe,le,ke,we,xe,Mt,qt,mt,jt,nt,Ne,wn,sn,E,S,H,ee,ie,se,ye,oe,$,ge;function ve(){de=new Hp(O),fe=new zp(O,de,a),de.init(fe),oe=new Tg(O,de,fe),le=new Sg(O,de,fe),ke=new Xp,we=new ug,xe=new wg(O,de,le,we,fe,oe,ke),Mt=new Op(f),qt=new Gp(f),mt=new Qh(O,fe),$=new Fp(O,de,mt,fe),jt=new Wp(O,mt,ke,$),nt=new Zp(O,jt,mt,ke),ie=new Yp(O,fe,xe),S=new Up(we),Ne=new lg(f,Mt,qt,de,fe,$,S),wn=new Lg(f,we),sn=new hg,E=new _g(de,fe),ee=new Ip(f,Mt,qt,le,nt,c,o),H=new bg(f,nt,fe),ge=new Dg(O,ke,fe,le),se=new Np(O,de,ke,fe),ye=new $p(O,de,ke,fe),ke.programs=Ne.programs,f.capabilities=fe,f.extensions=de,f.properties=we,f.renderLists=sn,f.shadowMap=H,f.state=le,f.info=ke}ve();const ce=new Pg(f,O);this.xr=ce,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=de.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=de.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(w,L,!1))},this.getSize=function(T){return T.set(w,L)},this.setSize=function(T,F,G){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,L=F,e.width=Math.floor(T*k),e.height=Math.floor(F*k),G!==!1&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(w*k,L*k).floor()},this.setDrawingBufferSize=function(T,F,G){w=T,L=F,k=G,e.width=Math.floor(T*G),e.height=Math.floor(F*G),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,F,G,I){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,F,G,I),le.viewport(A.copy(D).multiplyScalar(k).floor())},this.getScissor=function(T){return T.copy(U)},this.setScissor=function(T,F,G,I){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,F,G,I),le.scissor(C.copy(U).multiplyScalar(k).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(T){le.setScissorTest(Y=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){R=T},this.getClearColor=function(T){return T.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(T=!0,F=!0,G=!0){let I=0;T&&(I|=16384),F&&(I|=256),G&&(I|=1024),O.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",Re,!1),sn.dispose(),E.dispose(),we.dispose(),Mt.dispose(),qt.dispose(),nt.dispose(),$.dispose(),ge.dispose(),Ne.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ae),ce.removeEventListener("sessionend",he),K&&(K.dispose(),K=null),Fe.stop()};function _e(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=ke.autoReset,F=H.enabled,G=H.autoUpdate,I=H.needsUpdate,W=H.type;ve(),ke.autoReset=T,H.enabled=F,H.autoUpdate=G,H.needsUpdate=I,H.type=W}function Re(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ve(T){const F=T.target;F.removeEventListener("dispose",Ve),at(F)}function at(T){P(T),we.remove(T)}function P(T){const F=we.get(T).programs;F!==void 0&&(F.forEach(function(G){Ne.releaseProgram(G)}),T.isShaderMaterial&&Ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,G,I,W,me){F===null&&(F=te);const Me=W.isMesh&&W.matrixWorld.determinant()<0,Ee=Lc(T,F,G,I,W);le.setMaterial(I,Me);let Ae=G.index,Ie=1;I.wireframe===!0&&(Ae=jt.getWireframeAttribute(G),Ie=2);const Pe=G.drawRange,Le=G.attributes.position;let Ke=Pe.start*Ie,It=(Pe.start+Pe.count)*Ie;me!==null&&(Ke=Math.max(Ke,me.start*Ie),It=Math.min(It,(me.start+me.count)*Ie)),Ae!==null?(Ke=Math.max(Ke,0),It=Math.min(It,Ae.count)):Le!=null&&(Ke=Math.max(Ke,0),It=Math.min(It,Le.count));const En=It-Ke;if(En<0||En===1/0)return;$.setup(W,I,Ee,G,Ae);let ti,Je=se;if(Ae!==null&&(ti=mt.get(Ae),Je=ye,Je.setIndex(ti)),W.isMesh)I.wireframe===!0?(le.setLineWidth(I.wireframeLinewidth*ne()),Je.setMode(1)):Je.setMode(4);else if(W.isLine){let De=I.linewidth;De===void 0&&(De=1),le.setLineWidth(De*ne()),W.isLineSegments?Je.setMode(1):W.isLineLoop?Je.setMode(2):Je.setMode(3)}else W.isPoints?Je.setMode(0):W.isSprite&&Je.setMode(4);if(W.isInstancedMesh)Je.renderInstances(Ke,En,W.count);else if(G.isInstancedBufferGeometry){const De=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Fs=Math.min(G.instanceCount,De);Je.renderInstances(Ke,En,Fs)}else Je.render(Ke,En)},this.compile=function(T,F){function G(I,W,me){I.transparent===!0&&I.side===Ye&&I.forceSinglePass===!1?(I.side=Gt,I.needsUpdate=!0,Yt(I,W,me),I.side=Yn,I.needsUpdate=!0,Yt(I,W,me),I.side=Ye):Yt(I,W,me)}h=E.get(T),h.init(),g.push(h),T.traverseVisible(function(I){I.isLight&&I.layers.test(F.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights(f.physicallyCorrectLights),T.traverse(function(I){const W=I.material;if(W)if(Array.isArray(W))for(let me=0;me<W.length;me++){const Me=W[me];G(Me,T,I)}else G(W,T,I)}),g.pop(),h=null};let V=null;function Q(T){V&&V(T)}function ae(){Fe.stop()}function he(){Fe.start()}const Fe=new Su;Fe.setAnimationLoop(Q),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(T){V=T,ce.setAnimationLoop(T),T===null?Fe.stop():Fe.start()},ce.addEventListener("sessionstart",ae),ce.addEventListener("sessionend",he),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(F),F=ce.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,F,x),h=E.get(T,g.length),h.init(),g.push(h),ue.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(ue),J=this.localClippingEnabled,B=S.init(this.clippingPlanes,J),d=sn.get(T,m.length),d.init(),m.push(d),lt(T,F,0,f.sortObjects),d.finish(),f.sortObjects===!0&&d.sort(X,R),B===!0&&S.beginShadows();const G=h.state.shadowsArray;if(H.render(G,T,F),B===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(d,T),h.setupLights(f.physicallyCorrectLights),F.isArrayCamera){const I=F.cameras;for(let W=0,me=I.length;W<me;W++){const Me=I[W];gt(d,T,Me,Me.viewport)}}else gt(d,T,F);x!==null&&(xe.updateMultisampleRenderTarget(x),xe.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(f,T,F),$.resetDefaultState(),b=-1,y=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function lt(T,F,G,I){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){I&&j.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);const Me=nt.update(T),Ee=T.material;Ee.visible&&d.push(T,Me,Ee,G,j.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==ke.render.frame&&(T.skeleton.update(),T.skeleton.frame=ke.render.frame),!T.frustumCulled||q.intersectsObject(T))){I&&j.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);const Me=nt.update(T),Ee=T.material;if(Array.isArray(Ee)){const Ae=Me.groups;for(let Ie=0,Pe=Ae.length;Ie<Pe;Ie++){const Le=Ae[Ie],Ke=Ee[Le.materialIndex];Ke&&Ke.visible&&d.push(T,Me,Ke,G,j.z,Le)}}else Ee.visible&&d.push(T,Me,Ee,G,j.z,null)}}const me=T.children;for(let Me=0,Ee=me.length;Me<Ee;Me++)lt(me[Me],F,G,I)}function gt(T,F,G,I){const W=T.opaque,me=T.transmissive,Me=T.transparent;h.setupLightsView(G),B===!0&&S.setGlobalState(f.clippingPlanes,G),me.length>0&&ei(W,F,G),I&&le.viewport(A.copy(I)),W.length>0&&Ge(W,F,G),me.length>0&&Ge(me,F,G),Me.length>0&&Ge(Me,F,G),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function ei(T,F,G){const I=fe.isWebGL2;K===null&&(K=new Si(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?Dr:Mi,minFilter:Lr,samples:I&&r===!0?4:0})),f.getDrawingBufferSize(N),I?K.setSize(N.x,N.y):K.setSize(Fo(N.x),Fo(N.y));const W=f.getRenderTarget();f.setRenderTarget(K),f.clear();const me=f.toneMapping;f.toneMapping=Nn,Ge(T,F,G),f.toneMapping=me,xe.updateMultisampleRenderTarget(K),xe.updateRenderTargetMipmap(K),f.setRenderTarget(W)}function Ge(T,F,G){const I=F.isScene===!0?F.overrideMaterial:null;for(let W=0,me=T.length;W<me;W++){const Me=T[W],Ee=Me.object,Ae=Me.geometry,Ie=I===null?Me.material:I,Pe=Me.group;Ee.layers.test(G.layers)&&Tn(Ee,F,G,Ae,Ie,Pe)}}function Tn(T,F,G,I,W,me){T.onBeforeRender(f,F,G,I,W,me),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(f,F,G,I,T,me),W.transparent===!0&&W.side===Ye&&W.forceSinglePass===!1?(W.side=Gt,W.needsUpdate=!0,f.renderBufferDirect(G,F,I,W,T,me),W.side=Yn,W.needsUpdate=!0,f.renderBufferDirect(G,F,I,W,T,me),W.side=Ye):f.renderBufferDirect(G,F,I,W,T,me),T.onAfterRender(f,F,G,I,W,me)}function Yt(T,F,G){F.isScene!==!0&&(F=te);const I=we.get(T),W=h.state.lights,me=h.state.shadowsArray,Me=W.state.version,Ee=Ne.getParameters(T,W.state,me,F,G),Ae=Ne.getProgramCacheKey(Ee);let Ie=I.programs;I.environment=T.isMeshStandardMaterial?F.environment:null,I.fog=F.fog,I.envMap=(T.isMeshStandardMaterial?qt:Mt).get(T.envMap||I.environment),Ie===void 0&&(T.addEventListener("dispose",Ve),Ie=new Map,I.programs=Ie);let Pe=Ie.get(Ae);if(Pe!==void 0){if(I.currentProgram===Pe&&I.lightsStateVersion===Me)return Sa(T,Ee),Pe}else Ee.uniforms=Ne.getUniforms(T),T.onBuild(G,Ee,f),T.onBeforeCompile(Ee,f),Pe=Ne.acquireProgram(Ee,Ae),Ie.set(Ae,Pe),I.uniforms=Ee.uniforms;const Le=I.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=S.uniform),Sa(T,Ee),I.needsLights=Rc(T),I.lightsStateVersion=Me,I.needsLights&&(Le.ambientLightColor.value=W.state.ambient,Le.lightProbe.value=W.state.probe,Le.directionalLights.value=W.state.directional,Le.directionalLightShadows.value=W.state.directionalShadow,Le.spotLights.value=W.state.spot,Le.spotLightShadows.value=W.state.spotShadow,Le.rectAreaLights.value=W.state.rectArea,Le.ltc_1.value=W.state.rectAreaLTC1,Le.ltc_2.value=W.state.rectAreaLTC2,Le.pointLights.value=W.state.point,Le.pointLightShadows.value=W.state.pointShadow,Le.hemisphereLights.value=W.state.hemi,Le.directionalShadowMap.value=W.state.directionalShadowMap,Le.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Le.spotShadowMap.value=W.state.spotShadowMap,Le.spotLightMatrix.value=W.state.spotLightMatrix,Le.spotLightMap.value=W.state.spotLightMap,Le.pointShadowMap.value=W.state.pointShadowMap,Le.pointShadowMatrix.value=W.state.pointShadowMatrix);const Ke=Pe.getUniforms(),It=ps.seqWithValue(Ke.seq,Le);return I.currentProgram=Pe,I.uniformsList=It,Pe}function Sa(T,F){const G=we.get(T);G.outputEncoding=F.outputEncoding,G.instancing=F.instancing,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Lc(T,F,G,I,W){F.isScene!==!0&&(F=te),xe.resetTextureUnits();const me=F.fog,Me=I.isMeshStandardMaterial?F.environment:null,Ee=x===null?f.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:bi,Ae=(I.isMeshStandardMaterial?qt:Mt).get(I.envMap||Me),Ie=I.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Pe=!!I.normalMap&&!!G.attributes.tangent,Le=!!G.morphAttributes.position,Ke=!!G.morphAttributes.normal,It=!!G.morphAttributes.color,En=I.toneMapped?f.toneMapping:Nn,ti=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Je=ti!==void 0?ti.length:0,De=we.get(I),Fs=h.state.lights;if(B===!0&&(J===!0||T!==y)){const Ft=T===y&&I.id===b;S.setState(I,T,Ft)}let ut=!1;I.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Fs.state.version||De.outputEncoding!==Ee||W.isInstancedMesh&&De.instancing===!1||!W.isInstancedMesh&&De.instancing===!0||W.isSkinnedMesh&&De.skinning===!1||!W.isSkinnedMesh&&De.skinning===!0||De.envMap!==Ae||I.fog===!0&&De.fog!==me||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==S.numPlanes||De.numIntersection!==S.numIntersection)||De.vertexAlphas!==Ie||De.vertexTangents!==Pe||De.morphTargets!==Le||De.morphNormals!==Ke||De.morphColors!==It||De.toneMapping!==En||fe.isWebGL2===!0&&De.morphTargetsCount!==Je)&&(ut=!0):(ut=!0,De.__version=I.version);let ni=De.currentProgram;ut===!0&&(ni=Yt(I,F,W));let wa=!1,ur=!1,Ns=!1;const bt=ni.getUniforms(),ii=De.uniforms;if(le.useProgram(ni.program)&&(wa=!0,ur=!0,Ns=!0),I.id!==b&&(b=I.id,ur=!0),wa||y!==T){if(bt.setValue(O,"projectionMatrix",T.projectionMatrix),fe.logarithmicDepthBuffer&&bt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),y!==T&&(y=T,ur=!0,Ns=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Ft=bt.map.cameraPosition;Ft!==void 0&&Ft.setValue(O,j.setFromMatrixPosition(T.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&bt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||W.isSkinnedMesh)&&bt.setValue(O,"viewMatrix",T.matrixWorldInverse)}if(W.isSkinnedMesh){bt.setOptional(O,W,"bindMatrix"),bt.setOptional(O,W,"bindMatrixInverse");const Ft=W.skeleton;Ft&&(fe.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),bt.setValue(O,"boneTexture",Ft.boneTexture,xe),bt.setValue(O,"boneTextureSize",Ft.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const zs=G.morphAttributes;if((zs.position!==void 0||zs.normal!==void 0||zs.color!==void 0&&fe.isWebGL2===!0)&&ie.update(W,G,I,ni),(ur||De.receiveShadow!==W.receiveShadow)&&(De.receiveShadow=W.receiveShadow,bt.setValue(O,"receiveShadow",W.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(ii.envMap.value=Ae,ii.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),ur&&(bt.setValue(O,"toneMappingExposure",f.toneMappingExposure),De.needsLights&&Dc(ii,Ns),me&&I.fog===!0&&wn.refreshFogUniforms(ii,me),wn.refreshMaterialUniforms(ii,I,k,L,K),ps.upload(O,De.uniformsList,ii,xe)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(ps.upload(O,De.uniformsList,ii,xe),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&bt.setValue(O,"center",W.center),bt.setValue(O,"modelViewMatrix",W.modelViewMatrix),bt.setValue(O,"normalMatrix",W.normalMatrix),bt.setValue(O,"modelMatrix",W.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Ft=I.uniformsGroups;for(let Us=0,Ic=Ft.length;Us<Ic;Us++)if(fe.isWebGL2){const Ta=Ft[Us];ge.update(Ta,ni),ge.bind(Ta,ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ni}function Dc(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Rc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,F,G){we.get(T.texture).__webglTexture=F,we.get(T.depthTexture).__webglTexture=G;const I=we.get(T);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=G===void 0,I.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){const G=we.get(T);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,G=0){x=T,_=F,M=G;let I=!0,W=null,me=!1,Me=!1;if(T){const Ae=we.get(T);Ae.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),I=!1):Ae.__webglFramebuffer===void 0?xe.setupRenderTarget(T):Ae.__hasExternalTextures&&xe.rebindTextures(T,we.get(T.texture).__webglTexture,we.get(T.depthTexture).__webglTexture);const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Me=!0);const Pe=we.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(W=Pe[F],me=!0):fe.isWebGL2&&T.samples>0&&xe.useMultisampledRTT(T)===!1?W=we.get(T).__webglMultisampledFramebuffer:W=Pe,A.copy(T.viewport),C.copy(T.scissor),v=T.scissorTest}else A.copy(D).multiplyScalar(k).floor(),C.copy(U).multiplyScalar(k).floor(),v=Y;if(le.bindFramebuffer(36160,W)&&fe.drawBuffers&&I&&le.drawBuffers(T,W),le.viewport(A),le.scissor(C),le.setScissorTest(v),me){const Ae=we.get(T.texture);O.framebufferTexture2D(36160,36064,34069+F,Ae.__webglTexture,G)}else if(Me){const Ae=we.get(T.texture),Ie=F||0;O.framebufferTextureLayer(36160,36064,Ae.__webglTexture,G||0,Ie)}b=-1},this.readRenderTargetPixels=function(T,F,G,I,W,me,Me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=we.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){le.bindFramebuffer(36160,Ee);try{const Ae=T.texture,Ie=Ae.format,Pe=Ae.type;if(Ie!==cn&&oe.convert(Ie)!==O.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Pe===Dr&&(de.has("EXT_color_buffer_half_float")||fe.isWebGL2&&de.has("EXT_color_buffer_float"));if(Pe!==Mi&&oe.convert(Pe)!==O.getParameter(35738)&&!(Pe===pi&&(fe.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-I&&G>=0&&G<=T.height-W&&O.readPixels(F,G,I,W,oe.convert(Ie),oe.convert(Pe),me)}finally{const Ae=x!==null?we.get(x).__webglFramebuffer:null;le.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(T,F,G=0){const I=Math.pow(2,-G),W=Math.floor(F.image.width*I),me=Math.floor(F.image.height*I);xe.setTexture2D(F,0),O.copyTexSubImage2D(3553,G,0,0,T.x,T.y,W,me),le.unbindTexture()},this.copyTextureToTexture=function(T,F,G,I=0){const W=F.image.width,me=F.image.height,Me=oe.convert(G.format),Ee=oe.convert(G.type);xe.setTexture2D(G,0),O.pixelStorei(37440,G.flipY),O.pixelStorei(37441,G.premultiplyAlpha),O.pixelStorei(3317,G.unpackAlignment),F.isDataTexture?O.texSubImage2D(3553,I,T.x,T.y,W,me,Me,Ee,F.image.data):F.isCompressedTexture?O.compressedTexSubImage2D(3553,I,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,Me,F.mipmaps[0].data):O.texSubImage2D(3553,I,T.x,T.y,Me,Ee,F.image),I===0&&G.generateMipmaps&&O.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(T,F,G,I,W=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=T.max.x-T.min.x+1,Me=T.max.y-T.min.y+1,Ee=T.max.z-T.min.z+1,Ae=oe.convert(I.format),Ie=oe.convert(I.type);let Pe;if(I.isData3DTexture)xe.setTexture3D(I,0),Pe=32879;else if(I.isDataArrayTexture)xe.setTexture2DArray(I,0),Pe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(37440,I.flipY),O.pixelStorei(37441,I.premultiplyAlpha),O.pixelStorei(3317,I.unpackAlignment);const Le=O.getParameter(3314),Ke=O.getParameter(32878),It=O.getParameter(3316),En=O.getParameter(3315),ti=O.getParameter(32877),Je=G.isCompressedTexture?G.mipmaps[0]:G.image;O.pixelStorei(3314,Je.width),O.pixelStorei(32878,Je.height),O.pixelStorei(3316,T.min.x),O.pixelStorei(3315,T.min.y),O.pixelStorei(32877,T.min.z),G.isDataTexture||G.isData3DTexture?O.texSubImage3D(Pe,W,F.x,F.y,F.z,me,Me,Ee,Ae,Ie,Je.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Pe,W,F.x,F.y,F.z,me,Me,Ee,Ae,Je.data)):O.texSubImage3D(Pe,W,F.x,F.y,F.z,me,Me,Ee,Ae,Ie,Je),O.pixelStorei(3314,Le),O.pixelStorei(32878,Ke),O.pixelStorei(3316,It),O.pixelStorei(3315,En),O.pixelStorei(32877,ti),W===0&&I.generateMipmaps&&O.generateMipmap(Pe),le.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?xe.setTextureCube(T,0):T.isData3DTexture?xe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?xe.setTexture2DArray(T,0):xe.setTexture2D(T,0),le.unbindTexture()},this.resetState=function(){_=0,M=0,x=null,le.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Cu extends Ig{}Cu.prototype.isWebGL1Renderer=!0;class Fg extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ia extends Jn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+s,Math.PI);let u=0;const c=[],d=new z,h=new z,m=[],g=[],f=[],p=[];for(let _=0;_<=n;_++){const M=[],x=_/n;let b=0;_==0&&o==0?b=.5/t:_==n&&l==Math.PI&&(b=-.5/t);for(let y=0;y<=t;y++){const A=y/t;d.x=-e*Math.cos(i+A*r)*Math.sin(o+x*s),d.y=e*Math.cos(o+x*s),d.z=e*Math.sin(i+A*r)*Math.sin(o+x*s),g.push(d.x,d.y,d.z),h.copy(d).normalize(),f.push(h.x,h.y,h.z),p.push(A+b,1-x),M.push(u++)}c.push(M)}for(let _=0;_<n;_++)for(let M=0;M<t;M++){const x=c[_][M+1],b=c[_][M],y=c[_+1][M],A=c[_+1][M+1];(_!==0||o>0)&&m.push(x,b,A),(_!==n-1||l<Math.PI)&&m.push(b,y,A)}this.setIndex(m),this.setAttribute("position",new vn(g,3)),this.setAttribute("normal",new vn(f,3)),this.setAttribute("uv",new vn(p,2))}static fromJSON(e){return new ia(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const kl={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Ng{constructor(e,t,n){const i=this;let r=!1,o=0,s=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){s++,r===!1&&i.onStart!==void 0&&i.onStart(c,o,s),r=!0},this.itemEnd=function(c){o++,i.onProgress!==void 0&&i.onProgress(c,o,s),o===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,h=u.length;d<h;d+=2){const m=u[d],g=u[d+1];if(m.global&&(m.lastIndex=0),m.test(c))return g}return null}}}const zg=new Ng;class Pu{constructor(e){this.manager=e!==void 0?e:zg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Ug extends Pu{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=kl.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const s=Ir("img");function l(){c(),kl.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(d){c(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){s.removeEventListener("load",l,!1),s.removeEventListener("error",u,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(e),s.src=e,s}}class ze extends Pu{constructor(e){super(e)}load(e,t,n,i){const r=new Ct,o=new Ug(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){r.image=s,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Og{constructor(e,t,n=0,i=1/0){this.ray=new mu(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return zo(e,this,n,t),n.sort(Bl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)zo(e[i],this,n,t);return n.sort(Bl),n}}function Bl(a,e){return a.distance-e.distance}function zo(a,e,t,n){if(a.layers.test(e.layers)&&a.raycast(e,t),n===!0){const i=a.children;for(let r=0,o=i.length;r<o;r++)zo(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qo);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class xn{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),xn.nextNameID=xn.nextNameID||0,this.$name.id="lil-gui-name-"+ ++xn.nextNameID,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class kg extends xn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Uo(a){let e,t;return(e=a.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const Bg={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:Uo,toHexString:Uo},Fr={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},Vg={isPrimitive:!1,match:Array.isArray,fromHexString(a,e,t=1){const n=Fr.fromHexString(a);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(255&n)/255*t},toHexString:([a,e,t],n=1)=>Fr.toHexString(a*(n=255/n)<<16^e*n<<8^t*n<<0)},Gg={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,e,t=1){const n=Fr.fromHexString(a);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(255&n)/255*t},toHexString:({r:a,g:e,b:t},n=1)=>Fr.toHexString(a*(n=255/n)<<16^e*n<<8^t*n<<0)},Hg=[Bg,Fr,Vg,Gg];class Wg extends xn{constructor(e,t,n,i){var r;super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,Hg.find(o=>o.match(r))),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=Uo(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class vo extends xn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class $g extends xn{constructor(e,t,n,i,r,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const s=o!==void 0;this.step(s?o:this._getImplicitStep(),s),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=c=>{const d=parseFloat(this.$input.value);isNaN(d)||(this._snapClampSetValue(d+c),this.$input.value=this.getValue())};let t,n,i,r,o,s=!1;const l=c=>{if(s){const d=c.clientX-t,h=c.clientY-n;Math.abs(h)>5?(c.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(d)>5&&u()}if(!s){const d=c.clientY-i;o-=d*this._step*this._arrowKeyMultiplier(c),r+o>this._max?o=this._max-r:r+o<this._min&&(o=this._min-r),this._snapClampSetValue(r+o)}i=c.clientY},u=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",u)};this.$input.addEventListener("input",()=>{let c=parseFloat(this.$input.value);isNaN(c)||(this._stepExplicit&&(c=this._snap(c)),this.setValue(this._clamp(c)))}),this.$input.addEventListener("keydown",c=>{c.code==="Enter"&&this.$input.blur(),c.code==="ArrowUp"&&(c.preventDefault(),e(this._step*this._arrowKeyMultiplier(c))),c.code==="ArrowDown"&&(c.preventDefault(),e(this._step*this._arrowKeyMultiplier(c)*-1))}),this.$input.addEventListener("wheel",c=>{this._inputFocused&&(c.preventDefault(),e(this._step*this._normalizeMouseWheel(c)))},{passive:!1}),this.$input.addEventListener("mousedown",c=>{t=c.clientX,n=i=c.clientY,s=!0,r=this.getValue(),o=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",u)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=h=>{const m=this.$slider.getBoundingClientRect();let g=(f=h,p=m.left,_=m.right,M=this._min,x=this._max,(f-p)/(_-p)*(x-M)+M);var f,p,_,M,x;this._snapClampSetValue(g)},t=h=>{e(h.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",n)};let i,r,o=!1;const s=h=>{h.preventDefault(),this._setDraggingStyle(!0),e(h.touches[0].clientX),o=!1},l=h=>{if(o){const m=h.touches[0].clientX-i,g=h.touches[0].clientY-r;Math.abs(m)>Math.abs(g)?s(h):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",u))}else h.preventDefault(),e(h.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",u)},c=this._callOnFinishChange.bind(this);let d;this.$slider.addEventListener("mousedown",h=>{this._setDraggingStyle(!0),e(h.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",h=>{h.touches.length>1||(this._hasScrollBar?(i=h.touches[0].clientX,r=h.touches[0].clientY,o=!0):s(h),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",u))},{passive:!1}),this.$slider.addEventListener("wheel",h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const m=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+m),this.$input.value=this.getValue(),clearTimeout(d),d=setTimeout(c,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Xg extends xn{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const o=document.createElement("option");o.innerHTML=r,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class qg extends xn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Vl=!1;class ra{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",injectStyles:o=!0,touchStyles:s=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),s&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Vl&&o&&(function(l){const u=document.createElement("style");u.innerHTML=l;const c=document.querySelector("head link[rel=stylesheet], head style");c?document.head.insertBefore(u,c):document.head.appendChild(u)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Vl=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,i,r){if(Object(n)===n)return new Xg(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new $g(this,e,t,n,i,r);case"boolean":return new kg(this,e,t);case"string":return new qg(this,e,t);case"function":return new vo(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new Wg(this,e,t,n)}addFolder(e){return new ra({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof vo||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof vo)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}var jg=`uniform float uTime;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;

void main() {\r
    vPosition = position;\r
    vNormal = normal;\r
    vUv = uv;

    vec3 newPosition = vec3(position.x, position.y, position.z);\r
    \r

    
    vec4 modelViewPosition = modelViewMatrix * vec4(newPosition, 1.0 );\r
    vec4 projectedPosition = projectionMatrix * modelViewPosition;\r
	gl_Position = projectedPosition;\r
}`,Yg=`uniform sampler2D uTexture1; \r
uniform sampler2D uTexture2; \r
uniform sampler2D uDisplacment; \r

uniform float uTime;\r
uniform float uProgress;\r
uniform vec2 iResolution;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;\r

void main() {\r
	vec2 uv = vUv;

	float time = sin(uProgress * 3.14/2.);\r
	vec4 texture1 = texture2D( uTexture1, vec2(vUv.x , vUv.y));\r
	vec4 texture2 = texture2D( uTexture2, vec2(vUv.x , vUv.y));\r
	vec4 masck = vec4( vec3(step((time * 3. - sin(length(vUv.x))*2. ) , mod(-vUv.x * 6., 1.))), 1);\r
	gl_FragColor = mix(texture2, texture1, masck); 

	gl_FragColor = mix(texture2, texture1, masck); \r
}`;const bn="/shadertest/assets/project_1-5eae10ac.jpg",Sn="/shadertest/assets/project_2-4b202d0e.jpg",dn="/shadertest/assets/project_3-ed33fb9d.jpg",Xt="/shadertest/assets/project_4-e1da934d.jpg",On="/shadertest/assets/project_5-425c3e0b.jpg";function Rn(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Lu(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Wt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},er={duration:.5,overwrite:!1,delay:0},sa,xt,et,en=1e8,Oe=1/en,Oo=Math.PI*2,Zg=Oo/4,Kg=0,Du=Math.sqrt,Jg=Math.cos,Qg=Math.sin,ht=function(e){return typeof e=="string"},qe=function(e){return typeof e=="function"},zn=function(e){return typeof e=="number"},oa=function(e){return typeof e>"u"},Mn=function(e){return typeof e=="object"},Pt=function(e){return e!==!1},aa=function(){return typeof window<"u"},ds=function(e){return qe(e)||ht(e)},Ru=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},yt=Array.isArray,ko=/(?:-?\.?\d|\.)+/gi,Iu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Hi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,xo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Fu=/[+-]=-?[.\d]+/,Nu=/[^,'"\[\]\s]+/gi,e_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,We,Jt,Bo,la,$t={},vs={},zu,Uu=function(e){return(vs=wi(e,$t))&&Rt},ua=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},xs=function(e,t){return!t&&console.warn(e)},Ou=function(e,t){return e&&($t[e]=t)&&vs&&(vs[e]=t)||$t},Nr=function(){return 0},t_={suppressEvents:!0,isStart:!0,kill:!1},ms={suppressEvents:!0,kill:!1},n_={suppressEvents:!0},ca={},qn=[],Vo={},ku,Ot={},yo={},Gl=30,gs=[],ha="",da=function(e){var t=e[0],n,i;if(Mn(t)||qe(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=gs.length;i--&&!gs[i].targetTest(t););n=gs[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new uc(e[i],n)))||e.splice(i,1);return e},vi=function(e){return e._gsap||da(tn(e))[0]._gsap},Bu=function(e,t,n){return(n=e[t])&&qe(n)?e[t]():oa(n)&&e.getAttribute&&e.getAttribute(t)||n},Lt=function(e,t){return(e=e.split(",")).forEach(t)||e},je=function(e){return Math.round(e*1e5)/1e5||0},dt=function(e){return Math.round(e*1e7)/1e7||0},qi=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},i_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ys=function(){var e=qn.length,t=qn.slice(0),n,i;for(Vo={},qn.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Vu=function(e,t,n,i){qn.length&&!xt&&ys(),e.render(t,n,i||xt&&t<0&&(e._initted||e._startAt)),qn.length&&!xt&&ys()},Gu=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Nu).length<2?t:ht(e)?e.trim():e},Hu=function(e){return e},rn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},r_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},wi=function(e,t){for(var n in t)e[n]=t[n];return e},Hl=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Mn(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},Ms=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ar=function(e){var t=e.parent||We,n=e.keyframes?r_(yt(e.keyframes)):rn;if(Pt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},s_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Wu=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],s;if(r)for(s=t[r];o&&o[r]>s;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Ls=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Zn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},xi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},o_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Go=function(e,t,n,i){return e._startAt&&(xt?e._startAt.revert(ms):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},a_=function a(e){return!e||e._ts&&a(e.parent)},Wl=function(e){return e._repeat?tr(e._tTime,e=e.duration()+e._rDelay)*e:0},tr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},bs=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ds=function(e){return e._end=dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Oe)||0))},Rs=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=dt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ds(e),n._dirty||xi(n,e)),e},$u=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=bs(e.rawTime(),t),(!t._dur||$r(0,t.totalDuration(),n)-t._tTime>Oe)&&t.render(n,!0)),xi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Oe}},mn=function(e,t,n,i){return t.parent&&Zn(t),t._start=dt((zn(n)?n:n||e!==We?Kt(e,n,t):e._time)+t._delay),t._end=dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Wu(e,t,"_first","_last",e._sort?"_start":0),Ho(t)||(e._recent=t),i||$u(e,t),e._ts<0&&Rs(e,e._tTime),e},Xu=function(e,t){return($t.ScrollTrigger||ua("scrollTrigger",t))&&$t.ScrollTrigger.create(t,e)},qu=function(e,t,n,i,r){if(pa(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!xt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ku!==Bt.frame)return qn.push(e),e._lazy=[r,i],1},l_=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},Ho=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},u_=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&l_(e)&&!(!e._initted&&Ho(e))||(e._ts<0||e._dp._ts<0)&&!Ho(e))?0:1,s=e._rDelay,l=0,u,c,d;if(s&&e._repeat&&(l=$r(0,e._tDur,t),c=tr(l,s),e._yoyo&&c&1&&(o=1-o),c!==tr(e._tTime,s)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||xt||i||e._zTime===Oe||!t&&e._zTime){if(!e._initted&&qu(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Oe:0),n||(n=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Go(e,t,n,!0),e._onUpdate&&!n&&nn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&nn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Zn(e,1),!n&&!xt&&(nn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},c_=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},nr=function(e,t,n,i){var r=e._repeat,o=dt(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:dt(o*(r+1)+e._rDelay*r):o,s>0&&!i&&Rs(e,e._tTime=e._tDur*s),e.parent&&Ds(e),n||xi(e.parent,e),e},$l=function(e){return e instanceof At?xi(e):nr(e,e._dur)},h_={_start:0,endTime:Nr,totalDuration:Nr},Kt=function a(e,t,n){var i=e.labels,r=e._recent||h_,o=e.duration()>=en?r.endTime(!1):e._dur,s,l,u;return ht(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),u=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),u&&n&&(l=l/100*(yt(n)?n[0]:n).totalDuration()),s>1?a(e,t.substr(0,s-1),n)+l:o+l)):t==null?o:+t},Cr=function(e,t,n){var i=zn(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],s,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(s=o,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=Pt(l.vars.inherit)&&l.parent;o.immediateRender=Pt(s.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new rt(t[0],o,t[r+1])},Qn=function(e,t){return e||e===0?t(e):t},$r=function(e,t,n){return n<e?e:n>t?t:n},vt=function(e,t){return!ht(e)||!(t=e_.exec(e))?"":t[1]},d_=function(e,t,n){return Qn(n,function(i){return $r(e,t,i)})},Wo=[].slice,ju=function(e,t){return e&&Mn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Mn(e[0]))&&!e.nodeType&&e!==Jt},f_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return ht(i)&&!t||ju(i,1)?(r=n).push.apply(r,tn(i)):n.push(i)})||n},tn=function(e,t,n){return et&&!t&&et.selector?et.selector(e):ht(e)&&!n&&(Bo||!ir())?Wo.call((t||la).querySelectorAll(e),0):yt(e)?f_(e,n):ju(e)?Wo.call(e,0):e?[e]:[]},$o=function(e){return e=tn(e)[0]||xs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return tn(t,n.querySelectorAll?n:n===e?xs("Invalid scope")||la.createElement("div"):e)}},Yu=function(e){return e.sort(function(){return .5-Math.random()})},Zu=function(e){if(qe(e))return e;var t=Mn(e)?e:{each:e},n=yi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},s=i>0&&i<1,l=isNaN(i)||s,u=t.axis,c=i,d=i;return ht(i)?c=d={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(c=i[0],d=i[1]),function(h,m,g){var f=(g||t).length,p=o[f],_,M,x,b,y,A,C,v,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,en])[1],!w){for(C=-en;C<(C=g[w++].getBoundingClientRect().left)&&w<f;);w--}for(p=o[f]=[],_=l?Math.min(w,f)*c-.5:i%w,M=w===en?0:l?f*d/w-.5:i/w|0,C=0,v=en,A=0;A<f;A++)x=A%w-_,b=M-(A/w|0),p[A]=y=u?Math.abs(u==="y"?b:x):Du(x*x+b*b),y>C&&(C=y),y<v&&(v=y);i==="random"&&Yu(p),p.max=C-v,p.min=v,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(w>f?f-1:u?u==="y"?f/w:w:Math.max(w,f/w))||0)*(i==="edges"?-1:1),p.b=f<0?r-f:r,p.u=vt(t.amount||t.each)||0,n=n&&f<0?oc(n):n}return f=(p[h]-p.min)/p.max||0,dt(p.b+(n?n(f):f)*p.v)+p.u}},Xo=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=dt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(zn(n)?0:vt(n))}},Ku=function(e,t){var n=yt(e),i,r;return!n&&Mn(e)&&(i=n=e.radius||en,e.values?(e=tn(e.values),(r=!zn(e[0]))&&(i*=i)):e=Xo(e.increment)),Qn(t,n?qe(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var s=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),u=en,c=0,d=e.length,h,m;d--;)r?(h=e[d].x-s,m=e[d].y-l,h=h*h+m*m):h=Math.abs(e[d]-s),h<u&&(u=h,c=d);return c=!i||u<=i?e[c]:o,r||c===o||zn(o)?c:c+vt(o)}:Xo(e))},Ju=function(e,t,n,i){return Qn(yt(e)?!t:n===!0?!!(n=0):!i,function(){return yt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},p_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},m_=function(e,t){return function(n){return e(parseFloat(n))+(t||vt(n))}},g_=function(e,t,n){return ec(e,t,0,1,n)},Qu=function(e,t,n){return Qn(n,function(i){return e[~~t(i)]})},__=function a(e,t,n){var i=t-e;return yt(e)?Qu(e,a(0,e.length),t):Qn(n,function(r){return(i+(r-e)%i)%i+e})},v_=function a(e,t,n){var i=t-e,r=i*2;return yt(e)?Qu(e,a(0,e.length-1),t):Qn(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},zr=function(e){for(var t=0,n="",i,r,o,s;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),s=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(s?Nu:ko),n+=e.substr(t,i-t)+Ju(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},ec=function(e,t,n,i,r){var o=t-e,s=i-n;return Qn(r,function(l){return n+((l-e)/o*s||0)})},x_=function a(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var o=ht(e),s={},l,u,c,d,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(yt(e)&&!yt(t)){for(c=[],d=e.length,h=d-2,u=1;u<d;u++)c.push(a(e[u-1],e[u]));d--,r=function(g){g*=d;var f=Math.min(h,~~g);return c[f](g-f)},n=t}else i||(e=wi(yt(e)?[]:{},e));if(!c){for(l in t)fa.call(s,e,l,"get",t[l]);r=function(g){return _a(g,s)||(o?e.p:e)}}}return Qn(n,r)},Xl=function(e,t,n){var i=e.labels,r=en,o,s,l;for(o in i)s=i[o]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=o,r=s);return l},nn=function(e,t,n){var i=e.vars,r=i[t],o=et,s=e._ctx,l,u,c;if(r)return l=i[t+"Params"],u=i.callbackScope||e,n&&qn.length&&ys(),s&&(et=s),c=l?r.apply(u,l):r.call(u),et=o,c},Tr=function(e){return Zn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!xt),e.progress()<1&&nn(e,"onInterrupt"),e},Wi,tc=[],nc=function(e){if(!aa()){tc.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=qe(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Nr,render:_a,add:fa,kill:N_,modifier:F_,rawVars:0},o={targetTest:0,get:0,getSetter:ga,aliases:{},register:0};if(ir(),e!==i){if(Ot[t])return;rn(i,rn(Ms(e,r),o)),wi(i.prototype,wi(r,Ms(e,o))),Ot[i.prop=t]=i,e.targetTest&&(gs.push(i),ca[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ou(t,i),e.register&&e.register(Rt,i,Dt)},Ue=255,Er={aqua:[0,Ue,Ue],lime:[0,Ue,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ue],navy:[0,0,128],white:[Ue,Ue,Ue],olive:[128,128,0],yellow:[Ue,Ue,0],orange:[Ue,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ue,0,0],pink:[Ue,192,203],cyan:[0,Ue,Ue],transparent:[Ue,Ue,Ue,0]},Mo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ue+.5|0},ic=function(e,t,n){var i=e?zn(e)?[e>>16,e>>8&Ue,e&Ue]:0:Er.black,r,o,s,l,u,c,d,h,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Er[e])i=Er[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),s=e.charAt(3),e="#"+r+r+o+o+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ue,i&Ue,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ue,e&Ue]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(ko),!t)l=+i[0]%360/360,u=+i[1]/100,c=+i[2]/100,o=c<=.5?c*(u+1):c+u-c*u,r=c*2-o,i.length>3&&(i[3]*=1),i[0]=Mo(l+1/3,r,o),i[1]=Mo(l,r,o),i[2]=Mo(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Iu),n&&i.length<4&&(i[3]=1),i}else i=e.match(ko)||Er.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Ue,o=i[1]/Ue,s=i[2]/Ue,d=Math.max(r,o,s),h=Math.min(r,o,s),c=(d+h)/2,d===h?l=u=0:(m=d-h,u=c>.5?m/(2-d-h):m/(d+h),l=d===r?(o-s)/m+(o<s?6:0):d===o?(s-r)/m+2:(r-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(u*100+.5),i[2]=~~(c*100+.5)),n&&i.length<4&&(i[3]=1),i},rc=function(e){var t=[],n=[],i=-1;return e.split(jn).forEach(function(r){var o=r.match(Hi)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},ql=function(e,t,n){var i="",r=(e+i).match(jn),o=t?"hsla(":"rgba(",s=0,l,u,c,d;if(!r)return e;if(r=r.map(function(h){return(h=ic(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(c=rc(e),l=n.c,l.join(i)!==c.c.join(i)))for(u=e.replace(jn,"1").split(Hi),d=u.length-1;s<d;s++)i+=u[s]+(~l.indexOf(s)?r.shift()||o+"0,0,0,0)":(c.length?c:r.length?r:n).shift());if(!u)for(u=e.split(jn),d=u.length-1;s<d;s++)i+=u[s]+r[s];return i+u[d]},jn=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Er)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),y_=/hsl[a]?\(/,sc=function(e){var t=e.join(" "),n;if(jn.lastIndex=0,jn.test(t))return n=y_.test(t),e[1]=ql(e[1],n),e[0]=ql(e[0],n,rc(e[1])),!0},Ur,Bt=function(){var a=Date.now,e=500,t=33,n=a(),i=n,r=1e3/240,o=r,s=[],l,u,c,d,h,m,g=function f(p){var _=a()-i,M=p===!0,x,b,y,A;if(_>e&&(n+=_-t),i+=_,y=i-n,x=y-o,(x>0||M)&&(A=++d.frame,h=y-d.time*1e3,d.time=y=y/1e3,o+=x+(x>=r?4:r-x),b=1),M||(l=u(f)),b)for(m=0;m<s.length;m++)s[m](y,h,A,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){zu&&(!Bo&&aa()&&(Jt=Bo=window,la=Jt.document||{},$t.gsap=Rt,(Jt.gsapVersions||(Jt.gsapVersions=[])).push(Rt.version),Uu(vs||Jt.GreenSockGlobals||!Jt.gsap&&Jt||{}),c=Jt.requestAnimationFrame,tc.forEach(nc)),l&&d.sleep(),u=c||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Ur=1,g(2))},sleep:function(){(c?Jt.cancelAnimationFrame:clearTimeout)(l),Ur=0,u=Nr},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){r=1e3/(p||240),o=d.time*1e3+r},add:function(p,_,M){var x=_?function(b,y,A,C){p(b,y,A,C),d.remove(x)}:p;return d.remove(p),s[M?"unshift":"push"](x),ir(),x},remove:function(p,_){~(_=s.indexOf(p))&&s.splice(_,1)&&m>=_&&m--},_listeners:s},d}(),ir=function(){return!Ur&&Bt.wake()},Ce={},M_=/^[\d.\-M][\d.\-,\s]/,b_=/["']/g,S_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,s,l,u;r<o;r++)l=n[r],s=r!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,s),t[i]=isNaN(u)?u.replace(b_,"").trim():+u,i=l.substr(s+1).trim();return t},w_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},T_=function(e){var t=(e+"").split("("),n=Ce[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[S_(t[1])]:w_(e).split(",").map(Gu)):Ce._CE&&M_.test(e)?Ce._CE("",e):n},oc=function(e){return function(t){return 1-e(1-t)}},ac=function a(e,t){for(var n=e._first,i;n;)n instanceof At?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},yi=function(e,t){return e&&(qe(e)?e:Ce[e]||T_(e))||t},Ti=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Lt(e,function(s){Ce[s]=$t[s]=r,Ce[o=s.toLowerCase()]=n;for(var l in r)Ce[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ce[s+"."+l]=r[l]}),r},lc=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},bo=function a(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Oo*(Math.asin(1/i)||0),s=function(c){return c===1?1:i*Math.pow(2,-10*c)*Qg((c-o)*r)+1},l=e==="out"?s:e==="in"?function(u){return 1-s(1-u)}:lc(s);return r=Oo/r,l.config=function(u,c){return a(e,u,c)},l},So=function a(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:lc(n);return i.config=function(r){return a(e,r)},i};Lt("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;Ti(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ce.Linear.easeNone=Ce.none=Ce.Linear.easeIn;Ti("Elastic",bo("in"),bo("out"),bo());(function(a,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?a*s*s:s<n?a*Math.pow(s-1.5/e,2)+.75:s<i?a*(s-=2.25/e)*s+.9375:a*Math.pow(s-2.625/e,2)+.984375};Ti("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Ti("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});Ti("Circ",function(a){return-(Du(1-a*a)-1)});Ti("Sine",function(a){return a===1?1:-Jg(a*Zg)+1});Ti("Back",So("in"),So("out"),So());Ce.SteppedEase=Ce.steps=$t.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-Oe;return function(s){return((i*$r(0,o,s)|0)+r)*n}}};er.ease=Ce["quad.out"];Lt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return ha+=a+","+a+"Params,"});var uc=function(e,t){this.id=Kg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Bu,this.set=t?t.getSetter:ga},rr=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,nr(this,+t.duration,1,1),this.data=t.data,et&&(this._ctx=et,et.data.push(this)),Ur||Bt.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,nr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ir(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Rs(this,n),!r._dp||r.parent||$u(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Oe||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Vu(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Wl(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Wl(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?tr(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Oe?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?bs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Oe?0:this._rts,this.totalTime($r(-Math.abs(this._delay),this._tDur,i),!0),Ds(this),o_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ir(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Oe&&(this._tTime-=Oe)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&mn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Pt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?bs(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=n_);var i=xt;return xt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),xt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,$l(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,$l(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Kt(this,n),Pt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Pt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Oe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Oe,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Oe)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=qe(n)?n:Hu,s=function(){var u=i.then;i.then=null,qe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),r(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){Tr(this)},a}();rn(rr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Oe,_prom:0,_ps:!1,_rts:1});var At=function(a){Lu(e,a);function e(n,i){var r;return n===void 0&&(n={}),r=a.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Pt(n.sortChildren),We&&mn(n.parent||We,Rn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Xu(Rn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return Cr(0,arguments,this),this},t.from=function(i,r,o){return Cr(1,arguments,this),this},t.fromTo=function(i,r,o,s){return Cr(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,Ar(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new rt(i,r,Kt(this,o),1),this},t.call=function(i,r,o){return mn(this,rt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,s,l,u,c){return o.duration=r,o.stagger=o.stagger||s,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new rt(i,o,Kt(this,l)),this},t.staggerFrom=function(i,r,o,s,l,u,c){return o.runBackwards=1,Ar(o).immediateRender=Pt(o.immediateRender),this.staggerTo(i,r,o,s,l,u,c)},t.staggerFromTo=function(i,r,o,s,l,u,c,d){return s.startAt=o,Ar(s).immediateRender=Pt(s.immediateRender),this.staggerTo(i,r,s,l,u,c,d)},t.render=function(i,r,o){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=i<=0?0:dt(i),d=this._zTime<0!=i<0&&(this._initted||!u),h,m,g,f,p,_,M,x,b,y,A,C;if(this!==We&&c>l&&i>=0&&(c=l),c!==this._tTime||o||d){if(s!==this._time&&u&&(c+=this._time-s,i+=this._time-s),h=c,b=this._start,x=this._ts,_=!x,d&&(u||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(h=dt(c%p),c===l?(f=this._repeat,h=u):(f=~~(c/p),f&&f===c/p&&(h=u,f--),h>u&&(h=u)),y=tr(this._tTime,p),!s&&this._tTime&&y!==f&&this._tTime-y*p-this._dur<=0&&(y=f),A&&f&1&&(h=u-h,C=1),f!==y&&!this._lock){var v=A&&y&1,w=v===(A&&f&1);if(f<y&&(v=!v),s=v?0:u,this._lock=1,this.render(s||(C?0:dt(f*p)),r,!u)._lock=0,this._tTime=c,!r&&this.parent&&nn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),s&&s!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,w&&(this._lock=2,s=v?u:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;ac(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=c_(this,dt(s),dt(h)),M&&(c-=h-(h=M._start))),this._tTime=c,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&h&&!r&&!f&&(nn(this,"onStart"),this._tTime!==c))return this;if(h>=s&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||h>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,r,o),h!==this._time||!this._ts&&!_){M=0,g&&(c+=this._zTime=-Oe);break}}m=g}else{m=this._last;for(var L=i<0?i:h;m;){if(g=m._prev,(m._act||L<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(L-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(L-m._start)*m._ts,r,o||xt&&(m._initted||m._startAt)),h!==this._time||!this._ts&&!_){M=0,g&&(c+=this._zTime=L?-Oe:Oe);break}}m=g}}if(M&&!r&&(this.pause(),M.render(h>=s?0:-Oe)._zTime=h>=s?1:-1,this._ts))return this._start=b,Ds(this),this.render(i,r,o);this._onUpdate&&!r&&nn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&s)&&(b===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Zn(this,1),!r&&!(i<0&&!s)&&(c||s||!l)&&(nn(this,c===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(zn(r)||(r=Kt(this,r,i)),!(i instanceof rr)){if(yt(i))return i.forEach(function(s){return o.add(s,r)}),this;if(ht(i))return this.addLabel(i,r);if(qe(i))i=rt.delayedCall(0,i);else return this}return this!==i?mn(this,i,r):this},t.getChildren=function(i,r,o,s){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=-en);for(var l=[],u=this._first;u;)u._start>=s&&(u instanceof rt?r&&l.push(u):(o&&l.push(u),i&&l.push.apply(l,u.getChildren(!0,r,o)))),u=u._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return ht(i)?this.removeLabel(i):qe(i)?this.killTweensOf(i):(Ls(this,i),i===this._recent&&(this._recent=this._last),xi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=dt(Bt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Kt(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var s=rt.delayedCall(0,r||Nr,o);return s.data="isPause",this._hasPause=1,mn(this,s,Kt(this,i))},t.removePause=function(i){var r=this._first;for(i=Kt(this,i);r;)r._start===i&&r.data==="isPause"&&Zn(r),r=r._next},t.killTweensOf=function(i,r,o){for(var s=this.getTweensOf(i,o),l=s.length;l--;)Hn!==s[l]&&s[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],s=tn(i),l=this._first,u=zn(r),c;l;)l instanceof rt?i_(l._targets,s)&&(u?(!Hn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(c=l.getTweensOf(s,r)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,s=Kt(o,i),l=r,u=l.startAt,c=l.onStart,d=l.onStartParams,h=l.immediateRender,m,g=rt.to(o,rn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(u&&"time"in u?u.time:o._time))/o.timeScale())||Oe,onStart:function(){if(o.pause(),!m){var p=r.duration||Math.abs((s-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==p&&nr(g,p,0,1).render(g._time,!0,!0),m=1}c&&c.apply(g,d||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,rn({startAt:{time:Kt(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Xl(this,Kt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Xl(this,Kt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Oe)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var s=this._first,l=this.labels,u;s;)s._start>=o&&(s._start+=i,s._end+=i),s=s._next;if(r)for(u in l)l[u]>=o&&(l[u]+=i);return xi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return a.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),xi(this)},t.totalDuration=function(i){var r=0,o=this,s=o._last,l=en,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;s;)u=s._prev,s._dirty&&s.totalDuration(),c=s._start,c>l&&o._sort&&s._ts&&!o._lock?(o._lock=1,mn(o,s,c-s._delay,1)._lock=0):l=c,c<0&&s._ts&&(r-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=u;nr(o,o===We&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(We._ts&&(Vu(We,bs(i,We)),ku=Bt.frame),Bt.frame>=Gl){Gl+=Wt.autoSleep||120;var r=We._first;if((!r||!r._ts)&&Wt.autoSleep&&Bt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Bt.sleep()}}},e}(rr);rn(At.prototype,{_lock:0,_hasPause:0,_forcing:0});var E_=function(e,t,n,i,r,o,s){var l=new Dt(this._pt,e,t,0,1,mc,null,r),u=0,c=0,d,h,m,g,f,p,_,M;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=zr(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),h=n.match(xo)||[];d=xo.exec(i);)g=d[0],f=i.substring(u,d.index),m?m=(m+1)%5:f.substr(-5)==="rgba("&&(m=1),g!==h[c++]&&(p=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:f||c===1?f:",",s:p,c:g.charAt(1)==="="?qi(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},u=xo.lastIndex);return l.c=u<i.length?i.substring(u,i.length):"",l.fp=s,(Fu.test(i)||_)&&(l.e=0),this._pt=l,l},fa=function(e,t,n,i,r,o,s,l,u,c){qe(i)&&(i=i(r||0,e,o));var d=e[t],h=n!=="get"?n:qe(d)?u?e[t.indexOf("set")||!qe(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,m=qe(d)?u?D_:fc:ma,g;if(ht(i)&&(~i.indexOf("random(")&&(i=zr(i)),i.charAt(1)==="="&&(g=qi(h,i)+(vt(h)||0),(g||g===0)&&(i=g))),!c||h!==i||qo)return!isNaN(h*i)&&i!==""?(g=new Dt(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?I_:pc,0,m),u&&(g.fp=u),s&&g.modifier(s,this,e),this._pt=g):(!d&&!(t in e)&&ua(t,i),E_.call(this,e,t,h,i,m,l||Wt.stringFilter,u))},A_=function(e,t,n,i,r){if(qe(e)&&(e=Pr(e,r,t,n,i)),!Mn(e)||e.style&&e.nodeType||yt(e)||Ru(e))return ht(e)?Pr(e,r,t,n,i):e;var o={},s;for(s in e)o[s]=Pr(e[s],r,t,n,i);return o},cc=function(e,t,n,i,r,o){var s,l,u,c;if(Ot[e]&&(s=new Ot[e]).init(r,s.rawVars?t[e]:A_(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Dt(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==Wi))for(u=n._ptLookup[n._targets.indexOf(r)],c=s._props.length;c--;)u[s._props[c]]=l;return s},Hn,qo,pa=function a(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,s=i.immediateRender,l=i.lazy,u=i.onUpdate,c=i.onUpdateParams,d=i.callbackScope,h=i.runBackwards,m=i.yoyoEase,g=i.keyframes,f=i.autoRevert,p=e._dur,_=e._startAt,M=e._targets,x=e.parent,b=x&&x.data==="nested"?x.vars.targets:M,y=e._overwrite==="auto"&&!sa,A=e.timeline,C,v,w,L,k,X,R,D,U,Y,q,B,J;if(A&&(!g||!r)&&(r="none"),e._ease=yi(r,er.ease),e._yEase=m?oc(yi(m===!0?r:m,er.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!A&&!!i.runBackwards,!A||g&&!i.stagger){if(D=M[0]?vi(M[0]).harness:0,B=D&&i[D.prop],C=Ms(i,ca),_&&(_._zTime<0&&_.progress(1),t<0&&h&&s&&!f?_.render(-1,!0):_.revert(h&&p?ms:t_),_._lazy=0),o){if(Zn(e._startAt=rt.set(M,rn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!_&&Pt(l),startAt:null,delay:0,onUpdate:u,onUpdateParams:c,callbackScope:d,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xt||!s&&!f)&&e._startAt.revert(ms),s&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&p&&!_){if(t&&(s=!1),w=rn({overwrite:!1,data:"isFromStart",lazy:s&&!_&&Pt(l),immediateRender:s,stagger:0,parent:x},C),B&&(w[D.prop]=B),Zn(e._startAt=rt.set(M,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xt?e._startAt.revert(ms):e._startAt.render(-1,!0)),e._zTime=t,!s)a(e._startAt,Oe,Oe);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Pt(l)||l&&!p,v=0;v<M.length;v++){if(k=M[v],R=k._gsap||da(M)[v]._gsap,e._ptLookup[v]=Y={},Vo[R.id]&&qn.length&&ys(),q=b===M?v:b.indexOf(k),D&&(U=new D).init(k,B||C,e,q,b)!==!1&&(e._pt=L=new Dt(e._pt,k,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(K){Y[K]=L}),U.priority&&(X=1)),!D||B)for(w in C)Ot[w]&&(U=cc(w,C,e,q,k,b))?U.priority&&(X=1):Y[w]=L=fa.call(e,k,w,"get",C[w],q,b,0,i.stringFilter);e._op&&e._op[v]&&e.kill(k,e._op[v]),y&&e._pt&&(Hn=e,We.killTweensOf(k,Y,e.globalTime(t)),J=!e.parent,Hn=0),e._pt&&l&&(Vo[R.id]=1)}X&&gc(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!J,g&&t<=0&&A.render(en,!0,!0)},C_=function(e,t,n,i,r,o,s){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,c,d,h;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return qo=1,e.vars[t]="+=0",pa(e,s),qo=0,1;l.push(u)}for(h=l.length;h--;)c=l[h],u=c._pt||c,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,c.e&&(c.e=je(n)+vt(c.e)),c.b&&(c.b=u.s+vt(c.b))},P_=function(e,t){var n=e[0]?vi(e[0]).harness:0,i=n&&n.aliases,r,o,s,l;if(!i)return t;r=wi({},t);for(o in i)if(o in r)for(l=i[o].split(","),s=l.length;s--;)r[l[s]]=r[o];return r},L_=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,s;if(yt(t))s=n[e]||(n[e]=[]),t.forEach(function(l,u){return s.push({t:u/(t.length-1)*100,v:l,e:r})});else for(o in t)s=n[o]||(n[o]=[]),o==="ease"||s.push({t:parseFloat(e),v:t[o],e:r})},Pr=function(e,t,n,i,r){return qe(e)?e.call(t,n,i,r):ht(e)&&~e.indexOf("random(")?zr(e):e},hc=ha+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",dc={};Lt(hc+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return dc[a]=1});var rt=function(a){Lu(e,a);function e(n,i,r,o){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=a.call(this,o?i:Ar(i))||this;var l=s.vars,u=l.duration,c=l.delay,d=l.immediateRender,h=l.stagger,m=l.overwrite,g=l.keyframes,f=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,M=i.parent||We,x=(yt(n)||Ru(n)?zn(n[0]):"length"in i)?[n]:tn(n),b,y,A,C,v,w,L,k;if(s._targets=x.length?da(x):xs("GSAP target "+n+" not found. https://greensock.com",!Wt.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,g||h||ds(u)||ds(c)){if(i=s.vars,b=s.timeline=new At({data:"nested",defaults:f||{},targets:M&&M.data==="nested"?M.vars.targets:x}),b.kill(),b.parent=b._dp=Rn(s),b._start=0,h||ds(u)||ds(c)){if(C=x.length,L=h&&Zu(h),Mn(h))for(v in h)~hc.indexOf(v)&&(k||(k={}),k[v]=h[v]);for(y=0;y<C;y++)A=Ms(i,dc),A.stagger=0,_&&(A.yoyoEase=_),k&&wi(A,k),w=x[y],A.duration=+Pr(u,Rn(s),y,w,x),A.delay=(+Pr(c,Rn(s),y,w,x)||0)-s._delay,!h&&C===1&&A.delay&&(s._delay=c=A.delay,s._start+=c,A.delay=0),b.to(w,A,L?L(y,w,x):0),b._ease=Ce.none;b.duration()?u=c=0:s.timeline=0}else if(g){Ar(rn(b.vars.defaults,{ease:"none"})),b._ease=yi(g.ease||i.ease||"none");var X=0,R,D,U;if(yt(g))g.forEach(function(Y){return b.to(x,Y,">")}),b.duration();else{A={};for(v in g)v==="ease"||v==="easeEach"||L_(v,g[v],A,g.easeEach);for(v in A)for(R=A[v].sort(function(Y,q){return Y.t-q.t}),X=0,y=0;y<R.length;y++)D=R[y],U={ease:D.e,duration:(D.t-(y?R[y-1].t:0))/100*u},U[v]=D.v,b.to(x,U,X),X+=U.duration;b.duration()<u&&b.to({},{duration:u-b.duration()})}}u||s.duration(u=b.duration())}else s.timeline=0;return m===!0&&!sa&&(Hn=Rn(s),We.killTweensOf(x),Hn=0),mn(M,Rn(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(d||!u&&!g&&s._start===dt(M._time)&&Pt(d)&&a_(Rn(s))&&M.data!=="nested")&&(s._tTime=-Oe,s.render(Math.max(0,-c)||0)),p&&Xu(Rn(s),p),s}var t=e.prototype;return t.render=function(i,r,o){var s=this._time,l=this._tDur,u=this._dur,c=i<0,d=i>l-Oe&&!c?l:i<Oe?0:i,h,m,g,f,p,_,M,x,b;if(!u)u_(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(h=d,x=this.timeline,this._repeat){if(f=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(f*100+i,r,o);if(h=dt(d%f),d===l?(g=this._repeat,h=u):(g=~~(d/f),g&&g===d/f&&(h=u,g--),h>u&&(h=u)),_=this._yoyo&&g&1,_&&(b=this._yEase,h=u-h),p=tr(this._tTime,f),h===s&&!o&&this._initted)return this._tTime=d,this;g!==p&&(x&&this._yEase&&ac(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(dt(f*g),!0).invalidate()._lock=0))}if(!this._initted){if(qu(this,c?i:h,o,r,d))return this._tTime=0,this;if(s!==this._time)return this;if(u!==this._dur)return this.render(i,r,o)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(b||this._ease)(h/u),this._from&&(this.ratio=M=1-M),h&&!s&&!r&&!g&&(nn(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;x&&x.render(i<0?i:!h&&_?-Oe:x._dur*x._ease(h/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(c&&Go(this,i,r,o),nn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&nn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Go(this,i,!0,!0),(i||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Zn(this,1),!r&&!(c&&!s)&&(d||s||_)&&(nn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,s){Ur||Bt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||pa(this,l),u=this._ease(l/this._dur),C_(this,i,r,o,s,u,l)?this.resetTo(i,r,o,s):(Rs(this,0),this.parent||Wu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Tr(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Hn&&Hn.vars.overwrite!==!0)._first||Tr(this),this.parent&&o!==this.timeline.totalDuration()&&nr(this,this._dur*this.timeline._tDur/o,0,1),this}var s=this._targets,l=i?tn(i):s,u=this._ptLookup,c=this._pt,d,h,m,g,f,p,_;if((!r||r==="all")&&s_(s,l))return r==="all"&&(this._pt=0),Tr(this);for(d=this._op=this._op||[],r!=="all"&&(ht(r)&&(f={},Lt(r,function(M){return f[M]=1}),r=f),r=P_(s,r)),_=s.length;_--;)if(~l.indexOf(s[_])){h=u[_],r==="all"?(d[_]=r,g=h,m={}):(m=d[_]=d[_]||{},g=r);for(f in g)p=h&&h[f],p&&((!("kill"in p.d)||p.d.kill(f)===!0)&&Ls(this,p,"_pt"),delete h[f]),m!=="all"&&(m[f]=1)}return this._initted&&!this._pt&&c&&Tr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Cr(1,arguments)},e.delayedCall=function(i,r,o,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:s})},e.fromTo=function(i,r,o){return Cr(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return We.killTweensOf(i,r,o)},e}(rr);rn(rt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Lt("staggerTo,staggerFrom,staggerFromTo",function(a){rt[a]=function(){var e=new At,t=Wo.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var ma=function(e,t,n){return e[t]=n},fc=function(e,t,n){return e[t](n)},D_=function(e,t,n,i){return e[t](i.fp,n)},R_=function(e,t,n){return e.setAttribute(t,n)},ga=function(e,t){return qe(e[t])?fc:oa(e[t])&&e.setAttribute?R_:ma},pc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},I_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},mc=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},_a=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},F_=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},N_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ls(this,t,"_pt"):t.dep||(n=1),t=i;return!n},z_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},gc=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},Dt=function(){function a(t,n,i,r,o,s,l,u,c){this.t=n,this.s=r,this.c=o,this.p=i,this.r=s||pc,this.d=l||this,this.set=u||ma,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=z_,this.m=n,this.mt=r,this.tween=i},a}();Lt(ha+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return ca[a]=1});$t.TweenMax=$t.TweenLite=rt;$t.TimelineLite=$t.TimelineMax=At;We=new At({sortChildren:!1,defaults:er,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Wt.stringFilter=sc;var sr=[],_s={},U_=[],jl=0,wo=function(e){return(_s[e]||U_).map(function(t){return t()})},jo=function(){var e=Date.now(),t=[];e-jl>2&&(wo("matchMediaInit"),sr.forEach(function(n){var i=n.queries,r=n.conditions,o,s,l,u;for(s in i)o=Jt.matchMedia(i[s]).matches,o&&(l=1),o!==r[s]&&(r[s]=o,u=1);u&&(n.revert(),l&&t.push(n))}),wo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),jl=e,wo("matchMedia"))},_c=function(){function a(t,n){this.selector=n&&$o(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=a.prototype;return e.add=function(n,i,r){qe(n)&&(r=i,i=n,n=qe);var o=this,s=function(){var u=et,c=o.selector,d;return u&&u!==o&&u.data.push(o),r&&(o.selector=$o(r)),et=o,d=i.apply(o,arguments),qe(d)&&o._r.push(d),et=u,o.selector=c,o.isReverted=!1,d};return o.last=s,n===qe?s(o):n?o[n]=s:s},e.ignore=function(n){var i=et;et=null,n(this),et=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof rt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,u){return u.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof rr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var s=sr.indexOf(this);~s&&sr.splice(s,1)}},e.revert=function(n){this.kill(n||{})},a}(),O_=function(){function a(t){this.contexts=[],this.scope=t}var e=a.prototype;return e.add=function(n,i,r){Mn(n)||(n={matches:n});var o=new _c(0,r||this.scope),s=o.conditions={},l,u,c;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(u in n)u==="all"?c=1:(l=Jt.matchMedia(n[u]),l&&(sr.indexOf(o)<0&&sr.push(o),(s[u]=l.matches)&&(c=1),l.addListener?l.addListener(jo):l.addEventListener("change",jo)));return c&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a}(),Ss={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return nc(i)})},timeline:function(e){return new At(e)},getTweensOf:function(e,t){return We.getTweensOf(e,t)},getProperty:function(e,t,n,i){ht(e)&&(e=tn(e)[0]);var r=vi(e||{}).get,o=n?Hu:Gu;return n==="native"&&(n=""),e&&(t?o((Ot[t]&&Ot[t].get||r)(e,t,n,i)):function(s,l,u){return o((Ot[s]&&Ot[s].get||r)(e,s,l,u))})},quickSetter:function(e,t,n){if(e=tn(e),e.length>1){var i=e.map(function(c){return Rt.quickSetter(c,t,n)}),r=i.length;return function(c){for(var d=r;d--;)i[d](c)}}e=e[0]||{};var o=Ot[t],s=vi(e),l=s.harness&&(s.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;Wi._pt=0,d.init(e,n?c+n:c,Wi,0,[e]),d.render(1,d),Wi._pt&&_a(1,Wi)}:s.set(e,l);return o?u:function(c){return u(e,l,n?c+n:c,s,1)}},quickTo:function(e,t,n){var i,r=Rt.to(e,wi((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,u,c){return r.resetTo(t,l,u,c)};return o.tween=r,o},isTweening:function(e){return We.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=yi(e.ease,er.ease)),Hl(er,e||{})},config:function(e){return Hl(Wt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Ot[s]&&!$t[s]&&xs(t+" effect requires "+s+" plugin.")}),yo[t]=function(s,l,u){return n(tn(s),rn(l||{},r),u)},o&&(At.prototype[t]=function(s,l,u){return this.add(yo[t](s,Mn(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){Ce[e]=yi(t)},parseEase:function(e,t){return arguments.length?yi(e,t):Ce},getById:function(e){return We.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new At(e),i,r;for(n.smoothChildTiming=Pt(e.smoothChildTiming),We.remove(n),n._dp=0,n._time=n._tTime=We._time,i=We._first;i;)r=i._next,(t||!(!i._dur&&i instanceof rt&&i.vars.onComplete===i._targets[0]))&&mn(n,i,i._start-i._delay),i=r;return mn(We,n,0),n},context:function(e,t){return e?new _c(e,t):et},matchMedia:function(e){return new O_(e)},matchMediaRefresh:function(){return sr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||jo()},addEventListener:function(e,t){var n=_s[e]||(_s[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=_s[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:__,wrapYoyo:v_,distribute:Zu,random:Ju,snap:Ku,normalize:g_,getUnit:vt,clamp:d_,splitColor:ic,toArray:tn,selector:$o,mapRange:ec,pipe:p_,unitize:m_,interpolate:x_,shuffle:Yu},install:Uu,effects:yo,ticker:Bt,updateRoot:At.updateRoot,plugins:Ot,globalTimeline:We,core:{PropTween:Dt,globals:Ou,Tween:rt,Timeline:At,Animation:rr,getCache:vi,_removeLinkedListItem:Ls,reverting:function(){return xt},context:function(e){return e&&et&&(et.data.push(e),e._ctx=et),et},suppressOverwrites:function(e){return sa=e}}};Lt("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Ss[a]=rt[a]});Bt.add(At.updateRoot);Wi=Ss.to({},{duration:0});var k_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},B_=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=k_(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},To=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(s){var l,u;if(ht(r)&&(l={},Lt(r,function(c){return l[c]=1}),r=l),t){l={};for(u in r)l[u]=t(r[u]);r=l}B_(s,r)}}}},Rt=Ss.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,s,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",s=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),s.op=o,s.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)xt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},To("roundProps",Xo),To("modifiers"),To("snap",Ku))||Ss;rt.version=At.version=Rt.version="3.11.5";zu=1;aa()&&ir();Ce.Power0;Ce.Power1;Ce.Power2;Ce.Power3;Ce.Power4;Ce.Linear;Ce.Quad;Ce.Cubic;Ce.Quart;Ce.Quint;Ce.Strong;Ce.Elastic;Ce.Back;Ce.SteppedEase;Ce.Bounce;Ce.Sine;Ce.Expo;Ce.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Yl,Wn,ji,va,mi,Zl,xa,V_=function(){return typeof window<"u"},Un={},hi=180/Math.PI,Yi=Math.PI/180,Bi=Math.atan2,Kl=1e8,ya=/([A-Z])/g,G_=/(left|right|width|margin|padding|x)/i,H_=/[\s,\(]\S/,gn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yo=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},W_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},X_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},vc=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},xc=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},q_=function(e,t,n){return e.style[t]=n},j_=function(e,t,n){return e.style.setProperty(t,n)},Y_=function(e,t,n){return e._gsap[t]=n},Z_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},K_=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},J_=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Xe="transform",hn=Xe+"Origin",Q_=function a(e,t){var n=this,i=this.target,r=i.style;if(e in Un){if(this.tfm=this.tfm||{},e!=="transform")e=gn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=In(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:In(i,e);else return gn.transform.split(",").forEach(function(o){return a.call(n,o,t)});if(this.props.indexOf(Xe)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(hn,t,"")),e=Xe}(r||t)&&this.props.push(e,t,r[e])},yc=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ev=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(ya,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=xa(),(!r||!r.isStart)&&!n[Xe]&&(yc(n),i.uncache=1)}},Mc=function(e,t){var n={target:e,props:[],revert:ev,save:Q_};return e._gsap||Rt.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},bc,Zo=function(e,t){var n=Wn.createElementNS?Wn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Wn.createElement(e);return n.style?n:Wn.createElement(e)},yn=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ya,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,or(t)||t,1)||""},Jl="O,Moz,ms,Ms,Webkit".split(","),or=function(e,t,n){var i=t||mi,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Jl[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Jl[o]:"")+e},Ko=function(){V_()&&window.document&&(Yl=window,Wn=Yl.document,ji=Wn.documentElement,mi=Zo("div")||{style:{}},Zo("div"),Xe=or(Xe),hn=Xe+"Origin",mi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bc=!!or("perspective"),xa=Rt.core.reverting,va=1)},Eo=function a(e){var t=Zo("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(ji.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ji.removeChild(t),this.style.cssText=r,o},Ql=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Sc=function(e){var t;try{t=e.getBBox()}catch{t=Eo.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Eo||(t=Eo.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Ql(e,["x","cx","x1"])||0,y:+Ql(e,["y","cy","y1"])||0,width:0,height:0}:t},wc=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Sc(e))},Or=function(e,t){if(t){var n=e.style;t in Un&&t!==hn&&(t=Xe),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(ya,"-$1").toLowerCase())):n.removeAttribute(t)}},$n=function(e,t,n,i,r,o){var s=new Dt(e._pt,t,n,0,1,o?xc:vc);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},eu={deg:1,rad:1,turn:1},tv={grid:1,flex:1},Kn=function a(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",s=mi.style,l=G_.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",m=i==="%",g,f,p,_;return i===o||!r||eu[i]||eu[o]?r:(o!=="px"&&!h&&(r=a(e,t,n,"px")),_=e.getCTM&&wc(e),(m||o==="%")&&(Un[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[c],je(m?r/g*d:r/100*g)):(s[l?"width":"height"]=d+(h?o:i),f=~t.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,_&&(f=(e.ownerSVGElement||{}).parentNode),(!f||f===Wn||!f.appendChild)&&(f=Wn.body),p=f._gsap,p&&m&&p.width&&l&&p.time===Bt.time&&!p.uncache?je(r/p.width*d):((m||o==="%")&&!tv[yn(f,"display")]&&(s.position=yn(e,"position")),f===e&&(s.position="static"),f.appendChild(mi),g=mi[c],f.removeChild(mi),s.position="absolute",l&&m&&(p=vi(f),p.time=Bt.time,p.width=f[c]),je(h?g*r/d:g&&r?d/g*r:0))))},In=function(e,t,n,i){var r;return va||Ko(),t in gn&&t!=="transform"&&(t=gn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Un[t]&&t!=="transform"?(r=Br(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ts(yn(e,hn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ws[t]&&ws[t](e,t,n)||yn(e,t)||Bu(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Kn(e,t,r,n)+n:r},nv=function(e,t,n,i){if(!n||n==="none"){var r=or(t,e,1),o=r&&yn(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=yn(e,"borderTopColor"))}var s=new Dt(this._pt,e.style,t,0,1,mc),l=0,u=0,c,d,h,m,g,f,p,_,M,x,b,y;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=yn(e,t)||i,e.style[t]=n),c=[n,i],sc(c),n=c[0],i=c[1],h=n.match(Hi)||[],y=i.match(Hi)||[],y.length){for(;d=Hi.exec(i);)p=d[0],M=i.substring(l,d.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(f=h[u++]||"")&&(m=parseFloat(f)||0,b=f.substr((m+"").length),p.charAt(1)==="="&&(p=qi(m,p)+b),_=parseFloat(p),x=p.substr((_+"").length),l=Hi.lastIndex-x.length,x||(x=x||Wt.units[t]||b,l===i.length&&(i+=x,s.e+=x)),b!==x&&(m=Kn(e,t,f,x)||0),s._pt={_next:s._pt,p:M||u===1?M:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=t==="display"&&i==="none"?xc:vc;return Fu.test(i)&&(s.e=0),this._pt=s,s},tu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},iv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=tu[n]||n,t[1]=tu[i]||i,t.join(" ")},rv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,s,l,u;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),u=r.length;--u>-1;)s=r[u],Un[s]&&(l=1,s=s==="transformOrigin"?hn:Xe),Or(n,s);l&&(Or(n,Xe),o&&(o.svg&&n.removeAttribute("transform"),Br(n,1),o.uncache=1,yc(i)))}},ws={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new Dt(e._pt,t,n,0,0,rv);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},kr=[1,0,0,1,0,0],Tc={},Ec=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},nu=function(e){var t=yn(e,Xe);return Ec(t)?kr:t.substr(7).match(Iu).map(je)},Ma=function(e,t){var n=e._gsap||vi(e),i=e.style,r=nu(e),o,s,l,u;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?kr:r):(r===kr&&!e.offsetParent&&e!==ji&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,s=e.nextElementSibling,ji.appendChild(e)),r=nu(e),l?i.display=l:Or(e,"display"),u&&(s?o.insertBefore(e,s):o?o.appendChild(e):ji.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Jo=function(e,t,n,i,r,o){var s=e._gsap,l=r||Ma(e,!0),u=s.xOrigin||0,c=s.yOrigin||0,d=s.xOffset||0,h=s.yOffset||0,m=l[0],g=l[1],f=l[2],p=l[3],_=l[4],M=l[5],x=t.split(" "),b=parseFloat(x[0])||0,y=parseFloat(x[1])||0,A,C,v,w;n?l!==kr&&(C=m*p-g*f)&&(v=b*(p/C)+y*(-f/C)+(f*M-p*_)/C,w=b*(-g/C)+y*(m/C)-(m*M-g*_)/C,b=v,y=w):(A=Sc(e),b=A.x+(~x[0].indexOf("%")?b/100*A.width:b),y=A.y+(~(x[1]||x[0]).indexOf("%")?y/100*A.height:y)),i||i!==!1&&s.smooth?(_=b-u,M=y-c,s.xOffset=d+(_*m+M*f)-_,s.yOffset=h+(_*g+M*p)-M):s.xOffset=s.yOffset=0,s.xOrigin=b,s.yOrigin=y,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[hn]="0px 0px",o&&($n(o,s,"xOrigin",u,b),$n(o,s,"yOrigin",c,y),$n(o,s,"xOffset",d,s.xOffset),$n(o,s,"yOffset",h,s.yOffset)),e.setAttribute("data-svg-origin",b+" "+y)},Br=function(e,t){var n=e._gsap||new uc(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",s="deg",l=getComputedStyle(e),u=yn(e,hn)||"0",c,d,h,m,g,f,p,_,M,x,b,y,A,C,v,w,L,k,X,R,D,U,Y,q,B,J,K,ue,N,j,te,ne;return c=d=h=f=p=_=M=x=b=0,m=g=1,n.svg=!!(e.getCTM&&wc(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Xe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xe]!=="none"?l[Xe]:"")),i.scale=i.rotate=i.translate="none"),C=Ma(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),u=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),Jo(e,q||u,!!q||n.originIsAbsolute,n.smooth!==!1,C)),y=n.xOrigin||0,A=n.yOrigin||0,C!==kr&&(k=C[0],X=C[1],R=C[2],D=C[3],c=U=C[4],d=Y=C[5],C.length===6?(m=Math.sqrt(k*k+X*X),g=Math.sqrt(D*D+R*R),f=k||X?Bi(X,k)*hi:0,M=R||D?Bi(R,D)*hi+f:0,M&&(g*=Math.abs(Math.cos(M*Yi))),n.svg&&(c-=y-(y*k+A*R),d-=A-(y*X+A*D))):(ne=C[6],j=C[7],K=C[8],ue=C[9],N=C[10],te=C[11],c=C[12],d=C[13],h=C[14],v=Bi(ne,N),p=v*hi,v&&(w=Math.cos(-v),L=Math.sin(-v),q=U*w+K*L,B=Y*w+ue*L,J=ne*w+N*L,K=U*-L+K*w,ue=Y*-L+ue*w,N=ne*-L+N*w,te=j*-L+te*w,U=q,Y=B,ne=J),v=Bi(-R,N),_=v*hi,v&&(w=Math.cos(-v),L=Math.sin(-v),q=k*w-K*L,B=X*w-ue*L,J=R*w-N*L,te=D*L+te*w,k=q,X=B,R=J),v=Bi(X,k),f=v*hi,v&&(w=Math.cos(v),L=Math.sin(v),q=k*w+X*L,B=U*w+Y*L,X=X*w-k*L,Y=Y*w-U*L,k=q,U=B),p&&Math.abs(p)+Math.abs(f)>359.9&&(p=f=0,_=180-_),m=je(Math.sqrt(k*k+X*X+R*R)),g=je(Math.sqrt(Y*Y+ne*ne)),v=Bi(U,Y),M=Math.abs(v)>2e-4?v*hi:0,b=te?1/(te<0?-te:te):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ec(yn(e,Xe)),q&&e.setAttribute("transform",q))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(m*=-1,M+=f<=0?180:-180,f+=f<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=c-((n.xPercent=c&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=je(m),n.scaleY=je(g),n.rotation=je(f)+s,n.rotationX=je(p)+s,n.rotationY=je(_)+s,n.skewX=M+s,n.skewY=x+s,n.transformPerspective=b+o,(n.zOrigin=parseFloat(u.split(" ")[2])||0)&&(i[hn]=Ts(u)),n.xOffset=n.yOffset=0,n.force3D=Wt.force3D,n.renderTransform=n.svg?ov:bc?Ac:sv,n.uncache=0,n},Ts=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ao=function(e,t,n){var i=vt(t);return je(parseFloat(t)+parseFloat(Kn(e,"x",n+"px",i)))+i},sv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ac(e,t)},ai="0deg",_r="0px",li=") ",Ac=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,s=n.y,l=n.z,u=n.rotation,c=n.rotationY,d=n.rotationX,h=n.skewX,m=n.skewY,g=n.scaleX,f=n.scaleY,p=n.transformPerspective,_=n.force3D,M=n.target,x=n.zOrigin,b="",y=_==="auto"&&e&&e!==1||_===!0;if(x&&(d!==ai||c!==ai)){var A=parseFloat(c)*Yi,C=Math.sin(A),v=Math.cos(A),w;A=parseFloat(d)*Yi,w=Math.cos(A),o=Ao(M,o,C*w*-x),s=Ao(M,s,-Math.sin(A)*-x),l=Ao(M,l,v*w*-x+x)}p!==_r&&(b+="perspective("+p+li),(i||r)&&(b+="translate("+i+"%, "+r+"%) "),(y||o!==_r||s!==_r||l!==_r)&&(b+=l!==_r||y?"translate3d("+o+", "+s+", "+l+") ":"translate("+o+", "+s+li),u!==ai&&(b+="rotate("+u+li),c!==ai&&(b+="rotateY("+c+li),d!==ai&&(b+="rotateX("+d+li),(h!==ai||m!==ai)&&(b+="skew("+h+", "+m+li),(g!==1||f!==1)&&(b+="scale("+g+", "+f+li),M.style[Xe]=b||"translate(0, 0)"},ov=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,s=n.y,l=n.rotation,u=n.skewX,c=n.skewY,d=n.scaleX,h=n.scaleY,m=n.target,g=n.xOrigin,f=n.yOrigin,p=n.xOffset,_=n.yOffset,M=n.forceCSS,x=parseFloat(o),b=parseFloat(s),y,A,C,v,w;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Yi,u*=Yi,y=Math.cos(l)*d,A=Math.sin(l)*d,C=Math.sin(l-u)*-h,v=Math.cos(l-u)*h,u&&(c*=Yi,w=Math.tan(u-c),w=Math.sqrt(1+w*w),C*=w,v*=w,c&&(w=Math.tan(c),w=Math.sqrt(1+w*w),y*=w,A*=w)),y=je(y),A=je(A),C=je(C),v=je(v)):(y=d,v=h,A=C=0),(x&&!~(o+"").indexOf("px")||b&&!~(s+"").indexOf("px"))&&(x=Kn(m,"x",o,"px"),b=Kn(m,"y",s,"px")),(g||f||p||_)&&(x=je(x+g-(g*y+f*C)+p),b=je(b+f-(g*A+f*v)+_)),(i||r)&&(w=m.getBBox(),x=je(x+i/100*w.width),b=je(b+r/100*w.height)),w="matrix("+y+","+A+","+C+","+v+","+x+","+b+")",m.setAttribute("transform",w),M&&(m.style[Xe]=w)},av=function(e,t,n,i,r){var o=360,s=ht(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?hi:1),u=l-i,c=i+u+"deg",d,h;return s&&(d=r.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*Kl)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*Kl)%o-~~(u/o)*o)),e._pt=h=new Dt(e._pt,t,n,i,u,W_),h.e=c,h.u="deg",e._props.push(n),h},iu=function(e,t){for(var n in t)e[n]=t[n];return e},lv=function(e,t,n){var i=iu({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,s,l,u,c,d,h,m,g;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),o[Xe]=t,s=Br(n,1),Or(n,Xe),n.setAttribute("transform",u)):(u=getComputedStyle(n)[Xe],o[Xe]=t,s=Br(n,1),o[Xe]=u);for(l in Un)u=i[l],c=s[l],u!==c&&r.indexOf(l)<0&&(m=vt(u),g=vt(c),d=m!==g?Kn(n,l,u,g):parseFloat(u),h=parseFloat(c),e._pt=new Dt(e._pt,s,l,d,h-d,Yo),e._pt.u=g||0,e._props.push(l));iu(s,i)};Lt("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?a+s:"border"+s+a});ws[e>1?"border"+a:a]=function(s,l,u,c,d){var h,m;if(arguments.length<4)return h=o.map(function(g){return In(s,g,u)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(c+"").split(" "),m={},o.forEach(function(g,f){return m[g]=h[f]=h[f]||h[(f-1)/2|0]}),s.init(l,m,d)}});var Cc={name:"css",register:Ko,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,s=e.style,l=n.vars.startAt,u,c,d,h,m,g,f,p,_,M,x,b,y,A,C,v;va||Ko(),this.styles=this.styles||Mc(e),v=this.styles.props,this.tween=n;for(f in t)if(f!=="autoRound"&&(c=t[f],!(Ot[f]&&cc(f,t,n,i,e,r)))){if(m=typeof c,g=ws[f],m==="function"&&(c=c.call(n,i,e,r),m=typeof c),m==="string"&&~c.indexOf("random(")&&(c=zr(c)),g)g(this,e,f,c,n)&&(C=1);else if(f.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(f)+"").trim(),c+="",jn.lastIndex=0,jn.test(u)||(p=vt(u),_=vt(c)),_?p!==_&&(u=Kn(e,f,u,_)+_):p&&(c+=p),this.add(s,"setProperty",u,c,i,r,0,0,f),o.push(f),v.push(f,0,s[f]);else if(m!=="undefined"){if(l&&f in l?(u=typeof l[f]=="function"?l[f].call(n,i,e,r):l[f],ht(u)&&~u.indexOf("random(")&&(u=zr(u)),vt(u+"")||(u+=Wt.units[f]||vt(In(e,f))||""),(u+"").charAt(1)==="="&&(u=In(e,f))):u=In(e,f),h=parseFloat(u),M=m==="string"&&c.charAt(1)==="="&&c.substr(0,2),M&&(c=c.substr(2)),d=parseFloat(c),f in gn&&(f==="autoAlpha"&&(h===1&&In(e,"visibility")==="hidden"&&d&&(h=0),v.push("visibility",0,s.visibility),$n(this,s,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),f!=="scale"&&f!=="transform"&&(f=gn[f],~f.indexOf(",")&&(f=f.split(",")[0]))),x=f in Un,x){if(this.styles.save(f),b||(y=e._gsap,y.renderTransform&&!t.parseTransform||Br(e,t.parseTransform),A=t.smoothOrigin!==!1&&y.smooth,b=this._pt=new Dt(this._pt,s,Xe,0,1,y.renderTransform,y,0,-1),b.dep=1),f==="scale")this._pt=new Dt(this._pt,y,"scaleY",y.scaleY,(M?qi(y.scaleY,M+d):d)-y.scaleY||0,Yo),this._pt.u=0,o.push("scaleY",f),f+="X";else if(f==="transformOrigin"){v.push(hn,0,s[hn]),c=iv(c),y.svg?Jo(e,c,0,A,0,this):(_=parseFloat(c.split(" ")[2])||0,_!==y.zOrigin&&$n(this,y,"zOrigin",y.zOrigin,_),$n(this,s,f,Ts(u),Ts(c)));continue}else if(f==="svgOrigin"){Jo(e,c,1,A,0,this);continue}else if(f in Tc){av(this,y,f,h,M?qi(h,M+c):c);continue}else if(f==="smoothOrigin"){$n(this,y,"smooth",y.smooth,c);continue}else if(f==="force3D"){y[f]=c;continue}else if(f==="transform"){lv(this,c,e);continue}}else f in s||(f=or(f)||f);if(x||(d||d===0)&&(h||h===0)&&!H_.test(c)&&f in s)p=(u+"").substr((h+"").length),d||(d=0),_=vt(c)||(f in Wt.units?Wt.units[f]:p),p!==_&&(h=Kn(e,f,u,_)),this._pt=new Dt(this._pt,x?y:s,f,h,(M?qi(h,M+d):d)-h,!x&&(_==="px"||f==="zIndex")&&t.autoRound!==!1?X_:Yo),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=u,this._pt.r=$_);else if(f in s)nv.call(this,e,f,u,M?M+c:c);else if(f in e)this.add(e,f,u||e[f],M?M+c:c,i,r);else if(f!=="parseTransform"){ua(f,c);continue}x||(f in s?v.push(f,0,s[f]):v.push(f,1,u||e[f])),o.push(f)}}C&&gc(this)},render:function(e,t){if(t.tween._time||!xa())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:In,aliases:gn,getSetter:function(e,t,n){var i=gn[t];return i&&i.indexOf(",")<0&&(t=i),t in Un&&t!==hn&&(e._gsap.x||In(e,"x"))?n&&Zl===n?t==="scale"?Z_:Y_:(Zl=n||{})&&(t==="scale"?K_:J_):e.style&&!oa(e.style[t])?q_:~t.indexOf("-")?j_:ga(e,t)},core:{_removeProperty:Or,_getMatrix:Ma}};Rt.utils.checkPrefix=or;Rt.core.getStyleSaver=Mc;(function(a,e,t,n){var i=Lt(a+","+e+","+t,function(r){Un[r]=1});Lt(e,function(r){Wt.units[r]="deg",Tc[r]=1}),gn[i[13]]=a+","+e,Lt(n,function(r){var o=r.split(":");gn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Lt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){Wt.units[a]="px"});Rt.registerPlugin(Cc);var He=Rt.registerPlugin(Cc)||Rt;He.core.Tween;let uv=class{constructor(e,t){this.element=e,this.scene=t,this.offset=new Z(0,0),this.sizes=new Z(0,0),this.next=this.element.parentElement.querySelector(".next"),this.prev=this.element.parentElement.querySelector(".prev"),this.images=[bn,Sn,dn,Xt,On],this.imgsLoaded=[],this.currentSlide=0,this.nextSlide=1,this.isRunning=!1,this.createMesh(),this.clickToElement()}clickToElement(){this.next.addEventListener("click",()=>{if(this.isRunning)return;this.isRunning=!0;let e=this.imgsLoaded.length,t=this.imgsLoaded[(this.currentSlide+1)%e];this.uniforms.uTexture2.value=t,He.timeline().to(this.uniforms.uProgress,{value:.65,duration:1.5,onComplete:()=>{this.currentSlide=(this.currentSlide+1)%e,this.uniforms.uTexture1.value=t,this.uniforms.uProgress.value=0,this.isRunning=!1}})}),this.prev.addEventListener("click",()=>{if(this.isRunning)return;this.isRunning=!0;let e=this.imgsLoaded.length;const t=this.currentSlide===0?e-1:this.currentSlide-1;let n=this.imgsLoaded[t];this.uniforms.uTexture2.value=n,He.timeline().to(this.uniforms.uProgress,{value:.65,duration:1.5,onComplete:()=>{this.currentSlide=t,this.uniforms.uTexture1.value=n,this.uniforms.uProgress.value=0,this.isRunning=!1}})})}getDimensions(){const{width:e,height:t,top:n,left:i}=this.element.getBoundingClientRect();this.sizes.set(e,t),this.offset.set(i-window.innerWidth/2+e/2,-n+window.innerHeight/2-t/2)}createMesh(){const e=new Et(1,1,10,10);this.images.forEach(t=>{const n=new ze().load(t);n.minFilter=Se,this.imgsLoaded.push(n)}),this.uniforms={uTexture1:{value:this.imgsLoaded[this.currentSlide]},uTexture2:{value:this.imgsLoaded[this.nextSlide]},uDisplacment:{value:this.imageTexture3},uOffset:{value:new Z(0,0)},uAlpha:{value:1},u_mouse:{type:"v2",value:new Z},uTime:{type:"f",value:0},uProgress:{value:0},iResolution:{type:"v2",value:new Z(602,480)}},this.material=new tt({uniforms:this.uniforms,vertexShader:jg,fragmentShader:Yg,transparent:!0,side:Ye}),this.mesh=new Ze(e,this.material),this.scene.add(this.mesh)}render(e=0,t,n){this.getDimensions(),this.mesh.position.set(this.offset.x,this.offset.y,1),this.mesh.scale.set(this.sizes.x,this.sizes.y,1),this.uniforms.uOffset.value.set(this.offset.x*.5,-e*3e-4),this.uniforms.uTime.value+=.03}};var cv=`uniform float uTime;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;

void main() {\r
    vPosition = position;\r
    vNormal = normal;\r
    vUv = uv;

    vec3 newPosition = vec3(position.x, position.y, position.z);\r
    \r

    
    vec4 modelViewPosition = modelViewMatrix * vec4(newPosition, 1.0 );\r
    vec4 projectedPosition = projectionMatrix * modelViewPosition;\r
	gl_Position = projectedPosition;\r
}`,hv=`uniform sampler2D uTexture1; \r
uniform sampler2D uTexture2; \r
uniform sampler2D uDisplacment; \r

uniform float uTime;\r
uniform float uProgress;\r
uniform vec2 iResolution;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;\r

void main() {\r
	vec2 uv = vUv;

	float k = 0.2;\r
	\r
		
	vec4 displacment = texture2D(uDisplacment, vUv);\r
	vec4 texture1 = texture2D( uTexture1, vec2(vUv.x , vUv.y + displacment.y * k * uProgress));\r
	vec4 texture2 = texture2D( uTexture2, vec2(vUv.x , vUv.y + ( displacment.y * k * (1. - uProgress)) ));\r
	gl_FragColor =  mix(texture1, texture2, uProgress); \r

}`;const dv="/shadertest/assets/noise8-9f388a65.jpg",vr=(a,e,t)=>a*(1-t)+e*t;let fv=class{constructor(e,t){this.element=e,this.scene=t,this.offset=new Z(0,0),this.sizes=new Z(0,0),this.next=this.element.parentElement.querySelector(".next"),this.prev=this.element.parentElement.querySelector(".prev"),this.images=[bn,Sn,dn,Xt,On],this.imgsLoaded=[],this.currentSlide=0,this.createMesh(),this.clickToElement()}clickToElement(){this.next.addEventListener("click",()=>{if(this.isRunning)return;this.isRunning=!0;let e=this.imgsLoaded.length,t=this.imgsLoaded[(this.currentSlide+1)%e];this.uniforms.uTexture2.value=t,He.timeline().to(this.uniforms.uProgress,{value:1,onComplete:()=>{this.currentSlide=(this.currentSlide+1)%e,this.uniforms.uTexture1.value=t,this.uniforms.uProgress.value=0,this.isRunning=!1}})}),this.prev.addEventListener("click",()=>{if(this.isRunning)return;this.isRunning=!0;let e=this.imgsLoaded.length;const t=this.currentSlide===0?e-1:this.currentSlide-1;let n=this.imgsLoaded[t];this.uniforms.uTexture2.value=n,He.timeline().to(this.uniforms.uProgress,{value:1,onComplete:()=>{this.currentSlide=t,this.uniforms.uTexture1.value=n,this.uniforms.uProgress.value=0,this.isRunning=!1}})})}getDimensions(){const{width:e,height:t,top:n,left:i}=this.element.getBoundingClientRect();this.sizes.set(e,t),this.offset.set(i-window.innerWidth/2+e/2,-n+window.innerHeight/2-t/2)}createMesh(){const e=new Et(1,1,10,10);this.images.forEach(t=>{const n=new ze().load(t);n.minFilter=Se,this.imgsLoaded.push(n)}),this.displacmentImg=new ze().load(dv),this.displacmentImg.minFilter=Se,this.uniforms={uTexture1:{value:this.imgsLoaded[this.currentSlide]},uTexture2:{value:this.imgsLoaded[this.nextSlide]},uDisplacment:{value:this.displacmentImg},uOffset:{value:new Z(0,0)},uAlpha:{value:1},u_mouse:{type:"v2",value:new Z},uTime:{type:"f",value:0},uProgress:{value:0},iResolution:{type:"v2",value:new Z(602,480)}},this.material=new tt({uniforms:this.uniforms,vertexShader:cv,fragmentShader:hv,transparent:!0,side:Ye}),this.mesh=new Ze(e,this.material),this.scene.add(this.mesh)}render(e=0,t,n){if(this.getDimensions(),this.mesh.position.set(this.offset.x,this.offset.y,0),this.mesh.scale.set(this.sizes.x,this.sizes.y,1),this.uniforms.uOffset.value.set(this.offset.x*.5,-e*3e-4),this.mesh.uuid===(n==null?void 0:n.uuid)){this.uniforms.u_mouse.value.x=vr(0,t.x,.6),this.uniforms.u_mouse.value.y=vr(0,t.y,.6),this.uniforms.uTime.value+=.05;return}this.uniforms.u_mouse.value.x=vr(this.uniforms.u_mouse.value.x,0,.02),this.uniforms.u_mouse.value.y=vr(this.uniforms.u_mouse.value.y,0,.02),this.uniforms.uTime.value=vr(this.uniforms.uTime.value,0,.02)}};var pv=`uniform float uTime;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;

void main() {\r
    vPosition = position;\r
    vNormal = normal;\r
    vUv = uv;

    vec3 newPosition = vec3(position.x, position.y, position.z);\r
    \r

    
    vec4 modelViewPosition = modelViewMatrix * vec4(newPosition, 1.0 );\r
    vec4 projectedPosition = projectionMatrix * modelViewPosition;\r
	gl_Position = projectedPosition;\r
}`,mv=`uniform sampler2D uTexture1; \r
uniform sampler2D uTexture2; 

uniform float uProgress;\r
uniform vec2 iResolution;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;\r

vec4 columnDraw (float start, float end, vec2 uv, float time){\r
	return vec4((1. - step(time, uv.y)) * smoothstep (start, start, uv.x)) * (vec4((1. - smoothstep(end, end, uv.x))));\r
}

void main() {\r
	vec2 uv = vUv;

	float time = uProgress;\r
	float ease = 1. ;

	vec4 texture1 = texture2D( uTexture1, vec2(vUv.x , vUv.y));\r
	vec4 texture2 = texture2D( uTexture2, vec2(vUv.x , vUv.y));

	vec4 lines = vec4( vec3( step(0.986, fract(uv.x * 10.)) ), 1.0);

	vec4 column = columnDraw(0.0, 0.1, uv, time );\r
	

	if (time * ease > 0.1){\r
		column = column + columnDraw(0.1, 0.2, uv, time * ease - 0.1);\r
	}\r
	if (time * ease > 0.2){\r
		column = column + columnDraw(0.2, 0.3, uv, time * ease  - 0.2);\r
	}\r
	if (time * ease > 0.3){\r
		column = column + columnDraw(0.3, 0.4, uv, time * ease  - 0.3);\r
	}\r
	if (time * ease > 0.4){\r
		column = column + columnDraw(0.4, 0.5, uv, time * ease  - 0.4);\r
	}\r
	if (time * ease > 0.5){\r
		column = column + columnDraw(0.5, 0.6, uv, time * ease  - 0.5);\r
	}\r
	if (time * ease > 0.6){\r
		column = column + columnDraw(0.6, 0.7, uv, time * ease  - 0.6);\r
	}\r
	if (time * ease > 0.7){\r
		column = column + columnDraw(0.7, 0.8, uv, time * ease  - 0.7);\r
	}\r
	if (time * ease > 0.8){\r
		column = column + columnDraw(0.8, 0.9, uv, time * ease  - 0.8);\r
	}\r
	if (time * ease > 0.9){\r
		column = column + columnDraw(0.9, 1.0, uv, time * ease  - 0.9);\r
	}

	gl_FragColor = mix(texture1, texture2, column) + lines*0.2; 

	
}`;const Is="/shadertest/assets/noise3-0fbba57c.jpg",xr=(a,e,t)=>a*(1-t)+e*t;let gv=class{constructor(e,t){this.element=e,this.scene=t,this.offset=new Z(0,0),this.sizes=new Z(0,0),this.next=this.element.parentElement.querySelector(".next"),this.prev=this.element.parentElement.querySelector(".prev"),this.images=[bn,Sn,dn,Xt,On],this.imgsLoaded=[],this.currentSlide=0,this.nextSlide=1,this.isRunning=!1,this.tl=He.timeline(),this.createMesh(),this.clickToElement()}clickToElement(){this.next.addEventListener("click",()=>{if(this.isRunning)return;this.isRunning=!0;let e=this.imgsLoaded.length,t=this.imgsLoaded[(this.currentSlide+1)%e];this.uniforms.uTexture2.value=t,He.timeline().to(this.uniforms.uProgress,{value:2,duration:3,onComplete:()=>{this.currentSlide=(this.currentSlide+1)%e,this.uniforms.uTexture1.value=t,this.uniforms.uProgress.value=0,this.isRunning=!1}})}),this.prev.addEventListener("click",()=>{if(this.isRunning)return;this.isRunning=!0;let e=this.imgsLoaded.length;const t=this.currentSlide===0?e-1:this.currentSlide-1;let n=this.imgsLoaded[t];this.uniforms.uTexture2.value=n,He.timeline().to(this.uniforms.uProgress,{value:2,duration:3,onComplete:()=>{this.currentSlide=t,this.uniforms.uTexture1.value=n,this.uniforms.uProgress.value=0,this.isRunning=!1}})})}getDimensions(){const{width:e,height:t,top:n,left:i}=this.element.getBoundingClientRect();this.sizes.set(e,t),this.offset.set(i-window.innerWidth/2+e/2,-n+window.innerHeight/2-t/2)}createMesh(){const e=new Et(1,1,10,10);this.images.forEach(t=>{const n=new ze().load(t);n.minFilter=Se,this.imgsLoaded.push(n)}),this.displacmentImg=new ze().load(Is),this.displacmentImg.minFilter=Se,this.uniforms={uTexture1:{value:this.imgsLoaded[this.currentSlide]},uTexture2:{value:this.imgsLoaded[this.nextSlide]},uDisplacment:{value:this.displacmentImg},uOffset:{value:new Z(0,0)},uAlpha:{value:1},u_mouse:{type:"v2",value:new Z},uTime:{type:"f",value:0},uProgress:{value:0},iResolution:{type:"v2",value:new Z(602,480)}},this.material=new tt({uniforms:this.uniforms,vertexShader:pv,fragmentShader:mv,transparent:!0,side:Ye}),this.mesh=new Ze(e,this.material),this.scene.add(this.mesh)}render(e=0,t,n){if(this.getDimensions(),this.mesh.position.set(this.offset.x,this.offset.y,0),this.mesh.scale.set(this.sizes.x,this.sizes.y,1),this.uniforms.uOffset.value.set(this.offset.x*.5,-e*3e-4),this.mesh.uuid===(n==null?void 0:n.uuid)){this.uniforms.u_mouse.value.x=xr(0,t.x,.6),this.uniforms.u_mouse.value.y=xr(0,t.y,.6),this.uniforms.uTime.value+=.05;return}this.uniforms.u_mouse.value.x=xr(this.uniforms.u_mouse.value.x,0,.02),this.uniforms.u_mouse.value.y=xr(this.uniforms.u_mouse.value.y,0,.02),this.uniforms.uTime.value=xr(this.uniforms.uTime.value,0,.02)}};var _v=`uniform float uTime;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;

void main() {\r
    vPosition = position;\r
    vNormal = normal;\r
    vUv = uv;

    vec3 newPosition = vec3(position.x, position.y, position.z);\r
    \r

    
    vec4 modelViewPosition = modelViewMatrix * vec4(newPosition, 1.0 );\r
    vec4 projectedPosition = projectionMatrix * modelViewPosition;\r
	gl_Position = projectedPosition;\r
}`,vv=`uniform sampler2D uTexture1; \r
uniform sampler2D uTexture2; \r
uniform sampler2D uDisplacment; \r

uniform float uTime;\r
uniform float uProgress;\r
uniform float uAmplitude;\r
uniform vec2 iResolution;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;

vec2 columnDraw (vec2 uv){\r
	return vec2( uv.x,  uv.y * smoothstep(0., 1., uv.y) );\r
}\r

void main() {\r
	vec2 uv = vUv;\r
	\r
	float time = uProgress;\r
	float amplitude = uAmplitude ;

	vec4 texture1 = texture2D( uTexture1, vec2(vUv.x * (1. - sin(vUv.y * amplitude) / ((1. + vUv.x) * 10.)), vUv.y - uProgress ));\r
	vec4 texture2 = texture2D( uTexture2, vec2(vUv.x * (1. - sin(vUv.y * amplitude) / ((1. + vUv.x) * 10.)), vUv.y - uProgress + 1. ));

	float bonds1 = step(0.0, (uv.y - uProgress)) * step(0.0, 1. - (uv.y - uProgress));\r
	float bonds2 = step(1.0, 1. - (uv.y - uProgress));

	gl_FragColor = texture1 * bonds1 + texture2 * bonds2  ;\r
}`;const yr=(a,e,t)=>a*(1-t)+e*t;let xv=class{constructor(e,t){this.element=e,this.scene=t,this.offset=new Z(0,0),this.sizes=new Z(0,0),this.next=this.element.parentElement.querySelector(".next"),this.prev=this.element.parentElement.querySelector(".prev"),this.images=[bn,Sn,dn,Xt,On],this.imgsLoaded=[],this.currentSlide=0,this.nextSlide=1,this.isRunning=!1,this.createMesh(),this.clickToElement()}clickToElement(){this.next.addEventListener("click",()=>{if(this.isRunning)return;this.isRunning=!0;let e=this.imgsLoaded.length,t=this.imgsLoaded[(this.currentSlide+1)%e];this.uniforms.uTexture2.value=t,He.timeline().to(this.uniforms.uAmplitude,{value:10}).to(this.uniforms.uProgress,{value:1,duration:1,ease:"power2.out"}).to(this.uniforms.uAmplitude,{value:0,duration:1,delay:.2,ease:"power3.out",onComplete:()=>{this.currentSlide=(this.currentSlide+1)%e,this.uniforms.uTexture1.value=t,this.uniforms.uProgress.value=0,this.isRunning=!1}})}),this.prev.addEventListener("click",()=>{if(this.isRunning)return;this.isRunning=!0;let e=this.imgsLoaded.length;const t=this.currentSlide===0?e-1:this.currentSlide-1;let n=this.imgsLoaded[t];this.uniforms.uTexture2.value=n,He.timeline().to(this.uniforms.uAmplitude,{value:10}).to(this.uniforms.uProgress,{value:1,duration:1,ease:"power2.out"}).to(this.uniforms.uAmplitude,{value:0,duration:1,delay:.2,ease:"power3.out",onComplete:()=>{this.currentSlide=t,this.uniforms.uTexture1.value=n,this.uniforms.uProgress.value=0,this.isRunning=!1}})})}getDimensions(){const{width:e,height:t,top:n,left:i}=this.element.getBoundingClientRect();this.sizes.set(e,t),this.offset.set(i-window.innerWidth/2+e/2,-n+window.innerHeight/2-t/2)}createMesh(){const e=new Et(1,1,10,10);this.images.forEach(t=>{const n=new ze().load(t);n.minFilter=Se,this.imgsLoaded.push(n)}),this.displacmentImg=new ze().load(Is),this.displacmentImg.minFilter=Se,this.uniforms={uTexture1:{value:this.imgsLoaded[this.currentSlide]},uTexture2:{value:this.imgsLoaded[this.nextSlide]},uDisplacment:{value:this.imageTexture3},uOffset:{value:new Z(0,0)},uAlpha:{value:1},u_mouse:{type:"v2",value:new Z},uTime:{type:"f",value:0},uProgress:{value:0},uAmplitude:{value:0},iResolution:{type:"v2",value:new Z(602,480)}},this.material=new tt({uniforms:this.uniforms,vertexShader:_v,fragmentShader:vv,transparent:!0,side:Ye}),this.mesh=new Ze(e,this.material),this.scene.add(this.mesh)}render(e=0,t,n){if(this.getDimensions(),this.mesh.position.set(this.offset.x,this.offset.y,0),this.mesh.scale.set(this.sizes.x,this.sizes.y,1),this.uniforms.uOffset.value.set(this.offset.x*.5,-e*3e-4),this.mesh.uuid===(n==null?void 0:n.uuid)){this.uniforms.u_mouse.value.x=yr(0,t.x,.6),this.uniforms.u_mouse.value.y=yr(0,t.y,.6),this.uniforms.uTime.value+=.05;return}this.uniforms.u_mouse.value.x=yr(this.uniforms.u_mouse.value.x,0,.02),this.uniforms.u_mouse.value.y=yr(this.uniforms.u_mouse.value.y,0,.02),this.uniforms.uTime.value=yr(this.uniforms.uTime.value,0,.02)}};var yv=`uniform float uTime;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;

void main() {\r
    vPosition = position;\r
    vNormal = normal;\r
    vUv = uv;

    vec3 newPosition = vec3(position.x, position.y, position.z);\r
    \r

    
    vec4 modelViewPosition = modelViewMatrix * vec4(newPosition, 1.0 );\r
    vec4 projectedPosition = projectionMatrix * modelViewPosition;\r
	gl_Position = projectedPosition;\r
}`,Mv=`uniform sampler2D uTexture1; \r
uniform sampler2D uTexture2; \r
uniform sampler2D uDisplacment; \r
uniform float uAmplitude;\r

uniform float uTime;\r
uniform float uProgress;\r
uniform vec2 iResolution;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;\r

void main() {\r
	vec2 uv = vUv;\r
	vec2 uvNew = vUv - 0.5;

	float time = uProgress;\r
	float amplitude = uAmplitude ;

	vec4 circle = vec4( smoothstep(uProgress - 0.3, uProgress, vec3( length(uvNew)  )), 1.);\r
	vec4 texture2 = texture2D( uTexture1, vec2(vUv.x * (circle.x)  , vUv.y ));\r
	vec4 texture1 = texture2D( uTexture2, vec2(vUv.x * (1. -   circle.x)  , vUv.y ));

	gl_FragColor = mix(texture1, texture2, circle) ;\r
}`;let bv=class{constructor(e,t){this.element=e,this.scene=t,this.offset=new Z(0,0),this.sizes=new Z(0,0),this.next=this.element.parentElement.querySelector(".next"),this.prev=this.element.parentElement.querySelector(".prev"),this.images=[bn,Sn,dn,Xt,On],this.imgsLoaded=[],this.currentSlide=0,this.nextSlide=1,this.createMesh(),this.clickToElement()}clickToElement(){this.next.addEventListener("click",()=>{if(this.isRunning)return;this.isRunning=!0;let e=this.imgsLoaded.length,t=this.imgsLoaded[(this.currentSlide+1)%e];this.uniforms.uTexture2.value=t,He.timeline().to(this.uniforms.uProgress,{value:1,duration:1.5,onComplete:()=>{this.currentSlide=(this.currentSlide+1)%e,this.uniforms.uTexture1.value=t,this.uniforms.uProgress.value=0,this.isRunning=!1}})}),this.prev.addEventListener("click",()=>{if(this.isRunning)return;this.isRunning=!0;let e=this.imgsLoaded.length;const t=this.currentSlide===0?e-1:this.currentSlide-1;let n=this.imgsLoaded[t];this.uniforms.uTexture2.value=n,He.timeline().to(this.uniforms.uProgress,{value:1,duration:1.5,onComplete:()=>{this.currentSlide=t,this.uniforms.uTexture1.value=n,this.uniforms.uProgress.value=0,this.isRunning=!1}})})}getDimensions(){const{width:e,height:t,top:n,left:i}=this.element.getBoundingClientRect();this.sizes.set(e,t),this.offset.set(i-window.innerWidth/2+e/2,-n+window.innerHeight/2-t/2)}createMesh(){const e=new Et(1,1,130,10);this.images.forEach(t=>{const n=new ze().load(t);n.minFilter=Se,this.imgsLoaded.push(n)}),this.uniforms={uTexture1:{value:this.imgsLoaded[this.currentSlide]},uTexture2:{value:this.imgsLoaded[this.nextSlide]},uOffset:{value:new Z(0,0)},uAlpha:{value:1},u_mouse:{type:"v2",value:new Z},uTime:{type:"f",value:0},uProgress:{value:0},uAmplitude:{value:0},iResolution:{type:"v2",value:new Z(602,480)}},this.material=new tt({uniforms:this.uniforms,vertexShader:yv,fragmentShader:Mv,transparent:!0,side:Ye}),this.mesh=new Ze(e,this.material),this.scene.add(this.mesh)}render(e=0,t,n){this.getDimensions(),this.mesh.position.set(this.offset.x,this.offset.y,0),this.mesh.scale.set(this.sizes.x,this.sizes.y,1)}};var Sv=`uniform float uTime;

uniform float uProgress;\r
uniform float uAmplitude;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;

void main() {\r
    vPosition = position;\r
    vNormal = normal;\r
    vUv = uv;\r

    vec4 circle = vec4( smoothstep(uProgress - 0.8, uProgress, vec3(  atan(length(vUv)) )), 1.);

    vec3 newPosition = vec3(position.x , position.y , position.z );\r
    \r

    
    vec4 modelViewPosition = modelViewMatrix * vec4(newPosition, 1.0 );\r
    vec4 projectedPosition = projectionMatrix * modelViewPosition;\r
	gl_Position = projectedPosition;\r
}`,wv=`uniform sampler2D uTexture1; \r
uniform sampler2D uTexture2; \r
uniform sampler2D uDisplacment; \r
uniform float uAmplitude;\r

uniform float uTime;\r
uniform float uProgress;\r
uniform vec2 iResolution;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;\r

void main() {\r
	vec2 uv = vUv;\r
	vec2 uvNew = vUv ;

	float time = uProgress * 2.;\r
	float amplitude = uAmplitude ;

	vec4 circle = vec4( smoothstep(time - 0.6, time, vec3(  sin(length(uvNew)) )), 1.);

	vec4 texture1 = texture2D( uTexture1, vec2(vUv.x * ( circle.x), vUv.y * (circle.y) ));\r
	vec4 texture2 = texture2D( uTexture2, vec2(vUv.x * (1. - circle.x), vUv.y * (1. - circle.y) ));

	gl_FragColor = mix(texture1, texture2, uProgress) ;\r
}`;let Tv=class{constructor(e,t){this.element=e,this.scene=t,this.offset=new Z(0,0),this.sizes=new Z(0,0),this.next=this.element.parentElement.querySelector(".next"),this.prev=this.element.parentElement.querySelector(".prev"),this.images=[bn,Sn,dn,Xt,On],this.imgsLoaded=[],this.currentSlide=0,this.nextSlide=1,this.createMesh(),this.clickToElement()}clickToElement(){this.next.addEventListener("click",()=>{if(this.isRunning)return;this.isRunning=!0;let e=this.imgsLoaded.length,t=this.imgsLoaded[(this.currentSlide+1)%e];this.uniforms.uTexture2.value=t,He.timeline().to(this.uniforms.uProgress,{value:1,duration:1.5,onComplete:()=>{this.currentSlide=(this.currentSlide+1)%e,this.uniforms.uTexture1.value=t,this.uniforms.uProgress.value=0,this.isRunning=!1}})}),this.prev.addEventListener("click",()=>{if(this.isRunning)return;this.isRunning=!0;let e=this.imgsLoaded.length;const t=this.currentSlide===0?e-1:this.currentSlide-1;let n=this.imgsLoaded[t];this.uniforms.uTexture2.value=n,He.timeline().to(this.uniforms.uProgress,{value:1,duration:1.5,onComplete:()=>{this.currentSlide=t,this.uniforms.uTexture1.value=n,this.uniforms.uProgress.value=0,this.isRunning=!1}})})}getDimensions(){const{width:e,height:t,top:n,left:i}=this.element.getBoundingClientRect();this.sizes.set(e,t),this.offset.set(i-window.innerWidth/2+e/2,-n+window.innerHeight/2-t/2)}createMesh(){const e=new Et(1,1,130,10);this.images.forEach(t=>{const n=new ze().load(t);n.minFilter=Se,this.imgsLoaded.push(n)}),this.uniforms={uTexture1:{value:this.imgsLoaded[this.currentSlide]},uTexture2:{value:this.imgsLoaded[this.nextSlide]},uOffset:{value:new Z(0,0)},uAlpha:{value:1},u_mouse:{type:"v2",value:new Z},uTime:{type:"f",value:0},uProgress:{value:0},uAmplitude:{value:0},iResolution:{type:"v2",value:new Z(602,480)}},this.material=new tt({uniforms:this.uniforms,vertexShader:Sv,fragmentShader:wv,transparent:!0,side:Ye}),this.mesh=new Ze(e,this.material),this.scene.add(this.mesh)}render(e=0,t,n){this.getDimensions(),this.mesh.position.set(this.offset.x,this.offset.y,0),this.mesh.scale.set(this.sizes.x,this.sizes.y,1)}};var Ev=`uniform float uTime;

uniform float uProgress;\r
uniform float uAmplitude;\r
uniform vec2 u_mouse;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;

void main() {\r
    vPosition = position;\r
    vNormal = normal;\r
    vUv = uv;\r

	vec2 uvNew = vUv - 0.5 ;

	float time = uProgress * 3.;\r
	float amplitude = uAmplitude ;

	uvNew.x = uvNew.x - u_mouse.x ;\r
	uvNew.y = uvNew.y - u_mouse.y ;

	vec4 circle = vec4( smoothstep(0.8, 1., vec3( 1. - atan(length(uvNew)) )), 1.);

    vec3 newPosition = vec3(position.x + circle.x * 0.6 * uvNew.x, position.y + circle.y * 0.6 * uvNew.y, position.z + circle.x * 0.3 );\r
    \r

    
    vec4 modelViewPosition = modelViewMatrix * vec4(newPosition, 1.0 );\r
    vec4 projectedPosition = projectionMatrix * modelViewPosition;\r
	gl_Position = projectedPosition;\r
}`,Av=`uniform sampler2D uTexture1; \r
uniform sampler2D uTexture2; \r
uniform sampler2D uDisplacment; \r
uniform float uAmplitude;

uniform float uTime;\r
uniform float uProgress;\r
uniform vec2 iResolution;\r
uniform vec2 u_mouse;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;\r

void main() {\r
	vec2 uv = vUv;\r
	vec2 uvNew = vUv - 0.5 ;

	float time = uProgress * 3.;\r
	float amplitude = uAmplitude ;

	uvNew.x = uvNew.x - u_mouse.x ;\r
	uvNew.y = uvNew.y - u_mouse.y ;

	vec4 circle = vec4( smoothstep(0.8, 1., vec3( 1. - atan(length(uvNew)) )), 1.);

	vec4 displacment = texture2D( uDisplacment, vec2(uvNew.x*2.9 + 0.5 , uvNew.y*2.9+ 0.5 ));

	vec4 texture1 = texture2D( uTexture1, vec2(vUv.x + (displacment.x * 0.05 * circle.x ), vUv.y + (displacment.y * 0.05  * circle.y)  ));\r

	gl_FragColor =  texture1 ;\r
}`;const ba="/shadertest/assets/noise6-bf9debc7.jpg";let Cv=class{constructor(e,t){this.element=e,this.scene=t,this.offset=new Z(0,0),this.sizes=new Z(0,0),this.next=this.element.parentElement.querySelector(".next"),this.prev=this.element.parentElement.querySelector(".prev"),this.images=[bn,Sn,dn,Xt,On],this.imgsLoaded=[],this.currentSlide=0,this.nextSlide=1,this.createMesh(),this.clickToElement()}clickToElement(){this.next.addEventListener("click",()=>{if(this.isRunning)return;this.isRunning=!0;let e=this.imgsLoaded.length,t=this.imgsLoaded[(this.currentSlide+1)%e];this.uniforms.uTexture2.value=t,He.timeline().to(this.uniforms.uProgress,{value:1,duration:1.5,onComplete:()=>{this.currentSlide=(this.currentSlide+1)%e,this.uniforms.uTexture1.value=t,this.uniforms.uProgress.value=0,this.isRunning=!1}})}),this.prev.addEventListener("click",()=>{if(this.isRunning)return;this.isRunning=!0;let e=this.imgsLoaded.length;const t=this.currentSlide===0?e-1:this.currentSlide-1;let n=this.imgsLoaded[t];this.uniforms.uTexture2.value=n,He.timeline().to(this.uniforms.uProgress,{value:1,duration:1.5,onComplete:()=>{this.currentSlide=t,this.uniforms.uTexture1.value=n,this.uniforms.uProgress.value=0,this.isRunning=!1}})})}getDimensions(){const{width:e,height:t,top:n,left:i}=this.element.getBoundingClientRect();this.sizes.set(e,t),this.offset.set(i-window.innerWidth/2+e/2,-n+window.innerHeight/2-t/2)}createMesh(){const e=new Et(1,1,130,100);this.images.forEach(t=>{const n=new ze().load(t);n.minFilter=Se,this.imgsLoaded.push(n)}),this.displacmentImg=new ze().load(ba),this.displacmentImg.minFilter=Se,this.uniforms={uTexture1:{value:this.imgsLoaded[this.currentSlide]},uTexture2:{value:this.imgsLoaded[this.nextSlide]},uDisplacment:{value:this.displacmentImg},uOffset:{value:new Z(0,0)},uAlpha:{value:1},u_mouse:{type:"v2",value:new Z},uTime:{type:"f",value:0},uProgress:{value:0},uAmplitude:{value:0},iResolution:{type:"v2",value:new Z(602,480)}},this.material=new tt({uniforms:this.uniforms,vertexShader:Ev,fragmentShader:Av,transparent:!0,side:Ye}),this.mesh=new Ze(e,this.material),this.scene.add(this.mesh)}render(e=0,t,n){this.getDimensions(),this.mesh.position.set(this.offset.x,this.offset.y,0),this.mesh.scale.set(this.sizes.x,this.sizes.y,1),this.uniforms.u_mouse.value.set(t.x,t.y)}};var Pv=`uniform float uTime;

uniform float uProgress;\r
uniform float uAmplitude;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;

void main() {\r
    vPosition = position;\r
    vNormal = normal;\r
    vUv = uv;

	vec2 uvNew = vUv - 0.5;\r
	vec4 cilinder = vec4( smoothstep(0.1 , 0.6, vec3(  atan(length(uvNew)) )), 1.);\r

    vec3 newPosition = vec3(position.x , position.y , position.z + cilinder.x * 0.1   );\r
    \r

    
    vec4 modelViewPosition = modelViewMatrix * vec4(newPosition, 1.0 );\r
    vec4 projectedPosition = projectionMatrix * modelViewPosition;\r
	gl_Position = projectedPosition;\r
}`,Lv=`uniform sampler2D uTexture1; \r
uniform sampler2D uTexture2; \r
uniform sampler2D uDisplacment; \r
uniform float uAmplitude;

float uProgressNew;

uniform float uTime;\r
uniform float uProgress;\r
uniform vec2 iResolution;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;

float random (vec2 st) {\r
    return fract( sin(dot(st.xy,  vec2(12.9898 , 78.233)))   * 43758.5453123 + uProgress * 2. );\r
}\r

float foo (float uProgress) {\r
	float uProgressNew = 0.0;\r
	if (uProgress > uProgressNew + 0.1 ){\r
		uProgressNew = uProgress;\r
	}\r
	return uProgressNew;\r
}\r

void main() {\r
	vec2 uv = vUv;\r
	vec2 uvNew = vUv;\r
	vec2 uvNew2 = vUv - 0.5;\r

    uvNew *= 20.0; \r
    vec2 ipos = floor( vec2(uvNew.x + uProgress, uvNew.y) );\r
    vec2 fpos = fract(uvNew);\r
    vec4 pixels = vec4( step( 0.5, ( vec3(random( ipos )) )), 1.);

	vec4 contrastPixels = pixels;

	\r
	vec4 crop = vec4( smoothstep( foo(uProgress) - 0., foo(uProgress), length(uv.x)) );

	vec4 cropNeg = vec4( ( smoothstep( foo(uProgress) - 0.5, foo(uProgress), (length(uv.x)))) );

	vec4 texture1 = texture2D( uTexture1, vec2(uv.x , uv.y  ));\r
	vec4 texture2 = texture2D( uTexture2, vec2(uv.x , uv.y  ));\r

	vec4 mask = step( 0.5, (crop + contrastPixels + (1. - cropNeg)));\r
	vec4 mask2 = vec4(step(foo(uProgress) - 0.2, length(uv.x)));

	gl_FragColor = mix(texture1, texture2, mask * mask2) ;\r

}`;let Dv=class{constructor(e,t){this.element=e,this.scene=t,this.offset=new Z(0,0),this.sizes=new Z(0,0),this.images=[bn,Sn,ba,Xt],this.createMesh(),this.clickToElement()}clickToElement(){this.element.addEventListener("click",e=>{He.timeline().to(this.uniforms.uProgress,{value:1,duration:3,ease:"power3.out",onComplete:()=>{console.log(this.imageTexture3),this.uniforms.uTexture1.value=this.imageTexture2,this.uniforms.uTexture2.value=this.imageTexture3}})})}getDimensions(){const{width:e,height:t,top:n,left:i}=this.element.getBoundingClientRect();this.sizes.set(e,t),this.offset.set(i-window.innerWidth/2+e/2,-n+window.innerHeight/2-t/2)}createMesh(){const e=new Et(1,1,130,110);this.imageTexture1=new ze().load(this.images[0]),this.imageTexture1.minFilter=Se,this.imageTexture2=new ze().load(this.images[1]),this.imageTexture2.minFilter=Se,this.imageTexture3=new ze().load(this.images[2]),this.imageTexture3.minFilter=Se,this.imageTexture4=new ze().load(this.images[3]),this.imageTexture4.minFilter=Se,this.uniforms={uTexture1:{value:this.imageTexture1},uTexture2:{value:this.imageTexture2},uDisplacment:{value:this.imageTexture3},uOffset:{value:new Z(0,0)},uAlpha:{value:1},u_mouse:{type:"v2",value:new Z},uTime:{type:"f",value:0},uProgress:{value:0},uAmplitude:{value:0},iResolution:{type:"v2",value:new Z(602,480)}},this.material=new tt({uniforms:this.uniforms,vertexShader:Pv,fragmentShader:Lv,transparent:!0,side:Ye}),this.mesh=new Ze(e,this.material),this.scene.add(this.mesh)}render(e=0,t,n){this.getDimensions(),this.mesh.position.set(this.offset.x,this.offset.y,0),this.mesh.scale.set(this.sizes.x,this.sizes.y,1),this.uniforms.u_mouse.value.set(t.x,t.y)}};var Rv=`uniform float uTime;

uniform float uProgress;\r
uniform float uAmplitude;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;

void main() {\r
    vPosition = position;\r
    vNormal = normal;\r
    vUv = uv;

	vec2 uvNew = vUv - 0.5;\r
	vec4 cilinder = vec4( smoothstep(0.1 , 0.6, vec3(  atan(length(uvNew)) )), 1.);\r

    vec3 newPosition = vec3(position.x , position.y , position.z + cilinder.x * 0.1   );\r
    \r

    
    vec4 modelViewPosition = modelViewMatrix * vec4(newPosition, 1.0 );\r
    vec4 projectedPosition = projectionMatrix * modelViewPosition;\r
	gl_Position = projectedPosition;\r
}`,Iv=`uniform sampler2D uTexture1; \r
uniform sampler2D uTexture2; \r
uniform sampler2D uDisplacment; \r

uniform float uTime;\r
uniform float uProgress;\r
uniform vec2 iResolution;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;\r

vec3 mod289(vec3 x)\r
{\r
  return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec4 mod289(vec4 x)\r
{\r
  return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec4 permute(vec4 x)\r
{\r
  return mod289(((x*34.0)+1.0)*x);\r
}

vec4 taylorInvSqrt(vec4 r)\r
{\r
  return 1.79284291400159 - 0.85373472095314 * r;\r
}

vec3 fade(vec3 t) {\r
  return t*t*t*(t*(t*6.0-15.0)+10.0);\r
}

float cnoise(vec3 P)\r
{\r
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  Pi0 = mod289(Pi0);\r
  Pi1 = mod289(Pi1);\r
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
  vec4 iz0 = Pi0.zzzz;\r
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);\r
  vec4 ixy0 = permute(ixy + iz0);\r
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);\r
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\r
  gx0 = fract(gx0);\r
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
  vec4 sz0 = step(gz0, vec4(0.0));\r
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);\r
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\r
  gx1 = fract(gx1);\r
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
  vec4 sz1 = step(gz1, vec4(0.0));\r
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
  g000 *= norm0.x;\r
  g010 *= norm0.y;\r
  g100 *= norm0.z;\r
  g110 *= norm0.w;\r
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
  g001 *= norm1.x;\r
  g011 *= norm1.y;\r
  g101 *= norm1.z;\r
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);\r
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);\r
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\r
  return 2.2 * n_xyz;\r
}

void main(void) {\r
	vec2 uv = vUv;\r
    vec2 pos = uv.xy + vec2(cnoise(vec3(uv + vec2(1000.0), uTime * 0.0001)), cnoise(vec3(vec2(uv.x * 4., uv.y + uTime * 0.01) * 25. + vec2(2000.0), uTime * 0.0001 ))) * 100.0;\r
    float v = cnoise(vec3(pos * 0.02 + vec2(0.0, 0), 0. ));

    v = (v + 0.2) * 0.9;\r
    vec3 c = mix(vec3(0., 0., 0.), vec3(1.0, 1.0, 1.), v);\r
    vec4 displace = vec4(c, 1.0);

	vec4 mask = texture2D( uTexture2, vec2(uv.x , uv.y  ));

	vec4 texture1 = texture2D( uTexture1, vec2(uv.x , uv.y + (displace.y * 0.12) * mask  )) ;

	gl_FragColor = texture1   ;

}`;const Fv="/shadertest/assets/vodopad-93bad880.jpg",Nv="/shadertest/assets/vodopad_mask-6dc04eff.jpg";let zv=class{constructor(e,t){this.element=e,this.scene=t,this.offset=new Z(0,0),this.sizes=new Z(0,0),this.images=[Fv,Nv,ba,Xt],this.createMesh(),this.clickToElement()}clickToElement(){this.element.addEventListener("click",e=>{He.timeline().to(this.uniforms.uProgress,{value:1,duration:3,ease:"power3.out"})})}getDimensions(){const{width:e,height:t,top:n,left:i}=this.element.getBoundingClientRect();this.sizes.set(e,t),this.offset.set(i-window.innerWidth/2+e/2,-n+window.innerHeight/2-t/2)}createMesh(){const e=new Et(1,1,130,110);this.imageTexture1=new ze().load(this.images[0]),this.imageTexture1.minFilter=Se,this.imageTexture2=new ze().load(this.images[1]),this.imageTexture2.minFilter=Se,this.imageTexture3=new ze().load(this.images[2]),this.imageTexture3.minFilter=Se,this.imageTexture4=new ze().load(this.images[3]),this.imageTexture4.minFilter=Se,this.uniforms={uTexture1:{value:this.imageTexture1},uTexture2:{value:this.imageTexture2},uDisplacment:{value:this.imageTexture3},uOffset:{value:new Z(0,0)},uAlpha:{value:1},u_mouse:{type:"v2",value:new Z},uTime:{type:"f",value:0},uProgress:{value:0},uAmplitude:{value:0},iResolution:{type:"v2",value:new Z(602,480)}},this.material=new tt({uniforms:this.uniforms,vertexShader:Rv,fragmentShader:Iv,transparent:!0,side:Ye}),this.mesh=new Ze(e,this.material),this.scene.add(this.mesh)}render(e=0,t,n){this.getDimensions(),this.mesh.position.set(this.offset.x,this.offset.y,0),this.mesh.scale.set(this.sizes.x,this.sizes.y,1),this.uniforms.u_mouse.value.set(t.x,t.y),this.uniforms.uTime.value+=.03}};var Uv=`uniform float uTime;

uniform float uProgress;\r
uniform float uAmplitude;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;

void main() {\r
    vPosition = position;\r
    vNormal = normal;\r
    vUv = uv;

	vec2 uvNew = vUv - 0.5;\r
	vec4 cilinder = vec4( smoothstep(0.1 , 0.6, vec3(  atan(length(uvNew)) )), 1.);\r

    vec3 newPosition = vec3(position.x , position.y , position.z + cilinder.x * 0.1   );\r
    \r

    
    vec4 modelViewPosition = modelViewMatrix * vec4(newPosition, 1.0 );\r
    vec4 projectedPosition = projectionMatrix * modelViewPosition;\r
	gl_Position = projectedPosition;\r
}`,Ov=`uniform sampler2D uTexture1; \r
uniform sampler2D uTexture2; \r
uniform sampler2D uDisplacment; \r
uniform float uAmplitude;\r

uniform float uTime;\r
uniform float uProgress;\r
uniform vec2 iResolution;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;\r

vec3 rgbShift1(sampler2D textureImage, vec2 uv, float offset, vec2 uvNew, float progress) {\r
   float noise = 0.3;\r
   vec3 rgb = texture2D(textureImage, vec2(uv.x + progress  - offset * uvNew.x, uv.y - offset * uvNew.y) ).rgb;\r
   rgb.b = texture2D(textureImage, vec2(uv.x + progress  - offset * 0.85 * uvNew.x, uv.y - offset * 0.85 * uvNew.y) ).b;\r
   rgb.r = texture2D(textureImage, vec2(uv.x + progress  - offset * 0.9 * uvNew.x, uv.y - offset * 0.9 * uvNew.y) ).r;\r
   return vec3(rgb);\r
}\r

vec3 rgbShift2(sampler2D textureImage, vec2 uv, float offset, vec2 uvNew, float progress) {\r
   float noise = 0.3;\r
   vec3 rgb = texture2D(textureImage, vec2(uv.x - 1.0 + progress - offset * uvNew.x, uv.y - offset * uvNew.y) ).rgb;\r
   rgb.b = texture2D(textureImage, vec2(uv.x - 1.0 + progress - offset * 0.85 * uvNew.x, uv.y - offset * 0.85 * uvNew.y) ).b;\r
   rgb.r = texture2D(textureImage, vec2(uv.x - 1.0 + progress - offset * 0.9 * uvNew.x, uv.y - offset * 0.9 * uvNew.y) ).r;\r
   return vec3(rgb);\r
}\r

void main() {\r
	vec2 uv = vUv ;\r
	vec2 uvNew = (vUv - 0.5);

	float time = uAmplitude * 0.1;

	vec4 circle =vec4( vec2( smoothstep(time, time + 0.5, (length (uvNew ))) ), 1., 1.) ;\r
	float zoom  = circle.r * time * 0.6;

	vec3 color1 = rgbShift1(uTexture1, vUv, zoom, uvNew, uProgress);\r
	vec3 color2 = rgbShift2(uTexture2, vUv, zoom, uvNew, uProgress);

	float bonds1 =  step(0.0,  1. - (uv.x + uProgress - zoom * uvNew.x));\r
	float bonds2 = step(1.0, (uv.x + uProgress - zoom *uvNew.x));

   gl_FragColor = vec4(color1* bonds1 + color2* bonds2 , 1.0);\r
}`;const Mr=(a,e,t)=>a*(1-t)+e*t;let kv=class{constructor(e,t){this.element=e,this.scene=t,this.offset=new Z(0,0),this.sizes=new Z(0,0),this.next=this.element.parentElement.querySelector(".next"),this.prev=this.element.parentElement.querySelector(".prev"),this.images=[bn,Sn,dn,Xt,On],this.imgsLoaded=[],this.currentSlide=0,this.nextSlide=1,this.isRunning=!1,this.createMesh(),this.clickToElement()}clickToElement(){this.next.addEventListener("click",()=>{if(this.isRunning)return;this.isRunning=!0;let e=this.imgsLoaded.length,t=this.imgsLoaded[(this.currentSlide+1)%e];this.uniforms.uTexture2.value=t,He.timeline().to(this.uniforms.uAmplitude,{value:3.14}).to(this.uniforms.uProgress,{value:1,duration:1,ease:"power2.out"}).to(this.uniforms.uAmplitude,{value:0,duration:1,delay:.2,ease:"power3.out",onComplete:()=>{this.currentSlide=(this.currentSlide+1)%e,this.uniforms.uTexture1.value=t,this.uniforms.uProgress.value=0,this.isRunning=!1}})}),this.prev.addEventListener("click",()=>{if(this.isRunning)return;this.isRunning=!0;let e=this.imgsLoaded.length;const t=this.currentSlide===0?e-1:this.currentSlide-1;let n=this.imgsLoaded[t];this.uniforms.uTexture2.value=n,He.timeline().to(this.uniforms.uAmplitude,{value:3.14}).to(this.uniforms.uProgress,{value:1,duration:1,ease:"power2.out"}).to(this.uniforms.uAmplitude,{value:0,duration:1,delay:.2,ease:"power3.out",onComplete:()=>{this.currentSlide=t,this.uniforms.uTexture1.value=n,this.uniforms.uProgress.value=0,this.isRunning=!1}})})}getDimensions(){const{width:e,height:t,top:n,left:i}=this.element.getBoundingClientRect();this.sizes.set(e,t),this.offset.set(i-window.innerWidth/2+e/2,-n+window.innerHeight/2-t/2)}createMesh(){const e=new Et(1,1,10,10);this.images.forEach(t=>{const n=new ze().load(t);n.minFilter=Se,this.imgsLoaded.push(n)}),this.displacmentImg=new ze().load(Is),this.displacmentImg.minFilter=Se,this.uniforms={uTexture1:{value:this.imgsLoaded[this.currentSlide]},uTexture2:{value:this.imgsLoaded[this.nextSlide]},uDisplacment:{value:this.imageTexture3},uOffset:{value:new Z(0,0)},uAlpha:{value:1},u_mouse:{type:"v2",value:new Z},uTime:{type:"f",value:0},uProgress:{value:0},uAmplitude:{value:0},iResolution:{type:"v2",value:new Z(602,480)}},this.material=new tt({uniforms:this.uniforms,vertexShader:Uv,fragmentShader:Ov,transparent:!0,side:Ye}),this.mesh=new Ze(e,this.material),this.scene.add(this.mesh)}render(e=0,t,n){if(this.getDimensions(),this.mesh.position.set(this.offset.x,this.offset.y,0),this.mesh.scale.set(this.sizes.x,this.sizes.y,1),this.uniforms.uOffset.value.set(this.offset.x*.5,-e*3e-4),this.mesh.uuid===(n==null?void 0:n.uuid)){this.uniforms.u_mouse.value.x=Mr(0,t.x,.6),this.uniforms.u_mouse.value.y=Mr(0,t.y,.6),this.uniforms.uTime.value+=.05;return}this.uniforms.u_mouse.value.x=Mr(this.uniforms.u_mouse.value.x,0,.02),this.uniforms.u_mouse.value.y=Mr(this.uniforms.u_mouse.value.y,0,.02),this.uniforms.uTime.value=Mr(this.uniforms.uTime.value,0,.02)}};var Bv=`uniform float uTime;

uniform float uProgress;\r
uniform float uAmplitude;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;

void main() {\r
    vPosition = position;\r
    vNormal = normal;\r
    vUv = uv;

	vec2 uvNew = vUv - 0.5;\r
	vec4 cilinder = vec4( smoothstep(0.1 , 0.6, vec3(  atan(length(uvNew)) )), 1.);\r

    vec3 newPosition = vec3(position.x , position.y , position.z + cilinder.x * 0.1   );\r
    \r

    
    vec4 modelViewPosition = modelViewMatrix * vec4(newPosition, 1.0 );\r
    vec4 projectedPosition = projectionMatrix * modelViewPosition;\r
	gl_Position = projectedPosition;\r
}`,Vv=`uniform sampler2D uTexture1; \r
uniform sampler2D uTexture2; \r
uniform sampler2D uDisplacment; \r
uniform float uAmplitude;\r

uniform float uTime;\r
uniform float uProgress;\r
uniform vec2 iResolution;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;\r

vec3 rgbShift1(sampler2D textureImage, vec2 vUv, vec2 circle, vec2 uvN, float progress, float amplitude) {\r
   vec3 rgb =  texture2D( textureImage, vec2(vUv.x + progress + circle.x * amplitude * uvN.x , vUv.y * 1./(1. + amplitude) + circle.y * amplitude / (1. + amplitude) ) ).rgb;\r
    rgb.b =  texture2D( textureImage, vec2(vUv.x + progress + circle.x * 0.9 * amplitude * uvN.x , vUv.y * 1./(1. + amplitude) + circle.y * amplitude / (1. + amplitude) ) ).b;\r
    rgb.r =  texture2D( textureImage, vec2(vUv.x + progress + circle.x * 0.95 * amplitude * uvN.x , vUv.y * 1./(1. + amplitude) + circle.y * amplitude / (1. + amplitude) ) ).r; \r
   return vec3(rgb);\r
}\r

vec3 rgbShift2(sampler2D textureImage, vec2 vUv, vec2 circle, vec2 uvN, float progress, float amplitude) {\r
   vec3 rgb = texture2D( textureImage, vec2(vUv.x - 1.0 + progress + circle.x * amplitude * uvN.x , vUv.y * 1./(1. + amplitude) + circle.y * amplitude / (1. + amplitude) ) ).rgb;\r
    rgb.b = texture2D( textureImage, vec2(vUv.x - 1.0 + progress + circle.x * 0.9  * amplitude * uvN.x , vUv.y * 1./(1. + amplitude) + circle.y * amplitude / (1. + amplitude) ) ).b;\r
    rgb.r = texture2D( textureImage, vec2(vUv.x - 1.0 + progress + circle.x * 0.95 * amplitude * uvN.x , vUv.y * 1./(1. + amplitude) + circle.y * amplitude / (1. + amplitude) ) ).r;\r
   return vec3(rgb);\r
}

void main() {\r
  vec2 uv = vUv;\r
	vec2 uvNew = vUv;

	float time = uProgress;\r
	float amplitude = uAmplitude / 10.;

  vec2 uvN = vec2(uv.x - 0.5 , uv.y) * -amplitude;\r
  vec2 circle = vec2 (length(vec2(uvNew.x - 0.5, uvNew.y)));\r

  vec3 color1 = rgbShift1(uTexture1, vUv, circle, uvN,  uProgress, amplitude);\r
	vec3 color2 = rgbShift2(uTexture2, vUv, circle,  uvN, uProgress, amplitude);

	float bonds1 = step(0.0, (uv.x + uProgress + circle.x * uvN.x * 0.6)) * step(0.0, 1. - (uv.x + uProgress + circle.x * uvN.x * 0.6));\r
	float bonds2 = step(1.0, (uv.x + uProgress + circle.x * uvN.x * 0.6));\r

  gl_FragColor = vec4(color1* bonds1 + color2* bonds2 , 1.0);\r
}`;const br=(a,e,t)=>a*(1-t)+e*t;let Gv=class{constructor(e,t){this.element=e,this.scene=t,this.offset=new Z(0,0),this.sizes=new Z(0,0),this.next=this.element.parentElement.querySelector(".next"),this.prev=this.element.parentElement.querySelector(".prev"),this.images=[bn,Sn,dn,Xt,On],this.imgsLoaded=[],this.currentSlide=0,this.nextSlide=1,this.isRunning=!1,this.createMesh(),this.clickToElement()}clickToElement(){this.next.addEventListener("click",()=>{if(this.isRunning)return;this.isRunning=!0;let e=this.imgsLoaded.length,t=this.imgsLoaded[(this.currentSlide+1)%e];this.uniforms.uTexture2.value=t,He.timeline().to(this.uniforms.uAmplitude,{value:6.14}).to(this.uniforms.uProgress,{value:1,duration:1,ease:"power2.out"}).to(this.uniforms.uAmplitude,{value:0,duration:1,delay:.2,ease:"power3.out",onComplete:()=>{this.currentSlide=(this.currentSlide+1)%e,this.uniforms.uTexture1.value=t,this.uniforms.uProgress.value=0,this.isRunning=!1}})}),this.prev.addEventListener("click",()=>{if(this.isRunning)return;this.isRunning=!0;let e=this.imgsLoaded.length;const t=this.currentSlide===0?e-1:this.currentSlide-1;let n=this.imgsLoaded[t];this.uniforms.uTexture2.value=n,He.timeline().to(this.uniforms.uAmplitude,{value:6.14}).to(this.uniforms.uProgress,{value:1,duration:1,ease:"power2.out"}).to(this.uniforms.uAmplitude,{value:0,duration:1,delay:.2,ease:"power3.out",onComplete:()=>{this.currentSlide=t,this.uniforms.uTexture1.value=n,this.uniforms.uProgress.value=0,this.isRunning=!1}})})}getDimensions(){const{width:e,height:t,top:n,left:i}=this.element.getBoundingClientRect();this.sizes.set(e,t),this.offset.set(i-window.innerWidth/2+e/2,-n+window.innerHeight/2-t/2)}createMesh(){const e=new Et(1,1,10,10);this.images.forEach(t=>{const n=new ze().load(t);n.minFilter=Se,this.imgsLoaded.push(n)}),this.displacmentImg=new ze().load(Is),this.displacmentImg.minFilter=Se,this.uniforms={uTexture1:{value:this.imgsLoaded[this.currentSlide]},uTexture2:{value:this.imgsLoaded[this.nextSlide]},uDisplacment:{value:this.imageTexture3},uOffset:{value:new Z(0,0)},uAlpha:{value:1},u_mouse:{type:"v2",value:new Z},uTime:{type:"f",value:0},uProgress:{value:0},uAmplitude:{value:0},iResolution:{type:"v2",value:new Z(602,480)}},this.material=new tt({uniforms:this.uniforms,vertexShader:Bv,fragmentShader:Vv,transparent:!0,side:Ye}),this.mesh=new Ze(e,this.material),this.scene.add(this.mesh)}render(e=0,t,n){if(this.getDimensions(),this.mesh.position.set(this.offset.x,this.offset.y,0),this.mesh.scale.set(this.sizes.x,this.sizes.y,1),this.uniforms.uOffset.value.set(this.offset.x*.5,-e*3e-4),this.mesh.uuid===(n==null?void 0:n.uuid)){this.uniforms.u_mouse.value.x=br(0,t.x,.6),this.uniforms.u_mouse.value.y=br(0,t.y,.6),this.uniforms.uTime.value+=.05;return}this.uniforms.u_mouse.value.x=br(this.uniforms.u_mouse.value.x,0,.02),this.uniforms.u_mouse.value.y=br(this.uniforms.u_mouse.value.y,0,.02),this.uniforms.uTime.value=br(this.uniforms.uTime.value,0,.02)}};var Hv=`uniform float uTime;

uniform float uProgress;\r
uniform float uAmplitude;\r
uniform vec2 u_mouse;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;

void main() {\r
    vPosition = position;\r
    vNormal = normal;\r
    vUv = uv;\r

	vec2 uvNew = vUv - 0.5 ;

	float time = uProgress * 3.;\r
	float amplitude = uAmplitude ;\r

    vec3 newPosition = vec3(position.x , position.y , position.z  );\r
    \r

    
    vec4 modelViewPosition = modelViewMatrix * vec4(newPosition, 1.0 );\r
    vec4 projectedPosition = projectionMatrix * modelViewPosition;\r
	gl_Position = projectedPosition;\r
}`,Wv=`uniform sampler2D uTexture1; \r
uniform sampler2D uTexture2; \r
uniform sampler2D uDisplacment; \r
uniform float uAmplitude;

float uProgressNew;\r

uniform float uTime;\r
uniform float uProgress;\r
uniform vec2 iResolution;\r
uniform vec2 u_mouse;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;

float PI=3.14159265359;\r

vec2 random2(vec2 st){\r
    st = vec2( dot(st,vec2(23.1,31.7)),\r
              dot(st,vec2(29.5,3.3)) );\r
    return sin(uTime)* 0.2 - 0.3 + sin(uTime)*fract(sin(st)*43758.313  );\r
}

float noise(vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);

    vec2 u = f*f*(3.0-2.0*f);

    return mix( mix( dot( random2(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),\r
                     dot( random2(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),\r
                mix( dot( random2(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),\r
                     dot( random2(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);\r
}

void main() {\r
	vec2 uv = vUv;\r
	vec2 uvNew = vUv - 0.5 ;

	float time = uProgress * 3.;\r
	float amplitude = uAmplitude ;\r

    vec2 st = uv - u_mouse;\r
    st.x *= iResolution.x/iResolution.y;\r
    vec3 color = vec3(0.0);

    float t = 1.2;\r
    st += noise(st*1.616)*t; 
    color = vec3(1.) * smoothstep(0.148,0.15,noise(st)); 
    color += smoothstep(-0.032,-0.038,noise(st*3.448)); 
    color -= smoothstep(.4,.4,noise(st*3.)); 

    vec4 noiceAffect = vec4(1.-color,1.0);\r

	uvNew.x = uvNew.x - u_mouse.x ;\r
	uvNew.y = uvNew.y - u_mouse.y ;

	vec4 circle = vec4( smoothstep(0.7, 0.71, vec3( 1. - atan(length(uvNew)) )), 1.);

	vec4 displacment = texture2D( uDisplacment, vec2(uvNew.x , uvNew.y ));

	vec4 texture1 = texture2D( uTexture1, vec2(vUv.x , vUv.y )  );\r
    vec4 texture2 = texture2D( uTexture2, vec2(vUv.x , vUv.y )  );\r

	gl_FragColor =  mix(texture1, texture2, clamp( noiceAffect * circle, 0., 1.) )   ;\r
}`;const Pc="/shadertest/assets/noise4-8d88c061.jpg";let $v=class{constructor(e,t){this.element=e,this.scene=t,this.offset=new Z(0,0),this.sizes=new Z(0,0),this.createMesh(),this.clickToElement()}clickToElement(){this.element.addEventListener("click",e=>{console.log("sdds",this.uniforms),He.timeline().to(this.uniforms.uAmplitude,{value:6,duration:1,ease:"power2.out"}).to(this.uniforms.uProgress,{value:1,duration:2,ease:"power2.out"}).to(this.uniforms.uAmplitude,{value:0,duration:1,ease:"power2.out"})})}getDimensions(){const{width:e,height:t,top:n,left:i}=this.element.getBoundingClientRect();this.sizes.set(e,t),this.offset.set(i-window.innerWidth/2+e/2,-n+window.innerHeight/2-t/2)}createMesh(){const e=new Et(1,1,10,10);this.imageTexture1=new ze().load(dn),this.imageTexture1.minFilter=Se,this.imageTexture2=new ze().load(Xt),this.imageTexture2.minFilter=Se,this.imageTexture3=new ze().load(Pc),this.imageTexture3.minFilter=Se,this.uniforms={uTexture1:{value:this.imageTexture1},uTexture2:{value:this.imageTexture2},uDisplacment:{value:this.imageTexture3},uOffset:{value:new Z(0,0)},uAlpha:{value:1},u_mouse:{type:"v2",value:new Z},uTime:{type:"f",value:0},uProgress:{value:0},uAmplitude:{value:0},iResolution:{type:"v2",value:new Z(602,480)}},this.material=new tt({uniforms:this.uniforms,vertexShader:Hv,fragmentShader:Wv,transparent:!0,side:Ye}),this.mesh=new Ze(e,this.material),this.scene.add(this.mesh)}render(e=0,t,n){this.getDimensions(),this.mesh.position.set(this.offset.x,this.offset.y,0),this.mesh.scale.set(this.sizes.x,this.sizes.y,1),this.uniforms.uOffset.value.set(this.offset.x*.5,-e*3e-4),this.uniforms.uTime.value+=.01,this.uniforms.u_mouse.value.set(t.x,t.y)}};var Xv=`uniform float uTime;

uniform float uProgress;\r
uniform float uAmplitude;\r
uniform vec2 iResolution;\r
uniform vec2 u_mouse;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;\r

float random (in vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))\r
                * 43758.5453123);\r
}

float noise(vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);\r
    vec2 u = f*f*(3.0-2.0*f);\r
    return mix( mix( random( i + vec2(0.0,0.0) ),\r
                     random( i + vec2(1.0,0.0) ), u.x),\r
                mix( random( i + vec2(0.0,1.0) ),\r
                     random( i + vec2(1.0,1.0) ), u.x), u.y);\r
}

mat2 rotate2d(float angle){\r
    return mat2(cos(angle),-sin(angle),\r
                sin(angle),cos(angle));\r
}

float lines(in vec2 pos, float b){\r
    float scale = 10.0;\r
    pos *= scale;\r
    return smoothstep(0.0,\r
                    .5+b*.5,\r
                    abs((sin(pos.x*3.1415)+b*2.0))*.5);\r
}

void main() {\r
    vPosition = position;\r
    vNormal = normal;\r
    vUv = uv;\r

	vec2 uvNew = vUv - 0.5 ;

	float time = uProgress * 3.;\r
	float amplitude = uAmplitude ;

    vec2 st = uvNew ;

	vec4 colorNoice = vec4(vec2(step(0.3 , mod((vUv.x ) * 10. , 1.))), 0., 1);\r

    vec3 newPosition = vec3(position.x  , position.y + colorNoice.x *0.06  , position.z    );\r
    \r

    
    vec4 modelViewPosition = modelViewMatrix * vec4(newPosition, 1.0 );\r
    vec4 projectedPosition = projectionMatrix * modelViewPosition;\r
	gl_Position = projectedPosition;\r
}`,qv=`uniform sampler2D uTexture1; \r
uniform sampler2D uTexture2; \r
uniform sampler2D uDisplacment; \r
uniform float uAmplitude;

float uProgressNew;\r

uniform float uTime;\r
uniform float uProgress;\r
uniform vec2 iResolution;\r
uniform vec2 u_mouse;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;

float PI=3.14159265359;\r

float random (in vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))\r
                * 43758.5453123);\r
}

float noise(vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);\r
    vec2 u = f*f*(3.0-2.0*f);\r
    return mix( mix( random( i + vec2(0.0,0.0) ),\r
                     random( i + vec2(1.0,0.0) ), u.x),\r
                mix( random( i + vec2(0.0,1.0) ),\r
                     random( i + vec2(1.0,1.0) ), u.x), u.y);\r
}

mat2 rotate2d(float angle){\r
    return mat2(cos(angle),-sin(angle),\r
                sin(angle),cos(angle));\r
}

float lines(in vec2 pos, float b){\r
    float scale = 10.0;\r
    pos *= scale;\r
    return smoothstep(0.0,\r
                    .5+b*.5,\r
                    abs((sin(pos.x*3.1415)+b*2.0))*.5);\r
}

void main() {\r
	vec2 uv = vUv;\r
	vec2 uvNew = vUv - 0.7 ;

	float time = uProgress * 3.;\r
	float amplitude = uAmplitude ;\r

	vec4 col = vec4(vec2(step(0.3, mod((vUv.x ) * 10. , 1.))), 0., 1);

    vec4 colorSphere = vec4(col.x + cos (uTime), col.y + sin (uTime), 0.34, 1.0);

    gl_FragColor = colorSphere ;

}`;class jv{constructor(e,t){this.element=e,this.scene=t,this.offset=new Z(0,0),this.sizes=new Z(13,13),this.createMesh(),this.clickToElement()}clickToElement(){this.element.addEventListener("click",e=>{console.log("sdds",this.uniforms),He.timeline().to(this.uniforms.uAmplitude,{value:6,duration:1,ease:"power2.out"}).to(this.uniforms.uProgress,{value:1,duration:2,ease:"power2.out"}).to(this.uniforms.uAmplitude,{value:0,duration:1,ease:"power2.out"})})}getDimensions(){const{width:e,height:t,top:n,left:i}=this.element.getBoundingClientRect();this.sizes.set(e,t),this.offset.set(i-window.innerWidth/2+e/2,-n+window.innerHeight/2-t/2)}createMesh(){const e=new ia(.2,320,160);this.imageTexture1=new ze().load(dn),this.imageTexture1.minFilter=Se,this.imageTexture2=new ze().load(Xt),this.imageTexture2.minFilter=Se,this.imageTexture3=new ze().load(Pc),this.imageTexture3.minFilter=Se,this.uniforms={uTexture1:{value:this.imageTexture1},uTexture2:{value:this.imageTexture2},uDisplacment:{value:this.imageTexture3},uOffset:{value:new Z(0,0)},uAlpha:{value:1},u_mouse:{type:"v2",value:new Z},uTime:{type:"f",value:0},uProgress:{value:0},uAmplitude:{value:0},iResolution:{type:"v2",value:new Z(602,480)}},this.material=new tt({uniforms:this.uniforms,vertexShader:Xv,fragmentShader:qv,transparent:!0,side:Ye}),this.mesh=new Ze(e,this.material),this.scene.add(this.mesh)}render(e=0,t,n){this.getDimensions(),this.mesh.position.set(this.offset.x,this.offset.y,200),this.mesh.scale.set(this.sizes.x,this.sizes.y,900),this.mesh.rotation.y+=.004,this.mesh.rotation.z+=.002,this.uniforms.uOffset.value.set(this.offset.x*.5,-e*3e-4),this.uniforms.uTime.value+=.01,this.uniforms.u_mouse.value.set(t.x,t.y)}}const Yv=(a,e,t)=>a*(1-t)+e*t;class Zv{constructor(){Ea(this,"smoothScroll",()=>{this.target=window.scrollY,this.current=Yv(this.current,this.target,this.ease),this.scrollable.style.transform=`translate3d(0,${-this.current*.1}px, 0)`});this.body=document.querySelector("body"),this.images=[...document.querySelectorAll(".webGl")],this.scrollable=document.querySelector(".smooth-scroll"),this.current=0,this.target=0,this.ease=.065,this.meshItems=[],this.planeItems=[],this.mouseCoordinates=new Z,this.raycaster=new Og,this.selectMesh=null,this.onMouse(),this.onTouchMove(),this.createScene(),this.createCamera(),this.createMesh(),this.initRenderer(),this.render()}addGui(){const e=new ra;this.scene.children.forEach(t=>{var i,r,o,s;const n=e.addFolder(t.uuid);(r=(i=t.material)==null?void 0:i.uniforms)!=null&&r.uProgress&&n.add(t.material.uniforms.uProgress,"value").min(0).max(1),(s=(o=t.material)==null?void 0:o.uniforms)!=null&&s.uAmplitude&&n.add(t.material.uniforms.uAmplitude,"value").min(0).max(10)})}onTouchMove(){document.addEventListener("touchmove",e=>{const t=(e==null?void 0:e.touches[0].clientX)/window.innerWidth*2-1,n=-((e==null?void 0:e.touches[0].clientY)/window.innerHeight)*2+1;this.mouseCoordinates={x:t,y:window.innerWidth>450?n:0}})}onMouse(){document.addEventListener("mousemove",e=>{const t=e.clientX/window.innerWidth*2-1,n=-(e.clientY/window.innerHeight)*2+1;this.mouseCoordinates={x:t,y:n}})}get viewport(){const e=window.innerWidth,t=window.innerHeight,n=e/t;return{width:e,height:t,aspectRatio:n}}createScene(){this.scene=new Fg}createCamera(){const t=180*(2*Math.atan(window.innerHeight/2/1e3))/Math.PI;this.camera=new Qt(t,this.viewport.aspectRatio,1,1e3),this.camera.position.set(0,0,1e3)}createMesh(){const e=new uv(this.images[0],this.scene);this.meshItems.push(e);const t=new fv(this.images[1],this.scene);this.meshItems.push(t);const n=new gv(this.images[2],this.scene);this.meshItems.push(n);const i=new xv(this.images[3],this.scene);this.meshItems.push(i);const r=new bv(this.images[4],this.scene);this.meshItems.push(r);const o=new Tv(this.images[5],this.scene);this.meshItems.push(o);const s=new Cv(this.images[6],this.scene);this.meshItems.push(s);const l=new Dv(this.images[7],this.scene);this.meshItems.push(l);const u=new zv(this.images[8],this.scene);this.meshItems.push(u);const c=new kv(this.images[9],this.scene);this.meshItems.push(c);const d=new Gv(this.images[10],this.scene);this.meshItems.push(d);const h=new $v(this.images[11],this.scene);this.meshItems.push(h);const m=new jv(this.images[12],this.scene);this.meshItems.push(m),this.scene.traverse(g=>{g.isMesh&&this.planeItems.push(g)})}onWindowResize(){document.body.style.height=`${this.scrollable.getBoundingClientRect().height}px`,this.camera.aspect=this.viewport.aspectRatio,this.createCamera(),this.camera.updateProjectionMatrix(),this.renderer.setSize(this.viewport.width,this.viewport.height)}initRenderer(){window.addEventListener("resize",this.onWindowResize.bind(this),!1),this.renderer=new Cu({antialias:!0,alpha:!0}),this.renderer.setSize(this.viewport.width,this.viewport.height),this.renderer.setPixelRatio(window.devicePixelRatio),this.body.appendChild(this.renderer.domElement)}render(){this.smoothScroll(),this.raycaster.setFromCamera(this.mouseCoordinates,this.camera);const e=this.raycaster.intersectObjects(this.planeItems,!0);e.length>0?this.selectMesh=e[0].object:this.selectMesh!==null&&(this.selectMesh=null);const t=this.target-this.current;for(let n=0;n<this.meshItems.length;n++)this.meshItems[n].render(t,this.mouseCoordinates,this.selectMesh,this.camera);this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.render.bind(this))}}new Zv;
