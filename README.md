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

In MacOS Catalina 10.15.5 the `.npmrc` file path can be found at

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


```swift
import { CookieAcceptance } from "@myclevergroup/cookie-acceptance";

<CookieAcceptance
  image="https://i.giphy.com/media/HGe4zsOVo7Jvy/giphy.webp"
  smallText="By clicking Accept All Cookies, you agree to the storing of cookies on your device."
  largeText="Visiting websites may store or retrieve information on your browser, mostly in the form of cookies. This data might be about you, your preferences or your device."
  cookies={["performance", "functional"]}
  appName="Huler"
  onAccept={() => onAccept()}
  privacyPolicyURL="https://huler.io/privacy"
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
| onAccept         | `String`            | Required. Callback when the users confirm their choices - returns an array of accepted cookies                              |
| privacyPolicyURL | `String`            | Required. Displays a link to your privacy policy                                                                            |

## Accessing Cookies


Once the user has confirmed their choices, the callback provided will return an array of agreed cookies. As well as this, the package will store relevant agreed cookies within the users localStorage. The stored items will be named:

`appName_cookie_type` with the value being the cookie type, for example:

`huler_performance` 

On acceptance, a futher local storage item will also be stored called:

`appName_reactCookieAcceptance_hasSetCookies`

This is so that we know if the user has already agreed or set their cookie preferences, therefore we won’t show them the popup again.

## Showing the Popup again


To show the popup again, you'll need to delete `appName_reactCookieAcceptance_hasSetCookies`

from localStorage.
