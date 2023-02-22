import ApiStatusConstant from "../ConstantsApiStatus/ApiConstantStatus";
import { makeAutoObservable } from "mobx";
import { VideoTypeList } from "../Components/HomeContant";

export class HomeContentStore {
  home: VideoTypeList[] = [];
  apiStatus = ApiStatusConstant.loading;
  constructor() {
    makeAutoObservable(this);
  }
  setApiStatus(value: string) {
    this.apiStatus = value;
  }
  setHomeList(data: VideoTypeList[] = []) {
    this.home = data;
  }
}
