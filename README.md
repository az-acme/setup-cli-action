# setup-cli-action
Setup Az-Acme CLI on hosted or private runners.

This action can be run on `ubuntu-latest`, `windows-latest`, and `macos-latest` GitHub Actions runners, and will install and expose a specified version of the `az-acme` CLI on the runner environment.

```yaml
steps:
- uses: az-acme/setup-cli-action@v1
```

A specific version of the `az-acme` CLI can be installed:

```yaml
steps:
- uses: az-acme/setup-cli-actionh@v1
  with:
    version:
      0.1-beta
```
