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
    name: "Gestor de Recebíveis",
    route: "/recebiveis",
    icon: "cil-dollar",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Recebíveis",
        to: "/recebiveis",
        // icon: "cil-dollar",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Cadastro Nota Fiscal",
        to: "/recebiveis/notafiscal",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Relação dos Recebíveis",
        to: "/recebiveis/relacao",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Relação Recebíveis antec.",
        to: "/recebiveis/antecipacao",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Gestor de Contas a Pagar",
    route: "/contas",
    icon: "cil-calculator",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Cadastro de Nota Fiscal",
        to: "/contas/notafiscal",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Contas a pagar",
        to: "/contas/pagar",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Cadastro de Domício Bancário",
        to: "/contas/domicio",
        icon: "cil-bank",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Cadastro de Fornecedores",
        to: "/contas/fornecedores",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Gestor de Carteira",
    route: "/carteira",
    icon: "cil-wallet",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Carteira",
        to: "/carteira",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Detalhamento da carteira",
        to: "/carteira/detalhamento",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Investidor",
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

  // DAQUI PRA BAIXO SÃO EXEMPLOS DO QUE POSSO USAR NO PROJETO
  // {
  //   _tag: "CSidebarNavTitle",
  //   _children: ["EXEMPLOS"],
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Colors",
  //   to: "/theme/colors",
  //   icon: "cil-pencil",
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Typograph",
  //   to: "/theme/typography",
  //   icon: "cil-pencil",
  // },
  // {
  //   _tag: "CSidebarNavDropdown",
  //   name: "Base",
  //   route: "/base",
  //   icon: "cil-puzzle",
  //   _children: [
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Breadcrumb",
  //       to: "/base/breadcrumbs",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Cards",
  //       to: "/base/cards",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Carousel",
  //       to: "/base/carousels",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Collapse",
  //       to: "/base/collapses",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Forms",
  //       to: "/base/forms",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Jumbotron",
  //       to: "/base/jumbotrons",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "List group",
  //       to: "/base/list-groups",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Navs",
  //       to: "/base/navs",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Navbars",
  //       to: "/base/navbars",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Pagination",
  //       to: "/base/paginations",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Popovers",
  //       to: "/base/popovers",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Progress",
  //       to: "/base/progress-bar",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Switches",
  //       to: "/base/switches",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Tables",
  //       to: "/base/tables",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Tabs",
  //       to: "/base/tabs",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Tooltips",
  //       to: "/base/tooltips",
  //     },
  //   ],
  // },
  // {
  //   _tag: "CSidebarNavDropdown",
  //   name: "Buttons",
  //   route: "/buttons",
  //   icon: "cil-cursor",
  //   _children: [
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Buttons",
  //       to: "/buttons/buttons",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Brand buttons",
  //       to: "/buttons/brand-buttons",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Buttons groups",
  //       to: "/buttons/button-groups",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Dropdowns",
  //       to: "/buttons/button-dropdowns",
  //     },
  //   ],
  // },
  {
    _tag: "CSidebarNavItem",
    name: "Charts",
    to: "/charts",
    icon: "cil-chart-pie",
  },
  // {
  //   _tag: "CSidebarNavDropdown",
  //   name: "Icons",
  //   route: "/icons",
  //   icon: "cil-star",
  //   _children: [
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "CoreUI Free",
  //       to: "/icons/coreui-icons",
  //       badge: {
  //         color: "success",
  //         text: "NEW",
  //       },
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "CoreUI Flags",
  //       to: "/icons/flags",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "CoreUI Brands",
  //       to: "/icons/brands",
  //     },
  //   ],
  // },
  // {
  //   _tag: "CSidebarNavDropdown",
  //   name: "Notifications",
  //   route: "/notifications",
  //   icon: "cil-bell",
  //   _children: [
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Alerts",
  //       to: "/notifications/alerts",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Badges",
  //       to: "/notifications/badges",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Modal",
  //       to: "/notifications/modals",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Toaster",
  //       to: "/notifications/toaster",
  //     },
  //   ],
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Widgets",
  //   to: "/widgets",
  //   icon: "cil-calculator",
  //   badge: {
  //     color: "info",
  //     text: "NEW",
  //   },
  // },
  // {
  //   _tag: "CSidebarNavDivider",
  // },
  // {
  //   _tag: "CSidebarNavTitle",
  //   _children: ["Extras"],
  // },
  // {
  //   _tag: "CSidebarNavDropdown",
  //   name: "Pages",
  //   route: "/pages",
  //   icon: "cil-star",
  //   _children: [
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Login",
  //       to: "/login",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Register",
  //       to: "/register",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Error 404",
  //       to: "/404",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Error 500",
  //       to: "/500",
  //     },
  //   ],
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Disabled",
  //   icon: "cil-ban",
  //   badge: {
  //     color: "secondary",
  //     text: "NEW",
  //   },
  //   addLinkClass: "c-disabled",
  //   disabled: true,
  // },
  // {
  //   _tag: "CSidebarNavDivider",
  //   className: "m-2",
  // },
  // {
  //   _tag: "CSidebarNavTitle",
  //   _children: ["Labels"],
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Label danger",
  //   to: "",
  //   icon: {
  //     name: "cil-star",
  //     className: "text-danger",
  //   },
  //   label: true,
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Label info",
  //   to: "",
  //   icon: {
  //     name: "cil-star",
  //     className: "text-info",
  //   },
  //   label: true,
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Label warning",
  //   to: "",
  //   icon: {
  //     name: "cil-star",
  //     className: "text-warning",
  //   },
  //   label: true,
  // },
  // {
  //   _tag: "CSidebarNavDivider",
  //   className: "m-2",
  // },
];

export default _nav;
