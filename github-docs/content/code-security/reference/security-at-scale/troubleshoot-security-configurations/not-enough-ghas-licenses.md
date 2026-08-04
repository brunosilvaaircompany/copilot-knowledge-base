# Not enough GitHub Advanced Security licenses

If you are on a volume / subscription-based billing model for GitHub Advanced Security (GHAS), you must have an available GHAS license for any additional unique active committers to enable GHAS features on a private or internal repository. To learn about GHAS licensing, as well as unique and active committers, see [GitHub Advanced Security](https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security).

If you try to apply a security configuration with GHAS features to your repositories and don't have enough GHAS licenses, the configuration will only be successfully applied to public repositories. For private and internal repositories, only free security features will be enabled due to the license limitation, resulting in the following outcomes:

  * Free security features enabled in the configuration _will_ be enabled for _all_ private and internal repositories.
  * GHAS features _will not_ be enabled for _any_ private or internal repositories.
  * The security configuration _will not_ be applied to _any_ private or internal repositories, since only some features from the configuration are enabled.

For more information on managing GHAS licenses for your organization, see [Managing Your GitHub Advanced Security License Usage](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/manage-usage-and-access/managing-your-github-advanced-security-license-usage).
