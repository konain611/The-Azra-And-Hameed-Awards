import Navbar2 from "@/components/Navbar2";

export default function Eligibility() {
  return (
    <div className="bg-gray-50 text-gray-900 font-medium">
      <Navbar2 />
      <div className="max-w-6xl mx-auto px-4 py-15">
        <h1 className="text-2xl font-semibold">Criteria</h1>

        <div className="mt-6 space-y-3">
          <p>Faculty members from Public Sector Universities in Pakistan.</p>
          <p>Open to Lecturers, Assistant Professors, and Cooperative Teachers.</p>
          <p>Eligible window: Research articles published in recognized and reputable journals during the last two years.</p>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Evaluation Criteria</h2>
          <p className="mt-3">
            Submissions are evaluated through a transparent and objective assessment system based on the following criteria:
          </p>

          <ol className="mt-4 space-y-2 list-decimal list-inside">
            <li>Number of authors</li>
            <li>Ratio between national and foreign authors</li>
            <li>Corresponding author</li>
            <li>First author</li>
            <li>Impact factor</li>
          </ol>

          <div className="mt-4 space-y-1 text-sm text-gray-600">
            <p>20% weightage allocated to criteria #1 and #2 collectively.</p>
            <p>80% weightage allocated to criteria #3, #4 and #5 collectively.</p>
          </div>
        </section>
      </div>
    </div>
  );
}