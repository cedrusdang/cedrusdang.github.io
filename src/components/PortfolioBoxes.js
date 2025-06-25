import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './PortfolioBoxes.css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Box from '@mui/material/Box';
import ReviewCard from './ProjectCard.js';
import projects from '../infomation/Projects.js';

export default function PortfolioBoxes() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Make the number of slides per view and other options flexible via props or defaults
  // Accept props for configuration, fallback to sensible defaults
  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper1"
        // Allow passing additional props if needed
        {...(typeof window !== "undefined" && window.portfolioSwiperMainProps)}
      >
        <Box >
          {projects.map((proj, idx) => (
            <SwiperSlide key={idx} >
              <ReviewCard 
                title={proj.title}
                subheader={proj.subheader}
                image={proj.image}
                description={proj.description}
                techStack={proj.techStack}
                expandDescription={proj.expandDescription}
                githubURL={proj.githubURL}
              />
            </SwiperSlide>
          ))}
        </Box>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={projects.length < 6 ? projects.length : 6} // Flexible slides per view
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        // Allow passing additional props if needed
        {...(typeof window !== "undefined" && window.portfolioSwiperThumbsProps)}
      >
        {projects.map((proj, idx) => (
          <SwiperSlide key={idx}>
            <img src={proj.image} alt={proj.image} className="thumb-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
