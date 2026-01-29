import React from 'react';

// You can replace this URL with your actual image URL
const characterImage = "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; 
// Note: Use a blue cyberpunk character image for best results

const Contact = () => {
  const contactData = [
    {
      type: "Phone",
      value: "+1(800)123-8946",
      id: "phone"
    },
    {
      type: "Email",
      value: "hello@zex.com",
      id: "email"
    },
    {
      type: "Address",
      value: "15th street, Office 478 Berlin, De81564",
      id: "address"
    }
  ];

  // Custom SVG Arrow Component (The squiggly line with a dot)
  const ArrowIcon = () => (
    <svg 
      width="24" 
      height="40" 
      viewBox="0 0 24 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-1/2 -translate-x-1/2 top-[-10px]"
    >
      {/* The Dot at the top */}
      <circle cx="12" cy="0" r="2" fill="#CCFF00" />
      
      {/* The Squiggly Path */}
      <path 
        d="M12 4 C12 4, 18 15, 6 25 C6 25, 18 35, 12 38" 
        stroke="#CCFF00" 
        strokeWidth="2" 
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Arrowhead at the bottom */}
      <path 
        d="M10 36 L12 40 L14 36" 
        fill="#CCFF00" 
      />
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        
        {/* LEFT SIDE: CHARACTER IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
            {/* Placeholder for the Blue Rabbit Image */}
            <img 
              src={characterImage} 
              alt="Cyberpunk Blue Rabbit" 
              className="w-full h-full object-cover"
            />
            {/* Optional: Add a subtle gradient overlay to match the dark theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>

        {/* RIGHT SIDE: CONTACT INFO */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          
          {contactData.map((item, index) => (
            <div key={item.id} className="relative flex flex-col items-center">
              
              {/* The Info Bubble */}
              <div className="bg-[#1a1a1a] border border-[#333] rounded-full px-6 py-3 shadow-lg hover:bg-[#222] transition-all duration-300 cursor-pointer group">
                <p className="text-[#CCFF00] font-mono text-lg font-bold tracking-wide drop-shadow-[0_0_5px_rgba(204,255,0,0.5)]">
                  {item.value}
                </p>
              </div>

              {/* The Arrow (Only if not the last item) */}
              {index < contactData.length - 1 && (
                <div className="relative h-10 w-8 flex justify-center">
                  <ArrowIcon />
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Contact;