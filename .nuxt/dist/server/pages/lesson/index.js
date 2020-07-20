exports.ids = [4];
exports.modules = {

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/lesson/index.vue?vue&type=template&id=434cc439&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<h1> Your Lessons </h1> <ul>"+(_vm._ssrList((_vm.lessonPosts),function(lesson){return ("<li><a"+(_vm._ssrAttr("href",'/lesson/'+lesson.slug))+"><div>"+_vm._ssrEscape(" "+_vm._s(lesson.title)+" ")+"</div></a></li>")}))+"</ul> <a href=\"/\">Home</a>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/lesson/index.vue?vue&type=template&id=434cc439&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/lesson/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lessonvue_type_script_lang_js_ = ({
  computed: {
    lessonPosts() {
      console.log("Lessons: ", this.$store.state.lessonPosts);
      return this.$store.state.lessonPosts;
    }

  }
});
// CONCATENATED MODULE: ./pages/lesson/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_lessonvue_type_script_lang_js_ = (lessonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/lesson/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_lessonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "12950688"
  
)

/* harmony default export */ var lesson = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map