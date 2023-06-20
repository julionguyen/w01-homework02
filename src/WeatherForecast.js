import React from "react";
import {forecastData} from './data';
import './WeatherForecast.css';

function ShowForecastDay({dayForecast}) {
    return (
        <>
            <div className="forecast_card">
              <div><p className="forecast_day_display">{dayForecast.day}</p></div>
              <div className="forecast_card_basic">
              <div className="forecast_card_data">
                <div className="forecast_left">Condition: </div>
                  <div className="forecast_right">{dayForecast.conditions==="sunny" ? "☀️ Sunny" : 
                          dayForecast.conditions ==="stormy" ? "🌩️ Stormy" : 
                          dayForecast.conditions==="rainy" ? "🌧️ Rainy" : 
                          dayForecast.conditions === "cloudy" ? "☁️ Cloudy" : null } 
                </div>
              </div>
              <div  className="forecast_card_data">
                <div className="forecast_left">Max Temp.:</div>
                <div className="forecast_right">
                  {dayForecast.maxTemp >= 35 ? <label className="heat_wave_warning">🌡️Heatwave warning</label> : null} {dayForecast.maxTemp}<sup>o</sup>C 
                </div>
              </div>
              <div  className="forecast_card_data">
                  <div className="forecast_left">Wind:</div>
                  <div className="forecast_right">
                    {dayForecast.wind}km/h
                  </div>                  
              </div>
              </div>
              <div className="forecast_hourly_display">
                <p className="forecast_hourly_center">Hourly Temperature</p>
                  <div className="forecast_hourly_bar">
                    {dayForecast.hourlyTemp.map((temp, index)=>
                            <ShowHourlyTemp index={index} hourlyTemp={temp}/>
                    )}
                  </div>                
              </div>                                                              
              </div>            
        </>
    )
}
function ShowHourlyTemp({hourlyTemp, index}) {
  return (
    <div className={hourlyTemp < 0 ? 'tempExtremelyCold' : 
      (hourlyTemp >=0 && hourlyTemp <15) ? 'tempCold' : 
      (hourlyTemp >= 15 && hourlyTemp <20) ? 'tempSlightlyCold' : 
      (hourlyTemp >=20 && hourlyTemp < 25) ? 'tempSlightlyWarm' : 
      (hourlyTemp >= 25 && hourlyTemp < 30) ? 'tempWarm': 
      (hourlyTemp >=30) ? 'tempExtremelyHot' : null}> <p> {index}</p><label>{hourlyTemp}<sup>o</sup>C </label>
    </div>
  )
}
class WeatherForecast extends React.Component {

    render () {
        return (
            <>
              <h1>Weather Forecast</h1>
              <div className="forecast_cards">
                  {forecastData.map((dayForecast) => 
                      <ShowForecastDay dayForecast={dayForecast} />
                  )}
              </div>
            </>
        )
    }
}

export default WeatherForecast