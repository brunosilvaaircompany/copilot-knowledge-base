# Building and deploying AI-powered apps with GitHub Spark

> [!NOTE]
> Beginning August 4, 2026, GitHub Spark will no longer accept new users or allow the creation of new apps. Existing users can continue to access and use apps they have already created. Open Spark workbench for your app, select "..." and "Create repository" to save your app code before August 31, 2026.

## Introduction

With GitHub Spark, you can describe what you want in natural language and get a fullstack web app with data storage, AI features, and GitHub authentication built in. You can iterate using prompts, visual tools, or code, and then deploy with a click to a fully managed runtime.

Spark is seamlessly integrated with GitHub so you can develop your spark via a synced GitHub codespace with Copilot for advanced editing. You can also create a repository for team collaboration, and leverage GitHub's ecosystem of tools and integrations.


This tutorial will guide you through the full lifecycle of building and deploying an app with Spark and exploring its features.

> [!NOTE]
> * GitHub Spark is in public preview with [data protection](https://gh.io/dpa) and subject to change.

> * The GitHub Copilot setting that blocks suggestions matching public code may not work as intended when using Spark. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#enabling-or-disabling-suggestions-matching-public-code).

### Prerequisites

* A GitHub account with Copilot Pro+, Copilot Max, or Copilot Enterprise license.

## Step 1: Create your web app

For this tutorial, we'll create a simple marketing tool app, where:
* The user enters a description of a product they want to market.
* The app generates marketing copy, and recommends a visual strategy and target audience.

1. Navigate to https://github.com/spark.
1. In the input field, enter a description of your app. For example:

   ```copilot copy
   Build an app called "AI-Powered Marketing Assistant."

   The app should allow users to input a brief description of a product or service. When the user submits their brief, send this information to a generative AI model with a prompt that asks the AI to return the following:
      - Persuasive and engaging marketing copy for the product or service.
      - A visual strategy for how to present the product/service (e.g., suggested imagery, colors, design motifs, or mood).
      - A recommendation for the ideal target audience.
   The app should display these three elements clearly and in an organized manner.  The app should look modern, fresh and engaging.
   ```

   > [!TIP]
   > * Be specific, and provide as many details as possible for the best results. You can ask [Copilot Chat](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text) to refine or suggest improvements to your initial prompt.
   > * Alternatively, drop a markdown document into the input field to provide Spark with more context on what you're hoping to build.

1. Optionally, upload an image to provide Spark with a visual reference for your app. Mocks, sketches, or screenshots all work to provide Spark with an idea of what you want to build.
1. Click **{% octicon "paper-airplane" aria-label="Submit prompt" %}** to build your app.

   > [!NOTE]
   > Spark will always generate a Typescript and React app.

## Step 2: Refine and expand your app

Once Spark is done generating your app, you can test it out in the live preview window. From here, you can iterate on and expand your app using natural language, visual editing controls, or code.

1. To make changes to your app using **natural language**, under the "Iterate" tab in the left sidebar, enter your instructions in the main input field, then submit.
1. Optionally, click one of the "Suggestions" directly above the input field in the "Iterate" tab to develop your app.
1. Spark automatically alerts you to detected errors. To fix the errors, click **Fix All** above the input field in the "Iterate" tab.
1. Optionally, click **{% octicon "code" aria-hidden="true" aria-label="code" %} Code** to view and edit the underlying code. The code editing panel has Copilot inline suggestions built in.
1. To make targeted changes to a specific element of your app click the **target icon** in the top right corner then hover over and select an element in the live preview pane.

## Step 3: Customize the styling of your app

Next, let's change the styling of your app using Spark's built-in tools. Alternatively, you can edit the code directly.

1. Change your app's overall appearance:
   * Click the **Theme** tab to adjust typography, colors, border radius, spacing, and other visual elements.
   * Choose from pre-generated themes to easily update the overall style your app.
1. To target visual edits at a specific component, click the **target icon**, then select an element of the app in the preview pane. Styling controls related to that specific element will show up in the left sidebar.
1. Optionally, edit styles in code:
   * Click **{% octicon "code" aria-label="Code" %}** to open the code editor.
   * Modify CSS, Tailwind CSS, or custom variables for fine-grained control (e.g., padding, spacing, fonts, colors).

     > [!TIP]
     > You can import custom fonts (like Google Fonts) or add advanced styles directly in the Spark code editor.
     > Ask [Copilot Chat](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text) for step-by-step guidance if you're not familiar with styling syntax.

1. Click the **Assets** tab to upload assets you want to surface in your app.
   * Add images, logos, videos, documents or other assets to personalize your app.
   * Once uploaded, instruct Spark on how you'd like to incorporate those assets into your app in the "Iterate" tab.

## Step 4: Store and manage data

If Spark detects the need to store data in your app, it will automatically set up data storage for you using a key-value store.

For our marketing app, let's add data storage so that users can save their favorite pieces of marketing copy and easily access them again later:

1. Use the following instruction in the "Iterate" tab to guide Spark:

   ```copilot copy
   Add a "Favorites" page where users can save and view their favorite marketing copy results.
   ```

1. Interact with the app once it's done generating to test saving and retrieving favorites.
1. Check the "Data" tab to view and edit the stored values.
1. If you explicitly **don't** want Spark to save data, ask Spark to "store data locally" or "don't persist data".

## Step 5: Refine AI capabilities

Next, let's iterate on the AI capabilities included in our app, which are powered by GitHub Models.

Spark automatically detects when AI is needed for features in your app. It will auto-generate the prompts for each AI feature, integrate with the best-fit models, and manage API integration and LLM inference on your behalf.

1. Click the **Prompts** tab.
1. Review the prompts Spark generated to power each of the AI features used in your app.
   * In the case of our marketing app there are three separate prompts Spark has generated for us (marketing copy generation, visual strategy recommendation, and target audience recommendation).
1. Click on each prompt to view and edit without needing to go into the code. Make adjustments to better fit your use case.
1. Test the app to see updated results.

## Step 6: Edit and debug with code and Copilot

You can view or edit your app’s code directly in Spark or via a synced GitHub codespace.

> [!NOTE]
> * Spark uses an opinionated stack (**React**, **TypeScript**) for reliability.
> * For best results, you should **work within Spark's SDK** and core framework.
> * You can **add external libraries**, but compatibility isn’t guaranteed — you should test thoroughly.
> * Directly editing the React code **lets you add model context**, as long as you follow valid syntax and Spark's framework.

1. To edit code in Spark:
   * Click **{% octicon "code" aria-hidden="true" aria-label="Code" %} Code**.
   * Navigate the file tree and make any edits, with access to Copilot inline suggestions in the editor. Changes are reflected instantly in the live preview window.
1. To make more advanced edits:
   * In the top right corner, click **{% octicon "kebab-horizontal" aria-label="More actions" %}**, then click **{% octicon "codespaces" aria-label=“Open codespace” %} Open codespace** (a full-featured cloud IDE) to launch a codespace in a new browser tab.
   * Once inside the codespace, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}** to open Copilot to make more advanced changes.
      * In the prompt box, select **Agent** mode to enable Copilot to autonomously build, review, and troubleshoot your code.
      * Select **Edit** mode for Copilot to review your app's code and suggest improvements and fixes.
      * Choose **Ask** mode for Copilot to explain and help you understand the code or any errors you see in Spark.
   * Changes you make in the codespace are automatically synced to Spark.

