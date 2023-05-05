import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize">
        <li>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/testimonials" legacyBehavior>
            <a>Testimonials</a>
          </Link>
        </li>
        <li>
          <Link href="/contacts" legacyBehavior>
            <a>Contacts</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
