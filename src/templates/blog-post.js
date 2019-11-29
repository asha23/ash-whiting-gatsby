import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default({data}) => {
    const post = data.markdownRemark;
    return(
        <Layout>
            <div>
                <header>
                    <h1>{post.frontmatter.title}</h1>
                    <h4>Posted: {post.frontmatter.date}</h4>
                    <div dangerouslySetInnerHTML={{__html: post.html}} />
                </header>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
            }
        }
    }
`