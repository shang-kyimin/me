import Image from "next/image";
import Link from "next/link";

export default function HeaderSection() {
  return (
    <header className="max-w-6xl mx-auto my-8 px-6 flex justify-between items-center">
      <Link href="/" className="hover:scale-105 transition">
        <Image src="./assets/logo.asset.svg" width={30} height={30} alt="logo asset" />
      </Link>
    </header>
  );
}


