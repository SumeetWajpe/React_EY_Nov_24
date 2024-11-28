const typeDefs = `#graphql

type Query{
    users:[User]
    courses:[Course]
    course(id:ID!):Course
}


type User{
    id:ID
    name:String
    age:Int
    email:String
}

type Course{
    id:ID
    title:String
    price:Int
    likes:Int
    rating:Int
    trainer:Trainer
    imageUrl:String
    description:String
}

type Trainer{
    id:ID!
    name:String
    isMCT:Boolean
}

`;

export default typeDefs;
