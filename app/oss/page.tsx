import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/footer";
import { TestimonialSection } from "@/components/testimonial-section";
import { FeatureCard } from "@/components/feature-card";
import { HeroSection } from "@/components/hero-section";
import {
  CheckCircle,
  Shield,
  Zap,
  MessageCircle,
  Clock,
  FileCheck,
  CreditCard,
  ShoppingCart,
  FileText,
} from "lucide-react";
import { MainNav } from "@/components/main-nav";

export default function OSSPage() {
  const testimonials = [
    {
      name: "Yoga",
      role: "UMKM Makanan Ringan",
      content:
        "“Pelayanannya cepat, murah, dan nggak ribet. Cocok buat yang baru mulai usaha.”",
      imageSrc: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Siska",
      role: "Pemilik Usaha Skincare",
      content:
        "“Awalnya bingung banget isi OSS, tapi dibantuin semuanya dari awal sampai dapat NIB. Sekarang usaha udah punya legalitas!”",
      imageSrc: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Joko",
      role: "Usaha Fotocopy & ATK",
      content:
        '"Saya pikir bikin NIB itu ribet dan harus ke kantor pemerintahan. Ternyata bisa online dan diurusin semuanya. Gak ribet sama sekali!"',
      imageSrc: "/placeholder.svg?height=48&width=48",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <MainNav />

      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Mau Mulai Usaha Tapi{" "}
            <span className="text-[#0EBCF7]">Belum Punya NIB</span> ?
          </>
        }
        description="Sekarang bikin usaha nggak cukup cuma modal niat dan produk aja, lho. Usaha kamu juga butuh yang namanya legalitas."
        imageSrc="/oss.png"
        additionalText="Nah, salah satu legalitas paling dasar dan penting banget buat semua pelaku usaha adalah:"
        imageAlt=""
      />

      {/* NIB Explanation Section */}
      <section className="md:py-16 py-10">
        <div className="container mx-auto px-4">
          <h2 className="md:mb-12 mb-6 text-center md:text-5xl text-2xl font-bold">
            NIB <span className="text-[#0EBCF7]">Nomor Induk Berusaha</span> ?
          </h2>
          <p className="mb-8 text-center text-gray-600 md:text-lg text-sm">
            NIB itu ibarat KTP-nya bisnis kamu. Diterbitkan lewat sistem OSS
            (Online Single Submission), dan jadi syarat utama untuk ngurus
            izin-izin usaha lainnya seperti:
          </p>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-5 text-center">
            <FeatureCard
              title="Izin Edar Makanan (PIRT, BPOM)"
              srcImage="/bpom.png"
              row=""
            />
            <FeatureCard
              title="Sertifikasi Halal"
              srcImage="logoHalal.png"
              row=""
            />
            <FeatureCard
              title="Buka Rekening Usaha"
              srcImage="dock.png"
              row=""
            />
            <FeatureCard
              title="Daftar ke Marketplace & Ikut Pelatihan UMKM"
              srcImage="shopping-cart.png"
              row=""
            />
            <FeatureCard
              title="Kerja Sama dengan Instansi Pemerintah"
              srcImage="building-2.png"
              row=""
            />
          </div>
        </div>
      </section>

      {/* Difficulties Section */}
      <section className="md:py-16 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:ps-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="md:mb-6 mb-3 md:text-5xl/[1.2] text-xl font-bold text-center md:text-left">
                Tapi Bikin NIB Sendiri{" "}
                <span className="text-[#0EBCF7]">Kadang Bikin Pusing...</span>
              </h2>
              <h3 className="md:mb-[20px] mb-[10px] md:text-3xl text-base font-semibold text-center md:text-left">
                Formulirnya banyak, istilahnya ribet, dan kalau salah isi bisa
                gagal terus. Apalagi kalau kamu baru pertama kali buka usaha
                bisa bikin nyerah di tengah jalan.
              </h3>
            </div>
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/DifficultiesOss.png"
                  alt=""
                  width={500}
                  height={625}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="md:py-16 py-8">
        <div className="container mx-auto px-4">
          <h2 className="md:mb-12 mb-6 text-center md:text-5xl/[1.2] text-2xl font-bold">
            Tenang, Kamu Bisa Urus NIB & Izin Usaha{" "}
            <span className="text-[#0EBCF7]">Tanpa Ribet </span> Sama Sekali !
          </h2>
          <p className="md:text-lg text-sm text-center mb-8 text-[#5B5B5B]">
            Kami bantu kamu terbitkan NIB dan izin usaha secara cepat dan
            praktis, tanpa perlu repot utak-atik OSS sendiri.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-center justify-items-center md:mx-[100px]">
            <FeatureCard
              srcImage="/ossService1.png"
              title="Cocok untuk Semua Jenis Usaha"
              bgColor="bg-[#EDEDED]"
              row="grid grid-cols-1 md:grid md:grid-cols-[100px_1fr] grid-cols-[90px_1fr] items-center w-full h-full"
            />
            <FeatureCard
              srcImage="/ossService2.png"
              title="Proses Cepat dan Aman"
              bgColor="bg-[#EDEDED]"
              row="grid grid-cols-1 md:grid md:grid-cols-[100px_1fr] grid-cols-[90px_1fr] items-center w-full h-full"
            />
            <FeatureCard
              srcImage="/ossService3.png"
              title="Semua Data Kami Bantu Susun"
              bgColor="bg-[#EDEDED]"
              row="grid grid-cols-1 md:grid md:grid-cols-[100px_1fr] grid-cols-[90px_1fr] items-center w-full h-full"
            />
            <FeatureCard
              srcImage="/ossService4.png"
              title="Langsung dapat Dokumen Legalitas"
              bgColor="bg-[#EDEDED]"
              row="grid grid-cols-1 md:grid md:grid-cols-[100px_1fr] grid-cols-[90px_1fr] items-center w-full h-full"
            />
            <FeatureCard
              srcImage="/why3.png"
              title="Bisa Konsultasi Dulu Sampai Paham"
              bgColor="bg-[#EDEDED]"
              row="grid grid-cols-1 md:grid md:grid-cols-[100px_1fr] grid-cols-[90px_1fr] items-center w-full h-full"
            />
            <FeatureCard
              srcImage="/pirtservice3.png"
              title="Biaya Terjangkau, Gak Bikin Kaget"
              bgColor="bg-[#EDEDED]"
              row="grid grid-cols-1 md:grid md:grid-cols-[100px_1fr] grid-cols-[90px_1fr] items-center w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="text-white md:py-16 py-10">
        <div className="mx-auto md:px-[10rem] px-4 bg-[#000E54] pt-[5rem] pb-[5rem] md:pb-[0rem]">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Apa Itu NIB dan Kenapa{" "}
            <span className="text-[#0EBCF7]">Wajib Dimiliki</span> ?
          </h2>
          <p className="mb-8 text-center text-white">
            NIB (Nomor Induk Berusaha) itu adalah NIB yang wajib dimiliki. Tanpa
            NIB, usaha Anda dianggap ilegal dan berisiko ditutup di kemudian
            hari.
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 items-start">
            {/* Card 1 */}
            <Card className="p-5 flex flex-col justify-center self-start md:min-h-[350px]">
              <h3 className="mb-4 text-center text-xl font-bold text-red-500">
                Tanpa NIB
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start grid grid-cols-[30px_1fr]">
                  <svg
                    className="mr-2 h-5 w-5 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>
                    Gak bisa daftar PIRT, BPOM, sertifikasi halal, dll.
                  </span>
                </li>
                <li className="flex items-start grid grid-cols-[30px_1fr]">
                  <svg
                    className="mr-2 h-5 w-5 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>Susah ikut program bantuan atau pelatihan UMKM.</span>
                </li>
                <li className="flex items-start grid grid-cols-[30px_1fr]">
                  <svg
                    className="mr-2 h-5 w-5 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>Gak bisa kerja sama dengan instansi resmi.</span>
                </li>
                <li className="flex items-start grid grid-cols-[30px_1fr]">
                  <svg
                    className="mr-2 h-5 w-5 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>Nggak bisa buka rekening atas nama usaha.</span>
                </li>
              </ul>
            </Card>

            {/* Gambar Tengah */}
            <Image
              src="/compareOss.png"
              alt="Compare NIB"
              width={500}
              height={625}
              className="hidden sm:block"
            />

            {/* Card 2 */}
            <Card className="p-5 flex flex-col justify-center self-start md:min-h-[350px]">
              <h3 className="mb-4 text-center text-xl font-bold text-green-500">
                Dengan NIB
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start grid grid-cols-[30px_1fr]">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  <span>Usaha kamu diakui secara hukum.</span>
                </li>
                <li className="flex items-start grid grid-cols-[30px_1fr]">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  <span>Bisa urus izin-izin lain dengan mudah.</span>
                </li>
                <li className="flex items-start grid grid-cols-[30px_1fr]">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  <span>
                    Siap ekspansi, kerja sama, ikut tender, dan program
                    pemerintah.
                  </span>
                </li>
                <li className="flex items-start grid grid-cols-[30px_1fr]">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  <span>
                    Bisnis makin profesional di mata konsumen & investor.
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="bg-[#EDEDED] md:py-16 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <Image
                src="/benefit.png"
                alt=""
                width={485}
                height={485}
                className="md:absolute md:mt-[-45px] hidden sm:block"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 md:text-5xl/[1.2] text-xl font-bold text-center md:text-left">
                Kami Bantu <span className="text-[#0EBCF7]">Sampai Beres</span>{" "}
                Tinggal Terima Jadi !
              </h2>
              <ul className="space-y-4 md:text-lg text-[#5B5B5B] text-xs mx-auto md:mx-[0px]">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
                  <span className="my-auto">
                    Gratis Konsultasi buat kamu yang masih bingung.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
                  <span className="my-auto">
                    Semua proses dikerjakan tim kami.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
                  <span className="my-auto">
                    Terbit resmi langsung dari sistem OSS.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
                  <span className="my-auto">
                    Cocok buat usaha pribadi, CV, bahkan PT.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection
        title={
          <>
            Klien Kami <span className="text-[#0EBCF7]">Bilang...</span>
          </>
        }
        testimonials={testimonials}
      />

      {/* Pricing Section */}
      <section className="md:py-16 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 md:px-[4rem]">
            <div className="flex items-center justify-center">
              <Image
                src="/pricingOss.png"
                alt="Consultant"
                width={527}
                height={527}
                className="hidden sm:block absolute items-center ml-[2rem]"
              />
            </div>
            <div className="md:container col-span-2 flex flex-col justify-center md:shadow-[0px_0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-lg md:py-[4rem]">
              <h2 className="mb-4 font-bold md:text-5xl/[1.2] text-2xl text-center md:text-left">
                Siap Legalin Usaha Kamu Hari Ini ?
              </h2>
              <p className="mb-6 md:text-lg text-xs text-center md:text-left text-[#5B5B5B]">
                Kalau kamu:
              </p>
              <ol className="mb-6 list-disc list-inside md:text-lg text-xs text-[#5B5B5B]">
                <li>Mau mulai usaha</li>
                <li>Belum punya NIB</li>
                <li>Mau daftar PIRT/BPOM tapi terkendala OSS</li>
                <li>Bingung dan gak mau ribet</li>
              </ol>
              <p className="mb-6 md:text-lg text-xs text-center md:text-left text-[#5B5B5B]">
                Kami siap bantu dari nol sampai jadi !
              </p>
              <h3 className="md:text-3xl text-xl font-semibold md:text-left text-center mb-2">
                Harga Special
              </h3>
              <h3 className="line-through text-[#FF4444] md:text-3xl text-xl font-semibold md:text-left text-center mb-2">
                IDR 550.000
              </h3>
              <h3 className="md:text-5xl text-3xl font-semibold md:text-left text-center mb-4">
                IDR 250.000
              </h3>
              <div className="text-center md:text-left">
                <Link href="/">
                  <Button className="item-center rounded-full bg-gradient-to-r from-cyan-300 to-sky-500 text-[#000E54] hover:bg-blue-600 md:text-lg text-xs">
                    <Image
                      src="/WA.png"
                      alt="WhatsApp"
                      width={24.24530029296875}
                      height={19}
                    />
                    Konsultasi Sekarang
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
