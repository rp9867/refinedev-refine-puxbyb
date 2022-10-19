import { Refine } from '@pankod/refine-core';
import { notificationProvider, ErrorComponent } from '@pankod/refine-antd';
import dataProvider from '@pankod/refine-simple-rest';
import routerProvider from '@pankod/refine-react-router-v6';

import '@pankod/refine-antd/dist/styles.min.css';

import { PostList, PostEdit, PostCreate, PostShow } from './pages';

const API_URL = 'https://api.fake-rest.refine.dev';

const App: React.FC = () => {
  return (
    <Refine
      dataProvider={dataProvider(API_URL)}
      routerProvider={routerProvider}
      resources={[
        {
          name: 'posts',
          list: PostList,
          create: PostCreate,
          edit: PostEdit,
          show: PostShow,
          canDelete: false,
        },
      ]}
      notificationProvider={notificationProvider}
      catchAll={<ErrorComponent />}
    />
  );
};

export default App;
