(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=10)})([function(module,__webpack_exports__,__webpack_require__){"use strict";var _util__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8);__webpack_require__.d(__webpack_exports__,"normalizeError",(function(){return _util__WEBPACK_IMPORTED_MODULE_0__["a"]}));__webpack_require__.d(__webpack_exports__,"removeLeadingSlash",(function(){return _util__WEBPACK_IMPORTED_MODULE_0__["b"]}));var _streaming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3);if(__webpack_require__.o(_streaming__WEBPACK_IMPORTED_MODULE_1__,"createBatchedFunction"))__webpack_require__.d(__webpack_exports__,"createBatchedFunction",(function(){return _streaming__WEBPACK_IMPORTED_MODULE_1__["createBatchedFunction"]}));var _buffer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7);__webpack_require__.d(__webpack_exports__,"createBatchedFunction",(function(){return _buffer__WEBPACK_IMPORTED_MODULE_2__["a"]}));var _batch__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5);var _batch__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_batch__WEBPACK_IMPORTED_MODULE_3__)},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.Rxjs},function(module,__webpack_exports__,__webpack_require__){"use strict";var _types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);var _types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_0__);if(__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_0__,"createBatchedFunction"))__webpack_require__.d(__webpack_exports__,"createBatchedFunction",(function(){return _types__WEBPACK_IMPORTED_MODULE_0__["createBatchedFunction"]}))},function(module,exports){},function(module,exports){},function(module,exports){},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createBatchedFunction}));function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}class ItemBuffer{constructor(params){this.params=params;_defineProperty(this,"list",[])}get length(){return this.list.length}write(item){this.list.push(item);const{flushOnMaxItems:flushOnMaxItems}=this.params;if(flushOnMaxItems){if(this.list.length>=flushOnMaxItems){this.flush()}}}clear(){this.list=[]}flush(){let list;[list,this.list]=[this.list,[]];this.params.onFlush(list)}}function timed_item_buffer_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}class timed_item_buffer_TimedItemBuffer extends ItemBuffer{constructor(params){super(params);this.params=params;timed_item_buffer_defineProperty(this,"timer",void 0);timed_item_buffer_defineProperty(this,"onTimeout",()=>{this.flush()})}write(item){super.write(item);if(this.params.maxItemAge&&this.length===1){this.timer=setTimeout(this.onTimeout,this.params.maxItemAge)}}clear(){clearTimeout(this.timer);super.clear()}flush(){clearTimeout(this.timer);super.flush()}}const createBatchedFunction=params=>{const{onCall:onCall,onBatch:onBatch,maxItemAge:maxItemAge=10,flushOnMaxItems:flushOnMaxItems=25}=params;const buffer=new timed_item_buffer_TimedItemBuffer({onFlush:onBatch,maxItemAge:maxItemAge,flushOnMaxItems:flushOnMaxItems});const fn=(...args)=>{const[result,batchEntry]=onCall(...args);buffer.write(batchEntry);return result};return[fn,buffer]}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return normalizeError}));__webpack_require__.d(__webpack_exports__,"b",(function(){return removeLeadingSlash}));const normalizeError=err=>{if(!err){return{message:"Unknown error."}}if(err instanceof Error){return{message:err.message}}if(typeof err==="object"){return{...err,message:err.message||"Unknown error."}}return{message:String(err)}};const removeLeadingSlash=text=>text[0]==="/"?text.substr(1):text},function(module,exports){module.exports=__kbnSharedDeps__.RxjsOperators},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_val_loader_dist_cjs_js_key_bfetch_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11);var _node_modules_val_loader_dist_cjs_js_key_bfetch_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_bfetch_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);__kbnBundles__.define("plugin/bfetch/public",__webpack_require__,12)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__["bfetch"]},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"BfetchPublicSetup",(function(){return undefined}));__webpack_require__.d(__webpack_exports__,"BfetchPublicStart",(function(){return undefined}));__webpack_require__.d(__webpack_exports__,"BfetchPublicContract",(function(){return undefined}));__webpack_require__.d(__webpack_exports__,"split",(function(){return split}));__webpack_require__.d(__webpack_exports__,"BatchedFunc",(function(){return types["BatchedFunc"]}));__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin}));var external_kbnSharedDeps_Rxjs_=__webpack_require__(2);var external_kbnSharedDeps_RxjsOperators_=__webpack_require__(9);const split=(delimiter="\n")=>in$=>{const out$=new external_kbnSharedDeps_Rxjs_["Subject"];let startingText="";in$.subscribe(chunk=>{const messages=(startingText+chunk).split(delimiter);messages.slice(0,-1).forEach(out$.next.bind(out$));startingText=messages.length?messages[messages.length-1]:""},out$.error.bind(out$),()=>{out$.next(startingText);out$.complete()});return out$.pipe(Object(external_kbnSharedDeps_RxjsOperators_["filter"])(Boolean))};const fromStreamingXhr=(xhr,signal)=>{const subject=new external_kbnSharedDeps_Rxjs_["Subject"];let index=0;let aborted=false;const processBatch=()=>{if(aborted)return;const{responseText:responseText}=xhr;if(index>=responseText.length)return;subject.next(responseText.substr(index));index=responseText.length};xhr.onprogress=processBatch;const onBatchAbort=()=>{if(xhr.readyState!==4){aborted=true;xhr.abort();subject.complete();if(signal)signal.removeEventListener("abort",onBatchAbort)}};if(signal)signal.addEventListener("abort",onBatchAbort);xhr.onreadystatechange=()=>{if(aborted)return;processBatch();if(xhr.readyState===4){if(signal)signal.removeEventListener("abort",onBatchAbort);if(xhr.status===0||xhr.status>=400){subject.error(new Error(`Batch request failed with status ${xhr.status}`))}else{subject.complete()}}};return subject};function fetch_streaming_fetchStreaming({url:url,headers:headers={},method:method="POST",body:body="",signal:signal}){const xhr=new window.XMLHttpRequest;xhr.open(method,url);xhr.withCredentials=true;Object.entries(headers).forEach(([k,v])=>xhr.setRequestHeader(k,v));const stream=fromStreamingXhr(xhr,signal);xhr.send(body);return{xhr:xhr,stream:stream}}var common=__webpack_require__(0);var public_=__webpack_require__(1);const createStreamingBatchedFunction=params=>{const{url:url,fetchStreaming:fetchStreamingInjected=fetch_streaming_fetchStreaming,flushOnMaxItems:flushOnMaxItems=25,maxItemAge:maxItemAge=10}=params;const[fn]=Object(common["createBatchedFunction"])({onCall:(payload,signal)=>{const future=Object(public_["defer"])();const entry={payload:payload,future:future,signal:signal};return[future.promise,entry]},onBatch:async items=>{try{items=items.filter(item=>{var _item$signal,_item$signal2;if((_item$signal=item.signal)!==null&&_item$signal!==void 0&&_item$signal.aborted)item.future.reject(new public_["AbortError"]);return!((_item$signal2=item.signal)!==null&&_item$signal2!==void 0&&_item$signal2.aborted)});const donePromises=items.map(item=>new Promise(resolve=>{const{promise:abortPromise,cleanup:cleanup}=item.signal?Object(public_["abortSignalToPromise"])(item.signal):{promise:undefined,cleanup:()=>{}};const onDone=()=>{resolve();cleanup()};if(abortPromise)abortPromise.catch(()=>{item.future.reject(new public_["AbortError"]);onDone()});item.future.promise.then(onDone,onDone)}));const abortController=new AbortController;let isBatchDone=false;Promise.all(donePromises).then(()=>{isBatchDone=true;abortController.abort()});const batch=items.map(item=>item.payload);const{stream:stream}=fetchStreamingInjected({url:url,body:JSON.stringify({batch:batch}),method:"POST",signal:abortController.signal});const handleStreamError=error=>{const normalizedError=Object(common["normalizeError"])(error);normalizedError.code="STREAM";for(const{future:future}of items)future.reject(normalizedError)};stream.pipe(split("\n")).subscribe({next:json=>{try{const response=JSON.parse(json);if(response.error){items[response.id].future.reject(response.error)}else if(response.result!==undefined){items[response.id].future.resolve(response.result)}}catch(e){handleStreamError(e)}},error:handleStreamError,complete:()=>{if(!isBatchDone){const error={message:"Connection terminated prematurely.",code:"CONNECTION"};for(const{future:future}of items)future.reject(error)}}});await stream.toPromise()}catch(error){for(const item of items)item.future.reject(error)}},flushOnMaxItems:flushOnMaxItems,maxItemAge:maxItemAge});return fn};function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}class plugin_BfetchPublicPlugin{constructor(initializerContext){this.initializerContext=initializerContext;_defineProperty(this,"contract",void 0);_defineProperty(this,"fetchStreaming",(version,basePath)=>params=>fetch_streaming_fetchStreaming({...params,url:`${basePath}/${Object(common["removeLeadingSlash"])(params.url)}`,headers:{"Content-Type":"application/json","kbn-version":version,...params.headers||{}}}));_defineProperty(this,"batchedFunction",fetchStreaming=>params=>createStreamingBatchedFunction({...params,fetchStreaming:params.fetchStreaming||fetchStreaming}))}setup(core,plugins){const{version:version}=this.initializerContext.env.packageInfo;const basePath=core.http.basePath.get();const fetchStreaming=this.fetchStreaming(version,basePath);const batchedFunction=this.batchedFunction(fetchStreaming);this.contract={fetchStreaming:fetchStreaming,batchedFunction:batchedFunction};return this.contract}start(core,plugins){return this.contract}stop(){}}var types=__webpack_require__(6);function public_plugin(initializerContext){return new plugin_BfetchPublicPlugin(initializerContext)}}]);