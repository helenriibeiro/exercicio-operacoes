import { somarDoisNumeros } from './calculadora';
import { buscarValorNumericoEmTela, exibirValorEmElemento } from './moduloTela';
import './style.scss'

const botaoSoma = document.getElementById('btnSomar');
botaoSoma.addEventListener('click', () => somarDoisNúmeros());

function somarDoisNúmeros() {
  const numeroUm = buscarValorNumericoEmTela('input1');
  const numeroDois = buscarValorNumericoEmTela('input2');

  const resultado = somarDoisNumeros(numeroUm, numeroDois);

  exibirValorEmElemento('resultado', "Resultado: " + resultado);
}




