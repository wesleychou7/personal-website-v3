"use client";

import Image from "next/image";
import { MdOutlineOpenInNew } from "react-icons/md";
import { useState } from "react";

export default function Home() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("chouwesl@usc.edu");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const work = [
    {
      title: "Software Engineering Intern",
      company: "Tesla",
      description: "Energy",
      date: "2026",
      logo: "/tesla.jpeg",
    },
    {
      title: "Software Engineering Intern",
      company: "Paramount Plus",
      date: "2025",
      logo: "/paramount.png",
    },
    {
      title: "Founder",
      company: "TransferPlan",
      date: "2024",
      logo: "/transferplan.png",
      link: "https://transferplan.com",
    },
    {
      title: "Software Engineering Intern",
      company: "Coding Minds Academy",
      date: "2023",
      logo: "/cma.jpeg",
    },
    {
      title: "Software Engineering Intern",
      company: "Sony Electronics",
      date: "2022",
      logo: "/sony.png",
    },
  ];

  const projects = [
    {
      title: "Pillar",
      link: "https://youtu.be/0vhIymZsygU",
      description: "AI powered takeoffs and cost estimates for construction projects.",
      src: "/Pillar Short Demo.mp4",
    },
    {
      title: "Branching Chat",
      link: "https://branchingchat.com",
      description: "A chat app that allows you to branch conversations like a tree.",
      src: "/Branching Chat Demo v2.mp4",
    }
  ];

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full h-full md:w-1/3 p-6 pt-16 pb-32 flex flex-col justify-center gap-12">
        <div className="flex flex-row justify-between items-center">
          <div className="font-bold">Wesley Chou</div>
          <div className="flex flex-row gap-2 sm:gap-2 md:gap-3 lg:gap-4 text-sm text-gray-400">
            <a href="http://www.linkedin.com/in/wesley-chou-713640235" target="_blank">
              <div className="underline">LinkedIn</div>
            </a>
            <a href="https://github.com/wesleychou7" target="_blank">
              <div className="underline">GitHub</div>
            </a>
            <a href="https://x.com/_wesleychou" target="_blank">
              <div className="underline">Twitter</div>
            </a>
            <div className="underline cursor-pointer" onClick={handleEmailClick}>
              {emailCopied ? "Email copied!" : "Email"}
            </div>
          </div>
        </div>
        <div>
          Hello! I study computer engineering & computer science at USC. I am currently an intern at Tesla. Feel free to reach out!
        </div>
        <div>
          <div className="mb-4 font-bold">Experience</div>
          <div className="flex flex-col gap-4">
            {work.map((item, index) => (
              <div key={index}>
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-3">
                    <Image
                      src={item.logo}
                      alt={`${item.company} logo`}
                      width={40}
                      height={40}
                      className="rounded-md object-contain"
                    />
                    <div>
                      <div>
                        {item.link ? (
                          <a href={item.link} target="_blank" className="inline-flex items-center gap-1">
                            {item.company}
                            <MdOutlineOpenInNew className="text-gray-400" />
                          </a>
                        ) : (
                          item.company
                        )}
                      </div>
                      <div className="text-sm text-gray-400">{item.title}</div>
                    </div>
                  </div>
                  <div>{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 font-bold">Projects</div>
          <div className="flex flex-col gap-8">
            {projects.map((item, index) => (
              <div key={index}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="border-1 border-gray-200 rounded-md mb-2"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
                <div className="flex ">
                  <a href={item.link} target="_blank">
                    {item.title}
                    {"   "}
                    <MdOutlineOpenInNew className="inline text-gray-400" />
                  </a>
                </div>
                <div className="text-sm text-gray-400">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
