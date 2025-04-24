'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/posts', label: 'Posts' },
  { href: '/comments', label: 'Comments' },
  { href: '/albums', label: 'Albums' },
  { href: '/todos', label: 'Todos' }, 
  { href: '/users', label: 'Users' },
  { href: '/photos', label: 'Photos' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap gap-4">
      {links.map(link => (
        <Link 
          key={link.href} 
          href={link.href}
          className={`px-4 py-2 rounded-lg ${pathname.startsWith(link.href) ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
