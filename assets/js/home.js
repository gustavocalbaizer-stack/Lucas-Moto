document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("motorcycles-grid-home");
    if (!grid) return;

    const featured = motorcyclesData.filter(m => m.featured).slice(0, 3);

    grid.innerHTML = featured
        .map(moto => createMotorcycleCard(moto))
        .join("");
});
