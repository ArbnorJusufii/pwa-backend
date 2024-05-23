importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

const { registerRoute } = workbox.routing;
const { CacheFirst, StaleWhileRevalidate, NetworkFirst } = workbox.strategies;

registerRoute(
    /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
    new CacheFirst({
        cacheName: 'google-fonts-webfonts',
        expiration: {
            maxEntries: 4,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 365 days
        },
    })
);

registerRoute(
    /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
    new StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        expiration: {
            maxEntries: 4,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
        },
    })
);

registerRoute(
    /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
    new StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        expiration: {
            maxEntries: 4,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
        },
    })
);

registerRoute(
    /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
    new StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        expiration: {
            maxEntries: 64,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
    })
);

registerRoute(
    /\/_next\/image\?url=.+$/i,
    new StaleWhileRevalidate({
        cacheName: 'next-image',
        expiration: {
            maxEntries: 64,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
    })
);

registerRoute(
    /\.(?:mp3|wav|ogg)$/i,
    new CacheFirst({
        rangeRequests: true,
        cacheName: 'static-audio-assets',
        expiration: {
            maxEntries: 32,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
    })
);

registerRoute(
    /\.(?:mp4)$/i,
    new CacheFirst({
        rangeRequests: true,
        cacheName: 'static-video-assets',
        expiration: {
            maxEntries: 32,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
    })
);

registerRoute(
    /\.(?:js)$/i,
    new StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        expiration: {
            maxEntries: 32,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
    })
);

registerRoute(
    /\.(?:css|less)$/i,
    new StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        expiration: {
            maxEntries: 32,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
    })
);

registerRoute(
    /\/_next\/data\/.+\/.+\.json$/i,
    new StaleWhileRevalidate({
        cacheName: 'next-data',
        expiration: {
            maxEntries: 32,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
    })
);

registerRoute(
    /\.(?:json|xml|csv)$/i,
    new NetworkFirst({
        cacheName: 'static-data-assets',
        expiration: {
            maxEntries: 32,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
    })
);

registerRoute(
    ({ url }) => {
        const isSameOrigin = self.origin === url.origin;
        if (!isSameOrigin) return false;
        const pathname = url.pathname;
        // Exclude /api/auth/callback/* to fix OAuth workflow in Safari without impact other environment
        // Above route is default for next-auth, you may need to change it if your OAuth workflow has a different callback route
        // Issue: https://github.com/shadowwalker/next-pwa/issues/131#issuecomment-821894809
        if (pathname.startsWith('/api/auth/')) return false;
        if (pathname.startsWith('/api/')) return true;
        return false;
    },
    new NetworkFirst({
        cacheName: 'apis',
        expiration: {
            maxEntries: 16,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
        networkTimeoutSeconds: 10, // fall back to cache if api does not response within 10 seconds
    }),
    'GET'
);

registerRoute(
    ({ url }) => {
        const isSameOrigin = self.origin === url.origin;
        if (!isSameOrigin) return false;
        const pathname = url.pathname;
        if (pathname.startsWith('/api/')) return false;
        return true;
    },
    new NetworkFirst({
        cacheName: 'others',
        expiration: {
            maxEntries: 32,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
        networkTimeoutSeconds: 10,
    })
);

registerRoute(
    ({ url }) => {
        const isSameOrigin = self.origin === url.origin;
        return !isSameOrigin;
    },
    new NetworkFirst({
        cacheName: 'cross-origin',
        expiration: {
            maxEntries: 32,
            maxAgeSeconds: 60 * 60, // 1 hour
        },
        networkTimeoutSeconds: 10,
    })
);
