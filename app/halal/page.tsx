import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { FeatureCard } from "@/components/feature-card";
import {
  CheckCircle,
  ShoppingCart,
  Scale,
  TrendingUp,
  AlertCircle,
  Award,
} from "lucide-react";
import { MainNav } from "@/components/main-nav";

export default function HalalPage() {
  const testimonials = [
    {
      name: "Tari",
      role: "Pengusaha Kue Kering",
      content:
        '""Pakai jasa Hakiva tuh ngebantu banget. Cepat, jelas, dan nggak ribet sama sekali!"',
      imageSrc: "/tari.jpg",
    },
    {
      name: "Feti",
      role: "Owner Nayra Beauty",
      content:
        '"Proses daftar halal ternyata nggak seribet yang saya bayangin. Tim Hakiva jelasin step by step dan bantuin ngurus semuanya sampai sertifikat halal keluar. Usaha jadi makin dipercaya !"',
      imageSrc: "/feti.jpg",
    },
    {
      name: "Rizkan",
      role: "Owner Minuman Herbal Rizherb",
      content:
        '"Awalnya nggak paham prosesnya, tapi dibimbing terus sama tim Hakiva. Sekarang usaha herbal saya udah halal!"',
      imageSrc: "/rizkan.jpg",
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
            Bikin Usaha Kamu Lebih{" "}
            <span className="text-[#0EBCF7]">Berkualitas & Dipercaya</span>
          </>
        }
        description="Dengan Sertifikat Halal Resmi dari BPJPH"
        imageSrc="/halal.png"
        additionalText="Punya usaha makanan, minuman, kosmetik, atau produk lainnya yang digunakan/dikonsumsi ? Kalau iya, kamu wajib mulai berpikir tentang sertifikat halal. Bukan cuma soal label, tapi soal kepercayaan, legalitas, dan masa depan bisnismu."
        imageAlt="Woman with laptop"
      />

      {/* Why Halal Section */}
      <section className="md:py-16 py-10">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center md:text-5xl text-[25px] font-bold">
            Kenapa Sertifikasi Halal Itu Bukan Pilihan,{" "}
            <span className="text-[#0EBCF7]">Tapi Kebutuhan</span> ?
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            <Card className="p-6 shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-cyan-500">
                <Image
                  src="/halal1.png"
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="mb-2 md:text-3xl text-xl font-semibold">
                Demi Kepercayaan Konsumen
              </h3>
              <p className="text-[#5B5B5B] md:text-lg text-sm">
                Lebih dari 87% konsumen muslim memperhatikan sertifikasi halal
                sebelum membeli produk. Dengan label halal resmi dari BPJPH,
                kepercayaan konsumen meningkat, dan pasti lebih tenang.
              </p>
            </Card>
            <Card className="p-6 shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <Image
                  src="/halal2.png"
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="mb-2 md:text-3xl text-xl font-semibold">
                Sudah Jadi Kewajiban Hukum
              </h3>
              <p className="text-[#5B5B5B] md:text-lg text-sm">
                Berdasarkan UU JPH No. 33 Tahun 2014, semua produk yang beredar
                di Indonesia, wajib bersertifikat halal. Jangan sampai usaha
                Anda terkena sanksi atau dilarang beredar karena tidak memiliki
                sertifikat halal.
              </p>
            </Card>
            <Card className="p-6 shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-500">
                <Image
                  src="/halal3.png"
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="mb-2 md:text-3xl text-xl font-semibold">
                Buka Jalan Luas untuk Bisnis
              </h3>
              <p className="text-[#5B5B5B] md:text-lg text-sm">
                Sertifikat halal membuka peluang ekspor ke negara-negara muslim
                seperti Malaysia, Brunei, dan Timur Tengah. Juga syarat penting
                bagi produk untuk masuk supermarket.
              </p>
            </Card>
            <Card className="p-6 shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-500">
                <Image
                  src="/halal4.png"
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="mb-2 md:text-3xl text-xl font-semibold">
                Naikin Value Produk Kamu
              </h3>
              <p className="text-[#5B5B5B] md:text-lg text-sm">
                Produk bersertifikat halal memiliki nilai jual lebih tinggi di
                pasaran. Konsumen rela membayar lebih untuk produk yang terbukti
                halal, profesional, higienis, dan punya kredibilitas.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                Apa Aja yang{" "}
                <span className="text-[#0EBCF7]">Kamu Dapatkan</span> ?
              </h2>
              <p className="md:text-left text-center md:mb-6 mb-4 md:text-lg text-xs text-[#5B5B5B]">
                Kamu gak perlu pusingin prosesnya yang kelihatan ribet…
              </p>
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

      {/* Requirements Section */}
      <section className="md:py-16 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="md:mb-6 mb-3 md:text-5xl/[1.2] text-xl font-bold text-center md:text-left">
                Syarat Daftar Halal
              </h2>
              <p className="md:text-lg text-sm md:text-left text-center text-[#5B5B5B] md:mb-6 mb-4">
                Mau daftar? Siapin ini dulu ya (tenang, kami pandu semuanya
                kok!):
              </p>
              <ol className="list-decimal md:text-lg text-[13px] md:text-left list-inside text-[#5B5B5B]">
                <li>NIB & Izin Usaha (kami bantu buat kalau belum punya).</li>
                <li>Data produk dan bahan yang digunakan.</li>
                <li>Alamat usaha & lokasi produksi.</li>
                <li>Dokumen pendukung seperti label, & kemasan.</li>
              </ol>
            </div>
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/halalrequired.png"
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

      {/* Consequences Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="md:mb-12 mb-6 text-center md:text-5xl text-2xl font-bold">
            Masih Ragu Daftar Halal? Ini{" "}
            <span className="text-[#0EBCF7]">Dampaknya Kalau Tidak Daftar</span>{" "}
            :
          </h2>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-4 text-center">
            <FeatureCard
              title="Produk kamu gak bisa masuk ke pasar-pasar potensial."
              srcImage="/alert.png"
              row=" mx-auto"
            />
            <FeatureCard
              title="Rawan kehilangan kepercayaan konsumen."
              srcImage="alert.png"
              row=" "
            />
            <FeatureCard
              title="Tidak bisa ikut lelang, tender, atau kerja sama resmi."
              srcImage="alert.png"
              row=" mx-auto"
            />
            <FeatureCard
              title="Terancam sanksi pemerintah."
              srcImage="alert.png"
              row=""
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

      {/* CTA Section */}
      <CTASection
        title={
          <>
            Yuk, <span className="text-[#0EBCF7]">Daftar Halal Sekarang</span>{" "}
            Sebelum Terlambat !
          </>
        }
        description="Gak perlu ribet, kamu tinggal serahkan ke kami — dan kamu bisa fokus jualan & ngembangin usaha."
        buttonText="Konsultasi Sekarang"
        price={{
          original: "IDR 350.000",
          discounted: "IDR 150.000",
        }}
        href="https://nanya.online/hakiva-halal"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
