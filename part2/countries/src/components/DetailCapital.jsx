const DetailCapital = ({ weather }) => {
  return (
    <>
      <h3>Temperature: {weather.temp} Celsius</h3>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
      <h3>Wind: {weather.wind_speed} m/s</h3>
    </>
  )
}

export default DetailCapital
