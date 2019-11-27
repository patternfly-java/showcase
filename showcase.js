/*! For license information please see showcase.js.LICENSE */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"images/img_avatar.svg"},function(e,t,n){e.exports=n.p+"images/pf_logo.svg"},function(e,t,n){e.exports=n.p+"images/PF-Masthead-Logo.svg"},function(e,t){!function(){"use strict";var e=window,t=document,n=t.documentElement,r=t.head||t.getElementsByTagName("head")[0]||n;for(var a="",o=t.getElementsByTagName("script"),s=o.length;--s>=0;){var i=o[s],l=i.src.match(/^[^?#]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/);if(l){a=l[1]||"",i.parentNode.removeChild(i);break}}var c=!0,u=[],d=[],h=[];a.replace(/[?&]([^&=]+)=([^&]+)/g,(function(e,t,n){n=decodeURIComponent(n),"autorun"==(t=decodeURIComponent(t))?c=!/^[0fn]/i.test(n):"lang"==t?u.push(n):"skin"==t?d.push(n):"callback"==t&&h.push(n)}));for(var m="https://cdn.rawgit.com/google/code-prettify/master/loader",f=(s=0,u.length);s<f;++s)!function(e){var n=t.createElement("script");n.onload=n.onerror=n.onreadystatechange=function(){!n||n.readyState&&!/loaded|complete/.test(n.readyState)||(n.onerror=n.onload=n.onreadystatechange=null,--g,p(),n.parentNode&&n.parentNode.removeChild(n),n=null)},n.type="text/javascript",n.src=m+"/lang-"+encodeURIComponent(u[s])+".js",r.insertBefore(n,r.firstChild)}(u[s]);var g=u.length;function p(){g||e.setTimeout(w,0)}var y=[];for(s=0,f=d.length;s<f;++s)y.push(m+"/skins/"+encodeURIComponent(d[s])+".css");y.push(m+"/prettify.css"),function(e){var n=e.length;!function a(o){if(o!==n){var s=t.createElement("link");s.rel="stylesheet",s.type="text/css",o+1<n&&(s.error=s.onerror=function(){a(o+1)}),s.href=e[o],r.appendChild(s)}}(0)}(y);var v=function(){var e;return window.PR_SHOULD_USE_CONTINUATION=!0,function(){var t=window,n=["break,continue,do,else,for,if,return,while"],r=[[n,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],a=[r,"alignas,alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],o=[r,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],s=[r,"abstract,add,alias,as,ascending,async,await,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,get,global,group,implicit,in,interface,internal,into,is,join,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,remove,sbyte,sealed,select,set,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,value,var,virtual,where,yield"],i=[r,"abstract,async,await,constructor,debugger,enum,eval,export,function,get,implements,instanceof,interface,let,null,set,undefined,var,with,yield,Infinity,NaN"],l="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",c=[n,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],u=[n,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],d=[n,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],h=/^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,m="str",f="kwd",g="com",p="typ",y="lit",v="pun",w="pln",b="src",x="(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*";function S(e,t,n,r,a){if(n){var o={sourceNode:e,pre:1,langExtension:null,numberLines:null,sourceCode:n,spans:null,basePos:t,decorations:null};r(o),a.push.apply(a,o.decorations)}}var C=/\S/;function M(e){for(var t=void 0,n=e.firstChild;n;n=n.nextSibling){var r=n.nodeType;t=1===r?t?e:n:3===r&&C.test(n.nodeValue)?e:t}return t===e?void 0:t}function T(e,t){var n,r={};!function(){for(var a=e.concat(t),o=[],s={},i=0,l=a.length;i<l;++i){var c=a[i],u=c[3];if(u)for(var d=u.length;--d>=0;)r[u.charAt(d)]=c;var h=c[1],m=""+h;s.hasOwnProperty(m)||(o.push(h),s[m]=null)}o.push(/[\0-\uffff]/),n=function(e){for(var t=0,n=!1,r=!1,a=0,o=e.length;a<o;++a){if((h=e[a]).ignoreCase)r=!0;else if(/[a-z]/i.test(h.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){n=!0,r=!1;break}}var s={b:8,t:9,n:10,v:11,f:12,r:13};function i(e){var t=e.charCodeAt(0);if(92!==t)return t;var n=e.charAt(1);return(t=s[n])||("0"<=n&&n<="7"?parseInt(e.substring(1),8):"u"===n||"x"===n?parseInt(e.substring(2),16):e.charCodeAt(1))}function l(e){if(e<32)return(e<16?"\\x0":"\\x")+e.toString(16);var t=String.fromCharCode(e);return"\\"===t||"-"===t||"]"===t||"^"===t?"\\"+t:t}function c(e){var t=e.substring(1,e.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),n=[],r="^"===t[0],a=["["];r&&a.push("^");for(var o=r?1:0,s=t.length;o<s;++o){var c=t[o];if(/\\[bdsw]/i.test(c))a.push(c);else{var u,d=i(c);o+2<s&&"-"===t[o+1]?(u=i(t[o+2]),o+=2):u=d,n.push([d,u]),u<65||d>122||(u<65||d>90||n.push([32|Math.max(65,d),32|Math.min(u,90)]),u<97||d>122||n.push([-33&Math.max(97,d),-33&Math.min(u,122)]))}}n.sort((function(e,t){return e[0]-t[0]||t[1]-e[1]}));var h=[],m=[];for(o=0;o<n.length;++o){(f=n[o])[0]<=m[1]+1?m[1]=Math.max(m[1],f[1]):h.push(m=f)}for(o=0;o<h.length;++o){var f=h[o];a.push(l(f[0])),f[1]>f[0]&&(f[1]+1>f[0]&&a.push("-"),a.push(l(f[1])))}return a.push("]"),a.join("")}function u(e){for(var r=e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),a=r.length,o=[],s=0,i=0;s<a;++s){if("("===(d=r[s]))++i;else if("\\"===d.charAt(0)){(u=+d.substring(1))&&(u<=i?o[u]=-1:r[s]=l(u))}}for(s=1;s<o.length;++s)-1===o[s]&&(o[s]=++t);for(s=0,i=0;s<a;++s){if("("===(d=r[s]))o[++i]||(r[s]="(?:");else if("\\"===d.charAt(0)){var u;(u=+d.substring(1))&&u<=i&&(r[s]="\\"+o[u])}}for(s=0;s<a;++s)"^"===r[s]&&"^"!==r[s+1]&&(r[s]="");if(e.ignoreCase&&n)for(s=0;s<a;++s){var d,h=(d=r[s]).charAt(0);d.length>=2&&"["===h?r[s]=c(d):"\\"!==h&&(r[s]=d.replace(/[a-zA-Z]/g,(function(e){var t=e.charCodeAt(0);return"["+String.fromCharCode(-33&t,32|t)+"]"})))}return r.join("")}var d=[];for(a=0,o=e.length;a<o;++a){var h;if((h=e[a]).global||h.multiline)throw new Error(""+h);d.push("(?:"+u(h)+")")}return new RegExp(d.join("|"),r?"gi":"g")}(o)}();var a=t.length,o=function(e){for(var s=e.sourceCode,i=e.basePos,l=e.sourceNode,c=[i,w],u=0,d=s.match(n)||[],h={},m=0,f=d.length;m<f;++m){var g,p=d[m],y=h[p],v=void 0;if("string"==typeof y)g=!1;else{var x=r[p.charAt(0)];if(x)v=p.match(x[1]),y=x[0];else{for(var C=0;C<a;++C)if(x=t[C],v=p.match(x[1])){y=x[0];break}v||(y=w)}!(g=y.length>=5&&"lang-"===y.substring(0,5))||v&&"string"==typeof v[1]||(g=!1,y=b),g||(h[p]=y)}var M=u;if(u+=p.length,g){var T=v[1],N=p.indexOf(T),E=N+T.length;v[2]&&(N=(E=p.length-v[2].length)-T.length);var A=y.substring(5);S(l,i+M,p.substring(0,N),o,c),S(l,i+M+N,T,D(A,T),c),S(l,i+M+E,p.substring(E),o,c)}else c.push(i+M,y)}e.decorations=c};return o}function N(e){var t=[],n=[];e.tripleQuotedStrings?t.push([m,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):e.multiLineStrings?t.push([m,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):t.push([m,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),e.verbatimStrings&&n.push([m,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var r=e.hashComments;r&&(e.cStyleComments?(r>1?t.push([g,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):t.push([g,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),n.push([m,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):t.push([g,/^#[^\r\n]*/,null,"#"])),e.cStyleComments&&(n.push([g,/^\/\/[^\r\n]*/,null]),n.push([g,/^\/\*[\s\S]*?(?:\*\/|$)/,null]));var a=e.regexLiterals;if(a){var o=a>1?"":"\n\r",s=o?".":"[\\S\\s]",i="/(?=[^/*"+o+"])(?:[^/\\x5B\\x5C"+o+"]|\\x5C"+s+"|\\x5B(?:[^\\x5C\\x5D"+o+"]|\\x5C"+s+")*(?:\\x5D|$))+/";n.push(["lang-regex",RegExp("^"+x+"("+i+")")])}var l=e.types;l&&n.push([p,l]);var c=(""+e.keywords).replace(/^ | $/g,"");c.length&&n.push([f,new RegExp("^(?:"+c.replace(/[\s,]+/g,"|")+")\\b"),null]),t.push([w,/^\s+/,null," \r\n\t "]);var u="^.[^\\s\\w.$@'\"`/\\\\]*";return e.regexLiterals&&(u+="(?!s*/)"),n.push([y,/^@[a-z_$][a-z_$@0-9]*/i,null],[p,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[w,/^[a-z_$][a-z_$@0-9]*/i,null],[y,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[w,/^\\[\s\S]?/,null],[v,new RegExp(u),null]),T(t,n)}var E=N({keywords:[a,s,o,i,l,c,u,d],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0});function A(e,t,n){for(var r=/(?:^|\s)nocode(?:\s|$)/,a=/\r\n?|\n/,o=e.ownerDocument,s=o.createElement("li");e.firstChild;)s.appendChild(e.firstChild);var i=[s];function l(e){var t=e.nodeType;if(1!=t||r.test(e.className)){if((3==t||4==t)&&n){var s=e.nodeValue,i=s.match(a);if(i){var u=s.substring(0,i.index);e.nodeValue=u;var d=s.substring(i.index+i[0].length);if(d)e.parentNode.insertBefore(o.createTextNode(d),e.nextSibling);c(e),u||e.parentNode.removeChild(e)}}}else if("br"===e.nodeName)c(e),e.parentNode&&e.parentNode.removeChild(e);else for(var h=e.firstChild;h;h=h.nextSibling)l(h)}function c(e){for(;!e.nextSibling;)if(!(e=e.parentNode))return;for(var t,n=function e(t,n){var r=n?t.cloneNode(!1):t,a=t.parentNode;if(a){var o=e(a,1),s=t.nextSibling;o.appendChild(r);for(var i=s;i;i=s)s=i.nextSibling,o.appendChild(i)}return r}(e.nextSibling,0);(t=n.parentNode)&&1===t.nodeType;)n=t;i.push(n)}for(var u=0;u<i.length;++u)l(i[u]);t===(0|t)&&i[0].setAttribute("value",t);var d=o.createElement("ol");d.className="linenums";for(var h=Math.max(0,t-1|0)||0,m=(u=0,i.length);u<m;++u)(s=i[u]).className="L"+(u+h)%10,s.firstChild||s.appendChild(o.createTextNode(" ")),d.appendChild(s);e.appendChild(d)}var k={};function _(e,n){for(var r=n.length;--r>=0;){var a=n[r];k.hasOwnProperty(a)?t.console&&console.warn("cannot override language handler %s",a):k[a]=e}}function D(e,t){return e&&k.hasOwnProperty(e)||(e=/^\s*</.test(t)?"default-markup":"default-code"),k[e]}function R(e){var n,r,a,o,s,i,l,c=e.langExtension;try{var u=(n=e.sourceNode,r=e.pre,a=/(?:^|\s)nocode(?:\s|$)/,o=[],s=0,i=[],l=0,function e(t){var n=t.nodeType;if(1==n){if(a.test(t.className))return;for(var c=t.firstChild;c;c=c.nextSibling)e(c);var u=t.nodeName.toLowerCase();"br"!==u&&"li"!==u||(o[l]="\n",i[l<<1]=s++,i[l++<<1|1]=t)}else if(3==n||4==n){var d=t.nodeValue;d.length&&(d=r?d.replace(/\r\n?/g,"\n"):d.replace(/[ \t\r\n]+/g," "),o[l]=d,i[l<<1]=s,s+=d.length,i[l++<<1|1]=t)}}(n),{sourceCode:o.join("").replace(/\n$/,""),spans:i}),d=u.sourceCode;e.sourceCode=d,e.spans=u.spans,e.basePos=0,D(c,d)(e),function(e){var t=/\bMSIE\s(\d+)/.exec(navigator.userAgent);t=t&&+t[1]<=8;var n,r,a=/\n/g,o=e.sourceCode,s=o.length,i=0,l=e.spans,c=l.length,u=0,d=e.decorations,h=d.length,m=0;for(d[h]=s,r=n=0;r<h;)d[r]!==d[r+2]?(d[n++]=d[r++],d[n++]=d[r++]):r+=2;for(h=n,r=n=0;r<h;){for(var f=d[r],g=d[r+1],p=r+2;p+2<=h&&d[p+1]===g;)p+=2;d[n++]=f,d[n++]=g,r=p}h=d.length=n;var y=e.sourceNode,v="";y&&(v=y.style.display,y.style.display="none");try{for(;u<c;){l[u];var w,b=l[u+2]||s,x=d[m+2]||s,S=(p=Math.min(b,x),l[u+1]);if(1!==S.nodeType&&(w=o.substring(i,p))){t&&(w=w.replace(a,"\r")),S.nodeValue=w;var C=S.ownerDocument,M=C.createElement("span");M.className=d[m+1];var T=S.parentNode;T.replaceChild(M,S),M.appendChild(S),i<b&&(l[u+1]=S=C.createTextNode(o.substring(p,b)),T.insertBefore(S,M.nextSibling))}(i=p)>=b&&(u+=2),i>=x&&(m+=2)}}finally{y&&(y.style.display=v)}}(e)}catch(e){t.console&&console.log(e&&e.stack||e)}}function P(e,t,n){var r=n||!1,a=t||null,o=document.createElement("div");return o.innerHTML="<pre>"+e+"</pre>",o=o.firstChild,r&&A(o,r,!0),R({langExtension:a,numberLines:r,sourceNode:o,pre:1,sourceCode:null,basePos:null,spans:null,decorations:null}),o.innerHTML}function L(e,n){var r=n||document.body,a=r.ownerDocument||document;function o(e){return r.getElementsByTagName(e)}for(var s=[o("pre"),o("code"),o("xmp")],i=[],l=0;l<s.length;++l)for(var c=0,u=s[l].length;c<u;++c)i.push(s[l][c]);s=null;var d=Date;d.now||(d={now:function(){return+new Date}});var h=0,m=/\blang(?:uage)?-([\w.]+)(?!\S)/,f=/\bprettyprint\b/,g=/\bprettyprinted\b/,p=/pre|xmp/i,y=/^code$/i,v=/^(?:pre|code|xmp)$/i,w={};!function n(){for(var r=t.PR_SHOULD_USE_CONTINUATION?d.now()+250:1/0;h<i.length&&d.now()<r;h++){for(var o=i[h],s=w,l=o;l=l.previousSibling;){var c=l.nodeType,u=(7===c||8===c)&&l.nodeValue;if(u?!/^\??prettify\b/.test(u):3!==c||/\S/.test(l.nodeValue))break;if(u){s={},u.replace(/\b(\w+)=([\w:.%+-]+)/g,(function(e,t,n){s[t]=n}));break}}var b=o.className;if((s!==w||f.test(b))&&!g.test(b)){for(var x=!1,S=o.parentNode;S;S=S.parentNode){var C=S.tagName;if(v.test(C)&&S.className&&f.test(S.className)){x=!0;break}}if(!x){o.className+=" prettyprinted";var T,N,E=s.lang;if(!E)!(E=b.match(m))&&(T=M(o))&&y.test(T.tagName)&&(E=T.className.match(m)),E&&(E=E[1]);if(p.test(o.tagName))N=1;else{var k=o.currentStyle,_=a.defaultView,D=k?k.whiteSpace:_&&_.getComputedStyle?_.getComputedStyle(o,null).getPropertyValue("white-space"):0;N=D&&"pre"===D.substring(0,3)}var P=s.linenums;(P="true"===P||+P)||(P=!!(P=b.match(/\blinenums\b(?::(\d+))?/))&&(!P[1]||!P[1].length||+P[1])),P&&A(o,P,N),R({langExtension:E,sourceNode:o,numberLines:P,pre:N,sourceCode:null,basePos:null,spans:null,decorations:null})}}}h<i.length?t.setTimeout(n,250):"function"==typeof e&&e()}()}_(E,["default-code"]),_(T([],[[w,/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],[g,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[v,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),_(T([[w,/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[v,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),_(T([],[["atv",/^[\s\S]+/]]),["uq.val"]),_(N({keywords:a,hashComments:!0,cStyleComments:!0,types:h}),["c","cc","cpp","cxx","cyc","m"]),_(N({keywords:"null,true,false"}),["json"]),_(N({keywords:s,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:h}),["cs"]),_(N({keywords:o,cStyleComments:!0}),["java"]),_(N({keywords:d,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),_(N({keywords:c,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),_(N({keywords:l,hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),_(N({keywords:u,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),_(N({keywords:i,cStyleComments:!0,regexLiterals:!0}),["javascript","js","ts","typescript"]),_(N({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),_(T([],[[m,/^[\s\S]+/]]),["regex"]);var I=t.PR={createSimpleLexer:T,registerLangHandler:_,sourceDecorator:N,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:g,PR_DECLARATION:"dec",PR_KEYWORD:f,PR_LITERAL:y,PR_NOCODE:"nocode",PR_PLAIN:w,PR_PUNCTUATION:v,PR_SOURCE:b,PR_STRING:m,PR_TAG:"tag",PR_TYPE:p,prettyPrintOne:P,prettyPrint:e=e=L},$=t.define;"function"==typeof $&&$.amd&&$("google-code-prettify",[],(function(){return I}))}(),e}();function w(){c&&function(r){var a=t.addEventListener,o=!1,s=!0,i=a?"addEventListener":"attachEvent",l=a?"removeEventListener":"detachEvent",c=a?"":"on",u=function(n){"readystatechange"==n.type&&"complete"!=t.readyState||(("load"==n.type?e:t)[l](c+n.type,u,!1),!o&&(o=!0)&&r.call(e,n.type||n))},d=function(){try{n.doScroll("left")}catch(t){return void e.setTimeout(d,50)}u("poll")};if("complete"==t.readyState)r.call(e,"lazy");else{if(t.createEventObject&&n.doScroll){try{s=!e.frameElement}catch(e){}s&&d()}t[i](c+"DOMContentLoaded",u,!1),t[i](c+"readystatechange",u,!1),e[i](c+"load",u,!1)}}((function(){var t=h.length;v(t?function(){for(var n=0;n<t;++n)!function(t){e.setTimeout((function(){e.exports[h[t]].apply(e,arguments)}),0)}(n)}:void 0)}))}p()}()},function(e,t,n){},function(e,t,n){e.exports=n.p+"favicon.ico"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0),n(1),n(2),n(3),n(4),n(5),n(6),n(7),n(8);const r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["January","February","March","April","May","June","July","August","September","October","November","December"];function o(e){return"0".concat(e).slice(-2)}function s(e,t){const n=e.getDay(),i=e.getDate(),l=e.getMonth(),c=e.getFullYear(),u=e.getHours(),d=e.getMinutes(),h=e.getSeconds();return t.replace(/%([%aAbBcdeHIlmMpPSwyYZz])/g,(function(t){let m;switch(t[1]){case"%":return"%";case"a":return r[n].slice(0,3);case"A":return r[n];case"b":return a[l].slice(0,3);case"B":return a[l];case"c":return e.toString();case"d":return o(i);case"e":return String(i);case"H":return o(u);case"I":return o(s(e,"%l"));case"l":return 0===u||12===u?String(12):String((u+12)%12);case"m":return o(l+1);case"M":return o(d);case"p":return u>11?"PM":"AM";case"P":return u>11?"pm":"am";case"S":return o(h);case"w":return String(n);case"y":return o(c%100);case"Y":return String(c);case"Z":return(m=e.toString().match(/\((\w+)\)$/))?m[1]:"";case"z":return(m=e.toString().match(/\w([+-]\d\d\d\d) /))?m[1]:""}return""}))}function i(e){let t;return function(){if(t)return t;if("Intl"in window)try{return t=new Intl.DateTimeFormat(void 0,e)}catch(e){if(!(e instanceof RangeError))throw e}}}let l=null;const c=i({day:"numeric",month:"short"});function u(){if(null!==l)return l;const e=c();if(e){const t=e.format(new Date(0));return l=!!t.match(/^\d/)}return!1}let d=null;const h=i({day:"numeric",month:"short",year:"numeric"});function m(e){const t=e.closest("[lang]");return t instanceof HTMLElement&&t.lang?t.lang:"default"}const f=new WeakMap;class g extends HTMLElement{static get observedAttributes(){return["datetime","day","format","lang","hour","minute","month","second","title","weekday","year"]}connectedCallback(){const e=this.getFormattedTitle();e&&!this.hasAttribute("title")&&this.setAttribute("title",e);const t=this.getFormattedDate();t&&(this.textContent=t)}attributeChangedCallback(e,t,n){if("datetime"===e){const e=Date.parse(n);isNaN(e)?f.delete(this):f.set(this,new Date(e))}const r=this.getFormattedTitle();r&&!this.hasAttribute("title")&&this.setAttribute("title",r);const a=this.getFormattedDate();a&&(this.textContent=a)}get date(){return f.get(this)}getFormattedTitle(){const e=this.date;if(!e)return;const t=p();if(t)return t.format(e);try{return e.toLocaleString()}catch(t){if(t instanceof RangeError)return e.toString();throw t}}getFormattedDate(){}}const p=i({day:"numeric",month:"short",year:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"}),y=new WeakMap;class v extends g{attributeChangedCallback(e,t,n){"hour"!==e&&"minute"!==e&&"second"!==e&&"time-zone-name"!==e||y.delete(this),super.attributeChangedCallback(e,t,n)}getFormattedDate(){const e=this.date;if(!e)return;const t=function(e,t){const n={weekday:{short:"%a",long:"%A"},day:{numeric:"%e","2-digit":"%d"},month:{short:"%b",long:"%B"},year:{numeric:"%Y","2-digit":"%y"}};let r=u()?"weekday day month year":"weekday month day, year";for(const t in n){const a=n[t][e.getAttribute(t)];r=r.replace(t,a||"")}return r=r.replace(/(\s,)|(,\s$)/,""),s(t,r).replace(/\s+/," ").trim()}(this,e)||"",n=function(e,t){const n={},r=e.getAttribute("hour");"numeric"!==r&&"2-digit"!==r||(n.hour=r);const a=e.getAttribute("minute");"numeric"!==a&&"2-digit"!==a||(n.minute=a);const o=e.getAttribute("second");"numeric"!==o&&"2-digit"!==o||(n.second=o);const l=e.getAttribute("time-zone-name");"short"!==l&&"long"!==l||(n.timeZoneName=l);if(0===Object.keys(n).length)return;let c=y.get(e);c||(c=i(n),y.set(e,c));const u=c();if(u)return u.format(t);{const e=n.second?"%H:%M:%S":"%H:%M";return s(t,e)}}(this,e)||"";return"".concat(t," ").concat(n).trim()}}window.customElements.get("local-time")||(window.LocalTimeElement=v,window.customElements.define("local-time",v));class w{constructor(e,t){this.date=e,this.locale=t}toString(){const e=this.timeElapsed();if(e)return e;{const e=this.timeAhead();return e||"on ".concat(this.formatDate())}}timeElapsed(){const e=(new Date).getTime()-this.date.getTime(),t=Math.round(e/1e3),n=Math.round(t/60),r=Math.round(n/60),a=Math.round(r/24);return e>=0&&a<30?this.timeAgoFromMs(e):null}timeAhead(){const e=this.date.getTime()-(new Date).getTime(),t=Math.round(e/1e3),n=Math.round(t/60),r=Math.round(n/60),a=Math.round(r/24);return e>=0&&a<30?this.timeUntil():null}timeAgo(){const e=(new Date).getTime()-this.date.getTime();return this.timeAgoFromMs(e)}timeAgoFromMs(e){const t=Math.round(e/1e3),n=Math.round(t/60),r=Math.round(n/60),a=Math.round(r/24),o=Math.round(a/30),s=Math.round(o/12);return e<0?b(this.locale,0,"second"):t<10?b(this.locale,0,"second"):t<45?b(this.locale,-t,"second"):t<90?b(this.locale,-n,"minute"):n<45?b(this.locale,-n,"minute"):n<90?b(this.locale,-r,"hour"):r<24?b(this.locale,-r,"hour"):r<36?b(this.locale,-a,"day"):a<30?b(this.locale,-a,"day"):o<12?b(this.locale,-o,"month"):b(this.locale,-s,"year")}microTimeAgo(){const e=(new Date).getTime()-this.date.getTime(),t=Math.round(e/1e3),n=Math.round(t/60),r=Math.round(n/60),a=Math.round(r/24),o=Math.round(a/30),s=Math.round(o/12);return n<1?"1m":n<60?"".concat(n,"m"):r<24?"".concat(r,"h"):a<365?"".concat(a,"d"):"".concat(s,"y")}timeUntil(){const e=this.date.getTime()-(new Date).getTime();return this.timeUntilFromMs(e)}timeUntilFromMs(e){const t=Math.round(e/1e3),n=Math.round(t/60),r=Math.round(n/60),a=Math.round(r/24),o=Math.round(a/30),s=Math.round(o/12);return o>=18?b(this.locale,s,"year"):o>=12?b(this.locale,s,"year"):a>=45?b(this.locale,o,"month"):a>=30?b(this.locale,o,"month"):r>=36?b(this.locale,a,"day"):r>=24?b(this.locale,a,"day"):n>=90?b(this.locale,r,"hour"):n>=45?b(this.locale,r,"hour"):t>=90?b(this.locale,n,"minute"):t>=45?b(this.locale,n,"minute"):b(this.locale,t>=10?t:0,"second")}microTimeUntil(){const e=this.date.getTime()-(new Date).getTime(),t=Math.round(e/1e3),n=Math.round(t/60),r=Math.round(n/60),a=Math.round(r/24),o=Math.round(a/30),s=Math.round(o/12);return a>=365?"".concat(s,"y"):r>=24?"".concat(a,"d"):n>=60?"".concat(r,"h"):n>1?"".concat(n,"m"):"1m"}formatDate(){let e=u()?"%e %b":"%b %e";var t;return t=this.date,(new Date).getUTCFullYear()!==t.getUTCFullYear()&&(e+=function(){if(null!==d)return d;const e=h();if(e){const t=e.format(new Date(0));return d=!!t.match(/\d,/)}return!0}()?", %Y":" %Y"),s(this.date,e)}formatTime(){const e=x();return e?e.format(this.date):s(this.date,"%l:%M%P")}}function b(e,t,n){const r=function(e,t){if("Intl"in window&&"RelativeTimeFormat"in window.Intl)try{return new Intl.RelativeTimeFormat(e,t)}catch(e){if(!(e instanceof RangeError))throw e}}(e,{numeric:"auto"});return r?r.format(t,n):function(e,t){if(0===e)switch(t){case"year":case"quarter":case"month":case"week":return"this ".concat(t);case"day":return"today";case"hour":case"minute":return"in 0 ".concat(t,"s");case"second":return"now"}else if(1===e)switch(t){case"year":case"quarter":case"month":case"week":return"next ".concat(t);case"day":return"tomorrow";case"hour":case"minute":case"second":return"in 1 ".concat(t)}else if(-1===e)switch(t){case"year":case"quarter":case"month":case"week":return"last ".concat(t);case"day":return"yesterday";case"hour":case"minute":case"second":return"1 ".concat(t," ago")}else if(e>1)switch(t){case"year":case"quarter":case"month":case"week":case"day":case"hour":case"minute":case"second":return"in ".concat(e," ").concat(t,"s")}else if(e<-1)switch(t){case"year":case"quarter":case"month":case"week":case"day":case"hour":case"minute":case"second":return"".concat(-e," ").concat(t,"s ago")}throw new RangeError("Invalid unit argument for format() '".concat(t,"'"))}(t,n)}const x=i({hour:"numeric",minute:"2-digit"});class S extends g{getFormattedDate(){const e=this.date;if(e)return new w(e,m(this)).toString()}connectedCallback(){C.push(this),M||(T(),M=setInterval(T,6e4)),super.connectedCallback()}disconnectedCallback(){const e=C.indexOf(this);-1!==e&&C.splice(e,1),C.length||M&&(clearInterval(M),M=null)}}const C=[];let M;function T(){let e,t,n;for(t=0,n=C.length;t<n;t++)(e=C[t]).textContent=e.getFormattedDate()||""}window.customElements.get("relative-time")||(window.RelativeTimeElement=S,window.customElements.define("relative-time",S));class N extends S{getFormattedDate(){const e=this.getAttribute("format"),t=this.date;if(t)return"micro"===e?new w(t,m(this)).microTimeAgo():new w(t,m(this)).timeAgo()}}window.customElements.get("time-ago")||(window.TimeAgoElement=N,window.customElements.define("time-ago",N));class E extends S{getFormattedDate(){const e=this.getAttribute("format"),t=this.date;if(t)return"micro"===e?new w(t,m(this)).microTimeUntil():new w(t,m(this)).timeUntil()}}window.customElements.get("time-until")||(window.TimeUntilElement=E,window.customElements.define("time-until",E));n(9),n(10)}]);
//# sourceMappingURL=showcase.js.map