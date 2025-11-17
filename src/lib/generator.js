import { bannerTemplate, policyTemplate } from "./data/templates.js";

export function generateAll(input) {
    const { regulation, categories, company, url, bannerStyle } = input;

    const bannerText = bannerTemplate({ regulation, categories, company });
    const policy = policyTemplate({ regulation, categories, company, url });

    const htmlSnippet = `
<div class="cookie-banner">
  <p>${bannerText}</p>
  ${bannerButtons(bannerStyle)}
</div>`.trim();

    return {
        bannerText,
        htmlSnippet,
        policy
    };
}

function bannerButtons(style) {
    if (style === "accept_reject")
        return `<button>Accept</button><button>Reject</button>`;
    if (style === "accept_manage")
        return `<button>Accept</button><button>Manage settings</button>`;
    return `<button>Got it</button>`;
}
