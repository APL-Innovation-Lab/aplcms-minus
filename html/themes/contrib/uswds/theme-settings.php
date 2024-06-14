<?php

/**
 * @file
 * Custom theme setting form elements for the USWDS theme.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function uswds_form_system_theme_settings_alter(&$form, FormStateInterface &$form_state, $form_id = NULL) {

  // Header style.
  $form['header_style_fieldset'] = [
    '#type' => 'details',
    '#title' => t('Header settings'),
    '#open' => TRUE,
    'menu-help' => [
      '#markup' => t('NOTE: To set sources for your navigation, go to /admin/structure/block and place menu blocks into the desired "[blank] Menu" region. For example, your primary menu block should go into the "Primary Menu" region.'),
    ],
    'uswds_header_style' => [
      '#type' => 'select',
      '#required' => TRUE,
      '#title' => t('Choose a style of header to use'),
      '#options' => [
        'basic' => t('Basic'),
        'extended' => t('Extended'),
      ],
      '#default_value' => theme_get_setting('uswds_header_style'),
    ],
    'uswds_header_mega' => [
      '#type' => 'checkbox',
      '#title' => t('Use megamenus in the header?'),
      '#description' => t('Site building note: Megamenus require hierarchical three-level menus, where the second level of menu items is not rendered, but instead is used to determine the "columns" for the megamenu.'),
      '#default_value' => theme_get_setting('uswds_header_mega'),
    ],
    'uswds_header_mega_display_second' => [
      '#type' => 'checkbox',
      '#title' => t('Megamenu: Display second level as headers'),
      '#description' => t('Check this to display the second level of the menu links as headers above the megamenu "columns"'),
      '#default_value' => theme_get_setting('uswds_header_mega_display_second'),
      '#states' => [
        'visible' => [
          ':input[name="uswds_header_mega"]' => ['checked' => TRUE],
        ],
      ],
    ],
    'uswds_government_banner' => [
      '#type' => 'checkbox',
      '#title' => t('Display the official U.S. government banner at the top of each page?'),
      '#default_value' => theme_get_setting('uswds_government_banner'),
    ],
    'uswds_government_banner_mil' => [
      '#type' => 'checkbox',
      '#title' => t('Display the .mil version of the government banner?'),
      '#default_value' => theme_get_setting('uswds_government_banner_mil'),
      '#states' => [
        'visible' => [
          ':input[name="uswds_government_banner"]' => ['checked' => TRUE],
        ],
      ],
    ],
  ];

  // Footer style.
  $form['footer_style_fieldset'] = [
    '#type' => 'details',
    '#title' => t('Footer settings'),
    '#open' => TRUE,
    'uswds_footer_style' => [
      '#type' => 'select',
      '#required' => TRUE,
      '#title' => t('Choose a style of footer to use'),
      '#options' => [
        'big' => t('Big'),
        'medium' => t('Medium'),
        'slim' => t('Slim'),
      ],
      '#default_value' => theme_get_setting('uswds_footer_style'),
    ],
    'uswds_big_footer_help' => [
      '#type' => 'container',
      'markup' => [
        '#markup' => t('Site building note: In the "Big" footer style, the footer menu must be a two-level menu, because the first level of menu items is only rendered as column headers.'),
      ],
      '#states' => [
        'visible' => [
          ':input[name="uswds_footer_style"]' => ['value' => 'big'],
        ],
      ],
    ],
    'uswds_footer_agency' => [
      '#type' => 'checkbox',
      '#title' => t('Add agency information in the footer?'),
      '#default_value' => theme_get_setting('uswds_footer_agency'),
    ],
    'uswds_footer_agency_name' => [
      '#type' => 'textfield',
      '#title' => t('Footer agency name'),
      '#default_value' => theme_get_setting('uswds_footer_agency_name'),
      '#states' => [
        'visible' => [
          ':input[name="uswds_footer_agency"]' => ['checked' => TRUE],
        ],
      ],
    ],
    'uswds_footer_agency_url' => [
      '#type' => 'textfield',
      '#title' => t('Footer agency URL'),
      '#default_value' => theme_get_setting('uswds_footer_agency_url'),
      '#states' => [
        'visible' => [
          ':input[name="uswds_footer_agency"]' => ['checked' => TRUE],
        ],
      ],
    ],
    'uswds_footer_agency_logo' => [
      '#type' => 'textfield',
      '#title' => t("Path to footer agency logo (from this theme's folder)"),
      '#description' => t('For example: images/footer-agency.png'),
      '#default_value' => theme_get_setting('uswds_footer_agency_logo'),
      '#states' => [
        'visible' => [
          ':input[name="uswds_footer_agency"]' => ['checked' => TRUE],
        ],
      ],
    ],
    'uswds_contact_center' => [
      '#type' => 'textfield',
      '#title' => t('Name of contact center'),
      '#default_value' => theme_get_setting('uswds_contact_center'),
      '#states' => [
        'visible' => [
          ':input[name="uswds_footer_agency"]' => ['checked' => TRUE],
        ],
      ],
    ],
    'uswds_email' => [
      '#type' => 'textfield',
      '#title' => t('Email'),
      '#default_value' => theme_get_setting('uswds_email'),
      '#states' => [
        'visible' => [
          ':input[name="uswds_footer_agency"]' => ['checked' => TRUE],
        ],
      ],
    ],
    'uswds_phone' => [
      '#type' => 'textfield',
      '#title' => t('Phone'),
      '#default_value' => theme_get_setting('uswds_phone'),
      '#states' => [
        'visible' => [
          ':input[name="uswds_footer_agency"]' => ['checked' => TRUE],
        ],
      ],
    ],
    'uswds_facebook' => [
      '#type' => 'textfield',
      '#title' => t('Facebook link'),
      '#default_value' => theme_get_setting('uswds_facebook'),
      '#states' => [
        'visible' => [
          ':input[name="uswds_footer_agency"]' => ['checked' => TRUE],
        ],
      ],
    ],
    'uswds_twitter' => [
      '#type' => 'textfield',
      '#title' => t('Twitter link'),
      '#default_value' => theme_get_setting('uswds_twitter'),
      '#states' => [
        'visible' => [
          ':input[name="uswds_footer_agency"]' => ['checked' => TRUE],
        ],
      ],
    ],
    'uswds_youtube' => [
      '#type' => 'textfield',
      '#title' => t('Youtube link'),
      '#default_value' => theme_get_setting('uswds_youtube'),
      '#states' => [
        'visible' => [
          ':input[name="uswds_footer_agency"]' => ['checked' => TRUE],
        ],
      ],
    ],
    'uswds_rss' => [
      '#type' => 'textfield',
      '#title' => t('RSS feed'),
      '#default_value' => theme_get_setting('uswds_rss'),
      '#states' => [
        'visible' => [
          ':input[name="uswds_footer_agency"]' => ['checked' => TRUE],
        ],
      ],
    ],
  ];

  // Edge-to-edge behavior.
  $form['edge_to_edge_fieldset'] = [
    '#type' => 'details',
    '#title' => t('Edge-to-edge settings'),
    '#open' => TRUE,
    'uswds_paragraphs_edge_to_edge' => [
      '#type' => 'checkbox',
      '#title' => t('Turn on "edge-to-edge" mode* whenever the full entity being displayed contains Paragraphs.'),
      '#default_value' => theme_get_setting('uswds_paragraphs_edge_to_edge'),
      '#description' => t('*"Edge-to-edge" mode causes the main Content area to be "off the grid", so that Paragraphs can extend across the entire width of the screen. It also disables any sidebars while active.'),
    ],
  ];

  if (!\Drupal::moduleHandler()->moduleExists('paragraphs')) {
    $form['edge_to_edge_fieldset']['uswds_paragraphs_edge_to_edge_help'] = [
      '#type' => 'container',
      'markup' => [
        '#markup' => t('Requires the Paragraphs module to be enabled.'),
      ],
    ];
  }

  // Menu behavior.
  $saved_bypass = theme_get_setting('uswds_menu_bypass');
  if (empty($saved_bypass)) {
    $saved_bypass = [];
  }
  $form['menu_fieldset'] = [
    '#type' => 'details',
    '#title' => t('Menu behavior'),
    '#open' => TRUE,
    'uswds_menu_accordion_duplicate_parent' => [
      '#type' => 'checkbox',
      '#title' => t('Duplicate parent menu items as first item in dropdowns.'),
      '#default_value' => theme_get_setting('uswds_menu_accordion_duplicate_parent'),
    ],
    'uswds_menu_bypass' => [
      '#type' => 'checkboxes',
      '#title' => t('Bypass USWDS menu processing for these menus.'),
      '#description' => t('Choose the menus which you would like to exempt from USWDS alterations. Note that a cache clear may be necessary after changing these settings.'),
      '#options' => [
        'primary_menu' => t('Primary menu'),
        'secondary_menu' => t('Secondary menu'),
        'sidebar_first' => t('Left side menu'),
        'sidebar_second' => t('Right side menu'),
        'footer_menu' => t('Footer menu'),
      ],
      '#default_value' => $saved_bypass,
    ],
  ];

  // Search Box
  $search_bypass = theme_get_setting('uswds_search_bypass');
  if (empty($search_bypass)) {
    $search_bypass = 0;
  }
  $form['search_fieldset'] = [
    '#type' => 'details',
    '#title' => t('Search block'),
    '#open' => TRUE,
    'uswds_search_bypass' => [
      '#type' => 'checkbox',
      '#title' => t('Bypass USWDS search box processing.'),
      '#default_value' => $search_bypass,
      '#description' => t(
        'Check this to turn off search block processing. When on, all instances of search block will be 
         preprocessed with the style below. If you want to use multiple blocks with different styles, it may be best to 
         turn this off and handle the search block preprocessing in a custom way.'
      )
    ],
    'uswds_search_style' => [
      '#type' => 'select',
      '#required' => TRUE,
      '#title' => t('Choose a style of searchbox.'),
      '#options' => [
          'default' => t('Default'),
          'big' => t('Big'),
          'small' => t('Small (icon)'),
      ],
      '#default_value' => theme_get_setting('uswds_search_style') ?? 'small',
    ],
  ];
  $form_optional_label = theme_get_setting('uswds_form_optional_label');
  $form['form_fieldset'] = [
    '#type' => 'fieldset',
    '#title' => t('Form Settings'),
    '#open' => TRUE,
    'uswds_form_optional_label' => [
      '#type' => 'checkbox',
      '#title' => t('Add (optional) text to label'),
      '#description' => t('When a field on a form is not required add "(optional)" after the label.'),
      '#default_value' => $form_optional_label === NULL ? TRUE : $form_optional_label,
    ],
  ];
}
