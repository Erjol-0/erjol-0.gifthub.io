document.addEventListener('DOMContentLoaded', () => {
  // Funksionaliteti i ndërprerjes së tab-ve
  const tablinks = document.querySelectorAll('.tablink');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tablinks.forEach(button => {
    button.addEventListener('click', () => {
      // Hiq klasat aktive prej të gjithë butonave dhe përmbajtjeve
      tablinks.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Shto klasën aktive në butonin e shtypur dhe përmbajtjen përkatëse
      button.classList.add('active');
      const tabId = button.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Kur klikohet një pjatë, shfaq alert me emrin dhe çmimin
  const dishItems = document.querySelectorAll('.sub-section ul li, #dessert ul li, #bevande ul li');
  
  dishItems.forEach(item => {
    item.addEventListener('click', () => {
      const fullText = item.textContent.trim();
      const parts = fullText.split(" - ");
      if (parts.length === 2) {
        const dishName = parts[0];
        const dishPrice = parts[1];
        alert(dishName + "\ncosta: " + dishPrice);
      } else {
        alert("Il piatto: " + fullText);
      }
    });
  });
});
