import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex';

export const name = 'nodeType'

export const types = {
    INIT: 'INIT',
    PAGE: 'PAGE',
    SET_NODE_TYPE_LIST: 'SET_NODE_TYPE_LIST'
}



export const namespaced = true

export const state = () => ({
    isInit: false,
    page: 1,
    nodeTypeList: []
})

export const getters = {
    selectedNodeType: state => id => {
        const nodeType = state.nodeTypeList.find(nodeType => nodeType.id === id);
        return nodeType ? nodeType : { typeName: '존재하지 않는 ID 입니다.,' }
    }
}


export const mutations  = {

    [types.SET_NODE_TYPE_LIST] (state, nodeTypeList) {
        state.nodeTypeList = nodeTypeList
    },
    [types.INIT] (state) {
        state.isInit = true
    },
    [types.PAGE] (state) {
        state.page += 1
    }
}


export const actions = {
    setNodeTypeList ({ commit }, nodeTypeList ) {
        commit(types.SET_NODE_TYPE_LIST, nodeTypeList)
    }
}
