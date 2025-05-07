import { Header } from "@src/components/layout/Header";
import { Footer } from "@src/components/layout/Footer";
import { Hero } from "@src/components/sections/Hero";
import { Features } from "@src/components/sections/Features";
import { Testimonials } from "@src/components/sections/Testimonials";
import { Pricing } from "@src/components/sections/Pricing";
import { Contact } from "@src/components/sections/Contact";

export default function Home() {
  return (
  <div data-editor-tag="8NHaIUzag8"  className="flex min-h-screen flex-col">
    <Header data-editor-tag="mhikU3magS"  />
    <main data-editor-tag="30VrjcIJdy"  className="flex-1">
      <Testimonials data-editor-tag="H8b0kYWIXk"  />
      <Pricing data-editor-tag="mHBEBlo252"  />
      <Contact data-editor-tag="6m0sOZE5S7"  />
      </main>
    <Footer data-editor-tag="3ovszlTQBu"  />
    </div>
  );
}