document.addEventListener('DOMContentLoaded', () => {
  const dishItems = document.querySelectorAll('main section ul li');
  
  dishItems.forEach(item => {
    item.addEventListener('click', () => {
      // Teksti i li-s pritet të ketë formatin: "Emri i pjates - Çmimi"
      const fullText = item.textContent.trim();
      // Ndajmë sipas shenjës "-" (mund të përfshihet hapësira)
      const parts = fullText.split(" - ");
      if(parts.length === 2) {
        const dishName = parts[0];
        const dishPrice = parts[1];
        alert("Pjata: " + dishName + "\nKushton: " + dishPrice);
      } else {
        // Në rast se nuk ndan si duhet, shfaqim gjithë tekstin
        alert("Pjata: " + fullText);
      }
    });
  });
});
