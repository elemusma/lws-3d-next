import { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import CTA from "@/app/components/reusable/cta";

export const metadata: Metadata = {
  title: "Fulfillment Policy | Latino Web Studio",
  description:
    "Our fulfillment policy outlines how we deliver our services, including timelines, responsibilities, and refund terms, including a 14-day money-back guarantee.",
};

const policyData = {
  title: "Fulfillment Policy",
  companyName: "The Designer Developer, LLC, DBA Latino Web Studio",
  description:
    "We are dedicated to providing high-quality web and software services tailored to meet your specific needs. This Fulfillment Policy outlines how we deliver our services, including timelines, responsibilities, and a 14-day money-back guarantee.",
  sections: [
    {
      title: "Service Fulfillment",
      items: [
        {
          title: "Project Scope and Deliverables",
          descriptions: [
            "Upon agreeing to the scope of work, a detailed proposal or agreement will outline the services to be provided, including deliverables, timelines, and milestones.",
          ],
        },
        {
          title: "Client Collaboration",
          descriptions: [
            "Timely communication and feedback from the client are essential to ensure smooth project progress. Delays in providing required assets or approvals may affect project timelines.",
          ],
        },
        {
          title: "Delivery Timelines",
          descriptions: [
            "Estimated completion timelines are included in the project agreement. While we strive to meet deadlines, they may vary depending on client response times, changes to the scope, or unforeseen circumstances.",
          ],
        },
        {
          title: "Testing and Quality Assurance",
          descriptions: [
            "All projects include testing to ensure functionality and quality before final delivery. For software services, bug fixes or adjustments within the agreed scope will be addressed post-launch, as outlined in the agreement.",
          ],
        },
      ],
    },
    {
      title: "14-Day Money-Back Guarantee",
      items: [
        {
          title: "Eligibility",
          descriptions: [
            "Clients may request a refund within 14 days of service commencement, provided that work has not exceeded 50% completion or major deliverables have not been provided.",
          ],
        },
        {
          title: "Refund Process",
          descriptions: [
            "To initiate a refund request, clients must contact us within the 14-day period via email or phone. Refunds will be processed within 7-10 business days once approved.",
          ],
        },
        {
          title: "Exclusions",
          descriptions: [
            "Refunds are not applicable for prepaid services, retainers, or custom packages that have been substantially fulfilled.",
          ],
        },
      ],
    },
    {
      title: "Revisions and Adjustments",
      items: [
        {
          title: "Revision Policy",
          descriptions: [
            "The number of revisions allowed will be detailed in the project agreement. Additional revisions outside the scope may incur additional charges.",
          ],
        },
        {
          title: "Post-Delivery Support",
          descriptions: [
            "Post-delivery support or maintenance plans can be arranged based on your needs. These will be outlined in a separate agreement or as part of the project proposal.",
          ],
        },
      ],
    },
  ],
  contactInfo: {
    email: "info@latinowebstudio.com",
    phone: "(303) 927-8228",
  },
};

export default function FulfillmentPolicyPage() {
  return (
    <>
      <section className="pt-[100px] pb-[100px] bg-[#f7f7f7]">
        <div className="">
          <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h1 className="text-3xl font-bold sm:text-4xl mb-3">
                {policyData.title}
              </h1>
              <h2 className="text-xl text-primary font-medium mb-6">
                {policyData.companyName}
              </h2>
              <p className="text-muted-foreground text-lg leading-7">
                {policyData.description}
              </p>
            </div>

            {policyData.sections.map((section, sectionIndex) => (
              <section key={`section-${sectionIndex}`} className="mb-12">
                <div className="border-t border-border my-8" />
                <h3 className="text-xl font-semibold mb-6">{section.title}</h3>
                <ol className="list-decimal pl-5 space-y-5">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={`item-${sectionIndex}-${itemIndex}`}
                      className="font-medium"
                    >
                      <span>{item.title}</span>
                      <ul className="list-disc pl-5 mt-2 space-y-2">
                        {item.descriptions.map((desc, descIndex) => (
                          <li
                            key={`desc-${sectionIndex}-${itemIndex}-${descIndex}`}
                            className="text-muted-foreground font-normal"
                          >
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </section>
            ))}

            <section className="mt-16">
              <div className="border-t border-border my-8" />
              <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
              <p className="text-muted-foreground mb-6">
                If you have any questions or concerns about our Fulfillment
                Policy, please contact us at:
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a
                  href={`mailto:${policyData.contactInfo.email}`}
                  className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors duration-200 group"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">
                    {policyData.contactInfo.email}
                  </span>
                </a>
                <a
                  href={`tel:${policyData.contactInfo.phone.replace(/[^0-9]/g, "")}`}
                  className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors duration-200 group"
                >
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">
                    {policyData.contactInfo.phone}
                  </span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
