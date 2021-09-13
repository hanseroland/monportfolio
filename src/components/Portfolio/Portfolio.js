import { Box, Container, Grid } from '@material-ui/core'
import React from 'react'
import HighlightCardDemo from '../Cards/HighlightDemo'
import { ProjectData } from '../data/ProjectData'
import SectionTitre from '../SectionTitre'

function Portfolio() {
    return (
        <Box
         style={{height:'100%'}}
         p={1}
         sx={{
            backgroundColor: '#131313',
            minHeight: '100%',
            py: 3
        }}
        id="portfolio" 
        >
            <Container>
                        <SectionTitre  heading="Portfolio"/>
                        
                            <Grid container  spacing={2} >
                                    {
                                    ProjectData.map((item,index) => (
                                        <Grid   key={index}  item lg={4} md={4} xs={12} >
                                                  <HighlightCardDemo data={item} {...item}  />
                                        </Grid>
                                    ))}
                                    
                            </Grid>
            </Container>
         </Box>
    ) 
}

export default Portfolio
