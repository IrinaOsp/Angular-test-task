import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  IconName,
  IconPrefix,
  IconDefinition,
} from '@fortawesome/fontawesome-svg-core';
import * as fa from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-generator',
  standalone: true,
  templateUrl: './icon-generator.component.html',
  styleUrl: './icon-generator.component.css',
  imports: [FontAwesomeModule, NgIf],
})
export class IconGeneratorComponent implements OnInit {
  public prefix: IconPrefix | null = null;
  public iconName: IconName | null = null;
  public isLoading: boolean = false;

  constructor(library: FaIconLibrary) {
    const iconValues = Object.values(fa).filter(
      (value) =>
        typeof value === 'object' && 'iconName' in value && 'prefix' in value
    );
    library.addIcons(...(iconValues as IconDefinition[]));
  }

  ngOnInit(): void {}

  public generateIcon(): void {
    this.isLoading = true;
    setTimeout(() => {
      const iconsArr = Object.values(fa);
      const randomIndex = Math.floor(Math.random() * iconsArr.length);
      const iconData = iconsArr[randomIndex];
      const [prefix, iconName] = Object.values(iconData);
      this.prefix = prefix;
      this.iconName = iconName;
      this.isLoading = false;
    }, 1000); //change to 3
  }
}
