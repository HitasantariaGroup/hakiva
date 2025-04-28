import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Award, Zap, MessageCircle } from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { CTASection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import Link from "next/link";

export default function HomePage() {
  const testimonials = [
    {
      name: "Feti",
      role: "Pengusaha Kuliner",
      content:
        '"Proses pendaftaran merek sangat mudah dan cepat. Tim Hakiva sangat membantu dari awal hingga akhir."',
      imageSrc: "/feti.jpg",
    },
    {
      name: "Adrik",
      role: "Fashion Designer",
      content:
        '"Sangat puas dengan layanan Hakiva. Merek saya sekarang terlindungi secara hukum dengan biaya yang terjangkau."',
      imageSrc: "/adrik.jpg",
    },
    {
      name: "Yogi",
      role: "Startup Founder",
      content:
        '"Hakiva memberikan solusi yang tepat untuk perlindungan merek startup kami. Prosesnya transparan dan profesional."',
      imageSrc: "/yogi.jpg",
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
            Lindungi <span className="text-[#0EBCF7]">Brand</span> Kamu, Sebelum
            Terlambat!
          </>
        }
        description="Kamu udah capek-capek bangun brand... jangan sampai direbut orang lain cuma karena belum daftar merek."
        imageSrc="/herohaki.png"
        additionalText="Daftar merek itu bukan cuma formalitas — ini adalah langkah penting buat mengamankan identitas usaha kamu."
        imageAlt="Woman with laptop"
      />

      {/* Why Register Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="md:mb-12 mb-6 text-center md:text-5xl text-2xl font-bold">
            Kenapa Harus <span className="text-[#0EBCF7]">Daftar Merek</span> ?
          </h2>
          <p className="mb-8 text-center text-gray-600 md:text-lg text-sm">
            Karena di dunia usaha, nama brand itu aset. Kalau kamu belum
            daftarin merek ke HAKI, kamu belum punya hak resmi atas nama
            tersebut. Artinya:
          </p>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3 text-center">
            <FeatureCard
              title="Siapa pun bisa klaim nama brand kamu."
              srcImage="/alert.png"
              row=" mx-auto"
            />
            <FeatureCard
              title="Kamu bisa dituntut kalau tanpa sadar pakai merek yang udah didaftarin orang."
              srcImage="alert.png"
              row=" mx-auto"
            />
            <FeatureCard
              title="Brand kamu bisa kehilangan kepercayaan karena terlihat nggak profesional."
              srcImage="alert.png"
              row=" mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="md:py-16 py-10">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 md:text-5xl text-2xl text-center font-bold">
            Bukti Nyata Daftar Merek itu{" "}
            <span className="text-[#0EBCF7]">Gak Bisa Diunda</span>!
          </h2>
          <div className="md:mb-12 mb:6 grid grid-cols-1 md:gap-6 md:grid-cols-2 items-center">
            <div className=" overflow-hidden rounded-lg p-4">
              <h2 className="md:text-3xl text-base font-semibold text-center md:text-left">
                Kamu pasti pernah denger drama hukum antara MS Glow dan PS Glow,
                kan ?
              </h2>
              <br />
              <ol className="list-decimal list-inside text-[#5B5B5B] md:text-lg text-xs md:mb-[20px] mb-[10px]">
                <li>
                  MS Glow – brand skincare yang udah booming duluan, viral,
                  punya jutaan followers.
                </li>
                <br />
                <li>
                  PS Glow – brand pendatang baru, tapi langsung daftar merek ke
                  DJKI lebih dulu.
                </li>
              </ol>
              <p className="text-[#5B5B5B] md:text-lg text-xs">Hasilnya?</p>
              <ol className="list-disc list-inside text-[#5B5B5B] md:text-lg text-xs">
                <li>
                  MS Glow kalah gugatan dan dinyatakan melanggar hak merek!
                </li>
                <li>
                  MS Glow diwajibkan bayar ganti rugi Rp 37 miliar dan menarik
                  produk-produknya
                </li>
                <li>
                  Semua ini terjadi bukan karena siapa yang lebih terkenal, tapi
                  siapa yang lebih dulu daftar merek.
                </li>
              </ol>
            </div>
            <div className="order-first overflow-hidden rounded-lg p-4 flex justify-center">
              <Image
                src="/example1.png"
                alt=""
                width={400}
                height={225}
                className=" my-6"
              />
            </div>
          </div>
          <div className="mb-12 grid grid-cols-1 md:gap-6 md:grid-cols-2 items-center">
            <div className=" overflow-hidden rounded-lg p-4">
              <h2 className="md:text-3xl text-base font-semibold text-center md:text-left">
                Mungkin kamu pernah lihat di mall atau online, ada dua jenis
                brand POLO:
              </h2>
              <br />
              <ol className="list-decimal list-inside text-[#5B5B5B] md:text-lg text-xs md:mb-[20px] mb-[10px]">
                <li>
                  POLO by Ralph Lauren — brand fashion asal Amerika, yang global
                  dan ikonik.
                </li>
                <br />
                <li>
                  POLO Club Indonesia — produk lokal yang dijual bebas di
                  Indonesia, bahkan ada tokonya di mall besar.
                </li>
              </ol>
              <p className="text-[#5B5B5B] md:text-lg text-xs">
                Nah, fakta yang mengejutkan:
              </p>
              <ol className="list-disc list-inside text-[#5B5B5B] md:text-lg text-xs">
                <li>
                  Di Indonesia, merek POLO Club lokal yang resmi terdaftar di
                  HAKI sejak lama.
                </li>
                <li>
                  Ralph Lauren bahkan pernah kalah dalam gugatan hukum karena
                  dianggap telat daftar merek di Indonesia.
                </li>
                <br />
                <p>
                  Yes! Kamu gak salah baca. Brand internasional segede Ralph
                  Lauren aja bisa kalah karena telat daftar merek !
                </p>
              </ol>
            </div>

            <div className="order-first md:order-last overflow-hidden rounded-lg p-4 flex justify-center">
              <Image
                src="/example2.png"
                alt=""
                width={400}
                height={225}
                className=" my-6"
              />
            </div>
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
                width={500}
                height={500}
                className="md:absolute md:mt-[-45px] hidden sm:block"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 md:text-5xl text-xl font-bold text-center md:text-left">
                Dengan Daftar Merek, Kamu Dapat{" "}
                <span className="text-[#0EBCF7]">Perlindungan Resmi</span>
              </h2>
              <ul className="space-y-4 md:text-lg text-[#5B5B5B] text-xs mx-auto md:mx-[0px]">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
                  <span className="my-auto">
                    Nama dan logo brand kamu punya hak eksklusif.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
                  <span className="my-auto">
                    Nggak bisa dipakai orang lain tanpa izin.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
                  <span className="my-auto">
                    Bisa diwariskan, dijual, bahkan dilisensikan.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
                  <span className="my-auto">
                    Bikin bisnis kamu naik kelas dan lebih dipercaya.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="md:py-16 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center md:ps-8">
              <h2 className="md:mb-6 md:text-5xl text-xl font-bold text-center md:text-left">
                Tapi Bukannya Daftar Merek{" "}
                <span className="text-[#0EBCF7]">Ribet dan Mahal</span> ?
              </h2>
              <h3 className="md:mb-[20px] mb-[10px] md:text-3xl text-base font-semibold text-center md:text-left">
                Nggak kalau kamu daftar bareng kami !
              </h3>
              <p className="mb-4 text-[#5B5B5B] md:text-lg text-xs text-center md:text-left">
                Kami bantu pendaftaran merek HAKI dari awal sampai tuntas,
                bahkan dengan GRATIS bimbingan. Kamu tinggal duduk santai, kami
                yang urus semuanya.
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
      </section>

      {/* Why Choose Us */}
      <section className="md:py-16 py-8">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center md:text-5xl text-2xl font-bold">
            Kenapa Harus <span className="text-[#0EBCF7]">Pakai Jasa Kami</span>{" "}
            ?
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 items-center justify-items-center md:mx-[40px] lg:mx-[100px]">
            <FeatureCard
              srcImage="/why1.png"
              title="Cepat"
              description="Proses pendaftaran 1 hari kerja."
              bgColor="bg-[#EDEDED]"
              row="grid grid-cols-1 md:grid md:grid-cols-[100px_1fr] grid-cols-[90px_1fr] items-center w-full md:h-full"
            />
            <FeatureCard
              srcImage="/why2.png"
              title="Murah"
              description="Harga bersahabat, cocok buat UMKM dan pebisnis pemula."
              bgColor="bg-[#EDEDED]"
              row="grid grid-cols-1 md:grid md:grid-cols-[100px_1fr] grid-cols-[90px_1fr] items-center w-full h-full"
            />
            <FeatureCard
              srcImage="/why3.png"
              title="Gratis Bimbingan"
              description="Kamu bakal ditemani sampai merek kamu resmi."
              bgColor="bg-[#EDEDED]"
              row="grid grid-cols-1 md:grid md:grid-cols-[100px_1fr] grid-cols-[90px_1fr] items-center w-full h-full"
            />
            <FeatureCard
              srcImage="/why4.png"
              title="Responsif"
              description="Tim kami fast response, siap bantu kapan aja."
              bgColor="bg-[#EDEDED]"
              row="grid grid-cols-1 md:grid md:grid-cols-[100px_1fr] grid-cols-[90px_1fr] items-center w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="md:py-16 py-10">
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
                Belum Yakin? Yuk Konsultasi Dulu,{" "}
                <span className="text-[#0EBCF7]">GRATIS</span>!
              </h2>
              <p className="mb-6 md:text-lg text-xs text-center md:text-left">
                Konsultasikan kebutuhan pendaftaran merek Anda dengan tim ahli
                kami tanpa biaya. Dapatkan saran profesional untuk melindungi
                brand Anda.
              </p>
              <div className="text-center md:text-left">
                <Link href="/">
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

      {/* Testimonials */}
      <TestimonialSection
        title={
          <>
            Ini Kata Mereka Yang{" "}
            <span className="text-[#0EBCF7] md:text-5xl text-2xl">
              Udah Daftar Lewat Kami
            </span>
          </>
        }
        testimonials={testimonials}
      />

      {/* Pricing */}
      <section className="md:py-16 py-10">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-bold md:text-5xl text-2xl">
            Pendaftaran HAKI
          </h2>
          <div className="grid md:grid-cols-2 md:px-[2rem] gap-10 grid-cols-[300px] justify-center ">
            <div className="overflow-hidden rounded-lg bg-[#000E54] p-8 text-white flex flex-col h-full">
              <h3 className="mb-2 text-center md:text-5xl text-2xl font-semibold">
                Paket Standar
              </h3>
              <div className="md:mb-10 mb-5 text-center">
                <span className="text-sm line-through text-semibold md:text-3xl">
                  IDR 2.500.000
                </span>
                <p className="md:text-5xl text-2xl font-semibold text-[#FFD745]">
                  IDR 1.795.000
                </p>
              </div>
              <p className="md:mb-4 mb-2 md:text-lg text-xs">
                Lama proses : 1 hari kerja ⁽¹⁾
              </p>
              <ol className="md:mb-4 mb-2 list-disc list-inside text-white md:text-base text-[10px]">
                <li>Konsultasi HAKI MEREK</li>
                <li>Rekomendasi pemilihan kelas merek</li>
                <li>Rekomendasi pemiihan jenis barang/ jasa</li>
                <li>Bukti permohonan merek</li>
                <li>Monitoring perubahan status merek</li>
                <li>E sertifikat merek ⁽²⁾</li>
              </ol>
              <p className="md:mb-10 mb-5 md:text-lg text-[10px]">
                Bonus : GRATIS 3 Kali cek merek manual
              </p>
              <div className="md:mb-4 mb-2 grid grid-cols-2 text-[#47F3FA] md:grid-cols-[45px_1fr] md:text-xs text-[8px]/[1.5]">
                <p>Note :</p>
                <p>
                  ⁽¹⁾ Setelah draft pendaftaran merek disetujui ⁽²⁾ Sertifikat
                  merek diterbitkan setelah merek dinyatakan berhasil pada masa
                  pengumuman, berlangsung sekitar ± 6 hingga 18 bulan
                </p>
              </div>
              <div className="md:mb-10 mb-5 grid grid-cols-2 text-[#47F3FA] md:grid-cols-[15px_1fr] md:text-xs text-[8px]/[1.5]">
                <p>⁽*⁾</p>
                <p>
                  Harga diatas tidak termasuk biaya pengajuan banding bila
                  terdapat keputusan penolakan merek.
                </p>
              </div>
              <div className="text-center mt-auto">
                <Link href="/">
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
              <h3 className="mb-2 text-center md:text-5xl text-2xl font-semibold">
                Paket Premium
              </h3>
              <div className="md:mb-10 mb-5 text-center">
                <span className="line-through text-semibold md:text-3xl text-base">
                  IDR 2.800.000
                </span>
                <p className="md:text-5xl text-2xl font-semibold text-[#FFD745]">
                  IDR 1.999.000
                </p>
              </div>
              <p className="md:mb-4 mb-2 md:text-lg text-xs">
                Lama proses : 5 hari kerja ⁽¹⁾
              </p>
              <ol className="md:mb-4 mb-2 list-disc list-inside text-white md:text-base text-[10px]">
                <li>Konsultasi HAKI MEREK</li>
                <li>Rekomendasi pemilihan kelas merek</li>
                <li>Rekomendasi pemiihan jenis barang/ jasa</li>
                <li>Bukti permohonan merek</li>
                <li>Monitoring perubahan status merek</li>
                <li>E sertifikat merek ⁽²⁾</li>
                <li>Pembuatan LOGO MEREK</li>
              </ol>
              <p className="md:text-lg text-[10px]">Bonus :</p>
              <ol className="list-disc list-inside md:mb-10 mb-5 text-[10px]">
                <li>GRATIS 3 Kali cek merek manual</li>
                <li>2 pilihan logo</li>
                <li>File master</li>
              </ol>
              <div className="md:mb-4 mb-2 grid grid-cols-2 text-[#47F3FA]  md:grid-cols-[45px_1fr] md:text-xs text-[8px]/[1.5]">
                <p>Note :</p>
                <p>
                  ⁽¹⁾ Setelah draft pendaftaran merek disetujui ⁽²⁾ Sertifikat
                  merek diterbitkan setelah merek dinyatakan berhasil pada masa
                  pengumuman, berlangsung sekitar ± 6 hingga 18 bulan
                </p>
              </div>
              <div className="md:mb-10 mb-5 grid grid-cols-2 text-[#47F3FA]  md:grid-cols-[15px_1fr] md:text-xs text-[8px]/[1.5]">
                <p>⁽*⁾</p>
                <p>
                  Harga diatas tidak termasuk biaya pengajuan banding bila
                  terdapat keputusan penolakan merek.
                </p>
              </div>
              <div className="text-center mt-auto">
                <Link href="/">
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
            Sudah Yakin Mau Daftarin{" "}
            <span className="text-[#0EBCF7]">Merek</span> Kamu?
          </>
        }
        description="Kalau kamu udah mantap, tinggal klik tombol di bawah ini. Kami siap bantu urus semuanya dari A sampai Z. Mulai dari pengecekan, pengajuan, sampai merek kamu resmi terdaftar di HAKI."
        buttonText="Konsultasi Sekarang"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
