# About clustering

## About clustering for GitHub Enterprise Server

The cluster topology for GitHub Enterprise Server provides horizontal scaling for companies with tens of thousands of developers. GitHub recommends clustering if a single primary node would routinely experience resource exhaustion.

In a cluster, the instance provides services and distributes data across multiple virtual machines (VMs) that run the GitHub Enterprise Server software. Each VM is called a node. For more information, see [About Cluster Nodes](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/configuring-clustering/about-cluster-nodes).

<a name="is-clustering-right-for-my-organization"></a>

## Is clustering right for my environment?

Clustering provides better scalability by distributing load across multiple nodes. This horizontal scaling may be preferable for some organizations with tens of thousands of developers.
 However, setting up a redundant and scalable cluster requires careful planning. Compared to other topologies like high availability (HA), additional complexity affects installation, configuration, disaster recovery, and upgrades.

GitHub Enterprise Server requires low latency between nodes and is not intended for redundancy across geographic locations.

Clustering provides redundancy, but it is not intended to replace a high-availability configuration. Configuration and maintenance of a high-availability configuration is far simpler than clustering and will accommodate most environments. For more information, see [Configuring High Availability](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/configuring-high-availability) and [Differences Between Clustering And High Availability Ha](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/configuring-clustering/differences-between-clustering-and-high-availability-ha).



> [!NOTE]
> GitHub Packages on GitHub Enterprise Server does not currently support clustering.




## How do I get access to clustering?

GitHub designed the cluster topology for specific scaling situations. Clustering is not intended for every company or environment. If you're interested in clustering for your environment, contact your dedicated account manager or [GitHub's Sales team](https://github.com/enterprise/contact).
