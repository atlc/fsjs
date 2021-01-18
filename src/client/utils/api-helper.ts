const TOKEN = 'token_lol';

export const login = (token: string) =>  localStorage.setItem(TOKEN, token);
export const logout = () => localStorage.removeItem(TOKEN);

export const api_helper = async <T = unknown>(uri: string, method: string = 'GET', body?: {}) => {
    const headers: { [key: string]: string} = {
        'Content-Type': 'application/json'
    };

    const token = localStorage.getItem(TOKEN);
    if (token) headers['Authorization'] = `Bearer ${token}`;

    try {
        const res = await fetch(uri, { method, headers, body: JSON.stringify(body) });
        if (res.ok) {
            return <T>await res.json();
        } else {
            throw new Error(`Bad response; (Status code ${res.status})`);
        }
    } catch (e) {
        console.log(e);
        return e;
    }
}