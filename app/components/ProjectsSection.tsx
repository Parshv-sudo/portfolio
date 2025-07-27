'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          Full Stack Projects
        </motion.h2>

        <div className="space-y-16">
          {/* Smart Rental DBMS App */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Smart Rental Service Platform</h3>
                    <p className="text-gray-400">
                      A full-stack platform for PGs and hostels to list, manage, and rent rooms with real-time availability, secure logins, and admin dashboards.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Stack</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• React & Tailwind</li>
                        <li>• User Authentication</li>
                        <li>• Property Listing UI</li>
                        <li>• Booking Dashboard</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Stack</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Node.js + Express</li>
                        <li>• MySQL with Sequelize</li>
                        <li>• RESTful APIs</li>
                        <li>• Role-based Access Control</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-teal-400">Current Progress</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Completed: Database Schema, Auth System</li>
                      <li>• In Progress: Frontend UI & Integration</li>
                      <li>• Planned: Payment Gateway & Admin Tools</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Voice + Gesture Controlled Robotic Arm */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Voice & Gesture Controlled Robotic Arm</h3>
                    <p className="text-gray-400">
                      A robotic arm that responds to hand gestures and voice commands using Arduino, servo motors, and Python-based control logic.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">Hardware</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Arduino Uno</li>
                        <li>• Servo Motors</li>
                        <li>• Ultrasonic Sensor</li>
                        <li>• Glove Sensor Input</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">Software</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Python Speech Recognition</li>
                        <li>• Serial Communication</li>
                        <li>• Real-time Signal Mapping</li>
                        <li>• Safety Threshold Alerts</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-teal-400">Highlights</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Gesture + Voice Multi-input System</li>
                      <li>• Works over Bluetooth/Serial USB</li>
                      <li>• Demo Ready for Hardware Showcases</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}