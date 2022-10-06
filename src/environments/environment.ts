// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apigateway: "https://brg8r3wbsl.execute-api.us-east-1.amazonaws.com/poc_stage",
  cognito: {
    userPoolId: 'us-east-1_JmascBYVG',
    userPoolWebClientId: '7nckhvvt90tdtn5lrg9r6i08tj',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
