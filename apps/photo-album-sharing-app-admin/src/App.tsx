import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AlbumList } from "./album/AlbumList";
import { AlbumCreate } from "./album/AlbumCreate";
import { AlbumEdit } from "./album/AlbumEdit";
import { AlbumShow } from "./album/AlbumShow";
import { PhotoList } from "./photo/PhotoList";
import { PhotoCreate } from "./photo/PhotoCreate";
import { PhotoEdit } from "./photo/PhotoEdit";
import { PhotoShow } from "./photo/PhotoShow";
import { PlaylistList } from "./playlist/PlaylistList";
import { PlaylistCreate } from "./playlist/PlaylistCreate";
import { PlaylistEdit } from "./playlist/PlaylistEdit";
import { PlaylistShow } from "./playlist/PlaylistShow";
import { UserAlbumList } from "./userAlbum/UserAlbumList";
import { UserAlbumCreate } from "./userAlbum/UserAlbumCreate";
import { UserAlbumEdit } from "./userAlbum/UserAlbumEdit";
import { UserAlbumShow } from "./userAlbum/UserAlbumShow";
import { PlaylistPhotoList } from "./playlistPhoto/PlaylistPhotoList";
import { PlaylistPhotoCreate } from "./playlistPhoto/PlaylistPhotoCreate";
import { PlaylistPhotoEdit } from "./playlistPhoto/PlaylistPhotoEdit";
import { PlaylistPhotoShow } from "./playlistPhoto/PlaylistPhotoShow";
import { AlbumPhotoList } from "./albumPhoto/AlbumPhotoList";
import { AlbumPhotoCreate } from "./albumPhoto/AlbumPhotoCreate";
import { AlbumPhotoEdit } from "./albumPhoto/AlbumPhotoEdit";
import { AlbumPhotoShow } from "./albumPhoto/AlbumPhotoShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Photo Album Sharing App"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Album"
          list={AlbumList}
          edit={AlbumEdit}
          create={AlbumCreate}
          show={AlbumShow}
        />
        <Resource
          name="Photo"
          list={PhotoList}
          edit={PhotoEdit}
          create={PhotoCreate}
          show={PhotoShow}
        />
        <Resource
          name="Playlist"
          list={PlaylistList}
          edit={PlaylistEdit}
          create={PlaylistCreate}
          show={PlaylistShow}
        />
        <Resource
          name="UserAlbum"
          list={UserAlbumList}
          edit={UserAlbumEdit}
          create={UserAlbumCreate}
          show={UserAlbumShow}
        />
        <Resource
          name="PlaylistPhoto"
          list={PlaylistPhotoList}
          edit={PlaylistPhotoEdit}
          create={PlaylistPhotoCreate}
          show={PlaylistPhotoShow}
        />
        <Resource
          name="AlbumPhoto"
          list={AlbumPhotoList}
          edit={AlbumPhotoEdit}
          create={AlbumPhotoCreate}
          show={AlbumPhotoShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
