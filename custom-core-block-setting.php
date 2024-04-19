<?php
/**
 * Plugin Name:     Custom Core Block Setting
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     PLUGIN DESCRIPTION HERE
 * Author:          YOUR NAME HERE
 * Author URI:      YOUR SITE HERE
 * Text Domain:     custom-core-block-setting
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Custom_Core_Block_Setting
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

require_once plugin_dir_path( __FILE__ ) . 'class-custom-core-block-setting.php';
