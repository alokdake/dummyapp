import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'sample',
    loadChildren: () =>
      import('./sample/sample.module').then((m) => m.SamplePageModule),
  },
  {
    path: 'picker',
    loadChildren: () =>
      import('./picker/picker.module').then((m) => m.PickerPageModule),
  },
  {
    path: 'fab',
    loadChildren: () => import('./fab/fab.module').then((m) => m.FabPageModule),
  },
  {
    path: 'grid',
    loadChildren: () =>
      import('./grid/grid.module').then((m) => m.GridPageModule),
  },
  {
    path: 'ionitmes',
    loadChildren: () =>
      import('./ionitmes/ionitmes.module').then((m) => m.IonitmesPageModule),
  },
  {
    path: 'alok',
    loadChildren: () =>
      import('./alok/alok.module').then((m) => m.AlokPageModule),
  },
  {
    path: 'virat',
    loadChildren: () =>
      import('./virat/virat.module').then((m) => m.ViratPageModule),
  },
  {
    path: 'modal',
    loadChildren: () =>
      import('./modal/modal.module').then((m) => m.ModalPageModule),
  },
  {
    path: 'popover',
    loadChildren: () => import('./popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'refresher',
    loadChildren: () => import('./refresher/refresher.module').then( m => m.RefresherPageModule)
  },
  {
    path: 'searchbar',
    loadChildren: () => import('./searchbar/searchbar.module').then( m => m.SearchbarPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./segment/segment.module').then( m => m.SegmentPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'breadcrumbs',
    loadChildren: () => import('./breadcrumbs/breadcrumbs.module').then( m => m.BreadcrumbsPageModule)
  },
  {
    path: 'scenario1',
    loadChildren: () => import('./scenario1/scenario1.module').then( m => m.Scenario1PageModule)
  },
  {
    path: 'viewinfo',
    loadChildren: () => import('./viewinfo/viewinfo.module').then( m => m.ViewinfoPageModule)
  },
  {
    path: 'scenario2',
    loadChildren: () => import('./scenario2/scenario2.module').then( m => m.Scenario2PageModule)
  },
  {
    path: 'scenario2card',
    loadChildren: () => import('./scenario2card/scenario2card.module').then( m => m.Scenario2cardPageModule)
  },
  {
    path: 'scenario3',
    loadChildren: () => import('./scenario3/scenario3.module').then( m => m.Scenario3PageModule)
  },
  {
    path: 'scenario4',
    loadChildren: () => import('./scenario4/scenario4.module').then( m => m.Scenario4PageModule)
  },
  {
    path: 'camerausingcapacitor',
    loadChildren: () => import('./camerausingcapacitor/camerausingcapacitor.module').then( m => m.CamerausingcapacitorPageModule)
  },
  {
    path: 'module1',
    loadChildren: () => import('./module1/module1.module').then( m => m.Module1PageModule)
  },
  {
    path: 'module1card',
    loadChildren: () => import('./module1card/module1card.module').then( m => m.Module1cardPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'gplus',
    loadChildren: () => import('./gplus/gplus.module').then( m => m.GplusPageModule)
  },
  {
    path: 'abc',
    loadChildren: () => import('./abc/abc.module').then( m => m.AbcPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
