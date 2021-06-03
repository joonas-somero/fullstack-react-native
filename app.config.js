import 'dotenv/config';

export default {
  name: 'fullstack-react-native',
  slug: 'fullstack-react-native',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    'fallbackToCacheTimeout': 0,
  },
  assetBundlePatterns: [
    '**/*',
  ],
  ios: {
    'supportsTablet': true,
  },
  web: {
    'favicon': './assets/favicon.png',
  },
  extra: {
    apollo_uri: process.env.APOLLO_URI,
  },
};