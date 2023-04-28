import Nav from '@/components/Nav';
import Link from 'next/link';
import Logo from '../public/assets/flag/4x3/mx.svg';

const Header = () => {
  return (
    <header className="flex items-center fixed top-0 w-full ">
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link href="/">
          <img src={Logo} alt="Logo" />
        </Link>

        <div>
          <Nav></Nav>
        </div>

        <div>
          <button>
            <Link href="/signup">Get Started</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
