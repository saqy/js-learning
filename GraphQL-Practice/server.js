const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull, GraphQLInt, GraphQLScalarType } = require('graphql');
const app = express();


const authors = [
    { id: 1, name: 'Allama Iqbal'},
    { id: 2, name: 'Meer Dard'},
    { id: 3, name: 'Nicholas Sparks'},
]

const books =[
    { id: 1, name: 'Shikwa', authorId: 1},
    { id: 2, name: 'Jawab-e-Shikwa', authorId: 1},
    { id: 3, name: 'The Secrets of the Self', authorId: 1},
    { id: 4, name: 'Sufi Poet', authorId: 2},
    { id: 5, name: 'Deewany Meer', authorId: 2},
    { id: 6, name: 'Hum se hai Zamana', authorId: 2},
    { id: 7, name: 'NoteBook', authorId: 3},
    { id: 8, name: 'A Walk to Remember', authorId: 3},
    { id: 9, name: 'Choice', authorId: 3},
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'Representation of a Book written by author',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt)},
        name: { type: GraphQLNonNull(GraphQLString)},
        authorId: { type: GraphQLNonNull(GraphQLInt)},
        author: { 
            type: AuthorType,
            resolve: (book) => {
                return authors.find(author => author.id === book.authorId) 
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'Representation of a Author of a book',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt)},
        name: { type: GraphQLNonNull(GraphQLString)},
        books:{
            type: new GraphQLList(BookType),
            resolve: (author) => {
                return books.filter(book => book.authorId === author.id);
            }
        }
    })
})


const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        book:{
            type: BookType,     //Custom Placholder
            description: 'A Single Book',
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) => books.find( book => book.id === args.id)
        },
        books: {
            type: new GraphQLList(BookType),     //Custom Placholder
            description: 'List of Books',
            resolve: () => books
        },
        author: {
            type: AuthorType,     //Custom Placholder
            description: 'Single Authors',
            args:{
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) => authors.find( author => author.id === args.id)
        },
        authors: {
            type: new GraphQLList(AuthorType),     //Custom Placholder
            description: 'List of Authors',
            resolve: () => authors
        }
    })
})

const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'root Mutation',
    fields: () => ({
        addBook:{
            type: BookType,
            description: 'Adding a New Book',
            args: {
                name: { type: GraphQLNonNull(GraphQLString)},
                authorId: { type: GraphQLNonNull(GraphQLInt)}
            },
            resolve: (parent, args) => {
                const book = { id: books.length + 1, name: args.name, authorId: args.authorId}
                books.push(book)
                return book;
            }
        },
        addAuthor:{
            type: AuthorType,
            description: 'Adding a New Author',
            args: {
                name: { type: GraphQLNonNull(GraphQLString)}
            },
            resolve: (parent, args) => {
                const author = { id: authors.length + 1, name: args.name}
                authors.push(author)
                return author;
            }
        }
    })
})

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))
app.listen(5000, () => console.log("Server is Running!!!"));