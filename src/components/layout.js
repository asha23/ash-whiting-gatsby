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
				padding:0px;
        		padding: ${rhythm(1)};
				padding-top: ${rhythm(1.5)};
				
				text-shadow:none;
      		`}
		>
			<div 
				className="header-logo"
				css={css`
					vertical-align:middle;
					border-bottom:1px solid red;
				`}
			>
				<Link to={`/`}>
					<h1
						css={css`
							margin-top:: ${rhythm(1)};
							margin-bottom: ${rhythm(1)};
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
					css={css`
						text-align:left;
						font-size:9px;
					`}
				>
					<a href="http://www.ashwhiting.com">More about Ash</a>
				</div>
			</footer>
		</div>

		
	)
}
