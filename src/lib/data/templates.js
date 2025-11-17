// Legal text templates (GDPR, CCPA, Global strictest, Basic)

export const REGULATIONS = {
    gdpr: "GDPR / ePrivacy (EU/UK)",
    ccpa: "CCPA / CPRA (California)",
    global: "Global strictest combined mode",
    basic: "Basic compliance (non-regional)"
};

export const COOKIE_CATEGORIES = [
    "Necessary",
    "Analytics",
    "Functional",
    "Marketing",
    "Social media"
];

export const BANNER_STYLES = {
    accept_reject: "Accept / Reject",
    accept_manage: "Accept + Manage",
    notice_gotit: "Notice + Got it"
};

// Banner snippets
export function bannerTemplate({ regulation, categories, company }) {
    return `
${company ? `${company} uses cookies. ` : ""}We use ${
        categories.length ? categories.join(", ") : "no optional"
    } cookies in accordance with ${REGULATIONS[regulation]}.
You can continue using our site by accepting or adjusting your cookie choices.`;
}

// 500–800 word cookie policy (shortened but realistic)
export function policyTemplate({ regulation, categories, company, url }) {
    return `
${company || "Our company"} (“we”, “us”, “our”) uses cookies and similar technologies on ${
        url || "this website"
    }. This Cookie Policy explains what cookies are, the types we use, and how you can control them.

1. What Are Cookies?
Cookies are small text files placed on your device. They help websites function, measure usage, and improve the user experience.

2. Why We Use Cookies
We use cookies to operate this website, understand performance, and optionally enable additional features.

3. Categories We Use
${categories.length ? categories.join(", ") : "No optional cookies selected"}.

4. Legal Basis
This site follows ${REGULATIONS[regulation]}. Where required, optional cookies are only used with consent.

5. Managing Cookies
You may withdraw or change your preferences at any time.

6. Changes
We may update this Cookie Policy where necessary.

7. Contact
If you have questions, contact ${company || "our team"}.

End of Policy.
`.trim();
}
