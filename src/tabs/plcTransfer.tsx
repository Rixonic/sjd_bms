
//import { useData } from "../context";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
function PlcTransfer() {
  //const { data } = useData();
  //console.log(data.ALARM_DB?.length);
  return (
    <div className="h-fit w-fit">
      <Card className="py-4 h-full">
        <CardHeader className="pb-0 pt-2 px-4 flex-row justify-center gap-2">
          <h3 className="font-bold text-large text-center">
            Trabajando
          </h3>

        </CardHeader>
        <CardBody className="overflow-visible py-2 items-center">
        <h3 className="font-bold text-large text-center">
            En Desarrollo
          </h3>
        </CardBody>
      </Card>
    </div>
  );
}

export default PlcTransfer;
