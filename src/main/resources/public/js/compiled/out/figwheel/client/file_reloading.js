// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30108_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30108_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30109 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30110 = null;
var count__30111 = (0);
var i__30112 = (0);
while(true){
if((i__30112 < count__30111)){
var n = cljs.core._nth.call(null,chunk__30110,i__30112);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30113 = seq__30109;
var G__30114 = chunk__30110;
var G__30115 = count__30111;
var G__30116 = (i__30112 + (1));
seq__30109 = G__30113;
chunk__30110 = G__30114;
count__30111 = G__30115;
i__30112 = G__30116;
continue;
} else {
var temp__5635__auto__ = cljs.core.seq.call(null,seq__30109);
if(temp__5635__auto__){
var seq__30109__$1 = temp__5635__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30109__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__30109__$1);
var G__30117 = cljs.core.chunk_rest.call(null,seq__30109__$1);
var G__30118 = c__4351__auto__;
var G__30119 = cljs.core.count.call(null,c__4351__auto__);
var G__30120 = (0);
seq__30109 = G__30117;
chunk__30110 = G__30118;
count__30111 = G__30119;
i__30112 = G__30120;
continue;
} else {
var n = cljs.core.first.call(null,seq__30109__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30121 = cljs.core.next.call(null,seq__30109__$1);
var G__30122 = null;
var G__30123 = (0);
var G__30124 = (0);
seq__30109 = G__30121;
chunk__30110 = G__30122;
count__30111 = G__30123;
i__30112 = G__30124;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__30125){
var vec__30126 = p__30125;
var _ = cljs.core.nth.call(null,vec__30126,(0),null);
var v = cljs.core.nth.call(null,vec__30126,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__30129){
var vec__30130 = p__30129;
var k = cljs.core.nth.call(null,vec__30130,(0),null);
var v = cljs.core.nth.call(null,vec__30130,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30142_30150 = cljs.core.seq.call(null,deps);
var chunk__30143_30151 = null;
var count__30144_30152 = (0);
var i__30145_30153 = (0);
while(true){
if((i__30145_30153 < count__30144_30152)){
var dep_30154 = cljs.core._nth.call(null,chunk__30143_30151,i__30145_30153);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_30154;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30154));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30154,(depth + (1)),state);
} else {
}


var G__30155 = seq__30142_30150;
var G__30156 = chunk__30143_30151;
var G__30157 = count__30144_30152;
var G__30158 = (i__30145_30153 + (1));
seq__30142_30150 = G__30155;
chunk__30143_30151 = G__30156;
count__30144_30152 = G__30157;
i__30145_30153 = G__30158;
continue;
} else {
var temp__5635__auto___30159 = cljs.core.seq.call(null,seq__30142_30150);
if(temp__5635__auto___30159){
var seq__30142_30160__$1 = temp__5635__auto___30159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30142_30160__$1)){
var c__4351__auto___30161 = cljs.core.chunk_first.call(null,seq__30142_30160__$1);
var G__30162 = cljs.core.chunk_rest.call(null,seq__30142_30160__$1);
var G__30163 = c__4351__auto___30161;
var G__30164 = cljs.core.count.call(null,c__4351__auto___30161);
var G__30165 = (0);
seq__30142_30150 = G__30162;
chunk__30143_30151 = G__30163;
count__30144_30152 = G__30164;
i__30145_30153 = G__30165;
continue;
} else {
var dep_30166 = cljs.core.first.call(null,seq__30142_30160__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_30166;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30166));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30166,(depth + (1)),state);
} else {
}


var G__30167 = cljs.core.next.call(null,seq__30142_30160__$1);
var G__30168 = null;
var G__30169 = (0);
var G__30170 = (0);
seq__30142_30150 = G__30167;
chunk__30143_30151 = G__30168;
count__30144_30152 = G__30169;
i__30145_30153 = G__30170;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30146){
var vec__30147 = p__30146;
var seq__30148 = cljs.core.seq.call(null,vec__30147);
var first__30149 = cljs.core.first.call(null,seq__30148);
var seq__30148__$1 = cljs.core.next.call(null,seq__30148);
var x = first__30149;
var xs = seq__30148__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30147,seq__30148,first__30149,seq__30148__$1,x,xs,get_deps__$1){
return (function (p1__30133_SHARP_){
return clojure.set.difference.call(null,p1__30133_SHARP_,x);
});})(vec__30147,seq__30148,first__30149,seq__30148__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30171 = cljs.core.seq.call(null,provides);
var chunk__30172 = null;
var count__30173 = (0);
var i__30174 = (0);
while(true){
if((i__30174 < count__30173)){
var prov = cljs.core._nth.call(null,chunk__30172,i__30174);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30175_30183 = cljs.core.seq.call(null,requires);
var chunk__30176_30184 = null;
var count__30177_30185 = (0);
var i__30178_30186 = (0);
while(true){
if((i__30178_30186 < count__30177_30185)){
var req_30187 = cljs.core._nth.call(null,chunk__30176_30184,i__30178_30186);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30187,prov);


var G__30188 = seq__30175_30183;
var G__30189 = chunk__30176_30184;
var G__30190 = count__30177_30185;
var G__30191 = (i__30178_30186 + (1));
seq__30175_30183 = G__30188;
chunk__30176_30184 = G__30189;
count__30177_30185 = G__30190;
i__30178_30186 = G__30191;
continue;
} else {
var temp__5635__auto___30192 = cljs.core.seq.call(null,seq__30175_30183);
if(temp__5635__auto___30192){
var seq__30175_30193__$1 = temp__5635__auto___30192;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30175_30193__$1)){
var c__4351__auto___30194 = cljs.core.chunk_first.call(null,seq__30175_30193__$1);
var G__30195 = cljs.core.chunk_rest.call(null,seq__30175_30193__$1);
var G__30196 = c__4351__auto___30194;
var G__30197 = cljs.core.count.call(null,c__4351__auto___30194);
var G__30198 = (0);
seq__30175_30183 = G__30195;
chunk__30176_30184 = G__30196;
count__30177_30185 = G__30197;
i__30178_30186 = G__30198;
continue;
} else {
var req_30199 = cljs.core.first.call(null,seq__30175_30193__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30199,prov);


var G__30200 = cljs.core.next.call(null,seq__30175_30193__$1);
var G__30201 = null;
var G__30202 = (0);
var G__30203 = (0);
seq__30175_30183 = G__30200;
chunk__30176_30184 = G__30201;
count__30177_30185 = G__30202;
i__30178_30186 = G__30203;
continue;
}
} else {
}
}
break;
}


