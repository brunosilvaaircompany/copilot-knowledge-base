# version







> [!NOTE]
> This content describes the most recent release of the CodeQL CLI. For more information about this release, see https://github.com/github/codeql-cli-binaries/releases.
>
> To see details of the options available for this command in an earlier release, run the command with the <span style="white-space: nowrap;">`--help`</span> option in your terminal.


## Synopsis

```shell copy
codeql version <options>...
```

## Description

Show the version of the CodeQL toolchain.

## Options

### Primary Options

#### `--format=<fmt>`

Select output format. Choices include `text` _(default)_ ,`terse`, and
`json`.

### Common options

#### `-h, --help`

Show this help text.

#### `-J=<opt>`

\[Advanced] Give option to the JVM running the command.

(Beware that options containing spaces will not be handled correctly.)

#### `-v, --verbose`

Incrementally increase the number of progress messages printed.

#### `-q, --quiet`

Incrementally decrease the number of progress messages printed.

#### `--verbosity=<level>`

\[Advanced] Explicitly set the verbosity level to one of errors,
warnings, progress, progress+, progress++, progress+++. Overrides `-v`
and `-q`.

#### `--logdir=<dir>`

\[Advanced] Write detailed logs to one or more files in the given
directory, with generated names that include timestamps and the name of
the running subcommand.

(To write a log file with a name you have full control over, instead
give `--log-to-stderr` and redirect stderr as desired.)

#### `--common-caches=<dir>`

\[Advanced] Controls the location of cached data on disk that will
persist between several runs of the CLI, such as downloaded QL packs and
compiled query plans. If not set explicitly, this defaults to a
directory named `.codeql` in the user's home directory; it will be
created if it doesn't already exist.

Available since `v2.15.2`.
