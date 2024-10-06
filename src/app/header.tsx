import Link from "next/link";

export default function Header() {
  return (
    <section className="">
      <Link href="/">Home</Link>
      <Link href="/blog">blog</Link>
      <Link href="/about">About Me</Link>
    </section>
  );
}
