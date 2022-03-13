import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { navigationMenu } from 'src/app/constants/navigation';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  navigationMenu = navigationMenu;
  // secondaryNavigationMenu = secondaryNavigationMenu;
  loading = false;

  userImageUrl: string = '../../../assets/placeholderProfilePicture.jpeg';

  constructor(public router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationStart) {
        this.loading = true;
      }
      if (
        ev instanceof NavigationEnd ||
        ev instanceof NavigationCancel ||
        ev instanceof NavigationError
      ) {
        this.loading = false;
      }
    });
  }

  ngOnInit(): void {}
}
