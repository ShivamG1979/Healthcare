import React, { useState } from 'react';
import ServiceForm from './components/ServiceForm';
import ServiceList from './components/ServiceList';
import './App.css';

function App() {
  const [services, setServices] = useState([
    { id: 1, name: 'General Checkup', description: 'A routine health checkup.', price: 50 },
    { id: 2, name: 'Blood Test', description: 'Comprehensive blood analysis.', price: 30 },
  ]);

  const addService = (service) => {
    setServices([...services, { ...service, id: Date.now() }]);
  };

  const updateService = (updatedService) => {
    setServices(services.map(service =>
      service.id === updatedService.id ? updatedService : service));
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1>Healthcare Services Management</h1>
      <div className="row">
        <div className="col-md-6">
          <ServiceForm addService={addService} />
        </div>
        <div className="col-md-6">
          <ServiceList
            services={services}
            updateService={updateService}
            deleteService={deleteService}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
