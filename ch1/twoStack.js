"use strict";

function evaluate(expression) {
  var operators = [],
    values = [];

  var tokens = tokenize(expression);
  for (var i = 0; i < tokens.length; i++) {
    var processor = getCharProcessor(tokens[i]);
    processor({token: tokens[i], operators: operators, values: values});
  }
  return values.pop();
}

function tokenize(expression) {
  return expression.split(' ');
}

function doNothing() {
}

function pushOperator(params) {
  params.operators.push(params.token);
}

function addValue(params) {
  var val = parseFloat(params.token);
  params.values.push(val);
}

function partial(values, operation) {
  var a = values.pop();
  var b = values.pop();
  return operation(a, b);
}

function add(values) {
  return partial(values, function (a, b) {
    return a + b;
  });
}

function subtract(values) {
  return partial(values, function (a, b) {
    return a - b;
  });
}

function multiple(values) {
  return partial(values, function (a, b) {
    return a * b;
  });
}

function divide(values) {
  return partial(values, function (a, b) {
    return  b / a;
  });
}

function sqrt(values) {
  return Math.sqrt(values.pop());
}

var operatorsActions = {
  "+": add,
  "-": subtract,
  "*": multiple,
  "/": divide,
  'sqrt': sqrt
};

function processPopping(params) {
  var operator = params.operators.pop();
  var result = operatorsActions[operator](params.values);
  params.values.push(result);
}

function getCharProcessor(token) {
  if (token === '(') {
    return doNothing;
  }
  if (operatorsActions[token]) {
    return pushOperator;
  }
  if (token === ')') {
    return processPopping;
  }
  return addValue;
}

module.exports = evaluate;