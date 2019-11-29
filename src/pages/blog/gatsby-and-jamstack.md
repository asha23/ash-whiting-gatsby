---
title: "Gatsby and the JAMStack"
date: "2019-11-29"
---
Lately I have been looking into creating sites in a more modular, sensible and maintainable way. This is after nearly a decade of using WordPress to essentially over-engineer everything.

Enter [Gatsby](https://www.gatsbyjs.org/). This is a very neat and extensible static website generator, based around React and GraphQL. This website was built in an afternoon, by working through their excellent tutorials. 

Static and serverless websites are very secure, load in a flash and are possibly the future. This is not new, static HTML, CSS and JavaScript has been used to create websites since the beginning of the internet. It's a great way to serve pages, as there is no requirement for anything to be done on the server and it's all rendered directly to the client. This gives the benefit of it being superfast and pretty much unhackable.

All I do when I want to publish a new post, is write it in MarkDown and then commit it to my repository. My Master branch is instantly deployed to Netlify and the post is published. This is actually simpler than using a bloated CMS to achieve the same result. I don't need to log-in, add a post, write it, publish it. All I do is create a new markdown file, write the post and commit to the repository.

## Next Steps

Now I've dipped my toes into the water, I can see that this is the future. Here are a few things I want to do.

* Connect this to a WordPress instance and leverage the Rest API to create blogs (Not that this is necessary in the case of this little website)
* Learn more about GraphQL and create some custom APIs
* Learn more about Gatsby theming
* Look at what else Gatsby can do

Exciting stuff, I think you'll agree. It's extremely elegant, and simple to create websites this way.



