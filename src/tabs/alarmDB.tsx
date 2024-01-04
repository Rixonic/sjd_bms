import { useData } from "../context";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue} from "@nextui-org/react";
import React from "react";

const columns = [
    //{name: "id", uid: "id"},
    {name: "TimeStamp", uid: "E3TimeStamp"},
    {name: "Source", uid: "Source"},
    {name: "Message", uid: "Message"},
    //{name: "InTime", uid: "InTime"},
    //{name: "FullAlarmSourceName", uid: "FullAlarmSourceName"},
    {name: "Area", uid: "Area"},
  ];

function AlarmDB() {
  const { data } = useData();
  const [page, setPage] = React.useState(1);


  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
        case "TimeStamp":
            const date = new Date(user.E3TimeStamp);
            const formattedDate = date.toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            });
          
            return <span>gay{formattedDate}</span>;
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
          </div>
        );

      default:
        return cellValue;
    }
  }, []);

  const rowsPerPage = 10;

  const pages = Math.ceil( 1 / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data.ALARM_DB.slice(start, end);
  }, [page, data.ALARM_DB]);
  //console.log(data.ALARM_DB?.length);
  return (
    <div className="h-fit w-fit">
    <Table 
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </div>
  );
}

export default AlarmDB;
