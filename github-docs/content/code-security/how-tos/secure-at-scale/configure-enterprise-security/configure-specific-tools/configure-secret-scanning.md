# Configuring secret scanning for your appliance

## About secret scanning

If someone checks a secret with a known pattern into a repository, secret scanning catches the secret as it's checked in, and helps you mitigate the impact of the leak. Repository administrators are notified about any commit that contains a secret, and they can quickly view all detected secrets in the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab for the repository. See [Secret Scanning](https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning).

## Availability

When the enterprise has [GitHub Secret Protection](/get-started/learning-about-github/about-github-advanced-security) enabled, Secret scanning is available for organization-owned and user-owned repositories.

## Checking whether your license includes Advanced Security

You can identify if your enterprise has a license for Advanced Security products by reviewing your enterprise settings. For more information, see [Enabling GitHub Advanced Security For Your Enterprise](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/enabling-github-advanced-security-for-your-enterprise#checking-whether-your-license-includes-github-advanced-security).

## Prerequisites for secret scanning

* The SSSE3 (Supplemental Streaming SIMD Extensions 3) CPU flag needs to be enabled on the VM/KVM that runs GitHub Enterprise Server. For more information about SSSE3, see [Intel 64 and IA-32 Architectures Optimization Reference Manual](https://cdrdv2-public.intel.com/671488/248966-Software-Optimization-Manual-R047.pdf) in the Intel documentation.

* A license for GitHub Secret Protection or GitHub Advanced Security (see [GitHub Advanced Security](https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security))

* Secret scanning enabled in the management console (see [Enabling GitHub Advanced Security For Your Enterprise](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/enabling-github-advanced-security-for-your-enterprise))

### Checking support for the SSSE3 flag on your vCPUs

The SSSE3 set of instructions is required because secret scanning leverages hardware accelerated pattern matching to find potential credentials committed to your GitHub repositories. SSSE3 is enabled for most modern CPUs. You can check whether SSSE3 is enabled for the vCPUs available to your GitHub Enterprise Server instance.

1. Connect to the administrative shell for your GitHub Enterprise Server instance. See [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
1. Enter the following command:

   ```shell
   grep -iE '^flags.*ssse3' /proc/cpuinfo >/dev/null; echo $?
   ```

   If this returns the value `0`, it means that the SSSE3 flag is available and enabled. You can now enable secret scanning. See [Enabling secret scanning](#enabling-secret-scanning) below.

   If this doesn't return `0`, SSSE3 is not enabled on your VM/KVM. You need to refer to the documentation of the hardware/hypervisor on how to enable the flag, or make it available to guest VMs.

## Enabling secret scanning

> [!WARNING]
> * Changing this setting will cause user-facing services on GitHub Enterprise Server to restart. You should time this change carefully, to minimize downtime for users.
> * You should communicate any changes you plan to make to feature enablement settings to organization owners before making them, so as not to impact existing security configurations that have been rolled out by organizations in your enterprise.


1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings" sidebar, click **Security**.

1. Under "Security," select **Secret scanning**.
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



    Optionally, to allow your users to enable validity checks at the enterprise, organization, or repository level, configure validity checks for secret scanning.

1. Click **secret scanning validity checks**. For information about validity checks, see [Enable Validity Checks](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/enable-validity-checks#about-validity-checks).

    > [!NOTE]
    > Enabling validity checks will send outbound requests to partner services to verify detected secrets. This means secret metadata will leave your instance. You need to ensure that this aligns with your enterprise's security and compliance policies before enabling.

1. To run a simple connection test to verify that outbound connections are possible, click **Validity checks connection test**.


## Disabling secret scanning

> [!WARNING]
> * Changing this setting will cause user-facing services on GitHub Enterprise Server to restart. You should time this change carefully, to minimize downtime for users.
> * You should communicate any changes you plan to make to feature enablement settings to organization owners before making them, so as not to impact existing security configurations that have been rolled out by organizations in your enterprise.


1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings" sidebar, click **Security**.

1. Under "Security," deselect **Secret scanning**.
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.
