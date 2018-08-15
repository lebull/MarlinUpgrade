module.exports = function(grunt) {

  grunt.initConfig({
    clean:{
      tmp:{
        src: "tmp"
      }
    },
    gitclone: {
      clone:{
        options: {
          repository: 'https://github.com/MarlinFirmware/Marlin',
          branch: "1.1.x",
          directory: "tmp"
        }
      },
    },

    copy:{
        config: {
            src: 'tmp\\Marlin\\example_configurations\\Anet\\A8\\Configuration.h',
            dest: 'tmp\\Marlin\\Configuration.h',
        },
        adv: {
          src: 'tmp\\Marlin\\example_configurations\\Anet\\A8\\Configuration_adv.h',
          dest: 'tmp\\Marlin\\Configuration_adv.h',
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-git');


  grunt.registerTask('default', ['clean:tmp', 'gitclone', 'copy:config', 'copy:adv']);

  grunt.registerTask('copyConfigTemplate', function(options){

  });

};
