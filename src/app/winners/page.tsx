import Navbar2 from "@/components/Navbar2";
import Image from "next/image";
import winnersData from "../../data/winners";
import submissions2022, { submissionTally } from "../../data/submissions";

const ceremonyImages = Array.from({ length: 14 }, (_, index) => index + 1);

function Ribbon({ place }: { place?: number }) {
  if (!place) {
    return (
      <div className="inline-block px-2 py-1 text-xs font-semibold bg-(--brand-navy) text-white rounded-sm">
        Award
      </div>
    );
  }
  const label = place === 1 ? "1st" : place === 2 ? "2nd" : "3rd";
  return (
    <div className="inline-block px-2 py-1 text-xs font-semibold bg-(--brand-navy) text-white rounded-sm">
      {label}
    </div>
  );
}

export default function Winners() {
  return (
    <div className="bg-gray-50 text-gray-900 font-">
      <Navbar2 />
      <div className="max-w-6xl mx-auto px-4 py-15">
        <h1 className="text-2xl text-(--brand-navy) font-semibold">2022 & 2023 Winners</h1>

        <div className="mt-6 space-y-8">
          {winnersData.map((cat) => (
            <section key={cat.category}>
              <h2 className="text-xl font-semibold">{cat.category}</h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {cat.winners.map((w, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-md-custom shadow-soft">
                    <div className="flex items-center justify-between">
                      <Ribbon place={w.place} />
                      {/* <div className="text-sm text-gray-500">{w.publicationDate || "Date: to be published"}</div> */}
                    </div>

                    <div className="mt-3">
                      <p className="font-semibold">{w.name || "Winner details to be published"}</p>
                      <p className="text-sm mt-1">{w.title || "Title: to be published"}</p>
                      <p className="text-sm mt-1">{w.journal || "Journal: to be published"}</p>
                      {/* <br/> */}
                      <p className="text-sm mt-1">{w.institution || "Institution: to be published"}</p>
                      {/* <p className="text-sm mt-1">{w.designation || "Designation: to be published"}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="text-lg font-semibold">2026 Awards</h2>
          <p className="mt-2">Results will be published here following the award ceremony.</p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Recent Award Ceremony</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ceremonyImages.map((number) => (
              <figure
                key={number}
                className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-soft transition duration-200 ease-out hover:z-10 hover:scale-[1.2] cursor-pointer hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none"
              >
                <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-slate-100">
                  <Image
                    src={`/${number}.jpeg`}
                    alt={`Award ceremony photo ${number}`}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">2022 Submitted Papers</h2>
          <p className="mt-2 text-sm text-gray-600">
            Papers submitted for the 2022 awards.
          </p>

          <ol className="mt-4 space-y-4 list-decimal list-inside">
            {submissions2022.map((s, idx) => (
              <li key={idx} className="pl-1">
                <span className="font-medium">{s.author}</span>
                {s.title && <span>, {s.title}</span>}
                <span className="text-gray-600"> — {s.faculty}</span>
              </li>
            ))}
          </ol>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            {submissionTally.map((t) => (
              <div key={t.faculty} className="px-3 py-1 bg-neutral-tint rounded-md-custom">
                {t.faculty}: {t.count}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}