import { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Alert, 
  Typography, 
  Paper, 
  Grid, 
  IconButton,
  InputAdornment,
  Divider,
  Snackbar
} from '@mui/material';
import { 
  Person as PersonIcon, 
  Email as EmailIcon, 
  Message as MessageIcon,
  Send as SendIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Estilos personalizados
const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
}));

const FormHeader = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #1a5276 30%, #2980b9 90%)',
  color: 'white',
  padding: theme.spacing(3),
  textAlign: 'center',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 8,
    transition: 'all 0.3s',
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
    },
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  padding: '12px 24px',
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '1rem',
  background: 'linear-gradient(45deg, #27ae60 30%, #2ecc71 90%)',
  boxShadow: '0 3px 5px 2px rgba(39, 174, 96, .3)',
  '&:hover': {
    boxShadow: '0 5px 8px 2px rgba(39, 174, 96, .4)',
  },
}));

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [feedback, setFeedback] = useState({ type: '', message: '' });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFeedback({ type: '', message: '' });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.mensaje) {
      setFeedback({ type: 'error', message: 'Todos los campos son obligatorios' });
      setOpenSnackbar(true);
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      setFeedback({ type: 'error', message: 'Correo electrónico inválido' });
      setOpenSnackbar(true);
    } else {
      setFeedback({ type: 'success', message: 'Mensaje enviado correctamente' });
      setOpenSnackbar(true);
      setForm({ nombre: '', email: '', mensaje: '' });
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ px: 2, py: 4, maxWidth: 600, mx: 'auto' }}>
      <StyledPaper elevation={3}>
        <FormHeader>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Contáctanos
          </Typography>
          <Typography variant="body1">
            Completa el formulario y nos pondremos en contacto contigo lo antes posible
          </Typography>
        </FormHeader>

        <Box component="form" onSubmit={handleSubmit} sx={{ p: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Nombre"
                name="nombre"
                variant="outlined"
                required
                value={form.nombre}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Correo electrónico"
                name="email"
                type="email"
                variant="outlined"
                required
                value={form.email}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Mensaje"
                name="mensaje"
                variant="outlined"
                multiline
                required
                minRows={4}
                value={form.mensaje}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 2 }}>
                      <MessageIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            
            <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
              <SubmitButton 
                type="submit"
                variant="contained" 
                endIcon={<SendIcon />}
                disableElevation
              >
                Enviar mensaje
              </SubmitButton>
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 3 }} />
          
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              También puedes contactarnos directamente al correo <strong>contacto@municipalidadcholchol.cl</strong> o
              llamando al teléfono <strong>(+56) 45 2 865 200</strong>
            </Typography>
          </Box>
        </Box>
      </StyledPaper>
      
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={feedback.type} 
          variant="filled"
          sx={{ width: '100%' }}
        >
          {feedback.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
