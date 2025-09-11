// import Link from "next/link";
import SocialIcons from "@/app/components/social-icons";
import Image from "next/image";
import WhitePaper from "../forms/WhitePaper";

export default function Sidebar() {
  return (
    <aside className="lg:w-1/4 w-full sticky top-[8rem] lg:px-0 px-4">
      <div className="relative">
        <Image
          src="/assets/Get-More-Cases-Get-Found-by-Attorneys-White-Paper.jpg"
          width={1000}
          height={1000}
          alt={"Get More Cases and Get Found by Attorneys Download White Paper"}
          priority
        />
        <div className="h-[25px]"></div>
        <WhitePaper />
      </div>
      <div className="text-center pt-4">
        <h2 className="sr-only">About the Author</h2>
        <Image
          src="/assets/Headshot_1.png"
          className="mx-auto"
          width={150}
          height={150}
          alt={"Tadeo (Ted) Martinez with Latino Web Studio"}
        />
        <p className="pt-4 !mb-0">Tadeo (Ted) Martinez</p>
        <small className="pb-4 block">
          Web Design &amp; SEO for Expert Witnesses
        </small>
      </div>

      <div className="gradient-background pb-5 rounded-[45px]">
        <div className="flex flex-wrap justify-center">
          <SocialIcons />
        </div>
      </div>
    </aside>
  );
}
