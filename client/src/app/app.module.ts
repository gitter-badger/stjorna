import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

// register application page:components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { SetupComponent } from './setup/setup.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './_logout/logout.component';

// register application components
import { ProductListComponent } from './_product-list/product-list.component';
import { ProductFormComponent } from './_product-form/product-form.component';
import { CategoryListComponent } from './_category-list/category-list.component';
import { CategoryFormComponent } from './_category-form/category-form.component';

// register application shared stuff
import { routing } from './app.routing';
import { AuthGuard } from './shared/authGuard';
import { StjornaService } from './shared/stjorna.service';
import { HttpErrorHandler } from './shared/error-handler.service';
import { LoginStatusHandler } from './shared/login-handler.service';
import { MySearchPipe } from './shared/mySearch.pipe';

// import libraries
import { ChartModule } from 'angular2-chartjs';

// import and register locales
import { registerLocaleData } from '@angular/common';
import lcoaleDECH from '@angular/common/locales/de-CH';
registerLocaleData(lcoaleDECH);

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        routing,
        FormsModule,
        ChartModule,
        NgbModule.forRoot(),
        ToastrModule.forRoot(),
        ImageCropperModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        AboutComponent,
        SetupComponent,
        NewProductComponent,
        ViewProductComponent,
        ProfileComponent,
        SettingsComponent,
        LoginComponent,
        LogoutComponent,
        ProductListComponent,
        ProductFormComponent,
        CategoryListComponent,
        CategoryFormComponent,
        MySearchPipe,
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        StjornaService,
        HttpErrorHandler,
        LoginStatusHandler,
        AuthGuard,
        {provide: LOCALE_ID, useValue: 'de-CH'}
    ]
})

export class AppModule {
    constructor() {}
}
