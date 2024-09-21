import React, { useState } from 'react';

const demoServices = [
    { name: 'General Checkup', description: 'Basic health checkup', price: '50' },
    { name: 'Dental Cleaning', description: 'Teeth cleaning and checkup', price: '80' },
    { name: 'Physical Therapy', description: 'Rehabilitation therapy', price: '120' },
    { name: 'Blood Test', description: 'Comprehensive blood test', price: '40' },
    { name: 'X-Ray', description: 'Diagnostic imaging for bones and tissues', price: '100' },
    { name: 'Vaccination', description: 'Immunization against common diseases', price: '60' },
    { name: 'MRI Scan', description: 'Detailed imaging of organs and tissues', price: '300' },
    { name: 'Nutrition Counseling', description: 'Guidance on healthy eating habits', price: '75' },
    { name: 'Cardiac Screening', description: 'Evaluation of heart health', price: '150' },
    { name: 'Skin Allergy Test', description: 'Test for skin allergies', price: '90' },
  ];
  

function ServiceForm({ addService }) {
  const [service, setService] = useState({ name: '', description: '', price: '' });
  const [selectedService, setSelectedService] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService(prev => ({ ...prev, [name]: value }));
  };

  const handleDropdownChange = (e) => {
    const selected = demoServices.find(item => item.name === e.target.value);
    setSelectedService(e.target.value);
    setService({ name: selected.name, description: selected.description, price: selected.price });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!service.name || !service.description || !service.price) {
      setError('All fields are required');
      return;
    }
    addService({ ...service, id: Date.now() });
    setService({ name: '', description: '', price: '' });
    setSelectedService('');
    setError('');
  };

  return (
    <div className="card">
      <div className="card-body">
      <div className="form-group">
            <label>Our Service</label>
            <select
              className="form-control"
              value={selectedService}
              onChange={handleDropdownChange}
            >
              <option value="">-- Select a service --</option>
              {demoServices.map((service, index) => (
                <option key={index} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
        <h4 className="card-title">Add New Service</h4>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
         
          <div className="form-group">
            <label>Service Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={service.name}
              placeholder="Enter service name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="2"
              placeholder="Enter service description"
              value={service.description}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Price ($)</label>
            <input
              type="number"
              className="form-control"
              name="price"
              placeholder="Enter service price"
              value={service.price}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-3">Add Service</button>
        </form>
      </div>
    </div>
  );
}

export default ServiceForm;
