import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Information from "./Information";
import SunnyIcon from '@mui/icons-material/Sunny';
import "./Search.css";
import { useState } from "react";
export default function Search(){
    let [city,setCity]=useState("");
    let [response,setResponse]=useState({
        city: "Bhopal",
        icon:<SunnyIcon/>,
        weather: "sunny",
        temp: 20,
        maxTemp:20,
        minTemp:20,
        humidity:80,
        pressure: 200,
        windSpeed:30
    });
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="ca66079b94545e19941a218f91fc4141";
    let apiRequest= async (city)=>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonRes=await response.json();
        console.log(jsonRes);
        setResponse({
            city:jsonRes.name,
            weather:jsonRes.weather[0].description,
            humidity:jsonRes.main.humidity,
            temp:jsonRes.main.temp,
            maxTemp:jsonRes.main.temp_max,
            minTemp:jsonRes.main.temp_min,
            pressure:jsonRes.main.pressure,
            windSpeed:jsonRes.wind.speed
        });

    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        setCity("");
        apiRequest(city);
    }
    let handleInputChange=(e)=>{
        setCity(e.target.value);
    }
    
    return(
        <div>
                <form className="search" onSubmit={handleSubmit}>
                    <span className="label">
                        <label htmlFor="outlined-basic">Enter City </label>
                    </span>
                    <TextField 
                        required 
                        
                        id="outlined-basic" 
                        label="City name" 
                        variant="outlined" 
                        // color="success"
                        size="normal" 
                        className="textField" 
                        onChange={handleInputChange}
                        value={city}
                    />
                    <IconButton aria-label="delete" type="submit" className="lens" onSubmit={handleSubmit}>
                        <SearchIcon  fontSize="large"  />
                    </IconButton>
                </form>
                <Information response={response}/>
        </div>
        
    )
}