## Step 7: Deploy and share your app

Spark comes with a fully integrated runtime environment that allows you to deploy your app in one click.

> [!NOTE]
> * When you deploy your spark, if you choose to make it visible to other users, note that the data in your app is **shared across all users** who can access your app. Make sure no sensitive data is included in your spark prior to updating visibility settings.
> * You can also choose to share your spark as **read-only** so that other users can view your app's content, but they cannot edit content, delete files or records, or create new items.

1. In the top right corner, click **Publish**.
1. By default, your spark will be private and only accessible to you. Under "Visibility", choose whether you want your spark to remain private, or make it available to members of a specific organization on GitHub, or all GitHub users.

   ![Screenshot of the GitHub Spark publication menu. The "All GitHub users" visibility option is outlined in orange.](/assets/images/help/copilot/spark-github-user-visibility.png)

1. Under "Data Access", choose whether you want to give other users read-only or write access to your app.

   Choose **read-only** to let others view your app, without allowing them to create, edit or delete content.

   For example, if you've created a family calendar app and you want users to view the app but you don't want them to be able to create, edit or delete events, choose **read-only** so users can't modify your spark's data store.

1. Click **Visit site** to be taken to your live, deployed app. Copy your site's URL to share with others.

   When you publish your app, Spark automatically includes cloud-based storage and LLM inference for your application to use as part of the integrated runtime.

   The URL for your spark is generated based on the name of your spark. You can edit the name of your app and Spark will automatically manage re-routing of old URLs to your latest URL.

## Step 8: Invite collaborators with a repository

Now that you have a functional, deployed app, you can continue to build and collaborate on your app in the same way you would with any other GitHub project, by creating and linking a GitHub repository to your spark.

1. In the top right corner, click **{% octicon "kebab-horizontal" aria-label="More actions" %}**, then click **{% octicon "repo-push" aria-hidden="true" aria-label="repo-push" %} Create repository**.
1. In dialog box that opens, click **Create**.

A new, private repository is created under your personal account on GitHub, with the name of the repository based on the name of your spark.

Any changes made to your spark prior to repository creation will be added to your repository so you have a full record of all changes and commits made to your spark since its creation.

There's a two-way sync between your spark and the repository, so changes made in either Spark or the main branch of your repository are automatically reflected in both places.

You can also create issues in your repository and assign them to Copilot cloud agent so it can draft pull requests for fixes and improvements.

## Next steps

Explore more ideas you can build with Spark:
* **Prototype new ideas quickly**: if you have a specific idea for a feature or app, upload a mockup, sketch, screenshot, or even paste a markdown documentation into Spark and ask Spark to build out your idea.
* **Build internal tools for yourself and your team**: If you have a common workflow or process that currently sits in a document or spreadsheet, explain your workflow or process to Spark and Spark can turn it into an interactive web app.

## Further reading

* [Agents](https://docs.github.com/en/copilot/responsible-use/agents)
* [GitHub Spark](https://docs.github.com/en/billing/concepts/product-billing/github-spark)
* [GitHub Pre Release License Terms](https://docs.github.com/en/free-pro-team@latest/site-policy/github-terms/github-pre-release-license-terms)
