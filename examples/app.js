angular.module('app', ['angular-cron-generator'])
  .controller('HomeController', HomeController);


HomeController.$inject = ['$timeout'];
function HomeController($timeout) {

  this.pluginName = "Angular-Cron-Generator";
  this.cronConfig = {
    allowMultiple: true,
    quartz: true
  };
  // this.myOutput = "Select";
  // this.myOutput = "10 3 16 8 0";
  let $this = this;
  $timeout(function(){
    // $this.myOutput = "* * * * *";
  }, 3000);

  this.getStats = function(){
    console.log("in getStats");
  }

}