import angular from 'angularjs'
import template from './template'
import style from './style'

const nameModule = 'cal-button'
const nameComponent = 'calButton'

angular.module(nameModule)
.component(nameComponent, {
    template: template,
    controller: ['$attrs', CalButtonController],
    bindings: {
        btnLabel: '<'
    }
});

const CalButtonController = function ($attrs) {
    let self = this;

    self.$onInit = function () {};
}

export { nameModule, nameComponent }
