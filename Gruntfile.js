module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: '.',
          open: true,
          livereload: true
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: 'sass/*.scss',
        tasks: ['sass']
      },
      html: {
        files: '*.html'
      },
      livereload: {
        files: [
          '*.html',
          'css/*.css'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default',['sass', 'connect', 'watch']);
}
