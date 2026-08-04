# C# compiler unexpectedly failing

## About these errors

The CodeQL tracer injects some flags into the C# compiler invocation to ensure every component is built and included in the CodeQL database, which may cause your C# code to build differently to what you expect during CodeQL analysis. See [Codeql For Compiled Languages](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/codeql-for-compiled-languages).

`/p:EmitCompilerGeneratedFiles=true` is one of the injected properties, and emits compiler-generated files during the build process. This option causes the compiler to generate additional files that are used to support features such as improved regular expression support, serialization, and web application view generation. These generated artifacts are typically not written to disk by the compiler, but setting the option to `true` forces writing the files to disk, and so the extractor can process the files.

For some legacy projects, and projects that use `.sqlproj` files, you may see that the injected `/p:EmitCompilerGeneratedFiles=true` property causes unexpected issues with `msbuild`.

## Confirming the cause of the problem

If you have set the "treat warnings as errors" flag, then `msbuild` will produce an error, which will cause the extraction to fail.

## Fixing the problem

You should add the `<CompilerGeneratedFilesOutputPath>` element to the application's project file. For more information, see [Understanding the project file](https://learn.microsoft.com/en-us/aspnet/web-forms/overview/deployment/web-deployment-in-the-enterprise/understanding-the-project-file) in Microsoft Learn.
