var CalMainController = function ($element, $attrs) {
    let self = this;

    self.$onInit = function () {
        self.expression = "";
        self.result = "0";

        self.keyboard = [
            {label: "AC", name: "ac",    type: "action",   passValue: "AC", handler: self.resetClick      },
            {label: "=",  name: "equal", type: "action",   passValue: "=",  handler: self.equalClick      },
            {label: "+",  name: "plus",  type: "operator", passValue: "+",  handler: self.operatorClick   },
            {label: "-",  name: "sub",   type: "operator", passValue: "-",  handler: self.operatorClick   },
            {label: "x",  name: "mul",   type: "operator", passValue: "*",  handler: self.operatorClick   },
            {label: "/",  name: "div",   type: "operator", passValue: "/",  handler: self.operatorClick   },
            {label: ".",  name: "dot",   type: "special",  passValue: ".",  handler: self.numberOrDotClick},
            {label: "0",  name: "zero",  type: "number",   passValue: "0",  handler: self.numberOrDotClick},
            {label: "1",  name: "one",   type: "number",   passValue: "1",  handler: self.numberOrDotClick},
            {label: "2",  name: "two",   type: "number",   passValue: "2",  handler: self.numberOrDotClick},
            {label: "3",  name: "three", type: "number",   passValue: "3",  handler: self.numberOrDotClick},
            {label: "4",  name: "four",  type: "number",   passValue: "4",  handler: self.numberOrDotClick},
            {label: "5",  name: "five",  type: "number",   passValue: "5",  handler: self.numberOrDotClick},
            {label: "6",  name: "six",   type: "number",   passValue: "6",  handler: self.numberOrDotClick},
            {label: "7",  name: "seven", type: "number",   passValue: "7",  handler: self.numberOrDotClick},
            {label: "8",  name: "eight", type: "number",   passValue: "8",  handler: self.numberOrDotClick},
            {label: "9",  name: "nine",  type: "number",   passValue: "9",  handler: self.numberOrDotClick}
        ];
    }

    self.resetClick = function () {
        self.result = "0";
        self.expression = "";
    }

    self.numberOrDotClick = function (number) {
        if (self.result[0] === "0") {
            self.result = self.result.substring(1, self.result.length);
        }
        if (isNaN(self.result)) {
            self.result = "";
        }
        self.expression += number;
        self.result += number;
    }

    self.operatorClick = function (operator) {
        self.expression = self.result;
        self.expression += operator;
        self.result = operator;
    }

    self.equalClick = function () {
        let result;
        try {
            result = eval(self.expression)
        } catch (error) {
            result = "error";
            self.expression = "";
        }
        finally {
            self.result = result;
        }
    }
}