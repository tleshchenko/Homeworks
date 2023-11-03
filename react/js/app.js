const el = React.createElement;

const weatherList = [
    {
        city: 'Lisbon',
        temp: '21',
        icon: 'wi wi-day-sunny',
        width: 'w50',
        style: 'weather_item',
        color: 'light_blue'
    },
    {
        city: 'Paris',
        temp: '11',
        icon: 'wi wi-night-sleet',
        width: 'w25',
        style: 'weather_item',
        color: 'sky_blue'
    },
    {
        city: 'Belgrade',
        temp: '15',
        icon: 'wi wi-day-cloudy',
        width: 'w25',
        style: 'weather_item',
        color: 'lavander_gray'
    },
    {
        city: 'Venice',
        temp: '21',
        icon: 'wi wi-day-cloudy-high',
        width: 'w25',
        style: 'weather_item',
        color: 'red'
    },
    {
        city: 'Tel-Avive',
        temp: '32',
        icon: 'wi wi-hot',
        width: 'w25',
        style: 'weather_item',
        color: 'orange'
    },
    {
        city: 'Cair',
        temp: '21',
        icon: 'wi wi-day-sunny',
        width: 'w25',
        style: 'weather_item',
        color: 'yellow'
    },
    {
        city: 'New-York',
        temp: '17',
        icon: 'wi wi-day-sleet-storm',
        width: 'w25',
        style: 'weather_item',
        color: 'light_green'
    },
    {
        city: 'New-Delhi',
        temp: '17',
        icon: 'wi wi-hail',
        width: 'w25',
        style: 'weather_item',
        color: 'olive'
    },
    {
        city: 'San-Francisco',
        temp: '15',
        icon: 'wi wi-day-cloudy',
        width: 'w50',
        style: 'weather_item',
        color: 'lavander_gray'
    },
    {
        city: 'Tokyo',
        temp: '8',
        icon: 'wi wi-night-clear',
        width: 'w25',
        style: 'weather_item',
        color: 'green'
    },
    {
        city: 'Sydney',
        temp: '25',
        icon: 'wi wi-night-partly-cloudy',
        width: 'w100',
        style: 'weather_item',
        color: 'lavander'
    },
    
    
]

function App() {
    return (
        <React.Fragment>
            <div className="main_wrapper">
                <div className="container">
                    <HeaderText/>
                    <WeatherGrid/>
                    <FooterText/>
                </div>
            </div>
        </React.Fragment>
    )
}

function HeaderText() {
    return (
        <h1 className="main_title">CSS Weather Forecast <i className="wi wi-day-sunny"></i></h1>
    )
}

function WeatherGrid() {

    return (
<div className="weather_grid_wrapper">
        {weatherList.map((card, index) => {
            return <WeatherItem card={card} key={index}/> 
        })}
</div>
    )
}

function WeatherItem(props) {

const {city, temp, icon, width, style, color} = props.card



    return (
        <div className={`${style} ${width} ${color}`}>
            <p className="city">{city}</p>
                <div className="weather_info">
                    <span className="temp">{temp}°C</span>
                    <span className={icon}></span>
                </div>
        </div>
    )
}

function FooterText() {
    return (
        <span className="footer_text">Have a nice day and don't forget umbrella if you are in New Delhi now!</span>
    )
}

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(<React.StrictMode>{React.createElement(App)}</React.StrictMode>)