import Link from "next/link";
import React from "react";

const DataTable = ({ cols = [], rows = [] }) => {
  const handlerDelete = async (id) => {
    if (confirm("Realmente deseja excluir o jogador?")) {
      try {
        const res = await fetch(`../api/${id}`, {
          method: "DELETE",
        });
        if (!res.ok) {
          throw new Error("Erro ao excluir");
        }

        const { message } = await res.json();
        alert(message);
      } catch (error) {
        alert("Error deleting");
      }
    }
  };

  return (
    <table className="table">
      <thead>
        <tr className="table-primary">
          {cols.map((th, i) => (
            <th key={i}>{th}</th>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {rows.map((tr, i) => (
          <tr key={i}>
            <td>{tr?._id}</td>
            <td>{tr?.nome}</td>
            <td>{tr?.nacionalidade.substring(0, 40).concat("...")}</td>
            <td>{tr?.rankingatual}</td>
            <td>
              <div className="d-flex gap-1">
                <Link
                  className="btn btn-info btn-sm"
                  href={`../view/${tr?._id}`}
                >
                  Visualizar
                </Link>
                <Link
                  className="btn btn-warning btn-sm"
                  href={`../edit/${tr?._id}`}
                >
                  Editar
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handlerDelete(tr?._id)}
                >
                  Excluir
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
