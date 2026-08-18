/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto URL for default mail client (Outlook, Mail, etc.)
    const to = "hisu0807@outlook.com";
    const subject = form.name
      ? `${form.name} - Contact from portfolio`
      : "Contact from portfolio";
    const bodyLines = [];
    if (form.message) bodyLines.push(form.message);
    bodyLines.push("\n---\n");
    bodyLines.push(`From: ${form.name || "(not provided)"}`);
    if (form.email) bodyLines.push(`Reply-To: ${form.email}`);

    const body = encodeURIComponent(bodyLines.join("\n"));
    const mailtoUrl = `mailto:${encodeURIComponent(
      to
    )}?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Gmail web compose URL (opens in a new tab)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      to
    )}&su=${encodeURIComponent(subject)}&body=${body}`;

    // Ask user preference: Gmail (web) or default mail app
    try {
      const useGmail = window.confirm(
        "Open compose in Gmail web? Click OK for Gmail, Cancel to open your default mail app (Outlook/Desktop)."
      );
      if (useGmail) {
        window.open(gmailUrl, "_blank");
      } else {
        // Using location.href will open the user's default mail client
        window.location.href = mailtoUrl;
      }

      // Reset form UI state
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Could not open mail client", err);
      setLoading(false);
      alert(
        "Could not open mail client. Please copy your message and send manually to " +
          to
      );
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>{t("contact.subtitle")}</p>
        <h3 className={styles.sectionHeadText}>{t("contact.title")}.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t("contact.form.nameLabel")}</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("contact.form.namePlaceholder")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t("contact.form.emailLabel")}</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("contact.form.emailPlaceholder")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t("contact.form.messageLabel")}</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t("contact.form.messagePlaceholder")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
            {loading ? t("contact.form.sending") : t("contact.form.send")}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
