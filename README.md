# SmartinWeb

## Deploy  GitHub Page
1 - You just need a github repository to host on github and make sure that you pushed the latest code.

2 - Install github pages tool for angular by using, npm install -g angular-cli-ghpages .

3 - Here deploying code in github pages is quite easy, Just need to make sure one thing, when you build your code, use--base-href tag. Build command here will be ng build --prod --base-href https://<username>.github.io/<reponame>/ .

4 - Run angular-cli-ghpages -d dist/<project-name>/ --no-silent to deploy your project. -d tag take the location for build stored, in dist file.

5 - This command will create a new branch gh-pages in your repository and automatically push the dist build in that branch.

6 - Just navigate to https://<username>.github.io/<reponame>/
