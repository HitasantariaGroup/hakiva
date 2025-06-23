"use client";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { CTASection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { FeatureCard2 } from "@/components/feature-card2";
import Link from "next/link";
import { Card } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Shield,
  Award,
  Zap,
  MessageCircle,
  Clock,
  DollarSign,
  FileCheck,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function PT_CVPage() {
  const testimonials = [
    {
      name: "Adrik",
      role: "pemilik studio foto",
      content:
        '"Awalnya saya pikir bikin PT itu mahal dan ribet. Tapi bareng Hakiva, semua terasa gampang. Bahkan saya nggak perlu bolak-balik. Semua dijelaskan dengan jelas."',
      imageSrc: "/adrik.jpg",
    },
    {
      name: "Sastra",
      role: "Founder Startup Edukasi",
      content:
        '"Proses pembuatan PT bersama Hakiva sangat mudah dan cepat. Timnya sangat membantu dan profesional dalam menjelaskan setiap langkahnya. Saya sangat puas dengan pelayanannya."',
      imageSrc: "/sastra.jpg",
    },
    {
      name: "Tari",
      role: "Pemilik Toko Kue Online",
      content:
        '"Saya senang banget sama cara tim Hakiva komunikasi. Mereka sabar banget jawab pertanyaan saya. Hasilnya cepat dan rapi"',
      imageSrc: "/tari.jpg",
    },
  ];
  const pathname = usePathname();
  const konsultasiLinks: Record<string, string> = {
    "/": "https://nanya.online/hakiva-home",
    "/pt-cv": "https://nanya.online/hakiva-PT,CV,YY",
    "/haki": "https://nanya.online/hakiva-haki",
    "/pirt": "https://nanya.online/hakiva-pirt",
    "/oss": "https://nanya.online/hakiva-oss",
    "/halal": "https://nanya.online/hakiva-halal",
  };
  const currentKonsultasiLink =
    konsultasiLinks[pathname] || "https://nanya.online/hakiva-haki";

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <MainNav />

      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Pendirian CV, PT,& Yayasan{" "}
            <span className="text-[#0EBCF7]"> Termurah Se Indonesia!</span>{" "}
          </>
        }
        description="Dengan harga mulai dari Rp 1 jutaan, 
        kamu udah dapat semua yang dibutuhkan: Akta Notaris, 
        SK Kemenkumham, NIB, NPWP, OSS, bahkan desain logo usaha!"
        additionalText="Harga terjangkau bukan berarti murahan. Di Hakiva, semua 
        layanan dijalankan sesuai prosedur hukum dan dikerjakan langsung oleh 
        tim berpengalaman + notaris resmi."
        additionalText2="Kami percaya, setiap pelaku usaha berhak punya legalitas resmi tanpa harus keluar biaya"
        imageSrc="/hero-pt-cv.png"
        imageAlt="Women help to make PT"
      />

      {/* Why our Section */}
      <section className="md:py-16 py-10 ">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center md:text-5xl text-[25px] font-bold">
            Kenapa Harus Bikin PT/CV di{" "}
            <span className="text-[#0EBCF7]">Hakiva?</span>{" "}
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
                Legalitas nggak harus mahal. Kami bantu cari paket sesuai
                kebutuhan dan kondisi kamu.
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
                Masih bingung mau pilih CV, PT, atau Yayasan? Tenang, kamu bisa
                konsultasi dulu GRATIS. Kami bantu analisa kebutuhan usaha kamu
                dan kasih saran terbaik. Tanpa biaya, tanpa paksaan.
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
                Masih bingung mau pilih CV, PT, atau Yayasan? Tenang, kamu bisa
                konsultasi dulu GRATIS. Kami bantu analisa kebutuhan usaha kamu
                dan kasih saran terbaik. Tanpa biaya, tanpa paksaan..
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
                Kamu tahu estimasi waktu & biaya sejak awal. Nggak ada biaya
                tersembunyi atau proses yang ditutup-tutupi.
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
                Mulai dari pelaku UMKM, freelancer, sampai startup. Banyak yang
                sudah merasakan mudahnya ngurus legalitas bareng Hakiva.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="md:py-16 py-8 my-10">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center md:text-5xl/[1.2] text-2xl font-bold">
            Layanan <span className="text-[#0EBCF7]">Hakiva</span>{" "}
          </h2>
          <p className="md:text-lg text-sm text-center mb-8 text-[#5B5B5B]">
            Cuma di tempat kami kamu bisa dapet:
          </p>
          <div className="grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-2 items-center justify-items-center md:mx-[40px] lg:mx-[100px]">
            <FeatureCard2
              srcImage="/pendirian-cv.png"
              title="Pendirian CV"
              description="Cocok untuk UMKM, freelance, atau usaha keluarga.
               Kami bantu urus semua dari akta, NPWP, NIB, hingga OSS."
              bgColor="bg-[#EDEDED]"
              row="grid grid-cols-1
              md:grid  items-center w-full h-full"
            />
            <FeatureCard2
              srcImage="/pendirian-PT&Yayasan.png"
              title="Pendirian PT & Yayasan"
              description="Pilihan ideal untuk usaha yang mau berkembang besar. 
              Kami urus dari akta notaris, SK Kemenkumham, NIB, hingga dokumen pendukung lainnya."
              bgColor="bg-[#EDEDED]"
              row="grid grid-cols-1 md:grid items-center w-full h-full"
            />
            <FeatureCard2
              srcImage="/perubahan-data-usaha.png"
              title="Perubahan Data Usaha"
              description="Mau ganti nama, alamat, kegiatan usaha, 
              hingga susunan pengurus? Hakiva bantu beresin secara resmi & cepat."
              bgColor="bg-[#EDEDED]"
              row="grid grid-cols-1 md:grid items-center w-full h-full"
            />
            <FeatureCard2
              srcImage="/Konsultasi-Legalitas-gratis.png"
              title="Konsultasi Legalitas Gratis"
              description="Belum tahu bentuk usaha mana yang paling cocok? Konsultasi dulu aja, gratis dan tanpa komitmen."
              bgColor="bg-[#EDEDED]"
              row="items-start   justify-items-start w-full h-full"
            />
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

      {/* Pricing */}
      <section className="md:py-16 py-10">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-5xl text-2xl">
            Pendirian CV (Badan Usaha Mikro)
          </h2>
          <div className="grid lg:grid-cols-3 grid-cols-[300px] md:grid-cols-[500px] gap-10 justify-center ">
            <div className="overflow-hidden rounded-lg bg-[#000E54] md:p-8 p-4 text-white flex flex-col h-full ">
              <h3 className="mb-4 text-center md:text-5xl text-2xl font-semibold">
                Paket Basic
              </h3>
              <div className="md:mb-10 mb-5 text-center">
                <span className="text-sm line-through text-semibold md:text-3xl text-base">
                  IDR 3.200.000
                </span>
                <p className="md:text-5xl text-2xl font-semibold text-[#FFD745]">
                  IDR 1.999.000
                </p>
              </div>
              <p className="md:mb-4 mb-2 md:text-lg text-xs">
                Lama proses : 2-3 hari kerja
              </p>
              <ol className="md:mb-10 mb-10 list-disc list-inside text-white md:text-base text-[9px]">
                <li>Pengecekan & Pendaftaran nama CV</li>
                <li>KBLI Badan Usaha</li>
                <li>Akta Notaris</li>
                <li>SK Kemenkumham</li>
                <li>NPWP</li>
              </ol>
              <div className="md:mb-10 mb-10 grid grid-cols-2 text-[#47F3FA] grid-cols-[30px_1fr] md:grid-cols-[45px_1fr] md:text-xs text-[8px]/[1.5]">
                <p>Note :</p>
                <ol>
                  <li>⁽¹⁾ Setelah client tanda tangan </li>
                </ol>
              </div>
              <div className="text-center mt-auto">
                <Link href="https://nanya.online/hakiva-CV">
                  <Button className="item-center px-4 rounded-full bg-gradient-to-r from-cyan-300 to-sky-500 text-[#000E54] hover:bg-blue-600 text-xs">
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
            <div className="overflow-hidden rounded-lg bg-[#000E54] p-8 text-white flex flex-col h-full">
              <h3 className="mb-4 text-center md:text-4xl text-2xl font-semibold">
                Paket Standar
              </h3>
              <div className="md:mb-10 mb-5 text-center">
                <span className="text-sm line-through text-semibold md:text-3xl text-base">
                  IDR 3.800.000
                </span>
                <p className="md:text-5xl text-2xl font-semibold text-[#FFD745]">
                  IDR 2.250.000
                </p>
              </div>
              <p className="md:mb-4 mb-2 md:text-lg text-xs">
                Lama proses : 2-4 hari kerja ⁽¹⁾
              </p>
              <ol className="md:mb-4 mb-2 list-disc list-inside text-white md:text-base text-[10px]">
                <li>Pengecekan & Pendaftaran nama CV</li>
                <li>KBLI Badan Usaha</li>
                <li>Akta Notaris</li>
                <li>SK Kemenkumham</li>
                <li>NPWP Perusahaan</li>
                <li>Akun OSS RBA</li>
                <li>NIB (Nomor Induk Berusaha)</li>
              </ol>
              <div className="md:mb-10 mb-10 grid grid-cols-2 text-[#47F3FA] grid-cols-[30px_1fr] md:grid-cols-[45px_1fr] md:text-xs text-[8px]/[1.5]">
                <p>Note :</p>
                <ol>
                  <li>⁽¹⁾ Setelah client tanda tangan </li>
                </ol>
              </div>
              <div className="text-center mt-auto">
                <Link href="https://nanya.online/hakiva-cv-standar">
                  <Button className="item-center rounded-full px-4 bg-gradient-to-r from-cyan-300 to-sky-500 text-[#000E54] hover:bg-blue-600 text-xs">
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
            <div className="overflow-hidden rounded-lg bg-[#000E54] p-8 text-white flex flex-col h-full">
              <h3 className="mb-4 text-center md:text-4xl text-2xl font-semibold">
                Paket Premium
              </h3>
              <div className="md:mb-10 mb-5 text-center">
                <span className="text-sm line-through text-semibold md:text-3xl text-base">
                  IDR 4.500.000
                </span>
                <p className="md:text-5xl text-2xl font-semibold text-[#FFD745]">
                  IDR 2.500.000
                </p>
              </div>
              <p className="md:mb-4 mb-2 md:text-lg text-xs">
                Lama proses : 2-5 hari kerja ⁽¹⁾
              </p>
              <ol className="md:mb-4 mb-2 list-disc list-inside text-white md:text-base text-[10px]">
                <li>Pengecekan & Pendaftaran nama CV</li>
                <li>KBLI Badan Usaha</li>
                <li>Akta Notaris</li>
                <li>SK Kemenkumham</li>
                <li>NPWP Perusahaan</li>
                <li>Akun OSS RBA</li>
                <li>NIB (Nomor Induk Berusaha)</li>
                <li>Logo Perusahaan (2)</li>
              </ol>
              <div className="md:mb-10 mb-10 grid grid-cols-2 text-[#47F3FA] grid-cols-[30px_1fr] md:grid-cols-[45px_1fr] md:text-xs text-[8px]/[1.5]">
                <p>Note :</p>
                <ol>
                  <li>⁽¹⁾ Setelah client tanda tangan </li>
                  <li>
                    ⁽²⁾ Logo akan diberikan seminggu setelah penandatanganan
                    akta notaris
                  </li>
                </ol>
              </div>
              <div className="text-center mt-auto">
                <Link href="https://nanya.online/hakiva-cv-premium">
                  <Button className="item-center px-4 rounded-full bg-gradient-to-r from-cyan-300 to-sky-500 text-[#000E54] hover:bg-blue-600 text-xs">
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
        <div className="container mx-auto px-4">
          <h2 className="mb-12 mt-20 text-center text-3xl font-bold md:text-5xl text-2xl">
            Pendirian PT (Badan Usaha Mikro)
          </h2>

          <div className="grid  lg:grid-cols-2 max-w-[900px] justify-center items-center md:pt-5 grid-cols-[300px] md:grid-cols-[500px] gap-12 mx-auto justify-center ">
            <div className="overflow-hidden  rounded-lg bg-[#000E54] p-8 text-white flex flex-col h-full">
              <h3 className="mb-4 text-center md:text-4xl text-2xl font-semibold">
                Paket Standar
              </h3>
              <div className="md:mb-10 mb-5 text-center">
                <span className="text-sm line-through text-semibold md:text-3xl text-base">
                  IDR 6.500.000
                </span>
                <p className="md:text-5xl text-2xl font-semibold text-[#FFD745]">
                  IDR 4.000.000
                </p>
              </div>
              <p className="md:mb-4 mb-2 md:text-lg text-xs">
                Lama proses : 2-4 hari kerja ⁽¹⁾
              </p>
              <ol className="md:mb-4 mb-2 list-disc list-inside text-white md:text-base text-[10px]">
                <li>Pengecekan & Pendaftaran nama PT</li>
                <li>KBLI Badan Usaha</li>
                <li>Akta Notaris</li>
                <li>SK Kemenkumham</li>
                <li>NPWP Perusahaan</li>
                <li>Akun OSS RBA</li>
                <li>NIB (Nomor Induk Berusaha)</li>
              </ol>
              <div className="md:mb-10 mb-10 grid grid-cols-2 text-[#47F3FA] grid-cols-[30px_1fr] md:grid-cols-[45px_1fr] md:text-xs text-[8px]/[1.5]">
                <p>Note :</p>
                <ol>
                  <li>⁽¹⁾ Setelah client tanda tangan </li>
                </ol>
              </div>
              <div className="text-center mt-auto">
                <Link href="https://nanya.online/hakiva-PT-standar">
                  <Button className="item-center rounded-full px-4 bg-gradient-to-r from-cyan-300 to-sky-500 text-[#000E54] hover:bg-blue-600 text-xs">
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
            <div className="overflow-hidden rounded-lg bg-[#000E54] p-8 text-white flex flex-col h-full">
              <h3 className="mb-4 text-center md:text-4xl text-2xl font-semibold">
                Paket Premium
              </h3>
              <div className="md:mb-10 mb-5 text-center">
                <span className="text-sm line-through text-semibold md:text-3xl text-base">
                  IDR 7.500.000
                </span>
                <p className="md:text-5xl text-2xl font-semibold text-[#FFD745]">
                  IDR 4.500.000
                </p>
              </div>
              <p className="md:mb-4 mb-2 md:text-lg text-xs">
                Lama proses : 2-5 hari kerja ⁽¹⁾
              </p>
              <ol className="md:mb-4 mb-2 list-disc list-inside text-white md:text-base text-[10px]">
                <li>Pengecekan & Pendaftaran nama PT</li>
                <li>KBLI Badan Usaha</li>
                <li>Akta Notaris</li>
                <li>SK Kemenkumham</li>
                <li>NPWP Perusahaan</li>
                <li>Akun OSS RBA</li>
                <li>NIB (Nomor Induk Berusaha)</li>
                <li>Logo Perusahaan (2)</li>
              </ol>
              <div className="md:mb-10 mb-10 grid grid-cols-2 text-[#47F3FA] grid-cols-[30px_1fr] md:grid-cols-[45px_1fr] md:text-xs text-[8px]/[1.5]">
                <p>Note :</p>
                <ol>
                  <li>⁽¹⁾ Setelah client tanda tangan </li>
                  <li>
                    ⁽²⁾ Logo akan diberikan seminggu setelah penandatanganan
                    akta notaris
                  </li>
                </ol>
              </div>
              <div className="text-center mt-auto">
                <Link href="https://nanya.online/hakiva-PT-premium">
                  <Button className="item-center px-4 rounded-full bg-gradient-to-r from-cyan-300 to-sky-500 text-[#000E54] hover:bg-blue-600 text-xs">
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
        <div className="container mx-auto px-4 my-20">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-5xl text-2xl">
            Paket Pendirian yayasan
          </h2>
          <div className="grid lg:grid-cols-1 max-w-[450px] mx-auto grid-cols-[300px] md:grid-cols-[500px] justify-center ">
            <div className="overflow-hidden rounded-lg bg-[#000E54] md:p-8 p-4 text-white flex flex-col h-full ">
              <h3 className="mb-4 text-center md:text-5xl text-2xl font-semibold">
                Paket Standar
              </h3>
              <div className="md:mb-10 mb-5 text-center">
                <span className="text-sm line-through text-semibold md:text-3xl text-base">
                  IDR 5.800.000
                </span>
                <p className="md:text-5xl text-2xl font-semibold text-[#FFD745]">
                  IDR 3.500.000
                </p>
              </div>
              <p className="md:mb-4 mb-2 md:text-lg text-xs">
                Lama proses : 2-4 hari kerja
              </p>
              <ol className="md:mb-10 mb-10 list-disc list-inside text-white md:text-base text-[9px]">
                <li>Pengecekan & Pendaftaran nama CV</li>
                <li>KBLI Badan Usaha</li>
                <li>Akta Notaris</li>
                <li>SK Kemenkumham</li>
                <li>NPWP</li>
              </ol>
              <div className="md:mb-10 mb-10 grid grid-cols-2 text-[#47F3FA] grid-cols-[30px_1fr] md:grid-cols-[45px_1fr] md:text-xs text-[8px]/[1.5]">
                <p>Note :</p>
                <ol>
                  <li>⁽¹⁾ Setelah client tanda tangan </li>
                </ol>
              </div>
              <div className="text-center mt-auto">
                <Link href="https://nanya.online/hakiva-Yayasan-standar">
                  <Button className="item-center px-4 rounded-full bg-gradient-to-r from-cyan-300 to-sky-500 text-[#000E54] hover:bg-blue-600 text-xs">
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
