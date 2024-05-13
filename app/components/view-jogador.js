"use client";
import React, { useState, useEffect } from "react";
import BreadCrumb from "@/app/components/bread-crumb";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const breadCrumb = [
  { title: "Home", url: "../" },
  { title: "Jogador", url: "../view/" },
];

const ViewJogador = ({ id }) => {
  const { register } = useForm({
    defaultValues: async () => {
      const { jogador } = await getJogador(id);
      return jogador;
    },
  });

  const getJogador = async (id) => {
    try {
      const res = await fetch(`../api/${id}`);
      if (!res.ok) {
        throw new Error("Falha ao obter jogador");
      }

      return await res.json();
    } catch (error) {
      alert("Falha ao obter jogador");
    }
  };

  return (
    <div>
      <BreadCrumb lists={breadCrumb} />
      <div className="ml-4">
      <h4 className="mb-2">Jogador</h4>
      <div className="mb-2">
        <div className="row">
          <div className="col-md-6">
            <form method="POST">
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">
                  Nome
                </label>
                <input
                  className="form-control"
                  {...register("nome", {
                    disabled: true,
                  })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="nacionalidade" className="form-label">
                  Nacionalidade
                </label>
                <textarea
                  className="form-control"
                  {...register("nacionalidade", { disabled: true })}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="rankingatual" className="form-label">
                  Ranking
                </label>
                <input
                  className="form-control"
                  {...register("rankingatual", { disabled: true })}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ViewJogador;
