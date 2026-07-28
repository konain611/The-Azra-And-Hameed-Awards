import Navbar2 from "@/components/Navbar2";

export default function Eligibility() {
  return (
    <>
      <Navbar2 />
      <div className="max-w-6xl mx-auto px-4 py-15">
        <h1 className="text-2xl font-semibold">Criteria</h1>

        <div className="mt-6 space-y-3">
          <p>Lecturers and Assistant Professors serving in public-sector educational institutions in Sindh and Balochistan (for this year).</p>
          <p>The submitted paper must be published in an international or national indexed journal recognized by the HEC.</p>
          <p>Eligible window: Research papers published or accepted within the last three years from the submission date.</p>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Evaluation Criteria</h2>
          <p className="mt-3">
            Submissions are evaluated through a transparent and objective assessment system in which marks are awarded under a range of predefined criteria. The evaluation methodology and scoring framework are available for academic scrutiny; individual scoring details are not disclosed to applicants.
          </p>
        </section>
      </div>
    </>
  );
}
