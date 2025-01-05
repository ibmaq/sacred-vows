export const Navbar = () => {
  return (
    <>
      <div className="fixed lg:top-6 z-50 text-white w-full ">
        <ul className="flex gap-2 items-center px-2 py-1 bg-gray-400/30 backdrop-blur-md rounded-full mx-auto w-fit transition-all ease-in-out duration-300 ">
          <li className="bg-white/80 rounded-full">
            <p className="font-semibold text-base px-4 py-2 rounded-full hover:bg-zinc-800 gradient-border-text cursor-pointer">About Us</p>
          </li>
          <li className="px-4 py-2 rounded-full hover:bg-zinc-800 gradient-border-text cursor-pointer">
            Packages
          </li>
          <li className="px-4 py-2 rounded-full hover:bg-zinc-800 gradient-border-text cursor-pointer">
            Testimonials
          </li>
          <li className="px-4 py-2 rounded-full hover:bg-zinc-800 gradient-border-text cursor-pointer">
            Get In Touch
          </li>
        </ul>
      </div>
    </>
  );
};
