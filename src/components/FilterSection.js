import React, {useState} from 'react';

const hotelLocations = [
  {
    id: 1,
    name: 'Hotel NYC',
    lat: 40.7128,
    lng: -74.006,
    summary: 'Luxury hotel in New York City.',
  },
  {
    id: 2,
    name: 'Hotel LA',
    lat: 34.0522,
    lng: -118.2437,
    summary: 'Modern hotel in Los Angeles.',
  },
  {
    id: 3,
    name: 'Hotel Chicago',
    lat: 41.8781,
    lng: -87.6298,
    summary: 'Comfortable hotel in Chicago.',
  },
  {
    id: 4,
    name: 'Hotel Miami',
    lat: 25.7617,
    lng: -80.1918,
    summary: 'Beachfront hotel in Miami.',
  },
  {
    id: 5,
    name: 'Hotel Seattle',
    lat: 47.6062,
    lng: -122.3321,
    summary: 'Downtown hotel in Seattle.',
  },
];

const FilterSection = ({onFilterChange}) => {
  const [category, setCategory] = useState('');
  const [severity, setSeverity] = useState('');
  const [dateRange, setDateRange] = useState('1 Day');
  const [selectedHotel, setSelectedHotel] = useState('');

  const handleChange = () => {
    onFilterChange({
      category,
      severity,
      dateRange,
      selectedHotel,
    });
  };

  const selectStyle = {
    backgroundColor: '#1e1e2f',
    color: '#e0e0e0',
    border: '1px solid #333',
    borderRadius: '6px',
    padding: '8px 12px',
    fontSize: '14px',
    width: '180px',
  };

  const labelStyle = {
    fontSize: '12px',
    color: '#aaa',
    marginBottom: '4px',
    display: 'block',
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          padding: '1rem',
          background: '#111827',
          borderRadius: '10px',
          flexWrap: 'wrap',
          border: '1px solid #2a2f45',
        }}
      >
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <label style={labelStyle}>Category</label>
          <select
            style={selectStyle}
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              handleChange();
            }}
          >
            <option value="">Category 1</option>
            <option value="Low">Category 2</option>
            <option value="Moderate">Category 3</option>
            <option value="High">Category 4</option>
            <option value="Critical">Category 5</option>
          </select>
        </div>
        {/* Severity Dropdown */}
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <label style={labelStyle}>Severity</label>
          <select
            style={selectStyle}
            value={severity}
            onChange={(e) => {
              setSeverity(e.target.value);
              handleChange();
            }}
          >
            <option value="">All</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          padding: '1rem',
          background: '#111827',
          borderRadius: '10px',
          flexWrap: 'wrap',
          border: '1px solid #2a2f45',
        }}
      >
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <label style={labelStyle}>Date Range</label>
          <select
            style={selectStyle}
            value={dateRange}
            onChange={(e) => {
              setDateRange(e.target.value);
              handleChange();
            }}
          >
            <option value="1 Day">1 Day</option>
            <option value="1 Week">1 Week</option>
            <option value="1 Month">1 Month</option>
          </select>
        </div>

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <label style={labelStyle}>Brands</label>
          <select
            style={selectStyle}
            value={severity}
            onChange={(e) => {
              setSeverity(e.target.value);
              handleChange();
            }}
          >
            <option value="">All</option>
            <option value="Low">Marriott</option>
            <option value="Moderate">JW Marriott</option>
            <option value="High">WestIn</option>
            <option value="Critical">Sheraton</option>
          </select>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          padding: '1rem',
          background: '#111827',
          borderRadius: '10px',
          flexWrap: 'wrap',
          border: '1px solid #2a2f45',
        }}
      >
        {/* Date Range Dropdown */}

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <label style={labelStyle}>State</label>
          <select
            style={selectStyle}
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              handleChange();
            }}
          >
            <option value="">All</option>
            <option value="Low">Atlanta</option>
            <option value="Moderate">Miami</option>
            <option value="High">California</option>
            <option value="Critical">Georgia</option>
          </select>
        </div>

        {/* Hotel Dropdown */}
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <label style={labelStyle}>Hotel</label>
          <select
            style={selectStyle}
            value={selectedHotel}
            onChange={(e) => {
              setSelectedHotel(e.target.value);
              handleChange();
            }}
          >
            <option value="">All Hotels</option>
            {hotelLocations.map((hotel) => (
              <option key={hotel.id} value={hotel.id}>
                {hotel.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div style={{textAlign: 'center'}}>
        <button type="submit" className="small-submit-btn">
          Submit
        </button>
      </div>
    </>
  );
};

export default FilterSection;
