document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector('input[type="button"]');
  var select = document.getElementById("colorSelect");
  
  button.addEventListener("click", function() {
    var selectedIndex = select.selectedIndex;
    
    if (selectedIndex !== -1) {
      select.remove(selectedIndex);
    }
  });
});