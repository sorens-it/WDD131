// Sample data for the blog articles
const articles = [
    {
        id: 1,
        title: "Septimus Heap Book One: Magyk",
        date: "July 5, 2022",
        description:
            "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
        imgAlt: "Book cover for Septimus Heap 1",
        ages: "10-14",
        genre: "Fantasy",
        stars: "****"
    },
    {
        id: 2,
        title: "Magnus Chase Book One: Sword of Summer",
        date: "December 12, 2021",
        description:
            "The anticipated new novel by Rick Riordan. After Greek mythology, Greek/Roman, and Egyptian, Rick tries Norse Mythology, with fantastic results.",
        imgSrc:
            "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
        imgAlt: "Book cover for Magnus Chase 1",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐"
    },
    {
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description:
            "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms...",
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    }
];

// Function to create and display each article dynamically
function displayArticles() {
    const articlesSection = document.querySelector("#articles-section");

    articles.forEach(article => {
        const articleElement = document.createElement("article");

        articleElement.innerHTML = `
            <div class="article-details">
                <p><strong>Date:</strong> ${article.date}</p>
                <p><strong>Age:</strong> ${article.ages}</p>
                <p><strong>Genre:</strong> ${article.genre}</p>
                <p><strong>Rating:</strong> ${article.stars}</p>
            </div>
            <div class="article-content">
                <h2>${article.title}</h2>
                <img src="${article.imgSrc}" alt="${article.imgAlt}">
                <p>${article.description} <span class="more-text">Full story coming soon!</span> <a href="#" class="read-more">Read more</a></p>
            </div>
        `;

        articlesSection.appendChild(articleElement);
    });

    document.querySelectorAll(".read-more").forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();
            const moreText = button.previousElementSibling;
            moreText.style.display = moreText.style.display === "none" ? "inline" : "none";
            button.textContent = moreText.style.display === "none" ? "Read more" : "Read less";
        });
    });
}

// Load articles when DOM is ready
document.addEventListener("DOMContentLoaded", displayArticles);
