requirejs.config({
    baseUrl: "js",
    app: 'app',
    paths: {
      jquery: 'libs/jquery',
      form: 'app/form/form',
      validate: 'app/form/validator/validate',
      required: 'app/form/validator/required'
    }
});

requirejs(["app/main"]);