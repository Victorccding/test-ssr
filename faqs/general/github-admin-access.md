---
title: "Why does Amplify requires GitHub admin access to a repo?"
---

When you create an Amplify app using GitHub as source, we use the provided oauth token to create a [Webhook](https://docs.github.com/en/developers/webhooks-and-events/webhooks/about-webhooks) and a [Deploy Key](https://docs.github.com/en/developers/overview/managing-deploy-keys) on your repository. The Webhook is used to listen for GitHub events to trigger Amplify CI/CD based on new commits to your connected branches, and the Deploy Key is used to pull code from your repo during a build.

The [GitHub permission model](https://docs.github.com/en/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization) requires Admin access to a repository in order to create webhooks and deploy keys. Which is why the UI shows grayed out those repos for which you are not an admin. And its likely the same reason why your CDK deployment fails.

I would like to clarify that we only use the oauth token as a one-time setup to create the Webhook and Deploy Key and we do not store the token anywhere on our service.
