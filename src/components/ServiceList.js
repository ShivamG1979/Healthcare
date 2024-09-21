import React, { useState } from 'react';

function ServiceList({ services, updateService, deleteService }) {
  const [editableService, setEditableService] = useState(null);
  const [form, setForm] = useState({ name: '', description: '', price: '' });

  const handleEdit = (service) => {
    setEditableService(service.id);
    setForm(service);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    updateService(form);
    setEditableService(null);
  };

  return (
    <div className="mt-4">
      <h3 className="mb-3">Service List</h3>
      {services.length === 0 && <p className="text-muted">No services added yet.</p>}
      <ul className="list-group">
        {services.map((service) => (
          <li key={service.id} className="list-group-item d-flex justify-content-between align-items-center">
            {editableService === service.id ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control mr-2"
                />
                <input
                  type="text"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="form-control mr-2"
                />
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  className="form-control mr-2"
                />
                <button onClick={handleUpdate} className="btn btn-success btn-sm">
                  Update
                </button>
              </>
            ) : (
              <>
                <span>
                  {service.name} - {service.description} - ${service.price}
                </span>
                <div>
                  <button onClick={() => handleEdit(service)} className="btn btn-warning btn-sm mr-2">
                    Edit
                  </button>
                  <button onClick={() => deleteService(service.id)} className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
