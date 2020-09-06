Elements = {
'pars': [document.querySelector('par1')],
'buttons': [document.querySelector('but1')],
}

State = {
'Count': 0,
'd': 1,
}

function MainTimer(){
State['Count'] += State['d'];
Elements['p'][0] = State['Count'];
}

setInterval(MainTimer, 1000);
