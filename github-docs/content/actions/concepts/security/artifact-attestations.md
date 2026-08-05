# Artifact attestations

## Overview

Artifact attestations enable you to create unfalsifiable provenance and integrity guarantees for the software you build. In turn, people who consume your software can verify where and how your software was built.

When you generate artifact attestations with your software, you create cryptographically signed claims that establish your build's provenance and include the following information:

* A link to the workflow associated with the artifact
* The repository, organization, environment, commit SHA, and triggering event for the artifact
* Other information from the OIDC token used to establish provenance. For more information, see [Openid Connect](https://docs.github.com/en/actions/concepts/security/openid-connect).

You can also generate artifact attestations that include an associated software bill of materials (SBOM). Associating your builds with a list of the open source dependencies used in them provides transparency and enables consumers to comply with data protection standards.


## SLSA levels for artifact attestations

The SLSA framework is an industry standard used to evaluate supply chain security. It is organized into levels. Each level represents an increasing degree of security and trustworthiness for a software supply chain. Artifact attestations by itself provides SLSA v1.0 Build Level 2.

This provides a link between your artifact and its build instructions, but you can take this a step further by requiring builds make use of known, vetted build instructions. A great way to do this is to have your build take place in a reusable workflow that many repositories across your organization share. Reusable workflows can provide isolation between the build process and the calling workflow, to meet SLSA v1.0 Build Level 3. For more information, see [Increase Security Rating](https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/increase-security-rating).

For more information on SLSA levels, see [SLSA Security Levels](https://slsa.dev/spec/v1.0/levels).

## How GitHub generates artifact attestations

To generate artifact attestations, GitHub uses Sigstore, which is an open source project that offers a comprehensive solution for signing and verifying software artifacts via attestations.

**Public repositories** that generate artifact attestations use the [Sigstore Public Good Instance](https://openssf.org/blog/2023/10/03/running-sigstore-as-a-managed-service-a-tour-of-sigstores-public-good-instance/). A copy of the generated Sigstore bundle is stored with GitHub and is also written to an immutable transparency log that is publicly readable on the internet.

**Private repositories** that generate artifact attestations use GitHub's Sigstore instance. GitHub's Sigstore instance uses the same codebase as the Sigstore Public Good Instance, but it does not have a transparency log and only federates with GitHub Actions.

## When to generate attestations

Generating attestations alone doesn't provide any security benefit, the attestations must be verified for the benefit to be realized. Here are some guidelines for how to think about what to sign and how often:

You should sign:

* Software you are releasing that you expect people to run `gh attestation verify ...` on.
* Binaries people will run, packages people will download, or manifests that include hashes of detailed contents.

You should **not** sign:

* Frequent builds that are just for automated testing.
* Individual files like source code, documentation files, or embedded images.

## Verifying artifact attestations

If you consume software that publishes artifact attestations, you can use the GitHub CLI to verify those attestations. Because the attestations give you information about where and how software was built, you can use that information to create and enforce security policies that elevate your supply chain security.

>[!WARNING] It is important to remember that artifact attestations are _not_ a guarantee that an artifact is secure. Instead, artifact attestations link you to the source code and the build instructions that produced them. It is up to you to define your policy criteria, evaluate that policy by evaluating the content, and make an informed risk decision when you are consuming software.

## Next steps

To start generating and verifying artifact attestations for your builds, see [Use Artifact Attestations](https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations).
