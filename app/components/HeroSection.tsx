'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);

	return (
		<section className="min-h-screen relative overflow-hidden py-24 md:py-0">
			{/* Background grid */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
			</div>

			{/* Main content */}
			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
					{/* Name, Role, Description */}
					<div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
						<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500">
							Parshv Runwal
						</h1>
						<h2 className="text-2xl md:text-4xl font-bold text-white">Developer, Roboticist & Creative Technologist</h2>
						<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
							I’m a 2nd year Computer Engineering student building future-ready software and intelligent robots. Passionate about full-stack
							apps, federated learning, and solving real-world problems.
						</p>
						<p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
							Currently building a smart rental platform and experimenting with gesture-controlled robotic arms.
						</p>

						{/* Currently Working On Badge */}
						<div className="mt-4">
							<span className="inline-block bg-gray-800/60 text-sm md:text-base text-white px-4 py-1.5 rounded-full border border-gray-700">
								🛠️ Currently working on: <strong>LightFL (Federated Learning System)</strong>
							</span>
						</div>
					</div>

					{/* Resume Button */}
					<div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 md:mb-8">
						<a
							href="/Parshv_Runwal_Resume.pdf"
							download
							className="inline-block px-6 py-2.5 text-sm md:text-base bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
						>
							📄 Download Resume
						</a>
					</div>

					{/* Tech Tags */}
					<div className="flex flex-wrap justify-center gap-2 md:gap-3">
						<span className="px-3 py-1.5 bg-cyan-500/10 rounded-full text-cyan-400 text-xs md:text-sm">React & Next.js</span>
						<span className="px-3 py-1.5 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">MySQL</span>
						<span className="px-3 py-1.5 bg-yellow-500/10 rounded-full text-yellow-400 text-xs md:text-sm">Python</span>
						<span className="px-3 py-1.5 bg-green-500/10 rounded-full text-green-400 text-xs md:text-sm">Robotics</span>
						<span className="px-3 py-1.5 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">Federated Learning</span>
					</div>
				</motion.div>

				{/* Interactive Cards */}
				<div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
					>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
							{/* Frontend */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'frontend'
										? 'bg-cyan-500/20 border-cyan-500/50'
										: 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('frontend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-cyan-400">Frontend Development</h3>
								<ul className="space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
										Modern UI/UX with React & Tailwind
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
										Mobile-first Responsive Design
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
										Interactive Visuals & Animations
									</li>
								</ul>
							</div>

							{/* Backend */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'backend'
										? 'bg-purple-500/20 border-purple-500/50'
										: 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('backend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-400">Backend Development</h3>
								<ul className="space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
										REST APIs & Database Design
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
										Authentication & Authorization
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
										Data Management & Deployment
									</li>
								</ul>
							</div>

							{/* DevOps / Creative Tech */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'devops'
										? 'bg-green-500/20 border-green-500/50'
										: 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('devops')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-green-400">Creative Tech & Systems</h3>
								<ul className="space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
										Robotics & Gesture Interfaces
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
										Federated & Edge Learning
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
										Simulation & Prototyping
									</li>
								</ul>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
