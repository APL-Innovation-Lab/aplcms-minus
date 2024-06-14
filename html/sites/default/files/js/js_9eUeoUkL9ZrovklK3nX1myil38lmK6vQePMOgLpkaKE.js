/*!
 * jQuery Form Plugin
 * version: 4.3.0
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function(r){"function"==typeof define&&define.amd?define(["jquery"],r):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),r(t),t}:r(jQuery)}(function(q){"use strict";var m=/\r?\n/g,S={};S.fileapi=void 0!==q('<input type="file">').get(0).files,S.formdata=void 0!==window.FormData;var _=!!q.fn.prop;function o(e){var t=e.data;e.isDefaultPrevented()||(e.preventDefault(),q(e.target).closest("form").ajaxSubmit(t))}function i(e){var t=e.target,r=q(t);if(!r.is("[type=submit],[type=image]")){var a=r.closest("[type=submit]");if(0===a.length)return;t=a[0]}var n,o=t.form;"image"===(o.clk=t).type&&(void 0!==e.offsetX?(o.clk_x=e.offsetX,o.clk_y=e.offsetY):"function"==typeof q.fn.offset?(n=r.offset(),o.clk_x=e.pageX-n.left,o.clk_y=e.pageY-n.top):(o.clk_x=e.pageX-t.offsetLeft,o.clk_y=e.pageY-t.offsetTop)),setTimeout(function(){o.clk=o.clk_x=o.clk_y=null},100)}function N(){var e;q.fn.ajaxSubmit.debug&&(e="[jquery.form] "+Array.prototype.join.call(arguments,""),window.console&&window.console.log?window.console.log(e):window.opera&&window.opera.postError&&window.opera.postError(e))}q.fn.attr2=function(){if(!_)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},q.fn.ajaxSubmit=function(M,e,t,r){if(!this.length)return N("ajaxSubmit: skipping submit process - no element selected"),this;var O,a,n,o,X=this;"function"==typeof M?M={success:M}:"string"==typeof M||!1===M&&0<arguments.length?(M={url:M,data:e,dataType:t},"function"==typeof r&&(M.success=r)):void 0===M&&(M={}),O=M.method||M.type||this.attr2("method"),n=(n=(n="string"==typeof(a=M.url||this.attr2("action"))?q.trim(a):"")||window.location.href||"")&&(n.match(/^([^#]+)/)||[])[1],o=/(MSIE|Trident)/.test(navigator.userAgent||"")&&/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",M=q.extend(!0,{url:n,success:q.ajaxSettings.success,type:O||q.ajaxSettings.type,iframeSrc:o},M);var i={};if(this.trigger("form-pre-serialize",[this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(M.beforeSerialize&&!1===M.beforeSerialize(this,M))return N("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var s=M.traditional;void 0===s&&(s=q.ajaxSettings.traditional);var u,c,C=[],l=this.formToArray(M.semantic,C,M.filtering);if(M.data&&(c=q.isFunction(M.data)?M.data(l):M.data,M.extraData=c,u=q.param(c,s)),M.beforeSubmit&&!1===M.beforeSubmit(l,this,M))return N("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[l,this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var f=q.param(l,s);u&&(f=f?f+"&"+u:u),"GET"===M.type.toUpperCase()?(M.url+=(0<=M.url.indexOf("?")?"&":"?")+f,M.data=null):M.data=f;var d,m,p,h=[];M.resetForm&&h.push(function(){X.resetForm()}),M.clearForm&&h.push(function(){X.clearForm(M.includeHidden)}),!M.dataType&&M.target?(d=M.success||function(){},h.push(function(e,t,r){var a=arguments,n=M.replaceTarget?"replaceWith":"html";q(M.target)[n](e).each(function(){d.apply(this,a)})})):M.success&&(q.isArray(M.success)?q.merge(h,M.success):h.push(M.success)),M.success=function(e,t,r){for(var a=M.context||this,n=0,o=h.length;n<o;n++)h[n].apply(a,[e,t,r||X,X])},M.error&&(m=M.error,M.error=function(e,t,r){var a=M.context||this;m.apply(a,[e,t,r,X])}),M.complete&&(p=M.complete,M.complete=function(e,t){var r=M.context||this;p.apply(r,[e,t,X])});var v=0<q("input[type=file]:enabled",this).filter(function(){return""!==q(this).val()}).length,g="multipart/form-data",x=X.attr("enctype")===g||X.attr("encoding")===g,y=S.fileapi&&S.formdata;N("fileAPI :"+y);var b,T=(v||x)&&!y;!1!==M.iframe&&(M.iframe||T)?M.closeKeepAlive?q.get(M.closeKeepAlive,function(){b=w(l)}):b=w(l):b=(v||x)&&y?function(e){for(var r=new FormData,t=0;t<e.length;t++)r.append(e[t].name,e[t].value);if(M.extraData){var a=function(e){var t,r,a=q.param(e,M.traditional).split("&"),n=a.length,o=[];for(t=0;t<n;t++)a[t]=a[t].replace(/\+/g," "),r=a[t].split("="),o.push([decodeURIComponent(r[0]),decodeURIComponent(r[1])]);return o}(M.extraData);for(t=0;t<a.length;t++)a[t]&&r.append(a[t][0],a[t][1])}M.data=null;var n=q.extend(!0,{},q.ajaxSettings,M,{contentType:!1,processData:!1,cache:!1,type:O||"POST"});M.uploadProgress&&(n.xhr=function(){var e=q.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",function(e){var t=0,r=e.loaded||e.position,a=e.total;e.lengthComputable&&(t=Math.ceil(r/a*100)),M.uploadProgress(e,r,a,t)},!1),e});n.data=null;var o=n.beforeSend;return n.beforeSend=function(e,t){M.formData?t.data=M.formData:t.data=r,o&&o.call(this,e,t)},q.ajax(n)}(l):q.ajax(M),X.removeData("jqxhr").data("jqxhr",b);for(var j=0;j<C.length;j++)C[j]=null;return this.trigger("form-submit-notify",[this,M]),this;function w(e){var t,r,l,f,o,d,m,p,a,n,h,v,i=X[0],g=q.Deferred();if(g.abort=function(e){p.abort(e)},e)for(r=0;r<C.length;r++)t=q(C[r]),_?t.prop("disabled",!1):t.removeAttr("disabled");(l=q.extend(!0,{},q.ajaxSettings,M)).context=l.context||l,o="jqFormIO"+(new Date).getTime();var s=i.ownerDocument,u=X.closest("body");if(l.iframeTarget?(n=(d=q(l.iframeTarget,s)).attr2("name"))?o=n:d.attr2("name",o):(d=q('<iframe name="'+o+'" src="'+l.iframeSrc+'" />',s)).css({position:"absolute",top:"-1000px",left:"-1000px"}),m=d[0],p={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(e){var t="timeout"===e?"timeout":"aborted";N("aborting upload... "+t),this.aborted=1;try{m.contentWindow.document.execCommand&&m.contentWindow.document.execCommand("Stop")}catch(e){}d.attr("src",l.iframeSrc),p.error=t,l.error&&l.error.call(l.context,p,t,e),f&&q.event.trigger("ajaxError",[p,l,t]),l.complete&&l.complete.call(l.context,p,t)}},(f=l.global)&&0==q.active++&&q.event.trigger("ajaxStart"),f&&q.event.trigger("ajaxSend",[p,l]),l.beforeSend&&!1===l.beforeSend.call(l.context,p,l))return l.global&&q.active--,g.reject(),g;if(p.aborted)return g.reject(),g;(a=i.clk)&&(n=a.name)&&!a.disabled&&(l.extraData=l.extraData||{},l.extraData[n]=a.value,"image"===a.type&&(l.extraData[n+".x"]=i.clk_x,l.extraData[n+".y"]=i.clk_y));var x=1,y=2;function b(t){var r=null;try{t.contentWindow&&(r=t.contentWindow.document)}catch(e){N("cannot get iframe.contentWindow document: "+e)}if(r)return r;try{r=t.contentDocument?t.contentDocument:t.document}catch(e){N("cannot get iframe.contentDocument: "+e),r=t.document}return r}var c=q("meta[name=csrf-token]").attr("content"),T=q("meta[name=csrf-param]").attr("content");function j(){var e=X.attr2("target"),t=X.attr2("action"),r=X.attr("enctype")||X.attr("encoding")||"multipart/form-data";i.setAttribute("target",o),O&&!/post/i.test(O)||i.setAttribute("method","POST"),t!==l.url&&i.setAttribute("action",l.url),l.skipEncodingOverride||O&&!/post/i.test(O)||X.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),l.timeout&&(v=setTimeout(function(){h=!0,A(x)},l.timeout));var a=[];try{if(l.extraData)for(var n in l.extraData)l.extraData.hasOwnProperty(n)&&(q.isPlainObject(l.extraData[n])&&l.extraData[n].hasOwnProperty("name")&&l.extraData[n].hasOwnProperty("value")?a.push(q('<input type="hidden" name="'+l.extraData[n].name+'">',s).val(l.extraData[n].value).appendTo(i)[0]):a.push(q('<input type="hidden" name="'+n+'">',s).val(l.extraData[n]).appendTo(i)[0]));l.iframeTarget||d.appendTo(u),m.attachEvent?m.attachEvent("onload",A):m.addEventListener("load",A,!1),setTimeout(function e(){try{var t=b(m).readyState;N("state = "+t),t&&"uninitialized"===t.toLowerCase()&&setTimeout(e,50)}catch(e){N("Server abort: ",e," (",e.name,")"),A(y),v&&clearTimeout(v),v=void 0}},15);try{i.submit()}catch(e){document.createElement("form").submit.apply(i)}}finally{i.setAttribute("action",t),i.setAttribute("enctype",r),e?i.setAttribute("target",e):X.removeAttr("target"),q(a).remove()}}T&&c&&(l.extraData=l.extraData||{},l.extraData[T]=c),l.forceSync?j():setTimeout(j,10);var w,S,k,D=50;function A(e){if(!p.aborted&&!k){if((S=b(m))||(N("cannot access response document"),e=y),e===x&&p)return p.abort("timeout"),void g.reject(p,"timeout");if(e===y&&p)return p.abort("server abort"),void g.reject(p,"error","server abort");if(S&&S.location.href!==l.iframeSrc||h){m.detachEvent?m.detachEvent("onload",A):m.removeEventListener("load",A,!1);var t,r="success";try{if(h)throw"timeout";var a="xml"===l.dataType||S.XMLDocument||q.isXMLDoc(S);if(N("isXml="+a),!a&&window.opera&&(null===S.body||!S.body.innerHTML)&&--D)return N("requeing onLoad callback, DOM not available"),void setTimeout(A,250);var n=S.body?S.body:S.documentElement;p.responseText=n?n.innerHTML:null,p.responseXML=S.XMLDocument?S.XMLDocument:S,a&&(l.dataType="xml"),p.getResponseHeader=function(e){return{"content-type":l.dataType}[e.toLowerCase()]},n&&(p.status=Number(n.getAttribute("status"))||p.status,p.statusText=n.getAttribute("statusText")||p.statusText);var o,i,s,u=(l.dataType||"").toLowerCase(),c=/(json|script|text)/.test(u);c||l.textarea?(o=S.getElementsByTagName("textarea")[0])?(p.responseText=o.value,p.status=Number(o.getAttribute("status"))||p.status,p.statusText=o.getAttribute("statusText")||p.statusText):c&&(i=S.getElementsByTagName("pre")[0],s=S.getElementsByTagName("body")[0],i?p.responseText=i.textContent?i.textContent:i.innerText:s&&(p.responseText=s.textContent?s.textContent:s.innerText)):"xml"===u&&!p.responseXML&&p.responseText&&(p.responseXML=F(p.responseText));try{w=E(p,u,l)}catch(e){r="parsererror",p.error=t=e||r}}catch(e){N("error caught: ",e),r="error",p.error=t=e||r}p.aborted&&(N("upload aborted"),r=null),p.status&&(r=200<=p.status&&p.status<300||304===p.status?"success":"error"),"success"===r?(l.success&&l.success.call(l.context,w,"success",p),g.resolve(p.responseText,"success",p),f&&q.event.trigger("ajaxSuccess",[p,l])):r&&(void 0===t&&(t=p.statusText),l.error&&l.error.call(l.context,p,r,t),g.reject(p,"error",t),f&&q.event.trigger("ajaxError",[p,l,t])),f&&q.event.trigger("ajaxComplete",[p,l]),f&&!--q.active&&q.event.trigger("ajaxStop"),l.complete&&l.complete.call(l.context,p,r),k=!0,l.timeout&&clearTimeout(v),setTimeout(function(){l.iframeTarget?d.attr("src",l.iframeSrc):d.remove(),p.responseXML=null},100)}}}var F=q.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},L=q.parseJSON||function(e){return window.eval("("+e+")")},E=function(e,t,r){var a=e.getResponseHeader("content-type")||"",n=("xml"===t||!t)&&0<=a.indexOf("xml"),o=n?e.responseXML:e.responseText;return n&&"parsererror"===o.documentElement.nodeName&&q.error&&q.error("parsererror"),r&&r.dataFilter&&(o=r.dataFilter(o,t)),"string"==typeof o&&(("json"===t||!t)&&0<=a.indexOf("json")?o=L(o):("script"===t||!t)&&0<=a.indexOf("javascript")&&q.globalEval(o)),o};return g}},q.fn.ajaxForm=function(e,t,r,a){if(("string"==typeof e||!1===e&&0<arguments.length)&&(e={url:e,data:t,dataType:r},"function"==typeof a&&(e.success=a)),(e=e||{}).delegation=e.delegation&&q.isFunction(q.fn.on),e.delegation||0!==this.length)return e.delegation?(q(document).off("submit.form-plugin",this.selector,o).off("click.form-plugin",this.selector,i).on("submit.form-plugin",this.selector,e,o).on("click.form-plugin",this.selector,e,i),this):(e.beforeFormUnbind&&e.beforeFormUnbind(this,e),this.ajaxFormUnbind().on("submit.form-plugin",e,o).on("click.form-plugin",e,i));var n={s:this.selector,c:this.context};return!q.isReady&&n.s?(N("DOM not ready, queuing ajaxForm"),q(function(){q(n.s,n.c).ajaxForm(e)})):N("terminating; zero elements found by selector"+(q.isReady?"":" (DOM not ready)")),this},q.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},q.fn.formToArray=function(e,t,r){var a=[];if(0===this.length)return a;var n,o,i,s,u,c,l,f,d,m,p=this[0],h=this.attr("id"),v=(v=e||void 0===p.elements?p.getElementsByTagName("*"):p.elements)&&q.makeArray(v);if(h&&(e||/(Edge|Trident)\//.test(navigator.userAgent))&&(n=q(':input[form="'+h+'"]').get()).length&&(v=(v||[]).concat(n)),!v||!v.length)return a;for(q.isFunction(r)&&(v=q.map(v,r)),o=0,c=v.length;o<c;o++)if((m=(u=v[o]).name)&&!u.disabled)if(e&&p.clk&&"image"===u.type)p.clk===u&&(a.push({name:m,value:q(u).val(),type:u.type}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y}));else if((s=q.fieldValue(u,!0))&&s.constructor===Array)for(t&&t.push(u),i=0,l=s.length;i<l;i++)a.push({name:m,value:s[i]});else if(S.fileapi&&"file"===u.type){t&&t.push(u);var g=u.files;if(g.length)for(i=0;i<g.length;i++)a.push({name:m,value:g[i],type:u.type});else a.push({name:m,value:"",type:u.type})}else null!=s&&(t&&t.push(u),a.push({name:m,value:s,type:u.type,required:u.required}));return e||!p.clk||(m=(d=(f=q(p.clk))[0]).name)&&!d.disabled&&"image"===d.type&&(a.push({name:m,value:f.val()}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y})),a},q.fn.formSerialize=function(e){return q.param(this.formToArray(e))},q.fn.fieldSerialize=function(n){var o=[];return this.each(function(){var e=this.name;if(e){var t=q.fieldValue(this,n);if(t&&t.constructor===Array)for(var r=0,a=t.length;r<a;r++)o.push({name:e,value:t[r]});else null!=t&&o.push({name:this.name,value:t})}}),q.param(o)},q.fn.fieldValue=function(e){for(var t=[],r=0,a=this.length;r<a;r++){var n=this[r],o=q.fieldValue(n,e);null==o||o.constructor===Array&&!o.length||(o.constructor===Array?q.merge(t,o):t.push(o))}return t},q.fieldValue=function(e,t){var r=e.name,a=e.type,n=e.tagName.toLowerCase();if(void 0===t&&(t=!0),t&&(!r||e.disabled||"reset"===a||"button"===a||("checkbox"===a||"radio"===a)&&!e.checked||("submit"===a||"image"===a)&&e.form&&e.form.clk!==e||"select"===n&&-1===e.selectedIndex))return null;if("select"!==n)return q(e).val().replace(m,"\r\n");var o=e.selectedIndex;if(o<0)return null;for(var i=[],s=e.options,u="select-one"===a,c=u?o+1:s.length,l=u?o:0;l<c;l++){var f=s[l];if(f.selected&&!f.disabled){var d=(d=f.value)||(f.attributes&&f.attributes.value&&!f.attributes.value.specified?f.text:f.value);if(u)return d;i.push(d)}}return i},q.fn.clearForm=function(e){return this.each(function(){q("input,select,textarea",this).clearFields(e)})},q.fn.clearFields=q.fn.clearInputs=function(r){var a=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var e=this.type,t=this.tagName.toLowerCase();a.test(e)||"textarea"===t?this.value="":"checkbox"===e||"radio"===e?this.checked=!1:"select"===t?this.selectedIndex=-1:"file"===e?/MSIE/.test(navigator.userAgent)?q(this).replaceWith(q(this).clone(!0)):q(this).val(""):r&&(!0===r&&/hidden/.test(e)||"string"==typeof r&&q(this).is(r))&&(this.value="")})},q.fn.resetForm=function(){return this.each(function(){var t=q(this),e=this.tagName.toLowerCase();switch(e){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var r=t.parents("select");return r.length&&r[0].multiple?"option"===e?this.selected=this.defaultSelected:t.find("option").resetForm():r.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var a=q(t.attr("for")),n=t.find("input,select,textarea");return a[0]&&n.unshift(a[0]),n.resetForm(),!0;case"form":return"function"!=typeof this.reset&&("object"!=typeof this.reset||this.reset.nodeType)||this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},q.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},q.fn.selected=function(r){return void 0===r&&(r=!0),this.each(function(){var e,t=this.type;"checkbox"===t||"radio"===t?this.checked=r:"option"===this.tagName.toLowerCase()&&(e=q(this).parent("select"),r&&e[0]&&"select-one"===e[0].type&&e.find("option").selected(!1),this.selected=r)})},q.fn.ajaxSubmit.debug=!1});

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
Drupal.debounce = function (func, wait, immediate) {
  var timeout;
  var result;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var context = this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, debounce) {
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = edge === 'left' || edge === 'right';
    var placement = $el.offset()[horizontal ? 'left' : 'top'];
    placement -= window["scroll".concat(horizontal ? 'X' : 'Y')] || document.documentElement["scroll".concat(horizontal ? 'Left' : 'Top')] || 0;
    switch (edge) {
      case 'top':
        displacement = placement + $el.outerHeight();
        break;
      case 'left':
        displacement = placement + $el.outerWidth();
        break;
      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;
      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;
      default:
        displacement = 0;
    }
    return displacement;
  }
  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll("[data-offset-".concat(edge, "]"));
    var n = displacingElements.length;
    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];
      if (el.style.display === 'none') {
        continue;
      }
      var displacement = parseInt(el.getAttribute("data-offset-".concat(edge)), 10);
      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }
      edgeOffset = Math.max(edgeOffset, displacement);
    }
    return edgeOffset;
  }
  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }
  function displace(broadcast) {
    offsets = calculateOffsets();
    Drupal.displace.offsets = offsets;
    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }
    return offsets;
  }
  Drupal.behaviors.drupalDisplace = {
    attach: function attach() {
      if (this.displaceProcessed) {
        return;
      }
      this.displaceProcessed = true;
      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };
  Drupal.displace = displace;
  $.extend(Drupal.displace, {
    offsets: offsets,
    calculateOffset: calculateOffset
  });
})(jQuery, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, debounce) {
  $.fn.drupalGetSummary = function () {
    var callback = this.data('summaryCallback');
    return this[0] && callback ? callback(this[0]).trim() : '';
  };
  $.fn.drupalSetSummary = function (callback) {
    var self = this;
    if (typeof callback !== 'function') {
      var val = callback;
      callback = function callback() {
        return val;
      };
    }
    return this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', function () {
      self.trigger('summaryUpdated');
    }).trigger('summaryUpdated');
  };
  Drupal.behaviors.formSingleSubmit = {
    attach: function attach() {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        var formValues = $form.serialize();
        var previousValues = $form.attr('data-drupal-form-submit-last');
        if (previousValues === formValues) {
          e.preventDefault();
        } else {
          $form.attr('data-drupal-form-submit-last', formValues);
        }
      }
      $(once('form-single-submit', 'body')).on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
    }
  };
  function triggerFormUpdated(element) {
    $(element).trigger('formUpdated');
  }
  function fieldsList(form) {
    return [].map.call(form.querySelectorAll('[name][id]'), function (el) {
      return el.id;
    });
  }
  Drupal.behaviors.formUpdated = {
    attach: function attach(context) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      var $forms = $(once('form-updated', contextIsForm ? $context : $context.find('form')));
      var formFields;
      if ($forms.length) {
        $.makeArray($forms).forEach(function (form) {
          var events = 'change.formUpdated input.formUpdated ';
          var eventHandler = debounce(function (event) {
            triggerFormUpdated(event.target);
          }, 300);
          formFields = fieldsList(form).join(',');
          form.setAttribute('data-drupal-form-fields', formFields);
          $(form).on(events, eventHandler);
        });
      }
      if (contextIsForm) {
        formFields = fieldsList(context).join(',');
        var currentFields = $(context).attr('data-drupal-form-fields');
        if (formFields !== currentFields) {
          triggerFormUpdated(context);
        }
      }
    },
    detach: function detach(context, settings, trigger) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      if (trigger === 'unload') {
        once.remove('form-updated', contextIsForm ? $context : $context.find('form')).forEach(function (form) {
          form.removeAttribute('data-drupal-form-fields');
          $(form).off('.formUpdated');
        });
      }
    }
  };
  Drupal.behaviors.fillUserInfoFromBrowser = {
    attach: function attach(context, settings) {
      var userInfo = ['name', 'mail', 'homepage'];
      var $forms = $(once('user-info-from-browser', '[data-user-info-from-browser]'));
      if ($forms.length) {
        userInfo.forEach(function (info) {
          var $element = $forms.find("[name=".concat(info, "]"));
          var browserData = localStorage.getItem("Drupal.visitor.".concat(info));
          if (!$element.length) {
            return;
          }
          var emptyValue = $element[0].value === '';
          var defaultValue = $element.attr('data-drupal-default-value') === $element[0].value;
          if (browserData && (emptyValue || defaultValue)) {
            $element.each(function (index, item) {
              item.value = browserData;
            });
          }
        });
      }
      $forms.on('submit', function () {
        userInfo.forEach(function (info) {
          var $element = $forms.find("[name=".concat(info, "]"));
          if ($element.length) {
            localStorage.setItem("Drupal.visitor.".concat(info), $element[0].value);
          }
        });
      });
    }
  };
  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e) {
    var url;
    if (e.type === 'click') {
      url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
    } else {
      url = window.location;
    }
    var hash = url.hash.substr(1);
    if (hash) {
      var $target = $("#".concat(hash));
      $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);
      setTimeout(function () {
        return $target.trigger('focus');
      }, 300);
    }
  };
  var debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);
  $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);
  $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
})(jQuery, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, _ref) {
  var isTabbable = _ref.isTabbable;
  $.extend($.expr[':'], {
    tabbable: function tabbable(element) {
      Drupal.deprecationError({
        message: 'The :tabbable selector is deprecated in Drupal 9.2.0 and will be removed in Drupal 11.0.0. Use the core/tabbable library instead. See https://www.drupal.org/node/3183730'
      });
      if (element.tagName === 'SUMMARY' || element.tagName === 'DETAILS') {
        var tabIndex = element.getAttribute('tabIndex');
        if (tabIndex === null || tabIndex < 0) {
          return false;
        }
      }
      return isTabbable(element);
    }
  });
})(jQuery, Drupal, window.tabbable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($) {
  var cachedScrollbarWidth = null;
  var max = Math.max,
    abs = Math.abs;
  var regexHorizontal = /left|center|right/;
  var regexVertical = /top|center|bottom/;
  var regexOffset = /[+-]\d+(\.[\d]+)?%?/;
  var regexPosition = /^\w+/;
  var regexPercent = /%$/;
  var _position = $.fn.position;
  function getOffsets(offsets, width, height) {
    return [parseFloat(offsets[0]) * (regexPercent.test(offsets[0]) ? width / 100 : 1), parseFloat(offsets[1]) * (regexPercent.test(offsets[1]) ? height / 100 : 1)];
  }
  function parseCss(element, property) {
    return parseInt($.css(element, property), 10) || 0;
  }
  function getDimensions(elem) {
    var raw = elem[0];
    if (raw.nodeType === 9) {
      return {
        width: elem.width(),
        height: elem.height(),
        offset: {
          top: 0,
          left: 0
        }
      };
    }
    if ($.isWindow(raw)) {
      return {
        width: elem.width(),
        height: elem.height(),
        offset: {
          top: elem.scrollTop(),
          left: elem.scrollLeft()
        }
      };
    }
    if (raw.preventDefault) {
      return {
        width: 0,
        height: 0,
        offset: {
          top: raw.pageY,
          left: raw.pageX
        }
      };
    }
    return {
      width: elem.outerWidth(),
      height: elem.outerHeight(),
      offset: elem.offset()
    };
  }
  var collisions = {
    fit: {
      left: function left(position, data) {
        var within = data.within;
        var withinOffset = within.isWindow ? within.scrollLeft : within.offset.left;
        var outerWidth = within.width;
        var collisionPosLeft = position.left - data.collisionPosition.marginLeft;
        var overLeft = withinOffset - collisionPosLeft;
        var overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset;
        var newOverRight;
        if (data.collisionWidth > outerWidth) {
          if (overLeft > 0 && overRight <= 0) {
            newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
            position.left += overLeft - newOverRight;
          } else if (overRight > 0 && overLeft <= 0) {
            position.left = withinOffset;
          } else if (overLeft > overRight) {
            position.left = withinOffset + outerWidth - data.collisionWidth;
          } else {
            position.left = withinOffset;
          }
        } else if (overLeft > 0) {
          position.left += overLeft;
        } else if (overRight > 0) {
          position.left -= overRight;
        } else {
          position.left = max(position.left - collisionPosLeft, position.left);
        }
      },
      top: function top(position, data) {
        var within = data.within;
        var withinOffset = within.isWindow ? within.scrollTop : within.offset.top;
        var outerHeight = data.within.height;
        var collisionPosTop = position.top - data.collisionPosition.marginTop;
        var overTop = withinOffset - collisionPosTop;
        var overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset;
        var newOverBottom;
        if (data.collisionHeight > outerHeight) {
          if (overTop > 0 && overBottom <= 0) {
            newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
            position.top += overTop - newOverBottom;
          } else if (overBottom > 0 && overTop <= 0) {
            position.top = withinOffset;
          } else if (overTop > overBottom) {
            position.top = withinOffset + outerHeight - data.collisionHeight;
          } else {
            position.top = withinOffset;
          }
        } else if (overTop > 0) {
          position.top += overTop;
        } else if (overBottom > 0) {
          position.top -= overBottom;
        } else {
          position.top = max(position.top - collisionPosTop, position.top);
        }
      }
    },
    flip: {
      left: function left(position, data) {
        var within = data.within;
        var withinOffset = within.offset.left + within.scrollLeft;
        var outerWidth = within.width;
        var offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left;
        var collisionPosLeft = position.left - data.collisionPosition.marginLeft;
        var overLeft = collisionPosLeft - offsetLeft;
        var overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft;
        var myOffset = data.my[0] === 'left' ? -data.elemWidth : data.my[0] === 'right' ? data.elemWidth : 0;
        var atOffset = data.at[0] === 'left' ? data.targetWidth : data.at[0] === 'right' ? -data.targetWidth : 0;
        var offset = -2 * data.offset[0];
        var newOverRight;
        var newOverLeft;
        if (overLeft < 0) {
          newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
          if (newOverRight < 0 || newOverRight < abs(overLeft)) {
            position.left += myOffset + atOffset + offset;
          }
        } else if (overRight > 0) {
          newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
          if (newOverLeft > 0 || abs(newOverLeft) < overRight) {
            position.left += myOffset + atOffset + offset;
          }
        }
      },
      top: function top(position, data) {
        var within = data.within;
        var withinOffset = within.offset.top + within.scrollTop;
        var outerHeight = within.height;
        var offsetTop = within.isWindow ? within.scrollTop : within.offset.top;
        var collisionPosTop = position.top - data.collisionPosition.marginTop;
        var overTop = collisionPosTop - offsetTop;
        var overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop;
        var top = data.my[1] === 'top';
        var myOffset = top ? -data.elemHeight : data.my[1] === 'bottom' ? data.elemHeight : 0;
        var atOffset = data.at[1] === 'top' ? data.targetHeight : data.at[1] === 'bottom' ? -data.targetHeight : 0;
        var offset = -2 * data.offset[1];
        var newOverTop;
        var newOverBottom;
        if (overTop < 0) {
          newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
          if (newOverBottom < 0 || newOverBottom < abs(overTop)) {
            position.top += myOffset + atOffset + offset;
          }
        } else if (overBottom > 0) {
          newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
          if (newOverTop > 0 || abs(newOverTop) < overBottom) {
            position.top += myOffset + atOffset + offset;
          }
        }
      }
    },
    flipfit: {
      left: function left() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        collisions.flip.left.apply(this, args);
        collisions.fit.left.apply(this, args);
      },
      top: function top() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        collisions.flip.top.apply(this, args);
        collisions.fit.top.apply(this, args);
      }
    }
  };
  $.position = {
    scrollbarWidth: function scrollbarWidth() {
      if (cachedScrollbarWidth !== undefined) {
        return cachedScrollbarWidth;
      }
      var div = $('<div ' + "style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>" + "<div style='height:100px;width:auto;'></div></div>");
      var innerDiv = div.children()[0];
      $('body').append(div);
      var w1 = innerDiv.offsetWidth;
      div.css('overflow', 'scroll');
      var w2 = innerDiv.offsetWidth;
      if (w1 === w2) {
        w2 = div[0].clientWidth;
      }
      div.remove();
      cachedScrollbarWidth = w1 - w2;
      return cachedScrollbarWidth;
    },
    getScrollInfo: function getScrollInfo(within) {
      var overflowX = within.isWindow || within.isDocument ? '' : within.element.css('overflow-x');
      var overflowY = within.isWindow || within.isDocument ? '' : within.element.css('overflow-y');
      var hasOverflowX = overflowX === 'scroll' || overflowX === 'auto' && within.width < within.element[0].scrollWidth;
      var hasOverflowY = overflowY === 'scroll' || overflowY === 'auto' && within.height < within.element[0].scrollHeight;
      return {
        width: hasOverflowY ? $.position.scrollbarWidth() : 0,
        height: hasOverflowX ? $.position.scrollbarWidth() : 0
      };
    },
    getWithinInfo: function getWithinInfo(element) {
      var withinElement = $(element || window);
      var isWindow = $.isWindow(withinElement[0]);
      var isDocument = !!withinElement[0] && withinElement[0].nodeType === 9;
      var hasOffset = !isWindow && !isDocument;
      return {
        element: withinElement,
        isWindow: isWindow,
        isDocument: isDocument,
        offset: hasOffset ? $(element).offset() : {
          left: 0,
          top: 0
        },
        scrollLeft: withinElement.scrollLeft(),
        scrollTop: withinElement.scrollTop(),
        width: withinElement.outerWidth(),
        height: withinElement.outerHeight()
      };
    }
  };
  $.fn.position = function (options) {
    if (!options || !options.of) {
      return _position.apply(this, arguments);
    }
    options = $.extend({}, options);
    var within = $.position.getWithinInfo(options.within);
    var scrollInfo = $.position.getScrollInfo(within);
    var collision = (options.collision || 'flip').split(' ');
    var offsets = {};
    var target = typeof options.of === 'string' ? $(document).find(options.of) : $(options.of);
    var dimensions = getDimensions(target);
    var targetWidth = dimensions.width;
    var targetHeight = dimensions.height;
    var targetOffset = dimensions.offset;
    if (target[0].preventDefault) {
      options.at = 'left top';
    }
    var basePosition = $.extend({}, targetOffset);
    $.each(['my', 'at'], function () {
      var pos = (options[this] || '').split(' ');
      if (pos.length === 1) {
        pos = regexHorizontal.test(pos[0]) ? pos.concat(['center']) : regexVertical.test(pos[0]) ? ['center'].concat(pos) : ['center', 'center'];
      }
      pos[0] = regexHorizontal.test(pos[0]) ? pos[0] : 'center';
      pos[1] = regexVertical.test(pos[1]) ? pos[1] : 'center';
      var horizontalOffset = regexOffset.exec(pos[0]);
      var verticalOffset = regexOffset.exec(pos[1]);
      offsets[this] = [horizontalOffset ? horizontalOffset[0] : 0, verticalOffset ? verticalOffset[0] : 0];
      options[this] = [regexPosition.exec(pos[0])[0], regexPosition.exec(pos[1])[0]];
    });
    if (collision.length === 1) {
      collision[1] = collision[0];
    }
    if (options.at[0] === 'right') {
      basePosition.left += targetWidth;
    } else if (options.at[0] === 'center') {
      basePosition.left += targetWidth / 2;
    }
    if (options.at[1] === 'bottom') {
      basePosition.top += targetHeight;
    } else if (options.at[1] === 'center') {
      basePosition.top += targetHeight / 2;
    }
    var atOffset = getOffsets(offsets.at, targetWidth, targetHeight);
    basePosition.left += atOffset[0];
    basePosition.top += atOffset[1];
    return this.each(function () {
      var using;
      var elem = $(this);
      var elemWidth = elem.outerWidth();
      var elemHeight = elem.outerHeight();
      var marginLeft = parseCss(this, 'marginLeft');
      var marginTop = parseCss(this, 'marginTop');
      var collisionWidth = elemWidth + marginLeft + parseCss(this, 'marginRight') + scrollInfo.width;
      var collisionHeight = elemHeight + marginTop + parseCss(this, 'marginBottom') + scrollInfo.height;
      var position = $.extend({}, basePosition);
      var myOffset = getOffsets(offsets.my, elem.outerWidth(), elem.outerHeight());
      if (options.my[0] === 'right') {
        position.left -= elemWidth;
      } else if (options.my[0] === 'center') {
        position.left -= elemWidth / 2;
      }
      if (options.my[1] === 'bottom') {
        position.top -= elemHeight;
      } else if (options.my[1] === 'center') {
        position.top -= elemHeight / 2;
      }
      position.left += myOffset[0];
      position.top += myOffset[1];
      var collisionPosition = {
        marginLeft: marginLeft,
        marginTop: marginTop
      };
      $.each(['left', 'top'], function (i, dir) {
        if (collisions[collision[i]]) {
          collisions[collision[i]][dir](position, {
            targetWidth: targetWidth,
            targetHeight: targetHeight,
            elemWidth: elemWidth,
            elemHeight: elemHeight,
            collisionPosition: collisionPosition,
            collisionWidth: collisionWidth,
            collisionHeight: collisionHeight,
            offset: [atOffset[0] + myOffset[0], atOffset[1] + myOffset[1]],
            my: options.my,
            at: options.at,
            within: within,
            elem: elem
          });
        }
      });
      if (options.using) {
        using = function using(props) {
          var left = targetOffset.left - position.left;
          var right = left + targetWidth - elemWidth;
          var top = targetOffset.top - position.top;
          var bottom = top + targetHeight - elemHeight;
          var feedback = {
            target: {
              element: target,
              left: targetOffset.left,
              top: targetOffset.top,
              width: targetWidth,
              height: targetHeight
            },
            element: {
              element: elem,
              left: position.left,
              top: position.top,
              width: elemWidth,
              height: elemHeight
            },
            horizontal: right < 0 ? 'left' : left > 0 ? 'right' : 'center',
            vertical: bottom < 0 ? 'top' : top > 0 ? 'bottom' : 'middle'
          };
          if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
            feedback.horizontal = 'center';
          }
          if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
            feedback.vertical = 'middle';
          }
          if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
            feedback.important = 'horizontal';
          } else {
            feedback.important = 'vertical';
          }
          options.using.call(this, props, feedback);
        };
      }
      elem.offset($.extend(position, {
        using: using
      }));
    });
  };
  if (!$.hasOwnProperty('ui')) {
    $.ui = {};
  }
  $.ui.position = collisions;
})(jQuery);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings) {
  drupalSettings.dialog = {
    autoOpen: true,
    dialogClass: '',
    buttonClass: 'button',
    buttonPrimaryClass: 'button--primary',
    close: function close(event) {
      Drupal.dialog(event.target).close();
      Drupal.detachBehaviors(event.target, null, 'unload');
    }
  };
  Drupal.dialog = function (element, options) {
    var undef;
    var $element = $(element);
    var dialog = {
      open: false,
      returnValue: undef
    };
    function openDialog(settings) {
      settings = $.extend({}, drupalSettings.dialog, options, settings);
      $(window).trigger('dialog:beforecreate', [dialog, $element, settings]);
      $element.dialog(settings);
      dialog.open = true;
      $(window).trigger('dialog:aftercreate', [dialog, $element, settings]);
    }
    function closeDialog(value) {
      $(window).trigger('dialog:beforeclose', [dialog, $element]);
      $element.dialog('close');
      dialog.returnValue = value;
      dialog.open = false;
      $(window).trigger('dialog:afterclose', [dialog, $element]);
    }
    dialog.show = function () {
      openDialog({
        modal: false
      });
    };
    dialog.showModal = function () {
      openDialog({
        modal: true
      });
    };
    dialog.close = closeDialog;
    return dialog;
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings, debounce, displace) {
  drupalSettings.dialog = $.extend({
    autoResize: true,
    maxHeight: '95%'
  }, drupalSettings.dialog);
  function resetPosition(options) {
    var offsets = displace.offsets;
    var left = offsets.left - offsets.right;
    var top = offsets.top - offsets.bottom;
    var leftString = "".concat((left > 0 ? '+' : '-') + Math.abs(Math.round(left / 2)), "px");
    var topString = "".concat((top > 0 ? '+' : '-') + Math.abs(Math.round(top / 2)), "px");
    options.position = {
      my: "center".concat(left !== 0 ? leftString : '', " center").concat(top !== 0 ? topString : ''),
      of: window
    };
    return options;
  }
  function resetSize(event) {
    var positionOptions = ['width', 'height', 'minWidth', 'minHeight', 'maxHeight', 'maxWidth', 'position'];
    var adjustedOptions = {};
    var windowHeight = $(window).height();
    var option;
    var optionValue;
    var adjustedValue;
    for (var n = 0; n < positionOptions.length; n++) {
      option = positionOptions[n];
      optionValue = event.data.settings[option];
      if (optionValue) {
        if (typeof optionValue === 'string' && /%$/.test(optionValue) && /height/i.test(option)) {
          windowHeight -= displace.offsets.top + displace.offsets.bottom;
          adjustedValue = parseInt(0.01 * parseInt(optionValue, 10) * windowHeight, 10);
          if (option === 'height' && event.data.$element.parent().outerHeight() < adjustedValue) {
            adjustedValue = 'auto';
          }
          adjustedOptions[option] = adjustedValue;
        }
      }
    }
    if (!event.data.settings.modal) {
      adjustedOptions = resetPosition(adjustedOptions);
    }
    event.data.$element.dialog('option', adjustedOptions).trigger('dialogContentResize');
  }
  $(window).on({
    'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
      var autoResize = debounce(resetSize, 20);
      var eventData = {
        settings: settings,
        $element: $element
      };
      if (settings.autoResize === true || settings.autoResize === 'true') {
        $element.dialog('option', {
          resizable: false,
          draggable: false
        }).dialog('widget').css('position', 'fixed');
        $(window).on('resize.dialogResize scroll.dialogResize', eventData, autoResize).trigger('resize.dialogResize');
        $(document).on('drupalViewportOffsetChange.dialogResize', eventData, autoResize);
      }
    },
    'dialog:beforeclose': function dialogBeforeclose(event, dialog, $element) {
      $(window).off('.dialogResize');
      $(document).off('.dialogResize');
    }
  });
})(jQuery, Drupal, drupalSettings, Drupal.debounce, Drupal.displace);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, _ref) {
  var tabbable = _ref.tabbable,
    isTabbable = _ref.isTabbable;
  $.widget('ui.dialog', $.ui.dialog, {
    options: {
      buttonClass: 'button',
      buttonPrimaryClass: 'button--primary'
    },
    _createButtons: function _createButtons() {
      var opts = this.options;
      var primaryIndex;
      var index;
      var il = opts.buttons.length;
      for (index = 0; index < il; index++) {
        if (opts.buttons[index].primary && opts.buttons[index].primary === true) {
          primaryIndex = index;
          delete opts.buttons[index].primary;
          break;
        }
      }
      this._super();
      var $buttons = this.uiButtonSet.children().addClass(opts.buttonClass);
      if (typeof primaryIndex !== 'undefined') {
        $buttons.eq(index).addClass(opts.buttonPrimaryClass);
      }
    },
    _focusTabbable: function _focusTabbable() {
      var hasFocus = this._focusedElement ? this._focusedElement.get(0) : null;
      if (!hasFocus) {
        hasFocus = this.element.find('[autofocus]').get(0);
      }
      if (!hasFocus) {
        var $elements = [this.element, this.uiDialogButtonPane];
        for (var i = 0; i < $elements.length; i++) {
          var element = $elements[i].get(0);
          if (element) {
            var elementTabbable = tabbable(element);
            hasFocus = elementTabbable.length ? elementTabbable[0] : null;
          }
          if (hasFocus) {
            break;
          }
        }
      }
      if (!hasFocus) {
        var closeBtn = this.uiDialogTitlebarClose.get(0);
        hasFocus = closeBtn && isTabbable(closeBtn) ? closeBtn : null;
      }
      if (!hasFocus) {
        hasFocus = this.uiDialog.get(0);
      }
      $(hasFocus).eq(0).trigger('focus');
    }
  });
})(jQuery, window.tabbable);;
/**
 * @popperjs/core v2.11.6 - MIT License
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Popper={})}(this,(function(e){"use strict";function t(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function n(e){return e instanceof t(e).Element||e instanceof Element}function r(e){return e instanceof t(e).HTMLElement||e instanceof HTMLElement}function o(e){return"undefined"!=typeof ShadowRoot&&(e instanceof t(e).ShadowRoot||e instanceof ShadowRoot)}var i=Math.max,a=Math.min,s=Math.round;function f(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function c(){return!/^((?!chrome|android).)*safari/i.test(f())}function p(e,o,i){void 0===o&&(o=!1),void 0===i&&(i=!1);var a=e.getBoundingClientRect(),f=1,p=1;o&&r(e)&&(f=e.offsetWidth>0&&s(a.width)/e.offsetWidth||1,p=e.offsetHeight>0&&s(a.height)/e.offsetHeight||1);var u=(n(e)?t(e):window).visualViewport,l=!c()&&i,d=(a.left+(l&&u?u.offsetLeft:0))/f,h=(a.top+(l&&u?u.offsetTop:0))/p,m=a.width/f,v=a.height/p;return{width:m,height:v,top:h,right:d+m,bottom:h+v,left:d,x:d,y:h}}function u(e){var n=t(e);return{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function l(e){return e?(e.nodeName||"").toLowerCase():null}function d(e){return((n(e)?e.ownerDocument:e.document)||window.document).documentElement}function h(e){return p(d(e)).left+u(e).scrollLeft}function m(e){return t(e).getComputedStyle(e)}function v(e){var t=m(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function y(e,n,o){void 0===o&&(o=!1);var i,a,f=r(n),c=r(n)&&function(e){var t=e.getBoundingClientRect(),n=s(t.width)/e.offsetWidth||1,r=s(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(n),m=d(n),y=p(e,c,o),g={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(f||!f&&!o)&&(("body"!==l(n)||v(m))&&(g=(i=n)!==t(i)&&r(i)?{scrollLeft:(a=i).scrollLeft,scrollTop:a.scrollTop}:u(i)),r(n)?((b=p(n,!0)).x+=n.clientLeft,b.y+=n.clientTop):m&&(b.x=h(m))),{x:y.left+g.scrollLeft-b.x,y:y.top+g.scrollTop-b.y,width:y.width,height:y.height}}function g(e){var t=p(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function b(e){return"html"===l(e)?e:e.assignedSlot||e.parentNode||(o(e)?e.host:null)||d(e)}function w(e){return["html","body","#document"].indexOf(l(e))>=0?e.ownerDocument.body:r(e)&&v(e)?e:w(b(e))}function x(e,n){var r;void 0===n&&(n=[]);var o=w(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=t(o),s=i?[a].concat(a.visualViewport||[],v(o)?o:[]):o,f=n.concat(s);return i?f:f.concat(x(b(s)))}function O(e){return["table","td","th"].indexOf(l(e))>=0}function j(e){return r(e)&&"fixed"!==m(e).position?e.offsetParent:null}function E(e){for(var n=t(e),i=j(e);i&&O(i)&&"static"===m(i).position;)i=j(i);return i&&("html"===l(i)||"body"===l(i)&&"static"===m(i).position)?n:i||function(e){var t=/firefox/i.test(f());if(/Trident/i.test(f())&&r(e)&&"fixed"===m(e).position)return null;var n=b(e);for(o(n)&&(n=n.host);r(n)&&["html","body"].indexOf(l(n))<0;){var i=m(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||n}var D="top",A="bottom",L="right",P="left",M="auto",k=[D,A,L,P],W="start",B="end",H="viewport",T="popper",R=k.reduce((function(e,t){return e.concat([t+"-"+W,t+"-"+B])}),[]),S=[].concat(k,[M]).reduce((function(e,t){return e.concat([t,t+"-"+W,t+"-"+B])}),[]),V=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function q(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function C(e){return e.split("-")[0]}function N(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&o(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function I(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function _(e,r,o){return r===H?I(function(e,n){var r=t(e),o=d(e),i=r.visualViewport,a=o.clientWidth,s=o.clientHeight,f=0,p=0;if(i){a=i.width,s=i.height;var u=c();(u||!u&&"fixed"===n)&&(f=i.offsetLeft,p=i.offsetTop)}return{width:a,height:s,x:f+h(e),y:p}}(e,o)):n(r)?function(e,t){var n=p(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(r,o):I(function(e){var t,n=d(e),r=u(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=i(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=i(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-r.scrollLeft+h(e),c=-r.scrollTop;return"rtl"===m(o||n).direction&&(f+=i(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:f,y:c}}(d(e)))}function F(e,t,o,s){var f="clippingParents"===t?function(e){var t=x(b(e)),o=["absolute","fixed"].indexOf(m(e).position)>=0&&r(e)?E(e):e;return n(o)?t.filter((function(e){return n(e)&&N(e,o)&&"body"!==l(e)})):[]}(e):[].concat(t),c=[].concat(f,[o]),p=c[0],u=c.reduce((function(t,n){var r=_(e,n,s);return t.top=i(r.top,t.top),t.right=a(r.right,t.right),t.bottom=a(r.bottom,t.bottom),t.left=i(r.left,t.left),t}),_(e,p,s));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function U(e){return e.split("-")[1]}function z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?C(o):null,a=o?U(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case D:t={x:s,y:n.y-r.height};break;case A:t={x:s,y:n.y+n.height};break;case L:t={x:n.x+n.width,y:f};break;case P:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?z(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case W:t[c]=t[c]-(n[p]/2-r[p]/2);break;case B:t[c]=t[c]+(n[p]/2-r[p]/2)}}return t}function Y(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function G(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function J(e,t){void 0===t&&(t={});var r=t,o=r.placement,i=void 0===o?e.placement:o,a=r.strategy,s=void 0===a?e.strategy:a,f=r.boundary,c=void 0===f?"clippingParents":f,u=r.rootBoundary,l=void 0===u?H:u,h=r.elementContext,m=void 0===h?T:h,v=r.altBoundary,y=void 0!==v&&v,g=r.padding,b=void 0===g?0:g,w=Y("number"!=typeof b?b:G(b,k)),x=m===T?"reference":T,O=e.rects.popper,j=e.elements[y?x:m],E=F(n(j)?j:j.contextElement||d(e.elements.popper),c,l,s),P=p(e.elements.reference),M=X({reference:P,element:O,strategy:"absolute",placement:i}),W=I(Object.assign({},O,M)),B=m===T?W:P,R={top:E.top-B.top+w.top,bottom:B.bottom-E.bottom+w.bottom,left:E.left-B.left+w.left,right:B.right-E.right+w.right},S=e.modifiersData.offset;if(m===T&&S){var V=S[i];Object.keys(R).forEach((function(e){var t=[L,A].indexOf(e)>=0?1:-1,n=[D,A].indexOf(e)>=0?"y":"x";R[e]+=V[n]*t}))}return R}var K={placement:"bottom",modifiers:[],strategy:"absolute"};function Q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Z(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,o=void 0===r?[]:r,i=t.defaultOptions,a=void 0===i?K:i;return function(e,t,r){void 0===r&&(r=a);var i,s,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},K,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],p=!1,u={state:f,setOptions:function(r){var i="function"==typeof r?r(f.options):r;l(),f.options=Object.assign({},a,f.options,i),f.scrollParents={reference:n(e)?x(e):e.contextElement?x(e.contextElement):[],popper:x(t)};var s,p,d=function(e){var t=q(e);return V.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(o,f.options.modifiers),p=s.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(p).map((function(e){return p[e]}))));return f.orderedModifiers=d.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:u,options:r}),a=function(){};c.push(i||a)}})),u.update()},forceUpdate:function(){if(!p){var e=f.elements,t=e.reference,n=e.popper;if(Q(t,n)){f.rects={reference:y(t,E(n),"fixed"===f.options.strategy),popper:g(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,c=o.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:u})||f)}else f.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){u.forceUpdate(),e(f)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){l(),p=!0}};if(!Q(e,t))return u;function l(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(r).then((function(e){!p&&r.onFirstUpdate&&r.onFirstUpdate(e)})),u}}var $={passive:!0};var ee={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var n=e.state,r=e.instance,o=e.options,i=o.scroll,a=void 0===i||i,s=o.resize,f=void 0===s||s,c=t(n.elements.popper),p=[].concat(n.scrollParents.reference,n.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",r.update,$)})),f&&c.addEventListener("resize",r.update,$),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",r.update,$)})),f&&c.removeEventListener("resize",r.update,$)}},data:{}};var te={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=X({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},ne={top:"auto",right:"auto",bottom:"auto",left:"auto"};function re(e){var n,r=e.popper,o=e.popperRect,i=e.placement,a=e.variation,f=e.offsets,c=e.position,p=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,h=e.isFixed,v=f.x,y=void 0===v?0:v,g=f.y,b=void 0===g?0:g,w="function"==typeof l?l({x:y,y:b}):{x:y,y:b};y=w.x,b=w.y;var x=f.hasOwnProperty("x"),O=f.hasOwnProperty("y"),j=P,M=D,k=window;if(u){var W=E(r),H="clientHeight",T="clientWidth";if(W===t(r)&&"static"!==m(W=d(r)).position&&"absolute"===c&&(H="scrollHeight",T="scrollWidth"),W=W,i===D||(i===P||i===L)&&a===B)M=A,b-=(h&&W===k&&k.visualViewport?k.visualViewport.height:W[H])-o.height,b*=p?1:-1;if(i===P||(i===D||i===A)&&a===B)j=L,y-=(h&&W===k&&k.visualViewport?k.visualViewport.width:W[T])-o.width,y*=p?1:-1}var R,S=Object.assign({position:c},u&&ne),V=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:s(t*r)/r||0,y:s(n*r)/r||0}}({x:y,y:b}):{x:y,y:b};return y=V.x,b=V.y,p?Object.assign({},S,((R={})[M]=O?"0":"",R[j]=x?"0":"",R.transform=(k.devicePixelRatio||1)<=1?"translate("+y+"px, "+b+"px)":"translate3d("+y+"px, "+b+"px, 0)",R)):Object.assign({},S,((n={})[M]=O?b+"px":"",n[j]=x?y+"px":"",n.transform="",n))}var oe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:C(t.placement),variation:U(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,re(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,re(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var ie={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},i=t.elements[e];r(i)&&l(i)&&(Object.assign(i.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});r(o)&&l(o)&&(Object.assign(o.style,a),Object.keys(i).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]};var ae={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=S.reduce((function(e,n){return e[n]=function(e,t,n){var r=C(e),o=[P,D].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[P,L].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},se={left:"right",right:"left",bottom:"top",top:"bottom"};function fe(e){return e.replace(/left|right|bottom|top/g,(function(e){return se[e]}))}var ce={start:"end",end:"start"};function pe(e){return e.replace(/start|end/g,(function(e){return ce[e]}))}function ue(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?S:f,p=U(r),u=p?s?R:R.filter((function(e){return U(e)===p})):k,l=u.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=u);var d=l.reduce((function(t,n){return t[n]=J(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[C(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}var le={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=t.options.placement,y=C(v),g=f||(y===v||!h?[fe(v)]:function(e){if(C(e)===M)return[];var t=fe(e);return[pe(e),t,pe(t)]}(v)),b=[v].concat(g).reduce((function(e,n){return e.concat(C(n)===M?ue(t,{placement:n,boundary:p,rootBoundary:u,padding:c,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,j=!0,E=b[0],k=0;k<b.length;k++){var B=b[k],H=C(B),T=U(B)===W,R=[D,A].indexOf(H)>=0,S=R?"width":"height",V=J(t,{placement:B,boundary:p,rootBoundary:u,altBoundary:l,padding:c}),q=R?T?L:P:T?A:D;w[S]>x[S]&&(q=fe(q));var N=fe(q),I=[];if(i&&I.push(V[H]<=0),s&&I.push(V[q]<=0,V[N]<=0),I.every((function(e){return e}))){E=B,j=!1;break}O.set(B,I)}if(j)for(var _=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},F=h?3:1;F>0;F--){if("break"===_(F))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function de(e,t,n){return i(e,a(t,n))}var he={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,s=void 0===o||o,f=n.altAxis,c=void 0!==f&&f,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.padding,h=n.tether,m=void 0===h||h,v=n.tetherOffset,y=void 0===v?0:v,b=J(t,{boundary:p,rootBoundary:u,padding:d,altBoundary:l}),w=C(t.placement),x=U(t.placement),O=!x,j=z(w),M="x"===j?"y":"x",k=t.modifiersData.popperOffsets,B=t.rects.reference,H=t.rects.popper,T="function"==typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,R="number"==typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,V={x:0,y:0};if(k){if(s){var q,N="y"===j?D:P,I="y"===j?A:L,_="y"===j?"height":"width",F=k[j],X=F+b[N],Y=F-b[I],G=m?-H[_]/2:0,K=x===W?B[_]:H[_],Q=x===W?-H[_]:-B[_],Z=t.elements.arrow,$=m&&Z?g(Z):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[N],ne=ee[I],re=de(0,B[_],$[_]),oe=O?B[_]/2-G-re-te-R.mainAxis:K-re-te-R.mainAxis,ie=O?-B[_]/2+G+re+ne+R.mainAxis:Q+re+ne+R.mainAxis,ae=t.elements.arrow&&E(t.elements.arrow),se=ae?"y"===j?ae.clientTop||0:ae.clientLeft||0:0,fe=null!=(q=null==S?void 0:S[j])?q:0,ce=F+ie-fe,pe=de(m?a(X,F+oe-fe-se):X,F,m?i(Y,ce):Y);k[j]=pe,V[j]=pe-F}if(c){var ue,le="x"===j?D:P,he="x"===j?A:L,me=k[M],ve="y"===M?"height":"width",ye=me+b[le],ge=me-b[he],be=-1!==[D,P].indexOf(w),we=null!=(ue=null==S?void 0:S[M])?ue:0,xe=be?ye:me-B[ve]-H[ve]-we+R.altAxis,Oe=be?me+B[ve]+H[ve]-we-R.altAxis:ge,je=m&&be?function(e,t,n){var r=de(e,t,n);return r>n?n:r}(xe,me,Oe):de(m?xe:ye,me,m?Oe:ge);k[M]=je,V[M]=je-me}t.modifiersData[r]=V}},requiresIfExists:["offset"]};var me={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=C(n.placement),f=z(s),c=[P,L].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return Y("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:G(e,k))}(o.padding,n),u=g(i),l="y"===f?D:P,d="y"===f?A:L,h=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],m=a[f]-n.rects.reference[f],v=E(i),y=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,b=h/2-m/2,w=p[l],x=y-u[c]-p[d],O=y/2-u[c]/2+b,j=de(w,O,x),M=f;n.modifiersData[r]=((t={})[M]=j,t.centerOffset=j-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&N(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ve(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ye(e){return[D,L,A,P].some((function(t){return e[t]>=0}))}var ge={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=J(t,{elementContext:"reference"}),s=J(t,{altBoundary:!0}),f=ve(a,r),c=ve(s,o,i),p=ye(f),u=ye(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}},be=Z({defaultModifiers:[ee,te,oe,ie]}),we=[ee,te,oe,ie,ae,le,he,me,ge],xe=Z({defaultModifiers:we});e.applyStyles=ie,e.arrow=me,e.computeStyles=oe,e.createPopper=xe,e.createPopperLite=be,e.defaultModifiers=we,e.detectOverflow=J,e.eventListeners=ee,e.flip=le,e.hide=ge,e.offset=ae,e.popperGenerator=Z,e.popperOffsets=te,e.preventOverflow=he,Object.defineProperty(e,"__esModule",{value:!0})}));

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, _, Backbone, Drupal, drupalSettings, JSON, storage) {
  var options = $.extend(drupalSettings.quickedit, {
    strings: {
      quickEdit: Drupal.t('Quick edit')
    }
  });
  var fieldsMetadataQueue = [];
  var fieldsAvailableQueue = [];
  var contextualLinksQueue = [];
  var entityInstancesTracker = {};
  function initQuickEdit(bodyElement) {
    Drupal.quickedit.collections.entities = new Drupal.quickedit.EntityCollection();
    Drupal.quickedit.collections.fields = new Drupal.quickedit.FieldCollection();
    Drupal.quickedit.app = new Drupal.quickedit.AppView({
      el: bodyElement,
      model: new Drupal.quickedit.AppModel(),
      entitiesCollection: Drupal.quickedit.collections.entities,
      fieldsCollection: Drupal.quickedit.collections.fields
    });
  }
  function processEntity(entityElement) {
    var entityID = entityElement.getAttribute('data-quickedit-entity-id');
    if (!entityInstancesTracker.hasOwnProperty(entityID)) {
      entityInstancesTracker[entityID] = 0;
    } else {
      entityInstancesTracker[entityID]++;
    }
    var entityInstanceID = entityInstancesTracker[entityID];
    entityElement.setAttribute('data-quickedit-entity-instance-id', entityInstanceID);
  }
  function initializeField(fieldElement, fieldID, entityID, entityInstanceID) {
    var entity = Drupal.quickedit.collections.entities.findWhere({
      entityID: entityID,
      entityInstanceID: entityInstanceID
    });
    $(fieldElement).addClass('quickedit-field');
    var field = new Drupal.quickedit.FieldModel({
      el: fieldElement,
      fieldID: fieldID,
      id: "".concat(fieldID, "[").concat(entity.get('entityInstanceID'), "]"),
      entity: entity,
      metadata: Drupal.quickedit.metadata.get(fieldID),
      acceptStateChange: _.bind(Drupal.quickedit.app.acceptEditorStateChange, Drupal.quickedit.app)
    });
    Drupal.quickedit.collections.fields.add(field);
  }
  function loadMissingEditors(callback) {
    var loadedEditors = _.keys(Drupal.quickedit.editors);
    var missingEditors = [];
    Drupal.quickedit.collections.fields.each(function (fieldModel) {
      var metadata = Drupal.quickedit.metadata.get(fieldModel.get('fieldID'));
      if (metadata.access && _.indexOf(loadedEditors, metadata.editor) === -1) {
        missingEditors.push(metadata.editor);
        Drupal.quickedit.editors[metadata.editor] = false;
      }
    });
    missingEditors = _.uniq(missingEditors);
    if (missingEditors.length === 0) {
      callback();
      return;
    }
    var loadEditorsAjax = Drupal.ajax({
      url: Drupal.url('quickedit/attachments'),
      submit: {
        'editors[]': missingEditors
      }
    });
    loadEditorsAjax.execute().then(callback);
  }
  function initializeEntityContextualLink(contextualLink) {
    var metadata = Drupal.quickedit.metadata;
    function hasFieldWithPermission(fieldIDs) {
      for (var i = 0; i < fieldIDs.length; i++) {
        var fieldID = fieldIDs[i];
        if (metadata.get(fieldID, 'access') === true) {
          return true;
        }
      }
      return false;
    }
    function allMetadataExists(fieldIDs) {
      return fieldIDs.length === metadata.intersection(fieldIDs).length;
    }
    var fields = _.where(fieldsAvailableQueue, {
      entityID: contextualLink.entityID,
      entityInstanceID: contextualLink.entityInstanceID
    });
    var fieldIDs = _.pluck(fields, 'fieldID');
    if (fieldIDs.length === 0) {
      return false;
    }
    if (hasFieldWithPermission(fieldIDs)) {
      var entityModel = new Drupal.quickedit.EntityModel({
        el: contextualLink.region,
        entityID: contextualLink.entityID,
        entityInstanceID: contextualLink.entityInstanceID,
        id: "".concat(contextualLink.entityID, "[").concat(contextualLink.entityInstanceID, "]"),
        label: Drupal.quickedit.metadata.get(contextualLink.entityID, 'label')
      });
      Drupal.quickedit.collections.entities.add(entityModel);
      var entityDecorationView = new Drupal.quickedit.EntityDecorationView({
        el: contextualLink.region,
        model: entityModel
      });
      entityModel.set('entityDecorationView', entityDecorationView);
      _.each(fields, function (field) {
        initializeField(field.el, field.fieldID, contextualLink.entityID, contextualLink.entityInstanceID);
      });
      fieldsAvailableQueue = _.difference(fieldsAvailableQueue, fields);
      var initContextualLink = _.once(function () {
        var $links = $(contextualLink.el).find('.contextual-links');
        var contextualLinkView = new Drupal.quickedit.ContextualLinkView($.extend({
          el: $('<li class="quickedit"><a href="" role="button" aria-pressed="false"></a></li>').prependTo($links),
          model: entityModel,
          appModel: Drupal.quickedit.app.model
        }, options));
        entityModel.set('contextualLinkView', contextualLinkView);
      });
      loadMissingEditors(initContextualLink);
      return true;
    }
    if (allMetadataExists(fieldIDs)) {
      return true;
    }
    return false;
  }
  function extractEntityID(fieldID) {
    return fieldID.split('/').slice(0, 2).join('/');
  }
  function processField(fieldElement) {
    var metadata = Drupal.quickedit.metadata;
    var fieldID = fieldElement.getAttribute('data-quickedit-field-id');
    var entityID = extractEntityID(fieldID);
    var entityElementSelector = "[data-quickedit-entity-id=\"".concat(entityID, "\"]");
    var $entityElement = $(entityElementSelector);
    if (!$entityElement.length) {
      throw new Error("Quick Edit could not associate the rendered entity field markup (with [data-quickedit-field-id=\"".concat(fieldID, "\"]) with the corresponding rendered entity markup: no parent DOM node found with [data-quickedit-entity-id=\"").concat(entityID, "\"]. This is typically caused by the theme's template for this entity type forgetting to print the attributes."));
    }
    var entityElement = $(fieldElement).closest($entityElement);
    if (entityElement.length === 0) {
      var $lowestCommonParent = $entityElement.parents().has(fieldElement).first();
      entityElement = $lowestCommonParent.find($entityElement);
    }
    var entityInstanceID = entityElement.get(0).getAttribute('data-quickedit-entity-instance-id');
    if (!metadata.has(fieldID)) {
      fieldsMetadataQueue.push({
        el: fieldElement,
        fieldID: fieldID,
        entityID: entityID,
        entityInstanceID: entityInstanceID
      });
      return;
    }
    if (metadata.get(fieldID, 'access') !== true) {
      return;
    }
    if (Drupal.quickedit.collections.entities.findWhere({
      entityID: entityID,
      entityInstanceID: entityInstanceID
    })) {
      initializeField(fieldElement, fieldID, entityID, entityInstanceID);
    } else {
      fieldsAvailableQueue.push({
        el: fieldElement,
        fieldID: fieldID,
        entityID: entityID,
        entityInstanceID: entityInstanceID
      });
    }
  }
  function deleteContainedModelsAndQueues($context) {
    $context.find('[data-quickedit-entity-id]').addBack('[data-quickedit-entity-id]').each(function (index, entityElement) {
      var entityModel = Drupal.quickedit.collections.entities.findWhere({
        el: entityElement
      });
      if (entityModel) {
        var contextualLinkView = entityModel.get('contextualLinkView');
        contextualLinkView.undelegateEvents();
        contextualLinkView.remove();
        entityModel.get('entityDecorationView').remove();
        entityModel.destroy();
      }
      function hasOtherRegion(contextualLink) {
        return contextualLink.region !== entityElement;
      }
      contextualLinksQueue = _.filter(contextualLinksQueue, hasOtherRegion);
    });
    $context.find('[data-quickedit-field-id]').addBack('[data-quickedit-field-id]').each(function (index, fieldElement) {
      Drupal.quickedit.collections.fields.chain().filter(function (fieldModel) {
        return fieldModel.get('el') === fieldElement;
      }).invoke('destroy');
      function hasOtherFieldElement(field) {
        return field.el !== fieldElement;
      }
      fieldsMetadataQueue = _.filter(fieldsMetadataQueue, hasOtherFieldElement);
      fieldsAvailableQueue = _.filter(fieldsAvailableQueue, hasOtherFieldElement);
    });
  }
  function fetchMissingMetadata(callback) {
    if (fieldsMetadataQueue.length) {
      var fieldIDs = _.pluck(fieldsMetadataQueue, 'fieldID');
      var fieldElementsWithoutMetadata = _.pluck(fieldsMetadataQueue, 'el');
      var entityIDs = _.uniq(_.pluck(fieldsMetadataQueue, 'entityID'), true);
      entityIDs = _.difference(entityIDs, Drupal.quickedit.metadata.intersection(entityIDs));
      fieldsMetadataQueue = [];
      $.ajax({
        url: Drupal.url('quickedit/metadata'),
        type: 'POST',
        data: {
          'fields[]': fieldIDs,
          'entities[]': entityIDs
        },
        dataType: 'json',
        success: function success(results) {
          _.each(results, function (fieldMetadata, fieldID) {
            Drupal.quickedit.metadata.add(fieldID, fieldMetadata);
          });
          callback(fieldElementsWithoutMetadata);
        }
      });
    }
  }
  Drupal.behaviors.quickedit = {
    attach: function attach(context) {
      once('quickedit-init', 'body').forEach(initQuickEdit);
      var fields = once('quickedit', '[data-quickedit-field-id]', context);
      if (fields.length === 0) {
        return;
      }
      once('quickedit', '[data-quickedit-entity-id]', context).forEach(processEntity);
      fields.forEach(processField);
      contextualLinksQueue = _.filter(contextualLinksQueue, function (contextualLink) {
        return !initializeEntityContextualLink(contextualLink);
      });
      fetchMissingMetadata(function (fieldElementsWithFreshMetadata) {
        _.each(fieldElementsWithFreshMetadata, processField);
        contextualLinksQueue = _.filter(contextualLinksQueue, function (contextualLink) {
          return !initializeEntityContextualLink(contextualLink);
        });
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        deleteContainedModelsAndQueues($(context));
      }
    }
  };
  Drupal.quickedit = {
    app: null,
    collections: {
      entities: null,
      fields: null
    },
    editors: {},
    metadata: {
      has: function has(fieldID) {
        return storage.getItem(this._prefixFieldID(fieldID)) !== null;
      },
      add: function add(fieldID, metadata) {
        storage.setItem(this._prefixFieldID(fieldID), JSON.stringify(metadata));
      },
      get: function get(fieldID, key) {
        var metadata = JSON.parse(storage.getItem(this._prefixFieldID(fieldID)));
        return typeof key === 'undefined' ? metadata : metadata[key];
      },
      _prefixFieldID: function _prefixFieldID(fieldID) {
        return "Drupal.quickedit.metadata.".concat(fieldID);
      },
      _unprefixFieldID: function _unprefixFieldID(fieldID) {
        return fieldID.substring(26);
      },
      intersection: function intersection(fieldIDs) {
        var prefixedFieldIDs = _.map(fieldIDs, this._prefixFieldID);
        var intersection = _.intersection(prefixedFieldIDs, _.keys(sessionStorage));
        return _.map(intersection, this._unprefixFieldID);
      }
    }
  };
  var permissionsHashKey = Drupal.quickedit.metadata._prefixFieldID('permissionsHash');
  var permissionsHashValue = storage.getItem(permissionsHashKey);
  var permissionsHash = drupalSettings.user.permissionsHash;
  if (permissionsHashValue !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 26) === 'Drupal.quickedit.metadata.') {
          storage.removeItem(key);
        }
      });
    }
    storage.setItem(permissionsHashKey, permissionsHash);
  }
  $(document).on('drupalContextualLinkAdded', function (event, data) {
    if (data.$region.is('[data-quickedit-entity-id]')) {
      if (!data.$region.is('[data-quickedit-entity-instance-id]')) {
        once('quickedit', data.$region);
        processEntity(data.$region.get(0));
      }
      var contextualLink = {
        entityID: data.$region.attr('data-quickedit-entity-id'),
        entityInstanceID: data.$region.attr('data-quickedit-entity-instance-id'),
        el: data.$el[0],
        region: data.$region[0]
      };
      if (!initializeEntityContextualLink(contextualLink)) {
        contextualLinksQueue.push(contextualLink);
      }
    }
  });
})(jQuery, _, Backbone, Drupal, drupalSettings, window.JSON, window.sessionStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  Drupal.quickedit.util = Drupal.quickedit.util || {};
  Drupal.quickedit.util.constants = {};
  Drupal.quickedit.util.constants.transitionEnd = 'transitionEnd.quickedit webkitTransitionEnd.quickedit transitionend.quickedit msTransitionEnd.quickedit oTransitionEnd.quickedit';
  Drupal.quickedit.util.buildUrl = function (id, urlFormat) {
    var parts = id.split('/');
    return Drupal.formatString(decodeURIComponent(urlFormat), {
      '!entity_type': parts[0],
      '!id': parts[1],
      '!field_name': parts[2],
      '!langcode': parts[3],
      '!view_mode': parts[4]
    });
  };
  Drupal.quickedit.util.networkErrorModal = function (title, message) {
    var $message = $("<div>".concat(message, "</div>"));
    var networkErrorModal = Drupal.dialog($message.get(0), {
      title: title,
      dialogClass: 'quickedit-network-error',
      buttons: [{
        text: Drupal.t('OK'),
        click: function click() {
          networkErrorModal.close();
        },
        primary: true
      }],
      create: function create() {
        $(this).parent().find('.ui-dialog-titlebar-close').remove();
      },
      close: function close(event) {
        $(event.target).remove();
      }
    });
    networkErrorModal.showModal();
  };
  Drupal.quickedit.util.form = {
    load: function load(options, callback) {
      var fieldID = options.fieldID;
      var formLoaderAjax = Drupal.ajax({
        url: Drupal.quickedit.util.buildUrl(fieldID, Drupal.url('quickedit/form/!entity_type/!id/!field_name/!langcode/!view_mode')),
        submit: {
          nocssjs: options.nocssjs,
          reset: options.reset
        },
        error: function error(xhr, url) {
          var fieldLabel = Drupal.quickedit.metadata.get(fieldID, 'label');
          var message = Drupal.t('Could not load the form for <q>@field-label</q>, either due to a website problem or a network connection problem.<br>Please try again.', {
            '@field-label': fieldLabel
          });
          Drupal.quickedit.util.networkErrorModal(Drupal.t('Network problem!'), message);
          var fieldModel = Drupal.quickedit.app.model.get('activeField');
          fieldModel.set('state', 'candidate');
        }
      });
      formLoaderAjax.commands.quickeditFieldForm = function (ajax, response, status) {
        callback(response.data, ajax);
        Drupal.ajax.instances[this.instanceIndex] = null;
      };
      formLoaderAjax.execute();
    },
    ajaxifySaving: function ajaxifySaving(options, $submit) {
      var settings = {
        url: $submit.closest('form').attr('action'),
        setClick: true,
        event: 'click.quickedit',
        progress: false,
        submit: {
          nocssjs: options.nocssjs,
          other_view_modes: options.other_view_modes
        },
        success: function success(response, status) {
          var _this = this;
          Object.keys(response || {}).forEach(function (i) {
            if (response[i].command && _this.commands[response[i].command]) {
              _this.commands[response[i].command](_this, response[i], status);
            }
          });
        },
        base: $submit.attr('id'),
        element: $submit[0]
      };
      return Drupal.ajax(settings);
    },
    unajaxifySaving: function unajaxifySaving(ajax) {
      $(ajax.element).off('click.quickedit');
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function (Drupal, Backbone) {
  Drupal.quickedit.BaseModel = Backbone.Model.extend({
    initialize: function initialize(options) {
      this.__initialized = true;
      return Backbone.Model.prototype.initialize.call(this, options);
    },
    set: function set(key, val, options) {
      if (this.__initialized) {
        if (_typeof(key) === 'object') {
          key.validate = true;
        } else {
          if (!options) {
            options = {};
          }
          options.validate = true;
        }
      }
      return Backbone.Model.prototype.set.call(this, key, val, options);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Backbone, Drupal) {
  Drupal.quickedit.AppModel = Backbone.Model.extend({
    defaults: {
      highlightedField: null,
      activeField: null,
      activeModal: null
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (_, $, Backbone, Drupal) {
  Drupal.quickedit.EntityModel = Drupal.quickedit.BaseModel.extend({
    defaults: {
      el: null,
      entityID: null,
      entityInstanceID: null,
      id: null,
      label: null,
      fields: null,
      isActive: false,
      inTempStore: false,
      isDirty: false,
      isCommitting: false,
      state: 'closed',
      fieldsInTempStore: [],
      reload: false
    },
    initialize: function initialize() {
      this.set('fields', new Drupal.quickedit.FieldCollection());
      this.listenTo(this, 'change:state', this.stateChange);
      this.listenTo(this.get('fields'), 'change:state', this.fieldStateChange);
      Drupal.quickedit.BaseModel.prototype.initialize.call(this);
    },
    stateChange: function stateChange(entityModel, state, options) {
      var to = state;
      switch (to) {
        case 'closed':
          this.set({
            isActive: false,
            inTempStore: false,
            isDirty: false
          });
          break;
        case 'launching':
          break;
        case 'opening':
          entityModel.get('fields').each(function (fieldModel) {
            fieldModel.set('state', 'candidate', options);
          });
          break;
        case 'opened':
          this.set('isActive', true);
          break;
        case 'committing':
          {
            var fields = this.get('fields');
            fields.chain().filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], ['active']).length;
            }).each(function (fieldModel) {
              fieldModel.set('state', 'candidate');
            });
            fields.chain().filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], Drupal.quickedit.app.changedFieldStates).length;
            }).each(function (fieldModel) {
              fieldModel.set('state', 'saving');
            });
            break;
          }
        case 'deactivating':
          {
            var changedFields = this.get('fields').filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], ['changed', 'invalid']).length;
            });
            if ((changedFields.length || this.get('fieldsInTempStore').length) && !options.saved && !options.confirmed) {
              this.set('state', 'opened', {
                confirming: true
              });
              _.defer(function () {
                Drupal.quickedit.app.confirmEntityDeactivation(entityModel);
              });
            } else {
              var invalidFields = this.get('fields').filter(function (fieldModel) {
                return _.intersection([fieldModel.get('state')], ['invalid']).length;
              });
              entityModel.set('reload', this.get('fieldsInTempStore').length || invalidFields.length);
              entityModel.get('fields').each(function (fieldModel) {
                if (_.intersection([fieldModel.get('state')], ['candidate', 'highlighted']).length) {
                  fieldModel.trigger('change:state', fieldModel, fieldModel.get('state'), options);
                } else {
                  fieldModel.set('state', 'candidate', options);
                }
              });
            }
            break;
          }
        case 'closing':
          options.reason = 'stop';
          this.get('fields').each(function (fieldModel) {
            fieldModel.set({
              inTempStore: false,
              state: 'inactive'
            }, options);
          });
          break;
      }
    },
    _updateInTempStoreAttributes: function _updateInTempStoreAttributes(entityModel, fieldModel) {
      var current = fieldModel.get('state');
      var previous = fieldModel.previous('state');
      var fieldsInTempStore = entityModel.get('fieldsInTempStore');
      if (current === 'saved') {
        entityModel.set('inTempStore', true);
        fieldModel.set('inTempStore', true);
        fieldsInTempStore.push(fieldModel.get('fieldID'));
        fieldsInTempStore = _.uniq(fieldsInTempStore);
        entityModel.set('fieldsInTempStore', fieldsInTempStore);
      } else if (current === 'candidate' && previous === 'inactive') {
        fieldModel.set('inTempStore', _.intersection([fieldModel.get('fieldID')], fieldsInTempStore).length > 0);
      }
    },
    fieldStateChange: function fieldStateChange(fieldModel, state) {
      var entityModel = this;
      var fieldState = state;
      switch (this.get('state')) {
        case 'closed':
        case 'launching':
          break;
        case 'opening':
          _.defer(function () {
            entityModel.set('state', 'opened', {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            });
          });
          break;
        case 'opened':
          if (fieldState === 'changed') {
            entityModel.set('isDirty', true);
          } else {
            this._updateInTempStoreAttributes(entityModel, fieldModel);
          }
          break;
        case 'committing':
          {
            if (fieldState === 'invalid') {
              _.defer(function () {
                entityModel.set('state', 'opened', {
                  reason: 'invalid'
                });
              });
            } else {
              this._updateInTempStoreAttributes(entityModel, fieldModel);
            }
            var options = {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            };
            if (entityModel.set('isCommitting', true, options)) {
              entityModel.save({
                success: function success() {
                  entityModel.set({
                    state: 'deactivating',
                    isCommitting: false
                  }, {
                    saved: true
                  });
                },
                error: function error() {
                  entityModel.set('isCommitting', false);
                  entityModel.set('state', 'opened', {
                    reason: 'networkerror'
                  });
                  var message = Drupal.t('Your changes to <q>@entity-title</q> could not be saved, either due to a website problem or a network connection problem.<br>Please try again.', {
                    '@entity-title': entityModel.get('label')
                  });
                  Drupal.quickedit.util.networkErrorModal(Drupal.t('Network problem!'), message);
                }
              });
            }
            break;
          }
        case 'deactivating':
          _.defer(function () {
            entityModel.set('state', 'closing', {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            });
          });
          break;
        case 'closing':
          _.defer(function () {
            entityModel.set('state', 'closed', {
              'accept-field-states': ['inactive']
            });
          });
          break;
      }
    },
    save: function save(options) {
      var entityModel = this;
      var entitySaverAjax = Drupal.ajax({
        url: Drupal.url("quickedit/entity/".concat(entityModel.get('entityID'))),
        error: function error() {
          options.error.call(entityModel);
        }
      });
      entitySaverAjax.commands.quickeditEntitySaved = function (ajax, response, status) {
        entityModel.get('fields').each(function (fieldModel) {
          fieldModel.set('inTempStore', false);
        });
        entityModel.set('inTempStore', false);
        entityModel.set('fieldsInTempStore', []);
        if (options.success) {
          options.success.call(entityModel);
        }
      };
      entitySaverAjax.options.headers = entitySaverAjax.options.headers || {};
      entitySaverAjax.options.headers['X-Drupal-Quickedit-CSRF-Token'] = drupalSettings.quickedit.csrf_token;
      entitySaverAjax.execute();
    },
    validate: function validate(attrs, options) {
      var acceptedFieldStates = options['accept-field-states'] || [];
      var currentState = this.get('state');
      var nextState = attrs.state;
      if (currentState !== nextState) {
        if (_.indexOf(this.constructor.states, nextState) === -1) {
          return "\"".concat(nextState, "\" is an invalid state");
        }
        if (!this._acceptStateChange(currentState, nextState, options)) {
          return 'state change not accepted';
        }
        if (!this._fieldsHaveAcceptableStates(acceptedFieldStates)) {
          return 'state change not accepted because fields are not in acceptable state';
        }
      }
      var currentIsCommitting = this.get('isCommitting');
      var nextIsCommitting = attrs.isCommitting;
      if (currentIsCommitting === false && nextIsCommitting === true) {
        if (!this._fieldsHaveAcceptableStates(acceptedFieldStates)) {
          return 'isCommitting change not accepted because fields are not in acceptable state';
        }
      } else if (currentIsCommitting === true && nextIsCommitting === true) {
        return 'isCommitting is a mutex, hence only changes are allowed';
      }
    },
    _acceptStateChange: function _acceptStateChange(from, to, context) {
      var accept = true;
      if (!this.constructor.followsStateSequence(from, to)) {
        accept = false;
        if (from === 'closing' && to === 'closed') {
          accept = true;
        } else if (from === 'committing' && to === 'opened' && context.reason && (context.reason === 'invalid' || context.reason === 'networkerror')) {
          accept = true;
        } else if (from === 'deactivating' && to === 'opened' && context.confirming) {
          accept = true;
        } else if (from === 'opened' && to === 'deactivating' && context.confirmed) {
          accept = true;
        }
      }
      return accept;
    },
    _fieldsHaveAcceptableStates: function _fieldsHaveAcceptableStates(acceptedFieldStates) {
      var accept = true;
      if (acceptedFieldStates.length > 0) {
        var fieldStates = this.get('fields').pluck('state') || [];
        if (_.difference(fieldStates, acceptedFieldStates).length) {
          accept = false;
        }
      }
      return accept;
    },
    destroy: function destroy(options) {
      Drupal.quickedit.BaseModel.prototype.destroy.call(this, options);
      this.stopListening();
      this.get('fields').reset();
    },
    sync: function sync() {}
  }, {
    states: ['closed', 'launching', 'opening', 'opened', 'committing', 'deactivating', 'closing'],
    followsStateSequence: function followsStateSequence(from, to) {
      return _.indexOf(this.states, from) < _.indexOf(this.states, to);
    }
  });
  Drupal.quickedit.EntityCollection = Backbone.Collection.extend({
    model: Drupal.quickedit.EntityModel
  });
})(_, jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (_, Backbone, Drupal) {
  Drupal.quickedit.FieldModel = Drupal.quickedit.BaseModel.extend({
    defaults: {
      el: null,
      fieldID: null,
      id: null,
      entity: null,
      metadata: null,
      acceptStateChange: null,
      logicalFieldID: null,
      state: 'inactive',
      isChanged: false,
      inTempStore: false,
      html: null,
      htmlForOtherViewModes: null
    },
    initialize: function initialize(options) {
      this.set('html', options.el.outerHTML);
      this.get('entity').get('fields').add(this);
      this.set('logicalFieldID', this.get('fieldID').split('/').slice(0, 4).join('/'));
      Drupal.quickedit.BaseModel.prototype.initialize.call(this, options);
    },
    destroy: function destroy(options) {
      if (this.get('state') !== 'inactive') {
        throw new Error('FieldModel cannot be destroyed if it is not inactive state.');
      }
      Drupal.quickedit.BaseModel.prototype.destroy.call(this, options);
    },
    sync: function sync() {},
    validate: function validate(attrs, options) {
      var current = this.get('state');
      var next = attrs.state;
      if (current !== next) {
        if (_.indexOf(this.constructor.states, next) === -1) {
          return "\"".concat(next, "\" is an invalid state");
        }
        if (!this.get('acceptStateChange')(current, next, options, this)) {
          return 'state change not accepted';
        }
      }
    },
    getEntityID: function getEntityID() {
      return this.get('fieldID').split('/').slice(0, 2).join('/');
    },
    getViewMode: function getViewMode() {
      return this.get('fieldID').split('/').pop();
    },
    findOtherViewModes: function findOtherViewModes() {
      var currentField = this;
      var otherViewModes = [];
      Drupal.quickedit.collections.fields.where({
        logicalFieldID: currentField.get('logicalFieldID')
      }).forEach(function (field) {
        if (field !== currentField && field.get('fieldID') !== currentField.get('fieldID')) {
          otherViewModes.push(field.getViewMode());
        }
      });
      return otherViewModes;
    }
  }, {
    states: ['inactive', 'candidate', 'highlighted', 'activating', 'active', 'changed', 'saving', 'saved', 'invalid'],
    followsStateSequence: function followsStateSequence(from, to) {
      return _.indexOf(this.states, from) < _.indexOf(this.states, to);
    }
  });
  Drupal.quickedit.FieldCollection = Backbone.Collection.extend({
    model: Drupal.quickedit.FieldModel
  });
})(_, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Backbone, Drupal) {
  Drupal.quickedit.EditorModel = Backbone.Model.extend({
    defaults: {
      originalValue: null,
      currentValue: null,
      validationErrors: null
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, _, Backbone, Drupal) {
  var reload = false;
  Drupal.quickedit.AppView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.activeFieldStates = ['activating', 'active'];
      this.singleFieldStates = ['highlighted', 'activating', 'active'];
      this.changedFieldStates = ['changed', 'saving', 'saved', 'invalid'];
      this.readyFieldStates = ['candidate', 'highlighted'];
      this.listenTo(options.entitiesCollection, 'change:state', this.appStateChange);
      this.listenTo(options.entitiesCollection, 'change:isActive', this.enforceSingleActiveEntity);
      this.listenTo(options.fieldsCollection, 'change:state', this.editorStateChange);
      this.listenTo(options.fieldsCollection, 'change:html', this.renderUpdatedField);
      this.listenTo(options.fieldsCollection, 'change:html', this.propagateUpdatedField);
      this.listenTo(options.fieldsCollection, 'add', this.rerenderedFieldToCandidate);
      this.listenTo(options.fieldsCollection, 'destroy', this.teardownEditor);
    },
    appStateChange: function appStateChange(entityModel, state) {
      var app = this;
      var entityToolbarView;
      switch (state) {
        case 'launching':
          reload = false;
          entityToolbarView = new Drupal.quickedit.EntityToolbarView({
            model: entityModel,
            appModel: this.model
          });
          entityModel.toolbarView = entityToolbarView;
          entityModel.get('fields').each(function (fieldModel) {
            app.setupEditor(fieldModel);
          });
          _.defer(function () {
            entityModel.set('state', 'opening');
          });
          break;
        case 'closed':
          entityToolbarView = entityModel.toolbarView;
          entityModel.get('fields').each(function (fieldModel) {
            app.teardownEditor(fieldModel);
          });
          if (entityToolbarView) {
            entityToolbarView.remove();
            delete entityModel.toolbarView;
          }
          if (reload) {
            reload = false;
            window.location.reload();
          }
          break;
      }
    },
    acceptEditorStateChange: function acceptEditorStateChange(from, to, context, fieldModel) {
      var accept = true;
      if (context && (context.reason === 'stop' || context.reason === 'rerender')) {
        if (from === 'candidate' && to === 'inactive') {
          accept = true;
        }
      } else {
        if (!Drupal.quickedit.FieldModel.followsStateSequence(from, to)) {
          accept = false;
          if (_.indexOf(this.activeFieldStates, from) !== -1 && to === 'candidate') {
            accept = true;
          } else if ((from === 'changed' || from === 'invalid') && to === 'candidate') {
            accept = true;
          } else if (from === 'highlighted' && to === 'candidate') {
            accept = true;
          } else if (from === 'saved' && to === 'candidate') {
            accept = true;
          } else if (from === 'invalid' && to === 'saving') {
            accept = true;
          } else if (from === 'invalid' && to === 'activating') {
            accept = true;
          }
        }
        if (accept) {
          var activeField;
          var activeFieldState;
          if ((this.readyFieldStates.indexOf(from) !== -1 || from === 'invalid') && this.activeFieldStates.indexOf(to) !== -1) {
            activeField = this.model.get('activeField');
            if (activeField && activeField !== fieldModel) {
              activeFieldState = activeField.get('state');
              if (this.activeFieldStates.indexOf(activeFieldState) !== -1) {
                activeField.set('state', 'candidate');
              } else if (activeFieldState === 'changed' || activeFieldState === 'invalid') {
                activeField.set('state', 'saving');
              }
              if (from === 'invalid') {
                this.model.set('activeField', fieldModel);
                accept = false;
              }
            }
          } else if (_.indexOf(this.activeFieldStates, from) !== -1 && to === 'candidate') {
            if (context && context.reason === 'mouseleave') {
              accept = false;
            }
          } else if ((from === 'changed' || from === 'invalid') && to === 'candidate') {
            if (context && context.reason === 'mouseleave') {
              accept = false;
            } else if (context && context.confirmed) {
              accept = true;
            }
          }
        }
      }
      return accept;
    },
    setupEditor: function setupEditor(fieldModel) {
      var entityModel = fieldModel.get('entity');
      var entityToolbarView = entityModel.toolbarView;
      var fieldToolbarRoot = entityToolbarView.getToolbarRoot();
      var editorName = fieldModel.get('metadata').editor;
      var editorModel = new Drupal.quickedit.EditorModel();
      var editorView = new Drupal.quickedit.editors[editorName]({
        el: $(fieldModel.get('el')),
        model: editorModel,
        fieldModel: fieldModel
      });
      var toolbarView = new Drupal.quickedit.FieldToolbarView({
        el: fieldToolbarRoot,
        model: fieldModel,
        $editedElement: $(editorView.getEditedElement()),
        editorView: editorView,
        entityModel: entityModel
      });
      var decorationView = new Drupal.quickedit.FieldDecorationView({
        el: $(editorView.getEditedElement()),
        model: fieldModel,
        editorView: editorView
      });
      fieldModel.editorView = editorView;
      fieldModel.toolbarView = toolbarView;
      fieldModel.decorationView = decorationView;
    },
    teardownEditor: function teardownEditor(fieldModel) {
      if (typeof fieldModel.editorView === 'undefined') {
        return;
      }
      fieldModel.toolbarView.remove();
      delete fieldModel.toolbarView;
      fieldModel.decorationView.remove();
      delete fieldModel.decorationView;
      fieldModel.editorView.remove();
      delete fieldModel.editorView;
    },
    confirmEntityDeactivation: function confirmEntityDeactivation(entityModel) {
      var that = this;
      var discardDialog;
      function closeDiscardDialog(action) {
        discardDialog.close(action);
        that.model.set('activeModal', null);
        if (action === 'save') {
          entityModel.set('state', 'committing', {
            confirmed: true
          });
        } else {
          entityModel.set('state', 'deactivating', {
            confirmed: true
          });
          if (entityModel.get('reload')) {
            reload = true;
            entityModel.set('reload', false);
          }
        }
      }
      if (!this.model.get('activeModal')) {
        var $unsavedChanges = $("<div>".concat(Drupal.t('You have unsaved changes'), "</div>"));
        discardDialog = Drupal.dialog($unsavedChanges.get(0), {
          title: Drupal.t('Discard changes?'),
          dialogClass: 'quickedit-discard-modal',
          resizable: false,
          buttons: [{
            text: Drupal.t('Save'),
            click: function click() {
              closeDiscardDialog('save');
            },
            primary: true
          }, {
            text: Drupal.t('Discard changes'),
            click: function click() {
              closeDiscardDialog('discard');
            }
          }],
          closeOnEscape: false,
          create: function create() {
            $(this).parent().find('.ui-dialog-titlebar-close').remove();
          },
          beforeClose: false,
          close: function close(event) {
            $(event.target).remove();
          }
        });
        this.model.set('activeModal', discardDialog);
        discardDialog.showModal();
      }
    },
    editorStateChange: function editorStateChange(fieldModel, state) {
      var from = fieldModel.previous('state');
      var to = state;
      if (_.indexOf(this.singleFieldStates, to) !== -1 && this.model.get('highlightedField') !== fieldModel) {
        this.model.set('highlightedField', fieldModel);
      } else if (this.model.get('highlightedField') === fieldModel && to === 'candidate') {
        this.model.set('highlightedField', null);
      }
      if (_.indexOf(this.activeFieldStates, to) !== -1 && this.model.get('activeField') !== fieldModel) {
        this.model.set('activeField', fieldModel);
      } else if (this.model.get('activeField') === fieldModel && to === 'candidate') {
        if (from === 'changed' || from === 'invalid') {
          fieldModel.editorView.revert();
        }
        this.model.set('activeField', null);
      }
    },
    renderUpdatedField: function renderUpdatedField(fieldModel, html, options) {
      var $fieldWrapper = $(fieldModel.get('el'));
      var $context = $fieldWrapper.parent();
      var renderField = function renderField() {
        fieldModel.destroy();
        $fieldWrapper.replaceWith(html);
        Drupal.attachBehaviors($context.get(0));
      };
      if (!options.propagation) {
        _.defer(function () {
          fieldModel.set('state', 'candidate');
          _.defer(function () {
            fieldModel.set('state', 'inactive', {
              reason: 'rerender'
            });
            renderField();
          });
        });
      } else {
        renderField();
      }
    },
    propagateUpdatedField: function propagateUpdatedField(updatedField, html, options) {
      if (options.propagation) {
        return;
      }
      var htmlForOtherViewModes = updatedField.get('htmlForOtherViewModes');
      Drupal.quickedit.collections.fields.where({
        logicalFieldID: updatedField.get('logicalFieldID')
      }).forEach(function (field) {
        if (field === updatedField) {} else if (field.getViewMode() === updatedField.getViewMode()) {
          field.set('html', updatedField.get('html'));
        } else if (field.getViewMode() in htmlForOtherViewModes) {
          field.set('html', htmlForOtherViewModes[field.getViewMode()], {
            propagation: true
          });
        }
      });
    },
    rerenderedFieldToCandidate: function rerenderedFieldToCandidate(fieldModel) {
      var activeEntity = Drupal.quickedit.collections.entities.findWhere({
        isActive: true
      });
      if (!activeEntity) {
        return;
      }
      if (fieldModel.get('entity') === activeEntity) {
        this.setupEditor(fieldModel);
        fieldModel.set('state', 'candidate');
      }
    },
    enforceSingleActiveEntity: function enforceSingleActiveEntity(changedEntityModel) {
      if (changedEntityModel.get('isActive') === false) {
        return;
      }
      changedEntityModel.collection.chain().filter(function (entityModel) {
        return entityModel.get('isActive') === true && entityModel !== changedEntityModel;
      }).each(function (entityModel) {
        entityModel.set('state', 'deactivating');
      });
    }
  });
})(jQuery, _, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Backbone, Drupal) {
  Drupal.quickedit.FieldDecorationView = Backbone.View.extend({
    _widthAttributeIsEmpty: null,
    events: {
      'mouseenter.quickedit': 'onMouseEnter',
      'mouseleave.quickedit': 'onMouseLeave',
      click: 'onClick',
      'tabIn.quickedit': 'onMouseEnter',
      'tabOut.quickedit': 'onMouseLeave'
    },
    initialize: function initialize(options) {
      this.editorView = options.editorView;
      this.listenTo(this.model, 'change:state', this.stateChange);
      this.listenTo(this.model, 'change:isChanged change:inTempStore', this.renderChanged);
    },
    remove: function remove() {
      this.setElement();
      Backbone.View.prototype.remove.call(this);
    },
    stateChange: function stateChange(model, state) {
      var from = model.previous('state');
      var to = state;
      switch (to) {
        case 'inactive':
          this.undecorate();
          break;
        case 'candidate':
          this.decorate();
          if (from !== 'inactive') {
            this.stopHighlight();
            if (from !== 'highlighted') {
              this.model.set('isChanged', false);
              this.stopEdit();
            }
          }
          this._unpad();
          break;
        case 'highlighted':
          this.startHighlight();
          break;
        case 'activating':
          this.prepareEdit();
          break;
        case 'active':
          if (from !== 'activating') {
            this.prepareEdit();
          }
          if (this.editorView.getQuickEditUISettings().padding) {
            this._pad();
          }
          break;
        case 'changed':
          this.model.set('isChanged', true);
          break;
        case 'saving':
          break;
        case 'saved':
          break;
        case 'invalid':
          break;
      }
    },
    renderChanged: function renderChanged() {
      this.$el.toggleClass('quickedit-changed', this.model.get('isChanged') || this.model.get('inTempStore'));
    },
    onMouseEnter: function onMouseEnter(event) {
      var that = this;
      that.model.set('state', 'highlighted');
      event.stopPropagation();
    },
    onMouseLeave: function onMouseLeave(event) {
      var that = this;
      that.model.set('state', 'candidate', {
        reason: 'mouseleave'
      });
      event.stopPropagation();
    },
    onClick: function onClick(event) {
      this.model.set('state', 'activating');
      event.preventDefault();
      event.stopPropagation();
    },
    decorate: function decorate() {
      this.$el.addClass('quickedit-candidate quickedit-editable');
    },
    undecorate: function undecorate() {
      this.$el.removeClass('quickedit-candidate quickedit-editable quickedit-highlighted quickedit-editing');
    },
    startHighlight: function startHighlight() {
      var that = this;
      that.$el.addClass('quickedit-highlighted');
    },
    stopHighlight: function stopHighlight() {
      this.$el.removeClass('quickedit-highlighted');
    },
    prepareEdit: function prepareEdit() {
      this.$el.addClass('quickedit-editing');
      if (this.editorView.getQuickEditUISettings().popup) {
        this.$el.addClass('quickedit-editor-is-popup');
      }
    },
    stopEdit: function stopEdit() {
      this.$el.removeClass('quickedit-highlighted quickedit-editing');
      if (this.editorView.getQuickEditUISettings().popup) {
        this.$el.removeClass('quickedit-editor-is-popup');
      }
      $('.quickedit-candidate').addClass('quickedit-editable');
    },
    _pad: function _pad() {
      if (this.$el.data('quickedit-padded')) {
        return;
      }
      var self = this;
      if (this.$el[0].style.width === '') {
        this._widthAttributeIsEmpty = true;
        this.$el.addClass('quickedit-animate-disable-width').css('width', this.$el.width());
      }
      var posProp = this._getPositionProperties(this.$el);
      setTimeout(function () {
        self.$el.removeClass('quickedit-animate-disable-width');
        self.$el.css({
          position: 'relative',
          top: "".concat(posProp.top - 5, "px"),
          left: "".concat(posProp.left - 5, "px"),
          'padding-top': "".concat(posProp['padding-top'] + 5, "px"),
          'padding-left': "".concat(posProp['padding-left'] + 5, "px"),
          'padding-right': "".concat(posProp['padding-right'] + 5, "px"),
          'padding-bottom': "".concat(posProp['padding-bottom'] + 5, "px"),
          'margin-bottom': "".concat(posProp['margin-bottom'] - 10, "px")
        }).data('quickedit-padded', true);
      }, 0);
    },
    _unpad: function _unpad() {
      if (!this.$el.data('quickedit-padded')) {
        return;
      }
      var self = this;
      if (this._widthAttributeIsEmpty) {
        this.$el.addClass('quickedit-animate-disable-width').css('width', '');
      }
      var posProp = this._getPositionProperties(this.$el);
      setTimeout(function () {
        self.$el.removeClass('quickedit-animate-disable-width');
        self.$el.css({
          position: 'relative',
          top: "".concat(posProp.top + 5, "px"),
          left: "".concat(posProp.left + 5, "px"),
          'padding-top': "".concat(posProp['padding-top'] - 5, "px"),
          'padding-left': "".concat(posProp['padding-left'] - 5, "px"),
          'padding-right': "".concat(posProp['padding-right'] - 5, "px"),
          'padding-bottom': "".concat(posProp['padding-bottom'] - 5, "px"),
          'margin-bottom': "".concat(posProp['margin-bottom'] + 10, "px")
        });
      }, 0);
      this.$el.removeData('quickedit-padded');
    },
    _getPositionProperties: function _getPositionProperties($e) {
      var p;
      var r = {};
      var props = ['top', 'left', 'bottom', 'right', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom', 'margin-bottom'];
      var propCount = props.length;
      for (var i = 0; i < propCount; i++) {
        p = props[i];
        r[p] = parseInt(this._replaceBlankPosition($e.css(p)), 10);
      }
      return r;
    },
    _replaceBlankPosition: function _replaceBlankPosition(pos) {
      if (pos === 'auto' || !pos) {
        pos = '0px';
      }
      return pos;
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, $, Backbone) {
  Drupal.quickedit.EntityDecorationView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      this.$el.toggleClass('quickedit-entity-active', this.model.get('isActive'));
    },
    remove: function remove() {
      this.setElement(null);
      Backbone.View.prototype.remove.call(this);
    }
  });
})(Drupal, jQuery, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, _, Backbone, Drupal, debounce, Popper) {
  Drupal.quickedit.EntityToolbarView = Backbone.View.extend({
    _fieldToolbarRoot: null,
    events: function events() {
      var map = {
        'click button.action-save': 'onClickSave',
        'click button.action-cancel': 'onClickCancel',
        mouseenter: 'onMouseenter'
      };
      return map;
    },
    initialize: function initialize(options) {
      var that = this;
      this.appModel = options.appModel;
      this.$entity = $(this.model.get('el'));
      this.listenTo(this.model, 'change:isActive change:isDirty change:state', this.render);
      this.listenTo(this.appModel, 'change:highlightedField change:activeField', this.render);
      this.listenTo(this.model.get('fields'), 'change:state', this.fieldStateChange);
      $(window).on('resize.quickedit scroll.quickedit drupalViewportOffsetChange.quickedit', debounce($.proxy(this.windowChangeHandler, this), 150));
      $(document).on('drupalViewportOffsetChange.quickedit', function (event, offsets) {
        if (that.$fence) {
          that.$fence.css(offsets);
        }
      });
      var $toolbar = this.buildToolbarEl();
      this.setElement($toolbar);
      this._fieldToolbarRoot = $toolbar.find('.quickedit-toolbar-field').get(0);
      this.render();
    },
    render: function render() {
      if (this.model.get('isActive')) {
        var $body = $('body');
        if ($body.children('#quickedit-entity-toolbar').length === 0) {
          $body.append(this.$el);
        }
        if ($body.children('#quickedit-toolbar-fence').length === 0) {
          this.$fence = $(Drupal.theme('quickeditEntityToolbarFence')).css(Drupal.displace()).appendTo($body);
        }
        this.label();
        this.show('ops');
        this.position();
      }
      var $button = this.$el.find('.quickedit-button.action-save');
      var isDirty = this.model.get('isDirty');
      switch (this.model.get('state')) {
        case 'opened':
          $button[0].textContent = Drupal.t('Save');
          $button.removeClass('action-saving icon-throbber icon-end').removeAttr('disabled').attr('aria-hidden', !isDirty);
          break;
        case 'committing':
          $button[0].textContent = Drupal.t('Saving');
          $button.addClass('action-saving icon-throbber icon-end').attr('disabled', 'disabled');
          break;
        default:
          $button.attr('aria-hidden', true);
          break;
      }
      return this;
    },
    remove: function remove() {
      this.$fence.remove();
      $(window).off('resize.quickedit scroll.quickedit drupalViewportOffsetChange.quickedit');
      $(document).off('drupalViewportOffsetChange.quickedit');
      Backbone.View.prototype.remove.call(this);
    },
    windowChangeHandler: function windowChangeHandler(event) {
      this.position();
    },
    fieldStateChange: function fieldStateChange(model, state) {
      switch (state) {
        case 'active':
          this.render();
          break;
        case 'invalid':
          this.render();
          break;
      }
    },
    position: function position(element) {
      clearTimeout(this.timer);
      var that = this;
      var edge = document.documentElement.dir === 'rtl' ? 'right' : 'left';
      var delay = 0;
      var check = 0;
      var horizontalPadding = 0;
      var of;
      var activeField;
      var highlightedField;
      do {
        switch (check) {
          case 0:
            of = element;
            break;
          case 1:
            activeField = Drupal.quickedit.app.model.get('activeField');
            of = activeField && activeField.editorView && activeField.editorView.$formContainer && activeField.editorView.$formContainer.find('.quickedit-form');
            break;
          case 2:
            of = activeField && activeField.editorView && activeField.editorView.getEditedElement();
            if (activeField && activeField.editorView && activeField.editorView.getQuickEditUISettings().padding) {
              horizontalPadding = 5;
            }
            break;
          case 3:
            highlightedField = Drupal.quickedit.app.model.get('highlightedField');
            of = highlightedField && highlightedField.editorView && highlightedField.editorView.getEditedElement();
            delay = 250;
            break;
          default:
            {
              var fieldModels = this.model.get('fields').models;
              var topMostPosition = 1000000;
              var topMostField = null;
              for (var i = 0; i < fieldModels.length; i++) {
                var pos = fieldModels[i].get('el').getBoundingClientRect().top;
                if (pos < topMostPosition) {
                  topMostPosition = pos;
                  topMostField = fieldModels[i];
                }
              }
              of = topMostField.get('el');
              delay = 50;
              break;
            }
        }
        check++;
      } while (!of);
      function refinePopper(_ref) {
        var state = _ref.state;
        var isBelow = state.placement.split('-')[0] === 'bottom';
        var classListMethod = isBelow ? 'add' : 'remove';
        state.elements.popper.classList[classListMethod]('quickedit-toolbar-pointer-top');
      }
      function positionToolbar() {
        var popperElement = that.el;
        var referenceElement = of;
        var boundariesElement = that.$fence[0];
        var popperedge = edge === 'left' ? 'start' : 'end';
        if (referenceElement !== undefined) {
          if (!popperElement.classList.contains('js-popper-processed')) {
            that.popper = Popper.createPopper(referenceElement, popperElement, {
              placement: "top-".concat(popperedge),
              modifiers: [{
                name: 'flip',
                options: {
                  boundary: boundariesElement
                }
              }, {
                name: 'preventOverflow',
                options: {
                  boundary: boundariesElement,
                  tether: false,
                  altAxis: true,
                  padding: {
                    top: 5,
                    bottom: 5
                  }
                }
              }, {
                name: 'computeStyles',
                options: {
                  adaptive: false
                }
              }, {
                name: 'refinePopper',
                phase: 'write',
                enabled: true,
                fn: refinePopper
              }]
            });
            popperElement.classList.add('js-popper-processed');
          } else {
            that.popper.state.elements.reference = referenceElement[0] ? referenceElement[0] : referenceElement;
            that.popper.forceUpdate();
          }
        }
        that.$el.css({
          'max-width': document.documentElement.clientWidth < 450 ? document.documentElement.clientWidth : 450,
          'min-width': document.documentElement.clientWidth < 240 ? document.documentElement.clientWidth : 240,
          width: '100%'
        });
      }
      this.timer = setTimeout(function () {
        _.defer(positionToolbar);
      }, delay);
    },
    onClickSave: function onClickSave(event) {
      event.stopPropagation();
      event.preventDefault();
      this.model.set('state', 'committing');
    },
    onClickCancel: function onClickCancel(event) {
      event.preventDefault();
      this.model.set('state', 'deactivating');
    },
    onMouseenter: function onMouseenter(event) {
      clearTimeout(this.timer);
    },
    buildToolbarEl: function buildToolbarEl() {
      var $toolbar = $(Drupal.theme('quickeditEntityToolbar', {
        id: 'quickedit-entity-toolbar'
      }));
      $toolbar.find('.quickedit-toolbar-entity').prepend(Drupal.theme('quickeditToolgroup', {
        classes: ['ops'],
        buttons: [{
          label: Drupal.t('Save'),
          type: 'submit',
          classes: 'action-save quickedit-button icon',
          attributes: {
            'aria-hidden': true
          }
        }, {
          label: Drupal.t('Close'),
          classes: 'action-cancel quickedit-button icon icon-close icon-only'
        }]
      }));
      $toolbar.css({
        left: this.$entity.offset().left,
        top: this.$entity.offset().top
      });
      return $toolbar;
    },
    getToolbarRoot: function getToolbarRoot() {
      return this._fieldToolbarRoot;
    },
    label: function label() {
      var label = '';
      var entityLabel = this.model.get('label');
      var activeField = Drupal.quickedit.app.model.get('activeField');
      var activeFieldLabel = activeField && activeField.get('metadata').label;
      var highlightedField = Drupal.quickedit.app.model.get('highlightedField');
      var highlightedFieldLabel = highlightedField && highlightedField.get('metadata').label;
      if (activeFieldLabel) {
        label = Drupal.theme('quickeditEntityToolbarLabel', {
          entityLabel: entityLabel,
          fieldLabel: activeFieldLabel
        });
      } else if (highlightedFieldLabel) {
        label = Drupal.theme('quickeditEntityToolbarLabel', {
          entityLabel: entityLabel,
          fieldLabel: highlightedFieldLabel
        });
      } else {
        label = Drupal.checkPlain(entityLabel);
      }
      this.$el.find('.quickedit-toolbar-label').html(label);
    },
    addClass: function addClass(toolgroup, classes) {
      this._find(toolgroup).addClass(classes);
    },
    removeClass: function removeClass(toolgroup, classes) {
      this._find(toolgroup).removeClass(classes);
    },
    _find: function _find(toolgroup) {
      return this.$el.find(".quickedit-toolbar .quickedit-toolgroup.".concat(toolgroup));
    },
    show: function show(toolgroup) {
      this.$el.removeClass('quickedit-animate-invisible');
    }
  });
})(jQuery, _, Backbone, Drupal, Drupal.debounce, Popper);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Backbone, Drupal) {
  Drupal.quickedit.ContextualLinkView = Backbone.View.extend({
    events: function events() {
      function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      }
      return {
        'click a': function clickA(event) {
          event.preventDefault();
          this.model.set('state', 'launching');
        },
        'touchEnd a': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.$el.find('a').each(function (index, element) {
        element.textContent = options.strings.quickEdit;
      });
      this.render();
      this.listenTo(this.model, 'change:isActive', this.render);
    },
    render: function render(entityModel, isActive) {
      this.$el.find('a').attr('aria-pressed', isActive);
      this.$el.closest('.contextual').toggle(!isActive);
      return this;
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, _, Backbone, Drupal) {
  Drupal.quickedit.FieldToolbarView = Backbone.View.extend({
    $editedElement: null,
    editorView: null,
    _id: null,
    initialize: function initialize(options) {
      this.$editedElement = options.$editedElement;
      this.editorView = options.editorView;
      this.$root = this.$el;
      this._id = "quickedit-toolbar-for-".concat(this.model.id.replace(/[/[\]]/g, '_'));
      this.listenTo(this.model, 'change:state', this.stateChange);
    },
    render: function render() {
      this.setElement($(Drupal.theme('quickeditFieldToolbar', {
        id: this._id
      })));
      this.$el.prependTo(this.$root);
      return this;
    },
    stateChange: function stateChange(model, state) {
      var from = model.previous('state');
      var to = state;
      switch (to) {
        case 'inactive':
          break;
        case 'candidate':
          if (from !== 'inactive' && from !== 'highlighted') {
            this.$el.remove();
            this.setElement();
          }
          break;
        case 'highlighted':
          break;
        case 'activating':
          this.render();
          if (this.editorView.getQuickEditUISettings().fullWidthToolbar) {
            this.$el.addClass('quickedit-toolbar-fullwidth');
          }
          if (this.editorView.getQuickEditUISettings().unifiedToolbar) {
            this.insertWYSIWYGToolGroups();
          }
          break;
        case 'active':
          break;
        case 'changed':
          break;
        case 'saving':
          break;
        case 'saved':
          break;
        case 'invalid':
          break;
      }
    },
    insertWYSIWYGToolGroups: function insertWYSIWYGToolGroups() {
      this.$el.append(Drupal.theme('quickeditToolgroup', {
        id: this.getFloatedWysiwygToolgroupId(),
        classes: ['wysiwyg-floated', 'quickedit-animate-slow', 'quickedit-animate-invisible', 'quickedit-animate-delay-veryfast'],
        buttons: []
      })).append(Drupal.theme('quickeditToolgroup', {
        id: this.getMainWysiwygToolgroupId(),
        classes: ['wysiwyg-main', 'quickedit-animate-slow', 'quickedit-animate-invisible', 'quickedit-animate-delay-veryfast'],
        buttons: []
      }));
      this.show('wysiwyg-floated');
      this.show('wysiwyg-main');
    },
    getId: function getId() {
      return "quickedit-toolbar-for-".concat(this._id);
    },
    getFloatedWysiwygToolgroupId: function getFloatedWysiwygToolgroupId() {
      return "quickedit-wysiwyg-floated-toolgroup-for-".concat(this._id);
    },
    getMainWysiwygToolgroupId: function getMainWysiwygToolgroupId() {
      return "quickedit-wysiwyg-main-toolgroup-for-".concat(this._id);
    },
    _find: function _find(toolgroup) {
      return this.$el.find(".quickedit-toolgroup.".concat(toolgroup));
    },
    show: function show(toolgroup) {
      var $group = this._find(toolgroup);
      $group.on(Drupal.quickedit.util.constants.transitionEnd, function (event) {
        $group.off(Drupal.quickedit.util.constants.transitionEnd);
      });
      window.setTimeout(function () {
        $group.removeClass('quickedit-animate-invisible');
      }, 0);
    }
  });
})(jQuery, _, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Backbone, Drupal) {
  Drupal.quickedit.EditorView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.fieldModel = options.fieldModel;
      this.listenTo(this.fieldModel, 'change:state', this.stateChange);
    },
    remove: function remove() {
      this.setElement();
      Backbone.View.prototype.remove.call(this);
    },
    getEditedElement: function getEditedElement() {
      return this.$el;
    },
    getQuickEditUISettings: function getQuickEditUISettings() {
      return {
        padding: false,
        unifiedToolbar: false,
        fullWidthToolbar: false,
        popup: false
      };
    },
    stateChange: function stateChange(fieldModel, state) {
      var from = fieldModel.previous('state');
      var to = state;
      switch (to) {
        case 'inactive':
          break;
        case 'candidate':
          if (from === 'invalid') {
            this.removeValidationErrors();
          }
          break;
        case 'highlighted':
          break;
        case 'activating':
          {
            var loadDependencies = function loadDependencies(callback) {
              callback();
            };
            loadDependencies(function () {
              fieldModel.set('state', 'active');
            });
            break;
          }
        case 'active':
          break;
        case 'changed':
          break;
        case 'saving':
          if (from === 'invalid') {
            this.removeValidationErrors();
          }
          this.save();
          break;
        case 'saved':
          break;
        case 'invalid':
          this.showValidationErrors();
          break;
      }
    },
    revert: function revert() {},
    save: function save() {
      var fieldModel = this.fieldModel;
      var editorModel = this.model;
      var backstageId = "quickedit_backstage-".concat(this.fieldModel.id.replace(/[/[\]_\s]/g, '-'));
      function fillAndSubmitForm(value) {
        var $form = $("#".concat(backstageId)).find('form');
        $form.find(':input[type!="hidden"][type!="submit"]:not(select)').not('[name$="\\[summary\\]"]').val(value);
        $form.find('.quickedit-form-submit').trigger('click.quickedit');
      }
      var formOptions = {
        fieldID: this.fieldModel.get('fieldID'),
        $el: this.$el,
        nocssjs: true,
        other_view_modes: fieldModel.findOtherViewModes(),
        reset: !this.fieldModel.get('entity').get('inTempStore')
      };
      var self = this;
      Drupal.quickedit.util.form.load(formOptions, function (form, ajax) {
        var $backstage = $(Drupal.theme('quickeditBackstage', {
          id: backstageId
        })).appendTo('body');
        var $form = $(form).appendTo($backstage);
        $form.prop('novalidate', true);
        var $submit = $form.find('.quickedit-form-submit');
        self.formSaveAjax = Drupal.quickedit.util.form.ajaxifySaving(formOptions, $submit);
        function removeHiddenForm() {
          Drupal.quickedit.util.form.unajaxifySaving(self.formSaveAjax);
          delete self.formSaveAjax;
          $backstage.remove();
        }
        self.formSaveAjax.commands.quickeditFieldFormSaved = function (ajax, response, status) {
          removeHiddenForm();
          fieldModel.set('state', 'saved');
          fieldModel.set('htmlForOtherViewModes', response.other_view_modes);
          fieldModel.set('html', response.data);
        };
        self.formSaveAjax.commands.quickeditFieldFormValidationErrors = function (ajax, response, status) {
          removeHiddenForm();
          editorModel.set('validationErrors', response.data);
          fieldModel.set('state', 'invalid');
        };
        self.formSaveAjax.commands.quickeditFieldForm = function () {};
        fillAndSubmitForm(editorModel.get('currentValue'));
      });
    },
    showValidationErrors: function showValidationErrors() {
      var $errors = $('<div class="quickedit-validation-errors"></div>').append(this.model.get('validationErrors'));
      this.getEditedElement().addClass('quickedit-validation-error').after($errors);
    },
    removeValidationErrors: function removeValidationErrors() {
      this.getEditedElement().removeClass('quickedit-validation-error').next('.quickedit-validation-errors').remove();
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  Drupal.theme.quickeditBackstage = function (settings) {
    var html = '';
    html += "<div id=\"".concat(settings.id, "\"></div>");
    return html;
  };
  Drupal.theme.quickeditEntityToolbar = function (settings) {
    var html = '';
    html += "<div id=\"".concat(settings.id, "\" class=\"quickedit quickedit-toolbar-container clearfix\">");
    html += '<i class="quickedit-toolbar-pointer"></i>';
    html += '<div class="quickedit-toolbar-content">';
    html += '<div class="quickedit-toolbar quickedit-toolbar-entity clearfix icon icon-pencil">';
    html += '<div class="quickedit-toolbar-label"></div>';
    html += '</div>';
    html += '<div class="quickedit-toolbar quickedit-toolbar-field clearfix"></div>';
    html += '</div><div class="quickedit-toolbar-lining"></div></div>';
    return html;
  };
  Drupal.theme.quickeditEntityToolbarLabel = function (settings) {
    return "<span class=\"field\">".concat(Drupal.checkPlain(settings.fieldLabel), "</span>").concat(Drupal.checkPlain(settings.entityLabel));
  };
  Drupal.theme.quickeditEntityToolbarFence = function () {
    return '<div id="quickedit-toolbar-fence"></div>';
  };
  Drupal.theme.quickeditFieldToolbar = function (settings) {
    return "<div id=\"".concat(settings.id, "\"></div>");
  };
  Drupal.theme.quickeditToolgroup = function (settings) {
    var classes = settings.classes || [];
    classes.unshift('quickedit-toolgroup');
    var html = '';
    html += "<div class=\"".concat(classes.join(' '), "\"");
    if (settings.id) {
      html += " id=\"".concat(settings.id, "\"");
    }
    html += '>';
    html += Drupal.theme('quickeditButtons', {
      buttons: settings.buttons
    });
    html += '</div>';
    return html;
  };
  Drupal.theme.quickeditButtons = function (settings) {
    var html = '';
    var _loop = function _loop(i) {
      var button = settings.buttons[i];
      if (!button.hasOwnProperty('type')) {
        button.type = 'button';
      }
      var attributes = [];
      var attrMap = settings.buttons[i].attributes || {};
      Object.keys(attrMap).forEach(function (attr) {
        attributes.push(attr + (attrMap[attr] ? "=\"".concat(attrMap[attr], "\"") : ''));
      });
      html += "<button type=\"".concat(button.type, "\" class=\"").concat(button.classes, "\" ").concat(attributes.join(' '), ">").concat(button.label, "</button>");
    };
    for (var i = 0; i < settings.buttons.length; i++) {
      _loop(i);
    }
    return html;
  };
  Drupal.theme.quickeditFormContainer = function (settings) {
    var html = '';
    html += "<div id=\"".concat(settings.id, "\" class=\"quickedit-form-container\">");
    html += '  <div class="quickedit-form">';
    html += '    <div class="placeholder">';
    html += settings.loadingMsg;
    html += '    </div>';
    html += '  </div>';
    html += '</div>';
    return html;
  };
  Drupal.theme.quickeditImageErrors = function (settings) {
    return "<div class=\"quickedit-image-errors\">".concat(settings.errors, "</div>");
  };
  Drupal.theme.quickeditImageDropzone = function (settings) {
    return "<div class=\"quickedit-image-dropzone ".concat(settings.state, "\">") + '  <i class="quickedit-image-icon"></i>' + "  <span class=\"quickedit-image-text\">".concat(settings.text, "</span>") + '</div>';
  };
  Drupal.theme.quickeditImageToolbar = function (settings) {
    var html = '<form class="quickedit-image-field-info">';
    if (settings.alt_field) {
      html += "<div><label for=\"alt\" class=\"".concat(settings.alt_field_required ? 'required' : '', "\">").concat(Drupal.t('Alternative text'), "</label>") + "<input type=\"text\" placeholder=\"".concat(settings.alt, "\" value=\"").concat(settings.alt, "\" name=\"alt\" ").concat(settings.alt_field_required ? 'required' : '', "/>") + '  </div>';
    }
    if (settings.title_field) {
      html += "<div><label for=\"title\" class=\"".concat(settings.title_field_required ? 'form-required' : '', "\">").concat(Drupal.t('Title'), "</label>") + "<input type=\"text\" placeholder=\"".concat(settings.title, "\" value=\"").concat(settings.title, "\" name=\"title\" ").concat(settings.title_field_required ? 'required' : '', "/>") + '</div>';
    }
    html += '</form>';
    return html;
  };
})(jQuery, Drupal);;
!function s(a,n,i){function o(t,e){if(!n[t]){if(!a[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(c)return c(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}r=n[t]={exports:{}},a[t][0].call(r.exports,function(e){return o(a[t][1][e]||e)},r,r.exports,s,a,n,i)}return n[t].exports}for(var c="function"==typeof require&&require,e=0;e<i.length;e++)o(i[e]);return o}({1:[function(e,t,r){"use strict";var s;if("document"in window.self)if("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g")))(a=document.createElement("_")).classList.add("c1","c2"),a.classList.contains("c2")||((i=function(e){var s=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){for(var t=arguments.length,r=0;r<t;r++)s.call(this,arguments[r])}})("add"),i("remove")),a.classList.toggle("c3",!1),a.classList.contains("c3")&&(s=DOMTokenList.prototype.toggle,DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:s.call(this,e)});else if("Element"in(i=window.self)){var a="classList",n="prototype",i=i.Element[n],o=Object,c=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},l=Array[n].indexOf||function(e){for(var t=0,r=this.length;t<r;t++)if(t in this&&this[t]===e)return t;return-1},u=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},d=function(e,t){if(""===t)throw new u("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new u("INVALID_CHARACTER_ERR","String contains an invalid character");return l.call(e,t)},p=function(e){for(var t=c.call(e.getAttribute("class")||""),r=t?t.split(/\s+/):[],s=0,a=r.length;s<a;s++)this.push(r[s]);this._updateClassName=function(){e.setAttribute("class",this.toString())}},b=p[n]=[],f=function(){return new p(this)};if(u[n]=Error[n],b.item=function(e){return this[e]||null},b.contains=function(e){return-1!==d(this,e+="")},b.add=function(){for(var e,t=arguments,r=0,s=t.length,a=!1;-1===d(this,e=t[r]+"")&&(this.push(e),a=!0),++r<s;);a&&this._updateClassName()},b.remove=function(){var e,t,r=arguments,s=0,a=r.length,n=!1;do{for(t=d(this,e=r[s]+"");-1!==t;)this.splice(t,1),n=!0,t=d(this,e)}while(++s<a);n&&this._updateClassName()},b.toggle=function(e,t){var r=this.contains(e+=""),s=r?!0!==t&&"remove":!1!==t&&"add";return s&&this[s](e),!0===t||!1===t?t:!r},b.toString=function(){return this.join(" ")},o.defineProperty){b={get:f,enumerable:!0,configurable:!0};try{o.defineProperty(i,a,b)}catch(e){-2146823252===e.number&&(b.enumerable=!1,o.defineProperty(i,a,b))}}else o[n].__defineGetter__&&i.__defineGetter__(a,f)}},{}],2:[function(e,t,r){"use strict";var s;"function"!=typeof(s=window.Element.prototype).matches&&(s.matches=s.msMatchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),r=0;t[r]&&t[r]!==this;)++r;return Boolean(t[r])}),"function"!=typeof s.closest&&(s.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})},{}],3:[function(e,t,r){"use strict";for(var s={polyfill:function(){if(!("KeyboardEvent"in window)||"key"in KeyboardEvent.prototype)return!1;var e={get:function(e){var t=s.keys[this.which||this.keyCode];return t=Array.isArray(t)?t[+this.shiftKey]:t}};return Object.defineProperty(KeyboardEvent.prototype,"key",e),e},keys:{3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"}},a=1;a<25;a++)s.keys[111+a]="F"+a;var n="";for(a=65;a<91;a++)n=String.fromCharCode(a),s.keys[a]=[n.toLowerCase(),n.toUpperCase()];"function"==typeof define&&define.amd?define("keyboardevent-key-polyfill",s):void 0!==r&&void 0!==t?t.exports=s:window&&(window.keyboardeventKeyPolyfill=s)},{}],4:[function(e,t,r){"use strict";var c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(Object.assign){var e=new String("abc");if(e[5]="de","5"!==Object.getOwnPropertyNames(e)[0]){for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var s,a=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"===a.join(""))return s={},"abcdefghijklmnopqrst".split("").forEach(function(e){s[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},s)).join("")?1:void 0}}}catch(e){}}()?Object.assign:function(e,t){for(var r,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var n in r=Object(arguments[a]))l.call(r,n)&&(s[n]=r[n]);if(c)for(var i=c(r),o=0;o<i.length;o++)u.call(r,i[o])&&(s[i[o]]=r[i[o]])}return s}},{}],5:[function(e,t,r){"use strict";const c=e("object-assign"),l=e("../delegate"),u=e("../delegateAll"),d=/^(.+):delegate\((.+)\)$/;function p(e,t){var r=e[t];return delete e[t],r}t.exports=function(o,e){const r=Object.keys(o).reduce(function(e,t){r=o[t=t],(i=t.match(d))&&(t=i[1],s=i[2]),"object"==typeof r&&(a={capture:p(r,"capture"),passive:p(r,"passive")}),n={selector:s,delegate:"object"==typeof r?u(r):s?l(s,r):r,options:a};var r,s,a,n,i=-1<t.indexOf(" ")?t.split(" ").map(function(e){return c({type:e},n)}):(n.type=t,[n]);return e.concat(i)},[]);return c({add:function(t){r.forEach(function(e){t.addEventListener(e.type,e.delegate,e.options)})},remove:function(t){r.forEach(function(e){t.removeEventListener(e.type,e.delegate,e.options)})}},e)}},{"../delegate":7,"../delegateAll":8,"object-assign":4}],6:[function(e,t,r){"use strict";t.exports=function(e){return function(t){return e.some(function(e){return!1===e.call(this,t)},this)}}},{}],7:[function(e,t,r){"use strict";e("element-closest"),t.exports=function(r,s){return function(e){var t=e.target.closest(r);if(t)return s.call(t,e)}}},{"element-closest":2}],8:[function(e,t,r){"use strict";const s=e("../delegate"),a=e("../compose");t.exports=function(r){var e=Object.keys(r);return 1===e.length&&"*"===e[0]?r["*"]:(e=e.reduce(function(e,t){return e.push(s(t,r[t])),e},[]),a(e))}},{"../compose":6,"../delegate":7}],9:[function(e,t,r){"use strict";t.exports=function(t,r){return function(e){if(t!==e.target&&!t.contains(e.target))return r.call(this,e)}}},{}],10:[function(e,t,r){"use strict";t.exports={behavior:e("./behavior"),delegate:e("./delegate"),delegateAll:e("./delegateAll"),ignore:e("./ignore"),keymap:e("./keymap")}},{"./behavior":5,"./delegate":7,"./delegateAll":8,"./ignore":9,"./keymap":11}],11:[function(e,t,r){"use strict";e("keyboardevent-key-polyfill");const n={Alt:"altKey",Control:"ctrlKey",Ctrl:"ctrlKey",Shift:"shiftKey"};t.exports=function(a){const e=Object.keys(a).some(function(e){return-1<e.indexOf("+")});return function(r){var s=function(e,t){var r=e.key;if(t)for(var s in n)!0===e[n[s]]&&(r=[s,r].join("+"));return r}(r,e);return[s,s.toLowerCase()].reduce(function(e,t){return e=t in a?a[s].call(this,r):e},void 0)}},t.exports.MODIFIERS=n},{"keyboardevent-key-polyfill":3}],12:[function(e,t,r){"use strict";t.exports=function(t,r){function s(e){return e.currentTarget.removeEventListener(e.type,s,r),t.call(this,e)}return s}},{}],13:[function(e,t,r){"use strict";var s=/(^\s+)|(\s+$)/g,a=/\s+/,n=String.prototype.trim?function(e){return e.trim()}:function(e){return e.replace(s,"")};t.exports=function(e,t){if("string"!=typeof e)throw new Error("Expected a string but got "+typeof e);var r=((t=t||window.document).getElementById||function(e){return this.querySelector('[id="'+e.replace(/"/g,'\\"')+'"]')}).bind(t);return 1===(e=n(e).split(a)).length&&""===e[0]?[]:e.map(function(e){var t=r(e);if(t)return t;throw new Error('no element with id: "'+e+'"')})}},{}],14:[function(e,t,r){"use strict";var s=e("../../uswds-core/src/js/utils/behavior");const a=e("../../uswds-core/src/js/utils/toggle-form-input");var n=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];t.exports=s({[n]:{[`.${e}-show-password`]:function(e){e.preventDefault(),a(this)}}})},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/toggle-form-input":55}],15:[function(e,t,r){"use strict";const s=e("../../uswds-core/src/js/utils/select");var a=e("../../uswds-core/src/js/utils/behavior");const n=e("../../uswds-core/src/js/utils/toggle"),i=e("../../uswds-core/src/js/utils/is-in-viewport");var o=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];const c=`.${e}-accordion, .${e}-accordion--bordered`,l=`.${e}-accordion__button[aria-controls]`,u="aria-expanded",d=t=>{return s(l,t).filter(e=>e.closest(c)===t)},p=(t,e)=>{var r=t.closest(c);if(!r)throw new Error(l+" is missing outer "+c);var e=n(t,e),s=r.hasAttribute("data-allow-multiple");e&&!s&&d(r).forEach(e=>{e!==t&&n(e,!1)})};e=a({[o]:{[l](){p(this),"true"!==this.getAttribute(u)||i(this)||this.scrollIntoView()}}},{init(e){s(l,e).forEach(e=>{var t="true"===e.getAttribute(u);p(e,t)})},ACCORDION:c,BUTTON:l,show:e=>p(e,!0),hide:e=>p(e,!1),toggle:p,getButtons:d});t.exports=e},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/is-in-viewport":48,"../../uswds-core/src/js/utils/select":53,"../../uswds-core/src/js/utils/toggle":56}],16:[function(e,t,r){"use strict";var s=e("../../uswds-core/src/js/utils/behavior"),a=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];const n=`.${e}-banner__header`,i=e+"-banner__header--expanded";t.exports=s({[a]:{[n+" [aria-controls]"]:function(e){e.preventDefault(),this.closest(n).classList.toggle(i)}}})},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45}],17:[function(e,t,r){"use strict";var s=e("receptor/keymap"),e=e("../../uswds-core/src/js/utils/behavior")({keydown:{'a[class*="usa-button"]':s({" ":e=>{e.preventDefault(),e.target.click()}})}});t.exports=e},{"../../uswds-core/src/js/utils/behavior":45,"receptor/keymap":11}],18:[function(e,t,r){"use strict";const s=e("../../uswds-core/src/js/utils/select");var a=e("../../uswds-core/src/js/utils/behavior"),n=e("../../uswds-core/src/js/utils/debounce"),e=e("../../uswds-core/src/js/config")["prefix"],i=e+"-character-count";const o="."+i,c=`.${e}-character-count__field`,l=`.${e}-character-count__message`,u="The content is too long.",d=e+"-character-count__status--invalid",p=i+"__status",b=i+"__sr-status",f="."+p,h="."+b,m="characters allowed",v=e=>{e=e.closest(o);if(!e)throw new Error(c+" is missing outer "+o);var t=e.querySelector(l);if(t)return{characterCountEl:e,messageEl:t};throw new Error(o+" is missing inner "+l)},g=e=>{var t=document.createElement("div"),r=document.createElement("div"),s=e.dataset.maxlength+" "+m;t.classList.add(""+p,"usa-hint"),r.classList.add(""+b,"usa-sr-only"),t.setAttribute("aria-hidden",!0),r.setAttribute("aria-live","polite"),t.textContent=s,r.textContent=s,e.append(t,r)},y=(e,t)=>{let r="";var s;return r=0===e?t+" "+m:(s=Math.abs(t-e))+` ${"character"+(1===s?"":"s")} `+(t<e?"over limit":"left")},w=n((e,t)=>{e.textContent=t},1e3),A=e=>{var t=v(e)["characterCountEl"],r=e.value.length,s=parseInt(t.getAttribute("data-maxlength"),10),a=t.querySelector(f),t=t.querySelector(h),n=y(r,s);s&&(s=r&&s<r,a.textContent=n,w(t,n),s&&!e.validationMessage&&e.setCustomValidity(u),s||e.validationMessage!==u||e.setCustomValidity(""),a.classList.toggle(d,s))},E=e=>{var t,{characterCountEl:r,messageEl:s}=v(e);s.classList.add("usa-sr-only"),s.removeAttribute("aria-live"),s=e,e=v(s).characterCountEl,(t=s.getAttribute("maxlength"))&&(s.removeAttribute("maxlength"),e.setAttribute("data-maxlength",t)),g(r)};e=a({input:{[c](){A(this)}}},{init(e){s(c,e).forEach(e=>E(e))},MESSAGE_INVALID_CLASS:d,VALIDATION_MESSAGE:u,STATUS_MESSAGE_CLASS:p,STATUS_MESSAGE_SR_ONLY_CLASS:b,DEFAULT_STATUS_LABEL:m,createStatusMessages:g,getCountMessage:y,updateCountMessage:A});t.exports=e},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/debounce":46,"../../uswds-core/src/js/utils/select":53}],19:[function(e,t,I){"use strict";var r=e("receptor/keymap");const s=e("../../uswds-core/src/js/utils/select-or-matches");var a=e("../../uswds-core/src/js/utils/behavior");const b=e("../../uswds-core/src/js/utils/sanitizer");var n=e("../../uswds-core/src/js/config")["prefix"],e=e("../../uswds-core/src/js/events")["CLICK"],n=n+"-combo-box";const f=n+"--pristine",h=n+"__select",m=n+"__input",v=n+"__clear-input",O=v+"__wrapper",B=n+"__input-button-separator",g=n+"__toggle-list",H=g+"__wrapper",y=n+"__list",w=n+"__list-option",A=w+"--focused",E=w+"--selected",x=n+"__status",j="."+n,P="."+h,u="."+m,d="."+v,p="."+g,F="."+y,i="."+w,L="."+A,R="."+E,Y="."+x,U=".*{{query}}.*";const _=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",t=(e.value=t,new CustomEvent("change",{bubbles:!0,cancelable:!0,detail:{value:t}}));e.dispatchEvent(t)},S=e=>{var t,r,s,a,n,i,o,c,l,e=e.closest(j);if(e)return t=e.querySelector(P),r=e.querySelector(u),s=e.querySelector(F),a=e.querySelector(Y),n=e.querySelector(L),i=e.querySelector(R),o=e.querySelector(p),c=e.querySelector(d),l=e.classList.contains(f),{comboBoxEl:e,selectEl:t,inputEl:r,listEl:s,statusEl:a,focusedOptionEl:n,selectedOptionEl:i,toggleListBtnEl:o,clearInputBtnEl:c,isPristine:l,disableFiltering:"true"===e.dataset.disableFiltering};throw new Error("Element is missing outer "+j)},C=e=>{var{inputEl:e,toggleListBtnEl:t,clearInputBtnEl:r}=S(e);r.hidden=!0,r.disabled=!0,t.disabled=!0,e.disabled=!0};const o=e=>{e=e.closest(j);if(!e.dataset.enhanced){const u=e.querySelector("select");if(!u)throw new Error(j+" is missing inner select");var t=u.id,s=document.querySelector(`label[for="${t}"]`),a=t+"--list",n=t+"-label",i=t+"--assistiveHint";const d=[];var o=e.dataset["defaultValue"],c=e.dataset["placeholder"];let r;if(c&&d.push({placeholder:c}),o)for(let e=0,t=u.options.length;e<t;e+=1){var l=u.options[e];if(l.value===o){r=l;break}}if(!s||!s.matches(`label[for="${t}"]`))throw new Error(j+` for ${t} is either missing a label or a "for" attribute`);s.setAttribute("id",n),s.setAttribute("id",n),u.setAttribute("aria-hidden","true"),u.setAttribute("tabindex","-1"),u.classList.add("usa-sr-only",h),u.id="",u.value="",["required","aria-label","aria-labelledby"].forEach(e=>{var t;u.hasAttribute(e)&&(t=u.getAttribute(e),d.push({[e]:t}),u.removeAttribute(e))});const p=document.createElement("input");p.setAttribute("id",t),p.setAttribute("aria-owns",a),p.setAttribute("aria-controls",a),p.setAttribute("aria-autocomplete","list"),p.setAttribute("aria-describedby",i),p.setAttribute("aria-expanded","false"),p.setAttribute("autocapitalize","off"),p.setAttribute("autocomplete","off"),p.setAttribute("class",m),p.setAttribute("type","text"),p.setAttribute("role","combobox"),d.forEach(r=>Object.keys(r).forEach(e=>{var t=b.escapeHTML`${r[e]}`;p.setAttribute(e,t)})),e.insertAdjacentElement("beforeend",p),e.insertAdjacentHTML("beforeend",b.escapeHTML`
    <span class="${O}" tabindex="-1">
        <button type="button" class="${v}" aria-label="Clear the select contents">&nbsp;</button>
      </span>
      <span class="${B}">&nbsp;</span>
      <span class="${H}" tabindex="-1">
        <button type="button" tabindex="-1" class="${g}" aria-label="Toggle the dropdown list">&nbsp;</button>
      </span>
      <ul
        tabindex="-1"
        id="${a}"
        class="${y}"
        role="listbox"
        aria-labelledby="${n}"
        hidden>
      </ul>
      <div class="${x} usa-sr-only" role="status"></div>
      <span id="${i}" class="usa-sr-only">
        When autocomplete results are available use up and down arrows to review and enter to select.
        Touch device users, explore by touch or with swipe gestures.
      </span>`),r&&(c=S(e)["inputEl"],_(u,r.value),_(c,r.text),e.classList.add(f)),u.disabled&&(C(e),u.disabled=!1),u.hasAttribute("aria-disabled")&&(s=e,{inputEl:s,toggleListBtnEl:t,clearInputBtnEl:a}=S(s),a.hidden=!0,a.setAttribute("aria-disabled",!0),t.setAttribute("aria-disabled",!0),s.setAttribute("aria-disabled",!0),u.removeAttribute("aria-disabled")),e.dataset.enhanced="true"}},D=function(e,t){var{skipFocus:r,preventScroll:s}=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},{inputEl:e,listEl:a,focusedOptionEl:n}=S(e);n&&(n.classList.remove(A),n.setAttribute("tabIndex","-1")),t?(e.setAttribute("aria-activedescendant",t.id),t.setAttribute("tabIndex","0"),t.classList.add(A),s||(n=t.offsetTop+t.offsetHeight,a.scrollTop+a.offsetHeight<n&&(a.scrollTop=n-a.offsetHeight),t.offsetTop<a.scrollTop&&(a.scrollTop=t.offsetTop)),r||t.focus({preventScroll:s})):(e.setAttribute("aria-activedescendant",""),e.focus())},T=function(e){let s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};const n=e=>e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");e=`^(?:${e.replace(/{{(.*?)}}/g,(e,t)=>{var t=t.trim(),r=a[t];return"query"!==t&&r?(t=new RegExp(r,"i"),(r=s.match(t))?n(r[1]):""):n(s)})})$`;return new RegExp(e,"i")},c=e=>{const{comboBoxEl:t,selectEl:r,inputEl:s,listEl:a,statusEl:n,isPristine:i,disableFiltering:o}=S(e);let c,l;const u=a.id+"--option-";var d=(s.value||"").toLowerCase(),e=t.dataset.filter||U,p=T(e,d,t.dataset);const b=[];for(let e=0,t=r.options.length;e<t;e+=1){var f=r.options[e],h=u+b.length;f.value&&(o||i||!d||p.test(f.text))&&(r.value&&f.value===r.value&&(c=h),o&&!l&&p.test(f.text)&&(l=h),b.push(f))}var e=b.length,m=b.map((e,t)=>{var r=u+t,s=[w];let a="-1",n="false";r===c&&(s.push(E,A),a="0",n="true"),c||0!==t||(s.push(A),a="0");var i=document.createElement("li");return i.setAttribute("aria-setsize",b.length),i.setAttribute("aria-posinset",t+1),i.setAttribute("aria-selected",n),i.setAttribute("id",r),i.setAttribute("class",s.join(" ")),i.setAttribute("tabindex",a),i.setAttribute("role","option"),i.setAttribute("data-value",e.value),i.textContent=e.text,i}),v=document.createElement("li");v.setAttribute("class",w+"--no-results"),v.textContent="No results found",a.hidden=!1,e?(a.innerHTML="",m.forEach(e=>a.insertAdjacentElement("beforeend",e))):(a.innerHTML="",a.insertAdjacentElement("beforeend",v)),s.setAttribute("aria-expanded","true"),n.textContent=e?e+` result${1<e?"s":""} available.`:"No results.";let g;i&&c?g=a.querySelector("#"+c):o&&l&&(g=a.querySelector("#"+l)),g&&D(a,g,{skipFocus:!0})},l=e=>{var{inputEl:e,listEl:t,statusEl:r,focusedOptionEl:s}=S(e);r.innerHTML="",e.setAttribute("aria-expanded","false"),e.setAttribute("aria-activedescendant",""),s&&s.classList.remove(A),t.scrollTop=0,t.hidden=!0},$=e=>{var{comboBoxEl:t,selectEl:r,inputEl:s}=S(e);_(r,e.dataset.value),_(s,e.textContent),t.classList.add(f),l(t),s.focus()},k=e=>{var{comboBoxEl:r,selectEl:s,inputEl:a}=S(e),n=s.value,i=(a.value||"").toLowerCase();if(n)for(let e=0,t=s.options.length;e<t;e+=1){var o=s.options[e];if(o.value===n)return i!==o.text&&_(a,o.text),void r.classList.add(f)}i&&_(a)};var M=e=>{var{comboBoxEl:t,listEl:r}=S(e.target),r=(r.hidden&&c(t),r.querySelector(L)||r.querySelector(i));r&&D(t,r),e.preventDefault()},q=e=>{var t=e.target,r=t.nextSibling;r&&D(t,r),e.preventDefault()},N=e=>{var{comboBoxEl:t,listEl:r,focusedOptionEl:s}=S(e.target),s=s&&s.previousSibling,r=!r.hidden;D(t,s),r&&e.preventDefault(),s||l(t)};a=a({[e]:{[u](){var e,t;this.disabled||(e=this,{comboBoxEl:e,listEl:t}=S(e),t.hidden&&c(e))},[p](){var e,t,r;this.disabled||(e=this,{comboBoxEl:e,listEl:t,inputEl:r}=S(e),(t.hidden?c:l)(e),r.focus())},[i](){this.disabled||$(this)},[d](){var e,t,r,s;this.disabled||(e=this,{comboBoxEl:e,listEl:s,selectEl:t,inputEl:r}=S(e),s=!s.hidden,t.value&&_(t),r.value&&_(r),e.classList.remove(f),s&&c(e),r.focus())}},focusout:{[j](e){this.contains(e.relatedTarget)||(k(this),l(this))}},keydown:{[j]:r({Escape:e=>{var{comboBoxEl:e,inputEl:t}=S(e.target);l(e),k(e),t.focus()}}),[u]:r({Enter:e=>{var{comboBoxEl:t,listEl:r}=S(e.target),r=!r.hidden;(e=>{var{comboBoxEl:r,selectEl:s,inputEl:a,statusEl:e}=S(e),n=(e.textContent="",(a.value||"").toLowerCase());if(n)for(let e=0,t=s.options.length;e<t;e+=1){var i=s.options[e];if(i.text.toLowerCase()===n)return _(s,i.value),_(a,i.text),r.classList.add(f)}k(r)})(t),r&&l(t),e.preventDefault()},ArrowDown:M,Down:M}),[i]:r({ArrowUp:N,Up:N,ArrowDown:q,Down:q,Enter:e=>{$(e.target),e.preventDefault()}," ":e=>{$(e.target),e.preventDefault()},"Shift+Tab":()=>{}})},input:{[u](){this.closest(j).classList.remove(f),c(this)}},mouseover:{[i](){var e;(e=this).classList.contains(A)||D(e,e,{preventScroll:!0})}}},{init(e){s(j,e).forEach(e=>{o(e)})},getComboBoxContext:S,enhanceComboBox:o,generateDynamicRegExp:T,disable:C,enable:e=>{var{inputEl:e,toggleListBtnEl:t,clearInputBtnEl:r}=S(e);r.hidden=!1,r.disabled=!1,t.disabled=!1,e.disabled=!1},displayList:c,hideList:l,COMBO_BOX_CLASS:n});t.exports=a},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/sanitizer":50,"../../uswds-core/src/js/utils/select-or-matches":52,"receptor/keymap":11}],20:[function(e,A,E){"use strict";const t=e("receptor/keymap");var _=e("../../uswds-core/src/js/utils/behavior");const S=e("../../uswds-core/src/js/utils/select"),P=e("../../uswds-core/src/js/utils/select-or-matches");var r=e("../../uswds-core/src/js/config")["prefix"],F=e("../../uswds-core/src/js/events")["CLICK"];const R=e("../../uswds-core/src/js/utils/active-element");var Y=e("../../uswds-core/src/js/utils/is-ios-device");const C=e("../../uswds-core/src/js/utils/sanitizer");e=r+"-date-picker";const U=e+"__wrapper",V=e+"--initialized",K=e+"--active",W=e+"__internal-input",z=e+"__external-input",Q=e+"__button",n=e+"__calendar",G=e+"__status",D=n+"__date",Z=D+"--focused",X=D+"--selected",J=D+"--previous-month",ee=D+"--current-month",te=D+"--next-month",re=D+"--range-date",se=D+"--today",ae=D+"--range-date-start",ne=D+"--range-date-end",ie=D+"--within-range",oe=n+"__previous-year",ce=n+"__previous-month",le=n+"__next-year",ue=n+"__next-month",de=n+"__month-selection",pe=n+"__year-selection",p=n+"__month",be=p+"--focused",fe=p+"--selected",x=n+"__year",he=x+"--focused",me=x+"--selected",ve=n+"__previous-year-chunk",ge=n+"__next-year-chunk",ye=n+"__date-picker",we=n+"__month-picker",Ae=n+"__year-picker",T=n+"__table",Ee=n+"__row",$=n+"__cell",k=$+"--center-items",xe=n+"__month-label",je=n+"__day-of-week",f="."+e,Le="."+Q,_e="."+W,h="."+z,m="."+n,Se="."+G;r="."+D;const o="."+Z;e="."+ee;const Ce="."+oe,De="."+ce,Te="."+le,$e="."+ue;var ke="."+pe,Me="."+de,qe="."+p;const v="."+x,Ne="."+ve,Ie="."+ge,M="."+ye;var Oe="."+we;const Be="."+Ae,c="."+be,l="."+he,He="Please enter a valid date",Pe=["January","February","March","April","May","June","July","August","September","October","November","December"],Fe=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],j=12,Re="MM/DD/YYYY",Ye="YYYY-MM-DD";function Ue(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.map(e=>e+":not([disabled])").join(", ")}var Ve=Ue(Ce,De,ke,Me,Te,$e,o),Ke=Ue(c),We=Ue(Ne,Ie,l);const ze=(e,t)=>(t!==e.getMonth()&&e.setDate(0),e),Qe=(e,t,r)=>{var s=new Date(0);return s.setFullYear(e,t,r),s},Ge=()=>{var e=new Date,t=e.getDate(),r=e.getMonth(),e=e.getFullYear();return Qe(e,r,t)},Ze=e=>{var t=new Date(0);return t.setFullYear(e.getFullYear(),e.getMonth(),1),t},Xe=e=>{var t=new Date(0);return t.setFullYear(e.getFullYear(),e.getMonth()+1,0),t},q=(e,t)=>{e=new Date(e.getTime());return e.setDate(e.getDate()+t),e},Je=(e,t)=>q(e,-t),et=(e,t)=>q(e,7*t),tt=e=>{var t=e.getDay();return Je(e,t)},N=(e,t)=>{var e=new Date(e.getTime()),r=(e.getMonth()+12+t)%12;return e.setMonth(e.getMonth()+t),ze(e,r),e},rt=(e,t)=>N(e,-t),st=(e,t)=>N(e,12*t),at=(e,t)=>st(e,-t),b=(e,t)=>{e=new Date(e.getTime());return e.setMonth(t),ze(e,t),e},L=(e,t)=>{var e=new Date(e.getTime()),r=e.getMonth();return e.setFullYear(t),ze(e,r),e},nt=(e,t)=>{let r=t<e?t:e;return new Date(r.getTime())},it=(e,t)=>{let r=e<t?t:e;return new Date(r.getTime())},ot=(e,t)=>e&&t&&e.getFullYear()===t.getFullYear(),I=(e,t)=>ot(e,t)&&e.getMonth()===t.getMonth(),O=(e,t)=>I(e,t)&&e.getDate()===t.getDate(),u=(e,t,r)=>{let s=e;return e<t?s=t:r&&r<e&&(s=r),new Date(s.getTime())},ct=(e,t,r)=>t<=e&&(!r||e<=r),lt=(e,t,r)=>Xe(e)<t||r&&Ze(e)>r,ut=(e,t,r)=>Xe(b(e,11))<t||r&&Ze(b(e,0))>r,g=function(s){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Ye,n=2<arguments.length&&void 0!==arguments[2]&&arguments[2];let i,o,c,l,u;if(s){let e,t,r;a===Re?[e,t,r]=s.split("/"):[r,e,t]=s.split("-"),r&&(u=parseInt(r,10),Number.isNaN(u)||(l=u,n&&(l=Math.max(0,l),r.length<3)&&(s=(a=Ge().getFullYear())-a%10**r.length,l=s+u))),e&&(u=parseInt(e,10),Number.isNaN(u)||(o=u,n&&(o=Math.max(1,o),o=Math.min(12,o)))),o&&t&&null!=l&&(u=parseInt(t,10),Number.isNaN(u)||(c=u,n&&(a=Qe(l,o,0).getDate(),c=Math.max(1,c),c=Math.min(a,c)))),o&&c&&null!=l&&(i=Qe(l,o-1,c))}return i},B=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Ye,r=(e,t)=>("0000"+e).slice(-t),s=e.getMonth()+1,a=e.getDate(),e=e.getFullYear();return t===Re?[r(s,2),r(a,2),r(e,4)].join("/"):[r(e,4),r(s,2),r(a,2)].join("-")},dt=(e,t)=>{var r=[],s=[];let a=0;for(;a<e.length;){s=[];const i=document.createElement("tr");for(;a<e.length&&s.length<t;){var n=document.createElement("td");n.insertAdjacentElement("beforeend",e[a]),s.push(n),a+=1}s.forEach(e=>{i.insertAdjacentElement("beforeend",e)}),r.push(i)}return r},pt=e=>{const t=document.createElement("tbody");return e.forEach(e=>{t.insertAdjacentElement("beforeend",e)}),t},bt=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",t=(e.value=t,new CustomEvent("change",{bubbles:!0,cancelable:!0,detail:{value:t}}));e.dispatchEvent(t)},H=e=>{e=e.closest(f);if(!e)throw new Error("Element is missing outer "+f);var t=e.querySelector(_e),r=e.querySelector(h),s=e.querySelector(m),a=e.querySelector(Le),n=e.querySelector(Se),i=e.querySelector(v),o=g(r.value,Re,!0),c=g(t.value),l=g(s.dataset.value),u=g(e.dataset.minDate),d=g(e.dataset.maxDate),p=g(e.dataset.rangeDate),b=g(e.dataset.defaultDate);if(u&&d&&d<u)throw new Error("Minimum date cannot be after maximum date");return{calendarDate:l,minDate:u,toggleBtnEl:a,selectedDate:c,maxDate:d,firstYearChunkEl:i,datePickerEl:e,inputDate:o,internalInputEl:t,externalInputEl:r,calendarEl:s,rangeDate:p,defaultDate:b,statusEl:n}},ft=e=>{var{externalInputEl:e,toggleBtnEl:t}=H(e);t.disabled=!0,e.disabled=!0},ht=e=>{var{externalInputEl:e,toggleBtnEl:t}=H(e);t.setAttribute("aria-disabled",!0),e.setAttribute("aria-disabled",!0)};const mt=e=>{var t,r,s,a,{externalInputEl:e,minDate:n,maxDate:i}=H(e),e=e.value;let o=!1;return o=e&&(o=!0,[t,r,s]=(e=e.split("/")).map(e=>{let t;e=parseInt(e,10);return t=Number.isNaN(e)?t:e}),t)&&r&&null!=s&&(a=Qe(s,t-1,r)).getMonth()===t-1&&a.getDate()===r&&a.getFullYear()===s&&4===e[2].length&&ct(a,n,i)?!1:o},vt=e=>{var e=H(e)["externalInputEl"],t=mt(e);t&&!e.validationMessage&&e.setCustomValidity(He),t||e.validationMessage!==He||e.setCustomValidity("")},gt=(e,t)=>{var r,s,a=g(t);a&&(a=B(a,Re),{datePickerEl:e,internalInputEl:r,externalInputEl:s}=H(e),bt(r,t),bt(s,a),vt(e))},d=(e,t)=>{const{datePickerEl:r,calendarEl:s,statusEl:a,selectedDate:d,maxDate:p,minDate:b,rangeDate:f}=H(e),h=Ge();let n=t||h;e=s.hidden;const m=q(n,0);var i=n.getMonth(),t=n.getFullYear();const v=rt(n,1),g=N(n,1);var o=B(n),c=Ze(n),l=I(n,b),u=I(n,p),y=d||n;const w=f&&nt(y,f),A=f&&it(y,f),E=f&&q(w,1),x=f&&Je(A,1);for(var y=Pe[i],j=(n=tt(c),[]);j.length<28||n.getMonth()===i||j.length%7!=0;)j.push((e=>{var t=[D],r=e.getDate(),s=e.getMonth(),a=e.getFullYear(),n=e.getDay(),i=B(e);let o="-1";var c=!ct(e,b,p),l=O(e,d),e=(I(e,v)&&t.push(J),I(e,m)&&t.push(ee),I(e,g)&&t.push(te),l&&t.push(X),O(e,h)&&t.push(se),f&&(O(e,f)&&t.push(re),O(e,w)&&t.push(ae),O(e,A)&&t.push(ne),ct(e,E,x))&&t.push(ie),O(e,m)&&(o="0",t.push(Z)),Pe[s]),n=Fe[n],u=document.createElement("button");return u.setAttribute("type","button"),u.setAttribute("tabindex",o),u.setAttribute("class",t.join(" ")),u.setAttribute("data-day",r),u.setAttribute("data-month",s+1),u.setAttribute("data-year",a),u.setAttribute("data-value",i),u.setAttribute("aria-label",C.escapeHTML`${r} ${e} ${a} ${n}`),u.setAttribute("aria-selected",l?"true":"false"),!0==c&&(u.disabled=!0),u.textContent=r,u})(n)),n=q(n,1);var c=dt(j,7),L=s.cloneNode(),o=(L.dataset.value=o,L.style.top=r.offsetHeight+"px",L.hidden=!1,L.innerHTML=C.escapeHTML`
    <div tabindex="-1" class="${ye}">
      <div class="${Ee}">
        <div class="${$} ${k}">
          <button
            type="button"
            class="${oe}"
            aria-label="Navigate back one year"
            ${l?'disabled="disabled"':""}
          ></button>
        </div>
        <div class="${$} ${k}">
          <button
            type="button"
            class="${ce}"
            aria-label="Navigate back one month"
            ${l?'disabled="disabled"':""}
          ></button>
        </div>
        <div class="${$} ${xe}">
          <button
            type="button"
            class="${de}" aria-label="${y}. Click to select month"
          >${y}</button>
          <button
            type="button"
            class="${pe}" aria-label="${t}. Click to select year"
          >${t}</button>
        </div>
        <div class="${$} ${k}">
          <button
            type="button"
            class="${ue}"
            aria-label="Navigate forward one month"
            ${u?'disabled="disabled"':""}
          ></button>
        </div>
        <div class="${$} ${k}">
          <button
            type="button"
            class="${le}"
            aria-label="Navigate forward one year"
            ${u?'disabled="disabled"':""}
          ></button>
        </div>
      </div>
    </div>
    `,document.createElement("table")),l=(o.setAttribute("class",T),o.setAttribute("role","presentation"),document.createElement("thead"));o.insertAdjacentElement("beforeend",l);const _=document.createElement("tr"),S=(l.insertAdjacentElement("beforeend",_),{Sunday:"S",Monday:"M",Tuesday:"T",Wednesday:"W",Thursday:"Th",Friday:"Fr",Saturday:"S"});Object.keys(S).forEach(e=>{var t=document.createElement("th");t.setAttribute("class",je),t.setAttribute("scope","presentation"),t.setAttribute("aria-label",e),t.textContent=S[e],_.insertAdjacentElement("beforeend",t)});u=pt(c);o.insertAdjacentElement("beforeend",u);L.querySelector(M).insertAdjacentElement("beforeend",o),s.parentNode.replaceChild(L,s),r.classList.add(K);l=[];return O(d,m)&&l.push("Selected date"),e?(l.push("You can navigate by day using left and right arrows","Weeks by using up and down arrows","Months by using page up and page down keys","Years by using shift plus page up and shift plus page down","Home and end keys navigate to the beginning and end of a week"),a.textContent=""):l.push(y+" "+t),a.textContent=l.join(". "),L},yt=e=>{var{datePickerEl:e,calendarEl:t,statusEl:r}=H(e);e.classList.remove(K),t.hidden=!0,r.textContent=""},wt=e=>{var{calendarEl:e,inputDate:t,minDate:r,maxDate:s}=H(e);!e.hidden&&t&&(t=u(t,r,s),d(e,t))},At=(e,t)=>{const{calendarEl:r,statusEl:s,calendarDate:o,minDate:c,maxDate:l}=H(e),u=o.getMonth(),d=null==t?u:t;var e=Pe.map((e,t)=>{var r=b(o,t),r=lt(r,c,l);let s="-1";var a=[p],n=t===u,i=(t===d&&(s="0",a.push(be)),n&&a.push(fe),document.createElement("button"));return i.setAttribute("type","button"),i.setAttribute("tabindex",s),i.setAttribute("class",a.join(" ")),i.setAttribute("data-value",t),i.setAttribute("data-label",e),i.setAttribute("aria-selected",n?"true":"false"),!0===r&&(i.disabled=!0),i.textContent=e,i}),t=document.createElement("div"),a=(t.setAttribute("tabindex","-1"),t.setAttribute("class",we),document.createElement("table")),e=(a.setAttribute("class",T),a.setAttribute("role","presentation"),dt(e,3)),e=pt(e),e=(a.insertAdjacentElement("beforeend",e),t.insertAdjacentElement("beforeend",a),r.cloneNode());return e.insertAdjacentElement("beforeend",t),r.parentNode.replaceChild(e,r),s.textContent="Select a month.",e},y=(e,t)=>{var{calendarEl:e,statusEl:r,calendarDate:s,minDate:a,maxDate:n}=H(e),i=s.getFullYear(),o=null==t?i:t,t=o,c=(t-=t%j,t=Math.max(0,t),ut(L(s,t-1),a,n)),l=ut(L(s,t+j),a,n),u=[];let d=t;for(;u.length<j;){var p=ut(L(s,d),a,n);let e="-1";var b=[x],f=d===i,h=(d===o&&(e="0",b.push(he)),f&&b.push(me),document.createElement("button"));h.setAttribute("type","button"),h.setAttribute("tabindex",e),h.setAttribute("class",b.join(" ")),h.setAttribute("data-value",d),h.setAttribute("aria-selected",f?"true":"false"),!0===p&&(h.disabled=!0),h.textContent=d,u.push(h),d+=1}var m=e.cloneNode(),v=document.createElement("div"),g=(v.setAttribute("tabindex","-1"),v.setAttribute("class",Ae),document.createElement("table")),y=(g.setAttribute("role","presentation"),g.setAttribute("class",T),document.createElement("tbody")),w=document.createElement("tr"),A=document.createElement("button"),c=(A.setAttribute("type","button"),A.setAttribute("class",ve),A.setAttribute("aria-label",`Navigate back ${j} years`),!0===c&&(A.disabled=!0),A.innerHTML=C.escapeHTML`&nbsp`,document.createElement("button")),l=(c.setAttribute("type","button"),c.setAttribute("class",ge),c.setAttribute("aria-label",`Navigate forward ${j} years`),!0===l&&(c.disabled=!0),c.innerHTML=C.escapeHTML`&nbsp`,document.createElement("table")),E=(l.setAttribute("class",T),l.setAttribute("role","presentation"),dt(u,3)),E=pt(E),E=(l.insertAdjacentElement("beforeend",E),document.createElement("td")),A=(E.insertAdjacentElement("beforeend",A),document.createElement("td")),l=(A.setAttribute("colspan","3"),A.insertAdjacentElement("beforeend",l),document.createElement("td"));return l.insertAdjacentElement("beforeend",c),w.insertAdjacentElement("beforeend",E),w.insertAdjacentElement("beforeend",A),w.insertAdjacentElement("beforeend",l),y.insertAdjacentElement("beforeend",w),g.insertAdjacentElement("beforeend",y),v.insertAdjacentElement("beforeend",g),m.insertAdjacentElement("beforeend",v),e.parentNode.replaceChild(m,e),r.textContent=C.escapeHTML`Showing years ${t} to ${t+j-1}. Select a year.`,m},Et=e=>{var{datePickerEl:t,externalInputEl:r}=H(e.target);yt(t),r.focus(),e.preventDefault()};var s=i=>e=>{var{calendarEl:t,calendarDate:r,minDate:s,maxDate:a}=H(e.target),n=i(r),n=u(n,s,a);O(r,n)||d(t,n).querySelector(o).focus(),e.preventDefault()},xt=s(e=>{return e=e,t=1,et(e,-t);var t}),jt=s(e=>et(e,1)),Lt=s(e=>Je(e,1)),_t=s(e=>q(e,1)),St=s(e=>tt(e)),Ct=s(e=>{return t=(e=e).getDay(),q(e,6-t);var t}),Dt=s(e=>N(e,1)),Tt=s(e=>rt(e,1)),$t=s(e=>st(e,1)),s=s(e=>at(e,1));var a=o=>e=>{var t=e.target,r=parseInt(t.dataset.value,10),{calendarEl:t,calendarDate:s,minDate:a,maxDate:n}=H(t),i=b(s,r),r=o(r),r=Math.max(0,Math.min(11,r)),s=b(s,r),r=u(s,a,n);I(i,r)||At(t,r.getMonth()).querySelector(c).focus(),e.preventDefault()},kt=a(e=>e-3),Mt=a(e=>e+3),qt=a(e=>e-1),Nt=a(e=>e+1),It=a(e=>e-e%3),Ot=a(e=>e+2-e%3),Bt=a(()=>11),a=a(()=>0);var i=o=>e=>{var t=e.target,r=parseInt(t.dataset.value,10),{calendarEl:t,calendarDate:s,minDate:a,maxDate:n}=H(t),i=L(s,r),r=o(r),r=Math.max(0,r),s=L(s,r),r=u(s,a,n);ot(i,r)||y(t,r.getFullYear()).querySelector(l).focus(),e.preventDefault()},Ht=i(e=>e-3),Pt=i(e=>e+3),Ft=i(e=>e-1),Rt=i(e=>e+1),Yt=i(e=>e-e%3),Ut=i(e=>e+2-e%3),Vt=i(e=>e-j),i=i(e=>e+j);var w=n=>{const a=e=>{var e=H(e)["calendarEl"],e=S(n,e),t=e.length-1,r=e[0],s=e[t],a=e.indexOf(R());return{focusableElements:e,isNotFound:-1===a,firstTabStop:r,isFirstTab:0===a,lastTabStop:s,isLastTab:a===t}};return{tabAhead(e){var{firstTabStop:t,isLastTab:r,isNotFound:s}=a(e.target);(r||s)&&(e.preventDefault(),t.focus())},tabBack(e){var{lastTabStop:t,isFirstTab:r,isNotFound:s}=a(e.target);(r||s)&&(e.preventDefault(),t.focus())}}},Ve=w(Ve),Ke=w(Ke),w=w(We),We={[F]:{[Le](){var e,t,r,s,a,n;(e=this).disabled||({calendarEl:t,inputDate:n,minDate:r,maxDate:s,defaultDate:a}=H(e),t.hidden?(n=u(n||a||Ge(),r,s),d(t,n).querySelector(o).focus()):yt(e))},[r](){var e,t,r;(e=this).disabled||({datePickerEl:t,externalInputEl:r}=H(e),gt(e,e.dataset.value),yt(t),r.focus())},[qe](){var e,t,r,s,a;(e=this).disabled||({calendarEl:t,calendarDate:a,minDate:r,maxDate:s}=H(e),e=parseInt(e.dataset.value,10),a=b(a,e),a=u(a,r,s),d(t,a).querySelector(o).focus())},[v](){var e,t,r,s,a;(e=this).disabled||({calendarEl:t,calendarDate:a,minDate:r,maxDate:s}=H(e),e=parseInt(e.innerHTML,10),a=L(a,e),a=u(a,r,s),d(t,a).querySelector(o).focus())},[De](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:r,minDate:s,maxDate:a}=H(t),r=rt(r,1),r=u(r,s,a),s=d(t,r);let e=s.querySelector(De);(e=e.disabled?s.querySelector(M):e).focus()}},[$e](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:r,minDate:s,maxDate:a}=H(t),r=N(r,1),r=u(r,s,a),s=d(t,r);let e=s.querySelector($e);(e=e.disabled?s.querySelector(M):e).focus()}},[Ce](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:r,minDate:s,maxDate:a}=H(t),r=at(r,1),r=u(r,s,a),s=d(t,r);let e=s.querySelector(Ce);(e=e.disabled?s.querySelector(M):e).focus()}},[Te](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:r,minDate:s,maxDate:a}=H(t),r=st(r,1),r=u(r,s,a),s=d(t,r);let e=s.querySelector(Te);(e=e.disabled?s.querySelector(M):e).focus()}},[Ne](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:r,minDate:s,maxDate:a}=H(t),n=t.querySelector(l),n=parseInt(n.textContent,10)-j,n=Math.max(0,n),r=L(r,n),n=u(r,s,a),r=y(t,n.getFullYear());let e=r.querySelector(Ne);(e=e.disabled?r.querySelector(Be):e).focus()}},[Ie](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:r,minDate:s,maxDate:a}=H(t),n=t.querySelector(l),n=parseInt(n.textContent,10)+j,n=Math.max(0,n),r=L(r,n),n=u(r,s,a),r=y(t,n.getFullYear());let e=r.querySelector(Ie);(e=e.disabled?r.querySelector(Be):e).focus()}},[Me](){At(this).querySelector(c).focus()},[ke](){y(this).querySelector(l).focus()}},keyup:{[m](e){var t=this.dataset.keydownKeyCode;""+e.keyCode!==t&&e.preventDefault()}},keydown:{[h](e){13===e.keyCode&&vt(this)},[r]:t({Up:xt,ArrowUp:xt,Down:jt,ArrowDown:jt,Left:Lt,ArrowLeft:Lt,Right:_t,ArrowRight:_t,Home:St,End:Ct,PageDown:Dt,PageUp:Tt,"Shift+PageDown":$t,"Shift+PageUp":s,Tab:Ve.tabAhead}),[M]:t({Tab:Ve.tabAhead,"Shift+Tab":Ve.tabBack}),[qe]:t({Up:kt,ArrowUp:kt,Down:Mt,ArrowDown:Mt,Left:qt,ArrowLeft:qt,Right:Nt,ArrowRight:Nt,Home:It,End:Ot,PageDown:Bt,PageUp:a}),[Oe]:t({Tab:Ke.tabAhead,"Shift+Tab":Ke.tabBack}),[v]:t({Up:Ht,ArrowUp:Ht,Down:Pt,ArrowDown:Pt,Left:Ft,ArrowLeft:Ft,Right:Rt,ArrowRight:Rt,Home:Yt,End:Ut,PageDown:i,PageUp:Vt}),[Be]:t({Tab:w.tabAhead,"Shift+Tab":w.tabBack}),[m](e){this.dataset.keydownKeyCode=e.keyCode},[f](e){t({Escape:Et})(e)}},focusout:{[h](){vt(this)},[f](e){this.contains(e.relatedTarget)||yt(this)}},input:{[h](){{var t=this,{internalInputEl:r,inputDate:s}=H(t);let e="";s&&!mt(t)&&(e=B(s)),r.value!==e&&bt(r,e)}wt(this)}}},F=(Y()||(We.mouseover={[e](){var e,t,r;(e=this).disabled||(r=(t=e.closest(m)).dataset.value,(e=e.dataset.value)!==r&&(r=g(e),d(t,r).querySelector(o).focus()))},[qe](){var e,t;(e=this).disabled||e.classList.contains(be)||(t=parseInt(e.dataset.value,10),At(e,t).querySelector(c).focus())},[v](){var e,t;(e=this).disabled||e.classList.contains(he)||(t=parseInt(e.dataset.value,10),y(e,t).querySelector(l).focus())}}),_(We,{init(e){P(f,e).forEach(e=>{var t=(e=e.closest(f)).dataset.defaultValue,r=e.querySelector("input");if(!r)throw new Error(f+" is missing inner input");r.value&&(r.value="");var s=g(e.dataset.minDate||r.getAttribute("min"));e.dataset.minDate=s?B(s):"0000-01-01",(s=g(e.dataset.maxDate||r.getAttribute("max")))&&(e.dataset.maxDate=B(s));(s=document.createElement("div")).classList.add(U);var a=r.cloneNode();a.classList.add(z),a.type="text",s.appendChild(a),s.insertAdjacentHTML("beforeend",C.escapeHTML`
    <button type="button" class="${Q}" aria-haspopup="true" aria-label="Toggle calendar"></button>
    <div class="${n}" role="dialog" aria-modal="true" hidden></div>
    <div class="usa-sr-only ${G}" role="status" aria-live="polite"></div>`),r.setAttribute("aria-hidden","true"),r.setAttribute("tabindex","-1"),r.style.display="none",r.classList.add(W),r.removeAttribute("id"),r.removeAttribute("name"),r.required=!1,e.appendChild(s),e.classList.add(V),t&&gt(e,t),r.disabled&&(ft(e),r.disabled=!1),r.hasAttribute("aria-disabled")&&(ht(e),r.removeAttribute("aria-disabled"))})},getDatePickerContext:H,disable:ft,ariaDisable:ht,enable:e=>{var{externalInputEl:e,toggleBtnEl:t}=H(e);t.disabled=!1,e.disabled=!1},isDateInputInvalid:mt,setCalendarValue:gt,validateDateInput:vt,renderCalendar:d,updateCalendarIfVisible:wt}));A.exports=F},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/active-element":44,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/is-ios-device":49,"../../uswds-core/src/js/utils/sanitizer":50,"../../uswds-core/src/js/utils/select":53,"../../uswds-core/src/js/utils/select-or-matches":52,"receptor/keymap":11}],21:[function(e,t,r){"use strict";var s=e("../../uswds-core/src/js/utils/behavior");const a=e("../../uswds-core/src/js/utils/select"),n=e("../../uswds-core/src/js/utils/select-or-matches");var i=e("../../uswds-core/src/js/config")["prefix"];const{getDatePickerContext:o,isDateInputInvalid:c,updateCalendarIfVisible:l}=e("../../usa-date-picker/src/index");e=i+"-date-range-picker";const u=e+"__range-start",d=e+"__range-end",p="."+(i+"-date-picker"),b="."+e,f="."+u,h="."+d,m=e=>{var t,r,e=e.closest(b);if(e)return t=e.querySelector(f),r=e.querySelector(h),{dateRangePickerEl:e,rangeStartEl:t,rangeEndEl:r};throw new Error("Element is missing outer "+b)},v=e=>{var{dateRangePickerEl:e,rangeStartEl:t,rangeEndEl:r}=m(e),t=o(t)["internalInputEl"],s=t.value;s&&!c(t)?(r.dataset.minDate=s,r.dataset.rangeDate=s,r.dataset.defaultDate=s):(r.dataset.minDate=e.dataset.minDate||"",r.dataset.rangeDate="",r.dataset.defaultDate=""),l(r)},g=e=>{var{dateRangePickerEl:e,rangeStartEl:t,rangeEndEl:r}=m(e),r=o(r)["internalInputEl"],s=r.value;s&&!c(r)?(t.dataset.maxDate=s,t.dataset.rangeDate=s,t.dataset.defaultDate=s):(t.dataset.maxDate=e.dataset.maxDate||"",t.dataset.rangeDate="",t.dataset.defaultDate=""),l(t)};i=s({"input change":{[f](){v(this)},[h](){g(this)}}},{init(e){n(b,e).forEach(e=>{var e=(e=e).closest(b),[t,r]=a(p,e);if(!t)throw new Error(`${b} is missing inner two '${p}' elements`);if(!r)throw new Error(`${b} is missing second '${p}' element`);t.classList.add(u),r.classList.add(d),e.dataset.minDate||(e.dataset.minDate="0000-01-01");var s=e.dataset["minDate"];(s=(t.dataset.minDate=s,r.dataset.minDate=s,e.dataset)["maxDate"])&&(t.dataset.maxDate=s,r.dataset.maxDate=s),v(e),g(e)})}});t.exports=i},{"../../usa-date-picker/src/index":20,"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/select":53,"../../uswds-core/src/js/utils/select-or-matches":52}],22:[function(e,t,I){"use strict";const r=e("../../uswds-core/src/js/utils/select-or-matches");var s=e("../../uswds-core/src/js/utils/behavior");const g=e("../../uswds-core/src/js/utils/sanitizer");e=e("../../uswds-core/src/js/config").prefix;const y=e+"-file-input",c="."+y,l=e+"-file-input__input",u=e+"-file-input__target",a="."+l,d=e+"-file-input__box",p=e+"-file-input__instructions",w=e+"-file-input__preview",o=e+"-file-input__preview-heading",b=e+"-file-input--disabled",f=e+"-file-input__choose",A=e+"-file-input__accepted-files-message",h=e+"-file-input__drag-text",n=e+"-file-input--drag",E="is-loading",x="has-invalid-file",j=e+"-file-input__preview-image",L=j+"--generic",_=j+"--pdf",S=j+"--word",C=j+"--video",D=j+"--excel",T=e+"-sr-only",$="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";let k=Boolean(!0),M="",m="";const v=e=>{var t,e=e.closest(c);if(e)return t=e.querySelector(a),{dropZoneEl:e,inputEl:t};throw new Error("Element is missing outer "+c)};const i=e=>{var t=e.charCodeAt(0);return 32===t?"-":65<=t&&t<=90?"img_"+e.toLowerCase():"__"+t.toString(16).slice(-4)},O=e=>e.replace(/[^a-z0-9]/g,i),B=e=>e+"-"+Math.floor(Date.now().toString()/1e3),q=e=>{return e.hasAttribute("multiple")?"files":"file"},H=e=>{var t,r,s,a=e.hasAttribute("aria-disabled")||e.hasAttribute("disabled"),n=(t=e,r=document.createElement("div"),i=document.createElement("div"),n=document.createElement("div"),t.classList.remove(y),t.classList.add(l),r.classList.add(y),n.classList.add(d),i.classList.add(u),i.prepend(n),t.parentNode.insertBefore(i,t),t.parentNode.insertBefore(r,i),i.appendChild(t),r.appendChild(i),i),i=(r=(t=e).closest(c),i=q(t),s=document.createElement("div"),i=`Drag ${i} here or`,o="choose from folder",M=i+" "+o,s.classList.add(p),s.setAttribute("aria-hidden","true"),t.setAttribute("aria-label",M),s.innerHTML=g.escapeHTML`<span class="${h}">${i}</span> <span class="${f}">${o}</span>`,t.parentNode.insertBefore(s,t),(/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(r.querySelector("."+h).outerHTML=""),s),o=v(e)["dropZoneEl"];return a?o.classList.add(b):(t=e,r=document.createElement("div"),s=q(t),a=t.closest(c),t=t.closest("."+u),m=`No ${s} selected.`,r.classList.add(T),r.setAttribute("aria-live","polite"),r.textContent=m,a.insertBefore(r,t)),{instructions:i,dropTarget:n}},N=(e,t)=>{var r=e.querySelectorAll("."+w),s=e.querySelector("."+o),a=e.querySelector("."+A);s&&(s.outerHTML=""),a&&(a.outerHTML="",e.classList.remove(x)),null!==r&&(t&&t.removeAttribute("hidden"),Array.prototype.forEach.call(r,e=>{e.parentNode.removeChild(e)}))},P=(e,t,r)=>{const s=e;let a=m;1===t.length?a="You have selected the file: "+r:1<t.length&&(a=`You have selected ${t.length} files: `+r.join(", ")),setTimeout(()=>{s.textContent=a},1e3)},F=(e,t)=>{var r=document.createElement("div"),s=e.closest("."+u),a=s.querySelector("."+p);let n="Change file",i="";1===t.length?i=g.escapeHTML`Selected file <span class="usa-file-input__choose">${n}</span>`:1<t.length&&(n="Change files",i=g.escapeHTML`${t.length} files selected <span class="usa-file-input__choose">${n}</span>`),a.setAttribute("hidden","true"),r.classList.add(o),r.innerHTML=i,s.insertBefore(r,a),e.setAttribute("aria-label",n)},R=(e,t,r,s)=>{var a=e,n=t,i=r,o=s,c=n.getAttribute("accept");if(o.classList.remove(x),c){var l=c.split(","),c=document.createElement("div");let t=!0;var u=a.target.files||a.dataTransfer.files;for(let e=0;e<u.length;e+=1){var d=u[e];if(!t)break;for(let e=0;e<l.length;e+=1){var p=l[e];if(t=0<d.name.indexOf(p)||((e,t)=>{let r=!1;e=e.indexOf(t);return r=0<=e?!0:r})(d.type,p.replace(/\*/g,""))){k=!0;break}}}t||(N(o,i),n.value="",o.insertBefore(c,n),c.textContent=n.dataset.errormessage||"This is not a valid file type.",c.classList.add(A),o.classList.add(x),k=!1,a.preventDefault(),a.stopPropagation())}if(!0===k){var i=t,b=r,n=s,f=(c=e).target.files,c=n.closest("."+y).querySelector("."+T),h=[];N(n,b);for(let e=0;e<f.length;e+=1){const m=new FileReader,v=f[e].name;let t;h.push(v),m.onloadstart=function(){t=B(O(v)),b.insertAdjacentHTML("afterend",g.escapeHTML`<div class="${w}" aria-hidden="true">
          <img id="${t}" src="${$}" alt="" class="${j} ${E}"/>${v}
        <div>`)},m.onloadend=function(){var e=document.getElementById(t);0<v.indexOf(".pdf")?e.setAttribute("onerror",`this.onerror=null;this.src="${$}"; this.classList.add("${_}")`):0<v.indexOf(".doc")||0<v.indexOf(".pages")?e.setAttribute("onerror",`this.onerror=null;this.src="${$}"; this.classList.add("${S}")`):0<v.indexOf(".xls")||0<v.indexOf(".numbers")?e.setAttribute("onerror",`this.onerror=null;this.src="${$}"; this.classList.add("${D}")`):0<v.indexOf(".mov")||0<v.indexOf(".mp4")?e.setAttribute("onerror",`this.onerror=null;this.src="${$}"; this.classList.add("${C}")`):e.setAttribute("onerror",`this.onerror=null;this.src="${$}"; this.classList.add("${L}")`),e.classList.remove(E),e.src=m.result},f[e]&&m.readAsDataURL(f[e])}0===f.length?i.setAttribute("aria-label",M):F(i,f),P(c,f,h)}};e=s({},{init(e){r(c,e).forEach(t=>{const{instructions:r,dropTarget:s}=H(t);s.addEventListener("dragover",function(){this.classList.add(n)},!1),s.addEventListener("dragleave",function(){this.classList.remove(n)},!1),s.addEventListener("drop",function(){this.classList.remove(n)},!1),t.addEventListener("change",e=>R(e,t,r,s),!1)})},teardown(e){r(a,e).forEach(e=>{var t=e.parentElement.parentElement;t.parentElement.replaceChild(e,t),e.className=y})},getFileInputContext:v,disable:e=>{var{dropZoneEl:e,inputEl:t}=v(e);t.disabled=!0,e.classList.add(b)},ariaDisable:e=>{e=v(e).dropZoneEl;e.classList.add(b)},enable:e=>{var{dropZoneEl:e,inputEl:t}=v(e);t.disabled=!1,e.classList.remove(b),e.removeAttribute("aria-disabled")}});t.exports=e},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/sanitizer":50,"../../uswds-core/src/js/utils/select-or-matches":52}],23:[function(e,t,r){"use strict";var s=e("../../uswds-core/src/js/utils/behavior"),a=e("../../uswds-core/src/js/events")["CLICK"];const n=e("../../uswds-core/src/js/config")["prefix"],i=`.${n}-footer--big`,o=i+" nav"+` .${n}-footer__primary-link`;function c(s){var e=document.querySelector(i);e&&e.querySelectorAll(o).forEach(e=>{var t=e.getAttribute("class"),r=e.getAttribute("data-tag")||e.tagName,r=document.createElement(s?"button":r);r.setAttribute("class",t),r.classList.toggle(n+"-footer__primary-link--button",s),r.textContent=e.textContent,s&&(r.setAttribute("data-tag",e.tagName),t=n+"-footer-menu-list-"+Math.floor(1e5*Math.random()),r.setAttribute("aria-controls",t),r.setAttribute("aria-expanded","false"),e.nextElementSibling.setAttribute("id",t),r.setAttribute("type","button")),e.after(r),e.remove()})}const l=e=>{c(e.matches)};t.exports=s({[a]:{[o]:function(){var e;window.innerWidth<480&&(e="true"===this.getAttribute("aria-expanded"),this.closest(i).querySelectorAll(o).forEach(e=>{e.setAttribute("aria-expanded",!1)}),this.setAttribute("aria-expanded",!e))}}},{HIDE_MAX_WIDTH:480,init(){c(window.innerWidth<480),this.mediaQueryList=window.matchMedia("(max-width: 479.9px)"),this.mediaQueryList.addListener(l)},teardown(){this.mediaQueryList.removeListener(l)}})},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45}],24:[function(e,t,N){"use strict";var r=e("receptor/keymap"),s=e("../../uswds-core/src/js/utils/behavior");const a=e("../../uswds-core/src/js/utils/select"),n=e("../../uswds-core/src/js/utils/toggle"),i=e("../../uswds-core/src/js/utils/focus-trap"),o=e("../../usa-accordion/src/index");var c=e("../../uswds-core/src/js/utils/scrollbar-width"),l=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];const u=`.${e}-header`,d=`.${e}-nav`;var p=`.${e}-nav-container`;const b=`.${e}-nav__primary`,f=`.${e}-nav__primary-item`,h=`button.${e}-nav__link`;var m=d+" a";const v="data-nav-hidden",g=`.${e}-menu-btn`,y=`.${e}-nav__close`;var w=y+`, .${e}-overlay`;const A=[d,`.${e}-overlay`].join(", "),E=`body *:not(${u}, ${p}, ${d}, ${d} *):not([aria-hidden])`,x=(v,"usa-js-mobile-nav--active");let j,L,_;const S=()=>document.body.classList.contains(x);e=c();const C=window.getComputedStyle(document.body).getPropertyValue("padding-right"),D=parseInt(C.replace(/px/,""),10)+parseInt(e.replace(/px/,""),10)+"px",T=()=>{const t=document.querySelector(u).parentNode;(_=document.querySelectorAll(E)).forEach(e=>{e!==t&&(e.setAttribute("aria-hidden",!0),e.setAttribute(v,""))})},$=()=>{(_=document.querySelectorAll("[data-nav-hidden]"))&&_.forEach(e=>{e.removeAttribute("aria-hidden"),e.removeAttribute(v)})};p=e=>{var t=document["body"];const r="boolean"==typeof e?e:!S();t.classList.toggle(x,r),a(A).forEach(e=>e.classList.toggle("is-visible",r)),j.focusTrap.update(r);var e=t.querySelector(y),s=document.querySelector(g);return t.style.paddingRight=t.style.paddingRight===D?C:D,(r?T:$)(),r&&e?e.focus():!r&&s&&"none"!==getComputedStyle(s).display&&s.focus(),r};const k=()=>{var e=document.body.querySelector(y);S()&&e&&0===e.getBoundingClientRect().width&&j.toggleNav.call(e,!1)},M=()=>j.toggleNav.call(j,!1),q=()=>{L&&(n(L,!1),L=null)};j=s({[l]:{[h](){return L!==this&&q(),L||(L=this,n(L,!0)),!1},body:q,[g]:p,[w]:p,[m](){var e=this.closest(o.ACCORDION);e&&o.getButtons(e).forEach(e=>o.hide(e)),S()&&j.toggleNav.call(j,!1)}},keydown:{[b]:r({Escape:e=>{var t;q(),t=(e=e).target.closest(f),e.target.matches(h)||(e=t.querySelector(h))&&e.focus()}})},focusout:{[b](e){e.target.closest(b).contains(e.relatedTarget)||q()}}},{init(e){e=e.matches(d)?e:e.querySelector(d);e&&(j.focusTrap=i(e,{Escape:M})),k(),window.addEventListener("resize",k,!1)},teardown(){window.removeEventListener("resize",k,!1),L=!1},focusTrap:null,toggleNav:p}),t.exports=j},{"../../usa-accordion/src/index":15,"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/focus-trap":47,"../../uswds-core/src/js/utils/scrollbar-width":51,"../../uswds-core/src/js/utils/select":53,"../../uswds-core/src/js/utils/toggle":56,"receptor/keymap":11}],25:[function(e,t,r){"use strict";const s=e("receptor/once");var a=e("receptor/keymap");const n=e("../../uswds-core/src/js/utils/select-or-matches");var i=e("../../uswds-core/src/js/utils/behavior"),o=e("../../uswds-core/src/js/config")["prefix"],c=e("../../uswds-core/src/js/events")["CLICK"];const l=e("../../uswds-core/src/js/utils/sanitizer"),u=o+"-current",d=0,p=o+"-in-page-nav",b=o+"-anchor",f=p+"__nav",h=p+"__list",m=p+"__item",v=p+"__link",g=p+"__heading",y=m+"--sub-item",w=e=>{const t=document.querySelectorAll("."+v);e.map(e=>!0===e.isIntersecting&&1<=e.intersectionRatio&&(t.forEach(e=>e.classList.remove(u)),document.querySelector(`a[href="#${e.target.id}"]`).classList.add(u),!0))},A=e=>{var t=document.querySelector("."+p).dataset.scrollOffset||d;window.scroll({behavior:"smooth",top:e.offsetTop-t,block:"start"}),window.location.hash.slice(1)!==e.id&&window.history.pushState(null,"","#"+e.id)},E=e=>{var t=l.escapeHTML`${e.dataset.titleText||"On this page"}`,r=l.escapeHTML`${e.dataset.titleHeadingLevel||"h4"}`,s={root:null,rootMargin:l.escapeHTML`${e.dataset.rootMargin||"0px 0px 0px 0px"}`,threshold:[l.escapeHTML`${e.dataset.threshold||"1"}`]},a=(e=>{e=document.querySelectorAll(e+` h2, ${e} h3`);return Array.from(e).filter(e=>{e=window.getComputedStyle(e);return"none"!==e.getPropertyValue("display")&&"hidden"!==e.getPropertyValue("visibility")})})(l.escapeHTML`${e.dataset.mainContentSelector||"main"}`),n=document.createElement("nav"),r=(n.setAttribute("aria-label",t),n.classList.add(f),document.createElement(r));r.classList.add(g),r.setAttribute("tabindex","0"),r.textContent=t,n.appendChild(r);const i=document.createElement("ul");i.classList.add(h),n.appendChild(i),a.forEach(e=>{var t=document.createElement("li"),r=document.createElement("a"),s=document.createElement("a"),a=e.textContent,n=e.tagName.toLowerCase(),n=(t.classList.add(m),"h3"===n&&t.classList.add(y),(e=>{var t=e.textContent.toLowerCase().replace(/[^a-z\d]/g,"-").replace(/-{2,}/g,"-").replace(/^-|-$/g,"");let r,s=0;for(;r=t,1<(s+=1)&&(r+="-"+s),document.getElementById(r););return r})(e));r.setAttribute("href","#"+n),r.setAttribute("class",v),r.textContent=a,s.setAttribute("id",n),s.setAttribute("class",b),e.insertAdjacentElement("afterbegin",s),i.appendChild(t),t.appendChild(r)}),e.appendChild(n);t=document.querySelectorAll("."+b);const o=new window.IntersectionObserver(w,s);t.forEach(e=>{o.observe(e)})};e=i({[c]:{["."+v](e){e.preventDefault(),this.disabled||(e=this,e=document.getElementById(e.hash.slice(1)),A(e))}},keydown:{["."+v]:a({Enter:e=>{e=(e=>{let t;return t=(e&&1===e.nodeType?e.getAttribute("href"):e.target.hash).replace("#","")})(e),e=document.getElementById(e);const t=e.parentElement;t&&(t.setAttribute("tabindex",0),t.focus(),t.addEventListener("blur",s(()=>{t.setAttribute("tabindex",-1)}))),A(e)}})}},{init(e){n("."+p,e).forEach(e=>{E(e),(e=window.location.hash.slice(1))&&(e=document.getElementById(e))&&A(e)})}});t.exports=e},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/sanitizer":50,"../../uswds-core/src/js/utils/select-or-matches":52,"receptor/keymap":11,"receptor/once":12}],26:[function(e,t,r){"use strict";const s=e("../../uswds-core/src/js/utils/select-or-matches");var a=e("../../uswds-core/src/js/utils/behavior"),e=e("../../uswds-core/src/js/config")["prefix"];const n="."+(e+"-masked"),i=e+"-input-mask",o=i+"--content",c="placeholder",p="_#dDmMyY9",b="A",f=(e,t)=>e?t.replace(/\W/g,""):t.replace(/\D/g,""),h=e=>!Number.isNaN(parseInt(e,10)),m=e=>!!e&&e.match(/[A-Z]/i),l=e=>{var t=e,r=t.getAttribute("id"),s=(t.value=(e=>{var t=e.dataset.charset,r=t||e.dataset.placeholder,e=e["value"],s=r.length;let a="",n,i;var o=f(t,e);for(n=0,i=0;n<s;n+=1){var c=h(o[i]),l=m(o[i]),u=0<=p.indexOf(r[n]),d=0<=b.indexOf(r[n]);if(u&&c||t&&d&&l)a+=o[i],i+=1;else{if(!t&&!c&&u||t&&(d&&!l||u&&!c))return a;a+=r[n]}if(void 0===o[i])break}return a})(t),s=(t=e).value,t=""+e.dataset.placeholder.substr(s.length),(e=document.createElement("i")).textContent=s,[e,t]),e=document.getElementById(r+"Mask");e.textContent="",e.replaceChildren(s[0],s[1])};e=a({keyup:{[n](){l(this)}}},{init(e){s(n,e).forEach(e=>{var t,r,s;(s=(e=e).getAttribute(c))&&(e.setAttribute("maxlength",s.length),e.setAttribute("data-placeholder",s),e.removeAttribute(c),(t=document.createElement("span")).classList.add(i),t.setAttribute("data-mask",s),(r=document.createElement("span")).classList.add(o),r.setAttribute("aria-hidden","true"),r.id=e.id+"Mask",r.textContent=s,t.appendChild(r),e.closest("form").insertBefore(t,e),t.appendChild(e))})}});t.exports=e},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/select-or-matches":52}],27:[function(e,t,r){"use strict";var s=e("receptor/keymap"),a=e("../../uswds-core/src/js/utils/behavior");const n=e("../../uswds-core/src/js/utils/toggle"),i=e("../../uswds-core/src/js/utils/focus-trap"),o=e("../../usa-accordion/src/index");var c=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];const l=`.${e}-language__submenu`,u=`.${e}-language__primary`,d=`.${e}-language__primary-item`,p=`button.${e}-language__link`;let b,f;const h=()=>b.toggleLanguage.call(b,!1),m=()=>{f&&(n(f,!1),f=null)};b=a({[c]:{[p](){return f!==this&&m(),f===this?m():f||(f=this,n(f,!0)),!1},body:m,[`.${e}-language`+" a"](){var e=this.closest(o.ACCORDION);e&&o.getButtons(e).forEach(e=>o.hide(e))}},keydown:{[u]:s({Escape:e=>{var t;m(),t=(e=e).target.closest(d),e.target.matches(p)||t.querySelector(p).focus()}})},focusout:{[u](e){e.target.closest(u).contains(e.relatedTarget)||m()}}},{init(e){e=e.matches(l)?e:e.querySelector(l);e&&(b.focusTrap=i(e,{Escape:h}))},teardown(){f=!1},focusTrap:null}),t.exports=b},{"../../usa-accordion/src/index":15,"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/focus-trap":47,"../../uswds-core/src/js/utils/toggle":56,"receptor/keymap":11}],28:[function(e,t,r){"use strict";const s=e("../../uswds-core/src/js/utils/select-or-matches"),u=e("../../uswds-core/src/js/utils/focus-trap");var a=e("../../uswds-core/src/js/utils/scrollbar-width"),e=e("../../uswds-core/src/js/config")["prefix"];const d=e+"-modal",p=d+"-overlay",b=d+"-wrapper",f="data-open-modal",h="data-close-modal",m="data-force-action",v="data-modal-hidden",n="."+d,g=`.${b} *[data-focus]`,y=b+` *[${h}]`,w=(f,y+`, .${p}:not([${m}])`),A=`body > *:not(.${b}):not([aria-hidden])`,E=(v,"usa-js-modal--active"),x="is-hidden";let j;e=a();const L=window.getComputedStyle(document.body).getPropertyValue("padding-right"),_=parseInt(L.replace(/px/,""),10)+parseInt(e.replace(/px/,""),10)+"px",S=()=>{j.toggleModal.call(j,!1)};function C(e){let t,r=e.target;var s,a,n,i,o=document["body"],c=!document.body.classList.contains(E),l=r?r.getAttribute("aria-controls"):document.querySelector(".usa-modal-wrapper.is-visible"),l=c?document.getElementById(l):document.querySelector(".usa-modal-wrapper.is-visible");return!(!l||(s=l.querySelector(g)?l.querySelector(g):l.querySelector(".usa-modal"),a=document.getElementById(l.getAttribute("data-opener")),n=o.querySelector("*[data-open-modal][aria-controls]"),i=l.getAttribute(m),(r="keydown"===e.type&&null!==l?l.querySelector(y):r)&&(r.hasAttribute(f)&&(null===this.getAttribute("id")?(t="modal-"+(Math.floor(9e5*Math.random())+1e5),this.setAttribute("id",t)):t=this.getAttribute("id"),l.setAttribute("data-opener",t)),r.closest("."+d))&&!r.hasAttribute(h)&&!r.closest(`[${h}]`)))&&(o.classList.toggle(E,c),l.classList.toggle("is-visible",c),l.classList.toggle(x,!c),i&&o.classList.toggle("usa-js-no-click",c),o.style.paddingRight=o.style.paddingRight===_?L:_,c&&s?(j.focusTrap=i?u(l):u(l,{Escape:S}),j.focusTrap.update(c),s.focus(),document.querySelectorAll(A).forEach(e=>{e.setAttribute("aria-hidden","true"),e.setAttribute(v,"")})):!c&&n&&a&&(document.querySelectorAll("[data-modal-hidden]").forEach(e=>{e.removeAttribute("aria-hidden"),e.removeAttribute(v)}),a.focus(),j.focusTrap.update(c)),c)}j={init(e){s(n,e).forEach(e=>{var t=e.id;{var r=e,s=document.createElement("div"),a=document.createElement("div");const u=e.getAttribute("id");var n=e.getAttribute("aria-labelledby"),i=e.getAttribute("aria-describedby"),o=!!e.hasAttribute(m)&&e.hasAttribute(m),c=document.createElement("div");c.setAttribute("data-placeholder-for",u),c.style.display="none",c.setAttribute("aria-hidden","true");for(let e=0;e<r.attributes.length;e+=1){var l=r.attributes[e];c.setAttribute("data-original-"+l.name,l.value)}r.after(c),r.parentNode.insertBefore(s,r),s.appendChild(r),r.parentNode.insertBefore(a,r),a.appendChild(r),s.classList.add(x),s.classList.add(b),a.classList.add(p),s.setAttribute("role","dialog"),s.setAttribute("id",u),n&&s.setAttribute("aria-labelledby",n),i&&s.setAttribute("aria-describedby",i),o&&s.setAttribute(m,"true"),e.removeAttribute("id"),e.removeAttribute("aria-labelledby"),e.removeAttribute("aria-describedby"),e.setAttribute("tabindex","-1"),s.querySelectorAll(w).forEach(e=>{e.setAttribute("aria-controls",u)}),document.body.appendChild(s)}document.querySelectorAll(`[aria-controls="${t}"]`).forEach(e=>{"A"===e.nodeName&&(e.setAttribute("role","button"),e.addEventListener("click",e=>e.preventDefault())),e.addEventListener("click",C)})})},teardown(e){s(n,e).forEach(e=>{var t=e,r=t,s=(t=r.parentElement.parentElement).getAttribute("id"),a=document.querySelector(`[data-placeholder-for="${s}"]`);if(a){for(let e=0;e<a.attributes.length;e+=1){var n=a.attributes[e];n.name.startsWith("data-original-")&&r.setAttribute(n.name.substr(14),n.value)}a.after(r),a.parentElement.removeChild(a)}t.parentElement.removeChild(t);s=e.id;document.querySelectorAll(`[aria-controls="${s}"]`).forEach(e=>e.removeEventListener("click",C))})},focusTrap:null,toggleModal:C,on(e){this.init(e)},off(e){this.teardown(e)}},t.exports=j},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/focus-trap":47,"../../uswds-core/src/js/utils/scrollbar-width":51,"../../uswds-core/src/js/utils/select-or-matches":52}],29:[function(e,t,r){"use strict";const a=e("receptor/ignore");var s=e("../../uswds-core/src/js/utils/behavior");const n=e("../../uswds-core/src/js/utils/select"),i=e("../../uswds-core/src/js/events")["CLICK"],o=".js-search-button",c=".js-search-form",l="[type=search]",u="header";let d;const p=e=>{e=e.closest(u);return(e||document).querySelector(c)},b=(e,t)=>{var r=p(e);if(!r)throw new Error(`No ${c} found for search toggle in ${u}!`);if(e.hidden=t,r.hidden=!t,t){e=r.querySelector(l);e&&e.focus();const s=a(r,()=>{d&&!function(){b(this,!1),d=void 0}.call(d),document.body.removeEventListener(i,s)});setTimeout(()=>{document.body.addEventListener(i,s)},0)}};e=s({[i]:{".js-search-button":function(){b(this,!0),d=this}}},{init(e){n(o,e).forEach(e=>{b(e,!1)})},teardown(){d=void 0}});t.exports=e},{"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/select":53,"receptor/ignore":9}],30:[function(e,t,r){"use strict";const s=e("receptor/once");var a=e("../../uswds-core/src/js/utils/behavior"),n=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];t.exports=a({[n]:{[`.${e}-skipnav[href^="#"], .${e}-footer__return-to-top [href^="#"]`]:function(){var e=encodeURI(this.getAttribute("href"));const t=document.getElementById("#"===e?"main-content":e.slice(1));t&&(t.style.outline="0",t.setAttribute("tabindex",0),t.focus(),t.addEventListener("blur",s(()=>{t.setAttribute("tabindex",-1)})))}}})},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"receptor/once":12}],31:[function(e,t,r){"use strict";const o=e("../../uswds-core/src/js/utils/select");var s=e("../../uswds-core/src/js/utils/behavior"),a=e("../../uswds-core/src/js/events")["CLICK"];const n=e("../../uswds-core/src/js/config")["prefix"],i=e("../../uswds-core/src/js/utils/sanitizer"),c=`.${n}-table`,l="aria-sort",u="ascending",d="descending",p=n+"-table__header__button",b="."+p,f="th[data-sortable]",h=`.${n}-table__announcement-region[aria-live="polite"]`,m=(e,t)=>e.children[t].getAttribute("data-sort-value")||e.children[t].innerText||e.children[t].textContent,v=(s,a)=>(e,t)=>{var r=m(a?e:t,s),t=m(a?t:e,s);return r&&t&&!Number.isNaN(Number(r))&&!Number.isNaN(Number(t))?r-t:r.toString().localeCompare(t,navigator.language,{numeric:!0,ignorePunctuation:!0})},g=e=>{var t=e.innerText,r=e.getAttribute(l)===u,s=t+", sortable column, currently "+(e.getAttribute(l)===u||e.getAttribute(l)===d||!1?r?"sorted "+u:"sorted "+d:"unsorted"),t=`Click to sort by ${t} in ${r?d:u} order.`;e.setAttribute("aria-label",s),e.querySelector(b).setAttribute("title",t)},y=(t,e)=>{var r,s=t.closest(c);let a=e;if("boolean"!=typeof a&&(a=t.getAttribute(l)===u),!s)throw new Error(f+" is missing outer "+c);if(a=((e,t)=>{e.setAttribute(l,!0===t?d:u),g(e);const r=e.closest(c).querySelector("tbody");var s=[].slice.call(r.querySelectorAll("tr"));const a=[].slice.call(e.parentNode.children).indexOf(e);return s.sort(v(a,!t)).forEach(e=>{[].slice.call(e.children).forEach(e=>e.removeAttribute("data-sort-active")),e.children[a].setAttribute("data-sort-active",!0),r.appendChild(e)}),!0})(t,e)){r=s,o(f,r).filter(e=>e.closest(c)===r).forEach(e=>{e!==t&&((e=e).removeAttribute(l),g(e))});var e=s,s=t,n=e.querySelector("caption").innerText,i=s.getAttribute(l)===u,s=s.innerText;if(!(e=e.nextElementSibling)||!e.matches(h))throw new Error("Table containing a sortable column header is not followed by an aria-live region.");n=`The table named "${n}" is now sorted by ${s} in ${i?u:d} order.`,e.innerText=n}};e=s({[a]:{[b](e){e.preventDefault(),y(e.target.closest(f),e.target.closest(f).getAttribute(l)===u)}}},{init(e){var t,e=o(f,e),e=(e.forEach(e=>{return e=e,(t=document.createElement("button")).setAttribute("tabindex","0"),t.classList.add(p),t.innerHTML=i.escapeHTML`
  <svg class="${n}-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g class="descending" fill="transparent">
      <path d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z" />
    </g>
    <g class="ascending" fill="transparent">
      <path transform="rotate(180, 12, 12)" d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z" />
    </g>
    <g class="unsorted" fill="transparent">
      <polygon points="15.17 15 13 17.17 13 6.83 15.17 9 16.58 7.59 12 3 7.41 7.59 8.83 9 11 6.83 11 17.17 8.83 15 7.42 16.41 12 21 16.59 16.41 15.17 15"/>
    </g>
  </svg>
  `,e.appendChild(t),void g(e);var t}),e.filter(e=>e.getAttribute(l)===u||e.getAttribute(l)===d)[0]);void 0!==e&&((t=e.getAttribute(l))===u?y(e,!0):t===d&&y(e,!1))},TABLE:c,SORTABLE_HEADER:f,SORT_BUTTON:b});t.exports=e},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/sanitizer":50,"../../uswds-core/src/js/utils/select":53}],32:[function(e,t,r){"use strict";var s=e("../../uswds-core/src/js/utils/behavior");const a=e("../../uswds-core/src/js/utils/select-or-matches");var n=e("../../uswds-core/src/js/config")["prefix"];const{COMBO_BOX_CLASS:f,enhanceComboBox:i}=e("../../usa-combo-box/src/index"),h="."+(n+"-time-picker"),m={filter:"0?{{ hourQueryFilter }}:{{minuteQueryFilter}}.*{{ apQueryFilter }}m?",apQueryFilter:"([ap])",hourQueryFilter:"([1-9][0-2]?)",minuteQueryFilter:"[\\d]+:([0-9]{0,2})"},v=e=>{let t;var r;return t=e&&([e,r]=e.split(":").map(e=>{let t;e=parseInt(e,10);return t=Number.isNaN(e)?t:e}),null!=e)&&null!=r?60*e+r:t},o=t=>{const r=t.closest(h),s=r.querySelector("input");if(!s)throw new Error(h+" is missing inner input");const a=document.createElement("select");["id","name","required","aria-label","aria-labelledby","disabled","aria-disabled"].forEach(e=>{var t;s.hasAttribute(e)&&(t=s.getAttribute(e),a.setAttribute(e,t),s.removeAttribute(e))});var n=(e,t)=>("0000"+e).slice(-t),t=Math.max(0,v(r.dataset.minTime)||0),i=Math.min(1439,v(r.dataset.maxTime)||1439),o=Math.floor(Math.max(1,r.dataset.step||30));let c;for(let e=t;e<=i;e+=o){u=e,l=void 0,l=u%60,u=Math.floor(u/60);var{minute:l,hour24:u,hour12:d,ampm:p}={minute:l,hour24:u,hour12:u%12||12,ampm:u<12?"am":"pm"},b=document.createElement("option");b.value=n(u,2)+":"+n(l,2),b.text=d+":"+n(l,2)+p,b.text===s.value&&(c=b.value),a.appendChild(b)}r.classList.add(f),Object.keys(m).forEach(e=>{r.dataset[e]=m[e]}),r.dataset.disableFiltering="true",r.dataset.defaultValue=c,r.appendChild(a),s.remove()};e=s({},{init(e){a(h,e).forEach(e=>{o(e),i(e)})},FILTER_DATASET:m});t.exports=e},{"../../usa-combo-box/src/index":19,"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/select-or-matches":52}],33:[function(e,t,r){"use strict";const s=e("../../uswds-core/src/js/utils/select-or-matches");var a=e("../../uswds-core/src/js/utils/behavior"),n=e("../../uswds-core/src/js/config")["prefix"];const b=e("../../uswds-core/src/js/utils/is-in-viewport"),i=`.${n}-tooltip`;e=`.${n}-tooltip__trigger`;const o=n+"-tooltip__trigger",c=n+"-tooltip",f=n+"-tooltip__body",h="is-visible",m=n+"-tooltip__body--wrap",l=e=>{var t=e.parentNode,r=t.querySelector("."+f);return{trigger:e,wrapper:t,body:r}},u=(t,s,e)=>{t.setAttribute("aria-hidden","false"),t.classList.add("is-set");const a=e=>{t.classList.remove(f+"--top"),t.classList.remove(f+"--bottom"),t.classList.remove(f+"--right"),t.classList.remove(f+"--left"),t.classList.add(f+"--"+e)},n=e=>{e.style.top=null,e.style.bottom=null,e.style.right=null,e.style.left=null,e.style.margin=null},i=(e,t)=>parseInt(window.getComputedStyle(e).getPropertyValue(t),10),o=(e,t,r)=>{return 0<i(r,"margin-"+e)?t-i(r,"margin-"+e):t},c=e=>{n(e);var t=o("top",e.offsetHeight,s),r=o("left",e.offsetWidth,s);a("top"),e.style.left="50%",e.style.top="-5px",e.style.margin=`-${t}px 0 0 -${r/2}px`},l=e=>{n(e);var t=o("left",e.offsetWidth,s);a("bottom"),e.style.left="50%",e.style.margin=`5px 0 0 -${t/2}px`},u=e=>{n(e);var t=o("top",e.offsetHeight,s);a("right"),e.style.top="50%",e.style.left=s.offsetLeft+s.offsetWidth+5+"px",e.style.margin=`-${t/2}px 0 0 0`},d=e=>{n(e);var t=o("top",e.offsetHeight,s),r=o("left",s.offsetLeft>e.offsetWidth?s.offsetLeft-e.offsetWidth:e.offsetWidth,s);a("left"),e.style.top="50%",e.style.left="-5px",e.style.margin=`-${t/2}px 0 0 ${s.offsetLeft>e.offsetWidth?r:-r}px`};function p(r,e){e=1<arguments.length&&void 0!==e?e:1;const s=[c,l,u,d];let a=!1;!function e(t){t<s.length&&((0,s[t])(r),b(r)?a=!0:e(t+=1))}(0),a||(r.classList.add(m),e<=2&&p(r,e+=1))}switch(e){case"top":c(t),b(t)||p(t);break;case"bottom":l(t),b(t)||p(t);break;case"right":u(t),b(t)||p(t);break;case"left":d(t),b(t)||p(t)}setTimeout(()=>{t.classList.add(h)},20)},d=e=>{e.classList.remove(h),e.classList.remove("is-set"),e.classList.remove(m),e.setAttribute("aria-hidden","true")},p=e=>{var t="tooltip-"+(Math.floor(9e5*Math.random())+1e5),r=e.getAttribute("title");const s=document.createElement("span");var a=document.createElement("span"),n=e.getAttribute("data-classes");let i=e.getAttribute("data-position");return i||(i="top",e.setAttribute("data-position",i)),e.setAttribute("aria-describedby",t),e.setAttribute("tabindex","0"),e.removeAttribute("title"),e.classList.remove(c),e.classList.add(o),e.parentNode.insertBefore(s,e),s.appendChild(e),s.classList.add(c),s.appendChild(a),n&&n.split(" ").forEach(e=>s.classList.add(e)),a.classList.add(f),a.setAttribute("id",t),a.setAttribute("role","tooltip"),a.setAttribute("aria-hidden","true"),a.textContent=r,{tooltipBody:a,position:i,tooltipContent:r,wrapper:s}};n=a({"mouseover focusin":{[i](e){e=e.target;"BUTTON"===e.nodeName&&e.hasAttribute("title")&&p(e)},[e](e){var{trigger:e,body:t}=l(e.target);u(t,e,e.dataset.position)}},"mouseout focusout":{[e](e){e=l(e.target).body;d(e)}}},{init(e){s(i,e).forEach(e=>{p(e)})},setup:p,getTooltipElements:l,show:u,hide:d});t.exports=n},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/is-in-viewport":48,"../../uswds-core/src/js/utils/select-or-matches":52}],34:[function(e,t,r){"use strict";var s=e("../../uswds-core/src/js/utils/behavior");const a=e("../../uswds-core/src/js/utils/validate-input");var n=e("../../uswds-core/src/js/config")["prefix"];const i=e("../../uswds-core/src/js/utils/select-or-matches"),o="input[data-validation-element]",c=`.${n}-checklist__item`,l=e=>{var t,s,r,a;a=(t=e).parentNode,r=t.getAttribute("id")+"-sr-summary",t.setAttribute("aria-describedby",r),(t=document.createElement("span")).setAttribute("data-validation-status",""),t.classList.add("usa-sr-only"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-atomic",!0),t.setAttribute("id",r),a.append(t),r=(s=e).parentNode.querySelectorAll(c),a=s.getAttribute("data-validation-element"),s.setAttribute("aria-controls",a),r.forEach(e=>{let t="status incomplete";s.hasAttribute("data-validation-incomplete")&&(t=s.getAttribute("data-validation-incomplete"));var r=`${e.textContent} ${t} `;e.setAttribute("tabindex","0"),e.setAttribute("aria-label",r)})};e=s({"input change":{"input[data-validation-element]"(e){e=e.target,a(e)}}},{init(e){i(o,e).forEach(e=>l(e))}});t.exports=e},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/select-or-matches":52,"../../uswds-core/src/js/utils/validate-input":57}],35:[function(e,t,r){"use strict";t.exports={prefix:"usa"}},{}],36:[function(e,t,r){"use strict";t.exports={CLICK:"click"}},{}],37:[function(e,t,r){"use strict";var s=e("../../../usa-accordion/src/index"),a=e("../../../usa-banner/src/index"),n=e("../../../usa-button/src/index"),i=e("../../../usa-character-count/src/index"),o=e("../../../usa-combo-box/src/index"),c=e("../../../usa-date-picker/src/index"),l=e("../../../usa-date-range-picker/src/index"),u=e("../../../usa-file-input/src/index"),d=e("../../../usa-footer/src/index"),p=e("../../../usa-in-page-navigation/src/index"),b=e("../../../usa-input-mask/src/index"),f=e("../../../usa-language-selector/src/index"),h=e("../../../usa-modal/src/index"),m=e("../../../usa-header/src/index"),v=e("../../../_usa-password/src/index"),g=e("../../../usa-search/src/index"),y=e("../../../usa-skipnav/src/index"),w=e("../../../usa-table/src/index"),A=e("../../../usa-time-picker/src/index"),E=e("../../../usa-tooltip/src/index"),e=e("../../../usa-validation/src/index");t.exports={accordion:s,banner:a,button:n,characterCount:i,comboBox:o,datePicker:c,dateRangePicker:l,fileInput:u,footer:d,inPageNavigation:p,inputMask:b,languageSelector:f,modal:h,navigation:m,password:v,search:g,skipnav:y,table:w,timePicker:A,tooltip:E,validator:e}},{"../../../_usa-password/src/index":14,"../../../usa-accordion/src/index":15,"../../../usa-banner/src/index":16,"../../../usa-button/src/index":17,"../../../usa-character-count/src/index":18,"../../../usa-combo-box/src/index":19,"../../../usa-date-picker/src/index":20,"../../../usa-date-range-picker/src/index":21,"../../../usa-file-input/src/index":22,"../../../usa-footer/src/index":23,"../../../usa-header/src/index":24,"../../../usa-in-page-navigation/src/index":25,"../../../usa-input-mask/src/index":26,"../../../usa-language-selector/src/index":27,"../../../usa-modal/src/index":28,"../../../usa-search/src/index":29,"../../../usa-skipnav/src/index":30,"../../../usa-table/src/index":31,"../../../usa-time-picker/src/index":32,"../../../usa-tooltip/src/index":33,"../../../usa-validation/src/index":34}],38:[function(e,t,r){"use strict";"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(e,t){var t=t||{bubbles:!1,cancelable:!1,detail:null},r=document.createEvent("CustomEvent");return r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r})},{}],39:[function(e,t,r){"use strict";var s=window.HTMLElement.prototype;const a="hidden";a in s||Object.defineProperty(s,a,{get(){return this.hasAttribute(a)},set(e){e?this.setAttribute(a,""):this.removeAttribute(a)}})},{}],40:[function(e,t,r){"use strict";e("classlist-polyfill"),e("./element-hidden"),e("./number-is-nan"),e("./custom-event"),e("./svg4everybody")},{"./custom-event":38,"./element-hidden":39,"./number-is-nan":41,"./svg4everybody":42,"classlist-polyfill":1}],41:[function(e,t,r){"use strict";Number.isNaN=Number.isNaN||function(e){return"number"==typeof e&&e!=e}},{}],42:[function(e,t,r){"use strict";function f(e,t,r,s){if(r){var a=document.createDocumentFragment(),n=!t.hasAttribute("viewBox")&&r.getAttribute("viewBox");n&&t.setAttribute("viewBox",n);for(var i=document.importNode?document.importNode(r,!0):r.cloneNode(!0),o=document.createElementNS(t.namespaceURI||"http://www.w3.org/2000/svg","g");i.childNodes.length;)o.appendChild(i.firstChild);if(s)for(var c=0;s.attributes.length>c;c++){var l=s.attributes[c];"xlink:href"!==l.name&&"href"!==l.name&&o.setAttribute(l.name,l.value)}a.appendChild(o),e.appendChild(a)}}t.exports=function(e){var c,l=Object(e),e=window.top!==window.self,u=(c="polyfill"in l?l.polyfill:/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537||/\bEdge\/.(\d+)\b/.test(navigator.userAgent)&&e,{}),d=window.requestAnimationFrame||setTimeout,p=document.getElementsByTagName("use"),b=0;c&&function e(){if(!(b&&p.length-b<=0))for(var t=b=0;t<p.length;){var r,s,a=p[t],n=a.parentNode,i=function(e){for(var t=e;"svg"!==t.nodeName.toLowerCase()&&(t=t.parentNode););return t}(n),o=a.getAttribute("xlink:href")||a.getAttribute("href");!o&&l.attributeName&&(o=a.getAttribute(l.attributeName)),i&&o?c&&(!l.validate||l.validate(o,i,a)?(n.removeChild(a),r=(o=o.split("#")).shift(),o=o.join("#"),r.length?((s=u[r])||((s=u[r]=new XMLHttpRequest).open("GET",r),s.send(),s._embeds=[]),s._embeds.push({parent:n,svg:i,id:o}),function(s,a){s.onreadystatechange=function(){var r;4===s.readyState&&((r=s._cachedDocument)||((r=s._cachedDocument=document.implementation.createHTMLDocument("")).body.innerHTML=s.responseText,r.domain!==document.domain&&(r.domain=document.domain),s._cachedTarget={}),s._embeds.splice(0).map(function(e){var t=(t=s._cachedTarget[e.id])||(s._cachedTarget[e.id]=r.getElementById(e.id));f(e.parent,e.svg,t,a)}))},s.onreadystatechange()}(s,a)):f(n,i,document.getElementById(o),a)):(++t,++b)):++t}d(e,67)}()}},{}],43:[function(e,t,r){"use strict";window.uswdsPresent=!0,e("./polyfills");var s=e("./config");const a=e("./index"),n=e("./polyfills/svg4everybody");s.components=a;e=()=>{const t=document.body;Object.keys(a).forEach(e=>{a[e].on(t)}),n()};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e,{once:!0}):e(),r.default=s,r.initComponents=e},{"./config":35,"./index":37,"./polyfills":40,"./polyfills/svg4everybody":42}],44:[function(e,t,r){"use strict";t.exports=function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:document).activeElement}},{}],45:[function(e,t,r){"use strict";function s(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){let t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.body;r.forEach(e=>{"function"==typeof this[e]&&this[e].call(this,t)})}}const a=e("object-assign"),n=e("receptor/behavior");t.exports=(e,t)=>n(e,a({on:s("init","add"),off:s("teardown","remove")},t))},{"object-assign":4,"receptor/behavior":5}],46:[function(e,t,r){"use strict";t.exports=function(s){var a=this;let n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:500,i=null;return function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];window.clearTimeout(i),i=window.setTimeout(()=>{s.apply(a,t)},n)}}},{}],47:[function(e,t,r){"use strict";const a=e("object-assign"),n=e("receptor")["keymap"],i=e("./behavior"),o=e("./select"),c=e("./active-element"),l=e=>{const t=o('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',e),r=t[0],s=t[t.length-1];return{firstTabStop:r,lastTabStop:s,tabAhead:function(e){c()===s&&(e.preventDefault(),r.focus())},tabBack:function(e){c()===r?(e.preventDefault(),s.focus()):t.includes(c())||(e.preventDefault(),r.focus())}}};t.exports=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};const r=l(e);var{Esc:e,Escape:s}=t,e=(s&&!e&&(t.Esc=s),n(a({Tab:r.tabAhead,"Shift+Tab":r.tabBack},t)));return i({keydown:e},{init(){r.firstTabStop&&r.firstTabStop.focus()},update(e){e?this.on():this.off()}})}},{"./active-element":44,"./behavior":45,"./select":53,"object-assign":4,receptor:10}],48:[function(e,t,r){"use strict";t.exports=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:window,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document.documentElement,e=e.getBoundingClientRect();return 0<=e.top&&0<=e.left&&e.bottom<=(t.innerHeight||r.clientHeight)&&e.right<=(t.innerWidth||r.clientWidth)}},{}],49:[function(e,t,r){"use strict";t.exports=function(){return"undefined"!=typeof navigator&&(navigator.userAgent.match(/(iPod|iPhone|iPad)/g)||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints)&&!window.MSStream}},{}],50:[function(e,t,r){"use strict";t.exports=function(){"use strict";var n={_entity:/[&<>"'/]/g,_entities:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;","/":"&#x2F;"},getEntity:function(e){return n._entities[e]},escapeHTML:function(e){var t="";for(var r=0;r<e.length;r++){t+=e[r];if(r+1<arguments.length){var s=arguments[r+1]||"";t+=String(s).replace(n._entity,n.getEntity)}}return t},createSafeHTML:function(e){var t=arguments.length;var r=new Array(t>1?t-1:0);for(var s=1;s<t;s++)r[s-1]=arguments[s];var a=n.escapeHTML.apply(n,[e].concat(r));return{__html:a,toString:function(){return"[object WrappedHTMLObject]"},info:"This is a wrapped HTML object. See https://developer.mozilla.or"+"g/en-US/Firefox_OS/Security/Security_Automation for more."}},unwrapSafeHTML:function(){var e=arguments.length;var t=new Array(e);for(var r=0;r<e;r++)t[r]=arguments[r];var s=t.map(function(e){return e.__html});return s.join("")}};return n}()},{}],51:[function(e,t,r){"use strict";t.exports=function(){var e=document.createElement("div"),t=(e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",document.body.appendChild(e),document.createElement("div")),t=(e.appendChild(t),e.offsetWidth-t.offsetWidth+"px");return e.parentNode.removeChild(e),t}},{}],52:[function(e,t,r){"use strict";const a=e("./select");t.exports=(e,t)=>{var r,s=a(e,t);return"string"==typeof e&&(r=t)&&"object"==typeof r&&1===r.nodeType&&t.matches(e)&&s.push(t),s}},{"./select":53}],53:[function(e,t,r){"use strict";t.exports=(e,t)=>{var r;return"string"!=typeof e?[]:(r=(t=t&&(r=t)&&"object"==typeof r&&1===r.nodeType?t:window.document).querySelectorAll(e),Array.prototype.slice.call(r))}},{}],54:[function(e,t,r){"use strict";t.exports=(e,t)=>{e.setAttribute("autocapitalize","off"),e.setAttribute("autocorrect","off"),e.setAttribute("type",t?"password":"text")}},{}],55:[function(e,t,r){"use strict";const a=e("resolve-id-refs"),n=e("./toggle-field-mask"),i="aria-pressed",o="data-show-text";t.exports=e=>{const t=e.hasAttribute(i)&&"true"!==e.getAttribute(i);a(e.getAttribute("aria-controls")).forEach(e=>n(e,t)),e.hasAttribute(o)||e.setAttribute(o,e.textContent);var r=e.getAttribute(o),s=e.getAttribute("data-hide-text")||r.replace(/\bShow\b/i,e=>`${"S"===e[0]?"H":"h"}ide`);return e.textContent=t?r:s,e.setAttribute(i,t),t}},{"./toggle-field-mask":54,"resolve-id-refs":13}],56:[function(e,t,r){"use strict";const s="aria-expanded";t.exports=(e,t)=>{let r=t;"boolean"!=typeof r&&(r="false"===e.getAttribute(s)),e.setAttribute(s,r);t=e.getAttribute("aria-controls"),e=document.getElementById(t);if(e)return r?e.removeAttribute("hidden"):e.setAttribute("hidden",""),r;throw new Error(`No toggle target found with id: "${t}"`)}},{}],57:[function(e,t,r){"use strict";const c=e("./debounce");e=e("../config").prefix;const l=e+"-checklist__item--checked";t.exports=function(n){var e=n.dataset.validationElement;const i="#"===e.charAt(0)?document.querySelector(e):document.getElementById(e);if(!i)throw new Error(`No validation element found with id: "${e}"`);let o="";Object.entries(n.dataset).forEach(t=>{var[t,r]=t;if(t.startsWith("validate")){var t=t.substr("validate".length).toLowerCase(),r=new RegExp(r),s=`[data-validator="${t}"]`,s=i.querySelector(s);const a=n.parentNode.querySelector("[data-validation-status]");r=r.test(n.value);if(s.classList.toggle(l,r),!s)throw new Error(`No validator checkbox found for: "${t}"`);r=n.dataset.validationComplete||"status complete",t=n.dataset.validationIncomplete||"status incomplete";let e=s.textContent+" ";s.classList.contains(l)?e+=r:e+=t,s.setAttribute("aria-label",e),o+=e+". ",c(()=>{a.textContent=o},1e3)()}})}},{"../config":35,"./debounce":46}]},{},[43]);

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, drupalSettings) {
  Drupal.behaviors.activeLinks = {
    attach: function attach(context) {
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? "[data-drupal-link-query='".concat(queryString, "']") : ':not([data-drupal-link-query])';
      var originalSelectors = ["[data-drupal-link-system-path=\"".concat(path.currentPath, "\"]")];
      var selectors;
      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }
      selectors = [].concat(originalSelectors.map(function (selector) {
        return "".concat(selector, ":not([hreflang])");
      }), originalSelectors.map(function (selector) {
        return "".concat(selector, "[hreflang=\"").concat(path.currentLanguage, "\"]");
      }));
      selectors = selectors.map(function (current) {
        return current + querySelector;
      });
      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;
      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;
        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };
})(Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  function DropButton(dropbutton, settings) {
    var options = $.extend({
      title: Drupal.t('List additional actions')
    }, settings);
    var $dropbutton = $(dropbutton);
    this.$dropbutton = $dropbutton;
    this.$list = $dropbutton.find('.dropbutton');
    this.$actions = this.$list.find('li').addClass('dropbutton-action');
    if (this.$actions.length > 1) {
      var $primary = this.$actions.slice(0, 1);
      var $secondary = this.$actions.slice(1);
      $secondary.addClass('secondary-action');
      $primary.after(Drupal.theme('dropbuttonToggle', options));
      this.$dropbutton.addClass('dropbutton-multiple').on({
        'mouseleave.dropbutton': $.proxy(this.hoverOut, this),
        'mouseenter.dropbutton': $.proxy(this.hoverIn, this),
        'focusout.dropbutton': $.proxy(this.focusOut, this),
        'focusin.dropbutton': $.proxy(this.focusIn, this)
      });
    } else {
      this.$dropbutton.addClass('dropbutton-single');
    }
  }
  function dropbuttonClickHandler(e) {
    e.preventDefault();
    $(e.target).closest('.dropbutton-wrapper').toggleClass('open');
  }
  Drupal.behaviors.dropButton = {
    attach: function attach(context, settings) {
      var dropbuttons = once('dropbutton', '.dropbutton-wrapper', context);
      if (dropbuttons.length) {
        var body = once('dropbutton-click', 'body');
        if (body.length) {
          $(body).on('click', '.dropbutton-toggle', dropbuttonClickHandler);
        }
        dropbuttons.forEach(function (dropbutton) {
          DropButton.dropbuttons.push(new DropButton(dropbutton, settings.dropbutton));
        });
      }
    }
  };
  $.extend(DropButton, {
    dropbuttons: []
  });
  $.extend(DropButton.prototype, {
    toggle: function toggle(show) {
      var isBool = typeof show === 'boolean';
      show = isBool ? show : !this.$dropbutton.hasClass('open');
      this.$dropbutton.toggleClass('open', show);
    },
    hoverIn: function hoverIn() {
      if (this.timerID) {
        window.clearTimeout(this.timerID);
      }
    },
    hoverOut: function hoverOut() {
      this.timerID = window.setTimeout($.proxy(this, 'close'), 500);
    },
    open: function open() {
      this.toggle(true);
    },
    close: function close() {
      this.toggle(false);
    },
    focusOut: function focusOut(e) {
      this.hoverOut.call(this, e);
    },
    focusIn: function focusIn(e) {
      this.hoverIn.call(this, e);
    }
  });
  $.extend(Drupal.theme, {
    dropbuttonToggle: function dropbuttonToggle(options) {
      return "<li class=\"dropbutton-toggle\"><button type=\"button\"><span class=\"dropbutton-arrow\"><span class=\"visually-hidden\">".concat(options.title, "</span></span></button></li>");
    }
  });
  Drupal.DropButton = DropButton;
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, debounce) {
  var liveElement;
  var announcements = [];
  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };
  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement;
    var il = announcements.length;
    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);
      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }
    if (text.length) {
      liveElement.innerHTML = '';
      liveElement.setAttribute('aria-busy', 'true');
      liveElement.setAttribute('aria-live', priority);
      liveElement.innerHTML = text.join('\n');
      liveElement.setAttribute('aria-busy', 'false');
    }
  }
  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority
    });
    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings) {
  var activeItem = Drupal.url(drupalSettings.path.currentPath);
  $.fn.drupalToolbarMenu = function () {
    var ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse')
    };
    function toggleList($item, switcher) {
      var $toggle = $item.children('.toolbar-box').children('.toolbar-handle');
      switcher = typeof switcher !== 'undefined' ? switcher : !$item.hasClass('open');
      $item.toggleClass('open', switcher);
      $toggle.toggleClass('open', switcher);
      $toggle.find('.action').each(function (index, element) {
        element.textContent = switcher ? ui.handleClose : ui.handleOpen;
      });
    }
    function toggleClickHandler(event) {
      var $toggle = $(event.target);
      var $item = $toggle.closest('li');
      toggleList($item);
      var $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }
    function linkClickHandler(event) {
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }
      event.stopPropagation();
    }
    function initItems($menu) {
      var options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: ''
      };
      $menu.find('li > a').wrap('<div class="toolbar-box">');
      $menu.find('li').each(function (index, element) {
        var $item = $(element);
        if ($item.children('ul.toolbar-menu').length) {
          var $box = $item.children('.toolbar-box');
          var $link = $box.find('a');
          options.text = Drupal.t('@label', {
            '@label': $link.length ? $link[0].textContent : ''
          });
          $item.children('.toolbar-box').append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }
    function markListLevels($lists, level) {
      level = !level ? 1 : level;
      var $lis = $lists.children('li').addClass("level-".concat(level));
      $lists = $lis.children('ul');
      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }
    function openActiveItem($menu) {
      var pathItem = $menu.find("a[href=\"".concat(window.location.pathname, "\"]"));
      if (pathItem.length && !activeItem) {
        activeItem = window.location.pathname;
      }
      if (activeItem) {
        var $activeItem = $menu.find("a[href=\"".concat(activeItem, "\"]")).addClass('menu-item--active');
        var $activeTrail = $activeItem.parentsUntil('.root', 'li').addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }
    return this.each(function (selector) {
      var menu = once('toolbar-menu', this);
      if (menu.length) {
        var $menu = $(menu);
        $menu.on('click.toolbar', '.toolbar-box', toggleClickHandler).on('click.toolbar', '.toolbar-box a', linkClickHandler);
        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);
        openActiveItem($menu);
      }
    });
  };
  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return "<button class=\"".concat(options.class, "\"><span class=\"action\">").concat(options.action, "</span> <span class=\"label\">").concat(options.text, "</span></button>");
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings) {
  var options = $.extend({
    breakpoints: {
      'toolbar.narrow': '',
      'toolbar.standard': '',
      'toolbar.wide': ''
    }
  }, drupalSettings.toolbar, {
    strings: {
      horizontal: Drupal.t('Horizontal orientation'),
      vertical: Drupal.t('Vertical orientation')
    }
  });
  Drupal.behaviors.toolbar = {
    attach: function attach(context) {
      if (!window.matchMedia('only screen').matches) {
        return;
      }
      once('toolbar', '#toolbar-administration', context).forEach(function (toolbar) {
        var model = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')),
          activeTab: document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID'))),
          height: $('#toolbar-administration').outerHeight()
        });
        Drupal.toolbar.models.toolbarModel = model;
        Object.keys(options.breakpoints).forEach(function (label) {
          var mq = options.breakpoints[label];
          var mql = window.matchMedia(mq);
          Drupal.toolbar.mql[label] = mql;
          mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label));
          Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
        });
        Drupal.toolbar.views.toolbarVisualView = new Drupal.toolbar.ToolbarVisualView({
          el: toolbar,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.toolbarAuralView = new Drupal.toolbar.ToolbarAuralView({
          el: toolbar,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView({
          el: toolbar,
          model: model
        });
        model.trigger('change:isFixed', model, model.get('isFixed'));
        model.trigger('change:activeTray', model, model.get('activeTray'));
        var menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.models.menuModel = menuModel;
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView({
          el: $(toolbar).find('.toolbar-menu-administration').get(0),
          model: menuModel,
          strings: options.strings
        });
        Drupal.toolbar.setSubtrees.done(function (subtrees) {
          menuModel.set('subtrees', subtrees);
          var theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem("Drupal.toolbar.subtrees.".concat(theme), JSON.stringify(subtrees));
          model.set('areSubtreesLoaded', true);
        });
        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();
        $(document).on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
          model.set('offsets', offsets);
        });
        model.on('change:orientation', function (model, orientation) {
          $(document).trigger('drupalToolbarOrientationChange', orientation);
        }).on('change:activeTab', function (model, tab) {
          $(document).trigger('drupalToolbarTabChange', tab);
        }).on('change:activeTray', function (model, tray) {
          $(document).trigger('drupalToolbarTrayChange', tray);
        });
        if (Drupal.toolbar.models.toolbarModel.get('orientation') === 'horizontal' && Drupal.toolbar.models.toolbarModel.get('activeTab') === null) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)
          });
        }
        $(window).on({
          'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
            var $toolbar = $('#toolbar-bar');
            $toolbar.css('margin-top', '0');
            if (settings.drupalOffCanvasPosition === 'top') {
              var height = Drupal.offCanvas.getContainer($element).outerHeight();
              $toolbar.css('margin-top', "".concat(height, "px"));
              $element.on('dialogContentResize.off-canvas', function () {
                var newHeight = Drupal.offCanvas.getContainer($element).outerHeight();
                $toolbar.css('margin-top', "".concat(newHeight, "px"));
              });
            }
          },
          'dialog:beforeclose': function dialogBeforeclose() {
            $('#toolbar-bar').css('margin-top', '0');
          }
        });
      });
    }
  };
  Drupal.toolbar = {
    views: {},
    models: {},
    mql: {},
    setSubtrees: new $.Deferred(),
    mediaQueryChangeHandler: function mediaQueryChangeHandler(model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false
          });
          if (!mql.matches || !model.get('orientation')) {
            model.set({
              orientation: 'vertical'
            }, {
              validate: true
            });
          }
          break;
        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches
          });
          break;
        case 'toolbar.wide':
          model.set({
            orientation: mql.matches && !model.get('locked') ? 'horizontal' : 'vertical'
          }, {
            validate: true
          });
          model.set({
            isTrayToggleVisible: mql.matches
          });
          break;
        default:
          break;
      }
    }
  };
  Drupal.theme.toolbarOrientationToggle = function () {
    return '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' + '<button class="toolbar-icon" type="button"></button>' + '</div></div>';
  };
  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (ajax, response, status) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Backbone, Drupal) {
  Drupal.toolbar.MenuModel = Backbone.Model.extend({
    defaults: {
      subtrees: {}
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend({
    defaults: {
      activeTab: null,
      activeTray: null,
      isOriented: false,
      isFixed: false,
      areSubtreesLoaded: false,
      isViewportOverflowConstrained: false,
      orientation: 'horizontal',
      locked: false,
      isTrayToggleVisible: true,
      height: null,
      offsets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    validate: function validate(attributes, options) {
      if (attributes.orientation === 'horizontal' && this.get('locked') && !options.override) {
        return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');
      }
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, Backbone) {
  Drupal.toolbar.BodyVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:activeTray ', this.render);
      this.listenTo(this.model, 'change:isFixed change:isViewportOverflowConstrained', this.isToolbarFixed);
    },
    isToolbarFixed: function isToolbarFixed() {
      var isViewportOverflowConstrained = this.model.get('isViewportOverflowConstrained');
      $('body').toggleClass('toolbar-fixed', isViewportOverflowConstrained || this.model.get('isFixed'));
    },
    render: function render() {
      $('body').toggleClass('toolbar-tray-open', !!this.model.get('activeTray'));
    }
  });
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Backbone, Drupal) {
  Drupal.toolbar.MenuVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:subtrees', this.render);
    },
    render: function render() {
      var _this = this;
      var subtrees = this.model.get('subtrees');
      Object.keys(subtrees || {}).forEach(function (id) {
        $(once('toolbar-subtrees', _this.$el.find("#toolbar-link-".concat(id)))).after(subtrees[id]);
      });
      if ('drupalToolbarMenu' in $.fn) {
        this.$el.children('.toolbar-menu').drupalToolbarMenu();
      }
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.strings = options.strings;
      this.listenTo(this.model, 'change:orientation', this.onOrientationChange);
      this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
    },
    onOrientationChange: function onOrientationChange(model, orientation) {
      Drupal.announce(Drupal.t('Tray orientation changed to @orientation.', {
        '@orientation': orientation
      }));
    },
    onActiveTrayChange: function onActiveTrayChange(model, tray) {
      var relevantTray = tray === null ? model.previous('activeTray') : tray;
      if (!relevantTray) {
        return;
      }
      var action = tray === null ? Drupal.t('closed') : Drupal.t('opened');
      var trayNameElement = relevantTray.querySelector('.toolbar-tray-name');
      var text;
      if (trayNameElement !== null) {
        text = Drupal.t('Tray "@tray" @action.', {
          '@tray': trayNameElement.textContent,
          '@action': action
        });
      } else {
        text = Drupal.t('Tray @action.', {
          '@action': action
        });
      }
      Drupal.announce(text);
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings, Backbone) {
  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };
      return {
        'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
        'click .toolbar-toggle-orientation button': 'onOrientationToggleClick',
        'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
        'touchend .toolbar-toggle-orientation button': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.strings = options.strings;
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible', this.render);
      this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
      this.listenTo(this.model, 'change:offsets', this.adjustPlacement);
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented', this.updateToolbarHeight);
      this.$el.find('.toolbar-tray .toolbar-lining').has('.toolbar-menu').append(Drupal.theme('toolbarOrientationToggle'));
      this.model.trigger('change:activeTab');
    },
    updateToolbarHeight: function updateToolbarHeight() {
      var toolbarTabOuterHeight = $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
      var toolbarTrayHorizontalOuterHeight = $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
      this.model.set('height', toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight);
      $('body').css({
        'padding-top': this.model.get('height')
      });
      $('html').css({
        'scroll-padding-top': this.model.get('height')
      });
      this.triggerDisplace();
    },
    triggerDisplace: function triggerDisplace() {
      _.defer(function () {
        Drupal.displace(true);
      });
    },
    render: function render() {
      this.updateTabs();
      this.updateTrayOrientation();
      this.updateBarAttributes();
      $('body').removeClass('toolbar-loading');
      if (this.model.changed.orientation === 'vertical' || this.model.changed.activeTab) {
        this.loadSubtrees();
      }
      return this;
    },
    onTabClick: function onTabClick(event) {
      if (event.currentTarget.hasAttribute('data-toolbar-tray')) {
        var activeTab = this.model.get('activeTab');
        var clickedTab = event.currentTarget;
        this.model.set('activeTab', !activeTab || clickedTab !== activeTab ? clickedTab : null);
        event.preventDefault();
        event.stopPropagation();
      }
    },
    onOrientationToggleClick: function onOrientationToggleClick(event) {
      var orientation = this.model.get('orientation');
      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      var locked = antiOrientation === 'vertical';
      if (locked) {
        localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
      } else {
        localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
      }
      this.model.set({
        locked: locked,
        orientation: antiOrientation
      }, {
        validate: true,
        override: true
      });
      event.preventDefault();
      event.stopPropagation();
    },
    updateTabs: function updateTabs() {
      var $tab = $(this.model.get('activeTab'));
      $(this.model.previous('activeTab')).removeClass('is-active').prop('aria-pressed', false);
      $(this.model.previous('activeTray')).removeClass('is-active');
      if ($tab.length > 0) {
        $tab.addClass('is-active').prop('aria-pressed', true);
        var name = $tab.attr('data-toolbar-tray');
        var id = $tab.get(0).id;
        if (id) {
          localStorage.setItem('Drupal.toolbar.activeTabID', JSON.stringify(id));
        }
        var $tray = this.$el.find("[data-toolbar-tray=\"".concat(name, "\"].toolbar-tray"));
        if ($tray.length) {
          $tray.addClass('is-active');
          this.model.set('activeTray', $tray.get(0));
        } else {
          this.model.set('activeTray', null);
        }
      } else {
        this.model.set('activeTray', null);
        localStorage.removeItem('Drupal.toolbar.activeTabID');
      }
    },
    updateBarAttributes: function updateBarAttributes() {
      var isOriented = this.model.get('isOriented');
      if (isOriented) {
        this.$el.find('.toolbar-bar').attr('data-offset-top', '');
      } else {
        this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
      }
      this.$el.toggleClass('toolbar-oriented', isOriented);
    },
    updateTrayOrientation: function updateTrayOrientation() {
      var orientation = this.model.get('orientation');
      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      $('body').toggleClass('toolbar-vertical', orientation === 'vertical').toggleClass('toolbar-horizontal', orientation === 'horizontal');
      var removeClass = antiOrientation === 'horizontal' ? 'toolbar-tray-horizontal' : 'toolbar-tray-vertical';
      var $trays = this.$el.find('.toolbar-tray').removeClass(removeClass).addClass("toolbar-tray-".concat(orientation));
      var iconClass = "toolbar-icon-toggle-".concat(orientation);
      var iconAntiClass = "toolbar-icon-toggle-".concat(antiOrientation);
      var $orientationToggle = this.$el.find('.toolbar-toggle-orientation').toggle(this.model.get('isTrayToggleVisible'));
      var $orientationToggleButton = $orientationToggle.find('button');
      $orientationToggleButton[0].value = antiOrientation;
      $orientationToggleButton.attr('title', this.strings[antiOrientation]).removeClass(iconClass).addClass(iconAntiClass);
      $orientationToggleButton[0].textContent = this.strings[antiOrientation];
      var dir = document.documentElement.dir;
      var edge = dir === 'rtl' ? 'right' : 'left';
      $trays.removeAttr('data-offset-left data-offset-right data-offset-top');
      $trays.filter('.toolbar-tray-vertical.is-active').attr("data-offset-".concat(edge), '');
      $trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top', '');
    },
    adjustPlacement: function adjustPlacement() {
      var $trays = this.$el.find('.toolbar-tray');
      if (!this.model.get('isOriented')) {
        $trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');
      }
    },
    loadSubtrees: function loadSubtrees() {
      var $activeTab = $(this.model.get('activeTab'));
      var orientation = this.model.get('orientation');
      if (!this.model.get('areSubtreesLoaded') && typeof $activeTab.data('drupal-subtrees') !== 'undefined' && orientation === 'vertical') {
        var subtreesHash = drupalSettings.toolbar.subtreesHash;
        var theme = drupalSettings.ajaxPageState.theme;
        var endpoint = Drupal.url("toolbar/subtrees/".concat(subtreesHash));
        var cachedSubtreesHash = localStorage.getItem("Drupal.toolbar.subtreesHash.".concat(theme));
        var cachedSubtrees = JSON.parse(localStorage.getItem("Drupal.toolbar.subtrees.".concat(theme)));
        var isVertical = this.model.get('orientation') === 'vertical';
        if (isVertical && subtreesHash === cachedSubtreesHash && cachedSubtrees) {
          Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
        } else if (isVertical) {
          localStorage.removeItem("Drupal.toolbar.subtreesHash.".concat(theme));
          localStorage.removeItem("Drupal.toolbar.subtrees.".concat(theme));
          Drupal.ajax({
            url: endpoint
          }).execute();
          localStorage.setItem("Drupal.toolbar.subtreesHash.".concat(theme), subtreesHash);
        }
      }
    }
  });
})(jQuery, Drupal, drupalSettings, Backbone);;
/*! shepherd.js 9.1.1 */

'use strict';(function(O,pa){"object"===typeof exports&&"undefined"!==typeof module?module.exports=pa():"function"===typeof define&&define.amd?define(pa):(O="undefined"!==typeof globalThis?globalThis:O||self,O.Shepherd=pa())})(this,function(){function O(a,b){return!1!==b.clone&&b.isMergeableObject(a)?da(Array.isArray(a)?[]:{},a,b):a}function pa(a,b,c){return a.concat(b).map(function(d){return O(d,c)})}function Db(a){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(a).filter(function(b){return a.propertyIsEnumerable(b)}):
[]}function Ta(a){return Object.keys(a).concat(Db(a))}function Ua(a,b){try{return b in a}catch(c){return!1}}function Eb(a,b,c){var d={};c.isMergeableObject(a)&&Ta(a).forEach(function(e){d[e]=O(a[e],c)});Ta(b).forEach(function(e){if(!Ua(a,e)||Object.hasOwnProperty.call(a,e)&&Object.propertyIsEnumerable.call(a,e))if(Ua(a,e)&&c.isMergeableObject(b[e])){if(c.customMerge){var f=c.customMerge(e);f="function"===typeof f?f:da}else f=da;d[e]=f(a[e],b[e],c)}else d[e]=O(b[e],c)});return d}function da(a,b,c){c=
c||{};c.arrayMerge=c.arrayMerge||pa;c.isMergeableObject=c.isMergeableObject||Fb;c.cloneUnlessOtherwiseSpecified=O;var d=Array.isArray(b),e=Array.isArray(a);return d!==e?O(b,c):d?c.arrayMerge(a,b,c):Eb(a,b,c)}function ea(a){return"function"===typeof a}function qa(a){return"string"===typeof a}function Va(a){let b=Object.getOwnPropertyNames(a.constructor.prototype);for(let c=0;c<b.length;c++){let d=b[c],e=a[d];"constructor"!==d&&"function"===typeof e&&(a[d]=e.bind(a))}return a}function Gb(a,b){return c=>
{if(b.isOpen()){let d=b.el&&c.currentTarget===b.el;(void 0!==a&&c.currentTarget.matches(a)||d)&&b.tour.next()}}}function Hb(a){let {event:b,selector:c}=a.options.advanceOn||{};if(b){let d=Gb(c,a),e;try{e=document.querySelector(c)}catch(f){}if(void 0===c||e)e?(e.addEventListener(b,d),a.on("destroy",()=>e.removeEventListener(b,d))):(document.body.addEventListener(b,d,!0),a.on("destroy",()=>document.body.removeEventListener(b,d,!0)));else return console.error(`No element was found for the selector supplied to advanceOn: ${c}`)}else return console.error("advanceOn was defined, but no event name was passed.")}
function M(a){return a?(a.nodeName||"").toLowerCase():null}function K(a){return null==a?window:"[object Window]"!==a.toString()?(a=a.ownerDocument)?a.defaultView||window:window:a}function fa(a){var b=K(a).Element;return a instanceof b||a instanceof Element}function F(a){var b=K(a).HTMLElement;return a instanceof b||a instanceof HTMLElement}function Ea(a){if("undefined"===typeof ShadowRoot)return!1;var b=K(a).ShadowRoot;return a instanceof b||a instanceof ShadowRoot}function N(a){return a.split("-")[0]}
function ha(a,b){void 0===b&&(b=!1);var c=a.getBoundingClientRect(),d=1,e=1;F(a)&&b&&(b=a.offsetHeight,a=a.offsetWidth,0<a&&(d=ia(c.width)/a||1),0<b&&(e=ia(c.height)/b||1));return{width:c.width/d,height:c.height/e,top:c.top/e,right:c.right/d,bottom:c.bottom/e,left:c.left/d,x:c.left/d,y:c.top/e}}function Fa(a){var b=ha(a),c=a.offsetWidth,d=a.offsetHeight;1>=Math.abs(b.width-c)&&(c=b.width);1>=Math.abs(b.height-d)&&(d=b.height);return{x:a.offsetLeft,y:a.offsetTop,width:c,height:d}}function Wa(a,b){var c=
b.getRootNode&&b.getRootNode();if(a.contains(b))return!0;if(c&&Ea(c)){do{if(b&&a.isSameNode(b))return!0;b=b.parentNode||b.host}while(b)}return!1}function P(a){return K(a).getComputedStyle(a)}function U(a){return((fa(a)?a.ownerDocument:a.document)||window.document).documentElement}function wa(a){return"html"===M(a)?a:a.assignedSlot||a.parentNode||(Ea(a)?a.host:null)||U(a)}function Xa(a){return F(a)&&"fixed"!==P(a).position?a.offsetParent:null}function ra(a){for(var b=K(a),c=Xa(a);c&&0<=["table","td",
"th"].indexOf(M(c))&&"static"===P(c).position;)c=Xa(c);if(c&&("html"===M(c)||"body"===M(c)&&"static"===P(c).position))return b;if(!c)a:{c=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1===navigator.userAgent.indexOf("Trident")||!F(a)||"fixed"!==P(a).position)for(a=wa(a),Ea(a)&&(a=a.host);F(a)&&0>["html","body"].indexOf(M(a));){var d=P(a);if("none"!==d.transform||"none"!==d.perspective||"paint"===d.contain||-1!==["transform","perspective"].indexOf(d.willChange)||c&&"filter"===d.willChange||
c&&d.filter&&"none"!==d.filter){c=a;break a}else a=a.parentNode}c=null}return c||b}function Ga(a){return 0<=["top","bottom"].indexOf(a)?"x":"y"}function Ya(a){return Object.assign({},{top:0,right:0,bottom:0,left:0},a)}function Za(a,b){return b.reduce(function(c,d){c[d]=a;return c},{})}function ja(a){return a.split("-")[1]}function $a(a){var b,c=a.popper,d=a.popperRect,e=a.placement,f=a.variation,g=a.offsets,l=a.position,m=a.gpuAcceleration,k=a.adaptive,p=a.roundOffsets,q=a.isFixed;a=g.x;a=void 0===
a?0:a;var n=g.y,r=void 0===n?0:n;n="function"===typeof p?p({x:a,y:r}):{x:a,y:r};a=n.x;r=n.y;n=g.hasOwnProperty("x");g=g.hasOwnProperty("y");var x="left",h="top",t=window;if(k){var v=ra(c),A="clientHeight",u="clientWidth";v===K(c)&&(v=U(c),"static"!==P(v).position&&"absolute"===l&&(A="scrollHeight",u="scrollWidth"));if("top"===e||("left"===e||"right"===e)&&"end"===f)h="bottom",r-=(q&&v===t&&t.visualViewport?t.visualViewport.height:v[A])-d.height,r*=m?1:-1;if("left"===e||("top"===e||"bottom"===e)&&
"end"===f)x="right",a-=(q&&v===t&&t.visualViewport?t.visualViewport.width:v[u])-d.width,a*=m?1:-1}c=Object.assign({position:l},k&&Ib);!0===p?(p=r,d=window.devicePixelRatio||1,a={x:ia(a*d)/d||0,y:ia(p*d)/d||0}):a={x:a,y:r};p=a;a=p.x;r=p.y;if(m){var w;return Object.assign({},c,(w={},w[h]=g?"0":"",w[x]=n?"0":"",w.transform=1>=(t.devicePixelRatio||1)?"translate("+a+"px, "+r+"px)":"translate3d("+a+"px, "+r+"px, 0)",w))}return Object.assign({},c,(b={},b[h]=g?r+"px":"",b[x]=n?a+"px":"",b.transform="",b))}
function xa(a){return a.replace(/left|right|bottom|top/g,function(b){return Jb[b]})}function ab(a){return a.replace(/start|end/g,function(b){return Kb[b]})}function Ha(a){a=K(a);return{scrollLeft:a.pageXOffset,scrollTop:a.pageYOffset}}function Ia(a){return ha(U(a)).left+Ha(a).scrollLeft}function Ja(a){a=P(a);return/auto|scroll|overlay|hidden/.test(a.overflow+a.overflowY+a.overflowX)}function bb(a){return 0<=["html","body","#document"].indexOf(M(a))?a.ownerDocument.body:F(a)&&Ja(a)?a:bb(wa(a))}function sa(a,
b){var c;void 0===b&&(b=[]);var d=bb(a);a=d===(null==(c=a.ownerDocument)?void 0:c.body);c=K(d);d=a?[c].concat(c.visualViewport||[],Ja(d)?d:[]):d;b=b.concat(d);return a?b:b.concat(sa(wa(d)))}function Ka(a){return Object.assign({},a,{left:a.x,top:a.y,right:a.x+a.width,bottom:a.y+a.height})}function cb(a,b){if("viewport"===b){b=K(a);var c=U(a);b=b.visualViewport;var d=c.clientWidth;c=c.clientHeight;var e=0,f=0;b&&(d=b.width,c=b.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(e=b.offsetLeft,
f=b.offsetTop));a={width:d,height:c,x:e+Ia(a),y:f};a=Ka(a)}else fa(b)?(a=ha(b),a.top+=b.clientTop,a.left+=b.clientLeft,a.bottom=a.top+b.clientHeight,a.right=a.left+b.clientWidth,a.width=b.clientWidth,a.height=b.clientHeight,a.x=a.left,a.y=a.top):(f=U(a),a=U(f),d=Ha(f),b=null==(c=f.ownerDocument)?void 0:c.body,c=L(a.scrollWidth,a.clientWidth,b?b.scrollWidth:0,b?b.clientWidth:0),e=L(a.scrollHeight,a.clientHeight,b?b.scrollHeight:0,b?b.clientHeight:0),f=-d.scrollLeft+Ia(f),d=-d.scrollTop,"rtl"===P(b||
a).direction&&(f+=L(a.clientWidth,b?b.clientWidth:0)-c),a=Ka({width:c,height:e,x:f,y:d}));return a}function Lb(a){var b=sa(wa(a)),c=0<=["absolute","fixed"].indexOf(P(a).position)&&F(a)?ra(a):a;return fa(c)?b.filter(function(d){return fa(d)&&Wa(d,c)&&"body"!==M(d)}):[]}function Mb(a,b,c){b="clippingParents"===b?Lb(a):[].concat(b);c=[].concat(b,[c]);c=c.reduce(function(d,e){e=cb(a,e);d.top=L(e.top,d.top);d.right=V(e.right,d.right);d.bottom=V(e.bottom,d.bottom);d.left=L(e.left,d.left);return d},cb(a,
c[0]));c.width=c.right-c.left;c.height=c.bottom-c.top;c.x=c.left;c.y=c.top;return c}function db(a){var b=a.reference,c=a.element,d=(a=a.placement)?N(a):null;a=a?ja(a):null;var e=b.x+b.width/2-c.width/2,f=b.y+b.height/2-c.height/2;switch(d){case "top":e={x:e,y:b.y-c.height};break;case "bottom":e={x:e,y:b.y+b.height};break;case "right":e={x:b.x+b.width,y:f};break;case "left":e={x:b.x-c.width,y:f};break;default:e={x:b.x,y:b.y}}d=d?Ga(d):null;if(null!=d)switch(f="y"===d?"height":"width",a){case "start":e[d]-=
b[f]/2-c[f]/2;break;case "end":e[d]+=b[f]/2-c[f]/2}return e}function ta(a,b){void 0===b&&(b={});var c=b;b=c.placement;b=void 0===b?a.placement:b;var d=c.boundary,e=void 0===d?"clippingParents":d;d=c.rootBoundary;var f=void 0===d?"viewport":d;d=c.elementContext;d=void 0===d?"popper":d;var g=c.altBoundary,l=void 0===g?!1:g;c=c.padding;c=void 0===c?0:c;c=Ya("number"!==typeof c?c:Za(c,ua));g=a.rects.popper;l=a.elements[l?"popper"===d?"reference":"popper":d];e=Mb(fa(l)?l:l.contextElement||U(a.elements.popper),
e,f);f=ha(a.elements.reference);l=db({reference:f,element:g,strategy:"absolute",placement:b});g=Ka(Object.assign({},g,l));f="popper"===d?g:f;var m={top:e.top-f.top+c.top,bottom:f.bottom-e.bottom+c.bottom,left:e.left-f.left+c.left,right:f.right-e.right+c.right};a=a.modifiersData.offset;if("popper"===d&&a){var k=a[b];Object.keys(m).forEach(function(p){var q=0<=["right","bottom"].indexOf(p)?1:-1,n=0<=["top","bottom"].indexOf(p)?"y":"x";m[p]+=k[n]*q})}return m}function Nb(a,b){void 0===b&&(b={});var c=
b.boundary,d=b.rootBoundary,e=b.padding,f=b.flipVariations,g=b.allowedAutoPlacements,l=void 0===g?eb:g,m=ja(b.placement);b=m?f?fb:fb.filter(function(p){return ja(p)===m}):ua;f=b.filter(function(p){return 0<=l.indexOf(p)});0===f.length&&(f=b);var k=f.reduce(function(p,q){p[q]=ta(a,{placement:q,boundary:c,rootBoundary:d,padding:e})[N(q)];return p},{});return Object.keys(k).sort(function(p,q){return k[p]-k[q]})}function Ob(a){if("auto"===N(a))return[];var b=xa(a);return[ab(a),b,ab(b)]}function gb(a,
b,c){void 0===c&&(c={x:0,y:0});return{top:a.top-b.height-c.y,right:a.right-b.width+c.x,bottom:a.bottom-b.height+c.y,left:a.left-b.width-c.x}}function hb(a){return["top","right","bottom","left"].some(function(b){return 0<=a[b]})}function Pb(a,b,c){void 0===c&&(c=!1);var d=F(b),e;if(e=F(b)){var f=b.getBoundingClientRect();e=ia(f.width)/b.offsetWidth||1;f=ia(f.height)/b.offsetHeight||1;e=1!==e||1!==f}f=e;e=U(b);a=ha(a,f);f={scrollLeft:0,scrollTop:0};var g={x:0,y:0};if(d||!d&&!c){if("body"!==M(b)||Ja(e))f=
b!==K(b)&&F(b)?{scrollLeft:b.scrollLeft,scrollTop:b.scrollTop}:Ha(b);F(b)?(g=ha(b,!0),g.x+=b.clientLeft,g.y+=b.clientTop):e&&(g.x=Ia(e))}return{x:a.left+f.scrollLeft-g.x,y:a.top+f.scrollTop-g.y,width:a.width,height:a.height}}function Qb(a){function b(f){d.add(f.name);[].concat(f.requires||[],f.requiresIfExists||[]).forEach(function(g){d.has(g)||(g=c.get(g))&&b(g)});e.push(f)}var c=new Map,d=new Set,e=[];a.forEach(function(f){c.set(f.name,f)});a.forEach(function(f){d.has(f.name)||b(f)});return e}function Rb(a){var b=
Qb(a);return Sb.reduce(function(c,d){return c.concat(b.filter(function(e){return e.phase===d}))},[])}function Tb(a){var b;return function(){b||(b=new Promise(function(c){Promise.resolve().then(function(){b=void 0;c(a())})}));return b}}function Ub(a){var b=a.reduce(function(c,d){var e=c[d.name];c[d.name]=e?Object.assign({},e,d,{options:Object.assign({},e.options,d.options),data:Object.assign({},e.data,d.data)}):d;return c},{});return Object.keys(b).map(function(c){return b[c]})}function ib(){for(var a=
arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return!b.some(function(d){return!(d&&"function"===typeof d.getBoundingClientRect)})}function La(){La=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a};return La.apply(this,arguments)}function Vb(){return[{name:"applyStyles",fn(a){let {state:b}=a;Object.keys(b.elements).forEach(c=>{if("popper"===c){var d=b.attributes[c]||{},e=b.elements[c];
Object.assign(e.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)"});Object.keys(d).forEach(f=>{let g=d[f];!1===g?e.removeAttribute(f):e.setAttribute(f,!0===g?"":g)})}})}},{name:"computeStyles",options:{adaptive:!1}}]}function Wb(a){let b=Vb(),c={placement:"top",strategy:"fixed",modifiers:[{name:"focusAfterRender",enabled:!0,phase:"afterWrite",fn(){setTimeout(()=>{a.el&&a.el.focus()},300)}}]};return c=La({},c,{modifiers:Array.from(new Set([...c.modifiers,...b]))})}function jb(a){return qa(a)&&
""!==a?"-"!==a.charAt(a.length-1)?`${a}-`:a:""}function Ma(a){a=a.options.attachTo||{};let b=Object.assign({},a);if(qa(a.element)){try{b.element=document.querySelector(a.element)}catch(c){}b.element||console.error(`The element for this Shepherd step was not found ${a.element}`)}return b}function Na(){let a=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,b=>{let c=(a+16*Math.random())%16|0;a=Math.floor(a/16);return("x"==b?c:c&3|8).toString(16)})}function Xb(a,b){let c={modifiers:[{name:"preventOverflow",
options:{altAxis:!0,tether:!1}},{name:"focusAfterRender",enabled:!0,phase:"afterWrite",fn(){setTimeout(()=>{b.el&&b.el.focus()},300)}}],strategy:"absolute"};b.isCentered()?c=Wb(b):c.placement=a.on;(a=b.tour&&b.tour.options&&b.tour.options.defaultStepOptions)&&(c=kb(a,c));return c=kb(b.options,c)}function kb(a,b){if(a.popperOptions){let c=Object.assign({},b,a.popperOptions);if(a.popperOptions.modifiers&&0<a.popperOptions.modifiers.length){let d=a.popperOptions.modifiers.map(e=>e.name);b=b.modifiers.filter(e=>
!d.includes(e.name));c.modifiers=Array.from(new Set([...b,...a.popperOptions.modifiers]))}return c}return b}function G(){}function Yb(a,b){for(let c in b)a[c]=b[c];return a}function ka(a){return a()}function lb(a){return"function"===typeof a}function Q(a,b){return a!=a?b==b:a!==b||a&&"object"===typeof a||"function"===typeof a}function H(a){a.parentNode.removeChild(a)}function mb(a){return document.createElementNS("http://www.w3.org/2000/svg",a)}function ya(a,b,c,d){a.addEventListener(b,c,d);return()=>
a.removeEventListener(b,c,d)}function B(a,b,c){null==c?a.removeAttribute(b):a.getAttribute(b)!==c&&a.setAttribute(b,c)}function nb(a,b){let c=Object.getOwnPropertyDescriptors(a.__proto__);for(let d in b)null==b[d]?a.removeAttribute(d):"style"===d?a.style.cssText=b[d]:"__value"===d?a.value=a[d]=b[d]:c[d]&&c[d].set?a[d]=b[d]:B(a,d,b[d])}function la(a,b,c){a.classList[c?"add":"remove"](b)}function za(){if(!R)throw Error("Function called outside component initialization");return R}function Oa(a){Aa.push(a)}
function ob(){let a=R;do{for(;Ba<va.length;){var b=va[Ba];Ba++;R=b;b=b.$$;if(null!==b.fragment){b.update();b.before_update.forEach(ka);var c=b.dirty;b.dirty=[-1];b.fragment&&b.fragment.p(b.ctx,c);b.after_update.forEach(Oa)}}R=null;for(Ba=va.length=0;ma.length;)ma.pop()();for(b=0;b<Aa.length;b+=1)c=Aa[b],Pa.has(c)||(Pa.add(c),c());Aa.length=0}while(va.length);for(;pb.length;)pb.pop()();Qa=!1;Pa.clear();R=a}function Z(){aa={r:0,c:[],p:aa}}function ba(){aa.r||aa.c.forEach(ka);aa=aa.p}function z(a,b){a&&
a.i&&(Ca.delete(a),a.i(b))}function C(a,b,c,d){a&&a.o&&!Ca.has(a)&&(Ca.add(a),aa.c.push(()=>{Ca.delete(a);d&&(c&&a.d(1),d())}),a.o(b))}function ca(a){a&&a.c()}function W(a,b,c,d){let {fragment:e,on_mount:f,on_destroy:g,after_update:l}=a.$$;e&&e.m(b,c);d||Oa(()=>{let m=f.map(ka).filter(lb);g?g.push(...m):m.forEach(ka);a.$$.on_mount=[]});l.forEach(Oa)}function X(a,b){a=a.$$;null!==a.fragment&&(a.on_destroy.forEach(ka),a.fragment&&a.fragment.d(b),a.on_destroy=a.fragment=null,a.ctx=[])}function S(a,b,
c,d,e,f,g,l){void 0===l&&(l=[-1]);let m=R;R=a;let k=a.$$={fragment:null,ctx:null,props:f,update:G,not_equal:e,bound:Object.create(null),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(b.context||(m?m.$$.context:[])),callbacks:Object.create(null),dirty:l,skip_bound:!1,root:b.target||m.$$.root};g&&g(k.root);let p=!1;k.ctx=c?c(a,b.props||{},function(q,n){let r=(2>=arguments.length?0:arguments.length-2)?2>=arguments.length?void 0:arguments[2]:n;if(k.ctx&&e(k.ctx[q],
k.ctx[q]=r)){if(!k.skip_bound&&k.bound[q])k.bound[q](r);p&&(-1===a.$$.dirty[0]&&(va.push(a),Qa||(Qa=!0,Zb.then(ob)),a.$$.dirty.fill(0)),a.$$.dirty[q/31|0]|=1<<q%31)}return n}):[];k.update();p=!0;k.before_update.forEach(ka);k.fragment=d?d(k.ctx):!1;b.target&&(b.hydrate?(c=Array.from(b.target.childNodes),k.fragment&&k.fragment.l(c),c.forEach(H)):k.fragment&&k.fragment.c(),b.intro&&z(a.$$.fragment),W(a,b.target,b.anchor,b.customElement),ob());R=m}function $b(a){let b,c,d,e,f;return{c(){b=document.createElement("button");
B(b,"aria-label",c=a[3]?a[3]:null);B(b,"class",d=`${a[1]||""} shepherd-button ${a[4]?"shepherd-button-secondary":""}`);b.disabled=a[2];B(b,"tabindex","0")},m(g,l){g.insertBefore(b,l||null);b.innerHTML=a[5];e||(f=ya(b,"click",function(){lb(a[0])&&a[0].apply(this,arguments)}),e=!0)},p(g,l){[l]=l;a=g;l&32&&(b.innerHTML=a[5]);l&8&&c!==(c=a[3]?a[3]:null)&&B(b,"aria-label",c);l&18&&d!==(d=`${a[1]||""} shepherd-button ${a[4]?"shepherd-button-secondary":""}`)&&B(b,"class",d);l&4&&(b.disabled=a[2])},i:G,o:G,
d(g){g&&H(b);e=!1;f()}}}function ac(a,b,c){function d(n){return ea(n)?n.call(f):n}let {config:e,step:f}=b,g,l,m,k,p,q;a.$$set=n=>{"config"in n&&c(6,e=n.config);"step"in n&&c(7,f=n.step)};a.$$.update=()=>{a.$$.dirty&192&&(c(0,g=e.action?e.action.bind(f.tour):null),c(1,l=e.classes),c(2,m=e.disabled?d(e.disabled):!1),c(3,k=e.label?d(e.label):null),c(4,p=e.secondary),c(5,q=e.text?d(e.text):null))};return[g,l,m,k,p,q,e,f]}function qb(a,b,c){a=a.slice();a[2]=b[c];return a}function rb(a){let b,c,d=a[1],
e=[];for(let g=0;g<d.length;g+=1)e[g]=sb(qb(a,d,g));let f=g=>C(e[g],1,1,()=>{e[g]=null});return{c(){for(let g=0;g<e.length;g+=1)e[g].c();b=document.createTextNode("")},m(g,l){for(let m=0;m<e.length;m+=1)e[m].m(g,l);g.insertBefore(b,l||null);c=!0},p(g,l){if(l&3){d=g[1];let m;for(m=0;m<d.length;m+=1){let k=qb(g,d,m);e[m]?(e[m].p(k,l),z(e[m],1)):(e[m]=sb(k),e[m].c(),z(e[m],1),e[m].m(b.parentNode,b))}Z();for(m=d.length;m<e.length;m+=1)f(m);ba()}},i(g){if(!c){for(g=0;g<d.length;g+=1)z(e[g]);c=!0}},o(g){e=
e.filter(Boolean);for(g=0;g<e.length;g+=1)C(e[g]);c=!1},d(g){var l=e;for(let m=0;m<l.length;m+=1)l[m]&&l[m].d(g);g&&H(b)}}}function sb(a){let b,c;b=new bc({props:{config:a[2],step:a[0]}});return{c(){ca(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&2&&(f.config=d[2]);e&1&&(f.step=d[0]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function cc(a){let b,c,d=a[1]&&rb(a);return{c(){b=document.createElement("footer");d&&d.c();B(b,"class","shepherd-footer")},
m(e,f){e.insertBefore(b,f||null);d&&d.m(b,null);c=!0},p(e,f){[f]=f;e[1]?d?(d.p(e,f),f&2&&z(d,1)):(d=rb(e),d.c(),z(d,1),d.m(b,null)):d&&(Z(),C(d,1,1,()=>{d=null}),ba())},i(e){c||(z(d),c=!0)},o(e){C(d);c=!1},d(e){e&&H(b);d&&d.d()}}}function dc(a,b,c){let d,{step:e}=b;a.$$set=f=>{"step"in f&&c(0,e=f.step)};a.$$.update=()=>{a.$$.dirty&1&&c(1,d=e.options.buttons)};return[e,d]}function ec(a){let b,c,d,e,f;return{c(){b=document.createElement("button");c=document.createElement("span");c.textContent="\u00d7";
B(c,"aria-hidden","true");B(b,"aria-label",d=a[0].label?a[0].label:"Close Tour");B(b,"class","shepherd-cancel-icon");B(b,"type","button")},m(g,l){g.insertBefore(b,l||null);b.appendChild(c);e||(f=ya(b,"click",a[1]),e=!0)},p(g,l){[l]=l;l&1&&d!==(d=g[0].label?g[0].label:"Close Tour")&&B(b,"aria-label",d)},i:G,o:G,d(g){g&&H(b);e=!1;f()}}}function fc(a,b,c){let {cancelIcon:d,step:e}=b;a.$$set=f=>{"cancelIcon"in f&&c(0,d=f.cancelIcon);"step"in f&&c(2,e=f.step)};return[d,f=>{f.preventDefault();e.cancel()},
e]}function gc(a){let b;return{c(){b=document.createElement("h3");B(b,"id",a[1]);B(b,"class","shepherd-title")},m(c,d){c.insertBefore(b,d||null);a[3](b)},p(c,d){[d]=d;d&2&&B(b,"id",c[1])},i:G,o:G,d(c){c&&H(b);a[3](null)}}}function hc(a,b,c){let {labelId:d,element:e,title:f}=b;za().$$.after_update.push(()=>{ea(f)&&c(2,f=f());c(0,e.innerHTML=f,e)});a.$$set=g=>{"labelId"in g&&c(1,d=g.labelId);"element"in g&&c(0,e=g.element);"title"in g&&c(2,f=g.title)};return[e,d,f,function(g){ma[g?"unshift":"push"](()=>
{e=g;c(0,e)})}]}function tb(a){let b,c;b=new ic({props:{labelId:a[0],title:a[2]}});return{c(){ca(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&1&&(f.labelId=d[0]);e&4&&(f.title=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function ub(a){let b,c;b=new jc({props:{cancelIcon:a[3],step:a[1]}});return{c(){ca(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&8&&(f.cancelIcon=d[3]);e&2&&(f.step=d[1]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),
c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function kc(a){let b,c,d,e=a[2]&&tb(a),f=a[3]&&a[3].enabled&&ub(a);return{c(){b=document.createElement("header");e&&e.c();c=document.createTextNode(" ");f&&f.c();B(b,"class","shepherd-header")},m(g,l){g.insertBefore(b,l||null);e&&e.m(b,null);b.appendChild(c);f&&f.m(b,null);d=!0},p(g,l){[l]=l;g[2]?e?(e.p(g,l),l&4&&z(e,1)):(e=tb(g),e.c(),z(e,1),e.m(b,c)):e&&(Z(),C(e,1,1,()=>{e=null}),ba());g[3]&&g[3].enabled?f?(f.p(g,l),l&8&&z(f,1)):(f=ub(g),f.c(),
z(f,1),f.m(b,null)):f&&(Z(),C(f,1,1,()=>{f=null}),ba())},i(g){d||(z(e),z(f),d=!0)},o(g){C(e);C(f);d=!1},d(g){g&&H(b);e&&e.d();f&&f.d()}}}function lc(a,b,c){let {labelId:d,step:e}=b,f,g;a.$$set=l=>{"labelId"in l&&c(0,d=l.labelId);"step"in l&&c(1,e=l.step)};a.$$.update=()=>{a.$$.dirty&2&&(c(2,f=e.options.title),c(3,g=e.options.cancelIcon))};return[d,e,f,g]}function mc(a){let b;return{c(){b=document.createElement("div");B(b,"class","shepherd-text");B(b,"id",a[1])},m(c,d){c.insertBefore(b,d||null);a[3](b)},
p(c,d){[d]=d;d&2&&B(b,"id",c[1])},i:G,o:G,d(c){c&&H(b);a[3](null)}}}function nc(a,b,c){let {descriptionId:d,element:e,step:f}=b;za().$$.after_update.push(()=>{let {text:g}=f.options;ea(g)&&(g=g.call(f));g instanceof HTMLElement?e.appendChild(g):c(0,e.innerHTML=g,e)});a.$$set=g=>{"descriptionId"in g&&c(1,d=g.descriptionId);"element"in g&&c(0,e=g.element);"step"in g&&c(2,f=g.step)};return[e,d,f,function(g){ma[g?"unshift":"push"](()=>{e=g;c(0,e)})}]}function vb(a){let b,c;b=new oc({props:{labelId:a[1],
step:a[2]}});return{c(){ca(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&2&&(f.labelId=d[1]);e&4&&(f.step=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function wb(a){let b,c;b=new pc({props:{descriptionId:a[0],step:a[2]}});return{c(){ca(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&1&&(f.descriptionId=d[0]);e&4&&(f.step=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function xb(a){let b,
c;b=new qc({props:{step:a[2]}});return{c(){ca(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&4&&(f.step=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function rc(a){let b,c=void 0!==a[2].options.title||a[2].options.cancelIcon&&a[2].options.cancelIcon.enabled,d,e=void 0!==a[2].options.text,f,g=Array.isArray(a[2].options.buttons)&&a[2].options.buttons.length,l,m=c&&vb(a),k=e&&wb(a),p=g&&xb(a);return{c(){b=document.createElement("div");m&&m.c();
d=document.createTextNode(" ");k&&k.c();f=document.createTextNode(" ");p&&p.c();B(b,"class","shepherd-content")},m(q,n){q.insertBefore(b,n||null);m&&m.m(b,null);b.appendChild(d);k&&k.m(b,null);b.appendChild(f);p&&p.m(b,null);l=!0},p(q,n){[n]=n;n&4&&(c=void 0!==q[2].options.title||q[2].options.cancelIcon&&q[2].options.cancelIcon.enabled);c?m?(m.p(q,n),n&4&&z(m,1)):(m=vb(q),m.c(),z(m,1),m.m(b,d)):m&&(Z(),C(m,1,1,()=>{m=null}),ba());n&4&&(e=void 0!==q[2].options.text);e?k?(k.p(q,n),n&4&&z(k,1)):(k=wb(q),
k.c(),z(k,1),k.m(b,f)):k&&(Z(),C(k,1,1,()=>{k=null}),ba());n&4&&(g=Array.isArray(q[2].options.buttons)&&q[2].options.buttons.length);g?p?(p.p(q,n),n&4&&z(p,1)):(p=xb(q),p.c(),z(p,1),p.m(b,null)):p&&(Z(),C(p,1,1,()=>{p=null}),ba())},i(q){l||(z(m),z(k),z(p),l=!0)},o(q){C(m);C(k);C(p);l=!1},d(q){q&&H(b);m&&m.d();k&&k.d();p&&p.d()}}}function sc(a,b,c){let {descriptionId:d,labelId:e,step:f}=b;a.$$set=g=>{"descriptionId"in g&&c(0,d=g.descriptionId);"labelId"in g&&c(1,e=g.labelId);"step"in g&&c(2,f=g.step)};
return[d,e,f]}function yb(a){let b;return{c(){b=document.createElement("div");B(b,"class","shepherd-arrow");B(b,"data-popper-arrow","")},m(c,d){c.insertBefore(b,d||null)},d(c){c&&H(b)}}}function tc(a){let b,c,d,e,f,g,l,m,k=a[4].options.arrow&&a[4].options.attachTo&&a[4].options.attachTo.element&&a[4].options.attachTo.on&&yb();d=new uc({props:{descriptionId:a[2],labelId:a[3],step:a[4]}});let p=[{"aria-describedby":e=void 0!==a[4].options.text?a[2]:null},{"aria-labelledby":f=a[4].options.title?a[3]:
null},a[1],{role:"dialog"},{tabindex:"0"}],q={};for(let n=0;n<p.length;n+=1)q=Yb(q,p[n]);return{c(){b=document.createElement("div");k&&k.c();c=document.createTextNode(" ");ca(d.$$.fragment);nb(b,q);la(b,"shepherd-has-cancel-icon",a[5]);la(b,"shepherd-has-title",a[6]);la(b,"shepherd-element",!0)},m(n,r){n.insertBefore(b,r||null);k&&k.m(b,null);b.appendChild(c);W(d,b,null);a[13](b);g=!0;l||(m=ya(b,"keydown",a[7]),l=!0)},p(n,r){var [x]=r;n[4].options.arrow&&n[4].options.attachTo&&n[4].options.attachTo.element&&
n[4].options.attachTo.on?k||(k=yb(),k.c(),k.m(b,c)):k&&(k.d(1),k=null);r={};x&4&&(r.descriptionId=n[2]);x&8&&(r.labelId=n[3]);x&16&&(r.step=n[4]);d.$set(r);r=b;x=[(!g||x&20&&e!==(e=void 0!==n[4].options.text?n[2]:null))&&{"aria-describedby":e},(!g||x&24&&f!==(f=n[4].options.title?n[3]:null))&&{"aria-labelledby":f},x&2&&n[1],{role:"dialog"},{tabindex:"0"}];let h={},t={},v={$$scope:1},A=p.length;for(;A--;){let u=p[A],w=x[A];if(w){for(let y in u)y in w||(t[y]=1);for(let y in w)v[y]||(h[y]=w[y],v[y]=
1);p[A]=w}else for(let y in u)v[y]=1}for(let u in t)u in h||(h[u]=void 0);nb(r,q=h);la(b,"shepherd-has-cancel-icon",n[5]);la(b,"shepherd-has-title",n[6]);la(b,"shepherd-element",!0)},i(n){g||(z(d.$$.fragment,n),g=!0)},o(n){C(d.$$.fragment,n);g=!1},d(n){n&&H(b);k&&k.d();X(d);a[13](null);l=!1;m()}}}function zb(a){return a.split(" ").filter(b=>!!b.length)}function vc(a,b,c){let {classPrefix:d,element:e,descriptionId:f,firstFocusableElement:g,focusableElements:l,labelId:m,lastFocusableElement:k,step:p,
dataStepId:q}=b,n,r,x;za().$$.on_mount.push(()=>{c(1,q={[`data-${d}shepherd-step-id`]:p.id});c(9,l=e.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'));c(8,g=l[0]);c(10,k=l[l.length-1])});za().$$.after_update.push(()=>{if(x!==p.options.classes){var h=x;qa(h)&&(h=zb(h),h.length&&e.classList.remove(...h));h=x=p.options.classes;qa(h)&&(h=zb(h),h.length&&e.classList.add(...h))}});a.$$set=h=>{"classPrefix"in
h&&c(11,d=h.classPrefix);"element"in h&&c(0,e=h.element);"descriptionId"in h&&c(2,f=h.descriptionId);"firstFocusableElement"in h&&c(8,g=h.firstFocusableElement);"focusableElements"in h&&c(9,l=h.focusableElements);"labelId"in h&&c(3,m=h.labelId);"lastFocusableElement"in h&&c(10,k=h.lastFocusableElement);"step"in h&&c(4,p=h.step);"dataStepId"in h&&c(1,q=h.dataStepId)};a.$$.update=()=>{a.$$.dirty&16&&(c(5,n=p.options&&p.options.cancelIcon&&p.options.cancelIcon.enabled),c(6,r=p.options&&p.options.title))};
return[e,q,f,m,p,n,r,h=>{const {tour:t}=p;switch(h.keyCode){case 9:if(0===l.length){h.preventDefault();break}if(h.shiftKey){if(document.activeElement===g||document.activeElement.classList.contains("shepherd-element"))h.preventDefault(),k.focus()}else document.activeElement===k&&(h.preventDefault(),g.focus());break;case 27:t.options.exitOnEsc&&p.cancel();break;case 37:t.options.keyboardNavigation&&t.back();break;case 39:t.options.keyboardNavigation&&t.next()}},g,l,k,d,()=>e,function(h){ma[h?"unshift":
"push"](()=>{e=h;c(0,e)})}]}function wc(a){a&&({steps:a}=a,a.forEach(b=>{b.options&&!1===b.options.canClickTarget&&b.options.attachTo&&b.target instanceof HTMLElement&&b.target.classList.remove("shepherd-target-click-disabled")}))}function xc(a){let b,c,d,e,f;return{c(){b=mb("svg");c=mb("path");B(c,"d",a[2]);B(b,"class",d=`${a[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)},m(g,l){g.insertBefore(b,l||null);b.appendChild(c);a[11](b);e||(f=ya(b,"touchmove",a[3]),e=!0)},p(g,l){[l]=
l;l&4&&B(c,"d",g[2]);l&2&&d!==(d=`${g[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)&&B(b,"class",d)},i:G,o:G,d(g){g&&H(b);a[11](null);e=!1;f()}}}function Ab(a){if(!a)return null;let b=a instanceof HTMLElement&&window.getComputedStyle(a).overflowY;return"hidden"!==b&&"visible"!==b&&a.scrollHeight>=a.clientHeight?a:Ab(a.parentElement)}function yc(a,b,c){function d(){c(4,p={width:0,height:0,x:0,y:0,r:0})}function e(){c(1,q=!1);l()}function f(h,t,v,A){void 0===h&&(h=0);void 0===
t&&(t=0);if(A){var u=A.getBoundingClientRect();let y=u.y||u.top;u=u.bottom||y+u.height;if(v){var w=v.getBoundingClientRect();v=w.y||w.top;w=w.bottom||v+w.height;y=Math.max(y,v);u=Math.min(u,w)}let {y:Y,height:E}={y,height:Math.max(u-y,0)},{x:I,width:D,left:na}=A.getBoundingClientRect();c(4,p={width:D+2*h,height:E+2*h,x:(I||na)-h,y:Y-h,r:t})}else d()}function g(){c(1,q=!0)}function l(){n&&(cancelAnimationFrame(n),n=void 0);window.removeEventListener("touchmove",x,{passive:!1})}function m(h){let {modalOverlayOpeningPadding:t,
modalOverlayOpeningRadius:v}=h.options,A=Ab(h.target),u=()=>{n=void 0;f(t,v,A,h.target);n=requestAnimationFrame(u)};u();window.addEventListener("touchmove",x,{passive:!1})}let {element:k,openingProperties:p}=b;Na();let q=!1,n=void 0,r;d();let x=h=>{h.preventDefault()};a.$$set=h=>{"element"in h&&c(0,k=h.element);"openingProperties"in h&&c(4,p=h.openingProperties)};a.$$.update=()=>{if(a.$$.dirty&16){let {width:h,height:t,x:v=0,y:A=0,r:u=0}=p,{innerWidth:w,innerHeight:y}=window;c(2,r=`M${w},${y}\
H0\
V0\
H${w}\
V${y}\
Z\
M${v+u},${A}\
a${u},${u},0,0,0-${u},${u}\
V${t+A-u}\
a${u},${u},0,0,0,${u},${u}\
H${h+v-u}\
a${u},${u},0,0,0,${u}-${u}\
V${A+u}\
a${u},${u},0,0,0-${u}-${u}\
Z`)}};return[k,q,r,h=>{h.stopPropagation()},p,()=>k,d,e,f,function(h){l();h.tour.options.useModalOverlay?(m(h),g()):e()},g,function(h){ma[h?"unshift":"push"](()=>{k=h;c(0,k)})}]}var Fb=function(a){var b;if(b=!!a&&"object"===typeof a)b=Object.prototype.toString.call(a),b=!("[object RegExp]"===b||"[object Date]"===b||a.$$typeof===zc);return b},zc="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;da.all=function(a,b){if(!Array.isArray(a))throw Error("first argument should be an array");
return a.reduce(function(c,d){return da(c,d,b)},{})};var Ac=da;class Ra{on(a,b,c,d){void 0===d&&(d=!1);void 0===this.bindings&&(this.bindings={});void 0===this.bindings[a]&&(this.bindings[a]=[]);this.bindings[a].push({handler:b,ctx:c,once:d});return this}once(a,b,c){return this.on(a,b,c,!0)}off(a,b){if(void 0===this.bindings||void 0===this.bindings[a])return this;void 0===b?delete this.bindings[a]:this.bindings[a].forEach((c,d)=>{c.handler===b&&this.bindings[a].splice(d,1)});return this}trigger(a){for(var b=
arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];void 0!==this.bindings&&this.bindings[a]&&this.bindings[a].forEach((e,f)=>{let {ctx:g,handler:l,once:m}=e;l.apply(g||this,c);m&&this.bindings[a].splice(f,1)});return this}}var ua=["top","bottom","right","left"],fb=ua.reduce(function(a,b){return a.concat([b+"-start",b+"-end"])},[]),eb=[].concat(ua,["auto"]).reduce(function(a,b){return a.concat([b,b+"-start",b+"-end"])},[]),Sb="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),
L=Math.max,V=Math.min,ia=Math.round,Ib={top:"auto",right:"auto",bottom:"auto",left:"auto"},Da={passive:!0},Jb={left:"right",right:"left",bottom:"top",top:"bottom"},Kb={start:"end",end:"start"},Bb={placement:"bottom",modifiers:[],strategy:"absolute"},Bc=function(a){void 0===a&&(a={});var b=a.defaultModifiers,c=void 0===b?[]:b;a=a.defaultOptions;var d=void 0===a?Bb:a;return function(e,f,g){function l(){k.orderedModifiers.forEach(function(r){var x=r.name,h=r.options;h=void 0===h?{}:h;r=r.effect;"function"===
typeof r&&(x=r({state:k,name:x,instance:n,options:h}),p.push(x||function(){}))})}function m(){p.forEach(function(r){return r()});p=[]}void 0===g&&(g=d);var k={placement:"bottom",orderedModifiers:[],options:Object.assign({},Bb,d),modifiersData:{},elements:{reference:e,popper:f},attributes:{},styles:{}},p=[],q=!1,n={state:k,setOptions:function(r){r="function"===typeof r?r(k.options):r;m();k.options=Object.assign({},d,k.options,r);k.scrollParents={reference:fa(e)?sa(e):e.contextElement?sa(e.contextElement):
[],popper:sa(f)};r=Rb(Ub([].concat(c,k.options.modifiers)));k.orderedModifiers=r.filter(function(x){return x.enabled});l();return n.update()},forceUpdate:function(){if(!q){var r=k.elements,x=r.reference;r=r.popper;if(ib(x,r))for(k.rects={reference:Pb(x,ra(r),"fixed"===k.options.strategy),popper:Fa(r)},k.reset=!1,k.placement=k.options.placement,k.orderedModifiers.forEach(function(v){return k.modifiersData[v.name]=Object.assign({},v.data)}),x=0;x<k.orderedModifiers.length;x++)if(!0===k.reset)k.reset=
!1,x=-1;else{var h=k.orderedModifiers[x];r=h.fn;var t=h.options;t=void 0===t?{}:t;h=h.name;"function"===typeof r&&(k=r({state:k,options:t,name:h,instance:n})||k)}}},update:Tb(function(){return new Promise(function(r){n.forceUpdate();r(k)})}),destroy:function(){m();q=!0}};if(!ib(e,f))return n;n.setOptions(g).then(function(r){if(!q&&g.onFirstUpdate)g.onFirstUpdate(r)});return n}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(a){var b=a.state,c=a.instance;
a=a.options;var d=a.scroll,e=void 0===d?!0:d;a=a.resize;var f=void 0===a?!0:a,g=K(b.elements.popper),l=[].concat(b.scrollParents.reference,b.scrollParents.popper);e&&l.forEach(function(m){m.addEventListener("scroll",c.update,Da)});f&&g.addEventListener("resize",c.update,Da);return function(){e&&l.forEach(function(m){m.removeEventListener("scroll",c.update,Da)});f&&g.removeEventListener("resize",c.update,Da)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(a){var b=a.state;b.modifiersData[a.name]=
db({reference:b.rects.reference,element:b.rects.popper,strategy:"absolute",placement:b.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(a){var b=a.state,c=a.options;a=c.gpuAcceleration;a=void 0===a?!0:a;var d=c.adaptive;d=void 0===d?!0:d;c=c.roundOffsets;c=void 0===c?!0:c;a={placement:N(b.placement),variation:ja(b.placement),popper:b.elements.popper,popperRect:b.rects.popper,gpuAcceleration:a,isFixed:"fixed"===b.options.strategy};null!=b.modifiersData.popperOffsets&&
(b.styles.popper=Object.assign({},b.styles.popper,$a(Object.assign({},a,{offsets:b.modifiersData.popperOffsets,position:b.options.strategy,adaptive:d,roundOffsets:c}))));null!=b.modifiersData.arrow&&(b.styles.arrow=Object.assign({},b.styles.arrow,$a(Object.assign({},a,{offsets:b.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c}))));b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-placement":b.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",
fn:function(a){var b=a.state;Object.keys(b.elements).forEach(function(c){var d=b.styles[c]||{},e=b.attributes[c]||{},f=b.elements[c];F(f)&&M(f)&&(Object.assign(f.style,d),Object.keys(e).forEach(function(g){var l=e[g];!1===l?f.removeAttribute(g):f.setAttribute(g,!0===l?"":l)}))})},effect:function(a){var b=a.state,c={popper:{position:b.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(b.elements.popper.style,c.popper);b.styles=c;b.elements.arrow&&
Object.assign(b.elements.arrow.style,c.arrow);return function(){Object.keys(b.elements).forEach(function(d){var e=b.elements[d],f=b.attributes[d]||{};d=Object.keys(b.styles.hasOwnProperty(d)?b.styles[d]:c[d]).reduce(function(g,l){g[l]="";return g},{});F(e)&&M(e)&&(Object.assign(e.style,d),Object.keys(f).forEach(function(g){e.removeAttribute(g)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(a){var b=a.state,c=a.name;a=a.options.offset;
var d=void 0===a?[0,0]:a;a=eb.reduce(function(g,l){var m=b.rects;var k=N(l);var p=0<=["left","top"].indexOf(k)?-1:1,q="function"===typeof d?d(Object.assign({},m,{placement:l})):d;m=q[0];q=q[1];m=m||0;q=(q||0)*p;k=0<=["left","right"].indexOf(k)?{x:q,y:m}:{x:m,y:q};g[l]=k;return g},{});var e=a[b.placement],f=e.x;e=e.y;null!=b.modifiersData.popperOffsets&&(b.modifiersData.popperOffsets.x+=f,b.modifiersData.popperOffsets.y+=e);b.modifiersData[c]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(a){var b=
a.state,c=a.options;a=a.name;if(!b.modifiersData[a]._skip){var d=c.mainAxis;d=void 0===d?!0:d;var e=c.altAxis;e=void 0===e?!0:e;var f=c.fallbackPlacements,g=c.padding,l=c.boundary,m=c.rootBoundary,k=c.altBoundary,p=c.flipVariations,q=void 0===p?!0:p,n=c.allowedAutoPlacements;c=b.options.placement;p=N(c);f=f||(p!==c&&q?Ob(c):[xa(c)]);var r=[c].concat(f).reduce(function(E,I){return E.concat("auto"===N(I)?Nb(b,{placement:I,boundary:l,rootBoundary:m,padding:g,flipVariations:q,allowedAutoPlacements:n}):
I)},[]);c=b.rects.reference;f=b.rects.popper;var x=new Map;p=!0;for(var h=r[0],t=0;t<r.length;t++){var v=r[t],A=N(v),u="start"===ja(v),w=0<=["top","bottom"].indexOf(A),y=w?"width":"height",Y=ta(b,{placement:v,boundary:l,rootBoundary:m,altBoundary:k,padding:g});u=w?u?"right":"left":u?"bottom":"top";c[y]>f[y]&&(u=xa(u));y=xa(u);w=[];d&&w.push(0>=Y[A]);e&&w.push(0>=Y[u],0>=Y[y]);if(w.every(function(E){return E})){h=v;p=!1;break}x.set(v,w)}if(p)for(d=function(E){var I=r.find(function(D){if(D=x.get(D))return D.slice(0,
E).every(function(na){return na})});if(I)return h=I,"break"},e=q?3:1;0<e&&"break"!==d(e);e--);b.placement!==h&&(b.modifiersData[a]._skip=!0,b.placement=h,b.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(a){var b=a.state,c=a.options;a=a.name;var d=c.mainAxis,e=void 0===d?!0:d;d=c.altAxis;var f=void 0===d?!1:d;d=c.tether;var g=void 0===d?!0:d;d=c.tetherOffset;var l=void 0===d?0:d,m=ta(b,{boundary:c.boundary,rootBoundary:c.rootBoundary,
padding:c.padding,altBoundary:c.altBoundary}),k=N(b.placement),p=ja(b.placement),q=!p,n=Ga(k);c="x"===n?"y":"x";d=b.modifiersData.popperOffsets;var r=b.rects.reference,x=b.rects.popper;l="function"===typeof l?l(Object.assign({},b.rects,{placement:b.placement})):l;var h="number"===typeof l?{mainAxis:l,altAxis:l}:Object.assign({mainAxis:0,altAxis:0},l),t=b.modifiersData.offset?b.modifiersData.offset[b.placement]:null;l={x:0,y:0};if(d){if(e){var v,A="y"===n?"top":"left",u="y"===n?"bottom":"right",w=
"y"===n?"height":"width";e=d[n];var y=e+m[A],Y=e-m[u],E=g?-x[w]/2:0,I="start"===p?r[w]:x[w];p="start"===p?-x[w]:-r[w];var D=b.elements.arrow;D=g&&D?Fa(D):{width:0,height:0};var na=b.modifiersData["arrow#persistent"]?b.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0};A=na[A];u=na[u];D=L(0,V(r[w],D[w]));I=q?r[w]/2-E-D-A-h.mainAxis:I-D-A-h.mainAxis;q=q?-r[w]/2+E+D+u+h.mainAxis:p+D+u+h.mainAxis;w=(w=b.elements.arrow&&ra(b.elements.arrow))?"y"===n?w.clientTop||0:w.clientLeft||
0:0;E=null!=(v=null==t?void 0:t[n])?v:0;v=e+q-E;y=g?V(y,e+I-E-w):y;v=g?L(Y,v):Y;v=L(y,V(e,v));d[n]=v;l[n]=v-e}if(f){var J;f=d[c];e="y"===c?"height":"width";v=f+m["x"===n?"top":"left"];m=f-m["x"===n?"bottom":"right"];k=-1!==["top","left"].indexOf(k);n=null!=(J=null==t?void 0:t[c])?J:0;J=k?v:f-r[e]-x[e]-n+h.altAxis;r=k?f+r[e]+x[e]-n-h.altAxis:m;g&&k?(J=L(J,V(f,r)),J=J>r?r:J):J=L(g?J:v,V(f,g?r:m));d[c]=J;l[c]=J-f}b.modifiersData[a]=l}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",
fn:function(a){var b,c=a.state,d=a.name,e=a.options,f=c.elements.arrow,g=c.modifiersData.popperOffsets,l=N(c.placement);a=Ga(l);l=0<=["left","right"].indexOf(l)?"height":"width";if(f&&g){e=e.padding;e="function"===typeof e?e(Object.assign({},c.rects,{placement:c.placement})):e;e=Ya("number"!==typeof e?e:Za(e,ua));var m=Fa(f),k="y"===a?"top":"left",p="y"===a?"bottom":"right",q=c.rects.reference[l]+c.rects.reference[a]-g[a]-c.rects.popper[l];g=g[a]-c.rects.reference[a];f=(f=ra(f))?"y"===a?f.clientHeight||
0:f.clientWidth||0:0;g=f/2-m[l]/2+(q/2-g/2);l=L(e[k],V(g,f-m[l]-e[p]));c.modifiersData[d]=(b={},b[a]=l,b.centerOffset=l-g,b)}},effect:function(a){var b=a.state;a=a.options.element;a=void 0===a?"[data-popper-arrow]":a;if(null!=a){if("string"===typeof a&&(a=b.elements.popper.querySelector(a),!a))return;Wa(b.elements.popper,a)&&(b.elements.arrow=a)}},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(a){var b=
a.state;a=a.name;var c=b.rects.reference,d=b.rects.popper,e=b.modifiersData.preventOverflow,f=ta(b,{elementContext:"reference"}),g=ta(b,{altBoundary:!0});c=gb(f,c);d=gb(g,d,e);e=hb(c);g=hb(d);b.modifiersData[a]={referenceClippingOffsets:c,popperEscapeOffsets:d,isReferenceHidden:e,hasPopperEscaped:g};b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-reference-hidden":e,"data-popper-escaped":g})}}]});let R,va=[],ma=[],Aa=[],pb=[],Zb=Promise.resolve(),Qa=!1,Pa=new Set,Ba=0,Ca=new Set,
aa;class T{$destroy(){X(this,1);this.$destroy=G}$on(a,b){let c=this.$$.callbacks[a]||(this.$$.callbacks[a]=[]);c.push(b);return()=>{let d=c.indexOf(b);-1!==d&&c.splice(d,1)}}$set(a){this.$$set&&0!==Object.keys(a).length&&(this.$$.skip_bound=!0,this.$$set(a),this.$$.skip_bound=!1)}}class bc extends T{constructor(a){super();S(this,a,ac,$b,Q,{config:6,step:7})}}class qc extends T{constructor(a){super();S(this,a,dc,cc,Q,{step:0})}}class jc extends T{constructor(a){super();S(this,a,fc,ec,Q,{cancelIcon:0,
step:2})}}class ic extends T{constructor(a){super();S(this,a,hc,gc,Q,{labelId:1,element:0,title:2})}}class oc extends T{constructor(a){super();S(this,a,lc,kc,Q,{labelId:0,step:1})}}class pc extends T{constructor(a){super();S(this,a,nc,mc,Q,{descriptionId:1,element:0,step:2})}}class uc extends T{constructor(a){super();S(this,a,sc,rc,Q,{descriptionId:0,labelId:1,step:2})}}class Cc extends T{constructor(a){super();S(this,a,vc,tc,Q,{classPrefix:11,element:0,descriptionId:2,firstFocusableElement:8,focusableElements:9,
labelId:3,lastFocusableElement:10,step:4,dataStepId:1,getElement:12})}get getElement(){return this.$$.ctx[12]}}var Cb=function(a,b){return b={exports:{}},a(b,b.exports),b.exports}(function(a,b){(function(){a.exports={polyfill:function(){function c(h,t){this.scrollLeft=h;this.scrollTop=t}function d(h){if(null===h||"object"!==typeof h||void 0===h.behavior||"auto"===h.behavior||"instant"===h.behavior)return!0;if("object"===typeof h&&"smooth"===h.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+
h.behavior+" is not a valid value for enumeration ScrollBehavior.");}function e(h,t){if("Y"===t)return h.clientHeight+x<h.scrollHeight;if("X"===t)return h.clientWidth+x<h.scrollWidth}function f(h,t){h=k.getComputedStyle(h,null)["overflow"+t];return"auto"===h||"scroll"===h}function g(h){var t=e(h,"Y")&&f(h,"Y");h=e(h,"X")&&f(h,"X");return t||h}function l(h){var t=(r()-h.startTime)/468;var v=.5*(1-Math.cos(Math.PI*(1<t?1:t)));t=h.startX+(h.x-h.startX)*v;v=h.startY+(h.y-h.startY)*v;h.method.call(h.scrollable,
t,v);t===h.x&&v===h.y||k.requestAnimationFrame(l.bind(k,h))}function m(h,t,v){var A=r();if(h===p.body){var u=k;var w=k.scrollX||k.pageXOffset;h=k.scrollY||k.pageYOffset;var y=n.scroll}else u=h,w=h.scrollLeft,h=h.scrollTop,y=c;l({scrollable:u,method:y,startTime:A,startX:w,startY:h,x:t,y:v})}var k=window,p=document;if(!("scrollBehavior"in p.documentElement.style&&!0!==k.__forceSmoothScrollPolyfill__)){var q=k.HTMLElement||k.Element,n={scroll:k.scroll||k.scrollTo,scrollBy:k.scrollBy,elementScroll:q.prototype.scroll||
c,scrollIntoView:q.prototype.scrollIntoView},r=k.performance&&k.performance.now?k.performance.now.bind(k.performance):Date.now,x=/MSIE |Trident\/|Edge\//.test(k.navigator.userAgent)?1:0;k.scroll=k.scrollTo=function(h,t){void 0!==h&&(!0===d(h)?n.scroll.call(k,void 0!==h.left?h.left:"object"!==typeof h?h:k.scrollX||k.pageXOffset,void 0!==h.top?h.top:void 0!==t?t:k.scrollY||k.pageYOffset):m.call(k,p.body,void 0!==h.left?~~h.left:k.scrollX||k.pageXOffset,void 0!==h.top?~~h.top:k.scrollY||k.pageYOffset))};
k.scrollBy=function(h,t){void 0!==h&&(d(h)?n.scrollBy.call(k,void 0!==h.left?h.left:"object"!==typeof h?h:0,void 0!==h.top?h.top:void 0!==t?t:0):m.call(k,p.body,~~h.left+(k.scrollX||k.pageXOffset),~~h.top+(k.scrollY||k.pageYOffset)))};q.prototype.scroll=q.prototype.scrollTo=function(h,t){if(void 0!==h)if(!0===d(h)){if("number"===typeof h&&void 0===t)throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==h.left?~~h.left:"object"!==typeof h?~~h:this.scrollLeft,void 0!==
h.top?~~h.top:void 0!==t?~~t:this.scrollTop)}else t=h.left,h=h.top,m.call(this,this,"undefined"===typeof t?this.scrollLeft:~~t,"undefined"===typeof h?this.scrollTop:~~h)};q.prototype.scrollBy=function(h,t){void 0!==h&&(!0===d(h)?n.elementScroll.call(this,void 0!==h.left?~~h.left+this.scrollLeft:~~h+this.scrollLeft,void 0!==h.top?~~h.top+this.scrollTop:~~t+this.scrollTop):this.scroll({left:~~h.left+this.scrollLeft,top:~~h.top+this.scrollTop,behavior:h.behavior}))};q.prototype.scrollIntoView=function(h){if(!0===
d(h))n.scrollIntoView.call(this,void 0===h?!0:h);else{for(h=this;h!==p.body&&!1===g(h);)h=h.parentNode||h.host;var t=h.getBoundingClientRect(),v=this.getBoundingClientRect();h!==p.body?(m.call(this,h,h.scrollLeft+v.left-t.left,h.scrollTop+v.top-t.top),"fixed"!==k.getComputedStyle(h).position&&k.scrollBy({left:t.left,top:t.top,behavior:"smooth"})):k.scrollBy({left:v.left,top:v.top,behavior:"smooth"})}}}}}})()});Cb.polyfill;Cb.polyfill();class Sa extends Ra{constructor(a,b){void 0===b&&(b={});super(a,
b);this.tour=a;this.classPrefix=this.tour.options?jb(this.tour.options.classPrefix):"";this.styles=a.styles;Va(this);this._setOptions(b);return this}cancel(){this.tour.cancel();this.trigger("cancel")}complete(){this.tour.complete();this.trigger("complete")}destroy(){this.tooltip&&(this.tooltip.destroy(),this.tooltip=null);this.el instanceof HTMLElement&&this.el.parentNode&&(this.el.parentNode.removeChild(this.el),this.el=null);this._updateStepTargetOnHide();this.trigger("destroy")}getTour(){return this.tour}hide(){this.tour.modal.hide();
this.trigger("before-hide");this.el&&(this.el.hidden=!0);this._updateStepTargetOnHide();this.trigger("hide")}isCentered(){let a=Ma(this);return!a.element||!a.on}isOpen(){return!(!this.el||this.el.hidden)}show(){if(ea(this.options.beforeShowPromise)){let a=this.options.beforeShowPromise();if(void 0!==a)return a.then(()=>this._show())}this._show()}updateStepOptions(a){Object.assign(this.options,a);this.shepherdElementComponent&&this.shepherdElementComponent.$set({step:this})}getElement(){return this.el}getTarget(){return this.target}_createTooltipContent(){this.shepherdElementComponent=
new Cc({target:this.tour.options.stepsContainer||document.body,props:{classPrefix:this.classPrefix,descriptionId:`${this.id}-description`,labelId:`${this.id}-label`,step:this,styles:this.styles}});return this.shepherdElementComponent.getElement()}_scrollTo(a){let {element:b}=Ma(this);ea(this.options.scrollToHandler)?this.options.scrollToHandler(b):b instanceof Element&&"function"===typeof b.scrollIntoView&&b.scrollIntoView(a)}_getClassOptions(a){var b=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;
b=b&&b.classes?b.classes:"";a=[...(a.classes?a.classes:"").split(" "),...b.split(" ")];a=new Set(a);return Array.from(a).join(" ").trim()}_setOptions(a){void 0===a&&(a={});let b=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;b=Ac({},b||{});this.options=Object.assign({arrow:!0},b,a);let {when:c}=this.options;this.options.classes=this._getClassOptions(a);this.destroy();this.id=this.options.id||`step-${Na()}`;c&&Object.keys(c).forEach(d=>{this.on(d,c[d],this)})}_setupElements(){void 0!==
this.el&&this.destroy();this.el=this._createTooltipContent();this.options.advanceOn&&Hb(this);this.tooltip&&this.tooltip.destroy();let a=Ma(this),b=a.element,c=Xb(a,this);this.isCentered()&&(b=document.body,this.shepherdElementComponent.getElement().classList.add("shepherd-centered"));this.tooltip=Bc(b,this.el,c);this.target=a.element}_show(){this.trigger("before-show");this._setupElements();this.tour.modal||this.tour._setupModal();this.tour.modal.setupForStep(this);this._styleTargetElementForStep(this);
this.el.hidden=!1;this.options.scrollTo&&setTimeout(()=>{this._scrollTo(this.options.scrollTo)});this.el.hidden=!1;let a=this.shepherdElementComponent.getElement(),b=this.target||document.body;b.classList.add(`${this.classPrefix}shepherd-enabled`);b.classList.add(`${this.classPrefix}shepherd-target`);a.classList.add("shepherd-enabled");this.trigger("show")}_styleTargetElementForStep(a){let b=a.target;b&&(a.options.highlightClass&&b.classList.add(a.options.highlightClass),b.classList.remove("shepherd-target-click-disabled"),
!1===a.options.canClickTarget&&b.classList.add("shepherd-target-click-disabled"))}_updateStepTargetOnHide(){let a=this.target||document.body;this.options.highlightClass&&a.classList.remove(this.options.highlightClass);a.classList.remove("shepherd-target-click-disabled",`${this.classPrefix}shepherd-enabled`,`${this.classPrefix}shepherd-target`)}}class Dc extends T{constructor(a){super();S(this,a,yc,xc,Q,{element:0,openingProperties:4,getElement:5,closeModalOpening:6,hide:7,positionModal:8,setupForStep:9,
show:10})}get getElement(){return this.$$.ctx[5]}get closeModalOpening(){return this.$$.ctx[6]}get hide(){return this.$$.ctx[7]}get positionModal(){return this.$$.ctx[8]}get setupForStep(){return this.$$.ctx[9]}get show(){return this.$$.ctx[10]}}let oa=new Ra;class Ec extends Ra{constructor(a){void 0===a&&(a={});super(a);Va(this);this.options=Object.assign({},{exitOnEsc:!0,keyboardNavigation:!0},a);this.classPrefix=jb(this.options.classPrefix);this.steps=[];this.addSteps(this.options.steps);"active cancel complete inactive show start".split(" ").map(b=>
{(c=>{this.on(c,d=>{d=d||{};d.tour=this;oa.trigger(c,d)})})(b)});this._setTourID();return this}addStep(a,b){a instanceof Sa?a.tour=this:a=new Sa(this,a);void 0!==b?this.steps.splice(b,0,a):this.steps.push(a);return a}addSteps(a){Array.isArray(a)&&a.forEach(b=>{this.addStep(b)});return this}back(){let a=this.steps.indexOf(this.currentStep);this.show(a-1,!1)}cancel(){this.options.confirmCancel?window.confirm(this.options.confirmCancelMessage||"Are you sure you want to stop the tour?")&&this._done("cancel"):
this._done("cancel")}complete(){this._done("complete")}getById(a){return this.steps.find(b=>b.id===a)}getCurrentStep(){return this.currentStep}hide(){let a=this.getCurrentStep();if(a)return a.hide()}isActive(){return oa.activeTour===this}next(){let a=this.steps.indexOf(this.currentStep);a===this.steps.length-1?this.complete():this.show(a+1,!0)}removeStep(a){let b=this.getCurrentStep();this.steps.some((c,d)=>{if(c.id===a)return c.isOpen()&&c.hide(),c.destroy(),this.steps.splice(d,1),!0});b&&b.id===
a&&(this.currentStep=void 0,this.steps.length?this.show(0):this.cancel())}show(a,b){void 0===a&&(a=0);void 0===b&&(b=!0);if(a=qa(a)?this.getById(a):this.steps[a])this._updateStateBeforeShow(),ea(a.options.showOn)&&!a.options.showOn()?this._skipStep(a,b):(this.trigger("show",{step:a,previous:this.currentStep}),this.currentStep=a,a.show())}start(){this.trigger("start");this.focusedElBeforeOpen=document.activeElement;this.currentStep=null;this._setupModal();this._setupActiveTour();this.next()}_done(a){let b=
this.steps.indexOf(this.currentStep);Array.isArray(this.steps)&&this.steps.forEach(c=>c.destroy());wc(this);this.trigger(a,{index:b});oa.activeTour=null;this.trigger("inactive",{tour:this});this.modal&&this.modal.hide();"cancel"!==a&&"complete"!==a||!this.modal||(a=document.querySelector(".shepherd-modal-overlay-container"))&&a.remove();this.focusedElBeforeOpen instanceof HTMLElement&&this.focusedElBeforeOpen.focus()}_setupActiveTour(){this.trigger("active",{tour:this});oa.activeTour=this}_setupModal(){this.modal=
new Dc({target:this.options.modalContainer||document.body,props:{classPrefix:this.classPrefix,styles:this.styles}})}_skipStep(a,b){a=this.steps.indexOf(a);a===this.steps.length-1?this.complete():this.show(b?a+1:a-1,b)}_updateStateBeforeShow(){this.currentStep&&this.currentStep.hide();this.isActive()||this._setupActiveTour()}_setTourID(){this.id=`${this.options.tourName||"tour"}--${Na()}`}}Object.assign(oa,{Tour:Ec,Step:Sa});return oa})

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Backbone, Drupal, settings, document, Shepherd) {
  var queryString = decodeURI(window.location.search);
  Drupal.behaviors.tour = {
    attach: function attach(context) {
      once('tour', 'body').forEach(function () {
        var model = new Drupal.tour.models.StateModel();
        new Drupal.tour.views.ToggleTourView({
          el: $(context).find('#toolbar-tab-tour'),
          model: model
        });
        model.on('change:isActive', function (tourModel, isActive) {
          $(document).trigger(isActive ? 'drupalTourStarted' : 'drupalTourStopped');
        });
        if (settings._tour_internal) {
          model.set('tour', settings._tour_internal);
        }
        if (/tour=?/i.test(queryString)) {
          model.set('isActive', true);
        }
      });
    }
  };
  Drupal.tour = Drupal.tour || {
    models: {},
    views: {}
  };
  Drupal.tour.models.StateModel = Backbone.Model.extend({
    defaults: {
      tour: [],
      isActive: false,
      activeTour: []
    }
  });
  Drupal.tour.views.ToggleTourView = Backbone.View.extend({
    events: {
      click: 'onClick'
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change:tour change:isActive', this.render);
      this.listenTo(this.model, 'change:isActive', this.toggleTour);
    },
    render: function render() {
      this.$el.toggleClass('hidden', this._getTour().length === 0);
      var isActive = this.model.get('isActive');
      this.$el.find('button').toggleClass('is-active', isActive).attr('aria-pressed', isActive);
      return this;
    },
    toggleTour: function toggleTour() {
      if (this.model.get('isActive')) {
        this._removeIrrelevantTourItems(this._getTour());
        var tourItems = this.model.get('tour');
        var that = this;
        if (tourItems.length) {
          settings.tourShepherdConfig.defaultStepOptions.popperOptions.modifiers.push({
            name: 'moveArrowJoyridePosition',
            enabled: true,
            phase: 'write',
            fn: function fn(_ref) {
              var state = _ref.state;
              var arrow = state.elements.arrow;
              var placement = state.placement;
              if (arrow && /^top|bottom/.test(placement) && /-start|-end$/.test(placement)) {
                var horizontalPosition = placement.split('-')[1];
                var offset = horizontalPosition === 'start' ? 28 : state.elements.popper.clientWidth - 56;
                arrow.style.transform = "translate3d(".concat(offset, "px, 0px, 0px)");
              }
            }
          });
          var shepherdTour = new Shepherd.Tour(settings.tourShepherdConfig);
          shepherdTour.on('cancel', function () {
            that.model.set('isActive', false);
          });
          shepherdTour.on('complete', function () {
            that.model.set('isActive', false);
          });
          tourItems.forEach(function (tourStepConfig, index) {
            var tourItemOptions = {
              title: tourStepConfig.title ? Drupal.checkPlain(tourStepConfig.title) : null,
              text: function text() {
                return Drupal.theme('tourItemContent', tourStepConfig);
              },
              attachTo: tourStepConfig.attachTo,
              buttons: [Drupal.tour.nextButton(shepherdTour, tourStepConfig)],
              classes: tourStepConfig.classes,
              index: index
            };
            tourItemOptions.when = {
              show: function show() {
                var nextButton = shepherdTour.currentStep.el.querySelector('footer button');
                nextButton.focus();
                if (Drupal.tour.hasOwnProperty('convertToJoyrideMarkup')) {
                  Drupal.tour.convertToJoyrideMarkup(shepherdTour);
                }
              }
            };
            shepherdTour.addStep(tourItemOptions);
          });
          shepherdTour.start();
          this.model.set({
            isActive: true,
            activeTour: shepherdTour
          });
        }
      } else {
        this.model.get('activeTour').cancel();
        this.model.set({
          isActive: false,
          activeTour: []
        });
      }
    },
    onClick: function onClick(event) {
      this.model.set('isActive', !this.model.get('isActive'));
      event.preventDefault();
      event.stopPropagation();
    },
    _getTour: function _getTour() {
      return this.model.get('tour');
    },
    _removeIrrelevantTourItems: function _removeIrrelevantTourItems(tourItems) {
      var tips = /tips=([^&]+)/.exec(queryString);
      var filteredTour = tourItems.filter(function (tourItem) {
        if (tips && tourItem.hasOwnProperty('classes') && tourItem.classes.indexOf(tips[1]) === -1) {
          return false;
        }
        return !(tourItem.selector && !document.querySelector(tourItem.selector));
      });
      if (tourItems.length !== filteredTour.length) {
        filteredTour.forEach(function (filteredTourItem, filteredTourItemId) {
          filteredTour[filteredTourItemId].counter = Drupal.t('!tour_item of !total', {
            '!tour_item': filteredTourItemId + 1,
            '!total': filteredTour.length
          });
          if (filteredTourItemId === filteredTour.length - 1) {
            filteredTour[filteredTourItemId].cancelText = Drupal.t('End tour');
          }
        });
        this.model.set('tour', filteredTour);
      }
    }
  });
  Drupal.tour.nextButton = function (shepherdTour, tourStepConfig) {
    return {
      classes: 'button button--primary',
      text: tourStepConfig.cancelText ? tourStepConfig.cancelText : Drupal.t('Next'),
      action: tourStepConfig.cancelText ? shepherdTour.cancel : shepherdTour.next
    };
  };
  Drupal.theme.tourItemContent = function (tourStepConfig) {
    return "".concat(tourStepConfig.body, "<div class=\"tour-progress\">").concat(tourStepConfig.counter, "</div>");
  };
})(jQuery, Backbone, Drupal, drupalSettings, document, window.Shepherd);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function ($, Drupal, _ref) {
  var tabbable = _ref.tabbable,
    isTabbable = _ref.isTabbable;
  function TabbingManager() {
    this.stack = [];
  }
  function TabbingContext(options) {
    $.extend(this, {
      level: null,
      $tabbableElements: $(),
      $disabledElements: $(),
      released: false,
      active: false,
      trapFocus: false
    }, options);
  }
  $.extend(TabbingManager.prototype, {
    constrain: function constrain(elements) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$trapFocus = _ref2.trapFocus,
        trapFocus = _ref2$trapFocus === void 0 ? false : _ref2$trapFocus;
      var il = this.stack.length;
      for (var i = 0; i < il; i++) {
        this.stack[i].deactivate();
      }
      var tabbableElements = [];
      $(elements).each(function (index, rootElement) {
        tabbableElements = [].concat(_toConsumableArray(tabbableElements), _toConsumableArray(tabbable(rootElement)));
        if (isTabbable(rootElement)) {
          tabbableElements = [].concat(_toConsumableArray(tabbableElements), [rootElement]);
        }
      });
      var tabbingContext = new TabbingContext({
        level: this.stack.length,
        $tabbableElements: $(tabbableElements),
        trapFocus: trapFocus
      });
      this.stack.push(tabbingContext);
      tabbingContext.activate();
      $(document).trigger('drupalTabbingConstrained', tabbingContext);
      return tabbingContext;
    },
    release: function release() {
      var toActivate = this.stack.length - 1;
      while (toActivate >= 0 && this.stack[toActivate].released) {
        toActivate--;
      }
      this.stack.splice(toActivate + 1);
      if (toActivate >= 0) {
        this.stack[toActivate].activate();
      }
    },
    activate: function activate(tabbingContext) {
      var $set = tabbingContext.$tabbableElements;
      var level = tabbingContext.level;
      var $disabledSet = $(tabbable(document.body)).not($set);
      tabbingContext.$disabledElements = $disabledSet;
      var il = $disabledSet.length;
      for (var i = 0; i < il; i++) {
        this.recordTabindex($disabledSet.eq(i), level);
      }
      $disabledSet.prop('tabindex', -1).prop('autofocus', false);
      var $hasFocus = $set.filter('[autofocus]').eq(-1);
      if ($hasFocus.length === 0) {
        $hasFocus = $set.eq(0);
      }
      $hasFocus.trigger('focus');
      if ($set.length && tabbingContext.trapFocus) {
        $set.last().on('keydown.focus-trap', function (event) {
          if (event.key === 'Tab' && !event.shiftKey) {
            event.preventDefault();
            $set.first().focus();
          }
        });
        $set.first().on('keydown.focus-trap', function (event) {
          if (event.key === 'Tab' && event.shiftKey) {
            event.preventDefault();
            $set.last().focus();
          }
        });
      }
    },
    deactivate: function deactivate(tabbingContext) {
      var $set = tabbingContext.$disabledElements;
      var level = tabbingContext.level;
      var il = $set.length;
      tabbingContext.$tabbableElements.first().off('keydown.focus-trap');
      tabbingContext.$tabbableElements.last().off('keydown.focus-trap');
      for (var i = 0; i < il; i++) {
        this.restoreTabindex($set.eq(i), level);
      }
    },
    recordTabindex: function recordTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices') || {};
      tabInfo[level] = {
        tabindex: $el[0].getAttribute('tabindex'),
        autofocus: $el[0].hasAttribute('autofocus')
      };
      $el.data('drupalOriginalTabIndices', tabInfo);
    },
    restoreTabindex: function restoreTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices');
      if (tabInfo && tabInfo[level]) {
        var data = tabInfo[level];
        if (data.tabindex) {
          $el[0].setAttribute('tabindex', data.tabindex);
        } else {
          $el[0].removeAttribute('tabindex');
        }
        if (data.autofocus) {
          $el[0].setAttribute('autofocus', 'autofocus');
        }
        if (level === 0) {
          $el.removeData('drupalOriginalTabIndices');
        } else {
          var levelToDelete = level;
          while (tabInfo.hasOwnProperty(levelToDelete)) {
            delete tabInfo[levelToDelete];
            levelToDelete++;
          }
          $el.data('drupalOriginalTabIndices', tabInfo);
        }
      }
    }
  });
  $.extend(TabbingContext.prototype, {
    release: function release() {
      if (!this.released) {
        this.deactivate();
        this.released = true;
        Drupal.tabbingManager.release(this);
        $(document).trigger('drupalTabbingContextReleased', this);
      }
    },
    activate: function activate() {
      if (!this.active && !this.released) {
        this.active = true;
        Drupal.tabbingManager.activate(this);
        $(document).trigger('drupalTabbingContextActivated', this);
      }
    },
    deactivate: function deactivate() {
      if (this.active) {
        this.active = false;
        Drupal.tabbingManager.deactivate(this);
        $(document).trigger('drupalTabbingContextDeactivated', this);
      }
    }
  });
  if (Drupal.tabbingManager) {
    return;
  }
  Drupal.tabbingManager = new TabbingManager();
})(jQuery, Drupal, window.tabbable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, Backbone) {
  var strings = {
    tabbingReleased: Drupal.t('Tabbing is no longer constrained by the Contextual module.'),
    tabbingConstrained: Drupal.t('Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.'),
    pressEsc: Drupal.t('Press the esc key to exit.')
  };
  function initContextualToolbar(context) {
    if (!Drupal.contextual || !Drupal.contextual.collection) {
      return;
    }
    var contextualToolbar = Drupal.contextualToolbar;
    contextualToolbar.model = new contextualToolbar.StateModel({
      isViewing: localStorage.getItem('Drupal.contextualToolbar.isViewing') !== 'false'
    }, {
      contextualCollection: Drupal.contextual.collection
    });
    var viewOptions = {
      el: $('.toolbar .toolbar-bar .contextual-toolbar-tab'),
      model: contextualToolbar.model,
      strings: strings
    };
    new contextualToolbar.VisualView(viewOptions);
    new contextualToolbar.AuralView(viewOptions);
  }
  Drupal.behaviors.contextualToolbar = {
    attach: function attach(context) {
      if (once('contextualToolbar-init', 'body').length) {
        initContextualToolbar(context);
      }
    }
  };
  Drupal.contextualToolbar = {
    model: null
  };
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, Backbone) {
  Drupal.contextualToolbar.StateModel = Backbone.Model.extend({
    defaults: {
      isViewing: true,
      isVisible: false,
      contextualCount: 0,
      tabbingContext: null
    },
    initialize: function initialize(attrs, options) {
      this.listenTo(options.contextualCollection, 'reset remove add', this.countContextualLinks);
      this.listenTo(options.contextualCollection, 'add', this.lockNewContextualLinks);
      this.listenTo(this, 'change:contextualCount', this.updateVisibility);
      this.listenTo(this, 'change:isViewing', function (model, isViewing) {
        options.contextualCollection.each(function (contextualModel) {
          contextualModel.set('isLocked', !isViewing);
        });
      });
    },
    countContextualLinks: function countContextualLinks(contextualModel, contextualCollection) {
      this.set('contextualCount', contextualCollection.length);
    },
    lockNewContextualLinks: function lockNewContextualLinks(contextualModel, contextualCollection) {
      if (!this.get('isViewing')) {
        contextualModel.set('isLocked', true);
      }
    },
    updateVisibility: function updateVisibility() {
      this.set('isVisible', this.get('contextualCount') > 0);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, Backbone, _) {
  Drupal.contextualToolbar.AuralView = Backbone.View.extend({
    announcedOnce: false,
    initialize: function initialize(options) {
      this.options = options;
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.manageTabbing);
      $(document).on('keyup', _.bind(this.onKeypress, this));
      this.manageTabbing();
    },
    render: function render() {
      this.$el.find('button').attr('aria-pressed', !this.model.get('isViewing'));
      return this;
    },
    manageTabbing: function manageTabbing() {
      var tabbingContext = this.model.get('tabbingContext');
      if (tabbingContext) {
        if (tabbingContext.active) {
          Drupal.announce(this.options.strings.tabbingReleased);
        }
        tabbingContext.release();
      }
      if (!this.model.get('isViewing')) {
        tabbingContext = Drupal.tabbingManager.constrain($('.contextual-toolbar-tab, .contextual'));
        this.model.set('tabbingContext', tabbingContext);
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
    },
    announceTabbingConstraint: function announceTabbingConstraint() {
      var strings = this.options.strings;
      Drupal.announce(Drupal.formatString(strings.tabbingConstrained, {
        '@contextualsCount': Drupal.formatPlural(Drupal.contextual.collection.length, '@count contextual link', '@count contextual links')
      }));
      Drupal.announce(strings.pressEsc);
    },
    onKeypress: function onKeypress(event) {
      if (!this.announcedOnce && event.keyCode === 9 && !this.model.get('isViewing')) {
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
      if (event.keyCode === 27) {
        this.model.set('isViewing', true);
      }
    }
  });
})(jQuery, Drupal, Backbone, _);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, Backbone) {
  Drupal.contextualToolbar.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };
      return {
        click: function click() {
          this.model.set('isViewing', !this.model.get('isViewing'));
        },
        touchend: touchEndToClick
      };
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.persist);
    },
    render: function render() {
      this.$el.toggleClass('hidden', !this.model.get('isVisible'));
      this.$el.find('button').toggleClass('is-active', !this.model.get('isViewing'));
      return this;
    },
    persist: function persist(model, isViewing) {
      if (!isViewing) {
        localStorage.setItem('Drupal.contextualToolbar.isViewing', 'false');
      } else {
        localStorage.removeItem('Drupal.contextualToolbar.isViewing');
      }
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings) {
  var pathInfo = drupalSettings.path;
  var escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  var windowLocation = window.location;
  if (!pathInfo.currentPathIsAdmin && !/destination=/.test(windowLocation.search)) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }
  Drupal.behaviors.escapeAdmin = {
    attach: function attach() {
      var toolbarEscape = once('escapeAdmin', '[data-toolbar-escape-admin]');
      if (toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        if (escapeAdminPath !== null) {
          $(toolbarEscape).attr('href', escapeAdminPath);
        } else {
          toolbarEscape[0].textContent = Drupal.t('Home');
        }
      }
    }
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, drupalSettings) {
  function mapTextContentToAjaxResponse(content) {
    if (content === '') {
      return false;
    }
    try {
      return JSON.parse(content);
    } catch (e) {
      return false;
    }
  }
  function bigPipeProcessPlaceholderReplacement(placeholderReplacement) {
    var placeholderId = placeholderReplacement.getAttribute('data-big-pipe-replacement-for-placeholder-with-id');
    var content = placeholderReplacement.textContent.trim();
    if (typeof drupalSettings.bigPipePlaceholderIds[placeholderId] !== 'undefined') {
      var response = mapTextContentToAjaxResponse(content);
      if (response === false) {
        once.remove('big-pipe', placeholderReplacement);
      } else {
        var ajaxObject = Drupal.ajax({
          url: '',
          base: false,
          element: false,
          progress: false
        });
        ajaxObject.success(response, 'success');
      }
    }
  }
  var interval = drupalSettings.bigPipeInterval || 50;
  var timeoutID;
  function bigPipeProcessDocument(context) {
    if (!context.querySelector('script[data-big-pipe-event="start"]')) {
      return false;
    }
    once('big-pipe-early-behaviors', 'body', context).forEach(function (el) {
      Drupal.attachBehaviors(el);
    });
    once('big-pipe', 'script[data-big-pipe-replacement-for-placeholder-with-id]', context).forEach(bigPipeProcessPlaceholderReplacement);
    if (context.querySelector('script[data-big-pipe-event="stop"]')) {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
      return true;
    }
    return false;
  }
  function bigPipeProcess() {
    timeoutID = setTimeout(function () {
      if (!bigPipeProcessDocument(document)) {
        bigPipeProcess();
      }
    }, interval);
  }
  bigPipeProcess();
  window.addEventListener('load', function () {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    bigPipeProcessDocument(document);
  });
})(Drupal, drupalSettings);;
