Production Notes

- Canvas uses an old version of jQuery. In order to let bootstrap use the latest version of jQuery, I had to load another instance of jQuery. In order to make sure this doesn't conflict with Canvas's version of jQuery, a line of code was added to the end of the bootstrap.js file: $.noConflict(true).  This ensures that the newer version of jQuery doesn't conflict with the older version.
