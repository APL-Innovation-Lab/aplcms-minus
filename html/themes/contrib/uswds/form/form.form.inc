<?php

/**
 * @file
 * Alterations for ALL forms.
 */

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Entity\EntityFormInterface;
use Drupal\webform\WebformSubmissionForm;

/**
 * Implements hook_form_alter().
 */
function uswds_form_alter(&$form, FormStateInterface $form_state, $form_id) {
  // For public-facing pages, limit the width of forms.
  if (!\Drupal::service('router.admin_context')->isAdminRoute()) {

    // Let's exempt entity forms though; they should really be full width.
    $form_object = $form_state->getFormObject();
    if ($form_object instanceof EntityFormInterface) {
      if (!$form_object instanceof WebformSubmissionForm) {
        $form['#attributes']['class'][] = 'uswds-form-full';
        $form['#attributes']['class'][] = 'uswds-form-entity';
        return;
      }
    }

    $form['#attributes']['class'][] = 'usa-form';
  }
}
