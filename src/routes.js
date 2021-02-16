import React from 'react';
import { exact } from 'prop-types';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));

// PRIMEIRA ROTA CUSTOMIZADA
const Inicial = React.lazy(() => import('./views/inicial/Inicial'));

const Testes = React.lazy(() => import('./views/recebiveis/relacao/RelacaoRecebiveis'));

const Recebiveis = React.lazy(() => import('./views/recebiveis/gestor/Recebiveis'));
const CadastroRecebivel = React.lazy(() => import('./views/recebiveis/cadastro/CadastrarRecebivel'));
const RecebiveisCadastrados = React.lazy(() => import('./views/recebiveis/cadastrados/RecebiveisCadastrados'));
const RecebiveisAutorizados = React.lazy(() => import('./views/recebiveis/autorizados/RecebiveisAutorizados'));
const RelacaoRecebiveis = React.lazy(() => import('./views/recebiveis/relacao/RelacaoRecebiveis'));
const RelacaoAntecipacao = React.lazy(() => import ('./views/recebiveis/antecipacao/RelacaoAntecipacao'));

const ContasPagar = React.lazy(() => import('./views/contas/contas-pagar/ContasPagar'));
const CadNotaFiscal = React.lazy(() => import('./views/contas/nota_fiscal/NotaFiscal'));
const Domicio = React.lazy(() => import('./views/contas/domicio-bancario/Domicio'));
const Fornecedores = React.lazy(() => import('./views/contas/fornecedores/Fornecedores'));

const Detalhamento = React.lazy(() => import('./views/carteira/detalhamento/Detalhamento'));
const Carteira = React.lazy(() => import('./views/carteira/gestor/Carteira'));

const Investidor = React.lazy(() => import('./views/investidor/gestor/Investidor'));
const InvestRealizado = React.lazy(() => import('./views/investidor/realizados/InvestRealizado'));
const InvestAndamento = React.lazy(() => import('./views/investidor/andamento/InvestAndamento'));
const RelatFornecedores = React.lazy(() => import('./views/investidor/fornecedores/RelatFornecedores'));

const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const routes = [
  { path: '/', exact: true, name: 'Home' },

  { path: '/inicial', name: 'Inicial', component: Inicial },

  { path: '/recebiveis/testes', name:'Testes', component: Testes },

  { path: '/recebiveis', name:'Recebiveis', component: Recebiveis, exact: true },
  { path: '/recebiveis/cadastro', name: 'Cadastrar Recebível', component: CadastroRecebivel },
  { path: '/recebiveis/cadastrados', name: 'Recebíveis Cadastrados', component: RecebiveisCadastrados },
  { path: '/recebiveis/autorizados', name: 'Recebíveis autorizados', component: RecebiveisAutorizados },

  { path: '/recebiveis/relacao', name: 'Relação Recebíveis', component: RelacaoRecebiveis },
  { path: '/recebiveis/antecipacao', name: 'Relação Antecipação', component: RelacaoAntecipacao },

  { path: '/contas/pagar', name: 'Contas a Pagar', component: ContasPagar },
  { path: '/contas/notafiscal', name: 'Cadastro de Nota Fiscal', component: CadNotaFiscal },
  { path: '/contas/domicio', name: 'Cadastro de Domício Bancário', component: Domicio },
  { path: '/contas/fornecedores', name: 'Cadastro de Fornecedores', component: Fornecedores },

  { path: '/carteira', name: 'Gestor de Carteira', component: Carteira, exact: true },
  { path: '/carteira/detalhamento', name: 'Detalhamento da Carteira', component: Detalhamento },

  { path: '/investidor', name: 'Investidor', component: Investidor, exact: true },
  { path: '/investidor/realizados', name: 'Investimentos Realizados', component: InvestRealizado },
  { path: '/investidor/andamento', name: 'Investimentos em Andamento', component: InvestAndamento },
  { path: '/investidor/fornecedores', name: 'Relatórios de Fornecedores', component: RelatFornecedores },

  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
