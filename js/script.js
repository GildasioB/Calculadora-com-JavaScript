let horasDiarias = document.querySelector("#horas-diarias");
let diasMes = document.querySelector("#Dias-mes");
let despesas = document.querySelector("#despesas");
let equipamento = document.querySelector("#equipamento");

let resultado = document.querySelector("#valor-total");

let hidden = document.querySelector("#resultado");

const enviar = document.querySelector("#calcular");

enviar.addEventListener("click",function(e){
  e.preventDefault();
  
  if(horasDiarias.value == "" || diasMes.value=="" || despesas.value==""){
    alert("Preencha os campos vazios");
  }else{
    let equipamentoMes = (Number(equipamento.value)/12);// valor do equipamento pago por mes
    let despesasTotais = (Number(despesas.value)) + equipamentoMes;// despesas mensais + equipamento mensal
    let horasMes = Number(horasDiarias.value)*Number(diasMes.value);// horas trabalhadas por mes
    
    const valorHora = (despesasTotais/horasMes/0.5).toFixed(2);
    
   hidden.classList.remove("hidden")
   resultado.innerText = `R$ ${valorHora}`
    }
  });
