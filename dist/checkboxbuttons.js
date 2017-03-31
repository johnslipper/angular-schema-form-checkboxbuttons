angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('src/templates/checkboxbuttons.html','<div class="form-group schema-form-checkboxbuttons {{form.htmlClass}}"\n     sf-field-model="sf-new-array"\n     sf-new-array\n     ng-class="{\'has-error\': form.disableErrorState !== true &&  hasError(), \'has-success\': form.disableSuccessState !== true &&  hasSuccess()}">\n  <div>\n    <label class="control-label {{form.labelHtmlClass}}" ng-show="showTitle()">{{form.title}}</label>\n  </div>\n  <div class="btn-group">\n    <label class="btn {{ titleMapValues[$index] ? form.style.selected || \'btn-default\' : form.style.unselected || \'btn-default\'; }}"\n           ng-class="{ active: titleMapValues[$index] }"\n           ng-repeat="item in form.titleMap">\n      <input type="checkbox"\n            class="{{form.fieldHtmlClass}}"\n            sf-changed="form"\n            style="display: none;"\n            ng-disabled="form.readonly"\n            ng-model="titleMapValues[$index]"\n            name="{{form.key.slice(-1)[0]}}">\n      <span ng-bind-html="form.titleMap[$index].name"></span>\n    </label>\n  </div>\n  <div class="help-block" sf-message="form.description"></div>\n</div>');}]);
angular.module('checkboxbuttons', [
  'schemaForm',
  'templates'
]).config(function(schemaFormDecoratorsProvider, sfBuilderProvider) {

  schemaFormDecoratorsProvider.defineAddOn(
    'bootstrapDecorator',           // Name of the decorator you want to add to.
    'checkboxbuttons',                      // Form type that should render this add-on
    'src/templates/checkboxbuttons.html',  // Template name in $templateCache
    sfBuilderProvider.stdBuilders   // List of builder functions to apply.
  );

});
