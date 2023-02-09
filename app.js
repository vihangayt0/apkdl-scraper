//Scraper by VihangaYT
//Credits goes to androidapksfree.com

const axios = require('axios')
const cheerio = require('cheerio')

let data = []
async function apksearch(name){
return new Promise(async (resolve, reject) => {
await axios.get('https://androidapksfree.com/?s=' + name)
.then(async html => {
let $ = cheerio.load(html.data)
$bodyList = $("body > div.main-wrap > div > div > div > div.main-content.col.s12.m12.l8 > div > div > div.devapk-apps-list > section:nth-child(1) > div > h1 > a").each(function(hi, hii) {
const link = $(hii).attr('href')
const title = $(hii).attr('title')
data.push({
title : title,
link : link
})})
$bodyList2 = $("body > div.main-wrap > div > div > div > div.main-content.col.s12.m12.l8 > div > div > div.devapk-apps-list > section:nth-child(3) > div > h1 > a").each(function(hi, hii) {
const link = $(hii).attr('href')
const title = $(hii).attr('title')
data.push({
title : title,
link : link
})})
$bodyList3 = $("body > div.main-wrap > div > div > div > div.main-content.col.s12.m12.l8 > div > div > div.devapk-apps-list > section:nth-child(5) > div > h1 > a").each(function(hi, hii) {
const link = $(hii).attr('href')
const title = $(hii).attr('title')
data.push({
title : title,
link : link
})})
resolve(data)
})})}

async function apkdl(link){
return new Promise(async (resolve, reject) => {
const scrape = await axios.get(`${link}download/`, {
withCredentials: true
})
const $g = cheerio.load(scrape.data)
const linkdl = $g('html > body > div.main-wrap > div.main.wrap.cf > div > div > div > div > div.post-container.cf > div > div > div.box > div.boxed-content.boxed-content-mobile > div > div > div.download-button-main.centered-element > a').attr('href')
const size = $g('html > body > div.main-wrap > div.main.wrap.cf > div > div > div > div > div.post-container.cf > div > div > div.box > div.boxed-content.boxed-content-mobile > div > div > div.download-button-main.centered-element > a').text()
const size1 = size.replace('Download APK (','')  
const size2 = size1.replace(')','')          
let data = {
dllink : linkdl,
size : size2
} 
resolve(data)
})}

module.exports = { 
      apksearch,
      apkdl
}
