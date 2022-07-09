function formatNumber(number, decimals) {
  decimals = typeof decimals === 'undefined' ? 2 : Number(decimals);
  number = Number(number);
  if (Number.isNaN(number)) return '-';
  number = number.toFixed(decimals).split('.');
  number[0] = number[0].split('');
  var retVal = '';
  var count = number[0].length;
  for (let i = 0; i < count; i++) {
    retVal = number[0][count - i - 1] + retVal;
    if (i % 3 == 2) retVal = ',' + retVal;
  }
  if (retVal.startsWith(',')) retVal = retVal.substring(1);
  number[0] = retVal;
  return number.join('.');
}
  
export default formatNumber;