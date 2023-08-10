import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import CarritoIcon from './carritoIcon';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navegar = useNavigate();
  const navegarInicio = () => {
    navegar("/");
    setAnchorElNav(null);
  }
  const navegarProductos = () => {
    navegar("/productos/cel/1");
    setAnchorElNav(null);
  }
  const navegarContacto = () => {
    navegar("/");
    setAnchorElNav(null);}

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              RYMA COMPUTACION
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >

              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, }}>
              <Button
                onClick={navegarInicio}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Inicio
              </Button>
              <Button
                onClick={navegarProductos}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Productos
              </Button>
              <Button
                onClick={navegarContacto}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                contacto
              </Button>
            </Box>
            <Box>
              <CarritoIcon/>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
  export default Navbar;