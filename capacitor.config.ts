import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.onthefritzz.allhealth',
  appName: 'All Health',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
