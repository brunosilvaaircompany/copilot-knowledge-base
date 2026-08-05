# Using labels with self-hosted runners

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




For information on how to use labels to route jobs to specific types of self-hosted runners, see [Use In A Workflow](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/use-in-a-workflow). You can also route jobs to runners in a specific group. For more information, see [Choose The Runner For A Job](https://docs.github.com/en/actions/how-tos/write-workflows/choose-where-workflows-run/choose-the-runner-for-a-job#choosing-runners-in-a-group).

A self-hosted runner can be located in either your repository, organization, or enterprise account settings on GitHub{% elsif ghes %} enterprise settings on GitHub Enterprise Server. To manage a self-hosted runner, you must have the following permissions, depending on where the self-hosted runner was added:
* **User repository:** You must be the repository owner.
* **Organization:** You must be an organization owner.
* **Organization repository:** You must be an organization owner, or have admin access to the repository.

* **Enterprise account:** You must be an enterprise owner.
{% elsif ghes %}
* **Enterprise:** You must be a GitHub Enterprise site administrator.



## Creating a custom label

You can create custom labels for runners at the repository, organization, and enterprise levels.

* [Creating a custom label for a repository runner](#creating-a-custom-label-for-a-repository-runner)
* [Creating a custom label for an organization runner](#creating-a-custom-label-for-an-organization-runner)
* [Creating a custom label for an enterprise runner](#creating-a-custom-label-for-an-enterprise-runner)

> [!NOTE]
> Labels are case-insensitive.

### Creating a custom label for a repository runner

1. Navigate to the main page of the repository where your self-hosted runner group is registered.
1. Click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runners**.



1. In the list of runners, click on the name of the runner you'd like to configure.

1. In the "Labels" section, click {% octicon "gear" aria-label="The Gear icon" %}.
1. In the "Find or create a label" field, type the name of your new label and click **Create new label**. The custom label is created and assigned to the self-hosted runner. Custom labels can be removed from self-hosted runners, but they currently can't be manually deleted.  Any unused labels that are not assigned to a runner will be automatically deleted within 24 hours.



### Creating a custom label for an organization runner

1. Navigate to the main page of the organization where your self-hosted runner group is registered.
1. Click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runners**.



1. In the list of runners, click on the name of the runner you'd like to configure.

1. In the "Labels" section, click {% octicon "gear" aria-label="The Gear icon" %}.
1. In the "Find or create a label" field, type the name of your new label and click **Create new label**. The custom label is created and assigned to the self-hosted runner. Custom labels can be removed from self-hosted runners, but they currently can't be manually deleted.  Any unused labels that are not assigned to a runner will be automatically deleted within 24 hours.





### Creating a custom label for an enterprise runner


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Actions**.

1. Click the **Runners** tab.

1. In the list of runners, click on the name of the runner you'd like to configure.

1. In the "Labels" section, click {% octicon "gear" aria-label="The Gear icon" %}.
1. In the "Find or create a label" field, type the name of your new label and click **Create new label**. The custom label is created and assigned to the self-hosted runner. Custom labels can be removed from self-hosted runners, but they currently can't be manually deleted.  Any unused labels that are not assigned to a runner will be automatically deleted within 24 hours.





## Assigning a label to a self-hosted runner

You can assign labels to self-hosted runners at the repository, organization, and enterprise levels.

* [Assigning a label to a repository runner](#assigning-a-label-to-a-repository-runner)
* [Assigning a label to an organization runner](#assigning-a-label-to-an-organization-runner)
* [Assigning a label to an enterprise runner](#assigning-a-label-to-an-enterprise-runner)

### Assigning a label to a repository runner

1. Navigate to the main page of the repository where your self-hosted runner group is registered.
1. Click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runners**.



 1. In the "Labels" section, click {% octicon "gear" aria-label="The Gear icon" %}.

  1. To assign a label to your self-hosted runner, in the "Find or create a label" field, click the label.


### Assigning a label to an organization runner

1. Navigate to the main page of the organization where your self-hosted runner group is registered.
1. Click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runners**.



 1. In the "Labels" section, click {% octicon "gear" aria-label="The Gear icon" %}.

  1. To assign a label to your self-hosted runner, in the "Find or create a label" field, click the label.




### Assigning a label to an enterprise runner


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Actions**.

1. Click the **Runners** tab.

1. In the list of runners, click on the name of the runner you'd like to configure.

 1. In the "Labels" section, click {% octicon "gear" aria-label="The Gear icon" %}.

  1. To assign a label to your self-hosted runner, in the "Find or create a label" field, click the label.




## Removing a custom label from a self-hosted runner

You can remove custom labels from self-hosted runners at the repository, organization, and enterprise levels.

* [Removing a custom label from a repository runner](#removing-a-custom-label-from-a-repository-runner)
* [Removing a custom label from an organization runner](#removing-a-custom-label-from-an-organization-runner)
* [Removing a custom label from an enterprise runner](#removing-a-custom-label-from-an-enterprise-runner)

### Removing a custom label from a repository runner

1. Navigate to the main page of the repository where your self-hosted runner group is registered.
1. Click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runners**.



 1. In the "Labels" section, click {% octicon "gear" aria-label="The Gear icon" %}.

  1. In the "Find or create a label" field, assigned labels are marked with the {% octicon "check" aria-label="The Check icon" %} icon. Click on a marked label to unassign it from your self-hosted runner.


### Removing a custom label from an organization runner

1. Navigate to the main page of the organization where your self-hosted runner group is registered.
1. Click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runners**.



 1. In the "Labels" section, click {% octicon "gear" aria-label="The Gear icon" %}.

  1. In the "Find or create a label" field, assigned labels are marked with the {% octicon "check" aria-label="The Check icon" %} icon. Click on a marked label to unassign it from your self-hosted runner.




### Removing a custom label from an enterprise runner


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Actions**.

1. Click the **Runners** tab.

1. In the list of runners, click on the name of the runner you'd like to configure.

 1. In the "Labels" section, click {% octicon "gear" aria-label="The Gear icon" %}.

  1. In the "Find or create a label" field, assigned labels are marked with the {% octicon "check" aria-label="The Check icon" %} icon. Click on a marked label to unassign it from your self-hosted runner.




## Programmatically assign labels

You can programmatically assign labels to a self-hosted runner after the runner is created, or during its initial configuration.

* To programmatically assign labels to an existing self-hosted runner, you must use the REST API. For more information, see [Self Hosted Runners](https://docs.github.com/en/rest/actions/self-hosted-runners).
* To programmatically assign labels to a self-hosted runner during the initial runner configuration, you can pass label names to the `config` script using the `labels` parameter.

  > [!NOTE]
  > You cannot use the `config` script to assign labels to an existing self-hosted runner.

  For example, this command assigns a label named `gpu` when configuring a new self-hosted runner:

  ```shell
  ./config.sh --url <REPOSITORY_URL> --token <REGISTRATION_TOKEN> --labels gpu
  ```

  The label is created if it does not already exist. You can also use this approach to assign the default labels to runners, such as `x64` or `linux`. When default labels are assigned using the configuration script, GitHub Actions accepts them as given and does not validate that the runner is actually using that operating system or architecture.

  You can use comma separation to assign multiple labels. For example:

  ```shell
  ./config.sh --url <REPOSITORY_URL> --token <REGISTRATION_TOKEN> --labels gpu,x64,linux
  ```

  > [!NOTE]
  > If you replace an existing runner, then you must reassign any custom labels.
