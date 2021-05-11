(function(modules){function webpackJsonpCallback(data){var chunkIds=data[0];var moreModules=data[1];var moduleId,chunkId,i=0,resolves=[];for(;i<chunkIds.length;i++){chunkId=chunkIds[i];if(Object.prototype.hasOwnProperty.call(installedChunks,chunkId)&&installedChunks[chunkId]){resolves.push(installedChunks[chunkId][0])}installedChunks[chunkId]=0}for(moduleId in moreModules){if(Object.prototype.hasOwnProperty.call(moreModules,moduleId)){modules[moduleId]=moreModules[moduleId]}}if(parentJsonpFunction)parentJsonpFunction(data);while(resolves.length){resolves.shift()()}}var installedModules={};var installedChunks={0:0};function jsonpScriptSrc(chunkId){return __webpack_require__.p+"visTypeTimelion.chunk."+chunkId+".js"}function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.e=function requireEnsure(chunkId){var promises=[];var installedChunkData=installedChunks[chunkId];if(installedChunkData!==0){if(installedChunkData){promises.push(installedChunkData[2])}else{var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var script=document.createElement("script");var onScriptComplete;script.charset="utf-8";script.timeout=120;if(__webpack_require__.nc){script.setAttribute("nonce",__webpack_require__.nc)}script.src=jsonpScriptSrc(chunkId);var error=new Error;onScriptComplete=function(event){script.onerror=script.onload=null;clearTimeout(timeout);var chunk=installedChunks[chunkId];if(chunk!==0){if(chunk){var errorType=event&&(event.type==="load"?"missing":event.type);var realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")";error.name="ChunkLoadError";error.type=errorType;error.request=realSrc;chunk[1](error)}installedChunks[chunkId]=undefined}};var timeout=setTimeout((function(){onScriptComplete({type:"timeout",target:script})}),12e4);script.onerror=script.onload=onScriptComplete;document.head.appendChild(script)}}return Promise.all(promises)};__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";__webpack_require__.oe=function(err){console.error(err);throw err};var jsonpArray=window["visTypeTimelion_bundle_jsonpfunction"]=window["visTypeTimelion_bundle_jsonpfunction"]||[];var oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback;jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;return __webpack_require__(__webpack_require__.s=19)})([function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/data/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.Lodash},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18n},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return getIndexPatterns}));__webpack_require__.d(__webpack_exports__,"d",(function(){return setIndexPatterns}));__webpack_require__.d(__webpack_exports__,"a",(function(){return getDataSearch}));__webpack_require__.d(__webpack_exports__,"c",(function(){return setDataSearch}));var _kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9);var _kibana_utils_public__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__);const[getIndexPatterns,setIndexPatterns]=Object(_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])("IndexPatterns");const[getDataSearch,setDataSearch]=Object(_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])("Search")},function(module,exports){module.exports=__kbnSharedDeps__.React},function(module,exports){module.exports=__kbnSharedDeps__.Moment},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/visualizations/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return calculateInterval}));__webpack_require__.d(__webpack_exports__,"a",(function(){return DEFAULT_TIME_FORMAT}));var external_kbnSharedDeps_Lodash_=__webpack_require__(1);var external_kbnSharedDeps_Moment_=__webpack_require__(5);var external_kbnSharedDeps_Moment_default=__webpack_require__.n(external_kbnSharedDeps_Moment_);const unitMappings=[["ms","milliseconds","millisecond"],["s","seconds","second","sec"],["m","minutes","minute","min"],["h","hours","hour"],["d","days","day"],["w","weeks","week"],["M","months","month"],["quarter"],["y","years","year"]];const vals={};unitMappings.forEach(units=>{const normal=external_kbnSharedDeps_Moment_default.a.normalizeUnits(units[0]);const val=external_kbnSharedDeps_Moment_default.a.duration(1,normal).asMilliseconds();[].concat(normal,units).forEach(unit=>{vals[unit]=val})});const parseRE=new RegExp("^(\\d+(?:\\.\\d*)?)?\\s*("+Object(external_kbnSharedDeps_Lodash_["keys"])(vals).join("|")+")$");function toMS(expr){const match=expr.match(parseRE);if(match){if(match[2]==="M"&&match[1]!=="1"){throw new Error("Invalid interval. 1M is only valid monthly interval.")}return parseFloat(match[1]||"1")*vals[match[2]]}}function roundInterval(interval){switch(true){case interval<=500:return"100ms";case interval<=5e3:return"1s";case interval<=7500:return"5s";case interval<=15e3:return"10s";case interval<=45e3:return"30s";case interval<=18e4:return"1m";case interval<=45e4:return"5m";case interval<=12e5:return"10m";case interval<=27e5:return"30m";case interval<=72e5:return"1h";case interval<=216e5:return"3h";case interval<=864e5:return"12h";case interval<=6048e5:return"24h";case interval<=18144e5:return"1w";case interval<36288e5:return"30d";default:return"1y"}}function calculateInterval(from,to,size,interval,min){if(interval!=="auto"){return interval}const dateMathInterval=roundInterval((to-from)/size);const dateMathIntervalMs=toMS(dateMathInterval);const minMs=toMS(min);if(dateMathIntervalMs!==undefined&&minMs!==undefined&&dateMathIntervalMs<minMs){return min}return dateMathInterval}const DEFAULT_TIME_FORMAT="MMMM Do YYYY, HH:mm:ss.SSS"},function(module,exports){module.exports=__kbnSharedDeps__.MomentTimezone},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/expressions/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.ReactDom},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return tickFormatters}));var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1);var lodash__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);function baseTickFormatter(value,axis){const factor=axis.tickDecimals?Math.pow(10,axis.tickDecimals):1;const formatted=""+Math.round(value*factor)/factor;if(axis.tickDecimals!=null){const decimal=formatted.indexOf(".");const precision=decimal===-1?0:formatted.length-decimal-1;if(precision<axis.tickDecimals){return(precision?formatted:formatted+".")+(""+factor).substr(1,axis.tickDecimals-precision)}}return formatted}function unitFormatter(divisor,units){return val=>{let index=0;const isNegative=val<0;val=Math.abs(val);while(val>=divisor&&index<units.length){val/=divisor;index++}const value=Math.round(val*100)/100*(isNegative?-1:1);return`${value}${units[index]}`}}function tickFormatters(){return{bits:unitFormatter(1e3,["b","kb","mb","gb","tb","pb"]),"bits/s":unitFormatter(1e3,["b/s","kb/s","mb/s","gb/s","tb/s","pb/s"]),bytes:unitFormatter(1024,["B","KB","MB","GB","TB","PB"]),"bytes/s":unitFormatter(1024,["B/s","KB/s","MB/s","GB/s","TB/s","PB/s"]),currency(val,axis){return val.toLocaleString("en",{style:"currency",currency:axis&&axis.options&&axis.options.units.prefix||"USD"})},percent(val,axis){let precision=Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(axis,"tickDecimals",0)-Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(axis,"options.units.tickDecimalsShift",0);if(precision<0){precision=0}else if(precision>20){precision=20}return(val*100).toFixed(precision)+"%"},custom(val,axis){const formattedVal=baseTickFormatter(val,axis);const prefix=axis&&axis.options&&axis.options.units.prefix;const suffix=axis&&axis.options&&axis.options.units.suffix;return prefix+formattedVal+suffix}}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return xaxisFormatterProvider}));var moment__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5);var moment__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2);var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);function xaxisFormatterProvider(config){function getFormat(esInterval){const parts=esInterval.match(/(\d+)(ms|s|m|h|d|w|M|y|)/);if(parts===null||parts[1]===null||parts[2]===null){throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate("timelion.panels.timechart.unknownIntervalErrorMessage",{defaultMessage:"Unknown interval"}))}const interval=moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(Number(parts[1]),parts[2]);const rules=config.get("dateFormat:scaled");for(let i=rules.length-1;i>=0;i--){const rule=rules[i];if(!rule[0]||interval>=moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(rule[0])){return rule[1]}}return config.get("dateFormat")}return esInterval=>getFormat(esInterval)}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return generateTicksProvider}));function generateTicksProvider(){function floorInBase(n,base){return base*Math.floor(n/base)}function generateTicks(axis){const returnTicks=[];let tickSize=2;let delta=axis.delta||0;let steps=0;let tickVal;let tickCount=0;while(Math.abs(delta)>=1024){steps++;delta/=1024}while(tickSize<=1024){if(delta<=tickSize){break}tickSize*=2}axis.tickSize=tickSize*Math.pow(1024,steps);const tickMin=floorInBase(axis.min||0,axis.tickSize);do{tickVal=tickMin+tickCount++*axis.tickSize;returnTicks.push(tickVal)}while(tickVal<(axis.max||0));return returnTicks}return axis=>generateTicks(axis)}},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/visDefaultEditor/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return parseTimelionExpressionAsync}));const parseTimelionExpressionAsync=async input=>{const{parseTimelionExpression:parseTimelionExpression}=await __webpack_require__.e(3).then(__webpack_require__.bind(null,26));return parseTimelionExpression(input)}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getArgValueSuggestions}));var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1);var lodash__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);var _plugin_services__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3);var _data_public__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0);var _data_public__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_2__);const isRuntimeField=field=>Boolean(field.runtimeField);function getArgValueSuggestions(){const indexPatterns=Object(_plugin_services__WEBPACK_IMPORTED_MODULE_1__["b"])();async function getIndexPattern(functionArgs){const indexPatternArg=functionArgs.find(({name:name})=>name==="index");if(!indexPatternArg){return}const indexPatternTitle=Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(indexPatternArg,"value.text");return(await indexPatterns.find(indexPatternTitle)).find(index=>index.title===indexPatternTitle)}function containsFieldName(partial,field){if(!partial){return true}return field.name.includes(partial)}const customHandlers={es:{async index(partial){const search=partial?`${partial}*`:"*";const size=25;return(await indexPatterns.find(search,size)).map(({title:title})=>({name:title}))},async metric(partial,functionArgs){if(!partial||!partial.includes(":")){return[{name:"avg:"},{name:"cardinality:"},{name:"count"},{name:"max:"},{name:"min:"},{name:"percentiles:"},{name:"sum:"}]}const indexPattern=await getIndexPattern(functionArgs);if(!indexPattern){return[]}const valueSplit=partial.split(":");return indexPattern.fields.getByType(_data_public__WEBPACK_IMPORTED_MODULE_2__["KBN_FIELD_TYPES"].NUMBER).filter(field=>!isRuntimeField(field)&&field.aggregatable&&containsFieldName(valueSplit[1],field)&&!_data_public__WEBPACK_IMPORTED_MODULE_2__["indexPatterns"].isNestedField(field)).map(field=>({name:`${valueSplit[0]}:${field.name}`,help:field.type}))},async split(partial,functionArgs){const indexPattern=await getIndexPattern(functionArgs);if(!indexPattern){return[]}return indexPattern.fields.getAll().filter(field=>!isRuntimeField(field)&&field.aggregatable&&[_data_public__WEBPACK_IMPORTED_MODULE_2__["KBN_FIELD_TYPES"].NUMBER,_data_public__WEBPACK_IMPORTED_MODULE_2__["KBN_FIELD_TYPES"].BOOLEAN,_data_public__WEBPACK_IMPORTED_MODULE_2__["KBN_FIELD_TYPES"].DATE,_data_public__WEBPACK_IMPORTED_MODULE_2__["KBN_FIELD_TYPES"].IP,_data_public__WEBPACK_IMPORTED_MODULE_2__["KBN_FIELD_TYPES"].STRING].includes(field.type)&&containsFieldName(partial,field)&&!_data_public__WEBPACK_IMPORTED_MODULE_2__["indexPatterns"].isNestedField(field)).map(field=>({name:field.name,help:field.type}))},async timefield(partial,functionArgs){const indexPattern=await getIndexPattern(functionArgs);if(!indexPattern){return[]}return indexPattern.fields.getByType(_data_public__WEBPACK_IMPORTED_MODULE_2__["KBN_FIELD_TYPES"].DATE).filter(field=>!isRuntimeField(field)&&containsFieldName(partial,field)&&!_data_public__WEBPACK_IMPORTED_MODULE_2__["indexPatterns"].isNestedField(field)).map(field=>({name:field.name}))}}};return{hasDynamicSuggestionsForArgument:(functionName,argName)=>customHandlers[functionName]&&customHandlers[functionName][argName],getDynamicSuggestionsForArgument:async(functionName,argName,functionArgs,partialInput="")=>await customHandlers[functionName][argName](partialInput,functionArgs),getStaticSuggestionsForInput:(partialInput="",staticSuggestions=[])=>{if(partialInput){return staticSuggestions.filter(suggestion=>suggestion.name.includes(partialInput))}return staticSuggestions}}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_val_loader_dist_cjs_js_key_visTypeTimelion_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20);var _node_modules_val_loader_dist_cjs_js_key_visTypeTimelion_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_visTypeTimelion_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);__kbnBundles__.define("plugin/visTypeTimelion/public",__webpack_require__,21)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__["visTypeTimelion"]},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin}));__webpack_require__.d(__webpack_exports__,"getTimezone",(function(){return getTimezone}));__webpack_require__.d(__webpack_exports__,"tickFormatters",(function(){return tick_formatters["a"]}));__webpack_require__.d(__webpack_exports__,"xaxisFormatterProvider",(function(){return xaxis_formatter["a"]}));__webpack_require__.d(__webpack_exports__,"generateTicksProvider",(function(){return tick_generator["a"]}));__webpack_require__.d(__webpack_exports__,"DEFAULT_TIME_FORMAT",(function(){return lib["a"]}));__webpack_require__.d(__webpack_exports__,"calculateInterval",(function(){return lib["b"]}));__webpack_require__.d(__webpack_exports__,"VisTypeTimelionPluginStart",(function(){return undefined}));__webpack_require__.d(__webpack_exports__,"VisTypeTimelionPluginSetup",(function(){return undefined}));var external_kbnSharedDeps_Lodash_=__webpack_require__(1);var external_kbnSharedDeps_KbnI18n_=__webpack_require__(2);var public_=__webpack_require__(0);var external_kbnSharedDeps_MomentTimezone_=__webpack_require__(8);var external_kbnSharedDeps_MomentTimezone_default=__webpack_require__.n(external_kbnSharedDeps_MomentTimezone_);function getTimezone(config){if(config.isDefault("dateFormat:tz")){const detectedTimezone=external_kbnSharedDeps_MomentTimezone_default.a.tz.guess();if(detectedTimezone)return detectedTimezone;else return external_kbnSharedDeps_MomentTimezone_default()().format("Z")}else{return config.get("dateFormat:tz","Browser")}}var plugin_services=__webpack_require__(3);function getTimelionRequestHandler({uiSettings:uiSettings,http:http,timefilter:timefilter}){const timezone=getTimezone(uiSettings);return async function({timeRange:timeRange,filters:filters,query:query,visParams:visParams,searchSessionId:searchSessionId}){const dataSearch=Object(plugin_services["a"])();const expression=visParams.expression;if(!expression){throw new Error(external_kbnSharedDeps_KbnI18n_["i18n"].translate("timelion.emptyExpressionErrorMessage",{defaultMessage:"Timelion error: No expression provided"}))}const esQueryConfigs=public_["esQuery"].getEsQueryConfig(uiSettings);const timeRangeBounds=timefilter.calculateBounds(timeRange);const untrackSearch=dataSearch.session.isCurrentSession(searchSessionId)&&dataSearch.session.trackSearch({abort:()=>{}});try{const searchSessionOptions=dataSearch.session.getSearchOptions(searchSessionId);return await http.post("/api/timelion/run",{body:JSON.stringify({sheet:[expression],extended:{es:{filter:public_["esQuery"].buildEsQuery(undefined,query,filters,esQueryConfigs)}},time:{from:timeRangeBounds.min,to:timeRangeBounds.max,interval:visParams.interval,timezone:timezone},...searchSessionOptions&&{searchSession:searchSessionOptions}})})}catch(e){if(e&&e.body){const err=new Error(`${external_kbnSharedDeps_KbnI18n_["i18n"].translate("timelion.requestHandlerErrorTitle",{defaultMessage:"Timelion request error"})}: ${e.body.title} ${e.body.message}`);err.stack=e.stack;throw err}else{throw e}}finally{if(untrackSearch&&dataSearch.session.isCurrentSession(searchSessionId)){untrackSearch()}}}}var external_kbnSharedDeps_React_=__webpack_require__(4);var external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_);var visDefaultEditor_public_=__webpack_require__(16);var expressions_public_=__webpack_require__(10);const toExpressionAst=vis=>{const{expression:expression,interval:interval}=vis.params;const timelion=Object(expressions_public_["buildExpressionFunction"])("timelion_vis",{expression:expression,interval:interval});const ast=Object(expressions_public_["buildExpression"])([timelion]);return ast.toAst()};var parser_async=__webpack_require__(17);var visualizations_public_=__webpack_require__(6);function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}const TimelionOptions=Object(external_kbnSharedDeps_React_["lazy"])(()=>__webpack_require__.e(2).then(__webpack_require__.bind(null,48)));const TIMELION_VIS_NAME="timelion";function getTimelionVisDefinition(dependencies){return{name:TIMELION_VIS_NAME,title:"Timelion",icon:"visTimelion",description:external_kbnSharedDeps_KbnI18n_["i18n"].translate("timelion.timelionDescription",{defaultMessage:"Show time series data on a graph."}),visConfig:{defaults:{expression:".es(*)",interval:"auto"}},editorConfig:{optionsTemplate:props=>external_kbnSharedDeps_React_default.a.createElement(TimelionOptions,_extends({services:dependencies},props)),defaultSize:visDefaultEditor_public_["DefaultEditorSize"].MEDIUM},toExpressionAst:toExpressionAst,inspectorAdapters:{},getSupportedTriggers:()=>[visualizations_public_["VIS_EVENT_TO_TRIGGER"].applyFilter],getUsedIndexPattern:async params=>{try{var _await$parseTimelionE,_await$parseTimelionE2;const args=(_await$parseTimelionE=(_await$parseTimelionE2=await Object(parser_async["a"])(params.expression))===null||_await$parseTimelionE2===void 0?void 0:_await$parseTimelionE2.args)!==null&&_await$parseTimelionE!==void 0?_await$parseTimelionE:[];const indexArg=args.find(({type:type,name:name,function:fn})=>type==="namedArg"&&fn==="es"&&name==="index");if(indexArg!==null&&indexArg!==void 0&&indexArg.value.text){return Object(plugin_services["b"])().find(indexArg.value.text)}}catch{}return[]},options:{showIndexSelection:false,showQueryBar:false,showFilterBar:false},requiresSearch:true}}const getTimelionVisualizationConfig=dependencies=>({name:"timelion_vis",type:"render",inputTypes:["kibana_context","null"],help:external_kbnSharedDeps_KbnI18n_["i18n"].translate("timelion.function.help",{defaultMessage:"Timelion visualization"}),args:{expression:{types:["string"],aliases:["_"],default:'".es(*)"',help:""},interval:{types:["string"],default:"auto",help:""}},async fn(input,args,{getSearchSessionId:getSearchSessionId}){const timelionRequestHandler=getTimelionRequestHandler(dependencies);const visParams={expression:args.expression,interval:args.interval};const response=await timelionRequestHandler({timeRange:Object(external_kbnSharedDeps_Lodash_["get"])(input,"timeRange"),query:Object(external_kbnSharedDeps_Lodash_["get"])(input,"query"),filters:Object(external_kbnSharedDeps_Lodash_["get"])(input,"filters"),visParams:visParams,searchSessionId:getSearchSessionId()});response.visType=TIMELION_VIS_NAME;return{type:"render",as:"timelion_vis",value:{visParams:visParams,visType:TIMELION_VIS_NAME,visData:response}}}});var arg_value_suggestions=__webpack_require__(18);var external_kbnSharedDeps_ReactDom_=__webpack_require__(11);var kibanaReact_public_=__webpack_require__(12);const TimelionVisComponent=Object(external_kbnSharedDeps_React_["lazy"])(()=>__webpack_require__.e(1).then(__webpack_require__.bind(null,49)));const getTimelionVisRenderer=deps=>({name:"timelion_vis",displayName:"Timelion visualization",reuseDomNode:true,render:(domNode,{visData:visData,visParams:visParams},handlers)=>{handlers.onDestroy(()=>{Object(external_kbnSharedDeps_ReactDom_["unmountComponentAtNode"])(domNode)});const[seriesList]=visData.sheet;const showNoResult=!seriesList||!seriesList.list.length;Object(external_kbnSharedDeps_ReactDom_["render"])(external_kbnSharedDeps_React_default.a.createElement(visualizations_public_["VisualizationContainer"],{handlers:handlers,showNoResult:showNoResult},external_kbnSharedDeps_React_default.a.createElement(kibanaReact_public_["KibanaContextProvider"],{services:{...deps}},external_kbnSharedDeps_React_default.a.createElement(TimelionVisComponent,{interval:visParams.interval,seriesList:seriesList,renderComplete:handlers.done,fireEvent:handlers.event}))),domNode)}});class plugin_TimelionVisPlugin{constructor(initializerContext){this.initializerContext=initializerContext}setup(core,{expressions:expressions,visualizations:visualizations,data:data}){const dependencies={uiSettings:core.uiSettings,http:core.http,timefilter:data.query.timefilter.timefilter};expressions.registerFunction(()=>getTimelionVisualizationConfig(dependencies));expressions.registerRenderer(getTimelionVisRenderer(dependencies));visualizations.createBaseVisualization(getTimelionVisDefinition(dependencies));return{isUiEnabled:this.initializerContext.config.get().ui.enabled}}start(core,plugins){Object(plugin_services["d"])(plugins.data.indexPatterns);Object(plugin_services["c"])(plugins.data.search);return{getArgValueSuggestions:arg_value_suggestions["a"]}}}var tick_formatters=__webpack_require__(13);var xaxis_formatter=__webpack_require__(14);var tick_generator=__webpack_require__(15);var lib=__webpack_require__(7);function public_plugin(initializerContext){return new plugin_TimelionVisPlugin(initializerContext)}},function(module,exports){module.exports=__kbnSharedDeps__.ElasticEui},function(module,exports){module.exports=__kbnSharedDeps__.KbnMonaco},function(module,exports){module.exports=__kbnSharedDeps__.Jquery},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18nReact}]);