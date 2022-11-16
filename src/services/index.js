import axios from 'axios'
import AuthService from './auth'
import NewsService from './news'
import ProjectsService from './projects'
import PaperService from './paper'
import MaterialService from './material'
import BookService from './book'
import FileService from './file'
import SkillService from './skill'
import ArtifactService from './artifact'

const API_ENVS = {
  prod: '',
  dev: '',
  // local: 'https://d5708c2a-fa58-4989-9902-2a6bb6c99f58.mock.pstmn.io'
  local: 'http://localhost:8000/api'

}

const httpClient = axios.create({
  baseURL: API_ENVS.local
})

httpClient.interceptors.response.use((response) => {
  return response
}, (error) => {
  const canThrowAnError = error.request.status === 0 ||
    error.request.status === 500

  if (canThrowAnError) {
    throw new Error(error.message)
  }

  return error
})

export default {
  auth: AuthService(httpClient),
  news: NewsService(httpClient),
  proj: ProjectsService(httpClient),
  paper: PaperService(httpClient),
  material: MaterialService(httpClient),
  book: BookService(httpClient),
  file: FileService(httpClient),
  skill: SkillService(httpClient),
  art: ArtifactService(httpClient)
}
