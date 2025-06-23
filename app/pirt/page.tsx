import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { CTASection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import Link from "next/link";
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

export default function PIRTPage() {
  const testimonials = [
    {
      name: "Tari",
      role: "Pengusaha Kue Kering",
      content:
        '"Proses pengurusan PIRT sangat mudah dan cepat. Tim Hakiva sangat membantu dari awal hingga akhir. Sekarang produk saya bisa masuk supermarket!"',
      imageSrc: "/tari.jpg",
    },
    {
      name: "Rizkan",
      role: "Pengusaha Frozen Food",
      content:
        '"Saya tidak tahu harus mulai dari mana untuk mengurus PIRT. Hakiva membantu semuanya dari awal sampai akhir. Prosesnya cepat dan tidak ribet."',
      imageSrc: "/rizkan.jpg",
    },
    {
      name: "Sastra",
      role: "Pengusaha Katering",
      content:
        '"Terima kasih Hakiva! Berkat PIRT, bisnis katering saya jadi lebih dipercaya pelanggan. Prosesnya mudah dan tim sangat responsif menjawab semua pertanyaan saya."',
      imageSrc: "/sastra.jpg",
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
            Ingin Produk Kamu Masuk Pasar yang Lebih Luas? Urus PIRTnya Sekarang!
          </>
        }
        description="Apapun jenis produk yang kamu hasilkan, legalitas adalah fondasi utama untuk membangun kepercayaan konsumen dan memperluas jangkauan pasar. Salah satu bentuk legalitas yang penting adalah PIRT.  Izin Produksi dari Dinas Kesehatan yang menjadi bukti bahwa produk kamu aman, layak edar, dan memenuhi standar pemerintah."
        imageSrc="/hero-pirt.png"
        imageAlt="Woman with food"
      />

      {/* Why Register Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="md:mb-12 mb-6 text-center md:text-5xl text-2xl font-bold">
            Kenapa Harus <span className="text-[#0EBCF7]">Bikin PIRT</span> ?
          </h2>
          <p className="mb-8 text-center text-gray-600 md:text-lg text-sm">
            Yuk mulai waspada. Karena tanpa PIRT, produk kamu belum diakui aman
            dan legal secara hukum. Dan risikonya bukan main-main:
          </p>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 text-center">
            <FeatureCard
              title="Produk kamu bisa ditolak di marketplace atau retail."
              srcImage="/alert.png"
              row=" mx-auto"
            />
            <FeatureCard
              title="Nggak bisa ikutan pameran, pelatihan, atau program bantuan UMKM."
              srcImage="alert.png"
              row=" mx-auto"
            />
            <FeatureCard
              title="Konsumen ragu beli karena nggak ada izin resminya."
              srcImage="alert.png"
              row=" mx-auto"
            />
            <FeatureCard
              title="Disita dan di kenakan PIDANA."
              srcImage="alert.png"
              row=""
            />
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="md:py-16 py-8">
        <div className="container mx-auto px-4">
          <h2 className="md:mb-12 mb-6 text-center md:text-5xl/[1.2] text-2xl font-bold">
            Kami Bantu Kamu Urus PIRT dengan{" "}
            <span className="text-[#0EBCF7]">Cepat, Murah, & Tanpa Ribet </span>{" "}
            !
          </h2>
          <p className="md:text-lg text-sm text-center mb-8 text-[#5B5B5B]">
            Cuma di tempat kami kamu bisa dapet:
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 items-center justify-items-center md:mx-[40px] lg:mx-[100px]">
            <FeatureCard
              srcImage="/why1.png"
              title="Proses Super Cepat"
              description="Selesai dalam 1 hari kerja."
              bgColor="bg-[#EDEDED]"
              row="grid grid-cols-1 md:grid md:grid-cols-[100px_1fr] grid-cols-[90px_1fr] items-center w-full h-full"
            />
            <FeatureCard
              srcImage="/why2.png"
              title="Harga Murah"
              description="Cocok buat semua UMKM."
              bgColor="bg-[#EDEDED]"
              row="grid grid-cols-1 md:grid md:grid-cols-[100px_1fr] grid-cols-[90px_1fr] items-center w-full h-full"
            />
            <FeatureCard
              srcImage="/pirtservice1.png"
              title="Belum Punya OSS ?"
              description="Kami buatkan GRATIS."
              bgColor="bg-[#EDEDED]"
              row="grid grid-cols-1 md:grid md:grid-cols-[100px_1fr] grid-cols-[90px_1fr] items-center w-full h-full"
            />
            <FeatureCard
              srcImage="/pirtservice2.png"
              title="Proses Online"
              description="Kamu nggak perlu keluar rumah."
              bgColor="bg-[#EDEDED]"
              row="grid grid-cols-1 md:grid md:grid-cols-[100px_1fr] grid-cols-[90px_1fr] items-center w-full h-full"
            />
            <FeatureCard
              srcImage="/why3.png"
              title="Gratis Konsultasi"
              description="Kamu dapat konsultasi GRATIS."
              bgColor="bg-[#EDEDED]"
              row="grid grid-cols-1 md:grid md:grid-cols-[100px_1fr] grid-cols-[90px_1fr] items-center w-full h-full"
            />
            <FeatureCard
              srcImage="/pirtservice3.png"
              title="Bayar Setelah Jadi"
              description="Invoice akan ditagih setelah sertifikat terbit."
              bgColor="bg-[#EDEDED]"
              row="grid grid-cols-1 md:grid md:grid-cols-[100px_1fr] grid-cols-[90px_1fr] items-center w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Mandatory Section */}
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
                Kenapa PIRT Itu <span className="text-[#0EBCF7]">Wajib</span>{" "}
                Buat Usaha Kamu?
              </h2>
              <ul className="space-y-4 md:text-lg text-[#5B5B5B] text-xs mx-auto md:mx-[0px]">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
                  <span className="my-auto">
                    Sudah memenuhi standar kebersihan & keamanan
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
                  <span className="my-auto">
                    Layak untuk dipasarkan secara umum
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
                  <span className="my-auto">
                    Siap masuk ke marketplace, toko modern, bahkan ekspor
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Without PIRT Section */}
      <section className="md:py-16 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:ps-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="md:mb-6 mb-3 md:text-5xl/[1.2] text-xl font-bold text-center md:text-left">
                Tanpa PIRT, Usaha Kamu{" "}
                <span className="text-[#0EBCF7]">
                  Nggak Akan Bisa Berkembang Jauh.
                </span>
              </h2>
              <h3 className="md:mb-[20px] mb-[10px] md:text-3xl text-base font-semibold text-center md:text-left">
                Tapi dengan PIRT, usaha kamu bisa naik kelas dan lebih dipercaya
                !
              </h3>
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

      {/* Consultation Section */}
      <section className="md:py-16 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 md:px-[4rem]">
            <div className="md:flex items-center justify-center hidden">
              <Image
                src="/consul.png"
                alt="Consultant"
                width={527}
                height={527}
                className="hidden sm:block absolute items-center max-w-[50%] lg:max-w-full mt-[-90px] ml-[2rem]"
              />
            </div>
            <div className="md:container col-span-2 flex flex-col justify-center md:shadow-[0px_0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-lg md:py-[2rem]">
              <h2 className="mb-6 font-bold md:text-5xl text-2xl text-center md:text-left">
                Cuma Satu Hari, Harga Hemat, dan Ada Bonus{" "}
                <span className="text-[#0EBCF7]">GRATIS !</span>
              </h2>
              <ul className="space-y-4 md:text-lg text-[#5B5B5B] text-xs mx-auto md:mx-[0px]">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
                  <span className="my-auto">
                    PIRT resmi dari Dinas Kesehatan – selesai dalam 1 hari.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
                  <span className="my-auto">
                    Biaya terjangkau – cocok buat UMKM dan usaha baru.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
                  <span className="my-auto">
                    Gratis dibuatkan akun OSS kalau belum punya.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="md:py-16 py-10">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-5xl text-2xl">
            Pendaftaran PIRT
          </h2>
          <div className="grid lg:grid-cols-3 grid-cols-[300px] md:grid-cols-[500px] gap-10 justify-center ">
            <div className="overflow-hidden rounded-lg bg-[#000E54] md:p-8 p-4 text-white flex flex-col h-full ">
              <h3 className="mb-4 text-center md:text-5xl text-2xl font-semibold">
                Paket Basic
              </h3>
              <div className="md:mb-10 mb-5 text-center">
                <span className="text-sm line-through text-semibold md:text-3xl text-base">
                  IDR 350.000
                </span>
                <p className="md:text-5xl text-2xl font-semibold text-[#FFD745]">
                  IDR 150.000
                </p>
              </div>
              <p className="md:mb-4 mb-2 md:text-lg text-xs">
                Lama proses : 1 hari kerja
              </p>
              <ol className="md:mb-10 mb-10 list-disc list-inside text-white md:text-base text-[9px]">
                <li>Sertifikat SP-PIRT</li>
                <li>Akun OSS (Jika belum punya akun dibuatkan gratis)</li>
                <li>Pemilihan KBLI sesuai dengan bidang usaha</li>
              </ol>
              <div className="text-center mt-auto">
                <Link href="https://nanya.online/hakiva-pirt-basic">
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
                  IDR 750.000
                </span>
                <p className="md:text-5xl text-2xl font-semibold text-[#FFD745]">
                  IDR 450.000
                </p>
              </div>
              <p className="md:mb-4 mb-2 md:text-lg text-xs">
                Lama proses : 1 hari kerja ⁽¹⁾
              </p>
              <ol className="md:mb-4 mb-2 list-disc list-inside text-white md:text-base text-[10px]">
                <li>Sertifikat SP-PIRT</li>
                <li>Akun OSS</li>
                <li>Pemilihan KBLI sesuai dengan bidang usaha</li>
                <li>NIB (Nomor Induk Berusaha) </li>
                <li>Sertifikat Standar ⁽²⁾</li>
              </ol>
              <div className="md:mb-10 mb-10 grid grid-cols-2 text-[#47F3FA] grid-cols-[30px_1fr] md:grid-cols-[45px_1fr] md:text-xs text-[8px]/[1.5]">
                <p>Note :</p>
                <ol>
                  <li>⁽¹⁾ Jika sistem AHU & OSS tidak sedang gangguan</li>
                  <li>⁽²⁾ Untuk resiko menengah rendah</li>
                </ol>
              </div>
              <div className="text-center mt-auto">
                <Link href="https://nanya.online/hakiva-pirt-standar">
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
                  IDR 1.000.000
                </span>
                <p className="md:text-5xl text-2xl font-semibold text-[#FFD745]">
                  IDR 650.000
                </p>
              </div>
              <p className="md:mb-4 mb-2 md:text-lg text-xs">
                Lama proses : 5 hari kerja ⁽¹⁾
              </p>
              <ol className="md:mb-4 mb-2 list-disc list-inside text-white md:text-base text-[10px]">
                <li>Sertifikat SP-PIRT</li>
                <li>Akun OSS </li>
                <li>Pemilihan KBLI sesuai dengan bidang usaha</li>
                <li>NIB (Nomor Induk Berusaha)</li>
                <li>Sertifikat Standar ⁽²⁾</li>
                <li>Desain Kemasan sesuai standar PIRT</li>
              </ol>
              <div className="md:mb-10 mb-10 grid grid-cols-2 text-[#47F3FA] grid-cols-[30px_1fr] md:grid-cols-[45px_1fr] md:text-xs text-[8px]/[1.5]">
                <p>Note :</p>
                <ol>
                  <li>⁽¹⁾ Jika sistem AHU & OSS tidak sedang gangguan</li>
                  <li>⁽²⁾ Untuk resiko menengah rendah</li>
                </ol>
              </div>
              <div className="text-center mt-auto">
                <Link href="https://nanya.online/hakiva-pirt-Premium">
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

      {/* CTA Section */}
      <CTASection
        title={
          <>
            Yuk, Legalin Produk Kamu{" "}
            <span className="text-[#0EBCF7]">Hari Ini</span> !
          </>
        }
        description="Jangan tunda lagi perlindungan untuk produk makanan Anda. Daftarkan PIRT sekarang dan dapatkan ketenangan pikiran serta legalitas yang Anda butuhkan untuk mengembangkan bisnis."
        buttonText="Konsultasi Sekarang"
        href="https://nanya.online/hakiva-pirt"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
