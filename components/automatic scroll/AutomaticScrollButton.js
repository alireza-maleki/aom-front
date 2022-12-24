
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

import classes from "./AutomaticScrollButton.module.css";
import { loadProducts } from '../getalldata/GetAllData';
// import Gifts from './Gifts';


export default function AutomaticScrollButton(props) {
  const [value, setValue] = React.useState(0);

  const [category, setCategory] = useState()
  const [gifts, setGifts] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  useEffect(() => {
    setCategory(props.products);
  }, [])

  const categoryHandler = () => {
    console.log(category)

    setGifts((prev) => !prev)

  }


  return (
    <div className={classes.tabs}>

      <Box sx={{ bgcolor: 'background.paper' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tab onClick={categoryHandler} label="Gifts & Crafts" />
          <Tab label="Tools & HardWare" />
          <Tab label="Energy" />
          <Tab label="Vehicles & Accessories" />
          <Tab label="Cunsumer Electronics" />
          <Tab onClick={categoryHandler} label="All categoris" />


        </Tabs>
      </Box>

    </div>

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

