
export default {
  setUser: user => {
    localStorage.setItem('userData', JSON.stringify(user));
  },

  getUser: () => {
    const user = localStorage.getItem('userData');
    return JSON.parse(user);
  }
}



