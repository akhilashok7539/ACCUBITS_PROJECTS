import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituteInfoPage } from './institute-info.page';

const routes: Routes = [
  {
    path: '',
    component: InstituteInfoPage
  },
  {
    path: 'board-of-council',
    loadChildren: () => import('./board-of-council/board-of-council.module').then( m => m.BoardOfCouncilPageModule)
  },
  {
    path: 'downloads',
    loadChildren: () => import('./downloads/downloads.module').then( m => m.DownloadsPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'virtualtour',
    loadChildren: () => import('./virtualtour/virtualtour.module').then( m => m.VirtualtourPageModule)
  },
  {
    path: 'hostal',
    loadChildren: () => import('./hostal/hostal.module').then( m => m.HostalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteInfoPageRoutingModule {}
