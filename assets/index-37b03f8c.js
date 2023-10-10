(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();window.PR_SHOULD_USE_CONTINUATION=!0;(function(){var r=window,e=["break,continue,do,else,for,if,return,while"],t=[e,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],a=[t,"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],n=[a,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],o=[a,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],s=[o,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],i="all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",d=[a,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],b="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",h=[e,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],F=[e,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],R=[e,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],J=[e,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],z=[n,s,d,b,h,F,J],Y=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,k="str",Z="kwd",ne="com",ge="typ",ce="lit",se="pun",ie="pln",De="tag",de="dec",xe="src",he="atn",ye="atv",je="nocode",we="(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*";function Ne(u){for(var g=0,v=!1,x=!1,j=0,E=u.length;j<E;++j){var S=u[j];if(S.ignoreCase)x=!0;else if(/[a-z]/i.test(S.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){v=!0,x=!1;break}}var W={b:8,t:9,n:10,v:11,f:12,r:13};function I(D){var l=D.charCodeAt(0);if(l!==92)return l;var T=D.charAt(1);return l=W[T],l||("0"<=T&&T<="7"?parseInt(D.substring(1),8):T==="u"||T==="x"?parseInt(D.substring(2),16):D.charCodeAt(1))}function L(D){if(D<32)return(D<16?"\\x0":"\\x")+D.toString(16);var l=String.fromCharCode(D);return l==="\\"||l==="-"||l==="]"||l==="^"?"\\"+l:l}function N(D){var l=D.substring(1,D.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),T=[],A=l[0]==="^",c=["["];A&&c.push("^");for(var y=A?1:0,O=l.length;y<O;++y){var K=l[y];if(/\\[bdsw]/i.test(K))c.push(K);else{var P=I(K),B;y+2<O&&l[y+1]==="-"?(B=I(l[y+2]),y+=2):B=P,T.push([P,B]),B<65||P>122||(B<65||P>90||T.push([Math.max(65,P)|32,Math.min(B,90)|32]),B<97||P>122||T.push([Math.max(97,P)&-33,Math.min(B,122)&-33]))}}T.sort(function(ee,oe){return ee[0]-oe[0]||oe[1]-ee[1]});for(var H=[],U=[],y=0;y<T.length;++y){var V=T[y];V[0]<=U[1]+1?U[1]=Math.max(U[1],V[1]):H.push(U=V)}for(var y=0;y<H.length;++y){var V=H[y];c.push(L(V[0])),V[1]>V[0]&&(V[1]+1>V[0]&&c.push("-"),c.push(L(V[1])))}return c.push("]"),c.join("")}function G(D){for(var l=D.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),T=l.length,A=[],c=0,y=0;c<T;++c){var O=l[c];if(O==="(")++y;else if(O.charAt(0)==="\\"){var K=+O.substring(1);K&&(K<=y?A[K]=-1:l[c]=L(K))}}for(var c=1;c<A.length;++c)A[c]===-1&&(A[c]=++g);for(var c=0,y=0;c<T;++c){var O=l[c];if(O==="(")++y,A[y]||(l[c]="(?:");else if(O.charAt(0)==="\\"){var K=+O.substring(1);K&&K<=y&&(l[c]="\\"+A[K])}}for(var c=0;c<T;++c)l[c]==="^"&&l[c+1]!=="^"&&(l[c]="");if(D.ignoreCase&&v)for(var c=0;c<T;++c){var O=l[c],P=O.charAt(0);O.length>=2&&P==="["?l[c]=N(O):P!=="\\"&&(l[c]=O.replace(/[a-zA-Z]/g,function(U){var V=U.charCodeAt(0);return"["+String.fromCharCode(V&-33,V|32)+"]"}))}return l.join("")}for(var M=[],j=0,E=u.length;j<E;++j){var S=u[j];if(S.global||S.multiline)throw new Error(""+S);M.push("(?:"+G(S)+")")}return new RegExp(M.join("|"),x?"gi":"g")}function Re(u,g){var v=/(?:^|\s)nocode(?:\s|$)/,x=[],j=0,E=[],S=0;function W(I){var L=I.nodeType;if(L==1){if(v.test(I.className))return;for(var N=I.firstChild;N;N=N.nextSibling)W(N);var G=I.nodeName.toLowerCase();(G==="br"||G==="li")&&(x[S]=`
`,E[S<<1]=j++,E[S++<<1|1]=I)}else if(L==3||L==4){var M=I.nodeValue;M.length&&(g?M=M.replace(/\r\n?/g,`
`):M=M.replace(/[ \t\r\n]+/g," "),x[S]=M,E[S<<1]=j,j+=M.length,E[S++<<1|1]=I)}}return W(u),{sourceCode:x.join("").replace(/\n$/,""),spans:E}}function ve(u,g,v,x){if(g){var j={sourceCode:g,basePos:u};v(j),x.push.apply(x,j.decorations)}}var ke=/\S/;function pe(u){for(var g=void 0,v=u.firstChild;v;v=v.nextSibling){var x=v.nodeType;g=x===1?g?u:v:x===3&&ke.test(v.nodeValue)?u:g}return g===u?void 0:g}function re(u,g){var v={},x;(function(){for(var S=u.concat(g),W=[],I={},L=0,N=S.length;L<N;++L){var G=S[L],M=G[3];if(M)for(var D=M.length;--D>=0;)v[M.charAt(D)]=G;var l=G[1],T=""+l;I.hasOwnProperty(T)||(W.push(l),I[T]=null)}W.push(/[\0-\uffff]/),x=Ne(W)})();var j=g.length,E=function(S){for(var W=S.sourceCode,I=S.basePos,L=[I,ie],N=0,G=W.match(x)||[],M={},D=0,l=G.length;D<l;++D){var T=G[D],A=M[T],c=void 0,y;if(typeof A=="string")y=!1;else{var O=v[T.charAt(0)];if(O)c=T.match(O[1]),A=O[0];else{for(var K=0;K<j;++K)if(O=g[K],c=T.match(O[1]),c){A=O[0];break}c||(A=ie)}y=A.length>=5&&A.substring(0,5)==="lang-",y&&!(c&&typeof c[1]=="string")&&(y=!1,A=xe),y||(M[T]=A)}var P=N;if(N+=T.length,!y)L.push(I+P,A);else{var B=c[1],H=T.indexOf(B),U=H+B.length;c[2]&&(U=T.length-c[2].length,H=U-B.length);var V=A.substring(5);ve(I+P,T.substring(0,H),E,L),ve(I+P+H,B,w(V,B),L),ve(I+P+U,T.substring(U),E,L)}}S.decorations=L};return E}function $(u){var g=[],v=[];u.tripleQuotedStrings?g.push([k,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,`'"`]):u.multiLineStrings?g.push([k,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):g.push([k,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,`"'`]),u.verbatimStrings&&v.push([k,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var x=u.hashComments;x&&(u.cStyleComments?(x>1?g.push([ne,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):g.push([ne,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),v.push([k,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):g.push([ne,/^#[^\r\n]*/,null,"#"])),u.cStyleComments&&(v.push([ne,/^\/\/[^\r\n]*/,null]),v.push([ne,/^\/\*[\s\S]*?(?:\*\/|$)/,null]));var j=u.regexLiterals;if(j){var E=j>1?"":`
\r`,S=E?".":"[\\S\\s]",W="/(?=[^/*"+E+"])(?:[^/\\x5B\\x5C"+E+"]|\\x5C"+S+"|\\x5B(?:[^\\x5C\\x5D"+E+"]|\\x5C"+S+")*(?:\\x5D|$))+/";v.push(["lang-regex",RegExp("^"+we+"("+W+")")])}var I=u.types;I&&v.push([ge,I]);var L=(""+u.keywords).replace(/^ | $/g,"");L.length&&v.push([Z,new RegExp("^(?:"+L.replace(/[\s,]+/g,"|")+")\\b"),null]),g.push([ie,/^\s+/,null,` \r
	 `]);var N="^.[^\\s\\w.$@'\"`/\\\\]*";return u.regexLiterals&&(N+="(?!s*/)"),v.push([ce,/^@[a-z_$][a-z_$@0-9]*/i,null],[ge,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[ie,/^[a-z_$][a-z_$@0-9]*/i,null],[ce,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[ie,/^\\[\s\S]?/,null],[se,new RegExp(N),null]),re(g,v)}var Ee=$({keywords:z,hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0});function C(u,g,v){for(var x=/(?:^|\s)nocode(?:\s|$)/,j=/\r\n?|\n/,E=u.ownerDocument,S=E.createElement("li");u.firstChild;)S.appendChild(u.firstChild);var W=[S];function I(l){var T=l.nodeType;if(T==1&&!x.test(l.className))if(l.nodeName==="br")L(l),l.parentNode&&l.parentNode.removeChild(l);else for(var A=l.firstChild;A;A=A.nextSibling)I(A);else if((T==3||T==4)&&v){var c=l.nodeValue,y=c.match(j);if(y){var O=c.substring(0,y.index);l.nodeValue=O;var K=c.substring(y.index+y[0].length);if(K){var P=l.parentNode;P.insertBefore(E.createTextNode(K),l.nextSibling)}L(l),O||l.parentNode.removeChild(l)}}}function L(l){for(;!l.nextSibling;)if(l=l.parentNode,!l)return;function T(y,O){var K=O?y.cloneNode(!1):y,P=y.parentNode;if(P){var B=T(P,1),H=y.nextSibling;B.appendChild(K);for(var U=H;U;U=H)H=U.nextSibling,B.appendChild(U)}return K}for(var A=T(l.nextSibling,0),c;(c=A.parentNode)&&c.nodeType===1;)A=c;W.push(A)}for(var N=0;N<W.length;++N)I(W[N]);g===(g|0)&&W[0].setAttribute("value",g);var G=E.createElement("ol");G.className="linenums";for(var M=Math.max(0,g-1|0)||0,N=0,D=W.length;N<D;++N)S=W[N],S.className="L"+(N+M)%10,S.firstChild||S.appendChild(E.createTextNode(" ")),G.appendChild(S);u.appendChild(G)}function f(u){var g=/\bMSIE\s(\d+)/.exec(navigator.userAgent);g=g&&+g[1]<=8;var v=/\n/g,x=u.sourceCode,j=x.length,E=0,S=u.spans,W=S.length,I=0,L=u.decorations,N=L.length,G=0;L[N]=j;var M,D;for(D=M=0;D<N;)L[D]!==L[D+2]?(L[M++]=L[D++],L[M++]=L[D++]):D+=2;for(N=M,D=M=0;D<N;){for(var l=L[D],T=L[D+1],A=D+2;A+2<=N&&L[A+1]===T;)A+=2;L[M++]=l,L[M++]=T,D=A}N=L.length=M;var c=u.sourceNode,y;c&&(y=c.style.display,c.style.display="none");try{for(var O=null;I<W;){var K=S[I],P=S[I+2]||j,B=L[G+2]||j,A=Math.min(P,B),H=S[I+1],U;if(H.nodeType!==1&&(U=x.substring(E,A))){g&&(U=U.replace(v,"\r")),H.nodeValue=U;var V=H.ownerDocument,ee=V.createElement("span");ee.className=L[G+1];var oe=H.parentNode;oe.replaceChild(ee,H),ee.appendChild(H),E<P&&(S[I+1]=H=V.createTextNode(x.substring(A,P)),oe.insertBefore(H,ee.nextSibling))}E=A,E>=P&&(I+=2),E>=B&&(G+=2)}}finally{c&&(c.style.display=y)}}var m={};function p(u,g){for(var v=g.length;--v>=0;){var x=g[v];m.hasOwnProperty(x)?r.console&&console.warn("cannot override language handler %s",x):m[x]=u}}function w(u,g){return u&&m.hasOwnProperty(u)||(u=/^\s*</.test(g)?"default-markup":"default-code"),m[u]}p(Ee,["default-code"]),p(re([],[[ie,/^[^<?]+/],[de,/^<!\w[^>]*(?:>|$)/],[ne,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[se,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),p(re([[ie,/^[\s]+/,null,` 	\r
`],[ye,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,`"'`]],[[De,/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],[he,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[se,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),p(re([],[[ye,/^[\s\S]+/]]),["uq.val"]),p($({keywords:n,hashComments:!0,cStyleComments:!0,types:Y}),["c","cc","cpp","cxx","cyc","m"]),p($({keywords:"null,true,false"}),["json"]),p($({keywords:s,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:Y}),["cs"]),p($({keywords:o,cStyleComments:!0}),["java"]),p($({keywords:J,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),p($({keywords:h,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),p($({keywords:b,hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),p($({keywords:F,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),p($({keywords:d,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]),p($({keywords:i,hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),p($({keywords:R,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]),p(re([],[[k,/^[\s\S]+/]]),["regex"]);function _(u){var g=u.langExtension;try{var v=Re(u.sourceNode,u.pre),x=v.sourceCode;u.sourceCode=x,u.spans=v.spans,u.basePos=0,w(g,x)(u),f(u)}catch(j){r.console&&console.log(j&&j.stack||j)}}function Q(u,g,v){var x=document.createElement("div");x.innerHTML="<pre>"+u+"</pre>",x=x.firstChild,v&&C(x,v,!0);var j={langExtension:g,numberLines:v,sourceNode:x,pre:1};return _(j),x.innerHTML}function ue(u,g){var v=g||document.body,x=v.ownerDocument||document;function j(P){return v.getElementsByTagName(P)}for(var E=[j("pre"),j("code"),j("xmp")],S=[],W=0;W<E.length;++W)for(var I=0,L=E[W].length;I<L;++I)S.push(E[W][I]);E=null;var N=Date;N.now||(N={now:function(){return+new Date}});var G=0,M,D=/\blang(?:uage)?-([\w.]+)(?!\S)/,l=/\bprettyprint\b/,T=/\bprettyprinted\b/,A=/pre|xmp/i,c=/^code$/i,y=/^(?:pre|code|xmp)$/i,O={};function K(){for(var P=r.PR_SHOULD_USE_CONTINUATION?N.now()+250:1/0;G<S.length&&N.now()<P;G++){for(var B=S[G],H=O,U=B;U=U.previousSibling;){var V=U.nodeType,ee=(V===7||V===8)&&U.nodeValue;if(ee?!/^\??prettify\b/.test(ee):V!==3||/\S/.test(U.nodeValue))break;if(ee){H={},ee.replace(/\b(\w+)=([\w:.%+-]+)/g,function(Fa,nt,it){H[nt]=it});break}}var oe=B.className;if((H!==O||l.test(oe))&&!T.test(oe)){for(var He=!1,fe=B.parentNode;fe;fe=fe.parentNode){var at=fe.tagName;if(y.test(at)&&fe.className&&l.test(fe.className)){He=!0;break}}if(!He){B.className+=" prettyprinted";var le=H.lang;if(!le){le=oe.match(D);var Me;!le&&(Me=pe(B))&&c.test(Me.tagName)&&(le=Me.className.match(D)),le&&(le=le[1])}var Ae;if(A.test(B.tagName))Ae=1;else{var Ue=B.currentStyle,Oe=x.defaultView,We=Ue?Ue.whiteSpace:Oe&&Oe.getComputedStyle?Oe.getComputedStyle(B,null).getPropertyValue("white-space"):0;Ae=We&&We.substring(0,3)==="pre"}var te=H.linenums;(te=te==="true"||+te)||(te=oe.match(/\blinenums\b(?::(\d+))?/),te=te?te[1]&&te[1].length?+te[1]:!0:!1),te&&C(B,te,Ae),M={langExtension:le,sourceNode:B,numberLines:te,pre:Ae},_(M)}}}G<S.length?setTimeout(K,250):typeof u=="function"&&u()}K()}var Fe=r.PR={createSimpleLexer:re,registerLangHandler:p,sourceDecorator:$,PR_ATTRIB_NAME:he,PR_ATTRIB_VALUE:ye,PR_COMMENT:ne,PR_DECLARATION:de,PR_KEYWORD:Z,PR_LITERAL:ce,PR_NOCODE:je,PR_PLAIN:ie,PR_PUNCTUATION:se,PR_SOURCE:xe,PR_STRING:k,PR_TAG:De,PR_TYPE:ge,prettyPrintOne:r.prettyPrintOne=Q,prettyPrint:r.prettyPrint=ue};typeof define=="function"&&define.amd&&define("google-code-prettify",[],function(){return Fe})})();var rt=globalThis&&globalThis.__classPrivateFieldSet||function(r,e,t,a,n){if(a==="m")throw new TypeError("Private method is not writable");if(a==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?r!==e||!n:!e.has(r))throw new TypeError("Cannot write private member to an object whose class did not declare it");return a==="a"?n.call(r,t):n?n.value=t:e.set(r,t),t},Ke=globalThis&&globalThis.__classPrivateFieldGet||function(r,e,t,a){if(t==="a"&&!a)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?r!==e||!a:!e.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?a:t==="a"?a.call(r):a?a.value:e.get(r)},Te;class ot{formatToParts(e){const t=[];for(const a of e)t.push({type:"element",value:a}),t.push({type:"literal",value:", "});return t.slice(0,-1)}}const st=typeof Intl<"u"&&Intl.ListFormat||ot,dt=[["years","year"],["months","month"],["weeks","week"],["days","day"],["hours","hour"],["minutes","minute"],["seconds","second"],["milliseconds","millisecond"]],lt={minimumIntegerDigits:2};class ct{constructor(e,t={}){Te.set(this,void 0);let a=String(t.style||"short");a!=="long"&&a!=="short"&&a!=="narrow"&&a!=="digital"&&(a="short");let n=a==="digital"?"numeric":a;const o=t.hours||n;n=o==="2-digit"?"numeric":o;const s=t.minutes||n;n=s==="2-digit"?"numeric":s;const i=t.seconds||n;n=i==="2-digit"?"numeric":i;const d=t.milliseconds||n;rt(this,Te,{locale:e,style:a,years:t.years||a==="digital"?"short":a,yearsDisplay:t.yearsDisplay==="always"?"always":"auto",months:t.months||a==="digital"?"short":a,monthsDisplay:t.monthsDisplay==="always"?"always":"auto",weeks:t.weeks||a==="digital"?"short":a,weeksDisplay:t.weeksDisplay==="always"?"always":"auto",days:t.days||a==="digital"?"short":a,daysDisplay:t.daysDisplay==="always"?"always":"auto",hours:o,hoursDisplay:t.hoursDisplay==="always"||a==="digital"?"always":"auto",minutes:s,minutesDisplay:t.minutesDisplay==="always"||a==="digital"?"always":"auto",seconds:i,secondsDisplay:t.secondsDisplay==="always"||a==="digital"?"always":"auto",milliseconds:d,millisecondsDisplay:t.millisecondsDisplay==="always"?"always":"auto"},"f")}resolvedOptions(){return Ke(this,Te,"f")}formatToParts(e){const t=[],a=Ke(this,Te,"f"),n=a.style,o=a.locale;for(const[s,i]of dt){const d=e[s];if(a[`${s}Display`]==="auto"&&!d)continue;const b=a[s],h=b==="2-digit"?lt:b==="numeric"?{}:{style:"unit",unit:i,unitDisplay:b};t.push(new Intl.NumberFormat(o,h).format(d))}return new st(o,{type:"unit",style:n==="digital"?"short":n}).formatToParts(t)}format(e){return this.formatToParts(e).map(t=>t.value).join("")}}Te=new WeakMap;const Je=/^[-+]?P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/,Ie=["year","month","week","day","hour","minute","second","millisecond"],mt=r=>Je.test(r);class X{constructor(e=0,t=0,a=0,n=0,o=0,s=0,i=0,d=0){this.years=e,this.months=t,this.weeks=a,this.days=n,this.hours=o,this.minutes=s,this.seconds=i,this.milliseconds=d,this.years||(this.years=0),this.sign||(this.sign=Math.sign(this.years)),this.months||(this.months=0),this.sign||(this.sign=Math.sign(this.months)),this.weeks||(this.weeks=0),this.sign||(this.sign=Math.sign(this.weeks)),this.days||(this.days=0),this.sign||(this.sign=Math.sign(this.days)),this.hours||(this.hours=0),this.sign||(this.sign=Math.sign(this.hours)),this.minutes||(this.minutes=0),this.sign||(this.sign=Math.sign(this.minutes)),this.seconds||(this.seconds=0),this.sign||(this.sign=Math.sign(this.seconds)),this.milliseconds||(this.milliseconds=0),this.sign||(this.sign=Math.sign(this.milliseconds)),this.blank=this.sign===0}abs(){return new X(Math.abs(this.years),Math.abs(this.months),Math.abs(this.weeks),Math.abs(this.days),Math.abs(this.hours),Math.abs(this.minutes),Math.abs(this.seconds),Math.abs(this.milliseconds))}static from(e){var t;if(typeof e=="string"){const a=String(e).trim(),n=a.startsWith("-")?-1:1,o=(t=a.match(Je))===null||t===void 0?void 0:t.slice(1).map(s=>(Number(s)||0)*n);return o?new X(...o):new X}else if(typeof e=="object"){const{years:a,months:n,weeks:o,days:s,hours:i,minutes:d,seconds:b,milliseconds:h}=e;return new X(a,n,o,s,i,d,b,h)}throw new RangeError("invalid duration")}static compare(e,t){const a=Date.now(),n=Math.abs(Ge(a,X.from(e)).getTime()-a),o=Math.abs(Ge(a,X.from(t)).getTime()-a);return n>o?-1:n<o?1:0}toLocaleString(e,t){return new ct(e,t).format(this)}}function Ge(r,e){const t=new Date(r);return t.setFullYear(t.getFullYear()+e.years),t.setMonth(t.getMonth()+e.months),t.setDate(t.getDate()+e.weeks*7+e.days),t.setHours(t.getHours()+e.hours),t.setMinutes(t.getMinutes()+e.minutes),t.setSeconds(t.getSeconds()+e.seconds),t}function pt(r,e="second",t=Date.now()){const a=r.getTime()-t;if(a===0)return new X;const n=Math.sign(a),o=Math.abs(a),s=Math.floor(o/1e3),i=Math.floor(s/60),d=Math.floor(i/60),b=Math.floor(d/24),h=Math.floor(b/30),F=Math.floor(h/12),R=Ie.indexOf(e)||Ie.length;return new X(R>=0?F*n:0,R>=1?(h-F*12)*n:0,0,R>=3?(b-h*30)*n:0,R>=4?(d-b*24)*n:0,R>=5?(i-d*60)*n:0,R>=6?(s-i*60)*n:0,R>=7?(o-s*1e3)*n:0)}function $e(r,{relativeTo:e=Date.now()}={}){if(e=new Date(e),r.blank)return r;const t=r.sign;let a=Math.abs(r.years),n=Math.abs(r.months),o=Math.abs(r.weeks),s=Math.abs(r.days),i=Math.abs(r.hours),d=Math.abs(r.minutes),b=Math.abs(r.seconds),h=Math.abs(r.milliseconds);h>=900&&(b+=Math.round(h/1e3)),(b||d||i||s||o||n||a)&&(h=0),b>=55&&(d+=Math.round(b/60)),(d||i||s||o||n||a)&&(b=0),d>=55&&(i+=Math.round(d/60)),(i||s||o||n||a)&&(d=0),s&&i>=12&&(s+=Math.round(i/24)),!s&&i>=21&&(s+=Math.round(i/24)),(s||o||n||a)&&(i=0);const F=e.getFullYear();let R=e.getMonth();const J=e.getDate();return(s>=27||a+n&&s)&&(e.setDate(J+s*t),n+=Math.abs(e.getFullYear()>=F?e.getMonth()-R:e.getMonth()-R-12),n&&(s=0),R=e.getMonth()),s>=6&&(o+=Math.round(s/7)),(o||n||a)&&(s=0),o>=4&&(n+=Math.round(o/4)),(n||a)&&(o=0),(n>=11||a&&n)&&(e.setMonth(e.getMonth()+n*t),a+=Math.abs(F-e.getFullYear())),a&&(n=0),new X(a*t,n*t,o*t,s*t,i*t,d*t,b*t,h*t)}function ut(r,e){const t=$e(r,e);if(t.blank)return[0,"second"];for(const a of Ie){if(a==="millisecond")continue;const n=t[`${a}s`];if(n)return[n,a]}return[0,"second"]}var q=globalThis&&globalThis.__classPrivateFieldGet||function(r,e,t,a){if(t==="a"&&!a)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?r!==e||!a:!e.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?a:t==="a"?a.call(r):a?a.value:e.get(r)},_e=globalThis&&globalThis.__classPrivateFieldSet||function(r,e,t,a,n){if(a==="m")throw new TypeError("Private method is not writable");if(a==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?r!==e||!n:!e.has(r))throw new TypeError("Cannot write private member to an object whose class did not declare it");return a==="a"?n.call(r,t):n?n.value=t:e.set(r,t),t},ae,Ce,Le,Se,me,ze,Ze,Qe,Xe,et,be;const ft=globalThis.HTMLElement||null,Be=new X,Ye=new X(0,0,0,0,0,1);class bt extends Event{constructor(e,t,a,n){super("relative-time-updated",{bubbles:!0,composed:!0}),this.oldText=e,this.newText=t,this.oldTitle=a,this.newTitle=n}}function Ve(r){if(!r.date)return 1/0;if(r.format==="duration"||r.format==="elapsed"){const t=r.precision;if(t==="second")return 1e3;if(t==="minute")return 60*1e3}const e=Math.abs(Date.now()-r.date.getTime());return e<60*1e3?1e3:e<60*60*1e3?60*1e3:60*60*1e3}const Pe=new class{constructor(){this.elements=new Set,this.time=1/0,this.timer=-1}observe(r){if(this.elements.has(r))return;this.elements.add(r);const e=r.date;if(e&&e.getTime()){const t=Ve(r),a=Date.now()+t;a<this.time&&(clearTimeout(this.timer),this.timer=setTimeout(()=>this.update(),t),this.time=a)}}unobserve(r){this.elements.has(r)&&this.elements.delete(r)}update(){if(clearTimeout(this.timer),!this.elements.size)return;let r=1/0;for(const e of this.elements)r=Math.min(r,Ve(e)),e.update();this.time=Math.min(60*60*1e3,r),this.timer=setTimeout(()=>this.update(),this.time),this.time+=Date.now()}};class gt extends ft{constructor(){super(...arguments),ae.add(this),Ce.set(this,!1),Le.set(this,!1),me.set(this,this.shadowRoot?this.shadowRoot:this.attachShadow?this.attachShadow({mode:"open"}):this),be.set(this,null)}static define(e="relative-time",t=customElements){return t.define(e,this),this}static get observedAttributes(){return["second","minute","hour","weekday","day","month","year","time-zone-name","prefix","threshold","tense","precision","format","format-style","datetime","lang","title"]}get onRelativeTimeUpdated(){return q(this,be,"f")}set onRelativeTimeUpdated(e){q(this,be,"f")&&this.removeEventListener("relative-time-updated",q(this,be,"f")),_e(this,be,typeof e=="object"||typeof e=="function"?e:null,"f"),typeof e=="function"&&this.addEventListener("relative-time-updated",e)}get second(){const e=this.getAttribute("second");if(e==="numeric"||e==="2-digit")return e}set second(e){this.setAttribute("second",e||"")}get minute(){const e=this.getAttribute("minute");if(e==="numeric"||e==="2-digit")return e}set minute(e){this.setAttribute("minute",e||"")}get hour(){const e=this.getAttribute("hour");if(e==="numeric"||e==="2-digit")return e}set hour(e){this.setAttribute("hour",e||"")}get weekday(){const e=this.getAttribute("weekday");if(e==="long"||e==="short"||e==="narrow")return e;if(this.format==="datetime"&&e!=="")return this.formatStyle}set weekday(e){this.setAttribute("weekday",e||"")}get day(){var e;const t=(e=this.getAttribute("day"))!==null&&e!==void 0?e:"numeric";if(t==="numeric"||t==="2-digit")return t}set day(e){this.setAttribute("day",e||"")}get month(){const e=this.format;let t=this.getAttribute("month");if(t!==""&&(t??(t=e==="datetime"?this.formatStyle:"short"),t==="numeric"||t==="2-digit"||t==="short"||t==="long"||t==="narrow"))return t}set month(e){this.setAttribute("month",e||"")}get year(){var e;const t=this.getAttribute("year");if(t==="numeric"||t==="2-digit")return t;if(!this.hasAttribute("year")&&new Date().getUTCFullYear()!==((e=this.date)===null||e===void 0?void 0:e.getUTCFullYear()))return"numeric"}set year(e){this.setAttribute("year",e||"")}get timeZoneName(){const e=this.getAttribute("time-zone-name");if(e==="long"||e==="short"||e==="shortOffset"||e==="longOffset"||e==="shortGeneric"||e==="longGeneric")return e}set timeZoneName(e){this.setAttribute("time-zone-name",e||"")}get prefix(){var e;return(e=this.getAttribute("prefix"))!==null&&e!==void 0?e:this.format==="datetime"?"":"on"}set prefix(e){this.setAttribute("prefix",e)}get threshold(){const e=this.getAttribute("threshold");return e&&mt(e)?e:"P30D"}set threshold(e){this.setAttribute("threshold",e)}get tense(){const e=this.getAttribute("tense");return e==="past"?"past":e==="future"?"future":"auto"}set tense(e){this.setAttribute("tense",e)}get precision(){const e=this.getAttribute("precision");return Ie.includes(e)?e:this.format==="micro"?"minute":"second"}set precision(e){this.setAttribute("precision",e)}get format(){const e=this.getAttribute("format");return e==="datetime"?"datetime":e==="relative"?"relative":e==="duration"?"duration":e==="micro"?"micro":e==="elapsed"?"elapsed":"auto"}set format(e){this.setAttribute("format",e)}get formatStyle(){const e=this.getAttribute("format-style");if(e==="long")return"long";if(e==="short")return"short";if(e==="narrow")return"narrow";const t=this.format;return t==="elapsed"||t==="micro"?"narrow":t==="datetime"?"short":"long"}set formatStyle(e){this.setAttribute("format-style",e)}get datetime(){return this.getAttribute("datetime")||""}set datetime(e){this.setAttribute("datetime",e)}get date(){const e=Date.parse(this.datetime);return Number.isNaN(e)?null:new Date(e)}set date(e){this.datetime=(e==null?void 0:e.toISOString())||""}connectedCallback(){this.update()}disconnectedCallback(){Pe.unobserve(this)}attributeChangedCallback(e,t,a){t!==a&&(e==="title"&&_e(this,Ce,a!==null&&(this.date&&q(this,ae,"m",ze).call(this,this.date))!==a,"f"),!q(this,Le,"f")&&!(e==="title"&&q(this,Ce,"f"))&&_e(this,Le,(async()=>{await Promise.resolve(),this.update()})(),"f"))}update(){const e=q(this,me,"f").textContent||this.textContent||"",t=this.getAttribute("title")||"";let a=t;const n=this.date;if(typeof Intl>"u"||!Intl.DateTimeFormat||!n){q(this,me,"f").textContent=e;return}const o=Date.now();q(this,Ce,"f")||(a=q(this,ae,"m",ze).call(this,n)||"",a&&this.setAttribute("title",a));const s=pt(n,this.precision,o),i=q(this,ae,"m",Ze).call(this,s);let d=e;i==="duration"?d=q(this,ae,"m",Qe).call(this,s):i==="relative"?d=q(this,ae,"m",Xe).call(this,s):d=q(this,ae,"m",et).call(this,n),d?q(this,me,"f").textContent=d:this.shadowRoot===q(this,me,"f")&&this.textContent&&(q(this,me,"f").textContent=this.textContent),(d!==e||a!==t)&&this.dispatchEvent(new bt(e,d,t,a)),i==="relative"||i==="duration"?Pe.observe(this):Pe.unobserve(this),_e(this,Le,!1,"f")}}Ce=new WeakMap,Le=new WeakMap,me=new WeakMap,be=new WeakMap,ae=new WeakSet,Se=function(){var e;return((e=this.closest("[lang]"))===null||e===void 0?void 0:e.getAttribute("lang"))||this.ownerDocument.documentElement.getAttribute("lang")||"default"},ze=function(e){return new Intl.DateTimeFormat(q(this,ae,"a",Se),{day:"numeric",month:"short",year:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"}).format(e)},Ze=function(e){const t=this.format;if(t==="datetime")return"datetime";if(t==="duration"||t==="elapsed"||t==="micro")return"duration";if((t==="auto"||t==="relative")&&typeof Intl<"u"&&Intl.RelativeTimeFormat){const a=this.tense;if(a==="past"||a==="future"||X.compare(e,this.threshold)===1)return"relative"}return"datetime"},Qe=function(e){const t=q(this,ae,"a",Se),a=this.format,n=this.formatStyle,o=this.tense;let s=Be;a==="micro"?(e=$e(e),s=Ye,(this.tense==="past"&&e.sign!==-1||this.tense==="future"&&e.sign!==1)&&(e=Ye)):(o==="past"&&e.sign!==-1||o==="future"&&e.sign!==1)&&(e=s);const i=`${this.precision}sDisplay`;return e.blank?s.toLocaleString(t,{style:n,[i]:"always"}):e.abs().toLocaleString(t,{style:n})},Xe=function(e){const t=new Intl.RelativeTimeFormat(q(this,ae,"a",Se),{numeric:"auto",style:this.formatStyle}),a=this.tense;a==="future"&&e.sign!==1&&(e=Be),a==="past"&&e.sign!==-1&&(e=Be);const[n,o]=ut(e);return o==="second"&&n<10?t.format(0,"second"):t.format(n,o)},et=function(e){const t=new Intl.DateTimeFormat(q(this,ae,"a",Se),{second:this.second,minute:this.minute,hour:this.hour,weekday:this.weekday,day:this.day,month:this.month,year:this.year,timeZoneName:this.timeZoneName});return`${this.prefix} ${t.format(e)}`.trim()};const qe=typeof globalThis<"u"?globalThis:window;try{qe.RelativeTimeElement=gt.define()}catch(r){if(!(qe.DOMException&&r instanceof DOMException&&r.name==="NotSupportedError")&&!(r instanceof ReferenceError))throw r}var ht=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},yt={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(r,e){(function(a,n){r.exports=n()})(ht,function(){return function(){var t={686:function(o,s,i){i.d(s,{default:function(){return Ee}});var d=i(279),b=i.n(d),h=i(370),F=i.n(h),R=i(817),J=i.n(R);function z(C){try{return document.execCommand(C)}catch{return!1}}var Y=function(f){var m=J()(f);return z("cut"),m},k=Y;function Z(C){var f=document.documentElement.getAttribute("dir")==="rtl",m=document.createElement("textarea");m.style.fontSize="12pt",m.style.border="0",m.style.padding="0",m.style.margin="0",m.style.position="absolute",m.style[f?"right":"left"]="-9999px";var p=window.pageYOffset||document.documentElement.scrollTop;return m.style.top="".concat(p,"px"),m.setAttribute("readonly",""),m.value=C,m}var ne=function(f,m){var p=Z(f);m.container.appendChild(p);var w=J()(p);return z("copy"),p.remove(),w},ge=function(f){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},p="";return typeof f=="string"?p=ne(f,m):f instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(f==null?void 0:f.type)?p=ne(f.value,m):(p=J()(f),z("copy")),p},ce=ge;function se(C){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?se=function(m){return typeof m}:se=function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},se(C)}var ie=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=f.action,p=m===void 0?"copy":m,w=f.container,_=f.target,Q=f.text;if(p!=="copy"&&p!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(_!==void 0)if(_&&se(_)==="object"&&_.nodeType===1){if(p==="copy"&&_.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(p==="cut"&&(_.hasAttribute("readonly")||_.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(Q)return ce(Q,{container:w});if(_)return p==="cut"?k(_):ce(_,{container:w})},De=ie;function de(C){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?de=function(m){return typeof m}:de=function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},de(C)}function xe(C,f){if(!(C instanceof f))throw new TypeError("Cannot call a class as a function")}function he(C,f){for(var m=0;m<f.length;m++){var p=f[m];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(C,p.key,p)}}function ye(C,f,m){return f&&he(C.prototype,f),m&&he(C,m),C}function je(C,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function");C.prototype=Object.create(f&&f.prototype,{constructor:{value:C,writable:!0,configurable:!0}}),f&&we(C,f)}function we(C,f){return we=Object.setPrototypeOf||function(p,w){return p.__proto__=w,p},we(C,f)}function Ne(C){var f=ke();return function(){var p=pe(C),w;if(f){var _=pe(this).constructor;w=Reflect.construct(p,arguments,_)}else w=p.apply(this,arguments);return Re(this,w)}}function Re(C,f){return f&&(de(f)==="object"||typeof f=="function")?f:ve(C)}function ve(C){if(C===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return C}function ke(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function pe(C){return pe=Object.setPrototypeOf?Object.getPrototypeOf:function(m){return m.__proto__||Object.getPrototypeOf(m)},pe(C)}function re(C,f){var m="data-clipboard-".concat(C);if(f.hasAttribute(m))return f.getAttribute(m)}var $=function(C){je(m,C);var f=Ne(m);function m(p,w){var _;return xe(this,m),_=f.call(this),_.resolveOptions(w),_.listenClick(p),_}return ye(m,[{key:"resolveOptions",value:function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof w.action=="function"?w.action:this.defaultAction,this.target=typeof w.target=="function"?w.target:this.defaultTarget,this.text=typeof w.text=="function"?w.text:this.defaultText,this.container=de(w.container)==="object"?w.container:document.body}},{key:"listenClick",value:function(w){var _=this;this.listener=F()(w,"click",function(Q){return _.onClick(Q)})}},{key:"onClick",value:function(w){var _=w.delegateTarget||w.currentTarget,Q=this.action(_)||"copy",ue=De({action:Q,container:this.container,target:this.target(_),text:this.text(_)});this.emit(ue?"success":"error",{action:Q,text:ue,trigger:_,clearSelection:function(){_&&_.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(w){return re("action",w)}},{key:"defaultTarget",value:function(w){var _=re("target",w);if(_)return document.querySelector(_)}},{key:"defaultText",value:function(w){return re("text",w)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(w){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return ce(w,_)}},{key:"cut",value:function(w){return k(w)}},{key:"isSupported",value:function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],_=typeof w=="string"?[w]:w,Q=!!document.queryCommandSupported;return _.forEach(function(ue){Q=Q&&!!document.queryCommandSupported(ue)}),Q}}]),m}(b()),Ee=$},828:function(o){var s=9;if(typeof Element<"u"&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}function d(b,h){for(;b&&b.nodeType!==s;){if(typeof b.matches=="function"&&b.matches(h))return b;b=b.parentNode}}o.exports=d},438:function(o,s,i){var d=i(828);function b(R,J,z,Y,k){var Z=F.apply(this,arguments);return R.addEventListener(z,Z,k),{destroy:function(){R.removeEventListener(z,Z,k)}}}function h(R,J,z,Y,k){return typeof R.addEventListener=="function"?b.apply(null,arguments):typeof z=="function"?b.bind(null,document).apply(null,arguments):(typeof R=="string"&&(R=document.querySelectorAll(R)),Array.prototype.map.call(R,function(Z){return b(Z,J,z,Y,k)}))}function F(R,J,z,Y){return function(k){k.delegateTarget=d(k.target,J),k.delegateTarget&&Y.call(R,k)}}o.exports=h},879:function(o,s){s.node=function(i){return i!==void 0&&i instanceof HTMLElement&&i.nodeType===1},s.nodeList=function(i){var d=Object.prototype.toString.call(i);return i!==void 0&&(d==="[object NodeList]"||d==="[object HTMLCollection]")&&"length"in i&&(i.length===0||s.node(i[0]))},s.string=function(i){return typeof i=="string"||i instanceof String},s.fn=function(i){var d=Object.prototype.toString.call(i);return d==="[object Function]"}},370:function(o,s,i){var d=i(879),b=i(438);function h(z,Y,k){if(!z&&!Y&&!k)throw new Error("Missing required arguments");if(!d.string(Y))throw new TypeError("Second argument must be a String");if(!d.fn(k))throw new TypeError("Third argument must be a Function");if(d.node(z))return F(z,Y,k);if(d.nodeList(z))return R(z,Y,k);if(d.string(z))return J(z,Y,k);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function F(z,Y,k){return z.addEventListener(Y,k),{destroy:function(){z.removeEventListener(Y,k)}}}function R(z,Y,k){return Array.prototype.forEach.call(z,function(Z){Z.addEventListener(Y,k)}),{destroy:function(){Array.prototype.forEach.call(z,function(Z){Z.removeEventListener(Y,k)})}}}function J(z,Y,k){return b(document.body,z,Y,k)}o.exports=h},817:function(o){function s(i){var d;if(i.nodeName==="SELECT")i.focus(),d=i.value;else if(i.nodeName==="INPUT"||i.nodeName==="TEXTAREA"){var b=i.hasAttribute("readonly");b||i.setAttribute("readonly",""),i.select(),i.setSelectionRange(0,i.value.length),b||i.removeAttribute("readonly"),d=i.value}else{i.hasAttribute("contenteditable")&&i.focus();var h=window.getSelection(),F=document.createRange();F.selectNodeContents(i),h.removeAllRanges(),h.addRange(F),d=h.toString()}return d}o.exports=s},279:function(o){function s(){}s.prototype={on:function(i,d,b){var h=this.e||(this.e={});return(h[i]||(h[i]=[])).push({fn:d,ctx:b}),this},once:function(i,d,b){var h=this;function F(){h.off(i,F),d.apply(b,arguments)}return F._=d,this.on(i,F,b)},emit:function(i){var d=[].slice.call(arguments,1),b=((this.e||(this.e={}))[i]||[]).slice(),h=0,F=b.length;for(h;h<F;h++)b[h].fn.apply(b[h].ctx,d);return this},off:function(i,d){var b=this.e||(this.e={}),h=b[i],F=[];if(h&&d)for(var R=0,J=h.length;R<J;R++)h[R].fn!==d&&h[R].fn._!==d&&F.push(h[R]);return F.length?b[i]=F:delete b[i],this}},o.exports=s,o.exports.TinyEmitter=s}},a={};function n(o){if(a[o])return a[o].exports;var s=a[o]={exports:{}};return t[o](s,s.exports,n),s.exports}return function(){n.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(s,{a:s}),s}}(),function(){n.d=function(o,s){for(var i in s)n.o(s,i)&&!n.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:s[i]})}}(),function(){n.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)}}(),n(686)}().default})})(yt);const wt="/showcase/assets/avatar-f3614e1a.svg",vt="/showcase/assets/pf-logo-8837c68c.svg";window.PatternFlyAssets={avatar:wt,pfLogo:vt};const St=`Alert.custom("Custom inline alert title").inline());
Alert.info("Info inline alert title").inline());
Alert.success("Success inline alert title").inline());
Alert.warning("Warning inline alert title").inline());
Alert.danger("Danger inline alert title").inline());`,Tt=`Alert.custom("Custom alert title");
Alert.info("Info alert title");
Alert.success("Success alert title");
Alert.warning("Warning alert title");
Alert.danger("Danger alert title");`,Ct=`Alert.success("Success alert title")
    .closable()
    .addDescription("Success alert description. This should tell the user more information about the alert.")
    .addActionGroup(alertActionGroup()
    .add(Button.inline("View details"))
    .add(Button.inline("Ignore"))));

Alert.success("Success alert title")
    .closable()
    .addDescription(alertDescription()
        .add(p()
            .add("Success alert description. This should tell the user more information about the alert. ")
            .add(a("#").textContent("This is a link"))
            .add("."))));

Alert.success("Success alert title")
    .closable()
    .addActionGroup(alertActionGroup()
    .add(Button.inline("View details"))
    .add(Button.inline("Ignore"))));

Alert.success("Success alert title")
    .closable());

Alert.success("Success alert title"));

Alert.success(LoremIpsum.words(75))
    .truncate()
    .addDescription(alertDescription()
    .add(p()
    .add("This example uses ")
    .add(code("Alert.truncate()"))
    .add(" to limit the title to a single line and truncate any overflow text with ellipses."))));

Alert.success(LoremIpsum.words(75))
    .truncate(2)
    .addDescription(alertDescription()
    .add(p()
    .add("This example uses ")
    .add(code("Alert.truncate(2)"))
    .add(" to limit the title to a single line and truncate any overflow text with ellipses."))));`,Lt=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
Avatar avatar = Avatar.avatar("./images/img_avatar.svg", "avatar");`,Dt=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
Badge b0 = Badge.read(7);
Badge b1 = Badge.read(24);
Badge b2 = Badge.read(423);
Badge b3 = Badge.read("999+");`,xt=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
Badge b0 = Badge.unread(7);
Badge b1 = Badge.unread(24);
Badge b2 = Badge.unread(423);
Badge b4 = Badge.unread("999+");
`,At=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
Brand brand = Brand.brand("https://www.patternfly.org/assets/images/pf_logo.svg");`,_t=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
Button button = Button.button("Block level button").primary().block();`,It=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static org.patternfly.component.Alert.info;
import static org.patternfly.component.AlertGroup.toast;
import static org.patternfly.component.Button.button;

Button button = Button.button("Click me").primary()
        .onClick(() -> toast().add(info("Hello")));`,jt=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static org.patternfly.component.Icon.icon;
import static org.patternfly.resources.CSS.fas;

Button b1 = Button.link("Primary link to W3.org", "https://www.w3.org/").primary();
Button b2 = Button.link("Secondary link to W3.org", "https://www.w3.org/").secondary();
Button b3 = Button.link(icon(fas("external-link-alt")), "Tertiary link to W3.org", "https://www.w3.org/", "_blank")
        .tertiary();`,Nt=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static org.patternfly.component.Icon.icon;
import static org.patternfly.resources.CSS.fas;

Button b00 = Button.button("Primary").primary();
Button b01 = Button.button("Primary focus").primary().focus();
Button b02 = Button.button("Primary active").primary().active();
Button b03 = Button.button("Primary disabled").primary().disable());

