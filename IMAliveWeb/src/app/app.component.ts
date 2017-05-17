import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/Rx'

@Component({
  selector: 'IM-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  courses$: FirebaseListObservable<any[]>
  lesson$: FirebaseObjectObservable<any[]>

  courseList: any;
  lastCourse: any;

  constructor(private db: AngularFireDatabase) {
    this.courses$ = db.list('courses');

    this.courses$.subscribe(val => {
      console.log(val);
      this.courseList = val;
    });

    this.lesson$ = db.object('courses/-KjYxo4vNf6T0jMgB_kT');

    this.courses$.map(courses => courses[courses.length - 1]).subscribe(
      course => this.lastCourse = course
    )
  }

  listPush() {
    this.courses$.push({ description: "test:" + Date().toString() });
  }

  listRemove() {
    this.courses$.remove(this.lastCourse);
  }

  listUpdate() {
    this.courses$.update(this.lastCourse, { description: "modified:" + Date() })
  }

  objUpdate() {
    this.lesson$.update({ description: "updated description" + Date().toString() })
      .then(() => console.log("updated with update"));
  }

  objset() {
    this.lesson$.set({ description: "updated description" })
      .then(() => console.log("updated with set"));
  }
  objRemove() {
    this.lesson$.remove()
      .then(() => console.log("object removed"));
  }
}
