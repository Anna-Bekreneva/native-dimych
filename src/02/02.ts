type CityType = {
    title: string
    countyTitle: string
}

type AddressType = {
    streetTitle: string
    city: CityType
}

type TechnologiesType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

const student: StudentType = {
    id: 1,
    "name" : "Dimych",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countyTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "html"
        },

        {
            id: 2,
            title: "css"
        },

        {
            id: 3,
            title: "js"
        }
    ]
}

console.log(student.age)
console.log(student["name"])
console.log(student.address.city.title)
console.log(student["address"]["city"])
console.log(student.technologies[2].title)

type AddressTypeCar = {
    country: string
    city: string
    salon: string
}

type BuyType = {
    years: number
    address: AddressTypeCar
}

type DriverType = {
    name: string
    age: number
    hasChildren: boolean
    isMarried: boolean
}

type CarType = {
    id: number
    color: string
    age: number
    brand: string
    model: string
    isBroken: boolean
    isPassenger: boolean
    manufacturer: string
    countDriver: number
    buy: BuyType
    driver: DriverType
}


const car: CarType = {
    id: 2,
    color: "green",
    age: 7,
    brand: "Renault",
    model: "Daster",
    isBroken: true,
    isPassenger: true,
    manufacturer: "France",
    countDriver: 1,
    buy: {
        years: 2012,
        address: {
            country: "Russia",
            city: "Moscow",
            salon: "Renault Daster",
        }
    },
    driver: {
        name: "Alexander",
        hasChildren: true,
        age: 50,
        isMarried: true,
    }
}
