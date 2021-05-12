import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
          <Avatar/>
        </Banner>

        <ProfileData>
          <EditButton outlined>Editar perfil</EditButton>

          <h1>Lucas Evangelista</h1>
          <h2>@lukse_</h2>

          <p>Developer</p>

          <ul>
            <li>
              <LocationIcon />
              Ceará, Brasil
            </li>
            <li>
              <CakeIcon/>
              Nascido(a) em 18 de setembro de 2000
            </li>
          </ul>

            <Followage>
              <span>
                seguindo <strong>94</strong>
              </span>
              <span>
                <strong>672</strong> seguidores
              </span>
            </Followage>
        </ProfileData>
      <Feed/>
    </Container>
  );
}

export default ProfilePage;