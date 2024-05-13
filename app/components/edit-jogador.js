"use client";
import React, { useState, useEffect } from "react";
import BreadCrumb from "@/app/components/bread-crumb";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const breadCrumb = [
  { nome: "Home", url: "../" },
  { nome: "Editar Jogador", url: "../edit/" },
];

const EditJogador = ({ id }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      const { jogador } = await getJogador(id);
      return jogador;
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`../api/${id}/`, {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Falha ao atualizar o jogador");
      }

      const { message } = await res.json();
      alert(message);
      router.push("../");
    } catch (error) {
      console.log("Falha ao atualizar o jogador", error);
      alert("Falha ao atualizar o jogador");
    }
  };

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
      <h4 className="mb-2">Edit Jogador</h4>
      <div className="mb-2">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)} method="POST">
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">
                  Nome
                </label>
                <input
                  className="form-control"
                  {...register("nome", {
                    required: true,
                  })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="nacionalidade" className="form-label">
                  Nacionalidade
                </label>
                <input
                  className="form-control"
                  {...register("nacionalidade", { required: true })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="rankingatual" className="form-label">
                  Ranking
                </label>
                <input
                  className="form-control"
                  {...register("rankingatual", { required: true })}
                />
              </div>
              <div className="mb-3 text-end">
                <input type="submit" className="btn btn-primary" />
              </div>

              {errors.exampleRequired && <span>This field is required</span>}
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default EditJogador;
