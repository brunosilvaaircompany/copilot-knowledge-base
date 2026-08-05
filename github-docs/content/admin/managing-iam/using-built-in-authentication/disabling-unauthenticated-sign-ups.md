# Disabling unauthenticated sign-ups

## About unauthenticated sign-ups

When you use built-in authentication for your GitHub Enterprise Server instance, each person creates a personal account from an invitation or by signing up.
 By default, people who can access your instance while unauthenticated can create a new personal account on your instance.
 You can disable unauthenticated sign-ups and require an invitation to create a new user account on your instance.

Alternatively, you can configure external authentication for your GitHub Enterprise Server instance. If you use external authentication, you must invite people to use your instance through your authentication provider. For more information, see [Identity And Access Management Fundamentals](https://docs.github.com/en/admin/concepts/identity-and-access-management/identity-and-access-management-fundamentals#external-authentication).


## Disabling unauthenticated sign-ups

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings" sidebar, click **Privacy** and uncheck **Private mode**.

1. Deselect **Enable sign-up**.
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.
