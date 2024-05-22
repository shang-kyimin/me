import { barlow } from "@/constants/fonts.constant";
import { cn } from "@/lib/utils";


export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("max-w-6xl mx-auto my-8 px-6 flex justify-between items-center text-sm", barlow.className)}>
      <p>&copy; {currentYear} - Kyi Min Khine</p>
    </footer>
  );
}


