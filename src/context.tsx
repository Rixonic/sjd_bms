// context.tsx
import React, { useContext, useState, useEffect, ReactNode } from "react";

interface DataContextProps {
  data: {
    CHILLER?: {
      temperatureIn: number;
      temperatureOut: number;
    };
    ALARM_DB?: {
      
      Area      :       string
      E3TimeStamp      :      string
      FullAlarmSourceName      :      string
      InTime      :       string
      Message      :     string
      Source      : string
      id: number
   

  }[];
    T1?: {
      V?: {
        VIIab: number;
        VIIbc: number;
        VIIca: number;
      };
      C?: {
        Ia: number;
        Ib: number;
        Ic: number;
      };
      PF?: {
        PFTot: number;
      };
      kVa?: {
        kVaTot: number;
      };
    };
  };
  isConnected: boolean;
}

const DataContext = React.createContext<DataContextProps | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}

export function DataProvider({ children }: DataProviderProps) {
  const [data, setData] = useState<DataContextProps["data"]>({});
  const [isConnected, setIsConnected] = useState(false);

  const connectWebSocket = () => {
    const socket = new WebSocket('ws://frank4.com.ar:1880/frank');

    socket.addEventListener('open', (event) => {
      console.log('Conexión establecida:', event);
      setIsConnected(true);
    });

    socket.addEventListener('message', (event) => {
      //console.log('Mensaje recibido:', event.data);
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


  const value: DataContextProps = {
    data,
    isConnected,
  };

  return <DataContext.Provider value={value}>
    
    { children}</DataContext.Provider>;
}


/*
msg.payload = {
    CHILLER: {
      temperatureIn: 9.75,
      temperatureOut: 13.75,
    },
    T1: {
      V: {
            VIIab: 13177.49,
            VIIbc: 13226.53,
            VIIca: 13123.78,
      },
      C: {
          Ia: 21.29,
          Ib: 21.88,
          Ic: 22.11,
      },
      PF: {
          PFTot: -94.81,
      },
      kVa: {
          kVaTot: 484,
      }
    }
}

return msg;
*/