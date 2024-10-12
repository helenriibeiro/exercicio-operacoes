import { somarDoisNumeros } from './calculadora';
import { subtrairDoisNumeros } from './calculadora';
import { multiplicarDoisNumeros } from './calculadora';
import { dividirDoisNumeros } from './calculadora';
import { buscarValorNumericoEmTela, exibirValorEmElemento } from './moduloTela';
import './style.scss'

const botaoSoma = document.getElementById('btnSomar');
botaoSoma.addEventListener('click', iniciaProcessoSoma);

function iniciaProcessoSoma() {
  const numeroUm = buscarValorNumericoEmTela('input1');
  const numeroDois = buscarValorNumericoEmTela('input2');

  const resultado = somarDoisNumeros(numeroUm, numeroDois);

  exibirValorEmElemento('resultado', "Resultado: " + resultado);
}

const botaoSubtrai = document.getElementById('btnSubtrair');
botaoSubtrai.addEventListener('click', iniciaProcessoSubtracao);

function iniciaProcessoSubtracao() {
  const numeroUm = buscarValorNumericoEmTela('input1');
  const numeroDois = buscarValorNumericoEmTela('input2');

  const resultado = subtrairDoisNumeros(numeroUm, numeroDois);

  exibirValorEmElemento('resultado', "Resultado: " + resultado);
}

const botaomultiplica = document.getElementById('btnMultiplicar');
botaomultiplica.addEventListener('click', iniciaProcessomultiplicacao);

function iniciaProcessomultiplicacao() {
  const numeroUm = buscarValorNumericoEmTela('input1');
  const numeroDois = buscarValorNumericoEmTela('input2');

  const resultado = multiplicarDoisNumeros(numeroUm, numeroDois);

  exibirValorEmElemento('resultado', "Resultado: " + resultado);
}

const botaodivisao = document.getElementById('btnDividir');
botaodivisao.addEventListener('click', iniciaProcessodivisao);

function iniciaProcessodivisao() {
  const numeroUm = buscarValorNumericoEmTela('input1');
  const numeroDois = buscarValorNumericoEmTela('input2');

  const resultado = dividirDoisNumeros(numeroUm, numeroDois);

  exibirValorEmElemento('resultado', "Resultado: " + resultado);
}





