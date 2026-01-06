import {
  Car,
  Zap,
  Bot,
  Lock,
  Plane,
  Compass,
  Anchor,
  Plant,
  Sprout,
  Bird,
} from "lucide-react";

export const projects = [
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
    title: "Fully Autonomous Biomimetic underwater Robot",
    description:
      "A fully autonomous biomimetic underwater robot using AI vision and fin-based propulsion for silent navigation, marine life detection, and aquatic mapping.",
    icon: <Anchor className="w-6 h-6" />,
    tags: ["Raspberry Pi", "LiDAR", "Computer Vision"],
    image: "/projects/submarine.jpg",
    gradient: "from-teal-500/20 to-blue-500/20",
    people: [
      "Ayush Jain",
      "Shivi Mishra",
      "Shantanu Chouksey",
      "Akash Yadav",
      "Kunal Pawar",
      "Lochan Patil",
      "Ankita Garg",
      "Khushi Chouhan",
      "Disha Mittal",
      "Mittal Tulo",
    ],
    longDescription:
      "This fully autonomous underwater vehicle is designed for real-time aquatic exploration in controlled environments such as lakes and reservoirs. Powered by a Raspberry Pi 4, the system autonomously controls 3D motion using closed-loop feedback from IMU sensors and computer vision inputs from an FPV camera. Integrated LiDAR and sonar systems enable accurate environment mapping, obstacle detection, and collision avoidance without human intervention. GPS support and onboard data storage allow continuous logging of navigation paths, sensor data, and mission parameters for post-mission analysis. The platform is well-suited for research, environmental monitoring, and autonomous underwater surveying applications.",
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
      "A reliable access control system integrating RFID, Arduino, Firebase, and NodeMCU. Supports authentication, I2C communication, and cloud-based access management for smart environments.",
    icon: <Lock className="w-6 h-6" />,
    tags: ["Arduino", "RFID", "Firebase", "IoT"],
    image: "/projects/RFID.jpeg",
    gradient: "from-green-500/20 to-teal-500/20",
    people: ["Manav Sharma"],
    longDescription:
      "The system uses RFID readers connected to an Arduino microcontroller to authenticate users via pre-registered RFID tags. NodeMCU handles network communication and updates Firebase in real-time for remote access monitoring and control. Data integrity is maintained via I2C protocol. It's ideal for smart home or institutional setups requiring secure, scalable, and cloud-managed access control.",
  },
  {
    title: "Kashyap",
    description:
      "An AI-powered, 5G-enabled autonomous seed sowing machine designed for precision farming. Adapts dynamically to soil, seed, and weather conditions while providing real-time monitoring through a mobile application to improve crop yield.",
    icon: <Sprout className="w-6 h-6" />,
    tags: ["AI", "5G", "IoT", "Embedded Systems"],
    image: "/projects/kashyap.jpeg",
    gradient: "from-green-500/20 to-teal-500/20",
    people: [
      "Akshat Agarwal",
      "Akash Yadav",
      "Govind Bansal",
      "Gaurav Shukla",
      "Himanshu Bagri",
      "Manu Suneli",
      "Khushi Chouhan",
      "Kuhu Agrawal",
    ],
    longDescription:
      "Kashyap is an intelligent autonomous seed sowing solution built to make precision agriculture accessible to Indian farmers. Leveraging AI-driven decision-making and 5G connectivity, the system ensures accurate seed placement based on real-time analysis of soil characteristics, seed type, and prevailing weather conditions. Integrated sensors continuously collect field data, allowing the machine to self-adjust sowing depth, spacing, and speed for optimal results. A companion mobile application enables farmers to monitor operations, track performance metrics, and receive actionable insights remotely. By automating critical sowing tasks and reducing manual dependency, Kashyap enhances productivity, minimizes resource wastage, and supports sustainable, smart farming practices.",
  },
  {
    title: "Ornithopter",
    description:
      "A bio-inspired ornithopter featuring coordinated flapping wings, designed to achieve efficient aerodynamic performance, precise servo-based control, and optimized mechanical transmission for low-noise aerial operation.",
    icon: <Bird className="w-6 h-6" />,
    tags: ["Aerodynamics", "Bio-inspired", "Servo Control"],
    image: "/projects/Ornithopter.jpeg",
    gradient: "from-blue-500/20 to-sky-500/20",
    people: ["Kunal Pawar", "Gaurav Shukla", "Khushi Chouhan", "Shruti Somani"],
    longDescription:
      "This project focuses on the design and development of a bio-inspired ornithopter that replicates the flapping-wing flight mechanics of birds. The system emphasizes aerodynamic efficiency through carefully engineered wing geometry and synchronized flapping motion. Servo-based control mechanisms enable precise modulation of wing amplitude and frequency, while an optimized mechanical transmission ensures smooth power transfer and structural reliability. Due to its low acoustic signature and bird-like visual profile, the ornithopter is explored as a discreet aerial surveillance platform, particularly suited for restricted or anti-drone environments where conventional UAVs are easily detected. The project demonstrates the potential of flapping-wing aerial vehicles as an alternative to traditional propeller-driven drones for stealth and specialized reconnaissance applications.",
  },
];
