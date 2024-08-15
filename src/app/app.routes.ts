import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TestPageComponent } from './test-page/test-page.component';
import { TaskDisplayComponent } from './task-display/task-display.component';
import { MakeTaskComponent } from './make-task/make-task.component';
import { MakeGroupComponent } from './make-group/make-group.component';
import { CurrentTaskGroupComponent } from './current-task-group/current-task-group.component';

export const routes: Routes = [
    {
        path: 'home-page',
        component: HomePageComponent,
        title: 'Home Page'
    },
    {
        path: 'task-display',
        component: TaskDisplayComponent,
        title: 'Task Display'
    },
    {
        path: 'make-task',
        component: MakeTaskComponent,
        title: 'Make Task'
    },
    {
        path: 'make-group',
        component: MakeGroupComponent,
        title: 'Make Group'
    },
    {
        path: 'current-task-group',
        component: CurrentTaskGroupComponent,
        title: 'Current Tasks'
    },
    {
        path: '',
        component: TestPageComponent,
        title: 'Test Page'
    },
    {
        path: '**',
        component: TestPageComponent,
        title: 'Test Page'
    }
];
