exports.numberWithDotsHelper = function(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

exports.traduceConditionHelper = function(condition) {
  return (condition === 'new') ? 'Nuevo' : 'Usado';
}
