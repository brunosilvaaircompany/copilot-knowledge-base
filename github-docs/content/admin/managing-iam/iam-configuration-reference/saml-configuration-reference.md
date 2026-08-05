# SAML configuration reference

## About SAML configuration

To use SAML single sign-on (SSO) for authentication to GitHub, you must configure both your external SAML identity provider (IdP) and {% ifversion ghes %}your GitHub Enterprise Server instance{% elsif ghec %}your enterprise or organization on GitHub{% endif %}. In a SAML configuration, GitHub functions as a SAML service provider (SP). For more information about authentication for your enterprise, see [Identity And Access Management Fundamentals](https://docs.github.com/en/admin/concepts/identity-and-access-management/identity-and-access-management-fundamentals#authentication-methods).

 GitHub provides integration according to the SAML 2.0 specification. For more information, see the [SAML Wiki](https://wiki.oasis-open.org/security) on the OASIS website.

You must enter unique values from your SAML IdP when configuring SAML SSO for GitHub, and you must also enter unique values from GitHub on your IdP.

## SAML metadata



The SP metadata for GitHub Enterprise Cloud is available for either organizations or enterprises with SAML SSO. GitHub uses the `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` binding.

If you use Enterprise Managed Users, you can only enable SAML SSO at the enterprise level.

### Organizations

You can configure SAML SSO for an individual organization in your enterprise. You can also configure SAML SSO for an organization if you use an individual organization on GitHub Enterprise Cloud and do not use an enterprise account. For more information, see [Managing Saml Single Sign On For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization).

The SP metadata for an organization on GitHub is available at `https://github.com/orgs/ORGANIZATION/saml/metadata`, where **ORGANIZATION** is the name of your organization on GitHub.

| Value | Other names | Description | Example |
| :- | :- | :- | :- |
| SP Entity ID | SP URL, audience restriction | The top-level URL for your organization on {% ifversion ghes %}your GitHub Enterprise Server instance | `https://github.com/orgs/ORGANIZATION` |
| SP Assertion Consumer Service (ACS) URL | Reply, recipient, or destination URL | URL where IdP sends SAML responses | `https://github.com/orgs/ORGANIZATION/saml/consume` |
| SP Single Sign-On (SSO) URL | | URL where IdP begins SSO |  `https://github.com/orgs/ORGANIZATION/sso` |

### Enterprises

Depending on your environment, the SP metadata for an enterprise on GitHub Enterprise Cloud is available at either:

* `https://github.com/enterprises/ENTERPRISE/saml/metadata`, where **ENTERPRISE** is the name of your enterprise
* `https://SUBDOMAIN.ghe.com/enterprises/SUBDOMAIN/saml/metadata`, where **SUBDOMAIN** is the subdomain for your enterprise

| Value | Other names | Description | Example |
| :- | :- | :- | :- |
| SP Entity ID | SP URL, audience restriction | The top-level URL for your enterprise on your GitHub Enterprise Server instance | `https://github.com/enterprises/ENTERPRISE` |
| SP Assertion Consumer Service (ACS) URL | Reply, recipient, or destination URL | URL where IdP sends SAML responses | `https://github.com/enterprises/ENTERPRISE/saml/consume` |
| SP Single Sign-On (SSO) URL | | URL where IdP begins SSO |  `https://github.com/enterprises/ENTERPRISE/sso` |

{% elsif ghes %}

The SP metadata for your GitHub Enterprise Server instance is available at `http(s)://HOSTNAME/saml/metadata`, where **HOSTNAME** is the hostname for your instance. GitHub Enterprise Server uses the `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` binding.

| Value | Other names | Description | Example |
| :- | :- | :- | :- |
| SP Entity ID | SP URL, audience restriction | The top-level URL for your GitHub Enterprise Server instance | `http(s)://HOSTNAME` |
| SP Assertion Consumer Service (ACS) URL | Reply, recipient, or destination URL | URL where IdP sends SAML responses | `http(s)://HOSTNAME/saml/consume` |
| SP Single Sign-On (SSO) URL | | URL where IdP begins SSO |  `http(s)://HOSTNAME/sso` |

{% endif %}

## SAML attributes

The following SAML attributes are available for GitHub. You can change the attribute names in the Management Console, with the exception of the `administrator` attribute. For more information, see [Administering Your Instance From The Web UI](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-web-ui).

| Name | Required | Description |
| :- | :- | :- |
| `NameID` | {% octicon "check" aria-label="Required" %} | A persistent user identifier. Any persistent name identifier format may be used. If you use an enterprise with Enterprise Managed Users, GitHub will normalize the `NameID` element to use as a username unless one of the alternative assertions is provided. For more information, see [Username Considerations For External Authentication](https://docs.github.com/en/admin/managing-iam/iam-configuration-reference/username-considerations-for-external-authentication).<br><br> > [!NOTE] It's important to use a human-readable, persistent identifier. Using a transient identifier format like `urn:oasis:names:tc:SAML:2.0:nameid-format:transient` will result in re-linking of accounts on every sign-in, which can be detrimental to authorization management.  |
| `SessionNotOnOrAfter` | {% octicon "x" aria-label="Optional" %} | The date that GitHub invalidates the associated session. After invalidation, the person must authenticate once again to access your enterprise's resources{% elsif ghes %}{% ifversion ghes %}your GitHub Enterprise Server instance{% endif %}. For more information, see [Session duration and timeout](#session-duration-and-timeout). |
|  |
| `administrator` | {% octicon "x" aria-label="Optional" %} | When the value is `true`, GitHub will automatically promote the user to be a site administrator. Setting this attribute to anything but `true` will result in demotion, as long as the value is not blank. Omitting this attribute or leaving the value blank will not change the role of the user. |
| `username` | {% octicon "x" aria-label="Optional" %} | The username for {% ifversion ghes %}your GitHub Enterprise Server instance. |
| {% endif %} |
| `full_name` | {% octicon "x" aria-label="Optional" %} | If you configure SAML SSO for an enterprise and you use Enterprise Managed Users, the full name of the user to display on the user's profile page. |
| `emails` | {% octicon "x" aria-label="Optional" %} | The email addresses for the user. You can specify more than one address. If you sync license usage between GitHub Enterprise Server and GitHub Enterprise Cloud, GitHub Connect uses `emails` to identify unique users across products. For more information, see [Sync License Usage](https://docs.github.com/en/billing/how-tos/manage-server-licenses/sync-license-usage). |
| `public_keys` | {% octicon "x" aria-label="Optional" %} | If you configure SAML SSO for an enterprise and you use Enterprise Managed Users, the public SSH keys for the user. You can specify more than one key. |
| `gpg_keys` | {% octicon "x" aria-label="Optional" %} | If you configure SAML SSO for an enterprise and you use Enterprise Managed Users, the GPG keys for the user. You can specify more than one key. |

To specify more than one value for an attribute, use multiple `<saml2:AttributeValue>` elements.

```xml
<saml2:Attribute FriendlyName="public_keys" Name="urn:oid:1.2.840.113549.1.1.1" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
    <saml2:AttributeValue>ssh-rsa LONG KEY</saml2:AttributeValue>
    <saml2:AttributeValue>ssh-rsa LONG KEY 2</saml2:AttributeValue>
</saml2:Attribute>
```

## SAML response requirements

GitHub requires that the response message from your IdP fulfill the following requirements.

* Your IdP must provide the `<Destination>` element on the root response document and match the ACS URL only when the root response document is signed. If your IdP signs the assertion, GitHub will ignore the assertion.
* Your IdP must always provide the `<Audience>` element as part of the `<AudienceRestriction>` element. The value must match your `EntityId` for GitHub. This value is the URL where you access GitHub, such as `http(s)://HOSTNAME`.

  
  * If you configure SAML for an organization, this value is `https://github.com/orgs/ORGANIZATION`.
  * If you configure SAML for an enterprise, this URL is `https://github.com/enterprises/ENTERPRISE` or `https://SUBDOMAIN.ghe.com/enterprises/SUBDOMAIN`.
  
* Your IdP must provide a single assertion in the response with a digital signature. You can accomplish this by signing the `<Assertion>` element or by signing the `<Response>` element.
* Your IdP must provide a `<NameID>` element as part of the `<Subject>` element. You may use any persistent name identifier format.
* Your IdP must include the `Recipient` attribute, which must be set to the ACS URL. The following example demonstrates the attribute.

     ```xml
     <samlp:Response ...>
       <saml:Assertion ...>
         <saml:Subject>
           <saml:NameID ...>...</saml:NameID>
           <saml:SubjectConfirmation ...>
             <saml:SubjectConfirmationData Recipient="https://github.com/enterprises/ENTERPRISE{% elsif ghes %}HOSTNAME/saml/consume" .../>
           </saml:SubjectConfirmation>
         </saml:Subject>
         <saml:AttributeStatement>
           <saml:Attribute FriendlyName="USERNAME-ATTRIBUTE" ...>
             <saml:AttributeValue>monalisa</saml:AttributeValue>
           </saml:Attribute>
         </saml:AttributeStatement>
       </saml:Assertion>
     </samlp:Response>
     ```



## SAML signing certificate for AuthnRequests

When you first set up GitHub Enterprise Server and start the instance, a self-signed SAML signing certificate is generated, separate from the IdP's SAML certificate. This certificate is used to sign SAML `AuthnRequests` sent to the IdP and is valid for ten years. It is stored at `/data/user/common/saml-sp.p12` and you can view details in base64-encoded format at `http(s)://HOSTNAME/saml/metadata`.

If your IdP validates the SAML signing certificate, or if SAML encrypted assertions are enabled, users may face authentication issues when the certificate expires. To check the expiration date, a GitHub Enterprise Server administrator can connect to the server via SSH and run the command below. See [Connecting to the administrative shell over SSH](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh#connecting-to-the-administrative-shell-over-ssh).

`sudo openssl pkcs12 -in /data/user/common/saml-sp.p12 -clcerts -nokeys -password pass: | sudo openssl x509 -noout -enddate`

To re-generate this SAML SP signing certificate if it has expired and it's required by the IdP or encrypted assertions, a GitHub Enterprise Server administrator can run the commands below in a GitHub Enterprise Server SSH session.

>[!NOTE]
> The `nomad` commands will be briefly disruptive to users as the `github-unicorn` service restarts.

``` shell
# Backup the old certificate
sudo cp /data/user/common/saml-sp.p12 /data/user/common/saml-sp.p12-$(date +%d%m%Y_%H%M%S)

saml_tempdir=$(sudo mktemp -d)
sudo openssl req -new -newkey rsa:4096 -days 3650 -nodes -x509 -sha256 -subj "/CN=github_enterprise" -keyout $saml_tempdir/saml.key -out $saml_tempdir/saml.crt
sudo openssl pkcs12 -export -inkey $saml_tempdir/saml.key -in $saml_tempdir/saml.crt -nodes -password pass: -out /data/user/common/saml-sp.p12
sudo rm -rf $saml_tempdir

sudo nomad stop github-unicorn
sudo nomad run -hcl1 /etc/nomad-jobs/github/unicorn.hcl
```



## Session duration and timeout

To prevent a person from authenticating with your IdP and staying authorized indefinitely, GitHub periodically invalidates the session for each user account with access to your enterprise's resources{% elsif ghes %}{% ifversion ghes %}your GitHub Enterprise Server instance{% endif %}. After invalidation, the person must authenticate with your IdP once again.

By default, if your IdP does not assert a value for the `SessionNotOnOrAfter` attribute, GitHub invalidates a session 24 hours{% elsif ghes %}one week after successful authentication with your IdP.

GitHub will support a customized session duration if your IdP provides the option to configure a `SessionNotOnOrAfter` attribute and value, and if this attribute is included in SAML responses. If your IdP does not allow a `SessionNotOnOrAfter` attribute, a site administrator can configure a custom SAML session timeout for all users on your instance by using the `ghe-config saml.default-session-expiration [seconds]` command in the administrative shell.

If you define a customized session duration value less than 24 hours, GitHub may prompt people to authenticate every time GitHub initiates a redirect.


Regardless of the authentication method used on your instance, GitHub Enterprise Server will terminate a user session after two weeks of continuous inactivity.




To prevent authentication errors, we recommend a minimum session duration of 4 hours. For more information, see [Troubleshooting Saml Authentication](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#users-are-repeatedly-redirected-to-authenticate).


> [!NOTE] Microsoft Entra ID (previously known as Azure AD) **does not support the `SessionNotOnOrAfter` attribute**. Additionally, the configurable lifetime policy for SAML tokens issued by Entra ID **does not control session timeout** for GitHub.
