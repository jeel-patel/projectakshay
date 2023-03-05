import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AnimatedText from 'react-animated-text-content';
import VerticalLinearStepper from './component/Stepper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'white',
  textAlign: 'center',
  verticalAlign: "center",
  color: theme.palette.text.secondary,
  height: "90vh",
  overflow: "hidden",
  padding: "5px",
  fontSize: "30px",
}));

export default function Home1()
{
    return (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
                <Item style={{"display":"flex", "alignItems":"center","justifyContent":"center"}}>
                    <AnimatedText
                        type="words" // animate words or chars
                        animation={{
                            x: '50%',
                            y: '100vh',
                            scale: 1,
                            ease: 'ease-in-out',
                        }}
                        animationType="float"
                        interval={0.06}
                        duration={0.8}
                        tag="p"
                        className="animated-paragraph"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        Welcome to the Bicycle
                        shopping website. You can
                        order and track your delivery.
                    </AnimatedText>
                </Item>
            </Grid>
            <Grid item xs={8}>
              <Item style={{"display":"flex","alignItems":"center","justifyContent":"center"}}>
                <VerticalLinearStepper/>             
              </Item>
            </Grid>
          </Grid>
        </Box>
    )
}