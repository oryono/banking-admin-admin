import client from "../client";

export function getClients() {
    return client.get('/clients')
}