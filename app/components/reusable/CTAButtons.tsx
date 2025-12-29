import Link from "next/link";
import { Phone } from "@/app/components/globals";

function CTAButtons() {
  return (
    <>
      <div className="r">
        <div className="">
          <Link href={`#schedule`} className="btn-main mx-2 blog-article">
            Get More Leads
          </Link>
          <Link
            href={`/podcast`}
            className="btn-main secondary mx-2 podcast-guest-attorney"
          >
            Be Podcast Guest
          </Link>
        </div>
        <div className="">
          <a href={`tel:+1${Phone}`} className="text-link inline-block">
            {Phone}
          </a>
        </div>
      </div>
    </>
  );
}

export default CTAButtons;
