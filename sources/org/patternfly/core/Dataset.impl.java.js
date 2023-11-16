goog.module('org.patternfly.core.Dataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class Dataset {
 /** @nodts */
 static $clinit() {
  Dataset.$clinit = () =>{};
  Dataset.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_core_Dataset = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_core_Dataset;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@const {string} @nodts*/
Dataset.f_expandableSectionId__org_patternfly_core_Dataset = 'expandableSectionId';
/**@const {string} @nodts*/
Dataset.f_expandableSectionTarget__org_patternfly_core_Dataset = 'expandableSectionTarget';
/**@const {string} @nodts*/
Dataset.f_navigationGroup__org_patternfly_core_Dataset = 'navigationGroup';
/**@const {string} @nodts*/
Dataset.f_navigationItem__org_patternfly_core_Dataset = 'navigationItem';
/**@const {string} @deprecated @nodts*/
Dataset.f_cardViewItem__org_patternfly_core_Dataset = 'cardViewItem';
/**@const {string} @deprecated @nodts*/
Dataset.f_contextSelectorItem__org_patternfly_core_Dataset = 'contextSelectorItem';
/**@const {string} @deprecated @nodts*/
Dataset.f_dataListItem__org_patternfly_core_Dataset = 'dataListItem';
/**@const {string} @deprecated @nodts*/
Dataset.f_dataTableItem__org_patternfly_core_Dataset = 'dataTableItem';
/**@const {string} @deprecated @nodts*/
Dataset.f_dataTableSort__org_patternfly_core_Dataset = 'dataTableSort';
/**@const {string} @deprecated @nodts*/
Dataset.f_dropdownGroup__org_patternfly_core_Dataset = 'dropdownGroup';
/**@const {string} @deprecated @nodts*/
Dataset.f_dropdownItem__org_patternfly_core_Dataset = 'dropdownItem';
/**@const {string} @deprecated @nodts*/
Dataset.f_multiOptionsMenuCheck__org_patternfly_core_Dataset = 'multiOptionsMenuCheck';
/**@const {string} @deprecated @nodts*/
Dataset.f_multiOptionsMenuItem__org_patternfly_core_Dataset = 'multiOptionsMenuItem';
/**@const {string} @deprecated @nodts*/
Dataset.f_multiSelectItem__org_patternfly_core_Dataset = 'multiSelectItem';
/**@const {string} @deprecated @nodts*/
Dataset.f_singleOptionsMenuItem__org_patternfly_core_Dataset = 'singleOptionsMenuItem';
/**@const {string} @deprecated @nodts*/
Dataset.f_singleSelectItem__org_patternfly_core_Dataset = 'singleSelectItem';
/**@const {string} @deprecated @nodts*/
Dataset.f_singleSelectFilter__org_patternfly_core_Dataset = 'singleSelectFilter';
Dataset.$markImplementor(/**@type {Function}*/ (Dataset));
$Util.$setClassMetadataForInterface(Dataset, 'org.patternfly.core.Dataset');

exports = Dataset;

//# sourceMappingURL=Dataset.js.map
