var celcy = '';
var farengey = '';

var elTempForm = document.querySelector('.temp-form');
var elCelcyInput = elTempForm.querySelector('.celcy-input');
var elFarengeyInput = elTempForm.querySelector('.farengey-input');
var elResult = document.querySelector('.reslut');

var convertCelcyToFarengey = function() {
  celcy = parseFloat(elCelcyInput.value.trim(), 10);
  celcy = parseFloat(celcy.toFixed(1), 10);
  farengey = parseFloat((celcy * 9 / 5) + 32, 10);
  farengey = parseFloat(farengey.toFixed(1), 10);
  
  elFarengeyInput.value = `${farengey}`;
}

elTempForm.addEventListener('submit', function (evt){
  evt.preventDefault();

  convertCelcyToFarengey();
});

elTempForm.addEventListener('keyup', function (){

  convertCelcyToFarengey();
});