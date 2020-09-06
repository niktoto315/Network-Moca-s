Elements = {
'pars': [document.querySelector('par1')],
'buttons': [document.querySelector('but1')],
}

State = {
'Count': 0,
'passPlus': 1,
'butPlus': 10,
}

function Click1(){
State['Count'] += State['d'];
}

function MainTimer(){
State['Count'] += State['d'];
Elements['p'][0] = State['Count'];
}

setInterval(MainTimer, 1000);
