import { Box, Container, Grid } from '@material-ui/core'
import React from 'react'
import TeamCardDemo from '../Cards/TeamCardDemo'
import SectionTitre from '../SectionTitre'
import { motion } from 'framer-motion';
import { ServiceData } from '../data/ServiceData';

function Services() {
    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
      };
    return (
        <Box
         style={{minHeight:'500px'}}
        sx={{
            backgroundColor: '#131313',
            minHeight: '100%',
            py: 3
        }}
        id="services" 
        >
            <Container>
                        <SectionTitre  heading="Services"/>
                            <Grid container  spacing={2} >
                                    {ServiceData.map((item,index) => (
                                       <Grid key={index} item   lg={4} md={4} >
                                             <TeamCardDemo  {...item} />
                                        </Grid>
                                     ))}
                                   
                            </Grid>
            </Container>
         </Box> 
    ) 
}

export default Services
