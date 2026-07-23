

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="w-full bg-[var(--brand-navy)] text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            The Azra & Hameed Awards
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base">
            Established in memory of Azra Hameed and Syed Abdul Hameed —
            celebrating excellence in academic research.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              href="/our-story"
              className="px-4 py-2 rounded-md border border-white/60 bg-transparent text-white hover:bg-white/5"
            >
              Read Our Story
            </Link>

            <Link
              href="/how-to-apply"
              className="px-4 py-2 rounded-md bg-white text-[var(--brand-navy)] font-semibold"
            >
              How to Apply
            </Link>
          </div>
        </div>
      </section>

      {/* Mission + Pull quote + Info cards */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="prose max-w-none">
          <p>
            The Azra & Hameed Awards have been established by the family of the
            late Azra Hameed and Syed Abdul Hameed to recognize and encourage
            excellence in academic research.
          </p>
        </div>

        <figure className="mt-8 border-l-4 border-[var(--brand-navy)] pl-4">
          <blockquote className="pull-quote text-lg">
            "I am deeply grateful to my family, friends, and colleagues whose
            encouragement and support have made these awards possible and have
            helped preserve the memory and legacy of my parents."
          </blockquote>
        </figure>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-md-custom shadow-soft">
            <h4 className="font-semibold">Who Can Apply</h4>
            <p className="text-sm mt-2">Lecturers & Assistant Professors, public sector, Sindh & Balochistan</p>
          </div>

          <div className="p-4 bg-white rounded-md-custom shadow-soft">
            <h4 className="font-semibold">Eligible Papers</h4>
            <p className="text-sm mt-2">Published or accepted from July 2023 onward</p>
          </div>

          <div className="p-4 bg-white rounded-md-custom shadow-soft">
            <h4 className="font-semibold">2026 Deadline</h4>
            <p className="text-sm mt-2 italic">To be announced</p>
          </div>
        </div>
      </section>
    </div>
  );
}

