## About GitHub Enterprise Server cluster nodes

Each node in a GitHub Enterprise Server cluster is a virtual machine (VM) that runs the GitHub Enterprise Server software. Before you deploy a cluster, you can review hardware requirements, required services, and design recommendations.

> [!NOTE]
> GitHub Enterprise Server clustering must be configured with HTTPS.


## Hardware requirements

Each node must have a root volume, as well as a separate data volume. These are minimum recommendations. More resources may be required depending on your usage, such as user activity and selected integrations.

| Services | Minimum memory required | Minimum data volume free space required |
| :- | :- | :- |
| `job-server`,<br/>`memcache-server`,<br/>`web-server` | 14 GB | 1 GB |
| `consul-server`,<br/>`mysql-server`,<br/>`redis-server` | 14 GB | 10 GB |
| `git-server`,<br/>`metrics-server`,<br/>`pages-server`,<br/>`storage-server` | 14 GB | 10 GB |
| `elasticsearch-server` | 14 GB | 10 GB |

## Services required for clustering

GitHub Enterprise Server comprises a set of services. In a cluster, these services run across multiple nodes, and the instance balances requests between the nodes. The instance automatically stores redundant copies of data on separate nodes. Most services are equal peers with other instances of the same service. The exceptions to this distribution are the `mysql-server` and `redis-server` services, which operate with a single primary node with one or more replica nodes.

For adequate redundancy, use these minimum nodes operating each service.

> [!NOTE]
> Your environment's scaling requirements depend on many factors, including the size and number of repositories, number of users, and overall utilization.

## Example cluster configuration

The following example demonstrates a minimal cluster configuration, which includes 11 nodes that run the necessary services.

| Tiers | Services | Minimum nodes required |
| :- | :- | :- |
| Front end | `job-server`,<br/>`memcache-server`,<br/>`web-server` | 2 |
| Database | `consul-server`,<br/>`mysql-server`,<br/>`redis-server` | 3 |
| Storage | `git-server`,<br/>`metrics-server`,<br/>`pages-server`,<br/>`storage-server` | 3 |
| Search | `elasticsearch-server` | 3 |

## Cluster design recommendations

Clustering allows services that make up GitHub Enterprise Server to be scaled out independently of each other. This flexibility can be used to design and implement a cluster that fits organizations with different scalability requirements. For example, some organizations may need more storage throughput for large or frequent fetches, but web server usage may be relatively low. Another organization may have good performance with fewer storage resources, but need many nodes running `pages-server` or `elasticsearch-server`. Many different combinations are possible. Work with your account representative to determine the best cluster configuration for your specific needs.

* Spread redundant nodes across independent hardware. If you share CPU, memory, or storage devices, you'll reduce performance and introduce single points of failure. Shared networking components can also reduce throughput and increase risk of loss of connectivity in the event of an outage.
* Use fast storage. Storage area networks (SAN) are often optimized for maximum space utilization, availability and fault tolerance, not absolute throughput. GitHub Enterprise Server clustering provides redundancy and availability, and will perform best on the fastest storage available. Local SSD storage is recommended.
