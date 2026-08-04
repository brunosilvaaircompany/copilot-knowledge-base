# Getting started with GitHub Packages for your enterprise

> [!NOTE]
> GitHub Packages on GitHub Enterprise Server does not currently support clustering.




## Step 1: Check whether GitHub Packages is available for your enterprise

GitHub Packages is available in GitHub Enterprise Server 3.0 or higher. If you're using an earlier version of GitHub Enterprise Server, you'll have to upgrade to use GitHub Packages. For more information about upgrading your GitHub Enterprise Server instance, see [About Upgrades To New Releases](https://docs.github.com/en/admin/overview/about-upgrades-to-new-releases).

## Step 2: Review hardware requirements

If you plan to enable Container registry for the users of your instance, at least 10% more CPU resources are required.

We recommend reviewing the levels of activity for users and automations on the instance to ensure that you have provisioned adequate CPU for your users. For more information, see [Monitoring Your Instance](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance).

For more information about minimum hardware requirements for your GitHub Enterprise Server instance, see the hardware considerations for your instance's platform.

* [AWS](/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance/installing-github-enterprise-server-on-aws#hardware-considerations)
* [Azure](/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance/installing-github-enterprise-server-on-azure#hardware-considerations)
* [Google Cloud Platform](/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance/installing-github-enterprise-server-on-google-cloud-platform#hardware-considerations)
* [Hyper-V](/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance/installing-github-enterprise-server-on-hyper-v#hardware-considerations)
* [OpenStack KVM](/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance/installing-github-enterprise-server-on-openstack-kvm#hardware-considerations)
* [VMware](/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance/installing-github-enterprise-server-on-vmware#hardware-considerations)

For more information about adjusting resources for an existing instance, see [Increasing Cpu Or Memory Resources](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources).

## Step 3: Enable GitHub Packages and configure external storage

GitHub Packages on GitHub Enterprise Server uses external blob storage to store your packages.

After enabling GitHub Packages for your GitHub Enterprise Server instance, you'll need to prepare your third-party storage bucket. The amount of storage required depends on your usage of GitHub Packages, and the setup guidelines can vary by storage provider.

Supported external storage providers
* Amazon Web Services (AWS) S3
* Azure Blob Storage
* MinIO

To enable GitHub Packages and configure third-party storage, see:
* [Enabling GitHub Packages With Aws](https://docs.github.com/en/admin/configuring-packages/enabling-github-packages-with-aws)
* [Enabling GitHub Packages With Azure Blob Storage](https://docs.github.com/en/admin/configuring-packages/enabling-github-packages-with-azure-blob-storage)
* [Enabling GitHub Packages With Minio](https://docs.github.com/en/admin/configuring-packages/enabling-github-packages-with-minio)

## Step 4: Specify the package ecosystems to support on your instance

Choose which package ecosystems you'd like to enable, disable, or set to read-only on your GitHub Enterprise Server instance. Available options are Container registry, Docker, RubyGems, npm, Apache Maven, Gradle, or NuGet.
 For more information, see [Configuring Package Ecosystem Support For Your Enterprise](https://docs.github.com/en/admin/configuring-packages/configuring-package-ecosystem-support-for-your-enterprise).

## Step 5: Ensure you have a TLS certificate for your package host URL, if needed

If subdomain isolation is enabled for your GitHub Enterprise Server instance, you will need to create and upload a TLS certificate that allows the package host URL for each ecosystem you want to use, such as `ghcr.io{% elsif ghes %}containers.HOSTNAME
`. Make sure each package host URL includes `https://`.

  You can create the certificate manually, or you can use _Let's Encrypt_. If you already use _Let's Encrypt_, you must request a new TLS certificate after enabling GitHub Packages. For more information about package host URLs, see [Enabling Subdomain Isolation](https://docs.github.com/en/admin/configuring-settings/hardening-security-for-your-enterprise/enabling-subdomain-isolation). For more information about uploading TLS certificates to GitHub Enterprise Server, see [Configuring Tls](https://docs.github.com/en/admin/configuring-settings/hardening-security-for-your-enterprise/configuring-tls).

## Step 6: Check for and rename reserved names

If you want to use the Docker ecosystem with subdomain isolation disabled, you **must** first rename any user or organization named `v2` on your GitHub Enterprise Server instance, prior to enabling Docker ecosystem support in the Management Console. Docker uses a `v2` account name to manage path conflicts with the Docker API, and once Docker registry support is enabled, you won't be able to use this name anymore.

You can view a full list of logins reserved for internal use by navigating to the "Reserved logins" page in the Site admin dashboard. For more information, see [About Reserved Usernames For GitHub Enterprise Server](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/about-reserved-usernames-for-github-enterprise-server#viewing-reserved-username).
