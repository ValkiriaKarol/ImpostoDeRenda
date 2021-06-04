function exec(){
let n;
let salarioBruto;
let depend;
let moedaBr = "R$";

nome = document.getElementById("nome").value;
salarioBruto = document.getElementById("salarioBruto").value;
depend = document.getElementById("numeroDepend").value;
				
let descontosDep;
descontosDep = depend * 189.59;

//desconto do INSS
let inss;
let porcentInss;

if (salarioBruto < 1100.01) {
	inss = salarioBruto * 0.075;
	porcentInss = "7.50%";
}
if (salarioBruto > 1100.00 && salarioBruto < 2203.49) {
	inss = salarioBruto * 0.09;
	porcentInss = "9.00%";
}
if (salarioBruto > 2203.48 && salarioBruto < 3205.23) {
	inss = salarioBruto * 0.12;
	porcentInss = "12.00%";
}
if (salarioBruto > 3305.22 && salarioBruto < 6433.58) {
	inss = salarioBruto * 0.14;
	porcentInss = "14.00%";
}
if (salarioBruto > 6433.57) {
	inss = 751.99;
	porcentInss = "14.00%";
}			

let salarioParcial;
salarioParcial = salarioBruto - inss;

//desconto do IRPF

let irpf;
let porcentIrpf;

if (salarioParcial < 1903.99) {
	irpf = 0.00;
	porcentIrpf = "0.00%";
}
if (salarioParcial > 1903.98 && salarioParcial < 2826.66) {
	porcentIrpf = "7.50%";
	irpf = ((((salarioBruto - descontosDep) - inss) * 0.075) - 142.80);
}
if (salarioParcial > 2826.65 && salarioParcial < 3751.06) {
	porcentIrpf = "15.00%";
	irpf = ((((salarioBruto - descontosDep) - inss) * 0.15) - 354.80);
}
if (salarioParcial > 3751.05 && salarioParcial < 4664.69) {
	porcentIrpf = "22.50%";
	irpf = ((((salarioBruto - descontosDep) - inss) * 0.225) - 636.13);
}
if (salarioParcial > 4664.68) {
	porcentIrpf = "27.50%";
	irpf = ((((salarioBruto - descontosDep) - inss) * 0.275) - 869.36);
}
if (irpf < 0) { irpf = 0.00; }

//salário líquido
let salarioLiquido;
salarioLiquido = salarioParcial - irpf;
let salarioBDecimal, descontoINSSDecimal, descontoIRPFDecimal, salarioLDecimal;

salarioBDecimal = parseFloat(salarioBruto);
salarioBDecimal = salarioBDecimal.toFixed(2);

descontoINSSDecimal = parseFloat(inss);
descontoINSSDecimal = inss.toFixed(2);

descontoIRPFDecimal = parseFloat(irpf);
descontoIRPFDecimal = irpf.toFixed(2);

salarioLDecimal = parseFloat(salarioLiquido);
salarioLDecimal = salarioLiquido.toFixed(2);

let dadosTabela = {nome_id:nome, salario_bruto:moedaBr+salarioBDecimal, dependentes:depend,
 porcentagem_inss:porcentInss, tbinss:moedaBr+descontoINSSDecimal, porcentagem_irpf:porcentIrpf,
  tbirpf:moedaBr+descontoIRPFDecimal, salario_liquido:moedaBr+salarioLDecimal};

	var tabela = document.getElementById("tabelaDados");
  	var row = tabela.insertRow(-1);
  	var cell1 = row.insertCell(0);
  	var cell2 = row.insertCell(1);
  	var cell3 = row.insertCell(2);
  	var cell4 = row.insertCell(3);
  	var cell5 = row.insertCell(4);
  	var cell6 = row.insertCell(5);
  	var cell7 = row.insertCell(6);
  	var cell8 = row.insertCell(7);
  		cell1.innerHTML = dadosTabela.nome_id;
  		cell2.innerHTML = dadosTabela.salario_bruto;
  		cell3.innerHTML = dadosTabela.dependentes;
  		cell4.innerHTML = dadosTabela.porcentagem_inss;
  		cell5.innerHTML = dadosTabela.tbinss;
  		cell6.innerHTML = dadosTabela.porcentagem_irpf;
  		cell7.innerHTML = dadosTabela.tbirpf;
  		cell8.innerHTML = dadosTabela.salario_liquido;

}

function recarregar() {
    location.reload();
  }