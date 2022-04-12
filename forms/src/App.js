import { useState } from 'react';
import './App.css';

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: ""
  })

  function handleChange(event){
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value
      }
    })
  }
  function handleSubmit(event){
    event.preventDefault()
    console.log(formData)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          type="text"
          onChange={handleChange}
          placeholder="First Name"
          value={formData.firstName}
        />
        <input
          name="lastName"
          type="text"
          onChange={handleChange}
          placeholder="Last Name"
          value={formData.lastName}
        />
        <input
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Email"
          value={formData.email}
        />
        <textarea 
          value={formData.comments}
          name="comments"
          onChange={handleChange}
        />
        <div className='field'>
          <input 
            id="isFriendly" 
            type="checkbox" 
            name="isFriendly"
            checked={formData.isFriendly}
            onChange={handleChange}
          />
          <label htmlFor='isFriendly'>Are you friendly?</label>
        </div>
        <br />
        <br />
        <fieldset>
          <legend>Current employment status</legend>
          <div className='field'>
            <input 
              type="radio"
              id='unemployed'
              name="employment"
              value="unemployed"
              onChange={handleChange}
              checked={formData.employment === "unemployed"}
            />
            <label htmlFor='unemployed'>Unemployed</label>
          </div>
          <div className='field'>
            <input 
              type="radio"
              id="part-time"
              name="employment"
              value="part-time"
              onChange={handleChange}
              checked={formData.employment === "part-time"}
            />
            <label htmlFor='part-time'>Part-time</label>
          </div>
          <div className='field'>
            <input 
              type="radio"
              id="full-time"
              name="employment"
              value="full-time"
              onChange={handleChange}
              checked={formData.employment === "full-time"}
            />
            <label htmlFor='full-time'>Full-time</label>
          </div>
        </fieldset>
        <br />
        <label htmlFor="favColor">What is your favorite color?</label>
        <br/>
        <select 
          id="favColor"
          value={formData.favColor}
          onChange={handleChange}
          name="favColor"
        >
          <option value="">-- Choose --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
