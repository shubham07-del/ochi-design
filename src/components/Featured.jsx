import React from "react";

const Featured = () => {
  const projects = [
    {
      left: {
        name: "Salience Labs",
        img: "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png",
        tags: ["BRAND IDENTITY", "PITCH DECK", "STRATEGY", "WEBSITE"],
      },
      right: {
        name: "Salience Labs",
        img: "https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png",
        tags: ["CONFERENCE", "EXECUTIVE KEY NOTE", "PRODUCT LAUCH"],
      },
    },
    {
      left: {
        name: "SOMA ENERGY",
        img: "https://ochi.design/wp-content/uploads/2025/08/Soma_Website_0-1.png",
        tags: ["BRAND IDENTITY", "PITCH DECK", "STRATEGY", "WEBSITE"],
      },
      right: {
        name: "AH2 & Matt Horn",
        img: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png",
        tags: ["CONFERENCE", "EXECUTIVE KEY NOTE", "PRODUCT LAUCH"],
      },
    },
    {
      left: {
        name: "VISE",
        img: "https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png",
        tags: ["BRAND IDENTITY", "PITCH DECK", "STRATEGY", "WEBSITE"],
      },
      right: {
        name: "Softstart",
        img: "https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1101.jpg",
        tags: ["CONFERENCE", "EXECUTIVE KEY NOTE", "PRODUCT LAUCH"],
      },
    },
  ];

  const ProjectCard = ({ name, img, tags }) => (
    <div className="w-full md:w-1/2 p-2 rounded-3xl">
      <div className="top flex gap-3 items-center">
        <div className="w-3 h-3 rounded-full bg-zinc-100"></div>
        <h1 className="uppercase">{name}</h1>
      </div>
      <div className="w-full hover:scale-[0.97] transition-all duration-700 ease-in mt-3 h-[45vh] sm:h-[60vh] md:h-[75vh] overflow-hidden rounded-2xl">
        <img
          className="hover:scale-[1.09] transition-all ease-in duration-700 w-full h-full object-fill"
          src={img}
          alt={name}
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
        {tags.map((tag, idx) => (
          <a
            key={idx}
            className="px-2 py-1 text-xs sm:text-sm hover:bg-white hover:text-black transition-all ease-in rounded-full text-zinc-100 border border-zinc-200"
            href="#"
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full pt-16 md:pt-26 pb-8">
      <div className="w-full px-5 sm:px-8 md:px-10 pb-8 md:pb-10 border-b border-[#4e582f]">
        <h1 className="text-3xl sm:text-4xl md:text-6xl">Featured Projects</h1>
      </div>

      {projects.map((pair, idx) => (
        <div
          key={idx}
          className="w-full p-4 sm:p-6 md:p-10 gap-4 md:gap-5 flex flex-col md:flex-row min-h-auto md:min-h-screen"
        >
          <ProjectCard {...pair.left} />
          <ProjectCard {...pair.right} />
        </div>
      ))}
    </div>
  );
};

export default Featured;
