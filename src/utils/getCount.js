export const countTipAmount = ( bill, people, tipHolder) => {
  parseFloat(bill)
  parseFloat(tipHolder)
  parseInt(people)

  let result = (parseInt(((bill * (tipHolder / 100)) / people) * 100) / 100).toFixed(2);
  return result
}

