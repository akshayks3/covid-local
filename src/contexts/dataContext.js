import {
  DUMMY_BRANDS,
  DUMMY_CATEGORIES,
  PropertyData,
} from '../utils/commonFunctions';

import React, {createContext, useContext, useEffect, useState} from 'react';

// Create context
const DataContext = createContext();

// Default filters
const defaultData = {
  hotels: [],
  categories: [],
  brands: [],
};

// Provider component
export const DataProvider = ({children}) => {
  const [commonData, setCommonData] = useState(defaultData);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    let tempHotels = [];
    let tempBrands = [];
    console.log('this is the user', user);
    if (user.userRole === 'BM') {
      const brandId = user.brandId;
      tempBrands = DUMMY_BRANDS.filter((brand) => brand.id === brandId);
      tempHotels = PropertyData.filter(
        (property) => property.brand.id === brandId
      );
      setCommonData({
        hotels: tempHotels,
        categories: DUMMY_CATEGORIES,
        brands: tempBrands,
      });
    } else if (user.userRole === 'PM') {
      const propertyId = user.propertyId;
      console.log('this is the property id', propertyId);
      tempHotels = PropertyData.filter(
        (property) => property.id === propertyId
      );
      console.log('these are the temp hotels', tempHotels);
      tempBrands = [tempHotels[0]?.brand];
      setCommonData({
        hotels: tempHotels,
        categories: DUMMY_CATEGORIES,
        brands: tempBrands,
      });
    } else {
      setCommonData({
        hotels: PropertyData,
        categories: DUMMY_CATEGORIES,
        brands: DUMMY_BRANDS,
      });
    }
  }, []);

  const setData = (newData) => {
    setCommonData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  return (
    <DataContext.Provider value={{commonData, setData}}>
      {children}
    </DataContext.Provider>
  );
};

// Hook to use the filter context
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};
