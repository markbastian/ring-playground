// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e31860){if((e31860 instanceof Error)){
var e = e31860;
return "Error: Unable to stringify";
} else {
throw e31860;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31863 = arguments.length;
switch (G__31863) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31861_SHARP_){
if(typeof p1__31861_SHARP_ === 'string'){
return p1__31861_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31861_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31866 = arguments.length;
var i__4532__auto___31867 = (0);
while(true){
if((i__4532__auto___31867 < len__4531__auto___31866)){
args__4534__auto__.push((arguments[i__4532__auto___31867]));

var G__31868 = (i__4532__auto___31867 + (1));
i__4532__auto___31867 = G__31868;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31865){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31865));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31870 = arguments.length;
var i__4532__auto___31871 = (0);
while(true){
if((i__4532__auto___31871 < len__4531__auto___31870)){
args__4534__auto__.push((arguments[i__4532__auto___31871]));

var G__31872 = (i__4532__auto___31871 + (1));
i__4532__auto___31871 = G__31872;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31869){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31869));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31873){
var map__31874 = p__31873;
var map__31874__$1 = ((((!((map__31874 == null)))?(((((map__31874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31874):map__31874);
var message = cljs.core.get.call(null,map__31874__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31874__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26886__auto___31953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto___31953,ch){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto___31953,ch){
return (function (state_31925){
var state_val_31926 = (state_31925[(1)]);
if((state_val_31926 === (7))){
var inst_31921 = (state_31925[(2)]);
var state_31925__$1 = state_31925;
var statearr_31927_31954 = state_31925__$1;
(statearr_31927_31954[(2)] = inst_31921);

(statearr_31927_31954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (1))){
var state_31925__$1 = state_31925;
var statearr_31928_31955 = state_31925__$1;
(statearr_31928_31955[(2)] = null);

(statearr_31928_31955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (4))){
var inst_31878 = (state_31925[(7)]);
var inst_31878__$1 = (state_31925[(2)]);
var state_31925__$1 = (function (){var statearr_31929 = state_31925;
(statearr_31929[(7)] = inst_31878__$1);

return statearr_31929;
})();
if(cljs.core.truth_(inst_31878__$1)){
var statearr_31930_31956 = state_31925__$1;
(statearr_31930_31956[(1)] = (5));

} else {
var statearr_31931_31957 = state_31925__$1;
(statearr_31931_31957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (15))){
var inst_31885 = (state_31925[(8)]);
var inst_31900 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31885);
var inst_31901 = cljs.core.first.call(null,inst_31900);
var inst_31902 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31901);
var inst_31903 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31902)].join('');
var inst_31904 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31903);
var state_31925__$1 = state_31925;
var statearr_31932_31958 = state_31925__$1;
(statearr_31932_31958[(2)] = inst_31904);

(statearr_31932_31958[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (13))){
var inst_31909 = (state_31925[(2)]);
var state_31925__$1 = state_31925;
var statearr_31933_31959 = state_31925__$1;
(statearr_31933_31959[(2)] = inst_31909);

(statearr_31933_31959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (6))){
var state_31925__$1 = state_31925;
var statearr_31934_31960 = state_31925__$1;
(statearr_31934_31960[(2)] = null);

(statearr_31934_31960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (17))){
var inst_31907 = (state_31925[(2)]);
var state_31925__$1 = state_31925;
var statearr_31935_31961 = state_31925__$1;
(statearr_31935_31961[(2)] = inst_31907);

(statearr_31935_31961[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (3))){
var inst_31923 = (state_31925[(2)]);
var state_31925__$1 = state_31925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31925__$1,inst_31923);
} else {
if((state_val_31926 === (12))){
var inst_31884 = (state_31925[(9)]);
var inst_31898 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31884,opts);
var state_31925__$1 = state_31925;
if(cljs.core.truth_(inst_31898)){
var statearr_31936_31962 = state_31925__$1;
(statearr_31936_31962[(1)] = (15));

} else {
var statearr_31937_31963 = state_31925__$1;
(statearr_31937_31963[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (2))){
var state_31925__$1 = state_31925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31925__$1,(4),ch);
} else {
if((state_val_31926 === (11))){
var inst_31885 = (state_31925[(8)]);
var inst_31890 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31891 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31885);
var inst_31892 = cljs.core.async.timeout.call(null,(1000));
var inst_31893 = [inst_31891,inst_31892];
var inst_31894 = (new cljs.core.PersistentVector(null,2,(5),inst_31890,inst_31893,null));
var state_31925__$1 = state_31925;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31925__$1,(14),inst_31894);
} else {
if((state_val_31926 === (9))){
var inst_31885 = (state_31925[(8)]);
var inst_31911 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31912 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31885);
var inst_31913 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31912);
var inst_31914 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31913)].join('');
var inst_31915 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31914);
var state_31925__$1 = (function (){var statearr_31938 = state_31925;
(statearr_31938[(10)] = inst_31911);

return statearr_31938;
})();
var statearr_31939_31964 = state_31925__$1;
(statearr_31939_31964[(2)] = inst_31915);

(statearr_31939_31964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (5))){
var inst_31878 = (state_31925[(7)]);
var inst_31880 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31881 = (new cljs.core.PersistentArrayMap(null,2,inst_31880,null));
var inst_31882 = (new cljs.core.PersistentHashSet(null,inst_31881,null));
var inst_31883 = figwheel.client.focus_msgs.call(null,inst_31882,inst_31878);
var inst_31884 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31883);
var inst_31885 = cljs.core.first.call(null,inst_31883);
var inst_31886 = figwheel.client.autoload_QMARK_.call(null);
var state_31925__$1 = (function (){var statearr_31940 = state_31925;
(statearr_31940[(8)] = inst_31885);

(statearr_31940[(9)] = inst_31884);

return statearr_31940;
})();
if(cljs.core.truth_(inst_31886)){
var statearr_31941_31965 = state_31925__$1;
(statearr_31941_31965[(1)] = (8));

} else {
var statearr_31942_31966 = state_31925__$1;
(statearr_31942_31966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (14))){
var inst_31896 = (state_31925[(2)]);
var state_31925__$1 = state_31925;
var statearr_31943_31967 = state_31925__$1;
(statearr_31943_31967[(2)] = inst_31896);

(statearr_31943_31967[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (16))){
var state_31925__$1 = state_31925;
var statearr_31944_31968 = state_31925__$1;
(statearr_31944_31968[(2)] = null);

(statearr_31944_31968[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (10))){
var inst_31917 = (state_31925[(2)]);
var state_31925__$1 = (function (){var statearr_31945 = state_31925;
(statearr_31945[(11)] = inst_31917);

return statearr_31945;
})();
var statearr_31946_31969 = state_31925__$1;
(statearr_31946_31969[(2)] = null);

(statearr_31946_31969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (8))){
var inst_31884 = (state_31925[(9)]);
var inst_31888 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31884,opts);
var state_31925__$1 = state_31925;
if(cljs.core.truth_(inst_31888)){
var statearr_31947_31970 = state_31925__$1;
(statearr_31947_31970[(1)] = (11));

} else {
var statearr_31948_31971 = state_31925__$1;
(statearr_31948_31971[(1)] = (12));

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
});})(c__26886__auto___31953,ch))
;
return ((function (switch__26795__auto__,c__26886__auto___31953,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26796__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26796__auto____0 = (function (){
var statearr_31949 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31949[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26796__auto__);

(statearr_31949[(1)] = (1));

return statearr_31949;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26796__auto____1 = (function (state_31925){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_31925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e31950){if((e31950 instanceof Object)){
var ex__26799__auto__ = e31950;
var statearr_31951_31972 = state_31925;
(statearr_31951_31972[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31973 = state_31925;
state_31925 = G__31973;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26796__auto__ = function(state_31925){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26796__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26796__auto____1.call(this,state_31925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26796__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26796__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto___31953,ch))
})();
var state__26888__auto__ = (function (){var statearr_31952 = f__26887__auto__.call(null);
(statearr_31952[(6)] = c__26886__auto___31953);

return statearr_31952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto___31953,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31974_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31974_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31978 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31978){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31976 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31977 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31976,_STAR_print_fn_STAR_31977,sb,base_path_31978){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_31976,_STAR_print_fn_STAR_31977,sb,base_path_31978))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31977;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31976;
}}catch (e31975){if((e31975 instanceof Error)){
var e = e31975;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31978], null));
} else {
var e = e31975;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31978))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31979){
var map__31980 = p__31979;
var map__31980__$1 = ((((!((map__31980 == null)))?(((((map__31980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31980):map__31980);
var opts = map__31980__$1;
var build_id = cljs.core.get.call(null,map__31980__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31980,map__31980__$1,opts,build_id){
return (function (p__31982){
var vec__31983 = p__31982;
var seq__31984 = cljs.core.seq.call(null,vec__31983);
var first__31985 = cljs.core.first.call(null,seq__31984);
var seq__31984__$1 = cljs.core.next.call(null,seq__31984);
var map__31986 = first__31985;
var map__31986__$1 = ((((!((map__31986 == null)))?(((((map__31986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31986):map__31986);
var msg = map__31986__$1;
var msg_name = cljs.core.get.call(null,map__31986__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31984__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31983,seq__31984,first__31985,seq__31984__$1,map__31986,map__31986__$1,msg,msg_name,_,map__31980,map__31980__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31983,seq__31984,first__31985,seq__31984__$1,map__31986,map__31986__$1,msg,msg_name,_,map__31980,map__31980__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31980,map__31980__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31988){
var vec__31989 = p__31988;
var seq__31990 = cljs.core.seq.call(null,vec__31989);
var first__31991 = cljs.core.first.call(null,seq__31990);
var seq__31990__$1 = cljs.core.next.call(null,seq__31990);
var map__31992 = first__31991;
var map__31992__$1 = ((((!((map__31992 == null)))?(((((map__31992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31992):map__31992);
var msg = map__31992__$1;
var msg_name = cljs.core.get.call(null,map__31992__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31990__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31994){
var map__31995 = p__31994;
var map__31995__$1 = ((((!((map__31995 == null)))?(((((map__31995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31995):map__31995);
var on_compile_warning = cljs.core.get.call(null,map__31995__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31995__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31995,map__31995__$1,on_compile_warning,on_compile_fail){
return (function (p__31997){
var vec__31998 = p__31997;
var seq__31999 = cljs.core.seq.call(null,vec__31998);
var first__32000 = cljs.core.first.call(null,seq__31999);
var seq__31999__$1 = cljs.core.next.call(null,seq__31999);
var map__32001 = first__32000;
var map__32001__$1 = ((((!((map__32001 == null)))?(((((map__32001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32001):map__32001);
var msg = map__32001__$1;
var msg_name = cljs.core.get.call(null,map__32001__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31999__$1;
var pred__32003 = cljs.core._EQ_;
var expr__32004 = msg_name;
if(cljs.core.truth_(pred__32003.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32004))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32003.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32004))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31995,map__31995__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto__,msg_hist,msg_names,msg){
return (function (state_32093){
var state_val_32094 = (state_32093[(1)]);
if((state_val_32094 === (7))){
var inst_32013 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
if(cljs.core.truth_(inst_32013)){
var statearr_32095_32142 = state_32093__$1;
(statearr_32095_32142[(1)] = (8));

} else {
var statearr_32096_32143 = state_32093__$1;
(statearr_32096_32143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (20))){
var inst_32087 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
var statearr_32097_32144 = state_32093__$1;
(statearr_32097_32144[(2)] = inst_32087);

(statearr_32097_32144[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (27))){
var inst_32083 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
var statearr_32098_32145 = state_32093__$1;
(statearr_32098_32145[(2)] = inst_32083);

(statearr_32098_32145[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (1))){
var inst_32006 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32093__$1 = state_32093;
if(cljs.core.truth_(inst_32006)){
var statearr_32099_32146 = state_32093__$1;
(statearr_32099_32146[(1)] = (2));

} else {
var statearr_32100_32147 = state_32093__$1;
(statearr_32100_32147[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (24))){
var inst_32085 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
var statearr_32101_32148 = state_32093__$1;
(statearr_32101_32148[(2)] = inst_32085);

(statearr_32101_32148[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (4))){
var inst_32091 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32093__$1,inst_32091);
} else {
if((state_val_32094 === (15))){
var inst_32089 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
var statearr_32102_32149 = state_32093__$1;
(statearr_32102_32149[(2)] = inst_32089);

(statearr_32102_32149[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (21))){
var inst_32042 = (state_32093[(2)]);
var inst_32043 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32044 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32043);
var state_32093__$1 = (function (){var statearr_32103 = state_32093;
(statearr_32103[(7)] = inst_32042);

return statearr_32103;
})();
var statearr_32104_32150 = state_32093__$1;
(statearr_32104_32150[(2)] = inst_32044);

(statearr_32104_32150[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (31))){
var inst_32072 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32093__$1 = state_32093;
if(cljs.core.truth_(inst_32072)){
var statearr_32105_32151 = state_32093__$1;
(statearr_32105_32151[(1)] = (34));

} else {
var statearr_32106_32152 = state_32093__$1;
(statearr_32106_32152[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (32))){
var inst_32081 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
var statearr_32107_32153 = state_32093__$1;
(statearr_32107_32153[(2)] = inst_32081);

(statearr_32107_32153[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (33))){
var inst_32068 = (state_32093[(2)]);
var inst_32069 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32070 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32069);
var state_32093__$1 = (function (){var statearr_32108 = state_32093;
(statearr_32108[(8)] = inst_32068);

return statearr_32108;
})();
var statearr_32109_32154 = state_32093__$1;
(statearr_32109_32154[(2)] = inst_32070);

(statearr_32109_32154[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (13))){
var inst_32027 = figwheel.client.heads_up.clear.call(null);
var state_32093__$1 = state_32093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32093__$1,(16),inst_32027);
} else {
if((state_val_32094 === (22))){
var inst_32048 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32049 = figwheel.client.heads_up.append_warning_message.call(null,inst_32048);
var state_32093__$1 = state_32093;
var statearr_32110_32155 = state_32093__$1;
(statearr_32110_32155[(2)] = inst_32049);

(statearr_32110_32155[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (36))){
var inst_32079 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
var statearr_32111_32156 = state_32093__$1;
(statearr_32111_32156[(2)] = inst_32079);

(statearr_32111_32156[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (29))){
var inst_32059 = (state_32093[(2)]);
var inst_32060 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32061 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32060);
var state_32093__$1 = (function (){var statearr_32112 = state_32093;
(statearr_32112[(9)] = inst_32059);

return statearr_32112;
})();
var statearr_32113_32157 = state_32093__$1;
(statearr_32113_32157[(2)] = inst_32061);

(statearr_32113_32157[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (6))){
var inst_32008 = (state_32093[(10)]);
var state_32093__$1 = state_32093;
var statearr_32114_32158 = state_32093__$1;
(statearr_32114_32158[(2)] = inst_32008);

(statearr_32114_32158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (28))){
var inst_32055 = (state_32093[(2)]);
var inst_32056 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32057 = figwheel.client.heads_up.display_warning.call(null,inst_32056);
var state_32093__$1 = (function (){var statearr_32115 = state_32093;
(statearr_32115[(11)] = inst_32055);

return statearr_32115;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32093__$1,(29),inst_32057);
} else {
if((state_val_32094 === (25))){
var inst_32053 = figwheel.client.heads_up.clear.call(null);
var state_32093__$1 = state_32093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32093__$1,(28),inst_32053);
} else {
if((state_val_32094 === (34))){
var inst_32074 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32093__$1 = state_32093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32093__$1,(37),inst_32074);
} else {
if((state_val_32094 === (17))){
var inst_32033 = (state_32093[(2)]);
var inst_32034 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32035 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32034);
var state_32093__$1 = (function (){var statearr_32116 = state_32093;
(statearr_32116[(12)] = inst_32033);

return statearr_32116;
})();
var statearr_32117_32159 = state_32093__$1;
(statearr_32117_32159[(2)] = inst_32035);

(statearr_32117_32159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (3))){
var inst_32025 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32093__$1 = state_32093;
if(cljs.core.truth_(inst_32025)){
var statearr_32118_32160 = state_32093__$1;
(statearr_32118_32160[(1)] = (13));

} else {
var statearr_32119_32161 = state_32093__$1;
(statearr_32119_32161[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (12))){
var inst_32021 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
var statearr_32120_32162 = state_32093__$1;
(statearr_32120_32162[(2)] = inst_32021);

(statearr_32120_32162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (2))){
var inst_32008 = (state_32093[(10)]);
var inst_32008__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32093__$1 = (function (){var statearr_32121 = state_32093;
(statearr_32121[(10)] = inst_32008__$1);

return statearr_32121;
})();
if(cljs.core.truth_(inst_32008__$1)){
var statearr_32122_32163 = state_32093__$1;
(statearr_32122_32163[(1)] = (5));

} else {
var statearr_32123_32164 = state_32093__$1;
(statearr_32123_32164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (23))){
var inst_32051 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32093__$1 = state_32093;
if(cljs.core.truth_(inst_32051)){
var statearr_32124_32165 = state_32093__$1;
(statearr_32124_32165[(1)] = (25));

} else {
var statearr_32125_32166 = state_32093__$1;
(statearr_32125_32166[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (35))){
var state_32093__$1 = state_32093;
var statearr_32126_32167 = state_32093__$1;
(statearr_32126_32167[(2)] = null);

(statearr_32126_32167[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (19))){
var inst_32046 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32093__$1 = state_32093;
if(cljs.core.truth_(inst_32046)){
var statearr_32127_32168 = state_32093__$1;
(statearr_32127_32168[(1)] = (22));

} else {
var statearr_32128_32169 = state_32093__$1;
(statearr_32128_32169[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (11))){
var inst_32017 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
var statearr_32129_32170 = state_32093__$1;
(statearr_32129_32170[(2)] = inst_32017);

(statearr_32129_32170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (9))){
var inst_32019 = figwheel.client.heads_up.clear.call(null);
var state_32093__$1 = state_32093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32093__$1,(12),inst_32019);
} else {
if((state_val_32094 === (5))){
var inst_32010 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32093__$1 = state_32093;
var statearr_32130_32171 = state_32093__$1;
(statearr_32130_32171[(2)] = inst_32010);

(statearr_32130_32171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (14))){
var inst_32037 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32093__$1 = state_32093;
if(cljs.core.truth_(inst_32037)){
var statearr_32131_32172 = state_32093__$1;
(statearr_32131_32172[(1)] = (18));

} else {
var statearr_32132_32173 = state_32093__$1;
(statearr_32132_32173[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (26))){
var inst_32063 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32093__$1 = state_32093;
if(cljs.core.truth_(inst_32063)){
var statearr_32133_32174 = state_32093__$1;
(statearr_32133_32174[(1)] = (30));

} else {
var statearr_32134_32175 = state_32093__$1;
(statearr_32134_32175[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (16))){
var inst_32029 = (state_32093[(2)]);
var inst_32030 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32031 = figwheel.client.heads_up.display_exception.call(null,inst_32030);
var state_32093__$1 = (function (){var statearr_32135 = state_32093;
(statearr_32135[(13)] = inst_32029);

return statearr_32135;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32093__$1,(17),inst_32031);
} else {
if((state_val_32094 === (30))){
var inst_32065 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32066 = figwheel.client.heads_up.display_warning.call(null,inst_32065);
var state_32093__$1 = state_32093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32093__$1,(33),inst_32066);
} else {
if((state_val_32094 === (10))){
var inst_32023 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
var statearr_32136_32176 = state_32093__$1;
(statearr_32136_32176[(2)] = inst_32023);

(statearr_32136_32176[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (18))){
var inst_32039 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32040 = figwheel.client.heads_up.display_exception.call(null,inst_32039);
var state_32093__$1 = state_32093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32093__$1,(21),inst_32040);
} else {
if((state_val_32094 === (37))){
var inst_32076 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
var statearr_32137_32177 = state_32093__$1;
(statearr_32137_32177[(2)] = inst_32076);

(statearr_32137_32177[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (8))){
var inst_32015 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32093__$1 = state_32093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32093__$1,(11),inst_32015);
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
});})(c__26886__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26795__auto__,c__26886__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26796__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26796__auto____0 = (function (){
var statearr_32138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32138[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26796__auto__);

(statearr_32138[(1)] = (1));

return statearr_32138;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26796__auto____1 = (function (state_32093){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_32093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e32139){if((e32139 instanceof Object)){
var ex__26799__auto__ = e32139;
var statearr_32140_32178 = state_32093;
(statearr_32140_32178[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32179 = state_32093;
state_32093 = G__32179;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26796__auto__ = function(state_32093){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26796__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26796__auto____1.call(this,state_32093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26796__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26796__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto__,msg_hist,msg_names,msg))
})();
var state__26888__auto__ = (function (){var statearr_32141 = f__26887__auto__.call(null);
(statearr_32141[(6)] = c__26886__auto__);

return statearr_32141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto__,msg_hist,msg_names,msg))
);

return c__26886__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26886__auto___32208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto___32208,ch){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto___32208,ch){
return (function (state_32194){
var state_val_32195 = (state_32194[(1)]);
if((state_val_32195 === (1))){
var state_32194__$1 = state_32194;
var statearr_32196_32209 = state_32194__$1;
(statearr_32196_32209[(2)] = null);

(statearr_32196_32209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (2))){
var state_32194__$1 = state_32194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32194__$1,(4),ch);
} else {
if((state_val_32195 === (3))){
var inst_32192 = (state_32194[(2)]);
var state_32194__$1 = state_32194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32194__$1,inst_32192);
} else {
if((state_val_32195 === (4))){
var inst_32182 = (state_32194[(7)]);
var inst_32182__$1 = (state_32194[(2)]);
var state_32194__$1 = (function (){var statearr_32197 = state_32194;
(statearr_32197[(7)] = inst_32182__$1);

return statearr_32197;
})();
if(cljs.core.truth_(inst_32182__$1)){
var statearr_32198_32210 = state_32194__$1;
(statearr_32198_32210[(1)] = (5));

} else {
var statearr_32199_32211 = state_32194__$1;
(statearr_32199_32211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (5))){
var inst_32182 = (state_32194[(7)]);
var inst_32184 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32182);
var state_32194__$1 = state_32194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32194__$1,(8),inst_32184);
} else {
if((state_val_32195 === (6))){
var state_32194__$1 = state_32194;
var statearr_32200_32212 = state_32194__$1;
(statearr_32200_32212[(2)] = null);

(statearr_32200_32212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (7))){
var inst_32190 = (state_32194[(2)]);
var state_32194__$1 = state_32194;
var statearr_32201_32213 = state_32194__$1;
(statearr_32201_32213[(2)] = inst_32190);

(statearr_32201_32213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (8))){
var inst_32186 = (state_32194[(2)]);
var state_32194__$1 = (function (){var statearr_32202 = state_32194;
(statearr_32202[(8)] = inst_32186);

return statearr_32202;
})();
var statearr_32203_32214 = state_32194__$1;
(statearr_32203_32214[(2)] = null);

(statearr_32203_32214[(1)] = (2));


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
});})(c__26886__auto___32208,ch))
;
return ((function (switch__26795__auto__,c__26886__auto___32208,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26796__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26796__auto____0 = (function (){
var statearr_32204 = [null,null,null,null,null,null,null,null,null];
(statearr_32204[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26796__auto__);

(statearr_32204[(1)] = (1));

return statearr_32204;
});
var figwheel$client$heads_up_plugin_$_state_machine__26796__auto____1 = (function (state_32194){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_32194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e32205){if((e32205 instanceof Object)){
var ex__26799__auto__ = e32205;
var statearr_32206_32215 = state_32194;
(statearr_32206_32215[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32216 = state_32194;
state_32194 = G__32216;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26796__auto__ = function(state_32194){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26796__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26796__auto____1.call(this,state_32194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26796__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26796__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto___32208,ch))
})();
var state__26888__auto__ = (function (){var statearr_32207 = f__26887__auto__.call(null);
(statearr_32207[(6)] = c__26886__auto___32208);

return statearr_32207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto___32208,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto__){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto__){
return (function (state_32222){
var state_val_32223 = (state_32222[(1)]);
if((state_val_32223 === (1))){
var inst_32217 = cljs.core.async.timeout.call(null,(3000));
var state_32222__$1 = state_32222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32222__$1,(2),inst_32217);
} else {
if((state_val_32223 === (2))){
var inst_32219 = (state_32222[(2)]);
var inst_32220 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32222__$1 = (function (){var statearr_32224 = state_32222;
(statearr_32224[(7)] = inst_32219);

return statearr_32224;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32222__$1,inst_32220);
} else {
return null;
}
}
});})(c__26886__auto__))
;
return ((function (switch__26795__auto__,c__26886__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26796__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26796__auto____0 = (function (){
var statearr_32225 = [null,null,null,null,null,null,null,null];
(statearr_32225[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26796__auto__);

(statearr_32225[(1)] = (1));

return statearr_32225;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26796__auto____1 = (function (state_32222){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_32222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e32226){if((e32226 instanceof Object)){
var ex__26799__auto__ = e32226;
var statearr_32227_32229 = state_32222;
(statearr_32227_32229[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32230 = state_32222;
state_32222 = G__32230;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26796__auto__ = function(state_32222){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26796__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26796__auto____1.call(this,state_32222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26796__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26796__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto__))
})();
var state__26888__auto__ = (function (){var statearr_32228 = f__26887__auto__.call(null);
(statearr_32228[(6)] = c__26886__auto__);

return statearr_32228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto__))
);

return c__26886__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5635__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5635__auto__)){
var figwheel_version = temp__5635__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto__,figwheel_version,temp__5635__auto__){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto__,figwheel_version,temp__5635__auto__){
return (function (state_32237){
var state_val_32238 = (state_32237[(1)]);
if((state_val_32238 === (1))){
var inst_32231 = cljs.core.async.timeout.call(null,(2000));
var state_32237__$1 = state_32237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32237__$1,(2),inst_32231);
} else {
if((state_val_32238 === (2))){
var inst_32233 = (state_32237[(2)]);
var inst_32234 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_32235 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32234);
var state_32237__$1 = (function (){var statearr_32239 = state_32237;
(statearr_32239[(7)] = inst_32233);

return statearr_32239;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32237__$1,inst_32235);
} else {
return null;
}
}
});})(c__26886__auto__,figwheel_version,temp__5635__auto__))
;
return ((function (switch__26795__auto__,c__26886__auto__,figwheel_version,temp__5635__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26796__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26796__auto____0 = (function (){
var statearr_32240 = [null,null,null,null,null,null,null,null];
(statearr_32240[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26796__auto__);

(statearr_32240[(1)] = (1));

return statearr_32240;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26796__auto____1 = (function (state_32237){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_32237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e32241){if((e32241 instanceof Object)){
var ex__26799__auto__ = e32241;
var statearr_32242_32244 = state_32237;
(statearr_32242_32244[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32245 = state_32237;
state_32237 = G__32245;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26796__auto__ = function(state_32237){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26796__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26796__auto____1.call(this,state_32237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26796__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26796__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto__,figwheel_version,temp__5635__auto__))
})();
var state__26888__auto__ = (function (){var statearr_32243 = f__26887__auto__.call(null);
(statearr_32243[(6)] = c__26886__auto__);

return statearr_32243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto__,figwheel_version,temp__5635__auto__))
);

return c__26886__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32246){
var map__32247 = p__32246;
var map__32247__$1 = ((((!((map__32247 == null)))?(((((map__32247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32247):map__32247);
var file = cljs.core.get.call(null,map__32247__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32247__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32247__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32249 = "";
var G__32249__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32249),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32249);
var G__32249__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32249__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32249__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32249__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32249__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32250){
var map__32251 = p__32250;
var map__32251__$1 = ((((!((map__32251 == null)))?(((((map__32251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32251):map__32251);
var ed = map__32251__$1;
var formatted_exception = cljs.core.get.call(null,map__32251__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32251__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32251__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32253_32257 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32254_32258 = null;
var count__32255_32259 = (0);
var i__32256_32260 = (0);
while(true){
if((i__32256_32260 < count__32255_32259)){
var msg_32261 = cljs.core._nth.call(null,chunk__32254_32258,i__32256_32260);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32261);


var G__32262 = seq__32253_32257;
var G__32263 = chunk__32254_32258;
var G__32264 = count__32255_32259;
var G__32265 = (i__32256_32260 + (1));
seq__32253_32257 = G__32262;
chunk__32254_32258 = G__32263;
count__32255_32259 = G__32264;
i__32256_32260 = G__32265;
continue;
} else {
var temp__5635__auto___32266 = cljs.core.seq.call(null,seq__32253_32257);
if(temp__5635__auto___32266){
var seq__32253_32267__$1 = temp__5635__auto___32266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32253_32267__$1)){
var c__4351__auto___32268 = cljs.core.chunk_first.call(null,seq__32253_32267__$1);
var G__32269 = cljs.core.chunk_rest.call(null,seq__32253_32267__$1);
var G__32270 = c__4351__auto___32268;
var G__32271 = cljs.core.count.call(null,c__4351__auto___32268);
var G__32272 = (0);
seq__32253_32257 = G__32269;
chunk__32254_32258 = G__32270;
count__32255_32259 = G__32271;
i__32256_32260 = G__32272;
continue;
} else {
var msg_32273 = cljs.core.first.call(null,seq__32253_32267__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32273);


var G__32274 = cljs.core.next.call(null,seq__32253_32267__$1);
var G__32275 = null;
var G__32276 = (0);
var G__32277 = (0);
seq__32253_32257 = G__32274;
chunk__32254_32258 = G__32275;
count__32255_32259 = G__32276;
i__32256_32260 = G__32277;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32278){
var map__32279 = p__32278;
var map__32279__$1 = ((((!((map__32279 == null)))?(((((map__32279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32279):map__32279);
var w = map__32279__$1;
var message = cljs.core.get.call(null,map__32279__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"src/main/resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"src/main/resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32281 = cljs.core.seq.call(null,plugins);
var chunk__32282 = null;
var count__32283 = (0);
var i__32284 = (0);
while(true){
if((i__32284 < count__32283)){
var vec__32285 = cljs.core._nth.call(null,chunk__32282,i__32284);
var k = cljs.core.nth.call(null,vec__32285,(0),null);
var plugin = cljs.core.nth.call(null,vec__32285,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32291 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32281,chunk__32282,count__32283,i__32284,pl_32291,vec__32285,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32291.call(null,msg_hist);
});})(seq__32281,chunk__32282,count__32283,i__32284,pl_32291,vec__32285,k,plugin))
);
} else {
}


var G__32292 = seq__32281;
var G__32293 = chunk__32282;
var G__32294 = count__32283;
var G__32295 = (i__32284 + (1));
seq__32281 = G__32292;
chunk__32282 = G__32293;
count__32283 = G__32294;
i__32284 = G__32295;
continue;
} else {
var temp__5635__auto__ = cljs.core.seq.call(null,seq__32281);
if(temp__5635__auto__){
var seq__32281__$1 = temp__5635__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32281__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__32281__$1);
var G__32296 = cljs.core.chunk_rest.call(null,seq__32281__$1);
var G__32297 = c__4351__auto__;
var G__32298 = cljs.core.count.call(null,c__4351__auto__);
var G__32299 = (0);
seq__32281 = G__32296;
chunk__32282 = G__32297;
count__32283 = G__32298;
i__32284 = G__32299;
continue;
} else {
var vec__32288 = cljs.core.first.call(null,seq__32281__$1);
var k = cljs.core.nth.call(null,vec__32288,(0),null);
var plugin = cljs.core.nth.call(null,vec__32288,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32300 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32281,chunk__32282,count__32283,i__32284,pl_32300,vec__32288,k,plugin,seq__32281__$1,temp__5635__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32300.call(null,msg_hist);
});})(seq__32281,chunk__32282,count__32283,i__32284,pl_32300,vec__32288,k,plugin,seq__32281__$1,temp__5635__auto__))
);
} else {
}


var G__32301 = cljs.core.next.call(null,seq__32281__$1);
var G__32302 = null;
var G__32303 = (0);
var G__32304 = (0);
seq__32281 = G__32301;
chunk__32282 = G__32302;
count__32283 = G__32303;
i__32284 = G__32304;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__32306 = arguments.length;
switch (G__32306) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32307_32312 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32308_32313 = null;
var count__32309_32314 = (0);
var i__32310_32315 = (0);
while(true){
if((i__32310_32315 < count__32309_32314)){
var msg_32316 = cljs.core._nth.call(null,chunk__32308_32313,i__32310_32315);
figwheel.client.socket.handle_incoming_message.call(null,msg_32316);


var G__32317 = seq__32307_32312;
var G__32318 = chunk__32308_32313;
var G__32319 = count__32309_32314;
var G__32320 = (i__32310_32315 + (1));
seq__32307_32312 = G__32317;
chunk__32308_32313 = G__32318;
count__32309_32314 = G__32319;
i__32310_32315 = G__32320;
continue;
} else {
var temp__5635__auto___32321 = cljs.core.seq.call(null,seq__32307_32312);
if(temp__5635__auto___32321){
var seq__32307_32322__$1 = temp__5635__auto___32321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32307_32322__$1)){
var c__4351__auto___32323 = cljs.core.chunk_first.call(null,seq__32307_32322__$1);
var G__32324 = cljs.core.chunk_rest.call(null,seq__32307_32322__$1);
var G__32325 = c__4351__auto___32323;
var G__32326 = cljs.core.count.call(null,c__4351__auto___32323);
var G__32327 = (0);
seq__32307_32312 = G__32324;
chunk__32308_32313 = G__32325;
count__32309_32314 = G__32326;
i__32310_32315 = G__32327;
continue;
} else {
var msg_32328 = cljs.core.first.call(null,seq__32307_32322__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32328);


var G__32329 = cljs.core.next.call(null,seq__32307_32322__$1);
var G__32330 = null;
var G__32331 = (0);
var G__32332 = (0);
seq__32307_32312 = G__32329;
chunk__32308_32313 = G__32330;
count__32309_32314 = G__32331;
i__32310_32315 = G__32332;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32337 = arguments.length;
var i__4532__auto___32338 = (0);
while(true){
if((i__4532__auto___32338 < len__4531__auto___32337)){
args__4534__auto__.push((arguments[i__4532__auto___32338]));

var G__32339 = (i__4532__auto___32338 + (1));
i__4532__auto___32338 = G__32339;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32334){
var map__32335 = p__32334;
var map__32335__$1 = ((((!((map__32335 == null)))?(((((map__32335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32335):map__32335);
var opts = map__32335__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32333){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32333));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32340){if((e32340 instanceof Error)){
var e = e32340;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32340;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__32341){
var map__32342 = p__32341;
var map__32342__$1 = ((((!((map__32342 == null)))?(((((map__32342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32342):map__32342);
var msg_name = cljs.core.get.call(null,map__32342__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1539578347105
