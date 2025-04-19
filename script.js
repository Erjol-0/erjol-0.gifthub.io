const menuItems = [
    { emri: "Pica Margarita", cmimi: "€8" },
    { emri: "Pasta Carbonara", cmimi: "€10" },
    { emri: "Steak", cmimi: "€15" },
];

document.addEventListener("DOMContentLoaded", function() {
    const menuList = document.getElementById("menu-list");
    menuList.innerHTML = "";

    menuItems.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.emri} - ${item.cmimi}`;
        li.classList.add("menu-item");

        li.addEventListener("click", function() {
            alert(`Zgjodhe: ${item.emri}, Çmimi: ${item.cmimi}`);
        });

        menuList.appendChild(li);
    });
});
