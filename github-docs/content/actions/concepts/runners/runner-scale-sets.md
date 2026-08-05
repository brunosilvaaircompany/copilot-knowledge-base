# Runner scale sets

## About runner scale sets

A runner scale set is a group of homogeneous runners that can be assigned jobs from GitHub Actions. The number of active runners owned by a runner scale set can be controlled by auto-scaling runner solutions such as Actions Runner Controller (ARC).

You can use runner groups to manage runner scale sets. Similar to self-hosted runners, you can add runner scale sets to existing runner groups. However, runner scale sets can belong to only one runner group at a time and can only have one label assigned to them.

To assign jobs to a runner scale set, you must configure your workflow to reference the runner scale set’s name. For more information, see [Use Arc In A Workflow](https://docs.github.com/en/actions/how-tos/manage-runners/use-actions-runner-controller/use-arc-in-a-workflow).

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


## Next steps

* For more information about the Actions Runner Controller as a concept, see [Actions Runner Controller](https://docs.github.com/en/actions/concepts/runners/actions-runner-controller).
* To learn about runner groups, see [Manage Access](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access).
