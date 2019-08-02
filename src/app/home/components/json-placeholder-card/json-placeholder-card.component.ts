import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TJsonPlaceHolder } from '../../types/home.models';

@Component({
  selector: 'app-json-placeholder-card',
  templateUrl: './json-placeholder-card.component.html',
  styleUrls: ['./json-placeholder-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsonPlaceholderCardComponent {
  @Input() placeholder: TJsonPlaceHolder;
}