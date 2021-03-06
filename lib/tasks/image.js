class Image extends Task {
  constructor() {
    super('images');

    this.src = [`${config.source.img}/**/*`];
    for (let imageFolder of config.sprites.image) {
      this.src.push(`!${config.source.img}/${imageFolder}`);
      this.src.push(`!${config.source.img}/${imageFolder}/*.png`);
    }
    for (let svgFolder of config.sprites.svg) {
      this.src.push(`!${config.source.img}/${svgFolder}`);
      this.src.push(`!${config.source.img}/${svgFolder}/*.svg`);
    }
  }
  get fn() {
    return () => {
      return gulp.src(this.src)
        .pipe($.cache($.imagemin()))
        .pipe(gulp.dest(this.getImageDist()));
    };
  }
}

export default Image;
