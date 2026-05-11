// Entry point for User App UI
// All logic will be modularized here

document.addEventListener('DOMContentLoaded', () => {
  // Initial render
  renderApp();
});

// --- Responsive Main Layout & Navigation ---
function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <nav class="sidebar" aria-label="Main Navigation">
      <div class="logo">📚</div>
      <ul class="nav-list">
        <li><button class="nav-btn" data-page="home">Home</button></li>
        <li><button class="nav-btn" data-page="search">Browse</button></li>
        <li><button class="nav-btn" data-page="cart">Cart</button></li>
        <li><button class="nav-btn" data-page="profile">Profile</button></li>
      </ul>
    </nav>
    <main class="main-content" id="main-content">
      <!-- Dynamic content will be rendered here -->
    </main>
    <button class="mobile-nav-toggle" aria-label="Open Navigation" tabindex="0">☰</button>
  `;
  attachNavHandlers();
  renderHome();
}

// --- Navigation Handlers ---
function attachNavHandlers() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.onclick = (e) => {
      const page = btn.getAttribute('data-page');
      if (page === 'home') renderHome();
      if (page === 'search') renderBrowse();
      if (page === 'cart') renderCart();
      if (page === 'profile') renderProfile();
    };
  });
  // Mobile nav toggle
  document.querySelector('.mobile-nav-toggle').onclick = () => {
    document.querySelector('.sidebar').classList.toggle('open');
  };
}

// --- Home Page (Welcome, Popular, Schedule, Friends) ---
function renderHome() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <section class="welcome">
      <h1>Happy reading, Harvey</h1>
      <p>Delve into the wizarding world’s secrets. Not finished yet? Get reading now!</p>
      <button class="cta-btn">Start reading →</button>
    </section>
    <section class="popular">
      <h2>Popular Now</h2>
      <div class="book-list">
        <div class="book-card"><img src="https://covers.openlibrary.org/b/id/8231856-L.jpg" alt="The World of Ice and Fire"><span>The World of Ice and Fire</span></div>
        <div class="book-card"><img src="https://covers.openlibrary.org/b/id/10521213-L.jpg" alt="Fantastic Beasts"><span>Fantastic Beasts</span></div>
        <div class="book-card"><img src="https://covers.openlibrary.org/b/id/10521214-L.jpg" alt="Game of Thrones"><span>Game of Thrones</span></div>
        <div class="book-card"><img src="https://covers.openlibrary.org/b/id/10521215-L.jpg" alt="The Wise Man's Fear"><span>The Wise Man's Fear</span></div>
      </div>
    </section>
    <section class="schedule">
      <h2>Schedule Reading</h2>
      <div class="calendar">
        <span>Sun</span><span>Mon</span><span class="active">Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
      </div>
    </section>
    <section class="friends">
      <h2>Reader Friends</h2>
      <div class="friend-list">
        <div class="friend-card"><b>Roberto Jordan</b><p>“What a delightful and magical chapter it is!”</p></div>
        <div class="friend-card"><b>Anna Henry</b><p>I finished reading the chapter last night and...</p></div>
      </div>
    </section>
  `;
}

// --- Placeholder for other pages ---
function renderBrowse() {
  document.getElementById('main-content').innerHTML = '<h2>Browse Books</h2>';
}
function renderCart() {
  document.getElementById('main-content').innerHTML = '<h2>Your Cart</h2>';
}
function renderProfile() {
  document.getElementById('main-content').innerHTML = '<h2>Your Profile</h2>';
}

