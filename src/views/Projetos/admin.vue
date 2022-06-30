<template>
  <main class="flex-col ">
        <div class="flex flex-col items-center w-full mx-auto px-6 py-8 gap-1">
          <h1 class="text-4xl font-black text-black"> Administrador: Projetos</h1>
          <icon-button @click="createProject()"
            path="M22.5 34H25.5V25.5H34V22.5H25.5V14H22.5V22.5H14V25.5H22.5ZM9 42Q7.8 42 6.9 41.1Q6 40.2 6 39V9Q6 7.8 6.9 6.9Q7.8 6 9 6H39Q40.2 6 41.1 6.9Q42 7.8 42 9V39Q42 40.2 41.1 41.1Q40.2 42 39 42ZM9 39H39Q39 39 39 39Q39 39 39 39V9Q39 9 39 9Q39 9 39 9H9Q9 9 9 9Q9 9 9 9V39Q9 39 9 39Q9 39 9 39ZM9 39Q9 39 9 39Q9 39 9 39V9Q9 9 9 9Q9 9 9 9Q9 9 9 9Q9 9 9 9V39Q9 39 9 39Q9 39 9 39Z"
          />
          <card v-for="c in state.cards"
          @list="getProject()"
          :key="c.id"
          :title="c.titulo"
          :img="c.urlImagem"
          :resume="c.descricao"
          :details="c.authorName"
          :text="c.texto"
          :id="c.id"
          :manual="c.manual"
          resumeON="true"
          @ProjectUpdate="updateProject($event)"
          @projectCreateStage="createStage($event)"
          @ProjectUpdateStage="updateStage($event)"
          @ProjectDelete="deleteProject($event)"
          />
        </div>
  </main>
</template>

<script>
import card from '../../components/Card/projectUpdate.vue'
import { reactive } from 'vue'
import services from '../../services'
import useModal from './../../hooks/useModal'
import IconButton from '../../components/Button/iconButton.vue'

export default {
  components: { card, IconButton },

  setup () {
    const payload = {}
    const modal = useModal()
    const cards = []
    const state = reactive({
      cards,
      payload
    })

    async function getProject () {
      const { data, errors } = await services.proj.getProjects()
      if (!errors) {
        this.state.cards = data
      } else {
        console.log(errors)
      }
    }

    function createStage () {
      modal.open({
        component: 'ModalCreateStegeProject',
        status: true
      })
    }

    function updateStage (props) {
      modal.open({
        component: 'ModalUpdateStageProject',
        status: true,
        props: props
      })
    }

    function updateProject (props) {
      modal.open({
        component: 'ModalUpdateProject',
        status: true,
        props: props
      })
    }

    function createProject () {
      modal.open({
        component: 'ModalCreateProject',
        status: true
      })
    }

    function deleteProject (props) {
      modal.open({
        component: 'ModalCancel',
        status: true,
        props: props
      })
    }

    return {
      state,
      updateProject,
      deleteProject,
      createProject,
      createStage,
      updateStage,
      getProject
    }
  },

  mounted () {
    this.getProject()
  }
}
</script>
