$( function() {

  $.widget('custom.colorize', {
    _refresh: function () {
      $('header').css('background-color', this.options.color)
    },
    change: function (value) {

      //Random values for the colors
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);

      this.options.color = `rgb(${red}, ${green}, ${blue})`;
      this._refresh();
    }
  });
    
  $('header').colorize();
    
  $('html').on('click', '#colorButton', function() {
    $('header').colorize('change');
  })
});

