---
title: "Stuck at Fetching access logs..."
---

This is a known issue for Amplify apps that have a lot of access logs. The GenerateAccessLogs API times out when there is too much data to fetch. The workaround is to specify a smaller time window, for example:

```bash
aws amplify generate-access-logs \
--app-id <appId> \
--domain-name 'example.com' \
--start-time 2021-01-13T14:00:00Z \
--end-time 2021-01-13T14:59:59Z
```

**Customer wording**: _There is a known issue with the GenerateAccessLogs API where it fails for applications with a high volume of access logs if the specified time range is too long. The current workaround is to specify a smaller time range in order to reduce the amount of logs being fetched._
