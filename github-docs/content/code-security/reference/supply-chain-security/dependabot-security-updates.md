# Dependabot security updates reference

## Priority of grouped security update settings

Settings for grouped Dependabot security updates are applied in the following order, from highest to lowest priority:

1. Settings defined in a `dependabot.yml` file. See [About the `dependabot.yml` file](/code-security/concepts/supply-chain-security/about-the-dependabot-yml-file).
1. Repository-level settings defined in the UI
1. Organization-level settings defined in the UI

## Enablement for forked repositories

If you create a fork of a repository that has security updates enabled, GitHub will automatically disable Dependabot security updates for the fork. You can then decide whether to enable Dependabot security updates on the specific fork.
