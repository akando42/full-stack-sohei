(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{287:function(e,t,r){var content=r(319);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(14).default)("40540d24",content,!0,{sourceMap:!1})},317:function(e,t,r){var map={"./deploying-the-web-app-using-netlify-and-github.json":144,"./setting-the-initial-project-and-publish-your-first-post.json":145};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=317},318:function(e,t,r){"use strict";var n=r(287);r.n(n).a},319:function(e,t,r){(t=r(13)(!1)).push([e.i,".description{color:#00f;font-size:21px}.player{border:3px solid #00f;border-radius:6px}",""]),e.exports=t},348:function(e,t,r){"use strict";r.r(t);r(30);var n=r(3),o={asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.params,!(o=e.payload)){t.next=6;break}return console.log("PAYLOAD",o),t.abrupt("return",{lessonPost:o});case 6:return t.next=8,r(317)("./".concat(n.lesson,".json"));case 8:return t.t0=t.sent,t.abrupt("return",{lessonPost:t.t0});case 10:case"end":return t.stop()}}),t)})))()}},c=(r(318),r(7)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",[r("h1",[e._v(e._s(e.lessonPost.title))]),e._v(" "),r("div",{staticClass:"description"},[e._v(" "+e._s(e.lessonPost.description))]),e._v(" "),r("div",{staticClass:"content"},[e._v(" "+e._s(e.lessonPost.body)+" ")]),e._v(" "),r("iframe",{staticClass:"player",attrs:{width:"1120",height:"630",src:"https://www.youtube.com/embed/"+e.lessonPost.video_id+"?controls=0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}),[],!1,null,null,null);t.default=component.exports}}]);