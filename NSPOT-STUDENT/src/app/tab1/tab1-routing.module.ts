import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'searchlist',
    loadChildren: () => import('./searchlist/searchlist.module').then( m => m.SearchlistPageModule)
  },
  {
    path: 'filtermodel',
    loadChildren: () => import('./filtermodel/filtermodel.module').then( m => m.FiltermodelPageModule)
  },
  {
    path: 'compare',
    loadChildren: () => import('./compare/compare.module').then( m => m.ComparePageModule)
  },
  {
    path: 'detailedview',
    loadChildren: () => import('./detailedview/detailedview.module').then( m => m.DetailedviewPageModule)
  },
  {
    path: 'applycourse',
    loadChildren: () => import('./applycourse/applycourse.module').then( m => m.ApplycoursePageModule)
  },
  {
    path: 'successmodel',
    loadChildren: () => import('./successmodel/successmodel.module').then( m => m.SuccessmodelPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'virtual-tour',
    loadChildren: () => import('./virtual-tour/virtual-tour.module').then( m => m.VirtualTourPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
