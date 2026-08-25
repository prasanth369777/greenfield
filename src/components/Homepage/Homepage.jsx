import React from 'react';

import Hero from '../Homepage/Hero';
import Services from '../Homepage/Services';
import About from '../Homepage/About';
import Work from '../Homepage/Work';
import Process from '../Homepage/Process';
// import Gallery from '../Homepage/gallery';
import Blogsec from '../Homepage/Blog1';
import FAQ from '../Homepage/FAQ';
import Testimonials from '../Homepage/Testimonials';
import Contact from '../Homepage/Contact';
import Infinityscroll from '../Homepage/infinityscrolling';


export default function Home() {
  return (
    <div className="bg-slate-900 text-white">
     
      <Hero />
      <Infinityscroll />
      <Services />
      {/* <Gallery /> */}
      <About />
      <Work />
      <Process />
      <Blogsec />
      <FAQ />
      <Testimonials />
      <Contact />
    
    </div>
  );
}
