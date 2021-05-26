import client from "../client";

export function getClients() {
    return client.get('/clients')
}

export function getClient(clientId) {
    return client.get(`/clients/${clientId}`)
}

export function createClient(form) {
    return client.post('/clients', form, {})
}