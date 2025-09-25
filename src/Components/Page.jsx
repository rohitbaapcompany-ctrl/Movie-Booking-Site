
export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Section 1 : Blurred Background */}
      <div
        className="relative h-150 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${'https://m.media-amazon.com/images/I/91armhHyTML.jpg'})` }}
      >
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-md bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
        </div>
      </div>

      {/* Section 2 : Clear Background */}
      <div
        className="relative h-screen bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${'https://m.media-amazon.com/images/I/91armhHyTML.jpg'})` }}
      >
        {/* No blur, just semi-transparent dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
        </div>
      </div>

      {/* Section 3 : Blurred Background Again */}
      <div
        className="relative h-150 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${'https://m.media-amazon.com/images/I/91armhHyTML.jpg'})` }}
      >
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-md bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
        </div>
      </div>
    </div>
  );
}
