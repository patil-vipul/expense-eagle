"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MenuIcon from '@mui/icons-material/Menu';

export default function BottomNavbar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className='absolute bottom-0 w-full'>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Planner" icon={<CalendarMonthIcon />} />
        <BottomNavigationAction label="Analytics" icon={<AnalyticsIcon />} />
        <BottomNavigationAction label="Menu" icon={<MenuIcon />} />
      </BottomNavigation>
    </Box>
  );
}
