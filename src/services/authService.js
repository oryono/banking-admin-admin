import client from "../client";
import jwtDecode from "jwt-decode";

export function isLoggedIn() {
    const credentials = JSON.parse(localStorage.getItem('credentials'))

    return credentials && jwtDecode(credentials.access_token).exp > Date.now() / 1000
}

export function authenticate(credentials) {
    return client.post('/auth/login', credentials)
}