import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <main>
    <div>
      <Hero/>
    <footer>
    <div className="bg-blackish border  border-[#33353F]  text-gray-500 text-center py-4 pb-16 md:pb-4">
    Copyright &copy; 2023, Portfolio By Ayesha Aay. All rights reserved.
    </div>
    </footer>
    </div>
  </main>
  </>
  );
}
