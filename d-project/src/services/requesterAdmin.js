const requestAdmin = async (method, url, data) => {
    try {
        const user = localStorage.getItem('auth');
        const auth = JSON.parse(user || '{}');

        let headers = {}

        if (auth.accessToken) {
            headers['X-Admin'] = auth.accessToken;
        }

        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(url, { headers });
        } else {
            buildRequest = fetch(url, {
                method,
                headers: {
                    ...headers,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }
        const response = await buildRequest;

        //console.log(response);

        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
    }
};

export const getAdmin = requestAdmin.bind({}, 'GET');
export const postAdmin = requestAdmin.bind({}, 'POST');
export const patchAdmin = requestAdmin.bind({}, 'PATCH');
export const putAdmin = requestAdmin.bind({}, 'PUT');
export const delAdmin = requestAdmin.bind({}, 'DELETE');