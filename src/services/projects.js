
export default httpClient => ({
  getProjects: async () => {
    const response = await httpClient.get('/project')
    let errors = null

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      errors
    }
  },
  getSingle: async (id) => {
    const response = await httpClient.get('/project/' + id)
    let errors = null

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      errors
    }
  }
})
