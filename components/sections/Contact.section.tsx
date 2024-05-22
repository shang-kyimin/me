import { contactsConstant } from "@/constants/contacts.constant";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";


export default function ContactSection() {
  return (
    <section className="my-8">
      <div className="container">
        <h3 className="text-center mb-4">Contact</h3>

        <div className="flex gap-6 justify-center items-center">
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

        <Separator className="mt-12" />
      </div>
    </section>
  );
}


