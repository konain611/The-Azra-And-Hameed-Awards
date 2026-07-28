import Navbar2 from "@/components/Navbar2";

export default function OurStory() {
  return (
    <>
      <Navbar2 />
      <div className="max-w-6xl mx-auto px-4 py-15">
        <h1 className="text-2xl font-semibold">Our Story</h1>

        <div className="mt-6 prose">
          <p>
            The Hameed & Azra Awards have been established by the family of the
            late Azra Hameed and Syed Abdul Hameed to recognize and encourage
            excellence in academic research.
          </p>

          <p>
            All submissions are evaluated through a transparent and objective
            assessment system in which marks are awarded under a range of
            predefined criteria. While the evaluation methodology and scoring
            framework are available for academic scrutiny, individual scoring
            details are not disclosed to applicants.
          </p>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Made Possible With Thanks To</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Mr. Syed A. A. Akif",
              "Dr. Aslam Shah",
              "Dr. Shah Ali-ul-Qadar",
              "Dr. Bilqees Ajmal",
              "Dr. M. Zaheer",
              "Dr. Rozina Karmaliani",
              "Dr. Huma Baqai",
              "Dr. Humayoun A. Azeemi",
              "Dr. Ramzan Bamri",
              "Dr. Shahid Mehmood",
              "Dr. Muhammad Saeed",
            ].map((name) => (
              <div key={name} className="p-4 bg-white rounded-md-custom shadow-sm border-l-2 border-[var(--brand-navy)]">
                <p className="font-medium">{name}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-xl italic text-[var(--brand-navy)]">
            "Their encouragement, guidance, and unwavering support have been
            instrumental in transforming this vision into reality."
          </p>
        </section>
      </div>
    </>
  );
}
