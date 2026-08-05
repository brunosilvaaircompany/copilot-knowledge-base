# Larger runners reference

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




For reference information about larger runners, see [the GitHub Enterprise Cloud documentation](/enterprise-cloud@latest/actions/reference/runners/larger-runners).

You can use up to 10 larger runner pools with static IP address ranges at the enterprise level. In addition, you can use up to 10 larger runner pools with static IP address ranges at the organization level, for each organization in your enterprise. For more information, see [Manage Larger Runners](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/manage-larger-runners).

If you would like to use more than 10 larger runner pools with static IP address ranges, please contact us through the [GitHub Support portal](https://support.github.com){% elsif ghes %}your site administrator.


> [!NOTE]
> If runners are unused for more than 90 days, their IP address ranges are automatically removed and cannot be recovered.

## Communication requirements for larger runners

A larger runner must establish connections to GitHub-owned endpoints to perform essential communication operations. In addition, your runner may require access to additional networks that you specify or utilize within an action.

To ensure proper communications for larger runners between networks within your configuration, ensure that the following communications are allowed.

> [!NOTE]
> Some of the domains listed are configured using `CNAME` records. Some firewalls might require you to add rules recursively for all `CNAME` records. Note that the `CNAME` records might change in the future, and that only the domains listed will remain constant.




> [!NOTE]
> If you use GitHub Enterprise Cloud with data residency, your runners must communicate with additional hostnames beyond those listed below. For the complete network requirements, see [Network Details For Ghecom](https://docs.github.com/en/admin/data-residency/network-details-for-ghecom).



**Needed for essential operations:**

```shell copy
github.com
api.github.com
*.actions.githubusercontent.com
```

**Needed for downloading actions:**

```shell copy
codeload.github.com
```

**Needed for uploading/downloading job summaries, logs, workflow artifacts, and caches:**

```shell copy
results-receiver.actions.githubusercontent.com
*.blob.core.windows.net
```

**Needed for runner version updates:**

```shell copy
objects.githubusercontent.com
objects-origin.githubusercontent.com
github-releases.githubusercontent.com
github-registry-files.githubusercontent.com
```

**Needed for retrieving OIDC tokens:**

```shell copy
*.actions.githubusercontent.com
```

**Needed for downloading or publishing packages or containers to GitHub Packages:**

```shell copy
*.pkg.github.com
pkg-containers.githubusercontent.com
ghcr.io
```

**Needed for Git Large File Storage**

```shell copy
github-cloud.githubusercontent.com
github-cloud.s3.amazonaws.com
```


**Needed for jobs for Dependabot updates**

```shell copy
dependabot-actions.githubapp.com
```



**Needed for downloading release assets:**

```shell copy
release-assets.githubusercontent.com
```

**Needed for VNet:**

```shell copy
api.snapcraft.io
*.core.windows.net
```


{% endif %}
