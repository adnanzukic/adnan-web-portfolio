// Svi kontakt podaci na jednom mjestu – promijeni ovdje i promijenit će se na cijelom sajtu.
export const CONTACT = {
  email: "adnan16zukic@gmail.com",
  phoneDisplay: "+387 62 652 851",
  phoneIntl: "38762652851", // bez + i razmaka
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${CONTACT.phoneIntl}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const viberLink = `viber://chat?number=%2B${CONTACT.phoneIntl}`;

export const telLink = `tel:+${CONTACT.phoneIntl}`;

export const mailLink = `mailto:${CONTACT.email}`;
