document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filter');
    const posts = document.querySelectorAll('.post');

    filters.forEach(filter => {
        filter.addEventListener('click', event => {
            event.preventDefault();
            const category = filter.getAttribute('data-category');

            posts.forEach(post => {
                if (category === 'all' || post.getAttribute('data-category') === category) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });
});
