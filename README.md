# Cookie Acceptance


MCG’s Cookie Acceptance and preferences popup. Pass which cookies you store, and the package will request the user’s consent, returning which of the provided cookie types they agree to. 

## Installation

You can install the package via

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
