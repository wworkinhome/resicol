import Link from 'next/link';
import { navigation } from '../components/data';

export default function Nav() {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize">
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.href} legacyBehavior>
                <a>{item.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