var G__30204 = seq__30171;
var G__30205 = chunk__30172;
var G__30206 = count__30173;
var G__30207 = (i__30174 + (1));
seq__30171 = G__30204;
chunk__30172 = G__30205;
count__30173 = G__30206;
i__30174 = G__30207;
continue;
} else {
var temp__5635__auto__ = cljs.core.seq.call(null,seq__30171);
if(temp__5635__auto__){
var seq__30171__$1 = temp__5635__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30171__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__30171__$1);
var G__30208 = cljs.core.chunk_rest.call(null,seq__30171__$1);
var G__30209 = c__4351__auto__;
var G__30210 = cljs.core.count.call(null,c__4351__auto__);
var G__30211 = (0);
seq__30171 = G__30208;
chunk__30172 = G__30209;
count__30173 = G__30210;
i__30174 = G__30211;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30171__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30179_30212 = cljs.core.seq.call(null,requires);
var chunk__30180_30213 = null;
var count__30181_30214 = (0);
var i__30182_30215 = (0);
while(true){
if((i__30182_30215 < count__30181_30214)){
var req_30216 = cljs.core._nth.call(null,chunk__30180_30213,i__30182_30215);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30216,prov);


var G__30217 = seq__30179_30212;
var G__30218 = chunk__30180_30213;
var G__30219 = count__30181_30214;
var G__30220 = (i__30182_30215 + (1));
seq__30179_30212 = G__30217;
chunk__30180_30213 = G__30218;
count__30181_30214 = G__30219;
i__30182_30215 = G__30220;
continue;
} else {
var temp__5635__auto___30221__$1 = cljs.core.seq.call(null,seq__30179_30212);
if(temp__5635__auto___30221__$1){
var seq__30179_30222__$1 = temp__5635__auto___30221__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30179_30222__$1)){
var c__4351__auto___30223 = cljs.core.chunk_first.call(null,seq__30179_30222__$1);
var G__30224 = cljs.core.chunk_rest.call(null,seq__30179_30222__$1);
var G__30225 = c__4351__auto___30223;
var G__30226 = cljs.core.count.call(null,c__4351__auto___30223);
var G__30227 = (0);
seq__30179_30212 = G__30224;
chunk__30180_30213 = G__30225;
count__30181_30214 = G__30226;
i__30182_30215 = G__30227;
continue;
} else {
var req_30228 = cljs.core.first.call(null,seq__30179_30222__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30228,prov);


var G__30229 = cljs.core.next.call(null,seq__30179_30222__$1);
var G__30230 = null;
var G__30231 = (0);
var G__30232 = (0);
seq__30179_30212 = G__30229;
chunk__30180_30213 = G__30230;
count__30181_30214 = G__30231;
i__30182_30215 = G__30232;
continue;
}
} else {
}
}
break;
}


