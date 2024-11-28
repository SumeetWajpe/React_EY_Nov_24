const typeDefs = `#graphql

type Query{
    users:[User]
    courses:[Course]
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
    trainer:String
    imageUrl:String
    description:String
}

`;

export default typeDefs;
