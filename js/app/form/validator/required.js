define(['require','validate'], function(require, Validate) { 
    Required.prototype = new Validate();
    
    function Required() {}
    
    Required.prototype.isValid = function(value) {
        if (typeof value === 'undefined' || !value) {
            return false;
        }
        
        return true;
    }
    
    return Required;
});