import Weather from "./components/Weather";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-white">
        Weather App With Next.js
        {/* <div className="container">
          <div className="search-box">
            <i className="bx bxs-map"></i>
            <input type="text" placeholder="enter your location" />
            <button className="bx bx-search"></button>
          </div>
          <p className="city-hide">city hide</p>

          <div className="weather-box">
            <div className="box">
              <div className="info-weather">
                <div className="weather">
                  <img src="images/cloud.png" alt="" />
                  <p className="temperature">
                    16<span>°C</span>
                  </p>
                  <p className="decription">Broken Clouds</p>
                </div>
              </div>
            </div>
          </div>
          <div className="weather-details">
            <div className="humidity">
              <i className="bx bx-water"></i>
              <div className="text">
                <div className="info-humidity">
                  <span>0%</span>
                </div>
                <p>Humidity</p>
              </div>
            </div>
            <div className="wind">
              <i className="bx bx-wind"></i>
              <div className="text">
                <div className="info-wind">
                  <span>0Km/h</span>
                </div>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
          <div className="not-found">
            <div className="box">
              <img src="images/404.png" />
              <p>Oops! Location not found!</p>
            </div>
          </div>
        </div> */}
      </h1>
      <Weather />
    </div>
  );
}
