"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Award, Zap, MessageCircle } from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { CTASection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavSection } from "@/components/nav-section";

export default function HomePage() {
  const pathname = usePathname();
  const konsultasiLinks: Record<string, string> = {
    "/": "https://nanya.online/hakiva-home",
    "/pt-cv": "https://nanya.online/hakiva-PT,CV,YY",
    "/haki": "https://nanya.online/hakiva-haki",
    "/pirt": "https://nanya.online/hakiva-pirt",
    "/oss": "https://nanya.online/hakiva-oss",
    "/halal": "https://nanya.online/hakiva-halal",
  };
  const currentKonsultasiLink = konsultasiLinks[pathname] || "https://nanya.online/hakiva-haki";


  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <MainNav />

      {/* Hero Section */}
      <div className="bg-[#000E54] ">
        <HeroSection
          title={
            <>
              JASA PENGURUSAN LEGALITAS TERMURAH
              SE INDONESIA !!
            </>
          }
          description="Satu tempat untuk semua kebutuhan legalitas bisnis kamu. Dari pendirian PT/CV,sertifikasi halal,HAKI, hingga NIB dan PIRT."
          imageSrc="/home-hero.png"
          additionalText=""
          imageAlt="Hakiva Maskot"
          buttonText="Konsultasi Sekarang"
          buttonLink={currentKonsultasiLink}
        />
      </div>

      {/* Nav Section */}
      <section className="z-10">
        <NavSection />
      </section>

      {/* Hakiva Explanation Section */}
      <section className="md:py-16 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-center md:text-6xl/[1.2] text-xl font-bold mt-20">Apa Itu Hakiva?</h1>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:ps-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h3 className="md:mb-6 mb-3 md:text-4xl/[1.2] text-xl font-bold text-center md:text-left">
                  Hakiva adalah mitra terpercaya dalam pengurusan legalitas usaha Anda.{" "}
                </h3>
                <p>
                  Kami menyediakan layanan lengkap mulai dari pembuatan PT/CV, pendaftaran HAKI, pengurusan izin PIRT, NIB, hingga sertifikasi halal.
                  Dengan proses yang mudah, cepat, dan transparan, kami hadir untuk
                  membantu para pelaku usaha, UMKM, dan startup agar dapat
                  berkembang secara legal dan profesional.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/process.png"
                    alt=""
                    width={500}
                    height={625}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Hakiva Service Section */}

      <section className="md:py-16 py-10">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center md:text-5xl text-[25px] font-bold">
            Layanan Hakiva
          </h2>
          <div className="grid  gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <Card className="p-6 shadow-lg grid grid-cols-1 items-center justify-center">
              <div>
                <div className="mx-auto w-16 h-16">
                  <Image
                    src="/approve.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="text-center mb-2 md:text-3xl text-xl font-semibold">
                  PT/CV
                </h3>
              </div>
            </Card>
            <Card className="p-6 shadow-lg grid grid-cols-1 items-center justify-center">
              <div>
                <div className="mx-auto w-16 h-16">
                  <Image
                    src="/approve.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="text-center mb-2 md:text-3xl text-xl font-semibold">
                  HAKI
                </h3>
              </div>
            </Card>
            <Card className="p-6 shadow-lg grid grid-cols-1 items-center justify-center">
              <div>
                <div className="mx-auto w-16 h-16">
                  <Image
                    src="/approve.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="text-center mb-2 md:text-3xl text-xl font-semibold">
                  PIRT
                </h3>
              </div>
            </Card>
            <Card className="p-6 shadow-lg grid grid-cols-1 items-center justify-center">
              <div>
                <div className="mx-auto w-16 h-16">
                  <Image
                    src="/approve.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="text-center mb-2 md:text-3xl text-xl font-semibold">
                  NIB
                </h3>
              </div>
            </Card>
            <Card className="p-6 shadow-lg grid grid-cols-1 items-center justify-center">
              <div>
                <div className="mx-auto w-16 h-16">
                  <Image
                    src="/approve.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="text-center mb-2 md:text-3xl text-xl font-semibold">
                  Halal
                </h3>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Why Hakiva Section */}
      <section className="md:py-16 py-10 ">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center md:text-5xl text-[25px] font-bold">
            Kenapa Memilih Hakiva?{" "}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-cyan-500">
                <Image
                  src="/home-1.png"
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="mb-2 md:text-3xl text-xl font-semibold">
                Harga Termurah Se Indonesia
              </h3>
              <p className="text-[#5B5B5B] md:text-lg text-sm">
                Legalitas nggak harus mahal.
                Kami bantu cari paket sesuai kebutuhan dan kondisi kamu.
              </p>
            </Card>
            <Card className="p-6 shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-cyan-500">
                <Image
                  src="/home-2.png"
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="mb-2 md:text-3xl text-xl font-semibold">
                Gratis Konsultasi Tanpa Komitmen
              </h3>
              <p className="text-[#5B5B5B] md:text-lg text-sm">
                Masih bingung legalitas usaha mana yang cocok buat usaha kamu? 
                Tenang, kamu bisa konsultasi dulu GRATIS. 
                Kami bantu analisa kebutuhan usaha kamu dan kasih saran terbaik. 
                Tanpa biaya, tanpa paksaan.
              </p>
            </Card>
            <Card className="p-6 shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-cyan-500">
                <Image
                  src="/home-3.png"
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="mb-2 md:text-3xl text-xl font-semibold">
                Aman & Legal
              </h3>
              <p className="text-[#5B5B5B] md:text-lg text-sm">
                Seluruh proses dijalankan melalui jalur resmi dan 
                sesuai peraturan yang berlaku. 
                Kami hanya menggunakan prosedur yang sah dan sesuai 
                hukum tanpa jalan pintas.
              </p>
            </Card>
            <Card className="p-6 shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <Image
                  src="/home-4.png"
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="mb-2 md:text-3xl text-xl font-semibold">
                Transparan & Jelas dari Awal
              </h3>
              <p className="text-[#5B5B5B] md:text-lg text-sm">
                Kamu tahu estimasi waktu & biaya sejak awal.
                Nggak ada biaya tersembunyi
                atau proses yang ditutup-tutupi.
              </p>
            </Card>
            <Card className="p-6 shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-500">
                <Image
                  src="/home-5.png"
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="mb-2 md:text-3xl text-xl font-semibold">
                Tim Profesional & Ramah
              </h3>
              <p className="text-[#5B5B5B] md:text-lg text-sm">
                Kita ngerti nggak semua orang familiar dengan istilah hukum.
                Makanya kami siap jelaskan dengan bahasa yang gampang dipahami.
              </p>
            </Card>
            <Card className="p-6 shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-500">
                <Image
                  src="/home-6.png"
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="mb-2 md:text-3xl text-xl font-semibold">
                Sudah Dipercaya Ratusan Klien
              </h3>
              <p className="text-[#5B5B5B] md:text-lg text-sm">
                Mulai dari pelaku UMKM, freelancer,
                sampai startup. Banyak yang sudah merasakan
                mudahnya ngurus legalitas bareng Hakiva.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <div className="divider my-20"></div>

      {/* Benefits Section */}
      <section className="bg-[#EDEDED] md:py-16 py-16">
        <div className="container mx-auto px-4 overflow-hidden">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <Image
                src="/benefit.png"
                alt=""
                width={400}
                height={300}
                className="md:absolute md:mt-[-100px] hidden sm:block"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 md:text-5xl text-xl font-bold text-center md:text-left">
                Komitmen Kami{" "}
              </h2>
              <span>
                Kami percaya bahwa legalitas yang kuat adalah fondasi bisnis yang
                sehat. Oleh karena itu, Hakiva berkomitmen untuk memberikan layanan
                yang tidak hanya profesional, tetapi juga mudah diakses dan dipahami
                oleh siapa pun baik Anda pelaku UMKM, startup, maupun perusahaan
                yang sedang berkembang.
              </span>

            </div>
          </div>
        </div>
      </section>
      <div className="divider my-10"></div>


      {/* Consultation Section */}
      <section className="mt-20 md:py-16 py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:px-[4rem]">
            <div className="flex items-center justify-center">
              <Image
                src="/consul.png"
                alt="Consultant"
                width={527}
                height={527}
                className="hidden sm:block absolute items-center max-w-[50%] lg:max-w-full mt-[-90px] ml-[1rem]"
              />
            </div>
            <div className="md:container col-span-2 flex flex-col justify-center md:shadow-[0px_0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-lg md:py-[4rem]">
              <h2 className="mb-4 font-bold md:text-5xl text-2xl text-center md:text-left">
                Konsultasi Gratis{" "}
              </h2>
              <p className="mb-6 md:text-lg text-xs text-center md:text-left">
                Masih bingung harus mulai dari mana?
                Tim Hakiva siap membantu menjawab pertanyaan
                Anda dan memberikan solusi yang sesuai dengan kebutuhan bisnis Anda.
              </p>
              <div className="text-center md:text-left">
                <Link href={currentKonsultasiLink}>
                  <Button className="item-center px-4 rounded-full bg-gradient-to-r from-cyan-300 to-sky-500 text-[#000E54] hover:bg-blue-600 md:text-lg text-xs">
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
