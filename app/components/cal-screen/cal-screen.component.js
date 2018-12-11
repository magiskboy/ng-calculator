angular.module("calApp").component("calScreen", {
    templateUrl: "./app/components/cal-screen/cal-screen.template.html",
    controller: CalScreenController,
    bindings: {
        scrExpression: "<",
        scrResult: "<"
    }
});