import React from "react";
import * as FcIcons from "react-icons/fc";

export const SideBarData = [
  {
    title: "Página Inicial",
    path: "/",
    icon: <FcIcons.FcHome />,
  },
  {
    title: "Insira a sua História",
    path: "/inserthistory",
    icon: <FcIcons.FcDocument />,
  },
  {
    title: "Sobre Nós",
    path: "/aboutus",
    icon: <FcIcons.FcInfo />,
  },
  {
    title: "Contactos",
    path: "/contactos",
    icon: <FcIcons.FcContacts />,
  },

  {
    title: "Login",
    path: "/login",
    icon: <FcIcons.FcDecision />,
  },
  {
    title: "Registar",
    path: "/register",
    icon: <FcIcons.FcUpRight />,
  },
];
