import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="max-w-[1100px] mx-auto">
      <header className="py-3 px-3 lg:px-0">
        <Image src="/assets/logo.svg" alt="logo" width={150} height={25} />
      </header>
    </nav>
  );
}
