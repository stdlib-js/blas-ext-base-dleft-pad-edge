"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var q=f(function(D,p){
function R(e,r,i,n,d,a,u,s){var o,v,l,t;if(e<=0)return a;for(r<0&&(r=0),l=i[d],v=s,t=0;t<r;t++)a[v]=l,v+=u;for(o=d,t=0;t<e;t++)a[v]=i[o],v+=u,o+=n;return a}p.exports=R
});var g=f(function(F,E){
var x=require('@stdlib/strided-base-stride2offset/dist'),_=q();function O(e,r,i,n,d,a){var u,s;return r<0&&(r=0),u=x(e,n),s=x(e+r,a),_(e,r,i,n,u,d,a,s)}E.exports=O
});var j=f(function(G,P){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=g(),h=q();b(y,"ndarray",h);P.exports=y
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=j(),c,m=z(w(__dirname,"./native.js"));A(m)?c=B:c=m;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
