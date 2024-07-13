import fetch from "isomorphic-unfetch";

export default (req, res) => {
  fetch(
    `//api.openweathermap.org/data/2.5/forecast?q=${req.query.city},${req.query.country}&appid=${process.env.weatherApi}&cnt=${req.query.days}&units=metric`
  )
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(console.error);

  return;
};
