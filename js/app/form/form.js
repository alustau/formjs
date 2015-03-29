define(['require','required','validate','jquery'],function(require) {
    var $form,
        $ = require('jquery');

    function Form(selector) {
        $form = $(selector);
    }

    Form.prototype.getElements = function() {
        var $elements = $form.find('select, input[type="text"], textarea, hidden');
        return $elements;
    };

    Form.prototype.isValid = function() {
        var valid = true;
        this.getElements().each(function() {
            var validate = $(this).getValidate();
            
            if (null !== validate && !validate.isValid($(this).val())) {
                valid = false;
            }
        });
        
        return valid;
    };
    
    $.fn.getValidate = function() {
        var name = this.data('form-validate');
        
        if (typeof name !== 'undefined') {
            var Validator =  require(name),
                validate = new Validator();
            
            if (!validate instanceof require('validate')) {
                throw "Este objeto tem que ser parente de Validate";
            }
            
            return validate;
        }

        return null;
        
    };
    
    return (Form);
});