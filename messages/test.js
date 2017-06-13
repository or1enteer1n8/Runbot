'use strict'

let client = require('cheerio-httpcli');
const URL = 'https://runnet.jp/entry/runtes/user/pc/competitionDetailAction.do?raceId=156693&div=1&tabFlg=4#tab'

let array = [];
let count = 0;
client.fetch(URL)
    .then(function(result){
        var $ = result.$;
        console.log($('.topTbl').attr('class'));
        console(count++);
    })

