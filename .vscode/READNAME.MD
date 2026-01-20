# 🏍️ Lucas Moto - Site Estático

Site estático HTML/CSS/JS puro para a Lucas Moto - Concessionária de Motos em Londrina.

## 📁 Estrutura de Arquivos

```
public/
├── index.html          # Página principal
├── modelos.html        # Página de todos os modelos
├── styles.css          # Estilos CSS
├── script.js           # JavaScript principal
├── modelos.js          # JavaScript da página de modelos
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Diretamente no Navegador
1. Navegue até a pasta `public/`
2. Clique duas vezes em `index.html`
3. O site abrirá no seu navegador padrão

### Opção 2: Servidor Local Simples (Opcional)
Se você tiver Python instalado:
```bash
cd public
python -m http.server 8000
```
Depois acesse: http://localhost:8000

## ⚙️ Configurações

### 1. Número do WhatsApp
Edite o arquivo `script.js` na linha 2:
```javascript
const WHATSAPP_NUMBER = '5543999999999'; // Substitua pelo número real
```

### 2. Adicionar/Remover Motos
Edite o arquivo `script.js` no array `motorcyclesData`:
```javascript
const motorcyclesData = [
    {
        id: 1,
        brand: 'Honda',
        model: 'CB 500F',
        year: '2022',
        km: '12.000 km',
        image: 'URL_DA_IMAGEM',
        featured: true,
        price: 'R$ 32.000'
    },
    // Adicione mais motos aqui...
];
```

### 3. Trocar Logo
Substitua as URLs da logo nos arquivos HTML:
- `index.html` (linha ~20 e ~450)
- `modelos.html` (linha ~20 e ~200)

### 4. Personalizar Cores
Edite o arquivo `styles.css` nas variáveis CSS (linhas 8-18):
```css
:root {
    --color-black: #000000;
    --color-red: #dc2626;
    /* ... outras cores ... */
}
```

## 📄 Páginas Disponíveis

### 1. Página Principal (index.html)
- Hero section com chamada para ação
- Catálogo de motos em destaque
- Como funciona
- Compra, troca e consignação
- Diferenciais
- Depoimentos
- CTA final
- Footer completo

### 2. Página de Modelos (modelos.html)
- Listagem completa de todas as motos
- Filtros por marca, ano e preço
- Contador de resultados
- Sistema de busca interativo

## 🎨 Recursos

- ✅ Design responsivo (mobile-first)
- ✅ Totalmente estático (sem servidor necessário)
- ✅ Integração com WhatsApp
- ✅ Animações suaves
- ✅ Botão flutuante do WhatsApp
- ✅ Sistema de filtros
- ✅ Fácil de personalizar

## 📱 Responsividade

O site funciona perfeitamente em:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1280px+)

## 🔧 Manutenção

### Adicionar Nova Moto
1. Abra `script.js`
2. Adicione um novo objeto no array `motorcyclesData`
3. Salve o arquivo
4. Recarregue a página no navegador

### Remover Moto
1. Abra `script.js`
2. Remova o objeto correspondente do array `motorcyclesData`
3. Salve o arquivo
4. Recarregue a página no navegador

### Atualizar Informações de Contato
1. Abra `index.html` e `modelos.html`
2. Procure pela seção `<footer>`
3. Atualize telefone, endereço, Instagram, etc.
4. Salve os arquivos

## 🌐 Hospedagem

Este site pode ser hospedado gratuitamente em:
- **GitHub Pages**: Gratuito e fácil
- **Netlify**: Gratuito com domínio personalizado
- **Vercel**: Gratuito com deploy automático
- **Qualquer servidor web**: Basta fazer upload dos arquivos

### Exemplo: GitHub Pages
1. Crie um repositório no GitHub
2. Faça upload dos arquivos da pasta `public/`
3. Vá em Settings > Pages
4. Selecione a branch e pasta
5. Seu site estará online em minutos!

## 📞 Suporte

Para dúvidas ou problemas, entre em contato através do WhatsApp configurado no site.

---

**Desenvolvido para Lucas Moto - Londrina, PR** 🏍️
