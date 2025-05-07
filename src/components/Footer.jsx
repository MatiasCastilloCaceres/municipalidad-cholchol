import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Facebook as FacebookIcon, 
  Twitter as TwitterIcon, 
  Instagram as InstagramIcon, 
  YouTube as YouTubeIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #1a5276 30%, #2980b9 90%)',
  color: 'white',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(4)
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  position: 'relative',
  paddingBottom: theme.spacing(1),
  '&:after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 40,
    height: 2,
    backgroundColor: theme.palette.warning.main
  }
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.8)',
  textDecoration: 'none',
  marginBottom: theme.spacing(1),
  display: 'block',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: 'white',
    paddingLeft: theme.spacing(0.5)
  }
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: 'white',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  marginRight: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.warning.main,
    transform: 'translateY(-3px)'
  }
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1.5),
  color: 'rgba(255, 255, 255, 0.8)'
}));

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo y descripción */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Municipalidad de Cholchol
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 2 }}>
              Trabajando por el bienestar y desarrollo de nuestra comunidad, 
              promoviendo servicios de calidad para todos los habitantes de Cholchol.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <SocialButton aria-label="facebook">
                <FacebookIcon />
              </SocialButton>
              <SocialButton aria-label="twitter">
                <TwitterIcon />
              </SocialButton>
              <SocialButton aria-label="instagram">
                <InstagramIcon />
              </SocialButton>
              <SocialButton aria-label="youtube">
                <YouTubeIcon />
              </SocialButton>
            </Box>
          </Grid>
          
          {/* Links útiles */}
          <Grid item xs={12} sm={6} md={2}>
            <FooterTitle variant="subtitle1">
              Enlaces Útiles
            </FooterTitle>
            <FooterLink href="#">Inicio</FooterLink>
            <FooterLink href="#">Noticias</FooterLink>
            <FooterLink href="#">Servicios</FooterLink>
            <FooterLink href="#">Trámites</FooterLink>
            <FooterLink href="#">Transparencia</FooterLink>
          </Grid>
          
          {/* Trámites */}
          <Grid item xs={12} sm={6} md={2}>
            <FooterTitle variant="subtitle1">
              Trámites
            </FooterTitle>
            <FooterLink href="#">Permisos de Circulación</FooterLink>
            <FooterLink href="#">Licencias de Conducir</FooterLink>
            <FooterLink href="#">Patentes Municipales</FooterLink>
            <FooterLink href="#">Certificados</FooterLink>
            <FooterLink href="#">Pagos en Línea</FooterLink>
          </Grid>
          
          {/* Contacto */}
          <Grid item xs={12} md={4}>
            <FooterTitle variant="subtitle1">
              Contáctanos
            </FooterTitle>
            <ContactItem>
              <LocationIcon sx={{ mr: 1, color: 'warning.main' }} />
              <Typography variant="body2">
                Pedro de Valdivia 1345, Cholchol, Chile
              </Typography>
            </ContactItem>
            <ContactItem>
              <PhoneIcon sx={{ mr: 1, color: 'warning.main' }} />
              <Typography variant="body2">
                (+56) 45 2 865 200
              </Typography>
            </ContactItem>
            <ContactItem>
              <EmailIcon sx={{ mr: 1, color: 'warning.main' }} />
              <Typography variant="body2">
                contacto@municipalidadcholchol.cl
              </Typography>
            </ContactItem>
            <Typography variant="body2" sx={{ mt: 1, color: 'rgba(255, 255, 255, 0.8)' }}>
              Horario de atención: Lunes a Viernes de 8:30 a 14:00 hrs
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            © {currentYear} Municipalidad de Cholchol - Todos los derechos reservados
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'rgba(255, 255, 255, 0.5)' }}>
            Desarrollado por Equipo de Informática Municipal
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
}
