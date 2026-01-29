import "./ImageSlider.css";

const items = [
  { img: "/images/item-0.png", text: "AI Generate" },
  { img: "/images/item-1.png", text: "Smart Creation" },
  { img: "/images/item-2.png", text: "Auto Design" },
  { img: "/images/item-3.png", text: "Creative Tools" },
  { img: "/images/item-4.png", text: "Future Graphics" },
  { img: "/images/item-5.png", text: "Neural Art" },
  { img: "/images/item-6.png", text: "AI Studio" },
  { img: "/images/item-7.png", text: "Image Builder" },
  { img: "/images/item-8.png", text: "Smart Vision" },
];

const ImageSlider = () => {
  return (
    <div className="slider-wrapper">
      <div className="slider-track">
        {[...items, ...items, ...items].map((item, i) => (
          <div className="slider-card" key={i}>
            <img src={item.img} alt="" />
            <p className="slider-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
