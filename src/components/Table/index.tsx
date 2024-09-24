import { MouseEvent, useState } from "react";
import { EllipsisVerticalIcon } from "../icons/EllipsisVerticalIcon";
import { TableDropdown } from "./Dropdown";
import { TableProps } from "./types";

export const Table = ({
  columns,
  data,
  title,
  onUpdateRow,
  onDeleteRow,
}: TableProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [id, setId] = useState("");

  const handleDeleteRow = (e: MouseEvent<any>) => {
    onDeleteRow?.(id);
    setDropdownOpen(false);
  };

  const handleUpdateRow = (e: MouseEvent<any>) => {
    onUpdateRow?.(id);
    setDropdownOpen(false);
  };

  const tableOptions = [
    { label: "Edit", onClick: handleUpdateRow },
    {
      label: "Delete",
      onClick: handleDeleteRow,
      className: "text-red-600"
    }
  ];

  return (
    <div className="w-full rounded-lg flex flex-col gap-2">
      <h3 className="text-lg font-bold">{title}</h3>
      <table className="w-full table-auto rounded-xl overflow-hidden">
        <thead className="text-gray-500 font-light rounded-xl border-b">
          <tr className="">
            {columns.map((e, key) => (
              <th key={key} className="font-normal py-2">
                {e.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="w-full">
          {data &&
            data.length > 0 &&
            data.map((e, key) => (
              <tr
                key={key}
                data-id={e.id}
                className="text-center hover:bg-gray-50 border-b border-b-gray-100"
              >
                {columns.map((c, i) => {
                  let value = e[c];

                  switch (c) {
                    case "date":
                      value = e[c].toLocaleDateString("pt-BR");
                      break;
                    case "operation":
                      value = e[c].toUpperCase();
                      break;
                    case "value":
                      value = e[c].toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      });
                  }

                  return (
                    <td key={c + i} className="py-3">
                      {value}
                    </td>
                  );
                })}
                <td
                  onClick={(e) => {
                    setDropdownOpen(!isDropdownOpen);
                    setId(e.currentTarget.closest("tr")?.dataset.id!);
                  }}
                >
                  <EllipsisVerticalIcon className="text-gray-600" />
                </td>
              </tr>
            ))}
          {data.length == 0 && (
            <tr className="py-3 w-full text-center">
              <td className="py-6" colSpan={columns.length}>
                <h3>No history data</h3>
              </td>
            </tr>
          )}
          <TableDropdown
            isOpen={isDropdownOpen}
            title="Actions"
            options={tableOptions}
          />
        </tbody>
      </table>
    </div>
  );
};
