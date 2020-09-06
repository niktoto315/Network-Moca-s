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
State['Count'] += State['butPlus'];
}

function MainTimer(){
State['Count'] += State['passPlus'];
Elements['pars'][0] = State['Count'];
}

setInterval(MainTimer, 1000);
