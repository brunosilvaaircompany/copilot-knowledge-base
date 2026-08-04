# Copilot allowlist reference

If your company employs security measures like a firewall or proxy server, you should add the URLs in this article to an allowlist to ensure Copilot works as expected.

## Enable users to sign in to Copilot

Allowlisting the URLs below is **not enough on its own**. If your network blocks GitHub more broadly, users won't be able to sign in to Copilot, even with every URL below allowed.

To sign in, users complete the standard GitHub browser sign-in flow, which loads the GitHub sign-in page. On a restricted network, this requires access to GitHub's general website domains (for example, `*.githubassets.com` and `*.githubusercontent.com`), which are not specific to Copilot.

To enable sign-in on a restricted network:

1. Allow access to GitHub's general website domains. For more information, see [Allowing Access To Githubs Services From A Restricted Network](https://docs.github.com/en/get-started/using-github/allowing-access-to-githubs-services-from-a-restricted-network).
1. Add the URLs in this article to your allowlist.

## GitHub public URLs

| Domain and/or URL                                           | Purpose |
|:------------------------------------------------------------| :--------------------------------- |
| `https://github.com/login/*`                                | Authentication |
| `https://github.com/copilot/*`                              | Copilot on GitHub |
| `https://github.com/enterprises/YOUR-ENTERPRISE/*`          | Authentication for managed user accounts, only required with Enterprise Managed Users |
| `https://api.github.com/user`                               | User Management |
| `https://api.github.com/copilot_internal/*`                 | User Management |
| `https://collector.github.com/*`                            | Analytics telemetry |
| `https://copilot-telemetry.githubusercontent.com/telemetry` | Copilot client telemetry |
| `https://default.exp-tas.com`                               | Copilot client experimentation |
| `https://copilot-proxy.githubusercontent.com`               | API service for Copilot suggestions |
| `https://origin-tracker.githubusercontent.com`              | API service for Copilot suggestions |
| `https://*.githubcopilot.com/*`[^1]                         | API service for Copilot suggestions |
| `https://*.individual.githubcopilot.com`[^2]                | API service for Copilot suggestions |
| `https://*.business.githubcopilot.com`[^3]                  | API service for Copilot suggestions |
| `https://*.enterprise.githubcopilot.com`[^4]                | API service for Copilot suggestions |
| `https://*.SUBDOMAIN.ghe.com`                               | For Copilot users on GHE.com |
| `https://SUBDOMAIN.ghe.com`                                 | For Copilot users on GHE.com |
| `https://copilot-reports.github.com`                        | Copilot usage metrics report downloads |
| `https://copilot-reports-*.b01.azurefd.net`[^5]             | Copilot usage metrics report downloads (fallback) |
| `https://usagereports*.blob.core.windows.net`[^6]           | Copilot usage metrics report downloads (fallback) |

