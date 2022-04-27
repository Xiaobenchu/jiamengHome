import { AppProps } from 'next/app';
// import 'antd-mobile/dist/antd-mobile.css';
import '@/styles/global.css';
import '@/styles/iconfont.css';
import { resizeRem } from '@/utils';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // const { platform } = window.navigator;
    // if (platform !== 'MacIntel' && platform !== 'Win32') {
    //   window.location.href = 'http://mobile.jm360.net/';
    // }
    resizeRem();
    window.addEventListener('resize', () => {
      resizeRem();
    });
  }, []);
  return <Component {...pageProps} />;
}
