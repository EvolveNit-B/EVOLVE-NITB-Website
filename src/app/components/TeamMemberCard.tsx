import React from "react";
import { LinkedinIcon, InstagramIcon, GithubIcon } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  id: number;
  value: number;
  src: string;
  name: string;
  instagram: string;
  linkedin: string;
  position: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const { name, position, src, instagram, linkedin } = member;

  return (
    <div className="group relative w-full min-w-[300px] flex-shrink-0 overflow-hidden rounded-[1.5rem] bg-[#1c1c1e] p-2.5 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-green-500/20">
      {/* Upper Image Section */}
      <div className="relative flex aspect-[3/4] w-full flex-col items-center justify-end overflow-hidden rounded-xl bg-[#252527]">
        {/* Background Circle Effect - using Evolve brand green */}
        <div className="absolute left-1/2 top-[40%] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500 opacity-100 shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-110"></div>

        {/* Optional: A secondary blurred glow for depth */}
        <div className="absolute left-1/2 top-[40%] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500 opacity-40 blur-2xl filter"></div>

        {/* Member Image */}
        <div className="absolute inset-0 z-10">
          <Image
            src={src}
            alt={name}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Text Overlay Gradient */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-32 bg-gradient-to-t from-[#1c1c1e] via-[#1c1c1e]/80 to-transparent"></div>

        {/* Name and Position */}
        <div className="absolute bottom-2 z-30 flex w-full flex-col items-start px-3 pb-3">
          <h3 className="text-xl font-black tracking-tight text-white drop-shadow-md text-left leading-tight">
            {name}
          </h3>
          {position && (
            <p className="mt-0.5 text-xs font-semibold uppercase tracking-widest text-green-400 text-left">
              {position}
            </p>
          )}
        </div>
      </div>

      {/* Social Actions Section */}
      <div className="mt-2.5 grid grid-cols-2 gap-2.5">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex flex-col items-center justify-center rounded-xl border border-white/5 bg-[#2c2c2e] py-3 transition-all duration-300 hover:border-blue-500/50 hover:bg-[#1a2c3d]"
          >
            <LinkedinIcon className="mb-1 h-5 w-5 text-[#0077b5] transition-transform group-hover/btn:scale-110" />
            <span className="text-[10px] font-medium text-gray-400 group-hover/btn:text-white">
              LinkedIn
            </span>
          </a>
        )}

        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex flex-col items-center justify-center rounded-xl border border-white/5 bg-[#2c2c2e] py-3 transition-all duration-300 hover:border-pink-500/50 hover:bg-[#3d1a2c]"
          >
            <InstagramIcon className="mb-1 h-5 w-5 text-[#E4405F] transition-transform group-hover/btn:scale-110" />
            <span className="text-[10px] font-medium text-gray-400 group-hover/btn:text-white">
              Instagram
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
