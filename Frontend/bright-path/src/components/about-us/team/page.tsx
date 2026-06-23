'use client';
import { ReactNode } from "react";

type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: SocialLink[];
};

const twitterIcon = (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.9 2H22l-6.8 7.7L23 22h-6.8l-5.3-6.9L4.9 22H2l7.4-8.3L1 2h6.9l4.8 6.3L18.9 2Zm-1.2 18h1.7L6.9 3.9H5.1L17.7 20Z" />
  </svg>
);

const linkedinIcon = (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.94 6.5A1.94 1.94 0 1 1 3 6.5a1.94 1.94 0 0 1 3.94 0ZM3.4 8.87H6.5V21H3.4V8.87Zm5.02 0h2.98v1.65h.04c.42-.8 1.45-1.65 2.98-1.65 3.19 0 3.78 2.1 3.78 4.82V21h-3.1v-5.38c0-1.28-.02-2.93-1.79-2.93-1.8 0-2.08 1.4-2.08 2.83V21H8.42V8.87Z" />
  </svg>
);

const team: TeamMember[] = [
  {
    name: "Lawal Olajuwon W.",
    role: "Founder & CEO",
    image: "/team/JAY.png",
    bio: "Leads BrightPath's vision and product direction, focused on helping schools showcase programs and help learners discover the right path.",
    socials: [
      { label: "Twitter", href: "#", icon: twitterIcon },
      { label: "LinkedIn", href: "#", icon: linkedinIcon },
    ],
  },
  {
    name: "Amina Yusuf",
    role: "Head of Technology",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "Builds the platform experience, from responsive layouts to reliable course and school discovery features.",
    socials: [
      { label: "Twitter", href: "#", icon: twitterIcon },
      { label: "LinkedIn", href: "#", icon: linkedinIcon },
    ],
  },
  {
    name: "Tunde Adebayo",
    role: "Partnerships Lead",
    image: "/team/t3.png",
    bio: "Works with schools, instructors, and organizations to bring useful learning opportunities onto the platform.",
    socials: [
      { label: "Twitter", href: "#", icon: twitterIcon },
      { label: "LinkedIn", href: "#", icon: linkedinIcon },
    ],
  },
  {
    name: "Grace Okonkwo",
    role: "Operations Manager",
    image: "/team/t2.png",
    bio: "Keeps the platform organized, ensures listings stay up to date, and supports smooth day-to-day operations.",
    socials: [
      { label: "Twitter", href: "#", icon: twitterIcon },
      { label: "LinkedIn", href: "#", icon: linkedinIcon },
    ],
  },
  {
    name: "Modupe Tolu",
    role: "Community Engagement Manager",
    image: "/team/t4.png",
    bio: "Supports communication with students and educators, helping BrightPath stay welcoming, helpful, and community-driven.",
    socials: [
      { label: "Twitter", href: "#", icon: twitterIcon },
      { label: "LinkedIn", href: "#", icon: linkedinIcon },
    ],
  },
];

export default function LeadershipTeam() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">Meet the BrightPath Team</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A focused group of builders, operators, and partnership leads helping schools,
            instructors, and learners connect through one platform.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-foreground">{member.name}</h3>
                <p className="mb-2 text-sm text-primary">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>

                <div className="mt-4 flex space-x-4">
                  {member.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="sr-only">{social.label}</span>
                      <span className="block h-5 w-5">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
