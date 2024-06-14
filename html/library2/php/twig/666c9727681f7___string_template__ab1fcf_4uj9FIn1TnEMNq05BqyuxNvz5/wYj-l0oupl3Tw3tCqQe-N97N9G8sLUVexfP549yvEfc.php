<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* __string_template__ab1fcf84eeffde45bf430f9d582af918 */
class __TwigTemplate_d845ec8e98cf211df6ec80f037087569 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        $context["myid"] = twig_spaceless(twig_striptags($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["field_item_list_category"] ?? null), 1, $this->source))));
        // line 2
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, views_embed_view("apl_item_carousels_2022", "block_2_spanish", $this->sandbox->ensureToStringAllowed(($context["myid"] ?? null), 2, $this->source)), "html", null, true);
    }

    public function getTemplateName()
    {
        return "__string_template__ab1fcf84eeffde45bf430f9d582af918";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  41 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "__string_template__ab1fcf84eeffde45bf430f9d582af918", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 1);
        static $filters = array("spaceless" => 1, "striptags" => 1, "render" => 1, "escape" => 2);
        static $functions = array("drupal_view" => 2);

        try {
            $this->sandbox->checkSecurity(
                ['set'],
                ['spaceless', 'striptags', 'render', 'escape'],
                ['drupal_view']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
