import {Component, Input} from '@angular/core';
import {IShortRepoInfo} from '../../../model/IShortRepoInfo';

@Component({
  selector: 'app-short-repo-info',
  templateUrl: './short-repo-info.component.html',
  styleUrls: ['./short-repo-info.component.css']
})
export class ShortRepoInfoComponent {

  @Input() repoInfo: IShortRepoInfo;
  constructor() { }

}
