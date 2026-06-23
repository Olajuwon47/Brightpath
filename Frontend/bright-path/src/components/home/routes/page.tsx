import {
  Hero,
  Features,
  Courses,
  FAQSection,
  // FirstSection,
  PartnersSection,
} from '@/components';

const partners = [
  "aws",
  "slack",
  "mailchimp",
  "upwork",
  "cloud",
  "soundcloud",
  "github",
  "unity",
  "figma",
];

export default function RoutesHomepage() {
  return (
  <main className="flex flex-col items-center w-full overflow-x-hidden overflow-y-hidden max-w-screen">

      <Hero />

      <PartnersSection
        sectionClassName="bg-gradient-to-r from-green-900 via-lime-600 to-lime-400 py-6 px-4 sm:px-6 md:px-8 lg:px-16 w-full text-white"
        partners={partners}
        imageSize={{
          width: 80,
          height: 32,
          className: "object-contain h-8 w-auto sm:h-9 mx-4 sm:mx-6", // More flexible
        }}
      />

      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
        <Features />
      </section>

      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
        <Courses />
      </section>
{/* 
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
        <FirstSection />
      </section> */}

      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
        <FAQSection />
      </section>
    </main>
  );
}
