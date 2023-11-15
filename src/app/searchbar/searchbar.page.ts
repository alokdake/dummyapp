import { Component, OnInit } from '@angular/core';
import { IonicStorageService } from '../storage';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  constructor(private storage: IonicStorageService) {}

  name: any;
  ngOnInit() {
    this.storage.get('name').then((data: any) => {
      this.name = data;
      console.log(this.name);
    });
  }

  Countries = [
    'India',
    'England',
    'Japan',
    'Bali',
    'Nepal',
    'Srilanka',
    'China',
  ];
  results = [...this.Countries];

  searchCountry(event: any) {
    const c = event.target.value.toLowerCase();
    this.results = this.Countries.filter(
      (data) => data.toLowerCase().indexOf(c) > -1
    );
  }
}
