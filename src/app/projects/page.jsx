"use client";

export const dynamic = 'force-dynamic';

import {
  ExternalLink,
  Car,
  Zap,
  Bot,
  Lock,
  Plane,
  Compass,
  Anchor,
} from "lucide-react";
import ProjectModal from "../components/ProjectModal";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "auto";
  }, [modalOpen]);

  const projects = [
    {
      title: "E Maruti 800",
      description:
        "An electric Maruti 800 with a custom battery and ESP32 telemetry. Features include GPS, regenerative braking, solar charging, mobile app integration, a 60 km/h top speed, and 80–100 km range. ",
      icon: <Car className="w-6 h-6" />,
      tags: ["EV Conversion", "Telematics", "Automotive"],
      image: "/projects/Maruti800.jpeg",
      gradient: "from-yellow-500/20 to-orange-500/20",
      people: [
        "Ayush Jain",
        "Yash Kumar Atlani",
        "Anant Shrivastava",
        "Govind Bansal",
      ],
      longDescription:
        "This electric car conversion repurposes a scrap Maruti IC engine vehicle into a sustainable EV, integrating hardware and control systems for efficient performance. Powered by rechargeable batteries, it can travel up to 100 km at a steady speed of 70 km/h. The design incorporates regenerative braking to optimize energy use, along with smart monitoring for performance and range. Developed within three months, it represents an eco-friendly and innovative approach to green mobility.",
    },
    {
      title: "Electric Bicycle",
      description:
        "A connected e-bicycle featuring a 36V–42V battery, ESP32-based telemetry, GPS tracking, and Pedal Assist Sensor. Delivers up to 40 km/h speed, 35–40 km range, solar charging, and mobile app integration.",
      icon: <Zap className="w-6 h-6" />,
      tags: ["IoT", "ESP32", "Electric Vehicle", "Solar"],
      image: "/projects/ev_cycle.jpg",
      gradient: "from-yellow-500/20 to-orange-500/20",
      people: [
        "Yash Kumar Atlani",
        "Ayush Jain",
        "Aman Sharma",
        "Anant Shrivastva",
        "Abhinav Chawda",
      ],
      longDescription:
        "This e-bicycle integrates hardware and IoT components like ESP32 for real-time data acquisition, including speed, battery level, and location via GPS. It features a Pedal Assist System (PAS) for energy-efficient riding, along with a regenerative braking system and solar charging to extend battery life. The app interface provides live tracking, route history, and performance analytics, making it a sustainable and smart commuting option.",
    },
    {
      title: "Swarm Drones",
      description:
        "A multi-drone system using Python and DroneKit for coordinated flight. Implements swarm intelligence, obstacle avoidance, master-slave control, gripper mechanism, and color-based object detection.",
      icon: <Bot className="w-6 h-6" />,
      tags: ["Python", "AI", "Robotics"],
      image: "/projects/swarm_drones.jpg",
      gradient: "from-blue-500/20 to-purple-500/20",
      people: [
        "Aman Sharma",
        "Akshat Agarwal",
        "Sweksha Vats",
        "Sarthak Jain",
        "Khushi Singh",
      ],
      longDescription:
        "A group of autonomous drones operate collaboratively in a swarm architecture using DroneKit-Python for mission planning and MAVLink communication. A master drone coordinates the slaves with real-time telemetry, enabling synchronized movement and obstacle avoidance. Color detection and vision-based object tracking support dynamic payload delivery with servo grippers. The system models real-world applications like coordinated search-and-rescue and warehouse automation.",
    },
    {
      title: "Semi Autonomous Submarine",
      description:
        "A semi-autonomous underwater vehicle with 3D motion. Integrates LiDAR, FPV camera, GPS, Raspberry Pi 4, and real-time data logging for aquatic exploration and mapping.",
      icon: <Anchor className="w-6 h-6" />,
      tags: ["Raspberry Pi", "LiDAR", "Computer Vision"],
      image: "/projects/submarine.jpg",
      gradient: "from-teal-500/20 to-blue-500/20",
      people: [
        "Ayush Jain",
        "Shivi Mishra",
        "Shantanu Chouksey",
        "Akash Yadav",
        "Khushi Chouhan",
        "Disha Mittal",
      ],
      longDescription:
        "This semi-autonomous underwater vehicle is designed for real-time aquatic exploration in controlled environments like lakes or reservoirs. It uses a Raspberry Pi 4 to control movement in 3D space, with feedback from IMU sensors and live feed from an FPV camera. LiDAR and sonar systems aid in mapping surroundings and avoiding obstacles. GPS and onboard storage log movement data for later analysis, suitable for research and environmental monitoring.",
    },
    {
      title: "Maze Solver Robot",
      description:
        "An autonomous robot using the Flood Fill algorithm for maze solving. Equipped with IR and proximity sensors for real-time mapping, efficient navigation, and path optimization.",
      icon: <Compass className="w-6 h-6" />,
      tags: ["AI", "Pathfinding", "Sensors", "Arduino"],
      image: "/projects/maze_solver.jpeg",
      gradient: "from-red-500/20 to-orange-500/20",
      people: [
        "Yash Atlani",
        "Anant Shrivastav",
        "Disha Mittal",
        "Karan Upadhyay",
        "Deepanshu Kumar",
        "Kunal Pawar",
      ],
      longDescription:
        "This project presents an autonomous robot capable of navigating mazes using ultrasonic sensors and the flood-fill algorithm. Built on a compact wooden chassis and powered by Arduino Uno and L293D motor shield, it can detect walls, calculate optimal paths, and make real-time decisions. The system is designed for precision, adaptability, and real-time response, useful for automation challenges.",
    },
    {
      title: "Hexapod",
      description:
        "A six-legged robot using an Arduino Mega and 18 servos for precise movement and multiple gaits to navigate uneven terrain with superior stability and reliable performance.",
      icon: <Compass className="w-6 h-6" />,
      tags: ["Embedded Systems", "Robotics"],
      image: "/projects/hexapod.jpeg",
      gradient: "from-red-500/20 to-orange-500/20",
      people: [
        "Aayush Kanungo",
        "Aryan Prajapati",
        "Himanchal Mishra",
        "Khusi Chouhan",
        "Abhinandan Keshari",
      ],
      longDescription:
        "This project develops a six-legged hexapod robot using Arduino Mega and 18 MG90S servo motors. Each leg has three degrees of freedom, allowing precise and flexible movement. The robot utilizes inverse kinematics for smooth and accurate leg coordination and supports multiple walking gaits, such as tripod and wave. Designed for navigating uneven terrain with stability and efficiency, the hexapod is ideal for research, rescue missions, and educational applications.",
    },
    {
      title: "Abhimanyu",
      description:
        "A remote-controlled car using Arduino Uno. It receives commands from a hand gesture remote via an NRF Module, controlling movement for a compact, low-cost robotics project.",
      icon: <Car className="w-6 h-6" />,
      tags: ["Hand Gesture Control", "Mechatronics"],
      image: "/projects/abhimanyu.jpeg",
      gradient: "from-red-500/20 to-orange-500/20",
      people: [
        "Anushka Jain",
        "Manav Sharma",
        "Shantanu Chouksey",
        "Akash Yadav",
      ],
      longDescription:
        "This project involves building a remote-controlled car using Arduino Uno. It uses NRF Module to receive commands from remote hand gesture, controlling motor movement via an L298N motor driver. The car can move forward, backward, and turn in both directions. It’s a compact, low-cost project ideal for beginners to explore embedded systems, wireless control, and robotics.",
    },
    {
      title: "Ionic Thrusters",
      description:
        "An electric propulsion prototype that ionizes xenon to produce efficient, combustion-free thrust for advanced space applications like satellite maneuvering with incredible speed and precision.",
      icon: <Zap className="w-6 h-6" />,
      tags: ["Space Tech", "Physics", "Propulsion"],
      image: "/projects/ionic_thruster.jpeg",
      gradient: "from-indigo-500/20 to-blue-500/20",
      people: [
        "Anushka Jain",
        "Abhinandan Keshari",
        "Lakshya Singh",
        "Manav Sharma",
        "Himanchal Sharma",
        "Lochan Patil",
        "Ankita Garg",
      ],
      longDescription:
        "The project focuses on building a functional prototype of an ion propulsion system where xenon gas is ionized and accelerated via electrostatic fields to generate thrust. Despite its low thrust output, the system offers extremely high efficiency (Isp) and is suitable for long-duration deep-space missions. The experiment validated key principles of plasma propulsion and energy-to-mass conversion.",
    },
    {
      title: "RC Air Glider",
      description:
        "A custom foam board glider with high-aspect-ratio wings and a radio receiver. It features a servo-controlled elevator and rudder, and is optimized for stable soaring and responsive flight.",
      icon: <Plane className="w-6 h-6" />,
      tags: ["Aerodynamics", "RC", "Mechanical"],
      image: "/projects/glider.jpg",
      gradient: "from-sky-500/20 to-cyan-500/20",
      people: ["Yash Kumar Atlani", "Siddharth Sharma"],
      longDescription:
        "Designed with an emphasis on aerodynamic efficiency, this air glider features a lightweight foam body with high aspect ratio wings for enhanced lift-to-drag ratio. Radio-controlled servos manipulate the elevator and rudder, allowing for stable gliding and turns. Ideal for learning basic aerodynamics and RC control, the glider was tested in various wind conditions to optimize flight characteristics.",
    },
    {
      title: "RFID Door Lock System",
      description:
        "A secure access solution combining RFID, Arduino, Firebase, and NodeMCU. Enables efficient authentication, I2C communication, and cloud-based access management for smart environments.",
      icon: <Lock className="w-6 h-6" />,
      tags: ["Arduino", "RFID", "Firebase", "IoT"],
      image: "/projects/RFID.jpeg",
      gradient: "from-green-500/20 to-teal-500/20",
      people: ["Manav Sharma"],
      longDescription:
        "The system uses RFID readers connected to an Arduino microcontroller to authenticate users via pre-registered RFID tags. NodeMCU handles network communication and updates Firebase in real-time for remote access monitoring and control. Data integrity is maintained via I2C protocol. It's ideal for smart home or institutional setups requiring secure, scalable, and cloud-managed access control.",
    },
  ];

  return (
    <>
      <Navbar />
      <motion.div className="relative w-full min-h-[100vh] bg-[#121212] overflow-hidden flex flex-col items-center md:px-20 px-5 py-16 pt-22 text-white text-center ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="md:text-7xl text-4xl font-bold tracking-wide">
            What We Build At<span className="text-green-500"> Evolve</span>
          </h1>
          <p className="md:max-w-3xl max-w-4xs text-sm mt-6 font-normal text-gray-400">
            Our projects are a reflection of rigorous problem-solving,
            interdisciplinary collaboration, and a commitment to technical
            excellence. Whether in embedded systems, software engineering, or
            AI-driven solutions, each initiative represents a hands-on approach
            to learning and innovation in real-world contexts.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y:   50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-neutral-950 overflow-hidden backdrop-blur-sm border-[0.5px] border-green-600 rounded-2xl hover:shadow-[1px_0px_10px_1px_rgba(34,197,94,0.6)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-neutral-950/80 backdrop-blur-sm rounded-full flex items-center justify-center text-green-500">
                    {project.icon}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start px-6 pt-6 pb-7 mt-4 gap-4">
                <div>
                  <h1 className="md:text-2xl text-xl font-semibold group-hover:text-green-600">
                    {project.title}
                  </h1>
                </div>
                <div>
                  <p className="text-gray-400 md:text-md md:tracking-wider md:leading-5 text-xs font-medium text-left max-w-md">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="bg-green-700/20 hover:bg-green-800/20 px-3 py-1 rounded-xl text-green-500 border-[1px] border-green-800 md:text-sm text-xs transition-colors duration-100"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div
                  onClick={() => openModal(projects[index])}
                  className="bg-green-600 py-1 mt-5 hover:bg-green-700 w-[100%] rounded-lg text-black"
                >
                  <button className="font-medium tracking-wide">Details</button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        <ProjectModal
          isOpen={modalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      </motion.div>
      <Footer />
    </>
  );
}
