import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-featured',
  imports: [NgOptimizedImage],
  templateUrl: './featured.html',
  styleUrl: './featured.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Featured {}