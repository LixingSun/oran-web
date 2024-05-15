import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 w-full flex items-center px-32 py-10 bg-primary">
      <Image
        src="/avatar@2x.png"
        alt="Logo"
        width={48}
        height={48}
        priority
      />

      <div className="flex flex-1 text-lg ml-12">
        <a className="text-white" href="/">About</a>
      </div>

      <div className="toolbar flex items-center">
        <a className="mx-4" href="mailto:slxtrjh325@gmail.com">
          <Image
            src="/icons/email.svg"
            alt="email"
            width={28}
            height={28}
            priority
          />
        </a>
        <a 
          className="mx-4"
          href="https://github.com/LixingSun/" 
          target="_blank">
          <Image
            src="/icons/github.svg"
            alt="github"
            width={28}
            height={28}
            priority
          />
        </a>
        <div className="mx-4 text-white">中文</div>
      </div>   
    </header>
  );
}