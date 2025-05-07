import { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  useScrollTrigger,
  Slide,
  Avatar,
  Menu,
  MenuItem
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { 
  Menu as MenuIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon
} from '@mui/icons-material';

// Puedes reemplazar con la ruta correcta de tu logo
const LOGO_URL = '/images/logo-cholchol.png';

// Función para ocultar navbar al hacer scroll
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// Estilos personalizados
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(90deg, #1a5276 0%, #2980b9 100%)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 1000
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.03)',
  }
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  margin: theme.spacing(0, 0.5),
  textTransform: 'none',
  fontSize: '0.95rem',
  fontWeight: 500,
  borderRadius: '8px',
  padding: theme.spacing(1, 1.5),
  position: 'relative',
  '&:hover': {
    background: alpha(theme.palette.common.white, 0.15),
    '&::after': {
      width: '70%',
      opacity: 1,
    }
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '6px',
    left: '15%',
    width: '0%',
    height: '2px',
    backgroundColor: theme.palette.warning.light,
    transition: 'all 0.3s ease',
    opacity: 0,
  }
}));

const ActionButton = styled(IconButton)(({ theme }) => ({
  color: 'white',
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  margin: theme.spacing(0, 0.5),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.2),
  }
}));

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesMenu, setServicesMenu] = useState(null);
  const [aboutMenu, setAboutMenu] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleServicesMenuOpen = (event) => {
    setServicesMenu(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setServicesMenu(null);
  };

  const handleAboutMenuOpen = (event) => {
    setAboutMenu(event.currentTarget);
  };

  const handleAboutMenuClose = () => {
    setAboutMenu(null);
  };

  // Lista de enlaces del menú principal
  const menuItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Acerca de', path: '/acerca', hasSubmenu: true },
    { name: 'Servicios', path: '/servicios', hasSubmenu: true },
    { name: 'Trámites', path: '/tramites' },
    { name: 'Noticias', path: '/noticias' },
    { name: 'Contacto', path: '/contacto' }
  ];

  // Submenús
  const aboutSubMenu = [
    { name: 'Nuestra Comuna', path: '/acerca/comuna' },
    { name: 'Alcalde', path: '/acerca/alcalde' },
    { name: 'Concejo Municipal', path: '/acerca/concejo' },
    { name: 'Organigrama', path: '/acerca/organigrama' }
  ];

  const servicesSubMenu = [
    { name: 'Servicios Sociales', path: '/servicios/sociales' },
    { name: 'Obras Municipales', path: '/servicios/obras' },
    { name: 'Permisos', path: '/servicios/permisos' },
    { name: 'Patentes', path: '/servicios/patentes' }
  ];

  // Contenido del drawer para versión móvil
  const drawer = (
    <Box sx={{ width: 280, bgcolor: 'primary.dark', color: 'white', height: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
        <Avatar src={LOGO_URL} alt="Logo Cholchol" sx={{ width: 40, height: 40, mr: 1 }} />
        <Typography variant="h6" component="div">
          Municipalidad de Cholchol
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ 
              borderRadius: 1, 
              mx: 1,
              '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } 
            }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
      <Box sx={{ p: 2, mt: 'auto' }}>
        <Typography variant="body2" sx={{ opacity: 0.7, textAlign: 'center' }}>
          © {new Date().getFullYear()} Municipalidad de Cholchol
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <StyledAppBar>
          <Container maxWidth="lg">
            <Toolbar sx={{ py: 0.5 }}>
              {/* Logo */}
              <LogoContainer>
                <Avatar 
                  src={LOGO_URL} 
                  alt="Logo Cholchol" 
                  sx={{ 
                    width: 45, 
                    height: 45, 
                    mr: 1.5,
                    border: '2px solid rgba(255,255,255,0.2)'
                  }} 
                />
                <Typography 
                  variant="h6" 
                  component="div" 
                  sx={{ 
                    fontWeight: 700,
                    display: { xs: 'none', sm: 'block' }
                  }}
                >
                  Municipalidad de Cholchol
                </Typography>
              </LogoContainer>

              {/* Espacio flexible */}
              <Box sx={{ flexGrow: 1 }} />

              {/* Menú de navegación - Escritorio */}
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {menuItems.map((item) => {
                  if (item.name === 'Acerca de' && item.hasSubmenu) {
                    return (
                      <Box key={item.name}>
                        <NavButton
                          onClick={handleAboutMenuOpen}
                          endIcon={<KeyboardArrowDownIcon />}
                        >
                          {item.name}
                        </NavButton>
                        <Menu
                          anchorEl={aboutMenu}
                          open={Boolean(aboutMenu)}
                          onClose={handleAboutMenuClose}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                        >
                          {aboutSubMenu.map((subItem) => (
                            <MenuItem 
                              key={subItem.name} 
                              onClick={handleAboutMenuClose}
                              sx={{ minWidth: 180 }}
                            >
                              {subItem.name}
                            </MenuItem>
                          ))}
                        </Menu>
                      </Box>
                    );
                  }
                  if (item.name === 'Servicios' && item.hasSubmenu) {
                    return (
                      <Box key={item.name}>
                        <NavButton
                          onClick={handleServicesMenuOpen}
                          endIcon={<KeyboardArrowDownIcon />}
                        >
                          {item.name}
                        </NavButton>
                        <Menu
                          anchorEl={servicesMenu}
                          open={Boolean(servicesMenu)}
                          onClose={handleServicesMenuClose}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                        >
                          {servicesSubMenu.map((subItem) => (
                            <MenuItem 
                              key={subItem.name} 
                              onClick={handleServicesMenuClose}
                              sx={{ minWidth: 180 }}
                            >
                              {subItem.name}
                            </MenuItem>
                          ))}
                        </Menu>
                      </Box>
                    );
                  }
                  return (
                    <NavButton key={item.name} href={item.path}>
                      {item.name}
                    </NavButton>
                  );
                })}
              </Box>

              {/* Botones de acción */}
              <Box sx={{ display: 'flex', ml: 1 }}>
                <ActionButton size="small">
                  <SearchIcon />
                </ActionButton>
                <ActionButton 
                  size="small" 
                  sx={{ display: { xs: 'none', sm: 'flex' } }}
                >
                  <NotificationsIcon />
                </ActionButton>
                
                {/* Botón de menú móvil */}
                <IconButton
                  color="inherit"
                  aria-label="abrir menú"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ display: { md: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </StyledAppBar>
      </HideOnScroll>

      {/* Drawer para navegación móvil */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: 280 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
