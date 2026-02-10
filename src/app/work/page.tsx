import WorkSection from "@/components/WorkSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Work | Ahmed Ben Abid",
  description: "Selected projects by Ahmed Ben Abid: systems, tools, and platforms that ship and scale.",
};

export default function WorkPage() {
  return (
    <main>
      <WorkSection />
      <Footer />
    </main>
  );
}
