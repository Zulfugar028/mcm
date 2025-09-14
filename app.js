function toggleMenu() {
    const navList = document.querySelector(".nav_list");
    const openBtn = document.querySelector(".openMenu");
    const exitBtn = document.querySelector(".exit");

    navList.classList.toggle("active");
    openBtn.classList.toggle("hide");
    exitBtn.classList.toggle("show");

    if (navList.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
}


const newsData = {
    1: {
        img: "img/news1.png",
        title: "Noventiq Vietnam Earns ISO Certifications",
        desc: "Noventiq Vietnam has successfully achieved ISO/IEC 27001:2022 & ISO 9001:2015 certifications, demonstrating commitment to quality and information security."
    },
    2: {
        img: "img/news2.png",
        title: "Noventiq & AWS Partners with MoIAT",
        desc: "Noventiq & AWS join hands with the UAE Ministry of Industry to accelerate industrial digital transformation through cutting-edge cloud and AI solutions."
    },
    3: {
        img: "img/news3.png",
        title: "Noventiq Vietnam Earns ISO/IEC 27001:2022 & ISO 9001:2015 Certifications"
    },
    4: {
        img: "img/news4.png",
        title: "Noventiq Vietnam Earns ISO/IEC 27001:2022 & ISO 9001:2015 Certifications"
    }
    // digər xəbərləri buraya əlavə edə bilərsən
};

function openNews(id) {
    document.getElementById("newsImage").src = newsData[id].img;
    document.getElementById("newsTitle").innerText = newsData[id].title;
    document.getElementById("newsDesc").innerText = newsData[id].desc;
    document.getElementById("newsModal").style.display = "flex";
}

function closeNews() {
    document.getElementById("newsModal").style.display = "none";
}

function openDemo() {
    document.getElementById("demoModal").style.display = "flex";
}

function closeDemo() {
    document.getElementById("demoModal").style.display = "none";
}

// Kənara klikləyəndə modal bağlansın
window.onclick = function (event) {
    const modal = document.getElementById("demoModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


// // Industries smooth scroll
// function scrollToIndustry(id) {
//   const el = document.getElementById(id);
//   if (el) {
//     el.scrollIntoView({ behavior: "smooth", block: "start" });
//   }
// }

function scrollToIndustry(id) {
    const section = document.getElementById(id);
    const headerOffset = 100; // burda header-in hündürlüyünü yaz
    const elementPosition = section.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });

    // aktiv span
    document.querySelectorAll(".industries-list span").forEach(s => s.classList.remove("active"));
    event.target.classList.add("active");
}

// document.addEventListener("DOMContentLoaded", () => {
//     const spans = document.querySelectorAll(".industries-list span");
//     const sections = document.querySelectorAll(".industry");

//     function setActive(id) {
//         spans.forEach(span => span.classList.remove("active"));
//         const activeSpan = document.querySelector(`.industries-list span[onclick*="${id}"]`);
//         if (activeSpan) activeSpan.classList.add("active");
//     }

//     // scroll zamanı bölməni yoxla
//     window.addEventListener("scroll", () => {
//         let current = "";
//         sections.forEach(section => {
//             const sectionTop = section.offsetTop - 120; // header offset
//             if (window.scrollY >= sectionTop) {
//                 current = section.getAttribute("id");
//             }
//         });
//         if (current) setActive(current);
//     });
// });