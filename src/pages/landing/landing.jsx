import React from "react";
import { useNavigate } from "react-router-dom";
import heroBg from "../../assets/hero-farmland-tractor.jpeg";
import statsBg from "../../assets/stats-dark-green-bg.jpeg";
import beigeBg from "../../assets/beige-soil-texture-bg.jpeg";

import step1Img from "../../assets/step-1-farmer-tablet.jpeg";
import step2Img from "../../assets/step-2-handshake-agreement.jpeg";
import step3Img from "../../assets/step-3-digital-process.jpeg";
import yazilarImg from "../../assets/yazilar.png";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="h-screen overflow-y-scroll snap-y scroll-smooth bg-[#07110d] text-white">
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex items-center justify-between">
            <div
              className="text-lg md:text-xl font-semibold tracking-tight text-white"
              style={{ textShadow: "0 2px 18px rgba(0,0,0,.65)" }}
            >
              Toprağım
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/login")}
                className="rounded-full bg-white/10 px-5 py-2 text-sm ring-1 ring-white/15 backdrop-blur hover:bg-white/15 transition"
                style={{ textShadow: "0 2px 18px rgba(0,0,0,.45)" }}
              >
                Giriş Yap
              </button>
              <button
                onClick={() => navigate("/register")}
                className="rounded-full bg-[#1f3a2f] px-5 py-2 text-sm font-medium hover:bg-[#234536] transition"
              >
                Kaydol
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-[#07110d]" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-semibold tracking-tight">
            Toprağını
            <br />
            <span className="font-bold">Güvenle Kirala</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-white/85 text-base md:text-lg">
            Çiftçiler ve arazi sahipleri arasında güvenli ve şeffaf kiralama
            deneyimi.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => navigate("/login")}
              className="rounded-full bg-[#1f3a2f] px-7 py-3.5 text-sm md:text-base font-medium shadow-lg shadow-black/20 hover:bg-[#234536] transition"
            >
              İlanları Keşfet
            </button>
            <button
              onClick={() => navigate("/login")}
              className="rounded-full bg-white/15 px-7 py-3.5 text-sm md:text-base font-medium ring-1 ring-white/20 backdrop-blur hover:bg-white/20 transition"
            >
              İlan Ver
            </button>
          </div>

          <div className="mx-auto mt-10 w-full max-w-4xl">
            <div className="flex flex-col md:flex-row items-stretch gap-2 rounded-2xl bg-white/10 p-2 ring-1 ring-white/15 backdrop-blur">
              <div className="flex-1 rounded-xl bg-white/10 px-5 py-3.5 text-sm text-white/85">
                Konum (İl, İlçe)
              </div>
              <div className="flex-1 rounded-xl bg-white/10 px-5 py-3.5 text-sm text-white/85">
                m²
              </div>
              <div className="flex-1 rounded-xl bg-white/10 px-5 py-3.5 text-sm text-white/85">
                Bütçe (TL)
              </div>
              <button className="rounded-xl bg-[#1f3a2f] px-7 py-3.5 text-sm font-medium hover:bg-[#234536] transition">
                Ara
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={statsBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          draggable={false}
        />
        <div className="absolute inset-0 bg-[#07110d]/65" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-white/95">
            Binlerce arazi atıl durumda.
          </h2>

          <div className="mt-12 grid w-full max-w-5xl grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { v: "50.000+", t: "Dönüm Boş Arazi" },
              { v: "₺1.5 Milyar", t: "Yıllık Kayıp" },
              { v: "%40", t: "Verimsiz Kullanım" },
            ].map((s) => (
              <div
                key={s.t}
                className="rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur p-8 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold">{s.v}</div>
                <div className="mt-2 text-white/70 text-sm">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EKOSİSTEM + STEPS ================= */}
      <section
        id="ekosistem"
        className="relative min-h-screen overflow-hidden text-[#0b1410]"
      >
        <img
          src={beigeBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          draggable={false}
        />
        <div className="absolute inset-0 bg-white/80" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          {/* ===== ÜST KISIM ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-semibold">
                Güvenli Kiralama Ekosistemi
              </h3>

              <p className="mt-6 text-[#0b1410]/75 max-w-lg text-base">
                Doğrulanmış profiller, güvenli mesajlaşma ve dijital sözleşme
                ile kiralama sürecini tek yerden yönetin.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#1f3a2f]/10 px-4 py-2 text-sm ring-1 ring-black/10">
                  ✅ Kimlik Onayı
                </span>
                <span className="rounded-full bg-[#1f3a2f]/10 px-4 py-2 text-sm ring-1 ring-black/10">
                  💬 Mesajlaşma
                </span>
                <span className="rounded-full bg-[#1f3a2f]/10 px-4 py-2 text-sm ring-1 ring-black/10">
                  📝 Dijital Sözleşme
                </span>
                <span className="rounded-full bg-[#1f3a2f]/10 px-4 py-2 text-sm ring-1 ring-black/10">
                  🗺️ Harita / Parsel
                </span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={yazilarImg}
                alt="Ekosistem UI"
                className="w-full max-w-2xl"
                draggable={false}
              />
            </div>
          </div>

          {/* ===== STEPS  ===== */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <StepCard
              img={step1Img}
              title="1. İlan Ver veya Keşfet"
              desc="Arazi detaylarını girip ilan yayınlayın veya kiralayacak verimli toprakları keşfedin."
              variant="light"
            />
            <StepCard
              img={step2Img}
              title="2. Güvenle Anlaş"
              desc="Doğrulanmış kullanıcılarla güvenli şekilde teklif verip kiralamayı onayla."
              variant="dark"
            />
            <StepCard
              img={step3Img}
              title="3. Dijital Süreç"
              desc="Mesajlaş, şartlarda anlaş, kira sözleşmesini dijital olarak düzenle."
              variant="light"
            />
          </div>

          {/* ===== FOOTER ===== */}
          <footer className="mt-16 border-t border-black/10 pt-6 text-xs text-[#0b1410]/50 text-center">
            © {new Date().getFullYear()} Toprağım · Gizlilik · Kullanım
          </footer>
        </div>
      </section>
    </div>
  );
}

function StepCard({ img, title, desc, variant = "light" }) {
  const isDark = variant === "dark";
  return (
    <div
      className={[
        "overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/10",
        isDark ? "bg-[#143126] text-white" : "bg-white/75 text-[#0b1410]",
      ].join(" ")}
    >
      <div className="h-48">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>
      <div className="p-6">
        <div className="text-sm font-semibold">{title}</div>
        <p
          className={[
            "mt-2 text-sm",
            isDark ? "text-white/75" : "text-[#0b1410]/70",
          ].join(" ")}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}
