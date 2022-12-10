import React from "react";

function Emails() {
  const [response, setReponse] = React.useState(null);

  React.useEffect(() => {
    const token = localStorage.getItem("bearerToken");

    // fetch("hub.tutorworks.net/api/v4/users", {
      fetch("https://api.tumblr.com/v2/blog/peacecorps.tumblr.com/posts/text?notes_info=true",{
      headers: {
        mode: "no-cors",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
            console.log("it worked!")
          return res.json();
        } else {
          throw new Error("Failed to fetch data from server");
        }
      })
      .then((data) => setReponse(data))
      .catch((error) => console.error(error));

  }, []);

  return (
    <div>{response && <pre>{JSON.stringify(response, null, 2)}</pre>}</div>
  );
}

export default Emails;
