import { useData } from "../context";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";
import React from "react";

const columns = [
  //{ name: "id", uid: "id"},
  { name: "TimeStamp", uid: "E3TimeStamp", sortable: true, width:100 },
  { name: "Source", uid: "Source", width:100},
  { name: "Message", uid: "Message", width:100 },
  { name: "Area", uid: "Area", width:100 },
];

function AlarmDB() {
  const { data } = useData();
  const [page, setPage] = React.useState(1);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "E3TimeStamp",
    direction: "ascending",
  });

  const sortedItems = React.useMemo(() => {
    return [...data.ALARM_DB].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, data.ALARM_DB]);

  const renderCell = React.useCallback(
    (
      alarms: { [x: string]: any; E3TimeStamp: string | number | Date },
      columnKey: string | number
    ) => {
      const cellValue = alarms[columnKey];

      switch (columnKey) {
        case "E3TimeStamp":
          const date = new Date(alarms.E3TimeStamp);
          const formattedDate = date.toLocaleDateString("es-ES", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          });
          const formattedHour = date.toLocaleTimeString("es-ES", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          });

          return (
            <div className="flex flex-col">
              <span>{formattedDate}</span>
              <span>{formattedHour}</span>
            </div>
          );
        case "Source":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
            </div>
          );

        default:
          return cellValue;
      }
    },
    []
  );

  const rowsPerPage = 10;

  const pages = Math.ceil(data.ALARM_DB?.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return sortedItems?.slice(start, end);
  }, [page, sortedItems]);
  //console.log(data.ALARM_DB?.length);
  return (
    <div className="h-fit w-full bg-red-500">
      {data.ALARM_DB && (
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
            base: "max-h-[520px] ",
            table: "min-h-[400px]",
          }}
          sortDescriptor={sortDescriptor}
          onSortChange={setSortDescriptor}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "Source" ? "center" : "start"}
                maxWidth ={column.width}
                allowsSorting={column.sortable}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody emptyContent={"No users found"} items={items}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default AlarmDB;
