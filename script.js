Elements = {
'pars': [document.querySelector('#par1')],
'buttons': [document.querySelector('#but1')],
}

Game = {
'Count': 0,
'passPlus': 1,
'butPlus': 10,
}

function Click1(){
Game['Count'] += Game['butPlus'];
}

function MainTimer(){
Game['Count'] += Game['passPlus'];
Elements['pars'][0].innerHTML = Game['Count'];
}

setInterval(MainTimer, 1000);
