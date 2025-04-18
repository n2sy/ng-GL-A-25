import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, type ParamMap } from '@angular/router';

@Component({
  selector: 'app-infos',
  imports: [RouterLink],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  myId;
  private actRoute = inject(ActivatedRoute);

  ngOnInit() {
    // console.log(this.actRoute.snapshot.params);
    //this.myId = this.actRoute.snapshot.paramMap.get('id');
    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.myId = p.get('id');
      },
    });
  }
}
