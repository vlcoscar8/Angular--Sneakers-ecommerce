import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PositionLinksComponent } from './components/position-links/position-links.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PositionLinksComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, HeaderComponent, PositionLinksComponent],
})
export class CoreModule {}
