

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 text-gray-900">
        <section className="w-full bg-(--brand-navy) text-gray-50">
          <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold">
                The Hameed <span className="text-2xl">&</span> Azra Awards
              </h1>
              <p className="mt-3 max-w-2xl text-sm sm:text-base uppercase ">
                celebrating excellence in academic research
              </p>

              <div className="mt-6 flex gap-3">
                <Link
                  href="/our-story"
                  className="px-4 py-2 rounded-md border border-gray-300 bg-transparent text-gray-50 hover:bg-white/5"
                >
                  Read Our Story
                </Link>

                <Link
                  href="/how-to-apply"
                  className="px-4 py-2 rounded-md bg-gray-50 text-(--brand-navy) font-semibold"
                >
                  Submission
                </Link>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <div className="flex flex-col ml-auto">
                <Image
                  src="/logo.jpg"
                  alt="The Hameed & Azra Awards"
                  width={280}
                  height={373}
                  className="h-70 w-60 rounded-lg sm:h-72 md:h-72 object-cover mx-auto"
                  priority
                />

                <p className="mt-3 max-w-2xl italic text-sm sm:text-base uppercase">
                  providing quality education in pakistan
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="prose max-w-none">
            <p>
              The Hameed & Azra Awards have been established by the family of the
              late Azra Hameed and Syed Abdul Hameed to recognize and encourage
              excellence in academic research.
            </p>
          </div>

          <figure className="mt-8 border-l-4 border-(--brand-navy) pl-4">
            <blockquote className="pull-quote text-lg">
              "I am deeply grateful to my family, friends, and colleagues whose
              encouragement and support have made these awards possible and have
              helped preserve the memory and legacy of my parents."
            </blockquote>
          </figure>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-100 rounded-md ">
              <h4 className="font-semibold">Eligiblity of Applicant</h4>
              <p className="text-sm mt-2">Lecturers & Assistant Professors, public sector universitites, Sindh & Balochistan</p>
            </div>

            <div className="p-4 bg-gray-100 rounded-md ">
              <h4 className="font-semibold">Papers Criteria</h4>
              <p className="text-sm mt-2">Papers published during the last two years in HEC approved journals.</p>
            </div>

            <div className="p-4 bg-gray-100 rounded-md ">
              <h4 className="font-semibold">Submission Deadline</h4>
              <p className="text-sm mt-2 italic">To be announced</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

