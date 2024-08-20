document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: "smooth"
            });
        });
    });
});

document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const links = [
    {
        url: 'https://www.linkedin.com/in/balter-velázquez',
        text: 'Balter Velázquez',
        iconClass: 'fab fa-linkedin'
    },
    {
        url: 'https://github.com/francap15',
        text: 'Balter Velázquez',
        iconClass: 'fab fa-github'
    }
];

const linksContainer = document.getElementById('linksContainer');

links.forEach(link => {
    const linkElement = document.createElement('a');
    linkElement.href = link.url;
    linkElement.target = '_blank';

    const iconElement = document.createElement('i');
    iconElement.className = link.iconClass;

    const textElement = document.createTextNode(link.text);

    linkElement.appendChild(iconElement);
    linkElement.appendChild(textElement);

    linksContainer.appendChild(linkElement);
});