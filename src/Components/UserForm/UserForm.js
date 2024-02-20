import React, { useState } from 'react';
import './UserForm.css';
import '../../media.css';

function UserForm() {
 const [formData, setFormData] = useState({
  userInput: '',
  email: '',
  selectedOption: '',
  comments: '',
  isChecked: false,
  date: ''
 });
 
 const [isSubmit, setIsSubmit] = useState(false);

 const handleInputChange = (e) => {
  const { name, value, type, checked } = e.target;
  const inputValue = type === 'checkbox' ? checked : value;
  setFormData({
    ...formData,
    [name]: inputValue,
    date: new Date().toLocaleString()
  });
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmit(true);

  const response = await fetch('https://hot-handsomely-honey.glitch.me/quotes', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

  const result = await response.json();

  setFormData({
    userInput: '',
    email: '',
    selectedOption: '',
    comments: '',
    isChecked: false,
    date: ''
  });
};
  return (
    <div className="form_container">
      <h3>Request a quote</h3>
      <form onSubmit={handleSubmit}>
        <div className="form_inputs">
          <input type="text" name="userInput" value={formData.userInput} placeholder="Full name" onChange={handleInputChange} required/>
          <input type="email" name="email" value={formData.email} placeholder="Email Adress" onChange={handleInputChange} required/>
        </div>
        <div className="form_inputs">
          <select name="selectedOption" value={formData.selectedOption} onChange={handleInputChange} required>
            <option value="">Select a capability</option>
            <option value="Design">Design</option>
            <option value="Production">Production</option>
            <option value="Certification">Certification</option>
          </select>
        </div>
        <textarea 
          name="comments"
          id="comments"
          cols="30"
          rows="5"
          placeholder="Message"
          value={formData.comments}
          onChange={handleInputChange} 
          required></textarea>
        <div className="getLetters">
          <input type="checkbox" name="isChecked" id="getLetters" checked={formData.isChecked} onChange={handleInputChange}/>
          <label htmlFor="getLetters">I'd like to receive the newsletter</label>
        </div>
        <button type="submit">Get a quote</button>
      </form>
      {isSubmit && <p className="description-thanks">Thank you for your request! We will review it as soon as possible.</p>}
    </div>
  );
}

export default UserForm;