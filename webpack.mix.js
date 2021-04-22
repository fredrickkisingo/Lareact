const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css');

//  mix.styles([
//         'public/assets/vendor/fonts/ionicons.css',
//         'public/assets/vendor/fonts/linearicons.css',
//          'public/assets/vendor/css/rtl/bootstrap.css',
//        'public/assets/vendor/css/rtl/appwork.css',
//         'public/assets/vendor/css/rtl/theme-corporate.css',
//        'public/assets/vendor/css/rtl/colors.css',
//        'public/assets/vendor/css/rtl/uikit.css',
//        'public/assets/vendor/libs/swiper/swiper.css'
//    ],'public/css/app.css')