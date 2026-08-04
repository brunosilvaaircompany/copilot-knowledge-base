# Installing GitHub Enterprise Server on Hyper-V

## Prerequisites

* You must have a GitHub Enterprise license file. For more information, see [Setting Up A Trial Of GitHub Enterprise Server](https://docs.github.com/en/admin/overview/setting-up-a-trial-of-github-enterprise-server) and [Ghes License Files](https://docs.github.com/en/billing/concepts/enterprise-billing/ghes-license-files).

* You must have Windows Server 2008 through Windows Server 2022, which supports Hyper-V.
* Most actions needed to create your virtual machine (VM) may also be performed using the [Hyper-V Manager](https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/remotely-manage-hyper-v-hosts). However, we recommend using the Windows PowerShell command-line shell for initial setup. Examples using PowerShell are included below. For more information, see the Microsoft guide [Getting Started with Windows PowerShell](https://docs.microsoft.com/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-5.1).

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


## Should I use VMotion?

VMotion can be exceptionally helpful for general resource management, however the impact to the guest instance can be significant. With larger GitHub Enterprise Server instances (8 CPU/64 GB RAM and above), a VMotion event may result in a full outage of the GitHub Enterprise Server to end users as a result of dramatically reduced CPU, RAM, and storage IOPS. With this in mind, GitHub Enterprise Server should be considered a "highly latency sensitive" application.

For large(r) deployments on VMWare that have Distributed Resource Scheduler (DRS) enabled, we would recommend configuring a VM-to-Host affinity rule for your GitHub Enterprise Server to try and keep the virtual appliance on a single host. If a migration with VMotion is required, we'd recommend considering this a "planned outage", and placing GitHub Enterprise Server into maintenance mode until the migration is complete.

We also recommend that the ESXi Power Management Setting be configured to "High Performance". We have seen cases where overall system performance can be negatively impacted if this is left at "Balanced".

## Downloading the GitHub Enterprise Server image

1. Download your license. For more information, see [Download Your License](https://docs.github.com/en/billing/how-tos/manage-server-licenses/download-your-license).

1. Navigate to the image you want to use for your new instance.

   * Navigate to [Release notes](/admin/release-notes).
   * In the right sidebar, click the version you want to download.
   * Click **Download GitHub Enterprise Server X.X.X**.

1. Under "GitHub On-premises", select the "Select your hypervisor" dropdown menu and click **Hyper-V (VHD)**.
1. Click **Download for Hyper-V (VHD)**.

## Creating the GitHub Enterprise Server instance

To create the instance, you'll need to import the GitHub Enterprise Server image to your virtual machine and attach an additional storage volume for your instance data. For more information, see [Hardware considerations](#hardware-considerations).


1. In PowerShell, create a new Generation 1 virtual machine, configure the size based on your user license count, and attach the GitHub Enterprise Server image you downloaded. For more information, see [New-VM](https://docs.microsoft.com/powershell/module/hyper-v/new-vm?view=win10-ps) in the Microsoft documentation.

   ```shell
   PS C:\> New-VM -Generation 1 -Name VM_NAME -MemoryStartupBytes MEMORY_SIZE -BootDevice VHD -VHDPath PATH_TO_VHD  
   ```

1. Create a new virtual disk to use as an attached storage volume for your instance data, and configure the size based on your user license count. If reusing an existing disk, ensure that the disk is empty and there are no partitions.
 Replace `PATH_TO_DATA_DISK` with the path to the location where you create the disk. For more information, see [New-VHD](https://docs.microsoft.com/powershell/module/hyper-v/new-vhd?view=win10-ps) in the Microsoft documentation.

   ```shell
   PS C:\> New-VHD -Path PATH_TO_DATA_DISK -SizeBytes DISK_SIZE
   ```

1. Attach the data disk to your instance. For more information, see [Add-VMHardDiskDrive](https://docs.microsoft.com/powershell/module/hyper-v/add-vmharddiskdrive?view=win10-ps) in the Microsoft documentation.

   ```shell
   PS C:\> Add-VMHardDiskDrive -VMName VM_NAME -Path PATH_TO_DATA_DISK
   ```

1. Start the VM. For more information, see [Start-VM](https://docs.microsoft.com/powershell/module/hyper-v/start-vm?view=win10-ps) in the Microsoft documentation.

   ```shell
   PS C:\> Start-VM -Name VM_NAME
   ```

1. Get the IP address of your VM. For more information, see [Get-VMNetworkAdapter](https://docs.microsoft.com/powershell/module/hyper-v/get-vmnetworkadapter?view=win10-ps) in the Microsoft documentation.

   ```shell
   PS C:\> (Get-VMNetworkAdapter -VMName VM_NAME).IpAddresses
   ```

1. Copy the VM's IP address and paste it into a web browser.

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
