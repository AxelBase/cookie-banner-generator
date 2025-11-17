<script lang="ts">
  import { base } from '$app/paths';

const posts = [
  { href: '/blog/posts/post1', title: 'Why Most Cookie Banners Are Too Complicated', description: 'The real reason small businesses avoid compliance tools — and how we fixed it.' },
  { href: '/blog/posts/post2', title: 'GDPR vs CCPA: What SMBs Actually Need to Know in 2025', description: 'A plain-English breakdown of the only two laws that matter for most online stores.' },
  { href: '/blog/posts/post3', title: 'How to Write a Cookie Banner That Doesn’t Annoy Customers', description: 'Real examples of high-converting, compliant banners that users actually click.' },
  { href: '/blog/posts/post4', title: 'The 30-Second Cookie Policy Every Shopify Store Should Use', description: 'Copy-paste ready policy that’s lawyer-reviewed and under 600 words.' },
  { href: '/blog/posts/post5', title: 'Google Analytics Is Dead – Here’s What to Use in 2025', description: 'Privacy-safe alternatives that still give you real data (no consent needed).' },
  { href: '/blog/posts/post6', title: '5 Common Cookie Banner Mistakes SMBs Must Avoid', description: 'Learn what makes a cookie banner non-compliant — and how our generator fixes these issues automatically.' },
  { href: '/blog/posts/post7', title: 'Free Cookie Banner Text Generator for SMBs', description: 'Instantly create compliant, customer-friendly cookie text without paying $99/month — built for small and medium eCommerce businesses.' },
];
</script>

<svelte:head>
  <title>Blog | Free & Simple Cookie Banner Generator</title>
  <meta name="description" content="Learn how to create compliant cookie banners in seconds. Free guides for GDPR, CCPA, Shopify, WooCommerce and small business owners." />
</svelte:head>

<div class="container py-5 blog-index">
  <header class="text-center mb-5 pb-4 border-bottom">
    <h1 class="display-4 fw-bold">Blog</h1>
    <p class="lead text-muted col-lg-8 mx-auto">
      Free, no-nonsense guides for small business owners who just want compliant cookie banners 
      without paying $49/month or hiring a lawyer.
    </p>
  </header>

  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {#each posts as post}
      <div class="col">
        <a href="{base}{post.href}" class="text-decoration-none">
          <div class="card h-100 shadow-sm hover-shadow border-0 transition">
            <div class="card-body d-flex flex-column">
              <h2 class="card-title h5 fw-bold text-primary">{post.title}</h2>
              <p class="card-text text-muted flex-grow-1 small">{post.description}</p>
              <span class="text-primary fw-semibold mt-3">Read more →</span>
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .hover-shadow {
    transition: all 0.3s ease;
  }
  .hover-shadow:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
  }
  .transition { transition: all 0.3s ease; }
</style>