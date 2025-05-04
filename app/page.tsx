"use client";
import dynamic from 'next/dynamic';
import Image from "next/image";
import * as FaIcons from "react-icons/fa";
import Lanyard from './components/Lanyard/Lanyard';
import SplitText from './components/SplitText/SplitText';
import AnimatedContent from './components/AnimatedContent/AnimatedContent';
import BlurText from './components/BlurText/BlurText';
import Squares from './components/Squares/Squares';
import SpotlightCard from './components/SpotlightCard/SpotlightCard';
import { FaHtml5, FaCss3Alt, FaJs, FaLaravel, FaReact, FaDatabase, FaVuejs, FaNodeJs, FaGitAlt, FaDocker, FaPython, FaBootstrap } from 'react-icons/fa';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black relative">
      {/* Background Animation Squares */}
      <div className="absolute inset-0 h-full w-full z-0">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#C6F10E"
        />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 right-0 left-0 z-[999] flex justify-end items-center px-4 sm:px-6 py-4 text-white">
        <div className="flex items-center space-x-4 sm:space-x-6">
          <a href="https://www.linkedin.com/in/pradika-fajar-b057771b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android-app" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-400"><FaIcons.FaLinkedin /></a>
          <a href="https://github.com/pradikafajar" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-400"><FaIcons.FaGithub /></a>
          <a href="https://www.instagram.com/prdka__?igsh=MWpheGxteGZ5YmlwOQ==" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-400"><FaIcons.FaInstagram /></a>
          <a href="mailto:pradikafjr@gmail.com" className="px-4 py-2 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-600 transition duration-300 text-sm sm:text-base">Let's Connect</a>
        </div>

        {/* Hamburger Menu */}
        <button
          className="sm:hidden text-white text-3xl ml-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 right-0 left-0 bg-black text-white flex flex-col items-center sm:hidden z-[999] px-4 py-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="py-2 text-2xl">LinkedIn</a>
            <a href="https://github.com/pradikafajar" target="_blank" rel="noopener noreferrer" className="py-2 text-2xl">GitHub</a>
            <a href="https://www.instagram.com/prdka__?igsh=MWpheGxteGZ5YmlwOQ==" target="_blank" rel="noopener noreferrer" className="py-2 text-2xl">Instagram</a>
            <a href="mailto:pradikafjr@gmail.com" className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-600 transition duration-300 text-sm sm:text-base">Let's Connect</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-32 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="order-2 md:order-1 flex justify-center">
          <Lanyard position={[0, 0, 12]} gravity={[0, -30, 0]} />
        </div>
        <div className="order-1 md:order-2 flex items-center justify-center">
          <div className="flex flex-col gap-6">
            <AnimatedContent distance={150} direction="horizontal" reverse={false} config={{ tension: 80, friction: 20 }} initialOpacity={0.2} animateOpacity scale={1.1} threshold={0.2}>
              <div className="flex flex-col items-start max-w-xl">
                <SplitText text="Hello, I'M Pradika" className="text-4xl sm:text-5xl md:text-6xl font-semibold text-start text-white" delay={50} animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }} animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }} threshold={0.2} rootMargin="-50px" />
                <SplitText text="FullStack Developer" className="text-2xl sm:text-3xl md:text-4xl font-semibold text-start text-[#C6F10E]" delay={100} animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }} animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }} threshold={0.2} rootMargin="-50px" />
                <BlurText text="I am a fresh graduate in Information Systems with experience in system analysis and web application development. Lets Work With Me." delay={150} animateBy="words" direction="top" className="text-base sm:text-lg md:text-xl mb-8 text-white max-w-md" />
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>

      {/* Tech Skills Section */}
      <section id="tech-skills" className="flex justify-center items-center min-h-screen py-24 px-4 sm:px-6 bg-black text-white">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">Tech Skills</h2>
          <BlurText text="Here are the programming languages, Tools, Frameworks, and Libraries that I am good at" delay={50} animateBy="words" direction="top" className="text-base sm:text-lg mb-8 text-white text-center max-w-2xl" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-10 text-4xl sm:text-6xl text-center">
            {[
              { icon: FaHtml5, label: 'HTML', color: 'text-orange-500' },
              { icon: FaCss3Alt, label: 'CSS', color: 'text-blue-500' },
              { icon: FaJs, label: 'JavaScript', color: 'text-yellow-500' },
              { icon: FaLaravel, label: 'Laravel', color: 'text-red-600' },
              { icon: FaReact, label: 'React', color: 'text-blue-500' },
              { icon: FaDatabase, label: 'MySQL', color: 'text-green-500' },
              { icon: FaVuejs, label: 'Vue.js', color: 'text-green-500' },
              { icon: FaNodeJs, label: 'Node.js', color: 'text-green-600' },
              { icon: FaGitAlt, label: 'Git', color: 'text-orange-700' },
              { icon: FaDocker, label: 'Docker', color: 'text-blue-600' },
              { icon: FaPython, label: 'Python', color: 'text-yellow-400' },
              { icon: FaBootstrap, label: 'Bootstrap', color: 'text-purple-400' },
            ].map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex flex-col items-center transition duration-300 transform hover:scale-110 hover:text-white">
                <Icon className={color} />
                <span className="mt-2 sm:mt-4 text-sm sm:text-lg font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 bg-[#0f0f0f] text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <SpotlightCard className="rounded-2xl shadow-md bg-[#1a1a1a] border border-gray-800 hover:shadow-lg transition duration-300 p-6 space-y-4">
              <h3 className="text-2xl font-semibold">Inventori UMKM</h3>
              <p className="text-sm text-gray-400">Sistem informasi inventori berbasis web untuk toko kue UMKM menggunakan Laravel & MySQL.</p>
              <div className="flex justify-between items-center">
                <Button variant="outline" className="text-white border-white"><Github className="mr-2 h-4 w-4" /> GitHub</Button>
                <Button variant="secondary"><ExternalLink className="mr-2 h-4 w-4" /> Live Demo</Button>
              </div>
            </SpotlightCard>

            {/* Project 2 */}
            <SpotlightCard className="relative rounded-2xl shadow-md bg-[#1a1a1a] border border-gray-800 hover:shadow-lg transition duration-300 p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-white">Magang KOMINFO</h3>
              <div className="w-full h-48 relative rounded-lg overflow-hidden">
                <Image src="/assets/gambar/projek2.png" alt="Project" fill className="object-cover" />
              </div>
              <p className="text-sm text-gray-400">Website pendaftaran magang dengan fitur filtering & validasi, dibangun selama magang di KOMINFO.</p>
              <div className="flex justify-between items-center">
                <a href="https://github.com/pradikafajar/aplikasi-pendaftaran-magang" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="text-white border-white"><Github className="mr-2 h-4 w-4" /> GitHub</Button>
                </a>
                <Button variant="secondary"><ExternalLink className="mr-2 h-4 w-4" /> Live Demo</Button>
              </div>
            </SpotlightCard>

            {/* Project 3 */}
            <SpotlightCard className="rounded-2xl shadow-md bg-[#1a1a1a] border border-gray-800 hover:shadow-lg transition duration-300 p-6 space-y-4">
              <h3 className="text-2xl font-semibold">Diskusi Kopi</h3>
              <p className="text-sm text-gray-400">Landing page elegant untuk street coffee shop bernama “Diskusi Kopi” menggunakan Next.js & Tailwind.</p>
              <div className="flex justify-between items-center">
                <Button variant="outline" className="text-white border-white"><Github className="mr-2 h-4 w-4" /> GitHub</Button>
                <Button variant="secondary"><ExternalLink className="mr-2 h-4 w-4" /> Live Demo</Button>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>
    </div>
  );
}
