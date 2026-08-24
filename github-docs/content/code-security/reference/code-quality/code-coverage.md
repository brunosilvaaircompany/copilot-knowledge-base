# Code coverage reference

Code coverage measures what percentage of the lines in your source code are executed when your test suite runs. Code Quality displays a line coverage percentage on pull requests after you upload a Cobertura XML coverage report.

> [!NOTE]
> Code Quality reports **line coverage** only. Coverage tools often also report function, branch, or statement coverage. Code Quality does not currently use these metrics, even if your Cobertura XML report includes them, and they are not shown on pull requests or evaluated by coverage threshold rules.

## How line coverage is calculated

The line coverage percentage represents the number of lines covered by tests divided by the total number of lines, expressed as a percentage. Code Quality stores the latest upload for each branch (including the default branch) and compares the pull request branch line coverage to the default branch line coverage.

For example, if your default branch has 44% line coverage and your pull request branch has 65% line coverage, the pull request gained 21 percentage points of line coverage.

## Per-file delta

The per-file breakdown on pull requests shows how line coverage changed for each modified file. A positive delta means the file gained line coverage on the pull request branch compared to the default branch.

To set up code coverage for your repository, see [Set Up Code Coverage](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/set-up-code-coverage).

## Further reading

* [Metrics And Ratings](https://docs.github.com/en/code-security/reference/code-quality/metrics-and-ratings)
