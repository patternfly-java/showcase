goog.module('java.util.function.Supplier.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Supplier = goog.require('java.util.function.Supplier$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @template T
 * @implements {Supplier<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():T */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():T} @nodts*/
  this.f_fn__java_util_function_Supplier_$LambdaAdaptor;
  this.$ctor__java_util_function_Supplier_$LambdaAdaptor__java_util_function_Supplier_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_Supplier_$LambdaAdaptor__java_util_function_Supplier_$JsFunction__void(/** ?function():T */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_Supplier_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {T} */
 m_get__java_lang_Object() {
  let /** ?function():T */ $function;
  return ($function = this.f_fn__java_util_function_Supplier_$LambdaAdaptor, $function());
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Supplier.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.Supplier$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Supplier$$LambdaAdaptor.js.map