Button b04 = Button.button("Secondary").secondary();
Button b05 = Button.button("Secondary focus").secondary().focus();
Button b06 = Button.button("Secondary active").secondary().active();
Button b07 = Button.button("Secondary disabled").secondary().disable());

Button b08 = Button.button("Tertiary").tertiary();
Button b09 = Button.button("Tertiary focus").tertiary().focus();
Button b10 = Button.button("Tertiary active").tertiary().active();
Button b11 = Button.button("Tertiary disabled").tertiary().disable());

Button b12 = Button.button("Danger").danger();
Button b13 = Button.button("Danger focus").danger().focus();
Button b14 = Button.button("Danger active").danger().active();
Button b15 = Button.button("Danger disabled").danger().disable());

Button b16 = Button.link("Link");
Button b17 = Button.link("Link focus").focus();
Button b18 = Button.link("Link active").active();
Button b19 = Button.link("Link disabled").disable());

Button b20 = Button.link(icon(fas("calendar-plus")), "Link icon");
Button b21 = Button.link(icon(fas("calendar-plus")), "Link icon focus").focus();
Button b22 = Button.link(icon(fas("calendar-plus")), "Link icon active").active();
Button b23 = Button.link(icon(fas("calendar-plus")), "Link icon disabled").disable());

Button b24 = Button.icon(icon(fas("chart-pie")), "Chart");
Button b25 = Button.icon(icon(fas("chart-pie")), "Chart focus").focus();
Button b26 = Button.icon(icon(fas("chart-pie")), "Chart active").active();
Button b27 = Button.icon(icon(fas("chart-pie")), "Chart disabled").disable());

Button b28 = Button.control("Control");
Button b29 = Button.control("Control focus").focus();
Button b30 = Button.control("Control active").active();
Button b31 = Button.control("Control expanded").expanded();
Button b32 = Button.control("Control disabled").disable());`,Rt=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import org.patternfly.component.Button.Type;

Button b0 = Button.button("Submit").type(Type.SUBMIT);
Button b1 = Button.button("Reset").type(Type.RESET);
Button b2 = Button.button("Default").type(Type.DEFAULT);`,kt=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static org.patternfly.component.Icon.icon;
import static org.patternfly.resources.CSS.fas;

Button b00 = Button.button("Primary").primary());
Button b01 = Button.button("Secondary").secondary());
Button b02 = Button.button("Tertiary").tertiary());
Button b03 = Button.button("Danger").danger()));

Button b04 = Button.button(icon(fas("address-card")), "Primary icon").primary();
Button b05 = Button.button(icon(fas("address-card")), "Secondary icon").secondary();
Button b06 = Button.button(icon(fas("address-card")), "Tertiary icon").tertiary();
Button b07 = Button.button(icon(fas("address-card"))), "Danger icon").danger();

Button b08 = Button.link("Link"));
Button b09 = Button.link(icon(fas("calendar-plus")), "Link icon");
Button b10 = Button.icon(icon(fas("chart-pie")), "Chart");
Button b11 = Button.inline("Inline Link")));

