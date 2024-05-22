import { techstacksConstant } from "@/constants/techstacks.constant";
import Image from "next/image";


export default function AboutMeSection() {
  return (
    <section>
      <div className="container mb-12">
        <h3 className="mb-4">About me</h3>

        <div className="about-me-card">
          <h6 className="font-semibold mb-4">My short bio</h6>
          <p>I became a computer-boy by the time I started learning and using it, back in 2022. The biggest impact is that my thoughts about problem-solving had shifted towards computational thinking by using different algorithms which makes me feel more confident when I encounter new problems and study new stuffs.</p>
          <p className="font-semibold mt-2">Since then, learning becomes my full-time job.</p>
        </div>

        <div className="mt-6 about-me-card">
          <p>I constantly try to improve</p>
          <h6 className="font-semibold mb-4">My Tech Stacks</h6>
          <div className="py-2 flex gap-4 flex-wrap justify-center items-center">
            {techstacksConstant.map(tech => (
              <Image
                src={tech.src}
                width={28}
                height={28}
                alt={tech.alt}
                className="transition hover:scale-110 cursor-pointer"
                title={tech.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


