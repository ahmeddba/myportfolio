import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Ahmed Ben Abid",
  description: "Learn more about Ahmed Ben Abid, Software Engineer specializing in JS/TS, Full-Stack development, and Automation.",
};

export default function AboutPage() {
  return (
    <main>
      <About />
      <Footer />
    </main>
  );
}
