# Troubleshooting service hooks

## Getting information on deliveries

You can find information for the last response of all service hooks deliveries on any repository.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. Browse to the repository you're investigating.
1. In the navigation sidebar, click **Hooks**

1. Under the service hook having problems, click **Latest Delivery**.
1. Under **Remote Calls**, you'll see the headers that were used when POSTing to the remote server along with the response that the remote server sent back to your installation.

## Viewing the payload

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. Browse to the repository you're investigating.
1. In the navigation sidebar, click **Hooks**

1. Under the service hook having problems, click the **Latest Delivery** link.
1. Click **Delivery**.

## Viewing past deliveries

Deliveries are stored for 3 days.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. Browse to the repository you're investigating.
1. In the navigation sidebar, click **Hooks**

1. Under the service hook having problems, click the **Latest Delivery** link.
1. To view other deliveries to that specific hook, click **More for this Hook ID**.
