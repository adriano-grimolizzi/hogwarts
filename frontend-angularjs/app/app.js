const frontendAngularJs = angular.module('frontendAngularJs', [])

frontendAngularJs.controller('WizardListController', ($scope) => {
  $scope.wizards = [
    {
      firstName: 'Harry',
      lastName: 'Potter',
    },
    {
      firstName: 'Ronald',
      lastName: 'Weasley',
    },
    {
      firstName: 'Hermione',
      lastName: 'Granger',
    },
  ]
})
