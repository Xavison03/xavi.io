document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const img = document.getElementById("movingImg");

  if (main && img) {
    main.addEventListener("mousemove", (e) => {
      const rect = main.getBoundingClientRect();
      const x = e.clientX - rect.left; 
      const y = e.clientY - rect.top;  

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // stronger movement effect
      const moveX = (x - centerX) / 15; 
      const moveY = (y - centerY) / 15;

      img.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    main.addEventListener("mouseleave", () => {
      img.style.transform = "translate(0,0)";
    });
  }
});


window.addEventListener("scroll", function () {
  const btn = document.getElementById("backToTop");
  if (window.scrollY > 200) { 
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
   
});


document.querySelector("#backToTop a").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
