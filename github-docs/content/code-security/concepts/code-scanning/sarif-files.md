# About SARIF files for code scanning

>[!NOTE] If you use default setup for code scanning, or an advanced setup that involves using GitHub Actions to run the CodeQL action, then you don't need to interact with SARIF files. Scan results are uploaded and parsed as code scanning alerts automatically.

SARIF stands for _Static Analysis Results Interchange Format_. This is a JSON-based standard for storing results from static analysis tools.

If you use a **third-party analysis tool or CI/CD system** to scan code for vulnerabilities, you can generate a SARIF file and upload it to GitHub. GitHub will parse the SARIF file and show alerts using the results in your repository as a part of the code scanning experience.

GitHub uses properties in the SARIF file to display alerts. For example, the `shortDescription` and `fullDescription` appear at the top of a code scanning alert. The `location` allows GitHub to show annotations in your code file.

This article explains how SARIF files are used on GitHub. If you're new to SARIF and want to learn more, see Microsoft's [`SARIF tutorials`](https://github.com/microsoft/sarif-tutorials) repository.

## Version requirements

Code scanning supports a subset of the [SARIF 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html) JSON schema. Ensure that SARIF files from third-party tools use this version.

## Upload methods

You can upload a SARIF file using GitHub Actions, the code scanning API, or the CodeQL CLI. The best upload method depends on how you generate the SARIF file. For more information, see [Upload Sarif File](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/upload-sarif-file).
