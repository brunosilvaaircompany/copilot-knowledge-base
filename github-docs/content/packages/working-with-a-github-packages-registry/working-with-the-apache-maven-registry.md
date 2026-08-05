> [!NOTE] The Apache Maven registry is not available for GitHub Enterprise Cloud with data residency.








> [!NOTE]
> This package type may not be available for your instance, because site administrators can enable or disable each supported package type. For more information, see [Configuring Package Ecosystem Support For Your Enterprise](https://docs.github.com/en/admin/configuring-packages/configuring-package-ecosystem-support-for-your-enterprise).




## Authenticating to GitHub Packages

> [!NOTE]
> GitHub Packages only supports authentication using a personal access token (classic). For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).


You need an access token to publish, install, and delete private, internal, and public packages.

You can use a personal access token (classic) to authenticate to GitHub Packages or the GitHub API. When you create a personal access token (classic), you can assign the token different scopes depending on your needs. For more information about packages-related scopes for a personal access token (classic), see [About Permissions For GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries).

To authenticate to a GitHub Packages registry within a GitHub Actions workflow, you can use:
* `GITHUB_TOKEN` to publish packages associated with the workflow repository.
* A personal access token (classic) with at least `read:packages` scope to install packages associated with other private repositories (`GITHUB_TOKEN` can be used if the repository is granted read access to the package. See [Configuring A Packages Access Control And Visibility](https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)).


For more information about `GITHUB_TOKEN` used in GitHub Actions workflows, see [Authenticate With Github_Token](https://docs.github.com/en/actions/tutorials/authenticate-with-github_token#using-the-github_token-in-a-workflow).


### Authenticating with a personal access token

You must use a personal access token (classic) with the appropriate scopes to publish and install packages in GitHub Packages. For more information, see [Introduction To GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages).


You can authenticate to GitHub Packages with Apache Maven by editing your _~/.m2/settings.xml_ file to include your personal access token (classic). Create a new _~/.m2/settings.xml_ file if one doesn't exist.

In the `servers` tag, add a child `server` tag with an `id`, replacing USERNAME with your GitHub username, and TOKEN with your personal access token.

In the `repositories` tag, configure a repository by mapping the `id` of the repository to the `id` you added in the `server` tag containing your credentials. Replace HOSTNAME with the host name of {% ifversion ghes %}your GitHub Enterprise Server instance, and{% endif %} OWNER with the name of the personal account or organization that owns the repository. Because uppercase letters aren't supported, you must use lowercase letters for the repository owner even if the GitHub user or organization name contains uppercase letters.

If you want to interact with multiple repositories, you can add each repository to separate `repository` children in the `repositories` tag, mapping the `id` of each to the credentials in the `servers` tag.

GitHub Packages supports `SNAPSHOT` versions of Apache Maven. To use the GitHub Packages repository for downloading `SNAPSHOT` artifacts, enable SNAPSHOTS in the POM of the consuming project or your _~/.m2/settings.xml_ file.



If your instance has subdomain isolation enabled:


```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">

  <activeProfiles>
    <activeProfile>github</activeProfile>
  </activeProfiles>

  <profiles>
    <profile>
      <id>github</id>
      <repositories>
        <repository>
          <id>central</id>
          <url>https://repo.maven.apache.org/maven2</url>
        </repository>
        <repository>
          <id>github</id>
          <url>https://maven.pkg.github.com/OWNER/REPOSITORY</url>
          <snapshots>
            <enabled>true</enabled>
          </snapshots>
        </repository>
      </repositories>
    </profile>
  </profiles>

  <servers>
    <server>
      <id>github</id>
      <username>USERNAME</username>
      <password>TOKEN</password>
    </server>
  </servers>
</settings>
```


If your instance has subdomain isolation disabled:

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">

  <activeProfiles>
    <activeProfile>github</activeProfile>
  </activeProfiles>

  <profiles>
    <profile>
      <id>github</id>
      <repositories>
        <repository>
          <id>central</id>
          <url>https://repo.maven.apache.org/maven2</url>
        </repository>
        <repository>
          <id>github</id>
          <url>HOSTNAME/_registry/maven/OWNER/REPOSITORY</url>
          <snapshots>
            <enabled>true</enabled>
          </snapshots>
        </repository>
      </repositories>
    </profile>
  </profiles>

  <servers>
    <server>
      <id>github</id>
      <username>USERNAME</username>
      <password>TOKEN</password>
    </server>
  </servers>
</settings>
```



## Publishing a package

By default, GitHub publishes the package to an existing repository with the same name as the package.
 For example, GitHub will publish a package named `com.example:test` in a repository called `OWNER/test`.

>[!WARNING] Your Apache Maven package must follow the naming convention, and therefore the `artifactId` field should only contain lowercase letters, digits, or hyphens. For more information, see [Naming convention of Maven coordinates](https://maven.apache.org/guides/mini/guide-naming-conventions.html) in the maven.apache.org documentation. If you use uppercase letters in the artifact name, you'll get a _422 Unprocessable Entity_ response.


If you would like to publish multiple packages to the same repository, you can include the URL of the repository in the `<distributionManagement>` element of the _pom.xml_ file. GitHub will match the repository based on that field. Since the repository name is also part of the `distributionManagement` element, there are no additional steps to publish multiple packages to the same repository.

For more information on creating a package, see the [maven.apache.org documentation](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html).

1. Edit the `distributionManagement` element of the _pom.xml_ file located in your package directory, replacing HOSTNAME with the host name of {% ifversion ghes %}your GitHub Enterprise Server instance, {% endif %}`OWNER` with the name of the personal account or organization that owns the repository and `REPOSITORY` with the name of the repository containing your project.

   If your instance has subdomain isolation enabled:

   ```xml
   <distributionManagement>
      <repository>
        <id>github</id>
        <name>GitHub OWNER Apache Maven Packages</name>
        <url>https://maven.pkg.github.com/OWNER/REPOSITORY</url>
      </repository>
   </distributionManagement>
   ```
   If your instance has subdomain isolation disabled:
   ```xml
   <distributionManagement>
      <repository>
        <id>github</id>
        <name>GitHub OWNER Apache Maven Packages</name>
        <url>https://HOSTNAME/_registry/maven/OWNER/REPOSITORY</url>
      </repository>
   </distributionManagement>
   ```

1. Publish the package.

   ```shell
   mvn deploy
   ```

After you publish a package, you can view the package on GitHub. For more information, see [Viewing Packages](https://docs.github.com/en/packages/learn-github-packages/viewing-packages).


## Installing a package

To install an Apache Maven package from GitHub Packages, edit the _pom.xml_ file to include the package as a dependency. If you want to install packages from any repository for a specified repository owner, use a repository URL like `https://maven.pkg.github.com/OWNER/*`. For more information on using a _pom.xml_ file in your project, see [Introduction to the POM](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html) in the Apache Maven documentation.

1. Authenticate to GitHub Packages. For more information, see [Authenticating to GitHub Packages](#authenticating-to-github-packages).

1. Add the package dependencies to the `dependencies` element of your project _pom.xml_ file, replacing `com.example:test` with your package.

   ```xml
   <dependencies>
    <dependency>
       <groupId>com.example</groupId>
       <artifactId>test</artifactId>
       <version>1.0.0-SNAPSHOT</version>
     </dependency>
   </dependencies>
   ```

1. Install the package.

   ```shell
   mvn install
   ```

## Further reading

* [Working With The Gradle Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-gradle-registry)
* [Deleting And Restoring A Package](https://docs.github.com/en/packages/learn-github-packages/deleting-and-restoring-a-package)
