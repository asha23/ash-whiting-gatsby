import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"


export default ({ data }) => (
	<Layout>
		<div>
			<h2 css={css`
					display:inline-block;
		  		`}
			>
				A web development blog
		  	</h2>

			<h4>{data.allMarkdownRemark.totalCount} Posts</h4>

			{data.allMarkdownRemark.edges.map(({ node }) => (
				<div key={node.id}>
					<Link
						to={node.fields.slug}
					>
						<h3
							css={css`
				 				margin-bottom: ${rhythm(1 / 4)};
			   				`}
						>
							{node.frontmatter.title}{" "}
							<span
								css={css`
				   					color: #bbb;
				 				`}
							>
								— {node.frontmatter.date}
							</span>
						</h3>
					</Link>
					<p>Time to read: {node.timeToRead} min</p>
					<p>{node.excerpt}</p>
					<div
						css={css`
							width:100%;
							text-align:right;
							margin-bottom:20px;
							padding-bottom:20px;
							border-bottom:1px solid #efefef;
							font-weight:bold;
						`}
					>
						<Link
							to={node.fields.slug}
							css={css`
								padding:10px 20px;
								background-image:none;
								text-shadow:none;
								background:#ebebeb!important;
								color:black!important;
								border-radius:3px;
								text-decoration:none;

							`}
						>
							Read More
						</Link>
					</div>
				</div>
			))}

		</div>
	</Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
		  timeToRead
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
		  fields {
			  slug
		  }
          excerpt
        }
      }
    }
  }
`
