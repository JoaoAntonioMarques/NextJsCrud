"use client";
import React from "react";
import BreadCrumb from "@/app/components/bread-crumb";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const breadCrumb = [
  { title: "Home", url: "../" },
  { title: "Adicionar Jogador", url: "../add/" },
];

const AddJogador = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("teste", data);
      const res = await fetch("../api", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Falha ao adicionar Jogador");
      }

      const { message } = await res.json();
      alert(message);
      router.push("../");
    } catch (error) {
      console.log("Falha ao adicionar Jogador", error);
      alert("Falha ao adicionar Jogador");
    }
  };

  return (
    <div>
      <BreadCrumb lists={breadCrumb} />
      <div className="ml-4">
      <h4 className="mb-2">Criar Jogador</h4>
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
                  {...register("nome", { required: true })}
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
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AddJogador;
