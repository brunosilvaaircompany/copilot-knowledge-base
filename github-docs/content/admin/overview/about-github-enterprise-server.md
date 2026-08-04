# About GitHub Enterprise Server

GitHub Enterprise Server is a self-hosted version of the GitHub platform.
 Your business can benefit from increased control and avoid issues associated the public cloud, while your developers can benefit from familiar features and workflows from GitHub.com.

GitHub Enterprise Server is suitable for enterprises that are subject to regulatory compliance. It runs on your infrastructure and is governed by access and security controls that you define, such as firewalls, network policies, IAM, monitoring, and VPNs.

If your main compliance requirement is for your company's data to reside in a specific region, you may want to consider GitHub Enterprise Cloud with data residency. With this option, you won't need to schedule downtime for maintenance or upgrades, and your users will have access to the latest features from GitHub.com, such as GitHub Copilot. See [About GitHub Enterprise Cloud With Data Residency](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-github-enterprise-cloud-with-data-residency) in the GitHub Enterprise Cloud documentation.

GitHub Enterprise Server is a deployment option for the GitHub Enterprise plan. To learn about available features and assess other deployment options, see [About GitHub For Enterprises](https://docs.github.com/en/admin/overview/about-github-for-enterprises).

## Features and releases

GitHub Enterprise Server is constantly improving, with new functionality and bug fixes introduced through feature and patch releases.


Most features are released on GitHub.com first, then come to GitHub Enterprise Server through the release process. You can see which features we're working on in the [GitHub public roadmap](https://github.com/github/roadmap#github-public-roadmap).

### Optional features

You can also configure optional features on GitHub Enterprise Server to improve the software development lifecycle for your enterprise.

* **GitHub Actions:** Automate CI/CD and development workflows
* **GitHub Code Security:** Automate detection and remediation of vulnerabilities in code and dependencies
* **GitHub Secret Protection:** Block users from leaking secrets and identify and remediate historic leaks

* **GitHub Connect:** Benefit from data and features on GitHub.com
* **GitHub Packages:** Host software packages for your enterprise

## How do I deploy GitHub Enterprise Server?

GitHub distributes GitHub Enterprise Server as a self-contained virtual appliance. After you provision a virtual machine and install the appliance, the instance runs a Linux operating system with a custom application stack.
 Installing third-party software or making changes to the underlying operating system is not supported.

You can deploy GitHub Enterprise Server to a virtualization hypervisor within your on-premises datacenter, or to a public cloud service. Images obtained from sources other than the channels listed below are not supported.

We publish images through:
 * [GitHub Enterprise Releases](https://enterprise.github.com/releases/)
 * [Microsoft Marketplace](https://marketplace.microsoft.com/) (only images published by GitHub or Microsoft are supported)

### Supported on-premises hypervisors

* Microsoft Hyper-V
* OpenStack KVM
* VMware ESXi

### Supported cloud services

* Amazon Web Services (AWS)
* Google Cloud Platform (GCP)
* Microsoft Azure

## Keeping GitHub Enterprise Server updated

As an administrator, you are responsible for keeping your GitHub Enterprise Server instance up to date. GitHub regularly releases updates for GitHub Enterprise Server, including OS-level security patches. Updates are delivered either as upgrade packages or as hotpatches. Apply updates promptly to maintain the security, stability, and performance of your environment. For more information about the upgrade process, see [Overview Of The Upgrade Process](https://docs.github.com/en/admin/upgrading-your-instance/preparing-to-upgrade/overview-of-the-upgrade-process).

You can manually install upgrade packages or hotpatches. You can also enable automatic updates to apply eligible hotpatches automatically. Automatic updates do not replace planned full upgrades. For more information, see [Upgrading With An Upgrade Package](https://docs.github.com/en/admin/upgrading-your-instance/performing-an-upgrade/upgrading-with-an-upgrade-package), [Upgrading With A Hotpatch](https://docs.github.com/en/admin/upgrading-your-instance/performing-an-upgrade/upgrading-with-a-hotpatch), and [Enabling Automatic Update Checks](https://docs.github.com/en/admin/upgrading-your-instance/preparing-to-upgrade/enabling-automatic-update-checks).

For information about recent features, bug fixes, and security updates, see the [release notes](/admin/release-notes).

## Administrative options

You can give certain employees administrative access to your GitHub Enterprise Server instance. GitHub has found that people with Linux administration experience are more successful with deployment and maintenance.

Administrators can:

* Configure and monitor the instance via browser, administrative SSH access, and REST or GraphQL APIs
* Set up external authentication using CAS, LDAP, or SAML
* Set usage policies to ensure compliance with business rules or regulatory restrictions

## Backups and availability

GitHub Enterprise Server provides options for safeguarding against data loss or service disruptions.

* To back up configuration and user data, you can take regular snapshots of your instance using our Backup Utilities system.
* To increase reliability, you can configure a passive replica instance to fail over to in the event of a system or network failure.
* To improve performance, you can configure active replicas to scale the instance for dispersed users or high demand.

## Getting started

You can sign up for a free, 45-day trial of GitHub Enterprise Server. See [Setting Up A Trial Of GitHub Enterprise Server](https://docs.github.com/en/admin/overview/setting-up-a-trial-of-github-enterprise-server).

If you're ready to get started with a production instance, see [Getting Started With GitHub Enterprise Server](https://docs.github.com/en/get-started/onboarding/getting-started-with-github-enterprise-server).
