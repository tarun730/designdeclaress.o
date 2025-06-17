import  { useState } from 'react'
import Sections from './Sections';
import Sidebarsection from './Sidebarsection';

const Contact = () => {
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
<Sections>

<Sidebarsection title='Contact'/>

<div className="content">
    <form className="form Contactpageform" onSubmit={handleSubmit}>
    <h2>Send Us A Message</h2>

<div className="inputdatasection">

    <div className='form-data'>


      <label>
        Name*:
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
      Email*:    </label>
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
      Team to contact*:  </label>
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
      Enquiry type*:   </label>
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
        placeholder="Please write you message here"
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
          I would like to be added to the Design Declares! newsletter and receive further updates.
    </label>

    {/* <label className="checkbox"> */}
   

    <a href="/privacy-policy" target="_self" className="privacy-link">
      View our Privacy Policy
    </a>

    <button type="submit" className="submit-btn">
     Send Message
    </button>
  </form>
  </div>
  </Sections>

  )
}

export default Contact