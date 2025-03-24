import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-walk-detail',
  imports: [],
  templateUrl: './walk-detail.component.html',
  styleUrl: './walk-detail.component.scss'
})
export class WalkDetailComponent {
  public id!: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id: string = params['id'];
      if (!/^\d+$/.test(id)) {
        throw new Error('Invalid id');
      }
      this.id = parseInt(id);
    });
  }
}
