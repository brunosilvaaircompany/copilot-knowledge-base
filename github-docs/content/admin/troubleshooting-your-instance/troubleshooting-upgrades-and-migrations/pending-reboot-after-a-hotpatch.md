# Pending reboot after a hotpatch

## Symptoms

After you install a hotpatch, you may see problems that seem unrelated to the upgrade.

* Features that worked before the hotpatch start failing.
* The instance is unstable in ways that are inconsistent and hard to reproduce.
* Services behave unexpectedly, or do not pick up a change you have made.

Nothing in these symptoms points back to the upgrade, so a pending reboot is worth ruling out before you investigate further.

## Causes

A hotpatch can include updates to the kernel or to core system packages. The running system continues to use the versions that were loaded when it last started, so those updates do not take effect until you restart.

The hotpatch upgrade script tells you when a reboot is required, but it does not restart the instance for you. If you miss that message, or defer the reboot and then forget it, the instance runs in a mixed state where some components are updated and others are not. Installing further hotpatches without rebooting compounds this.

## Confirming the problem

1. SSH into the administrative shell. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
1. Check whether a reboot is outstanding. Either file is present only when the system requires a restart.

   ```shell
   ls /var/run/reboot-required /var/run/reboot-required.pkgs
   ```

   If either file is listed, a reboot is outstanding. If neither exists, the command reports `No such file or directory` for both paths, which means no reboot is pending and the problem lies elsewhere.

1. If `/var/run/reboot-required.pkgs` is present, you can see which packages are waiting for the restart.

   ```shell
   cat /var/run/reboot-required.pkgs
   ```

## Resolving the problem

Rebooting makes your GitHub Enterprise Server instance unavailable, so plan it rather than doing it immediately.

> [!WARNING]
> Rebooting interrupts anyone using the instance. Enabling maintenance mode stops new work from starting, but it does not stop work that is already running, so wait for active processes to finish before you reboot.

1. Schedule a maintenance window with your users.
1. Enable maintenance mode, then wait for all active processes to complete. For more information, see [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode).
1. Reboot the instance.

   ```shell
   sudo reboot
   ```

1. When the instance is back, confirm that no reboot is still pending. Both files should now be gone, so the command reports `No such file or directory` for each path. That is the result you want.

   ```shell
   ls /var/run/reboot-required /var/run/reboot-required.pkgs
   ```

1. Disable maintenance mode and confirm that the original problem is resolved.

## Preventing recurrence

* When a hotpatch reports that a reboot is required, schedule it and track it to completion. You can pick a convenient time, but reboot as soon as practical, particularly where the hotpatch included security fixes. For more information, see [Upgrading With A Hotpatch](https://docs.github.com/en/admin/upgrading-your-instance/performing-an-upgrade/upgrading-with-a-hotpatch).
* Do not install several hotpatches in a row without rebooting when one is required, because the instance drifts further from the state the updates expect.
* Check for a pending reboot as part of your post-upgrade checks, so you catch it before your users do.

## Contacting GitHub Support

If the problems continue after you reboot, or you are unsure about any of these steps, contact GitHub Support rather than continuing. For more information, see [Creating A Support Ticket](https://docs.github.com/en/support/contacting-github-support/creating-a-support-ticket).

If you have already opened a ticket, attaching a support bundle helps GitHub Support diagnose the problem faster. For more information, see [Providing Data To GitHub Support](https://docs.github.com/en/support/contacting-github-support/providing-data-to-github-support).

## Further reading

* [Overview Of The Upgrade Process](https://docs.github.com/en/admin/upgrading-your-instance/preparing-to-upgrade/overview-of-the-upgrade-process)
* [Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities)
