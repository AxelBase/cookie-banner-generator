<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | Cookie Banner Text Generator</title>
  <meta name="description" content="Review the Terms and Conditions for using the Cookie Banner Text Generator, a privacy-first tool for creating compliant cookie banner text." />
  <meta property="og:title" content="Terms and Conditions | Cookie Banner Text Generator" />
  <meta property="og:description" content="Review the Terms and Conditions for using the Cookie Banner Text Generator, a privacy-first tool for creating compliant cookie banner text." />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: October 15, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By using the <strong>Cookie Banner Text Generator</strong> (the "Tool"), you agree to these Terms and Conditions ("Terms"). If you don't agree, don't use the Tool.</p>

    <h2>2. Description of Service</h2>
    <p>The Tool is a free, client-side web utility that generates compliant cookie banner text. It operates entirely in your browser and provides features like customizable templates and export options.</p>

    <h2>3. User Obligations</h2>
    <p>You agree to use the Tool for lawful purposes only and not to:</p>
    <ul>
      <li>Use the Tool for malicious or harmful activities.</li>
      <li>Modify or distribute the Tool without permission.</li>
    </ul>
    
    <h2>4. Intellectual Property</h2>
    <p>The Tool is owned by its creators. You're granted a limited license to use it for personal or non-commercial purposes.</p>

    <h2>5. Disclaimer of Warranties</h2>
    <p>The Tool is provided "as is" without warranties of any kind. We disclaim warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

    <h2>6. Limitation of Liability</h2>
    <p>We're not liable for any damages arising from your use of the Tool.</p>

    <h2>7. Changes to Terms</h2>
    <p>We may update these Terms at any time. Continued use of the Tool constitutes acceptance of updated Terms.</p>

    <h2>8. Contact Us</h2>
    <p>For questions about these Terms, contact us.</p>

    <p class="italic-note">These Terms govern your use of the Cookie Banner Text Generator.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2{
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }

  .prose p {
    color: var(--text-primary);
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--text-primary);
  }
  .prose ul li::marker {
    color: var(--accent-primary);
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>