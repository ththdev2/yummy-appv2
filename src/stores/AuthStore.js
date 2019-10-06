import { observable, action } from "mobx";
import * as SecureStore from "expo-secure-store";
import * as Google from "expo-google-app-auth";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { GOOGLE_SIGNIN } from "../graphql/mutations";
import { VERIFY_TOKEN } from "../graphql/queries";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000"
  }),
  cache: new InMemoryCache()
});

const config = {
  iosClientId:
    "530137834987-dku5q16jfsm0068avinqvohfcloa0341.apps.googleusercontent.com",
  androidClientId:
    "530137834987-543ummg5bjcaja3i85l5r36vlc0ou47s.apps.googleusercontent.com",
  scopes: ["profile", "email"]
};

export default class AuthStore {
  constructor(root) {
    this.root = root;
  }

  @observable name = "";
  @observable email = "";
  @observable birth = null;
  @observable password = "";

  // Save Token in Secure Store
  @action.bound
  async setToken(token) {
    await SecureStore.setItemAsync("token", token);

    return true;
  }

  // Get Token from Secure Store
  @action.bound
  async getToken() {
    const token = await SecureStore.getItemAsync("token");

    return token;
  }

  // Remove Token in Secure Store
  @action.bound
  async removeToken() {
    await SecureStore.deleteItemAsync("token");

    return true;
  }

  @action.bound
  async onPressGoogleSignIn() {
    const { type, accessToken, user } = await Google.logInAsync(config);

    if (type == "success") {
      const result = await this.googleSignIn(user.email);
      console.log(result);
    }
  }

  @action.bound
  async googleSignIn(email) {
    try {
      await client
        .mutate({ mutation: GOOGLE_SIGNIN, variables: { email } })
        .then(result => {
          const { token } = result.googleSignIn.token;
          this.setToken(token);
        });
      return true;
    } catch (e) {
      if (e.graphQLErrors[0].message == "You need to register") {
        // console.log(e.graphQLErrors[0].message);
        return false;
      }
    }
  }

  @action.bound
  setUser(user) {
    this.name = user.name;
    this.email = user.email;
  }

  @action.bound
  async getUser() {
    const token = await this.getToken();
    console.log(token);
  }

  // EmailSignIn Protocol
  @action.bound
  async onPressSignIn() {}
}
