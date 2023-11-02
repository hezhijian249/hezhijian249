import { Component, OnInit } from '@angular/core';
import { FormField } from "../../../projects/form-render/src/lib/entity/FormField";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,) {
    console.log(this.route)
    console.log(router)
  }

  ngOnInit(): void {
  }

  componentLibrariesChange(componentLibraryComponents: FormField[]) {
    console.log(componentLibraryComponents);
  }

}
