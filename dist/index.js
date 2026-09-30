"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var q=v(function(B,o){
var x=require('@stdlib/blas-base-dcopy/dist').ndarray,P=require('@stdlib/blas-ext-base-dfill/dist').ndarray;function j(e,r,i,d,n,a,t,u){return e<=0||(r<0&&(r=0),P(r,i[n],a,t,u),x(e,i,d,n,a,t,u+t*r)),a}o.exports=j
});var c=v(function(C,l){
var f=require('@stdlib/strided-base-stride2offset/dist'),m=q();function R(e,r,i,d,n,a){var t,u;return r<0&&(r=0),t=f(e,d),u=f(e+r,a),m(e,r,i,d,t,n,a,u)}l.exports=R
});var E=v(function(D,y){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=c(),O=q();_(p,"ndarray",O);y.exports=p
});var b=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=E(),s,g=h(b(__dirname,"./native.js"));w(g)?s=z:s=g;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
