// src/App.js
import { useData } from "../context";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
function SubEstacion() {
  const { data } = useData();
  //console.log(data.ALARM_DB?.length);
  return (
    <div className="h-fit w-fit">
   

        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-row justify-center gap-2">
            <h4 className="font-bold text-large">Sub-Estacion 1</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
          </CardHeader>
          <CardBody className="overflow-visible py-2 items-center flex-row">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 justify-evenly">
                <h3>VII</h3>
                <div className="flex flex-col gap-0">
                  <div className="flex flex-row items-center">
                    <h4>VII ab</h4>
                    <p>{data?.T1?.V?.VIIab} V</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <h4>VII bc</h4>
                    <p>{data?.T1?.V?.VIIbc} V</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <h4>VII ca</h4>
                    <p>{data?.T1?.V?.VIIca} V</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-evenly">
                <h3>Corrientes</h3>
                <div className="flex flex-col gap-0">
                  <div className="flex flex-row items-center">
                    <h4>Ia:</h4>
                    <p>{data?.T1?.C?.Ia} A</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <h4>Ib:</h4>
                    <p>{data?.T1?.C?.Ib} A</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <h4>Ic:</h4>
                    <p>{data?.T1?.C?.Ic} A</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 justify-evenly">
                <div className="flex flex-col items-center">
                  <h4>FP Total</h4>
                  <p>{data?.T1?.PF?.PFTot} %</p>
                </div>
                <div className="flex flex-col items-center">
                  <h4>kVa Total</h4>
                  <p>{data?.T1?.kVa?.kVaTot} kVA</p>
                </div>
              </div>
            </div>
            <div>
              <h6>Inserte grafico</h6>
            </div>
          </CardBody>
        </Card>

    </div>
  );
}

export default SubEstacion;
