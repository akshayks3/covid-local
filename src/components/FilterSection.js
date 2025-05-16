import PageLoader from './PageLoader';

import {useDataContext} from '../contexts/dataContext';
import {useFilterContext} from '../contexts/filterContext';
import {API_URL} from '../utils/commonFunctions';

import React, {useState} from 'react';

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
  const [dateRange, setDateRange] = useState('1W');
  const [selectedBrand, setSelectedBrand] = useState('');
  const {filters, setFilters} = useFilterContext();
  const {commonData, setData} = useDataContext();
  const [loader, setLoader] = useState(false);
  const user = JSON.parse(sessionStorage.getItem('user'));
  const handleChange = () => {};

  const STATES = [
    ...new Set(commonData.hotels.map((property) => property.state)),
  ];
  console.log('these are the states', STATES);
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

  const onSubmit = async () => {
    let categoryFilter = '';
    let stateFilter = '';
    let brandFilter = '';
    let dateFilter = '';
    let propertyFilter = '';
    setLoader(true);
    setFilters({
      category: category,
      dateRange: dateRange,
      state: selectedState,
      brand: selectedBrand,
    });
    if (category) {
      categoryFilter = `categoryId=${category}`;
    }
    if (selectedBrand) {
      if (['BM', 'PM'].includes(user.userRole)) {
        brandFilter = `brand=${user.brandId}`;
      } else {
        brandFilter = `brand=${selectedBrand}`;
      }
    } else if (user.userRole === 'BM') {
      brandFilter = `brand=${user.brandId}`;
    }
    if (dateRange) {
      dateFilter = `date=${dateRange}`;
    } else {
      dateFilter = `date=1W`;
    }

    if (selectedState) {
      stateFilter = `state=${selectedState}`;
    }
    if (user.userRole === 'PM') {
      propertyFilter = `propertyId=${user.propertyId}`;
    } else if (filters.hotel) {
      const propertyId = commonData.hotels.find(
        (hotel) => hotel.name === filters.hotel
      )?.id;
      if (propertyId) {
        propertyFilter = `propertyId=${propertyId}`;
      }
    }
    console.log('this is the property filter', propertyFilter);
    const queryParams = [
      categoryFilter ? categoryFilter : '',
      propertyFilter ? propertyFilter : '',
      stateFilter ? stateFilter : '',
      dateFilter ? dateFilter : '',
      brandFilter ? brandFilter : '',
    ]
      .filter(Boolean) // remove empty strings
      .join('&');

    const finalQuery = queryParams ? `?${queryParams}` : '';
    const url = `${API_URL}/feedbacks/${finalQuery}`;
    const data = await fetch(url);
    const jsonData = await data.json();
    console.log('this is the json data', jsonData);
    setData({
      feedbackList: jsonData.feedbackList,
      feedbackListAIResponse: jsonData.feedbackListAIResponse,
    });
    setLoader(false);
  };
  console.log('this is the commondata', commonData);
  return (
    <>
      {loader && <PageLoader></PageLoader>}
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
            <option value="">All</option>
            {commonData.categories.map((category) => {
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
              <option value="">All</option>
              {STATES.map((state) => (
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
        <button type="submit" className="small-submit-btn" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default FilterSection;
