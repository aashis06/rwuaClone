import {
  Hero,
  About,
  Services,
  Gallery,
  NewsEvents,
  SuccessStories,
  Vacancy,
  Downloads,
  Partners,
  Contact
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="news">
        <NewsEvents />
      </section>
      <section id="success-stories">
        <SuccessStories />
      </section>
      <section id="vacancy">
        <Vacancy />
      </section>
      <section id="download">
        <Downloads />
      </section>
      <Partners />
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </>
  );
}