import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: false,
  templateUrl: './success.html',
  styleUrl: './success.css',
})
export class Success implements OnInit {

  name = '';
  total = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const state = history.state;
    if (!state || !state.name) {
      this.router.navigate(['/']);
      return;
    }
    this.name = state.name;
    this.total = state.total;
  }
}