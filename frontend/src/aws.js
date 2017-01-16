import AWS from 'aws-sdk'
import {
  AuthenticationDetails,
  CognitoUserPool,
  CognitoUser,
  CognitoUserAttribute
} from 'amazon-cognito-identity-js'

var AWSSDK = {
  config: {
    region: process.env.AWS_REGION,
    identityPoolId: process.env.AWS_IDENTITY_POOL,
    userPoolId: process.env.AWS_USER_POOL_ID,
    clientId: process.env.AWS_CLIENT_ID,
    logins: process.env.AWS_LOGIN_COGNITO,
    set () {
      AWS.config.update({
        region: AWSSDK.config.region,
        credentials: new AWS.CognitoIdentityCredentials({
          IdentityPoolId: AWSSDK.config.idtentityPoolId
        })
      })
    },
    update (token, callback) {
      let Logins = {}
      Logins[AWSSDK.config.logins] = token
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: AWSSDK.config.identityPoolId,
        Logins: Logins
      })
      AWS.config.credentials.get(function (err) {
        if (err) {
          callback(err)
        } else {
          callback(null)
        }
      })
    }
  },
  registerUser (credentials, callback) {
    let userPool = AWSSDK.getUserPool()

    let attributeList = []

    let dataEmail = {
      Name: 'email',
      Value: credentials.email
    }

    let attributeEmail = new CognitoUserAttribute(dataEmail)

    attributeList.push(attributeEmail)

    userPool.signUp(credentials.username, credentials.password, attributeList, null, function (err, result) {
      if (err) {
        console.error(err)
        callback(err, null)
      } else {
        callback(null, result)
      }
    })
  },
  getCognitoUser (username) {
    let userPool = AWSSDK.getUserPool()

    let userData = {
      Username: username,
      Pool: userPool
    }

    return new CognitoUser(userData)
  },
  confirmUser (credentials, callback) {
    let cognitoUser = AWSSDK.getCognitoUser(credentials.username)
    cognitoUser.confirmRegistration(credentials.code, true, (err, result) => {
      if (err) {
        window.alert(err)
        callback(err, null)
        return
      }
      callback(null, result)
    })
  },
  resendConfirmationCode (credentials, callback) {
    let cognitoUser = AWSSDK.getCognitoUser(credentials.username)
    cognitoUser.resendConfirmationCode(function (err, result) {
      if (err) {
        console.error(err)
        callback(err, null)
      } else {
        callback(null, result)
      }
    })
  },
  login (credentials, callback) {
    let authData = {
      Username: credentials.username,
      Password: credentials.password
    }
    let authDetails = new AuthenticationDetails(authData)
    let cognitoUser = AWSSDK.getCognitoUser(credentials.username)
    cognitoUser.authenticateUser(authDetails, {
      onSuccess: function (result) {
        AWSSDK.config.update(result.getIdToken().getJwtToken(), function (err) {
          if (err) {
            console.error(err)
            callback(err, null)
          } else {
            callback(null, true)
          }
        })
      },
      onFailure: function (err) {
        console.error(err)
        callback(err, null)
      }
    })
  },
  signout: function (callback) {
    var currentUser = AWSSDK.getUserPool().getCurrentUser()
    currentUser.signOut()
    /*eslint-disable */
    // using a throwaway var helps protect against race condition with cache
    var throwaway = AWS.config.credentials.clearCachedId()
    /*eslint-enable */
    callback()
  },
  getCurrentUser (callback) {
    let userPool = AWSSDK.getUserPool()
    let currentUser = userPool.getCurrentUser()
    if (currentUser != null) {
      callback(currentUser)
    } else {
      callback(null)
    }
  },
  getUserPool () {
    return new CognitoUserPool({
      UserPoolId: AWSSDK.config.userPoolId,
      ClientId: AWSSDK.config.clientId
    })
  },
  tempCreds: {
    // temp place for storing creds while registering
  }
}

export default AWSSDK
