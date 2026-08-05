# System overview

## About GitHub Enterprise Server

GitHub Enterprise Server is a self-hosted version of the GitHub platform.
 GitHub distributes GitHub Enterprise Server as a self-contained virtual appliance. After you provision a virtual machine and install the appliance, the instance runs a Linux operating system with a custom application stack.
 For more information, see [About GitHub Enterprise Server](https://docs.github.com/en/admin/overview/about-github-enterprise-server).

## Storage architecture

GitHub Enterprise Server requires two storage volumes, one mounted to the _root filesystem_ path (`/`) and the other to the _user filesystem_ path (`/data/user`). This architecture simplifies the upgrade, rollback, and recovery procedures by separating the running software environment from persistent application data.

The root filesystem is included in the distributed machine image. It contains the base operating system and the GitHub Enterprise Server application environment. The root filesystem should be treated as ephemeral. Any data on the root filesystem will be replaced when upgrading to future GitHub Enterprise Server releases.

The root storage volume is split into two equally-sized partitions. One of the partitions will be mounted as the root filesystem (`/`). The other partition is only mounted during upgrades and rollbacks of upgrades as `/mnt/upgrade`, to facilitate easier rollbacks if necessary. For example, if a 400GB root volume is allocated, there will be 200GB allocated to the root filesystem and 200GB reserved for the upgrades and rollbacks.

In new installations of 3.14 and later, the root storage volume is split into four partitions. Two small partitions are for the supported boot modes (BIOS and UEFI), and the other two equally large partitions are for the GitHub Enterprise Server primary, and upgrades and rollbacks.

The root filesystem contains files that store the following information. This list is not exhaustive.

* Custom certificate authority (CA) certificates (in `/usr/local/share/ca-certificates*`)
* Custom networking configurations
* Custom firewall configurations
* The replication state

The user filesystem contains files that store following configuration and data. This list is not exhaustive.

* Git repositories
* Databases
* Search indexes
* Content published on GitHub Pages sites
* Large files from Git Large File Storage
* Pre-receive hook environments

## Deployment topologies

By default, GitHub Enterprise Server runs as a standalone instance. You can increase the reliability and performance of GitHub Enterprise Server by using a different topology for your deployment.

* To mitigate the impact of system or network failures, you can deploy a passive replica instance. During an outage that affects your primary instance, you can manually fail over to the replica instance. For more information, see [About High Availability Configuration](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/configuring-high-availability/about-high-availability-configuration).
* You can configure multiple active replicas to improve performance for developers who are geographically distant from your primary instance. For more information, see [About Geo Replication](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/configuring-high-availability/about-geo-replication).
* Some enterprises with tens of thousands of developers may benefit from a cluster configuration that scales horizontally instead of vertically. For more information, see [About Clustering](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/configuring-clustering/about-clustering).

## Data retention and datacenter redundancy

> [!WARNING]
> Before using GitHub Enterprise Server in a production environment, we strongly recommend you set up backups and a disaster recovery plan.

GitHub Enterprise Server includes support for online and incremental backups with GitHub Enterprise Server Backup Utilities. You can take incremental snapshots over a secure network link (the SSH administrative port) over long distances for off-site or geographically dispersed storage. You can restore snapshots over the network into a newly provisioned instance at time of recovery in case of disaster at the primary datacenter.

In addition to network backups, both AWS (EBS) and VMware disk snapshots of the user storage volumes are supported while the instance is offline or in maintenance mode. Regular volume snapshots can be used as a low-cost, low-complexity alternative to network backups with GitHub Enterprise Server Backup Utilities if your service level requirements allow for regular offline maintenance.

For more information, see [Configuring Backups On Your Instance](https://docs.github.com/en/admin/backing-up-and-restoring-your-instance/configuring-backups-on-your-instance).

## Security

GitHub Enterprise Server runs on your infrastructure and is governed by access and security controls that you define, such as firewalls, network policies, IAM, monitoring, and VPNs. GitHub Enterprise Server is suitable for use by enterprises that are subject to regulatory compliance, which helps to avoid issues that arise from software development platforms in the public cloud.


GitHub Enterprise Server also includes additional security features.

* [Operating system, software, and patches](#operating-system-software-and-patches)
* [Network security](#network-security)
* [Application security](#application-security)
* [External services and support access](#external-services-and-support-access)
* [Encrypted communication](#encrypted-communication)
* [Users and access permissions](#users-and-access-permissions)
* [Authentication](#authentication)
* [Audit and access logging](#audit-and-access-logging)

### Operating system, software, and patches

GitHub Enterprise Server runs a customized Linux operating system with only the necessary applications and services. GitHub distributes patches for the instance's core operating system as part of its standard product release cycle. Patches address functionality, stability, and non-critical security issues for GitHub Enterprise Server. GitHub also provides critical security patches as needed outside of the regular release cycle.

GitHub Enterprise Server is provided as an appliance, and many of the operating system packages are modified compared to the usual Ubuntu distribution. We do not support modifying the underlying operating system for this reason (including operating system upgrades), which is aligned with the [GitHub Enterprise Server license and support agreement](https://enterprise.github.com/license), under section 11.3 Exclusions.

Currently, the base operating system for GitHub Enterprise Server is Ubuntu 20.04 LTS (Focal Fossa). Although Ubuntu 20.04 LTS reached the end of standard support in May 2025, we use Expanded Security Maintenance (ESM), which provides security updates through May 2030.

Regular patch updates are released on the GitHub Enterprise Server [releases](https://enterprise.github.com/releases) page, and the [release notes](/admin/release-notes) page provides more information. These patches typically contain upstream vendor and project security patches after they've been tested and quality approved by our engineering team. There can be a slight time delay from when the upstream update is released to when it's tested and bundled in an upcoming GitHub Enterprise Server patch release.

### Network security

GitHub Enterprise Server's internal firewall restricts network access to the instance's services. Only services necessary for the appliance to function are available over the network. For more information, see [Network Ports](https://docs.github.com/en/admin/configuring-settings/configuring-network-settings/network-ports).

### Application security

GitHub's application security team focuses full-time on vulnerability assessment, penetration testing, and code review for GitHub products, including GitHub Enterprise Server. GitHub also contracts with outside security firms to provide point-in-time security assessments of GitHub products.

### External services and support access

GitHub Enterprise Server can operate without any egress access from your network to outside services. You can optionally enable integration with external services for email delivery, external monitoring, and log forwarding. For more information, see [Configuring Email For Notifications](https://docs.github.com/en/admin/configuring-settings/configuring-user-applications-for-your-enterprise/configuring-email-for-notifications), [Setting Up External Monitoring With Collectd](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/collectd-metrics/setting-up-external-monitoring-with-collectd), and [Log Forwarding](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/exploring-user-activity-in-your-enterprise/log-forwarding).

You can manually collect and send troubleshooting data to GitHub Support. For more information, see [Providing Data To GitHub Support](https://docs.github.com/en/support/contacting-github-support/providing-data-to-github-support).

### Encrypted communication

GitHub designs GitHub Enterprise Server to run behind your corporate firewall. To secure communication over the wire, we encourage you to enable Transport Layer Security (TLS). GitHub Enterprise Server supports 2048-bit and higher commercial TLS certificates for HTTPS traffic. For more information, see [Configuring Tls](https://docs.github.com/en/admin/configuring-settings/hardening-security-for-your-enterprise/configuring-tls).

By default, the instance also offers Secure Shell (SSH) access for both repository access using Git and administrative purposes. For more information, see [About SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh) and [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

If you configure SAML authentication for your GitHub Enterprise Server instance, you can enable encrypted assertions between the instance and your SAML IdP. For more information, see [Using Saml For Enterprise Iam](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam#enabling-encrypted-assertions).

### Users and access permissions

GitHub Enterprise Server provides three types of accounts.

* The `admin` Linux user account has controlled access to the underlying operating system, including direct filesystem and database access. A small set of trusted administrators should have access to this account, which they can access over SSH. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
* User accounts in the instance's web application have full access to their own data and any data that other users or organizations explicitly grant.
* Site administrators in the instance's web application are user accounts that can manage high-level web application and instance settings, user and organization account settings, and repository data.

For more information about GitHub Enterprise Server's user permissions, see [Access Permissions On GitHub](https://docs.github.com/en/get-started/learning-about-github/access-permissions-on-github).

### Authentication

GitHub Enterprise Server provides four authentication methods.

* SSH public key authentication provides both repository access using Git and administrative shell access. For more information, see [About SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh) and [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
* Username and password authentication with HTTP cookies provides web application access and session management, with optional two-factor authentication (2FA). For more information, see [Configuring Built In Authentication](https://docs.github.com/en/admin/managing-iam/using-built-in-authentication/configuring-built-in-authentication).
* External LDAP, SAML, or CAS authentication using an LDAP service, SAML Identity Provider (IdP), or other compatible service provides access to the web application. For more information, see [Using Saml For Enterprise Iam](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam).
* OAuth and personal access tokens provide access to Git repository data and APIs for both external clients and services. For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

### Audit and access logging

GitHub Enterprise Server stores both traditional operating system and application logs. The application also writes detailed auditing and security logs, which GitHub Enterprise Server stores permanently. You can forward both types of logs in real time to multiple destinations via the `syslog-ng` protocol. For more information, see [Audit Log For An Enterprise](https://docs.github.com/en/admin/concepts/security-and-compliance/audit-log-for-an-enterprise) and [Log Forwarding](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/exploring-user-activity-in-your-enterprise/log-forwarding).

Access and audit logs include information like the following.

#### Access logs

* Full web server logs for both browser and API access
* Full logs for access to repository data over Git, HTTPS, and SSH protocols
* Administrative access logs over HTTPS and SSH

#### Audit logs

* User logins, password resets, 2FA requests, email setting changes, and changes to authorized applications and APIs
* Site administrator actions, such as unlocking user accounts and repositories
* Repository push events, access grants, transfers, and renames
* Organization membership changes, including team creation and destruction

## Open source dependencies for GitHub Enterprise Server

You can see a complete list of dependencies in your instance's version of GitHub Enterprise Server, as well as each project's license, at `http(s)://HOSTNAME/site/credits`.

Tarballs with a full list of dependencies and associated metadata are available on your instance.

* For dependencies common to all platforms, at `/usr/local/share/enterprise/dependencies-<GHE version>-base.tar.gz`
* For dependencies specific to a platform, at `/usr/local/share/enterprise/dependencies-<GHE version>-<platform>.tar.gz`

Tarballs are also available, with a full list of dependencies and metadata, at `https://enterprise.github.com/releases/<version>/download.html`.

## Further reading

* [Setting Up A Trial Of GitHub Enterprise Server](https://docs.github.com/en/admin/overview/setting-up-a-trial-of-github-enterprise-server)
* [Setting Up A GitHub Enterprise Server Instance](https://docs.github.com/en/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance)
