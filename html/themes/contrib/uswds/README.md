## INTRODUCTION
This base theme focuses on tweaking Drupal's markup so that it will work with
the USWDS library. Some CSS is added to deal with unavoidable Drupal quirks,
but only as a last resort.

## REQUIREMENTS
This theme requires the latest version of USWDS found at:
https://designsystem.digital.gov/download/

## INSTALLATION
To use this theme without a subtheme, you will need to copy the contents of
the latest USWDS code [found here](https://designsystem.digital.gov/download/)
to a directory named `assets`.

### Subtheming
As with most Drupal themes, it's recommended that your active theme be a
subtheme of this one, to make updates easier. This theme comes with two choices:

1. The one named `uswds_gulp_subtheme` is setup to utilize the uswds-gulp work
  flow that is maintained by the USWDS team.

2. The one named `my_subtheme` is a more bare bones version that can be used
  with your own workflow or static USWDS assets.

To use one of them, simply copy out the folder to get started, following the
directions in /examples/[subtheme]/README.md.

### Customizing

The theme makes no assumptions about how you would like to add site-specific
CSS. You can either:

1. Use the pre-compiled USWDS library

  If you would like to use the pre-compiled USWDS library, download the zip file
  from the latest USWDS version, extract and rename the folder to "assets", and
  place it in your theme folder. Afterwards, this should be a valid path
  inside your subtheme folder: `assets/css/uswds.css`

2. Compile a custom css file for your theme.

  This route will allow you to integrate your design within the USWDS.
  To do this you will want to either use the uswds_gulp_subtheme example or use
  your own sass processing workflow. You will need to copy the images, fonts,
  and js from the USWDS library into your theme's `assets/` directory. Next you
  will need to update paths in your USWDS settings to point to the new assets
  directory for images and fonts. Finally you will need to compile your
  settings with the USWDS sass and any custom sass. The uswds-gulp workflow
  will automate some of this. Please see more detailed directions within the
  example themes.


## CONFIGURATION

After installation, see the theme settings inside Drupal for various
customizations, mostly involving the header and the footer.

### Menus

In USWDS there are four styles of menus: Primary menu, Secondary menu
(upper right, by "Search"), Footer menu, and Sidenav. You can implement these
menus simply by placing a menu block into the appropriate region.
(Eg, you would put the menu block for your primary menu in the "Primary menu"
region.)

Note: For the three "menu regions" (Primary menu, Secondary menu, Footer menu)
it is expected that you will only put a single block inside them.
(Putting additional blocks inside these regions will have no effect.)
By contrast, the "First Sidebar" region can have any number of blocks in it -
and all menu blocks will display as "sidenav" menus.

## NOTES

Note: This code was originally forked from this repository, and was split off
at 18F's suggestion.
