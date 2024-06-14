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

/* themes/contrib/aplpa/templates/form/form-element-label.html.twig */
class __TwigTemplate_c1b47ec71220f7190dbda2e7debd306188b583afd5d6f428ed945cef51324f65 extends \Twig\Template
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
        // line 16
        $context["classes"] = [0 => (( !(        // line 17
($context["is_checkbox"] ?? null) || ($context["is_radio"] ?? null))) ? ("usa-label") : ("")), 1 => ((        // line 18
($context["is_checkbox"] ?? null)) ? ("usa-checkbox__label") : ("")), 2 => ((        // line 19
($context["is_radio"] ?? null)) ? ("usa-radio__label") : ("")), 3 => "control-label", 4 => (((        // line 21
($context["title_display"] ?? null) == "after")) ? ("option") : ("")), 5 => ((((        // line 22
($context["title_display"] ?? null) == "invisible") &&  !(($context["is_checkbox"] ?? null) || ($context["is_radio"] ?? null)))) ? ("usa-sr-only") : ("")), 6 => ((        // line 23
($context["required"] ?? null)) ? ("js-form-required") : ("")), 7 => ((        // line 24
($context["required"] ?? null)) ? ("form-required") : (""))];
        // line 27
        if ((( !twig_test_empty(($context["title"] ?? null)) && (($context["title_display"] ?? null) == "invisible")) && (($context["is_checkbox"] ?? null) || ($context["is_radio"] ?? null)))) {
            // line 32
            $context["attributes"] = twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "setAttribute", [0 => "title", 1 => ($context["title"] ?? null)], "method", false, false, true, 32);
            // line 33
            $context["title"] = null;
        }
        // line 39
        if ((( !twig_test_empty(($context["title"] ?? null)) || ($context["is_checkbox"] ?? null)) || ($context["is_radio"] ?? null))) {
            // line 40
            echo "<label";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 40), 40, $this->source), "html", null, true);
            echo ">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["element"] ?? null), 40, $this->source), "html", null, true);
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null), 40, $this->source), "html", null, true);
            // line 41
            if (($context["description"] ?? null)) {
                // line 42
                echo "<p class=\"help-block\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["description"] ?? null), 42, $this->source), "html", null, true);
                echo "</p>";
            }
            // line 44
            echo "</label>";
        }
    }

    public function getTemplateName()
    {
        return "themes/contrib/aplpa/templates/form/form-element-label.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  70 => 44,  65 => 42,  63 => 41,  57 => 40,  55 => 39,  52 => 33,  50 => 32,  48 => 27,  46 => 24,  45 => 23,  44 => 22,  43 => 21,  42 => 19,  41 => 18,  40 => 17,  39 => 16,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/contrib/aplpa/templates/form/form-element-label.html.twig", "/var/www/html/html/themes/contrib/aplpa/templates/form/form-element-label.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 16, "if" => 27);
        static $filters = array("escape" => 40);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['escape'],
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
