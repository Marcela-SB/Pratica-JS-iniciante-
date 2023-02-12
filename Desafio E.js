//E) ENTRE COM NÚMEROS ENQUANTO FOREM POSITIVOS E IMPRIMIR QUANTOS NÚMEROS FORAM DIGITADOS.
	
var num, cont=0;

do {
	cont=cont++;
	num=parseFloat(prompt("Insira um número..."));
	document.write(+num+"<br>");
} while (num>=0);

document.write("<p>"+num+" é um número negativo!</p>");
document.write("<p>Foram digitados "+cont+" números (positivos) até agora.</p>")
