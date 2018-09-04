import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AmexioWidgetModule, AmexioChartsModule, AmexioDashBoardModule, AmexioMapModule} from 'amexio-ng-extensions';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { TempcheckComponent } from './components/tempcheck/tempcheck.component';
import { VerComponent } from './components/ver/ver.component';
import { BlankuiComponent } from './components/blankui/blankui.component';
import { TestComponent } from './components/test/test.component';
import { TestmodelComponent } from './components/testmodel/testmodel.component';
import { ROUTES } from './core.route';

@NgModule({
	  imports: [
	    CommonModule, FormsModule,
	    HttpClientModule,
	    RouterModule.forChild(ROUTES),
	    AmexioWidgetModule,
	    AmexioChartsModule,
	    AmexioDashBoardModule,
	    AmexioMapModule	
	  ],
	  exports: [RouterModule],
	  declarations: [
	  LoginComponent,
	  TempcheckComponent,
	  VerComponent,
	  BlankuiComponent,
	  TestComponent,
	  TestmodelComponent,
	  ],
	  providers: [
	  ]
})
export class CoreModule {
}
