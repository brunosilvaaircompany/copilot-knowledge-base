# Streaming the audit log for your enterprise

>[!NOTE] Webhooks might be a good alternative to the audit log or API polling for certain use cases. Webhooks are a way for GitHub to notify your server when specific events occur for a repository, organization, or enterprise. Compared to the API or searching the audit log, webhooks can be more efficient if you just want to learn and possibly log when certain events occur on your enterprise, organization, or repository. See [Webhooks](https://docs.github.com/en/webhooks).


## About audit log streaming

You can help protect intellectual property and maintain compliance for your company by using streaming to keep copies of your audit log data. The audit log details events such as changes to settings and access, user membership, app permissions, and more. See [Audit Log Events For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise), [Audit Log Events For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization), and [Security Log Events](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/security-log-events).

Streaming audit log data has these benefits:

* **Data exploration**. Examine streamed events using your preferred tool for querying large quantities of data. The stream contains both audit events and Git events across the entire enterprise account.
* **Data continuity**. If you pause a stream, it retains a buffer for seven days, so there is no data loss for the first week. If the stream remains paused for more than seven days, it will resume from a point one week prior to the current time. If paused for three weeks or more, the stream won't retain any data and will start anew from the current timestamp.
* **Data retention**. Keep your exported audit logs and Git events data as long as you need to.

You can also stream agent session activity from GitHub Copilot to the same destination you use for other enterprise audit events. This is currently in public preview. See [Monitor Agentic Activity](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/monitor-agentic-activity#tracking-agentic-activity-in-your-enterprise-through-the-audit-log) in the GitHub Enterprise Cloud documentation.

You can set up, pause, or delete a stream at any time. The stream exports audit and Git events data for all of the organizations in your enterprise, for activity from the time the stream is enabled onwards.

All streamed audit logs are sent as compressed JSON files. The filename format is in`YYYY/MM/HH/MM/<uuid>.json.gz`.

>[!NOTE] GitHub uses an at-least-once delivery method. Due to certain network or system issues, some events may be duplicated.



Enabling audit log streaming can cause a minor impact on the performance of {% ifversion ghes %}your GitHub Enterprise Server instance. To learn about increasing resources to mitigate this performance impact, see [Increasing Cpu Or Memory Resources](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources).

{% endif %}



## Health checks for audit log streams

Every 24 hours, a health check runs for each stream. If a stream is set up incorrectly, an email will be sent to the enterprise owners. To avoid audit log events being dropped from the stream, a misconfigured stream must be fixed within six days.

To fix your streaming configuration, follow the steps in [Setting up audit log streaming](#setting-up-audit-log-streaming).



## Setting up audit log streaming

To set up the audit log stream, follow the instructions for your provider:

* [Amazon S3](#setting-up-streaming-to-amazon-s3)
* [Azure Blob Storage](#setting-up-streaming-to-azure-blob-storage)
* [Azure Event Hubs](#setting-up-streaming-to-azure-event-hubs)
* [Datadog](#setting-up-streaming-to-datadog)
* [Google Cloud Storage](#setting-up-streaming-to-google-cloud-storage)
* [Microsoft Purview](#setting-up-streaming-to-microsoft-purview) (Copilot agent session events only)
* [Splunk](#setting-up-streaming-to-splunk)



>[!NOTE] To get a list of IP address ranges that GitHub uses for connections to the streaming endpoint, use the REST API. The `meta` endpoint for GitHub.com includes a `hooks` key with a list of the IP addresses. See [Meta](https://docs.github.com/en/rest/meta/meta#get-github-enterprise-cloud-meta-information).





### Streaming to multiple endpoints

>[!NOTE] This feature is currently in public preview and subject to change.

You can stream audit logs to multiple endpoints. For example, you can stream your audit log to two endpoints of the same type, or you can stream to two different providers. To set up multiple streams, follow the instructions for each provider.



### Setting up streaming to Amazon S3



> [!NOTE]
> For streaming to S3, the AWS region that must be reachable depends on the option you select for the bucket's region.
>
> * If you select **Auto Detect**, `us-east-1` must be reachable from your appliance because the AWS SDK uses that region to detect the destination bucket's region.
> * If you select a specific region, the selected region must be reachable from your appliance. `us-east-1` does not need to be reachable unless it is the selected region.




You can set up streaming to S3 with access keys or, to avoid storing long-lived secrets on GitHub, with OpenID Connect (OIDC).

* [Setting up streaming to S3 with access keys](#setting-up-streaming-to-s3-with-access-keys)
* [Setting up streaming to S3 with OpenID Connect](#setting-up-streaming-to-s3-with-openid-connect)
* [Disabling streaming to S3 with OpenID Connect](#disabling-streaming-to-s3-with-openid-connect)
* [Integrating with AWS CloudTrail Lake](#integrating-with-aws-cloudtrail-lake)

#### Setting up streaming to S3 with access keys



To set up audit log streaming from GitHub you will need:
* Your AWS access key ID
* Your AWS secret key

For information on creating or accessing your access key ID and secret key, see [Understanding and getting your AWS credentials](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html) in the AWS documentation.

From AWS:

1. Create a bucket, and block public access to the bucket. See [Creating, configuring, and working with Amazon S3 buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) in the AWS documentation.

1. Create a policy that allows GitHub to write to the bucket. Copy the following JSON and replace `EXAMPLE-BUCKET` with the name of your bucket. GitHub requires only the permissions in this JSON.

   ```json
   {
      "Version": "2012-10-17",
      "Statement": [
         {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
               "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::EXAMPLE-BUCKET/*"
        }
      ]
   }
   ```

   See [Creating IAM policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html) in the AWS documentation.


From GitHub:


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Audit log**.

1. Under "Audit log", click **Log streaming**.

1. Select the **Configure stream** dropdown menu and click **Amazon S3**.

1. Under "Authentication", click **Access keys**.
1. Configure the stream settings.

    * Under "Region", select **Auto Detect** or select the bucket's region. For example, `us-east-1`.
    * Under "Bucket", type the name of the bucket you want to stream to. For example, `auditlog-streaming-test`.
    * Under "Access Key ID", type your access key ID. For example, `ABCAIOSFODNN7EXAMPLE1`.
    * Under "Secret Key", type your secret key. For example, `aBcJalrXUtnWXYZ/A1MDENG/zPxRfiCYEXAMPLEKEY`.
1. To verify that GitHub can connect and write to the Amazon S3 endpoint, click **Check endpoint**.

1. After you have successfully verified the endpoint, click **Save**.




#### Setting up streaming to S3 with OpenID Connect

> [!NOTE]
> Audit log streaming to S3 with OpenID Connect for GitHub Enterprise Cloud with data residency is currently unavailable. See [Feature Overview For GitHub Enterprise Cloud With Data Residency](https://docs.github.com/en/admin/data-residency/feature-overview-for-github-enterprise-cloud-with-data-residency#currently-unavailable-features).

From AWS:

1. Add the GitHub OIDC provider to IAM. See [Creating OpenID Connect (OIDC) identity providers](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html) in the AWS documentation.

   * For the provider URL, use `https://oidc-configuration.audit-log.githubusercontent.com`.
   * For "Audience", use `sts.amazonaws.com`.
1. Create a bucket, and block public access to the bucket. See [Creating, configuring, and working with Amazon S3 buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) in the AWS documentation.

1. Create a policy that allows GitHub to write to the bucket. Copy the following JSON and replace `EXAMPLE-BUCKET` with the name of your bucket. GitHub requires only the permissions in this JSON.

   ```json
   {
      "Version": "2012-10-17",
      "Statement": [
         {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
               "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::EXAMPLE-BUCKET/*"
        }
      ]
   }
   ```

   See [Creating IAM policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html) in the AWS documentation.

1. Configure the role and trust policy for the GitHub IdP. See [Creating a role for web identity or OpenID Connect Federation (console)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html) in the AWS documentation.

   * Add the permissions policy you created earlier to allow writes to the bucket.
   * Edit the trust relationship to add the `sub` field to the validation conditions, replacing `ENTERPRISE` with the name of your enterprise.

        >[!NOTE] The `ENTERPRISE` value is case-sensitive. If the name of your enterprise contains uppercase letters, use the same case in the trust policy.

     ```json
     "Condition": {
        "StringEquals": {
           "oidc-configuration.audit-log.githubusercontent.com:aud": "sts.amazonaws.com",
           "oidc-configuration.audit-log.githubusercontent.com:sub": "https://github.com/ENTERPRISE"
         }
      }
      ```

   * Make note of the Amazon Resource Name (ARN) of the created role.

From GitHub:

1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Audit log**.

1. Under "Audit log", click **Log streaming**.

1. Select the **Configure stream** dropdown menu and click **Amazon S3**.

1. Under "Authentication", click **OpenID Connect**.
1. Configure the stream settings.

{% ifversion ghec %}
    - Under "Region", select the bucket's region. For example, `us-east-1`; an option for Auto Discovery is also available.
    - Under "Bucket", type the name of the bucket you want to stream to. For example, `auditlog-streaming-test`.
    - Under "ARN Role" type the ARN role you noted earlier. For example, `arn:aws::iam::1234567890:role/github-audit-log-streaming-role`.
1. To verify that GitHub can connect and write to the Amazon S3 endpoint, click **Check endpoint**.

1. After you have successfully verified the endpoint, click **Save**.


#### Disabling streaming to S3 with OpenID Connect

To disable streaming to S3 with OIDC, delete the GitHub OIDC provider you created in AWS when you set up streaming. See [Creating OpenID Connect (OIDC) identity providers](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html) in the AWS documentation.

If you disable streaming due to a security vulnerability in OIDC, after you delete the provider, set up streaming with access keys until the vulnerability is resolved. See [Setting up streaming to S3 with access keys](#setting-up-streaming-to-s3-with-access-keys).

{% endif %}

#### Integrating with AWS CloudTrail Lake

You can consolidate your audit logs by integrating streaming to S3 with AWS CloudTrail Lake. See the [AWS CloudTrail Documentation](https://docs.aws.amazon.com/cloudtrail/) or the [GitHub Audit Log to CloudTrail Open Audit](https://github.com/aws-samples/aws-cloudtrail-lake-github-audit-log) in the `aws-samples/aws-cloudtrail-lake-github-audit-log` repository.

### Setting up streaming to Azure Blob Storage

> [!NOTE] Audit log streaming to blob storage in Azure Government is not supported.

Before setting up a stream in GitHub, first create a storage account and a container in Microsoft Azure. See [Introduction to Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction) in the Microsoft documentation.

To configure the stream, you need the URL of a SAS token.

From the Microsoft Azure portal:
1. On the Home page, click **Storage Accounts**.
1. Under "Name", click the name of the storage account you want to use.
1. Under "Data storage", click **Containers**.
1. Click the name of the container you want to use.
1. In the left sidebar, under "Settings", click **Shared access tokens**.
1. Select the **Permissions** dropdown menu, then select `Create` and `Write` and deselect all other options.
1. Set an expiry date that complies with your secret rotation policy.
1. Click **Generate SAS token and URL**.
1. Copy the value of the **Blob SAS URL** field that's displayed. You will use this URL in GitHub.

From GitHub:

1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Audit log**.

1. Under "Audit log", click **Log streaming**.

1. Select the **Configure stream** dropdown menu and click **Azure Blob Storage**.
1. On the configuration page, enter the blob SAS URL that you copied in Azure. The **Container** field is auto-filled based on the URL.
1. Click **Check endpoint** to verify that GitHub can connect and write to the Azure Blob Storage endpoint.
1. After you have successfully verified the endpoint, click **Save**.


### Setting up streaming to Azure Event Hubs

> [!NOTE]
> - Event Hubs instances in Azure Government are not supported.
> - With **GitHub Enterprise Cloud with data residency,** audit log streaming to Azure Event Hubs is not supported with IP Firewall rules enabled.

Before setting up a stream in GitHub, you need:

* An event hub namespace in Microsoft Azure
* An event hub instance within the namespace (see [Quickstart: Create an event hub using Azure portal](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create) in the Microsoft documentation)

From the Microsoft Azure portal:
1. At the top of the page, use the search box to search for "Event Hubs".
1. Select **Event Hubs**. The names of your event hubs are listed.
1. Make a note of the name of the event hub to which you want to stream. Click the event hub.
1. In the left menu, click **Shared Access Policies**.
1. Select a shared access policy from the list of policies, or create a new policy.
1. Copy the connection string from the **Connection string-primary key** field.

From GitHub:

1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Audit log**.

1. Under "Audit log", click **Log streaming**.

1. Select the **Configure stream** dropdown and click **Azure Event Hubs**.
1. On the configuration page, enter:
   * The name of the Azure Event Hubs instance.
   * The connection string.
1. Click **Check endpoint** to verify that GitHub can connect and write to the Azure Events Hub endpoint.
1. After you have successfully verified the endpoint, click **Save**.


### Setting up streaming to Datadog

To set up streaming to Datadog, create a client token or an API key in Datadog, then configure audit log streaming in GitHub using the token for authentication. You do not need to create a bucket or other storage container in Datadog.

After you set up streaming to Datadog, you can see your audit log data by filtering by "github.audit.streaming." See [Log Management](https://docs.datadoghq.com/logs/).

1. If you don't already have a Datadog account, create one.
1. In Datadog, generate a client token or an API key and then click **Copy key**. See [API and Application Keys](https://docs.datadoghq.com/account_management/api-app-keys/) in Datadog Docs.

1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Audit log**.

1. Under "Audit log", click **Log streaming**.

1. Select the **Configure stream** dropdown and click **Datadog**.
1. In the **Token** field, paste the token you copied earlier.
1. Select the **Site** dropdown and click your Datadog site. To determine your site, compare your Datadog URL to the table in [Datadog sites](https://docs.datadoghq.com/getting_started/site/) in Datadog Docs.
1. To verify that GitHub can connect and write to the Datadog endpoint, click **Check endpoint**.
1. After you have successfully verified the endpoint, click **Save**.

1. After a few minutes, confirm that audit log data appears on the **Logs** tab in Datadog. If it doesn't appear, confirm that your token and site are correct in GitHub.

### Setting up streaming to Google Cloud Storage

To set up streaming to Google Cloud Storage, create a service account in Google Cloud with the appropriate credentials and permissions, then configure audit log streaming in GitHub using the service account's credentials for authentication.

1. Create a service account for Google Cloud. You do not need to set access controls or IAM roles for this account. See [Creating and managing service accounts](https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating) in the Google Cloud documentation.
1. Create a JSON key for the service account, and store the key securely. See [Creating and managing service account keys](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating) in the Google Cloud documentation.
1. If you haven't yet, create a bucket. See [Creating storage buckets](https://cloud.google.com/storage/docs/creating-buckets) in the Google Cloud documentation.
1. Give the service account the Storage Object Creator role for the bucket. See [Using Cloud IAM permissions](https://cloud.google.com/storage/docs/access-control/using-iam-permissions#bucket-add) in the Google Cloud documentation.

1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Audit log**.

1. Under "Audit log", click **Log streaming**.

1. Select the **Configure stream** dropdown and click **Google Cloud Storage**.
1. Under "Bucket", type the name of your Google Cloud Storage bucket.
1. Under "JSON Credentials", paste the entire contents of your service account's JSON key file.
1. To verify that GitHub can connect and write to the Google Cloud Storage bucket, click **Check endpoint**.
1. After you have successfully verified the endpoint, click **Save**.




### Setting up streaming to Microsoft Purview

>[!NOTE] This feature is in public preview and is available for enterprises that use Enterprise Managed Users and for enterprises that use GitHub Enterprise Cloud with data residency.

Microsoft Purview only supports streaming Copilot agent session events. For more information on Microsoft Purview, see [Learn about the Microsoft Purview portal](https://learn.microsoft.com/en-us/purview/purview-portal) in the Microsoft documentation.

To set up streaming to Microsoft Purview, configure streaming in GitHub, then authorize access through Microsoft Entra.

1. Configure streaming in GitHub. See [Enabling audit log streaming of Copilot agent session events](#enabling-audit-log-streaming-of-copilot-agent-session-events) below.

1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Audit log**.

1. Under "Audit log", click **Log streaming**.

1. Select the **Configure stream** dropdown and click **Microsoft Purview**.
1. Click **Authorize with Entra**.
1. When you're redirected to Microsoft Entra, add the GitHub app and authorize it for your tenant.



### Setting up streaming to Splunk

To stream audit logs to Splunk's HTTP Event Collector (HEC) endpoint, make sure that the endpoint is configured to accept HTTPS connections. See [Set up and use HTTP Event Collector in Splunk Web](https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector) in the Splunk documentation.

>[!NOTE] GitHub validates the HEC endpoint via `<Domain>:port/services/collector`. If self-hosting the endpoint (such as with [Splunk HEC Receiver](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/splunkhecreceiver) via OpenTelemetry), make sure it's reachable at this destination.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Audit log**.

1. Under "Audit log", click **Log streaming**.

1. Select the **Configure stream** dropdown and click **Splunk**.
1. On the configuration page, enter:
   * The domain where the application you want to stream to is hosted.

     If you're using Splunk Cloud, `Domain` should be `http-inputs-<host>`, where `host` is the domain you use in Splunk Cloud. For example, `http-inputs-mycompany.splunkcloud.com`.

     If you're using the free trial version of Splunk Cloud, `Domain` should be `inputs.<host>`, where `host` is the domain you use in Splunk Cloud. For example, `inputs.mycompany.splunkcloud.com`.

   * The port on which the application accepts data.<br>

     If you're using Splunk Cloud, `Port` should be `443`.

     If you're using the free trial version of Splunk Cloud, `Port` should be `8088`.

   * A token that GitHub can use to authenticate to the third-party application.
1. Leave the **Enable SSL verification** check box selected.

    Audit logs are always streamed as encrypted data, however, with this option selected, GitHub verifies the SSL certificate of your Splunk instance when delivering events. SSL verification helps ensure that events are delivered to your URL endpoint securely. Verification is optional, but we recommend you leave SSL verification enabled.
1. Click **Check endpoint** to verify that GitHub can connect and write to the Splunk endpoint.
1. After you have successfully verified the endpoint, click **Save**.




## Pausing audit log streaming

Pause the stream to perform maintenance on the receiving application without losing audit data. Audit logs are stored for up to seven days on GitHub and are then exported when you unpause the stream.

Datadog only accepts logs from up to 18 hours in the past. If you pause a stream to a Datadog endpoint for more than 18 hours, you risk losing logs that Datadog won't accept after you resume streaming.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Audit log**.

1. Under "Audit log", click **Log streaming**.

1. To the right of your configured stream, click **Pause stream**.
1. A confirmation message displays. Click **Pause stream** to confirm.

To restart streaming, click **Resume stream**.


## Deleting the audit log stream


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Audit log**.

1. Under "Audit log", click **Log streaming**.

1. Under "Danger zone", click **Delete stream**.
1. A confirmation message displays. Click **Delete stream** to confirm.



## Enabling audit log streaming of API requests

>[!NOTE] Not all API requests are included in the audit log stream after this feature is enabled. The streaming of API requests is limited to security relevant endpoints.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Audit log**.

1. Under "Audit log", click **Settings**.
1. Under "API Requests", select **Enable API Request Events**.
1. Click **Save**.





## Enabling audit log streaming of Copilot agent session events

>[!NOTE] This feature is in public preview and is available for enterprises that use Enterprise Managed Users and for enterprises that use GitHub Enterprise Cloud with data residency.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click AI Controls
1. Under "Copilot", select **Enabled everywhere** for "Copilot Usage Records Streaming"
1. Configure a streaming destination. See [Setting up audit log streaming](#setting-up-audit-log-streaming).

You can also retrieve Copilot usage data through the REST API by selecting **Enabled everywhere** for "Copilot Usage Records API". See [Copilot Usage Metrics](https://docs.github.com/en/rest/copilot/copilot-usage-metrics#get-copilot-usage-records-for-an-enterprise).

For help interpreting the audit log events for agentic activity, see [Agentic Audit Log Events](https://docs.github.com/en/copilot/reference/enterprise-administrators/agentic-audit-log-events#streaming-audit-log-events).
