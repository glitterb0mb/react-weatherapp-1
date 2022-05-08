import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div>
            <input
              type="search"
              placeholder="Search for a city"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>Atlanta</h1>
        <ul>
          <li>Last updated: 04-16-21 15:15</li>
          <li>Overcast</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAolBMVEX////h6O3/rDP/qiz/pxv/qin/7trg6fD/v23/qy//qCL/vmno7fHi6e7/phP/7Nbf6/X2+Pr//vv/tVD/9enw8/b/2az/58v/5MT/+/X/8eD/37r/x4L/zpL/wXP/tEr/053/uFn/rzrk4tz/u2H/16f/xXv/4b3/y4z1wX/l4Nbq1rz2v3jwzKH/3bP/sUPt0a3p2cjzxIrxyZfuz6j/oQA3YbX9AAAIoElEQVR4nO2ca3/iKhCH1wSs0Ij3S1rvWuu23dp2z/n+X+0kXipJgEAk0nB4XuxvX1gz/8wwAwP465fD4XA4HA6Hw+FwOBwOh8PhcDgcV9EdT3oriPaNpwfTppTDFAOIkOchH5Nly7Q1+qn72LuAyM60QbppEeQlAFvTJumlD1ICI4lT00ZpZeOnBXoesSnfjEhWoOffmzZLI/cMF0ZO7Ju2SxshZgn08JNpw7QxBkyF/sa0YdqYQqZCD5s2TBsz5jCMBmJo2jJdsBNNVBKtqRcNnsK6act04RRWH6ew+jiF1ccprD5OYfWpksLRbo58bzNUW53z1haKM+/RZI/8VWNY4opkNCfw1NLdqmjccdaHSqunxxU4PRzsuqqWS7Klep6QLOT/8J3dxUCe/Fc87Kl+JIbltMyXSTvBRvpN1lmttugtyTeFH5MNZUTGhSSIWaZDDc6lJa4y/eDDO5I28z3zisiomAoB22ykwZ6sxCkzTKHsnz8yYgDobkWyHiLvxZDVbJNuJmY9GIH2hbWwgcw4k/biU1aitInMlxs5cVhYDAtONoy8KPkF9+kvQLLFkCPQQ6vCalgsmS5U8eIm6UUfSyZ8nsDIiTpLBqctryRxQS6R7pOlZLHnC/TworCeLA/858hLDKd7AnAEgQ3Z1y8QqFJO86mzNx7OEqW/pz9+HL4/16Xr6LNAoOfPCmnhWCZ6kgfL2mFhbjuW48OQM3U+ARYan0U9FfPy2wGt45CfS4+Us2HdyHmvWqffQ34yjSllw7oljFGllYkEXfHTStmw5nUGTugN0qiaiZ0o97huN+zXH/phVyaZ5r1U6Xm7LOwF0Bm0FP/1w/PTdukBQgiI/8Hz++n7SFz0OVvjZ8ijRnEHOKvYb/hvtD+cwajSH860fb8RH2IA5lPBKk8cNVhnMTwhml5EiY3jkP7TkmDegEIQoAlPJK+5c0BhlqGAcILBVjjeEHFNi2wFcMpMU7zjDeUJzJHIiNLhCojT4bfIGaNx+qRhtq8MP1AZR2PeUZ77qD8nm8ycocXNNGV5UCgRpxfc4332NKJQI9im45ynsDwPiiSC5EPDRvo4aT4QvCefxUmmZXqQLxEkm0pDIJ5RcgDJZXHXZ72lcj3Ik5h8reG9uFbz8WGidIyZjypbIEsi8uh3X4eFHHj8JpI4OLzIvKpbCMx02KM3T9ezR7UMQ6mDEGP875x+W7vU28Q3ERjlcYQTT6VtWuRM7jjiMNhvfv/9eH39/PwcDAad89c90W8TkclN9EV0d+epCoLJuJqoD0EUqft6Xd+123dHajHN4CiztT/PGnwwv+UljXCxj1YJgKx2iRnXVlkgBL0/6/ZZV4ogFvm8PDwJz/TvxeSJbI1GqQmlsgcheHtps9UdaQ5OT/oZ5zSnigJ98jtyH1/ekYFpWReYW0R8EGi85Ov7SRpzGkdpoPcqpy+O1U7+48snZO+/8QBvNVl9MYFpeREblZkMAh9tBX2xG03rY22B8vHRi6LACMORKt7YSAF7a5UIPWM24bDupvEFKg3BnyHxWSFG/aICjUoUt4sToH1hgQYlCtpi2RgtNAbPGEo3XYVSSD6vEVirmVGo4EL8V71MJDBTF+VHIepdKdDMUFRIpODluhiNMTAU5Wsh/LrahSbiVGE6A5vXCzTgRPk8g/9ocKEBJ/ak88xKiwtv7sR+Js/E27vxUgoBgOlKqcmFN3di6lwmBLjx9/VlXWs2a+vPj68l+N4BBnr01c5O7HQGQdA8xkUzCIKBum/D8WJ7T9PYvWe2MhN3KTD8/XlofB6eGzc/283XN3xYHMM3TS6MV/ydATvilWSOGnGU+QkgJvtFsrFOuRB7/9SyvZe79vpvrBG8Xl8LpQjkRPY3hF3mEMb0Pt+lVkD4h9P5bLZrX1Gs3khgjIQnR6IdeEKd9BiffQhma0EUttfLmbYglSHPkeJjj/RhllM1RPhD3Bu8u9MwYVNC2ILMOfZIn5OfHLKITGvpxgJrwhbkJLczSM7p5nAs099ftawtD95ChHn/IxWni9Nn45WTf01jolw4ocq7XEGBTvcsutFHEfqhHjzAdONWYjl0ujoYuxtc2ZgoGdZonEvMpU9HkENyfWOibBjT2Hx90UA83qzrEw2NidLJDEYphcd6UQc6GhOlk5a4klf4QPTNp8skJVFmHOLnY5T++5PzKEVSIu9yOc3pKn24qYQLaymJC4nNTnyc1IS3WhJdD60w79C6d7lC0jVttzyJopHfXDpfpe6YtlsBuvSzjj0mXXg+bjkwbbYK9FBkXE2nQd9XxTX1B28EHadLkUR0ue5v2mY1ElPUCf+gNl5dDpmZtlmRRMlo9QBj4xP5AC4uH6pSoolJTcLr0158EYuGeLNn+iNVU5hdLXb7LZp6+kpE5RQq75JXT6HqFnL1FCrv6pg2WB3V7RvT9qqjeo6zWnOaA4oKKzUvPaKYa6qXapTD1LS9BZBzXczhf4Fpe9XJyaadQXDJLs1gUMGBKArTTgU9loVf9DmHA6oHz3+m7dIHcyDaEZ8nWBWxgvlEAEOhTQ6ssZKpLRnmTEahbQIz5cI6gWmF9glMKbQsyRyxtM5T0ApN21IKTdtjlK4WdsYordDCPBoT2O5Cal5q5yikFZq2pCw6tgdpzfogbVofpIH1Cgf/n2FoV2/mQtN6hfbXe9vXFfS021KFHdsV2r/6pfvddubSX7YrTGxZ2DinSfWCTZtTAqmdQ/u6NOktGfsGYkqgfQMxu7ttWZgyTpnYFabMQyamjdIKS6BVTuSc9TJtlj54h9mscSL/tJ4l6VR0HNG0bVoQnre0oeznHCit/FDMP/Vc8bW+zMH1KkuU/CXw6gaq9M2DiqYbpXsHFYxUyR81q2ykquqrmsYi+iqksai8A7yfK/wpNIv8PCRDZfAD806z0G9fOhwOh8PhcDgcDofD4XA4HA6Hw3L+A69wx59t5E+bAAAAAElFTkSuQmCC"
              alt="Overcast"
            />
            <div>
              <strong>66°</strong>
              <a href="/">°C</a> | <a href="/">°F</a>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 40%</li>
            <li>Wind: 7 MPH</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Search() {
  const [city, setCity] = useState("");
  const [load, setLoad] = useState(false);
  const [weather, setWeather] = useState({});
  function showWeather(response) {
    setLoad(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: ` http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "37f507b0f9180073cac0e3095b325fe0";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Search for a city"
        onChange={updateCity}
      />
      <button type="submit">Search</button>
    </form>
  );
  if (load) {
    return (
      <div>
        {form}
        <ul>
          <li>Temp: {Math.round(weather.temperature)}°C</li>
          <li>{weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>{weather.wind}KPH</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
