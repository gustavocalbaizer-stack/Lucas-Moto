function createMotorcycleCard(moto) {
    return `
        <div 
            class="motorcycle-card"
            onclick="window.location.href='moto.html?id=${moto.id}'"
            style="cursor: pointer;"
        >
            ${moto.featured ? '<div class="motorcycle-badge">DESTAQUE</div>' : ''}

            <div class="motorcycle-image">
                <img src="${moto.images && moto.images.length ? moto.images[0] : '/assets/img/placeholder.jpg'}" alt="${moto.brand} ${moto.model}">
            </div>

            <div class="motorcycle-info">
                <h3 class="motorcycle-title">${moto.brand}</h3>
                <p class="motorcycle-model">${moto.model}</p>

                <div class="motorcycle-details">
                    <div>
                        <span>Ano:</span>
                        <span>${moto.year}</span>
                    </div>
                    <div>
                        <span>KM:</span>
                        <span>${moto.km}</span>
                    </div>
                </div>

                ${moto.price ? `<div class="motorcycle-price">${moto.price}</div>` : ''}

                <button 
                    class="motorcycle-button"
                    onclick="event.stopPropagation(); window.location.href='moto.html?id=${moto.id}'">
                    Veja mais detalhes
                </button>
            </div>
        </div>
    `;
}
