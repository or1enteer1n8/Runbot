'use strict'

var client = require('cheerio-httpcli');
const URL = 'https://runnet.jp/entry/runtes/user/pc/competitionDetailAction.do?raceId=156693&div=1&tabFlg=4#tab'

client.fetch(URL)
.then(function(result){
    result.$('td.entryArea02').each(function(index,element){
        console.log(element.childNodes);
    });
})

