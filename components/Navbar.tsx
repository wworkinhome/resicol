export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <p className="absolute w-[109] h-[41] le-[96] t-[38] from-[#000000] text-3xl">
          resimex
        </p>
        <img
          src="/../public/assets/flag/4x3/mx.svg"
          alt="/"
          width="125"
          height="50"
        />
      </div>
      <div>
        <button>Get Started</button>
      </div>
    </div>
  );
}
