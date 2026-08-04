# Secret scanning pattern configuration data

When configuring push protection, you can view performance data for each secret pattern to make informed enablement decisions. Use metrics like alert volume and false positive rates to balance security with developer experience. See [Configure Global Settings](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/configure-global-settings#specifying-patterns-to-include-in-push-protection) or [Configure Additional Settings](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/configure-additional-settings#specifying-patterns-to-include-in-push-protection-for-your-enterprise).

      | Column                                      | Description            |
   |---------------------------------------------|----------------------------------------------|
   | Name | Name of the pattern or secret |
   | Alert total | Total number of alerts for the pattern (percentage and absolute numbers) |
   | False positives | Percentage of false positives for the pattern |
   | Bypass rate | Percentage of bypasses for the pattern |
   | GitHub default | Default behavior for push protection, as recommended by GitHub |
   | Enterprise setting | **Uneditable at organization level**</br>Current enablement status for push protection</br>Can be `Enabled`, `Disabled`, and `Default`.</br>At enterprise level, `Default` is the default value. |
   | Organization setting | **Only valid at organization level**</br>Current enablement status for push protection</br>Can be `Enabled`, `Disabled`, and `Enterprise` (inherited from the enterprise).</br>`Enterprise` is the default value. |
