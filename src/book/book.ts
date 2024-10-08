import data from "../../data.json";

document.addEventListener("DOMContentLoaded", () => {
	const params = new URLSearchParams(window.location.search);
	const index = params.get("index");
	updateBookPageHtml(+index!);
});

function updateBookPageHtml(currentIndex: number) {
	const bookContainer = document.getElementById("book-container");
	const currentAuthor = data[currentIndex];
	if (bookContainer) {
		bookContainer.innerHTML = `
        <div class="page-head">
            <h4 class="page-logo">.COVER</h4>
            <span class="page-route"><a href="/index.html">Home</a> > Projects</span>
        </div>
        <section id="left-section">
            <div class="book-addinfo">
                <div class="addinfo-item">
                    <span>Author</span>
                    <span>${currentAuthor.publication.author}</span>
                </div>
                <div class="addinfo-item">
                    <span>Original Title</span>
                    <span>${currentAuthor.publication.original_title}</span>
                </div>
                <div class="addinfo-item">
                    <span>Language</span>
                    <span>${currentAuthor.publication.language}</span>
                </div>
                <div class="addinfo-item">
                    <span>Publisher</span>
                    <span>${currentAuthor.publication.publisher}</span>
                </div>
                <div class="addinfo-item">
                    <span>Publication date</span>
                    <span>${currentAuthor.publication.publication_date}</span>
                </div>
                <div class="addinfo-item">
                    <span>Cover by</span>
                    <span>${currentAuthor.publication.cover_by}</span>
                </div>
            </div>
            <div class="main-info">
                <h4 class="book-author">${currentAuthor.publication.author}</h4>
                <h2 class="book-title">${currentAuthor.book_info.title.split(' ')[0]}</br>${currentAuthor.book_info.title.split(' ')[1]}</h2>
                <div class="designer-info">
                    <img src="./public/icons/Mansvg.svg" width="40px" height="40px" />
                    <div class="designer-social">
                        <p class="name">${currentAuthor.publication.cover_by}</p>
                        <p class="email">${currentAuthor.publication.cover_author_email}</p>
                    </div>
                </div>
                <p>${currentAuthor.book_info.text}</p>
                <span id="line-book"></span>
            </div>
        </section>
        <section id="right-section">
            <div id="social">
                <ul class="social-list">
                    <li>
                        <a>
                            <image src="../public/icons/Behance.svg" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <image src="../public/icons/Pinterest.svg" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <image src="../public/icons/instagram.svg" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <image src="../public/icons/Linkedin.svg" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <image src="../public/icons/dribbble.svg" />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        `;
	}
	const rightSection = document.getElementById("right-section");
	if (rightSection) {
		rightSection.style.background = `url(${currentAuthor.images.bg_y})`;
		rightSection.style.backgroundRepeat = "no-repeat";
		rightSection.style.backgroundSize = "cover";
	}
}
