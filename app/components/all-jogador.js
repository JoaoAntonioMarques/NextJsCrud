"use client";
import React, { useEffect, useState } from "react";
import DataTable from "@/app/components/dataTable";

const cols = ["ID", "NOME", "NACIONALIDADE", "RANKINGATUAL"];

const AllJogadors = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    async function getAllJogadors() {
      try {
        const res = await fetch("/api/");
        if (!res.ok) {
          throw new Error("Error fetching jogadors");
        }

        const { jogadors } = await res.json();
        setRows(jogadors);
      } catch (error) {
        console.log("Error fetching jogadors");
      }
    }
    getAllJogadors();
  }, []);
  return <DataTable cols={cols} rows={rows} />;
};

export default AllJogadors;
