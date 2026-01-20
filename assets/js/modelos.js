// Script específico para a página de modelos

let filteredMotorcycles = [...motorcyclesData];

// Função para renderizar motos
function renderMotorcycles(motorcycles) {
    const grid = document.getElementById('motorcycles-grid');
    const noResults = document.getElementById('no-results');
    const resultsCount = document.getElementById('results-count');
    
    resultsCount.textContent = motorcycles.length;
    
    if (motorcycles.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    grid.style.display = 'grid';
    noResults.style.display = 'none';
    grid.innerHTML = motorcycles.map(moto => createMotorcycleCard(moto)).join('');
}

// Função para extrair valor numérico do preço
function getPriceValue(priceString) {
    if (!priceString) return 0;
    return parseInt(priceString.replace(/[^\d]/g, ''));
}

// Função para aplicar filtros
function applyFilters() {
    const brandFilter = document.getElementById('filter-brand').value;
    const yearFilter = document.getElementById('filter-year').value;
    const priceFilter = document.getElementById('filter-price').value;
    
    filteredMotorcycles = motorcyclesData.filter(moto => {
        // Filtro de marca
        if (brandFilter && moto.brand !== brandFilter) {
            return false;
        }
        
        // Filtro de ano
        if (yearFilter && moto.year !== yearFilter) {
            return false;
        }
        
        // Filtro de preço
        if (priceFilter) {
            const price = getPriceValue(moto.price);
            
            if (priceFilter === '0-15000' && price > 15000) {
                return false;
            }
            if (priceFilter === '15000-25000' && (price < 15000 || price > 25000)) {
                return false;
            }
            if (priceFilter === '25000-35000' && (price < 25000 || price > 35000)) {
                return false;
            }
            if (priceFilter === '35000+' && price < 35000) {
                return false;
            }
        }
        
        return true;
    });
    
    renderMotorcycles(filteredMotorcycles);
}

// Função para limpar filtros
function clearFilters() {
    document.getElementById('filter-brand').value = '';
    document.getElementById('filter-year').value = '';
    document.getElementById('filter-price').value = '';
    
    filteredMotorcycles = [...motorcyclesData];
    renderMotorcycles(filteredMotorcycles);
}

// Inicializar página
document.addEventListener('DOMContentLoaded', function() {
    renderMotorcycles(motorcyclesData);

    document.getElementById('filter-brand').addEventListener('change', applyFilters);
    document.getElementById('filter-year').addEventListener('change', applyFilters);
    document.getElementById('filter-price').addEventListener('change', applyFilters);

    document.getElementById('search-input')
        .addEventListener('input', () => {
            applyFilters();
            applySearchFilter();
        });
});


// Exportar funções para uso global
window.applyFilters = applyFilters;
window.clearFilters = clearFilters;

function applySearchFilter() {
    const search = document.getElementById('search-input').value.toLowerCase();

    filteredMotorcycles = filteredMotorcycles.filter(moto => {
        return (
            moto.brand.toLowerCase().includes(search) ||
            moto.model.toLowerCase().includes(search) ||
            String(moto.year).includes(search)
        );
    });

    renderMotorcycles(filteredMotorcycles);
}