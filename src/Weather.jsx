import React from "react";

function Weather() {
  const [completion, setCompletion] = React.useState({});
  const [table, setTable] = React.useState([]);

  React.useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((response) => {
        setCompletion(response);
        console.log(response);
      })
      .catch((err) => console.error(err));
  }, []);

  React.useEffect(() => {
    if (completion.hasOwnProperty("results")) {
      completion.results.forEach((item) => {
        if (Array.isArray(item)) {
          item.map((attributes, index) => {
            table.push(<p key={index}>{JSON.stringify(attributes)}</p>);
          });
        } else {
          const keys = Object.keys(item);

          for (const key in item) {
            table.push(
              <p key={keys.indexOf(key)}>{JSON.stringify(item[key])}</p>
            );
          }
        }
      });
    } else {
      console.log("Completion doesn't work yet");
    }
  }, [completion]);

  return <div>{table}</div>;
}

export default Weather;
