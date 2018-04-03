import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Section = styled.section`
  padding: 1rem;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
`;
const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  border: 1px solid #eee;
  overflow: hidden;
  border-radius: 5px;
`;
const ListLink = styled(Link)`
  display: flex;
  color: #000;
`;
const Placeholder = styled.div`
  background-color: #eee;
  min-width: 100px;
  margin-right: 24px;
`;
const Thumbnail = styled.img`
  display: block;
  height: 100%;
`;

const IndexPage = ({ data }) => {
  return (
    <Section>
      <List>
        {data.allPosts.edges.map(post => (
          <ListItem key={post.node.id}>
            <ListLink to={`/post/${post.node.slug}`}>
              <Placeholder>
                <Thumbnail
                  alt={post.node.title}
                  src={
                    post.node.coverImage
                      ? `https://media.graphcms.com/resize=w:100,h:100,fit:crop/${
                          post.node.coverImage.handle
                        }`
                      : 'https://via.placeholder.com/100x100'
                  }
                />
              </Placeholder>
              <h3>{post.node.title}</h3>
            </ListLink>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};
export default IndexPage;

export const allPostsQuery = graphql`
  query allPosts {
    allPosts(sort: { fields: [dateAndTime], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          coverImage {
            handle
          }
        }
      }
    }
  }
`;
