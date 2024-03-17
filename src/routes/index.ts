import { AuthRoute } from './auth.route';
import { ChannelRoute } from './channel.route';
import { UserRoute } from './users.route';

export const routes = [new UserRoute(), new AuthRoute(), new ChannelRoute()];

/* export const routes = [
  new AuthRoute(),
  new UserRoute(),
  new IndexRoute(),
  new ProductRoute(),
  new CartRoute(),
  new OrderRoute(),
  new ReviewRoute(),
  new CategoryRoute(),
  new BrandRoute(),
  new AddressRoute(),
  new PaymentRoute(),
]; */
