Elements = {
'pars': [document.querySelector('#par1')],
'buttons': [document.querySelector('#but1')],
'texts': [document.querySelector('#text1')],
}

Game = {
'Count': 0,
'passPlus': 1,
'butPlus': 10,
}

function Click1(){
if(+Elements['texts'][0].value > 0)Game['Count'] += +Elements['texts'][0].value;
else alert('Error number');
}

function MainTimer(){
Game['Count'] += Game['passPlus'];
Elements['pars'][0].innerHTML = Game['Count'];
}

setInterval(MainTimer, 1000);
