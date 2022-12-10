import React from "react";

function MyComponent() {
  // Use the `useState` hook to create a state variable for storing the value
  const [value, setValue] = React.useState("");

  // Save the value to local storage when it changes
  React.useEffect(() => {
    localStorage.setItem("myValue", value);
  }, [value]);

  // Get the value from local storage when the component is mounted
  React.useEffect(() => {
    const storedValue = localStorage.getItem("myValue");
    if (storedValue) {
      setValue(storedValue);
      console.log(value)
    }
  }, []);

  // Render a form to update the value
  return (
    <form>
      <label htmlFor="value">Value:</label>
      <input
        type="text"
        id="value"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </form>
  );
}

export default MyComponent;
