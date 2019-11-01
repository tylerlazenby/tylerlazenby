const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if(!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
};

const imageObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imageObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imageObserver.observe(image);
});

