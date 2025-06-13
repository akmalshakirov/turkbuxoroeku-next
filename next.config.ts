import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18next: {
        locales: ["en", "ru", "uz"],
        defaultLocale: "ru",
    },
};

module.exports = createNextIntlPlugin(nextConfig);
