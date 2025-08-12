"use client";
// declare const grecaptcha: any;
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter
import React, { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/app/styles/forms.scss";
import { formatPhoneNumber } from "./phoneFormatting";
import { getRecaptchaToken } from "./Recaptcha";

const ContactFormFreeBlogArticle: React.FC = () => {
  const router = useRouter(); // Initialize Next.js router
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [operandA, setOperandA] = useState(0);
  const [operandB, setOperandB] = useState(0);

  useEffect(() => {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5) + 1;
    setOperandA(a);
    setOperandB(b);
  }, []);

  const handleBeforeUnload = useCallback(
    (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue =
          "Are you sure you want to leave? Changes you made may not be saved.";
        return e.returnValue;
      }
    },
    [isDirty],
  ); // Add isDirty to dependency array if it's used inside
  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty, handleBeforeUnload]);

  const handleInputChange = () => {
    setIsDirty(true);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const data = {
      user_name: formData.get("user_name") as string,
      user_email: formData.get("user_email") as string,
      user_phone: formData.get("user_phone") as string,
      user_subject: formData.get("user_subject") as string,
      directory_profile: formData.get("directory_profile") as string,
      linkedin_profile: formData.get("linkedin_profile") as string,
      practice_name: formData.get("practice_name") as string,
      message: formData.get("message") as string,
      job_title: formData.get("job_title") as string,
      operand_a: formData.get("operand_a") as string,
      operand_b: formData.get("operand_b") as string,
      additional_info_1: formData.get("additional_info_1") as string,
      embed_url: window.location.href, // Capture the current page URL
    };

    setLoading(true);

    try {
      const token = await getRecaptchaToken("submit");

      const response = await fetch("/api/sendEmailFormFreeBlogArticle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          token, // 👈 now the token is included in the request payload
        }),
      });

      const result = await response.json();
      console.log(result);
      if (response.ok) {
        toast.success("Message sent successfully!");

        // 🔽 SUBMIT TO HUBSPOT
        await fetch(
          "https://api.hsforms.com/submissions/v3/integration/submit/44436548/e010bd69-bab3-418e-8d8e-65b67a2b97ec",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fields: [
                { name: "firstname", value: data.user_name },
                { name: "email", value: data.user_email },
                { name: "phone", value: data.user_phone },
                { name: "directory_profile", value: data.directory_profile },
                { name: "linkedin_profile", value: data.linkedin_profile },
                { name: "practice_name", value: data.practice_name },
                { name: "message", value: data.message },
                { name: "submission_url", value: data.embed_url },
                { name: "jobtitle", value: data.job_title }, // custom property in HubSpot
              ],
              context: {
                pageUri: window.location.href,
                pageName: document.title,
              },
            }),
          },
        );

        formRef.current.reset();
        // Redirect to thank-you page after success
        setIsDirty(false); // ✅ disable the beforeunload warning
        router.push(
          `/thank-you-blog-article/?name=${encodeURIComponent(data.user_name)}`,
        );
      } else {
        toast.error(result.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const pathname = usePathname();
  const submitButtonText =
    pathname === "/practice-areas/ecommerce"
      ? "Build a Custom eCommerce Platform"
      : "Get Free Blog Article";
  return (
    <div className="relative items-center justify-center bg-cover bg-center w-full">
      <div className="relative">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          onChange={handleInputChange}
          className="space-y-4"
        >
          <div className="flex flex-wrap md:flex-row">
            {/* Name Field */}
            <div className="relative w-full md:w-1/3 px-4">
              <label htmlFor="user_name" className="block text-sm font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-0 left-0 w-[35px] h-full rounded-tl-md rounded-bl-md"></div>
                <Image
                  src="/forms/Form-Name.png"
                  alt="User Icon"
                  width={20}
                  height={20}
                  className="absolute left-2 top-3"
                />
                <input
                  type="text"
                  name="user_name"
                  className="w-full p-3 pl-12 bg-white/90 text-black border border-white placeholder-gray rounded-md"
                  placeholder="Name"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="relative w-full md:w-1/3 px-4">
              <label htmlFor="user_email" className="block text-sm font-medium">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-0 left-0 w-[35px] h-full rounded-tl-md rounded-bl-md"></div>
                <Image
                  src="/forms/Form-Email.png"
                  alt="Email Icon"
                  width={20}
                  height={20}
                  className="absolute left-2 top-3"
                />
                <input
                  type="email"
                  name="user_email"
                  className="w-full p-3 pl-12 bg-white/90 text-black border border-white placeholder-gray rounded-md"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="relative w-full md:w-1/3 px-4">
              <label htmlFor="user_phone" className="block text-sm font-medium">
                Phone <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-0 left-0 w-[35px] h-full rounded-tl-md rounded-bl-md"></div>
                <Image
                  src="/forms/Form-Phone.png"
                  alt="Phone Icon"
                  width={20}
                  height={20}
                  className="absolute left-2 top-3"
                />
                <input
                  type="tel"
                  name="user_phone"
                  className="w-full p-3 pl-12 bg-white/90 text-black border border-white placeholder-gray rounded-md"
                  placeholder="Phone"
                  required
                  maxLength={14}
                  onChange={formatPhoneNumber}
                />
              </div>
            </div>
            <div className="relative w-full md:w-1/3 px-4 pt-4">
              <label
                htmlFor="directory_profile"
                className="block text-sm font-medium"
              >
                Directory Profile <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-0 left-0 w-[35px] h-full rounded-tl-md rounded-bl-md"></div>
                <Image
                  src="/forms/Directory-Profile.png" // replace with a link icon if you have one
                  alt="Link Icon"
                  width={20}
                  height={20}
                  className="absolute left-2 top-3"
                />
                <input
                  type="url"
                  name="directory_profile"
                  className="w-full p-3 pl-12 bg-white/90 text-black border border-white placeholder-gray rounded-md"
                  placeholder="https://example.com/your-profile"
                  pattern="https?://.+"
                  required
                />
              </div>
            </div>
            <div className="relative w-full md:w-1/3 px-4 pt-4">
              <label
                htmlFor="linkedin_profile"
                className="block text-sm font-medium"
              >
                LinkedIn Profile <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-0 left-0 w-[35px] h-full rounded-tl-md rounded-bl-md"></div>
                <Image
                  src="/forms/LinkedIn-Profile.png" // replace with a link icon if you have one
                  alt="Link Icon"
                  width={20}
                  height={20}
                  className="absolute left-2 top-3"
                />
                <input
                  type="url"
                  name="linkedin_profile"
                  className="w-full p-3 pl-12 bg-white/90 text-black border border-white placeholder-gray rounded-md"
                  placeholder="https://www.linkedin.com/in/your-profile"
                  pattern="https?://.+"
                  required
                />
              </div>
            </div>

            <div className="relative w-full md:w-1/3 px-4 pt-4">
              <label
                htmlFor="practice_name"
                className="block text-sm font-medium"
              >
                Practice Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-0 left-0 w-[35px] h-full rounded-tl-md rounded-bl-md"></div>
                <Image
                  src="/forms/Practice-Name.png"
                  alt="User Icon"
                  width={20}
                  height={20}
                  className="absolute left-2 top-3"
                />
                <input
                  type="text"
                  name="practice_name"
                  className="w-full p-3 pl-12 bg-white/90 text-black border border-white placeholder-gray rounded-md"
                  placeholder="Practice Name"
                  required
                />
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div className="relative px-4">
            <label htmlFor="message" className="block text-sm font-medium">
              Additional Directories or Information{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute top-0 left-0 w-[35px] h-[95%] rounded-tl-md rounded-bl-md"></div>
              <Image
                src="/forms/Form-Message.png"
                alt="Message Icon"
                width={20}
                height={20}
                className="absolute left-2 top-3"
              />
              <textarea
                name="message"
                className="w-full p-3 pl-12 bg-white/90 border border-white placeholder-gray rounded-md min-h-[100px]"
                placeholder="Additional Directories or Information"
                required
              ></textarea>
            </div>
          </div>

          <div className="relative px-4">
            <label
              htmlFor="additional_info_1"
              className="block text-sm font-medium"
            >
              What is {operandA} + {operandB}?
            </label>
            <input
              type="number"
              name="additional_info_1"
              className="w-full pl-2 pr-2 p-1"
              required
            />
            <input type="hidden" name="operand_a" value={operandA} />
            <input type="hidden" name="operand_b" value={operandB} />
          </div>

          {/* Honeypot field - should remain empty */}
          <div style={{ display: "none" }} aria-hidden="true">
            <label htmlFor="job_title">Job Title</label>
            <input
              type="text"
              name="job_title"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center" style={{}}>
            <button
              type="submit"
              className="btn-main square"
              disabled={loading}
            >
              {loading ? "Sending..." : submitButtonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormFreeBlogArticle;
