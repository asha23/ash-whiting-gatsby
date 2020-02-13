import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"


export default ({ data }) => (
	<Layout>
		<div>
			<h2 css={css`
			
					padding-bottom:20px;
		  		`}
			>
				A web development blog
		  	</h2>

			{/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}

			{data.allMarkdownRemark.edges.map(({ node }) => (
				<div key={node.id}
					css={css`
						margin-top:80px;
						margin-bottom:80px;
					`}
				
				>
					<Link
						to={node.fields.slug}
					>
						<h3
							css={css`
				 				margin-bottom: ${rhythm(1 / 4)};
			   				`}
						>
							{node.frontmatter.title}{" "}
							
						</h3>
					</Link>
					<div
						css={css`
							color: #bbb;
							padding-bottom:10px;
							font-family: 'Varela Round',sans-serif;
					
						`}
					>
						{node.frontmatter.date}
					</div>
					<div
						css={css`
							margin-bottom:10px;
							font-size:12px;
							font-family:'Varela', sans-serif;
						`}
					
					>Time to read: {node.timeToRead} min</div>
					<div
						css={css`
							
						`}
					
					>{node.excerpt}</div>
					<div
						css={css`
							width:100%;
							text-align:right;
							margin-bottom:20px;
							padding-bottom:20px;
							border-bottom:1px dotted #ccc;
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
							...
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
