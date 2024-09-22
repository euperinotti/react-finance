import { TableProps } from "./types";

export const Table = ({ columns, data, title }: TableProps) => {
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
                className="text-center hover:bg-gray-50 border-b border-b-gray-100"
              >
                {columns.map((c, i) => {
                  let value = e[c];

                  switch(c) {
                    case "date":
                      value = e[c].toLocaleDateString("pt-BR");
                      break;
                    case "operation":
                      value = e[c].toUpperCase();
                      break;
                    case "value":
                      value = e[c]
                  }

                  return (
                    <td key={c + i} className="py-3">
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          {data.length == 0 && (
            <tr className="py-3 w-full text-center">
              <td className="py-6" colSpan={columns.length}>
                <h3>No history data</h3>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
