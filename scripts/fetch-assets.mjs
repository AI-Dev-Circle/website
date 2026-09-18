import { mkdir, writeFile, copyFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const eventFiles = [
  "event-1-geekyants-2023.jpg",
  "event-2-lambdatest-2023.jpg",
  "event-3-razorpay-2024.jpg",
  "event-4-hingehealth-2024.jpg",
  "event-5-sensehq-2024.jpg",
  "event-6-geekyants-2024.jpg",
  "event-7-deleteme-2024.jpg",
  "event-8-lambdatest-2024.jpg",
  "event-9-casual-meetup-2024.jpg",
  "event-10-casual-meetup-2024.jpg",
  "event-11-ansr-2024.jpg",
  "event-12-microsoft-2025.jpg",
  "event-13-imagekit-2025.jpg",
  "event-14-contentstack-2025.jpg",
  "event-15-devrev-2025.jpg",
  "event-16-razorpay-2025.jpg",
  "event-17-hacktoberfest-2025.jpg",
  "event-18-kanini-2025.jpg",
  "event-20-cashfree-2025.jpg",
  "event-21-zopdev-2026.jpg",
  "event-22-ibm-2026.jpg",
  "event-25-coderabbit-2026.jpg",
  "event-28-amadeus-2026.jpg",
  "event-32-paytm-2026.jpg",
  "25th-rp-meetup.jpeg",
  "26-rp-meetup.jpeg",
];
const partners = [
  "logo-microsoft.png",
  "logo-ibm.png",
  "logo-qdrant.png",
  "logo-weaviate.png",
  "logo-lambdatest.png",
  "logo-kanini.png",
  "ansr.png",
  "amadeus.png",
  "logo-razorpay.png",
  "logo-cashfree.png",
  "logo-elasticsearch.png",
  "logo-mongodb.png",
  "logo-postman.png",
  "AI-Collective.png",
  "logo-harness.png",
  "logo-coderabbit.png",
  "logo-tooljet.png",
  "logo-kong.png",
  "logo-castai.png",
  "logo-portkey.png",
  "logo-zopdev.png",
  "logo-imagekit.png",
  "logo-geekyants.png",
  "logo-sensehq.png",
  "logo-hingehealth.png",
  "logo-paytm.png",
  "logo-contentstack.png",
  "logo-devrev.png",
  "logo-flipkart.png",
  "logo-canonical.png",
];
await mkdir(new URL("public/events/", root), { recursive: true });
await mkdir(new URL("public/partners/", root), { recursive: true });
await mkdir(new URL("public/brand/", root), { recursive: true });
await copyFile(
  new URL("bfdhg.png", root),
  new URL("public/brand/adc-original.png", root),
);
const jobs = [
  ...eventFiles.map((file) => ({ file, source: "events", target: "events" })),
  ...partners.map((file) => ({
    file,
    source: "partner_img",
    target: "partners",
  })),
];
let failures = 0;
for (let start = 0; start < jobs.length; start += 6) {
  await Promise.all(
    jobs.slice(start, start + 6).map(async ({ file, source, target }) => {
      try {
        const response = await fetch(
          `https://www.priteshkiri.com/static/${source}/${file}`,
          { signal: AbortSignal.timeout(25000) },
        );
        if (
          !response.ok ||
          !response.headers.get("content-type")?.startsWith("image/")
        )
          throw new Error(`HTTP ${response.status}`);
        await writeFile(
          new URL(`public/${target}/${file}`, root),
          Buffer.from(await response.arrayBuffer()),
        );
        console.log(`Saved ${target}/${file}`);
      } catch (error) {
        failures++;
        console.error(`Failed ${file}: ${error.message}`);
      }
    }),
  );
}
console.log(`${jobs.length - failures}/${jobs.length} images saved.`);
if (failures) process.exitCode = 1;
