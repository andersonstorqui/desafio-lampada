var lamp = document.querySelector('.lamp')

/*function estaQuebrada() {
  return lamp.src.indexOf('lampada-quebrada') > -1
}*/

function acenderLampada() {
  //if(!estaQuebrada()){
    lamp.src = 'imagens/lampada-acessa.svg'
  //}
}

function desligarLampada() {
  //if(!estaQuebrada()){
    lamp.src = 'imagens/lampada-apagada.svg'
  //}
}

lamp.addEventListener('click', quebrar())
  function quebrar(){
    lamp.src = 'imagens/lampada-quebrada.svg'
  }
