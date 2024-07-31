import Link from "next/link";
import { FC } from "react";


const Footer: FC = () => {
  return (
    <footer className=" bg-primary">
      <div className="container text-white grid grid-cols-3 place-items-center">
        <div className="col-span-3 md:col-span-1 p-4">
          <img src="/img/radius-logo-white.svg" alt="Logo" className="w-28 lg:w-40" />
          <span className="text-sm">
            México © 2024
          </span>
        </div>
        <div className="col-span-3 md:col-span-1 p-4 grid grid-cols-3 gap-2">
          <div className="col-span-3">
            <span className="text-base">
              Certificaciones
            </span>
          </div>
          <img
            src="/img/footer/google-partner.png"
            alt="Logo"
            className="col-span-1"
          />
          <img
            src="/img/footer/repse-white.png"
            alt="Logo"
            className="col-span-1"
          />
          <img
            src="/img/footer/microsoft.png"
            alt="Logo"
            className="col-span-1"
          />
          <img
            src="/img/footer/google-partner-certified.png"
            alt="Logo"
            className="col-span-1"
          />
          <img
            src="/img/footer/inbound-mkt-certification.png"
            alt="Logo"
            className="col-span-1"
          />
          <img
            src="/img/footer/logoIAMP-White.png"
            alt="Logo"
            className="col-span-1"
          />
          
        </div>
        <div className="col-span-3 md:col-span-1 p-4 text-xs">
          <ul className="list-disc grid grid-cols-2 gap-2" >
            <Link
              href="/aboutus"
            >
              <li className="cursor-pointer hover:text-gray-400">
                Nosotros
              </li>
            </Link>
            <Link
              href="/blog"
            >
              <li className="cursor-pointer hover:text-gray-400">
                Blog
              </li>
            </Link>
            <Link
              href="/analytics"
            >
              <li className="cursor-pointer hover:text-gray-400">
                Radius Analytics
              </li>
            </Link>
            <Link
              href="/tech"
            >
              <li className="cursor-pointer hover:text-gray-400">
                Radius Tech
              </li>
            </Link>
            <Link
              href="/contact"
            >
              <li className="cursor-pointer hover:text-gray-400">
                Contacto
              </li>
            </Link>
            <Link
              href="/aviso-de-privacidad"
            >
              <li className="cursor-pointer hover:text-gray-400">
                Aviso de privacidad
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;