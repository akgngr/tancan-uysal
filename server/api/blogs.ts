import { gql, GraphQLClient } from 'graphql-request';

export default defineEventHandler(async (event) => {
    const hygraphClient = new GraphQLClient(`${process.env.HYGRAPH}`);

    const query = gql`
        query getBlogs{
            blogs {
                id
                slug
            }
        }
    `;
    
    const { blogs } = await hygraphClient.request(query);

    return { blogs };
}) 