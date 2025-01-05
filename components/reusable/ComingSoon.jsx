export const ComingSoon = () => {
  return (
    <>
      <div className="w-full h-screen bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Video Element */}
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/videos/hero-bg-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-3/4 max-w-lg h-auto backdrop-blur-2xl rounded-2xl p-8 flex flex-col justify-center items-center gap-4 text-center shadow-lg">
            <h1 className="font-ds text-4xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-400">
              Sacred Vows
            </h1>
            <p className="font-lato text-base md:text-lg lg:text-xl text-neutral-100">
              Our journey begins soon! <br />
              Stay tuned as we prepare to bring your vows to life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
