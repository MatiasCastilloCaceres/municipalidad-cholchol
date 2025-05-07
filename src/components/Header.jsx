import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar,
  Box,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  Avatar,
  useScrollTrigger,
  Slide,
  Badge,
  Menu,
  MenuItem,
  Tooltip,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { 
  Menu as MenuIcon, 
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  LocalPhone as LocalPhoneIcon,
  AccountBalance as AccountBalanceIcon,
  Close as CloseIcon
} from '@mui/icons-material';

// Logo de la municipalidad
import logo from '../assets/logo-cholchol.png';

// Componente para ocultar el header al hacer scroll hacia abajo
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

// Barra superior con información de contacto
const TopBar = styled(Box)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.dark, 0.9),
  color: 'white',
  padding: theme.spacing(0.5, 0),
  fontSize: '0.85rem',
}));

// Estilos personalizados para la barra principal
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(90deg, #1a5276 0%, #2980b9 100%)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
}));

// Botones de navegación mejorados
const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  marginLeft: theme.spacing(0.5),
  marginRight: theme.spacing(0.5),
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  borderRadius: '8px',
  padding: theme.spacing(1, 2),
  transition: 'all 0.3s ease',
  position: 'relative',
  '&:hover': {
    background: alpha(theme.palette.common.white, 0.15),
    transform: 'translateY(-2px)',
    '&::after': {
      width: '70%',
      opacity: 1,
    }
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '5px',
    left: '15%',
    width: '0%',
    height: '2px',
    backgroundColor: theme.palette.warning.light,
    transition: 'all 0.3s ease',
    opacity: 0,
  }
}));

// Contenedor de logo con efectos
const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.03)',
  }
}));

// Texto del logo mejorado
const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginLeft: theme.spacing(1.5),
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  }
}));

// Subtítulo mejorado
const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: '0.75rem',
  opacity: 0.9,
  color: theme.palette.warning.light,
}));

// Botones de acción mejorados
const ActionButton = styled(IconButton)(({ theme }) => ({
  color: 'white',
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  margin: theme.spacing(0, 0.5),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.2),
    transform: 'rotate(5deg)',
  }
}));

// Logo del Avatar mejorado
const LogoAvatar = styled(Avatar)(({ theme }) => ({
  width: 54,
  height: 54,
  border: `2px solid ${alpha(theme.palette.common.white, 0.7)}`,
  boxShadow: `0 0 10px ${alpha(theme.palette.primary.dark, 0.3)}`,
}));

// Drawer mejorado para móvil
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: 280,
    background: 'linear-gradient(180deg, #1a5276 0%, #2c3e50 100%)',
    color: 'white',
  }
}));

