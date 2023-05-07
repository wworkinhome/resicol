import Nav from '@/components/Nav';
import Link from 'next/link';


const Header = () => {
  return (
    <header className="flex items-center fixed top-12 w-full z-50">
      <div className="container mx-auto h-full flex items-center justify-between">
        <h1 className="absolute  font-Nunito font-bold text-[30px] text-black left-[96px] right-[1075px]
        top-[38px] bottom-[751.5px] w-[109px] h-[41px] ">resicol</h1>
        <Link href="/">
          <img src="../assets/flag/4x3/co.svg" alt="Logo" width={32} height={32} className='absolute left-[195px] right-[65.62%] top-[38px] bottom-[752.5px] ' />
        </Link>
        <div>
          <Nav></Nav>
        </div>

        <div>
          <button className='content-center absolute items-center p-5 rounded-[12.64px] gap-3 w-[157px] h-[44px] left-[1023px] right-[100.5px] 
          top-[36px] bottom-[751.5px] bg-[#0099E1] font-Poppins font-medium text-[15.8px] text-center text-white'>
            <Link href="/signup"><p className='font-poppins  text-center order-[0] flex-none flex-grow-0 text-base h-6 gap-3 text-white text-[15.8px] content-center left-[1024px] top-[46px] bottom-[761.5px]'>Get Started</p></Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
