module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    cssmin: {
        dist: {
            files: {
                'styles/style.min.css': ['styles/*.css']
            }
        }
    },

    shell: {
      options: {
          stdout: true,
          stderr: true
      },
      prodServer: {
          command: 'git push heroku master'
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');


  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('build', [
      'cssmin:dist',
  ]);

  grunt.registerTask('serve', ['build','nodemon']);

  grunt.registerTask('upload', function() {
    grunt.task.run([ 'shell:prodServer' ]);
  });

  grunt.registerTask('deploy', [
      'build',
      'upload'
  ]);

};