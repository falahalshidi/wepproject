/**
 * Ready-made templates: each has body HTML, CSS, and JS strings.
 * Built into a full document inside the preview iframe.
 */
(function () {
  window.IDEA_TEMPLATES = [
    {
      id: "accounting",
      title: "Accounting & invoices",
      keywords: [
        "account",
        "accounting",
        "invoice",
        "invoices",
        "bookkeeping",
        "ledger",
        "tax",
        "books",
        "finance",
        "billing",
      ],
      html: `
<header class="site-header">
  <div class="brand">MyBooks</div>
  <nav>
    <a href="#">Dashboard</a>
    <a href="#">Invoices</a>
    <a href="#">Reports</a>
  </nav>
</header>
<main>
  <h1>Financial overview</h1>
  <section class="stats">
    <article class="card"><span class="label">Revenue (month)</span><strong>12,450.000 OMR</strong></article>
    <article class="card"><span class="label">Expenses</span><strong>7,200.000 OMR</strong></article>
    <article class="card"><span class="label">Net profit</span><strong>5,250.000 OMR</strong></article>
  </section>
  <section class="table-wrap">
    <h2>Recent invoices</h2>
    <table>
      <thead><tr><th>ID</th><th>Client</th><th>Amount</th><th>Status</th></tr></thead>
      <tbody>
        <tr><td>#1024</td><td>Al Noor LLC</td><td>3,500.000 OMR</td><td><span class="badge paid">Paid</span></td></tr>
        <tr><td>#1023</td><td>Afaq Store</td><td>1,200.000 OMR</td><td><span class="badge pending">Pending</span></td></tr>
        <tr><td>#1022</td><td>Bayan Co.</td><td>8,900.000 OMR</td><td><span class="badge paid">Paid</span></td></tr>
      </tbody>
    </table>
  </section>
</main>
<footer class="site-footer">© MyBooks — demo preview</footer>`,
      css: `
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; background: #fafafa; color: #333; line-height: 1.5; }
.site-header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; background: #fff; border-bottom: 1px solid #e8e8e8; }
.brand { font-weight: 700; color: #8b6914; }
.site-header nav { display: flex; gap: 1rem; }
.site-header a { color: #666; text-decoration: none; font-size: 0.9rem; }
.site-header a:hover { color: #c9a882; }
main { max-width: 960px; margin: 0 auto; padding: 2rem 1.5rem; }
h1 { font-size: 1.75rem; margin-bottom: 1.25rem; }
h2 { font-size: 1.1rem; margin-bottom: 0.75rem; }
.stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
.card { background: #fff; border: 1px solid #e8e8e8; border-radius: 10px; padding: 1.25rem; }
.card .label { display: block; font-size: 0.8rem; color: #888; margin-bottom: 0.35rem; }
.card strong { font-size: 1.25rem; color: #5c4a2e; }
.table-wrap { background: #fff; border: 1px solid #e8e8e8; border-radius: 10px; padding: 1.25rem; }
table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
th, td { text-align: left; padding: 0.65rem 0.5rem; border-bottom: 1px solid #eee; }
th { color: #666; font-weight: 600; }
.badge { padding: 0.2rem 0.5rem; border-radius: 6px; font-size: 0.75rem; }
.badge.paid { background: #e8f5e9; color: #2e7d32; }
.badge.pending { background: #fff8e1; color: #f57c00; }
.site-footer { text-align: center; padding: 1.5rem; color: #999; font-size: 0.85rem; }`,
      js: `
document.querySelectorAll('.site-header a').forEach(function (a) {
  a.addEventListener('click', function (e) { e.preventDefault(); });
});`,
    },
    {
      id: "wallet",
      title: "Personal wallet",
      keywords: [
        "wallet",
        "money",
        "expense",
        "expenses",
        "income",
        "budget",
        "savings",
        "cash",
        "spending",
      ],
      html: `
<header class="hero">
  <h1>My wallet</h1>
  <p class="balance-label">Available balance</p>
  <p class="balance" id="balance">4,280.500 OMR</p>
</header>
<section class="actions">
  <button type="button" class="btn primary" id="addMock">Add demo transaction</button>
  <button type="button" class="btn ghost" id="resetDemo">Reset demo</button>
</section>
<ul class="tx-list" id="txList">
  <li><span class="tx-title">Salary</span><span class="tx-amt pos">+5,000.000 OMR</span></li>
  <li><span class="tx-title">Groceries</span><span class="tx-amt neg">-280.000 OMR</span></li>
  <li><span class="tx-title">Subscription</span><span class="tx-amt neg">-99.000 OMR</span></li>
</ul>`,
      css: `
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; background: #fff; color: #333; min-height: 100vh; }
.hero { background: linear-gradient(135deg, #f5f0e8 0%, #fff 100%); padding: 2.5rem 1.5rem; text-align: center; border-bottom: 1px solid #e8e8e8; }
.hero h1 { font-size: 1.5rem; color: #5c4a2e; margin-bottom: 0.5rem; }
.balance-label { color: #888; font-size: 0.9rem; }
.balance { font-size: 2rem; font-weight: 700; color: #8b6914; margin-top: 0.25rem; }
.actions { display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; padding: 1.25rem; }
.btn { border: none; border-radius: 10px; padding: 0.65rem 1.25rem; font-size: 0.9rem; cursor: pointer; font-family: inherit; }
.btn.primary { background: #c9a882; color: #fff; }
.btn.primary:hover { background: #b8956a; }
.btn.ghost { background: #fff; border: 1px solid #e0d5c8; color: #5c4a2e; }
.tx-list { list-style: none; max-width: 420px; margin: 0 auto; padding: 0 1rem 2rem; }
.tx-list li { display: flex; justify-content: space-between; padding: 0.85rem 0; border-bottom: 1px solid #eee; }
.tx-title { color: #444; }
.tx-amt.pos { color: #2e7d32; font-weight: 600; }
.tx-amt.neg { color: #c62828; font-weight: 600; }`,
      js: `
(function () {
  var balanceEl = document.getElementById('balance');
  var list = document.getElementById('txList');
  var base = 4280.5;
  function fmt(n) {
    return n.toLocaleString('en-OM', { style: 'currency', currency: 'OMR' });
  }
  function renderBalance() { balanceEl.textContent = fmt(base); }
  document.getElementById('addMock').addEventListener('click', function () {
    base += 150;
    var li = document.createElement('li');
    li.innerHTML = '<span class="tx-title">Demo transfer</span><span class="tx-amt pos">+' + (150).toLocaleString('en-OM', { style: 'currency', currency: 'OMR' }) + '</span>';
    list.insertBefore(li, list.firstChild);
    renderBalance();
  });
  document.getElementById('resetDemo').addEventListener('click', function () {
    base = 4280.5;
    list.innerHTML = '<li><span class="tx-title">Salary</span><span class="tx-amt pos">+5,000.000 OMR</span></li><li><span class="tx-title">Groceries</span><span class="tx-amt neg">-280.000 OMR</span></li><li><span class="tx-title">Subscription</span><span class="tx-amt neg">-99.000 OMR</span></li>';
    renderBalance();
  });
  renderBalance();
})();`,
    },
    {
      id: "restaurant",
      title: "Restaurant menu",
      keywords: [
        "restaurant",
        "food",
        "menu",
        "cafe",
        "coffee",
        "dining",
        "bistro",
        "kitchen",
      ],
      html: `
<header class="banner">
  <div>
    <h1>Asalah Kitchen</h1>
    <p>Eastern flavors — demo menu</p>
  </div>
</header>
<div class="layout">
  <aside>
    <h2>Categories</h2>
    <ul id="cats">
      <li><button type="button" data-cat="all" class="cat active">All</button></li>
      <li><button type="button" data-cat="mains" class="cat">Mains</button></li>
      <li><button type="button" data-cat="sides" class="cat">Sides</button></li>
    </ul>
  </aside>
  <div class="menu" id="menu">
    <article class="item" data-cat="mains"><h3>Lamb kabsa</h3><p>Basmati rice and slow-cooked lamb</p><span class="price">4.500 OMR</span></article>
    <article class="item" data-cat="mains"><h3>Chicken mandi</h3><p>Roasted chicken with mandi rice</p><span class="price">3.800 OMR</span></article>
    <article class="item" data-cat="sides"><h3>Moutabal</h3><p>Smoky eggplant dip</p><span class="price">1.200 OMR</span></article>
    <article class="item" data-cat="sides"><h3>Hummus</h3><p>Chickpeas and tahini</p><span class="price">1.000 OMR</span></article>
  </div>
</div>`,
      css: `
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; background: #fafafa; color: #333; }
.banner { background: #5c4a2e; color: #fff; padding: 2rem 1.5rem; }
.banner h1 { font-size: 1.6rem; margin-bottom: 0.25rem; }
.banner p { opacity: 0.9; font-size: 0.95rem; }
.layout { display: grid; grid-template-columns: 200px 1fr; gap: 1.5rem; max-width: 900px; margin: 0 auto; padding: 1.5rem; }
@media (max-width: 640px) { .layout { grid-template-columns: 1fr; } }
aside h2 { font-size: 0.85rem; color: #888; margin-bottom: 0.75rem; }
aside ul { list-style: none; }
.cat { width: 100%; text-align: left; padding: 0.5rem 0.75rem; margin-bottom: 0.35rem; border: 1px solid #e8e8e8; border-radius: 8px; background: #fff; cursor: pointer; font-family: inherit; }
.cat:hover { border-color: #c9a882; }
.cat.active { background: #c9a882; color: #fff; border-color: #c9a882; }
.menu { display: grid; gap: 1rem; }
.item { background: #fff; border: 1px solid #e8e8e8; border-radius: 12px; padding: 1rem 1.1rem; display: none; }
.item.visible { display: block; }
.item h3 { font-size: 1.05rem; color: #5c4a2e; margin-bottom: 0.35rem; }
.item p { font-size: 0.88rem; color: #666; margin-bottom: 0.5rem; }
.price { font-weight: 700; color: #8b6914; }`,
      js: `
(function () {
  var items = document.querySelectorAll('.item');
  function filter(cat) {
    items.forEach(function (el) {
      el.classList.toggle('visible', cat === 'all' || el.getAttribute('data-cat') === cat);
    });
  }
  document.querySelectorAll('.cat').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.cat').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      filter(btn.getAttribute('data-cat'));
    });
  });
  filter('all');
})();`,
    },
    {
      id: "portfolio",
      title: "Portfolio",
      keywords: [
        "portfolio",
        "projects",
        "developer",
        "designer",
        "resume",
        "cv",
        "work",
        "showcase",
      ],
      html: `
<header class="top">
  <span class="logo">Alex Morgan</span>
  <a class="contact" href="#">Contact</a>
</header>
<section class="intro">
  <h1>Front-end developer</h1>
  <p>I build fast, focused web experiences. This is demo copy from the template.</p>
  <button type="button" class="cta" id="ctaBtn">View projects</button>
</section>
<section class="projects" id="projects">
  <h2>Selected work</h2>
  <div class="grid">
    <article class="tile"><h3>Tasks app</h3><p>Clean UI for daily planning</p></article>
    <article class="tile"><h3>Analytics board</h3><p>Interactive charts</p></article>
    <article class="tile"><h3>Mini shop</h3><p>Product grid and cart</p></article>
  </div>
</section>
<footer>© Portfolio demo</footer>`,
      css: `
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; background: #fff; color: #333; }
.top { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; border-bottom: 1px solid #e8e8e8; }
.logo { font-weight: 700; color: #5c4a2e; }
.contact { color: #c9a882; text-decoration: none; font-weight: 600; }
.intro { text-align: center; padding: 3rem 1.5rem 2rem; max-width: 560px; margin: 0 auto; }
.intro h1 { font-size: 2rem; margin-bottom: 0.75rem; color: #222; }
.intro p { color: #666; margin-bottom: 1.25rem; line-height: 1.6; }
.cta { background: #c9a882; color: #fff; border: none; padding: 0.75rem 1.5rem; border-radius: 10px; font-size: 1rem; cursor: pointer; font-family: inherit; }
.cta:hover { background: #b8956a; }
.projects { padding: 2rem 1.5rem 3rem; max-width: 960px; margin: 0 auto; }
.projects h2 { text-align: center; margin-bottom: 1.5rem; font-size: 1.2rem; color: #5c4a2e; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; }
.tile { background: #fafafa; border: 1px solid #e8e8e8; border-radius: 12px; padding: 1.25rem; transition: box-shadow 0.2s; }
.tile:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
.tile h3 { font-size: 1rem; margin-bottom: 0.4rem; color: #333; }
.tile p { font-size: 0.85rem; color: #777; }
footer { text-align: center; padding: 1.5rem; color: #aaa; font-size: 0.85rem; border-top: 1px solid #eee; }`,
      js: `
document.getElementById('ctaBtn').addEventListener('click', function () {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.contact').addEventListener('click', function (e) { e.preventDefault(); });`,
    },
    {
      id: "landing",
      title: "Product landing page",
      keywords: [
        "landing",
        "product",
        "signup",
        "subscribe",
        "startup",
        "marketing",
        "launch",
        "waitlist",
      ],
      html: `
<section class="hero">
  <div class="hero-inner">
    <span class="pill">New</span>
    <h1>Ship your idea in minutes</h1>
    <p>A simple way to present your product. Demo placeholder text for the template.</p>
    <form class="signup" id="signupForm">
      <input type="email" placeholder="Your email" required aria-label="Email" />
      <button type="submit">Join the list</button>
    </form>
    <p class="msg" id="formMsg" hidden>Thanks — you’re on the list (demo).</p>
  </div>
</section>
<section class="features">
  <div><h3>Fast</h3><p>Lightweight, no clutter</p></div>
  <div><h3>Clear</h3><p>One message, one goal</p></div>
  <div><h3>Responsive</h3><p>Works on every screen size</p></div>
</section>`,
      css: `
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; background: #fff; color: #333; }
.hero { background: #fafafa; border-bottom: 1px solid #e8e8e8; padding: 4rem 1.5rem; }
.hero-inner { max-width: 520px; margin: 0 auto; text-align: center; }
.pill { display: inline-block; background: #f0e6d8; color: #8b6914; font-size: 0.75rem; padding: 0.25rem 0.65rem; border-radius: 999px; margin-bottom: 1rem; }
.hero h1 { font-size: 2rem; margin-bottom: 0.75rem; line-height: 1.2; }
.hero > .hero-inner > p { color: #666; margin-bottom: 1.5rem; line-height: 1.6; }
.signup { display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; margin-bottom: 1rem; }
.signup input { flex: 1; min-width: 200px; padding: 0.65rem 0.85rem; border: 1px solid #ddd; border-radius: 8px; font-family: inherit; }
.signup button { background: #c9a882; color: #fff; border: none; padding: 0.65rem 1.25rem; border-radius: 8px; cursor: pointer; font-family: inherit; font-weight: 600; }
.signup button:hover { background: #b8956a; }
.msg { color: #2e7d32; font-size: 0.9rem; }
.features { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem; max-width: 900px; margin: 0 auto; padding: 2.5rem 1.5rem; }
.features div { text-align: center; padding: 1rem; }
.features h3 { color: #5c4a2e; margin-bottom: 0.35rem; font-size: 1rem; }
.features p { font-size: 0.88rem; color: #777; }`,
      js: `
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formMsg').hidden = false;
});`,
    },
    {
      id: "default",
      title: "Generic welcome page",
      keywords: [
        "generic",
        "default",
        "simple",
        "page",
        "site",
        "basic",
        "general",
      ],
      html: `
<main class="wrap">
  <h1>Welcome</h1>
  <p class="lead">We couldn’t match specific keywords — here’s a neutral starter layout.</p>
  <div class="cards">
    <article><h2>Section one</h2><p>Short blurb about your service or product.</p></article>
    <article><h2>Section two</h2><p>More detail or a few bullet points.</p></article>
  </div>
  <button type="button" class="btn" id="pulse">Try a tiny interaction</button>
  <p class="hint" id="hint" hidden>Done — this is just a demo.</p>
</main>`,
      css: `
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; background: #fff; color: #333; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 1.5rem; }
.wrap { max-width: 640px; text-align: center; }
h1 { font-size: 2rem; color: #5c4a2e; margin-bottom: 0.75rem; }
.lead { color: #666; margin-bottom: 2rem; line-height: 1.6; }
.cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; text-align: left; }
@media (max-width: 520px) { .cards { grid-template-columns: 1fr; } }
.cards article { background: #fafafa; border: 1px solid #e8e8e8; border-radius: 12px; padding: 1.25rem; }
.cards h2 { font-size: 1rem; color: #8b6914; margin-bottom: 0.5rem; }
.cards p { font-size: 0.88rem; color: #666; }
.btn { background: #c9a882; color: #fff; border: none; padding: 0.65rem 1.25rem; border-radius: 10px; cursor: pointer; font-family: inherit; }
.btn:hover { background: #b8956a; }
.hint { margin-top: 1rem; color: #2e7d32; font-size: 0.9rem; }`,
      js: `
document.getElementById('pulse').addEventListener('click', function () {
  document.getElementById('hint').hidden = false;
});`,
    },
  ];
})();
