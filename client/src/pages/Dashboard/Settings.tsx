import React from 'react'
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { StyledButton as Button } from 'components/common';
import { styled } from '@mui/material/styles';
import EventAvailableTwoToneIcon from '@mui/icons-material/EventAvailableTwoTone';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { color } from '@mui/system';


const MenteeProfile = () => (
    <>
    <br></br>
    <div style={{ display: "flex" }}>
      Expertise
         <Button 
          variant="contained"
          style={{ marginLeft: "auto" }}
          sx={{ backgroundColor: '#242424' }}
          size = "small"
          >
          Edit
        </Button>
      </div>
      <div style={{ color:"grey" }}>Software Development</div>
      <br></br>
      <hr color='#696969'/>
      <br></br>

      <div style={{ display: "flex" }}>
      Company
         <Button
          variant="contained" 
          style={{ marginLeft: "auto" }}
          sx={{ backgroundColor: '#242424' }}
          size = "small"
          >
          Edit
        </Button>
      </div>
      <div style={{ color:"grey" }}>Google</div>
      <br></br>
      <hr color='#696969'/>
      <br></br>

      <div style={{ display: "flex" }}>
      Role
         <Button
          variant="contained" 
          style={{ marginLeft: "auto" }}
          sx={{ backgroundColor: '#242424' }}
          size = "small"
          >
          Edit
        </Button>
      </div>
      <div style={{ color:"grey" }}>Mentor</div>
      <br></br>
      <hr color='#696969'/>
      <br></br>

      <div style={{ display: "flex" }}>
      Linkedin Profile
         <Button
          variant="contained" 
          style={{ marginLeft: "auto" }}
          sx={{ backgroundColor: '#242424' }}
          size = "small"
          >
          Edit
        </Button>
      </div>
      <div style={{ color:"grey" }}>https://www.linkedin.com/sundarpichai</div>
      <br></br>
      <hr color='#696969'/>
      <br></br>

      <div style={{ display: "flex" }}>
      Twitter Profile
         <Button
          variant="contained" 
          style={{ marginLeft: "auto" }}
          sx={{ backgroundColor: '#242424' }}
          size = "small"
          >
          Edit
        </Button>
      </div>
      <div style={{ color:"grey" }}>https://www.twitter.com/sundarpichai</div>
      <br></br>
      <hr color='#696969'/>
      <br></br>

      <div style={{ display: "flex" }}>
      Portfolio/Website Link
         <Button
          variant="contained" 
          style={{ marginLeft: "auto" }}
          sx={{ backgroundColor: '#242424' }}
          size = "small"
          >
          Edit
        </Button>
      </div>
      <div style={{ color:"grey" }}>https://www.sundarpichai.com</div>
      <br></br>
      <hr color='#696969'/>
      <br></br>

    </>
  );

  const PersonalInfo = () => (
    <>
    <br></br>
    <div style={{ display: "flex" }}>
      Name
         <Button 
          variant="contained"
          style={{ marginLeft: "auto" }}
          sx={{ backgroundColor: '#242424' }}
          size = "small"
          >
          Edit
        </Button>
      </div>
      <div style={{ color:"grey" }}>Sundar Pichai</div>
      <br></br>
      <hr color='#696969'/>
      <br></br>

      <div style={{ display: "flex" }}>
      Email
         <Button
          variant="contained" 
          style={{ marginLeft: "auto" }}
          sx={{ backgroundColor: '#242424' }}
          size = "small"
          >
          Edit
        </Button>
      </div>
      <div style={{ color:"grey" }}>sundarpichai@gmail.com</div>
      <br></br>
      <hr color='#696969'/>
      <br></br>

      <div style={{ display: "flex" }}>
      Bio
         <Button
          variant="contained" 
          style={{ marginLeft: "auto" }}
          sx={{ backgroundColor: '#242424' }}
          size = "small"
          >
          Edit
        </Button>
      </div>
      <div style={{ color:"grey" }}>I am the CEO of Google</div>
      <br></br>
      <hr color='#696969'/>
      <br></br>
    </>
  );
  const LoginSecurity = () => (
    <>
    <br></br>
    <div style={{ display: "flex" }}>
      Change Password
         <Button 
          variant="contained"
          style={{ marginLeft: "auto" }}
          sx={{ backgroundColor: '#242424' }}
          size = "small"
          >
          Edit
        </Button>
      </div>
      <div style={{ color:"grey" }}>********</div>
      <br></br>
      <hr color='#696969'/>
      <br></br>

      <div style={{ display: "flex" }}>
      Two-Factor Authentication
         <Button
          variant="contained" 
          style={{ marginLeft: "auto" }}
          sx={{ backgroundColor: '#242424' }}
          size = "small"
          >
          Edit
        </Button>
      </div>
      <div style={{ color:"grey" }}>Off</div>
      <br></br>
      <hr color='#696969'/>
      <br></br>

      <div style={{ display: "flex" }}>
      Edit Security Question & Answer
         <Button
          variant="contained" 
          style={{ marginLeft: "auto" }}
          sx={{ backgroundColor: '#242424' }}
          size = "small"
          >
          Edit
        </Button>
      </div>
      <div style={{ color:"grey" }}>What is your first School Name?</div>
      <br></br>
      <hr color='#696969'/>
      <br></br>

      <div style={{ display: "flex" }}>
         <Button
          variant="contained"
          sx={{ backgroundColor: '#242424' }}
          size = "small"
          >
          Sign Out
        </Button>
      </div>
    </>
  );

const Settings = () => {
    const [value, setValue] = React.useState('1');
  
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <Typography
          variant="h4"
          fontFamily="inter"
          fontWeight={600}
          paddingBottom={2}>
          Settings
        </Typography>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Mentee Profile" value="1" />
              <Tab label="Personal Info" value="2" />
              <Tab label="Login & Security" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <MenteeProfile />
          </TabPanel>
          <TabPanel value="2">
            <PersonalInfo />
          </TabPanel>
          <TabPanel value="3">
            <LoginSecurity />
          </TabPanel>
        </TabContext>
      </Box>
    );
  };
  
  export default Settings;