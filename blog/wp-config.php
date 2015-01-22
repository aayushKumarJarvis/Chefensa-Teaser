<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '1234');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         's_t$-A]<{R,sCV3}o ]/#U24z_ga,XL-,xWPm$;}qz%O[+5(dMzBlh+)AGpmiH.L');
define('SECURE_AUTH_KEY',  'kH87ey.>9INZ2m|-tX5[)|:)_~63 uoc;|5*=VcX/t`a+_)0AhX0xaROt}HRu@JR');
define('LOGGED_IN_KEY',    '|d*#p|[C{kob<:k(+VSOw6[5_jsB>S|HF.--[86Mp(XL&Mgs$<`=!v6mfxW0H=c=');
define('NONCE_KEY',        'eJA)9pbH]{G)uEsh.DgKU:#x4b4:sck.WK+pn/~LKQUXP(AW`KoFv4#}0BaR#D{a');
define('AUTH_SALT',        ';f)KpU-&gvbM}4e;`.&J+ml4}JiX?ll9ous5PH*?V*veI1X;nt8-qT0Yw2w3m8>8');
define('SECURE_AUTH_SALT', '*h_Ka>0 KDRbyA~MaZUL_3gdHNbk.+*y4E]x8vesZ{JxevlOOd, 35([8a+-`{c(');
define('LOGGED_IN_SALT',   '|cDV%cbwhy/`mga]cDv)Q0Q|7d,M<ugy+Q6tb;Y:%^)V?nvPZRep TuCpU? eZTw');
define('NONCE_SALT',       '.Yjqcj=8^7&_&FU&[g0;+%vB=40!oX6(wu1(F >>4)w)|uamm:}=|~I[50}?(s4c');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
