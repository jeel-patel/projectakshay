import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CycleCardCover from './CycleCards'
import { Grid } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs(props) {
  const [value, setValue] = React.useState(0);

  const [tabContent, setTabContent] = React.useState([]);
  const [data, setData] = React.useState();

  React.useEffect(()=>{

    setTabContent(props.tabContent);

  },[props.tabContent])

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setData()
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {
            tabContent.map((value, index)=>{
                return (
                    <Tab label={value.title} key={value.title} {...a11yProps(value.title)}/>
                )
            })
        }
      </Tabs>
      <TabPanel value={value} index={0}>
        {
            <Grid display={"flex"} direction={"row"} rowGap="5px" columnGap={"5px"}>
                {[0,1,2].map((val, index)=>{
                    return (
                        <CycleCardCover/>
                    )
                })}
            </Grid>
        }
      </TabPanel>
    </Box>
  );
}