import Loadable from 'react-loadable';
import {Loader} from 'components';

const SearchPage = Loadable({
  loader: () => import('containers/Search'),
  loading: Loader,
});

export default SearchPage;
