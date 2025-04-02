interface Iuser {
    namee: string,
    email: string,
    pass: number
    address?: string
}

interface Inewuser extends Iuser {
    age: number,
    college?: string
}



let user1: Iuser = {
    namee: "karim",
    email: "karim@123.com",
    pass: 123
}


let user2: Inewuser = {
    namee: "ahmed",
    email: "ahmed@123.com",
    pass: 234,
    address: "sidi-bisher",
    age: 30
}


