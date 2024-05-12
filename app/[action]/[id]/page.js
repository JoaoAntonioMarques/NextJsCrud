import AddJogador from "@/app/components/add-jogador";
import DeleteJogador from "@/app/components/delete-jogador";
import EditJogador from "@/app/components/edit-jogador";
import ViewJogador from "@/app/components/view-jogador";
import React from "react";

const ActionJogadorId = ({ params }) => {
  const { action, id } = params;
  switch (action) {
    case "add":
      return <AddJogador />;
    case "edit":
      return <EditJogador id={id} />;
    case "view":
      return <ViewJogador id={id} />;  
  }
};

export default ActionJogadorId;
