import Nav from '@/components/Nav';
import Link from 'next/link';


const Header = () => {
  return (
    <header className="flex items-center fixed top-12 w-full z-50">
      <div className="container mx-auto h-full flex items-center justify-between">
        <h1 className="flex items-center absolute top-4 w-0 h-2 font-Nunito text-3xl text-black ">Resicol</h1>
        <Link href="/">
          <img src="../assets/flag/4x3/co.svg" alt="Logo" width={32} height={32} className='flex absolute left-[135px] right-[980.97px] top-2 bottom-4' />
        </Link>

        <div>
          <Nav></Nav>
        </div>

        <div>
          <button className='flex flex-row justify-center items-center rounded-xl gap-3 relative w-36 h-11 left-auto top-0 bg-[#0099E1] rounded-bl-xl'>
            <Link href="/signup"><p className='font-poppins normal-case text-center text-base h-6 grow-0 gap-3 top-9 text-slate-100 '>Get Started</p></Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
