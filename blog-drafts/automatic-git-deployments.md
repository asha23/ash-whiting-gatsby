---
title: "How to set up automatit Git deployments"
date: "2019-12-03"
---
## What are we doing?

This is a simple way to use Git to create automatic deployments. There are a lot of ways of doing this, but this was the simplest method to quickly get your code on to a production or development server.

## Setup

Here is an example workspace:

Your live directory: **/var/www/domain.com**
Your server repository: **/var/repo/website.git**

What we are going to do is push to website.git and make the content available at **/var/www/domain.com**

## Create the repo

Log in to your server from the command line and add the following:

```
cd /var
mkdir repo && cd repo
mkdir website.git && cd website.git
git init --bare
```

```--bare``` sets our folder to have no files, just the version control files.

## Using hooks

Git repos have a folder called **'hooks'**. This contains sample files for actions that you can hook and perform custom actions on.

There are three possible server hooks: **'pre-receive'**, **'post-receive'** and **'update'**

Go to your repository and type

```
ls
```

You will see some folders, including the ***'hooks'** folder

```
cd hooks
```

Create **'post-receive'**

```
cat > post-receive
```

Then add:

```
git --work-tree=/var/www/domain.com --git-dir=/var/repo/website.git checkout -f
```

Hit **'control-d'** to save. Now set some permissions.

```
chmod +x post-receive
```



