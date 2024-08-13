import axios, {AxiosResponse} from 'axios'
import { IUser } from './types.ts'

const BASE_URL = 'https://dummyjson.com'

async function getUsers(url: string): Promise<IUser[] | null> {
    try {
        const res: AxiosResponse = await axios.get(`${url}/users`)

        return res?.data?.users ?? null
    } catch (e) {
        if (e instanceof Error) {
            throw new Error(e.message)
        } else {
            return null
        }
    }
}

(async () => {
    console.log(await getUsers(BASE_URL))
})()
