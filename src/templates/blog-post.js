import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import { Link } from 'gatsby';

class BlogPost extends Component {
    render() {
        const { title, body } = this.props.data.contentfulBlogPost;
        return ( 
            <Layout>
                <hr />
                <main>
                <h1>{title}</h1>
                <div
                    dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}>
                </div><ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
                </main>
                <hr />
            </Layout>
        );
    }
}

BlogPost.propTypes = {
    data: PropTypes.object.isRequired,
};

export default BlogPost;

export const pageQuery = graphql`
    query blogPostQuery($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            slug
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`;