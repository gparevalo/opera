import { HelmetProvider, Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n";
import { Layout } from "@/layout/Layout";
import { motion } from "framer-motion";
import { whatsappHref, OPERA_CONTACT_EMAIL } from "@/lib/site";
import { MessageCircle, Mail, CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const { t, language } = useLanguage();
  const cp = t.contact_page;
  const [role, setRole] = useState("specialist");

  const whatsappMsg =
    language === "es"
      ? "Hola, me gustaría más información sobre Ópera Surgical Center."
      : "Hello, I would like more information about Ópera Surgical Center.";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const email = fd.get("email") as string;
    const phone = fd.get("phone") as string;
    const message = fd.get("message") as string;

    const body = `Nombre: ${name}%0ATeléfono: ${phone}%0ARol: ${role}%0A%0AMensaje: ${message}`;
    const subject = encodeURIComponent("Solicitud de información · Ópera Surgical Center");
    window.location.href = `mailto:${OPERA_CONTACT_EMAIL}?subject=${subject}&body=${body}&from=${encodeURIComponent(email)}`;
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${cp.title} · ${t.metadata.base_title_suffix}`}</title>
        <meta name="description" content={cp.intro} />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="opera-page-hero py-28 md:py-40">
          <div className="scene-glow" />
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="opera-eyebrow mb-4">{t.metadata.base_title_suffix}</p>
              <h1 className="opera-display max-w-2xl">{cp.title}</h1>
              <p className="opera-lead mt-5 max-w-2xl">{cp.intro}</p>
            </motion.div>
          </div>
        </section>

        {/* Main content */}
        <section className="opera-section opera-section-midnight py-24 md:py-32">
          <div className="scene-glow" />
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-start">
              {/* Quick actions */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-4"
              >
                <h2 className="font-heading font-bold text-opera-ivory text-xl mb-2">{cp.quick}</h2>

                {[
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    sub: language === "es" ? "Respuesta inmediata a coordinación" : "Immediate response to coordination",
                    href: whatsappHref(whatsappMsg),
                    external: true,
                    color: "text-emerald-400",
                  },
                  {
                    icon: Mail,
                    label: OPERA_CONTACT_EMAIL,
                    sub: language === "es" ? "Correo oficial" : "Official email",
                    href: `mailto:${OPERA_CONTACT_EMAIL}`,
                    external: false,
                    color: "text-opera-amber",
                  },
                  {
                    icon: MapPin,
                    label: "Quito, Ecuador",
                    sub: language === "es" ? "Centro quirúrgico privado" : "Private surgical center",
                    href: "https://maps.google.com/?q=Quito+Ecuador",
                    external: true,
                    color: "text-opera-amber/70",
                  },
                ].map(({ icon: Icon, label, sub, href, external, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group opera-glass-card-dark flex items-start gap-4 hover:border-opera-amber/20 transition-all duration-300"
                  >
                    <Icon className={`h-6 w-6 ${color} shrink-0 mt-0.5`} aria-hidden />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-opera-ivory text-sm truncate">{label}</p>
                      <p className="text-xs text-opera-ivory/45 mt-0.5">{sub}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-opera-ivory/20 group-hover:text-opera-amber/50 group-hover:translate-x-0.5 transition-all duration-300 shrink-0 mt-0.5" aria-hidden />
                  </a>
                ))}
              </motion.div>

              {/* Contact form */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="opera-glass-card-dark"
              >
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-opera-ivory/60 mb-2 uppercase tracking-wide">
                        {cp.form_name}
                      </label>
                      <input
                        name="name"
                        required
                        className="w-full rounded-lg border border-white/10 bg-white/05 px-4 py-3 text-sm text-opera-ivory placeholder-opera-ivory/25 focus:border-opera-amber/40 focus:outline-none focus:ring-1 focus:ring-opera-amber/20 transition-colors"
                        placeholder={cp.form_name}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-opera-ivory/60 mb-2 uppercase tracking-wide">
                        {cp.form_email}
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-white/10 bg-white/05 px-4 py-3 text-sm text-opera-ivory placeholder-opera-ivory/25 focus:border-opera-amber/40 focus:outline-none focus:ring-1 focus:ring-opera-amber/20 transition-colors"
                        placeholder={cp.form_email}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-opera-ivory/60 mb-2 uppercase tracking-wide">
                        {cp.form_phone}
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        className="w-full rounded-lg border border-white/10 bg-white/05 px-4 py-3 text-sm text-opera-ivory placeholder-opera-ivory/25 focus:border-opera-amber/40 focus:outline-none focus:ring-1 focus:ring-opera-amber/20 transition-colors"
                        placeholder="+593..."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-opera-ivory/60 mb-2 uppercase tracking-wide">
                        {cp.form_role}
                      </label>
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full rounded-lg border border-white/10 bg-[#060e16] px-4 py-3 text-sm text-opera-ivory focus:border-opera-amber/40 focus:outline-none focus:ring-1 focus:ring-opera-amber/20 transition-colors"
                      >
                        <option value="specialist">{cp.form_role_specialist}</option>
                        <option value="patient">{cp.form_role_patient}</option>
                        <option value="partner">{cp.form_role_partner}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-opera-ivory/60 mb-2 uppercase tracking-wide">
                      {cp.form_message}
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      className="w-full rounded-lg border border-white/10 bg-white/05 px-4 py-3 text-sm text-opera-ivory placeholder-opera-ivory/25 focus:border-opera-amber/40 focus:outline-none focus:ring-1 focus:ring-opera-amber/20 transition-colors resize-none"
                      placeholder={cp.form_message}
                    />
                  </div>

                  <button type="submit" className="opera-btn opera-btn-primary w-full">
                    <CalendarDays className="h-4 w-4" aria-hidden />
                    {cp.form_submit}
                  </button>

                  <p className="text-xs text-opera-ivory/30 text-center">{cp.form_note}</p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </HelmetProvider>
  );
}
