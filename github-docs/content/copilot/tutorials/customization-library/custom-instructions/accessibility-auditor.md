# Accessibility auditor

> [!NOTE]
> * The examples in this library are intended for inspiration—you are encouraged to adjust them to be more specific to your projects, languages, and team processes.
> * For community-contributed examples of custom instructions for specific languages and scenarios, see the [Awesome GitHub Copilot Customizations](https://github.com/github/awesome-copilot/blob/main/docs/README.instructions.md) repository.
> * You can apply custom instructions across different scopes, depending on the platform or IDE where you are creating them. For more information, see "[Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization)."


The following example shows a path-specific `accessibility.instructions.md` file that applies only to HTML files in your repository, and guides GitHub Copilot to generate accessible, inclusive HTML that follows WCAG guidelines. For more information about path-specific instructions files, see [Add Repository Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions#creating-path-specific-custom-instructions).

````text copy
---
applyTo: **/*.html
---

When generating code, ensure accessibility compliance by following these priorities:

## Semantic HTML First
- Use proper semantic elements: `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`
- Structure headings sequentially (h1 → h2 → h3, never skip levels)
- Use one `<h1>` per page with descriptive heading text

## Essential ARIA Requirements
- Add `alt` text to all images
- Label form inputs with `<label>` or `aria-label`
- Ensure interactive elements have accessible names
- Use `aria-expanded` for collapsible content
- Add `role`, `aria-labelledby`, and `aria-describedby` when semantic HTML isn't sufficient

## Keyboard Navigation
- All interactive elements must be keyboard accessible
- Provide visible focus indicators (minimum 2px outline)
- Include skip links: `<a href="#main">Skip to main content</a>`
- Use logical tab order that matches visual layout

## Color and Contrast
- Ensure 4.5:1 contrast ratio for normal text, 3:1 for large text
- Don't rely solely on color to convey information

## Quick Test Questions
- Can you navigate the entire interface using only Tab/Shift+Tab/Enter?
- Are all images and icons properly described?
- Can screen reader users understand the content and functionality?

## Screen Reader Compatibility

**Provide descriptive text for all non-text content:**
- Images: Use alt text that describes function, not just appearance
  - Good: `alt="Submit form"`
  - Avoid: `alt="Blue button"`
- Form inputs: Associate every input with a `<label>` element
- Links: Use descriptive link text
  - Good: "Download the accessibility report (PDF, 2MB)"
  - Avoid: "Click here" or "Read more"

**Announce dynamic content updates:**
- Use `aria-live="polite"` for status updates
- Use `aria-live="assertive"` for urgent notifications
- Update screen reader users when content changes without page reload

---

## Color and Contrast Requirements

**Meet these specific contrast ratios:**
- Normal text (under 18pt): Minimum 4.5:1 contrast ratio
- Large text (18pt+ or 14pt+ bold): Minimum 3:1 contrast ratio
- UI components and graphics: Minimum 3:1 contrast ratio

**Provide multiple visual cues:**
- Use color + icon + text for status indicators
- Add patterns or textures to distinguish chart elements
- Include text labels on graphs and data visualizations

---

## Testing Integration Steps

**Include these automated checks:**
1. Run axe-core accessibility scanner in CI/CD pipeline
2. Test with lighthouse accessibility audit
3. Validate HTML markup for semantic correctness

**Perform these manual tests:**
1. Navigate entire interface using only Tab and arrow keys
2. Test with screen reader (NVDA on Windows, VoiceOver on Mac)
3. Verify 200% zoom doesn't break layout or hide content
4. Check color contrast with tools like WebAIM Color Contrast Checker

---

## Form Design Standards

**Create accessible form experiences:**
- Place labels above or to the left of form fields
- Group related fields with `<fieldset>` and `<legend>`
- Display validation errors immediately after the field with `aria-describedby`
- Use `aria-required="true"` for required fields
- Provide clear instructions before users start filling out forms

**Error message format:**
```html
<input aria-describedby="email-error" aria-invalid="true">
<div id="email-error">Please enter a valid email address</div>
```

---

**Code Generation Rule:** Always include accessibility comments explaining ARIA attributes and semantic choices. Test code with keyboard navigation before suggesting it's complete.

````

## Further reading

* [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization) - Overview of response customization in GitHub Copilot
* [Add Custom Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions) - How to configure custom instructions
* [Awesome GitHub Copilot Customizations](https://github.com/github/awesome-copilot/blob/main/README.md) - Repository of community-contributed custom instructions and other customizations for specific languages and scenarios
