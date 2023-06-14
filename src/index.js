import React from "react";

export function map(children, func, context) {
  let index = 0;

  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    return func.call(context, child, index++);
  });
}

export function forEach(children, func, context) {
  let index = 0;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) {
      return;
    }

    func.call(context, child, index++);
  });
}

export function count(children) {
  let result = 0;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      result++;
    }
  });

  return result;
}

export function filter(children, func, context) {
  const result = [];

  forEach(children, (child, index) => {
    if (func.call(context, child, index)) {
      result.push(child);
    }
  });

  return result;
}

export function find(children, func, context) {
  let result;

  forEach(children, (child, index) => {
    if (!result && func.call(context, child, index)) {
      result = child;
    }
  });

  return result;
}

export function every(children, func, context) {
  let result = true;

  forEach(children, (child, index) => {
    if (!func.call(context, child, index)) {
      result = false;
    }
  });

  return result;
}

export function some(children, func, context) {
  let result = false;

  forEach(children, (child, index) => {
    if (func.call(context, child, index)) {
      result = true;
    }
  });

  return result;
}

export function toArray(children) {
  const result = [];

  forEach(children, (child) => {
    result.push(child);
  });

  return result;
}
