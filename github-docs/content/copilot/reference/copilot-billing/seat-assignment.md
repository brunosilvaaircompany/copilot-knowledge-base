# GitHub Copilot seat assignment

This article explains how seat assignment for Copilot works in organizations and enterprises.

## What is a Copilot seat?

A **Copilot seat** is a license to use Copilot, assigned to a unique user account.

Every user needs an assigned seat under an organization or enterprise plan, even when access has no incremental charge through GitHub Enterprise Cloud.

## Seat assignment management

With Copilot access, enterprise owners assign seats to individual members, enterprise teams, or entire organizations. This applies both through GitHub Enterprise Cloud and as Copilot Standalone. For a large rollout, assign seats to an enterprise team or organization to give all its members seats at once.

With Copilot Business, enterprise owners can assign seats directly to individual users or enterprise teams.

With Copilot Business or Copilot Enterprise, enterprise owners can enable Copilot for organizations. Organization owners then assign seats to their members.

Enabling Copilot for an enterprise does not assign individual seats. For enterprise assignment procedures, see [Grant Access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access).

If you have an active Copilot Pro, Copilot Pro+, or Copilot Max plan, and are then assigned a seat through Copilot Business, Copilot Enterprise, or Copilot access, your personal Copilot plan will be automatically canceled. This includes Copilot access through GitHub Enterprise Cloud or as Copilot Standalone. You will receive a prorated refund for any remaining portion of your personal plan's current billing cycle. You will then be able to continue using Copilot according to the policies set by your company.


## Organization assignment and billing rules

The rules below apply to Copilot Business and Copilot Enterprise licenses assigned through organizations.

Organization owners assign seats to specific user accounts in organization settings or via the REST API. See [Grant Access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-access/grant-access).

* **If all assigned seats are removed, the organization's Copilot plan is canceled.**
* **If a single user receives a seat from multiple organizations within the same enterprise**, the enterprise is only billed once per billing cycle for that unique user. One organization that assigned Copilot to the user is chosen at random each month to be billed for the seat.
* **If a user is assigned both a  Copilot Business and a Copilot Enterprise seat from different organizations within the same enterprise**, only the Copilot Enterprise seat is billed. The charge is at the Copilot Enterprise rate from the time the Copilot Enterprise seat is assigned. The user will have access to the all the features and capabilities available under the Copilot Enterprise plan.
* **If a user receives a seat automatically because they were added to a team with Copilot access** (for example, via SCIM or team synchronization), the `copilot.cfb_seat_added` audit log event attributes the action to whoever originally granted Copilot access to that team, not the account that added the new team member. The membership change itself is attributed correctly to the actual actor on the corresponding `team.add_member` or `org.add_member` event. See [Review Audit Logs](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/review-audit-logs).
