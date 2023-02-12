// F) ENTRE COM UM NÚMERO E VERIFIQUE SE É UM NÚMERO PRIMO

var num, div=0;
num=parseFloat(prompt("Insira um valor..."));

for (var cont = 1; cont >= num; cont++) {
	if (num%cont==0) {
		div=div++;
	}
}

if(div==2){
	document.write("É um número primo");
}
else{
  	document.write("Não é um número primo");
}
		

/*var num, rest, cont=1, div=0;
num=parseFloat(prompt("Insira um valor..."));

while(cont<=num){
	cont=cont++;
	rest=num%cont;
	if (rest==0) {
		div=div++
	}
}
if(div==2){
  	document.write("É um número primo");
}
else{
  	document.write("Não é um número primo");
}*/
