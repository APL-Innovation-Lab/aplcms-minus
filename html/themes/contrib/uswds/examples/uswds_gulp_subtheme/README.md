# USWDS-gulp Subtheme

## Installation

1. Copy this folder ("uswds_gulp_subtheme") out into the desired location for
  your subtheme (eg. themes/custom/uswds_gulp_subtheme).
2. Rename the folder to the name of your theme (eg. my_renamed_theme).
3. Rename the uswds_gulp_subtheme.info.yml.rename-me file to
  name-of-your-theme.info.yml (eg. my_renamed_theme.info.yml).
4. Tweak that .info.yml file as needed.
5. Add uswds-gulp to your theme root using the latest directions from
  https://github.com/uswds/uswds-gulp
6. Update the following variables with these values in the copied gulpfile:
    - const PROJECT_SASS_SRC = "./sass";
    - const IMG_DEST = "./assets/img";
    - const FONTS_DEST = "./assets/fonts";
    - const JS_DEST = "./assets/js";
    - const CSS_DEST = "./css";
    - const SITE_CSS_DEST = "./css";
7. Update the path for images in `_uswds-theme-general.scss` to be
`../assets/img`
8. Update the path for fonts in `_uswds-theme-typography.scss` to be
`../assets/fonts`
9. Run `gulp build-sass` to compile sass files and change the theme urls for
  images and fonts to your modifed paths in USWDS settings.
10. Enable this theme in the usual way (eg, `drush en my_renamed_subtheme`).
11. Now you can edit the USWDS settings located in the sass directory that was
  added in the root of the theme.
12. Next continue normal theme development.
