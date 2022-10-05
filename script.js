const turnOn = document.getElementById ( 'turnOn' );

const turnOf = document.getElementById ( 'turnOf' );

const lamp = document.getElementById ( 'lamp' );

function isLampbrk () {
  return lamp.src.indexOf ('quebrada') > -1;
}

function lampOn () {
  if ( !isLampbrk () ) {
    lamp.src = 'ligada.jpg';
  }
}

function lampOf (){
  if ( !isLampbrk () ) {
    lamp.src = 'desligada.jpg';
  }
  
}

function lampbrk () {
  lamp.src = 'quebrada.jpg';
}

  
turnOn.addEventListener ( 'click', lampOn );

turnOf.addEventListener (
  'click', lampOf );

lamp.addEventListener ( 'mouseover', lampOn);

lamp.addEventListener ('mouseleave', lampOf);

lamp.addEventListener ( 'dblclick', lampbrk);