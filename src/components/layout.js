import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"


export default ({ children }) => {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	)

	return (
		<div
			css={css`
				padding:20px;
        		padding: ${rhythm(2)};
				padding-top: ${rhythm(1.5)};
				background:#fafafa;
      		`}
		>
			<div 
				className="header-logo"
				css={css`
					display:inline-block;
					vertical-align:middle;
					width:50%;
				`}
			>
				<Link to={`/`}>
					<h1
						css={css`
							  margin-bottom: ${rhythm(2)};
							  font-size:72px;
            			`}
					>
						{data.site.siteMetadata.title}
					</h1>
				</Link>
			</div>

			<div 
				className="menu"
				css={css`
					display:inline-block;
					vertical-align:middle;
					width:50%;
					text-align:right;
				`}
			>
				{/* <Link
					to={`/about/`}
					css={css`
						padding: 0 10px;
						font-family: 'Montserrat',sans-serif;
						font-weight:normal;
          			`}
				>
					About
        		</Link> */}

				{/* <Link
					to={`/my-files/`}
					css={css`
						padding: 0 10px;
						font-family: 'Montserrat',sans-serif;
						font-weight:normal;
          			`}
				>
					Site Files
        		</Link> */}
			</div>

			<div className="main-content">
				{children}
			</div>
			
			<footer>
				<div 
					css={`
						text-align:center;
					`}
				>
					<a href="http://www.ashwhiting.com">Site by Ash</a>
				</div>
			</footer>
		</div>

		
	)
}
