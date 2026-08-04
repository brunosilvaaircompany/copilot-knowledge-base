# Increasing CPU or memory resources

## About increasing CPU or memory resources

You can accommodate more resource-intensive workloads on your GitHub Enterprise Server instance by increasing the VM's CPU or memory resources.

The process for allocating new system resources varies by virtualization platform and resource type. You should always configure the monitoring and alerting of key system resources. For more information, see [Monitoring Your Instance](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance).


You can always scale up your CPU or memory by resizing your instance. Changing the resources available to your instance requires downtime for your users, so GitHub recommends over-provisioning resources to account for scale.


## Adding CPU or memory resources on AWS

To add CPU or memory resources for an instance on AWS, you must change the instance's type. You must have access to your company's AWS infrastructure, and you must be familiar with using either the AWS management console or the `aws ec2` command-line interface to manage EC2 instances. For more information, see [Change the instance type](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html) in the AWS documentation.

You can review resizing considerations, see supported instance types, and learn how to resize an instance on AWS.

* [Resizing considerations for AWS](/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources#resizing-considerations-for-aws)
* [Supported instance types on AWS](/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources#supported-instance-types-on-aws)
* [Resizing an instance on AWS](/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources#resizing-an-instance-on-aws)

### Resizing considerations for AWS

Before increasing CPU or memory resources for your GitHub Enterprise Server instance, review the following recommendations.

* **Scale your memory with CPUs**. When you increase CPU resources, GitHub recommends adding at least 6.5 GB of memory for each vCPU (up to 16 vCPUs) that you provision for the instance. When you use more than 16 vCPUs, you don't need to add 6.5 GB of memory for each vCPU, but you should monitor your instance to ensure it has enough memory.

* **Assign an Elastic IP address to the instance**. If you haven't assigned an Elastic IP to your instance, you'll have to adjust the DNS A records for your GitHub Enterprise Server host after the restart to account for the change in public IP address. Once your instance restarts, the instance keeps the Elastic IP if you launched the instance in a virtual private cloud (VPC). If you create the instance in an EC2-Classic network, you must manually reassign the Elastic IP to the instance.

### Supported instance types on AWS

You need to determine the instance type you would like to upgrade to based on the CPU and memory specifications.


GitHub recommends a memory-optimized instance for GitHub Enterprise Server. For more information, see [Amazon EC2 Instance Types](https://aws.amazon.com/ec2/instance-types/#Memory_Optimized) on the Amazon EC2 website.


### Resizing an instance on AWS

To increase the resources available to a GitHub Enterprise Server instance on AWS, you must shut down the instance, change the instance's type, then restart the instance.

1. If your instances runs in EC2-Classic, note both the Elastic IP address associated with the instance and the instance's ID.
1. Communicate the upcoming downtime to your users and enable maintenance mode. For more information, see the following articles.

   * [Customizing User Messages For Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/communicating-information-to-users-in-your-enterprise/customizing-user-messages-for-your-enterprise#creating-a-mandatory-message)
   * [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode)

1. To stop the instance, SSH into the instance, then run the following command. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

   ```shell
   sudo poweroff
   ```

1. On AWS, change the instance type.
1. Start the instance.
1. If your instance runs in EC2-Classic, after you restart the instance, re-associate the Elastic IP address.
1. After the instance has fully restarted and you can reach it, verify that the new resource configuration is recognized. SSH into the instance, then run the following command.

   ```shell
   ghe-system-info
   ```

1. Optionally, you can validate the changes by configuring an IP exception list to allow access from specified IP addresses. For more information, see [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list).

1. If you configured a user message, remove the message.
1. Disable maintenance mode.


## Adding CPU or memory resources on Microsoft Azure

To add CPU or memory resources for an instance on Microsoft Azure, you must change the instance's size. You must have access to your company's Microsoft Azure infrastructure, and you must be familiar with the Azure Portal, Azure CLI, or Azure PowerShell to manage Azure instances. For more information, see [Change the size of a virtual machine](https://learn.microsoft.com/en-us/azure/virtual-machines/resize-vm?tabs=portal) on Microsoft Learn.

You can review resizing considerations, see supported instance types, and learn how to resize an instance on Microsoft Azure.

* [Resizing considerations for Microsoft Azure](/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources#resizing-considerations-for-microsoft-azure)
* [Supported instance types on Microsoft Azure](/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources#supported-instance-types-on-microsoft-azure)
* [Resizing an instance on Microsoft Azure](/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources#resizing-an-instance-on-microsoft-azure)

### Resizing considerations for Microsoft Azure

Before increasing CPU or memory resources for your GitHub Enterprise Server instance, review the following recommendations.

* **Scale your memory with CPUs**. When you increase CPU resources, GitHub recommends adding at least 6.5 GB of memory for each vCPU (up to 16 vCPUs) that you provision for the instance. When you use more than 16 vCPUs, you don't need to add 6.5 GB of memory for each vCPU, but you should monitor your instance to ensure it has enough memory.

* **Assign a static IP address to the instance**. If you haven't assigned a static IP to your instance, you might have to adjust the DNS A records for your GitHub Enterprise Server host after the restart to account for the change in IP address.

### Supported instance types on Microsoft Azure

You need to determine the instance type you would like to upgrade to based on the CPU and memory specifications.


The GitHub Enterprise Server appliance requires a premium storage data disk, and is supported on any Azure VM that supports premium storage. Azure VM types with the `s` suffix support premium storage. For more information, see [What disk types are available in Azure?](https://docs.microsoft.com/en-us/azure/virtual-machines/disks-types#premium-ssd) and [Azure premium storage: design for high performance](https://docs.microsoft.com/en-us/azure/virtual-machines/premium-storage-performance) in the Azure documentation.

GitHub recommends a memory-optimized VM for GitHub Enterprise Server. For more information, see [Memory optimized virtual machine sizes](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-memory) in the Azure documentation.

GitHub Enterprise Server supports any region that supports your VM type. For more information about the supported regions for each VM, see Azure's [Products available by region](https://azure.microsoft.com/regions/services/).


### Resizing an instance on Microsoft Azure

To increase the resources available to a GitHub Enterprise Server instance on Microsoft Azure, you must change the VM's size. Changing the VM's size will cause the VM to restart. In some cases, you must deallocate the VM first. You may need to deallocate the VM if the new size is not available on the hardware cluster that is currently hosting the VM.

1. Communicate the upcoming downtime to your users and enable maintenance mode. For more information, see the following articles.

   * [Customizing User Messages For Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/communicating-information-to-users-in-your-enterprise/customizing-user-messages-for-your-enterprise#creating-a-mandatory-message)
   * [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode)

1. To stop the instance, SSH into the instance, then run the following command. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

   ```shell
   sudo poweroff
   ```

1. On Azure, to resize the VM, follow the instructions in [Change the size of a virtual machine](https://learn.microsoft.com/en-us/azure/virtual-machines/resize-vm?tabs=portal) on Microsoft Learn.
1. After the instance has fully restarted and you can reach it, verify that the new resource configuration is recognized. SSH into the instance, then run the following command.

   ```shell
   ghe-system-info
   ```

1. Optionally, you can validate the changes by configuring an IP exception list to allow access from specified IP addresses. For more information, see [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list).

1. If you configured a user message, remove the message.
1. Disable maintenance mode.


## Adding CPU or memory resources for OpenStack KVM

To increase the resources available to a GitHub Enterprise Server instance on OpenStack KVM, you must have access to your company's OpenStack KVM infrastructure, and you must stop the VM and then select a new instance flavor.

When you increase CPU resources, GitHub recommends adding at least 6.5 GB of memory for each vCPU (up to 16 vCPUs) that you provision for the instance. When you use more than 16 vCPUs, you don't need to add 6.5 GB of memory for each vCPU, but you should monitor your instance to ensure it has enough memory.


1. Using OpenStack KVM, take a snapshot of the current instance.
1. Communicate the upcoming downtime to your users and enable maintenance mode. For more information, see the following articles.

   * [Customizing User Messages For Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/communicating-information-to-users-in-your-enterprise/customizing-user-messages-for-your-enterprise#creating-a-mandatory-message)
   * [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode)

1. To stop the instance, SSH into the instance, then run the following command. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

   ```shell
   sudo poweroff
   ```

1. On OpenStack KVM, select a new instance flavor that has the desired CPU or memory resources.
1. After the instance has fully restarted and you can reach it, verify that the new resource configuration is recognized. SSH into the instance, then run the following command.

   ```shell
   ghe-system-info
   ```

1. Optionally, you can validate the changes by configuring an IP exception list to allow access from specified IP addresses. For more information, see [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list).

1. If you configured a user message, remove the message.
1. Disable maintenance mode.


## Adding CPU or memory resources for VMware ESXi

To increase the resources available to a GitHub Enterprise Server instance on VMware, you must have access to your company's VMware infrastructure, and you must stop the VM and then adjust the resources in VMWare ESXi.

When you increase CPU resources, GitHub recommends adding at least 6.5 GB of memory for each vCPU (up to 16 vCPUs) that you provision for the instance. When you use more than 16 vCPUs, you don't need to add 6.5 GB of memory for each vCPU, but you should monitor your instance to ensure it has enough memory.


1. Communicate the upcoming downtime to your users and enable maintenance mode. For more information, see the following articles.

   * [Customizing User Messages For Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/communicating-information-to-users-in-your-enterprise/customizing-user-messages-for-your-enterprise#creating-a-mandatory-message)
   * [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode)

1. To stop the instance, SSH into the instance, then run the following command. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

   ```shell
   sudo poweroff
   ```

1. To the VM's settings on the VMware ESXi host using the vSphere Client, select the VM, then click **Edit Settings**.
1. Under "Hardware", adjust the CPU or memory resources allocated to the VM.
1. To start the virtual machine, click **OK**.
1. After the instance has fully restarted and you can reach it, verify that the new resource configuration is recognized. SSH into the instance, then run the following command.

   ```shell
   ghe-system-info
   ```

1. Optionally, you can validate the changes by configuring an IP exception list to allow access from specified IP addresses. For more information, see [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list).

1. If you configured a user message, remove the message.
1. Disable maintenance mode.
