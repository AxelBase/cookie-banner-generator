// Copy to clipboard (FR07)
export async function copyText(str) {
    await navigator.clipboard.writeText(str);
}

// ZIP download (FR08)
export async function downloadZip({ bannerText, policy }) {
    const zip = new JSZip();
    zip.file("cookie-banner.html", bannerText);
    zip.file("cookie-policy.txt", policy);

    const blob = await zip.generateAsync({ type: "blob" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "cookie-text.zip";
    a.click();
}
