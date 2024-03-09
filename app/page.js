import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Page() {
  const router = useRouter();

  useEffect(() => {
    // Your side effects code here, if needed
  }, []); // Dependency array

  return (
    <section>
      <h1>Google Fonts</h1>
      <h2>Hello, this is a Roboto font</h2>
      <button
        className="text-blue-600 h-10 w-20 shadow-lg rounded-md hover:font-extrabold"
        onClick={(e) => router.push("about")}
      >
        Click me
      </button>
    </section>
  );
}

export default Page;
