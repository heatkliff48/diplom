import React, { createContext, useContext, useState} from 'react';

const coordinateContext = createContext();
const CoordinateContextProvider = ({ children }) => {
  const [coordinat, setCoordinat] = useState([]);
  return (
    <coordinateContext.Provider
      value={{
        coordinat,
        setCoordinat,
      }}
    >
      {children}
    </coordinateContext.Provider>
  );
};
export default CoordinateContextProvider;

const useCoordinateContex = () => useContext(coordinateContext);

export { useCoordinateContex };
