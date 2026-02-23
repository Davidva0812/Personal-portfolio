import React from "react";

export default function Eldoria() {
  return (
    <div className="container my-5">
      <div className="card main-project-highlight bg-dark text-white border-info shadow-lg">
        <div className="row g-0">
          <div className="col-md-7 p-4">
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="badge bg-info text-dark">Main Project</span>
              <span className="badge border border-info text-info">
                Python + Pygame
              </span>
            </div>
            <h2 className="display-6" style={{ color: "#6ACDE5" }}>
              Tales of Eldoria
            </h2>
            <p className="mt-3 card-text">
              An immersive Fantasy RPG where I implemented complex game
              mechanics from scratch. The project focuses on{" "}
              <strong>Object-Oriented Programming</strong> and{" "}
              <strong>AI simulations</strong>.
            </p>
            <ul className="list-unstyled">
              <li>
                ✨ <strong>Autonomous NPCs and places:</strong> Integrated
                AI-driven movement patterns.
              </li>
              <li>
                ⚔️ <strong>Combat Engine:</strong> Logic-heavy turn-based
                system.
              </li>
              <li>
                📜 <strong>Unique classes </strong> with their own mana/stamina
                & abilities.
              </li>
              <li>
                🐕 <strong>Companions</strong> for the every class system.
              </li>
              <li>
                🛡️ <strong>Inventory, tactical item usagen:</strong> weapons,
                armor, relics, potions.
              </li>
              <li>
                🌏 <strong>Unique fantasy map:</strong> different places with
                enemies to explore.
              </li>
              <li>
                🎵 <strong>Ambient fantasy soundtrack</strong> with mute/unmute,
                volume-control and UI.
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://davidva0812.github.io/Fantasy-website/"
                className="btn custom-btn-primary me-2"
                target="_blank"
                rel="noreferrer"
              >
                Explore Webpage
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
