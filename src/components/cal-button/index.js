import template from './template'
import style from './style'

const nameModule = 'cal-button'
const nameComponent = 'calButton'

const CalButtonController = function ($attrs) {
    let self = this;

    self.$onInit = function () {};
}

angular.module(nameModule, [])
.component(nameComponent, {
    template: template,
    controller: ['$attrs', CalButtonController],
    bindings: {
        btnLabel: '<'
    }
});

export { nameModule, nameComponent }
