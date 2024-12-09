import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import Lesson from './components/Lesson';
import Quiz from './components/Quiz';
import Progress from './components/Progress';
import ButtonAppBar from './components/ButtonAppBar'; // Import the ButtonAppBar component
import logo from './components/llp1.jpg';

function App() {//
  // State for managing Drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation(); // Get current location

  // Toggle drawer open/close state
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Menu items for navigation with links
  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Lessons', path: '/lessons' },
    { text: 'Quiz', path: '/quiz' },
    { text: 'Progress', path: '/progress' },
  ];

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Language Learning Platform
          </Typography>
          <Typography variant="button" component="div">
            Login
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index} component={Link} to={item.path}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Conditionally render logo based on current path */}
      {location.pathname === '/' && (
        <img src={logo} style={{ width: 300, height: 300 }} alt="Logo" />
      )}

      <Header />

      <Routes>
        <Route path="/" element={<div>Advance Your English Skills with Us!</div>} />
        <Route path="/lessons" element={<Lesson />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>

      <Footer />
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
