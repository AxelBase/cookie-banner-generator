<script lang="ts">
  import "../app.css";
  import { base } from "$app/paths";
  import { fly } from "svelte/transition";

  // --- Buy Me A Coffee Dropdown Logic (updated with BMC + Bitcoin) ---
  const currentYear = new Date().getFullYear();
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }
  function closeDropdown() {
    isDropdownOpen = false;
  }

  /**
   * Svelte Action to detect clicks outside an element
   */
  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };

    document.addEventListener('click', handleClick, true);

    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="{base}/bootstrap/bootstrap.min.css" />
  <script defer src="{base}/bootstrap/bootstrap.bundle.min.js"></script>
  <title>AxelBase Generator</title>
</svelte:head>

<header class="site-header">
  <nav>
    <div class="nav-left">
      <a href="{base}/" aria-label="Home">
        <img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" class="nav-logo" />
      </a>
      <a class="nav-brand" href="{base}/">AxelBase</a>

      <div class="bmac-item" use:clickOutside on:click_outside={closeDropdown}>
        <button class="bmac-button" on:click={toggleDropdown} aria-label="Support options">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
          </svg>
          <span>Buy me a coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$3</span> One Coffee
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$5</span> Two Coffees
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$10</span> Three Coffees
            </a>

            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              on:click={closeDropdown}
              class="custom-amount"
            >
              Buy via Crypto (Bitcoin)
            </a>
          </div>
        {/if}
      </div>
    </div>

    <ul class="nav-right">
      <li><a class="nav-link" href="{base}/">Home</a></li>
      <li><a class="nav-link" href="{base}/#about">About</a></li>
      <li><a class="nav-link" href="{base}/#how-to-use">How to use</a></li>
      <li><a class="nav-link" href="{base}/#faq">FAQ</a></li>
      <li><a class="nav-link" href="{base}/blog">Blog</a></li>
    </ul>
  </nav>
</header>

<main>
  <slot />
</main>

<footer class="site-footer">
  <span>&copy; AxelBase Cookie Banner Generator – {currentYear}</span>
  <div class="footer-links">
    <a href="{base}/privacy">Privacy</a>
    <a href="{base}/terms">Terms</a>
  </div>
</footer>

<style>
  :root {
    --pearl-green: #1C542D;
    --white: #FFFFFF;
    --light-gray: #f8f9fa;
    --dark-text: #343a40;
    --header-height: 70px;
    --footer-height: 50px;
    --b-radius: 8px;
    --shadow-light: 0 4px 10px rgba(0, 0, 0, 0.07);
    --transition-speed: 0.3s;

    --brand-green: #008F39;
    --brand-green-hover: #00732d;
    --brand-light-green: #e6f4ea;
  }

  main {
    min-height: calc(100vh - var(--header-height) - var(--footer-height));
    width: 100%;
  }

  a {
    color: var(--pearl-green);
    text-decoration: none;
    transition: color var(--transition-speed) ease;
  }

  a:hover {
    color: var(--dark-text);
  }

  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: var(--header-height);
    background-color: var(--white);
    border-bottom: 2px solid var(--pearl-green);
    box-shadow: var(--shadow-light);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    z-index: 1000;
  }

  .site-header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1400px;
  }

  .nav-left {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }

  .nav-logo {
    height: 40px;
    width: 40px;
    transition: transform var(--transition-speed) ease-out;
  }

  .nav-logo:hover {
    transform: scale(1.1) rotate(-5deg);
  }

  .nav-brand {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--pearl-green);
    text-decoration: none;
  }

  .nav-brand:hover {
    color: var(--dark-text);
  }

  .nav-right {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2rem;
  }

  .nav-link {
    font-size: 1rem;
    font-weight: 500;
    color: var(--dark-text);
    text-decoration: none;
    position: relative;
    padding: 0.5rem 0;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: var(--pearl-green);
    transition: width var(--transition-speed) ease-out;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  /* ===============
     Buy Me A Coffee Button & Dropdown (merged & adapted)
     =============== */
  .bmac-item {
    position: relative;
    margin-left: 0.5rem;
  }

  /* Button keeps File 2 base styling but uses BMC green and hover effects from File 1 */
  .bmac-button {
    background-color: var(--brand-green);
    color: var(--white);
    border: none;
    border-radius: 50px;
    padding: 0.6rem 1.25rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    transition: all var(--transition-speed) ease;
    box-shadow: 0 2px 5px rgba(0, 143, 57, 0.3);
  }

  .bmac-button svg {
    width: 20px;
    height: 20px;
    fill: var(--white);
  }

  .bmac-button:hover {
    background-color: var(--brand-green-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 143, 57, 0.3);
  }

  .bmac-button:hover svg {
    fill: var(--white);
  }

  /* Dropdown styling from File 1, widened slightly to match File 2 layout */
  .bmac-dropdown {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 240px;
    background: var(--white);
    border-radius: 16px;
    box-shadow: 0 12px 32px rgba(0, 143, 57, 0.15);
    overflow: hidden;
    border: 1px solid rgba(0, 143, 57, 0.1);
    z-index: 1001;
    display: flex;
    flex-direction: column;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: #333;
    text-decoration: none;
    font-size: 0.98rem;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: var(--brand-light-green);
    color: var(--brand-green);
    padding-left: 28px;
  }

  .bmac-dropdown .amount {
    font-weight: 700;
    color: var(--brand-green);
    font-size: 1.1rem;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 600;
    color: var(--brand-green);
    border-top: 1px solid #eee;
    justify-content: center !important;
  }

  /* ===============
     Footer (unchanged)
     =============== */
  .site-footer {
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    height: var(--footer-height);
    background-color: var(--pearl-green);
    color: var(--light-gray);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    font-size: 0.9rem;
    z-index: 1000;
  }

  .footer-links {
    display: flex;
    gap: 1.5rem;
  }

  .footer-links a {
    color: var(--white);
    text-decoration: none;
  }

  .footer-links a:hover {
    text-decoration: underline;
  }
</style>