Button b12 = Button.control("Control"));
Button b13 = Button.control(icon(fas("clock")), "Control icon");
Button b14 = Button.control(icon(fas("code"));`,Et=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static org.elemento.Elements.input;
import static org.elemento.InputType.checkbox;
import static org.patternfly.component.Card.Head.actions;
import static org.patternfly.component.Card.body;
import static org.patternfly.component.Card.card;
import static org.patternfly.component.Card.head;

Card card = card()
        .add(head()
                .add(actions()
                        .add(Dropdown.<String> kebab().right()
                                .add("Link")
                                .add("Action")
                                .add("Disabled Link", true)
                                .add("Disabled Action", true)
                                .addSeparator()
                                .add("Separated Link"))
                        .add(input(checkbox))))
        .add(body().textContent("This is the card body, there is only actions in the card head."));`,Mt=`import static org.patternfly.component.Card.body;
import static org.patternfly.component.Card.card;
import static org.patternfly.component.Card.footer;
import static org.patternfly.component.Card.header;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.noFill;

Card card = card().style("min-height: 30em;")
        .add(header().textContent("Header"))
        .add(body().css(modifier(noFill)).textContent("Body pf-m-no-fill"))
        .add(body().css(modifier(noFill)).textContent("Body pf-m-no-fill"))
        .add(body().textContent("Body"))
        .add(footer().textContent("Footer"));`,Ot=`import static org.patternfly.component.Card.body;
import static org.patternfly.component.Card.card;
import static org.patternfly.component.Card.footer;
import static org.patternfly.component.Card.header;

Card card = card().compact()
        .add(header().textContent("Header"))
        .add(body().textContent("Body"))
        .add(footer().textContent("Footer"));`,Bt=`import static org.patternfly.component.Card.body;
import static org.patternfly.component.Card.card;

Card card = card()
        .add(body().textContent("Body"));`,Pt=`import static org.elemento.Elements.input;
import static org.elemento.InputType.checkbox;
import static org.patternfly.component.Card.Head.actions;
import static org.patternfly.component.Card.body;
import static org.patternfly.component.Card.card;
import static org.patternfly.component.Card.footer;
import static org.patternfly.component.Card.header;

Card card = card()
        .add(head()
                .add(actions()
                        .add(Dropdown.<String> kebab().right()
                                .add("Link")
                                .add("Action")
                                .add("Disabled Link", true)
                                .add("Disabled Action", true)
                                .addSeparator()
                                .add("Separated Link"))
                        .add(input(checkbox)))
                .add(header()
                        .textContent("This is a really really really really really really really really really really long header")))
        .add(header().textContent("Header"))
        .add(body().textContent("Body"))
        .add(footer().textContent("Footer"));`,zt=`import static org.patternfly.component.Card.body;
import static org.patternfly.component.Card.card;
import static org.patternfly.component.Card.footer;
import static org.patternfly.component.Card.header;

Card card = card().hoverable()
        .add(header().textContent("Header"))
        .add(body().textContent("Body"))
        .add(footer().textContent("Footer"));`,Ft=`import static org.elemento.Elements.img;
import static org.elemento.Elements.input;
import static org.elemento.InputType.checkbox;
import static org.patternfly.component.Card.Head.actions;
import static org.patternfly.component.Card.body;
import static org.patternfly.component.Card.card;
import static org.patternfly.component.Card.footer;
import static org.patternfly.component.Card.header;

Card card = card()
        .add(head()
                .add(img("./images/pf_logo.svg").style("width: 300px"))
                .add(actions()
                        .add(Dropdown.<String>kebab().right()
                                .add("Link")
                                .add("Action")
                                .add("Disabled Link", true)
                                .add("Disabled Action", true)
                                .addSeparator()
                                .add("Separated Link"))
                        .add(input(checkbox))))
        .add(header().textContent("Header"))
        .add(body().textContent("Body"))
        .add(footer().textContent("Footer"));`,Ht=`import static org.elemento.Elements.img;
import static org.patternfly.component.Card.body;
import static org.patternfly.component.Card.card;
import static org.patternfly.component.Card.footer;
import static org.patternfly.component.Card.header;

Card card = card()
        .add(head()
                .add(img("./images/pf_logo.svg")))
        .add(header().textContent("Header"))
        .add(body().textContent("Body"))
        .add(footer().textContent("Footer"));`,Ut=`import static org.patternfly.component.Card.body;
import static org.patternfly.component.Card.card;
import static org.patternfly.component.Card.footer;
import static org.patternfly.component.Card.header;

Card card = card()
        .add(header().textContent("Header"))
        .add(body().textContent("Body"))
        .add(body().textContent("Body"))
        .add(body().textContent("Body"))
        .add(footer().textContent("Footer"));`,Wt=`import static org.patternfly.component.Card.body;
import static org.patternfly.component.Card.card;
import static org.patternfly.component.Card.header;

Card card = card()
        .add(header().textContent("Header"))
        .add(body().textContent("This card has no footer"));`,Kt=`import static org.patternfly.component.Card.body;
import static org.patternfly.component.Card.card;
import static org.patternfly.component.Card.footer;

Card card = card()
        .add(body().textContent("This card has no header"))
        .add(footer().textContent("Footer"));`,Gt=`import static org.patternfly.component.Card.body;
import static org.patternfly.component.Card.card;
import static org.patternfly.component.Card.footer;
import static org.patternfly.component.Card.header;

Card card = card()
        .add(header().textContent("Header"))
        .add(body().textContent("Body"))
        .add(footer().textContent("Footer"));`,Yt=`import static org.elemento.Elements.uniqueId;
import static org.patternfly.component.Chip.chip;
import static org.patternfly.component.ChipGroup.chipGroup;
import static org.patternfly.component.Icon.icon;
import static org.patternfly.resources.CSS.fas;

ChipGroup group = chipGroup(5)
        .add(chip(uniqueId()))
        .add(chip(uniqueId()))
        .add(chip(uniqueId()));

Button add = Button.link(icon(fas("plus-circle")), "Add cip")
        .onClick(() -> group.add(chip(uniqueId())));`,Vt=`import static org.patternfly.component.Alert.info;
import static org.patternfly.component.AlertGroup.toast;

Chip chip = Chip.chip("Close Me").onClose(() -> toast().add(info("Goodbye")));`,qt=`import static org.elemento.Elements.uniqueId;
import static org.patternfly.component.Chip.chip;
import static org.patternfly.component.ChipGroup.chipGroup;
import static org.patternfly.component.ChipGroupToolbar.chipGroupToolbar;
import static org.patternfly.component.Icon.icon;
import static org.patternfly.resources.CSS.fas;

ChipGroup[] groups = new ChipGroup[]{
        chipGroup(3),
        chipGroup(4),
        chipGroup()
};

ChipGroupToolbar toolbar = chipGroupToolbar()
        .add("Max 3", groups[0])
        .add("Max 4", groups[1])
        .add("Unlimited", groups[2]);

Button add = Button.link(icon(fas("plus-circle")), "Add chip")
        .onClick(() -> {
            int i = new Random().nextInt(3);
            groups[i].add(chip(uniqueId()));
        });`,Jt=`Chip c0 = Chip.chip("Just Text");
Chip c1 = Chip.chip("Count", 23);
Chip c2 = Chip.readOnly("Readonly");
Chip c3 = Chip.readOnly("RO Count", 42);
Chip c4 = Chip.overflow("Overflow");`,$t=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static org.elemento.Elements.a;
import static org.elemento.Elements.blockquote;
import static org.elemento.Elements.p;
import static org.elemento.Elements.small;

Content content = Content.content()
        .add(p().textContent(LoremIpsum.paragraphs(5)))
        .add(p().add(LoremIpsum.paragraphs(3) + " ")
                .add(a("#").textContent(LoremIpsum.paragraph()))
                .add(" " + LoremIpsum.paragraphs(2)))
        .add(blockquote().textContent(LoremIpsum.paragraphs(2)))
        .add(small().textContent(LoremIpsum.paragraphs(3)));`,Zt=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static org.elemento.Elements.dd;
import static org.elemento.Elements.dl;
import static org.elemento.Elements.dt;

Content content = Content.content()
        .add(dl()
                .add(dt().textContent("Web"))
                .add(dd().textContent("The part of the Internet that contains " +
                        "websites and web pages"))
                .add(dt().textContent("HTML"))
                .add(dd().textContent("A markup language for creating web pages"))
                .add(dt().textContent("CSS"))
                .add(dd().textContent("A technology to make HTML look better")));`,Qt=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static org.elemento.Elements.h;

Content content = Content.content()
        .add(h(1, "Hello World"))
        .add(h(2, "Second Level"))
        .add(h(3, "Third Level"))
        .add(h(4, "Forth Level"))
        .add(h(5, "Fifth Level"))
        .add(h(6, "Sixth Level"));`,Xt=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static org.elemento.Elements.li;
import static org.elemento.Elements.ol;

Content content = Content.content()
        .add(ol()
                .add(li().textContent(LoremIpsum.words()))
                .add(li().textContent(LoremIpsum.words()))
                .add(li().textContent(LoremIpsum.words()))
                .add(li().textContent(LoremIpsum.words()))
                .add(li().textContent(LoremIpsum.words()))
                .add(li().textContent(LoremIpsum.words()))
                .add(li().textContent(LoremIpsum.words())));`,ea=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static org.elemento.Elements.li;
import static org.elemento.Elements.ul;

Content content = Content.content()
        .add(ul()
                .add(li().textContent(LoremIpsum.words()))
                .add(li().textContent(LoremIpsum.words()))
                .add(li()
                        .add(LoremIpsum.words())
                        .add(ul()
                                .add(li().textContent(LoremIpsum.words()))
                                .add(li().textContent(LoremIpsum.words()))))
                .add(li().add(LoremIpsum.words())));`,ta=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static java.util.Arrays.asList;
import static org.patternfly.component.Alert.info;
import static org.patternfly.component.AlertGroup.toast;

ContextSelector<String> contextSelector = ContextSelector.contextSelector("Stage")
        .onToggle(open -> toast().add(info("Context selector " + (open ? "expanded" : "collapsed"))))
        .onSelect(stage -> toast().add(info("Stage selected").description(stage)))
        .add(asList("Development", "Staging", "QA", "Production"));`,aa=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static java.util.Arrays.asList;

ContextSelector<String> contextSelector = ContextSelector.contextSelector("Stage")
        .add(asList("Development", "Staging", "QA", "Production"));`,na=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static java.util.Arrays.asList;
import static org.patternfly.resources.CSS.util;

static class Stage {

    final String name;
    final String url;
    final int nodes;

    Stage(String name, String url, int nodes) {
        this.name = name;
        this.url = url;
        this.nodes = nodes;
    }

    @Override
    public String toString() {
        return name;
    }
}

List<Stage> stages = asList(
        new Stage("Development", "http://localhost:8080", 2),
        new Stage("Staging", "https://staging.acme.org", 5),
        new Stage("QA", "https://qa.acme.org", 3),
        new Stage("Production", "https://acme.org", 12));

ContextSelector<Stage> contextSelector = ContextSelector.contextSelector("Stage")
        .display((html, stage) -> html.css(util("justify-content-space-between"))
                .title(stage.url)
                .add(stage.name)
                .add(Badge.read(stage.nodes)))
        .add(stages);`,ia=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static org.elemento.Elements.div;
import static org.elemento.Elements.span;
import static org.patternfly.component.DataList.dataList;
import static org.patternfly.component.DataList.itemCell;
import static org.patternfly.component.DataList.itemContent;
import static org.patternfly.component.DataList.itemRow;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.action;
import static org.patternfly.resources.Constants.alignRight;
import static org.patternfly.resources.Constants.hidden;

DisplayData[] items = {
        new DisplayData((li, provider, item) -> li.add(itemRow()
                .add(itemControl().checkbox())
                .add(itemContent()
                        .add(itemCell().add(span().id(item.id()).textContent("Primary Content. " + LoremIpsum.paragraph())))
                        .add(itemCell().textContent("Secondary content. " + LoremIpsum.paragraph()))
                        .add(itemCell().textContent("Tertiary content. " + LoremIpsum.paragraph()))
                        .add(itemCell().textContent("More content. " + LoremIpsum.paragraph()))
                        .add(itemCell().textContent("More content. " + LoremIpsum.paragraph())))
                .add(itemAction()
                        .add(div().css(component(dataList, action))
                                .add(Dropdown.<String> kebab().right()
                                        .add("Action One")
                                        .add("Action Two")
                                        .add("Disabled Action", true)
                                        .addSeparator()
                                        .add("Final Action")))))),
        new DisplayData((li, provider, item) -> li.add(itemRow()
                .add(itemControl().checkbox())
                .add(itemContent()
                        .add(itemCell().add(span().id(item.id()).textContent("Primary Content. " + LoremIpsum.paragraph())))
                        .add(itemCell().textContent("Secondary content. " + LoremIpsum.paragraph())))
                .add(itemAction().css(modifier("hidden-on-lg"))
                        .add(div().css(component(dataList, action))
                                .add(Dropdown.<String> kebab().right()
                                        .add("Action One")
                                        .add("Action Two")
                                        .add("Disabled Action", true)
                                        .addSeparator()
                                        .add("Final Action"))))
                .add(itemAction().css(modifier(hidden), modifier("visible-on-lg"))
                        .add(Button.button("Primary").primary())
                        .add(Button.button("Secondary").secondary())))),
        new DisplayData((li, provider, item) -> li.add(itemRow()
                .add(itemControl().checkbox())
                .add(itemContent()
                        .add(itemCell().add(span().id(item.id()).textContent("Primary Content. " + LoremIpsum.paragraph())))
                        .add(itemCell().textContent("Secondary content. " + LoremIpsum.paragraph())))
                .add(itemAction().css(modifier("hidden-on-xl"))
                        .add(div().css(component(dataList, action))
                                .add(Dropdown.<String> kebab().right()
                                        .add("Action One")
                                        .add("Action Two")
                                        .add("Disabled Action", true)
                                        .addSeparator()
                                        .add("Final Action"))))
                .add(itemAction().css(modifier(hidden), modifier("visible-on-xl"))
                        .add(Button.button("Primary").primary())
                        .add(Button.button("Secondary").secondary())
                        .add(Button.button("Secondary").secondary())
                        .add(Button.button("Secondary").secondary()))))
};

DataProvider<DisplayData> dp = new DataProvider<>(DisplayData::id);
DataList<DisplayData> dl = dataList(dp, (li, provider, item) -> item.display.render(li, provider, item));
dp.addDisplay(dl);
dp.update(items);

// Just a fake item data w/ a display delegate. See demos for a real example
static class DisplayData {

    final DataList.Display<HTMLLIElement, DisplayData> display;

    DisplayData(DataList.Display<HTMLLIElement, DisplayData> display) {
        this.display = display;
    }

    String id() {
        return Elements.uniqueId();
    }
}`,ra=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static org.elemento.Elements.div;
import static org.elemento.Elements.span;
import static org.patternfly.component.Components.dataList;
import static org.patternfly.component.DataList.itemCell;
import static org.patternfly.component.DataList.itemContent;
import static org.patternfly.component.DataList.itemRow;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.action;
import static org.patternfly.resources.Constants.alignRight;
import static org.patternfly.resources.Constants.hidden;
import static org.patternfly.resources.Constants.noPadding;

DisplayData[] items = {
        new DisplayData((li, provider, item) -> li
                .add(itemRow()
                        .add(itemControl().expandable())
                        .add(itemContent()
                                .add(itemCell().css(modifier(icon))
                                        .add(i().css(component(dataList, icon), fas("code-branch"))))
                                .add(itemCell()
                                        .add(div().id(item.id()).textContent("Primary Content"))
                                        .add(span().textContent(LoremIpsum.paragraph())))
                                .add(itemCell().textContent(LoremIpsum.paragraphs(2)))
                                .add(itemCell().textContent(LoremIpsum.paragraphs(2))))
                        .add(itemAction()
                                .add(div().css(component(dataList, action))
                                        .add(Dropdown.<String> kebab().right()
                                                .add("Action One")
                                                .add("Action Two")
                                                .add("Disabled Action", true)
                                                .addSeparator()
                                                .add("Final Action")))))
                .add(expandableContent()
                        .add(expandableBody().textContent(LoremIpsum.paragraphs(5))))),
        new DisplayData((li, provider, item) -> li
                .add(itemRow()
                        .add(itemControl().expandable())
                        .add(itemContent()
                                .add(itemCell().css(modifier(icon))
                                        .add(i().css(component(dataList, icon), fas("code-branch"))))
                                .add(itemCell()
                                        .add(div().id(item.id()).textContent("Secondary Content"))
                                        .add(span().textContent(LoremIpsum.paragraph())))
                                .add(itemCell().textContent(LoremIpsum.paragraphs(2)))
                                .add(itemCell().textContent(LoremIpsum.paragraphs(2))))
                        .add(itemAction()
                                .add(div().css(component(dataList, action))
                                        .add(Dropdown.<String> kebab().right()
                                                .add("Action One")
                                                .add("Action Two")
                                                .add("Disabled Action", true)
                                                .addSeparator()
                                                .add("Final Action")))))
                .add(expandableContent()
                        .add(expandableBody().textContent(LoremIpsum.paragraphs(5))))),
        new DisplayData((li, provider, item) -> li
                .add(itemRow()
                        .add(itemControl().expandable())
                        .add(itemContent()
                                .add(itemCell().css(modifier(icon))
                                        .add(i().css(component(dataList, icon), fas("code-branch"))))
                                .add(itemCell()
                                        .add(div().id(item.id()).textContent("Tertiary Content"))
                                        .add(span().textContent(LoremIpsum.paragraph())))
                                .add(itemCell().textContent(LoremIpsum.paragraphs(2)))
                                .add(itemCell().textContent(LoremIpsum.paragraphs(2))))
                        .add(itemAction()
                                .add(div().css(component(dataList, action))
                                        .add(Dropdown.<String> kebab().right()
                                                .add("Action One")
                                                .add("Action Two")
                                                .add("Disabled Action", true)
                                                .addSeparator()
                                                .add("Final Action")))))
                .add(expandableContent()
                        .add(expandableBody().css(modifier(noPadding)).textContent(LoremIpsum.paragraph()))))
};

DataProvider<DisplayData> dp = new DataProvider<>(DisplayData::id);
DataList<DisplayData> dl = dataList(dp, (li, provider, item) -> item.display.render(li, provider, item));
dp.addDisplay(dl);
dp.update(items);

// Just a fake item data w/ a display delegate. See demos for a real example
static class DisplayData {

    final DataList.Display<HTMLLIElement, DisplayData> display;

    DisplayData(DataList.Display<HTMLLIElement, DisplayData> display) {
        this.display = display;
    }

    String id() {
        return Elements.uniqueId();
    }
}`,oa=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static org.elemento.Elements.div;
import static org.elemento.Elements.span;
import static org.patternfly.component.Components.dataList;
import static org.patternfly.component.DataList.itemCell;
import static org.patternfly.component.DataList.itemContent;
import static org.patternfly.component.DataList.itemRow;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.action;
import static org.patternfly.resources.Constants.alignRight;
import static org.patternfly.resources.Constants.hidden;
import static org.patternfly.resources.Constants.noPadding;

DisplayData[] items0 = {
        new DisplayData((li, provider, item) -> li.add(itemRow()
                .add(itemControl().checkbox())
                .add(itemContent()
                        .add(itemCell()
                                .add(div().css("sc-data-list__blue-box")
                                        .add(b().id(item.id()).textContent("default"))
                                        .add(p().textContent(LoremIpsum.paragraph()))))
                        .add(itemCell()
                                .add(div().css("sc-data-list__blue-box")
                                        .add(b().textContent("default"))
                                        .add(p().textContent(LoremIpsum.paragraphs(2))))))))
};

DataProvider<DisplayData> dp0 = new DataProvider<>(DisplayData::id);
DataList<DisplayData> dl0 = dataList(dp0, (li, provider, item) -> item.display.render(li, provider, item));
dp0.addDisplay(dl0);
dp0.update(items0);

DisplayData[] items1 = {
        new DisplayData((li, provider, item) -> li.add(itemRow()
                .add(itemControl().checkbox())
                .add(itemContent()
                        .add(itemCell().css(modifier("flex-2"))
                                .add(div().css("sc-data-list__blue-box")
                                        .add(b().id(item.id()).textContent("width 2"))
                                        .add(p().textContent(LoremIpsum.paragraph()))))
                        .add(itemCell().css(modifier("flex-4"))
                                .add(div().css("sc-data-list__blue-box")
                                        .add(b().textContent("width 4"))
                                        .add(p().textContent(LoremIpsum.paragraphs(2))))))
                .add(itemAction()
                        .add(div().css(component(dataList, action))
                                .add(Dropdown.<String> kebab().right()
                                        .add("Action One")
                                        .add("Action Two")
                                        .add("Disabled Action", true)
                                        .addSeparator()
                                        .add("Final Action"))))))
};

DataProvider<DisplayData> dp1 = new DataProvider<>(DisplayData::id);
DataList<DisplayData> dl1 = dataList(dp1, (li, provider, item) -> item.display.render(li, provider, item));
dp1.addDisplay(dl1);
dp1.update(items1);

DisplayData[] items2 = {
        new DisplayData((li, provider, item) -> li
                .add(itemRow()
                        .add(itemControl()
                                .expandable()
                                .checkbox())
                        .add(itemContent()
                                .add(itemCell().css(modifier("flex-5"))
                                        .add(div().css("sc-data-list__blue-box")
                                                .add(b().id(item.id()).textContent("width 5"))
                                                .add(p().textContent(LoremIpsum.paragraphs(2)))))
                                .add(itemCell().css(modifier("flex-2"))
                                        .add(div().css("sc-data-list__blue-box")
                                                .add(b().textContent("width 2"))
                                                .add(p().textContent(LoremIpsum.paragraph()))))
                                .add(itemCell()
                                        .add(div().css("sc-data-list__blue-box")
                                                .add(b().textContent("default"))
                                                .add(p().textContent(LoremIpsum.words(2))))))
                        .add(itemAction()
                                .add(div().css(component(dataList, action))
                                        .add(Dropdown.<String> kebab().right()
                                                .add("Action One")
                                                .add("Action Two")
                                                .add("Disabled Action", true)
                                                .addSeparator()
                                                .add("Final Action")))))
                .add(expandableContent()
                        .add(expandableBody().textContent(LoremIpsum.paragraph()))))
};

DataProvider<DisplayData> dp2 = new DataProvider<>(DisplayData::id);
DataList<DisplayData> dl2 = dataList(dp2, (li, provider, item) -> item.display.render(li, provider, item));
dp2.addDisplay(dl2);
dp2.update(items2);

// Just a fake item data w/ a display delegate. See demos for a real example
static class DisplayData {

    final DataList.Display<HTMLLIElement, DisplayData> display;

    DisplayData(DataList.Display<HTMLLIElement, DisplayData> display) {
        this.display = display;
    }

    String id() {
        return Elements.uniqueId();
    }
}`,sa=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static org.elemento.Elements.span;
import static org.patternfly.component.DataList.dataList
import static org.patternfly.component.DataList.itemCell;
import static org.patternfly.component.DataList.itemContent;
import static org.patternfly.component.DataList.itemRow;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.alignRight;
import static org.patternfly.resources.Constants.noFill;

DisplayData[] items = {
        new DisplayData((li, provider, item) -> li.add(itemRow()
                .add(itemContent()
                        .add(itemCell()
                                .add(span().id(item.id()).textContent("Primary Content")))
                        .add(itemCell()
                                .textContent("Secondary Content"))))),

        new DisplayData((li, provider, item) -> li.add(itemRow()
                .add(itemContent()
                        .add(itemCell().css(modifier(noFill))
                                .add(span().id(item.id()).textContent("Primary content (pf-m-no-fill)")))
                        .add(itemCell().css(modifier(noFill), modifier(alignRight))
                                .textContent("Secondary content (pf-m-align-right pf-m-no-fill)")))))
};

DataProvider<DisplayData> dp = new DataProvider<>(DisplayData::id);
DataList<DisplayData> dl = dataList(dp, (li, provider, item) -> item.display.render(li, provider, item));
dp.addDisplay(dl);
dp.update(items);

// Just a fake item data w/ a display delegate. See demos for a real example
static class DisplayData {

    final DataList.Display<HTMLLIElement, DisplayData> display;

    DisplayData(DataList.Display<HTMLLIElement, DisplayData> display) {
        this.display = display;
    }

    String id() {
        return Elements.uniqueId();
    }
}`,da=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static com.google.gwt.i18n.client.DateTimeFormat.PredefinedFormat.ISO_8601;
import static elemental2.dom.DomGlobal.document;
import static org.elemento.Elements.*;
import static org.patternfly.component.DataTable.actionsColumn;
import static org.patternfly.component.DataTable.checkboxColumn;
import static org.patternfly.component.DataTable.column;
import static org.patternfly.component.DataTable.dataTable;


class Repository {

    String name;
    int branches;
    int pullRequests;
    int contributors;
    Date lastCommit;
}

DataProvider<Repository> dataProvider = new DataProvider<>(repo -> repo.name);
DataTable<DataTableComponent.Repository> dataTable = dataTable(dataProvider)
        .add(checkboxColumn())
        .add(column("Repository", (td, dp, repo) -> td.add(span().id(dp.getId(repo)).textContent(repo.name))))
        .add(column("Branches", (td, dp, repo) -> td.textContent(String.valueOf(repo.branches))))
        .add(column("Pull Requests", (td, dp, repo) -> td.textContent(String.valueOf(repo.pullRequests))))
        .add(column("Contributors", (td, dp, repo) -> td.textContent(String.valueOf(repo.contributors))))
        .add(column("Last Commit", (td, dp, repo) -> {
            // https://github.com/github/time-elements
            td.add(htmlElement("relative-time", HTMLElement.class)
                    .attr("datetime", DATE_FORMAT.format(repo.lastCommit)));
        }))
        .add(actionsColumn((td, dp, repo) -> {
            if (!repo.name.contains("p")) {
                td.add(Dropdown.<String>kebab().right()
                        .add("First action")
                        .add("Second action")
                        .addSeparator()
                        .add("Third action"));
            }
        }));
dataProvider.bindDisplay(dataTable);
dataProvider.update(repositories()); // sampe data omitted`,la=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static com.google.gwt.i18n.client.DateTimeFormat.PredefinedFormat.ISO_8601;
import static elemental2.dom.DomGlobal.document;
import static java.util.Comparator.comparing;
import static org.elemento.Elements.*;
import static org.patternfly.component.DataTable.actionsColumn;
import static org.patternfly.component.DataTable.checkboxColumn;
import static org.patternfly.component.DataTable.column;
import static org.patternfly.component.DataTable.dataTable;
import static org.patternfly.component.DataTable.expandColumn;

class Repository {

    String name;
    int branches;
    int pullRequests;
    int contributors;
    Date lastCommit;
}

DataProvider<Repository> dataProvider = new DataProvider<>(repo -> repo.name);
DataTable<DataTableComponent.Repository> dataTable = dataTable(dataProvider)
        .add(expandColumn())
        .add(checkboxColumn())
        .add(column("Repository", comparing(repo -> repo.name),
                (td, dp, repo) -> td.add(span().id(dp.getId(repo)).textContent(repo.name))))
        .add(column("Branches", comparing(repo -> repo.branches),
                (td, dp, repo) -> td.textContent(String.valueOf(repo.branches))))
        .add(column("Pull Requests", comparing(repo -> repo.pullRequests),
                (td, dp, repo) -> td.textContent(String.valueOf(repo.pullRequests))))
        .add(column("Contributors", comparing(repo -> repo.contributors),
                (td, dp, repo) -> td.textContent(String.valueOf(repo.contributors))))
        .add(column("Last Commit", comparing(repo -> repo.lastCommit),
                (td, dp, repo) -> {
                    // https://github.com/github/time-elements
                    td.add(htmlElement("relative-time", HTMLElement.class)
                            .attr("datetime", DATE_FORMAT.format(repo.lastCommit)));
                }))
        .add(actionsColumn((td, dp, repo) -> {
            if (!repo.name.contains("p")) {
                td.add(Dropdown.<String>kebab().right()
                        .add("First action")
                        .add("Second action")
                        .addSeparator()
                        .add("Third action"));
            }
        }))
        .expandableRow(repo -> repo.pullRequests > 0, (html, dp, repo) -> html.textContent(repo.lorem));
dataProvider.bindDisplay(dataTable);
dataProvider.update(repositories()); // sampe data omitted`,ca=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static com.google.gwt.i18n.client.DateTimeFormat.PredefinedFormat.ISO_8601;
import static elemental2.dom.DomGlobal.document;
import static org.elemento.Elements.*;
import static org.patternfly.component.DataTable.column;
import static org.patternfly.component.DataTable.dataTable;

class Repository {

    String name;
    int branches;
    int pullRequests;
    int contributors;
    Date lastCommit;
}

DataProvider<Repository> dataProvider = new DataProvider<>(repo -> repo.name);
DataTable<DataTableComponent.Repository> dataTable = dataTable(dataProvider, "This is the table caption")
        .add(column("Repository", (td, dp, repo) -> td.add(span().id(dp.getId(repo)).textContent(repo.name))))
        .add(column("Branches", (td, dp, repo) -> td.textContent(String.valueOf(repo.branches))))
        .add(column("Pull Requests", (td, dp, repo) -> td.textContent(String.valueOf(repo.pullRequests))))
        .add(column("Contributors", (td, dp, repo) -> td.textContent(String.valueOf(repo.contributors))))
        .add(column("Last Commit", (td, dp, repo) -> {
            // https://github.com/github/time-elements
            td.add(htmlElement("relative-time", HTMLElement.class)
                    .attr("datetime", DATE_FORMAT.format(repo.lastCommit)));
        }));
dataProvider.bindDisplay(dataTable);
dataProvider.update(repositories()); // sampe data omitted`,ma=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import elemental2.dom.HTMLElement;

import static com.google.gwt.i18n.client.DateTimeFormat.PredefinedFormat.ISO_8601;
import static elemental2.dom.DomGlobal.document;
import static java.util.Comparator.comparing;
import static org.elemento.Elements.*;
import static org.patternfly.component.DataTable.column;
import static org.patternfly.component.DataTable.dataTable;

class Repository {

    String name;
    int branches;
    int pullRequests;
    int contributors;
    Date lastCommit;
}

DataProvider<Repository> dataProvider = new DataProvider<>(repo -> repo.name);
DataTable<DataTableComponent.Repository> dataTable = dataTable(dataProvider)
        .add(column("Repository", comparing(repo -> repo.name),
                (td, dp, repo) -> td.add(span().id(dp.getId(repo)).textContent(repo.name))))
        .add(column("Branches", comparing(repo -> repo.branches),
                (td, dp, repo) -> td.textContent(String.valueOf(repo.branches))))
        .add(column("Pull Requests", comparing(repo -> repo.pullRequests),
                (td, dp, repo) -> td.textContent(String.valueOf(repo.pullRequests))))
        .add(column("Contributors", comparing(repo -> repo.contributors),
                (td, dp, repo) -> td.textContent(String.valueOf(repo.contributors))))
        .add(column("Last Commit", comparing(repo -> repo.lastCommit),
                (td, dp, repo) -> {
                    // https://github.com/github/time-elements
                    td.add(htmlElement("relative-time", HTMLElement.class)
                            .attr("datetime", DATE_FORMAT.format(repo.lastCommit)));
                }));
dataProvider.bindDisplay(dataTable);
dataProvider.update(repositories()); // sampe data omitted`,pa=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static org.patternfly.component.Alert.info;
import static org.patternfly.component.AlertGroup.toast;

Dropdown<String> dropdown = Dropdown.<String>text("Dropdown")
        .add("Item 1")
        .add("Item 2")
        .add("Disabled")
        .addSeparator()
        .add("Separated Item")
        .onToggle(open -> toast().add(info("Dropdown " + (open ? "expanded" : "collapsed"))))
        .onChange(value -> toast().add(info("Dropdown " + (value ? "checked" : "not checked"))))
        .onSelect(item -> toast().add(info("Selected " + item)));
dropdown.disable("Disabled");`,ua=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
Dropdown<String> dropdown = Dropdown.<String>text("Dropdown")
        .add("Item 1")
        .add("Item 2")
        .add(Dropdown.<String>group("Group 1")
                .add("Group 1 item 1")
                .add("Group 1 item 2"))
        .add(Dropdown.<String>group("Group 2")
                .add("Group 2 item 1")
                .add("Group 2 item 2"))
        // this item is added to the unnamed group above!
        .add("Item 3");
dropdown.getGroup("Group 2").disable("Group 2 item 1");`,fa=`import static org.patternfly.component.Icon.icon;
import static org.patternfly.resources.CSS.fas;

Dropdown<String> icon = Dropdown.<String>icon(icon(fas("th")))
        .add("Item 1")
        .add("Item 2")
        .add("Disabled")
        .addSeparator()
        .add("Separated Item");
icon.disable("Disabled");`,ba=`Dropdown<String> kebab = Dropdown.<String>kebab()
        .add("Item 1")
        .add("Item 2")
        .add("Disabled")
        .addSeparator()
        .add("Separated Item");
kebab.disable("Disabled");`,ga=`Dropdown<String> primary = Dropdown.<String>text("Dropdown").primary()
        .add("Item 1")
        .add("Item 2")
        .add("Disabled")
        .addSeparator()
        .add("Separated Item");
primary.disable("Disabled");`,ha=`Dropdown<String> right = Dropdown.<String>text("Dropdown").right()
        .add("Item 1")
        .add("Item 2")
        .add("Disabled")
        .addSeparator()
        .add("Separated Item");
right.disable("Disabled");`,ya=`Dropdown<String> dropdown = Dropdown.<String>text("Dropdown")
        .add("Item 1")
        .add("Item 2")
        .add("Disabled")
        .addSeparator()
        .add("Separated Item");
dropdown.disable("Disabled");`,wa=`Dropdown<String> noText = Dropdown.<String>splitCheckbox()
        .add("Item 1")
        .add("Item 2")
        .add("Disabled")
        .addSeparator()
        .add("Separated Item");
noText.disable("Disabled");

Dropdown<String> withText = Dropdown.<String>splitCheckbox("Dropdown")
        .add("Item 1")
        .add("Item 2")
        .add("Disabled")
        .addSeparator()
        .add("Separated Item");
withText.disable("Disabled");`,va=`import org.patternfly.component.Dropdown;

enum Color {

    Success("#92D400", "#151515"),
    Information("#73BCF7", "#151515"),
    Warning("#f0AB00", "#151515"),
    Danger("#C9190B", "#eeeeee");

    final String bg;
    final String fg;

    Color(String bg, String fg) {
        this.bg = bg;
        this.fg = fg;
    }
}

Dropdown<Color> dropdown = Dropdown.<Color>text("Dropdown")
    .display((html, color) -> html.style("background-color:" + color.bg + ";color:" + color.fg)
            .textContent(color.name()))
    .add(Color.values());`,Sa=`Dropdown<String> up = Dropdown.<String>text("Dropdown").up()
        .add("Item 1")
        .add("Item 2")
        .add("Disabled")
        .addSeparator()
        .add("Separated Item");
up.disable("Disabled");`,Ta=`import static org.patternfly.core.Callback.noop;
import static org.patternfly.component.Icon.icon;
import static org.patternfly.resources.CSS.fas;

EmptyState large = EmptyState.emptyState(icon(fas("cubes")), "Empty State").large()
        .body("This represents an the empty state pattern in PatternFly 4. " +
              "Hopefully it's simple enough to use but flexible enough to meet a variety of needs.")
        .primary("Primary action", noop())
        .secondary("Multiple", noop())
        .secondary("Action buttons", noop())
        .secondary("Can", noop())
        .secondary("Go here", noop())
        .secondary("In the secondary", noop())
        .secondary("Action area", noop());`,Ca=`import static org.patternfly.core.Callback.noop;

EmptyState noResults = EmptyState.noResults(noop());`,La=`import static org.patternfly.component.Icon.icon;
import static org.patternfly.resources.CSS.fas;

EmptyState primaryLink = EmptyState.emptyState(fas("cubes"), "Empty State")
        .body("This represents an the empty state pattern in PatternFly 4. " +
              "Hopefully it's simple enough to use but flexible enough to meet a variety of needs.")
        .primary(Button.link("Action button"));`,Da=`import static org.patternfly.core.Callback.noop;
import static org.patternfly.component.Icon.icon;
import static org.patternfly.resources.CSS.fas;

EmptyState small = EmptyState.emptyState(icon(fas("cubes")), "Empty State").small()
        .body("This represents an the empty state pattern in PatternFly 4. " +
              "Hopefully it's simple enough to use but flexible enough to meet a variety of needs.")
        .primary("Primary action", noop())
        .secondary("Multiple", noop())
        .secondary("Action buttons", noop())
        .secondary("Can", noop())
        .secondary("Go here", noop())
        .secondary("In the secondary", noop())
        .secondary("Action area", noop());`,xa="EmptyState loading = EmptyState.spinner();",Aa=`import static org.patternfly.core.Callback.noop;
import static org.patternfly.component.Icon.icon;
import static org.patternfly.resources.CSS.fas;

EmptyState emptyState = EmptyState.emptyState(icon(fas("cubes")), "Empty State")
        .body("This represents an the empty state pattern in PatternFly 4. " +
              "Hopefully it's simple enough to use but flexible enough to meet a variety of needs.")
        .primary("Primary action", noop())
        .secondary("Multiple", noop())
        .secondary("Action buttons", noop())
        .secondary("Can", noop())
        .secondary("Go here", noop())
        .secondary("In the secondary", noop())
        .secondary("Action area", noop());`,_a='Expandable e = Expandable.expandable().textContent("This content is visible only when the component is expanded.");',Ia=`/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
Label l0 = Label.label("Default Label");
Label l1 = Label.label("Compact Label", true);`,ja=`import static org.patternfly.resources.CSS.fas;

MultiOptionsMenu mom = MultiOptionsMenu.icon(fas("sort-amount-down"))
        .add(new Group<String>("Sort by")
                .add(new String[] {
                        "Name",
                        "Date",
                        "Size"
                }))
        .add(new Group<String>("Sort direction")
                .add(new String[] {
                        "Ascending",
                        "Descending"
                }));`,Na=`import static org.patternfly.component.Icon.icon;
import static org.patternfly.resources.CSS.fas;

SingleOptionsMenu<String> som0 = SingleOptionsMenu.icon(icon(fas("sort-amount-down")))
        .add(new String[] {
                "Option 1",
                "Option 2",
                "Option 3",
        });

SingleOptionsMenu<String> som1 = SingleOptionsMenu.icon(icon(fas("sort-amount-down"))).disable()
        .add(new String[] {
                "Option 1",
                "Option 2",
                "Option 3",
        }));

SingleOptionsMenu<String> som2 = SingleOptionsMenu.plain("Options menu")
        .add(new String[] {
                "Option 1",
                "Option 2",
                "Option 3",
        });

SingleOptionsMenu<String> som3 = SingleOptionsMenu.plain("Options menu").disable()
        .add(new String[] {
                "Option 1",
                "Option 2",
                "Option 3",
        }));`,Ra=`SingleOptionsMenu<String> som = SingleOptionsMenu.text("Options menu").right()
        .add(new String[] {
                "Option 1",
                "Another option",
                "Last option",
        });`,ka=`SingleOptionsMenu<String> som0 = SingleOptionsMenu.text("Options menu")
        .add(new String[] {
                "Option 1",
                "Option 2",
                "Option 3",
        })
        .select("Option 2");

SingleOptionsMenu<String> som1 = SingleOptionsMenu.text("Options menu").disable()
        .add(new String[] {
                "Option 1",
                "Option 2",
                "Option 3",
        });`,Ea=`SingleOptionsMenu<String> som = SingleOptionsMenu.text("Options menu").up()
        .add(new String[] {
                "Option 1",
                "Option 2",
                "Option 3",
        });`,Ma=`import static org.patternfly.component.Icon.icon;
import static org.patternfly.resources.CSS.fas;
import static org.patternfly.resources.CSS.util;

Tabs tabs = Tabs.tabs()
        .add("Tab Item 1", div().textContent("Tab 1"))
        .add("Tab Item 2", div().textContent("Tab 2"))
        .add("Tab Item 3", div().textContent("Tab 3"))
        .add("tab-item-4",
                tab -> tab
                        .add("Tab 4")
                        .add(icon(fas("address-book")).css(util("pl-lg"))),
                panel -> panel.textContent(("Tab 4")));
`,Oa=`import static org.patternfly.resources.CSS.Size.*;

Title t0 = Title.title(1, "4xl Title", _4xL);
Title t1 = Title.title(2, "3xl Title", _3xL);
Title t2 = Title.title(3, "2xl Title", _2xL);
Title t3 = Title.title(4, "xl Title", _xl);
Title t4 = Title.title(5, "lg Title", _lg);
Title t5 = Title.title(6, "md Title", _md);`,Ba=Object.assign({"./alert-inline-types.java":St,"./alert-variants.java":Tt,"./alert-variations.java":Ct,"./avatar.java":Lt,"./badge-read.java":Dt,"./badge-unread.java":xt,"./brand.java":At,"./button-block.java":_t,"./button-event.java":It,"./button-links.java":jt,"./button-states.java":Nt,"./button-types.java":Rt,"./button-variations.java":kt,"./card-actions-in-head.java":Et,"./card-body-fill.java":Mt,"./card-compact.java":Ot,"./card-content-only.java":Bt,"./card-header-in-head.java":Pt,"./card-hover.java":zt,"./card-image-actions.java":Ft,"./card-image-in-head.java":Ht,"./card-multiple-bodies.java":Ut,"./card-no-footer.java":Wt,"./card-no-header.java":Kt,"./card-simple.java":Gt,"./chip-group.java":Yt,"./chip-on-close.java":Vt,"./chip-toolbar.java":qt,"./chip.java":Jt,"./content-body.java":$t,"./content-data-list.java":Zt,"./content-headings.java":Qt,"./content-ordered-list.java":Xt,"./content-unordered-list.java":ea,"./context-selector-event.java":ta,"./context-selector-simple.java":aa,"./context-selector-typed.java":na,"./data-list-checkbox.java":ia,"./data-list-expandable.java":ra,"./data-list-modifiers.java":oa,"./data-list-simple.java":sa,"./data-table-checkbox.java":da,"./data-table-expandable.java":la,"./data-table-simple.java":ca,"./data-table-sortable.java":ma,"./dropdown-event.java":pa,"./dropdown-groups.java":ua,"./dropdown-icon.java":fa,"./dropdown-kebab.java":ba,"./dropdown-primary.java":ga,"./dropdown-right.java":ha,"./dropdown-simple.java":ya,"./dropdown-split.java":wa,"./dropdown-typed.java":va,"./dropdown-up.java":Sa,"./empty-state-large.java":Ta,"./empty-state-no-match.java":Ca,"./empty-state-primary.java":La,"./empty-state-small.java":Da,"./empty-state-spinner.java":xa,"./empty-state.java":Aa,"./expandable.java":_a,"./label.java":Ia,"./options-menu-multiple.java":ja,"./options-menu-plain.java":Na,"./options-menu-right.java":Ra,"./options-menu-single.java":ka,"./options-menu-up.java":Ea,"./tabs.java":Ma,"./title.java":Oa}),tt=new Map;for(const[r,e]of Object.entries(Ba)){let t=r.replace("./","").replace(".java","");tt.set(t,e)}window.PatternFlyCode={code:tt};const Pa=[{name:"US-Node-1",threads:5,applications:25,workspaces:5,status:"STOPPED",location:"Raleigh"},{name:"US-Node 2",threads:5,applications:30,workspaces:2,status:"DOWN",location:"Westford"},{name:"US-Node 3",threads:13,applications:35,workspaces:12,status:"DEGRADED",location:"Boston"},{name:"US-Node 4",threads:2,applications:5,workspaces:18,status:"NEEDS_MAINTENANCE",location:"Raleigh"},{name:"US-Node 5",threads:7,applications:30,workspaces:5,status:"RUNNING",location:"Boston"},{name:"US-Node 6",threads:5,applications:20,workspaces:15,status:"STOPPED",location:"Raleigh"},{name:"CZ-Node 1",threads:12,applications:48,workspaces:13,status:"DOWN",location:"Brno"},{name:"CZ-Node 2",threads:3,applications:8,workspaces:20,status:"RUNNING",location:"Brno"},{name:"CZ-Remote-Node 1",threads:15,applications:20,workspaces:10,status:"DOWN",location:"Brno"},{name:"Bangalore-Node 1",threads:20,applications:30,workspaces:30,status:"RUNNING",location:"Bangalore"}],za=[{gender:"male",name:{title:"Mr",first:"Tommy",last:"Forberg"},location:{street:{number:5762,name:"Mortensrudveien"},city:"Sandvoll",state:"Troms - Romsa",country:"Norway",postcode:"9281",coordinates:{latitude:"56.8082",longitude:"-27.4907"},timezone:{offset:"+3:00",description:"Baghdad, Riyadh, Moscow, St. Petersburg"}},email:"tommy.forberg@example.com",login:{uuid:"e3899adc-a747-4cd8-ba1a-863c91d2eab8",username:"bigostrich596",password:"pacers",salt:"PCrCX1FE",md5:"94d06cfb88b411e962fb4c47930e275f",sha1:"88bff94cb414e20212e008949d57c1fc3641f3b7",sha256:"5c28f7d99b19de31422a1e10f588ce914c779e8fa8a36cb83f0b6e19ad2179a5"},dob:{date:"1967-01-15T08:26:22.862",age:52},registered:{date:"2006-08-02T13:13:56.852",age:13},phone:"60818675",cell:"91165777",id:{name:"FN",value:"15016729148"},picture:{large:"https://randomuser.me/api/portraits/men/77.jpg",medium:"https://randomuser.me/api/portraits/med/men/77.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/77.jpg"},nat:"NO"},{gender:"male",name:{title:"Mr",first:"Isaiah",last:"Day"},location:{street:{number:8113,name:"Church Road"},city:"Bristol",state:"Derbyshire",country:"United Kingdom",postcode:"Z6 1SE",coordinates:{latitude:"48.0816",longitude:"-117.0155"},timezone:{offset:"-2:00",description:"Mid-Atlantic"}},email:"isaiah.day@example.com",login:{uuid:"298bbb6f-8663-46c2-a45a-02d31eb3cb08",username:"smallpanda114",password:"chang",salt:"MblZoe6Q",md5:"2b9b4bca536b8e903c7d5d3533a4f2aa",sha1:"7707aa0eb69cd8726c88e805a8eb0a539a7d71ea",sha256:"438f3da19bcaabbd6beeb0c19d62503b56fc2e418143784c3ae38c1d7e59d950"},dob:{date:"1975-01-26T17:17:13.299",age:44},registered:{date:"2008-02-19T18:49:49.812",age:11},phone:"0111944 436 5313",cell:"0706-072-997",id:{name:"NINO",value:"JM 88 50 69 D"},picture:{large:"https://randomuser.me/api/portraits/men/56.jpg",medium:"https://randomuser.me/api/portraits/med/men/56.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/56.jpg"},nat:"GB"},{gender:"female",name:{title:"Ms",first:"Brooklyn",last:"Morrison"},location:{street:{number:6781,name:"Shady Ln Dr"},city:"Birmingham",state:"North Dakota",country:"United States",postcode:38328,coordinates:{latitude:"-29.1843",longitude:"22.3481"},timezone:{offset:"+4:00",description:"Abu Dhabi, Muscat, Baku, Tbilisi"}},email:"brooklyn.morrison@example.com",login:{uuid:"5c936168-a8d7-4f5f-901f-6775b85250c6",username:"silverelephant249",password:"scottie",salt:"RosXf1Ut",md5:"353a6400023c7e2e8770ec512914d60b",sha1:"40d6d2a9e38d93d42a0956253a6518383acefa9a",sha256:"ebb3e2ae76155d61e9602ff9d6dca7f242d8161b4461a14b8b2ae7a30fac22df"},dob:{date:"1948-04-16T17:35:06.909",age:71},registered:{date:"2012-12-27T11:37:07.240",age:7},phone:"(991)-437-4760",cell:"(903)-460-5233",id:{name:"SSN",value:"627-00-5554"},picture:{large:"https://randomuser.me/api/portraits/women/20.jpg",medium:"https://randomuser.me/api/portraits/med/women/20.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/20.jpg"},nat:"US"},{gender:"male",name:{title:"Mr",first:"Eduardo",last:"Moreno"},location:{street:{number:8265,name:"Paseo de Zorrilla"},city:"Córdoba",state:"Cantabria",country:"Spain",postcode:70314,coordinates:{latitude:"-42.5777",longitude:"-84.3490"},timezone:{offset:"+2:00",description:"Kaliningrad, South Africa"}},email:"eduardo.moreno@example.com",login:{uuid:"93a28313-8e3c-4f69-804d-9a713ee0998b",username:"silverfrog144",password:"player",salt:"b4tL5gxi",md5:"b5e9a19401bd2fdf2efc87866c767f8a",sha1:"e5a90c2397746f76059981b06cf56a1abb79bde2",sha256:"f31530065d5dbe0fa81e49e485d35fd81c139a863f8695b99c21fcb9816da6fe"},dob:{date:"1947-04-08T15:24:20.292",age:72},registered:{date:"2014-11-16T05:27:19.149",age:5},phone:"960-947-269",cell:"675-577-949",id:{name:"DNI",value:"85145770-J"},picture:{large:"https://randomuser.me/api/portraits/men/78.jpg",medium:"https://randomuser.me/api/portraits/med/men/78.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/78.jpg"},nat:"ES"},{gender:"female",name:{title:"Miss",first:"Alex",last:"Edwards"},location:{street:{number:4348,name:"The Grove"},city:"Shannon",state:"Wicklow",country:"Ireland",postcode:22703,coordinates:{latitude:"56.4766",longitude:"161.7223"},timezone:{offset:"+8:00",description:"Beijing, Perth, Singapore, Hong Kong"}},email:"alex.edwards@example.com",login:{uuid:"99f09505-fab3-4ec8-bddf-b8f318252024",username:"ticklishswan591",password:"staples",salt:"PDeIpmzu",md5:"4a40d8cbe79357847588579a808fa173",sha1:"72eaa7340c0139df6ebff20f472cacd3084f571e",sha256:"a81adf530f487faadb1b4b1336229138aacfea8a2e5d7020b59b1dea8b574c43"},dob:{date:"1954-05-12T07:43:52.918",age:65},registered:{date:"2012-01-16T22:06:47.860",age:7},phone:"071-335-1068",cell:"081-059-3949",id:{name:"PPS",value:"9101767T"},picture:{large:"https://randomuser.me/api/portraits/women/85.jpg",medium:"https://randomuser.me/api/portraits/med/women/85.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/85.jpg"},nat:"IE"},{gender:"female",name:{title:"Ms",first:"یسنا",last:"حیدری"},location:{street:{number:501,name:"میدان فلسطین"},city:"ملارد",state:"چهارمحال و بختیاری",country:"Iran",postcode:88445,coordinates:{latitude:"50.9593",longitude:"-12.8503"},timezone:{offset:"-9:00",description:"Alaska"}},email:"ysn.hydry@example.com",login:{uuid:"e9d7e416-ef11-4a0c-bffb-fa2a243d277c",username:"goldenkoala845",password:"matthew",salt:"S5aynlJz",md5:"73457728ef8e1e5ad408939f40c55628",sha1:"41378655b2901ba0a285d5bb3afa8211ccb659e7",sha256:"4358e0864912a03bf816cf047a2bbba08cdfae1dd43f1468b7788b694b2b1376"},dob:{date:"1974-11-29T04:25:36.148",age:45},registered:{date:"2019-01-14T10:54:32.551",age:0},phone:"008-13637372",cell:"0986-070-3112",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/63.jpg",medium:"https://randomuser.me/api/portraits/med/women/63.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/63.jpg"},nat:"IR"},{gender:"female",name:{title:"Mrs",first:"Phoebe",last:"Cooper"},location:{street:{number:3648,name:"North Street"},city:"Bandon",state:"Louth",country:"Ireland",postcode:10059,coordinates:{latitude:"-62.9379",longitude:"22.5806"},timezone:{offset:"-6:00",description:"Central Time (US & Canada), Mexico City"}},email:"phoebe.cooper@example.com",login:{uuid:"707e0cc7-2dc1-406c-b1bb-b847258dd90a",username:"blackgoose585",password:"lionel",salt:"9hY1PCGH",md5:"3173c4e5619e9ddb388c28a566d01629",sha1:"3433df7ee4c182e719d21e7bb242f35f28e79f00",sha256:"2c5fdab5b64d37a21d37d262c8895a6fde241deb8cbf07cc4e5feee5c0b5ca76"},dob:{date:"1955-02-18T17:16:56.428",age:64},registered:{date:"2019-09-16T06:25:43.791",age:0},phone:"031-163-2405",cell:"081-728-7453",id:{name:"PPS",value:"0329817T"},picture:{large:"https://randomuser.me/api/portraits/women/4.jpg",medium:"https://randomuser.me/api/portraits/med/women/4.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/4.jpg"},nat:"IE"},{gender:"female",name:{title:"Ms",first:"Emilie",last:"Tremblay"},location:{street:{number:6966,name:"Bay Ave"},city:"Inverness",state:"Ontario",country:"Canada",postcode:"N3E 2O6",coordinates:{latitude:"78.1485",longitude:"-128.5001"},timezone:{offset:"-1:00",description:"Azores, Cape Verde Islands"}},email:"emilie.tremblay@example.com",login:{uuid:"ff29eaab-1a5b-434c-9db5-cc42193ff276",username:"beautifulmouse550",password:"r2d2",salt:"0brMn0PU",md5:"c453b59651227fcf76aca9ac0e5c715d",sha1:"47725f9d84f45ae70228888ff2722b36d58d9612",sha256:"a80de82abaf80d6e7d115c3a1c095751b7b286f0e0b901fc7b1815b222d8da11"},dob:{date:"1970-12-23T14:35:24.325",age:49},registered:{date:"2004-07-20T08:27:54.578",age:15},phone:"453-056-5421",cell:"479-696-6628",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/77.jpg",medium:"https://randomuser.me/api/portraits/med/women/77.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/77.jpg"},nat:"CA"},{gender:"male",name:{title:"Mr",first:"Hamed",last:"Van Boheemen"},location:{street:{number:2378,name:"Dadelgaarde"},city:"Rozendaal",state:"Noord-Brabant",country:"Netherlands",postcode:40148,coordinates:{latitude:"53.2933",longitude:"-18.1082"},timezone:{offset:"+6:00",description:"Almaty, Dhaka, Colombo"}},email:"hamed.vanboheemen@example.com",login:{uuid:"b90f0579-0844-4494-8009-89663498df33",username:"organiccat854",password:"142536",salt:"XxCgB5ea",md5:"28d2506bc586917463fa2332e65fd701",sha1:"a55e84276980265d83285a6c561a2e096b771b75",sha256:"eaa62a6e6f069c2c4de7177b238516ecb447cbc07b7c6d287c7dd40c72f0dfe6"},dob:{date:"1989-05-22T08:57:24.378",age:30},registered:{date:"2014-05-23T21:06:54.212",age:5},phone:"(820)-012-3020",cell:"(794)-451-5424",id:{name:"BSN",value:"67811929"},picture:{large:"https://randomuser.me/api/portraits/men/43.jpg",medium:"https://randomuser.me/api/portraits/med/men/43.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/43.jpg"},nat:"NL"},{gender:"female",name:{title:"Ms",first:"آوا",last:"موسوی"},location:{street:{number:1495,name:"شهید گلپایگانی"},city:"گلستان",state:"ایلام",country:"Iran",postcode:18923,coordinates:{latitude:"30.6281",longitude:"-168.9158"},timezone:{offset:"+3:30",description:"Tehran"}},email:"aw.mwswy@example.com",login:{uuid:"e59e162b-c500-4bca-8e7c-3aec99bbe6fd",username:"ticklishdog307",password:"marco",salt:"PmKy3r5g",md5:"08f8c27f3470d2f7e839162cd3d586ae",sha1:"382681c0e979704e69303365d6a0c12e1da3c933",sha256:"de8d0a1fab59f41f07d98da591978ce83f65b4008cf51a1f472a142545d2b987"},dob:{date:"1991-06-17T03:14:32.090",age:28},registered:{date:"2009-05-16T08:15:47.832",age:10},phone:"049-62027296",cell:"0937-288-7110",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/53.jpg",medium:"https://randomuser.me/api/portraits/med/women/53.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/53.jpg"},nat:"IR"},{gender:"male",name:{title:"Mr",first:"Argentino",last:"Dias"},location:{street:{number:2652,name:"Rua Doze "},city:"Itaboraí",state:"Bahia",country:"Brazil",postcode:26273,coordinates:{latitude:"15.4160",longitude:"-139.0604"},timezone:{offset:"+8:00",description:"Beijing, Perth, Singapore, Hong Kong"}},email:"argentino.dias@example.com",login:{uuid:"78bb059e-032d-46ed-b2a7-184365ddd828",username:"crazybird163",password:"united",salt:"AYkiVa4n",md5:"19a7728ef154f77523dd1d659618329d",sha1:"8cf7f5898cdfb026fd824d83898bd94dbff3aef8",sha256:"cd81bce4e014d2fb5492ed7b5e44e544fc3ea66ca98503a3a44d9aad187748ae"},dob:{date:"1982-07-28T08:22:58.558",age:37},registered:{date:"2005-12-01T13:34:49.567",age:14},phone:"(21) 7578-3673",cell:"(42) 6754-2213",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/32.jpg",medium:"https://randomuser.me/api/portraits/med/men/32.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/32.jpg"},nat:"BR"},{gender:"male",name:{title:"Mr",first:"Thor",last:"Van der Wilk"},location:{street:{number:4610,name:"Fortuinhof"},city:"Wijckel",state:"Groningen",country:"Netherlands",postcode:51272,coordinates:{latitude:"69.2321",longitude:"172.0730"},timezone:{offset:"+10:00",description:"Eastern Australia, Guam, Vladivostok"}},email:"thor.vanderwilk@example.com",login:{uuid:"55820ad1-9f5f-46ff-913b-bbaef1f20ccc",username:"blackkoala826",password:"wolfpac",salt:"OT7yxfJ6",md5:"dab2d470d1d29cc16bc895ed3dd1d8f7",sha1:"12ef83cf6f8399cd46e4b06329aeb9bf45a4e500",sha256:"be02870a1dd93906297325c71e4dbb0e7b4e452b3fe58771167ac2a4645e176c"},dob:{date:"1979-05-08T03:03:04.619",age:40},registered:{date:"2008-09-10T02:09:42.738",age:11},phone:"(918)-712-4211",cell:"(794)-821-4479",id:{name:"BSN",value:"34987248"},picture:{large:"https://randomuser.me/api/portraits/men/71.jpg",medium:"https://randomuser.me/api/portraits/med/men/71.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/71.jpg"},nat:"NL"},{gender:"female",name:{title:"Miss",first:"Annette",last:"Hart"},location:{street:{number:8897,name:"Paddock Way"},city:"Sunshine Coast",state:"New South Wales",country:"Australia",postcode:9074,coordinates:{latitude:"66.8911",longitude:"75.5145"},timezone:{offset:"-8:00",description:"Pacific Time (US & Canada)"}},email:"annette.hart@example.com",login:{uuid:"e0632969-56d8-4fa1-925a-5c4b3e90b153",username:"biglion741",password:"kayla",salt:"iVe0O8An",md5:"469a89ae5326a1bf7d6affa554ec2663",sha1:"8dbf7dd03425cb7c5506a12916c01bdb40be092b",sha256:"0c68e51a03f53a8b229e7e6e20a52be2121019418a4cf42bdc5650384ed577de"},dob:{date:"1953-08-03T00:10:51.077",age:66},registered:{date:"2017-04-20T15:35:35.062",age:2},phone:"07-9008-4774",cell:"0400-415-960",id:{name:"TFN",value:"553806365"},picture:{large:"https://randomuser.me/api/portraits/women/49.jpg",medium:"https://randomuser.me/api/portraits/med/women/49.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/49.jpg"},nat:"AU"},{gender:"female",name:{title:"Miss",first:"Saana",last:"Rantanen"},location:{street:{number:2230,name:"Visiokatu"},city:"Vihti",state:"Uusimaa",country:"Finland",postcode:50983,coordinates:{latitude:"-67.7792",longitude:"-106.4336"},timezone:{offset:"+4:00",description:"Abu Dhabi, Muscat, Baku, Tbilisi"}},email:"saana.rantanen@example.com",login:{uuid:"9ac28358-190f-41cd-a788-82683f062a54",username:"silverladybug648",password:"archange",salt:"WNisqUyv",md5:"5a4d86f630150bc7eb5bd4456a8101fb",sha1:"20cf6ba838f7fc102a115031eed5bd8f25a807cf",sha256:"c83b1d0a72dc28d88fb6201541327048f0816deb12694a56b8309842bacf4dc0"},dob:{date:"1991-01-07T01:48:51.359",age:28},registered:{date:"2010-09-23T20:17:04.259",age:9},phone:"07-292-782",cell:"045-407-89-13",id:{name:"HETU",value:"NaNNA814undefined"},picture:{large:"https://randomuser.me/api/portraits/women/56.jpg",medium:"https://randomuser.me/api/portraits/med/women/56.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/56.jpg"},nat:"FI"},{gender:"female",name:{title:"Mrs",first:"Marilyn",last:"Burton"},location:{street:{number:9649,name:"W Belt Line Rd"},city:"Hobart",state:"Victoria",country:"Australia",postcode:753,coordinates:{latitude:"-9.9407",longitude:"-152.7294"},timezone:{offset:"-12:00",description:"Eniwetok, Kwajalein"}},email:"marilyn.burton@example.com",login:{uuid:"8b4dc786-053f-4d1b-986e-d6b3790f0493",username:"tinysnake945",password:"hedgehog",salt:"hp0cJ6u3",md5:"b9ce88daa5853734af8ac1875affa6e0",sha1:"1cb529a46f4339ba155cf4d65f4aabf21fe1615f",sha256:"7d4a647cb410975dba7400819b9f53d25ef7dc7add9f843b8db2e24584068f13"},dob:{date:"1990-08-01T21:57:35.503",age:29},registered:{date:"2010-01-10T08:38:55.939",age:9},phone:"08-4321-0712",cell:"0492-784-633",id:{name:"TFN",value:"536379362"},picture:{large:"https://randomuser.me/api/portraits/women/51.jpg",medium:"https://randomuser.me/api/portraits/med/women/51.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/51.jpg"},nat:"AU"},{gender:"male",name:{title:"Mr",first:"Enrique",last:"Cook"},location:{street:{number:747,name:"Lone Wolf Trail"},city:"Busselton",state:"Tasmania",country:"Australia",postcode:6764,coordinates:{latitude:"89.4421",longitude:"61.0250"},timezone:{offset:"+9:00",description:"Tokyo, Seoul, Osaka, Sapporo, Yakutsk"}},email:"enrique.cook@example.com",login:{uuid:"cb09872c-7850-48a9-b427-cf9eaba3e852",username:"organicpanda244",password:"sally",salt:"vblTBuCZ",md5:"c2b6620dce62eefeb1df1e092f54c35f",sha1:"b71f9ccd28a4ec3882abd354487219460605627d",sha256:"d808ce7527b0a7d324a4578c30c9cd2b2313874c3e94469b406f3613884eb7ad"},dob:{date:"1997-08-11T00:30:59.934",age:22},registered:{date:"2014-01-08T15:15:42.867",age:5},phone:"09-6747-5453",cell:"0479-572-769",id:{name:"TFN",value:"855077114"},picture:{large:"https://randomuser.me/api/portraits/men/0.jpg",medium:"https://randomuser.me/api/portraits/med/men/0.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/0.jpg"},nat:"AU"},{gender:"female",name:{title:"Mrs",first:"Hannah",last:"Williams"},location:{street:{number:1205,name:"Dundas Rd"},city:"Hudson",state:"Newfoundland and Labrador",country:"Canada",postcode:"L3J 1Y4",coordinates:{latitude:"-49.4360",longitude:"24.8889"},timezone:{offset:"+4:30",description:"Kabul"}},email:"hannah.williams@example.com",login:{uuid:"bc75bc34-b85c-4671-be10-092ddb6c3101",username:"organicrabbit571",password:"ollie",salt:"j23Fqbdm",md5:"c33455702a6a1729a89d8b1fc8e07813",sha1:"7c21f2a47d221274a127f78f2efa1d7cecad80da",sha256:"6759bd2a9cf71bd46989fab99733fd7f4a6a50a10e08caac738e18656039217a"},dob:{date:"1967-11-05T18:32:47.909",age:52},registered:{date:"2008-03-14T22:34:45.254",age:11},phone:"781-861-4207",cell:"967-293-6507",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/5.jpg",medium:"https://randomuser.me/api/portraits/med/women/5.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/5.jpg"},nat:"CA"},{gender:"female",name:{title:"Ms",first:"Esma",last:"Kaya"},location:{street:{number:62,name:"Mevlana Cd"},city:"Gaziantep",state:"Muş",country:"Turkey",postcode:89152,coordinates:{latitude:"-47.5920",longitude:"-54.6969"},timezone:{offset:"+1:00",description:"Brussels, Copenhagen, Madrid, Paris"}},email:"esma.kaya@example.com",login:{uuid:"041bf678-2973-46ac-932f-3eb91af928f2",username:"crazygoose330",password:"dylan1",salt:"ME7M38sA",md5:"015c9a215236964f65d38ebdf2ab269d",sha1:"e7948e620a3f5a372f2096fdde18b1b2ea79ef66",sha256:"763253b99ed78f73a9f85658a3402e63ad5d906521d8b6d1d71b99472952b870"},dob:{date:"1972-09-18T01:26:40.310",age:47},registered:{date:"2018-11-10T21:07:28.672",age:1},phone:"(740)-804-3048",cell:"(482)-715-1046",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/31.jpg",medium:"https://randomuser.me/api/portraits/med/women/31.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/31.jpg"},nat:"TR"},{gender:"male",name:{title:"Mr",first:"Wade",last:"Kim"},location:{street:{number:4135,name:"Marsh Ln"},city:"Nowra",state:"Tasmania",country:"Australia",postcode:3544,coordinates:{latitude:"-72.1536",longitude:"58.4303"},timezone:{offset:"+2:00",description:"Kaliningrad, South Africa"}},email:"wade.kim@example.com",login:{uuid:"396e4e19-d23d-4687-b940-4c3fa5b4ddb2",username:"orangepeacock311",password:"laurent",salt:"k9RAtvYs",md5:"4c37334682910d366219ec58d6ddf57c",sha1:"f71a42e3ea9d46c16f4cd09bef27a257a498a01c",sha256:"aa28258d0b13e8401912a26ff72343c828b1796c82ad99e555a0ffe4222cde26"},dob:{date:"1948-10-18T11:17:19.436",age:71},registered:{date:"2005-04-03T23:23:08.822",age:14},phone:"05-0600-0759",cell:"0426-688-712",id:{name:"TFN",value:"095601126"},picture:{large:"https://randomuser.me/api/portraits/men/98.jpg",medium:"https://randomuser.me/api/portraits/med/men/98.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/98.jpg"},nat:"AU"},{gender:"female",name:{title:"Mrs",first:"Henri",last:"Hauschild"},location:{street:{number:1388,name:"Im Winkel"},city:"Lollar",state:"Bremen",country:"Germany",postcode:22603,coordinates:{latitude:"-66.4058",longitude:"-158.6407"},timezone:{offset:"+10:00",description:"Eastern Australia, Guam, Vladivostok"}},email:"henri.hauschild@example.com",login:{uuid:"1426d456-226d-422c-8e3e-411b3531b9ce",username:"bluezebra825",password:"retired",salt:"SvWJ82uS",md5:"b29b593e7387d1b0cb125b171c195667",sha1:"e53fb8baddb1a7e9e18217fa935da956dae2cd47",sha256:"86dccf60900f0a1fe9f899c0bee815f1082c6b7c003d738913392267cf5dd5e6"},dob:{date:"1954-05-18T01:14:11.638",age:65},registered:{date:"2009-11-17T03:11:06.718",age:10},phone:"0852-2668273",cell:"0179-3645804",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/26.jpg",medium:"https://randomuser.me/api/portraits/med/women/26.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/26.jpg"},nat:"DE"},{gender:"male",name:{title:"Mr",first:"Ian",last:"Jordan"},location:{street:{number:5782,name:"Mockingbird Ln"},city:"Corpus Christi",state:"Rhode Island",country:"United States",postcode:82672,coordinates:{latitude:"-22.8504",longitude:"61.2690"},timezone:{offset:"-8:00",description:"Pacific Time (US & Canada)"}},email:"ian.jordan@example.com",login:{uuid:"b674ab96-3425-4c1e-8f78-e67abe6619ef",username:"orangeduck143",password:"lawman",salt:"QHQaDfYW",md5:"75e20e8abb99a9dc37d27191bc28a3b8",sha1:"7e776e6ac42830697f69522a73c7503d02599d39",sha256:"ccc0026cec3f994bbf78b038aada340aa66a49444613edf0ba5710e39302b48b"},dob:{date:"1987-08-08T07:38:30.434",age:32},registered:{date:"2004-03-24T12:00:07.329",age:15},phone:"(415)-490-1891",cell:"(652)-664-0105",id:{name:"SSN",value:"502-89-9747"},picture:{large:"https://randomuser.me/api/portraits/men/41.jpg",medium:"https://randomuser.me/api/portraits/med/men/41.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/41.jpg"},nat:"US"},{gender:"male",name:{title:"Mr",first:"Alejandro",last:"Mora"},location:{street:{number:2239,name:"Calle de Ángel García"},city:"Talavera de la Reina",state:"Cataluña",country:"Spain",postcode:10564,coordinates:{latitude:"-62.2931",longitude:"-15.4600"},timezone:{offset:"+9:00",description:"Tokyo, Seoul, Osaka, Sapporo, Yakutsk"}},email:"alejandro.mora@example.com",login:{uuid:"ca5bf2eb-2364-421c-a6c4-376ce46fdb47",username:"lazyostrich163",password:"smashing",salt:"qR3m7sBK",md5:"7d187ad3da1415fa32bf87e04d876c0b",sha1:"aea980151d579f4c5d1aa54e742d3468520adbfe",sha256:"a882f7131432b188c354499e132ea4d6434890fff6b14ae1a6c869491445a301"},dob:{date:"1980-06-05T21:18:22.341",age:39},registered:{date:"2011-06-11T23:58:15.909",age:8},phone:"900-435-909",cell:"664-963-034",id:{name:"DNI",value:"52754246-Y"},picture:{large:"https://randomuser.me/api/portraits/men/24.jpg",medium:"https://randomuser.me/api/portraits/med/men/24.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/24.jpg"},nat:"ES"},{gender:"male",name:{title:"Mr",first:"Troy",last:"Newman"},location:{street:{number:3014,name:"Station Road"},city:"City of London",state:"Cambridgeshire",country:"United Kingdom",postcode:"FS1 8QD",coordinates:{latitude:"55.9549",longitude:"-162.1001"},timezone:{offset:"-6:00",description:"Central Time (US & Canada), Mexico City"}},email:"troy.newman@example.com",login:{uuid:"90612e9c-2e2c-41fa-b638-18b2d8cf00c7",username:"blueladybug389",password:"russian",salt:"K5kk0W9o",md5:"c4ed25d887ee23711aec6beb68f489f5",sha1:"e24b0840e7ec6d2a14671b352d82efe43073b9d5",sha256:"5cc1c9dd4be230299404a267d2e237d3df5b307cccc7ad8bfd59f665c6caf7ee"},dob:{date:"1983-10-17T02:06:39.882",age:36},registered:{date:"2009-08-05T08:23:46.407",age:10},phone:"024 9025 3103",cell:"0747-757-727",id:{name:"NINO",value:"HC 22 77 67 P"},picture:{large:"https://randomuser.me/api/portraits/men/58.jpg",medium:"https://randomuser.me/api/portraits/med/men/58.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/58.jpg"},nat:"GB"},{gender:"male",name:{title:"Monsieur",first:"Loïc",last:"Bernard"},location:{street:{number:3872,name:"Avenue Debourg"},city:"Thusis",state:"Genève",country:"Switzerland",postcode:3435,coordinates:{latitude:"39.0748",longitude:"83.6350"},timezone:{offset:"-2:00",description:"Mid-Atlantic"}},email:"loic.bernard@example.com",login:{uuid:"701629fa-0985-4e0a-9a8e-7ddc4a3ffe7c",username:"yellowbear425",password:"767676",salt:"eeTuytJC",md5:"c9ee23f36faf245c1d63dfc5fb2d082d",sha1:"fc356b86a1c57d4ea0b0920534878600ca102587",sha256:"b661aa9c8be668c047ab73428138d8b76257ce2a73ec8a7a54fd7907b0bf1941"},dob:{date:"1991-04-12T20:38:57.645",age:28},registered:{date:"2010-09-02T12:09:34.718",age:9},phone:"075 947 96 22",cell:"079 083 89 11",id:{name:"AVS",value:"756.0623.8547.62"},picture:{large:"https://randomuser.me/api/portraits/men/38.jpg",medium:"https://randomuser.me/api/portraits/med/men/38.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/38.jpg"},nat:"CH"},{gender:"female",name:{title:"Ms",first:"Maxim",last:"Van Veen"},location:{street:{number:306,name:"Burgemeester van Steenbergenstraat"},city:"Espel",state:"Friesland",country:"Netherlands",postcode:44033,coordinates:{latitude:"25.7686",longitude:"-133.3207"},timezone:{offset:"-9:00",description:"Alaska"}},email:"maxim.vanveen@example.com",login:{uuid:"44c651c7-9d79-4b4f-bcc4-860bdf25d270",username:"bluebutterfly519",password:"workout",salt:"RLqz3QdA",md5:"c03d74b49fa8053b0d1514ad705a352d",sha1:"eeef44933742efab06a71a487e63ee8af2901f27",sha256:"a3e88bf2b4569fa6cf10fb90af8942fc196fbb67ac190c0d910f7309116fd5bd"},dob:{date:"1985-10-06T10:55:56.579",age:34},registered:{date:"2016-01-10T15:55:36.051",age:3},phone:"(209)-452-8875",cell:"(259)-364-6094",id:{name:"BSN",value:"01461165"},picture:{large:"https://randomuser.me/api/portraits/women/62.jpg",medium:"https://randomuser.me/api/portraits/med/women/62.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/62.jpg"},nat:"NL"},{gender:"male",name:{title:"Mr",first:"Guillaume",last:"Muller"},location:{street:{number:6690,name:"Rue Bossuet"},city:"Vitry-sur-Seine",state:"Meuse",country:"France",postcode:37642,coordinates:{latitude:"49.2556",longitude:"53.4516"},timezone:{offset:"+9:00",description:"Tokyo, Seoul, Osaka, Sapporo, Yakutsk"}},email:"guillaume.muller@example.com",login:{uuid:"190fd7da-23f0-49e5-96ed-fd78e76420c1",username:"goldenkoala701",password:"1103",salt:"1QDw4ws5",md5:"1c9462797172bdfee2deabc6e438161a",sha1:"5bdae684015c87853825cb83923019f66a1f050a",sha256:"251497fc2e5eed068e4938137fdce22f3045ceed1de52e018cc653a381003850"},dob:{date:"1949-02-13T06:36:39.915",age:70},registered:{date:"2009-01-08T12:18:27.672",age:10},phone:"05-25-87-34-22",cell:"06-02-16-11-95",id:{name:"INSEE",value:"1NNaN99203753 14"},picture:{large:"https://randomuser.me/api/portraits/men/92.jpg",medium:"https://randomuser.me/api/portraits/med/men/92.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/92.jpg"},nat:"FR"},{gender:"male",name:{title:"Monsieur",first:"Ronny",last:"Brun"},location:{street:{number:618,name:"Rue Baraban"},city:"Champagne",state:"Appenzell Ausserrhoden",country:"Switzerland",postcode:5797,coordinates:{latitude:"-51.0618",longitude:"147.7424"},timezone:{offset:"+9:00",description:"Tokyo, Seoul, Osaka, Sapporo, Yakutsk"}},email:"ronny.brun@example.com",login:{uuid:"4cd69658-6a5b-4f6a-8006-42e173a5503b",username:"angrybear300",password:"margie",salt:"BM3Or7Fk",md5:"d76c50d07f025b0d6dd8a5a7f67e3152",sha1:"ffa97a2236b8c0350e419370c59883819c8f8d74",sha256:"4d3b4b82b5c3a89c61315b52373dc2f8451886dcf452db3fe716cc9001536fff"},dob:{date:"1947-06-10T22:42:14.779",age:72},registered:{date:"2018-12-13T02:49:55.954",age:1},phone:"079 978 19 18",cell:"075 577 72 58",id:{name:"AVS",value:"756.4152.0031.41"},picture:{large:"https://randomuser.me/api/portraits/men/92.jpg",medium:"https://randomuser.me/api/portraits/med/men/92.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/92.jpg"},nat:"CH"},{gender:"male",name:{title:"Mr",first:"Babür",last:"Akbulut"},location:{street:{number:9979,name:"Fatih Sultan Mehmet Cd"},city:"Bayburt",state:"Hakkâri",country:"Turkey",postcode:79760,coordinates:{latitude:"-10.4475",longitude:"-59.6624"},timezone:{offset:"+6:00",description:"Almaty, Dhaka, Colombo"}},email:"babur.akbulut@example.com",login:{uuid:"7dc9b2fa-0fac-46c8-a85c-e9c4caed880b",username:"happylion729",password:"quincy",salt:"Vgo3ZANy",md5:"38b178c0b750559f8113b8b304c4e054",sha1:"ee0307ca1d8c9cfa6ef9489915a7db05dfdd3390",sha256:"be551d820fd3888700ccdf2798595e00c0300246acf7edf140e5a63ccfa8eb72"},dob:{date:"1953-08-11T14:56:18.382",age:66},registered:{date:"2013-05-20T06:27:51.784",age:6},phone:"(390)-646-8963",cell:"(045)-819-6533",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/40.jpg",medium:"https://randomuser.me/api/portraits/med/men/40.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/40.jpg"},nat:"TR"},{gender:"female",name:{title:"Miss",first:"Oline",last:"Nordheim"},location:{street:{number:6259,name:"Godlia Parksti"},city:"Hammerfest",state:"Oslo",country:"Norway",postcode:"0490",coordinates:{latitude:"44.8447",longitude:"-115.0167"},timezone:{offset:"-8:00",description:"Pacific Time (US & Canada)"}},email:"oline.nordheim@example.com",login:{uuid:"37a2a8f7-a176-4562-9d84-013a9c8650cd",username:"heavyzebra924",password:"raider",salt:"to0Wklx6",md5:"e400204e814323d8cff484bf8b409254",sha1:"f4529597ea668f0bba0438802e8323cdb4a3477c",sha256:"5387403db739cd6eedb5f1ecb25d27b71e4f62cc673bee0dacef18e5bbad2b78"},dob:{date:"1951-11-20T12:55:42.093",age:68},registered:{date:"2007-12-21T02:10:16.417",age:12},phone:"58072119",cell:"46440678",id:{name:"FN",value:"20115103432"},picture:{large:"https://randomuser.me/api/portraits/women/7.jpg",medium:"https://randomuser.me/api/portraits/med/women/7.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/7.jpg"},nat:"NO"},{gender:"male",name:{title:"Mr",first:"Coşkun",last:"Akan"},location:{street:{number:8639,name:"Maçka Cd"},city:"Yalova",state:"Kırklareli",country:"Turkey",postcode:93600,coordinates:{latitude:"-64.0141",longitude:"140.5270"},timezone:{offset:"+2:00",description:"Kaliningrad, South Africa"}},email:"coskun.akan@example.com",login:{uuid:"a2731bfa-c4e6-4a80-8656-2e7e957f70e5",username:"whitepanda422",password:"faith",salt:"iqjHy7nS",md5:"2fb7f281ac8643a98e3eccccda22e327",sha1:"afb32ea6abfa67f97c8ba2bbe9da32aa4f26278b",sha256:"09c226c84b24b9585ffeee257a5fc30a7f7b22c9337dfc6515f1ecfeac349fcf"},dob:{date:"1955-02-26T04:59:24.200",age:64},registered:{date:"2018-04-29T13:13:19.380",age:1},phone:"(657)-388-1931",cell:"(279)-891-2092",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/4.jpg",medium:"https://randomuser.me/api/portraits/med/men/4.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/4.jpg"},nat:"TR"},{gender:"female",name:{title:"Madame",first:"Gordana",last:"Vidal"},location:{street:{number:4625,name:"Rue de L'Abbé-Soulange-Bodin"},city:"Bleienbach",state:"Ticino",country:"Switzerland",postcode:7448,coordinates:{latitude:"18.9741",longitude:"136.6100"},timezone:{offset:"+8:00",description:"Beijing, Perth, Singapore, Hong Kong"}},email:"gordana.vidal@example.com",login:{uuid:"97f9ef46-5454-48f5-b70e-16507c6e3c18",username:"beautifulpeacock324",password:"softail",salt:"QvxX49Gk",md5:"947618ecc395731c9e0ee01d8f163bb2",sha1:"80c5283d196d349d3ea90aaa8be59c71c6d192ae",sha256:"ddb4d67f84b1a47e5ea315b4a9a194e9dee9ac173c95357b1be89c69d21c8e4b"},dob:{date:"1994-11-25T20:19:47.997",age:25},registered:{date:"2004-02-10T10:17:59.275",age:15},phone:"076 021 02 60",cell:"079 498 26 71",id:{name:"AVS",value:"756.1664.5087.54"},picture:{large:"https://randomuser.me/api/portraits/women/47.jpg",medium:"https://randomuser.me/api/portraits/med/women/47.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/47.jpg"},nat:"CH"},{gender:"male",name:{title:"Mr",first:"Aidan",last:"Evans"},location:{street:{number:4905,name:"West Quay"},city:"Dunedin",state:"West Coast",country:"New Zealand",postcode:80739,coordinates:{latitude:"-68.9697",longitude:"-161.1172"},timezone:{offset:"+5:30",description:"Bombay, Calcutta, Madras, New Delhi"}},email:"aidan.evans@example.com",login:{uuid:"7a04f786-79b5-42fb-a45c-488c312f80a0",username:"happymeercat756",password:"sebastia",salt:"yISDDK9f",md5:"4ce5cb1c7cfb312842a9bbd674ad9d28",sha1:"c76e7bb3f9e9418d53060dd331da7b8304451b10",sha256:"78d7ca227ac24de95a90c53190a8295efb340f1cb23b8d6f48b4d32b1e66c5a9"},dob:{date:"1956-05-10T18:24:59.337",age:63},registered:{date:"2015-10-29T07:36:32.578",age:4},phone:"(024)-342-7202",cell:"(304)-199-5188",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/75.jpg",medium:"https://randomuser.me/api/portraits/med/men/75.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/75.jpg"},nat:"NZ"},{gender:"female",name:{title:"Ms",first:"Anna",last:"Larsen"},location:{street:{number:63,name:"Lyngbyvej"},city:"Roslev",state:"Nordjylland",country:"Denmark",postcode:12731,coordinates:{latitude:"-89.7273",longitude:"-154.9359"},timezone:{offset:"-5:00",description:"Eastern Time (US & Canada), Bogota, Lima"}},email:"anna.larsen@example.com",login:{uuid:"c9f4badd-c230-4f9a-8224-a54d646f2684",username:"purpletiger947",password:"springer",salt:"yFcQQm74",md5:"d53d48ae2858cb3ce88b025e340bddea",sha1:"5ae48cc8fa66ce8d1d259355e115fa3043564909",sha256:"4fc8eabcff9fe64ca22607d51477c7798884ce64f9813726c6445162125f25ae"},dob:{date:"1948-10-22T19:29:26.950",age:71},registered:{date:"2007-09-05T22:44:59.441",age:12},phone:"55291191",cell:"93387068",id:{name:"CPR",value:"221048-9579"},picture:{large:"https://randomuser.me/api/portraits/women/11.jpg",medium:"https://randomuser.me/api/portraits/med/women/11.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/11.jpg"},nat:"DK"},{gender:"female",name:{title:"Mrs",first:"Josefine",last:"Hansen"},location:{street:{number:7163,name:"Vestermarken"},city:"Roedovre",state:"Nordjylland",country:"Denmark",postcode:23531,coordinates:{latitude:"-64.7934",longitude:"79.5828"},timezone:{offset:"+5:00",description:"Ekaterinburg, Islamabad, Karachi, Tashkent"}},email:"josefine.hansen@example.com",login:{uuid:"5c9fd5bc-2fc2-464d-834a-ac4b5e5a79d0",username:"tinykoala397",password:"demon",salt:"4dAeNsx6",md5:"8a4f598ec09550747988afc2baa134aa",sha1:"de95f120e137fcb9bc62de844f938470f47d8001",sha256:"7a96434ccb7f74596a2c2df5513450f63baa3bed326b56d7c559c3ae2d6e3901"},dob:{date:"1970-05-08T17:57:01.659",age:49},registered:{date:"2015-03-16T20:44:06.260",age:4},phone:"51328352",cell:"77226426",id:{name:"CPR",value:"080570-0866"},picture:{large:"https://randomuser.me/api/portraits/women/42.jpg",medium:"https://randomuser.me/api/portraits/med/women/42.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/42.jpg"},nat:"DK"},{gender:"female",name:{title:"Mrs",first:"Massi",last:"da Costa"},location:{street:{number:7613,name:"Rua Dezessete "},city:"Itapipoca",state:"Mato Grosso do Sul",country:"Brazil",postcode:77270,coordinates:{latitude:"-11.9710",longitude:"175.1315"},timezone:{offset:"-6:00",description:"Central Time (US & Canada), Mexico City"}},email:"massi.dacosta@example.com",login:{uuid:"4672983c-cb8a-4071-9c88-30c166397e02",username:"angryswan724",password:"raven1",salt:"SUz1LWer",md5:"1c11ffda2f87ead5a0b2364504f641d4",sha1:"d38029d46d68fe92c9b2e7c7782c3be6c2ac626d",sha256:"5d46cc4cf7804e13fabbf98716579b46c3527a3c3bf834e9ae52d0cf8eceb47f"},dob:{date:"1998-02-20T10:28:51.948",age:21},registered:{date:"2016-10-27T03:30:39.353",age:3},phone:"(05) 0171-4059",cell:"(58) 7474-2184",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/87.jpg",medium:"https://randomuser.me/api/portraits/med/women/87.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/87.jpg"},nat:"BR"},{gender:"male",name:{title:"Mr",first:"Oliver",last:"Gehring"},location:{street:{number:1099,name:"Waldstraße"},city:"Mainz-Bingen",state:"Hessen",country:"Germany",postcode:53410,coordinates:{latitude:"70.3934",longitude:"179.7632"},timezone:{offset:"-6:00",description:"Central Time (US & Canada), Mexico City"}},email:"oliver.gehring@example.com",login:{uuid:"1994a970-1199-413d-beb7-b5419e3bd604",username:"heavybutterfly407",password:"unknown",salt:"HPLqx9ul",md5:"ecfed98b6fe95cbdd72c8e3aee311422",sha1:"b44ba22fd2786ae480d603a7c0b2e0b48b3dded1",sha256:"feda1aaaf76d680e14f08a42f532c88cd67f7395ed2a2355b259f8ae6ccc840f"},dob:{date:"1990-04-12T22:46:05.337",age:29},registered:{date:"2013-02-04T09:19:31.559",age:6},phone:"0440-8540040",cell:"0178-0551727",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/6.jpg",medium:"https://randomuser.me/api/portraits/med/men/6.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/6.jpg"},nat:"DE"},{gender:"male",name:{title:"Mr",first:"Berthold",last:"Hegemann"},location:{street:{number:3249,name:"Beethovenstraße"},city:"Taucha",state:"Niedersachsen",country:"Germany",postcode:33290,coordinates:{latitude:"37.0110",longitude:"133.8201"},timezone:{offset:"+5:00",description:"Ekaterinburg, Islamabad, Karachi, Tashkent"}},email:"berthold.hegemann@example.com",login:{uuid:"3f479d8a-1a83-4106-a8f0-fa7ea605693c",username:"greenpeacock513",password:"general",salt:"42SQtSuc",md5:"b3fa1237cc50c32b8601cf8fc454106c",sha1:"961331e489b0739e10a1e4f94a7edd07697b50db",sha256:"0782a550d21b747ea1c2e2c95f4cb1ce785757fb0851bd1492f3467e1e0955c0"},dob:{date:"1986-12-09T02:36:46.769",age:33},registered:{date:"2002-10-24T14:20:37.493",age:17},phone:"0123-0713765",cell:"0178-6652728",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/92.jpg",medium:"https://randomuser.me/api/portraits/med/men/92.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/92.jpg"},nat:"DE"},{gender:"female",name:{title:"Miss",first:"Ane",last:"Narvestad"},location:{street:{number:6593,name:"Kierschows gate"},city:"Hålandsmarka",state:"Akershus",country:"Norway",postcode:"4665",coordinates:{latitude:"5.3921",longitude:"-14.2597"},timezone:{offset:"-8:00",description:"Pacific Time (US & Canada)"}},email:"ane.narvestad@example.com",login:{uuid:"37ae97fa-34c3-4119-a22f-cf3c375b69bc",username:"lazyswan285",password:"newbie",salt:"rE0s8YBw",md5:"2867214f37798a4ac4fe15ced6477994",sha1:"7960f341b735b090175c5ec95699b93281a2c1d1",sha256:"a2a3cb018c4856333de8c8f8594039e1b04ccad77d385e6543ab92629ddc44b5"},dob:{date:"1968-11-09T13:04:33.255",age:51},registered:{date:"2006-10-29T21:38:05.884",age:13},phone:"73968115",cell:"92307294",id:{name:"FN",value:"09116847873"},picture:{large:"https://randomuser.me/api/portraits/women/58.jpg",medium:"https://randomuser.me/api/portraits/med/women/58.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/58.jpg"},nat:"NO"},{gender:"female",name:{title:"Mrs",first:"سوگند",last:"صدر"},location:{street:{number:6679,name:"میدان جمهوری"},city:"تبریز",state:"کرمان",country:"Iran",postcode:11128,coordinates:{latitude:"-18.3086",longitude:"22.7241"},timezone:{offset:"+9:30",description:"Adelaide, Darwin"}},email:"swgnd.sdr@example.com",login:{uuid:"a322c1e4-1b0a-4e3c-8d06-2defa5865c47",username:"yellowgoose687",password:"leedsutd",salt:"uhmPLFdb",md5:"a06056107eb9e4041f30d52c766e17bb",sha1:"18fd7d3c0d3b00af76c92585d0579c9cae33f178",sha256:"dec3c8dd6ea1079c216d2009d75cd083ebd631e7ec9e0a81a6893f1d11b7007d"},dob:{date:"1948-02-05T19:14:37.762",age:71},registered:{date:"2011-11-12T04:05:56.265",age:8},phone:"030-74951936",cell:"0962-679-1436",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/76.jpg",medium:"https://randomuser.me/api/portraits/med/women/76.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/76.jpg"},nat:"IR"},{gender:"male",name:{title:"Mr",first:"Okan",last:"Eronat"},location:{street:{number:5989,name:"Tunalı Hilmi Cd"},city:"Tekirdağ",state:"Manisa",country:"Turkey",postcode:88877,coordinates:{latitude:"79.0275",longitude:"145.0292"},timezone:{offset:"0:00",description:"Western Europe Time, London, Lisbon, Casablanca"}},email:"okan.eronat@example.com",login:{uuid:"378c77d6-1321-4de1-9857-31ba47b4abc5",username:"orangeswan514",password:"sunset",salt:"A0bnK6YX",md5:"68ed27e30c38eb2391bb7bad5304a142",sha1:"21ceb735e992ddecff0fe83dfbd54439c6ddf296",sha256:"025c2d7656f641f411a775c190898f44db8418ccf58175b041b3f54af96a0018"},dob:{date:"1995-01-19T13:19:21.696",age:24},registered:{date:"2009-08-05T08:46:18.011",age:10},phone:"(831)-549-5242",cell:"(039)-193-4691",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/6.jpg",medium:"https://randomuser.me/api/portraits/med/men/6.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/6.jpg"},nat:"TR"},{gender:"male",name:{title:"Mr",first:"حامد",last:"کریمی"},location:{street:{number:6800,name:"شهید رحمانی"},city:"همدان",state:"قم",country:"Iran",postcode:56828,coordinates:{latitude:"-35.2337",longitude:"-53.1649"},timezone:{offset:"+1:00",description:"Brussels, Copenhagen, Madrid, Paris"}},email:"hmd.khrymy@example.com",login:{uuid:"3f121d12-3e9f-4174-9150-cd0c5c674806",username:"blackbear471",password:"herbie",salt:"ciBbkapX",md5:"e3127383a6d1e53c92a458d569293ada",sha1:"c5ce8cc4727def8f64e971c964bbb154288ca01b",sha256:"fcfe24235c27f89bf85754eced4678b5e151835f8fb01b5a16bd336142fff27f"},dob:{date:"1981-08-24T22:57:22.013",age:38},registered:{date:"2008-09-13T16:42:50.753",age:11},phone:"054-99894028",cell:"0928-997-1206",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/76.jpg",medium:"https://randomuser.me/api/portraits/med/men/76.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/76.jpg"},nat:"IR"},{gender:"male",name:{title:"Mr",first:"Tobias",last:"Larsen"},location:{street:{number:5127,name:"Assensvej"},city:"Agerbæk",state:"Syddanmark",country:"Denmark",postcode:84442,coordinates:{latitude:"81.6748",longitude:"-169.4176"},timezone:{offset:"0:00",description:"Western Europe Time, London, Lisbon, Casablanca"}},email:"tobias.larsen@example.com",login:{uuid:"395205f6-cb8c-4c4b-94db-33b2d92e7a0f",username:"greencat530",password:"cable",salt:"smIie1qc",md5:"2f5b88ca3ae3e710fd615347f565f5dc",sha1:"b4d207833da09bd479bb5692cd5b66a217810ea0",sha256:"258259f7b0608076d693ad403ed668c8953fe03eba138b2eb5c003e1e5f553ca"},dob:{date:"1981-04-26T04:18:59.546",age:38},registered:{date:"2008-09-26T02:41:14.232",age:11},phone:"68945289",cell:"95393395",id:{name:"CPR",value:"260481-9321"},picture:{large:"https://randomuser.me/api/portraits/men/60.jpg",medium:"https://randomuser.me/api/portraits/med/men/60.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/60.jpg"},nat:"DK"},{gender:"male",name:{title:"Mr",first:"رادین",last:"جعفری"},location:{street:{number:4584,name:"جمهوری"},city:"بابل",state:"کهگیلویه و بویراحمد",country:"Iran",postcode:97253,coordinates:{latitude:"-44.6792",longitude:"73.9819"},timezone:{offset:"-8:00",description:"Pacific Time (US & Canada)"}},email:"rdyn.jaafry@example.com",login:{uuid:"1a714c93-f5d7-44ef-9ace-44233ccac933",username:"smallgorilla341",password:"kuang",salt:"X2S6aeSx",md5:"7e4b220d9a2d5a59b2c9dd9b498fea6b",sha1:"f1fdb1f8aa000b78f5f3e6ac18ccdaef6f725240",sha256:"78ab83bac6ce25ac1b8b148958707c2a6b336723284783ce2b867f5f4e44d205"},dob:{date:"1993-09-03T08:12:45.322",age:26},registered:{date:"2002-10-24T10:07:23.593",age:17},phone:"042-75479618",cell:"0942-510-9595",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/94.jpg",medium:"https://randomuser.me/api/portraits/med/men/94.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/94.jpg"},nat:"IR"},{gender:"male",name:{title:"Mr",first:"James",last:"Jackson"},location:{street:{number:8799,name:"Hereford Street"},city:"Lower Hutt",state:"Bay of Plenty",country:"New Zealand",postcode:37617,coordinates:{latitude:"13.9402",longitude:"-159.2417"},timezone:{offset:"+8:00",description:"Beijing, Perth, Singapore, Hong Kong"}},email:"james.jackson@example.com",login:{uuid:"560d4b11-b565-4970-b05d-7640f6cea43d",username:"whiterabbit920",password:"friendly",salt:"uLPz35vV",md5:"fec344cd5163bf992a586a30b6da32e4",sha1:"d313fcaccd4c8bba6e155d1c3eef5fe3c25a5453",sha256:"0a601bfb5e422f0fccc95afc7dce5e82e81367243ce2cfc2ec14f2b455303cab"},dob:{date:"1986-10-19T18:18:31.514",age:33},registered:{date:"2008-03-31T09:04:51.814",age:11},phone:"(643)-655-7388",cell:"(139)-616-2651",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/70.jpg",medium:"https://randomuser.me/api/portraits/med/men/70.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/70.jpg"},nat:"NZ"},{gender:"female",name:{title:"Miss",first:"Iida",last:"Jarvela"},location:{street:{number:478,name:"Pyynikintie"},city:"Geta",state:"Central Finland",country:"Finland",postcode:47012,coordinates:{latitude:"-86.0734",longitude:"123.6569"},timezone:{offset:"-3:00",description:"Brazil, Buenos Aires, Georgetown"}},email:"iida.jarvela@example.com",login:{uuid:"5de220b4-5e97-4ba3-89ae-b204336b946e",username:"goldenwolf891",password:"think",salt:"Qbaafgnz",md5:"b29eecbd7ea84d96bbdca30bc3e6f7c0",sha1:"ec0bf11d476f9b7193a34c119324836a18523533",sha256:"4f9a2d8c155a9729dc8b8b765cdd25ca62dcd2da38a3889437b805b8738959e6"},dob:{date:"1987-03-17T02:44:42.390",age:32},registered:{date:"2005-11-20T14:56:08.158",age:14},phone:"08-051-182",cell:"040-836-17-60",id:{name:"HETU",value:"NaNNA986undefined"},picture:{large:"https://randomuser.me/api/portraits/women/63.jpg",medium:"https://randomuser.me/api/portraits/med/women/63.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/63.jpg"},nat:"FI"},{gender:"male",name:{title:"Mr",first:"Ismail",last:"Swiers"},location:{street:{number:5964,name:"Drie Kooienweg"},city:"Weteringbrug",state:"Noord-Brabant",country:"Netherlands",postcode:61718,coordinates:{latitude:"33.6518",longitude:"-160.6266"},timezone:{offset:"+7:00",description:"Bangkok, Hanoi, Jakarta"}},email:"ismail.swiers@example.com",login:{uuid:"6f317cca-30e7-484d-9c83-8f5b7b0f7026",username:"orangefrog721",password:"skolko",salt:"rqf7NeJZ",md5:"738221bb9a3c7870786117c41722f514",sha1:"cb1abf284b47ae65faf7b14064b708762cba997e",sha256:"5a538a11ffff7b5aa2b7d83b681891737692af525b3ffbb83f7885d85caad539"},dob:{date:"1954-07-08T06:40:12.779",age:65},registered:{date:"2007-03-14T11:54:32.571",age:12},phone:"(923)-878-4978",cell:"(700)-786-0794",id:{name:"BSN",value:"04525498"},picture:{large:"https://randomuser.me/api/portraits/men/17.jpg",medium:"https://randomuser.me/api/portraits/med/men/17.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/17.jpg"},nat:"NL"},{gender:"male",name:{title:"Mr",first:"Ivan",last:"Romero"},location:{street:{number:944,name:"Calle de La Democracia"},city:"Cuenca",state:"Andalucía",country:"Spain",postcode:17569,coordinates:{latitude:"29.1793",longitude:"-133.3930"},timezone:{offset:"-3:30",description:"Newfoundland"}},email:"ivan.romero@example.com",login:{uuid:"2a8705be-a6fb-44da-b5e5-4e057a16ed38",username:"ticklishzebra315",password:"flex",salt:"FzfCgbyI",md5:"f1a76b11e062da25742d1444c0f3c6b3",sha1:"2543a414c659f6824c7774cf4a33c39eed7e0a12",sha256:"65186d7ad9eb097a60ed1cca4d0d5d53eda6ed0a08fbfd79349480f92f3c79f6"},dob:{date:"1967-01-01T12:58:04.905",age:52},registered:{date:"2017-02-26T11:07:22.373",age:2},phone:"939-613-495",cell:"669-268-858",id:{name:"DNI",value:"29964753-N"},picture:{large:"https://randomuser.me/api/portraits/men/78.jpg",medium:"https://randomuser.me/api/portraits/med/men/78.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/78.jpg"},nat:"ES"},{gender:"male",name:{title:"Mr",first:"Bently",last:"Liu"},location:{street:{number:4137,name:"Pine Rd"},city:"Borden",state:"British Columbia",country:"Canada",postcode:"Y5D 2T5",coordinates:{latitude:"70.1532",longitude:"75.2373"},timezone:{offset:"-12:00",description:"Eniwetok, Kwajalein"}},email:"bently.liu@example.com",login:{uuid:"5744142a-22f9-4ff4-86b9-62930d1e0620",username:"greenduck263",password:"choke",salt:"i3cWh7xs",md5:"9910f140ef6271607ee233ea37b73bde",sha1:"c0f94448adc9245e8f5918a015074261f6ebf568",sha256:"1bf4ba902d1b822a1d2a105a4cfaa9436e0f40bd0fc77ce88622e074ed6b9a5e"},dob:{date:"1969-05-22T08:16:27.102",age:50},registered:{date:"2005-05-03T18:10:48.013",age:14},phone:"388-452-3805",cell:"056-770-7327",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/74.jpg",medium:"https://randomuser.me/api/portraits/med/men/74.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/74.jpg"},nat:"CA"},{gender:"female",name:{title:"Ms",first:"Katrina",last:"Barnett"},location:{street:{number:402,name:"Saddle Dr"},city:"Ventura",state:"Washington",country:"United States",postcode:14946,coordinates:{latitude:"-11.8737",longitude:"-17.5266"},timezone:{offset:"-1:00",description:"Azores, Cape Verde Islands"}},email:"katrina.barnett@example.com",login:{uuid:"9ea4f829-0030-4fe8-bfbd-2e2d38bcc48d",username:"angrytiger919",password:"1227",salt:"XKiR9HzE",md5:"174a3e5e98536f13748dbb4b61710bce",sha1:"02bd0da9aa89bd5f57618863273e31a8729436ee",sha256:"906c39fe3e4ba1c72bec790429316aac2e15e1f2987a41d464037c0397362e6a"},dob:{date:"1945-05-02T15:56:23.151",age:74},registered:{date:"2012-07-13T00:35:35.891",age:7},phone:"(939)-319-6601",cell:"(713)-625-2722",id:{name:"SSN",value:"429-51-7438"},picture:{large:"https://randomuser.me/api/portraits/women/36.jpg",medium:"https://randomuser.me/api/portraits/med/women/36.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/36.jpg"},nat:"US"},{gender:"female",name:{title:"Ms",first:"Eugenia",last:"Ortega"},location:{street:{number:5829,name:"Calle de Argumosa"},city:"Santiago de Compostela",state:"Aragón",country:"Spain",postcode:86895,coordinates:{latitude:"-9.5213",longitude:"-126.1265"},timezone:{offset:"+11:00",description:"Magadan, Solomon Islands, New Caledonia"}},email:"eugenia.ortega@example.com",login:{uuid:"83015171-e210-4cfc-95cc-13ed6a6b68b2",username:"whitedog929",password:"123987",salt:"MohJefGQ",md5:"98006897731c1630b3140a7b168e03b5",sha1:"07ed71b448dcf67db45d09a7d6850d4dca78610d",sha256:"b9e97cd17d3ab62739585c9d9c6df3e5a67b7fb993b2939a8b1e24eac529411e"},dob:{date:"1992-07-05T01:48:34.418",age:27},registered:{date:"2019-05-15T06:53:56.233",age:0},phone:"997-432-776",cell:"684-168-583",id:{name:"DNI",value:"38637878-C"},picture:{large:"https://randomuser.me/api/portraits/women/31.jpg",medium:"https://randomuser.me/api/portraits/med/women/31.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/31.jpg"},nat:"ES"},{gender:"male",name:{title:"Mr",first:"Milo",last:"Pires"},location:{street:{number:6623,name:"Rua Quatro"},city:"Macaé",state:"Distrito Federal",country:"Brazil",postcode:14184,coordinates:{latitude:"24.7362",longitude:"-34.6778"},timezone:{offset:"+4:30",description:"Kabul"}},email:"milo.pires@example.com",login:{uuid:"5f197ace-a507-49e2-ba95-5cbc912a4392",username:"yellowbird169",password:"spot",salt:"xwwfIPlA",md5:"179dbaacfc9178cf5c8e44494e1d8e3b",sha1:"a6349001f190a5d620dd60ac70f403b8f2e1a87f",sha256:"aaaf0f18044f1081e5a82c1bcc82837f4d00ea7c7d0adc3f024f51a4c494699b"},dob:{date:"1998-08-24T04:31:37.876",age:21},registered:{date:"2010-03-24T23:53:43.729",age:9},phone:"(97) 7098-8240",cell:"(95) 5479-9958",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/28.jpg",medium:"https://randomuser.me/api/portraits/med/men/28.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/28.jpg"},nat:"BR"},{gender:"female",name:{title:"Miss",first:"زهرا",last:"کامروا"},location:{street:{number:7369,name:"دستغیب"},city:"شیراز",state:"اصفهان",country:"Iran",postcode:15830,coordinates:{latitude:"-33.0582",longitude:"-93.8418"},timezone:{offset:"-1:00",description:"Azores, Cape Verde Islands"}},email:"zhr.khmrw@example.com",login:{uuid:"fc235eb6-fe25-416d-9c42-2e3a770abde0",username:"blackcat597",password:"roxanne",salt:"GUwzzSwg",md5:"ac3781463b101aaa50d6eb53b6e6f1fb",sha1:"7526a59080e3a56482b11edd8e2b354b304ec23c",sha256:"991219693b2182680c8512bfff73e761c3bdb53a9628cf4592681832a5d5b93e"},dob:{date:"1948-01-14T03:03:05.025",age:71},registered:{date:"2017-05-17T21:14:52.932",age:2},phone:"000-58334160",cell:"0926-707-2390",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/30.jpg",medium:"https://randomuser.me/api/portraits/med/women/30.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/30.jpg"},nat:"IR"},{gender:"male",name:{title:"Mr",first:"Leon",last:"Douglas"},location:{street:{number:7671,name:"Parker Rd"},city:"Port Macquarie",state:"Northern Territory",country:"Australia",postcode:4344,coordinates:{latitude:"73.0481",longitude:"-32.8181"},timezone:{offset:"+5:30",description:"Bombay, Calcutta, Madras, New Delhi"}},email:"leon.douglas@example.com",login:{uuid:"208dbf7e-2428-46f3-b5eb-53e0a8c5dd2f",username:"bigcat387",password:"diva",salt:"X03FGD17",md5:"5bb8d4f9496fe8549ba83e705336a72b",sha1:"5f441842220e7377f1d8adfed51985bc0e0d2827",sha256:"2f8d5adff79af6d91b100d17223a09403999193bdd5fa4d00ba373f20c1044a9"},dob:{date:"1989-12-15T14:04:26.406",age:30},registered:{date:"2005-05-14T09:39:17.153",age:14},phone:"03-7550-4946",cell:"0417-131-780",id:{name:"TFN",value:"307927202"},picture:{large:"https://randomuser.me/api/portraits/men/10.jpg",medium:"https://randomuser.me/api/portraits/med/men/10.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/10.jpg"},nat:"AU"},{gender:"male",name:{title:"Mr",first:"Darryl",last:"Rivera"},location:{street:{number:1007,name:"First Street"},city:"Seymour",state:"Wisconsin",country:"United States",postcode:10015,coordinates:{latitude:"-28.2122",longitude:"-112.1089"},timezone:{offset:"0:00",description:"Western Europe Time, London, Lisbon, Casablanca"}},email:"darryl.rivera@example.com",login:{uuid:"4bedf241-f33b-46f5-9791-c2a55cef82d1",username:"whitekoala553",password:"ncc1701a",salt:"Mjm6tigE",md5:"3738c7a41055a52323d5c90eea4ba7c5",sha1:"d13e4a71c86822cb37993729ad27dedaf5c3fcbb",sha256:"5d7749259d7d2131680557e02243020d51f3296abd4260ea3bb55020ccae0b3a"},dob:{date:"1989-10-16T20:41:28.041",age:30},registered:{date:"2006-07-04T22:19:28.830",age:13},phone:"(568)-127-2473",cell:"(393)-984-9531",id:{name:"SSN",value:"171-41-0671"},picture:{large:"https://randomuser.me/api/portraits/men/18.jpg",medium:"https://randomuser.me/api/portraits/med/men/18.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/18.jpg"},nat:"US"},{gender:"male",name:{title:"Mr",first:"Adam",last:"Petersen"},location:{street:{number:7819,name:"Nibevej"},city:"Assens",state:"Nordjylland",country:"Denmark",postcode:43522,coordinates:{latitude:"43.7783",longitude:"-90.1523"},timezone:{offset:"-9:00",description:"Alaska"}},email:"adam.petersen@example.com",login:{uuid:"e17cb403-214a-41e7-ad4a-c22a9690ec87",username:"orangezebra544",password:"brasil",salt:"YD2UhKjD",md5:"4f88c1ce7bc7cae34c9de824d0cd9b90",sha1:"b44171c23ebd0a2348056dccfe737add3f2e72e1",sha256:"a5c621d595b61de78f709c72ea9aeb2787177412650c5ebd315d090c9c128fca"},dob:{date:"1973-05-03T13:09:19.648",age:46},registered:{date:"2006-09-03T23:53:07.806",age:13},phone:"69986692",cell:"95212548",id:{name:"CPR",value:"030573-1681"},picture:{large:"https://randomuser.me/api/portraits/men/15.jpg",medium:"https://randomuser.me/api/portraits/med/men/15.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/15.jpg"},nat:"DK"},{gender:"female",name:{title:"Mademoiselle",first:"Anita",last:"Henry"},location:{street:{number:5346,name:"Rue Dumenge"},city:"Ottenbach",state:"Aargau",country:"Switzerland",postcode:7039,coordinates:{latitude:"65.7357",longitude:"-125.8283"},timezone:{offset:"-11:00",description:"Midway Island, Samoa"}},email:"anita.henry@example.com",login:{uuid:"03b7f2fc-68b7-479f-9c69-b3cc137573b3",username:"sadrabbit286",password:"jules",salt:"4IL0mfxj",md5:"1a4eed2e030f7d2dcad48d414e50fc5b",sha1:"1b3adc5070eabb71354081893d40cdfe52e025ac",sha256:"56d736d92af3caa4b6a030acd4b5f679b08aad609f34e3b596958bd96f5774c2"},dob:{date:"1966-12-11T21:43:26.480",age:53},registered:{date:"2004-05-06T07:27:58.572",age:15},phone:"076 160 42 61",cell:"079 860 93 78",id:{name:"AVS",value:"756.6099.5435.42"},picture:{large:"https://randomuser.me/api/portraits/women/41.jpg",medium:"https://randomuser.me/api/portraits/med/women/41.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/41.jpg"},nat:"CH"},{gender:"female",name:{title:"Miss",first:"Carol",last:"Prenger"},location:{street:{number:4843,name:"Bulb Trade Park"},city:"Loenen aan de Vecht",state:"Friesland",country:"Netherlands",postcode:14725,coordinates:{latitude:"-77.3510",longitude:"-105.0840"},timezone:{offset:"-7:00",description:"Mountain Time (US & Canada)"}},email:"carol.prenger@example.com",login:{uuid:"5162fe82-dd4f-417e-b07a-a0680aa3feda",username:"heavyleopard985",password:"jughead",salt:"BgyjACKD",md5:"6692a66d4e8bb017da22dd367e7f43bb",sha1:"17f21cf100b75707c99be7a2b800238072292fc9",sha256:"d72b463f36a1a7e6f290cc71898530b803d7a9d897c581939c0cc3a9677a40eb"},dob:{date:"1971-01-31T20:23:44.807",age:48},registered:{date:"2018-04-25T16:49:16.223",age:1},phone:"(547)-782-4303",cell:"(141)-826-4639",id:{name:"BSN",value:"20270550"},picture:{large:"https://randomuser.me/api/portraits/women/48.jpg",medium:"https://randomuser.me/api/portraits/med/women/48.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/48.jpg"},nat:"NL"},{gender:"female",name:{title:"Miss",first:"Linnea",last:"Kilpela"},location:{street:{number:7059,name:"Fredrikinkatu"},city:"Juuka",state:"South Karelia",country:"Finland",postcode:67847,coordinates:{latitude:"71.6316",longitude:"158.8621"},timezone:{offset:"-3:00",description:"Brazil, Buenos Aires, Georgetown"}},email:"linnea.kilpela@example.com",login:{uuid:"141884f3-2e3f-456d-80ad-f8ce5a628abe",username:"bluelion105",password:"tickler",salt:"lKOuvdZP",md5:"eb71226fffab82c2a250ec0cb617a73d",sha1:"abd2862fc2e03eb44fa450a69e4575e038bbba92",sha256:"c7ddddf28b731ac13838b08b168aa4764db099dba36733e08d5fccef06e50c48"},dob:{date:"1945-10-12T13:09:47.875",age:74},registered:{date:"2002-09-26T08:36:35.615",age:17},phone:"07-034-231",cell:"040-932-81-05",id:{name:"HETU",value:"NaNNA994undefined"},picture:{large:"https://randomuser.me/api/portraits/women/92.jpg",medium:"https://randomuser.me/api/portraits/med/women/92.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/92.jpg"},nat:"FI"},{gender:"male",name:{title:"Mr",first:"Eren",last:"Alpuğan"},location:{street:{number:5528,name:"Atatürk Sk"},city:"Burdur",state:"Yalova",country:"Turkey",postcode:85416,coordinates:{latitude:"25.6370",longitude:"48.9519"},timezone:{offset:"+5:45",description:"Kathmandu"}},email:"eren.alpugan@example.com",login:{uuid:"2e061a45-e4e7-457b-a825-4d694bb33a64",username:"smallmouse513",password:"mayhem",salt:"AjWZ2pvq",md5:"04123fb6fbd280c15253a7bafc92e9ed",sha1:"6a4baa343ffe1c26d2c2feccd06359722e701844",sha256:"17346f8cdc023674e292f8f7ef14ce1cfbf74745f5ecb57e0054dada19d082b9"},dob:{date:"1961-04-08T05:17:11.570",age:58},registered:{date:"2010-01-24T20:58:02.182",age:9},phone:"(271)-682-4978",cell:"(087)-341-0211",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/94.jpg",medium:"https://randomuser.me/api/portraits/med/men/94.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/94.jpg"},nat:"TR"},{gender:"female",name:{title:"Mrs",first:"Zoé",last:"Le Gall"},location:{street:{number:8912,name:"Rue du Bât-D'Argent"},city:"Amiens",state:"Doubs",country:"France",postcode:57688,coordinates:{latitude:"35.6050",longitude:"-150.8733"},timezone:{offset:"+10:00",description:"Eastern Australia, Guam, Vladivostok"}},email:"zoe.legall@example.com",login:{uuid:"da908a37-3c46-46bb-b6d9-c14b0dbfde09",username:"bigleopard440",password:"january",salt:"ZkppuZaD",md5:"5c3bad6938d6123bef97c0462938ed6a",sha1:"867ec3a5bef415cbd83bce37022b95695b841cb2",sha256:"1b1ebbf9e99c888caebd80dc4efcf411a38764ef2861b47f3734fa3f8988089a"},dob:{date:"1981-06-02T15:06:50.910",age:38},registered:{date:"2017-11-30T11:47:10.271",age:2},phone:"04-04-28-42-09",cell:"06-14-48-81-72",id:{name:"INSEE",value:"2NNaN11262842 74"},picture:{large:"https://randomuser.me/api/portraits/women/78.jpg",medium:"https://randomuser.me/api/portraits/med/women/78.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/78.jpg"},nat:"FR"},{gender:"male",name:{title:"Mr",first:"Herman",last:"Cunningham"},location:{street:{number:3849,name:"Blossom Hill Rd"},city:"Altoona",state:"California",country:"United States",postcode:48249,coordinates:{latitude:"-86.7013",longitude:"-120.0108"},timezone:{offset:"-1:00",description:"Azores, Cape Verde Islands"}},email:"herman.cunningham@example.com",login:{uuid:"b2719f9d-b7b7-442c-b33b-331f8678a946",username:"whiteostrich786",password:"thedon",salt:"slDMozpa",md5:"4461cd2143d9efa338f36eb9f09772fa",sha1:"5c374b9c8fd274be10699b5e32e95061bfe94c70",sha256:"b028effbeb409c137fab88f3780cc4f9e4b8e5b3e4e9519e48472b1cf7d25877"},dob:{date:"1995-03-02T08:34:27.242",age:24},registered:{date:"2009-09-11T21:33:06.821",age:10},phone:"(157)-913-4731",cell:"(751)-761-7924",id:{name:"SSN",value:"464-72-0907"},picture:{large:"https://randomuser.me/api/portraits/men/73.jpg",medium:"https://randomuser.me/api/portraits/med/men/73.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/73.jpg"},nat:"US"},{gender:"male",name:{title:"Mr",first:"Gertjan",last:"Peels"},location:{street:{number:721,name:"Burgemeester Caan van Necklaan"},city:"Scharsterbrug",state:"Utrecht",country:"Netherlands",postcode:52727,coordinates:{latitude:"86.8679",longitude:"-61.9963"},timezone:{offset:"-5:00",description:"Eastern Time (US & Canada), Bogota, Lima"}},email:"gertjan.peels@example.com",login:{uuid:"2e715d91-660e-4960-871d-0882c3b4414a",username:"silverfish189",password:"moore",salt:"VjERzcSF",md5:"2f7035932241ea6b2d4579ca17807729",sha1:"5568c71db19f6f533593d6021ee10ecbd7544f37",sha256:"a37a97812340a8bbb4846e8917ca554595f775247ba35c78430c4c18f0d272c3"},dob:{date:"1995-03-30T16:43:07.251",age:24},registered:{date:"2011-10-10T22:21:44.994",age:8},phone:"(973)-985-8477",cell:"(963)-425-3523",id:{name:"BSN",value:"52599702"},picture:{large:"https://randomuser.me/api/portraits/men/98.jpg",medium:"https://randomuser.me/api/portraits/med/men/98.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/98.jpg"},nat:"NL"},{gender:"female",name:{title:"Miss",first:"Georgia",last:"Gonzales"},location:{street:{number:9204,name:"Valley View Ln"},city:"Mackay",state:"Northern Territory",country:"Australia",postcode:6911,coordinates:{latitude:"-31.5278",longitude:"-147.8164"},timezone:{offset:"+5:45",description:"Kathmandu"}},email:"georgia.gonzales@example.com",login:{uuid:"d84edba4-b506-46b7-80e1-350b25c98da9",username:"angrybear491",password:"hustler",salt:"inKh9sMb",md5:"a81521195f2a57f4dd45e1d2ca28291a",sha1:"e33976c8913260e4675d0a4e7c6d53b7fbc85d7e",sha256:"803a9a6da6f747752db8219fcf522bfebe325761e96a48aa781c94e5b2d5f079"},dob:{date:"1958-01-07T09:42:55.981",age:61},registered:{date:"2018-02-26T03:26:25.555",age:1},phone:"05-0335-6943",cell:"0469-635-696",id:{name:"TFN",value:"233285053"},picture:{large:"https://randomuser.me/api/portraits/women/54.jpg",medium:"https://randomuser.me/api/portraits/med/women/54.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/54.jpg"},nat:"AU"},{gender:"male",name:{title:"Mr",first:"کوروش",last:"نكو نظر"},location:{street:{number:7648,name:"مالک اشتر"},city:"آمل",state:"اردبیل",country:"Iran",postcode:42449,coordinates:{latitude:"9.1753",longitude:"-107.5146"},timezone:{offset:"+9:30",description:"Adelaide, Darwin"}},email:"khwrwsh.nkwnzr@example.com",login:{uuid:"c3dcf190-2a65-4034-bf4f-c75a8d3749a4",username:"bluetiger628",password:"wolfpack",salt:"Qq2L8L6T",md5:"5dc2909870d66f415fef51e9d0f7df9b",sha1:"ceefff2c89e5b16b94e2f6527f0c9d1040d05240",sha256:"14508a804ee03c3416d77cbefd99ea1a68f3c8e19cc83fe6501b581e541e3e2c"},dob:{date:"1990-09-21T08:04:00.528",age:29},registered:{date:"2016-12-13T11:47:10.132",age:3},phone:"090-34335231",cell:"0969-411-0371",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/21.jpg",medium:"https://randomuser.me/api/portraits/med/men/21.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/21.jpg"},nat:"IR"},{gender:"female",name:{title:"Ms",first:"Emma",last:"Reid"},location:{street:{number:4932,name:"High Street"},city:"Dublin",state:"Louth",country:"Ireland",postcode:28255,coordinates:{latitude:"82.3836",longitude:"57.5621"},timezone:{offset:"-12:00",description:"Eniwetok, Kwajalein"}},email:"emma.reid@example.com",login:{uuid:"d339b341-c3f6-407a-a866-eab5d0523a98",username:"beautifulfish612",password:"mookie",salt:"WJw9CWJJ",md5:"b91e6e06c39f729adea7b540d05d2a2e",sha1:"c1c20b94828b0e2381faa00c44d782fe11d81833",sha256:"90a55ba957eb78e166f0297da2557774ce89f21b221c312077dd0507a3f9b247"},dob:{date:"1969-01-18T09:59:45.007",age:50},registered:{date:"2007-08-01T11:53:42.718",age:12},phone:"021-474-2163",cell:"081-988-0285",id:{name:"PPS",value:"4680886T"},picture:{large:"https://randomuser.me/api/portraits/women/91.jpg",medium:"https://randomuser.me/api/portraits/med/women/91.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/91.jpg"},nat:"IE"},{gender:"female",name:{title:"Miss",first:"Kathy",last:"Hawkins"},location:{street:{number:9667,name:"W Pecan St"},city:"Cedar Hill",state:"Mississippi",country:"United States",postcode:59817,coordinates:{latitude:"-80.4570",longitude:"-174.0718"},timezone:{offset:"+5:30",description:"Bombay, Calcutta, Madras, New Delhi"}},email:"kathy.hawkins@example.com",login:{uuid:"8f5a18c5-1b7f-492f-99a3-9ce2759e7d67",username:"heavybutterfly287",password:"cottage",salt:"7IwEOSwP",md5:"54e89d0f693abd98d7b40df26f48da94",sha1:"a53917cf33b5ca76c800e4114e082d186b105a98",sha256:"b17b87f77f2e55b9acfd7e9c8d23ddbcefed98fadb4d45f23f73c1342d525689"},dob:{date:"1971-02-26T18:54:53.991",age:48},registered:{date:"2010-06-06T03:45:41.258",age:9},phone:"(302)-840-3128",cell:"(586)-789-8225",id:{name:"SSN",value:"201-82-6015"},picture:{large:"https://randomuser.me/api/portraits/women/0.jpg",medium:"https://randomuser.me/api/portraits/med/women/0.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/0.jpg"},nat:"US"},{gender:"male",name:{title:"Mr",first:"Damien",last:"Rodriguez"},location:{street:{number:1564,name:"Rue du Dauphiné"},city:"Saint-Pierre",state:"Indre-et-Loire",country:"France",postcode:14988,coordinates:{latitude:"17.8112",longitude:"50.2920"},timezone:{offset:"+9:30",description:"Adelaide, Darwin"}},email:"damien.rodriguez@example.com",login:{uuid:"b8e6f039-eccd-48d7-a61d-5396f836305f",username:"orangecat708",password:"cookie1",salt:"dAKh9fUy",md5:"4a6a94d9b6b55d5ea9adb4a2e0642b91",sha1:"4eded9e913d923a4c227a7be4715685f38e5681c",sha256:"d4f6d4ed2b85af71da69fbd910d6f3d17871fa76f4ddb8cdd5f9a5fb56b7a3c0"},dob:{date:"1966-03-28T09:51:24.075",age:53},registered:{date:"2010-02-26T14:29:01.548",age:9},phone:"04-82-74-25-41",cell:"06-70-73-08-08",id:{name:"INSEE",value:"1NNaN75407615 16"},picture:{large:"https://randomuser.me/api/portraits/men/51.jpg",medium:"https://randomuser.me/api/portraits/med/men/51.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/51.jpg"},nat:"FR"},{gender:"male",name:{title:"Mr",first:"Valentin",last:"Diez"},location:{street:{number:8175,name:"Calle Nebrija"},city:"Pamplona",state:"Galicia",country:"Spain",postcode:90716,coordinates:{latitude:"-66.6032",longitude:"149.9145"},timezone:{offset:"+11:00",description:"Magadan, Solomon Islands, New Caledonia"}},email:"valentin.diez@example.com",login:{uuid:"66ae1a55-e7a6-4d88-8270-204c6206a5c9",username:"heavywolf131",password:"darwin",salt:"rSgSrP8N",md5:"148c683b9b9a9039540840cce427a2e8",sha1:"b0a42f77a5cce78aa16d8d28defe524207b46147",sha256:"60cf1c1e78c7f1a14752988238816e975ce0726cff7bf1a5300cf9f8f37ada0a"},dob:{date:"1966-08-06T04:55:31.467",age:53},registered:{date:"2007-04-14T15:58:28.323",age:12},phone:"928-692-631",cell:"659-837-912",id:{name:"DNI",value:"92426199-T"},picture:{large:"https://randomuser.me/api/portraits/men/99.jpg",medium:"https://randomuser.me/api/portraits/med/men/99.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/99.jpg"},nat:"ES"},{gender:"male",name:{title:"Mr",first:"Théo",last:"Marie"},location:{street:{number:814,name:"Rue du 8 Mai 1945"},city:"Caen",state:"Vienne",country:"France",postcode:16230,coordinates:{latitude:"-15.1020",longitude:"152.6247"},timezone:{offset:"+4:30",description:"Kabul"}},email:"theo.marie@example.com",login:{uuid:"fdf713c4-effc-4130-a53e-67800fd43821",username:"happyfrog493",password:"trains",salt:"wThlPmhZ",md5:"f9ace2000aeacd2f54c19ab539fd762d",sha1:"63153d88901b9cdc9524be415a1aac9067733ab7",sha256:"7c2d08c8da09734c9ad87e89f80568b57fbeba9775c338ef6264cec0217a76c2"},dob:{date:"1962-10-05T02:04:37.570",age:57},registered:{date:"2007-10-04T07:35:35.232",age:12},phone:"02-82-71-23-07",cell:"06-43-58-61-77",id:{name:"INSEE",value:"1NNaN96296164 92"},picture:{large:"https://randomuser.me/api/portraits/men/80.jpg",medium:"https://randomuser.me/api/portraits/med/men/80.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/80.jpg"},nat:"FR"},{gender:"female",name:{title:"Mrs",first:"April",last:"Ruiz"},location:{street:{number:5855,name:"E Pecan St"},city:"Bowral",state:"Australian Capital Territory",country:"Australia",postcode:5693,coordinates:{latitude:"63.8598",longitude:"-83.5306"},timezone:{offset:"-1:00",description:"Azores, Cape Verde Islands"}},email:"april.ruiz@example.com",login:{uuid:"03627a59-9ef6-483d-bf95-e56f8e632b05",username:"yellowladybug746",password:"chicks",salt:"2Dboy1K9",md5:"8473880da5e1f841ff42233bc153b4e5",sha1:"81712c5d98f067470864b3ee580e53ffb6ae3f13",sha256:"88e32a3ad0df718fb853e26c49e33a2ce313359cf830144b223fe7f3091b12e1"},dob:{date:"1946-11-19T12:00:32.304",age:73},registered:{date:"2012-08-04T07:41:02.503",age:7},phone:"03-7047-3585",cell:"0480-380-081",id:{name:"TFN",value:"386634238"},picture:{large:"https://randomuser.me/api/portraits/women/3.jpg",medium:"https://randomuser.me/api/portraits/med/women/3.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/3.jpg"},nat:"AU"},{gender:"female",name:{title:"Mrs",first:"Liliana",last:"Granly"},location:{street:{number:9857,name:"Kantarellen terrasse"},city:"Røn",state:"Telemark",country:"Norway",postcode:"5596",coordinates:{latitude:"-80.8393",longitude:"-128.4541"},timezone:{offset:"-1:00",description:"Azores, Cape Verde Islands"}},email:"liliana.granly@example.com",login:{uuid:"733efcdb-e01b-458c-a4e0-f73c87bf93d7",username:"ticklishswan192",password:"qwer",salt:"gU13J1TG",md5:"304a39bd3117da2070780cef45f556f4",sha1:"6ec5a65420f7e8a697d627948cac52fea5a57938",sha256:"e40ccdb0e55103873ebe95b2478be9aa8cbd61bd9cec8917a76d6cde7dc9e013"},dob:{date:"1954-06-03T20:55:52.169",age:65},registered:{date:"2006-07-01T04:14:33.522",age:13},phone:"78069424",cell:"95345899",id:{name:"FN",value:"03065403896"},picture:{large:"https://randomuser.me/api/portraits/women/85.jpg",medium:"https://randomuser.me/api/portraits/med/women/85.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/85.jpg"},nat:"NO"},{gender:"female",name:{title:"Ms",first:"Enni",last:"Laitinen"},location:{street:{number:2910,name:"Satakennankatu"},city:"Kyyjärvi",state:"Finland Proper",country:"Finland",postcode:25451,coordinates:{latitude:"-49.0754",longitude:"19.7421"},timezone:{offset:"-4:00",description:"Atlantic Time (Canada), Caracas, La Paz"}},email:"enni.laitinen@example.com",login:{uuid:"11f9f9d5-84de-4561-859a-6ee5c5ecec5b",username:"beautifullion294",password:"gabriel",salt:"Tkoos5AN",md5:"5347bc54846a36496778b155af86d2b3",sha1:"8cb6c52dbc514d9249e08eb4fdb4a18c4efb0b1c",sha256:"e94653daf263c1cd43445a0321fed326daadfc19a8e6b69afc691429edfcf864"},dob:{date:"1984-03-09T06:17:30.224",age:35},registered:{date:"2004-03-03T20:52:08.754",age:15},phone:"04-331-412",cell:"046-618-62-33",id:{name:"HETU",value:"NaNNA086undefined"},picture:{large:"https://randomuser.me/api/portraits/women/30.jpg",medium:"https://randomuser.me/api/portraits/med/women/30.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/30.jpg"},nat:"FI"},{gender:"female",name:{title:"Ms",first:"Emma",last:"Johansen"},location:{street:{number:7036,name:"Fiskervej"},city:"Vesterborg",state:"Sjælland",country:"Denmark",postcode:52454,coordinates:{latitude:"30.4256",longitude:"-29.5687"},timezone:{offset:"-12:00",description:"Eniwetok, Kwajalein"}},email:"emma.johansen@example.com",login:{uuid:"5a98c5dd-25e9-42a4-a917-f532509006a0",username:"bigwolf246",password:"eeeee",salt:"RY0Qqqa7",md5:"3e66b3b32bb2ba417735eb4a17cda73f",sha1:"7069fe69a032d0efe2df32ccc567705560b476a8",sha256:"526d0e5ed435165687cf24bb53fc7eb5c99a86f756b1d88325b2dfcc569bcf38"},dob:{date:"1996-03-26T01:09:57.672",age:23},registered:{date:"2012-02-21T07:44:16.670",age:7},phone:"08435022",cell:"03911203",id:{name:"CPR",value:"260396-0203"},picture:{large:"https://randomuser.me/api/portraits/women/22.jpg",medium:"https://randomuser.me/api/portraits/med/women/22.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/22.jpg"},nat:"DK"},{gender:"male",name:{title:"Mr",first:"Sebastian",last:"Christiansen"},location:{street:{number:7949,name:"Lucernevej"},city:"Hirtsals",state:"Nordjylland",country:"Denmark",postcode:81167,coordinates:{latitude:"-89.6935",longitude:"-179.7939"},timezone:{offset:"+9:00",description:"Tokyo, Seoul, Osaka, Sapporo, Yakutsk"}},email:"sebastian.christiansen@example.com",login:{uuid:"1136e5fe-c3ac-4083-9d40-e5a1ba0edab2",username:"tinyfrog639",password:"raven",salt:"lGcS3nrc",md5:"a7afdaaa22ad429154e0c64f3ebb9585",sha1:"c025b0f860033c1c6ead2b2c569aa94ee7905f0f",sha256:"d4e484ee589712cb13d7dbb23e6e19170fc82c1d58d6e19a37f15836d615fefa"},dob:{date:"1954-01-31T09:05:28.093",age:65},registered:{date:"2016-03-28T07:51:25.350",age:3},phone:"79262385",cell:"17570700",id:{name:"CPR",value:"310154-2962"},picture:{large:"https://randomuser.me/api/portraits/men/27.jpg",medium:"https://randomuser.me/api/portraits/med/men/27.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/27.jpg"},nat:"DK"},{gender:"male",name:{title:"Mr",first:"Dietmar",last:"Klostermann"},location:{street:{number:1587,name:"Finkenweg"},city:"Usingen",state:"Saarland",country:"Germany",postcode:78313,coordinates:{latitude:"-17.7747",longitude:"66.6258"},timezone:{offset:"+10:00",description:"Eastern Australia, Guam, Vladivostok"}},email:"dietmar.klostermann@example.com",login:{uuid:"c97e8944-1ea1-49dd-85b2-42f34dcc6fce",username:"sadkoala745",password:"komodo",salt:"B36auSns",md5:"59c2dd690b7e3d01ef9030cd386247fe",sha1:"94cea75ffbbe224538ac4c6fc427970500e3df13",sha256:"9fb68cead835c66e64f3005667e17387ce8ee690eaa42918dc473885bde6e95a"},dob:{date:"1997-01-08T02:18:53.712",age:22},registered:{date:"2006-08-15T16:15:57.242",age:13},phone:"0339-9215721",cell:"0178-2060440",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/28.jpg",medium:"https://randomuser.me/api/portraits/med/men/28.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/28.jpg"},nat:"DE"},{gender:"female",name:{title:"Ms",first:"Liva",last:"Andersen"},location:{street:{number:5056,name:"Vesterhavsgade"},city:"Hurup Thy",state:"Danmark",country:"Denmark",postcode:69760,coordinates:{latitude:"53.7255",longitude:"-172.8716"},timezone:{offset:"+1:00",description:"Brussels, Copenhagen, Madrid, Paris"}},email:"liva.andersen@example.com",login:{uuid:"0bea0cf6-1684-497e-9638-c41830186171",username:"orangeladybug967",password:"tricia",salt:"7bdKTAnJ",md5:"67b6c89bd42032bcb769bc1688da8926",sha1:"4fdbbb66dc75a02cb9210deed9b5230342c2a845",sha256:"9d99be9186ef96a3b8049b998cb6e13c9c0587ab7b2538e568a53f9542becb2e"},dob:{date:"1960-12-23T22:50:18.656",age:59},registered:{date:"2017-10-25T03:32:12.828",age:2},phone:"69184914",cell:"07841002",id:{name:"CPR",value:"231260-3417"},picture:{large:"https://randomuser.me/api/portraits/women/24.jpg",medium:"https://randomuser.me/api/portraits/med/women/24.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/24.jpg"},nat:"DK"},{gender:"male",name:{title:"Mr",first:"كيان",last:"صدر"},location:{street:{number:4819,name:"مالک اشتر"},city:"نیشابور",state:"گیلان",country:"Iran",postcode:40767,coordinates:{latitude:"-84.9583",longitude:"-35.0439"},timezone:{offset:"+10:00",description:"Eastern Australia, Guam, Vladivostok"}},email:"kyn.sdr@example.com",login:{uuid:"85df36dc-5fa2-457f-9af4-acc8e3fe97b9",username:"blackpanda419",password:"asdasd",salt:"BhEIZdox",md5:"afdf6f99a51a5b1c7617f8f1b7bf25af",sha1:"d8654bf054983983d5d0066308b80c6641265ca4",sha256:"1930e44a77488e3565091e5f5552a28b9716d0c0163da787d283b7924ffc35e5"},dob:{date:"1979-05-15T08:15:29.552",age:40},registered:{date:"2016-06-04T05:45:25.249",age:3},phone:"058-57739262",cell:"0961-644-6538",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/91.jpg",medium:"https://randomuser.me/api/portraits/med/men/91.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/91.jpg"},nat:"IR"},{gender:"female",name:{title:"Ms",first:"Fernanda",last:"Jesus"},location:{street:{number:1006,name:"Rua Sete de Setembro "},city:"Teresópolis",state:"Mato Grosso do Sul",country:"Brazil",postcode:14671,coordinates:{latitude:"-28.2727",longitude:"3.4733"},timezone:{offset:"-5:00",description:"Eastern Time (US & Canada), Bogota, Lima"}},email:"fernanda.jesus@example.com",login:{uuid:"272806b1-2f2d-40c1-b643-53272b4dd794",username:"bigpeacock191",password:"oliver",salt:"LIzilBw5",md5:"b150b136e996487b02d5adf30813c236",sha1:"c026aedaff1506824dd1ceda83e55f09f11f8a29",sha256:"358739135356755338440d76b98e0db53712a0f15703c97164303e13e91220c5"},dob:{date:"1965-04-14T14:19:02.999",age:54},registered:{date:"2019-08-02T07:08:20.458",age:0},phone:"(51) 2654-9489",cell:"(93) 0906-3280",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/95.jpg",medium:"https://randomuser.me/api/portraits/med/women/95.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/95.jpg"},nat:"BR"},{gender:"female",name:{title:"Miss",first:"Emma",last:"Fortin"},location:{street:{number:5774,name:"15th St"},city:"Selkirk",state:"Ontario",country:"Canada",postcode:"K9M 0D7",coordinates:{latitude:"-29.6023",longitude:"112.6680"},timezone:{offset:"+2:00",description:"Kaliningrad, South Africa"}},email:"emma.fortin@example.com",login:{uuid:"08089bb0-b54c-4e91-bb8f-f80b60bee0c9",username:"sadwolf760",password:"123456789",salt:"qLVbM5SD",md5:"72004a3eaca9736617aa251bd18dce26",sha1:"b1faed210e0335c95aa06380d8c0102e1f93ed05",sha256:"93a50ee38ba3111449f60aba2b1ed4d80b677c8ecc86545d36555ea1ea367a85"},dob:{date:"1986-08-09T19:27:34.721",age:33},registered:{date:"2012-12-03T06:48:17.705",age:7},phone:"050-660-0329",cell:"674-077-5896",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/42.jpg",medium:"https://randomuser.me/api/portraits/med/women/42.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/42.jpg"},nat:"CA"},{gender:"male",name:{title:"Mr",first:"Nathaniel",last:"Wilson"},location:{street:{number:8671,name:"Lake Road"},city:"Porirua",state:"Bay of Plenty",country:"New Zealand",postcode:10598,coordinates:{latitude:"-66.6462",longitude:"70.4354"},timezone:{offset:"-12:00",description:"Eniwetok, Kwajalein"}},email:"nathaniel.wilson@example.com",login:{uuid:"f86700ee-096f-46f5-aeaa-02b24a384c34",username:"lazyleopard167",password:"hellyeah",salt:"e6QCUdQ0",md5:"e679222e9de42426fab81189b0143a86",sha1:"09f8c4a3f339c234286764047ed4dbaafd466594",sha256:"3266a27a27baf7e2858a3470c5ad6dcfe1fe45b5182b1bf907cb2b832e2891c1"},dob:{date:"1988-09-13T03:54:58.833",age:31},registered:{date:"2012-04-18T10:07:10.978",age:7},phone:"(411)-300-1500",cell:"(389)-595-0872",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/31.jpg",medium:"https://randomuser.me/api/portraits/med/men/31.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/31.jpg"},nat:"NZ"},{gender:"male",name:{title:"Mr",first:"Tom",last:"Byrd"},location:{street:{number:1663,name:"Mill Road"},city:"Roscrea",state:"Monaghan",country:"Ireland",postcode:95434,coordinates:{latitude:"-0.3222",longitude:"-105.9196"},timezone:{offset:"+9:30",description:"Adelaide, Darwin"}},email:"tom.byrd@example.com",login:{uuid:"f81c76d5-b5ad-4f95-81da-319118a0e2ee",username:"bigdog124",password:"ussy",salt:"KkBHoX67",md5:"0804daa5d04e7af30dd495df03843f70",sha1:"e792eec833874236ec2cb2f67f7df75db7378f1f",sha256:"0f52e6589a1b54f313c18b4e1531eb978f06198c71283eb1d7796fa8b6d27947"},dob:{date:"1969-03-01T04:49:39.308",age:50},registered:{date:"2015-12-01T01:26:00.563",age:4},phone:"031-516-6550",cell:"081-531-0820",id:{name:"PPS",value:"2856867T"},picture:{large:"https://randomuser.me/api/portraits/men/49.jpg",medium:"https://randomuser.me/api/portraits/med/men/49.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/49.jpg"},nat:"IE"},{gender:"female",name:{title:"Mrs",first:"Didi",last:"Van den Bogaart"},location:{street:{number:7150,name:"Datheenhove"},city:"Maarssenbroek",state:"Utrecht",country:"Netherlands",postcode:80208,coordinates:{latitude:"86.2402",longitude:"-62.4758"},timezone:{offset:"+8:00",description:"Beijing, Perth, Singapore, Hong Kong"}},email:"didi.vandenbogaart@example.com",login:{uuid:"fb653cb9-e629-4d9d-96eb-6cece102acaa",username:"browndog776",password:"nation",salt:"FvSK8hsv",md5:"6fb1ad2f707e5313b32843f78ec3827c",sha1:"ce024d03a482852091b2d0875929c17bf8263e70",sha256:"258c41d37a73d6a73338affcc55bb97df434cce638bb17eb393ceeb2c0146646"},dob:{date:"1952-02-12T03:18:44.297",age:67},registered:{date:"2007-01-25T13:36:06.904",age:12},phone:"(059)-545-2430",cell:"(120)-106-1598",id:{name:"BSN",value:"74397793"},picture:{large:"https://randomuser.me/api/portraits/women/90.jpg",medium:"https://randomuser.me/api/portraits/med/women/90.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/90.jpg"},nat:"NL"},{gender:"male",name:{title:"Monsieur",first:"Lars",last:"Roche"},location:{street:{number:2587,name:"Place de la Mairie"},city:"Rapperswil (Be)",state:"Basel-Landschaft",country:"Switzerland",postcode:6868,coordinates:{latitude:"11.8993",longitude:"3.8626"},timezone:{offset:"+10:00",description:"Eastern Australia, Guam, Vladivostok"}},email:"lars.roche@example.com",login:{uuid:"3065518a-26df-411f-b4fc-b0fdd470f987",username:"orangeelephant485",password:"rancid",salt:"wZlUmrh3",md5:"46c7efcd3f1b848e060f71d913f9e62b",sha1:"409fe6baf55b20a509c540c2683234a8a363c325",sha256:"0a63f047f85094d488ad65ef75278b1ad86a1ab155ab0997a3e7776178c6b198"},dob:{date:"1947-07-04T07:10:00.001",age:72},registered:{date:"2013-10-28T20:43:04.138",age:6},phone:"079 146 05 11",cell:"075 780 66 62",id:{name:"AVS",value:"756.4991.9318.39"},picture:{large:"https://randomuser.me/api/portraits/men/83.jpg",medium:"https://randomuser.me/api/portraits/med/men/83.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/83.jpg"},nat:"CH"},{gender:"male",name:{title:"Mr",first:"Antoine",last:"Lucas"},location:{street:{number:3482,name:"Quai Charles-De-Gaulle"},city:"Fort-de-France",state:"Somme",country:"France",postcode:20747,coordinates:{latitude:"44.2405",longitude:"161.6987"},timezone:{offset:"-5:00",description:"Eastern Time (US & Canada), Bogota, Lima"}},email:"antoine.lucas@example.com",login:{uuid:"ff8daf6d-36b4-4911-8c56-6b51c2281d51",username:"purplegorilla564",password:"apple123",salt:"UFJLw3Vw",md5:"9dd25106e56d5a5514eeb13299993948",sha1:"1f34cd3b5da361aa53b25fc19a38ab683ba0420a",sha256:"b6bf8c75cc6ae74a12977ac9ed843e45329d579e4fd7c733540ccfae84f1b680"},dob:{date:"1945-03-25T10:57:21.313",age:74},registered:{date:"2004-05-10T04:27:19.611",age:15},phone:"04-96-91-81-25",cell:"06-28-50-97-25",id:{name:"INSEE",value:"1NNaN15652513 91"},picture:{large:"https://randomuser.me/api/portraits/men/5.jpg",medium:"https://randomuser.me/api/portraits/med/men/5.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/5.jpg"},nat:"FR"},{gender:"male",name:{title:"Mr",first:"Aldo",last:"Peixoto"},location:{street:{number:1160,name:"Rua São Sebastiao "},city:"Caxias do Sul",state:"Paraíba",country:"Brazil",postcode:74453,coordinates:{latitude:"-76.8418",longitude:"2.2376"},timezone:{offset:"+1:00",description:"Brussels, Copenhagen, Madrid, Paris"}},email:"aldo.peixoto@example.com",login:{uuid:"d5462a14-ab0b-445e-8039-3bc9a4ccfe88",username:"yellowpeacock145",password:"tracker",salt:"uGPlU8Cu",md5:"b45c04d98ec50da0c861a82638fd5e14",sha1:"a405eaaa4357ef52788ca852c76f4fe96b9ec272",sha256:"09eda8854fcb3ab69e21e0607b5a02b7712cdcb4955dabbd8dd2beabfc09a106"},dob:{date:"1979-11-14T17:36:10.180",age:40},registered:{date:"2009-06-16T01:47:51.484",age:10},phone:"(99) 0630-0603",cell:"(68) 5217-0236",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/92.jpg",medium:"https://randomuser.me/api/portraits/med/men/92.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/92.jpg"},nat:"BR"},{gender:"female",name:{title:"Mrs",first:"Augusta",last:"Wischnewski"},location:{street:{number:536,name:"Heideweg"},city:"Besigheim",state:"Thüringen",country:"Germany",postcode:95044,coordinates:{latitude:"-4.4553",longitude:"126.2923"},timezone:{offset:"+3:30",description:"Tehran"}},email:"augusta.wischnewski@example.com",login:{uuid:"f4225d21-6c89-416e-ba1b-152cd050cf4b",username:"purplegorilla623",password:"amelia",salt:"9e7xeSw7",md5:"e9d4b7a0a3f5f7edff3e64eb92f35dbf",sha1:"a08753d77e7013797e901e02f1a28ceced692345",sha256:"e9280430635c557b460066fd95b952e675ad25857b4c042a7bae43891d42725f"},dob:{date:"1977-06-21T14:05:13.043",age:42},registered:{date:"2004-12-30T05:16:43.294",age:15},phone:"0459-7326747",cell:"0178-1916835",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/31.jpg",medium:"https://randomuser.me/api/portraits/med/women/31.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/31.jpg"},nat:"DE"},{gender:"female",name:{title:"Ms",first:"Irene",last:"Fogaça"},location:{street:{number:7134,name:"Rua Um"},city:"Várzea Grande",state:"Piauí",country:"Brazil",postcode:65940,coordinates:{latitude:"-44.1425",longitude:"-179.0040"},timezone:{offset:"-10:00",description:"Hawaii"}},email:"irene.fogaca@example.com",login:{uuid:"46f33c71-4df0-4923-a521-7af78d328ad1",username:"crazyostrich557",password:"winona",salt:"yb0SfKVr",md5:"573eb32adf49baa05ea5cc1f9c9aa9a5",sha1:"2074d3c1e7453f8c3357e21d18f0ce230d384171",sha256:"e90c90409821fea8f9ff3fc3281eef5a08b2e57158270baf89542d6d08f4b455"},dob:{date:"1989-03-29T04:48:26.360",age:30},registered:{date:"2005-01-31T04:28:04.760",age:14},phone:"(62) 6910-1285",cell:"(42) 4374-4204",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/44.jpg",medium:"https://randomuser.me/api/portraits/med/women/44.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/44.jpg"},nat:"BR"},{gender:"female",name:{title:"Ms",first:"Amy",last:"Lo"},location:{street:{number:3145,name:"Vimy St"},city:"Havelock",state:"Nunavut",country:"Canada",postcode:"D1V 3K6",coordinates:{latitude:"-45.0700",longitude:"81.1810"},timezone:{offset:"-11:00",description:"Midway Island, Samoa"}},email:"amy.lo@example.com",login:{uuid:"37c55f5f-e7f8-4522-8171-1ab2450c1c81",username:"crazylion917",password:"california",salt:"jVcjUWmH",md5:"ef2d13165839cf7e526c58117b3d0e96",sha1:"7b79a41f6c791ff55ea901b9d56e7b1b944c8b7a",sha256:"cf98e6e2e1c73d17b22dd859c76023bec42e565a55bb42fd9605bc3ce1708ecc"},dob:{date:"1987-10-02T10:23:51.520",age:32},registered:{date:"2003-02-05T20:37:20.085",age:16},phone:"315-389-9926",cell:"486-638-6668",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/74.jpg",medium:"https://randomuser.me/api/portraits/med/women/74.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/74.jpg"},nat:"CA"},{gender:"male",name:{title:"Mr",first:"Dustin",last:"Mcguinness"},location:{street:{number:1746,name:"New Road"},city:"Carrigaline",state:"Waterford",country:"Ireland",postcode:97349,coordinates:{latitude:"17.7736",longitude:"-45.9096"},timezone:{offset:"+8:00",description:"Beijing, Perth, Singapore, Hong Kong"}},email:"dustin.mcguinness@example.com",login:{uuid:"d7db2927-28f7-4842-affd-9af4e832487d",username:"yellowfrog195",password:"vampires",salt:"HGb0b7Vs",md5:"97493f3cdb1f1aeebf366693e67c1f79",sha1:"f0e445a9dfcbf63c79c64277f4d6d75cca7f3132",sha256:"74eb006b9539ac14b68f95190c18ad629d041613c1d232e140580f2c3fb2a570"},dob:{date:"1953-11-02T12:35:44.494",age:66},registered:{date:"2004-03-11T10:59:25.164",age:15},phone:"071-305-5118",cell:"081-317-4735",id:{name:"PPS",value:"1247231T"},picture:{large:"https://randomuser.me/api/portraits/men/78.jpg",medium:"https://randomuser.me/api/portraits/med/men/78.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/78.jpg"},nat:"IE"},{gender:"female",name:{title:"Mrs",first:"Ortrud",last:"Pick"},location:{street:{number:2961,name:"Feldstraße"},city:"Gardelegen",state:"Sachsen-Anhalt",country:"Germany",postcode:79503,coordinates:{latitude:"-68.7768",longitude:"68.9859"},timezone:{offset:"+8:00",description:"Beijing, Perth, Singapore, Hong Kong"}},email:"ortrud.pick@example.com",login:{uuid:"d23d1631-8ea0-47e8-9f31-627bc36164a3",username:"organicgorilla132",password:"freedom",salt:"5ZwdyV8U",md5:"138767228057e0688d82d84680a070f8",sha1:"bd799ad13cbcea50cbb59235951104f339570eb6",sha256:"5ef2ab9bc542397832715d11121c59b7186fb3af0ace72ce1f0d7ef7a283c3b5"},dob:{date:"1968-05-05T13:42:52.257",age:51},registered:{date:"2003-04-29T07:31:06.760",age:16},phone:"0534-2965483",cell:"0173-0583435",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/7.jpg",medium:"https://randomuser.me/api/portraits/med/women/7.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/7.jpg"},nat:"DE"},{gender:"male",name:{title:"Mr",first:"Pablo",last:"Calvo"},location:{street:{number:858,name:"Calle de La Luna"},city:"Alicante",state:"Castilla la Mancha",country:"Spain",postcode:84542,coordinates:{latitude:"-70.2048",longitude:"50.9456"},timezone:{offset:"+3:00",description:"Baghdad, Riyadh, Moscow, St. Petersburg"}},email:"pablo.calvo@example.com",login:{uuid:"164b2fd9-1f4b-4ca1-bf96-5873c9281373",username:"brownwolf822",password:"burrito",salt:"IZLf77br",md5:"dd14a6a16e9394c6f63e66801cefdba4",sha1:"bc743713b23b99383daf1455609739dc327a8b7f",sha256:"8c8b0a69eaa81a245db5ce5267558a3a4e6d6e41b8af00e04d9491df2ffa44a6"},dob:{date:"1990-07-02T20:37:38.155",age:29},registered:{date:"2008-11-04T15:26:35.976",age:11},phone:"965-588-776",cell:"667-566-334",id:{name:"DNI",value:"96779942-C"},picture:{large:"https://randomuser.me/api/portraits/men/29.jpg",medium:"https://randomuser.me/api/portraits/med/men/29.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/29.jpg"},nat:"ES"},{gender:"female",name:{title:"Miss",first:"Christine",last:"Wiegel"},location:{street:{number:5852,name:"Jahnstraße"},city:"Herzogenaurach",state:"Hessen",country:"Germany",postcode:73080,coordinates:{latitude:"-1.5451",longitude:"-113.5046"},timezone:{offset:"-6:00",description:"Central Time (US & Canada), Mexico City"}},email:"christine.wiegel@example.com",login:{uuid:"07162679-7778-4f7e-897c-bd47615163d4",username:"bigbird225",password:"1234abcd",salt:"4qQPkyJa",md5:"59263c97fb24c1e6d99d4606420b3b3b",sha1:"e51bf447e7821426e117a834d1f5696e70cc58ed",sha256:"9c0ea50846e4fe46b2c66a17bfb5e69e0ecdaa2edb2f371e0beb8cb2636f5296"},dob:{date:"1949-06-18T14:47:45.482",age:70},registered:{date:"2009-10-02T01:48:14.356",age:10},phone:"0433-1752119",cell:"0173-6699629",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/46.jpg",medium:"https://randomuser.me/api/portraits/med/women/46.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/46.jpg"},nat:"DE"},{gender:"female",name:{title:"Miss",first:"Allison",last:"Perkins"},location:{street:{number:6394,name:"Hillcrest Rd"},city:"Queanbeyan",state:"Victoria",country:"Australia",postcode:9080,coordinates:{latitude:"25.5413",longitude:"-0.5716"},timezone:{offset:"+5:45",description:"Kathmandu"}},email:"allison.perkins@example.com",login:{uuid:"a5e314c0-9807-4a74-95b2-3ba29a550dae",username:"brownzebra946",password:"rockford",salt:"Mp8gzR1i",md5:"742f36c9c3b0a1a7babac4cb6f187876",sha1:"991ccec5af3b3a518a66d4c37e4349caca4dfdc7",sha256:"48fdcf2638597b4fc04ae7bf60f5db80cb4584c8c94a6d6ea9638a97d4afcdd3"},dob:{date:"1958-05-16T20:08:17.214",age:61},registered:{date:"2017-05-05T10:17:37.290",age:2},phone:"08-0138-2080",cell:"0425-242-025",id:{name:"TFN",value:"127892499"},picture:{large:"https://randomuser.me/api/portraits/women/28.jpg",medium:"https://randomuser.me/api/portraits/med/women/28.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/28.jpg"},nat:"AU"},{gender:"female",name:{title:"Miss",first:"یسنا",last:"زارعی"},location:{street:{number:1377,name:"میدان شهدا"},city:"اسلام‌شهر",state:"آذربایجان غربی",country:"Iran",postcode:70803,coordinates:{latitude:"-52.8618",longitude:"23.2668"},timezone:{offset:"+5:00",description:"Ekaterinburg, Islamabad, Karachi, Tashkent"}},email:"ysn.zraay@example.com",login:{uuid:"000fb156-4510-4f53-a119-ff6e051b802f",username:"whitetiger930",password:"pamela",salt:"JmqXgTC9",md5:"a5cc59a1a482e0b3f295e0abdfa76f46",sha1:"5dbd8a00c7919c36d6ece1bab70fb2455264deca",sha256:"c4328ea7d673fe263bddb8dffec604989fb4b9ea6be862a40201f6f87479ec92"},dob:{date:"1970-10-12T22:47:47.198",age:49},registered:{date:"2004-12-12T20:49:24.438",age:15},phone:"048-65123460",cell:"0930-800-1797",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/75.jpg",medium:"https://randomuser.me/api/portraits/med/women/75.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/75.jpg"},nat:"IR"},{gender:"male",name:{title:"Mr",first:"Emrik",last:"Ofstad"},location:{street:{number:304,name:"Harald Rømckes vei"},city:"Kirkevoll",state:"Rogaland",country:"Norway",postcode:"4522",coordinates:{latitude:"60.8327",longitude:"-26.4489"},timezone:{offset:"+7:00",description:"Bangkok, Hanoi, Jakarta"}},email:"emrik.ofstad@example.com",login:{uuid:"2cdd3549-ca74-47f4-b2be-37fcd0ec5721",username:"orangemouse419",password:"dima",salt:"9bs6GUjA",md5:"0b6b0cb2dada57e7b60b46704c73b17c",sha1:"fdeccd4b2b871aa1a77b6014c26a9182a65834bb",sha256:"2acaf8016951bbe4cd7e781546509d9c0f1b20d555d6989177d6cce3d8252b94"},dob:{date:"1980-06-10T21:46:57.444",age:39},registered:{date:"2005-06-08T02:24:33.159",age:14},phone:"25542171",cell:"40408806",id:{name:"FN",value:"10068040502"},picture:{large:"https://randomuser.me/api/portraits/men/25.jpg",medium:"https://randomuser.me/api/portraits/med/men/25.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/25.jpg"},nat:"NO"},{gender:"female",name:{title:"Miss",first:"Afşar",last:"Gümüşpala"},location:{street:{number:9915,name:"Mevlana Cd"},city:"Mardin",state:"Bartın",country:"Turkey",postcode:80943,coordinates:{latitude:"-50.2112",longitude:"-124.3725"},timezone:{offset:"-1:00",description:"Azores, Cape Verde Islands"}},email:"afsar.gumuspala@example.com",login:{uuid:"37cf76fe-c048-4d23-85d0-77186aecb064",username:"angryswan657",password:"pacino",salt:"tNDeTS6U",md5:"37eca926261c634989103c6faa033774",sha1:"69ef3039bc2cfb5568c0a075d094e63902823841",sha256:"83b88e8e81605bc21b9e0fde0fc61a7798bd71f681c8aeedaa528fe8537657d8"},dob:{date:"1991-02-07T16:47:33.075",age:28},registered:{date:"2015-09-02T20:01:22.570",age:4},phone:"(433)-458-9590",cell:"(576)-934-6897",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/79.jpg",medium:"https://randomuser.me/api/portraits/med/women/79.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/79.jpg"},nat:"TR"},{gender:"female",name:{title:"Miss",first:"Carol",last:"Lord"},location:{street:{number:2522,name:"Rochestown Road"},city:"Buncrana",state:"Sligo",country:"Ireland",postcode:81026,coordinates:{latitude:"70.1369",longitude:"-8.0988"},timezone:{offset:"+5:00",description:"Ekaterinburg, Islamabad, Karachi, Tashkent"}},email:"carol.lord@example.com",login:{uuid:"31f177cc-2c31-4339-bd74-c8f262660016",username:"tinytiger963",password:"wolfpac",salt:"jI2ZZ4Jg",md5:"0eb5a433e59e665409e1bab48f25c579",sha1:"6614b23e925106203284d0560054de3906c29010",sha256:"de0c88287aae1ee2509be476c3542718cf8668f389332a23652dacaade653cef"},dob:{date:"1970-08-31T12:57:19.316",age:49},registered:{date:"2012-07-07T13:59:05.834",age:7},phone:"051-725-2120",cell:"081-320-7881",id:{name:"PPS",value:"6321744T"},picture:{large:"https://randomuser.me/api/portraits/women/69.jpg",medium:"https://randomuser.me/api/portraits/med/women/69.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/69.jpg"},nat:"IE"},{gender:"female",name:{title:"Miss",first:"Loesje",last:"Zielman"},location:{street:{number:7240,name:"Huurland"},city:"Warmenhuizen",state:"Noord-Holland",country:"Netherlands",postcode:41193,coordinates:{latitude:"-34.9951",longitude:"-111.4926"},timezone:{offset:"-6:00",description:"Central Time (US & Canada), Mexico City"}},email:"loesje.zielman@example.com",login:{uuid:"793640ef-ace6-4b18-8e15-6c51b81b92bf",username:"orangepanda985",password:"tornado",salt:"z3k60Zh9",md5:"0656c4f905c0e2fc2605f21a13589b72",sha1:"7dd802239ff2665a4ea43146db25f3f2948856be",sha256:"b9167ee8c6f8b59248a16d811ef88d9f10ba19d74afb55941c41498f3b68bf85"},dob:{date:"1988-11-16T14:12:38.085",age:31},registered:{date:"2010-03-11T11:00:39.880",age:9},phone:"(124)-162-5656",cell:"(517)-684-9760",id:{name:"BSN",value:"31093086"},picture:{large:"https://randomuser.me/api/portraits/women/53.jpg",medium:"https://randomuser.me/api/portraits/med/women/53.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/53.jpg"},nat:"NL"},{gender:"male",name:{title:"Mr",first:"Léandre",last:"Louis"},location:{street:{number:1723,name:"Rue Cyrus-Hugues"},city:"Perpignan",state:"Martinique",country:"France",postcode:43388,coordinates:{latitude:"-40.2298",longitude:"-25.2168"},timezone:{offset:"+4:30",description:"Kabul"}},email:"leandre.louis@example.com",login:{uuid:"7a6c41f0-cb45-4841-bbc7-c27b60b89b41",username:"brownbird136",password:"1369",salt:"H3X2hmmp",md5:"b707935af5384206ed06401e35faa7f5",sha1:"9a9d7a4178e35019372fce6fa7f8d33e833e3d0c",sha256:"b2d59a4ce6d00fb42658c3e7e88335c350e91a3301567c4da08526a4dcda3ea3"},dob:{date:"1982-10-29T19:34:55.940",age:37},registered:{date:"2004-04-17T23:27:47.542",age:15},phone:"02-74-75-72-65",cell:"06-83-17-17-49",id:{name:"INSEE",value:"1NNaN66199806 47"},picture:{large:"https://randomuser.me/api/portraits/men/30.jpg",medium:"https://randomuser.me/api/portraits/med/men/30.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/30.jpg"},nat:"FR"},{gender:"male",name:{title:"Mr",first:"Natão",last:"Jesus"},location:{street:{number:3020,name:"Rua Belo Horizonte "},city:"Cuiabá",state:"Alagoas",country:"Brazil",postcode:46853,coordinates:{latitude:"78.3376",longitude:"16.4228"},timezone:{offset:"-9:00",description:"Alaska"}},email:"natao.jesus@example.com",login:{uuid:"fec5fe9e-7bcf-4a57-8849-36949eeb0408",username:"ticklishzebra378",password:"lesbian",salt:"AzjoIbFD",md5:"60a0360fddeb379b508b90b87066408f",sha1:"0634ff6640fa099b998d67e1bc8deec8fd6d44bd",sha256:"474b1905892003dfb8e73a292aadfcd1b57a0a3ad21777a7b0201f51705f032a"},dob:{date:"1957-09-26T01:32:36.208",age:62},registered:{date:"2013-06-10T03:10:15.929",age:6},phone:"(00) 3015-0999",cell:"(13) 6346-9135",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/88.jpg",medium:"https://randomuser.me/api/portraits/med/men/88.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/88.jpg"},nat:"BR"},{gender:"female",name:{title:"Miss",first:"Gonca",last:"Duygulu"},location:{street:{number:8180,name:"Istiklal Cd"},city:"Van",state:"Bolu",country:"Turkey",postcode:78205,coordinates:{latitude:"-26.1604",longitude:"-66.1773"},timezone:{offset:"+5:30",description:"Bombay, Calcutta, Madras, New Delhi"}},email:"gonca.duygulu@example.com",login:{uuid:"4bed8442-391f-4490-b006-3e9906589f75",username:"angrymouse308",password:"ou812",salt:"LvPaUtKO",md5:"f0454881857476882cd778354b82a096",sha1:"defdc318983554618e04261841096b17e0d00f51",sha256:"3f9eb105ab8f1c89a834b92a66b84d6a11c1ca95f275c76b1ba6e2b472357193"},dob:{date:"1978-02-20T05:43:27.403",age:41},registered:{date:"2012-09-24T11:08:21.344",age:7},phone:"(039)-507-1858",cell:"(023)-316-8825",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/76.jpg",medium:"https://randomuser.me/api/portraits/med/women/76.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/76.jpg"},nat:"TR"},{gender:"female",name:{title:"Ms",first:"Alison",last:"Cox"},location:{street:{number:2986,name:"New Road"},city:"Portlaoise",state:"Tipperary",country:"Ireland",postcode:87545,coordinates:{latitude:"19.6576",longitude:"145.0594"},timezone:{offset:"-4:00",description:"Atlantic Time (Canada), Caracas, La Paz"}},email:"alison.cox@example.com",login:{uuid:"948aeb35-53c8-4195-ab7f-cec9015a4d9f",username:"sadbird152",password:"gina",salt:"fKmK0h7I",md5:"6c6c1dcb30fb432f5cf2800444477088",sha1:"75499e69a308e6a73245cf7a652e9a01bac45165",sha256:"c73d63bf40daa5ab3a5b97738c0bece53e6b81801edea11f29508411fb13baeb"},dob:{date:"1978-10-31T18:37:58.959",age:41},registered:{date:"2017-04-01T10:06:19.118",age:2},phone:"051-355-0130",cell:"081-754-7163",id:{name:"PPS",value:"8861585T"},picture:{large:"https://randomuser.me/api/portraits/women/80.jpg",medium:"https://randomuser.me/api/portraits/med/women/80.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/80.jpg"},nat:"IE"},{gender:"male",name:{title:"Mr",first:"Titouan",last:"Lefevre"},location:{street:{number:6268,name:"Rue de la Mairie"},city:"Villeurbanne",state:"Alpes-Maritimes",country:"France",postcode:48995,coordinates:{latitude:"19.9899",longitude:"153.3192"},timezone:{offset:"-1:00",description:"Azores, Cape Verde Islands"}},email:"titouan.lefevre@example.com",login:{uuid:"bf2e9dd3-f167-4559-851a-f61106c2ab5c",username:"happyleopard305",password:"racecar",salt:"9BkmeGgY",md5:"fd3e218f43fc73edbd5a1fb6ed9392a6",sha1:"8afd5f5b0df9dca917108cfd875cc1b1f2a23ceb",sha256:"06fe47ab7a24a2b8695b1243957ebedf4465524b6453524d02c8812b6d596fd9"},dob:{date:"1979-03-15T15:50:33.024",age:40},registered:{date:"2013-06-30T13:41:01.998",age:6},phone:"05-42-85-20-12",cell:"06-51-68-83-97",id:{name:"INSEE",value:"1NNaN58858848 03"},picture:{large:"https://randomuser.me/api/portraits/men/36.jpg",medium:"https://randomuser.me/api/portraits/med/men/36.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/36.jpg"},nat:"FR"},{gender:"male",name:{title:"Mr",first:"Raymond",last:"Mehlhorn"},location:{street:{number:5506,name:"Tulpenweg"},city:"Königstein (Sächsische Schweiz)",state:"Thüringen",country:"Germany",postcode:74026,coordinates:{latitude:"79.1640",longitude:"-177.1255"},timezone:{offset:"+9:30",description:"Adelaide, Darwin"}},email:"raymond.mehlhorn@example.com",login:{uuid:"75593c95-f7c9-4990-8974-f46c642b6ede",username:"sadpanda611",password:"rafael",salt:"4tSCfNy0",md5:"fae9a956e30a9e2b2da0fb6da2b20fef",sha1:"9adbcbc20ae6f2afb8b1982021331ec36a958b10",sha256:"5e3a961e3ccd9b7bdcf4add575f3b8d8edcb81504eb1706408f449037f1fbc24"},dob:{date:"1979-06-02T13:45:56.884",age:40},registered:{date:"2004-02-29T03:02:35.064",age:15},phone:"0582-4613049",cell:"0172-4354831",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/29.jpg",medium:"https://randomuser.me/api/portraits/med/men/29.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/29.jpg"},nat:"DE"},{gender:"male",name:{title:"Mr",first:"Davut",last:"Atan"},location:{street:{number:2440,name:"Şehitler Cd"},city:"Sakarya",state:"Karabük",country:"Turkey",postcode:34096,coordinates:{latitude:"-78.7966",longitude:"-97.0028"},timezone:{offset:"-9:00",description:"Alaska"}},email:"davut.atan@example.com",login:{uuid:"d87ae1dc-afa8-464b-be27-8f857ab5a471",username:"ticklishwolf215",password:"probes",salt:"Xfp25guk",md5:"42a959f811e5dce6249ae610e7af6d13",sha1:"8250e267e4b1aff27436e9839fc9ad9824125c3f",sha256:"a06581e5bd1eb478583f792712bdd18ac4d8dafdc411a487bd1f7094d5295ff6"},dob:{date:"1956-09-03T22:44:39.748",age:63},registered:{date:"2011-02-28T03:03:55.675",age:8},phone:"(459)-958-9462",cell:"(526)-260-8667",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/27.jpg",medium:"https://randomuser.me/api/portraits/med/men/27.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/27.jpg"},nat:"TR"},{gender:"male",name:{title:"Mr",first:"Ben",last:"Terry"},location:{street:{number:5735,name:"Rochestown Road"},city:"Kinsealy-Drinan",state:"Wicklow",country:"Ireland",postcode:84903,coordinates:{latitude:"-52.4454",longitude:"-3.6174"},timezone:{offset:"-12:00",description:"Eniwetok, Kwajalein"}},email:"ben.terry@example.com",login:{uuid:"70503d60-624d-48eb-8ded-438302d3a128",username:"whitepanda107",password:"osiris",salt:"SMe6eLks",md5:"96f9d9f6b49e440459b4ecf8248c889b",sha1:"8644d8393c50e11801d7b8d908e5a197d40dbfd4",sha256:"b850810155be03ad029c05ce25c584390df4b1941086a38ed557837e0186eb3c"},dob:{date:"1970-10-20T09:01:54.481",age:49},registered:{date:"2005-04-21T12:52:27.695",age:14},phone:"021-183-3779",cell:"081-038-5989",id:{name:"PPS",value:"6342833T"},picture:{large:"https://randomuser.me/api/portraits/men/30.jpg",medium:"https://randomuser.me/api/portraits/med/men/30.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/30.jpg"},nat:"IE"},{gender:"female",name:{title:"Miss",first:"Venla",last:"Polon"},location:{street:{number:2974,name:"Tahmelantie"},city:"Alajärvi",state:"South Karelia",country:"Finland",postcode:95145,coordinates:{latitude:"4.1855",longitude:"-8.5346"},timezone:{offset:"+9:30",description:"Adelaide, Darwin"}},email:"venla.polon@example.com",login:{uuid:"3ee2cd80-0692-4f1c-a482-a678cd3c7497",username:"blackladybug449",password:"gromit",salt:"hy0GIIIl",md5:"599ff379ee3a5309a96c8dce64df281c",sha1:"ea0ce38bba8c804da2f4294f127e64fb1d1feb3f",sha256:"32dee2d73e753774dcfdb07837ca1c2e6ff12ddcf9517f0e90cecf9ee3b59eea"},dob:{date:"1982-03-10T04:54:59.756",age:37},registered:{date:"2004-06-28T19:52:44.601",age:15},phone:"05-433-502",cell:"047-353-55-43",id:{name:"HETU",value:"NaNNA610undefined"},picture:{large:"https://randomuser.me/api/portraits/women/8.jpg",medium:"https://randomuser.me/api/portraits/med/women/8.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/8.jpg"},nat:"FI"},{gender:"male",name:{title:"Mr",first:"Igor",last:"Wroldsen"},location:{street:{number:3123,name:"Erlends vei"},city:"Vangsvik",state:"Hedmark",country:"Norway",postcode:"5019",coordinates:{latitude:"-63.1064",longitude:"76.5690"},timezone:{offset:"-8:00",description:"Pacific Time (US & Canada)"}},email:"igor.wroldsen@example.com",login:{uuid:"0c61d1db-961c-4a38-ac55-f3fdeaae4b1b",username:"bluepanda623",password:"istanbul",salt:"isUd4SMr",md5:"75d2c17516e32182a861996a9d6333d3",sha1:"519bd8b1dad9762f6b33441e58ade400b5bbc337",sha256:"5ae63bf2e7f0c04f73cf409b1fca4aa4cf33e16dac96d6eb238d981e95135bf0"},dob:{date:"1958-01-22T19:28:36.450",age:61},registered:{date:"2013-01-09T09:09:03.192",age:6},phone:"86427985",cell:"48806955",id:{name:"FN",value:"22015805742"},picture:{large:"https://randomuser.me/api/portraits/men/98.jpg",medium:"https://randomuser.me/api/portraits/med/men/98.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/98.jpg"},nat:"NO"},{gender:"male",name:{title:"Monsieur",first:"Jeton",last:"Aubert"},location:{street:{number:5377,name:"Rue des Ecrivains"},city:"Yvonand",state:"Schaffhausen",country:"Switzerland",postcode:9062,coordinates:{latitude:"-40.6185",longitude:"59.1971"},timezone:{offset:"+5:45",description:"Kathmandu"}},email:"jeton.aubert@example.com",login:{uuid:"fa47e064-f4d9-4e3a-918f-d4cf34e46493",username:"lazymeercat179",password:"taylor",salt:"xJrhvc1P",md5:"2070989778a30d49ef2c82da874e241c",sha1:"cd2ebc48c75267810228c03e084407eb208b205e",sha256:"09f66a85a316f7b34f67289232dd613ccf0186bd6b9c3db1428e62ac2365f8fb"},dob:{date:"1970-02-16T21:21:24.439",age:49},registered:{date:"2002-08-11T08:29:20.046",age:17},phone:"078 450 49 31",cell:"078 908 19 50",id:{name:"AVS",value:"756.3037.4992.26"},picture:{large:"https://randomuser.me/api/portraits/men/90.jpg",medium:"https://randomuser.me/api/portraits/med/men/90.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/90.jpg"},nat:"CH"},{gender:"male",name:{title:"Mr",first:"Charles",last:"Slawa"},location:{street:{number:1352,name:"Disputed Rd"},city:"Enterprise",state:"Nunavut",country:"Canada",postcode:"Z1J 6T4",coordinates:{latitude:"88.8390",longitude:"153.0247"},timezone:{offset:"+9:30",description:"Adelaide, Darwin"}},email:"charles.slawa@example.com",login:{uuid:"b83e9a1c-3f15-4b13-a31d-e65655c4e4c1",username:"organicostrich403",password:"bella1",salt:"3vrlVvzm",md5:"34a59b94b17de7051444f1d017d00c9b",sha1:"4518e2b292f57723cd17b990b4900d17176824cd",sha256:"991a34349d608ad52e5aae24cc142105d6916a462b18daa50581cacf8f9963a1"},dob:{date:"1947-10-22T18:47:25.459",age:72},registered:{date:"2009-02-01T00:37:43.274",age:10},phone:"157-922-6698",cell:"135-457-9008",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/66.jpg",medium:"https://randomuser.me/api/portraits/med/men/66.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/66.jpg"},nat:"CA"},{gender:"male",name:{title:"Mr",first:"Yahya",last:"Høyer"},location:{street:{number:9216,name:"Bekkeveien"},city:"Langevåg",state:"Oslo",country:"Norway",postcode:"5484",coordinates:{latitude:"-46.9460",longitude:"-61.3210"},timezone:{offset:"+5:45",description:"Kathmandu"}},email:"yahya.hoyer@example.com",login:{uuid:"1c658da1-bbea-44fa-9a6f-40d1ca693212",username:"lazywolf690",password:"tuan",salt:"3ebLmQJn",md5:"617babf401d0188d2d8c3b4d85c15560",sha1:"17d321c6b0c54e63929cc07d9e089c1822916a1e",sha256:"9611cbee246147e5420dd078350befbee225519cb01499105aef142562950671"},dob:{date:"1959-09-22T21:38:53.384",age:60},registered:{date:"2008-06-16T01:18:26.136",age:11},phone:"68745453",cell:"49146563",id:{name:"FN",value:"22095921101"},picture:{large:"https://randomuser.me/api/portraits/men/34.jpg",medium:"https://randomuser.me/api/portraits/med/men/34.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/34.jpg"},nat:"NO"},{gender:"female",name:{title:"Ms",first:"Tracey",last:"Roberts"},location:{street:{number:2816,name:"Richmond Road"},city:"Southampton",state:"Lincolnshire",country:"United Kingdom",postcode:"NT1V 8XX",coordinates:{latitude:"66.1344",longitude:"-10.6032"},timezone:{offset:"0:00",description:"Western Europe Time, London, Lisbon, Casablanca"}},email:"tracey.roberts@example.com",login:{uuid:"036d9f3f-7b09-406c-87c6-8d9d06d00d16",username:"bluebutterfly843",password:"sprite",salt:"eCLUVzAp",md5:"5178c23f6f7d9bd897faa077264609e5",sha1:"cd1f257ee96579bbc41e599712ffa27ef6f9a8fe",sha256:"1e012c53f8cce03163c04bb2248709625899cf71461d300a0ce64a37d46fd2fe"},dob:{date:"1966-08-11T09:53:36.339",age:53},registered:{date:"2009-12-20T08:49:38.576",age:10},phone:"017683 86770",cell:"0759-593-435",id:{name:"NINO",value:"GG 10 20 13 R"},picture:{large:"https://randomuser.me/api/portraits/women/87.jpg",medium:"https://randomuser.me/api/portraits/med/women/87.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/87.jpg"},nat:"GB"},{gender:"female",name:{title:"Ms",first:"Cecilie",last:"Larsen"},location:{street:{number:614,name:"Holmevej"},city:"Nørre Sundby",state:"Midtjylland",country:"Denmark",postcode:22366,coordinates:{latitude:"69.7024",longitude:"59.1490"},timezone:{offset:"+9:30",description:"Adelaide, Darwin"}},email:"cecilie.larsen@example.com",login:{uuid:"95644c8c-c84a-46f6-aca1-cde9db8bdd12",username:"angrysnake455",password:"millions",salt:"ejLYgz1p",md5:"a8d6f1a252b603c1f8b2058e2974dfe8",sha1:"8b2de2b9ca5fb35a9973c8522d17b2b4d1364019",sha256:"5b2d8fdb36d40c443682d2bd93369251c770e48d88eeaf6f735e0b3af87bf68b"},dob:{date:"1972-11-03T22:05:51.503",age:47},registered:{date:"2006-07-22T18:36:36.475",age:13},phone:"53561179",cell:"71484101",id:{name:"CPR",value:"031172-5341"},picture:{large:"https://randomuser.me/api/portraits/women/29.jpg",medium:"https://randomuser.me/api/portraits/med/women/29.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/29.jpg"},nat:"DK"},{gender:"male",name:{title:"Mr",first:"Jerry",last:"Austin"},location:{street:{number:9254,name:"Crockett St"},city:"Fargo",state:"Colorado",country:"United States",postcode:54782,coordinates:{latitude:"-46.0263",longitude:"137.0490"},timezone:{offset:"-5:00",description:"Eastern Time (US & Canada), Bogota, Lima"}},email:"jerry.austin@example.com",login:{uuid:"cd1be747-a856-49cf-be97-c46b44c622b2",username:"brownwolf352",password:"kuang",salt:"8jrDsT84",md5:"f2440f2bdd7b1490337ea87e1b776067",sha1:"757ad8e99e8d4e0e77887b20b049dca9b4ecccbd",sha256:"b0daed4c3b06b23377cc227a4ffce06a43456851b2e75f2dd35b4ba338ce3b30"},dob:{date:"1959-11-11T03:39:52.959",age:60},registered:{date:"2018-01-28T12:16:17.253",age:1},phone:"(712)-569-1073",cell:"(544)-776-8003",id:{name:"SSN",value:"588-64-3806"},picture:{large:"https://randomuser.me/api/portraits/men/6.jpg",medium:"https://randomuser.me/api/portraits/med/men/6.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/6.jpg"},nat:"US"},{gender:"female",name:{title:"Miss",first:"Marinês",last:"Dias"},location:{street:{number:7253,name:"Rua da Saudade"},city:"Indaiatuba",state:"Amazonas",country:"Brazil",postcode:74055,coordinates:{latitude:"-46.7347",longitude:"-94.8290"},timezone:{offset:"0:00",description:"Western Europe Time, London, Lisbon, Casablanca"}},email:"marines.dias@example.com",login:{uuid:"4e6a6083-b145-4552-b13b-b2da4450dc4b",username:"ticklishswan874",password:"dontknow",salt:"EHMfpPUh",md5:"f6eeea1272c72b48d2179cd6972db386",sha1:"87dfdf9cefbdeb9868db670681d1a31a5ab34d16",sha256:"896bf732b6249d140230051ad9b8921e5e138084a775e665713f19e1c9c868af"},dob:{date:"1990-09-11T23:49:30.767",age:29},registered:{date:"2010-06-09T20:26:43.250",age:9},phone:"(79) 2626-4881",cell:"(38) 5302-2719",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/33.jpg",medium:"https://randomuser.me/api/portraits/med/women/33.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/33.jpg"},nat:"BR"},{gender:"female",name:{title:"Miss",first:"Josefine",last:"Johansen"},location:{street:{number:5828,name:"Vesterhavsvej"},city:"Brøndby Strand",state:"Hovedstaden",country:"Denmark",postcode:31394,coordinates:{latitude:"-38.6813",longitude:"-83.4276"},timezone:{offset:"-9:00",description:"Alaska"}},email:"josefine.johansen@example.com",login:{uuid:"b0b3ec7b-cfb4-440f-91f2-f930e7580431",username:"browntiger139",password:"575757",salt:"l1DmPE8D",md5:"b0581c8018469ce204dc05697a7f647f",sha1:"0b2ea98d30c6b17d5188df6b65b939e9e451acec",sha256:"33214645aff6dc9ab19c3ec1c004aebe715b83ac302fd272a2baebac71661127"},dob:{date:"1970-11-18T07:49:13.581",age:49},registered:{date:"2014-02-12T23:28:33.831",age:5},phone:"09908316",cell:"28291762",id:{name:"CPR",value:"181170-2056"},picture:{large:"https://randomuser.me/api/portraits/women/33.jpg",medium:"https://randomuser.me/api/portraits/med/women/33.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/33.jpg"},nat:"DK"},{gender:"female",name:{title:"Mrs",first:"Roxane",last:"Mathieu"},location:{street:{number:4324,name:"Rue Duquesne"},city:"Nancy",state:"Lot-et-Garonne",country:"France",postcode:55761,coordinates:{latitude:"-26.1166",longitude:"150.4148"},timezone:{offset:"-5:00",description:"Eastern Time (US & Canada), Bogota, Lima"}},email:"roxane.mathieu@example.com",login:{uuid:"11306130-553d-41ec-b48c-380be340be49",username:"beautifulswan354",password:"bonjour",salt:"Iu3aUZLj",md5:"8538909df1af2f7e5a89b83641a3fd9b",sha1:"568fdd11ed1a9f810ec4b97139f020ae06f20b32",sha256:"ad9c807f11d3cce14438a0f7c292d6bdade177be60329f29a9e38aba9cdfd4ac"},dob:{date:"1980-04-07T11:54:56.864",age:39},registered:{date:"2003-08-10T18:08:02.459",age:16},phone:"05-42-75-95-79",cell:"06-32-37-38-38",id:{name:"INSEE",value:"2NNaN35660572 16"},picture:{large:"https://randomuser.me/api/portraits/women/14.jpg",medium:"https://randomuser.me/api/portraits/med/women/14.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/14.jpg"},nat:"FR"},{gender:"male",name:{title:"Mr",first:"Klaus-Jürgen",last:"Hintze"},location:{street:{number:6005,name:"Parkstraße"},city:"Lichtenberg",state:"Rheinland-Pfalz",country:"Germany",postcode:65539,coordinates:{latitude:"-58.6113",longitude:"108.1656"},timezone:{offset:"+4:30",description:"Kabul"}},email:"klaus-jurgen.hintze@example.com",login:{uuid:"4ce4a45e-91c8-4c0b-913e-a44327f24ebc",username:"ticklishdog683",password:"fender",salt:"UxjPjOjg",md5:"ef09a1f80ddb5b389b7d3e238f787b3e",sha1:"b6efd5eb636b52115b4124c4a8312e63a1090203",sha256:"d05b2244aa2404c5b6d52b1bb2138198213ec194e7be862042cf65e3490439ac"},dob:{date:"1991-02-28T09:31:48.703",age:28},registered:{date:"2019-01-18T22:21:26.955",age:0},phone:"0750-9647215",cell:"0170-5037545",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/50.jpg",medium:"https://randomuser.me/api/portraits/med/men/50.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/50.jpg"},nat:"DE"},{gender:"male",name:{title:"Mr",first:"Jesus",last:"Sanz"},location:{street:{number:439,name:"Calle de La Luna"},city:"La Coruña",state:"Comunidad de Madrid",country:"Spain",postcode:74656,coordinates:{latitude:"-9.5378",longitude:"137.4854"},timezone:{offset:"+4:00",description:"Abu Dhabi, Muscat, Baku, Tbilisi"}},email:"jesus.sanz@example.com",login:{uuid:"e05b348b-7bf4-4455-be42-8c42e40a0671",username:"purplemeercat567",password:"massive",salt:"avgTxMpb",md5:"1086157a31ed2f3302a8fcf06e1b2dc7",sha1:"d3a1c08c6893470b367419b5c9e2858d4067dc1c",sha256:"eb23245d8a34a6ee982d7d921287aea08f87c97fab0e45bd905b4fb7be78f358"},dob:{date:"1986-01-28T13:06:32.057",age:33},registered:{date:"2013-07-23T19:58:34.714",age:6},phone:"975-215-384",cell:"676-144-793",id:{name:"DNI",value:"03058027-H"},picture:{large:"https://randomuser.me/api/portraits/men/95.jpg",medium:"https://randomuser.me/api/portraits/med/men/95.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/95.jpg"},nat:"ES"},{gender:"male",name:{title:"Mr",first:"Quentin",last:"Lefebvre"},location:{street:{number:7573,name:"Rue de Cuire"},city:"Lille",state:"Martinique",country:"France",postcode:25564,coordinates:{latitude:"-35.0751",longitude:"34.6141"},timezone:{offset:"-8:00",description:"Pacific Time (US & Canada)"}},email:"quentin.lefebvre@example.com",login:{uuid:"80f78e50-af00-49b6-b9e8-7f4e3af2d7e1",username:"goldenpanda292",password:"878787",salt:"nlxu91b1",md5:"8abacafa5af0a044dabacbb1dd9bb721",sha1:"710beffead35deb4e2bce48b30607a2d10c043ec",sha256:"6ac9f943c821f3b334bf221f288452dc3066e75351585618995669130931c624"},dob:{date:"1990-02-09T23:24:22.360",age:29},registered:{date:"2005-05-19T16:02:24.172",age:14},phone:"01-96-17-50-29",cell:"06-59-32-28-35",id:{name:"INSEE",value:"1NNaN62012299 53"},picture:{large:"https://randomuser.me/api/portraits/men/7.jpg",medium:"https://randomuser.me/api/portraits/med/men/7.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/7.jpg"},nat:"FR"},{gender:"male",name:{title:"Mr",first:"Eemil",last:"Seppanen"},location:{street:{number:9880,name:"Nordenskiöldinkatu"},city:"Oulu",state:"North Karelia",country:"Finland",postcode:70550,coordinates:{latitude:"-15.7362",longitude:"-177.3814"},timezone:{offset:"-1:00",description:"Azores, Cape Verde Islands"}},email:"eemil.seppanen@example.com",login:{uuid:"cd711034-61ba-45a7-b79c-f57178d03512",username:"angryswan587",password:"cornell",salt:"uqbzwb2Q",md5:"564df356213ac1d16857df34f917c8df",sha1:"d38cbe49eef2731d970c491f536211ff6d2ac3a6",sha256:"d365440722ede5f557f372693b1a72e718bf8cb47b2e469a6d12b22697dd43ef"},dob:{date:"1978-05-02T20:41:02.710",age:41},registered:{date:"2008-05-21T09:59:06.516",age:11},phone:"07-431-718",cell:"042-140-08-90",id:{name:"HETU",value:"NaNNA141undefined"},picture:{large:"https://randomuser.me/api/portraits/men/27.jpg",medium:"https://randomuser.me/api/portraits/med/men/27.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/27.jpg"},nat:"FI"},{gender:"male",name:{title:"Mr",first:"Macit",last:"Okur"},location:{street:{number:7415,name:"Fatih Sultan Mehmet Cd"},city:"Mersin",state:"Eskişehir",country:"Turkey",postcode:13140,coordinates:{latitude:"35.1099",longitude:"-52.2998"},timezone:{offset:"+4:00",description:"Abu Dhabi, Muscat, Baku, Tbilisi"}},email:"macit.okur@example.com",login:{uuid:"ace8e8cb-5f4a-43b2-a77a-85d1f58c31be",username:"redrabbit160",password:"4567",salt:"lpTGGBoD",md5:"55ecbbd2c075eb293424b92d75d691d4",sha1:"b0ae1b0717d3a08cf07b4d43a41bba7719606b44",sha256:"262b2115a5a1866f1f061e7915b1c7ddd418feb115c21e8a50e50404d56582db"},dob:{date:"1959-01-03T01:54:15.256",age:60},registered:{date:"2008-01-01T06:13:28.417",age:11},phone:"(526)-785-7259",cell:"(820)-363-6281",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/25.jpg",medium:"https://randomuser.me/api/portraits/med/men/25.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/25.jpg"},nat:"TR"},{gender:"female",name:{title:"Mrs",first:"Dianne",last:"Franklin"},location:{street:{number:1314,name:"First Street"},city:"Flowermound",state:"New Mexico",country:"United States",postcode:65070,coordinates:{latitude:"-16.5986",longitude:"-161.3157"},timezone:{offset:"+3:30",description:"Tehran"}},email:"dianne.franklin@example.com",login:{uuid:"9862275e-a1c1-46ff-8239-96e6eef40f19",username:"heavyduck111",password:"weed",salt:"SIBYuCYQ",md5:"8b7fca2b711fd1a70a6942cf1cf5a25c",sha1:"c7401d1e732918ef1864220cc3f8bf8acc324a7d",sha256:"42a815d82d72365544ff4b9fad3afe16d31ef2eb9db60bde41e9ce281ae6d131"},dob:{date:"1965-08-01T22:49:50.704",age:54},registered:{date:"2004-12-01T04:27:30.064",age:15},phone:"(974)-344-3252",cell:"(882)-578-9343",id:{name:"SSN",value:"533-92-5224"},picture:{large:"https://randomuser.me/api/portraits/women/70.jpg",medium:"https://randomuser.me/api/portraits/med/women/70.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/70.jpg"},nat:"US"}];window.PatternFlyData={servers:Pa,users:za};