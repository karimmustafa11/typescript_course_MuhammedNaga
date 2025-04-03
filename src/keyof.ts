interface IUser {
    username: string;
    age: number;
    address: string;
    }
    
    type UserKeys = keyof IUser; // ** username | age | address => keyof:getkeys of interface
    
    const user3: IUser = {
    username: "codeawy",
    age: 30,
    address: "10 main street",
    };
    
    function getProperty(obj: IUser, key: UserKeys) {
    return obj[key];
    }
    console.log(getProperty(user3, "username"));
    console.log(getProperty(user3, "age"));
    console.log(getProperty(user3, "address"));