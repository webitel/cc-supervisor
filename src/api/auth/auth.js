import instance from '../instance';

const removeToken = () => {
    localStorage.removeItem('access-token');
    localStorage.removeItem('domain');
    instance.defaults.headers['X-Webitel-Access'] = '';
};

export const logout = async () => {
    const url = '/logout';

    try {
        await instance.post(url, {});
        removeToken();
    } catch (err) {
        throw err;
    }
};

// gets user by token from localstorage
// stores response username in vuex
export const getSession = async () => {
    const url = '/userinfo';
    const token = localStorage.getItem('access-token');
    if (token) {
        try {
            return instance.get(url);
        } catch (err) {
            throw err;
        }
    }
    return null;
};

export const setToken = (token) => {
    localStorage.setItem('access-token', token);
    instance.defaults.headers['X-Webitel-Access'] = localStorage.getItem('access-token');
};
