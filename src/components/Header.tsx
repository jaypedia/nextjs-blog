import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between p-4 item-center">
      <Link href="/">
        <h1 className="text-3xl font-bold">My Blog</h1>
      </Link>
      <nav className="flex gap-4">
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
