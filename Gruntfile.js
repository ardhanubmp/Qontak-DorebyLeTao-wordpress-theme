// Use "grunt --help" to list the available tasks

// module.exports = function(grunt) {
//     grunt.initConfig({
//         sass: {
//             dev: {
//                 options: {
//                     style: 'expanded',
//                 },
//                 files: {
//                     'style.css': 'sass/style.scss'
//                 }
//             },
//             dist: {
//                 options: {
//                     style: 'compressed',
//                 },
//                 files: {
//                     'style.css': 'sass/style.scss'
//                 }
//             }
//         },
//         watch: {
//             sass: {
//                 files: ['sass/*.scss', 'sass/**/*.scss',],
//                 tasks: ['sass:dev'],
//                 livereload: true
//             }
//         }
//     });
//     grunt.loadNpmTasks('grunt-contrib-sass');
//     grunt.loadNpmTasks('grunt-contrib-watch');
//     grunt.registerTask('default', ['sass:dist']);
//     grunt.registerTask('dev', ['sass:dev']);
// };

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express : {
            dev: {
                options: {
                    script: 'source/app.js'
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'public/stylesheets/style.css' : 'source/application.scss'
                }
            }
        },
        watch: {
            sass: {
                files: ['source/*.scss', 'source/app.js'],
                tasks: ['sass'],
                livereload: true
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.registerTask('dev',['express','sass','watch']);
}