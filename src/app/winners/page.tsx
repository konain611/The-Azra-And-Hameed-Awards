import winnersData from "../../data/winners";

function Ribbon({ place }: { place: number }) {
  const label = place === 1 ? "1st" : place === 2 ? "2nd" : "3rd";
  return (
    <div className="inline-block px-2 py-1 text-xs font-semibold bg-[var(--brand-navy)] text-white rounded-sm">
      {label}
    </div>
  );
}

export default function Winners() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold">2022 & 2023 Winners</h1>

      <div className="mt-6 space-y-8">
        {winnersData.map((cat) => (
          <section key={cat.category}>
            <h2 className="text-xl font-semibold">{cat.category}</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {cat.winners.map((w, idx) => (
                <div key={idx} className="p-4 bg-white rounded-md-custom shadow-soft">
                  <div className="flex items-center justify-between">
                    <Ribbon place={w.place} />
                    <div className="text-sm text-gray-500">{w.publicationDate || "Date: to be published"}</div>
                  </div>

                  <div className="mt-3">
                    <p className="font-semibold">{w.name || "Winner details to be published"}</p>
                    <p className="text-sm mt-1">{w.title || "Title: to be published"}</p>
                    <p className="text-sm mt-1">{w.journal || "Journal: to be published"}</p>
                    <p className="text-sm mt-1">{w.institution || "Institution: to be published"}</p>
                    <p className="text-sm mt-1">{w.designation || "Designation: to be published"}</p>
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
    </div>
  );
}
