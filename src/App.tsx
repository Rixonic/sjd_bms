// src/App.js
import { useData } from './context';
import { Chip, Card, CardHeader, CardBody, Divider } from '@nextui-org/react';
function App() {
  const { data, isConnected } = useData();

  return (
    <div className='h-screen w-screen'>
      <header className='flex flex-row justify-between py-2 px-4'>
        <div className='flex flex-row gap-2'>
          <h1>INGENIERIA</h1>
          <Divider orientation="vertical" />
          <h2>HSJD</h2>
        </div>
        <Chip color={isConnected ? "success" : "danger"} variant="bordered">{isConnected ? "Online" : "Offline"}</Chip>
      </header>
      <div className='flex flex-row justify-evenly pt-8'>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-row justify-center gap-2">
            <h3 className="font-bold text-large text-center">Chiller - Resonancia</h3>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 11a8 8 0 018-8h0a8 8 0 018 8h-2m-6 0a2 2 0 01-4 0" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h0a2 2 0 002 2h0a2 2 0 002-2h0a2 2 0 00-2-2h-2a2 2 0 00-2 2Z" />
              <path d="M12 18s-2-1-2-4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </CardHeader>
          <CardBody className="overflow-visible py-2 items-center">
            <div className='flex flex-row'>
              <div className='flex flex-col'>
                <h4>Entrada:</h4>
                <p>{data?.CHILLER?.temperatureIn}</p>
              </div>
              <div className='flex flex-col'>
                <h4>Salida:</h4>
                <p>{data?.CHILLER?.temperatureOut}</p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-row justify-center gap-2">
            <h4 className="font-bold text-large">Sub-Estacion 1</h4>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
          </CardHeader>
          <CardBody className="overflow-visible py-2 items-center">
            <div className='flex flex-col gap-4'>
              <div className='flex flex-row gap-2 justify-evenly'>
                <div className='flex flex-col items-center'>
                  <h4>VII ab</h4>
                  <p>{data?.T1?.V?.VIIab} V</p>
                </div>
                <div className='flex flex-col items-center'>
                  <h4>VII bc</h4>
                  <p>{data?.T1?.V?.VIIbc} V</p>
                </div>
                <div className='flex flex-col items-center'>
                  <h4>VII ca</h4>
                  <p>{data?.T1?.V?.VIIca} V</p>
                </div>
              </div>
              <div className='flex flex-row gap-2 justify-evenly'>
                <div className='flex flex-col items-center'>
                  <h4>Ia:</h4>
                  <p>{data?.T1?.C?.Ia} A</p>
                </div>
                <div className='flex flex-col items-center'>
                  <h4>Ib:</h4>
                  <p>{data?.T1?.C?.Ib} A</p>
                </div>
                <div className='flex flex-col items-center'>
                  <h4>Ic:</h4>
                  <p>{data?.T1?.C?.Ic} A</p>
                </div>
              </div>
              <div className='flex flex-row gap-2 justify-evenly'>
                <div className='flex flex-col items-center'>
                  <h4>PF Total</h4>
                  <p>{data?.T1?.PF?.PFTot} %</p>
                </div>
                <div className='flex flex-col items-center'>
                  <h4>kVa Total</h4>
                  <p>{data?.T1?.kVa?.kVaTot} kVA</p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>


    </div>
  );
}

export default App;
