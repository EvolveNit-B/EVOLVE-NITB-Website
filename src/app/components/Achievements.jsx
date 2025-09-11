"use client";
import { Trophy, Award, Star, Target } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.02,
      duration: 0.8,
      ease: "easeInOut",
    },
  }),
};

const Card = (props) => (
  <motion.div
    className="bg-[#1D241F] rounded-lg shadow-xl overflow-hidden flex flex-col"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    custom={props.index}
  >
    <div className="relative h-[220px] sm:h-[260px] overflow-hidden">
      <motion.img
        src={props.image || "about_us_pic.jpg"}
        alt={props.title}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        whileHover={{ scale: 1.05 }}
      />
      <motion.span
        className="absolute top-3 right-3 text-green-500 p-2 bg-gray-800 rounded-full cursor-pointer hover:opacity-85"
        whileHover={{ scale: 1.2 }}
      >
        {props.icon}
      </motion.span>
    </div>

    <div className="p-3 flex flex-col flex-grow relative">
      <div>
        <div className="flex flex-col gap-1 mb-2 md:h-[80px]">
          <h1 className="text-white font-bold text-xl tracking-wide ">
            {props.title}
          </h1>
          <p className="text-gray-400 text-sm">{props.organization}</p>
        </div>
        <p className="inline-flex items-center gap-2 text-sm text-green-500 bg-transparent border border-green-500 px-3 py-1 rounded-full bg-primary/10 text-primary border-primary/20 whitespace-nowrap">
          🏆 {props.achievement}
        </p>
        <p className="text-gray-400 mt-4 text-sm leading-relaxed line-clamp-4">
          {props.description}
        </p>
      </div>
      <br />
      <p className="text-green-500 font-semibold absolute bottom-2 left-3 pt-3">{props.year}</p>
    </div>
  </motion.div>
);

const AchievementsSection = () => {
  
    const achievements = [
      {
        title: "Gujarat Robofest 4.0",
        organization: "Gujarat Robofest",
        achievement: "Grand Finale Winners",
        description:
          "Two teams from Evolve, the Fun Robotics & Maze Solving Robot team and the Swarm Robot team, advanced to the ROBOFEST Gujarat 4.0 Grand Finale, winning a ₹2 Lakh cash prize per team for their technical prowess.",
        year: "2024",
        level: "National",
        icon: <Award className="w-6 h-6" />,
        image: "/Achievement/guj_robofest.png",
      },
      {
        title: "ISRO-IROC",
        organization: "ISRO",
        achievement: "First Round Qualified",
        description:
          "EVOLVE cleared IROC’s first round, demonstrating robotics and design expertise, proving international competitiveness, technical strength, and readiness for advanced global challenges.",
        year: "2024",
        level: "International",
        icon: <Target className="w-6 h-6" />,
        image: "/projects/swarm_drones.jpg",
      },
      {
        title: "TATA Technologies InnoVent",
        organization: "TATA Technologies",
        achievement: "National Finalists",
        description:
          "EVOLVE reached InnoVent national finals with logistics management innovation, recognized for efficiency and practicality, placing members among India’s finest innovators and visionaries.",
        year: "2024",
        level: "National",
        icon: <Star className="w-6 h-6" />,
        image: "https://evolve-nitb.vercel.app/Achievements/tata_inno.jpg",
      },
      {
        title: "5G Innovation Hackathon",
        organization:
          " Department of Telecommunication, Ministry of Communication (Government of India)",
        achievement: "Grand Finalists",
        description:
          "Evolve, MANIT Bhopal, advanced to the 5G Hackathon finals, ranked 45th in RISC-V, and made the C2S quarterfinals.",
        year: "2024",
        level: "National",
        icon: <Star className="w-6 h-6" />,
        image: "/Achievement/5G_Hackathon.jpg",
      },
      {
        title: "Bajaj Torq and Ohm",
        organization:
          "Bajaj Auto",
        achievement: "Grand Finalists",
        description:
          "Evolve, MANIT Bhopal, advanced to the 5G Hackathon finals, ranked 45th in RISC-V, and made the C2S quarterfinals.",
        year: "2024",
        level: "National",
        icon: <Star className="w-6 h-6" />,
        image: "/Achievement/bajaj.jpg",
      },
      {
        title: "Triumph 24 - Quizzard Championship",
        organization: "प्रभोत्सव'24",
        achievement: "Top 3 Positions",
        description:
          "EVOLVE dominated Quizzard 2024, securing top three ranks with sharp knowledge and research skills. Their teamwork, adaptability, and versatility proved innovative thinkers.",
        year: "2024",
        level: "National",
        icon: <Trophy className="w-6 h-6" />,
        image:
          "https://res.cloudinary.com/deblyam9n/image/upload/v1739532116/triumph_wwinners_certificate_and_trophies_tljmkr.jpg",
      },
      {
        title: "Smart Innovate Hackathon",
        organization: "Robu",
        achievement: "Winners",
        description:
          " A team from Evolve took 1st place in the Smart Innovate Hackathon 2025, winning a ₹3,000 prize for their impressive teamwork and innovation.",
        year: "2024",
        level: "State",
        icon: <Trophy className="w-6 h-6" />,
        image: "/Achievement/smart_innovate.webp",
      },
      {
        title: "Robu Creato 3.0",
        organization: "Robu",
        achievement: "Winners",
        description:
          "A team from Evolve achieved a notable 3rd place in the Robu Creato 3.0 online project-building competition, winning a ₹4000 cash prize and showcasing their creativity and skills.",
        year: "2024",
        level: "State",
        icon: <Award className="w-6 h-6" />,
        image: "/Achievement/robu.jpeg",
      },
      {
        title: "Sagar Fiesta",
        organization: "Sagar Institute of Science and Technology Bhopal",
        achievement: "Winner",
        description:
          "Team Evolve triumphed at the SiSTec competition, clinching a victory in the Electro-Spark Category and earning a Special mention in the Ideathon Category, showcasing their technical ingenuity and versatility.",
        year: "2024",
        level: "State",
        icon: <Trophy className="w-6 h-6" />,
        image: "/Achievement/sagar_fiesta.jpg",
      },
    ];


  return (
    <motion.section
      id="achievements"
      className="md:py-14 pb-16 bg-[#121212] border-0 py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-white font-semibold text-3xl md:text-6xl text-center tracking-wide"
          variants={fadeInUp}
        >
          Our <span className="text-green-500">Achievements</span>
        </motion.h1>
        <motion.p
          className="text-gray-400 text-center md:mx-[15vw] lg:mx-[20vw] text-lg tracking-tight md:text-[18px] mt-6"
          variants={fadeInUp}
          custom={2}
        >
          Excellence recognized at national and international levels. Our team's
          dedication and innovative spirit have earned prestigious awards and
          recognition.
        </motion.p>
      </div>
      <div className="container sm:mx-auto px-6 md:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} {...achievement} index={index + 3} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AchievementsSection;
