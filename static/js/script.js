    const flipLinks = document.querySelectorAll('.flip-link');
    const innerCard = document.querySelector('.inner-card');

    flipLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            innerCard.computedStyleMap.transform = 'rotateY(180deg)';
           //innerCard.computedStyleMap.transform = 'rotateY(180deg)';
        });
    });