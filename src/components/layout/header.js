import Link from 'next/link';
import { info } from '../../../info';
import Image from 'next/image';
import logo from '../../../public/logo.png';

export default function Header() {
  return (

    <header
      className={`sticky top-0 bg-brand-1 backdrop-blur-lg border-b-4 border-brand-2 w-screen shadow-sm h-[8rem] flex justify-center z-[99] hover:top-0`}
    >
      <div className="flex items-center z-[1]">
        <div className="flex justify-center items-center">
          <Link href="/" passhref>
            <Image src={logo} alt={info.companyName} width={240} height={240} objectFit="contain"/>
          </Link>
        </div>
      </div>
    </header>

  );
}
