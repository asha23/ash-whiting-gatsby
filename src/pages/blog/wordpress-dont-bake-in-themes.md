---
title: "Don't bake core functionality into your theme"
date: "2019-12-03"
---
## Separate your concerns

One thing that I don't like to see when taking over a WordPress project these days is when all the website's functionality is baked into the theme itself. 

I'll hold my hands up - In the past this is how I have approached theme development. It worked fine and the client loved it. However, it's not a very sensible way of doing things.

## Don't lock your clients into a single theme

WordPress themes should represent the look and feel of the website only. Baking anything else into the theme will make it hard for your client to update the look and feel of the website later.

### A few things that probably should be a plugin

* Custom post types
* Custom post fields
* Forms

This is just a short list, but if you are creating a very long functions.php file, then you should be looking at replacing this with a plugin.

## How to approach this

It can be messy to have a load of plugins that do lots of different things, however you could create a single plugin that covers everything you need to do (example)