document.addEventListener('DOMContentLoaded', () => {
  const dishItems = document.querySelectorAll('main section ul li');
  
  dishItems.forEach(item => {
    item.addEventListener('click', () => {
      // Presupozohet format: "Emri i pjates - Çmimi"
      const fullText = item.textContent.trim();
      const parts = fullText.split(" - ");
      if(parts.length === 2) {
        const dishName = parts[0];
        const dishPrice = parts[1];
        alert("Pjata: " + dishName + "\nKushton: " + dishPrice);
      } else {
        alert("Pjata: " + fullText);
      }
    });
  });
});
