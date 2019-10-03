/* Footer effect  */
const hideButton = document.getElementById('hide');
const openButton = document.getElementById('boutonContactFooter');


openButton.addEventListener('click' , () => {
  document.getElementById('contactInfosHome').style.display = 'flex';
  
});

hideButton.addEventListener('click' , () => {
  document.getElementById('contactInfosHome').style.display = 'none';
});