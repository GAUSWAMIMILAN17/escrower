import { useState } from "react";
import "./Faq.css";

export default function Faq() {
  const [open, setOpen] = useState(null);

  const data = [
    {
      q: "What it takes to create an image?",
      a: "You only need a text prompt. AI generates the image instantly."
    },
    {
      q: "What's the standard image size?",
      a: "Default size is 1024×1024 pixels."
    },
    {
      q: "Payment methods",
      a: "UPI, cards, net banking and international payments supported."
    },
    {
      q: "Help and support",
      a: "24/7 support via email and chat."
    }
  ];

  return (
    <div className="faq-root">
      <section className="faq-section">
        <div className="faq-container">
          <span className="faq-tag">FAQ</span>
          <h2 className="faq-title">AI image generator <br></br><h2 className="faq-title2">FAQs</h2></h2>
          

          {data.map((item, i) => (
            <div className="faq-item" key={i}>
              <div
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <h4>{item.q}</h4>
                <span>{open === i ? "−" : "+"}</span>
              </div>

              {open === i && (
                <div className="faq-answer">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
