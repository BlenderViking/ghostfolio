import { paths } from '@ghostfolio/common/paths';
import { GfPremiumIndicatorComponent } from '@ghostfolio/ui/premium-indicator';

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  host: { class: 'page' },
  imports: [GfPremiumIndicatorComponent, MatButtonModule, RouterModule],
  selector: 'gf-black-weeks-2024-page',
  templateUrl: './black-weeks-2024-page.html'
})
export class BlackWeeks2024PageComponent {
  public routerLinkFeatures = ['/' + paths.features];
  public routerLinkPricing = ['/' + paths.pricing];
}
