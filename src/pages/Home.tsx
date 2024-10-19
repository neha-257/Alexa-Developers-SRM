import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';

const Home: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.to(sectionRef.current.children, {
        y: -40,
        borderColor: "#ffffff",
        ease: "sine.inOut",
        stagger: { each: 0.05, from: "end", repeat: -1, yoyo: true }
      });
    }
  }, []);

  return (
    <>
      <main className="bg-gradient-to-r from-[#2C5364] via-[#203A43] to-[#0F2027] min-h-screen flex items-center justify-between px-8 text-white overflow-hidden">
        <section ref={sectionRef} className="w-1/2 h-screen relative grid place-items-center" style={{ transform: 'rotateX(50deg)' }}>
          {[...Array(25)].map((_, index) => (
            <div key={index} className={`rounded-full absolute border`} style={{
              width: `${120 - index * 4}%`,
              height: `${120 - index * 4}%`,
              borderColor: `rgba(255, 255, 255, ${0.1 + index * 0.03})`
            }}></div>
          ))}
        </section>

        <div className="text-right z-10 w-1/2">
          <h1 className="text-7xl font-bold mb-4 font-poppins" style={{ fontVariationSettings: '"slnt" 0, "wdth" 400, "wght" 900, "INKT" 400' }}>
            Alexa Developers SRM
          </h1>
          <p className="text-3xl mb-8 font-poppins">
            Voices United, Tech Amplified
          </p>
          <div className="mt-10">
            <a
              href="/apply"
              className="inline-flex items-center px-6 py-3 border border-transparent text-xl font-medium rounded-md text-[#392D69] bg-white hover:bg-opacity-90 transition-colors duration-300"
            >
              Join Us
              <ChevronRight className="ml-2 h-6 w-6" />
            </a>
          </div>
        </div>
      </main>

      <section className="py-16 text-white bg-gradient-to-r from-[#2C5364] via-[#203A43] to-[#0F2027] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold mb-8 font-poppins" style={{ fontVariationSettings: '"slnt" 0, "wdth" 400, "wght" 900, "INKT" 400' }}>
            About Us
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Welcome to Alexa Developers SRM, a thriving, student-run technical organization at SRMIST that brings technology and community together. We create an open atmosphere for tech enthusiasts to explore, learn, and grow, with a focus on voice-controlled technologies, application development, and UI/UX design via hands-on events and workshops. Our club is a hotbed of collaboration and innovation, where members can experiment, share expertise, and make a real difference. Whether you're a newcomer to technology or a seasoned professional, our wide range of workshops, hackathons, and contests provide ongoing learning and practical skill development.
            Together we build a community, where creativity knows no bounds and collaboration is key.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
