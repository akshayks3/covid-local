import {useState} from 'react';

const hotels = [
  {id: 1, name: 'Grand Palace Hotel'},
  {id: 2, name: 'Ocean View Resort'},
  {id: 3, name: 'Mountain Peak Inn'},
  {id: 4, name: 'City Center Suites'},
];
const Incidents = () => {
  const [hotelId, setHotelId] = useState('');
  const [incident, setIncident] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', {hotelId, incident});
    // Handle the form data as needed
  };

  return (
    <div className="incidents">
      <div className="incident-form-container">
        <h2 className="form-title">Report an Incident</h2>
        <form onSubmit={handleSubmit} className="incident-form">
          <div className="form-group">
            <label className="form-label">Hotel Name</label>
            <select
              className="form-select"
              value={hotelId}
              onChange={(e) => setHotelId(e.target.value)}
              required
            >
              <option value="">Select a hotel</option>
              {hotels.map((hotel) => (
                <option key={hotel.id} value={hotel.id}>
                  {hotel.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Incident Details</label>
            <textarea
              className="form-textarea"
              value={incident}
              onChange={(e) => setIncident(e.target.value)}
              placeholder="Describe the incident..."
              required
            />
          </div>

          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Incidents;
