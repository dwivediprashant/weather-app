import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./InfoTemplate.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function InfoTemplate({response}) {


  return (
    <Card sx={{ maxWidth: 345 }} className="one-info">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width={400}
          image={response.temp>26 ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qWpaYllf-MftOWIqKIYAUoYhye2nogRdbg&s" : response.humidity>70 ? "https://www.shutterstock.com/image-photo/little-girl-red-umbrella-playing-260nw-307434563.jpg" : "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-10/20241017-winter-weather-sj-319p-362841.jpg" }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {response.city}&nbsp;&nbsp;&nbsp;
            <span>{response.temp>26 ? <SunnyIcon/> : response.humidity>70 ? <CloudySnowingIcon/> : <AcUnitIcon/> }</span><br /><hr />
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
            weather: {response.weather} <br /> <hr />
            temp:{response.temp}&nbsp;&deg;C<br /><hr />
            maxTemp:{response.maxTemp}&nbsp;&deg;C<br /><hr />
            minTemp:{response.minTemp}&nbsp;&deg;C<br /><hr />
            Humidity:{response.humidity}<br /><hr />
            pressure:{response.pressure}<br /><hr />
            windSpeeed:{response.windSpeed}<br /><hr />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
