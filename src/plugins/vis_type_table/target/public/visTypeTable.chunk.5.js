(window["visTypeTable_bundle_jsonpfunction"]=window["visTypeTable_bundle_jsonpfunction"]||[]).push([[5],{28:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"default",(function(){return TableOptions}));var external_kbnSharedDeps_Lodash_=__webpack_require__(7);var external_kbnSharedDeps_React_=__webpack_require__(5);var external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_);var external_kbnSharedDeps_ElasticEui_=__webpack_require__(8);var external_kbnSharedDeps_KbnI18n_=__webpack_require__(6);var external_kbnSharedDeps_KbnI18nReact_=__webpack_require__(16);var public_=__webpack_require__(10);var visDefaultEditor_public_=__webpack_require__(21);var common=__webpack_require__(24);const totalAggregations=[{value:common["a"].SUM,text:external_kbnSharedDeps_KbnI18n_["i18n"].translate("visTypeTable.totalAggregations.sumText",{defaultMessage:"Sum"})},{value:common["a"].AVG,text:external_kbnSharedDeps_KbnI18n_["i18n"].translate("visTypeTable.totalAggregations.averageText",{defaultMessage:"Average"})},{value:common["a"].MIN,text:external_kbnSharedDeps_KbnI18n_["i18n"].translate("visTypeTable.totalAggregations.minText",{defaultMessage:"Min"})},{value:common["a"].MAX,text:external_kbnSharedDeps_KbnI18n_["i18n"].translate("visTypeTable.totalAggregations.maxText",{defaultMessage:"Max"})},{value:common["a"].COUNT,text:external_kbnSharedDeps_KbnI18n_["i18n"].translate("visTypeTable.totalAggregations.countText",{defaultMessage:"Count"})}];const{tabifyGetColumns:tabifyGetColumns}=public_["search"];function TableOptions({aggs:aggs,stateParams:stateParams,setValidity:setValidity,setValue:setValue}){const percentageColumns=Object(external_kbnSharedDeps_React_["useMemo"])(()=>[{value:"",text:external_kbnSharedDeps_KbnI18n_["i18n"].translate("visTypeTable.params.defaultPercentageCol",{defaultMessage:"Don’t show"})},...tabifyGetColumns(aggs.getResponseAggs(),true).filter(col=>Object(external_kbnSharedDeps_Lodash_["get"])(col.aggConfig.toSerializedFieldFormat(),"id")==="number").map(({name:name})=>({value:name,text:name}))],[aggs]);const isPerPageValid=stateParams.perPage===""||stateParams.perPage>0;Object(external_kbnSharedDeps_React_["useEffect"])(()=>{setValidity(isPerPageValid)},[isPerPageValid,setValidity]);Object(external_kbnSharedDeps_React_["useEffect"])(()=>{if(!percentageColumns.find(({value:value})=>value===stateParams.percentageCol)&&percentageColumns[0]&&percentageColumns[0].value!==stateParams.percentageCol){setValue("percentageCol",percentageColumns[0].value)}},[percentageColumns,stateParams.percentageCol,setValidity,setValue]);return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiPanel"],{paddingSize:"s"},external_kbnSharedDeps_React_default.a.createElement(visDefaultEditor_public_["NumberInputOption"],{label:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_["FormattedMessage"],{id:"visTypeTable.params.perPageLabel",defaultMessage:"Max rows per page"})," ",external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_["EuiIconTip"],{content:"Leaving this field empty means it will use number of buckets from the response.",position:"right"})),isInvalid:!isPerPageValid,min:1,paramName:"perPage",value:stateParams.perPage,setValue:setValue}),external_kbnSharedDeps_React_default.a.createElement(visDefaultEditor_public_["SwitchOption"],{label:external_kbnSharedDeps_KbnI18n_["i18n"].translate("visTypeTable.params.showMetricsLabel",{defaultMessage:"Show metrics for every bucket/level"}),paramName:"showMetricsAtAllLevels",value:stateParams.showMetricsAtAllLevels,setValue:setValue,"data-test-subj":"showMetricsAtAllLevels"}),external_kbnSharedDeps_React_default.a.createElement(visDefaultEditor_public_["SwitchOption"],{label:external_kbnSharedDeps_KbnI18n_["i18n"].translate("visTypeTable.params.showPartialRowsLabel",{defaultMessage:"Show partial rows"}),tooltip:external_kbnSharedDeps_KbnI18n_["i18n"].translate("visTypeTable.params.showPartialRowsTip",{defaultMessage:"Show rows that have partial data. This will still calculate metrics for every bucket/level, even if they are not displayed."}),paramName:"showPartialRows",value:stateParams.showPartialRows,setValue:setValue,"data-test-subj":"showPartialRows"}),external_kbnSharedDeps_React_default.a.createElement(visDefaultEditor_public_["SwitchOption"],{label:external_kbnSharedDeps_KbnI18n_["i18n"].translate("visTypeTable.params.showToolbarLabel",{defaultMessage:"Show toolbar"}),paramName:"showToolbar",value:stateParams.showToolbar,setValue:setValue}),external_kbnSharedDeps_React_default.a.createElement(visDefaultEditor_public_["SwitchOption"],{label:external_kbnSharedDeps_KbnI18n_["i18n"].translate("visTypeTable.params.showTotalLabel",{defaultMessage:"Show total"}),paramName:"showTotal",value:stateParams.showTotal,setValue:setValue}),external_kbnSharedDeps_React_default.a.createElement(visDefaultEditor_public_["SelectOption"],{label:external_kbnSharedDeps_KbnI18n_["i18n"].translate("visTypeTable.params.totalFunctionLabel",{defaultMessage:"Total function"}),disabled:!stateParams.showTotal,options:totalAggregations,paramName:"totalFunc",value:stateParams.totalFunc,setValue:setValue}),external_kbnSharedDeps_React_default.a.createElement(visDefaultEditor_public_["SelectOption"],{label:external_kbnSharedDeps_KbnI18n_["i18n"].translate("visTypeTable.params.PercentageColLabel",{defaultMessage:"Percentage column"}),options:percentageColumns,paramName:"percentageCol",value:stateParams.percentageCol,setValue:setValue,id:"datatableVisualizationPercentageCol"}))}}}]);