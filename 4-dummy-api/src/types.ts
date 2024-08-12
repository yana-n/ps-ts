enum  EGender {
    male = 'male',
    female = 'female',
}

type TEyeColors = 'green' | 'blue' | 'brown'
type THairTypes = 'curly' | 'straight'
type THairColors = 'brown' | 'blonde' | 'black'
type TCountriesNames = 'russia' | 'usa' | 'indonesia' // etc
type TCurrenciesTypes = 'idr' | 'usd' | 'rub' // etc
type TUserRoles = 'admin' | 'editor' // etc
type TCryptoCoins = 'bitcoin' | 'usdt' | 'dodge' // etc

interface IHair {
    color: THairColors
    type: THairTypes
}

interface IAddress {
    address: string
    city: string,
    state: string
    stateCode: string
    postalCode: string
    coordinates: ICoordinates
    country: TCountriesNames
}

interface ICoordinates {
    lat: number
    lng: number
}

interface IBank {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: TCurrenciesTypes
    iban: string
}

interface ICompany {
    department: string
    name: string
    title: string
    address: IAddress
}

interface ICrypto {
    coin: TCryptoCoins
    wallet: string
    network: string
}

export interface IUser {
    id: string
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: EGender
    email: string
    phone: string
    username: string
    password: string
    birthday: Date
    image: string
    bloodGroup: string
    height: number
    weight: number
    eyeColor: TEyeColors
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
    role: TUserRoles
}
