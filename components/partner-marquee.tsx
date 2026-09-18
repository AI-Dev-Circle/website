"use client";

import Image from "next/image";
import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { partners } from "@/lib/data";

export default function PartnerMarquee() {
  const [paused, setPaused] = useState(false);
  return (
    <div className="partner-marquee">
      <div
        className="marquee-window"
        data-paused={paused}
        role="region"
        aria-label="Community partners"
      >
        <div className="marquee-track logo-track">
          {[0, 1].map((copy) => (
            <div
              className="marquee-group logo-group"
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {partners.map((partner) => (
                <a
                  className="marquee-logo"
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={copy === 1 ? -1 : undefined}
                  aria-label={partner.name}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={120}
                  />
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="marquee-controls partner-marquee-controls">
        <span>Great things happen when we come together.</span>
        <button
          className="motion-toggle"
          onClick={() => setPaused(!paused)}
          aria-label={
            paused ? "Play partner slideshow" : "Pause partner slideshow"
          }
        >
          {paused ? <Play size={13} /> : <Pause size={13} />}
          {paused ? "Play" : "Pause"}
        </button>
      </div>
    </div>
  );
}
