# Installing GitHub Enterprise Server on AWS

## Prerequisites

* You must have a GitHub Enterprise license file. For more information, see [Setting Up A Trial Of GitHub Enterprise Server](https://docs.github.com/en/admin/overview/setting-up-a-trial-of-github-enterprise-server) and [Ghes License Files](https://docs.github.com/en/billing/concepts/enterprise-billing/ghes-license-files).

* You must have an AWS account capable of launching EC2 instances and creating EBS volumes. For more information, see the [Amazon Web Services website](https://aws.amazon.com/).
* Most actions needed to launch your GitHub Enterprise Server instance may also be performed using the AWS management console. However, we recommend installing the AWS command line interface (CLI) for initial setup. Examples using the AWS CLI are included below. For more information, see Amazon's guides [Working with the AWS Management Console](https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/getting-started.html) and [What is the AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html).

This guide assumes you are familiar with the following AWS concepts:

* [Launching EC2 Instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/LaunchingAndUsingInstances.html)
* [Managing EBS Volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html)
* [Using Security Groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html) (For managing network access to your instance)
* [Elastic IP Addresses (EIP)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) (Strongly recommended for production environments)
* [EC2 and Virtual Private Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-vpc.html) (If you plan to launch into a Virtual Private Cloud)
* [AWS Pricing](https://aws.amazon.com/pricing/) (For calculating and managing costs)

For a diagram that provides an architectural overview, see the [AWS Architecture Diagram for Deploying GitHub Enterprise Server](/assets/images/enterprise/enterprise-server/installing-github-enterprise-server-on-aws.png).

This guide recommends the principle of least privilege when setting up your GitHub Enterprise Server instance on AWS. For more information, refer to the [AWS Identity and Access Management (IAM) documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege).

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


### Storage volume performance recommendations for AWS

GitHub Enterprise Server is I/O intensive and requires high-performance storage for both the root volume and data volume to ensure optimal performance. Both volumes need high IOPS and low latency, as insufficient disk I/O is a common cause of performance degradation and service disruptions.

When selecting Amazon EBS volume types, consider the following guidance:

* For most deployments, `gp3` volumes provide a good starting point with configurable IOPS and throughput
* For larger or high-activity deployments, `io1` or `io2` volumes may be more appropriate due to their consistent performance characteristics
* Very large or mission-critical deployments may benefit from `io2 Block Express` for the highest performance levels

> [!IMPORTANT]
> The optimal storage configuration for your instance will vary significantly based on your specific usage patterns. Factors that increase I/O requirements include:
>
> * Number of active users and repositories
> * CI/CD workload volume and frequency
> * API usage patterns and automation
> * Git operation frequency and repository sizes
>
> We strongly recommend continuously monitoring your instance's disk performance in the Management Console metrics dashboard. Pay particular attention to:
>
> * **Disk queue length**: Should remain near zero.
> * **I/O utilization**: Sustained periods above 80% indicate need for more IOPS.
> * **Disk latency**: Should remain below 1-2ms.
>
> Be prepared to adjust your storage configuration as your usage patterns evolve. Scale up IOPS allocation proactively if you observe performance bottlenecks to prevent service degradation.

For more information about Amazon EBS volume types, see [Amazon EBS volume types](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html#vol-type-ssd) in the AWS documentation.

## Determining the instance type

Before launching your GitHub Enterprise Server instance on AWS, you'll need to determine the machine type that best fits the needs of your organization. To review the minimum recommended requirements for GitHub Enterprise Server, see [Minimum recommended requirements](#minimum-recommended-requirements).

You can always scale up your CPU or memory by resizing your instance. Changing the resources available to your instance requires downtime for your users, so GitHub recommends over-provisioning resources to account for scale.


GitHub recommends a memory-optimized instance for GitHub Enterprise Server. For more information, see [Amazon EC2 Instance Types](https://aws.amazon.com/ec2/instance-types/#Memory_Optimized) on the Amazon EC2 website.


## Selecting the GitHub Enterprise Server AMI

You can select an Amazon Machine Image (AMI) for GitHub Enterprise Server using the GitHub Enterprise Server portal or the AWS CLI.

AMIs for GitHub Enterprise Server are available in the AWS GovCloud (US-East and US-West) region. This allows US customers with specific regulatory requirements to run GitHub Enterprise Server in a federally compliant cloud environment. For more information on AWS's compliance with federal and other standards, see [AWS's GovCloud (US) page](https://aws.amazon.com/govcloud-us/) and [AWS's compliance page](https://aws.amazon.com/compliance/).

### Using the GitHub Enterprise Server portal to select an AMI

1. Navigate to the image you want to use for your new instance.

   * Navigate to [Release notes](/admin/release-notes).
   * In the right sidebar, click the version you want to download.
   * Click **Download GitHub Enterprise Server X.X.X**.

1. Under "GitHub in the Cloud", select the "Select your platform" dropdown menu, and click **Amazon Web Services**.
1. Select the "Select your AWS region" drop-down menu, and click your desired region.
1. Take note of the AMI ID that is displayed.

### Using the AWS CLI to select an AMI

1. Using the AWS CLI, get a list of GitHub Enterprise Server images published by GitHub's AWS owner IDs (`025577942450` for GovCloud, and `895557238572` for other regions). For more information, see [describe-images](https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-images.html) in the AWS documentation.

   ```shell
   aws ec2 describe-images \
   --owners OWNER_ID \
   --query 'sort_by(Images,&Name)[*].{Name:Name,ImageID:ImageId}' \
   --output=text
   ```

1. Take note of the AMI ID for the latest GitHub Enterprise Server image.

## Creating a security group

If you're setting up your AMI for the first time, you will need to create a security group and add a new security group rule for each port in the table below. For more information, see the AWS guide [Using Security Groups](https://docs.aws.amazon.com/cli/latest/userguide/cli-ec2-sg.html).

1. Using the AWS CLI, create a new security group. For more information, see [create-security-group](https://docs.aws.amazon.com/cli/latest/reference/ec2/create-security-group.html) in the AWS documentation.

   ```shell
   aws ec2 create-security-group --group-name SECURITY_GROUP_NAME --description "SECURITY GROUP DESCRIPTION"
   ```

1. Take note of the security group ID (`sg-xxxxxxxx`) of your newly created security group.

1. Create a security group rule for each of the ports in the table below. We recommend opening network ports selectively based on the network services you need to expose for administrative and user purposes. For more information, see [Network Ports](https://docs.github.com/en/admin/configuring-settings/configuring-network-settings/network-ports#administrative-ports), and [authorize-security-group-ingress](https://docs.aws.amazon.com/cli/latest/reference/ec2/authorize-security-group-ingress.html) in the AWS documentation.

   ```shell
   aws ec2 authorize-security-group-ingress --group-id SECURITY_GROUP_ID --protocol PROTOCOL --port PORT_NUMBER --cidr SOURCE IP RANGE
   ```

   This table identifies what each port is used for.

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


## Creating the GitHub Enterprise Server instance

To create the instance, you'll need to launch an EC2 instance with your GitHub Enterprise Server AMI and attach an additional storage volume for your instance data. For more information, see [Hardware considerations](#hardware-considerations).

> [!NOTE]
> You can encrypt the data disk to gain an extra level of security and ensure that any data you write to your instance is protected. There is a slight performance impact when using encrypted disks. If you decide to encrypt your volume, we strongly recommend doing so **before** starting your instance for the first time. For more information, see the [Amazon guide on EBS encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html).

> [!WARNING]
> If you decide to enable encryption after you've configured your instance, you will need to migrate your data to the encrypted volume, which will incur some downtime for your users.

### Launching an EC2 instance

In the AWS CLI, launch an EC2 instance using your AMI and the security group you created. Attach a new block device to use as a storage volume for your instance data, and configure the size based on your user license count. For more information, see [run-instances](https://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html) in the AWS documentation.

```shell
aws ec2 run-instances \
  --security-group-ids SECURITY_GROUP_ID \
  --instance-type INSTANCE_TYPE \
  --image-id AMI_ID \
  --block-device-mappings '[{"DeviceName":"/dev/xvdf","Ebs":{"VolumeSize":SIZE,"VolumeType":"TYPE"}}]' \
  --region REGION \
  --ebs-optimized
```

### Allocating an Elastic IP and associating it with the instance

If this is a production instance, we strongly recommend allocating an Elastic IP (EIP) and associating it with the instance before proceeding to GitHub Enterprise Server configuration. Otherwise, the public IP address of the instance will not be retained after instance restarts. For more information, see [Allocating an Elastic IP Address](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-allocating) and [Associating an Elastic IP Address with a Running Instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-associating) in the Amazon documentation.

Both primary and replica instances should be assigned separate EIPs in production High Availability configurations. For more information, see [Configuring High Availability](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/configuring-high-availability).

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
