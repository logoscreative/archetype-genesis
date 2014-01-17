module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                jshintrc: 'node_modules/grunt-contrib-jshint/.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'js/main.js',
                '!js/scripts.min.js'
            ]
        },
        recess: {
            dist: {
                options: {
                    compile: true,
                    compress: true
                },
                files: {
                    'assets/css/main.min.css': [
                        'less/main.less'
                    ]
                }
            }
        },
        uglify: {
            options: {
                compress: true
            },
            build: {
                src: [
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'js/main.js'
                ],
                dest: 'js/scripts.min.js'
            }
        },
        imageoptim: {
            files: [
                'assets/css/img'
            ],
            options: {
                quitAfter: true
            }
        },
        watch: {
            less: {
                files: [
                    'less/custom-variables.less',
                    'less/custom-other.less'
                ],
                tasks: ['recess']
            },
            js: {
                files: [
                    '<%= jshint.all %>'
                ],
                tasks: ['jshint', 'uglify']
            }
        },
        clean: {
            dist: [
                'css/main.min.css',
                'js/scripts.min.js'
            ]
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-imageoptim');

    // Register tasks
    grunt.registerTask('default', [
        'clean',
        'recess',
        'uglify',
    ]);
    grunt.registerTask('dev', [
        'watch'
    ]);
    grunt.registerTask('image', [
        'imageoptim'
    ]);

};
