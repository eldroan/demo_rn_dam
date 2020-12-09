import Axios from 'axios';
import React, { useState, createContext } from 'react';

export const StoreContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState('');
  const [isFetchingTime, setIsFetchingTime] = useState(false);

  const providerProps = {
    counter: {
      value: counter,
      increment: () => setCounter(counter + 1),
      decrement: () => setCounter(counter - 1),
    },
    time: {
      value: time,
      isLoading: isFetchingTime,
      getTime: async () => {
        try {
          setIsFetchingTime(true);
          const response = await Axios.get('https://worldtimeapi.org/api/ip');
          setTime(response.data.datetime);
          setIsFetchingTime(false);
        } catch {
          // Algo salio mal
          setIsFetchingTime(false);
        }
      },
    },
  };
  return <StoreContext.Provider value={providerProps}>{children}</StoreContext.Provider>;
};
