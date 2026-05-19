import { useLanguage } from "@/i18n";
import { Layout } from "@/layout/Layout";
import { SeoHead } from "@/components/SeoHead";
import { motion } from "framer-motion";
import { whatsappHref, OPERA_CONTACT_EMAIL } from "@/lib/site";
import { MessageCircle, Mail, Calendar, MapPin, ArrowRight } from "lucide-react";
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

  const inputStyle: React.CSSProperties = {
    width: "100%",
    borderRadius: "0.75rem",
    border: "1px solid var(--op-border)",
    background: "var(--op-canvas)",
    padding: "0.8125rem 1rem",
    fontSize: "0.875rem",
    color: "var(--op-ink)",
    outline: "none",
    transition: "border-color 0.3s, box-shadow 0.3s",
    fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "10.5px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    color: "var(--op-fog)",
    marginBottom: "0.5rem",
  };

  return (
    <>
      <SeoHead
        title="Contacto | Agendar Visita · Ópera Surgical Center Quito"
        description="Agenda un recorrido privado por Ópera Surgical Center en Quito. Contacta a coordinación por WhatsApp o correo. Respuesta inmediata para especialistas, pacientes y socios."
        path="/contacto"
        ogTitle="Contacto — Agendar Visita · Ópera Surgical Center"
        ogDescription="Agenda un recorrido privado por Ópera Surgical Center en Quito. WhatsApp directo a coordinación. Respuesta inmediata."
      />

      <Layout>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden" style={{ background: "var(--op-canvas)" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden style={{
            background: `
              radial-gradient(ellipse 65% 55% at 80% 0%, rgba(43,122,140,0.07) 0%, transparent 60%),
              radial-gradient(ellipse 45% 40% at 10% 100%, rgba(148,98,81,0.04) 0%, transparent 55%)
            `
          }} />
          <div className="grain-overlay" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 pt-36 pb-24 md:pt-44 md:pb-32">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <span className="t-eyebrow">{t.metadata.base_title_suffix}</span>
              <h1 className="t-display-xl mt-6">{cp.title}</h1>
              <p className="t-lead mt-6 max-w-2xl">{cp.intro}</p>
            </motion.div>
          </div>
        </section>

        {/* ── Main ── */}
        <section className="relative overflow-hidden" style={{ background: "var(--op-surface)", borderTop: "1px solid var(--op-border)" }}>
          <div className="scene-glow-dark" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-24 md:py-36">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-start">

              {/* Quick actions */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-4"
              >
                <h2 className="t-headline mb-2">{cp.quick}</h2>

                {[
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    sub: language === "es" ? "Respuesta inmediata a coordinación" : "Immediate response to coordination",
                    href: whatsappHref(whatsappMsg),
                    external: true,
                    iconColor: "#25D366",
                  },
                  {
                    icon: Mail,
                    label: OPERA_CONTACT_EMAIL,
                    sub: language === "es" ? "Correo oficial" : "Official email",
                    href: `mailto:${OPERA_CONTACT_EMAIL}`,
                    external: false,
                    iconColor: "var(--op-amber)",
                  },
                  {
                    icon: MapPin,
                    label: "Quito, Ecuador",
                    sub: language === "es" ? "Centro quirúrgico privado" : "Private surgical center",
                    href: "https://maps.google.com/?q=Quito+Ecuador",
                    external: true,
                    iconColor: "var(--op-mist)",
                  },
                ].map(({ icon: Icon, label, sub, href, external, iconColor }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group card-glass flex items-start gap-4 p-5 no-underline"
                    style={{ textDecoration: "none" }}
                  >
                    <Icon className="h-6 w-6 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: iconColor }} aria-hidden />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate" style={{ color: "var(--op-ink)" }}>{label}</p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--op-fog)" }}>{sub}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 mt-0.5 transition-all duration-300 group-hover:translate-x-0.5"
                      style={{ color: "var(--op-amber-line)" }} aria-hidden />
                  </a>
                ))}

                {/* Schedule CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="p-6 mt-2 rounded-[1.5rem]"
                  style={{ background: "var(--op-amber-dim)", border: "1px solid var(--op-amber-line)" }}
                >
                  <p className="text-sm font-semibold mb-2" style={{ color: "var(--op-amber)" }}>
                    {language === "es" ? "¿Prefiere hablar directamente?" : "Prefer to speak directly?"}
                  </p>
                  <p className="text-xs mb-4" style={{ color: "var(--op-mist)" }}>
                    {language === "es"
                      ? "Agendamos un recorrido privado sin compromiso."
                      : "Book a private tour with no commitment."}
                  </p>
                  <a href={whatsappHref(whatsappMsg)} target="_blank" rel="noopener noreferrer"
                    className="btn btn-whatsapp w-full flex items-center justify-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </motion.div>
              </motion.div>

              {/* Contact form */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="card p-8"
              >
                <h3 className="font-display font-semibold text-lg mb-6" style={{ color: "var(--op-ink)" }}>
                  {language === "es" ? "Enviar mensaje" : "Send message"}
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label style={labelStyle}>{cp.form_name}</label>
                      <input name="name" required style={inputStyle} placeholder={cp.form_name}
                        onFocus={(e) => {
                          e.target.style.borderColor = "var(--op-amber)";
                          e.target.style.boxShadow = "0 0 0 3px var(--op-amber-dim)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "var(--op-border)";
                          e.target.style.boxShadow = "none";
                        }} />
                    </div>
                    <div>
                      <label style={labelStyle}>{cp.form_email}</label>
                      <input name="email" type="email" required style={inputStyle} placeholder={cp.form_email}
                        onFocus={(e) => {
                          e.target.style.borderColor = "var(--op-amber)";
                          e.target.style.boxShadow = "0 0 0 3px var(--op-amber-dim)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "var(--op-border)";
                          e.target.style.boxShadow = "none";
                        }} />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label style={labelStyle}>{cp.form_phone}</label>
                      <input name="phone" type="tel" style={inputStyle} placeholder="+593..."
                        onFocus={(e) => {
                          e.target.style.borderColor = "var(--op-amber)";
                          e.target.style.boxShadow = "0 0 0 3px var(--op-amber-dim)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "var(--op-border)";
                          e.target.style.boxShadow = "none";
                        }} />
                    </div>
                    <div>
                      <label style={labelStyle}>{cp.form_role}</label>
                      <select value={role} onChange={(e) => setRole(e.target.value)}
                        style={{ ...inputStyle, background: "var(--op-canvas)" }}>
                        <option value="specialist">{cp.form_role_specialist}</option>
                        <option value="patient">{cp.form_role_patient}</option>
                        <option value="partner">{cp.form_role_partner}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>{cp.form_message}</label>
                    <textarea name="message" rows={5} style={{ ...inputStyle, resize: "none" }}
                      placeholder={cp.form_message}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--op-amber)";
                        e.target.style.boxShadow = "0 0 0 3px var(--op-amber-dim)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--op-border)";
                        e.target.style.boxShadow = "none";
                      }} />
                  </div>

                  <button type="submit" className="btn btn-amber w-full flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {cp.form_submit}
                  </button>
                  <p className="text-xs text-center" style={{ color: "var(--op-fog)" }}>
                    {cp.form_note}
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
