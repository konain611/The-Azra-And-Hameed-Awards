export default function HowToApply() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold">How to Apply</h1>

      <ol className="mt-6 space-y-6">
        <li className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--brand-navy)] text-white flex items-center justify-center font-semibold">1</div>
          <div>
            <h3 className="font-semibold">Confirm eligibility</h3>
            <p className="text-sm">Your paper must be published or accepted for publication from July 2023 onward, in a recognized national/international peer-reviewed journal. Online journals must have been in continuous publication for at least 5 years prior to your paper's publication date.</p>
          </div>
        </li>

        <li className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--brand-navy)] text-white flex items-center justify-center font-semibold">2</div>
          <div>
            <h3 className="font-semibold">Prepare your documents</h3>
            <p className="text-sm">Include written co-author consent if the paper has multiple authors.</p>
          </div>
        </li>

        <li className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--brand-navy)] text-white flex items-center justify-center font-semibold">3</div>
          <div>
            <h3 className="font-semibold">Submit by email</h3>
            <p className="text-sm">Send materials to <strong>hameed.azra@gmail.com</strong> before the submission deadline (2026 deadline: <em>To be announced</em>).</p>
          </div>
        </li>

        <li className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--brand-navy)] text-white flex items-center justify-center font-semibold">4</div>
          <div>
            <h3 className="font-semibold">Wait for results</h3>
            <p className="text-sm">Evaluation is criteria-based and transparent, though individual scores aren't shared with applicants.</p>
          </div>
        </li>
      </ol>

      <div className="mt-8 p-4 bg-neutral-tint rounded-md-custom">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Submissions received after the closing date will not be considered.</li>
          <li>Any submission with false, misleading, or fraudulent information will be disqualified and may bar the applicant from future submissions.</li>
          <li>Papers that previously received an Azra & Hameed Award are not eligible for resubmission.</li>
          <li>The Best Paper in each discipline receives the Azra & Hameed Award; second- and third-ranked papers receive Certificates of Recognition.</li>
          <li>A list of all submitted papers will be published on the Azra & Hameed Awards website.</li>
        </ul>
      </div>
    </div>
  );
}
