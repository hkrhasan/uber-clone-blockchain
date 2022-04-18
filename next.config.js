/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MAPBOX_API_URL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    MAPBOX_DIRECTIONS_API_URL: 'https://api.mapbox.com/directions/v5/mapbox/driving-traffic',
    SANITY_CLIENT_TOKEN: 'YOUR_SANITY_CLIENT',
    SANITY_PROJECT_ID: 'YOUR_SANITY_PROJECT_ID',
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN:'YOUR_MAPBOX_ACCESS_TOKEN',
    UBER_ADDRESS: 'YOUR_UBER_ADDRESS',
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig
