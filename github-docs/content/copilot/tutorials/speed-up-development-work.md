# Speeding up development work with GitHub Copilot Spaces

Copilot Spaces helps you work faster when starting a new feature, understanding a system, or picking up a task in an unfamiliar codebase.

Use Spaces to:

* Organize the context you need in one place.
* Provide Copilot with relevant code and documentation.
* Reduce time spent switching between tools or asking others for background information.

To create a space, go to [https://github.com/copilot/spaces](https://github.com/copilot/spaces?ref_product=copilot&ref_type=engagement&ref_style=text), and click **Create space**.

The examples in this article show you how to use Spaces for common development tasks.

## Developing a new feature

Create a space when you start working on a specific feature. Add the relevant code, a product specification, and any supporting materials. Supporting materials can include notes from a design review or mockup images.

Copilot can help you:

* Summarize how the current implementation works.
* Suggest changes or additions based on the specification.
* Draft a first implementation or outline next steps.
* Flag missing elements or inconsistencies.

**Instructions**:
> This space contains the new user registration form for a healthcare nonprofit providing low-cost testing. It is built using React and Tailwind.

**Suggested prompt**:
> How should I add support for 2FA?

## Defining the logic for a small, frequent task

Document the logic for repetitive tasks once and share it through a space. This approach keeps everyone consistent and saves time. Tasks like tracking telemetry events or handling event emissions benefit from this approach.

If you have a process flowchart, upload it to your space for reference. Copilot can:

* Suggest efficient patterns based on your previous work.
* Help write reusable functions or templates.
* Review the logic to ensure it aligns with project standards.
* Provide examples of how similar tasks have been handled in the codebase.

**Instructions**:
> You help developers implement telemetry events. You should (1) validate what the user's goals are for the event, (2) propose a new event structure based on examples of existing events (and using the common telemetry schema), and (3) create a new version of the telemetry config file.

**Suggested prompt**:
> Help me log when a user clicks on an in-app notification.

## Sharing knowledge with teammates

Create a space for topics where people tend to ask similar questions. For example, questions about how authentication or search works in your project.

Copilot can:

* Explain how the code works.
* Answer questions based on the latest documentation.
* Guide new team members on best practices.

**Instructions**:
> You contain the code and documentation associated with our authentication system.

**Suggested prompt**:
> How does SSO work?

## Hands-on practice

Try the [Scale institutional knowledge using Copilot Spaces](https://github.com/skills/scale-institutional-knowledge-using-copilot-spaces) Skills exercise for practical experience. This exercise shows you how to:

* Centralize scattered project management knowledge in Copilot Spaces.
* Convert team insights into searchable, versioned artifacts.
* Give all team members equal access to processes, decisions, and rationale.
* Connect a repository as a structured knowledge source.
* Extract, refine, and standardize workflows collaboratively.
* Feed validated improvements back into living documentation.
* Accelerate onboarding and reduce single-person dependency risk.
* Enable consistent, repeatable project execution.

## Next steps

After you create a space to help with development tasks, consider sharing it with your team to reduce handoffs and repeated questions. See [Collaborate With Others](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/copilot-spaces/collaborate-with-others).
