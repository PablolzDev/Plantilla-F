import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const withNextIntl = createNextIntlPlugin('./src/app/i18n/request.ts');

const nextConfig = {
    compiler: {
        styledComponents: true,
    }
};

export default withNextIntl(nextConfig);