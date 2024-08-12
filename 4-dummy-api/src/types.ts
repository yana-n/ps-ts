enum  Gender {
    male = 'male',
    female = 'female',
}

type EyeColors = 'green' | 'blue' | 'brown'
type HairTypes = 'curly' | 'straight'
type HairColors = 'brown' | 'blonde' | 'black'
type CountriesNames = 'russia' | 'usa' | 'indonesia' // etc
type CurrenciesTypes = 'idr' | 'usd' | 'rub' // etc
type UserRoles = 'admin' | 'editor' // etc
type CryptoCoins = 'bitcoin' | 'usdt' | 'dodge' // etc

interface IHair {
    color: HairColors
    type: HairTypes
}

interface IAddress {
    address: string
    city: string,
    state: string
    stateCode: string
    postalCode: string
    coordinates: ICoordinates
    country: CountriesNames
}

interface ICoordinates {
    lat: number
    lng: number
}

interface IBank {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: CurrenciesTypes
    iban: string
}

interface ICompany {
    department: string
    name: string
    title: string
    address: IAddress
}

interface ICrypto {
    coin: CryptoCoins
    wallet: string
    network: string
}

export interface IUser {
    id: string
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: Gender
    email: string
    phone: string
    username: string
    password: string
    birthday: Date
    image: string
    bloodGroup: string
    height: number
    weight: number
    eyeColor: EyeColors
    hair: IHair
    ip: string
    address: IAddress
    macAddress: string
    university: string
    bank: IBank
    company: ICompany
    ein: string
    ssn: string
    userAgent: string
    crypto: ICrypto
    role: UserRoles
}
