document.querySelector('.info').addEventListener('click', function() {
  // Show the content (image + name)
  document.querySelector('.content').style.display = 'block';
  
  // Hide the button
  this.style.display = 'none';
});
