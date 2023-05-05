import Nav from '@/components/Nav';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/flag/4x3/mx.svg';

const Header = () => {
  return (
    <header className="flex items-center fixed top-0 w-full ">
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="brand logo" width={100} height={50}></Image>
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