Depending on the security policies and editors your organization uses, you may need to allowlist additional domains and URLs. For more information on specific editors, see [Further reading](#further-reading).

Every user of the proxy server or firewall also needs to configure their own environment to connect to Copilot. See [Configure Network Settings](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/configure-network-settings).

## Copilot voice features

Voice features in GitHub Copilot CLI and the GitHub Copilot app use Foundry Local to run a speech-to-text model on your machine. To query the model catalog and download models, these features make outbound requests to the following Azure domains. If you want to use voice features behind a firewall or proxy server, add these URLs to your allowlist:

| Domain and/or URL                              | Purpose |
|:-----------------------------------------------| :--------------------------------- |
| `https://ai.azure.com`                         | Model catalog requests |
| `https://api.catalog.azureml.ms`               | Detecting the optimal Azure region for model downloads |
| `https://*.api.azureml.ms`                     | Regional model catalog endpoints |
| `https://amlwlrt4*.blob.core.windows.net`[^7]  | Model downloads from regional Azure Blob Storage |

## Copilot cloud agent recommended allowlist

The Copilot cloud agent includes a built-in firewall with a recommended allowlist that is enabled by default. The recommended allowlist allows access to:

* Common operating system package repositories (for example, Debian, Ubuntu, Red Hat).
* Common container registries (for example, Docker Hub, Azure Container Registry, AWS Elastic Container Registry).
* Packages registries used by popular programming languages (C#, Dart, Go, Haskell, Java, JavaScript, Perl, PHP, Python, Ruby, Rust, Swift).
* Common certificate authorities (to allow SSL certificates to be validated).
* Hosts used to download web browsers for the Playwright MCP server.

For more information about configuring the Copilot cloud agent firewall, see [Customize The Agent Firewall](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-firewall).

The allowlist allows access to the following hosts:

### Azure Infrastructure: Metadata Service

* `168.63.129.16`

### Certificate Authorities: DigiCert

* `crl3.digicert.com`
* `crl4.digicert.com`
* `ocsp.digicert.com`

### Certificate Authorities: Symantec

* `ts-crl.ws.symantec.com`
* `ts-ocsp.ws.symantec.com`
* `s.symcb.com`
* `s.symcd.com`

### Certificate Authorities: GeoTrust

* `crl.geotrust.com`
* `ocsp.geotrust.com`

### Certificate Authorities: Thawte

* `crl.thawte.com`
* `ocsp.thawte.com`

### Certificate Authorities: VeriSign

* `crl.verisign.com`
* `ocsp.verisign.com`

### Certificate Authorities: GlobalSign

* `crl.globalsign.com`
* `ocsp.globalsign.com`

### Certificate Authorities: SSL.com

* `crls.ssl.com`
* `ocsp.ssl.com`

### Certificate Authorities: IdenTrust

* `crl.identrust.com`
* `ocsp.identrust.com`

### Certificate Authorities: Sectigo

* `crl.sectigo.com`
* `ocsp.sectigo.com`

### Certificate Authorities: UserTrust

* `crl.usertrust.com`
* `ocsp.usertrust.com`

### Container Registries: Docker

* `172.18.0.1`
* `ghcr.io`
* `registry.hub.docker.com`
* `*.docker.io`
* `*.docker.com`
* `production.cloudflare.docker.com`
* `auth.docker.io`
* `quay.io`
* `mcr.microsoft.com`
* `gcr.io`
* `public.ecr.aws`

### GitHub: Content & API

* `*.githubusercontent.com`
* `raw.githubusercontent.com`
* `objects.githubusercontent.com`
* `lfs.github.com`
* `github-cloud.githubusercontent.com`
* `github-cloud.s3.amazonaws.com`
* `codeload.github.com`
* `scanning-api.github.com`
* `api.mcp.github.com`
* `uploads.github.com/copilot/chat/attachments/`

### GitHub: Actions Artifact Storage

* `productionresultssa0.blob.core.windows.net`
* `productionresultssa1.blob.core.windows.net`
* `productionresultssa2.blob.core.windows.net`
* `productionresultssa3.blob.core.windows.net`
* `productionresultssa4.blob.core.windows.net`
* `productionresultssa5.blob.core.windows.net`
* `productionresultssa6.blob.core.windows.net`
* `productionresultssa7.blob.core.windows.net`
* `productionresultssa8.blob.core.windows.net`
* `productionresultssa9.blob.core.windows.net`
* `productionresultssa10.blob.core.windows.net`
* `productionresultssa11.blob.core.windows.net`
* `productionresultssa12.blob.core.windows.net`
* `productionresultssa13.blob.core.windows.net`
* `productionresultssa14.blob.core.windows.net`
* `productionresultssa15.blob.core.windows.net`
* `productionresultssa16.blob.core.windows.net`
* `productionresultssa17.blob.core.windows.net`
* `productionresultssa18.blob.core.windows.net`
* `productionresultssa19.blob.core.windows.net`

### Programming Languages & Package Managers: C# / .NET

* `nuget.org`
* `dist.nuget.org`
* `api.nuget.org`
* `nuget.pkg.github.com`
* `dotnet.microsoft.com`
* `pkgs.dev.azure.com`
* `builds.dotnet.microsoft.com`
* `dotnetcli.blob.core.windows.net`
* `nugetregistryv2prod.blob.core.windows.net`
* `azuresearch-usnc.nuget.org`
* `azuresearch-ussc.nuget.org`
* `dc.services.visualstudio.com`
* `dot.net`
* `download.visualstudio.microsoft.com`
* `dotnetcli.azureedge.net`
* `ci.dot.net`
* `www.microsoft.com`
* `oneocsp.microsoft.com`
* `www.microsoft.com/pkiops/crl/`

### Programming Languages & Package Managers: Dart

* `pub.dev`
* `pub.dartlang.org`
* `storage.googleapis.com/pub-packages/`
* `storage.googleapis.com/dart-archive/`

### Programming Languages & Package Managers: Go

* `go.dev`
* `golang.org`
* `proxy.golang.org`
* `sum.golang.org`
* `pkg.go.dev`
* `goproxy.io`
* `storage.googleapis.com/proxy-golang-org-prod/`

### Programming Languages & Package Managers: Haskell

* `haskell.org`
* `*.hackage.haskell.org`
* `get-ghcup.haskell.org`
* `downloads.haskell.org`

### Programming Languages & Package Managers: Java

* `www.java.com`
* `jdk.java.net`
* `api.adoptium.net`
* `adoptium.net`
* `search.maven.org`
* `maven.apache.org`
* `repo.maven.apache.org`
* `repo1.maven.org`
* `maven.pkg.github.com`
* `maven-central.storage-download.googleapis.com`
* `maven.google.com`
* `maven.oracle.com`
* `jcenter.bintray.com`
* `oss.sonatype.org`
* `repo.spring.io`
* `gradle.org`
* `services.gradle.org`
* `plugins.gradle.org`
* `plugins-artifacts.gradle.org`
* `repo.grails.org`
* `download.eclipse.org`
* `download.oracle.com`

### Programming Languages & Package Managers: Node.js / JavaScript

* `npmjs.org`
* `npmjs.com`
* `registry.npmjs.com`
* `registry.npmjs.org`
* `skimdb.npmjs.com`
* `npm.pkg.github.com`
* `api.npms.io`
* `nodejs.org`
* `yarnpkg.com`
* `registry.yarnpkg.com`
* `repo.yarnpkg.com`
* `deb.nodesource.com`
* `get.pnpm.io`
* `bun.sh`
* `deno.land`
* `registry.bower.io`
* `binaries.prisma.sh`

### Programming Languages & Package Managers: Perl

* `cpan.org`
* `www.cpan.org`
* `metacpan.org`
* `cpan.metacpan.org`

### Programming Languages & Package Managers: PHP

* `repo.packagist.org`
* `packagist.org`
* `getcomposer.org`

### Programming Languages & Package Managers: Python

* `pypi.python.org`
* `pypi.org`
* `pip.pypa.io`
* `*.pythonhosted.org`
* `files.pythonhosted.org`
* `bootstrap.pypa.io`
* `conda.binstar.org`
* `conda.anaconda.org`
* `binstar.org`
* `anaconda.org`
* `download.pytorch.org`
* `repo.continuum.io`
* `repo.anaconda.com`

### Programming Languages & Package Managers: Ruby

* `rubygems.org`
* `api.rubygems.org`
* `rubygems.pkg.github.com`
* `bundler.rubygems.org`
* `gems.rubyforge.org`
* `gems.rubyonrails.org`
* `index.rubygems.org`
* `cache.ruby-lang.org`
* `*.rvm.io`

### Programming Languages & Package Managers: Rust

* `crates.io`
* `index.crates.io`
* `static.crates.io`
* `sh.rustup.rs`
* `static.rust-lang.org`

### Programming Languages & Package Managers: Swift

* `download.swift.org`
* `swift.org`
* `cocoapods.org`
* `cdn.cocoapods.org`

### Infrastructure & Tools: HashiCorp

* `releases.hashicorp.com`
* `apt.releases.hashicorp.com`
* `yum.releases.hashicorp.com`
* `registry.terraform.io`

### Infrastructure & Tools: JSON Schema

* `json-schema.org`
* `json.schemastore.org`

### Infrastructure & Tools: Playwright

* `playwright.download.prss.microsoft.com`
* `cdn.playwright.dev`
* `playwright.azureedge.net`
* `playwright-akamai.azureedge.net`
* `playwright-verizon.azureedge.net`
* `storage.googleapis.com/chrome-for-testing-public`

### Linux Package Managers: Ubuntu

* `archive.ubuntu.com`
* `security.ubuntu.com`
* `ppa.launchpad.net`
* `keyserver.ubuntu.com`
* `azure.archive.ubuntu.com`
* `api.snapcraft.io`

### Linux Package Managers: Debian

* `deb.debian.org`
* `security.debian.org`
* `keyring.debian.org`
* `packages.debian.org`
* `debian.map.fastlydns.net`
* `apt.llvm.org`

### Linux Package Managers: Fedora

* `dl.fedoraproject.org`
* `mirrors.fedoraproject.org`
* `download.fedoraproject.org`

### Linux Package Managers: CentOS

* `mirror.centos.org`
* `vault.centos.org`

### Linux Package Managers: Alpine

* `dl-cdn.alpinelinux.org`
* `pkg.alpinelinux.org`

### Linux Package Managers: Arch

* `mirror.archlinux.org`
* `archlinux.org`

### Linux Package Managers: SUSE

* `download.opensuse.org`

### Linux Package Managers: Red Hat

* `cdn.redhat.com`

### Linux Package Managers: Common Package Sources

* `packagecloud.io`
* `packages.cloud.google.com`
* `packages.microsoft.com`

### Other

* `dl.k8s.io`
* `pkgs.k8s.io`

## Further reading

* [Network Connections in Visual Studio Code](https://code.visualstudio.com/docs/setup/network) in the Visual Studio documentation
* [Install and use Visual Studio and Azure Services behind a firewall or proxy server](https://learn.microsoft.com/en-us/visualstudio/install/install-and-use-visual-studio-behind-a-firewall-or-proxy-server) in the Microsoft documentation

[^1]: Allows access to authorized users regardless of Copilot plan. Do not add this URL to your allowlist if you are using subscription-based network routing. For more information on subscription-based network routing, see [Manage Network Access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/manage-network-access).
[^2]: Allows access to authorized users via a Copilot Individual plan. Do not add this URL to your allowlist if you are using subscription-based network routing.
[^3]: Allows access to authorized users via a Copilot Business plan. Do not add this URL to your allowlist if you want to use subscription-based network routing to block users from using Copilot Business on your network.
[^4]: Allows access to authorized users via a Copilot Enterprise plan. Do not add this URL to your allowlist if you want to use subscription-based network routing to block users from using Copilot Enterprise on your network.
[^5]: Required for fallback scenarios where Copilot usage metrics report downloads bypass the custom domain and are served from an Azure Front Door CDN.
[^6]: Required for fallback scenarios where Copilot usage metrics report downloads bypass the Azure Front Door CDN and are served directly from Azure Blob Storage.
[^7]: The `amlwlrt4*` wildcard matches the regional Azure Blob Storage accounts that Foundry Local voice features use to download models. The specific storage account depends on the Azure region closest to the user.
