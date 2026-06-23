import StudentJoinSection from "@/app/apathway/students/page";
import InstructorJoinSection from "@/app/apathway/instructor/page";
import EmployerJoinSection from "@/app/apathway/employer/page";


export default function Page() {
  return (
    <main className="bg-lime-50">
        <StudentJoinSection />
        <InstructorJoinSection />
        <EmployerJoinSection /> 
    </main>
  );
}
