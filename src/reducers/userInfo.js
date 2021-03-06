export const LOGIN = 'login';
export const LOGOUT = 'logout';

const STORAGE_KEY = 'userInfo';

if (typeof localStorage === 'undefined') {
  var localStorage = {
    getItem: function() { return null},
    removeItem: function() {},
    setItem: function() {},
  }
}

let defaultState;

try {
  defaultState = JSON.parse(localStorage.getItem(STORAGE_KEY));
} catch(e) {
  defaultState = null;
}

export const userInfo = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem(STORAGE_KEY, JSON.stringify(action.payload));
      return action.payload;
    default:
      localStorage.removeItem(STORAGE_KEY);
      return null;
  }
};
