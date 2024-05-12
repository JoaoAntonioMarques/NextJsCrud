"use client";
import React from "react";
import BreadCrumb from "@/app/components/bread-crumb";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const breadCrumb = [
  { title: "Home", url: "../" },
  { title: "Add New Jogador", url: "../add/" },
];

const AddJogador = () => {
  const router = useRouter();

  console.log("testeAAA");

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
        throw new Error("Failed to add Jogador");
      }

      const { message } = await res.json();
      alert(message);
      router.push("../");
    } catch (error) {
      console.log("Failed to add Jogador", error);
      alert("Failed to add Jogador");
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
                <textarea
                  className="form-control"
                  {...register("nacionalidade", { required: true })}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="rankingatual" className="form-label">
                  Rankingg
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
