import React from 'react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="About Me"
          subtitle="My background, journey, and what drives me"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Two Larger Local Images */}
          <div className="flex gap-4">
            <div className="flex-1 aspect-[4/5]">
              <img
                src="/image/profile_1.png"
                alt="Professional portrait"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="flex-1 aspect-[4/5]">
              <img
                src="/image/profile_2.png"
                alt="Working at desk"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right Side - Text and Info Cards */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Ezhilnilavan E</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              As a passionate frontend developer,
              I blend creativity with technical expertise to build engaging and
              user-friendly web applications. My journey in web development began
              when I discovered the perfect intersection between design and programming.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I specialize in React and modern JavaScript, creating responsive
              interfaces that prioritize both aesthetics and performance. I'm
              constantly exploring new technologies and approaches to deliver
              the best possible user experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold mb-1">Course</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Python Full Stack Developer
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-bold mb-1">Education</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  B.E(CSE)
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-pink-100 dark:bg-pink-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <h4 className="font-bold mb-1">Projects</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  10+ completed projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
