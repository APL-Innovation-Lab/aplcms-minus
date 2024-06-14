<?php

namespace Drupal\langcode_updater\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\langcode_updater\MigrateLangcode;

class LangcodeUpdaterForm extends FormBase {

  protected $migrateLangcode;

  public function __construct(MigrateLangcode $migrateLangcode) {
    $this->migrateLangcode = $migrateLangcode;
  }

  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('langcode_updater.migrate_langcode')
    );
  }

  public function getFormId() {
    return 'langcode_updater_form';
  }

  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['actions']['#type'] = 'actions';
    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Update Language Codes'),
      '#button_type' => 'primary',
    ];
    return $form;
  }

  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->migrateLangcode->updateLangcodes();
    $this->messenger()->addMessage($this->t('Language codes updated.'));
  }
}