# About storage of your data with data residency

When you adopt GitHub Enterprise Cloud with data residency, you can choose where your company's code and data are stored. Your enterprise will be hosted on a dedicated subdomain of GHE.com.

Data residency makes it easy to separate open source and enterprise work, and helps you meet specific data residency compliance requirements.

The available regions are:

* EU (includes Azure regions in EFTA countries, currently Norway and Switzerland)
* Australia
* US
* Japan

In the future, GitHub plans to offer data residency in more regions.


Although your code and user data are stored within your chosen region, GitHub may store certain types of data outside your region, and may need to transfer some data outside your region.

If you are in doubt about any aspect of data residency, contact your account manager.

## Data stored in your region

GitHub stores the following data for your enterprise within your chosen region.

| Description of data | Examples |
| :- | :- |
| Customer content, including text, data, software, images, and other data available on the service | <ul><li>Repositories, including repository name and source code</li><li>User-generated content or URLs from the service, such as a pull request, comment, file path, raw URL, or filename</li><li>Structured or blob storage</li></ul> |
| Data or logs that identify your company | <ul><li>Data and logs for GitHub Actions</li><li>Data for business continuity and disaster recovery (BCDR)</li></ul> |
| Data or logs that identify a person | <ul><li>Email address</li><li>Username</li><li>First or last name</li><li>IP address</li></ul> |

## Data stored outside your region

For the purposes outlined in our [Data Protection Agreement](https://github.com/customer-terms/github-data-protection-agreement), GitHub may store the following data for your enterprise outside your chosen region.

| Description of data | Examples |
| :- | :- |
| Telemetry or logs containing consistent identifiers tied to a person, that by themselves do not identify the person without additional information | <ul><li>User ID or GUID as integer value in a database</li><li>Unsalted hash of other data that could identify a person</li><ul><li>Email address</li><li>Username</li><li>First or last name</li><li>IP address</li></ul> |
| Information that GitHub needs to administer a paid plan | <ul><li>Contact information</li><li>Billing, purchase, payment, or license information</li></ul> |
| Support and feedback data | <ul><li>Support requests or case notes</li><li>Phone conversations</li><li>Online chat sessions</li><li>Remote assistance sessions</li></ul> |
| GitHub Copilot data | Data and logs for GitHub Copilot, by default stored outside your region. If you enable the Restrict Copilot to data residency compliant models policy, inference, prompts, responses, logs, and telemetry remain in-region. See [GitHub Copilot With Data Residency](https://docs.github.com/en/admin/data-residency/github-copilot-with-data-residency).|
| Secret scanning data | Data for secret scanning validity checks and extended metadata checks if you have chosen to enable these features |

## Data transfers

GitHub will document reasons for the transfer of data out of your enterprise's region, but does not notify you when transfers occur.

Additionally, GitHub sends information about the TLS certificate for your enterprise's subdomain on GHE.com to certificate authorities (CAs) and the certificate transparency (CT) ecosystem. Some entities may be outside of your enterprise's region.

## Data subject requests

If you need to comply with a data subject request (DSR), contact [GitHub Support](https://support.github.com).

If GitHub receives a request from one of your data subjects pertaining to data residency for GitHub Enterprise Cloud, where GitHub functions as your processor or subprocessor, GitHub will redirect the data subject to you. Consistent with the functionality of the services and GitHub's role, we will cooperate with you and provide you the necessary means to respond.
