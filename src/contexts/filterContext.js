import React, {createContext, useContext, useState} from 'react';

// Create context
const FilterContext = createContext();

// Default filters
const defaultFilters = {
  category: 'All',
  dateRange: '1 Week',
  state: 'All',
  brand: 'All',
  hotel: null,
};

// Provider component
export const FilterProvider = ({children}) => {
  const [filters, setFilterState] = useState(defaultFilters);

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
