/** Replace with production contact email. */
export const OPERA_CONTACT_EMAIL = "coordinacion@operasurgicalcenter.com";

/** Replace with production WhatsApp in international format (no +). */
export const OPERA_WHATSAPP_E164 = "593999999999";

export function whatsappHref(message: string): string {
  const q = encodeURIComponent(message);
  return `https://wa.me/${OPERA_WHATSAPP_E164}?text=${q}`;
}
