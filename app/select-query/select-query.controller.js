
(function(){
    angular
        .module('sampleApp')
        .controller('SelectQueryController', SelectQueryController);

    SelectQueryController.$inject = ['sections', '$state'];    

    function SelectQueryController (sections, $state) {
        var vm = this;
        vm.sections = sections;
        vm.goToSection = goToSection;

        /**
         * 
         * When the User clicks a link this changes the view
         * @param  {string} section - Article section name
         * 
         */
        function goToSection(section){
            console.log(section);
            $state.go('viewQuery', {section: section});
        }

    }
 })();   



