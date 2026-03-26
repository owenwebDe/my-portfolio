import React, { useState, useEffect } from "react";

const messages = [
  "Need a website? Let's build one!",
  "Want a mobile app? I got you!",
  "Need a blockchain solution? Let's talk!",
  "Got an idea? Let's launch it!",
  "Need an e-commerce store? Click me!",
  "Need a Telegram bot? I build those!",
  "Need a backend API? Say less!",
  "Looking for a software developer? I'm here!",
  "Have a startup idea? Let's make it real!",
  "Fast. Clean. Professional. Let's work!",
];

const TYPING_SPEED = 45;
const DELETING_SPEED = 25;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

const WhatsAppFloat = () => {
  const [displayed, setDisplayed] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = messages[msgIndex];

    if (!isDeleting && displayed.length < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, TYPING_SPEED);
      return () => clearTimeout(t);
    }

    if (!isDeleting && displayed.length === current.length) {
      const t = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      return () => clearTimeout(t);
    }

    if (isDeleting && displayed.length > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, DELETING_SPEED);
      return () => clearTimeout(t);
    }

    if (isDeleting && displayed.length === 0) {
      const t = setTimeout(() => {
        setIsDeleting(false);
        setMsgIndex(prev => (prev + 1) % messages.length);
      }, PAUSE_AFTER_DELETE);
      return () => clearTimeout(t);
    }
  }, [displayed, isDeleting, msgIndex]);

  return (
    <>
      <style>{`
        @keyframes whatsappPulse {
          0%   { box-shadow: 0 4px 24px rgba(37,211,102,0.5); }
          50%  { box-shadow: 0 4px 40px rgba(37,211,102,0.85); }
          100% { box-shadow: 0 4px 24px rgba(37,211,102,0.5); }
        }
        @keyframes waBounce {
          0%   { transform: scale(1); }
          30%  { transform: scale(1.15); }
          60%  { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        .wa-btn {
          animation: whatsappPulse 2.5s ease-in-out infinite;
          transition: box-shadow 0.25s ease;
        }
        .wa-btn:hover {
          animation: waBounce 0.5s ease forwards;
        }
        .wa-cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background: #0F172A;
          margin-left: 2px;
          vertical-align: middle;
          animation: blink 0.7s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          bottom: "32px",
          right: "32px",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "10px",
        }}
      >
        {/* Bubble */}
        <div
          onClick={() => window.open(
            "https://wa.me/2348119503680?text=Hi%20Michael%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.",
            "_blank"
          )}
          style={{
            background: "#ffffff",
            color: "#0F172A",
            padding: "12px 18px",
            borderRadius: "18px 18px 4px 18px",
            fontSize: "0.83rem",
            fontWeight: 600,
            minWidth: "180px",
            maxWidth: "240px",
            minHeight: "42px",
            cursor: "pointer",
            userSelect: "none",
            // 3D effect
            boxShadow:
              "0 2px 0 #c8c8c8, 0 4px 0 #b0b0b0, 0 8px 24px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.15)",
            border: "1px solid rgba(255,255,255,0.9)",
            letterSpacing: "0.01em",
            lineHeight: "1.5",
          }}
        >
          {displayed}
          <span className="wa-cursor" />
        </div>

        {/* WhatsApp button */}
        <a
          href="https://wa.me/2348119503680?text=Hi%20Michael%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="wa-btn"
          title="Chat with Michael on WhatsApp"
          style={{
            width: "58px",
            height: "58px",
            borderRadius: "50%",
            background: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          <i className="fa fa-whatsapp" style={{ color: "#fff", fontSize: "28px" }} />
        </a>
      </div>
    </>
  );
};

export default WhatsAppFloat;
