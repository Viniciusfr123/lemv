import { createRouter, createWebHistory } from 'vue-router'

const Inicio = () => import('../views/Inicio/index.vue')
const Noticias = () => import('../views/Noticias/index.vue')
const NoticiaSinglePage = () => import('../views/Noticias/singlePage')
const Projetos = () => import('../views/Projetos/index.vue')
const Contato = () => import('../views/Contato/index.vue')
const Acervo = () => import('../views/Acervo/index.vue')
const AcervoSinglePage = () => import('../views/Acervo/singlePage.vue')
const AdministradorAcervo = () => import('../views/Acervo/admin.vue')
const AcervoCreatePage = () => import('../views/Acervo/create.vue')
const AcervoUpdatePage = () => import('../views/Acervo/update.vue')
const Administrador = () => import('../views/Administrador/index.vue')
const ProjetoSinglePage = () => import('../views/Projetos/singlePage')
const AdministradorNoticias = () => import('../views/Noticias/admin.vue')
const AdministradorInicio = () => import('../views/Inicio/admin.vue')
const AdministradorProjetos = () => import('../views/Projetos/admin.vue')
const AdministradorContato = () => import('../views/Contato/admin.vue')
const ProjetoCreatePage = () => import('../views/Projetos/create.vue')
const ProjetoUpdatePage = () => import('../views/Projetos/update.vue')
const NoticiasCreatePage = () => import('../views/Noticias/create.vue')
const NoticiasUpdatePage = () => import('../views/Noticias/update.vue')
const CompetencePage = () => import('../views/Competencias/index.vue')
const AdministradorCompetencias = () => import('../views/Competencias/admin.vue')
const CompetenciasCreatePage = () => import('../views/Competencias/create.vue')
const CompetenciasUpdatePage = () => import('../views/Competencias/update.vue')
const Calendario = () => import('../views/calendario/index')

const routes = [
  {
    path: '/calendario',
    name: 'Calendario',
    component: Calendario
  },
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/noticias',
    name: 'Noticias',
    component: Noticias
  },
  {
    path: '/noticias/create',
    name: 'NoticiasCreatePage',
    component: NoticiasCreatePage
  },
  {
    path: '/noticias/update/:id',
    name: 'NoticiasUpdatePage',
    component: NoticiasUpdatePage
  },
  {
    path: '/noticias/singlepage/:id',
    name: 'NoticiaSinglePage',
    component: NoticiaSinglePage
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: Projetos
  },
  {
    path: '/projetos/create/',
    name: 'ProjetoCreatePage',
    component: ProjetoCreatePage
  },
  {
    path: '/projetos/update/:id',
    name: 'ProjetoUpdatePage',
    component: ProjetoUpdatePage
  },
  {
    path: '/projetos/singlepage/:id',
    name: 'ProjetoSinglePage',
    component: ProjetoSinglePage
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato
  },
  {
    path: '/acervo',
    name: 'Acervo',
    component: Acervo
  },
  {
    path: '/acervo/singlepage/:id',
    name: 'AcervoSinglePage',
    component: AcervoSinglePage
  },
  {
    path: '/acervo/create',
    name: 'AcervoCreatePage',
    component: AcervoCreatePage
  },
  {
    path: '/acervo/update/:id',
    name: 'AcervoUpdatePage',
    component: AcervoUpdatePage
  },
  {
    path: '/administrador',
    name: 'Administrador',
    component: Administrador
  },
  {
    path: '/administrador/noticias',
    name: 'AdministradorNoticias',
    component: AdministradorNoticias
  },
  {
    path: '/administrador/inicio',
    name: 'AdministradorInicio',
    component: AdministradorInicio
  },
  {
    path: '/administrador/projeto',
    name: 'AdministradorProjetos',
    component: AdministradorProjetos
  },
  {
    path: '/administrador/acervo',
    name: 'AdministradorAcervo',
    component: AdministradorAcervo
  },
  {
    path: '/administrador/contato',
    name: 'AdministradorContato',
    component: AdministradorContato
  },
  {
    path: '/competencias',
    name: 'CompetencePage',
    component: CompetencePage
  },
  {
    path: '/administrador/competencias',
    name: 'AdministradorCompetencias',
    component: AdministradorCompetencias
  },
  {
    path: '/competencias/update/:id',
    name: 'CompetenciasUpdatePage',
    component: CompetenciasUpdatePage
  },
  {
    path: '/competencias/create',
    name: 'CompetenciasCreatePage',
    component: CompetenciasCreatePage
  },
  {
    path: '/:pathMatch(.*)',
    redirect: { name: 'Inicio' }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
