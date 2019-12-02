
$(document).ready(function() {
  fetch('https://fierce-savannah-72244.herokuapp.com/events').then(result => result.json()).then(result => {
      console.log(result);
  }).catch(error => {
    console.log(error);
  }); 
});


