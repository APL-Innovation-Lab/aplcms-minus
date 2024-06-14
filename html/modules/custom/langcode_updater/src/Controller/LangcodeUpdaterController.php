<?php

namespace Drupal\langcode_updater\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\langcode_updater\MigrateLangcode;

class LangcodeUpdaterController extends ControllerBase {

  protected $migrateLangcode;

  public function __construct(MigrateLangcode $migrateLangcode) {
    $this->migrateLangcode = $migrateLangcode;
  }

  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('langcode_updater.migrate_langcode')
    );
  }

  public function update() {
    $this->migrateLangcode->updateLangcodes();
    return $this->redirect('langcode_updater.form');
  }
}