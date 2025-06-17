import { useState } from 'react';
import '../Styles/EmergencyDeclarationForm.css'

export default function EmergencyDeclarationForm() {
  const [formData, setFormData] = useState({
    entity: '',
    website: '',
    country: 'United Kingdom',
    discipline: '',
    email: '',
    message: '',
    dataConsent: false,
    newsletterConsent: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formData.dataConsent) {
      alert('You must consent to data use.');
      return;
    }
    console.log('Form Submitted:', formData);
    // Replace with actual submission logic
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>I am Declaring Emergency</h2>
      <div className="radio-group">

        {['Business', 'Individual', 'Institution', 'team or department'].map((type) => (
          <label key={type} className="radio-option custom-radio">
            <input
              type="radio"
              name="entity"
              value={type}
              checked={formData.entity === type}
              onChange={handleChange}
              required
            />
            <span className="radio-mark"></span>




            {type === 'Institution' ? 'As a public institution' : `As a ${type.toLowerCase()}`}
          </label>
        ))}
      </div>


<div className="inputdatasection">

      <div className='form-data'>


        <label>
          Website*:
        </label>
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-data'>
        <label>
          Country*:    </label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="">Select a country</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States">United States</option>
          <option value="India">India</option>
          {/* Add other countries as needed */}
        </select>


      </div>

      <div className='form-data'>
        <label>
          Discipline*:  </label>
        <select
          name="discipline"
          value={formData.discipline}
          onChange={handleChange}
          required
        >
          <option value="">Select a discipline</option>
          <option value="Communication Design">Communication Design</option>
          <option value="Digital Design">Digital Design</option>
          <option value="Service Design">Service Design</option>
          <option value="Product Design">Product Design</option>
        </select>


      </div>

      <div className='form-data'>
        <label>
          Email*:   </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />


      </div>

      <div className='form-data'>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Why are you declaring? In a sentence or two, tell us why you’re joining Design Declares."
          rows={5}
        />


      </div>
      </div>
      <label className="radio-option custom-radio">
            <input
              type="radio"
              name="entity"
              // value={type}
              // checked={formData.entity === type}
              onChange={handleChange}
              required
            />
            <span className="radio-mark"></span>
        I consent for my data to be used for the purpose of the Declaration and for public promotion.
      </label>

      {/* <label className="checkbox"> */}
      <label className="radio-option custom-radio">
            <input
              type="radio"
              name="entity"
              // value={type}
              // checked={formData.entity === type}
              onChange={handleChange}
              required
            />
            <span className="radio-mark"></span>
        I would like to receive newsletter updates.
      </label>

      <a href="/privacy-policy" target="_self" className="privacy-link">
        View our Privacy Policy
      </a>

      <button type="submit" className="submit-btn">
        Declare Emergency Now
      </button>
    </form>
  );
}
