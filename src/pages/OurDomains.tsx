import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import './OurDomains.css';

// Import images
import img7 from '../assets/images/7.png';
import img8 from '../assets/images/8.png';
import img9 from '../assets/images/9.png';
import img10 from '../assets/images/10.png';
import img11 from '../assets/images/11.png';
import img12 from '../assets/images/12.png';

gsap.registerPlugin(ScrollTrigger);

const domains = [
  {
    name: 'Technical',
    image: img11,
    description: 'Dive deep into cutting-edge technologies and enhance your coding skills.',
    bgClass: 'bg-1'
  },
  {
    name: 'Creatives',
    image: img12,
    description: 'Unleash your creativity through design, content creation, and multimedia projects.',
    bgClass: 'bg-2'
  },
  {
    name: 'Events',
    image: img9,
    description: 'Organize and participate in exciting tech events, hackathons, and workshops.',
    bgClass: 'bg-3'
  },
  {
    name: 'Business',
    image: img8,
    description: 'Explore the world of tech entrepreneurship and business strategy.',
    bgClass: 'bg-4'
  }
];

const OurDomains: React.FC = () => {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.2,
      smoothWheel: true
    });

    const scrollFn = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };
    requestAnimationFrame(scrollFn);

    const contentElements = gsap.utils.toArray('.content--sticky');
    contentElements.forEach((el: any) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'center center',
          end: 'max',
          scrub: true
        }
      })
      .to(el, {
        ease: 'none',
        startAt: {filter: 'blur(0px)'},
        filter: 'blur(3px)',
        scrollTrigger: {
          trigger: el,
          start: 'center center',
          end: '+=100%',
          scrub: true
        }
      }, 0)
      .to(el, {
        ease: 'none',
        scale: 0.4,
        yPercent: -50
      }, 0);
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#2C5364] via-[#203A43] to-[#0F2027] text-white">
      <header className="frame frame--header py-24 px-4 sm:px-6 lg:px-8" style={{backgroundImage: `url(${img10})`, backgroundPosition: '95% center', backgroundRepeat: 'no-repeat', backgroundSize: '35% auto'}}>
        <div className="frame__heading text-left max-w-3xl">
          <h1 className="text-7xl font-bold mb-8 font-poppins">Our Domains</h1>
          <p className="text-2xl mb-12 font-medium">As technology evolves, we explore various domains to create a holistic learning experience.</p>
        </div>
      </header>
      <div className="wrap mt-24" ref={wrapRef}>
        {domains.map((domain, index) => (
          <div key={domain.name} className={`content content--sticky content--card ${domain.bgClass}`}>
            <div className="card-content">
              <img className="content__img content__img--small" src={domain.image} alt={domain.name} />
              <div className="card-text">
                <h2 className="content__title">
                  <span className="domain-name">{domain.name}</span>
                </h2>
                <p className="content__text">{domain.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="content content--highlight content--outro">
        <p className="text-large">Join us in shaping the future of technology across these diverse domains.</p>
        <img className="content__img spacer" src={img12} alt="Spacer" />
      </div>
    </div>
  );
};

export default OurDomains;
