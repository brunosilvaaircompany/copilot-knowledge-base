# Using Actions Runner Controller runners in a workflow

## Using ARC runners in a workflow file

To assign jobs to run on a runner scale set, you can specify the name of the scale set as the value for the `runs-on` key in your GitHub Actions workflow file.

For example, the following configuration for a runner scale set has the `INSTALLATION_NAME` value set to `arc-runner-set`.

```bash
# Using a Personal Access Token (PAT)
INSTALLATION_NAME="arc-runner-set"
NAMESPACE="arc-runners"
GITHUB_CONFIG_URL="https://github.com/<your_enterprise/org/repo>"
GITHUB_PAT="<PAT>"
helm install "${INSTALLATION_NAME}" \
    --namespace "${NAMESPACE}" \
    --create-namespace \
    --set githubConfigUrl="${GITHUB_CONFIG_URL}" \
    --set githubConfigSecret.github_token="${GITHUB_PAT}" \
    oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set
```

To use this configuration in a workflow, set the value of the `runs-on` key in your workflow to `arc-runner-set`, similar to the following example.

```yaml
jobs:
  job_name:
    runs-on: arc-runner-set
```

## Using runner scale set names

Runner scale set names are unique within the runner group they belong to. To deploy multiple runner scale sets with the same name, they must belong to different runner groups. For more information about specifying runner scale set names, see [Deploy Runner Scale Sets](https://docs.github.com/en/actions/how-tos/manage-runners/use-actions-runner-controller/deploy-runner-scale-sets).

You can use the installation name of the runner scale set, or define the value of the `runnerScaleSetName` field in your [`values.yaml`](https://github.com/actions/actions-runner-controller/blob/master/charts/gha-runner-scale-set/values.yaml) file, as your `runs-on` target. You can also assign multiple labels to a scale set to enable more flexible job routing. To configure labels for a runner scale set, set the `runnerScaleSetLabels` value in your `values.yaml` file.
 For more information, see [Deploy Runner Scale Sets](https://docs.github.com/en/actions/how-tos/manage-runners/use-actions-runner-controller/deploy-runner-scale-sets).

## Using labels to target runner scale sets

You can also assign multiple labels to a runner scale set and use them to target runners in your workflow. To configure labels for a runner scale set, set the `runnerScaleSetLabels` values in your `values.yaml` file.

```yaml
runnerScaleSetLabels:
  - linux
  - gpu
  - private-network
```

To target a runner scale set with specific labels, specify the labels as an array in the `runs-on` key of your workflow.

```yaml
jobs:
  job_name:
    runs-on: [linux, gpu, private-network]
```

## Legal notice

Portions have been adapted from https://github.com/actions/actions-runner-controller/ under the Apache-2.0 license:

```text
Copyright 2019 Moto Ishizawa

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
