# CWEs used by GitHub's preset Dependabot rules

## `Dismiss low impact issues for development-scoped dependencies`

The `Dismiss low impact issues for development-scoped dependencies` rule is a GitHub preset that auto-dismisses certain types of vulnerabilities that are found in npm dependencies used in development.


Along with the `ecosystem:npm` and `scope:development` alert metadata, we use the following GitHub-curated Common Weakness Enumerations (CWEs) to filter out low impact alerts for the `Dismiss low impact issues for development-scoped dependencies` rule. We regularly improve this list and vulnerability patterns covered by built-in rules.

### Resource Management Issues

* CWE-400 Uncontrolled Resource Consumption
* CWE-770 Allocation of Resources Without Limits or Throttling
* CWE-409 Improper Handling of Highly Compressed Data (Data Amplification)
* CWE-908 Use of Uninitialized Resource
* CWE-1333 Inefficient Regular Expression Complexity
* CWE-835 Loop with Unreachable Exit Condition ('Infinite Loop')
* CWE-674 Uncontrolled Recursion
* CWE-1119 Excessive Use of Unconditional Branching

### Programming and Logic Errors

* CWE-185 Incorrect Regular Expression
* CWE-754 Improper Check for Unusual or Exceptional Conditions
* CWE-755 Improper Handling of Exceptional Conditions
* CWE-248 Uncaught Exception
* CWE-252 Unchecked Return Value
* CWE-391 Unchecked Error Condition
* CWE-696 Incorrect Behavior Order
* CWE-1254 Incorrect Comparison Logic Granularity
* CWE-665 Improper Initialization
* CWE-703 Improper Check or Handling of Exceptional Conditions
* CWE-178 Improper Handling of Case Sensitivity

### Information Disclosure Issues

* CWE-544 Missing Standardized Error Handling Mechanism
* CWE-377 Insecure Temporary File
* CWE-451 User Interface (UI) Misrepresentation of Critical Information
* CWE-668 Exposure of Resource to Wrong Sphere
