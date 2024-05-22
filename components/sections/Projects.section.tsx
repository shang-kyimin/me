import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";


export default function ProjectsSection() {
  return (
    <section className="mb-24">
      <div className="container">
        <h3>Projects</h3>

        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <Link href="https://url-up.netlify.app" target="_blank">
            <Image
              src="/images/url-up-homepage.image.png"
              width={927}
              height={502.5}
              alt="url-up homepage image"
              className="rounded-3xl"
            />
          </Link>

          <div className="flex flex-col justify-around">
            <>
              <h6 className="text-xl font-bold">Url-up</h6>
              <p>When I was studying Foundation Year Program at the University, I found something struggle for me -- I messed up all the links to be watched after school. This web app helps me solve these.</p>
            </>

            <Link href="https://github.com/shang-kyimin/url-up" target="_blank">
              <Image src="/assets/github.asset.svg" alt="github asset" width={26} height={26} />
            </Link>
          </div>
        </div>

        <Separator className="mt-4" />
      </div>
    </section>
  );
}


