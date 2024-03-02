goog.module('org.patternfly.showcase.ShowcaseBundleImpl.$2$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextResourcePrototype = goog.require('org.treblereel.j2cl.processors.common.resources.impl.TextResourcePrototype$impl');

let ShowcaseBundleImpl = goog.forwardDeclare('org.patternfly.showcase.ShowcaseBundleImpl$impl');

class $2 extends TextResourcePrototype {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {ShowcaseBundleImpl} @nodts*/
  this.$outer_this__org_patternfly_showcase_ShowcaseBundleImpl_2;
 }
 /** @nodts @return {!$2} */
 static $create__org_patternfly_showcase_ShowcaseBundleImpl(/** ShowcaseBundleImpl */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_patternfly_showcase_ShowcaseBundleImpl_2__org_patternfly_showcase_ShowcaseBundleImpl__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_ShowcaseBundleImpl_2__org_patternfly_showcase_ShowcaseBundleImpl__void(/** ShowcaseBundleImpl */ $outer_this) {
  this.$outer_this__org_patternfly_showcase_ShowcaseBundleImpl_2 = $outer_this;
  this.$ctor__org_treblereel_j2cl_processors_common_resources_impl_TextResourcePrototype__void();
 }
 /** @override @nodts @return {?string} */
 m_getText__java_lang_String() {
  return '{\n  \"bullseye\": {\n    \"name\": \"bullseye\",\n    \"title\": \"Bullseye\",\n    \"route\": \"/layouts/bullseye\",\n    \"clazz\": \"org.patternfly.layout.bullseye.Bullseye\",\n    \"summary\": \"Centers content vertically and horizontally.\"\n  },\n  \"flex\": {\n    \"name\": \"flex\",\n    \"title\": \"Flex\",\n    \"route\": \"/layouts/flex\",\n    \"clazz\": \"org.patternfly.layout.flex.Flex\",\n    \"summary\": \"Creates consistently spaced custom layouts that are responsive to other layouts and PatternFly components.\"\n  },\n  \"gallery\": {\n    \"name\": \"gallery\",\n    \"title\": \"Gallery\",\n    \"route\": \"/layouts/gallery\",\n    \"clazz\": \"org.patternfly.layout.gallery.Gallery\",\n    \"summary\": \"Arranges content in a responsive grid of uniform rows and columns.\"\n  },\n  \"grid\": {\n    \"name\": \"grid\",\n    \"title\": \"Grid\",\n    \"route\": \"/layouts/grid\",\n    \"clazz\": \"org.patternfly.layout.grid.Grid\",\n    \"summary\": \"Arranges content on a fixed-size 12 column grid.\"\n  },\n  \"level\": {\n    \"name\": \"level\",\n    \"title\": \"Level\",\n    \"route\": \"/layouts/level\",\n    \"clazz\": \"org.patternfly.layout.level.Level\",\n    \"summary\": \"Evenly distributes content horizontally.\"\n  },\n  \"split\": {\n    \"name\": \"split\",\n    \"title\": \"Split\",\n    \"route\": \"/layouts/split\",\n    \"clazz\": \"org.patternfly.layout.split.Split\",\n    \"summary\": \"Distributes multiple items horizontally, which adapt to viewport resizing.\"\n  },\n  \"stack\": {\n    \"name\": \"stack\",\n    \"title\": \"Stack\",\n    \"route\": \"/layouts/stack\",\n    \"clazz\": \"org.patternfly.layout.stack.Stack\",\n    \"summary\": \"Distributes multiple items vertically, which adapt to the available space of a container.\"\n  }\n}\n';
 }
 /** @override @nodts @return {?string} */
 m_getName__java_lang_String() {
  return 'layouts';
 }
 /** @nodts */
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  TextResourcePrototype.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($2, 'org.patternfly.showcase.ShowcaseBundleImpl$2');

exports = $2;

//# sourceMappingURL=ShowcaseBundleImpl$2.js.map
