import { CinematicSection } from "@/components/site/CinematicSection";
import { GlassCard } from "@/components/site/GlassCard";
import {
  OperaButtonAnchor,
} from "@/components/site/OperaButton";
import { PageShell } from "@/components/site/PageShell";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/i18n";
import { OPERA_CONTACT_EMAIL, whatsappHref } from "@/lib/site";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactoPage() {
  const { t, language } = useLanguage();
  const title = t.contact_page.title;
  const description =
    language === "es"
      ? "Contacto Ópera Surgical Center, Quito."
      : "Contact Ópera Surgical Center, Quito.";

  const waMsg =
    language === "es"
      ? "Hola, quiero contactar a Ópera Surgical Center."
      : "Hello, I would like to contact Ópera Surgical Center.";

  return (
    <PageShell
      title={title}
      description={description}
      canonicalPath="/contacto"
      intro={t.contact_page.intro}
    >
      <CinematicSection tone="ivory" innerClassName="!pt-0">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <GlassCard>
            <h2 className="opera-eyebrow">{t.contact_page.quick}</h2>
            <div className="mt-6 flex flex-col gap-3">
              <OperaButtonAnchor
                href={whatsappHref(waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                className="w-full"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                {t.cta.whatsapp}
              </OperaButtonAnchor>
              <OperaButtonAnchor
                href={`mailto:${OPERA_CONTACT_EMAIL}`}
                variant="secondary"
                className="w-full"
              >
                {OPERA_CONTACT_EMAIL}
              </OperaButtonAnchor>
            </div>
            <ContactForm />
          </GlassCard>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="opera-eyebrow">{t.contact_page.map_title}</h2>
            <div className="opera-image-frame overflow-hidden rounded-2xl">
              <iframe
                title="Mapa Quito"
                src="https://maps.google.com/maps?q=Quito,+Ecuador&z=12&output=embed"
                className="relative z-10 h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </CinematicSection>
    </PageShell>
  );
}

function ContactForm() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Ópera Surgical Center — ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nPerfil: ${role}\n\n${message}`,
    );
    window.location.href = `mailto:${OPERA_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 space-y-5">
      <motion.div className="space-y-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <Label htmlFor="name" className="text-[#004875]/80">
          {t.contact_page.form_name}
        </Label>
        <Input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-opera-blue/15 bg-white/70 backdrop-blur-sm"
        />
      </motion.div>
      <motion.div className="space-y-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <Label htmlFor="email" className="text-[#004875]/80">
          {t.contact_page.form_email}
        </Label>
        <Input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-opera-blue/15 bg-white/70 backdrop-blur-sm"
        />
      </motion.div>
      <motion.div className="space-y-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <Label htmlFor="phone" className="text-[#004875]/80">
          {t.contact_page.form_phone}
        </Label>
        <Input
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border-opera-blue/15 bg-white/70 backdrop-blur-sm"
        />
      </motion.div>
      <motion.div className="space-y-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <Label className="text-[#004875]/80">{t.contact_page.form_role}</Label>
        <Select required value={role} onValueChange={setRole}>
          <SelectTrigger className="border-opera-blue/15 bg-white/70 backdrop-blur-sm">
            <SelectValue placeholder="—" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="specialist">{t.contact_page.form_role_specialist}</SelectItem>
            <SelectItem value="patient">{t.contact_page.form_role_patient}</SelectItem>
            <SelectItem value="partner">{t.contact_page.form_role_partner}</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>
      <motion.div className="space-y-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <Label htmlFor="message" className="text-[#004875]/80">
          {t.contact_page.form_message}
        </Label>
        <Textarea
          id="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none border-opera-blue/15 bg-white/70 backdrop-blur-sm"
        />
      </motion.div>
      <p className="text-xs text-[#004875]/55">{t.contact_page.form_note}</p>
      <button type="submit" className="opera-btn opera-btn-primary w-full sm:w-auto">
        {t.contact_page.form_submit}
      </button>
    </form>
  );
}
