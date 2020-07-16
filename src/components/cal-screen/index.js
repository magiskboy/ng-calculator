import template from './template'
import style from './style'

const nameModule = 'cal-screen'
const nameComponent = 'calScreen'

const CalScreenController = function ($element, $attrs) {
    let self = this;

    self.expression = $attrs.expression;
    self.result = $attrs.result;
}

angular.module(nameModule, [])
.component(nameComponent, {
    template: template,
    controller: ['$element', '$attrs', CalScreenController],
    bindings: {
        scrExpression: '<',
        scrResult: '<'
    }
});

export { nameComponent, nameModule }
