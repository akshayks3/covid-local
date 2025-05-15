import {useDataContext} from '../contexts/dataContext';
import {useFilterContext} from '../contexts/filterContext';
import {DUMMY_CATEGORIES, PropertyData} from '../utils/commonFunctions';

import React, {useEffect, useState} from 'react';

const FilterSection = ({}) => {
  const DATE_DATA = [
    {
      value: '1D',
      label: '1 Day',
    },
    {
      value: '1W',
      label: '1 Week',
    },
    {
      value: '1M',
      label: '1 Month',
    },
  ];
  const [category, setCategory] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [dateRange, setDateRange] = useState('1 Day');
  const [selectedBrand, setSelectedBrand] = useState('');
  const {setFilters} = useFilterContext();
  const {commonData} = useDataContext();
  const user = JSON.parse(sessionStorage.getItem('user'));
  const handleChange = () => {
    setFilters((st) => ({
      ...st,
      category: category,
      dateRange: dateRange,
      state: selectedState,
      brand: selectedBrand,
    }));
  };

  const getBrands = async () => {
    const data = await fetch('http://18.61.2.25:8080/brands/');
    const jsonData = data.json();
    console.log('this is the json data', jsonData);
  };

  useEffect(() => {
    getBrands();
  }, []);

  const DUMMY_STATES = [
    ...new Set(PropertyData.map((property) => property.state)),
  ];
  console.log('these are the states', DUMMY_STATES);
  const selectStyle = {
    backgroundColor: '#1e1e2f',
    color: '#e0e0e0',
    border: '1px solid #333',
    borderRadius: '6px',
    padding: '8px 12px',
    fontSize: '14px',
    width: '220px',
  };

  const labelStyle = {
    fontSize: '12px',
    color: '#aaa',
    marginBottom: '4px',
    display: 'block',
  };

  const rowStyle = {
    display: 'flex',
    gap: '1.5rem',
    padding: '1rem',
    background: '#111827',
    borderRadius: '10px',
    flexWrap: 'wrap',
    border: '1px solid #2a2f45',
    justifyContent: 'space-between',
  };

  return (
    <>
      <div style={rowStyle}>
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
            <option value="all">All</option>
            {DUMMY_CATEGORIES.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
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
            {DATE_DATA.map((date) => (
              <option value={date.value} key={date.value}>
                {date.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div style={rowStyle}>
        {user.userRole !== 'PM' && (
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <label style={labelStyle}>State</label>
            <select
              style={selectStyle}
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                handleChange();
              }}
            >
              <option value="all">All</option>
              {DUMMY_STATES.map((state) => (
                <option value={state} key={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        )}
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <label style={labelStyle}>Brands</label>
          <select
            style={selectStyle}
            value={selectedBrand}
            onChange={(e) => {
              setSelectedBrand(e.target.value);
              handleChange();
            }}
          >
            {user.userRole === 'SA' && <option value="">All</option>}
            {commonData.brands.map((brand) => (
              <option value={brand?.id} key={brand?.id}>
                {brand?.name}
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
