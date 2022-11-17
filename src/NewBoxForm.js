import './NewBoxForm.css';
import { useState } from 'react';

function NewBoxForm({ addBox }) {

  const INITIAL_STATE = {
    height: "",
    width: "",
    color: ""
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
    console.log("FORM DATA", formData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    // addBox(formData.height, formData.width, formData.color);
    setFormData(INITIAL_STATE);
  };

  return (
    <form id="NewBoxForm" onSubmit={handleSubmit}>
      <div className="form-line">
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </div>
      <div className="form-line">
        <label htmlFor="width">Width:</label>
        <input
          id="width"
          name="width"
          value={formData.width}
          onChange={handleChange}
        /> 
      </div>
      <div className="form-line">
        <label htmlFor="color">Color:</label>
        <input
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
      </div>
      <button className="form-button">New Box</button>
    </form>
  );
}

export default NewBoxForm;