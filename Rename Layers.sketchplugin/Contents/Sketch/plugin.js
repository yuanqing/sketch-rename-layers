!function(e,t){for(var n in t)e[n]=t[n]}(this,function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"CHECK_BOX",function(){return m}),n.d(r,"DROP_DOWN",function(){return v}),n.d(r,"RADIO_BUTTONS",function(){return _}),n.d(r,"NUMERIC_TEXT_BOX",function(){return g.a}),n.d(r,"TEXT_BOX",function(){return j});var i=n(1);function o(e){const t={};return function e(t,n,r){Object.keys(t).forEach(function(i){const o=[n,i].filter(Boolean).join("."),a=t[i];"object"!=typeof a||null===a||Array.isArray(a)?r[o]=t[i]:e(a,o,r)})}(e,null,t),t}const a=/\./;function c(e){const t={};return Object.keys(e).forEach(function(n){!function e(t,n,r){const i=t[0];if(1===t.length)return void(r[i]=n);null==r[i]&&(r[i]={});e(t.slice(1),n,r[i])}(n.split(a),e[n],t)}),t}const u=1,s=10,l=17;const f=2,d=20,y=2;const p=20,b=10;function m({width:e,y:t,label:n,value:r}){const i=NSButton.alloc().initWithFrame(NSMakeRect(0,t,e,p));return i.setButtonType(NSSwitchButton),i.setBezelStyle(0),i.setState(r?NSOnState:NSOffState),i.setTitle(n),{view:i,height:p+b,retrieveValue:function(){return"1"==i.stringValue()}}}const x=20,h=15;function v({width:e,y:t,value:n,possibleValues:r}){const i=NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,t,e,x));r.forEach(function(e){i.addItemWithTitle(`${e}`)});const o=void 0!==n?r.indexOf(n):0;return i.selectItemAtIndex(o),{view:i,height:x+h,retrieveValue:function(){const e=i.indexOfSelectedItem();return r[e]}}}const S=20,O=10;function _({width:e,y:t,value:n,possibleValues:r}){const i=NSButtonCell.alloc().init();i.setButtonType(NSRadioButton);const o=r.length,a=NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0,t,e,S),NSRadioModeMatrix,i,1,o);a.setCellSize(CGSizeMake(Math.floor(e/o),S)),a.cells().forEach(function(e,t){e.setTitle(r[t])});const c=void 0!==n?r.indexOf(n):0;return a.selectCellAtRow_column(0,c),{view:a,height:S+O,retrieveValue:function(){const e=a.cells().indexOfObject(a.selectedCell());return r[e]}}}var g=n(6),N=n(2);const j=Object(N.a)(),w=300;function k({title:e,formFields:t}){const n=o(function(){const e={findAndReplaceLayerNames:{findText:"",isCaseSensitive:!0,replaceText:"",scope:"Current page"},renameArtboards:{layerNamePattern:"%y.%yx – %n",scope:"Current page"},renameSelectedLayers:{layerNamePattern:"%y.%yx – %n"}};if(!e)return{};const t={},n=o(e);return Object.keys(n).forEach(function(e){const r=Object(i.sessionVariable)(e),o=Object(i.settingForKey)(e),a=void 0!==r?r:o,c=n[e];t[e]=void 0!==a?a:c}),c(t)}()),{formView:a,retrieveValues:p}=function({formFieldsConfig:e,settings:t}){const n=NSView.alloc().init();n.setFlipped(!0);const i={};let o=0;e.forEach(function(e){if("-"===e){const{view:e,height:t}=function({width:e,y:t}){const n=NSView.alloc().initWithFrame(NSMakeRect(0,t+s,e,u));return n.setWantsLayer(1),n.layer().setBackgroundColor(CGColorCreateGenericRGB(127/255,127/255,127/255,.5)),{view:n,height:s+u+l}}({width:w,y:o});return o+=t,void n.addSubview(e)}const{type:a,key:c,label:p,value:b,...m}=e;if(p&&"CHECK_BOX"!==a){const{view:e,height:t}=function({width:e,y:t,label:n}){const r=NSTextField.alloc().initWithFrame(NSMakeRect(0,t+f,e,d));return r.setBezeled(!1),r.setDrawsBackground(!1),r.setEditable(!1),r.setLineBreakMode(NSLineBreakByTruncatingTail),r.setSelectable(!1),r.setStringValue(n),{view:r,height:f+d+y}}({width:w,y:o,label:p});o+=t,n.addSubview(e)}const x=t[c],h=null!=b?b:x,{view:v,height:S,retrieveValue:O}=r[a]({width:w,y:o,label:p,value:h,...m});o+=S,n.addSubview(v),i[c]=O});const a=n.subviews();return a.forEach(function(e,t){t<a.length-1&&e.setNextKeyView(a[t+1])}),n.setFrame(NSMakeRect(0,0,w,o)),{formView:n,retrieveValues:i}}({formFieldsConfig:t.filter(Boolean),settings:n}),b=function(e){const t=NSAlert.alloc().init();return t.setMessageText(e),t.addButtonWithTitle("OK"),t.addButtonWithTitle("Cancel"),t}(e||"Settings");b.setAccessoryView(a);const m=a.subviews();if(m[0]&&b.window().setInitialFirstResponder(m[0]),"1000"==b.runModal()){const e={};return Object.keys(p).forEach(function(t){const n=p[t];e[t]=n()}),c(e)}return null}var T=n(5),R=n.n(T);function C(e){R.a.message(`✔ ${e}`)}function E(e){R.a.message(`✘ ${e}`)}function B(){const e={findAndReplaceLayerNames:{findText:"",isCaseSensitive:!0,replaceText:"",scope:"Current page"},renameArtboards:{layerNamePattern:"%y.%yx – %n",scope:"Current page"},renameSelectedLayers:{layerNamePattern:"%y.%yx – %n"}};if(!e)return;const t=o(e);var n;Object.keys(t).forEach(function(e){Object(i.setSettingForKey)(e,void 0),Object(i.setSessionVariable)(e,void 0)}),n="Reset settings",R.a.message(n)}P(i.setSettingForKey);const A=P(i.setSessionVariable);function P(e){return function(t){if(!t)return;const n=o(t);Object.keys(n).forEach(function(t){const r=n[t];null!=r&&e(t,r)})}}n(7),n(8);var M=n(9);n(3);function V(){const e=NSApplication.sharedApplication().orderedDocuments();return Object(M.fromNative)(e[0])}function F(){return V().selectedPage.layers}function I(){return V().selectedLayers.layers.reverse()}function L(e,t){e.forEach(function(e){t(e);const n=e.type;"Artboard"!==n&&"Group"!==n||L(e.layers,t)})}function K(e){return function e(t,n){const r=t.parent;if("Page"===r.type)return n;const i={x:n.x+r.frame.x,y:n.y+r.frame.y};if("Artboard"===r.type)return i;return e(r,i)}(e,{x:e.frame.x,y:e.frame.y})}function W(){return F().filter(X)}function D(){return I().filter(X)}function X(e){return"Artboard"===e.type}n.d(t,"j",function(){return k}),n.d(t,"k",function(){return B}),n.d(t,"l",function(){return A}),n.d(t,"a",function(){return"CHECK_BOX"}),n.d(t,"b",function(){return"DROP_DOWN"}),n.d(t,"c",function(){return"TEXT_BOX"}),n.d(t,"e",function(){return W}),n.d(t,"g",function(){return D}),n.d(t,"f",function(){return F}),n.d(t,"h",function(){return I}),n.d(t,"i",function(){return L}),n.d(t,"d",function(){return K}),n.d(t,"n",function(){return C}),n.d(t,"m",function(){return E})},function(e,t){e.exports=require("sketch/settings")},function(e,t,n){"use strict";n.d(t,"a",function(){return o});const r=20,i=15;function o(e){return function({width:t,y:n,value:o,placeholder:a}){const c=NSTextField.alloc().initWithFrame(NSMakeRect(0,n,t,r)),u=null==o?"":`${o}`;return c.setStringValue(u),a&&c.setPlaceholderString(a),{view:c,height:r+i,retrieveValue:function(){const t=`${c.stringValue()}`;return e?e(t):t}}}}},function(e,t){e.exports=require("sketch/dom")},function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(0);function i({layers:e,layerNamePattern:t}){(function(e){const t=e.map(function(e){const{x:t,y:n}=Object(r.d)(e);return{x:t,y:n,id:e.id}}),n=o({layers:t,primaryIndexKey:"y",secondaryIndexKey:"x"}),i=o({layers:t,primaryIndexKey:"x",secondaryIndexKey:"y"});return e.map(function(e){const t=e.id;return{layer:e,x:i[t].primaryIndex,xy:i[t].secondaryIndex,y:n[t].primaryIndex,yx:n[t].secondaryIndex}})})(e).forEach(function({layer:e,x:n,xy:r,y:i,yx:o},c){e.name=function({pattern:e,values:t}){return e.replace(a,function(e,n){return t[n.substring(1)]})}({pattern:t,values:{i:c+1,n:e.name,x:n,xy:r,y:i,yx:o}})})}function o({layers:e,primaryIndexKey:t,secondaryIndexKey:n}){const r={},i=[];e.forEach(function(e){const n=e[t];r[n]||(r[n]=[]),-1===i.indexOf(n)&&i.push(n),r[n].push(e)});const o={};return i.sort(function(e,t){return e-t}).forEach(function(e,t){r[e].sort(function(e,t){return e[n]-t[n]}).forEach(function({id:e},n){o[e]={primaryIndex:t+1,secondaryIndex:n+1}})}),o}const a=/(%(?:i|n|xy?|yx?))/g},function(e,t){e.exports=require("sketch/ui")},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return createNumericTextBox});var _text_box_factory__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);const createNumericTextBox=Object(_text_box_factory__WEBPACK_IMPORTED_MODULE_0__.a)(function(value){return parseFloat(eval(value))})},function(e,t){e.exports=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}},function(e,t,n){"use strict";const r=async(e,t)=>{let n=0;for(const r of e)await t(await r,n++);return e};e.exports=r,e.exports.default=r},function(e,t){e.exports=require("sketch")},function(e,t,n){e.exports=n(11)},function(e,t,n){e.exports={"rename-selected-layers":n(12).default,"find-and-replace-layer-names":n(13).default,"rename-artboards":n(14).default,"reset-settings":n(15).default}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o});var r=n(0),i=n(4);function o(){const e=Object(r.h)();if(0===e.length)return void Object(r.m)("Select a layer");const t=Object(r.j)({title:"Rename Selected Layers",formFields:[{type:r.c,key:"renameSelectedLayers.layerNamePattern",label:"Layer name"}]});if(!t)return;Object(r.l)(t);const{layerNamePattern:n}=t.renameSelectedLayers;Object(i.a)({layers:e,layerNamePattern:n}),Object(r.n)("Renamed selected layers")}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var r=n(0);function i(){const e=Object(r.h)(),t=0!==e.length,n=Object(r.j)({title:"Find & Replace Layer Names",formFields:[{type:r.c,key:"findAndReplaceLayerNames.findText",label:"Find"},{type:r.a,key:"findAndReplaceLayerNames.isCaseSensitive",label:"Case sensitive"},{type:r.c,key:"findAndReplaceLayerNames.replaceText",label:"Replace"},t&&{type:r.b,key:"findAndReplaceLayerNames.scope",label:"Scope",possibleValues:["Selected layers","Current page"],value:"Selected layers"}]});if(!n)return;const{findText:i,isCaseSensitive:o,replaceText:a,scope:c}=n.findAndReplaceLayerNames,u=new RegExp(i,o?"g":"gi");let s=0;const l=function({regularExpression:e,replaceText:t,increment:n}){return function(r){e.test(r.name)&&(r.name=r.name.replace(e,function(){return t}),n())}}({regularExpression:u,replaceText:a,increment:function(){s++}});"Selected layers"===c?e.forEach(l):Object(r.i)(Object(r.f)(),l),Object(r.l)(n),Object(r.n)(`Renamed ${s} layer${1===s?"":"s"}`)}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o});var r=n(0),i=n(4);function o(){const e=Object(r.g)(),t=0!==e.length,n=Object(r.j)({title:"Rename Artboards",formFields:[{type:r.c,key:"renameArtboards.layerNamePattern",label:"New artboard name"},t&&{type:r.b,key:"renameArtboards.scope",label:"Scope",possibleValues:["Selected artboards","Current page"],value:"Selected artboards"}]});if(!n)return;Object(r.l)(n);const{layerNamePattern:o,scope:a}=n.renameArtboards,c="Selected artboards"===a?e:Object(r.e)();Object(i.a)({layers:c,layerNamePattern:o}),Object(r.n)("Renamed artboards")}},function(e,t,n){"use strict";n.r(t);var r=n(0);t.default=r.k}]));