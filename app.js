const axios = require('axios')
const cheerio = require('cheerio')

async function getGloblePopulation(){
  await axios.get('https://countrymeters.info/en/World')
  .then(async html => {
      let $ = cheerio.load(html.data)
      $bodyList = $("#population_clock > table > tbody > tr:nth-child(1) > td.counter")
      console.log($bodyList.text())
      })  
  }
module.exports = { getGloblePopulation }
