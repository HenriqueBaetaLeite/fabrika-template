import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  // {
  //   _tag: "CSidebarNavTitle",
  //   _children: ["MENU"],
  // },
  {
    _tag: "CSidebarNavItem",
    name: "Inicial",
    to: "/inicial",
    icon: "cil-home", //<CIcon name="cil-home" customClasses="c-sidebar-nav-icon" />,
    // badge: {
    //   color: "info",
    //   text: "NEW",
    // },
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Gestão de Recebíveis",
    route: "/recebiveis",
    icon: "cil-dollar",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Cadastrar recebível",
        to: "/recebiveis/cadastro",
        // icon: "cil-dollar",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Recebíveis cadastrados",
        to: "/recebiveis/cadastrados",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Recebíveis autorizados",
        to: "/recebiveis/autorizados",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Recebíveis antecipados",
        to: "/recebiveis/antecipacao",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Dashboard",
        to: "/recebiveis",
        // icon: "cil-dollar",
      },
      {
        _tag: "CSidebarNavItem",
        name: "teste tabela com botão",
        to: "/recebiveis/testes",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Gestão de Fornecedores",
    route: "/contas",
    icon: "cil-calculator",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Cadastrar Nota Fiscal",
        to: "/contas/notafiscal",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Notas fiscais cadastradas",
        to: "/contas/pagar",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Domicilio Bancário",
        to: "/contas/domicio",
        icon: "cil-bank",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Cadastro de Fornecedores",
        to: "/contas/fornecedores",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Dashboard",
        to: "/contas/fornecedores",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Gestão de investimentos",
    route: "/carteira",
    icon: "cil-wallet",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Investimentos disponíveis",
        to: "/carteira",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Investimentos ativos",
        to: "/carteira/detalhamento",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Dashboard",
        to: "/carteira/detalhamento",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Gestão de operadores",
    route: "/investidor",
    icon: "cil-pencil",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Investidor",
        to: "/investidor",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Investimentos realizados",
        to: "/investidor/realizados",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Investimentos em andamento",
        to: "/investidor/andamento",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Relatório dos fornecedores",
        to: "/investidor/fornecedores",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Gestão de investidores",
    route: "/investidor",
    icon: "cil-pencil",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Investidor",
        to: "/investidor",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Investimentos realizados",
        to: "/investidor/realizados",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Investimentos em andamento",
        to: "/investidor/andamento",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Relatório dos fornecedores",
        to: "/investidor/fornecedores",
      },
    ],
  },
];

export default _nav;
