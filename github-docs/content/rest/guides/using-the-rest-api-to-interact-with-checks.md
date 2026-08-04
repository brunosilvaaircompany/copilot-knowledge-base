# Using the REST API to interact with checks

## Overview

Rather than binary pass/fail build statuses, GitHub Apps can report rich statuses, annotate lines of code with detailed information, and re-run tests. REST API to manage checks is available exclusively to your GitHub Apps.

For an example of how to use the REST API with a GitHub App, see [Building Ci Checks With A GitHub App](https://docs.github.com/en/apps/creating-github-apps/writing-code-for-a-github-app/building-ci-checks-with-a-github-app#step-26-automatically-fix-rubocop-errors).

You can use statuses with [protected branches](/rest/repos#branches) to prevent people from merging pull requests prematurely. For more information, see [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-status-checks-before-merging).

## About check suites

When someone pushes code to a repository, GitHub creates a check suite for the last commit. A check suite is a collection of the [check runs](/rest/checks#check-runs) created by a single GitHub App for a specific commit. Check suites summarize the status and conclusion of the check runs that a suite includes.

The `status` can be `queued`, `in_progress`, `requested`, `waiting`, `pending`, or `completed`. Only GitHub Actions can set a status of `requested`, `waiting`, or `pending`.

If the status is `completed`, the conclusion can be any of the following:
* `action_required`
* `cancelled`
* `timed_out`
* `failure`
* `neutral`
* `skipped`
* `stale`
* `startup_failure`
* `success`

The check suite reports the highest priority check run `conclusion` in the check suite's `conclusion`. For example, if three check runs have conclusions of `timed_out`, `success`, and `neutral` the check suite conclusion will be `timed_out`.

By default, GitHub creates a check suite automatically when code is pushed to the repository. This default flow sends the `check_suite` event (with `requested` action) to all GitHub Apps that have the `checks:write` permission. When your GitHub App receives the `check_suite` event, it can create new check runs for the latest commit. GitHub automatically adds new check runs to the correct [check suite](/rest/checks#check-suites) based on the check run's repository and SHA.

If you don't want to use the default automatic flow, you can control when you create check suites. To change the default settings for the creation of check suites, use the [Update repository preferences for check suites](/rest/checks/suites#update-repository-preferences-for-check-suites) endpoint. All changes to the automatic flow settings are recorded in the audit log for the repository. If you have disabled the automatic flow, you can create a check suite using the [Create a check suite](/rest/checks/suites#create-a-check-suite) endpoint. You should continue to use the [Create a check run](/rest/checks/runs#create-a-check-run) endpoint to provide feedback on a commit.

Write permission for the REST API to interact with checks is only available to GitHub Apps. OAuth apps and authenticated users can view check runs and check suites, but they are not able to create them. If you aren't building a GitHub App, you might be interested in using the REST API to interact with [commit statuses](/rest/commits#commit-statuses).


To use the endpoints to manage check suites, the GitHub App must have the `checks:write` permission and can also subscribe to the [check_suite](/webhooks/webhook-events-and-payloads#check_suite) webhook.

For information on how to authenticate as a GitHub App, see [About Authentication With A GitHub App](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/about-authentication-with-a-github-app).


## About check runs

A check run is an individual test that is part of a check suite. Each run includes a status and conclusion.

The `status` can be `queued`, `in_progress`, `requested`, `waiting`, `pending`, or `completed`. Only GitHub Actions can set a status of `requested`, `waiting`, or `pending`.

If the status is `completed`, the conclusion can be any of the following:
* `action_required`
* `cancelled`
* `timed_out`
* `failure`
* `neutral`
* `skipped`
* `success`

If a check run is in an incomplete state for more than 14 days, then the check run's `conclusion` becomes `stale` and appears on GitHub as stale with {% octicon "issue-reopened" aria-label="The issue-reopened icon" %}. Only GitHub can mark check runs as `stale`. For more information about possible conclusions of a check run, see the [`conclusion` parameter](/rest/checks#create-a-check-run--parameters).

As soon as you receive the [`check_suite`](/webhooks/webhook-events-and-payloads#check_suite) webhook, you can create the check run, even if the check is not complete. You can update the `status` of the check run as it completes with the values `queued`, `in_progress`, or `completed`, and you can update the `output` as more details become available. A check run can contain timestamps, a link to more details on your external site, detailed annotations for specific lines of code, and information about the analysis performed.

Annotations add information from your check run to specific lines of code. Each annotation includes an `annotation_level` property, which can be `notice`, `warning`, or `failure`. The annotation also includes `path`, `start_line`, and `end_line` to specify what location the annotation refers to. The annotation includes a `message` to describe the result. For more information, see [Runs](https://docs.github.com/en/rest/checks/runs).

A check can also be manually re-run in the GitHub UI. See [About Status Checks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks#checks) for more details. When this occurs, the GitHub App that created the check run will receive the [`check_run`](/webhooks/webhook-events-and-payloads#check_run) webhook requesting a new check run. If you create a check run without creating a check suite, GitHub creates the check suite for you automatically.

Write permission for the REST API to interact with checks is only available to GitHub Apps. OAuth apps and authenticated users can view check runs and check suites, but they are not able to create them. If you aren't building a GitHub App, you might be interested in using the REST API to interact with [commit statuses](/rest/commits#commit-statuses).


To use the endpoints to manage check runs, the GitHub App must have the `checks:write` permission and can also subscribe to the [check_run](/webhooks/webhook-events-and-payloads#check_run) webhook.

## Check runs and requested actions

When you set up a check run with requested actions (not to be confused with GitHub Actions), you can display a button in the pull request view on GitHub that allows people to request your GitHub App to perform additional tasks.

For example, a code linting app could use requested actions to display a button in a pull request to automatically fix detected syntax errors.

To create a button that can request additional actions from your app, use the [`actions` object](/rest/checks/runs#create-a-check-run--parameters) when you [Create a check run](/rest/checks#create-a-check-run). For example, the `actions` object below displays a button in the **Checks** tab of a pull request with the label "Fix this." The button appears after the check run completes.

```json
"actions": [{
  "label": "Fix this",
  "description": "Let us fix that for you",
  "identifier": "fix_errors"
}]
```

When a user clicks the button, GitHub sends the [`check_run.requested_action` webhook](/webhooks/webhook-events-and-payloads#check_run) to your app. When your app receives a `check_run.requested_action` webhook event, it can look for the `requested_action.identifier` key in the webhook payload to determine which button was clicked and perform the requested task.

For a detailed example of how to set up requested actions with the REST API, see [Building Ci Checks With A GitHub App](https://docs.github.com/en/apps/creating-github-apps/writing-code-for-a-github-app/building-ci-checks-with-a-github-app).

## Retention of checks data



GitHub retains checks data for 400 days. After 400 days, the data is archived. 10 days after archival, the data is permanently deleted.

{% elsif ghes %}

Site administrators can control the retention policy for checks data on your GitHub Enterprise Server instance. For more information, see [Configuring Applications](https://docs.github.com/en/admin/configuring-settings/configuring-user-applications-for-your-enterprise/configuring-applications#enabling-retention-policy-for-checks).



To merge a pull request with checks that are both required and archived, you must rerun the checks.
