import postcssPlugins from '../plugins/postcss';

class Less extends Task {
  constructor(input = '', output = '') {
    super('less');

    this.input = input || path.join(config.roots.source, config.paths.source.css, '**', '!(_*).less');
    this.output = output || this.getStylePath();
  }
  errorHandler(error) { // https://github.com/floatdrop/gulp-plumber/issues/30
    logger.warning('[Less]', error.message, true);
    // Must emit end event for any dependent streams to pick up on this. Destroying the stream
    // ensures nothing else in that stream gets done, for example, if we're dealing with five
    // files, after an error in one of them, any other won't carry on. Doing destroy without
    // ending it first will not notify depending streams, tasks like `watch` will hang up.
    this.emit('end');
    this.destroy();
  }
  getOptions() {
    return {
      paths: File.stylePaths()
    };
  }
  get fn() {
    return () => {
      let stream = gulp.src(File.absPaths(this.input))
        .pipe($.plumber(this.errorHandler))
        .pipe($.if(!config.production, $.sourcemaps.init()))
        .pipe($.less(this.getOptions()))
        .pipe($.postcss(postcssPlugins, config.styles.postcss.options));

      return this.handleStyle(stream, this.output);
    };
  }
}

export default Less;
