# Installing GitHub Enterprise Server on VMware

## Prerequisites

* You must have a GitHub Enterprise license file. For more information, see [Setting Up A Trial Of GitHub Enterprise Server](https://docs.github.com/en/admin/overview/setting-up-a-trial-of-github-enterprise-server) and [Ghes License Files](https://docs.github.com/en/billing/concepts/enterprise-billing/ghes-license-files).

* You must have a VMware vSphere ESXi Hypervisor, applied to a bare metal machine that will run your GitHub Enterprise Server instances. We support versions 5.5 to 8.0. The ESXi Hypervisor is free and does not include the (optional) vCenter Server. For more information, see [the VMware ESXi documentation](https://www.vmware.com/products/esxi-and-esx.html).
* You will need access to a vSphere Client. If you have vCenter Server you can use the vSphere Web Client. For more information, see the VMware guide [Log in to vCenter Server by Using the vSphere Web Client](https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/vsphere/8-0/vcenter-server-installation-and-setup-8-0.html).

## Hardware considerations

>[!NOTE]
>The root disk defaults to 200 GB. For non-cluster topologies, we recommend increasing it to 400 GB by updating the disk attributes in the OVF template before deployment.

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


## Downloading the GitHub Enterprise Server image

1. Download your license. For more information, see [Download Your License](https://docs.github.com/en/billing/how-tos/manage-server-licenses/download-your-license).

1. Navigate to the image you want to use for your new instance.

   * Navigate to [Release notes](/admin/release-notes).
   * In the right sidebar, click the version you want to download.
   * Click **Download GitHub Enterprise Server X.X.X**.

1. Under "GitHub On-premises", select the "Select your hypervisor" dropdown menu and click **VMware ESXi/vSphere (OVA)**.
1. Click **Download for VMware ESXi/vSphere (OVA)**.

## Creating the GitHub Enterprise Server instance

To create the instance, you'll need to import the GitHub Enterprise Server image to your virtual machine and attach an additional storage volume for your instance data. For more information, see [Hardware considerations](#hardware-considerations).


1. Using the vSphere Windows Client or the vCenter Web Client, import the GitHub Enterprise Server image you downloaded. For instructions, see the VMware guide [Deploy and Export OVF and OVA Templates](https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/vsphere/8-0/deploying-ovf-templates.html).
    * When selecting a datastore, choose one with sufficient space to host the VM's disks. For the minimum hardware specifications recommended for your instance size, see [Hardware considerations](#hardware-considerations). We recommend thick provisioning with lazy zeroing.
    * Leave the **Power on after deployment** box unchecked, as you will need to add an attached storage volume for your repository data after provisioning the VM.
1. Create a new virtual disk to use as an attached storage volume for your instance data, and configure the size based on your user license count. If reusing an existing disk, ensure that the disk is empty and there are no partitions.
 For instructions, see the VMware guide [Add a Hard Disk to a Virtual Machine](https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/vsphere/8-0/add-a-hard-disk-to-a-virtual-machine.html).

## Configuring the GitHub Enterprise Server instance

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
