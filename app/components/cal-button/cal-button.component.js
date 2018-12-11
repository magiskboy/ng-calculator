angular.module("calApp").component("calButton", {
    templateUrl: "./app/components/cal-button/cal-button.template.html",
    controller: ["$attrs", CalButtonController],
    bindings: {
        btnLabel: "<"
    }
});