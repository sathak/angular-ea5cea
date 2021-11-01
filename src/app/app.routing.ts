import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { QuizComponent } from '../quiz/quiz.component';
const appRoutes: Routes = [
  {
    path: '',
   component:WelcomeComponent
  },
  {
    path: 'index',
     component:QuizComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);