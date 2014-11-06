"use strict";

module.exports = function(grunt) {

  // Definição dos arquivos js
  var filesJS = [
          'src/js/APP.js',
          'src/js/APP.Timeline.js',
          'src/js/APP.Modal.js',
          'src/js/APP.General.js',
          'src/js/APP.Slide.js'
      ];

  // Load all tasks
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  // tasks time
  require('time-grunt')(grunt);

  grunt.initConfig({
    // Watch
    watch: {
      src: {
        files: [ 'src/sass/*.scss' ],
        tasks: [ 'sass:dist', 'concat' ]
      },

      js: {
        files: 'src/js/**/*.js',
        tasks: [ 'concat:js' ]
      }
    },

    // sass
    sass: {
      dist: {
        files: [{
          expand: true,
          sourcemap: 'none',
          cwd: 'src/',
          src: 'sass/*.scss',
          dest: 'src/css/',
          ext: '.css'
        }]
      }
    },

    // Concat css and js
    concat: {
      css: {
        src: 'src/css/sass/main.css',
        dest: 'dist/css/styles.min.css'
      },

      js: {
        src: filesJS,
        dest: 'dist/js/scripts.min.js'
      }
    },

    // Concat and minify javascripts
    uglify: {
      options: {
        mangle: false,
        livereload: true
      },

      dist: {
        files: {
          'dist/js/scripts.min.js' : filesJS
        }
      }
    },

    // Optimizes images
    imagemin: {
        dynamic: {
          files: [{
              expand: true,
              cwd: 'src/images',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'dist/images'
          }]
        }
    },

    // Clean old images
    clean: {
      build: {
        src: ['dist/images']
      }
    },

    // Browser Sync
    browserSync: {
      files: {
        src: [
          'dist/css/styles.min.css',
          'dist/js/scripts.min.js',
          '**/*.html'
        ]
      },

      options: {
        host: '192.168.1.64', // Definindo um IP manualmente
        watchTask: true, // Integração com a taks watch
        ghostMode: { //Sincronizando os eventos entre os dispositivos
          clicks: true,
          location: true,
          forms: true,
          scroll: true
        }
      }
    }

  });

  // registrando tarefa default
  grunt.registerTask( 'default', [ 'browserSync', 'watch' ] );
  grunt.registerTask( 'img', [ 'clean', 'imagemin' ] );
};
