// Configuração do WhatsApp
const WHATSAPP_NUMBER = '5543996023434'; // Substituir pelo número real

// Função para abrir WhatsApp
function openWhatsApp(message = '') {
    const defaultMessage = 'Olá! Vim pelo site e gostaria de mais informações sobre as motos disponíveis.';
    const text = message ? `Olá! Tenho interesse em ${message}. Pode me passar mais informações?` : defaultMessage;
    const encodedMessage = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
}

// Função para criar card de moto
function createMotorcycleCard(moto) {
    const coverImage =
        moto.images && moto.images.length > 0
            ? moto.images[0]
            : '/assets/img/no-image.jpg'; // fallback

    return `
        <a href="moto.html?id=${moto.id}" class="motorcycle-card">
            ${moto.featured ? '<div class="motorcycle-badge">DESTAQUE</div>' : ''}
            
            <div class="motorcycle-image">
                <img src="${coverImage}" alt="${moto.brand} ${moto.model}">
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
                    onclick="event.preventDefault(); window.location.href='moto.html?id=${moto.id}'">
                    Veja mais detalhes
                </button>
            </div>
        </a>
    `;
}


// Função para carregar motos
function loadMotorcycles() {
    const grid = document.getElementById('motorcycles-grid');

    const motosHome = motorcyclesData.filter(moto => moto.id <= 6);

    grid.innerHTML = motosHome
        .map(moto => createMotorcycleCard(moto))
        .join('');
}

// Smooth scroll para links internos
document.addEventListener('DOMContentLoaded', function() {
    // Carregar motos
    loadMotorcycles();
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    let lastScroll = 0;
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.style.transform = 'translateY(0)';
            return;
        }
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scroll down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll up
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
});

// Exportar funções para uso global
window.openWhatsApp = openWhatsApp;