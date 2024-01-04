// src/App.js
import { useData } from "../context";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
function Chiller() {
  const { data } = useData();
  //console.log(data.ALARM_DB?.length);
  return (
    <div className="h-fit w-fit">
      <Card className="py-4 h-full">
        <CardHeader className="pb-0 pt-2 px-4 flex-row justify-center gap-2">
          <h3 className="font-bold text-large text-center">
            Chiller - Resonancia
          </h3>
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
              d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
            />
          </svg>
        </CardHeader>
        <CardBody className="overflow-visible py-2 items-center">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <h4>Entrada:</h4>
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
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>

              <p>{data?.CHILLER?.temperatureIn} °C</p>
            </div>
            <div className="flex flex-col">
              <h4>Salida:</h4>
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
                  d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                />
              </svg>

              <p>{data?.CHILLER?.temperatureOut} °C</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Chiller;
