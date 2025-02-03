document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id], div[id]");
    const menuLinks = document.querySelectorAll("#sidebar a");

    function setActiveMenuItem() {
        let fromTop = window.scrollY + 100;

        sections.forEach(section => {
            let id = section.getAttribute("id");
            let menuItem = document.querySelector(`#sidebar a[href="#${id}"]`);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                menuLinks.forEach(link => link.classList.remove("active"));
                if (menuItem) {
                    menuItem.classList.add("active");
                }
            }
        });
    }

    menuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            let target = document.querySelector(this.getAttribute("href"));

            target.scrollIntoView({ behavior: "smooth", block: "start" });

            const checkScroll = () => {
                setActiveMenuItem();
                window.removeEventListener('scroll', checkScroll);
            };

            window.addEventListener('scroll', checkScroll);
        });
    });

    window.addEventListener("scroll", setActiveMenuItem);
});