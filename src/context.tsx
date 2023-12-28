import React, { useContext, useState, useEffect, ReactNode } from "react";

const DataContext = React.createContext({});

interface DataProviderProps {
  children: ReactNode;
}

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }: DataProviderProps) {
  const [data, setData] = useState({});
  const [isConnected, setIsConnected] = useState(false);

  const connectWebSocket = () => {
    const socket = new WebSocket('ws://10.0.2.57:1880/ingenieria');

    socket.addEventListener('open', (event) => {
      console.log('Conexión establecida:', event);
      setIsConnected(true);
    });

    socket.addEventListener('message', (event) => {
      // console.log('Mensaje recibido:', event.data);
      setData(JSON.parse(event.data));
    });

    socket.addEventListener('error', (event) => {
      console.error('Error de conexión:', event);
      setIsConnected(false);
    });

    socket.addEventListener('close', (event) => {
      console.log('Conexión cerrada:', event);
      setIsConnected(false);
      // Intentar reconectar después de un breve intervalo (por ejemplo, 3 segundos)
      setTimeout(connectWebSocket, 3000);
    });

    return () => {
      socket.close();
    };
  };

  useEffect(() => {
    connectWebSocket();
  }, []); // Se ejecuta solo en el montaje inicial

  const value = {
    data,
    isConnected,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
