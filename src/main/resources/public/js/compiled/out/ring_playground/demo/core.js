// Compiled by ClojureScript 1.10.339 {}
goog.provide('ring_playground.demo.core');
goog.require('cljs.core');
goog.require('reagent.core');
ring_playground.demo.core.render = (function ring_playground$demo$core$render(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Hello cljs world!"], null);
});
var temp__5635__auto___7154 = document.getElementById("app");
if(cljs.core.truth_(temp__5635__auto___7154)){
var app_context_7155 = temp__5635__auto___7154;
var state_7156 = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ring_playground.demo.core.render,state_7156], null),app_context_7155);
} else {
}

//# sourceMappingURL=core.js.map?rel=1539578155450
