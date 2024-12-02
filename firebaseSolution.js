To address configuration errors, ensure that your Firebase project settings are correctly copied into your app's configuration file. For concurrency, use Firebase transactions or server-side functions for critical data updates.  Always implement proper error handling to catch and address any issues gracefully.  Here's an example using transactions:
```javascript
firebase.database().ref('myData').transaction(function(currentData) {
  if (currentData === null) {
    return { value: 1 };
  } else {
    return { value: currentData + 1 };
  }
});
```