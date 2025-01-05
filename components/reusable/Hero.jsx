export const Hero = () => {
  return (
    <>
      <div className="w-full h-screen bg-cover bg-center">
        <div className="inset-0 absolute bg-black/80"></div>
        {/* Video Element */}
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 m-auto w-1/2 h-80 bg-white rounded-2xl"></div>
      </div>
    </>
  );
};
