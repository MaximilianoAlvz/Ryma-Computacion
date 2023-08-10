import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const TabsMenu=({current, items})=> {
  const navegar = useNavigate();

  const handleChange = (_, newValue) => {
    navegar ("/productos/" + newValue + "/" + 1)
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", justifyContent: "center"}}>
        <Tabs value={current} onChange={handleChange} aria-label="basic tabs example">
            {
                items.map((item,index) => 
                    <Tab key={item.id + index} label = {item.titulo} value={item.id}/>
                )
            }
        </Tabs>
      </Box>
    </Box>
  );
}
export default TabsMenu;