import { Component } from "@angular/core";
import { NavController, NavParams, LoadingController } from "ionic-angular";
import { Geolocation } from "@ionic-native/geolocation";
import { ListPage } from "../list/list";
import { RestaurantsProvider } from "../../providers/restaurants/restaurants";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string; note: string; icon: string }>;
  lat: Number;
  long: Number;
  loader: any;
  response: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private _service: RestaurantsProvider,
    private geolocation: Geolocation
  ) {
    this.showLoader();
    this.getGeoLocation().then(() =>
      _service.getRestaurantByLatLong(this.lat, this.long).then(res => {
        this.hideLoader();
        this.response = res;
      })
    );
  }

  showLoader = function() {
    if (!this.loader) {
      this.loader = this.loadingCtrl.create({
        content: "Please wait..."
      });
    }
    this.loader.present();
  };

  hideLoader = function() {
    this.loader.dismiss();
  };

  getGeoLocation = function() {
    return new Promise((resolve, reject) => {
      this.geolocation
        .getCurrentPosition()
        .then(resp => {
          this.lat = resp.coords.latitude;
          this.long = resp.coords.longitude;
          resolve();
        })
        .catch(error => {
          console.log("Error getting location", error);
          reject(error);
        });
    });
  };
}
