import React from 'react';
import { Box, Typography, Button, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

// Importa las imágenes necesarias (asegúrate de tenerlas en tu proyecto)
// import heroBackground from '../assets/cholchol-background.jpg';
// import heroDecoration from '../assets/hero-decoration.svg';

// Estilos personalizados
const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: `linear-gradient(rgba(26, 82, 118, 0.85), rgba(41, 128, 185, 0.8))`,
  // backgroundImage: `url(${heroBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  padding: theme.spacing(8, 0),
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(26, 82, 118, 0.7) 0%, rgba(41, 128, 185, 0.5) 100%)',
    zIndex: 1,
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(12, 0),
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  marginBottom: theme.spacing(2),
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  position: 'relative',
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '60%',
    height: '4px',
    background: theme.palette.warning.main,
    bottom: '-8px',
    left: '20%',
    borderRadius: '2px',
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  opacity: 0.9,
  maxWidth: '800px',
  margin: '0 auto',
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
}));

const CtaButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.2, 3),
  fontWeight: 600,
  fontSize: '1rem',
  borderRadius: '50px',
  textTransform: 'none',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
  },
}));

const HeroCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
  transition: 'all 0.3s ease',
  background: 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(10px)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
  },
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
}));

const Decoration = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '-20px',
  right: '-80px',
  width: '300px',
  height: '300px',
  opacity: 0.1,
  transform: 'rotate(-15deg)',
  zIndex: 1,
  // backgroundImage: `url(${heroDecoration})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
}));

export default function Hero() {
  const cardData = [
    {
      title: 'Trámites en línea',
      description: 'Gestiona tus trámites municipales sin salir de casa',
      link: '/tramites',
      color: '#1a5276'
    },
    {
      title: 'Noticias y eventos',
      description: 'Mantente al día con las actividades de nuestra comuna',
      link: '/noticias',
      color: '#2980b9'
    },
    {
      title: 'Servicios comunitarios',
      description: 'Conoce los programas sociales disponibles para ti',
      link: '/servicios',
      color: '#27ae60'
    }
  ];

  return (
    <HeroContainer>
      <Decoration />
      <Container maxWidth="lg">
        <HeroContent>
          <HeroTitle variant="h2" align="center">
            Bienvenido a Cholchol
          </HeroTitle>
          <HeroSubtitle variant="h5" align="center">
            Trabajamos juntos por una comunidad más próspera, participativa y sostenible
          </HeroSubtitle>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <CtaButton 
              variant="contained" 
              color="warning" 
              size="large" 
              endIcon={<ArrowForwardIcon />}
              href="/servicios"
            >
              Descubre nuestros servicios
            </CtaButton>
          </Box>
          
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {cardData.map((card, index) => (
              <Grid item xs={12} md={4} key={index}>
                <HeroCard elevation={3}>
                  <CardTitle variant="h6" gutterBottom>
                    {card.title}
                  </CardTitle>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {card.description}
                  </Typography>
                  <Button 
                    variant="text" 
                    sx={{ fontWeight: 'bold', color: card.color }}
                    href={card.link}
                  >
                    Ver más
                  </Button>
                </HeroCard>
              </Grid>
            ))}
          </Grid>
        </HeroContent>
      </Container>
    </HeroContainer>
  );
}
