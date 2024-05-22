import { cn } from "@/lib/utils";
import { barlow } from "@/constants/fonts.constant";
import Link from "next/link";
import { contactsConstant } from "@/constants/contacts.constant";
import Image from "next/image";


export default function HeroSection() {
  return (
    <section>
      <div className="container py-20">
        <h1 className={cn("text-2xl md:text-4xl font-medium", barlow.className)}>Ciao, Io sono Kyi Min.</h1>
        <h6 className={cn("opacity-70", barlow.className)}>A <span>full-stack React</span> developer based in Pavia, Italy.</h6>

        <p className="text-base md:text-lg my-8">I build web app that are practical and reliance.</p>

        <div className="flex gap-4 mb-4 pl-2 justify-start items-center">
          {contactsConstant.map(contact => (
            <Link href={contact.href} className="transition hover:scale-110" target="_blank">
              <Image
                src={contact.src}
                width={26}
                height={26}
                alt={contact.alt}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


