export const getUser = state => state.user;
export const getStore = state => state.store;
export const getTags = state => state.store.tags;
export const getClassified = state => state.store.classified;
export const getClassifieds = state => state.store.classifieds;
export const getUi = state => state.ui;


export const isUserRegistered = state => state.user.register;
export const isUserLogged = state => state.user.login;
