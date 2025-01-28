## Usage:

```yaml
name: JIRA Connection

on:
  pull_request:
    types:
      - opened
      - reopened
      - edited
      - synchronize

jobs:
  enforce-issue:
    runs-on: ubuntu-latest
    name: JIRA Association
    steps:
      - name: Check for JIRA ISSUE
        id: check
        uses: samueldevine/jira-link-in-pr-body-action@v1.0.2
        with:
          ignore-author: dependabot[bot]
          project: "SRENEW"
```
