# query decompile







> [!NOTE]
> This content describes the most recent release of the CodeQL CLI. For more information about this release, see https://github.com/github/codeql-cli-binaries/releases.
>
> To see details of the options available for this command in an earlier release, run the command with the <span style="white-space: nowrap;">`--help`</span> option in your terminal.


## Synopsis

```shell copy
codeql query decompile [--output=<file>] <options>... -- <file>
```

## Description

\[Plumbing] Read an intermediate representation of a compiled query
from a .qlo file.

The code will be written to standard output, unless the `--output`
option is specified.

## Options

### Primary Options

#### `<file>`

\[Mandatory] QLO file to read from.

#### `-o, --output=<file>`

The file to write the desired output to.

#### `--kind=<kind>`

The kind of the intermediate representation to read. The options are:

`dil`: A Datalog intermediate representation.

`ra`: A relational algebra intermediate representation. This is used by
the query evaluation phase.

`bytecode`: Show the raw (uncompressed) bytecode from the .qlo file.
Mostly useful for debugging the compiler/evaluator.

The default is `dil` if the query was compiled with
`--include-dil-in-qlo` and `ra` otherwise

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