var G__30233 = cljs.core.next.call(null,seq__30171__$1);
var G__30234 = null;
var G__30235 = (0);
var G__30236 = (0);
seq__30171 = G__30233;
chunk__30172 = G__30234;
count__30173 = G__30235;
i__30174 = G__30236;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30237_30241 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30238_30242 = null;
var count__30239_30243 = (0);
var i__30240_30244 = (0);
while(true){
if((i__30240_30244 < count__30239_30243)){
var ns_30245 = cljs.core._nth.call(null,chunk__30238_30242,i__30240_30244);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30245);


var G__30246 = seq__30237_30241;
var G__30247 = chunk__30238_30242;
var G__30248 = count__30239_30243;
var G__30249 = (i__30240_30244 + (1));
seq__30237_30241 = G__30246;
chunk__30238_30242 = G__30247;
count__30239_30243 = G__30248;
i__30240_30244 = G__30249;
continue;
} else {
var temp__5635__auto___30250 = cljs.core.seq.call(null,seq__30237_30241);
if(temp__5635__auto___30250){
var seq__30237_30251__$1 = temp__5635__auto___30250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30237_30251__$1)){
var c__4351__auto___30252 = cljs.core.chunk_first.call(null,seq__30237_30251__$1);
var G__30253 = cljs.core.chunk_rest.call(null,seq__30237_30251__$1);
var G__30254 = c__4351__auto___30252;
var G__30255 = cljs.core.count.call(null,c__4351__auto___30252);
var G__30256 = (0);
seq__30237_30241 = G__30253;
chunk__30238_30242 = G__30254;
count__30239_30243 = G__30255;
i__30240_30244 = G__30256;
continue;
} else {
var ns_30257 = cljs.core.first.call(null,seq__30237_30251__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30257);


var G__30258 = cljs.core.next.call(null,seq__30237_30251__$1);
var G__30259 = null;
var G__30260 = (0);
var G__30261 = (0);
seq__30237_30241 = G__30258;
chunk__30238_30242 = G__30259;
count__30239_30243 = G__30260;
i__30240_30244 = G__30261;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30262__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30262 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30263__i = 0, G__30263__a = new Array(arguments.length -  0);
while (G__30263__i < G__30263__a.length) {G__30263__a[G__30263__i] = arguments[G__30263__i + 0]; ++G__30263__i;}
  args = new cljs.core.IndexedSeq(G__30263__a,0,null);
} 
return G__30262__delegate.call(this,args);};
G__30262.cljs$lang$maxFixedArity = 0;
G__30262.cljs$lang$applyTo = (function (arglist__30264){
var args = cljs.core.seq(arglist__30264);
return G__30262__delegate(args);
});
G__30262.cljs$core$IFn$_invoke$arity$variadic = G__30262__delegate;
return G__30262;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__30265_SHARP_,p2__30266_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30265_SHARP_)].join('')),p2__30266_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__30267_SHARP_,p2__30268_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30267_SHARP_)].join(''),p2__30268_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__30269 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__30269.addCallback(((function (G__30269){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__30269))
);

G__30269.addErrback(((function (G__30269){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__30269))
);

return G__30269;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30270){if((e30270 instanceof Error)){
var e = e30270;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30270;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30271){if((e30271 instanceof Error)){
var e = e30271;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30271;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30272 = cljs.core._EQ_;
var expr__30273 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30272.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30273))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__30272.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30273))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__30272.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30273))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__30272,expr__30273){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30272,expr__30273))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30275,callback){
var map__30276 = p__30275;
var map__30276__$1 = ((((!((map__30276 == null)))?(((((map__30276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30276):map__30276);
var file_msg = map__30276__$1;
var request_url = cljs.core.get.call(null,map__30276__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__30276,map__30276__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30276,map__30276__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto__){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto__){
return (function (state_30314){
var state_val_30315 = (state_30314[(1)]);
if((state_val_30315 === (7))){
var inst_30310 = (state_30314[(2)]);
var state_30314__$1 = state_30314;
var statearr_30316_30342 = state_30314__$1;
(statearr_30316_30342[(2)] = inst_30310);

(statearr_30316_30342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (1))){
var state_30314__$1 = state_30314;
var statearr_30317_30343 = state_30314__$1;
(statearr_30317_30343[(2)] = null);

(statearr_30317_30343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (4))){
var inst_30280 = (state_30314[(7)]);
var inst_30280__$1 = (state_30314[(2)]);
var state_30314__$1 = (function (){var statearr_30318 = state_30314;
(statearr_30318[(7)] = inst_30280__$1);

return statearr_30318;
})();
if(cljs.core.truth_(inst_30280__$1)){
var statearr_30319_30344 = state_30314__$1;
(statearr_30319_30344[(1)] = (5));

} else {
var statearr_30320_30345 = state_30314__$1;
(statearr_30320_30345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (15))){
var inst_30293 = (state_30314[(8)]);
var inst_30295 = (state_30314[(9)]);
var inst_30297 = inst_30295.call(null,inst_30293);
var state_30314__$1 = state_30314;
var statearr_30321_30346 = state_30314__$1;
(statearr_30321_30346[(2)] = inst_30297);

(statearr_30321_30346[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (13))){
var inst_30304 = (state_30314[(2)]);
var state_30314__$1 = state_30314;
var statearr_30322_30347 = state_30314__$1;
(statearr_30322_30347[(2)] = inst_30304);

(statearr_30322_30347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (6))){
var state_30314__$1 = state_30314;
var statearr_30323_30348 = state_30314__$1;
(statearr_30323_30348[(2)] = null);

(statearr_30323_30348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (17))){
var inst_30301 = (state_30314[(2)]);
var state_30314__$1 = state_30314;
var statearr_30324_30349 = state_30314__$1;
(statearr_30324_30349[(2)] = inst_30301);

(statearr_30324_30349[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (3))){
var inst_30312 = (state_30314[(2)]);
var state_30314__$1 = state_30314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30314__$1,inst_30312);
} else {
if((state_val_30315 === (12))){
var state_30314__$1 = state_30314;
var statearr_30325_30350 = state_30314__$1;
(statearr_30325_30350[(2)] = null);

(statearr_30325_30350[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (2))){
var state_30314__$1 = state_30314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30314__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30315 === (11))){
var inst_30285 = (state_30314[(10)]);
var inst_30291 = figwheel.client.file_reloading.blocking_load.call(null,inst_30285);
var state_30314__$1 = state_30314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30314__$1,(14),inst_30291);
} else {
if((state_val_30315 === (9))){
var inst_30285 = (state_30314[(10)]);
var state_30314__$1 = state_30314;
if(cljs.core.truth_(inst_30285)){
var statearr_30326_30351 = state_30314__$1;
(statearr_30326_30351[(1)] = (11));

} else {
var statearr_30327_30352 = state_30314__$1;
(statearr_30327_30352[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (5))){
var inst_30286 = (state_30314[(11)]);
var inst_30280 = (state_30314[(7)]);
var inst_30285 = cljs.core.nth.call(null,inst_30280,(0),null);
var inst_30286__$1 = cljs.core.nth.call(null,inst_30280,(1),null);
var state_30314__$1 = (function (){var statearr_30328 = state_30314;
(statearr_30328[(10)] = inst_30285);

(statearr_30328[(11)] = inst_30286__$1);

return statearr_30328;
})();
if(cljs.core.truth_(inst_30286__$1)){
var statearr_30329_30353 = state_30314__$1;
(statearr_30329_30353[(1)] = (8));

} else {
var statearr_30330_30354 = state_30314__$1;
(statearr_30330_30354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (14))){
var inst_30285 = (state_30314[(10)]);
var inst_30295 = (state_30314[(9)]);
var inst_30293 = (state_30314[(2)]);
var inst_30294 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30295__$1 = cljs.core.get.call(null,inst_30294,inst_30285);
var state_30314__$1 = (function (){var statearr_30331 = state_30314;
(statearr_30331[(8)] = inst_30293);

(statearr_30331[(9)] = inst_30295__$1);

return statearr_30331;
})();
if(cljs.core.truth_(inst_30295__$1)){
var statearr_30332_30355 = state_30314__$1;
(statearr_30332_30355[(1)] = (15));

} else {
var statearr_30333_30356 = state_30314__$1;
(statearr_30333_30356[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (16))){
var inst_30293 = (state_30314[(8)]);
var inst_30299 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30293);
var state_30314__$1 = state_30314;
var statearr_30334_30357 = state_30314__$1;
(statearr_30334_30357[(2)] = inst_30299);

(statearr_30334_30357[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (10))){
var inst_30306 = (state_30314[(2)]);
var state_30314__$1 = (function (){var statearr_30335 = state_30314;
(statearr_30335[(12)] = inst_30306);

return statearr_30335;
})();
var statearr_30336_30358 = state_30314__$1;
(statearr_30336_30358[(2)] = null);

(statearr_30336_30358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (8))){
var inst_30286 = (state_30314[(11)]);
var inst_30288 = eval(inst_30286);
var state_30314__$1 = state_30314;
var statearr_30337_30359 = state_30314__$1;
(statearr_30337_30359[(2)] = inst_30288);

(statearr_30337_30359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26886__auto__))
;
return ((function (switch__26795__auto__,c__26886__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26796__auto__ = null;
var figwheel$client$file_reloading$state_machine__26796__auto____0 = (function (){
var statearr_30338 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30338[(0)] = figwheel$client$file_reloading$state_machine__26796__auto__);

(statearr_30338[(1)] = (1));

return statearr_30338;
});
var figwheel$client$file_reloading$state_machine__26796__auto____1 = (function (state_30314){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_30314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e30339){if((e30339 instanceof Object)){
var ex__26799__auto__ = e30339;
var statearr_30340_30360 = state_30314;
(statearr_30340_30360[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30361 = state_30314;
state_30314 = G__30361;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26796__auto__ = function(state_30314){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26796__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26796__auto____1.call(this,state_30314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26796__auto____0;
figwheel$client$file_reloading$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26796__auto____1;
return figwheel$client$file_reloading$state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto__))
})();
var state__26888__auto__ = (function (){var statearr_30341 = f__26887__auto__.call(null);
(statearr_30341[(6)] = c__26886__auto__);

return statearr_30341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto__))
);

return c__26886__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30363 = arguments.length;
switch (G__30363) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30365,callback){
var map__30366 = p__30365;
var map__30366__$1 = ((((!((map__30366 == null)))?(((((map__30366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30366):map__30366);
var file_msg = map__30366__$1;
var namespace = cljs.core.get.call(null,map__30366__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30366,map__30366__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30366,map__30366__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30368){
var map__30369 = p__30368;
var map__30369__$1 = ((((!((map__30369 == null)))?(((((map__30369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30369):map__30369);
var file_msg = map__30369__$1;
var namespace = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30371){
var map__30372 = p__30371;
var map__30372__$1 = ((((!((map__30372 == null)))?(((((map__30372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30372):map__30372);
var file_msg = map__30372__$1;
var namespace = cljs.core.get.call(null,map__30372__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30374,callback){
var map__30375 = p__30374;
var map__30375__$1 = ((((!((map__30375 == null)))?(((((map__30375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30375):map__30375);
var file_msg = map__30375__$1;
var request_url = cljs.core.get.call(null,map__30375__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30375__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26886__auto___30425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto___30425,out){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto___30425,out){
return (function (state_30410){
var state_val_30411 = (state_30410[(1)]);
if((state_val_30411 === (1))){
var inst_30384 = cljs.core.seq.call(null,files);
var inst_30385 = cljs.core.first.call(null,inst_30384);
var inst_30386 = cljs.core.next.call(null,inst_30384);
var inst_30387 = files;
var state_30410__$1 = (function (){var statearr_30412 = state_30410;
(statearr_30412[(7)] = inst_30387);

(statearr_30412[(8)] = inst_30385);

(statearr_30412[(9)] = inst_30386);

return statearr_30412;
})();
var statearr_30413_30426 = state_30410__$1;
(statearr_30413_30426[(2)] = null);

(statearr_30413_30426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30411 === (2))){
var inst_30387 = (state_30410[(7)]);
var inst_30393 = (state_30410[(10)]);
var inst_30392 = cljs.core.seq.call(null,inst_30387);
var inst_30393__$1 = cljs.core.first.call(null,inst_30392);
var inst_30394 = cljs.core.next.call(null,inst_30392);
var inst_30395 = (inst_30393__$1 == null);
var inst_30396 = cljs.core.not.call(null,inst_30395);
var state_30410__$1 = (function (){var statearr_30414 = state_30410;
(statearr_30414[(11)] = inst_30394);

(statearr_30414[(10)] = inst_30393__$1);

return statearr_30414;
})();
if(inst_30396){
var statearr_30415_30427 = state_30410__$1;
(statearr_30415_30427[(1)] = (4));

} else {
var statearr_30416_30428 = state_30410__$1;
(statearr_30416_30428[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30411 === (3))){
var inst_30408 = (state_30410[(2)]);
var state_30410__$1 = state_30410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30410__$1,inst_30408);
} else {
if((state_val_30411 === (4))){
var inst_30393 = (state_30410[(10)]);
var inst_30398 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30393);
var state_30410__$1 = state_30410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30410__$1,(7),inst_30398);
} else {
if((state_val_30411 === (5))){
var inst_30404 = cljs.core.async.close_BANG_.call(null,out);
var state_30410__$1 = state_30410;
var statearr_30417_30429 = state_30410__$1;
(statearr_30417_30429[(2)] = inst_30404);

(statearr_30417_30429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30411 === (6))){
var inst_30406 = (state_30410[(2)]);
var state_30410__$1 = state_30410;
var statearr_30418_30430 = state_30410__$1;
(statearr_30418_30430[(2)] = inst_30406);

(statearr_30418_30430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30411 === (7))){
var inst_30394 = (state_30410[(11)]);
var inst_30400 = (state_30410[(2)]);
var inst_30401 = cljs.core.async.put_BANG_.call(null,out,inst_30400);
var inst_30387 = inst_30394;
var state_30410__$1 = (function (){var statearr_30419 = state_30410;
(statearr_30419[(7)] = inst_30387);

(statearr_30419[(12)] = inst_30401);

return statearr_30419;
})();
var statearr_30420_30431 = state_30410__$1;
(statearr_30420_30431[(2)] = null);

(statearr_30420_30431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__26886__auto___30425,out))
;
return ((function (switch__26795__auto__,c__26886__auto___30425,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26796__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26796__auto____0 = (function (){
var statearr_30421 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30421[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26796__auto__);

(statearr_30421[(1)] = (1));

return statearr_30421;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26796__auto____1 = (function (state_30410){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_30410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e30422){if((e30422 instanceof Object)){
var ex__26799__auto__ = e30422;
var statearr_30423_30432 = state_30410;
(statearr_30423_30432[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30433 = state_30410;
state_30410 = G__30433;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26796__auto__ = function(state_30410){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26796__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26796__auto____1.call(this,state_30410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26796__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26796__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto___30425,out))
})();
var state__26888__auto__ = (function (){var statearr_30424 = f__26887__auto__.call(null);
(statearr_30424[(6)] = c__26886__auto___30425);

return statearr_30424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto___30425,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30434,opts){
var map__30435 = p__30434;
var map__30435__$1 = ((((!((map__30435 == null)))?(((((map__30435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30435):map__30435);
var eval_body = cljs.core.get.call(null,map__30435__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30435__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30437){var e = e30437;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5633__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30438_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30438_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5633__auto__)){
var file_msg = temp__5633__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30439){
var vec__30440 = p__30439;
var k = cljs.core.nth.call(null,vec__30440,(0),null);
var v = cljs.core.nth.call(null,vec__30440,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30443){
var vec__30444 = p__30443;
var k = cljs.core.nth.call(null,vec__30444,(0),null);
var v = cljs.core.nth.call(null,vec__30444,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30450,p__30451){
var map__30452 = p__30450;
var map__30452__$1 = ((((!((map__30452 == null)))?(((((map__30452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30452):map__30452);
var opts = map__30452__$1;
var before_jsload = cljs.core.get.call(null,map__30452__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30452__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30452__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30453 = p__30451;
var map__30453__$1 = ((((!((map__30453 == null)))?(((((map__30453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30453):map__30453);
var msg = map__30453__$1;
var files = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto__,map__30452,map__30452__$1,opts,before_jsload,on_jsload,reload_dependents,map__30453,map__30453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto__,map__30452,map__30452__$1,opts,before_jsload,on_jsload,reload_dependents,map__30453,map__30453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30607){
var state_val_30608 = (state_30607[(1)]);
if((state_val_30608 === (7))){
var inst_30467 = (state_30607[(7)]);
var inst_30468 = (state_30607[(8)]);
var inst_30470 = (state_30607[(9)]);
var inst_30469 = (state_30607[(10)]);
var inst_30475 = cljs.core._nth.call(null,inst_30468,inst_30470);
var inst_30476 = figwheel.client.file_reloading.eval_body.call(null,inst_30475,opts);
var inst_30477 = (inst_30470 + (1));
var tmp30609 = inst_30467;
var tmp30610 = inst_30468;
var tmp30611 = inst_30469;
var inst_30467__$1 = tmp30609;
var inst_30468__$1 = tmp30610;
var inst_30469__$1 = tmp30611;
var inst_30470__$1 = inst_30477;
var state_30607__$1 = (function (){var statearr_30612 = state_30607;
(statearr_30612[(7)] = inst_30467__$1);

(statearr_30612[(11)] = inst_30476);

(statearr_30612[(8)] = inst_30468__$1);

(statearr_30612[(9)] = inst_30470__$1);

(statearr_30612[(10)] = inst_30469__$1);

return statearr_30612;
})();
var statearr_30613_30696 = state_30607__$1;
(statearr_30613_30696[(2)] = null);

(statearr_30613_30696[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (20))){
var inst_30510 = (state_30607[(12)]);
var inst_30518 = figwheel.client.file_reloading.sort_files.call(null,inst_30510);
var state_30607__$1 = state_30607;
var statearr_30614_30697 = state_30607__$1;
(statearr_30614_30697[(2)] = inst_30518);

(statearr_30614_30697[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (27))){
var state_30607__$1 = state_30607;
var statearr_30615_30698 = state_30607__$1;
(statearr_30615_30698[(2)] = null);

(statearr_30615_30698[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (1))){
var inst_30459 = (state_30607[(13)]);
var inst_30456 = before_jsload.call(null,files);
var inst_30457 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30458 = (function (){return ((function (inst_30459,inst_30456,inst_30457,state_val_30608,c__26886__auto__,map__30452,map__30452__$1,opts,before_jsload,on_jsload,reload_dependents,map__30453,map__30453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30447_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30447_SHARP_);
});
;})(inst_30459,inst_30456,inst_30457,state_val_30608,c__26886__auto__,map__30452,map__30452__$1,opts,before_jsload,on_jsload,reload_dependents,map__30453,map__30453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30459__$1 = cljs.core.filter.call(null,inst_30458,files);
var inst_30460 = cljs.core.not_empty.call(null,inst_30459__$1);
var state_30607__$1 = (function (){var statearr_30616 = state_30607;
(statearr_30616[(13)] = inst_30459__$1);

(statearr_30616[(14)] = inst_30456);

(statearr_30616[(15)] = inst_30457);

return statearr_30616;
})();
if(cljs.core.truth_(inst_30460)){
var statearr_30617_30699 = state_30607__$1;
(statearr_30617_30699[(1)] = (2));

} else {
var statearr_30618_30700 = state_30607__$1;
(statearr_30618_30700[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (24))){
var state_30607__$1 = state_30607;
var statearr_30619_30701 = state_30607__$1;
(statearr_30619_30701[(2)] = null);

(statearr_30619_30701[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (39))){
var inst_30560 = (state_30607[(16)]);
var state_30607__$1 = state_30607;
var statearr_30620_30702 = state_30607__$1;
(statearr_30620_30702[(2)] = inst_30560);

(statearr_30620_30702[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (46))){
var inst_30602 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
var statearr_30621_30703 = state_30607__$1;
(statearr_30621_30703[(2)] = inst_30602);

(statearr_30621_30703[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (4))){
var inst_30504 = (state_30607[(2)]);
var inst_30505 = cljs.core.List.EMPTY;
var inst_30506 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30505);
var inst_30507 = (function (){return ((function (inst_30504,inst_30505,inst_30506,state_val_30608,c__26886__auto__,map__30452,map__30452__$1,opts,before_jsload,on_jsload,reload_dependents,map__30453,map__30453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30448_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30448_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30448_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30448_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_30504,inst_30505,inst_30506,state_val_30608,c__26886__auto__,map__30452,map__30452__$1,opts,before_jsload,on_jsload,reload_dependents,map__30453,map__30453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30508 = cljs.core.filter.call(null,inst_30507,files);
var inst_30509 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30510 = cljs.core.concat.call(null,inst_30508,inst_30509);
var state_30607__$1 = (function (){var statearr_30622 = state_30607;
(statearr_30622[(17)] = inst_30504);

(statearr_30622[(12)] = inst_30510);

(statearr_30622[(18)] = inst_30506);

return statearr_30622;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30623_30704 = state_30607__$1;
(statearr_30623_30704[(1)] = (16));

} else {
var statearr_30624_30705 = state_30607__$1;
(statearr_30624_30705[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (15))){
var inst_30494 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
var statearr_30625_30706 = state_30607__$1;
(statearr_30625_30706[(2)] = inst_30494);

(statearr_30625_30706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (21))){
var inst_30520 = (state_30607[(19)]);
var inst_30520__$1 = (state_30607[(2)]);
var inst_30521 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30520__$1);
var state_30607__$1 = (function (){var statearr_30626 = state_30607;
(statearr_30626[(19)] = inst_30520__$1);

return statearr_30626;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30607__$1,(22),inst_30521);
} else {
if((state_val_30608 === (31))){
var inst_30605 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30607__$1,inst_30605);
} else {
if((state_val_30608 === (32))){
var inst_30560 = (state_30607[(16)]);
var inst_30565 = inst_30560.cljs$lang$protocol_mask$partition0$;
var inst_30566 = (inst_30565 & (64));
var inst_30567 = inst_30560.cljs$core$ISeq$;
var inst_30568 = (cljs.core.PROTOCOL_SENTINEL === inst_30567);
var inst_30569 = ((inst_30566) || (inst_30568));
var state_30607__$1 = state_30607;
if(cljs.core.truth_(inst_30569)){
var statearr_30627_30707 = state_30607__$1;
(statearr_30627_30707[(1)] = (35));

} else {
var statearr_30628_30708 = state_30607__$1;
(statearr_30628_30708[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (40))){
var inst_30582 = (state_30607[(20)]);
var inst_30581 = (state_30607[(2)]);
var inst_30582__$1 = cljs.core.get.call(null,inst_30581,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30583 = cljs.core.get.call(null,inst_30581,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30584 = cljs.core.not_empty.call(null,inst_30582__$1);
var state_30607__$1 = (function (){var statearr_30629 = state_30607;
(statearr_30629[(21)] = inst_30583);

(statearr_30629[(20)] = inst_30582__$1);

return statearr_30629;
})();
if(cljs.core.truth_(inst_30584)){
var statearr_30630_30709 = state_30607__$1;
(statearr_30630_30709[(1)] = (41));

} else {
var statearr_30631_30710 = state_30607__$1;
(statearr_30631_30710[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (33))){
var state_30607__$1 = state_30607;
var statearr_30632_30711 = state_30607__$1;
(statearr_30632_30711[(2)] = false);

(statearr_30632_30711[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (13))){
var inst_30480 = (state_30607[(22)]);
var inst_30484 = cljs.core.chunk_first.call(null,inst_30480);
var inst_30485 = cljs.core.chunk_rest.call(null,inst_30480);
var inst_30486 = cljs.core.count.call(null,inst_30484);
var inst_30467 = inst_30485;
var inst_30468 = inst_30484;
var inst_30469 = inst_30486;
var inst_30470 = (0);
var state_30607__$1 = (function (){var statearr_30633 = state_30607;
(statearr_30633[(7)] = inst_30467);

(statearr_30633[(8)] = inst_30468);

(statearr_30633[(9)] = inst_30470);

(statearr_30633[(10)] = inst_30469);

return statearr_30633;
})();
var statearr_30634_30712 = state_30607__$1;
(statearr_30634_30712[(2)] = null);

(statearr_30634_30712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (22))){
var inst_30528 = (state_30607[(23)]);
var inst_30523 = (state_30607[(24)]);
var inst_30524 = (state_30607[(25)]);
var inst_30520 = (state_30607[(19)]);
var inst_30523__$1 = (state_30607[(2)]);
var inst_30524__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30523__$1);
var inst_30525 = (function (){var all_files = inst_30520;
var res_SINGLEQUOTE_ = inst_30523__$1;
var res = inst_30524__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30528,inst_30523,inst_30524,inst_30520,inst_30523__$1,inst_30524__$1,state_val_30608,c__26886__auto__,map__30452,map__30452__$1,opts,before_jsload,on_jsload,reload_dependents,map__30453,map__30453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30449_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30449_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30528,inst_30523,inst_30524,inst_30520,inst_30523__$1,inst_30524__$1,state_val_30608,c__26886__auto__,map__30452,map__30452__$1,opts,before_jsload,on_jsload,reload_dependents,map__30453,map__30453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30526 = cljs.core.filter.call(null,inst_30525,inst_30523__$1);
var inst_30527 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30528__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30527);
var inst_30529 = cljs.core.not_empty.call(null,inst_30528__$1);
var state_30607__$1 = (function (){var statearr_30635 = state_30607;
(statearr_30635[(23)] = inst_30528__$1);

(statearr_30635[(26)] = inst_30526);

(statearr_30635[(24)] = inst_30523__$1);

(statearr_30635[(25)] = inst_30524__$1);

return statearr_30635;
})();
if(cljs.core.truth_(inst_30529)){
var statearr_30636_30713 = state_30607__$1;
(statearr_30636_30713[(1)] = (23));

} else {
var statearr_30637_30714 = state_30607__$1;
(statearr_30637_30714[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (36))){
var state_30607__$1 = state_30607;
var statearr_30638_30715 = state_30607__$1;
(statearr_30638_30715[(2)] = false);

(statearr_30638_30715[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (41))){
var inst_30582 = (state_30607[(20)]);
var inst_30586 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30587 = cljs.core.map.call(null,inst_30586,inst_30582);
var inst_30588 = cljs.core.pr_str.call(null,inst_30587);
var inst_30589 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30588)].join('');
var inst_30590 = figwheel.client.utils.log.call(null,inst_30589);
var state_30607__$1 = state_30607;
var statearr_30639_30716 = state_30607__$1;
(statearr_30639_30716[(2)] = inst_30590);

(statearr_30639_30716[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (43))){
var inst_30583 = (state_30607[(21)]);
var inst_30593 = (state_30607[(2)]);
var inst_30594 = cljs.core.not_empty.call(null,inst_30583);
var state_30607__$1 = (function (){var statearr_30640 = state_30607;
(statearr_30640[(27)] = inst_30593);

return statearr_30640;
})();
if(cljs.core.truth_(inst_30594)){
var statearr_30641_30717 = state_30607__$1;
(statearr_30641_30717[(1)] = (44));

} else {
var statearr_30642_30718 = state_30607__$1;
(statearr_30642_30718[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (29))){
var inst_30528 = (state_30607[(23)]);
var inst_30526 = (state_30607[(26)]);
var inst_30523 = (state_30607[(24)]);
var inst_30524 = (state_30607[(25)]);
var inst_30520 = (state_30607[(19)]);
var inst_30560 = (state_30607[(16)]);
var inst_30556 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30559 = (function (){var all_files = inst_30520;
var res_SINGLEQUOTE_ = inst_30523;
var res = inst_30524;
var files_not_loaded = inst_30526;
var dependencies_that_loaded = inst_30528;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30528,inst_30526,inst_30523,inst_30524,inst_30520,inst_30560,inst_30556,state_val_30608,c__26886__auto__,map__30452,map__30452__$1,opts,before_jsload,on_jsload,reload_dependents,map__30453,map__30453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30558){
var map__30643 = p__30558;
var map__30643__$1 = ((((!((map__30643 == null)))?(((((map__30643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30643):map__30643);
var namespace = cljs.core.get.call(null,map__30643__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30528,inst_30526,inst_30523,inst_30524,inst_30520,inst_30560,inst_30556,state_val_30608,c__26886__auto__,map__30452,map__30452__$1,opts,before_jsload,on_jsload,reload_dependents,map__30453,map__30453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30560__$1 = cljs.core.group_by.call(null,inst_30559,inst_30526);
var inst_30562 = (inst_30560__$1 == null);
var inst_30563 = cljs.core.not.call(null,inst_30562);
var state_30607__$1 = (function (){var statearr_30645 = state_30607;
(statearr_30645[(28)] = inst_30556);

(statearr_30645[(16)] = inst_30560__$1);

return statearr_30645;
})();
if(inst_30563){
var statearr_30646_30719 = state_30607__$1;
(statearr_30646_30719[(1)] = (32));

} else {
var statearr_30647_30720 = state_30607__$1;
(statearr_30647_30720[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (44))){
var inst_30583 = (state_30607[(21)]);
var inst_30596 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30583);
var inst_30597 = cljs.core.pr_str.call(null,inst_30596);
var inst_30598 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30597)].join('');
var inst_30599 = figwheel.client.utils.log.call(null,inst_30598);
var state_30607__$1 = state_30607;
var statearr_30648_30721 = state_30607__$1;
(statearr_30648_30721[(2)] = inst_30599);

(statearr_30648_30721[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (6))){
var inst_30501 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
var statearr_30649_30722 = state_30607__$1;
(statearr_30649_30722[(2)] = inst_30501);

(statearr_30649_30722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (28))){
var inst_30526 = (state_30607[(26)]);
var inst_30553 = (state_30607[(2)]);
var inst_30554 = cljs.core.not_empty.call(null,inst_30526);
var state_30607__$1 = (function (){var statearr_30650 = state_30607;
(statearr_30650[(29)] = inst_30553);

return statearr_30650;
})();
if(cljs.core.truth_(inst_30554)){
var statearr_30651_30723 = state_30607__$1;
(statearr_30651_30723[(1)] = (29));

} else {
var statearr_30652_30724 = state_30607__$1;
(statearr_30652_30724[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (25))){
var inst_30524 = (state_30607[(25)]);
var inst_30540 = (state_30607[(2)]);
var inst_30541 = cljs.core.not_empty.call(null,inst_30524);
var state_30607__$1 = (function (){var statearr_30653 = state_30607;
(statearr_30653[(30)] = inst_30540);

return statearr_30653;
})();
if(cljs.core.truth_(inst_30541)){
var statearr_30654_30725 = state_30607__$1;
(statearr_30654_30725[(1)] = (26));

} else {
var statearr_30655_30726 = state_30607__$1;
(statearr_30655_30726[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (34))){
var inst_30576 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
if(cljs.core.truth_(inst_30576)){
var statearr_30656_30727 = state_30607__$1;
(statearr_30656_30727[(1)] = (38));

} else {
var statearr_30657_30728 = state_30607__$1;
(statearr_30657_30728[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (17))){
var state_30607__$1 = state_30607;
var statearr_30658_30729 = state_30607__$1;
(statearr_30658_30729[(2)] = recompile_dependents);

(statearr_30658_30729[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (3))){
var state_30607__$1 = state_30607;
var statearr_30659_30730 = state_30607__$1;
(statearr_30659_30730[(2)] = null);

(statearr_30659_30730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (12))){
var inst_30497 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
var statearr_30660_30731 = state_30607__$1;
(statearr_30660_30731[(2)] = inst_30497);

(statearr_30660_30731[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (2))){
var inst_30459 = (state_30607[(13)]);
var inst_30466 = cljs.core.seq.call(null,inst_30459);
var inst_30467 = inst_30466;
var inst_30468 = null;
var inst_30469 = (0);
var inst_30470 = (0);
var state_30607__$1 = (function (){var statearr_30661 = state_30607;
(statearr_30661[(7)] = inst_30467);

(statearr_30661[(8)] = inst_30468);

(statearr_30661[(9)] = inst_30470);

(statearr_30661[(10)] = inst_30469);

return statearr_30661;
})();
var statearr_30662_30732 = state_30607__$1;
(statearr_30662_30732[(2)] = null);

(statearr_30662_30732[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (23))){
var inst_30528 = (state_30607[(23)]);
var inst_30526 = (state_30607[(26)]);
var inst_30523 = (state_30607[(24)]);
var inst_30524 = (state_30607[(25)]);
var inst_30520 = (state_30607[(19)]);
var inst_30531 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30533 = (function (){var all_files = inst_30520;
var res_SINGLEQUOTE_ = inst_30523;
var res = inst_30524;
var files_not_loaded = inst_30526;
var dependencies_that_loaded = inst_30528;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30528,inst_30526,inst_30523,inst_30524,inst_30520,inst_30531,state_val_30608,c__26886__auto__,map__30452,map__30452__$1,opts,before_jsload,on_jsload,reload_dependents,map__30453,map__30453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30532){
var map__30663 = p__30532;
var map__30663__$1 = ((((!((map__30663 == null)))?(((((map__30663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30663):map__30663);
var request_url = cljs.core.get.call(null,map__30663__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30528,inst_30526,inst_30523,inst_30524,inst_30520,inst_30531,state_val_30608,c__26886__auto__,map__30452,map__30452__$1,opts,before_jsload,on_jsload,reload_dependents,map__30453,map__30453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30534 = cljs.core.reverse.call(null,inst_30528);
var inst_30535 = cljs.core.map.call(null,inst_30533,inst_30534);
var inst_30536 = cljs.core.pr_str.call(null,inst_30535);
var inst_30537 = figwheel.client.utils.log.call(null,inst_30536);
var state_30607__$1 = (function (){var statearr_30665 = state_30607;
(statearr_30665[(31)] = inst_30531);

return statearr_30665;
})();
var statearr_30666_30733 = state_30607__$1;
(statearr_30666_30733[(2)] = inst_30537);

(statearr_30666_30733[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (35))){
var state_30607__$1 = state_30607;
var statearr_30667_30734 = state_30607__$1;
(statearr_30667_30734[(2)] = true);

(statearr_30667_30734[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (19))){
var inst_30510 = (state_30607[(12)]);
var inst_30516 = figwheel.client.file_reloading.expand_files.call(null,inst_30510);
var state_30607__$1 = state_30607;
var statearr_30668_30735 = state_30607__$1;
(statearr_30668_30735[(2)] = inst_30516);

(statearr_30668_30735[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (11))){
var state_30607__$1 = state_30607;
var statearr_30669_30736 = state_30607__$1;
(statearr_30669_30736[(2)] = null);

(statearr_30669_30736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (9))){
var inst_30499 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
var statearr_30670_30737 = state_30607__$1;
(statearr_30670_30737[(2)] = inst_30499);

(statearr_30670_30737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (5))){
var inst_30470 = (state_30607[(9)]);
var inst_30469 = (state_30607[(10)]);
var inst_30472 = (inst_30470 < inst_30469);
var inst_30473 = inst_30472;
var state_30607__$1 = state_30607;
if(cljs.core.truth_(inst_30473)){
var statearr_30671_30738 = state_30607__$1;
(statearr_30671_30738[(1)] = (7));

} else {
var statearr_30672_30739 = state_30607__$1;
(statearr_30672_30739[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (14))){
var inst_30480 = (state_30607[(22)]);
var inst_30489 = cljs.core.first.call(null,inst_30480);
var inst_30490 = figwheel.client.file_reloading.eval_body.call(null,inst_30489,opts);
var inst_30491 = cljs.core.next.call(null,inst_30480);
var inst_30467 = inst_30491;
var inst_30468 = null;
var inst_30469 = (0);
var inst_30470 = (0);
var state_30607__$1 = (function (){var statearr_30673 = state_30607;
(statearr_30673[(7)] = inst_30467);

(statearr_30673[(32)] = inst_30490);

(statearr_30673[(8)] = inst_30468);

(statearr_30673[(9)] = inst_30470);

(statearr_30673[(10)] = inst_30469);

return statearr_30673;
})();
var statearr_30674_30740 = state_30607__$1;
(statearr_30674_30740[(2)] = null);

(statearr_30674_30740[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (45))){
var state_30607__$1 = state_30607;
var statearr_30675_30741 = state_30607__$1;
(statearr_30675_30741[(2)] = null);

(statearr_30675_30741[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (26))){
var inst_30528 = (state_30607[(23)]);
var inst_30526 = (state_30607[(26)]);
var inst_30523 = (state_30607[(24)]);
var inst_30524 = (state_30607[(25)]);
var inst_30520 = (state_30607[(19)]);
var inst_30543 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30545 = (function (){var all_files = inst_30520;
var res_SINGLEQUOTE_ = inst_30523;
var res = inst_30524;
var files_not_loaded = inst_30526;
var dependencies_that_loaded = inst_30528;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30528,inst_30526,inst_30523,inst_30524,inst_30520,inst_30543,state_val_30608,c__26886__auto__,map__30452,map__30452__$1,opts,before_jsload,on_jsload,reload_dependents,map__30453,map__30453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30544){
var map__30676 = p__30544;
var map__30676__$1 = ((((!((map__30676 == null)))?(((((map__30676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30676):map__30676);
var namespace = cljs.core.get.call(null,map__30676__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30676__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30528,inst_30526,inst_30523,inst_30524,inst_30520,inst_30543,state_val_30608,c__26886__auto__,map__30452,map__30452__$1,opts,before_jsload,on_jsload,reload_dependents,map__30453,map__30453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30546 = cljs.core.map.call(null,inst_30545,inst_30524);
var inst_30547 = cljs.core.pr_str.call(null,inst_30546);
var inst_30548 = figwheel.client.utils.log.call(null,inst_30547);
var inst_30549 = (function (){var all_files = inst_30520;
var res_SINGLEQUOTE_ = inst_30523;
var res = inst_30524;
var files_not_loaded = inst_30526;
var dependencies_that_loaded = inst_30528;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30528,inst_30526,inst_30523,inst_30524,inst_30520,inst_30543,inst_30545,inst_30546,inst_30547,inst_30548,state_val_30608,c__26886__auto__,map__30452,map__30452__$1,opts,before_jsload,on_jsload,reload_dependents,map__30453,map__30453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30528,inst_30526,inst_30523,inst_30524,inst_30520,inst_30543,inst_30545,inst_30546,inst_30547,inst_30548,state_val_30608,c__26886__auto__,map__30452,map__30452__$1,opts,before_jsload,on_jsload,reload_dependents,map__30453,map__30453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30550 = setTimeout(inst_30549,(10));
var state_30607__$1 = (function (){var statearr_30678 = state_30607;
(statearr_30678[(33)] = inst_30548);

(statearr_30678[(34)] = inst_30543);

return statearr_30678;
})();
var statearr_30679_30742 = state_30607__$1;
(statearr_30679_30742[(2)] = inst_30550);

(statearr_30679_30742[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (16))){
var state_30607__$1 = state_30607;
var statearr_30680_30743 = state_30607__$1;
(statearr_30680_30743[(2)] = reload_dependents);

(statearr_30680_30743[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (38))){
var inst_30560 = (state_30607[(16)]);
var inst_30578 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30560);
var state_30607__$1 = state_30607;
var statearr_30681_30744 = state_30607__$1;
(statearr_30681_30744[(2)] = inst_30578);

(statearr_30681_30744[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (30))){
var state_30607__$1 = state_30607;
var statearr_30682_30745 = state_30607__$1;
(statearr_30682_30745[(2)] = null);

(statearr_30682_30745[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (10))){
var inst_30480 = (state_30607[(22)]);
var inst_30482 = cljs.core.chunked_seq_QMARK_.call(null,inst_30480);
var state_30607__$1 = state_30607;
if(inst_30482){
var statearr_30683_30746 = state_30607__$1;
(statearr_30683_30746[(1)] = (13));

} else {
var statearr_30684_30747 = state_30607__$1;
(statearr_30684_30747[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (18))){
var inst_30514 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
if(cljs.core.truth_(inst_30514)){
var statearr_30685_30748 = state_30607__$1;
(statearr_30685_30748[(1)] = (19));

} else {
var statearr_30686_30749 = state_30607__$1;
(statearr_30686_30749[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (42))){
var state_30607__$1 = state_30607;
var statearr_30687_30750 = state_30607__$1;
(statearr_30687_30750[(2)] = null);

(statearr_30687_30750[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (37))){
var inst_30573 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
var statearr_30688_30751 = state_30607__$1;
(statearr_30688_30751[(2)] = inst_30573);

(statearr_30688_30751[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (8))){
var inst_30467 = (state_30607[(7)]);
var inst_30480 = (state_30607[(22)]);
var inst_30480__$1 = cljs.core.seq.call(null,inst_30467);
var state_30607__$1 = (function (){var statearr_30689 = state_30607;
(statearr_30689[(22)] = inst_30480__$1);

return statearr_30689;
})();
if(inst_30480__$1){
var statearr_30690_30752 = state_30607__$1;
(statearr_30690_30752[(1)] = (10));

} else {
var statearr_30691_30753 = state_30607__$1;
(statearr_30691_30753[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26886__auto__,map__30452,map__30452__$1,opts,before_jsload,on_jsload,reload_dependents,map__30453,map__30453__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26795__auto__,c__26886__auto__,map__30452,map__30452__$1,opts,before_jsload,on_jsload,reload_dependents,map__30453,map__30453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26796__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26796__auto____0 = (function (){
var statearr_30692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30692[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26796__auto__);

(statearr_30692[(1)] = (1));

return statearr_30692;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26796__auto____1 = (function (state_30607){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_30607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e30693){if((e30693 instanceof Object)){
var ex__26799__auto__ = e30693;
var statearr_30694_30754 = state_30607;
(statearr_30694_30754[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30755 = state_30607;
state_30607 = G__30755;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26796__auto__ = function(state_30607){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26796__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26796__auto____1.call(this,state_30607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26796__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26796__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto__,map__30452,map__30452__$1,opts,before_jsload,on_jsload,reload_dependents,map__30453,map__30453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26888__auto__ = (function (){var statearr_30695 = f__26887__auto__.call(null);
(statearr_30695[(6)] = c__26886__auto__);

return statearr_30695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto__,map__30452,map__30452__$1,opts,before_jsload,on_jsload,reload_dependents,map__30453,map__30453__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26886__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30758,link){
var map__30759 = p__30758;
var map__30759__$1 = ((((!((map__30759 == null)))?(((((map__30759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30759):map__30759);
var file = cljs.core.get.call(null,map__30759__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5635__auto__ = link.href;
if(cljs.core.truth_(temp__5635__auto__)){
var link_href = temp__5635__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5635__auto__,map__30759,map__30759__$1,file){
return (function (p1__30756_SHARP_,p2__30757_SHARP_){
if(cljs.core._EQ_.call(null,p1__30756_SHARP_,p2__30757_SHARP_)){
return p1__30756_SHARP_;
} else {
return false;
}
});})(link_href,temp__5635__auto__,map__30759,map__30759__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5635__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30762){
var map__30763 = p__30762;
var map__30763__$1 = ((((!((map__30763 == null)))?(((((map__30763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30763):map__30763);
var match_length = cljs.core.get.call(null,map__30763__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30763__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30761_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30761_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5635__auto__)){
var res = temp__5635__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30765_SHARP_,p2__30766_SHARP_){
return cljs.core.assoc.call(null,p1__30765_SHARP_,cljs.core.get.call(null,p2__30766_SHARP_,key),p2__30766_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5633__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5633__auto__)){
var link = temp__5633__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5633__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5633__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30767 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30767);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30767);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30768,p__30769){
var map__30770 = p__30768;
var map__30770__$1 = ((((!((map__30770 == null)))?(((((map__30770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30770):map__30770);
var on_cssload = cljs.core.get.call(null,map__30770__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30771 = p__30769;
var map__30771__$1 = ((((!((map__30771 == null)))?(((((map__30771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30771):map__30771);
var files_msg = map__30771__$1;
var files = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5635__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5635__auto__)){
var f_datas = temp__5635__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1539578345314
