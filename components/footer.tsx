import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#000E54] py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logoHakiva.png"
                  alt="Logo Hakiva"
                  width={24.24530029296875}
                  height={19}
                  className="mx-auto"
                />
                <span className="text-xl font-bold ml-[10px]">Hakiva</span>
              </Link>
            </div>
            <p className="mb-4 text-sm text-gray-300 md:text-lg text-xs">
              Hakiva adalah penyedia layanan terpercaya yang membantu pelaku
              usaha dalam mengurus berbagai legalitas bisnis, mulai dari
              pendaftaran HAKI , PIRT , OSS, hingga sertifikasi label Halal.
              Dengan layanan yang profesional, cepat, dan transparan, Hakiva
              hadir untuk memudahkan proses perizinan agar bisnis Anda dapat
              berkembang dengan legal dan terpercaya.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-semibold md:text-3xl text-base">
              Useful Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-300 md:text-lg text-xs">
              <li>
                <Link href="/" className="hover:text-[#0EBCF7]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pirt" className="hover:text-[#0EBCF7]">
                  PIRT
                </Link>
              </li>
              <li>
                <Link href="/oss" className="hover:text-[#0EBCF7]">
                  OSS
                </Link>
              </li>
              <li>
                <Link href="/halal" className="hover:text-[#0EBCF7]">
                  Halal
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold md:text-3xl text-base">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-300 md:text-lg text-xs">
              <li>
                <Link href="#" className="hover:text-[#0EBCF7]">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#0EBCF7]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#0EBCF7]">
                  Cookie Preferences
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 md:text-3xl text-base font-semibold">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#0EBCF7]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-[#0EBCF7]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-[#0EBCF7]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-[#0EBCF7]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-300">
          <p>Copyright © 2025 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
