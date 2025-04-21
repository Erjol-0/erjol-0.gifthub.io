document.addEventListener('DOMContentLoaded', () => {
  // Tab switching functionality
  const tablinks = document.querySelectorAll('.tablink');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tablinks.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all tab buttons and contents
      tablinks.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding content
      button.classList.add('active');
      const tabId = button.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Dish clicking – show alert with dish name and price
  const dishItems = document.querySelectorAll('.sub-section ul li');
  
  dishItems.forEach(item => {
    item.addEventListener('click', () => {
      const fullText = item.textContent.trim();
      const parts = fullText.split(" - ");
      if (parts.length === 2) {
        const dishName = parts[0];
        const dishPrice = parts[1];
        alert("Pjata: " + dishName + "\nKushton: " + dishPrice);
      } else {
        alert("Pjata: " + fullText);
      }
    });
  });
});
