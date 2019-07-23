import ajax from '@/assets/scripts'
export const mutations = {

}

export const actions = {
  async getArticles({ state, commit }, param) {
    const ret = await ajax.get('/article', {
      param: {
        limit: state.limit,
        ...params
      }
    })
    const { data } = ret
  }
}

export const state = () => ({
  articles: [],
  articlesTop: [],
  total: 0,
  limit: 15,
  article: {}
})