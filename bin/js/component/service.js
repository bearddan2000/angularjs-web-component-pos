angular.
  module('myApp').
  component('service', {
    template:`
    <div class="row">
      <div class="col text-center">
         Service
      </div>
      <div class="col text-center">
        {{$ctrl.item}}
      </div>
      <div class="col text-center">
        \${{$ctrl.price}}
      </div>
      <div class="col text-center">
        \${{$ctrl.sale}}
      </div>
      <div class="col text-center">
        {{($ctrl.discount*100).toFixed(0)}}\%
      </div>
    </div>
   `,
    bindings:{
      item: '@', // p ass string
      price: '@',
      discount: '<' // dynamic
    },
    controller: function() {
      var self = this;

      this.$onInit = function () {
        let a = parseFloat(this.price);
        let b = parseFloat(this.discount);
        self.sale = (a-(a*b)).toFixed(2);
      }
      this.$onChanges = function (changes) {
        let a = parseFloat(this.price);
        let b = parseFloat(this.discount);
        self.sale = (a-(a*b)).toFixed(2);
      }
    }
  });
