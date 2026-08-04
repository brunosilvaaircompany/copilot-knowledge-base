# Support for Actions Runner Controller

## Overview

The Actions Runner Controller (ARC) project [was adopted by GitHub](https://github.com/actions/actions-runner-controller/discussions/2072) to release as a new GitHub product. As a result, there are currently two ARC releases: the legacy community-maintained ARC and GitHub's Autoscaling Runner Sets.

GitHub only supports the latest Autoscaling Runner Sets version of ARC. Support for the legacy ARC is provided by the community in the [Actions Runner Controller](https://github.com/actions/actions-runner-controller) repository only.

## Scope of support for Actions Runner Controller

To ensure a smooth adoption of Actions Runner Controller, we recommend that organizations have a Kubernetes expert on staff. Many aspects of ARC installation, including container orchestration, networking, policy application, and integration with managed Kubernetes providers, fall outside GitHub Support’s scope and require in-depth Kubernetes knowledge. If your support request is outside of the scope of what our team can help you with, we may recommend next steps to resolve your issue outside of GitHub Support. Your support request is out of GitHub Support's scope if the request is primarily about:

* The legacy community-maintained version of ARC
* Installing, configuring, or maintaining dependencies
* Template spec customization
* Container orchestration, such as Kubernetes setup, networking, building images in ARC (DinD), etc.
* Applying Kubernetes policies
* Managed Kubernetes providers or provider-specific configurations
* [Runner Container Hooks](https://github.com/actions/runner-container-hooks) in conjunction with ARC's `kubernetes` mode
* Installation tooling other than Helm
* Storage provisioners and PersistentVolumeClaims (PVCs)
* Best practices, such as configuring metrics servers, image caching, etc.

While ARC may be deployed successfully with different tooling and configurations, your support request is possibly out of GitHub Support's scope if ARC has been deployed with:

* Installation tooling other than Helm
* Service account and/or template spec customization

For more information about contacting GitHub Support, see [Contacting GitHub Support](https://docs.github.com/en/support/contacting-github-support).

> [!NOTE]
> * OpenShift clusters are in public preview. See guidance from [Red Hat](https://developers.redhat.com/articles/2025/02/17/how-securely-deploy-github-arc-openshift#arc_architecture) for configuration recommendations.
> * ARC is only supported on GitHub Enterprise Server versions 3.9 and greater.

## Working with GitHub Support for Actions Runner Controller

GitHub Support may ask questions about your Actions Runner Controller deployment and request that you collect and attach [controller logs, listener logs](/actions/tutorials/use-actions-runner-controller/troubleshoot#checking-the-logs-of-the-controller-and-runner-set-listener), runner logs, and Helm charts (`values.yaml`) to the support ticket.
