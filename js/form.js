var Form = (function(){
    var _html     = '';
    var _elements = {};
    var _attribs  = {};
    
    function Form(options) {
        if (typeof options !== 'undefined') {
            this.setAttribs(options);
        }
        
        this.init();
    }
    
    Form.prototype.init = function () {}
    
    Form.prototype.setAttrib = function(key, value) {
        _attribs[key] = value;
        return this;
    }
    
    Form.prototype.setAttribs = function(options) {
        if (typeof options !== 'object') {
            throw "O metodo so aceita objetos";
        }
        
        for (var key in options) {
            this.setAttrib(key, options[key]);
        }
        
        return this;
    }
    
    Form.prototype.setAction = function(action) {
        this.action = action;
        return this;
    }
    
    Form.prototype.render = function (selector) {
        html += '<form ' + renderAttr() + '>';
        html += '<input type="text" name="teste"/>'; 
        html += '</form>';
        
        $(selector).append(html);
        return this;
    }
    
    function renderAttr() {
        var attr = '';
        
        for (var i in _attribs) {
            attr += i + '="' + _attribs[i] + '" '; 
        }
        
        return attr;
    }
    
    return Form;
})();