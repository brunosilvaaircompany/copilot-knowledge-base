# Application card: GitHub Copilot inline suggestions

> [!NOTE] You are currently viewing the documentation for Free, Pro, and Team plans. GitHub Copilot Enterprise is only available to customers on the GitHub Enterprise Cloud plan. For full documentation of Copilot Enterprise, see [What Is GitHub Copilot](https://docs.github.com/en/enterprise-cloud@latest/copilot/get-started/what-is-github-copilot) in the GitHub Enterprise Cloud documentation.




## What is an Application Card?


GitHub’s application and platform cards are intended to help you understand how our AI technology works, the choices application owners can make that influence application performance and behavior, and the importance of considering the whole application, including the technology, the people, and the environment. Application cards are created for AI applications and platform cards are created for AI platform services. These resources can support the development or deployment of your own applications and can be shared with users or stakeholders impacted by them. 

As part of its commitment to responsible AI, GitHub adheres to Microsoft's [six core principles](https://www.microsoft.com/en-us/ai/principles-and-approach/?msockid=3da790040c776d6f2b5485e40de56c06#ai-principles): fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability. These principles are embedded in the [Responsible AI Standard](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/final/en-us/microsoft-brand/documents/Microsoft-Responsible-AI-Standard-General-Requirements.pdf?culture=en-us&country=us), which guides teams in designing, building, and testing AI applications. Application and Platform Cards play a key role in operationalizing these principles by offering transparency around capabilities, intended uses, and limitations. For further insight, readers are encouraged to explore Microsoft’s [Responsible AI Transparency Report](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/Responsible-AI-Transparency-Report-2025-vertical.pdf) and [GitHub Terms](https://docs.github.com/en/free-pro-team@latest/site-policy/github-terms).


## 1. Overview

GitHub Copilot inline suggestions provide autocomplete-style suggestions as you work. These suggestions appear inline in your editor or in text fields on GitHub.com, helping you write code and pull request descriptions more quickly.

Copilot inline suggestions come in two forms:

* **IDE inline suggestions**: As you type code in a supported editor, Copilot automatically offers inline suggestions to complete the current line, generate new blocks of code, or suggest edits to existing code. These suggestions may include predicting both the location of the next edit you may want to make and what that edit should be, including deletions, modifications, or insertions of code. You can accept all or part of a suggestion, dismiss it, or keep typing to ignore it. Inline suggestions work across a broad range of programming languages and frameworks. 
* **Pull request text completion**: When you pause while typing a pull request description on GitHub.com, Copilot suggests prose to continue your thought. The suggestion draws on the pull request title, existing description text, commit titles, partial diffs, and recently viewed pull request and issue titles. You can accept the suggestion by pressing Tab or reject it by continuing to type.

The primary supported language for pull request text completion is English. Inline suggestions support many programming languages, with quality varying by the volume and diversity of training data available for each language.

## 2. Key terms

The following list provides a glossary of key terms related to GitHub Copilot inline suggestions:

* **Content filtering**: A safety system that scans prompts and responses to detect and block harmful, offensive, or insecure content before it is shown to the user.
* **Hallucination**: A phenomenon where a language model generates output that sounds plausible but is factually incorrect, unsupported by the provided context, or entirely fabricated. Hallucinations are a known risk of large language models and are a key reason that human review of AI-generated output is important.
* **Inline suggestion**: An AI‑generated code suggestion from Copilot that appears in the editor as you type. Inline suggestions can complete the current line or propose edits to existing code by predicting both where the next change should occur and what that change should be, including inserting, modifying, or deleting code. Suggestions may appear at the cursor or guide users to other relevant locations in the codebase, where they can be accepted, dismissed, or ignored by continuing to type.
* **Large language model (LLM)**: A type of neural network trained on a large body of text data that can generate, analyze, and transform natural language and code. Copilot inline suggestions use one or more LLMs to process context and produce suggestions.
* **Public code matching**: A safety feature that checks whether Copilot's suggestions match publicly available code. Depending on your settings, matching suggestions are either blocked or annotated with a reference to the source repository and any license information.
* **Pull request text completion**: An autocomplete-style suggestion for pull request descriptions on GitHub.com. When you pause while typing, Copilot suggests prose to continue your thought based on the pull request context.
* **Training data**: The large body of publicly available text and code that was used to train the foundation models behind Copilot inline suggestions. The composition of the training data influences the quality and coverage of the model's suggestions across different programming languages, frameworks, and topics.

## 3. Key features or capabilities

The key features and capabilities outlined here describe what GitHub Copilot inline suggestions are designed to do and how they perform across supported tasks.

* **Inline code suggestions**: As you type code in a supported editor, Copilot automatically offers inline suggestions that can complete the current line, generate new blocks of code, or propose edits to existing code. These suggestions may include inserting, modifying, or deleting code, code comments, tests, and more, by predicting both what changes should be made and where in the codebase they should occur. Suggestions may appear at the cursor or guide users to other relevant edit locations, and can be accepted in full or in part, dismissed, or ignored by continuing to type.
* **Comment-driven code generation**: You can guide inline suggestions by writing code comments that describe the code you expect. For example, comments like "use recursion" or "use a singleton pattern" influence the type of algorithm Copilot suggests.
* **Multi-language support**: Inline suggestions work across a broad range of programming languages and frameworks. The quality of suggestions depends on the volume and diversity of training data available for each language. For a list of actively developed programming languages that are found on GitHub, see [Programming languages](https://github.com/collections/programming-languages).
* **Pull request text completion**: When you pause while typing a pull request description on GitHub.com, Copilot suggests prose to continue your thought. The suggestion draws on the pull request title, existing description text, commit titles, partial diffs, and recently viewed pull request and issue titles.

## 4. Intended uses

GitHub Copilot inline suggestions can be used in multiple scenarios across a variety of industries. Some examples of use cases include:

* **Accelerating code authoring**: Developers can use inline suggestions to work faster by accepting predicted changes as they type, including completing code, generating new blocks, or modifying existing code. Suggestions may insert, update, or delete code across the current line or at other relevant locations in the file by anticipating both what changes should be made and where they should occur. This is particularly useful for boilerplate code, repetitive patterns, common idioms, and maintaining consistency as code evolves across supported languages and frameworks.
* **Generating unit tests**: Copilot can suggest test cases based on the surrounding code, including possible input parameters, expected output values, and assertions. This helps developers create test coverage more quickly, including edge cases and boundary conditions that might be difficult to identify manually. Generated tests should still be reviewed, as they may not cover all scenarios.
* **Guided code generation via comments**: Developers can write natural language comments describing the code they need, and Copilot generates corresponding implementations or modifications. This can be useful for specifying algorithms, design patterns, or methods and properties to add to a class.
* **Drafting pull request descriptions**: When writing a pull request description on GitHub.com, Copilot can suggest prose to continue your thought, helping you write clear summaries of your changes more quickly.

## 5. Models and training data

GitHub Copilot inline suggestions leverage a variety of AI models to power the experience that users see. For a comparison of the models available for Copilot, see [Model Comparison](https://docs.github.com/en/copilot/reference/ai-models/model-comparison). For the full list of supported models, see [Supported Models](https://docs.github.com/en/copilot/reference/ai-models/supported-models). For information on where models are hosted, see [Model Hosting](https://docs.github.com/en/copilot/reference/ai-models/model-hosting). To learn more about the data used to train the foundation models behind GitHub Copilot inline suggestions, refer to the linked AI model comparison above and [What data has GitHub Copilot been trained on?](https://github.com/features/copilot#faq) in the GitHub Copilot FAQ.

Pull request text completion uses a simple-prompt flow leveraging the Copilot API with the generic large language model. No additional trained models are used for this feature.

## 6. Performance

Copilot inline suggestions work by using a combination of natural language processing and machine learning to understand your surrounding context and provide suggestions. This process follows a consistent pipeline:

1. **Input processing**: The surrounding code from your cursor position is pre-processed by the inline suggestions system, combined with contextual information (such as code snippets from open tabs in the editor), and sent to a large language model in the form of a prompt. For information about data retention, see the [Copilot Trust Center](https://copilot.github.trust.page/faq?s=b9buqrq7o9ssfk3ta50x6).
1. **Language model analysis**: A large language model processes the input prompt. For inline suggestions, the model generates both inline suggestions and predicted edits based on context from the current and open files in the editor, including inserting, modifying, or deleting code by anticipating what changes should be made and where they should occur. For pull request text completion, Copilot uses a language model via the Copilot API.
1. **Response generation**: The language model generates a response based on its analysis of the input prompt and the context provided. For inline suggestions, this may take the form of completing code, generating new blocks, or proposing changes to existing code (including deletions) by predicting both what edits should be made and where in the codebase they should occur.  For pull request text completion, the response is a prose continuation of the description. 
1. **Output formatting**: The response is presented inline in the editor as a suggested change that is visually distinct from the surrounding content. Suggestions may appear at or near the cursor, as well as highlight other relevant locations in the codebase where edits are proposed, and are only applied to the file or text field if you explicitly accept them.

Copilot inline suggestions are intended to provide the most relevant and useful suggestions to augment your existing work. However, they may not always provide the answers you are looking for. Users are responsible for reviewing and validating suggestions before accepting them to ensure they are accurate and appropriate. As part of the product development process, generated suggestions are run through content filters. The content filtering system detects and blocks harmful or offensive content, or insecure code. Depending on your GitHub settings, the filter also blocks or annotates suggestions that contain matches to public code.

### Differences by experience

#### Inline suggestions (IDE)

Inline suggestions use fine-tuned language models specialized for the task. They analyze the code surrounding your current work along with context from the codebase and users' system. Based on this analysis, the system may complete code, generate new blocks, or propose edits (including deletions) to existing code by predicting both what changes should be made and where in the codebase they should occur. The system is only intended to assist with coding tasks. 

#### Pull request text completion (GitHub.com)

Pull request text completion uses a simple-prompt flow leveraging the Copilot API with a generic large language model. When you pause while typing a pull request description, the system combines the pull request title, existing description text, commit titles, partial diffs, and recently viewed pull request and issue titles to suggest prose that continues your thought. The primary supported language is English.

## 7. Limitations

Understanding GitHub Copilot inline suggestions limitations is crucial to determine they are used within safe and effective boundaries. While we encourage customers to leverage Copilot inline suggestions in their innovative solutions or applications, it's important to note that Copilot inline suggestions were not designed for every possible scenario. We encourage users to refer to [GitHub Terms](https://docs.github.com/en/free-pro-team@latest/site-policy/github-terms) as well as the following considerations when choosing a use case:

* **Limited scope**: Inline suggestions are trained on a large body of code but still have a limited scope and may not be able to handle more complex code structures or obscure programming languages. For each language, the quality of suggestions depends on the volume and diversity of training data for that language. For example, JavaScript is well-represented in public repositories and is one of the best supported languages. Languages with less representation in public repositories may be more challenging to assist with. Additionally, inline suggestions can only suggest code based on the context of the code being written, so they may not be able to identify larger design or architectural issues. Inline suggestions are intended to generate code and code-related output, not natural language outputs.
* **Potential biases**: The sources of Copilot's training data may contain biases and errors that can be perpetuated by the tool. Additionally, inline suggestions may be biased towards certain programming languages or coding styles, which can lead to suboptimal or incomplete code suggestions.
* **Security risks**: Copilot generates code based on the context of the code being written, which can potentially expose sensitive information or vulnerabilities if not used carefully. You should be careful when using Copilot to generate code for security-sensitive applications and always review and test the generated code thoroughly.
* **Matches with public code**: Inline suggestions are capable of generating new code, which they do in a probabilistic way. While the probability is low, Copilot may generate code suggestions that match code in the training set.
* **Inaccurate code**: Copilot may generate code that appears to be valid but may not actually be semantically or syntactically correct or may not accurately reflect the intent of the developer. To mitigate the risk of inaccurate code, you should carefully review and test the generated code, particularly when dealing with critical or sensitive applications. You should also ensure that the generated code adheres to best practices and design patterns and fits within the overall architecture and style of the codebase.
* **Large pull requests may reduce suggestion quality**: For very large pull requests, some of the pull request content that Copilot relies on for text completion may not fit into the API call. As a result, some suggestions you might expect may not appear, or may be less contextually accurate.
* **Hallucination risk in pull request text completion**: Because pull request text completion is generated by a large language model, there is a risk of hallucination—where Copilot generates statements that sound plausible but are factually inaccurate. Carefully reviewing the generated text before publishing is essential.
* **Replication of pull request content**: Pull request text completion draws from the content of the pull request itself. If harmful or offensive terms appear in the pull request content (such as commit messages or diffs), there is a possibility that the suggestion may also include those terms.
* **Language support**: The primary supported language for pull request text completion is English. Inline suggestions support many programming languages, with quality varying by the volume and diversity of training data available for each language.

## 8. Evaluations


Performance and safety evaluations assess whether AI applications are operating reliably and securely by examining factors like groundedness, relevance, and coherence while identifying the risks of generating harmful content. The following evaluations were conducted with safety components already in place, which are also described in [9. Safety components and mitigations](#9-safety-components-and-mitigations).


### Performance and quality evaluations

GitHub Copilot inline suggestions are evaluated through a multi-layered offline and online evaluation system designed to assess suggestion quality, relevance, and developer value. The system is also designed to enable rapid model iteration while maintaining high quality standards. 

### Performance and quality evaluation methods

For offline evaluation, we use a curated set of test suites covering key inline suggestion scenarios across multiple programming languages. Models are evaluated against expected outputs to detect regressions in core behaviors such as code correctness and contextual relevance. We also compare candidate models against production baselines using by assessing output quality, coherence, and alignment with developer intent. 

For online evaluation, we deploy candidate models to controlled user segments to measure acceptance rate, shown rate, edit quality, and retention. 

Our evaluations track latency, token usage, and compute footprint alongside quality metrics to ensure models deliver value within operational constraints. 

We also leverage Microsoft and GitHub internal developers’ experiences to evaluate candidate models under real development conditions, providing qualitative feedback and early signal on edge-case behaviors before broader rollout.  

### Risk and safety evaluations


Evaluating potential risks associated with AI-generated content is essential for safeguarding against content risks with varying degrees of severity. This includes evaluating an AI application's predisposition towards generating harmful content or testing vulnerabilities to jailbreak attacks. For GitHub, we conduct performance evaluations, including those which are adapted for coding purposes from [Microsoft Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/evaluation-evaluators/risk-safety-evaluators):

* Hate and unfairness
* Sexual
* Violence
* Self-harm
* Protected material
* Jailbreak
* Code vulnerability


### Risk and safety evaluation methods

**Adversarial testing**: When the base model is updated or significant changes are made to training data sources (such as incorporating a new type of dataset), the model undergoes safety testing where it is deliberately challenged with inputs designed to elicit harmful, insecure, or policy-violating outputs. This testing covers multiple risk categories, including harmful content, intellectual property risks, and insecure code generation. Results are compared against production baselines, and if there are any regressions, they undergo manual review to assess true risk. 

### Evaluation data for quality and safety


Our evaluation data is custom-built to assess AI application performance across key areas of **safety** and **quality**, simulating real-world scenarios and risks. We begin by identifying relevant evaluation aspects of concern based on multi-disciplinary research and expert input. These concerns are translated into targeted evaluation objectives and guide formulation of evaluation metrics. For **safety**, we create adversarial prompts to elicit undesirable or edge-case responses, which are then scored using AI-assisted annotators trained to assess alignment with GitHub’s standards. For **quality**, we craft rubric-based prompts relevant to scenarios including evaluating retrieval-augmented generation (RAG) applications and agents. Datasets are curated from diverse sources including synthetic and public datasets to simulate real-world user scenarios. Using the curated datasets, both evaluations undergo iterative refinement and human alignment to improve metric efficacy and reliability. This methodology forms the foundation of repeatable, rigorous assessments that reflect how customers use evaluations to build better AI.


### Custom evaluations

Copilot inline suggestions have been subject to RAI red teaming to identify and address potential safety risks. We continue to monitor the efficacy and safety of the feature over time. For more information, see [Microsoft AI Red Team building future of safer AI](https://www.microsoft.com/en-us/security/blog/2023/08/07/microsoft-ai-red-team-building-future-of-safer-ai/) on the Microsoft security blog.

## 9. Safety components and mitigations

GitHub Copilot inline suggestions employ a safety architecture with multiple layers of protection across the entire suggestion pipeline. 

* **Input and output processing**: Code context — including edit history, surrounding code, and cursor position — is structured and scoped before reaching the language model. The model is constrained to a narrow task (predicting the next code edit within a defined window) and must follow a strict output format, producing only code edits rather than freeform responses. The system prompt also enforces adherence to content policies, with a mandated refusal response for requests that may breach guidelines. 
* **Content and code safety filters**: GitHub Copilot includes safety filters designed to reduce harmful or inappropriate outputs and discourage misuse. Users should still review suggestions before using them.
* **Public code matching**: GitHub Copilot uses a duplication detection system designed to identify when suggestions match publicly available code. Organizations and individuals can configure this to block matching suggestions or provide code referencing with repository and license information. 
* **Human oversight**: Inline suggestions follow human-in-the-loop principles—suggestions are visually distinct from the surrounding content and are only applied when the user explicitly accepts them. No code changes occur without deliberate user action. Users are encouraged to review, test, and validate all generated suggestions. 

## 10. Best practices for deploying and adopting GitHub Copilot inline suggestions

Responsible AI is a shared commitment between GitHub and its customers. While GitHub builds AI applications with safety, fairness, and transparency at the core, customers play a critical role in deploying and using these technologies responsibly within their own contexts. To support this partnership, we offer the following best practices for deployers and end users to help customers implement responsible AI effectively.

* **Exercise caution and evaluate outcomes when using Copilot suggestions for consequential decisions or in sensitive domains**: 
Consequential decisions are those that may have a legal or significant impact on a person's access to education, employment, financial platforms, government benefits, healthcare, housing, insurance, legal platforms, or that could result in physical, psychological, or financial harm. Sensitive domains—such as financial platforms, healthcare, and housing—require particular care due to the potential for disproportionate impact on different groups of people. When using AI for decisions in these areas, make sure that impacted stakeholders can understand how decisions are made, appeal decisions, and update any relevant input data.

* **Evaluate legal and regulatory considerations**: 
Customers need to evaluate potential specific legal and regulatory obligations when using any AI platforms and solutions, which may not be appropriate for use in every industry or scenario. Additionally, AI platforms or solutions are not designed for and may not be used in ways prohibited in applicable terms of service and relevant codes of conduct.

* **Keep prompts on topic**: Copilot inline suggestions are exclusively intended to generate code or code-related suggestions. Limiting the content in the editor to code or coding-related information can enhance the quality of suggestions.
* **Provide good context for pull request text completion**: The quality of pull request text completion suggestions depends on the quality of the pull request title, commit messages, and any text already in the description. Providing clear, descriptive titles and commit messages will improve the relevance of suggestions. It remains your responsibility to review and assess the accuracy of information in the pull requests you create.
* **Use Copilot inline suggestions as a tool, not a replacement**: While Copilot can be a powerful tool for generating code, it is important to use it as a tool rather than as a replacement for human programming. You should always review Copilot's suggestions before accepting them, and further validate it after to ensure that it meets your requirements and is free of errors or security concerns.
* **Exercise human oversight when appropriate**: Human oversight is an important safeguard when interacting with AI applications. While we continuously improve our AI applications, AI might still make mistakes. The outputs generated may be inaccurate, incomplete, biased, misaligned, or irrelevant to your intended goals. This could happen due to various reasons, such as ambiguity in the inputs or limitations of the underlying models. As such, users should review the responses generated by Copilot inline suggestions and verify that they match their expectations and requirements.
* **Be aware of the risk of overreliance**: 
Overreliance on AI happens when users accept incorrect or incomplete AI outputs, mainly because mistakes in AI outputs may be hard to detect. For the end-user, overreliance could result in decreased productivity, loss of trust, application abandonment, financial loss, psychological harm, physical harm, among others. (e.g. a doctor accepts an incorrect AI output).

* **Exercise caution when designing agentic AI in sensitive domains**: 
Users should exercise caution when designing and/or deploying agentic AI applications in sensitive domains where agent actions are irreversible or highly consequential. Additional precautions should also be taken when creating autonomous agentic AI as described further in the [GitHub Terms](https://docs.github.com/en/free-pro-team@latest/site-policy/github-terms).

* **Use secure coding and code review practices**: While inline suggestions can generate syntactically correct code, it may not always be secure. You should always follow best practices for secure coding, such as avoiding hard-coded passwords or SQL injection vulnerabilities, as well as following code review best practices.
* **Stay up to date**: Copilot inline suggestions are still an evolving technology. You should stay up to date with any updates or changes to the tool, as well as any new security risks or best practices that may emerge. Automated extension updates are enabled by default in Visual Studio Code, Visual Studio, and the JetBrains suite of IDEs.

> [!IMPORTANT]
> Users assume all risks associated with generated code including security vulnerabilities, bugs, and IP infringement.

## 11. Learn more about GitHub Copilot inline suggestions

For additional guidance on the responsible use of Copilot inline suggestions, we recommend reviewing the following documentation:

* [Get Ide Code Suggestions](https://docs.github.com/en/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions)
* [GitHub Terms For Additional Products And Features](https://docs.github.com/en/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)
* [Copilot Trust Center](https://copilot.github.trust.page/)

### Learn more about responsible AI

* [Microsoft AI principles](https://www.microsoft.com/en-us/ai/responsible-ai)
* [Microsoft responsible AI resources](https://www.microsoft.com/en-us/ai/responsible-ai-resources)
* [Microsoft Azure Learning courses on responsible AI](https://docs.microsoft.com/en-us/learn/paths/responsible-ai-business-principles/)
