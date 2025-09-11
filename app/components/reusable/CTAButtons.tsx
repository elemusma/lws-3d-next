import Link from "next/link";
import { Phone } from "@/app/components/globals";

function CTAButtons() {
  return (
    <>
      <div>
        <Link href="#schedule" className="btn-main bg-accent btn-schedule">
          <strong>Get More Cases and Get Found by Attorneys</strong>
        </Link>
      </div>
      <div>
        <a href={`tel:${Phone}`} className="phone text-link !no-underline">
          {Phone}
        </a>
      </div>
    </>
  );
}

export default CTAButtons;
