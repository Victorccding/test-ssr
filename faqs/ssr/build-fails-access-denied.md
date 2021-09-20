---
title: "Build fails with [ERROR]: AccessDenied: Access Denied"
---

You may have specified the wrong version for NextJS in your Amplify
App. Make sure that if you are using NextJS v10x, you specify Version
10 on your build settings: [How to update app nextjs
version](https://docs.aws.amazon.com/amplify/latest/userguide/server-side-rendering-amplify.html#update-app-nextjs-version). If you are using v11 then you have to specify **latest**.
