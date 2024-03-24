window.addEventListener('DOMContentLoaded', () => {
    const contents = document.getElementById("contents");
    if (contents) {
        contents.innerHTML = "Contents";
    }

    const headings = document.querySelectorAll(".post h1[id], .post h2[id], .post h3[id], .post h4[id], .post h5[id], .post h6[id]");

    document.querySelectorAll("nav[id='TableOfContents'] li").forEach((node) => {
        node.classList.add('inactive');
        node.classList.replace('active', 'inactive');
    });

    headings.forEach((heading) => {
        const tagName = heading.tagName.toLowerCase();
        if (tagName === 'h1' || tagName === 'h2') {
            const correspondingNavItem = document.querySelector(`nav[id='TableOfContents'] li a[href="#${heading.id}"]`).parentElement;
            if (correspondingNavItem) {
                correspondingNavItem.classList.replace('inactive', 'active');
                correspondingNavItem.addEventListener('click', (event) => {
                    event.preventDefault(); // Prevent the default behavior of the anchor link
                    heading.scrollIntoView({ behavior: 'smooth' });
                });
            }
        }
    });
});
