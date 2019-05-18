import template from './template'
import style from './style'

const nameModule = 'cal-app'
const nameComponent = 'calApp'

angular.module(nameModule)
.component(nameComponent, {
    templateUrl: template,
    controller: ['$element', '$attrs', CalScreenController],
    bindings: {
        scrExpression: '<',
        scrResult: '<'
    }
});

const CalScreenController = function ($element, $attrs) {
    let self = this;
    
    self.expression = $attrs.expression;
    self.result = $attrs.result;
}
