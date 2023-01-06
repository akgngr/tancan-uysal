import { eventHandler } from 'h3'
import { gql, GraphQLClient } from 'graphql-request';

export default eventHandler(async (event) => {

    const hygraphClient = new GraphQLClient(`${process.env.HYGRAPH}`);
    const query = gql`
        query getBlogs{
            blogs {
                slug
                publishedAt
            }
        }
    `;
    
    const { blogs } = await hygraphClient.request(query);
    return blogs
});