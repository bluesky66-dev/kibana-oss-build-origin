(function(modules){function webpackJsonpCallback(data){var chunkIds=data[0];var moreModules=data[1];var moduleId,chunkId,i=0,resolves=[];for(;i<chunkIds.length;i++){chunkId=chunkIds[i];if(Object.prototype.hasOwnProperty.call(installedChunks,chunkId)&&installedChunks[chunkId]){resolves.push(installedChunks[chunkId][0])}installedChunks[chunkId]=0}for(moduleId in moreModules){if(Object.prototype.hasOwnProperty.call(moreModules,moduleId)){modules[moduleId]=moreModules[moduleId]}}if(parentJsonpFunction)parentJsonpFunction(data);while(resolves.length){resolves.shift()()}}var installedModules={};var installedChunks={0:0};function jsonpScriptSrc(chunkId){return __webpack_require__.p+"management.chunk."+chunkId+".js"}function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.e=function requireEnsure(chunkId){var promises=[];var installedChunkData=installedChunks[chunkId];if(installedChunkData!==0){if(installedChunkData){promises.push(installedChunkData[2])}else{var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var script=document.createElement("script");var onScriptComplete;script.charset="utf-8";script.timeout=120;if(__webpack_require__.nc){script.setAttribute("nonce",__webpack_require__.nc)}script.src=jsonpScriptSrc(chunkId);var error=new Error;onScriptComplete=function(event){script.onerror=script.onload=null;clearTimeout(timeout);var chunk=installedChunks[chunkId];if(chunk!==0){if(chunk){var errorType=event&&(event.type==="load"?"missing":event.type);var realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")";error.name="ChunkLoadError";error.type=errorType;error.request=realSrc;chunk[1](error)}installedChunks[chunkId]=undefined}};var timeout=setTimeout((function(){onScriptComplete({type:"timeout",target:script})}),12e4);script.onerror=script.onload=onScriptComplete;document.head.appendChild(script)}}return Promise.all(promises)};__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";__webpack_require__.oe=function(err){console.error(err);throw err};var jsonpArray=window["management_bundle_jsonpfunction"]=window["management_bundle_jsonpfunction"]||[];var oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback;jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;return __webpack_require__(__webpack_require__.s=6)})([function(module,exports){module.exports=__kbnSharedDeps__.KbnI18n},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return MANAGEMENT_BREADCRUMB}));__webpack_require__.d(__webpack_exports__,"b",(function(){return management_app_ManagementApp}));__webpack_require__.d(__webpack_exports__,"d",(function(){return undefined}));__webpack_require__.d(__webpack_exports__,"c",(function(){return management_section_ManagementSection}));var external_kbnSharedDeps_KbnI18n_=__webpack_require__(0);const MANAGEMENT_BREADCRUMB={text:external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.breadcrumb",{defaultMessage:"Stack Management"}),href:"/"};function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}class ManagementItem{constructor({id:id,title:title,tip:tip,order:order=100,euiIconType:euiIconType,icon:icon}){_defineProperty(this,"id","");_defineProperty(this,"title",void 0);_defineProperty(this,"tip",void 0);_defineProperty(this,"order",void 0);_defineProperty(this,"euiIconType",void 0);_defineProperty(this,"icon",void 0);_defineProperty(this,"enabled",true);this.id=id;this.title=title;this.tip=tip;this.order=order;this.euiIconType=euiIconType;this.icon=icon}disable(){this.enabled=false}enable(){this.enabled=true}}function management_app_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}class management_app_ManagementApp extends ManagementItem{constructor(args){var _args$meta;super(args);management_app_defineProperty(this,"mount",void 0);management_app_defineProperty(this,"basePath",void 0);management_app_defineProperty(this,"meta",void 0);this.mount=args.mount;this.basePath=args.basePath;this.meta={keywords:((_args$meta=args.meta)===null||_args$meta===void 0?void 0:_args$meta.keywords)||[]}}}function management_section_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}class management_section_ManagementSection extends ManagementItem{constructor(args){super(args);management_section_defineProperty(this,"apps",[])}registerApp(args){if(this.getApp(args.id)){throw new Error(`Management app already registered - id: ${args.id}, title: ${args.title}`)}const app=new management_app_ManagementApp({...args,basePath:`/${this.id}/${args.id}`});this.apps.push(app);return app}getApp(id){return this.apps.find(app=>app.id===id)}getAppsEnabled(){return this.apps.filter(app=>app.enabled)}}},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("entry/core/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.Rxjs},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/home/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_val_loader_dist_cjs_js_key_management_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7);var _node_modules_val_loader_dist_cjs_js_key_management_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_management_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);__kbnBundles__.define("plugin/management/public",__webpack_require__,8)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__["management"]},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin}));__webpack_require__.d(__webpack_exports__,"RegisterManagementAppArgs",(function(){return utils["d"]}));__webpack_require__.d(__webpack_exports__,"ManagementSection",(function(){return utils["c"]}));__webpack_require__.d(__webpack_exports__,"ManagementApp",(function(){return utils["b"]}));__webpack_require__.d(__webpack_exports__,"ManagementAppMountParams",(function(){return undefined}));__webpack_require__.d(__webpack_exports__,"ManagementSetup",(function(){return undefined}));__webpack_require__.d(__webpack_exports__,"ManagementStart",(function(){return undefined}));__webpack_require__.d(__webpack_exports__,"DefinedSections",(function(){return undefined}));__webpack_require__.d(__webpack_exports__,"MANAGEMENT_APP_ID",(function(){return MANAGEMENT_APP_ID}));var external_kbnSharedDeps_KbnI18n_=__webpack_require__(0);var external_kbnSharedDeps_Rxjs_=__webpack_require__(3);var public_=__webpack_require__(4);var core_public_=__webpack_require__(2);const MANAGEMENT_APP_ID="management";var utils=__webpack_require__(1);let ManagementSectionId;(function(ManagementSectionId){ManagementSectionId["Ingest"]="ingest";ManagementSectionId["Data"]="data";ManagementSectionId["InsightsAndAlerting"]="insightsAndAlerting";ManagementSectionId["Security"]="security";ManagementSectionId["Kibana"]="kibana";ManagementSectionId["Stack"]="stack"})(ManagementSectionId||(ManagementSectionId={}));const ingestTitle=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.ingestTitle",{defaultMessage:"Ingest"});const ingestTip=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.ingestTip",{defaultMessage:"Manage how to transform data and load it into the cluster"});const dataTitle=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.dataTitle",{defaultMessage:"Data"});const dataTip=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.dataTip",{defaultMessage:"Manage your cluster data and backups"});const insightsAndAlertingTitle=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.insightsAndAlertingTitle",{defaultMessage:"Alerts and Insights"});const insightsAndAlertingTip=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.insightsAndAlertingTip",{defaultMessage:"Manage how to detect changes in your data"});const sectionTitle=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.section.title",{defaultMessage:"Security"});const sectionTip=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.section.tip",{defaultMessage:"Control access to features and data"});const kibanaTitle=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.kibanaTitle",{defaultMessage:"Kibana"});const kibanaTip=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.kibanaTip",{defaultMessage:"Customize Kibana and manage saved objects"});const stackTitle=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.stackTitle",{defaultMessage:"Stack"});const stackTip=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.stackTip",{defaultMessage:"Manage your license and upgrade the Stack"});const IngestSection={id:ManagementSectionId.Ingest,title:ingestTitle,tip:ingestTip,order:0};const DataSection={id:ManagementSectionId.Data,title:dataTitle,tip:dataTip,order:1};const InsightsAndAlertingSection={id:ManagementSectionId.InsightsAndAlerting,title:insightsAndAlertingTitle,tip:insightsAndAlertingTip,order:2};const SecuritySection={id:"security",title:sectionTitle,tip:sectionTip,order:3};const KibanaSection={id:ManagementSectionId.Kibana,title:kibanaTitle,tip:kibanaTip,order:4};const StackSection={id:ManagementSectionId.Stack,title:stackTitle,tip:stackTip,order:4};const managementSections=[IngestSection,DataSection,InsightsAndAlertingSection,SecuritySection,KibanaSection,StackSection];var kibanaUtils_public_=__webpack_require__(5);function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}const[getSectionsServiceStartPrivate,setSectionsServiceStartPrivate]=Object(kibanaUtils_public_["createGetterSetter"])("SectionsServiceStartPrivate");class management_sections_service_ManagementSectionsService{constructor(){_defineProperty(this,"definedSections",void 0);_defineProperty(this,"sections",new Map);_defineProperty(this,"getAllSections",()=>[...this.sections.values()]);_defineProperty(this,"registerSection",section=>{if(this.sections.has(section.id)){throw Error(`ManagementSection '${section.id}' already registered`)}const newSection=new utils["c"](section);this.sections.set(section.id,newSection);return newSection});this.definedSections={ingest:this.registerSection(IngestSection),data:this.registerSection(DataSection),insightsAndAlerting:this.registerSection(InsightsAndAlertingSection),security:this.registerSection(SecuritySection),kibana:this.registerSection(KibanaSection),stack:this.registerSection(StackSection)}}setup(){return{register:this.registerSection,section:{...this.definedSections}}}start({capabilities:capabilities}){this.getAllSections().forEach(section=>{if(capabilities.management.hasOwnProperty(section.id)){const sectionCapabilities=capabilities.management[section.id];section.apps.forEach(app=>{if(sectionCapabilities.hasOwnProperty(app.id)&&sectionCapabilities[app.id]!==true){app.disable()}})}});setSectionsServiceStartPrivate({getSectionsEnabled:()=>this.getAllSections().filter(section=>section.enabled)});return{}}}function plugin_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}class plugin_ManagementPlugin{constructor(initializerContext){this.initializerContext=initializerContext;plugin_defineProperty(this,"managementSections",new management_sections_service_ManagementSectionsService);plugin_defineProperty(this,"appUpdater",new external_kbnSharedDeps_Rxjs_["BehaviorSubject"](()=>{const deepLinks=Object.values(this.managementSections.definedSections).map(section=>({id:section.id,title:section.title,searchDeepLinks:section.getAppsEnabled().map(mgmtApp=>({id:mgmtApp.id,title:mgmtApp.title,path:mgmtApp.basePath,meta:{...mgmtApp.meta}}))}));return{meta:{searchDeepLinks:deepLinks}}}));plugin_defineProperty(this,"hasAnyEnabledApps",true)}setup(core,{home:home}){const kibanaVersion=this.initializerContext.env.packageInfo.version;if(home){home.featureCatalogue.register({id:"stack-management",title:external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.stackManagement.managementLabel",{defaultMessage:"Stack Management"}),description:external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.stackManagement.managementDescription",{defaultMessage:"Your center console for managing the Elastic Stack."}),icon:"managementApp",path:"/app/management",showOnHomePage:false,category:public_["FeatureCatalogueCategory"].ADMIN,visible:()=>this.hasAnyEnabledApps})}core.application.register({id:MANAGEMENT_APP_ID,title:external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.stackManagement.title",{defaultMessage:"Stack Management"}),order:9040,euiIconType:"logoElastic",category:core_public_["DEFAULT_APP_CATEGORIES"].management,updater$:this.appUpdater,async mount(params){const{renderApp:renderApp}=await __webpack_require__.e(1).then(__webpack_require__.bind(null,36));const[coreStart]=await core.getStartServices();return renderApp(params,{sections:getSectionsServiceStartPrivate(),kibanaVersion:kibanaVersion,setBreadcrumbs:coreStart.chrome.setBreadcrumbs})}});return{sections:this.managementSections.setup()}}start(core){this.managementSections.start({capabilities:core.application.capabilities});this.hasAnyEnabledApps=getSectionsServiceStartPrivate().getSectionsEnabled().some(section=>section.getAppsEnabled().length>0);if(!this.hasAnyEnabledApps){this.appUpdater.next(()=>({status:core_public_["AppStatus"].inaccessible,navLinkStatus:core_public_["AppNavLinkStatus"].hidden}))}return{}}}function public_plugin(initializerContext){return new plugin_ManagementPlugin(initializerContext)}},function(module,exports){module.exports=__kbnSharedDeps__.React},function(module,exports){module.exports=__kbnSharedDeps__.ElasticEui},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18nReact},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.ReactDom},function(module,exports){module.exports=__kbnSharedDeps__.ReactRouterDom},function(module,exports){module.exports=__kbnSharedDeps__.Lodash}]);