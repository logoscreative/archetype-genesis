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
                'assets/dev/js/main.js',
                '!assets/dev/js/scripts.min.js'
            ]
        },
        recess: {
            dist: {
                options: {
                    compile: true,
                    compress: true
                },
                files: {
                    'assets/dist/css/main.min.css': [
                        'assets/dev/less/main.less'
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
                    'assets/dev/js/main.js'
                ],
                dest: 'assets/dist/js/scripts.min.js'
            }
        },
        imageoptim: {
            files: [
                'assets/dist/img'
            ],
            options: {
                quitAfter: true
            }
        },
        watch: {
            less: {
                files: [
                    'assets/dev/less/custom-variables.less',
                    'assets/dev/less/custom-other.less'
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
                'assets/dist/css/main.min.css',
                'assets/dist/js/scripts.min.js'
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
