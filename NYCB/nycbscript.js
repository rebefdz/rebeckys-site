const letters = document.querySelectorAll('.letter');

letters.forEach(letter => {
    letter.addEventListener('mouseover', () => {
        letter.style.color = '#FF69B4'; 
    });

    letter.addEventListener('mouseout', () => {
        letter.style.color = '	#FFFF'; 
    });
});

