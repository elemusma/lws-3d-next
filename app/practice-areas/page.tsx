import Link from "next/link";
import ContentBlock from "../components/content-block";

export default function PracticeAreasPage() {
  return (
    <>
    <ContentBlock
            sectionClassName="bg-gray-100 text-black pt-[125px] pb-[100px]"
            containerClassName="max-w-screen-lg mx-auto"
            rowClassName="flex flex-col items-center"
            columnClassName="flex flex-col lg:flex-row-reverse lg:flex-row items-start"
          >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Practice Areas</h1>
        <p className="mb-4">
          At Latino Web Studio, we specialize in creating tailored digital solutions for various practice areas. Our expertise spans across multiple domains, ensuring that your online presence is effective.
        </p>
        <ul className="list-disc pl-5">
          <li>Personal Injury Law</li>
          <li>Family Law</li>
          <li>Criminal Defense</li>
          <li>Medical Malpractice</li>
          <li>Engineering</li>
          <li>Appraisals</li>
          <li>Vehicle</li>
        </ul>
        <Link href="/practice-areas/seo" className="btn-main">SEO Practice Area</Link>
      </div>
      </ContentBlock>
    </>
  );
}
