<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Cookie Banner Text Generator</title>
  <meta name="description" content="Learn how the Cookie Banner Text Generator protects your privacy with a no-data-collection approach." />
  <meta property="og:title" content="Privacy Policy | Cookie Banner Text Generator" />
  <meta property="og:description" content="Learn how the Cookie Banner Text Generator protects your privacy with a no-data-collection approach." />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: October 15, 2025</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>Cookie Banner Text Generator</strong>, a client-side web utility designed to help you create compliant cookie banner text. We are committed to protecting your privacy and operate on a <strong>privacy-first principle</strong>. Since the tool runs entirely in your browser, <strong>we do not collect, store, or process any personal data</strong>.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>The Cookie Banner Text Generator does not collect:</p>
    <ul>
      <li><strong>Personal Identifiable Information (PII)</strong>: Such as names, email addresses, or physical addresses.</li>
      <li><strong>Usage Data</strong>: Including IP addresses, browser type, device information, or location data.</li>
      <li><strong>Content Data</strong>: Any input you provide is processed locally in your browser and is not transmitted to our servers or any third party.</li>
      <li><strong>Analytics Data</strong>: We do not use tracking tools or cookies to monitor user behavior.</li>
    </ul>

    <h2>3. How the Tool Works</h2>
    <p>When you use the Cookie Banner Text Generator:</p>
    <ul>
      <li><strong>Input and Processing</strong>: You input data directly into the browser interface. The tool generates cookie banner text locally using JavaScript.</li>
      <li><strong>No Data Transmission</strong>: No data is sent over the internet to us or any external service.</li>
      <li><strong>Temporary Local Storage</strong>: The browser may use temporary local storage for session data, but this is cleared upon reset or page reload.</li>
    </ul>

    <h2>4. Third-Party Services</h2>
    <p>We do not integrate any third-party services that collect data. The tool uses open-source libraries hosted locally or via CDNs, but these do not track users.</p>

    <h2>5. Cookies and Tracking Technologies</h2>
    <p>The Cookie Banner Text Generator <strong>does not use cookies</strong> or any tracking technologies.</p>

    <h2>6. Data Security</h2>
    <p>We encourage users to practice good security habits, such as using secure browsers and devices.</p>

    <h2>7. Children's Privacy</h2>
    <p>Our tool is not intended for children under 13 years of age. We do not knowingly collect information from children.</p>

    <h2>8. International Users</h2>
    <p>The tool is hosted in a jurisdiction compliant with international privacy standards, but since no data is collected, it adheres to regulations like <strong>GDPR</strong> and <strong>CCPA</strong> by default.</p>

    <h2>9. Changes to This Privacy Policy</h2>
    <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with the effective date.</p>

    <h2>10. Contact Us</h2>
    <p>If you have questions about this Privacy Policy, contact us at.</p>

    <p class="italic-note">This Privacy Policy emphasizes our <strong>no-data-collection commitment</strong>, ensuring users can generate cookie banner text with peace of mind.</p>
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