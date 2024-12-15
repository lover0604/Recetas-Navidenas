import Home from '../pages/Home';
import AddRecipe from '../pages/AddRecipe';
import RecipeDetails from '../pages/RecipeDetails';
import RegisterUser from '../pages/RegisterUser';
import UsersList from '../pages/UsersList';

interface Route {
path: string;
component: React.FC;
}

const routes: Route[] = [
{ path: '/', component: Home },
{ path: '/add-recipe', component: AddRecipe },
{ path: '/recipe/:id', component: RecipeDetails },
{ path: '/register-users', component: RegisterUser },
{ path: '/users', component: UsersList },
];

export default routes;