
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

import classes from "./AutomaticScrollButton.module.css";

import Gifts from '../gifts/Gifts';
import Tools from '../tools & hardware/Tools';
import Energy from '../energy/Energy';
import Accessory from '../accessory/Accessory';
import Cunsumer from '../cunsumer/Cunsumer';
import { Category } from '@mui/icons-material';



export default function AutomaticScrollButton(props) {
  const [value, setValue] = React.useState(0);

  const [categorys, setCategorys] = useState();

  const [gifts, setGifts] = useState(false);
  const [tools, setTools] = useState(false);
  const [energy, setEnergy] = useState(false);
  const [accessory, setAccessory] = useState(false);
  const [cunsumer, setCunsumer] = useState(false);
  const [category, setAategory] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setCategorys(props.products);
    setGifts((true));
  }, [])



  const giftHandler = () => {
    console.log(categorys)

    setEnergy(false);
    setAccessory(false);
    setTools(false);
    setCunsumer(false);
    setAategory(false);

    setGifts(true);
  }

  const toolsHandler = () => {
    console.log(categorys)

    setGifts(false);
    setEnergy(false);
    setAccessory(false);
    setCunsumer(false);
    setAategory(false);

    setTools(true);
  }

  const energyHandler = () => {
    console.log(category)

    setGifts(false);
    setTools(false);
    setAccessory(false);
    setCunsumer(false);
    setAategory(false);

    setEnergy(true);
  }

  const accessorysHandler = () => {
    console.log(category)

    setGifts(false);
    setTools(false);
    setEnergy(false);
    setCunsumer(false);
    setAategory(false);

    setAccessory(true);

  }

  const cunsumerHandler = () => {
    console.log(category)

    setGifts(false);
    setTools(false);
    setEnergy(false);
    setAccessory(false);
    setAategory(false);

    setCunsumer(true);
  }

  const categoryHandler = () => {
    console.log(category)

    setGifts(false);
    setTools(false);
    setEnergy(false);
    setAccessory(false);
    setCunsumer(false);

    setAategory(true);
  }


  return (
    <>
      <div className={classes.tabs}>

        <Box sx={{ bgcolor: 'background.paper' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            // variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            <Tab onClick={giftHandler} label="Gifts & Crafts" />
            <Tab onClick={toolsHandler} label="Tools & HardWare" />
            <Tab onClick={energyHandler} label="Energy" />
            <Tab onClick={accessorysHandler} label="Vehicles & Accessories" />
            <Tab onClick={cunsumerHandler} label="Cunsumer Electronics" />
            <Tab onClick={categoryHandler} label="All categoris" />


          </Tabs>
        </Box>

      </div>
      {gifts ? <Gifts products={props.products} /> : ''}
      {tools ? <Tools products={props.products} /> : ''}
      {energy ? <Energy products={props.products} /> : ''}
      {accessory ? <Accessory products={props.products} /> : ''}
      {cunsumer ? <Cunsumer products={props.products} /> : ''}
      {category ? <Category products={props.products} /> : ''}
    </>

  );
}



// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

// export default function LabTabs() {
//   const [value, setValue] = React.useState('1');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%', typography: 'body1' }}>
//       <TabContext value={value}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//           <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab label="Item One" value="1" />
//             <Tab label="Item Two" value="2" />
//             <Tab label="Item Three" value="3" />
//           </TabList>
//         </Box>
//         <TabPanel value="1">Item One</TabPanel>
//         <TabPanel value="2">Item Two</TabPanel>
//         <TabPanel value="3">Item Three</TabPanel>
//       </TabContext>
//     </Box>
//   );
// }

