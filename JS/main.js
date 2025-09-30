const categoryItems = document.querySelectorAll('.category-list li');
const productCards = document.querySelectorAll('.product-card');

categoryItems.forEach(item => {
    item.addEventListener('click', () => {
        const selected = item.dataset.category;

        productCards.forEach(card => {
            card.style.display = (selected === 'all' || card.dataset.category === selected) ? 'block' : 'none';
        });
    });
});
