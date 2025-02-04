import { useState } from "react";

export default function Form() {
  const [formValues, setFormValues] = useState({
    name: "",
    location: "",
    difficulty: "",
    description: "",
  });

  function handleChangeFormValues(event) {
    event.preventDefault();
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formValues);

    await fetch(
      "https://react-full-stack-app-server-g31g.onrender.com/add-trails",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      }
    );
    alert("Trail added successfully");
  }

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name of the trail"
          required
          onChange={handleChangeFormValues}
        />
        <br />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="location of the trail"
          required
          onChange={handleChangeFormValues}
        />
        <br />
        <label htmlFor="difficulty">Difficulty:</label>
        <input
          type="text"
          id="difficulty"
          name="difficulty"
          placeholder="difficulty level"
          required
          onChange={handleChangeFormValues}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          placeholder="description of the trail"
          onChange={handleChangeFormValues}
        />
        <button type="submit">Add Trail</button>
      </form>
    </>
  );
}
