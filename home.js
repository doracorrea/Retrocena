const carrosseis = document.querySelectorAll(".carrossel");

carrosseis.forEach(carrossel => {
  let intervalo = setInterval(() => {
    carrossel.scrollBy({ left: 250, behavior: "smooth" });

    if (carrossel.scrollLeft + carrossel.clientWidth >= carrossel.scrollWidth) {
      carrossel.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, 5000);
});
