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

/* themes/contrib/aplpa/templates/block/block.html.twig */
class __TwigTemplate_198bf34eeb11a198d163ee44b9c40fde extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'content' => [$this, 'block_content'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 32
        $context["classes"] = [0 => "block", 1 => ("block-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source,         // line 34
($context["configuration"] ?? null), "provider", [], "any", false, false, true, 34), 34, $this->source))), 2 => ("block-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 35
($context["plugin_id"] ?? null), 35, $this->source))), 3 => ((        // line 36
($context["bundle"] ?? null)) ? (("block--type-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["bundle"] ?? null), 36, $this->source)))) : ("")), 4 => ((        // line 37
($context["view_mode"] ?? null)) ? (("block--view-mode-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["view_mode"] ?? null), 37, $this->source)))) : (""))];
        // line 40
        echo "<div";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 40), 40, $this->source), "html", null, true);
        echo ">
  ";
        // line 41
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_prefix"] ?? null), 41, $this->source), "html", null, true);
        echo "
  ";
        // line 42
        if (($context["label"] ?? null)) {
            // line 43
            echo "    <h2";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_attributes"] ?? null), 43, $this->source), "html", null, true);
            echo ">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 43, $this->source), "html", null, true);
            echo "</h2>
  ";
        }
        // line 45
        echo "  ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_suffix"] ?? null), 45, $this->source), "html", null, true);
        echo "
  ";
        // line 46
        $this->displayBlock('content', $context, $blocks);
        // line 49
        echo "</div>
";
    }

    // line 46
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 47
        echo "    ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null), 47, $this->source), "html", null, true);
        echo "
  ";
    }

    public function getTemplateName()
    {
        return "themes/contrib/aplpa/templates/block/block.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  81 => 47,  77 => 46,  72 => 49,  70 => 46,  65 => 45,  57 => 43,  55 => 42,  51 => 41,  46 => 40,  44 => 37,  43 => 36,  42 => 35,  41 => 34,  40 => 32,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/contrib/aplpa/templates/block/block.html.twig", "/var/www/html/themes/contrib/aplpa/templates/block/block.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 32, "if" => 42, "block" => 46);
        static $filters = array("clean_class" => 34, "escape" => 40);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'block'],
                ['clean_class', 'escape'],
                []
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
