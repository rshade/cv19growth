const fetch = require("node-fetch");
var url = 'https://covidtracking.com/api/us'
var census_url='https://api.census.gov/data/2019/pep/natmonthly?get=POP,MONTHLY_DESC&for=us:*'
var covid_data = function(url){
  return fetch(url)
  .then(response => response.json())
  .then(response => { return response})
}

console.log(covid_data(url))

fetch(census_url).then(response => response.json())
    .then(response => {
            console.log(response);
        }, error => {
            console.error(error);
        });