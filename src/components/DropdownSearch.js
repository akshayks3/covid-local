import {useDataContext} from '../contexts/dataContext';
import {useFilterContext} from '../contexts/filterContext';

import React, {useEffect, useState} from 'react';

const animatedPlaceholders = [
  'Search by property name...',
  'Try "Anaheim Marriott"',
  'Search by property code',
  'Eg: CHICM',
];

// Dummy hotel suggestions
// const hotelSuggestions = [
//   'Marriott Times Square',
//   'JW Marriott Mumbai',
//   'Marriott Marquis Houston',
//   'Courtyard by Marriott Goa',
//   'Fairfield by Marriott Pune',
//   'Ritz-Carlton Bangalore',
//   'Marriott Jaipur',
//   'Marriott Tokyo',
// ];

export const DropdownSearch = () => {
  const [placeholder, setPlaceholder] = useState(animatedPlaceholders[0]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const {setFilters} = useFilterContext();
  const {commonData} = useDataContext();
  // Placeholder animation
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder((prev) => {
        const currentIndex = animatedPlaceholders.indexOf(prev);
        const nextIndex = (currentIndex + 1) % animatedPlaceholders.length;
        return animatedPlaceholders[nextIndex];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Filter suggestions on input change
  useEffect(() => {
    if (searchValue.trim().length > 0) {
      const results = commonData.hotels
        .filter(
          (hotel) =>
            hotel?.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            hotel?.id.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((hotel) => hotel.name);
      setFilteredSuggestions(results);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchValue, commonData]);

  const handleSelectSuggestion = (hotel) => {
    console.log('this is the hotel', hotel);
    setFilters({
      hotel: hotel,
    });
    setSearchValue(hotel);
    setShowSuggestions(false);
  };

  return (
    <div className="dropdown-search">
      <input
        type="text"
        value={searchValue}
        placeholder={placeholder}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => searchValue && setShowSuggestions(true)}
        className="search-input"
      />
      {/* <button className="search-button">🔍</button> */}

      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="suggestion-list">
          {filteredSuggestions.map((hotel, idx) => (
            <li key={idx} onClick={() => handleSelectSuggestion(hotel)}>
              {hotel}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
