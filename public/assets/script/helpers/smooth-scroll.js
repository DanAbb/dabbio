export default smoothScroll => {
    const elements = document.querySelectorAll("a[href^='#']");

    for (const el of elements) {
        el.addEventListener('click', ev => {
            ev.preventDefault();
            const loc = document.querySelector(el.hash).offsetTop;
            scrollTo(loc);
        });
    }

    const scrollTo = (loc) => {
        const scrollDuration = 200;
        console.log(loc / (scrollDuration / 15));

        const scrollStep = loc / (scrollDuration / 15);
        let scrollInterval = setInterval(function() {
            if (window.scrollY < loc) {
                window.scrollBy(loc, scrollStep);
            }
            else clearInterval(scrollInterval);
        }, 15);
    }
};