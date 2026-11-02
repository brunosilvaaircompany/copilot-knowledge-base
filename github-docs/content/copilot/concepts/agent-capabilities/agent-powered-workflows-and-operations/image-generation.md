# About image generation in GitHub Copilot

> [!NOTE]
> Image generation is in public preview and subject to change.


## About image generation

Describe the image you need in natural language, and Copilot generates it for you. You can then ask for changes in the same conversation until the image fits your project.

Image generation is available in:

* Visual Studio Code
* GitHub Copilot app
* GitHub Copilot CLI

Image generation is not available with Copilot Free or Copilot Student.

## How image generation works

When you ask for an image, the reasoning model for your session calls a tool that sends your request to a dedicated model, GPT Image 2.5 Flare.

Copilot shows a preview of the image in the conversation and saves the image to your project.

## Example prompts

Be specific about the subject and style you want. For example:

```text copy
Create an app icon of a paper airplane in a flat,
minimal style with a blue background.
```

To refine the result, ask for changes in a follow-up prompt:

```text copy
Make the background a darker blue and add a
subtle drop shadow under the airplane.
```

## Billing for image generation

Image generation is billed separately from the model you use for your session. Usage is measured in text and image tokens, which count toward your AI credits.

For per-token rates, see [Models And Pricing](https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing#image-generation-models). For more information about how AI credits are billed, see [Billing](https://docs.github.com/en/copilot/concepts/billing-and-usage/individuals/billing) or [Billing](https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/billing).

## Controlling access to image generation

Organization and enterprise owners manage the image generation model using their model policy, like any other Copilot model. If the image generation model is disabled, members can't generate images.

See [Manage Availability Of Default Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-availability-of-default-models) or [Manage Default Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-default-models).

## Content provenance and safety

Content provenance is the record of where a piece of content came from and whether it has changed since. For AI-generated images, provenance means attaching a signal to the image when it's created.

Common provenance signals include:

* **C2PA metadata**: An open industry standard for signed, tamper-evident metadata that records how a file was created and edited.
* **Perceptible watermarks**: A visible mark on the image, such as a logo, badge, or overlaid text, that anyone can see without special tools.
* **Imperceptible watermarks**: A signal embedded in the image's pixels that people can't see but detector software can read. Imperceptible watermarks survive cropping, compression, and screenshots better than metadata.

OpenAI attaches C2PA manifests to the images it generates and publishes tools that read them. Because C2PA data lives in the file's metadata, re-encoding the file, taking a screenshot, or stripping metadata usually removes it.

You can opt in to a perceptible "Made with AI" watermark on the images Copilot generates and edits. This is a per-user setting and is off by default. Copilot doesn't currently support requiring this watermark at the organization or enterprise level. To preserve content provenance, do not remove, obscure, or alter the C2PA metadata, perceptible watermarks, or imperceptible watermarks on images, including the "Made with AI" label.

Safety controls from OpenAI and GitHub screen prompts and images throughout image generation and editing. GitHub and OpenAI check each request at four points:

* Before the request reaches the model
* When text or images are sent to the model
* When an image is edited
* Before the result is shown

These include text and image classifiers that check for policy violations, and hash-based scanning of input and output images for matches to known prohibited content. If a safety check identifies a policy violation, the request or image is blocked.
