using { my.test as my } from '../db/schema';

service TestService 

// @(requires: 'authenticated-user')
 {  
  entity TestSet
  
  //  @(restrict: [
  //   { grant: ['READ'], to: 'Admin' },
  //   { grant: [], to: 'User' }
  // ]) 
  
  as projection on my.Test;
}