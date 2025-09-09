function toggleLangMenu() {
    document.querySelector(".lang-menu").classList.toggle("show");
}

function setLanguage(lang) {
    alert("Dil seçildi: " + lang);
    // Burada tərcümə funksiyanı əlavə edə bilərsən
}

window.addEventListener("click", function (e) {
    if (!e.target.closest(".language-dropdown")) {
        document.querySelector(".lang-menu").classList.remove("show");
    }
});

// const translations = {
//     az: {
//         welcome: "MCM-ə xoş gəlmisiniz",
//         heroDesc: "Ağıllı texnologiyalarla sənayenizi daha təhlükəsiz və səmərəli edin.",
//         seeNext: "Növbətini gör",
//         whoweare: "Biz kimik?"
//     },
//     ru: {
//         welcome: "Добро пожаловать в MCM",
//         heroDesc: "Сделайте вашу промышленность безопаснее и эффективнее с помощью умных технологий.",
//         seeNext: "Узнать больше",
//         whoweare: "Кто мы?"
//     },
//     en: {
//         welcome: "Welcome to MCM",
//         heroDesc: "Make your industry safer and more efficient with smart technologies.",
//         seeNext: "See What's Next",
//         whoweare: "Who we are?"
//     }
// };

// function setLanguage(element, lang) {

//     document.querySelectorAll(".language-option").forEach(btn => btn.classList.remove("active"));
//     element.classList.add("active");


//     document.querySelectorAll("[data-translate]").forEach(el => {
//         const key = el.getAttribute("data-translate");
//         el.textContent = translations[lang][key] || key;
//     });


//     localStorage.setItem("siteLang", lang);
// }


// document.addEventListener("DOMContentLoaded", () => {
//     const savedLang = localStorage.getItem("siteLang") || "az";
//     const activeBtn = document.querySelector(`.language-option[onclick*="${savedLang}"]`);
//     if (activeBtn) setLanguage(activeBtn, savedLang);
// });
