import '../styles/globals.css'
import TrackingScripts from '../components/Tracking'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* 🔒 Tracking Scripts — Bu component'e dokunmayın (bkz. components/Tracking.js) */}
      <TrackingScripts />
      <Component {...pageProps} />
    </>
  )
}
