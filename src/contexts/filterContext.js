import {useDataContext} from './dataContext';

import React, {createContext, useContext, useState} from 'react';

// Create context
const FilterContext = createContext();

// Default filters
const defaultFilters = {
  category: '',
  dateRange: '1 Week',
  state: '',
  brand: '',
  hotel: null,
};

// Provider component
export const FilterProvider = ({children}) => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const {commonData} = useDataContext();
  const hotelDefaultFilter =
    user.userRole === 'PM'
      ? commonData.hotels.find((hotel) => hotel.id === user.propertyId)?.name
      : null;
  const newFilters = {...defaultFilters, hotel: hotelDefaultFilter};
  const [filters, setFilterState] = useState(newFilters);

  const setFilters = (newFilters) => {
    setFilterState((prev) => ({
      ...prev,
      ...newFilters,
    }));
  };

  return (
    <FilterContext.Provider value={{filters, setFilters}}>
      {children}
    </FilterContext.Provider>
  );
};

// Hook to use the filter context
export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }
  return context;
};
