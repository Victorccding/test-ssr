---
title: "My app is not being detected as SSR"
---

This issue does not happen if the App was created using the Console. It usually happens when the App is created via CloudFormation, CDK or API. The requirements for an app to be treated as SSR can be found here: [Deploying a Next.js SSR app with Amplify](https://docs.aws.amazon.com/amplify/latest/userguide/server-side-rendering-amplify.html#deploy-nextjs-app).

- Set the baseDirectory as `.next`.
- Assign a role to the app with an assume policy for `amplify.amazonaws.com`.
- Build script in package.json must be `next build`, make sure `next export` is not there.
