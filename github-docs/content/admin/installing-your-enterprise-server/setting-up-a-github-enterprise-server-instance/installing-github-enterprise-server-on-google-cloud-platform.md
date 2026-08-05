# Installing GitHub Enterprise Server on Google Cloud Platform

## Prerequisites

* You must have a GitHub Enterprise license file. For more information, see [Setting Up A Trial Of GitHub Enterprise Server](https://docs.github.com/en/admin/overview/setting-up-a-trial-of-github-enterprise-server) and [Ghes License Files](https://docs.github.com/en/billing/concepts/enterprise-billing/ghes-license-files).

* You must have a Google Cloud Platform account capable of launching Google Compute Engine (GCE) virtual machine (VM) instances. For more information, see the [Google Cloud Platform website](https://cloud.google.com/) and the [Google Cloud Platform documentation](https://cloud.google.com/docs/).
* Most actions needed to launch your instance may also be performed using the [Google Cloud Platform Console](https://cloud.google.com/compute/docs/console). However, we recommend installing the gcloud compute command-line tool for initial setup. Examples using the gcloud compute command-line tool are included below. For more information, see the [gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/) installation and setup guide in the Google documentation.

## Hardware considerations

* [Minimum recommended requirements](#minimum-recommended-requirements)
* [Storage](#storage)
* [CPU and memory](#cpu-and-memory)

### Minimum recommended requirements

We recommend different hardware configurations depending on the number of user licenses for your GitHub Enterprise Server instance. If you provision more resources than the minimum recommended requirements, your instance will perform and scale better.

| User licenses | x86-64 vCPUs | Memory | Root storage | Attached (data) storage | IOPS |
| :- | -: | -: | -: | -: | -: |
| Trial, demo, or 10 light users | 4 | 32 GB | 400 GB | 500 GB | 600 |
| Up to 1,000  | 8 | 48 GB | 400 GB | 500 GB | 3000 |
| 1,000 to 3,000  | 16 | 64 GB | 400 GB | 1000 GB | 6000|
| 3,000 to 5,000 | 32 | 128 GB | 400 GB | 1500 GB | 9000 |
| 5,000 to 8,000 | 48 | 256 GB | 400 GB | 3000 GB | 12000|
| 8,000 to 10,000+ | 64 | 512 GB | 400 GB | 5000 GB | 15000 |


If you plan to enable GitHub Actions or GitHub Code Security for the users of your instance, more resources are required.

* GitHub Actions - increase both CPU and memory by at least 25%
* GitHub Code Security - increase both CPU and memory by at least 25%

These adjustments should be applied to the base requirements for each user tier. We recommend monitoring all changes to your resources, as further increases may be needed.

For more information about these requirements, see [Getting Started With GitHub Actions For GitHub Enterprise Server](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations).


If you plan to enable Container registry for the users of your instance, more resources are required. For more information about these requirements, see [Getting Started With GitHub Packages For Your Enterprise](https://docs.github.com/en/admin/configuring-packages/getting-started-with-github-packages-for-your-enterprise).

For more information about adjusting resources for an existing instance, see [Increasing Storage Capacity](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-storage-capacity) and [Increasing Cpu Or Memory Resources](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources).


### Storage

We recommend a high-performance SSD with high input/output operations per second (IOPS) and low latency for GitHub Enterprise Server. Workloads are I/O intensive. If you use a bare metal hypervisor, we recommend directly attaching the disk or using a disk from a storage area network (SAN).

Your instance requires a persistent data disk separate from the root disk. For more information, see [System Overview](https://docs.github.com/en/admin/overview/system-overview).

>[!WARNING]
>Root storage refers to the total size of your instance's root disk. When the instance is booted you will see 200GB available on the root filesystem. The remaining 200GB is reserved for upgrades. For more information, see [System Overview](https://docs.github.com/en/admin/overview/system-overview#storage-architecture).



To configure GitHub Actions, you must provide external blob storage. For more information, see [Getting Started With GitHub Actions For GitHub Enterprise Server](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server##external-storage-requirements).



The available space on the root filesystem will be 50% of the total disk size. You can resize your instance's root disk by building a new instance or using an existing instance. For more information, see [System Overview](https://docs.github.com/en/admin/overview/system-overview#storage-architecture) and [Increasing Storage Capacity](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-storage-capacity).

### CPU and memory

The CPU and memory resources that GitHub Enterprise Server requires depend on the levels of activity for users, automations, and integrations.

Any VMs you provision for your GitHub Enterprise Server instance must use the x86-64 CPU architecture. Other architectures are not supported, such as AArch64 or arm64.



If you plan to enable GitHub Actions for the users of your GitHub Enterprise Server instance, you may need to provision additional CPU and memory resources for your instance. For more information, see [Getting Started With GitHub Actions For GitHub Enterprise Server](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations).



When you increase CPU resources, GitHub recommends adding at least 6.5 GB of memory for each vCPU (up to 16 vCPUs) that you provision for the instance. When you use more than 16 vCPUs, you don't need to add 6.5 GB of memory for each vCPU, but you should monitor your instance to ensure it has enough memory.


> [!WARNING]
> We recommend that users configure webhook events to notify external systems of activity on GitHub Enterprise Server. Automated checks for changes, or _polling_, will negatively impact the performance and scalability of your instance. For more information, see [About Webhooks](https://docs.github.com/en/webhooks/about-webhooks).

For more information about monitoring the capacity and performance of GitHub Enterprise Server, see [Monitoring Your Instance](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance).

You can increase your instance's CPU or memory resources. For more information, see [Increasing Cpu Or Memory Resources](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources).


## Determining the machine type

Before launching your GitHub Enterprise Server instance on Google Cloud Platform, you'll need to determine the machine type that best fits the needs of your organization. To review the minimum recommended requirements for GitHub Enterprise Server, see [Minimum recommended requirements](#minimum-recommended-requirements).

You can always scale up your CPU or memory by resizing your instance. Changing the resources available to your instance requires downtime for your users, so GitHub recommends over-provisioning resources to account for scale.


GitHub recommends a general-purpose, high-memory machine for GitHub Enterprise Server. For more information, see [Machine types](https://cloud.google.com/compute/docs/machine-types#n2_high-memory_machine_types) in the Google Compute Engine documentation.

## Selecting the GitHub Enterprise Server image

1. Using the [gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/) command-line tool, list the public GitHub Enterprise Server images:

   ```shell
   gcloud compute images list --project github-enterprise-public --no-standard-images
   ```

1. Take note of the image name for the latest GCE image of GitHub Enterprise Server.

## Configuring the firewall

GCE virtual machines are created as a member of a network, which has a firewall. For the network associated with the GitHub Enterprise Server VM, you'll need to configure the firewall to allow the required ports listed in the table below. We recommend opening network ports selectively based on the network services you need to expose for administrative and user purposes. For more information, see [Network Ports](https://docs.github.com/en/admin/configuring-settings/configuring-network-settings/network-ports#administrative-ports), and [Firewall Rules Overview](https://cloud.google.com/vpc/docs/firewalls) in the Google Cloud Platform documentation.

1. Using the gcloud compute command-line tool, create the network. For more information, see [gcloud compute networks create](https://cloud.google.com/sdk/gcloud/reference/compute/networks/create) in the Google documentation.

   ```shell
   gcloud compute networks create NETWORK-NAME --subnet-mode auto
   ```

1. Create a firewall rule for each of the ports in the table below. For more information, see [gcloud compute firewall-rules](https://cloud.google.com/sdk/gcloud/reference/compute/firewall-rules/) in the Google documentation.

   ```shell
   $ gcloud compute firewall-rules create RULE-NAME \
   --network NETWORK-NAME \
   --allow tcp:22,tcp:25,tcp:80,tcp:122,udp:161,tcp:443,udp:1194,tcp:8080,tcp:8443,tcp:9418,icmp
   ```

   This table identifies the required ports and what each port is used for.

   | Port | Service | Description                                                |
|------|---------|------------------------------------------------------------|
| 22   | SSH     | Git over SSH access. Clone, fetch, and push operations to public/private repositories supported. |
| 25   | SMTP    | SMTP with encryption (STARTTLS) support. |
| 80   | HTTP    | Web application access. _All requests are redirected to the HTTPS port when SSL is enabled._ |
| 122  | SSH     | Instance shell access. _The default SSH port (22) is dedicated to application git+ssh network traffic._ |
| 161/UDP | SNMP | Required for network monitoring protocol operation. |
| 443  | HTTPS   | Web application and Git over HTTPS access. |
| 1194/UDP | VPN | Secure replication network tunnel in high availability configuration. _Encrypted using WireGuard._ |
| 8080 | HTTP    | Plain-text web based Management Console. _Not required unless SSL is disabled manually._ |
| 8443 | HTTPS   | Secure web based Management Console. _Required for basic installation and configuration._ |
| 9418 | Git     | Simple Git protocol port. Clone and fetch operations to public repositories only. _Unencrypted network communication._ If you have enabled private mode on your instance, then opening this port is only required if you also enabled anonymous Git read access. For more information, see [Enforcing Repository Management Policies In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access).
  |


## Allocating a static IP and assigning it to the VM

If this is a production appliance, we strongly recommend reserving a static external IP address and assigning it to the GitHub Enterprise Server VM. Otherwise, the public IP address of the VM will not be retained after restarts. For more information, see the Google guide [Reserving a Static External IP Address](https://cloud.google.com/compute/docs/configure-instance-ip-addresses).

In production High Availability configurations, both primary and replica appliances should be assigned separate static IP addresses.

## Creating the GitHub Enterprise Server instance

To create the GitHub Enterprise Server instance, you'll need to create a GCE instance with your GitHub Enterprise Server image and attach an additional storage volume for your instance data. For more information, see [Hardware considerations](#hardware-considerations).

1. Using the gcloud compute command-line tool, create a data disk to use as an attached storage volume for your instance data, and configure the size based on your user license count. For more information, see [gcloud compute disks create](https://cloud.google.com/sdk/gcloud/reference/compute/disks/create) in the Google documentation.

   ```shell
   gcloud compute disks create DATA-DISK-NAME --size DATA-DISK-SIZE --type DATA-DISK-TYPE --zone ZONE
   ```

1. Then create an instance using the name of the GitHub Enterprise Server image you selected, and attach the data disk. For more information, see [gcloud compute instances create](https://cloud.google.com/sdk/gcloud/reference/compute/instances/create) in the Google documentation.

   ```shell
   $ gcloud compute instances create INSTANCE-NAME \
   --machine-type n1-standard-8 \
   --image GITHUB-ENTERPRISE-IMAGE-NAME \
   --disk name=DATA-DISK-NAME \
   --metadata serial-port-enable=1 \
   --zone ZONE \
   --network NETWORK-NAME \
   --image-project github-enterprise-public
   ```

## Configuring the instance

To configure the instance, you must upload a license file, set the root Management Console password, configure the instance's settings, and restart the instance.


> [!WARNING]
> To prevent an attacker from compromising the new instance, ensure that you personally set the root Management Console password and create the first user as soon as possible.


1. Copy the virtual machine's public DNS name, and paste it into a web browser.

1. At the prompt, upload your license file and set a management console password. For more information, see [Download Your License](https://docs.github.com/en/billing/how-tos/manage-server-licenses/download-your-license).

1. In the [Management Console](/admin/administering-your-instance/administering-your-instance-from-the-web-ui), configure and save your desired settings.
 For more information, see [Configuring Settings](https://docs.github.com/en/admin/configuring-settings).
1. The instance will restart automatically.

1. Click **Visit your instance**.


## Further reading

* [System Overview](https://docs.github.com/en/admin/overview/system-overview)
* [About Upgrades To New Releases](https://docs.github.com/en/admin/overview/about-upgrades-to-new-releases)
