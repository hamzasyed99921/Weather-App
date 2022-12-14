import axios from "axios";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("islamabad");

  // const apiKey = 'adc26b038e1a888490f8ffa1fe02d32b';

  // const fetchApi = () => {
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=adc26b038e1a888490f8ffa1fe02d32b`;
  //   axios.get(url).then((res) => {
  //     console.log(res);
  //   }).catch((err) =>{
  //     console.log(err);
  //   })
  // }

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=adc26b038e1a888490f8ffa1fe02d32b`;
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      setCity(data.main);
      console.log(data);
    };

    fetchApi();
  }, [search]);
  return (
    <>
      <section className="weather_bg d-flex align-items-center">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-10 col-lg-8 col-xl-6">
              <div className="card">
                <div className="bg-image" style={{ borderRadius: 35 }}>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                    className="card-img"
                    alt="weather"
                  />
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(190, 216, 232, .5)" }}
                  />
                </div>
                <div className="card-img-overlay text-dark p-5">
                  <div className="pb-4">
                    <input
                      type="search"
                      placeholder="Search"
                      className="form-control"
                      onChange={(event) => {
                        setSearch(event.target.value);
                      }}
                    />
                  </div>
                  {!city ? (
                    "No data Found"
                  ) : (
                    <div className="card_txt">
                      <h4 className="mb-0">{search}</h4>
                      <h3 className="display-2 my-3">{city.temp}°C</h3>
                      <p className="mb-2">
                        Humidity: <strong className="me-3">{city.humidity}%</strong> 
                        Pressure: <strong>{city.pressure}mb </strong>
                      </p> 
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
