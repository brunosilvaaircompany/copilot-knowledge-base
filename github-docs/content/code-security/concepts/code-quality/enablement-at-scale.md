# Code Quality enablement across organizations and enterprises

## How enablement works across your enterprise

Code Quality is controlled at three levels, so you can decide how much autonomy to give organizations and repositories:

* **Enterprise:** An enterprise owner must first allow Code Quality for the enterprise. Until they do, organization owners cannot enable it.
* **Organization:** Organization owners control which repositories have Code Quality enabled or disabled, by granting access to all repositories, a selected list, or repositories that match a filter. They can also enforce these settings so that repository administrators cannot change them.
* **Repository:** Repository administrators can enable or disable Code Quality for individual repositories, unless organization-level enforcement applies.

When Code Quality is enabled on a repository, CodeQL analysis runs via GitHub Actions and surfaces findings in pull requests and on the default branch. Developers see quality checks and annotations on their pull requests.

## Organization-level repository access

At the organization level, you control Code Quality with a single **Repository access** setting. This setting determines which repositories have Code Quality enabled and which have it disabled: repositories within your selection are enabled, and repositories outside your selection are disabled.

> [!IMPORTANT]
> Changing the **Repository access** setting can both enable **and** disable Code Quality across many repositories at once. For example, if you enable Code Quality for repositories matching a filter, any repository that does not match the filter is disabled. Before your change is applied, a dialog shows the total number of enabled and disabled repositories, along with the billing impact.

### Repository access options

You can apply one of the following options at a time.

| Option | Behavior |
| ------ | -------- |
| **No repositories** | Disables Code Quality for all current and future repositories in the organization. |
| **Let repositories decide** | The organization neither enables nor disables Code Quality. Repository administrators choose whether to enable it for their own repositories. This option cannot be enforced. |
| **All repositories** | Enables Code Quality for all current and future repositories. |
| **Selected repositories** | Enables Code Quality for a specific list of repositories that you choose. Repositories you do not select are disabled, and new repositories are not enabled automatically. Best for pilots or exceptions. |
| **Matching a filter** | Enables Code Quality for repositories that match a filter you define, now and in the future. Repositories that do not match are disabled. See [Filtering repositories](#filtering-repositories). |

### Filtering repositories

When you choose **Matching a filter**, you create a dynamic filter that automatically enables Code Quality for existing and future repositories that match your criteria. This is useful for ongoing governance at scale.

You can filter on any combination of the following criteria:

* **Visibility:** Whether repositories are public, private, or internal. Useful for broad policies, such as enabling Code Quality for all private repositories.
* **Fork status:** Whether repositories are forks. Useful when forks should not consume analysis resources.
* **Custom property:** Whether repositories have a specific custom property value. For example, you could target repositories with a `team:platform` property.

All conditions in a filter are combined with `AND`, so a repository must match every condition to be enabled. You can also exclude repositories that match specific conditions.

### Enforcing access

By default, repository administrators can change Code Quality settings for their own repositories. To prevent this, enable **Enforce access**.

Enforcement locks in both the enabled and disabled states set by your **Repository access** option, so repository administrators cannot override them. This improves consistency across your organization, but reduces flexibility for individual repository administrators.

* Enforcement applies to most **Repository access** options you select, including **No repositories**, which enforces Code Quality as disabled.
* Enforcement is not available with **Let repositories decide**, which intentionally leaves the choice to repository administrators.

## Planning your rollout

Because a single **Repository access** setting change can enable Code Quality across many repositories at once, and each analysis consumes GitHub Actions minutes, it's worth rolling out in phases rather than all at once. As you plan, weigh a few things:

* **Cost and capacity.** Confirm your runners can absorb the additional GitHub Actions load before you enable Code Quality broadly.
* **How much to enforce.** Enforcement gives you consistent coverage and stops repository administrators opting out, but it removes their flexibility. Leaving it off lets teams opt in on their own timeline.
* **When to expand.** Start with a small, representative pilot group, confirm that analysis runs smoothly and developers trust the findings, then widen your selection or filter to cover more repositories.

For a step-by-step rollout procedure, including piloting your quality thresholds in evaluate mode before you enforce them, see [Roll Out At Scale?Utm_Campaign=Code Quality Ga July 2026&Utm_Medium=Docs&Utm_Source=Docs Enable At Scale Roll Out Plan](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/roll-out-at-scale?utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-enable-at-scale-roll-out-plan).
