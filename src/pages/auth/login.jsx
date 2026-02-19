import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginBg from "../../assets/login-bg.jpeg";
import { useAuth } from "../../context/auth/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login, setAuthError } = useAuth();

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleLogin = async () => {
    setSubmitting(true);
    setAuthError(null);

    try {
      await login({ email, password });
      navigate("/home");
    } catch (e) {
      setAuthError(e?.message || "Giriş başarısız");
      alert("Giriş başarısız: " + (e?.message || ""));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07110d] text-white">
      <img
        src={loginBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-6 py-10 md:grid-cols-2">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Toprağını <br />
            <span className="font-bold">Güvenle Kirala</span>
          </h1>
          <p className="mt-5 max-w-lg text-white/75">
            Tarım arazileri için güvenli, şeffaf ve verimli kiralama platformuna
            hoş geldiniz.
          </p>
        </div>

        <div className="flex w-full justify-center md:justify-end">
          <div className="w-full max-w-md rounded-[28px] border border-white/20 bg-white/10 p-7 shadow-2xl backdrop-blur-xl">
            <div className="text-sm font-semibold text-white/85">Toprağım</div>

            <div className="mt-5 text-3xl font-semibold">Giriş Yap</div>
            <div className="mt-1 text-sm text-white/65">
              Hesabına giriş yap ve güvenli kiralamaya başla
            </div>

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="text-xs text-white/60">
                  E-posta adresiniz
                </label>
                <input
                  type="email"
                  placeholder="ornek@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-white/30 focus:ring-2 focus:ring-white/10"
                />
              </div>

              <div>
                <label className="text-xs text-white/60">Şifre</label>
                <div className="mt-2 flex items-center gap-2 rounded-2xl border border-white/15 bg-black/20 px-4 py-3 focus-within:border-white/30 focus-within:ring-2 focus-within:ring-white/10">
                  <input
                    type={show ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent text-sm outline-none placeholder:text-white/35"
                  />
                  <button
                    type="button"
                    onClick={() => setShow((s) => !s)}
                    className="text-xs text-white/55 hover:text-white"
                  >
                    {show ? "Gizle" : "Göster"}
                  </button>
                </div>
              </div>

              <button
                type="button"
                disabled={submitting}
                onClick={handleLogin}
                className="mt-2 w-full rounded-2xl bg-[#1f3a2f] py-3 text-sm font-semibold hover:bg-[#234536] transition disabled:opacity-60"
              >
                {submitting ? "Giriş yapılıyor..." : "Giriş Yap"}
              </button>

              <div className="pt-2 text-center text-xs text-white/65">
                Hesabın yok mu?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/register")}
                  className="font-semibold text-white hover:underline"
                >
                  Kaydol
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
