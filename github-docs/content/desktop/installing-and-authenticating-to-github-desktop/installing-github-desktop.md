# Installing GitHub Desktop

<a href="https://desktop.github.com?ref_product=desktop&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Download GitHub Desktop</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

## About GitHub Desktop installation

You can install GitHub Desktop on supported operating systems, which currently include macOS 12.0 or later and Windows 10 64-bit or later. If you have a GitHub or GitHub Enterprise account, you can connect your account to GitHub Desktop. For more information about creating an account, see [Creating An Account On GitHub](https://docs.github.com/en/account-and-profile/how-tos/account-management/creating-an-account-on-github). If you're part of an organization that uses Enterprise Managed Users and you do not have an account, contact your enterprise administrator.{% elsif ghes %} If you're a member of an organization that uses GitHub Enterprise Server and you do not have an account, contact your site administrator.

{% windows %}

If you are a network administrator, you can deploy GitHub Desktop to computers running Windows on an Active Directory-managed network by using the Windows Installer package file (`.msi`) with Group Policy or another remote installation system.

The Windows Installer package extracts the standalone installer (`.exe`) and configures Windows to install GitHub Desktop the next time a user signs in to their workstation. Users must have permissions to install GitHub Desktop in their user directory.

If a user runs the Windows Installer package for GitHub Desktop directly, to complete the installation, the user must sign out of their workstation and then sign back in.

{% endwindows %}

## Downloading and installing GitHub Desktop

{% mac %}

You can install GitHub Desktop on macOS 12.0 or later.

1. Visit the [download page for GitHub Desktop](https://desktop.github.com/).

1. Click **Download for macOS**.
1. In your computer's `Downloads` folder, double-click the **GitHub Desktop** zip file.
1. After the file has been unzipped, double-click the **GitHub Desktop** application file.
1. GitHub Desktop will launch after installation is complete.

{% endmac %}

{% windows %}

You can install GitHub Desktop on Windows 10 64-bit or later.

> [!WARNING]
> You must have a 64-bit operating system to run GitHub Desktop.

1. Visit the [download page for GitHub Desktop](https://desktop.github.com/).

1. Click **Download for Windows**.
1. In your computer's `Downloads` folder, double-click the **GitHub Desktop** setup file.
1. GitHub Desktop will launch after installation is complete.

{% endwindows %}

{% linux %}

Linux is not yet supported

{% endlinux %}
