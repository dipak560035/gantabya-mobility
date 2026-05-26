// app/technology/page.tsx

"use client";

import React from "react";

interface TechCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const TechCardsData: TechCard[] = [
  {
    id: 1,
    icon: "fa-battery-full",
    title: "Advanced Battery System",
    description:
      "IP67-rated lithium-ion cells with intelligent BMS for optimal range and longevity. Fast charging from 0-80% in under 2 hours.",
  },
  {
    id: 2,
    icon: "fa-microchip",
    title: "BLDC Motor Technology",
    description:
      "High-efficiency brushless DC motors deliver instant torque zero maintenance. Regenerative braking recovers energy on the go.",
  },
  {
    id: 3,
    icon: "fa-mobile-alt",
    title: "Smart Connectivity",
    description:
      "Gantabya App connects you to your bike — GPS tracking, ride analytics, battery health, and remote diagnostics at your fingertips.",
  },
  {
    id: 4,
    icon: "fa-shield-alt",
    title: "Safety Engineering",
    description:
      "CBS braking, anti-theft immobilizer, and crash detection. Your safety is engineered into every component.",
  },
  {
    id: 5,
    icon: "fa-mountain",
    title: "Made for Nepal",
    description:
      "Tested on Kathmandu streets, hill roads, and highway conditions. Suspension and tires tuned for comfort and performance.",
  },
  {
    id: 6,
    icon: "fa-charging-station",
    title: "Fast Charging Network",
    description:
      "Growing network of charging stations across major cities. Compatible with standard connectors.",
  },
];

interface LegendItem {
  icon: string;
  label: string;
}

const legendItems: LegendItem[] = [
  { icon: "fa-battery-full", label: "Battery icon" },
  { icon: "fa-microchip", label: "Motor icon" },
  { icon: "fa-shield-alt", label: "Safety emblem" },
  { icon: "fa-industry", label: "Manufacturing / Nepal pride" },
];

export default function TechnologyPage() {
  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      <div className="ev-showcase">
        {/* Header Section */}
        <div className="hero-tech">
          <h1>⚡ Our Technology</h1>

          <div className="tagline">
            Cutting-edge EV technology designed and built in Nepal.
          </div>
        </div>

        {/* Technology Cards Grid */}
        <div className="tech-grid">
          {TechCardsData.map((card) => (
            <div key={card.id} className="tech-card">
              <div className="card-icon">
                <i className={`fas ${card.icon}`}></i>
              </div>

              <h3>{card.title}</h3>

              <p>{card.description}</p>
            </div>
          ))}
        </div>

        {/* Proudly Made in Nepal Section */}
        <div className="made-nepal-section">
          <div className="made-text">
            <h2>
              <i className="fas fa-flag-checkered"></i>
              Proudly Made in Nepal
            </h2>

            <p>
              Every Gantabya motorcycle is designed, engineered, and assembled
              in Kathmandu. We believe Nepal's EV future should be built by
              Nepali hands. From our R&D lab to the production line, we're
              creating world-class electric vehicles that are tailor-made for
              Nepali roads, climate, and riding culture.
            </p>

            <p>
              By manufacturing locally, we support the Nepal economy, reduce
              import dependency, and ensure every bike is optimized for the
              unique conditions our riders face every day.
            </p>

            <div className="flag-icon">
              <i className="fas fa-map-marker-alt"></i>
              Kathmandu Valley — Engineered with pride
            </div>
          </div>

          <div className="nepal-badge">
            <i className="fas fa-cogs"></i>

            <span>🇳🇵 MADE IN NEPAL</span>

            <small>Assembly & R&D • Since 2023</small>
          </div>
        </div>

        {/* Icon Legend */}
        <div className="icon-legend">
          {legendItems.map((item, idx) => (
            <div key={idx} className="legend-item">
              <i className={`fas ${item.icon}`}></i>

              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .ev-showcase {
          min-height: 100vh;
          background: #050505;
          color: white;
          padding: 80px 40px;
          font-family: Arial, sans-serif;
        }

        .hero-tech {
          text-align: center;
          margin-bottom: 70px;
        }

        .hero-tech h1 {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 20px;
          color: #00d65c;
        }

        .tagline {
          font-size: 1.2rem;
          color: #bdbdbd;
          max-width: 700px;
          margin: auto;
          line-height: 1.7;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          margin-bottom: 100px;
        }

        .tech-card {
          background: #111111;
          border: 1px solid #222;
          border-radius: 24px;
          padding: 35px;
          transition: 0.3s ease;
        }

        .tech-card:hover {
          transform: translateY(-8px);
          border-color: #00d65c;
          box-shadow: 0 0 30px rgba(0, 214, 92, 0.15);
        }

        .card-icon {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          background: rgba(0, 214, 92, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
        }

        .card-icon i {
          font-size: 2rem;
          color: #00d65c;
        }

        .tech-card h3 {
          font-size: 1.5rem;
          margin-bottom: 18px;
          font-weight: 700;
        }

        .tech-card p {
          color: #b5b5b5;
          line-height: 1.8;
          font-size: 1rem;
        }

        .made-nepal-section {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 50px;
          align-items: center;
          background: #0d0d0d;
          border: 1px solid #222;
          border-radius: 32px;
          padding: 60px;
          margin-bottom: 90px;
        }

        .made-text h2 {
          font-size: 2.7rem;
          margin-bottom: 25px;
          color: #00d65c;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .made-text p {
          color: #c5c5c5;
          line-height: 1.9;
          margin-bottom: 20px;
          font-size: 1.05rem;
        }

        .flag-icon {
          margin-top: 25px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #00d65c;
          color: black;
          padding: 14px 22px;
          border-radius: 999px;
          font-weight: 700;
        }

        .nepal-badge {
          background: linear-gradient(145deg, #111, #1a1a1a);
          border: 1px solid #2a2a2a;
          border-radius: 30px;
          padding: 50px 30px;
          text-align: center;
        }

        .nepal-badge i {
          font-size: 5rem;
          color: #00d65c;
          margin-bottom: 25px;
        }

        .nepal-badge span {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .nepal-badge small {
          color: #a5a5a5;
          font-size: 1rem;
        }

        .icon-legend {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 25px;
        }

        .legend-item {
          background: #111111;
          border: 1px solid #222;
          border-radius: 20px;
          padding: 25px;
          text-align: center;
          transition: 0.3s;
        }

        .legend-item:hover {
          border-color: #00d65c;
        }

        .legend-item i {
          font-size: 2rem;
          color: #00d65c;
          margin-bottom: 15px;
        }

        .legend-item span {
          display: block;
          color: #d0d0d0;
          font-size: 0.95rem;
        }

        @media (max-width: 900px) {
          .made-nepal-section {
            grid-template-columns: 1fr;
          }

          .hero-tech h1 {
            font-size: 3rem;
          }

          .made-text h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 600px) {
          .ev-showcase {
            padding: 60px 20px;
          }

          .hero-tech h1 {
            font-size: 2.4rem;
          }

          .tech-card {
            padding: 28px;
          }

          .made-nepal-section {
            padding: 35px 25px;
          }
        }
      `}</style>
    </>
  );
}