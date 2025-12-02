export default function WhatsAppFloat() {
  const WHATSAPP_NUMBER = "917587914617";

  return (
    <a 
      className="whats-float" 
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <img src="/images/whatsapp.png" alt="WhatsApp" />

      <style jsx>{`
        .whats-float {
          position: fixed;
          right: 18px;
          bottom: 18px;
          background: linear-gradient(180deg, #14a76c, #0e8b59);
          width: 64px;
          height: 64px;
          border-radius: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 80;
          box-shadow: 0 8px 26px rgba(0, 0, 0, 0.4);
        }
        .whats-float img {
          width: 38px;
          height: 38px;
        }
      `}</style>
    </a>
  );
}