// Botón de drawer para móvil
const DrawerMenuItem = styled(ListItemButton)(({ theme }) => ({
  borderRadius: '8px',
  margin: theme.spacing(0.5, 1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.1),
  }
}));

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleServicesMenuOpen = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setServicesAnchorEl(null);
  };

  const menuItems = [
    { label: 'Inicio', link: '/' },
    { label: 'Municipio', link: '/municipio', hasSubmenu: true },
    { label: 'Servicios', link: '/servicios', hasSubmenu: true },
    { label: 'Trámites', link: '/tramites' },
    { label: 'Noticias', link: '/noticias' },
    { label: 'Contacto', link: '/contacto' },
  ];

  const municipioSubmenu = [
    { label: 'Alcalde', link: '/municipio/alcalde' },
    { label: 'Concejo Municipal', link: '/municipio/concejo' },
    { label: 'Historia', link: '/municipio/historia' },
    { label: 'Organigrama', link: '/municipio/organigrama' },
  ];

  const serviciosSubmenu = [
    { label: 'Asistencia Social', link: '/servicios/asistencia-social' },
    { label: 'Permisos de Circulación', link: '/servicios/permisos-circulacion' },
    { label: 'Patentes Municipales', link: '/servicios/patentes' },
    { label: 'Obras Municipales', link: '/servicios/obras' },
  ];

  // Contenido del drawer para móvil
  const drawer = (
    <Box sx={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ py: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LogoAvatar src={logo} alt="Logo Municipalidad" />
          <Typography variant="h6" sx={{ ml: 1, fontWeight: 'bold' }}>
            Cholchol
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: alpha('#ffffff', 0.1) }} />
      <List sx={{ flexGrow: 1, pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <DrawerMenuItem href={item.link}>
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </DrawerMenuItem>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2, mt: 'auto' }}>
        <Typography variant="body2" sx={{ opacity: 0.7, textAlign: 'center' }}>
          © {new Date().getFullYear()} Municipalidad de Cholchol
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Barra superior con información de contacto */}
      <TopBar>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocalPhoneIcon fontSize="small" sx={{ mr: 0.5, fontSize: '0.9rem' }} />
              <Typography variant="body2" sx={{ mr: 2 }}>
                (+56) 45 2 865 200
              </Typography>
              <AccountBalanceIcon fontSize="small" sx={{ mr: 0.5, fontSize: '0.9rem', display: { xs: 'none', sm: 'block' } }} />
              <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' } }}>
                Horario: 8:30 - 14:00 hrs
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <Button 
                color="inherit" 
                size="small" 
                sx={{ textTransform: 'none', fontSize: '0.8rem' }}
                href="/transparencia"
              >
                Transparencia
              </Button>
              <Button 
                color="inherit" 
                size="small" 
                sx={{ textTransform: 'none', fontSize: '0.8rem' }}
                href="/portal-funcionarios"
              >
                Portal Funcionarios
              </Button>
            </Box>
          </Box>
        </Container>
      </TopBar>

      <HideOnScroll>
        <StyledAppBar position="sticky">
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
              {/* Logo y nombre */}
              <LogoContainer>
                <LogoAvatar src={logo} alt="Logo Municipalidad" />
                <LogoText variant="h6">
                  Municipalidad de Cholchol
                  <SubTitle variant="subtitle2">Región de La Araucanía</SubTitle>
                </LogoText>
              </LogoContainer>

              {/* Menú para escritorio */}
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {menuItems.map((item) => (
                  item.label === 'Municipio' ? (
                    <Box key={item.label}>
                      <NavButton 
                        aria-controls="municipio-menu"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        endIcon={<KeyboardArrowDownIcon />}
                      >
                        {item.label}
                      </NavButton>
                      <Menu
                        id="municipio-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        PaperProps={{
                          sx: {
                            mt: 1.5,
                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                            borderRadius: '8px',
                            minWidth: '200px',
                          }
                        }}
                      >
                        {municipioSubmenu.map((subItem) => (
                          <MenuItem 
                            key={subItem.label} 
                            onClick={handleMenuClose}
                            component="a"
                            href={subItem.link}
                            sx={{ 
                              py: 1, 
                              borderRadius: '4px',
                              mx: 0.5,
                              '&:hover': {
                                backgroundColor: alpha(theme.palette.primary.main, 0.1)
                              }
                            }}
                          >
                            {subItem.label}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  ) : item.label === 'Servicios' ? (
                    <Box key={item.label}>
                      <NavButton 
                        aria-controls="servicios-menu"
                        aria-haspopup="true"
                        onClick={handleServicesMenuOpen}
                        endIcon={<KeyboardArrowDownIcon />}
                      >
                        {item.label}
                      </NavButton>
                      <Menu
                        id="servicios-menu"
                        anchorEl={servicesAnchorEl}
                        keepMounted
                        open={Boolean(servicesAnchorEl)}
                        onClose={handleServicesMenuClose}
                        PaperProps={{
                          sx: {
                            mt: 1.5,
                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                            borderRadius: '8px',
                            minWidth: '200px',
                          }
                        }}
                      >
                        {serviciosSubmenu.map((subItem) => (
                          <MenuItem 
                            key={subItem.label} 
                            onClick={handleServicesMenuClose}
                            component="a"
                            href={subItem.link}
                            sx={{ 
                              py: 1, 
                              borderRadius: '4px',
                              mx: 0.5,
                              '&:hover': {
                                backgroundColor: alpha(theme.palette.primary.main, 0.1)
                              }
                            }}
                          >
                            {subItem.label}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  ) : (
                    <NavButton 
                      key={item.label} 
                      href={item.link}
                    >
                      {item.label}
                    </NavButton>
                  )
                ))}
              </Box>

              {/* Botones de acción */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title="Buscar">
                  <ActionButton color="inherit">
                    <SearchIcon />
                  </ActionButton>
                </Tooltip>
                <Tooltip title="Notificaciones">
                  <ActionButton color="inherit" sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    <Badge badgeContent={3} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </ActionButton>
                </Tooltip>
                <Tooltip title="Menú">
                  <ActionButton
                    color="inherit"
                    aria-label="abrir menú"
                    edge="end"
                    onClick={handleDrawerToggle}
                    sx={{ display: { md: 'none' } }}
                  >
                    <MenuIcon />
                  </ActionButton>
                </Tooltip>
              </Box>
            </Toolbar>
          </Container>
        </StyledAppBar>
      </HideOnScroll>

      {/* Menú móvil */}
      <StyledDrawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Mejor rendimiento en dispositivos móviles
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {drawer}
      </StyledDrawer>
    </>
  );
}