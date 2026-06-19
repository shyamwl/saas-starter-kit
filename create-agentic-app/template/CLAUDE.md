@AGENTS.md

# Git Remotes & Branches

This local repo has two remotes configured:

| Remote | URL | Notes |
|---|---|---|
| `crm-test` | https://github.com/shyamwl/crm-test.git | Active/correct repo (full CRM app) |
| `origin` | https://github.com/shyamwl/saas-starter-kit.git | Old repo; `main` here is CRM-free (vercel fix only) |

Local branch tracking:

| Local branch | Pushes to | Repo |
|---|---|---|
| `main` (default working branch) | `crm-test/main` | crm-test.git |
| `master` | `origin/master` | saas-starter-kit.git |

**Default:** While on `main`, all commits and pushes (incl. VS Code Sync) go to **crm-test** on the `main` branch. Work does NOT go to `origin`/saas-starter-kit unless you switch to `master` or explicitly push to `origin`.
