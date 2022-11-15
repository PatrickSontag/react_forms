import './NewBoxForm.css';
import { useState } from 'react';

function NewBoxForm() {

  const [formData, setFormData] = useState({
    height: "",
    width: "",
    color: ""
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  return (
    <form id="NewBoxForm">
      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="color">Color:</label>
      <input
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
    </form>
  );
}

export default NewBoxForm;