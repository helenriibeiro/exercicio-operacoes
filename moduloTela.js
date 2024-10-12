export function buscarValorNumericoEmTela(idElemento) {
  const elemento = document.getElementById(idElemento);
  return parseFloat(elemento.value);
}

export function exibirValorEmElemento(idElemento, valor) {
  const elemento = document.getElementById(idElemento);
  elemento.innerHTML = valor;
}