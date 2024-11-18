import { useState } from 'react';

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [user, setUser] = useState({
    email: '',
    userName: ''
  })

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return setUser({...user, [name]: value});
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    setUser({ email: '', userName: '' })
  };

  return (
    <div className="container text-center">
      <h1>
        Contact Me
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={user.userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={user.email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;