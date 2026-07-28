import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 border-t-2 border-[var(--brand-navy)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
          {/* Logo + description */}
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-md p-1 shrink-0">
              <Image src="/logo.jpg" alt="logo" width={100} height={100} />
            </div>
            <p className="text-sm text-gray-700">
              The Hameed & Azra Awards recognize and encourage excellence in
              academic research, established in memory of Azra Hameed and Syed
              Abdul Hameed.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:ml-10 lg:ml-16">
            <h5 className="font-semibold mb-2">Quick Links</h5>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="/our-story"
                  className="text-gray-700 hover:text-[var(--brand-navy)] transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/eligibility"
                  className="text-gray-700 hover:text-[var(--brand-navy)] transition-colors"
                >
                  Eligibility
                </Link>
              </li>
              <li>
                <Link
                  href="/how-to-apply"
                  className="text-gray-700 hover:text-[var(--brand-navy)] transition-colors"
                >
                  How to Apply
                </Link>
              </li>
              <li>
                <Link
                  href="/winners"
                  className="text-gray-700 hover:text-[var(--brand-navy)] transition-colors"
                >
                  Awardees
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold mb-2">Contact</h5>
            <p className="text-sm">
              For submissions and enquiries, phone:{" "}
              <a
                className="text-blue-700 hover:text-[var(--brand-navy)] transition-colors"
                href="tel:+923302329666"
              >
                +923302329666
              </a>
            </p>
            <p className="mt-4 text-sm text-gray-600">© Hameed & Azra Awards</p>
          </div>
        </div>
      </div>
    </footer>
  );
}