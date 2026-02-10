import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Ahmed Ben Abid",
  description: "Get in touch with Ahmed Ben Abid. Reach out via GitHub, LinkedIn, or email.",
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
      <Footer />
    </main>
  );
}
