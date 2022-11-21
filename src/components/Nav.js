import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import "../css/navBar.css"
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import ShowCharacters from './ShowCharacters';
import image from '../img/rickAndMorty.png'

export default function NavigationBar() {
    const [value, setValue] = React.useState('one');
    let status = "";

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // const handleChangeStatus = (event) => {
    //     status = event.target.value
    //     if(status !== "all"){
    //         status=`&status=${status}`;
    //     }else{
    //         status="";
    //     }
    //     console.log(status);
    // };

    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <TabContext value={value}>
                    <div class="classDiv1">
                        <div>
                            <img class="imgClass" src={image} alt="" />
                        </div>
                        {/* <div class="selectDiv">
                            <label for="cars">Status:</label>
                            <select onChange={handleChangeStatus}>
                                <option value="all">All</option>
                                <option value="alive">Alive</option>
                                <option value="dead">Dead</option>
                                <option value="unknown">Unknown</option>
                            </select>
                        </div> */}
                        <Tabs value={value} onChange={handleChange}>
                            <Tab value="one" label="All" style={{ color: "white" }} />
                            <Tab value="two" label="Unknown" style={{ color: "white" }} />
                            <Tab value="three" label="Female" style={{ color: "white" }} />
                            <Tab value="four" label="Male" style={{ color: "white" }} />
                            <Tab value="five" label="Genderless" style={{ color: "white" }} />
                        </Tabs>
                    </div>
                    <TabPanel value="one" style={{ padding: "0px" }}>
                        <ShowCharacters action={''} />
                    </TabPanel>
                    <TabPanel value="two" style={{ padding: "0px" }}>
                        <ShowCharacters action={'&gender=unknown'} />
                    </TabPanel>
                    <TabPanel value="three" style={{ padding: "0px" }}>
                        <ShowCharacters action={'&gender=female'} />
                    </TabPanel>
                    <TabPanel value="four" style={{ padding: "0px" }}>
                        <ShowCharacters action={'&gender=male'} />
                    </TabPanel>
                    <TabPanel value="five" style={{ padding: "0px" }}>
                        <ShowCharacters action={'&gender=genderless'} />
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
}