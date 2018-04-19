import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FarmerHeaderService } from '../../service/farmer-header.service';

@Component({
  selector: 'app-farmer-my-account',
  templateUrl: './farmer-my-account.component.html',
  styleUrls: ['./farmer-my-account.component.css'],
  providers:[FarmerHeaderService]
})
export class FarmerMyAccountComponent implements OnInit {

  @Output() success = new EventEmitter<any>();
 	public searchedFarmer: string="kkdFarm1001";
   public farmerPhoto:string;
   public farmerId: string
   public farmerName : string;
   public farmerPincode: string;
   public farmerAddressLine: string;
   public farmerCity: string;
   public farmerDistrict: string;
   public farmerState: string;
   public farmerPrimary: boolean;
   public farmerMobileNumber : string;

  constructor(private farmerHeaderService : FarmerHeaderService) { }

  ngOnInit() {
  }
  // Function to get farmer name and make service call to get farmer name from app
  searchFarmer(){
    this.farmerHeaderService.searchFarmer(this.searchedFarmer)
    .subscribe((res) =>{
      this.farmerPhoto=res.aadhaarData.photoUrl;
      this.farmerId=res.kkdFarmId;
      this.farmerName=res.aadhaarData.firstName;
      this.farmerPincode=res.currentAddress.pincode;
      this.farmerAddressLine=res.currentAddress.addressLine;
      this.farmerCity=res.currentAddress.city;
      this.farmerDistrict=res.currentAddress.district;
      this.farmerState=res.currentAddress.state;
      this.farmerPrimary=res.currentAddress.primary;
      this.farmerMobileNumber=res.aadhaarData.mobileNumber;
      console.log(res.aadhaarData.firstName);
      this.success.emit({
        'farmerName':this.farmerName
      });
     },(error) =>{

    });
  }

}
