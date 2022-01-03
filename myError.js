function DivisionByZeroError(message) {
  this.name = 'DivisionByZeroError';
  this.message = 'На ноль делить нельзя';
  this.stack = (new Error()).stack;
}
DivisionByZeroError.prototype = Object.create(Error.prototype);
DivisionByZeroError.prototype.constructor = DivisionByZeroError;

function divide(a,b) {
  if (b === 0) {
    throw new DivisionByZeroError();
  }
  return a/b
} 
let result = divide(1,0);
console.log(result);

