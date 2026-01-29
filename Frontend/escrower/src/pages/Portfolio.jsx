import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Portfolio() {
  const items = [
    "/images/portfolio-1.jpg",
    "/images/portfolio-2.jpg",
    "/images/portfolio-3.jpg",
    "/images/portfolio-4.jpg",
    "/images/portfolio-5.jpg",
  ];

  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-head">
          <div>
            <span className="portfolio-tag">OUR PORTFOLIO</span>
            <h2>AI images</h2>
          </div>

          <div className="portfolio-right">
            <p>
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit aspernatur aut odit aut fugit.
            </p>
            <button className="portfolio-btn">View all</button>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
        >
          {items.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="portfolio-card">
                <img src={img} alt="" />
                <div className="portfolio-content">
                  <h4>Stars and Planets</h4>
                  <span>ILLUSTRATION</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
