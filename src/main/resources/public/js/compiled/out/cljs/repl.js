// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31572){
var map__31573 = p__31572;
var map__31573__$1 = ((((!((map__31573 == null)))?(((((map__31573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31573):map__31573);
var m = map__31573__$1;
var n = cljs.core.get.call(null,map__31573__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31573__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5635__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5635__auto__)){
var ns = temp__5635__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31575_31597 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31576_31598 = null;
var count__31577_31599 = (0);
var i__31578_31600 = (0);
while(true){
if((i__31578_31600 < count__31577_31599)){
var f_31601 = cljs.core._nth.call(null,chunk__31576_31598,i__31578_31600);
cljs.core.println.call(null,"  ",f_31601);


var G__31602 = seq__31575_31597;
var G__31603 = chunk__31576_31598;
var G__31604 = count__31577_31599;
var G__31605 = (i__31578_31600 + (1));
seq__31575_31597 = G__31602;
chunk__31576_31598 = G__31603;
count__31577_31599 = G__31604;
i__31578_31600 = G__31605;
continue;
} else {
var temp__5635__auto___31606 = cljs.core.seq.call(null,seq__31575_31597);
if(temp__5635__auto___31606){
var seq__31575_31607__$1 = temp__5635__auto___31606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31575_31607__$1)){
var c__4351__auto___31608 = cljs.core.chunk_first.call(null,seq__31575_31607__$1);
var G__31609 = cljs.core.chunk_rest.call(null,seq__31575_31607__$1);
var G__31610 = c__4351__auto___31608;
var G__31611 = cljs.core.count.call(null,c__4351__auto___31608);
var G__31612 = (0);
seq__31575_31597 = G__31609;
chunk__31576_31598 = G__31610;
count__31577_31599 = G__31611;
i__31578_31600 = G__31612;
continue;
} else {
var f_31613 = cljs.core.first.call(null,seq__31575_31607__$1);
cljs.core.println.call(null,"  ",f_31613);


var G__31614 = cljs.core.next.call(null,seq__31575_31607__$1);
var G__31615 = null;
var G__31616 = (0);
var G__31617 = (0);
seq__31575_31597 = G__31614;
chunk__31576_31598 = G__31615;
count__31577_31599 = G__31616;
i__31578_31600 = G__31617;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31618 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31618);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31618)))?cljs.core.second.call(null,arglists_31618):arglists_31618));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31579_31619 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31580_31620 = null;
var count__31581_31621 = (0);
var i__31582_31622 = (0);
while(true){
if((i__31582_31622 < count__31581_31621)){
var vec__31583_31623 = cljs.core._nth.call(null,chunk__31580_31620,i__31582_31622);
var name_31624 = cljs.core.nth.call(null,vec__31583_31623,(0),null);
var map__31586_31625 = cljs.core.nth.call(null,vec__31583_31623,(1),null);
var map__31586_31626__$1 = ((((!((map__31586_31625 == null)))?(((((map__31586_31625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31586_31625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31586_31625):map__31586_31625);
var doc_31627 = cljs.core.get.call(null,map__31586_31626__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31628 = cljs.core.get.call(null,map__31586_31626__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31624);

cljs.core.println.call(null," ",arglists_31628);

if(cljs.core.truth_(doc_31627)){
cljs.core.println.call(null," ",doc_31627);
} else {
}


var G__31629 = seq__31579_31619;
var G__31630 = chunk__31580_31620;
var G__31631 = count__31581_31621;
var G__31632 = (i__31582_31622 + (1));
seq__31579_31619 = G__31629;
chunk__31580_31620 = G__31630;
count__31581_31621 = G__31631;
i__31582_31622 = G__31632;
continue;
} else {
var temp__5635__auto___31633 = cljs.core.seq.call(null,seq__31579_31619);
if(temp__5635__auto___31633){
var seq__31579_31634__$1 = temp__5635__auto___31633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31579_31634__$1)){
var c__4351__auto___31635 = cljs.core.chunk_first.call(null,seq__31579_31634__$1);
var G__31636 = cljs.core.chunk_rest.call(null,seq__31579_31634__$1);
var G__31637 = c__4351__auto___31635;
var G__31638 = cljs.core.count.call(null,c__4351__auto___31635);
var G__31639 = (0);
seq__31579_31619 = G__31636;
chunk__31580_31620 = G__31637;
count__31581_31621 = G__31638;
i__31582_31622 = G__31639;
continue;
} else {
var vec__31588_31640 = cljs.core.first.call(null,seq__31579_31634__$1);
var name_31641 = cljs.core.nth.call(null,vec__31588_31640,(0),null);
var map__31591_31642 = cljs.core.nth.call(null,vec__31588_31640,(1),null);
var map__31591_31643__$1 = ((((!((map__31591_31642 == null)))?(((((map__31591_31642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31591_31642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31591_31642):map__31591_31642);
var doc_31644 = cljs.core.get.call(null,map__31591_31643__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31645 = cljs.core.get.call(null,map__31591_31643__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31641);

cljs.core.println.call(null," ",arglists_31645);

if(cljs.core.truth_(doc_31644)){
cljs.core.println.call(null," ",doc_31644);
} else {
}


var G__31646 = cljs.core.next.call(null,seq__31579_31634__$1);
var G__31647 = null;
var G__31648 = (0);
var G__31649 = (0);
seq__31579_31619 = G__31646;
chunk__31580_31620 = G__31647;
count__31581_31621 = G__31648;
i__31582_31622 = G__31649;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5635__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5635__auto__)){
var fnspec = temp__5635__auto__;
cljs.core.print.call(null,"Spec");

var seq__31593 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31594 = null;
var count__31595 = (0);
var i__31596 = (0);
while(true){
if((i__31596 < count__31595)){
var role = cljs.core._nth.call(null,chunk__31594,i__31596);
var temp__5635__auto___31650__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5635__auto___31650__$1)){
var spec_31651 = temp__5635__auto___31650__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31651));
} else {
}


var G__31652 = seq__31593;
var G__31653 = chunk__31594;
var G__31654 = count__31595;
var G__31655 = (i__31596 + (1));
seq__31593 = G__31652;
chunk__31594 = G__31653;
count__31595 = G__31654;
i__31596 = G__31655;
continue;
} else {
var temp__5635__auto____$1 = cljs.core.seq.call(null,seq__31593);
if(temp__5635__auto____$1){
var seq__31593__$1 = temp__5635__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31593__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__31593__$1);
var G__31656 = cljs.core.chunk_rest.call(null,seq__31593__$1);
var G__31657 = c__4351__auto__;
var G__31658 = cljs.core.count.call(null,c__4351__auto__);
var G__31659 = (0);
seq__31593 = G__31656;
chunk__31594 = G__31657;
count__31595 = G__31658;
i__31596 = G__31659;
continue;
} else {
var role = cljs.core.first.call(null,seq__31593__$1);
var temp__5635__auto___31660__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5635__auto___31660__$2)){
var spec_31661 = temp__5635__auto___31660__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31661));
} else {
}


var G__31662 = cljs.core.next.call(null,seq__31593__$1);
var G__31663 = null;
var G__31664 = (0);
var G__31665 = (0);
seq__31593 = G__31662;
chunk__31594 = G__31663;
count__31595 = G__31664;
i__31596 = G__31665;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1539578346598
