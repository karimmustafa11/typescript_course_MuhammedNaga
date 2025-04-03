
interface IUser {
    username: string;
    address: string;
    age: number
}


function updateUser(user: IUser, updates: Partial<IUser>) {
    return { ...user, ...updates };
}

const user4: IUser = {
    username: "codeawy",
    address: "10 main street",
    age: 30
}
console.log(updateUser(user4, {}))
console.log(updateUser(user4, { username: "naga", age: 25 })) 