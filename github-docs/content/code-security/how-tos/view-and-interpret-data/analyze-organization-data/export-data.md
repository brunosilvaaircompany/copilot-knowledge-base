# Exporting data from security overview

From security overview, you can download comma-separated values (CSV) files containing data from several pages of your organization or enterprise's security overview. These files can be used for efforts like security research and in-depth data analysis, and can integrate easily with external datasets.


The CSV file you download will contain data corresponding to the filters you have applied to security overview. For example, if you add the filter `dependabot-alerts:enabled`, your file will only contain data for repositories that have enabled Dependabot alerts.

> [!NOTE]
> In the "Teams" column of the CSV file, each repository will list a maximum of 20 teams with write access to that repository. If more than 20 teams have write access to a repository, the data will be truncated.

## Exporting overview, coverage, and risk data from your organization's security overview

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. In the "Organizations" section, select the organization for which you would like to download security overview data.
1. Under your organization name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. In the sidebar, click **{% octicon "graph" aria-hidden="true" aria-label="graph" %} Overview**, **{% octicon "meter" aria-hidden="true" aria-label="meter" %} Coverage**, **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Risk**, or **{% octicon "graph" aria-hidden="true" aria-label="graph" %} CodeQL pull requests**.
1. Next to the search bar, click **{% octicon "download" aria-hidden="true" aria-label="download" %} Export CSV**.

    It may take a moment for GitHub to generate the CSV file of your data. Once the CSV file generates, the file will automatically start downloading, and a banner will appear confirming your report is ready. If you are downloading the CSV from the overview page, you will also receive an email when your report is ready, containing a link to download the CSV.

> [!NOTE]
> The summary views ("Overview", "Coverage" and "Risk") show data only for default alerts. Code scanning alerts from third-party tools, and secret scanning alerts for generic patterns or for ignored directories are all omitted from these views. Consequently, files exported from the summary views do not contain data for these types of alert.

## Exporting overview, coverage, and risk data from your enterprise's security overview

1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.

1. At the top of the page, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. Choose the page that you want to export data from by clicking on **Overview**, **Risk**, or **Coverage**.
1. Next to the search bar, click {% octicon "download" aria-hidden="true" aria-label="download" %} **Export CSV**.

    It may take a moment for GitHub to generate the CSV file of your data. Once the CSV file generates, the file will automatically start downloading, and a banner will appear confirming your report is ready. If you are downloading the CSV from the overview page, you will also receive an email when your report is ready, containing a link to download the CSV.
