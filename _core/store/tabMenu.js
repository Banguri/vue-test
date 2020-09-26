import Vue from 'vue';

export const name = 'tabMenu';

export const namespaced = true;

export const types = {
    MENUPUSH: 'MENUPUSH',
    MENUDElETE : 'MENUDElETE'
};

export const state = {
    menuActive: {},
    menuKey : ""
};

export const getters = {
    getActiveMenus : state =>{
        return state.menuActive;
    }
};


export const actions = {
    MENUPUSH({ commit }, menuInfo ) {
        commit(types.MENUPUSH, menuInfo);
    },
    MENUDElETE({ commit }, key){
        commit(types.MENUDElETE, key)
    }
};

export const mutations = {
    [types.MENUPUSH](state, menuInfo ) {
        state.menuKey = menuInfo.key;
        state.menuActive[menuInfo.key] =  {
            path : menuInfo.path,
            key : menuInfo.key,
            menuName : menuInfo.menuName
        }
    },
    [types.MENUDElETE](state, key ) {
        state.menuKey = key;
        delete state.menuActive[key];
    },
};


export async function pushMenu(commit, menuInfo, currentMenus) {
    const menuKeys = _.keys(currentMenus);
    let j = 0;
    for(let i in menuKeys){
        const menuSplit = menuKeys[i].split("_");
        const menuKey  = menuSplit[0];
        let keyIndex = Number(menuSplit[1]);
        if(menuKey == menuInfo.path){
            if(keyIndex > j){
                j = keyIndex;
            }
        }
    }
    j++;
    const keyName = menuInfo.path+"_"+j;
    return await commit(name +'/' + types.MENUPUSH,{
        path : menuInfo.path,
        key : keyName,
        menuName : menuInfo.title
    });
}
