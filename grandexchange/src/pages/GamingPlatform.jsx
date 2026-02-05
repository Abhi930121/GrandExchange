export default function GamingPlatform() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    }}>
      <iframe
        src="https://demo.oriolai.com/ge/"
        title="Gaming Platform"
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        allowFullScreen
      />
    </div>
  );
}
