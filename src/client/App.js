import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './actions';
/*import {addLocaleData, IntlProvider} from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
import messages from '../messages';

addLocaleData([...en,...es,...fr]);
let locale = (navigator.languages && navigator.languages[0])
|| navigator.laguage
|| navigator.userLanguage
|| 'en-US';
*/
const App = ({ route }) => {
  return (
    /*  <IntlProvider locale={locale} messages={messages[locale]}>*/
      <div>
        <Header />
        {renderRoutes(route.routes)}
      </div>
  /*  </IntlProvider> */
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
