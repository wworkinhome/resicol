import Link from 'next/link';
import { navigation } from '../components/data';

export default function Nav() {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize">
        <li>
          <Link href="/" legacyBehavior>
            <a className='absolute font-Nunito font-medium text-[16px] w-[44px] h-[22px] left-[534px] right-[702px] top-[47px] bottom-[762.5px]'>Home</a>
          </Link>
        </li>
        <li>
          <Link href="#testimonials" legacyBehavior>
            <a className='absolute font-Nunito font-medium text-[16px] w-[87px] h-[22px] left-[612px] right-[581px] top-[47px] bottom-[762.5px]'>Testimonials</a>
          </Link>
        </li>
        <li>
          <Link href="#contacts" legacyBehavior>
            <a className='absolute font-Nunito font-medium text-[16px] w-[64px] h-[22px] left-[740px] right-[476px] top-[47px] bottom-[762.5px] '>Contacts</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
