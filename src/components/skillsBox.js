import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import StyledPaper from './styledPaper.js';

import { skillSets } from '../data/intro.js';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
function SkillsSwiper() {
  const theme = useTheme();

  // Helper to chunk skillSets into pairs
  const skillSetPairs = [];
  for (let i = 0; i < skillSets.length; i += 2) {
    skillSetPairs.push([skillSets[i], skillSets[i + 1]]);
  }

  return (
    <>
    <StyledPaper>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        style={{
          '--swiper-navigation-top-offset': '0px',
          '--swiper-navigation-sides-offset': '0px',
        }}
        className="skills-swiper"
      >
        {skillSetPairs.map((pair, idx) => (
          <SwiperSlide key={idx}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, paddingBottom: '2rem' }}>
              {pair.map(
                (set, pairIdx) => set && (
                  <Box key={pairIdx}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                      {set.category}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                          gap: 0,
                          margin: '0',
                        }}
                      >
                        {set.skills.split('|').map((skill, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography
                              component="span"
                              sx={{
                                transition: 'background 0.2s, color 0.2s',
                                cursor: 'default',
                                color: theme.palette.text.secondary,
                                '&:hover': {
                                  background:
                                    theme.palette.mode === 'dark'
                                      ? theme.palette.primary.dark
                                      : theme.palette.primary.light,
                                  color: theme.palette.primary.contrastText,
                                },
                              }}
                            >
                              {skill.trim()}
                            </Typography>
                            {i < set.skills.split('|').length - 1 && (
                              <Typography component="span" sx={{ color: theme.palette.text.secondary }}>
                                &nbsp;|&nbsp;
                              </Typography>
                            )}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  )
              )}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .skills-swiper .swiper-button-next,
        .skills-swiper .swiper-button-prev {
          top: 25% !important;
          margin-top: 0 !important;
          opacity: 0 !important;
        }
      `}</style>
    </StyledPaper>
    </>
  );
}

function SkillsCards() {
  return (
    <StyledPaper>
      <Typography sx={{ marginBottom: '0', fontWeight: 600 }}>
        Skill Sets
      </Typography>
      <SkillsSwiper />
    </StyledPaper>
  );
}

export default function SkillsBox() {
  return <SkillsCards />;
}