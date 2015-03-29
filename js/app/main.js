define(["jquery","form"], function($, Form) {
    $(function() {
        $('#formulario').submit(function() {
            var form = new Form('#formulario');
            try {
                console.log(form.isValid());
            } catch (Expr) {
                console.log(Expr);
            }
            return false;
            return false;
            
        });
    });
});