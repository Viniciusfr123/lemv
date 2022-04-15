import { createRouter, createWebHistory } from 'vue-router'

const Inicio = () => import('../views/Inicio/index.vue')
const Noticias = () => import('../views/Noticias/index.vue')
const NoticiaSinglePage = () => import('../views/Noticias/singlePage')
const Projetos = () => import('../views/Projetos/index.vue')
const Contato = () => import('../views/Contato/index.vue')
const SobreNos = () => import('../views/SobreNos/index.vue')
const Administrador = () => import('../views/Administrador/index.vue')
const ProjetoSinglePage = () => import('../views/Projetos/singlePage')
const AdministradorNoticias = () => import('../views/Noticias/admin.vue')
const AdministradorInicio = () => import('../views/Inicio/admin.vue')
const AdministradorProjetos = () => import('../views/Projetos/admin.vue')
const AdministradorAcervo = () => import('../views/Acervo/admin.vue')
const AdministradorSobreNos = () => import('../views/SobreNos/admin.vue')
const AdministradorContato = () => import('../views/Contato/admin.vue')

const routes = [
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
    path: '/sobrenos',
    name: 'SobreNos',
    component: SobreNos
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
    path: '/administrador/sobrenos',
    name: 'AdministradorSobreNos',
    component: AdministradorSobreNos
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
    path: '/:pathMatch(.*)',
    redirect: { name: 'Inicio' }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router