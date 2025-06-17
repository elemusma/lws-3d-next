import CalendlyWidget from "@/app/components/calendly";
import Main from "@/app/js/main";

export default function CalendarPage() {
  return (
    <>
    <Main />
    <div className="z-[1] relative text-center px-4 pt-[150px]">

    <h1>Schedule a Call with Ted Below</h1>
    </div>
    <CalendlyWidget />
    </>
  );
}