// --- Browse/Search Books Page ---
function renderBrowse() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <section class="browse-header">
      <h2>Browse Books</h2>
      <form class="search-form" aria-label="Search books">
        <input type="search" placeholder="Search by title, author, or tag" aria-label="Search books" class="search-input" />
        <select class="filter-select" aria-label="Filter by genre">
          <option value="">All Genres</option>
          <option>Fantasy</option>
          <option>Science Fiction</option>
          <option>Non-fiction</option>
          <option>Romance</option>
        </select>
        <select class="filter-select" aria-label="Filter by price">
          <option value="">All Prices</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
        <button type="submit" class="cta-btn">Search</button>
      </form>
    </section>
    <section class="book-results">
      <div class="book-grid">
        <div class="book-card" tabindex="0" aria-label="View details for The World of Ice and Fire" onclick="renderBookDetails('icefire')">
          <img src="https://covers.openlibrary.org/b/id/8231856-L.jpg" alt="The World of Ice and Fire">
          <div class="book-info">
            <h3>The World of Ice and Fire</h3>
            <p>George R. R. Martin</p>
            <span class="price">₹499</span>
          </div>
        </div>
        <div class="book-card" tabindex="0" aria-label="View details for Fantastic Beasts" onclick="renderBookDetails('beasts')">
          <img src="https://covers.openlibrary.org/b/id/10521213-L.jpg" alt="Fantastic Beasts">
          <div class="book-info">
            <h3>Fantastic Beasts</h3>
            <p>J.K. Rowling</p>
            <span class="price">₹399</span>
          </div>
        </div>
        <div class="book-card" tabindex="0" aria-label="View details for Game of Thrones" onclick="renderBookDetails('got')">
          <img src="https://covers.openlibrary.org/b/id/10521214-L.jpg" alt="Game of Thrones">
          <div class="book-info">
            <h3>Game of Thrones</h3>
            <p>George R. R. Martin</p>
            <span class="price">₹599</span>
          </div>
        </div>
        <div class="book-card" tabindex="0" aria-label="View details for The Wise Man's Fear" onclick="renderBookDetails('wiseman')">
          <img src="https://covers.openlibrary.org/b/id/10521215-L.jpg" alt="The Wise Man's Fear">
          <div class="book-info">
            <h3>The Wise Man's Fear</h3>
            <p>Patrick Rothfuss</p>
            <span class="price">₹449</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

// --- Book Details Page (SRS: title, author, description, price, preview) ---
function renderBookDetails(bookId) {
  const books = {
    icefire: {
      title: "The World of Ice and Fire",
      author: "George R. R. Martin",
      desc: "A comprehensive history of the Seven Kingdoms, filled with lore and illustrations.",
      price: "₹499",
      preview: "https://covers.openlibrary.org/b/id/8231856-L.jpg"
    },
    beasts: {
      title: "Fantastic Beasts",
      author: "J.K. Rowling",
      desc: "Explore the magical creatures of the wizarding world in this illustrated guide.",
      price: "₹399",
      preview: "https://covers.openlibrary.org/b/id/10521213-L.jpg"
    },
    got: {
      title: "Game of Thrones",
      author: "George R. R. Martin",
      desc: "The first book in the epic fantasy series A Song of Ice and Fire.",
      price: "₹599",
      preview: "https://covers.openlibrary.org/b/id/10521214-L.jpg"
    },
    wiseman: {
      title: "The Wise Man's Fear",
      author: "Patrick Rothfuss",
      desc: "The second installment in The Kingkiller Chronicle, following Kvothe's journey.",
      price: "₹449",
      preview: "https://covers.openlibrary.org/b/id/10521215-L.jpg"
    }
  };
  const book = books[bookId];
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <section class="book-details">
      <img src="${book.preview}" alt="${book.title}" class="book-preview">
      <div class="book-meta">
        <h2>${book.title}</h2>
        <h4>by ${book.author}</h4>
        <p>${book.desc}</p>
        <div class="book-purchase">
          <span class="price">${book.price}</span>
          <button class="cta-btn" onclick="addToCart('${bookId}')">Add to Cart</button>
        </div>
      </div>
    </section>
    <button class="back-btn" onclick="renderBrowse()">← Back to Browse</button>
  `;
}

// --- Add to Cart (SRS: Cart logic placeholder) ---
function addToCart(bookId) {
  alert('Book added to cart! (Mock logic)');
}
