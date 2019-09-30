// Get the 1st button
const firstBtn = document.getElementById('buttonsend');
// Initialize a counter
let count = 0;
// Attach an event listener for the click event
firstBtn.addEventListener('click', () => {
  console.log('clicked')
  // Increment the counter, build a string, update the button's content
  count += 1;
  const text = 'I have been clicked ' + count + ' times';
  firstBtn.innerHTML = text;
});
