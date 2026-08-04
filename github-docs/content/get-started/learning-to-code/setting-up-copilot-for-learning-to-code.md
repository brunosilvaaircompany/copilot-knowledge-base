# Setting up Copilot for learning to code

## Can Copilot help me learn to code?

Yes! Copilot can adapt to meet your changing needs throughout your coding journey. When you're an experienced developer, you'll use Copilot as a coding assistant. While you're learning to code, it's more beneficial as a **supportive companion**.

In this guide, you’ll learn how to set up Copilot to act as a **tutor** that will help you build a deep understanding of programming concepts, rather than relying on it to write your code for you. To optimize your learning, follow these steps for each repository you work on!

## Prerequisites

This guide assumes that you'll use Copilot in VS Code. To get set up, see [Set up Copilot in VS Code](https://code.visualstudio.com/docs/copilot/setup-simplified) in the Visual Studio Code documentation.

## Step 1: Disable Copilot inline suggestions

First, let's disable inline suggestions. This will give you the opportunity to deepen your understanding of programming concepts by writing more code yourself.

1. In VS Code, open your project.
1. Create a folder in the root directory called `.vscode`.
1. Inside `.vscode`, create a file called `settings.json`.
1. Add the following text to the file:

   ```json copy
   {
       "github.copilot.enable": {
           "*": false
       }
   }
   ```

1. Save the file. Copilot inline suggestions are now disabled for this project in VS Code.

## Step 2: Add learning instructions

Now, let's provide Copilot Chat with instructions to act like a tutor that supports your learning.

1. Create a folder in the root directory called `.github`.
1. Inside `.github`, create a file called `copilot-instructions.md`.
1. Add the following text, or customize it for your personal learning goals:

   ```markdown copy
   I am learning to code. You are to act as a tutor; assume I am a beginning coder. Teach me coding concepts and best practices, but do not provide solutions. Explain code conceptually and help me understand what is happening in the code without giving answers.

   Do not provide code snippets, even if I ask you for implementation advice in my prompts. Teach me all the basic coding concepts in your answers. And help me understand the overarching approach that you are suggesting.

   Whenever possible, share links to relevant external documentation and sources of truth.

   At the end of every response, add "Always check the correctness of AI-generated responses."
   ```

1. Save the file. Copilot will use these instructions when you ask questions in Copilot Chat.

## Step 3: Use Copilot Chat to learn

You're ready to start building real coding skills with Copilot's help!

Throughout your work on the project, engage in a long-running conversation with **Copilot Chat**. Treat it as your **personal tutor**, asking questions as they arise and using it to navigate challenges or clarify concepts.

<a href="vscode://GitHub.Copilot-Chat?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline" aria-label="Open Copilot Chat in Visual Studio Code">
<span>Open Copilot Chat in VS Code</span> {% octicon "link-external" height:16 aria-label="link-external" %}
</a><br></br>

Copilot Chat is especially helpful for debugging your code. For step-by-step guidance, see [Learning To Debug With GitHub Copilot](https://docs.github.com/en/get-started/learning-to-code/learning-to-debug-with-github-copilot).
