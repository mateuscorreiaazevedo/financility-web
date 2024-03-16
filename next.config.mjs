import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/modules/core/configs/i18n.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default withNextIntl(nextConfig)
