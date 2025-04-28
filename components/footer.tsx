import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#000E54] py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
            <p className="mb-4 md:text-sm text-gray-300 text-xs">
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
            <ul className="space-y-2 md:text-sm text-gray-300 text-xs">
              <li>
                <Link href="/" className="hover:text-[#0EBCF7]">
                  HAKI
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
          {/* <div>
            <h3 className="mb-4 font-semibold md:text-3xl text-base">
              Company
            </h3>
            <ul className="space-y-2 md:text-sm text-gray-300 text-xs">
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
          </div> */}
          <div>
            <h3 className="mb-4 md:text-3xl text-base font-semibold">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/hakiva_official" target="_blank" className="hover:text-[#0EBCF7]">
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
              <Link href="https://www.tiktok.com/@hakivaofficial" target="_blank" className="hover:text-[#0EBCF7]">
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
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </Link>
              <Link href="https://youtube.com/@hakiva" target="_blank" className="hover:text-[#0EBCF7]">
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
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
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
