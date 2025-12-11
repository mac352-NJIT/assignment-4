import { Routes } from '@angular/router';
import { ItemList } from './pages/item-list/item-list';
import { ReviewList } from './pages/review-list/review-list';

export const routes: Routes = [
    
    { path: '', component: ItemList },
    { path: 'review', component: ReviewList}

];
