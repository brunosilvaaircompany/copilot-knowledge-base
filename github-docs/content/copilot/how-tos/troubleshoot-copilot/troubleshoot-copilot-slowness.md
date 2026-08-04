# Troubleshooting slow responses from GitHub Copilot

## About the problem

If GitHub Copilot is responding more slowly than expected, the problem may be related to network conditions, local system performance, editor configuration, or connectivity restrictions such as proxies or firewalls. Because Copilot relies on remote services to generate responses, issues that affect communication with GitHub services can reduce responsiveness or cause delays. The troubleshooting steps below can help you determine whether the problem is caused by your environment or by a broader service issue.

If Copilot is responding slowly, work through the following troubleshooting steps.

## Check your internet connection 

Make sure you have a stable, high-speed internet connection. Slow or inconsistent connectivity can increase latency and affect how quickly Copilot returns responses.

## Check the GitHub status page  
   
Visit the [GitHub status page](https://www.githubstatus.com/) to confirm whether there is an ongoing incident affecting Copilot or related GitHub services.

## Update your editor and Copilot extension 
   
Make sure your editor and the Copilot extension or plugin are up to date. After updating, restart your editor.

## Check for extension conflicts
   
Temporarily disable other extensions or plugins, especially ones related to AI coding assistants, linting, formatting, or code analysis. Conflicts between extensions can sometimes affect editor responsiveness and make Copilot appear slow.

## Try a smaller or simpler file
   
Copilot may respond more slowly in very large files or in projects with high complexity. Test whether performance improves in a smaller file or after splitting large files into smaller units.

## Test in a new project or workspace

Open a new minimal project or workspace and test Copilot there. If response times improve, the issue may be related to the size, dependencies, or configuration of your main project.

## Review system resource usage

Check CPU and memory usage on your machine. High system load or limited available resources can slow down your editor and affect how quickly Copilot responds.

## Check proxy, VPN, and firewall settings

If you use a proxy, VPN, firewall, or security software that inspects web traffic, verify that it is not blocking or interfering with connections required by Copilot. If you work behind a corporate proxy or firewall, you may need to review your organization's network configuration and make sure to follow [Troubleshoot Firewall Settings](https://docs.github.com/en/copilot/how-tos/troubleshoot-copilot/troubleshoot-firewall-settings).

## Review logs for errors or timeouts

Check your editor logs for errors, timeouts, or connectivity problems.

   * In **Visual Studio Code**, open the **Output** panel and select **GitHub Copilot** from the dropdown.
   * In **JetBrains IDEs**, open the logs from the **Help** menu.
   
For more information, see [View Logs?Tool=Vscode](https://docs.github.com/en/copilot/how-tos/troubleshoot-copilot/view-logs?tool=vscode#viewing-and-collecting-log-files). Save any relevant logs if you need to report the problem.

## Try a different network or device

If possible, test Copilot on a different network or another device. This can help determine whether the issue is specific to your current environment.

## Check GitHub Docs and known issues

Review [Troubleshoot Common Issues](https://docs.github.com/en/copilot/how-tos/troubleshoot-copilot/troubleshoot-common-issues), similar reports, or environment-specific guidance.

## Contact GitHub Support with diagnostic details

If the problem persists, collect relevant diagnostic information before contacting GitHub Support. Include your editor and Copilot extension or plugin versions, steps to reproduce the problem, example files if available, and any related log messages or errors.
