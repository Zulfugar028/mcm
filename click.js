

const helpItems = document.querySelectorAll(".help_item");

helpItems.forEach(item => {
    item.addEventListener("click", (e) => {
        e.stopPropagation(); // klik eventinin document-ə getməsinin qarşısını alır
        if (item.classList.contains("active")) {
            item.classList.remove("active");
        } else {
            helpItems.forEach(el => el.classList.remove("active")); // başqalarını bağla
            item.classList.add("active");
        }
    });
});

// Boş yerə klik olunanda hamısını bağla
document.addEventListener("click", () => {
    helpItems.forEach(el => el.classList.remove("active"));
});