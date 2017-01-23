import { Component } from '@angular/core';
import './rxjs-operators';

@Component({
  selector: 'my-app',
  template: `
<nav class="navbar navbar-inverse bg-inverse">
  <h1 class="navbar-brand mb-0">//GitView</h1>
</nav>
  <view-holder></view-holder>`,
})
export class AppComponent { }
