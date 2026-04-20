import { motion } from "motion/react";
import { 
  Phone, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Construction, 
  ArrowRight,
  MessageCircle,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const WHATSAPP_NUMBER = "6281292293393";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Sokon%20Precast,%20saya%20tertarik%20dengan%20pagar%20panel%20beton.%20Bisa%20minta%20info%20harga?`;

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-app-bg font-sans text-app-text selection:bg-app-accent/30 selection:text-app-accent">
      {/* Navigation */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "border-b border-app-border bg-app-bg/95 py-3 shadow-2xl backdrop-blur-md" : "bg-transparent py-5"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-app-accent font-display font-bold text-slate-950">
              ■
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-white uppercase">
              SOKON <span className="text-app-accent">PRECAST</span>
            </span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {["Keunggulan", "Produk", "Area Layanan", "Testimoni"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className="text-sm font-semibold text-app-muted transition-colors hover:text-app-accent"
              >
                {item}
              </a>
            ))}
            <a 
              href={WHATSAPP_URL}
              className="flex items-center gap-2 rounded-lg bg-app-accent px-6 py-2.5 text-sm font-bold text-slate-950 transition-all hover:scale-105 active:scale-95"
            >
              <Phone size={16} />
              Konsultasi Gratis
            </a>
          </div>

          <button className="md:hidden text-app-text" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-0 top-full w-full border-b border-app-border bg-app-card p-4 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {["Keunggulan", "Produk", "Area Layanan", "Testimoni"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(" ", "-")}`} 
                  className="text-lg font-medium text-app-text"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href={WHATSAPP_URL}
                className="flex items-center justify-center gap-2 rounded-lg bg-app-accent py-3 font-bold text-slate-950"
              >
                <MessageCircle size={20} />
                WhatsApp Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-hero-gradient pt-20">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/construction-site/1920/1080" 
            alt="Pabrik Pagar Panel Beton Bogor" 
            className="h-full w-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded bg-app-accent/10 px-3 py-1 text-[11px] font-bold tracking-[2px] text-app-accent uppercase outline outline-1 outline-app-accent/20">
                <Construction size={14} />
                Produsen Langsung Bogor
              </div>
              <h1 className="font-display text-4xl font-black leading-[1.1] text-white sm:text-6xl lg:text-7xl">
                Pabrik Pagar Panel Beton Bogor <br />
                <span className="text-app-accent">Harga Langsung Produsen</span>
              </h1>
              <div className="mt-6 mb-8 h-1 w-16 bg-app-accent"></div>
              <p className="mt-6 text-lg text-app-muted sm:text-xl max-w-[90%]">
                Produksi mandiri dengan standar mutu K-225 hingga K-300. Solusi pagar beton kuat, cepat pasang, dan tahan cuaca untuk wilayah Bogor dan seluruh Jabodetabek.
              </p>
              
              <div className="mt-10 flex flex-col gap-4 sm:flex-row items-center">
                <a 
                  href={WHATSAPP_URL}
                  className="flex items-center justify-center gap-3 rounded-lg bg-app-accent px-8 py-4 font-display text-lg font-bold text-slate-950 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-app-accent/10"
                >
                  <MessageCircle size={24} />
                  Chat WhatsApp Sekarang
                </a>
                
                <div className="flex gap-8 px-4">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white">10+</span>
                    <span className="text-[10px] text-app-muted uppercase font-bold tracking-wider">Thn Pengalaman</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white">500+</span>
                    <span className="text-[10px] text-app-muted uppercase font-bold tracking-wider">Proyek Selesai</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Keunggulan Section */}
      <section id="keunggulan" className="py-24 border-y border-app-border/30 bg-app-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-app-accent font-bold text-[11px] uppercase tracking-[2px] mb-4 block">Keunggulan Kami</span>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Spesialis Pagar Panel Beton Bogor
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 bg-app-accent"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { 
                icon: <Construction className="text-app-accent" size={24} />, 
                title: "Harga Langsung Pabrik", 
                desc: "Hemat biaya tanpa perantara distributor karena Anda membeli langsung dari pabrik kami di Bogor." 
              },
              { 
                icon: <ShieldCheck className="text-app-accent" size={24} />, 
                title: "Beton Mutu K-225/K-300", 
                desc: "Campuran beton pilihan yang teruji kekuatan tekanan dan ketahanannya untuk perlindungan jangka panjang." 
              },
              { 
                icon: <Clock className="text-app-accent" size={24} />, 
                title: "Pemasangan Cepat", 
                desc: "Estimasi pengerjaan yang akurat dan tim profesional yang memastikan hasil rapi dan kokoh." 
              },
              { 
                icon: <Truck className="text-app-accent" size={24} />, 
                title: "Layanan Kirim & Pasang", 
                desc: "Armada kami siap mengirim ke seluruh Jabodetabek dan menyediakan tim pasang ahli." 
              },
              { 
                icon: <CheckCircle2 className="text-app-accent" size={24} />, 
                title: "Tahan Segala Cuaca", 
                desc: "Material beton precast yang tahan terhadap panas, hujan, korosi, dan tidak berkarat selamanya." 
              },
              { 
                icon: <MapPin className="text-app-accent" size={24} />, 
                title: "Garansi Kualitas", 
                desc: "Kepuasan pelanggan di area Bogor adalah prioritas kami dengan jaminan kualitas struktur." 
              }
            ].map((feature, idx) => (
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                key={idx} 
                className="group rounded-xl border border-app-border bg-app-card p-8 transition-all hover:border-app-accent/50"
              >
                <div className="mb-6 inline-flex rounded-lg bg-white/5 p-3 outline outline-1 outline-white/10 group-hover:bg-app-accent/10 group-hover:outline-app-accent/30 transition-all">
                  {feature.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-app-muted text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Produk & Spesifikasi */}
      <section id="produk" className="py-24 bg-app-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <span className="text-app-accent font-bold text-[11px] uppercase tracking-[2px] mb-4 block">Spesifikasi Produk</span>
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Produk Ready Stock & <span className="text-app-accent">Kualitas Terjamin</span>
              </h2>
              
              <div className="mt-10 grid gap-4">
                {[
                  { label: "Panel Beton", val: "240 x 40 x 5 cm", status: "Ready" },
                  { label: "Tiang Kolom", val: "17 x 17 cm", status: "Ready" },
                  { label: "Mutu Beton", val: "K-225 / K-250 / K-300", status: "Standard" },
                  { label: "Kawat Duri", val: "Opsional Tambahan", status: "Tersedia" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 rounded-lg bg-app-card border border-app-border">
                    <div className="flex flex-col">
                      <span className="text-xs text-app-muted font-bold uppercase tracking-wider">{item.label}</span>
                      <span className="text-sm font-semibold">{item.val}</span>
                    </div>
                    <span className="text-[10px] font-black uppercase text-app-accent bg-app-accent/10 px-2 py-1 rounded border border-app-accent/20">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex items-center gap-6">
                <a 
                  href={WHATSAPP_URL}
                  className="rounded-lg bg-app-accent px-8 py-3 text-sm font-bold text-slate-950 transition-all hover:scale-105 active:scale-95"
                >
                  Download Pricelist
                </a>
                <span className="text-[11px] font-bold text-app-muted uppercase tracking-widest leading-none">
                  *Harga menyesuaikan <br /> volume pesanan
                </span>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-app-border bg-app-card p-2 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/precast-concrete/800/600" 
                  alt="Detail Pagar Panel Beton" 
                  className="h-full w-full rounded-xl object-cover grayscale opacity-70"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 hidden lg:block h-32 w-32 items-center justify-center rounded-2xl border border-app-accent/30 bg-app-bg p-6 text-center shadow-2xl">
                 <div className="text-app-accent font-black text-3xl mb-1 italic">SNI</div>
                 <div className="text-[9px] font-bold text-app-text uppercase tracking-widest">Standard Kualitas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Area Layanan */}
      <section id="area-layanan" className="py-24 bg-app-bg border-t border-app-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="mb-16">
              <span className="text-app-accent font-bold text-[11px] uppercase tracking-[2px] mb-4 block">Area Layanan Bogor</span>
              <h2 className="font-display text-3xl font-bold text-white">Distribusi Cepat Jabodetabek</h2>
              <div className="mt-4 h-1 w-12 bg-app-accent"></div>
           </div>
           
           <div className="flex flex-wrap gap-3 mb-16">
            {["Bogor Kota", "Cibinong", "Citeureup", "Sentul", "Gunung Putri", "Cileungsi", "Depok", "Bekasi", "Jakarta"].map((area) => (
              <span key={area} className="bg-app-accent/5 text-app-accent border border-app-accent/20 px-4 py-2 rounded-lg text-sm font-bold hover:bg-app-accent hover:text-black transition-all cursor-default">
                {area}
              </span>
            ))}
           </div>

           <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="rounded-2xl border border-app-border bg-app-card p-12 relative overflow-hidden group">
                <div className="relative z-10">
                  <span className="text-app-accent font-bold text-[11px] uppercase tracking-[2px] mb-3 block">Testimoni Real</span>
                  <p className="text-lg italic text-app-muted leading-relaxed mb-6 border-l-2 border-app-accent pl-6">
                    "Respon sangat cepat, pengiriman ke Sentul tepat waktu dan tukang pasangnya sangat ahli. Rekomendasi untuk yang cari pagar panel beton di Bogor."
                  </p>
                  <div className="font-bold text-white text-sm">Bpk. Ahmad</div>
                  <div className="text-app-accent text-[10px] font-bold uppercase">Developer Sentul City</div>
                </div>
                <div className="absolute -right-8 -bottom-8 text-white/5 group-hover:text-app-accent/5 transition-colors">
                  <MessageCircle size={150} />
                </div>
              </div>

              <div>
                <span className="text-app-accent font-bold text-[11px] uppercase tracking-[2px] mb-4 block">Hubungi Pabrik Kami</span>
                <div className="text-4xl font-extrabold text-white mb-2 font-display tracking-tight">0812-9229-3393</div>
                <div className="text-sm text-app-muted mb-8 italic">Jl. Raya Bogor - Sukabumi KM 15, Bogor.</div>
                <div className="flex h-32 w-full items-center justify-center rounded-xl bg-app-card border-2 border-dashed border-app-border font-bold text-[10px] text-app-muted uppercase tracking-widest">
                  View Factory Map Location
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-app-accent py-20 px-4 text-slate-950 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-black blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-black blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <h2 className="font-display text-4xl font-black italic">
            PESAN SEKARANG - HARGA PROMO
          </h2>
          <p className="mt-6 text-xl font-bold opacity-80 max-w-2xl mx-auto">
            Dapatkan penawaran harga terbaik hari ini. Tim kami siap melakukan survei lokasi gratis untuk wilayah Bogor dan sekitarnya.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-slate-950 px-12 py-5 text-white shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle size={24} className="text-app-accent" />
              <span className="font-display text-xl font-bold">Chat WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-app-bg border-t border-app-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 flex items-center justify-center rounded bg-app-accent font-bold text-[10px] text-black">■</div>
            <span className="text-[12px] font-bold text-app-muted uppercase tracking-widest">
              © 2024 Solusindo Konstruksi (Sokon Precast) - Pabrik Pagar Panel Beton Bogor Terpercaya
            </span>
          </div>
          <div className="text-[10px] text-app-muted font-bold uppercase tracking-widest">
            www.sokonprecast.com | WhatsApp: 081292293393
          </div>
        </div>
      </footer>

      {/* Sticky WA */}
      <a 
        href={WHATSAPP_URL}
        className="fixed bottom-10 right-10 z-[60] bg-[#25d366] text-white px-6 py-3 rounded-full font-bold flex items-center gap-3 shadow-2xl transition-transform hover:scale-110 active:scale-95 group"
      >
        <MessageCircle size={24} />
        <span className="text-sm">💬 Hubungi Admin</span>
        <div className="absolute inset-0 rounded-full animate-ping bg-[#25d366] opacity-20 -z-10"></div>
      </a>

      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </div>
  );
}
