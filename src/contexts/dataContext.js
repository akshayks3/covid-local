import PageLoader from '../components/PageLoader';
import {API_URL} from '../utils/commonFunctions';

import React, {createContext, useContext, useEffect, useState} from 'react';

// Create context
const DataContext = createContext();

// Default filters
const defaultData = {
  hotels: [],
  categories: [],
  brands: [],
  feedbackList: [],
  feedbackListAIResponse: null,
};

// Provider component
export const DataProvider = ({children}) => {
  const [commonData, setCommonData] = useState(defaultData);
  const [loader, setLoader] = useState(false);

  const getData = async () => {
    try {
      setLoader(true);
      const brands = await fetch(`${API_URL}/brands/`);
      const brandsData = await brands.json();
      const categories = await fetch(`${API_URL}/categories/`);
      const categoriesData = await categories.json();
      const properties = await fetch(`${API_URL}/properties/`);
      const propertiesData = await properties.json();
      const user = JSON.parse(sessionStorage.getItem('user'));
      let tempHotels = [];
      let tempBrands = [];
      if (user.userRole === 'BM') {
        const brandId = user.brandId;
        tempBrands = brandsData.filter((brand) => brand.id === brandId);
        tempHotels = propertiesData.filter(
          (property) => property.brand.id === brandId
        );
        const defaultData = await fetch(
          `${API_URL}/feedbacks/?date=1W&brand=${brandId}`
        );
        const jsonData = await defaultData.json();
        setCommonData({
          hotels: tempHotels,
          categories: categoriesData,
          brands: tempBrands,
          feedbackList: jsonData?.feedbackList || [],
          feedbackListAIResponse: jsonData?.feedbackListAIResponse || null,
        });
      } else if (user.userRole === 'PM') {
        const propertyId = user.propertyId;
        tempHotels = propertiesData.filter(
          (property) => property.id === propertyId
        );
        tempBrands = [tempHotels[0]?.brand];
        const defaultData = await fetch(
          `${API_URL}/feedbacks/?date=1W&propertyId=${propertyId}`
        );
        const jsonData = await defaultData.json();
        setCommonData({
          hotels: tempHotels,
          categories: categoriesData,
          brands: tempBrands,
          feedbackList: jsonData?.feedbackList || [],
          feedbackListAIResponse: jsonData?.feedbackListAIResponse || null,
        });
      } else {
        const defaultData = await fetch(`${API_URL}/feedbacks/?date=1W`);
        const jsonData = await defaultData.json();
        setCommonData({
          hotels: propertiesData,
          categories: categoriesData,
          brands: brandsData,
          feedbackList: jsonData?.feedbackList || [],
          feedbackListAIResponse: jsonData?.feedbackListAIResponse || null,
        });
      }
      setLoader(false);
    } catch (e) {
      console.log('this is the error', e);
      setLoader(false);
      alert('Error while fetching data');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const setData = (newData) => {
    setCommonData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  return (
    <DataContext.Provider value={{commonData, setData}}>
      {loader && <PageLoader></PageLoader>}
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
