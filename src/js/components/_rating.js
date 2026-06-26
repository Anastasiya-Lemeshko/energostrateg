const ratings = document.querySelectorAll('.rating');

const setRating = () => {
  if (!ratings || !ratings.length) return;

  ratings.forEach((rating) => {
    const stars = rating.querySelectorAll('.rating__star');
    const hiddenInput = rating.querySelector('input');

    if (!stars || !stars.length || !hiddenInput) return;

    let currentRating = 0;

    const updateStars = (value) => {
      stars.forEach((star) => {
        const starValue = parseInt(star.dataset.value);
        if (starValue <= value) {
          star.classList.add('rating__star--active');
        } else {
          star.classList.remove('rating__star--active');
        }
      });
    };

    stars.forEach((star) => {
      const value = parseInt(star.dataset.value);

      star.addEventListener('mouseenter', () => {
        updateStars(value);
      });

      star.addEventListener('click', () => {
        currentRating = value;
        hiddenInput.value = currentRating;
        updateStars(currentRating);
      });
    });

    // Возврат к текущему рейтингу при уходе мыши
    rating.addEventListener('mouseleave', () => {
      updateStars(currentRating);
    });
  });
};

export { setRating };
