var gulp    = require("gulp");
var gutil   = require("gulp-util");
var webpack = require("webpack");
var del     = require('del');
var WebpackDevServer = require('webpack-dev-server');

var webpack_config = require("./webpack.config.js");

var webpack_dev_config = Object.create(webpack_config);
webpack_dev_config.devtool = "sourcemap";
webpack_dev_config.debug = true;

var webpack_dev_compiler = webpack(webpack_dev_config);

gulp.task("default", ["build-dev"]);

gulp.task("build", ["webpack:build"]);

gulp.task("build-dev", ["webpack:build-dev"]);

gulp.task("watch", ["build-dev"], function() {
	gulp.watch(["src/**/*"], ["webpack:build-dev"]);
});

gulp.task('clean', function (callback) {
  return del(['dist/**', '!dist']);
});

gulp.task("webpack:build", function(callback) {

	var config = Object.create(webpack_config);
	config.plugins = config.plugins.concat(
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

	webpack(config, function(err, stats) {

    if(err) {
      throw new gutil.PluginError("webpack:build", err);
    }

		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));

		callback();

	});
});

gulp.task("webpack:build-dev", function(callback) {

	webpack_dev_compiler.run(function(err, stats) {

    if(err) {
      throw new gutil.PluginError("webpack:build-dev", err);
    }

		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true
		}));

		callback();

	});
});

gulp.task("webpack:server", function(callback) {

    new WebpackDevServer(webpack_dev_compiler, {})
			.listen(8080, "localhost", function(err) {

				if(err) {
					throw new gutil.PluginError("webpack-dev-server", err);
				}

        gutil.log("[webpack:server]", "http://localhost:8080/webpack-dev-server/index.html");

    	});

});
