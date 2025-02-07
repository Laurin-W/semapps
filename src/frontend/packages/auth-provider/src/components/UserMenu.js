import React, { forwardRef } from 'react';
import { UserMenu as RaUserMenu, MenuItemLink, useGetIdentity, useTranslate } from 'react-admin';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';

const ViewProfileMenu = forwardRef(({ onClick, profileResource, label, webId }, ref) => (
  <MenuItemLink
    ref={ref}
    to={`/${profileResource}/${encodeURIComponent(webId)}/show`}
    primaryText={label}
    leftIcon={<AccountCircleIcon />}
    onClick={onClick}
  />
));

const EditProfileMenu = forwardRef(({ onClick, profileResource, label, webId }, ref) => (
  <MenuItemLink
    ref={ref}
    to={`/${profileResource}/${encodeURIComponent(webId)}`}
    primaryText={label}
    leftIcon={<EditIcon />}
    onClick={onClick}
  />
));

const LoginMenu = forwardRef(({ onClick, label }, ref) => (
  <MenuItemLink ref={ref} to="/login" primaryText={label} onClick={onClick} />
));

const SignupMenu = forwardRef(({ onClick, label }, ref) => (
  <MenuItemLink ref={ref} to="/login?signup=true" primaryText={label} onClick={onClick} />
));

const UserMenu = ({ logout, profileResource, ...otherProps }) => {
  const { identity } = useGetIdentity();
  const translate = useTranslate();
  return (
    <RaUserMenu {...otherProps}>
      {identity && identity.id !== ''
        ? [
            <ViewProfileMenu
              webId={identity?.profileData?.id || identity.id}
              label={translate('auth.action.view_my_profile')}
              profileResource={profileResource}
              key="view"
            />,
            <EditProfileMenu
              webId={identity?.profileData?.id || identity.id}
              label={translate('auth.action.edit_my_profile')}
              profileResource={profileResource}
              key="edit"
            />,
            React.cloneElement(logout, { key: 'logout' })
          ]
        : [
            <SignupMenu label={translate('auth.action.signup')} key="signup" />,
            <LoginMenu label={translate('auth.action.login')} key="login" />
          ]}
    </RaUserMenu>
  );
};

UserMenu.defaultProps = {
  profileResource: 'Person'
};

export default UserMenu;
