const categoryButtons = document.querySelectorAll('.category-btn');
const bookCards = document.querySelectorAll('.book-card');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const selectedCategory = button.getAttribute('data-category');

        // Show/hide books based on category
        bookCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

let position = 0;
const itemWidth = 270;
const track = document.getElementById('carouselContainer');
const itemsCount = track.children.length;

function moveCarousel(direction) {
    const visibleItems = Math.floor(track.offsetWidth / itemWidth);
    const maxPosition = itemsCount - visibleItems;

    position += direction;
    if (position < 0) position = 0;
    if (position > maxPosition) position = maxPosition;

    track.style.transform = `translateX(-${position * itemWidth}px)`;
}

