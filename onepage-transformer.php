<?php

/*
  Plugin Name: One Page Transformer
  Plugin URI: https://github.com/younes-dro/onepage-transformer
  Description: Transform your site on the fly from an ordinary desgin to an OnePage Style.
  Version: 1.0.0
  Author: Younes DRO
  Author URI: https://github.com/younes-dro
  License: GPL2
  License URI: https://www.gnu.org/licenses/gpl-2.0.html
  Text Domain: onepage-transformer
  Domain Path: /languages
 */

/*  Copyright 2019 Younes DRO (email : younesdro at gmail.com)
  This program is free software; you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation; either version 2 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program; if not, write to the Free Software
  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
 */
if (!defined('ABSPATH')) {
    exit;
}

define( 'ONEPAGE_TRANSFORMER_VERSION', '1.0.0' );

/*
 * Adds a submenu to the Settings menu.
 * the page will contain the ID of html element that hosts our JSX components.
 */
add_action( 'admin_menu', 'opt_create_menu' );

function opt_create_menu() {
    global $onepage_transformer;
    $onepage_transformer = add_theme_page( 'OnePage Transformer', 'OnePage Transformer', 'manage_options', __FILE__, 'opt_display_menu' );
}

function opt_display_menu() {
    echo '<div id="main" class="wrap"></div>
    <div>        <p class="target">p1</p>
    <p class="target">p1</p>

    <p class="target">p1</p></div>
    <button id="add">Add</button>
    ' ;
    echo "<pre>";
    print_r(get_current_screen());
    echo "</pre>";
    echo ONEPAGE_TRANSFORMER_VERSION;
}

/**
 * we enqueue the Js script generated by WebPack.
 */
add_action( 'admin_enqueue_scripts', 'opt_enqueue_script' );

function opt_enqueue_script(  ) {
    global $onepage_transformer;
    $screen = get_current_screen();
    if ( $screen->id == $onepage_transformer ) {
        wp_enqueue_script('thickbox');
        wp_enqueue_script(
            'opt-ajax', 
            plugins_url('/dist/public/ajax.js', __FILE__),['jquery'],
             ONEPAGE_TRANSFORMER_VERSION ,
             true);
            
        wp_enqueue_script(
            'opt-js', 
            plugins_url('/dist/public/bundle.js', __FILE__),
             ['opt-ajax','wp-element', 'wp-components'], 
             ONEPAGE_TRANSFORMER_VERSION,
            true);
    }
    /**
     * 
     */
    add_action('admin_print_styles', function(){
        wp_enqueue_style('onepage-transformer-css', 
        plugins_url('/dist/public/css/style.css', __FILE__));
    });  
}
