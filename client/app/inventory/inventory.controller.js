'use strict';
(function(){

class InventoryComponent {
  constructor(API) {
    this.message = 'Hello';
    this.API = API;
    
    this.gridOptions = {
      enableColumnResizing: true,
      enableGridMenu: true,
      columnDefs: [
        { field: 'code', displayName: 'STOCK CODE' },
        { field: 'slo', displayName: 'SLO' },
        { field: 'name', displayName: 'DESCRIPTION' },
        { field: 'pin', displayName: 'PIN' },
        { field: 'pin', displayName: 'MPN' },
        { field: 'pin', displayName: 'UPN' },
        { field: 'pin', displayName: 'EQUIPMENT CATEGORY' },
        { field: 'unitOfMeasurement', displayName: 'MEASUREMENT' },
        { field: 'pin', displayName: 'BEGINNING INVENTORY' },
        { field: 'pin', displayName: 'DRAWING', cellTemplate: ' <div class="text-center clearfix"> <img src="http://placehold.it/30x30"> </div>' },
        { field: 'null', displayName: ' ',
          cellTemplate: '<div>'
          + '<button class="btn btn-small btn-warning">'
          + '<i class="glyphicon glyphicon-edit"></i>'
          + '</button>'
          + '<button class="btn btn-small btn-danger">'
          + '<i class="glyphicon glyphicon-trash"></i>'
          + '</button> </div>',
          enableColumnResizing: false,
          enableColumnMenu: false,
          enableFiltering: false,
          enableSorting: false
        },
      ]
    };
  }

  $onInit() {
    const setItems = (data) => {
      console.log(data);
      this.gridOptions.data = data;
    };

    this.API.doGet('inventory', setItems);
  }
}

angular.module('spugApp')
  .component('inventory', {
    templateUrl: 'app/inventory/inventory.html',
    controller: InventoryComponent
  });

})();
