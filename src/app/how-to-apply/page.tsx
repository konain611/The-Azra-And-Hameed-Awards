import Navbar2 from "@/components/Navbar2";

export default function HowToApply() {
  return (
    <>
      <Navbar2 />
      <div className="max-w-6xl mx-auto px-4 py-15">
        <h1 className="text-2xl font-semibold">How to Apply</h1>

        <ol className="mt-6 space-y-6">
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--brand-navy)] text-white flex items-center justify-center text-xs font-semibold">1</div>
            <div>
              <h3 className="font-semibold text-[var(--brand-navy)]">Confirm eligibility</h3>
              <p className="text-sm">Your paper must be published in a recognized and reputable journal within the last two years. Online journals must have been in continuous publication for at least 5 years prior to your paper's publication date.</p>
            </div>
          </li>

          <li className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--brand-navy)] text-white flex items-center justify-center text-xs font-semibold">2</div>
            <div>
              <h3 className="font-semibold text-[var(--brand-navy)]">Prepare your documents</h3>
              <p className="text-sm">Include written co-author consent if the paper has multiple authors.</p>
            </div>
          </li>

          <li className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--brand-navy)] text-white flex items-center justify-center text-xs font-semibold">3</div>
            <div>
              <h3 className="font-semibold text-[var(--brand-navy)]">Submit by email</h3>
              <p className="text-sm">Send materials to <strong className="hover:text-[var(--brand-navy)] transition-colors"><a href="mailto:hameedazraaward@gmail.com">hameedazraaward@gmail.com</a></strong> before the submission deadline (2026 deadline: <strong>30 September 2026</strong>).</p>
            </div>
          </li>

          <li className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--brand-navy)] text-white flex items-center justify-center text-xs font-semibold">4</div>
            <div>
              <h3 className="font-semibold text-[var(--brand-navy)]">Wait for results</h3>
              <p className="text-sm">Evaluation is criteria-based and transparent, though individual scores aren't shared with applicants.</p>
            </div>
          </li>
        </ol>

        <div className="mt-8 p-4 bg-neutral-tint rounded-md-custom">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Submissions received after the closing date will not be considered.</li>
            <li>Any submission with false, misleading, or fraudulent information will be disqualified and may bar the applicant from future submissions.</li>
            <li>Papers that previously received an Hameed & Azra Award are not eligible for resubmission.</li>
            <li>The Best Paper in each discipline receives the Hameed & Azra Award; second- and third-ranked papers receive Certificates of Recognition.</li>
            <li>A list of all submitted papers will be published on the Hameed & Azra Awards website.</li>
          </ul>
        </div>
      </div>
    </>
  );
}