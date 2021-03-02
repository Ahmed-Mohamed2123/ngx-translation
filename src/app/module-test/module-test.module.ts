import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleTestRoutingModule } from './module-test-routing.module';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    ModuleTestRoutingModule
  ]
})
export class ModuleTestModule { }
