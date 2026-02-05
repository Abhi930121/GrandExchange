import { Helmet } from 'react-helmet-async';

export default function GamingPlatform() {
  return (
    <>
      <Helmet>
        <title>Gaming Platform – GrandExchange | Play & Compete Online</title>

        <meta
          name="description"
          content="Join GrandExchange, a modern gaming platform to play online games, compete in real time, and enjoy exciting rewards. Sign up and start playing today."
        />

        <meta
          name="keywords"
          content="gaming platform, online gaming platform, play games online, multiplayer games, competitive gaming, GrandExchange"
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://grandexchange.co.in/gaming-platform" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gaming Platform – GrandExchange" />
        <meta
          property="og:description"
          content="Play, compete, and win on GrandExchange – a powerful online gaming platform with real-time gameplay and rewards."
        />
        <meta property="og:url" content="https://grandexchange.co.in/gaming-platform" />
        <meta property="og:site_name" content="GrandExchange" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gaming Platform – GrandExchange" />
        <meta
          name="twitter:description"
          content="Experience competitive online gaming with GrandExchange. Join now and start playing."
        />
      </Helmet>

      <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <iframe
          src="https://demo.oriolai.com/ge/"
          title="Gaming Platform"
          style={{ width: '100%', height: '100%', border: 'none' }}
          allowFullScreen
        />
      </div>
    </>
  );
}
