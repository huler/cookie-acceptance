# Cookie Acceptance


MCG’s Cookie Acceptance and preferences popup. Pass which cookies you store, and the package will request the user’s consent, returning which of the provided cookie types they agree to. 

## Installation

### Authenticate


We use GitHub packages to host this project, you’ll need to authenticate via a GitHub token:


1. Go to your [Github Token Settings](https://github.com/settings/tokens)
2. Click ‘Generate new token’
3. Allow `write:packages` `read:packages` and `delete:packages`

### Edit your `.npmrc` file


You’ll first need to authenticate your local NPM into Github Packages Registry.

In MacOS the `.npmrc` file path can be found at

```javascript
/Users/<user-name>/.npmrc
```


Edit the file, and paste:

```other
registry=https://registry.npmjs.org/
@myclevergroup:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=your_token
```


The first line is the default NPM package registry, from where you will still be downloading public packages.

The second line tells NPM to get packages from the organization `@myclevergroup` from the Github Registry instead of the default NPM Registry. This way when we create a package with a name such as `@myclevergroup/package`, NPM will download it from `https://npm.pkg.github.com/` which is the Github Packages Registry URL.

The third line is for authentication purposes. Here you should change the *your_token* with the Github Token you have generated with the proper scopes.

### Install


You should now be able to install the package via

 `yarn add @myclevergroup/cookie-acceptance`

 `npm install @myclevergroup/cookie-acceptance`

## Get Started


```jsx
import { CookieAcceptance } from "@myclevergroup/cookie-acceptance";

// This function can do whatever you want with the users consent
const injectScript = (cookie) => {
  switch (cookie) {
    case "performance":
      // Inject performance tracking script
      break;
    case "functional":
      // Inject functional tracking script
      break;
    default:
      break;
  }
};

<CookieAcceptance
  image="https://i.giphy.com/media/HGe4zsOVo7Jvy/giphy.webp"
  smallText="By clicking accept, you agree to cookies"
  largeText="Visiting websites may store or retrieve information on your browser."
  cookies={["performance", "functional"]}
  appName="Company"
  injectScript={(cookie) => injectScript(cookie)}
  privacyPolicyURL="https://company.io/privacy"
/>
```


## Props

| Value            | Type                | Notes                                                                                                                       |
| ---------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| image            | `String`            | Optional. Adds an image to the top of the cookie popup                                                                      |
| smallText        | `String`            | Text that displays on the small cookie popup.                                                                               |
| largeText        | `String`            | Text that displays on the expanded cookie preferences.                                                                      |
| cookies          | `array` of `string` | Required. Pass the types of cookies want to get the users consent for - choose from 'performance', 'functional', 'tracking' |
| appName          | `String`            | Required. Gets prepended to you cookie types when stored in localStorage.                                                   |
| injectScript     | `function`          | Required - Runs for each cookie type that is accepted by the user, passes through the cookie type as a parameter            |
| privacyPolicyURL | `String`            | Required. Displays a link to your privacy policy                                                                            |
| settings         | `boolean`           | Show or hide the cookie preferences modal. Useful for allowing users to re-choose their preferences                         |
| onConfirm        | `function`          | Pass an additional function that will run when the user confirms their choices                                              |

## Accessing Cookies


Once the user has confirmed their choices, the package will execute injectScript for each cookie type the user has accepted, passing the type as a parameter. From there you can do whatevever you need to with the user's consent.

On acceptance, a futher local storage item will also be stored called:

`appName_reactCookieAcceptance_hasSetCookies`

This is so that we know if the user has already agreed or set their cookie preferences, therefore we won’t show them the popup again.

## Showing the Popup again


To show the pop up again, pass `true` through to the `settings` props. This will trigger the modal to open again.
