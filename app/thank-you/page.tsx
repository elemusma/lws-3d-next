import Main from "@/app/js/main";

export default function ThankYouPage() {
  return (
    <>
    <Main />
    <main>
    <div className="text-center pt-[100px]">
      <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg text-gray-700">
        Your message has been sent successfully. We will get back to you soon.
      </p>
    </div>
    </main>
    </>
  );
}