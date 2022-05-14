# setup-cli-action
Setup Az-Acme CLI on hosted or private runners.

This action can be run on `ubuntu-latest`, `windows-latest`, and `macos-latest` GitHub Actions runners, and will install and expose a specified version of the `az-acme` CLI on the runner environment.

A specific version of the `az-acme` CLI can be installed. See releases page for available versions (https://github.com/az-acme/az-acme-cli/releases)

```yaml
steps:
- uses: az-acme/setup-cli-actionh@v1
  with:
    version: 0.2
```
