export const api_helper = async <T = unknown>(uri: string, method: string = 'GET', body?: {}) => {
    const headers: { [key: string]: string} = {
        'Content-Type': 'application/json'
    };

    const token = localStorage.getItem('token');
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