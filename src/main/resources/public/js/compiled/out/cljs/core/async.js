// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26946 = arguments.length;
switch (G__26946) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26947 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26947 = (function (f,blockable,meta26948){
this.f = f;
this.blockable = blockable;
this.meta26948 = meta26948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26949,meta26948__$1){
var self__ = this;
var _26949__$1 = this;
return (new cljs.core.async.t_cljs$core$async26947(self__.f,self__.blockable,meta26948__$1));
});

cljs.core.async.t_cljs$core$async26947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26949){
var self__ = this;
var _26949__$1 = this;
return self__.meta26948;
});

cljs.core.async.t_cljs$core$async26947.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26947.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26947.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26947.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26947.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26948","meta26948",1985455768,null)], null);
});

cljs.core.async.t_cljs$core$async26947.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26947";

cljs.core.async.t_cljs$core$async26947.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26947");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26947.
 */
cljs.core.async.__GT_t_cljs$core$async26947 = (function cljs$core$async$__GT_t_cljs$core$async26947(f__$1,blockable__$1,meta26948){
return (new cljs.core.async.t_cljs$core$async26947(f__$1,blockable__$1,meta26948));
});

}

return (new cljs.core.async.t_cljs$core$async26947(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__26953 = arguments.length;
switch (G__26953) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__26956 = arguments.length;
switch (G__26956) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__26959 = arguments.length;
switch (G__26959) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26961 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26961);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26961,ret){
return (function (){
return fn1.call(null,val_26961);
});})(val_26961,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26963 = arguments.length;
switch (G__26963) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5633__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5633__auto__)){
var ret = temp__5633__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5633__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5633__auto__)){
var retb = temp__5633__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5633__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5633__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___26965 = n;
var x_26966 = (0);
while(true){
if((x_26966 < n__4408__auto___26965)){
(a[x_26966] = (0));

var G__26967 = (x_26966 + (1));
x_26966 = G__26967;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26968 = (i + (1));
i = G__26968;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26969 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26969 = (function (flag,meta26970){
this.flag = flag;
this.meta26970 = meta26970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26971,meta26970__$1){
var self__ = this;
var _26971__$1 = this;
return (new cljs.core.async.t_cljs$core$async26969(self__.flag,meta26970__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26969.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26971){
var self__ = this;
var _26971__$1 = this;
return self__.meta26970;
});})(flag))
;

cljs.core.async.t_cljs$core$async26969.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26969.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26969.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26969.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26969.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26970","meta26970",423985949,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26969.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26969";

cljs.core.async.t_cljs$core$async26969.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26969");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26969.
 */
cljs.core.async.__GT_t_cljs$core$async26969 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26969(flag__$1,meta26970){
return (new cljs.core.async.t_cljs$core$async26969(flag__$1,meta26970));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26969(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26972 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26972 = (function (flag,cb,meta26973){
this.flag = flag;
this.cb = cb;
this.meta26973 = meta26973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26974,meta26973__$1){
var self__ = this;
var _26974__$1 = this;
return (new cljs.core.async.t_cljs$core$async26972(self__.flag,self__.cb,meta26973__$1));
});

cljs.core.async.t_cljs$core$async26972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26974){
var self__ = this;
var _26974__$1 = this;
return self__.meta26973;
});

cljs.core.async.t_cljs$core$async26972.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26972.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26972.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26972.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26973","meta26973",-1498670441,null)], null);
});

cljs.core.async.t_cljs$core$async26972.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26972";

cljs.core.async.t_cljs$core$async26972.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26972");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26972.
 */
cljs.core.async.__GT_t_cljs$core$async26972 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26972(flag__$1,cb__$1,meta26973){
return (new cljs.core.async.t_cljs$core$async26972(flag__$1,cb__$1,meta26973));
});

}

