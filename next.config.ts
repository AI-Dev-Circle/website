import type { NextConfig } from "next";
const config: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  images: { formats: ["image/avif", "image/webp"] },
  redirects() {
    return [{ source: "/moments", destination: "/events", permanent: true }];
  },
};
export default config;
