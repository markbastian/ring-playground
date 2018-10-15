// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__6659__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6659 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6660__i = 0, G__6660__a = new Array(arguments.length -  0);
while (G__6660__i < G__6660__a.length) {G__6660__a[G__6660__i] = arguments[G__6660__i + 0]; ++G__6660__i;}
  args = new cljs.core.IndexedSeq(G__6660__a,0,null);
} 
return G__6659__delegate.call(this,args);};
G__6659.cljs$lang$maxFixedArity = 0;
G__6659.cljs$lang$applyTo = (function (arglist__6661){
var args = cljs.core.seq(arglist__6661);
return G__6659__delegate(args);
});
G__6659.cljs$core$IFn$_invoke$arity$variadic = G__6659__delegate;
return G__6659;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__6662__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6662 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6663__i = 0, G__6663__a = new Array(arguments.length -  0);
while (G__6663__i < G__6663__a.length) {G__6663__a[G__6663__i] = arguments[G__6663__i + 0]; ++G__6663__i;}
  args = new cljs.core.IndexedSeq(G__6663__a,0,null);
} 
return G__6662__delegate.call(this,args);};
G__6662.cljs$lang$maxFixedArity = 0;
G__6662.cljs$lang$applyTo = (function (arglist__6664){
var args = cljs.core.seq(arglist__6664);
return G__6662__delegate(args);
});
G__6662.cljs$core$IFn$_invoke$arity$variadic = G__6662__delegate;
return G__6662;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1539578154233