return (new cljs.core.async.t_cljs$core$async26972(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26975_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26975_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26976_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26976_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26977 = (i + (1));
i = G__26977;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5635__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5635__auto__)){
var got = temp__5635__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26983 = arguments.length;
var i__4532__auto___26984 = (0);
while(true){
if((i__4532__auto___26984 < len__4531__auto___26983)){
args__4534__auto__.push((arguments[i__4532__auto___26984]));

var G__26985 = (i__4532__auto___26984 + (1));
i__4532__auto___26984 = G__26985;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26980){
var map__26981 = p__26980;
var map__26981__$1 = ((((!((map__26981 == null)))?(((((map__26981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26981):map__26981);
var opts = map__26981__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26978){
var G__26979 = cljs.core.first.call(null,seq26978);
var seq26978__$1 = cljs.core.next.call(null,seq26978);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26979,seq26978__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__26987 = arguments.length;
switch (G__26987) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26886__auto___27033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto___27033){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto___27033){
return (function (state_27011){
var state_val_27012 = (state_27011[(1)]);
if((state_val_27012 === (7))){
var inst_27007 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
var statearr_27013_27034 = state_27011__$1;
(statearr_27013_27034[(2)] = inst_27007);

(statearr_27013_27034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (1))){
var state_27011__$1 = state_27011;
var statearr_27014_27035 = state_27011__$1;
(statearr_27014_27035[(2)] = null);

(statearr_27014_27035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (4))){
var inst_26990 = (state_27011[(7)]);
var inst_26990__$1 = (state_27011[(2)]);
var inst_26991 = (inst_26990__$1 == null);
var state_27011__$1 = (function (){var statearr_27015 = state_27011;
(statearr_27015[(7)] = inst_26990__$1);

return statearr_27015;
})();
if(cljs.core.truth_(inst_26991)){
var statearr_27016_27036 = state_27011__$1;
(statearr_27016_27036[(1)] = (5));

} else {
var statearr_27017_27037 = state_27011__$1;
(statearr_27017_27037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (13))){
var state_27011__$1 = state_27011;
var statearr_27018_27038 = state_27011__$1;
(statearr_27018_27038[(2)] = null);

(statearr_27018_27038[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (6))){
var inst_26990 = (state_27011[(7)]);
var state_27011__$1 = state_27011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27011__$1,(11),to,inst_26990);
} else {
if((state_val_27012 === (3))){
var inst_27009 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27011__$1,inst_27009);
} else {
if((state_val_27012 === (12))){
var state_27011__$1 = state_27011;
var statearr_27019_27039 = state_27011__$1;
(statearr_27019_27039[(2)] = null);

(statearr_27019_27039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (2))){
var state_27011__$1 = state_27011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27011__$1,(4),from);
} else {
if((state_val_27012 === (11))){
var inst_27000 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
if(cljs.core.truth_(inst_27000)){
var statearr_27020_27040 = state_27011__$1;
(statearr_27020_27040[(1)] = (12));

} else {
var statearr_27021_27041 = state_27011__$1;
(statearr_27021_27041[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (9))){
var state_27011__$1 = state_27011;
var statearr_27022_27042 = state_27011__$1;
(statearr_27022_27042[(2)] = null);

(statearr_27022_27042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (5))){
var state_27011__$1 = state_27011;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27023_27043 = state_27011__$1;
(statearr_27023_27043[(1)] = (8));

} else {
var statearr_27024_27044 = state_27011__$1;
(statearr_27024_27044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (14))){
var inst_27005 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
var statearr_27025_27045 = state_27011__$1;
(statearr_27025_27045[(2)] = inst_27005);

(statearr_27025_27045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (10))){
var inst_26997 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
var statearr_27026_27046 = state_27011__$1;
(statearr_27026_27046[(2)] = inst_26997);

(statearr_27026_27046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (8))){
var inst_26994 = cljs.core.async.close_BANG_.call(null,to);
var state_27011__$1 = state_27011;
var statearr_27027_27047 = state_27011__$1;
(statearr_27027_27047[(2)] = inst_26994);

(statearr_27027_27047[(1)] = (10));


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
});})(c__26886__auto___27033))
;
return ((function (switch__26795__auto__,c__26886__auto___27033){
return (function() {
var cljs$core$async$state_machine__26796__auto__ = null;
var cljs$core$async$state_machine__26796__auto____0 = (function (){
var statearr_27028 = [null,null,null,null,null,null,null,null];
(statearr_27028[(0)] = cljs$core$async$state_machine__26796__auto__);

(statearr_27028[(1)] = (1));

return statearr_27028;
});
var cljs$core$async$state_machine__26796__auto____1 = (function (state_27011){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_27011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e27029){if((e27029 instanceof Object)){
var ex__26799__auto__ = e27029;
var statearr_27030_27048 = state_27011;
(statearr_27030_27048[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27049 = state_27011;
state_27011 = G__27049;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
cljs$core$async$state_machine__26796__auto__ = function(state_27011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26796__auto____1.call(this,state_27011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26796__auto____0;
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26796__auto____1;
return cljs$core$async$state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto___27033))
})();
var state__26888__auto__ = (function (){var statearr_27031 = f__26887__auto__.call(null);
(statearr_27031[(6)] = c__26886__auto___27033);

return statearr_27031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto___27033))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27050){
var vec__27051 = p__27050;
var v = cljs.core.nth.call(null,vec__27051,(0),null);
var p = cljs.core.nth.call(null,vec__27051,(1),null);
var job = vec__27051;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26886__auto___27222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto___27222,res,vec__27051,v,p,job,jobs,results){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto___27222,res,vec__27051,v,p,job,jobs,results){
return (function (state_27058){
var state_val_27059 = (state_27058[(1)]);
if((state_val_27059 === (1))){
var state_27058__$1 = state_27058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27058__$1,(2),res,v);
} else {
if((state_val_27059 === (2))){
var inst_27055 = (state_27058[(2)]);
var inst_27056 = cljs.core.async.close_BANG_.call(null,res);
var state_27058__$1 = (function (){var statearr_27060 = state_27058;
(statearr_27060[(7)] = inst_27055);

return statearr_27060;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27058__$1,inst_27056);
} else {
return null;
}
}
});})(c__26886__auto___27222,res,vec__27051,v,p,job,jobs,results))
;
return ((function (switch__26795__auto__,c__26886__auto___27222,res,vec__27051,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____0 = (function (){
var statearr_27061 = [null,null,null,null,null,null,null,null];
(statearr_27061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__);

(statearr_27061[(1)] = (1));

return statearr_27061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____1 = (function (state_27058){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_27058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e27062){if((e27062 instanceof Object)){
var ex__26799__auto__ = e27062;
var statearr_27063_27223 = state_27058;
(statearr_27063_27223[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27224 = state_27058;
state_27058 = G__27224;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__ = function(state_27058){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____1.call(this,state_27058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto___27222,res,vec__27051,v,p,job,jobs,results))
})();
var state__26888__auto__ = (function (){var statearr_27064 = f__26887__auto__.call(null);
(statearr_27064[(6)] = c__26886__auto___27222);

return statearr_27064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto___27222,res,vec__27051,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27065){
var vec__27066 = p__27065;
var v = cljs.core.nth.call(null,vec__27066,(0),null);
var p = cljs.core.nth.call(null,vec__27066,(1),null);
var job = vec__27066;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___27225 = n;
var __27226 = (0);
while(true){
if((__27226 < n__4408__auto___27225)){
var G__27069_27227 = type;
var G__27069_27228__$1 = (((G__27069_27227 instanceof cljs.core.Keyword))?G__27069_27227.fqn:null);
switch (G__27069_27228__$1) {
case "compute":
var c__26886__auto___27230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27226,c__26886__auto___27230,G__27069_27227,G__27069_27228__$1,n__4408__auto___27225,jobs,results,process,async){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (__27226,c__26886__auto___27230,G__27069_27227,G__27069_27228__$1,n__4408__auto___27225,jobs,results,process,async){
return (function (state_27082){
var state_val_27083 = (state_27082[(1)]);
if((state_val_27083 === (1))){
var state_27082__$1 = state_27082;
var statearr_27084_27231 = state_27082__$1;
(statearr_27084_27231[(2)] = null);

(statearr_27084_27231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (2))){
var state_27082__$1 = state_27082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27082__$1,(4),jobs);
} else {
if((state_val_27083 === (3))){
var inst_27080 = (state_27082[(2)]);
var state_27082__$1 = state_27082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27082__$1,inst_27080);
} else {
if((state_val_27083 === (4))){
var inst_27072 = (state_27082[(2)]);
var inst_27073 = process.call(null,inst_27072);
var state_27082__$1 = state_27082;
if(cljs.core.truth_(inst_27073)){
var statearr_27085_27232 = state_27082__$1;
(statearr_27085_27232[(1)] = (5));

} else {
var statearr_27086_27233 = state_27082__$1;
(statearr_27086_27233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (5))){
var state_27082__$1 = state_27082;
var statearr_27087_27234 = state_27082__$1;
(statearr_27087_27234[(2)] = null);

(statearr_27087_27234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (6))){
var state_27082__$1 = state_27082;
var statearr_27088_27235 = state_27082__$1;
(statearr_27088_27235[(2)] = null);

(statearr_27088_27235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (7))){
var inst_27078 = (state_27082[(2)]);
var state_27082__$1 = state_27082;
var statearr_27089_27236 = state_27082__$1;
(statearr_27089_27236[(2)] = inst_27078);

(statearr_27089_27236[(1)] = (3));


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
});})(__27226,c__26886__auto___27230,G__27069_27227,G__27069_27228__$1,n__4408__auto___27225,jobs,results,process,async))
;
return ((function (__27226,switch__26795__auto__,c__26886__auto___27230,G__27069_27227,G__27069_27228__$1,n__4408__auto___27225,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____0 = (function (){
var statearr_27090 = [null,null,null,null,null,null,null];
(statearr_27090[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__);

(statearr_27090[(1)] = (1));

return statearr_27090;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____1 = (function (state_27082){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_27082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e27091){if((e27091 instanceof Object)){
var ex__26799__auto__ = e27091;
var statearr_27092_27237 = state_27082;
(statearr_27092_27237[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27238 = state_27082;
state_27082 = G__27238;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__ = function(state_27082){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____1.call(this,state_27082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__;
})()
;})(__27226,switch__26795__auto__,c__26886__auto___27230,G__27069_27227,G__27069_27228__$1,n__4408__auto___27225,jobs,results,process,async))
})();
var state__26888__auto__ = (function (){var statearr_27093 = f__26887__auto__.call(null);
(statearr_27093[(6)] = c__26886__auto___27230);

return statearr_27093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(__27226,c__26886__auto___27230,G__27069_27227,G__27069_27228__$1,n__4408__auto___27225,jobs,results,process,async))
);


break;
case "async":
var c__26886__auto___27239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27226,c__26886__auto___27239,G__27069_27227,G__27069_27228__$1,n__4408__auto___27225,jobs,results,process,async){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (__27226,c__26886__auto___27239,G__27069_27227,G__27069_27228__$1,n__4408__auto___27225,jobs,results,process,async){
return (function (state_27106){
var state_val_27107 = (state_27106[(1)]);
if((state_val_27107 === (1))){
var state_27106__$1 = state_27106;
var statearr_27108_27240 = state_27106__$1;
(statearr_27108_27240[(2)] = null);

(statearr_27108_27240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27107 === (2))){
var state_27106__$1 = state_27106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27106__$1,(4),jobs);
} else {
if((state_val_27107 === (3))){
var inst_27104 = (state_27106[(2)]);
var state_27106__$1 = state_27106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27106__$1,inst_27104);
} else {
if((state_val_27107 === (4))){
var inst_27096 = (state_27106[(2)]);
var inst_27097 = async.call(null,inst_27096);
var state_27106__$1 = state_27106;
if(cljs.core.truth_(inst_27097)){
var statearr_27109_27241 = state_27106__$1;
(statearr_27109_27241[(1)] = (5));

} else {
var statearr_27110_27242 = state_27106__$1;
(statearr_27110_27242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27107 === (5))){
var state_27106__$1 = state_27106;
var statearr_27111_27243 = state_27106__$1;
(statearr_27111_27243[(2)] = null);

(statearr_27111_27243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27107 === (6))){
var state_27106__$1 = state_27106;
var statearr_27112_27244 = state_27106__$1;
(statearr_27112_27244[(2)] = null);

(statearr_27112_27244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27107 === (7))){
var inst_27102 = (state_27106[(2)]);
var state_27106__$1 = state_27106;
var statearr_27113_27245 = state_27106__$1;
(statearr_27113_27245[(2)] = inst_27102);

(statearr_27113_27245[(1)] = (3));


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
});})(__27226,c__26886__auto___27239,G__27069_27227,G__27069_27228__$1,n__4408__auto___27225,jobs,results,process,async))
;
return ((function (__27226,switch__26795__auto__,c__26886__auto___27239,G__27069_27227,G__27069_27228__$1,n__4408__auto___27225,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____0 = (function (){
var statearr_27114 = [null,null,null,null,null,null,null];
(statearr_27114[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__);

(statearr_27114[(1)] = (1));

return statearr_27114;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____1 = (function (state_27106){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_27106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e27115){if((e27115 instanceof Object)){
var ex__26799__auto__ = e27115;
var statearr_27116_27246 = state_27106;
(statearr_27116_27246[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27247 = state_27106;
state_27106 = G__27247;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__ = function(state_27106){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____1.call(this,state_27106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__;
})()
;})(__27226,switch__26795__auto__,c__26886__auto___27239,G__27069_27227,G__27069_27228__$1,n__4408__auto___27225,jobs,results,process,async))
})();
var state__26888__auto__ = (function (){var statearr_27117 = f__26887__auto__.call(null);
(statearr_27117[(6)] = c__26886__auto___27239);

return statearr_27117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(__27226,c__26886__auto___27239,G__27069_27227,G__27069_27228__$1,n__4408__auto___27225,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27069_27228__$1)].join('')));

}

var G__27248 = (__27226 + (1));
__27226 = G__27248;
continue;
} else {
}
break;
}

var c__26886__auto___27249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto___27249,jobs,results,process,async){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto___27249,jobs,results,process,async){
return (function (state_27139){
var state_val_27140 = (state_27139[(1)]);
if((state_val_27140 === (7))){
var inst_27135 = (state_27139[(2)]);
var state_27139__$1 = state_27139;
var statearr_27141_27250 = state_27139__$1;
(statearr_27141_27250[(2)] = inst_27135);

(statearr_27141_27250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27140 === (1))){
var state_27139__$1 = state_27139;
var statearr_27142_27251 = state_27139__$1;
(statearr_27142_27251[(2)] = null);

(statearr_27142_27251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27140 === (4))){
var inst_27120 = (state_27139[(7)]);
var inst_27120__$1 = (state_27139[(2)]);
var inst_27121 = (inst_27120__$1 == null);
var state_27139__$1 = (function (){var statearr_27143 = state_27139;
(statearr_27143[(7)] = inst_27120__$1);

return statearr_27143;
})();
if(cljs.core.truth_(inst_27121)){
var statearr_27144_27252 = state_27139__$1;
(statearr_27144_27252[(1)] = (5));

} else {
var statearr_27145_27253 = state_27139__$1;
(statearr_27145_27253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27140 === (6))){
var inst_27125 = (state_27139[(8)]);
var inst_27120 = (state_27139[(7)]);
var inst_27125__$1 = cljs.core.async.chan.call(null,(1));
var inst_27126 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27127 = [inst_27120,inst_27125__$1];
var inst_27128 = (new cljs.core.PersistentVector(null,2,(5),inst_27126,inst_27127,null));
var state_27139__$1 = (function (){var statearr_27146 = state_27139;
(statearr_27146[(8)] = inst_27125__$1);

return statearr_27146;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27139__$1,(8),jobs,inst_27128);
} else {
if((state_val_27140 === (3))){
var inst_27137 = (state_27139[(2)]);
var state_27139__$1 = state_27139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27139__$1,inst_27137);
} else {
if((state_val_27140 === (2))){
var state_27139__$1 = state_27139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27139__$1,(4),from);
} else {
if((state_val_27140 === (9))){
var inst_27132 = (state_27139[(2)]);
var state_27139__$1 = (function (){var statearr_27147 = state_27139;
(statearr_27147[(9)] = inst_27132);

return statearr_27147;
})();
var statearr_27148_27254 = state_27139__$1;
(statearr_27148_27254[(2)] = null);

(statearr_27148_27254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27140 === (5))){
var inst_27123 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27139__$1 = state_27139;
var statearr_27149_27255 = state_27139__$1;
(statearr_27149_27255[(2)] = inst_27123);

(statearr_27149_27255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27140 === (8))){
var inst_27125 = (state_27139[(8)]);
var inst_27130 = (state_27139[(2)]);
var state_27139__$1 = (function (){var statearr_27150 = state_27139;
(statearr_27150[(10)] = inst_27130);

return statearr_27150;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27139__$1,(9),results,inst_27125);
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
});})(c__26886__auto___27249,jobs,results,process,async))
;
return ((function (switch__26795__auto__,c__26886__auto___27249,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____0 = (function (){
var statearr_27151 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27151[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__);

(statearr_27151[(1)] = (1));

return statearr_27151;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____1 = (function (state_27139){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_27139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e27152){if((e27152 instanceof Object)){
var ex__26799__auto__ = e27152;
var statearr_27153_27256 = state_27139;
(statearr_27153_27256[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27257 = state_27139;
state_27139 = G__27257;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__ = function(state_27139){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____1.call(this,state_27139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto___27249,jobs,results,process,async))
})();
var state__26888__auto__ = (function (){var statearr_27154 = f__26887__auto__.call(null);
(statearr_27154[(6)] = c__26886__auto___27249);

return statearr_27154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto___27249,jobs,results,process,async))
);


var c__26886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto__,jobs,results,process,async){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto__,jobs,results,process,async){
return (function (state_27192){
var state_val_27193 = (state_27192[(1)]);
if((state_val_27193 === (7))){
var inst_27188 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
var statearr_27194_27258 = state_27192__$1;
(statearr_27194_27258[(2)] = inst_27188);

(statearr_27194_27258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (20))){
var state_27192__$1 = state_27192;
var statearr_27195_27259 = state_27192__$1;
(statearr_27195_27259[(2)] = null);

(statearr_27195_27259[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (1))){
var state_27192__$1 = state_27192;
var statearr_27196_27260 = state_27192__$1;
(statearr_27196_27260[(2)] = null);

(statearr_27196_27260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (4))){
var inst_27157 = (state_27192[(7)]);
var inst_27157__$1 = (state_27192[(2)]);
var inst_27158 = (inst_27157__$1 == null);
var state_27192__$1 = (function (){var statearr_27197 = state_27192;
(statearr_27197[(7)] = inst_27157__$1);

return statearr_27197;
})();
if(cljs.core.truth_(inst_27158)){
var statearr_27198_27261 = state_27192__$1;
(statearr_27198_27261[(1)] = (5));

} else {
var statearr_27199_27262 = state_27192__$1;
(statearr_27199_27262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (15))){
var inst_27170 = (state_27192[(8)]);
var state_27192__$1 = state_27192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27192__$1,(18),to,inst_27170);
} else {
if((state_val_27193 === (21))){
var inst_27183 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
var statearr_27200_27263 = state_27192__$1;
(statearr_27200_27263[(2)] = inst_27183);

(statearr_27200_27263[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (13))){
var inst_27185 = (state_27192[(2)]);
var state_27192__$1 = (function (){var statearr_27201 = state_27192;
(statearr_27201[(9)] = inst_27185);

return statearr_27201;
})();
var statearr_27202_27264 = state_27192__$1;
(statearr_27202_27264[(2)] = null);

(statearr_27202_27264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (6))){
var inst_27157 = (state_27192[(7)]);
var state_27192__$1 = state_27192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27192__$1,(11),inst_27157);
} else {
if((state_val_27193 === (17))){
var inst_27178 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
if(cljs.core.truth_(inst_27178)){
var statearr_27203_27265 = state_27192__$1;
(statearr_27203_27265[(1)] = (19));

} else {
var statearr_27204_27266 = state_27192__$1;
(statearr_27204_27266[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (3))){
var inst_27190 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27192__$1,inst_27190);
} else {
if((state_val_27193 === (12))){
var inst_27167 = (state_27192[(10)]);
var state_27192__$1 = state_27192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27192__$1,(14),inst_27167);
} else {
if((state_val_27193 === (2))){
var state_27192__$1 = state_27192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27192__$1,(4),results);
} else {
if((state_val_27193 === (19))){
var state_27192__$1 = state_27192;
var statearr_27205_27267 = state_27192__$1;
(statearr_27205_27267[(2)] = null);

(statearr_27205_27267[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (11))){
var inst_27167 = (state_27192[(2)]);
var state_27192__$1 = (function (){var statearr_27206 = state_27192;
(statearr_27206[(10)] = inst_27167);

return statearr_27206;
})();
var statearr_27207_27268 = state_27192__$1;
(statearr_27207_27268[(2)] = null);

(statearr_27207_27268[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (9))){
var state_27192__$1 = state_27192;
var statearr_27208_27269 = state_27192__$1;
(statearr_27208_27269[(2)] = null);

(statearr_27208_27269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (5))){
var state_27192__$1 = state_27192;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27209_27270 = state_27192__$1;
(statearr_27209_27270[(1)] = (8));

} else {
var statearr_27210_27271 = state_27192__$1;
(statearr_27210_27271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (14))){
var inst_27172 = (state_27192[(11)]);
var inst_27170 = (state_27192[(8)]);
var inst_27170__$1 = (state_27192[(2)]);
var inst_27171 = (inst_27170__$1 == null);
var inst_27172__$1 = cljs.core.not.call(null,inst_27171);
var state_27192__$1 = (function (){var statearr_27211 = state_27192;
(statearr_27211[(11)] = inst_27172__$1);

(statearr_27211[(8)] = inst_27170__$1);

return statearr_27211;
})();
if(inst_27172__$1){
var statearr_27212_27272 = state_27192__$1;
(statearr_27212_27272[(1)] = (15));

} else {
var statearr_27213_27273 = state_27192__$1;
(statearr_27213_27273[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (16))){
var inst_27172 = (state_27192[(11)]);
var state_27192__$1 = state_27192;
var statearr_27214_27274 = state_27192__$1;
(statearr_27214_27274[(2)] = inst_27172);

(statearr_27214_27274[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (10))){
var inst_27164 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
var statearr_27215_27275 = state_27192__$1;
(statearr_27215_27275[(2)] = inst_27164);

(statearr_27215_27275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (18))){
var inst_27175 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
var statearr_27216_27276 = state_27192__$1;
(statearr_27216_27276[(2)] = inst_27175);

(statearr_27216_27276[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (8))){
var inst_27161 = cljs.core.async.close_BANG_.call(null,to);
var state_27192__$1 = state_27192;
var statearr_27217_27277 = state_27192__$1;
(statearr_27217_27277[(2)] = inst_27161);

(statearr_27217_27277[(1)] = (10));


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
});})(c__26886__auto__,jobs,results,process,async))
;
return ((function (switch__26795__auto__,c__26886__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____0 = (function (){
var statearr_27218 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27218[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__);

(statearr_27218[(1)] = (1));

return statearr_27218;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____1 = (function (state_27192){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_27192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e27219){if((e27219 instanceof Object)){
var ex__26799__auto__ = e27219;
var statearr_27220_27278 = state_27192;
(statearr_27220_27278[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27279 = state_27192;
state_27192 = G__27279;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__ = function(state_27192){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____1.call(this,state_27192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26796__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto__,jobs,results,process,async))
})();
var state__26888__auto__ = (function (){var statearr_27221 = f__26887__auto__.call(null);
(statearr_27221[(6)] = c__26886__auto__);

return statearr_27221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto__,jobs,results,process,async))
);

return c__26886__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27281 = arguments.length;
switch (G__27281) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27284 = arguments.length;
switch (G__27284) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27287 = arguments.length;
switch (G__27287) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26886__auto___27336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto___27336,tc,fc){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto___27336,tc,fc){
return (function (state_27313){
var state_val_27314 = (state_27313[(1)]);
if((state_val_27314 === (7))){
var inst_27309 = (state_27313[(2)]);
var state_27313__$1 = state_27313;
var statearr_27315_27337 = state_27313__$1;
(statearr_27315_27337[(2)] = inst_27309);

(statearr_27315_27337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (1))){
var state_27313__$1 = state_27313;
var statearr_27316_27338 = state_27313__$1;
(statearr_27316_27338[(2)] = null);

(statearr_27316_27338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (4))){
var inst_27290 = (state_27313[(7)]);
var inst_27290__$1 = (state_27313[(2)]);
var inst_27291 = (inst_27290__$1 == null);
var state_27313__$1 = (function (){var statearr_27317 = state_27313;
(statearr_27317[(7)] = inst_27290__$1);

return statearr_27317;
})();
if(cljs.core.truth_(inst_27291)){
var statearr_27318_27339 = state_27313__$1;
(statearr_27318_27339[(1)] = (5));

} else {
var statearr_27319_27340 = state_27313__$1;
(statearr_27319_27340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (13))){
var state_27313__$1 = state_27313;
var statearr_27320_27341 = state_27313__$1;
(statearr_27320_27341[(2)] = null);

(statearr_27320_27341[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (6))){
var inst_27290 = (state_27313[(7)]);
var inst_27296 = p.call(null,inst_27290);
var state_27313__$1 = state_27313;
if(cljs.core.truth_(inst_27296)){
var statearr_27321_27342 = state_27313__$1;
(statearr_27321_27342[(1)] = (9));

} else {
var statearr_27322_27343 = state_27313__$1;
(statearr_27322_27343[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (3))){
var inst_27311 = (state_27313[(2)]);
var state_27313__$1 = state_27313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27313__$1,inst_27311);
} else {
if((state_val_27314 === (12))){
var state_27313__$1 = state_27313;
var statearr_27323_27344 = state_27313__$1;
(statearr_27323_27344[(2)] = null);

(statearr_27323_27344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (2))){
var state_27313__$1 = state_27313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27313__$1,(4),ch);
} else {
if((state_val_27314 === (11))){
var inst_27290 = (state_27313[(7)]);
var inst_27300 = (state_27313[(2)]);
var state_27313__$1 = state_27313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27313__$1,(8),inst_27300,inst_27290);
} else {
if((state_val_27314 === (9))){
var state_27313__$1 = state_27313;
var statearr_27324_27345 = state_27313__$1;
(statearr_27324_27345[(2)] = tc);

(statearr_27324_27345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (5))){
var inst_27293 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27294 = cljs.core.async.close_BANG_.call(null,fc);
var state_27313__$1 = (function (){var statearr_27325 = state_27313;
(statearr_27325[(8)] = inst_27293);

return statearr_27325;
})();
var statearr_27326_27346 = state_27313__$1;
(statearr_27326_27346[(2)] = inst_27294);

(statearr_27326_27346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (14))){
var inst_27307 = (state_27313[(2)]);
var state_27313__$1 = state_27313;
var statearr_27327_27347 = state_27313__$1;
(statearr_27327_27347[(2)] = inst_27307);

(statearr_27327_27347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (10))){
var state_27313__$1 = state_27313;
var statearr_27328_27348 = state_27313__$1;
(statearr_27328_27348[(2)] = fc);

(statearr_27328_27348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (8))){
var inst_27302 = (state_27313[(2)]);
var state_27313__$1 = state_27313;
if(cljs.core.truth_(inst_27302)){
var statearr_27329_27349 = state_27313__$1;
(statearr_27329_27349[(1)] = (12));

} else {
var statearr_27330_27350 = state_27313__$1;
(statearr_27330_27350[(1)] = (13));

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
});})(c__26886__auto___27336,tc,fc))
;
return ((function (switch__26795__auto__,c__26886__auto___27336,tc,fc){
return (function() {
var cljs$core$async$state_machine__26796__auto__ = null;
var cljs$core$async$state_machine__26796__auto____0 = (function (){
var statearr_27331 = [null,null,null,null,null,null,null,null,null];
(statearr_27331[(0)] = cljs$core$async$state_machine__26796__auto__);

(statearr_27331[(1)] = (1));

return statearr_27331;
});
var cljs$core$async$state_machine__26796__auto____1 = (function (state_27313){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_27313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e27332){if((e27332 instanceof Object)){
var ex__26799__auto__ = e27332;
var statearr_27333_27351 = state_27313;
(statearr_27333_27351[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27352 = state_27313;
state_27313 = G__27352;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
cljs$core$async$state_machine__26796__auto__ = function(state_27313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26796__auto____1.call(this,state_27313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26796__auto____0;
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26796__auto____1;
return cljs$core$async$state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto___27336,tc,fc))
})();
var state__26888__auto__ = (function (){var statearr_27334 = f__26887__auto__.call(null);
(statearr_27334[(6)] = c__26886__auto___27336);

return statearr_27334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto___27336,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto__){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto__){
return (function (state_27373){
var state_val_27374 = (state_27373[(1)]);
if((state_val_27374 === (7))){
var inst_27369 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
var statearr_27375_27393 = state_27373__$1;
(statearr_27375_27393[(2)] = inst_27369);

(statearr_27375_27393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (1))){
var inst_27353 = init;
var state_27373__$1 = (function (){var statearr_27376 = state_27373;
(statearr_27376[(7)] = inst_27353);

return statearr_27376;
})();
var statearr_27377_27394 = state_27373__$1;
(statearr_27377_27394[(2)] = null);

(statearr_27377_27394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (4))){
var inst_27356 = (state_27373[(8)]);
var inst_27356__$1 = (state_27373[(2)]);
var inst_27357 = (inst_27356__$1 == null);
var state_27373__$1 = (function (){var statearr_27378 = state_27373;
(statearr_27378[(8)] = inst_27356__$1);

return statearr_27378;
})();
if(cljs.core.truth_(inst_27357)){
var statearr_27379_27395 = state_27373__$1;
(statearr_27379_27395[(1)] = (5));

} else {
var statearr_27380_27396 = state_27373__$1;
(statearr_27380_27396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (6))){
var inst_27356 = (state_27373[(8)]);
var inst_27353 = (state_27373[(7)]);
var inst_27360 = (state_27373[(9)]);
var inst_27360__$1 = f.call(null,inst_27353,inst_27356);
var inst_27361 = cljs.core.reduced_QMARK_.call(null,inst_27360__$1);
var state_27373__$1 = (function (){var statearr_27381 = state_27373;
(statearr_27381[(9)] = inst_27360__$1);

return statearr_27381;
})();
if(inst_27361){
var statearr_27382_27397 = state_27373__$1;
(statearr_27382_27397[(1)] = (8));

} else {
var statearr_27383_27398 = state_27373__$1;
(statearr_27383_27398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (3))){
var inst_27371 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27373__$1,inst_27371);
} else {
if((state_val_27374 === (2))){
var state_27373__$1 = state_27373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27373__$1,(4),ch);
} else {
if((state_val_27374 === (9))){
var inst_27360 = (state_27373[(9)]);
var inst_27353 = inst_27360;
var state_27373__$1 = (function (){var statearr_27384 = state_27373;
(statearr_27384[(7)] = inst_27353);

return statearr_27384;
})();
var statearr_27385_27399 = state_27373__$1;
(statearr_27385_27399[(2)] = null);

(statearr_27385_27399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (5))){
var inst_27353 = (state_27373[(7)]);
var state_27373__$1 = state_27373;
var statearr_27386_27400 = state_27373__$1;
(statearr_27386_27400[(2)] = inst_27353);

(statearr_27386_27400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (10))){
var inst_27367 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
var statearr_27387_27401 = state_27373__$1;
(statearr_27387_27401[(2)] = inst_27367);

(statearr_27387_27401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (8))){
var inst_27360 = (state_27373[(9)]);
var inst_27363 = cljs.core.deref.call(null,inst_27360);
var state_27373__$1 = state_27373;
var statearr_27388_27402 = state_27373__$1;
(statearr_27388_27402[(2)] = inst_27363);

(statearr_27388_27402[(1)] = (10));


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
});})(c__26886__auto__))
;
return ((function (switch__26795__auto__,c__26886__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26796__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26796__auto____0 = (function (){
var statearr_27389 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27389[(0)] = cljs$core$async$reduce_$_state_machine__26796__auto__);

(statearr_27389[(1)] = (1));

return statearr_27389;
});
var cljs$core$async$reduce_$_state_machine__26796__auto____1 = (function (state_27373){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_27373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e27390){if((e27390 instanceof Object)){
var ex__26799__auto__ = e27390;
var statearr_27391_27403 = state_27373;
(statearr_27391_27403[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27404 = state_27373;
state_27373 = G__27404;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26796__auto__ = function(state_27373){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26796__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26796__auto____1.call(this,state_27373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26796__auto____0;
cljs$core$async$reduce_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26796__auto____1;
return cljs$core$async$reduce_$_state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto__))
})();
var state__26888__auto__ = (function (){var statearr_27392 = f__26887__auto__.call(null);
(statearr_27392[(6)] = c__26886__auto__);

return statearr_27392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto__))
);

return c__26886__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto__,f__$1){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto__,f__$1){
return (function (state_27410){
var state_val_27411 = (state_27410[(1)]);
if((state_val_27411 === (1))){
var inst_27405 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27410__$1 = state_27410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27410__$1,(2),inst_27405);
} else {
if((state_val_27411 === (2))){
var inst_27407 = (state_27410[(2)]);
var inst_27408 = f__$1.call(null,inst_27407);
var state_27410__$1 = state_27410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27410__$1,inst_27408);
} else {
return null;
}
}
});})(c__26886__auto__,f__$1))
;
return ((function (switch__26795__auto__,c__26886__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26796__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26796__auto____0 = (function (){
var statearr_27412 = [null,null,null,null,null,null,null];
(statearr_27412[(0)] = cljs$core$async$transduce_$_state_machine__26796__auto__);

(statearr_27412[(1)] = (1));

return statearr_27412;
});
var cljs$core$async$transduce_$_state_machine__26796__auto____1 = (function (state_27410){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_27410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e27413){if((e27413 instanceof Object)){
var ex__26799__auto__ = e27413;
var statearr_27414_27416 = state_27410;
(statearr_27414_27416[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27417 = state_27410;
state_27410 = G__27417;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26796__auto__ = function(state_27410){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26796__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26796__auto____1.call(this,state_27410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26796__auto____0;
cljs$core$async$transduce_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26796__auto____1;
return cljs$core$async$transduce_$_state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto__,f__$1))
})();
var state__26888__auto__ = (function (){var statearr_27415 = f__26887__auto__.call(null);
(statearr_27415[(6)] = c__26886__auto__);

return statearr_27415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto__,f__$1))
);

return c__26886__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27419 = arguments.length;
switch (G__27419) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto__){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto__){
return (function (state_27444){
var state_val_27445 = (state_27444[(1)]);
if((state_val_27445 === (7))){
var inst_27426 = (state_27444[(2)]);
var state_27444__$1 = state_27444;
var statearr_27446_27467 = state_27444__$1;
(statearr_27446_27467[(2)] = inst_27426);

(statearr_27446_27467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (1))){
var inst_27420 = cljs.core.seq.call(null,coll);
var inst_27421 = inst_27420;
var state_27444__$1 = (function (){var statearr_27447 = state_27444;
(statearr_27447[(7)] = inst_27421);

return statearr_27447;
})();
var statearr_27448_27468 = state_27444__$1;
(statearr_27448_27468[(2)] = null);

(statearr_27448_27468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (4))){
var inst_27421 = (state_27444[(7)]);
var inst_27424 = cljs.core.first.call(null,inst_27421);
var state_27444__$1 = state_27444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27444__$1,(7),ch,inst_27424);
} else {
if((state_val_27445 === (13))){
var inst_27438 = (state_27444[(2)]);
var state_27444__$1 = state_27444;
var statearr_27449_27469 = state_27444__$1;
(statearr_27449_27469[(2)] = inst_27438);

(statearr_27449_27469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (6))){
var inst_27429 = (state_27444[(2)]);
var state_27444__$1 = state_27444;
if(cljs.core.truth_(inst_27429)){
var statearr_27450_27470 = state_27444__$1;
(statearr_27450_27470[(1)] = (8));

} else {
var statearr_27451_27471 = state_27444__$1;
(statearr_27451_27471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (3))){
var inst_27442 = (state_27444[(2)]);
var state_27444__$1 = state_27444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27444__$1,inst_27442);
} else {
if((state_val_27445 === (12))){
var state_27444__$1 = state_27444;
var statearr_27452_27472 = state_27444__$1;
(statearr_27452_27472[(2)] = null);

(statearr_27452_27472[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (2))){
var inst_27421 = (state_27444[(7)]);
var state_27444__$1 = state_27444;
if(cljs.core.truth_(inst_27421)){
var statearr_27453_27473 = state_27444__$1;
(statearr_27453_27473[(1)] = (4));

} else {
var statearr_27454_27474 = state_27444__$1;
(statearr_27454_27474[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (11))){
var inst_27435 = cljs.core.async.close_BANG_.call(null,ch);
var state_27444__$1 = state_27444;
var statearr_27455_27475 = state_27444__$1;
(statearr_27455_27475[(2)] = inst_27435);

(statearr_27455_27475[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (9))){
var state_27444__$1 = state_27444;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27456_27476 = state_27444__$1;
(statearr_27456_27476[(1)] = (11));

} else {
var statearr_27457_27477 = state_27444__$1;
(statearr_27457_27477[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (5))){
var inst_27421 = (state_27444[(7)]);
var state_27444__$1 = state_27444;
var statearr_27458_27478 = state_27444__$1;
(statearr_27458_27478[(2)] = inst_27421);

(statearr_27458_27478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (10))){
var inst_27440 = (state_27444[(2)]);
var state_27444__$1 = state_27444;
var statearr_27459_27479 = state_27444__$1;
(statearr_27459_27479[(2)] = inst_27440);

(statearr_27459_27479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (8))){
var inst_27421 = (state_27444[(7)]);
var inst_27431 = cljs.core.next.call(null,inst_27421);
var inst_27421__$1 = inst_27431;
var state_27444__$1 = (function (){var statearr_27460 = state_27444;
(statearr_27460[(7)] = inst_27421__$1);

return statearr_27460;
})();
var statearr_27461_27480 = state_27444__$1;
(statearr_27461_27480[(2)] = null);

(statearr_27461_27480[(1)] = (2));


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
});})(c__26886__auto__))
;
return ((function (switch__26795__auto__,c__26886__auto__){
return (function() {
var cljs$core$async$state_machine__26796__auto__ = null;
var cljs$core$async$state_machine__26796__auto____0 = (function (){
var statearr_27462 = [null,null,null,null,null,null,null,null];
(statearr_27462[(0)] = cljs$core$async$state_machine__26796__auto__);

(statearr_27462[(1)] = (1));

return statearr_27462;
});
var cljs$core$async$state_machine__26796__auto____1 = (function (state_27444){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_27444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e27463){if((e27463 instanceof Object)){
var ex__26799__auto__ = e27463;
var statearr_27464_27481 = state_27444;
(statearr_27464_27481[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27482 = state_27444;
state_27444 = G__27482;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
cljs$core$async$state_machine__26796__auto__ = function(state_27444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26796__auto____1.call(this,state_27444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26796__auto____0;
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26796__auto____1;
return cljs$core$async$state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto__))
})();
var state__26888__auto__ = (function (){var statearr_27465 = f__26887__auto__.call(null);
(statearr_27465[(6)] = c__26886__auto__);

return statearr_27465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto__))
);

return c__26886__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27483 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27483 = (function (ch,cs,meta27484){
this.ch = ch;
this.cs = cs;
this.meta27484 = meta27484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27485,meta27484__$1){
var self__ = this;
var _27485__$1 = this;
return (new cljs.core.async.t_cljs$core$async27483(self__.ch,self__.cs,meta27484__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27483.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27485){
var self__ = this;
var _27485__$1 = this;
return self__.meta27484;
});})(cs))
;

cljs.core.async.t_cljs$core$async27483.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27483.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27483.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27483.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27483.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27483.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27483.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27484","meta27484",910768100,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27483.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27483";

cljs.core.async.t_cljs$core$async27483.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27483");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27483.
 */
cljs.core.async.__GT_t_cljs$core$async27483 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27483(ch__$1,cs__$1,meta27484){
return (new cljs.core.async.t_cljs$core$async27483(ch__$1,cs__$1,meta27484));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27483(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26886__auto___27705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto___27705,cs,m,dchan,dctr,done){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto___27705,cs,m,dchan,dctr,done){
return (function (state_27620){
var state_val_27621 = (state_27620[(1)]);
if((state_val_27621 === (7))){
var inst_27616 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
var statearr_27622_27706 = state_27620__$1;
(statearr_27622_27706[(2)] = inst_27616);

(statearr_27622_27706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (20))){
var inst_27519 = (state_27620[(7)]);
var inst_27531 = cljs.core.first.call(null,inst_27519);
var inst_27532 = cljs.core.nth.call(null,inst_27531,(0),null);
var inst_27533 = cljs.core.nth.call(null,inst_27531,(1),null);
var state_27620__$1 = (function (){var statearr_27623 = state_27620;
(statearr_27623[(8)] = inst_27532);

return statearr_27623;
})();
if(cljs.core.truth_(inst_27533)){
var statearr_27624_27707 = state_27620__$1;
(statearr_27624_27707[(1)] = (22));

} else {
var statearr_27625_27708 = state_27620__$1;
(statearr_27625_27708[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (27))){
var inst_27563 = (state_27620[(9)]);
var inst_27488 = (state_27620[(10)]);
var inst_27568 = (state_27620[(11)]);
var inst_27561 = (state_27620[(12)]);
var inst_27568__$1 = cljs.core._nth.call(null,inst_27561,inst_27563);
var inst_27569 = cljs.core.async.put_BANG_.call(null,inst_27568__$1,inst_27488,done);
var state_27620__$1 = (function (){var statearr_27626 = state_27620;
(statearr_27626[(11)] = inst_27568__$1);

return statearr_27626;
})();
if(cljs.core.truth_(inst_27569)){
var statearr_27627_27709 = state_27620__$1;
(statearr_27627_27709[(1)] = (30));

} else {
var statearr_27628_27710 = state_27620__$1;
(statearr_27628_27710[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (1))){
var state_27620__$1 = state_27620;
var statearr_27629_27711 = state_27620__$1;
(statearr_27629_27711[(2)] = null);

(statearr_27629_27711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (24))){
var inst_27519 = (state_27620[(7)]);
var inst_27538 = (state_27620[(2)]);
var inst_27539 = cljs.core.next.call(null,inst_27519);
var inst_27497 = inst_27539;
var inst_27498 = null;
var inst_27499 = (0);
var inst_27500 = (0);
var state_27620__$1 = (function (){var statearr_27630 = state_27620;
(statearr_27630[(13)] = inst_27498);

(statearr_27630[(14)] = inst_27497);

(statearr_27630[(15)] = inst_27499);

(statearr_27630[(16)] = inst_27500);

(statearr_27630[(17)] = inst_27538);

return statearr_27630;
})();
var statearr_27631_27712 = state_27620__$1;
(statearr_27631_27712[(2)] = null);

(statearr_27631_27712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (39))){
var state_27620__$1 = state_27620;
var statearr_27635_27713 = state_27620__$1;
(statearr_27635_27713[(2)] = null);

(statearr_27635_27713[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (4))){
var inst_27488 = (state_27620[(10)]);
var inst_27488__$1 = (state_27620[(2)]);
var inst_27489 = (inst_27488__$1 == null);
var state_27620__$1 = (function (){var statearr_27636 = state_27620;
(statearr_27636[(10)] = inst_27488__$1);

return statearr_27636;
})();
if(cljs.core.truth_(inst_27489)){
var statearr_27637_27714 = state_27620__$1;
(statearr_27637_27714[(1)] = (5));

} else {
var statearr_27638_27715 = state_27620__$1;
(statearr_27638_27715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (15))){
var inst_27498 = (state_27620[(13)]);
var inst_27497 = (state_27620[(14)]);
var inst_27499 = (state_27620[(15)]);
var inst_27500 = (state_27620[(16)]);
var inst_27515 = (state_27620[(2)]);
var inst_27516 = (inst_27500 + (1));
var tmp27632 = inst_27498;
var tmp27633 = inst_27497;
var tmp27634 = inst_27499;
var inst_27497__$1 = tmp27633;
var inst_27498__$1 = tmp27632;
var inst_27499__$1 = tmp27634;
var inst_27500__$1 = inst_27516;
var state_27620__$1 = (function (){var statearr_27639 = state_27620;
(statearr_27639[(18)] = inst_27515);

(statearr_27639[(13)] = inst_27498__$1);

(statearr_27639[(14)] = inst_27497__$1);

(statearr_27639[(15)] = inst_27499__$1);

(statearr_27639[(16)] = inst_27500__$1);

return statearr_27639;
})();
var statearr_27640_27716 = state_27620__$1;
(statearr_27640_27716[(2)] = null);

(statearr_27640_27716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (21))){
var inst_27542 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
var statearr_27644_27717 = state_27620__$1;
(statearr_27644_27717[(2)] = inst_27542);

(statearr_27644_27717[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (31))){
var inst_27568 = (state_27620[(11)]);
var inst_27572 = done.call(null,null);
var inst_27573 = cljs.core.async.untap_STAR_.call(null,m,inst_27568);
var state_27620__$1 = (function (){var statearr_27645 = state_27620;
(statearr_27645[(19)] = inst_27572);

return statearr_27645;
})();
var statearr_27646_27718 = state_27620__$1;
(statearr_27646_27718[(2)] = inst_27573);

(statearr_27646_27718[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (32))){
var inst_27563 = (state_27620[(9)]);
var inst_27560 = (state_27620[(20)]);
var inst_27561 = (state_27620[(12)]);
var inst_27562 = (state_27620[(21)]);
var inst_27575 = (state_27620[(2)]);
var inst_27576 = (inst_27563 + (1));
var tmp27641 = inst_27560;
var tmp27642 = inst_27561;
var tmp27643 = inst_27562;
var inst_27560__$1 = tmp27641;
var inst_27561__$1 = tmp27642;
var inst_27562__$1 = tmp27643;
var inst_27563__$1 = inst_27576;
var state_27620__$1 = (function (){var statearr_27647 = state_27620;
(statearr_27647[(9)] = inst_27563__$1);

(statearr_27647[(20)] = inst_27560__$1);

(statearr_27647[(12)] = inst_27561__$1);

(statearr_27647[(22)] = inst_27575);

(statearr_27647[(21)] = inst_27562__$1);

return statearr_27647;
})();
var statearr_27648_27719 = state_27620__$1;
(statearr_27648_27719[(2)] = null);

(statearr_27648_27719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (40))){
var inst_27588 = (state_27620[(23)]);
var inst_27592 = done.call(null,null);
var inst_27593 = cljs.core.async.untap_STAR_.call(null,m,inst_27588);
var state_27620__$1 = (function (){var statearr_27649 = state_27620;
(statearr_27649[(24)] = inst_27592);

return statearr_27649;
})();
var statearr_27650_27720 = state_27620__$1;
(statearr_27650_27720[(2)] = inst_27593);

(statearr_27650_27720[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (33))){
var inst_27579 = (state_27620[(25)]);
var inst_27581 = cljs.core.chunked_seq_QMARK_.call(null,inst_27579);
var state_27620__$1 = state_27620;
if(inst_27581){
var statearr_27651_27721 = state_27620__$1;
(statearr_27651_27721[(1)] = (36));

} else {
var statearr_27652_27722 = state_27620__$1;
(statearr_27652_27722[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (13))){
var inst_27509 = (state_27620[(26)]);
var inst_27512 = cljs.core.async.close_BANG_.call(null,inst_27509);
var state_27620__$1 = state_27620;
var statearr_27653_27723 = state_27620__$1;
(statearr_27653_27723[(2)] = inst_27512);

(statearr_27653_27723[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (22))){
var inst_27532 = (state_27620[(8)]);
var inst_27535 = cljs.core.async.close_BANG_.call(null,inst_27532);
var state_27620__$1 = state_27620;
var statearr_27654_27724 = state_27620__$1;
(statearr_27654_27724[(2)] = inst_27535);

(statearr_27654_27724[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (36))){
var inst_27579 = (state_27620[(25)]);
var inst_27583 = cljs.core.chunk_first.call(null,inst_27579);
var inst_27584 = cljs.core.chunk_rest.call(null,inst_27579);
var inst_27585 = cljs.core.count.call(null,inst_27583);
var inst_27560 = inst_27584;
var inst_27561 = inst_27583;
var inst_27562 = inst_27585;
var inst_27563 = (0);
var state_27620__$1 = (function (){var statearr_27655 = state_27620;
(statearr_27655[(9)] = inst_27563);

(statearr_27655[(20)] = inst_27560);

(statearr_27655[(12)] = inst_27561);

(statearr_27655[(21)] = inst_27562);

return statearr_27655;
})();
var statearr_27656_27725 = state_27620__$1;
(statearr_27656_27725[(2)] = null);

(statearr_27656_27725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (41))){
var inst_27579 = (state_27620[(25)]);
var inst_27595 = (state_27620[(2)]);
var inst_27596 = cljs.core.next.call(null,inst_27579);
var inst_27560 = inst_27596;
var inst_27561 = null;
var inst_27562 = (0);
var inst_27563 = (0);
var state_27620__$1 = (function (){var statearr_27657 = state_27620;
(statearr_27657[(9)] = inst_27563);

(statearr_27657[(20)] = inst_27560);

(statearr_27657[(12)] = inst_27561);

(statearr_27657[(27)] = inst_27595);

(statearr_27657[(21)] = inst_27562);

return statearr_27657;
})();
var statearr_27658_27726 = state_27620__$1;
(statearr_27658_27726[(2)] = null);

(statearr_27658_27726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (43))){
var state_27620__$1 = state_27620;
var statearr_27659_27727 = state_27620__$1;
(statearr_27659_27727[(2)] = null);

(statearr_27659_27727[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (29))){
var inst_27604 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
var statearr_27660_27728 = state_27620__$1;
(statearr_27660_27728[(2)] = inst_27604);

(statearr_27660_27728[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (44))){
var inst_27613 = (state_27620[(2)]);
var state_27620__$1 = (function (){var statearr_27661 = state_27620;
(statearr_27661[(28)] = inst_27613);

return statearr_27661;
})();
var statearr_27662_27729 = state_27620__$1;
(statearr_27662_27729[(2)] = null);

(statearr_27662_27729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (6))){
var inst_27552 = (state_27620[(29)]);
var inst_27551 = cljs.core.deref.call(null,cs);
var inst_27552__$1 = cljs.core.keys.call(null,inst_27551);
var inst_27553 = cljs.core.count.call(null,inst_27552__$1);
var inst_27554 = cljs.core.reset_BANG_.call(null,dctr,inst_27553);
var inst_27559 = cljs.core.seq.call(null,inst_27552__$1);
var inst_27560 = inst_27559;
var inst_27561 = null;
var inst_27562 = (0);
var inst_27563 = (0);
var state_27620__$1 = (function (){var statearr_27663 = state_27620;
(statearr_27663[(29)] = inst_27552__$1);

(statearr_27663[(9)] = inst_27563);

(statearr_27663[(20)] = inst_27560);

(statearr_27663[(12)] = inst_27561);

(statearr_27663[(30)] = inst_27554);

(statearr_27663[(21)] = inst_27562);

return statearr_27663;
})();
var statearr_27664_27730 = state_27620__$1;
(statearr_27664_27730[(2)] = null);

(statearr_27664_27730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (28))){
var inst_27579 = (state_27620[(25)]);
var inst_27560 = (state_27620[(20)]);
var inst_27579__$1 = cljs.core.seq.call(null,inst_27560);
var state_27620__$1 = (function (){var statearr_27665 = state_27620;
(statearr_27665[(25)] = inst_27579__$1);

return statearr_27665;
})();
if(inst_27579__$1){
var statearr_27666_27731 = state_27620__$1;
(statearr_27666_27731[(1)] = (33));

} else {
var statearr_27667_27732 = state_27620__$1;
(statearr_27667_27732[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (25))){
var inst_27563 = (state_27620[(9)]);
var inst_27562 = (state_27620[(21)]);
var inst_27565 = (inst_27563 < inst_27562);
var inst_27566 = inst_27565;
var state_27620__$1 = state_27620;
if(cljs.core.truth_(inst_27566)){
var statearr_27668_27733 = state_27620__$1;
(statearr_27668_27733[(1)] = (27));

} else {
var statearr_27669_27734 = state_27620__$1;
(statearr_27669_27734[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (34))){
var state_27620__$1 = state_27620;
var statearr_27670_27735 = state_27620__$1;
(statearr_27670_27735[(2)] = null);

(statearr_27670_27735[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (17))){
var state_27620__$1 = state_27620;
var statearr_27671_27736 = state_27620__$1;
(statearr_27671_27736[(2)] = null);

(statearr_27671_27736[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (3))){
var inst_27618 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27620__$1,inst_27618);
} else {
if((state_val_27621 === (12))){
var inst_27547 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
var statearr_27672_27737 = state_27620__$1;
(statearr_27672_27737[(2)] = inst_27547);

(statearr_27672_27737[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (2))){
var state_27620__$1 = state_27620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27620__$1,(4),ch);
} else {
if((state_val_27621 === (23))){
var state_27620__$1 = state_27620;
var statearr_27673_27738 = state_27620__$1;
(statearr_27673_27738[(2)] = null);

(statearr_27673_27738[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (35))){
var inst_27602 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
var statearr_27674_27739 = state_27620__$1;
(statearr_27674_27739[(2)] = inst_27602);

(statearr_27674_27739[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (19))){
var inst_27519 = (state_27620[(7)]);
var inst_27523 = cljs.core.chunk_first.call(null,inst_27519);
var inst_27524 = cljs.core.chunk_rest.call(null,inst_27519);
var inst_27525 = cljs.core.count.call(null,inst_27523);
var inst_27497 = inst_27524;
var inst_27498 = inst_27523;
var inst_27499 = inst_27525;
var inst_27500 = (0);
var state_27620__$1 = (function (){var statearr_27675 = state_27620;
(statearr_27675[(13)] = inst_27498);

(statearr_27675[(14)] = inst_27497);

(statearr_27675[(15)] = inst_27499);

(statearr_27675[(16)] = inst_27500);

return statearr_27675;
})();
var statearr_27676_27740 = state_27620__$1;
(statearr_27676_27740[(2)] = null);

(statearr_27676_27740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (11))){
var inst_27497 = (state_27620[(14)]);
var inst_27519 = (state_27620[(7)]);
var inst_27519__$1 = cljs.core.seq.call(null,inst_27497);
var state_27620__$1 = (function (){var statearr_27677 = state_27620;
(statearr_27677[(7)] = inst_27519__$1);

return statearr_27677;
})();
if(inst_27519__$1){
var statearr_27678_27741 = state_27620__$1;
(statearr_27678_27741[(1)] = (16));

} else {
var statearr_27679_27742 = state_27620__$1;
(statearr_27679_27742[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (9))){
var inst_27549 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
var statearr_27680_27743 = state_27620__$1;
(statearr_27680_27743[(2)] = inst_27549);

(statearr_27680_27743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (5))){
var inst_27495 = cljs.core.deref.call(null,cs);
var inst_27496 = cljs.core.seq.call(null,inst_27495);
var inst_27497 = inst_27496;
var inst_27498 = null;
var inst_27499 = (0);
var inst_27500 = (0);
var state_27620__$1 = (function (){var statearr_27681 = state_27620;
(statearr_27681[(13)] = inst_27498);

(statearr_27681[(14)] = inst_27497);

(statearr_27681[(15)] = inst_27499);

(statearr_27681[(16)] = inst_27500);

return statearr_27681;
})();
var statearr_27682_27744 = state_27620__$1;
(statearr_27682_27744[(2)] = null);

(statearr_27682_27744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (14))){
var state_27620__$1 = state_27620;
var statearr_27683_27745 = state_27620__$1;
(statearr_27683_27745[(2)] = null);

(statearr_27683_27745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (45))){
var inst_27610 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
var statearr_27684_27746 = state_27620__$1;
(statearr_27684_27746[(2)] = inst_27610);

(statearr_27684_27746[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (26))){
var inst_27552 = (state_27620[(29)]);
var inst_27606 = (state_27620[(2)]);
var inst_27607 = cljs.core.seq.call(null,inst_27552);
var state_27620__$1 = (function (){var statearr_27685 = state_27620;
(statearr_27685[(31)] = inst_27606);

return statearr_27685;
})();
if(inst_27607){
var statearr_27686_27747 = state_27620__$1;
(statearr_27686_27747[(1)] = (42));

} else {
var statearr_27687_27748 = state_27620__$1;
(statearr_27687_27748[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (16))){
var inst_27519 = (state_27620[(7)]);
var inst_27521 = cljs.core.chunked_seq_QMARK_.call(null,inst_27519);
var state_27620__$1 = state_27620;
if(inst_27521){
var statearr_27688_27749 = state_27620__$1;
(statearr_27688_27749[(1)] = (19));

} else {
var statearr_27689_27750 = state_27620__$1;
(statearr_27689_27750[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (38))){
var inst_27599 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
var statearr_27690_27751 = state_27620__$1;
(statearr_27690_27751[(2)] = inst_27599);

(statearr_27690_27751[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (30))){
var state_27620__$1 = state_27620;
var statearr_27691_27752 = state_27620__$1;
(statearr_27691_27752[(2)] = null);

(statearr_27691_27752[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (10))){
var inst_27498 = (state_27620[(13)]);
var inst_27500 = (state_27620[(16)]);
var inst_27508 = cljs.core._nth.call(null,inst_27498,inst_27500);
var inst_27509 = cljs.core.nth.call(null,inst_27508,(0),null);
var inst_27510 = cljs.core.nth.call(null,inst_27508,(1),null);
var state_27620__$1 = (function (){var statearr_27692 = state_27620;
(statearr_27692[(26)] = inst_27509);

return statearr_27692;
})();
if(cljs.core.truth_(inst_27510)){
var statearr_27693_27753 = state_27620__$1;
(statearr_27693_27753[(1)] = (13));

} else {
var statearr_27694_27754 = state_27620__$1;
(statearr_27694_27754[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (18))){
var inst_27545 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
var statearr_27695_27755 = state_27620__$1;
(statearr_27695_27755[(2)] = inst_27545);

(statearr_27695_27755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (42))){
var state_27620__$1 = state_27620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27620__$1,(45),dchan);
} else {
if((state_val_27621 === (37))){
var inst_27579 = (state_27620[(25)]);
var inst_27588 = (state_27620[(23)]);
var inst_27488 = (state_27620[(10)]);
var inst_27588__$1 = cljs.core.first.call(null,inst_27579);
var inst_27589 = cljs.core.async.put_BANG_.call(null,inst_27588__$1,inst_27488,done);
var state_27620__$1 = (function (){var statearr_27696 = state_27620;
(statearr_27696[(23)] = inst_27588__$1);

return statearr_27696;
})();
if(cljs.core.truth_(inst_27589)){
var statearr_27697_27756 = state_27620__$1;
(statearr_27697_27756[(1)] = (39));

} else {
var statearr_27698_27757 = state_27620__$1;
(statearr_27698_27757[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (8))){
var inst_27499 = (state_27620[(15)]);
var inst_27500 = (state_27620[(16)]);
var inst_27502 = (inst_27500 < inst_27499);
var inst_27503 = inst_27502;
var state_27620__$1 = state_27620;
if(cljs.core.truth_(inst_27503)){
var statearr_27699_27758 = state_27620__$1;
(statearr_27699_27758[(1)] = (10));

} else {
var statearr_27700_27759 = state_27620__$1;
(statearr_27700_27759[(1)] = (11));

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
});})(c__26886__auto___27705,cs,m,dchan,dctr,done))
;
return ((function (switch__26795__auto__,c__26886__auto___27705,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26796__auto__ = null;
var cljs$core$async$mult_$_state_machine__26796__auto____0 = (function (){
var statearr_27701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27701[(0)] = cljs$core$async$mult_$_state_machine__26796__auto__);

(statearr_27701[(1)] = (1));

return statearr_27701;
});
var cljs$core$async$mult_$_state_machine__26796__auto____1 = (function (state_27620){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_27620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e27702){if((e27702 instanceof Object)){
var ex__26799__auto__ = e27702;
var statearr_27703_27760 = state_27620;
(statearr_27703_27760[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27761 = state_27620;
state_27620 = G__27761;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26796__auto__ = function(state_27620){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26796__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26796__auto____1.call(this,state_27620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26796__auto____0;
cljs$core$async$mult_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26796__auto____1;
return cljs$core$async$mult_$_state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto___27705,cs,m,dchan,dctr,done))
})();
var state__26888__auto__ = (function (){var statearr_27704 = f__26887__auto__.call(null);
(statearr_27704[(6)] = c__26886__auto___27705);

return statearr_27704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto___27705,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27763 = arguments.length;
switch (G__27763) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___27775 = arguments.length;
var i__4532__auto___27776 = (0);
while(true){
if((i__4532__auto___27776 < len__4531__auto___27775)){
args__4534__auto__.push((arguments[i__4532__auto___27776]));

var G__27777 = (i__4532__auto___27776 + (1));
i__4532__auto___27776 = G__27777;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27769){
var map__27770 = p__27769;
var map__27770__$1 = ((((!((map__27770 == null)))?(((((map__27770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27770):map__27770);
var opts = map__27770__$1;
var statearr_27772_27778 = state;
(statearr_27772_27778[(1)] = cont_block);


var temp__5635__auto__ = cljs.core.async.do_alts.call(null,((function (map__27770,map__27770__$1,opts){
return (function (val){
var statearr_27773_27779 = state;
(statearr_27773_27779[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27770,map__27770__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5635__auto__)){
var cb = temp__5635__auto__;
var statearr_27774_27780 = state;
(statearr_27774_27780[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27765){
var G__27766 = cljs.core.first.call(null,seq27765);
var seq27765__$1 = cljs.core.next.call(null,seq27765);
var G__27767 = cljs.core.first.call(null,seq27765__$1);
var seq27765__$2 = cljs.core.next.call(null,seq27765__$1);
var G__27768 = cljs.core.first.call(null,seq27765__$2);
var seq27765__$3 = cljs.core.next.call(null,seq27765__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27766,G__27767,G__27768,seq27765__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27781 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27781 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27782){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27782 = meta27782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27783,meta27782__$1){
var self__ = this;
var _27783__$1 = this;
return (new cljs.core.async.t_cljs$core$async27781(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27782__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27781.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27783){
var self__ = this;
var _27783__$1 = this;
return self__.meta27782;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27781.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27781.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27781.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27781.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27781.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27781.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27781.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27781.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27781.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27782","meta27782",2103760842,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27781.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27781";

cljs.core.async.t_cljs$core$async27781.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27781");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27781.
 */
cljs.core.async.__GT_t_cljs$core$async27781 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27781(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27782){
return (new cljs.core.async.t_cljs$core$async27781(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27782));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27781(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26886__auto___27945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto___27945,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto___27945,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27885){
var state_val_27886 = (state_27885[(1)]);
if((state_val_27886 === (7))){
var inst_27800 = (state_27885[(2)]);
var state_27885__$1 = state_27885;
var statearr_27887_27946 = state_27885__$1;
(statearr_27887_27946[(2)] = inst_27800);

(statearr_27887_27946[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (20))){
var inst_27812 = (state_27885[(7)]);
var state_27885__$1 = state_27885;
var statearr_27888_27947 = state_27885__$1;
(statearr_27888_27947[(2)] = inst_27812);

(statearr_27888_27947[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (27))){
var state_27885__$1 = state_27885;
var statearr_27889_27948 = state_27885__$1;
(statearr_27889_27948[(2)] = null);

(statearr_27889_27948[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (1))){
var inst_27787 = (state_27885[(8)]);
var inst_27787__$1 = calc_state.call(null);
var inst_27789 = (inst_27787__$1 == null);
var inst_27790 = cljs.core.not.call(null,inst_27789);
var state_27885__$1 = (function (){var statearr_27890 = state_27885;
(statearr_27890[(8)] = inst_27787__$1);

return statearr_27890;
})();
if(inst_27790){
var statearr_27891_27949 = state_27885__$1;
(statearr_27891_27949[(1)] = (2));

} else {
var statearr_27892_27950 = state_27885__$1;
(statearr_27892_27950[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (24))){
var inst_27836 = (state_27885[(9)]);
var inst_27859 = (state_27885[(10)]);
var inst_27845 = (state_27885[(11)]);
var inst_27859__$1 = inst_27836.call(null,inst_27845);
var state_27885__$1 = (function (){var statearr_27893 = state_27885;
(statearr_27893[(10)] = inst_27859__$1);

return statearr_27893;
})();
if(cljs.core.truth_(inst_27859__$1)){
var statearr_27894_27951 = state_27885__$1;
(statearr_27894_27951[(1)] = (29));

} else {
var statearr_27895_27952 = state_27885__$1;
(statearr_27895_27952[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (4))){
var inst_27803 = (state_27885[(2)]);
var state_27885__$1 = state_27885;
if(cljs.core.truth_(inst_27803)){
var statearr_27896_27953 = state_27885__$1;
(statearr_27896_27953[(1)] = (8));

} else {
var statearr_27897_27954 = state_27885__$1;
(statearr_27897_27954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (15))){
var inst_27830 = (state_27885[(2)]);
var state_27885__$1 = state_27885;
if(cljs.core.truth_(inst_27830)){
var statearr_27898_27955 = state_27885__$1;
(statearr_27898_27955[(1)] = (19));

} else {
var statearr_27899_27956 = state_27885__$1;
(statearr_27899_27956[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (21))){
var inst_27835 = (state_27885[(12)]);
var inst_27835__$1 = (state_27885[(2)]);
var inst_27836 = cljs.core.get.call(null,inst_27835__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27837 = cljs.core.get.call(null,inst_27835__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27838 = cljs.core.get.call(null,inst_27835__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27885__$1 = (function (){var statearr_27900 = state_27885;
(statearr_27900[(9)] = inst_27836);

(statearr_27900[(13)] = inst_27837);

(statearr_27900[(12)] = inst_27835__$1);

return statearr_27900;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27885__$1,(22),inst_27838);
} else {
if((state_val_27886 === (31))){
var inst_27867 = (state_27885[(2)]);
var state_27885__$1 = state_27885;
if(cljs.core.truth_(inst_27867)){
var statearr_27901_27957 = state_27885__$1;
(statearr_27901_27957[(1)] = (32));

} else {
var statearr_27902_27958 = state_27885__$1;
(statearr_27902_27958[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (32))){
var inst_27844 = (state_27885[(14)]);
var state_27885__$1 = state_27885;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27885__$1,(35),out,inst_27844);
} else {
if((state_val_27886 === (33))){
var inst_27835 = (state_27885[(12)]);
var inst_27812 = inst_27835;
var state_27885__$1 = (function (){var statearr_27903 = state_27885;
(statearr_27903[(7)] = inst_27812);

return statearr_27903;
})();
var statearr_27904_27959 = state_27885__$1;
(statearr_27904_27959[(2)] = null);

(statearr_27904_27959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (13))){
var inst_27812 = (state_27885[(7)]);
var inst_27819 = inst_27812.cljs$lang$protocol_mask$partition0$;
var inst_27820 = (inst_27819 & (64));
var inst_27821 = inst_27812.cljs$core$ISeq$;
var inst_27822 = (cljs.core.PROTOCOL_SENTINEL === inst_27821);
var inst_27823 = ((inst_27820) || (inst_27822));
var state_27885__$1 = state_27885;
if(cljs.core.truth_(inst_27823)){
var statearr_27905_27960 = state_27885__$1;
(statearr_27905_27960[(1)] = (16));

} else {
var statearr_27906_27961 = state_27885__$1;
(statearr_27906_27961[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (22))){
var inst_27844 = (state_27885[(14)]);
var inst_27845 = (state_27885[(11)]);
var inst_27843 = (state_27885[(2)]);
var inst_27844__$1 = cljs.core.nth.call(null,inst_27843,(0),null);
var inst_27845__$1 = cljs.core.nth.call(null,inst_27843,(1),null);
var inst_27846 = (inst_27844__$1 == null);
var inst_27847 = cljs.core._EQ_.call(null,inst_27845__$1,change);
var inst_27848 = ((inst_27846) || (inst_27847));
var state_27885__$1 = (function (){var statearr_27907 = state_27885;
(statearr_27907[(14)] = inst_27844__$1);

(statearr_27907[(11)] = inst_27845__$1);

return statearr_27907;
})();
if(cljs.core.truth_(inst_27848)){
var statearr_27908_27962 = state_27885__$1;
(statearr_27908_27962[(1)] = (23));

} else {
var statearr_27909_27963 = state_27885__$1;
(statearr_27909_27963[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (36))){
var inst_27835 = (state_27885[(12)]);
var inst_27812 = inst_27835;
var state_27885__$1 = (function (){var statearr_27910 = state_27885;
(statearr_27910[(7)] = inst_27812);

return statearr_27910;
})();
var statearr_27911_27964 = state_27885__$1;
(statearr_27911_27964[(2)] = null);

(statearr_27911_27964[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (29))){
var inst_27859 = (state_27885[(10)]);
var state_27885__$1 = state_27885;
var statearr_27912_27965 = state_27885__$1;
(statearr_27912_27965[(2)] = inst_27859);

(statearr_27912_27965[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (6))){
var state_27885__$1 = state_27885;
var statearr_27913_27966 = state_27885__$1;
(statearr_27913_27966[(2)] = false);

(statearr_27913_27966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (28))){
var inst_27855 = (state_27885[(2)]);
var inst_27856 = calc_state.call(null);
var inst_27812 = inst_27856;
var state_27885__$1 = (function (){var statearr_27914 = state_27885;
(statearr_27914[(15)] = inst_27855);

(statearr_27914[(7)] = inst_27812);

return statearr_27914;
})();
var statearr_27915_27967 = state_27885__$1;
(statearr_27915_27967[(2)] = null);

(statearr_27915_27967[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (25))){
var inst_27881 = (state_27885[(2)]);
var state_27885__$1 = state_27885;
var statearr_27916_27968 = state_27885__$1;
(statearr_27916_27968[(2)] = inst_27881);

(statearr_27916_27968[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (34))){
var inst_27879 = (state_27885[(2)]);
var state_27885__$1 = state_27885;
var statearr_27917_27969 = state_27885__$1;
(statearr_27917_27969[(2)] = inst_27879);

(statearr_27917_27969[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (17))){
var state_27885__$1 = state_27885;
var statearr_27918_27970 = state_27885__$1;
(statearr_27918_27970[(2)] = false);

(statearr_27918_27970[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (3))){
var state_27885__$1 = state_27885;
var statearr_27919_27971 = state_27885__$1;
(statearr_27919_27971[(2)] = false);

(statearr_27919_27971[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (12))){
var inst_27883 = (state_27885[(2)]);
var state_27885__$1 = state_27885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27885__$1,inst_27883);
} else {
if((state_val_27886 === (2))){
var inst_27787 = (state_27885[(8)]);
var inst_27792 = inst_27787.cljs$lang$protocol_mask$partition0$;
var inst_27793 = (inst_27792 & (64));
var inst_27794 = inst_27787.cljs$core$ISeq$;
var inst_27795 = (cljs.core.PROTOCOL_SENTINEL === inst_27794);
var inst_27796 = ((inst_27793) || (inst_27795));
var state_27885__$1 = state_27885;
if(cljs.core.truth_(inst_27796)){
var statearr_27920_27972 = state_27885__$1;
(statearr_27920_27972[(1)] = (5));

} else {
var statearr_27921_27973 = state_27885__$1;
(statearr_27921_27973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (23))){
var inst_27844 = (state_27885[(14)]);
var inst_27850 = (inst_27844 == null);
var state_27885__$1 = state_27885;
if(cljs.core.truth_(inst_27850)){
var statearr_27922_27974 = state_27885__$1;
(statearr_27922_27974[(1)] = (26));

} else {
var statearr_27923_27975 = state_27885__$1;
(statearr_27923_27975[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (35))){
var inst_27870 = (state_27885[(2)]);
var state_27885__$1 = state_27885;
if(cljs.core.truth_(inst_27870)){
var statearr_27924_27976 = state_27885__$1;
(statearr_27924_27976[(1)] = (36));

} else {
var statearr_27925_27977 = state_27885__$1;
(statearr_27925_27977[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (19))){
var inst_27812 = (state_27885[(7)]);
var inst_27832 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27812);
var state_27885__$1 = state_27885;
var statearr_27926_27978 = state_27885__$1;
(statearr_27926_27978[(2)] = inst_27832);

(statearr_27926_27978[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (11))){
var inst_27812 = (state_27885[(7)]);
var inst_27816 = (inst_27812 == null);
var inst_27817 = cljs.core.not.call(null,inst_27816);
var state_27885__$1 = state_27885;
if(inst_27817){
var statearr_27927_27979 = state_27885__$1;
(statearr_27927_27979[(1)] = (13));

} else {
var statearr_27928_27980 = state_27885__$1;
(statearr_27928_27980[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (9))){
var inst_27787 = (state_27885[(8)]);
var state_27885__$1 = state_27885;
var statearr_27929_27981 = state_27885__$1;
(statearr_27929_27981[(2)] = inst_27787);

(statearr_27929_27981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (5))){
var state_27885__$1 = state_27885;
var statearr_27930_27982 = state_27885__$1;
(statearr_27930_27982[(2)] = true);

(statearr_27930_27982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (14))){
var state_27885__$1 = state_27885;
var statearr_27931_27983 = state_27885__$1;
(statearr_27931_27983[(2)] = false);

(statearr_27931_27983[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (26))){
var inst_27845 = (state_27885[(11)]);
var inst_27852 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27845);
var state_27885__$1 = state_27885;
var statearr_27932_27984 = state_27885__$1;
(statearr_27932_27984[(2)] = inst_27852);

(statearr_27932_27984[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (16))){
var state_27885__$1 = state_27885;
var statearr_27933_27985 = state_27885__$1;
(statearr_27933_27985[(2)] = true);

(statearr_27933_27985[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (38))){
var inst_27875 = (state_27885[(2)]);
var state_27885__$1 = state_27885;
var statearr_27934_27986 = state_27885__$1;
(statearr_27934_27986[(2)] = inst_27875);

(statearr_27934_27986[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (30))){
var inst_27836 = (state_27885[(9)]);
var inst_27837 = (state_27885[(13)]);
var inst_27845 = (state_27885[(11)]);
var inst_27862 = cljs.core.empty_QMARK_.call(null,inst_27836);
var inst_27863 = inst_27837.call(null,inst_27845);
var inst_27864 = cljs.core.not.call(null,inst_27863);
var inst_27865 = ((inst_27862) && (inst_27864));
var state_27885__$1 = state_27885;
var statearr_27935_27987 = state_27885__$1;
(statearr_27935_27987[(2)] = inst_27865);

(statearr_27935_27987[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (10))){
var inst_27787 = (state_27885[(8)]);
var inst_27808 = (state_27885[(2)]);
var inst_27809 = cljs.core.get.call(null,inst_27808,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27810 = cljs.core.get.call(null,inst_27808,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27811 = cljs.core.get.call(null,inst_27808,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27812 = inst_27787;
var state_27885__$1 = (function (){var statearr_27936 = state_27885;
(statearr_27936[(16)] = inst_27811);

(statearr_27936[(17)] = inst_27810);

(statearr_27936[(18)] = inst_27809);

(statearr_27936[(7)] = inst_27812);

return statearr_27936;
})();
var statearr_27937_27988 = state_27885__$1;
(statearr_27937_27988[(2)] = null);

(statearr_27937_27988[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (18))){
var inst_27827 = (state_27885[(2)]);
var state_27885__$1 = state_27885;
var statearr_27938_27989 = state_27885__$1;
(statearr_27938_27989[(2)] = inst_27827);

(statearr_27938_27989[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (37))){
var state_27885__$1 = state_27885;
var statearr_27939_27990 = state_27885__$1;
(statearr_27939_27990[(2)] = null);

(statearr_27939_27990[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (8))){
var inst_27787 = (state_27885[(8)]);
var inst_27805 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27787);
var state_27885__$1 = state_27885;
var statearr_27940_27991 = state_27885__$1;
(statearr_27940_27991[(2)] = inst_27805);

(statearr_27940_27991[(1)] = (10));


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
});})(c__26886__auto___27945,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26795__auto__,c__26886__auto___27945,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26796__auto__ = null;
var cljs$core$async$mix_$_state_machine__26796__auto____0 = (function (){
var statearr_27941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27941[(0)] = cljs$core$async$mix_$_state_machine__26796__auto__);

(statearr_27941[(1)] = (1));

return statearr_27941;
});
var cljs$core$async$mix_$_state_machine__26796__auto____1 = (function (state_27885){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_27885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e27942){if((e27942 instanceof Object)){
var ex__26799__auto__ = e27942;
var statearr_27943_27992 = state_27885;
(statearr_27943_27992[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27993 = state_27885;
state_27885 = G__27993;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26796__auto__ = function(state_27885){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26796__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26796__auto____1.call(this,state_27885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26796__auto____0;
cljs$core$async$mix_$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26796__auto____1;
return cljs$core$async$mix_$_state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto___27945,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26888__auto__ = (function (){var statearr_27944 = f__26887__auto__.call(null);
(statearr_27944[(6)] = c__26886__auto___27945);

return statearr_27944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto___27945,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27995 = arguments.length;
switch (G__27995) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__27999 = arguments.length;
switch (G__27999) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__27997_SHARP_){
if(cljs.core.truth_(p1__27997_SHARP_.call(null,topic))){
return p1__27997_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27997_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28000 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28000 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28001){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28001 = meta28001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28002,meta28001__$1){
var self__ = this;
var _28002__$1 = this;
return (new cljs.core.async.t_cljs$core$async28000(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28001__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28002){
var self__ = this;
var _28002__$1 = this;
return self__.meta28001;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5635__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5635__auto__)){
var m = temp__5635__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28000.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28001","meta28001",-1778862633,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28000.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28000";

cljs.core.async.t_cljs$core$async28000.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28000");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28000.
 */
cljs.core.async.__GT_t_cljs$core$async28000 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28000(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28001){
return (new cljs.core.async.t_cljs$core$async28000(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28001));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28000(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26886__auto___28120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto___28120,mults,ensure_mult,p){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto___28120,mults,ensure_mult,p){
return (function (state_28074){
var state_val_28075 = (state_28074[(1)]);
if((state_val_28075 === (7))){
var inst_28070 = (state_28074[(2)]);
var state_28074__$1 = state_28074;
var statearr_28076_28121 = state_28074__$1;
(statearr_28076_28121[(2)] = inst_28070);

(statearr_28076_28121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (20))){
var state_28074__$1 = state_28074;
var statearr_28077_28122 = state_28074__$1;
(statearr_28077_28122[(2)] = null);

(statearr_28077_28122[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (1))){
var state_28074__$1 = state_28074;
var statearr_28078_28123 = state_28074__$1;
(statearr_28078_28123[(2)] = null);

(statearr_28078_28123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (24))){
var inst_28053 = (state_28074[(7)]);
var inst_28062 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28053);
var state_28074__$1 = state_28074;
var statearr_28079_28124 = state_28074__$1;
(statearr_28079_28124[(2)] = inst_28062);

(statearr_28079_28124[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (4))){
var inst_28005 = (state_28074[(8)]);
var inst_28005__$1 = (state_28074[(2)]);
var inst_28006 = (inst_28005__$1 == null);
var state_28074__$1 = (function (){var statearr_28080 = state_28074;
(statearr_28080[(8)] = inst_28005__$1);

return statearr_28080;
})();
if(cljs.core.truth_(inst_28006)){
var statearr_28081_28125 = state_28074__$1;
(statearr_28081_28125[(1)] = (5));

} else {
var statearr_28082_28126 = state_28074__$1;
(statearr_28082_28126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (15))){
var inst_28047 = (state_28074[(2)]);
var state_28074__$1 = state_28074;
var statearr_28083_28127 = state_28074__$1;
(statearr_28083_28127[(2)] = inst_28047);

(statearr_28083_28127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (21))){
var inst_28067 = (state_28074[(2)]);
var state_28074__$1 = (function (){var statearr_28084 = state_28074;
(statearr_28084[(9)] = inst_28067);

return statearr_28084;
})();
var statearr_28085_28128 = state_28074__$1;
(statearr_28085_28128[(2)] = null);

(statearr_28085_28128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (13))){
var inst_28029 = (state_28074[(10)]);
var inst_28031 = cljs.core.chunked_seq_QMARK_.call(null,inst_28029);
var state_28074__$1 = state_28074;
if(inst_28031){
var statearr_28086_28129 = state_28074__$1;
(statearr_28086_28129[(1)] = (16));

} else {
var statearr_28087_28130 = state_28074__$1;
(statearr_28087_28130[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (22))){
var inst_28059 = (state_28074[(2)]);
var state_28074__$1 = state_28074;
if(cljs.core.truth_(inst_28059)){
var statearr_28088_28131 = state_28074__$1;
(statearr_28088_28131[(1)] = (23));

} else {
var statearr_28089_28132 = state_28074__$1;
(statearr_28089_28132[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (6))){
var inst_28053 = (state_28074[(7)]);
var inst_28055 = (state_28074[(11)]);
var inst_28005 = (state_28074[(8)]);
var inst_28053__$1 = topic_fn.call(null,inst_28005);
var inst_28054 = cljs.core.deref.call(null,mults);
var inst_28055__$1 = cljs.core.get.call(null,inst_28054,inst_28053__$1);
var state_28074__$1 = (function (){var statearr_28090 = state_28074;
(statearr_28090[(7)] = inst_28053__$1);

(statearr_28090[(11)] = inst_28055__$1);

return statearr_28090;
})();
if(cljs.core.truth_(inst_28055__$1)){
var statearr_28091_28133 = state_28074__$1;
(statearr_28091_28133[(1)] = (19));

} else {
var statearr_28092_28134 = state_28074__$1;
(statearr_28092_28134[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (25))){
var inst_28064 = (state_28074[(2)]);
var state_28074__$1 = state_28074;
var statearr_28093_28135 = state_28074__$1;
(statearr_28093_28135[(2)] = inst_28064);

(statearr_28093_28135[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (17))){
var inst_28029 = (state_28074[(10)]);
var inst_28038 = cljs.core.first.call(null,inst_28029);
var inst_28039 = cljs.core.async.muxch_STAR_.call(null,inst_28038);
var inst_28040 = cljs.core.async.close_BANG_.call(null,inst_28039);
var inst_28041 = cljs.core.next.call(null,inst_28029);
var inst_28015 = inst_28041;
var inst_28016 = null;
var inst_28017 = (0);
var inst_28018 = (0);
var state_28074__$1 = (function (){var statearr_28094 = state_28074;
(statearr_28094[(12)] = inst_28018);

(statearr_28094[(13)] = inst_28017);

(statearr_28094[(14)] = inst_28015);

(statearr_28094[(15)] = inst_28040);

(statearr_28094[(16)] = inst_28016);

return statearr_28094;
})();
var statearr_28095_28136 = state_28074__$1;
(statearr_28095_28136[(2)] = null);

(statearr_28095_28136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (3))){
var inst_28072 = (state_28074[(2)]);
var state_28074__$1 = state_28074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28074__$1,inst_28072);
} else {
if((state_val_28075 === (12))){
var inst_28049 = (state_28074[(2)]);
var state_28074__$1 = state_28074;
var statearr_28096_28137 = state_28074__$1;
(statearr_28096_28137[(2)] = inst_28049);

(statearr_28096_28137[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (2))){
var state_28074__$1 = state_28074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28074__$1,(4),ch);
} else {
if((state_val_28075 === (23))){
var state_28074__$1 = state_28074;
var statearr_28097_28138 = state_28074__$1;
(statearr_28097_28138[(2)] = null);

(statearr_28097_28138[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (19))){
var inst_28055 = (state_28074[(11)]);
var inst_28005 = (state_28074[(8)]);
var inst_28057 = cljs.core.async.muxch_STAR_.call(null,inst_28055);
var state_28074__$1 = state_28074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28074__$1,(22),inst_28057,inst_28005);
} else {
if((state_val_28075 === (11))){
var inst_28015 = (state_28074[(14)]);
var inst_28029 = (state_28074[(10)]);
var inst_28029__$1 = cljs.core.seq.call(null,inst_28015);
var state_28074__$1 = (function (){var statearr_28098 = state_28074;
(statearr_28098[(10)] = inst_28029__$1);

return statearr_28098;
})();
if(inst_28029__$1){
var statearr_28099_28139 = state_28074__$1;
(statearr_28099_28139[(1)] = (13));

} else {
var statearr_28100_28140 = state_28074__$1;
(statearr_28100_28140[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (9))){
var inst_28051 = (state_28074[(2)]);
var state_28074__$1 = state_28074;
var statearr_28101_28141 = state_28074__$1;
(statearr_28101_28141[(2)] = inst_28051);

(statearr_28101_28141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (5))){
var inst_28012 = cljs.core.deref.call(null,mults);
var inst_28013 = cljs.core.vals.call(null,inst_28012);
var inst_28014 = cljs.core.seq.call(null,inst_28013);
var inst_28015 = inst_28014;
var inst_28016 = null;
var inst_28017 = (0);
var inst_28018 = (0);
var state_28074__$1 = (function (){var statearr_28102 = state_28074;
(statearr_28102[(12)] = inst_28018);

(statearr_28102[(13)] = inst_28017);

(statearr_28102[(14)] = inst_28015);

(statearr_28102[(16)] = inst_28016);

return statearr_28102;
})();
var statearr_28103_28142 = state_28074__$1;
(statearr_28103_28142[(2)] = null);

(statearr_28103_28142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (14))){
var state_28074__$1 = state_28074;
var statearr_28107_28143 = state_28074__$1;
(statearr_28107_28143[(2)] = null);

(statearr_28107_28143[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (16))){
var inst_28029 = (state_28074[(10)]);
var inst_28033 = cljs.core.chunk_first.call(null,inst_28029);
var inst_28034 = cljs.core.chunk_rest.call(null,inst_28029);
var inst_28035 = cljs.core.count.call(null,inst_28033);
var inst_28015 = inst_28034;
var inst_28016 = inst_28033;
var inst_28017 = inst_28035;
var inst_28018 = (0);
var state_28074__$1 = (function (){var statearr_28108 = state_28074;
(statearr_28108[(12)] = inst_28018);

(statearr_28108[(13)] = inst_28017);

(statearr_28108[(14)] = inst_28015);

(statearr_28108[(16)] = inst_28016);

return statearr_28108;
})();
var statearr_28109_28144 = state_28074__$1;
(statearr_28109_28144[(2)] = null);

(statearr_28109_28144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (10))){
var inst_28018 = (state_28074[(12)]);
var inst_28017 = (state_28074[(13)]);
var inst_28015 = (state_28074[(14)]);
var inst_28016 = (state_28074[(16)]);
var inst_28023 = cljs.core._nth.call(null,inst_28016,inst_28018);
var inst_28024 = cljs.core.async.muxch_STAR_.call(null,inst_28023);
var inst_28025 = cljs.core.async.close_BANG_.call(null,inst_28024);
var inst_28026 = (inst_28018 + (1));
var tmp28104 = inst_28017;
var tmp28105 = inst_28015;
var tmp28106 = inst_28016;
var inst_28015__$1 = tmp28105;
var inst_28016__$1 = tmp28106;
var inst_28017__$1 = tmp28104;
var inst_28018__$1 = inst_28026;
var state_28074__$1 = (function (){var statearr_28110 = state_28074;
(statearr_28110[(12)] = inst_28018__$1);

(statearr_28110[(17)] = inst_28025);

(statearr_28110[(13)] = inst_28017__$1);

(statearr_28110[(14)] = inst_28015__$1);

(statearr_28110[(16)] = inst_28016__$1);

return statearr_28110;
})();
var statearr_28111_28145 = state_28074__$1;
(statearr_28111_28145[(2)] = null);

(statearr_28111_28145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (18))){
var inst_28044 = (state_28074[(2)]);
var state_28074__$1 = state_28074;
var statearr_28112_28146 = state_28074__$1;
(statearr_28112_28146[(2)] = inst_28044);

(statearr_28112_28146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (8))){
var inst_28018 = (state_28074[(12)]);
var inst_28017 = (state_28074[(13)]);
var inst_28020 = (inst_28018 < inst_28017);
var inst_28021 = inst_28020;
var state_28074__$1 = state_28074;
if(cljs.core.truth_(inst_28021)){
var statearr_28113_28147 = state_28074__$1;
(statearr_28113_28147[(1)] = (10));

} else {
var statearr_28114_28148 = state_28074__$1;
(statearr_28114_28148[(1)] = (11));

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
});})(c__26886__auto___28120,mults,ensure_mult,p))
;
return ((function (switch__26795__auto__,c__26886__auto___28120,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26796__auto__ = null;
var cljs$core$async$state_machine__26796__auto____0 = (function (){
var statearr_28115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28115[(0)] = cljs$core$async$state_machine__26796__auto__);

(statearr_28115[(1)] = (1));

return statearr_28115;
});
var cljs$core$async$state_machine__26796__auto____1 = (function (state_28074){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_28074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e28116){if((e28116 instanceof Object)){
var ex__26799__auto__ = e28116;
var statearr_28117_28149 = state_28074;
(statearr_28117_28149[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28150 = state_28074;
state_28074 = G__28150;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
cljs$core$async$state_machine__26796__auto__ = function(state_28074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26796__auto____1.call(this,state_28074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26796__auto____0;
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26796__auto____1;
return cljs$core$async$state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto___28120,mults,ensure_mult,p))
})();
var state__26888__auto__ = (function (){var statearr_28118 = f__26887__auto__.call(null);
(statearr_28118[(6)] = c__26886__auto___28120);

return statearr_28118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto___28120,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28152 = arguments.length;
switch (G__28152) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28155 = arguments.length;
switch (G__28155) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28158 = arguments.length;
switch (G__28158) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26886__auto___28225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto___28225,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto___28225,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28197){
var state_val_28198 = (state_28197[(1)]);
if((state_val_28198 === (7))){
var state_28197__$1 = state_28197;
var statearr_28199_28226 = state_28197__$1;
(statearr_28199_28226[(2)] = null);

(statearr_28199_28226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (1))){
var state_28197__$1 = state_28197;
var statearr_28200_28227 = state_28197__$1;
(statearr_28200_28227[(2)] = null);

(statearr_28200_28227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (4))){
var inst_28161 = (state_28197[(7)]);
var inst_28163 = (inst_28161 < cnt);
var state_28197__$1 = state_28197;
if(cljs.core.truth_(inst_28163)){
var statearr_28201_28228 = state_28197__$1;
(statearr_28201_28228[(1)] = (6));

} else {
var statearr_28202_28229 = state_28197__$1;
(statearr_28202_28229[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (15))){
var inst_28193 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28203_28230 = state_28197__$1;
(statearr_28203_28230[(2)] = inst_28193);

(statearr_28203_28230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (13))){
var inst_28186 = cljs.core.async.close_BANG_.call(null,out);
var state_28197__$1 = state_28197;
var statearr_28204_28231 = state_28197__$1;
(statearr_28204_28231[(2)] = inst_28186);

(statearr_28204_28231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (6))){
var state_28197__$1 = state_28197;
var statearr_28205_28232 = state_28197__$1;
(statearr_28205_28232[(2)] = null);

(statearr_28205_28232[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (3))){
var inst_28195 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28197__$1,inst_28195);
} else {
if((state_val_28198 === (12))){
var inst_28183 = (state_28197[(8)]);
var inst_28183__$1 = (state_28197[(2)]);
var inst_28184 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28183__$1);
var state_28197__$1 = (function (){var statearr_28206 = state_28197;
(statearr_28206[(8)] = inst_28183__$1);

return statearr_28206;
})();
if(cljs.core.truth_(inst_28184)){
var statearr_28207_28233 = state_28197__$1;
(statearr_28207_28233[(1)] = (13));

} else {
var statearr_28208_28234 = state_28197__$1;
(statearr_28208_28234[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (2))){
var inst_28160 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28161 = (0);
var state_28197__$1 = (function (){var statearr_28209 = state_28197;
(statearr_28209[(7)] = inst_28161);

(statearr_28209[(9)] = inst_28160);

return statearr_28209;
})();
var statearr_28210_28235 = state_28197__$1;
(statearr_28210_28235[(2)] = null);

(statearr_28210_28235[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (11))){
var inst_28161 = (state_28197[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28197,(10),Object,null,(9));
var inst_28170 = chs__$1.call(null,inst_28161);
var inst_28171 = done.call(null,inst_28161);
var inst_28172 = cljs.core.async.take_BANG_.call(null,inst_28170,inst_28171);
var state_28197__$1 = state_28197;
var statearr_28211_28236 = state_28197__$1;
(statearr_28211_28236[(2)] = inst_28172);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28197__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (9))){
var inst_28161 = (state_28197[(7)]);
var inst_28174 = (state_28197[(2)]);
var inst_28175 = (inst_28161 + (1));
var inst_28161__$1 = inst_28175;
var state_28197__$1 = (function (){var statearr_28212 = state_28197;
(statearr_28212[(10)] = inst_28174);

(statearr_28212[(7)] = inst_28161__$1);

return statearr_28212;
})();
var statearr_28213_28237 = state_28197__$1;
(statearr_28213_28237[(2)] = null);

(statearr_28213_28237[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (5))){
var inst_28181 = (state_28197[(2)]);
var state_28197__$1 = (function (){var statearr_28214 = state_28197;
(statearr_28214[(11)] = inst_28181);

return statearr_28214;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28197__$1,(12),dchan);
} else {
if((state_val_28198 === (14))){
var inst_28183 = (state_28197[(8)]);
var inst_28188 = cljs.core.apply.call(null,f,inst_28183);
var state_28197__$1 = state_28197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28197__$1,(16),out,inst_28188);
} else {
if((state_val_28198 === (16))){
var inst_28190 = (state_28197[(2)]);
var state_28197__$1 = (function (){var statearr_28215 = state_28197;
(statearr_28215[(12)] = inst_28190);

return statearr_28215;
})();
var statearr_28216_28238 = state_28197__$1;
(statearr_28216_28238[(2)] = null);

(statearr_28216_28238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (10))){
var inst_28165 = (state_28197[(2)]);
var inst_28166 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28197__$1 = (function (){var statearr_28217 = state_28197;
(statearr_28217[(13)] = inst_28165);

return statearr_28217;
})();
var statearr_28218_28239 = state_28197__$1;
(statearr_28218_28239[(2)] = inst_28166);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28197__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (8))){
var inst_28179 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28219_28240 = state_28197__$1;
(statearr_28219_28240[(2)] = inst_28179);

(statearr_28219_28240[(1)] = (5));


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
});})(c__26886__auto___28225,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26795__auto__,c__26886__auto___28225,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26796__auto__ = null;
var cljs$core$async$state_machine__26796__auto____0 = (function (){
var statearr_28220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28220[(0)] = cljs$core$async$state_machine__26796__auto__);

(statearr_28220[(1)] = (1));

return statearr_28220;
});
var cljs$core$async$state_machine__26796__auto____1 = (function (state_28197){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_28197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e28221){if((e28221 instanceof Object)){
var ex__26799__auto__ = e28221;
var statearr_28222_28241 = state_28197;
(statearr_28222_28241[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28242 = state_28197;
state_28197 = G__28242;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
cljs$core$async$state_machine__26796__auto__ = function(state_28197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26796__auto____1.call(this,state_28197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26796__auto____0;
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26796__auto____1;
return cljs$core$async$state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto___28225,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26888__auto__ = (function (){var statearr_28223 = f__26887__auto__.call(null);
(statearr_28223[(6)] = c__26886__auto___28225);

return statearr_28223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto___28225,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28245 = arguments.length;
switch (G__28245) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26886__auto___28299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto___28299,out){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto___28299,out){
return (function (state_28277){
var state_val_28278 = (state_28277[(1)]);
if((state_val_28278 === (7))){
var inst_28256 = (state_28277[(7)]);
var inst_28257 = (state_28277[(8)]);
var inst_28256__$1 = (state_28277[(2)]);
var inst_28257__$1 = cljs.core.nth.call(null,inst_28256__$1,(0),null);
var inst_28258 = cljs.core.nth.call(null,inst_28256__$1,(1),null);
var inst_28259 = (inst_28257__$1 == null);
var state_28277__$1 = (function (){var statearr_28279 = state_28277;
(statearr_28279[(9)] = inst_28258);

(statearr_28279[(7)] = inst_28256__$1);

(statearr_28279[(8)] = inst_28257__$1);

return statearr_28279;
})();
if(cljs.core.truth_(inst_28259)){
var statearr_28280_28300 = state_28277__$1;
(statearr_28280_28300[(1)] = (8));

} else {
var statearr_28281_28301 = state_28277__$1;
(statearr_28281_28301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28278 === (1))){
var inst_28246 = cljs.core.vec.call(null,chs);
var inst_28247 = inst_28246;
var state_28277__$1 = (function (){var statearr_28282 = state_28277;
(statearr_28282[(10)] = inst_28247);

return statearr_28282;
})();
var statearr_28283_28302 = state_28277__$1;
(statearr_28283_28302[(2)] = null);

(statearr_28283_28302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28278 === (4))){
var inst_28247 = (state_28277[(10)]);
var state_28277__$1 = state_28277;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28277__$1,(7),inst_28247);
} else {
if((state_val_28278 === (6))){
var inst_28273 = (state_28277[(2)]);
var state_28277__$1 = state_28277;
var statearr_28284_28303 = state_28277__$1;
(statearr_28284_28303[(2)] = inst_28273);

(statearr_28284_28303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28278 === (3))){
var inst_28275 = (state_28277[(2)]);
var state_28277__$1 = state_28277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28277__$1,inst_28275);
} else {
if((state_val_28278 === (2))){
var inst_28247 = (state_28277[(10)]);
var inst_28249 = cljs.core.count.call(null,inst_28247);
var inst_28250 = (inst_28249 > (0));
var state_28277__$1 = state_28277;
if(cljs.core.truth_(inst_28250)){
var statearr_28286_28304 = state_28277__$1;
(statearr_28286_28304[(1)] = (4));

} else {
var statearr_28287_28305 = state_28277__$1;
(statearr_28287_28305[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28278 === (11))){
var inst_28247 = (state_28277[(10)]);
var inst_28266 = (state_28277[(2)]);
var tmp28285 = inst_28247;
var inst_28247__$1 = tmp28285;
var state_28277__$1 = (function (){var statearr_28288 = state_28277;
(statearr_28288[(10)] = inst_28247__$1);

(statearr_28288[(11)] = inst_28266);

return statearr_28288;
})();
var statearr_28289_28306 = state_28277__$1;
(statearr_28289_28306[(2)] = null);

(statearr_28289_28306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28278 === (9))){
var inst_28257 = (state_28277[(8)]);
var state_28277__$1 = state_28277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28277__$1,(11),out,inst_28257);
} else {
if((state_val_28278 === (5))){
var inst_28271 = cljs.core.async.close_BANG_.call(null,out);
var state_28277__$1 = state_28277;
var statearr_28290_28307 = state_28277__$1;
(statearr_28290_28307[(2)] = inst_28271);

(statearr_28290_28307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28278 === (10))){
var inst_28269 = (state_28277[(2)]);
var state_28277__$1 = state_28277;
var statearr_28291_28308 = state_28277__$1;
(statearr_28291_28308[(2)] = inst_28269);

(statearr_28291_28308[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28278 === (8))){
var inst_28258 = (state_28277[(9)]);
var inst_28256 = (state_28277[(7)]);
var inst_28257 = (state_28277[(8)]);
var inst_28247 = (state_28277[(10)]);
var inst_28261 = (function (){var cs = inst_28247;
var vec__28252 = inst_28256;
var v = inst_28257;
var c = inst_28258;
return ((function (cs,vec__28252,v,c,inst_28258,inst_28256,inst_28257,inst_28247,state_val_28278,c__26886__auto___28299,out){
return (function (p1__28243_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28243_SHARP_);
});
;})(cs,vec__28252,v,c,inst_28258,inst_28256,inst_28257,inst_28247,state_val_28278,c__26886__auto___28299,out))
})();
var inst_28262 = cljs.core.filterv.call(null,inst_28261,inst_28247);
var inst_28247__$1 = inst_28262;
var state_28277__$1 = (function (){var statearr_28292 = state_28277;
(statearr_28292[(10)] = inst_28247__$1);

return statearr_28292;
})();
var statearr_28293_28309 = state_28277__$1;
(statearr_28293_28309[(2)] = null);

(statearr_28293_28309[(1)] = (2));


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
});})(c__26886__auto___28299,out))
;
return ((function (switch__26795__auto__,c__26886__auto___28299,out){
return (function() {
var cljs$core$async$state_machine__26796__auto__ = null;
var cljs$core$async$state_machine__26796__auto____0 = (function (){
var statearr_28294 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28294[(0)] = cljs$core$async$state_machine__26796__auto__);

(statearr_28294[(1)] = (1));

return statearr_28294;
});
var cljs$core$async$state_machine__26796__auto____1 = (function (state_28277){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_28277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e28295){if((e28295 instanceof Object)){
var ex__26799__auto__ = e28295;
var statearr_28296_28310 = state_28277;
(statearr_28296_28310[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28311 = state_28277;
state_28277 = G__28311;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
cljs$core$async$state_machine__26796__auto__ = function(state_28277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26796__auto____1.call(this,state_28277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26796__auto____0;
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26796__auto____1;
return cljs$core$async$state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto___28299,out))
})();
var state__26888__auto__ = (function (){var statearr_28297 = f__26887__auto__.call(null);
(statearr_28297[(6)] = c__26886__auto___28299);

return statearr_28297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto___28299,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28313 = arguments.length;
switch (G__28313) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26886__auto___28358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto___28358,out){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto___28358,out){
return (function (state_28337){
var state_val_28338 = (state_28337[(1)]);
if((state_val_28338 === (7))){
var inst_28319 = (state_28337[(7)]);
var inst_28319__$1 = (state_28337[(2)]);
var inst_28320 = (inst_28319__$1 == null);
var inst_28321 = cljs.core.not.call(null,inst_28320);
var state_28337__$1 = (function (){var statearr_28339 = state_28337;
(statearr_28339[(7)] = inst_28319__$1);

return statearr_28339;
})();
if(inst_28321){
var statearr_28340_28359 = state_28337__$1;
(statearr_28340_28359[(1)] = (8));

} else {
var statearr_28341_28360 = state_28337__$1;
(statearr_28341_28360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (1))){
var inst_28314 = (0);
var state_28337__$1 = (function (){var statearr_28342 = state_28337;
(statearr_28342[(8)] = inst_28314);

return statearr_28342;
})();
var statearr_28343_28361 = state_28337__$1;
(statearr_28343_28361[(2)] = null);

(statearr_28343_28361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (4))){
var state_28337__$1 = state_28337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28337__$1,(7),ch);
} else {
if((state_val_28338 === (6))){
var inst_28332 = (state_28337[(2)]);
var state_28337__$1 = state_28337;
var statearr_28344_28362 = state_28337__$1;
(statearr_28344_28362[(2)] = inst_28332);

(statearr_28344_28362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (3))){
var inst_28334 = (state_28337[(2)]);
var inst_28335 = cljs.core.async.close_BANG_.call(null,out);
var state_28337__$1 = (function (){var statearr_28345 = state_28337;
(statearr_28345[(9)] = inst_28334);

return statearr_28345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28337__$1,inst_28335);
} else {
if((state_val_28338 === (2))){
var inst_28314 = (state_28337[(8)]);
var inst_28316 = (inst_28314 < n);
var state_28337__$1 = state_28337;
if(cljs.core.truth_(inst_28316)){
var statearr_28346_28363 = state_28337__$1;
(statearr_28346_28363[(1)] = (4));

} else {
var statearr_28347_28364 = state_28337__$1;
(statearr_28347_28364[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (11))){
var inst_28314 = (state_28337[(8)]);
var inst_28324 = (state_28337[(2)]);
var inst_28325 = (inst_28314 + (1));
var inst_28314__$1 = inst_28325;
var state_28337__$1 = (function (){var statearr_28348 = state_28337;
(statearr_28348[(8)] = inst_28314__$1);

(statearr_28348[(10)] = inst_28324);

return statearr_28348;
})();
var statearr_28349_28365 = state_28337__$1;
(statearr_28349_28365[(2)] = null);

(statearr_28349_28365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (9))){
var state_28337__$1 = state_28337;
var statearr_28350_28366 = state_28337__$1;
(statearr_28350_28366[(2)] = null);

(statearr_28350_28366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (5))){
var state_28337__$1 = state_28337;
var statearr_28351_28367 = state_28337__$1;
(statearr_28351_28367[(2)] = null);

(statearr_28351_28367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (10))){
var inst_28329 = (state_28337[(2)]);
var state_28337__$1 = state_28337;
var statearr_28352_28368 = state_28337__$1;
(statearr_28352_28368[(2)] = inst_28329);

(statearr_28352_28368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (8))){
var inst_28319 = (state_28337[(7)]);
var state_28337__$1 = state_28337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28337__$1,(11),out,inst_28319);
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
});})(c__26886__auto___28358,out))
;
return ((function (switch__26795__auto__,c__26886__auto___28358,out){
return (function() {
var cljs$core$async$state_machine__26796__auto__ = null;
var cljs$core$async$state_machine__26796__auto____0 = (function (){
var statearr_28353 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28353[(0)] = cljs$core$async$state_machine__26796__auto__);

(statearr_28353[(1)] = (1));

return statearr_28353;
});
var cljs$core$async$state_machine__26796__auto____1 = (function (state_28337){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_28337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e28354){if((e28354 instanceof Object)){
var ex__26799__auto__ = e28354;
var statearr_28355_28369 = state_28337;
(statearr_28355_28369[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28370 = state_28337;
state_28337 = G__28370;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
cljs$core$async$state_machine__26796__auto__ = function(state_28337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26796__auto____1.call(this,state_28337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26796__auto____0;
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26796__auto____1;
return cljs$core$async$state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto___28358,out))
})();
var state__26888__auto__ = (function (){var statearr_28356 = f__26887__auto__.call(null);
(statearr_28356[(6)] = c__26886__auto___28358);

return statearr_28356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto___28358,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28372 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28372 = (function (f,ch,meta28373){
this.f = f;
this.ch = ch;
this.meta28373 = meta28373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28374,meta28373__$1){
var self__ = this;
var _28374__$1 = this;
return (new cljs.core.async.t_cljs$core$async28372(self__.f,self__.ch,meta28373__$1));
});

cljs.core.async.t_cljs$core$async28372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28374){
var self__ = this;
var _28374__$1 = this;
return self__.meta28373;
});

cljs.core.async.t_cljs$core$async28372.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28372.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28372.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28372.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28372.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28375 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28375 = (function (f,ch,meta28373,_,fn1,meta28376){
this.f = f;
this.ch = ch;
this.meta28373 = meta28373;
this._ = _;
this.fn1 = fn1;
this.meta28376 = meta28376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28377,meta28376__$1){
var self__ = this;
var _28377__$1 = this;
return (new cljs.core.async.t_cljs$core$async28375(self__.f,self__.ch,self__.meta28373,self__._,self__.fn1,meta28376__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28375.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28377){
var self__ = this;
var _28377__$1 = this;
return self__.meta28376;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28375.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28375.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28375.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28375.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28371_SHARP_){
return f1.call(null,(((p1__28371_SHARP_ == null))?null:self__.f.call(null,p1__28371_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28375.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28373","meta28373",-1736802671,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28372","cljs.core.async/t_cljs$core$async28372",159154209,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28376","meta28376",-1670558404,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28375.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28375";

cljs.core.async.t_cljs$core$async28375.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28375");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28375.
 */
cljs.core.async.__GT_t_cljs$core$async28375 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28375(f__$1,ch__$1,meta28373__$1,___$2,fn1__$1,meta28376){
return (new cljs.core.async.t_cljs$core$async28375(f__$1,ch__$1,meta28373__$1,___$2,fn1__$1,meta28376));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28375(self__.f,self__.ch,self__.meta28373,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28372.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28372.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28373","meta28373",-1736802671,null)], null);
});

cljs.core.async.t_cljs$core$async28372.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28372";

cljs.core.async.t_cljs$core$async28372.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28372");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28372.
 */
cljs.core.async.__GT_t_cljs$core$async28372 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28372(f__$1,ch__$1,meta28373){
return (new cljs.core.async.t_cljs$core$async28372(f__$1,ch__$1,meta28373));
});

}

return (new cljs.core.async.t_cljs$core$async28372(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28378 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28378 = (function (f,ch,meta28379){
this.f = f;
this.ch = ch;
this.meta28379 = meta28379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28380,meta28379__$1){
var self__ = this;
var _28380__$1 = this;
return (new cljs.core.async.t_cljs$core$async28378(self__.f,self__.ch,meta28379__$1));
});

cljs.core.async.t_cljs$core$async28378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28380){
var self__ = this;
var _28380__$1 = this;
return self__.meta28379;
});

cljs.core.async.t_cljs$core$async28378.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28378.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28378.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28378.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28378.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28378.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28379","meta28379",1212382581,null)], null);
});

cljs.core.async.t_cljs$core$async28378.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28378";

cljs.core.async.t_cljs$core$async28378.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28378");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28378.
 */
cljs.core.async.__GT_t_cljs$core$async28378 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28378(f__$1,ch__$1,meta28379){
return (new cljs.core.async.t_cljs$core$async28378(f__$1,ch__$1,meta28379));
});

}

return (new cljs.core.async.t_cljs$core$async28378(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28381 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28381 = (function (p,ch,meta28382){
this.p = p;
this.ch = ch;
this.meta28382 = meta28382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28383,meta28382__$1){
var self__ = this;
var _28383__$1 = this;
return (new cljs.core.async.t_cljs$core$async28381(self__.p,self__.ch,meta28382__$1));
});

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28383){
var self__ = this;
var _28383__$1 = this;
return self__.meta28382;
});

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28382","meta28382",1002029291,null)], null);
});

cljs.core.async.t_cljs$core$async28381.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28381";

cljs.core.async.t_cljs$core$async28381.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28381");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28381.
 */
cljs.core.async.__GT_t_cljs$core$async28381 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28381(p__$1,ch__$1,meta28382){
return (new cljs.core.async.t_cljs$core$async28381(p__$1,ch__$1,meta28382));
});

}

return (new cljs.core.async.t_cljs$core$async28381(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28385 = arguments.length;
switch (G__28385) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26886__auto___28425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto___28425,out){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto___28425,out){
return (function (state_28406){
var state_val_28407 = (state_28406[(1)]);
if((state_val_28407 === (7))){
var inst_28402 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28408_28426 = state_28406__$1;
(statearr_28408_28426[(2)] = inst_28402);

(statearr_28408_28426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (1))){
var state_28406__$1 = state_28406;
var statearr_28409_28427 = state_28406__$1;
(statearr_28409_28427[(2)] = null);

(statearr_28409_28427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (4))){
var inst_28388 = (state_28406[(7)]);
var inst_28388__$1 = (state_28406[(2)]);
var inst_28389 = (inst_28388__$1 == null);
var state_28406__$1 = (function (){var statearr_28410 = state_28406;
(statearr_28410[(7)] = inst_28388__$1);

return statearr_28410;
})();
if(cljs.core.truth_(inst_28389)){
var statearr_28411_28428 = state_28406__$1;
(statearr_28411_28428[(1)] = (5));

} else {
var statearr_28412_28429 = state_28406__$1;
(statearr_28412_28429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (6))){
var inst_28388 = (state_28406[(7)]);
var inst_28393 = p.call(null,inst_28388);
var state_28406__$1 = state_28406;
if(cljs.core.truth_(inst_28393)){
var statearr_28413_28430 = state_28406__$1;
(statearr_28413_28430[(1)] = (8));

} else {
var statearr_28414_28431 = state_28406__$1;
(statearr_28414_28431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (3))){
var inst_28404 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28406__$1,inst_28404);
} else {
if((state_val_28407 === (2))){
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28406__$1,(4),ch);
} else {
if((state_val_28407 === (11))){
var inst_28396 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28415_28432 = state_28406__$1;
(statearr_28415_28432[(2)] = inst_28396);

(statearr_28415_28432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (9))){
var state_28406__$1 = state_28406;
var statearr_28416_28433 = state_28406__$1;
(statearr_28416_28433[(2)] = null);

(statearr_28416_28433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (5))){
var inst_28391 = cljs.core.async.close_BANG_.call(null,out);
var state_28406__$1 = state_28406;
var statearr_28417_28434 = state_28406__$1;
(statearr_28417_28434[(2)] = inst_28391);

(statearr_28417_28434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (10))){
var inst_28399 = (state_28406[(2)]);
var state_28406__$1 = (function (){var statearr_28418 = state_28406;
(statearr_28418[(8)] = inst_28399);

return statearr_28418;
})();
var statearr_28419_28435 = state_28406__$1;
(statearr_28419_28435[(2)] = null);

(statearr_28419_28435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (8))){
var inst_28388 = (state_28406[(7)]);
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28406__$1,(11),out,inst_28388);
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
});})(c__26886__auto___28425,out))
;
return ((function (switch__26795__auto__,c__26886__auto___28425,out){
return (function() {
var cljs$core$async$state_machine__26796__auto__ = null;
var cljs$core$async$state_machine__26796__auto____0 = (function (){
var statearr_28420 = [null,null,null,null,null,null,null,null,null];
(statearr_28420[(0)] = cljs$core$async$state_machine__26796__auto__);

(statearr_28420[(1)] = (1));

return statearr_28420;
});
var cljs$core$async$state_machine__26796__auto____1 = (function (state_28406){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_28406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e28421){if((e28421 instanceof Object)){
var ex__26799__auto__ = e28421;
var statearr_28422_28436 = state_28406;
(statearr_28422_28436[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28437 = state_28406;
state_28406 = G__28437;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
cljs$core$async$state_machine__26796__auto__ = function(state_28406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26796__auto____1.call(this,state_28406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26796__auto____0;
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26796__auto____1;
return cljs$core$async$state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto___28425,out))
})();
var state__26888__auto__ = (function (){var statearr_28423 = f__26887__auto__.call(null);
(statearr_28423[(6)] = c__26886__auto___28425);

return statearr_28423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto___28425,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28439 = arguments.length;
switch (G__28439) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto__){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto__){
return (function (state_28502){
var state_val_28503 = (state_28502[(1)]);
if((state_val_28503 === (7))){
var inst_28498 = (state_28502[(2)]);
var state_28502__$1 = state_28502;
var statearr_28504_28542 = state_28502__$1;
(statearr_28504_28542[(2)] = inst_28498);

(statearr_28504_28542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (20))){
var inst_28468 = (state_28502[(7)]);
var inst_28479 = (state_28502[(2)]);
var inst_28480 = cljs.core.next.call(null,inst_28468);
var inst_28454 = inst_28480;
var inst_28455 = null;
var inst_28456 = (0);
var inst_28457 = (0);
var state_28502__$1 = (function (){var statearr_28505 = state_28502;
(statearr_28505[(8)] = inst_28455);

(statearr_28505[(9)] = inst_28457);

(statearr_28505[(10)] = inst_28454);

(statearr_28505[(11)] = inst_28456);

(statearr_28505[(12)] = inst_28479);

return statearr_28505;
})();
var statearr_28506_28543 = state_28502__$1;
(statearr_28506_28543[(2)] = null);

(statearr_28506_28543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (1))){
var state_28502__$1 = state_28502;
var statearr_28507_28544 = state_28502__$1;
(statearr_28507_28544[(2)] = null);

(statearr_28507_28544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (4))){
var inst_28443 = (state_28502[(13)]);
var inst_28443__$1 = (state_28502[(2)]);
var inst_28444 = (inst_28443__$1 == null);
var state_28502__$1 = (function (){var statearr_28508 = state_28502;
(statearr_28508[(13)] = inst_28443__$1);

return statearr_28508;
})();
if(cljs.core.truth_(inst_28444)){
var statearr_28509_28545 = state_28502__$1;
(statearr_28509_28545[(1)] = (5));

} else {
var statearr_28510_28546 = state_28502__$1;
(statearr_28510_28546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (15))){
var state_28502__$1 = state_28502;
var statearr_28514_28547 = state_28502__$1;
(statearr_28514_28547[(2)] = null);

(statearr_28514_28547[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (21))){
var state_28502__$1 = state_28502;
var statearr_28515_28548 = state_28502__$1;
(statearr_28515_28548[(2)] = null);

(statearr_28515_28548[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (13))){
var inst_28455 = (state_28502[(8)]);
var inst_28457 = (state_28502[(9)]);
var inst_28454 = (state_28502[(10)]);
var inst_28456 = (state_28502[(11)]);
var inst_28464 = (state_28502[(2)]);
var inst_28465 = (inst_28457 + (1));
var tmp28511 = inst_28455;
var tmp28512 = inst_28454;
var tmp28513 = inst_28456;
var inst_28454__$1 = tmp28512;
var inst_28455__$1 = tmp28511;
var inst_28456__$1 = tmp28513;
var inst_28457__$1 = inst_28465;
var state_28502__$1 = (function (){var statearr_28516 = state_28502;
(statearr_28516[(8)] = inst_28455__$1);

(statearr_28516[(14)] = inst_28464);

(statearr_28516[(9)] = inst_28457__$1);

(statearr_28516[(10)] = inst_28454__$1);

(statearr_28516[(11)] = inst_28456__$1);

return statearr_28516;
})();
var statearr_28517_28549 = state_28502__$1;
(statearr_28517_28549[(2)] = null);

(statearr_28517_28549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (22))){
var state_28502__$1 = state_28502;
var statearr_28518_28550 = state_28502__$1;
(statearr_28518_28550[(2)] = null);

(statearr_28518_28550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (6))){
var inst_28443 = (state_28502[(13)]);
var inst_28452 = f.call(null,inst_28443);
var inst_28453 = cljs.core.seq.call(null,inst_28452);
var inst_28454 = inst_28453;
var inst_28455 = null;
var inst_28456 = (0);
var inst_28457 = (0);
var state_28502__$1 = (function (){var statearr_28519 = state_28502;
(statearr_28519[(8)] = inst_28455);

(statearr_28519[(9)] = inst_28457);

(statearr_28519[(10)] = inst_28454);

(statearr_28519[(11)] = inst_28456);

return statearr_28519;
})();
var statearr_28520_28551 = state_28502__$1;
(statearr_28520_28551[(2)] = null);

(statearr_28520_28551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (17))){
var inst_28468 = (state_28502[(7)]);
var inst_28472 = cljs.core.chunk_first.call(null,inst_28468);
var inst_28473 = cljs.core.chunk_rest.call(null,inst_28468);
var inst_28474 = cljs.core.count.call(null,inst_28472);
var inst_28454 = inst_28473;
var inst_28455 = inst_28472;
var inst_28456 = inst_28474;
var inst_28457 = (0);
var state_28502__$1 = (function (){var statearr_28521 = state_28502;
(statearr_28521[(8)] = inst_28455);

(statearr_28521[(9)] = inst_28457);

(statearr_28521[(10)] = inst_28454);

(statearr_28521[(11)] = inst_28456);

return statearr_28521;
})();
var statearr_28522_28552 = state_28502__$1;
(statearr_28522_28552[(2)] = null);

(statearr_28522_28552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (3))){
var inst_28500 = (state_28502[(2)]);
var state_28502__$1 = state_28502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28502__$1,inst_28500);
} else {
if((state_val_28503 === (12))){
var inst_28488 = (state_28502[(2)]);
var state_28502__$1 = state_28502;
var statearr_28523_28553 = state_28502__$1;
(statearr_28523_28553[(2)] = inst_28488);

(statearr_28523_28553[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (2))){
var state_28502__$1 = state_28502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28502__$1,(4),in$);
} else {
if((state_val_28503 === (23))){
var inst_28496 = (state_28502[(2)]);
var state_28502__$1 = state_28502;
var statearr_28524_28554 = state_28502__$1;
(statearr_28524_28554[(2)] = inst_28496);

(statearr_28524_28554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (19))){
var inst_28483 = (state_28502[(2)]);
var state_28502__$1 = state_28502;
var statearr_28525_28555 = state_28502__$1;
(statearr_28525_28555[(2)] = inst_28483);

(statearr_28525_28555[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (11))){
var inst_28454 = (state_28502[(10)]);
var inst_28468 = (state_28502[(7)]);
var inst_28468__$1 = cljs.core.seq.call(null,inst_28454);
var state_28502__$1 = (function (){var statearr_28526 = state_28502;
(statearr_28526[(7)] = inst_28468__$1);

return statearr_28526;
})();
if(inst_28468__$1){
var statearr_28527_28556 = state_28502__$1;
(statearr_28527_28556[(1)] = (14));

} else {
var statearr_28528_28557 = state_28502__$1;
(statearr_28528_28557[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (9))){
var inst_28490 = (state_28502[(2)]);
var inst_28491 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28502__$1 = (function (){var statearr_28529 = state_28502;
(statearr_28529[(15)] = inst_28490);

return statearr_28529;
})();
if(cljs.core.truth_(inst_28491)){
var statearr_28530_28558 = state_28502__$1;
(statearr_28530_28558[(1)] = (21));

} else {
var statearr_28531_28559 = state_28502__$1;
(statearr_28531_28559[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (5))){
var inst_28446 = cljs.core.async.close_BANG_.call(null,out);
var state_28502__$1 = state_28502;
var statearr_28532_28560 = state_28502__$1;
(statearr_28532_28560[(2)] = inst_28446);

(statearr_28532_28560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (14))){
var inst_28468 = (state_28502[(7)]);
var inst_28470 = cljs.core.chunked_seq_QMARK_.call(null,inst_28468);
var state_28502__$1 = state_28502;
if(inst_28470){
var statearr_28533_28561 = state_28502__$1;
(statearr_28533_28561[(1)] = (17));

} else {
var statearr_28534_28562 = state_28502__$1;
(statearr_28534_28562[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (16))){
var inst_28486 = (state_28502[(2)]);
var state_28502__$1 = state_28502;
var statearr_28535_28563 = state_28502__$1;
(statearr_28535_28563[(2)] = inst_28486);

(statearr_28535_28563[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (10))){
var inst_28455 = (state_28502[(8)]);
var inst_28457 = (state_28502[(9)]);
var inst_28462 = cljs.core._nth.call(null,inst_28455,inst_28457);
var state_28502__$1 = state_28502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28502__$1,(13),out,inst_28462);
} else {
if((state_val_28503 === (18))){
var inst_28468 = (state_28502[(7)]);
var inst_28477 = cljs.core.first.call(null,inst_28468);
var state_28502__$1 = state_28502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28502__$1,(20),out,inst_28477);
} else {
if((state_val_28503 === (8))){
var inst_28457 = (state_28502[(9)]);
var inst_28456 = (state_28502[(11)]);
var inst_28459 = (inst_28457 < inst_28456);
var inst_28460 = inst_28459;
var state_28502__$1 = state_28502;
if(cljs.core.truth_(inst_28460)){
var statearr_28536_28564 = state_28502__$1;
(statearr_28536_28564[(1)] = (10));

} else {
var statearr_28537_28565 = state_28502__$1;
(statearr_28537_28565[(1)] = (11));

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
});})(c__26886__auto__))
;
return ((function (switch__26795__auto__,c__26886__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26796__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26796__auto____0 = (function (){
var statearr_28538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28538[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26796__auto__);

(statearr_28538[(1)] = (1));

return statearr_28538;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26796__auto____1 = (function (state_28502){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_28502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e28539){if((e28539 instanceof Object)){
var ex__26799__auto__ = e28539;
var statearr_28540_28566 = state_28502;
(statearr_28540_28566[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28567 = state_28502;
state_28502 = G__28567;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26796__auto__ = function(state_28502){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26796__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26796__auto____1.call(this,state_28502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26796__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26796__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto__))
})();
var state__26888__auto__ = (function (){var statearr_28541 = f__26887__auto__.call(null);
(statearr_28541[(6)] = c__26886__auto__);

return statearr_28541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto__))
);

return c__26886__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28569 = arguments.length;
switch (G__28569) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28572 = arguments.length;
switch (G__28572) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28575 = arguments.length;
switch (G__28575) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26886__auto___28622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto___28622,out){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto___28622,out){
return (function (state_28599){
var state_val_28600 = (state_28599[(1)]);
if((state_val_28600 === (7))){
var inst_28594 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28601_28623 = state_28599__$1;
(statearr_28601_28623[(2)] = inst_28594);

(statearr_28601_28623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (1))){
var inst_28576 = null;
var state_28599__$1 = (function (){var statearr_28602 = state_28599;
(statearr_28602[(7)] = inst_28576);

return statearr_28602;
})();
var statearr_28603_28624 = state_28599__$1;
(statearr_28603_28624[(2)] = null);

(statearr_28603_28624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (4))){
var inst_28579 = (state_28599[(8)]);
var inst_28579__$1 = (state_28599[(2)]);
var inst_28580 = (inst_28579__$1 == null);
var inst_28581 = cljs.core.not.call(null,inst_28580);
var state_28599__$1 = (function (){var statearr_28604 = state_28599;
(statearr_28604[(8)] = inst_28579__$1);

return statearr_28604;
})();
if(inst_28581){
var statearr_28605_28625 = state_28599__$1;
(statearr_28605_28625[(1)] = (5));

} else {
var statearr_28606_28626 = state_28599__$1;
(statearr_28606_28626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (6))){
var state_28599__$1 = state_28599;
var statearr_28607_28627 = state_28599__$1;
(statearr_28607_28627[(2)] = null);

(statearr_28607_28627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (3))){
var inst_28596 = (state_28599[(2)]);
var inst_28597 = cljs.core.async.close_BANG_.call(null,out);
var state_28599__$1 = (function (){var statearr_28608 = state_28599;
(statearr_28608[(9)] = inst_28596);

return statearr_28608;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28599__$1,inst_28597);
} else {
if((state_val_28600 === (2))){
var state_28599__$1 = state_28599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28599__$1,(4),ch);
} else {
if((state_val_28600 === (11))){
var inst_28579 = (state_28599[(8)]);
var inst_28588 = (state_28599[(2)]);
var inst_28576 = inst_28579;
var state_28599__$1 = (function (){var statearr_28609 = state_28599;
(statearr_28609[(7)] = inst_28576);

(statearr_28609[(10)] = inst_28588);

return statearr_28609;
})();
var statearr_28610_28628 = state_28599__$1;
(statearr_28610_28628[(2)] = null);

(statearr_28610_28628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (9))){
var inst_28579 = (state_28599[(8)]);
var state_28599__$1 = state_28599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28599__$1,(11),out,inst_28579);
} else {
if((state_val_28600 === (5))){
var inst_28576 = (state_28599[(7)]);
var inst_28579 = (state_28599[(8)]);
var inst_28583 = cljs.core._EQ_.call(null,inst_28579,inst_28576);
var state_28599__$1 = state_28599;
if(inst_28583){
var statearr_28612_28629 = state_28599__$1;
(statearr_28612_28629[(1)] = (8));

} else {
var statearr_28613_28630 = state_28599__$1;
(statearr_28613_28630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (10))){
var inst_28591 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28614_28631 = state_28599__$1;
(statearr_28614_28631[(2)] = inst_28591);

(statearr_28614_28631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (8))){
var inst_28576 = (state_28599[(7)]);
var tmp28611 = inst_28576;
var inst_28576__$1 = tmp28611;
var state_28599__$1 = (function (){var statearr_28615 = state_28599;
(statearr_28615[(7)] = inst_28576__$1);

return statearr_28615;
})();
var statearr_28616_28632 = state_28599__$1;
(statearr_28616_28632[(2)] = null);

(statearr_28616_28632[(1)] = (2));


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
});})(c__26886__auto___28622,out))
;
return ((function (switch__26795__auto__,c__26886__auto___28622,out){
return (function() {
var cljs$core$async$state_machine__26796__auto__ = null;
var cljs$core$async$state_machine__26796__auto____0 = (function (){
var statearr_28617 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28617[(0)] = cljs$core$async$state_machine__26796__auto__);

(statearr_28617[(1)] = (1));

return statearr_28617;
});
var cljs$core$async$state_machine__26796__auto____1 = (function (state_28599){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_28599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e28618){if((e28618 instanceof Object)){
var ex__26799__auto__ = e28618;
var statearr_28619_28633 = state_28599;
(statearr_28619_28633[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28634 = state_28599;
state_28599 = G__28634;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
cljs$core$async$state_machine__26796__auto__ = function(state_28599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26796__auto____1.call(this,state_28599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26796__auto____0;
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26796__auto____1;
return cljs$core$async$state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto___28622,out))
})();
var state__26888__auto__ = (function (){var statearr_28620 = f__26887__auto__.call(null);
(statearr_28620[(6)] = c__26886__auto___28622);

return statearr_28620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto___28622,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28636 = arguments.length;
switch (G__28636) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26886__auto___28702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto___28702,out){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto___28702,out){
return (function (state_28674){
var state_val_28675 = (state_28674[(1)]);
if((state_val_28675 === (7))){
var inst_28670 = (state_28674[(2)]);
var state_28674__$1 = state_28674;
var statearr_28676_28703 = state_28674__$1;
(statearr_28676_28703[(2)] = inst_28670);

(statearr_28676_28703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (1))){
var inst_28637 = (new Array(n));
var inst_28638 = inst_28637;
var inst_28639 = (0);
var state_28674__$1 = (function (){var statearr_28677 = state_28674;
(statearr_28677[(7)] = inst_28638);

(statearr_28677[(8)] = inst_28639);

return statearr_28677;
})();
var statearr_28678_28704 = state_28674__$1;
(statearr_28678_28704[(2)] = null);

(statearr_28678_28704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (4))){
var inst_28642 = (state_28674[(9)]);
var inst_28642__$1 = (state_28674[(2)]);
var inst_28643 = (inst_28642__$1 == null);
var inst_28644 = cljs.core.not.call(null,inst_28643);
var state_28674__$1 = (function (){var statearr_28679 = state_28674;
(statearr_28679[(9)] = inst_28642__$1);

return statearr_28679;
})();
if(inst_28644){
var statearr_28680_28705 = state_28674__$1;
(statearr_28680_28705[(1)] = (5));

} else {
var statearr_28681_28706 = state_28674__$1;
(statearr_28681_28706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (15))){
var inst_28664 = (state_28674[(2)]);
var state_28674__$1 = state_28674;
var statearr_28682_28707 = state_28674__$1;
(statearr_28682_28707[(2)] = inst_28664);

(statearr_28682_28707[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (13))){
var state_28674__$1 = state_28674;
var statearr_28683_28708 = state_28674__$1;
(statearr_28683_28708[(2)] = null);

(statearr_28683_28708[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (6))){
var inst_28639 = (state_28674[(8)]);
var inst_28660 = (inst_28639 > (0));
var state_28674__$1 = state_28674;
if(cljs.core.truth_(inst_28660)){
var statearr_28684_28709 = state_28674__$1;
(statearr_28684_28709[(1)] = (12));

} else {
var statearr_28685_28710 = state_28674__$1;
(statearr_28685_28710[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (3))){
var inst_28672 = (state_28674[(2)]);
var state_28674__$1 = state_28674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28674__$1,inst_28672);
} else {
if((state_val_28675 === (12))){
var inst_28638 = (state_28674[(7)]);
var inst_28662 = cljs.core.vec.call(null,inst_28638);
var state_28674__$1 = state_28674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28674__$1,(15),out,inst_28662);
} else {
if((state_val_28675 === (2))){
var state_28674__$1 = state_28674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28674__$1,(4),ch);
} else {
if((state_val_28675 === (11))){
var inst_28654 = (state_28674[(2)]);
var inst_28655 = (new Array(n));
var inst_28638 = inst_28655;
var inst_28639 = (0);
var state_28674__$1 = (function (){var statearr_28686 = state_28674;
(statearr_28686[(7)] = inst_28638);

(statearr_28686[(10)] = inst_28654);

(statearr_28686[(8)] = inst_28639);

return statearr_28686;
})();
var statearr_28687_28711 = state_28674__$1;
(statearr_28687_28711[(2)] = null);

(statearr_28687_28711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (9))){
var inst_28638 = (state_28674[(7)]);
var inst_28652 = cljs.core.vec.call(null,inst_28638);
var state_28674__$1 = state_28674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28674__$1,(11),out,inst_28652);
} else {
if((state_val_28675 === (5))){
var inst_28638 = (state_28674[(7)]);
var inst_28642 = (state_28674[(9)]);
var inst_28647 = (state_28674[(11)]);
var inst_28639 = (state_28674[(8)]);
var inst_28646 = (inst_28638[inst_28639] = inst_28642);
var inst_28647__$1 = (inst_28639 + (1));
var inst_28648 = (inst_28647__$1 < n);
var state_28674__$1 = (function (){var statearr_28688 = state_28674;
(statearr_28688[(12)] = inst_28646);

(statearr_28688[(11)] = inst_28647__$1);

return statearr_28688;
})();
if(cljs.core.truth_(inst_28648)){
var statearr_28689_28712 = state_28674__$1;
(statearr_28689_28712[(1)] = (8));

} else {
var statearr_28690_28713 = state_28674__$1;
(statearr_28690_28713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (14))){
var inst_28667 = (state_28674[(2)]);
var inst_28668 = cljs.core.async.close_BANG_.call(null,out);
var state_28674__$1 = (function (){var statearr_28692 = state_28674;
(statearr_28692[(13)] = inst_28667);

return statearr_28692;
})();
var statearr_28693_28714 = state_28674__$1;
(statearr_28693_28714[(2)] = inst_28668);

(statearr_28693_28714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (10))){
var inst_28658 = (state_28674[(2)]);
var state_28674__$1 = state_28674;
var statearr_28694_28715 = state_28674__$1;
(statearr_28694_28715[(2)] = inst_28658);

(statearr_28694_28715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28675 === (8))){
var inst_28638 = (state_28674[(7)]);
var inst_28647 = (state_28674[(11)]);
var tmp28691 = inst_28638;
var inst_28638__$1 = tmp28691;
var inst_28639 = inst_28647;
var state_28674__$1 = (function (){var statearr_28695 = state_28674;
(statearr_28695[(7)] = inst_28638__$1);

(statearr_28695[(8)] = inst_28639);

return statearr_28695;
})();
var statearr_28696_28716 = state_28674__$1;
(statearr_28696_28716[(2)] = null);

(statearr_28696_28716[(1)] = (2));


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
});})(c__26886__auto___28702,out))
;
return ((function (switch__26795__auto__,c__26886__auto___28702,out){
return (function() {
var cljs$core$async$state_machine__26796__auto__ = null;
var cljs$core$async$state_machine__26796__auto____0 = (function (){
var statearr_28697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28697[(0)] = cljs$core$async$state_machine__26796__auto__);

(statearr_28697[(1)] = (1));

return statearr_28697;
});
var cljs$core$async$state_machine__26796__auto____1 = (function (state_28674){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_28674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e28698){if((e28698 instanceof Object)){
var ex__26799__auto__ = e28698;
var statearr_28699_28717 = state_28674;
(statearr_28699_28717[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28718 = state_28674;
state_28674 = G__28718;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
cljs$core$async$state_machine__26796__auto__ = function(state_28674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26796__auto____1.call(this,state_28674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26796__auto____0;
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26796__auto____1;
return cljs$core$async$state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto___28702,out))
})();
var state__26888__auto__ = (function (){var statearr_28700 = f__26887__auto__.call(null);
(statearr_28700[(6)] = c__26886__auto___28702);

return statearr_28700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto___28702,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28720 = arguments.length;
switch (G__28720) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26886__auto___28790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26886__auto___28790,out){
return (function (){
var f__26887__auto__ = (function (){var switch__26795__auto__ = ((function (c__26886__auto___28790,out){
return (function (state_28762){
var state_val_28763 = (state_28762[(1)]);
if((state_val_28763 === (7))){
var inst_28758 = (state_28762[(2)]);
var state_28762__$1 = state_28762;
var statearr_28764_28791 = state_28762__$1;
(statearr_28764_28791[(2)] = inst_28758);

(statearr_28764_28791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (1))){
var inst_28721 = [];
var inst_28722 = inst_28721;
var inst_28723 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28762__$1 = (function (){var statearr_28765 = state_28762;
(statearr_28765[(7)] = inst_28723);

(statearr_28765[(8)] = inst_28722);

return statearr_28765;
})();
var statearr_28766_28792 = state_28762__$1;
(statearr_28766_28792[(2)] = null);

(statearr_28766_28792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (4))){
var inst_28726 = (state_28762[(9)]);
var inst_28726__$1 = (state_28762[(2)]);
var inst_28727 = (inst_28726__$1 == null);
var inst_28728 = cljs.core.not.call(null,inst_28727);
var state_28762__$1 = (function (){var statearr_28767 = state_28762;
(statearr_28767[(9)] = inst_28726__$1);

return statearr_28767;
})();
if(inst_28728){
var statearr_28768_28793 = state_28762__$1;
(statearr_28768_28793[(1)] = (5));

} else {
var statearr_28769_28794 = state_28762__$1;
(statearr_28769_28794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (15))){
var inst_28752 = (state_28762[(2)]);
var state_28762__$1 = state_28762;
var statearr_28770_28795 = state_28762__$1;
(statearr_28770_28795[(2)] = inst_28752);

(statearr_28770_28795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (13))){
var state_28762__$1 = state_28762;
var statearr_28771_28796 = state_28762__$1;
(statearr_28771_28796[(2)] = null);

(statearr_28771_28796[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (6))){
var inst_28722 = (state_28762[(8)]);
var inst_28747 = inst_28722.length;
var inst_28748 = (inst_28747 > (0));
var state_28762__$1 = state_28762;
if(cljs.core.truth_(inst_28748)){
var statearr_28772_28797 = state_28762__$1;
(statearr_28772_28797[(1)] = (12));

} else {
var statearr_28773_28798 = state_28762__$1;
(statearr_28773_28798[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (3))){
var inst_28760 = (state_28762[(2)]);
var state_28762__$1 = state_28762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28762__$1,inst_28760);
} else {
if((state_val_28763 === (12))){
var inst_28722 = (state_28762[(8)]);
var inst_28750 = cljs.core.vec.call(null,inst_28722);
var state_28762__$1 = state_28762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28762__$1,(15),out,inst_28750);
} else {
if((state_val_28763 === (2))){
var state_28762__$1 = state_28762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28762__$1,(4),ch);
} else {
if((state_val_28763 === (11))){
var inst_28726 = (state_28762[(9)]);
var inst_28730 = (state_28762[(10)]);
var inst_28740 = (state_28762[(2)]);
var inst_28741 = [];
var inst_28742 = inst_28741.push(inst_28726);
var inst_28722 = inst_28741;
var inst_28723 = inst_28730;
var state_28762__$1 = (function (){var statearr_28774 = state_28762;
(statearr_28774[(7)] = inst_28723);

(statearr_28774[(11)] = inst_28740);

(statearr_28774[(12)] = inst_28742);

(statearr_28774[(8)] = inst_28722);

return statearr_28774;
})();
var statearr_28775_28799 = state_28762__$1;
(statearr_28775_28799[(2)] = null);

(statearr_28775_28799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (9))){
var inst_28722 = (state_28762[(8)]);
var inst_28738 = cljs.core.vec.call(null,inst_28722);
var state_28762__$1 = state_28762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28762__$1,(11),out,inst_28738);
} else {
if((state_val_28763 === (5))){
var inst_28723 = (state_28762[(7)]);
var inst_28726 = (state_28762[(9)]);
var inst_28730 = (state_28762[(10)]);
var inst_28730__$1 = f.call(null,inst_28726);
var inst_28731 = cljs.core._EQ_.call(null,inst_28730__$1,inst_28723);
var inst_28732 = cljs.core.keyword_identical_QMARK_.call(null,inst_28723,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28733 = ((inst_28731) || (inst_28732));
var state_28762__$1 = (function (){var statearr_28776 = state_28762;
(statearr_28776[(10)] = inst_28730__$1);

return statearr_28776;
})();
if(cljs.core.truth_(inst_28733)){
var statearr_28777_28800 = state_28762__$1;
(statearr_28777_28800[(1)] = (8));

} else {
var statearr_28778_28801 = state_28762__$1;
(statearr_28778_28801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (14))){
var inst_28755 = (state_28762[(2)]);
var inst_28756 = cljs.core.async.close_BANG_.call(null,out);
var state_28762__$1 = (function (){var statearr_28780 = state_28762;
(statearr_28780[(13)] = inst_28755);

return statearr_28780;
})();
var statearr_28781_28802 = state_28762__$1;
(statearr_28781_28802[(2)] = inst_28756);

(statearr_28781_28802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (10))){
var inst_28745 = (state_28762[(2)]);
var state_28762__$1 = state_28762;
var statearr_28782_28803 = state_28762__$1;
(statearr_28782_28803[(2)] = inst_28745);

(statearr_28782_28803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (8))){
var inst_28722 = (state_28762[(8)]);
var inst_28726 = (state_28762[(9)]);
var inst_28730 = (state_28762[(10)]);
var inst_28735 = inst_28722.push(inst_28726);
var tmp28779 = inst_28722;
var inst_28722__$1 = tmp28779;
var inst_28723 = inst_28730;
var state_28762__$1 = (function (){var statearr_28783 = state_28762;
(statearr_28783[(7)] = inst_28723);

(statearr_28783[(8)] = inst_28722__$1);

(statearr_28783[(14)] = inst_28735);

return statearr_28783;
})();
var statearr_28784_28804 = state_28762__$1;
(statearr_28784_28804[(2)] = null);

(statearr_28784_28804[(1)] = (2));


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
});})(c__26886__auto___28790,out))
;
return ((function (switch__26795__auto__,c__26886__auto___28790,out){
return (function() {
var cljs$core$async$state_machine__26796__auto__ = null;
var cljs$core$async$state_machine__26796__auto____0 = (function (){
var statearr_28785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28785[(0)] = cljs$core$async$state_machine__26796__auto__);

(statearr_28785[(1)] = (1));

return statearr_28785;
});
var cljs$core$async$state_machine__26796__auto____1 = (function (state_28762){
while(true){
var ret_value__26797__auto__ = (function (){try{while(true){
var result__26798__auto__ = switch__26795__auto__.call(null,state_28762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26798__auto__;
}
break;
}
}catch (e28786){if((e28786 instanceof Object)){
var ex__26799__auto__ = e28786;
var statearr_28787_28805 = state_28762;
(statearr_28787_28805[(5)] = ex__26799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28806 = state_28762;
state_28762 = G__28806;
continue;
} else {
return ret_value__26797__auto__;
}
break;
}
});
cljs$core$async$state_machine__26796__auto__ = function(state_28762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26796__auto____1.call(this,state_28762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26796__auto____0;
cljs$core$async$state_machine__26796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26796__auto____1;
return cljs$core$async$state_machine__26796__auto__;
})()
;})(switch__26795__auto__,c__26886__auto___28790,out))
})();
var state__26888__auto__ = (function (){var statearr_28788 = f__26887__auto__.call(null);
(statearr_28788[(6)] = c__26886__auto___28790);

return statearr_28788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26888__auto__);
});})(c__26886__auto___28790,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1539578343201
