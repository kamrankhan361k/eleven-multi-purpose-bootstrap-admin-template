import { Card, CardBody } from "reactstrap";
import { capitalize, getWeatherIcon } from "../../lib/helpers";

import Divider from "./Divider";
import PropTypes from "prop-types";
import fetch from "../../lib/fetch";
import format from "date-fns/format";
import useSWR from "swr";

const DescriptionItem = ({ title, content }) => (
  <div className="d-flex mb-2 justify-content-between align-items-center">
    <span>{title}</span>
    <small className="px-2 d-inline-block">{content}</small>
  </div>
);

const ForecastItem = ({ content }) => (
  <span
    style={{
      display: "block",
      margin: "2px 0"
    }}
  >
    {content}
  </span>
);

const WeatherCard = ({ city, country, days }) => {
  const { data, error } = useSWR(
    `${process.env.baseUrl}api/weather?city=${city}&country=${country}&days=${days}`,
    fetch
  );

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    data && (
      <Card className="mb-4">
        <CardBody className="pb-0">
          <div className="d-flex mb-4 justify-content-between align-items-center">
            <div>
              <h5 className="mb-0 font-weight-bold">{`${data.city.name}, ${data.city.country}`}</h5>
              <h6 className="mb-0">
                {format(data.list[0].dt * 1000, "MMMM Do YYYY")}
              </h6>
              <small>{capitalize(data.list[0].weather[0].description)}</small>
            </div>
            <div className="text-right">
              <h3 className="font-weight-light mb-0">
                <span>{data.list[0].main.temp}&deg;</span>
              </h3>
            </div>
          </div>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ flexWrap: "wrap" }}
          >
            {Object.keys(data.list[0].main).map((key, index) => (
              <div key={index} style={{ width: "50%" }}>
                <DescriptionItem
                  title={capitalize(key.replace(/_/g, " "))}
                  content={data.list[0].main[key]}
                />
              </div>
            ))}
          </div>
        </CardBody>
        <Divider text="Forecast" />
        <CardBody className="pt-0">
          <div
            className="text-center justify-content-between align-items-center d-flex"
            style={{ flexFlow: "initial" }}
          >
            {data.list.map(
              (day, index) =>
                index !== 0 && (
                  <div
                    className="text-center mb-0 d-flex align-items-center justify-content-center flex-column"
                    key={index}
                  >
                    <ForecastItem content={format(day.dt * 1000, "ddd")} />
                    <ForecastItem content={day.weather.description} />
                    <ForecastItem
                      content={getWeatherIcon(
                        day.weather[0].icon,
                        24,
                        "rgba(0,0,0,.87)"
                      )}
                    />
                    <ForecastItem content={`${day.main.temp}°`} />
                  </div>
                )
            )}
          </div>
        </CardBody>
      </Card>
    )
  );
};

WeatherCard.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  days: PropTypes.number
};

export default WeatherCard;
