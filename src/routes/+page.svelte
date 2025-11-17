<script>
    import { base } from "$app/paths";
  import { REGULATIONS, COOKIE_CATEGORIES, BANNER_STYLES } from "$lib/data/templates.js";
  import { generateAll } from "$lib/generator.js";
  import { copyText, downloadZip } from "$lib/utils.js";

  let regulation = "gdpr";
  let categories = [];
  let company = "";
  let url = "";
  let bannerStyle = "accept_reject";

  let result = null;

  function generate() {
    result = generateAll({ regulation, categories, company, url, bannerStyle });
  }

  function toggleCategory(cat) {
    categories = categories.includes(cat)
      ? categories.filter((c) => c !== cat)
      : [...categories, cat];
  }
</script>

<div class="container mt-5">
  <h2>Cookie Banner Generator</h2>
  <p class="text-danger fw-bold">Template only – not legal advice.</p>

  <div class="mb-3">
    <label for="regulation" class="form-label fw-bold">Regulation</label>
    <select id="regulation" bind:value={regulation} class="form-select">
      {#each Object.entries(REGULATIONS) as [key, label]}
        <option value={key}>{label}</option>
      {/each}
    </select>
  </div>

  <div class="mb-3">
    <label for="categories" class="form-label fw-bold">Cookie Categories</label>
    <div id="categories">
      {#each COOKIE_CATEGORIES as cat}
        <div>
          <input
            id={"cat-" + cat}
            type="checkbox"
            checked={categories.includes(cat)}
            on:change={() => toggleCategory(cat)}
          />
          <label for={"cat-" + cat}>{cat}</label>
        </div>
      {/each}
    </div>
  </div>

  <div class="row">
    <div class="col-md-6 mb-3">
      <label for="company" class="form-label">Company/Brand Name</label>
      <input id="company" class="form-control" bind:value={company} />
    </div>

    <div class="col-md-6 mb-3">
      <label for="url" class="form-label">Website URL</label>
      <input id="url" class="form-control" bind:value={url} />
    </div>
  </div>

  <div class="mb-3">
    <label for="bannerStyle" class="form-label fw-bold">Banner Style</label>
    <select id="bannerStyle" bind:value={bannerStyle} class="form-select">
      {#each Object.entries(BANNER_STYLES) as [key, label]}
        <option value={key}>{label}</option>
      {/each}
    </select>
  </div>

  <button class="btn btn-primary mb-4" on:click={generate}>Generate</button>

  {#if result}
    <h4>Banner Text</h4>
    <pre>{result.bannerText}</pre>
    <button class="btn btn-secondary copy-btn" on:click={() => copyText(result.bannerText)}>
      Copy
    </button>

    <h4 class="mt-4">HTML Snippet</h4>
    <pre>{result.htmlSnippet}</pre>
    <button class="btn btn-secondary copy-btn" on:click={() => copyText(result.htmlSnippet)}>
      Copy
    </button>

    <h4 class="mt-4">Cookie Policy</h4>
    <textarea class="form-control" rows="12" readonly>{result.policy}</textarea>
    <button class="btn btn-secondary copy-btn" on:click={() => copyText(result.policy)}>
      Copy
    </button>

    <div class="mt-4">
      <button class="btn btn-success" on:click={() => downloadZip(result)}>
        Download ZIP
      </button>
    </div>
  {/if}

<section id="about" class="page-section">
  <h2>About AxelBase</h2>
  <p>AxelBase is a free, privacy-first cookie banner text generator designed to help small and medium eCommerce businesses comply with regulations like POPIA, GDPR, and CCPA. Our goal is to make cookie compliance simple, straightforward, and accessible to all.</p>
  <p>We understand that navigating cookie laws can be overwhelming, which is why we've created a user-friendly generator that produces compliant, customer-friendly cookie banner text in seconds. No legal jargon, no expensive lawyers — just a simple, effective solution.</p>
  <p>Our team is committed to staying up-to-date with the latest regulations and best practices, ensuring that our generator always produces compliant text. We're dedicated to helping businesses like yours build trust with their customers and avoid unnecessary risks.</p>
</section>

<section id="how-to-use" class="page-section">
  <h2>How to Use</h2>
  <p>Using our Cookie Banner Text Generator is easy and straightforward. Here's how it works:</p>
  <ol>
    <li><strong>Select Your Regulation</strong>: Choose the regulation that applies to your business (POPIA, GDPR, CCPA, or multiple).</li>
    <li><strong>Enter Your Business Details</strong>: Provide basic information about your business, such as your name, website, and contact email.</li>
    <li><strong>Customize Your Banner</strong>: Select the cookie categories you use and customize the banner style to match your brand.</li>
    <li><strong>Generate Your Text</strong>: Click "Generate" and receive your compliant cookie banner text instantly.</li>
    <li><strong>Copy and Paste</strong>: Copy the generated text and paste it into your website's cookie banner.</li>
  </ol>
  <p>That's it! Our generator does the hard work for you, ensuring that your cookie banner is compliant and customer-friendly.</p>
</section>

<section id="faq" class="page-section" style="padding-bottom: 5rem;">
  <h2>FAQ</h2>
  <p><strong>Q: Is this legal advice?</strong><br />
    A: No, our generator is a tool designed to help you create compliant cookie banner text. It's not a substitute for professional legal advice. We recommend consulting with a lawyer to ensure your specific business needs are met.</p>
  <p><strong>Q: Can I customize the generated text?</strong><br />
    A: Yes, you can customize the generated text to fit your business needs. However, please ensure that any changes you make comply with the relevant regulations.</p>
  <p><strong>Q: Is my data stored or shared?</strong><br />
    A: No, we don't store or share any data you enter into our generator. Your information is processed locally in your browser and never transmitted to our servers.</p>
  <p><strong>Q: Can I use this for multiple websites?</strong><br />
    A: Yes, you can use our generator for multiple websites. Simply enter the relevant information for each website, and we'll generate a unique cookie banner text for each one.</p>
  <p><strong>Q: How often should I update my cookie banner text?</strong><br />
    A: We recommend reviewing and updating your cookie banner text at least annually, or whenever there are changes to your business or the relevant regulations.</p>
</section>
</div>