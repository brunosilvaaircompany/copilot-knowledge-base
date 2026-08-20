# GitHub Copilot seat assignment

This article explains how seat assignment for Copilot works in organizations and enterprises.

## What is a Copilot seat?

A **Copilot seat** is a license to use Copilot, assigned to a unique user account through a Copilot Business or a Copilot Enterprise plan.

Users must be assigned a seat to access Copilot features under an organization or enterprise plan

## Seat assignment management

* **Who assigns seats:** Organization owners. Seats are assigned to specific user accounts. See [Grant Access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-access/grant-access).
* **Where:** Seat assignment can be managed in the GitHub organization settings or via the REST API.
* **If all assigned seats are removed, the organization's Copilot plan is canceled.**
* **If a user with an active Copilot Pro, Copilot Pro+, or Copilot Max plan is assigned a seat in a Copilot Business or Copilot Enterprise plan**, their personal plan is automatically canceled, and a prorated refund for any remaining portion of their personal billing cycle is issued. The user will now use Copilot under the organization's policies.
* **If a single user receives a seat from multiple organizations within the same enterprise**, the enterprise is only billed once per billing cycle for that unique user. One organization that assigned Copilot to the user is chosen at random each month to be billed for the seat.
* **If a user is assigned both a  Copilot Business and a Copilot Enterprise seat from different organizations within the same enterprise**, only the Copilot Enterprise seat is billed. The charge is at the Copilot Enterprise rate from the time the Copilot Enterprise seat is assigned. The user will have access to the all the features and capabilities available under the Copilot Enterprise plan.
* **If a user receives a seat automatically because they were added to a team with Copilot access** (for example, via SCIM or team synchronization), the `copilot.cfb_seat_added` audit log event attributes the action to whoever originally granted Copilot access to that team, not the account that added the new team member. The membership change itself is attributed correctly to the actual actor on the corresponding `team.add_member` or `org.add_member` event. See [Review Audit Logs](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/review-audit-logs).
