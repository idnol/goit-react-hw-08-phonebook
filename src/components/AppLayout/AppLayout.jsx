import { NavLink, Outlet } from 'react-router-dom';
import { FooterStyled, HeaderStyled, MainContainer, MainStyled, MenuListStyled, TextStyled } from './AppLayout.styled';
import { Suspense } from 'react';
import { useAuth } from '../../hooks';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/api';
import Button from '@mui/material/Button';
import { GlobalStyle } from '../GlobalStyle';


export const AppLayout = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  return (
    <>
      <GlobalStyle />
      <HeaderStyled>
        <div className='container'>
          <MenuListStyled>
            <li className='logo'>
              <NavLink to="/">Home</NavLink>
            </li>
            {!isLoggedIn && <li>
              <NavLink to='/login'>Log in</NavLink>
            </li>}
            {!isLoggedIn && <li>
              <NavLink to='/sign-up'>Sign Up</NavLink>
            </li>}
            {isLoggedIn && <li>
              <NavLink to='/contact-list'>Contacts</NavLink>
            </li>}
          </MenuListStyled>
          {isLoggedIn && <div>
            <p>{user.email}</p>
            <Button variant="contained" type='button' onClick={() => dispatch(logOut())} size="small">Log Out</Button>
          </div>}
        </div>
      </HeaderStyled>
      <MainStyled>
        <MainContainer className='container'>
          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </MainContainer>
      </MainStyled>
      <FooterStyled>
        <div className='container'>
          <TextStyled>all right received  {currentYear}</TextStyled>
        </div>
      </FooterStyled>
    </>
  )
}
