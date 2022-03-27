// Imports from libraries
import 'bootstrap/dist/css/bootstrap.min.css' // Bootstrap css
import {Container} from 'react-bootstrap' // Container for all Rows/Components
import {useState, useEffect} from 'react'; // React states to store API info
import Axios from 'axios' // for handling API Call

// Component imports
import Header from './components/Header'
import CurrentWeather from './components/CurrentWeather'
import Location from './components/Location'
import WeatherForecast from './components/WeatherForecast'
import WeatherConditions from './components/WeatherConditions'
import NavBar from './components/NavBar'
import Wind from './components/Wind'
import UV from './components/UV'
import Pollution from './components/Pollution'
import Pressure from './components/Pressure'
import Profile from './components/Profile'
import Records from './components/Records'



const App = () => {
  const API_KEY_W = "e13e0a89b388754d7eb02c00126b82ce";
  const API_KEY_L = "294919650533326249024x32453"
  const [currentCity, setCurrentCity] = useState("DEFAULT: LONDON");

  // States to store data from API
  const [currentTemp, setCurrentTemp] = useState(null);
  const [currentIcon, setCurrentIcon] = useState(null);
  const [forecastDays, setForecastDays] = useState(null);
  const [forecastHours, setForecastHours] = useState(null);
  const [currentWindSpeed, setCurrentWindSpeed] = useState(null);
  const [currentWindDirection, setCurrentWindDirection] = useState(null);
  const [currentUVI, setCurrentUVI] = useState(null);
  const [currentPollution, setCurrentPollution] = useState(null);
  const [currentPressure, setCurrentPressure] = useState(null);

  // States to store whether data has been received from API
  const [weatherDataRecieved, setWeatherDataReceived] = useState(false);
  const [pollutionDataReceived, setPollutionDataReceived] = useState(false);

  // States to store user's current screen
  const [chosenScreen, setChosenScreen] = useState("btnHome");
  
  // States for gelocation status and postcode status
  const [locationAllowed, setLocationAllowed] = useState(null);
  const [postcode, setPostcode] = useState(null);

  // State for storing user preference for weather unit
  const [useCelsius, setUseCelsius] = useState(true)

  // function which is called when user clicks on buttons in nav bar
  const changeScreen = (e) =>
  {
    //console.log(e.target.classList[0])
    setChosenScreen(e.target.classList[0])
  }

  // function which is called when user changes postcode
  const locationByPostcode = (pc) =>
  {
    setPostcode(pc)
  }

  // function which is called when user changes weather unit preference in settings
  const changeWeatherUnit = (userUseCelsius) =>
  {
    setUseCelsius(userUseCelsius)
  }

  // Effect Hook
  useEffect( () =>
  {
    // Function for getting user's coordinates
    const fetchLocation = async () =>
    {
      await navigator.geolocation.getCurrentPosition(function(position) {
        setLocationAllowed(true)
        
        lat = position.coords.latitude;
        lon = position.coords.longitude;

        Axios.get(`https://geocode.xyz/${lat},${lon}?json=1`).then((city_response) => //&auth=${API_KEY_L}
        {
          setCurrentCity(city_response.data.city);
        }) 
        fetchWeatherData(); // getting weather data using geolocation coordinates
      },
      
      function(error) // when user blocks geolocation
      {
        if (error.code === error.PERMISSION_DENIED)
        {
          setLocationAllowed(false)
          
          if (postcode === null) // if user has not yet set a postcode, then set current location to default London
          {
            setCurrentCity("DEFAULT: LONDON")
            lat = 51.5;
            lon = -0.128;
            fetchWeatherData(); // getting weather data using geolocation coordinates
          }

          else // if user has set their postcode, then fetch location from postcode
          {
            fetchLocationPostcode()
          }

        }
      });
    }

    const fetchLocationPostcode = async () =>
    {
      var postcode_nospace = postcode.split(' ').join(''); // remove any spaces for user's postcode

      const location_res = await Axios.get(`https://geocode.xyz/?locate=${postcode_nospace}&json=1`)
      
      if (location_res.data.error === undefined) // if there is no error with the response, set user's location based on postcode
      {
        lat = location_res.data.latt;
        lon = location_res.data.longt;
        const city_res =  await Axios.get(`https://geocode.xyz/${lat},${lon}?json=1`)
        setCurrentCity(city_res.data.city);
      }

      else // if there is an error with the response (e.g. postcode not entered correctly), set user's location to default London
      {
        lat = 51.5;
        lon = -0.128;
        setCurrentCity("DEFAULT: LONDON")
      }
      
      fetchWeatherData(); // getting weather data using geolocation coordinates

    }


    // Function for Weather API Call
    const fetchWeatherData = async () =>
    {
      // One Call Weather API call
      const response1 = await Axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${API_KEY_W}&units=metric`);
      var weatherData = response1.data;
      //console.log(weatherData);
      
      // Setting all states based on API data
      setCurrentTemp(weatherData.current.temp);
      setCurrentIcon("http://openweathermap.org/img/wn/"+weatherData.current.weather[0].icon+"@4x.png");
      setForecastDays(weatherData.daily);
      setForecastHours(weatherData.hourly);
      setCurrentWindSpeed(weatherData.current.wind_speed)
      setCurrentWindDirection(weatherData.current.wind_deg)
      setCurrentUVI(weatherData.current.uvi)
      setCurrentPressure(weatherData.current.pressure)
      currentSunrise = weatherData.current.sunrise
      currentSunset = weatherData.current.sunset
      setWeatherDataReceived(true); // Weather Data has been received

      // Air Pollution API call
      const response2 = await Axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY_W}`);
      var pollutionData = response2.data;
      //console.log(pollutionData);
      // Setting pollution states
      setCurrentPollution(pollutionData.list[0].main.aqi);
      setPollutionDataReceived(true); // Pollution Data has been received
      
      changeBackground()
    }


    // Function for changing background depending on time of day
    function changeBackground ()
    {
      // Converting EPOCH date provided by API to real date
      var d1 = new Date(0);
      d1.setUTCSeconds(currentSunrise);
      var d2 = new Date(0);
      d2.setUTCSeconds(currentSunset);
      
      // Getting hour values for dates
      var sunrise = d1.getHours();
      var sunset = d2.getHours();
      var currentHr = new Date().getHours();

      // if currentHr<sunrise XOR currentHr>sunset
      if ( (currentHr < sunrise) !== (currentHr > sunset) )
      {
        //console.log("night")
        // Change background to night
        document.body.style = "background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('night.jpeg');";
      }
      else
      {
        //console.log("day")
        // change background to day
        document.body.style = "background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('day.jpeg');";
      }
    }

    // Timer to update weather information and background every 30 minutes
    let timer = setInterval(() => 
    {
      console.log("new call");
      fetchLocation();
    }, 1800000); // 1800000 ms = 30 minutes
    

    var lat = null;
    var lon = null;
    var currentSunrise = null;
    var currentSunset = null;

    fetchLocation();
    
    return () => clearInterval(timer); // return for timer

  }, [chosenScreen, postcode, API_KEY_W, API_KEY_L]) // hook is executed when postcode & chosenScreen states change


 

  // If weather data or pollution data not received yet, then display loading
  if (weatherDataRecieved === false || pollutionDataReceived === false)
  {
    //console.log("running false")
    return(
      <div className="App">
        Fetching Weather Data...
      </div>
    );
  }

  // rendering components based on chosen screen of user
  return(
    <div className="App">
      <Container className = "container pt-2 pr-5 pl-5">
        <Header/>
        <CurrentWeather currentTemp = {currentTemp} currentIcon = {currentIcon} useCelsius = {useCelsius}/>
        <Location currentCity = {currentCity}/>
        
        {chosenScreen === "btnHome" && (
          <div>
            <WeatherForecast forecastDays = {forecastDays} forecastHours = {forecastHours} useCelsius = {useCelsius}/> 
            <WeatherConditions currentWindSpeed = {currentWindSpeed} currentUVI = {currentUVI} currentPollution = {currentPollution} currentPressure = {currentPressure} changeScreen = {changeScreen}/>
          </div>
        )}

        {chosenScreen === "btnRecords" && (
          <Records />
        )}

        {chosenScreen === "btnProfile" && (
          <Profile locationAllowed = {locationAllowed} locationByPostcode = {locationByPostcode} pc = {postcode} changeWeatherUnit = {changeWeatherUnit} uc = {useCelsius}/>
        )}

        {chosenScreen === "btnWind" && (
          <Wind currentWindSpeed = {Math.round((currentWindSpeed*2.237) * 100) / 100} currentWindDirection = {currentWindDirection} />
        )}

        {chosenScreen === "btnUV" && (
          <UV currentUVI = {currentUVI} />
        )}

        {chosenScreen === "btnPollution" && (
          <Pollution currentPollution = {currentPollution} />
        )}

        {chosenScreen === "btnPressure" && (
          <Pressure currentPressure = {currentPressure} />
        )}

      </Container>
      
      <NavBar className="nav" changeScreen = {changeScreen} />

    </div>
  );
}

export default App;
