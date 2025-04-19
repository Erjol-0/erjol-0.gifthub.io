document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll("li");
  menuItems.forEach(item => {
    item.addEventListener("click", function() {
      alert(`Hai scelto: ${this.textContent}`);
    });
  });
});
