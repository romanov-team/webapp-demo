import type {AppProps} from "next/app";
import '@/shared/styles/app.scss'
import {useEffect} from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && Telegram.WebApp) {
      if (Telegram.WebApp.platform === "ios" || Telegram.WebApp.platform === "android") {
        try {
          ;(Telegram.WebApp as any).requestFullscreen()
        } catch (ignore) {}
      }
      Telegram.WebApp.disableVerticalSwipes()
      Telegram.WebApp.setBackgroundColor('#FFFFFF')
    }
  }, [])

  return <Component {...pageProps} />;
}
