export const baseUrl = "http://161.35.153.209:5430/api"
export const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
export const YANDEX_CLIENT_ID = "d8d071002ccd49aa9d8973f60e33d200"
export const YANDEX_CLIENT_SECRET = import.meta.env.VIRE_CLERK_YANDEX_CLIENT_SECRET
export const REDIRECT_URI = "http://localhost:5173/main";


if (!baseUrl) {
    throw new Error("Missing baseUrl")
}
if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}
if (!YANDEX_CLIENT_ID) {
    throw new Error("Missing YANDEX_CLIENT_ID")
}
// if (!YANDEX_CLIENT_SECRET) {
//     throw new Error("Missing YANDEX_CLIENT_SECRET")
// }
if (!REDIRECT_URI) {
    throw new Error("Missing REDIRECT_URI")
}