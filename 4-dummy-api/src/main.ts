import axios from 'axios'
import { IUser } from './types.ts'

const BASE_URL = 'https://dummyjson.com'

async function getUsers(url: string): Promise<IUser[] | undefined> {
    try {
        const { data: { users } } = await axios.get(`${url}/users`)

        return users
    } catch (e) {
        if (e instanceof Error) {
            throw new Error(e.message)
        } else {
            console.error(e)
        }
    }
}

(async () => {
    console.log(await getUsers(BASE_URL))
})()
