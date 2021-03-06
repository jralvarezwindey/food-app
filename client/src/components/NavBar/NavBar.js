import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar.js';
import * as S from './NavBar.styled.js';
import logo from '../../media/logo.svg';
import { getRecipes, setStatus } from '../../redux/actions.js';

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogoClick() {
    dispatch(getRecipes(null, { defaultRecipes: true }));
    dispatch(setStatus('loading'));
    navigate('/');
  }

  return (
    <>{ location.pathname !== '/landing' && <S.NavBar >
        <S.LogoContainer onClick={ handleLogoClick }> 
          <S.Image src={ logo }/>
          Food App
        </S.LogoContainer>

      <SearchBar/>

      <S.Wrapper> 
        <S.Button onClick={ () => navigate('/') }>
          Home
        </S.Button>

        <S.Button onClick={ () => navigate('/recipe/create') }>
          Create recipe
        </S.Button>
      </S.Wrapper>
    </S.NavBar> }</>
  )
};
