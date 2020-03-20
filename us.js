// Assumptions: 
// 1. Before 14 people infected the infection rate is 2.5 every 14 days. 
// 2. Once 14 people we get a rate of 2.5 every day, doubling at every 14 patients. 
//
// Best known first case in US. This takes into account the January 19th date and subtracts the 4 days of cough,
// and fever, I don't know the original infection date, I can't find a source. Will update once one is found. 
// source: https://www.nejm.org/doi/full/10.1056/NEJMoa2001191
var start_date = new Date('01/15/2020')
console.log(start_date)