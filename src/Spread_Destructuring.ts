

let userProfile: { namee: string, email: string, pass: number } = {
    namee: "karim",
    email: "karim@123.com",
    pass: 123
}


const { namee, email, pass }: { namee: string, email: string, pass: number } = { ...userProfile }