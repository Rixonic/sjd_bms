// src/App.js
import { useData } from "./context";
import { Chip, Divider } from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/react";
import SubEstacion from "./tabs/subEstacion";
import Chiller from "./tabs/chiller";
import PlcTransfer from "./tabs/plcTransfer";
import AlarmDB from "./tabs/alarmDB";
function App() {
  const {  isConnected } = useData();
  //console.log(data.ALARM_DB?.length);
  return (
    <div className="h-screen w-screen ">
      <header className="flex flex-row justify-between py-2 px-4">
        <div className="flex flex-row gap-2">
          <h1>INGENIERIA</h1>
          <Divider orientation="vertical" />
          <h2>HSJD</h2>
        </div>
        <Chip color={isConnected ? "success" : "danger"} variant="bordered">
          {isConnected ? "Online" : "Offline"}
        </Chip>
      </header>
      <div className="flex flex-col justify-evenly pt-8 h-max ">
        <Tabs aria-label="Options" className="self-center">
          <Tab key="photos" title="Sub-Estacion 1">
            <SubEstacion />
          </Tab>
          <Tab key="music" title="Chiller">
            <Chiller />
          </Tab>
          <Tab key="videos" title="PLC - Transferencia">
            <PlcTransfer />
          </Tab>
          <Tab key="ads" title="Alarmas Historial">
            <AlarmDB />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
