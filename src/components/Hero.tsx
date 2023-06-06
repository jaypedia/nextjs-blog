import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {
  return (
    <section className="flex flex-col items-center justify-center gap-2">
      <Image
        src="/profile.jpeg"
        width={300}
        height={300}
        alt="profile image"
        className="rounded-full"
        priority
      />
      <h2 className="text-2xl font-bold">{"Hi, I'm Jayun Lee."}</h2>
      <h3 className="text-xl font-semibold">Web Frontend Engineer</h3>
      <p>프론트엔드 개발자의 개발 기록</p>
      <Link href="/contact" className="p-1 px-3 font-bold bg-blue-200 rounded-xl">
        Contact Me
      </Link>
    </section>
  );
}
