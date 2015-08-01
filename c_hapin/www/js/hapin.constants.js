'use strict';

  angular
    .module('hapin.constants', [])

  .constant('AUTH_EVENTS', {
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  })

  .constant('USER_ROLES', {
    admin: 'admin_role',
    account: 'account_role',
    public: 'public_role'
  })

  .constant('AUTH_STORAGE', {
  
  })
