import { makeAutoObservable, observable } from "mobx";

export class LoginFormStore {
  @observable username: string = "";
  @observable password: string = "";
  constructor() {
    makeAutoObservable(this);
  }

  submitForm = async (onLoginSuccess: Function, onLoginFailure: Function) => {
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify({
        username: this.username,
        password: this.password,
      }),
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok === true) {
      onLoginSuccess(data.jwt_token);
    } else {
      onLoginFailure(data.error_msg);
    }
  };

  setUserName(value: string) {
    this.username = value;
  }
  setPassword(value: string) {
    this.password = value;
  }

}