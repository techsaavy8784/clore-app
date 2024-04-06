import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.clore.app',
  appName: 'clore-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
