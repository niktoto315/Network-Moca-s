Elements = {
'pars': [document.querySelector('#par1')],
'buttons': [document.querySelector('#but1')],
'selects': [document.querySelector('#sel1')],
};

Game = {
'Count': 0,
'butPlus': 1,
'bonus': 0,
};


Exper = {
'status': false,
'count': 0,
};



console.log(Elements, Game, Exper);



function SelChange(){
Game.butPlus = +Elements['selects'][0].options[Elements['selects'][0].selectedIndex].value;
}

function Click1(){
Game['Count'] += Game.butPlus;
Elements['pars'][0].innerHTML = Game['Count'];
if(Game['Count'] >= 50 && Game['Count'] < 51){
let opt = document.createElement('option');
opt.value = 2;
opt.innerHTML = 2;
Elements['selects'][0].appendChild(opt);
}
}

function Click2(){
if(Game['Count'] < 1){
alert('Недостаточно клонов');
return;
}

alert('Если у вас останется 0 клонов до конца, то эксперимент будет прерван');
console.log(Elements, Game, Exper);
Exper.count = (Game.butPlus + Game.bonus) * 10;
setInterval(Timer, 1000);
}

function Timer(){
if(Game['Count'] == 0){
clearInterval(Timer);
return;
}
if(Exper.count > 0){
Exper.count--;
Game.Count--;
Elements['pars'][0].innerHTML = Game['Count'];
}
else {
Game.bonus++;
clearInterval(Timer);
}
}







































