angular.module("calApp").component("calMain", {
    templateUrl: "./app/components/cal-main/cal-main.template.html",
    controller: ["$element", "$attrs", CalMainController]
});