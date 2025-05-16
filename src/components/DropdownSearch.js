import {useDataContext} from '../contexts/dataContext';
import {useFilterContext} from '../contexts/filterContext';

import React, {useEffect, useState} from 'react';

const animatedPlaceholders = [
  'Search by property name...',
  'Try "Anaheim Marriott"',
  'Search by property code',
  'Eg: CHICM',
];

export const DropdownSearch = () => {
  const [placeholder, setPlaceholder] = useState(animatedPlaceholders[0]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);

  const {setFilters} = useFilterContext();
  const {commonData} = useDataContext();
  const user = JSON.parse(sessionStorage.getItem('user'));

  useEffect(() => {
    if (user.userRole === 'PM') {
      const property = commonData.hotels.find(
        (data) => data?.id === user?.propertyId
      );
      setSearchValue(property?.name);
      setShowSuggestions(false);
      setInputDisabled(true); // Always disabled for PM
    }
  }, [commonData.hotels, user]);

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
    if (searchValue?.trim()?.length > 0) {
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
  }, [searchValue, commonData.hotels]);

  const handleSelectSuggestion = (hotel) => {
    setFilters({hotel});
    setSearchValue(hotel);
    setShowSuggestions(false);
    setInputDisabled(true); // disable input after selection
  };

  const handleCancelSelection = () => {
    setSearchValue('');
    setFilters({hotel: null});
    setShowSuggestions(false);
    setInputDisabled(false);
  };

  return (
    <div className="dropdown-search" style={{position: 'relative'}}>
      <input
        type="text"
        value={searchValue}
        placeholder={placeholder}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => searchValue && setShowSuggestions(true)}
        className="search-input"
        disabled={inputDisabled}
      />

      {inputDisabled && user.userRole !== 'PM' && (
        <button onClick={handleCancelSelection} className="cancel-button">
          Cancel
        </button>
      )}

      {showSuggestions &&
        filteredSuggestions.length > 0 &&
        user.userRole !== 'PM' && (
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
