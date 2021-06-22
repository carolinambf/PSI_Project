import React from "react";
import * as FcIcons from "react-icons/fc";

export const SideBarData = [
  {
    title: "Página Inicial",
    path: "/",
    icon: <FcIcons.FcHome />,
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
    title: "Créditos",
    path: "/creditos",
    icon: <FcIcons.FcAssistant />,
  },

  {
    title: "Login",
    path: "/login",
    icon: <FcIcons.FcDecision />,
  },
  {
    title: "Registar",
    path: "/register",
    icon: <FcIcons.FcUpRight/>,
  },
];
