<?php

namespace AIModalPlugin;

class AI_Modal_Plugin {
    /**
     * The instance of the class.
     *
     * @var AI_Modal_Plugin
     */
    private static $instance = null;

    /**
     * Returns the instance of the class.
     *
     * @return AI_Modal_Plugin
     */
    public static function instance() {
        if ( is_null( self::$instance ) ) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * AI_Modal_Plugin constructor.
     */
    public function __construct() {
        add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_scripts' ] );
    }

    /**
     * Enqueue scripts.
     */
    public function enqueue_scripts() {
        $admin_dependencies = plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

        if(file_exists($admin_dependencies)) {
            $admin_asset_file = require $admin_dependencies;
            $admin_js_dependencies = ( ! empty( $admin_asset_file['dependencies'] ) ) ? $admin_asset_file['dependencies'] : [];
            $admin_version         = ( ! empty( $admin_asset_file['version'] ) ) ? $admin_asset_file['version'] : '1.0.0';

            wp_enqueue_script(
                'ai-modal-plugin',
                plugin_dir_url( __FILE__ ) . 'build/index.js',
                $admin_js_dependencies,
                $admin_version,
                true
            );
        }
    }
}   
AI_Modal_Plugin::instance();