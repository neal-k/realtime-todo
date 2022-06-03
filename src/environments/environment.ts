// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  awsmobile: {
    "aws_project_region": "us-east-2",
    "aws_cognito_identity_pool_id": "us-east-2:a7d92f3d-4c66-4d9a-acb7-05579fff4aad",
    "aws_cognito_region": "us-east-2",
    "aws_user_pools_id": "us-east-2_NZ1GAIqgP",
    "aws_user_pools_web_client_id": "3ov2124oistbkosca14cgjoj91",
    "oauth": {
      "domain": "myfamily-dev.auth.us-east-2.amazoncognito.com",
      "scope": [
        "phone",
        "email",
        "openid",
        "profile",
        "aws.cognito.signin.user.admin"
      ],
      "redirectSignIn": "http://localhost:4200/",
      "redirectSignOut": "http://localhost:4200/",
      "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
      "EMAIL"
    ],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
      "EMAIL",
      "FAMILY_NAME",
      "GIVEN_NAME"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
      "SMS"
    ],
    "aws_cognito_password_protection_settings": {
      "passwordPolicyMinLength": 8,
      "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
      "EMAIL"
    ],
    "aws_appsync_graphqlEndpoint": "https://cahq2gnktzhcddm6c2wvszwkri.appsync-api.us-east-2.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-2",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
