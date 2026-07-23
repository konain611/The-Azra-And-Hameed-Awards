import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-tint py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-md p-1">
                <Image src="/logo.jpg" alt="logo" width={42} height={42} />
              </div>
              <h4 className="text-lg font-semibold">Azra & Hameed Awards</h4>
            </div>
            <p className="mt-3 text-sm text-gray-700">
              The Azra & Hameed Awards recognize and encourage excellence in
              academic research, established in memory of Azra Hameed and Syed
              Abdul Hameed.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Quick Links</h5>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/our-story">Our Story</Link>
              </li>
              <li>
                <Link href="/eligibility">Eligibility</Link>
              </li>
              <li>
                <Link href="/how-to-apply">How to Apply</Link>
              </li>
              <li>
                <Link href="/winners">Winners</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Contact</h5>
            <p className="text-sm">
              For submissions and enquiries, email:{" "}
              <a className="text-blue-700" href="mailto:hameed.azra@gmail.com">
                hameed.azra@gmail.com
              </a>
            </p>
            <p className="mt-4 text-sm text-gray-600">© Azra & Hameed Awards</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
